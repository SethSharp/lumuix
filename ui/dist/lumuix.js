var dc = (e) => {
  throw TypeError(e);
};
var Fm = (e, t, n) => t.has(e) || dc("Cannot " + n);
var ja = (e, t, n) => (Fm(e, t, "read from private field"), n ? n.call(e) : t.get(e)), fc = (e, t, n) => t.has(e) ? dc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as ha from "vue";
import { inject as An, provide as wt, computed as E, ref as M, shallowRef as en, watch as ee, getCurrentScope as hi, onScopeDispose as vi, shallowReadonly as ua, unref as l, defineComponent as _, toRefs as ce, createBlock as k, openBlock as g, withCtx as y, renderSlot as w, getCurrentInstance as Ne, toRef as Al, camelize as Ca, withKeys as Ge, h as je, nextTick as ae, createVNode as P, mergeProps as O, createCommentVNode as te, normalizeProps as Z, guardReactiveProps as Q, createTextVNode as fe, withDirectives as Yn, vShow as mi, onMounted as le, watchSyncEffect as Cf, withModifiers as De, toDisplayString as be, isRef as lt, createElementBlock as V, Fragment as ve, renderList as Ye, resolveDynamicComponent as et, useSlots as kf, onBeforeMount as Nm, Teleport as Xn, watchEffect as ge, onBeforeUnmount as gi, toHandlers as Lm, normalizeStyle as qt, toHandlerKey as Sf, Comment as El, cloneVNode as $f, markRaw as Tf, onUnmounted as ze, createElementVNode as $e, vModelSelect as Vm, onBeforeUpdate as zm, onUpdated as qm, readonly as Ra, toRaw as mr, reactive as Cn, mergeDefaults as Bl, watchPostEffect as Ml, effectScope as Ol, customRef as Dl, normalizeClass as j, toValue as Te, withMemo as Hm, hasInjectionContext as Af, mergeModels as Pr, useModel as Pl, vModelDynamic as Wm, vModelText as Um, isVNode as Km } from "vue";
function jm(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(i) => {
    const s = An(a, i);
    if (s || s === null) return s;
    throw new Error(
      `Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`
    );
  }, (i) => (wt(a, i), i)];
}
const Gm = ["top", "right", "bottom", "left"], kn = Math.min, st = Math.max, Ir = Math.round, Yo = Math.floor, Rt = (e) => ({
  x: e,
  y: e
}), Ym = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Xm = {
  start: "end",
  end: "start"
};
function Os(e, t, n) {
  return st(e, kn(t, n));
}
function nn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function an(e) {
  return e.split("-")[0];
}
function Fa(e) {
  return e.split("-")[1];
}
function Il(e) {
  return e === "x" ? "y" : "x";
}
function Rl(e) {
  return e === "y" ? "height" : "width";
}
const Zm = /* @__PURE__ */ new Set(["top", "bottom"]);
function It(e) {
  return Zm.has(an(e)) ? "y" : "x";
}
function Fl(e) {
  return Il(It(e));
}
function Jm(e, t, n) {
  n === void 0 && (n = !1);
  const a = Fa(e), o = Fl(e), r = Rl(o);
  let i = o === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (i = Rr(i)), [i, Rr(i)];
}
function Qm(e) {
  const t = Rr(e);
  return [Ds(e), t, Ds(t)];
}
function Ds(e) {
  return e.replace(/start|end/g, (t) => Xm[t]);
}
const pc = ["left", "right"], hc = ["right", "left"], eg = ["top", "bottom"], tg = ["bottom", "top"];
function ng(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? hc : pc : t ? pc : hc;
    case "left":
    case "right":
      return t ? eg : tg;
    default:
      return [];
  }
}
function ag(e, t, n, a) {
  const o = Fa(e);
  let r = ng(an(e), n === "start", a);
  return o && (r = r.map((i) => i + "-" + o), t && (r = r.concat(r.map(Ds)))), r;
}
function Rr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ym[t]);
}
function og(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ef(e) {
  return typeof e != "number" ? og(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Fr(e) {
  const {
    x: t,
    y: n,
    width: a,
    height: o
  } = e;
  return {
    width: a,
    height: o,
    top: n,
    left: t,
    right: t + a,
    bottom: n + o,
    x: t,
    y: n
  };
}
function vc(e, t, n) {
  let {
    reference: a,
    floating: o
  } = e;
  const r = It(t), i = Fl(t), s = Rl(i), u = an(t), c = r === "y", d = a.x + a.width / 2 - o.width / 2, f = a.y + a.height / 2 - o.height / 2, p = a[s] / 2 - o[s] / 2;
  let h;
  switch (u) {
    case "top":
      h = {
        x: d,
        y: a.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: a.y + a.height
      };
      break;
    case "right":
      h = {
        x: a.x + a.width,
        y: f
      };
      break;
    case "left":
      h = {
        x: a.x - o.width,
        y: f
      };
      break;
    default:
      h = {
        x: a.x,
        y: a.y
      };
  }
  switch (Fa(t)) {
    case "start":
      h[i] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      h[i] += p * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const rg = async (e, t, n) => {
  const {
    placement: a = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: i
  } = n, s = r.filter(Boolean), u = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = vc(c, a, u), p = a, h = {}, v = 0;
  for (let m = 0; m < s.length; m++) {
    const {
      name: b,
      fn: x
    } = s[m], {
      x: S,
      y: C,
      data: T,
      reset: $
    } = await x({
      x: d,
      y: f,
      initialPlacement: a,
      placement: p,
      strategy: o,
      middlewareData: h,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = S ?? d, f = C ?? f, h = {
      ...h,
      [b]: {
        ...h[b],
        ...T
      }
    }, $ && v <= 50 && (v++, typeof $ == "object" && ($.placement && (p = $.placement), $.rects && (c = $.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : $.rects), {
      x: d,
      y: f
    } = vc(c, p, u)), m = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function mo(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: a,
    y: o,
    platform: r,
    rects: i,
    elements: s,
    strategy: u
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = nn(t, e), v = Ef(h), b = s[p ? f === "floating" ? "reference" : "floating" : f], x = Fr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(b))) == null || n ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: u
  })), S = f === "floating" ? {
    x: a,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, C = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(s.floating)), T = await (r.isElement == null ? void 0 : r.isElement(C)) ? await (r.getScale == null ? void 0 : r.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = Fr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: S,
    offsetParent: C,
    strategy: u
  }) : S);
  return {
    top: (x.top - $.top + v.top) / T.y,
    bottom: ($.bottom - x.bottom + v.bottom) / T.y,
    left: (x.left - $.left + v.left) / T.x,
    right: ($.right - x.right + v.right) / T.x
  };
}
const ig = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: a,
      placement: o,
      rects: r,
      platform: i,
      elements: s,
      middlewareData: u
    } = t, {
      element: c,
      padding: d = 0
    } = nn(e, t) || {};
    if (c == null)
      return {};
    const f = Ef(d), p = {
      x: n,
      y: a
    }, h = Fl(o), v = Rl(h), m = await i.getDimensions(c), b = h === "y", x = b ? "top" : "left", S = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", T = r.reference[v] + r.reference[h] - p[h] - r.floating[v], $ = p[h] - r.reference[h], B = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let A = B ? B[C] : 0;
    (!A || !await (i.isElement == null ? void 0 : i.isElement(B))) && (A = s.floating[C] || r.floating[v]);
    const R = T / 2 - $ / 2, L = A / 2 - m[v] / 2 - 1, D = kn(f[x], L), N = kn(f[S], L), I = D, G = A - m[v] - N, z = A / 2 - m[v] / 2 + R, Y = Os(I, z, G), ne = !u.arrow && Fa(o) != null && z !== Y && r.reference[v] / 2 - (z < I ? D : N) - m[v] / 2 < 0, _e = ne ? z < I ? z - I : z - G : 0;
    return {
      [h]: p[h] + _e,
      data: {
        [h]: Y,
        centerOffset: z - Y - _e,
        ...ne && {
          alignmentOffset: _e
        }
      },
      reset: ne
    };
  }
}), sg = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, a;
      const {
        placement: o,
        middlewareData: r,
        rects: i,
        initialPlacement: s,
        platform: u,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: m = !0,
        ...b
      } = nn(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const x = an(o), S = It(s), C = an(s) === s, T = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), $ = p || (C || !m ? [Rr(s)] : Qm(s)), B = v !== "none";
      !p && B && $.push(...ag(s, m, v, T));
      const A = [s, ...$], R = await mo(t, b), L = [];
      let D = ((a = r.flip) == null ? void 0 : a.overflows) || [];
      if (d && L.push(R[x]), f) {
        const z = Jm(o, i, T);
        L.push(R[z[0]], R[z[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: L
      }], !L.every((z) => z <= 0)) {
        var N, I;
        const z = (((N = r.flip) == null ? void 0 : N.index) || 0) + 1, Y = A[z];
        if (Y && (!(f === "alignment" ? S !== It(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((he) => It(he.placement) === S ? he.overflows[0] > 0 : !0)))
          return {
            data: {
              index: z,
              overflows: D
            },
            reset: {
              placement: Y
            }
          };
        let ne = (I = D.filter((_e) => _e.overflows[0] <= 0).sort((_e, he) => _e.overflows[1] - he.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!ne)
          switch (h) {
            case "bestFit": {
              var G;
              const _e = (G = D.filter((he) => {
                if (B) {
                  const q = It(he.placement);
                  return q === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((he) => [he.placement, he.overflows.filter((q) => q > 0).reduce((q, oe) => q + oe, 0)]).sort((he, q) => he[1] - q[1])[0]) == null ? void 0 : G[0];
              _e && (ne = _e);
              break;
            }
            case "initialPlacement":
              ne = s;
              break;
          }
        if (o !== ne)
          return {
            reset: {
              placement: ne
            }
          };
      }
      return {};
    }
  };
};
function mc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function gc(e) {
  return Gm.some((t) => e[t] >= 0);
}
const lg = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: a = "referenceHidden",
        ...o
      } = nn(e, t);
      switch (a) {
        case "referenceHidden": {
          const r = await mo(t, {
            ...o,
            elementContext: "reference"
          }), i = mc(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: gc(i)
            }
          };
        }
        case "escaped": {
          const r = await mo(t, {
            ...o,
            altBoundary: !0
          }), i = mc(r, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: gc(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Bf = /* @__PURE__ */ new Set(["left", "top"]);
async function ug(e, t) {
  const {
    placement: n,
    platform: a,
    elements: o
  } = e, r = await (a.isRTL == null ? void 0 : a.isRTL(o.floating)), i = an(n), s = Fa(n), u = It(n) === "y", c = Bf.has(i) ? -1 : 1, d = r && u ? -1 : 1, f = nn(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: v
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof v == "number" && (h = s === "end" ? v * -1 : v), u ? {
    x: h * d,
    y: p * c
  } : {
    x: p * c,
    y: h * d
  };
}
const cg = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, a;
      const {
        x: o,
        y: r,
        placement: i,
        middlewareData: s
      } = t, u = await ug(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (a = s.arrow) != null && a.alignmentOffset ? {} : {
        x: o + u.x,
        y: r + u.y,
        data: {
          ...u,
          placement: i
        }
      };
    }
  };
}, dg = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: a,
        placement: o
      } = t, {
        mainAxis: r = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x,
              y: S
            } = b;
            return {
              x,
              y: S
            };
          }
        },
        ...u
      } = nn(e, t), c = {
        x: n,
        y: a
      }, d = await mo(t, u), f = It(an(o)), p = Il(f);
      let h = c[p], v = c[f];
      if (r) {
        const b = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", S = h + d[b], C = h - d[x];
        h = Os(S, h, C);
      }
      if (i) {
        const b = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", S = v + d[b], C = v - d[x];
        v = Os(S, v, C);
      }
      const m = s.fn({
        ...t,
        [p]: h,
        [f]: v
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - a,
          enabled: {
            [p]: r,
            [f]: i
          }
        }
      };
    }
  };
}, fg = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: a,
        placement: o,
        rects: r,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: u = !0,
        crossAxis: c = !0
      } = nn(e, t), d = {
        x: n,
        y: a
      }, f = It(o), p = Il(f);
      let h = d[p], v = d[f];
      const m = nn(s, t), b = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (u) {
        const C = p === "y" ? "height" : "width", T = r.reference[p] - r.floating[C] + b.mainAxis, $ = r.reference[p] + r.reference[C] - b.mainAxis;
        h < T ? h = T : h > $ && (h = $);
      }
      if (c) {
        var x, S;
        const C = p === "y" ? "width" : "height", T = Bf.has(an(o)), $ = r.reference[f] - r.floating[C] + (T && ((x = i.offset) == null ? void 0 : x[f]) || 0) + (T ? 0 : b.crossAxis), B = r.reference[f] + r.reference[C] + (T ? 0 : ((S = i.offset) == null ? void 0 : S[f]) || 0) - (T ? b.crossAxis : 0);
        v < $ ? v = $ : v > B && (v = B);
      }
      return {
        [p]: h,
        [f]: v
      };
    }
  };
}, pg = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, a;
      const {
        placement: o,
        rects: r,
        platform: i,
        elements: s
      } = t, {
        apply: u = () => {
        },
        ...c
      } = nn(e, t), d = await mo(t, c), f = an(o), p = Fa(o), h = It(o) === "y", {
        width: v,
        height: m
      } = r.floating;
      let b, x;
      f === "top" || f === "bottom" ? (b = f, x = p === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (x = f, b = p === "end" ? "top" : "bottom");
      const S = m - d.top - d.bottom, C = v - d.left - d.right, T = kn(m - d[b], S), $ = kn(v - d[x], C), B = !t.middlewareData.shift;
      let A = T, R = $;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = C), (a = t.middlewareData.shift) != null && a.enabled.y && (A = S), B && !p) {
        const D = st(d.left, 0), N = st(d.right, 0), I = st(d.top, 0), G = st(d.bottom, 0);
        h ? R = v - 2 * (D !== 0 || N !== 0 ? D + N : st(d.left, d.right)) : A = m - 2 * (I !== 0 || G !== 0 ? I + G : st(d.top, d.bottom));
      }
      await u({
        ...t,
        availableWidth: R,
        availableHeight: A
      });
      const L = await i.getDimensions(s.floating);
      return v !== L.width || m !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function yi() {
  return typeof window < "u";
}
function Zn(e) {
  return Nl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ut(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ht(e) {
  var t;
  return (t = (Nl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Nl(e) {
  return yi() ? e instanceof Node || e instanceof ut(e).Node : !1;
}
function $t(e) {
  return yi() ? e instanceof Element || e instanceof ut(e).Element : !1;
}
function Lt(e) {
  return yi() ? e instanceof HTMLElement || e instanceof ut(e).HTMLElement : !1;
}
function yc(e) {
  return !yi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ut(e).ShadowRoot;
}
const hg = /* @__PURE__ */ new Set(["inline", "contents"]);
function Bo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: a,
    display: o
  } = Tt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !hg.has(o);
}
const vg = /* @__PURE__ */ new Set(["table", "td", "th"]);
function mg(e) {
  return vg.has(Zn(e));
}
const gg = [":popover-open", ":modal"];
function bi(e) {
  return gg.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const yg = ["transform", "translate", "scale", "rotate", "perspective"], bg = ["transform", "translate", "scale", "rotate", "perspective", "filter"], _g = ["paint", "layout", "strict", "content"];
function Ll(e) {
  const t = Vl(), n = $t(e) ? Tt(e) : e;
  return yg.some((a) => n[a] ? n[a] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || bg.some((a) => (n.willChange || "").includes(a)) || _g.some((a) => (n.contain || "").includes(a));
}
function xg(e) {
  let t = Sn(e);
  for (; Lt(t) && !ka(t); ) {
    if (Ll(t))
      return t;
    if (bi(t))
      return null;
    t = Sn(t);
  }
  return null;
}
function Vl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const wg = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ka(e) {
  return wg.has(Zn(e));
}
function Tt(e) {
  return ut(e).getComputedStyle(e);
}
function _i(e) {
  return $t(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Sn(e) {
  if (Zn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    yc(e) && e.host || // Fallback.
    Ht(e)
  );
  return yc(t) ? t.host : t;
}
function Mf(e) {
  const t = Sn(e);
  return ka(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Lt(t) && Bo(t) ? t : Mf(t);
}
function go(e, t, n) {
  var a;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Mf(e), r = o === ((a = e.ownerDocument) == null ? void 0 : a.body), i = ut(o);
  if (r) {
    const s = Ps(i);
    return t.concat(i, i.visualViewport || [], Bo(o) ? o : [], s && n ? go(s) : []);
  }
  return t.concat(o, go(o, [], n));
}
function Ps(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Of(e) {
  const t = Tt(e);
  let n = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
  const o = Lt(e), r = o ? e.offsetWidth : n, i = o ? e.offsetHeight : a, s = Ir(n) !== r || Ir(a) !== i;
  return s && (n = r, a = i), {
    width: n,
    height: a,
    $: s
  };
}
function zl(e) {
  return $t(e) ? e : e.contextElement;
}
function ma(e) {
  const t = zl(e);
  if (!Lt(t))
    return Rt(1);
  const n = t.getBoundingClientRect(), {
    width: a,
    height: o,
    $: r
  } = Of(t);
  let i = (r ? Ir(n.width) : n.width) / a, s = (r ? Ir(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Cg = /* @__PURE__ */ Rt(0);
function Df(e) {
  const t = ut(e);
  return !Vl() || !t.visualViewport ? Cg : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function kg(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ut(e) ? !1 : t;
}
function Un(e, t, n, a) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = zl(e);
  let i = Rt(1);
  t && (a ? $t(a) && (i = ma(a)) : i = ma(e));
  const s = kg(r, n, a) ? Df(r) : Rt(0);
  let u = (o.left + s.x) / i.x, c = (o.top + s.y) / i.y, d = o.width / i.x, f = o.height / i.y;
  if (r) {
    const p = ut(r), h = a && $t(a) ? ut(a) : a;
    let v = p, m = Ps(v);
    for (; m && a && h !== v; ) {
      const b = ma(m), x = m.getBoundingClientRect(), S = Tt(m), C = x.left + (m.clientLeft + parseFloat(S.paddingLeft)) * b.x, T = x.top + (m.clientTop + parseFloat(S.paddingTop)) * b.y;
      u *= b.x, c *= b.y, d *= b.x, f *= b.y, u += C, c += T, v = ut(m), m = Ps(v);
    }
  }
  return Fr({
    width: d,
    height: f,
    x: u,
    y: c
  });
}
function xi(e, t) {
  const n = _i(e).scrollLeft;
  return t ? t.left + n : Un(Ht(e)).left + n;
}
function Pf(e, t) {
  const n = e.getBoundingClientRect(), a = n.left + t.scrollLeft - xi(e, n), o = n.top + t.scrollTop;
  return {
    x: a,
    y: o
  };
}
function Sg(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: a,
    strategy: o
  } = e;
  const r = o === "fixed", i = Ht(a), s = t ? bi(t.floating) : !1;
  if (a === i || s && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Rt(1);
  const d = Rt(0), f = Lt(a);
  if ((f || !f && !r) && ((Zn(a) !== "body" || Bo(i)) && (u = _i(a)), Lt(a))) {
    const h = Un(a);
    c = ma(a), d.x = h.x + a.clientLeft, d.y = h.y + a.clientTop;
  }
  const p = i && !f && !r ? Pf(i, u) : Rt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - u.scrollLeft * c.x + d.x + p.x,
    y: n.y * c.y - u.scrollTop * c.y + d.y + p.y
  };
}
function $g(e) {
  return Array.from(e.getClientRects());
}
function Tg(e) {
  const t = Ht(e), n = _i(e), a = e.ownerDocument.body, o = st(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth), r = st(t.scrollHeight, t.clientHeight, a.scrollHeight, a.clientHeight);
  let i = -n.scrollLeft + xi(e);
  const s = -n.scrollTop;
  return Tt(a).direction === "rtl" && (i += st(t.clientWidth, a.clientWidth) - o), {
    width: o,
    height: r,
    x: i,
    y: s
  };
}
const bc = 25;
function Ag(e, t) {
  const n = ut(e), a = Ht(e), o = n.visualViewport;
  let r = a.clientWidth, i = a.clientHeight, s = 0, u = 0;
  if (o) {
    r = o.width, i = o.height;
    const d = Vl();
    (!d || d && t === "fixed") && (s = o.offsetLeft, u = o.offsetTop);
  }
  const c = xi(a);
  if (c <= 0) {
    const d = a.ownerDocument, f = d.body, p = getComputedStyle(f), h = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, v = Math.abs(a.clientWidth - f.clientWidth - h);
    v <= bc && (r -= v);
  } else c <= bc && (r += c);
  return {
    width: r,
    height: i,
    x: s,
    y: u
  };
}
const Eg = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Bg(e, t) {
  const n = Un(e, !0, t === "fixed"), a = n.top + e.clientTop, o = n.left + e.clientLeft, r = Lt(e) ? ma(e) : Rt(1), i = e.clientWidth * r.x, s = e.clientHeight * r.y, u = o * r.x, c = a * r.y;
  return {
    width: i,
    height: s,
    x: u,
    y: c
  };
}
function _c(e, t, n) {
  let a;
  if (t === "viewport")
    a = Ag(e, n);
  else if (t === "document")
    a = Tg(Ht(e));
  else if ($t(t))
    a = Bg(t, n);
  else {
    const o = Df(e);
    a = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Fr(a);
}
function If(e, t) {
  const n = Sn(e);
  return n === t || !$t(n) || ka(n) ? !1 : Tt(n).position === "fixed" || If(n, t);
}
function Mg(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let a = go(e, [], !1).filter((s) => $t(s) && Zn(s) !== "body"), o = null;
  const r = Tt(e).position === "fixed";
  let i = r ? Sn(e) : e;
  for (; $t(i) && !ka(i); ) {
    const s = Tt(i), u = Ll(i);
    !u && s.position === "fixed" && (o = null), (r ? !u && !o : !u && s.position === "static" && !!o && Eg.has(o.position) || Bo(i) && !u && If(e, i)) ? a = a.filter((d) => d !== i) : o = s, i = Sn(i);
  }
  return t.set(e, a), a;
}
function Og(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: a,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? bi(t) ? [] : Mg(t, this._c) : [].concat(n), a], s = i[0], u = i.reduce((c, d) => {
    const f = _c(t, d, o);
    return c.top = st(f.top, c.top), c.right = kn(f.right, c.right), c.bottom = kn(f.bottom, c.bottom), c.left = st(f.left, c.left), c;
  }, _c(t, s, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Dg(e) {
  const {
    width: t,
    height: n
  } = Of(e);
  return {
    width: t,
    height: n
  };
}
function Pg(e, t, n) {
  const a = Lt(t), o = Ht(t), r = n === "fixed", i = Un(e, !0, r, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Rt(0);
  function c() {
    u.x = xi(o);
  }
  if (a || !a && !r)
    if ((Zn(t) !== "body" || Bo(o)) && (s = _i(t)), a) {
      const h = Un(t, !0, r, t);
      u.x = h.x + t.clientLeft, u.y = h.y + t.clientTop;
    } else o && c();
  r && !a && o && c();
  const d = o && !a && !r ? Pf(o, s) : Rt(0), f = i.left + s.scrollLeft - u.x - d.x, p = i.top + s.scrollTop - u.y - d.y;
  return {
    x: f,
    y: p,
    width: i.width,
    height: i.height
  };
}
function os(e) {
  return Tt(e).position === "static";
}
function xc(e, t) {
  if (!Lt(e) || Tt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ht(e) === n && (n = n.ownerDocument.body), n;
}
function Rf(e, t) {
  const n = ut(e);
  if (bi(e))
    return n;
  if (!Lt(e)) {
    let o = Sn(e);
    for (; o && !ka(o); ) {
      if ($t(o) && !os(o))
        return o;
      o = Sn(o);
    }
    return n;
  }
  let a = xc(e, t);
  for (; a && mg(a) && os(a); )
    a = xc(a, t);
  return a && ka(a) && os(a) && !Ll(a) ? n : a || xg(e) || n;
}
const Ig = async function(e) {
  const t = this.getOffsetParent || Rf, n = this.getDimensions, a = await n(e.floating);
  return {
    reference: Pg(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: a.width,
      height: a.height
    }
  };
};
function Rg(e) {
  return Tt(e).direction === "rtl";
}
const Fg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Sg,
  getDocumentElement: Ht,
  getClippingRect: Og,
  getOffsetParent: Rf,
  getElementRects: Ig,
  getClientRects: $g,
  getDimensions: Dg,
  getScale: ma,
  isElement: $t,
  isRTL: Rg
};
function Ff(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ng(e, t) {
  let n = null, a;
  const o = Ht(e);
  function r() {
    var s;
    clearTimeout(a), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, u) {
    s === void 0 && (s = !1), u === void 0 && (u = 1), r();
    const c = e.getBoundingClientRect(), {
      left: d,
      top: f,
      width: p,
      height: h
    } = c;
    if (s || t(), !p || !h)
      return;
    const v = Yo(f), m = Yo(o.clientWidth - (d + p)), b = Yo(o.clientHeight - (f + h)), x = Yo(d), C = {
      rootMargin: -v + "px " + -m + "px " + -b + "px " + -x + "px",
      threshold: st(0, kn(1, u)) || 1
    };
    let T = !0;
    function $(B) {
      const A = B[0].intersectionRatio;
      if (A !== u) {
        if (!T)
          return i();
        A ? i(!1, A) : a = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !Ff(c, e.getBoundingClientRect()) && i(), T = !1;
    }
    try {
      n = new IntersectionObserver($, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver($, C);
    }
    n.observe(e);
  }
  return i(!0), r;
}
function Nf(e, t, n, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: r = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = a, c = zl(e), d = o || r ? [...c ? go(c) : [], ...go(t)] : [];
  d.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), r && x.addEventListener("resize", n);
  });
  const f = c && s ? Ng(c, n) : null;
  let p = -1, h = null;
  i && (h = new ResizeObserver((x) => {
    let [S] = x;
    S && S.target === c && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var C;
      (C = h) == null || C.observe(t);
    })), n();
  }), c && !u && h.observe(c), h.observe(t));
  let v, m = u ? Un(e) : null;
  u && b();
  function b() {
    const x = Un(e);
    m && !Ff(m, x) && n(), m = x, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var x;
    d.forEach((S) => {
      o && S.removeEventListener("scroll", n), r && S.removeEventListener("resize", n);
    }), f == null || f(), (x = h) == null || x.disconnect(), h = null, u && cancelAnimationFrame(v);
  };
}
const Lf = cg, Vf = dg, Nr = sg, zf = pg, qf = lg, Lg = ig, Hf = fg, Vg = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), o = {
    platform: Fg,
    ...n
  }, r = {
    ...o.platform,
    _c: a
  };
  return rg(e, t, {
    ...o,
    platform: r
  });
};
function zg(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Is(e) {
  if (zg(e)) {
    const t = e.$el;
    return Nl(t) && Zn(t) === "#comment" ? null : t;
  }
  return e;
}
function pa(e) {
  return typeof e == "function" ? e() : l(e);
}
function Wf(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Is(pa(e.element));
      return n == null ? {} : Lg({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Uf(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function wc(e, t) {
  const n = Uf(e);
  return Math.round(t * n) / n;
}
function Kf(e, t, n) {
  n === void 0 && (n = {});
  const a = n.whileElementsMounted, o = E(() => {
    var A;
    return (A = pa(n.open)) != null ? A : !0;
  }), r = E(() => pa(n.middleware)), i = E(() => {
    var A;
    return (A = pa(n.placement)) != null ? A : "bottom";
  }), s = E(() => {
    var A;
    return (A = pa(n.strategy)) != null ? A : "absolute";
  }), u = E(() => {
    var A;
    return (A = pa(n.transform)) != null ? A : !0;
  }), c = E(() => Is(e.value)), d = E(() => Is(t.value)), f = M(0), p = M(0), h = M(s.value), v = M(i.value), m = en({}), b = M(!1), x = E(() => {
    const A = {
      position: h.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return A;
    const R = wc(d.value, f.value), L = wc(d.value, p.value);
    return u.value ? {
      ...A,
      transform: "translate(" + R + "px, " + L + "px)",
      ...Uf(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: h.value,
      left: R + "px",
      top: L + "px"
    };
  });
  let S;
  function C() {
    if (c.value == null || d.value == null)
      return;
    const A = o.value;
    Vg(c.value, d.value, {
      middleware: r.value,
      placement: i.value,
      strategy: s.value
    }).then((R) => {
      f.value = R.x, p.value = R.y, h.value = R.strategy, v.value = R.placement, m.value = R.middlewareData, b.value = A !== !1;
    });
  }
  function T() {
    typeof S == "function" && (S(), S = void 0);
  }
  function $() {
    if (T(), a === void 0) {
      C();
      return;
    }
    if (c.value != null && d.value != null) {
      S = a(c.value, d.value, C);
      return;
    }
  }
  function B() {
    o.value || (b.value = !1);
  }
  return ee([r, i, s, o], C, {
    flush: "sync"
  }), ee([c, d], $, {
    flush: "sync"
  }), ee(o, B, {
    flush: "sync"
  }), hi() && vi(T), {
    x: ua(f),
    y: ua(p),
    strategy: ua(h),
    placement: ua(v),
    middlewareData: ua(m),
    isPositioned: ua(b),
    floatingStyles: x,
    update: C
  };
}
function pe(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(o) => {
    const r = An(a, o);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (wt(a, o), o)];
}
function ql(e, t, n) {
  const a = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
function Lr(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function qg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hg = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var a, o, r;
    if (Array.isArray(t)) {
      if (a = t.length, a != n.length) return !1;
      for (o = a; o-- !== 0; )
        if (!e(t[o], n[o])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
    if (r = Object.keys(t), a = r.length, a !== Object.keys(n).length) return !1;
    for (o = a; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, r[o])) return !1;
    for (o = a; o-- !== 0; ) {
      var i = r[o];
      if (!e(t[i], n[i])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const In = /* @__PURE__ */ qg(Hg);
function gr(e) {
  return e == null;
}
function Wg(e, t) {
  var n;
  const a = en();
  return ge(() => {
    a.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Ra(a);
}
function Jn(e) {
  return hi() ? (vi(e), !0) : !1;
}
function Ug() {
  const e = /* @__PURE__ */ new Set(), t = (n) => {
    e.delete(n);
  };
  return {
    on: (n) => {
      e.add(n);
      const a = () => t(n);
      return Jn(a), {
        off: a
      };
    },
    off: t,
    trigger: (...n) => Promise.all(Array.from(e).map((a) => a(...n)))
  };
}
function Kg(e) {
  let t = !1, n;
  const a = Ol(!0);
  return (...o) => (t || (n = a.run(() => e(...o)), t = !0), n);
}
function jf(e) {
  let t = 0, n, a;
  const o = () => {
    t -= 1, a && t <= 0 && (a.stop(), n = void 0, a = void 0);
  };
  return (...r) => (t += 1, n || (a = Ol(!0), n = a.run(() => e(...r))), Jn(o), n);
}
function tn(e) {
  return typeof e == "function" ? e() : l(e);
}
const Wt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const jg = (e) => typeof e < "u", Gg = (e) => e != null, Yg = Object.prototype.toString, Xg = (e) => Yg.call(e) === "[object Object]", Gf = () => {
}, Cc = /* @__PURE__ */ Zg();
function Zg() {
  var e, t;
  return Wt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Jg(e) {
  return Ne();
}
function Yf(e, t = 1e4) {
  return Dl((n, a) => {
    let o = tn(e), r;
    const i = () => setTimeout(() => {
      o = tn(e), a();
    }, tn(t));
    return Jn(() => {
      clearTimeout(r);
    }), {
      get() {
        return n(), o;
      },
      set(s) {
        o = s, a(), clearTimeout(r), r = i();
      }
    };
  });
}
function Qg(e, t) {
  Jg() && gi(e, t);
}
function Hl(e, t, n = {}) {
  const {
    immediate: a = !0
  } = n, o = M(!1);
  let r = null;
  function i() {
    r && (clearTimeout(r), r = null);
  }
  function s() {
    o.value = !1, i();
  }
  function u(...c) {
    i(), o.value = !0, r = setTimeout(() => {
      o.value = !1, r = null, e(...c);
    }, tn(t));
  }
  return a && (o.value = !0, Wt && u()), Jn(s), {
    isPending: Ra(o),
    start: u,
    stop: s
  };
}
function ey(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: a
  } = t, o = Hl(
    a ?? Gf,
    e,
    t
  ), r = E(() => !o.isPending.value);
  return n ? {
    ready: r,
    ...o
  } : r;
}
function mt(e) {
  var t;
  const n = tn(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Mo = Wt ? window : void 0;
function Sa(...e) {
  let t, n, a, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, a, o] = e, t = Mo) : [t, n, a, o] = e, !t)
    return Gf;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const r = [], i = () => {
    r.forEach((d) => d()), r.length = 0;
  }, s = (d, f, p, h) => (d.addEventListener(f, p, h), () => d.removeEventListener(f, p, h)), u = ee(
    () => [mt(t), tn(o)],
    ([d, f]) => {
      if (i(), !d)
        return;
      const p = Xg(f) ? { ...f } : f;
      r.push(
        ...n.flatMap((h) => a.map((v) => s(d, h, v, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), i();
  };
  return Jn(c), c;
}
function ty(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Wl(...e) {
  let t, n, a = {};
  e.length === 3 ? (t = e[0], n = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], a = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Mo,
    eventName: r = "keydown",
    passive: i = !1,
    dedupe: s = !1
  } = a, u = ty(t);
  return Sa(o, r, (c) => {
    c.repeat && tn(s) || u(c) && n(c);
  }, i);
}
function Ul() {
  const e = M(!1), t = Ne();
  return t && le(() => {
    e.value = !0;
  }, t), e;
}
function ny(e) {
  const t = Ul();
  return E(() => (t.value, !!e()));
}
function ay(e, t, n = {}) {
  const { window: a = Mo, ...o } = n;
  let r;
  const i = ny(() => a && "MutationObserver" in a), s = () => {
    r && (r.disconnect(), r = void 0);
  }, u = E(() => {
    const p = tn(e), h = (Array.isArray(p) ? p : [p]).map(mt).filter(Gg);
    return new Set(h);
  }), c = ee(
    () => u.value,
    (p) => {
      s(), i.value && p.size && (r = new MutationObserver(t), p.forEach((h) => r.observe(h, o)));
    },
    { immediate: !0, flush: "post" }
  ), d = () => r == null ? void 0 : r.takeRecords(), f = () => {
    s(), c();
  };
  return Jn(f), {
    isSupported: i,
    stop: f,
    takeRecords: d
  };
}
function Xf(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: a = void 0,
    window: o = Mo
  } = t, r = M(!1), i = a ? 1e3 / a : null;
  let s = 0, u = null;
  function c(p) {
    if (!r.value || !o)
      return;
    s || (s = p);
    const h = p - s;
    if (i && h < i) {
      u = o.requestAnimationFrame(c);
      return;
    }
    s = p, e({ delta: h, timestamp: p }), u = o.requestAnimationFrame(c);
  }
  function d() {
    !r.value && o && (r.value = !0, s = 0, u = o.requestAnimationFrame(c));
  }
  function f() {
    r.value = !1, u != null && o && (o.cancelAnimationFrame(u), u = null);
  }
  return n && d(), Jn(f), {
    isActive: Ra(r),
    pause: f,
    resume: d
  };
}
function oy(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ee(e, t, n, a = {}) {
  var o, r, i;
  const {
    clone: s = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, h = Ne(), v = n || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((i = (r = h == null ? void 0 : h.proxy) == null ? void 0 : r.$emit) == null ? void 0 : i.bind(h == null ? void 0 : h.proxy));
  let m = c;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const b = (C) => s ? typeof s == "function" ? s(C) : oy(C) : C, x = () => jg(e[t]) ? b(e[t]) : f, S = (C) => {
    p ? p(C) && v(m, C) : v(m, C);
  };
  if (u) {
    const C = x(), T = M(C);
    let $ = !1;
    return ee(
      () => e[t],
      (B) => {
        $ || ($ = !0, T.value = b(B), ae(() => $ = !1));
      }
    ), ee(
      T,
      (B) => {
        !$ && (B !== e[t] || d) && S(B);
      },
      { deep: d }
    ), T;
  } else
    return E({
      get() {
        return x();
      },
      set(C) {
        S(C);
      }
    });
}
function wi(e) {
  return e ? e.flatMap((t) => t.type === ve ? wi(t.children) : [t]) : [];
}
function Ve() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const ry = ["INPUT", "TEXTAREA"];
function Zf(e, t, n, a = {}) {
  if (!t || a.enableIgnoredElement && ry.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: i = [],
    loop: s = !0,
    dir: u = "ltr",
    preventScroll: c = !0,
    focus: d = !1
  } = a, [f, p, h, v, m, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], x = h || v, S = f || p;
  if (!m && !b && (!x && !S || o === "vertical" && S || o === "horizontal" && x))
    return null;
  const C = n ? Array.from(n.querySelectorAll(r)) : i;
  if (!C.length)
    return null;
  c && e.preventDefault();
  let T = null;
  return S || x ? T = Jf(C, t, {
    goForward: x ? v : u === "ltr" ? f : p,
    loop: s
  }) : m ? T = C.at(0) || null : b && (T = C.at(-1) || null), d && (T == null || T.focus()), T;
}
function Jf(e, t, n, a = e.length) {
  if (--a === 0)
    return null;
  const o = e.indexOf(t), r = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const i = (r + e.length) % e.length, s = e[i];
  return s ? s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false" ? Jf(
    e,
    s,
    n,
    a
  ) : s : null;
}
function rs(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Rs(e, t, n = ".", a) {
  if (!rs(t))
    return Rs(e, {}, n);
  const o = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const i = e[r];
    i != null && (Array.isArray(i) && Array.isArray(o[r]) ? o[r] = [...i, ...o[r]] : rs(i) && rs(o[r]) ? o[r] = Rs(
      i,
      o[r],
      (n ? `${n}.` : "") + r.toString()
    ) : o[r] = i);
  }
  return o;
}
function iy(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, a) => Rs(n, a, ""), {})
  );
}
const sy = iy(), [Ci] = pe("ConfigProvider");
let ly = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", uy = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += ly[Math.random() * 64 | 0];
  return t;
};
const cy = jf(() => {
  const e = M(/* @__PURE__ */ new Map()), t = M(), n = E(() => {
    for (const i of e.value.values())
      if (i)
        return !0;
    return !1;
  }), a = Ci({
    scrollBody: M(!0)
  });
  let o = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Cc && (o == null || o()), t.value = void 0;
  };
  return ee(n, (i, s) => {
    var u;
    if (!Wt)
      return;
    if (!i) {
      s && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, d = { padding: c, margin: 0 }, f = (u = a.scrollBody) != null && u.value ? typeof a.scrollBody.value == "object" ? sy({
      padding: a.scrollBody.value.padding === !0 ? c : a.scrollBody.value.padding,
      margin: a.scrollBody.value.margin === !0 ? c : a.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof f.padding == "number" ? `${f.padding}px` : String(f.padding), document.body.style.marginRight = typeof f.margin == "number" ? `${f.margin}px` : String(f.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Cc && (o = Sa(
      document,
      "touchmove",
      (p) => dy(p),
      { passive: !1 }
    )), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Oo(e) {
  const t = uy(6), n = cy();
  n.value.set(t, e ?? !1);
  const a = E({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return Qg(() => {
    n.value.delete(t);
  }), a;
}
function Qf(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Qf(n);
  }
}
function dy(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Qf(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const fy = "data-radix-vue-collection-item";
function Na(e, t = fy) {
  const n = Symbol();
  return { createCollection: (a) => {
    const o = M([]);
    function r() {
      const i = mt(a);
      return i ? o.value = Array.from(
        i.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return zm(() => {
      o.value = [];
    }), le(r), qm(r), ee(() => a == null ? void 0 : a.value, r, { immediate: !0 }), wt(n, o), o;
  }, injectCollection: () => An(n, M([])) };
}
function En(e) {
  const t = Ci({
    dir: M("ltr")
  });
  return E(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Qn(e) {
  const t = Ne(), n = t == null ? void 0 : t.type.emits, a = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    a[Sf(Ca(o))] = (...r) => e(o, ...r);
  }), a;
}
let is = 0;
function Kl() {
  ge((e) => {
    if (!Wt)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? kc()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? kc()
    ), is++, e(() => {
      is === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), is--;
    });
  });
}
function kc() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Do(e) {
  return E(() => {
    var t;
    return tn(e) ? !!((t = mt(e)) != null && t.closest("form")) : !0;
  });
}
function Le(e) {
  const t = Ne(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, r) => {
    const i = (t == null ? void 0 : t.type.props[r]).default;
    return i !== void 0 && (o[r] = i), o;
  }, {}), a = Al(e);
  return E(() => {
    const o = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((i) => {
      o[Ca(i)] = r[i];
    }), Object.keys({ ...n, ...o }).reduce((i, s) => (a.value[s] !== void 0 && (i[s] = a.value[s]), i), {});
  });
}
function de(e, t) {
  const n = Le(e), a = t ? Qn(t) : {};
  return E(() => ({
    ...n.value,
    ...a
  }));
}
function W() {
  const e = Ne(), t = M(), n = E(() => {
    var i, s;
    return ["#text", "#comment"].includes((i = t.value) == null ? void 0 : i.$el.nodeName) ? (s = t.value) == null ? void 0 : s.$el.nextElementSibling : mt(t);
  }), a = Object.assign({}, e.exposed), o = {};
  for (const i in e.props)
    Object.defineProperty(o, i, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[i]
    });
  if (Object.keys(a).length > 0)
    for (const i in a)
      Object.defineProperty(o, i, {
        enumerable: !0,
        configurable: !0,
        get: () => a[i]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function r(i) {
    t.value = i, i && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => i instanceof Element ? i : i.$el
    }), e.exposed = o);
  }
  return { forwardRef: r, currentRef: t, currentElement: n };
}
function py(e, t) {
  const n = Yf(!1, 300), a = M(null), o = Ug();
  function r() {
    a.value = null, n.value = !1;
  }
  function i(s, u) {
    const c = s.currentTarget, d = { x: s.clientX, y: s.clientY }, f = hy(d, c.getBoundingClientRect()), p = vy(d, f), h = my(u.getBoundingClientRect()), v = yy([...p, ...h]);
    a.value = v, n.value = !0;
  }
  return ge((s) => {
    if (e.value && t.value) {
      const u = (d) => i(d, t.value), c = (d) => i(d, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", c), s(() => {
        var d, f;
        (d = e.value) == null || d.removeEventListener("pointerleave", u), (f = t.value) == null || f.removeEventListener("pointerleave", c);
      });
    }
  }), ge((s) => {
    var u;
    if (a.value) {
      const c = (d) => {
        var f, p;
        if (!a.value)
          return;
        const h = d.target, v = { x: d.clientX, y: d.clientY }, m = ((f = e.value) == null ? void 0 : f.contains(h)) || ((p = t.value) == null ? void 0 : p.contains(h)), b = !gy(v, a.value), x = !!h.closest("[data-grace-area-trigger]");
        m ? r() : (b || x) && (r(), o.trigger());
      };
      (u = e.value) == null || u.ownerDocument.addEventListener("pointermove", c), s(() => {
        var d;
        return (d = e.value) == null ? void 0 : d.ownerDocument.removeEventListener("pointermove", c);
      });
    }
  }), {
    isPointerInTransit: n,
    onPointerExit: o.on
  };
}
function hy(e, t) {
  const n = Math.abs(t.top - e.y), a = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), r = Math.abs(t.left - e.x);
  switch (Math.min(n, a, o, r)) {
    case r:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case a:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function vy(e, t, n = 5) {
  const a = [];
  switch (t) {
    case "top":
      a.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      a.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      a.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      a.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return a;
}
function my(e) {
  const { top: t, right: n, bottom: a, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: a },
    { x: o, y: a }
  ];
}
function gy(e, t) {
  const { x: n, y: a } = e;
  let o = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
    const s = t[r].x, u = t[r].y, c = t[i].x, d = t[i].y;
    u > a != d > a && n < (c - s) * (a - u) / (d - u) + s && (o = !o);
  }
  return o;
}
function yy(e) {
  const t = e.slice();
  return t.sort((n, a) => n.x < a.x ? -1 : n.x > a.x ? 1 : n.y < a.y ? -1 : n.y > a.y ? 1 : 0), by(t);
}
function by(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    for (; t.length >= 2; ) {
      const r = t[t.length - 1], i = t[t.length - 2];
      if ((r.x - i.x) * (o.y - i.y) >= (r.y - i.y) * (o.x - i.x))
        t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let a = e.length - 1; a >= 0; a--) {
    const o = e[a];
    for (; n.length >= 2; ) {
      const r = n[n.length - 1], i = n[n.length - 2];
      if ((r.x - i.x) * (o.y - i.y) >= (r.y - i.y) * (o.x - i.x))
        n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var _y = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ca = /* @__PURE__ */ new WeakMap(), Xo = /* @__PURE__ */ new WeakMap(), Zo = {}, ss = 0, ep = function(e) {
  return e && (e.host || ep(e.parentNode));
}, xy = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var a = ep(n);
    return a && e.contains(a) ? a : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, wy = function(e, t, n, a) {
  var o = xy(t, Array.isArray(e) ? e : [e]);
  Zo[n] || (Zo[n] = /* @__PURE__ */ new WeakMap());
  var r = Zo[n], i = [], s = /* @__PURE__ */ new Set(), u = new Set(o), c = function(f) {
    !f || s.has(f) || (s.add(f), c(f.parentNode));
  };
  o.forEach(c);
  var d = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (s.has(p))
        d(p);
      else
        try {
          var h = p.getAttribute(a), v = h !== null && h !== "false", m = (ca.get(p) || 0) + 1, b = (r.get(p) || 0) + 1;
          ca.set(p, m), r.set(p, b), i.push(p), m === 1 && v && Xo.set(p, !0), b === 1 && p.setAttribute(n, "true"), v || p.setAttribute(a, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", p, x);
        }
    });
  };
  return d(t), s.clear(), ss++, function() {
    i.forEach(function(f) {
      var p = ca.get(f) - 1, h = r.get(f) - 1;
      ca.set(f, p), r.set(f, h), p || (Xo.has(f) || f.removeAttribute(a), Xo.delete(f)), h || f.removeAttribute(n);
    }), ss--, ss || (ca = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap(), Xo = /* @__PURE__ */ new WeakMap(), Zo = {});
  };
}, Cy = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var a = Array.from(Array.isArray(e) ? e : [e]), o = _y(e);
  return o ? (a.push.apply(a, Array.from(o.querySelectorAll("[aria-live]"))), wy(a, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function Po(e) {
  let t;
  ee(() => mt(e), (n) => {
    n ? t = Cy(n) : t && t();
  }), ze(() => {
    t && t();
  });
}
let ky = 0;
function Fe(e, t = "radix") {
  const n = Ci({ useId: void 0 });
  return ha.useId ? `${t}-${ha.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++ky}`;
}
function tp(e) {
  const t = M(), n = E(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), a = E(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return le(() => {
    const o = mt(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const r = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const s = i[0];
        let u, c;
        if ("borderBoxSize" in s) {
          const d = s.borderBoxSize, f = Array.isArray(d) ? d[0] : d;
          u = f.inlineSize, c = f.blockSize;
        } else
          u = o.offsetWidth, c = o.offsetHeight;
        t.value = { width: u, height: c };
      });
      return r.observe(o, { box: "border-box" }), () => r.unobserve(o);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: a
  };
}
function Sy(e, t) {
  const n = M(e);
  function a(o) {
    return t[n.value][o] ?? n.value;
  }
  return {
    state: n,
    dispatch: (o) => {
      n.value = a(o);
    }
  };
}
const $y = "data-item-text";
function jl(e) {
  const t = Yf("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, a) => {
      if (!(e != null && e.value) && !a)
        return;
      t.value = t.value + n;
      const o = (e == null ? void 0 : e.value) ?? a, r = Ve(), i = o.map((f) => {
        var p;
        return {
          ref: f,
          textValue: ((p = (f.querySelector(`[${$y}]`) ?? f).textContent) == null ? void 0 : p.trim()) ?? ""
        };
      }), s = i.find((f) => f.ref === r), u = i.map((f) => f.textValue), c = Ay(u, t.value, s == null ? void 0 : s.textValue), d = i.find((f) => f.textValue === c);
      return d && d.ref.focus(), d == null ? void 0 : d.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Ty(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
function Ay(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((s) => s === t[0]) ? t[0] : t, o = n ? e.indexOf(n) : -1;
  let r = Ty(e, Math.max(o, 0));
  a.length === 1 && (r = r.filter((s) => s !== n));
  const i = r.find(
    (s) => s.toLowerCase().startsWith(a.toLowerCase())
  );
  return i !== n ? i : void 0;
}
const Gl = _({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var a, o;
      if (!n.default)
        return null;
      const r = wi(n.default()), i = r.findIndex((d) => d.type !== El);
      if (i === -1)
        return r;
      const s = r[i];
      (a = s.props) == null || delete a.ref;
      const u = s.props ? O(t, s.props) : t;
      t.class && (o = s.props) != null && o.class && delete s.props.class;
      const c = $f(s, u);
      for (const d in u)
        d.startsWith("on") && (c.props || (c.props = {}), c.props[d] = u[d]);
      return r.length === 1 ? c : (r[i] = c, r);
    };
  }
}), K = _({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: n }) {
    const a = e.asChild ? "template" : e.as;
    return typeof a == "string" && ["area", "img", "input"].includes(a) ? () => je(a, t) : a !== "template" ? () => je(e.as, t, { default: n.default }) : () => je(Gl, t, { default: n.default });
  }
});
function np() {
  const e = M(), t = E(() => {
    var n, a;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (a = e.value) == null ? void 0 : a.$el.nextElementSibling : mt(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [ap, Ey] = pe("CollapsibleRoot"), By = /* @__PURE__ */ _({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(e, { expose: t, emit: n }) {
    const a = e, o = Ee(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = Ee(a, "disabled");
    return Ey({
      contentId: "",
      disabled: r,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), t({ open: o }), W(), (i, s) => (g(), k(l(K), {
      as: i.as,
      "as-child": a.asChild,
      "data-state": l(o) ? "open" : "closed",
      "data-disabled": l(r) ? "" : void 0
    }, {
      default: y(() => [
        w(i.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), My = /* @__PURE__ */ _({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    W();
    const n = ap();
    return (a, o) => {
      var r, i;
      return g(), k(l(K), {
        type: a.as === "button" ? "button" : void 0,
        as: a.as,
        "as-child": t.asChild,
        "aria-controls": l(n).contentId,
        "aria-expanded": l(n).open.value,
        "data-state": l(n).open.value ? "open" : "closed",
        "data-disabled": (r = l(n).disabled) != null && r.value ? "" : void 0,
        disabled: (i = l(n).disabled) == null ? void 0 : i.value,
        onClick: l(n).onOpenToggle
      }, {
        default: y(() => [
          w(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Oy(e, t) {
  var n;
  const a = M({}), o = M("none"), r = M(e), i = e.value ? "mounted" : "unmounted";
  let s;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? Mo, { state: c, dispatch: d } = Sy(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  }), f = (b) => {
    var x;
    if (Wt) {
      const S = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      (x = t.value) == null || x.dispatchEvent(S);
    }
  };
  ee(
    e,
    async (b, x) => {
      var S;
      const C = x !== b;
      if (await ae(), C) {
        const T = o.value, $ = Jo(t.value);
        b ? (d("MOUNT"), f("enter"), $ === "none" && f("after-enter")) : $ === "none" || ((S = a.value) == null ? void 0 : S.display) === "none" ? (d("UNMOUNT"), f("leave"), f("after-leave")) : x && T !== $ ? (d("ANIMATION_OUT"), f("leave")) : (d("UNMOUNT"), f("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const p = (b) => {
    const x = Jo(t.value), S = x.includes(
      b.animationName
    ), C = c.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && S && (f(`after-${C}`), d("ANIMATION_END"), !r.value)) {
      const T = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = u == null ? void 0 : u.setTimeout(() => {
        var $;
        (($ = t.value) == null ? void 0 : $.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = T);
      });
    }
    b.target === t.value && x === "none" && d("ANIMATION_END");
  }, h = (b) => {
    b.target === t.value && (o.value = Jo(t.value));
  }, v = ee(
    t,
    (b, x) => {
      b ? (a.value = getComputedStyle(b), b.addEventListener("animationstart", h), b.addEventListener("animationcancel", p), b.addEventListener("animationend", p)) : (d("ANIMATION_END"), s !== void 0 && (u == null || u.clearTimeout(s)), x == null || x.removeEventListener("animationstart", h), x == null || x.removeEventListener("animationcancel", p), x == null || x.removeEventListener("animationend", p));
    },
    { immediate: !0 }
  ), m = ee(c, () => {
    const b = Jo(t.value);
    o.value = c.value === "mounted" ? b : "none";
  });
  return ze(() => {
    v(), m();
  }), {
    isPresent: E(
      () => ["mounted", "unmountSuspended"].includes(c.value)
    )
  };
}
function Jo(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const ft = _({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    var a;
    const { present: o, forceMount: r } = ce(e), i = M(), { isPresent: s } = Oy(o, i);
    n({ present: s });
    let u = t.default({ present: s });
    u = wi(u || []);
    const c = Ne();
    if (u && (u == null ? void 0 : u.length) > 1) {
      const d = (a = c == null ? void 0 : c.parent) != null && a.type.name ? `<${c.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${d}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((f) => `  - ${f}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => r.value || o.value || s.value ? je(t.default({ present: s })[0], {
      ref: (d) => {
        const f = mt(d);
        return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-radix-popper-content-wrapper") ? i.value = f.firstElementChild : i.value = f), f;
      }
    }) : null;
  }
}), Dy = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ap();
    n.contentId || (n.contentId = Fe(void 0, "radix-vue-collapsible-content"));
    const a = M(), { forwardRef: o, currentElement: r } = W(), i = M(0), s = M(0), u = E(() => n.open.value), c = M(u.value), d = M();
    return ee(
      () => {
        var f;
        return [u.value, (f = a.value) == null ? void 0 : f.present];
      },
      async () => {
        await ae();
        const f = r.value;
        if (!f)
          return;
        d.value = d.value || {
          transitionDuration: f.style.transitionDuration,
          animationName: f.style.animationName
        }, f.style.transitionDuration = "0s", f.style.animationName = "none";
        const p = f.getBoundingClientRect();
        s.value = p.height, i.value = p.width, c.value || (f.style.transitionDuration = d.value.transitionDuration, f.style.animationName = d.value.animationName);
      },
      {
        immediate: !0
      }
    ), le(() => {
      requestAnimationFrame(() => {
        c.value = !1;
      });
    }), (f, p) => (g(), k(l(ft), {
      ref_key: "presentRef",
      ref: a,
      present: f.forceMount || l(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var h, v;
        return [
          P(l(K), O(f.$attrs, {
            id: l(n).contentId,
            ref: l(o),
            "as-child": t.asChild,
            as: f.as,
            "data-state": l(n).open.value ? "open" : "closed",
            "data-disabled": (h = l(n).disabled) != null && h.value ? "" : void 0,
            hidden: !((v = a.value) != null && v.present),
            style: {
              "--radix-collapsible-content-height": `${s.value}px`,
              "--radix-collapsible-content-width": `${i.value}px`
            }
          }), {
            default: y(() => {
              var m;
              return [
                (m = a.value) != null && m.present ? w(f.$slots, "default", { key: 0 }) : te("", !0)
              ];
            }),
            _: 3
          }, 16, ["id", "as-child", "as", "data-state", "data-disabled", "hidden", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function op({ type: e, defaultValue: t, modelValue: n }) {
  const a = n || t;
  if (gr(e) && gr(n) && gr(t))
    throw new Error("Either the `type` or the `value` or `default-value` prop must be defined.");
  if (n !== void 0 && t !== void 0 && typeof n != typeof t)
    throw new Error(
      `Invalid prop \`value\` of value \`${n}\` supplied, should be the same type as the \`defaultValue\` prop, which is \`${t}\`. The \`value\` prop must be:
  ${e === "single" ? "- a string" : e === "multiple" ? "- an array of strings" : `- a string
- an array of strings`}
  - \`undefined\``
    );
  const o = n !== void 0 || t !== void 0;
  if (e && o) {
    const r = Array.isArray(n) || Array.isArray(t), i = n !== void 0 ? "modelValue" : "defaultValue", s = i === "modelValue" ? typeof n : typeof t;
    if (e === "single" && r)
      return console.error(`Invalid prop \`${i}\` of type ${s} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${i} prop.`), "multiple";
    if (e === "multiple" && !r)
      return console.error(`Invalid prop \`${i}\` of type ${s} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${i} prop.`), "single";
  }
  return o ? Array.isArray(a) ? "multiple" : "single" : e;
}
function Py({ type: e, defaultValue: t, modelValue: n }) {
  return e || op({ type: e, defaultValue: t, modelValue: n });
}
function Iy({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function Ry(e, t) {
  const n = M(Py(e)), a = Ee(e, "modelValue", t, {
    defaultValue: Iy(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  ee(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const i = op(e);
      n.value !== i && (n.value = i);
    },
    { immediate: !0 }
  );
  function o(i) {
    if (n.value === "single")
      a.value = i === a.value ? void 0 : i;
    else {
      const s = [...a.value || []];
      if (s.includes(i)) {
        const u = s.findIndex((c) => c === i);
        s.splice(u, 1);
      } else
        s.push(i);
      a.value = s;
    }
  }
  const r = E(() => n.value === "single");
  return {
    modelValue: a,
    type: n,
    changeModelValue: o,
    isSingle: r
  };
}
const [ki, Fy] = pe("AccordionRoot"), Ny = /* @__PURE__ */ _({
  __name: "AccordionRoot",
  props: {
    collapsible: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    dir: {},
    orientation: { default: "vertical" },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, { dir: o, disabled: r } = ce(n), i = En(o), { modelValue: s, changeModelValue: u, isSingle: c } = Ry(n, a), { forwardRef: d, currentElement: f } = W();
    return Fy({
      disabled: r,
      direction: i,
      orientation: n.orientation,
      parentElement: f,
      isSingle: c,
      collapsible: n.collapsible,
      modelValue: s,
      changeModelValue: u
    }), (p, h) => (g(), k(l(K), {
      ref: l(d),
      "as-child": p.asChild,
      as: p.as
    }, {
      default: y(() => [
        w(p.$slots, "default", { modelValue: l(s) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [Yl, Ly] = pe("AccordionItem"), Vy = /* @__PURE__ */ _({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, a = ki(), o = E(
      () => a.isSingle.value ? n.value === a.modelValue.value : Array.isArray(a.modelValue.value) && a.modelValue.value.includes(n.value)
    ), r = E(() => a.disabled.value || n.disabled), i = E(() => r.value ? "" : void 0), s = E(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: o, dataDisabled: i });
    const { currentRef: u, currentElement: c } = W();
    Ly({
      open: o,
      dataState: s,
      disabled: r,
      dataDisabled: i,
      triggerId: "",
      currentRef: u,
      currentElement: c,
      value: E(() => n.value)
    });
    function d(f) {
      var p;
      const h = f.target;
      if (Array.from(((p = a.parentElement.value) == null ? void 0 : p.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((v) => v === h) === -1)
        return null;
      Zf(
        f,
        c.value,
        a.parentElement.value,
        {
          arrowKeyOptions: a.orientation,
          dir: a.direction.value,
          focus: !0
        }
      );
    }
    return (f, p) => (g(), k(l(By), {
      "data-orientation": l(a).orientation,
      "data-disabled": i.value,
      "data-state": s.value,
      disabled: r.value,
      open: o.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: Ge(d, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        w(f.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), zy = /* @__PURE__ */ _({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ki(), a = Yl();
    return W(), (o, r) => (g(), k(l(Dy), {
      role: "region",
      hidden: !l(a).open.value,
      "as-child": t.asChild,
      "force-mount": t.forceMount,
      "aria-labelledby": l(a).triggerId,
      "data-state": l(a).dataState.value,
      "data-disabled": l(a).dataDisabled.value,
      "data-orientation": l(n).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), qy = /* @__PURE__ */ _({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = ki(), a = Yl();
    return W(), (o, r) => (g(), k(l(K), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": l(n).orientation,
      "data-state": l(a).dataState.value,
      "data-disabled": l(a).dataDisabled.value
    }, {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), Hy = /* @__PURE__ */ _({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ki(), a = Yl();
    a.triggerId || (a.triggerId = Fe(void 0, "radix-vue-accordion-trigger"));
    function o() {
      const r = n.isSingle.value && a.open.value && !n.collapsible;
      a.disabled.value || r || n.changeModelValue(a.value.value);
    }
    return (r, i) => (g(), k(l(My), {
      id: l(a).triggerId,
      ref: l(a).currentRef,
      "data-radix-vue-collection-item": "",
      as: t.as,
      "as-child": t.asChild,
      "aria-disabled": l(a).disabled.value || void 0,
      "aria-expanded": l(a).open.value || !1,
      "data-disabled": l(a).dataDisabled.value,
      "data-orientation": l(n).orientation,
      "data-state": l(a).dataState.value,
      disabled: l(a).disabled.value,
      onClick: o
    }, {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [Ut, Wy] = pe("DialogRoot"), rp = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = Ee(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), o = M(), r = M(), { modal: i } = ce(n);
    return Wy({
      open: a,
      modal: i,
      openModal: () => {
        a.value = !0;
      },
      onOpenChange: (s) => {
        a.value = s;
      },
      onOpenToggle: () => {
        a.value = !a.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: o,
      contentElement: r
    }), (s, u) => w(s.$slots, "default", { open: l(a) });
  }
}), ip = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Ut(), { forwardRef: a, currentElement: o } = W();
    return n.contentId || (n.contentId = Fe(void 0, "radix-vue-dialog-content")), le(() => {
      n.triggerElement.value = o.value;
    }), (r, i) => (g(), k(l(K), O(t, {
      ref: l(a),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": l(n).open.value || !1,
      "aria-controls": l(n).open.value ? l(n).contentId : void 0,
      "data-state": l(n).open.value ? "open" : "closed",
      onClick: l(n).onOpenToggle
    }), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Io = /* @__PURE__ */ _({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Ul();
    return (n, a) => l(t) || n.forceMount ? (g(), k(Xn, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      w(n.$slots, "default")
    ], 8, ["to", "disabled"])) : te("", !0);
  }
}), Xl = /* @__PURE__ */ _({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(Io), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uy = "dismissableLayer.pointerDownOutside", Ky = "dismissableLayer.focusOutside";
function sp(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), a = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && a === n || o.indexOf(a) < o.indexOf(n));
}
function jy(e, t) {
  var n;
  const a = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1), r = M(() => {
  });
  return ge((i) => {
    if (!Wt)
      return;
    const s = async (c) => {
      const d = c.target;
      if (t != null && t.value) {
        if (sp(t.value, d)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let f = function() {
            ql(
              Uy,
              e,
              p
            );
          };
          const p = { originalEvent: c };
          c.pointerType === "touch" ? (a.removeEventListener("click", r.value), r.value = f, a.addEventListener("click", r.value, {
            once: !0
          })) : f();
        } else
          a.removeEventListener("click", r.value);
        o.value = !1;
      }
    }, u = window.setTimeout(() => {
      a.addEventListener("pointerdown", s);
    }, 0);
    i(() => {
      window.clearTimeout(u), a.removeEventListener("pointerdown", s), a.removeEventListener("click", r.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function Gy(e, t) {
  var n;
  const a = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1);
  return ge((r) => {
    if (!Wt)
      return;
    const i = async (s) => {
      t != null && t.value && (await ae(), !(!t.value || sp(t.value, s.target)) && s.target && !o.value && ql(
        Ky,
        e,
        { originalEvent: s }
      ));
    };
    a.addEventListener("focusin", i), r(() => a.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const bt = Cn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), La = /* @__PURE__ */ _({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: r } = W(), i = E(
      () => {
        var v;
        return ((v = r.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), s = E(() => bt.layersRoot), u = E(() => r.value ? Array.from(s.value).indexOf(r.value) : -1), c = E(() => bt.layersWithOutsidePointerEventsDisabled.size > 0), d = E(() => {
      const v = Array.from(s.value), [m] = [...bt.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(m);
      return u.value >= b;
    }), f = jy(async (v) => {
      const m = [...bt.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      );
      !d.value || m || (a("pointerDownOutside", v), a("interactOutside", v), await ae(), v.defaultPrevented || a("dismiss"));
    }, r), p = Gy((v) => {
      [...bt.branches].some(
        (m) => m == null ? void 0 : m.contains(v.target)
      ) || (a("focusOutside", v), a("interactOutside", v), v.defaultPrevented || a("dismiss"));
    }, r);
    Wl("Escape", (v) => {
      u.value === s.value.size - 1 && (a("escapeKeyDown", v), v.defaultPrevented || a("dismiss"));
    });
    let h;
    return ge((v) => {
      r.value && (n.disableOutsidePointerEvents && (bt.layersWithOutsidePointerEventsDisabled.size === 0 && (h = i.value.body.style.pointerEvents, i.value.body.style.pointerEvents = "none"), bt.layersWithOutsidePointerEventsDisabled.add(r.value)), s.value.add(r.value), v(() => {
        n.disableOutsidePointerEvents && bt.layersWithOutsidePointerEventsDisabled.size === 1 && (i.value.body.style.pointerEvents = h);
      }));
    }), ge((v) => {
      v(() => {
        r.value && (s.value.delete(r.value), bt.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, m) => (g(), k(l(K), {
      ref: l(o),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: qt({
        pointerEvents: c.value ? d.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(p).onFocusCapture,
      onBlurCapture: l(p).onBlurCapture,
      onPointerdownCapture: l(f).onPointerDownCapture
    }, {
      default: y(() => [
        w(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Yy = /* @__PURE__ */ _({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = W();
    return le(() => {
      bt.branches.add(a.value);
    }), ze(() => {
      bt.branches.delete(a.value);
    }), (o, r) => (g(), k(l(K), O({ ref: l(n) }, t), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ls = "focusScope.autoFocusOnMount", us = "focusScope.autoFocusOnUnmount", Sc = { bubbles: !1, cancelable: !0 };
function yr(e, { select: t = !1 } = {}) {
  const n = Ve();
  for (const a of e)
    if (mn(a, { select: t }), Ve() !== n)
      return !0;
}
function Xy(e) {
  const t = Zl(e), n = $c(t, e), a = $c(t.reverse(), e);
  return [n, a];
}
function Zl(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const o = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || o ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function $c(e, t) {
  for (const n of e)
    if (!Zy(n, { upTo: t }))
      return n;
}
function Zy(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function Jy(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function mn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Ve();
    e.focus({ preventScroll: !0 }), e !== n && Jy(e) && t && e.select();
  }
}
const Qy = Kg(() => M([]));
function eb() {
  const e = Qy();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Tc(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Tc(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Tc(e, t) {
  const n = [...e], a = n.indexOf(t);
  return a !== -1 && n.splice(a, 1), n;
}
function tb(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Si = /* @__PURE__ */ _({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, { currentRef: o, currentElement: r } = W(), i = M(null), s = eb(), u = Cn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ge((d) => {
      if (!Wt)
        return;
      const f = r.value;
      if (!n.trapped)
        return;
      function p(b) {
        if (u.paused || !f)
          return;
        const x = b.target;
        f.contains(x) ? i.value = x : mn(i.value, { select: !0 });
      }
      function h(b) {
        if (u.paused || !f)
          return;
        const x = b.relatedTarget;
        x !== null && (f.contains(x) || mn(i.value, { select: !0 }));
      }
      function v(b) {
        f.contains(i.value) || mn(f);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", h);
      const m = new MutationObserver(v);
      f && m.observe(f, { childList: !0, subtree: !0 }), d(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", h), m.disconnect();
      });
    }), ge(async (d) => {
      const f = r.value;
      if (await ae(), !f)
        return;
      s.add(u);
      const p = Ve();
      if (!f.contains(p)) {
        const h = new CustomEvent(ls, Sc);
        f.addEventListener(ls, (v) => a("mountAutoFocus", v)), f.dispatchEvent(h), h.defaultPrevented || (yr(tb(Zl(f)), {
          select: !0
        }), Ve() === p && mn(f));
      }
      d(() => {
        f.removeEventListener(ls, (m) => a("mountAutoFocus", m));
        const h = new CustomEvent(us, Sc), v = (m) => {
          a("unmountAutoFocus", m);
        };
        f.addEventListener(us, v), f.dispatchEvent(h), setTimeout(() => {
          h.defaultPrevented || mn(p ?? document.body, { select: !0 }), f.removeEventListener(us, v), s.remove(u);
        }, 0);
      });
    });
    function c(d) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const f = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, p = Ve();
      if (f && p) {
        const h = d.currentTarget, [v, m] = Xy(h);
        v && m ? !d.shiftKey && p === m ? (d.preventDefault(), n.loop && mn(v, { select: !0 })) : d.shiftKey && p === v && (d.preventDefault(), n.loop && mn(m, { select: !0 })) : p === h && d.preventDefault();
      }
    }
    return (d, f) => (g(), k(l(K), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": d.asChild,
      as: d.as,
      onKeydown: c
    }, {
      default: y(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), nb = "menu.itemSelect", Fs = ["Enter", " "], ab = ["ArrowDown", "PageUp", "Home"], lp = ["ArrowUp", "PageDown", "End"], ob = [...ab, ...lp], rb = {
  ltr: [...Fs, "ArrowRight"],
  rtl: [...Fs, "ArrowLeft"]
}, ib = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Jl(e) {
  return e ? "open" : "closed";
}
function Vr(e) {
  return e === "indeterminate";
}
function Ql(e) {
  return Vr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Ns(e) {
  const t = Ve();
  for (const n of e)
    if (n === t || (n.focus(), Ve() !== t))
      return;
}
function sb(e, t) {
  const { x: n, y: a } = e;
  let o = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
    const s = t[r].x, u = t[r].y, c = t[i].x, d = t[i].y;
    u > a != d > a && n < (c - s) * (a - u) / (d - u) + s && (o = !o);
  }
  return o;
}
function lb(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return sb(n, t);
}
function yo(e) {
  return e.pointerType === "mouse";
}
const ub = "DialogTitle", cb = "DialogContent";
function db({
  titleName: e = ub,
  contentName: t = cb,
  componentLink: n = "dialog.html#title",
  titleId: a,
  descriptionId: o,
  contentElement: r
}) {
  const i = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, s = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  le(() => {
    var u;
    document.getElementById(a) || console.warn(i);
    const c = (u = r.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && c && (document.getElementById(o) || console.warn(s));
  });
}
const up = /* @__PURE__ */ _({
  __name: "DialogContentImpl",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Ut(), { forwardRef: r, currentElement: i } = W();
    return o.titleId || (o.titleId = Fe(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = Fe(void 0, "radix-vue-dialog-description")), le(() => {
      o.contentElement = i, Ve() !== document.body && (o.triggerElement.value = Ve());
    }), process.env.NODE_ENV !== "production" && db({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: i
    }), (s, u) => (g(), k(l(Si), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (c) => a("openAutoFocus", c)),
      onUnmountAutoFocus: u[6] || (u[6] = (c) => a("closeAutoFocus", c))
    }, {
      default: y(() => [
        P(l(La), O({
          id: l(o).contentId,
          ref: l(r),
          as: s.as,
          "as-child": s.asChild,
          "disable-outside-pointer-events": s.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(o).descriptionId,
          "aria-labelledby": l(o).titleId,
          "data-state": l(Jl)(l(o).open.value)
        }, s.$attrs, {
          onDismiss: u[0] || (u[0] = (c) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (c) => a("escapeKeyDown", c)),
          onFocusOutside: u[2] || (u[2] = (c) => a("focusOutside", c)),
          onInteractOutside: u[3] || (u[3] = (c) => a("interactOutside", c)),
          onPointerDownOutside: u[4] || (u[4] = (c) => a("pointerDownOutside", c))
        }), {
          default: y(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), fb = /* @__PURE__ */ _({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Ut(), r = Qn(a), { forwardRef: i, currentElement: s } = W();
    return Po(s), (u, c) => (g(), k(up, O({ ...n, ...l(r) }, {
      ref: l(i),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: c[0] || (c[0] = (d) => {
        var f;
        d.defaultPrevented || (d.preventDefault(), (f = l(o).triggerElement.value) == null || f.focus());
      }),
      onPointerDownOutside: c[1] || (c[1] = (d) => {
        const f = d.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0;
        (f.button === 2 || p) && d.preventDefault();
      }),
      onFocusOutside: c[2] || (c[2] = (d) => {
        d.preventDefault();
      })
    }), {
      default: y(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), pb = /* @__PURE__ */ _({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = Qn(t);
    W();
    const o = Ut(), r = M(!1), i = M(!1);
    return (s, u) => (g(), k(up, O({ ...n, ...l(a) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var d;
        c.defaultPrevented || (r.value || (d = l(o).triggerElement.value) == null || d.focus(), c.preventDefault()), r.value = !1, i.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (c) => {
        var d;
        c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const f = c.target;
        (d = l(o).triggerElement.value) != null && d.contains(f) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eu = /* @__PURE__ */ _({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Ut(), r = Qn(a), { forwardRef: i } = W();
    return (s, u) => (g(), k(l(ft), {
      present: s.forceMount || l(o).open.value
    }, {
      default: y(() => [
        l(o).modal.value ? (g(), k(fb, O({
          key: 0,
          ref: l(i)
        }, { ...n, ...l(r), ...s.$attrs }), {
          default: y(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), k(pb, O({
          key: 1,
          ref: l(i)
        }, { ...n, ...l(r), ...s.$attrs }), {
          default: y(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), hb = /* @__PURE__ */ _({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ut();
    return Oo(!0), W(), (n, a) => (g(), k(l(K), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": l(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), tu = /* @__PURE__ */ _({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ut(), { forwardRef: n } = W();
    return (a, o) => {
      var r;
      return (r = l(t)) != null && r.modal.value ? (g(), k(l(ft), {
        key: 0,
        present: a.forceMount || l(t).open.value
      }, {
        default: y(() => [
          P(hb, O(a.$attrs, {
            ref: l(n),
            as: a.as,
            "as-child": a.asChild
          }), {
            default: y(() => [
              w(a.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : te("", !0);
    };
  }
}), Ro = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    W();
    const n = Ut();
    return (a, o) => (g(), k(l(K), O(t, {
      type: a.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (r) => l(n).onOpenChange(!1))
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), cp = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = Ut();
    return W(), (a, o) => (g(), k(l(K), O(t, {
      id: l(n).titleId
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), dp = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    W();
    const n = Ut();
    return (a, o) => (g(), k(l(K), O(t, {
      id: l(n).descriptionId
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function zr(e) {
  return e === "indeterminate";
}
function fp(e) {
  return zr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const vb = ["value", "checked", "name", "disabled", "required"], [mb, gb] = pe("CheckboxRoot"), yb = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "CheckboxRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: [Boolean, String], default: void 0 },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: { default: "on" },
    id: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    const n = e, a = t, { disabled: o } = ce(n), r = Ee(n, "checked", a, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    }), { forwardRef: i, currentElement: s } = W(), u = Do(s), c = E(() => {
      var d;
      return n.id && s.value ? (d = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : d.innerText : void 0;
    });
    return gb({
      disabled: o,
      state: r
    }), (d, f) => (g(), V(ve, null, [
      P(l(K), O(d.$attrs, {
        id: d.id,
        ref: l(i),
        role: "checkbox",
        "as-child": n.asChild,
        as: d.as,
        type: d.as === "button" ? "button" : void 0,
        "aria-checked": l(zr)(l(r)) ? "mixed" : l(r),
        "aria-required": n.required,
        "aria-label": d.$attrs["aria-label"] || c.value,
        "data-state": l(fp)(l(r)),
        "data-disabled": l(o) ? "" : void 0,
        disabled: l(o),
        onKeydown: Ge(De(() => {
        }, ["prevent"]), ["enter"]),
        onClick: f[0] || (f[0] = (p) => r.value = l(zr)(l(r)) ? !0 : !l(r))
      }), {
        default: y(() => [
          w(d.$slots, "default", { checked: l(r) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      l(u) ? (g(), V("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "true",
        value: d.value,
        checked: !!l(r),
        name: n.name,
        disabled: n.disabled,
        required: n.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, vb)) : te("", !0)
    ], 64));
  }
}), bb = /* @__PURE__ */ _({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = W(), n = mb();
    return (a, o) => (g(), k(l(ft), {
      present: a.forceMount || l(zr)(l(n).state.value) || l(n).state.value === !0
    }, {
      default: y(() => [
        P(l(K), O({
          ref: l(t),
          "data-state": l(fp)(l(n).state.value),
          "data-disabled": l(n).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": a.asChild,
          as: a.as
        }, a.$attrs), {
          default: y(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [pp, _b] = pe("PopperRoot"), Va = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = M();
    return _b({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, a) => w(n.$slots, "default");
  }
}), $i = /* @__PURE__ */ _({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = W(), o = pp();
    return ge(() => {
      o.onAnchorChange(t.element ?? a.value);
    }), (r, i) => (g(), k(l(K), {
      ref: l(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function xb(e) {
  return e !== null;
}
function wb(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, a, o;
      const { placement: r, rects: i, middlewareData: s } = t, u = ((n = s.arrow) == null ? void 0 : n.centerOffset) !== 0, c = u ? 0 : e.arrowWidth, d = u ? 0 : e.arrowHeight, [f, p] = Ls(r), h = { start: "0%", center: "50%", end: "100%" }[p], v = (((a = s.arrow) == null ? void 0 : a.x) ?? 0) + c / 2, m = (((o = s.arrow) == null ? void 0 : o.y) ?? 0) + d / 2;
      let b = "", x = "";
      return f === "bottom" ? (b = u ? h : `${v}px`, x = `${-d}px`) : f === "top" ? (b = u ? h : `${v}px`, x = `${i.floating.height + d}px`) : f === "right" ? (b = `${-d}px`, x = u ? h : `${m}px`) : f === "left" && (b = `${i.floating.width + d}px`, x = u ? h : `${m}px`), { data: { x: b, y: x } };
    }
  };
}
function Ls(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const hp = {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [OP, Cb] = pe("PopperContent"), $a = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Bl({
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...hp
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = pp(), { forwardRef: r, currentElement: i } = W(), s = M(), u = M(), { width: c, height: d } = tp(u), f = E(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), p = E(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), h = E(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = E(() => ({
      padding: p.value,
      boundary: h.value.filter(xb),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: h.value.length > 0
    })), m = Wg(() => [
      Lf({
        mainAxis: n.sideOffset + d.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Nr({
        ...v.value
      }),
      n.avoidCollisions && Vf({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Hf() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Nr({
        ...v.value
      }),
      zf({
        ...v.value,
        apply: ({ elements: D, rects: N, availableWidth: I, availableHeight: G }) => {
          const { width: z, height: Y } = N.reference, ne = D.floating.style;
          ne.setProperty(
            "--radix-popper-available-width",
            `${I}px`
          ), ne.setProperty(
            "--radix-popper-available-height",
            `${G}px`
          ), ne.setProperty(
            "--radix-popper-anchor-width",
            `${z}px`
          ), ne.setProperty(
            "--radix-popper-anchor-height",
            `${Y}px`
          );
        }
      }),
      u.value && Wf({ element: u.value, padding: n.arrowPadding }),
      wb({
        arrowWidth: c.value,
        arrowHeight: d.value
      }),
      n.hideWhenDetached && qf({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: b, placement: x, isPositioned: S, middlewareData: C } = Kf(
      o.anchor,
      s,
      {
        strategy: "fixed",
        placement: f,
        whileElementsMounted: (...D) => Nf(...D, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), T = E(
      () => Ls(x.value)[0]
    ), $ = E(
      () => Ls(x.value)[1]
    );
    Ml(() => {
      S.value && a("placed");
    });
    const B = E(
      () => {
        var D;
        return ((D = C.value.arrow) == null ? void 0 : D.centerOffset) !== 0;
      }
    ), A = M("");
    ge(() => {
      i.value && (A.value = window.getComputedStyle(i.value).zIndex);
    });
    const R = E(() => {
      var D;
      return ((D = C.value.arrow) == null ? void 0 : D.x) ?? 0;
    }), L = E(() => {
      var D;
      return ((D = C.value.arrow) == null ? void 0 : D.y) ?? 0;
    });
    return Cb({
      placedSide: T,
      onArrowChange: (D) => u.value = D,
      arrowX: R,
      arrowY: L,
      shouldHideArrow: B
    }), (D, N) => {
      var I, G, z;
      return g(), V("div", {
        ref_key: "floatingRef",
        ref: s,
        "data-radix-popper-content-wrapper": "",
        style: qt({
          ...l(b),
          transform: l(S) ? l(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: A.value,
          "--radix-popper-transform-origin": [
            (I = l(C).transformOrigin) == null ? void 0 : I.x,
            (G = l(C).transformOrigin) == null ? void 0 : G.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((z = l(C).hide) == null ? void 0 : z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        P(l(K), O({ ref: l(r) }, D.$attrs, {
          "as-child": n.asChild,
          as: D.as,
          "data-side": T.value,
          "data-align": $.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l(S) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            w(D.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Fo = /* @__PURE__ */ _({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return W(), (t, n) => (g(), k(l(K), {
      as: t.as,
      "as-child": t.asChild,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: "1px",
        display: "inline-block",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      }
    }, {
      default: y(() => [
        w(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), kb = /* @__PURE__ */ _({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = E(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((a, o) => typeof a == "object" ? Object.entries(a).map(([r, i]) => ({ name: `[${o}][${t.name}][${r}]`, value: i })) : { name: `[${t.name}][${o}]`, value: a }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([a, o]) => ({ name: `[${t.name}][${a}]`, value: o })) : []);
    return (a, o) => (g(!0), V(ve, null, Ye(n.value, (r) => (g(), k(Fo, {
      key: r.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: r.name,
      value: r.value,
      required: a.required,
      disabled: a.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), Sb = "data-radix-vue-collection-item", [nu, $b] = pe("CollectionProvider");
function au(e = Sb) {
  const t = M(/* @__PURE__ */ new Map()), n = M(), a = $b({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: o } = ru(a), r = E(() => Array.from(a.itemMap.value.values())), i = E(() => a.itemMap.value.size);
  return { getItems: o, reactiveItems: r, itemMapSize: i };
}
const ou = _({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = nu(), { primitiveElement: a, currentElement: o } = np();
    return ee(o, () => {
      n.collectionRef.value = o.value;
    }), () => je(Gl, { ref: a }, t);
  }
}), Ti = _({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const a = nu(), { primitiveElement: o, currentElement: r } = np();
    return ge((i) => {
      if (r.value) {
        const s = Tf(r.value);
        a.itemMap.value.set(s, { ref: r.value, value: e.value }), i(() => a.itemMap.value.delete(s));
      }
    }), () => je(Gl, { ...n, [a.attrName]: "", ref: o }, t);
  }
});
function ru(e) {
  const t = e ?? nu();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const a = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (o, r) => a.indexOf(o.ref) - a.indexOf(r.ref)
    );
  } };
}
const [za, Tb] = pe("ComboboxRoot"), Ab = /* @__PURE__ */ _({
  __name: "ComboboxRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    searchTerm: {},
    selectedValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    dir: {},
    filterFunction: {},
    displayValue: {},
    resetSearchTermOnBlur: { type: Boolean, default: !0 },
    resetSearchTermOnSelect: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm", "update:selectedValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, { multiple: o, disabled: r, dir: i } = ce(n), s = En(i), u = Ee(n, "searchTerm", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), c = Ee(n, "modelValue", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? o.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), d = Ee(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), f = Ee(n, "selectedValue", a, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function p(q) {
      var oe, ie;
      d.value = q, await ae(), q ? (c.value && (Array.isArray(c.value) && o.value ? f.value = (oe = C().find((Ue) => {
        var Ze, nt;
        return ((nt = (Ze = Ue.ref) == null ? void 0 : Ze.dataset) == null ? void 0 : nt.state) === "checked";
      })) == null ? void 0 : oe.value : f.value = c.value), await ae(), (ie = m.value) == null || ie.focus(), G()) : (v.value = !1, n.resetSearchTermOnBlur && R("blur"));
    }
    function h(q) {
      if (Array.isArray(c.value) && o.value) {
        const oe = c.value.findIndex((Ue) => In(Ue, q)), ie = [...c.value];
        oe === -1 ? ie.push(q) : ie.splice(oe, 1), c.value = ie;
      } else
        c.value = q, p(!1);
    }
    const v = M(!1), m = M(), b = M(), { forwardRef: x, currentElement: S } = W(), { getItems: C, reactiveItems: T, itemMapSize: $ } = au("data-radix-vue-combobox-item"), B = M([]);
    ee(() => $.value, () => {
      B.value = C().map((q) => q.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const A = E(() => {
      if (v.value) {
        if (n.filterFunction)
          return n.filterFunction(B.value, u.value);
        const q = B.value.filter((oe) => typeof oe == "string");
        if (q.length)
          return q.filter((oe) => {
            var ie;
            return oe.toLowerCase().includes((ie = u.value) == null ? void 0 : ie.toLowerCase());
          });
      }
      return B.value;
    });
    function R(q) {
      const oe = q === "blur" || q === "select" && n.resetSearchTermOnSelect;
      !o.value && c.value && !Array.isArray(c.value) ? n.displayValue ? u.value = n.displayValue(c.value) : typeof c.value != "object" ? u.value = c.value.toString() : oe && (u.value = "") : oe && (u.value = "");
    }
    const L = E(() => A.value.findIndex((q) => In(q, f.value))), D = E(() => {
      var q;
      return (q = T.value.find((oe) => In(oe.value, f.value))) == null ? void 0 : q.ref;
    }), N = E(() => JSON.stringify(c.value));
    ee(N, async () => {
      await ae(), await ae(), R("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), ee(() => [A.value.length, u.value.length], async ([q, oe], [ie, Ue]) => {
      await ae(), await ae(), q && (Ue > oe || L.value === -1) && (f.value = A.value[0]);
    });
    const I = Do(S);
    function G() {
      var q;
      D.value instanceof Element && ((q = D.value) == null || q.scrollIntoView({ block: "nearest" }));
    }
    function z() {
      D.value instanceof Element && D.value.focus && D.value.focus();
    }
    const Y = M(!1);
    function ne() {
      Y.value = !0;
    }
    function _e() {
      requestAnimationFrame(() => {
        Y.value = !1;
      });
    }
    async function he(q) {
      var oe;
      A.value.length && f.value && D.value instanceof Element && (q.preventDefault(), q.stopPropagation(), Y.value || (oe = D.value) == null || oe.click());
    }
    return Tb({
      searchTerm: u,
      modelValue: c,
      // @ts-expect-error ignoring
      onValueChange: h,
      isUserInputted: v,
      multiple: o,
      disabled: r,
      open: d,
      onOpenChange: p,
      filteredOptions: A,
      contentId: "",
      inputElement: m,
      selectedElement: D,
      onInputElementChange: (q) => m.value = q,
      onInputNavigation: async (q) => {
        const oe = L.value;
        oe === 0 && q === "up" || oe === A.value.length - 1 && q === "down" || (oe === -1 && A.value.length || q === "home" ? f.value = A.value[0] : q === "end" ? f.value = A.value[A.value.length - 1] : f.value = A.value[q === "up" ? oe - 1 : oe + 1], await ae(), G(), z(), ae(() => {
          var ie;
          return (ie = m.value) == null ? void 0 : ie.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: he,
      onCompositionEnd: _e,
      onCompositionStart: ne,
      selectedValue: f,
      onSelectedValueChange: (q) => f.value = q,
      parentElement: S,
      contentElement: b,
      onContentElementChange: (q) => b.value = q
    }), (q, oe) => (g(), k(l(Va), null, {
      default: y(() => [
        P(l(K), O({
          ref: l(x),
          style: {
            pointerEvents: l(d) ? "auto" : void 0
          },
          as: q.as,
          "as-child": q.asChild,
          dir: l(s)
        }, q.$attrs), {
          default: y(() => [
            w(q.$slots, "default", {
              open: l(d),
              modelValue: l(c)
            }),
            l(I) && n.name ? (g(), k(l(kb), {
              key: 0,
              name: n.name,
              value: l(c)
            }, null, 8, ["name", "value"])) : te("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Eb = /* @__PURE__ */ _({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = za(), { forwardRef: a, currentElement: o } = W();
    le(() => {
      const d = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      d && (n.onInputElementChange(d), setTimeout(() => {
        t.autoFocus && (d == null || d.focus());
      }, 1));
    });
    const r = E(() => t.disabled || n.disabled.value || !1), i = M();
    Cf(() => {
      var d;
      return i.value = (d = n.selectedElement.value) == null ? void 0 : d.id;
    });
    function s(d) {
      n.open.value ? n.onInputNavigation(d.key === "ArrowUp" ? "up" : "down") : n.onOpenChange(!0);
    }
    function u(d) {
      n.open.value && n.onInputNavigation(d.key === "Home" ? "home" : "end");
    }
    function c(d) {
      var f;
      n.searchTerm.value = (f = d.target) == null ? void 0 : f.value, n.open.value || n.onOpenChange(!0), n.isUserInputted.value = !0;
    }
    return (d, f) => (g(), k(l(K), {
      ref: l(a),
      as: d.as,
      "as-child": d.asChild,
      type: d.type,
      disabled: r.value,
      value: l(n).searchTerm.value,
      "aria-expanded": l(n).open.value,
      "aria-controls": l(n).contentId,
      "aria-disabled": r.value ?? void 0,
      "aria-activedescendant": i.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: c,
      onKeydown: [
        Ge(De(s, ["prevent"]), ["down", "up"]),
        Ge(l(n).onInputEnter, ["enter"]),
        Ge(De(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: l(n).onCompositionStart,
      onCompositionend: l(n).onCompositionEnd
    }, {
      default: y(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [vp, Bb] = pe("ComboboxGroup"), Mb = /* @__PURE__ */ _({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: a } = W(), o = Fe(void 0, "radix-vue-combobox-group"), r = za(), i = M(!1);
    function s() {
      if (!a.value)
        return;
      const u = a.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      i.value = !!u.length;
    }
    return ay(a, () => {
      ae(() => {
        s();
      });
    }, { childList: !0 }), ee(() => r.searchTerm.value, () => {
      ae(() => {
        s();
      });
    }, { immediate: !0 }), Bb({
      id: o
    }), (u, c) => Yn((g(), k(l(K), O(t, {
      ref_key: "currentRef",
      ref: n,
      role: "group",
      "aria-labelledby": l(o)
    }), {
      default: y(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [mi, i.value]
    ]);
  }
}), Ob = /* @__PURE__ */ _({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    W();
    const n = vp({ id: "" });
    return (a, o) => (g(), k(l(K), O(t, {
      id: l(n).id
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [DP, Db] = pe("ComboboxContent"), Pb = /* @__PURE__ */ _({
  __name: "ComboboxContentImpl",
  props: {
    position: { default: "inline" },
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean, default: !0 },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const n = e, a = t, { position: o } = ce(n), r = za();
    Oo(n.bodyLock);
    const { forwardRef: i, currentElement: s } = W();
    Po(r.parentElement);
    const u = E(() => n.position === "popper" ? n : {}), c = Le(u.value);
    function d(p) {
      r.onSelectedValueChange("");
    }
    le(() => {
      r.onContentElementChange(s.value);
    });
    const f = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
      "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
      "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
    };
    return Db({ position: o }), (p, h) => (g(), k(l(ou), null, {
      default: y(() => [
        p.dismissable ? (g(), k(l(La), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": p.disableOutsidePointerEvents,
          onDismiss: h[0] || (h[0] = (v) => l(r).onOpenChange(!1)),
          onFocusOutside: h[1] || (h[1] = (v) => {
            var m;
            (m = l(r).parentElement.value) != null && m.contains(v.target) && v.preventDefault(), a("focusOutside", v);
          }),
          onInteractOutside: h[2] || (h[2] = (v) => a("interactOutside", v)),
          onEscapeKeyDown: h[3] || (h[3] = (v) => a("escapeKeyDown", v)),
          onPointerDownOutside: h[4] || (h[4] = (v) => {
            var m;
            (m = l(r).parentElement.value) != null && m.contains(v.target) && v.preventDefault(), a("pointerDownOutside", v);
          })
        }, {
          default: y(() => [
            (g(), k(et(l(o) === "popper" ? l($a) : l(K)), O({ ...p.$attrs, ...l(c) }, {
              id: l(r).contentId,
              ref: l(i),
              role: "listbox",
              "data-state": l(r).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...l(o) === "popper" ? f : {}
              },
              onPointerleave: d
            }), {
              default: y(() => [
                w(p.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (g(), k(et(l(o) === "popper" ? l($a) : l(K)), O({ key: 1 }, { ...p.$attrs, ...u.value }, {
          id: l(r).contentId,
          ref: l(i),
          role: "listbox",
          "data-state": l(r).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...l(o) === "popper" ? f : {}
          },
          onPointerleave: d
        }), {
          default: y(() => [
            w(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Ib = /* @__PURE__ */ _({
  __name: "ComboboxContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const n = de(e, t), { forwardRef: a } = W(), o = za();
    return o.contentId || (o.contentId = Fe(void 0, "radix-vue-combobox-content")), (r, i) => (g(), k(l(ft), {
      present: r.forceMount || l(o).open.value
    }, {
      default: y(() => [
        P(Pb, O({ ...l(n), ...r.$attrs }, { ref: l(a) }), {
          default: y(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Rb = /* @__PURE__ */ _({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    W();
    const n = za(), a = E(() => n.filteredOptions.value.length === 0);
    return (o, r) => a.value ? (g(), k(l(K), Z(O({ key: 0 }, t)), {
      default: y(() => [
        w(o.$slots, "default", {}, () => [
          fe("No options")
        ])
      ]),
      _: 3
    }, 16)) : te("", !0);
  }
});
function Fb(e) {
  const t = Ci({
    nonce: M()
  });
  return E(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [PP, Nb] = pe("ComboboxItem"), Lb = "combobox.select", Vb = /* @__PURE__ */ _({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { disabled: o } = ce(n), r = za();
    vp({ id: "", options: M([]) });
    const { forwardRef: i } = W(), s = E(
      () => {
        var m, b;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (m = r.modelValue.value) == null ? void 0 : m.some((x) => In(x, n.value)) : In((b = r.modelValue) == null ? void 0 : b.value, n.value);
      }
    ), u = E(() => In(r.selectedValue.value, n.value)), c = Fe(void 0, "radix-vue-combobox-item"), d = Fe(void 0, "radix-vue-combobox-option"), f = E(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((m) => In(m, n.value)) : !0);
    async function p(m) {
      a("select", m), !(m != null && m.defaultPrevented) && !o.value && m && r.onValueChange(n.value);
    }
    function h(m) {
      if (!m)
        return;
      const b = { originalEvent: m, value: n.value };
      ql(Lb, p, b);
    }
    async function v(m) {
      await ae(), !m.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Nb({
      isSelected: s
    }), (m, b) => (g(), k(l(Ti), { value: m.value }, {
      default: y(() => [
        Yn(P(l(K), {
          id: l(d),
          ref: l(i),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": l(c),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": s.value,
          "data-state": s.value ? "checked" : "unchecked",
          "aria-disabled": l(o) || void 0,
          "data-disabled": l(o) ? "" : void 0,
          as: m.as,
          "as-child": m.asChild,
          "data-hidden": f.value ? void 0 : !0,
          onClick: h,
          onPointermove: v
        }, {
          default: y(() => [
            w(m.$slots, "default", {}, () => [
              fe(be(m.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [mi, f.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), zb = /* @__PURE__ */ _({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return W(), (n, a) => (g(), k(l(K), O(t, { "aria-hidden": "true" }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mp = /* @__PURE__ */ _({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l($i), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function qb() {
  const e = M(!1);
  return le(() => {
    Sa("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Sa(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const Hb = jf(qb), [ea, gp] = pe(["MenuRoot", "MenuSub"], "MenuContext"), [No, Wb] = pe("MenuRoot"), Ub = /* @__PURE__ */ _({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { modal: o, dir: r } = ce(n), i = En(r), s = Ee(n, "open", a), u = M(), c = Hb();
    return gp({
      open: s,
      onOpenChange: (d) => {
        s.value = d;
      },
      content: u,
      onContentChange: (d) => {
        u.value = d;
      }
    }), Wb({
      onClose: () => {
        s.value = !1;
      },
      isUsingKeyboardRef: c,
      dir: i,
      modal: o
    }), (d, f) => (g(), k(l(Va), null, {
      default: y(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Kb = "rovingFocusGroup.onEntryFocus", jb = { bubbles: !1, cancelable: !0 }, Gb = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Yb(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Xb(e, t, n) {
  const a = Yb(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(a)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(a)))
    return Gb[a];
}
function yp(e, t = !1) {
  const n = Ve();
  for (const a of e)
    if (a === n || (a.focus({ preventScroll: t }), Ve() !== n))
      return;
}
function Zb(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
const [Jb, Qb] = pe("RovingFocusGroup"), bp = /* @__PURE__ */ _({
  __name: "RovingFocusGroup",
  props: {
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: !1 },
    currentTabStopId: {},
    defaultCurrentTabStopId: {},
    preventScrollOnEntryFocus: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(e, { expose: t, emit: n }) {
    const a = e, o = n, { loop: r, orientation: i, dir: s } = ce(a), u = En(s), c = Ee(a, "currentTabStopId", o, {
      defaultValue: a.defaultCurrentTabStopId,
      passive: a.currentTabStopId === void 0
    }), d = M(!1), f = M(!1), p = M(0), { getItems: h } = au();
    function v(b) {
      const x = !f.value;
      if (b.currentTarget && b.target === b.currentTarget && x && !d.value) {
        const S = new CustomEvent(Kb, jb);
        if (b.currentTarget.dispatchEvent(S), o("entryFocus", S), !S.defaultPrevented) {
          const C = h().map((A) => A.ref).filter((A) => A.dataset.disabled !== ""), T = C.find((A) => A.getAttribute("data-active") === "true"), $ = C.find(
            (A) => A.id === c.value
          ), B = [T, $, ...C].filter(
            Boolean
          );
          yp(B, a.preventScrollOnEntryFocus);
        }
      }
      f.value = !1;
    }
    function m() {
      setTimeout(() => {
        f.value = !1;
      }, 1);
    }
    return t({
      getItems: h
    }), Qb({
      loop: r,
      dir: u,
      orientation: i,
      currentTabStopId: c,
      onItemFocus: (b) => {
        c.value = b;
      },
      onItemShiftTab: () => {
        d.value = !0;
      },
      onFocusableItemAdd: () => {
        p.value++;
      },
      onFocusableItemRemove: () => {
        p.value--;
      }
    }), (b, x) => (g(), k(l(ou), null, {
      default: y(() => [
        P(l(K), {
          tabindex: d.value || p.value === 0 ? -1 : 0,
          "data-orientation": l(i),
          as: b.as,
          "as-child": b.asChild,
          dir: l(u),
          style: { outline: "none" },
          onMousedown: x[0] || (x[0] = (S) => f.value = !0),
          onMouseup: m,
          onFocus: v,
          onBlur: x[1] || (x[1] = (S) => d.value = !1)
        }, {
          default: y(() => [
            w(b.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), e_ = /* @__PURE__ */ _({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: !0 },
    active: { type: Boolean, default: !0 },
    allowShiftKey: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Jb(), a = E(() => t.tabStopId || Fe()), o = E(
      () => n.currentTabStopId.value === a.value
    ), { getItems: r } = ru();
    le(() => {
      t.focusable && n.onFocusableItemAdd();
    }), ze(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function i(s) {
      if (s.key === "Tab" && s.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (s.target !== s.currentTarget)
        return;
      const u = Xb(
        s,
        n.orientation.value,
        n.dir.value
      );
      if (u !== void 0) {
        if (s.metaKey || s.ctrlKey || s.altKey || !t.allowShiftKey && s.shiftKey)
          return;
        s.preventDefault();
        let c = [...r().map((d) => d.ref).filter((d) => d.dataset.disabled !== "")];
        if (u === "last")
          c.reverse();
        else if (u === "prev" || u === "next") {
          u === "prev" && c.reverse();
          const d = c.indexOf(
            s.currentTarget
          );
          c = n.loop.value ? Zb(c, d + 1) : c.slice(d + 1);
        }
        ae(() => yp(c));
      }
    }
    return (s, u) => (g(), k(l(Ti), null, {
      default: y(() => [
        P(l(K), {
          tabindex: o.value ? 0 : -1,
          "data-orientation": l(n).orientation.value,
          "data-active": s.active,
          "data-disabled": s.focusable ? void 0 : "",
          as: s.as,
          "as-child": s.asChild,
          onMousedown: u[0] || (u[0] = (c) => {
            s.focusable ? l(n).onItemFocus(a.value) : c.preventDefault();
          }),
          onFocus: u[1] || (u[1] = (c) => l(n).onItemFocus(a.value)),
          onKeydown: i
        }, {
          default: y(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [iu, t_] = pe("MenuContent"), su = /* @__PURE__ */ _({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Bl({
    loop: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    disableOutsideScroll: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...hp
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = ea(), r = No(), { trapFocus: i, disableOutsidePointerEvents: s, loop: u } = ce(n);
    Kl(), Oo(s.value);
    const c = M(""), d = M(0), f = M(0), p = M(null), h = M("right"), v = M(0), m = M(null), { createCollection: b } = Na(), { forwardRef: x, currentElement: S } = W(), C = b(S);
    ee(S, (D) => {
      o.onContentChange(D);
    });
    const { handleTypeaheadSearch: T } = jl(C);
    ze(() => {
      window.clearTimeout(d.value);
    });
    function $(D) {
      var N, I;
      return h.value === ((N = p.value) == null ? void 0 : N.side) && lb(D, (I = p.value) == null ? void 0 : I.area);
    }
    async function B(D) {
      var N;
      a("openAutoFocus", D), !D.defaultPrevented && (D.preventDefault(), (N = S.value) == null || N.focus({
        preventScroll: !0
      }));
    }
    function A(D) {
      if (D.defaultPrevented)
        return;
      const N = D.target.closest("[data-radix-menu-content]") === D.currentTarget, I = D.ctrlKey || D.altKey || D.metaKey, G = D.key.length === 1, z = Zf(
        D,
        Ve(),
        S.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (z)
        return z == null ? void 0 : z.focus();
      if (D.code === "Space" || (N && (D.key === "Tab" && D.preventDefault(), !I && G && T(D.key)), D.target !== S.value) || !ob.includes(D.key))
        return;
      D.preventDefault();
      const Y = C.value;
      lp.includes(D.key) && Y.reverse(), Ns(Y);
    }
    function R(D) {
      var N, I;
      (I = (N = D == null ? void 0 : D.currentTarget) == null ? void 0 : N.contains) != null && I.call(N, D.target) || (window.clearTimeout(d.value), c.value = "");
    }
    function L(D) {
      var N;
      if (!yo(D))
        return;
      const I = D.target, G = v.value !== D.clientX;
      if ((N = D == null ? void 0 : D.currentTarget) != null && N.contains(I) && G) {
        const z = D.clientX > v.value ? "right" : "left";
        h.value = z, v.value = D.clientX;
      }
    }
    return t_({
      onItemEnter: (D) => !!$(D),
      onItemLeave: (D) => {
        var N;
        $(D) || ((N = S.value) == null || N.focus(), m.value = null);
      },
      onTriggerLeave: (D) => !!$(D),
      searchRef: c,
      pointerGraceTimerRef: f,
      onPointerGraceIntentChange: (D) => {
        p.value = D;
      }
    }), (D, N) => (g(), k(l(Si), {
      "as-child": "",
      trapped: l(i),
      onMountAutoFocus: B,
      onUnmountAutoFocus: N[7] || (N[7] = (I) => a("closeAutoFocus", I))
    }, {
      default: y(() => [
        P(l(La), {
          "as-child": "",
          "disable-outside-pointer-events": l(s),
          onEscapeKeyDown: N[2] || (N[2] = (I) => a("escapeKeyDown", I)),
          onPointerDownOutside: N[3] || (N[3] = (I) => a("pointerDownOutside", I)),
          onFocusOutside: N[4] || (N[4] = (I) => a("focusOutside", I)),
          onInteractOutside: N[5] || (N[5] = (I) => a("interactOutside", I)),
          onDismiss: N[6] || (N[6] = (I) => a("dismiss"))
        }, {
          default: y(() => [
            P(l(bp), {
              "current-tab-stop-id": m.value,
              "onUpdate:currentTabStopId": N[0] || (N[0] = (I) => m.value = I),
              "as-child": "",
              orientation: "vertical",
              dir: l(r).dir.value,
              loop: l(u),
              onEntryFocus: N[1] || (N[1] = (I) => {
                a("entryFocus", I), l(r).isUsingKeyboardRef.value || I.preventDefault();
              })
            }, {
              default: y(() => [
                P(l($a), {
                  ref: l(x),
                  role: "menu",
                  as: D.as,
                  "as-child": D.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(Jl)(l(o).open.value),
                  dir: l(r).dir.value,
                  side: D.side,
                  "side-offset": D.sideOffset,
                  align: D.align,
                  "align-offset": D.alignOffset,
                  "avoid-collisions": D.avoidCollisions,
                  "collision-boundary": D.collisionBoundary,
                  "collision-padding": D.collisionPadding,
                  "arrow-padding": D.arrowPadding,
                  "prioritize-position": D.prioritizePosition,
                  sticky: D.sticky,
                  "hide-when-detached": D.hideWhenDetached,
                  onKeydown: A,
                  onBlur: R,
                  onPointermove: L
                }, {
                  default: y(() => [
                    w(D.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["as", "as-child", "data-state", "dir", "side", "side-offset", "align", "align-offset", "avoid-collisions", "collision-boundary", "collision-padding", "arrow-padding", "prioritize-position", "sticky", "hide-when-detached"])
              ]),
              _: 3
            }, 8, ["current-tab-stop-id", "dir", "loop"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), _p = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = iu(), { forwardRef: a } = W(), o = M(!1);
    async function r(s) {
      if (!s.defaultPrevented && yo(s)) {
        if (t.disabled)
          n.onItemLeave(s);
        else if (!n.onItemEnter(s)) {
          const u = s.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function i(s) {
      await ae(), !s.defaultPrevented && yo(s) && n.onItemLeave(s);
    }
    return (s, u) => (g(), k(l(Ti), {
      value: { textValue: s.textValue }
    }, {
      default: y(() => [
        P(l(K), O({
          ref: l(a),
          role: "menuitem",
          tabindex: "-1"
        }, s.$attrs, {
          as: s.as,
          "as-child": s.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": s.disabled || void 0,
          "data-disabled": s.disabled ? "" : void 0,
          "data-highlighted": o.value ? "" : void 0,
          onPointermove: r,
          onPointerleave: i,
          onFocus: u[0] || (u[0] = async (c) => {
            await ae(), !(c.defaultPrevented || s.disabled) && (o.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (c) => {
            await ae(), !c.defaultPrevented && (o.value = !1);
          })
        }), {
          default: y(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), lu = /* @__PURE__ */ _({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: r } = W(), i = No(), s = iu(), u = M(!1);
    async function c() {
      const d = r.value;
      if (!n.disabled && d) {
        const f = new CustomEvent(nb, {
          bubbles: !0,
          cancelable: !0
        });
        a("select", f), await ae(), f.defaultPrevented ? u.value = !1 : i.onClose();
      }
    }
    return (d, f) => (g(), k(_p, O(n, {
      ref: l(o),
      onClick: c,
      onPointerdown: f[0] || (f[0] = () => {
        u.value = !0;
      }),
      onPointerup: f[1] || (f[1] = async (p) => {
        var h;
        await ae(), !p.defaultPrevented && (u.value || (h = p.currentTarget) == null || h.click());
      }),
      onKeydown: f[2] || (f[2] = async (p) => {
        const h = l(s).searchRef.value !== "";
        d.disabled || h && p.key === " " || l(Fs).includes(p.key) && (p.currentTarget.click(), p.preventDefault());
      })
    }), {
      default: y(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [n_, xp] = pe(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), a_ = /* @__PURE__ */ _({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = n_({
      checked: M(!1)
    });
    return (n, a) => (g(), k(l(ft), {
      present: n.forceMount || l(Vr)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: y(() => [
        P(l(K), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": l(Ql)(l(t).checked.value)
        }, {
          default: y(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), o_ = /* @__PURE__ */ _({
  __name: "MenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String], default: !1 },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Ee(n, "checked", a);
    return xp({ checked: o }), (r, i) => (g(), k(lu, O({ role: "menuitemcheckbox" }, n, {
      "aria-checked": l(Vr)(l(o)) ? "mixed" : l(o),
      "data-state": l(Ql)(l(o)),
      onSelect: i[0] || (i[0] = async (s) => {
        a("select", s), l(Vr)(l(o)) ? o.value = !0 : o.value = !l(o);
      })
    }), {
      default: y(() => [
        w(r.$slots, "default", { checked: l(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), r_ = /* @__PURE__ */ _({
  __name: "MenuRootContentModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = de(n, a), r = ea(), { forwardRef: i, currentElement: s } = W();
    return Po(s), (u, c) => (g(), k(su, O(l(o), {
      ref: l(i),
      "trap-focus": l(r).open.value,
      "disable-outside-pointer-events": l(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (d) => l(r).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = De((d) => a("focusOutside", d), ["prevent"]))
    }), {
      default: y(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), i_ = /* @__PURE__ */ _({
  __name: "MenuRootContentNonModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = de(e, t), a = ea();
    return (o, r) => (g(), k(su, O(l(n), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: r[0] || (r[0] = (i) => l(a).onOpenChange(!1))
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), s_ = /* @__PURE__ */ _({
  __name: "MenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = de(e, t), a = ea(), o = No();
    return (r, i) => (g(), k(l(ft), {
      present: r.forceMount || l(a).open.value
    }, {
      default: y(() => [
        l(o).modal.value ? (g(), k(r_, Z(O({ key: 0 }, { ...r.$attrs, ...l(n) })), {
          default: y(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), k(i_, Z(O({ key: 1 }, { ...r.$attrs, ...l(n) })), {
          default: y(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), wp = /* @__PURE__ */ _({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(K), O({ role: "group" }, t), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), l_ = /* @__PURE__ */ _({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(K), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), u_ = /* @__PURE__ */ _({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(Io), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [c_, d_] = pe("MenuRadioGroup"), f_ = /* @__PURE__ */ _({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Ee(n, "modelValue", t);
    return d_({
      modelValue: a,
      onValueChange: (o) => {
        a.value = o;
      }
    }), (o, r) => (g(), k(wp, Z(Q(n)), {
      default: y(() => [
        w(o.$slots, "default", { modelValue: l(a) })
      ]),
      _: 3
    }, 16));
  }
}), p_ = /* @__PURE__ */ _({
  __name: "MenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { value: o } = ce(n), r = c_(), i = E(
      () => r.modelValue.value === (o == null ? void 0 : o.value)
    );
    return xp({ checked: i }), (s, u) => (g(), k(lu, O({ role: "menuitemradio" }, n, {
      "aria-checked": i.value,
      "data-state": l(Ql)(i.value),
      onSelect: u[0] || (u[0] = async (c) => {
        a("select", c), l(r).onValueChange(l(o));
      })
    }), {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), h_ = /* @__PURE__ */ _({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(K), O(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Cp, v_] = pe("MenuSub"), m_ = /* @__PURE__ */ _({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = Ee(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), o = ea(), r = M(), i = M();
    return ge((s) => {
      (o == null ? void 0 : o.open.value) === !1 && (a.value = !1), s(() => a.value = !1);
    }), gp({
      open: a,
      onOpenChange: (s) => {
        a.value = s;
      },
      content: i,
      onContentChange: (s) => {
        i.value = s;
      }
    }), v_({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (s) => {
        r.value = s;
      }
    }), (s, u) => (g(), k(l(Va), null, {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}), g_ = /* @__PURE__ */ _({
  __name: "MenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = de(e, t), a = ea(), o = No(), r = Cp(), { forwardRef: i, currentElement: s } = W();
    return r.contentId || (r.contentId = Fe(void 0, "radix-vue-menu-sub-content")), (u, c) => (g(), k(l(ft), {
      present: u.forceMount || l(a).open.value
    }, {
      default: y(() => [
        P(su, O(l(n), {
          id: l(r).contentId,
          ref: l(i),
          "aria-labelledby": l(r).triggerId,
          align: "start",
          side: l(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = De((d) => {
            var f;
            l(o).isUsingKeyboardRef.value && ((f = l(s)) == null || f.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = De(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (d) => {
            d.defaultPrevented || d.target !== l(r).trigger.value && l(a).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (d) => {
            l(o).onClose(), d.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (d) => {
            var f, p;
            const h = (f = d.currentTarget) == null ? void 0 : f.contains(d.target), v = l(ib)[l(o).dir.value].includes(d.key);
            h && v && (l(a).onOpenChange(!1), (p = l(r).trigger.value) == null || p.focus(), d.preventDefault());
          })
        }), {
          default: y(() => [
            w(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), y_ = /* @__PURE__ */ _({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ea(), a = No(), o = Cp(), r = iu(), i = M(null);
    o.triggerId || (o.triggerId = Fe(void 0, "radix-vue-menu-sub-trigger"));
    function s() {
      i.value && window.clearTimeout(i.value), i.value = null;
    }
    ze(() => {
      s();
    });
    function u(f) {
      !yo(f) || r.onItemEnter(f) || !t.disabled && !n.open.value && !i.value && (r.onPointerGraceIntentChange(null), i.value = window.setTimeout(() => {
        n.onOpenChange(!0), s();
      }, 100));
    }
    async function c(f) {
      var p, h;
      if (!yo(f))
        return;
      s();
      const v = (p = n.content.value) == null ? void 0 : p.getBoundingClientRect();
      if (v != null && v.width) {
        const m = (h = n.content.value) == null ? void 0 : h.dataset.side, b = m === "right", x = b ? -5 : 5, S = v[b ? "left" : "right"], C = v[b ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: f.clientX + x, y: f.clientY },
            { x: S, y: v.top },
            { x: C, y: v.top },
            { x: C, y: v.bottom },
            { x: S, y: v.bottom }
          ],
          side: m
        }), window.clearTimeout(r.pointerGraceTimerRef.value), r.pointerGraceTimerRef.value = window.setTimeout(
          () => r.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (r.onTriggerLeave(f))
          return;
        r.onPointerGraceIntentChange(null);
      }
    }
    async function d(f) {
      var p;
      const h = r.searchRef.value !== "";
      t.disabled || h && f.key === " " || rb[a.dir.value].includes(f.key) && (n.onOpenChange(!0), await ae(), (p = n.content.value) == null || p.focus(), f.preventDefault());
    }
    return (f, p) => (g(), k(mp, { "as-child": "" }, {
      default: y(() => [
        P(_p, O(t, {
          id: l(o).triggerId,
          ref: (h) => {
            var v;
            (v = l(o)) == null || v.onTriggerChange(h == null ? void 0 : h.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(o).contentId,
          "data-state": l(Jl)(l(n).open.value),
          onClick: p[0] || (p[0] = async (h) => {
            t.disabled || h.defaultPrevented || (h.currentTarget.focus(), l(n).open.value || l(n).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: c,
          onKeydown: d
        }), {
          default: y(() => [
            w(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [kp, b_] = pe("DropdownMenuRoot"), __ = /* @__PURE__ */ _({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    W();
    const o = Ee(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = M(), { modal: i, dir: s } = ce(n), u = En(s);
    return b_({
      open: o,
      onOpenChange: (c) => {
        o.value = c;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerId: "",
      triggerElement: r,
      contentId: "",
      modal: i,
      dir: u
    }), (c, d) => (g(), k(l(Ub), {
      open: l(o),
      "onUpdate:open": d[0] || (d[0] = (f) => lt(o) ? o.value = f : null),
      dir: l(u),
      modal: l(i)
    }, {
      default: y(() => [
        w(c.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), x_ = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = kp(), { forwardRef: a, currentElement: o } = W();
    return le(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = Fe(void 0, "radix-vue-dropdown-menu-trigger")), (r, i) => (g(), k(l(mp), { "as-child": "" }, {
      default: y(() => [
        P(l(K), {
          id: l(n).triggerId,
          ref: l(a),
          type: r.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: r.as,
          "aria-haspopup": "menu",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(n).open.value ? l(n).contentId : void 0,
          "data-disabled": r.disabled ? "" : void 0,
          disabled: r.disabled,
          "data-state": l(n).open.value ? "open" : "closed",
          onClick: i[0] || (i[0] = async (s) => {
            var u;
            !r.disabled && s.button === 0 && s.ctrlKey === !1 && ((u = l(n)) == null || u.onOpenToggle(), await ae(), l(n).open.value && s.preventDefault());
          }),
          onKeydown: i[1] || (i[1] = Ge(
            (s) => {
              r.disabled || (["Enter", " "].includes(s.key) && l(n).onOpenToggle(), s.key === "ArrowDown" && l(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: y(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), w_ = /* @__PURE__ */ _({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(u_), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), C_ = /* @__PURE__ */ _({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = de(e, t);
    W();
    const a = kp(), o = M(!1);
    function r(i) {
      i.defaultPrevented || (o.value || setTimeout(() => {
        var s;
        (s = a.triggerElement.value) == null || s.focus();
      }, 0), o.value = !1, i.preventDefault());
    }
    return a.contentId || (a.contentId = Fe(void 0, "radix-vue-dropdown-menu-content")), (i, s) => {
      var u;
      return g(), k(l(s_), O(l(n), {
        id: l(a).contentId,
        "aria-labelledby": (u = l(a)) == null ? void 0 : u.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: r,
        onInteractOutside: s[0] || (s[0] = (c) => {
          var d;
          if (c.defaultPrevented) return;
          const f = c.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0, h = f.button === 2 || p;
          (!l(a).modal.value || h) && (o.value = !0), (d = l(a).triggerElement.value) != null && d.contains(c.target) && c.preventDefault();
        })
      }), {
        default: y(() => [
          w(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Sp = /* @__PURE__ */ _({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = Qn(t);
    return W(), (o, r) => (g(), k(l(lu), Z(Q({ ...n, ...l(a) })), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), k_ = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return W(), (n, a) => (g(), k(l(wp), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), S_ = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return W(), (n, a) => (g(), k(l(h_), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $_ = /* @__PURE__ */ _({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(e, { emit: t }) {
    const n = e, a = Qn(t);
    return W(), (o, r) => (g(), k(l(o_), Z(Q({ ...n, ...l(a) })), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $p = /* @__PURE__ */ _({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return W(), (n, a) => (g(), k(l(a_), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), T_ = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return W(), (n, a) => (g(), k(l(l_), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), A_ = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Qn(t);
    return W(), (o, r) => (g(), k(l(f_), Z(Q({ ...n, ...l(a) })), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), E_ = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = de(e, t);
    return W(), (a, o) => (g(), k(l(p_), Z(Q(l(n))), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), B_ = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = Ee(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return W(), (o, r) => (g(), k(l(m_), {
      open: l(a),
      "onUpdate:open": r[0] || (r[0] = (i) => lt(a) ? a.value = i : null)
    }, {
      default: y(() => [
        w(o.$slots, "default", { open: l(a) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), M_ = /* @__PURE__ */ _({
  __name: "DropdownMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = de(e, t);
    return W(), (a, o) => (g(), k(l(g_), O(l(n), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), O_ = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return W(), (n, a) => (g(), k(l(y_), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), D_ = /* @__PURE__ */ _({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return W(), (n, a) => (g(), k(l(K), O(t, {
      onMousedown: a[0] || (a[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [qa, P_] = pe("PaginationRoot"), IP = /* @__PURE__ */ _({
  __name: "PaginationRoot",
  props: {
    page: {},
    defaultPage: { default: 1 },
    itemsPerPage: { default: 10 },
    total: { default: 0 },
    siblingCount: { default: 2 },
    disabled: { type: Boolean },
    showEdges: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "nav" }
  },
  emits: ["update:page"],
  setup(e, { emit: t }) {
    const n = e, a = t, { siblingCount: o, disabled: r, showEdges: i } = ce(n);
    W();
    const s = Ee(n, "page", a, {
      defaultValue: n.defaultPage,
      passive: n.page === void 0
    }), u = E(() => Math.max(1, Math.ceil(n.total / n.itemsPerPage)));
    return P_({
      page: s,
      onPageChange(c) {
        s.value = c;
      },
      pageCount: u,
      siblingCount: o,
      disabled: r,
      showEdges: i
    }), (c, d) => (g(), k(l(K), {
      as: c.as,
      "as-child": c.asChild
    }, {
      default: y(() => [
        w(c.$slots, "default", {
          page: l(s),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), I_ = /* @__PURE__ */ _({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return W(), (n, a) => (g(), k(l(K), O(t, { "data-type": "ellipsis" }), {
      default: y(() => [
        w(n.$slots, "default", {}, () => [
          fe("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), R_ = /* @__PURE__ */ _({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = qa();
    W();
    const a = E(() => n.page.value === 1 || n.disabled.value);
    return (o, r) => (g(), k(l(K), O(t, {
      "aria-label": "First Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (i) => !a.value && l(n).onPageChange(1))
    }), {
      default: y(() => [
        w(o.$slots, "default", {}, () => [
          fe("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), F_ = /* @__PURE__ */ _({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = qa();
    W();
    const a = E(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (o, r) => (g(), k(l(K), O(t, {
      "aria-label": "Last Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (i) => !a.value && l(n).onPageChange(l(n).pageCount.value))
    }), {
      default: y(() => [
        w(o.$slots, "default", {}, () => [
          fe("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function pn(e, t) {
  const n = t - e + 1;
  return Array.from({ length: n }, (a, o) => o + e);
}
function N_(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const Qo = "ellipsis";
function L_(e, t, n, a) {
  const o = t, r = Math.max(e - n, 1), i = Math.min(e + n, o);
  if (a) {
    const s = Math.min(2 * n + 5, t) - 2, u = r > 3 && Math.abs(o - s - 1 + 1) > 2 && Math.abs(r - 1) > 2, c = i < o - 2 && Math.abs(o - s) > 2 && Math.abs(o - i) > 2;
    if (!u && c)
      return [...pn(1, s), Qo, o];
    if (u && !c) {
      const d = pn(o - s + 1, o);
      return [1, Qo, ...d];
    }
    if (u && c) {
      const d = pn(r, i);
      return [1, Qo, ...d, Qo, o];
    }
    return pn(1, o);
  } else {
    const s = n * 2 + 1;
    return t < s ? pn(1, o) : e <= n + 1 ? pn(1, s) : t - e <= n ? pn(t - s + 1, o) : pn(r, i);
  }
}
const RP = /* @__PURE__ */ _({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    W();
    const n = qa(), a = E(() => N_(
      L_(
        n.page.value,
        n.pageCount.value,
        n.siblingCount.value,
        n.showEdges.value
      )
    ));
    return (o, r) => (g(), k(l(K), Z(Q(t)), {
      default: y(() => [
        w(o.$slots, "default", { items: a.value })
      ]),
      _: 3
    }, 16));
  }
}), FP = /* @__PURE__ */ _({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    W();
    const n = qa(), a = E(() => n.page.value === t.value), o = E(() => n.disabled.value);
    return (r, i) => (g(), k(l(K), O(t, {
      "data-type": "page",
      "aria-label": `Page ${r.value}`,
      "aria-current": a.value ? "page" : void 0,
      "data-selected": a.value ? "true" : void 0,
      disabled: o.value,
      type: r.as === "button" ? "button" : void 0,
      onClick: i[0] || (i[0] = (s) => !o.value && l(n).onPageChange(r.value))
    }), {
      default: y(() => [
        w(r.$slots, "default", {}, () => [
          fe(be(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), V_ = /* @__PURE__ */ _({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    W();
    const n = qa(), a = E(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (o, r) => (g(), k(l(K), O(t, {
      "aria-label": "Next Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (i) => !a.value && l(n).onPageChange(l(n).page.value + 1))
    }), {
      default: y(() => [
        w(o.$slots, "default", {}, () => [
          fe("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), z_ = /* @__PURE__ */ _({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    W();
    const n = qa(), a = E(() => n.page.value === 1 || n.disabled.value);
    return (o, r) => (g(), k(l(K), O(t, {
      "aria-label": "Previous Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (i) => !a.value && l(n).onPageChange(l(n).page.value - 1))
    }), {
      default: y(() => [
        w(o.$slots, "default", {}, () => [
          fe("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), [Lo, q_] = pe("PopoverRoot"), H_ = /* @__PURE__ */ _({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { modal: o } = ce(n), r = Ee(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), i = M(), s = M(!1);
    return q_({
      contentId: "",
      modal: o,
      open: r,
      onOpenChange: (u) => {
        r.value = u;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerElement: i,
      hasCustomAnchor: s
    }), (u, c) => (g(), k(l(Va), null, {
      default: y(() => [
        w(u.$slots, "default", { open: l(r) })
      ]),
      _: 3
    }));
  }
}), W_ = /* @__PURE__ */ _({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Lo(), { forwardRef: a, currentElement: o } = W();
    return le(() => {
      n.triggerElement.value = o.value;
    }), (r, i) => (g(), k(et(l(n).hasCustomAnchor.value ? l(K) : l($i)), { "as-child": "" }, {
      default: y(() => [
        P(l(K), {
          ref: l(a),
          type: r.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(n).contentId,
          "data-state": l(n).open.value ? "open" : "closed",
          as: r.as,
          "as-child": t.asChild,
          onClick: l(n).onOpenToggle
        }, {
          default: y(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), U_ = /* @__PURE__ */ _({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(Io), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tp = /* @__PURE__ */ _({
  __name: "PopoverContentImpl",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Le(n), { forwardRef: r } = W(), i = Lo();
    return Kl(), (s, u) => (g(), k(l(Si), {
      "as-child": "",
      loop: "",
      trapped: s.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (c) => a("openAutoFocus", c)),
      onUnmountAutoFocus: u[6] || (u[6] = (c) => a("closeAutoFocus", c))
    }, {
      default: y(() => [
        P(l(La), {
          "as-child": "",
          "disable-outside-pointer-events": s.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (c) => a("pointerDownOutside", c)),
          onInteractOutside: u[1] || (u[1] = (c) => a("interactOutside", c)),
          onEscapeKeyDown: u[2] || (u[2] = (c) => a("escapeKeyDown", c)),
          onFocusOutside: u[3] || (u[3] = (c) => a("focusOutside", c)),
          onDismiss: u[4] || (u[4] = (c) => l(i).onOpenChange(!1))
        }, {
          default: y(() => [
            P(l($a), O(l(o), {
              id: l(i).contentId,
              ref: l(r),
              "data-state": l(i).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: y(() => [
                w(s.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), K_ = /* @__PURE__ */ _({
  __name: "PopoverContentModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Lo(), r = M(!1);
    Oo(!0);
    const i = de(n, a), { forwardRef: s, currentElement: u } = W();
    return Po(u), (c, d) => (g(), k(Tp, O(l(i), {
      ref: l(s),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: d[0] || (d[0] = De(
        (f) => {
          var p;
          a("closeAutoFocus", f), r.value || (p = l(o).triggerElement.value) == null || p.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: d[1] || (d[1] = (f) => {
        a("pointerDownOutside", f);
        const p = f.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0, v = p.button === 2 || h;
        r.value = v;
      }),
      onFocusOutside: d[2] || (d[2] = De(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), j_ = /* @__PURE__ */ _({
  __name: "PopoverContentNonModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Lo(), r = M(!1), i = M(!1), s = de(n, a);
    return (u, c) => (g(), k(Tp, O(l(s), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (d) => {
        var f;
        a("closeAutoFocus", d), d.defaultPrevented || (r.value || (f = l(o).triggerElement.value) == null || f.focus(), d.preventDefault()), r.value = !1, i.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = async (d) => {
        var f;
        a("interactOutside", d), d.defaultPrevented || (r.value = !0, d.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const p = d.target;
        (f = l(o).triggerElement.value) != null && f.contains(p) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && i.value && d.preventDefault();
      })
    }), {
      default: y(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), G_ = /* @__PURE__ */ _({
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Lo(), r = de(n, a), { forwardRef: i } = W();
    return o.contentId || (o.contentId = Fe(void 0, "radix-vue-popover-content")), (s, u) => (g(), k(l(ft), {
      present: s.forceMount || l(o).open.value
    }, {
      default: y(() => [
        l(o).modal.value ? (g(), k(K_, O({ key: 0 }, l(r), { ref: l(i) }), {
          default: y(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), k(j_, O({ key: 1 }, l(r), { ref: l(i) }), {
          default: y(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Y_ = ["default-value"], X_ = /* @__PURE__ */ _({
  __name: "BubbleSelect",
  props: {
    autocomplete: {},
    autofocus: { type: Boolean },
    disabled: { type: Boolean },
    form: {},
    multiple: { type: Boolean },
    name: {},
    required: { type: Boolean },
    size: {},
    value: {}
  },
  setup(e) {
    const t = e, { value: n } = ce(t), a = M();
    return (o, r) => (g(), k(l(Fo), { "as-child": "" }, {
      default: y(() => [
        Yn($e("select", O({
          ref_key: "selectElement",
          ref: a
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => lt(n) ? n.value = i : null),
          "default-value": l(n)
        }), [
          w(o.$slots, "default")
        ], 16, Y_), [
          [Vm, l(n)]
        ])
      ]),
      _: 3
    }));
  }
}), Z_ = {
  key: 0,
  value: ""
}, [ta, Ap] = pe("SelectRoot"), [J_, Q_] = pe("SelectRoot"), e0 = /* @__PURE__ */ _({
  __name: "SelectRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    defaultValue: { default: "" },
    modelValue: { default: void 0 },
    dir: {},
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Ee(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), r = Ee(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), i = M(), s = M(), u = M({
      x: 0,
      y: 0
    }), c = M(!1), { required: d, disabled: f, dir: p } = ce(n), h = En(p);
    Ap({
      triggerElement: i,
      onTriggerChange: (x) => {
        i.value = x;
      },
      valueElement: s,
      onValueElementChange: (x) => {
        s.value = x;
      },
      valueElementHasChildren: c,
      onValueElementHasChildrenChange: (x) => {
        c.value = x;
      },
      contentId: "",
      modelValue: o,
      onValueChange: (x) => {
        o.value = x;
      },
      open: r,
      required: d,
      onOpenChange: (x) => {
        r.value = x;
      },
      dir: h,
      triggerPointerDownPosRef: u,
      disabled: f
    });
    const v = Do(i), m = M(/* @__PURE__ */ new Set()), b = E(() => Array.from(m.value).map((x) => {
      var S;
      return (S = x.props) == null ? void 0 : S.value;
    }).join(";"));
    return Q_({
      onNativeOptionAdd: (x) => {
        m.value.add(x);
      },
      onNativeOptionRemove: (x) => {
        m.value.delete(x);
      }
    }), (x, S) => (g(), k(l(Va), null, {
      default: y(() => [
        w(x.$slots, "default", {
          modelValue: l(o),
          open: l(r)
        }),
        l(v) ? (g(), k(X_, O({ key: b.value }, x.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: l(d),
          name: x.name,
          autocomplete: x.autocomplete,
          disabled: l(f),
          value: l(o),
          onChange: S[0] || (S[0] = (C) => o.value = C.target.value)
        }), {
          default: y(() => [
            l(o) === void 0 ? (g(), V("option", Z_)) : te("", !0),
            (g(!0), V(ve, null, Ye(Array.from(m.value), (C) => (g(), k(et(C), O({ ref_for: !0 }, C.props, {
              key: C.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : te("", !0)
      ]),
      _: 3
    }));
  }
}), t0 = [" ", "Enter", "ArrowUp", "ArrowDown"], n0 = [" ", "Enter"], _t = 10;
function Ep(e) {
  return e === "" || gr(e);
}
const a0 = /* @__PURE__ */ _({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ta(), a = E(() => {
      var h;
      return ((h = n.disabled) == null ? void 0 : h.value) || t.disabled;
    }), { forwardRef: o, currentElement: r } = W();
    n.contentId || (n.contentId = Fe(void 0, "radix-vue-select-content")), le(() => {
      n.triggerElement = r;
    });
    const { injectCollection: i } = Na(), s = i(), { search: u, handleTypeaheadSearch: c, resetTypeahead: d } = jl(s);
    function f() {
      a.value || (n.onOpenChange(!0), d());
    }
    function p(h) {
      f(), n.triggerPointerDownPosRef.value = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      };
    }
    return (h, v) => (g(), k(l($i), { "as-child": "" }, {
      default: y(() => {
        var m, b, x, S;
        return [
          P(l(K), {
            ref: l(o),
            role: "combobox",
            type: h.as === "button" ? "button" : void 0,
            "aria-controls": l(n).contentId,
            "aria-expanded": l(n).open.value || !1,
            "aria-required": (m = l(n).required) == null ? void 0 : m.value,
            "aria-autocomplete": "none",
            disabled: a.value,
            dir: (b = l(n)) == null ? void 0 : b.dir.value,
            "data-state": (x = l(n)) != null && x.open.value ? "open" : "closed",
            "data-disabled": a.value ? "" : void 0,
            "data-placeholder": l(Ep)((S = l(n).modelValue) == null ? void 0 : S.value) ? "" : void 0,
            "as-child": h.asChild,
            as: h.as,
            onClick: v[0] || (v[0] = (C) => {
              var T;
              (T = C == null ? void 0 : C.currentTarget) == null || T.focus();
            }),
            onPointerdown: v[1] || (v[1] = (C) => {
              if (C.pointerType === "touch")
                return C.preventDefault();
              const T = C.target;
              T.hasPointerCapture(C.pointerId) && T.releasePointerCapture(C.pointerId), C.button === 0 && C.ctrlKey === !1 && (p(C), C.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = De(
              (C) => {
                C.pointerType === "touch" && p(C);
              },
              ["prevent"]
            )),
            onKeydown: v[3] || (v[3] = (C) => {
              const T = l(u) !== "";
              !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && T && C.key === " " || (l(c)(C.key), l(t0).includes(C.key) && (f(), C.preventDefault()));
            })
          }, {
            default: y(() => [
              w(h.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), o0 = /* @__PURE__ */ _({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(Io), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [uu, r0] = pe("SelectItemAlignedPosition"), i0 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { injectCollection: o } = Na(), r = ta(), i = na(), s = o(), u = M(!1), c = M(!0), d = M(), { forwardRef: f, currentElement: p } = W(), { viewport: h, selectedItem: v, selectedItemText: m, focusSelectedItem: b } = i;
    function x() {
      if (r.triggerElement.value && r.valueElement.value && d.value && p.value && h != null && h.value && v != null && v.value && m != null && m.value) {
        const T = r.triggerElement.value.getBoundingClientRect(), $ = p.value.getBoundingClientRect(), B = r.valueElement.value.getBoundingClientRect(), A = m.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const X = A.left - $.left, re = B.left - X, H = T.left - re, J = T.width + H, se = Math.max(J, $.width), U = window.innerWidth - _t, Ie = Lr(re, _t, Math.max(_t, U - se));
          d.value.style.minWidth = `${J}px`, d.value.style.left = `${Ie}px`;
        } else {
          const X = $.right - A.right, re = window.innerWidth - B.right - X, H = window.innerWidth - T.right - re, J = T.width + H, se = Math.max(J, $.width), U = window.innerWidth - _t, Ie = Lr(
            re,
            _t,
            Math.max(_t, U - se)
          );
          d.value.style.minWidth = `${J}px`, d.value.style.right = `${Ie}px`;
        }
        const R = s.value, L = window.innerHeight - _t * 2, D = h.value.scrollHeight, N = window.getComputedStyle(p.value), I = Number.parseInt(
          N.borderTopWidth,
          10
        ), G = Number.parseInt(N.paddingTop, 10), z = Number.parseInt(
          N.borderBottomWidth,
          10
        ), Y = Number.parseInt(
          N.paddingBottom,
          10
        ), ne = I + G + D + Y + z, _e = Math.min(
          v.value.offsetHeight * 5,
          ne
        ), he = window.getComputedStyle(h.value), q = Number.parseInt(he.paddingTop, 10), oe = Number.parseInt(
          he.paddingBottom,
          10
        ), ie = T.top + T.height / 2 - _t, Ue = L - ie, Ze = v.value.offsetHeight / 2, nt = v.value.offsetTop + Ze, at = I + G + nt, la = ne - at;
        if (at <= ie) {
          const X = v.value === R[R.length - 1];
          d.value.style.bottom = "0px";
          const re = p.value.clientHeight - h.value.offsetTop - h.value.offsetHeight, H = Math.max(
            Ue,
            Ze + (X ? oe : 0) + re + z
          ), J = at + H;
          d.value.style.height = `${J}px`;
        } else {
          const X = v.value === R[0];
          d.value.style.top = "0px";
          const re = Math.max(
            ie,
            I + h.value.offsetTop + (X ? q : 0) + Ze
          ) + la;
          d.value.style.height = `${re}px`, h.value.scrollTop = at - ie + h.value.offsetTop;
        }
        d.value.style.margin = `${_t}px 0`, d.value.style.minHeight = `${_e}px`, d.value.style.maxHeight = `${L}px`, a("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const S = M("");
    le(async () => {
      await ae(), x(), p.value && (S.value = window.getComputedStyle(p.value).zIndex);
    });
    function C(T) {
      T && c.value === !0 && (x(), b == null || b(), c.value = !1);
    }
    return r0({
      contentWrapper: d,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: C
    }), (T, $) => (g(), V("div", {
      ref_key: "contentWrapperElement",
      ref: d,
      style: qt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: S.value
      })
    }, [
      P(l(K), O({
        ref: l(f),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...T.$attrs, ...n }), {
        default: y(() => [
          w(T.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), s0 = /* @__PURE__ */ _({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: _t },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Le(e);
    return (n, a) => (g(), k(l($a), O(l(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ha = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [na, l0] = pe("SelectContent"), u0 = /* @__PURE__ */ _({
  __name: "SelectContentImpl",
  props: {
    position: { default: "item-aligned" },
    bodyLock: { type: Boolean, default: !0 },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = ta();
    Kl(), Oo(n.bodyLock);
    const { createCollection: r } = Na(), i = M();
    Po(i);
    const s = r(i), { search: u, handleTypeaheadSearch: c } = jl(s), d = M(), f = M(), p = M(), h = M(!1), v = M(!1);
    function m() {
      f.value && i.value && Ns([f.value, i.value]);
    }
    ee(h, () => {
      m();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: x } = o;
    ge(($) => {
      if (!i.value)
        return;
      let B = { x: 0, y: 0 };
      const A = (L) => {
        var D, N;
        B = {
          x: Math.abs(
            Math.round(L.pageX) - (((D = x.value) == null ? void 0 : D.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(L.pageY) - (((N = x.value) == null ? void 0 : N.y) ?? 0)
          )
        };
      }, R = (L) => {
        var D;
        L.pointerType !== "touch" && (B.x <= 10 && B.y <= 10 ? L.preventDefault() : (D = i.value) != null && D.contains(L.target) || b(!1), document.removeEventListener("pointermove", A), x.value = null);
      };
      x.value !== null && (document.addEventListener("pointermove", A), document.addEventListener("pointerup", R, {
        capture: !0,
        once: !0
      })), $(() => {
        document.removeEventListener("pointermove", A), document.removeEventListener("pointerup", R, {
          capture: !0
        });
      });
    });
    function S($) {
      const B = $.ctrlKey || $.altKey || $.metaKey;
      if ($.key === "Tab" && $.preventDefault(), !B && $.key.length === 1 && c($.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key)) {
        let A = s.value;
        if (["ArrowUp", "End"].includes($.key) && (A = A.slice().reverse()), ["ArrowUp", "ArrowDown"].includes($.key)) {
          const R = $.target, L = A.indexOf(R);
          A = A.slice(L + 1);
        }
        setTimeout(() => Ns(A)), $.preventDefault();
      }
    }
    const C = E(() => n.position === "popper" ? n : {}), T = Le(C.value);
    return l0({
      content: i,
      viewport: d,
      onViewportChange: ($) => {
        d.value = $;
      },
      itemRefCallback: ($, B, A) => {
        var R, L;
        const D = !v.value && !A;
        (((R = o.modelValue) == null ? void 0 : R.value) !== void 0 && ((L = o.modelValue) == null ? void 0 : L.value) === B || D) && (f.value = $, D && (v.value = !0));
      },
      selectedItem: f,
      selectedItemText: p,
      onItemLeave: () => {
        var $;
        ($ = i.value) == null || $.focus();
      },
      itemTextRefCallback: ($, B, A) => {
        var R, L;
        const D = !v.value && !A;
        (((R = o.modelValue) == null ? void 0 : R.value) !== void 0 && ((L = o.modelValue) == null ? void 0 : L.value) === B || D) && (p.value = $);
      },
      focusSelectedItem: m,
      position: n.position,
      isPositioned: h,
      searchRef: u
    }), ($, B) => (g(), k(l(Si), {
      "as-child": "",
      onMountAutoFocus: B[6] || (B[6] = De(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: B[7] || (B[7] = (A) => {
        var R;
        a("closeAutoFocus", A), !A.defaultPrevented && ((R = l(o).triggerElement.value) == null || R.focus({ preventScroll: !0 }), A.preventDefault());
      })
    }, {
      default: y(() => [
        P(l(La), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: B[2] || (B[2] = De(() => {
          }, ["prevent"])),
          onDismiss: B[3] || (B[3] = (A) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: B[4] || (B[4] = (A) => a("escapeKeyDown", A)),
          onPointerDownOutside: B[5] || (B[5] = (A) => a("pointerDownOutside", A))
        }, {
          default: y(() => [
            (g(), k(et(
              $.position === "popper" ? s0 : i0
            ), O({ ...$.$attrs, ...l(T) }, {
              id: l(o).contentId,
              ref: (A) => {
                i.value = l(mt)(A);
              },
              role: "listbox",
              "data-state": l(o).open.value ? "open" : "closed",
              dir: l(o).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: B[0] || (B[0] = De(() => {
              }, ["prevent"])),
              onPlaced: B[1] || (B[1] = (A) => h.value = !0),
              onKeydown: S
            }), {
              default: y(() => [
                w($.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "dir", "onKeydown"]))
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), c0 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Ap(e.context), (t, n) => w(t.$slots, "default");
  }
}), d0 = { key: 1 }, f0 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, a = de(n, t), o = ta(), r = M();
    le(() => {
      r.value = new DocumentFragment();
    });
    const i = M(), s = E(() => n.forceMount || o.open.value);
    return (u, c) => {
      var d;
      return s.value ? (g(), k(l(ft), {
        key: 0,
        ref_key: "presenceRef",
        ref: i,
        present: !0
      }, {
        default: y(() => [
          P(u0, Z(Q({ ...l(a), ...u.$attrs })), {
            default: y(() => [
              w(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((d = i.value) != null && d.present) && r.value ? (g(), V("div", d0, [
        (g(), k(Xn, { to: r.value }, [
          P(c0, { context: l(o) }, {
            default: y(() => [
              w(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : te("", !0);
    };
  }
}), p0 = /* @__PURE__ */ _({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(K), O({ "aria-hidden": "true" }, t), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Bp, h0] = pe("SelectItem"), v0 = /* @__PURE__ */ _({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = ce(t), a = ta(), o = na(Ha), { forwardRef: r, currentElement: i } = W(), s = E(() => {
      var m;
      return ((m = a.modelValue) == null ? void 0 : m.value) === t.value;
    }), u = M(!1), c = M(t.textValue ?? ""), d = Fe(void 0, "radix-vue-select-item-text");
    async function f(m) {
      await ae(), !(m != null && m.defaultPrevented) && (n.value || (a.onValueChange(t.value), a.onOpenChange(!1)));
    }
    async function p(m) {
      var b;
      await ae(), !m.defaultPrevented && (n.value ? (b = o.onItemLeave) == null || b.call(o) : m.currentTarget.focus({ preventScroll: !0 }));
    }
    async function h(m) {
      var b;
      await ae(), !m.defaultPrevented && m.currentTarget === Ve() && ((b = o.onItemLeave) == null || b.call(o));
    }
    async function v(m) {
      var b;
      await ae(), !(m.defaultPrevented || ((b = o.searchRef) == null ? void 0 : b.value) !== "" && m.key === " ") && (n0.includes(m.key) && f(), m.key === " " && m.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return le(() => {
      i.value && o.itemRefCallback(
        i.value,
        t.value,
        t.disabled
      );
    }), h0({
      value: t.value,
      disabled: n,
      textId: d,
      isSelected: s,
      onItemTextChange: (m) => {
        c.value = ((c.value || (m == null ? void 0 : m.textContent)) ?? "").trim();
      }
    }), (m, b) => (g(), k(l(K), {
      ref: l(r),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": l(d),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": s.value,
      "data-state": s.value ? "checked" : "unchecked",
      "aria-disabled": l(n) || void 0,
      "data-disabled": l(n) ? "" : void 0,
      tabindex: l(n) ? void 0 : -1,
      as: m.as,
      "as-child": m.asChild,
      onFocus: b[0] || (b[0] = (x) => u.value = !0),
      onBlur: b[1] || (b[1] = (x) => u.value = !1),
      onPointerup: f,
      onPointerdown: b[2] || (b[2] = (x) => {
        x.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: b[3] || (b[3] = De(() => {
      }, ["prevent", "stop"])),
      onPointermove: p,
      onPointerleave: h,
      onKeydown: v
    }, {
      default: y(() => [
        w(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), m0 = /* @__PURE__ */ _({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Bp();
    return (a, o) => l(n).isSelected.value ? (g(), k(l(K), O({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16)) : te("", !0);
  }
}), [g0, y0] = pe("SelectGroup"), b0 = /* @__PURE__ */ _({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Fe(void 0, "radix-vue-select-group");
    return y0({ id: n }), (a, o) => (g(), k(l(K), O({ role: "group" }, t, { "aria-labelledby": l(n) }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), _0 = /* @__PURE__ */ _({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = g0({ id: "" });
    return (a, o) => (g(), k(l(K), O(t, {
      id: l(n).id
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Mp = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = ta(), a = na(Ha), o = J_(), r = Bp(), { forwardRef: i, currentElement: s } = W(), u = E(() => {
      var c;
      return je("option", {
        key: r.value,
        value: r.value,
        disabled: r.disabled.value,
        textContent: (c = s.value) == null ? void 0 : c.textContent
      });
    });
    return le(() => {
      s.value && (r.onItemTextChange(s.value), a.itemTextRefCallback(
        s.value,
        r.value,
        r.disabled.value
      ), o.onNativeOptionAdd(u.value));
    }), gi(() => {
      o.onNativeOptionRemove(u.value);
    }), (c, d) => (g(), V(ve, null, [
      P(l(K), O({
        id: l(r).textId,
        ref: l(i)
      }, { ...t, ...c.$attrs }, { "data-item-text": "" }), {
        default: y(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      l(r).isSelected.value && l(n).valueElement.value && !l(n).valueElementHasChildren.value ? (g(), k(Xn, {
        key: 0,
        to: l(n).valueElement.value
      }, [
        w(c.$slots, "default")
      ], 8, ["to"])) : te("", !0)
    ], 64));
  }
}), x0 = /* @__PURE__ */ _({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = ce(t), a = Fb(n), o = na(Ha), r = o.position === "item-aligned" ? uu() : void 0, { forwardRef: i, currentElement: s } = W();
    le(() => {
      o == null || o.onViewportChange(s.value);
    });
    const u = M(0);
    function c(d) {
      const f = d.currentTarget, { shouldExpandOnScrollRef: p, contentWrapper: h } = r ?? {};
      if (p != null && p.value && h != null && h.value) {
        const v = Math.abs(u.value - f.scrollTop);
        if (v > 0) {
          const m = window.innerHeight - _t * 2, b = Number.parseFloat(
            h.value.style.minHeight
          ), x = Number.parseFloat(h.value.style.height), S = Math.max(b, x);
          if (S < m) {
            const C = S + v, T = Math.min(m, C), $ = C - T;
            h.value.style.height = `${T}px`, h.value.style.bottom === "0px" && (f.scrollTop = $ > 0 ? $ : 0, h.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = f.scrollTop;
    }
    return (d, f) => (g(), V(ve, null, [
      P(l(K), O({
        ref: l(i),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...d.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "hidden auto"
        },
        onScroll: c
      }), {
        default: y(() => [
          w(d.$slots, "default")
        ]),
        _: 3
      }, 16),
      P(l(K), {
        as: "style",
        nonce: l(a)
      }, {
        default: y(() => [
          fe(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Op = /* @__PURE__ */ _({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: a } = Na(), o = a(), r = na(Ha), i = M(null);
    function s() {
      i.value !== null && (window.clearInterval(i.value), i.value = null);
    }
    ge(() => {
      const d = o.value.find(
        (f) => f === Ve()
      );
      d == null || d.scrollIntoView({ block: "nearest" });
    });
    function u() {
      i.value === null && (i.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    function c() {
      var d;
      (d = r.onItemLeave) == null || d.call(r), i.value === null && (i.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    return gi(() => s()), (d, f) => {
      var p;
      return g(), k(l(K), O({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (p = d.$parent) == null ? void 0 : p.$props, {
        onPointerdown: u,
        onPointermove: c,
        onPointerleave: f[0] || (f[0] = () => {
          s();
        })
      }), {
        default: y(() => [
          w(d.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), w0 = /* @__PURE__ */ _({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = na(Ha), n = t.position === "item-aligned" ? uu() : void 0, { forwardRef: a, currentElement: o } = W(), r = M(!1);
    return ge((i) => {
      var s, u;
      if ((s = t.viewport) != null && s.value && (u = t.isPositioned) != null && u.value) {
        let c = function() {
          r.value = d.scrollTop > 0;
        };
        const d = t.viewport.value;
        c(), d.addEventListener("scroll", c), i(() => d.removeEventListener("scroll", c));
      }
    }), ee(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (i, s) => r.value ? (g(), k(Op, {
      key: 0,
      ref: l(a),
      onAutoScroll: s[0] || (s[0] = () => {
        const { viewport: u, selectedItem: c } = l(t);
        u != null && u.value && c != null && c.value && (u.value.scrollTop = u.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 512)) : te("", !0);
  }
}), C0 = /* @__PURE__ */ _({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = na(Ha), n = t.position === "item-aligned" ? uu() : void 0, { forwardRef: a, currentElement: o } = W(), r = M(!1);
    return ge((i) => {
      var s, u;
      if ((s = t.viewport) != null && s.value && (u = t.isPositioned) != null && u.value) {
        let c = function() {
          const f = d.scrollHeight - d.clientHeight;
          r.value = Math.ceil(d.scrollTop) < f;
        };
        const d = t.viewport.value;
        c(), d.addEventListener("scroll", c), i(() => d.removeEventListener("scroll", c));
      }
    }), ee(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (i, s) => r.value ? (g(), k(Op, {
      key: 0,
      ref: l(a),
      onAutoScroll: s[0] || (s[0] = () => {
        const { viewport: u, selectedItem: c } = l(t);
        u != null && u.value && c != null && c.value && (u.value.scrollTop = u.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 512)) : te("", !0);
  }
}), k0 = /* @__PURE__ */ _({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = W(), a = ta(), o = kf();
    return Nm(() => {
      var r;
      const i = !!wi((r = o == null ? void 0 : o.default) == null ? void 0 : r.call(o)).length;
      a.onValueElementHasChildrenChange(i);
    }), le(() => {
      a.valueElement = n;
    }), (r, i) => (g(), k(l(K), {
      ref: l(t),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: y(() => {
        var s;
        return [
          l(Ep)((s = l(a).modelValue) == null ? void 0 : s.value) ? (g(), V(ve, { key: 0 }, [
            fe(be(r.placeholder), 1)
          ], 64)) : w(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), S0 = /* @__PURE__ */ _({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (g(), k(l(K), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: y(() => [
        w(t.$slots, "default", {}, () => [
          fe("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), $0 = /* @__PURE__ */ _({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ["horizontal", "vertical"];
    function a(s) {
      return n.includes(s);
    }
    const o = E(
      () => a(t.orientation) ? t.orientation : "horizontal"
    ), r = E(
      () => o.value === "vertical" ? t.orientation : void 0
    ), i = E(
      () => t.decorative ? { role: "none" } : { "aria-orientation": r.value, role: "separator" }
    );
    return (s, u) => (g(), k(l(K), O({
      as: s.as,
      "as-child": s.asChild,
      "data-orientation": o.value
    }, i.value), {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), T0 = /* @__PURE__ */ _({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k($0, Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function A0(e = [], t, n) {
  const a = [...e];
  return a[n] = t, a.sort((o, r) => o - r);
}
function Dp(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Lr(a, 0, 100);
}
function E0(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function B0(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((o) => Math.abs(o - t)), a = Math.min(...n);
  return n.indexOf(a);
}
function M0(e, t, n) {
  const a = e / 2, o = cu([0, 50], [0, a]);
  return (a - o(t) * n) * n;
}
function O0(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function D0(e, t) {
  if (t > 0) {
    const n = O0(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function cu(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const a = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + a * (n - e[0]);
  };
}
function P0(e) {
  return (String(e).split(".")[1] || "").length;
}
function I0(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const Pp = ["PageUp", "PageDown"], Ip = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Rp = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Fp, Np] = pe(["SliderVertical", "SliderHorizontal"]), Lp = /* @__PURE__ */ _({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Ai();
    return (r, i) => (g(), k(l(K), O({ "data-slider-impl": "" }, n, {
      onKeydown: i[0] || (i[0] = (s) => {
        s.key === "Home" ? (a("homeKeyDown", s), s.preventDefault()) : s.key === "End" ? (a("endKeyDown", s), s.preventDefault()) : l(Pp).concat(l(Ip)).includes(s.key) && (a("stepKeyDown", s), s.preventDefault());
      }),
      onPointerdown: i[1] || (i[1] = (s) => {
        const u = s.target;
        u.setPointerCapture(s.pointerId), s.preventDefault(), l(o).thumbElements.value.includes(u) ? u.focus() : a("slideStart", s);
      }),
      onPointermove: i[2] || (i[2] = (s) => {
        s.target.hasPointerCapture(s.pointerId) && a("slideMove", s);
      }),
      onPointerup: i[3] || (i[3] = (s) => {
        const u = s.target;
        u.hasPointerCapture(s.pointerId) && (u.releasePointerCapture(s.pointerId), a("slideEnd", s));
      })
    }), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), R0 = /* @__PURE__ */ _({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, { max: o, min: r, dir: i, inverted: s } = ce(n), { forwardRef: u, currentElement: c } = W(), d = M(), f = E(() => (i == null ? void 0 : i.value) === "ltr" && !s.value || (i == null ? void 0 : i.value) !== "ltr" && s.value);
    function p(h) {
      const v = d.value || c.value.getBoundingClientRect(), m = [0, v.width], b = f.value ? [r.value, o.value] : [o.value, r.value], x = cu(m, b);
      return d.value = v, x(h - v.left);
    }
    return Np({
      startEdge: f.value ? "left" : "right",
      endEdge: f.value ? "right" : "left",
      direction: f.value ? 1 : -1,
      size: "width"
    }), (h, v) => (g(), k(Lp, {
      ref: l(u),
      dir: l(i),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: v[0] || (v[0] = (m) => {
        const b = p(m.clientX);
        a("slideStart", b);
      }),
      onSlideMove: v[1] || (v[1] = (m) => {
        const b = p(m.clientX);
        a("slideMove", b);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        d.value = void 0, a("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (m) => {
        const b = f.value ? "from-left" : "from-right", x = l(Rp)[b].includes(m.key);
        a("stepKeyDown", m, x ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (m) => a("endKeyDown", m)),
      onHomeKeyDown: v[5] || (v[5] = (m) => a("homeKeyDown", m))
    }, {
      default: y(() => [
        w(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), F0 = /* @__PURE__ */ _({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, { max: o, min: r, inverted: i } = ce(n), { forwardRef: s, currentElement: u } = W(), c = M(), d = E(() => !i.value);
    function f(p) {
      const h = c.value || u.value.getBoundingClientRect(), v = [0, h.height], m = d.value ? [o.value, r.value] : [r.value, o.value], b = cu(v, m);
      return c.value = h, b(p - h.top);
    }
    return Np({
      startEdge: d.value ? "bottom" : "top",
      endEdge: d.value ? "top" : "bottom",
      size: "height",
      direction: d.value ? 1 : -1
    }), (p, h) => (g(), k(Lp, {
      ref: l(s),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: h[0] || (h[0] = (v) => {
        const m = f(v.clientY);
        a("slideStart", m);
      }),
      onSlideMove: h[1] || (h[1] = (v) => {
        const m = f(v.clientY);
        a("slideMove", m);
      }),
      onSlideEnd: h[2] || (h[2] = () => {
        c.value = void 0, a("slideEnd");
      }),
      onStepKeyDown: h[3] || (h[3] = (v) => {
        const m = d.value ? "from-bottom" : "from-top", b = l(Rp)[m].includes(v.key);
        a("stepKeyDown", v, b ? -1 : 1);
      }),
      onEndKeyDown: h[4] || (h[4] = (v) => a("endKeyDown", v)),
      onHomeKeyDown: h[5] || (h[5] = (v) => a("homeKeyDown", v))
    }, {
      default: y(() => [
        w(p.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), N0 = ["value", "name", "disabled", "step"], [Ai, L0] = pe("SliderRoot"), V0 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SliderRoot",
  props: {
    name: {},
    defaultValue: { default: () => [0] },
    modelValue: {},
    disabled: { type: Boolean, default: !1 },
    orientation: { default: "horizontal" },
    dir: {},
    inverted: { type: Boolean, default: !1 },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    minStepsBetweenThumbs: { default: 0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(e, { emit: t }) {
    const n = e, a = t, { min: o, max: r, step: i, minStepsBetweenThumbs: s, orientation: u, disabled: c, dir: d } = ce(n), f = En(d), { forwardRef: p, currentElement: h } = W(), v = Do(h);
    au();
    const m = Ee(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), b = M(0), x = M(m.value);
    function S(A) {
      const R = B0(m.value, A);
      $(A, R);
    }
    function C(A) {
      $(A, b.value);
    }
    function T() {
      const A = x.value[b.value];
      m.value[b.value] !== A && a("valueCommit", mr(m.value));
    }
    function $(A, R, { commit: L } = { commit: !1 }) {
      var D;
      const N = P0(i.value), I = I0(Math.round((A - o.value) / i.value) * i.value + o.value, N), G = Lr(I, o.value, r.value), z = A0(m.value, G, R);
      if (D0(z, s.value * i.value)) {
        b.value = z.indexOf(G);
        const Y = String(z) !== String(m.value);
        Y && L && a("valueCommit", z), Y && ((D = B.value[b.value]) == null || D.focus(), m.value = z);
      }
    }
    const B = M([]);
    return L0({
      modelValue: m,
      valueIndexToChangeRef: b,
      thumbElements: B,
      orientation: u,
      min: o,
      max: r,
      disabled: c
    }), (A, R) => (g(), V(ve, null, [
      P(l(ou), null, {
        default: y(() => [
          (g(), k(et(l(u) === "horizontal" ? R0 : F0), O(A.$attrs, {
            ref: l(p),
            "as-child": A.asChild,
            as: A.as,
            min: l(o),
            max: l(r),
            dir: l(f),
            inverted: A.inverted,
            "aria-disabled": l(c),
            "data-disabled": l(c) ? "" : void 0,
            onPointerdown: R[0] || (R[0] = () => {
              l(c) || (x.value = l(m));
            }),
            onSlideStart: R[1] || (R[1] = (L) => !l(c) && S(L)),
            onSlideMove: R[2] || (R[2] = (L) => !l(c) && C(L)),
            onSlideEnd: R[3] || (R[3] = (L) => !l(c) && T()),
            onHomeKeyDown: R[4] || (R[4] = (L) => !l(c) && $(l(o), 0, { commit: !0 })),
            onEndKeyDown: R[5] || (R[5] = (L) => !l(c) && $(l(r), l(m).length - 1, { commit: !0 })),
            onStepKeyDown: R[6] || (R[6] = (L, D) => {
              if (!l(c)) {
                const N = l(Pp).includes(L.key) || L.shiftKey && l(Ip).includes(L.key) ? 10 : 1, I = b.value, G = l(m)[I], z = l(i) * N * D;
                $(G + z, I, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              w(A.$slots, "default", { modelValue: l(m) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      l(v) ? (g(!0), V(ve, { key: 0 }, Ye(l(m), (L, D) => (g(), V("input", {
        key: D,
        value: L,
        type: "number",
        style: { display: "none" },
        name: A.name ? A.name + (l(m).length > 1 ? "[]" : "") : void 0,
        disabled: l(c),
        step: l(i)
      }, null, 8, N0))), 128)) : te("", !0)
    ], 64));
  }
}), z0 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ai(), a = Fp(), { forwardRef: o, currentElement: r } = W(), i = E(() => {
      var h, v;
      return (v = (h = n.modelValue) == null ? void 0 : h.value) == null ? void 0 : v[t.index];
    }), s = E(() => i.value === void 0 ? 0 : Dp(i.value, n.min.value ?? 0, n.max.value ?? 100)), u = E(() => {
      var h, v;
      return E0(t.index, ((v = (h = n.modelValue) == null ? void 0 : h.value) == null ? void 0 : v.length) ?? 0);
    }), c = tp(r), d = E(() => c[a.size].value), f = E(() => d.value ? M0(d.value, s.value, a.direction) : 0), p = Ul();
    return le(() => {
      n.thumbElements.value.push(r.value);
    }), ze(() => {
      const h = n.thumbElements.value.findIndex((v) => v === r.value) ?? -1;
      n.thumbElements.value.splice(h, 1);
    }), (h, v) => (g(), k(l(Ti), null, {
      default: y(() => [
        P(l(K), O(h.$attrs, {
          ref: l(o),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: l(n).disabled.value ? void 0 : 0,
          "aria-label": h.$attrs["aria-label"] || u.value,
          "data-disabled": l(n).disabled.value ? "" : void 0,
          "data-orientation": l(n).orientation.value,
          "aria-valuenow": i.value,
          "aria-valuemin": l(n).min.value,
          "aria-valuemax": l(n).max.value,
          "aria-orientation": l(n).orientation.value,
          "as-child": h.asChild,
          as: h.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [l(a).startEdge]: `calc(${s.value}% + ${f.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !l(p) && i.value === void 0 ? "none" : void 0
          },
          onFocus: v[0] || (v[0] = () => {
            l(n).valueIndexToChangeRef.value = h.index;
          })
        }), {
          default: y(() => [
            w(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), q0 = /* @__PURE__ */ _({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = ru(), { forwardRef: a, currentElement: o } = W(), r = E(() => o.value ? n().findIndex((i) => i.ref === o.value) : -1);
    return (i, s) => (g(), k(z0, O({ ref: l(a) }, t, { index: r.value }), {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), H0 = /* @__PURE__ */ _({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Ai();
    return W(), (n, a) => (g(), k(l(K), {
      "as-child": n.asChild,
      as: n.as,
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), W0 = /* @__PURE__ */ _({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Ai(), n = Fp();
    W();
    const a = E(() => {
      var i, s;
      return (s = (i = t.modelValue) == null ? void 0 : i.value) == null ? void 0 : s.map(
        (u) => Dp(u, t.min.value, t.max.value)
      );
    }), o = E(() => t.modelValue.value.length > 1 ? Math.min(...a.value) : 0), r = E(() => 100 - Math.max(...a.value));
    return (i, s) => (g(), k(l(K), {
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value,
      "as-child": i.asChild,
      as: i.as,
      style: qt({
        [l(n).startEdge]: `${o.value}%`,
        [l(n).endEdge]: `${r.value}%`
      })
    }, {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function U0() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
U0();
const K0 = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [j0, G0] = pe("SwitchRoot"), Y0 = /* @__PURE__ */ _({
  __name: "SwitchRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    value: { default: "on" },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    const n = e, a = t, { disabled: o } = ce(n), r = Ee(n, "checked", a, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function i() {
      o.value || (r.value = !r.value);
    }
    const { forwardRef: s, currentElement: u } = W(), c = Do(u), d = E(() => {
      var f;
      return n.id && u.value ? (f = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : f.innerText : void 0;
    });
    return G0({
      checked: r,
      toggleCheck: i,
      disabled: o
    }), (f, p) => (g(), V(ve, null, [
      P(l(K), O(f.$attrs, {
        id: f.id,
        ref: l(s),
        role: "switch",
        type: f.as === "button" ? "button" : void 0,
        value: f.value,
        "aria-label": f.$attrs["aria-label"] || d.value,
        "aria-checked": l(r),
        "aria-required": f.required,
        "data-state": l(r) ? "checked" : "unchecked",
        "data-disabled": l(o) ? "" : void 0,
        "as-child": f.asChild,
        as: f.as,
        disabled: l(o),
        onClick: i,
        onKeydown: Ge(De(i, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          w(f.$slots, "default", { checked: l(r) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      l(c) ? (g(), V("input", {
        key: 0,
        type: "checkbox",
        name: f.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: l(o),
        required: f.required,
        value: f.value,
        checked: !!l(r),
        "data-state": l(r) ? "checked" : "unchecked",
        "data-disabled": l(o) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, K0)) : te("", !0)
    ], 64));
  }
}), X0 = /* @__PURE__ */ _({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = j0();
    return W(), (n, a) => {
      var o;
      return g(), k(l(K), {
        "data-state": (o = l(t).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": l(t).disabled.value ? "" : void 0,
        "as-child": n.asChild,
        as: n.as
      }, {
        default: y(() => [
          w(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [du, Z0] = pe("TabsRoot"), J0 = /* @__PURE__ */ _({
  __name: "TabsRoot",
  props: {
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {},
    activationMode: { default: "automatic" },
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, { orientation: o, dir: r } = ce(n), i = En(r);
    W();
    const s = Ee(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = M();
    return Z0({
      modelValue: s,
      changeModelValue: (c) => {
        s.value = c;
      },
      orientation: o,
      dir: i,
      activationMode: n.activationMode,
      baseId: Fe(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (c, d) => (g(), k(l(K), {
      dir: l(i),
      "data-orientation": l(o),
      "as-child": c.asChild,
      as: c.as
    }, {
      default: y(() => [
        w(c.$slots, "default", { modelValue: l(s) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), Q0 = /* @__PURE__ */ _({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = ce(t), { forwardRef: a, currentElement: o } = W(), r = du();
    return r.tabsList = o, (i, s) => (g(), k(l(bp), {
      "as-child": "",
      orientation: l(r).orientation.value,
      dir: l(r).dir.value,
      loop: l(n)
    }, {
      default: y(() => [
        P(l(K), {
          ref: l(a),
          role: "tablist",
          "as-child": i.asChild,
          as: i.as,
          "aria-orientation": l(r).orientation.value
        }, {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function Vp(e, t) {
  return `${e}-trigger-${t}`;
}
function zp(e, t) {
  return `${e}-content-${t}`;
}
const ex = /* @__PURE__ */ _({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = W(), a = du(), o = E(() => Vp(a.baseId, t.value)), r = E(() => zp(a.baseId, t.value)), i = E(() => t.value === a.modelValue.value), s = M(i.value);
    return le(() => {
      requestAnimationFrame(() => {
        s.value = !1;
      });
    }), (u, c) => (g(), k(l(ft), {
      present: i.value,
      "force-mount": ""
    }, {
      default: y(({ present: d }) => [
        P(l(K), {
          id: r.value,
          ref: l(n),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": i.value ? "active" : "inactive",
          "data-orientation": l(a).orientation.value,
          "aria-labelledby": o.value,
          hidden: !d.value,
          tabindex: "0",
          style: qt({
            animationDuration: s.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || i.value ? w(u.$slots, "default", { key: 0 }) : te("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), tx = /* @__PURE__ */ _({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = W(), a = du(), o = E(() => Vp(a.baseId, t.value)), r = E(() => zp(a.baseId, t.value)), i = E(() => t.value === a.modelValue.value);
    return (s, u) => (g(), k(l(e_), {
      "as-child": "",
      focusable: !s.disabled,
      active: i.value
    }, {
      default: y(() => [
        P(l(K), {
          id: o.value,
          ref: l(n),
          role: "tab",
          type: s.as === "button" ? "button" : void 0,
          as: s.as,
          "as-child": s.asChild,
          "aria-selected": i.value ? "true" : "false",
          "aria-controls": r.value,
          "data-state": i.value ? "active" : "inactive",
          disabled: s.disabled,
          "data-disabled": s.disabled ? "" : void 0,
          "data-orientation": l(a).orientation.value,
          onMousedown: u[0] || (u[0] = De((c) => {
            !s.disabled && c.ctrlKey === !1 ? l(a).changeModelValue(s.value) : c.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = Ge((c) => l(a).changeModelValue(s.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const c = l(a).activationMode !== "manual";
            !i.value && !s.disabled && c && l(a).changeModelValue(s.value);
          })
        }, {
          default: y(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [Ei, nx] = pe("ToastProvider"), ax = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: a, swipeDirection: o, swipeThreshold: r } = ce(t), i = M(), s = M(0), u = M(!1), c = M(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const d = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(d);
    }
    return nx({
      label: n,
      duration: a,
      swipeDirection: o,
      swipeThreshold: r,
      toastCount: s,
      viewport: i,
      onViewportChange(d) {
        i.value = d;
      },
      onToastAdd() {
        s.value++;
      },
      onToastRemove() {
        s.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: c
    }), (d, f) => w(d.$slots, "default");
  }
}), ox = "toast.swipeStart", rx = "toast.swipeMove", ix = "toast.swipeCancel", sx = "toast.swipeEnd", Vs = "toast.viewportPause", zs = "toast.viewportResume";
function er(e, t, n) {
  const a = n.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
function Ac(e, t, n = 0) {
  const a = Math.abs(e.x), o = Math.abs(e.y), r = a > o;
  return t === "left" || t === "right" ? r && a > n : !r && o > n;
}
function lx(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function qp(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), lx(n)) {
      const a = n.ariaHidden || n.hidden || n.style.display === "none", o = n.dataset.radixToastAnnounceExclude === "";
      if (!a)
        if (o) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...qp(n));
    }
  }), t;
}
const ux = /* @__PURE__ */ _({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Ei(), n = ey(1e3), a = M(!1);
    return Xf(() => {
      a.value = !0;
    }), (o, r) => l(n) || a.value ? (g(), k(l(Fo), { key: 0 }, {
      default: y(() => [
        fe(be(l(t).label.value) + " ", 1),
        w(o.$slots, "default")
      ]),
      _: 3
    })) : te("", !0);
  }
}), [cx, dx] = pe("ToastRoot"), fx = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastRootImpl",
  props: {
    type: {},
    open: { type: Boolean, default: !1 },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["close", "escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: r } = W(), i = Ei(), s = M(null), u = M(null), c = E(
      () => typeof n.duration == "number" ? n.duration : i.duration.value
    ), d = M(0), f = M(c.value), p = M(0), h = M(c.value), v = Xf(() => {
      const S = (/* @__PURE__ */ new Date()).getTime() - d.value;
      h.value = Math.max(f.value - S, 0);
    }, { fpsLimit: 60 });
    function m(S) {
      S <= 0 || S === Number.POSITIVE_INFINITY || Wt && (window.clearTimeout(p.value), d.value = (/* @__PURE__ */ new Date()).getTime(), p.value = window.setTimeout(b, S));
    }
    function b() {
      var S, C;
      (S = r.value) != null && S.contains(Ve()) && ((C = i.viewport.value) == null || C.focus()), i.isClosePausedRef.value = !1, a("close");
    }
    const x = E(() => r.value ? qp(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const S = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(S);
    }
    return ge((S) => {
      const C = i.viewport.value;
      if (C) {
        const T = () => {
          m(f.value), v.resume(), a("resume");
        }, $ = () => {
          const B = (/* @__PURE__ */ new Date()).getTime() - d.value;
          f.value = f.value - B, window.clearTimeout(p.value), v.pause(), a("pause");
        };
        return C.addEventListener(Vs, $), C.addEventListener(zs, T), () => {
          C.removeEventListener(Vs, $), C.removeEventListener(zs, T);
        };
      }
    }), ee(() => [n.open, c.value], () => {
      f.value = c.value, n.open && !i.isClosePausedRef.value && m(c.value);
    }, { immediate: !0 }), Wl("Escape", (S) => {
      a("escapeKeyDown", S), S.defaultPrevented || (i.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), le(() => {
      i.onToastAdd();
    }), ze(() => {
      i.onToastRemove();
    }), dx({ onClose: b }), (S, C) => (g(), V(ve, null, [
      x.value ? (g(), k(ux, {
        key: 0,
        role: "alert",
        "aria-live": S.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          fe(be(x.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : te("", !0),
      l(i).viewport.value ? (g(), k(Xn, {
        key: 1,
        to: l(i).viewport.value
      }, [
        P(l(K), O({
          ref: l(o),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, S.$attrs, {
          as: S.as,
          "as-child": S.asChild,
          "data-state": S.open ? "open" : "closed",
          "data-swipe-direction": l(i).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: C[0] || (C[0] = De((T) => {
            s.value = { x: T.clientX, y: T.clientY };
          }, ["left"])),
          onPointermove: C[1] || (C[1] = (T) => {
            if (!s.value) return;
            const $ = T.clientX - s.value.x, B = T.clientY - s.value.y, A = !!u.value, R = ["left", "right"].includes(l(i).swipeDirection.value), L = ["left", "up"].includes(l(i).swipeDirection.value) ? Math.min : Math.max, D = R ? L(0, $) : 0, N = R ? 0 : L(0, B), I = T.pointerType === "touch" ? 10 : 2, G = { x: D, y: N }, z = { originalEvent: T, delta: G };
            A ? (u.value = G, l(er)(l(rx), (Y) => a("swipeMove", Y), z)) : l(Ac)(G, l(i).swipeDirection.value, I) ? (u.value = G, l(er)(l(ox), (Y) => a("swipeStart", Y), z), T.target.setPointerCapture(T.pointerId)) : (Math.abs($) > I || Math.abs(B) > I) && (s.value = null);
          }),
          onPointerup: C[2] || (C[2] = (T) => {
            const $ = u.value, B = T.target;
            if (B.hasPointerCapture(T.pointerId) && B.releasePointerCapture(T.pointerId), u.value = null, s.value = null, $) {
              const A = T.currentTarget, R = { originalEvent: T, delta: $ };
              l(Ac)($, l(i).swipeDirection.value, l(i).swipeThreshold.value) ? l(er)(l(sx), (L) => a("swipeEnd", L), R) : l(er)(l(ix), (L) => a("swipeCancel", L), R), A == null || A.addEventListener("click", (L) => L.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            w(S.$slots, "default", {
              remaining: h.value,
              duration: c.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : te("", !0)
    ], 64));
  }
}), px = /* @__PURE__ */ _({
  __name: "ToastRoot",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    forceMount: { type: Boolean },
    type: { default: "foreground" },
    open: { type: Boolean, default: void 0 },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o } = W(), r = Ee(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (i, s) => (g(), k(l(ft), {
      present: i.forceMount || l(r)
    }, {
      default: y(() => [
        P(fx, O({
          ref: l(o),
          open: l(r),
          type: i.type,
          as: i.as,
          "as-child": i.asChild,
          duration: i.duration
        }, i.$attrs, {
          onClose: s[0] || (s[0] = (u) => r.value = !1),
          onPause: s[1] || (s[1] = (u) => a("pause")),
          onResume: s[2] || (s[2] = (u) => a("resume")),
          onEscapeKeyDown: s[3] || (s[3] = (u) => a("escapeKeyDown", u)),
          onSwipeStart: s[4] || (s[4] = (u) => {
            a("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: s[5] || (s[5] = (u) => {
            const { x: c, y: d } = u.detail.delta, f = u.currentTarget;
            f.setAttribute("data-swipe", "move"), f.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), f.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
          }),
          onSwipeCancel: s[6] || (s[6] = (u) => {
            const c = u.currentTarget;
            c.setAttribute("data-swipe", "cancel"), c.style.removeProperty("--radix-toast-swipe-move-x"), c.style.removeProperty("--radix-toast-swipe-move-y"), c.style.removeProperty("--radix-toast-swipe-end-x"), c.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: s[7] || (s[7] = (u) => {
            const { x: c, y: d } = u.detail.delta, f = u.currentTarget;
            f.setAttribute("data-swipe", "end"), f.style.removeProperty("--radix-toast-swipe-move-x"), f.style.removeProperty("--radix-toast-swipe-move-y"), f.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), f.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), r.value = !1;
          })
        }), {
          default: y(({ remaining: u, duration: c }) => [
            w(i.$slots, "default", {
              remaining: u,
              duration: c,
              open: l(r)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Hp = /* @__PURE__ */ _({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (g(), k(l(K), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: y(() => [
        w(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), Wp = /* @__PURE__ */ _({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = cx(), { forwardRef: a } = W();
    return (o, r) => (g(), k(Hp, { "as-child": "" }, {
      default: y(() => [
        P(l(K), O(t, {
          ref: l(a),
          type: o.as === "button" ? "button" : void 0,
          onClick: r[0] || (r[0] = (i) => l(n).onClose())
        }), {
          default: y(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), hx = /* @__PURE__ */ _({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = W();
    return (n, a) => n.altText ? (g(), k(Hp, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        P(Wp, {
          ref: l(t),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: y(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : te("", !0);
  }
}), Ec = /* @__PURE__ */ _({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, a = Ei();
    return (o, r) => (g(), k(l(Fo), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: r[0] || (r[0] = (i) => {
        var s;
        const u = i.relatedTarget;
        !((s = l(a).viewport.value) != null && s.contains(u)) && n("focusFromOutsideViewport");
      })
    }, {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), vx = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: a } = ce(t), { forwardRef: o, currentElement: r } = W(), { createCollection: i } = Na(), s = i(r), u = Ei(), c = E(() => u.toastCount.value > 0), d = M(), f = M(), p = E(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Wl(n.value, () => {
      r.value.focus();
    }), le(() => {
      u.onViewportChange(r.value);
    }), ge((v) => {
      const m = r.value;
      if (c.value && m) {
        const b = () => {
          if (!u.isClosePausedRef.value) {
            const $ = new CustomEvent(Vs);
            m.dispatchEvent($), u.isClosePausedRef.value = !0;
          }
        }, x = () => {
          if (u.isClosePausedRef.value) {
            const $ = new CustomEvent(zs);
            m.dispatchEvent($), u.isClosePausedRef.value = !1;
          }
        }, S = ($) => {
          !m.contains($.relatedTarget) && x();
        }, C = () => {
          m.contains(Ve()) || x();
        }, T = ($) => {
          var B, A, R;
          const L = $.altKey || $.ctrlKey || $.metaKey;
          if ($.key === "Tab" && !L) {
            const D = Ve(), N = $.shiftKey;
            if ($.target === m && N) {
              (B = d.value) == null || B.focus();
              return;
            }
            const I = h({ tabbingDirection: N ? "backwards" : "forwards" }), G = I.findIndex((z) => z === D);
            yr(I.slice(G + 1)) ? $.preventDefault() : N ? (A = d.value) == null || A.focus() : (R = f.value) == null || R.focus();
          }
        };
        m.addEventListener("focusin", b), m.addEventListener("focusout", S), m.addEventListener("pointermove", b), m.addEventListener("pointerleave", C), m.addEventListener("keydown", T), window.addEventListener("blur", b), window.addEventListener("focus", x), v(() => {
          m.removeEventListener("focusin", b), m.removeEventListener("focusout", S), m.removeEventListener("pointermove", b), m.removeEventListener("pointerleave", C), m.removeEventListener("keydown", T), window.removeEventListener("blur", b), window.removeEventListener("focus", x);
        });
      }
    });
    function h({ tabbingDirection: v }) {
      const m = s.value.map((b) => {
        const x = [b, ...Zl(b)];
        return v === "forwards" ? x : x.reverse();
      });
      return (v === "forwards" ? m.reverse() : m).flat();
    }
    return (v, m) => (g(), k(l(Yy), {
      role: "region",
      "aria-label": typeof l(a) == "string" ? l(a).replace("{hotkey}", p.value) : l(a)(p.value),
      tabindex: "-1",
      style: qt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        c.value ? (g(), k(Ec, {
          key: 0,
          ref: (b) => {
            d.value = l(mt)(b);
          },
          onFocusFromOutsideViewport: m[0] || (m[0] = () => {
            const b = h({
              tabbingDirection: "forwards"
            });
            l(yr)(b);
          })
        }, null, 512)) : te("", !0),
        P(l(K), O({
          ref: l(o),
          tabindex: "-1",
          as: v.as,
          "as-child": v.asChild
        }, v.$attrs), {
          default: y(() => [
            w(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        c.value ? (g(), k(Ec, {
          key: 1,
          ref: (b) => {
            f.value = l(mt)(b);
          },
          onFocusFromOutsideViewport: m[1] || (m[1] = () => {
            const b = h({
              tabbingDirection: "backwards"
            });
            l(yr)(b);
          })
        }, null, 512)) : te("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), mx = /* @__PURE__ */ _({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return W(), (n, a) => (g(), k(l(K), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gx = /* @__PURE__ */ _({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return W(), (n, a) => (g(), k(l(K), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Up = "tooltip.open", [fu, yx] = pe("TooltipProvider"), Kp = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 700 },
    skipDelayDuration: { default: 300 },
    disableHoverableContent: { type: Boolean, default: !1 },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { delayDuration: n, skipDelayDuration: a, disableHoverableContent: o, disableClosingTrigger: r, ignoreNonKeyboardFocus: i, disabled: s } = ce(t);
    W();
    const u = M(!0), c = M(!1), { start: d, stop: f } = Hl(() => {
      u.value = !0;
    }, a, { immediate: !1 });
    return yx({
      isOpenDelayed: u,
      delayDuration: n,
      onOpen() {
        f(), u.value = !1;
      },
      onClose() {
        d();
      },
      isPointerInTransitRef: c,
      disableHoverableContent: o,
      disableClosingTrigger: r,
      disabled: s,
      ignoreNonKeyboardFocus: i
    }), (p, h) => w(p.$slots, "default");
  }
}), [Bi, bx] = pe("TooltipRoot"), _x = /* @__PURE__ */ _({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: void 0 },
    disableHoverableContent: { type: Boolean, default: void 0 },
    disableClosingTrigger: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    ignoreNonKeyboardFocus: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    W();
    const o = fu(), r = E(() => n.disableHoverableContent ?? o.disableHoverableContent.value), i = E(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value), s = E(() => n.disabled ?? o.disabled.value), u = E(() => n.delayDuration ?? o.delayDuration.value), c = E(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), d = Ee(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    ee(d, (C) => {
      o.onClose && (C ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Up))) : o.onClose());
    });
    const f = M(!1), p = M(), h = E(() => d.value ? f.value ? "delayed-open" : "instant-open" : "closed"), { start: v, stop: m } = Hl(() => {
      f.value = !0, d.value = !0;
    }, u, { immediate: !1 });
    function b() {
      m(), f.value = !1, d.value = !0;
    }
    function x() {
      m(), d.value = !1;
    }
    function S() {
      v();
    }
    return bx({
      contentId: "",
      open: d,
      stateAttribute: h,
      trigger: p,
      onTriggerChange(C) {
        p.value = C;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? S() : b();
      },
      onTriggerLeave() {
        r.value ? x() : m();
      },
      onOpen: b,
      onClose: x,
      disableHoverableContent: r,
      disableClosingTrigger: i,
      disabled: s,
      ignoreNonKeyboardFocus: c
    }), (C, T) => (g(), k(l(Va), null, {
      default: y(() => [
        w(C.$slots, "default", { open: l(d) })
      ]),
      _: 3
    }));
  }
}), xx = /* @__PURE__ */ _({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Bi(), a = fu();
    n.contentId || (n.contentId = Fe(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: r } = W(), i = M(!1), s = M(!1), u = E(() => n.disabled.value ? {} : {
      click: m,
      focus: h,
      pointermove: f,
      pointerleave: p,
      pointerdown: d,
      blur: v
    });
    le(() => {
      n.onTriggerChange(r.value);
    });
    function c() {
      setTimeout(() => {
        i.value = !1;
      }, 1);
    }
    function d() {
      i.value = !0, document.addEventListener("pointerup", c, { once: !0 });
    }
    function f(b) {
      b.pointerType !== "touch" && !s.value && !a.isPointerInTransitRef.value && (n.onTriggerEnter(), s.value = !0);
    }
    function p() {
      n.onTriggerLeave(), s.value = !1;
    }
    function h(b) {
      var x, S;
      i.value || n.ignoreNonKeyboardFocus.value && !((S = (x = b.target).matches) != null && S.call(x, ":focus-visible")) || n.onOpen();
    }
    function v() {
      n.onClose();
    }
    function m() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (b, x) => (g(), k(l($i), { "as-child": "" }, {
      default: y(() => [
        P(l(K), O({
          ref: l(o),
          "aria-describedby": l(n).open.value ? l(n).contentId : void 0,
          "data-state": l(n).stateAttribute.value,
          as: b.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Lm(u.value)), {
          default: y(() => [
            w(b.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), jp = /* @__PURE__ */ _({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: { default: 0 },
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: !0 },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    arrowPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: !1 }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Bi(), { forwardRef: r } = W(), i = kf(), s = E(() => {
      var d;
      return (d = i.default) == null ? void 0 : d.call(i);
    }), u = E(() => {
      var d;
      if (n.ariaLabel)
        return n.ariaLabel;
      let f = "";
      function p(h) {
        typeof h.children == "string" && h.type !== El ? f += h.children : Array.isArray(h.children) && h.children.forEach((v) => p(v));
      }
      return (d = s.value) == null || d.forEach((h) => p(h)), f;
    }), c = E(() => {
      const { ariaLabel: d, ...f } = n;
      return f;
    });
    return le(() => {
      Sa(window, "scroll", (d) => {
        const f = d.target;
        f != null && f.contains(o.trigger.value) && o.onClose();
      }), Sa(window, Up, o.onClose);
    }), (d, f) => (g(), k(l(La), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: f[0] || (f[0] = (p) => a("escapeKeyDown", p)),
      onPointerDownOutside: f[1] || (f[1] = (p) => {
        var h;
        l(o).disableClosingTrigger.value && (h = l(o).trigger.value) != null && h.contains(p.target) && p.preventDefault(), a("pointerDownOutside", p);
      }),
      onFocusOutside: f[2] || (f[2] = De(() => {
      }, ["prevent"])),
      onDismiss: f[3] || (f[3] = (p) => l(o).onClose())
    }, {
      default: y(() => [
        P(l($a), O({
          ref: l(r),
          "data-state": l(o).stateAttribute.value
        }, { ...d.$attrs, ...c.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: y(() => [
            w(d.$slots, "default"),
            P(l(Fo), {
              id: l(o).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                fe(be(u.value), 1)
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }));
  }
}), wx = /* @__PURE__ */ _({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  setup(e) {
    const t = Le(e), { forwardRef: n, currentElement: a } = W(), { trigger: o, onClose: r } = Bi(), i = fu(), { isPointerInTransit: s, onPointerExit: u } = py(o, a);
    return i.isPointerInTransitRef = s, u(() => {
      r();
    }), (c, d) => (g(), k(jp, O({ ref: l(n) }, l(t)), {
      default: y(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cx = /* @__PURE__ */ _({
  __name: "TooltipContent",
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Bi(), r = de(n, a), { forwardRef: i } = W();
    return (s, u) => (g(), k(l(ft), {
      present: s.forceMount || l(o).open.value
    }, {
      default: y(() => [
        (g(), k(et(l(o).disableHoverableContent.value ? jp : wx), O({ ref: l(i) }, l(r)), {
          default: y(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), kx = /* @__PURE__ */ _({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(Io), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), NP = /* @__PURE__ */ _({
  __name: "Accordion",
  props: {
    collapsible: { type: Boolean },
    disabled: { type: Boolean },
    dir: {},
    orientation: {},
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, i) => (g(), k(l(Ny), Z(Q(l(o))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Gp(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Gp(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Yp() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Gp(e)) && (a && (a += " "), a += t);
  return a;
}
const pu = "-", Sx = (e) => {
  const t = Tx(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(pu);
      return s[0] === "" && s.length !== 1 && s.shift(), Xp(s, t) || $x(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const u = n[i] || [];
      return s && a[i] ? [...u, ...a[i]] : u;
    }
  };
}, Xp = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], a = t.nextPart.get(n), o = a ? Xp(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const r = e.join(pu);
  return (i = t.validators.find(({
    validator: s
  }) => s(r))) == null ? void 0 : i.classGroupId;
}, Bc = /^\[(.+)\]$/, $x = (e) => {
  if (Bc.test(e)) {
    const t = Bc.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Tx = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ex(Object.entries(e.classGroups), n).forEach(([r, i]) => {
    qs(i, a, r, t);
  }), a;
}, qs = (e, t, n, a) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const r = o === "" ? t : Mc(t, o);
      r.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Ax(o)) {
        qs(o(a), t, n, a);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([r, i]) => {
      qs(i, Mc(t, r), n, a);
    });
  });
}, Mc = (e, t) => {
  let n = e;
  return t.split(pu).forEach((a) => {
    n.nextPart.has(a) || n.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(a);
  }), n;
}, Ax = (e) => e.isThemeGetter, Ex = (e, t) => t ? e.map(([n, a]) => {
  const o = a.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([i, s]) => [t + i, s])) : r);
  return [n, o];
}) : e, Bx = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const o = (r, i) => {
    n.set(r, i), t++, t > e && (t = 0, a = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(r) {
      let i = n.get(r);
      if (i !== void 0)
        return i;
      if ((i = a.get(r)) !== void 0)
        return o(r, i), i;
    },
    set(r, i) {
      n.has(r) ? n.set(r, i) : o(r, i);
    }
  };
}, Zp = "!", Mx = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, a = t.length === 1, o = t[0], r = t.length, i = (s) => {
    const u = [];
    let c = 0, d = 0, f;
    for (let b = 0; b < s.length; b++) {
      let x = s[b];
      if (c === 0) {
        if (x === o && (a || s.slice(b, b + r) === t)) {
          u.push(s.slice(d, b)), d = b + r;
          continue;
        }
        if (x === "/") {
          f = b;
          continue;
        }
      }
      x === "[" ? c++ : x === "]" && c--;
    }
    const p = u.length === 0 ? s : s.substring(d), h = p.startsWith(Zp), v = h ? p.substring(1) : p, m = f && f > d ? f - d : void 0;
    return {
      modifiers: u,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: m
    };
  };
  return n ? (s) => n({
    className: s,
    parseClassName: i
  }) : i;
}, Ox = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...n.sort(), a), n = []) : n.push(a);
  }), t.push(...n.sort()), t;
}, Dx = (e) => ({
  cache: Bx(e.cacheSize),
  parseClassName: Mx(e),
  ...Sx(e)
}), Px = /\s+/, Ix = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: a,
    getConflictingClassGroupIds: o
  } = t, r = [], i = e.trim().split(Px);
  let s = "";
  for (let u = i.length - 1; u >= 0; u -= 1) {
    const c = i[u], {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: p,
      maybePostfixModifierPosition: h
    } = n(c);
    let v = !!h, m = a(v ? p.substring(0, h) : p);
    if (!m) {
      if (!v) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (m = a(p), !m) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      v = !1;
    }
    const b = Ox(d).join(":"), x = f ? b + Zp : b, S = x + m;
    if (r.includes(S))
      continue;
    r.push(S);
    const C = o(m, v);
    for (let T = 0; T < C.length; ++T) {
      const $ = C[T];
      r.push(x + $);
    }
    s = c + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Rx() {
  let e = 0, t, n, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Jp(t)) && (a && (a += " "), a += n);
  return a;
}
const Jp = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = Jp(e[a])) && (n && (n += " "), n += t);
  return n;
};
function Fx(e, ...t) {
  let n, a, o, r = i;
  function i(u) {
    const c = t.reduce((d, f) => f(d), e());
    return n = Dx(c), a = n.cache.get, o = n.cache.set, r = s, s(u);
  }
  function s(u) {
    const c = a(u);
    if (c)
      return c;
    const d = Ix(u, n);
    return o(u, d), d;
  }
  return function() {
    return r(Rx.apply(null, arguments));
  };
}
const Ae = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Qp = /^\[(?:([a-z-]+):)?(.+)\]$/i, Nx = /^\d+\/\d+$/, Lx = /* @__PURE__ */ new Set(["px", "full", "screen"]), Vx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, zx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Hx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Wx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, jt = (e) => ga(e) || Lx.has(e) || Nx.test(e), hn = (e) => Wa(e, "length", Jx), ga = (e) => !!e && !Number.isNaN(Number(e)), cs = (e) => Wa(e, "number", ga), Ga = (e) => !!e && Number.isInteger(Number(e)), Ux = (e) => e.endsWith("%") && ga(e.slice(0, -1)), ue = (e) => Qp.test(e), vn = (e) => Vx.test(e), Kx = /* @__PURE__ */ new Set(["length", "size", "percentage"]), jx = (e) => Wa(e, Kx, eh), Gx = (e) => Wa(e, "position", eh), Yx = /* @__PURE__ */ new Set(["image", "url"]), Xx = (e) => Wa(e, Yx, ew), Zx = (e) => Wa(e, "", Qx), Ya = () => !0, Wa = (e, t, n) => {
  const a = Qp.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : n(a[2]) : !1;
}, Jx = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  zx.test(e) && !qx.test(e)
), eh = () => !1, Qx = (e) => Hx.test(e), ew = (e) => Wx.test(e), tw = () => {
  const e = Ae("colors"), t = Ae("spacing"), n = Ae("blur"), a = Ae("brightness"), o = Ae("borderColor"), r = Ae("borderRadius"), i = Ae("borderSpacing"), s = Ae("borderWidth"), u = Ae("contrast"), c = Ae("grayscale"), d = Ae("hueRotate"), f = Ae("invert"), p = Ae("gap"), h = Ae("gradientColorStops"), v = Ae("gradientColorStopPositions"), m = Ae("inset"), b = Ae("margin"), x = Ae("opacity"), S = Ae("padding"), C = Ae("saturate"), T = Ae("scale"), $ = Ae("sepia"), B = Ae("skew"), A = Ae("space"), R = Ae("translate"), L = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", ue, t], I = () => [ue, t], G = () => ["", jt, hn], z = () => ["auto", ga, ue], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ne = () => ["solid", "dashed", "dotted", "double", "none"], _e = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], he = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], q = () => ["", "0", ue], oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ie = () => [ga, ue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ya],
      spacing: [jt, hn],
      blur: ["none", "", vn, ue],
      brightness: ie(),
      borderColor: [e],
      borderRadius: ["none", "", "full", vn, ue],
      borderSpacing: I(),
      borderWidth: G(),
      contrast: ie(),
      grayscale: q(),
      hueRotate: ie(),
      invert: q(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ux, hn],
      inset: N(),
      margin: N(),
      opacity: ie(),
      padding: I(),
      saturate: ie(),
      scale: ie(),
      sepia: q(),
      skew: ie(),
      space: I(),
      translate: I()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [vn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": oe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": oe()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Y(), ue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: L()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Ga, ue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: N()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: q()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: q()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ga, ue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ya]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ga, ue]
        }, ue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ya]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ga, ue]
        }, ue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...he()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...he(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...he(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [S]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [S]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [S]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [S]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [S]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [S]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [S]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [S]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [S]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [A]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [A]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ue, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ue, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ue, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [vn]
        }, vn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ue, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ue, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ue, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ue, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", vn, hn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", cs]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ya]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ga, cs]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", jt, ue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [x]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [x]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ne(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", jt, hn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", jt, ue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: I()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [x]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Y(), Gx]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", jx]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Xx]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [r]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [r]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [r]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [r]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [r]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [r]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [r]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [r]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [r]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [r]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [r]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [r]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [r]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [r]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [r]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ne(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ne()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ne()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [jt, ue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [jt, hn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: G()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [jt, hn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", vn, Zx]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ya]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [..._e(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": _e()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [u]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", vn, ue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [$]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [u]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [$]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ie()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ie()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [T]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [T]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [T]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ga, ue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [R]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [R]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [B]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [B]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [jt, hn, cs]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, nw = /* @__PURE__ */ Fx(tw);
function F(...e) {
  return nw(Yp(e));
}
const LP = /* @__PURE__ */ _({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(zy), O(n.value, { class: "text-accordion-text data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all" }), {
      default: y(() => [
        $e("div", {
          class: j(l(F)("pb-4 pt-0", t.class))
        }, [
          w(a.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), VP = /* @__PURE__ */ _({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = Le(n);
    return (o, r) => (g(), k(l(Vy), O(l(a), {
      class: l(F)("border-accordion-border border-b", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aw = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var tr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ow = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: a, iconNode: o, name: r, class: i, ...s }, { slots: u }) => je(
  "svg",
  {
    ...tr,
    width: e || tr.width,
    height: e || tr.height,
    stroke: a || tr.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${aw(r ?? "icon")}`],
    ...s
  },
  [...o.map((c) => je(...c)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = (e, t) => (n, { slots: a }) => je(
  ow,
  {
    ...n,
    iconNode: t,
    name: e
  },
  a
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hu = Xe("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mi = Xe("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rw = Xe("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vu = Xe("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iw = Xe("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sw = Xe("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lw = Xe("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uw = Xe("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const th = Xe("EllipsisIcon", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cw = Xe("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dw = Xe("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fw = Xe("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pw = Xe("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hw = Xe("SunIcon", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oi = Xe("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), zP = /* @__PURE__ */ _({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(qy), { class: "flex" }, {
      default: y(() => [
        P(l(Hy), O(n.value, {
          class: l(F)(
            "text-heading flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            w(a.$slots, "default"),
            w(a.$slots, "icon", {}, () => [
              P(l(Mi), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Oc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Dc = Yp, un = (e, t) => (n) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null) return Dc(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: r } = t, i = Object.keys(o).map((c) => {
    const d = n == null ? void 0 : n[c], f = r == null ? void 0 : r[c];
    if (d === null) return null;
    const p = Oc(d) || Oc(f);
    return o[c][p];
  }), s = n && Object.entries(n).reduce((c, d) => {
    let [f, p] = d;
    return p === void 0 || (c[f] = p), c;
  }, {}), u = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((c, d) => {
    let { class: f, className: p, ...h } = d;
    return Object.entries(h).every((v) => {
      let [m, b] = v;
      return Array.isArray(b) ? b.includes({
        ...r,
        ...s
      }[m]) : {
        ...r,
        ...s
      }[m] === b;
    }) ? [
      ...c,
      f,
      p
    ] : c;
  }, []);
  return Dc(e, i, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, qP = /* @__PURE__ */ _({
  __name: "Alert",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-slot": "alert",
      class: j(l(F)(l(vw)({ variant: e.variant }), t.class)),
      role: "alert"
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), HP = /* @__PURE__ */ _({
  __name: "AlertDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-slot": "alert-description",
      class: j(l(F)("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), WP = /* @__PURE__ */ _({
  __name: "AlertTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-slot": "alert-title",
      class: j(l(F)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), vw = un(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current border-destructive *:data-[slot=alert-description]:text-destructive/90",
        warning: "text-warning bg-card [&>svg]:text-current border-warning *:data-[slot=alert-description]:text-warning/90",
        info: "text-blue-500 bg-card [&>svg]:text-current border-blue-700 *:data-[slot=alert-description]:text-blue-500/90",
        success: "text-green-500 bg-card [&>svg]:text-current border-green-700 *:data-[slot=alert-description]:text-green-500/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Pc(e) {
  return typeof e == "string" ? `'${e}'` : new mw().serialize(e);
}
const mw = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      fc(this, t, /* @__PURE__ */ new Map());
    }
    compare(a, o) {
      const r = typeof a, i = typeof o;
      return r === "string" && i === "string" ? a.localeCompare(o) : r === "number" && i === "number" ? a - o : String.prototype.localeCompare.call(this.serialize(a, !0), this.serialize(o, !0));
    }
    serialize(a, o) {
      if (a === null) return "null";
      switch (typeof a) {
        case "string":
          return o ? a : `'${a}'`;
        case "bigint":
          return `${a}n`;
        case "object":
          return this.$object(a);
        case "function":
          return this.$function(a);
      }
      return String(a);
    }
    serializeObject(a) {
      const o = Object.prototype.toString.call(a);
      if (o !== "[object Object]") return this.serializeBuiltInType(o.length < 10 ? `unknown:${o}` : o.slice(8, -1), a);
      const r = a.constructor, i = r === Object || r === void 0 ? "" : r.name;
      if (i !== "" && globalThis[i] === r) return this.serializeBuiltInType(i, a);
      if (typeof a.toJSON == "function") {
        const s = a.toJSON();
        return i + (s !== null && typeof s == "object" ? this.$object(s) : `(${this.serialize(s)})`);
      }
      return this.serializeObjectEntries(i, Object.entries(a));
    }
    serializeBuiltInType(a, o) {
      const r = this["$" + a];
      if (r) return r.call(this, o);
      if (typeof (o == null ? void 0 : o.entries) == "function") return this.serializeObjectEntries(a, o.entries());
      throw new Error(`Cannot serialize ${a}`);
    }
    serializeObjectEntries(a, o) {
      const r = Array.from(o).sort((s, u) => this.compare(s[0], u[0]));
      let i = `${a}{`;
      for (let s = 0; s < r.length; s++) {
        const [u, c] = r[s];
        i += `${this.serialize(u, !0)}:${this.serialize(c)}`, s < r.length - 1 && (i += ",");
      }
      return i + "}";
    }
    $object(a) {
      let o = ja(this, t).get(a);
      return o === void 0 && (ja(this, t).set(a, `#${ja(this, t).size}`), o = this.serializeObject(a), ja(this, t).set(a, o)), o;
    }
    $function(a) {
      const o = Function.prototype.toString.call(a);
      return o.slice(-15) === "[native code] }" ? `${a.name || ""}()[native]` : `${a.name}(${a.length})${o.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(a) {
      let o = "[";
      for (let r = 0; r < a.length; r++) o += this.serialize(a[r]), r < a.length - 1 && (o += ",");
      return o + "]";
    }
    $Date(a) {
      try {
        return `Date(${a.toISOString()})`;
      } catch {
        return "Date(null)";
      }
    }
    $ArrayBuffer(a) {
      return `ArrayBuffer[${new Uint8Array(a).join(",")}]`;
    }
    $Set(a) {
      return `Set${this.$Array(Array.from(a).sort((o, r) => this.compare(o, r)))}`;
    }
    $Map(a) {
      return this.serializeObjectEntries("Map", a.entries());
    }
  }
  t = new WeakMap();
  for (const n of ["Error", "RegExp", "URL"]) e.prototype["$" + n] = function(a) {
    return `${n}(${a})`;
  };
  for (const n of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) e.prototype["$" + n] = function(a) {
    return `${n}[${a.join(",")}]`;
  };
  for (const n of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + n] = function(a) {
    return `${n}[${a.join("n,")}${a.length > 0 ? "n" : ""}]`;
  };
  return e;
}();
function Hs(e, t) {
  return e === t || Pc(e) === Pc(t);
}
function gw(e, t, n) {
  const a = e.findIndex((s) => Hs(s, t)), o = e.findIndex((s) => Hs(s, n));
  if (a === -1 || o === -1) return [];
  const [r, i] = [a, o].sort((s, u) => s - u);
  return e.slice(r, i + 1);
}
function gt(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(i) => {
    const s = An(a, i);
    if (s || s === null) return s;
    throw new Error(`Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (i) => (wt(a, i), i)];
}
function Ln() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function mu(e, t, n) {
  const a = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
function gu(e) {
  return e ? e.flatMap((t) => t.type === ve ? gu(t.children) : [t]) : [];
}
const yw = ["INPUT", "TEXTAREA"];
function nh(e, t, n, a = {}) {
  if (!t || a.enableIgnoredElement && yw.includes(t.nodeName)) return null;
  const { arrowKeyOptions: o = "both", attributeName: r = "[data-reka-collection-item]", itemsArray: i = [], loop: s = !0, dir: u = "ltr", preventScroll: c = !0, focus: d = !1 } = a, [f, p, h, v, m, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], x = h || v, S = f || p;
  if (!m && !b && (!x && !S || o === "vertical" && S || o === "horizontal" && x)) return null;
  const C = i;
  if (!C.length) return null;
  c && e.preventDefault();
  let T = null;
  return S || x ? T = ah(C, t, {
    goForward: x ? v : u === "ltr" ? f : p,
    loop: s
  }) : m ? T = C.at(0) || null : b && (T = C.at(-1) || null), d && (T == null || T.focus()), T;
}
function ah(e, t, n, a = e.length) {
  if (--a === 0) return null;
  const o = e.indexOf(t), r = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (r < 0 || r >= e.length)) return null;
  const i = (r + e.length) % e.length, s = e[i];
  return s ? s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false" ? ah(e, s, n, a) : s : null;
}
const [Di] = gt("ConfigProvider");
function bw(e, t) {
  var n;
  const a = en();
  return ge(() => {
    a.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Ra(a);
}
function Vo(e) {
  return hi() ? (vi(e), !0) : !1;
}
function br() {
  const e = /* @__PURE__ */ new Set(), t = (r) => {
    e.delete(r);
  };
  return {
    on: (r) => {
      e.add(r);
      const i = () => t(r);
      return Vo(i), {
        off: i
      };
    },
    off: t,
    trigger: (...r) => Promise.all(Array.from(e).map((i) => i(...r))),
    clear: () => {
      e.clear();
    }
  };
}
function _w(e) {
  let t = 0, n, a;
  const o = () => {
    t -= 1, a && t <= 0 && (a.stop(), n = void 0, a = void 0);
  };
  return (...r) => (t += 1, a || (a = Ol(!0), n = a.run(() => e(...r))), Vo(o), n);
}
function xw(e) {
  if (!lt(e))
    return Cn(e);
  const t = new Proxy({}, {
    get(n, a, o) {
      return l(Reflect.get(e.value, a, o));
    },
    set(n, a, o) {
      return lt(e.value[a]) && !lt(o) ? e.value[a].value = o : e.value[a] = o, !0;
    },
    deleteProperty(n, a) {
      return Reflect.deleteProperty(e.value, a);
    },
    has(n, a) {
      return Reflect.has(e.value, a);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return Cn(t);
}
function ww(e) {
  return xw(E(e));
}
function Cw(e, ...t) {
  const n = t.flat(), a = n[0];
  return ww(() => Object.fromEntries(typeof a == "function" ? Object.entries(ce(e)).filter(([o, r]) => !a(Te(r), o)) : Object.entries(ce(e)).filter((o) => !n.includes(o[0]))));
}
const Vt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const kw = (e) => typeof e < "u", Sw = Object.prototype.toString, $w = (e) => Sw.call(e) === "[object Object]", Ic = () => {
}, Rc = /* @__PURE__ */ Tw();
function Tw() {
  var e, t;
  return Vt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Aw(e, t) {
  function n(...a) {
    return new Promise((o, r) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(o).catch(r);
    });
  }
  return n;
}
function Ew(e, t = {}) {
  let n, a, o = Ic;
  const r = (u) => {
    clearTimeout(u), o(), o = Ic;
  };
  let i;
  return (u) => {
    const c = Te(e), d = Te(t.maxWait);
    return n && r(n), c <= 0 || d !== void 0 && d <= 0 ? (a && (r(a), a = null), Promise.resolve(u())) : new Promise((f, p) => {
      o = t.rejectOnCancel ? p : f, i = u, d && !a && (a = setTimeout(() => {
        n && r(n), a = null, f(i());
      }, d)), n = setTimeout(() => {
        a && r(a), a = null, f(u());
      }, c);
    });
  };
}
function Bw(e) {
  return Ne();
}
function ds(e) {
  return Array.isArray(e) ? e : [e];
}
function Pi(e, t = 1e4) {
  return Dl((n, a) => {
    let o = Te(e), r;
    const i = () => setTimeout(() => {
      o = Te(e), a();
    }, Te(t));
    return Vo(() => {
      clearTimeout(r);
    }), {
      get() {
        return n(), o;
      },
      set(s) {
        o = s, a(), clearTimeout(r), r = i();
      }
    };
  });
}
function Mw(e, t = 200, n = {}) {
  return Aw(
    Ew(t, n),
    e
  );
}
const Ow = Te;
function Dw(e, t) {
  Bw() && gi(e, t);
}
function Pw(e, t, n) {
  return ee(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Ii = Vt ? window : void 0;
function zt(e) {
  var t;
  const n = Te(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function oh(...e) {
  const t = [], n = () => {
    t.forEach((s) => s()), t.length = 0;
  }, a = (s, u, c, d) => (s.addEventListener(u, c, d), () => s.removeEventListener(u, c, d)), o = E(() => {
    const s = ds(Te(e[0])).filter((u) => u != null);
    return s.every((u) => typeof u != "string") ? s : void 0;
  }), r = Pw(
    () => {
      var s, u;
      return [
        (u = (s = o.value) == null ? void 0 : s.map((c) => zt(c))) != null ? u : [Ii].filter((c) => c != null),
        ds(Te(o.value ? e[1] : e[0])),
        ds(l(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Te(o.value ? e[3] : e[2])
      ];
    },
    ([s, u, c, d]) => {
      if (n(), !(s != null && s.length) || !(u != null && u.length) || !(c != null && c.length))
        return;
      const f = $w(d) ? { ...d } : d;
      t.push(
        ...s.flatMap(
          (p) => u.flatMap(
            (h) => c.map((v) => a(p, h, v, f))
          )
        )
      );
    },
    { flush: "post" }
  ), i = () => {
    r(), n();
  };
  return Vo(n), i;
}
function rh() {
  const e = en(!1), t = Ne();
  return t && le(() => {
    e.value = !0;
  }, t), e;
}
function Iw(e) {
  const t = rh();
  return E(() => (t.value, !!e()));
}
function Rw(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Fw(...e) {
  let t, n, a = {};
  e.length === 3 ? (t = e[0], n = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], a = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Ii,
    eventName: r = "keydown",
    passive: i = !1,
    dedupe: s = !1
  } = a, u = Rw(t);
  return oh(o, r, (d) => {
    d.repeat && Te(s) || u(d) && n(d);
  }, i);
}
function Nw(e) {
  return JSON.parse(JSON.stringify(e));
}
function qr(e, t, n = {}) {
  const { window: a = Ii, ...o } = n;
  let r;
  const i = Iw(() => a && "ResizeObserver" in a), s = () => {
    r && (r.disconnect(), r = void 0);
  }, u = E(() => {
    const f = Te(e);
    return Array.isArray(f) ? f.map((p) => zt(p)) : [zt(f)];
  }), c = ee(
    u,
    (f) => {
      if (s(), i.value && a) {
        r = new ResizeObserver(t);
        for (const p of f)
          p && r.observe(p, o);
      }
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    s(), c();
  };
  return Vo(d), {
    isSupported: i,
    stop: d
  };
}
function Ta(e, t, n, a = {}) {
  var o, r, i;
  const {
    clone: s = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, h = Ne(), v = n || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((i = (r = h == null ? void 0 : h.proxy) == null ? void 0 : r.$emit) == null ? void 0 : i.bind(h == null ? void 0 : h.proxy));
  let m = c;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const b = (C) => s ? typeof s == "function" ? s(C) : Nw(C) : C, x = () => kw(e[t]) ? b(e[t]) : f, S = (C) => {
    p ? p(C) && v(m, C) : v(m, C);
  };
  if (u) {
    const C = x(), T = M(C);
    let $ = !1;
    return ee(
      () => e[t],
      (B) => {
        $ || ($ = !0, T.value = b(B), ae(() => $ = !1));
      }
    ), ee(
      T,
      (B) => {
        !$ && (B !== e[t] || d) && S(B);
      },
      { deep: d }
    ), T;
  } else
    return E({
      get() {
        return x();
      },
      set(C) {
        S(C);
      }
    });
}
function fs(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ws(e, t, n = ".", a) {
  if (!fs(t))
    return Ws(e, {}, n, a);
  const o = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const i = e[r];
    i != null && (a && a(o, r, i, n) || (Array.isArray(i) && Array.isArray(o[r]) ? o[r] = [...i, ...o[r]] : fs(i) && fs(o[r]) ? o[r] = Ws(
      i,
      o[r],
      (n ? `${n}.` : "") + r.toString(),
      a
    ) : o[r] = i));
  }
  return o;
}
function Lw(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, a) => Ws(n, a, "", e), {})
  );
}
const Vw = Lw(), zw = _w(() => {
  const e = M(/* @__PURE__ */ new Map()), t = M(), n = E(() => {
    for (const i of e.value.values()) if (i) return !0;
    return !1;
  }), a = Di({ scrollBody: M(!0) });
  let o = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Rc && (o == null || o()), t.value = void 0;
  };
  return ee(n, (i, s) => {
    var f;
    if (!Vt) return;
    if (!i) {
      s && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, c = {
      padding: u,
      margin: 0
    }, d = (f = a.scrollBody) != null && f.value ? typeof a.scrollBody.value == "object" ? Vw({
      padding: a.scrollBody.value.padding === !0 ? u : a.scrollBody.value.padding,
      margin: a.scrollBody.value.margin === !0 ? u : a.scrollBody.value.margin
    }, c) : c : {
      padding: 0,
      margin: 0
    };
    u > 0 && (document.body.style.paddingRight = typeof d.padding == "number" ? `${d.padding}px` : String(d.padding), document.body.style.marginRight = typeof d.margin == "number" ? `${d.margin}px` : String(d.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Rc && (o = oh(document, "touchmove", (p) => Hw(p), { passive: !1 })), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function qw(e) {
  const t = Math.random().toString(36).substring(2, 7), n = zw();
  n.value.set(t, e ?? !1);
  const a = E({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return Dw(() => {
    n.value.delete(t);
  }), a;
}
function ih(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : ih(n);
  }
}
function Hw(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && ih(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function yu(e) {
  const t = Di({ dir: M("ltr") });
  return E(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Ww(e) {
  const t = Ne(), n = t == null ? void 0 : t.type.emits, a = {};
  return n != null && n.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), n == null || n.forEach((o) => {
    a[Sf(Ca(o))] = (...r) => e(o, ...r);
  }), a;
}
function Uw(e) {
  const t = E(() => l(e)), n = E(() => new Intl.Collator("en", {
    usage: "search",
    ...t.value
  }));
  return {
    startsWith: (i, s) => s.length === 0 ? !0 : (i = i.normalize("NFC"), s = s.normalize("NFC"), n.value.compare(i.slice(0, s.length), s) === 0),
    endsWith: (i, s) => s.length === 0 ? !0 : (i = i.normalize("NFC"), s = s.normalize("NFC"), n.value.compare(i.slice(-s.length), s) === 0),
    contains: (i, s) => {
      if (s.length === 0) return !0;
      i = i.normalize("NFC"), s = s.normalize("NFC");
      let u = 0;
      const c = s.length;
      for (; u + c <= i.length; u++) {
        const d = i.slice(u, u + c);
        if (n.value.compare(s, d) === 0) return !0;
      }
      return !1;
    }
  };
}
function Kw(e) {
  return E(() => {
    var t;
    return Ow(e) ? !!((t = zt(e)) != null && t.closest("form")) : !0;
  });
}
function Be() {
  const e = Ne(), t = M(), n = E(() => {
    var i, s;
    return ["#text", "#comment"].includes((i = t.value) == null ? void 0 : i.$el.nodeName) ? (s = t.value) == null ? void 0 : s.$el.nextElementSibling : zt(t);
  }), a = Object.assign({}, e.exposed), o = {};
  for (const i in e.props) Object.defineProperty(o, i, {
    enumerable: !0,
    configurable: !0,
    get: () => e.props[i]
  });
  if (Object.keys(a).length > 0) for (const i in a) Object.defineProperty(o, i, {
    enumerable: !0,
    configurable: !0,
    get: () => a[i]
  });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function r(i) {
    t.value = i, i && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => i instanceof Element ? i : i.$el
    }), e.exposed = o);
  }
  return {
    forwardRef: r,
    currentRef: t,
    currentElement: n
  };
}
function aa(e) {
  const t = Ne(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, r) => {
    const i = (t == null ? void 0 : t.type.props[r]).default;
    return i !== void 0 && (o[r] = i), o;
  }, {}), a = Al(e);
  return E(() => {
    const o = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((i) => {
      o[Ca(i)] = r[i];
    }), Object.keys({
      ...n,
      ...o
    }).reduce((i, s) => (a.value[s] !== void 0 && (i[s] = a.value[s]), i), {});
  });
}
function cn(e, t) {
  const n = aa(e), a = t ? Ww(t) : {};
  return E(() => ({
    ...n.value,
    ...a
  }));
}
var jw = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, da = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), ar = {}, ps = 0, sh = function(e) {
  return e && (e.host || sh(e.parentNode));
}, Gw = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var a = sh(n);
    return a && e.contains(a) ? a : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Yw = function(e, t, n, a) {
  var o = Gw(t, Array.isArray(e) ? e : [e]);
  ar[n] || (ar[n] = /* @__PURE__ */ new WeakMap());
  var r = ar[n], i = [], s = /* @__PURE__ */ new Set(), u = new Set(o), c = function(f) {
    !f || s.has(f) || (s.add(f), c(f.parentNode));
  };
  o.forEach(c);
  var d = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (s.has(p))
        d(p);
      else
        try {
          var h = p.getAttribute(a), v = h !== null && h !== "false", m = (da.get(p) || 0) + 1, b = (r.get(p) || 0) + 1;
          da.set(p, m), r.set(p, b), i.push(p), m === 1 && v && nr.set(p, !0), b === 1 && p.setAttribute(n, "true"), v || p.setAttribute(a, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", p, x);
        }
    });
  };
  return d(t), s.clear(), ps++, function() {
    i.forEach(function(f) {
      var p = da.get(f) - 1, h = r.get(f) - 1;
      da.set(f, p), r.set(f, h), p || (nr.has(f) || f.removeAttribute(a), nr.delete(f)), h || f.removeAttribute(n);
    }), ps--, ps || (da = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), ar = {});
  };
}, Xw = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var a = Array.from(Array.isArray(e) ? e : [e]), o = jw(e);
  return o ? (a.push.apply(a, Array.from(o.querySelectorAll("[aria-live], script"))), Yw(a, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function Zw(e) {
  let t;
  ee(() => zt(e), (n) => {
    n ? t = Xw(n) : t && t();
  }), ze(() => {
    t && t();
  });
}
let Jw = 0;
function Bn(e, t = "reka") {
  var a;
  if (e) return e;
  if ("useId" in ha) return `${t}-${(a = ha.useId) == null ? void 0 : a.call(ha)}`;
  const n = Di({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++Jw}`;
}
function Qw() {
  return {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    SPACE_CODE: "Space"
  };
}
function e1(e) {
  const t = M(), n = E(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), a = E(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return le(() => {
    const o = zt(e);
    if (o) {
      t.value = {
        width: o.offsetWidth,
        height: o.offsetHeight
      };
      const r = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length) return;
        const s = i[0];
        let u, c;
        if ("borderBoxSize" in s) {
          const d = s.borderBoxSize, f = Array.isArray(d) ? d[0] : d;
          u = f.inlineSize, c = f.blockSize;
        } else
          u = o.offsetWidth, c = o.offsetHeight;
        t.value = {
          width: u,
          height: c
        };
      });
      return r.observe(o, { box: "border-box" }), () => r.unobserve(o);
    } else t.value = void 0;
  }), {
    width: n,
    height: a
  };
}
function t1(e, t) {
  const n = M(e);
  function a(r) {
    return t[n.value][r] ?? n.value;
  }
  return {
    state: n,
    dispatch: (r) => {
      n.value = a(r);
    }
  };
}
function n1(e) {
  const t = Pi("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, r) => {
      t.value = t.value + o;
      {
        const i = Ln(), s = r.map((p) => {
          var h, v;
          return {
            ...p,
            textValue: ((h = p.value) == null ? void 0 : h.textValue) ?? ((v = p.ref.textContent) == null ? void 0 : v.trim()) ?? ""
          };
        }), u = s.find((p) => p.ref === i), c = s.map((p) => p.textValue), d = o1(c, t.value, u == null ? void 0 : u.textValue), f = s.find((p) => p.textValue === d);
        return f && f.ref.focus(), f == null ? void 0 : f.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function a1(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
function o1(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let i = a1(e, Math.max(r, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const u = i.find((c) => c.toLowerCase().startsWith(o.toLowerCase()));
  return u !== n ? u : void 0;
}
function r1(e, t) {
  var b;
  const n = M({}), a = M("none"), o = M(e), r = e.value ? "mounted" : "unmounted";
  let i;
  const s = ((b = t.value) == null ? void 0 : b.ownerDocument.defaultView) ?? Ii, { state: u, dispatch: c } = t1(r, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), d = (x) => {
    var S;
    if (Vt) {
      const C = new CustomEvent(x, {
        bubbles: !1,
        cancelable: !1
      });
      (S = t.value) == null || S.dispatchEvent(C);
    }
  };
  ee(e, async (x, S) => {
    var T;
    const C = S !== x;
    if (await ae(), C) {
      const $ = a.value, B = or(t.value);
      x ? (c("MOUNT"), d("enter"), B === "none" && d("after-enter")) : B === "none" || B === "undefined" || ((T = n.value) == null ? void 0 : T.display) === "none" ? (c("UNMOUNT"), d("leave"), d("after-leave")) : S && $ !== B ? (c("ANIMATION_OUT"), d("leave")) : (c("UNMOUNT"), d("after-leave"));
    }
  }, { immediate: !0 });
  const f = (x) => {
    const S = or(t.value), C = S.includes(CSS.escape(x.animationName)), T = u.value === "mounted" ? "enter" : "leave";
    if (x.target === t.value && C && (d(`after-${T}`), c("ANIMATION_END"), !o.value)) {
      const $ = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = s == null ? void 0 : s.setTimeout(() => {
        var B;
        ((B = t.value) == null ? void 0 : B.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = $);
      });
    }
    x.target === t.value && S === "none" && c("ANIMATION_END");
  }, p = (x) => {
    x.target === t.value && (a.value = or(t.value));
  }, h = ee(t, (x, S) => {
    x ? (n.value = getComputedStyle(x), x.addEventListener("animationstart", p), x.addEventListener("animationcancel", f), x.addEventListener("animationend", f)) : (c("ANIMATION_END"), i !== void 0 && (s == null || s.clearTimeout(i)), S == null || S.removeEventListener("animationstart", p), S == null || S.removeEventListener("animationcancel", f), S == null || S.removeEventListener("animationend", f));
  }, { immediate: !0 }), v = ee(u, () => {
    const x = or(t.value);
    a.value = u.value === "mounted" ? x : "none";
  });
  return ze(() => {
    h(), v();
  }), { isPresent: E(() => ["mounted", "unmountSuspended"].includes(u.value)) };
}
function or(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var Ri = _({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    var c;
    const { present: a, forceMount: o } = ce(e), r = M(), { isPresent: i } = r1(a, r);
    n({ present: i });
    let s = t.default({ present: i.value });
    s = gu(s || []);
    const u = Ne();
    if (s && (s == null ? void 0 : s.length) > 1) {
      const d = (c = u == null ? void 0 : u.parent) != null && c.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${d}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((f) => `  - ${f}`).join(`
`)
      ].join(`
`));
    }
    return () => o.value || a.value || i.value ? je(t.default({ present: i.value })[0], { ref: (d) => {
      const f = zt(d);
      return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-reka-popper-content-wrapper") ? r.value = f.firstElementChild : r.value = f), f;
    } }) : null;
  }
});
const Us = _({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u;
      if (!n.default) return null;
      const a = gu(n.default()), o = a.findIndex((c) => c.type !== El);
      if (o === -1) return a;
      const r = a[o];
      (u = r.props) == null || delete u.ref;
      const i = r.props ? O(t, r.props) : t, s = $f({
        ...r,
        props: {}
      }, i);
      return a.length === 1 ? s : (a[o] = s, a);
    };
  }
}), i1 = [
  "area",
  "img",
  "input"
], Se = _({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: n }) {
    const a = e.asChild ? "template" : e.as;
    return typeof a == "string" && i1.includes(a) ? () => je(a, t) : a !== "template" ? () => je(e.as, t, { default: n.default }) : () => je(Us, t, { default: n.default });
  }
});
function $n() {
  const e = M(), t = E(() => {
    var n, a;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (a = e.value) == null ? void 0 : a.$el.nextElementSibling : zt(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const s1 = "dismissableLayer.pointerDownOutside", l1 = "dismissableLayer.focusOutside";
function lh(e, t) {
  const n = t.closest("[data-dismissable-layer]"), a = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), o = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(n && (a === n || o.indexOf(a) < o.indexOf(n)));
}
function u1(e, t, n = !0) {
  var i;
  const a = ((i = t == null ? void 0 : t.value) == null ? void 0 : i.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1), r = M(() => {
  });
  return ge((s) => {
    if (!Vt || !Te(n)) return;
    const u = async (d) => {
      const f = d.target;
      if (!(!(t != null && t.value) || !f)) {
        if (lh(t.value, f)) {
          o.value = !1;
          return;
        }
        if (d.target && !o.value) {
          let h = function() {
            mu(s1, e, p);
          };
          const p = { originalEvent: d };
          d.pointerType === "touch" ? (a.removeEventListener("click", r.value), r.value = h, a.addEventListener("click", r.value, { once: !0 })) : h();
        } else a.removeEventListener("click", r.value);
        o.value = !1;
      }
    }, c = window.setTimeout(() => {
      a.addEventListener("pointerdown", u);
    }, 0);
    s(() => {
      window.clearTimeout(c), a.removeEventListener("pointerdown", u), a.removeEventListener("click", r.value);
    });
  }), { onPointerDownCapture: () => {
    Te(n) && (o.value = !0);
  } };
}
function c1(e, t, n = !0) {
  var r;
  const a = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1);
  return ge((i) => {
    if (!Vt || !Te(n)) return;
    const s = async (u) => {
      if (!(t != null && t.value)) return;
      await ae(), await ae();
      const c = u.target;
      !t.value || !c || lh(t.value, c) || u.target && !o.value && mu(l1, e, { originalEvent: u });
    };
    a.addEventListener("focusin", s), i(() => a.removeEventListener("focusin", s));
  }), {
    onFocusCapture: () => {
      Te(n) && (o.value = !0);
    },
    onBlurCapture: () => {
      Te(n) && (o.value = !1);
    }
  };
}
const Gt = Cn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var d1 = /* @__PURE__ */ _({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "dismiss"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: r } = Be(), i = E(() => {
      var v;
      return ((v = r.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
    }), s = E(() => Gt.layersRoot), u = E(() => r.value ? Array.from(s.value).indexOf(r.value) : -1), c = E(() => Gt.layersWithOutsidePointerEventsDisabled.size > 0), d = E(() => {
      const v = Array.from(s.value), [m] = [...Gt.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(m);
      return u.value >= b;
    }), f = u1(async (v) => {
      const m = [...Gt.branches].some((b) => b == null ? void 0 : b.contains(v.target));
      !d.value || m || (a("pointerDownOutside", v), a("interactOutside", v), await ae(), v.defaultPrevented || a("dismiss"));
    }, r), p = c1((v) => {
      [...Gt.branches].some((b) => b == null ? void 0 : b.contains(v.target)) || (a("focusOutside", v), a("interactOutside", v), v.defaultPrevented || a("dismiss"));
    }, r);
    Fw("Escape", (v) => {
      u.value === s.value.size - 1 && (a("escapeKeyDown", v), v.defaultPrevented || a("dismiss"));
    });
    let h;
    return ge((v) => {
      r.value && (n.disableOutsidePointerEvents && (Gt.layersWithOutsidePointerEventsDisabled.size === 0 && (h = i.value.body.style.pointerEvents, i.value.body.style.pointerEvents = "none"), Gt.layersWithOutsidePointerEventsDisabled.add(r.value)), s.value.add(r.value), v(() => {
        n.disableOutsidePointerEvents && Gt.layersWithOutsidePointerEventsDisabled.size === 1 && (i.value.body.style.pointerEvents = h);
      }));
    }), ge((v) => {
      v(() => {
        r.value && (s.value.delete(r.value), Gt.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, m) => (g(), k(l(Se), {
      ref: l(o),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: qt({ pointerEvents: c.value ? d.value ? "auto" : "none" : void 0 }),
      onFocusCapture: l(p).onFocusCapture,
      onBlurCapture: l(p).onBlurCapture,
      onPointerdownCapture: l(f).onPointerDownCapture
    }, {
      default: y(() => [w(v.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "style",
      "onFocusCapture",
      "onBlurCapture",
      "onPointerdownCapture"
    ]));
  }
}), uh = d1, f1 = /* @__PURE__ */ _({
  __name: "Teleport",
  props: {
    to: {
      type: null,
      required: !1,
      default: "body"
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = rh();
    return (n, a) => l(t) || n.forceMount ? (g(), k(Xn, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [w(n.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : te("v-if", !0);
  }
}), p1 = f1;
const [ch, h1] = gt("AvatarRoot");
var v1 = /* @__PURE__ */ _({
  __name: "AvatarRoot",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return Be(), h1({ imageLoadingStatus: M("idle") }), (t, n) => (g(), k(l(Se), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: y(() => [w(t.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), m1 = v1, g1 = /* @__PURE__ */ _({
  __name: "AvatarFallback",
  props: {
    delayMs: {
      type: Number,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, n = ch();
    Be();
    const a = M(t.delayMs === void 0);
    return ge((o) => {
      if (t.delayMs && Vt) {
        const r = window.setTimeout(() => {
          a.value = !0;
        }, t.delayMs);
        o(() => {
          window.clearTimeout(r);
        });
      }
    }), (o, r) => a.value && l(n).imageLoadingStatus.value !== "loaded" ? (g(), k(l(Se), {
      key: 0,
      "as-child": o.asChild,
      as: o.as
    }, {
      default: y(() => [w(o.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"])) : te("v-if", !0);
  }
}), y1 = g1;
function Fc(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function b1(e, { referrerPolicy: t, crossOrigin: n } = {}) {
  const a = M(!1), o = M(null), r = E(() => a.value ? (!o.value && Vt && (o.value = new window.Image()), o.value) : null), i = M(Fc(r.value, e.value)), s = (u) => () => {
    a.value && (i.value = u);
  };
  return le(() => {
    a.value = !0, ge((u) => {
      const c = r.value;
      if (!c) return;
      i.value = Fc(c, e.value);
      const d = s("loaded"), f = s("error");
      c.addEventListener("load", d), c.addEventListener("error", f), t != null && t.value && (c.referrerPolicy = t.value), typeof (n == null ? void 0 : n.value) == "string" && (c.crossOrigin = n.value), u(() => {
        c.removeEventListener("load", d), c.removeEventListener("error", f);
      });
    });
  }), ze(() => {
    a.value = !1;
  }), i;
}
var _1 = /* @__PURE__ */ _({
  __name: "AvatarImage",
  props: {
    src: {
      type: String,
      required: !0
    },
    referrerPolicy: {
      type: null,
      required: !1
    },
    crossOrigin: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "img"
    }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const n = e, a = t, { src: o, referrerPolicy: r, crossOrigin: i } = ce(n);
    Be();
    const s = ch(), u = b1(o, {
      referrerPolicy: r,
      crossOrigin: i
    });
    return ee(u, (c) => {
      a("loadingStatusChange", c), c !== "idle" && (s.imageLoadingStatus.value = c);
    }, { immediate: !0 }), (c, d) => Yn((g(), k(l(Se), {
      role: "img",
      "as-child": c.asChild,
      as: c.as,
      src: l(o),
      "referrer-policy": l(r)
    }, {
      default: y(() => [w(c.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "src",
      "referrer-policy"
    ])), [[mi, l(u) === "loaded"]]);
  }
}), x1 = _1;
const Nc = "data-reka-collection-item";
function Mn(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, a = `${t}CollectionProvider`;
  let o;
  if (n) {
    const d = M(/* @__PURE__ */ new Map());
    o = {
      collectionRef: M(),
      itemMap: d
    }, wt(a, o);
  } else o = An(a);
  const r = (d = !1) => {
    const f = o.collectionRef.value;
    if (!f) return [];
    const p = Array.from(f.querySelectorAll(`[${Nc}]`)), v = Array.from(o.itemMap.value.values()).sort((m, b) => p.indexOf(m.ref) - p.indexOf(b.ref));
    return d ? v : v.filter((m) => m.ref.dataset.disabled !== "");
  }, i = _({
    name: "CollectionSlot",
    setup(d, { slots: f }) {
      const { primitiveElement: p, currentElement: h } = $n();
      return ee(h, () => {
        o.collectionRef.value = h.value;
      }), () => je(Us, { ref: p }, f);
    }
  }), s = _({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(d, { slots: f, attrs: p }) {
      const { primitiveElement: h, currentElement: v } = $n();
      return ge((m) => {
        if (v.value) {
          const b = Tf(v.value);
          o.itemMap.value.set(b, {
            ref: v.value,
            value: d.value
          }), m(() => o.itemMap.value.delete(b));
        }
      }), () => je(Us, {
        ...p,
        [Nc]: "",
        ref: h
      }, f);
    }
  }), u = E(() => Array.from(o.itemMap.value.values())), c = E(() => o.itemMap.value.size);
  return {
    getItems: r,
    reactiveItems: u,
    itemMapSize: c,
    CollectionSlot: i,
    CollectionItem: s
  };
}
const w1 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function C1(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function k1(e, t, n) {
  const a = C1(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(a)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(a)))
    return w1[a];
}
var S1 = /* @__PURE__ */ _({
  __name: "VisuallyHidden",
  props: {
    feature: {
      type: String,
      required: !1,
      default: "focusable"
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return (t, n) => (g(), k(l(Se), {
      as: t.as,
      "as-child": t.asChild,
      "aria-hidden": t.feature === "focusable" ? "true" : void 0,
      "data-hidden": t.feature === "fully-hidden" ? "" : void 0,
      tabindex: t.feature === "fully-hidden" ? "-1" : void 0,
      style: {
        position: "absolute",
        border: 0,
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        top: "-1px",
        left: "-1px"
      }
    }, {
      default: y(() => [w(t.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-hidden",
      "data-hidden",
      "tabindex"
    ]));
  }
}), dh = S1, $1 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, { primitiveElement: n, currentElement: a } = $n(), o = E(() => t.checked ?? t.value);
    return ee(o, (r, i) => {
      if (!a.value) return;
      const s = a.value, u = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(u, "value").set;
      if (d && r !== i) {
        const f = new Event("input", { bubbles: !0 }), p = new Event("change", { bubbles: !0 });
        d.call(s, r), s.dispatchEvent(f), s.dispatchEvent(p);
      }
    }), (r, i) => (g(), k(dh, O({
      ref_key: "primitiveElement",
      ref: n
    }, {
      ...t,
      ...r.$attrs
    }, { as: "input" }), null, 16));
  }
}), Lc = $1, T1 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInput",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, n = E(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), a = E(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
      name: t.name,
      value: t.value
    }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, r) => typeof o == "object" ? Object.entries(o).map(([i, s]) => ({
      name: `${t.name}[${r}][${i}]`,
      value: s
    })) : {
      name: `${t.name}[${r}]`,
      value: o
    }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, r]) => ({
      name: `${t.name}[${o}]`,
      value: r
    })) : []);
    return (o, r) => (g(), V(ve, null, [te(" We render single input if it's required "), n.value ? (g(), k(Lc, O({ key: o.name }, {
      ...t,
      ...o.$attrs
    }, {
      name: o.name,
      value: o.value
    }), null, 16, ["name", "value"])) : (g(!0), V(ve, { key: 1 }, Ye(a.value, (i) => (g(), k(Lc, O({ key: i.name }, { ref_for: !0 }, {
      ...t,
      ...o.$attrs
    }, {
      name: i.name,
      value: i.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), A1 = T1;
const [fh, E1] = gt("PopperRoot");
var B1 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = M();
    return E1({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, a) => w(n.$slots, "default");
  }
}), M1 = B1, O1 = /* @__PURE__ */ _({
  __name: "PopperAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = Be(), o = fh();
    return Ml(() => {
      o.onAnchorChange(t.reference ?? a.value);
    }), (r, i) => (g(), k(l(Se), {
      ref: l(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: y(() => [w(r.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), D1 = O1;
function P1(e) {
  return e !== null;
}
function I1(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var b, x, S;
      const { placement: n, rects: a, middlewareData: o } = t, i = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, u = i ? 0 : e.arrowHeight, [c, d] = Ks(n), f = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[d], p = (((x = o.arrow) == null ? void 0 : x.x) ?? 0) + s / 2, h = (((S = o.arrow) == null ? void 0 : S.y) ?? 0) + u / 2;
      let v = "", m = "";
      return c === "bottom" ? (v = i ? f : `${p}px`, m = `${-u}px`) : c === "top" ? (v = i ? f : `${p}px`, m = `${a.floating.height + u}px`) : c === "right" ? (v = `${-u}px`, m = i ? f : `${h}px`) : c === "left" && (v = `${a.floating.width + u}px`, m = i ? f : `${h}px`), { data: {
        x: v,
        y: m
      } };
    }
  };
}
function Ks(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const R1 = {
  side: "bottom",
  sideOffset: 0,
  sideFlip: !0,
  align: "center",
  alignOffset: 0,
  alignFlip: !0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [UP, F1] = gt("PopperContent");
var N1 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Bl({
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...R1 }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = fh(), { forwardRef: r, currentElement: i } = Be(), s = M(), u = M(), { width: c, height: d } = e1(u), f = E(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), p = E(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...n.collisionPadding
    }), h = E(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = E(() => ({
      padding: p.value,
      boundary: h.value.filter(P1),
      altBoundary: h.value.length > 0
    })), m = E(() => ({
      mainAxis: n.sideFlip,
      crossAxis: n.alignFlip
    })), b = bw(() => [
      Lf({
        mainAxis: n.sideOffset + d.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Nr({
        ...v.value,
        ...m.value
      }),
      n.avoidCollisions && Vf({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Hf() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Nr({
        ...v.value,
        ...m.value
      }),
      zf({
        ...v.value,
        apply: ({ elements: I, rects: G, availableWidth: z, availableHeight: Y }) => {
          const { width: ne, height: _e } = G.reference, he = I.floating.style;
          he.setProperty("--reka-popper-available-width", `${z}px`), he.setProperty("--reka-popper-available-height", `${Y}px`), he.setProperty("--reka-popper-anchor-width", `${ne}px`), he.setProperty("--reka-popper-anchor-height", `${_e}px`);
        }
      }),
      u.value && Wf({
        element: u.value,
        padding: n.arrowPadding
      }),
      I1({
        arrowWidth: c.value,
        arrowHeight: d.value
      }),
      n.hideWhenDetached && qf({
        strategy: "referenceHidden",
        ...v.value
      })
    ]), x = E(() => n.reference ?? o.anchor.value), { floatingStyles: S, placement: C, isPositioned: T, middlewareData: $ } = Kf(x, s, {
      strategy: n.positionStrategy,
      placement: f,
      whileElementsMounted: (...I) => Nf(...I, {
        layoutShift: !n.disableUpdateOnLayoutShift,
        animationFrame: n.updatePositionStrategy === "always"
      }),
      middleware: b
    }), B = E(() => Ks(C.value)[0]), A = E(() => Ks(C.value)[1]);
    Ml(() => {
      T.value && a("placed");
    });
    const R = E(() => {
      var I;
      return ((I = $.value.arrow) == null ? void 0 : I.centerOffset) !== 0;
    }), L = M("");
    ge(() => {
      i.value && (L.value = window.getComputedStyle(i.value).zIndex);
    });
    const D = E(() => {
      var I;
      return ((I = $.value.arrow) == null ? void 0 : I.x) ?? 0;
    }), N = E(() => {
      var I;
      return ((I = $.value.arrow) == null ? void 0 : I.y) ?? 0;
    });
    return F1({
      placedSide: B,
      onArrowChange: (I) => u.value = I,
      arrowX: D,
      arrowY: N,
      shouldHideArrow: R
    }), (I, G) => {
      var z, Y, ne;
      return g(), V("div", {
        ref_key: "floatingRef",
        ref: s,
        "data-reka-popper-content-wrapper": "",
        style: qt({
          ...l(S),
          transform: l(T) ? l(S).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: L.value,
          "--reka-popper-transform-origin": [(z = l($).transformOrigin) == null ? void 0 : z.x, (Y = l($).transformOrigin) == null ? void 0 : Y.y].join(" "),
          ...((ne = l($).hide) == null ? void 0 : ne.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [P(l(Se), O({ ref: l(r) }, I.$attrs, {
        "as-child": n.asChild,
        as: I.as,
        "data-side": B.value,
        "data-align": A.value,
        style: { animation: l(T) ? void 0 : "none" }
      }), {
        default: y(() => [w(I.$slots, "default")]),
        _: 3
      }, 16, [
        "as-child",
        "as",
        "data-side",
        "data-align",
        "style"
      ])], 4);
    };
  }
}), L1 = N1, V1 = /* @__PURE__ */ _({
  __name: "ComboboxAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const { forwardRef: t } = Be();
    return (n, a) => (g(), k(l(D1), {
      "as-child": "",
      reference: n.reference
    }, {
      default: y(() => [P(l(Se), O({
        ref: l(t),
        "as-child": n.asChild,
        as: n.as
      }, n.$attrs), {
        default: y(() => [w(n.$slots, "default")]),
        _: 3
      }, 16, ["as-child", "as"])]),
      _: 3
    }, 8, ["reference"]));
  }
}), z1 = V1;
function q1(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((a) => lo(a, t, n)) : lo(e, t, n);
}
function lo(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : Hs(e, t);
}
const [Fi, H1] = gt("ListboxRoot");
var W1 = /* @__PURE__ */ _({
  __name: "ListboxRoot",
  props: {
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    orientation: {
      type: String,
      required: !1,
      default: "vertical"
    },
    dir: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    selectionBehavior: {
      type: String,
      required: !1,
      default: "toggle"
    },
    highlightOnHover: {
      type: Boolean,
      required: !1
    },
    by: {
      type: [String, Function],
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "entryFocus",
    "leave"
  ],
  setup(e, { expose: t, emit: n }) {
    const a = e, o = n, { multiple: r, highlightOnHover: i, orientation: s, disabled: u, selectionBehavior: c, dir: d } = ce(a), { getItems: f } = Mn({ isProvider: !0 }), { handleTypeaheadSearch: p } = n1(), { primitiveElement: h, currentElement: v } = $n(), m = Qw(), b = yu(d), x = Kw(v), S = M(), C = M(!1), T = M(!0), $ = Ta(a, "modelValue", o, {
      defaultValue: a.defaultValue ?? (r.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    });
    function B(X) {
      if (C.value = !0, a.multiple) {
        const re = Array.isArray($.value) ? [...$.value] : [], H = re.findIndex((J) => lo(J, X, a.by));
        a.selectionBehavior === "toggle" ? (H === -1 ? re.push(X) : re.splice(H, 1), $.value = re) : ($.value = [X], S.value = X);
      } else a.selectionBehavior === "toggle" && lo($.value, X, a.by) ? $.value = void 0 : $.value = X;
      setTimeout(() => {
        C.value = !1;
      }, 1);
    }
    const A = M(null), R = M(null), L = M(!1), D = M(!1), N = br(), I = br(), G = br();
    function z() {
      return f().map((X) => X.ref).filter((X) => X.dataset.disabled !== "");
    }
    function Y(X, re = !0) {
      if (!X) return;
      A.value = X, T.value && A.value.focus(), re && A.value.scrollIntoView({ block: "nearest" });
      const H = f().find((J) => J.ref === X);
      o("highlight", H);
    }
    function ne(X) {
      if (L.value) G.trigger(X);
      else {
        const re = f().find((H) => lo(H.value, X, a.by));
        re && (A.value = re.ref, Y(re.ref));
      }
    }
    function _e(X) {
      A.value && A.value.isConnected && (X.preventDefault(), X.stopPropagation(), D.value || A.value.click());
    }
    function he(X) {
      if (T.value) {
        if (C.value = !0, L.value) I.trigger(X);
        else {
          const re = X.altKey || X.ctrlKey || X.metaKey;
          if (re && X.key === "a" && r.value) {
            const H = f(), J = H.map((se) => se.value);
            $.value = [...J], X.preventDefault(), Y(H[H.length - 1].ref);
          } else if (!re) {
            const H = p(X.key, f());
            H && Y(H);
          }
        }
        setTimeout(() => {
          C.value = !1;
        }, 1);
      }
    }
    function q() {
      D.value = !0;
    }
    function oe() {
      ae(() => {
        D.value = !1;
      });
    }
    function ie() {
      ae(() => {
        const X = new KeyboardEvent("keydown", { key: "PageUp" });
        nt(X);
      });
    }
    function Ue(X) {
      const re = A.value;
      re != null && re.isConnected && (R.value = re), A.value = null, o("leave", X);
    }
    function Ze(X) {
      var H, J;
      const re = new CustomEvent("listbox.entryFocus", {
        bubbles: !1,
        cancelable: !0
      });
      if ((H = X.currentTarget) == null || H.dispatchEvent(re), o("entryFocus", re), !re.defaultPrevented)
        if (R.value) Y(R.value);
        else {
          const se = (J = z()) == null ? void 0 : J[0];
          Y(se);
        }
    }
    function nt(X) {
      const re = k1(X, s.value, b.value);
      if (!re) return;
      let H = z();
      if (A.value) {
        if (re === "last") H.reverse();
        else if (re === "prev" || re === "next") {
          re === "prev" && H.reverse();
          const J = H.indexOf(A.value);
          H = H.slice(J + 1);
        }
        at(X, H[0]);
      }
      if (H.length) {
        const J = !A.value && re === "prev" ? H.length - 1 : 0;
        Y(H[J]);
      }
      if (L.value) return I.trigger(X);
    }
    function at(X, re) {
      var J;
      if (!(L.value || a.selectionBehavior !== "replace" || !r.value || !Array.isArray($.value) || (X.altKey || X.ctrlKey || X.metaKey) && !X.shiftKey) && X.shiftKey) {
        const se = f().filter((xe) => xe.ref.dataset.disabled !== "");
        let U = (J = se.find((xe) => xe.ref === re)) == null ? void 0 : J.value;
        if (X.key === m.END ? U = se[se.length - 1].value : X.key === m.HOME && (U = se[0].value), !U || !S.value) return;
        const Ie = gw(se.map((xe) => xe.value), S.value, U);
        $.value = Ie;
      }
    }
    async function la(X) {
      if (await ae(), L.value) N.trigger(X);
      else {
        const re = z(), H = re.find((J) => J.dataset.state === "checked");
        H ? Y(H) : re.length && Y(re[0]);
      }
    }
    return ee($, () => {
      C.value || ae(() => {
        la();
      });
    }, {
      immediate: !0,
      deep: !0
    }), t({
      highlightedElement: A,
      highlightItem: ne,
      highlightFirstItem: ie,
      highlightSelected: la,
      getItems: f
    }), H1({
      modelValue: $,
      onValueChange: B,
      multiple: r,
      orientation: s,
      dir: b,
      disabled: u,
      highlightOnHover: i,
      highlightedElement: A,
      isVirtual: L,
      virtualFocusHook: N,
      virtualKeydownHook: I,
      virtualHighlightHook: G,
      by: a.by,
      firstValue: S,
      selectionBehavior: c,
      focusable: T,
      onLeave: Ue,
      onEnter: Ze,
      changeHighlight: Y,
      onKeydownEnter: _e,
      onKeydownNavigation: nt,
      onKeydownTypeAhead: he,
      onCompositionStart: q,
      onCompositionEnd: oe,
      highlightFirstItem: ie
    }), (X, re) => (g(), k(l(Se), {
      ref_key: "primitiveElement",
      ref: h,
      as: X.as,
      "as-child": X.asChild,
      dir: l(b),
      "data-disabled": l(u) ? "" : void 0,
      onPointerleave: Ue,
      onFocusout: re[0] || (re[0] = async (H) => {
        const J = H.relatedTarget || H.target;
        await ae(), A.value && l(v) && !l(v).contains(J) && Ue(H);
      })
    }, {
      default: y(() => [w(X.$slots, "default", { modelValue: l($) }), l(x) && X.name ? (g(), k(l(A1), {
        key: 0,
        name: X.name,
        value: l($),
        disabled: l(u),
        required: X.required
      }, null, 8, [
        "name",
        "value",
        "disabled",
        "required"
      ])) : te("v-if", !0)]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "dir",
      "data-disabled"
    ]));
  }
}), U1 = W1, K1 = /* @__PURE__ */ _({
  __name: "ListboxContent",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const { CollectionSlot: t } = Mn(), n = Fi(), a = Pi(!1, 10);
    return (o, r) => (g(), k(l(t), null, {
      default: y(() => [P(l(Se), {
        role: "listbox",
        as: o.as,
        "as-child": o.asChild,
        tabindex: l(n).focusable.value ? l(n).highlightedElement.value ? "-1" : "0" : "-1",
        "aria-orientation": l(n).orientation.value,
        "aria-multiselectable": !!l(n).multiple.value,
        "data-orientation": l(n).orientation.value,
        onMousedown: r[0] || (r[0] = De((i) => a.value = !0, ["left"])),
        onFocus: r[1] || (r[1] = (i) => {
          l(a) || l(n).onEnter(i);
        }),
        onKeydown: [
          r[2] || (r[2] = Ge((i) => {
            l(n).orientation.value === "vertical" && (i.key === "ArrowLeft" || i.key === "ArrowRight") || l(n).orientation.value === "horizontal" && (i.key === "ArrowUp" || i.key === "ArrowDown") || (i.preventDefault(), l(n).focusable.value && l(n).onKeydownNavigation(i));
          }, [
            "down",
            "up",
            "left",
            "right",
            "home",
            "end"
          ])),
          Ge(l(n).onKeydownEnter, ["enter"]),
          l(n).onKeydownTypeAhead
        ]
      }, {
        default: y(() => [w(o.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "tabindex",
        "aria-orientation",
        "aria-multiselectable",
        "data-orientation",
        "onKeydown"
      ])]),
      _: 3
    }));
  }
}), j1 = K1, G1 = /* @__PURE__ */ _({
  __name: "ListboxFilter",
  props: {
    modelValue: {
      type: String,
      required: !1
    },
    autoFocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Ta(n, "modelValue", t, {
      defaultValue: "",
      passive: n.modelValue === void 0
    }), r = Fi(), { primitiveElement: i, currentElement: s } = $n(), u = E(() => n.disabled || r.disabled.value || !1), c = M();
    return Cf(() => {
      var d;
      return c.value = (d = r.highlightedElement.value) == null ? void 0 : d.id;
    }), le(() => {
      r.focusable.value = !1, setTimeout(() => {
        var d;
        n.autoFocus && ((d = s.value) == null || d.focus());
      }, 1);
    }), ze(() => {
      r.focusable.value = !0;
    }), (d, f) => (g(), k(l(Se), {
      ref_key: "primitiveElement",
      ref: i,
      as: d.as,
      "as-child": d.asChild,
      value: l(o),
      disabled: u.value ? "" : void 0,
      "data-disabled": u.value ? "" : void 0,
      "aria-disabled": u.value ?? void 0,
      "aria-activedescendant": c.value,
      type: "text",
      onKeydown: [Ge(De(l(r).onKeydownNavigation, ["prevent"]), [
        "down",
        "up",
        "home",
        "end"
      ]), Ge(l(r).onKeydownEnter, ["enter"])],
      onInput: f[0] || (f[0] = (p) => {
        o.value = p.target.value, l(r).highlightFirstItem();
      }),
      onCompositionstart: l(r).onCompositionStart,
      onCompositionend: l(r).onCompositionEnd
    }, {
      default: y(() => [w(d.$slots, "default", { modelValue: l(o) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "value",
      "disabled",
      "data-disabled",
      "aria-disabled",
      "aria-activedescendant",
      "onKeydown",
      "onCompositionstart",
      "onCompositionend"
    ]));
  }
}), Y1 = G1;
const [KP, X1] = gt("ListboxGroup");
var Z1 = /* @__PURE__ */ _({
  __name: "ListboxGroup",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = Bn(void 0, "reka-listbox-group");
    return X1({ id: n }), (a, o) => (g(), k(l(Se), O({ role: "group" }, t, { "aria-labelledby": l(n) }), {
      default: y(() => [w(a.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), J1 = Z1;
const Q1 = "listbox.select", [eC, tC] = gt("ListboxItem");
var nC = /* @__PURE__ */ _({
  __name: "ListboxItem",
  props: {
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Bn(void 0, "reka-listbox-item"), { CollectionItem: r } = Mn(), { forwardRef: i, currentElement: s } = Be(), u = Fi(), c = E(() => s.value === u.highlightedElement.value), d = E(() => q1(u.modelValue.value, n.value, u.by)), f = E(() => u.disabled.value || n.disabled);
    async function p(v) {
      a("select", v), !(v != null && v.defaultPrevented) && !f.value && v && (u.onValueChange(n.value), u.changeHighlight(s.value));
    }
    function h(v) {
      const m = {
        originalEvent: v,
        value: n.value
      };
      mu(Q1, p, m);
    }
    return tC({ isSelected: d }), (v, m) => (g(), k(l(r), { value: v.value }, {
      default: y(() => [Hm([c.value, d.value], () => P(l(Se), O({ id: l(o) }, v.$attrs, {
        ref: l(i),
        role: "option",
        tabindex: l(u).focusable.value ? c.value ? "0" : "-1" : -1,
        "aria-selected": d.value,
        as: v.as,
        "as-child": v.asChild,
        disabled: f.value ? "" : void 0,
        "data-disabled": f.value ? "" : void 0,
        "data-highlighted": c.value ? "" : void 0,
        "data-state": d.value ? "checked" : "unchecked",
        onClick: h,
        onKeydown: Ge(De(h, ["prevent"]), ["space"]),
        onPointermove: m[0] || (m[0] = () => {
          l(u).highlightedElement.value !== l(s) && l(u).highlightOnHover.value && !l(u).focusable.value && l(u).changeHighlight(l(s), !1);
        })
      }), {
        default: y(() => [w(v.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "tabindex",
        "aria-selected",
        "as",
        "as-child",
        "disabled",
        "data-disabled",
        "data-highlighted",
        "data-state",
        "onKeydown"
      ]), m, 1)]),
      _: 3
    }, 8, ["value"]));
  }
}), aC = nC, oC = /* @__PURE__ */ _({
  __name: "ListboxItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e;
    Be();
    const n = eC();
    return (a, o) => l(n).isSelected.value ? (g(), k(l(Se), O({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [w(a.$slots, "default")]),
      _: 3
    }, 16)) : te("v-if", !0);
  }
}), rC = oC;
const [dn, iC] = gt("ComboboxRoot");
var sC = /* @__PURE__ */ _({
  __name: "ComboboxRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    resetSearchTermOnBlur: {
      type: Boolean,
      required: !1,
      default: !0
    },
    resetSearchTermOnSelect: {
      type: Boolean,
      required: !1,
      default: !0
    },
    openOnFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    openOnClick: {
      type: Boolean,
      required: !1,
      default: !1
    },
    ignoreFilter: {
      type: Boolean,
      required: !1
    },
    resetModelValueOnClear: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    highlightOnHover: {
      type: Boolean,
      required: !1,
      default: !0
    },
    by: {
      type: [String, Function],
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "update:open"
  ],
  setup(e, { expose: t, emit: n }) {
    var ne, _e, he;
    const a = e, o = n, { primitiveElement: r, currentElement: i } = $n(), { multiple: s, disabled: u, ignoreFilter: c, resetSearchTermOnSelect: d, openOnFocus: f, openOnClick: p, dir: h, resetModelValueOnClear: v, highlightOnHover: m } = ce(a), b = yu(h), x = Ta(a, "modelValue", o, {
      defaultValue: a.defaultValue ?? (s.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    }), S = Ta(a, "open", o, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    async function C(q) {
      var oe, ie;
      S.value = q, G.value = "", q ? (await ae(), (oe = r.value) == null || oe.highlightSelected(), $.value = !0) : $.value = !1, (ie = A.value) == null || ie.focus(), setTimeout(() => {
        !q && a.resetSearchTermOnBlur && T.trigger();
      }, 1);
    }
    const T = br(), $ = M(!1), B = M(!1), A = M(), R = M(), L = E(() => {
      var q;
      return ((q = r.value) == null ? void 0 : q.highlightedElement) ?? void 0;
    }), D = M(/* @__PURE__ */ new Map()), N = M(/* @__PURE__ */ new Map()), { contains: I } = Uw({ sensitivity: "base" }), G = M(""), z = E((q) => {
      if (!G.value || a.ignoreFilter || B.value) return {
        count: D.value.size,
        items: (q == null ? void 0 : q.items) ?? /* @__PURE__ */ new Map(),
        groups: (q == null ? void 0 : q.groups) ?? new Set(N.value.keys())
      };
      let oe = 0;
      const ie = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Set();
      for (const [Ze, nt] of D.value) {
        const at = I(nt, G.value);
        ie.set(Ze, at ? 1 : 0), at && oe++;
      }
      for (const [Ze, nt] of N.value) for (const at of nt) if (ie.get(at) > 0) {
        Ue.add(Ze);
        break;
      }
      return {
        count: oe,
        items: ie,
        groups: Ue
      };
    }), Y = Ne();
    return le(() => {
      var q, oe, ie;
      Y != null && Y.exposed && (Y.exposed.highlightItem = (q = r.value) == null ? void 0 : q.highlightItem, Y.exposed.highlightFirstItem = (oe = r.value) == null ? void 0 : oe.highlightFirstItem, Y.exposed.highlightSelected = (ie = r.value) == null ? void 0 : ie.highlightSelected);
    }), t({
      filtered: z,
      highlightedElement: L,
      highlightItem: (ne = r.value) == null ? void 0 : ne.highlightItem,
      highlightFirstItem: (_e = r.value) == null ? void 0 : _e.highlightFirstItem,
      highlightSelected: (he = r.value) == null ? void 0 : he.highlightSelected
    }), iC({
      modelValue: x,
      multiple: s,
      disabled: u,
      open: S,
      onOpenChange: C,
      contentId: "",
      isUserInputted: $,
      isVirtual: B,
      inputElement: A,
      highlightedElement: L,
      onInputElementChange: (q) => A.value = q,
      triggerElement: R,
      onTriggerElementChange: (q) => R.value = q,
      parentElement: i,
      resetSearchTermOnSelect: d,
      onResetSearchTerm: T.on,
      allItems: D,
      allGroups: N,
      filterSearch: G,
      filterState: z,
      ignoreFilter: c,
      openOnFocus: f,
      openOnClick: p,
      resetModelValueOnClear: v
    }), (q, oe) => (g(), k(l(M1), null, {
      default: y(() => [P(l(U1), O({
        ref_key: "primitiveElement",
        ref: r
      }, q.$attrs, {
        modelValue: l(x),
        "onUpdate:modelValue": oe[0] || (oe[0] = (ie) => lt(x) ? x.value = ie : null),
        style: { pointerEvents: l(S) ? "auto" : void 0 },
        as: q.as,
        "as-child": q.asChild,
        dir: l(b),
        multiple: l(s),
        name: q.name,
        required: q.required,
        disabled: l(u),
        "highlight-on-hover": l(m),
        by: a.by,
        onHighlight: oe[1] || (oe[1] = (ie) => o("highlight", ie))
      }), {
        default: y(() => [w(q.$slots, "default", {
          open: l(S),
          modelValue: l(x)
        })]),
        _: 3
      }, 16, [
        "modelValue",
        "style",
        "as",
        "as-child",
        "dir",
        "multiple",
        "name",
        "required",
        "disabled",
        "highlight-on-hover",
        "by"
      ])]),
      _: 3
    }));
  }
}), lC = sC;
const [jP, uC] = gt("ComboboxContent");
var cC = /* @__PURE__ */ _({
  __name: "ComboboxContentImpl",
  props: {
    position: {
      type: String,
      required: !1,
      default: "inline"
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, { position: o } = ce(n), r = dn(), { forwardRef: i, currentElement: s } = Be();
    qw(n.bodyLock), Zw(r.parentElement);
    const u = E(() => n.position === "popper" ? n : {}), c = aa(u.value), d = {
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    uC({ position: o });
    const f = M(!1);
    return le(() => {
      r.inputElement.value && (f.value = s.value.contains(r.inputElement.value), f.value && r.inputElement.value.focus());
    }), ze(() => {
      var p;
      f.value && ((p = r.triggerElement.value) == null || p.focus());
    }), (p, h) => (g(), k(l(j1), { "as-child": "" }, {
      default: y(() => [P(l(uh), {
        "as-child": "",
        "disable-outside-pointer-events": p.disableOutsidePointerEvents,
        onDismiss: h[0] || (h[0] = (v) => l(r).onOpenChange(!1)),
        onFocusOutside: h[1] || (h[1] = (v) => {
          var m;
          (m = l(r).parentElement.value) != null && m.contains(v.target) && v.preventDefault(), a("focusOutside", v);
        }),
        onInteractOutside: h[2] || (h[2] = (v) => a("interactOutside", v)),
        onEscapeKeyDown: h[3] || (h[3] = (v) => a("escapeKeyDown", v)),
        onPointerDownOutside: h[4] || (h[4] = (v) => {
          var m;
          (m = l(r).parentElement.value) != null && m.contains(v.target) && v.preventDefault(), a("pointerDownOutside", v);
        })
      }, {
        default: y(() => [(g(), k(et(l(o) === "popper" ? l(L1) : l(Se)), O({
          ...p.$attrs,
          ...l(c)
        }, {
          id: l(r).contentId,
          ref: l(i),
          "data-state": l(r).open.value ? "open" : "closed",
          style: {
            display: "flex",
            flexDirection: "column",
            outline: "none",
            ...l(o) === "popper" ? d : {}
          }
        }), {
          default: y(() => [w(p.$slots, "default")]),
          _: 3
        }, 16, [
          "id",
          "data-state",
          "style"
        ]))]),
        _: 3
      }, 8, ["disable-outside-pointer-events"])]),
      _: 3
    }));
  }
}), dC = cC, fC = /* @__PURE__ */ _({
  __name: "ComboboxCancel",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    Be();
    const n = dn();
    function a() {
      var o;
      n.filterSearch.value = "", n.inputElement.value && (n.inputElement.value.value = "", n.inputElement.value.focus(), (o = n.resetModelValueOnClear) != null && o.value && (n.modelValue.value = n.multiple.value ? [] : null));
    }
    return (o, r) => (g(), k(l(Se), O({ type: o.as === "button" ? "button" : void 0 }, t, {
      tabindex: "-1",
      onClick: a
    }), {
      default: y(() => [w(o.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), GP = fC, pC = /* @__PURE__ */ _({
  __name: "ComboboxContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    position: {
      type: String,
      required: !1
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const o = cn(e, t), { forwardRef: r } = Be(), i = dn();
    return i.contentId || (i.contentId = Bn(void 0, "reka-combobox-content")), (s, u) => (g(), k(l(Ri), { present: s.forceMount || l(i).open.value }, {
      default: y(() => [P(dC, O({
        ...l(o),
        ...s.$attrs
      }, { ref: l(r) }), {
        default: y(() => [w(s.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"]));
  }
}), hC = pC, vC = /* @__PURE__ */ _({
  __name: "ComboboxEmpty",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = dn(), a = E(() => n.ignoreFilter.value ? n.allItems.value.size === 0 : n.filterState.value.count === 0);
    return (o, r) => a.value ? (g(), k(l(Se), Z(O({ key: 0 }, t)), {
      default: y(() => [w(o.$slots, "default", {}, () => [r[0] || (r[0] = fe("No options"))])]),
      _: 3
    }, 16)) : te("v-if", !0);
  }
}), mC = vC;
const [ph, gC] = gt("ComboboxGroup");
var yC = /* @__PURE__ */ _({
  __name: "ComboboxGroup",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = Bn(void 0, "reka-combobox-group"), a = dn(), o = E(() => a.ignoreFilter.value ? !0 : a.filterSearch.value ? a.filterState.value.groups.has(n) : !0), r = gC({
      id: n,
      labelId: ""
    });
    return le(() => {
      a.allGroups.value.has(n) || a.allGroups.value.set(n, /* @__PURE__ */ new Set());
    }), ze(() => {
      a.allGroups.value.delete(n);
    }), (i, s) => (g(), k(l(J1), O({
      id: l(n),
      "aria-labelledby": l(r).labelId
    }, t, { hidden: o.value ? void 0 : !0 }), {
      default: y(() => [w(i.$slots, "default")]),
      _: 3
    }, 16, [
      "id",
      "aria-labelledby",
      "hidden"
    ]));
  }
}), bC = yC, _C = /* @__PURE__ */ _({
  __name: "ComboboxInput",
  props: {
    displayValue: {
      type: Function,
      required: !1
    },
    modelValue: {
      type: String,
      required: !1
    },
    autoFocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = dn(), r = Fi(), { primitiveElement: i, currentElement: s } = $n(), u = Ta(n, "modelValue", a, { passive: n.modelValue === void 0 });
    le(() => {
      s.value && o.onInputElementChange(s.value);
    });
    function c(v) {
      o.open.value || o.onOpenChange(!0);
    }
    function d(v) {
      const m = v.target;
      o.open.value ? o.filterSearch.value = m.value : (o.onOpenChange(!0), ae(() => {
        m.value && (o.filterSearch.value = m.value, r.highlightFirstItem());
      }));
    }
    function f() {
      o.openOnFocus.value && !o.open.value && o.onOpenChange(!0);
    }
    function p() {
      o.openOnClick.value && !o.open.value && o.onOpenChange(!0);
    }
    function h() {
      const v = o.modelValue.value;
      n.displayValue ? u.value = n.displayValue(v) : !o.multiple.value && v && !Array.isArray(v) && typeof v != "object" ? u.value = v.toString() : u.value = "", ae(() => {
        u.value = u.value;
      });
    }
    return o.onResetSearchTerm(() => {
      h();
    }), ee(o.modelValue, async () => {
      !o.isUserInputted.value && o.resetSearchTermOnSelect.value && h();
    }, {
      immediate: !0,
      deep: !0
    }), ee(o.filterState, () => {
      !o.isVirtual.value && !o.highlightedElement.value && r.highlightFirstItem();
    }), (v, m) => (g(), k(l(Y1), {
      ref_key: "primitiveElement",
      ref: i,
      modelValue: l(u),
      "onUpdate:modelValue": m[0] || (m[0] = (b) => lt(u) ? u.value = b : null),
      as: v.as,
      "as-child": v.asChild,
      "auto-focus": v.autoFocus,
      disabled: v.disabled,
      "aria-expanded": l(o).open.value,
      "aria-controls": l(o).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "off",
      onClick: p,
      onInput: d,
      onKeydown: Ge(De(c, ["prevent"]), ["down", "up"]),
      onFocus: f
    }, {
      default: y(() => [w(v.$slots, "default")]),
      _: 3
    }, 8, [
      "modelValue",
      "as",
      "as-child",
      "auto-focus",
      "disabled",
      "aria-expanded",
      "aria-controls",
      "onKeydown"
    ]));
  }
}), xC = _C, wC = /* @__PURE__ */ _({
  __name: "ComboboxItem",
  props: {
    textValue: {
      type: String,
      required: !1
    },
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Bn(void 0, "reka-combobox-item"), r = dn(), i = ph(null), { primitiveElement: s, currentElement: u } = $n();
    if (n.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
    const c = E(() => {
      if (r.isVirtual.value || r.ignoreFilter.value || !r.filterSearch.value) return !0;
      {
        const d = r.filterState.value.items.get(o);
        return d === void 0 ? !0 : d > 0;
      }
    });
    return le(() => {
      var f;
      r.allItems.value.set(o, n.textValue || u.value.textContent || u.value.innerText);
      const d = i == null ? void 0 : i.id;
      d && (r.allGroups.value.has(d) ? (f = r.allGroups.value.get(d)) == null || f.add(o) : r.allGroups.value.set(d, /* @__PURE__ */ new Set([o])));
    }), ze(() => {
      r.allItems.value.delete(o);
    }), (d, f) => c.value ? (g(), k(l(aC), O({ key: 0 }, n, {
      id: l(o),
      ref_key: "primitiveElement",
      ref: s,
      disabled: l(r).disabled.value || d.disabled,
      onSelect: f[0] || (f[0] = (p) => {
        a("select", p), !p.defaultPrevented && !l(r).multiple.value && !d.disabled && !l(r).disabled.value && (p.preventDefault(), l(r).onOpenChange(!1), l(r).modelValue.value = n.value);
      })
    }), {
      default: y(() => [w(d.$slots, "default", {}, () => [fe(be(d.value), 1)])]),
      _: 3
    }, 16, ["id", "disabled"])) : te("v-if", !0);
  }
}), CC = wC, kC = /* @__PURE__ */ _({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(rC), Z(Q(t)), {
      default: y(() => [w(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), YP = kC, SC = /* @__PURE__ */ _({
  __name: "ComboboxLabel",
  props: {
    for: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  setup(e) {
    const t = e;
    Be();
    const n = ph({
      id: "",
      labelId: ""
    });
    return n.labelId || (n.labelId = Bn(void 0, "reka-combobox-group-label")), (a, o) => (g(), k(l(Se), O(t, { id: l(n).labelId }), {
      default: y(() => [w(a.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), $C = SC, TC = /* @__PURE__ */ _({
  __name: "ComboboxPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(p1), Z(Q(t)), {
      default: y(() => [w(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), AC = TC, EC = /* @__PURE__ */ _({
  __name: "ComboboxSeparator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return Be(), (n, a) => (g(), k(l(Se), O(t, { "aria-hidden": "true" }), {
      default: y(() => [w(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), BC = EC, MC = /* @__PURE__ */ _({
  __name: "ComboboxTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = Be(), o = dn(), r = E(() => t.disabled || o.disabled.value || !1);
    return le(() => {
      a.value && o.onTriggerElementChange(a.value);
    }), (i, s) => (g(), k(l(Se), O(t, {
      ref: l(n),
      type: i.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": l(o).open.value,
      "aria-controls": l(o).contentId,
      "data-state": l(o).open.value ? "open" : "closed",
      disabled: r.value,
      "data-disabled": r.value ? "" : void 0,
      "aria-disabled": r.value ?? void 0,
      onClick: s[0] || (s[0] = (u) => l(o).onOpenChange(!l(o).open.value))
    }), {
      default: y(() => [w(i.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "disabled",
      "data-disabled",
      "aria-disabled"
    ]));
  }
}), XP = MC;
function OC(e) {
  const t = Di({ nonce: M() });
  return E(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
var DC = /* @__PURE__ */ _({
  __name: "ComboboxViewport",
  props: {
    nonce: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: n } = Be(), { nonce: a } = ce(t), o = OC(a), r = dn();
    return (i, s) => (g(), V(ve, null, [P(l(Se), O({
      ...i.$attrs,
      ...t
    }, {
      ref: l(n),
      "data-reka-combobox-viewport": "",
      role: "presentation",
      style: {
        position: "relative",
        flex: l(r).isVirtual.value ? void 0 : 1,
        overflow: "auto"
      }
    }), {
      default: y(() => [w(i.$slots, "default")]),
      _: 3
    }, 16, ["style"]), P(l(Se), {
      as: "style",
      nonce: l(o)
    }, {
      default: y(() => s[0] || (s[0] = [fe(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")])),
      _: 1,
      __: [0]
    }, 8, ["nonce"])], 64));
  }
}), PC = DC;
const [oa, IC] = gt(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext");
var RC = /* @__PURE__ */ _({
  __name: "NavigationMenuRoot",
  props: {
    modelValue: {
      type: String,
      required: !1,
      default: void 0
    },
    defaultValue: {
      type: String,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    orientation: {
      type: String,
      required: !1,
      default: "horizontal"
    },
    delayDuration: {
      type: Number,
      required: !1,
      default: 200
    },
    skipDelayDuration: {
      type: Number,
      required: !1,
      default: 300
    },
    disableClickTrigger: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disableHoverTrigger: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disablePointerLeaveClose: {
      type: Boolean,
      required: !1
    },
    unmountOnHide: {
      type: Boolean,
      required: !1,
      default: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "nav"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Ta(n, "modelValue", t, {
      defaultValue: n.defaultValue ?? "",
      passive: n.modelValue === void 0
    }), r = M(""), { forwardRef: i, currentElement: s } = Be(), u = M(), c = M(), d = M(), { getItems: f, CollectionSlot: p } = Mn({
      key: "NavigationMenu",
      isProvider: !0
    }), { delayDuration: h, skipDelayDuration: v, dir: m, disableClickTrigger: b, disableHoverTrigger: x, unmountOnHide: S } = ce(n), C = yu(m), T = Pi(!1, v), $ = E(() => o.value !== "" || T.value ? 150 : h.value), B = Mw((A) => {
      typeof A == "string" && (r.value = o.value, o.value = A);
    }, $);
    return ge(() => {
      if (!o.value) return;
      const A = f().map((R) => R.ref);
      d.value = A.find((R) => R.id.includes(o.value));
    }), IC({
      isRootMenu: !0,
      modelValue: o,
      previousValue: r,
      baseId: Bn(void 0, "reka-navigation-menu"),
      disableClickTrigger: b,
      disableHoverTrigger: x,
      dir: C,
      unmountOnHide: S,
      orientation: n.orientation,
      rootNavigationMenu: s,
      indicatorTrack: u,
      activeTrigger: d,
      onIndicatorTrackChange: (A) => {
        u.value = A;
      },
      viewport: c,
      onViewportChange: (A) => {
        c.value = A;
      },
      onTriggerEnter: (A) => {
        B(A);
      },
      onTriggerLeave: () => {
        T.value = !0, B("");
      },
      onContentEnter: () => {
        B();
      },
      onContentLeave: () => {
        n.disablePointerLeaveClose || B("");
      },
      onItemSelect: (A) => {
        r.value = o.value, o.value = A;
      },
      onItemDismiss: () => {
        r.value = o.value, o.value = "";
      }
    }), (A, R) => (g(), k(l(p), null, {
      default: y(() => [P(l(Se), {
        ref: l(i),
        "aria-label": "Main",
        as: A.as,
        "as-child": A.asChild,
        "data-orientation": A.orientation,
        dir: l(C),
        "data-reka-navigation-menu": ""
      }, {
        default: y(() => [w(A.$slots, "default", { modelValue: l(o) })]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "data-orientation",
        "dir"
      ])]),
      _: 3
    }));
  }
}), FC = RC;
function Ni(e) {
  return e ? "open" : "closed";
}
function hh(e, t) {
  return `${e}-trigger-${t}`;
}
function bu(e, t) {
  return `${e}-content-${t}`;
}
const NC = "navigationMenu.linkSelect", _r = "navigationMenu.rootContentDismiss";
function js(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (a) => {
    const o = a.tagName === "INPUT" && a.type === "hidden";
    return a.disabled || a.hidden || o ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function vh(e) {
  const t = Ln();
  return e.some((n) => n === t ? !0 : (n.focus(), Ln() !== t));
}
function LC(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function mh(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const [_u, VC] = gt("NavigationMenuItem");
var zC = /* @__PURE__ */ _({
  __name: "NavigationMenuItem",
  props: {
    value: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "li"
    }
  },
  setup(e) {
    const t = e;
    Be();
    const { getItems: n } = Mn({ key: "NavigationMenu" }), a = oa(), o = Bn(t.value), r = M(), i = M(), s = bu(a.baseId, o);
    let u = () => ({});
    const c = M(!1);
    async function d(v = "start") {
      const m = document.getElementById(s);
      if (m) {
        u();
        const b = js(m);
        b.length && vh(v === "start" ? b : b.reverse());
      }
    }
    function f() {
      const v = document.getElementById(s);
      if (v) {
        const m = js(v);
        m.length && (u = LC(m));
      }
    }
    VC({
      value: o,
      contentId: s,
      triggerRef: r,
      focusProxyRef: i,
      wasEscapeCloseRef: c,
      onEntryKeyDown: d,
      onFocusProxyEnter: d,
      onContentFocusOutside: f,
      onRootContentClose: f
    });
    function p() {
      var v;
      a.onItemDismiss(), (v = r.value) == null || v.focus();
    }
    function h(v) {
      const m = Ln();
      if (v.keyCode === 32 || v.key === "Enter") if (a.modelValue.value === o) {
        p(), v.preventDefault();
        return;
      } else {
        v.target.click(), v.preventDefault();
        return;
      }
      const b = n().filter((S) => {
        var C;
        return (C = S.ref.parentElement) == null ? void 0 : C.hasAttribute("data-menu-item");
      }).map((S) => S.ref);
      if (!b.includes(m)) return;
      const x = nh(v, m, void 0, {
        itemsArray: b,
        loop: !1
      });
      x && (x == null || x.focus()), v.preventDefault(), v.stopPropagation();
    }
    return (v, m) => (g(), k(l(Se), {
      "as-child": v.asChild,
      as: v.as,
      "data-menu-item": "",
      onKeydown: Ge(h, [
        "up",
        "down",
        "left",
        "right",
        "home",
        "end",
        "space"
      ])
    }, {
      default: y(() => [w(v.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), qC = zC, HC = /* @__PURE__ */ _({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, { getItems: o } = Mn({ key: "NavigationMenu" }), { forwardRef: r, currentElement: i } = Be(), s = oa(), u = _u(), c = hh(s.baseId, u.value), d = bu(s.baseId, u.value), f = M(null), p = E(() => {
      const S = o().map((R) => R.ref.id.split("trigger-")[1]);
      s.dir.value === "rtl" && S.reverse();
      const C = S.indexOf(s.modelValue.value), T = S.indexOf(s.previousValue.value), $ = u.value === s.modelValue.value, B = T === S.indexOf(u.value);
      if (!$ && !B) return f.value;
      const A = (() => {
        if (C !== T) {
          if ($ && T !== -1) return C > T ? "from-end" : "from-start";
          if (B && C !== -1) return C > T ? "to-start" : "to-end";
        }
        return null;
      })();
      return f.value = A, A;
    });
    function h(S) {
      var T, $;
      if (a("focusOutside", S), a("interactOutside", S), S.detail.originalEvent.target.hasAttribute("data-navigation-menu-trigger") && S.preventDefault(), !S.defaultPrevented) {
        u.onContentFocusOutside();
        const B = S.target;
        ($ = (T = s.rootNavigationMenu) == null ? void 0 : T.value) != null && $.contains(B) && S.preventDefault();
      }
    }
    function v(S) {
      var C;
      if (a("pointerDownOutside", S), !S.defaultPrevented) {
        const T = S.target, $ = o().some((A) => A.ref.contains(T)), B = s.isRootMenu && ((C = s.viewport.value) == null ? void 0 : C.contains(T));
        ($ || B || !s.isRootMenu) && S.preventDefault();
      }
    }
    ge((S) => {
      const C = i.value;
      if (s.isRootMenu && C) {
        const T = () => {
          var $;
          s.onItemDismiss(), u.onRootContentClose(), C.contains(Ln()) && (($ = u.triggerRef.value) == null || $.focus());
        };
        C.addEventListener(_r, T), S(() => C.removeEventListener(_r, T));
      }
    });
    function m(S) {
      var C, T;
      a("escapeKeyDown", S), S.defaultPrevented || (s.onItemDismiss(), (T = (C = u.triggerRef) == null ? void 0 : C.value) == null || T.focus(), u.wasEscapeCloseRef.value = !0);
    }
    function b(S) {
      var A;
      if (S.target.closest("[data-reka-navigation-menu]") !== s.rootNavigationMenu.value) return;
      const C = S.altKey || S.ctrlKey || S.metaKey, T = S.key === "Tab" && !C, $ = js(S.currentTarget);
      if (T) {
        const R = Ln(), L = $.findIndex((I) => I === R), N = S.shiftKey ? $.slice(0, L).reverse() : $.slice(L + 1, $.length);
        if (vh(N)) S.preventDefault();
        else {
          (A = u.focusProxyRef.value) == null || A.focus();
          return;
        }
      }
      const B = nh(S, Ln(), void 0, {
        itemsArray: $,
        loop: !1,
        enableIgnoredElement: !0
      });
      B == null || B.focus();
    }
    function x() {
      var C;
      const S = new Event(_r, {
        bubbles: !0,
        cancelable: !0
      });
      (C = i.value) == null || C.dispatchEvent(S);
    }
    return (S, C) => (g(), k(l(uh), O({
      id: l(d),
      ref: l(r),
      "aria-labelledby": l(c),
      "data-motion": p.value,
      "data-state": l(Ni)(l(s).modelValue.value === l(u).value),
      "data-orientation": l(s).orientation
    }, n, {
      onKeydown: b,
      onEscapeKeyDown: m,
      onPointerDownOutside: v,
      onFocusOutside: h,
      onDismiss: x
    }), {
      default: y(() => [w(S.$slots, "default")]),
      _: 3
    }, 16, [
      "id",
      "aria-labelledby",
      "data-motion",
      "data-state",
      "data-orientation"
    ]));
  }
}), WC = HC, UC = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, o = cn(Cw(n, "forceMount"), a), { forwardRef: r } = Be(), i = oa(), s = _u(), u = E(() => s.value === i.modelValue.value), c = E(() => i.viewport.value && !i.modelValue.value && i.previousValue.value ? i.previousValue.value === s.value : !1);
    return (d, f) => (g(), k(Xn, {
      to: l(Vt) && l(i).viewport.value ? l(i).viewport.value : "body",
      disabled: l(Vt) && l(i).viewport.value ? !l(i).viewport.value : !0
    }, [P(l(Ri), {
      present: d.forceMount || u.value || c.value,
      "force-mount": !l(i).unmountOnHide.value
    }, {
      default: y(({ present: p }) => [P(WC, O({
        ref: l(r),
        "data-state": l(Ni)(u.value),
        style: { pointerEvents: !u.value && l(i).isRootMenu ? "none" : void 0 }
      }, {
        ...d.$attrs,
        ...l(o)
      }, {
        hidden: !p,
        onPointerenter: f[0] || (f[0] = (h) => l(i).onContentEnter(l(s).value)),
        onPointerleave: f[1] || (f[1] = (h) => l(mh)(() => l(i).onContentLeave())(h)),
        onPointerDownOutside: f[2] || (f[2] = (h) => a("pointerDownOutside", h)),
        onFocusOutside: f[3] || (f[3] = (h) => a("focusOutside", h)),
        onInteractOutside: f[4] || (f[4] = (h) => a("interactOutside", h))
      }), {
        default: y(() => [w(d.$slots, "default")]),
        _: 2
      }, 1040, [
        "data-state",
        "style",
        "hidden"
      ])]),
      _: 3
    }, 8, ["present", "force-mount"])], 8, ["to", "disabled"]));
  }
}), KC = UC, jC = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: n } = Be(), a = oa(), o = M(), r = E(() => a.orientation === "horizontal"), i = E(() => !!a.modelValue.value), { activeTrigger: s } = a;
    function u() {
      s.value && (o.value = {
        size: r.value ? s.value.offsetWidth : s.value.offsetHeight,
        position: r.value ? s.value.offsetLeft : s.value.offsetTop
      });
    }
    return ge(() => {
      a.modelValue.value && u();
    }), qr(s, u), qr(a.indicatorTrack, u), (c, d) => l(a).indicatorTrack.value ? (g(), k(Xn, {
      key: 0,
      to: l(a).indicatorTrack.value
    }, [P(l(Ri), { present: c.forceMount || i.value }, {
      default: y(() => [P(l(Se), O({
        ref: l(n),
        "aria-hidden": "true",
        "data-state": i.value ? "visible" : "hidden",
        "data-orientation": l(a).orientation,
        "as-child": t.asChild,
        as: c.as,
        style: { ...o.value ? {
          "--reka-navigation-menu-indicator-size": `${o.value.size}px`,
          "--reka-navigation-menu-indicator-position": `${o.value.position}px`
        } : {} }
      }, c.$attrs), {
        default: y(() => [w(c.$slots, "default")]),
        _: 3
      }, 16, [
        "data-state",
        "data-orientation",
        "as-child",
        "as",
        "style"
      ])]),
      _: 3
    }, 8, ["present"])], 8, ["to"])) : te("v-if", !0);
  }
}), GC = jC, YC = /* @__PURE__ */ _({
  __name: "NavigationMenuLink",
  props: {
    active: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "a"
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { CollectionItem: o } = Mn({ key: "NavigationMenu" });
    Be();
    async function r(i) {
      var u;
      const s = new CustomEvent(NC, {
        bubbles: !0,
        cancelable: !0,
        detail: { originalEvent: i }
      });
      if (a("select", s), !s.defaultPrevented && !i.metaKey) {
        const c = new CustomEvent(_r, {
          bubbles: !0,
          cancelable: !0
        });
        (u = i.target) == null || u.dispatchEvent(c);
      }
    }
    return (i, s) => (g(), k(l(o), null, {
      default: y(() => [P(l(Se), {
        as: i.as,
        "data-active": i.active ? "" : void 0,
        "aria-current": i.active ? "page" : void 0,
        "as-child": n.asChild,
        onClick: r
      }, {
        default: y(() => [w(i.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "data-active",
        "aria-current",
        "as-child"
      ])]),
      _: 3
    }));
  }
}), XC = YC, ZC = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuList",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "ul"
    }
  },
  setup(e) {
    const t = e, n = oa(), { forwardRef: a, currentElement: o } = Be();
    return le(() => {
      n.onIndicatorTrackChange(o.value);
    }), (r, i) => (g(), k(l(Se), {
      ref: l(a),
      style: { position: "relative" }
    }, {
      default: y(() => [P(l(Se), O(r.$attrs, {
        "as-child": t.asChild,
        as: r.as,
        "data-orientation": l(n).orientation
      }), {
        default: y(() => [w(r.$slots, "default")]),
        _: 3
      }, 16, [
        "as-child",
        "as",
        "data-orientation"
      ])]),
      _: 3
    }, 512));
  }
}), JC = ZC;
const QC = ["aria-owns"];
var ek = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, n = oa(), a = _u(), { CollectionItem: o } = Mn({ key: "NavigationMenu" }), { forwardRef: r, currentElement: i } = Be(), s = M(""), u = M(""), c = Pi(!1, 300), d = M(!1), f = E(() => a.value === n.modelValue.value);
    le(() => {
      a.triggerRef = i, s.value = hh(n.baseId, a.value), u.value = bu(n.baseId, a.value);
    });
    function p() {
      n.disableHoverTrigger.value || (d.value = !1, a.wasEscapeCloseRef.value = !1);
    }
    function h(C) {
      if (!n.disableHoverTrigger.value && C.pointerType === "mouse") {
        if (t.disabled || d.value || a.wasEscapeCloseRef.value || c.value) return;
        n.onTriggerEnter(a.value), c.value = !0;
      }
    }
    function v(C) {
      if (!n.disableHoverTrigger.value && C.pointerType === "mouse") {
        if (t.disabled) return;
        n.onTriggerLeave(), c.value = !1;
      }
    }
    function m(C) {
      (!("pointerType" in C) || C.pointerType === "mouse") && n.disableClickTrigger.value || c.value || (f.value ? n.onItemSelect("") : n.onItemSelect(a.value), d.value = f.value);
    }
    function b(C) {
      const $ = {
        horizontal: "ArrowDown",
        vertical: n.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[n.orientation];
      f.value && C.key === $ && (a.onEntryKeyDown(), C.preventDefault(), C.stopPropagation());
    }
    function x(C) {
      a.focusProxyRef.value = zt(C);
    }
    function S(C) {
      const T = document.getElementById(a.contentId), $ = C.relatedTarget, B = $ === i.value, A = T == null ? void 0 : T.contains($);
      (B || !A) && a.onFocusProxyEnter(B ? "start" : "end");
    }
    return (C, T) => (g(), V(ve, null, [P(l(o), null, {
      default: y(() => [P(l(Se), O({
        id: s.value,
        ref: l(r),
        disabled: C.disabled,
        "data-disabled": C.disabled ? "" : void 0,
        "data-state": l(Ni)(f.value),
        "data-navigation-menu-trigger": "",
        "aria-expanded": f.value,
        "aria-controls": u.value,
        "as-child": t.asChild,
        as: C.as
      }, C.$attrs, {
        onPointerenter: p,
        onPointermove: h,
        onPointerleave: v,
        onClick: m,
        onKeydown: b
      }), {
        default: y(() => [w(C.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "disabled",
        "data-disabled",
        "data-state",
        "aria-expanded",
        "aria-controls",
        "as-child",
        "as"
      ])]),
      _: 3
    }), f.value ? (g(), V(ve, { key: 0 }, [P(l(dh), {
      ref: x,
      "aria-hidden": "true",
      tabindex: 0,
      onFocus: S
    }), l(n).viewport ? (g(), V("span", {
      key: 0,
      "aria-owns": u.value
    }, null, 8, QC)) : te("v-if", !0)], 64)) : te("v-if", !0)], 64));
  }
}), tk = ek, nk = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuViewport",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    align: {
      type: String,
      required: !1,
      default: "center"
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    var h;
    const t = e, { forwardRef: n, currentElement: a } = Be(), o = oa(), { activeTrigger: r, rootNavigationMenu: i, modelValue: s } = o, u = M(), c = M(), d = E(() => !!o.modelValue.value);
    ee(a, () => {
      o.onViewportChange(a.value);
    });
    const f = M();
    ee([s, d], () => {
      ae(() => {
        a.value && requestAnimationFrame(() => {
          var m;
          const v = (m = a.value) == null ? void 0 : m.querySelector("[data-state=open]");
          f.value = v;
        });
      });
    }, { immediate: !0 });
    function p() {
      if (f.value && r.value && i.value) {
        const v = document.documentElement.offsetWidth, m = document.documentElement.offsetHeight, b = i.value.getBoundingClientRect(), x = r.value.getBoundingClientRect(), { offsetWidth: S, offsetHeight: C } = f.value, T = x.left - b.left, $ = x.top - b.top;
        let B = null, A = null;
        switch (t.align) {
          case "start":
            B = T, A = $;
            break;
          case "end":
            B = T - S + x.width, A = $ - C + x.height;
            break;
          default:
            B = T - S / 2 + x.width / 2, A = $ - C / 2 + x.height / 2;
        }
        const R = 10;
        B + b.left < R && (B = R - b.left);
        const L = B + b.left + S;
        L > v - R && (B -= L - v + R, B < R - b.left && (B = R - b.left)), A + b.top < R && (A = R - b.top);
        const D = A + b.top + C;
        D > m - R && (A -= D - m + R, A < R - b.top && (A = R - b.top)), B = Math.round(B), A = Math.round(A), c.value = {
          left: B,
          top: A
        };
      }
    }
    return qr(f, () => {
      f.value && (u.value = {
        width: f.value.offsetWidth,
        height: f.value.offsetHeight
      }, p());
    }), qr([(h = globalThis.document) == null ? void 0 : h.body, i], () => {
      p();
    }), (v, m) => (g(), k(l(Ri), {
      present: v.forceMount || d.value,
      "force-mount": !l(o).unmountOnHide.value,
      onAfterLeave: m[2] || (m[2] = () => {
        u.value = void 0, c.value = void 0;
      })
    }, {
      default: y(({ present: b }) => {
        var x, S, C, T;
        return [P(l(Se), O(v.$attrs, {
          ref: l(n),
          as: v.as,
          "as-child": v.asChild,
          "data-state": l(Ni)(d.value),
          "data-orientation": l(o).orientation,
          style: {
            pointerEvents: !d.value && l(o).isRootMenu ? "none" : void 0,
            "--reka-navigation-menu-viewport-width": u.value ? `${(x = u.value) == null ? void 0 : x.width}px` : void 0,
            "--reka-navigation-menu-viewport-height": u.value ? `${(S = u.value) == null ? void 0 : S.height}px` : void 0,
            "--reka-navigation-menu-viewport-left": c.value ? `${(C = c.value) == null ? void 0 : C.left}px` : void 0,
            "--reka-navigation-menu-viewport-top": c.value ? `${(T = c.value) == null ? void 0 : T.top}px` : void 0
          },
          hidden: !b,
          onPointerenter: m[0] || (m[0] = ($) => l(o).onContentEnter(l(o).modelValue.value)),
          onPointerleave: m[1] || (m[1] = ($) => l(mh)(() => l(o).onContentLeave())($))
        }), {
          default: y(() => [w(v.$slots, "default")]),
          _: 2
        }, 1040, [
          "as",
          "as-child",
          "data-state",
          "data-orientation",
          "style",
          "hidden"
        ])];
      }),
      _: 3
    }, 8, ["present", "force-mount"]));
  }
}), ak = nk;
const ZP = /* @__PURE__ */ _({
  __name: "Avatar",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(m1), {
      "data-slot": "avatar",
      class: j(l(F)("relative flex size-8 shrink-0 overflow-hidden rounded-full", t.class))
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function ok(e) {
  return hi() ? (vi(e), !0) : !1;
}
const hs = /* @__PURE__ */ new WeakMap(), rk = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const n = e[0], a = (t = Ne()) == null ? void 0 : t.proxy;
  if (a == null && !Af())
    throw new Error("injectLocal must be called in setup");
  return a && hs.has(a) && n in hs.get(a) ? hs.get(a)[n] : An(...e);
};
function ik(e) {
  if (!lt(e))
    return Cn(e);
  const t = new Proxy({}, {
    get(n, a, o) {
      return l(Reflect.get(e.value, a, o));
    },
    set(n, a, o) {
      return lt(e.value[a]) && !lt(o) ? e.value[a].value = o : e.value[a] = o, !0;
    },
    deleteProperty(n, a) {
      return Reflect.deleteProperty(e.value, a);
    },
    has(n, a) {
      return Reflect.has(e.value, a);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return Cn(t);
}
function sk(e) {
  return ik(E(e));
}
function fn(e, ...t) {
  const n = t.flat(), a = n[0];
  return sk(() => Object.fromEntries(typeof a == "function" ? Object.entries(ce(e)).filter(([o, r]) => !a(Te(r), o)) : Object.entries(ce(e)).filter((o) => !n.includes(o[0]))));
}
const lk = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const uk = (e) => typeof e < "u", ck = Object.prototype.toString, dk = (e) => ck.call(e) === "[object Object]", fk = () => {
};
function gh(...e) {
  if (e.length !== 1)
    return Al(...e);
  const t = e[0];
  return typeof t == "function" ? Ra(Dl(() => ({ get: t, set: fk }))) : M(t);
}
function pk(e, t) {
  function n(...a) {
    return new Promise((o, r) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(o).catch(r);
    });
  }
  return n;
}
const yh = (e) => e();
function hk(e = yh, t = {}) {
  const {
    initialState: n = "active"
  } = t, a = gh(n === "active");
  function o() {
    a.value = !1;
  }
  function r() {
    a.value = !0;
  }
  const i = (...s) => {
    a.value && e(...s);
  };
  return { isActive: Ra(a), pause: o, resume: r, eventFilter: i };
}
function Vc(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function vs(e) {
  return Array.isArray(e) ? e : [e];
}
function vk(e) {
  return Ne();
}
function mk(e, t, n = {}) {
  const {
    eventFilter: a = yh,
    ...o
  } = n;
  return ee(
    e,
    pk(
      a,
      t
    ),
    o
  );
}
function gk(e, t, n = {}) {
  const {
    eventFilter: a,
    initialState: o = "active",
    ...r
  } = n, { eventFilter: i, pause: s, resume: u, isActive: c } = hk(a, { initialState: o });
  return { stop: mk(
    e,
    t,
    {
      ...r,
      eventFilter: i
    }
  ), pause: s, resume: u, isActive: c };
}
function bh(e, t = !0, n) {
  vk() ? le(e, n) : t ? e() : ae(e);
}
function yk(e, t, n) {
  return ee(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const bo = lk ? window : void 0;
function _h(e) {
  var t;
  const n = Te(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Hr(...e) {
  const t = [], n = () => {
    t.forEach((s) => s()), t.length = 0;
  }, a = (s, u, c, d) => (s.addEventListener(u, c, d), () => s.removeEventListener(u, c, d)), o = E(() => {
    const s = vs(Te(e[0])).filter((u) => u != null);
    return s.every((u) => typeof u != "string") ? s : void 0;
  }), r = yk(
    () => {
      var s, u;
      return [
        (u = (s = o.value) == null ? void 0 : s.map((c) => _h(c))) != null ? u : [bo].filter((c) => c != null),
        vs(Te(o.value ? e[1] : e[0])),
        vs(l(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Te(o.value ? e[3] : e[2])
      ];
    },
    ([s, u, c, d]) => {
      if (n(), !(s != null && s.length) || !(u != null && u.length) || !(c != null && c.length))
        return;
      const f = dk(d) ? { ...d } : d;
      t.push(
        ...s.flatMap(
          (p) => u.flatMap(
            (h) => c.map((v) => a(p, h, v, f))
          )
        )
      );
    },
    { flush: "post" }
  ), i = () => {
    r(), n();
  };
  return ok(n), i;
}
// @__NO_SIDE_EFFECTS__
function bk() {
  const e = en(!1), t = Ne();
  return t && le(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function _k(e) {
  const t = /* @__PURE__ */ bk();
  return E(() => (t.value, !!e()));
}
const xk = Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function wk() {
  const e = Af() ? /* @__PURE__ */ rk(xk, null) : null;
  return typeof e == "number" ? e : void 0;
}
function xh(e, t = {}) {
  const { window: n = bo, ssrWidth: a = /* @__PURE__ */ wk() } = t, o = /* @__PURE__ */ _k(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), r = en(typeof a == "number"), i = en(), s = en(!1), u = (c) => {
    s.value = c.matches;
  };
  return ge(() => {
    if (r.value) {
      r.value = !o.value;
      const c = Te(e).split(",");
      s.value = c.some((d) => {
        const f = d.includes("not all"), p = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), h = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let v = !!(p || h);
        return p && v && (v = a >= Vc(p[1])), h && v && (v = a <= Vc(h[1])), f ? !v : v;
      });
      return;
    }
    o.value && (i.value = n.matchMedia(Te(e)), s.value = i.value.matches);
  }), Hr(i, "change", u, { passive: !0 }), E(() => s.value);
}
function Ck(e) {
  return JSON.parse(JSON.stringify(e));
}
const rr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ir = "__vueuse_ssr_handlers__", kk = /* @__PURE__ */ Sk();
function Sk() {
  return ir in rr || (rr[ir] = rr[ir] || {}), rr[ir];
}
function wh(e, t) {
  return kk[e] || t;
}
// @__NO_SIDE_EFFECTS__
function $k(e) {
  return xh("(prefers-color-scheme: dark)", e);
}
function Tk(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Ak = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
}, zc = "vueuse-storage";
function Ek(e, t, n, a = {}) {
  var o;
  const {
    flush: r = "pre",
    deep: i = !0,
    listenToStorageChanges: s = !0,
    writeDefaults: u = !0,
    mergeDefaults: c = !1,
    shallow: d,
    window: f = bo,
    eventFilter: p,
    onError: h = (z) => {
      console.error(z);
    },
    initOnMounted: v
  } = a, m = (d ? en : M)(typeof t == "function" ? t() : t), b = E(() => Te(e));
  if (!n)
    try {
      n = wh("getDefaultStorage", () => {
        var z;
        return (z = bo) == null ? void 0 : z.localStorage;
      })();
    } catch (z) {
      h(z);
    }
  if (!n)
    return m;
  const x = Te(t), S = Tk(x), C = (o = a.serializer) != null ? o : Ak[S], { pause: T, resume: $ } = gk(
    m,
    (z) => D(z),
    { flush: r, deep: i, eventFilter: p }
  );
  ee(b, () => I(), { flush: r });
  let B = !1;
  const A = (z) => {
    v && !B || I(z);
  }, R = (z) => {
    v && !B || G(z);
  };
  f && s && (n instanceof Storage ? Hr(f, "storage", A, { passive: !0 }) : Hr(f, zc, R)), v ? bh(() => {
    B = !0, I();
  }) : I();
  function L(z, Y) {
    if (f) {
      const ne = {
        key: b.value,
        oldValue: z,
        newValue: Y,
        storageArea: n
      };
      f.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", ne) : new CustomEvent(zc, {
        detail: ne
      }));
    }
  }
  function D(z) {
    try {
      const Y = n.getItem(b.value);
      if (z == null)
        L(Y, null), n.removeItem(b.value);
      else {
        const ne = C.write(z);
        Y !== ne && (n.setItem(b.value, ne), L(Y, ne));
      }
    } catch (Y) {
      h(Y);
    }
  }
  function N(z) {
    const Y = z ? z.newValue : n.getItem(b.value);
    if (Y == null)
      return u && x != null && n.setItem(b.value, C.write(x)), x;
    if (!z && c) {
      const ne = C.read(Y);
      return typeof c == "function" ? c(ne, x) : S === "object" && !Array.isArray(ne) ? { ...x, ...ne } : ne;
    } else return typeof Y != "string" ? Y : C.read(Y);
  }
  function I(z) {
    if (!(z && z.storageArea !== n)) {
      if (z && z.key == null) {
        m.value = x;
        return;
      }
      if (!(z && z.key !== b.value)) {
        T();
        try {
          const Y = C.write(m.value);
          (z === void 0 || (z == null ? void 0 : z.newValue) !== Y) && (m.value = N(z));
        } catch (Y) {
          h(Y);
        } finally {
          z ? ae($) : $();
        }
      }
    }
  }
  function G(z) {
    I(z.detail);
  }
  return m;
}
const Bk = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Mk(e = {}) {
  const {
    selector: t = "html",
    attribute: n = "class",
    initialValue: a = "auto",
    window: o = bo,
    storage: r,
    storageKey: i = "vueuse-color-scheme",
    listenToStorageChanges: s = !0,
    storageRef: u,
    emitAuto: c,
    disableTransition: d = !0
  } = e, f = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, p = /* @__PURE__ */ $k({ window: o }), h = E(() => p.value ? "dark" : "light"), v = u || (i == null ? gh(a) : Ek(i, a, r, { window: o, listenToStorageChanges: s })), m = E(() => v.value === "auto" ? h.value : v.value), b = wh(
    "updateHTMLAttrs",
    (T, $, B) => {
      const A = typeof T == "string" ? o == null ? void 0 : o.document.querySelector(T) : _h(T);
      if (!A)
        return;
      const R = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
      let D = null;
      if ($ === "class") {
        const I = B.split(/\s/g);
        Object.values(f).flatMap((G) => (G || "").split(/\s/g)).filter(Boolean).forEach((G) => {
          I.includes(G) ? R.add(G) : L.add(G);
        });
      } else
        D = { key: $, value: B };
      if (R.size === 0 && L.size === 0 && D === null)
        return;
      let N;
      d && (N = o.document.createElement("style"), N.appendChild(document.createTextNode(Bk)), o.document.head.appendChild(N));
      for (const I of R)
        A.classList.add(I);
      for (const I of L)
        A.classList.remove(I);
      D && A.setAttribute(D.key, D.value), d && (o.getComputedStyle(N).opacity, document.head.removeChild(N));
    }
  );
  function x(T) {
    var $;
    b(t, n, ($ = f[T]) != null ? $ : T);
  }
  function S(T) {
    e.onChanged ? e.onChanged(T, x) : x(T);
  }
  ee(m, S, { flush: "post", immediate: !0 }), bh(() => S(m.value));
  const C = E({
    get() {
      return c ? v.value : m.value;
    },
    set(T) {
      v.value = T;
    }
  });
  return Object.assign(C, { store: v, system: h, state: m });
}
function Ok(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: n = ""
  } = e, a = Mk({
    ...e,
    onChanged: (i, s) => {
      var u;
      e.onChanged ? (u = e.onChanged) == null || u.call(e, i === "dark", s, i) : s(i);
    },
    modes: {
      dark: t,
      light: n
    }
  }), o = E(() => a.system.value);
  return E({
    get() {
      return a.value === "dark";
    },
    set(i) {
      const s = i ? "dark" : "light";
      o.value === s ? a.value = "auto" : a.value = s;
    }
  });
}
// @__NO_SIDE_EFFECTS__
function Ch(e, t, n, a = {}) {
  var o, r, i;
  const {
    clone: s = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, h = Ne(), v = n || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((i = (r = h == null ? void 0 : h.proxy) == null ? void 0 : r.$emit) == null ? void 0 : i.bind(h == null ? void 0 : h.proxy));
  let m = c;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const b = (C) => s ? typeof s == "function" ? s(C) : Ck(C) : C, x = () => uk(e[t]) ? b(e[t]) : f, S = (C) => {
    p ? p(C) && v(m, C) : v(m, C);
  };
  if (u) {
    const C = x(), T = M(C);
    let $ = !1;
    return ee(
      () => e[t],
      (B) => {
        $ || ($ = !0, T.value = b(B), ae(() => $ = !1));
      }
    ), ee(
      T,
      (B) => {
        !$ && (B !== e[t] || d) && S(B);
      },
      { deep: d }
    ), T;
  } else
    return E({
      get() {
        return x();
      },
      set(C) {
        S(C);
      }
    });
}
const JP = /* @__PURE__ */ _({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = fn(t, "class");
    return (a, o) => (g(), k(l(y1), O({ "data-slot": "avatar-fallback" }, l(n), {
      class: l(F)("bg-muted flex size-full items-center justify-center rounded-full", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), QP = /* @__PURE__ */ _({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(x1), O({ "data-slot": "avatar-image" }, t, { class: "aspect-square size-full" }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eI = /* @__PURE__ */ _({
  __name: "Badge",
  props: {
    variant: {},
    type: {},
    size: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: j(l(F)(l(Dk)({ variant: e.variant, type: e.type, size: e.size }), t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), Dk = un(
  "inline-flex items-center rounded-full h-fit font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        warning: "bg-warning text-warning-foreground"
      },
      type: {
        outline: "border",
        fill: "border-transparent"
      },
      size: {
        xs: "px-2 text-xs text-xs",
        sm: "px-2.5 py-0.5 text-sm",
        md: "px-2.5 py-1 text-base",
        lg: "px-3 py-1 text-lg"
      }
    },
    compoundVariants: [
      { type: "outline", variant: "primary", class: "border-primary bg-primary/10 text-primary" },
      {
        type: "outline",
        variant: "secondary",
        class: "border-secondary bg-secondary/10 text-secondary"
      },
      {
        type: "outline",
        variant: "destructive",
        class: "border-destructive bg-destructive/20 text-destructive"
      },
      { type: "outline", variant: "warning", class: "border-warning bg-warning/20 text-warning" }
    ],
    defaultVariants: {
      variant: "primary",
      type: "fill",
      size: "md"
    }
  }
), tI = /* @__PURE__ */ _({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("nav", {
      "aria-label": "breadcrumb",
      class: j(t.class)
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), nI = /* @__PURE__ */ _({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: j(l(F)("flex h-9 w-9 items-center justify-center", t.class))
    }, [
      w(n.$slots, "default", {}, () => [
        P(l(th), { class: "h-4 w-4" })
      ]),
      a[0] || (a[0] = $e("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), aI = /* @__PURE__ */ _({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("li", {
      class: j(l(F)("inline-flex items-center gap-1.5", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), oI = /* @__PURE__ */ _({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(K), {
      as: e.as,
      "as-child": e.asChild,
      class: j(l(F)("hover:text-foreground transition-colors", t.class))
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), rI = /* @__PURE__ */ _({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("ol", {
      class: j(
        l(F)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5",
          t.class
        )
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), iI = /* @__PURE__ */ _({
  __name: "BreadcrumbPage",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("span", {
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: j(l(F)("text-foreground font-normal", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), sI = /* @__PURE__ */ _({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: j(l(F)("[&>svg]:h-3.5 [&>svg]:w-3.5", t.class))
    }, [
      w(n.$slots, "default", {}, () => [
        P(l(vu))
      ])
    ], 2));
  }
}), On = /* @__PURE__ */ _({
  __name: "Button",
  props: {
    variant: {},
    size: {},
    class: {},
    loading: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(K), {
      as: e.as,
      "as-child": e.asChild,
      class: j(l(F)(l(Ik)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: y(() => [
        w(n.$slots, "default"),
        e.loading ? (g(), k(l(cw), {
          key: 0,
          class: j(l(Pk)({ size: e.size }))
        }, null, 8, ["class"])) : te("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Pk = un("animate-spin", {
  variants: {
    size: {
      // requires ! due to parent sizing from the Button
      default: "size-4!",
      xs: "size-3!",
      sm: "size-3!",
      lg: "size-4!",
      xl: "size-5!",
      xxl: "size-6!",
      icon: "size-5!"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), Ik = un(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-slate-800 text-slate-50 hover:bg-slate-800/80",
        primary: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/70",
        outline: "border border-input text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground hover:border-transparent",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/50",
        ghost: "text-black hover:bg-accent hover:text-accent-foreground dark:text-slate-50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 p-5 text-base",
        xs: "h-6 rounded-md text-xs",
        sm: "h-8 rounded-md p-4 text-sm",
        lg: "h-10 rounded-lg px-8 text-lg",
        xl: "h-12 rounded-lg px-14 text-xl",
        xxl: "h-14 rounded-lg px-16 text-2xl",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), lI = /* @__PURE__ */ _({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: j(
        l(F)("bg-card border border-card-border rounded-lg shadow-xs", t.class)
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), uI = /* @__PURE__ */ _({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: j(l(F)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), cI = /* @__PURE__ */ _({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("h3", {
      class: j(l(F)("text-2xl font-semibold leading-none tracking-tight text-heading", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), dI = /* @__PURE__ */ _({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("p", {
      class: j(l(F)("text-muted-foreground text-sm", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), fI = /* @__PURE__ */ _({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: j(l(F)("p-6 pt-0", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), pI = /* @__PURE__ */ _({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: j(l(F)("flex items-center p-6 pt-0", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), hI = /* @__PURE__ */ _({
  __name: "Combobox",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    resetSearchTermOnBlur: { type: Boolean },
    resetSearchTermOnSelect: { type: Boolean },
    openOnFocus: { type: Boolean },
    openOnClick: { type: Boolean },
    ignoreFilter: { type: Boolean },
    resetModelValueOnClear: { type: Boolean },
    modelValue: {},
    defaultValue: {},
    multiple: { type: Boolean },
    dir: {},
    disabled: { type: Boolean },
    highlightOnHover: { type: Boolean },
    by: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "highlight", "update:open"],
  setup(e, { emit: t }) {
    const o = cn(e, t);
    return (r, i) => (g(), k(l(lC), Z(Q(l(o))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vI = /* @__PURE__ */ _({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = aa(n);
    return (o, r) => (g(), k(l(z1), O(l(a), {
      class: l(F)("w-[200px]", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mI = /* @__PURE__ */ _({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(mC), O(n.value, {
      class: l(F)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gI = /* @__PURE__ */ _({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(bC), O(n.value, {
      class: l(F)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", t.class)
    }), {
      default: y(() => [
        e.heading ? (g(), k(l($C), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            fe(be(e.heading), 1)
          ]),
          _: 1
        })) : te("", !0),
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yI = /* @__PURE__ */ _({
  __name: "ComboboxInput",
  props: {
    displayValue: { type: Function },
    modelValue: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = cn(o, a);
    return (i, s) => (g(), k(l(xC), O(l(r), {
      class: l(F)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", n.class)
    }), {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bI = /* @__PURE__ */ _({
  __name: "ComboboxItem",
  props: {
    textValue: {},
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = cn(o, a);
    return (i, s) => (g(), k(l(CC), O(l(r), {
      class: l(F)("relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0", n.class)
    }), {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _I = /* @__PURE__ */ _({
  __name: "ComboboxList",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: { default: "center" },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = cn(o, a);
    return (i, s) => (g(), k(l(AC), null, {
      default: y(() => [
        P(l(hC), O(l(r), {
          class: l(F)("z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n.class)
        }), {
          default: y(() => [
            P(l(PC), null, {
              default: y(() => [
                w(i.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), xI = /* @__PURE__ */ _({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(BC), O(n.value, {
      class: l(F)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rk = /* @__PURE__ */ _({
  __name: "Command",
  props: {
    modelValue: {},
    defaultValue: {},
    open: { type: Boolean, default: !0 },
    defaultOpen: { type: Boolean },
    searchTerm: {},
    selectedValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    dir: {},
    filterFunction: {},
    displayValue: {},
    resetSearchTermOnBlur: { type: Boolean },
    resetSearchTermOnSelect: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm", "update:selectedValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = de(o, a);
    return (i, s) => (g(), k(l(Ab), O(l(r), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-text",
        n.class
      ]
    }), {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kh = /* @__PURE__ */ _({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, i) => (g(), k(l(rp), Z(Q(l(o))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wI = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(Ro), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fk = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(ip), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nk = /* @__PURE__ */ _({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: j(l(F)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), Lk = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = Le(n);
    return (o, r) => (g(), k(l(cp), O(l(a), {
      class: l(F)("text-heading text-2xl font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vk = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = Le(n);
    return (o, r) => (g(), k(l(dp), O(l(a), {
      class: l(F)("text-muted-foreground text-sm", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sh = /* @__PURE__ */ _({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus", "close"],
  setup(e, { emit: t }) {
    const n = t, a = e, o = E(() => {
      const { class: i, ...s } = a;
      return s;
    }), r = de(o, n);
    return (i, s) => (g(), k(l(Xl), null, {
      default: y(() => [
        P(l(tu), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        P(l(eu), O(l(r), {
          class: l(F)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-popover p-6 shadow-lg duration-200 sm:rounded-lg dark:border-slate-800",
            a.class
          )
        }), {
          default: y(() => [
            w(i.$slots, "default"),
            P(l(Ro), {
              onClick: s[0] || (s[0] = (u) => n("close", u)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: y(() => [
                P(l(Oi), { class: "size-4 dark:text-slate-300" }),
                s[1] || (s[1] = $e("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1
            })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), CI = /* @__PURE__ */ _({
  __name: "DialogScrollContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = de(o, a);
    return (i, s) => (g(), k(l(Xl), null, {
      default: y(() => [
        P(l(tu), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: y(() => [
            P(l(eu), O({
              class: l(F)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg md:w-full dark:border-slate-800 dark:bg-slate-950",
                n.class
              )
            }, l(r), {
              onPointerDownOutside: s[0] || (s[0] = (u) => {
                const c = u.detail.originalEvent, d = c.target;
                (c.offsetX > d.clientWidth || c.offsetY > d.clientHeight) && u.preventDefault();
              })
            }), {
              default: y(() => [
                w(i.$slots, "default"),
                P(l(Ro), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: y(() => [
                    P(l(Oi), { class: "size-4" }),
                    s[1] || (s[1] = $e("span", { class: "sr-only" }, "Close", -1))
                  ]),
                  _: 1
                })
              ]),
              _: 3
            }, 16, ["class"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), zk = /* @__PURE__ */ _({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: j(
        l(F)("text-text flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class)
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), kI = /* @__PURE__ */ _({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, i) => (g(), k(l(kh), Z(Q(l(o))), {
      default: y(() => [
        P(l(Sh), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            P(Rk, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: y(() => [
                w(r.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16));
  }
}), SI = /* @__PURE__ */ _({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(Rb), O(n.value, {
      class: l(F)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $I = /* @__PURE__ */ _({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(Mb), O(n.value, {
      class: l(F)(
        "overflow-hidden p-1",
        t.class
      )
    }), {
      default: y(() => [
        e.heading ? (g(), k(l(Ob), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            fe(be(e.heading), 1)
          ]),
          _: 1
        })) : te("", !0),
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qk = { class: "flex items-center border-b px-3" }, TI = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "CommandInput",
  props: {
    type: {},
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = Le(n);
    return (o, r) => (g(), V("div", qk, [
      P(l(pw), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      P(l(Eb), O({ ...l(a), ...o.$attrs }, {
        "auto-focus": "",
        class: l(F)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-input disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), AI = /* @__PURE__ */ _({
  __name: "CommandItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = de(o, a);
    return (i, s) => (g(), k(l(Vb), O(l(r), { class: "relative text-popover-foreground flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-hidden data-disabled:pointer-events-none data-highlighted:bg-slate-100 data-highlighted:text-slate-900 data-disabled:opacity-50 dark:data-highlighted:bg-slate-800 dark:data-highlighted:text-slate-50" }), {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hk = { role: "presentation" }, EI = /* @__PURE__ */ _({
  __name: "CommandList",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean, default: !1 },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = de(o, a);
    return (i, s) => (g(), k(l(Ib), O(l(r), {
      class: l(F)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        $e("div", Hk, [
          w(i.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), BI = /* @__PURE__ */ _({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(zb), O(n.value, {
      class: l(F)("-mx-1 h-px bg-muted-foreground", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), MI = /* @__PURE__ */ _({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("span", {
      class: j(l(F)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), [Wk, Uk] = jm("DraggableRoot"), OI = /* @__PURE__ */ _({
  __name: "DraggableArea",
  props: {
    class: {},
    data: {}
  },
  emits: ["drop"],
  setup(e, { emit: t }) {
    const n = e, a = jk();
    Uk(a);
    const o = t, r = (u) => o("drop", u), i = (u) => {
      u.preventDefault(), a.draggedToArea.value = n.data;
    }, s = () => a.draggedFromArea.value = n.data;
    return (u, c) => (g(), V("div", {
      class: j(n.class),
      onDrop: r,
      onDragstart: s,
      onDragover: i
    }, [
      w(u.$slots, "default")
    ], 34));
  }
}), DI = /* @__PURE__ */ _({
  __name: "DraggableItem",
  props: {
    class: {},
    data: {},
    index: {}
  },
  emits: ["dragstart", "dragend", "dragover"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Wk(), r = (u) => {
      o.draggableItem.value = n.data, a("dragstart", {
        event: u,
        data: n.data
      });
    }, i = () => {
      o.draggableIndex.value = n.index, a("dragover", n.index);
    }, s = (u) => {
      o.draggableItem.value = null, o.draggableIndex.value = null, a("dragend", u);
    };
    return (u, c) => (g(), V("div", {
      class: j(n.class),
      draggable: "true",
      onDragstart: r,
      onDragend: s,
      onDragover: i
    }, [
      w(u.$slots, "default", { item: e.data })
    ], 34));
  }
}), $h = M(null), Th = M(null), Ah = M(null), Eh = M(null), Kk = () => {
  $h.value = null, Th.value = null, Ah.value = null, Eh.value = null;
};
function jk() {
  return {
    draggedFromArea: $h,
    draggedToArea: Th,
    draggableItem: Ah,
    draggableIndex: Eh,
    resetDraggable: Kk
  };
}
const Gk = /* @__PURE__ */ _({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, i) => (g(), k(l(__), Z(Q(l(o))), {
      default: y(({ open: s }) => [
        w(r.$slots, "default", { open: s })
      ]),
      _: 3
    }, 16));
  }
}), Yk = /* @__PURE__ */ _({
  __name: "BaseDropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: j(
        l(F)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          e.inset && "pl-8",
          t.class
        )
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), Xk = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Le(e);
    return (a, o) => (g(), k(l(x_), O({ class: "outline-hidden" }, l(n)), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zk = /* @__PURE__ */ _({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = de(o, a);
    return (i, s) => (g(), k(l(w_), null, {
      default: y(() => [
        P(l(C_), O(l(r), {
          class: l(F)(
            "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-md",
            n.class
          )
        }), {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), PI = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(k_), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), II = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, i) => (g(), k(l(A_), Z(Q(l(o))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), RI = /* @__PURE__ */ _({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = Le(n);
    return (o, r) => (g(), k(l(Sp), O(l(a), {
      class: l(F)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        e.inset && "pl-8",
        t.class
      )
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jk = /* @__PURE__ */ _({
  __name: "DropdownMenuLink",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {},
    inset: { type: Boolean },
    href: {},
    method: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = Le(n);
    return (o, r) => (g(), k(Yk, {
      class: j(t.class)
    }, {
      default: y(() => [
        P(l(Sp), O(l(a), {
          as: e.as,
          href: e.href,
          class: "size-full"
        }), {
          default: y(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "href"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Qk = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, FI = /* @__PURE__ */ _({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select", "update:checked"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = de(o, a);
    return (i, s) => (g(), k(l($_), O(l(r), {
      class: l(F)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        $e("span", Qk, [
          P(l($p), null, {
            default: y(() => [
              P(l(hu), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), eS = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, NI = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = de(o, a);
    return (i, s) => (g(), k(l(E_), O(l(r), {
      class: l(F)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        $e("span", eS, [
          P(l($p), null, {
            default: y(() => [
              P(l(uw), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), LI = /* @__PURE__ */ _({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("span", {
      class: j(l(F)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), VI = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(S_), O(n.value, {
      class: l(F)("-mx-1 my-1 h-px bg-muted-foreground", t.class)
    }), null, 16, ["class"]));
  }
}), zI = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = Le(n);
    return (o, r) => (g(), k(l(T_), O(l(a), {
      class: l(F)("px-2 py-1.5 text-sm font-semibold", e.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qI = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, i) => (g(), k(l(B_), Z(Q(l(o))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), HI = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = Le(n);
    return (o, r) => (g(), k(l(O_), O(l(a), {
      class: l(F)(
        "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden",
        t.class
      )
    }), {
      default: y(() => [
        w(o.$slots, "default"),
        P(l(vu), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), WI = /* @__PURE__ */ _({
  __name: "DropdownMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = de(o, a);
    return (i, s) => (g(), k(l(M_), O(l(r), {
      class: l(F)(
        "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-lg",
        n.class
      )
    }), {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), UI = /* @__PURE__ */ _({
  __name: "Empty",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-slot": "empty",
      class: j(l(F)(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
        t.class
      ))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), KI = /* @__PURE__ */ _({
  __name: "EmptyContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-slot": "empty-content",
      class: j(l(F)(
        "flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
        t.class
      ))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), jI = /* @__PURE__ */ _({
  __name: "EmptyDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("p", {
      "data-slot": "empty-description",
      class: j(l(F)(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        t.class
      ))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), GI = /* @__PURE__ */ _({
  __name: "EmptyHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-slot": "empty-header",
      class: j(l(F)(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        t.class
      ))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), tS = ["data-variant"], YI = /* @__PURE__ */ _({
  __name: "EmptyMedia",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: j(l(F)(l(nS)({ variant: e.variant }), t.class))
    }, [
      w(n.$slots, "default")
    ], 10, tS));
  }
}), XI = /* @__PURE__ */ _({
  __name: "EmptyTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-slot": "empty-title",
      class: j(l(F)("text-lg font-medium tracking-tight", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), nS = un(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), aS = { class: "text-xs text-slate-600 dark:text-slate-300" }, oS = /* @__PURE__ */ _({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(e) {
    return (t, n) => (g(), V("div", aS, "Characters: " + be(e.count), 1));
  }
}), zo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, rS = {}, iS = { class: "text-sm text-muted" };
function sS(e, t) {
  return g(), V("div", iS, [
    w(e.$slots, "default")
  ]);
}
const lS = /* @__PURE__ */ zo(rS, [["render", sS]]), uS = { class: "text-sm text-red-600 dark:text-red-400" }, cS = /* @__PURE__ */ _({
  __name: "Error",
  props: {
    error: {}
  },
  setup(e) {
    return (t, n) => Yn((g(), V("div", null, [
      $e("p", uS, be(e.error), 1)
    ], 512)), [
      [mi, e.error]
    ]);
  }
}), dS = {}, fS = { class: "w-full space-y-4 p-1.5" };
function pS(e, t) {
  return g(), V("div", fS, [
    w(e.$slots, "default")
  ]);
}
const ZI = /* @__PURE__ */ zo(dS, [["render", pS]]), hS = {}, vS = { class: "my-4" };
function mS(e, t) {
  return g(), V("div", vS, [
    w(e.$slots, "default")
  ]);
}
const gS = /* @__PURE__ */ zo(hS, [["render", mS]]), yS = { class: "grid gap-4 md:grid-cols-2" }, JI = /* @__PURE__ */ _({
  __name: "FormGrid",
  setup(e) {
    return (t, n) => (g(), k(gS, null, {
      default: y(() => [
        $e("div", yS, [
          w(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), xu = /* @__PURE__ */ _({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    id: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(D_), O(n.value, {
      class: l(F)(
        "text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        t.class
      )
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bS = { class: "relative" }, _S = {
  name: "Base",
  inheritAttrs: !1
}, qo = /* @__PURE__ */ _({
  ..._S,
  props: {
    id: {},
    modelValue: {},
    label: {},
    showLabel: { type: Boolean, default: !0 },
    description: {},
    showCharacterCount: { type: Boolean, default: !1 },
    error: {}
  },
  setup(e) {
    return (t, n) => {
      var a;
      return g(), V("div", null, [
        e.label && e.showLabel ? (g(), k(l(xu), {
          key: 0,
          id: e.id
        }, {
          default: y(() => [
            fe(be(e.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : te("", !0),
        $e("div", bS, [
          w(t.$slots, "default"),
          e.showCharacterCount ? (g(), k(l(oS), {
            key: 0,
            count: (a = e.modelValue) == null ? void 0 : a.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : te("", !0)
        ]),
        P(l(lS), { class: "mt-[2px]" }, {
          default: y(() => [
            fe(be(e.description), 1)
          ]),
          _: 1
        }),
        P(l(cS), { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), xS = { class: "flex gap-2" }, QI = /* @__PURE__ */ _({
  __name: "Checkbox",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: {},
    id: {},
    asChild: { type: Boolean },
    as: {},
    modelValue: { type: [Boolean, String] },
    text: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = M(e.modelValue);
    return ee(o, (r) => {
      n("update:modelValue", r);
    }), (r, i) => (g(), k(l(qo), Z(Q(r.$props)), {
      default: y(() => [
        $e("div", xS, [
          P(l(yb), {
            id: e.id,
            checked: o.value,
            "onUpdate:checked": i[0] || (i[0] = (s) => o.value = s),
            class: "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }, {
            default: y(() => [
              P(l(bb), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: y(() => [
                  P(l(hu), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          e.text ? (g(), k(l(xu), {
            key: 0,
            id: e.id,
            class: "my-auto"
          }, {
            default: y(() => [
              fe(be(e.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : te("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), wS = { class: "space-y-2" }, CS = { class: "flex items-center gap-2" }, kS = ["src"], SS = ["accept"], e3 = /* @__PURE__ */ _({
  __name: "ImageUpload",
  props: /* @__PURE__ */ Pr({
    defaultImage: {},
    label: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = M(null), a = M(t.defaultImage ?? null), o = (s) => {
      var d;
      const c = (d = s.target.files) == null ? void 0 : d[0];
      c && (a.value = URL.createObjectURL(c), console.log(c), i.value = c);
    }, r = () => {
      var s;
      (s = n.value) == null || s.click();
    }, i = Pl(e, "modelValue");
    return wt("container", "md"), (s, u) => (g(), V("div", wS, [
      P(l(xu), null, {
        default: y(() => [
          fe(be(e.label), 1)
        ]),
        _: 1
      }),
      $e("div", CS, [
        w(s.$slots, "image", { curImage: a.value }, () => [
          a.value ? (g(), V("img", {
            key: 0,
            src: a.value,
            alt: "Uploaded preview",
            class: "size-32 rounded shadow"
          }, null, 8, kS)) : te("", !0)
        ]),
        P(l(On), {
          onClick: De(r, ["prevent"]),
          variant: "outline"
        }, {
          default: y(() => [...u[0] || (u[0] = [
            fe("Upload", -1)
          ])]),
          _: 1
        }),
        $e("input", {
          ref_key: "fileInput",
          ref: n,
          type: "file",
          accept: e.accept,
          onChange: o,
          class: "hidden"
        }, null, 40, SS)
      ])
    ]));
  }
}), $S = ["disabled", "placeholder", "required", "type"], TS = /* @__PURE__ */ _({
  __name: "Input",
  props: /* @__PURE__ */ Pr({
    modelValue: {},
    type: { default: "text" },
    disabled: { type: Boolean },
    placeholder: {},
    error: {},
    required: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Pl(e, "modelValue");
    return (n, a) => (g(), k(l(qo), Z(Q(n.$props)), {
      default: y(() => [
        Yn($e("input", {
          "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o),
          disabled: e.disabled,
          placeholder: e.placeholder,
          required: e.required,
          type: e.type,
          class: j(["flex h-10 w-full rounded-md border border-border bg-muted px-3 py-2 text-sm text-input ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !e.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": e.error
          }])
        }, null, 10, $S), [
          [Wm, t.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), AS = /* @__PURE__ */ _({
  __name: "SelectRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    defaultValue: {},
    modelValue: {},
    dir: {},
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, i) => (g(), k(l(e0), Z(Q(l(o))), {
      default: y(({ open: s }) => [
        w(r.$slots, "default", { open: s })
      ]),
      _: 3
    }, 16));
  }
}), ES = /* @__PURE__ */ _({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(k0), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), BS = /* @__PURE__ */ _({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    open: { type: Boolean }
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = Le(n);
    return (o, r) => (g(), k(l(a0), O(l(a), {
      class: l(F)(
        "border-border bg-muted ring-offset-background text-text focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-start text-sm transition focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ring-offset-0 hover:bg-muted/50 [&>span]:truncate",
        t.class
      )
    }), {
      default: y(() => [
        w(o.$slots, "default"),
        P(l(S0), { "as-child": "" }, {
          default: y(() => [
            P(l(Mi), {
              class: j(["size-4 shrink-0 opacity-50 transition", e.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), MS = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = de(o, a);
    return (i, s) => (g(), k(l(o0), null, {
      default: y(() => [
        P(l(f0), O({ ...l(r), ...i.$attrs }, {
          class: l(F)(
            "bg-popover text-popover-foreground border border-card data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md shadow-md",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            P(l(PS)),
            P(l(x0), {
              class: j(
                l(F)(
                  "p-1",
                  e.position === "popper" && "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)"
                )
              )
            }, {
              default: y(() => [
                w(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            P(l(IS))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), t3 = /* @__PURE__ */ _({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(b0), O({
      class: l(F)("w-full p-1", t.class)
    }, n.value), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), OS = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, DS = /* @__PURE__ */ _({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = Le(n);
    return (o, r) => (g(), k(l(v0), O(l(a), {
      class: l(F)(
        "text-text border border-transparent hover:border-border focus:text-accent-foreground focus:bg-accent relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 dark:focus:bg-muted-foreground hover:bg-muted",
        t.class
      )
    }), {
      default: y(() => [
        $e("span", OS, [
          P(l(m0), null, {
            default: y(() => [
              P(l(hu), { class: "size-4 text-primary" })
            ]),
            _: 1
          })
        ]),
        P(l(Mp), null, {
          default: y(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n3 = /* @__PURE__ */ _({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(Mp), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), a3 = /* @__PURE__ */ _({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(_0), {
      class: j(l(F)("py-1.5 pl-8 pr-2 text-sm font-semibold text-text", t.class))
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), o3 = /* @__PURE__ */ _({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(p0), O(n.value, {
      class: l(F)("bg-muted-foreground -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), PS = /* @__PURE__ */ _({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = Le(n);
    return (o, r) => (g(), k(l(w0), O(l(a), {
      class: l(F)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default", {}, () => [
          P(l(iw), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), IS = /* @__PURE__ */ _({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = Le(n);
    return (o, r) => (g(), k(l(C0), O(l(a), {
      class: l(F)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default", {}, () => [
          P(l(Mi), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r3 = /* @__PURE__ */ _({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, a = e, o = E(() => a.placeholder ?? "Select an option..."), r = M(
      a.modelValue ? a.options.find((i) => i === a.modelValue) : void 0
    );
    return ee(r, () => {
      n("update:modelValue", r.value);
    }), (i, s) => (g(), k(l(qo), Z(Q(i.$props)), {
      default: y(() => [
        P(l(AS), {
          modelValue: r.value,
          "onUpdate:modelValue": s[0] || (s[0] = (u) => r.value = u)
        }, {
          default: y(({ open: u }) => [
            P(l(BS), { open: u }, {
              default: y(() => [
                P(l(ES), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 1
            }, 8, ["open"]),
            P(l(MS), null, {
              default: y(() => [
                (g(!0), V(ve, null, Ye(e.options, (c, d) => (g(), k(l(DS), {
                  key: d,
                  value: c
                }, {
                  default: y(() => [
                    fe(be(c), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      _: 1
    }, 16));
  }
}), RS = ["placeholder"], i3 = /* @__PURE__ */ _({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = /* @__PURE__ */ Ch(e, "modelValue", t, {
      passive: !0
    });
    return (r, i) => (g(), k(l(qo), Z(Q(r.$props)), {
      default: y(() => [
        Yn($e("textarea", {
          "onUpdate:modelValue": i[0] || (i[0] = (s) => lt(o) ? o.value = s : null),
          placeholder: e.placeholder,
          class: j(["flex min-h-20 w-full rounded-md border border-border bg-muted px-3 py-2 text-sm font-normal text-input ring-offset-white placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !e.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": e.error
          }])
        }, null, 10, RS), [
          [Um, l(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), FS = /* @__PURE__ */ _({
  __name: "Toggle",
  props: /* @__PURE__ */ Pr({
    defaultChecked: { type: Boolean },
    checked: { type: Boolean },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    value: {},
    asChild: { type: Boolean },
    as: {},
    modelValue: { type: [Boolean, null] },
    class: {}
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Pr(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = t, a = e, o = Pl(e, "modelValue");
    return ee(o, () => {
      n("update:modelValue", o.value);
    }), (r, i) => (g(), k(l(qo), Z(Q(r.$props)), {
      default: y(() => [
        P(l(Y0), {
          checked: o.value,
          "onUpdate:checked": i[0] || (i[0] = (s) => o.value = s),
          class: j(
            l(F)(
              "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
              a.class
            )
          )
        }, {
          default: y(({ checked: s }) => [
            P(l(X0), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: y(() => [
                s ? w(r.$slots, "checked", { key: 0 }) : te("", !0),
                s ? te("", !0) : w(r.$slots, "not-checked", { key: 1 })
              ]),
              _: 2
            }, 1024)
          ]),
          _: 3
        }, 8, ["checked", "class"])
      ]),
      _: 3
    }, 16));
  }
});
var Gs = "http://www.w3.org/1999/xhtml";
const qc = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Gs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Li(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), qc.hasOwnProperty(t) ? { space: qc[t], local: e } : e;
}
function NS(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Gs && t.documentElement.namespaceURI === Gs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function LS(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Bh(e) {
  var t = Li(e);
  return (t.local ? LS : NS)(t);
}
function VS() {
}
function wu(e) {
  return e == null ? VS : function() {
    return this.querySelector(e);
  };
}
function zS(e) {
  typeof e != "function" && (e = wu(e));
  for (var t = this._groups, n = t.length, a = new Array(n), o = 0; o < n; ++o)
    for (var r = t[o], i = r.length, s = a[o] = new Array(i), u, c, d = 0; d < i; ++d)
      (u = r[d]) && (c = e.call(u, u.__data__, d, r)) && ("__data__" in u && (c.__data__ = u.__data__), s[d] = c);
  return new dt(a, this._parents);
}
function qS(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function HS() {
  return [];
}
function Mh(e) {
  return e == null ? HS : function() {
    return this.querySelectorAll(e);
  };
}
function WS(e) {
  return function() {
    return qS(e.apply(this, arguments));
  };
}
function US(e) {
  typeof e == "function" ? e = WS(e) : e = Mh(e);
  for (var t = this._groups, n = t.length, a = [], o = [], r = 0; r < n; ++r)
    for (var i = t[r], s = i.length, u, c = 0; c < s; ++c)
      (u = i[c]) && (a.push(e.call(u, u.__data__, c, i)), o.push(u));
  return new dt(a, o);
}
function Oh(e) {
  return function() {
    return this.matches(e);
  };
}
function Dh(e) {
  return function(t) {
    return t.matches(e);
  };
}
var KS = Array.prototype.find;
function jS(e) {
  return function() {
    return KS.call(this.children, e);
  };
}
function GS() {
  return this.firstElementChild;
}
function YS(e) {
  return this.select(e == null ? GS : jS(typeof e == "function" ? e : Dh(e)));
}
var XS = Array.prototype.filter;
function ZS() {
  return Array.from(this.children);
}
function JS(e) {
  return function() {
    return XS.call(this.children, e);
  };
}
function QS(e) {
  return this.selectAll(e == null ? ZS : JS(typeof e == "function" ? e : Dh(e)));
}
function e$(e) {
  typeof e != "function" && (e = Oh(e));
  for (var t = this._groups, n = t.length, a = new Array(n), o = 0; o < n; ++o)
    for (var r = t[o], i = r.length, s = a[o] = [], u, c = 0; c < i; ++c)
      (u = r[c]) && e.call(u, u.__data__, c, r) && s.push(u);
  return new dt(a, this._parents);
}
function Ph(e) {
  return new Array(e.length);
}
function t$() {
  return new dt(this._enter || this._groups.map(Ph), this._parents);
}
function Wr(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Wr.prototype = {
  constructor: Wr,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function n$(e) {
  return function() {
    return e;
  };
}
function a$(e, t, n, a, o, r) {
  for (var i = 0, s, u = t.length, c = r.length; i < c; ++i)
    (s = t[i]) ? (s.__data__ = r[i], a[i] = s) : n[i] = new Wr(e, r[i]);
  for (; i < u; ++i)
    (s = t[i]) && (o[i] = s);
}
function o$(e, t, n, a, o, r, i) {
  var s, u, c = /* @__PURE__ */ new Map(), d = t.length, f = r.length, p = new Array(d), h;
  for (s = 0; s < d; ++s)
    (u = t[s]) && (p[s] = h = i.call(u, u.__data__, s, t) + "", c.has(h) ? o[s] = u : c.set(h, u));
  for (s = 0; s < f; ++s)
    h = i.call(e, r[s], s, r) + "", (u = c.get(h)) ? (a[s] = u, u.__data__ = r[s], c.delete(h)) : n[s] = new Wr(e, r[s]);
  for (s = 0; s < d; ++s)
    (u = t[s]) && c.get(p[s]) === u && (o[s] = u);
}
function r$(e) {
  return e.__data__;
}
function i$(e, t) {
  if (!arguments.length) return Array.from(this, r$);
  var n = t ? o$ : a$, a = this._parents, o = this._groups;
  typeof e != "function" && (e = n$(e));
  for (var r = o.length, i = new Array(r), s = new Array(r), u = new Array(r), c = 0; c < r; ++c) {
    var d = a[c], f = o[c], p = f.length, h = s$(e.call(d, d && d.__data__, c, a)), v = h.length, m = s[c] = new Array(v), b = i[c] = new Array(v), x = u[c] = new Array(p);
    n(d, f, m, b, x, h, t);
    for (var S = 0, C = 0, T, $; S < v; ++S)
      if (T = m[S]) {
        for (S >= C && (C = S + 1); !($ = b[C]) && ++C < v; ) ;
        T._next = $ || null;
      }
  }
  return i = new dt(i, a), i._enter = s, i._exit = u, i;
}
function s$(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function l$() {
  return new dt(this._exit || this._groups.map(Ph), this._parents);
}
function u$(e, t, n) {
  var a = this.enter(), o = this, r = this.exit();
  return typeof e == "function" ? (a = e(a), a && (a = a.selection())) : a = a.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? r.remove() : n(r), a && o ? a.merge(o).order() : o;
}
function c$(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, a = t._groups, o = n.length, r = a.length, i = Math.min(o, r), s = new Array(o), u = 0; u < i; ++u)
    for (var c = n[u], d = a[u], f = c.length, p = s[u] = new Array(f), h, v = 0; v < f; ++v)
      (h = c[v] || d[v]) && (p[v] = h);
  for (; u < o; ++u)
    s[u] = n[u];
  return new dt(s, this._parents);
}
function d$() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var a = e[t], o = a.length - 1, r = a[o], i; --o >= 0; )
      (i = a[o]) && (r && i.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(i, r), r = i);
  return this;
}
function f$(e) {
  e || (e = p$);
  function t(f, p) {
    return f && p ? e(f.__data__, p.__data__) : !f - !p;
  }
  for (var n = this._groups, a = n.length, o = new Array(a), r = 0; r < a; ++r) {
    for (var i = n[r], s = i.length, u = o[r] = new Array(s), c, d = 0; d < s; ++d)
      (c = i[d]) && (u[d] = c);
    u.sort(t);
  }
  return new dt(o, this._parents).order();
}
function p$(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function h$() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function v$() {
  return Array.from(this);
}
function m$() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var a = e[t], o = 0, r = a.length; o < r; ++o) {
      var i = a[o];
      if (i) return i;
    }
  return null;
}
function g$() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function y$() {
  return !this.node();
}
function b$(e) {
  for (var t = this._groups, n = 0, a = t.length; n < a; ++n)
    for (var o = t[n], r = 0, i = o.length, s; r < i; ++r)
      (s = o[r]) && e.call(s, s.__data__, r, o);
  return this;
}
function _$(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function x$(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function w$(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function C$(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function k$(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function S$(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function $$(e, t) {
  var n = Li(e);
  if (arguments.length < 2) {
    var a = this.node();
    return n.local ? a.getAttributeNS(n.space, n.local) : a.getAttribute(n);
  }
  return this.each((t == null ? n.local ? x$ : _$ : typeof t == "function" ? n.local ? S$ : k$ : n.local ? C$ : w$)(n, t));
}
function Ih(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function T$(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function A$(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function E$(e, t, n) {
  return function() {
    var a = t.apply(this, arguments);
    a == null ? this.style.removeProperty(e) : this.style.setProperty(e, a, n);
  };
}
function B$(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? T$ : typeof t == "function" ? E$ : A$)(e, t, n ?? "")) : Aa(this.node(), e);
}
function Aa(e, t) {
  return e.style.getPropertyValue(t) || Ih(e).getComputedStyle(e, null).getPropertyValue(t);
}
function M$(e) {
  return function() {
    delete this[e];
  };
}
function O$(e, t) {
  return function() {
    this[e] = t;
  };
}
function D$(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function P$(e, t) {
  return arguments.length > 1 ? this.each((t == null ? M$ : typeof t == "function" ? D$ : O$)(e, t)) : this.node()[e];
}
function Rh(e) {
  return e.trim().split(/^|\s+/);
}
function Cu(e) {
  return e.classList || new Fh(e);
}
function Fh(e) {
  this._node = e, this._names = Rh(e.getAttribute("class") || "");
}
Fh.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Nh(e, t) {
  for (var n = Cu(e), a = -1, o = t.length; ++a < o; ) n.add(t[a]);
}
function Lh(e, t) {
  for (var n = Cu(e), a = -1, o = t.length; ++a < o; ) n.remove(t[a]);
}
function I$(e) {
  return function() {
    Nh(this, e);
  };
}
function R$(e) {
  return function() {
    Lh(this, e);
  };
}
function F$(e, t) {
  return function() {
    (t.apply(this, arguments) ? Nh : Lh)(this, e);
  };
}
function N$(e, t) {
  var n = Rh(e + "");
  if (arguments.length < 2) {
    for (var a = Cu(this.node()), o = -1, r = n.length; ++o < r; ) if (!a.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? F$ : t ? I$ : R$)(n, t));
}
function L$() {
  this.textContent = "";
}
function V$(e) {
  return function() {
    this.textContent = e;
  };
}
function z$(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function q$(e) {
  return arguments.length ? this.each(e == null ? L$ : (typeof e == "function" ? z$ : V$)(e)) : this.node().textContent;
}
function H$() {
  this.innerHTML = "";
}
function W$(e) {
  return function() {
    this.innerHTML = e;
  };
}
function U$(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function K$(e) {
  return arguments.length ? this.each(e == null ? H$ : (typeof e == "function" ? U$ : W$)(e)) : this.node().innerHTML;
}
function j$() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function G$() {
  return this.each(j$);
}
function Y$() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function X$() {
  return this.each(Y$);
}
function Z$(e) {
  var t = typeof e == "function" ? e : Bh(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function J$() {
  return null;
}
function Q$(e, t) {
  var n = typeof e == "function" ? e : Bh(e), a = t == null ? J$ : typeof t == "function" ? t : wu(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), a.apply(this, arguments) || null);
  });
}
function eT() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function tT() {
  return this.each(eT);
}
function nT() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function aT() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function oT(e) {
  return this.select(e ? aT : nT);
}
function rT(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function iT(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function sT(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", a = t.indexOf(".");
    return a >= 0 && (n = t.slice(a + 1), t = t.slice(0, a)), { type: t, name: n };
  });
}
function lT(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, a = -1, o = t.length, r; n < o; ++n)
        r = t[n], (!e.type || r.type === e.type) && r.name === e.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++a] = r;
      ++a ? t.length = a : delete this.__on;
    }
  };
}
function uT(e, t, n) {
  return function() {
    var a = this.__on, o, r = iT(t);
    if (a) {
      for (var i = 0, s = a.length; i < s; ++i)
        if ((o = a[i]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = r, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, r, n), o = { type: e.type, name: e.name, value: t, listener: r, options: n }, a ? a.push(o) : this.__on = [o];
  };
}
function cT(e, t, n) {
  var a = sT(e + ""), o, r = a.length, i;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, c = s.length, d; u < c; ++u)
        for (o = 0, d = s[u]; o < r; ++o)
          if ((i = a[o]).type === d.type && i.name === d.name)
            return d.value;
    }
    return;
  }
  for (s = t ? uT : lT, o = 0; o < r; ++o) this.each(s(a[o], t, n));
  return this;
}
function Vh(e, t, n) {
  var a = Ih(e), o = a.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = a.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function dT(e, t) {
  return function() {
    return Vh(this, e, t);
  };
}
function fT(e, t) {
  return function() {
    return Vh(this, e, t.apply(this, arguments));
  };
}
function pT(e, t) {
  return this.each((typeof t == "function" ? fT : dT)(e, t));
}
function* hT() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var a = e[t], o = 0, r = a.length, i; o < r; ++o)
      (i = a[o]) && (yield i);
}
var zh = [null];
function dt(e, t) {
  this._groups = e, this._parents = t;
}
function Ho() {
  return new dt([[document.documentElement]], zh);
}
function vT() {
  return this;
}
dt.prototype = Ho.prototype = {
  constructor: dt,
  select: zS,
  selectAll: US,
  selectChild: YS,
  selectChildren: QS,
  filter: e$,
  data: i$,
  enter: t$,
  exit: l$,
  join: u$,
  merge: c$,
  selection: vT,
  order: d$,
  sort: f$,
  call: h$,
  nodes: v$,
  node: m$,
  size: g$,
  empty: y$,
  each: b$,
  attr: $$,
  style: B$,
  property: P$,
  classed: N$,
  text: q$,
  html: K$,
  raise: G$,
  lower: X$,
  append: Z$,
  insert: Q$,
  remove: tT,
  clone: oT,
  datum: rT,
  on: cT,
  dispatch: pT,
  [Symbol.iterator]: hT
};
function kt(e) {
  return typeof e == "string" ? new dt([[document.querySelector(e)]], [document.documentElement]) : new dt([[e]], zh);
}
var uo;
(function(e) {
  e[e.SVG = 0] = "SVG", e[e.HTML = 1] = "HTML";
})(uo || (uo = {}));
var Ea;
(function(e) {
  e.Fit = "fit", e.Extend = "extend", e.FitWidth = "fit_width";
})(Ea || (Ea = {}));
function co(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function mT(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ku(e) {
  let t, n, a;
  e.length !== 2 ? (t = co, n = (s, u) => co(e(s), u), a = (s, u) => e(s) - u) : (t = e === co || e === mT ? e : gT, n = e, a = e);
  function o(s, u, c = 0, d = s.length) {
    if (c < d) {
      if (t(u, u) !== 0) return d;
      do {
        const f = c + d >>> 1;
        n(s[f], u) < 0 ? c = f + 1 : d = f;
      } while (c < d);
    }
    return c;
  }
  function r(s, u, c = 0, d = s.length) {
    if (c < d) {
      if (t(u, u) !== 0) return d;
      do {
        const f = c + d >>> 1;
        n(s[f], u) <= 0 ? c = f + 1 : d = f;
      } while (c < d);
    }
    return c;
  }
  function i(s, u, c = 0, d = s.length) {
    const f = o(s, u, c, d - 1);
    return f > c && a(s[f - 1], u) > -a(s[f], u) ? f - 1 : f;
  }
  return { left: o, center: i, right: r };
}
function gT() {
  return 0;
}
function qh(e) {
  return e === null ? NaN : +e;
}
const Hh = ku(co), Wo = Hh.right, yT = Hh.left;
ku(qh).center;
function bT(e, t) {
  let n, a;
  for (const o of e)
    o != null && (n === void 0 ? o >= o && (n = a = o) : (n > o && (n = o), a < o && (a = o)));
  return [n, a];
}
class Hc extends Map {
  constructor(t, n = wT) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(Wc(this, t));
  }
  has(t) {
    return super.has(Wc(this, t));
  }
  set(t, n) {
    return super.set(_T(this, t), n);
  }
  delete(t) {
    return super.delete(xT(this, t));
  }
}
function Wc({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function _T({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function xT({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function wT(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const CT = Math.sqrt(50), kT = Math.sqrt(10), ST = Math.sqrt(2);
function Ur(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), r = a / Math.pow(10, o), i = r >= CT ? 10 : r >= kT ? 5 : r >= ST ? 2 : 1;
  let s, u, c;
  return o < 0 ? (c = Math.pow(10, -o) / i, s = Math.round(e * c), u = Math.round(t * c), s / c < e && ++s, u / c > t && --u, c = -c) : (c = Math.pow(10, o) * i, s = Math.round(e / c), u = Math.round(t / c), s * c < e && ++s, u * c > t && --u), u < s && 0.5 <= n && n < 2 ? Ur(e, t, n * 2) : [s, u, c];
}
function Ys(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, r, i] = a ? Ur(t, e, n) : Ur(e, t, n);
  if (!(r >= o)) return [];
  const s = r - o + 1, u = new Array(s);
  if (a)
    if (i < 0) for (let c = 0; c < s; ++c) u[c] = (r - c) / -i;
    else for (let c = 0; c < s; ++c) u[c] = (r - c) * i;
  else if (i < 0) for (let c = 0; c < s; ++c) u[c] = (o + c) / -i;
  else for (let c = 0; c < s; ++c) u[c] = (o + c) * i;
  return u;
}
function Xs(e, t, n) {
  return t = +t, e = +e, n = +n, Ur(e, t, n)[2];
}
function Zs(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, o = a ? Xs(t, e, n) : Xs(e, t, n);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function Uc(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n < a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let o of e)
      (o = t(o, ++a, e)) != null && (n < o || n === void 0 && o >= o) && (n = o);
  }
  return n;
}
function Kc(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n > a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let o of e)
      (o = t(o, ++a, e)) != null && (n > o || n === void 0 && o >= o) && (n = o);
  }
  return n;
}
function $T(e, t, n = qh) {
  if (!(!(a = e.length) || isNaN(t = +t))) {
    if (t <= 0 || a < 2) return +n(e[0], 0, e);
    if (t >= 1) return +n(e[a - 1], a - 1, e);
    var a, o = (a - 1) * t, r = Math.floor(o), i = +n(e[r], r, e), s = +n(e[r + 1], r + 1, e);
    return i + (s - i) * (o - r);
  }
}
function* TT(e) {
  for (const t of e)
    yield* t;
}
function AT(e) {
  return Array.from(TT(e));
}
function ET(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, r = new Array(o); ++a < o; )
    r[a] = e + a * n;
  return r;
}
function BT(e, t) {
  let n = 0;
  if (t === void 0)
    for (let a of e)
      (a = +a) && (n += a);
  else {
    let a = -1;
    for (let o of e)
      (o = +t(o, ++a, e)) && (n += o);
  }
  return n;
}
function MT(e, t, n) {
  var a = {}, o = a.noTrailing, r = o === void 0 ? !1 : o, i = a.noLeading, s = i === void 0 ? !1 : i, u = a.debounceMode, c = u === void 0 ? void 0 : u, d, f = !1, p = 0;
  function h() {
    d && clearTimeout(d);
  }
  function v(b) {
    var x = b || {}, S = x.upcomingOnly, C = S === void 0 ? !1 : S;
    h(), f = !C;
  }
  function m() {
    for (var b = arguments.length, x = new Array(b), S = 0; S < b; S++)
      x[S] = arguments[S];
    var C = this, T = Date.now() - p;
    if (f)
      return;
    function $() {
      p = Date.now(), t.apply(C, x);
    }
    function B() {
      d = void 0;
    }
    !s && c && !d && $(), h(), c === void 0 && T > e ? s ? (p = Date.now(), r || (d = setTimeout(c ? B : $, e))) : $() : r !== !0 && (d = setTimeout(c ? B : $, c === void 0 ? e - T : e));
  }
  return m.cancel = v, m;
}
var bn;
(function(e) {
  e.Left = "left", e.Right = "right", e.Auto = "auto";
})(bn || (bn = {}));
const ya = (e) => typeof e == "number", Wh = (e) => typeof e == "function", Vi = (e) => Array.isArray(e), OT = (e) => e instanceof Object, Kr = (e) => e.constructor.name !== "Function" && e.constructor.name !== "Object", jc = (e) => OT(e) && !Vi(e) && !Wh(e) && !Kr(e), Kn = (e, t, n = [], a = /* @__PURE__ */ new Set()) => {
  if (Array.isArray(e)) {
    if (!Array.isArray(t) || e.length !== t.length)
      return !1;
    if (a.has(e))
      return !0;
    a.add(e);
    for (let o = 0; o < e.length; o++)
      if (!Kn(e[o], t[o], n, a))
        return !1;
    return !0;
  }
  if (e instanceof Date && t instanceof Date)
    return e.getTime() === t.getTime();
  if (typeof e == "object" && e !== null && t !== null) {
    if (typeof t != "object")
      return !1;
    if (e === t)
      return !0;
    const o = Object.keys(e).filter((i) => !n.includes(i)), r = Object.keys(t).filter((i) => !n.includes(i));
    if (o.length !== r.length)
      return !1;
    if (a.has(e))
      return !0;
    a.add(e);
    for (const i of o)
      if (!Kn(e[i], t[i], n, a))
        return !1;
    return !0;
  }
  return e === t;
}, Js = (e) => e.flat(), jr = (e, t = /* @__PURE__ */ new Map()) => {
  if (typeof e != "object" || e === null)
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof Array) {
    const n = [];
    t.set(e, n);
    for (const a of e)
      n.push(t.has(a) ? t.get(a) : jr(a, t));
    return n;
  }
  if (Kr(e))
    return e;
  if (e instanceof Object) {
    const n = {};
    t.set(e, n);
    const a = e;
    return Object.keys(e).reduce((o, r) => (o[r] = t.has(a[r]) ? t.get(a[r]) : jr(a[r], t), o), n), n;
  }
  return e;
}, Ba = (e, t, n = /* @__PURE__ */ new Map()) => {
  if (!e || !t || e === t)
    return e;
  const a = Kr(e) ? e : jr(e);
  return n.has(t) ? n.get(t) : (n.set(t, a), Object.keys(t).forEach((o) => {
    o === "__proto__" || o === "constructor" || (jc(e[o]) && jc(t[o]) ? a[o] = Ba(e[o], t[o], n) : Kr(t) ? a[o] = t : a[o] = jr(t[o]));
  }), a);
}, Gc = (e, t, n) => MT(t, e);
function Su(e, t, n) {
  return Wh(t) ? t(e, n) : t;
}
function $u(e, t, n) {
  return Su(e, t, n);
}
function xn(e, t, n) {
  return Su(e, t, n);
}
function Xa(e) {
  return e.filter((t) => t && !ya(t));
}
function va(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function DT(e, ...t) {
  return e ? Kc(e, (a, o) => Kc(t, (r) => xn(a, r, o))) : void 0;
}
function PT(e, ...t) {
  return e ? Uc(e, (a, o) => Uc(t, (r) => xn(a, r, o))) : void 0;
}
function ms(e, ...t) {
  return [DT(e, ...t), PT(e, ...t)];
}
function Yc(e, t, n, a = bn.Auto) {
  if (e.length <= 1)
    return e[0];
  const r = e.map((u, c) => [u, c]).sort(([u, c], [d, f]) => xn(u, n, c) - xn(d, n, f)), i = r.map(([u, c]) => xn(u, n, c)), s = a === bn.Right ? yT(i, t, 0, e.length - 1) : Wo(i, t, 1, e.length);
  return a === bn.Right ? r[s][0] : a === bn.Left ? r[s - 1][0] : t - i[s - 1] > i[s] - t ? r[s][0] : r[s - 1][0];
}
function IT(e, t, n, a = !1) {
  if (!n)
    return [];
  const o = e.filter((r, i) => {
    const s = xn(r, n, i);
    return s >= t[0] && s <= t[1];
  });
  if (a) {
    if (o.length === 0) {
      const f = Yc(e, t[0], n, bn.Left), p = Yc(e, t[1], n, bn.Right);
      return [f, p].filter(Boolean);
    }
    const r = o[0], i = o[o.length - 1], s = e.findIndex((f) => f === r), u = e.findIndex((f) => f === i), c = Math.max(0, s - 1), d = Math.min(e.length - 1, u + 1);
    return e.slice(c, d + 1);
  }
  return o;
}
const RT = (e) => e == null ? [] : Array.isArray(e) ? e : [e];
var Vn = [], FT = function() {
  return Vn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, NT = function() {
  return Vn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Xc = "ResizeObserver loop completed with undelivered notifications.", LT = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Xc
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Xc), window.dispatchEvent(e);
}, _o;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(_o || (_o = {}));
var zn = function(e) {
  return Object.freeze(e);
}, VT = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, zn(this);
  }
  return e;
}(), Uh = function() {
  function e(t, n, a, o) {
    return this.x = t, this.y = n, this.width = a, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, zn(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, a = t.y, o = t.top, r = t.right, i = t.bottom, s = t.left, u = t.width, c = t.height;
    return { x: n, y: a, top: o, right: r, bottom: i, left: s, width: u, height: c };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Tu = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Kh = function(e) {
  if (Tu(e)) {
    var t = e.getBBox(), n = t.width, a = t.height;
    return !n && !a;
  }
  var o = e, r = o.offsetWidth, i = o.offsetHeight;
  return !(r || i || e.getClientRects().length);
}, Zc = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, zT = function(e) {
  switch (e.tagName) {
    case "INPUT":
      if (e.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, fo = typeof window < "u" ? window : {}, sr = /* @__PURE__ */ new WeakMap(), Jc = /auto|scroll/, qT = /^tb|vertical/, HT = /msie|trident/i.test(fo.navigator && fo.navigator.userAgent), Mt = function(e) {
  return parseFloat(e || "0");
}, ba = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new VT((n ? t : e) || 0, (n ? e : t) || 0);
}, Qc = zn({
  devicePixelContentBoxSize: ba(),
  borderBoxSize: ba(),
  contentBoxSize: ba(),
  contentRect: new Uh(0, 0, 0, 0)
}), jh = function(e, t) {
  if (t === void 0 && (t = !1), sr.has(e) && !t)
    return sr.get(e);
  if (Kh(e))
    return sr.set(e, Qc), Qc;
  var n = getComputedStyle(e), a = Tu(e) && e.ownerSVGElement && e.getBBox(), o = !HT && n.boxSizing === "border-box", r = qT.test(n.writingMode || ""), i = !a && Jc.test(n.overflowY || ""), s = !a && Jc.test(n.overflowX || ""), u = a ? 0 : Mt(n.paddingTop), c = a ? 0 : Mt(n.paddingRight), d = a ? 0 : Mt(n.paddingBottom), f = a ? 0 : Mt(n.paddingLeft), p = a ? 0 : Mt(n.borderTopWidth), h = a ? 0 : Mt(n.borderRightWidth), v = a ? 0 : Mt(n.borderBottomWidth), m = a ? 0 : Mt(n.borderLeftWidth), b = f + c, x = u + d, S = m + h, C = p + v, T = s ? e.offsetHeight - C - e.clientHeight : 0, $ = i ? e.offsetWidth - S - e.clientWidth : 0, B = o ? b + S : 0, A = o ? x + C : 0, R = a ? a.width : Mt(n.width) - B - $, L = a ? a.height : Mt(n.height) - A - T, D = R + b + $ + S, N = L + x + T + C, I = zn({
    devicePixelContentBoxSize: ba(Math.round(R * devicePixelRatio), Math.round(L * devicePixelRatio), r),
    borderBoxSize: ba(D, N, r),
    contentBoxSize: ba(R, L, r),
    contentRect: new Uh(f, u, R, L)
  });
  return sr.set(e, I), I;
}, Gh = function(e, t, n) {
  var a = jh(e, n), o = a.borderBoxSize, r = a.contentBoxSize, i = a.devicePixelContentBoxSize;
  switch (t) {
    case _o.DEVICE_PIXEL_CONTENT_BOX:
      return i;
    case _o.BORDER_BOX:
      return o;
    default:
      return r;
  }
}, WT = /* @__PURE__ */ function() {
  function e(t) {
    var n = jh(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = zn([n.borderBoxSize]), this.contentBoxSize = zn([n.contentBoxSize]), this.devicePixelContentBoxSize = zn([n.devicePixelContentBoxSize]);
  }
  return e;
}(), Yh = function(e) {
  if (Kh(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, UT = function() {
  var e = 1 / 0, t = [];
  Vn.forEach(function(i) {
    if (i.activeTargets.length !== 0) {
      var s = [];
      i.activeTargets.forEach(function(c) {
        var d = new WT(c.target), f = Yh(c.target);
        s.push(d), c.lastReportedSize = Gh(c.target, c.observedBox), f < e && (e = f);
      }), t.push(function() {
        i.callback.call(i.observer, s, i.observer);
      }), i.activeTargets.splice(0, i.activeTargets.length);
    }
  });
  for (var n = 0, a = t; n < a.length; n++) {
    var o = a[n];
    o();
  }
  return e;
}, ed = function(e) {
  Vn.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(o) {
      o.isActive() && (Yh(o.target) > e ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
}, KT = function() {
  var e = 0;
  for (ed(e); FT(); )
    e = UT(), ed(e);
  return NT() && LT(), e > 0;
}, gs, Xh = [], jT = function() {
  return Xh.splice(0).forEach(function(e) {
    return e();
  });
}, GT = function(e) {
  if (!gs) {
    var t = 0, n = document.createTextNode(""), a = { characterData: !0 };
    new MutationObserver(function() {
      return jT();
    }).observe(n, a), gs = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  Xh.push(e), gs();
}, YT = function(e) {
  GT(function() {
    requestAnimationFrame(e);
  });
}, xr = 0, XT = function() {
  return !!xr;
}, ZT = 250, JT = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, td = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], nd = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, ys = !1, QT = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = ZT), !ys) {
      ys = !0;
      var a = nd(t);
      YT(function() {
        var o = !1;
        try {
          o = KT();
        } finally {
          if (ys = !1, t = a - nd(), !XT())
            return;
          o ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, JT);
    };
    document.body ? n() : fo.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), td.forEach(function(n) {
      return fo.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), td.forEach(function(n) {
      return fo.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Qs = new QT(), ad = function(e) {
  !xr && e > 0 && Qs.start(), xr += e, !xr && Qs.stop();
}, eA = function(e) {
  return !Tu(e) && !zT(e) && getComputedStyle(e).display === "inline";
}, tA = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || _o.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Gh(this.target, this.observedBox, !0);
    return eA(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), nA = /* @__PURE__ */ function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), lr = /* @__PURE__ */ new WeakMap(), od = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, ur = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var a = new nA(t, n);
    lr.set(t, a);
  }, e.observe = function(t, n, a) {
    var o = lr.get(t), r = o.observationTargets.length === 0;
    od(o.observationTargets, n) < 0 && (r && Vn.push(o), o.observationTargets.push(new tA(n, a && a.box)), ad(1), Qs.schedule());
  }, e.unobserve = function(t, n) {
    var a = lr.get(t), o = od(a.observationTargets, n), r = a.observationTargets.length === 1;
    o >= 0 && (r && Vn.splice(Vn.indexOf(a), 1), a.observationTargets.splice(o, 1), ad(-1));
  }, e.disconnect = function(t) {
    var n = this, a = lr.get(t);
    a.observationTargets.slice().forEach(function(o) {
      return n.unobserve(t, o.target);
    }), a.activeTargets.splice(0, a.activeTargets.length);
  }, e;
}(), aA = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    ur.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Zc(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ur.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Zc(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ur.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    ur.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const oA = globalThis.ResizeObserver || aA, Zh = {
  duration: void 0,
  margin: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  padding: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  sizing: Ea.Fit,
  width: void 0,
  height: void 0,
  svgDefs: void 0,
  ariaLabel: void 0
};
class xo {
  constructor(t) {
    this._defaultConfig = Zh, this._isFirstRender = !0, this._renderAnimationFrameId = null, this._container = t;
    const n = kt(this._container);
    n.attr("role", "figure"), this.svg = n.append("svg").style("display", "block").attr("xmlns", "http://www.w3.org/2000/svg").attr("height", xo.DEFAULT_CONTAINER_HEIGHT).attr("aria-hidden", !0), this._svgDefs = this.svg.append("defs"), this._svgDefsExternal = this.svg.append("defs"), this.element = this.svg.node();
  }
  updateContainer(t) {
    var n;
    this.prevConfig = this.config, this.config = Ba(this._defaultConfig, t), (t == null ? void 0 : t.svgDefs) !== ((n = this.prevConfig) === null || n === void 0 ? void 0 : n.svgDefs) && (this._svgDefsExternal.selectAll("*").remove(), this._svgDefsExternal.html(t.svgDefs));
  }
  // The `_preRender` step should be used to perform some actions before rendering.
  // For example, calculating scales, setting component sizes, etc ...
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _preRender() {
  }
  // The `_render` step should be used to perform the actual rendering
  _render(t) {
    const { config: n } = this;
    kt(this._container).attr("aria-label", n.ariaLabel), this._isFirstRender = !1;
  }
  // Warning: Some Containers (i.e. Single Container) may override this method, so if you introduce any changes here,
  // make sure to check that other containers didn't break after them.
  render(t = this.config.duration) {
    const n = this.config.width || this.containerWidth, a = this.config.height || this.containerHeight;
    this.svg.attr("width", n).attr("height", a), this._resizeObserver || this._setUpResizeObserver(), cancelAnimationFrame(this._renderAnimationFrameId), this._renderAnimationFrameId = requestAnimationFrame(() => {
      this._preRender(), this._render(t);
    });
  }
  get containerWidth() {
    return this.config.width ? this.element.clientWidth : this._container.clientWidth || this._container.getBoundingClientRect().width;
  }
  get containerHeight() {
    return this.config.height ? this.element.clientHeight : this._container.clientHeight || this._container.getBoundingClientRect().height || xo.DEFAULT_CONTAINER_HEIGHT;
  }
  get width() {
    return va(this.containerWidth - this.config.margin.left - this.config.margin.right, 0, Number.POSITIVE_INFINITY);
  }
  get height() {
    return va(this.containerHeight - this.config.margin.top - this.config.margin.bottom, 0, Number.POSITIVE_INFINITY);
  }
  _removeAllChildren() {
    for (; this.element.firstChild; )
      this.element.removeChild(this.element.firstChild);
  }
  _onResize() {
    const { config: t } = this;
    (t.sizing === Ea.Fit || t.sizing === Ea.FitWidth) && this.render(0);
  }
  _setUpResizeObserver() {
    if (this._resizeObserver)
      return;
    const t = this._container.getBoundingClientRect();
    this._containerSize = { width: t.width, height: t.height }, this._resizeObserver = new oA((n, a) => {
      cancelAnimationFrame(this._resizeObserverAnimationFrameId), this._resizeObserverAnimationFrameId = requestAnimationFrame(() => {
        const o = this._container.getBoundingClientRect(), r = { width: o.width, height: o.height };
        !Kn(this._containerSize, r) && r.width && r.height && (this._containerSize = r, this._onResize());
      });
    }), this._resizeObserver.observe(this._container);
  }
  destroy() {
    var t;
    cancelAnimationFrame(this._renderAnimationFrameId), cancelAnimationFrame(this._resizeObserverAnimationFrameId), (t = this._resizeObserver) === null || t === void 0 || t.disconnect(), this.svg.remove();
  }
}
xo.DEFAULT_CONTAINER_HEIGHT = 300;
function rA(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function iA(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var sA = /* @__PURE__ */ function() {
  function e(n) {
    var a = this;
    this._insertTag = function(o) {
      var r;
      a.tags.length === 0 ? a.insertionPoint ? r = a.insertionPoint.nextSibling : a.prepend ? r = a.container.firstChild : r = a.before : r = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(o, r), a.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, t.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(iA(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var r = rA(o);
      try {
        r.insertRule(a, r.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(a));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(a) {
      var o;
      return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Ke = "-ms-", Gr = "-moz-", Ce = "-webkit-", Jh = "comm", Au = "rule", Eu = "decl", lA = "@import", Qh = "@keyframes", uA = "@layer", cA = Math.abs, zi = String.fromCharCode, dA = Object.assign;
function fA(e, t) {
  return We(e, 0) ^ 45 ? (((t << 2 ^ We(e, 0)) << 2 ^ We(e, 1)) << 2 ^ We(e, 2)) << 2 ^ We(e, 3) : 0;
}
function ev(e) {
  return e.trim();
}
function pA(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ke(e, t, n) {
  return e.replace(t, n);
}
function el(e, t) {
  return e.indexOf(t);
}
function We(e, t) {
  return e.charCodeAt(t) | 0;
}
function wo(e, t, n) {
  return e.slice(t, n);
}
function Dt(e) {
  return e.length;
}
function Bu(e) {
  return e.length;
}
function cr(e, t) {
  return t.push(e), e;
}
function hA(e, t) {
  return e.map(t).join("");
}
var qi = 1, Ma = 1, tv = 0, tt = 0, Re = 0, Ua = "";
function Hi(e, t, n, a, o, r, i) {
  return { value: e, root: t, parent: n, type: a, props: o, children: r, line: qi, column: Ma, length: i, return: "" };
}
function Za(e, t) {
  return dA(Hi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function vA() {
  return Re;
}
function mA() {
  return Re = tt > 0 ? We(Ua, --tt) : 0, Ma--, Re === 10 && (Ma = 1, qi--), Re;
}
function ct() {
  return Re = tt < tv ? We(Ua, tt++) : 0, Ma++, Re === 10 && (Ma = 1, qi++), Re;
}
function Ft() {
  return We(Ua, tt);
}
function wr() {
  return tt;
}
function Uo(e, t) {
  return wo(Ua, e, t);
}
function Co(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function nv(e) {
  return qi = Ma = 1, tv = Dt(Ua = e), tt = 0, [];
}
function av(e) {
  return Ua = "", e;
}
function Cr(e) {
  return ev(Uo(tt - 1, tl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function gA(e) {
  for (; (Re = Ft()) && Re < 33; )
    ct();
  return Co(e) > 2 || Co(Re) > 3 ? "" : " ";
}
function yA(e, t) {
  for (; --t && ct() && !(Re < 48 || Re > 102 || Re > 57 && Re < 65 || Re > 70 && Re < 97); )
    ;
  return Uo(e, wr() + (t < 6 && Ft() == 32 && ct() == 32));
}
function tl(e) {
  for (; ct(); )
    switch (Re) {
      case e:
        return tt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && tl(Re);
        break;
      case 40:
        e === 41 && tl(e);
        break;
      case 92:
        ct();
        break;
    }
  return tt;
}
function bA(e, t) {
  for (; ct() && e + Re !== 57; )
    if (e + Re === 84 && Ft() === 47)
      break;
  return "/*" + Uo(t, tt - 1) + "*" + zi(e === 47 ? e : ct());
}
function _A(e) {
  for (; !Co(Ft()); )
    ct();
  return Uo(e, tt);
}
function xA(e) {
  return av(kr("", null, null, null, [""], e = nv(e), 0, [0], e));
}
function kr(e, t, n, a, o, r, i, s, u) {
  for (var c = 0, d = 0, f = i, p = 0, h = 0, v = 0, m = 1, b = 1, x = 1, S = 0, C = "", T = o, $ = r, B = a, A = C; b; )
    switch (v = S, S = ct()) {
      case 40:
        if (v != 108 && We(A, f - 1) == 58) {
          el(A += ke(Cr(S), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += Cr(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += gA(v);
        break;
      case 92:
        A += yA(wr() - 1, 7);
        continue;
      case 47:
        switch (Ft()) {
          case 42:
          case 47:
            cr(wA(bA(ct(), wr()), t, n), u);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * m:
        s[c++] = Dt(A) * x;
      case 125 * m:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            b = 0;
          case 59 + d:
            x == -1 && (A = ke(A, /\f/g, "")), h > 0 && Dt(A) - f && cr(h > 32 ? id(A + ";", a, n, f - 1) : id(ke(A, " ", "") + ";", a, n, f - 2), u);
            break;
          case 59:
            A += ";";
          default:
            if (cr(B = rd(A, t, n, c, d, o, s, C, T = [], $ = [], f), r), S === 123)
              if (d === 0)
                kr(A, t, B, B, T, r, f, s, $);
              else
                switch (p === 99 && We(A, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    kr(e, B, B, a && cr(rd(e, B, B, 0, 0, o, s, C, o, T = [], f), $), o, $, f, s, a ? T : $);
                    break;
                  default:
                    kr(A, B, B, B, [""], $, 0, s, $);
                }
        }
        c = d = h = 0, m = x = 1, C = A = "", f = i;
        break;
      case 58:
        f = 1 + Dt(A), h = v;
      default:
        if (m < 1) {
          if (S == 123)
            --m;
          else if (S == 125 && m++ == 0 && mA() == 125)
            continue;
        }
        switch (A += zi(S), S * m) {
          case 38:
            x = d > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            s[c++] = (Dt(A) - 1) * x, x = 1;
            break;
          case 64:
            Ft() === 45 && (A += Cr(ct())), p = Ft(), d = f = Dt(C = A += _A(wr())), S++;
            break;
          case 45:
            v === 45 && Dt(A) == 2 && (m = 0);
        }
    }
  return r;
}
function rd(e, t, n, a, o, r, i, s, u, c, d) {
  for (var f = o - 1, p = o === 0 ? r : [""], h = Bu(p), v = 0, m = 0, b = 0; v < a; ++v)
    for (var x = 0, S = wo(e, f + 1, f = cA(m = i[v])), C = e; x < h; ++x)
      (C = ev(m > 0 ? p[x] + " " + S : ke(S, /&\f/g, p[x]))) && (u[b++] = C);
  return Hi(e, t, n, o === 0 ? Au : s, u, c, d);
}
function wA(e, t, n) {
  return Hi(e, t, n, Jh, zi(vA()), wo(e, 2, -2), 0);
}
function id(e, t, n, a) {
  return Hi(e, t, n, Eu, wo(e, 0, a), wo(e, a + 1, -1), a);
}
function _a(e, t) {
  for (var n = "", a = Bu(e), o = 0; o < a; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function CA(e, t, n, a) {
  switch (e.type) {
    case uA:
      if (e.children.length) break;
    case lA:
    case Eu:
      return e.return = e.return || e.value;
    case Jh:
      return "";
    case Qh:
      return e.return = e.value + "{" + _a(e.children, a) + "}";
    case Au:
      e.value = e.props.join(",");
  }
  return Dt(n = _a(e.children, a)) ? e.return = e.value + "{" + n + "}" : "";
}
function kA(e) {
  var t = Bu(e);
  return function(n, a, o, r) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](n, a, o, r) || "";
    return i;
  };
}
function SA(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function $A(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var TA = function(t, n, a) {
  for (var o = 0, r = 0; o = r, r = Ft(), o === 38 && r === 12 && (n[a] = 1), !Co(r); )
    ct();
  return Uo(t, tt);
}, AA = function(t, n) {
  var a = -1, o = 44;
  do
    switch (Co(o)) {
      case 0:
        o === 38 && Ft() === 12 && (n[a] = 1), t[a] += TA(tt - 1, n, a);
        break;
      case 2:
        t[a] += Cr(o);
        break;
      case 4:
        if (o === 44) {
          t[++a] = Ft() === 58 ? "&\f" : "", n[a] = t[a].length;
          break;
        }
      default:
        t[a] += zi(o);
    }
  while (o = ct());
  return t;
}, EA = function(t, n) {
  return av(AA(nv(t), n));
}, sd = /* @__PURE__ */ new WeakMap(), BA = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, a = t.parent, o = t.column === a.column && t.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !sd.get(a)) && !o) {
      sd.set(t, !0);
      for (var r = [], i = EA(n, r), s = a.props, u = 0, c = 0; u < i.length; u++)
        for (var d = 0; d < s.length; d++, c++)
          t.props[c] = r[u] ? i[u].replace(/&\f/g, s[d]) : s[d] + " " + i[u];
    }
  }
}, MA = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ov(e, t) {
  switch (fA(e, t)) {
    case 5103:
      return Ce + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ce + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ce + e + Gr + e + Ke + e + e;
    case 6828:
    case 4268:
      return Ce + e + Ke + e + e;
    case 6165:
      return Ce + e + Ke + "flex-" + e + e;
    case 5187:
      return Ce + e + ke(e, /(\w+).+(:[^]+)/, Ce + "box-$1$2" + Ke + "flex-$1$2") + e;
    case 5443:
      return Ce + e + Ke + "flex-item-" + ke(e, /flex-|-self/, "") + e;
    case 4675:
      return Ce + e + Ke + "flex-line-pack" + ke(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ce + e + Ke + ke(e, "shrink", "negative") + e;
    case 5292:
      return Ce + e + Ke + ke(e, "basis", "preferred-size") + e;
    case 6060:
      return Ce + "box-" + ke(e, "-grow", "") + Ce + e + Ke + ke(e, "grow", "positive") + e;
    case 4554:
      return Ce + ke(e, /([^-])(transform)/g, "$1" + Ce + "$2") + e;
    case 6187:
      return ke(ke(ke(e, /(zoom-|grab)/, Ce + "$1"), /(image-set)/, Ce + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ke(e, /(image-set\([^]*)/, Ce + "$1$`$1");
    case 4968:
      return ke(ke(e, /(.+:)(flex-)?(.*)/, Ce + "box-pack:$3" + Ke + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ce + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ke(e, /(.+)-inline(.+)/, Ce + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Dt(e) - 1 - t > 6) switch (We(e, t + 1)) {
        case 109:
          if (We(e, t + 4) !== 45) break;
        case 102:
          return ke(e, /(.+:)(.+)-([^]+)/, "$1" + Ce + "$2-$3$1" + Gr + (We(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~el(e, "stretch") ? ov(ke(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (We(e, t + 1) !== 115) break;
    case 6444:
      switch (We(e, Dt(e) - 3 - (~el(e, "!important") && 10))) {
        case 107:
          return ke(e, ":", ":" + Ce) + e;
        case 101:
          return ke(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ce + (We(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ce + "$2$3$1" + Ke + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (We(e, t + 11)) {
        case 114:
          return Ce + e + Ke + ke(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ce + e + Ke + ke(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ce + e + Ke + ke(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ce + e + Ke + e + e;
  }
  return e;
}
var OA = function(t, n, a, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Eu:
      t.return = ov(t.value, t.length);
      break;
    case Qh:
      return _a([Za(t, {
        value: ke(t.value, "@", "@" + Ce)
      })], o);
    case Au:
      if (t.length) return hA(t.props, function(r) {
        switch (pA(r, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return _a([Za(t, {
              props: [ke(r, /:(read-\w+)/, ":" + Gr + "$1")]
            })], o);
          case "::placeholder":
            return _a([Za(t, {
              props: [ke(r, /:(plac\w+)/, ":" + Ce + "input-$1")]
            }), Za(t, {
              props: [ke(r, /:(plac\w+)/, ":" + Gr + "$1")]
            }), Za(t, {
              props: [ke(r, /:(plac\w+)/, Ke + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, DA = [OA], PA = function(t) {
  var n = t.key;
  if (n === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(m) {
      var b = m.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || DA, r = {}, i, s = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(m) {
      for (var b = m.getAttribute("data-emotion").split(" "), x = 1; x < b.length; x++)
        r[b[x]] = !0;
      s.push(m);
    }
  );
  var u, c = [BA, MA];
  {
    var d, f = [CA, SA(function(m) {
      d.insert(m);
    })], p = kA(c.concat(o, f)), h = function(b) {
      return _a(xA(b), p);
    };
    u = function(b, x, S, C) {
      d = S, h(b ? b + "{" + x.styles + "}" : x.styles), C && (v.inserted[x.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new sA({
      key: n,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: r,
    registered: {},
    insert: u
  };
  return v.sheet.hydrate(s), v;
};
function IA(e) {
  for (var t = 0, n, a = 0, o = e.length; o >= 4; ++a, o -= 4)
    n = e.charCodeAt(a) & 255 | (e.charCodeAt(++a) & 255) << 8 | (e.charCodeAt(++a) & 255) << 16 | (e.charCodeAt(++a) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(a + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(a + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(a) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var RA = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, FA = /[A-Z]|^ms/g, NA = /_EMO_([^_]+?)_([^]*?)_EMO_/g, rv = function(t) {
  return t.charCodeAt(1) === 45;
}, ld = function(t) {
  return t != null && typeof t != "boolean";
}, bs = /* @__PURE__ */ $A(function(e) {
  return rv(e) ? e : e.replace(FA, "-$&").toLowerCase();
}), ud = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(NA, function(a, o, r) {
          return _n = {
            name: o,
            styles: r,
            next: _n
          }, o;
        });
  }
  return RA[t] !== 1 && !rv(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Yr(e, t, n) {
  if (n == null)
    return "";
  var a = n;
  if (a.__emotion_styles !== void 0)
    return a;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return _n = {
          name: o.name,
          styles: o.styles,
          next: _n
        }, o.name;
      var r = n;
      if (r.styles !== void 0) {
        var i = r.next;
        if (i !== void 0)
          for (; i !== void 0; )
            _n = {
              name: i.name,
              styles: i.styles,
              next: _n
            }, i = i.next;
        var s = r.styles + ";";
        return s;
      }
      return LA(e, t, n);
    }
  }
  var u = n;
  if (t == null)
    return u;
  var c = t[u];
  return c !== void 0 ? c : u;
}
function LA(e, t, n) {
  var a = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      a += Yr(e, t, n[o]) + ";";
  else
    for (var r in n) {
      var i = n[r];
      if (typeof i != "object") {
        var s = i;
        t != null && t[s] !== void 0 ? a += r + "{" + t[s] + "}" : ld(s) && (a += bs(r) + ":" + ud(r, s) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var u = 0; u < i.length; u++)
          ld(i[u]) && (a += bs(r) + ":" + ud(r, i[u]) + ";");
      else {
        var c = Yr(e, t, i);
        switch (r) {
          case "animation":
          case "animationName": {
            a += bs(r) + ":" + c + ";";
            break;
          }
          default:
            a += r + "{" + c + "}";
        }
      }
    }
  return a;
}
var cd = /label:\s*([^\s;{]+)\s*(;|$)/g, _n;
function _s(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var a = !0, o = "";
  _n = void 0;
  var r = e[0];
  if (r == null || r.raw === void 0)
    a = !1, o += Yr(n, t, r);
  else {
    var i = r;
    o += i[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += Yr(n, t, e[s]), a) {
      var u = r;
      o += u[s];
    }
  cd.lastIndex = 0;
  for (var c = "", d; (d = cd.exec(o)) !== null; )
    c += "-" + d[1];
  var f = IA(o) + c;
  return {
    name: f,
    styles: o,
    next: _n
  };
}
function iv(e, t, n) {
  var a = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (a += o + " ");
  }), a;
}
var VA = function(t, n, a) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, zA = function(t, n, a) {
  VA(t, n);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var r = n;
    do
      t.insert(n === r ? "." + o : "", r, t.sheet, !0), r = r.next;
    while (r !== void 0);
  }
};
function dd(e, t) {
  if (e.inserted[t.name] === void 0)
    return e.insert("", t, e.sheet, !0);
}
function fd(e, t, n) {
  var a = [], o = iv(e, a, n);
  return a.length < 2 ? n : o + t(a);
}
var qA = function(t) {
  var n = PA(t);
  n.sheet.speedy = function(s) {
    this.isSpeedy = s;
  }, n.compat = !0;
  var a = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
      c[d] = arguments[d];
    var f = _s(c, n.registered, void 0);
    return zA(n, f), n.key + "-" + f.name;
  }, o = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
      c[d] = arguments[d];
    var f = _s(c, n.registered), p = "animation-" + f.name;
    return dd(n, {
      name: f.name,
      styles: "@keyframes " + p + "{" + f.styles + "}"
    }), p;
  }, r = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
      c[d] = arguments[d];
    var f = _s(c, n.registered);
    dd(n, f);
  }, i = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
      c[d] = arguments[d];
    return fd(n.registered, a, HA(c));
  };
  return {
    css: a,
    cx: i,
    injectGlobal: r,
    keyframes: o,
    hydrate: function(u) {
      u.forEach(function(c) {
        n.inserted[c] = !0;
      });
    },
    flush: function() {
      n.registered = {}, n.inserted = {}, n.sheet.flush();
    },
    sheet: n.sheet,
    cache: n,
    getRegisteredStyles: iv.bind(null, n.registered),
    merge: fd.bind(null, n.registered, a)
  };
}, HA = function e(t) {
  for (var n = "", a = 0; a < t.length; a++) {
    var o = t[a];
    if (o != null) {
      var r = void 0;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o))
            r = e(o);
          else {
            r = "";
            for (var i in o)
              o[i] && i && (r && (r += " "), r += i);
          }
          break;
        }
        default:
          r = o;
      }
      r && (n && (n += " "), n += r);
    }
  }
  return n;
}, sv = qA({
  key: "css"
}), Wi = sv.injectGlobal, Oe = sv.css, WA = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var UA = function(t, n) {
  n || (n = [0, ""]), t = String(t);
  var a = parseFloat(t, 10);
  return n[0] = a, n[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "", n;
}, uv = UA, KA = Mu, Ja = cv("in", document.body);
function nl(e, t) {
  var n = uv(getComputedStyle(e).getPropertyValue(t));
  return n[0] * Mu(n[1], e);
}
function cv(e, t) {
  var n = document.createElement("div");
  n.style.height = "128" + e, t.appendChild(n);
  var a = nl(n, "height") / 128;
  return t.removeChild(n), a;
}
function Mu(e, t) {
  if (!e) return null;
  switch (t = t || document.body, e = (e + "" || "px").trim().toLowerCase(), (t === window || t === document) && (t = document.body), e) {
    case "%":
      return t.clientHeight / 100;
    case "ch":
    case "ex":
      return cv(e, t);
    case "em":
      return nl(t, "font-size");
    case "rem":
      return nl(document.body, "font-size");
    case "vw":
      return window.innerWidth / 100;
    case "vh":
      return window.innerHeight / 100;
    case "vmin":
      return Math.min(window.innerWidth, window.innerHeight) / 100;
    case "vmax":
      return Math.max(window.innerWidth, window.innerHeight) / 100;
    case "in":
      return Ja;
    case "cm":
      return Ja / 2.54;
    case "mm":
      return Ja / 25.4;
    case "pt":
      return Ja / 72;
    case "pc":
      return Ja / 6;
    case "px":
      return 1;
  }
  var n = uv(e);
  if (!isNaN(n[0]) && n[1]) {
    var a = Mu(n[1], t);
    return typeof a == "number" ? n[0] * a : null;
  }
  return null;
}
const al = /* @__PURE__ */ lv(KA);
function dv() {
  const e = () => Math.floor((1 + crypto.getRandomValues(new Uint32Array(1))[0]) * 65536).toString(16).substring(1);
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}
function jA(e, t) {
  const n = e.substr(4, e.length - 5);
  return getComputedStyle(t).getPropertyValue(n);
}
function GA(e, t, n = 0) {
  const [a, o, r, i] = [
    e.x + n,
    e.y + e.height - 2 * n,
    e.x + e.width - 2 * n,
    e.y + n
  ], [s, u, c, d] = [
    t.x + n,
    t.y + t.height - 2 * n,
    t.x + t.width - 2 * n,
    t.y + n
  ];
  return !(o < d || u < i || r < s || c < a);
}
function Ou(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function fv(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function Ko() {
}
var ko = 0.7, Xr = 1 / ko, xa = "\\s*([+-]?\\d+)\\s*", So = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", YA = /^#([0-9a-f]{3,8})$/, XA = new RegExp(`^rgb\\(${xa},${xa},${xa}\\)$`), ZA = new RegExp(`^rgb\\(${Nt},${Nt},${Nt}\\)$`), JA = new RegExp(`^rgba\\(${xa},${xa},${xa},${So}\\)$`), QA = new RegExp(`^rgba\\(${Nt},${Nt},${Nt},${So}\\)$`), eE = new RegExp(`^hsl\\(${So},${Nt},${Nt}\\)$`), tE = new RegExp(`^hsla\\(${So},${Nt},${Nt},${So}\\)$`), pd = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ou(Ko, jn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: hd,
  // Deprecated! Use color.formatHex.
  formatHex: hd,
  formatHex8: nE,
  formatHsl: aE,
  formatRgb: vd,
  toString: vd
});
function hd() {
  return this.rgb().formatHex();
}
function nE() {
  return this.rgb().formatHex8();
}
function aE() {
  return pv(this).formatHsl();
}
function vd() {
  return this.rgb().formatRgb();
}
function jn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = YA.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? md(t) : n === 3 ? new Je(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? dr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? dr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = XA.exec(e)) ? new Je(t[1], t[2], t[3], 1) : (t = ZA.exec(e)) ? new Je(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = JA.exec(e)) ? dr(t[1], t[2], t[3], t[4]) : (t = QA.exec(e)) ? dr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = eE.exec(e)) ? bd(t[1], t[2] / 100, t[3] / 100, 1) : (t = tE.exec(e)) ? bd(t[1], t[2] / 100, t[3] / 100, t[4]) : pd.hasOwnProperty(e) ? md(pd[e]) : e === "transparent" ? new Je(NaN, NaN, NaN, 0) : null;
}
function md(e) {
  return new Je(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function dr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new Je(e, t, n, a);
}
function oE(e) {
  return e instanceof Ko || (e = jn(e)), e ? (e = e.rgb(), new Je(e.r, e.g, e.b, e.opacity)) : new Je();
}
function ol(e, t, n, a) {
  return arguments.length === 1 ? oE(e) : new Je(e, t, n, a ?? 1);
}
function Je(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Ou(Je, ol, fv(Ko, {
  brighter(e) {
    return e = e == null ? Xr : Math.pow(Xr, e), new Je(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ko : Math.pow(ko, e), new Je(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Je(qn(this.r), qn(this.g), qn(this.b), Zr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: gd,
  // Deprecated! Use color.formatHex.
  formatHex: gd,
  formatHex8: rE,
  formatRgb: yd,
  toString: yd
}));
function gd() {
  return `#${Rn(this.r)}${Rn(this.g)}${Rn(this.b)}`;
}
function rE() {
  return `#${Rn(this.r)}${Rn(this.g)}${Rn(this.b)}${Rn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function yd() {
  const e = Zr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${qn(this.r)}, ${qn(this.g)}, ${qn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Zr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function qn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Rn(e) {
  return e = qn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function bd(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ct(e, t, n, a);
}
function pv(e) {
  if (e instanceof Ct) return new Ct(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ko || (e = jn(e)), !e) return new Ct();
  if (e instanceof Ct) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), r = Math.max(t, n, a), i = NaN, s = r - o, u = (r + o) / 2;
  return s ? (t === r ? i = (n - a) / s + (n < a) * 6 : n === r ? i = (a - t) / s + 2 : i = (t - n) / s + 4, s /= u < 0.5 ? r + o : 2 - r - o, i *= 60) : s = u > 0 && u < 1 ? 0 : i, new Ct(i, s, u, e.opacity);
}
function Du(e, t, n, a) {
  return arguments.length === 1 ? pv(e) : new Ct(e, t, n, a ?? 1);
}
function Ct(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Ou(Ct, Du, fv(Ko, {
  brighter(e) {
    return e = e == null ? Xr : Math.pow(Xr, e), new Ct(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ko : Math.pow(ko, e), new Ct(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new Je(
      xs(e >= 240 ? e - 240 : e + 120, o, a),
      xs(e, o, a),
      xs(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Ct(_d(this.h), fr(this.s), fr(this.l), Zr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Zr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${_d(this.h)}, ${fr(this.s) * 100}%, ${fr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function _d(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function fr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function xs(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ao = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS) || ["#4D8CFD", "#FF6B7E", "#F4B83E", "#A6CC74", "#00C19A", "#6859BE"], iE = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS_DARK) || ["#4D8CFD", "#FF6B7E", "#FFC16D", "#A6CC74", "#00C19A", "#7887E0"], gn = (e) => `--vis-${ya(e) ? `color${e % ao.length}` : e}`;
function sE(e, t = 0.4) {
  const n = Du(e);
  return n.l = n.l * (1 + t), n.formatHex();
}
function lE(e, t = 0.4, n = 0.6) {
  const a = Du(e);
  return a.s = a.s * (1 - n), a.l = a.l * (1 - t), a.formatHex();
}
const $o = 10, rl = [
  { id: "stripes-diagonal", svg: '<path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#000"/>' },
  { id: "dots", svg: '<path d="m0-1.5a1 1 0 010 3m10-3a1 1 0 000 3M5 3.5a1 1 0 010 3 1 1 0 010-3M0 8.5 a1 1 0 010 3m10-3a1 1 0 000 3" fill"#000"/>' },
  { id: "stripes-vertical", svg: '<path d="M 5,-1 L5,11" stroke="#000"/>' },
  { id: "crosshatch", svg: '<path d="M0 0L10 10ZM10 0L0 10Z" stroke="#000"/>' },
  { id: "waves", svg: '<path d="M0 4Q2.5 1 5 4 7.5 7 10 4v2Q7.5 9 5 6 2.5 3 0 6Z" fill="#000"/>' },
  { id: "circles", svg: '<circle cx="5" cy="5" r="3" stroke="#000" fill="#fff"/>' }
], il = [
  { id: "circle", marker: '<circle cx="5" cy="5" r="5"/>', dashArray: [] },
  { id: "triangle", marker: '<path d="M5,0 L10,9 L0,9Z">', dashArray: [9, 1] },
  { id: "diamond", marker: '<path d="M 0 5 L5 0 L 10 5 L 5 10 L 0 5Z">', dashArray: [2] },
  { id: "arrow", marker: '<path d="M4 0 0 0 6 5 0 10 4 10 10 5Z">', dashArray: [2, 3, 8, 3] },
  { id: "square", marker: '<rect x="1" y="1" width="8" height="8"/>', dashArray: [6] },
  { id: "star", marker: '<path d="m2 9 3-9 3 9L0 3h10Z"/>', dashArray: [1, 6] }
];
function yn(e) {
  return `vis-${`pattern-${e.svg ? "fill" : "marker"}`}-${e.id}`;
}
const uE = (e) => `<mask id="${yn(e)}">
    <pattern id="${e.id}" viewBox="0 0 10 10" width="${$o}" height="${$o}" patternUnits="userSpaceOnUse">
      <rect width="100%" height="100%" fill="#fff"/>
      ${e.svg}
    </pattern>
    <rect x="-50%" y="-50%" width="200%" height="200%" fill="url(#${e.id})"/>
  </mask>`, cE = (e, t) => `<marker id="${yn(e)}"
    fill="var(${gn(t)})"
    markerUnits="userSpaceOnUse"
    refX="5"
    refY="5"
    markerWidth="${$o}"
    markerHeight="${$o}">
    ${e.marker}
  </marker>`;
function dE() {
  const e = rl.map(uE).concat(il.map(cE)).join(""), t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  t.setAttribute("height", "100%"), t.setAttribute("width", "100%"), t.style.position = "fixed", t.style.zIndex = "-99999999", t.innerHTML = `<defs>${e}</defs>`, document.body.appendChild(t);
}
typeof window < "u" && dE();
const hv = (globalThis == null ? void 0 : globalThis.UNOVIS_FONT_W2H_RATIO_DEFAULT) || 0.5, vv = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_SEPARATOR_DEFAULT) || [" ", "-", ".", ","], mv = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_HYPHEN_CHARACTER_DEFAULT) || "-", po = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_DEFAULT) || {
  // If you change these defaults, don't forget to update the values in the `UnovisText` type in `types/text.ts`
  text: "",
  fontSize: 12,
  fontFamily: "var(--vis-font-family)",
  lineHeight: 1.25,
  marginTop: 0,
  marginBottom: 0
};
Wi`
  :root {
    label: vis-root-styles;
    --vis-font-family: Inter, Arial, "Helvetica Neue", Helvetica, sans-serif;
    --vis-font-wh-ratio: ${hv};
    --vis-color-main: var(${gn(0)});
    --vis-color-main-light: ${sE(ao[0])};
    --vis-color-main-dark: ${lE(ao[0])};
    --vis-color-grey: #2a2a2a;
    ${ao.map((e, t) => `${gn(t)}: ${e};`)}
    ${iE.map((e, t) => `--vis-dark-color${t}: ${e};`)}
    ${rl.map((e, t) => `
      --${yn(e)}: url(#${yn(e)});
      --vis-pattern-fill${t}: var(--${yn(e)});
    `)}
    ${il.map((e, t) => {
  var n;
  return `
      --${yn(e)}: url(#${yn(e)});
      --vis-pattern-marker${t}: var(--${yn(e)});
      --vis-pattern-dasharray${t}: ${(n = e.dashArray) === null || n === void 0 ? void 0 : n.join(" ")};
    `;
})}

    body.theme-dark {
      ${ao.map((e, t) => `${gn(t)}: var(--vis-dark-color${t});`)}
    }

    body.theme-patterns {
      ${rl.map((e, t) => `path[style*="fill: var(${gn(t)})"]  {
        mask: var(--vis-pattern-fill${t});
      }`)}
      ${il.map((e, t) => `
      path[stroke="var(${gn(t)})"]:not([style*="fill"]),
      path[style*="stroke: var(${gn(t)})"]:not([style*="fill"]) {
        marker: var(--vis-pattern-marker${t});
        stroke-dasharray: var(--vis-pattern-dasharray${t});
      }
    `)}
}
`;
function gv(e = window == null ? void 0 : window.document.body) {
  return e ? +jA("var(--vis-font-wh-ratio)", e) : hv;
}
var fE = { value: () => {
} };
function yv() {
  for (var e = 0, t = arguments.length, n = {}, a; e < t; ++e) {
    if (!(a = arguments[e] + "") || a in n || /[\s.]/.test(a)) throw new Error("illegal type: " + a);
    n[a] = [];
  }
  return new Sr(n);
}
function Sr(e) {
  this._ = e;
}
function pE(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var a = "", o = n.indexOf(".");
    if (o >= 0 && (a = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: a };
  });
}
Sr.prototype = yv.prototype = {
  constructor: Sr,
  on: function(e, t) {
    var n = this._, a = pE(e + "", n), o, r = -1, i = a.length;
    if (arguments.length < 2) {
      for (; ++r < i; ) if ((o = (e = a[r]).type) && (o = hE(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++r < i; )
      if (o = (e = a[r]).type) n[o] = xd(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = xd(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Sr(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), a = 0, o, r; a < o; ++a) n[a] = arguments[a + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (r = this._[e], a = 0, o = r.length; a < o; ++a) r[a].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var a = this._[e], o = 0, r = a.length; o < r; ++o) a[o].value.apply(t, n);
  }
};
function hE(e, t) {
  for (var n = 0, a = e.length, o; n < a; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function xd(e, t, n) {
  for (var a = 0, o = e.length; a < o; ++a)
    if (e[a].name === t) {
      e[a] = fE, e = e.slice(0, a).concat(e.slice(a + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Oa = 0, oo = 0, Qa = 0, bv = 1e3, Jr, ro, Qr = 0, Gn = 0, Ui = 0, To = typeof performance == "object" && performance.now ? performance : Date, _v = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Pu() {
  return Gn || (_v(vE), Gn = To.now() + Ui);
}
function vE() {
  Gn = 0;
}
function ei() {
  this._call = this._time = this._next = null;
}
ei.prototype = xv.prototype = {
  constructor: ei,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Pu() : +n) + (t == null ? 0 : +t), !this._next && ro !== this && (ro ? ro._next = this : Jr = this, ro = this), this._call = e, this._time = n, sl();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, sl());
  }
};
function xv(e, t, n) {
  var a = new ei();
  return a.restart(e, t, n), a;
}
function mE() {
  Pu(), ++Oa;
  for (var e = Jr, t; e; )
    (t = Gn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Oa;
}
function wd() {
  Gn = (Qr = To.now()) + Ui, Oa = oo = 0;
  try {
    mE();
  } finally {
    Oa = 0, yE(), Gn = 0;
  }
}
function gE() {
  var e = To.now(), t = e - Qr;
  t > bv && (Ui -= t, Qr = e);
}
function yE() {
  for (var e, t = Jr, n, a = 1 / 0; t; )
    t._call ? (a > t._time && (a = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Jr = n);
  ro = e, sl(a);
}
function sl(e) {
  if (!Oa) {
    oo && (oo = clearTimeout(oo));
    var t = e - Gn;
    t > 24 ? (e < 1 / 0 && (oo = setTimeout(wd, e - To.now() - Ui)), Qa && (Qa = clearInterval(Qa))) : (Qa || (Qr = To.now(), Qa = setInterval(gE, bv)), Oa = 1, _v(wd));
  }
}
function Cd(e, t, n) {
  var a = new ei();
  return t = t == null ? 0 : +t, a.restart((o) => {
    a.stop(), e(o + t);
  }, t, n), a;
}
var bE = yv("start", "end", "cancel", "interrupt"), _E = [], wv = 0, kd = 1, ll = 2, $r = 3, Sd = 4, ul = 5, Tr = 6;
function Ki(e, t, n, a, o, r) {
  var i = e.__transition;
  if (!i) e.__transition = {};
  else if (n in i) return;
  xE(e, n, {
    name: t,
    index: a,
    // For context during callback.
    group: o,
    // For context during callback.
    on: bE,
    tween: _E,
    time: r.time,
    delay: r.delay,
    duration: r.duration,
    ease: r.ease,
    timer: null,
    state: wv
  });
}
function Iu(e, t) {
  var n = At(e, t);
  if (n.state > wv) throw new Error("too late; already scheduled");
  return n;
}
function Kt(e, t) {
  var n = At(e, t);
  if (n.state > $r) throw new Error("too late; already running");
  return n;
}
function At(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function xE(e, t, n) {
  var a = e.__transition, o;
  a[t] = n, n.timer = xv(r, 0, n.time);
  function r(c) {
    n.state = kd, n.timer.restart(i, n.delay, n.time), n.delay <= c && i(c - n.delay);
  }
  function i(c) {
    var d, f, p, h;
    if (n.state !== kd) return u();
    for (d in a)
      if (h = a[d], h.name === n.name) {
        if (h.state === $r) return Cd(i);
        h.state === Sd ? (h.state = Tr, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete a[d]) : +d < t && (h.state = Tr, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete a[d]);
      }
    if (Cd(function() {
      n.state === $r && (n.state = Sd, n.timer.restart(s, n.delay, n.time), s(c));
    }), n.state = ll, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ll) {
      for (n.state = $r, o = new Array(p = n.tween.length), d = 0, f = -1; d < p; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function s(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(u), n.state = ul, 1), f = -1, p = o.length; ++f < p; )
      o[f].call(e, d);
    n.state === ul && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = Tr, n.timer.stop(), delete a[t];
    for (var c in a) return;
    delete e.__transition;
  }
}
function Ru(e, t) {
  var n = e.__transition, a, o, r = !0, i;
  if (n) {
    t = t == null ? null : t + "";
    for (i in n) {
      if ((a = n[i]).name !== t) {
        r = !1;
        continue;
      }
      o = a.state > ll && a.state < ul, a.state = Tr, a.timer.stop(), a.on.call(o ? "interrupt" : "cancel", e, e.__data__, a.index, a.group), delete n[i];
    }
    r && delete e.__transition;
  }
}
function wE(e) {
  return this.each(function() {
    Ru(this, e);
  });
}
const Fu = (e) => () => e;
function CE(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function kE(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function SE(e) {
  return (e = +e) == 1 ? Cv : function(t, n) {
    return n - t ? kE(t, n, e) : Fu(isNaN(t) ? n : t);
  };
}
function Cv(e, t) {
  var n = t - e;
  return n ? CE(e, n) : Fu(isNaN(e) ? t : e);
}
const ti = function e(t) {
  var n = SE(t);
  function a(o, r) {
    var i = n((o = ol(o)).r, (r = ol(r)).r), s = n(o.g, r.g), u = n(o.b, r.b), c = Cv(o.opacity, r.opacity);
    return function(d) {
      return o.r = i(d), o.g = s(d), o.b = u(d), o.opacity = c(d), o + "";
    };
  }
  return a.gamma = e, a;
}(1);
function $E(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(r) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - r) + t[o] * r;
    return a;
  };
}
function TE(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function AE(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), r = new Array(n), i;
  for (i = 0; i < a; ++i) o[i] = Ka(e[i], t[i]);
  for (; i < n; ++i) r[i] = t[i];
  return function(s) {
    for (i = 0; i < a; ++i) r[i] = o[i](s);
    return r;
  };
}
function EE(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function xt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function BE(e, t) {
  var n = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Ka(e[o], t[o]) : a[o] = t[o];
  return function(r) {
    for (o in n) a[o] = n[o](r);
    return a;
  };
}
var cl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ws = new RegExp(cl.source, "g");
function ME(e) {
  return function() {
    return e;
  };
}
function OE(e) {
  return function(t) {
    return e(t) + "";
  };
}
function kv(e, t) {
  var n = cl.lastIndex = ws.lastIndex = 0, a, o, r, i = -1, s = [], u = [];
  for (e = e + "", t = t + ""; (a = cl.exec(e)) && (o = ws.exec(t)); )
    (r = o.index) > n && (r = t.slice(n, r), s[i] ? s[i] += r : s[++i] = r), (a = a[0]) === (o = o[0]) ? s[i] ? s[i] += o : s[++i] = o : (s[++i] = null, u.push({ i, x: xt(a, o) })), n = ws.lastIndex;
  return n < t.length && (r = t.slice(n), s[i] ? s[i] += r : s[++i] = r), s.length < 2 ? u[0] ? OE(u[0].x) : ME(t) : (t = u.length, function(c) {
    for (var d = 0, f; d < t; ++d) s[(f = u[d]).i] = f.x(c);
    return s.join("");
  });
}
function Ka(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Fu(t) : (n === "number" ? xt : n === "string" ? (a = jn(t)) ? (t = a, ti) : kv : t instanceof jn ? ti : t instanceof Date ? EE : TE(t) ? $E : Array.isArray(t) ? AE : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? BE : xt)(e, t);
}
function Nu(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
var $d = 180 / Math.PI, dl = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Sv(e, t, n, a, o, r) {
  var i, s, u;
  return (i = Math.sqrt(e * e + t * t)) && (e /= i, t /= i), (u = e * n + t * a) && (n -= e * u, a -= t * u), (s = Math.sqrt(n * n + a * a)) && (n /= s, a /= s, u /= s), e * a < t * n && (e = -e, t = -t, u = -u, i = -i), {
    translateX: o,
    translateY: r,
    rotate: Math.atan2(t, e) * $d,
    skewX: Math.atan(u) * $d,
    scaleX: i,
    scaleY: s
  };
}
var pr;
function DE(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? dl : Sv(t.a, t.b, t.c, t.d, t.e, t.f);
}
function PE(e) {
  return e == null || (pr || (pr = document.createElementNS("http://www.w3.org/2000/svg", "g")), pr.setAttribute("transform", e), !(e = pr.transform.baseVal.consolidate())) ? dl : (e = e.matrix, Sv(e.a, e.b, e.c, e.d, e.e, e.f));
}
function $v(e, t, n, a) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function r(c, d, f, p, h, v) {
    if (c !== f || d !== p) {
      var m = h.push("translate(", null, t, null, n);
      v.push({ i: m - 4, x: xt(c, f) }, { i: m - 2, x: xt(d, p) });
    } else (f || p) && h.push("translate(" + f + t + p + n);
  }
  function i(c, d, f, p) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), p.push({ i: f.push(o(f) + "rotate(", null, a) - 2, x: xt(c, d) })) : d && f.push(o(f) + "rotate(" + d + a);
  }
  function s(c, d, f, p) {
    c !== d ? p.push({ i: f.push(o(f) + "skewX(", null, a) - 2, x: xt(c, d) }) : d && f.push(o(f) + "skewX(" + d + a);
  }
  function u(c, d, f, p, h, v) {
    if (c !== f || d !== p) {
      var m = h.push(o(h) + "scale(", null, ",", null, ")");
      v.push({ i: m - 4, x: xt(c, f) }, { i: m - 2, x: xt(d, p) });
    } else (f !== 1 || p !== 1) && h.push(o(h) + "scale(" + f + "," + p + ")");
  }
  return function(c, d) {
    var f = [], p = [];
    return c = e(c), d = e(d), r(c.translateX, c.translateY, d.translateX, d.translateY, f, p), i(c.rotate, d.rotate, f, p), s(c.skewX, d.skewX, f, p), u(c.scaleX, c.scaleY, d.scaleX, d.scaleY, f, p), c = d = null, function(h) {
      for (var v = -1, m = p.length, b; ++v < m; ) f[(b = p[v]).i] = b.x(h);
      return f.join("");
    };
  };
}
var IE = $v(DE, "px, ", "px)", "deg)"), RE = $v(PE, ", ", ")", ")");
function FE(e, t) {
  t === void 0 && (t = e, e = Ka);
  for (var n = 0, a = t.length - 1, o = t[0], r = new Array(a < 0 ? 0 : a); n < a; ) r[n] = e(o, o = t[++n]);
  return function(i) {
    var s = Math.max(0, Math.min(a - 1, Math.floor(i *= a)));
    return r[s](i - s);
  };
}
function NE(e, t) {
  var n, a;
  return function() {
    var o = Kt(this, e), r = o.tween;
    if (r !== n) {
      a = n = r;
      for (var i = 0, s = a.length; i < s; ++i)
        if (a[i].name === t) {
          a = a.slice(), a.splice(i, 1);
          break;
        }
    }
    o.tween = a;
  };
}
function LE(e, t, n) {
  var a, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var r = Kt(this, e), i = r.tween;
    if (i !== a) {
      o = (a = i).slice();
      for (var s = { name: t, value: n }, u = 0, c = o.length; u < c; ++u)
        if (o[u].name === t) {
          o[u] = s;
          break;
        }
      u === c && o.push(s);
    }
    r.tween = o;
  };
}
function VE(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var a = At(this.node(), n).tween, o = 0, r = a.length, i; o < r; ++o)
      if ((i = a[o]).name === e)
        return i.value;
    return null;
  }
  return this.each((t == null ? NE : LE)(n, e, t));
}
function Lu(e, t, n) {
  var a = e._id;
  return e.each(function() {
    var o = Kt(this, a);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return At(o, a).value[t];
  };
}
function Tv(e, t) {
  var n;
  return (typeof t == "number" ? xt : t instanceof jn ? ti : (n = jn(t)) ? (t = n, ti) : kv)(e, t);
}
function zE(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function qE(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function HE(e, t, n) {
  var a, o = n + "", r;
  return function() {
    var i = this.getAttribute(e);
    return i === o ? null : i === a ? r : r = t(a = i, n);
  };
}
function WE(e, t, n) {
  var a, o = n + "", r;
  return function() {
    var i = this.getAttributeNS(e.space, e.local);
    return i === o ? null : i === a ? r : r = t(a = i, n);
  };
}
function UE(e, t, n) {
  var a, o, r;
  return function() {
    var i, s = n(this), u;
    return s == null ? void this.removeAttribute(e) : (i = this.getAttribute(e), u = s + "", i === u ? null : i === a && u === o ? r : (o = u, r = t(a = i, s)));
  };
}
function KE(e, t, n) {
  var a, o, r;
  return function() {
    var i, s = n(this), u;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (i = this.getAttributeNS(e.space, e.local), u = s + "", i === u ? null : i === a && u === o ? r : (o = u, r = t(a = i, s)));
  };
}
function jE(e, t) {
  var n = Li(e), a = n === "transform" ? RE : Tv;
  return this.attrTween(e, typeof t == "function" ? (n.local ? KE : UE)(n, a, Lu(this, "attr." + e, t)) : t == null ? (n.local ? qE : zE)(n) : (n.local ? WE : HE)(n, a, t));
}
function GE(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function YE(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function XE(e, t) {
  var n, a;
  function o() {
    var r = t.apply(this, arguments);
    return r !== a && (n = (a = r) && YE(e, r)), n;
  }
  return o._value = t, o;
}
function ZE(e, t) {
  var n, a;
  function o() {
    var r = t.apply(this, arguments);
    return r !== a && (n = (a = r) && GE(e, r)), n;
  }
  return o._value = t, o;
}
function JE(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var a = Li(e);
  return this.tween(n, (a.local ? XE : ZE)(a, t));
}
function QE(e, t) {
  return function() {
    Iu(this, e).delay = +t.apply(this, arguments);
  };
}
function eB(e, t) {
  return t = +t, function() {
    Iu(this, e).delay = t;
  };
}
function tB(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? QE : eB)(t, e)) : At(this.node(), t).delay;
}
function nB(e, t) {
  return function() {
    Kt(this, e).duration = +t.apply(this, arguments);
  };
}
function aB(e, t) {
  return t = +t, function() {
    Kt(this, e).duration = t;
  };
}
function oB(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? nB : aB)(t, e)) : At(this.node(), t).duration;
}
function rB(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Kt(this, e).ease = t;
  };
}
function iB(e) {
  var t = this._id;
  return arguments.length ? this.each(rB(t, e)) : At(this.node(), t).ease;
}
function sB(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Kt(this, e).ease = n;
  };
}
function lB(e) {
  if (typeof e != "function") throw new Error();
  return this.each(sB(this._id, e));
}
function uB(e) {
  typeof e != "function" && (e = Oh(e));
  for (var t = this._groups, n = t.length, a = new Array(n), o = 0; o < n; ++o)
    for (var r = t[o], i = r.length, s = a[o] = [], u, c = 0; c < i; ++c)
      (u = r[c]) && e.call(u, u.__data__, c, r) && s.push(u);
  return new on(a, this._parents, this._name, this._id);
}
function cB(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, a = t.length, o = n.length, r = Math.min(a, o), i = new Array(a), s = 0; s < r; ++s)
    for (var u = t[s], c = n[s], d = u.length, f = i[s] = new Array(d), p, h = 0; h < d; ++h)
      (p = u[h] || c[h]) && (f[h] = p);
  for (; s < a; ++s)
    i[s] = t[s];
  return new on(i, this._parents, this._name, this._id);
}
function dB(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function fB(e, t, n) {
  var a, o, r = dB(t) ? Iu : Kt;
  return function() {
    var i = r(this, e), s = i.on;
    s !== a && (o = (a = s).copy()).on(t, n), i.on = o;
  };
}
function pB(e, t) {
  var n = this._id;
  return arguments.length < 2 ? At(this.node(), n).on.on(e) : this.each(fB(n, e, t));
}
function hB(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function vB() {
  return this.on("end.remove", hB(this._id));
}
function mB(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = wu(e));
  for (var a = this._groups, o = a.length, r = new Array(o), i = 0; i < o; ++i)
    for (var s = a[i], u = s.length, c = r[i] = new Array(u), d, f, p = 0; p < u; ++p)
      (d = s[p]) && (f = e.call(d, d.__data__, p, s)) && ("__data__" in d && (f.__data__ = d.__data__), c[p] = f, Ki(c[p], t, n, p, c, At(d, n)));
  return new on(r, this._parents, t, n);
}
function gB(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Mh(e));
  for (var a = this._groups, o = a.length, r = [], i = [], s = 0; s < o; ++s)
    for (var u = a[s], c = u.length, d, f = 0; f < c; ++f)
      if (d = u[f]) {
        for (var p = e.call(d, d.__data__, f, u), h, v = At(d, n), m = 0, b = p.length; m < b; ++m)
          (h = p[m]) && Ki(h, t, n, m, p, v);
        r.push(p), i.push(d);
      }
  return new on(r, i, t, n);
}
var yB = Ho.prototype.constructor;
function bB() {
  return new yB(this._groups, this._parents);
}
function _B(e, t) {
  var n, a, o;
  return function() {
    var r = Aa(this, e), i = (this.style.removeProperty(e), Aa(this, e));
    return r === i ? null : r === n && i === a ? o : o = t(n = r, a = i);
  };
}
function Av(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function xB(e, t, n) {
  var a, o = n + "", r;
  return function() {
    var i = Aa(this, e);
    return i === o ? null : i === a ? r : r = t(a = i, n);
  };
}
function wB(e, t, n) {
  var a, o, r;
  return function() {
    var i = Aa(this, e), s = n(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(e), Aa(this, e))), i === u ? null : i === a && u === o ? r : (o = u, r = t(a = i, s));
  };
}
function CB(e, t) {
  var n, a, o, r = "style." + t, i = "end." + r, s;
  return function() {
    var u = Kt(this, e), c = u.on, d = u.value[r] == null ? s || (s = Av(t)) : void 0;
    (c !== n || o !== d) && (a = (n = c).copy()).on(i, o = d), u.on = a;
  };
}
function kB(e, t, n) {
  var a = (e += "") == "transform" ? IE : Tv;
  return t == null ? this.styleTween(e, _B(e, a)).on("end.style." + e, Av(e)) : typeof t == "function" ? this.styleTween(e, wB(e, a, Lu(this, "style." + e, t))).each(CB(this._id, e)) : this.styleTween(e, xB(e, a, t), n).on("end.style." + e, null);
}
function SB(e, t, n) {
  return function(a) {
    this.style.setProperty(e, t.call(this, a), n);
  };
}
function $B(e, t, n) {
  var a, o;
  function r() {
    var i = t.apply(this, arguments);
    return i !== o && (a = (o = i) && SB(e, i, n)), a;
  }
  return r._value = t, r;
}
function TB(e, t, n) {
  var a = "style." + (e += "");
  if (arguments.length < 2) return (a = this.tween(a)) && a._value;
  if (t == null) return this.tween(a, null);
  if (typeof t != "function") throw new Error();
  return this.tween(a, $B(e, t, n ?? ""));
}
function AB(e) {
  return function() {
    this.textContent = e;
  };
}
function EB(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function BB(e) {
  return this.tween("text", typeof e == "function" ? EB(Lu(this, "text", e)) : AB(e == null ? "" : e + ""));
}
function MB(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function OB(e) {
  var t, n;
  function a() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && MB(o)), t;
  }
  return a._value = e, a;
}
function DB(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, OB(e));
}
function PB() {
  for (var e = this._name, t = this._id, n = Ev(), a = this._groups, o = a.length, r = 0; r < o; ++r)
    for (var i = a[r], s = i.length, u, c = 0; c < s; ++c)
      if (u = i[c]) {
        var d = At(u, t);
        Ki(u, e, n, c, i, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new on(a, this._parents, e, n);
}
function IB() {
  var e, t, n = this, a = n._id, o = n.size();
  return new Promise(function(r, i) {
    var s = { value: i }, u = { value: function() {
      --o === 0 && r();
    } };
    n.each(function() {
      var c = Kt(this, a), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(u)), c.on = t;
    }), o === 0 && r();
  });
}
var RB = 0;
function on(e, t, n, a) {
  this._groups = e, this._parents = t, this._name = n, this._id = a;
}
function Ev() {
  return ++RB;
}
var Yt = Ho.prototype;
on.prototype = {
  constructor: on,
  select: mB,
  selectAll: gB,
  selectChild: Yt.selectChild,
  selectChildren: Yt.selectChildren,
  filter: uB,
  merge: cB,
  selection: bB,
  transition: PB,
  call: Yt.call,
  nodes: Yt.nodes,
  node: Yt.node,
  size: Yt.size,
  empty: Yt.empty,
  each: Yt.each,
  on: pB,
  attr: jE,
  attrTween: JE,
  style: kB,
  styleTween: TB,
  text: BB,
  textTween: DB,
  remove: vB,
  tween: VE,
  delay: tB,
  duration: oB,
  ease: iB,
  easeVarying: lB,
  end: IB,
  [Symbol.iterator]: Yt[Symbol.iterator]
};
function FB(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var NB = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: FB
};
function LB(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function VB(e) {
  var t, n;
  e instanceof on ? (t = e._id, e = e._name) : (t = Ev(), (n = NB).time = Pu(), e = e == null ? null : e + "");
  for (var a = this._groups, o = a.length, r = 0; r < o; ++r)
    for (var i = a[r], s = i.length, u, c = 0; c < s; ++c)
      (u = i[c]) && Ki(u, e, t, c, i, n || LB(u, t));
  return new on(a, this._parents, e, t);
}
Ho.prototype.interrupt = wE;
Ho.prototype.transition = VB;
function Fn(e, t, n) {
  return e.nodes().forEach((a) => Ru(a)), t ? e.transition().duration(t) : e;
}
class Vu {
  constructor(t) {
    this.data = t;
  }
  get data() {
    return this._data;
  }
  set data(t) {
    this._data = t;
  }
}
var ye;
(function(e) {
  e.X = "x", e.Y = "y";
})(ye || (ye = {}));
function Et(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Bv(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Td = Symbol("implicit");
function zu() {
  var e = new Hc(), t = [], n = [], a = Td;
  function o(r) {
    let i = e.get(r);
    if (i === void 0) {
      if (a !== Td) return a;
      e.set(r, i = t.push(r) - 1);
    }
    return n[i % n.length];
  }
  return o.domain = function(r) {
    if (!arguments.length) return t.slice();
    t = [], e = new Hc();
    for (const i of r)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(r) {
    return arguments.length ? (n = Array.from(r), o) : n.slice();
  }, o.unknown = function(r) {
    return arguments.length ? (a = r, o) : a;
  }, o.copy = function() {
    return zu(t, n).unknown(a);
  }, Et.apply(o, arguments), o;
}
function qu() {
  var e = zu().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, r, i, s = !1, u = 0, c = 0, d = 0.5;
  delete e.unknown;
  function f() {
    var p = t().length, h = o < a, v = h ? o : a, m = h ? a : o;
    r = (m - v) / Math.max(1, p - u + c * 2), s && (r = Math.floor(r)), v += (m - v - r * (p - u)) * d, i = r * (1 - u), s && (v = Math.round(v), i = Math.round(i));
    var b = ET(p).map(function(x) {
      return v + r * x;
    });
    return n(h ? b.reverse() : b);
  }
  return e.domain = function(p) {
    return arguments.length ? (t(p), f()) : t();
  }, e.range = function(p) {
    return arguments.length ? ([a, o] = p, a = +a, o = +o, f()) : [a, o];
  }, e.rangeRound = function(p) {
    return [a, o] = p, a = +a, o = +o, s = !0, f();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return r;
  }, e.round = function(p) {
    return arguments.length ? (s = !!p, f()) : s;
  }, e.padding = function(p) {
    return arguments.length ? (u = Math.min(1, c = +p), f()) : u;
  }, e.paddingInner = function(p) {
    return arguments.length ? (u = Math.min(1, p), f()) : u;
  }, e.paddingOuter = function(p) {
    return arguments.length ? (c = +p, f()) : c;
  }, e.align = function(p) {
    return arguments.length ? (d = Math.max(0, Math.min(1, p)), f()) : d;
  }, e.copy = function() {
    return qu(t(), [a, o]).round(s).paddingInner(u).paddingOuter(c).align(d);
  }, Et.apply(f(), arguments);
}
function Mv(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Mv(t());
  }, e;
}
function zB() {
  return Mv(qu.apply(null, arguments).paddingInner(1));
}
function qB(e) {
  return function() {
    return e;
  };
}
function fl(e) {
  return +e;
}
var Ad = [0, 1];
function Qe(e) {
  return e;
}
function pl(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : qB(isNaN(t) ? NaN : 0.5);
}
function HB(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function WB(e, t, n) {
  var a = e[0], o = e[1], r = t[0], i = t[1];
  return o < a ? (a = pl(o, a), r = n(i, r)) : (a = pl(a, o), r = n(r, i)), function(s) {
    return r(a(s));
  };
}
function UB(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), r = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = pl(e[i], e[i + 1]), r[i] = n(t[i], t[i + 1]);
  return function(s) {
    var u = Wo(e, s, 1, a) - 1;
    return r[u](o[u](s));
  };
}
function jo(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ji() {
  var e = Ad, t = Ad, n = Ka, a, o, r, i = Qe, s, u, c;
  function d() {
    var p = Math.min(e.length, t.length);
    return i !== Qe && (i = HB(e[0], e[p - 1])), s = p > 2 ? UB : WB, u = c = null, f;
  }
  function f(p) {
    return p == null || isNaN(p = +p) ? r : (u || (u = s(e.map(a), t, n)))(a(i(p)));
  }
  return f.invert = function(p) {
    return i(o((c || (c = s(t, e.map(a), xt)))(p)));
  }, f.domain = function(p) {
    return arguments.length ? (e = Array.from(p, fl), d()) : e.slice();
  }, f.range = function(p) {
    return arguments.length ? (t = Array.from(p), d()) : t.slice();
  }, f.rangeRound = function(p) {
    return t = Array.from(p), n = Nu, d();
  }, f.clamp = function(p) {
    return arguments.length ? (i = p ? !0 : Qe, d()) : i !== Qe;
  }, f.interpolate = function(p) {
    return arguments.length ? (n = p, d()) : n;
  }, f.unknown = function(p) {
    return arguments.length ? (r = p, f) : r;
  }, function(p, h) {
    return a = p, o = h, d();
  };
}
function Ov() {
  return ji()(Qe, Qe);
}
function KB(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function ni(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function Da(e) {
  return e = ni(Math.abs(e)), e ? e[1] : NaN;
}
function jB(e, t) {
  return function(n, a) {
    for (var o = n.length, r = [], i = 0, s = e[0], u = 0; o > 0 && s > 0 && (u + s + 1 > a && (s = Math.max(1, a - u)), r.push(n.substring(o -= s, o + s)), !((u += s + 1) > a)); )
      s = e[i = (i + 1) % e.length];
    return r.reverse().join(t);
  };
}
function GB(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var YB = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ao(e) {
  if (!(t = YB.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Hu({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Ao.prototype = Hu.prototype;
function Hu(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Hu.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function XB(e) {
  e: for (var t = e.length, n = 1, a = -1, o; n < t; ++n)
    switch (e[n]) {
      case ".":
        a = o = n;
        break;
      case "0":
        a === 0 && (a = n), o = n;
        break;
      default:
        if (!+e[n]) break e;
        a > 0 && (a = 0);
        break;
    }
  return a > 0 ? e.slice(0, a) + e.slice(o + 1) : e;
}
var Dv;
function ZB(e, t) {
  var n = ni(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], r = o - (Dv = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
  return r === i ? a : r > i ? a + new Array(r - i + 1).join("0") : r > 0 ? a.slice(0, r) + "." + a.slice(r) : "0." + new Array(1 - r).join("0") + ni(e, Math.max(0, t + r - 1))[0];
}
function Ed(e, t) {
  var n = ni(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const Bd = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: KB,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ed(e * 100, t),
  r: Ed,
  s: ZB,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Md(e) {
  return e;
}
var Od = Array.prototype.map, Dd = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function JB(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Md : jB(Od.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", r = e.numerals === void 0 ? Md : GB(Od.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = Ao(f);
    var p = f.fill, h = f.align, v = f.sign, m = f.symbol, b = f.zero, x = f.width, S = f.comma, C = f.precision, T = f.trim, $ = f.type;
    $ === "n" ? (S = !0, $ = "g") : Bd[$] || (C === void 0 && (C = 12), T = !0, $ = "g"), (b || p === "0" && h === "=") && (b = !0, p = "0", h = "=");
    var B = m === "$" ? n : m === "#" && /[boxX]/.test($) ? "0" + $.toLowerCase() : "", A = m === "$" ? a : /[%p]/.test($) ? i : "", R = Bd[$], L = /[defgprs%]/.test($);
    C = C === void 0 ? 6 : /[gprs]/.test($) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function D(N) {
      var I = B, G = A, z, Y, ne;
      if ($ === "c")
        G = R(N) + G, N = "";
      else {
        N = +N;
        var _e = N < 0 || 1 / N < 0;
        if (N = isNaN(N) ? u : R(Math.abs(N), C), T && (N = XB(N)), _e && +N == 0 && v !== "+" && (_e = !1), I = (_e ? v === "(" ? v : s : v === "-" || v === "(" ? "" : v) + I, G = ($ === "s" ? Dd[8 + Dv / 3] : "") + G + (_e && v === "(" ? ")" : ""), L) {
          for (z = -1, Y = N.length; ++z < Y; )
            if (ne = N.charCodeAt(z), 48 > ne || ne > 57) {
              G = (ne === 46 ? o + N.slice(z + 1) : N.slice(z)) + G, N = N.slice(0, z);
              break;
            }
        }
      }
      S && !b && (N = t(N, 1 / 0));
      var he = I.length + N.length + G.length, q = he < x ? new Array(x - he + 1).join(p) : "";
      switch (S && b && (N = t(q + N, q.length ? x - G.length : 1 / 0), q = ""), h) {
        case "<":
          N = I + N + G + q;
          break;
        case "=":
          N = I + q + N + G;
          break;
        case "^":
          N = q.slice(0, he = q.length >> 1) + I + N + G + q.slice(he);
          break;
        default:
          N = q + I + N + G;
          break;
      }
      return r(N);
    }
    return D.toString = function() {
      return f + "";
    }, D;
  }
  function d(f, p) {
    var h = c((f = Ao(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(Da(p) / 3))) * 3, m = Math.pow(10, -v), b = Dd[8 + v / 3];
    return function(x) {
      return h(m * x) + b;
    };
  }
  return {
    format: c,
    formatPrefix: d
  };
}
var hr, Wu, Pv;
QB({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function QB(e) {
  return hr = JB(e), Wu = hr.format, Pv = hr.formatPrefix, hr;
}
function e2(e) {
  return Math.max(0, -Da(Math.abs(e)));
}
function t2(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Da(t) / 3))) * 3 - Da(Math.abs(e)));
}
function n2(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Da(t) - Da(e)) + 1;
}
function a2(e, t, n, a) {
  var o = Zs(e, t, n), r;
  switch (a = Ao(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(r = t2(o, i)) && (a.precision = r), Pv(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(r = n2(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = r - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(r = e2(o)) && (a.precision = r - (a.type === "%") * 2);
      break;
    }
  }
  return Wu(a);
}
function ra(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return Ys(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return a2(o[0], o[o.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), o = 0, r = a.length - 1, i = a[o], s = a[r], u, c, d = 10;
    for (s < i && (c = i, i = s, s = c, c = o, o = r, r = c); d-- > 0; ) {
      if (c = Xs(i, s, n), c === u)
        return a[o] = i, a[r] = s, t(a);
      if (c > 0)
        i = Math.floor(i / c) * c, s = Math.ceil(s / c) * c;
      else if (c < 0)
        i = Math.ceil(i * c) / c, s = Math.floor(s * c) / c;
      else
        break;
      u = c;
    }
    return e;
  }, e;
}
function Iv() {
  var e = Ov();
  return e.copy = function() {
    return jo(e, Iv());
  }, Et.apply(e, arguments), ra(e);
}
function Rv(e) {
  var t;
  function n(a) {
    return a == null || isNaN(a = +a) ? t : a;
  }
  return n.invert = n, n.domain = n.range = function(a) {
    return arguments.length ? (e = Array.from(a, fl), n) : e.slice();
  }, n.unknown = function(a) {
    return arguments.length ? (t = a, n) : t;
  }, n.copy = function() {
    return Rv(e).unknown(t);
  }, e = arguments.length ? Array.from(e, fl) : [0, 1], ra(n);
}
function Fv(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, o = e[n], r = e[a], i;
  return r < o && (i = n, n = a, a = i, i = o, o = r, r = i), e[n] = t.floor(o), e[a] = t.ceil(r), e;
}
function Pd(e) {
  return Math.log(e);
}
function Id(e) {
  return Math.exp(e);
}
function o2(e) {
  return -Math.log(-e);
}
function r2(e) {
  return -Math.exp(-e);
}
function i2(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function s2(e) {
  return e === 10 ? i2 : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function l2(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Rd(e) {
  return (t, n) => -e(-t, n);
}
function u2(e) {
  const t = e(Pd, Id), n = t.domain;
  let a = 10, o, r;
  function i() {
    return o = l2(a), r = s2(a), n()[0] < 0 ? (o = Rd(o), r = Rd(r), e(o2, r2)) : e(Pd, Id), t;
  }
  return t.base = function(s) {
    return arguments.length ? (a = +s, i()) : a;
  }, t.domain = function(s) {
    return arguments.length ? (n(s), i()) : n();
  }, t.ticks = (s) => {
    const u = n();
    let c = u[0], d = u[u.length - 1];
    const f = d < c;
    f && ([c, d] = [d, c]);
    let p = o(c), h = o(d), v, m;
    const b = s == null ? 10 : +s;
    let x = [];
    if (!(a % 1) && h - p < b) {
      if (p = Math.floor(p), h = Math.ceil(h), c > 0) {
        for (; p <= h; ++p)
          for (v = 1; v < a; ++v)
            if (m = p < 0 ? v / r(-p) : v * r(p), !(m < c)) {
              if (m > d) break;
              x.push(m);
            }
      } else for (; p <= h; ++p)
        for (v = a - 1; v >= 1; --v)
          if (m = p > 0 ? v / r(-p) : v * r(p), !(m < c)) {
            if (m > d) break;
            x.push(m);
          }
      x.length * 2 < b && (x = Ys(c, d, b));
    } else
      x = Ys(p, h, Math.min(h - p, b)).map(r);
    return f ? x.reverse() : x;
  }, t.tickFormat = (s, u) => {
    if (s == null && (s = 10), u == null && (u = a === 10 ? "s" : ","), typeof u != "function" && (!(a % 1) && (u = Ao(u)).precision == null && (u.trim = !0), u = Wu(u)), s === 1 / 0) return u;
    const c = Math.max(1, a * s / t.ticks().length);
    return (d) => {
      let f = d / r(Math.round(o(d)));
      return f * a < a - 0.5 && (f *= a), f <= c ? u(d) : "";
    };
  }, t.nice = () => n(Fv(n(), {
    floor: (s) => r(Math.floor(o(s))),
    ceil: (s) => r(Math.ceil(o(s)))
  })), t;
}
function Nv() {
  const e = u2(ji()).domain([1, 10]);
  return e.copy = () => jo(e, Nv()).base(e.base()), Et.apply(e, arguments), e;
}
function Fd(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Nd(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function c2(e) {
  var t = 1, n = e(Fd(t), Nd(t));
  return n.constant = function(a) {
    return arguments.length ? e(Fd(t = +a), Nd(t)) : t;
  }, ra(n);
}
function Lv() {
  var e = c2(ji());
  return e.copy = function() {
    return jo(e, Lv()).constant(e.constant());
  }, Et.apply(e, arguments);
}
function Ld(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function d2(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function f2(e) {
  return e < 0 ? -e * e : e * e;
}
function p2(e) {
  var t = e(Qe, Qe), n = 1;
  function a() {
    return n === 1 ? e(Qe, Qe) : n === 0.5 ? e(d2, f2) : e(Ld(n), Ld(1 / n));
  }
  return t.exponent = function(o) {
    return arguments.length ? (n = +o, a()) : n;
  }, ra(t);
}
function Uu() {
  var e = p2(ji());
  return e.copy = function() {
    return jo(e, Uu()).exponent(e.exponent());
  }, Et.apply(e, arguments), e;
}
function h2() {
  return Uu.apply(null, arguments).exponent(0.5);
}
function Vv() {
  var e = [], t = [], n = [], a;
  function o() {
    var i = 0, s = Math.max(1, t.length);
    for (n = new Array(s - 1); ++i < s; ) n[i - 1] = $T(e, i / s);
    return r;
  }
  function r(i) {
    return i == null || isNaN(i = +i) ? a : t[Wo(n, i)];
  }
  return r.invertExtent = function(i) {
    var s = t.indexOf(i);
    return s < 0 ? [NaN, NaN] : [
      s > 0 ? n[s - 1] : e[0],
      s < n.length ? n[s] : e[e.length - 1]
    ];
  }, r.domain = function(i) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let s of i) s != null && !isNaN(s = +s) && e.push(s);
    return e.sort(co), o();
  }, r.range = function(i) {
    return arguments.length ? (t = Array.from(i), o()) : t.slice();
  }, r.unknown = function(i) {
    return arguments.length ? (a = i, r) : a;
  }, r.quantiles = function() {
    return n.slice();
  }, r.copy = function() {
    return Vv().domain(e).range(t).unknown(a);
  }, Et.apply(r, arguments);
}
function zv() {
  var e = 0, t = 1, n = 1, a = [0.5], o = [0, 1], r;
  function i(u) {
    return u != null && u <= u ? o[Wo(a, u, 0, n)] : r;
  }
  function s() {
    var u = -1;
    for (a = new Array(n); ++u < n; ) a[u] = ((u + 1) * t - (u - n) * e) / (n + 1);
    return i;
  }
  return i.domain = function(u) {
    return arguments.length ? ([e, t] = u, e = +e, t = +t, s()) : [e, t];
  }, i.range = function(u) {
    return arguments.length ? (n = (o = Array.from(u)).length - 1, s()) : o.slice();
  }, i.invertExtent = function(u) {
    var c = o.indexOf(u);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, a[0]] : c >= n ? [a[n - 1], t] : [a[c - 1], a[c]];
  }, i.unknown = function(u) {
    return arguments.length && (r = u), i;
  }, i.thresholds = function() {
    return a.slice();
  }, i.copy = function() {
    return zv().domain([e, t]).range(o).unknown(r);
  }, Et.apply(ra(i), arguments);
}
function qv() {
  var e = [0.5], t = [0, 1], n, a = 1;
  function o(r) {
    return r != null && r <= r ? t[Wo(e, r, 0, a)] : n;
  }
  return o.domain = function(r) {
    return arguments.length ? (e = Array.from(r), a = Math.min(e.length, t.length - 1), o) : e.slice();
  }, o.range = function(r) {
    return arguments.length ? (t = Array.from(r), a = Math.min(e.length, t.length - 1), o) : t.slice();
  }, o.invertExtent = function(r) {
    var i = t.indexOf(r);
    return [e[i - 1], e[i]];
  }, o.unknown = function(r) {
    return arguments.length ? (n = r, o) : n;
  }, o.copy = function() {
    return qv().domain(e).range(t).unknown(n);
  }, Et.apply(o, arguments);
}
const Cs = /* @__PURE__ */ new Date(), ks = /* @__PURE__ */ new Date();
function qe(e, t, n, a) {
  function o(r) {
    return e(r = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+r)), r;
  }
  return o.floor = (r) => (e(r = /* @__PURE__ */ new Date(+r)), r), o.ceil = (r) => (e(r = new Date(r - 1)), t(r, 1), e(r), r), o.round = (r) => {
    const i = o(r), s = o.ceil(r);
    return r - i < s - r ? i : s;
  }, o.offset = (r, i) => (t(r = /* @__PURE__ */ new Date(+r), i == null ? 1 : Math.floor(i)), r), o.range = (r, i, s) => {
    const u = [];
    if (r = o.ceil(r), s = s == null ? 1 : Math.floor(s), !(r < i) || !(s > 0)) return u;
    let c;
    do
      u.push(c = /* @__PURE__ */ new Date(+r)), t(r, s), e(r);
    while (c < r && r < i);
    return u;
  }, o.filter = (r) => qe((i) => {
    if (i >= i) for (; e(i), !r(i); ) i.setTime(i - 1);
  }, (i, s) => {
    if (i >= i)
      if (s < 0) for (; ++s <= 0; )
        for (; t(i, -1), !r(i); )
          ;
      else for (; --s >= 0; )
        for (; t(i, 1), !r(i); )
          ;
  }), n && (o.count = (r, i) => (Cs.setTime(+r), ks.setTime(+i), e(Cs), e(ks), Math.floor(n(Cs, ks))), o.every = (r) => (r = Math.floor(r), !isFinite(r) || !(r > 0) ? null : r > 1 ? o.filter(a ? (i) => a(i) % r === 0 : (i) => o.count(0, i) % r === 0) : o)), o;
}
const ai = qe(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ai.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? qe((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : ai);
ai.range;
const Zt = 1e3, vt = Zt * 60, Jt = vt * 60, rn = Jt * 24, Ku = rn * 7, Vd = rn * 30, Ss = rn * 365, Nn = qe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Zt);
}, (e, t) => (t - e) / Zt, (e) => e.getUTCSeconds());
Nn.range;
const ju = qe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Zt);
}, (e, t) => {
  e.setTime(+e + t * vt);
}, (e, t) => (t - e) / vt, (e) => e.getMinutes());
ju.range;
const Gu = qe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * vt);
}, (e, t) => (t - e) / vt, (e) => e.getUTCMinutes());
Gu.range;
const Yu = qe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Zt - e.getMinutes() * vt);
}, (e, t) => {
  e.setTime(+e + t * Jt);
}, (e, t) => (t - e) / Jt, (e) => e.getHours());
Yu.range;
const Xu = qe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Jt);
}, (e, t) => (t - e) / Jt, (e) => e.getUTCHours());
Xu.range;
const Go = qe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * vt) / rn,
  (e) => e.getDate() - 1
);
Go.range;
const Gi = qe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / rn, (e) => e.getUTCDate() - 1);
Gi.range;
const Hv = qe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / rn, (e) => Math.floor(e / rn));
Hv.range;
function ia(e) {
  return qe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * vt) / Ku);
}
const Yi = ia(0), oi = ia(1), v2 = ia(2), m2 = ia(3), Pa = ia(4), g2 = ia(5), y2 = ia(6);
Yi.range;
oi.range;
v2.range;
m2.range;
Pa.range;
g2.range;
y2.range;
function sa(e) {
  return qe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Ku);
}
const Xi = sa(0), ri = sa(1), b2 = sa(2), _2 = sa(3), Ia = sa(4), x2 = sa(5), w2 = sa(6);
Xi.range;
ri.range;
b2.range;
_2.range;
Ia.range;
x2.range;
w2.range;
const Zu = qe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Zu.range;
const Ju = qe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Ju.range;
const sn = qe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
sn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : qe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
sn.range;
const ln = qe((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
ln.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : qe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
ln.range;
function Wv(e, t, n, a, o, r) {
  const i = [
    [Nn, 1, Zt],
    [Nn, 5, 5 * Zt],
    [Nn, 15, 15 * Zt],
    [Nn, 30, 30 * Zt],
    [r, 1, vt],
    [r, 5, 5 * vt],
    [r, 15, 15 * vt],
    [r, 30, 30 * vt],
    [o, 1, Jt],
    [o, 3, 3 * Jt],
    [o, 6, 6 * Jt],
    [o, 12, 12 * Jt],
    [a, 1, rn],
    [a, 2, 2 * rn],
    [n, 1, Ku],
    [t, 1, Vd],
    [t, 3, 3 * Vd],
    [e, 1, Ss]
  ];
  function s(c, d, f) {
    const p = d < c;
    p && ([c, d] = [d, c]);
    const h = f && typeof f.range == "function" ? f : u(c, d, f), v = h ? h.range(c, +d + 1) : [];
    return p ? v.reverse() : v;
  }
  function u(c, d, f) {
    const p = Math.abs(d - c) / f, h = ku(([, , b]) => b).right(i, p);
    if (h === i.length) return e.every(Zs(c / Ss, d / Ss, f));
    if (h === 0) return ai.every(Math.max(Zs(c, d, f), 1));
    const [v, m] = i[p / i[h - 1][2] < i[h][2] / p ? h - 1 : h];
    return v.every(m);
  }
  return [s, u];
}
const [C2, k2] = Wv(ln, Ju, Xi, Hv, Xu, Gu), [S2, $2] = Wv(sn, Zu, Yi, Go, Yu, ju);
function $s(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ts(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function eo(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function T2(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, r = e.days, i = e.shortDays, s = e.months, u = e.shortMonths, c = to(o), d = no(o), f = to(r), p = no(r), h = to(i), v = no(i), m = to(s), b = no(s), x = to(u), S = no(u), C = {
    a: _e,
    A: he,
    b: q,
    B: oe,
    c: null,
    d: Kd,
    e: Kd,
    f: X2,
    g: iM,
    G: lM,
    H: j2,
    I: G2,
    j: Y2,
    L: Uv,
    m: Z2,
    M: J2,
    p: ie,
    q: Ue,
    Q: Yd,
    s: Xd,
    S: Q2,
    u: eM,
    U: tM,
    V: nM,
    w: aM,
    W: oM,
    x: null,
    X: null,
    y: rM,
    Y: sM,
    Z: uM,
    "%": Gd
  }, T = {
    a: Ze,
    A: nt,
    b: at,
    B: la,
    c: null,
    d: jd,
    e: jd,
    f: pM,
    g: CM,
    G: SM,
    H: cM,
    I: dM,
    j: fM,
    L: jv,
    m: hM,
    M: vM,
    p: X,
    q: re,
    Q: Yd,
    s: Xd,
    S: mM,
    u: gM,
    U: yM,
    V: bM,
    w: _M,
    W: xM,
    x: null,
    X: null,
    y: wM,
    Y: kM,
    Z: $M,
    "%": Gd
  }, $ = {
    a: D,
    A: N,
    b: I,
    B: G,
    c: z,
    d: Wd,
    e: Wd,
    f: H2,
    g: Hd,
    G: qd,
    H: Ud,
    I: Ud,
    j: L2,
    L: q2,
    m: N2,
    M: V2,
    p: L,
    q: F2,
    Q: U2,
    s: K2,
    S: z2,
    u: O2,
    U: D2,
    V: P2,
    w: M2,
    W: I2,
    x: Y,
    X: ne,
    y: Hd,
    Y: qd,
    Z: R2,
    "%": W2
  };
  C.x = B(n, C), C.X = B(a, C), C.c = B(t, C), T.x = B(n, T), T.X = B(a, T), T.c = B(t, T);
  function B(H, J) {
    return function(se) {
      var U = [], Ie = -1, xe = 0, ot = H.length, rt, Dn, cc;
      for (se instanceof Date || (se = /* @__PURE__ */ new Date(+se)); ++Ie < ot; )
        H.charCodeAt(Ie) === 37 && (U.push(H.slice(xe, Ie)), (Dn = zd[rt = H.charAt(++Ie)]) != null ? rt = H.charAt(++Ie) : Dn = rt === "e" ? " " : "0", (cc = J[rt]) && (rt = cc(se, Dn)), U.push(rt), xe = Ie + 1);
      return U.push(H.slice(xe, Ie)), U.join("");
    };
  }
  function A(H, J) {
    return function(se) {
      var U = eo(1900, void 0, 1), Ie = R(U, H, se += "", 0), xe, ot;
      if (Ie != se.length) return null;
      if ("Q" in U) return new Date(U.Q);
      if ("s" in U) return new Date(U.s * 1e3 + ("L" in U ? U.L : 0));
      if (J && !("Z" in U) && (U.Z = 0), "p" in U && (U.H = U.H % 12 + U.p * 12), U.m === void 0 && (U.m = "q" in U ? U.q : 0), "V" in U) {
        if (U.V < 1 || U.V > 53) return null;
        "w" in U || (U.w = 1), "Z" in U ? (xe = Ts(eo(U.y, 0, 1)), ot = xe.getUTCDay(), xe = ot > 4 || ot === 0 ? ri.ceil(xe) : ri(xe), xe = Gi.offset(xe, (U.V - 1) * 7), U.y = xe.getUTCFullYear(), U.m = xe.getUTCMonth(), U.d = xe.getUTCDate() + (U.w + 6) % 7) : (xe = $s(eo(U.y, 0, 1)), ot = xe.getDay(), xe = ot > 4 || ot === 0 ? oi.ceil(xe) : oi(xe), xe = Go.offset(xe, (U.V - 1) * 7), U.y = xe.getFullYear(), U.m = xe.getMonth(), U.d = xe.getDate() + (U.w + 6) % 7);
      } else ("W" in U || "U" in U) && ("w" in U || (U.w = "u" in U ? U.u % 7 : "W" in U ? 1 : 0), ot = "Z" in U ? Ts(eo(U.y, 0, 1)).getUTCDay() : $s(eo(U.y, 0, 1)).getDay(), U.m = 0, U.d = "W" in U ? (U.w + 6) % 7 + U.W * 7 - (ot + 5) % 7 : U.w + U.U * 7 - (ot + 6) % 7);
      return "Z" in U ? (U.H += U.Z / 100 | 0, U.M += U.Z % 100, Ts(U)) : $s(U);
    };
  }
  function R(H, J, se, U) {
    for (var Ie = 0, xe = J.length, ot = se.length, rt, Dn; Ie < xe; ) {
      if (U >= ot) return -1;
      if (rt = J.charCodeAt(Ie++), rt === 37) {
        if (rt = J.charAt(Ie++), Dn = $[rt in zd ? J.charAt(Ie++) : rt], !Dn || (U = Dn(H, se, U)) < 0) return -1;
      } else if (rt != se.charCodeAt(U++))
        return -1;
    }
    return U;
  }
  function L(H, J, se) {
    var U = c.exec(J.slice(se));
    return U ? (H.p = d.get(U[0].toLowerCase()), se + U[0].length) : -1;
  }
  function D(H, J, se) {
    var U = h.exec(J.slice(se));
    return U ? (H.w = v.get(U[0].toLowerCase()), se + U[0].length) : -1;
  }
  function N(H, J, se) {
    var U = f.exec(J.slice(se));
    return U ? (H.w = p.get(U[0].toLowerCase()), se + U[0].length) : -1;
  }
  function I(H, J, se) {
    var U = x.exec(J.slice(se));
    return U ? (H.m = S.get(U[0].toLowerCase()), se + U[0].length) : -1;
  }
  function G(H, J, se) {
    var U = m.exec(J.slice(se));
    return U ? (H.m = b.get(U[0].toLowerCase()), se + U[0].length) : -1;
  }
  function z(H, J, se) {
    return R(H, t, J, se);
  }
  function Y(H, J, se) {
    return R(H, n, J, se);
  }
  function ne(H, J, se) {
    return R(H, a, J, se);
  }
  function _e(H) {
    return i[H.getDay()];
  }
  function he(H) {
    return r[H.getDay()];
  }
  function q(H) {
    return u[H.getMonth()];
  }
  function oe(H) {
    return s[H.getMonth()];
  }
  function ie(H) {
    return o[+(H.getHours() >= 12)];
  }
  function Ue(H) {
    return 1 + ~~(H.getMonth() / 3);
  }
  function Ze(H) {
    return i[H.getUTCDay()];
  }
  function nt(H) {
    return r[H.getUTCDay()];
  }
  function at(H) {
    return u[H.getUTCMonth()];
  }
  function la(H) {
    return s[H.getUTCMonth()];
  }
  function X(H) {
    return o[+(H.getUTCHours() >= 12)];
  }
  function re(H) {
    return 1 + ~~(H.getUTCMonth() / 3);
  }
  return {
    format: function(H) {
      var J = B(H += "", C);
      return J.toString = function() {
        return H;
      }, J;
    },
    parse: function(H) {
      var J = A(H += "", !1);
      return J.toString = function() {
        return H;
      }, J;
    },
    utcFormat: function(H) {
      var J = B(H += "", T);
      return J.toString = function() {
        return H;
      }, J;
    },
    utcParse: function(H) {
      var J = A(H += "", !0);
      return J.toString = function() {
        return H;
      }, J;
    }
  };
}
var zd = { "-": "", _: " ", 0: "0" }, He = /^\s*\d+/, A2 = /^%/, E2 = /[\\^$*+?|[\]().{}]/g;
function we(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", r = o.length;
  return a + (r < n ? new Array(n - r + 1).join(t) + o : o);
}
function B2(e) {
  return e.replace(E2, "\\$&");
}
function to(e) {
  return new RegExp("^(?:" + e.map(B2).join("|") + ")", "i");
}
function no(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function M2(e, t, n) {
  var a = He.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function O2(e, t, n) {
  var a = He.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function D2(e, t, n) {
  var a = He.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function P2(e, t, n) {
  var a = He.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function I2(e, t, n) {
  var a = He.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function qd(e, t, n) {
  var a = He.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Hd(e, t, n) {
  var a = He.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function R2(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function F2(e, t, n) {
  var a = He.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function N2(e, t, n) {
  var a = He.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Wd(e, t, n) {
  var a = He.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function L2(e, t, n) {
  var a = He.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Ud(e, t, n) {
  var a = He.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function V2(e, t, n) {
  var a = He.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function z2(e, t, n) {
  var a = He.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function q2(e, t, n) {
  var a = He.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function H2(e, t, n) {
  var a = He.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function W2(e, t, n) {
  var a = A2.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function U2(e, t, n) {
  var a = He.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function K2(e, t, n) {
  var a = He.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Kd(e, t) {
  return we(e.getDate(), t, 2);
}
function j2(e, t) {
  return we(e.getHours(), t, 2);
}
function G2(e, t) {
  return we(e.getHours() % 12 || 12, t, 2);
}
function Y2(e, t) {
  return we(1 + Go.count(sn(e), e), t, 3);
}
function Uv(e, t) {
  return we(e.getMilliseconds(), t, 3);
}
function X2(e, t) {
  return Uv(e, t) + "000";
}
function Z2(e, t) {
  return we(e.getMonth() + 1, t, 2);
}
function J2(e, t) {
  return we(e.getMinutes(), t, 2);
}
function Q2(e, t) {
  return we(e.getSeconds(), t, 2);
}
function eM(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function tM(e, t) {
  return we(Yi.count(sn(e) - 1, e), t, 2);
}
function Kv(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Pa(e) : Pa.ceil(e);
}
function nM(e, t) {
  return e = Kv(e), we(Pa.count(sn(e), e) + (sn(e).getDay() === 4), t, 2);
}
function aM(e) {
  return e.getDay();
}
function oM(e, t) {
  return we(oi.count(sn(e) - 1, e), t, 2);
}
function rM(e, t) {
  return we(e.getFullYear() % 100, t, 2);
}
function iM(e, t) {
  return e = Kv(e), we(e.getFullYear() % 100, t, 2);
}
function sM(e, t) {
  return we(e.getFullYear() % 1e4, t, 4);
}
function lM(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Pa(e) : Pa.ceil(e), we(e.getFullYear() % 1e4, t, 4);
}
function uM(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + we(t / 60 | 0, "0", 2) + we(t % 60, "0", 2);
}
function jd(e, t) {
  return we(e.getUTCDate(), t, 2);
}
function cM(e, t) {
  return we(e.getUTCHours(), t, 2);
}
function dM(e, t) {
  return we(e.getUTCHours() % 12 || 12, t, 2);
}
function fM(e, t) {
  return we(1 + Gi.count(ln(e), e), t, 3);
}
function jv(e, t) {
  return we(e.getUTCMilliseconds(), t, 3);
}
function pM(e, t) {
  return jv(e, t) + "000";
}
function hM(e, t) {
  return we(e.getUTCMonth() + 1, t, 2);
}
function vM(e, t) {
  return we(e.getUTCMinutes(), t, 2);
}
function mM(e, t) {
  return we(e.getUTCSeconds(), t, 2);
}
function gM(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function yM(e, t) {
  return we(Xi.count(ln(e) - 1, e), t, 2);
}
function Gv(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ia(e) : Ia.ceil(e);
}
function bM(e, t) {
  return e = Gv(e), we(Ia.count(ln(e), e) + (ln(e).getUTCDay() === 4), t, 2);
}
function _M(e) {
  return e.getUTCDay();
}
function xM(e, t) {
  return we(ri.count(ln(e) - 1, e), t, 2);
}
function wM(e, t) {
  return we(e.getUTCFullYear() % 100, t, 2);
}
function CM(e, t) {
  return e = Gv(e), we(e.getUTCFullYear() % 100, t, 2);
}
function kM(e, t) {
  return we(e.getUTCFullYear() % 1e4, t, 4);
}
function SM(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Ia(e) : Ia.ceil(e), we(e.getUTCFullYear() % 1e4, t, 4);
}
function $M() {
  return "+0000";
}
function Gd() {
  return "%";
}
function Yd(e) {
  return +e;
}
function Xd(e) {
  return Math.floor(+e / 1e3);
}
var fa, Yv, Xv;
TM({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function TM(e) {
  return fa = T2(e), Yv = fa.format, fa.parse, Xv = fa.utcFormat, fa.utcParse, fa;
}
function AM(e) {
  return new Date(e);
}
function EM(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Qu(e, t, n, a, o, r, i, s, u, c) {
  var d = Ov(), f = d.invert, p = d.domain, h = c(".%L"), v = c(":%S"), m = c("%I:%M"), b = c("%I %p"), x = c("%a %d"), S = c("%b %d"), C = c("%B"), T = c("%Y");
  function $(B) {
    return (u(B) < B ? h : s(B) < B ? v : i(B) < B ? m : r(B) < B ? b : a(B) < B ? o(B) < B ? x : S : n(B) < B ? C : T)(B);
  }
  return d.invert = function(B) {
    return new Date(f(B));
  }, d.domain = function(B) {
    return arguments.length ? p(Array.from(B, EM)) : p().map(AM);
  }, d.ticks = function(B) {
    var A = p();
    return e(A[0], A[A.length - 1], B ?? 10);
  }, d.tickFormat = function(B, A) {
    return A == null ? $ : c(A);
  }, d.nice = function(B) {
    var A = p();
    return (!B || typeof B.range != "function") && (B = t(A[0], A[A.length - 1], B ?? 10)), B ? p(Fv(A, B)) : d;
  }, d.copy = function() {
    return jo(d, Qu(e, t, n, a, o, r, i, s, u, c));
  }, d;
}
function BM() {
  return Et.apply(Qu(S2, $2, sn, Zu, Yi, Go, Yu, ju, Nn, Yv).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function MM() {
  return Et.apply(Qu(C2, k2, ln, Ju, Xi, Gi, Xu, Gu, Nn, Xv).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function OM() {
  var e = 0, t = 1, n, a, o, r, i = Qe, s = !1, u;
  function c(f) {
    return f == null || isNaN(f = +f) ? u : i(o === 0 ? 0.5 : (f = (r(f) - n) * o, s ? Math.max(0, Math.min(1, f)) : f));
  }
  c.domain = function(f) {
    return arguments.length ? ([e, t] = f, n = r(e = +e), a = r(t = +t), o = n === a ? 0 : 1 / (a - n), c) : [e, t];
  }, c.clamp = function(f) {
    return arguments.length ? (s = !!f, c) : s;
  }, c.interpolator = function(f) {
    return arguments.length ? (i = f, c) : i;
  };
  function d(f) {
    return function(p) {
      var h, v;
      return arguments.length ? ([h, v] = p, i = f(h, v), c) : [i(0), i(1)];
    };
  }
  return c.range = d(Ka), c.rangeRound = d(Nu), c.unknown = function(f) {
    return arguments.length ? (u = f, c) : u;
  }, function(f) {
    return r = f, n = f(e), a = f(t), o = n === a ? 0 : 1 / (a - n), c;
  };
}
function Zv(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Jv() {
  var e = ra(OM()(Qe));
  return e.copy = function() {
    return Zv(e, Jv());
  }, Bv.apply(e, arguments);
}
function DM() {
  var e = 0, t = 0.5, n = 1, a = 1, o, r, i, s, u, c = Qe, d, f = !1, p;
  function h(m) {
    return isNaN(m = +m) ? p : (m = 0.5 + ((m = +d(m)) - r) * (a * m < a * r ? s : u), c(f ? Math.max(0, Math.min(1, m)) : m));
  }
  h.domain = function(m) {
    return arguments.length ? ([e, t, n] = m, o = d(e = +e), r = d(t = +t), i = d(n = +n), s = o === r ? 0 : 0.5 / (r - o), u = r === i ? 0 : 0.5 / (i - r), a = r < o ? -1 : 1, h) : [e, t, n];
  }, h.clamp = function(m) {
    return arguments.length ? (f = !!m, h) : f;
  }, h.interpolator = function(m) {
    return arguments.length ? (c = m, h) : c;
  };
  function v(m) {
    return function(b) {
      var x, S, C;
      return arguments.length ? ([x, S, C] = b, c = FE(m, [x, S, C]), h) : [c(0), c(0.5), c(1)];
    };
  }
  return h.range = v(Ka), h.rangeRound = v(Nu), h.unknown = function(m) {
    return arguments.length ? (p = m, h) : p;
  }, function(m) {
    return d = m, o = m(e), r = m(t), i = m(n), s = o === r ? 0 : 0.5 / (r - o), u = r === i ? 0 : 0.5 / (i - r), a = r < o ? -1 : 1, h;
  };
}
function Qv() {
  var e = ra(DM()(Qe));
  return e.copy = function() {
    return Zv(e, Qv());
  }, Bv.apply(e, arguments);
}
const Zd = {
  scaleLinear: Iv,
  scalePow: Uu,
  scaleSqrt: h2,
  scaleLog: Nv,
  scaleSymlog: Lv,
  scaleIdentity: Rv,
  scaleTime: BM,
  scaleUtc: MM,
  scaleSequential: Jv,
  scaleDiverging: Qv,
  scaleQuantize: zv,
  scaleQuantile: Vv,
  scaleThreshold: qv,
  scaleOrdinal: zu,
  scaleBand: qu,
  scalePoint: zB
};
var Pe;
(function(e) {
  e.X = "x", e.Y = "y";
})(Pe || (Pe = {}));
var Hn;
(function(e) {
  e.West = "west", e.East = "east", e.North = "north", e.South = "south";
})(Hn || (Hn = {}));
const PM = Object.assign(Object.assign({}, Zh), { components: [], tooltip: void 0, crosshair: void 0, annotations: void 0, xAxis: void 0, yAxis: void 0, autoMargin: !0, xScale: void 0, xDomain: void 0, xDomainMinConstraint: void 0, xDomainMaxConstraint: void 0, xRange: void 0, yScale: void 0, yDomain: void 0, yDomainMinConstraint: void 0, yDomainMaxConstraint: void 0, yRange: void 0, yDirection: Hn.North, preventEmptyDomain: null, scaleByDomain: !1, clipPathExtend: 2 });
class IM extends xo {
  constructor(t, n, a) {
    var o, r;
    super(t), this._defaultConfig = PM, this.datamodel = new Vu(), this.config = this._defaultConfig, this._clipPathId = dv(), this._axisMargin = { top: 0, bottom: 0, left: 0, right: 0 }, this._firstRender = !0, this._clipPath = this.svg.append("clipPath").attr("id", this._clipPathId), this._clipPath.append("rect");
    const i = "saturate", s = window.location.href.replace(window.location.hash, "");
    this.svg.attr("class", Oe`
      --highlight-filter-id: url(${s}#${i}); // defining a css variable
    `), this._svgDefs.append("filter").attr("id", i).attr("filterUnits", "objectBoundingBox").html('<feColorMatrix type="saturate" in="SourceGraphic" values="1.35"/>'), n && this.updateContainer(n, !0), a && this.setData(a, !0), (this.config.xAxis || this.config.yAxis || !((o = this.components) === null || o === void 0) && o.some((u) => u.datamodel.data)) && this.render(), (r = document.fonts) === null || r === void 0 || r.ready.then(() => {
      this._firstRender || this._renderAxes(0);
    });
  }
  get components() {
    return this.config.components;
  }
  // Overriding ContainerCore default get width method to work with axis auto margin
  get width() {
    const t = this._getMargin();
    return va(this.containerWidth - t.left - t.right, 0, Number.POSITIVE_INFINITY);
  }
  // Overriding ContainerCore default get height method to work with axis auto margin
  get height() {
    const t = this._getMargin();
    return va(this.containerHeight - t.top - t.bottom, 0, Number.POSITIVE_INFINITY);
  }
  setData(t, n) {
    var a, o, r, i, s;
    const { components: u, config: c } = this;
    if (!t)
      return;
    this.datamodel.data = t, u.forEach((f) => {
      f.setData(t);
    }), (a = c.crosshair) === null || a === void 0 || a.setData(t), (o = c.xAxis) === null || o === void 0 || o.setData(t), (r = c.yAxis) === null || r === void 0 || r.setData(t), !Kn(this.datamodel.data, t) && ((i = c.tooltip) === null || i === void 0 || i.hide(), (s = c.crosshair) === null || s === void 0 || s.hide()), n || this.render();
  }
  updateContainer(t, n) {
    super.updateContainer(t), this._removeAllChildren(), this.setData(this.datamodel.data, !0), t.xAxis && (this.config.xAxis.config.type = ye.X, this.element.appendChild(t.xAxis.element)), t.yAxis && (this.config.yAxis.config.type = ye.Y, this.element.appendChild(t.yAxis.element));
    for (const i of this.components)
      this.element.appendChild(i.element);
    const a = t.tooltip;
    a && (a.hasContainer() || a.setContainer(this._container), a.setComponents(this.components));
    const o = t.crosshair;
    o && (o.setContainer(this.svg), o.tooltip = a, this.element.appendChild(o.element));
    const r = t.annotations;
    r && this.element.appendChild(r.element), this.element.appendChild(this._clipPath.node()), this.element.appendChild(this._svgDefs.node()), this.element.appendChild(this._svgDefsExternal.node()), n || this.render();
  }
  updateComponents(t, n) {
    const { config: a } = this;
    this.components.forEach((o, r) => {
      t[r] && o.setConfig(t[r]);
    }), this._updateScales(...this.components, a.xAxis, a.yAxis, a.crosshair), n || this.render();
  }
  update(t, n, a) {
    a && (this.datamodel.data = a), t && this.updateContainer(t, !0), n && this.updateComponents(n, !0), this.render();
  }
  _preRender() {
    const { config: t } = this;
    super._preRender(), t.autoMargin && this._setAutoMargin();
    const n = Xa([...this.components, t.xAxis, t.yAxis, t.crosshair, t.annotations]), a = this._getMargin();
    for (const o of n)
      o.setSize(this.width, this.height, this.containerWidth, this.containerHeight), o.setContainerMargin(a);
    this._updateScales(...this.components, t.xAxis, t.yAxis, t.crosshair);
  }
  _render(t) {
    var n, a, o, r, i;
    const { config: s } = this;
    super._render();
    const u = this._getMargin();
    for (const f of this.components)
      f.g.attr("transform", `translate(${u.left},${u.top})`).style("clip-path", f.clippable ? `url(#${this._clipPathId})` : null).style("-webkit-clip-path", f.clippable ? `url(#${this._clipPathId})` : null), f.render(t);
    this._renderAxes(this._firstRender ? 0 : t);
    const c = s.clipPathExtend;
    this._clipPath.select("rect").attr("x", -c).attr("y", -c).attr("width", this.width + 2 * c).attr("height", this.height + 2 * c), (n = s.tooltip) === null || n === void 0 || n.update();
    const d = s.crosshair;
    if (d) {
      const f = this.components.filter((m) => !m.stacked).map((m) => m.config.y), p = this.components.filter((m) => m.stacked).map((m) => m.config.y), h = (a = this.components.find((m) => m.config.baseline)) === null || a === void 0 ? void 0 : a.config, v = h == null ? void 0 : h.baseline;
      d.accessors = {
        x: (o = this.components[0]) === null || o === void 0 ? void 0 : o.config.x,
        y: Js(f),
        yStacked: Js(p),
        baseline: v
      }, d.g.attr("transform", `translate(${u.left},${u.top})`).style("clip-path", `url(#${this._clipPathId})`).style("-webkit-clip-path", `url(#${this._clipPathId})`), d.render();
    }
    (r = s.annotations) === null || r === void 0 || r.g.attr("transform", `translate(${u.left},${u.top})`), (i = s.annotations) === null || i === void 0 || i.render(), this._firstRender = !1;
  }
  _updateScales(...t) {
    const n = Xa(t || this.components);
    this._setScales(...n), this._updateScalesDomain(...n), this._updateScalesRange(...n);
  }
  _setScales(...t) {
    const { config: n } = this;
    t && (n.xScale && t.forEach((a) => a.setScale(Pe.X, n.xScale)), n.yScale && t.forEach((a) => a.setScale(Pe.Y, n.yScale)));
  }
  _updateScalesDomain(...t) {
    const { config: n } = this;
    if (!t)
      return;
    const a = t.filter((o) => !o.config.excludeFromDomainCalculation);
    Object.values(Pe).forEach((o) => {
      var r, i, s, u, c, d, f, p;
      const [h, v] = bT(AT(a.map(($) => $.getDataExtent(o, n.scaleByDomain)))), m = o === Pe.Y ? n.yDomain : n.xDomain, b = o === Pe.Y ? n.yDomainMinConstraint : n.xDomainMinConstraint, x = o === Pe.Y ? n.yDomainMaxConstraint : n.xDomainMaxConstraint, S = (i = (r = m == null ? void 0 : m[0]) !== null && r !== void 0 ? r : h) !== null && i !== void 0 ? i : 0, C = (u = (s = m == null ? void 0 : m[1]) !== null && s !== void 0 ? s : v) !== null && u !== void 0 ? u : 1, T = [
        va(S, (c = b == null ? void 0 : b[0]) !== null && c !== void 0 ? c : Number.NEGATIVE_INFINITY, (d = b == null ? void 0 : b[1]) !== null && d !== void 0 ? d : Number.POSITIVE_INFINITY),
        va(C, (f = x == null ? void 0 : x[0]) !== null && f !== void 0 ? f : Number.NEGATIVE_INFINITY, (p = x == null ? void 0 : x[1]) !== null && p !== void 0 ? p : Number.POSITIVE_INFINITY)
      ];
      if (T[0] === T[1]) {
        const $ = a.some((B) => {
          var A;
          return ((A = B.datamodel.data) === null || A === void 0 ? void 0 : A.length) > 0;
        });
        (n.preventEmptyDomain || n.preventEmptyDomain === null && (!$ || o === Pe.Y)) && (T[1] = T[0] + 1);
      }
      t.forEach(($) => $.setScaleDomain(o, T));
    });
  }
  _updateScalesRange(...t) {
    var n, a, o, r, i, s;
    const { config: u } = this;
    if (!t)
      return;
    const c = u.yDirection === Hn.South, d = [(n = u.padding.left) !== null && n !== void 0 ? n : 0, this.width - ((a = u.padding.right) !== null && a !== void 0 ? a : 0)], f = [this.height - ((o = u.padding.bottom) !== null && o !== void 0 ? o : 0), (r = u.padding.top) !== null && r !== void 0 ? r : 0];
    c && f.reverse();
    for (const h of t)
      h.setSize(this.width, this.height, this.containerWidth, this.containerHeight), h.setScaleRange(Pe.X, (i = u.xRange) !== null && i !== void 0 ? i : d), h.setScaleRange(Pe.Y, (s = u.yRange) !== null && s !== void 0 ? s : f);
    const p = t.map((h) => h.bleed).reduce((h, v) => {
      for (const m of Object.keys(h)) {
        const b = m;
        h[b] < v[b] && (h[b] = v[b]);
      }
      return h;
    }, { top: 0, bottom: 0, left: 0, right: 0 });
    for (const h of t)
      h.setScaleRange(Pe.X, [d[0] + p.left, d[1] - p.right]), h.setScaleRange(
        Pe.Y,
        c ? [f[0] + p.top, f[1] - p.bottom] : [f[0] - p.bottom, f[1] + p.top]
        // if Y axis is directed upwards
      );
  }
  _renderAxes(t) {
    const { config: { xAxis: n, yAxis: a } } = this, o = this._getMargin();
    Xa([n, a]).forEach((i) => {
      const s = i.getOffset(o);
      i.g.attr("transform", `translate(${s.left},${s.top})`), i.render(t);
    });
  }
  _setAutoMargin() {
    const { config: { xAxis: t, yAxis: n } } = this, a = Xa([...this.components, t, n]);
    this._setScales(...a), this._updateScalesDomain(...a);
    const o = this._firstRender ? 2 : 1;
    for (let r = 0; r < o; r += 1) {
      const i = { top: 0, bottom: 0, left: 0, right: 0 };
      this._updateScalesRange(...a), Xa([t, n]).forEach((u) => {
        u.preRender();
        const c = u.getRequiredMargin();
        i.top < c.top && (i.top = c.top), i.bottom < c.bottom && (i.bottom = c.bottom), i.left < c.left && (i.left = c.left), i.right < c.right && (i.right = c.right);
      }), this._axisMargin = i;
    }
  }
  _getMargin() {
    const { config: { margin: t } } = this;
    return {
      top: t.top + this._axisMargin.top,
      bottom: t.bottom + this._axisMargin.bottom,
      left: t.left + this._axisMargin.left,
      right: t.right + this._axisMargin.right
    };
  }
  destroy() {
    const { components: t, config: { tooltip: n, crosshair: a, annotations: o, xAxis: r, yAxis: i } } = this;
    super.destroy();
    for (const s of t)
      s == null || s.destroy();
    n == null || n.destroy(), a == null || a.destroy(), o == null || o.destroy(), r == null || r.destroy(), i == null || i.destroy();
  }
}
const em = {
  duration: 600,
  events: {},
  attributes: {}
};
class RM {
  constructor(t = uo.SVG) {
    var n, a;
    this.type = uo.SVG, this.datamodel = new Vu(), this.sizing = Ea.Fit, this.events = {}, this._defaultConfig = em, this._width = 400, this._height = 200, this._containerWidth = void 0, this._containerHeight = void 0, this._containerMargin = { top: 0, bottom: 0, left: 0, right: 0 }, this._setUpComponentEventsThrottled = Gc(this._setUpComponentEvents, 500), this._setCustomAttributesThrottled = Gc(this._setCustomAttributes, 500), t === uo.SVG ? this.element = document.createElementNS("http://www.w3.org/2000/svg", "g") : this.element = document.createElement("div"), this.uid = dv(), this.g = kt(this.element);
    const o = (a = (n = this.constructor) === null || n === void 0 ? void 0 : n.selectors) === null || a === void 0 ? void 0 : a.root;
    o && this.g.attr("class", o);
  }
  /** Set the container margin. Called automatically by containers. */
  setContainerMargin(t) {
    this._containerMargin = t;
  }
  setConfig(t) {
    this.prevConfig = this.config, this.config = Ba(this._defaultConfig, t);
  }
  setData(t) {
    this.datamodel.data = t;
  }
  setSize(t, n, a, o) {
    isFinite(t) && (this._width = t), isFinite(n) && (this._height = n), isFinite(a) && (this._containerWidth = a), isFinite(o) && (this._containerHeight = o);
  }
  render(t = this.config.duration) {
    this._render(t);
    const n = "animating";
    t && (this.g.attr(n, ""), this.g.transition(n).duration(t).on("end interrupt", () => {
      this.g.attr(n, null);
    })), this._setUpComponentEventsThrottled(), this._setCustomAttributesThrottled();
  }
  get bleed() {
    return { top: 0, bottom: 0, left: 0, right: 0 };
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _render(t = this.config.duration) {
  }
  _setCustomAttributes() {
    const t = this.config.attributes;
    Object.keys(t).forEach((n) => {
      Object.keys(t[n]).forEach((a) => {
        this.g.selectAll(`.${n}`).attr(a, t[n][a]);
      });
    });
  }
  _setUpComponentEvents() {
    this._bindEvents(this.events), this._bindEvents(this.config.events, ".user");
  }
  _bindEvents(t = this.events, n = "") {
    Object.keys(t).forEach((a) => {
      Object.keys(t[a]).forEach((o) => {
        const r = this.g.selectAll(`.${a}`);
        r.on(o + n, (i, s) => {
          const u = r.nodes(), c = u.indexOf(i.currentTarget), d = t[a][o];
          return d == null ? void 0 : d(s, i, c, u);
        });
      });
    });
  }
  destroy() {
    var t;
    (t = this.g) === null || t === void 0 || t.remove(), this.element = void 0;
  }
  isDestroyed() {
    return !this.element;
  }
}
class FM extends Vu {
  constructor(t) {
    super(t);
  }
  get data() {
    var t;
    return (t = this._data) !== null && t !== void 0 ? t : [];
  }
  set data(t) {
    Array.isArray(t) && (this._data = t);
  }
}
const ec = Object.assign(Object.assign({}, em), { x: void 0, y: void 0, id: (e, t) => {
  var n;
  return (n = e.id) !== null && n !== void 0 ? n : `${t}`;
}, color: (e) => e.color, xScale: void 0, yScale: void 0, excludeFromDomainCalculation: !1 });
class tm extends RM {
  constructor() {
    super(...arguments), this.datamodel = new FM(), this.clippable = !0, this.stacked = !1, this._defaultConfig = ec, this._xScale = Zd.scaleLinear(), this._yScale = Zd.scaleLinear();
  }
  get xScale() {
    return this.config.xScale || this._xScale;
  }
  get yScale() {
    return this.config.yScale || this._yScale;
  }
  setConfig(t) {
    var n, a;
    !((n = this.config) === null || n === void 0) && n.xScale && (t.xScale = this.config.xScale), !((a = this.config) === null || a === void 0) && a.yScale && (t.yScale = this.config.yScale), super.setConfig(t);
  }
  setScaleDomain(t, n) {
    var a, o;
    t === Pe.X && ((a = this._xScale) === null || a === void 0 || a.domain(n)), t === Pe.Y && ((o = this._yScale) === null || o === void 0 || o.domain(n));
  }
  setScaleRange(t, n) {
    var a, o;
    t === Pe.X && ((a = this._xScale) === null || a === void 0 || a.range(n)), t === Pe.Y && ((o = this._yScale) === null || o === void 0 || o.range(n));
  }
  setScale(t, n) {
    n && t === Pe.X && (this._xScale = n), n && t === Pe.Y && (this._yScale = n);
  }
  getDataExtent(t, n) {
    const { config: a, datamodel: o } = this;
    switch (t) {
      case Pe.X:
        return this.getXDataExtent();
      case Pe.Y:
        return this.getYDataExtent(n);
      default:
        return ms(o.data, a[t]);
    }
  }
  getXDataExtent() {
    const { config: t, datamodel: n } = this;
    return ms(n.data, t.x);
  }
  /** Some components override this method to provide custom data extent calculation */
  getYDataExtent(t) {
    const { config: n, datamodel: a } = this, o = this.xScale.domain(), r = t ? IT(a.data, o, n.x, !0) : a.data, i = Vi(n.y) ? n.y : [n.y];
    return ms(r, ...i);
  }
}
var me;
(function(e) {
  e.Top = "top", e.Bottom = "bottom", e.Left = "left", e.Right = "right", e.Center = "center", e.Auto = "auto";
})(me || (me = {}));
var Jd;
(function(e) {
  e.Absolute = "absolute", e.Fixed = "fixed";
})(Jd || (Jd = {}));
var Qd;
(function(e) {
  e.Inside = "inside", e.Outside = "outside", e.Center = "center";
})(Qd || (Qd = {}));
var ef;
(function(e) {
  e.Horizontal = "horizontal", e.Vertical = "vertical";
})(ef || (ef = {}));
function Pt(e) {
  return function() {
    return e;
  };
}
const nm = Math.cos, ii = Math.sin, Bt = Math.sqrt, tf = 1e-12, si = Math.PI, Zi = 2 * si, hl = Math.PI, vl = 2 * hl, Pn = 1e-6, NM = vl - Pn;
function am(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function LM(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return am;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, r = a.length; o < r; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class VM {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? am : LM(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, a, o) {
    this._append`Q${+t},${+n},${this._x1 = +a},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, a, o, r, i) {
    this._append`C${+t},${+n},${+a},${+o},${this._x1 = +r},${this._y1 = +i}`;
  }
  arcTo(t, n, a, o, r) {
    if (t = +t, n = +n, a = +a, o = +o, r = +r, r < 0) throw new Error(`negative radius: ${r}`);
    let i = this._x1, s = this._y1, u = a - t, c = o - n, d = i - t, f = s - n, p = d * d + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (p > Pn) if (!(Math.abs(f * u - c * d) > Pn) || !r)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let h = a - i, v = o - s, m = u * u + c * c, b = h * h + v * v, x = Math.sqrt(m), S = Math.sqrt(p), C = r * Math.tan((hl - Math.acos((m + p - b) / (2 * x * S))) / 2), T = C / S, $ = C / x;
      Math.abs(T - 1) > Pn && this._append`L${t + T * d},${n + T * f}`, this._append`A${r},${r},0,0,${+(f * h > d * v)},${this._x1 = t + $ * u},${this._y1 = n + $ * c}`;
    }
  }
  arc(t, n, a, o, r, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let s = a * Math.cos(o), u = a * Math.sin(o), c = t + s, d = n + u, f = 1 ^ i, p = i ? o - r : r - o;
    this._x1 === null ? this._append`M${c},${d}` : (Math.abs(this._x1 - c) > Pn || Math.abs(this._y1 - d) > Pn) && this._append`L${c},${d}`, a && (p < 0 && (p = p % vl + vl), p > NM ? this._append`A${a},${a},0,1,${f},${t - s},${n - u}A${a},${a},0,1,${f},${this._x1 = c},${this._y1 = d}` : p > Pn && this._append`A${a},${a},0,${+(p >= hl)},${f},${this._x1 = t + a * Math.cos(r)},${this._y1 = n + a * Math.sin(r)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function om(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const a = Math.floor(n);
      if (!(a >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = a;
    }
    return e;
  }, () => new VM(t);
}
function zM(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function rm(e) {
  this._context = e;
}
rm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function im(e) {
  return new rm(e);
}
function qM(e) {
  return e[0];
}
function HM(e) {
  return e[1];
}
function WM(e, t) {
  var n = Pt(!0), a = null, o = im, r = null, i = om(s);
  e = typeof e == "function" ? e : e === void 0 ? qM : Pt(e), t = typeof t == "function" ? t : t === void 0 ? HM : Pt(t);
  function s(u) {
    var c, d = (u = zM(u)).length, f, p = !1, h;
    for (a == null && (r = o(h = i())), c = 0; c <= d; ++c)
      !(c < d && n(f = u[c], c, u)) === p && ((p = !p) ? r.lineStart() : r.lineEnd()), p && r.point(+e(f, c, u), +t(f, c, u));
    if (h) return r = null, h + "" || null;
  }
  return s.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : Pt(+u), s) : e;
  }, s.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : Pt(+u), s) : t;
  }, s.defined = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : Pt(!!u), s) : n;
  }, s.curve = function(u) {
    return arguments.length ? (o = u, a != null && (r = o(a)), s) : o;
  }, s.context = function(u) {
    return arguments.length ? (u == null ? a = r = null : r = o(a = u), s) : a;
  }, s;
}
const sm = {
  draw(e, t) {
    const n = Bt(t / si);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, Zi);
  }
}, UM = {
  draw(e, t) {
    const n = Bt(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, lm = Bt(1 / 3), KM = lm * 2, jM = {
  draw(e, t) {
    const n = Bt(t / KM), a = n * lm;
    e.moveTo(0, -n), e.lineTo(a, 0), e.lineTo(0, n), e.lineTo(-a, 0), e.closePath();
  }
}, GM = {
  draw(e, t) {
    const n = Bt(t), a = -n / 2;
    e.rect(a, a, n, n);
  }
}, YM = 0.8908130915292852, um = ii(si / 10) / ii(7 * si / 10), XM = ii(Zi / 10) * um, ZM = -nm(Zi / 10) * um, JM = {
  draw(e, t) {
    const n = Bt(t * YM), a = XM * n, o = ZM * n;
    e.moveTo(0, -n), e.lineTo(a, o);
    for (let r = 1; r < 5; ++r) {
      const i = Zi * r / 5, s = nm(i), u = ii(i);
      e.lineTo(u * n, -s * n), e.lineTo(s * a - u * o, u * a + s * o);
    }
    e.closePath();
  }
}, As = Bt(3), QM = {
  draw(e, t) {
    const n = -Bt(t / (As * 3));
    e.moveTo(0, n * 2), e.lineTo(-As * n, -n), e.lineTo(As * n, -n), e.closePath();
  }
}, pt = -0.5, ht = Bt(3) / 2, ml = 1 / Bt(12), eO = (ml / 2 + 1) * 3, tO = {
  draw(e, t) {
    const n = Bt(t / eO), a = n / 2, o = n * ml, r = a, i = n * ml + n, s = -r, u = i;
    e.moveTo(a, o), e.lineTo(r, i), e.lineTo(s, u), e.lineTo(pt * a - ht * o, ht * a + pt * o), e.lineTo(pt * r - ht * i, ht * r + pt * i), e.lineTo(pt * s - ht * u, ht * s + pt * u), e.lineTo(pt * a + ht * o, pt * o - ht * a), e.lineTo(pt * r + ht * i, pt * i - ht * r), e.lineTo(pt * s + ht * u, pt * u - ht * s), e.closePath();
  }
};
function nO(e, t) {
  let n = null, a = om(o);
  e = typeof e == "function" ? e : Pt(e || sm), t = typeof t == "function" ? t : Pt(t === void 0 ? 64 : +t);
  function o() {
    let r;
    if (n || (n = r = a()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), r) return n = null, r + "" || null;
  }
  return o.type = function(r) {
    return arguments.length ? (e = typeof r == "function" ? r : Pt(r), o) : e;
  }, o.size = function(r) {
    return arguments.length ? (t = typeof r == "function" ? r : Pt(+r), o) : t;
  }, o.context = function(r) {
    return arguments.length ? (n = r ?? null, o) : n;
  }, o;
}
function Tn() {
}
function li(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function Ji(e) {
  this._context = e;
}
Ji.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        li(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        li(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function aO(e) {
  return new Ji(e);
}
function cm(e) {
  this._context = e;
}
cm.prototype = {
  areaStart: Tn,
  areaEnd: Tn,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        li(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function oO(e) {
  return new cm(e);
}
function dm(e) {
  this._context = e;
}
dm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var n = (this._x0 + 4 * this._x1 + e) / 6, a = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(n, a) : this._context.moveTo(n, a);
        break;
      case 3:
        this._point = 4;
      default:
        li(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function rO(e) {
  return new dm(e);
}
function fm(e, t) {
  this._basis = new Ji(e), this._beta = t;
}
fm.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length - 1;
    if (n > 0)
      for (var a = e[0], o = t[0], r = e[n] - a, i = t[n] - o, s = -1, u; ++s <= n; )
        u = s / n, this._basis.point(
          this._beta * e[s] + (1 - this._beta) * (a + u * r),
          this._beta * t[s] + (1 - this._beta) * (o + u * i)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const iO = function e(t) {
  function n(a) {
    return t === 1 ? new Ji(a) : new fm(a, t);
  }
  return n.beta = function(a) {
    return e(+a);
  }, n;
}(0.85);
function ui(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function tc(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
tc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        ui(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2, this._x1 = e, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      default:
        ui(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const sO = function e(t) {
  function n(a) {
    return new tc(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function nc(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
nc.prototype = {
  areaStart: Tn,
  areaEnd: Tn,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        ui(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const lO = function e(t) {
  function n(a) {
    return new nc(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function ac(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
ac.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        ui(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const uO = function e(t) {
  function n(a) {
    return new ac(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function oc(e, t, n) {
  var a = e._x1, o = e._y1, r = e._x2, i = e._y2;
  if (e._l01_a > tf) {
    var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, u = 3 * e._l01_a * (e._l01_a + e._l12_a);
    a = (a * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / u, o = (o * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / u;
  }
  if (e._l23_a > tf) {
    var c = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, d = 3 * e._l23_a * (e._l23_a + e._l12_a);
    r = (r * c + e._x1 * e._l23_2a - t * e._l12_2a) / d, i = (i * c + e._y1 * e._l23_2a - n * e._l12_2a) / d;
  }
  e._context.bezierCurveTo(a, o, r, i, e._x2, e._y2);
}
function pm(e, t) {
  this._context = e, this._alpha = t;
}
pm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var n = this._x2 - e, a = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + a * a, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        oc(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const cO = function e(t) {
  function n(a) {
    return t ? new pm(a, t) : new tc(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function hm(e, t) {
  this._context = e, this._alpha = t;
}
hm.prototype = {
  areaStart: Tn,
  areaEnd: Tn,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var n = this._x2 - e, a = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + a * a, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        oc(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const dO = function e(t) {
  function n(a) {
    return t ? new hm(a, t) : new nc(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function vm(e, t) {
  this._context = e, this._alpha = t;
}
vm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var n = this._x2 - e, a = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + a * a, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        oc(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const fO = function e(t) {
  function n(a) {
    return t ? new vm(a, t) : new ac(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function mm(e) {
  this._context = e;
}
mm.prototype = {
  areaStart: Tn,
  areaEnd: Tn,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function pO(e) {
  return new mm(e);
}
function nf(e) {
  return e < 0 ? -1 : 1;
}
function af(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, r = (e._y1 - e._y0) / (a || o < 0 && -0), i = (n - e._y1) / (o || a < 0 && -0), s = (r * o + i * a) / (a + o);
  return (nf(r) + nf(i)) * Math.min(Math.abs(r), Math.abs(i), 0.5 * Math.abs(s)) || 0;
}
function of(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Es(e, t, n) {
  var a = e._x0, o = e._y0, r = e._x1, i = e._y1, s = (r - a) / 3;
  e._context.bezierCurveTo(a + s, o + s * t, r - s, i - s * n, r, i);
}
function ci(e) {
  this._context = e;
}
ci.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Es(this, this._t0, of(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var n = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Es(this, of(this, n = af(this, e, t)), n);
          break;
        default:
          Es(this, this._t0, n = af(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function gm(e) {
  this._context = new ym(e);
}
(gm.prototype = Object.create(ci.prototype)).point = function(e, t) {
  ci.prototype.point.call(this, t, e);
};
function ym(e) {
  this._context = e;
}
ym.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, n, a, o, r) {
    this._context.bezierCurveTo(t, e, a, n, r, o);
  }
};
function hO(e) {
  return new ci(e);
}
function vO(e) {
  return new gm(e);
}
function bm(e) {
  this._context = e;
}
bm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length;
    if (n)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), n === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var a = rf(e), o = rf(t), r = 0, i = 1; i < n; ++r, ++i)
          this._context.bezierCurveTo(a[0][r], o[0][r], a[1][r], o[1][r], e[i], t[i]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function rf(e) {
  var t, n = e.length - 1, a, o = new Array(n), r = new Array(n), i = new Array(n);
  for (o[0] = 0, r[0] = 2, i[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) o[t] = 1, r[t] = 4, i[t] = 4 * e[t] + 2 * e[t + 1];
  for (o[n - 1] = 2, r[n - 1] = 7, i[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) a = o[t] / r[t - 1], r[t] -= a, i[t] -= a * i[t - 1];
  for (o[n - 1] = i[n - 1] / r[n - 1], t = n - 2; t >= 0; --t) o[t] = (i[t] - o[t + 1]) / r[t];
  for (r[n - 1] = (e[n] + o[n - 1]) / 2, t = 0; t < n - 1; ++t) r[t] = 2 * e[t + 1] - o[t + 1];
  return [o, r];
}
function mO(e) {
  return new bm(e);
}
function Qi(e, t) {
  this._context = e, this._t = t;
}
Qi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var n = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(n, this._y), this._context.lineTo(n, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function gO(e) {
  return new Qi(e, 0.5);
}
function yO(e) {
  return new Qi(e, 0);
}
function bO(e) {
  return new Qi(e, 1);
}
function sf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function _O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sf(Object(n), !0).forEach(function(a) {
      xO(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sf(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function ho(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ho = function(t) {
    return typeof t;
  } : ho = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ho(e);
}
function xO(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function di() {
  return di = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, di.apply(this, arguments);
}
function wO(e, t) {
  if (e) {
    if (typeof e == "string") return lf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lf(e, t);
  }
}
function lf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function _m(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = wO(e)) || t) {
      n && (e = n);
      var a = 0, o = function() {
      };
      return {
        s: o,
        n: function() {
          return a >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[a++]
          };
        },
        e: function(u) {
          throw u;
        },
        f: o
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var r = !0, i = !1, s;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var u = n.next();
      return r = u.done, u;
    },
    e: function(u) {
      i = !0, s = u;
    },
    f: function() {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (i) throw s;
      }
    }
  };
}
function CO(e, t) {
  var n = [], a = [];
  function o(r, i) {
    if (r.length === 1)
      n.push(r[0]), a.push(r[0]);
    else {
      for (var s = Array(r.length - 1), u = 0; u < s.length; u++)
        u === 0 && n.push(r[0]), u === s.length - 1 && a.push(r[u + 1]), s[u] = [(1 - i) * r[u][0] + i * r[u + 1][0], (1 - i) * r[u][1] + i * r[u + 1][1]];
      o(s, i);
    }
  }
  return e.length && o(e, t), {
    left: n,
    right: a.reverse()
  };
}
function kO(e) {
  var t = {};
  return e.length === 4 && (t.x2 = e[2][0], t.y2 = e[2][1]), e.length >= 3 && (t.x1 = e[1][0], t.y1 = e[1][1]), t.x = e[e.length - 1][0], t.y = e[e.length - 1][1], e.length === 4 ? t.type = "C" : e.length === 3 ? t.type = "Q" : t.type = "L", t;
}
function SO(e, t) {
  t = t || 2;
  for (var n = [], a = e, o = 1 / t, r = 0; r < t - 1; r++) {
    var i = o / (1 - o * r), s = CO(a, i);
    n.push(s.left), a = s.right;
  }
  return n.push(a), n;
}
function $O(e, t, n) {
  var a = [[e.x, e.y]];
  return t.x1 != null && a.push([t.x1, t.y1]), t.x2 != null && a.push([t.x2, t.y2]), a.push([t.x, t.y]), SO(a, n).map(kO);
}
var TO = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g, wa = {
  M: ["x", "y"],
  L: ["x", "y"],
  H: ["x"],
  V: ["y"],
  C: ["x1", "y1", "x2", "y2", "x", "y"],
  S: ["x2", "y2", "x", "y"],
  Q: ["x1", "y1", "x", "y"],
  T: ["x", "y"],
  A: ["rx", "ry", "xAxisRotation", "largeArcFlag", "sweepFlag", "x", "y"],
  Z: []
};
Object.keys(wa).forEach(function(e) {
  wa[e.toLowerCase()] = wa[e];
});
function gl(e, t) {
  for (var n = Array(e), a = 0; a < e; a++)
    n[a] = t;
  return n;
}
function AO(e) {
  return "".concat(e.type).concat(wa[e.type].map(function(t) {
    return e[t];
  }).join(","));
}
function EO(e, t) {
  var n = {
    x1: "x",
    y1: "y",
    x2: "x",
    y2: "y"
  }, a = ["xAxisRotation", "largeArcFlag", "sweepFlag"];
  if (e.type !== t.type && t.type.toUpperCase() !== "M") {
    var o = {};
    Object.keys(t).forEach(function(r) {
      var i = t[r], s = e[r];
      s === void 0 && (a.includes(r) ? s = i : (s === void 0 && n[r] && (s = e[n[r]]), s === void 0 && (s = 0))), o[r] = s;
    }), o.type = t.type, e = o;
  }
  return e;
}
function BO(e, t, n) {
  var a = [];
  if (t.type === "L" || t.type === "Q" || t.type === "C")
    a = a.concat($O(e, t, n));
  else {
    var o = di({}, e);
    o.type === "M" && (o.type = "L"), a = a.concat(gl(n - 1).map(function() {
      return o;
    })), a.push(t);
  }
  return a;
}
function uf(e, t, n) {
  var a = e.length - 1, o = t.length - 1, r = a / o, i = gl(o).reduce(function(u, c, d) {
    var f = Math.floor(r * d);
    if (n && f < e.length - 1 && n(e[f], e[f + 1])) {
      var p = r * d % 1 < 0.5;
      u[f] && (p ? f > 0 ? f -= 1 : f < e.length - 1 && (f += 1) : f < e.length - 1 ? f += 1 : f > 0 && (f -= 1));
    }
    return u[f] = (u[f] || 0) + 1, u;
  }, []), s = i.reduce(function(u, c, d) {
    if (d === e.length - 1) {
      var f = gl(c, di({}, e[e.length - 1]));
      return f[0].type === "M" && f.forEach(function(p) {
        p.type = "L";
      }), u.concat(f);
    }
    return u.concat(BO(e[d], e[d + 1], c));
  }, []);
  return s.unshift(e[0]), s;
}
function cf(e) {
  for (var t = (e || "").match(TO) || [], n = [], a, o, r = 0; r < t.length; ++r)
    if (a = wa[t[r]], a) {
      o = {
        type: t[r]
      };
      for (var i = 0; i < a.length; ++i)
        o[a[i]] = +t[r + i + 1];
      r += a.length, n.push(o);
    }
  return n;
}
function MO(e, t, n) {
  var a = e == null ? [] : e.slice(), o = t == null ? [] : t.slice(), r = ho(n) === "object" ? n : {
    excludeSegment: n,
    snapEndsToInput: !0
  }, i = r.excludeSegment, s = r.snapEndsToInput;
  if (!a.length && !o.length)
    return function() {
      return [];
    };
  var u = (a.length === 0 || a[a.length - 1].type === "Z") && (o.length === 0 || o[o.length - 1].type === "Z");
  a.length > 0 && a[a.length - 1].type === "Z" && a.pop(), o.length > 0 && o[o.length - 1].type === "Z" && o.pop(), a.length ? o.length || o.push(a[0]) : a.push(o[0]);
  var c = Math.abs(o.length - a.length);
  c !== 0 && (o.length > a.length ? a = uf(a, o, i) : o.length < a.length && (o = uf(o, a, i))), a = a.map(function(f, p) {
    return EO(f, o[p]);
  });
  var d = a.map(function(f) {
    return _O({}, f);
  });
  return u && (d.push({
    type: "Z"
  }), a.push({
    type: "Z"
  })), function(p) {
    if (p === 1 && s)
      return t ?? [];
    if (p === 0)
      return a;
    for (var h = 0; h < d.length; ++h) {
      var v = a[h], m = o[h], b = d[h], x = _m(wa[b.type]), S;
      try {
        for (x.s(); !(S = x.n()).done; ) {
          var C = S.value;
          b[C] = (1 - p) * v[C] + p * m[C], (C === "largeArcFlag" || C === "sweepFlag") && (b[C] = Math.round(b[C]));
        }
      } catch (T) {
        x.e(T);
      } finally {
        x.f();
      }
    }
    return d;
  };
}
function OO(e, t, n) {
  var a = cf(e), o = cf(t), r = ho(n) === "object" ? n : {
    excludeSegment: n,
    snapEndsToInput: !0
  }, i = r.excludeSegment, s = r.snapEndsToInput;
  if (!a.length && !o.length)
    return function() {
      return "";
    };
  var u = MO(a, o, {
    excludeSegment: i,
    snapEndsToInput: s
  });
  return function(d) {
    if (d === 1 && s)
      return t ?? "";
    var f = u(d), p = "", h = _m(f), v;
    try {
      for (h.s(); !(v = h.n()).done; ) {
        var m = v.value;
        p += AO(m);
      }
    } catch (b) {
      h.e(b);
    } finally {
      h.f();
    }
    return p;
  };
}
function Ar(e, t, n, a) {
  return Array.isArray(t) && isFinite(n) ? t[n % t.length] : $u(e, t, n) || (ya(n) ? `var(${gn(n)})` : null);
}
var Me;
(function(e) {
  e.Basis = "basis", e.BasisClosed = "basisClosed", e.BasisOpen = "basisOpen", e.Bundle = "bundle", e.Cardinal = "cardinal", e.CardinalClosed = "cardinalClosed", e.CardinalOpen = "cardinalOpen", e.CatmullRom = "catmullRom", e.CatmullRomClosed = "catmullRomClosed", e.CatmullRomOpen = "catmullRomOpen", e.Linear = "linear", e.LinearClosed = "linearClosed", e.MonotoneX = "monotoneX", e.MonotoneY = "monotoneY", e.Natural = "natural", e.Step = "step", e.StepAfter = "stepAfter", e.StepBefore = "stepBefore";
})(Me || (Me = {}));
const df = {
  [Me.Basis]: aO,
  [Me.BasisClosed]: oO,
  [Me.BasisOpen]: rO,
  [Me.Bundle]: iO,
  [Me.Cardinal]: sO,
  [Me.CardinalClosed]: lO,
  [Me.CardinalOpen]: uO,
  [Me.CatmullRom]: cO,
  [Me.CatmullRomClosed]: dO,
  [Me.CatmullRomOpen]: fO,
  [Me.Linear]: im,
  [Me.LinearClosed]: pO,
  [Me.MonotoneX]: hO,
  [Me.MonotoneY]: vO,
  [Me.Natural]: mO,
  [Me.Step]: gO,
  [Me.StepAfter]: bO,
  [Me.StepBefore]: yO
}, DO = Object.assign(Object.assign({}, ec), { curveType: Me.MonotoneX, lineWidth: 2, lineDashArray: void 0, fallbackValue: void 0, highlightOnHover: !1, cursor: null, interpolateMissingData: !1 }), PO = Wi`
  :root {
    --vis-line-cursor: default;
    --vis-line-stroke-dasharray: none;
    --vis-line-stroke-dashoffset: 0;

    --vis-line-gapfill-stroke-dasharray: 2 3;
    --vis-line-gapfill-stroke-opacity: 0.8;
    --vis-line-gapfill-stroke-dashoffset: 0;
  }
`, IO = Oe`
  label: line-component;
`, io = Oe`
  label: line;
  transition: opacity 200ms;
  cursor: var(--vis-line-cursor);
`, yl = Oe`
  label: linePath;
  fill: none;
  stroke-dasharray: var(--vis-line-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-stroke-dashoffset);
`, bl = Oe`
  label: lineSelectionHelper;
  fill: none;
  stroke: rgba(0, 0, 0, 0);
  stroke-width: 8px;
`, _l = Oe`
  opacity: 0.2;
`, xl = Oe`
  label: interpolated-path;
  fill: none;
  stroke-dasharray: var(--vis-line-gapfill-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-gapfill-stroke-dashoffset);
  stroke-opacity: var(--vis-line-gapfill-stroke-opacity);
`, RO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dim: _l,
  globalStyles: PO,
  interpolatedPath: xl,
  line: io,
  linePath: yl,
  lineSelectionHelper: bl,
  root: IO
}, Symbol.toStringTag, { value: "Module" }));
class es extends tm {
  constructor(t) {
    super(), this._defaultConfig = DO, this.config = this._defaultConfig, this.curve = df[Me.MonotoneX], this.events = {
      [es.selectors.line]: {
        mouseover: this._highlight.bind(this),
        mouseleave: this._resetHighlight.bind(this)
      }
    }, t && this.setConfig(t);
  }
  get bleed() {
    const { config: { lineWidth: t } } = this, n = this.yScale.domain(), o = (this.yScale.range()[0] > this.yScale.range()[1] ? Hn.North : Hn.South) === Hn.South, r = t > 3, i = t >= 10;
    return {
      top: !i && (!o && n[1] === 0 || o && n[0] === 0) ? 0 : t / 2,
      bottom: !i && (!o && n[0] === 0 || o && n[1] === 0) ? 0 : t / 2,
      left: r ? t / 2 : 0,
      right: r ? t / 2 : 0
    };
  }
  _render(t) {
    super._render(t);
    const { config: n, datamodel: { data: a } } = this, o = ya(t) ? t : n.duration;
    this.curve = df[n.curveType], this.lineGen = WM().x((f) => f.x).y((f) => f.y).defined((f) => f.defined).curve(this.curve);
    const r = Vi(n.y) ? n.y : [n.y], i = a.map((f, p) => this.xScale(xn(f, n.x, p))), s = r.map((f) => {
      const p = a.map((x, S) => {
        const C = xn(x, f, S), T = (ya(C) || C === null) && isFinite(C) ? C : n.fallbackValue, $ = n.interpolateMissingData ? (ya(C) || C === null) && isFinite(C) : isFinite(T);
        return {
          x: i[S],
          y: this.yScale(T ?? 0),
          defined: $,
          value: T
        };
      }), h = p.reduce((x, S) => S.defined || x, !1);
      let v = !1;
      const m = p.reduce((x, S, C) => {
        !S.defined && isFinite(n.fallbackValue) && x.push(Object.assign(Object.assign({}, S), { defined: !0 })), !S.defined && !v && (v = !0);
        const T = C > 0 && !p[C - 1].defined || C < p.length - 1 && !p[C + 1].defined;
        return S.defined && T && (v || x.push(Object.assign(Object.assign({}, S), { defined: !1 })), x.push(S), v = !1), x;
      }, []), b = h && p.some((x) => x.value !== null);
      return {
        values: p,
        defined: h,
        gaps: m,
        visible: b
      };
    }), u = this.g.selectAll(`.${io}`).data(s), c = u.enter().append("g").attr("class", io);
    c.append("path").attr("class", yl).attr("stroke", (f, p) => Ar(a, n.color, p)).attr("stroke-opacity", 0).attr("stroke-width", n.lineWidth), c.append("path").attr("class", bl).attr("d", this._emptyPath()), c.append("path").attr("class", xl).attr("d", this._emptyPath()).style("opacity", 0);
    const d = c.merge(u);
    d.style("cursor", (f, p) => $u(a, n.cursor, p)), d.each((f, p, h) => {
      var v;
      const m = kt(h[p]), b = m.select(`.${yl}`), x = m.select(`.${bl}`), S = m.select(`.${xl}`), C = f.visible, T = Su(a, n.lineDashArray, p), $ = Fn(b, o).attr("stroke", Ar(a, n.color, p)).attr("stroke-width", n.lineWidth).attr("stroke-opacity", C ? 1 : 0).style("stroke-dasharray", (v = T == null ? void 0 : T.join(" ")) !== null && v !== void 0 ? v : null), B = f.values.some((R) => !R.defined), A = this.lineGen(f.values);
      if (o && !B) {
        const R = b.attr("d") || this._emptyPath(), L = A || this._emptyPath();
        $.attrTween("d", () => OO(R, L));
      } else f.visible && $.attr("d", A);
      x.attr("d", A).attr("visibility", C ? null : "hidden"), B && n.interpolateMissingData ? Fn(S, o).attr("d", this.lineGen(f.gaps)).attr("stroke", Ar(a, n.color, p)).attr("stroke-width", n.lineWidth - 1).style("opacity", 1) : S.transition().duration(o).style("opacity", 0);
    }), Fn(u.exit(), o).style("opacity", 0).remove();
  }
  _emptyPath() {
    const t = this.xScale.range(), n = this.yScale.range();
    return `M${t[0]},${n[0]} L${t[1]},${n[0]}`;
  }
  _highlight(t) {
    const { config: n } = this;
    n.highlightOnHover && this.g.selectAll(`.${io}`).classed(_l, (a) => a !== t);
  }
  _resetHighlight() {
    const { config: t } = this;
    t.highlightOnHover && this.g.selectAll(`.${io}`).classed(_l, !1);
  }
}
es.selectors = RO;
function FO(e) {
  return e;
}
var Er = 1, Br = 2, wl = 3, so = 4, ff = 1e-6;
function NO(e) {
  return "translate(" + e + ",0)";
}
function LO(e) {
  return "translate(0," + e + ")";
}
function VO(e) {
  return (t) => +e(t);
}
function zO(e, t) {
  return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function qO() {
  return !this.__axis;
}
function ts(e, t) {
  var n = [], a = null, o = null, r = 6, i = 6, s = 3, u = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, c = e === Er || e === so ? -1 : 1, d = e === so || e === Br ? "x" : "y", f = e === Er || e === wl ? NO : LO;
  function p(h) {
    var v = a ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), m = o ?? (t.tickFormat ? t.tickFormat.apply(t, n) : FO), b = Math.max(r, 0) + s, x = t.range(), S = +x[0] + u, C = +x[x.length - 1] + u, T = (t.bandwidth ? zO : VO)(t.copy(), u), $ = h.selection ? h.selection() : h, B = $.selectAll(".domain").data([null]), A = $.selectAll(".tick").data(v, t).order(), R = A.exit(), L = A.enter().append("g").attr("class", "tick"), D = A.select("line"), N = A.select("text");
    B = B.merge(B.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(L), D = D.merge(L.append("line").attr("stroke", "currentColor").attr(d + "2", c * r)), N = N.merge(L.append("text").attr("fill", "currentColor").attr(d, c * b).attr("dy", e === Er ? "0em" : e === wl ? "0.71em" : "0.32em")), h !== $ && (B = B.transition(h), A = A.transition(h), D = D.transition(h), N = N.transition(h), R = R.transition(h).attr("opacity", ff).attr("transform", function(I) {
      return isFinite(I = T(I)) ? f(I + u) : this.getAttribute("transform");
    }), L.attr("opacity", ff).attr("transform", function(I) {
      var G = this.parentNode.__axis;
      return f((G && isFinite(G = G(I)) ? G : T(I)) + u);
    })), R.remove(), B.attr("d", e === so || e === Br ? i ? "M" + c * i + "," + S + "H" + u + "V" + C + "H" + c * i : "M" + u + "," + S + "V" + C : i ? "M" + S + "," + c * i + "V" + u + "H" + C + "V" + c * i : "M" + S + "," + u + "H" + C), A.attr("opacity", 1).attr("transform", function(I) {
      return f(T(I) + u);
    }), D.attr(d + "2", c * r), N.attr(d, c * b).text(m), $.filter(qO).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === Br ? "start" : e === so ? "end" : "middle"), $.each(function() {
      this.__axis = T;
    });
  }
  return p.scale = function(h) {
    return arguments.length ? (t = h, p) : t;
  }, p.ticks = function() {
    return n = Array.from(arguments), p;
  }, p.tickArguments = function(h) {
    return arguments.length ? (n = h == null ? [] : Array.from(h), p) : n.slice();
  }, p.tickValues = function(h) {
    return arguments.length ? (a = h == null ? null : Array.from(h), p) : a && a.slice();
  }, p.tickFormat = function(h) {
    return arguments.length ? (o = h, p) : o;
  }, p.tickSize = function(h) {
    return arguments.length ? (r = i = +h, p) : r;
  }, p.tickSizeInner = function(h) {
    return arguments.length ? (r = +h, p) : r;
  }, p.tickSizeOuter = function(h) {
    return arguments.length ? (i = +h, p) : i;
  }, p.tickPadding = function(h) {
    return arguments.length ? (s = +h, p) : s;
  }, p.offset = function(h) {
    return arguments.length ? (u = +h, p) : u;
  }, p;
}
function pf(e) {
  return ts(Er, e);
}
function hf(e) {
  return ts(Br, e);
}
function vf(e) {
  return ts(wl, e);
}
function mf(e) {
  return ts(so, e);
}
var wn;
(function(e) {
  e.Start = "start", e.Middle = "middle", e.End = "end";
})(wn || (wn = {}));
var Wn;
(function(e) {
  e.Top = "top", e.Middle = "middle", e.Bottom = "bottom";
})(Wn || (Wn = {}));
var Xt;
(function(e) {
  e.Wrap = "wrap", e.Trim = "trim";
})(Xt || (Xt = {}));
var St;
(function(e) {
  e.Left = "left", e.Center = "center", e.Right = "right";
})(St || (St = {}));
var xm = { exports: {} };
(function(e) {
  (function(t) {
    if (typeof n != "function") {
      var n = function(v) {
        return v;
      };
      n.nonNative = !0;
    }
    const a = n("plaintext"), o = n("html"), r = n("comment"), i = /<(\w*)>/g, s = /<\/?([^\s\/>]+)/;
    function u(v, m, b) {
      v = v || "", m = m || [], b = b || "";
      let x = d(m, b);
      return f(v, x);
    }
    function c(v, m) {
      v = v || [], m = m || "";
      let b = d(v, m);
      return function(S) {
        return f(S || "", b);
      };
    }
    u.init_streaming_mode = c;
    function d(v, m) {
      return v = p(v), {
        allowable_tags: v,
        tag_replacement: m,
        state: a,
        tag_buffer: "",
        depth: 0,
        in_quote_char: ""
      };
    }
    function f(v, m) {
      if (typeof v != "string")
        throw new TypeError("'html' parameter must be a string");
      let b = m.allowable_tags, x = m.tag_replacement, S = m.state, C = m.tag_buffer, T = m.depth, $ = m.in_quote_char, B = "";
      for (let A = 0, R = v.length; A < R; A++) {
        let L = v[A];
        if (S === a)
          switch (L) {
            case "<":
              S = o, C += L;
              break;
            default:
              B += L;
              break;
          }
        else if (S === o)
          switch (L) {
            case "<":
              if ($)
                break;
              T++;
              break;
            case ">":
              if ($)
                break;
              if (T) {
                T--;
                break;
              }
              $ = "", S = a, C += ">", b.has(h(C)) ? B += C : B += x, C = "";
              break;
            case '"':
            case "'":
              L === $ ? $ = "" : $ = $ || L, C += L;
              break;
            case "-":
              C === "<!-" && (S = r), C += L;
              break;
            case " ":
            case `
`:
              if (C === "<") {
                S = a, B += "< ", C = "";
                break;
              }
              C += L;
              break;
            default:
              C += L;
              break;
          }
        else if (S === r)
          switch (L) {
            case ">":
              C.slice(-2) == "--" && (S = a), C = "";
              break;
            default:
              C += L;
              break;
          }
      }
      return m.state = S, m.tag_buffer = C, m.depth = T, m.in_quote_char = $, B;
    }
    function p(v) {
      let m = /* @__PURE__ */ new Set();
      if (typeof v == "string") {
        let b;
        for (; b = i.exec(v); )
          m.add(b[1]);
      } else !n.nonNative && typeof v[n.iterator] == "function" ? m = new Set(v) : typeof v.forEach == "function" && v.forEach(m.add, m);
      return m;
    }
    function h(v) {
      let m = s.exec(v);
      return m ? m[1].toLowerCase() : null;
    }
    e.exports ? e.exports = u : t.striptags = u;
  })(WA);
})(xm);
var HO = xm.exports;
const WO = /* @__PURE__ */ lv(HO);
function UO(e) {
  switch (e) {
    case St.Center:
      return "middle";
    case St.Right:
      return "end";
    case St.Left:
    default:
      return "start";
  }
}
const KO = (e) => {
  switch (e) {
    case St.Left:
      return "start";
    case St.Right:
      return "end";
    case St.Center:
      return "middle";
    default:
      return null;
  }
};
function jO(e) {
  return e.replace(/-([a-z])/g, (t, n) => n.toUpperCase());
}
function GO(e) {
  var t;
  return (t = e.match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)) === null || t === void 0 ? void 0 : t.filter(Boolean).map((n) => n.toLowerCase()).join("-");
}
function YO(e) {
  return e.replace(/['"]/g, "&#39;").replace(/\u0000/g, "\\0").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
}
function XO(e, t = 15) {
  return e ? e.length > t ? `…${e.substr(e.length - t, t)}` : e : "";
}
function ZO(e, t = 15) {
  if (!e)
    return "";
  const n = Math.floor((t - 3) / 2);
  return e.length > t ? `${e.substr(0, n)}…${e.substr(-n, n)}` : e;
}
function JO(e, t = 15) {
  return e ? e.length > t ? `${e.substr(0, t)}…` : e : "";
}
function QO(e, t = 15, n = wn.Middle) {
  if (!e)
    return "";
  let a = JO(e, t);
  return n === wn.Start ? a = XO(e, t) : n === wn.Middle && (a = ZO(e, t)), a;
}
function wm(e, t = [" "]) {
  let n = [e];
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    n.forEach((r, i) => {
      const s = r.split(o), u = s.map((c, d) => `${c}${d === s.length - 1 ? "" : o}`);
      n[i] = u;
    }), n = Js(n);
  }
  return n;
}
function eD(e, t, n = [" ", "-", ".", ","]) {
  const a = e.text();
  if (!a)
    return;
  const o = Vi(n) ? n : [n], r = wm(a, o), i = parseFloat(e.attr("x")) || 0;
  e.text("");
  let s = e.append("tspan").attr("x", i), u = `${r[0]}`;
  s.text(u), r.forEach((c, d) => {
    if (d === 0)
      return;
    const f = `${u}${c}`;
    s.text(f), s.node().getComputedTextLength() > t ? (s.text(u.trim()), s = e.append("tspan").attr("x", i).attr("dy", "1.2em").text(c), u = c) : u += c;
  });
}
function gf(e, t, n, a, o, r) {
  var i;
  t === void 0 && (t = 50), n === void 0 && (n = wn.Middle), o === void 0 && (o = +((i = window.getComputedStyle(e.node())) === null || i === void 0 ? void 0 : i.fontSize) || 0), r === void 0 && (r = gv());
  const s = e.text() || "", u = s.length, c = o * u * r, f = Math.ceil(u * t / (1.1 * c));
  return f < u ? (e.text(QO(s, f, n)), !0) : !1;
}
function Mr(e, t, n = gv()) {
  return e.length * t * n || 0;
}
function Or(e, t, n) {
  const a = "http://www.w3.org/2000/svg", o = document.createElementNS(a, "svg"), r = document.createElementNS(a, "text");
  r.textContent = e, r.setAttribute("font-size", `${n}`), r.setAttribute("font-family", t), o.appendChild(r), document.body.appendChild(o);
  const i = r.getComputedTextLength();
  return document.body.removeChild(o), i;
}
function tD(e, t = void 0, n = !0, a = vv, o = !1) {
  var r, i, s;
  const u = `${e.text}`;
  if (!u)
    return [];
  const c = (r = e.fontSize) !== null && r !== void 0 ? r : po.fontSize, d = (i = e.fontFamily) !== null && i !== void 0 ? i : po.fontFamily, f = (s = e.fontWidthToHeightRatio) !== null && s !== void 0 ? s : po.fontWidthToHeightRatio, p = Array.isArray(a) ? a : [a];
  return u.split(`
`).map((v) => {
    const m = [];
    if (!t)
      return [v];
    const b = wm(v, p);
    let x = "";
    for (let S = 0; S < b.length; S += 1) {
      (n ? Mr(x + b[S], c, f) : Or(x + b[S], d, c)) < t || S === 0 ? x += b[S] : (m.push(x.trim()), x = b[S]);
      const T = 2;
      if (o)
        for (; x.trim().length > T && (n ? Mr(x, c, f) : Or(x, d, c)) > t; ) {
          let B = x.trim().length - T;
          for (; B > 0; ) {
            const A = `${x.substring(0, B)}${mv}`;
            if ((n ? Mr(A, c, f) : Or(A, d, c)) <= t || B === 1) {
              m.push(A.trim()), x = x.substring(B);
              break;
            }
            B--;
          }
        }
    }
    return x && m.push(x.trim()), m;
  }).flat();
}
function nD(e, t = void 0, n = void 0, a = !0, o = vv, r = !1) {
  const i = Array.isArray(e) ? e.map((f) => Ba(po, f)) : [Ba(po, e)], s = i.map((f) => tD(f, t, a, o, r)), u = i[0];
  let c = -u.fontSize * (u.lineHeight - 1);
  const d = [];
  return i.forEach((f, p) => {
    var h;
    let v = s[p];
    const m = p > 0 ? d[p - 1] : void 0, b = m ? m.marginBottom : 0, x = f.marginTop, S = Math.max(b, x);
    c += S;
    const C = f.fontSize * f.lineHeight;
    let T = 0;
    for (let $ = 0; $ < v.length; $ += 1) {
      let B = v[$];
      c += C;
      const A = `${B} …`, R = a ? Mr(A, f.fontSize, f.fontWidthToHeightRatio) : Or(A, f.fontFamily, f.fontSize);
      if (T = Math.max(R, T), n && c + C > n && $ !== v.length - 1) {
        B.charAt(B.length - 1) === mv && (B = B.substr(0, v[$].length - 1)), R < t ? v[$] = A : v[$] = `${v[$].substr(0, v[$].length - 2)}…`, v = v.slice(0, $ + 1);
        break;
      }
    }
    d.push(Object.assign(Object.assign({}, f), { _lines: v, _estimatedHeight: c - ((m == null ? void 0 : m._estimatedHeight) || 0), _maxWidth: Math.max(T, (h = m == null ? void 0 : m._maxWidth) !== null && h !== void 0 ? h : 0) }));
  }), d;
}
function aD(e, t = 0, n) {
  return e.map((a, o) => {
    const r = o > 0 ? e[o - 1] : void 0, i = r ? r.marginBottom / r.fontSize : 0, s = a.marginTop / a.fontSize, u = Math.max(i, s), c = {
      fontSize: a.fontSize,
      fontFamily: a.fontFamily,
      fontWeight: a.fontWeight,
      fill: a.color,
      y: o === 0 && n
    };
    return `<tspan xmlns="http://www.w3.org/2000/svg" ${Object.entries(c).filter(([f, p]) => p).map(([f, p]) => `${GO(f)}="${YO(p.toString())}"`).join(" ")}>${a._lines.map((f, p) => {
      let h;
      return o === 0 && p === 0 ? h = 0.8 + u : p === 0 ? h = u + a.lineHeight : h = a.lineHeight, `<tspan x="${t}" dy="${h}em">${f.length ? f : " "}</tspan>`;
    }).join("")}</tspan>`;
  });
}
function oD(e) {
  return BT(e, (t) => t._estimatedHeight);
}
const rD = ["text", "tspan", "textPath", "altGlyph", "altGlyphDef", "altGlyphItem", "glyphRef", "textRef", "textArea"];
function iD(e, t, n, a) {
  var o, r;
  const i = nD(t, n.width, void 0, n.fastMode, n.separator, n.wordBreak), s = (o = n.x) !== null && o !== void 0 ? o : +e.getAttribute("x"), u = (r = n.y) !== null && r !== void 0 ? r : +e.getAttribute("y"), c = s ?? 0;
  let d = u ?? 0;
  if (n.textAlign && e.setAttribute("text-anchor", UO(n.textAlign)), n.verticalAlign && n.verticalAlign !== Wn.Top) {
    const f = oD(i), p = n.verticalAlign === Wn.Middle ? -f / 2 : n.verticalAlign === Wn.Bottom ? -f : 0;
    d += p;
  }
  n.textRotationAngle ? e.setAttribute("transform", `rotate(${n.textRotationAngle === 0 || n.textRotationAngle ? n.textRotationAngle : 0} ${c} ${d})`) : e.removeAttribute("transform");
  {
    const f = new DOMParser();
    e.textContent = "", i.forEach((p) => {
      const h = aD([p], c, d).join(""), v = WO(h, rD), m = f.parseFromString(v, "image/svg+xml").firstChild;
      e.appendChild(m);
    });
  }
}
const sD = Object.assign(Object.assign({}, ec), { position: void 0, type: void 0, label: void 0, labelFontSize: null, labelTextFitMode: Xt.Wrap, labelTextTrimType: wn.Middle, gridLine: !0, tickLine: !0, domainLine: !0, numTicks: void 0, minMaxTicksOnly: !1, minMaxTicksOnlyWhenWidthIsLess: 250, minMaxTicksOnlyShowGridLines: !1, tickTextWidth: void 0, tickTextSeparator: void 0, tickTextForceWordBreak: !1, tickTextTrimType: wn.Middle, tickTextFitMode: Xt.Wrap, tickTextFontSize: null, tickTextAlign: void 0, tickTextColor: null, tickTextAngle: void 0, labelMargin: 8, labelColor: null, tickFormat: void 0, tickValues: void 0, fullSize: !0, tickPadding: 8, tickTextHideOverlapping: void 0 });
function lD(e, t) {
  const n = "--vis-", a = Object.entries(e);
  return Object.fromEntries(a.map(([o]) => [jO(o.replace(n, "")), o]));
}
function uD(e, t) {
  Wi({
    ":root": e,
    [`body.theme-dark .${t}`]: Object.keys(e).filter((n) => n.includes("--vis-dark")).map((n) => ({
      [n.replace("--vis-dark", "--vis")]: `var(${n})`
    }))
  });
}
const Cm = Oe`
  label: axis-component;
`, rc = {
  // Undefined by default to allow proper fallback to var(--vis-font-family)
  /* --vis-axis-font-family: */
  "--vis-axis-tick-color": "#e8e9ef",
  /* --vis-axis-domain-color: // Undefined by default to allow fallback to var(--vis-axis-tick-color) */
  "--vis-axis-grid-color": "#e8e9ef",
  "--vis-axis-grid-line-width": "1px",
  "--vis-axis-grid-line-dasharray": "none",
  "--vis-axis-label-font-size": "14px",
  "--vis-axis-label-color": "#6c778c",
  "--vis-axis-label-weight": "500",
  "--vis-axis-tick-label-color": "#6c778c",
  "--vis-axis-tick-label-font-size": "12px",
  "--vis-axis-tick-label-weight": "500",
  "--vis-axis-tick-label-cursor": "default",
  "--vis-axis-tick-label-text-decoration": "none",
  "--vis-axis-tick-line-width": "1px",
  "--vis-axis-tick-label-hide-transition": "opacity 400ms ease-in-out",
  /* --vis-axis-domain-line-width: // Undefined by default to allow fallback to var(--vis-axis-grid-line-width) */
  "--vis-dark-axis-tick-color": "#6c778c",
  /* --vis-dark-axis-domain-color: // Undefined by default to allow fallback to var(--vis-dark-axis-tick-color) */
  "--vis-dark-axis-tick-label-color": "#e8e9ef",
  "--vis-dark-axis-grid-color": "#6c778c",
  "--vis-dark-axis-label-color": "#fefefe"
}, cD = lD(rc);
uD(rc, Cm);
const ic = Oe`
  label: hide-tick-line;
`, sc = Oe`
  label: hide-domain;
`, km = Oe`
  label: axis;

  user-select: none;

  .domain {
    stroke: var(--vis-axis-domain-color, var(--vis-axis-tick-color));
    stroke-width: var(--vis-axis-domain-line-width, var(--vis-axis-grid-line-width));
    stroke-dasharray: var(--vis-axis-domain-line-dasharray, var(--vis-axis-grid-line-dasharray));
  }

  &${`.${ic}`} {
    .tick > line {
      opacity: 0;
    }
  }

  &${`.${sc}`} {
    .domain {
      opacity: 0;
    }
  }
`, Sm = Oe`
  label: grid;

  .domain {
    opacity: 0;
  }

  line {
    stroke: var(--vis-axis-grid-color);
    stroke-width: var(--vis-axis-grid-line-width);
    stroke-dasharray: var(--vis-axis-grid-line-dasharray);
  }
`, $m = Oe`
  label: tick;

  stroke: none;
  font-size: var(--vis-axis-tick-label-font-size);
  font-weight: var(--vis-axis-tick-label-weight);

  line {
    stroke: var(--vis-axis-tick-color);
    stroke-width: var(--vis-axis-tick-line-width);
  }

  text {
    fill: var(--vis-axis-tick-label-color);
    cursor: var(--vis-axis-tick-label-cursor);
    font-family: var(--vis-axis-font-family, var(--vis-font-family));
    text-decoration: var(--vis-axis-tick-label-text-decoration);
    stroke: none;
  }
`, Cl = Oe`
  label: tick-text-exiting;
`, kl = Oe`
  label: label;
  fill: var(--vis-axis-label-color);
  font-size: var(--vis-axis-label-font-size);
  font-weight: var(--vis-axis-label-weight);
  font-family: var(--vis-axis-font-family, var(--vis-font-family));
  text-anchor: middle;
`, Tm = Oe`
  label: tick-label;
`, Am = Oe`
  label: tick-label-hideable;
  opacity: 0;
  transition: var(--vis-axis-tick-label-hide-transition);
`, dD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  axis: km,
  cssVarDefaults: rc,
  grid: Sm,
  hideDomain: sc,
  hideTickLine: ic,
  label: kl,
  root: Cm,
  tick: $m,
  tickLabel: Tm,
  tickLabelHideable: Am,
  tickTextExiting: Cl,
  variables: cD
}, Symbol.toStringTag, { value: "Module" }));
class Em extends tm {
  constructor(t) {
    super(), this._defaultConfig = sD, this.config = this._defaultConfig, this._defaultNumTicks = 3, this.events = {}, t && this.setConfig(t), this.axisGroup = this.g.append("g"), this.gridGroup = this.g.append("g").attr("class", Sm);
  }
  /** Renders axis to an invisible grouped to calculate automatic chart margins */
  preRender() {
    const { config: t } = this, n = this.g.append("g").attr("opacity", 0);
    this._renderAxis(n, 0), this._axisRawBBox = n.node().getBBox(), t.tickTextAlign && this._alignTickLabels(), this._renderAxisLabel(n), this._axisSizeBBox = this._getAxisSize(n), this._requiredMargin = this._getRequiredMargin(this._axisSizeBBox), n.remove();
  }
  getPosition() {
    const { config: { type: t, position: n } } = this;
    return n ?? (t === ye.X ? me.Bottom : me.Left);
  }
  _getAxisSize(t) {
    return t.node().getBBox();
  }
  _getRequiredMargin(t = this._axisSizeBBox) {
    const { config: { type: n, position: a } } = this;
    switch (n) {
      case ye.X: {
        const r = this._axisSizeBBox.x + this._axisSizeBBox.width, i = this._axisSizeBBox.x < 0 ? Math.abs(this._axisSizeBBox.x) : 0, s = r - this._width > 1 ? r - this._width : 0;
        switch (a) {
          case me.Top:
            return { top: t.height, left: i, right: s };
          case me.Bottom:
          default:
            return { bottom: t.height, left: i, right: s };
        }
      }
      case ye.Y: {
        const o = t.height > this._height ? (t.height - this._height) / 2 : 0, r = o, i = o;
        switch (a) {
          case me.Right:
            return { right: t.width, top: r, bottom: i };
          case me.Left:
          default:
            return { left: t.width, top: r, bottom: i };
        }
      }
    }
  }
  getRequiredMargin() {
    return this._requiredMargin;
  }
  /** Calculates axis transform:translate offset based on passed container margins */
  getOffset(t) {
    const { config: { type: n, position: a } } = this;
    switch (n) {
      case ye.X:
        switch (a) {
          case me.Top:
            return { top: t.top, left: t.left };
          case me.Bottom:
          default:
            return { top: t.top + this._height, left: t.left };
        }
      case ye.Y:
        switch (a) {
          case me.Right:
            return { top: t.top, left: t.left + this._width };
          case me.Left:
          default:
            return { top: t.top, left: t.left };
        }
    }
  }
  _render(t = this.config.duration, n = this.axisGroup) {
    const { config: a } = this;
    if (this._renderAxis(n, t), this._renderAxisLabel(n), a.gridLine) {
      const o = this._buildGrid();
      this.gridGroup.selectAll("*").interrupt(), Fn(this.gridGroup, t).call(o).style("opacity", 1);
    } else
      Fn(this.gridGroup, t).style("opacity", 0);
    a.tickTextAlign && this._alignTickLabels(), this._resolveTickLabelOverlap(n);
  }
  _buildAxis() {
    const { config: { type: t, position: n, tickPadding: a } } = this, o = this._getNumTicks();
    switch (t) {
      case ye.X:
        switch (n) {
          case me.Top:
            return pf(this.xScale).ticks(o).tickPadding(a);
          case me.Bottom:
          default:
            return vf(this.xScale).ticks(o).tickPadding(a);
        }
      case ye.Y:
        switch (n) {
          case me.Right:
            return hf(this.yScale).ticks(o).tickPadding(a);
          case me.Left:
          default:
            return mf(this.yScale).ticks(o).tickPadding(a);
        }
    }
  }
  _buildGrid() {
    const { config: t } = this;
    let n;
    switch (t.type) {
      case ye.X:
        switch (t.position) {
          case me.Top: {
            n = pf(this.xScale);
            break;
          }
          case me.Bottom:
          default: {
            n = vf(this.xScale);
            break;
          }
        }
        n.tickSize(-this._height);
        break;
      case ye.Y:
        switch (t.position) {
          case me.Right: {
            n = hf(this.yScale);
            break;
          }
          case me.Left:
          default: {
            n = mf(this.yScale);
            break;
          }
        }
        n.tickSize(-this._width);
    }
    n.tickSizeOuter(0).tickFormat(() => "");
    const a = this._getNumTicks() * 2, o = n.scale(), r = o.domain(), i = () => {
      if (!t.minMaxTicksOnlyShowGridLines)
        return r;
      const u = o.ticks(a);
      if (u.length < 2)
        return r;
      const c = +u[1] - +u[0], d = r[1];
      return +d - +u[u.length - 1] > c / 2 ? [...u, d] : u;
    }, s = t.tickValues ? this._getConfiguredTickValues() : this._shouldRenderMinMaxTicksOnly() ? i() : o.ticks(a);
    return n.tickValues(s), n;
  }
  _renderAxis(t = this.axisGroup, n = this.config.duration) {
    const { config: a } = this, o = this._buildAxis(), r = o.scale(), i = a.tickValues ? this._getConfiguredTickValues() : this._shouldRenderMinMaxTicksOnly() ? r.domain() : r.ticks(this._getNumTicks()), s = i.length;
    o.tickValues(i), t.selectAll("*").interrupt(), Fn(t, n).call(o).on("end", () => {
      this._resolveTickLabelOverlap(t);
    }), t.selectAll("g.tick").classed($m, !0).style("font-size", a.tickTextFontSize);
    const d = t.selectAll("g.tick > text").filter((f) => i.some((p) => Kn(f, p))).classed(Tm, !0).classed(Am, !!a.tickTextHideOverlapping).style("fill", a.tickTextColor);
    if (t.selectAll("g.tick > text").filter((f) => !i.some((p) => Kn(f, p))).classed(Cl, !0), d.nodes().forEach((f) => Ru(f)), d.each((f, p, h) => {
      var v, m;
      let b = (m = (v = a.tickFormat) === null || v === void 0 ? void 0 : v.call(a, f, p, i)) !== null && m !== void 0 ? m : `${f}`;
      const x = h[p], S = a.tickTextWidth || (a.type === ye.X ? this._containerWidth / (s + 1) : this._containerWidth / 5), C = getComputedStyle(x), T = Number.parseFloat(C.fontSize), $ = C.fontFamily, B = {
        verticalAlign: a.type === ye.X ? Wn.Top : Wn.Middle,
        width: S,
        textRotationAngle: a.tickTextAngle,
        separator: a.tickTextSeparator,
        wordBreak: a.tickTextForceWordBreak
      };
      if (a.tickTextFitMode === Xt.Trim) {
        const R = kt(x).text(b);
        gf(R, S, a.tickTextTrimType, !0, T, 0.58), b = kt(x).text();
      }
      iD(x, { text: b, fontFamily: $, fontSize: T }, B);
    }), t.classed(km, !0).classed(ic, !a.tickLine).classed(sc, !a.domainLine), a.fullSize) {
      const f = this._getFullDomainPath(0);
      Fn(t.select(".domain"), n).attr("d", f);
    }
  }
  _resolveTickLabelOverlap(t = this.axisGroup) {
    const { config: n } = this, a = t.selectAll(`g.tick > text:not(.${Cl})`);
    if (!n.tickTextHideOverlapping) {
      a.style("opacity", null);
      return;
    }
    cancelAnimationFrame(this._collideTickLabelsAnimFrameId), this._collideTickLabelsAnimFrameId = requestAnimationFrame(() => {
      this._collideTickLabels(a);
    });
  }
  _collideTickLabels(t) {
    t.each((a, o, r) => {
      const i = r[o];
      i._visible = !0;
    });
    const n = 3;
    for (let a = 0; a < n; a += 1)
      t.each((o, r, i) => {
        const s = i[r];
        if (!s._visible)
          return;
        const c = s.getBoundingClientRect();
        for (let d = r + 1; d < i.length; d += 1) {
          if (r === d)
            continue;
          const f = i[d];
          if (f._visible) {
            const h = f.getBoundingClientRect();
            if (GA(c, h, -5)) {
              f._visible = !1;
              break;
            }
          }
        }
      });
    t.each((a, o, r) => {
      const i = r[o];
      kt(i).style("opacity", i._visible ? 1 : 0);
    });
  }
  _getNumTicks() {
    const { config: { type: t, numTicks: n } } = this;
    if (n)
      return n;
    if (t === ye.X) {
      const a = this.xScale.range(), o = a[1] - a[0];
      return Math.floor(o / 175);
    }
    if (t === ye.Y) {
      const a = this.yScale.range(), o = Math.abs(a[0] - a[1]);
      return Math.pow(o, 0.85) / 25;
    }
    return this._defaultNumTicks;
  }
  _getConfiguredTickValues() {
    const { config: t } = this, n = t.type === ye.X ? this.xScale : this.yScale, a = n == null ? void 0 : n.domain();
    return t.tickValues ? t.tickValues.filter((o) => o >= a[0] && o <= a[1]) : null;
  }
  _shouldRenderMinMaxTicksOnly() {
    const { config: t } = this;
    return t.minMaxTicksOnly || t.type === ye.X && this._width < t.minMaxTicksOnlyWhenWidthIsLess;
  }
  _getFullDomainPath(t = 0) {
    const { config: { type: n } } = this;
    switch (n) {
      case ye.X:
        return `M0.5, ${t} V0.5 H${this._width + 0.5} V${t}`;
      case ye.Y:
        return `M${-t}, ${this._height + 0.5} H0.5 V0.5 H${-t}`;
    }
  }
  _renderAxisLabel(t = this.axisGroup) {
    var n;
    const { type: a, label: o, labelMargin: r, labelFontSize: i, labelTextFitMode: s } = this.config;
    if (t.selectAll(`.${kl}`).remove(), !o)
      return;
    const u = this.getPosition(), { width: c, height: d } = (n = this._axisRawBBox) !== null && n !== void 0 ? n : t.node().getBBox(), f = a === ye.Y ? -90 : 0, p = t.append("text").attr("class", kl).attr("dy", `${this._getLabelDY()}em`).style("font-size", i).style("fill", this.config.labelColor);
    p.text(o);
    let h = !1;
    if (s === Xt.Wrap) {
      const T = a === ye.Y ? this._height : this._width;
      p.node().getComputedTextLength() > T && (eD(p, T), h = !0);
    }
    let v = c, m = d;
    if (s === Xt.Wrap) {
      const T = p.node().getBBox();
      v = T.width, m = T.height;
    } else {
      const T = a === ye.X ? v : m, $ = getComputedStyle(p.node()), B = Number.parseFloat($.fontSize);
      gf(p, T, this.config.labelTextTrimType, !0, B);
      const A = p.node().getBBox();
      v = A.width, m = A.height;
    }
    const b = a === ye.X ? this._width / 2 : a === ye.Y && s === Xt.Wrap && h ? u === me.Left ? -c - m / 2 - 10 : c : Math.pow(-1, +(u === me.Left)) * c, x = a === ye.Y ? this._height / 2 : a === ye.X && s === Xt.Wrap ? u === me.Top ? -d - m / 2 : d : Math.pow(-1, +(u === me.Top)) * d, S = a === ye.X ? 0 : Math.pow(-1, +(u === me.Left)) * r, C = a === ye.X ? Math.pow(-1, +(u === me.Top)) * r : 0;
    p.attr("transform", `translate(${b + S},${x + C}) rotate(${f})`);
  }
  _getLabelDY() {
    const { type: t, position: n } = this.config;
    switch (t) {
      case ye.X:
        switch (n) {
          case me.Top:
            return 0;
          case me.Bottom:
          default:
            return 0.75;
        }
      case ye.Y:
        switch (n) {
          case me.Right:
            return 0.75;
          case me.Left:
          default:
            return -0.25;
        }
    }
  }
  _alignTickLabels() {
    const { config: { type: t, tickTextAlign: n, tickTextAngle: a, position: o } } = this, r = this.g.selectAll("g.tick > text"), i = KO(n), s = t === ye.X ? 0 : this._getYTickTextTranslate(n, o), u = a ? `translate(${s},0) rotate(${a})` : `translate(${s},0)`;
    r.attr("transform", u).attr("text-anchor", i);
  }
  _getYTickTextTranslate(t, n = me.Left) {
    var a, o, r, i;
    const s = this.config.tickPadding + 1, u = ((i = (o = (a = this._axisRawBBox) === null || a === void 0 ? void 0 : a.width) !== null && o !== void 0 ? o : (r = this.axisGroup.node()) === null || r === void 0 ? void 0 : r.getBBox().width) !== null && i !== void 0 ? i : 0) - s;
    switch (t) {
      case St.Left:
        return n === me.Left ? u * -1 : 0;
      case St.Right:
        return n === me.Left ? 0 : u;
      case St.Center:
        return n === me.Left ? u * -0.5 : u * 0.5;
      default:
        return 0;
    }
  }
}
Em.selectors = dD;
var Ot;
(function(e) {
  e.Circle = "circle", e.Cross = "cross", e.Diamond = "diamond", e.Square = "square", e.Star = "star", e.Triangle = "triangle", e.Wye = "wye";
})(Ot || (Ot = {}));
const fD = {
  [Ot.Circle]: sm,
  [Ot.Cross]: UM,
  [Ot.Diamond]: jM,
  [Ot.Square]: GM,
  [Ot.Star]: JM,
  [Ot.Triangle]: QM,
  [Ot.Wye]: tO
}, it = Object.assign(Object.assign({}, Ot), { Line: "line" });
var fi;
(function(e) {
  e.Horizontal = "horizontal", e.Vertical = "vertical";
})(fi || (fi = {}));
const pD = {
  items: [],
  labelClassName: "",
  onLegendItemClick: void 0,
  labelFontSize: null,
  labelMaxWidth: null,
  bulletSize: null,
  bulletSpacing: 4,
  bulletShape: (e) => {
    var t;
    return (t = e.shape) !== null && t !== void 0 ? t : it.Circle;
  },
  orientation: fi.Horizontal,
  renderIntoProvidedDomNode: !1
}, vr = $o * 3, hD = {
  [it.Circle]: Math.PI / 4,
  [it.Cross]: 5 / 9,
  [it.Diamond]: Math.sqrt(3) / 6,
  [it.Square]: 1,
  [it.Star]: 0.3,
  [it.Triangle]: Math.sqrt(3) / 4,
  [it.Wye]: 5 / 11
};
function Bm(e, t, n) {
  return t < 1 ? 0 : e * t + n * (t - 1);
}
function vD(e) {
  e.each((t, n, a) => {
    kt(a[n]).append("svg").attr("width", "100%").attr("height", "100%").append("path");
  });
}
function mD(e, t, n) {
  e.each((a, o, r) => {
    var i;
    const s = $u(a, t.bulletShape, o), u = RT((i = a.color) !== null && i !== void 0 ? i : Ar(a, n, o)), c = u.length, d = vr, f = al(getComputedStyle(r[o]).getPropertyValue("--vis-legend-bullet-size")), p = t.bulletSpacing * (vr / f), h = Bm(d, c, p), v = s === it.Line ? vr / 2.5 : vr, m = kt(r[o]).select("svg").attr("viewBox", `0 0 ${h} ${v}`);
    m.selectAll("path").remove();
    const b = a.inactive ? "var(--vis-legend-bullet-inactive-opacity)" : 1;
    u.forEach((x, S) => {
      const C = m.append("path");
      if (s === it.Line) {
        const T = S * (d + p), $ = T + d;
        C.attr("d", `M${T},${v / 2} L${$},${v / 2}`).attr("transform", null).style("opacity", b).style("stroke", x).style("stroke-width", "3px").style("fill", null).style("fill-opacity", null).style("marker-start", "none").style("marker-end", "none");
      } else {
        const T = nO().type(fD[s]).size(d * v * hD[s]), $ = (d - 2) / d;
        let B = v / 2;
        switch (s) {
          case it.Triangle:
            B += v / 8;
            break;
          case it.Star:
            B += v / 16;
            break;
          case it.Wye:
            B -= v / 16;
            break;
        }
        const A = S * (d + p) + d / 2;
        C.attr("d", T).attr("transform", `translate(${A}, ${Math.round(B)}) scale(${$})`).style("stroke", x).style("stroke-width", "1px").style("opacity", null).style("fill", x).style("fill-opacity", b);
      }
    });
  });
}
const lc = Oe`
  label: bullet-legend-component;
`, gD = Wi`
  :root {
    // Undefined by default to allow proper fallback to var(--vis-font-family)
    /* --vis-legend-font-family: */

    --vis-legend-label-color: #6c778c;
    --vis-legend-label-max-width: 300px;
    --vis-legend-label-font-size: 12px;
    --vis-legend-bullet-size: 9px;
    --vis-legend-bullet-inactive-opacity: 0.15;
    --vis-legend-item-spacing: 20px;
    --vis-legend-vertical-item-spacing: 5px;
    --vis-legend-bullet-label-spacing: 8px;

    --vis-dark-legend-label-color: #eee;
  }

  body.theme-dark ${`.${lc}`} {
    --vis-legend-label-color: var(--vis-dark-legend-label-color);
  }

  body.theme-patterns {
    --vis-legend-bullet-size: 14px;
  }
`, Dr = Oe`
  label: legendItem;
  display: inline-flex;
  align-items: center;
  font-family: var(--vis-legend-font-family, var(--vis-font-family));
  margin-right: var(--vis-legend-item-spacing);
  white-space: nowrap;
  cursor: default;
  user-select: none;
  max-width: min-content;
`, Mm = Oe`
  label: legendItemVertical;
  display: flex;
  margin-top: var(--vis-legend-vertical-item-spacing);
`, Om = Oe`
  cursor: pointer;
`, Sl = Oe`
  label: legendItemLabel;
  font-size: var(--vis-legend-label-font-size);
  display: inline-block;
  vertical-align: middle;
  color: var(--vis-legend-label-color);
  max-width: var(--vis-legend-label-max-width);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`, $l = Oe`
  flex: 0 0 auto;
  label: legendItemBullet;
  margin-right: var(--vis-legend-bullet-label-spacing);
  height: var(--vis-legend-bullet-size);
  width: var(--vis-legend-bullet-size);

  svg {
    display: block;
  }
`, yD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bullet: $l,
  clickable: Om,
  item: Dr,
  itemVertical: Mm,
  label: Sl,
  root: lc,
  variables: gD
}, Symbol.toStringTag, { value: "Module" }));
class Dm {
  constructor(t, n) {
    this._defaultConfig = pD, this.config = this._defaultConfig, this._colorAccessor = (a) => a.color, this._container = t, this.div = n != null && n.renderIntoProvidedDomNode ? kt(this._container) : kt(this._container).append("div"), this.div.classed(lc, !0), this.element = this.div.node(), n && this.update(n);
  }
  update(t) {
    this.prevConfig = this.config, this.config = Ba(this._defaultConfig, t), this.render();
  }
  render() {
    const { config: t } = this, n = this.div.selectAll(`.${Dr}`).data(t.items), a = n.enter().append("div").on("click", this._onItemClick.bind(this)), o = a.merge(n);
    o.attr("class", (r) => {
      var i;
      return `${Dr} ${(i = r.className) !== null && i !== void 0 ? i : ""}`;
    }).classed(Mm, t.orientation === fi.Vertical).classed(Om, (r) => !!t.onLegendItemClick && this._isItemClickable(r)).attr("title", (r) => r.name).style("display", (r) => r.hidden ? "none" : null), a.append("span").attr("class", $l).call(vD), o.select(`.${$l}`).style("width", function(r) {
      const s = (Array.isArray(r.color) ? r.color : [r.color]).length, u = al(getComputedStyle(this).getPropertyValue("--vis-legend-bullet-size")) || 9, c = t.bulletSize ? al(t.bulletSize) : u, d = t.bulletSpacing;
      return `${Bm(c, s, d)}px`;
    }).style("height", t.bulletSize).style("box-sizing", "content-box").call(mD, this.config, this._colorAccessor), a.append("span").attr("class", Sl).classed(t.labelClassName, !0).style("max-width", t.labelMaxWidth).style("font-size", t.labelFontSize), o.select(`.${Sl}`).text((r) => r.name), n.exit().remove();
  }
  _isItemClickable(t) {
    return t.pointer === void 0 ? !0 : t.pointer;
  }
  _onItemClick(t, n) {
    const { config: { onLegendItemClick: a } } = this, r = this.div.selectAll(`.${Dr}`).nodes().indexOf(t.currentTarget);
    a && a(n, r);
  }
  destroy() {
    this.element !== this._container && this.div.remove();
  }
}
Dm.selectors = yD;
const Pm = Symbol("componentAccessorKey"), bD = Symbol("tooltipAccessorKey"), _D = Symbol("crosshairAccessorKey"), Im = Symbol("axisAccessorKey"), xD = Symbol("annotationsAccessorKey");
function uc(e, t) {
  return Kn(e, t);
}
function ns(e) {
  const t = Ne(), n = t.attrs;
  return E(() => {
    const a = {}, o = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(o).forEach((r) => {
      a[Ca(r)] = e[Ca(r)];
    }), { ...a, ...n };
  });
}
const wD = /* @__PURE__ */ _({
  __name: "index",
  props: {
    components: {},
    xScale: { type: [Object, Function] },
    xDomain: {},
    xDomainMinConstraint: {},
    xDomainMaxConstraint: {},
    xRange: {},
    yScale: { type: [Object, Function] },
    yDomain: {},
    yDomainMinConstraint: {},
    yDomainMaxConstraint: {},
    yRange: {},
    yDirection: {},
    xAxis: {},
    yAxis: {},
    autoMargin: { type: Boolean },
    tooltip: {},
    crosshair: {},
    preventEmptyDomain: { type: [Boolean, null] },
    scaleByDomain: { type: Boolean },
    annotations: {},
    clipPathExtend: {},
    duration: {},
    margin: {},
    padding: {},
    sizing: {},
    width: {},
    height: {},
    svgDefs: {},
    ariaLabel: {},
    data: {}
  },
  setup(e, { expose: t }) {
    const n = e, { data: a } = ce(n), o = ns(n), r = M(), i = Cn({
      components: [],
      annotations: void 0,
      crosshair: void 0,
      tooltip: void 0,
      xAxis: void 0,
      yAxis: void 0
    }), s = M();
    return ee(a, () => {
      r.value && r.value.setData(a.value, !0);
    }), ge(() => {
      var u;
      i.components.map((c) => c.config), (u = r.value) == null || u.updateContainer({ ...mr(o.value), ...mr(i) });
    }), le(() => {
      s.value && (r.value = new IM(s.value, { ...mr(i) }, a.value));
    }), ze(() => {
      var u;
      return (u = r.value) == null ? void 0 : u.destroy();
    }), wt(Pm, {
      data: a,
      update: (u) => i.components = [...i.components, u],
      destroy: () => {
        var u;
        return i.components = (u = i.components) == null ? void 0 : u.filter((c) => !c.isDestroyed());
      }
    }), wt(Im, {
      data: a,
      update: (u) => i[`${u.config.type}Axis`] = u,
      destroy: (u) => {
        i[`${u}Axis`] = void 0;
      }
    }), wt(_D, {
      data: a,
      update: (u) => i.crosshair = u,
      destroy: () => {
        i.crosshair = void 0;
      }
    }), wt(bD, {
      data: a,
      update: (u) => i.tooltip = u,
      destroy: () => {
        i.tooltip = void 0;
      }
    }), wt(xD, {
      data: a,
      update: (u) => i.annotations = u,
      destroy: () => {
        i.annotations = void 0;
      }
    }), t({
      component: r
    }), (u, c) => (g(), V("div", {
      "data-vis-xy-container": "",
      ref_key: "elRef",
      ref: s,
      class: "unovis-xy-container"
    }, [
      w(u.$slots, "default")
    ], 512));
  }
}), CD = { "data-vis-axis": "" }, Rm = /* @__PURE__ */ _({
  __name: "index",
  props: {
    position: {},
    type: {},
    fullSize: { type: Boolean },
    label: {},
    labelFontSize: {},
    labelMargin: {},
    labelTextFitMode: {},
    labelTextTrimType: {},
    labelColor: {},
    gridLine: { type: Boolean },
    tickLine: { type: Boolean },
    domainLine: { type: Boolean },
    minMaxTicksOnly: { type: Boolean },
    minMaxTicksOnlyShowGridLines: { type: Boolean },
    minMaxTicksOnlyWhenWidthIsLess: {},
    tickFormat: { type: Function },
    tickValues: {},
    numTicks: {},
    tickTextFitMode: {},
    tickTextWidth: {},
    tickTextSeparator: {},
    tickTextForceWordBreak: { type: Boolean },
    tickTextTrimType: {},
    tickTextFontSize: {},
    tickTextAlign: {},
    tickTextColor: {},
    tickTextAngle: {},
    tickTextHideOverlapping: { type: Boolean },
    tickPadding: {},
    x: {},
    y: {},
    id: { type: Function },
    color: {},
    xScale: { type: [Object, Function] },
    yScale: { type: [Object, Function] },
    excludeFromDomainCalculation: { type: Boolean },
    duration: {},
    events: {},
    attributes: {},
    data: {}
  },
  setup(e, { expose: t }) {
    const n = An(Im), a = e, o = E(() => n.data.value ?? a.data), r = ns(a), i = M();
    return le(() => {
      ae(() => {
        var s;
        i.value = new Em(r.value), (s = i.value) == null || s.setData(o.value), n.update(i.value);
      });
    }), ze(() => {
      var s;
      (s = i.value) == null || s.destroy(), n.destroy(a.type);
    }), ee(r, (s, u) => {
      var c;
      uc(s, u) || (c = i.value) == null || c.setConfig(r.value);
    }), ee(o, () => {
      var s;
      (s = i.value) == null || s.setData(o.value);
    }), t({
      component: i
    }), (s, u) => (g(), V("div", CD));
  }
}), kD = { "data-vis-component": "" }, SD = /* @__PURE__ */ _({
  __name: "index",
  props: {
    color: {},
    curveType: {},
    lineWidth: {},
    lineDashArray: {},
    fallbackValue: {},
    highlightOnHover: { type: Boolean },
    cursor: {},
    interpolateMissingData: { type: Boolean },
    x: {},
    y: {},
    id: { type: Function },
    xScale: { type: [Object, Function] },
    yScale: { type: [Object, Function] },
    excludeFromDomainCalculation: { type: Boolean },
    duration: {},
    events: {},
    attributes: {},
    data: {}
  },
  setup(e, { expose: t }) {
    const n = An(Pm), a = e, o = E(() => n.data.value ?? a.data), r = ns(a), i = M();
    return le(() => {
      ae(() => {
        var s;
        i.value = new es(r.value), (s = i.value) == null || s.setData(o.value), n.update(i.value);
      });
    }), ze(() => {
      var s;
      (s = i.value) == null || s.destroy(), n.destroy();
    }), ee(r, (s, u) => {
      var c;
      uc(s, u) || (c = i.value) == null || c.setConfig(r.value);
    }), ee(o, () => {
      var s;
      (s = i.value) == null || s.setData(o.value);
    }), t({
      component: i
    }), (s, u) => (g(), V("div", kD));
  }
}), $D = /* @__PURE__ */ _({
  __name: "index",
  props: {
    items: {},
    labelClassName: {},
    onLegendItemClick: { type: Function },
    labelFontSize: {},
    labelMaxWidth: {},
    bulletSize: {},
    bulletSpacing: {},
    bulletShape: {},
    orientation: {},
    renderIntoProvidedDomNode: { type: Boolean },
    data: {}
  },
  setup(e, { expose: t }) {
    const n = e;
    E(() => n.data);
    const a = ns(n), o = M(), r = M();
    return le(() => {
      ae(() => {
        r.value && (o.value = new Dm(r.value, { ...a.value, renderIntoProvidedDomNode: !0 }));
      });
    }), ze(() => {
      var i;
      (i = o.value) == null || i.destroy();
    }), ee(a, (i, s) => {
      var u;
      uc(i, s) || (u = o.value) == null || u.update(a.value);
    }), t({
      component: o
    }), (i, s) => (g(), V("div", {
      "data-vis-bullet-legend": "",
      ref_key: "elRef",
      ref: r
    }, null, 512));
  }
});
(function() {
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".unovis-xy-container,.unovis-single-container{display:block;position:relative;width:100%}[data-vis-leaflet-map],[data-vis-leaflet-flow-map]{display:block;position:relative}[data-vis-bullet-legend],[data-vis-rolling-pin-legend]{display:block}")), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
const TD = /* @__PURE__ */ _({
  __name: "XAxis",
  props: {
    position: {},
    y: {},
    label: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(Rm), O({ type: "x" }, t), null, 16));
  }
}), AD = /* @__PURE__ */ _({
  __name: "YAxis",
  props: {
    position: {},
    x: {},
    label: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(Rm), O({ type: "y" }, t), null, 16));
  }
}), ED = /* @__PURE__ */ _({
  __name: "ChartProvider",
  props: {
    data: {}
  },
  setup(e) {
    return (t, n) => (g(), k(l(wD), { data: e.data }, {
      default: y(() => [
        w(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["data"]));
  }
}), BD = /* @__PURE__ */ _({
  __name: "Line",
  props: {
    x: {},
    lines: {},
    curveType: {},
    lineWidth: {},
    interpolateMissingData: { type: Boolean },
    fallbackValue: {}
  },
  setup(e) {
    const t = e, n = ["#007aff", "#ff9500", "#34c759", "#ff3b30", "#af52de"], a = t.lines.map((i) => i.y), o = (i, s) => {
      var u;
      return ((u = t.lines[s]) == null ? void 0 : u.color) ?? n[s % n.length];
    }, r = (i, s) => {
      var u;
      return ((u = t.lines[s]) == null ? void 0 : u.dashArray) ?? void 0;
    };
    return (i, s) => (g(), k(l(SD), {
      x: e.x,
      y: l(a),
      color: o,
      lineDashArray: r,
      curveType: e.curveType ?? l(Me).Basis,
      lineWidth: e.lineWidth ?? 2,
      fallbackValue: e.fallbackValue,
      interpolateMissingData: e.interpolateMissingData
    }, null, 8, ["x", "y", "curveType", "lineWidth", "fallbackValue", "interpolateMissingData"]));
  }
}), MD = { class: "size-full" }, s3 = /* @__PURE__ */ _({
  __name: "LineChart",
  props: {
    data: {},
    index: {},
    categories: {},
    colours: {},
    items: {}
  },
  setup(e) {
    const t = e, n = (o) => o[t.index], a = t.categories.map((o, r) => ({
      y: (i) => i[o],
      color: t.colours[r]
      // todo: how can we dynamically apply other props to pass per line?
    }));
    return (o, r) => (g(), V("div", MD, [
      P(l(ED), { data: e.data }, {
        default: y(() => [
          P(l(TD), {
            label: "X Axis",
            position: "bottom"
          }),
          P(l(AD), {
            label: "Y Axis",
            position: "left"
          }),
          P(l(BD), {
            x: n,
            lines: l(a),
            lineWidth: 3,
            interpolateMissingData: "",
            fallbackValue: void 0
          }, null, 8, ["lines"])
        ]),
        _: 1
      }, 8, ["data"]),
      e.items ? (g(), k(l(OD), {
        key: 0,
        items: e.items
      }, null, 8, ["items"])) : te("", !0)
    ]));
  }
}), OD = /* @__PURE__ */ _({
  __name: "Legend",
  props: {
    items: {}
  },
  setup(e) {
    return (t, n) => (g(), k(l($D), Z(Q(t.$props)), null, 16));
  }
}), DD = { class: "my-auto text-slate-400 dark:text-slate-100" }, l3 = /* @__PURE__ */ _({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, n) => (g(), V("div", DD, " Showing " + be(e.min) + " to " + be(e.max) + " of " + be(e.total) + " results ", 1));
  }
}), u3 = /* @__PURE__ */ _({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(I_), O(n.value, {
      class: l(F)("text-text flex size-9 items-center justify-center", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default", {}, () => [
          P(l(th))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), c3 = /* @__PURE__ */ _({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(R_), Z(Q(n.value)), {
      default: y(() => [
        P(l(On), {
          class: j(l(F)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            w(a.$slots, "default", { icon: l(sw) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), d3 = /* @__PURE__ */ _({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(F_), Z(Q(n.value)), {
      default: y(() => [
        P(l(On), {
          class: j(l(F)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            w(a.$slots, "default", { icon: l(lw) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), f3 = /* @__PURE__ */ _({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(V_), Z(Q(n.value)), {
      default: y(() => [
        P(l(On), {
          class: j(l(F)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            w(a.$slots, "default", { icon: l(vu) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), p3 = /* @__PURE__ */ _({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(z_), Z(Q(n.value)), {
      default: y(() => [
        P(l(On), {
          class: j(l(F)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            w(a.$slots, "default", { icon: l(rw) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), h3 = /* @__PURE__ */ _({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, i) => (g(), k(l(H_), Z(Q(l(o))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), v3 = /* @__PURE__ */ _({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(W_), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), m3 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = de(o, a);
    return (i, s) => (g(), k(l(U_), null, {
      default: y(() => [
        P(l(G_), O({ ...l(r), ...i.$attrs }, {
          class: l(F)(
            "border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border bg-popover p-4 text-text shadow-md outline-hidden dark:border-slate-800",
            n.class
          )
        }), {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), g3 = /* @__PURE__ */ _({
  __name: "LumuixModeToggle",
  setup(e) {
    const t = Ok({
      selector: "html"
    });
    return (n, a) => (g(), k(FS, {
      modelValue: l(t),
      "onUpdate:modelValue": a[0] || (a[0] = (o) => lt(t) ? t.value = o : null)
    }, {
      checked: y(() => [
        P(l(dw), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      "not-checked": y(() => [
        P(l(hw), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), y3 = /* @__PURE__ */ _({
  __name: "CollapsibleTableRow",
  props: {
    row: {},
    headers: {},
    subRows: {},
    setOpenTo: { type: Boolean, default: !1 },
    class: {}
  },
  setup(e) {
    const t = e, n = M(t.setOpenTo), a = () => {
      n.value = !n.value;
    };
    return (o, r) => (g(), V(ve, null, [
      P(l(Eo), {
        onClick: a,
        class: j(t.class)
      }, {
        default: y(() => [
          (g(!0), V(ve, null, Ye(e.headers, (i) => (g(), k(l(pi), {
            key: i.value
          }, {
            default: y(() => [
              o.$slots[`cell_header_${i.value}`] ? w(o.$slots, `cell_header_${i.value}`, {
                key: 0,
                item: e.row,
                open: n.value
              }) : (g(), V(ve, { key: 1 }, [
                fe(be(e.row[i.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (g(), k(l(Tl), { key: 0 }, {
            default: y(() => [
              w(o.$slots, "row_actions", { item: e.row })
            ]),
            _: 3
          })) : te("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      n.value ? (g(!0), V(ve, { key: 0 }, Ye(e.subRows, (i, s) => (g(), k(l(Eo), { key: s }, {
        default: y(() => [
          (g(!0), V(ve, null, Ye(e.headers, (u) => (g(), k(l(pi), {
            key: u.value
          }, {
            default: y(() => [
              o.$slots[`subrow_cell_${u.value}`] ? w(o.$slots, `subrow_cell_${u.value}`, {
                key: 0,
                item: i,
                open: n.value
              }) : (g(), V(ve, { key: 1 }, [
                fe(be("subrow_cell_" + u.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (g(), k(l(Tl), { key: 0 }, {
            default: y(() => [
              w(o.$slots, "sub_row_actions", {
                item: e.row,
                open: n.value
              })
            ]),
            _: 3
          })) : te("", !0)
        ]),
        _: 2
      }, 1024))), 128)) : te("", !0)
    ], 64));
  }
}), PD = { class: "relative w-full overflow-auto" }, ID = /* @__PURE__ */ _({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", PD, [
      $e("table", {
        class: j(l(F)("w-full caption-bottom text-sm", t.class))
      }, [
        w(n.$slots, "default")
      ], 2)
    ]));
  }
}), RD = /* @__PURE__ */ _({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("tbody", {
      class: j(l(F)("[&_tr:last-child]:border-0", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), pi = /* @__PURE__ */ _({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("td", {
      class: j(["text-text p-4 align-middle [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), FD = /* @__PURE__ */ _({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("th", {
      class: j(
        l(F)(
          "text-heading h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
          t.class
        )
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), ND = /* @__PURE__ */ _({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("thead", {
      class: j(l(F)("[&_tr]:border-b", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), b3 = /* @__PURE__ */ _({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("tfoot", {
      class: j(
        l(F)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 last:[&>tr]:border-b-0",
          t.class
        )
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), Eo = /* @__PURE__ */ _({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("tr", {
      class: j(
        l(F)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          t.class
        )
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), Tl = /* @__PURE__ */ _({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("td", {
      class: j(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), LD = /* @__PURE__ */ _({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("caption", {
      class: j(l(F)("text-muted-foreground mt-4 text-sm", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), VD = { class: "flex items-center justify-center py-10" }, _3 = /* @__PURE__ */ _({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(Eo, null, {
      default: y(() => [
        P(pi, O({
          class: l(F)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, n.value), {
          default: y(() => [
            $e("div", VD, [
              w(a.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), x3 = /* @__PURE__ */ _({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (g(), k(l(ID), null, {
      default: y(() => [
        e.caption ? (g(), k(l(LD), { key: 0 }, {
          default: y(() => [
            fe(be(e.caption), 1)
          ]),
          _: 1
        })) : te("", !0),
        P(l(ND), null, {
          default: y(() => [
            P(l(Eo), null, {
              default: y(() => [
                (g(!0), V(ve, null, Ye(e.headers, (a, o) => (g(), k(l(FD), null, {
                  default: y(() => [
                    t.$slots[`header_${e.headers[o].value}`] ? w(t.$slots, `header_${e.headers[o].value}`, {
                      key: 0,
                      item: a
                    }) : (g(), V(ve, { key: 1 }, [
                      fe(be(a.name), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 256))
              ]),
              _: 3
            })
          ]),
          _: 3
        }),
        P(l(RD), null, {
          default: y(() => [
            (g(!0), V(ve, null, Ye(e.rows, (a, o) => (g(), k(l(Eo), { key: o }, {
              default: y(() => [
                (g(!0), V(ve, null, Ye(e.headers, (r) => (g(), k(l(pi), {
                  key: r.value
                }, {
                  default: y(() => [
                    t.$slots[`cell_${r.value}`] ? w(t.$slots, `cell_${r.value}`, {
                      key: 0,
                      item: a
                    }) : (g(), V(ve, { key: 1 }, [
                      fe(be(a[r.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                t.$slots.row_actions ? (g(), k(l(Tl), { key: 0 }, {
                  default: y(() => [
                    w(t.$slots, "row_actions", { item: a })
                  ]),
                  _: 2
                }, 1024)) : te("", !0)
              ]),
              _: 2
            }, 1024))), 128))
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), zD = { class: "text-text" }, w3 = /* @__PURE__ */ _({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, a = () => n("close");
    return (o, r) => (g(), k(l(kh), { open: e.open }, {
      default: y(() => [
        P(l(Fk), { "as-child": "" }, {
          default: y(() => [
            w(o.$slots, "trigger")
          ]),
          _: 3
        }),
        P(l(Sh), {
          onClose: a,
          onEscapeKeyDown: a,
          onPointerDownOutside: a,
          class: j("max-w-" + e.size)
        }, {
          default: y(() => [
            P(l(Nk), null, {
              default: y(() => [
                P(l(Lk), null, {
                  default: y(() => {
                    var i;
                    return [
                      o.$slots.title ? w(o.$slots, "title", { key: 0 }) : (i = e.headerData) != null && i.title ? (g(), V(ve, { key: 1 }, [
                        fe(be(e.headerData.title), 1)
                      ], 64)) : te("", !0)
                    ];
                  }),
                  _: 3
                }),
                P(l(Vk), null, {
                  default: y(() => {
                    var i;
                    return [
                      o.$slots.description ? w(o.$slots, "description", { key: 0 }) : (i = e.headerData) != null && i.description ? (g(), V(ve, { key: 1 }, [
                        fe(be(e.headerData.description), 1)
                      ], 64)) : te("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            $e("div", zD, [
              o.$slots.content ? w(o.$slots, "content", { key: 0 }) : w(o.$slots, "default", { key: 1 })
            ]),
            P(l(zk), null, {
              default: y(() => [
                w(o.$slots, "footer")
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), qD = /* @__PURE__ */ _({
  __name: "TabsRoot",
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    activationMode: {},
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, i) => (g(), k(l(J0), Z(Q(l(o))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), C3 = /* @__PURE__ */ _({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = Le(n);
    return (o, r) => (g(), k(l(tx), O(l(a), {
      class: l(F)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-xs dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 text-muted-foreground data-[state=active]:bg-white dark:data-[state=active]:bg-muted-foreground data-[state=active]:text-primary",
        t.class
      )
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), HD = /* @__PURE__ */ _({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => {
      var o;
      return g(), k(et((o = e.tab) != null && o.is ? e.tab.is : "a"), {
        href: e.tab.href,
        class: j([
          e.tab.active ? "text-primary bg-white dark:bg-muted-foreground hover:bg-opacity-80" : "text-muted",
          l(F)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            t.class
          )
        ])
      }, {
        default: y(() => {
          var r;
          return [
            (r = e.tab) != null && r.icon ? (g(), k(et(e.tab.icon), {
              key: 0,
              class: "size-5"
            })) : te("", !0),
            fe(" " + be(e.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), yf = /* @__PURE__ */ _({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(Q0), O(n.value, {
      class: l(F)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 bg-muted",
        t.class
      )
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), k3 = /* @__PURE__ */ _({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(ex), O({
      class: l(F)(
        "mt-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        t.class
      )
    }, n.value), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), WD = {}, UD = { class: "text-text mt-2 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function KD(e, t) {
  return g(), V("div", UD, [
    w(e.$slots, "default")
  ]);
}
const jD = /* @__PURE__ */ zo(WD, [["render", KD]]), S3 = /* @__PURE__ */ _({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(e) {
    const t = e, n = E(
      () => t.tabs.find((a) => a.active)
    );
    return (a, o) => (g(), k(l(qD), null, {
      default: y(() => [
        P(l(yf), { class: "hidden gap-2 md:block" }, {
          default: y(() => [
            (g(!0), V(ve, null, Ye(e.tabs, (r) => (g(), k(l(HD), {
              key: r.name,
              tab: r
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        P(l(yf), { class: "flex md:hidden" }, {
          default: y(() => [
            P(l(Gk), null, {
              default: y(() => [
                P(l(Xk), { "as-child": "" }, {
                  default: y(() => [
                    P(l(On), { variant: "secondary" }, {
                      default: y(() => {
                        var r;
                        return [
                          fe(be(((r = n.value) == null ? void 0 : r.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                P(l(Zk), { class: "w-full" }, {
                  default: y(() => [
                    (g(!0), V(ve, null, Ye(e.tabs, (r) => (g(), k(l(Jk), O({
                      key: r.name
                    }, { ref_for: !0 }, r), {
                      default: y(() => [
                        fe(be(r.name), 1)
                      ]),
                      _: 2
                    }, 1040))), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        P(l(jD), null, {
          default: y(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), GD = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, YD = /* @__PURE__ */ _({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = fn(t, "class"), a = aa(n);
    return (o, r) => (g(), V("div", GD, [
      P(l(ak), O({ "data-slot": "navigation-menu-viewport" }, l(a), {
        class: l(F)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)]",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), $3 = /* @__PURE__ */ _({
  __name: "NavigationMenu",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    orientation: {},
    delayDuration: {},
    skipDelayDuration: {},
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
    disablePointerLeaveClose: { type: Boolean },
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    viewport: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = fn(n, "class", "viewport"), r = cn(o, a);
    return (i, s) => (g(), k(l(FC), O({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, l(r), {
      class: l(F)("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", n.class)
    }), {
      default: y(() => [
        w(i.$slots, "default"),
        e.viewport ? (g(), k(YD, { key: 0 })) : te("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), T3 = /* @__PURE__ */ _({
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = fn(n, "class"), r = cn(o, a);
    return (i, s) => (g(), k(l(KC), O({ "data-slot": "navigation-menu-content" }, l(r), {
      class: l(F)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        n.class
      )
    }), {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), A3 = /* @__PURE__ */ _({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = fn(t, "class"), a = aa(n);
    return (o, r) => (g(), k(l(GC), O({ "data-slot": "navigation-menu-indicator" }, l(a), {
      class: l(F)("data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden", t.class)
    }), {
      default: y(() => [...r[0] || (r[0] = [
        $e("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), E3 = /* @__PURE__ */ _({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = fn(t, "class");
    return (a, o) => (g(), k(l(qC), O({ "data-slot": "navigation-menu-item" }, l(n), {
      class: l(F)("relative", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), B3 = /* @__PURE__ */ _({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = fn(n, "class"), r = cn(o, a);
    return (i, s) => (g(), k(l(XC), O({ "data-slot": "navigation-menu-link" }, l(r), {
      class: l(F)("'data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4'", n.class)
    }), {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), M3 = /* @__PURE__ */ _({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = fn(t, "class"), a = aa(n);
    return (o, r) => (g(), k(l(JC), O({ "data-slot": "navigation-menu-list" }, l(a), {
      class: l(F)(
        "group flex flex-1 list-none items-center justify-center gap-1",
        t.class
      )
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), O3 = /* @__PURE__ */ _({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = fn(t, "class"), a = aa(n);
    return (o, r) => (g(), k(l(tk), O({ "data-slot": "navigation-menu-trigger" }, l(a), {
      class: l(F)(l(XD)(), "group", t.class)
    }), {
      default: y(() => [
        w(o.$slots, "default"),
        P(l(Mi), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), XD = un(
  "text-text group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), ZD = /* @__PURE__ */ _({
  __name: "Separator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    label: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(T0), O(n.value, {
      class: l(F)(
        "bg-border relative shrink-0",
        t.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        t.class
      )
    }), {
      default: y(() => [
        t.label ? (g(), V("span", {
          key: 0,
          class: j(
            l(F)(
              "bg-background text-muted-foreground absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-xs",
              t.orientation === "vertical" ? "w-px px-1 py-2" : "h-px px-2 py-1"
            )
          )
        }, be(t.label), 3)) : te("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), JD = /* @__PURE__ */ _({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, i) => (g(), k(l(rp), Z(Q(l(o))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), D3 = /* @__PURE__ */ _({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(Ro), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), QD = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SheetContent",
  props: {
    class: {},
    side: {},
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, side: s, ...u } = n;
      return u;
    }), r = de(o, a);
    return (i, s) => (g(), k(l(Xl), null, {
      default: y(() => [
        P(l(tu), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        P(l(eu), O({
          class: l(F)(l(eP)({ side: e.side }), n.class)
        }, { ...l(r), ...i.$attrs }), {
          default: y(() => [
            w(i.$slots, "default"),
            P(l(Ro), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none" }, {
              default: y(() => [
                P(l(Oi), { class: "text-muted-foreground h-4 w-4" })
              ]),
              _: 1
            })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), P3 = /* @__PURE__ */ _({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(dp), O({
      class: l(F)("text-muted-foreground text-sm", t.class)
    }, n.value), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), I3 = /* @__PURE__ */ _({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: j(l(F)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), R3 = /* @__PURE__ */ _({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: j(l(F)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), F3 = /* @__PURE__ */ _({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(cp), O({
      class: l(F)("text-foreground text-lg font-semibold", t.class)
    }, n.value), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), N3 = /* @__PURE__ */ _({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(ip), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eP = un(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), tP = "sidebar:state", nP = 60 * 60 * 24 * 7, aP = "16rem", oP = "18rem", rP = "3rem", iP = "b", [as, sP] = pe("Sidebar"), lP = { class: "flex h-full w-full flex-col" }, uP = ["data-state", "data-collapsible", "data-variant", "data-side"], cP = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border bg-sidebar text-sidebar-foreground flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, L3 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: n, state: a, openMobile: o, setOpenMobile: r } = as();
    return (i, s) => e.collapsible === "none" ? (g(), V("div", O({
      key: 0,
      class: l(F)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
    }, i.$attrs), [
      w(i.$slots, "default")
    ], 16)) : l(n) ? (g(), k(l(JD), O({
      key: 1,
      open: l(o)
    }, i.$attrs, { "onUpdate:open": l(r) }), {
      default: y(() => [
        P(l(QD), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: qt({
            "--sidebar-width": l(oP)
          })
        }, {
          default: y(() => [
            $e("div", lP, [
              w(i.$slots, "default", { state: l(a) })
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (g(), V("div", {
      key: 2,
      class: "group peer hidden md:block",
      "data-state": l(a),
      "data-collapsible": l(a) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      $e("div", {
        class: j(
          l(F)(
            "relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      $e("div", O({
        class: l(F)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, i.$attrs), [
        $e("div", cP, [
          w(i.$slots, "default", { state: l(a) })
        ])
      ], 16)
    ], 8, uP));
  }
}), V3 = /* @__PURE__ */ _({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-sidebar": "content",
      class: j(
        l(F)(
          "bg-sidebar flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          t.class
        )
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), z3 = /* @__PURE__ */ _({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-sidebar": "footer",
      class: j(l(F)("flex flex-col gap-2 p-2", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), q3 = /* @__PURE__ */ _({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-sidebar": "group",
      class: j(l(F)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), H3 = /* @__PURE__ */ _({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(K), {
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: j(
        l(F)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), W3 = /* @__PURE__ */ _({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-sidebar": "group-content",
      class: j(l(F)("w-full text-sm", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), U3 = /* @__PURE__ */ _({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(K), {
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: j(
        l(F)(
          "ring-sidebar-ring text-sidebar-foreground/70 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          t.class
        )
      )
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), K3 = /* @__PURE__ */ _({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-sidebar": "header",
      class: j(l(F)("flex flex-col gap-2 p-2", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), j3 = /* @__PURE__ */ _({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(TS, {
      "data-sidebar": "input",
      class: j(
        l(F)(
          "focus-visible:ring-sidebar-ring bg-background h-8 w-full shadow-none focus-visible:ring-2",
          t.class
        )
      )
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), G3 = /* @__PURE__ */ _({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("main", {
      class: j(
        l(F)(
          "bg-background relative flex min-h-svh flex-1 flex-col",
          "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
          t.class
        )
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), Y3 = /* @__PURE__ */ _({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("ul", {
      "data-sidebar": "menu",
      class: j(l(F)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), X3 = /* @__PURE__ */ _({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(K), {
      "data-sidebar": "menu-action",
      class: j(
        l(F)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground text-sidebar-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 md:after:hidden",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          e.showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
          t.class
        )
      ),
      as: e.as,
      "as-child": e.asChild
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), Z3 = /* @__PURE__ */ _({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      "data-sidebar": "menu-badge",
      class: j(
        l(F)(
          "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums",
          "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), dP = /* @__PURE__ */ _({
  __name: "Tooltip",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = de(e, t);
    return (r, i) => (g(), k(l(_x), Z(Q(l(o))), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fP = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "TooltipContent",
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = de(o, a);
    return (i, s) => (g(), k(l(kx), null, {
      default: y(() => [
        P(l(Cx), O({ ...l(r), ...i.$attrs }, {
          class: l(F)(
            "border-border bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md",
            n.class
          )
        }), {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), J3 = /* @__PURE__ */ _({
  __name: "TooltipProvider",
  props: {
    delayDuration: {},
    skipDelayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(Kp), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pP = /* @__PURE__ */ _({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(xx), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bf = /* @__PURE__ */ _({
  __name: "SidebarMenuButtonChild",
  props: {
    as: { default: "button" },
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: {},
    asChild: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(K), O({
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: l(F)(l(mP)({ variant: e.variant, size: e.size }), t.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), Q3 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SidebarMenuButton",
  props: {
    as: {},
    variant: {},
    size: {},
    isActive: { type: Boolean },
    class: {},
    asChild: { type: Boolean },
    tooltip: {}
  },
  setup(e) {
    const t = e, { isMobile: n, state: a } = as(), o = E(() => {
      const { tooltip: r, ...i } = t;
      return i;
    });
    return (r, i) => e.tooltip ? (g(), k(l(dP), { key: 1 }, {
      default: y(() => [
        P(l(pP), { "as-child": "" }, {
          default: y(() => [
            P(bf, Z(Q({ ...o.value, ...r.$attrs })), {
              default: y(() => [
                w(r.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        P(l(fP), {
          side: "right",
          align: "center",
          hidden: l(a) !== "collapsed" || l(n)
        }, {
          default: y(() => [
            typeof e.tooltip == "string" ? (g(), V(ve, { key: 0 }, [
              fe(be(e.tooltip), 1)
            ], 64)) : (g(), k(et(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (g(), k(bf, Z(O({ key: 0 }, { ...o.value, ...r.$attrs })), {
      default: y(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eR = /* @__PURE__ */ _({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("li", {
      "data-sidebar": "menu-item",
      class: j(l(F)("group/menu-item relative", t.class))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), _f = /* @__PURE__ */ _({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("div", {
      class: j(l(F)("bg-skeleton animate-pulse rounded-md", t.class))
    }, null, 2));
  }
}), tR = /* @__PURE__ */ _({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (a, o) => (g(), V("div", {
      "data-sidebar": "menu-skeleton",
      class: j(l(F)("flex h-8 items-center gap-2 rounded-md px-2", t.class))
    }, [
      e.showIcon ? (g(), k(_f, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : te("", !0),
      P(_f, {
        class: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: qt({ "--skeleton-width": n.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), nR = /* @__PURE__ */ _({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), V("ul", {
      "data-sidebar": "menu-badge",
      class: j(
        l(F)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), aR = /* @__PURE__ */ _({
  __name: "SidebarMenuSubButton",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    size: { default: "md" },
    isActive: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(K), {
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: j(
        l(F)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground text-sidebar-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          e.size === "sm" && "text-xs",
          e.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), hP = {};
function vP(e, t) {
  return g(), V("li", null, [
    w(e.$slots, "default")
  ]);
}
const oR = /* @__PURE__ */ zo(hP, [["render", vP]]), rR = /* @__PURE__ */ _({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = xh("(max-width: 768px)"), r = M(!1), i = /* @__PURE__ */ Ch(n, "open", a, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function s(f) {
      i.value = f, document.cookie = `${tP}=${i.value}; path=/; max-age=${nP}`;
    }
    function u(f) {
      r.value = f;
    }
    function c() {
      return o.value ? u(!r.value) : s(!i.value);
    }
    Hr("keydown", (f) => {
      f.key === iP && (f.metaKey || f.ctrlKey) && (f.preventDefault(), c());
    });
    const d = E(() => i.value ? "expanded" : "collapsed");
    return sP({
      state: d,
      open: i,
      setOpen: s,
      isMobile: o,
      openMobile: r,
      setOpenMobile: u,
      toggleSidebar: c
    }), (f, p) => (g(), k(l(Kp), { "delay-duration": 0 }, {
      default: y(() => [
        $e("div", O({
          style: {
            "--sidebar-width": l(aP),
            "--sidebar-width-icon": l(rP)
          },
          class: l(F)(
            "group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-auto",
            n.class
          )
        }, f.$attrs), [
          w(f.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), iR = /* @__PURE__ */ _({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: n } = as();
    return (a, o) => (g(), V("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: j(
        l(F)(
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          t.class
        )
      ),
      onClick: o[0] || (o[0] = //@ts-ignore
      (...r) => l(n) && l(n)(...r))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), sR = /* @__PURE__ */ _({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(ZD, {
      "data-sidebar": "separator",
      class: j(l(F)("bg-sidebar-border mx-2 w-auto", t.class))
    }, {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), lR = /* @__PURE__ */ _({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: n } = as();
    return (a, o) => (g(), k(On, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: j(l(F)("h-7 w-7", t.class)),
      onClick: l(n)
    }, {
      default: y(() => [
        P(l(fw)),
        o[0] || (o[0] = $e("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), mP = un(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), uR = /* @__PURE__ */ _({
  __name: "Slider",
  props: {
    name: {},
    defaultValue: {},
    modelValue: {},
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    inverted: { type: Boolean },
    min: {},
    max: {},
    step: {},
    minStepsBetweenThumbs: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = de(o, a);
    return (i, s) => (g(), k(l(V0), O({
      class: l(F)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        n.class
      )
    }, l(r)), {
      default: y(() => [
        P(l(H0), { class: "bg-accent relative h-2 w-full grow overflow-hidden rounded-full data-[orientation=vertical]:w-2" }, {
          default: y(() => [
            P(l(W0), { class: "bg-primary absolute h-full data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (g(!0), V(ve, null, Ye(e.modelValue, (u, c) => (g(), k(l(q0), {
          key: c,
          class: "border-primary bg-primary ring-offset-background focus-visible:ring-ring block size-5 rounded-full border-2 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), gP = 5, yP = 5e6, Qt = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Bs = 0;
function bP() {
  return Bs = (Bs + 1) % Number.MAX_VALUE, Bs.toString();
}
const Ms = /* @__PURE__ */ new Map();
function xf(e) {
  if (Ms.has(e)) return;
  const t = setTimeout(() => {
    Ms.delete(e), vo({
      type: Qt.REMOVE_TOAST,
      toastId: e
    });
  }, yP);
  Ms.set(e, t);
}
const yt = M({
  toasts: []
});
function vo(e) {
  switch (e.type) {
    case Qt.ADD_TOAST:
      yt.value.toasts = [e.toast, ...yt.value.toasts].slice(0, gP);
      break;
    case Qt.UPDATE_TOAST:
      yt.value.toasts = yt.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case Qt.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? xf(t) : yt.value.toasts.forEach((n) => {
        xf(n.id);
      }), yt.value.toasts = yt.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case Qt.REMOVE_TOAST:
      e.toastId === void 0 ? yt.value.toasts = [] : yt.value.toasts = yt.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function _P() {
  return {
    toasts: E(() => yt.value.toasts),
    toast: xP,
    dismiss: (e) => vo({ type: Qt.DISMISS_TOAST, toastId: e })
  };
}
function xP(e) {
  const t = bP(), n = (o) => vo({
    type: Qt.UPDATE_TOAST,
    toast: { ...o, id: t }
  }), a = () => vo({ type: Qt.DISMISS_TOAST, toastId: t });
  return vo({
    type: Qt.ADD_TOAST,
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || a();
      }
    }
  }), {
    id: t,
    dismiss: a,
    update: n
  };
}
const wP = { class: "flex gap-3" }, CP = { class: "grid gap-1" }, cR = /* @__PURE__ */ _({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = _P();
    return (n, a) => (g(), k(l(AP), null, {
      default: y(() => [
        (g(!0), V(ve, null, Ye(l(t), (o) => (g(), k(l(kP), O({
          key: o.id
        }, { ref_for: !0 }, o, { class: "my-1" }), {
          default: y(() => [
            $e("div", wP, [
              (g(), k(et(o.icon), {
                class: j(l(F)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              $e("div", CP, [
                o.title ? (g(), k(l(TP), { key: 0 }, {
                  default: y(() => [
                    fe(be(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : te("", !0),
                o.description ? (g(), V(ve, { key: 1 }, [
                  Km(o.description) ? (g(), k(l(wf), { key: 0 }, {
                    default: y(() => [
                      (g(), k(et(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (g(), k(l(wf), { key: 1 }, {
                    default: y(() => [
                      fe(be(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : te("", !0),
                P(l($P))
              ]),
              (g(), k(et(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        P(l(SP))
      ]),
      _: 1
    }));
  }
}), kP = /* @__PURE__ */ _({
  __name: "Toast",
  props: {
    class: {},
    variant: {},
    onOpenChange: { type: Function },
    defaultOpen: { type: Boolean },
    forceMount: { type: Boolean },
    type: {},
    open: { type: Boolean },
    duration: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = E(() => {
      const { class: i, ...s } = n;
      return s;
    }), r = de(o, a);
    return (i, s) => (g(), k(l(px), O(l(r), {
      class: l(F)(l(EP)({ variant: e.variant }), n.class),
      "onUpdate:open": e.onOpenChange
    }), {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), SP = /* @__PURE__ */ _({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(vx), O(n.value, {
      class: l(F)(
        "fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), dR = /* @__PURE__ */ _({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(hx), Z(Q(n.value)), {
      default: y(() => [
        P(l(On), {
          variant: e.variant,
          class: j(t.class)
        }, {
          default: y(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["variant", "class"])
      ]),
      _: 3
    }, 16));
  }
}), $P = /* @__PURE__ */ _({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(Wp), O(n.value, {
      class: l(F)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-50 focus:group-[.destructive]:ring-red-400 focus:group-[.destructive]:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        P(l(Oi), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), TP = /* @__PURE__ */ _({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(mx), O(n.value, {
      class: l(F)("text-sm font-semibold", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wf = /* @__PURE__ */ _({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = E(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), k(l(gx), O({
      class: l(F)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), AP = /* @__PURE__ */ _({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), k(l(ax), Z(Q(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), EP = un(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-(--radix-toast-swipe-end-x) data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x) data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
export {
  NP as Accordion,
  LP as AccordionContent,
  VP as AccordionItem,
  zP as AccordionTrigger,
  qP as Alert,
  HP as AlertDescription,
  WP as AlertTitle,
  ZP as Avatar,
  JP as AvatarFallback,
  QP as AvatarImage,
  eI as Badge,
  qo as Base,
  Yk as BaseDropdownMenuItem,
  tI as Breadcrumb,
  nI as BreadcrumbEllipsis,
  aI as BreadcrumbItem,
  oI as BreadcrumbLink,
  rI as BreadcrumbList,
  iI as BreadcrumbPage,
  sI as BreadcrumbSeparator,
  On as Button,
  lI as Card,
  fI as CardContent,
  dI as CardDescription,
  pI as CardFooter,
  uI as CardHeader,
  cI as CardTitle,
  oS as CharacterCount,
  ED as ChartProvider,
  QI as Checkbox,
  y3 as CollapsibleTableRow,
  hI as Combobox,
  vI as ComboboxAnchor,
  GP as ComboboxCancel,
  mI as ComboboxEmpty,
  gI as ComboboxGroup,
  yI as ComboboxInput,
  bI as ComboboxItem,
  YP as ComboboxItemIndicator,
  _I as ComboboxList,
  xI as ComboboxSeparator,
  XP as ComboboxTrigger,
  Rk as Command,
  kI as CommandDialog,
  SI as CommandEmpty,
  $I as CommandGroup,
  TI as CommandInput,
  AI as CommandItem,
  EI as CommandList,
  BI as CommandSeparator,
  MI as CommandShortcut,
  lS as Description,
  kh as Dialog,
  wI as DialogClose,
  Sh as DialogContent,
  Vk as DialogDescription,
  zk as DialogFooter,
  Nk as DialogHeader,
  CI as DialogScrollContent,
  Lk as DialogTitle,
  Fk as DialogTrigger,
  OI as DraggableArea,
  DI as DraggableItem,
  Gk as DropdownMenu,
  FI as DropdownMenuCheckboxItem,
  Zk as DropdownMenuContent,
  PI as DropdownMenuGroup,
  RI as DropdownMenuItem,
  zI as DropdownMenuLabel,
  Jk as DropdownMenuLink,
  w_ as DropdownMenuPortal,
  II as DropdownMenuRadioGroup,
  NI as DropdownMenuRadioItem,
  VI as DropdownMenuSeparator,
  LI as DropdownMenuShortcut,
  qI as DropdownMenuSub,
  WI as DropdownMenuSubContent,
  HI as DropdownMenuSubTrigger,
  Xk as DropdownMenuTrigger,
  UI as Empty,
  KI as EmptyContent,
  jI as EmptyDescription,
  GI as EmptyHeader,
  YI as EmptyMedia,
  XI as EmptyTitle,
  cS as Error,
  ZI as Form,
  gS as FormElement,
  JI as FormGrid,
  e3 as ImageUpload,
  TS as Input,
  xu as Label,
  OD as Legend,
  BD as Line,
  s3 as LineChart,
  x3 as LumuixDatatable,
  w3 as LumuixModal,
  g3 as LumuixModeToggle,
  S3 as LumuixTabs,
  $3 as NavigationMenu,
  T3 as NavigationMenuContent,
  A3 as NavigationMenuIndicator,
  E3 as NavigationMenuItem,
  B3 as NavigationMenuLink,
  M3 as NavigationMenuList,
  O3 as NavigationMenuTrigger,
  YD as NavigationMenuViewport,
  IP as Pagination,
  l3 as PaginationDetails,
  u3 as PaginationEllipsis,
  c3 as PaginationFirst,
  d3 as PaginationLast,
  RP as PaginationList,
  FP as PaginationListItem,
  f3 as PaginationNext,
  p3 as PaginationPrev,
  h3 as Popover,
  m3 as PopoverContent,
  v3 as PopoverTrigger,
  r3 as Select,
  MS as SelectContent,
  t3 as SelectGroup,
  DS as SelectItem,
  n3 as SelectItemText,
  a3 as SelectLabel,
  AS as SelectRoot,
  IS as SelectScrollDownButton,
  PS as SelectScrollUpButton,
  o3 as SelectSeparator,
  BS as SelectTrigger,
  ES as SelectValue,
  ZD as Separator,
  JD as Sheet,
  D3 as SheetClose,
  QD as SheetContent,
  P3 as SheetDescription,
  I3 as SheetFooter,
  R3 as SheetHeader,
  F3 as SheetTitle,
  N3 as SheetTrigger,
  L3 as Sidebar,
  V3 as SidebarContent,
  z3 as SidebarFooter,
  q3 as SidebarGroup,
  H3 as SidebarGroupAction,
  W3 as SidebarGroupContent,
  U3 as SidebarGroupLabel,
  K3 as SidebarHeader,
  j3 as SidebarInput,
  G3 as SidebarInset,
  Y3 as SidebarMenu,
  X3 as SidebarMenuAction,
  Z3 as SidebarMenuBadge,
  Q3 as SidebarMenuButton,
  eR as SidebarMenuItem,
  tR as SidebarMenuSkeleton,
  nR as SidebarMenuSub,
  aR as SidebarMenuSubButton,
  oR as SidebarMenuSubItem,
  rR as SidebarProvider,
  iR as SidebarRail,
  sR as SidebarSeparator,
  lR as SidebarTrigger,
  _f as Skeleton,
  uR as Slider,
  jD as TabBaseContent,
  ID as Table,
  RD as TableBody,
  LD as TableCaption,
  pi as TableCell,
  _3 as TableEmpty,
  b3 as TableFooter,
  FD as TableHead,
  ND as TableHeader,
  Eo as TableRow,
  Tl as TableRowAction,
  k3 as TabsContent,
  HD as TabsItem,
  yf as TabsList,
  qD as TabsRoot,
  C3 as TabsTrigger,
  i3 as TextArea,
  kP as Toast,
  dR as ToastAction,
  $P as ToastClose,
  wf as ToastDescription,
  AP as ToastProvider,
  TP as ToastTitle,
  SP as ToastViewport,
  cR as Toaster,
  FS as Toggle,
  dP as Tooltip,
  fP as TooltipContent,
  J3 as TooltipProvider,
  pP as TooltipTrigger,
  TD as XAxis,
  AD as YAxis,
  vw as alertVariants,
  Dk as badgeVariants,
  Ik as buttonVariants,
  jm as createContext,
  nS as emptyMediaVariants,
  XD as navigationMenuTriggerStyle,
  eP as sheetVariants,
  mP as sidebarMenuButtonVariants,
  Pk as spinnerSize,
  xP as toast,
  EP as toastVariants,
  jk as useDraggable,
  as as useSidebar,
  _P as useToast
};
