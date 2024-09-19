import { defineComponent as b, openBlock as f, createBlock as y, resolveDynamicComponent as Me, mergeProps as E, unref as s, withCtx as m, renderSlot as _, onMounted as ce, withDirectives as At, createElementBlock as R, createElementVNode as K, toDisplayString as Q, vShow as xn, computed as B, ref as M, shallowRef as Cn, watch as J, getCurrentScope as $n, onScopeDispose as kn, shallowReadonly as bt, getCurrentInstance as Te, toRef as Fo, camelize as Lo, Comment as Bs, cloneVNode as Ps, h as it, toRefs as me, normalizeProps as U, guardReactiveProps as G, reactive as No, createVNode as P, createCommentVNode as ee, createTextVNode as Y, withKeys as He, withModifiers as we, Fragment as X, watchEffect as he, markRaw as Os, nextTick as te, watchSyncEffect as Ds, isRef as Xt, renderList as ve, Teleport as Bn, onBeforeUnmount as Pn, useSlots as Ss, onBeforeMount as Es, normalizeStyle as Da, effectScope as zo, toHandlerKey as Ms, onUnmounted as Qt, vModelSelect as As, inject as Wo, provide as jo, customRef as Uo, onBeforeUpdate as Ts, onUpdated as Is, mergeDefaults as Ho, readonly as On, normalizeClass as se, mergeModels as dn, useModel as Ko, vModelDynamic as Rs, vModelText as Vs, Transition as Fs } from "vue";
function Go(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (a = Go(e[t])) && (n && (n += " "), n += a);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Ls() {
  for (var e, t, a = 0, n = ""; a < arguments.length; ) (e = arguments[a++]) && (t = Go(e)) && (n && (n += " "), n += t);
  return n;
}
const so = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, ro = Ls, Ns = (e, t) => (a) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return ro(e, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: l } = t, r = Object.keys(o).map((u) => {
    const c = a == null ? void 0 : a[u], p = l == null ? void 0 : l[u];
    if (c === null) return null;
    const v = so(c) || so(p);
    return o[u][v];
  }), i = a && Object.entries(a).reduce((u, c) => {
    let [p, v] = c;
    return v === void 0 || (u[p] = v), u;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, c) => {
    let { class: p, className: v, ...g } = c;
    return Object.entries(g).every((w) => {
      let [h, x] = w;
      return Array.isArray(x) ? x.includes({
        ...l,
        ...i
      }[h]) : {
        ...l,
        ...i
      }[h] === x;
    }) ? [
      ...u,
      p,
      v
    ] : u;
  }, []);
  return ro(e, r, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, Dn = "-", zs = (e) => {
  const t = js(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (r) => {
      const i = r.split(Dn);
      return i[0] === "" && i.length !== 1 && i.shift(), qo(i, t) || Ws(r);
    },
    getConflictingClassGroupIds: (r, i) => {
      const d = a[r] || [];
      return i && n[r] ? [...d, ...n[r]] : d;
    }
  };
}, qo = (e, t) => {
  var r;
  if (e.length === 0)
    return t.classGroupId;
  const a = e[0], n = t.nextPart.get(a), o = n ? qo(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const l = e.join(Dn);
  return (r = t.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : r.classGroupId;
}, io = /^\[(.+)\]$/, Ws = (e) => {
  if (io.test(e)) {
    const t = io.exec(e)[1], a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, js = (e) => {
  const {
    theme: t,
    prefix: a
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Hs(Object.entries(e.classGroups), a).forEach(([l, r]) => {
    un(r, n, l, t);
  }), n;
}, un = (e, t, a, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const l = o === "" ? t : uo(t, o);
      l.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (Us(o)) {
        un(o(n), t, a, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([l, r]) => {
      un(r, uo(t, l), a, n);
    });
  });
}, uo = (e, t) => {
  let a = e;
  return t.split(Dn).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Us = (e) => e.isThemeGetter, Hs = (e, t) => t ? e.map(([a, n]) => {
  const o = n.map((l) => typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([r, i]) => [t + r, i])) : l);
  return [a, o];
}) : e, Ks = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (l, r) => {
    a.set(l, r), t++, t > e && (t = 0, n = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let r = a.get(l);
      if (r !== void 0)
        return r;
      if ((r = n.get(l)) !== void 0)
        return o(l, r), r;
    },
    set(l, r) {
      a.has(l) ? a.set(l, r) : o(l, r);
    }
  };
}, Yo = "!", Gs = (e) => {
  const {
    separator: t,
    experimentalParseClassName: a
  } = e, n = t.length === 1, o = t[0], l = t.length, r = (i) => {
    const d = [];
    let u = 0, c = 0, p;
    for (let x = 0; x < i.length; x++) {
      let C = i[x];
      if (u === 0) {
        if (C === o && (n || i.slice(x, x + l) === t)) {
          d.push(i.slice(c, x)), c = x + l;
          continue;
        }
        if (C === "/") {
          p = x;
          continue;
        }
      }
      C === "[" ? u++ : C === "]" && u--;
    }
    const v = d.length === 0 ? i : i.substring(c), g = v.startsWith(Yo), w = g ? v.substring(1) : v, h = p && p > c ? p - c : void 0;
    return {
      modifiers: d,
      hasImportantModifier: g,
      baseClassName: w,
      maybePostfixModifierPosition: h
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: r
  }) : r;
}, qs = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let a = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...a.sort(), n), a = []) : a.push(n);
  }), t.push(...a.sort()), t;
}, Ys = (e) => ({
  cache: Ks(e.cacheSize),
  parseClassName: Gs(e),
  ...zs(e)
}), Zs = /\s+/, Js = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, l = [], r = e.trim().split(Zs);
  let i = "";
  for (let d = r.length - 1; d >= 0; d -= 1) {
    const u = r[d], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: v,
      maybePostfixModifierPosition: g
    } = a(u);
    let w = !!g, h = n(w ? v.substring(0, g) : v);
    if (!h) {
      if (!w) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (h = n(v), !h) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      w = !1;
    }
    const x = qs(c).join(":"), C = p ? x + Yo : x, D = C + h;
    if (l.includes(D))
      continue;
    l.push(D);
    const $ = o(h, w);
    for (let O = 0; O < $.length; ++O) {
      const S = $[O];
      l.push(C + S);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Xs() {
  let e = 0, t, a, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (a = Zo(t)) && (n && (n += " "), n += a);
  return n;
}
const Zo = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Zo(e[n])) && (a && (a += " "), a += t);
  return a;
};
function Qs(e, ...t) {
  let a, n, o, l = r;
  function r(d) {
    const u = t.reduce((c, p) => p(c), e());
    return a = Ys(u), n = a.cache.get, o = a.cache.set, l = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = Js(d, a);
    return o(d, c), c;
  }
  return function() {
    return l(Xs.apply(null, arguments));
  };
}
const de = (e) => {
  const t = (a) => a[e] || [];
  return t.isThemeGetter = !0, t;
}, Jo = /^\[(?:([a-z-]+):)?(.+)\]$/i, er = /^\d+\/\d+$/, tr = /* @__PURE__ */ new Set(["px", "full", "screen"]), ar = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, nr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, or = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, lr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, sr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Fe = (e) => xt(e) || tr.has(e) || er.test(e), Ze = (e) => Tt(e, "length", mr), xt = (e) => !!e && !Number.isNaN(Number(e)), Ga = (e) => Tt(e, "number", xt), Wt = (e) => !!e && Number.isInteger(Number(e)), rr = (e) => e.endsWith("%") && xt(e.slice(0, -1)), q = (e) => Jo.test(e), Je = (e) => ar.test(e), ir = /* @__PURE__ */ new Set(["length", "size", "percentage"]), dr = (e) => Tt(e, ir, Xo), ur = (e) => Tt(e, "position", Xo), cr = /* @__PURE__ */ new Set(["image", "url"]), pr = (e) => Tt(e, cr, hr), fr = (e) => Tt(e, "", vr), jt = () => !0, Tt = (e, t, a) => {
  const n = Jo.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : a(n[2]) : !1;
}, mr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  nr.test(e) && !or.test(e)
), Xo = () => !1, vr = (e) => lr.test(e), hr = (e) => sr.test(e), gr = () => {
  const e = de("colors"), t = de("spacing"), a = de("blur"), n = de("brightness"), o = de("borderColor"), l = de("borderRadius"), r = de("borderSpacing"), i = de("borderWidth"), d = de("contrast"), u = de("grayscale"), c = de("hueRotate"), p = de("invert"), v = de("gap"), g = de("gradientColorStops"), w = de("gradientColorStopPositions"), h = de("inset"), x = de("margin"), C = de("opacity"), D = de("padding"), $ = de("saturate"), O = de("scale"), S = de("sepia"), A = de("skew"), T = de("space"), W = de("translate"), j = () => ["auto", "contain", "none"], k = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", q, t], V = () => [q, t], ne = () => ["", Fe, Ze], Z = () => ["auto", xt, q], N = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], H = () => ["solid", "dashed", "dotted", "double", "none"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ue = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], pe = () => ["", "0", q], ke = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], be = () => [xt, q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [jt],
      spacing: [Fe, Ze],
      blur: ["none", "", Je, q],
      brightness: be(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Je, q],
      borderSpacing: V(),
      borderWidth: ne(),
      contrast: be(),
      grayscale: pe(),
      hueRotate: be(),
      invert: pe(),
      gap: V(),
      gradientColorStops: [e],
      gradientColorStopPositions: [rr, Ze],
      inset: I(),
      margin: I(),
      opacity: be(),
      padding: V(),
      saturate: be(),
      scale: be(),
      sepia: pe(),
      skew: be(),
      space: V(),
      translate: V()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", q]
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
        columns: [Je]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ke()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ke()
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
        object: [...N(), q]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: j()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": j()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": j()
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
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
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
        z: ["auto", Wt, q]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: I()
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
        flex: ["1", "auto", "initial", "none", q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: pe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: pe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Wt, q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [jt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Wt, q]
        }, q]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [jt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Wt, q]
        }, q]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Z()
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
        "auto-cols": ["auto", "min", "max", "fr", q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", q]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...ue()]
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
        content: ["normal", ...ue(), "baseline"]
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
        "place-content": [...ue(), "baseline"]
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
        p: [D]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [D]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [D]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [D]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [D]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [D]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [D]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [D]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [D]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [T]
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
        "space-y": [T]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", q, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [q, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [q, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Je]
        }, Je]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [q, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Je, Ze]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ga]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [jt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", xt, Ga]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Fe, q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", q]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", q]
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
        "placeholder-opacity": [C]
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
        "text-opacity": [C]
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
        decoration: [...H(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Fe, Ze]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Fe, q]
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
        indent: V()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q]
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
        content: ["none", q]
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
        "bg-opacity": [C]
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
        bg: [...N(), ur]
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
        bg: ["auto", "cover", "contain", dr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, pr]
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
        from: [w]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [w]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [l]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [l]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [l]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [l]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [l]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [l]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [l]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [l]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [l]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [l]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [l]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [l]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [l]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [l]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [l]
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
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...H(), "hidden"]
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
        "divide-opacity": [C]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: H()
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
        outline: ["", ...H()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Fe, q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Fe, Ze]
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
        ring: ne()
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
        "ring-opacity": [C]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Fe, Ze]
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
        shadow: ["", "inner", "none", Je, fr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [jt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": oe()
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
        blur: [a]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Je, q]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
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
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [$]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [S]
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
        "backdrop-blur": [a]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
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
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [$]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [S]
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
        "border-spacing": [r]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [r]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [r]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", q]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: be()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: be()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", q]
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
        scale: [O]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [O]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [O]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Wt, q]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [W]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [W]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [A]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [A]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q]
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
        "scroll-m": V()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": V()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": V()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": V()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": V()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": V()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": V()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": V()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": V()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": V()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": V()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": V()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": V()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": V()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": V()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": V()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": V()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": V()
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
        "will-change": ["auto", "scroll", "contents", "transform", q]
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
        stroke: [Fe, Ze, Ga]
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
}, yr = /* @__PURE__ */ Qs(gr);
function z(...e) {
  return yr(e);
}
const ct = /* @__PURE__ */ b({
  __name: "Button",
  props: {
    is: { default: "button" },
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(Me(a.is), E(a.$attrs, {
      class: s(z)(s(Sa)({ variant: a.variant, size: a.size }), t.class)
    }), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sa = Ns(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-500 text-slate-50 hover:bg-slate-700/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        primary: "bg-primary-500 text-primary-50 hover:bg-primary-700/90 dark:bg-primary-800 dark:text-slate-100 dark:hover:bg-primary-800/90",
        destructive: "bg-red-500 text-slate-50 hover:bg-red-700/90 dark:bg-red-800 dark:text-slate-100 dark:hover:bg-red-800/90",
        outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-500 underline-offset-4 hover:underline dark:text-slate-50"
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded px-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Sn = /* @__PURE__ */ b({
  __name: "BaseButton",
  props: {
    is: { default: "button" },
    method: {},
    size: { default: "default" },
    class: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = {
      default: "h-10 px-2",
      xs: "h-7 rounded px-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }[t.size];
    return (o, l) => (f(), y(Me(o.is), E(o.$attrs, {
      class: ["inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300", [t.class, s(n)]]
    }), {
      default: m(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Av = /* @__PURE__ */ b({
  __name: "PrimaryButton",
  props: {
    is: { default: "button" },
    type: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    return (t, a) => (f(), y(Sn, E({
      is: t.is,
      type: t.type,
      disabled: t.disabled,
      class: "bg-primary-500 text-primary-50 hover:bg-primary-700/90 dark:bg-primary-800 dark:text-slate-100 dark:hover:bg-primary-800/90"
    }, t.$attrs), {
      default: m(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["is", "type", "disabled"]));
  }
}), Qo = /* @__PURE__ */ b({
  __name: "SecondaryButton",
  props: {
    is: { default: "button" },
    type: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    return (t, a) => (f(), y(Sn, E({
      is: t.is,
      type: t.type,
      disabled: t.disabled,
      class: "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-800/80"
    }, t.$attrs), {
      default: m(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["is", "type", "disabled"]));
  }
}), Tv = /* @__PURE__ */ b({
  __name: "DangerButton",
  props: {
    is: { default: "button" },
    type: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    return (t, a) => (f(), y(Sn, E({
      is: t.is,
      type: t.type,
      disabled: t.disabled,
      class: "bg-red-500 text-slate-50 hover:bg-red-700/90 dark:bg-red-800 dark:text-slate-100 dark:hover:bg-red-800/90"
    }, t.$attrs), {
      default: m(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["is", "type", "disabled"]));
  }
}), br = { class: "text-sm text-red-600 dark:text-red-400" }, wr = /* @__PURE__ */ b({
  __name: "Error",
  props: {
    message: {}
  },
  setup(e) {
    const t = e;
    return ce(() => {
      t.message && console.warn("WARNING: The :message prop will not be supported in the next major version.");
    }), (a, n) => At((f(), R("div", null, [
      K("p", br, Q(a.message), 1)
    ], 512)), [
      [xn, a.message]
    ]);
  }
}), ea = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, o] of t)
    a[n] = o;
  return a;
}, _r = {}, xr = { class: "w-full space-y-4 p-1.5" };
function Cr(e, t) {
  return f(), R("div", xr, [
    _(e.$slots, "default")
  ]);
}
const Iv = /* @__PURE__ */ ea(_r, [["render", Cr]]), $r = {}, kr = { class: "my-4" };
function Br(e, t) {
  return f(), R("div", kr, [
    _(e.$slots, "default")
  ]);
}
const Pr = /* @__PURE__ */ ea($r, [["render", Br]]), Or = { class: "grid gap-4 md:grid-cols-2" }, Rv = /* @__PURE__ */ b({
  __name: "FormGrid",
  setup(e) {
    return (t, a) => (f(), y(Pr, null, {
      default: m(() => [
        K("div", Or, [
          _(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), Dr = { class: "text-xs text-slate-600 dark:text-slate-300" }, Sr = /* @__PURE__ */ b({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(e) {
    return (t, a) => (f(), R("div", Dr, "Characters: " + Q(t.count), 1));
  }
});
function Er(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    })
  ]);
}
function Ea(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]);
}
function Mr(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
    })
  ]);
}
function Ar(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    })
  ]);
}
function el(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    })
  ]);
}
function Tr(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5 8.25 12l7.5-7.5"
    })
  ]);
}
function tl(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m8.25 4.5 7.5 7.5-7.5 7.5"
    })
  ]);
}
function Ir(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    })
  ]);
}
function Rr(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 15.75 7.5-7.5 7.5 7.5"
    })
  ]);
}
function Vr(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    })
  ]);
}
function Fr(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    })
  ]);
}
function Lr(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    })
  ]);
}
function Nr(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    })
  ]);
}
function al(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
function qa(e, t) {
  return e - t * Math.floor(e / t);
}
const nl = 1721426;
function da(e, t, a, n) {
  t = En(e, t);
  let o = t - 1, l = -2;
  return a <= 2 ? l = 0 : _a(t) && (l = -1), nl - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + l + n);
}
function _a(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function En(e, t) {
  return e === "BC" ? 1 - t : t;
}
function zr(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const Wr = {
  standard: [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ],
  leapyear: [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ]
};
class $t {
  fromJulianDay(t) {
    let a = t, n = a - nl, o = Math.floor(n / 146097), l = qa(n, 146097), r = Math.floor(l / 36524), i = qa(l, 36524), d = Math.floor(i / 1461), u = qa(i, 1461), c = Math.floor(u / 365), p = o * 400 + r * 100 + d * 4 + c + (r !== 4 && c !== 4 ? 1 : 0), [v, g] = zr(p), w = a - da(v, g, 1, 1), h = 2;
    a < da(v, g, 3, 1) ? h = 0 : _a(g) && (h = 1);
    let x = Math.floor(((w + h) * 12 + 373) / 367), C = a - da(v, g, x, 1) + 1;
    return new Ot(v, g, x, C);
  }
  toJulianDay(t) {
    return da(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return Wr[_a(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return _a(t.year) ? 366 : 365;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearsInEra(t) {
    return 9999;
  }
  getEras() {
    return [
      "BC",
      "AD"
    ];
  }
  isInverseEra(t) {
    return t.era === "BC";
  }
  balanceDate(t) {
    t.year <= 0 && (t.era = t.era === "BC" ? "AD" : "BC", t.year = 1 - t.year);
  }
  constructor() {
    this.identifier = "gregory";
  }
}
const jr = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BY: 1,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  HR: 1,
  HU: 1,
  IE: 1,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JO: 6,
  KG: 1,
  KW: 6,
  KZ: 1,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MK: 1,
  MN: 1,
  MQ: 1,
  MV: 5,
  MY: 1,
  NL: 1,
  NO: 1,
  NZ: 1,
  OM: 6,
  PL: 1,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SD: 6,
  SE: 1,
  SI: 1,
  SK: 1,
  SM: 1,
  SY: 6,
  TJ: 1,
  TM: 1,
  TR: 1,
  UA: 1,
  UY: 1,
  UZ: 1,
  VA: 1,
  VN: 1,
  XK: 1
};
function kt(e, t) {
  return t = $e(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Ur(e, t) {
  return t = $e(t, e.calendar), e = Ht(e), t = Ht(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Ya(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function co(e, t) {
  return e = Ht(e), t = Ht(t), e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month;
}
function Hr(e, t) {
  return kt(e, ll(t));
}
function ol(e, t) {
  let a = e.calendar.toJulianDay(e), n = Math.ceil(a + 1 - Yr(t)) % 7;
  return n < 0 && (n += 7), n;
}
function Kr(e) {
  return je(Date.now(), e);
}
function ll(e) {
  return Xr(Kr(e));
}
function sl(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function Gr(e, t) {
  return po(e) - po(t);
}
function po(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let Za = null;
function It() {
  return Za == null && (Za = new Intl.DateTimeFormat().resolvedOptions().timeZone), Za;
}
function Ht(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function fo(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const mo = /* @__PURE__ */ new Map();
function qr(e) {
  if (Intl.Locale) {
    let a = mo.get(e);
    return a || (a = new Intl.Locale(e).maximize().region, a && mo.set(e, a)), a;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function Yr(e) {
  let t = qr(e);
  return t && jr[t] || 0;
}
function Bt(e) {
  e = $e(e, new $t());
  let t = En(e.era, e.year);
  return rl(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function rl(e, t, a, n, o, l, r) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, l, r), i.setUTCFullYear(e, t - 1, a), i.getTime();
}
function cn(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === It()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: l, minute: r, second: i } = il(e, t);
  return rl(a, n, o, l, r, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const vo = /* @__PURE__ */ new Map();
function il(e, t) {
  let a = vo.get(t);
  a || (a = new Intl.DateTimeFormat("en-US", {
    timeZone: t,
    hour12: !1,
    era: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }), vo.set(t, a));
  let n = a.formatToParts(new Date(e)), o = {};
  for (let l of n) l.type !== "literal" && (o[l.type] = l.value);
  return {
    // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
    year: o.era === "BC" || o.era === "B" ? -o.year + 1 : +o.year,
    month: +o.month,
    day: +o.day,
    hour: o.hour === "24" ? 0 : +o.hour,
    minute: +o.minute,
    second: +o.second
  };
}
const ho = 864e5;
function Zr(e, t, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((l) => Jr(e, t, l));
}
function Jr(e, t, a) {
  let n = il(a, t);
  return e.year === n.year && e.month === n.month && e.day === n.day && e.hour === n.hour && e.minute === n.minute && e.second === n.second;
}
function We(e, t, a = "compatible") {
  let n = Pt(e);
  if (t === "UTC") return Bt(n);
  if (t === It() && a === "compatible") {
    n = $e(n, new $t());
    let d = /* @__PURE__ */ new Date(), u = En(n.era, n.year);
    return d.setFullYear(u, n.month - 1, n.day), d.setHours(n.hour, n.minute, n.second, n.millisecond), d.getTime();
  }
  let o = Bt(n), l = cn(o - ho, t), r = cn(o + ho, t), i = Zr(n, t, o - l, o - r);
  if (i.length === 1) return i[0];
  if (i.length > 1) switch (a) {
    case "compatible":
    case "earlier":
      return i[0];
    case "later":
      return i[i.length - 1];
    case "reject":
      throw new RangeError("Multiple possible absolute times found");
  }
  switch (a) {
    case "earlier":
      return Math.min(o - l, o - r);
    case "compatible":
    case "later":
      return Math.max(o - l, o - r);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function dl(e, t, a = "compatible") {
  return new Date(We(e, t, a));
}
function je(e, t) {
  let a = cn(e, t), n = new Date(e + a), o = n.getUTCFullYear(), l = n.getUTCMonth() + 1, r = n.getUTCDate(), i = n.getUTCHours(), d = n.getUTCMinutes(), u = n.getUTCSeconds(), c = n.getUTCMilliseconds();
  return new St(o, l, r, t, a, i, d, u, c);
}
function Xr(e) {
  return new Ot(e.calendar, e.era, e.year, e.month, e.day);
}
function Pt(e, t) {
  let a = 0, n = 0, o = 0, l = 0;
  if ("timeZone" in e) ({ hour: a, minute: n, second: o, millisecond: l } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: a, minute: n, second: o, millisecond: l } = t), new Dt(e.calendar, e.era, e.year, e.month, e.day, a, n, o, l);
}
function $e(e, t) {
  if (e.calendar.identifier === t.identifier) return e;
  let a = t.fromJulianDay(e.calendar.toJulianDay(e)), n = e.copy();
  return n.calendar = t, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, dt(n), n;
}
function Qr(e, t, a) {
  if (e instanceof St)
    return e.timeZone === t ? e : ti(e, t);
  let n = We(e, t, a);
  return je(n, t);
}
function ei(e) {
  let t = Bt(e) - e.offset;
  return new Date(t);
}
function ti(e, t) {
  let a = Bt(e) - e.offset;
  return $e(je(a, t), e.calendar);
}
const Ut = 36e5;
function Ma(e, t) {
  let a = e.copy(), n = "hour" in a ? li(a, t) : 0;
  pn(a, t.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e), a.month += t.months || 0, fn(a), ul(a), a.day += (t.weeks || 0) * 7, a.day += t.days || 0, a.day += n, ai(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
  let o = a.calendar.getYearsInEra(a);
  if (a.year > o) {
    var l, r;
    let d = (l = (r = a.calendar).isInverseEra) === null || l === void 0 ? void 0 : l.call(r, a);
    a.year = o, a.month = d ? 1 : a.calendar.getMonthsInYear(a), a.day = d ? 1 : a.calendar.getDaysInMonth(a);
  }
  a.month < 1 && (a.month = 1, a.day = 1);
  let i = a.calendar.getMonthsInYear(a);
  return a.month > i && (a.month = i, a.day = a.calendar.getDaysInMonth(a)), a.day = Math.max(1, Math.min(a.calendar.getDaysInMonth(a), a.day)), a;
}
function pn(e, t) {
  var a, n;
  !((a = (n = e.calendar).isInverseEra) === null || a === void 0) && a.call(n, e) && (t = -t), e.year += t;
}
function fn(e) {
  for (; e.month < 1; )
    pn(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, pn(e, 1);
}
function ai(e) {
  for (; e.day < 1; )
    e.month--, fn(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, fn(e);
}
function ul(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function dt(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), ul(e);
}
function cl(e) {
  let t = {};
  for (let a in e) typeof e[a] == "number" && (t[a] = -e[a]);
  return t;
}
function pl(e, t) {
  return Ma(e, cl(t));
}
function Mn(e, t) {
  let a = e.copy();
  return t.era != null && (a.era = t.era), t.year != null && (a.year = t.year), t.month != null && (a.month = t.month), t.day != null && (a.day = t.day), dt(a), a;
}
function xa(e, t) {
  let a = e.copy();
  return t.hour != null && (a.hour = t.hour), t.minute != null && (a.minute = t.minute), t.second != null && (a.second = t.second), t.millisecond != null && (a.millisecond = t.millisecond), oi(a), a;
}
function ni(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = ua(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = ua(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = ua(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = ua(e.hour, 24), t;
}
function oi(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function ua(e, t) {
  let a = e % t;
  return a < 0 && (a += t), a;
}
function li(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, ni(e);
}
function An(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "era": {
      let i = e.calendar.getEras(), d = i.indexOf(e.era);
      if (d < 0) throw new Error("Invalid era: " + e.era);
      d = Ue(d, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[d], dt(o);
      break;
    }
    case "year":
      var l, r;
      !((l = (r = o.calendar).isInverseEra) === null || l === void 0) && l.call(r, o) && (a = -a), o.year = Ue(e.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, e);
      break;
    case "month":
      o.month = Ue(e.month, a, 1, e.calendar.getMonthsInYear(e), n == null ? void 0 : n.round);
      break;
    case "day":
      o.day = Ue(e.day, a, 1, e.calendar.getDaysInMonth(e), n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(o), dt(o), o;
}
function fl(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "hour": {
      let l = e.hour, r = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let d = l >= 12;
        r = d ? 12 : 0, i = d ? 23 : 11;
      }
      o.hour = Ue(l, a, r, i, n == null ? void 0 : n.round);
      break;
    }
    case "minute":
      o.minute = Ue(e.minute, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "second":
      o.second = Ue(e.second, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "millisecond":
      o.millisecond = Ue(e.millisecond, a, 0, 999, n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return o;
}
function Ue(e, t, a, n, o = !1) {
  if (o) {
    e += Math.sign(t), e < a && (e = n);
    let l = Math.abs(t);
    t > 0 ? e = Math.ceil(e / l) * l : e = Math.floor(e / l) * l, e > n && (e = a);
  } else
    e += t, e < a ? e = n - (a - e - 1) : e > n && (e = a + (e - n - 1));
  return e;
}
function ml(e, t) {
  let a;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let o = Ma(Pt(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    a = We(o, e.timeZone);
  } else
    a = Bt(e) - e.offset;
  a += t.milliseconds || 0, a += (t.seconds || 0) * 1e3, a += (t.minutes || 0) * 6e4, a += (t.hours || 0) * 36e5;
  let n = je(a, e.timeZone);
  return $e(n, e.calendar);
}
function si(e, t) {
  return ml(e, cl(t));
}
function ri(e, t, a, n) {
  switch (t) {
    case "hour": {
      let o = 0, l = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let w = e.hour >= 12;
        o = w ? 12 : 0, l = w ? 23 : 11;
      }
      let r = Pt(e), i = $e(xa(r, {
        hour: o
      }), new $t()), d = [
        We(i, e.timeZone, "earlier"),
        We(i, e.timeZone, "later")
      ].filter((w) => je(w, e.timeZone).day === i.day)[0], u = $e(xa(r, {
        hour: l
      }), new $t()), c = [
        We(u, e.timeZone, "earlier"),
        We(u, e.timeZone, "later")
      ].filter((w) => je(w, e.timeZone).day === u.day).pop(), p = Bt(e) - e.offset, v = Math.floor(p / Ut), g = p % Ut;
      return p = Ue(v, a, Math.floor(d / Ut), Math.floor(c / Ut), n == null ? void 0 : n.round) * Ut + g, $e(je(p, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return fl(e, t, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = An(Pt(e), t, a, n), l = We(o, e.timeZone);
      return $e(je(l, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function ii(e, t, a) {
  let n = Pt(e), o = xa(Mn(n, t), t);
  if (o.compare(n) === 0) return e;
  let l = We(o, e.timeZone, a);
  return $e(je(l, e.timeZone), e.calendar);
}
function di(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function vl(e) {
  let t = $e(e, new $t());
  return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function hl(e) {
  return `${vl(e)}T${di(e)}`;
}
function ui(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let a = Math.floor(e / 36e5), n = e % 36e5 / 6e4;
  return `${t}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function ci(e) {
  return `${hl(e)}${ui(e.offset)}[${e.timeZone}]`;
}
function pi(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Tn(e, t, a) {
  pi(e, t), t.set(e, a);
}
function In(e) {
  let t = typeof e[0] == "object" ? e.shift() : new $t(), a;
  if (typeof e[0] == "string") a = e.shift();
  else {
    let r = t.getEras();
    a = r[r.length - 1];
  }
  let n = e.shift(), o = e.shift(), l = e.shift();
  return [
    t,
    a,
    n,
    o,
    l
  ];
}
var fi = /* @__PURE__ */ new WeakMap();
class Ot {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ot(this.calendar, this.era, this.year, this.month, this.day) : new Ot(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return Ma(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return pl(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Mn(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return An(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return dl(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return vl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return sl(this, t);
  }
  constructor(...t) {
    Tn(this, fi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, r] = In(t);
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = r, dt(this);
  }
}
var mi = /* @__PURE__ */ new WeakMap();
class Dt {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Dt(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new Dt(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return Ma(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return pl(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Mn(xa(this, t), t);
  }
  /**
  * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    switch (t) {
      case "era":
      case "year":
      case "month":
      case "day":
        return An(this, t, a, n);
      default:
        return fl(this, t, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, a) {
    return dl(this, t, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return hl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let a = sl(this, t);
    return a === 0 ? Gr(this, Pt(t)) : a;
  }
  constructor(...t) {
    Tn(this, mi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, r] = In(t);
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = r, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, dt(this);
  }
}
var vi = /* @__PURE__ */ new WeakMap();
class St {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new St(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new St(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return ml(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return si(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, a) {
    return ii(this, t, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return ri(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return ei(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return ci(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - Qr(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    Tn(this, vi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, r] = In(t), i = t.shift(), d = t.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = r, this.timeZone = i, this.offset = d, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, dt(this);
  }
}
let Ja = /* @__PURE__ */ new Map();
class Ne {
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(t) {
    return this.formatter.format(t);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */
  formatToParts(t) {
    return this.formatter.formatToParts(t);
  }
  /** Formats a date range as a string. */
  formatRange(t, a) {
    if (typeof this.formatter.formatRange == "function")
      return this.formatter.formatRange(t, a);
    if (a < t) throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(t)} – ${this.formatter.format(a)}`;
  }
  /** Formats a date range as an array of parts. */
  formatRangeToParts(t, a) {
    if (typeof this.formatter.formatRangeToParts == "function")
      return this.formatter.formatRangeToParts(t, a);
    if (a < t) throw new RangeError("End date must be >= start date");
    let n = this.formatter.formatToParts(t), o = this.formatter.formatToParts(a);
    return [
      ...n.map((l) => ({
        ...l,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...o.map((l) => ({
        ...l,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let t = this.formatter.resolvedOptions();
    return yi() && (this.resolvedHourCycle || (this.resolvedHourCycle = bi(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, a = {}) {
    this.formatter = gl(t, a), this.options = a;
  }
}
const hi = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function gl(e, t = {}) {
  if (typeof t.hour12 == "boolean" && gi()) {
    t = {
      ...t
    };
    let o = hi[String(t.hour12)][e.split("-")[0]], l = t.hour12 ? "h12" : "h23";
    t.hourCycle = o ?? l, delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((o, l) => o[0] < l[0] ? -1 : 1).join() : "");
  if (Ja.has(a)) return Ja.get(a);
  let n = new Intl.DateTimeFormat(e, t);
  return Ja.set(a, n), n;
}
let Xa = null;
function gi() {
  return Xa == null && (Xa = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Xa;
}
let Qa = null;
function yi() {
  return Qa == null && (Qa = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), Qa;
}
function bi(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = gl(e, {
    ...t,
    timeZone: void 0
    // use local timezone
  }), n = parseInt(a.formatToParts(new Date(2020, 2, 3, 0)).find((l) => l.type === "hour").value, 10), o = parseInt(a.formatToParts(new Date(2020, 2, 3, 23)).find((l) => l.type === "hour").value, 10);
  if (n === 0 && o === 23) return "h23";
  if (n === 24 && o === 23) return "h24";
  if (n === 0 && o === 11) return "h11";
  if (n === 12 && o === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
function wi(e, t) {
  const a = [];
  for (let n = 0; n < e.length; n += t)
    a.push(e.slice(n, n + t));
  return a;
}
function Se(e, t = It()) {
  return Rn(e) ? e.toDate() : e.toDate(t);
}
function _i(e) {
  return e instanceof Dt;
}
function Rn(e) {
  return e instanceof St;
}
function xi(e) {
  return _i(e) || Rn(e);
}
function Kt(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), a = e.getMonth() + 1;
    return new Date(t, a, 0).getDate();
  } else
    return e.set({ day: 100 }).day;
}
function ca(e, t) {
  return e.compare(t) < 0;
}
function pa(e, t) {
  return e.compare(t) > 0;
}
function Ci(e, t, a) {
  const n = ol(e, a);
  return t > n ? e.subtract({ days: n + 7 - t }) : t === n ? e : e.subtract({ days: n - t });
}
function $i(e, t, a) {
  const n = ol(e, a), o = t === 0 ? 6 : t - 1;
  return n === o ? e : n > o ? e.add({ days: 7 - n + o }) : e.add({ days: o - n });
}
function go(e, t) {
  const a = [];
  let n = e.add({ days: 1 });
  const o = t;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function en(e) {
  const { dateObj: t, weekStartsOn: a, fixedWeeks: n, locale: o } = e, l = Kt(t), r = Array.from({ length: l }, (x, C) => t.set({ day: C + 1 })), i = Ht(t), d = fo(t), u = Ci(i, a, o), c = $i(d, a, o), p = go(u.subtract({ days: 1 }), i), v = go(d, c.add({ days: 1 })), g = p.length + r.length + v.length;
  if (n && g < 42) {
    const x = 42 - g;
    let C = v[v.length - 1];
    C || (C = fo(t));
    const D = Array.from({ length: x }, ($, O) => {
      const S = O + 1;
      return C.add({ days: S });
    });
    v.push(...D);
  }
  const w = p.concat(r, v), h = wi(w, 7);
  return {
    value: t,
    cells: w,
    rows: h
  };
}
function st(e) {
  const { numberOfMonths: t, dateObj: a, ...n } = e, o = [];
  if (!t || t === 1)
    return o.push(
      en({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    en({
      ...n,
      dateObj: a
    })
  );
  for (let l = 1; l < t; l++) {
    const r = a.add({ months: l });
    o.push(
      en({
        ...n,
        dateObj: r
      })
    );
  }
  return o;
}
const ki = ["top", "right", "bottom", "left"], Ee = Math.min, xe = Math.max, Ca = Math.round, fa = Math.floor, tt = (e) => ({
  x: e,
  y: e
}), Bi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Pi = {
  start: "end",
  end: "start"
};
function mn(e, t, a) {
  return xe(e, Ee(t, a));
}
function Ke(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ge(e) {
  return e.split("-")[0];
}
function Rt(e) {
  return e.split("-")[1];
}
function Vn(e) {
  return e === "x" ? "y" : "x";
}
function Fn(e) {
  return e === "y" ? "height" : "width";
}
function at(e) {
  return ["top", "bottom"].includes(Ge(e)) ? "y" : "x";
}
function Ln(e) {
  return Vn(at(e));
}
function Oi(e, t, a) {
  a === void 0 && (a = !1);
  const n = Rt(e), o = Ln(e), l = Fn(o);
  let r = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (r = $a(r)), [r, $a(r)];
}
function Di(e) {
  const t = $a(e);
  return [vn(e), t, vn(t)];
}
function vn(e) {
  return e.replace(/start|end/g, (t) => Pi[t]);
}
function Si(e, t, a) {
  const n = ["left", "right"], o = ["right", "left"], l = ["top", "bottom"], r = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return a ? t ? o : n : t ? n : o;
    case "left":
    case "right":
      return t ? l : r;
    default:
      return [];
  }
}
function Ei(e, t, a, n) {
  const o = Rt(e);
  let l = Si(Ge(e), a === "start", n);
  return o && (l = l.map((r) => r + "-" + o), t && (l = l.concat(l.map(vn)))), l;
}
function $a(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Bi[t]);
}
function Mi(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function yl(e) {
  return typeof e != "number" ? Mi(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ka(e) {
  const {
    x: t,
    y: a,
    width: n,
    height: o
  } = e;
  return {
    width: n,
    height: o,
    top: a,
    left: t,
    right: t + n,
    bottom: a + o,
    x: t,
    y: a
  };
}
function yo(e, t, a) {
  let {
    reference: n,
    floating: o
  } = e;
  const l = at(t), r = Ln(t), i = Fn(r), d = Ge(t), u = l === "y", c = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, v = n[i] / 2 - o[i] / 2;
  let g;
  switch (d) {
    case "top":
      g = {
        x: c,
        y: n.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: c,
        y: n.y + n.height
      };
      break;
    case "right":
      g = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      g = {
        x: n.x - o.width,
        y: p
      };
      break;
    default:
      g = {
        x: n.x,
        y: n.y
      };
  }
  switch (Rt(t)) {
    case "start":
      g[r] -= v * (a && u ? -1 : 1);
      break;
    case "end":
      g[r] += v * (a && u ? -1 : 1);
      break;
  }
  return g;
}
const Ai = async (e, t, a) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: l = [],
    platform: r
  } = a, i = l.filter(Boolean), d = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let u = await r.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: p
  } = yo(u, n, d), v = n, g = {}, w = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: x,
      fn: C
    } = i[h], {
      x: D,
      y: $,
      data: O,
      reset: S
    } = await C({
      x: c,
      y: p,
      initialPlacement: n,
      placement: v,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: r,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = D ?? c, p = $ ?? p, g = {
      ...g,
      [x]: {
        ...g[x],
        ...O
      }
    }, S && w <= 50 && (w++, typeof S == "object" && (S.placement && (v = S.placement), S.rects && (u = S.rects === !0 ? await r.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: c,
      y: p
    } = yo(u, v, d)), h = -1);
  }
  return {
    x: c,
    y: p,
    placement: v,
    strategy: o,
    middlewareData: g
  };
};
async function Gt(e, t) {
  var a;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: l,
    rects: r,
    elements: i,
    strategy: d
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: v = !1,
    padding: g = 0
  } = Ke(t, e), w = yl(g), x = i[v ? p === "floating" ? "reference" : "floating" : p], C = ka(await l.getClippingRect({
    element: (a = await (l.isElement == null ? void 0 : l.isElement(x))) == null || a ? x : x.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: d
  })), D = p === "floating" ? {
    x: n,
    y: o,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, $ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(i.floating)), O = await (l.isElement == null ? void 0 : l.isElement($)) ? await (l.getScale == null ? void 0 : l.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = ka(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: D,
    offsetParent: $,
    strategy: d
  }) : D);
  return {
    top: (C.top - S.top + w.top) / O.y,
    bottom: (S.bottom - C.bottom + w.bottom) / O.y,
    left: (C.left - S.left + w.left) / O.x,
    right: (S.right - C.right + w.right) / O.x
  };
}
const Ti = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: a,
      y: n,
      placement: o,
      rects: l,
      platform: r,
      elements: i,
      middlewareData: d
    } = t, {
      element: u,
      padding: c = 0
    } = Ke(e, t) || {};
    if (u == null)
      return {};
    const p = yl(c), v = {
      x: a,
      y: n
    }, g = Ln(o), w = Fn(g), h = await r.getDimensions(u), x = g === "y", C = x ? "top" : "left", D = x ? "bottom" : "right", $ = x ? "clientHeight" : "clientWidth", O = l.reference[w] + l.reference[g] - v[g] - l.floating[w], S = v[g] - l.reference[g], A = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(u));
    let T = A ? A[$] : 0;
    (!T || !await (r.isElement == null ? void 0 : r.isElement(A))) && (T = i.floating[$] || l.floating[w]);
    const W = O / 2 - S / 2, j = T / 2 - h[w] / 2 - 1, k = Ee(p[C], j), I = Ee(p[D], j), V = k, ne = T - h[w] - I, Z = T / 2 - h[w] / 2 + W, N = mn(V, Z, ne), H = !d.arrow && Rt(o) != null && Z !== N && l.reference[w] / 2 - (Z < V ? k : I) - h[w] / 2 < 0, oe = H ? Z < V ? Z - V : Z - ne : 0;
    return {
      [g]: v[g] + oe,
      data: {
        [g]: N,
        centerOffset: Z - N - oe,
        ...H && {
          alignmentOffset: oe
        }
      },
      reset: H
    };
  }
}), Ii = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var a, n;
      const {
        placement: o,
        middlewareData: l,
        rects: r,
        initialPlacement: i,
        platform: d,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: v,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: h = !0,
        ...x
      } = Ke(e, t);
      if ((a = l.arrow) != null && a.alignmentOffset)
        return {};
      const C = Ge(o), D = at(i), $ = Ge(i) === i, O = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), S = v || ($ || !h ? [$a(i)] : Di(i)), A = w !== "none";
      !v && A && S.push(...Ei(i, h, w, O));
      const T = [i, ...S], W = await Gt(t, x), j = [];
      let k = ((n = l.flip) == null ? void 0 : n.overflows) || [];
      if (c && j.push(W[C]), p) {
        const Z = Oi(o, r, O);
        j.push(W[Z[0]], W[Z[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: j
      }], !j.every((Z) => Z <= 0)) {
        var I, V;
        const Z = (((I = l.flip) == null ? void 0 : I.index) || 0) + 1, N = T[Z];
        if (N)
          return {
            data: {
              index: Z,
              overflows: k
            },
            reset: {
              placement: N
            }
          };
        let H = (V = k.filter((oe) => oe.overflows[0] <= 0).sort((oe, ue) => oe.overflows[1] - ue.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!H)
          switch (g) {
            case "bestFit": {
              var ne;
              const oe = (ne = k.filter((ue) => {
                if (A) {
                  const pe = at(ue.placement);
                  return pe === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  pe === "y";
                }
                return !0;
              }).map((ue) => [ue.placement, ue.overflows.filter((pe) => pe > 0).reduce((pe, ke) => pe + ke, 0)]).sort((ue, pe) => ue[1] - pe[1])[0]) == null ? void 0 : ne[0];
              oe && (H = oe);
              break;
            }
            case "initialPlacement":
              H = i;
              break;
          }
        if (o !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
};
function bo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function wo(e) {
  return ki.some((t) => e[t] >= 0);
}
const Ri = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: a
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = Ke(e, t);
      switch (n) {
        case "referenceHidden": {
          const l = await Gt(t, {
            ...o,
            elementContext: "reference"
          }), r = bo(l, a.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: wo(r)
            }
          };
        }
        case "escaped": {
          const l = await Gt(t, {
            ...o,
            altBoundary: !0
          }), r = bo(l, a.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: wo(r)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Vi(e, t) {
  const {
    placement: a,
    platform: n,
    elements: o
  } = e, l = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), r = Ge(a), i = Rt(a), d = at(a) === "y", u = ["left", "top"].includes(r) ? -1 : 1, c = l && d ? -1 : 1, p = Ke(t, e);
  let {
    mainAxis: v,
    crossAxis: g,
    alignmentAxis: w
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p
  };
  return i && typeof w == "number" && (g = i === "end" ? w * -1 : w), d ? {
    x: g * c,
    y: v * u
  } : {
    x: v * u,
    y: g * c
  };
}
const Fi = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var a, n;
      const {
        x: o,
        y: l,
        placement: r,
        middlewareData: i
      } = t, d = await Vi(t, e);
      return r === ((a = i.offset) == null ? void 0 : a.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: o + d.x,
        y: l + d.y,
        data: {
          ...d,
          placement: r
        }
      };
    }
  };
}, Li = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: a,
        y: n,
        placement: o
      } = t, {
        mainAxis: l = !0,
        crossAxis: r = !1,
        limiter: i = {
          fn: (x) => {
            let {
              x: C,
              y: D
            } = x;
            return {
              x: C,
              y: D
            };
          }
        },
        ...d
      } = Ke(e, t), u = {
        x: a,
        y: n
      }, c = await Gt(t, d), p = at(Ge(o)), v = Vn(p);
      let g = u[v], w = u[p];
      if (l) {
        const x = v === "y" ? "top" : "left", C = v === "y" ? "bottom" : "right", D = g + c[x], $ = g - c[C];
        g = mn(D, g, $);
      }
      if (r) {
        const x = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", D = w + c[x], $ = w - c[C];
        w = mn(D, w, $);
      }
      const h = i.fn({
        ...t,
        [v]: g,
        [p]: w
      });
      return {
        ...h,
        data: {
          x: h.x - a,
          y: h.y - n
        }
      };
    }
  };
}, Ni = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: a,
        y: n,
        placement: o,
        rects: l,
        middlewareData: r
      } = t, {
        offset: i = 0,
        mainAxis: d = !0,
        crossAxis: u = !0
      } = Ke(e, t), c = {
        x: a,
        y: n
      }, p = at(o), v = Vn(p);
      let g = c[v], w = c[p];
      const h = Ke(i, t), x = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (d) {
        const $ = v === "y" ? "height" : "width", O = l.reference[v] - l.floating[$] + x.mainAxis, S = l.reference[v] + l.reference[$] - x.mainAxis;
        g < O ? g = O : g > S && (g = S);
      }
      if (u) {
        var C, D;
        const $ = v === "y" ? "width" : "height", O = ["top", "left"].includes(Ge(o)), S = l.reference[p] - l.floating[$] + (O && ((C = r.offset) == null ? void 0 : C[p]) || 0) + (O ? 0 : x.crossAxis), A = l.reference[p] + l.reference[$] + (O ? 0 : ((D = r.offset) == null ? void 0 : D[p]) || 0) - (O ? x.crossAxis : 0);
        w < S ? w = S : w > A && (w = A);
      }
      return {
        [v]: g,
        [p]: w
      };
    }
  };
}, zi = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: a,
        rects: n,
        platform: o,
        elements: l
      } = t, {
        apply: r = () => {
        },
        ...i
      } = Ke(e, t), d = await Gt(t, i), u = Ge(a), c = Rt(a), p = at(a) === "y", {
        width: v,
        height: g
      } = n.floating;
      let w, h;
      u === "top" || u === "bottom" ? (w = u, h = c === (await (o.isRTL == null ? void 0 : o.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (h = u, w = c === "end" ? "top" : "bottom");
      const x = g - d.top - d.bottom, C = v - d.left - d.right, D = Ee(g - d[w], x), $ = Ee(v - d[h], C), O = !t.middlewareData.shift;
      let S = D, A = $;
      if (p ? A = c || O ? Ee($, C) : C : S = c || O ? Ee(D, x) : x, O && !c) {
        const W = xe(d.left, 0), j = xe(d.right, 0), k = xe(d.top, 0), I = xe(d.bottom, 0);
        p ? A = v - 2 * (W !== 0 || j !== 0 ? W + j : xe(d.left, d.right)) : S = g - 2 * (k !== 0 || I !== 0 ? k + I : xe(d.top, d.bottom));
      }
      await r({
        ...t,
        availableWidth: A,
        availableHeight: S
      });
      const T = await o.getDimensions(l.floating);
      return v !== T.width || g !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pt(e) {
  return Nn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ce(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qe(e) {
  var t;
  return (t = (Nn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Nn(e) {
  return e instanceof Node || e instanceof Ce(e).Node;
}
function Pe(e) {
  return e instanceof Element || e instanceof Ce(e).Element;
}
function Ae(e) {
  return e instanceof HTMLElement || e instanceof Ce(e).HTMLElement;
}
function _o(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ce(e).ShadowRoot;
}
function ta(e) {
  const {
    overflow: t,
    overflowX: a,
    overflowY: n,
    display: o
  } = Oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + a) && !["inline", "contents"].includes(o);
}
function Wi(e) {
  return ["table", "td", "th"].includes(pt(e));
}
function Aa(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function zn(e) {
  const t = Wn(), a = Pe(e) ? Oe(e) : e;
  return a.transform !== "none" || a.perspective !== "none" || (a.containerType ? a.containerType !== "normal" : !1) || !t && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !t && (a.filter ? a.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function ji(e) {
  let t = nt(e);
  for (; Ae(t) && !Et(t); ) {
    if (zn(t))
      return t;
    if (Aa(t))
      return null;
    t = nt(t);
  }
  return null;
}
function Wn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Et(e) {
  return ["html", "body", "#document"].includes(pt(e));
}
function Oe(e) {
  return Ce(e).getComputedStyle(e);
}
function Ta(e) {
  return Pe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function nt(e) {
  if (pt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    _o(e) && e.host || // Fallback.
    qe(e)
  );
  return _o(t) ? t.host : t;
}
function bl(e) {
  const t = nt(e);
  return Et(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ae(t) && ta(t) ? t : bl(t);
}
function qt(e, t, a) {
  var n;
  t === void 0 && (t = []), a === void 0 && (a = !0);
  const o = bl(e), l = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Ce(o);
  return l ? t.concat(r, r.visualViewport || [], ta(o) ? o : [], r.frameElement && a ? qt(r.frameElement) : []) : t.concat(o, qt(o, [], a));
}
function wl(e) {
  const t = Oe(e);
  let a = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = Ae(e), l = o ? e.offsetWidth : a, r = o ? e.offsetHeight : n, i = Ca(a) !== l || Ca(n) !== r;
  return i && (a = l, n = r), {
    width: a,
    height: n,
    $: i
  };
}
function jn(e) {
  return Pe(e) ? e : e.contextElement;
}
function Ct(e) {
  const t = jn(e);
  if (!Ae(t))
    return tt(1);
  const a = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: l
  } = wl(t);
  let r = (l ? Ca(a.width) : a.width) / n, i = (l ? Ca(a.height) : a.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: r,
    y: i
  };
}
const Ui = /* @__PURE__ */ tt(0);
function _l(e) {
  const t = Ce(e);
  return !Wn() || !t.visualViewport ? Ui : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Hi(e, t, a) {
  return t === void 0 && (t = !1), !a || t && a !== Ce(e) ? !1 : t;
}
function ut(e, t, a, n) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const o = e.getBoundingClientRect(), l = jn(e);
  let r = tt(1);
  t && (n ? Pe(n) && (r = Ct(n)) : r = Ct(e));
  const i = Hi(l, a, n) ? _l(l) : tt(0);
  let d = (o.left + i.x) / r.x, u = (o.top + i.y) / r.y, c = o.width / r.x, p = o.height / r.y;
  if (l) {
    const v = Ce(l), g = n && Pe(n) ? Ce(n) : n;
    let w = v, h = w.frameElement;
    for (; h && n && g !== w; ) {
      const x = Ct(h), C = h.getBoundingClientRect(), D = Oe(h), $ = C.left + (h.clientLeft + parseFloat(D.paddingLeft)) * x.x, O = C.top + (h.clientTop + parseFloat(D.paddingTop)) * x.y;
      d *= x.x, u *= x.y, c *= x.x, p *= x.y, d += $, u += O, w = Ce(h), h = w.frameElement;
    }
  }
  return ka({
    width: c,
    height: p,
    x: d,
    y: u
  });
}
function Ki(e) {
  let {
    elements: t,
    rect: a,
    offsetParent: n,
    strategy: o
  } = e;
  const l = o === "fixed", r = qe(n), i = t ? Aa(t.floating) : !1;
  if (n === r || i && l)
    return a;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = tt(1);
  const c = tt(0), p = Ae(n);
  if ((p || !p && !l) && ((pt(n) !== "body" || ta(r)) && (d = Ta(n)), Ae(n))) {
    const v = ut(n);
    u = Ct(n), c.x = v.x + n.clientLeft, c.y = v.y + n.clientTop;
  }
  return {
    width: a.width * u.x,
    height: a.height * u.y,
    x: a.x * u.x - d.scrollLeft * u.x + c.x,
    y: a.y * u.y - d.scrollTop * u.y + c.y
  };
}
function Gi(e) {
  return Array.from(e.getClientRects());
}
function xl(e) {
  return ut(qe(e)).left + Ta(e).scrollLeft;
}
function qi(e) {
  const t = qe(e), a = Ta(e), n = e.ownerDocument.body, o = xe(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), l = xe(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -a.scrollLeft + xl(e);
  const i = -a.scrollTop;
  return Oe(n).direction === "rtl" && (r += xe(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: l,
    x: r,
    y: i
  };
}
function Yi(e, t) {
  const a = Ce(e), n = qe(e), o = a.visualViewport;
  let l = n.clientWidth, r = n.clientHeight, i = 0, d = 0;
  if (o) {
    l = o.width, r = o.height;
    const u = Wn();
    (!u || u && t === "fixed") && (i = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: l,
    height: r,
    x: i,
    y: d
  };
}
function Zi(e, t) {
  const a = ut(e, !0, t === "fixed"), n = a.top + e.clientTop, o = a.left + e.clientLeft, l = Ae(e) ? Ct(e) : tt(1), r = e.clientWidth * l.x, i = e.clientHeight * l.y, d = o * l.x, u = n * l.y;
  return {
    width: r,
    height: i,
    x: d,
    y: u
  };
}
function xo(e, t, a) {
  let n;
  if (t === "viewport")
    n = Yi(e, a);
  else if (t === "document")
    n = qi(qe(e));
  else if (Pe(t))
    n = Zi(t, a);
  else {
    const o = _l(e);
    n = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return ka(n);
}
function Cl(e, t) {
  const a = nt(e);
  return a === t || !Pe(a) || Et(a) ? !1 : Oe(a).position === "fixed" || Cl(a, t);
}
function Ji(e, t) {
  const a = t.get(e);
  if (a)
    return a;
  let n = qt(e, [], !1).filter((i) => Pe(i) && pt(i) !== "body"), o = null;
  const l = Oe(e).position === "fixed";
  let r = l ? nt(e) : e;
  for (; Pe(r) && !Et(r); ) {
    const i = Oe(r), d = zn(r);
    !d && i.position === "fixed" && (o = null), (l ? !d && !o : !d && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ta(r) && !d && Cl(e, r)) ? n = n.filter((c) => c !== r) : o = i, r = nt(r);
  }
  return t.set(e, n), n;
}
function Xi(e) {
  let {
    element: t,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = e;
  const r = [...a === "clippingAncestors" ? Aa(t) ? [] : Ji(t, this._c) : [].concat(a), n], i = r[0], d = r.reduce((u, c) => {
    const p = xo(t, c, o);
    return u.top = xe(p.top, u.top), u.right = Ee(p.right, u.right), u.bottom = Ee(p.bottom, u.bottom), u.left = xe(p.left, u.left), u;
  }, xo(t, i, o));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function Qi(e) {
  const {
    width: t,
    height: a
  } = wl(e);
  return {
    width: t,
    height: a
  };
}
function ed(e, t, a) {
  const n = Ae(t), o = qe(t), l = a === "fixed", r = ut(e, !0, l, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = tt(0);
  if (n || !n && !l)
    if ((pt(t) !== "body" || ta(o)) && (i = Ta(t)), n) {
      const p = ut(t, !0, l, t);
      d.x = p.x + t.clientLeft, d.y = p.y + t.clientTop;
    } else o && (d.x = xl(o));
  const u = r.left + i.scrollLeft - d.x, c = r.top + i.scrollTop - d.y;
  return {
    x: u,
    y: c,
    width: r.width,
    height: r.height
  };
}
function tn(e) {
  return Oe(e).position === "static";
}
function Co(e, t) {
  return !Ae(e) || Oe(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function $l(e, t) {
  const a = Ce(e);
  if (Aa(e))
    return a;
  if (!Ae(e)) {
    let o = nt(e);
    for (; o && !Et(o); ) {
      if (Pe(o) && !tn(o))
        return o;
      o = nt(o);
    }
    return a;
  }
  let n = Co(e, t);
  for (; n && Wi(n) && tn(n); )
    n = Co(n, t);
  return n && Et(n) && tn(n) && !zn(n) ? a : n || ji(e) || a;
}
const td = async function(e) {
  const t = this.getOffsetParent || $l, a = this.getDimensions, n = await a(e.floating);
  return {
    reference: ed(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function ad(e) {
  return Oe(e).direction === "rtl";
}
const nd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ki,
  getDocumentElement: qe,
  getClippingRect: Xi,
  getOffsetParent: $l,
  getElementRects: td,
  getClientRects: Gi,
  getDimensions: Qi,
  getScale: Ct,
  isElement: Pe,
  isRTL: ad
};
function od(e, t) {
  let a = null, n;
  const o = qe(e);
  function l() {
    var i;
    clearTimeout(n), (i = a) == null || i.disconnect(), a = null;
  }
  function r(i, d) {
    i === void 0 && (i = !1), d === void 0 && (d = 1), l();
    const {
      left: u,
      top: c,
      width: p,
      height: v
    } = e.getBoundingClientRect();
    if (i || t(), !p || !v)
      return;
    const g = fa(c), w = fa(o.clientWidth - (u + p)), h = fa(o.clientHeight - (c + v)), x = fa(u), D = {
      rootMargin: -g + "px " + -w + "px " + -h + "px " + -x + "px",
      threshold: xe(0, Ee(1, d)) || 1
    };
    let $ = !0;
    function O(S) {
      const A = S[0].intersectionRatio;
      if (A !== d) {
        if (!$)
          return r();
        A ? r(!1, A) : n = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      $ = !1;
    }
    try {
      a = new IntersectionObserver(O, {
        ...D,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      a = new IntersectionObserver(O, D);
    }
    a.observe(e);
  }
  return r(!0), l;
}
function ld(e, t, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: l = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, u = jn(e), c = o || l ? [...u ? qt(u) : [], ...qt(t)] : [];
  c.forEach((C) => {
    o && C.addEventListener("scroll", a, {
      passive: !0
    }), l && C.addEventListener("resize", a);
  });
  const p = u && i ? od(u, a) : null;
  let v = -1, g = null;
  r && (g = new ResizeObserver((C) => {
    let [D] = C;
    D && D.target === u && g && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var $;
      ($ = g) == null || $.observe(t);
    })), a();
  }), u && !d && g.observe(u), g.observe(t));
  let w, h = d ? ut(e) : null;
  d && x();
  function x() {
    const C = ut(e);
    h && (C.x !== h.x || C.y !== h.y || C.width !== h.width || C.height !== h.height) && a(), h = C, w = requestAnimationFrame(x);
  }
  return a(), () => {
    var C;
    c.forEach((D) => {
      o && D.removeEventListener("scroll", a), l && D.removeEventListener("resize", a);
    }), p == null || p(), (C = g) == null || C.disconnect(), g = null, d && cancelAnimationFrame(w);
  };
}
const sd = Fi, rd = Li, $o = Ii, id = zi, dd = Ri, ud = Ti, cd = Ni, pd = (e, t, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: nd,
    ...a
  }, l = {
    ...o.platform,
    _c: n
  };
  return Ai(e, t, {
    ...o,
    platform: l
  });
};
function fd(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function hn(e) {
  if (fd(e)) {
    const t = e.$el;
    return Nn(t) && pt(t) === "#comment" ? null : t;
  }
  return e;
}
function _t(e) {
  return typeof e == "function" ? e() : s(e);
}
function md(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const a = hn(_t(e.element));
      return a == null ? {} : ud({
        element: a,
        padding: e.padding
      }).fn(t);
    }
  };
}
function kl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ko(e, t) {
  const a = kl(e);
  return Math.round(t * a) / a;
}
function vd(e, t, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = B(() => {
    var T;
    return (T = _t(a.open)) != null ? T : !0;
  }), l = B(() => _t(a.middleware)), r = B(() => {
    var T;
    return (T = _t(a.placement)) != null ? T : "bottom";
  }), i = B(() => {
    var T;
    return (T = _t(a.strategy)) != null ? T : "absolute";
  }), d = B(() => {
    var T;
    return (T = _t(a.transform)) != null ? T : !0;
  }), u = B(() => hn(e.value)), c = B(() => hn(t.value)), p = M(0), v = M(0), g = M(i.value), w = M(r.value), h = Cn({}), x = M(!1), C = B(() => {
    const T = {
      position: g.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return T;
    const W = ko(c.value, p.value), j = ko(c.value, v.value);
    return d.value ? {
      ...T,
      transform: "translate(" + W + "px, " + j + "px)",
      ...kl(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: g.value,
      left: W + "px",
      top: j + "px"
    };
  });
  let D;
  function $() {
    u.value == null || c.value == null || pd(u.value, c.value, {
      middleware: l.value,
      placement: r.value,
      strategy: i.value
    }).then((T) => {
      p.value = T.x, v.value = T.y, g.value = T.strategy, w.value = T.placement, h.value = T.middlewareData, x.value = !0;
    });
  }
  function O() {
    typeof D == "function" && (D(), D = void 0);
  }
  function S() {
    if (O(), n === void 0) {
      $();
      return;
    }
    if (u.value != null && c.value != null) {
      D = n(u.value, c.value, $);
      return;
    }
  }
  function A() {
    o.value || (x.value = !1);
  }
  return J([l, r, i], $, {
    flush: "sync"
  }), J([u, c], S, {
    flush: "sync"
  }), J(o, A, {
    flush: "sync"
  }), $n() && kn(O), {
    x: bt(p),
    y: bt(v),
    strategy: bt(g),
    placement: bt(w),
    middlewareData: bt(h),
    isPositioned: bt(x),
    floatingStyles: C,
    update: $
  };
}
function re(e, t) {
  const a = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(a);
  return [(o) => {
    const l = Wo(n, o);
    if (l || l === null)
      return l;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (jo(n, o), o)];
}
function Un(e, t, a) {
  const n = a.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function Bo(e, t = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(e, t), a);
}
function hd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gd = function e(t, a) {
  if (t === a) return !0;
  if (t && a && typeof t == "object" && typeof a == "object") {
    if (t.constructor !== a.constructor) return !1;
    var n, o, l;
    if (Array.isArray(t)) {
      if (n = t.length, n != a.length) return !1;
      for (o = n; o-- !== 0; )
        if (!e(t[o], a[o])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === a.source && t.flags === a.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === a.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === a.toString();
    if (l = Object.keys(t), n = l.length, n !== Object.keys(a).length) return !1;
    for (o = n; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(a, l[o])) return !1;
    for (o = n; o-- !== 0; ) {
      var r = l[o];
      if (!e(t[r], a[r])) return !1;
    }
    return !0;
  }
  return t !== t && a !== a;
};
const rt = /* @__PURE__ */ hd(gd);
function yd(e) {
  return e == null;
}
function bd(e) {
  const { defaultValue: t, defaultPlaceholder: a, granularity: n = "day" } = e;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (a)
    return a.copy();
  const o = /* @__PURE__ */ new Date(), l = o.getFullYear(), r = o.getMonth() + 1, i = o.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new Dt(l, r, i, 0, 0, 0) : new Ot(l, r, i);
}
function wd(e) {
  const t = e.querySelector("[data-selected]");
  if (t)
    return t.focus();
  const a = e.querySelector("[data-today]");
  if (a)
    return a.focus();
  const n = e.querySelector("[data-radix-vue-calendar-day]");
  if (n)
    return n.focus();
}
function _d(e, t) {
  var a;
  const n = Cn();
  return he(() => {
    n.value = e();
  }, {
    ...t,
    flush: (a = void 0) != null ? a : "sync"
  }), On(n);
}
function Ia(e) {
  return $n() ? (kn(e), !0) : !1;
}
function xd(e) {
  let t = !1, a;
  const n = zo(!0);
  return (...o) => (t || (a = n.run(() => e(...o)), t = !0), a);
}
function Cd(e) {
  let t = 0, a, n;
  const o = () => {
    t -= 1, n && t <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...l) => (t += 1, a || (n = zo(!0), a = n.run(() => e(...l))), Ia(o), a);
}
function et(e) {
  return typeof e == "function" ? e() : s(e);
}
const Ye = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const $d = (e) => typeof e < "u", kd = (e) => e != null, Bd = Object.prototype.toString, Pd = (e) => Bd.call(e) === "[object Object]", Od = () => {
}, Po = /* @__PURE__ */ Dd();
function Dd() {
  var e, t;
  return Ye && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Sd(e) {
  return Te();
}
function Ed(e, t = 1e4) {
  return Uo((a, n) => {
    let o = et(e), l;
    const r = () => setTimeout(() => {
      o = et(e), n();
    }, et(t));
    return Ia(() => {
      clearTimeout(l);
    }), {
      get() {
        return a(), o;
      },
      set(i) {
        o = i, n(), clearTimeout(l), l = r();
      }
    };
  });
}
function Md(e, t) {
  Sd() && Pn(e, t);
}
function Ie(e) {
  var t;
  const a = et(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const Hn = Ye ? window : void 0;
function Bl(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = Hn) : [t, a, n, o] = e, !t)
    return Od;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const l = [], r = () => {
    l.forEach((c) => c()), l.length = 0;
  }, i = (c, p, v, g) => (c.addEventListener(p, v, g), () => c.removeEventListener(p, v, g)), d = J(
    () => [Ie(t), et(o)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const v = Pd(p) ? { ...p } : p;
      l.push(
        ...a.flatMap((g) => n.map((w) => i(c, g, w, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), r();
  };
  return Ia(u), u;
}
function Ad(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Td(...e) {
  let t, a, n = {};
  e.length === 3 ? (t = e[0], a = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, a = e[0], n = e[1]) : (t = e[0], a = e[1]) : (t = !0, a = e[0]);
  const {
    target: o = Hn,
    eventName: l = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, d = Ad(t);
  return Bl(o, l, (u) => {
    u.repeat && et(i) || d(u) && a(u);
  }, r);
}
function Pl() {
  const e = M(!1), t = Te();
  return t && ce(() => {
    e.value = !0;
  }, t), e;
}
function Id(e) {
  const t = Pl();
  return B(() => (t.value, !!e()));
}
function Rd(e, t, a = {}) {
  const { window: n = Hn, ...o } = a;
  let l;
  const r = Id(() => n && "MutationObserver" in n), i = () => {
    l && (l.disconnect(), l = void 0);
  }, d = B(() => {
    const v = et(e), g = (Array.isArray(v) ? v : [v]).map(Ie).filter(kd);
    return new Set(g);
  }), u = J(
    () => d.value,
    (v) => {
      i(), r.value && v.size && (l = new MutationObserver(t), v.forEach((g) => l.observe(g, o)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => l == null ? void 0 : l.takeRecords(), p = () => {
    i(), u();
  };
  return Ia(p), {
    isSupported: r,
    stop: p,
    takeRecords: c
  };
}
function Vd(e) {
  return JSON.parse(JSON.stringify(e));
}
function fe(e, t, a, n = {}) {
  var o, l, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: v
  } = n, g = Te(), w = a || (g == null ? void 0 : g.emit) || ((o = g == null ? void 0 : g.$emit) == null ? void 0 : o.bind(g)) || ((r = (l = g == null ? void 0 : g.proxy) == null ? void 0 : l.$emit) == null ? void 0 : r.bind(g == null ? void 0 : g.proxy));
  let h = u;
  t || (t = "modelValue"), h = h || `update:${t.toString()}`;
  const x = ($) => i ? typeof i == "function" ? i($) : Vd($) : $, C = () => $d(e[t]) ? x(e[t]) : p, D = ($) => {
    v ? v($) && w(h, $) : w(h, $);
  };
  if (d) {
    const $ = C(), O = M($);
    let S = !1;
    return J(
      () => e[t],
      (A) => {
        S || (S = !0, O.value = x(A), te(() => S = !1));
      }
    ), J(
      O,
      (A) => {
        !S && (A !== e[t] || c) && D(A);
      },
      { deep: c }
    ), O;
  } else
    return B({
      get() {
        return C();
      },
      set($) {
        D($);
      }
    });
}
function Ra(e) {
  return e ? e.flatMap((t) => t.type === X ? Ra(t.children) : [t]) : [];
}
const Fd = ["INPUT", "TEXTAREA"];
function Ld(e, t, a, n = {}) {
  if (!t || n.enableIgnoredElement && Fd.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: l = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = !0,
    dir: d = "ltr",
    preventScroll: u = !0,
    focus: c = !1
  } = n, [p, v, g, w, h, x] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = g || w, D = p || v;
  if (!h && !x && (!C && !D || o === "vertical" && D || o === "horizontal" && C))
    return null;
  const $ = a ? Array.from(a.querySelectorAll(l)) : r;
  if (!$.length)
    return null;
  u && e.preventDefault();
  let O = null;
  return D || C ? O = Ol($, t, {
    goForward: C ? w : d === "ltr" ? p : v,
    loop: i
  }) : h ? O = $.at(0) || null : x && (O = $.at(-1) || null), c && (O == null || O.focus()), O;
}
function Ol(e, t, a, n = e.length) {
  if (--n === 0)
    return null;
  const o = e.indexOf(t), l = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (l < 0 || l >= e.length))
    return null;
  const r = (l + e.length) % e.length, i = e[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Ol(
    e,
    i,
    a,
    n
  ) : i : null;
}
function an(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function gn(e, t, a = ".", n) {
  if (!an(t))
    return gn(e, {}, a);
  const o = Object.assign({}, t);
  for (const l in e) {
    if (l === "__proto__" || l === "constructor")
      continue;
    const r = e[l];
    r != null && (Array.isArray(r) && Array.isArray(o[l]) ? o[l] = [...r, ...o[l]] : an(r) && an(o[l]) ? o[l] = gn(
      r,
      o[l],
      (a ? `${a}.` : "") + l.toString()
    ) : o[l] = r);
  }
  return o;
}
function Nd(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((a, n) => gn(a, n, ""), {})
  );
}
const zd = Nd(), [Va, Vv] = re("ConfigProvider");
let Wd = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", jd = (e = 21) => {
  let t = "", a = e;
  for (; a--; )
    t += Wd[Math.random() * 64 | 0];
  return t;
};
const Ud = Cd(() => {
  const e = M(/* @__PURE__ */ new Map()), t = M(), a = B(() => {
    for (const r of e.value.values())
      if (r)
        return !0;
    return !1;
  }), n = Va({
    scrollBody: M(!0)
  });
  let o = null;
  const l = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Po && (o == null || o()), t.value = void 0;
  };
  return J(a, (r, i) => {
    var d;
    if (!Ye)
      return;
    if (!r) {
      i && l();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, c = { padding: u, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? zd({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = `${p.padding}px`, document.body.style.marginRight = `${p.margin}px`, document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Po && (o = Bl(
      document,
      "touchmove",
      (v) => {
        var g;
        v.target === document.documentElement && (v.touches.length > 1 || (g = v.preventDefault) == null || g.call(v));
      },
      { passive: !1 }
    )), te(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function aa(e) {
  const t = jd(6), a = Ud();
  a.value.set(t, e ?? !1);
  const n = B({
    get: () => a.value.get(t) ?? !1,
    set: (o) => a.value.set(t, o)
  });
  return Md(() => {
    a.value.delete(t);
  }), n;
}
const Hd = "data-radix-vue-collection-item";
function na(e, t = Hd) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = M([]);
    function l() {
      const r = Ie(n);
      return r ? o.value = Array.from(
        r.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return Ts(() => {
      o.value = [];
    }), ce(l), Is(l), J(() => n == null ? void 0 : n.value, l, { immediate: !0 }), jo(a, o), o;
  }, injectCollection: () => Wo(a, M([])) };
}
function Kd(e) {
  const t = M(e);
  function a() {
    return t.value;
  }
  function n(h) {
    t.value = h;
  }
  function o(h, x) {
    return new Ne(t.value, x).format(h);
  }
  function l(h, x = !0) {
    return xi(h) && x ? o(Se(h), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Se(h), {
      dateStyle: "long"
    });
  }
  function r(h, x = {}) {
    return new Ne(t.value, { month: "long", year: "numeric", ...x }).format(h);
  }
  function i(h, x = {}) {
    return new Ne(t.value, { month: "long", ...x }).format(h);
  }
  function d() {
    const h = ll(It());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => ({ label: i(Se(h.set({ month: x }))), value: x }));
  }
  function u(h, x = {}) {
    return new Ne(t.value, { year: "numeric", ...x }).format(h);
  }
  function c(h, x) {
    return Rn(h) ? new Ne(t.value, {
      ...x,
      timeZone: h.timeZone
    }).formatToParts(Se(h)) : new Ne(t.value, x).formatToParts(Se(h));
  }
  function p(h, x = "narrow") {
    return new Ne(t.value, { weekday: x }).format(h);
  }
  function v(h) {
    var x;
    return ((x = new Ne(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(h).find((C) => C.type === "dayPeriod")) == null ? void 0 : x.value) === "PM" ? "PM" : "AM";
  }
  const g = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function w(h, x, C = {}) {
    const D = { ...g, ...C }, $ = c(h, D).find((O) => O.type === x);
    return $ ? $.value : "";
  }
  return {
    setLocale: n,
    getLocale: a,
    fullMonth: i,
    fullYear: u,
    fullMonthAndYear: r,
    toParts: c,
    custom: o,
    part: w,
    dayPeriod: v,
    selectedDate: l,
    dayOfWeek: p,
    getMonths: d
  };
}
function ft(e) {
  const t = Va({
    dir: M("ltr")
  });
  return B(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function mt(e) {
  const t = Te(), a = t == null ? void 0 : t.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), a == null || a.forEach((o) => {
    n[Ms(Lo(o))] = (...l) => e(o, ...l);
  }), n;
}
let nn = 0;
function Kn() {
  he((e) => {
    if (!Ye)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Oo()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Oo()
    ), nn++, e(() => {
      nn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), nn--;
    });
  });
}
function Oo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function Fa(e) {
  return B(() => {
    var t;
    return et(e) ? !!((t = Ie(e)) != null && t.closest("form")) : !0;
  });
}
function ie(e) {
  const t = Te(), a = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, l) => {
    const r = (t == null ? void 0 : t.type.props[l]).default;
    return r !== void 0 && (o[l] = r), o;
  }, {}), n = Fo(e);
  return B(() => {
    const o = {}, l = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(l).forEach((r) => {
      o[Lo(r)] = l[r];
    }), Object.keys({ ...a, ...o }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function ae(e, t) {
  const a = ie(e), n = t ? mt(t) : {};
  return B(() => ({
    ...a.value,
    ...n
  }));
}
function F() {
  const e = Te(), t = M(), a = B(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = t.value) == null ? void 0 : r.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Ie(t);
  }), n = Object.assign({}, e.exposed), o = {};
  for (const r in e.props)
    Object.defineProperty(o, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r]
    });
  if (Object.keys(n).length > 0)
    for (const r in n)
      Object.defineProperty(o, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function l(r) {
    t.value = r, !(r instanceof Element || !r) && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => r.$el
    }), e.exposed = o);
  }
  return { forwardRef: l, currentRef: t, currentElement: a };
}
var Gd = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, wt = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ new WeakMap(), va = {}, on = 0, Dl = function(e) {
  return e && (e.host || Dl(e.parentNode));
}, qd = function(e, t) {
  return t.map(function(a) {
    if (e.contains(a))
      return a;
    var n = Dl(a);
    return n && e.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, Yd = function(e, t, a, n) {
  var o = qd(t, Array.isArray(e) ? e : [e]);
  va[a] || (va[a] = /* @__PURE__ */ new WeakMap());
  var l = va[a], r = [], i = /* @__PURE__ */ new Set(), d = new Set(o), u = function(p) {
    !p || i.has(p) || (i.add(p), u(p.parentNode));
  };
  o.forEach(u);
  var c = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(v) {
      if (i.has(v))
        c(v);
      else
        try {
          var g = v.getAttribute(n), w = g !== null && g !== "false", h = (wt.get(v) || 0) + 1, x = (l.get(v) || 0) + 1;
          wt.set(v, h), l.set(v, x), r.push(v), h === 1 && w && ma.set(v, !0), x === 1 && v.setAttribute(a, "true"), w || v.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", v, C);
        }
    });
  };
  return c(t), i.clear(), on++, function() {
    r.forEach(function(p) {
      var v = wt.get(p) - 1, g = l.get(p) - 1;
      wt.set(p, v), l.set(p, g), v || (ma.has(p) || p.removeAttribute(n), ma.delete(p)), g || p.removeAttribute(a);
    }), on--, on || (wt = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ new WeakMap(), va = {});
  };
}, Zd = function(e, t, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = Gd(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), Yd(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function oa(e) {
  let t;
  J(() => Ie(e), (a) => {
    a ? t = Zd(a) : t && t();
  }), Qt(() => {
    t && t();
  });
}
let Jd = 0;
function ye(e, t = "radix") {
  const { useId: a } = Va({ useId: void 0 });
  return a && typeof a == "function" ? `${t}-${a()}` : `${t}-${++Jd}`;
}
function Xd(e) {
  const t = M(), a = B(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), n = B(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return ce(() => {
    const o = Ie(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const l = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let d, u;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          d = p.inlineSize, u = p.blockSize;
        } else
          d = o.offsetWidth, u = o.offsetHeight;
        t.value = { width: d, height: u };
      });
      return l.observe(o, { box: "border-box" }), () => l.unobserve(o);
    } else
      t.value = void 0;
  }), {
    width: a,
    height: n
  };
}
function Qd(e, t) {
  const a = M(e);
  function n(o) {
    return t[a.value][o] ?? a.value;
  }
  return {
    state: a,
    dispatch: (o) => {
      a.value = n(o);
    }
  };
}
function Gn(e) {
  const t = Ed("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, n) => {
      var o, l;
      if (!(e != null && e.value) && !n)
        return;
      t.value = t.value + a;
      const r = (e == null ? void 0 : e.value) ?? n, i = document.activeElement, d = ((l = (o = r.find((v) => v === i)) == null ? void 0 : o.textContent) == null ? void 0 : l.trim()) ?? "", u = r.map((v) => {
        var g;
        return ((g = v.textContent) == null ? void 0 : g.trim()) ?? "";
      }), c = tu(u, t.value, d), p = r.find(
        (v) => {
          var g;
          return ((g = v.textContent) == null ? void 0 : g.trim()) === c;
        }
      );
      return p && p.focus(), p;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function eu(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
function tu(e, t, a) {
  const n = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = a ? e.indexOf(a) : -1;
  let l = eu(e, Math.max(o, 0));
  n.length === 1 && (l = l.filter((i) => i !== a));
  const r = l.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return r !== a ? r : void 0;
}
function au() {
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
const qn = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const l = Ra(a.default()), r = l.findIndex((c) => c.type !== Bs);
      if (r === -1)
        return l;
      const i = l[r];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? E(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const u = Ps(i, d);
      for (const c in d)
        c.startsWith("on") && (u.props || (u.props = {}), u.props[c] = d[c]);
      return l.length === 1 ? u : (l[r] = u, l);
    };
  }
}), L = b({
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
  setup(e, { attrs: t, slots: a }) {
    const n = e.asChild ? "template" : e.as;
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => it(n, t) : n !== "template" ? () => it(e.as, t, { default: a.default }) : () => it(qn, t, { default: a.default });
  }
});
function La() {
  const e = M(), t = B(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = e.value) == null ? void 0 : a.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : Ie(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function nu(e, t) {
  const a = M({}), n = M("none"), o = e.value ? "mounted" : "unmounted", { state: l, dispatch: r } = Qd(o, {
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
  }), i = (v) => {
    var g;
    if (Ye) {
      const w = new CustomEvent(v, { bubbles: !1, cancelable: !1 });
      (g = t.value) == null || g.dispatchEvent(w);
    }
  };
  J(
    e,
    async (v, g) => {
      var w;
      const h = g !== v;
      if (await te(), h) {
        const x = n.value, C = ha(t.value);
        v ? (r("MOUNT"), i("enter"), C === "none" && i("after-enter")) : C === "none" || ((w = a.value) == null ? void 0 : w.display) === "none" ? (r("UNMOUNT"), i("leave"), i("after-leave")) : g && x !== C ? (r("ANIMATION_OUT"), i("leave")) : (r("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (v) => {
    const g = ha(t.value), w = g.includes(
      v.animationName
    ), h = l.value === "mounted" ? "enter" : "leave";
    v.target === t.value && w && (i(`after-${h}`), r("ANIMATION_END")), v.target === t.value && g === "none" && r("ANIMATION_END");
  }, u = (v) => {
    v.target === t.value && (n.value = ha(t.value));
  }, c = J(
    t,
    (v, g) => {
      v ? (a.value = getComputedStyle(v), v.addEventListener("animationstart", u), v.addEventListener("animationcancel", d), v.addEventListener("animationend", d)) : (r("ANIMATION_END"), g == null || g.removeEventListener("animationstart", u), g == null || g.removeEventListener("animationcancel", d), g == null || g.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), p = J(l, () => {
    const v = ha(t.value);
    n.value = l.value === "mounted" ? v : "none";
  });
  return Qt(() => {
    c(), p();
  }), {
    isPresent: B(
      () => ["mounted", "unmountSuspended"].includes(l.value)
    )
  };
}
function ha(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Re = b({
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
  setup(e, { slots: t, expose: a }) {
    var n;
    const { present: o, forceMount: l } = me(e), r = M(), { isPresent: i } = nu(o, r);
    a({ present: i });
    let d = t.default({ present: i });
    d = Ra(d || []);
    const u = Te();
    if (d && (d == null ? void 0 : d.length) > 1) {
      const c = (n = u == null ? void 0 : u.parent) != null && n.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((p) => `  - ${p}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => l.value || o.value || i.value ? it(t.default({ present: i })[0], {
      ref: (c) => {
        const p = Ie(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
}), [Ve, ou] = re("DialogRoot"), lu = /* @__PURE__ */ b({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = fe(a, "open", t, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = M(), l = M(), { modal: r } = me(a);
    return ou({
      open: n,
      modal: r,
      openModal: () => {
        n.value = !0;
      },
      onOpenChange: (i) => {
        n.value = i;
      },
      onOpenToggle: () => {
        n.value = !n.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: o,
      contentElement: l
    }), (i, d) => _(i.$slots, "default", { open: s(n) });
  }
}), su = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ve(), { forwardRef: n, currentElement: o } = F();
    return a.contentId || (a.contentId = ye(void 0, "radix-vue-dialog-content")), ce(() => {
      a.triggerElement.value = o.value;
    }), (l, r) => (f(), y(s(L), E(t, {
      ref: s(n),
      type: l.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(a).open.value || !1,
      "aria-controls": s(a).open.value ? s(a).contentId : void 0,
      "data-state": s(a).open.value ? "open" : "closed",
      onClick: s(a).onOpenToggle
    }), {
      default: m(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Na = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Pl();
    return (a, n) => s(t) || a.forceMount ? (f(), y(Bn, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      _(a.$slots, "default")
    ], 8, ["to", "disabled"])) : ee("", !0);
  }
}), Sl = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(Na), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ru = "dismissableLayer.pointerDownOutside", iu = "dismissableLayer.focusOutside";
function El(e, t) {
  const a = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function du(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1), l = M(() => {
  });
  return he((r) => {
    if (!Ye)
      return;
    const i = async (u) => {
      const c = u.target;
      if (t != null && t.value) {
        if (El(t.value, c)) {
          o.value = !1;
          return;
        }
        if (u.target && !o.value) {
          let p = function() {
            Un(
              ru,
              e,
              v
            );
          };
          const v = { originalEvent: u };
          u.pointerType === "touch" ? (n.removeEventListener("click", l.value), l.value = p, n.addEventListener("click", l.value, {
            once: !0
          })) : p();
        } else
          n.removeEventListener("click", l.value);
        o.value = !1;
      }
    }, d = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    r(() => {
      window.clearTimeout(d), n.removeEventListener("pointerdown", i), n.removeEventListener("click", l.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function uu(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1);
  return he((l) => {
    if (!Ye)
      return;
    const r = async (i) => {
      t != null && t.value && (await te(), !(!t.value || El(t.value, i.target)) && i.target && !o.value && Un(
        iu,
        e,
        { originalEvent: i }
      ));
    };
    n.addEventListener("focusin", r), l(() => n.removeEventListener("focusin", r));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const Le = No({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), la = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: l } = F(), r = B(
      () => {
        var w;
        return ((w = l.value) == null ? void 0 : w.ownerDocument) ?? globalThis.document;
      }
    ), i = B(() => Le.layersRoot), d = B(() => l.value ? Array.from(i.value).indexOf(l.value) : -1), u = B(() => Le.layersWithOutsidePointerEventsDisabled.size > 0), c = B(() => {
      const w = Array.from(i.value), [h] = [...Le.layersWithOutsidePointerEventsDisabled].slice(-1), x = w.indexOf(h);
      return d.value >= x;
    }), p = du(async (w) => {
      const h = [...Le.branches].some(
        (x) => x.contains(w.target)
      );
      !c.value || h || (n("pointerDownOutside", w), n("interactOutside", w), await te(), w.defaultPrevented || n("dismiss"));
    }, l), v = uu((w) => {
      [...Le.branches].some(
        (h) => h.contains(w.target)
      ) || (n("focusOutside", w), n("interactOutside", w), w.defaultPrevented || n("dismiss"));
    }, l);
    Td("Escape", (w) => {
      d.value === i.value.size - 1 && (n("escapeKeyDown", w), w.defaultPrevented || n("dismiss"));
    });
    let g;
    return he((w) => {
      l.value && (a.disableOutsidePointerEvents && (Le.layersWithOutsidePointerEventsDisabled.size === 0 && (g = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), Le.layersWithOutsidePointerEventsDisabled.add(l.value)), i.value.add(l.value), w(() => {
        a.disableOutsidePointerEvents && Le.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = g);
      }));
    }), he((w) => {
      w(() => {
        l.value && (i.value.delete(l.value), Le.layersWithOutsidePointerEventsDisabled.delete(l.value));
      });
    }), (w, h) => (f(), y(s(L), {
      ref: s(o),
      "as-child": w.asChild,
      as: w.as,
      "data-dismissable-layer": "",
      style: Da({
        pointerEvents: u.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(v).onFocusCapture,
      onBlurCapture: s(v).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: m(() => [
        _(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), ln = "focusScope.autoFocusOnMount", sn = "focusScope.autoFocusOnUnmount", Do = { bubbles: !1, cancelable: !0 };
function cu(e, { select: t = !1 } = {}) {
  const a = document.activeElement;
  for (const n of e)
    if (Qe(n, { select: t }), document.activeElement !== a)
      return !0;
}
function pu(e) {
  const t = Ml(e), a = So(t, e), n = So(t.reverse(), e);
  return [a, n];
}
function Ml(e) {
  const t = [], a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) t.push(a.currentNode);
  return t;
}
function So(e, t) {
  for (const a of e)
    if (!fu(a, { upTo: t }))
      return a;
}
function fu(e, { upTo: t }) {
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
function mu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Qe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const a = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== a && mu(e) && t && e.select();
  }
}
const vu = xd(() => M([]));
function hu() {
  const e = vu();
  return {
    add(t) {
      const a = e.value[0];
      t !== a && (a == null || a.pause()), e.value = Eo(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var a;
      e.value = Eo(e.value, t), (a = e.value[0]) == null || a.resume();
    }
  };
}
function Eo(e, t) {
  const a = [...e], n = a.indexOf(t);
  return n !== -1 && a.splice(n, 1), a;
}
function gu(e) {
  return e.filter((t) => t.tagName !== "A");
}
const za = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, n = t, { currentRef: o, currentElement: l } = F(), r = M(null), i = hu(), d = No({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    he((c) => {
      if (!Ye)
        return;
      const p = l.value;
      if (!a.trapped)
        return;
      function v(x) {
        if (d.paused || !p)
          return;
        const C = x.target;
        p.contains(C) ? r.value = C : Qe(r.value, { select: !0 });
      }
      function g(x) {
        if (d.paused || !p)
          return;
        const C = x.relatedTarget;
        C !== null && (p.contains(C) || Qe(r.value, { select: !0 }));
      }
      function w(x) {
        p.contains(r.value) || Qe(p);
      }
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const h = new MutationObserver(w);
      p && h.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), h.disconnect();
      });
    }), he(async (c) => {
      const p = l.value;
      if (await te(), !p)
        return;
      i.add(d);
      const v = document.activeElement;
      if (!p.contains(v)) {
        const g = new CustomEvent(ln, Do);
        p.addEventListener(ln, (w) => n("mountAutoFocus", w)), p.dispatchEvent(g), g.defaultPrevented || (cu(gu(Ml(p)), {
          select: !0
        }), document.activeElement === v && Qe(p));
      }
      c(() => {
        p.removeEventListener(ln, (h) => n("mountAutoFocus", h));
        const g = new CustomEvent(sn, Do), w = (h) => {
          n("unmountAutoFocus", h);
        };
        p.addEventListener(sn, w), p.dispatchEvent(g), setTimeout(() => {
          g.defaultPrevented || Qe(v ?? document.body, { select: !0 }), p.removeEventListener(sn, w), i.remove(d);
        }, 0);
      });
    });
    function u(c) {
      if (!a.loop && !a.trapped || d.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, v = document.activeElement;
      if (p && v) {
        const g = c.currentTarget, [w, h] = pu(g);
        w && h ? !c.shiftKey && v === h ? (c.preventDefault(), a.loop && Qe(w, { select: !0 })) : c.shiftKey && v === w && (c.preventDefault(), a.loop && Qe(h, { select: !0 })) : v === g && c.preventDefault();
      }
    }
    return (c, p) => (f(), y(s(L), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: u
    }, {
      default: m(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), yu = "menu.itemSelect", yn = ["Enter", " "], bu = ["ArrowDown", "PageUp", "Home"], Al = ["ArrowUp", "PageDown", "End"], wu = [...bu, ...Al], _u = {
  ltr: [...yn, "ArrowRight"],
  rtl: [...yn, "ArrowLeft"]
}, xu = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Yn(e) {
  return e ? "open" : "closed";
}
function Ba(e) {
  return e === "indeterminate";
}
function Zn(e) {
  return Ba(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function bn(e) {
  const t = document.activeElement;
  for (const a of e)
    if (a === t || (a.focus(), document.activeElement !== t))
      return;
}
function Cu(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let l = 0, r = t.length - 1; l < t.length; r = l++) {
    const i = t[l].x, d = t[l].y, u = t[r].x, c = t[r].y;
    d > n != c > n && a < (u - i) * (n - d) / (c - d) + i && (o = !o);
  }
  return o;
}
function $u(e, t) {
  if (!t)
    return !1;
  const a = { x: e.clientX, y: e.clientY };
  return Cu(a, t);
}
function Yt(e) {
  return e.pointerType === "mouse";
}
const ku = "DialogTitle", Bu = "DialogContent";
function Pu({
  titleName: e = ku,
  contentName: t = Bu,
  componentLink: a = "dialog.html#title",
  titleId: n,
  descriptionId: o,
  contentElement: l
}) {
  const r = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${a}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ce(() => {
    var d;
    document.getElementById(n) || console.warn(r);
    const u = (d = l.value) == null ? void 0 : d.getAttribute("aria-describedby");
    o && !u && (document.getElementById(o) || console.warn(i));
  });
}
const Tl = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Ve(), { forwardRef: l, currentElement: r } = F();
    return o.titleId || (o.titleId = ye(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = ye(void 0, "radix-vue-dialog-description")), ce(() => {
      o.contentElement = r, document.activeElement !== document.body && (o.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && Pu({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: o.contentElement
    }), (i, d) => (f(), y(s(za), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: m(() => [
        P(s(la), E({
          id: s(o).contentId,
          ref: s(l),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(o).descriptionId,
          "aria-labelledby": s(o).titleId,
          "data-state": s(Yn)(s(o).open.value)
        }, i.$attrs, {
          onDismiss: d[0] || (d[0] = (u) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[2] || (d[2] = (u) => n("focusOutside", u)),
          onInteractOutside: d[3] || (d[3] = (u) => n("interactOutside", u)),
          onPointerDownOutside: d[4] || (d[4] = (u) => n("pointerDownOutside", u))
        }), {
          default: m(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Ou = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Ve(), l = mt(n), { forwardRef: r, currentElement: i } = F();
    return oa(i), (d, u) => (f(), y(Tl, E({ ...a, ...s(l) }, {
      ref: s(r),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = s(o).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: u[1] || (u[1] = (c) => {
        const p = c.detail.originalEvent, v = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || v) && c.preventDefault();
      }),
      onFocusOutside: u[2] || (u[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: m(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Du = /* @__PURE__ */ b({
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
    const a = e, n = mt(t);
    F();
    const o = Ve(), l = M(!1), r = M(!1);
    return (i, d) => (f(), y(Tl, E({ ...a, ...s(n) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (u) => {
        var c;
        u.defaultPrevented || (l.value || (c = s(o).triggerElement.value) == null || c.focus(), u.preventDefault()), l.value = !1, r.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (u) => {
        var c;
        u.defaultPrevented || (l.value = !0, u.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const p = u.target;
        (c = s(o).triggerElement.value) != null && c.contains(p) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && r.value && u.preventDefault();
      })
    }), {
      default: m(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Il = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Ve(), l = mt(n), { forwardRef: r } = F();
    return (i, d) => (f(), y(s(Re), {
      present: i.forceMount || s(o).open.value
    }, {
      default: m(() => [
        s(o).modal.value ? (f(), y(Ou, E({
          key: 0,
          ref: s(r)
        }, { ...a, ...s(l), ...i.$attrs }), {
          default: m(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), y(Du, E({
          key: 1,
          ref: s(r)
        }, { ...a, ...s(l), ...i.$attrs }), {
          default: m(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Su = /* @__PURE__ */ b({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ve();
    return aa(!0), F(), (a, n) => (f(), y(s(L), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": s(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Rl = /* @__PURE__ */ b({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ve(), { forwardRef: a } = F();
    return (n, o) => {
      var l;
      return (l = s(t)) != null && l.modal.value ? (f(), y(s(Re), {
        key: 0,
        present: n.forceMount || s(t).open.value
      }, {
        default: m(() => [
          P(Su, E(n.$attrs, {
            ref: s(a),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: m(() => [
              _(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : ee("", !0);
    };
  }
}), Jn = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const a = Ve();
    return (n, o) => (f(), y(s(L), E(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (l) => s(a).onOpenChange(!1))
    }), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Eu = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, a = Ve();
    return F(), (n, o) => (f(), y(s(L), E(t, {
      id: s(a).titleId
    }), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Mu = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    F();
    const a = Ve();
    return (n, o) => (f(), y(s(L), E(t, {
      id: s(a).descriptionId
    }), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function Au(e) {
  function t(n) {
    return Array.isArray(e.date.value) ? e.date.value.some((o) => kt(o, n)) : e.date.value ? kt(e.date.value, n) : !1;
  }
  const a = B(
    () => {
      var n, o, l, r;
      if (Array.isArray(e.date.value)) {
        if (!e.date.value.length)
          return !1;
        for (const i of e.date.value)
          if ((n = e.isDateDisabled) != null && n.call(e, i) || (o = e.isDateUnavailable) != null && o.call(e, i))
            return !0;
      } else {
        if (!e.date.value)
          return !1;
        if ((l = e.isDateDisabled) != null && l.call(e, e.date.value) || (r = e.isDateUnavailable) != null && r.call(e, e.date.value))
          return !0;
      }
      return !1;
    }
  );
  return {
    isDateSelected: t,
    isInvalid: a
  };
}
function Tu(e, t) {
  const a = t(e), n = a.compare(e), o = {};
  return n >= 7 && (o.day = 1), n >= Kt(e) && (o.month = 1), a.set({ ...o });
}
function Iu(e, t) {
  const a = t(e), n = e.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= Kt(e) && (o.month = 13), a.set({ ...o });
}
function Ru(e, t) {
  return t(e);
}
function Vu(e, t) {
  return t(e);
}
function Fu(e) {
  const t = Kd(e.locale.value), a = B(() => {
    const h = {
      calendar: e.placeholder.value.calendar.identifier
    };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (h.era = "short"), h;
  }), n = M(st({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), o = B(() => n.value.map((h) => h.value));
  function l(h) {
    return !o.value.some((x) => co(h, x));
  }
  const r = (h = "month", x) => {
    if (!e.maxValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[n.value.length - 1].value;
    if (x || e.nextPage.value) {
      const $ = Tu(C, x || e.nextPage.value);
      return pa($, e.maxValue.value);
    }
    if (h === "year") {
      const $ = C.add({ years: 1 }).set({ day: 1, month: 1 });
      return pa($, e.maxValue.value);
    }
    const D = C.add({ months: 1 }).set({ day: 1 });
    return pa(D, e.maxValue.value);
  }, i = (h = "month", x) => {
    if (!e.minValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[0].value;
    if (x || e.prevPage.value) {
      const $ = Iu(C, x || e.prevPage.value);
      return ca($, e.minValue.value);
    }
    if (h === "year") {
      const $ = C.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return ca($, e.minValue.value);
    }
    const D = C.subtract({ months: 1 }).set({ day: 35 });
    return ca(D, e.minValue.value);
  };
  function d(h) {
    var x;
    return !!((x = e.isDateDisabled) != null && x.call(e, h) || e.disabled.value || e.maxValue.value && pa(h, e.maxValue.value) || e.minValue.value && ca(h, e.minValue.value));
  }
  const u = (h) => {
    var x;
    return !!((x = e.isDateUnavailable) != null && x.call(e, h));
  }, c = B(() => n.value.length ? n.value[0].rows[0].map((h) => t.dayOfWeek(Se(h), e.weekdayFormat.value)) : []), p = (h = "month", x) => {
    const C = n.value[0].value;
    if (x || e.nextPage.value) {
      const O = Ru(C, x || e.nextPage.value), S = st({
        dateObj: O,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = S;
      const A = {};
      if (!x) {
        const T = S[0].value.compare(C);
        T >= Kt(C) && (A.day = 1), T >= 365 && (A.month = 1);
      }
      e.placeholder.value = S[0].value.set({ ...A });
      return;
    }
    const D = h === "month" ? C.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.add({ years: 1 }), $ = st({
      dateObj: D,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = $, e.placeholder.value = $[0].value.set({ day: 1 });
  }, v = (h = "month", x) => {
    const C = n.value[0].value;
    if (x || e.prevPage.value) {
      const O = Vu(C, x || e.prevPage.value), S = st({
        dateObj: O,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = S;
      const A = {};
      if (!x) {
        const T = C.compare(S[0].value);
        T >= Kt(C) && (A.day = 1), T >= 365 && (A.month = 1);
      }
      e.placeholder.value = S[0].value.set({ ...A });
      return;
    }
    const D = h === "month" ? C.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.subtract({ years: 1 }), $ = st({
      dateObj: D,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = $, e.placeholder.value = $[0].value.set({ day: 1 });
  };
  J(e.placeholder, (h) => {
    o.value.some((x) => co(x, h)) || (n.value = st({
      dateObj: h,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), J([e.locale, e.weekStartsOn, e.fixedWeeks, e.numberOfMonths], () => {
    n.value = st({
      dateObj: e.placeholder.value,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
  });
  const g = B(() => {
    if (!n.value.length)
      return "";
    if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value), n.value.length === 1) {
      const S = n.value[0].value;
      return `${t.fullMonthAndYear(Se(S), a.value)}`;
    }
    const h = Se(n.value[0].value), x = Se(n.value[n.value.length - 1].value), C = t.fullMonth(h, a.value), D = t.fullMonth(x, a.value), $ = t.fullYear(h, a.value), O = t.fullYear(x, a.value);
    return $ === O ? `${C} - ${D} ${O}` : `${C} ${$} - ${D} ${O}`;
  }), w = B(() => `${e.calendarLabel.value ?? "Event Date"}, ${g.value}`);
  return {
    isDateDisabled: d,
    isDateUnavailable: u,
    isNextButtonDisabled: r,
    isPrevButtonDisabled: i,
    grid: n,
    weekdays: c,
    visibleView: o,
    isOutsideVisibleView: l,
    formatter: t,
    nextPage: p,
    prevPage: v,
    headingValue: g,
    fullCalendarLabel: w
  };
}
const Lu = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Nu = {
  role: "heading",
  "aria-level": "2"
}, [Vt, zu] = re("CalendarRoot"), Wu = /* @__PURE__ */ b({
  __name: "CalendarRoot",
  props: {
    modelValue: {},
    multiple: { type: Boolean, default: !1 },
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    pagedNavigation: { type: Boolean, default: !1 },
    preventDeselect: { type: Boolean, default: !1 },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    calendarLabel: {},
    fixedWeeks: { type: Boolean, default: !1 },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    numberOfMonths: { default: 1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    initialFocus: { type: Boolean, default: !1 },
    isDateDisabled: { type: Function, default: void 0 },
    isDateUnavailable: { type: Function, default: void 0 },
    dir: {},
    nextPage: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(e, { emit: t }) {
    const a = e, n = t, {
      locale: o,
      disabled: l,
      readonly: r,
      initialFocus: i,
      pagedNavigation: d,
      weekStartsOn: u,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: v,
      minValue: g,
      maxValue: w,
      numberOfMonths: h,
      preventDeselect: x,
      isDateDisabled: C,
      isDateUnavailable: D,
      calendarLabel: $,
      defaultValue: O,
      nextPage: S,
      prevPage: A,
      dir: T
    } = me(a), { primitiveElement: W, currentElement: j } = La(), k = ft(T), I = fe(a, "modelValue", n, {
      defaultValue: O.value,
      passive: a.modelValue === void 0
    }), V = bd({
      defaultPlaceholder: a.placeholder,
      defaultValue: I.value
    }), ne = fe(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? V.copy(),
      passive: a.placeholder === void 0
    });
    function Z(le) {
      ne.value = le.copy();
    }
    const {
      fullCalendarLabel: N,
      headingValue: H,
      isDateDisabled: oe,
      isDateUnavailable: ue,
      isNextButtonDisabled: pe,
      isPrevButtonDisabled: ke,
      weekdays: be,
      isOutsideVisibleView: ja,
      nextPage: zt,
      prevPage: Ua,
      formatter: yt,
      grid: Ha
    } = Fu({
      locale: o,
      placeholder: ne,
      weekStartsOn: u,
      fixedWeeks: p,
      numberOfMonths: h,
      minValue: g,
      maxValue: w,
      disabled: l,
      weekdayFormat: c,
      pagedNavigation: d,
      isDateDisabled: C.value,
      isDateUnavailable: D.value,
      calendarLabel: $,
      nextPage: S,
      prevPage: A
    }), {
      isInvalid: De,
      isDateSelected: Be
    } = Au({
      date: I,
      isDateDisabled: oe,
      isDateUnavailable: ue
    });
    J(I, (le) => {
      if (Array.isArray(le) && le.length) {
        const _e = le[le.length - 1];
        _e && !Ya(ne.value, _e) && Z(_e);
      } else !Array.isArray(le) && le && !Ya(ne.value, le) && Z(le);
    });
    function ot(le) {
      if (v.value) {
        if (Array.isArray(I.value)) {
          if (!I.value) {
            I.value = [le.copy()];
            return;
          }
          if (I.value.findIndex((_e) => kt(_e, le)) === -1)
            I.value = [...I.value, le];
          else if (!x.value) {
            const _e = I.value.filter((lt) => !kt(lt, le));
            if (!_e.length) {
              ne.value = le.copy(), I.value = void 0;
              return;
            }
            I.value = _e.map((lt) => lt.copy());
          }
        }
      } else {
        if (!I.value) {
          I.value = le.copy();
          return;
        }
        !x.value && Ya(I.value, le) ? (ne.value = le.copy(), I.value = void 0) : I.value = le.copy();
      }
    }
    return ce(() => {
      i.value && wd(j.value);
    }), zu({
      isDateUnavailable: ue,
      dir: k,
      isDateDisabled: oe,
      locale: o,
      formatter: yt,
      modelValue: I,
      placeholder: ne,
      disabled: l,
      initialFocus: i,
      pagedNavigation: d,
      weekStartsOn: u,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: v,
      numberOfMonths: h,
      readonly: r,
      preventDeselect: x,
      fullCalendarLabel: N,
      headingValue: H,
      isInvalid: De,
      isDateSelected: Be,
      isNextButtonDisabled: pe,
      isPrevButtonDisabled: ke,
      isOutsideVisibleView: ja,
      nextPage: zt,
      prevPage: Ua,
      parentElement: j,
      onPlaceholderChange: Z,
      onDateChange: ot
    }), (le, _e) => (f(), y(s(L), {
      ref_key: "primitiveElement",
      ref: W,
      as: le.as,
      "as-child": le.asChild,
      role: "application",
      "aria-label": s(N),
      "data-readonly": s(r) ? "" : void 0,
      "data-disabled": s(l) ? "" : void 0,
      "data-invalid": s(De) ? "" : void 0,
      dir: s(k)
    }, {
      default: m(() => [
        _(le.$slots, "default", {
          date: s(ne),
          grid: s(Ha),
          weekDays: s(be),
          weekStartsOn: s(u),
          locale: s(o),
          fixedWeeks: s(p)
        }),
        K("div", Lu, [
          K("div", Nu, Q(s(N)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), ju = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(L), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uu = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = Vt();
    return (n, o) => (f(), y(s(L), E(t, {
      "data-disabled": s(a).disabled.value ? "" : void 0
    }), {
      default: m(() => [
        _(n.$slots, "default", {
          headingValue: s(a).headingValue.value
        }, () => [
          Y(Q(s(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Hu = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = Vt(), n = B(() => a.disabled.value ? !0 : void 0), o = B(() => a.readonly.value ? !0 : void 0);
    return (l, r) => (f(), y(s(L), E(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: m(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Ku = /* @__PURE__ */ b({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = Vt();
    return (a, n) => {
      var o, l;
      return f(), y(s(L), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": s(t).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": s(t).isDateDisabled(a.date) || ((l = (o = s(t)).isDateUnavailable) == null ? void 0 : l.call(o, a.date)),
        "data-disabled": s(t).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: m(() => [
          _(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Gu = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(L), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qu = /* @__PURE__ */ b({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = B(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = Vt();
    return (o, l) => (f(), y(s(L), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (r) => s(n).nextPage(t.step, t.nextPage))
    }, {
      default: m(() => [
        _(o.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Yu = /* @__PURE__ */ b({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = B(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = Vt();
    return (o, l) => (f(), y(s(L), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (r) => s(n).prevPage(t.step, t.prevPage))
    }, {
      default: m(() => [
        _(o.$slots, "default", {}, () => [
          Y("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Zu = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(L), E(t, { "aria-hidden": "true" }), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ju = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(L), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xu = /* @__PURE__ */ b({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(L), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qu = /* @__PURE__ */ b({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = au(), n = Vt(), { primitiveElement: o, currentElement: l } = La(), r = B(() => t.day.day.toLocaleString(n.locale.value)), i = B(() => n.formatter.custom(Se(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), d = B(() => n.isDateDisabled(t.day)), u = B(
      () => {
        var $;
        return ($ = n.isDateUnavailable) == null ? void 0 : $.call(n, t.day);
      }
    ), c = B(() => Hr(t.day, It())), p = B(() => !Ur(t.day, t.month)), v = B(
      () => n.isOutsideVisibleView(t.day)
    ), g = B(() => !n.disabled.value && kt(t.day, n.placeholder.value)), w = B(() => n.isDateSelected(t.day)), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function x($) {
      var O;
      n.readonly.value || n.isDateDisabled($) || (O = n.isDateUnavailable) != null && O.call(n, $) || n.onDateChange($);
    }
    function C() {
      x(t.day);
    }
    function D($) {
      $.preventDefault(), $.stopPropagation();
      const O = n.parentElement.value, S = O ? Array.from(O.querySelectorAll(h)) : [];
      let A = S.indexOf(l.value);
      const T = 7, W = n.dir.value === "rtl" ? -1 : 1;
      switch ($.code) {
        case a.ARROW_RIGHT:
          A += W;
          break;
        case a.ARROW_LEFT:
          A -= W;
          break;
        case a.ARROW_UP:
          A -= T;
          break;
        case a.ARROW_DOWN:
          A += T;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          x(t.day);
          return;
        default:
          return;
      }
      if (A >= 0 && A < S.length) {
        S[A].focus();
        return;
      }
      if (A < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), te(() => {
          const j = O ? Array.from(O.querySelectorAll(h)) : [];
          j[j.length - Math.abs(A)].focus();
        });
        return;
      }
      if (A >= S.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), te(() => {
          (O ? Array.from(O.querySelectorAll(h)) : [])[A - S.length].focus();
        });
      }
    }
    return ($, O) => (f(), y(s(L), E({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": p.value || d.value || u.value ? !0 : void 0,
      "data-selected": w.value ? !0 : void 0,
      "data-value": $.day.toString(),
      "data-disabled": d.value || p.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": c.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": v.value ? "" : void 0,
      "data-focused": g.value ? "" : void 0,
      tabindex: g.value ? 0 : p.value || d.value ? void 0 : -1,
      onClick: C,
      onKeydown: [
        He(D, ["up", "down", "left", "right", "space", "enter"]),
        O[0] || (O[0] = He(we(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: m(() => [
        _($.$slots, "default", { dayValue: r.value }, () => [
          Y(Q(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Pa(e) {
  return e === "indeterminate";
}
function Vl(e) {
  return Pa(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const ec = ["value", "checked", "name", "disabled", "required"], [tc, ac] = re("CheckboxRoot"), nc = /* @__PURE__ */ b({
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
    const a = e, n = t, { disabled: o } = me(a), l = fe(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    }), { forwardRef: r, currentElement: i } = F(), d = Fa(i), u = B(() => {
      var c;
      return a.id && i.value ? (c = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return ac({
      disabled: o,
      state: l
    }), (c, p) => (f(), R(X, null, [
      P(s(L), E(c.$attrs, {
        id: c.id,
        ref: s(r),
        role: "checkbox",
        "as-child": a.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": s(Pa)(s(l)) ? "mixed" : s(l),
        "aria-required": !1,
        "aria-label": c.$attrs["aria-label"] || u.value,
        "data-state": s(Vl)(s(l)),
        "data-disabled": s(o) ? "" : void 0,
        disabled: s(o),
        onKeydown: He(we(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (v) => l.value = s(Pa)(s(l)) ? !0 : !s(l))
      }), {
        default: m(() => [
          _(c.$slots, "default", { checked: s(l) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      s(d) ? (f(), R("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "",
        value: c.value,
        checked: !!s(l),
        name: a.name,
        disabled: a.disabled,
        required: a.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, ec)) : ee("", !0)
    ], 64));
  }
}), oc = /* @__PURE__ */ b({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = F(), a = tc();
    return (n, o) => (f(), y(s(Re), {
      present: n.forceMount || s(Pa)(s(a).state.value) || s(a).state.value === !0
    }, {
      default: m(() => [
        P(s(L), E({
          ref: s(t),
          "data-state": s(Vl)(s(a).state.value),
          "data-disabled": s(a).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: m(() => [
            _(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Fl, lc] = re("PopperRoot"), sa = /* @__PURE__ */ b({
  __name: "PopperRoot",
  setup(e) {
    const t = M();
    return lc({
      anchor: t,
      onAnchorChange: (a) => t.value = a
    }), (a, n) => _(a.$slots, "default");
  }
}), Xn = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = F(), o = Fl();
    return J(n, () => {
      o.onAnchorChange(t.element ?? n.value);
    }), (l, r) => (f(), y(s(L), {
      ref: s(a),
      as: l.as,
      "as-child": l.asChild
    }, {
      default: m(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function sc(e) {
  return e !== null;
}
function rc(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var a, n, o;
      const { placement: l, rects: r, middlewareData: i } = t, d = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, u = d ? 0 : e.arrowWidth, c = d ? 0 : e.arrowHeight, [p, v] = wn(l), g = { start: "0%", center: "50%", end: "100%" }[v], w = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + u / 2, h = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + c / 2;
      let x = "", C = "";
      return p === "bottom" ? (x = d ? g : `${w}px`, C = `${-c}px`) : p === "top" ? (x = d ? g : `${w}px`, C = `${r.floating.height + c}px`) : p === "right" ? (x = `${-c}px`, C = d ? g : `${h}px`) : p === "left" && (x = `${r.floating.width + c}px`, C = d ? g : `${h}px`), { data: { x, y: C } };
    }
  };
}
function wn(e) {
  const [t, a = "center"] = e.split("-");
  return [t, a];
}
const Ll = {
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
}, [Fv, ic] = re("PopperContent"), Zt = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Ho({
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
    ...Ll
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Fl(), { forwardRef: l, currentElement: r } = F(), i = M(), d = M(), { width: u, height: c } = Xd(d), p = B(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), v = B(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), g = B(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), w = B(() => ({
      padding: v.value,
      boundary: g.value.filter(sc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: g.value.length > 0
    })), h = _d(() => [
      sd({
        mainAxis: a.sideOffset + c.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && $o({
        ...w.value
      }),
      a.avoidCollisions && rd({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? cd() : void 0,
        ...w.value
      }),
      !a.prioritizePosition && a.avoidCollisions && $o({
        ...w.value
      }),
      id({
        ...w.value,
        apply: ({ elements: k, rects: I, availableWidth: V, availableHeight: ne }) => {
          const { width: Z, height: N } = I.reference, H = k.floating.style;
          H.setProperty(
            "--radix-popper-available-width",
            `${V}px`
          ), H.setProperty(
            "--radix-popper-available-height",
            `${ne}px`
          ), H.setProperty(
            "--radix-popper-anchor-width",
            `${Z}px`
          ), H.setProperty(
            "--radix-popper-anchor-height",
            `${N}px`
          );
        }
      }),
      d.value && md({ element: d.value, padding: a.arrowPadding }),
      rc({
        arrowWidth: u.value,
        arrowHeight: c.value
      }),
      a.hideWhenDetached && dd({ strategy: "referenceHidden", ...w.value })
    ]), { floatingStyles: x, placement: C, isPositioned: D, middlewareData: $ } = vd(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...k) => ld(...k, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: h
      }
    ), O = B(
      () => wn(C.value)[0]
    ), S = B(
      () => wn(C.value)[1]
    );
    he(() => {
      D.value && n("placed");
    });
    const A = B(
      () => {
        var k;
        return ((k = $.value.arrow) == null ? void 0 : k.centerOffset) !== 0;
      }
    ), T = M("");
    he(() => {
      r.value && (T.value = window.getComputedStyle(r.value).zIndex);
    });
    const W = B(() => {
      var k;
      return ((k = $.value.arrow) == null ? void 0 : k.x) ?? 0;
    }), j = B(() => {
      var k;
      return ((k = $.value.arrow) == null ? void 0 : k.y) ?? 0;
    });
    return ic({
      placedSide: O,
      onArrowChange: (k) => d.value = k,
      arrowX: W,
      arrowY: j,
      shouldHideArrow: A
    }), (k, I) => {
      var V, ne, Z;
      return f(), R("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Da({
          ...s(x),
          transform: s(D) ? s(x).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: T.value,
          "--radix-popper-transform-origin": [
            (V = s($).transformOrigin) == null ? void 0 : V.x,
            (ne = s($).transformOrigin) == null ? void 0 : ne.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Z = s($).hide) == null ? void 0 : Z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        P(s(L), E({ ref: s(l) }, k.$attrs, {
          "as-child": a.asChild,
          as: k.as,
          "data-side": O.value,
          "data-align": S.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(D) ? void 0 : "none"
          }
        }), {
          default: m(() => [
            _(k.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Nl = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return F(), (t, a) => (f(), y(s(L), {
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
      default: m(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), dc = /* @__PURE__ */ b({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, a = B(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([l, r]) => ({ name: `[${o}][${t.name}][${l}]`, value: r })) : { name: `[${t.name}][${o}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, o]) => ({ name: `[${t.name}][${n}]`, value: o })) : []);
    return (n, o) => (f(!0), R(X, null, ve(a.value, (l) => (f(), y(Nl, {
      key: l.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: l.name,
      value: l.value,
      required: n.required,
      disabled: n.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), uc = "data-radix-vue-collection-item", [Qn, cc] = re("CollectionProvider");
function zl(e = uc) {
  const t = M(/* @__PURE__ */ new Map()), a = M(), n = cc({
    collectionRef: a,
    itemMap: t,
    attrName: e
  }), { getItems: o } = jl(n), l = B(() => Array.from(n.itemMap.value.values())), r = B(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: l, itemMapSize: r };
}
const Wl = b({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const a = Qn(), { primitiveElement: n, currentElement: o } = La();
    return J(o, () => {
      a.collectionRef.value = o.value;
    }), () => it(qn, { ref: n }, t);
  }
}), eo = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: a }) {
    const n = Qn(), { primitiveElement: o, currentElement: l } = La();
    return he((r) => {
      if (l.value) {
        const i = Os(l.value);
        n.itemMap.value.set(i, { ref: l.value, value: e.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => it(qn, { ...a, [n.attrName]: "", ref: o }, t);
  }
});
function jl(e) {
  const t = e ?? Qn();
  return { getItems: () => {
    const a = t.collectionRef.value;
    if (!a)
      return [];
    const n = Array.from(a.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (o, l) => n.indexOf(o.ref) - n.indexOf(l.ref)
    );
  } };
}
const [Ft, pc] = re("ComboboxRoot"), fc = /* @__PURE__ */ b({
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
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm", "update:selectedValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, { multiple: o, disabled: l, dir: r } = me(a), i = ft(r), d = fe(a, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: a.searchTerm === void 0
    }), u = fe(a, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: a.defaultValue ?? o.value ? [] : void 0,
      passive: a.modelValue === void 0,
      deep: !0
    }), c = fe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), p = fe(a, "selectedValue", n, {
      defaultValue: void 0,
      passive: a.selectedValue === void 0
    });
    async function v(N) {
      var H, oe;
      c.value = N, await te(), N ? (u.value && (Array.isArray(u.value) && o.value ? p.value = (H = $().find((ue) => {
        var pe, ke;
        return ((ke = (pe = ue.ref) == null ? void 0 : pe.dataset) == null ? void 0 : ke.state) === "checked";
      })) == null ? void 0 : H.value : p.value = u.value), (oe = h.value) == null || oe.focus(), ne()) : (w.value = !1, a.resetSearchTermOnBlur && W());
    }
    function g(N) {
      if (Array.isArray(u.value) && o.value) {
        const H = u.value.findIndex((ue) => rt(ue, N)), oe = [...u.value];
        H === -1 ? oe.push(N) : oe.splice(H, 1), u.value = oe;
      } else
        u.value = N, v(!1);
    }
    const w = M(!1), h = M(), x = M(), { forwardRef: C, currentElement: D } = F(), { getItems: $, reactiveItems: O, itemMapSize: S } = zl("data-radix-vue-combobox-item"), A = M([]);
    J(() => S.value, () => {
      A.value = $().map((N) => N.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const T = B(() => {
      if (w.value) {
        if (a.filterFunction)
          return a.filterFunction(A.value, d.value);
        const N = A.value.filter((H) => typeof H == "string");
        if (N.length)
          return N.filter((H) => {
            var oe;
            return H.toLowerCase().includes((oe = d.value) == null ? void 0 : oe.toLowerCase());
          });
      }
      return A.value;
    });
    function W() {
      !o.value && u.value && !Array.isArray(u.value) ? a.displayValue ? d.value = a.displayValue(u.value) : typeof u.value != "object" ? d.value = u.value.toString() : d.value = "" : d.value = "";
    }
    const j = B(() => T.value.findIndex((N) => rt(N, p.value))), k = B(() => {
      var N;
      return (N = O.value.find((H) => rt(H.value, p.value))) == null ? void 0 : N.ref;
    }), I = B(() => JSON.stringify(u.value));
    J(I, async () => {
      await te(), await te(), W();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), J(() => [T.value.length, d.value.length], async ([N, H], [oe, ue]) => {
      await te(), await te(), N && (ue > H || j.value === -1) && (p.value = T.value[0]);
    });
    const V = Fa(D);
    function ne() {
      k.value instanceof Element && k.value.scrollIntoView({ block: "nearest" });
    }
    function Z() {
      k.value instanceof Element && k.value.focus && k.value.focus();
    }
    return pc({
      searchTerm: d,
      modelValue: u,
      // @ts-expect-error ignoring
      onValueChange: g,
      isUserInputted: w,
      multiple: o,
      disabled: l,
      open: c,
      onOpenChange: v,
      filteredOptions: T,
      contentId: "",
      inputElement: h,
      selectedElement: k,
      onInputElementChange: (N) => h.value = N,
      onInputNavigation: async (N) => {
        const H = j.value;
        H === 0 && N === "up" || H === T.value.length - 1 && N === "down" || (H === -1 && T.value.length || N === "home" ? p.value = T.value[0] : N === "end" ? p.value = T.value[T.value.length - 1] : p.value = T.value[N === "up" ? H - 1 : H + 1], ne(), Z(), te(() => {
          var oe;
          return (oe = h.value) == null ? void 0 : oe.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async () => {
        var N;
        T.value.length && p.value && k.value instanceof Element && ((N = k.value) == null || N.click());
      },
      selectedValue: p,
      onSelectedValueChange: (N) => p.value = N,
      parentElement: D,
      contentElement: x,
      onContentElementChange: (N) => x.value = N
    }), (N, H) => (f(), y(s(sa), null, {
      default: m(() => [
        P(s(L), E({
          ref: s(C),
          style: {
            pointerEvents: s(c) ? "auto" : void 0
          },
          as: N.as,
          "as-child": N.asChild,
          dir: s(i)
        }, N.$attrs), {
          default: m(() => [
            _(N.$slots, "default", {
              open: s(c),
              modelValue: s(u)
            }),
            s(V) && a.name ? (f(), y(s(dc), {
              key: 0,
              name: a.name,
              value: s(u)
            }, null, 8, ["name", "value"])) : ee("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), mc = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, a = Ft(), { forwardRef: n, currentElement: o } = F();
    ce(() => {
      const c = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      c && (a.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const l = B(() => t.disabled || a.disabled.value || !1), r = M();
    Ds(() => {
      var c;
      return r.value = (c = a.selectedElement.value) == null ? void 0 : c.id;
    });
    function i(c) {
      a.open.value ? a.onInputNavigation(c.key === "ArrowUp" ? "up" : "down") : a.onOpenChange(!0);
    }
    function d(c) {
      a.open.value && a.onInputNavigation(c.key === "Home" ? "home" : "end");
    }
    function u(c) {
      var p;
      a.searchTerm.value = (p = c.target) == null ? void 0 : p.value, a.open.value || a.onOpenChange(!0), a.isUserInputted.value = !0;
    }
    return (c, p) => (f(), y(s(L), {
      ref: s(n),
      as: c.as,
      "as-child": c.asChild,
      type: c.type,
      disabled: l.value,
      value: s(a).searchTerm.value,
      "aria-expanded": s(a).open.value,
      "aria-controls": s(a).contentId,
      "aria-disabled": l.value ?? void 0,
      "aria-activedescendant": r.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: u,
      onKeydown: [
        He(we(i, ["prevent"]), ["down", "up"]),
        He(s(a).onInputEnter, ["enter"]),
        He(we(d, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: m(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), [Ul, vc] = re("ComboboxGroup"), hc = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: a, currentElement: n } = F(), o = ye(void 0, "radix-vue-combobox-group"), l = Ft(), r = M(!1);
    function i() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!d.length;
    }
    return Rd(n, () => {
      te(() => {
        i();
      });
    }, { childList: !0 }), J(() => l.searchTerm.value, () => {
      te(() => {
        i();
      });
    }, { immediate: !0 }), vc({
      id: o
    }), (d, u) => At((f(), y(s(L), E(t, {
      ref_key: "currentRef",
      ref: a,
      role: "group",
      "aria-labelledby": s(o)
    }), {
      default: m(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [xn, r.value]
    ]);
  }
}), gc = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    F();
    const a = Ul({ id: "" });
    return (n, o) => (f(), y(s(L), E(t, {
      id: s(a).id
    }), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Lv, yc] = re("ComboboxContent"), bc = /* @__PURE__ */ b({
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
    const a = e, n = t, { position: o } = me(a), l = Ft();
    aa(a.bodyLock);
    const { forwardRef: r, currentElement: i } = F();
    oa(i);
    const d = B(() => a.position === "popper" ? a : {}), u = ie(d.value);
    function c(v) {
      l.onSelectedValueChange("");
    }
    ce(() => {
      l.onContentElementChange(i.value);
    });
    const p = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
      "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
      "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
    };
    return yc({ position: o }), (v, g) => (f(), y(s(Wl), null, {
      default: m(() => [
        v.dismissable ? (f(), y(s(la), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": v.disableOutsidePointerEvents,
          onDismiss: g[0] || (g[0] = (w) => s(l).onOpenChange(!1)),
          onFocusOutside: g[1] || (g[1] = (w) => {
            var h;
            (h = s(l).parentElement.value) != null && h.contains(w.target) && w.preventDefault(), n("focusOutside", w);
          }),
          onInteractOutside: g[2] || (g[2] = (w) => n("interactOutside", w)),
          onEscapeKeyDown: g[3] || (g[3] = (w) => n("escapeKeyDown", w)),
          onPointerDownOutside: g[4] || (g[4] = (w) => {
            var h;
            (h = s(l).parentElement.value) != null && h.contains(w.target) && w.preventDefault(), n("pointerDownOutside", w);
          })
        }, {
          default: m(() => [
            (f(), y(Me(s(o) === "popper" ? s(Zt) : s(L)), E({ ...v.$attrs, ...s(u) }, {
              id: s(l).contentId,
              ref: s(r),
              role: "listbox",
              "data-state": s(l).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...s(o) === "popper" ? p : {}
              },
              onPointerleave: c
            }), {
              default: m(() => [
                _(v.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (f(), y(Me(s(o) === "popper" ? s(Zt) : s(L)), E({ key: 1 }, { ...v.$attrs, ...d.value }, {
          id: s(l).contentId,
          ref: s(r),
          role: "listbox",
          "data-state": s(l).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...s(o) === "popper" ? p : {}
          },
          onPointerleave: c
        }), {
          default: m(() => [
            _(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), wc = /* @__PURE__ */ b({
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
    const a = ae(e, t), { forwardRef: n } = F(), o = Ft();
    return o.contentId || (o.contentId = ye(void 0, "radix-vue-combobox-content")), (l, r) => (f(), y(s(Re), {
      present: l.forceMount || s(o).open.value
    }, {
      default: m(() => [
        P(bc, E({ ...s(a), ...l.$attrs }, { ref: s(n) }), {
          default: m(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), _c = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    F();
    const a = Ft(), n = B(() => a.filteredOptions.value.length === 0);
    return (o, l) => n.value ? (f(), y(s(L), U(E({ key: 0 }, t)), {
      default: m(() => [
        _(o.$slots, "default", {}, () => [
          Y("No options")
        ])
      ]),
      _: 3
    }, 16)) : ee("", !0);
  }
});
function xc(e) {
  const t = Va({
    nonce: M()
  });
  return B(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.nonce) == null ? void 0 : a.value);
  });
}
const [Nv, Cc] = re("ComboboxItem"), $c = "combobox.select", kc = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { disabled: o } = me(a), l = Ft();
    Ul({ id: "", options: M([]) });
    const { forwardRef: r } = F(), i = B(
      () => {
        var h, x;
        return l.multiple.value && Array.isArray(l.modelValue.value) ? (h = l.modelValue.value) == null ? void 0 : h.some((C) => rt(C, a.value)) : rt((x = l.modelValue) == null ? void 0 : x.value, a.value);
      }
    ), d = B(() => rt(l.selectedValue.value, a.value)), u = ye(void 0, "radix-vue-combobox-item"), c = ye(void 0, "radix-vue-combobox-option"), p = B(() => l.isUserInputted.value ? l.searchTerm.value === "" || !!l.filteredOptions.value.find((h) => rt(h, a.value)) : !0);
    async function v(h) {
      n("select", h), !(h != null && h.defaultPrevented) && !o.value && h && l.onValueChange(a.value);
    }
    function g(h) {
      if (!h)
        return;
      const x = { originalEvent: h, value: a.value };
      Un($c, v, x);
    }
    async function w(h) {
      await te(), !h.defaultPrevented && l.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Cc({
      isSelected: i
    }), (h, x) => (f(), y(s(eo), { value: h.value }, {
      default: m(() => [
        At(P(s(L), {
          id: s(c),
          ref: s(r),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": s(u),
          "data-highlighted": d.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": s(o) || void 0,
          "data-disabled": s(o) ? "" : void 0,
          as: h.as,
          "as-child": h.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: g,
          onPointermove: w
        }, {
          default: m(() => [
            _(h.$slots, "default", {}, () => [
              Y(Q(h.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [xn, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Bc = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (f(), y(s(L), E(t, { "aria-hidden": "" }), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hl = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(Xn), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [vt, Kl] = re(["MenuRoot", "MenuSub"], "MenuContext"), [ra, Pc] = re("MenuRoot"), Oc = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o, dir: l } = me(a), r = ft(l), i = fe(a, "open", n), d = M(), u = M(!1);
    return he((c) => {
      if (!Ye)
        return;
      const p = () => {
        u.value = !0, document.addEventListener("pointerdown", v, {
          capture: !0,
          once: !0
        }), document.addEventListener("pointermove", v, {
          capture: !0,
          once: !0
        });
      }, v = () => u.value = !1;
      document.addEventListener("keydown", p, { capture: !0 }), c(() => {
        document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", v, {
          capture: !0
        }), document.removeEventListener("pointermove", v, {
          capture: !0
        });
      });
    }), Kl({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: d,
      onContentChange: (c) => {
        d.value = c;
      }
    }), Pc({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: u,
      dir: r,
      modal: o
    }), (c, p) => (f(), y(s(sa), null, {
      default: m(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Dc = "rovingFocusGroup.onEntryFocus", Sc = { bubbles: !1, cancelable: !0 }, Ec = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Mc(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Ac(e, t, a) {
  const n = Mc(e.key, a);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Ec[n];
}
function Gl(e, t = !1) {
  const a = document.activeElement;
  for (const n of e)
    if (n === a || (n.focus({ preventScroll: t }), document.activeElement !== a))
      return;
}
function Tc(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
const [Ic, Rc] = re("RovingFocusGroup"), ql = /* @__PURE__ */ b({
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
  setup(e, { expose: t, emit: a }) {
    const n = e, o = a, { loop: l, orientation: r, dir: i } = me(n), d = ft(i), u = fe(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = M(!1), p = M(!1), v = M(0), { getItems: g } = zl();
    function w(h) {
      const x = !p.value;
      if (h.currentTarget && h.target === h.currentTarget && x && !c.value) {
        const C = new CustomEvent(Dc, Sc);
        if (h.currentTarget.dispatchEvent(C), o("entryFocus", C), !C.defaultPrevented) {
          const D = g().map((A) => A.ref).filter((A) => A.dataset.disabled !== ""), $ = D.find((A) => A.getAttribute("data-active") === "true"), O = D.find(
            (A) => A.id === u.value
          ), S = [$, O, ...D].filter(
            Boolean
          );
          Gl(S, n.preventScrollOnEntryFocus);
        }
      }
      p.value = !1;
    }
    return t({
      getItems: g
    }), Rc({
      loop: l,
      dir: d,
      orientation: r,
      currentTabStopId: u,
      onItemFocus: (h) => {
        u.value = h;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        v.value++;
      },
      onFocusableItemRemove: () => {
        v.value--;
      }
    }), (h, x) => (f(), y(s(Wl), null, {
      default: m(() => [
        P(s(L), {
          tabindex: c.value || v.value === 0 ? -1 : 0,
          "data-orientation": s(r),
          as: h.as,
          "as-child": h.asChild,
          dir: s(d),
          style: { outline: "none" },
          onMousedown: x[0] || (x[0] = (C) => p.value = !0),
          onFocus: w,
          onBlur: x[1] || (x[1] = (C) => c.value = !1)
        }, {
          default: m(() => [
            _(h.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Vc = /* @__PURE__ */ b({
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
    const t = e, a = Ic(), n = B(() => t.tabStopId || ye()), o = B(
      () => a.currentTabStopId.value === n.value
    ), { getItems: l } = jl();
    ce(() => {
      t.focusable && a.onFocusableItemAdd();
    }), Qt(() => {
      t.focusable && a.onFocusableItemRemove();
    });
    function r(i) {
      if (i.key === "Tab" && i.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const d = Ac(
        i,
        a.orientation.value,
        a.dir.value
      );
      if (d !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !t.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let u = [...l().map((c) => c.ref).filter((c) => c.dataset.disabled !== "")];
        if (d === "last")
          u.reverse();
        else if (d === "prev" || d === "next") {
          d === "prev" && u.reverse();
          const c = u.indexOf(
            i.currentTarget
          );
          u = a.loop.value ? Tc(u, c + 1) : u.slice(c + 1);
        }
        te(() => Gl(u));
      }
    }
    return (i, d) => (f(), y(s(eo), null, {
      default: m(() => [
        P(s(L), {
          tabindex: o.value ? 0 : -1,
          "data-orientation": s(a).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: d[0] || (d[0] = (u) => {
            i.focusable ? s(a).onItemFocus(n.value) : u.preventDefault();
          }),
          onFocus: d[1] || (d[1] = (u) => s(a).onItemFocus(n.value)),
          onKeydown: r
        }, {
          default: m(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [to, Fc] = re("MenuContent"), ao = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Ho({
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
    ...Ll
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = vt(), l = ra(), { trapFocus: r, disableOutsidePointerEvents: i, loop: d } = me(a);
    Kn(), aa(i.value);
    const u = M(""), c = M(0), p = M(0), v = M(null), g = M("right"), w = M(0), h = M(null), { createCollection: x } = na(), { forwardRef: C, currentElement: D } = F(), $ = x(D);
    J(D, (k) => {
      o.onContentChange(k);
    });
    const { handleTypeaheadSearch: O } = Gn($);
    Qt(() => {
      window.clearTimeout(c.value);
    });
    function S(k) {
      var I, V;
      return g.value === ((I = v.value) == null ? void 0 : I.side) && $u(k, (V = v.value) == null ? void 0 : V.area);
    }
    async function A(k) {
      var I;
      n("openAutoFocus", k), !k.defaultPrevented && (k.preventDefault(), (I = D.value) == null || I.focus({
        preventScroll: !0
      }));
    }
    function T(k) {
      if (k.defaultPrevented)
        return;
      const I = k.target.closest("[data-radix-menu-content]") === k.currentTarget, V = k.ctrlKey || k.altKey || k.metaKey, ne = k.key.length === 1, Z = Ld(
        k,
        document.activeElement,
        D.value,
        {
          loop: d.value,
          arrowKeyOptions: "vertical",
          dir: l == null ? void 0 : l.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (Z)
        return Z == null ? void 0 : Z.focus();
      if (k.code === "Space" || (I && (k.key === "Tab" && k.preventDefault(), !V && ne && O(k.key)), k.target !== D.value) || !wu.includes(k.key))
        return;
      k.preventDefault();
      const N = $.value;
      Al.includes(k.key) && N.reverse(), bn(N);
    }
    function W(k) {
      var I, V;
      (V = (I = k == null ? void 0 : k.currentTarget) == null ? void 0 : I.contains) != null && V.call(I, k.target) || (window.clearTimeout(c.value), u.value = "");
    }
    function j(k) {
      var I;
      if (!Yt(k))
        return;
      const V = k.target, ne = w.value !== k.clientX;
      if ((I = k == null ? void 0 : k.currentTarget) != null && I.contains(V) && ne) {
        const Z = k.clientX > w.value ? "right" : "left";
        g.value = Z, w.value = k.clientX;
      }
    }
    return Fc({
      onItemEnter: (k) => !!S(k),
      onItemLeave: (k) => {
        var I;
        S(k) || ((I = D.value) == null || I.focus(), h.value = null);
      },
      onTriggerLeave: (k) => !!S(k),
      searchRef: u,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (k) => {
        v.value = k;
      }
    }), (k, I) => (f(), y(s(za), {
      "as-child": "",
      trapped: s(r),
      onMountAutoFocus: A,
      onUnmountAutoFocus: I[7] || (I[7] = (V) => n("closeAutoFocus", V))
    }, {
      default: m(() => [
        P(s(la), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: I[2] || (I[2] = (V) => n("escapeKeyDown", V)),
          onPointerDownOutside: I[3] || (I[3] = (V) => n("pointerDownOutside", V)),
          onFocusOutside: I[4] || (I[4] = (V) => n("focusOutside", V)),
          onInteractOutside: I[5] || (I[5] = (V) => n("interactOutside", V)),
          onDismiss: I[6] || (I[6] = (V) => n("dismiss"))
        }, {
          default: m(() => [
            P(s(ql), {
              "current-tab-stop-id": h.value,
              "onUpdate:currentTabStopId": I[0] || (I[0] = (V) => h.value = V),
              "as-child": "",
              orientation: "vertical",
              dir: s(l).dir.value,
              loop: s(d),
              onEntryFocus: I[1] || (I[1] = (V) => {
                n("entryFocus", V), s(l).isUsingKeyboardRef.value || V.preventDefault();
              })
            }, {
              default: m(() => [
                P(s(Zt), {
                  ref: s(C),
                  role: "menu",
                  as: k.as,
                  "as-child": k.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(Yn)(s(o).open.value),
                  dir: s(l).dir.value,
                  side: k.side,
                  "side-offset": k.sideOffset,
                  align: k.align,
                  "align-offset": k.alignOffset,
                  "avoid-collisions": k.avoidCollisions,
                  "collision-boundary": k.collisionBoundary,
                  "collision-padding": k.collisionPadding,
                  "arrow-padding": k.arrowPadding,
                  "prioritize-position": k.prioritizePosition,
                  sticky: k.sticky,
                  "hide-when-detached": k.hideWhenDetached,
                  onKeydown: T,
                  onBlur: W,
                  onPointermove: j
                }, {
                  default: m(() => [
                    _(k.$slots, "default")
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
}), Yl = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = to(), { forwardRef: n } = F(), o = M(!1);
    async function l(i) {
      if (!i.defaultPrevented && Yt(i)) {
        if (t.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function r(i) {
      await te(), !i.defaultPrevented && Yt(i) && a.onItemLeave(i);
    }
    return (i, d) => (f(), y(s(eo), null, {
      default: m(() => [
        P(s(L), E({
          ref: s(n),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || void 0,
          "data-disabled": i.disabled ? "" : void 0,
          "data-highlighted": o.value ? "" : void 0,
          onPointermove: l,
          onPointerleave: r,
          onFocus: d[0] || (d[0] = async (u) => {
            await te(), !(u.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: d[1] || (d[1] = async (u) => {
            await te(), !u.defaultPrevented && (o.value = !1);
          })
        }), {
          default: m(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), no = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: l } = F(), r = ra(), i = to(), d = M(!1);
    async function u() {
      const c = l.value;
      if (!a.disabled && c) {
        const p = new CustomEvent(yu, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await te(), p.defaultPrevented ? d.value = !1 : r.onClose();
      }
    }
    return (c, p) => (f(), y(Yl, E(a, {
      ref: s(o),
      onClick: u,
      onPointerdown: p[0] || (p[0] = () => {
        d.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (v) => {
        var g;
        await te(), !v.defaultPrevented && (d.value || (g = v.currentTarget) == null || g.click());
      }),
      onKeydown: p[2] || (p[2] = async (v) => {
        const g = s(i).searchRef.value !== "";
        c.disabled || g && v.key === " " || s(yn).includes(v.key) && (v.currentTarget.click(), v.preventDefault());
      })
    }), {
      default: m(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Lc, Zl] = re(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Nc = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Lc({
      checked: M(!1)
    });
    return (a, n) => (f(), y(s(Re), {
      present: a.forceMount || s(Ba)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: m(() => [
        P(s(L), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": s(Zn)(s(t).checked.value)
        }, {
          default: m(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), zc = /* @__PURE__ */ b({
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
    const a = e, n = t, o = fe(a, "checked", n);
    return Zl({ checked: o }), (l, r) => (f(), y(no, E({ role: "menuitemcheckbox" }, a, {
      "aria-checked": s(Ba)(s(o)) ? "mixed" : s(o),
      "data-state": s(Zn)(s(o)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), s(Ba)(s(o)) ? o.value = !0 : o.value = !s(o);
      })
    }), {
      default: m(() => [
        _(l.$slots, "default", { checked: s(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Wc = /* @__PURE__ */ b({
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
    const a = e, n = t, o = ae(a, n), l = vt(), { forwardRef: r, currentElement: i } = F();
    return oa(i), (d, u) => (f(), y(ao, E(s(o), {
      ref: s(r),
      "trap-focus": s(l).open.value,
      "disable-outside-pointer-events": s(l).open.value,
      "disable-outside-scroll": !0,
      onDismiss: u[0] || (u[0] = (c) => s(l).onOpenChange(!1)),
      onFocusOutside: u[1] || (u[1] = we((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: m(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), jc = /* @__PURE__ */ b({
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
    const a = ae(e, t), n = vt();
    return (o, l) => (f(), y(ao, E(s(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: l[0] || (l[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: m(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uc = /* @__PURE__ */ b({
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
    const a = ae(e, t), n = vt(), o = ra();
    return (l, r) => (f(), y(s(Re), {
      present: l.forceMount || s(n).open.value
    }, {
      default: m(() => [
        s(o).modal.value ? (f(), y(Wc, U(E({ key: 0 }, { ...l.$attrs, ...s(a) })), {
          default: m(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), y(jc, U(E({ key: 1 }, { ...l.$attrs, ...s(a) })), {
          default: m(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Jl = /* @__PURE__ */ b({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(L), E({ role: "group" }, t), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hc = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(L), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kc = /* @__PURE__ */ b({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(Na), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Gc, qc] = re("MenuRadioGroup"), Yc = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = fe(a, "modelValue", t);
    return qc({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, l) => (f(), y(Jl, U(G(a)), {
      default: m(() => [
        _(o.$slots, "default", { modelValue: s(n) })
      ]),
      _: 3
    }, 16));
  }
}), Zc = /* @__PURE__ */ b({
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
    const a = e, n = t, { value: o } = me(a), l = Gc(), r = B(
      () => l.modelValue.value === (o == null ? void 0 : o.value)
    );
    return Zl({ checked: r }), (i, d) => (f(), y(no, E({ role: "menuitemradio" }, a, {
      "aria-checked": r.value,
      "data-state": s(Zn)(r.value),
      onSelect: d[0] || (d[0] = async (u) => {
        n("select", u), s(l).onValueChange(s(o));
      })
    }), {
      default: m(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Jc = /* @__PURE__ */ b({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(L), E(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Xl, Xc] = re("MenuSub"), Qc = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = fe(a, "open", t, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = vt(), l = M(), r = M();
    return he((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), Kl({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: r,
      onContentChange: (i) => {
        r.value = i;
      }
    }), Xc({
      triggerId: "",
      contentId: "",
      trigger: l,
      onTriggerChange: (i) => {
        l.value = i;
      }
    }), (i, d) => (f(), y(s(sa), null, {
      default: m(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ep = /* @__PURE__ */ b({
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
    const a = ae(e, t), n = vt(), o = ra(), l = Xl(), { forwardRef: r, currentElement: i } = F();
    return l.contentId || (l.contentId = ye(void 0, "radix-vue-menu-sub-content")), (d, u) => (f(), y(s(Re), {
      present: d.forceMount || s(n).open.value
    }, {
      default: m(() => [
        P(ao, E(s(a), {
          id: s(l).contentId,
          ref: s(r),
          "aria-labelledby": s(l).triggerId,
          align: "start",
          side: s(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: u[0] || (u[0] = we((c) => {
            var p;
            s(o).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: u[1] || (u[1] = we(() => {
          }, ["prevent"])),
          onFocusOutside: u[2] || (u[2] = (c) => {
            c.defaultPrevented || c.target !== s(l).trigger.value && s(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: u[3] || (u[3] = (c) => {
            s(o).onClose(), c.preventDefault();
          }),
          onKeydown: u[4] || (u[4] = (c) => {
            var p, v;
            const g = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), w = s(xu)[s(o).dir.value].includes(c.key);
            g && w && (s(n).onOpenChange(!1), (v = s(l).trigger.value) == null || v.focus(), c.preventDefault());
          })
        }), {
          default: m(() => [
            _(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), tp = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = vt(), n = ra(), o = Xl(), l = to(), r = M(null);
    o.triggerId || (o.triggerId = ye(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    Qt(() => {
      i();
    });
    function d(p) {
      !Yt(p) || l.onItemEnter(p) || !t.disabled && !a.open.value && !r.value && (l.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function u(p) {
      var v, g;
      if (!Yt(p))
        return;
      i();
      const w = (v = a.content.value) == null ? void 0 : v.getBoundingClientRect();
      if (w != null && w.width) {
        const h = (g = a.content.value) == null ? void 0 : g.dataset.side, x = h === "right", C = x ? -5 : 5, D = w[x ? "left" : "right"], $ = w[x ? "right" : "left"];
        l.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: D, y: w.top },
            { x: $, y: w.top },
            { x: $, y: w.bottom },
            { x: D, y: w.bottom }
          ],
          side: h
        }), window.clearTimeout(l.pointerGraceTimerRef.value), l.pointerGraceTimerRef.value = window.setTimeout(
          () => l.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (l.onTriggerLeave(p))
          return;
        l.onPointerGraceIntentChange(null);
      }
    }
    async function c(p) {
      var v;
      const g = l.searchRef.value !== "";
      t.disabled || g && p.key === " " || _u[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await te(), (v = a.content.value) == null || v.focus(), p.preventDefault());
    }
    return (p, v) => (f(), y(Hl, { "as-child": "" }, {
      default: m(() => [
        P(Yl, E(t, {
          id: s(o).triggerId,
          ref: (g) => {
            var w;
            (w = s(o)) == null || w.onTriggerChange(g == null ? void 0 : g.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(o).contentId,
          "data-state": s(Yn)(s(a).open.value),
          onClick: v[0] || (v[0] = async (g) => {
            t.disabled || g.defaultPrevented || (g.currentTarget.focus(), s(a).open.value || s(a).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: u,
          onKeydown: c
        }), {
          default: m(() => [
            _(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [Ql, ap] = re("DropdownMenuRoot"), np = /* @__PURE__ */ b({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t;
    F();
    const o = fe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), l = M(), { modal: r, dir: i } = me(a), d = ft(i);
    return ap({
      open: o,
      onOpenChange: (u) => {
        o.value = u;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerId: "",
      triggerElement: l,
      contentId: "",
      modal: r,
      dir: d
    }), (u, c) => (f(), y(s(Oc), {
      open: s(o),
      "onUpdate:open": c[0] || (c[0] = (p) => Xt(o) ? o.value = p : null),
      dir: s(d),
      modal: s(r)
    }, {
      default: m(() => [
        _(u.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), op = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ql(), { forwardRef: n, currentElement: o } = F();
    return ce(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = ye(void 0, "radix-vue-dropdown-menu-trigger")), (l, r) => (f(), y(s(Hl), { "as-child": "" }, {
      default: m(() => [
        P(s(L), {
          id: s(a).triggerId,
          ref: s(n),
          type: l.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: l.as,
          "aria-haspopup": "menu",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(a).open.value ? s(a).contentId : void 0,
          "data-disabled": l.disabled ? "" : void 0,
          disabled: l.disabled,
          "data-state": s(a).open.value ? "open" : "closed",
          onClick: r[0] || (r[0] = async (i) => {
            var d;
            !l.disabled && i.button === 0 && i.ctrlKey === !1 && ((d = s(a)) == null || d.onOpenToggle(), await te(), s(a).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = He(
            (i) => {
              l.disabled || (["Enter", " "].includes(i.key) && s(a).onOpenToggle(), i.key === "ArrowDown" && s(a).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: m(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), lp = /* @__PURE__ */ b({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(Kc), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sp = /* @__PURE__ */ b({
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
    const a = ae(e, t);
    F();
    const n = Ql(), o = M(!1);
    function l(r) {
      r.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, r.preventDefault());
    }
    return n.contentId || (n.contentId = ye(void 0, "radix-vue-dropdown-menu-content")), (r, i) => {
      var d;
      return f(), y(s(Uc), E(s(a), {
        id: s(n).contentId,
        "aria-labelledby": (d = s(n)) == null ? void 0 : d.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: l,
        onInteractOutside: i[0] || (i[0] = (u) => {
          var c;
          if (u.defaultPrevented) return;
          const p = u.detail.originalEvent, v = p.button === 0 && p.ctrlKey === !0, g = p.button === 2 || v;
          (!s(n).modal.value || g) && (o.value = !0), (c = s(n).triggerElement.value) != null && c.contains(u.target) && u.preventDefault();
        })
      }), {
        default: m(() => [
          _(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), es = /* @__PURE__ */ b({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = mt(t);
    return F(), (o, l) => (f(), y(s(no), U(G({ ...a, ...s(n) })), {
      default: m(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rp = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (f(), y(s(Jl), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ip = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (f(), y(s(Jc), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dp = /* @__PURE__ */ b({
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
    const a = e, n = mt(t);
    return F(), (o, l) => (f(), y(s(zc), U(G({ ...a, ...s(n) })), {
      default: m(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ts = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (f(), y(s(Nc), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), up = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (f(), y(s(Hc), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cp = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = mt(t);
    return F(), (o, l) => (f(), y(s(Yc), U(G({ ...a, ...s(n) })), {
      default: m(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pp = /* @__PURE__ */ b({
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
    const a = ae(e, t);
    return F(), (n, o) => (f(), y(s(Zc), U(G(s(a))), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fp = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = fe(a, "open", t, {
      passive: a.open === void 0,
      defaultValue: a.defaultOpen ?? !1
    });
    return F(), (o, l) => (f(), y(s(Qc), {
      open: s(n),
      "onUpdate:open": l[0] || (l[0] = (r) => Xt(n) ? n.value = r : null)
    }, {
      default: m(() => [
        _(o.$slots, "default", { open: s(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), mp = /* @__PURE__ */ b({
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
    const a = ae(e, t);
    return F(), (n, o) => (f(), y(s(ep), E(s(a), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vp = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (f(), y(s(tp), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hp = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (f(), y(s(L), E(t, {
      onMousedown: n[0] || (n[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Lt, gp] = re("PaginationRoot"), yp = /* @__PURE__ */ b({
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
    const a = e, n = t, { siblingCount: o, disabled: l, showEdges: r } = me(a);
    F();
    const i = fe(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), d = B(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return gp({
      page: i,
      onPageChange(u) {
        i.value = u;
      },
      pageCount: d,
      siblingCount: o,
      disabled: l,
      showEdges: r
    }), (u, c) => (f(), y(s(L), {
      as: u.as,
      "as-child": u.asChild
    }, {
      default: m(() => [
        _(u.$slots, "default", {
          page: s(i),
          pageCount: d.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), bp = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (f(), y(s(L), E(t, { "data-type": "ellipsis" }), {
      default: m(() => [
        _(a.$slots, "default", {}, () => [
          Y("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), wp = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Lt();
    return F(), (n, o) => (f(), y(s(L), E(t, {
      "aria-label": "First Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: s(a).page.value === 1 || s(a).disabled.value,
      onClick: o[0] || (o[0] = (l) => s(a).onPageChange(1))
    }), {
      default: m(() => [
        _(n.$slots, "default", {}, () => [
          Y("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), _p = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Lt();
    return F(), (n, o) => (f(), y(s(L), E(t, {
      "aria-label": "Last Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: s(a).page.value === s(a).pageCount.value || s(a).disabled.value,
      onClick: o[0] || (o[0] = (l) => s(a).onPageChange(s(a).pageCount.value))
    }), {
      default: m(() => [
        _(n.$slots, "default", {}, () => [
          Y("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function Xe(e, t) {
  const a = t - e + 1;
  return Array.from({ length: a }, (n, o) => o + e);
}
function xp(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const ga = "ellipsis";
function Cp(e, t, a, n) {
  const o = t, l = Math.max(e - a, 1), r = Math.min(e + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, t) - 2, d = l > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(l - 1) > 2, u = r < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - r) > 2;
    if (!d && u)
      return [...Xe(1, i), ga, o];
    if (d && !u) {
      const c = Xe(o - i + 1, o);
      return [1, ga, ...c];
    }
    if (d && u) {
      const c = Xe(l, r);
      return [1, ga, ...c, ga, o];
    }
    return Xe(1, o);
  } else {
    const i = a * 2 + 1;
    return t < i ? Xe(1, o) : e <= a + 1 ? Xe(1, i) : t - e <= a ? Xe(t - i + 1, o) : Xe(l, r);
  }
}
const $p = /* @__PURE__ */ b({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    F();
    const a = Lt(), n = B(() => xp(
      Cp(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, l) => (f(), y(s(L), U(G(t)), {
      default: m(() => [
        _(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), zv = /* @__PURE__ */ b({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const a = Lt(), n = B(() => a.page.value === t.value);
    return (o, l) => (f(), y(s(L), E(t, {
      "data-type": "page",
      "aria-label": `Page ${o.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: s(a).disabled.value,
      type: o.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (r) => s(a).onPageChange(o.value))
    }), {
      default: m(() => [
        _(o.$slots, "default", {}, () => [
          Y(Q(o.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), kp = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const a = Lt();
    return (n, o) => (f(), y(s(L), E(t, {
      "aria-label": "Next Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: s(a).page.value === s(a).pageCount.value || s(a).disabled.value,
      onClick: o[0] || (o[0] = (l) => s(a).onPageChange(s(a).page.value + 1))
    }), {
      default: m(() => [
        _(n.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Bp = /* @__PURE__ */ b({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const a = Lt();
    return (n, o) => {
      var l;
      return f(), y(s(L), E(t, {
        "aria-label": "Previous Page",
        type: n.as === "button" ? "button" : void 0,
        disabled: s(a).page.value === 1 || ((l = s(a).disabled) == null ? void 0 : l.value),
        onClick: o[0] || (o[0] = (r) => s(a).onPageChange(s(a).page.value - 1))
      }), {
        default: m(() => [
          _(n.$slots, "default", {}, () => [
            Y("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
}), [ia, Pp] = re("PopoverRoot"), Op = /* @__PURE__ */ b({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o } = me(a), l = fe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = M(), i = M(!1);
    return Pp({
      contentId: "",
      modal: o,
      open: l,
      onOpenChange: (d) => {
        l.value = d;
      },
      onOpenToggle: () => {
        l.value = !l.value;
      },
      triggerElement: r,
      hasCustomAnchor: i
    }), (d, u) => (f(), y(s(sa), null, {
      default: m(() => [
        _(d.$slots, "default", { open: s(l) })
      ]),
      _: 3
    }));
  }
}), Dp = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = ia(), { forwardRef: n, currentElement: o } = F();
    return ce(() => {
      a.triggerElement.value = o.value;
    }), (l, r) => (f(), y(Me(s(a).hasCustomAnchor.value ? s(L) : s(Xn)), { "as-child": "" }, {
      default: m(() => [
        P(s(L), {
          ref: s(n),
          type: l.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(a).open.value ? "open" : "closed",
          as: l.as,
          "as-child": t.asChild,
          onClick: s(a).onOpenToggle
        }, {
          default: m(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Sp = /* @__PURE__ */ b({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(Na), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), as = /* @__PURE__ */ b({
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
    const a = e, n = t, o = ie(a), { forwardRef: l } = F(), r = ia();
    return Kn(), (i, d) => (f(), y(s(za), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: m(() => [
        P(s(la), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (u) => n("pointerDownOutside", u)),
          onInteractOutside: d[1] || (d[1] = (u) => n("interactOutside", u)),
          onEscapeKeyDown: d[2] || (d[2] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[3] || (d[3] = (u) => n("focusOutside", u)),
          onDismiss: d[4] || (d[4] = (u) => s(r).onOpenChange(!1))
        }, {
          default: m(() => [
            P(s(Zt), E(s(o), {
              id: s(r).contentId,
              ref: s(l),
              "data-state": s(r).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: m(() => [
                _(i.$slots, "default")
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
}), Ep = /* @__PURE__ */ b({
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
    const a = e, n = t, o = ia(), l = M(!1);
    aa(!0);
    const r = ae(a, n), { forwardRef: i, currentElement: d } = F();
    return oa(d), (u, c) => (f(), y(as, E(s(r), {
      ref: s(i),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = we(
        (p) => {
          var v;
          n("closeAutoFocus", p), l.value || (v = s(o).triggerElement.value) == null || v.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        n("pointerDownOutside", p);
        const v = p.detail.originalEvent, g = v.button === 0 && v.ctrlKey === !0, w = v.button === 2 || g;
        l.value = w;
      }),
      onFocusOutside: c[2] || (c[2] = we(() => {
      }, ["prevent"]))
    }), {
      default: m(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Mp = /* @__PURE__ */ b({
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
    const a = e, n = t, o = ia(), l = M(!1), r = M(!1), i = ae(a, n);
    return (d, u) => (f(), y(as, E(s(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (l.value || (p = s(o).triggerElement.value) == null || p.focus(), c.preventDefault()), l.value = !1, r.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = async (c) => {
        var p;
        n("interactOutside", c), c.defaultPrevented || (l.value = !0, c.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const v = c.target;
        (p = s(o).triggerElement.value) != null && p.contains(v) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && r.value && c.preventDefault();
      })
    }), {
      default: m(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ap = /* @__PURE__ */ b({
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
    const a = e, n = t, o = ia(), l = ae(a, n), { forwardRef: r } = F();
    return o.contentId || (o.contentId = ye(void 0, "radix-vue-popover-content")), (i, d) => (f(), y(s(Re), {
      present: i.forceMount || s(o).open.value
    }, {
      default: m(() => [
        s(o).modal.value ? (f(), y(Ep, E({ key: 0 }, s(l), { ref: s(r) }), {
          default: m(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), y(Mp, E({ key: 1 }, s(l), { ref: s(r) }), {
          default: m(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Tp = ["default-value"], Ip = /* @__PURE__ */ b({
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
    const t = e, { value: a } = me(t), n = M();
    return (o, l) => (f(), y(s(Nl), { "as-child": "" }, {
      default: m(() => [
        At(K("select", E({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": l[0] || (l[0] = (r) => Xt(a) ? a.value = r : null),
          "default-value": s(a)
        }), [
          _(o.$slots, "default")
        ], 16, Tp), [
          [As, s(a)]
        ])
      ]),
      _: 3
    }));
  }
}), Rp = {
  key: 0,
  value: ""
}, [ht, ns] = re("SelectRoot"), [Vp, Fp] = re("SelectRoot"), Lp = /* @__PURE__ */ b({
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
    const a = e, n = t, o = fe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), l = fe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = M(), i = M(), d = M({
      x: 0,
      y: 0
    }), u = M(!1), { required: c, disabled: p, dir: v } = me(a), g = ft(v);
    ns({
      triggerElement: r,
      onTriggerChange: (C) => {
        r.value = C;
      },
      valueElement: i,
      onValueElementChange: (C) => {
        i.value = C;
      },
      valueElementHasChildren: u,
      onValueElementHasChildrenChange: (C) => {
        u.value = C;
      },
      contentId: "",
      modelValue: o,
      onValueChange: (C) => {
        o.value = C;
      },
      open: l,
      required: c,
      onOpenChange: (C) => {
        l.value = C;
      },
      dir: g,
      triggerPointerDownPosRef: d,
      disabled: p
    });
    const w = Fa(r), h = M(/* @__PURE__ */ new Set()), x = B(() => Array.from(h.value).map((C) => {
      var D;
      return (D = C.props) == null ? void 0 : D.value;
    }).join(";"));
    return Fp({
      onNativeOptionAdd: (C) => {
        h.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        h.value.delete(C);
      }
    }), (C, D) => (f(), y(s(sa), null, {
      default: m(() => [
        _(C.$slots, "default", {
          modelValue: s(o),
          open: s(l)
        }),
        s(w) ? (f(), y(Ip, E({ key: x.value }, C.$attrs, {
          "aria-hidden": "",
          tabindex: "-1",
          required: s(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: s(p),
          value: s(o),
          onChange: D[0] || (D[0] = ($) => o.value = $.target.value)
        }), {
          default: m(() => [
            s(o) === void 0 ? (f(), R("option", Rp)) : ee("", !0),
            (f(!0), R(X, null, ve(Array.from(h.value), ($) => (f(), y(Me($), E({ ref_for: !0 }, $.props, {
              key: $.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : ee("", !0)
      ]),
      _: 3
    }));
  }
}), Np = [" ", "Enter", "ArrowUp", "ArrowDown"], zp = [" ", "Enter"], ze = 10;
function os(e) {
  return e === "" || yd(e);
}
const Wp = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = ht(), n = B(() => {
      var g;
      return ((g = a.disabled) == null ? void 0 : g.value) || t.disabled;
    }), { forwardRef: o, currentElement: l } = F();
    a.contentId || (a.contentId = ye(void 0, "radix-vue-select-content")), ce(() => {
      a.triggerElement = l;
    });
    const { injectCollection: r } = na(), i = r(), { search: d, handleTypeaheadSearch: u, resetTypeahead: c } = Gn(i);
    function p() {
      n.value || (a.onOpenChange(!0), c());
    }
    function v(g) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(g.pageX),
        y: Math.round(g.pageY)
      };
    }
    return (g, w) => (f(), y(s(Xn), { "as-child": "" }, {
      default: m(() => {
        var h, x, C, D;
        return [
          P(s(L), {
            ref: s(o),
            role: "combobox",
            type: g.as === "button" ? "button" : void 0,
            "aria-controls": s(a).contentId,
            "aria-expanded": s(a).open.value || !1,
            "aria-required": (h = s(a).required) == null ? void 0 : h.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (x = s(a)) == null ? void 0 : x.dir.value,
            "data-state": (C = s(a)) != null && C.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": s(os)((D = s(a).modelValue) == null ? void 0 : D.value) ? "" : void 0,
            "as-child": g.asChild,
            as: g.as,
            onClick: w[0] || (w[0] = ($) => {
              var O;
              (O = $ == null ? void 0 : $.currentTarget) == null || O.focus();
            }),
            onPointerdown: w[1] || (w[1] = ($) => {
              if ($.pointerType === "touch")
                return $.preventDefault();
              const O = $.target;
              O.hasPointerCapture($.pointerId) && O.releasePointerCapture($.pointerId), $.button === 0 && $.ctrlKey === !1 && (v($), $.preventDefault());
            }),
            onPointerup: w[2] || (w[2] = we(
              ($) => {
                $.pointerType === "touch" && v($);
              },
              ["prevent"]
            )),
            onKeydown: w[3] || (w[3] = ($) => {
              const O = s(d) !== "";
              !($.ctrlKey || $.altKey || $.metaKey) && $.key.length === 1 && O && $.key === " " || (s(u)($.key), s(Np).includes($.key) && (p(), $.preventDefault()));
            })
          }, {
            default: m(() => [
              _(g.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), jp = /* @__PURE__ */ b({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(Na), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [oo, Up] = re("SelectItemAlignedPosition"), Hp = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, { injectCollection: o } = na(), l = ht(), r = gt(), i = o(), d = M(!1), u = M(!0), c = M(), { forwardRef: p, currentElement: v } = F(), { viewport: g, selectedItem: w, selectedItemText: h, focusSelectedItem: x } = r;
    function C() {
      if (l.triggerElement.value && l.valueElement.value && c.value && v.value && g != null && g.value && w != null && w.value && h != null && h.value) {
        const O = l.triggerElement.value.getBoundingClientRect(), S = v.value.getBoundingClientRect(), A = l.valueElement.value.getBoundingClientRect(), T = h.value.getBoundingClientRect();
        if (l.dir.value !== "rtl") {
          const De = T.left - S.left, Be = A.left - De, ot = O.left - Be, le = O.width + ot, _e = Math.max(le, S.width), lt = window.innerWidth - ze, Ka = Bo(Be, ze, lt - _e);
          c.value.style.minWidth = `${le}px`, c.value.style.left = `${Ka}px`;
        } else {
          const De = S.right - T.right, Be = window.innerWidth - A.right - De, ot = window.innerWidth - O.right - Be, le = O.width + ot, _e = Math.max(le, S.width), lt = window.innerWidth - ze, Ka = Bo(
            Be,
            ze,
            lt - _e
          );
          c.value.style.minWidth = `${le}px`, c.value.style.right = `${Ka}px`;
        }
        const W = i.value, j = window.innerHeight - ze * 2, k = g.value.scrollHeight, I = window.getComputedStyle(v.value), V = Number.parseInt(
          I.borderTopWidth,
          10
        ), ne = Number.parseInt(I.paddingTop, 10), Z = Number.parseInt(
          I.borderBottomWidth,
          10
        ), N = Number.parseInt(
          I.paddingBottom,
          10
        ), H = V + ne + k + N + Z, oe = Math.min(
          w.value.offsetHeight * 5,
          H
        ), ue = window.getComputedStyle(g.value), pe = Number.parseInt(ue.paddingTop, 10), ke = Number.parseInt(
          ue.paddingBottom,
          10
        ), be = O.top + O.height / 2 - ze, ja = j - be, zt = w.value.offsetHeight / 2, Ua = w.value.offsetTop + zt, yt = V + ne + Ua, Ha = H - yt;
        if (yt <= be) {
          const De = w.value === W[W.length - 1];
          c.value.style.bottom = "0px";
          const Be = v.value.clientHeight - g.value.offsetTop - g.value.offsetHeight, ot = Math.max(
            ja,
            zt + (De ? ke : 0) + Be + Z
          ), le = yt + ot;
          c.value.style.height = `${le}px`;
        } else {
          const De = w.value === W[0];
          c.value.style.top = "0px";
          const Be = Math.max(
            be,
            V + g.value.offsetTop + (De ? pe : 0) + zt
          ) + Ha;
          c.value.style.height = `${Be}px`, g.value.scrollTop = yt - be + g.value.offsetTop;
        }
        c.value.style.margin = `${ze}px 0`, c.value.style.minHeight = `${oe}px`, c.value.style.maxHeight = `${j}px`, n("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const D = M("");
    ce(async () => {
      await te(), C(), v.value && (D.value = window.getComputedStyle(v.value).zIndex);
    });
    function $(O) {
      O && u.value === !0 && (C(), x == null || x(), u.value = !1);
    }
    return Up({
      contentWrapper: c,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: $
    }), (O, S) => (f(), R("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: Da({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: D.value
      })
    }, [
      P(s(L), E({
        ref: s(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...O.$attrs, ...a }), {
        default: m(() => [
          _(O.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Kp = /* @__PURE__ */ b({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: ze },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = ie(e);
    return (a, n) => (f(), y(s(Zt), E(s(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nt = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [gt, Gp] = re("SelectContent"), qp = /* @__PURE__ */ b({
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
    const a = e, n = t, o = ht();
    Kn(), aa(a.bodyLock);
    const { createCollection: l } = na(), r = M();
    oa(r);
    const i = l(r), { search: d, handleTypeaheadSearch: u } = Gn(i), c = M(), p = M(), v = M(), g = M(!1), w = M(!1);
    function h() {
      p.value && r.value && bn([p.value, r.value]);
    }
    J(g, () => {
      h();
    });
    const { onOpenChange: x, triggerPointerDownPosRef: C } = o;
    he((S) => {
      if (!r.value)
        return;
      let A = { x: 0, y: 0 };
      const T = (j) => {
        var k, I;
        A = {
          x: Math.abs(
            Math.round(j.pageX) - (((k = C.value) == null ? void 0 : k.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(j.pageY) - (((I = C.value) == null ? void 0 : I.y) ?? 0)
          )
        };
      }, W = (j) => {
        var k;
        j.pointerType !== "touch" && (A.x <= 10 && A.y <= 10 ? j.preventDefault() : (k = r.value) != null && k.contains(j.target) || x(!1), document.removeEventListener("pointermove", T), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", T), document.addEventListener("pointerup", W, {
        capture: !0,
        once: !0
      })), S(() => {
        document.removeEventListener("pointermove", T), document.removeEventListener("pointerup", W, {
          capture: !0
        });
      });
    });
    function D(S) {
      const A = S.ctrlKey || S.altKey || S.metaKey;
      if (S.key === "Tab" && S.preventDefault(), !A && S.key.length === 1 && u(S.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(S.key)) {
        let T = i.value;
        if (["ArrowUp", "End"].includes(S.key) && (T = T.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const W = S.target, j = T.indexOf(W);
          T = T.slice(j + 1);
        }
        setTimeout(() => bn(T)), S.preventDefault();
      }
    }
    const $ = B(() => a.position === "popper" ? a : {}), O = ie($.value);
    return Gp({
      content: r,
      viewport: c,
      onViewportChange: (S) => {
        c.value = S;
      },
      itemRefCallback: (S, A, T) => {
        var W, j;
        const k = !w.value && !T;
        (((W = o.modelValue) == null ? void 0 : W.value) !== void 0 && ((j = o.modelValue) == null ? void 0 : j.value) === A || k) && (p.value = S, k && (w.value = !0));
      },
      selectedItem: p,
      selectedItemText: v,
      onItemLeave: () => {
        var S;
        (S = r.value) == null || S.focus();
      },
      itemTextRefCallback: (S, A, T) => {
        var W, j;
        const k = !w.value && !T;
        (((W = o.modelValue) == null ? void 0 : W.value) !== void 0 && ((j = o.modelValue) == null ? void 0 : j.value) === A || k) && (v.value = S);
      },
      focusSelectedItem: h,
      position: a.position,
      isPositioned: g,
      searchRef: d
    }), (S, A) => (f(), y(s(za), {
      "as-child": "",
      onMountAutoFocus: A[6] || (A[6] = we(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: A[7] || (A[7] = (T) => {
        var W;
        n("closeAutoFocus", T), !T.defaultPrevented && ((W = s(o).triggerElement.value) == null || W.focus({ preventScroll: !0 }), T.preventDefault());
      })
    }, {
      default: m(() => [
        P(s(la), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: A[2] || (A[2] = we(() => {
          }, ["prevent"])),
          onDismiss: A[3] || (A[3] = (T) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: A[4] || (A[4] = (T) => n("escapeKeyDown", T)),
          onPointerDownOutside: A[5] || (A[5] = (T) => n("pointerDownOutside", T))
        }, {
          default: m(() => [
            (f(), y(Me(
              S.position === "popper" ? Kp : Hp
            ), E({ ...S.$attrs, ...s(O) }, {
              id: s(o).contentId,
              ref: (T) => {
                r.value = s(Ie)(T);
              },
              role: "listbox",
              "data-state": s(o).open.value ? "open" : "closed",
              dir: s(o).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: A[0] || (A[0] = we(() => {
              }, ["prevent"])),
              onPlaced: A[1] || (A[1] = (T) => g.value = !0),
              onKeydown: D
            }), {
              default: m(() => [
                _(S.$slots, "default")
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
}), Yp = /* @__PURE__ */ b({
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return ns(e.context), (t, a) => _(t.$slots, "default");
  }
}), Zp = { key: 1 }, Jp = /* @__PURE__ */ b({
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
    const a = e, n = ae(a, t), o = ht(), l = M();
    ce(() => {
      l.value = new DocumentFragment();
    });
    const r = M(), i = B(() => a.forceMount || o.open.value);
    return (d, u) => {
      var c;
      return i.value ? (f(), y(s(Re), {
        key: 0,
        ref_key: "presenceRef",
        ref: r,
        present: !0
      }, {
        default: m(() => [
          P(qp, U(G({ ...s(n), ...d.$attrs })), {
            default: m(() => [
              _(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = r.value) != null && c.present) && l.value ? (f(), R("div", Zp, [
        (f(), y(Bn, { to: l.value }, [
          P(Yp, { context: s(o) }, {
            default: m(() => [
              _(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : ee("", !0);
    };
  }
}), Xp = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(L), E({ "aria-hidden": "" }, t), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ls, Qp] = re("SelectItem"), ef = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: a } = me(t), n = ht(), o = gt(Nt), { forwardRef: l, currentElement: r } = F(), i = B(() => {
      var h;
      return ((h = n.modelValue) == null ? void 0 : h.value) === t.value;
    }), d = M(!1), u = M(t.textValue ?? ""), c = ye(void 0, "radix-vue-select-item-text");
    async function p(h) {
      await te(), !(h != null && h.defaultPrevented) && (a.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function v(h) {
      var x;
      await te(), !h.defaultPrevented && (a.value ? (x = o.onItemLeave) == null || x.call(o) : h.currentTarget.focus({ preventScroll: !0 }));
    }
    async function g(h) {
      var x;
      await te(), !h.defaultPrevented && h.currentTarget === document.activeElement && ((x = o.onItemLeave) == null || x.call(o));
    }
    async function w(h) {
      var x;
      await te(), !(h.defaultPrevented || ((x = o.searchRef) == null ? void 0 : x.value) !== "" && h.key === " ") && (zp.includes(h.key) && p(), h.key === " " && h.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ce(() => {
      r.value && o.itemRefCallback(
        r.value,
        t.value,
        t.disabled
      );
    }), Qp({
      value: t.value,
      disabled: a,
      textId: c,
      isSelected: i,
      onItemTextChange: (h) => {
        u.value = ((u.value || (h == null ? void 0 : h.textContent)) ?? "").trim();
      }
    }), (h, x) => (f(), y(s(L), {
      ref: s(l),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": s(c),
      "data-highlighted": d.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": s(a) || void 0,
      "data-disabled": s(a) ? "" : void 0,
      tabindex: s(a) ? void 0 : -1,
      as: h.as,
      "as-child": h.asChild,
      onFocus: x[0] || (x[0] = (C) => d.value = !0),
      onBlur: x[1] || (x[1] = (C) => d.value = !1),
      onPointerup: p,
      onPointerdown: x[2] || (x[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: x[3] || (x[3] = we(() => {
      }, ["prevent", "stop"])),
      onPointermove: v,
      onPointerleave: g,
      onKeydown: w
    }, {
      default: m(() => [
        _(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), tf = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = ls();
    return (n, o) => s(a).isSelected.value ? (f(), y(s(L), E({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : ee("", !0);
  }
}), [af, nf] = re("SelectGroup"), of = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = ye(void 0, "radix-vue-select-group");
    return nf({ id: a }), (n, o) => (f(), y(s(L), E({ role: "group" }, t, { "aria-labelledby": s(a) }), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), lf = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = af({ id: "" });
    return (n, o) => (f(), y(s(L), E(t, {
      id: s(a).id
    }), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ss = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = ht(), n = gt(Nt), o = Vp(), l = ls(), { forwardRef: r, currentElement: i } = F(), d = B(() => {
      var u;
      return it("option", {
        key: l.value,
        value: l.value,
        disabled: l.disabled.value,
        innerHTML: (u = i.value) == null ? void 0 : u.textContent
      });
    });
    return ce(() => {
      i.value && (l.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        l.value,
        l.disabled.value
      ), o.onNativeOptionAdd(d.value));
    }), Pn(() => {
      o.onNativeOptionRemove(d.value);
    }), (u, c) => (f(), R(X, null, [
      P(s(L), E({
        id: s(l).textId,
        ref: s(r)
      }, { ...t, ...u.$attrs }), {
        default: m(() => [
          _(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(l).isSelected.value && s(a).valueElement.value && !s(a).valueElementHasChildren.value ? (f(), y(Bn, {
        key: 0,
        to: s(a).valueElement.value
      }, [
        _(u.$slots, "default")
      ], 8, ["to"])) : ee("", !0)
    ], 64));
  }
}), sf = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: a } = me(t), n = xc(a), o = gt(Nt), l = o.position === "item-aligned" ? oo() : void 0, { forwardRef: r, currentElement: i } = F();
    ce(() => {
      o == null || o.onViewportChange(i.value);
    });
    const d = M(0);
    function u(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: v, contentWrapper: g } = l ?? {};
      if (v != null && v.value && g != null && g.value) {
        const w = Math.abs(d.value - p.scrollTop);
        if (w > 0) {
          const h = window.innerHeight - ze * 2, x = Number.parseFloat(
            g.value.style.minHeight
          ), C = Number.parseFloat(g.value.style.height), D = Math.max(x, C);
          if (D < h) {
            const $ = D + w, O = Math.min(h, $), S = $ - O;
            g.value.style.height = `${O}px`, g.value.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, g.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = p.scrollTop;
    }
    return (c, p) => (f(), R(X, null, [
      P(s(L), E({
        ref: s(r),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...c.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        },
        onScroll: u
      }), {
        default: m(() => [
          _(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      P(s(L), {
        as: "style",
        nonce: s(n)
      }, {
        default: m(() => [
          Y(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), rs = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const a = t, { injectCollection: n } = na(), o = n(), l = gt(Nt), r = M(null);
    function i() {
      r.value !== null && (window.clearInterval(r.value), r.value = null);
    }
    he(() => {
      const c = o.value.find(
        (p) => p === document.activeElement
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function d() {
      r.value === null && (r.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    function u() {
      var c;
      (c = l.onItemLeave) == null || c.call(l), r.value === null && (r.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    return Pn(() => i()), (c, p) => {
      var v;
      return f(), y(s(L), E({
        "aria-hidden": "",
        style: {
          flexShrink: 0
        }
      }, (v = c.$parent) == null ? void 0 : v.$props, {
        onPointerdown: d,
        onPointermove: u,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: m(() => [
          _(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), rf = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = gt(Nt), a = t.position === "item-aligned" ? oo() : void 0, { forwardRef: n, currentElement: o } = F(), l = M(!1);
    return he((r) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let u = function() {
          l.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        u(), c.addEventListener("scroll", u), r(() => c.removeEventListener("scroll", u));
      }
    }), J(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => l.value ? (f(), y(rs, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: u } = s(t);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop - u.value.offsetHeight);
      })
    }, {
      default: m(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : ee("", !0);
  }
}), df = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = gt(Nt), a = t.position === "item-aligned" ? oo() : void 0, { forwardRef: n, currentElement: o } = F(), l = M(!1);
    return he((r) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let u = function() {
          const p = c.scrollHeight - c.clientHeight;
          l.value = Math.ceil(c.scrollTop) < p;
        };
        const c = t.viewport.value;
        u(), c.addEventListener("scroll", u), r(() => c.removeEventListener("scroll", u));
      }
    }), J(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => l.value ? (f(), y(rs, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: u } = s(t);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop + u.value.offsetHeight);
      })
    }, {
      default: m(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : ee("", !0);
  }
}), uf = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: a } = F(), n = ht(), o = Ss();
    return Es(() => {
      var l;
      const r = !!Ra((l = o == null ? void 0 : o.default) == null ? void 0 : l.call(o)).length;
      n.onValueElementHasChildrenChange(r);
    }), ce(() => {
      n.valueElement = a;
    }), (l, r) => (f(), y(s(L), {
      ref: s(t),
      as: l.as,
      "as-child": l.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: m(() => {
        var i;
        return [
          s(os)((i = s(n).modelValue) == null ? void 0 : i.value) ? (f(), R(X, { key: 0 }, [
            Y(Q(l.placeholder), 1)
          ], 64)) : _(l.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), cf = /* @__PURE__ */ b({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, a) => (f(), y(s(L), {
      "aria-hidden": "",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: m(() => [
        _(t.$slots, "default", {}, () => [
          Y("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function pf() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
pf();
const ff = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [mf, vf] = re("SwitchRoot"), hf = /* @__PURE__ */ b({
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
    const a = e, n = t, { disabled: o } = me(a), l = fe(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    });
    function r() {
      o.value || (l.value = !l.value);
    }
    const { forwardRef: i, currentElement: d } = F(), u = Fa(d), c = B(() => {
      var p;
      return a.id && d.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return vf({
      checked: l,
      toggleCheck: r,
      disabled: o
    }), (p, v) => (f(), R(X, null, [
      P(s(L), E(p.$attrs, {
        id: p.id,
        ref: s(i),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || c.value,
        "aria-checked": s(l),
        "aria-required": p.required,
        "data-state": s(l) ? "checked" : "unchecked",
        "data-disabled": s(o) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        disabled: s(o),
        onClick: r,
        onKeydown: He(we(r, ["prevent"]), ["enter"])
      }), {
        default: m(() => [
          _(p.$slots, "default", { checked: s(l) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(u) ? (f(), R("input", {
        key: 0,
        type: "checkbox",
        name: p.name,
        tabindex: "-1",
        "aria-hidden": "",
        disabled: s(o),
        required: p.required,
        value: p.value,
        checked: !!s(l),
        "data-state": s(l) ? "checked" : "unchecked",
        "data-disabled": s(o) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, ff)) : ee("", !0)
    ], 64));
  }
}), gf = /* @__PURE__ */ b({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = mf();
    return F(), (a, n) => {
      var o;
      return f(), y(s(L), {
        "data-state": (o = s(t).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": s(t).disabled.value ? "" : void 0,
        "as-child": a.asChild,
        as: a.as
      }, {
        default: m(() => [
          _(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [lo, yf] = re("TabsRoot"), bf = /* @__PURE__ */ b({
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
    const a = e, n = t, { orientation: o, dir: l } = me(a), r = ft(l);
    F();
    const i = fe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), d = M();
    return yf({
      modelValue: i,
      changeModelValue: (u) => {
        i.value = u;
      },
      orientation: o,
      dir: r,
      activationMode: a.activationMode,
      baseId: ye(void 0, "radix-vue-tabs"),
      tabsList: d
    }), (u, c) => (f(), y(s(L), {
      dir: s(r),
      "data-orientation": s(o),
      "as-child": u.asChild,
      as: u.as
    }, {
      default: m(() => [
        _(u.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), wf = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: a } = me(t), { forwardRef: n, currentElement: o } = F(), l = lo();
    return l.tabsList = o, (r, i) => (f(), y(s(ql), {
      "as-child": "",
      orientation: s(l).orientation.value,
      dir: s(l).dir.value,
      loop: s(a)
    }, {
      default: m(() => [
        P(s(L), {
          ref: s(n),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": s(l).orientation.value
        }, {
          default: m(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function is(e, t) {
  return `${e}-trigger-${t}`;
}
function ds(e, t) {
  return `${e}-content-${t}`;
}
const _f = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a } = F(), n = lo(), o = B(() => is(n.baseId, t.value)), l = B(() => ds(n.baseId, t.value)), r = B(() => t.value === n.modelValue.value), i = M(r.value);
    return ce(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (d, u) => (f(), y(s(Re), {
      present: r.value,
      "force-mount": ""
    }, {
      default: m(({ present: c }) => [
        P(s(L), {
          id: l.value,
          ref: s(a),
          "as-child": d.asChild,
          as: d.as,
          role: "tabpanel",
          "data-state": r.value ? "active" : "inactive",
          "data-orientation": s(n).orientation.value,
          "aria-labelledby": o.value,
          hidden: !c.value,
          tabindex: "0",
          style: Da({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: m(() => [
            d.forceMount || r.value ? _(d.$slots, "default", { key: 0 }) : ee("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), xf = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: a } = F(), n = lo(), o = B(() => is(n.baseId, t.value)), l = B(() => ds(n.baseId, t.value)), r = B(() => t.value === n.modelValue.value);
    return (i, d) => (f(), y(s(Vc), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: m(() => [
        P(s(L), {
          id: o.value,
          ref: s(a),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": r.value ? "true" : "false",
          "aria-controls": l.value,
          "data-state": r.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": s(n).orientation.value,
          onMousedown: d[0] || (d[0] = we((u) => {
            !i.disabled && u.ctrlKey === !1 ? s(n).changeModelValue(i.value) : u.preventDefault();
          }, ["left"])),
          onKeydown: d[1] || (d[1] = He((u) => s(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: d[2] || (d[2] = () => {
            const u = s(n).activationMode !== "manual";
            !r.value && !i.disabled && u && s(n).changeModelValue(i.value);
          })
        }, {
          default: m(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), us = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    id: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(hp), E(a.value, {
      class: s(z)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        t.class
      )
    }), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cf = { class: "flex gap-2" }, Wv = /* @__PURE__ */ b({
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
    modelValue: { type: [Boolean, null] },
    label: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, o = M(e.modelValue);
    return J(o, (l) => {
      a("update:modelValue", l);
    }), (l, r) => (f(), R("div", Cf, [
      P(s(nc), {
        id: l.id,
        checked: o.value,
        "onUpdate:checked": r[0] || (r[0] = (i) => o.value = i),
        class: "focus-visible:ring-primary-950 dark:ring-offset-primary-950 peer size-4 shrink-0 rounded-sm border border-primary-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-900 data-[state=checked]:text-primary-50 dark:border-primary-50 dark:focus-visible:ring-primary-300 dark:data-[state=checked]:bg-primary-300 dark:data-[state=checked]:text-primary-900"
      }, {
        default: m(() => [
          P(s(oc), { class: "flex h-full w-full items-center justify-center text-current" }, {
            default: m(() => [
              P(s(Ea), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["id", "checked"]),
      l.label ? (f(), y(us, {
        key: 0,
        id: l.id,
        class: "my-auto"
      }, {
        default: m(() => [
          Y(Q(l.label), 1)
        ]),
        _: 1
      }, 8, ["id"])) : ee("", !0)
    ]));
  }
}), cs = /* @__PURE__ */ b({
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
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm", "update:selectedValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = B(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = ae(o, n);
    return (r, i) => (f(), y(s(fc), E(s(l), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        a.class
      ]
    }), {
      default: m(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ps = /* @__PURE__ */ b({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (l, r) => (f(), y(s(lu), U(G(s(o))), {
      default: m(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jv = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(Jn), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $f = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(su), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kf = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("div", {
      class: se(s(z)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Bf = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(Eu), E(s(n), {
      class: s(z)("text-lg leading-none tracking-tight text-slate-500 dark:text-slate-200", t.class)
    }), {
      default: m(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pf = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(Mu), E(s(n), {
      class: s(z)("text-sm text-slate-500 dark:text-slate-500", t.class)
    }), {
      default: m(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Of = /* @__PURE__ */ K("span", { class: "sr-only" }, "Close", -1), fs = /* @__PURE__ */ b({
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
    const a = t, n = e, o = B(() => {
      const { class: r, ...i } = n;
      return i;
    }), l = ae(o, a);
    return (r, i) => (f(), y(s(Sl), null, {
      default: m(() => [
        P(s(Rl), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        P(s(Il), E(s(l), {
          class: s(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg",
            n.class
          )
        }), {
          default: m(() => [
            _(r.$slots, "default"),
            P(s(Jn), {
              onClick: i[0] || (i[0] = (d) => a("close", d)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: m(() => [
                P(s(al), { class: "size-6 dark:text-slate-300" }),
                Of
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
}), Df = /* @__PURE__ */ K("span", { class: "sr-only" }, "Close", -1), Uv = /* @__PURE__ */ b({
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
    const a = e, n = t, o = B(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = ae(o, n);
    return (r, i) => (f(), y(s(Sl), null, {
      default: m(() => [
        P(s(Rl), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: m(() => [
            P(s(Il), E({
              class: s(z)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg md:w-full",
                a.class
              )
            }, s(l), {
              onPointerDownOutside: i[0] || (i[0] = (d) => {
                const u = d.detail.originalEvent, c = u.target;
                (u.offsetX > c.clientWidth || u.offsetY > c.clientHeight) && d.preventDefault();
              })
            }), {
              default: m(() => [
                _(r.$slots, "default"),
                P(s(Jn), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: m(() => [
                    P(s(al), { class: "size-4" }),
                    Df
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
}), Sf = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("div", {
      class: se(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Hv = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (l, r) => (f(), y(s(ps), U(G(s(o))), {
      default: m(() => [
        P(s(fs), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: m(() => [
            P(cs, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: m(() => [
                _(l.$slots, "default")
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
}), Ef = /* @__PURE__ */ b({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(_c), E(a.value, {
      class: s(z)("py-6 text-center text-sm", t.class)
    }), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mf = /* @__PURE__ */ b({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(hc), E(a.value, {
      class: s(z)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: m(() => [
        n.heading ? (f(), y(s(gc), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: m(() => [
            Y(Q(n.heading), 1)
          ]),
          _: 1
        })) : ee("", !0),
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Af = { class: "flex items-center border-b px-3" }, Tf = /* @__PURE__ */ b({
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
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), R("div", Af, [
      P(s(Fr), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      P(s(mc), E({ ...s(n), ...o.$attrs }, {
        "auto-focus": "",
        class: s(z)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), If = /* @__PURE__ */ b({
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
    const a = e, n = t, o = B(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = ae(o, n);
    return (r, i) => (f(), y(s(kc), E(s(l), { class: "relative flex cursor-default select-none rounded-sm px-1 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: m(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rf = { role: "presentation" }, Vf = /* @__PURE__ */ b({
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
    const a = e, n = t, o = B(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = ae(o, n);
    return (r, i) => (f(), y(s(wc), E(s(l), {
      class: s(z)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: m(() => [
        K("div", Rf, [
          _(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kv = /* @__PURE__ */ b({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(Bc), E(a.value, {
      class: s(z)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gv = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("span", {
      class: se(s(z)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), ms = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (l, r) => (f(), y(s(Op), U(G(s(o))), {
      default: m(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vs = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(Dp), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hs = /* @__PURE__ */ b({
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
    const a = e, n = t, o = B(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = ae(o, n);
    return (r, i) => (f(), y(s(Sp), null, {
      default: m(() => [
        P(s(Ap), E({ ...s(l), ...r.$attrs }, {
          class: s(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: m(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ff = { class: "overflow-hidden !font-normal dark:text-white" }, qv = /* @__PURE__ */ b({
  __name: "Combobox",
  props: {
    modelValue: {},
    placeholder: { default: "Select option..." },
    noResults: { default: "No option found." },
    options: {},
    multiple: { type: Boolean, default: !1 },
    allowSearch: { type: Boolean, default: !1 },
    widthClass: { default: "w-44" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = M(!1), l = M(n.modelValue ?? []), r = (c) => {
      n.multiple || (o.value = !1);
    }, i = B(() => n.multiple ? l.value.map((c) => c.name).join(", ") : typeof l.value == "object" ? l.value.name : typeof l.value == "number" ? n.options.find((c) => c.id === l.value).name : n.placeholder), d = (c, p) => c.filter((v) => v.name.toLowerCase().includes(p.toLowerCase())), u = (c) => n.multiple ? l.value.find((p) => p.id === c.id) : typeof l.value == "object" ? l.value.id === c.id : typeof l.value == "number" ? l.value === c.id : !1;
    return J(l, () => {
      n.multiple ? a("update:modelValue", l.value) : a("update:modelValue", l.value.id);
    }), (c, p) => (f(), y(s(ms), {
      open: o.value,
      "onUpdate:open": p[1] || (p[1] = (v) => o.value = v)
    }, {
      default: m(() => [
        P(s(vs), { "as-child": "" }, {
          default: m(() => [
            P(s(ct), {
              variant: "outline",
              role: "combobox",
              "aria-expanded": o.value,
              class: se(["justify-between", [c.widthClass]])
            }, {
              default: m(() => [
                K("div", Ff, [
                  c.$slots.selectedOptions ? _(c.$slots, "selectedOptions", {
                    key: 0,
                    selectedOptions: l.value
                  }) : (f(), R(X, { key: 1 }, [
                    Y(Q(i.value), 1)
                  ], 64))
                ]),
                P(s(Ir), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
              ]),
              _: 3
            }, 8, ["aria-expanded", "class"])
          ]),
          _: 3
        }),
        P(s(hs), {
          class: se(["!p-0", [c.widthClass]])
        }, {
          default: m(() => [
            P(s(cs), {
              multiple: c.multiple,
              "filter-function": d,
              modelValue: l.value,
              "onUpdate:modelValue": p[0] || (p[0] = (v) => l.value = v)
            }, {
              default: m(() => [
                c.allowSearch ? (f(), y(s(Tf), {
                  key: 0,
                  class: "h-9",
                  placeholder: c.placeholder
                }, null, 8, ["placeholder"])) : ee("", !0),
                P(s(Ef), null, {
                  default: m(() => [
                    Y(Q(c.noResults), 1)
                  ]),
                  _: 1
                }),
                P(s(Vf), null, {
                  default: m(() => [
                    P(s(Mf), null, {
                      default: m(() => [
                        (f(!0), R(X, null, ve(c.options, (v) => (f(), y(s(If), {
                          key: v.id,
                          id: v.id,
                          value: v,
                          onSelect: (g) => r()
                        }, {
                          default: m(() => [
                            P(s(Ea), {
                              class: se(["mr-2 size-4", [u(v) ? "opacity-100" : "opacity-0"]])
                            }, null, 8, ["class"]),
                            c.$slots.item ? _(c.$slots, "item", {
                              key: 0,
                              option: v
                            }) : (f(), R(X, { key: 1 }, [
                              Y(Q(v.name), 1)
                            ], 64))
                          ]),
                          _: 2
                        }, 1032, ["id", "value", "onSelect"]))), 128))
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["multiple", "modelValue"])
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Lf = /* @__PURE__ */ b({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(Ku), E({
      class: s(z)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        t.class
      )
    }, s(n)), {
      default: m(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Nf = /* @__PURE__ */ b({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(Qu), E({
      class: s(z)(
        s(Sa)({ variant: "ghost" }),
        "h-9 w-9 p-0 font-normal",
        "[&[data-today]:not([data-selected])]:bg-slate-100 [&[data-today]:not([data-selected])]:text-slate-900 dark:[&[data-today]:not([data-selected])]:bg-slate-800 dark:[&[data-today]:not([data-selected])]:text-slate-50",
        // Selected
        "data-[selected]:bg-slate-900 data-[selected]:text-slate-50 data-[selected]:opacity-100 data-[selected]:hover:bg-slate-900 data-[selected]:hover:text-slate-50 data-[selected]:focus:bg-slate-900 data-[selected]:focus:text-slate-50 dark:data-[selected]:bg-slate-50 dark:data-[selected]:text-slate-900 dark:data-[selected]:hover:bg-slate-50 dark:data-[selected]:hover:text-slate-900 dark:data-[selected]:focus:bg-slate-50 dark:data-[selected]:focus:text-slate-900",
        // Disabled
        "data-[disabled]:text-slate-500 data-[disabled]:opacity-50 dark:data-[disabled]:text-slate-400",
        // Unavailable
        "data-[unavailable]:text-slate-50 data-[unavailable]:line-through dark:data-[unavailable]:text-slate-50",
        // Outside months
        "data-[outside-view]:text-slate-500 data-[outside-view]:opacity-50 dark:data-[outside-view]:text-slate-400 [&[data-outside-view][data-selected]]:bg-slate-100/50 [&[data-outside-view][data-selected]]:text-slate-500 [&[data-outside-view][data-selected]]:opacity-30 dark:[&[data-outside-view][data-selected]]:bg-slate-800/50 dark:[&[data-outside-view][data-selected]]:text-slate-400",
        t.class
      )
    }, s(n)), {
      default: m(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zf = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(Hu), E({
      class: s(z)("w-full border-collapse space-y-1", t.class)
    }, s(n)), {
      default: m(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wf = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(Ju), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jf = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(Zu), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mo = /* @__PURE__ */ b({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(Xu), E({
      class: s(z)("flex", t.class)
    }, s(n)), {
      default: m(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Uf = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(Gu), E({
      class: s(z)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, s(n)), {
      default: m(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hf = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(ju), E({
      class: s(z)("relative flex w-full items-center justify-between pt-1", t.class)
    }, s(n)), {
      default: m(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kf = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(Uu), E({
      class: s(z)("text-sm font-medium", t.class)
    }, s(n)), {
      default: m(({ headingValue: r }) => [
        _(o.$slots, "default", { headingValue: r }, () => [
          Y(Q(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gf = /* @__PURE__ */ b({
  __name: "CalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(qu), E({
      class: s(z)(
        s(Sa)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, s(n)), {
      default: m(() => [
        Y(" > ")
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), qf = /* @__PURE__ */ b({
  __name: "CalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(Yu), E({
      class: s(z)(
        s(Sa)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, s(n)), {
      default: m(() => [
        Y(" < ")
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Yf = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, Zf = /* @__PURE__ */ b({
  __name: "Calendar",
  props: {
    modelValue: {},
    multiple: { type: Boolean },
    defaultValue: {},
    defaultPlaceholder: {},
    placeholder: {},
    pagedNavigation: { type: Boolean },
    preventDeselect: { type: Boolean },
    weekStartsOn: {},
    weekdayFormat: {},
    calendarLabel: {},
    fixedWeeks: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: {},
    numberOfMonths: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    initialFocus: { type: Boolean },
    isDateDisabled: { type: Function },
    isDateUnavailable: { type: Function },
    dir: {},
    nextPage: { type: Function },
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = B(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = ae(o, n);
    return (r, i) => (f(), y(s(Wu), E({
      class: s(z)("p-3", a.class)
    }, s(l)), {
      default: m(({ grid: d, weekDays: u }) => [
        P(s(Hf), null, {
          default: m(() => [
            P(s(qf)),
            P(s(Kf)),
            P(s(Gf))
          ]),
          _: 1
        }),
        K("div", Yf, [
          (f(!0), R(X, null, ve(d, (c) => (f(), y(s(zf), {
            key: c.value.toString()
          }, {
            default: m(() => [
              P(s(jf), null, {
                default: m(() => [
                  P(s(Mo), null, {
                    default: m(() => [
                      (f(!0), R(X, null, ve(u, (p) => (f(), y(s(Uf), { key: p }, {
                        default: m(() => [
                          Y(Q(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              P(s(Wf), null, {
                default: m(() => [
                  (f(!0), R(X, null, ve(c.rows, (p, v) => (f(), y(s(Mo), {
                    key: `weekDate-${v}`,
                    class: "mt-2 w-full"
                  }, {
                    default: m(() => [
                      (f(!0), R(X, null, ve(p, (g) => (f(), y(s(Lf), {
                        key: g.toString(),
                        date: g
                      }, {
                        default: m(() => [
                          P(s(Nf), {
                            day: g,
                            month: c.value
                          }, null, 8, ["day", "month"])
                        ]),
                        _: 2
                      }, 1032, ["date"]))), 128))
                    ]),
                    _: 2
                  }, 1024))), 128))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ]),
      _: 1
    }, 16, ["class"]));
  }
});
function gs(e) {
  return $n() ? (kn(e), !0) : !1;
}
function Wa(e) {
  return typeof e == "function" ? e() : s(e);
}
const Jf = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Xf = (e) => typeof e < "u", Qf = Object.prototype.toString, em = (e) => Qf.call(e) === "[object Object]", ys = () => {
};
function tm(e, t) {
  function a(...n) {
    return new Promise((o, l) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(l);
    });
  }
  return a;
}
const bs = (e) => e();
function am(e = bs) {
  const t = M(!0);
  function a() {
    t.value = !1;
  }
  function n() {
    t.value = !0;
  }
  const o = (...l) => {
    t.value && e(...l);
  };
  return { isActive: On(t), pause: a, resume: n, eventFilter: o };
}
function nm(e) {
  return Te();
}
function om(...e) {
  if (e.length !== 1)
    return Fo(...e);
  const t = e[0];
  return typeof t == "function" ? On(Uo(() => ({ get: t, set: ys }))) : M(t);
}
function lm(e, t, a = {}) {
  const {
    eventFilter: n = bs,
    ...o
  } = a;
  return J(
    e,
    tm(
      n,
      t
    ),
    o
  );
}
function sm(e, t, a = {}) {
  const {
    eventFilter: n,
    ...o
  } = a, { eventFilter: l, pause: r, resume: i, isActive: d } = am(n);
  return { stop: lm(
    e,
    t,
    {
      ...o,
      eventFilter: l
    }
  ), pause: r, resume: i, isActive: d };
}
function ws(e, t = !0, a) {
  nm() ? ce(e, a) : t ? e() : te(e);
}
function _s(e) {
  var t;
  const a = Wa(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const Mt = Jf ? window : void 0;
function Ao(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = Mt) : [t, a, n, o] = e, !t)
    return ys;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const l = [], r = () => {
    l.forEach((c) => c()), l.length = 0;
  }, i = (c, p, v, g) => (c.addEventListener(p, v, g), () => c.removeEventListener(p, v, g)), d = J(
    () => [_s(t), Wa(o)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const v = em(p) ? { ...p } : p;
      l.push(
        ...a.flatMap((g) => n.map((w) => i(c, g, w, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), r();
  };
  return gs(u), u;
}
function rm() {
  const e = M(!1), t = Te();
  return t && ce(() => {
    e.value = !0;
  }, t), e;
}
function im(e) {
  const t = rm();
  return B(() => (t.value, !!e()));
}
function dm(e, t = {}) {
  const { window: a = Mt } = t, n = im(() => a && "matchMedia" in a && typeof a.matchMedia == "function");
  let o;
  const l = M(!1), r = (u) => {
    l.value = u.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", r) : o.removeListener(r));
  }, d = he(() => {
    n.value && (i(), o = a.matchMedia(Wa(e)), "addEventListener" in o ? o.addEventListener("change", r) : o.addListener(r), l.value = o.matches);
  });
  return gs(() => {
    d(), i(), o = void 0;
  }), l;
}
function um(e) {
  return JSON.parse(JSON.stringify(e));
}
const ya = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ba = "__vueuse_ssr_handlers__", cm = /* @__PURE__ */ pm();
function pm() {
  return ba in ya || (ya[ba] = ya[ba] || {}), ya[ba];
}
function xs(e, t) {
  return cm[e] || t;
}
function fm(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const mm = {
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
}, To = "vueuse-storage";
function vm(e, t, a, n = {}) {
  var o;
  const {
    flush: l = "pre",
    deep: r = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: d = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: p = Mt,
    eventFilter: v,
    onError: g = (k) => {
      console.error(k);
    },
    initOnMounted: w
  } = n, h = (c ? Cn : M)(typeof t == "function" ? t() : t);
  if (!a)
    try {
      a = xs("getDefaultStorage", () => {
        var k;
        return (k = Mt) == null ? void 0 : k.localStorage;
      })();
    } catch (k) {
      g(k);
    }
  if (!a)
    return h;
  const x = Wa(t), C = fm(x), D = (o = n.serializer) != null ? o : mm[C], { pause: $, resume: O } = sm(
    h,
    () => A(h.value),
    { flush: l, deep: r, eventFilter: v }
  );
  p && i && ws(() => {
    Ao(p, "storage", W), Ao(p, To, j), w && W();
  }), w || W();
  function S(k, I) {
    p && p.dispatchEvent(new CustomEvent(To, {
      detail: {
        key: e,
        oldValue: k,
        newValue: I,
        storageArea: a
      }
    }));
  }
  function A(k) {
    try {
      const I = a.getItem(e);
      if (k == null)
        S(I, null), a.removeItem(e);
      else {
        const V = D.write(k);
        I !== V && (a.setItem(e, V), S(I, V));
      }
    } catch (I) {
      g(I);
    }
  }
  function T(k) {
    const I = k ? k.newValue : a.getItem(e);
    if (I == null)
      return d && x != null && a.setItem(e, D.write(x)), x;
    if (!k && u) {
      const V = D.read(I);
      return typeof u == "function" ? u(V, x) : C === "object" && !Array.isArray(V) ? { ...x, ...V } : V;
    } else return typeof I != "string" ? I : D.read(I);
  }
  function W(k) {
    if (!(k && k.storageArea !== a)) {
      if (k && k.key == null) {
        h.value = x;
        return;
      }
      if (!(k && k.key !== e)) {
        $();
        try {
          (k == null ? void 0 : k.newValue) !== D.write(h.value) && (h.value = T(k));
        } catch (I) {
          g(I);
        } finally {
          k ? te(O) : O();
        }
      }
    }
  }
  function j(k) {
    W(k.detail);
  }
  return h;
}
function Cs(e) {
  return dm("(prefers-color-scheme: dark)", e);
}
function hm(e = {}) {
  const {
    selector: t = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = Mt,
    storage: l,
    storageKey: r = "vueuse-color-scheme",
    listenToStorageChanges: i = !0,
    storageRef: d,
    emitAuto: u,
    disableTransition: c = !0
  } = e, p = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, v = Cs({ window: o }), g = B(() => v.value ? "dark" : "light"), w = d || (r == null ? om(n) : vm(r, n, l, { window: o, listenToStorageChanges: i })), h = B(() => w.value === "auto" ? g.value : w.value), x = xs(
    "updateHTMLAttrs",
    (O, S, A) => {
      const T = typeof O == "string" ? o == null ? void 0 : o.document.querySelector(O) : _s(O);
      if (!T)
        return;
      let W;
      if (c && (W = o.document.createElement("style"), W.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(W)), S === "class") {
        const j = A.split(/\s/g);
        Object.values(p).flatMap((k) => (k || "").split(/\s/g)).filter(Boolean).forEach((k) => {
          j.includes(k) ? T.classList.add(k) : T.classList.remove(k);
        });
      } else
        T.setAttribute(S, A);
      c && (o.getComputedStyle(W).opacity, document.head.removeChild(W));
    }
  );
  function C(O) {
    var S;
    x(t, a, (S = p[O]) != null ? S : O);
  }
  function D(O) {
    e.onChanged ? e.onChanged(O, C) : C(O);
  }
  J(h, D, { flush: "post", immediate: !0 }), ws(() => D(h.value));
  const $ = B({
    get() {
      return u ? w.value : h.value;
    },
    set(O) {
      w.value = O;
    }
  });
  try {
    return Object.assign($, { store: w, system: g, state: h });
  } catch {
    return $;
  }
}
function gm(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: a = "",
    window: n = Mt
  } = e, o = hm({
    ...e,
    onChanged: (i, d) => {
      var u;
      e.onChanged ? (u = e.onChanged) == null || u.call(e, i === "dark", d, i) : d(i);
    },
    modes: {
      dark: t,
      light: a
    }
  }), l = B(() => o.system ? o.system.value : Cs({ window: n }).value ? "dark" : "light");
  return B({
    get() {
      return o.value === "dark";
    },
    set(i) {
      const d = i ? "dark" : "light";
      l.value === d ? o.value = "auto" : o.value = d;
    }
  });
}
function ym(e, t, a, n = {}) {
  var o, l, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: v
  } = n, g = Te(), w = a || (g == null ? void 0 : g.emit) || ((o = g == null ? void 0 : g.$emit) == null ? void 0 : o.bind(g)) || ((r = (l = g == null ? void 0 : g.proxy) == null ? void 0 : l.$emit) == null ? void 0 : r.bind(g == null ? void 0 : g.proxy));
  let h = u;
  h = h || `update:${t.toString()}`;
  const x = ($) => i ? typeof i == "function" ? i($) : um($) : $, C = () => Xf(e[t]) ? x(e[t]) : p, D = ($) => {
    v ? v($) && w(h, $) : w(h, $);
  };
  if (d) {
    const $ = C(), O = M($);
    let S = !1;
    return J(
      () => e[t],
      (A) => {
        S || (S = !0, O.value = x(A), te(() => S = !1));
      }
    ), J(
      O,
      (A) => {
        !S && (A !== e[t] || c) && D(A);
      },
      { deep: c }
    ), O;
  } else
    return B({
      get() {
        return C();
      },
      set($) {
        D($);
      }
    });
}
const bm = /* @__PURE__ */ b({
  __name: "Toggle",
  props: /* @__PURE__ */ dn({
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
    class: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ dn(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const a = t, n = e, o = Ko(e, "modelValue");
    J(o, () => {
      a("update:modelValue", o.value);
    });
    const l = B(() => {
      const { class: i, ...d } = n;
      return d;
    }), r = ae(l, a);
    return (i, d) => (f(), y(s(hf), E({
      checked: o.value,
      "onUpdate:checked": d[0] || (d[0] = (u) => o.value = u)
    }, s(r), {
      class: s(z)(
        "focus-visible:ring-primary-950 dark:focus-visible:ring-offset-primary-950 peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-600 data-[state=unchecked]:bg-primary-300 dark:focus-visible:ring-primary-300 dark:data-[state=checked]:bg-primary-800 dark:data-[state=unchecked]:bg-primary-600",
        n.class
      )
    }), {
      default: m(({ checked: u }) => [
        P(s(gf), { class: "dark:bg-primary-950 pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" }, {
          default: m(() => [
            u ? _(i.$slots, "checked", { key: 0 }) : ee("", !0),
            u ? ee("", !0) : _(i.$slots, "not-checked", { key: 1 })
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["checked", "class"]));
  }
}), Yv = /* @__PURE__ */ b({
  __name: "DarkModeToggle",
  setup(e) {
    const t = gm({
      selector: "html"
    });
    return (a, n) => (f(), y(bm, {
      modelValue: s(t),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => Xt(t) ? t.value = o : null)
    }, {
      checked: m(() => [
        P(s(Lr), { class: "m-auto mt-0.5 size-4 text-primary-900" })
      ]),
      "not-checked": m(() => [
        P(s(Nr), { class: "m-auto size-5 text-primary-900" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Zv = /* @__PURE__ */ b({
  __name: "CollapsibleTableRow",
  props: {
    row: {},
    headers: {},
    subRows: {},
    setOpenTo: { type: Boolean, default: !1 },
    class: {}
  },
  setup(e) {
    const t = e, a = M(t.setOpenTo), n = () => {
      a.value = !a.value;
    };
    return (o, l) => (f(), R(X, null, [
      P(s(Jt), {
        onClick: n,
        class: se(t.class)
      }, {
        default: m(() => [
          (f(!0), R(X, null, ve(o.headers, (r) => (f(), y(s(Oa), {
            key: r.value
          }, {
            default: m(() => [
              o.$slots[`cell_header_${r.value}`] ? _(o.$slots, `cell_header_${r.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (f(), R(X, { key: 1 }, [
                Y(Q(o.row[r.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (f(), y(s(_n), { key: 0 }, {
            default: m(() => [
              _(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : ee("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (f(!0), R(X, { key: 0 }, ve(o.subRows, (r, i) => (f(), y(s(Jt), { key: i }, {
        default: m(() => [
          (f(!0), R(X, null, ve(o.headers, (d) => (f(), y(s(Oa), {
            key: d.value
          }, {
            default: m(() => [
              o.$slots[`subrow_cell_${d.value}`] ? _(o.$slots, `subrow_cell_${d.value}`, {
                key: 0,
                item: r,
                open: a.value
              }) : (f(), R(X, { key: 1 }, [
                Y(Q("subrow_cell_" + d.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (f(), y(s(_n), { key: 0 }, {
            default: m(() => [
              _(o.$slots, "sub_row_actions", {
                item: o.row,
                open: a.value
              })
            ]),
            _: 3
          })) : ee("", !0)
        ]),
        _: 2
      }, 1024))), 128)) : ee("", !0)
    ], 64));
  }
}), wm = { class: "relative w-full overflow-auto" }, _m = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("div", wm, [
      K("table", {
        class: se(s(z)("w-full caption-bottom text-sm", t.class))
      }, [
        _(a.$slots, "default")
      ], 2)
    ]));
  }
}), xm = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("tbody", {
      class: se(s(z)("[&_tr:last-child]:border-0", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Oa = /* @__PURE__ */ b({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("td", {
      class: se(["p-4 align-middle dark:text-slate-300 [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Cm = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("th", {
      class: se(
        s(z)(
          "h-12 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400 [&:has([role=checkbox])]:pr-0",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), $m = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("thead", {
      class: se(s(z)("[&_tr]:border-b", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Jv = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("tfoot", {
      class: se(
        s(z)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Jt = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("tr", {
      class: se(
        s(z)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), _n = /* @__PURE__ */ b({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("td", {
      class: se(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), km = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("caption", {
      class: se(s(z)("mt-4 text-sm text-slate-500 dark:text-slate-400", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Bm = { class: "flex items-center justify-center py-10" }, Xv = /* @__PURE__ */ b({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(Jt, null, {
      default: m(() => [
        P(Oa, E({
          class: s(z)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, a.value), {
          default: m(() => [
            K("div", Bm, [
              _(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Qv = /* @__PURE__ */ b({
  __name: "Datatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, a) => (f(), y(s(_m), null, {
      default: m(() => [
        t.caption ? (f(), y(s(km), { key: 0 }, {
          default: m(() => [
            Y(Q(t.caption), 1)
          ]),
          _: 1
        })) : ee("", !0),
        P(s($m), null, {
          default: m(() => [
            P(s(Jt), null, {
              default: m(() => [
                (f(!0), R(X, null, ve(t.headers, (n, o) => (f(), y(s(Cm), null, {
                  default: m(() => [
                    t.$slots[`header_${t.headers[o].value}`] ? _(t.$slots, `header_${t.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (f(), R(X, { key: 1 }, [
                      Y(Q(n.name), 1)
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
        P(s(xm), null, {
          default: m(() => [
            _(t.$slots, "default", { item: t.rows }, () => [
              (f(!0), R(X, null, ve(t.rows, (n, o) => (f(), y(s(Jt), { key: o }, {
                default: m(() => [
                  (f(!0), R(X, null, ve(t.headers, (l) => (f(), y(s(Oa), {
                    key: l.value
                  }, {
                    default: m(() => [
                      t.$slots[`cell_${l.value}`] ? _(t.$slots, `cell_${l.value}`, {
                        key: 0,
                        item: n
                      }) : (f(), R(X, { key: 1 }, [
                        Y(Q(n[l.value]), 1)
                      ], 64))
                    ]),
                    _: 2
                  }, 1024))), 128)),
                  t.$slots.row_actions ? (f(), y(s(_n), { key: 0 }, {
                    default: m(() => [
                      _(t.$slots, "row_actions", { item: n })
                    ]),
                    _: 2
                  }, 1024)) : ee("", !0)
                ]),
                _: 2
              }, 1024))), 128))
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Pm = /* @__PURE__ */ b({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (l, r) => (f(), y(s(np), U(G(s(o))), {
      default: m(({ open: i }) => [
        _(l.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), $s = /* @__PURE__ */ b({
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
    return (a, n) => (f(), R("div", {
      class: se(
        s(z)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Om = /* @__PURE__ */ b({
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
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y($s, {
      class: se(t.class)
    }, {
      default: m(() => [
        P(s(es), E(s(n), {
          as: o.as,
          href: o.href,
          class: "size-full"
        }), {
          default: m(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "href"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Dm = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = ie(e);
    return (n, o) => (f(), y(s(op), E({ class: "outline-none" }, s(a)), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sm = /* @__PURE__ */ b({
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
    const a = e, n = t, o = B(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = ae(o, n);
    return (r, i) => (f(), y(s(lp), null, {
      default: m(() => [
        P(s(sp), E(s(l), {
          class: s(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: m(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), eh = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(rp), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), th = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (l, r) => (f(), y(s(cp), U(G(s(o))), {
      default: m(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ah = /* @__PURE__ */ b({
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
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y($s, {
      class: se(t.class)
    }, {
      default: m(() => [
        P(s(es), E(s(n), { class: "size-full" }), {
          default: m(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Em = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, nh = /* @__PURE__ */ b({
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
    const a = e, n = t, o = B(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = ae(o, n);
    return (r, i) => (f(), y(s(dp), E(s(l), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
        a.class
      )
    }), {
      default: m(() => [
        K("span", Em, [
          P(s(ts), null, {
            default: m(() => [
              P(s(Ea), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function ks(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Io(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    K("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  ]);
}
const Mm = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, oh = /* @__PURE__ */ b({
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
    const a = e, n = t, o = B(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = ae(o, n);
    return (r, i) => (f(), y(s(pp), E(s(l), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
        a.class
      )
    }), {
      default: m(() => [
        K("span", Mm, [
          P(s(ts), null, {
            default: m(() => [
              P(s(ks), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lh = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("span", {
      class: se(s(z)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), sh = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(ip), E(a.value, {
      class: s(z)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), rh = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(up), E(s(n), {
      class: s(z)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", t.class)
    }), {
      default: m(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ih = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (l, r) => (f(), y(s(fp), U(G(s(o))), {
      default: m(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dh = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(vp), E(s(n), {
      class: s(z)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800",
        t.class
      )
    }), {
      default: m(() => [
        _(o.$slots, "default"),
        P(s(tl), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uh = /* @__PURE__ */ b({
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
    const a = e, n = t, o = B(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = ae(o, n);
    return (r, i) => (f(), y(s(mp), E(s(l), {
      class: s(z)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        a.class
      )
    }), {
      default: m(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Am = /* @__PURE__ */ b({
  __name: "Dropdown",
  props: {
    triggerClass: {},
    widthClass: { default: "w-56" }
  },
  setup(e) {
    return (t, a) => (f(), y(s(Pm), null, {
      default: m(({ open: n }) => [
        P(s(Dm), {
          "as-child": "",
          class: se([t.triggerClass])
        }, {
          default: m(() => [
            _(t.$slots, "trigger", { open: n })
          ]),
          _: 2
        }, 1032, ["class"]),
        P(s(Sm), {
          class: se([t.widthClass])
        }, {
          default: m(() => [
            _(t.$slots, "content")
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }));
  }
}), Tm = { class: "text-black dark:text-slate-400" }, ch = /* @__PURE__ */ b({
  __name: "Modal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const a = t, n = () => a("close");
    return (o, l) => (f(), y(s(ps), { open: o.open }, {
      default: m(() => [
        P(s($f), null, {
          default: m(() => [
            _(o.$slots, "trigger")
          ]),
          _: 3
        }),
        P(s(fs), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: se("max-w-" + o.size)
        }, {
          default: m(() => [
            P(s(kf), null, {
              default: m(() => [
                P(s(Bf), null, {
                  default: m(() => {
                    var r;
                    return [
                      o.$slots.header ? _(o.$slots, "header", { key: 0 }) : (r = o.headerData) != null && r.title ? (f(), R(X, { key: 1 }, [
                        Y(Q(o.headerData.title), 1)
                      ], 64)) : ee("", !0)
                    ];
                  }),
                  _: 3
                }),
                P(s(Pf), null, {
                  default: m(() => {
                    var r;
                    return [
                      o.$slots.description ? _(o.$slots, "description", { key: 0 }) : (r = o.headerData) != null && r.description ? (f(), R(X, { key: 1 }, [
                        Y(Q(o.headerData.description), 1)
                      ], 64)) : ee("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            K("div", Tm, [
              o.$slots.content ? _(o.$slots, "content", { key: 0 }) : _(o.$slots, "default", { key: 1 })
            ]),
            P(s(Sf), null, {
              default: m(() => [
                _(o.$slots, "footer")
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
}), Im = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(bp), E(a.value, {
      class: s(z)("flex h-9 w-9 items-center justify-center", t.class)
    }), {
      default: m(() => [
        P(s(Vr), { class: "size-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Rm = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {},
    href: {},
    is: { default: "a" }
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(wp), U(G(a.value)), {
      default: m(() => [
        P(s(ct), {
          href: n.href,
          is: n.is,
          as: n.as,
          class: "size-10 p-0",
          variant: "outline"
        }, {
          default: m(() => [
            P(s(Mr), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["href", "is", "as"])
      ]),
      _: 1
    }, 16));
  }
}), Vm = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {},
    href: {},
    is: { default: "a" }
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(_p), U(G(a.value)), {
      default: m(() => [
        P(s(ct), {
          href: n.href,
          is: n.is,
          as: n.as,
          class: "size-10 p-0",
          variant: "outline"
        }, {
          default: m(() => [
            P(s(Ar), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["href", "is", "as"])
      ]),
      _: 1
    }, 16));
  }
}), Fm = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    href: {},
    class: {},
    disabled: { type: Boolean },
    is: { default: "a" }
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(kp), U(G(a.value)), {
      default: m(() => [
        P(s(ct), {
          class: se(s(z)("size-10 p-0", t.class)),
          is: n.is,
          as: n.as,
          href: n.href,
          variant: "outline"
        }, {
          default: m(() => [
            P(s(tl), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["class", "is", "as", "href"])
      ]),
      _: 1
    }, 16));
  }
}), Lm = /* @__PURE__ */ b({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    href: {},
    class: {},
    is: { default: "a" }
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(Bp), U(G(a.value)), {
      default: m(() => [
        P(s(ct), {
          class: se(s(z)("size-10 p-0", t.class)),
          href: n.href,
          is: n.is,
          as: n.as,
          variant: "outline"
        }, {
          default: m(() => [
            P(s(Tr), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["class", "href", "is", "as"])
      ]),
      _: 1
    }, 16));
  }
}), Nm = { class: "my-auto text-slate-400 dark:text-slate-100" }, zm = /* @__PURE__ */ b({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, a) => (f(), R("div", Nm, " Showing " + Q(t.min) + " to " + Q(t.max) + " of " + Q(t.total) + " results ", 1));
  }
}), Wm = { class: "justify-between sm:flex" }, ph = /* @__PURE__ */ b({
  __name: "Pagination",
  props: {
    data: {},
    is: { default: "a" },
    as: {}
  },
  setup(e) {
    const t = e, a = () => t.data.current_page === 1 ? t.data.data.length === 0 ? 0 : 1 : t.data.current_page === t.data.last_page ? t.data.total - t.data.data.length : t.data.current_page * t.data.per_page - t.data.per_page, n = () => t.data.current_page === 1 ? t.data.data.length : t.data.current_page === t.data.last_page ? t.data.total : t.data.current_page * t.data.per_page;
    return (o, l) => (f(), R("div", Wm, [
      P(s(zm), {
        min: a(),
        max: n(),
        total: o.data.total
      }, null, 8, ["min", "max", "total"]),
      P(s(yp), null, {
        default: m(() => [
          P(s($p), { class: "flex items-center gap-1" }, {
            default: m(() => [
              P(s(Rm), {
                is: o.is,
                as: o.as,
                href: o.data.first_page_url
              }, null, 8, ["is", "as", "href"]),
              o.data.prev_page_url ? (f(), y(s(Lm), {
                key: 0,
                is: o.is,
                as: o.as,
                href: o.data.prev_page_url
              }, null, 8, ["is", "as", "href"])) : ee("", !0),
              (f(!0), R(X, null, ve(o.data.links, (r, i) => (f(), R(X, null, [
                i < 5 ? (f(), R("div", { key: i }, [
                  P(s(ct), {
                    href: r.url,
                    is: o.is,
                    as: o.as,
                    class: "size-10 p-0",
                    variant: r.active ? "primary" : "outline"
                  }, {
                    default: m(() => [
                      Y(Q(r.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["href", "is", "as", "variant"])
                ])) : ee("", !0)
              ], 64))), 256)),
              o.data.links.length > 5 ? (f(), y(s(Im), { key: 1 })) : ee("", !0),
              o.data.next_page_url ? (f(), y(s(Fm), {
                key: 2,
                is: o.is,
                as: o.as,
                href: o.data.next_page_url
              }, null, 8, ["is", "as", "href"])) : ee("", !0),
              P(s(Vm), {
                is: o.is,
                as: o.as,
                href: o.data.last_page_url
              }, null, 8, ["is", "as", "href"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}), jm = /* @__PURE__ */ b({
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
    const o = ae(e, t);
    return (l, r) => (f(), y(s(bf), U(G(s(o))), {
      default: m(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fh = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(xf), E(s(n), {
      class: s(z)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        t.class
      )
    }), {
      default: m(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Um = /* @__PURE__ */ b({
  __name: "TabsItem",
  props: {
    class: {},
    is: { default: "a" },
    tab: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(Me(a.is), {
      href: a.tab.href,
      class: se([
        a.tab.active ? "bg-white text-primary-500 hover:bg-opacity-80 dark:bg-slate-950 dark:text-primary-400" : "hover:bg-white dark:hover:bg-slate-900",
        s(z)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
          t.class
        )
      ])
    }, {
      default: m(() => {
        var o;
        return [
          (o = a.tab) != null && o.icon ? (f(), y(Me(a.tab.icon), {
            key: 0,
            class: "size-5"
          })) : ee("", !0),
          Y(" " + Q(a.tab.name), 1)
        ];
      }),
      _: 1
    }, 8, ["href", "class"]));
  }
}), Ro = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(wf), E(a.value, {
      class: s(z)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        t.class
      )
    }), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mh = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(_f), E({
      class: s(z)(
        "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        t.class
      )
    }, a.value), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hm = {}, Km = { class: "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function Gm(e, t) {
  return f(), R("div", Km, [
    _(e.$slots, "default")
  ]);
}
const qm = /* @__PURE__ */ ea(Hm, [["render", Gm]]), vh = /* @__PURE__ */ b({
  __name: "Tabs",
  props: {
    is: { default: "a" },
    tabs: {}
  },
  setup(e) {
    const t = e, a = B(
      () => t.tabs.find((n) => n.active)
    );
    return (n, o) => (f(), y(s(jm), null, {
      default: m(() => [
        P(s(Ro), { class: "hidden gap-2 md:block" }, {
          default: m(() => [
            (f(!0), R(X, null, ve(n.tabs, (l) => (f(), y(s(Um), {
              key: l.name,
              is: n.is,
              tab: l
            }, null, 8, ["is", "tab"]))), 128))
          ]),
          _: 1
        }),
        P(s(Ro), { class: "flex md:hidden" }, {
          default: m(() => [
            P(Am, { "trigger-class": "size-full" }, {
              trigger: m(() => [
                P(Qo, null, {
                  default: m(() => {
                    var l;
                    return [
                      Y(Q(((l = a.value) == null ? void 0 : l.name) ?? "Select an option"), 1)
                    ];
                  }),
                  _: 1
                })
              ]),
              content: m(() => [
                (f(!0), R(X, null, ve(n.tabs, (l) => (f(), y(s(Om), {
                  href: l.href,
                  key: l.name
                }, {
                  default: m(() => [
                    Y(Q(l.name), 1)
                  ]),
                  _: 2
                }, 1032, ["href"]))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        P(s(qm), null, {
          default: m(() => [
            _(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), hh = /* @__PURE__ */ b({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = new Ne("en-US", {
      dateStyle: "long"
    }), l = M();
    return J(l, () => {
      a("update:modelValue", l.value);
    }), ce(() => {
      n.defaultValue && (l.value = n.defaultValue);
    }), (r, i) => (f(), y(s(ms), null, {
      default: m(() => [
        P(s(vs), { "as-child": "" }, {
          default: m(() => [
            P(s(ct), {
              variant: "outline",
              class: se([
                "w-[280px] justify-start text-left font-normal dark:text-white",
                !r.modelValue && "text-muted-foreground"
              ])
            }, {
              default: m(() => [
                P(s(Er), { class: "mr-2 size-4" }),
                Y(" " + Q(l.value ? s(o).format(l.value.toDate(s(It)())) : r.placeholder), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }),
        P(s(hs), { class: "w-auto p-0" }, {
          default: m(() => [
            P(s(Zf), {
              modelValue: l.value,
              "onUpdate:modelValue": i[0] || (i[0] = (d) => l.value = d),
              "default-value": r.defaultValue,
              "initial-focus": ""
            }, null, 8, ["modelValue", "default-value"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ym = {}, Zm = { class: "text-sm text-slate-600 dark:text-slate-300" };
function Jm(e, t) {
  return f(), R("div", Zm, [
    _(e.$slots, "default")
  ]);
}
const Xm = /* @__PURE__ */ ea(Ym, [["render", Jm]]), Qm = { class: "relative" }, ev = {
  name: "Base",
  inheritAttrs: !1
}, gh = /* @__PURE__ */ b({
  ...ev,
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
    return (t, a) => {
      var n;
      return f(), R("div", null, [
        t.label && t.showLabel ? (f(), y(s(us), {
          key: 0,
          id: t.id
        }, {
          default: m(() => [
            Y(Q(t.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : ee("", !0),
        K("div", Qm, [
          _(t.$slots, "default"),
          t.showCharacterCount ? (f(), y(s(Sr), {
            key: 0,
            count: (n = t.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[3px]"
          }, null, 8, ["count"])) : ee("", !0)
        ]),
        P(s(Xm), { class: "mt-[3px] w-4/5" }, {
          default: m(() => [
            Y(Q(t.description), 1)
          ]),
          _: 1
        }),
        P(s(wr), { message: t.error }, null, 8, ["message"])
      ]);
    };
  }
});
var ge = [];
for (var rn = 0; rn < 256; ++rn)
  ge.push((rn + 256).toString(16).slice(1));
function tv(e, t = 0) {
  return (ge[e[t + 0]] + ge[e[t + 1]] + ge[e[t + 2]] + ge[e[t + 3]] + "-" + ge[e[t + 4]] + ge[e[t + 5]] + "-" + ge[e[t + 6]] + ge[e[t + 7]] + "-" + ge[e[t + 8]] + ge[e[t + 9]] + "-" + ge[e[t + 10]] + ge[e[t + 11]] + ge[e[t + 12]] + ge[e[t + 13]] + ge[e[t + 14]] + ge[e[t + 15]]).toLowerCase();
}
var wa, av = new Uint8Array(16);
function nv() {
  if (!wa && (wa = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !wa))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return wa(av);
}
var ov = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Vo = {
  randomUUID: ov
};
function lv(e, t, a) {
  if (Vo.randomUUID && !t && !e)
    return Vo.randomUUID();
  e = e || {};
  var n = e.random || (e.rng || nv)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, tv(n);
}
const sv = { class: "flex items-center space-x-2" }, rv = ["src"], iv = ["accept"], yh = /* @__PURE__ */ b({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = "file-upload-" + lv(), l = B(() => i.value ? URL.createObjectURL(i.value) : null), r = a.currentImage ? a.currentImage : a.defaultImage, i = B({
      get: () => a.modelValue,
      set: (c) => n("update:modelValue", c)
    }), d = (c) => {
      i.value = c.target.files[0];
    }, u = () => document.getElementById(o).click();
    return (c, p) => (f(), R("div", sv, [
      _(c.$slots, "image", {
        newImage: l.value,
        curImage: s(r)
      }, () => [
        K("img", {
          src: l.value ?? s(r),
          alt: "Image cannot be shown right now",
          class: "size-24 rounded-full dark:bg-slate-700"
        }, null, 8, rv)
      ]),
      K("input", {
        id: o,
        accept: c.accept,
        hidden: "",
        type: "file",
        onInput: d
      }, null, 40, iv),
      P(Qo, { onClick: u }, {
        default: m(() => [
          Y(" Upload ")
        ]),
        _: 1
      })
    ]));
  }
}), dv = /* @__PURE__ */ b({
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
    const o = ae(e, t);
    return (l, r) => (f(), y(s(Lp), U(G(s(o))), {
      default: m(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uv = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(uf), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cv = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(Wp), E(s(n), {
      class: s(z)(
        "flex h-10 w-full items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300 [&>span]:line-clamp-1",
        t.class
      )
    }), {
      default: m(() => [
        _(o.$slots, "default"),
        P(s(cf), { "as-child": "" }, {
          default: m(() => [
            P(s(el), { class: "size-4 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pv = /* @__PURE__ */ b({
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
    const a = e, n = t, o = B(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = ae(o, n);
    return (r, i) => (f(), y(s(jp), null, {
      default: m(() => [
        P(s(Jp), E({ ...s(l), ...r.$attrs }, {
          class: s(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            r.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: m(() => [
            P(s(vv)),
            P(s(sf), {
              class: se(
                s(z)(
                  "p-1",
                  r.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: m(() => [
                _(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            P(s(hv))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), bh = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(of), E({
      class: s(z)("w-full p-1", t.class)
    }, a.value), {
      default: m(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fv = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, mv = /* @__PURE__ */ b({
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
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(ef), E(s(n), {
      class: s(z)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
        t.class
      )
    }), {
      default: m(() => [
        K("span", fv, [
          P(s(tf), null, {
            default: m(() => [
              P(s(Ea), { class: "size-4 text-primary-700 dark:text-primary-400" })
            ]),
            _: 1
          })
        ]),
        P(s(ss), null, {
          default: m(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wh = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(ss), U(G(t)), {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _h = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(lf), {
      class: se(s(z)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: m(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), xh = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(Xp), E(a.value, {
      class: s(z)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), vv = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(rf), E(s(n), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: m(() => [
        _(o.$slots, "default", {}, () => [
          P(s(Rr), { class: "size-4 text-primary-900" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hv = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(s(df), E(s(n), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: m(() => [
        _(o.$slots, "default", {}, () => [
          P(s(el), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ch = /* @__PURE__ */ b({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = M(
      n.modelValue ? n.options.find((l) => l === n.modelValue) : null
    );
    return J(o, (l) => {
      if (l) {
        a("update:modelValue", l);
        return;
      }
      a("update:modelValue", null);
    }), (l, r) => (f(), y(s(dv), {
      modelValue: o.value,
      "onUpdate:modelValue": r[0] || (r[0] = (i) => o.value = i)
    }, {
      default: m(() => [
        P(s(cv), null, {
          default: m(() => [
            P(s(uv), null, {
              default: m(() => [
                Y(Q(o.value ?? l.placeholder), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        P(s(pv), null, {
          default: m(() => [
            (f(!0), R(X, null, ve(l.options, (i) => (f(), y(s(mv), { value: i }, {
              default: m(() => [
                l.$slots.options ? _(l.$slots, "options", {
                  key: 0,
                  item: i
                }) : (f(), R(X, { key: 1 }, [
                  Y(Q(i), 1)
                ], 64))
              ]),
              _: 2
            }, 1032, ["value"]))), 256))
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["modelValue"]));
  }
}), gv = ["disabled", "placeholder", "required", "type"], $h = /* @__PURE__ */ b({
  __name: "Text",
  props: /* @__PURE__ */ dn({
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
    const t = Ko(e, "modelValue");
    return (a, n) => At((f(), R("input", {
      "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o),
      disabled: a.disabled,
      placeholder: a.placeholder,
      required: a.required,
      type: a.type,
      class: se(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:ring-offset-slate-950 dark:placeholder:text-slate-500", {
        "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
        "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
      }])
    }, null, 10, gv)), [
      [Rs, t.value]
    ]);
  }
}), yv = ["placeholder"], kh = /* @__PURE__ */ b({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = ym(e, "modelValue", t, {
      passive: !0
    });
    return (l, r) => At((f(), R("textarea", {
      "onUpdate:modelValue": r[0] || (r[0] = (i) => Xt(o) ? o.value = i : null),
      placeholder: l.placeholder,
      class: se(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:ring-offset-slate-950 dark:placeholder:text-slate-500", {
        "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !l.error,
        "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": l.error
      }])
    }, null, 10, yv)), [
      [Vs, s(o)]
    ]);
  }
}), bv = {}, wv = { class: "p-6" };
function _v(e, t) {
  return f(), R("div", wv, [
    _(e.$slots, "default")
  ]);
}
const Bh = /* @__PURE__ */ ea(bv, [["render", _v]]), xv = {
  "aria-live": "assertive",
  class: "pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
}, Cv = { class: "flex w-full flex-col items-center space-y-4 sm:items-end" }, $v = {
  key: 0,
  class: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
}, kv = { class: "p-4" }, Bv = { class: "flex items-start" }, Pv = { class: "flex-shrink-0" }, Ov = { class: "ml-3 w-0 flex-1 pt-0.5" }, Dv = { class: "text-sm font-medium text-slate-900" }, Sv = { class: "mt-3 flex space-x-7" }, Ev = ["onClick"], Ph = /* @__PURE__ */ b({
  __name: "Notifications",
  props: {
    success: {},
    errors: {}
  },
  setup(e) {
    const t = e;
    let a = M([]);
    const n = B(() => a.value.length), o = (l) => a.value.splice(l, 1);
    return J(
      () => t.success,
      (l) => {
        l && a.value.push({
          icon: ks,
          heading: "Success",
          messages: [t.success],
          iconClasses: "text-green-500"
        });
      },
      {
        immediate: !0
      }
    ), J(
      () => t.errors,
      (l) => {
        l && (typeof t.errors == "object" ? a.value.push({
          icon: Io,
          heading: "Error",
          messages: Object.values(t.errors),
          iconClasses: "text-red-500"
        }) : a.value.push({
          icon: Io,
          heading: "Error",
          messages: [t.errors],
          iconClasses: "text-red-500"
        }));
      },
      {
        immediate: !0
      }
    ), J(
      n,
      (l, r) => {
        (typeof r > "u" || l >= r) && setTimeout(() => a.value.shift(), 5e3);
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (l, r) => (f(), R("div", xv, [
      K("div", Cv, [
        (f(!0), R(X, null, ve(s(a), (i, d) => (f(), y(Fs, {
          key: d,
          "enter-active-class": "transform ease-out duration-300 transition",
          "enter-from-class": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
          "enter-to-class": "translate-y-0 opacity-100 sm:translate-x-0",
          "leave-active-class": "transition ease-in duration-100",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: m(() => [
            i.messages.length > 0 ? (f(), R("div", $v, [
              K("div", kv, [
                K("div", Bv, [
                  K("div", Pv, [
                    (f(), y(Me(i.icon), {
                      class: se(["size-6", i.iconClasses]),
                      "aria-hidden": "true"
                    }, null, 8, ["class"]))
                  ]),
                  K("div", Ov, [
                    K("p", Dv, Q(i.heading), 1),
                    (f(!0), R(X, null, ve(i.messages, (u, c) => (f(), R("p", {
                      key: c,
                      class: "mt-1 text-sm text-slate-500"
                    }, Q(u), 1))), 128)),
                    K("div", Sv, [
                      K("button", {
                        onClick: (u) => o(d),
                        type: "button",
                        class: "rounded-md bg-white text-sm font-medium text-slate-700 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      }, " Dismiss ", 8, Ev)
                    ])
                  ])
                ])
              ])
            ])) : ee("", !0)
          ]),
          _: 2
        }, 1024))), 128))
      ])
    ]));
  }
});
export {
  gh as Base,
  $s as BaseDropdownMenuItem,
  ct as Button,
  Lf as CalendarCell,
  Nf as CalendarCellTrigger,
  zf as CalendarGrid,
  Wf as CalendarGridBody,
  jf as CalendarGridHead,
  Mo as CalendarGridRow,
  Uf as CalendarHeadCell,
  Hf as CalendarHeader,
  Kf as CalendarHeading,
  Gf as CalendarNextButton,
  qf as CalendarPrevButton,
  Sr as CharacterCount,
  Wv as Checkbox,
  Zv as CollapsibleTableRow,
  qv as Combobox,
  cs as Command,
  Hv as CommandDialog,
  Ef as CommandEmpty,
  Mf as CommandGroup,
  Tf as CommandInput,
  If as CommandItem,
  Vf as CommandList,
  Kv as CommandSeparator,
  Gv as CommandShortcut,
  Bh as Container,
  Tv as DangerButton,
  Yv as DarkModeToggle,
  Qv as Datatable,
  hh as DatePicker,
  Xm as Description,
  ps as Dialog,
  jv as DialogClose,
  fs as DialogContent,
  Pf as DialogDescription,
  Sf as DialogFooter,
  kf as DialogHeader,
  Uv as DialogScrollContent,
  Bf as DialogTitle,
  $f as DialogTrigger,
  Am as Dropdown,
  Pm as DropdownMenu,
  nh as DropdownMenuCheckboxItem,
  Sm as DropdownMenuContent,
  eh as DropdownMenuGroup,
  ah as DropdownMenuItem,
  rh as DropdownMenuLabel,
  Om as DropdownMenuLink,
  lp as DropdownMenuPortal,
  th as DropdownMenuRadioGroup,
  oh as DropdownMenuRadioItem,
  sh as DropdownMenuSeparator,
  lh as DropdownMenuShortcut,
  ih as DropdownMenuSub,
  uh as DropdownMenuSubContent,
  dh as DropdownMenuSubTrigger,
  Dm as DropdownMenuTrigger,
  wr as Error,
  Iv as Form,
  Pr as FormElement,
  Rv as FormGrid,
  yh as ImageUpload,
  us as Label,
  ch as Modal,
  Ph as Notifications,
  ph as Pagination,
  zm as PaginationDetails,
  Im as PaginationEllipsis,
  Rm as PaginationFirst,
  Vm as PaginationLast,
  $p as PaginationList,
  zv as PaginationListItem,
  Fm as PaginationNext,
  Lm as PaginationPrev,
  yp as PaginationRoot,
  ms as Popover,
  hs as PopoverContent,
  vs as PopoverTrigger,
  Av as PrimaryButton,
  Qo as SecondaryButton,
  Ch as Select,
  pv as SelectContent,
  bh as SelectGroup,
  mv as SelectItem,
  wh as SelectItemText,
  _h as SelectLabel,
  dv as SelectRoot,
  hv as SelectScrollDownButton,
  vv as SelectScrollUpButton,
  xh as SelectSeparator,
  cv as SelectTrigger,
  uv as SelectValue,
  _m as Table,
  xm as TableBody,
  km as TableCaption,
  Oa as TableCell,
  Xv as TableEmpty,
  Jv as TableFooter,
  Cm as TableHead,
  $m as TableHeader,
  Jt as TableRow,
  _n as TableRowAction,
  vh as Tabs,
  mh as TabsContent,
  Um as TabsItem,
  Ro as TabsList,
  jm as TabsRoot,
  fh as TabsTrigger,
  $h as Text,
  kh as TextArea,
  bm as Toggle
};
