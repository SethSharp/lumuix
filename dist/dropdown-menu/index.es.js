import { computed as D, ref as k, shallowRef as ln, watch as H, getCurrentScope as un, onScopeDispose as cn, shallowReadonly as ke, unref as p, getCurrentInstance as Oe, toRef as to, camelize as dn, defineComponent as O, Comment as no, mergeProps as F, cloneVNode as oo, h as De, toRefs as Fe, reactive as pn, watchEffect as te, markRaw as ro, openBlock as P, createBlock as A, isRef as fn, withCtx as C, renderSlot as B, onMounted as st, createVNode as G, nextTick as Q, withKeys as so, normalizeProps as V, guardReactiveProps as U, effectScope as mn, Fragment as ao, toHandlerKey as io, onUnmounted as at, withModifiers as bt, inject as vn, provide as gn, Teleport as lo, createCommentVNode as uo, mergeDefaults as hn, normalizeStyle as yn, createElementBlock as ze, readonly as co, customRef as po, onBeforeUnmount as fo, onBeforeUpdate as mo, onUpdated as vo, normalizeClass as it, createElementVNode as He } from "vue";
const go = ["top", "right", "bottom", "left"], ie = Math.min, Z = Math.max, tt = Math.round, Je = Math.floor, we = (e) => ({
  x: e,
  y: e
}), ho = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, yo = {
  start: "end",
  end: "start"
};
function wt(e, t, n) {
  return Z(e, ie(t, n));
}
function pe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fe(e) {
  return e.split("-")[0];
}
function Le(e) {
  return e.split("-")[1];
}
function Bt(e) {
  return e === "x" ? "y" : "x";
}
function At(e) {
  return e === "y" ? "height" : "width";
}
function xe(e) {
  return ["top", "bottom"].includes(fe(e)) ? "y" : "x";
}
function kt(e) {
  return Bt(xe(e));
}
function bo(e, t, n) {
  n === void 0 && (n = !1);
  const o = Le(e), r = kt(e), s = At(r);
  let a = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = nt(a)), [a, nt(a)];
}
function wo(e) {
  const t = nt(e);
  return [xt(e), t, xt(t)];
}
function xt(e) {
  return e.replace(/start|end/g, (t) => yo[t]);
}
function xo(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], s = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? s : a;
    default:
      return [];
  }
}
function Co(e, t, n, o) {
  const r = Le(e);
  let s = xo(fe(e), n === "start", o);
  return r && (s = s.map((a) => a + "-" + r), t && (s = s.concat(s.map(xt)))), s;
}
function nt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ho[t]);
}
function _o(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function bn(e) {
  return typeof e != "number" ? _o(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ot(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function Kt(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = xe(t), a = kt(t), i = At(a), u = fe(t), d = s === "y", c = o.x + o.width / 2 - r.width / 2, l = o.y + o.height / 2 - r.height / 2, f = o[i] / 2 - r[i] / 2;
  let m;
  switch (u) {
    case "top":
      m = {
        x: c,
        y: o.y - r.height
      };
      break;
    case "bottom":
      m = {
        x: c,
        y: o.y + o.height
      };
      break;
    case "right":
      m = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      m = {
        x: o.x - r.width,
        y: l
      };
      break;
    default:
      m = {
        x: o.x,
        y: o.y
      };
  }
  switch (Le(t)) {
    case "start":
      m[a] -= f * (n && d ? -1 : 1);
      break;
    case "end":
      m[a] += f * (n && d ? -1 : 1);
      break;
  }
  return m;
}
const Oo = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: a
  } = n, i = s.filter(Boolean), u = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: c,
    y: l
  } = Kt(d, o, u), f = o, m = {}, v = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: h,
      fn: y
    } = i[g], {
      x: w,
      y: x,
      data: E,
      reset: M
    } = await y({
      x: c,
      y: l,
      initialPlacement: o,
      placement: f,
      strategy: r,
      middlewareData: m,
      rects: d,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = w ?? c, l = x ?? l, m = {
      ...m,
      [h]: {
        ...m[h],
        ...E
      }
    }, M && v <= 50 && (v++, typeof M == "object" && (M.placement && (f = M.placement), M.rects && (d = M.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : M.rects), {
      x: c,
      y: l
    } = Kt(d, f, u)), g = -1);
  }
  return {
    x: c,
    y: l,
    placement: f,
    strategy: r,
    middlewareData: m
  };
};
async function Ge(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: s,
    rects: a,
    elements: i,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: l = "floating",
    altBoundary: f = !1,
    padding: m = 0
  } = pe(t, e), v = bn(m), h = i[f ? l === "floating" ? "reference" : "floating" : l], y = ot(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(h))) == null || n ? h : h.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), w = l === "floating" ? {
    x: o,
    y: r,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), E = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, M = ot(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: w,
    offsetParent: x,
    strategy: u
  }) : w);
  return {
    top: (y.top - M.top + v.top) / E.y,
    bottom: (M.bottom - y.bottom + v.bottom) / E.y,
    left: (y.left - M.left + v.left) / E.x,
    right: (M.right - y.right + v.right) / E.x
  };
}
const Po = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: s,
      platform: a,
      elements: i,
      middlewareData: u
    } = t, {
      element: d,
      padding: c = 0
    } = pe(e, t) || {};
    if (d == null)
      return {};
    const l = bn(c), f = {
      x: n,
      y: o
    }, m = kt(r), v = At(m), g = await a.getDimensions(d), h = m === "y", y = h ? "top" : "left", w = h ? "bottom" : "right", x = h ? "clientHeight" : "clientWidth", E = s.reference[v] + s.reference[m] - f[m] - s.floating[v], M = f[m] - s.reference[m], T = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let $ = T ? T[x] : 0;
    (!$ || !await (a.isElement == null ? void 0 : a.isElement(T))) && ($ = i.floating[x] || s.floating[v]);
    const j = E / 2 - M / 2, N = $ / 2 - g[v] / 2 - 1, b = ie(l[y], N), S = ie(l[w], N), _ = b, K = $ - g[v] - S, I = $ / 2 - g[v] / 2 + j, X = wt(_, I, K), W = !u.arrow && Le(r) != null && I !== X && s.reference[v] / 2 - (I < _ ? b : S) - g[v] / 2 < 0, J = W ? I < _ ? I - _ : I - K : 0;
    return {
      [m]: f[m] + J,
      data: {
        [m]: X,
        centerOffset: I - X - J,
        ...W && {
          alignmentOffset: J
        }
      },
      reset: W
    };
  }
}), Eo = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: s,
        rects: a,
        initialPlacement: i,
        platform: u,
        elements: d
      } = t, {
        mainAxis: c = !0,
        crossAxis: l = !0,
        fallbackPlacements: f,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...h
      } = pe(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const y = fe(r), w = xe(i), x = fe(i) === i, E = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), M = f || (x || !g ? [nt(i)] : wo(i)), T = v !== "none";
      !f && T && M.push(...Co(i, g, v, E));
      const $ = [i, ...M], j = await Ge(t, h), N = [];
      let b = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (c && N.push(j[y]), l) {
        const I = bo(r, a, E);
        N.push(j[I[0]], j[I[1]]);
      }
      if (b = [...b, {
        placement: r,
        overflows: N
      }], !N.every((I) => I <= 0)) {
        var S, _;
        const I = (((S = s.flip) == null ? void 0 : S.index) || 0) + 1, X = $[I];
        if (X)
          return {
            data: {
              index: I,
              overflows: b
            },
            reset: {
              placement: X
            }
          };
        let W = (_ = b.filter((J) => J.overflows[0] <= 0).sort((J, ne) => J.overflows[1] - ne.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!W)
          switch (m) {
            case "bestFit": {
              var K;
              const J = (K = b.filter((ne) => {
                if (T) {
                  const q = xe(ne.placement);
                  return q === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((ne) => [ne.placement, ne.overflows.filter((q) => q > 0).reduce((q, Ye) => q + Ye, 0)]).sort((ne, q) => ne[1] - q[1])[0]) == null ? void 0 : K[0];
              J && (W = J);
              break;
            }
            case "initialPlacement":
              W = i;
              break;
          }
        if (r !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
};
function Ht(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Xt(e) {
  return go.some((t) => e[t] >= 0);
}
const Bo = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = pe(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await Ge(t, {
            ...r,
            elementContext: "reference"
          }), a = Ht(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Xt(a)
            }
          };
        }
        case "escaped": {
          const s = await Ge(t, {
            ...r,
            altBoundary: !0
          }), a = Ht(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Xt(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ao(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), a = fe(n), i = Le(n), u = xe(n) === "y", d = ["left", "top"].includes(a) ? -1 : 1, c = s && u ? -1 : 1, l = pe(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: v
  } = typeof l == "number" ? {
    mainAxis: l,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...l
  };
  return i && typeof v == "number" && (m = i === "end" ? v * -1 : v), u ? {
    x: m * c,
    y: f * d
  } : {
    x: f * d,
    y: m * c
  };
}
const ko = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: s,
        placement: a,
        middlewareData: i
      } = t, u = await Ao(t, e);
      return a === ((n = i.offset) == null ? void 0 : n.placement) && (o = i.arrow) != null && o.alignmentOffset ? {} : {
        x: r + u.x,
        y: s + u.y,
        data: {
          ...u,
          placement: a
        }
      };
    }
  };
}, Mo = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: i = {
          fn: (h) => {
            let {
              x: y,
              y: w
            } = h;
            return {
              x: y,
              y: w
            };
          }
        },
        ...u
      } = pe(e, t), d = {
        x: n,
        y: o
      }, c = await Ge(t, u), l = xe(fe(r)), f = Bt(l);
      let m = d[f], v = d[l];
      if (s) {
        const h = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", w = m + c[h], x = m - c[y];
        m = wt(w, m, x);
      }
      if (a) {
        const h = l === "y" ? "top" : "left", y = l === "y" ? "bottom" : "right", w = v + c[h], x = v - c[y];
        v = wt(w, v, x);
      }
      const g = i.fn({
        ...t,
        [f]: m,
        [l]: v
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o
        }
      };
    }
  };
}, So = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: s,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: d = !0
      } = pe(e, t), c = {
        x: n,
        y: o
      }, l = xe(r), f = Bt(l);
      let m = c[f], v = c[l];
      const g = pe(i, t), h = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const x = f === "y" ? "height" : "width", E = s.reference[f] - s.floating[x] + h.mainAxis, M = s.reference[f] + s.reference[x] - h.mainAxis;
        m < E ? m = E : m > M && (m = M);
      }
      if (d) {
        var y, w;
        const x = f === "y" ? "width" : "height", E = ["top", "left"].includes(fe(r)), M = s.reference[l] - s.floating[x] + (E && ((y = a.offset) == null ? void 0 : y[l]) || 0) + (E ? 0 : h.crossAxis), T = s.reference[l] + s.reference[x] + (E ? 0 : ((w = a.offset) == null ? void 0 : w[l]) || 0) - (E ? h.crossAxis : 0);
        v < M ? v = M : v > T && (v = T);
      }
      return {
        [f]: m,
        [l]: v
      };
    }
  };
}, Do = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: s
      } = t, {
        apply: a = () => {
        },
        ...i
      } = pe(e, t), u = await Ge(t, i), d = fe(n), c = Le(n), l = xe(n) === "y", {
        width: f,
        height: m
      } = o.floating;
      let v, g;
      d === "top" || d === "bottom" ? (v = d, g = c === (await (r.isRTL == null ? void 0 : r.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (g = d, v = c === "end" ? "top" : "bottom");
      const h = m - u.top - u.bottom, y = f - u.left - u.right, w = ie(m - u[v], h), x = ie(f - u[g], y), E = !t.middlewareData.shift;
      let M = w, T = x;
      if (l ? T = c || E ? ie(x, y) : y : M = c || E ? ie(w, h) : h, E && !c) {
        const j = Z(u.left, 0), N = Z(u.right, 0), b = Z(u.top, 0), S = Z(u.bottom, 0);
        l ? T = f - 2 * (j !== 0 || N !== 0 ? j + N : Z(u.left, u.right)) : M = m - 2 * (b !== 0 || S !== 0 ? b + S : Z(u.top, u.bottom));
      }
      await a({
        ...t,
        availableWidth: T,
        availableHeight: M
      });
      const $ = await r.getDimensions(s.floating);
      return f !== $.width || m !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Pe(e) {
  return Mt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ee(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function me(e) {
  var t;
  return (t = (Mt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Mt(e) {
  return e instanceof Node || e instanceof ee(e).Node;
}
function re(e) {
  return e instanceof Element || e instanceof ee(e).Element;
}
function le(e) {
  return e instanceof HTMLElement || e instanceof ee(e).HTMLElement;
}
function qt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ee(e).ShadowRoot;
}
function Xe(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = se(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Ro(e) {
  return ["table", "td", "th"].includes(Pe(e));
}
function lt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function St(e) {
  const t = Dt(), n = re(e) ? se(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function To(e) {
  let t = Ce(e);
  for (; le(t) && !Ie(t); ) {
    if (St(t))
      return t;
    if (lt(t))
      return null;
    t = Ce(t);
  }
  return null;
}
function Dt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ie(e) {
  return ["html", "body", "#document"].includes(Pe(e));
}
function se(e) {
  return ee(e).getComputedStyle(e);
}
function ut(e) {
  return re(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ce(e) {
  if (Pe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    qt(e) && e.host || // Fallback.
    me(e)
  );
  return qt(t) ? t.host : t;
}
function wn(e) {
  const t = Ce(e);
  return Ie(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : le(t) && Xe(t) ? t : wn(t);
}
function Ue(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = wn(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = ee(r);
  return s ? t.concat(a, a.visualViewport || [], Xe(r) ? r : [], a.frameElement && n ? Ue(a.frameElement) : []) : t.concat(r, Ue(r, [], n));
}
function xn(e) {
  const t = se(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = le(e), s = r ? e.offsetWidth : n, a = r ? e.offsetHeight : o, i = tt(n) !== s || tt(o) !== a;
  return i && (n = s, o = a), {
    width: n,
    height: o,
    $: i
  };
}
function Rt(e) {
  return re(e) ? e : e.contextElement;
}
function Re(e) {
  const t = Rt(e);
  if (!le(t))
    return we(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = xn(t);
  let a = (s ? tt(n.width) : n.width) / o, i = (s ? tt(n.height) : n.height) / r;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const $o = /* @__PURE__ */ we(0);
function Cn(e) {
  const t = ee(e);
  return !Dt() || !t.visualViewport ? $o : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Io(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ee(e) ? !1 : t;
}
function _e(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = Rt(e);
  let a = we(1);
  t && (o ? re(o) && (a = Re(o)) : a = Re(e));
  const i = Io(s, n, o) ? Cn(s) : we(0);
  let u = (r.left + i.x) / a.x, d = (r.top + i.y) / a.y, c = r.width / a.x, l = r.height / a.y;
  if (s) {
    const f = ee(s), m = o && re(o) ? ee(o) : o;
    let v = f, g = v.frameElement;
    for (; g && o && m !== v; ) {
      const h = Re(g), y = g.getBoundingClientRect(), w = se(g), x = y.left + (g.clientLeft + parseFloat(w.paddingLeft)) * h.x, E = y.top + (g.clientTop + parseFloat(w.paddingTop)) * h.y;
      u *= h.x, d *= h.y, c *= h.x, l *= h.y, u += x, d += E, v = ee(g), g = v.frameElement;
    }
  }
  return ot({
    width: c,
    height: l,
    x: u,
    y: d
  });
}
function Fo(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", a = me(o), i = t ? lt(t.floating) : !1;
  if (o === a || i && s)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = we(1);
  const c = we(0), l = le(o);
  if ((l || !l && !s) && ((Pe(o) !== "body" || Xe(a)) && (u = ut(o)), le(o))) {
    const f = _e(o);
    d = Re(o), c.x = f.x + o.clientLeft, c.y = f.y + o.clientTop;
  }
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + c.x,
    y: n.y * d.y - u.scrollTop * d.y + c.y
  };
}
function zo(e) {
  return Array.from(e.getClientRects());
}
function _n(e) {
  return _e(me(e)).left + ut(e).scrollLeft;
}
function Lo(e) {
  const t = me(e), n = ut(e), o = e.ownerDocument.body, r = Z(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = Z(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let a = -n.scrollLeft + _n(e);
  const i = -n.scrollTop;
  return se(o).direction === "rtl" && (a += Z(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: s,
    x: a,
    y: i
  };
}
function No(e, t) {
  const n = ee(e), o = me(e), r = n.visualViewport;
  let s = o.clientWidth, a = o.clientHeight, i = 0, u = 0;
  if (r) {
    s = r.width, a = r.height;
    const d = Dt();
    (!d || d && t === "fixed") && (i = r.offsetLeft, u = r.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: i,
    y: u
  };
}
function Vo(e, t) {
  const n = _e(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = le(e) ? Re(e) : we(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, u = r * s.x, d = o * s.y;
  return {
    width: a,
    height: i,
    x: u,
    y: d
  };
}
function Yt(e, t, n) {
  let o;
  if (t === "viewport")
    o = No(e, n);
  else if (t === "document")
    o = Lo(me(e));
  else if (re(t))
    o = Vo(t, n);
  else {
    const r = Cn(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return ot(o);
}
function On(e, t) {
  const n = Ce(e);
  return n === t || !re(n) || Ie(n) ? !1 : se(n).position === "fixed" || On(n, t);
}
function Wo(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Ue(e, [], !1).filter((i) => re(i) && Pe(i) !== "body"), r = null;
  const s = se(e).position === "fixed";
  let a = s ? Ce(e) : e;
  for (; re(a) && !Ie(a); ) {
    const i = se(a), u = St(a);
    !u && i.position === "fixed" && (r = null), (s ? !u && !r : !u && i.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Xe(a) && !u && On(e, a)) ? o = o.filter((c) => c !== a) : r = i, a = Ce(a);
  }
  return t.set(e, o), o;
}
function jo(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const a = [...n === "clippingAncestors" ? lt(t) ? [] : Wo(t, this._c) : [].concat(n), o], i = a[0], u = a.reduce((d, c) => {
    const l = Yt(t, c, r);
    return d.top = Z(l.top, d.top), d.right = ie(l.right, d.right), d.bottom = ie(l.bottom, d.bottom), d.left = Z(l.left, d.left), d;
  }, Yt(t, i, r));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Go(e) {
  const {
    width: t,
    height: n
  } = xn(e);
  return {
    width: t,
    height: n
  };
}
function Uo(e, t, n) {
  const o = le(t), r = me(t), s = n === "fixed", a = _e(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = we(0);
  if (o || !o && !s)
    if ((Pe(t) !== "body" || Xe(r)) && (i = ut(t)), o) {
      const l = _e(t, !0, s, t);
      u.x = l.x + t.clientLeft, u.y = l.y + t.clientTop;
    } else r && (u.x = _n(r));
  const d = a.left + i.scrollLeft - u.x, c = a.top + i.scrollTop - u.y;
  return {
    x: d,
    y: c,
    width: a.width,
    height: a.height
  };
}
function pt(e) {
  return se(e).position === "static";
}
function Jt(e, t) {
  return !le(e) || se(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Pn(e, t) {
  const n = ee(e);
  if (lt(e))
    return n;
  if (!le(e)) {
    let r = Ce(e);
    for (; r && !Ie(r); ) {
      if (re(r) && !pt(r))
        return r;
      r = Ce(r);
    }
    return n;
  }
  let o = Jt(e, t);
  for (; o && Ro(o) && pt(o); )
    o = Jt(o, t);
  return o && Ie(o) && pt(o) && !St(o) ? n : o || To(e) || n;
}
const Ko = async function(e) {
  const t = this.getOffsetParent || Pn, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Uo(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Ho(e) {
  return se(e).direction === "rtl";
}
const Xo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Fo,
  getDocumentElement: me,
  getClippingRect: jo,
  getOffsetParent: Pn,
  getElementRects: Ko,
  getClientRects: zo,
  getDimensions: Go,
  getScale: Re,
  isElement: re,
  isRTL: Ho
};
function qo(e, t) {
  let n = null, o;
  const r = me(e);
  function s() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function a(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), s();
    const {
      left: d,
      top: c,
      width: l,
      height: f
    } = e.getBoundingClientRect();
    if (i || t(), !l || !f)
      return;
    const m = Je(c), v = Je(r.clientWidth - (d + l)), g = Je(r.clientHeight - (c + f)), h = Je(d), w = {
      rootMargin: -m + "px " + -v + "px " + -g + "px " + -h + "px",
      threshold: Z(0, ie(1, u)) || 1
    };
    let x = !0;
    function E(M) {
      const T = M[0].intersectionRatio;
      if (T !== u) {
        if (!x)
          return a();
        T ? a(!1, T) : o = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...w,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, w);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function Yo(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = Rt(e), c = r || s ? [...d ? Ue(d) : [], ...Ue(t)] : [];
  c.forEach((y) => {
    r && y.addEventListener("scroll", n, {
      passive: !0
    }), s && y.addEventListener("resize", n);
  });
  const l = d && i ? qo(d, n) : null;
  let f = -1, m = null;
  a && (m = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === d && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var x;
      (x = m) == null || x.observe(t);
    })), n();
  }), d && !u && m.observe(d), m.observe(t));
  let v, g = u ? _e(e) : null;
  u && h();
  function h() {
    const y = _e(e);
    g && (y.x !== g.x || y.y !== g.y || y.width !== g.width || y.height !== g.height) && n(), g = y, v = requestAnimationFrame(h);
  }
  return n(), () => {
    var y;
    c.forEach((w) => {
      r && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), l == null || l(), (y = m) == null || y.disconnect(), m = null, u && cancelAnimationFrame(v);
  };
}
const Jo = ko, Zo = Mo, Zt = Eo, Qo = Do, er = Bo, tr = Po, nr = So, or = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Xo,
    ...n
  }, s = {
    ...r.platform,
    _c: o
  };
  return Oo(e, t, {
    ...r,
    platform: s
  });
};
function rr(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Ct(e) {
  if (rr(e)) {
    const t = e.$el;
    return Mt(t) && Pe(t) === "#comment" ? null : t;
  }
  return e;
}
function Se(e) {
  return typeof e == "function" ? e() : p(e);
}
function sr(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Ct(Se(e.element));
      return n == null ? {} : tr({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function En(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qt(e, t) {
  const n = En(e);
  return Math.round(t * n) / n;
}
function ar(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, r = D(() => {
    var $;
    return ($ = Se(n.open)) != null ? $ : !0;
  }), s = D(() => Se(n.middleware)), a = D(() => {
    var $;
    return ($ = Se(n.placement)) != null ? $ : "bottom";
  }), i = D(() => {
    var $;
    return ($ = Se(n.strategy)) != null ? $ : "absolute";
  }), u = D(() => {
    var $;
    return ($ = Se(n.transform)) != null ? $ : !0;
  }), d = D(() => Ct(e.value)), c = D(() => Ct(t.value)), l = k(0), f = k(0), m = k(i.value), v = k(a.value), g = ln({}), h = k(!1), y = D(() => {
    const $ = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return $;
    const j = Qt(c.value, l.value), N = Qt(c.value, f.value);
    return u.value ? {
      ...$,
      transform: "translate(" + j + "px, " + N + "px)",
      ...En(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: j + "px",
      top: N + "px"
    };
  });
  let w;
  function x() {
    d.value == null || c.value == null || or(d.value, c.value, {
      middleware: s.value,
      placement: a.value,
      strategy: i.value
    }).then(($) => {
      l.value = $.x, f.value = $.y, m.value = $.strategy, v.value = $.placement, g.value = $.middlewareData, h.value = !0;
    });
  }
  function E() {
    typeof w == "function" && (w(), w = void 0);
  }
  function M() {
    if (E(), o === void 0) {
      x();
      return;
    }
    if (d.value != null && c.value != null) {
      w = o(d.value, c.value, x);
      return;
    }
  }
  function T() {
    r.value || (h.value = !1);
  }
  return H([s, a, i], x, {
    flush: "sync"
  }), H([d, c], M, {
    flush: "sync"
  }), H(r, T, {
    flush: "sync"
  }), un() && cn(E), {
    x: ke(l),
    y: ke(f),
    strategy: ke(m),
    placement: ke(v),
    middlewareData: ke(g),
    isPositioned: ke(h),
    floatingStyles: y,
    update: x
  };
}
function oe(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(r) => {
    const s = vn(o, r);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (r) => (gn(o, r), r)];
}
function Bn(e, t, n) {
  const o = n.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
function ir(e, t) {
  var n;
  const o = ln();
  return te(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), co(o);
}
function Tt(e) {
  return un() ? (cn(e), !0) : !1;
}
function lr(e) {
  let t = !1, n;
  const o = mn(!0);
  return (...r) => (t || (n = o.run(() => e(...r)), t = !0), n);
}
function ur(e) {
  let t = 0, n, o;
  const r = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...s) => (t += 1, n || (o = mn(!0), n = o.run(() => e(...s))), Tt(r), n);
}
function Te(e) {
  return typeof e == "function" ? e() : p(e);
}
const ve = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const cr = (e) => typeof e < "u", dr = Object.prototype.toString, pr = (e) => dr.call(e) === "[object Object]", fr = () => {
}, en = /* @__PURE__ */ mr();
function mr() {
  var e, t;
  return ve && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function vr(e) {
  return Oe();
}
function gr(e, t = 1e4) {
  return po((n, o) => {
    let r = Te(e), s;
    const a = () => setTimeout(() => {
      r = Te(e), o();
    }, Te(t));
    return Tt(() => {
      clearTimeout(s);
    }), {
      get() {
        return n(), r;
      },
      set(i) {
        r = i, o(), clearTimeout(s), s = a();
      }
    };
  });
}
function hr(e, t) {
  vr() && fo(e, t);
}
function Ee(e) {
  var t;
  const n = Te(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const An = ve ? window : void 0;
function kn(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = An) : [t, n, o, r] = e, !t)
    return fr;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, l, f, m) => (c.addEventListener(l, f, m), () => c.removeEventListener(l, f, m)), u = H(
    () => [Ee(t), Te(r)],
    ([c, l]) => {
      if (a(), !c)
        return;
      const f = pr(l) ? { ...l } : l;
      s.push(
        ...n.flatMap((m) => o.map((v) => i(c, m, v, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), a();
  };
  return Tt(d), d;
}
function yr(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function br(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = An,
    eventName: s = "keydown",
    passive: a = !1,
    dedupe: i = !1
  } = o, u = yr(t);
  return kn(r, s, (d) => {
    d.repeat && Te(i) || u(d) && n(d);
  }, a);
}
function wr() {
  const e = k(!1), t = Oe();
  return t && st(() => {
    e.value = !0;
  }, t), e;
}
function xr(e) {
  return JSON.parse(JSON.stringify(e));
}
function Be(e, t, n, o = {}) {
  var r, s, a;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: l,
    shouldEmit: f
  } = o, m = Oe(), v = n || (m == null ? void 0 : m.emit) || ((r = m == null ? void 0 : m.$emit) == null ? void 0 : r.bind(m)) || ((a = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : a.bind(m == null ? void 0 : m.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const h = (x) => i ? typeof i == "function" ? i(x) : xr(x) : x, y = () => cr(e[t]) ? h(e[t]) : l, w = (x) => {
    f ? f(x) && v(g, x) : v(g, x);
  };
  if (u) {
    const x = y(), E = k(x);
    let M = !1;
    return H(
      () => e[t],
      (T) => {
        M || (M = !0, E.value = h(T), Q(() => M = !1));
      }
    ), H(
      E,
      (T) => {
        !M && (T !== e[t] || c) && w(T);
      },
      { deep: c }
    ), E;
  } else
    return D({
      get() {
        return y();
      },
      set(x) {
        w(x);
      }
    });
}
function $t(e) {
  return e ? e.flatMap((t) => t.type === ao ? $t(t.children) : [t]) : [];
}
const Cr = ["INPUT", "TEXTAREA"];
function _r(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && Cr.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: r = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: a = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = o, [l, f, m, v, g, h] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], y = m || v, w = l || f;
  if (!g && !h && (!y && !w || r === "vertical" && w || r === "horizontal" && y))
    return null;
  const x = n ? Array.from(n.querySelectorAll(s)) : a;
  if (!x.length)
    return null;
  d && e.preventDefault();
  let E = null;
  return w || y ? E = Mn(x, t, {
    goForward: y ? v : u === "ltr" ? l : f,
    loop: i
  }) : g ? E = x.at(0) || null : h && (E = x.at(-1) || null), c && (E == null || E.focus()), E;
}
function Mn(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const r = e.indexOf(t), s = n.goForward ? r + 1 : r - 1;
  if (!n.loop && (s < 0 || s >= e.length))
    return null;
  const a = (s + e.length) % e.length, i = e[a];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Mn(
    e,
    i,
    n,
    o
  ) : i : null;
}
function ft(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function _t(e, t, n = ".", o) {
  if (!ft(t))
    return _t(e, {}, n);
  const r = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const a = e[s];
    a != null && (Array.isArray(a) && Array.isArray(r[s]) ? r[s] = [...a, ...r[s]] : ft(a) && ft(r[s]) ? r[s] = _t(
      a,
      r[s],
      (n ? `${n}.` : "") + s.toString()
    ) : r[s] = a);
  }
  return r;
}
function Or(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => _t(n, o, ""), {})
  );
}
const Pr = Or(), [It, qa] = oe("ConfigProvider");
let Er = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Br = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Er[Math.random() * 64 | 0];
  return t;
};
const Ar = ur(() => {
  const e = k(/* @__PURE__ */ new Map()), t = k(), n = D(() => {
    for (const a of e.value.values())
      if (a)
        return !0;
    return !1;
  }), o = It({
    scrollBody: k(!0)
  });
  let r = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", en && (r == null || r()), t.value = void 0;
  };
  return H(n, (a, i) => {
    var u;
    if (!ve)
      return;
    if (!a) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, l = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? Pr({
      padding: o.scrollBody.value.padding === !0 ? d : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? d : o.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = `${l.padding}px`, document.body.style.marginRight = `${l.margin}px`, document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), en && (r = kn(
      document,
      "touchmove",
      (f) => {
        var m;
        f.target === document.documentElement && (f.touches.length > 1 || (m = f.preventDefault) == null || m.call(f));
      },
      { passive: !1 }
    )), Q(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function kr(e) {
  const t = Br(6), n = Ar();
  n.value.set(t, e ?? !1);
  const o = D({
    get: () => n.value.get(t) ?? !1,
    set: (r) => n.value.set(t, r)
  });
  return hr(() => {
    n.value.delete(t);
  }), o;
}
const Mr = "data-radix-vue-collection-item";
function Sr(e, t = Mr) {
  const n = Symbol();
  return { createCollection: (o) => {
    const r = k([]);
    function s() {
      const a = Ee(o);
      return a ? r.value = Array.from(
        a.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return mo(() => {
      r.value = [];
    }), st(s), vo(s), H(() => o == null ? void 0 : o.value, s, { immediate: !0 }), gn(n, r), r;
  }, injectCollection: () => vn(n, k([])) };
}
function Ft(e) {
  const t = It({
    dir: k("ltr")
  });
  return D(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function ct(e) {
  const t = Oe(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((r) => {
    o[io(dn(r))] = (...s) => e(r, ...s);
  }), o;
}
let mt = 0;
function Dr() {
  te((e) => {
    if (!ve)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? tn()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? tn()
    ), mt++, e(() => {
      mt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), mt--;
    });
  });
}
function tn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function Ne(e) {
  const t = Oe(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, s) => {
    const a = (t == null ? void 0 : t.type.props[s]).default;
    return a !== void 0 && (r[s] = a), r;
  }, {}), o = to(e);
  return D(() => {
    const r = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((a) => {
      r[dn(a)] = s[a];
    }), Object.keys({ ...n, ...r }).reduce((a, i) => (o.value[i] !== void 0 && (a[i] = o.value[i]), a), {});
  });
}
function Y(e, t) {
  const n = Ne(e), o = t ? ct(t) : {};
  return D(() => ({
    ...n.value,
    ...o
  }));
}
function L() {
  const e = Oe(), t = k(), n = D(() => {
    var a, i;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Ee(t);
  }), o = Object.assign({}, e.exposed), r = {};
  for (const a in e.props)
    Object.defineProperty(r, a, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[a]
    });
  if (Object.keys(o).length > 0)
    for (const a in o)
      Object.defineProperty(r, a, {
        enumerable: !0,
        configurable: !0,
        get: () => o[a]
      });
  Object.defineProperty(r, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = r;
  function s(a) {
    t.value = a, !(a instanceof Element || !a) && (Object.defineProperty(r, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => a.$el
    }), e.exposed = r);
  }
  return { forwardRef: s, currentRef: t, currentElement: n };
}
var Rr = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Me = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakMap(), Qe = {}, vt = 0, Sn = function(e) {
  return e && (e.host || Sn(e.parentNode));
}, Tr = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Sn(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, $r = function(e, t, n, o) {
  var r = Tr(t, Array.isArray(e) ? e : [e]);
  Qe[n] || (Qe[n] = /* @__PURE__ */ new WeakMap());
  var s = Qe[n], a = [], i = /* @__PURE__ */ new Set(), u = new Set(r), d = function(l) {
    !l || i.has(l) || (i.add(l), d(l.parentNode));
  };
  r.forEach(d);
  var c = function(l) {
    !l || u.has(l) || Array.prototype.forEach.call(l.children, function(f) {
      if (i.has(f))
        c(f);
      else
        try {
          var m = f.getAttribute(o), v = m !== null && m !== "false", g = (Me.get(f) || 0) + 1, h = (s.get(f) || 0) + 1;
          Me.set(f, g), s.set(f, h), a.push(f), g === 1 && v && Ze.set(f, !0), h === 1 && f.setAttribute(n, "true"), v || f.setAttribute(o, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", f, y);
        }
    });
  };
  return c(t), i.clear(), vt++, function() {
    a.forEach(function(l) {
      var f = Me.get(l) - 1, m = s.get(l) - 1;
      Me.set(l, f), s.set(l, m), f || (Ze.has(l) || l.removeAttribute(o), Ze.delete(l)), m || l.removeAttribute(n);
    }), vt--, vt || (Me = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakMap(), Qe = {});
  };
}, Ir = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = Rr(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), $r(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function Fr(e) {
  let t;
  H(() => Ee(e), (n) => {
    n ? t = Ir(n) : t && t();
  }), at(() => {
    t && t();
  });
}
let zr = 0;
function dt(e, t = "radix") {
  const { useId: n } = It({ useId: void 0 });
  return n && typeof n == "function" ? `${t}-${n()}` : `${t}-${++zr}`;
}
function Lr(e) {
  const t = k(), n = D(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.width) ?? 0;
  }), o = D(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.height) ?? 0;
  });
  return st(() => {
    const r = Ee(e);
    if (r) {
      t.value = { width: r.offsetWidth, height: r.offsetHeight };
      const s = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const i = a[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          u = l.inlineSize, d = l.blockSize;
        } else
          u = r.offsetWidth, d = r.offsetHeight;
        t.value = { width: u, height: d };
      });
      return s.observe(r, { box: "border-box" }), () => s.unobserve(r);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: o
  };
}
function Nr(e, t) {
  const n = k(e);
  function o(r) {
    return t[n.value][r] ?? n.value;
  }
  return {
    state: n,
    dispatch: (r) => {
      n.value = o(r);
    }
  };
}
function Vr(e) {
  const t = gr("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      var r, s;
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const a = (e == null ? void 0 : e.value) ?? o, i = document.activeElement, u = ((s = (r = a.find((f) => f === i)) == null ? void 0 : r.textContent) == null ? void 0 : s.trim()) ?? "", d = a.map((f) => {
        var m;
        return ((m = f.textContent) == null ? void 0 : m.trim()) ?? "";
      }), c = jr(d, t.value, u), l = a.find(
        (f) => {
          var m;
          return ((m = f.textContent) == null ? void 0 : m.trim()) === c;
        }
      );
      return l && l.focus(), l;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Wr(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function jr(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let s = Wr(e, Math.max(r, 0));
  o.length === 1 && (s = s.filter((i) => i !== n));
  const a = s.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return a !== n ? a : void 0;
}
const zt = O({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, r;
      if (!n.default)
        return null;
      const s = $t(n.default()), a = s.findIndex((c) => c.type !== no);
      if (a === -1)
        return s;
      const i = s[a];
      (o = i.props) == null || delete o.ref;
      const u = i.props ? F(t, i.props) : t;
      t.class && (r = i.props) != null && r.class && delete i.props.class;
      const d = oo(i, u);
      for (const c in u)
        c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
      return s.length === 1 ? d : (s[a] = d, s);
    };
  }
}), ae = O({
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
    const o = e.asChild ? "template" : e.as;
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => De(o, t) : o !== "template" ? () => De(e.as, t, { default: n.default }) : () => De(zt, t, { default: n.default });
  }
});
function Dn() {
  const e = k(), t = D(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : Ee(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function Gr(e, t) {
  const n = k({}), o = k("none"), r = e.value ? "mounted" : "unmounted", { state: s, dispatch: a } = Nr(r, {
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
  }), i = (f) => {
    var m;
    if (ve) {
      const v = new CustomEvent(f, { bubbles: !1, cancelable: !1 });
      (m = t.value) == null || m.dispatchEvent(v);
    }
  };
  H(
    e,
    async (f, m) => {
      var v;
      const g = m !== f;
      if (await Q(), g) {
        const h = o.value, y = et(t.value);
        f ? (a("MOUNT"), i("enter"), y === "none" && i("after-enter")) : y === "none" || ((v = n.value) == null ? void 0 : v.display) === "none" ? (a("UNMOUNT"), i("leave"), i("after-leave")) : m && h !== y ? (a("ANIMATION_OUT"), i("leave")) : (a("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const u = (f) => {
    const m = et(t.value), v = m.includes(
      f.animationName
    ), g = s.value === "mounted" ? "enter" : "leave";
    f.target === t.value && v && (i(`after-${g}`), a("ANIMATION_END")), f.target === t.value && m === "none" && a("ANIMATION_END");
  }, d = (f) => {
    f.target === t.value && (o.value = et(t.value));
  }, c = H(
    t,
    (f, m) => {
      f ? (n.value = getComputedStyle(f), f.addEventListener("animationstart", d), f.addEventListener("animationcancel", u), f.addEventListener("animationend", u)) : (a("ANIMATION_END"), m == null || m.removeEventListener("animationstart", d), m == null || m.removeEventListener("animationcancel", u), m == null || m.removeEventListener("animationend", u));
    },
    { immediate: !0 }
  ), l = H(s, () => {
    const f = et(t.value);
    o.value = s.value === "mounted" ? f : "none";
  });
  return at(() => {
    c(), l();
  }), {
    isPresent: D(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function et(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Lt = O({
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
    var o;
    const { present: r, forceMount: s } = Fe(e), a = k(), { isPresent: i } = Gr(r, a);
    n({ present: i });
    let u = t.default({ present: i });
    u = $t(u || []);
    const d = Oe();
    if (u && (u == null ? void 0 : u.length) > 1) {
      const c = (o = d == null ? void 0 : d.parent) != null && o.type.name ? `<${d.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((l) => `  - ${l}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => s.value || r.value || i.value ? De(t.default({ present: i })[0], {
      ref: (c) => {
        const l = Ee(c);
        return typeof (l == null ? void 0 : l.hasAttribute) > "u" || (l != null && l.hasAttribute("data-radix-popper-content-wrapper") ? a.value = l.firstElementChild : a.value = l), l;
      }
    }) : null;
  }
}), Ur = /* @__PURE__ */ O({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = wr();
    return (n, o) => p(t) || n.forceMount ? (P(), A(lo, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      B(n.$slots, "default")
    ], 8, ["to", "disabled"])) : uo("", !0);
  }
}), Kr = "dismissableLayer.pointerDownOutside", Hr = "dismissableLayer.focusOutside";
function Rn(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), r = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || r.indexOf(o) < r.indexOf(n));
}
function Xr(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = k(!1), s = k(() => {
  });
  return te((a) => {
    if (!ve)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (Rn(t.value, c)) {
          r.value = !1;
          return;
        }
        if (d.target && !r.value) {
          let l = function() {
            Bn(
              Kr,
              e,
              f
            );
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (o.removeEventListener("click", s.value), s.value = l, o.addEventListener("click", s.value, {
            once: !0
          })) : l();
        } else
          o.removeEventListener("click", s.value);
        r.value = !1;
      }
    }, u = window.setTimeout(() => {
      o.addEventListener("pointerdown", i);
    }, 0);
    a(() => {
      window.clearTimeout(u), o.removeEventListener("pointerdown", i), o.removeEventListener("click", s.value);
    });
  }), {
    onPointerDownCapture: () => r.value = !0
  };
}
function qr(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = k(!1);
  return te((s) => {
    if (!ve)
      return;
    const a = async (i) => {
      t != null && t.value && (await Q(), !(!t.value || Rn(t.value, i.target)) && i.target && !r.value && Bn(
        Hr,
        e,
        { originalEvent: i }
      ));
    };
    o.addEventListener("focusin", a), s(() => o.removeEventListener("focusin", a));
  }), {
    onFocusCapture: () => r.value = !0,
    onBlurCapture: () => r.value = !1
  };
}
const ce = pn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Yr = /* @__PURE__ */ O({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: s } = L(), a = D(
      () => {
        var v;
        return ((v = s.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = D(() => ce.layersRoot), u = D(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), d = D(() => ce.layersWithOutsidePointerEventsDisabled.size > 0), c = D(() => {
      const v = Array.from(i.value), [g] = [...ce.layersWithOutsidePointerEventsDisabled].slice(-1), h = v.indexOf(g);
      return u.value >= h;
    }), l = Xr(async (v) => {
      const g = [...ce.branches].some(
        (h) => h.contains(v.target)
      );
      !c.value || g || (o("pointerDownOutside", v), o("interactOutside", v), await Q(), v.defaultPrevented || o("dismiss"));
    }, s), f = qr((v) => {
      [...ce.branches].some(
        (g) => g.contains(v.target)
      ) || (o("focusOutside", v), o("interactOutside", v), v.defaultPrevented || o("dismiss"));
    }, s);
    br("Escape", (v) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", v), v.defaultPrevented || o("dismiss"));
    });
    let m;
    return te((v) => {
      s.value && (n.disableOutsidePointerEvents && (ce.layersWithOutsidePointerEventsDisabled.size === 0 && (m = a.value.body.style.pointerEvents, a.value.body.style.pointerEvents = "none"), ce.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), v(() => {
        n.disableOutsidePointerEvents && ce.layersWithOutsidePointerEventsDisabled.size === 1 && (a.value.body.style.pointerEvents = m);
      }));
    }), te((v) => {
      v(() => {
        s.value && (i.value.delete(s.value), ce.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (v, g) => (P(), A(p(ae), {
      ref: p(r),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: yn({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: p(f).onFocusCapture,
      onBlurCapture: p(f).onBlurCapture,
      onPointerdownCapture: p(l).onPointerDownCapture
    }, {
      default: C(() => [
        B(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), gt = "focusScope.autoFocusOnMount", ht = "focusScope.autoFocusOnUnmount", nn = { bubbles: !1, cancelable: !0 };
function Jr(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (be(o, { select: t }), document.activeElement !== n)
      return !0;
}
function Zr(e) {
  const t = Tn(e), n = on(t, e), o = on(t.reverse(), e);
  return [n, o];
}
function Tn(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function on(e, t) {
  for (const n of e)
    if (!Qr(n, { upTo: t }))
      return n;
}
function Qr(e, { upTo: t }) {
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
function es(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function be(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && es(e) && t && e.select();
  }
}
const ts = lr(() => k([]));
function ns() {
  const e = ts();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = rn(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = rn(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function rn(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function os(e) {
  return e.filter((t) => t.tagName !== "A");
}
const rs = /* @__PURE__ */ O({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: r, currentElement: s } = L(), a = k(null), i = ns(), u = pn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    te((c) => {
      if (!ve)
        return;
      const l = s.value;
      if (!n.trapped)
        return;
      function f(h) {
        if (u.paused || !l)
          return;
        const y = h.target;
        l.contains(y) ? a.value = y : be(a.value, { select: !0 });
      }
      function m(h) {
        if (u.paused || !l)
          return;
        const y = h.relatedTarget;
        y !== null && (l.contains(y) || be(a.value, { select: !0 }));
      }
      function v(h) {
        l.contains(a.value) || be(l);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const g = new MutationObserver(v);
      l && g.observe(l, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), te(async (c) => {
      const l = s.value;
      if (await Q(), !l)
        return;
      i.add(u);
      const f = document.activeElement;
      if (!l.contains(f)) {
        const m = new CustomEvent(gt, nn);
        l.addEventListener(gt, (v) => o("mountAutoFocus", v)), l.dispatchEvent(m), m.defaultPrevented || (Jr(os(Tn(l)), {
          select: !0
        }), document.activeElement === f && be(l));
      }
      c(() => {
        l.removeEventListener(gt, (g) => o("mountAutoFocus", g));
        const m = new CustomEvent(ht, nn), v = (g) => {
          o("unmountAutoFocus", g);
        };
        l.addEventListener(ht, v), l.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || be(f ?? document.body, { select: !0 }), l.removeEventListener(ht, v), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const l = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = document.activeElement;
      if (l && f) {
        const m = c.currentTarget, [v, g] = Zr(m);
        v && g ? !c.shiftKey && f === g ? (c.preventDefault(), n.loop && be(v, { select: !0 })) : c.shiftKey && f === v && (c.preventDefault(), n.loop && be(g, { select: !0 })) : f === m && c.preventDefault();
      }
    }
    return (c, l) => (P(), A(p(ae), {
      ref_key: "currentRef",
      ref: r,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: C(() => [
        B(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), ss = "menu.itemSelect", Ot = ["Enter", " "], as = ["ArrowDown", "PageUp", "Home"], $n = ["ArrowUp", "PageDown", "End"], is = [...as, ...$n], ls = {
  ltr: [...Ot, "ArrowRight"],
  rtl: [...Ot, "ArrowLeft"]
}, us = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function In(e) {
  return e ? "open" : "closed";
}
function rt(e) {
  return e === "indeterminate";
}
function Nt(e) {
  return rt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function cs(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function ds(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s].x, u = t[s].y, d = t[a].x, c = t[a].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (r = !r);
  }
  return r;
}
function ps(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return ds(n, t);
}
function Ke(e) {
  return e.pointerType === "mouse";
}
const [Fn, fs] = oe("PopperRoot"), zn = /* @__PURE__ */ O({
  __name: "PopperRoot",
  setup(e) {
    const t = k();
    return fs({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => B(n.$slots, "default");
  }
}), ms = /* @__PURE__ */ O({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = L(), r = Fn();
    return H(o, () => {
      r.onAnchorChange(t.element ?? o.value);
    }), (s, a) => (P(), A(p(ae), {
      ref: p(n),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: C(() => [
        B(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function vs(e) {
  return e !== null;
}
function gs(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, r;
      const { placement: s, rects: a, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, c = u ? 0 : e.arrowHeight, [l, f] = Pt(s), m = { start: "0%", center: "50%", end: "100%" }[f], v = (((o = i.arrow) == null ? void 0 : o.x) ?? 0) + d / 2, g = (((r = i.arrow) == null ? void 0 : r.y) ?? 0) + c / 2;
      let h = "", y = "";
      return l === "bottom" ? (h = u ? m : `${v}px`, y = `${-c}px`) : l === "top" ? (h = u ? m : `${v}px`, y = `${a.floating.height + c}px`) : l === "right" ? (h = `${-c}px`, y = u ? m : `${g}px`) : l === "left" && (h = `${a.floating.width + c}px`, y = u ? m : `${g}px`), { data: { x: h, y } };
    }
  };
}
function Pt(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Ln = {
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
}, [Ya, hs] = oe("PopperContent"), ys = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ hn({
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
    ...Ln
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Fn(), { forwardRef: s, currentElement: a } = L(), i = k(), u = k(), { width: d, height: c } = Lr(u), l = D(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = D(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), m = D(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = D(() => ({
      padding: f.value,
      boundary: m.value.filter(vs),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), g = ir(() => [
      Jo({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Zt({
        ...v.value
      }),
      n.avoidCollisions && Zo({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? nr() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Zt({
        ...v.value
      }),
      Qo({
        ...v.value,
        apply: ({ elements: b, rects: S, availableWidth: _, availableHeight: K }) => {
          const { width: I, height: X } = S.reference, W = b.floating.style;
          W.setProperty(
            "--radix-popper-available-width",
            `${_}px`
          ), W.setProperty(
            "--radix-popper-available-height",
            `${K}px`
          ), W.setProperty(
            "--radix-popper-anchor-width",
            `${I}px`
          ), W.setProperty(
            "--radix-popper-anchor-height",
            `${X}px`
          );
        }
      }),
      u.value && sr({ element: u.value, padding: n.arrowPadding }),
      gs({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && er({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: h, placement: y, isPositioned: w, middlewareData: x } = ar(
      r.anchor,
      i,
      {
        strategy: "fixed",
        placement: l,
        whileElementsMounted: (...b) => Yo(...b, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), E = D(
      () => Pt(y.value)[0]
    ), M = D(
      () => Pt(y.value)[1]
    );
    te(() => {
      w.value && o("placed");
    });
    const T = D(
      () => {
        var b;
        return ((b = x.value.arrow) == null ? void 0 : b.centerOffset) !== 0;
      }
    ), $ = k("");
    te(() => {
      a.value && ($.value = window.getComputedStyle(a.value).zIndex);
    });
    const j = D(() => {
      var b;
      return ((b = x.value.arrow) == null ? void 0 : b.x) ?? 0;
    }), N = D(() => {
      var b;
      return ((b = x.value.arrow) == null ? void 0 : b.y) ?? 0;
    });
    return hs({
      placedSide: E,
      onArrowChange: (b) => u.value = b,
      arrowX: j,
      arrowY: N,
      shouldHideArrow: T
    }), (b, S) => {
      var _, K, I;
      return P(), ze("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: yn({
          ...p(h),
          transform: p(w) ? p(h).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: $.value,
          "--radix-popper-transform-origin": [
            (_ = p(x).transformOrigin) == null ? void 0 : _.x,
            (K = p(x).transformOrigin) == null ? void 0 : K.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((I = p(x).hide) == null ? void 0 : I.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        G(p(ae), F({ ref: p(s) }, b.$attrs, {
          "as-child": n.asChild,
          as: b.as,
          "data-side": E.value,
          "data-align": M.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: p(w) ? void 0 : "none"
          }
        }), {
          default: C(() => [
            B(b.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), bs = "data-radix-vue-collection-item", [Vt, ws] = oe("CollectionProvider");
function xs(e = bs) {
  const t = k(/* @__PURE__ */ new Map()), n = k(), o = ws({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: r } = Os(o), s = D(() => Array.from(o.itemMap.value.values())), a = D(() => o.itemMap.value.size);
  return { getItems: r, reactiveItems: s, itemMapSize: a };
}
const Cs = O({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = Vt(), { primitiveElement: o, currentElement: r } = Dn();
    return H(r, () => {
      n.collectionRef.value = r.value;
    }), () => De(zt, { ref: o }, t);
  }
}), _s = O({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = Vt(), { primitiveElement: r, currentElement: s } = Dn();
    return te((a) => {
      if (s.value) {
        const i = ro(s.value);
        o.itemMap.value.set(i, { ref: s.value, value: e.value }), a(() => o.itemMap.value.delete(i));
      }
    }), () => De(zt, { ...n, [o.attrName]: "", ref: r }, t);
  }
});
function Os(e) {
  const t = e ?? Vt();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const o = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (r, s) => o.indexOf(r.ref) - o.indexOf(s.ref)
    );
  } };
}
const Nn = /* @__PURE__ */ O({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (P(), A(p(ms), V(U(t)), {
      default: C(() => [
        B(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ae, Vn] = oe(["MenuRoot", "MenuSub"], "MenuContext"), [qe, Ps] = oe("MenuRoot"), Es = /* @__PURE__ */ O({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: r, dir: s } = Fe(n), a = Ft(s), i = Be(n, "open", o), u = k(), d = k(!1);
    return te((c) => {
      if (!ve)
        return;
      const l = () => {
        d.value = !0, document.addEventListener("pointerdown", f, {
          capture: !0,
          once: !0
        }), document.addEventListener("pointermove", f, {
          capture: !0,
          once: !0
        });
      }, f = () => d.value = !1;
      document.addEventListener("keydown", l, { capture: !0 }), c(() => {
        document.removeEventListener("keydown", l, { capture: !0 }), document.removeEventListener("pointerdown", f, {
          capture: !0
        }), document.removeEventListener("pointermove", f, {
          capture: !0
        });
      });
    }), Vn({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), Ps({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: a,
      modal: r
    }), (c, l) => (P(), A(p(zn), null, {
      default: C(() => [
        B(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Bs = "rovingFocusGroup.onEntryFocus", As = { bubbles: !1, cancelable: !0 };
function ks(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n))
      return;
}
const [Ja, Ms] = oe("RovingFocusGroup"), Ss = /* @__PURE__ */ O({
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
    const o = e, r = n, { loop: s, orientation: a, dir: i } = Fe(o), u = Ft(i), d = Be(o, "currentTabStopId", r, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), c = k(!1), l = k(!1), f = k(0), { getItems: m } = xs();
    function v(g) {
      const h = !l.value;
      if (g.currentTarget && g.target === g.currentTarget && h && !c.value) {
        const y = new CustomEvent(Bs, As);
        if (g.currentTarget.dispatchEvent(y), r("entryFocus", y), !y.defaultPrevented) {
          const w = m().map((T) => T.ref).filter((T) => T.dataset.disabled !== ""), x = w.find((T) => T.getAttribute("data-active") === "true"), E = w.find(
            (T) => T.id === d.value
          ), M = [x, E, ...w].filter(
            Boolean
          );
          ks(M, o.preventScrollOnEntryFocus);
        }
      }
      l.value = !1;
    }
    return t({
      getItems: m
    }), Ms({
      loop: s,
      dir: u,
      orientation: a,
      currentTabStopId: d,
      onItemFocus: (g) => {
        d.value = g;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        f.value++;
      },
      onFocusableItemRemove: () => {
        f.value--;
      }
    }), (g, h) => (P(), A(p(Cs), null, {
      default: C(() => [
        G(p(ae), {
          tabindex: c.value || f.value === 0 ? -1 : 0,
          "data-orientation": p(a),
          as: g.as,
          "as-child": g.asChild,
          dir: p(u),
          style: { outline: "none" },
          onMousedown: h[0] || (h[0] = (y) => l.value = !0),
          onFocus: v,
          onBlur: h[1] || (h[1] = (y) => c.value = !1)
        }, {
          default: C(() => [
            B(g.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), [Wt, Ds] = oe("MenuContent"), jt = /* @__PURE__ */ O({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ hn({
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
    ...Ln
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Ae(), s = qe(), { trapFocus: a, disableOutsidePointerEvents: i, loop: u } = Fe(n);
    Dr(), kr(i.value);
    const d = k(""), c = k(0), l = k(0), f = k(null), m = k("right"), v = k(0), g = k(null), { createCollection: h } = Sr(), { forwardRef: y, currentElement: w } = L(), x = h(w);
    H(w, (b) => {
      r.onContentChange(b);
    });
    const { handleTypeaheadSearch: E } = Vr(x);
    at(() => {
      window.clearTimeout(c.value);
    });
    function M(b) {
      var S, _;
      return m.value === ((S = f.value) == null ? void 0 : S.side) && ps(b, (_ = f.value) == null ? void 0 : _.area);
    }
    async function T(b) {
      var S;
      o("openAutoFocus", b), !b.defaultPrevented && (b.preventDefault(), (S = w.value) == null || S.focus({
        preventScroll: !0
      }));
    }
    function $(b) {
      if (b.defaultPrevented)
        return;
      const S = b.target.closest("[data-radix-menu-content]") === b.currentTarget, _ = b.ctrlKey || b.altKey || b.metaKey, K = b.key.length === 1, I = _r(
        b,
        document.activeElement,
        w.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (I)
        return I == null ? void 0 : I.focus();
      if (b.code === "Space" || (S && (b.key === "Tab" && b.preventDefault(), !_ && K && E(b.key)), b.target !== w.value) || !is.includes(b.key))
        return;
      b.preventDefault();
      const X = x.value;
      $n.includes(b.key) && X.reverse(), cs(X);
    }
    function j(b) {
      var S, _;
      (_ = (S = b == null ? void 0 : b.currentTarget) == null ? void 0 : S.contains) != null && _.call(S, b.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function N(b) {
      var S;
      if (!Ke(b))
        return;
      const _ = b.target, K = v.value !== b.clientX;
      if ((S = b == null ? void 0 : b.currentTarget) != null && S.contains(_) && K) {
        const I = b.clientX > v.value ? "right" : "left";
        m.value = I, v.value = b.clientX;
      }
    }
    return Ds({
      onItemEnter: (b) => !!M(b),
      onItemLeave: (b) => {
        var S;
        M(b) || ((S = w.value) == null || S.focus(), g.value = null);
      },
      onTriggerLeave: (b) => !!M(b),
      searchRef: d,
      pointerGraceTimerRef: l,
      onPointerGraceIntentChange: (b) => {
        f.value = b;
      }
    }), (b, S) => (P(), A(p(rs), {
      "as-child": "",
      trapped: p(a),
      onMountAutoFocus: T,
      onUnmountAutoFocus: S[7] || (S[7] = (_) => o("closeAutoFocus", _))
    }, {
      default: C(() => [
        G(p(Yr), {
          "as-child": "",
          "disable-outside-pointer-events": p(i),
          onEscapeKeyDown: S[2] || (S[2] = (_) => o("escapeKeyDown", _)),
          onPointerDownOutside: S[3] || (S[3] = (_) => o("pointerDownOutside", _)),
          onFocusOutside: S[4] || (S[4] = (_) => o("focusOutside", _)),
          onInteractOutside: S[5] || (S[5] = (_) => o("interactOutside", _)),
          onDismiss: S[6] || (S[6] = (_) => o("dismiss"))
        }, {
          default: C(() => [
            G(p(Ss), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": S[0] || (S[0] = (_) => g.value = _),
              "as-child": "",
              orientation: "vertical",
              dir: p(s).dir.value,
              loop: p(u),
              onEntryFocus: S[1] || (S[1] = (_) => {
                o("entryFocus", _), p(s).isUsingKeyboardRef.value || _.preventDefault();
              })
            }, {
              default: C(() => [
                G(p(ys), {
                  ref: p(y),
                  role: "menu",
                  as: b.as,
                  "as-child": b.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": p(In)(p(r).open.value),
                  dir: p(s).dir.value,
                  side: b.side,
                  "side-offset": b.sideOffset,
                  align: b.align,
                  "align-offset": b.alignOffset,
                  "avoid-collisions": b.avoidCollisions,
                  "collision-boundary": b.collisionBoundary,
                  "collision-padding": b.collisionPadding,
                  "arrow-padding": b.arrowPadding,
                  "prioritize-position": b.prioritizePosition,
                  sticky: b.sticky,
                  "hide-when-detached": b.hideWhenDetached,
                  onKeydown: $,
                  onBlur: j,
                  onPointermove: N
                }, {
                  default: C(() => [
                    B(b.$slots, "default")
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
}), Wn = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Wt(), { forwardRef: o } = L(), r = k(!1);
    async function s(i) {
      if (!i.defaultPrevented && Ke(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function a(i) {
      await Q(), !i.defaultPrevented && Ke(i) && n.onItemLeave(i);
    }
    return (i, u) => (P(), A(p(_s), null, {
      default: C(() => [
        G(p(ae), F({
          ref: p(o),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || void 0,
          "data-disabled": i.disabled ? "" : void 0,
          "data-highlighted": r.value ? "" : void 0,
          onPointermove: s,
          onPointerleave: a,
          onFocus: u[0] || (u[0] = async (d) => {
            await Q(), !(d.defaultPrevented || i.disabled) && (r.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await Q(), !d.defaultPrevented && (r.value = !1);
          })
        }), {
          default: C(() => [
            B(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), Gt = /* @__PURE__ */ O({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: s } = L(), a = qe(), i = Wt(), u = k(!1);
    async function d() {
      const c = s.value;
      if (!n.disabled && c) {
        const l = new CustomEvent(ss, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", l), await Q(), l.defaultPrevented ? u.value = !1 : a.onClose();
      }
    }
    return (c, l) => (P(), A(Wn, F(n, {
      ref: p(r),
      onClick: d,
      onPointerdown: l[0] || (l[0] = () => {
        u.value = !0;
      }),
      onPointerup: l[1] || (l[1] = async (f) => {
        var m;
        await Q(), !f.defaultPrevented && (u.value || (m = f.currentTarget) == null || m.click());
      }),
      onKeydown: l[2] || (l[2] = async (f) => {
        const m = p(i).searchRef.value !== "";
        c.disabled || m && f.key === " " || p(Ot).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: C(() => [
        B(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Rs, jn] = oe(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Ts = /* @__PURE__ */ O({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Rs({
      checked: k(!1)
    });
    return (n, o) => (P(), A(p(Lt), {
      present: n.forceMount || p(rt)(p(t).checked.value) || p(t).checked.value === !0
    }, {
      default: C(() => [
        G(p(ae), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": p(Nt)(p(t).checked.value)
        }, {
          default: C(() => [
            B(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), $s = /* @__PURE__ */ O({
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
    const n = e, o = t, r = Be(n, "checked", o);
    return jn({ checked: r }), (s, a) => (P(), A(Gt, F({ role: "menuitemcheckbox" }, n, {
      "aria-checked": p(rt)(p(r)) ? "mixed" : p(r),
      "data-state": p(Nt)(p(r)),
      onSelect: a[0] || (a[0] = async (i) => {
        o("select", i), p(rt)(p(r)) ? r.value = !0 : r.value = !p(r);
      })
    }), {
      default: C(() => [
        B(s.$slots, "default", { checked: p(r) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Is = /* @__PURE__ */ O({
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
    const n = e, o = t, r = Y(n, o), s = Ae(), { forwardRef: a, currentElement: i } = L();
    return Fr(i), (u, d) => (P(), A(jt, F(p(r), {
      ref: p(a),
      "trap-focus": p(s).open.value,
      "disable-outside-pointer-events": p(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => p(s).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = bt((c) => o("focusOutside", c), ["prevent"]))
    }), {
      default: C(() => [
        B(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Fs = /* @__PURE__ */ O({
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
    const n = Y(e, t), o = Ae();
    return (r, s) => (P(), A(jt, F(p(n), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (a) => p(o).onOpenChange(!1))
    }), {
      default: C(() => [
        B(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zs = /* @__PURE__ */ O({
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
    const n = Y(e, t), o = Ae(), r = qe();
    return (s, a) => (P(), A(p(Lt), {
      present: s.forceMount || p(o).open.value
    }, {
      default: C(() => [
        p(r).modal.value ? (P(), A(Is, V(F({ key: 0 }, { ...s.$attrs, ...p(n) })), {
          default: C(() => [
            B(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (P(), A(Fs, V(F({ key: 1 }, { ...s.$attrs, ...p(n) })), {
          default: C(() => [
            B(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Gn = /* @__PURE__ */ O({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (P(), A(p(ae), F({ role: "group" }, t), {
      default: C(() => [
        B(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ls = /* @__PURE__ */ O({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (P(), A(p(ae), V(U(t)), {
      default: C(() => [
        B(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ns = /* @__PURE__ */ O({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (P(), A(p(Ur), V(U(t)), {
      default: C(() => [
        B(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Vs, Ws] = oe("MenuRadioGroup"), js = /* @__PURE__ */ O({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Be(n, "modelValue", t);
    return Ws({
      modelValue: o,
      onValueChange: (r) => {
        o.value = r;
      }
    }), (r, s) => (P(), A(Gn, V(U(n)), {
      default: C(() => [
        B(r.$slots, "default", { modelValue: p(o) })
      ]),
      _: 3
    }, 16));
  }
}), Gs = /* @__PURE__ */ O({
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
    const n = e, o = t, { value: r } = Fe(n), s = Vs(), a = D(
      () => s.modelValue.value === (r == null ? void 0 : r.value)
    );
    return jn({ checked: a }), (i, u) => (P(), A(Gt, F({ role: "menuitemradio" }, n, {
      "aria-checked": a.value,
      "data-state": p(Nt)(a.value),
      onSelect: u[0] || (u[0] = async (d) => {
        o("select", d), p(s).onValueChange(p(r));
      })
    }), {
      default: C(() => [
        B(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Us = /* @__PURE__ */ O({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (P(), A(p(ae), F(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: C(() => [
        B(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Un, Ks] = oe("MenuSub"), Hs = /* @__PURE__ */ O({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Be(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), r = Ae(), s = k(), a = k();
    return te((i) => {
      (r == null ? void 0 : r.open.value) === !1 && (o.value = !1), i(() => o.value = !1);
    }), Vn({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: a,
      onContentChange: (i) => {
        a.value = i;
      }
    }), Ks({
      triggerId: "",
      contentId: "",
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, u) => (P(), A(p(zn), null, {
      default: C(() => [
        B(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Xs = /* @__PURE__ */ O({
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
    const n = Y(e, t), o = Ae(), r = qe(), s = Un(), { forwardRef: a, currentElement: i } = L();
    return s.contentId || (s.contentId = dt(void 0, "radix-vue-menu-sub-content")), (u, d) => (P(), A(p(Lt), {
      present: u.forceMount || p(o).open.value
    }, {
      default: C(() => [
        G(jt, F(p(n), {
          id: p(s).contentId,
          ref: p(a),
          "aria-labelledby": p(s).triggerId,
          align: "start",
          side: p(r).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = bt((c) => {
            var l;
            p(r).isUsingKeyboardRef.value && ((l = p(i)) == null || l.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = bt(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== p(s).trigger.value && p(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            p(r).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var l, f;
            const m = (l = c.currentTarget) == null ? void 0 : l.contains(c.target), v = p(us)[p(r).dir.value].includes(c.key);
            m && v && (p(o).onOpenChange(!1), (f = p(s).trigger.value) == null || f.focus(), c.preventDefault());
          })
        }), {
          default: C(() => [
            B(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), qs = /* @__PURE__ */ O({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ae(), o = qe(), r = Un(), s = Wt(), a = k(null);
    r.triggerId || (r.triggerId = dt(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      a.value && window.clearTimeout(a.value), a.value = null;
    }
    at(() => {
      i();
    });
    function u(l) {
      !Ke(l) || s.onItemEnter(l) || !t.disabled && !n.open.value && !a.value && (s.onPointerGraceIntentChange(null), a.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(l) {
      var f, m;
      if (!Ke(l))
        return;
      i();
      const v = (f = n.content.value) == null ? void 0 : f.getBoundingClientRect();
      if (v != null && v.width) {
        const g = (m = n.content.value) == null ? void 0 : m.dataset.side, h = g === "right", y = h ? -5 : 5, w = v[h ? "left" : "right"], x = v[h ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: l.clientX + y, y: l.clientY },
            { x: w, y: v.top },
            { x, y: v.top },
            { x, y: v.bottom },
            { x: w, y: v.bottom }
          ],
          side: g
        }), window.clearTimeout(s.pointerGraceTimerRef.value), s.pointerGraceTimerRef.value = window.setTimeout(
          () => s.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (s.onTriggerLeave(l))
          return;
        s.onPointerGraceIntentChange(null);
      }
    }
    async function c(l) {
      var f;
      const m = s.searchRef.value !== "";
      t.disabled || m && l.key === " " || ls[o.dir.value].includes(l.key) && (n.onOpenChange(!0), await Q(), (f = n.content.value) == null || f.focus(), l.preventDefault());
    }
    return (l, f) => (P(), A(Nn, { "as-child": "" }, {
      default: C(() => [
        G(Wn, F(t, {
          id: p(r).triggerId,
          ref: (m) => {
            var v;
            (v = p(r)) == null || v.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": p(n).open.value,
          "aria-controls": p(r).contentId,
          "data-state": p(In)(p(n).open.value),
          onClick: f[0] || (f[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), p(n).open.value || p(n).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: c
        }), {
          default: C(() => [
            B(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [Kn, Ys] = oe("DropdownMenuRoot"), Js = /* @__PURE__ */ O({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    L();
    const r = Be(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = k(), { modal: a, dir: i } = Fe(n), u = Ft(i);
    return Ys({
      open: r,
      onOpenChange: (d) => {
        r.value = d;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerId: "",
      triggerElement: s,
      contentId: "",
      modal: a,
      dir: u
    }), (d, c) => (P(), A(p(Es), {
      open: p(r),
      "onUpdate:open": c[0] || (c[0] = (l) => fn(r) ? r.value = l : null),
      dir: p(u),
      modal: p(a)
    }, {
      default: C(() => [
        B(d.$slots, "default", { open: p(r) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Zs = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Kn(), { forwardRef: o, currentElement: r } = L();
    return st(() => {
      n.triggerElement = r;
    }), n.triggerId || (n.triggerId = dt(void 0, "radix-vue-dropdown-menu-trigger")), (s, a) => (P(), A(p(Nn), { "as-child": "" }, {
      default: C(() => [
        G(p(ae), {
          id: p(n).triggerId,
          ref: p(o),
          type: s.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: s.as,
          "aria-haspopup": "menu",
          "aria-expanded": p(n).open.value,
          "aria-controls": p(n).open.value ? p(n).contentId : void 0,
          "data-disabled": s.disabled ? "" : void 0,
          disabled: s.disabled,
          "data-state": p(n).open.value ? "open" : "closed",
          onClick: a[0] || (a[0] = async (i) => {
            var u;
            !s.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = p(n)) == null || u.onOpenToggle(), await Q(), p(n).open.value && i.preventDefault());
          }),
          onKeydown: a[1] || (a[1] = so(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && p(n).onOpenToggle(), i.key === "ArrowDown" && p(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: C(() => [
            B(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Qs = /* @__PURE__ */ O({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (P(), A(p(Ns), V(U(t)), {
      default: C(() => [
        B(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ea = /* @__PURE__ */ O({
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
    const n = Y(e, t);
    L();
    const o = Kn(), r = k(!1);
    function s(a) {
      a.defaultPrevented || (r.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), r.value = !1, a.preventDefault());
    }
    return o.contentId || (o.contentId = dt(void 0, "radix-vue-dropdown-menu-content")), (a, i) => {
      var u;
      return P(), A(p(zs), F(p(n), {
        id: p(o).contentId,
        "aria-labelledby": (u = p(o)) == null ? void 0 : u.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: s,
        onInteractOutside: i[0] || (i[0] = (d) => {
          var c;
          if (d.defaultPrevented) return;
          const l = d.detail.originalEvent, f = l.button === 0 && l.ctrlKey === !0, m = l.button === 2 || f;
          (!p(o).modal.value || m) && (r.value = !0), (c = p(o).triggerElement.value) != null && c.contains(d.target) && d.preventDefault();
        })
      }), {
        default: C(() => [
          B(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Hn = /* @__PURE__ */ O({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = ct(t);
    return L(), (r, s) => (P(), A(p(Gt), V(U({ ...n, ...p(o) })), {
      default: C(() => [
        B(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ta = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return L(), (n, o) => (P(), A(p(Gn), V(U(t)), {
      default: C(() => [
        B(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), na = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return L(), (n, o) => (P(), A(p(Us), V(U(t)), {
      default: C(() => [
        B(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oa = /* @__PURE__ */ O({
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
    const n = e, o = ct(t);
    return L(), (r, s) => (P(), A(p($s), V(U({ ...n, ...p(o) })), {
      default: C(() => [
        B(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xn = /* @__PURE__ */ O({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return L(), (n, o) => (P(), A(p(Ts), V(U(t)), {
      default: C(() => [
        B(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ra = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return L(), (n, o) => (P(), A(p(Ls), V(U(t)), {
      default: C(() => [
        B(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sa = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = ct(t);
    return L(), (r, s) => (P(), A(p(js), V(U({ ...n, ...p(o) })), {
      default: C(() => [
        B(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), aa = /* @__PURE__ */ O({
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
    const n = Y(e, t);
    return L(), (o, r) => (P(), A(p(Gs), V(U(p(n))), {
      default: C(() => [
        B(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ia = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Be(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return L(), (r, s) => (P(), A(p(Hs), {
      open: p(o),
      "onUpdate:open": s[0] || (s[0] = (a) => fn(o) ? o.value = a : null)
    }, {
      default: C(() => [
        B(r.$slots, "default", { open: p(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), la = /* @__PURE__ */ O({
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
    const n = Y(e, t);
    return L(), (o, r) => (P(), A(p(Xs), F(p(n), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: C(() => [
        B(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ua = /* @__PURE__ */ O({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return L(), (n, o) => (P(), A(p(qs), V(U(t)), {
      default: C(() => [
        B(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ca() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
ca();
const Za = /* @__PURE__ */ O({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Y(e, t);
    return (s, a) => (P(), A(p(Js), V(U(p(r))), {
      default: C(({ open: i }) => [
        B(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Ut = "-", da = (e) => {
  const t = fa(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(Ut);
      return i[0] === "" && i.length !== 1 && i.shift(), qn(i, t) || pa(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const u = n[a] || [];
      return i && o[a] ? [...u, ...o[a]] : u;
    }
  };
}, qn = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? qn(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const s = e.join(Ut);
  return (a = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : a.classGroupId;
}, sn = /^\[(.+)\]$/, pa = (e) => {
  if (sn.test(e)) {
    const t = sn.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, fa = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return va(Object.entries(e.classGroups), n).forEach(([s, a]) => {
    Et(a, o, s, t);
  }), o;
}, Et = (e, t, n, o) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const s = r === "" ? t : an(t, r);
      s.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (ma(r)) {
        Et(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([s, a]) => {
      Et(a, an(t, s), n, o);
    });
  });
}, an = (e, t) => {
  let n = e;
  return t.split(Ut).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, ma = (e) => e.isThemeGetter, va = (e, t) => t ? e.map(([n, o]) => {
  const r = o.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([a, i]) => [t + a, i])) : s);
  return [n, r];
}) : e, ga = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const r = (s, a) => {
    n.set(s, a), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = n.get(s);
      if (a !== void 0)
        return a;
      if ((a = o.get(s)) !== void 0)
        return r(s, a), a;
    },
    set(s, a) {
      n.has(s) ? n.set(s, a) : r(s, a);
    }
  };
}, Yn = "!", ha = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, r = t[0], s = t.length, a = (i) => {
    const u = [];
    let d = 0, c = 0, l;
    for (let h = 0; h < i.length; h++) {
      let y = i[h];
      if (d === 0) {
        if (y === r && (o || i.slice(h, h + s) === t)) {
          u.push(i.slice(c, h)), c = h + s;
          continue;
        }
        if (y === "/") {
          l = h;
          continue;
        }
      }
      y === "[" ? d++ : y === "]" && d--;
    }
    const f = u.length === 0 ? i : i.substring(c), m = f.startsWith(Yn), v = m ? f.substring(1) : f, g = l && l > c ? l - c : void 0;
    return {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: a
  }) : a;
}, ya = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, ba = (e) => ({
  cache: ga(e.cacheSize),
  parseClassName: ha(e),
  ...da(e)
}), wa = /\s+/, xa = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = t, s = [], a = e.trim().split(wa);
  let i = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const d = a[u], {
      modifiers: c,
      hasImportantModifier: l,
      baseClassName: f,
      maybePostfixModifierPosition: m
    } = n(d);
    let v = !!m, g = o(v ? f.substring(0, m) : f);
    if (!g) {
      if (!v) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = o(f), !g) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      v = !1;
    }
    const h = ya(c).join(":"), y = l ? h + Yn : h, w = y + g;
    if (s.includes(w))
      continue;
    s.push(w);
    const x = r(g, v);
    for (let E = 0; E < x.length; ++E) {
      const M = x[E];
      s.push(y + M);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Ca() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Jn(t)) && (o && (o += " "), o += n);
  return o;
}
const Jn = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Jn(e[o])) && (n && (n += " "), n += t);
  return n;
};
function _a(e, ...t) {
  let n, o, r, s = a;
  function a(u) {
    const d = t.reduce((c, l) => l(c), e());
    return n = ba(d), o = n.cache.get, r = n.cache.set, s = i, i(u);
  }
  function i(u) {
    const d = o(u);
    if (d)
      return d;
    const c = xa(u, n);
    return r(u, c), c;
  }
  return function() {
    return s(Ca.apply(null, arguments));
  };
}
const z = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Zn = /^\[(?:([a-z-]+):)?(.+)\]$/i, Oa = /^\d+\/\d+$/, Pa = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ea = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ba = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Aa = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ka = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ma = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, de = (e) => $e(e) || Pa.has(e) || Oa.test(e), he = (e) => Ve(e, "length", za), $e = (e) => !!e && !Number.isNaN(Number(e)), yt = (e) => Ve(e, "number", $e), We = (e) => !!e && Number.isInteger(Number(e)), Sa = (e) => e.endsWith("%") && $e(e.slice(0, -1)), R = (e) => Zn.test(e), ye = (e) => Ea.test(e), Da = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ra = (e) => Ve(e, Da, Qn), Ta = (e) => Ve(e, "position", Qn), $a = /* @__PURE__ */ new Set(["image", "url"]), Ia = (e) => Ve(e, $a, Na), Fa = (e) => Ve(e, "", La), je = () => !0, Ve = (e, t, n) => {
  const o = Zn.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, za = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ba.test(e) && !Aa.test(e)
), Qn = () => !1, La = (e) => ka.test(e), Na = (e) => Ma.test(e), Va = () => {
  const e = z("colors"), t = z("spacing"), n = z("blur"), o = z("brightness"), r = z("borderColor"), s = z("borderRadius"), a = z("borderSpacing"), i = z("borderWidth"), u = z("contrast"), d = z("grayscale"), c = z("hueRotate"), l = z("invert"), f = z("gap"), m = z("gradientColorStops"), v = z("gradientColorStopPositions"), g = z("inset"), h = z("margin"), y = z("opacity"), w = z("padding"), x = z("saturate"), E = z("scale"), M = z("sepia"), T = z("skew"), $ = z("space"), j = z("translate"), N = () => ["auto", "contain", "none"], b = () => ["auto", "hidden", "clip", "visible", "scroll"], S = () => ["auto", R, t], _ = () => [R, t], K = () => ["", de, he], I = () => ["auto", $e, R], X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], W = () => ["solid", "dashed", "dotted", "double", "none"], J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ne = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], q = () => ["", "0", R], Ye = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ue = () => [$e, R];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [je],
      spacing: [de, he],
      blur: ["none", "", ye, R],
      brightness: ue(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ye, R],
      borderSpacing: _(),
      borderWidth: K(),
      contrast: ue(),
      grayscale: q(),
      hueRotate: ue(),
      invert: q(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Sa, he],
      inset: S(),
      margin: S(),
      opacity: ue(),
      padding: _(),
      saturate: ue(),
      scale: ue(),
      sepia: q(),
      skew: ue(),
      space: _(),
      translate: _()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", R]
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
        columns: [ye]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Ye()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ye()
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
        object: [...X(), R]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: b()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": b()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": b()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
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
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
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
        z: ["auto", We, R]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: S()
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
        flex: ["1", "auto", "initial", "none", R]
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
        order: ["first", "last", "none", We, R]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [je]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", We, R]
        }, R]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [je]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [We, R]
        }, R]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
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
        "auto-cols": ["auto", "min", "max", "fr", R]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", R]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...ne()]
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
        content: ["normal", ...ne(), "baseline"]
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
        "place-content": [...ne(), "baseline"]
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
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [h]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [h]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [h]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [h]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [h]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [h]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [h]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [h]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [h]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [$]
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
        "space-y": [$]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", R, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [R, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [R, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ye]
        }, ye]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [R, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [R, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [R, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [R, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ye, he]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", yt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [je]
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
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", R]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", $e, yt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", de, R]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", R]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", R]
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
        "placeholder-opacity": [y]
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
        "text-opacity": [y]
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
        decoration: [...W(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", de, he]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", de, R]
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
        indent: _()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", R]
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
        content: ["none", R]
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
        "bg-opacity": [y]
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
        bg: [...X(), Ta]
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
        bg: ["auto", "cover", "contain", Ra]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ia]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...W(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
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
        "divide-y": [i]
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
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: W()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [r]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [r]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [r]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [r]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [r]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [r]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [r]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [r]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...W()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [de, R]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [de, he]
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
        ring: K()
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
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [de, he]
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
        shadow: ["", "inner", "none", ye, Fa]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [je]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...J(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": J()
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
        brightness: [o]
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
        "drop-shadow": ["", "none", ye, R]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [l]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [M]
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
        "backdrop-brightness": [o]
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
        "backdrop-grayscale": [d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [l]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [M]
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
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", R]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ue()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", R]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ue()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", R]
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
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [We, R]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [j]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [j]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [T]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [T]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", R]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", R]
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
        "scroll-m": _()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
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
        "will-change": ["auto", "scroll", "contents", "transform", R]
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
        stroke: [de, he, yt]
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
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
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
}, Wa = /* @__PURE__ */ _a(Va);
function ge(...e) {
  return Wa(e);
}
const eo = /* @__PURE__ */ O({
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
    return (n, o) => (P(), ze("div", {
      class: it(
        p(ge)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          n.inset && "pl-8",
          t.class
        )
      )
    }, [
      B(n.$slots, "default")
    ], 2));
  }
}), Qa = /* @__PURE__ */ O({
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
    const t = e, n = D(() => {
      const { class: r, ...s } = t;
      return s;
    }), o = Ne(n);
    return (r, s) => (P(), A(eo, {
      class: it(t.class)
    }, {
      default: C(() => [
        G(p(Hn), F(p(o), {
          as: r.as,
          href: r.href,
          class: "size-full"
        }), {
          default: C(() => [
            B(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "href"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ei = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Ne(e);
    return (o, r) => (P(), A(p(Zs), F({ class: "outline-none" }, p(n)), {
      default: C(() => [
        B(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ti = /* @__PURE__ */ O({
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
    const n = e, o = t, r = D(() => {
      const { class: a, ...i } = n;
      return i;
    }), s = Y(r, o);
    return (a, i) => (P(), A(p(Qs), null, {
      default: C(() => [
        G(p(ea), F(p(s), {
          class: p(ge)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            n.class
          )
        }), {
          default: C(() => [
            B(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ni = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (P(), A(p(ta), V(U(t)), {
      default: C(() => [
        B(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oi = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = Y(e, t);
    return (s, a) => (P(), A(p(sa), V(U(p(r))), {
      default: C(() => [
        B(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ri = /* @__PURE__ */ O({
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
    const t = e, n = D(() => {
      const { class: r, ...s } = t;
      return s;
    }), o = Ne(n);
    return (r, s) => (P(), A(eo, {
      class: it(t.class)
    }, {
      default: C(() => [
        G(p(Hn), F(p(o), { class: "size-full" }), {
          default: C(() => [
            B(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function ja(e, t) {
  return P(), ze("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    He("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]);
}
function Ga(e, t) {
  return P(), ze("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    He("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m8.25 4.5 7.5 7.5-7.5 7.5"
    })
  ]);
}
const Ua = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, si = /* @__PURE__ */ O({
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
    const n = e, o = t, r = D(() => {
      const { class: a, ...i } = n;
      return i;
    }), s = Y(r, o);
    return (a, i) => (P(), A(p(oa), F(p(s), {
      class: p(ge)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
        n.class
      )
    }), {
      default: C(() => [
        He("span", Ua, [
          G(p(Xn), null, {
            default: C(() => [
              G(p(ja), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        B(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function Ka(e, t) {
  return P(), ze("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    He("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Ha = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, ai = /* @__PURE__ */ O({
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
    const n = e, o = t, r = D(() => {
      const { class: a, ...i } = n;
      return i;
    }), s = Y(r, o);
    return (a, i) => (P(), A(p(aa), F(p(s), {
      class: p(ge)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
        n.class
      )
    }), {
      default: C(() => [
        He("span", Ha, [
          G(p(Xn), null, {
            default: C(() => [
              G(p(Ka), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        B(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ii = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (P(), ze("span", {
      class: it(p(ge)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      B(n.$slots, "default")
    ], 2));
  }
}), li = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (P(), A(p(na), F(n.value, {
      class: p(ge)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), ui = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: r, ...s } = t;
      return s;
    }), o = Ne(n);
    return (r, s) => (P(), A(p(ra), F(p(o), {
      class: p(ge)("px-2 py-1.5 text-sm font-semibold", r.inset && "pl-8", t.class)
    }), {
      default: C(() => [
        B(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ci = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Y(e, t);
    return (s, a) => (P(), A(p(ia), V(U(p(r))), {
      default: C(() => [
        B(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), di = /* @__PURE__ */ O({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: r, ...s } = t;
      return s;
    }), o = Ne(n);
    return (r, s) => (P(), A(p(ua), F(p(o), {
      class: p(ge)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800",
        t.class
      )
    }), {
      default: C(() => [
        B(r.$slots, "default"),
        G(p(Ga), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pi = /* @__PURE__ */ O({
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
    const n = e, o = t, r = D(() => {
      const { class: a, ...i } = n;
      return i;
    }), s = Y(r, o);
    return (a, i) => (P(), A(p(la), F(p(s), {
      class: p(ge)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        n.class
      )
    }), {
      default: C(() => [
        B(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  eo as BaseDropdownMenuItem,
  Za as DropdownMenu,
  si as DropdownMenuCheckboxItem,
  ti as DropdownMenuContent,
  ni as DropdownMenuGroup,
  ri as DropdownMenuItem,
  ui as DropdownMenuLabel,
  Qa as DropdownMenuLink,
  Qs as DropdownMenuPortal,
  oi as DropdownMenuRadioGroup,
  ai as DropdownMenuRadioItem,
  li as DropdownMenuSeparator,
  ii as DropdownMenuShortcut,
  ci as DropdownMenuSub,
  pi as DropdownMenuSubContent,
  di as DropdownMenuSubTrigger,
  ei as DropdownMenuTrigger
};
