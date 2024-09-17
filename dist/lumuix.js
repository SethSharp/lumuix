import { defineComponent as b, openBlock as m, createBlock as y, resolveDynamicComponent as Me, mergeProps as E, unref as s, withCtx as f, renderSlot as _, withDirectives as Tt, createElementBlock as R, createElementVNode as H, toDisplayString as X, vShow as $n, computed as B, ref as M, shallowRef as Cn, watch as J, getCurrentScope as kn, onScopeDispose as Bn, shallowReadonly as wt, getCurrentInstance as Te, toRef as No, camelize as zo, Comment as Ps, cloneVNode as Os, h as it, toRefs as me, onMounted as ce, normalizeProps as U, guardReactiveProps as K, reactive as Wo, createVNode as P, createCommentVNode as ee, createTextVNode as Y, withKeys as He, withModifiers as we, Fragment as Q, watchEffect as he, markRaw as Ds, nextTick as te, watchSyncEffect as Ss, isRef as Qt, renderList as ve, Teleport as Pn, onBeforeUnmount as On, useSlots as Es, onBeforeMount as Ms, normalizeStyle as Da, effectScope as jo, toHandlerKey as As, onUnmounted as ea, vModelSelect as Ts, inject as Uo, provide as Ho, customRef as Ko, onBeforeUpdate as Is, onUpdated as Rs, mergeDefaults as Go, readonly as Dn, normalizeClass as se, mergeModels as un, useModel as qo, vModelDynamic as Vs, vModelText as Fs, Transition as Ls } from "vue";
function Yo(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (a = Yo(e[t])) && (n && (n += " "), n += a);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Ns() {
  for (var e, t, a = 0, n = ""; a < arguments.length; ) (e = arguments[a++]) && (t = Yo(e)) && (n && (n += " "), n += t);
  return n;
}
const io = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, uo = Ns, zs = (e, t) => (a) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return uo(e, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: l } = t, r = Object.keys(o).map((c) => {
    const u = a == null ? void 0 : a[c], p = l == null ? void 0 : l[c];
    if (u === null) return null;
    const v = io(u) || io(p);
    return o[c][v];
  }), i = a && Object.entries(a).reduce((c, u) => {
    let [p, v] = u;
    return v === void 0 || (c[p] = v), c;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, u) => {
    let { class: p, className: v, ...g } = u;
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
      ...c,
      p,
      v
    ] : c;
  }, []);
  return uo(e, r, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, Sn = "-", Ws = (e) => {
  const t = Us(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (r) => {
      const i = r.split(Sn);
      return i[0] === "" && i.length !== 1 && i.shift(), Zo(i, t) || js(r);
    },
    getConflictingClassGroupIds: (r, i) => {
      const d = a[r] || [];
      return i && n[r] ? [...d, ...n[r]] : d;
    }
  };
}, Zo = (e, t) => {
  var r;
  if (e.length === 0)
    return t.classGroupId;
  const a = e[0], n = t.nextPart.get(a), o = n ? Zo(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const l = e.join(Sn);
  return (r = t.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : r.classGroupId;
}, co = /^\[(.+)\]$/, js = (e) => {
  if (co.test(e)) {
    const t = co.exec(e)[1], a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Us = (e) => {
  const {
    theme: t,
    prefix: a
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ks(Object.entries(e.classGroups), a).forEach(([l, r]) => {
    cn(r, n, l, t);
  }), n;
}, cn = (e, t, a, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const l = o === "" ? t : po(t, o);
      l.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (Hs(o)) {
        cn(o(n), t, a, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([l, r]) => {
      cn(r, po(t, l), a, n);
    });
  });
}, po = (e, t) => {
  let a = e;
  return t.split(Sn).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Hs = (e) => e.isThemeGetter, Ks = (e, t) => t ? e.map(([a, n]) => {
  const o = n.map((l) => typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([r, i]) => [t + r, i])) : l);
  return [a, o];
}) : e, Gs = (e) => {
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
}, Jo = "!", qs = (e) => {
  const {
    separator: t,
    experimentalParseClassName: a
  } = e, n = t.length === 1, o = t[0], l = t.length, r = (i) => {
    const d = [];
    let c = 0, u = 0, p;
    for (let x = 0; x < i.length; x++) {
      let $ = i[x];
      if (c === 0) {
        if ($ === o && (n || i.slice(x, x + l) === t)) {
          d.push(i.slice(u, x)), u = x + l;
          continue;
        }
        if ($ === "/") {
          p = x;
          continue;
        }
      }
      $ === "[" ? c++ : $ === "]" && c--;
    }
    const v = d.length === 0 ? i : i.substring(u), g = v.startsWith(Jo), w = g ? v.substring(1) : v, h = p && p > u ? p - u : void 0;
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
}, Ys = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let a = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...a.sort(), n), a = []) : a.push(n);
  }), t.push(...a.sort()), t;
}, Zs = (e) => ({
  cache: Gs(e.cacheSize),
  parseClassName: qs(e),
  ...Ws(e)
}), Js = /\s+/, Xs = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, l = [], r = e.trim().split(Js);
  let i = "";
  for (let d = r.length - 1; d >= 0; d -= 1) {
    const c = r[d], {
      modifiers: u,
      hasImportantModifier: p,
      baseClassName: v,
      maybePostfixModifierPosition: g
    } = a(c);
    let w = !!g, h = n(w ? v.substring(0, g) : v);
    if (!h) {
      if (!w) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (h = n(v), !h) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      w = !1;
    }
    const x = Ys(u).join(":"), $ = p ? x + Jo : x, D = $ + h;
    if (l.includes(D))
      continue;
    l.push(D);
    const C = o(h, w);
    for (let O = 0; O < C.length; ++O) {
      const S = C[O];
      l.push($ + S);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Qs() {
  let e = 0, t, a, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (a = Xo(t)) && (n && (n += " "), n += a);
  return n;
}
const Xo = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Xo(e[n])) && (a && (a += " "), a += t);
  return a;
};
function er(e, ...t) {
  let a, n, o, l = r;
  function r(d) {
    const c = t.reduce((u, p) => p(u), e());
    return a = Zs(c), n = a.cache.get, o = a.cache.set, l = i, i(d);
  }
  function i(d) {
    const c = n(d);
    if (c)
      return c;
    const u = Xs(d, a);
    return o(d, u), u;
  }
  return function() {
    return l(Qs.apply(null, arguments));
  };
}
const de = (e) => {
  const t = (a) => a[e] || [];
  return t.isThemeGetter = !0, t;
}, Qo = /^\[(?:([a-z-]+):)?(.+)\]$/i, tr = /^\d+\/\d+$/, ar = /* @__PURE__ */ new Set(["px", "full", "screen"]), nr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, or = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, lr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, sr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, rr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Fe = (e) => $t(e) || ar.has(e) || tr.test(e), Ze = (e) => It(e, "length", vr), $t = (e) => !!e && !Number.isNaN(Number(e)), qa = (e) => It(e, "number", $t), jt = (e) => !!e && Number.isInteger(Number(e)), ir = (e) => e.endsWith("%") && $t(e.slice(0, -1)), q = (e) => Qo.test(e), Je = (e) => nr.test(e), dr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ur = (e) => It(e, dr, el), cr = (e) => It(e, "position", el), pr = /* @__PURE__ */ new Set(["image", "url"]), fr = (e) => It(e, pr, gr), mr = (e) => It(e, "", hr), Ut = () => !0, It = (e, t, a) => {
  const n = Qo.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : a(n[2]) : !1;
}, vr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  or.test(e) && !lr.test(e)
), el = () => !1, hr = (e) => sr.test(e), gr = (e) => rr.test(e), yr = () => {
  const e = de("colors"), t = de("spacing"), a = de("blur"), n = de("brightness"), o = de("borderColor"), l = de("borderRadius"), r = de("borderSpacing"), i = de("borderWidth"), d = de("contrast"), c = de("grayscale"), u = de("hueRotate"), p = de("invert"), v = de("gap"), g = de("gradientColorStops"), w = de("gradientColorStopPositions"), h = de("inset"), x = de("margin"), $ = de("opacity"), D = de("padding"), C = de("saturate"), O = de("scale"), S = de("sepia"), A = de("skew"), T = de("space"), W = de("translate"), j = () => ["auto", "contain", "none"], k = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", q, t], V = () => [q, t], ne = () => ["", Fe, Ze], Z = () => ["auto", $t, q], N = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G = () => ["solid", "dashed", "dotted", "double", "none"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ue = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], pe = () => ["", "0", q], ke = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], be = () => [$t, q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ut],
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
      gradientColorStopPositions: [ir, Ze],
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
        z: ["auto", jt, q]
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
        order: ["first", "last", "none", jt, q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ut]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", jt, q]
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
        "grid-rows": [Ut]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [jt, q]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", qa]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ut]
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
        "line-clamp": ["none", $t, qa]
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
        "placeholder-opacity": [$]
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
        "text-opacity": [$]
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
        decoration: [...G(), "wavy"]
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
        "bg-opacity": [$]
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
        bg: [...N(), cr]
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
        bg: ["auto", "cover", "contain", ur]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, fr]
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
        "border-opacity": [$]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...G(), "hidden"]
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
        "divide-opacity": [$]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: G()
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
        outline: ["", ...G()]
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
        "ring-opacity": [$]
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
        shadow: ["", "inner", "none", Je, mr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ut]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [$]
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
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
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
        saturate: [C]
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
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
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
        "backdrop-opacity": [$]
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
        rotate: [jt, q]
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
        stroke: [Fe, Ze, qa]
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
}, br = /* @__PURE__ */ er(yr);
function z(...e) {
  return br(e);
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
    return (a, n) => (m(), y(Me(a.is), E(a.$attrs, {
      class: s(z)(s(Sa)({ variant: a.variant, size: a.size }), t.class)
    }), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sa = zs(
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
), En = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(Me(o.is), E(o.$attrs, {
      class: ["inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300", [t.class, s(n)]]
    }), {
      default: f(() => [
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
    return (t, a) => (m(), y(En, E({
      is: t.is,
      type: t.type,
      disabled: t.disabled,
      class: "bg-primary-500 text-primary-50 hover:bg-primary-700/90 dark:bg-primary-800 dark:text-slate-100 dark:hover:bg-primary-800/90"
    }, t.$attrs), {
      default: f(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["is", "type", "disabled"]));
  }
}), tl = /* @__PURE__ */ b({
  __name: "SecondaryButton",
  props: {
    is: { default: "button" },
    type: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    return (t, a) => (m(), y(En, E({
      is: t.is,
      type: t.type,
      disabled: t.disabled,
      class: "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-800/80"
    }, t.$attrs), {
      default: f(() => [
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
    return (t, a) => (m(), y(En, E({
      is: t.is,
      type: t.type,
      disabled: t.disabled,
      class: "bg-red-500 text-slate-50 hover:bg-red-700/90 dark:bg-red-800 dark:text-slate-100 dark:hover:bg-red-800/90"
    }, t.$attrs), {
      default: f(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["is", "type", "disabled"]));
  }
}), wr = { class: "text-sm text-red-600 dark:text-red-400" }, _r = /* @__PURE__ */ b({
  __name: "Error",
  props: {
    message: {}
  },
  setup(e) {
    return (t, a) => Tt((m(), R("div", null, [
      H("p", wr, X(t.message), 1)
    ], 512)), [
      [$n, t.message]
    ]);
  }
}), Ea = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, o] of t)
    a[n] = o;
  return a;
}, xr = {}, $r = { class: "w-full space-y-4 p-1.5" };
function Cr(e, t) {
  return m(), R("div", $r, [
    _(e.$slots, "default")
  ]);
}
const Iv = /* @__PURE__ */ Ea(xr, [["render", Cr]]), kr = {}, Br = { class: "my-4" };
function Pr(e, t) {
  return m(), R("div", Br, [
    _(e.$slots, "default")
  ]);
}
const Or = /* @__PURE__ */ Ea(kr, [["render", Pr]]), Dr = { class: "grid gap-4 md:grid-cols-2" }, Rv = /* @__PURE__ */ b({
  __name: "FormGrid",
  setup(e) {
    return (t, a) => (m(), y(Or, null, {
      default: f(() => [
        H("div", Dr, [
          _(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
});
function Sr(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    })
  ]);
}
function Ma(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]);
}
function Er(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
    })
  ]);
}
function Mr(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    })
  ]);
}
function al(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    })
  ]);
}
function Ar(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5 8.25 12l7.5-7.5"
    })
  ]);
}
function nl(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m8.25 4.5 7.5 7.5-7.5 7.5"
    })
  ]);
}
function Tr(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    })
  ]);
}
function Ir(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 15.75 7.5-7.5 7.5 7.5"
    })
  ]);
}
function Rr(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    })
  ]);
}
function Vr(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    })
  ]);
}
function Fr(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    })
  ]);
}
function Lr(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    })
  ]);
}
function ol(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
function Ya(e, t) {
  return e - t * Math.floor(e / t);
}
const ll = 1721426;
function da(e, t, a, n) {
  t = Mn(e, t);
  let o = t - 1, l = -2;
  return a <= 2 ? l = 0 : _a(t) && (l = -1), ll - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + l + n);
}
function _a(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function Mn(e, t) {
  return e === "BC" ? 1 - t : t;
}
function Nr(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const zr = {
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
class kt {
  fromJulianDay(t) {
    let a = t, n = a - ll, o = Math.floor(n / 146097), l = Ya(n, 146097), r = Math.floor(l / 36524), i = Ya(l, 36524), d = Math.floor(i / 1461), c = Ya(i, 1461), u = Math.floor(c / 365), p = o * 400 + r * 100 + d * 4 + u + (r !== 4 && u !== 4 ? 1 : 0), [v, g] = Nr(p), w = a - da(v, g, 1, 1), h = 2;
    a < da(v, g, 3, 1) ? h = 0 : _a(g) && (h = 1);
    let x = Math.floor(((w + h) * 12 + 373) / 367), $ = a - da(v, g, x, 1) + 1;
    return new Dt(v, g, x, $);
  }
  toJulianDay(t) {
    return da(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return zr[_a(t.year) ? "leapyear" : "standard"][t.month - 1];
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
const Wr = {
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
function Bt(e, t) {
  return t = Ce(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function jr(e, t) {
  return t = Ce(t, e.calendar), e = Kt(e), t = Kt(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Za(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function fo(e, t) {
  return e = Kt(e), t = Kt(t), e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month;
}
function Ur(e, t) {
  return Bt(e, rl(t));
}
function sl(e, t) {
  let a = e.calendar.toJulianDay(e), n = Math.ceil(a + 1 - qr(t)) % 7;
  return n < 0 && (n += 7), n;
}
function Hr(e) {
  return je(Date.now(), e);
}
function rl(e) {
  return Jr(Hr(e));
}
function il(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function Kr(e, t) {
  return mo(e) - mo(t);
}
function mo(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let Ja = null;
function Rt() {
  return Ja == null && (Ja = new Intl.DateTimeFormat().resolvedOptions().timeZone), Ja;
}
function Kt(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function vo(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const ho = /* @__PURE__ */ new Map();
function Gr(e) {
  if (Intl.Locale) {
    let a = ho.get(e);
    return a || (a = new Intl.Locale(e).maximize().region, a && ho.set(e, a)), a;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function qr(e) {
  let t = Gr(e);
  return t && Wr[t] || 0;
}
function Pt(e) {
  e = Ce(e, new kt());
  let t = Mn(e.era, e.year);
  return dl(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function dl(e, t, a, n, o, l, r) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, l, r), i.setUTCFullYear(e, t - 1, a), i.getTime();
}
function pn(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === Rt()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: l, minute: r, second: i } = ul(e, t);
  return dl(a, n, o, l, r, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const go = /* @__PURE__ */ new Map();
function ul(e, t) {
  let a = go.get(t);
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
  }), go.set(t, a));
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
const yo = 864e5;
function Yr(e, t, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((l) => Zr(e, t, l));
}
function Zr(e, t, a) {
  let n = ul(a, t);
  return e.year === n.year && e.month === n.month && e.day === n.day && e.hour === n.hour && e.minute === n.minute && e.second === n.second;
}
function We(e, t, a = "compatible") {
  let n = Ot(e);
  if (t === "UTC") return Pt(n);
  if (t === Rt() && a === "compatible") {
    n = Ce(n, new kt());
    let d = /* @__PURE__ */ new Date(), c = Mn(n.era, n.year);
    return d.setFullYear(c, n.month - 1, n.day), d.setHours(n.hour, n.minute, n.second, n.millisecond), d.getTime();
  }
  let o = Pt(n), l = pn(o - yo, t), r = pn(o + yo, t), i = Yr(n, t, o - l, o - r);
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
function cl(e, t, a = "compatible") {
  return new Date(We(e, t, a));
}
function je(e, t) {
  let a = pn(e, t), n = new Date(e + a), o = n.getUTCFullYear(), l = n.getUTCMonth() + 1, r = n.getUTCDate(), i = n.getUTCHours(), d = n.getUTCMinutes(), c = n.getUTCSeconds(), u = n.getUTCMilliseconds();
  return new Et(o, l, r, t, a, i, d, c, u);
}
function Jr(e) {
  return new Dt(e.calendar, e.era, e.year, e.month, e.day);
}
function Ot(e, t) {
  let a = 0, n = 0, o = 0, l = 0;
  if ("timeZone" in e) ({ hour: a, minute: n, second: o, millisecond: l } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: a, minute: n, second: o, millisecond: l } = t), new St(e.calendar, e.era, e.year, e.month, e.day, a, n, o, l);
}
function Ce(e, t) {
  if (e.calendar.identifier === t.identifier) return e;
  let a = t.fromJulianDay(e.calendar.toJulianDay(e)), n = e.copy();
  return n.calendar = t, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, dt(n), n;
}
function Xr(e, t, a) {
  if (e instanceof Et)
    return e.timeZone === t ? e : ei(e, t);
  let n = We(e, t, a);
  return je(n, t);
}
function Qr(e) {
  let t = Pt(e) - e.offset;
  return new Date(t);
}
function ei(e, t) {
  let a = Pt(e) - e.offset;
  return Ce(je(a, t), e.calendar);
}
const Ht = 36e5;
function Aa(e, t) {
  let a = e.copy(), n = "hour" in a ? oi(a, t) : 0;
  fn(a, t.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e), a.month += t.months || 0, mn(a), pl(a), a.day += (t.weeks || 0) * 7, a.day += t.days || 0, a.day += n, ti(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
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
function fn(e, t) {
  var a, n;
  !((a = (n = e.calendar).isInverseEra) === null || a === void 0) && a.call(n, e) && (t = -t), e.year += t;
}
function mn(e) {
  for (; e.month < 1; )
    fn(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, fn(e, 1);
}
function ti(e) {
  for (; e.day < 1; )
    e.month--, mn(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, mn(e);
}
function pl(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function dt(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), pl(e);
}
function fl(e) {
  let t = {};
  for (let a in e) typeof e[a] == "number" && (t[a] = -e[a]);
  return t;
}
function ml(e, t) {
  return Aa(e, fl(t));
}
function An(e, t) {
  let a = e.copy();
  return t.era != null && (a.era = t.era), t.year != null && (a.year = t.year), t.month != null && (a.month = t.month), t.day != null && (a.day = t.day), dt(a), a;
}
function xa(e, t) {
  let a = e.copy();
  return t.hour != null && (a.hour = t.hour), t.minute != null && (a.minute = t.minute), t.second != null && (a.second = t.second), t.millisecond != null && (a.millisecond = t.millisecond), ni(a), a;
}
function ai(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = ua(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = ua(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = ua(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = ua(e.hour, 24), t;
}
function ni(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function ua(e, t) {
  let a = e % t;
  return a < 0 && (a += t), a;
}
function oi(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, ai(e);
}
function Tn(e, t, a, n) {
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
function vl(e, t, a, n) {
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
function hl(e, t) {
  let a;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let o = Aa(Ot(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    a = We(o, e.timeZone);
  } else
    a = Pt(e) - e.offset;
  a += t.milliseconds || 0, a += (t.seconds || 0) * 1e3, a += (t.minutes || 0) * 6e4, a += (t.hours || 0) * 36e5;
  let n = je(a, e.timeZone);
  return Ce(n, e.calendar);
}
function li(e, t) {
  return hl(e, fl(t));
}
function si(e, t, a, n) {
  switch (t) {
    case "hour": {
      let o = 0, l = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let w = e.hour >= 12;
        o = w ? 12 : 0, l = w ? 23 : 11;
      }
      let r = Ot(e), i = Ce(xa(r, {
        hour: o
      }), new kt()), d = [
        We(i, e.timeZone, "earlier"),
        We(i, e.timeZone, "later")
      ].filter((w) => je(w, e.timeZone).day === i.day)[0], c = Ce(xa(r, {
        hour: l
      }), new kt()), u = [
        We(c, e.timeZone, "earlier"),
        We(c, e.timeZone, "later")
      ].filter((w) => je(w, e.timeZone).day === c.day).pop(), p = Pt(e) - e.offset, v = Math.floor(p / Ht), g = p % Ht;
      return p = Ue(v, a, Math.floor(d / Ht), Math.floor(u / Ht), n == null ? void 0 : n.round) * Ht + g, Ce(je(p, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return vl(e, t, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = Tn(Ot(e), t, a, n), l = We(o, e.timeZone);
      return Ce(je(l, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function ri(e, t, a) {
  let n = Ot(e), o = xa(An(n, t), t);
  if (o.compare(n) === 0) return e;
  let l = We(o, e.timeZone, a);
  return Ce(je(l, e.timeZone), e.calendar);
}
function ii(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function gl(e) {
  let t = Ce(e, new kt());
  return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function yl(e) {
  return `${gl(e)}T${ii(e)}`;
}
function di(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let a = Math.floor(e / 36e5), n = e % 36e5 / 6e4;
  return `${t}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function ui(e) {
  return `${yl(e)}${di(e.offset)}[${e.timeZone}]`;
}
function ci(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function In(e, t, a) {
  ci(e, t), t.set(e, a);
}
function Rn(e) {
  let t = typeof e[0] == "object" ? e.shift() : new kt(), a;
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
var pi = /* @__PURE__ */ new WeakMap();
class Dt {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Dt(this.calendar, this.era, this.year, this.month, this.day) : new Dt(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return Aa(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return ml(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return An(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return Tn(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return cl(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return gl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return il(this, t);
  }
  constructor(...t) {
    In(this, pi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, r] = Rn(t);
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = r, dt(this);
  }
}
var fi = /* @__PURE__ */ new WeakMap();
class St {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new St(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new St(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return Aa(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return ml(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return An(xa(this, t), t);
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
        return Tn(this, t, a, n);
      default:
        return vl(this, t, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, a) {
    return cl(this, t, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return yl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let a = il(this, t);
    return a === 0 ? Kr(this, Ot(t)) : a;
  }
  constructor(...t) {
    In(this, fi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, r] = Rn(t);
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = r, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, dt(this);
  }
}
var mi = /* @__PURE__ */ new WeakMap();
class Et {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Et(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new Et(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return hl(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return li(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, a) {
    return ri(this, t, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return si(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return Qr(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return ui(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - Xr(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    In(this, mi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, r] = Rn(t), i = t.shift(), d = t.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = r, this.timeZone = i, this.offset = d, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, dt(this);
  }
}
let Xa = /* @__PURE__ */ new Map();
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
    return gi() && (this.resolvedHourCycle || (this.resolvedHourCycle = yi(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, a = {}) {
    this.formatter = bl(t, a), this.options = a;
  }
}
const vi = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function bl(e, t = {}) {
  if (typeof t.hour12 == "boolean" && hi()) {
    t = {
      ...t
    };
    let o = vi[String(t.hour12)][e.split("-")[0]], l = t.hour12 ? "h12" : "h23";
    t.hourCycle = o ?? l, delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((o, l) => o[0] < l[0] ? -1 : 1).join() : "");
  if (Xa.has(a)) return Xa.get(a);
  let n = new Intl.DateTimeFormat(e, t);
  return Xa.set(a, n), n;
}
let Qa = null;
function hi() {
  return Qa == null && (Qa = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Qa;
}
let en = null;
function gi() {
  return en == null && (en = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), en;
}
function yi(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = bl(e, {
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
function bi(e, t) {
  const a = [];
  for (let n = 0; n < e.length; n += t)
    a.push(e.slice(n, n + t));
  return a;
}
function Se(e, t = Rt()) {
  return Vn(e) ? e.toDate() : e.toDate(t);
}
function wi(e) {
  return e instanceof St;
}
function Vn(e) {
  return e instanceof Et;
}
function _i(e) {
  return wi(e) || Vn(e);
}
function Gt(e) {
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
function xi(e, t, a) {
  const n = sl(e, a);
  return t > n ? e.subtract({ days: n + 7 - t }) : t === n ? e : e.subtract({ days: n - t });
}
function $i(e, t, a) {
  const n = sl(e, a), o = t === 0 ? 6 : t - 1;
  return n === o ? e : n > o ? e.add({ days: 7 - n + o }) : e.add({ days: o - n });
}
function bo(e, t) {
  const a = [];
  let n = e.add({ days: 1 });
  const o = t;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function tn(e) {
  const { dateObj: t, weekStartsOn: a, fixedWeeks: n, locale: o } = e, l = Gt(t), r = Array.from({ length: l }, (x, $) => t.set({ day: $ + 1 })), i = Kt(t), d = vo(t), c = xi(i, a, o), u = $i(d, a, o), p = bo(c.subtract({ days: 1 }), i), v = bo(d, u.add({ days: 1 })), g = p.length + r.length + v.length;
  if (n && g < 42) {
    const x = 42 - g;
    let $ = v[v.length - 1];
    $ || ($ = vo(t));
    const D = Array.from({ length: x }, (C, O) => {
      const S = O + 1;
      return $.add({ days: S });
    });
    v.push(...D);
  }
  const w = p.concat(r, v), h = bi(w, 7);
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
      tn({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    tn({
      ...n,
      dateObj: a
    })
  );
  for (let l = 1; l < t; l++) {
    const r = a.add({ months: l });
    o.push(
      tn({
        ...n,
        dateObj: r
      })
    );
  }
  return o;
}
const Ci = ["top", "right", "bottom", "left"], Ee = Math.min, xe = Math.max, $a = Math.round, fa = Math.floor, tt = (e) => ({
  x: e,
  y: e
}), ki = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Bi = {
  start: "end",
  end: "start"
};
function vn(e, t, a) {
  return xe(e, Ee(t, a));
}
function Ke(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ge(e) {
  return e.split("-")[0];
}
function Vt(e) {
  return e.split("-")[1];
}
function Fn(e) {
  return e === "x" ? "y" : "x";
}
function Ln(e) {
  return e === "y" ? "height" : "width";
}
function at(e) {
  return ["top", "bottom"].includes(Ge(e)) ? "y" : "x";
}
function Nn(e) {
  return Fn(at(e));
}
function Pi(e, t, a) {
  a === void 0 && (a = !1);
  const n = Vt(e), o = Nn(e), l = Ln(o);
  let r = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (r = Ca(r)), [r, Ca(r)];
}
function Oi(e) {
  const t = Ca(e);
  return [hn(e), t, hn(t)];
}
function hn(e) {
  return e.replace(/start|end/g, (t) => Bi[t]);
}
function Di(e, t, a) {
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
function Si(e, t, a, n) {
  const o = Vt(e);
  let l = Di(Ge(e), a === "start", n);
  return o && (l = l.map((r) => r + "-" + o), t && (l = l.concat(l.map(hn)))), l;
}
function Ca(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ki[t]);
}
function Ei(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function wl(e) {
  return typeof e != "number" ? Ei(e) : {
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
function wo(e, t, a) {
  let {
    reference: n,
    floating: o
  } = e;
  const l = at(t), r = Nn(t), i = Ln(r), d = Ge(t), c = l === "y", u = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, v = n[i] / 2 - o[i] / 2;
  let g;
  switch (d) {
    case "top":
      g = {
        x: u,
        y: n.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: u,
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
  switch (Vt(t)) {
    case "start":
      g[r] -= v * (a && c ? -1 : 1);
      break;
    case "end":
      g[r] += v * (a && c ? -1 : 1);
      break;
  }
  return g;
}
const Mi = async (e, t, a) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: l = [],
    platform: r
  } = a, i = l.filter(Boolean), d = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let c = await r.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: p
  } = wo(c, n, d), v = n, g = {}, w = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: x,
      fn: $
    } = i[h], {
      x: D,
      y: C,
      data: O,
      reset: S
    } = await $({
      x: u,
      y: p,
      initialPlacement: n,
      placement: v,
      strategy: o,
      middlewareData: g,
      rects: c,
      platform: r,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = D ?? u, p = C ?? p, g = {
      ...g,
      [x]: {
        ...g[x],
        ...O
      }
    }, S && w <= 50 && (w++, typeof S == "object" && (S.placement && (v = S.placement), S.rects && (c = S.rects === !0 ? await r.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: u,
      y: p
    } = wo(c, v, d)), h = -1);
  }
  return {
    x: u,
    y: p,
    placement: v,
    strategy: o,
    middlewareData: g
  };
};
async function qt(e, t) {
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
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: p = "floating",
    altBoundary: v = !1,
    padding: g = 0
  } = Ke(t, e), w = wl(g), x = i[v ? p === "floating" ? "reference" : "floating" : p], $ = ka(await l.getClippingRect({
    element: (a = await (l.isElement == null ? void 0 : l.isElement(x))) == null || a ? x : x.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: d
  })), D = p === "floating" ? {
    x: n,
    y: o,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, C = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(i.floating)), O = await (l.isElement == null ? void 0 : l.isElement(C)) ? await (l.getScale == null ? void 0 : l.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = ka(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: D,
    offsetParent: C,
    strategy: d
  }) : D);
  return {
    top: ($.top - S.top + w.top) / O.y,
    bottom: (S.bottom - $.bottom + w.bottom) / O.y,
    left: ($.left - S.left + w.left) / O.x,
    right: (S.right - $.right + w.right) / O.x
  };
}
const Ai = (e) => ({
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
      element: c,
      padding: u = 0
    } = Ke(e, t) || {};
    if (c == null)
      return {};
    const p = wl(u), v = {
      x: a,
      y: n
    }, g = Nn(o), w = Ln(g), h = await r.getDimensions(c), x = g === "y", $ = x ? "top" : "left", D = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", O = l.reference[w] + l.reference[g] - v[g] - l.floating[w], S = v[g] - l.reference[g], A = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c));
    let T = A ? A[C] : 0;
    (!T || !await (r.isElement == null ? void 0 : r.isElement(A))) && (T = i.floating[C] || l.floating[w]);
    const W = O / 2 - S / 2, j = T / 2 - h[w] / 2 - 1, k = Ee(p[$], j), I = Ee(p[D], j), V = k, ne = T - h[w] - I, Z = T / 2 - h[w] / 2 + W, N = vn(V, Z, ne), G = !d.arrow && Vt(o) != null && Z !== N && l.reference[w] / 2 - (Z < V ? k : I) - h[w] / 2 < 0, oe = G ? Z < V ? Z - V : Z - ne : 0;
    return {
      [g]: v[g] + oe,
      data: {
        [g]: N,
        centerOffset: Z - N - oe,
        ...G && {
          alignmentOffset: oe
        }
      },
      reset: G
    };
  }
}), Ti = function(e) {
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
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: p = !0,
        fallbackPlacements: v,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: h = !0,
        ...x
      } = Ke(e, t);
      if ((a = l.arrow) != null && a.alignmentOffset)
        return {};
      const $ = Ge(o), D = at(i), C = Ge(i) === i, O = await (d.isRTL == null ? void 0 : d.isRTL(c.floating)), S = v || (C || !h ? [Ca(i)] : Oi(i)), A = w !== "none";
      !v && A && S.push(...Si(i, h, w, O));
      const T = [i, ...S], W = await qt(t, x), j = [];
      let k = ((n = l.flip) == null ? void 0 : n.overflows) || [];
      if (u && j.push(W[$]), p) {
        const Z = Pi(o, r, O);
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
        let G = (V = k.filter((oe) => oe.overflows[0] <= 0).sort((oe, ue) => oe.overflows[1] - ue.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!G)
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
              oe && (G = oe);
              break;
            }
            case "initialPlacement":
              G = i;
              break;
          }
        if (o !== G)
          return {
            reset: {
              placement: G
            }
          };
      }
      return {};
    }
  };
};
function _o(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function xo(e) {
  return Ci.some((t) => e[t] >= 0);
}
const Ii = function(e) {
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
          const l = await qt(t, {
            ...o,
            elementContext: "reference"
          }), r = _o(l, a.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: xo(r)
            }
          };
        }
        case "escaped": {
          const l = await qt(t, {
            ...o,
            altBoundary: !0
          }), r = _o(l, a.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: xo(r)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ri(e, t) {
  const {
    placement: a,
    platform: n,
    elements: o
  } = e, l = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), r = Ge(a), i = Vt(a), d = at(a) === "y", c = ["left", "top"].includes(r) ? -1 : 1, u = l && d ? -1 : 1, p = Ke(t, e);
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
    x: g * u,
    y: v * c
  } : {
    x: v * c,
    y: g * u
  };
}
const Vi = function(e) {
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
      } = t, d = await Ri(t, e);
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
}, Fi = function(e) {
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
              x: $,
              y: D
            } = x;
            return {
              x: $,
              y: D
            };
          }
        },
        ...d
      } = Ke(e, t), c = {
        x: a,
        y: n
      }, u = await qt(t, d), p = at(Ge(o)), v = Fn(p);
      let g = c[v], w = c[p];
      if (l) {
        const x = v === "y" ? "top" : "left", $ = v === "y" ? "bottom" : "right", D = g + u[x], C = g - u[$];
        g = vn(D, g, C);
      }
      if (r) {
        const x = p === "y" ? "top" : "left", $ = p === "y" ? "bottom" : "right", D = w + u[x], C = w - u[$];
        w = vn(D, w, C);
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
}, Li = function(e) {
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
        crossAxis: c = !0
      } = Ke(e, t), u = {
        x: a,
        y: n
      }, p = at(o), v = Fn(p);
      let g = u[v], w = u[p];
      const h = Ke(i, t), x = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (d) {
        const C = v === "y" ? "height" : "width", O = l.reference[v] - l.floating[C] + x.mainAxis, S = l.reference[v] + l.reference[C] - x.mainAxis;
        g < O ? g = O : g > S && (g = S);
      }
      if (c) {
        var $, D;
        const C = v === "y" ? "width" : "height", O = ["top", "left"].includes(Ge(o)), S = l.reference[p] - l.floating[C] + (O && (($ = r.offset) == null ? void 0 : $[p]) || 0) + (O ? 0 : x.crossAxis), A = l.reference[p] + l.reference[C] + (O ? 0 : ((D = r.offset) == null ? void 0 : D[p]) || 0) - (O ? x.crossAxis : 0);
        w < S ? w = S : w > A && (w = A);
      }
      return {
        [v]: g,
        [p]: w
      };
    }
  };
}, Ni = function(e) {
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
      } = Ke(e, t), d = await qt(t, i), c = Ge(a), u = Vt(a), p = at(a) === "y", {
        width: v,
        height: g
      } = n.floating;
      let w, h;
      c === "top" || c === "bottom" ? (w = c, h = u === (await (o.isRTL == null ? void 0 : o.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (h = c, w = u === "end" ? "top" : "bottom");
      const x = g - d.top - d.bottom, $ = v - d.left - d.right, D = Ee(g - d[w], x), C = Ee(v - d[h], $), O = !t.middlewareData.shift;
      let S = D, A = C;
      if (p ? A = u || O ? Ee(C, $) : $ : S = u || O ? Ee(D, x) : x, O && !u) {
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
  return zn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $e(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qe(e) {
  var t;
  return (t = (zn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function zn(e) {
  return e instanceof Node || e instanceof $e(e).Node;
}
function Pe(e) {
  return e instanceof Element || e instanceof $e(e).Element;
}
function Ae(e) {
  return e instanceof HTMLElement || e instanceof $e(e).HTMLElement;
}
function $o(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof $e(e).ShadowRoot;
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
function zi(e) {
  return ["table", "td", "th"].includes(pt(e));
}
function Ta(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Wn(e) {
  const t = jn(), a = Pe(e) ? Oe(e) : e;
  return a.transform !== "none" || a.perspective !== "none" || (a.containerType ? a.containerType !== "normal" : !1) || !t && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !t && (a.filter ? a.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function Wi(e) {
  let t = nt(e);
  for (; Ae(t) && !Mt(t); ) {
    if (Wn(t))
      return t;
    if (Ta(t))
      return null;
    t = nt(t);
  }
  return null;
}
function jn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Mt(e) {
  return ["html", "body", "#document"].includes(pt(e));
}
function Oe(e) {
  return $e(e).getComputedStyle(e);
}
function Ia(e) {
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
    $o(e) && e.host || // Fallback.
    qe(e)
  );
  return $o(t) ? t.host : t;
}
function _l(e) {
  const t = nt(e);
  return Mt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ae(t) && ta(t) ? t : _l(t);
}
function Yt(e, t, a) {
  var n;
  t === void 0 && (t = []), a === void 0 && (a = !0);
  const o = _l(e), l = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = $e(o);
  return l ? t.concat(r, r.visualViewport || [], ta(o) ? o : [], r.frameElement && a ? Yt(r.frameElement) : []) : t.concat(o, Yt(o, [], a));
}
function xl(e) {
  const t = Oe(e);
  let a = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = Ae(e), l = o ? e.offsetWidth : a, r = o ? e.offsetHeight : n, i = $a(a) !== l || $a(n) !== r;
  return i && (a = l, n = r), {
    width: a,
    height: n,
    $: i
  };
}
function Un(e) {
  return Pe(e) ? e : e.contextElement;
}
function Ct(e) {
  const t = Un(e);
  if (!Ae(t))
    return tt(1);
  const a = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: l
  } = xl(t);
  let r = (l ? $a(a.width) : a.width) / n, i = (l ? $a(a.height) : a.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: r,
    y: i
  };
}
const ji = /* @__PURE__ */ tt(0);
function $l(e) {
  const t = $e(e);
  return !jn() || !t.visualViewport ? ji : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ui(e, t, a) {
  return t === void 0 && (t = !1), !a || t && a !== $e(e) ? !1 : t;
}
function ut(e, t, a, n) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const o = e.getBoundingClientRect(), l = Un(e);
  let r = tt(1);
  t && (n ? Pe(n) && (r = Ct(n)) : r = Ct(e));
  const i = Ui(l, a, n) ? $l(l) : tt(0);
  let d = (o.left + i.x) / r.x, c = (o.top + i.y) / r.y, u = o.width / r.x, p = o.height / r.y;
  if (l) {
    const v = $e(l), g = n && Pe(n) ? $e(n) : n;
    let w = v, h = w.frameElement;
    for (; h && n && g !== w; ) {
      const x = Ct(h), $ = h.getBoundingClientRect(), D = Oe(h), C = $.left + (h.clientLeft + parseFloat(D.paddingLeft)) * x.x, O = $.top + (h.clientTop + parseFloat(D.paddingTop)) * x.y;
      d *= x.x, c *= x.y, u *= x.x, p *= x.y, d += C, c += O, w = $e(h), h = w.frameElement;
    }
  }
  return ka({
    width: u,
    height: p,
    x: d,
    y: c
  });
}
function Hi(e) {
  let {
    elements: t,
    rect: a,
    offsetParent: n,
    strategy: o
  } = e;
  const l = o === "fixed", r = qe(n), i = t ? Ta(t.floating) : !1;
  if (n === r || i && l)
    return a;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = tt(1);
  const u = tt(0), p = Ae(n);
  if ((p || !p && !l) && ((pt(n) !== "body" || ta(r)) && (d = Ia(n)), Ae(n))) {
    const v = ut(n);
    c = Ct(n), u.x = v.x + n.clientLeft, u.y = v.y + n.clientTop;
  }
  return {
    width: a.width * c.x,
    height: a.height * c.y,
    x: a.x * c.x - d.scrollLeft * c.x + u.x,
    y: a.y * c.y - d.scrollTop * c.y + u.y
  };
}
function Ki(e) {
  return Array.from(e.getClientRects());
}
function Cl(e) {
  return ut(qe(e)).left + Ia(e).scrollLeft;
}
function Gi(e) {
  const t = qe(e), a = Ia(e), n = e.ownerDocument.body, o = xe(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), l = xe(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -a.scrollLeft + Cl(e);
  const i = -a.scrollTop;
  return Oe(n).direction === "rtl" && (r += xe(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: l,
    x: r,
    y: i
  };
}
function qi(e, t) {
  const a = $e(e), n = qe(e), o = a.visualViewport;
  let l = n.clientWidth, r = n.clientHeight, i = 0, d = 0;
  if (o) {
    l = o.width, r = o.height;
    const c = jn();
    (!c || c && t === "fixed") && (i = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: l,
    height: r,
    x: i,
    y: d
  };
}
function Yi(e, t) {
  const a = ut(e, !0, t === "fixed"), n = a.top + e.clientTop, o = a.left + e.clientLeft, l = Ae(e) ? Ct(e) : tt(1), r = e.clientWidth * l.x, i = e.clientHeight * l.y, d = o * l.x, c = n * l.y;
  return {
    width: r,
    height: i,
    x: d,
    y: c
  };
}
function Co(e, t, a) {
  let n;
  if (t === "viewport")
    n = qi(e, a);
  else if (t === "document")
    n = Gi(qe(e));
  else if (Pe(t))
    n = Yi(t, a);
  else {
    const o = $l(e);
    n = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return ka(n);
}
function kl(e, t) {
  const a = nt(e);
  return a === t || !Pe(a) || Mt(a) ? !1 : Oe(a).position === "fixed" || kl(a, t);
}
function Zi(e, t) {
  const a = t.get(e);
  if (a)
    return a;
  let n = Yt(e, [], !1).filter((i) => Pe(i) && pt(i) !== "body"), o = null;
  const l = Oe(e).position === "fixed";
  let r = l ? nt(e) : e;
  for (; Pe(r) && !Mt(r); ) {
    const i = Oe(r), d = Wn(r);
    !d && i.position === "fixed" && (o = null), (l ? !d && !o : !d && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ta(r) && !d && kl(e, r)) ? n = n.filter((u) => u !== r) : o = i, r = nt(r);
  }
  return t.set(e, n), n;
}
function Ji(e) {
  let {
    element: t,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = e;
  const r = [...a === "clippingAncestors" ? Ta(t) ? [] : Zi(t, this._c) : [].concat(a), n], i = r[0], d = r.reduce((c, u) => {
    const p = Co(t, u, o);
    return c.top = xe(p.top, c.top), c.right = Ee(p.right, c.right), c.bottom = Ee(p.bottom, c.bottom), c.left = xe(p.left, c.left), c;
  }, Co(t, i, o));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function Xi(e) {
  const {
    width: t,
    height: a
  } = xl(e);
  return {
    width: t,
    height: a
  };
}
function Qi(e, t, a) {
  const n = Ae(t), o = qe(t), l = a === "fixed", r = ut(e, !0, l, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = tt(0);
  if (n || !n && !l)
    if ((pt(t) !== "body" || ta(o)) && (i = Ia(t)), n) {
      const p = ut(t, !0, l, t);
      d.x = p.x + t.clientLeft, d.y = p.y + t.clientTop;
    } else o && (d.x = Cl(o));
  const c = r.left + i.scrollLeft - d.x, u = r.top + i.scrollTop - d.y;
  return {
    x: c,
    y: u,
    width: r.width,
    height: r.height
  };
}
function an(e) {
  return Oe(e).position === "static";
}
function ko(e, t) {
  return !Ae(e) || Oe(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Bl(e, t) {
  const a = $e(e);
  if (Ta(e))
    return a;
  if (!Ae(e)) {
    let o = nt(e);
    for (; o && !Mt(o); ) {
      if (Pe(o) && !an(o))
        return o;
      o = nt(o);
    }
    return a;
  }
  let n = ko(e, t);
  for (; n && zi(n) && an(n); )
    n = ko(n, t);
  return n && Mt(n) && an(n) && !Wn(n) ? a : n || Wi(e) || a;
}
const ed = async function(e) {
  const t = this.getOffsetParent || Bl, a = this.getDimensions, n = await a(e.floating);
  return {
    reference: Qi(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function td(e) {
  return Oe(e).direction === "rtl";
}
const ad = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Hi,
  getDocumentElement: qe,
  getClippingRect: Ji,
  getOffsetParent: Bl,
  getElementRects: ed,
  getClientRects: Ki,
  getDimensions: Xi,
  getScale: Ct,
  isElement: Pe,
  isRTL: td
};
function nd(e, t) {
  let a = null, n;
  const o = qe(e);
  function l() {
    var i;
    clearTimeout(n), (i = a) == null || i.disconnect(), a = null;
  }
  function r(i, d) {
    i === void 0 && (i = !1), d === void 0 && (d = 1), l();
    const {
      left: c,
      top: u,
      width: p,
      height: v
    } = e.getBoundingClientRect();
    if (i || t(), !p || !v)
      return;
    const g = fa(u), w = fa(o.clientWidth - (c + p)), h = fa(o.clientHeight - (u + v)), x = fa(c), D = {
      rootMargin: -g + "px " + -w + "px " + -h + "px " + -x + "px",
      threshold: xe(0, Ee(1, d)) || 1
    };
    let C = !0;
    function O(S) {
      const A = S[0].intersectionRatio;
      if (A !== d) {
        if (!C)
          return r();
        A ? r(!1, A) : n = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      C = !1;
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
function od(e, t, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: l = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, c = Un(e), u = o || l ? [...c ? Yt(c) : [], ...Yt(t)] : [];
  u.forEach(($) => {
    o && $.addEventListener("scroll", a, {
      passive: !0
    }), l && $.addEventListener("resize", a);
  });
  const p = c && i ? nd(c, a) : null;
  let v = -1, g = null;
  r && (g = new ResizeObserver(($) => {
    let [D] = $;
    D && D.target === c && g && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var C;
      (C = g) == null || C.observe(t);
    })), a();
  }), c && !d && g.observe(c), g.observe(t));
  let w, h = d ? ut(e) : null;
  d && x();
  function x() {
    const $ = ut(e);
    h && ($.x !== h.x || $.y !== h.y || $.width !== h.width || $.height !== h.height) && a(), h = $, w = requestAnimationFrame(x);
  }
  return a(), () => {
    var $;
    u.forEach((D) => {
      o && D.removeEventListener("scroll", a), l && D.removeEventListener("resize", a);
    }), p == null || p(), ($ = g) == null || $.disconnect(), g = null, d && cancelAnimationFrame(w);
  };
}
const ld = Vi, sd = Fi, Bo = Ti, rd = Ni, id = Ii, dd = Ai, ud = Li, cd = (e, t, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: ad,
    ...a
  }, l = {
    ...o.platform,
    _c: n
  };
  return Mi(e, t, {
    ...o,
    platform: l
  });
};
function pd(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function gn(e) {
  if (pd(e)) {
    const t = e.$el;
    return zn(t) && pt(t) === "#comment" ? null : t;
  }
  return e;
}
function xt(e) {
  return typeof e == "function" ? e() : s(e);
}
function fd(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const a = gn(xt(e.element));
      return a == null ? {} : dd({
        element: a,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Pl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Po(e, t) {
  const a = Pl(e);
  return Math.round(t * a) / a;
}
function md(e, t, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = B(() => {
    var T;
    return (T = xt(a.open)) != null ? T : !0;
  }), l = B(() => xt(a.middleware)), r = B(() => {
    var T;
    return (T = xt(a.placement)) != null ? T : "bottom";
  }), i = B(() => {
    var T;
    return (T = xt(a.strategy)) != null ? T : "absolute";
  }), d = B(() => {
    var T;
    return (T = xt(a.transform)) != null ? T : !0;
  }), c = B(() => gn(e.value)), u = B(() => gn(t.value)), p = M(0), v = M(0), g = M(i.value), w = M(r.value), h = Cn({}), x = M(!1), $ = B(() => {
    const T = {
      position: g.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return T;
    const W = Po(u.value, p.value), j = Po(u.value, v.value);
    return d.value ? {
      ...T,
      transform: "translate(" + W + "px, " + j + "px)",
      ...Pl(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: g.value,
      left: W + "px",
      top: j + "px"
    };
  });
  let D;
  function C() {
    c.value == null || u.value == null || cd(c.value, u.value, {
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
      C();
      return;
    }
    if (c.value != null && u.value != null) {
      D = n(c.value, u.value, C);
      return;
    }
  }
  function A() {
    o.value || (x.value = !1);
  }
  return J([l, r, i], C, {
    flush: "sync"
  }), J([c, u], S, {
    flush: "sync"
  }), J(o, A, {
    flush: "sync"
  }), kn() && Bn(O), {
    x: wt(p),
    y: wt(v),
    strategy: wt(g),
    placement: wt(w),
    middlewareData: wt(h),
    isPositioned: wt(x),
    floatingStyles: $,
    update: C
  };
}
function re(e, t) {
  const a = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(a);
  return [(o) => {
    const l = Uo(n, o);
    if (l || l === null)
      return l;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (Ho(n, o), o)];
}
function Hn(e, t, a) {
  const n = a.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function Oo(e, t = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(e, t), a);
}
function vd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hd = function e(t, a) {
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
const rt = /* @__PURE__ */ vd(hd);
function gd(e) {
  return e == null;
}
function yd(e) {
  const { defaultValue: t, defaultPlaceholder: a, granularity: n = "day" } = e;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (a)
    return a.copy();
  const o = /* @__PURE__ */ new Date(), l = o.getFullYear(), r = o.getMonth() + 1, i = o.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new St(l, r, i, 0, 0, 0) : new Dt(l, r, i);
}
function bd(e) {
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
function wd(e, t) {
  var a;
  const n = Cn();
  return he(() => {
    n.value = e();
  }, {
    ...t,
    flush: (a = void 0) != null ? a : "sync"
  }), Dn(n);
}
function Ra(e) {
  return kn() ? (Bn(e), !0) : !1;
}
function _d(e) {
  let t = !1, a;
  const n = jo(!0);
  return (...o) => (t || (a = n.run(() => e(...o)), t = !0), a);
}
function xd(e) {
  let t = 0, a, n;
  const o = () => {
    t -= 1, n && t <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...l) => (t += 1, a || (n = jo(!0), a = n.run(() => e(...l))), Ra(o), a);
}
function et(e) {
  return typeof e == "function" ? e() : s(e);
}
const Ye = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const $d = (e) => typeof e < "u", Cd = (e) => e != null, kd = Object.prototype.toString, Bd = (e) => kd.call(e) === "[object Object]", Pd = () => {
}, Do = /* @__PURE__ */ Od();
function Od() {
  var e, t;
  return Ye && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Dd(e) {
  return Te();
}
function Sd(e, t = 1e4) {
  return Ko((a, n) => {
    let o = et(e), l;
    const r = () => setTimeout(() => {
      o = et(e), n();
    }, et(t));
    return Ra(() => {
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
function Ed(e, t) {
  Dd() && On(e, t);
}
function Ie(e) {
  var t;
  const a = et(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const Kn = Ye ? window : void 0;
function Ol(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = Kn) : [t, a, n, o] = e, !t)
    return Pd;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const l = [], r = () => {
    l.forEach((u) => u()), l.length = 0;
  }, i = (u, p, v, g) => (u.addEventListener(p, v, g), () => u.removeEventListener(p, v, g)), d = J(
    () => [Ie(t), et(o)],
    ([u, p]) => {
      if (r(), !u)
        return;
      const v = Bd(p) ? { ...p } : p;
      l.push(
        ...a.flatMap((g) => n.map((w) => i(u, g, w, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), r();
  };
  return Ra(c), c;
}
function Md(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Ad(...e) {
  let t, a, n = {};
  e.length === 3 ? (t = e[0], a = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, a = e[0], n = e[1]) : (t = e[0], a = e[1]) : (t = !0, a = e[0]);
  const {
    target: o = Kn,
    eventName: l = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, d = Md(t);
  return Ol(o, l, (c) => {
    c.repeat && et(i) || d(c) && a(c);
  }, r);
}
function Dl() {
  const e = M(!1), t = Te();
  return t && ce(() => {
    e.value = !0;
  }, t), e;
}
function Td(e) {
  const t = Dl();
  return B(() => (t.value, !!e()));
}
function Id(e, t, a = {}) {
  const { window: n = Kn, ...o } = a;
  let l;
  const r = Td(() => n && "MutationObserver" in n), i = () => {
    l && (l.disconnect(), l = void 0);
  }, d = B(() => {
    const v = et(e), g = (Array.isArray(v) ? v : [v]).map(Ie).filter(Cd);
    return new Set(g);
  }), c = J(
    () => d.value,
    (v) => {
      i(), r.value && v.size && (l = new MutationObserver(t), v.forEach((g) => l.observe(g, o)));
    },
    { immediate: !0, flush: "post" }
  ), u = () => l == null ? void 0 : l.takeRecords(), p = () => {
    i(), c();
  };
  return Ra(p), {
    isSupported: r,
    stop: p,
    takeRecords: u
  };
}
function Rd(e) {
  return JSON.parse(JSON.stringify(e));
}
function fe(e, t, a, n = {}) {
  var o, l, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: p,
    shouldEmit: v
  } = n, g = Te(), w = a || (g == null ? void 0 : g.emit) || ((o = g == null ? void 0 : g.$emit) == null ? void 0 : o.bind(g)) || ((r = (l = g == null ? void 0 : g.proxy) == null ? void 0 : l.$emit) == null ? void 0 : r.bind(g == null ? void 0 : g.proxy));
  let h = c;
  t || (t = "modelValue"), h = h || `update:${t.toString()}`;
  const x = (C) => i ? typeof i == "function" ? i(C) : Rd(C) : C, $ = () => $d(e[t]) ? x(e[t]) : p, D = (C) => {
    v ? v(C) && w(h, C) : w(h, C);
  };
  if (d) {
    const C = $(), O = M(C);
    let S = !1;
    return J(
      () => e[t],
      (A) => {
        S || (S = !0, O.value = x(A), te(() => S = !1));
      }
    ), J(
      O,
      (A) => {
        !S && (A !== e[t] || u) && D(A);
      },
      { deep: u }
    ), O;
  } else
    return B({
      get() {
        return $();
      },
      set(C) {
        D(C);
      }
    });
}
function Va(e) {
  return e ? e.flatMap((t) => t.type === Q ? Va(t.children) : [t]) : [];
}
const Vd = ["INPUT", "TEXTAREA"];
function Fd(e, t, a, n = {}) {
  if (!t || n.enableIgnoredElement && Vd.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: l = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = !0,
    dir: d = "ltr",
    preventScroll: c = !0,
    focus: u = !1
  } = n, [p, v, g, w, h, x] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], $ = g || w, D = p || v;
  if (!h && !x && (!$ && !D || o === "vertical" && D || o === "horizontal" && $))
    return null;
  const C = a ? Array.from(a.querySelectorAll(l)) : r;
  if (!C.length)
    return null;
  c && e.preventDefault();
  let O = null;
  return D || $ ? O = Sl(C, t, {
    goForward: $ ? w : d === "ltr" ? p : v,
    loop: i
  }) : h ? O = C.at(0) || null : x && (O = C.at(-1) || null), u && (O == null || O.focus()), O;
}
function Sl(e, t, a, n = e.length) {
  if (--n === 0)
    return null;
  const o = e.indexOf(t), l = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (l < 0 || l >= e.length))
    return null;
  const r = (l + e.length) % e.length, i = e[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Sl(
    e,
    i,
    a,
    n
  ) : i : null;
}
function nn(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function yn(e, t, a = ".", n) {
  if (!nn(t))
    return yn(e, {}, a);
  const o = Object.assign({}, t);
  for (const l in e) {
    if (l === "__proto__" || l === "constructor")
      continue;
    const r = e[l];
    r != null && (Array.isArray(r) && Array.isArray(o[l]) ? o[l] = [...r, ...o[l]] : nn(r) && nn(o[l]) ? o[l] = yn(
      r,
      o[l],
      (a ? `${a}.` : "") + l.toString()
    ) : o[l] = r);
  }
  return o;
}
function Ld(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((a, n) => yn(a, n, ""), {})
  );
}
const Nd = Ld(), [Fa, Vv] = re("ConfigProvider");
let zd = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Wd = (e = 21) => {
  let t = "", a = e;
  for (; a--; )
    t += zd[Math.random() * 64 | 0];
  return t;
};
const jd = xd(() => {
  const e = M(/* @__PURE__ */ new Map()), t = M(), a = B(() => {
    for (const r of e.value.values())
      if (r)
        return !0;
    return !1;
  }), n = Fa({
    scrollBody: M(!0)
  });
  let o = null;
  const l = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Do && (o == null || o()), t.value = void 0;
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
    const c = window.innerWidth - document.documentElement.clientWidth, u = { padding: c, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? Nd({
      padding: n.scrollBody.value.padding === !0 ? c : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? c : n.scrollBody.value.margin
    }, u) : u : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = `${p.padding}px`, document.body.style.marginRight = `${p.margin}px`, document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Do && (o = Ol(
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
  const t = Wd(6), a = jd();
  a.value.set(t, e ?? !1);
  const n = B({
    get: () => a.value.get(t) ?? !1,
    set: (o) => a.value.set(t, o)
  });
  return Ed(() => {
    a.value.delete(t);
  }), n;
}
const Ud = "data-radix-vue-collection-item";
function na(e, t = Ud) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = M([]);
    function l() {
      const r = Ie(n);
      return r ? o.value = Array.from(
        r.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return Is(() => {
      o.value = [];
    }), ce(l), Rs(l), J(() => n == null ? void 0 : n.value, l, { immediate: !0 }), Ho(a, o), o;
  }, injectCollection: () => Uo(a, M([])) };
}
function Hd(e) {
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
    return _i(h) && x ? o(Se(h), {
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
    const h = rl(Rt());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => ({ label: i(Se(h.set({ month: x }))), value: x }));
  }
  function c(h, x = {}) {
    return new Ne(t.value, { year: "numeric", ...x }).format(h);
  }
  function u(h, x) {
    return Vn(h) ? new Ne(t.value, {
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
    }).formatToParts(h).find(($) => $.type === "dayPeriod")) == null ? void 0 : x.value) === "PM" ? "PM" : "AM";
  }
  const g = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function w(h, x, $ = {}) {
    const D = { ...g, ...$ }, C = u(h, D).find((O) => O.type === x);
    return C ? C.value : "";
  }
  return {
    setLocale: n,
    getLocale: a,
    fullMonth: i,
    fullYear: c,
    fullMonthAndYear: r,
    toParts: u,
    custom: o,
    part: w,
    dayPeriod: v,
    selectedDate: l,
    dayOfWeek: p,
    getMonths: d
  };
}
function ft(e) {
  const t = Fa({
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
    n[As(zo(o))] = (...l) => e(o, ...l);
  }), n;
}
let on = 0;
function Gn() {
  he((e) => {
    if (!Ye)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? So()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? So()
    ), on++, e(() => {
      on === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), on--;
    });
  });
}
function So() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function La(e) {
  return B(() => {
    var t;
    return et(e) ? !!((t = Ie(e)) != null && t.closest("form")) : !0;
  });
}
function ie(e) {
  const t = Te(), a = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, l) => {
    const r = (t == null ? void 0 : t.type.props[l]).default;
    return r !== void 0 && (o[l] = r), o;
  }, {}), n = No(e);
  return B(() => {
    const o = {}, l = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(l).forEach((r) => {
      o[zo(r)] = l[r];
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
var Kd = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, _t = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ new WeakMap(), va = {}, ln = 0, El = function(e) {
  return e && (e.host || El(e.parentNode));
}, Gd = function(e, t) {
  return t.map(function(a) {
    if (e.contains(a))
      return a;
    var n = El(a);
    return n && e.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, qd = function(e, t, a, n) {
  var o = Gd(t, Array.isArray(e) ? e : [e]);
  va[a] || (va[a] = /* @__PURE__ */ new WeakMap());
  var l = va[a], r = [], i = /* @__PURE__ */ new Set(), d = new Set(o), c = function(p) {
    !p || i.has(p) || (i.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var u = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(v) {
      if (i.has(v))
        u(v);
      else
        try {
          var g = v.getAttribute(n), w = g !== null && g !== "false", h = (_t.get(v) || 0) + 1, x = (l.get(v) || 0) + 1;
          _t.set(v, h), l.set(v, x), r.push(v), h === 1 && w && ma.set(v, !0), x === 1 && v.setAttribute(a, "true"), w || v.setAttribute(n, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", v, $);
        }
    });
  };
  return u(t), i.clear(), ln++, function() {
    r.forEach(function(p) {
      var v = _t.get(p) - 1, g = l.get(p) - 1;
      _t.set(p, v), l.set(p, g), v || (ma.has(p) || p.removeAttribute(n), ma.delete(p)), g || p.removeAttribute(a);
    }), ln--, ln || (_t = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ new WeakMap(), va = {});
  };
}, Yd = function(e, t, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = Kd(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), qd(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function oa(e) {
  let t;
  J(() => Ie(e), (a) => {
    a ? t = Yd(a) : t && t();
  }), ea(() => {
    t && t();
  });
}
let Zd = 0;
function ye(e, t = "radix") {
  const { useId: a } = Fa({ useId: void 0 });
  return a && typeof a == "function" ? `${t}-${a()}` : `${t}-${++Zd}`;
}
function Jd(e) {
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
        let d, c;
        if ("borderBoxSize" in i) {
          const u = i.borderBoxSize, p = Array.isArray(u) ? u[0] : u;
          d = p.inlineSize, c = p.blockSize;
        } else
          d = o.offsetWidth, c = o.offsetHeight;
        t.value = { width: d, height: c };
      });
      return l.observe(o, { box: "border-box" }), () => l.unobserve(o);
    } else
      t.value = void 0;
  }), {
    width: a,
    height: n
  };
}
function Xd(e, t) {
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
function qn(e) {
  const t = Sd("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, n) => {
      var o, l;
      if (!(e != null && e.value) && !n)
        return;
      t.value = t.value + a;
      const r = (e == null ? void 0 : e.value) ?? n, i = document.activeElement, d = ((l = (o = r.find((v) => v === i)) == null ? void 0 : o.textContent) == null ? void 0 : l.trim()) ?? "", c = r.map((v) => {
        var g;
        return ((g = v.textContent) == null ? void 0 : g.trim()) ?? "";
      }), u = eu(c, t.value, d), p = r.find(
        (v) => {
          var g;
          return ((g = v.textContent) == null ? void 0 : g.trim()) === u;
        }
      );
      return p && p.focus(), p;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Qd(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
function eu(e, t, a) {
  const n = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = a ? e.indexOf(a) : -1;
  let l = Qd(e, Math.max(o, 0));
  n.length === 1 && (l = l.filter((i) => i !== a));
  const r = l.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return r !== a ? r : void 0;
}
function tu() {
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
const Yn = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const l = Va(a.default()), r = l.findIndex((u) => u.type !== Ps);
      if (r === -1)
        return l;
      const i = l[r];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? E(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const c = Os(i, d);
      for (const u in d)
        u.startsWith("on") && (c.props || (c.props = {}), c.props[u] = d[u]);
      return l.length === 1 ? c : (l[r] = c, l);
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => it(n, t) : n !== "template" ? () => it(e.as, t, { default: a.default }) : () => it(Yn, t, { default: a.default });
  }
});
function Na() {
  const e = M(), t = B(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = e.value) == null ? void 0 : a.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : Ie(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function au(e, t) {
  const a = M({}), n = M("none"), o = e.value ? "mounted" : "unmounted", { state: l, dispatch: r } = Xd(o, {
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
        const x = n.value, $ = ha(t.value);
        v ? (r("MOUNT"), i("enter"), $ === "none" && i("after-enter")) : $ === "none" || ((w = a.value) == null ? void 0 : w.display) === "none" ? (r("UNMOUNT"), i("leave"), i("after-leave")) : g && x !== $ ? (r("ANIMATION_OUT"), i("leave")) : (r("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (v) => {
    const g = ha(t.value), w = g.includes(
      v.animationName
    ), h = l.value === "mounted" ? "enter" : "leave";
    v.target === t.value && w && (i(`after-${h}`), r("ANIMATION_END")), v.target === t.value && g === "none" && r("ANIMATION_END");
  }, c = (v) => {
    v.target === t.value && (n.value = ha(t.value));
  }, u = J(
    t,
    (v, g) => {
      v ? (a.value = getComputedStyle(v), v.addEventListener("animationstart", c), v.addEventListener("animationcancel", d), v.addEventListener("animationend", d)) : (r("ANIMATION_END"), g == null || g.removeEventListener("animationstart", c), g == null || g.removeEventListener("animationcancel", d), g == null || g.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), p = J(l, () => {
    const v = ha(t.value);
    n.value = l.value === "mounted" ? v : "none";
  });
  return ea(() => {
    u(), p();
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
    const { present: o, forceMount: l } = me(e), r = M(), { isPresent: i } = au(o, r);
    a({ present: i });
    let d = t.default({ present: i });
    d = Va(d || []);
    const c = Te();
    if (d && (d == null ? void 0 : d.length) > 1) {
      const u = (n = c == null ? void 0 : c.parent) != null && n.type.name ? `<${c.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${u}\` for  \`Presence\` component.`,
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
      ref: (u) => {
        const p = Ie(u);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
}), [Ve, nu] = re("DialogRoot"), ou = /* @__PURE__ */ b({
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
    return nu({
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
}), lu = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ve(), { forwardRef: n, currentElement: o } = F();
    return a.contentId || (a.contentId = ye(void 0, "radix-vue-dialog-content")), ce(() => {
      a.triggerElement.value = o.value;
    }), (l, r) => (m(), y(s(L), E(t, {
      ref: s(n),
      type: l.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(a).open.value || !1,
      "aria-controls": s(a).open.value ? s(a).contentId : void 0,
      "data-state": s(a).open.value ? "open" : "closed",
      onClick: s(a).onOpenToggle
    }), {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), za = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Dl();
    return (a, n) => s(t) || a.forceMount ? (m(), y(Pn, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      _(a.$slots, "default")
    ], 8, ["to", "disabled"])) : ee("", !0);
  }
}), Ml = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(za), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), su = "dismissableLayer.pointerDownOutside", ru = "dismissableLayer.focusOutside";
function Al(e, t) {
  const a = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function iu(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1), l = M(() => {
  });
  return he((r) => {
    if (!Ye)
      return;
    const i = async (c) => {
      const u = c.target;
      if (t != null && t.value) {
        if (Al(t.value, u)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let p = function() {
            Hn(
              su,
              e,
              v
            );
          };
          const v = { originalEvent: c };
          c.pointerType === "touch" ? (n.removeEventListener("click", l.value), l.value = p, n.addEventListener("click", l.value, {
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
function du(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1);
  return he((l) => {
    if (!Ye)
      return;
    const r = async (i) => {
      t != null && t.value && (await te(), !(!t.value || Al(t.value, i.target)) && i.target && !o.value && Hn(
        ru,
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
const Le = Wo({
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
    ), i = B(() => Le.layersRoot), d = B(() => l.value ? Array.from(i.value).indexOf(l.value) : -1), c = B(() => Le.layersWithOutsidePointerEventsDisabled.size > 0), u = B(() => {
      const w = Array.from(i.value), [h] = [...Le.layersWithOutsidePointerEventsDisabled].slice(-1), x = w.indexOf(h);
      return d.value >= x;
    }), p = iu(async (w) => {
      const h = [...Le.branches].some(
        (x) => x.contains(w.target)
      );
      !u.value || h || (n("pointerDownOutside", w), n("interactOutside", w), await te(), w.defaultPrevented || n("dismiss"));
    }, l), v = du((w) => {
      [...Le.branches].some(
        (h) => h.contains(w.target)
      ) || (n("focusOutside", w), n("interactOutside", w), w.defaultPrevented || n("dismiss"));
    }, l);
    Ad("Escape", (w) => {
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
    }), (w, h) => (m(), y(s(L), {
      ref: s(o),
      "as-child": w.asChild,
      as: w.as,
      "data-dismissable-layer": "",
      style: Da({
        pointerEvents: c.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(v).onFocusCapture,
      onBlurCapture: s(v).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: f(() => [
        _(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), sn = "focusScope.autoFocusOnMount", rn = "focusScope.autoFocusOnUnmount", Eo = { bubbles: !1, cancelable: !0 };
function uu(e, { select: t = !1 } = {}) {
  const a = document.activeElement;
  for (const n of e)
    if (Qe(n, { select: t }), document.activeElement !== a)
      return !0;
}
function cu(e) {
  const t = Tl(e), a = Mo(t, e), n = Mo(t.reverse(), e);
  return [a, n];
}
function Tl(e) {
  const t = [], a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) t.push(a.currentNode);
  return t;
}
function Mo(e, t) {
  for (const a of e)
    if (!pu(a, { upTo: t }))
      return a;
}
function pu(e, { upTo: t }) {
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
function fu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Qe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const a = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== a && fu(e) && t && e.select();
  }
}
const mu = _d(() => M([]));
function vu() {
  const e = mu();
  return {
    add(t) {
      const a = e.value[0];
      t !== a && (a == null || a.pause()), e.value = Ao(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var a;
      e.value = Ao(e.value, t), (a = e.value[0]) == null || a.resume();
    }
  };
}
function Ao(e, t) {
  const a = [...e], n = a.indexOf(t);
  return n !== -1 && a.splice(n, 1), a;
}
function hu(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Wa = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, n = t, { currentRef: o, currentElement: l } = F(), r = M(null), i = vu(), d = Wo({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    he((u) => {
      if (!Ye)
        return;
      const p = l.value;
      if (!a.trapped)
        return;
      function v(x) {
        if (d.paused || !p)
          return;
        const $ = x.target;
        p.contains($) ? r.value = $ : Qe(r.value, { select: !0 });
      }
      function g(x) {
        if (d.paused || !p)
          return;
        const $ = x.relatedTarget;
        $ !== null && (p.contains($) || Qe(r.value, { select: !0 }));
      }
      function w(x) {
        p.contains(r.value) || Qe(p);
      }
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const h = new MutationObserver(w);
      p && h.observe(p, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), h.disconnect();
      });
    }), he(async (u) => {
      const p = l.value;
      if (await te(), !p)
        return;
      i.add(d);
      const v = document.activeElement;
      if (!p.contains(v)) {
        const g = new CustomEvent(sn, Eo);
        p.addEventListener(sn, (w) => n("mountAutoFocus", w)), p.dispatchEvent(g), g.defaultPrevented || (uu(hu(Tl(p)), {
          select: !0
        }), document.activeElement === v && Qe(p));
      }
      u(() => {
        p.removeEventListener(sn, (h) => n("mountAutoFocus", h));
        const g = new CustomEvent(rn, Eo), w = (h) => {
          n("unmountAutoFocus", h);
        };
        p.addEventListener(rn, w), p.dispatchEvent(g), setTimeout(() => {
          g.defaultPrevented || Qe(v ?? document.body, { select: !0 }), p.removeEventListener(rn, w), i.remove(d);
        }, 0);
      });
    });
    function c(u) {
      if (!a.loop && !a.trapped || d.paused)
        return;
      const p = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, v = document.activeElement;
      if (p && v) {
        const g = u.currentTarget, [w, h] = cu(g);
        w && h ? !u.shiftKey && v === h ? (u.preventDefault(), a.loop && Qe(w, { select: !0 })) : u.shiftKey && v === w && (u.preventDefault(), a.loop && Qe(h, { select: !0 })) : v === g && u.preventDefault();
      }
    }
    return (u, p) => (m(), y(s(L), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: c
    }, {
      default: f(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), gu = "menu.itemSelect", bn = ["Enter", " "], yu = ["ArrowDown", "PageUp", "Home"], Il = ["ArrowUp", "PageDown", "End"], bu = [...yu, ...Il], wu = {
  ltr: [...bn, "ArrowRight"],
  rtl: [...bn, "ArrowLeft"]
}, _u = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Zn(e) {
  return e ? "open" : "closed";
}
function Ba(e) {
  return e === "indeterminate";
}
function Jn(e) {
  return Ba(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function wn(e) {
  const t = document.activeElement;
  for (const a of e)
    if (a === t || (a.focus(), document.activeElement !== t))
      return;
}
function xu(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let l = 0, r = t.length - 1; l < t.length; r = l++) {
    const i = t[l].x, d = t[l].y, c = t[r].x, u = t[r].y;
    d > n != u > n && a < (c - i) * (n - d) / (u - d) + i && (o = !o);
  }
  return o;
}
function $u(e, t) {
  if (!t)
    return !1;
  const a = { x: e.clientX, y: e.clientY };
  return xu(a, t);
}
function Zt(e) {
  return e.pointerType === "mouse";
}
const Cu = "DialogTitle", ku = "DialogContent";
function Bu({
  titleName: e = Cu,
  contentName: t = ku,
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
    const c = (d = l.value) == null ? void 0 : d.getAttribute("aria-describedby");
    o && !c && (document.getElementById(o) || console.warn(i));
  });
}
const Rl = /* @__PURE__ */ b({
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
    }), process.env.NODE_ENV !== "production" && Bu({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: o.contentElement
    }), (i, d) => (m(), y(s(Wa), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: d[6] || (d[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: f(() => [
        P(s(la), E({
          id: s(o).contentId,
          ref: s(l),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(o).descriptionId,
          "aria-labelledby": s(o).titleId,
          "data-state": s(Zn)(s(o).open.value)
        }, i.$attrs, {
          onDismiss: d[0] || (d[0] = (c) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: d[2] || (d[2] = (c) => n("focusOutside", c)),
          onInteractOutside: d[3] || (d[3] = (c) => n("interactOutside", c)),
          onPointerDownOutside: d[4] || (d[4] = (c) => n("pointerDownOutside", c))
        }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Pu = /* @__PURE__ */ b({
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
    return oa(i), (d, c) => (m(), y(Rl, E({ ...a, ...s(l) }, {
      ref: s(r),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: c[0] || (c[0] = (u) => {
        var p;
        u.defaultPrevented || (u.preventDefault(), (p = s(o).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: c[1] || (c[1] = (u) => {
        const p = u.detail.originalEvent, v = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || v) && u.preventDefault();
      }),
      onFocusOutside: c[2] || (c[2] = (u) => {
        u.preventDefault();
      })
    }), {
      default: f(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Ou = /* @__PURE__ */ b({
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
    return (i, d) => (m(), y(Rl, E({ ...a, ...s(n) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var u;
        c.defaultPrevented || (l.value || (u = s(o).triggerElement.value) == null || u.focus(), c.preventDefault()), l.value = !1, r.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        var u;
        c.defaultPrevented || (l.value = !0, c.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const p = c.target;
        (u = s(o).triggerElement.value) != null && u.contains(p) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && r.value && c.preventDefault();
      })
    }), {
      default: f(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vl = /* @__PURE__ */ b({
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
    return (i, d) => (m(), y(s(Re), {
      present: i.forceMount || s(o).open.value
    }, {
      default: f(() => [
        s(o).modal.value ? (m(), y(Pu, E({
          key: 0,
          ref: s(r)
        }, { ...a, ...s(l), ...i.$attrs }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (m(), y(Ou, E({
          key: 1,
          ref: s(r)
        }, { ...a, ...s(l), ...i.$attrs }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Du = /* @__PURE__ */ b({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ve();
    return aa(!0), F(), (a, n) => (m(), y(s(L), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": s(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Fl = /* @__PURE__ */ b({
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
      return (l = s(t)) != null && l.modal.value ? (m(), y(s(Re), {
        key: 0,
        present: n.forceMount || s(t).open.value
      }, {
        default: f(() => [
          P(Du, E(n.$attrs, {
            ref: s(a),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: f(() => [
              _(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : ee("", !0);
    };
  }
}), Xn = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const a = Ve();
    return (n, o) => (m(), y(s(L), E(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (l) => s(a).onOpenChange(!1))
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Su = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, a = Ve();
    return F(), (n, o) => (m(), y(s(L), E(t, {
      id: s(a).titleId
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Eu = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    F();
    const a = Ve();
    return (n, o) => (m(), y(s(L), E(t, {
      id: s(a).descriptionId
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function Mu(e) {
  function t(n) {
    return Array.isArray(e.date.value) ? e.date.value.some((o) => Bt(o, n)) : e.date.value ? Bt(e.date.value, n) : !1;
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
function Au(e, t) {
  const a = t(e), n = a.compare(e), o = {};
  return n >= 7 && (o.day = 1), n >= Gt(e) && (o.month = 1), a.set({ ...o });
}
function Tu(e, t) {
  const a = t(e), n = e.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= Gt(e) && (o.month = 13), a.set({ ...o });
}
function Iu(e, t) {
  return t(e);
}
function Ru(e, t) {
  return t(e);
}
function Vu(e) {
  const t = Hd(e.locale.value), a = B(() => {
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
    return !o.value.some((x) => fo(h, x));
  }
  const r = (h = "month", x) => {
    if (!e.maxValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const $ = n.value[n.value.length - 1].value;
    if (x || e.nextPage.value) {
      const C = Au($, x || e.nextPage.value);
      return pa(C, e.maxValue.value);
    }
    if (h === "year") {
      const C = $.add({ years: 1 }).set({ day: 1, month: 1 });
      return pa(C, e.maxValue.value);
    }
    const D = $.add({ months: 1 }).set({ day: 1 });
    return pa(D, e.maxValue.value);
  }, i = (h = "month", x) => {
    if (!e.minValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const $ = n.value[0].value;
    if (x || e.prevPage.value) {
      const C = Tu($, x || e.prevPage.value);
      return ca(C, e.minValue.value);
    }
    if (h === "year") {
      const C = $.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return ca(C, e.minValue.value);
    }
    const D = $.subtract({ months: 1 }).set({ day: 35 });
    return ca(D, e.minValue.value);
  };
  function d(h) {
    var x;
    return !!((x = e.isDateDisabled) != null && x.call(e, h) || e.disabled.value || e.maxValue.value && pa(h, e.maxValue.value) || e.minValue.value && ca(h, e.minValue.value));
  }
  const c = (h) => {
    var x;
    return !!((x = e.isDateUnavailable) != null && x.call(e, h));
  }, u = B(() => n.value.length ? n.value[0].rows[0].map((h) => t.dayOfWeek(Se(h), e.weekdayFormat.value)) : []), p = (h = "month", x) => {
    const $ = n.value[0].value;
    if (x || e.nextPage.value) {
      const O = Iu($, x || e.nextPage.value), S = st({
        dateObj: O,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = S;
      const A = {};
      if (!x) {
        const T = S[0].value.compare($);
        T >= Gt($) && (A.day = 1), T >= 365 && (A.month = 1);
      }
      e.placeholder.value = S[0].value.set({ ...A });
      return;
    }
    const D = h === "month" ? $.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : $.add({ years: 1 }), C = st({
      dateObj: D,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = C, e.placeholder.value = C[0].value.set({ day: 1 });
  }, v = (h = "month", x) => {
    const $ = n.value[0].value;
    if (x || e.prevPage.value) {
      const O = Ru($, x || e.prevPage.value), S = st({
        dateObj: O,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = S;
      const A = {};
      if (!x) {
        const T = $.compare(S[0].value);
        T >= Gt($) && (A.day = 1), T >= 365 && (A.month = 1);
      }
      e.placeholder.value = S[0].value.set({ ...A });
      return;
    }
    const D = h === "month" ? $.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : $.subtract({ years: 1 }), C = st({
      dateObj: D,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = C, e.placeholder.value = C[0].value.set({ day: 1 });
  };
  J(e.placeholder, (h) => {
    o.value.some((x) => fo(x, h)) || (n.value = st({
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
    const h = Se(n.value[0].value), x = Se(n.value[n.value.length - 1].value), $ = t.fullMonth(h, a.value), D = t.fullMonth(x, a.value), C = t.fullYear(h, a.value), O = t.fullYear(x, a.value);
    return C === O ? `${$} - ${D} ${O}` : `${$} ${C} - ${D} ${O}`;
  }), w = B(() => `${e.calendarLabel.value ?? "Event Date"}, ${g.value}`);
  return {
    isDateDisabled: d,
    isDateUnavailable: c,
    isNextButtonDisabled: r,
    isPrevButtonDisabled: i,
    grid: n,
    weekdays: u,
    visibleView: o,
    isOutsideVisibleView: l,
    formatter: t,
    nextPage: p,
    prevPage: v,
    headingValue: g,
    fullCalendarLabel: w
  };
}
const Fu = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Lu = {
  role: "heading",
  "aria-level": "2"
}, [Ft, Nu] = re("CalendarRoot"), zu = /* @__PURE__ */ b({
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
      weekStartsOn: c,
      weekdayFormat: u,
      fixedWeeks: p,
      multiple: v,
      minValue: g,
      maxValue: w,
      numberOfMonths: h,
      preventDeselect: x,
      isDateDisabled: $,
      isDateUnavailable: D,
      calendarLabel: C,
      defaultValue: O,
      nextPage: S,
      prevPage: A,
      dir: T
    } = me(a), { primitiveElement: W, currentElement: j } = Na(), k = ft(T), I = fe(a, "modelValue", n, {
      defaultValue: O.value,
      passive: a.modelValue === void 0
    }), V = yd({
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
      headingValue: G,
      isDateDisabled: oe,
      isDateUnavailable: ue,
      isNextButtonDisabled: pe,
      isPrevButtonDisabled: ke,
      weekdays: be,
      isOutsideVisibleView: Ua,
      nextPage: Wt,
      prevPage: Ha,
      formatter: bt,
      grid: Ka
    } = Vu({
      locale: o,
      placeholder: ne,
      weekStartsOn: c,
      fixedWeeks: p,
      numberOfMonths: h,
      minValue: g,
      maxValue: w,
      disabled: l,
      weekdayFormat: u,
      pagedNavigation: d,
      isDateDisabled: $.value,
      isDateUnavailable: D.value,
      calendarLabel: C,
      nextPage: S,
      prevPage: A
    }), {
      isInvalid: De,
      isDateSelected: Be
    } = Mu({
      date: I,
      isDateDisabled: oe,
      isDateUnavailable: ue
    });
    J(I, (le) => {
      if (Array.isArray(le) && le.length) {
        const _e = le[le.length - 1];
        _e && !Za(ne.value, _e) && Z(_e);
      } else !Array.isArray(le) && le && !Za(ne.value, le) && Z(le);
    });
    function ot(le) {
      if (v.value) {
        if (Array.isArray(I.value)) {
          if (!I.value) {
            I.value = [le.copy()];
            return;
          }
          if (I.value.findIndex((_e) => Bt(_e, le)) === -1)
            I.value = [...I.value, le];
          else if (!x.value) {
            const _e = I.value.filter((lt) => !Bt(lt, le));
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
        !x.value && Za(I.value, le) ? (ne.value = le.copy(), I.value = void 0) : I.value = le.copy();
      }
    }
    return ce(() => {
      i.value && bd(j.value);
    }), Nu({
      isDateUnavailable: ue,
      dir: k,
      isDateDisabled: oe,
      locale: o,
      formatter: bt,
      modelValue: I,
      placeholder: ne,
      disabled: l,
      initialFocus: i,
      pagedNavigation: d,
      weekStartsOn: c,
      weekdayFormat: u,
      fixedWeeks: p,
      multiple: v,
      numberOfMonths: h,
      readonly: r,
      preventDeselect: x,
      fullCalendarLabel: N,
      headingValue: G,
      isInvalid: De,
      isDateSelected: Be,
      isNextButtonDisabled: pe,
      isPrevButtonDisabled: ke,
      isOutsideVisibleView: Ua,
      nextPage: Wt,
      prevPage: Ha,
      parentElement: j,
      onPlaceholderChange: Z,
      onDateChange: ot
    }), (le, _e) => (m(), y(s(L), {
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
      default: f(() => [
        _(le.$slots, "default", {
          date: s(ne),
          grid: s(Ka),
          weekDays: s(be),
          weekStartsOn: s(c),
          locale: s(o),
          fixedWeeks: s(p)
        }),
        H("div", Fu, [
          H("div", Lu, X(s(N)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), Wu = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(L), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ju = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = Ft();
    return (n, o) => (m(), y(s(L), E(t, {
      "data-disabled": s(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        _(n.$slots, "default", {
          headingValue: s(a).headingValue.value
        }, () => [
          Y(X(s(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Uu = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = Ft(), n = B(() => a.disabled.value ? !0 : void 0), o = B(() => a.readonly.value ? !0 : void 0);
    return (l, r) => (m(), y(s(L), E(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Hu = /* @__PURE__ */ b({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = Ft();
    return (a, n) => {
      var o, l;
      return m(), y(s(L), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": s(t).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": s(t).isDateDisabled(a.date) || ((l = (o = s(t)).isDateUnavailable) == null ? void 0 : l.call(o, a.date)),
        "data-disabled": s(t).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
          _(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Ku = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(L), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gu = /* @__PURE__ */ b({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = B(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = Ft();
    return (o, l) => (m(), y(s(L), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (r) => s(n).nextPage(t.step, t.nextPage))
    }, {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), qu = /* @__PURE__ */ b({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = B(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = Ft();
    return (o, l) => (m(), y(s(L), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (r) => s(n).prevPage(t.step, t.prevPage))
    }, {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Y("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Yu = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(L), E(t, { "aria-hidden": "true" }), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zu = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(L), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ju = /* @__PURE__ */ b({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(L), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xu = /* @__PURE__ */ b({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = tu(), n = Ft(), { primitiveElement: o, currentElement: l } = Na(), r = B(() => t.day.day.toLocaleString(n.locale.value)), i = B(() => n.formatter.custom(Se(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), d = B(() => n.isDateDisabled(t.day)), c = B(
      () => {
        var C;
        return (C = n.isDateUnavailable) == null ? void 0 : C.call(n, t.day);
      }
    ), u = B(() => Ur(t.day, Rt())), p = B(() => !jr(t.day, t.month)), v = B(
      () => n.isOutsideVisibleView(t.day)
    ), g = B(() => !n.disabled.value && Bt(t.day, n.placeholder.value)), w = B(() => n.isDateSelected(t.day)), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function x(C) {
      var O;
      n.readonly.value || n.isDateDisabled(C) || (O = n.isDateUnavailable) != null && O.call(n, C) || n.onDateChange(C);
    }
    function $() {
      x(t.day);
    }
    function D(C) {
      C.preventDefault(), C.stopPropagation();
      const O = n.parentElement.value, S = O ? Array.from(O.querySelectorAll(h)) : [];
      let A = S.indexOf(l.value);
      const T = 7, W = n.dir.value === "rtl" ? -1 : 1;
      switch (C.code) {
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
    return (C, O) => (m(), y(s(L), E({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": p.value || d.value || c.value ? !0 : void 0,
      "data-selected": w.value ? !0 : void 0,
      "data-value": C.day.toString(),
      "data-disabled": d.value || p.value ? "" : void 0,
      "data-unavailable": c.value ? "" : void 0,
      "data-today": u.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": v.value ? "" : void 0,
      "data-focused": g.value ? "" : void 0,
      tabindex: g.value ? 0 : p.value || d.value ? void 0 : -1,
      onClick: $,
      onKeydown: [
        He(D, ["up", "down", "left", "right", "space", "enter"]),
        O[0] || (O[0] = He(we(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: f(() => [
        _(C.$slots, "default", { dayValue: r.value }, () => [
          Y(X(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Pa(e) {
  return e === "indeterminate";
}
function Ll(e) {
  return Pa(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Qu = ["value", "checked", "name", "disabled", "required"], [ec, tc] = re("CheckboxRoot"), ac = /* @__PURE__ */ b({
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
    }), { forwardRef: r, currentElement: i } = F(), d = La(i), c = B(() => {
      var u;
      return a.id && i.value ? (u = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : u.innerText : void 0;
    });
    return tc({
      disabled: o,
      state: l
    }), (u, p) => (m(), R(Q, null, [
      P(s(L), E(u.$attrs, {
        id: u.id,
        ref: s(r),
        role: "checkbox",
        "as-child": a.asChild,
        as: u.as,
        type: u.as === "button" ? "button" : void 0,
        "aria-checked": s(Pa)(s(l)) ? "mixed" : s(l),
        "aria-required": !1,
        "aria-label": u.$attrs["aria-label"] || c.value,
        "data-state": s(Ll)(s(l)),
        "data-disabled": s(o) ? "" : void 0,
        disabled: s(o),
        onKeydown: He(we(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (v) => l.value = s(Pa)(s(l)) ? !0 : !s(l))
      }), {
        default: f(() => [
          _(u.$slots, "default", { checked: s(l) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      s(d) ? (m(), R("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "",
        value: u.value,
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
      }, null, 8, Qu)) : ee("", !0)
    ], 64));
  }
}), nc = /* @__PURE__ */ b({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = F(), a = ec();
    return (n, o) => (m(), y(s(Re), {
      present: n.forceMount || s(Pa)(s(a).state.value) || s(a).state.value === !0
    }, {
      default: f(() => [
        P(s(L), E({
          ref: s(t),
          "data-state": s(Ll)(s(a).state.value),
          "data-disabled": s(a).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: f(() => [
            _(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Nl, oc] = re("PopperRoot"), sa = /* @__PURE__ */ b({
  __name: "PopperRoot",
  setup(e) {
    const t = M();
    return oc({
      anchor: t,
      onAnchorChange: (a) => t.value = a
    }), (a, n) => _(a.$slots, "default");
  }
}), Qn = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = F(), o = Nl();
    return J(n, () => {
      o.onAnchorChange(t.element ?? n.value);
    }), (l, r) => (m(), y(s(L), {
      ref: s(a),
      as: l.as,
      "as-child": l.asChild
    }, {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function lc(e) {
  return e !== null;
}
function sc(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var a, n, o;
      const { placement: l, rects: r, middlewareData: i } = t, d = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, c = d ? 0 : e.arrowWidth, u = d ? 0 : e.arrowHeight, [p, v] = _n(l), g = { start: "0%", center: "50%", end: "100%" }[v], w = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + c / 2, h = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + u / 2;
      let x = "", $ = "";
      return p === "bottom" ? (x = d ? g : `${w}px`, $ = `${-u}px`) : p === "top" ? (x = d ? g : `${w}px`, $ = `${r.floating.height + u}px`) : p === "right" ? (x = `${-u}px`, $ = d ? g : `${h}px`) : p === "left" && (x = `${r.floating.width + u}px`, $ = d ? g : `${h}px`), { data: { x, y: $ } };
    }
  };
}
function _n(e) {
  const [t, a = "center"] = e.split("-");
  return [t, a];
}
const zl = {
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
}, [Fv, rc] = re("PopperContent"), Jt = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Go({
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
    ...zl
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Nl(), { forwardRef: l, currentElement: r } = F(), i = M(), d = M(), { width: c, height: u } = Jd(d), p = B(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), v = B(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), g = B(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), w = B(() => ({
      padding: v.value,
      boundary: g.value.filter(lc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: g.value.length > 0
    })), h = wd(() => [
      ld({
        mainAxis: a.sideOffset + u.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && Bo({
        ...w.value
      }),
      a.avoidCollisions && sd({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? ud() : void 0,
        ...w.value
      }),
      !a.prioritizePosition && a.avoidCollisions && Bo({
        ...w.value
      }),
      rd({
        ...w.value,
        apply: ({ elements: k, rects: I, availableWidth: V, availableHeight: ne }) => {
          const { width: Z, height: N } = I.reference, G = k.floating.style;
          G.setProperty(
            "--radix-popper-available-width",
            `${V}px`
          ), G.setProperty(
            "--radix-popper-available-height",
            `${ne}px`
          ), G.setProperty(
            "--radix-popper-anchor-width",
            `${Z}px`
          ), G.setProperty(
            "--radix-popper-anchor-height",
            `${N}px`
          );
        }
      }),
      d.value && fd({ element: d.value, padding: a.arrowPadding }),
      sc({
        arrowWidth: c.value,
        arrowHeight: u.value
      }),
      a.hideWhenDetached && id({ strategy: "referenceHidden", ...w.value })
    ]), { floatingStyles: x, placement: $, isPositioned: D, middlewareData: C } = md(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...k) => od(...k, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: h
      }
    ), O = B(
      () => _n($.value)[0]
    ), S = B(
      () => _n($.value)[1]
    );
    he(() => {
      D.value && n("placed");
    });
    const A = B(
      () => {
        var k;
        return ((k = C.value.arrow) == null ? void 0 : k.centerOffset) !== 0;
      }
    ), T = M("");
    he(() => {
      r.value && (T.value = window.getComputedStyle(r.value).zIndex);
    });
    const W = B(() => {
      var k;
      return ((k = C.value.arrow) == null ? void 0 : k.x) ?? 0;
    }), j = B(() => {
      var k;
      return ((k = C.value.arrow) == null ? void 0 : k.y) ?? 0;
    });
    return rc({
      placedSide: O,
      onArrowChange: (k) => d.value = k,
      arrowX: W,
      arrowY: j,
      shouldHideArrow: A
    }), (k, I) => {
      var V, ne, Z;
      return m(), R("div", {
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
            (V = s(C).transformOrigin) == null ? void 0 : V.x,
            (ne = s(C).transformOrigin) == null ? void 0 : ne.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Z = s(C).hide) == null ? void 0 : Z.referenceHidden) && {
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
          default: f(() => [
            _(k.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Wl = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return F(), (t, a) => (m(), y(s(L), {
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
      default: f(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), ic = /* @__PURE__ */ b({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, a = B(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([l, r]) => ({ name: `[${o}][${t.name}][${l}]`, value: r })) : { name: `[${t.name}][${o}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, o]) => ({ name: `[${t.name}][${n}]`, value: o })) : []);
    return (n, o) => (m(!0), R(Q, null, ve(a.value, (l) => (m(), y(Wl, {
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
}), dc = "data-radix-vue-collection-item", [eo, uc] = re("CollectionProvider");
function jl(e = dc) {
  const t = M(/* @__PURE__ */ new Map()), a = M(), n = uc({
    collectionRef: a,
    itemMap: t,
    attrName: e
  }), { getItems: o } = Hl(n), l = B(() => Array.from(n.itemMap.value.values())), r = B(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: l, itemMapSize: r };
}
const Ul = b({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const a = eo(), { primitiveElement: n, currentElement: o } = Na();
    return J(o, () => {
      a.collectionRef.value = o.value;
    }), () => it(Yn, { ref: n }, t);
  }
}), to = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: a }) {
    const n = eo(), { primitiveElement: o, currentElement: l } = Na();
    return he((r) => {
      if (l.value) {
        const i = Ds(l.value);
        n.itemMap.value.set(i, { ref: l.value, value: e.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => it(Yn, { ...a, [n.attrName]: "", ref: o }, t);
  }
});
function Hl(e) {
  const t = e ?? eo();
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
const [Lt, cc] = re("ComboboxRoot"), pc = /* @__PURE__ */ b({
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
    }), c = fe(a, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: a.defaultValue ?? o.value ? [] : void 0,
      passive: a.modelValue === void 0,
      deep: !0
    }), u = fe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), p = fe(a, "selectedValue", n, {
      defaultValue: void 0,
      passive: a.selectedValue === void 0
    });
    async function v(N) {
      var G, oe;
      u.value = N, await te(), N ? (c.value && (Array.isArray(c.value) && o.value ? p.value = (G = C().find((ue) => {
        var pe, ke;
        return ((ke = (pe = ue.ref) == null ? void 0 : pe.dataset) == null ? void 0 : ke.state) === "checked";
      })) == null ? void 0 : G.value : p.value = c.value), (oe = h.value) == null || oe.focus(), ne()) : (w.value = !1, a.resetSearchTermOnBlur && W());
    }
    function g(N) {
      if (Array.isArray(c.value) && o.value) {
        const G = c.value.findIndex((ue) => rt(ue, N)), oe = [...c.value];
        G === -1 ? oe.push(N) : oe.splice(G, 1), c.value = oe;
      } else
        c.value = N, v(!1);
    }
    const w = M(!1), h = M(), x = M(), { forwardRef: $, currentElement: D } = F(), { getItems: C, reactiveItems: O, itemMapSize: S } = jl("data-radix-vue-combobox-item"), A = M([]);
    J(() => S.value, () => {
      A.value = C().map((N) => N.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const T = B(() => {
      if (w.value) {
        if (a.filterFunction)
          return a.filterFunction(A.value, d.value);
        const N = A.value.filter((G) => typeof G == "string");
        if (N.length)
          return N.filter((G) => {
            var oe;
            return G.toLowerCase().includes((oe = d.value) == null ? void 0 : oe.toLowerCase());
          });
      }
      return A.value;
    });
    function W() {
      !o.value && c.value && !Array.isArray(c.value) ? a.displayValue ? d.value = a.displayValue(c.value) : typeof c.value != "object" ? d.value = c.value.toString() : d.value = "" : d.value = "";
    }
    const j = B(() => T.value.findIndex((N) => rt(N, p.value))), k = B(() => {
      var N;
      return (N = O.value.find((G) => rt(G.value, p.value))) == null ? void 0 : N.ref;
    }), I = B(() => JSON.stringify(c.value));
    J(I, async () => {
      await te(), await te(), W();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), J(() => [T.value.length, d.value.length], async ([N, G], [oe, ue]) => {
      await te(), await te(), N && (ue > G || j.value === -1) && (p.value = T.value[0]);
    });
    const V = La(D);
    function ne() {
      k.value instanceof Element && k.value.scrollIntoView({ block: "nearest" });
    }
    function Z() {
      k.value instanceof Element && k.value.focus && k.value.focus();
    }
    return cc({
      searchTerm: d,
      modelValue: c,
      // @ts-expect-error ignoring
      onValueChange: g,
      isUserInputted: w,
      multiple: o,
      disabled: l,
      open: u,
      onOpenChange: v,
      filteredOptions: T,
      contentId: "",
      inputElement: h,
      selectedElement: k,
      onInputElementChange: (N) => h.value = N,
      onInputNavigation: async (N) => {
        const G = j.value;
        G === 0 && N === "up" || G === T.value.length - 1 && N === "down" || (G === -1 && T.value.length || N === "home" ? p.value = T.value[0] : N === "end" ? p.value = T.value[T.value.length - 1] : p.value = T.value[N === "up" ? G - 1 : G + 1], ne(), Z(), te(() => {
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
    }), (N, G) => (m(), y(s(sa), null, {
      default: f(() => [
        P(s(L), E({
          ref: s($),
          style: {
            pointerEvents: s(u) ? "auto" : void 0
          },
          as: N.as,
          "as-child": N.asChild,
          dir: s(i)
        }, N.$attrs), {
          default: f(() => [
            _(N.$slots, "default", {
              open: s(u),
              modelValue: s(c)
            }),
            s(V) && a.name ? (m(), y(s(ic), {
              key: 0,
              name: a.name,
              value: s(c)
            }, null, 8, ["name", "value"])) : ee("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), fc = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, a = Lt(), { forwardRef: n, currentElement: o } = F();
    ce(() => {
      const u = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      u && (a.onInputElementChange(u), setTimeout(() => {
        t.autoFocus && (u == null || u.focus());
      }, 1));
    });
    const l = B(() => t.disabled || a.disabled.value || !1), r = M();
    Ss(() => {
      var u;
      return r.value = (u = a.selectedElement.value) == null ? void 0 : u.id;
    });
    function i(u) {
      a.open.value ? a.onInputNavigation(u.key === "ArrowUp" ? "up" : "down") : a.onOpenChange(!0);
    }
    function d(u) {
      a.open.value && a.onInputNavigation(u.key === "Home" ? "home" : "end");
    }
    function c(u) {
      var p;
      a.searchTerm.value = (p = u.target) == null ? void 0 : p.value, a.open.value || a.onOpenChange(!0), a.isUserInputted.value = !0;
    }
    return (u, p) => (m(), y(s(L), {
      ref: s(n),
      as: u.as,
      "as-child": u.asChild,
      type: u.type,
      disabled: l.value,
      value: s(a).searchTerm.value,
      "aria-expanded": s(a).open.value,
      "aria-controls": s(a).contentId,
      "aria-disabled": l.value ?? void 0,
      "aria-activedescendant": r.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: c,
      onKeydown: [
        He(we(i, ["prevent"]), ["down", "up"]),
        He(s(a).onInputEnter, ["enter"]),
        He(we(d, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: f(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), [Kl, mc] = re("ComboboxGroup"), vc = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: a, currentElement: n } = F(), o = ye(void 0, "radix-vue-combobox-group"), l = Lt(), r = M(!1);
    function i() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!d.length;
    }
    return Id(n, () => {
      te(() => {
        i();
      });
    }, { childList: !0 }), J(() => l.searchTerm.value, () => {
      te(() => {
        i();
      });
    }, { immediate: !0 }), mc({
      id: o
    }), (d, c) => Tt((m(), y(s(L), E(t, {
      ref_key: "currentRef",
      ref: a,
      role: "group",
      "aria-labelledby": s(o)
    }), {
      default: f(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [$n, r.value]
    ]);
  }
}), hc = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    F();
    const a = Kl({ id: "" });
    return (n, o) => (m(), y(s(L), E(t, {
      id: s(a).id
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Lv, gc] = re("ComboboxContent"), yc = /* @__PURE__ */ b({
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
    const a = e, n = t, { position: o } = me(a), l = Lt();
    aa(a.bodyLock);
    const { forwardRef: r, currentElement: i } = F();
    oa(i);
    const d = B(() => a.position === "popper" ? a : {}), c = ie(d.value);
    function u(v) {
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
    return gc({ position: o }), (v, g) => (m(), y(s(Ul), null, {
      default: f(() => [
        v.dismissable ? (m(), y(s(la), {
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
          default: f(() => [
            (m(), y(Me(s(o) === "popper" ? s(Jt) : s(L)), E({ ...v.$attrs, ...s(c) }, {
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
              onPointerleave: u
            }), {
              default: f(() => [
                _(v.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (m(), y(Me(s(o) === "popper" ? s(Jt) : s(L)), E({ key: 1 }, { ...v.$attrs, ...d.value }, {
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
          onPointerleave: u
        }), {
          default: f(() => [
            _(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), bc = /* @__PURE__ */ b({
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
    const a = ae(e, t), { forwardRef: n } = F(), o = Lt();
    return o.contentId || (o.contentId = ye(void 0, "radix-vue-combobox-content")), (l, r) => (m(), y(s(Re), {
      present: l.forceMount || s(o).open.value
    }, {
      default: f(() => [
        P(yc, E({ ...s(a), ...l.$attrs }, { ref: s(n) }), {
          default: f(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), wc = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    F();
    const a = Lt(), n = B(() => a.filteredOptions.value.length === 0);
    return (o, l) => n.value ? (m(), y(s(L), U(E({ key: 0 }, t)), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Y("No options")
        ])
      ]),
      _: 3
    }, 16)) : ee("", !0);
  }
});
function _c(e) {
  const t = Fa({
    nonce: M()
  });
  return B(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.nonce) == null ? void 0 : a.value);
  });
}
const [Nv, xc] = re("ComboboxItem"), $c = "combobox.select", Cc = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { disabled: o } = me(a), l = Lt();
    Kl({ id: "", options: M([]) });
    const { forwardRef: r } = F(), i = B(
      () => {
        var h, x;
        return l.multiple.value && Array.isArray(l.modelValue.value) ? (h = l.modelValue.value) == null ? void 0 : h.some(($) => rt($, a.value)) : rt((x = l.modelValue) == null ? void 0 : x.value, a.value);
      }
    ), d = B(() => rt(l.selectedValue.value, a.value)), c = ye(void 0, "radix-vue-combobox-item"), u = ye(void 0, "radix-vue-combobox-option"), p = B(() => l.isUserInputted.value ? l.searchTerm.value === "" || !!l.filteredOptions.value.find((h) => rt(h, a.value)) : !0);
    async function v(h) {
      n("select", h), !(h != null && h.defaultPrevented) && !o.value && h && l.onValueChange(a.value);
    }
    function g(h) {
      if (!h)
        return;
      const x = { originalEvent: h, value: a.value };
      Hn($c, v, x);
    }
    async function w(h) {
      await te(), !h.defaultPrevented && l.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return xc({
      isSelected: i
    }), (h, x) => (m(), y(s(to), { value: h.value }, {
      default: f(() => [
        Tt(P(s(L), {
          id: s(u),
          ref: s(r),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": s(c),
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
          default: f(() => [
            _(h.$slots, "default", {}, () => [
              Y(X(h.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [$n, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), kc = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (m(), y(s(L), E(t, { "aria-hidden": "" }), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gl = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(Qn), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [vt, ql] = re(["MenuRoot", "MenuSub"], "MenuContext"), [ra, Bc] = re("MenuRoot"), Pc = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o, dir: l } = me(a), r = ft(l), i = fe(a, "open", n), d = M(), c = M(!1);
    return he((u) => {
      if (!Ye)
        return;
      const p = () => {
        c.value = !0, document.addEventListener("pointerdown", v, {
          capture: !0,
          once: !0
        }), document.addEventListener("pointermove", v, {
          capture: !0,
          once: !0
        });
      }, v = () => c.value = !1;
      document.addEventListener("keydown", p, { capture: !0 }), u(() => {
        document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", v, {
          capture: !0
        }), document.removeEventListener("pointermove", v, {
          capture: !0
        });
      });
    }), ql({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      content: d,
      onContentChange: (u) => {
        d.value = u;
      }
    }), Bc({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: c,
      dir: r,
      modal: o
    }), (u, p) => (m(), y(s(sa), null, {
      default: f(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Oc = "rovingFocusGroup.onEntryFocus", Dc = { bubbles: !1, cancelable: !0 }, Sc = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ec(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Mc(e, t, a) {
  const n = Ec(e.key, a);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Sc[n];
}
function Yl(e, t = !1) {
  const a = document.activeElement;
  for (const n of e)
    if (n === a || (n.focus({ preventScroll: t }), document.activeElement !== a))
      return;
}
function Ac(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
const [Tc, Ic] = re("RovingFocusGroup"), Zl = /* @__PURE__ */ b({
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
    const n = e, o = a, { loop: l, orientation: r, dir: i } = me(n), d = ft(i), c = fe(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), u = M(!1), p = M(!1), v = M(0), { getItems: g } = jl();
    function w(h) {
      const x = !p.value;
      if (h.currentTarget && h.target === h.currentTarget && x && !u.value) {
        const $ = new CustomEvent(Oc, Dc);
        if (h.currentTarget.dispatchEvent($), o("entryFocus", $), !$.defaultPrevented) {
          const D = g().map((A) => A.ref).filter((A) => A.dataset.disabled !== ""), C = D.find((A) => A.getAttribute("data-active") === "true"), O = D.find(
            (A) => A.id === c.value
          ), S = [C, O, ...D].filter(
            Boolean
          );
          Yl(S, n.preventScrollOnEntryFocus);
        }
      }
      p.value = !1;
    }
    return t({
      getItems: g
    }), Ic({
      loop: l,
      dir: d,
      orientation: r,
      currentTabStopId: c,
      onItemFocus: (h) => {
        c.value = h;
      },
      onItemShiftTab: () => {
        u.value = !0;
      },
      onFocusableItemAdd: () => {
        v.value++;
      },
      onFocusableItemRemove: () => {
        v.value--;
      }
    }), (h, x) => (m(), y(s(Ul), null, {
      default: f(() => [
        P(s(L), {
          tabindex: u.value || v.value === 0 ? -1 : 0,
          "data-orientation": s(r),
          as: h.as,
          "as-child": h.asChild,
          dir: s(d),
          style: { outline: "none" },
          onMousedown: x[0] || (x[0] = ($) => p.value = !0),
          onFocus: w,
          onBlur: x[1] || (x[1] = ($) => u.value = !1)
        }, {
          default: f(() => [
            _(h.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Rc = /* @__PURE__ */ b({
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
    const t = e, a = Tc(), n = B(() => t.tabStopId || ye()), o = B(
      () => a.currentTabStopId.value === n.value
    ), { getItems: l } = Hl();
    ce(() => {
      t.focusable && a.onFocusableItemAdd();
    }), ea(() => {
      t.focusable && a.onFocusableItemRemove();
    });
    function r(i) {
      if (i.key === "Tab" && i.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const d = Mc(
        i,
        a.orientation.value,
        a.dir.value
      );
      if (d !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !t.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let c = [...l().map((u) => u.ref).filter((u) => u.dataset.disabled !== "")];
        if (d === "last")
          c.reverse();
        else if (d === "prev" || d === "next") {
          d === "prev" && c.reverse();
          const u = c.indexOf(
            i.currentTarget
          );
          c = a.loop.value ? Ac(c, u + 1) : c.slice(u + 1);
        }
        te(() => Yl(c));
      }
    }
    return (i, d) => (m(), y(s(to), null, {
      default: f(() => [
        P(s(L), {
          tabindex: o.value ? 0 : -1,
          "data-orientation": s(a).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: d[0] || (d[0] = (c) => {
            i.focusable ? s(a).onItemFocus(n.value) : c.preventDefault();
          }),
          onFocus: d[1] || (d[1] = (c) => s(a).onItemFocus(n.value)),
          onKeydown: r
        }, {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [ao, Vc] = re("MenuContent"), no = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Go({
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
    ...zl
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = vt(), l = ra(), { trapFocus: r, disableOutsidePointerEvents: i, loop: d } = me(a);
    Gn(), aa(i.value);
    const c = M(""), u = M(0), p = M(0), v = M(null), g = M("right"), w = M(0), h = M(null), { createCollection: x } = na(), { forwardRef: $, currentElement: D } = F(), C = x(D);
    J(D, (k) => {
      o.onContentChange(k);
    });
    const { handleTypeaheadSearch: O } = qn(C);
    ea(() => {
      window.clearTimeout(u.value);
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
      const I = k.target.closest("[data-radix-menu-content]") === k.currentTarget, V = k.ctrlKey || k.altKey || k.metaKey, ne = k.key.length === 1, Z = Fd(
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
      if (k.code === "Space" || (I && (k.key === "Tab" && k.preventDefault(), !V && ne && O(k.key)), k.target !== D.value) || !bu.includes(k.key))
        return;
      k.preventDefault();
      const N = C.value;
      Il.includes(k.key) && N.reverse(), wn(N);
    }
    function W(k) {
      var I, V;
      (V = (I = k == null ? void 0 : k.currentTarget) == null ? void 0 : I.contains) != null && V.call(I, k.target) || (window.clearTimeout(u.value), c.value = "");
    }
    function j(k) {
      var I;
      if (!Zt(k))
        return;
      const V = k.target, ne = w.value !== k.clientX;
      if ((I = k == null ? void 0 : k.currentTarget) != null && I.contains(V) && ne) {
        const Z = k.clientX > w.value ? "right" : "left";
        g.value = Z, w.value = k.clientX;
      }
    }
    return Vc({
      onItemEnter: (k) => !!S(k),
      onItemLeave: (k) => {
        var I;
        S(k) || ((I = D.value) == null || I.focus(), h.value = null);
      },
      onTriggerLeave: (k) => !!S(k),
      searchRef: c,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (k) => {
        v.value = k;
      }
    }), (k, I) => (m(), y(s(Wa), {
      "as-child": "",
      trapped: s(r),
      onMountAutoFocus: A,
      onUnmountAutoFocus: I[7] || (I[7] = (V) => n("closeAutoFocus", V))
    }, {
      default: f(() => [
        P(s(la), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: I[2] || (I[2] = (V) => n("escapeKeyDown", V)),
          onPointerDownOutside: I[3] || (I[3] = (V) => n("pointerDownOutside", V)),
          onFocusOutside: I[4] || (I[4] = (V) => n("focusOutside", V)),
          onInteractOutside: I[5] || (I[5] = (V) => n("interactOutside", V)),
          onDismiss: I[6] || (I[6] = (V) => n("dismiss"))
        }, {
          default: f(() => [
            P(s(Zl), {
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
              default: f(() => [
                P(s(Jt), {
                  ref: s($),
                  role: "menu",
                  as: k.as,
                  "as-child": k.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(Zn)(s(o).open.value),
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
                  default: f(() => [
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
}), Jl = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = ao(), { forwardRef: n } = F(), o = M(!1);
    async function l(i) {
      if (!i.defaultPrevented && Zt(i)) {
        if (t.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function r(i) {
      await te(), !i.defaultPrevented && Zt(i) && a.onItemLeave(i);
    }
    return (i, d) => (m(), y(s(to), null, {
      default: f(() => [
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
          onFocus: d[0] || (d[0] = async (c) => {
            await te(), !(c.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: d[1] || (d[1] = async (c) => {
            await te(), !c.defaultPrevented && (o.value = !1);
          })
        }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), oo = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: l } = F(), r = ra(), i = ao(), d = M(!1);
    async function c() {
      const u = l.value;
      if (!a.disabled && u) {
        const p = new CustomEvent(gu, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await te(), p.defaultPrevented ? d.value = !1 : r.onClose();
      }
    }
    return (u, p) => (m(), y(Jl, E(a, {
      ref: s(o),
      onClick: c,
      onPointerdown: p[0] || (p[0] = () => {
        d.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (v) => {
        var g;
        await te(), !v.defaultPrevented && (d.value || (g = v.currentTarget) == null || g.click());
      }),
      onKeydown: p[2] || (p[2] = async (v) => {
        const g = s(i).searchRef.value !== "";
        u.disabled || g && v.key === " " || s(bn).includes(v.key) && (v.currentTarget.click(), v.preventDefault());
      })
    }), {
      default: f(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Fc, Xl] = re(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Lc = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Fc({
      checked: M(!1)
    });
    return (a, n) => (m(), y(s(Re), {
      present: a.forceMount || s(Ba)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: f(() => [
        P(s(L), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": s(Jn)(s(t).checked.value)
        }, {
          default: f(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Nc = /* @__PURE__ */ b({
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
    return Xl({ checked: o }), (l, r) => (m(), y(oo, E({ role: "menuitemcheckbox" }, a, {
      "aria-checked": s(Ba)(s(o)) ? "mixed" : s(o),
      "data-state": s(Jn)(s(o)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), s(Ba)(s(o)) ? o.value = !0 : o.value = !s(o);
      })
    }), {
      default: f(() => [
        _(l.$slots, "default", { checked: s(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), zc = /* @__PURE__ */ b({
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
    return oa(i), (d, c) => (m(), y(no, E(s(o), {
      ref: s(r),
      "trap-focus": s(l).open.value,
      "disable-outside-pointer-events": s(l).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (u) => s(l).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = we((u) => n("focusOutside", u), ["prevent"]))
    }), {
      default: f(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Wc = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(no, E(s(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: l[0] || (l[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jc = /* @__PURE__ */ b({
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
    return (l, r) => (m(), y(s(Re), {
      present: l.forceMount || s(n).open.value
    }, {
      default: f(() => [
        s(o).modal.value ? (m(), y(zc, U(E({ key: 0 }, { ...l.$attrs, ...s(a) })), {
          default: f(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16)) : (m(), y(Wc, U(E({ key: 1 }, { ...l.$attrs, ...s(a) })), {
          default: f(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ql = /* @__PURE__ */ b({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(L), E({ role: "group" }, t), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uc = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(L), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hc = /* @__PURE__ */ b({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(za), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Kc, Gc] = re("MenuRadioGroup"), qc = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = fe(a, "modelValue", t);
    return Gc({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, l) => (m(), y(Ql, U(K(a)), {
      default: f(() => [
        _(o.$slots, "default", { modelValue: s(n) })
      ]),
      _: 3
    }, 16));
  }
}), Yc = /* @__PURE__ */ b({
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
    const a = e, n = t, { value: o } = me(a), l = Kc(), r = B(
      () => l.modelValue.value === (o == null ? void 0 : o.value)
    );
    return Xl({ checked: r }), (i, d) => (m(), y(oo, E({ role: "menuitemradio" }, a, {
      "aria-checked": r.value,
      "data-state": s(Jn)(r.value),
      onSelect: d[0] || (d[0] = async (c) => {
        n("select", c), s(l).onValueChange(s(o));
      })
    }), {
      default: f(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Zc = /* @__PURE__ */ b({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(L), E(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [es, Jc] = re("MenuSub"), Xc = /* @__PURE__ */ b({
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
    }), ql({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: r,
      onContentChange: (i) => {
        r.value = i;
      }
    }), Jc({
      triggerId: "",
      contentId: "",
      trigger: l,
      onTriggerChange: (i) => {
        l.value = i;
      }
    }), (i, d) => (m(), y(s(sa), null, {
      default: f(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Qc = /* @__PURE__ */ b({
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
    const a = ae(e, t), n = vt(), o = ra(), l = es(), { forwardRef: r, currentElement: i } = F();
    return l.contentId || (l.contentId = ye(void 0, "radix-vue-menu-sub-content")), (d, c) => (m(), y(s(Re), {
      present: d.forceMount || s(n).open.value
    }, {
      default: f(() => [
        P(no, E(s(a), {
          id: s(l).contentId,
          ref: s(r),
          "aria-labelledby": s(l).triggerId,
          align: "start",
          side: s(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = we((u) => {
            var p;
            s(o).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = we(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (u) => {
            u.defaultPrevented || u.target !== s(l).trigger.value && s(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (u) => {
            s(o).onClose(), u.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (u) => {
            var p, v;
            const g = (p = u.currentTarget) == null ? void 0 : p.contains(u.target), w = s(_u)[s(o).dir.value].includes(u.key);
            g && w && (s(n).onOpenChange(!1), (v = s(l).trigger.value) == null || v.focus(), u.preventDefault());
          })
        }), {
          default: f(() => [
            _(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ep = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = vt(), n = ra(), o = es(), l = ao(), r = M(null);
    o.triggerId || (o.triggerId = ye(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    ea(() => {
      i();
    });
    function d(p) {
      !Zt(p) || l.onItemEnter(p) || !t.disabled && !a.open.value && !r.value && (l.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function c(p) {
      var v, g;
      if (!Zt(p))
        return;
      i();
      const w = (v = a.content.value) == null ? void 0 : v.getBoundingClientRect();
      if (w != null && w.width) {
        const h = (g = a.content.value) == null ? void 0 : g.dataset.side, x = h === "right", $ = x ? -5 : 5, D = w[x ? "left" : "right"], C = w[x ? "right" : "left"];
        l.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + $, y: p.clientY },
            { x: D, y: w.top },
            { x: C, y: w.top },
            { x: C, y: w.bottom },
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
    async function u(p) {
      var v;
      const g = l.searchRef.value !== "";
      t.disabled || g && p.key === " " || wu[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await te(), (v = a.content.value) == null || v.focus(), p.preventDefault());
    }
    return (p, v) => (m(), y(Gl, { "as-child": "" }, {
      default: f(() => [
        P(Jl, E(t, {
          id: s(o).triggerId,
          ref: (g) => {
            var w;
            (w = s(o)) == null || w.onTriggerChange(g == null ? void 0 : g.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(o).contentId,
          "data-state": s(Zn)(s(a).open.value),
          onClick: v[0] || (v[0] = async (g) => {
            t.disabled || g.defaultPrevented || (g.currentTarget.focus(), s(a).open.value || s(a).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: c,
          onKeydown: u
        }), {
          default: f(() => [
            _(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [ts, tp] = re("DropdownMenuRoot"), ap = /* @__PURE__ */ b({
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
    return tp({
      open: o,
      onOpenChange: (c) => {
        o.value = c;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerId: "",
      triggerElement: l,
      contentId: "",
      modal: r,
      dir: d
    }), (c, u) => (m(), y(s(Pc), {
      open: s(o),
      "onUpdate:open": u[0] || (u[0] = (p) => Qt(o) ? o.value = p : null),
      dir: s(d),
      modal: s(r)
    }, {
      default: f(() => [
        _(c.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), np = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = ts(), { forwardRef: n, currentElement: o } = F();
    return ce(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = ye(void 0, "radix-vue-dropdown-menu-trigger")), (l, r) => (m(), y(s(Gl), { "as-child": "" }, {
      default: f(() => [
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
          default: f(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), op = /* @__PURE__ */ b({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(Hc), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lp = /* @__PURE__ */ b({
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
    const n = ts(), o = M(!1);
    function l(r) {
      r.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, r.preventDefault());
    }
    return n.contentId || (n.contentId = ye(void 0, "radix-vue-dropdown-menu-content")), (r, i) => {
      var d;
      return m(), y(s(jc), E(s(a), {
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
        onInteractOutside: i[0] || (i[0] = (c) => {
          var u;
          if (c.defaultPrevented) return;
          const p = c.detail.originalEvent, v = p.button === 0 && p.ctrlKey === !0, g = p.button === 2 || v;
          (!s(n).modal.value || g) && (o.value = !0), (u = s(n).triggerElement.value) != null && u.contains(c.target) && c.preventDefault();
        })
      }), {
        default: f(() => [
          _(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), as = /* @__PURE__ */ b({
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
    return F(), (o, l) => (m(), y(s(oo), U(K({ ...a, ...s(n) })), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sp = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (m(), y(s(Ql), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rp = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (m(), y(s(Zc), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ip = /* @__PURE__ */ b({
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
    return F(), (o, l) => (m(), y(s(Nc), U(K({ ...a, ...s(n) })), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ns = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (m(), y(s(Lc), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dp = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (m(), y(s(Uc), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), up = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = mt(t);
    return F(), (o, l) => (m(), y(s(qc), U(K({ ...a, ...s(n) })), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cp = /* @__PURE__ */ b({
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
    return F(), (n, o) => (m(), y(s(Yc), U(K(s(a))), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pp = /* @__PURE__ */ b({
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
    return F(), (o, l) => (m(), y(s(Xc), {
      open: s(n),
      "onUpdate:open": l[0] || (l[0] = (r) => Qt(n) ? n.value = r : null)
    }, {
      default: f(() => [
        _(o.$slots, "default", { open: s(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), fp = /* @__PURE__ */ b({
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
    return F(), (n, o) => (m(), y(s(Qc), E(s(a), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mp = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (m(), y(s(ep), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vp = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (m(), y(s(L), E(t, {
      onMousedown: n[0] || (n[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Nt, hp] = re("PaginationRoot"), gp = /* @__PURE__ */ b({
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
    return hp({
      page: i,
      onPageChange(c) {
        i.value = c;
      },
      pageCount: d,
      siblingCount: o,
      disabled: l,
      showEdges: r
    }), (c, u) => (m(), y(s(L), {
      as: c.as,
      "as-child": c.asChild
    }, {
      default: f(() => [
        _(c.$slots, "default", {
          page: s(i),
          pageCount: d.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), yp = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (m(), y(s(L), E(t, { "data-type": "ellipsis" }), {
      default: f(() => [
        _(a.$slots, "default", {}, () => [
          Y("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), bp = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Nt();
    return F(), (n, o) => (m(), y(s(L), E(t, {
      "aria-label": "First Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: s(a).page.value === 1 || s(a).disabled.value,
      onClick: o[0] || (o[0] = (l) => s(a).onPageChange(1))
    }), {
      default: f(() => [
        _(n.$slots, "default", {}, () => [
          Y("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), wp = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Nt();
    return F(), (n, o) => (m(), y(s(L), E(t, {
      "aria-label": "Last Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: s(a).page.value === s(a).pageCount.value || s(a).disabled.value,
      onClick: o[0] || (o[0] = (l) => s(a).onPageChange(s(a).pageCount.value))
    }), {
      default: f(() => [
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
function _p(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const ga = "ellipsis";
function xp(e, t, a, n) {
  const o = t, l = Math.max(e - a, 1), r = Math.min(e + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, t) - 2, d = l > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(l - 1) > 2, c = r < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - r) > 2;
    if (!d && c)
      return [...Xe(1, i), ga, o];
    if (d && !c) {
      const u = Xe(o - i + 1, o);
      return [1, ga, ...u];
    }
    if (d && c) {
      const u = Xe(l, r);
      return [1, ga, ...u, ga, o];
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
    const a = Nt(), n = B(() => _p(
      xp(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, l) => (m(), y(s(L), U(K(t)), {
      default: f(() => [
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
    const a = Nt(), n = B(() => a.page.value === t.value);
    return (o, l) => (m(), y(s(L), E(t, {
      "data-type": "page",
      "aria-label": `Page ${o.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: s(a).disabled.value,
      type: o.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (r) => s(a).onPageChange(o.value))
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Y(X(o.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), Cp = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const a = Nt();
    return (n, o) => (m(), y(s(L), E(t, {
      "aria-label": "Next Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: s(a).page.value === s(a).pageCount.value || s(a).disabled.value,
      onClick: o[0] || (o[0] = (l) => s(a).onPageChange(s(a).page.value + 1))
    }), {
      default: f(() => [
        _(n.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), kp = /* @__PURE__ */ b({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const a = Nt();
    return (n, o) => {
      var l;
      return m(), y(s(L), E(t, {
        "aria-label": "Previous Page",
        type: n.as === "button" ? "button" : void 0,
        disabled: s(a).page.value === 1 || ((l = s(a).disabled) == null ? void 0 : l.value),
        onClick: o[0] || (o[0] = (r) => s(a).onPageChange(s(a).page.value - 1))
      }), {
        default: f(() => [
          _(n.$slots, "default", {}, () => [
            Y("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
}), [ia, Bp] = re("PopoverRoot"), Pp = /* @__PURE__ */ b({
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
    return Bp({
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
    }), (d, c) => (m(), y(s(sa), null, {
      default: f(() => [
        _(d.$slots, "default", { open: s(l) })
      ]),
      _: 3
    }));
  }
}), Op = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = ia(), { forwardRef: n, currentElement: o } = F();
    return ce(() => {
      a.triggerElement.value = o.value;
    }), (l, r) => (m(), y(Me(s(a).hasCustomAnchor.value ? s(L) : s(Qn)), { "as-child": "" }, {
      default: f(() => [
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
          default: f(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Dp = /* @__PURE__ */ b({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(za), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), os = /* @__PURE__ */ b({
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
    return Gn(), (i, d) => (m(), y(s(Wa), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: d[6] || (d[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: f(() => [
        P(s(la), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (c) => n("pointerDownOutside", c)),
          onInteractOutside: d[1] || (d[1] = (c) => n("interactOutside", c)),
          onEscapeKeyDown: d[2] || (d[2] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: d[3] || (d[3] = (c) => n("focusOutside", c)),
          onDismiss: d[4] || (d[4] = (c) => s(r).onOpenChange(!1))
        }, {
          default: f(() => [
            P(s(Jt), E(s(o), {
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
              default: f(() => [
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
}), Sp = /* @__PURE__ */ b({
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
    return oa(d), (c, u) => (m(), y(os, E(s(r), {
      ref: s(i),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: u[0] || (u[0] = we(
        (p) => {
          var v;
          n("closeAutoFocus", p), l.value || (v = s(o).triggerElement.value) == null || v.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: u[1] || (u[1] = (p) => {
        n("pointerDownOutside", p);
        const v = p.detail.originalEvent, g = v.button === 0 && v.ctrlKey === !0, w = v.button === 2 || g;
        l.value = w;
      }),
      onFocusOutside: u[2] || (u[2] = we(() => {
      }, ["prevent"]))
    }), {
      default: f(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Ep = /* @__PURE__ */ b({
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
    return (d, c) => (m(), y(os, E(s(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (u) => {
        var p;
        n("closeAutoFocus", u), u.defaultPrevented || (l.value || (p = s(o).triggerElement.value) == null || p.focus(), u.preventDefault()), l.value = !1, r.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = async (u) => {
        var p;
        n("interactOutside", u), u.defaultPrevented || (l.value = !0, u.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const v = u.target;
        (p = s(o).triggerElement.value) != null && p.contains(v) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && r.value && u.preventDefault();
      })
    }), {
      default: f(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mp = /* @__PURE__ */ b({
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
    return o.contentId || (o.contentId = ye(void 0, "radix-vue-popover-content")), (i, d) => (m(), y(s(Re), {
      present: i.forceMount || s(o).open.value
    }, {
      default: f(() => [
        s(o).modal.value ? (m(), y(Sp, E({ key: 0 }, s(l), { ref: s(r) }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (m(), y(Ep, E({ key: 1 }, s(l), { ref: s(r) }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ap = ["default-value"], Tp = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(Wl), { "as-child": "" }, {
      default: f(() => [
        Tt(H("select", E({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": l[0] || (l[0] = (r) => Qt(a) ? a.value = r : null),
          "default-value": s(a)
        }), [
          _(o.$slots, "default")
        ], 16, Ap), [
          [Ts, s(a)]
        ])
      ]),
      _: 3
    }));
  }
}), Ip = {
  key: 0,
  value: ""
}, [ht, ls] = re("SelectRoot"), [Rp, Vp] = re("SelectRoot"), Fp = /* @__PURE__ */ b({
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
    }), c = M(!1), { required: u, disabled: p, dir: v } = me(a), g = ft(v);
    ls({
      triggerElement: r,
      onTriggerChange: ($) => {
        r.value = $;
      },
      valueElement: i,
      onValueElementChange: ($) => {
        i.value = $;
      },
      valueElementHasChildren: c,
      onValueElementHasChildrenChange: ($) => {
        c.value = $;
      },
      contentId: "",
      modelValue: o,
      onValueChange: ($) => {
        o.value = $;
      },
      open: l,
      required: u,
      onOpenChange: ($) => {
        l.value = $;
      },
      dir: g,
      triggerPointerDownPosRef: d,
      disabled: p
    });
    const w = La(r), h = M(/* @__PURE__ */ new Set()), x = B(() => Array.from(h.value).map(($) => {
      var D;
      return (D = $.props) == null ? void 0 : D.value;
    }).join(";"));
    return Vp({
      onNativeOptionAdd: ($) => {
        h.value.add($);
      },
      onNativeOptionRemove: ($) => {
        h.value.delete($);
      }
    }), ($, D) => (m(), y(s(sa), null, {
      default: f(() => [
        _($.$slots, "default", {
          modelValue: s(o),
          open: s(l)
        }),
        s(w) ? (m(), y(Tp, E({ key: x.value }, $.$attrs, {
          "aria-hidden": "",
          tabindex: "-1",
          required: s(u),
          name: $.name,
          autocomplete: $.autocomplete,
          disabled: s(p),
          value: s(o),
          onChange: D[0] || (D[0] = (C) => o.value = C.target.value)
        }), {
          default: f(() => [
            s(o) === void 0 ? (m(), R("option", Ip)) : ee("", !0),
            (m(!0), R(Q, null, ve(Array.from(h.value), (C) => (m(), y(Me(C), E({ ref_for: !0 }, C.props, {
              key: C.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : ee("", !0)
      ]),
      _: 3
    }));
  }
}), Lp = [" ", "Enter", "ArrowUp", "ArrowDown"], Np = [" ", "Enter"], ze = 10;
function ss(e) {
  return e === "" || gd(e);
}
const zp = /* @__PURE__ */ b({
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
    const { injectCollection: r } = na(), i = r(), { search: d, handleTypeaheadSearch: c, resetTypeahead: u } = qn(i);
    function p() {
      n.value || (a.onOpenChange(!0), u());
    }
    function v(g) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(g.pageX),
        y: Math.round(g.pageY)
      };
    }
    return (g, w) => (m(), y(s(Qn), { "as-child": "" }, {
      default: f(() => {
        var h, x, $, D;
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
            "data-state": ($ = s(a)) != null && $.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": s(ss)((D = s(a).modelValue) == null ? void 0 : D.value) ? "" : void 0,
            "as-child": g.asChild,
            as: g.as,
            onClick: w[0] || (w[0] = (C) => {
              var O;
              (O = C == null ? void 0 : C.currentTarget) == null || O.focus();
            }),
            onPointerdown: w[1] || (w[1] = (C) => {
              if (C.pointerType === "touch")
                return C.preventDefault();
              const O = C.target;
              O.hasPointerCapture(C.pointerId) && O.releasePointerCapture(C.pointerId), C.button === 0 && C.ctrlKey === !1 && (v(C), C.preventDefault());
            }),
            onPointerup: w[2] || (w[2] = we(
              (C) => {
                C.pointerType === "touch" && v(C);
              },
              ["prevent"]
            )),
            onKeydown: w[3] || (w[3] = (C) => {
              const O = s(d) !== "";
              !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && O && C.key === " " || (s(c)(C.key), s(Lp).includes(C.key) && (p(), C.preventDefault()));
            })
          }, {
            default: f(() => [
              _(g.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), Wp = /* @__PURE__ */ b({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(za), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [lo, jp] = re("SelectItemAlignedPosition"), Up = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, { injectCollection: o } = na(), l = ht(), r = gt(), i = o(), d = M(!1), c = M(!0), u = M(), { forwardRef: p, currentElement: v } = F(), { viewport: g, selectedItem: w, selectedItemText: h, focusSelectedItem: x } = r;
    function $() {
      if (l.triggerElement.value && l.valueElement.value && u.value && v.value && g != null && g.value && w != null && w.value && h != null && h.value) {
        const O = l.triggerElement.value.getBoundingClientRect(), S = v.value.getBoundingClientRect(), A = l.valueElement.value.getBoundingClientRect(), T = h.value.getBoundingClientRect();
        if (l.dir.value !== "rtl") {
          const De = T.left - S.left, Be = A.left - De, ot = O.left - Be, le = O.width + ot, _e = Math.max(le, S.width), lt = window.innerWidth - ze, Ga = Oo(Be, ze, lt - _e);
          u.value.style.minWidth = `${le}px`, u.value.style.left = `${Ga}px`;
        } else {
          const De = S.right - T.right, Be = window.innerWidth - A.right - De, ot = window.innerWidth - O.right - Be, le = O.width + ot, _e = Math.max(le, S.width), lt = window.innerWidth - ze, Ga = Oo(
            Be,
            ze,
            lt - _e
          );
          u.value.style.minWidth = `${le}px`, u.value.style.right = `${Ga}px`;
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
        ), G = V + ne + k + N + Z, oe = Math.min(
          w.value.offsetHeight * 5,
          G
        ), ue = window.getComputedStyle(g.value), pe = Number.parseInt(ue.paddingTop, 10), ke = Number.parseInt(
          ue.paddingBottom,
          10
        ), be = O.top + O.height / 2 - ze, Ua = j - be, Wt = w.value.offsetHeight / 2, Ha = w.value.offsetTop + Wt, bt = V + ne + Ha, Ka = G - bt;
        if (bt <= be) {
          const De = w.value === W[W.length - 1];
          u.value.style.bottom = "0px";
          const Be = v.value.clientHeight - g.value.offsetTop - g.value.offsetHeight, ot = Math.max(
            Ua,
            Wt + (De ? ke : 0) + Be + Z
          ), le = bt + ot;
          u.value.style.height = `${le}px`;
        } else {
          const De = w.value === W[0];
          u.value.style.top = "0px";
          const Be = Math.max(
            be,
            V + g.value.offsetTop + (De ? pe : 0) + Wt
          ) + Ka;
          u.value.style.height = `${Be}px`, g.value.scrollTop = bt - be + g.value.offsetTop;
        }
        u.value.style.margin = `${ze}px 0`, u.value.style.minHeight = `${oe}px`, u.value.style.maxHeight = `${j}px`, n("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const D = M("");
    ce(async () => {
      await te(), $(), v.value && (D.value = window.getComputedStyle(v.value).zIndex);
    });
    function C(O) {
      O && c.value === !0 && ($(), x == null || x(), c.value = !1);
    }
    return jp({
      contentWrapper: u,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: C
    }), (O, S) => (m(), R("div", {
      ref_key: "contentWrapperElement",
      ref: u,
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
        default: f(() => [
          _(O.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Hp = /* @__PURE__ */ b({
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
    return (a, n) => (m(), y(s(Jt), E(s(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zt = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [gt, Kp] = re("SelectContent"), Gp = /* @__PURE__ */ b({
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
    Gn(), aa(a.bodyLock);
    const { createCollection: l } = na(), r = M();
    oa(r);
    const i = l(r), { search: d, handleTypeaheadSearch: c } = qn(i), u = M(), p = M(), v = M(), g = M(!1), w = M(!1);
    function h() {
      p.value && r.value && wn([p.value, r.value]);
    }
    J(g, () => {
      h();
    });
    const { onOpenChange: x, triggerPointerDownPosRef: $ } = o;
    he((S) => {
      if (!r.value)
        return;
      let A = { x: 0, y: 0 };
      const T = (j) => {
        var k, I;
        A = {
          x: Math.abs(
            Math.round(j.pageX) - (((k = $.value) == null ? void 0 : k.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(j.pageY) - (((I = $.value) == null ? void 0 : I.y) ?? 0)
          )
        };
      }, W = (j) => {
        var k;
        j.pointerType !== "touch" && (A.x <= 10 && A.y <= 10 ? j.preventDefault() : (k = r.value) != null && k.contains(j.target) || x(!1), document.removeEventListener("pointermove", T), $.value = null);
      };
      $.value !== null && (document.addEventListener("pointermove", T), document.addEventListener("pointerup", W, {
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
      if (S.key === "Tab" && S.preventDefault(), !A && S.key.length === 1 && c(S.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(S.key)) {
        let T = i.value;
        if (["ArrowUp", "End"].includes(S.key) && (T = T.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const W = S.target, j = T.indexOf(W);
          T = T.slice(j + 1);
        }
        setTimeout(() => wn(T)), S.preventDefault();
      }
    }
    const C = B(() => a.position === "popper" ? a : {}), O = ie(C.value);
    return Kp({
      content: r,
      viewport: u,
      onViewportChange: (S) => {
        u.value = S;
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
    }), (S, A) => (m(), y(s(Wa), {
      "as-child": "",
      onMountAutoFocus: A[6] || (A[6] = we(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: A[7] || (A[7] = (T) => {
        var W;
        n("closeAutoFocus", T), !T.defaultPrevented && ((W = s(o).triggerElement.value) == null || W.focus({ preventScroll: !0 }), T.preventDefault());
      })
    }, {
      default: f(() => [
        P(s(la), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: A[2] || (A[2] = we(() => {
          }, ["prevent"])),
          onDismiss: A[3] || (A[3] = (T) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: A[4] || (A[4] = (T) => n("escapeKeyDown", T)),
          onPointerDownOutside: A[5] || (A[5] = (T) => n("pointerDownOutside", T))
        }, {
          default: f(() => [
            (m(), y(Me(
              S.position === "popper" ? Hp : Up
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
              default: f(() => [
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
}), qp = /* @__PURE__ */ b({
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return ls(e.context), (t, a) => _(t.$slots, "default");
  }
}), Yp = { key: 1 }, Zp = /* @__PURE__ */ b({
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
    return (d, c) => {
      var u;
      return i.value ? (m(), y(s(Re), {
        key: 0,
        ref_key: "presenceRef",
        ref: r,
        present: !0
      }, {
        default: f(() => [
          P(Gp, U(K({ ...s(n), ...d.$attrs })), {
            default: f(() => [
              _(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((u = r.value) != null && u.present) && l.value ? (m(), R("div", Yp, [
        (m(), y(Pn, { to: l.value }, [
          P(qp, { context: s(o) }, {
            default: f(() => [
              _(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : ee("", !0);
    };
  }
}), Jp = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(L), E({ "aria-hidden": "" }, t), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [rs, Xp] = re("SelectItem"), Qp = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: a } = me(t), n = ht(), o = gt(zt), { forwardRef: l, currentElement: r } = F(), i = B(() => {
      var h;
      return ((h = n.modelValue) == null ? void 0 : h.value) === t.value;
    }), d = M(!1), c = M(t.textValue ?? ""), u = ye(void 0, "radix-vue-select-item-text");
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
      await te(), !(h.defaultPrevented || ((x = o.searchRef) == null ? void 0 : x.value) !== "" && h.key === " ") && (Np.includes(h.key) && p(), h.key === " " && h.preventDefault());
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
    }), Xp({
      value: t.value,
      disabled: a,
      textId: u,
      isSelected: i,
      onItemTextChange: (h) => {
        c.value = ((c.value || (h == null ? void 0 : h.textContent)) ?? "").trim();
      }
    }), (h, x) => (m(), y(s(L), {
      ref: s(l),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": s(u),
      "data-highlighted": d.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": s(a) || void 0,
      "data-disabled": s(a) ? "" : void 0,
      tabindex: s(a) ? void 0 : -1,
      as: h.as,
      "as-child": h.asChild,
      onFocus: x[0] || (x[0] = ($) => d.value = !0),
      onBlur: x[1] || (x[1] = ($) => d.value = !1),
      onPointerup: p,
      onPointerdown: x[2] || (x[2] = ($) => {
        $.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: x[3] || (x[3] = we(() => {
      }, ["prevent", "stop"])),
      onPointermove: v,
      onPointerleave: g,
      onKeydown: w
    }, {
      default: f(() => [
        _(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), ef = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = rs();
    return (n, o) => s(a).isSelected.value ? (m(), y(s(L), E({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : ee("", !0);
  }
}), [tf, af] = re("SelectGroup"), nf = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = ye(void 0, "radix-vue-select-group");
    return af({ id: a }), (n, o) => (m(), y(s(L), E({ role: "group" }, t, { "aria-labelledby": s(a) }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), of = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = tf({ id: "" });
    return (n, o) => (m(), y(s(L), E(t, {
      id: s(a).id
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), is = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = ht(), n = gt(zt), o = Rp(), l = rs(), { forwardRef: r, currentElement: i } = F(), d = B(() => {
      var c;
      return it("option", {
        key: l.value,
        value: l.value,
        disabled: l.disabled.value,
        innerHTML: (c = i.value) == null ? void 0 : c.textContent
      });
    });
    return ce(() => {
      i.value && (l.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        l.value,
        l.disabled.value
      ), o.onNativeOptionAdd(d.value));
    }), On(() => {
      o.onNativeOptionRemove(d.value);
    }), (c, u) => (m(), R(Q, null, [
      P(s(L), E({
        id: s(l).textId,
        ref: s(r)
      }, { ...t, ...c.$attrs }), {
        default: f(() => [
          _(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(l).isSelected.value && s(a).valueElement.value && !s(a).valueElementHasChildren.value ? (m(), y(Pn, {
        key: 0,
        to: s(a).valueElement.value
      }, [
        _(c.$slots, "default")
      ], 8, ["to"])) : ee("", !0)
    ], 64));
  }
}), lf = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: a } = me(t), n = _c(a), o = gt(zt), l = o.position === "item-aligned" ? lo() : void 0, { forwardRef: r, currentElement: i } = F();
    ce(() => {
      o == null || o.onViewportChange(i.value);
    });
    const d = M(0);
    function c(u) {
      const p = u.currentTarget, { shouldExpandOnScrollRef: v, contentWrapper: g } = l ?? {};
      if (v != null && v.value && g != null && g.value) {
        const w = Math.abs(d.value - p.scrollTop);
        if (w > 0) {
          const h = window.innerHeight - ze * 2, x = Number.parseFloat(
            g.value.style.minHeight
          ), $ = Number.parseFloat(g.value.style.height), D = Math.max(x, $);
          if (D < h) {
            const C = D + w, O = Math.min(h, C), S = C - O;
            g.value.style.height = `${O}px`, g.value.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, g.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = p.scrollTop;
    }
    return (u, p) => (m(), R(Q, null, [
      P(s(L), E({
        ref: s(r),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...u.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        },
        onScroll: c
      }), {
        default: f(() => [
          _(u.$slots, "default")
        ]),
        _: 3
      }, 16),
      P(s(L), {
        as: "style",
        nonce: s(n)
      }, {
        default: f(() => [
          Y(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), ds = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const a = t, { injectCollection: n } = na(), o = n(), l = gt(zt), r = M(null);
    function i() {
      r.value !== null && (window.clearInterval(r.value), r.value = null);
    }
    he(() => {
      const u = o.value.find(
        (p) => p === document.activeElement
      );
      u == null || u.scrollIntoView({ block: "nearest" });
    });
    function d() {
      r.value === null && (r.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    function c() {
      var u;
      (u = l.onItemLeave) == null || u.call(l), r.value === null && (r.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    return On(() => i()), (u, p) => {
      var v;
      return m(), y(s(L), E({
        "aria-hidden": "",
        style: {
          flexShrink: 0
        }
      }, (v = u.$parent) == null ? void 0 : v.$props, {
        onPointerdown: d,
        onPointermove: c,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: f(() => [
          _(u.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), sf = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = gt(zt), a = t.position === "item-aligned" ? lo() : void 0, { forwardRef: n, currentElement: o } = F(), l = M(!1);
    return he((r) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let c = function() {
          l.value = u.scrollTop > 0;
        };
        const u = t.viewport.value;
        c(), u.addEventListener("scroll", c), r(() => u.removeEventListener("scroll", c));
      }
    }), J(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => l.value ? (m(), y(ds, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: c } = s(t);
        d != null && d.value && c != null && c.value && (d.value.scrollTop = d.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : ee("", !0);
  }
}), rf = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = gt(zt), a = t.position === "item-aligned" ? lo() : void 0, { forwardRef: n, currentElement: o } = F(), l = M(!1);
    return he((r) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let c = function() {
          const p = u.scrollHeight - u.clientHeight;
          l.value = Math.ceil(u.scrollTop) < p;
        };
        const u = t.viewport.value;
        c(), u.addEventListener("scroll", c), r(() => u.removeEventListener("scroll", c));
      }
    }), J(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => l.value ? (m(), y(ds, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: c } = s(t);
        d != null && d.value && c != null && c.value && (d.value.scrollTop = d.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : ee("", !0);
  }
}), df = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: a } = F(), n = ht(), o = Es();
    return Ms(() => {
      var l;
      const r = !!Va((l = o == null ? void 0 : o.default) == null ? void 0 : l.call(o)).length;
      n.onValueElementHasChildrenChange(r);
    }), ce(() => {
      n.valueElement = a;
    }), (l, r) => (m(), y(s(L), {
      ref: s(t),
      as: l.as,
      "as-child": l.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: f(() => {
        var i;
        return [
          s(ss)((i = s(n).modelValue) == null ? void 0 : i.value) ? (m(), R(Q, { key: 0 }, [
            Y(X(l.placeholder), 1)
          ], 64)) : _(l.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), uf = /* @__PURE__ */ b({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, a) => (m(), y(s(L), {
      "aria-hidden": "",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: f(() => [
        _(t.$slots, "default", {}, () => [
          Y("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function cf() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
cf();
const pf = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [ff, mf] = re("SwitchRoot"), vf = /* @__PURE__ */ b({
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
    const { forwardRef: i, currentElement: d } = F(), c = La(d), u = B(() => {
      var p;
      return a.id && d.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return mf({
      checked: l,
      toggleCheck: r,
      disabled: o
    }), (p, v) => (m(), R(Q, null, [
      P(s(L), E(p.$attrs, {
        id: p.id,
        ref: s(i),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || u.value,
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
        default: f(() => [
          _(p.$slots, "default", { checked: s(l) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(c) ? (m(), R("input", {
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
      }, null, 8, pf)) : ee("", !0)
    ], 64));
  }
}), hf = /* @__PURE__ */ b({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ff();
    return F(), (a, n) => {
      var o;
      return m(), y(s(L), {
        "data-state": (o = s(t).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": s(t).disabled.value ? "" : void 0,
        "as-child": a.asChild,
        as: a.as
      }, {
        default: f(() => [
          _(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [so, gf] = re("TabsRoot"), yf = /* @__PURE__ */ b({
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
    return gf({
      modelValue: i,
      changeModelValue: (c) => {
        i.value = c;
      },
      orientation: o,
      dir: r,
      activationMode: a.activationMode,
      baseId: ye(void 0, "radix-vue-tabs"),
      tabsList: d
    }), (c, u) => (m(), y(s(L), {
      dir: s(r),
      "data-orientation": s(o),
      "as-child": c.asChild,
      as: c.as
    }, {
      default: f(() => [
        _(c.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), bf = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: a } = me(t), { forwardRef: n, currentElement: o } = F(), l = so();
    return l.tabsList = o, (r, i) => (m(), y(s(Zl), {
      "as-child": "",
      orientation: s(l).orientation.value,
      dir: s(l).dir.value,
      loop: s(a)
    }, {
      default: f(() => [
        P(s(L), {
          ref: s(n),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": s(l).orientation.value
        }, {
          default: f(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function us(e, t) {
  return `${e}-trigger-${t}`;
}
function cs(e, t) {
  return `${e}-content-${t}`;
}
const wf = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a } = F(), n = so(), o = B(() => us(n.baseId, t.value)), l = B(() => cs(n.baseId, t.value)), r = B(() => t.value === n.modelValue.value), i = M(r.value);
    return ce(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (d, c) => (m(), y(s(Re), {
      present: r.value,
      "force-mount": ""
    }, {
      default: f(({ present: u }) => [
        P(s(L), {
          id: l.value,
          ref: s(a),
          "as-child": d.asChild,
          as: d.as,
          role: "tabpanel",
          "data-state": r.value ? "active" : "inactive",
          "data-orientation": s(n).orientation.value,
          "aria-labelledby": o.value,
          hidden: !u.value,
          tabindex: "0",
          style: Da({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: f(() => [
            d.forceMount || r.value ? _(d.$slots, "default", { key: 0 }) : ee("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), _f = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: a } = F(), n = so(), o = B(() => us(n.baseId, t.value)), l = B(() => cs(n.baseId, t.value)), r = B(() => t.value === n.modelValue.value);
    return (i, d) => (m(), y(s(Rc), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: f(() => [
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
          onMousedown: d[0] || (d[0] = we((c) => {
            !i.disabled && c.ctrlKey === !1 ? s(n).changeModelValue(i.value) : c.preventDefault();
          }, ["left"])),
          onKeydown: d[1] || (d[1] = He((c) => s(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: d[2] || (d[2] = () => {
            const c = s(n).activationMode !== "manual";
            !r.value && !i.disabled && c && s(n).changeModelValue(i.value);
          })
        }, {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), ro = /* @__PURE__ */ b({
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
    return (n, o) => (m(), y(s(vp), E(a.value, {
      class: s(z)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        t.class
      )
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xf = { class: "relative" }, $f = {
  key: 0,
  class: "absolute right-0 mt-[3px] text-xs text-slate-600 dark:text-slate-300"
}, Cf = { class: "mt-[3px] w-4/5 text-sm text-slate-600 dark:text-slate-300" }, kf = {
  name: "Base",
  inheritAttrs: !1
}, yt = /* @__PURE__ */ b({
  ...kf,
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
      return m(), R("div", null, [
        t.label && t.showLabel ? (m(), y(ro, {
          key: 0,
          id: t.id
        }, {
          default: f(() => [
            Y(X(t.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : ee("", !0),
        H("div", xf, [
          _(t.$slots, "default"),
          t.showCharacterCount ? (m(), R("div", $f, " Characters: " + X((n = t.modelValue) == null ? void 0 : n.length), 1)) : ee("", !0)
        ]),
        H("div", Cf, X(t.description), 1),
        P(_r, { message: t.error }, null, 8, ["message"])
      ]);
    };
  }
}), Bf = { class: "items-top flex gap-x-2" }, Pf = { class: "grid gap-1.5 pt-0.5 leading-none" }, Wv = /* @__PURE__ */ b({
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
    label: {},
    description: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, o = M(e.modelValue);
    return J(o, (l) => {
      a("update:modelValue", l);
    }), (l, r) => (m(), y(yt, U(K(l.$props)), {
      default: f(() => [
        H("div", Bf, [
          P(s(ac), {
            id: l.id,
            modelValue: o.value,
            "onUpdate:modelValue": r[0] || (r[0] = (i) => o.value = i),
            class: "focus-visible:ring-primary-950 dark:ring-offset-primary-950 peer size-4 shrink-0 rounded-sm border border-primary-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-900 data-[state=checked]:text-primary-50 dark:border-primary-50 dark:focus-visible:ring-primary-300 dark:data-[state=checked]:bg-primary-300 dark:data-[state=checked]:text-primary-900"
          }, {
            default: f(() => [
              P(s(nc), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: f(() => [
                  P(s(Ma), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "modelValue"]),
          H("div", Pf, [
            P(ro, { for: l.id }, {
              default: f(() => [
                Y(X(l.label), 1)
              ]),
              _: 1
            }, 8, ["for"])
          ])
        ])
      ]),
      _: 1
    }, 16));
  }
}), ps = /* @__PURE__ */ b({
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
    return (r, i) => (m(), y(s(pc), E(s(l), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        a.class
      ]
    }), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fs = /* @__PURE__ */ b({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (l, r) => (m(), y(s(ou), U(K(s(o))), {
      default: f(() => [
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
    return (a, n) => (m(), y(s(Xn), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Of = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(lu), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Df = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
      class: se(s(z)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Sf = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(Su), E(s(n), {
      class: s(z)("text-lg leading-none tracking-tight text-slate-500 dark:text-slate-200", t.class)
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ef = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(Eu), E(s(n), {
      class: s(z)("text-sm text-slate-500 dark:text-slate-500", t.class)
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mf = /* @__PURE__ */ H("span", { class: "sr-only" }, "Close", -1), ms = /* @__PURE__ */ b({
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
    return (r, i) => (m(), y(s(Ml), null, {
      default: f(() => [
        P(s(Fl), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        P(s(Vl), E(s(l), {
          class: s(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg",
            n.class
          )
        }), {
          default: f(() => [
            _(r.$slots, "default"),
            P(s(Xn), {
              onClick: i[0] || (i[0] = (d) => a("close", d)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: f(() => [
                P(s(ol), { class: "size-6 dark:text-slate-300" }),
                Mf
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
}), Af = /* @__PURE__ */ H("span", { class: "sr-only" }, "Close", -1), Uv = /* @__PURE__ */ b({
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
    return (r, i) => (m(), y(s(Ml), null, {
      default: f(() => [
        P(s(Fl), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: f(() => [
            P(s(Vl), E({
              class: s(z)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg md:w-full",
                a.class
              )
            }, s(l), {
              onPointerDownOutside: i[0] || (i[0] = (d) => {
                const c = d.detail.originalEvent, u = c.target;
                (c.offsetX > u.clientWidth || c.offsetY > u.clientHeight) && d.preventDefault();
              })
            }), {
              default: f(() => [
                _(r.$slots, "default"),
                P(s(Xn), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: f(() => [
                    P(s(ol), { class: "size-4" }),
                    Af
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
}), Tf = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
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
    return (l, r) => (m(), y(s(fs), U(K(s(o))), {
      default: f(() => [
        P(s(ms), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: f(() => [
            P(ps, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: f(() => [
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
}), If = /* @__PURE__ */ b({
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
    return (n, o) => (m(), y(s(wc), E(a.value, {
      class: s(z)("py-6 text-center text-sm", t.class)
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rf = /* @__PURE__ */ b({
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
    return (n, o) => (m(), y(s(vc), E(a.value, {
      class: s(z)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: f(() => [
        n.heading ? (m(), y(s(hc), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: f(() => [
            Y(X(n.heading), 1)
          ]),
          _: 1
        })) : ee("", !0),
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vf = { class: "flex items-center border-b px-3" }, Ff = /* @__PURE__ */ b({
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
    return (o, l) => (m(), R("div", Vf, [
      P(s(Vr), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      P(s(fc), E({ ...s(n), ...o.$attrs }, {
        "auto-focus": "",
        class: s(z)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Lf = /* @__PURE__ */ b({
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
    return (r, i) => (m(), y(s(Cc), E(s(l), { class: "relative flex cursor-default select-none rounded-sm px-1 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nf = { role: "presentation" }, zf = /* @__PURE__ */ b({
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
    return (r, i) => (m(), y(s(bc), E(s(l), {
      class: s(z)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: f(() => [
        H("div", Nf, [
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
    return (n, o) => (m(), y(s(kc), E(a.value, {
      class: s(z)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: f(() => [
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
    return (a, n) => (m(), R("span", {
      class: se(s(z)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), vs = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (l, r) => (m(), y(s(Pp), U(K(s(o))), {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hs = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(Op), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gs = /* @__PURE__ */ b({
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
    return (r, i) => (m(), y(s(Dp), null, {
      default: f(() => [
        P(s(Mp), E({ ...s(l), ...r.$attrs }, {
          class: s(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: f(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Wf = { class: "overflow-hidden !font-normal dark:text-white" }, qv = /* @__PURE__ */ b({
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
    const a = t, n = e, o = M(!1), l = M(n.modelValue ?? []), r = (u) => {
      n.multiple || (o.value = !1);
    }, i = B(() => n.multiple ? l.value.map((u) => u.name).join(", ") : typeof l.value == "object" ? l.value.name : typeof l.value == "number" ? n.options.find((u) => u.id === l.value).name : n.placeholder), d = (u, p) => u.filter((v) => v.name.toLowerCase().includes(p.toLowerCase())), c = (u) => n.multiple ? l.value.find((p) => p.id === u.id) : typeof l.value == "object" ? l.value.id === u.id : typeof l.value == "number" ? l.value === u.id : !1;
    return J(l, () => {
      n.multiple ? a("update:modelValue", l.value) : a("update:modelValue", l.value.id);
    }), (u, p) => (m(), y(yt, U(K(u.$props)), {
      default: f(() => [
        P(s(vs), {
          open: o.value,
          "onUpdate:open": p[1] || (p[1] = (v) => o.value = v)
        }, {
          default: f(() => [
            P(s(hs), { "as-child": "" }, {
              default: f(() => [
                P(s(ct), {
                  variant: "outline",
                  role: "combobox",
                  "aria-expanded": o.value,
                  class: se(["justify-between", [u.widthClass]])
                }, {
                  default: f(() => [
                    H("div", Wf, [
                      u.$slots.selectedOptions ? _(u.$slots, "selectedOptions", {
                        key: 0,
                        selectedOptions: l.value
                      }) : (m(), R(Q, { key: 1 }, [
                        Y(X(i.value), 1)
                      ], 64))
                    ]),
                    P(s(Tr), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
                  ]),
                  _: 3
                }, 8, ["aria-expanded", "class"])
              ]),
              _: 3
            }),
            P(s(gs), {
              class: se(["!p-0", [u.widthClass]])
            }, {
              default: f(() => [
                P(s(ps), {
                  multiple: u.multiple,
                  "filter-function": d,
                  modelValue: l.value,
                  "onUpdate:modelValue": p[0] || (p[0] = (v) => l.value = v)
                }, {
                  default: f(() => [
                    u.allowSearch ? (m(), y(s(Ff), {
                      key: 0,
                      class: "h-9",
                      placeholder: u.placeholder
                    }, null, 8, ["placeholder"])) : ee("", !0),
                    P(s(If), null, {
                      default: f(() => [
                        Y(X(u.noResults), 1)
                      ]),
                      _: 1
                    }),
                    P(s(zf), null, {
                      default: f(() => [
                        P(s(Rf), null, {
                          default: f(() => [
                            (m(!0), R(Q, null, ve(u.options, (v) => (m(), y(s(Lf), {
                              key: v.id,
                              id: v.id,
                              value: v,
                              onSelect: (g) => r()
                            }, {
                              default: f(() => [
                                P(s(Ma), {
                                  class: se(["mr-2 size-4", [c(v) ? "opacity-100" : "opacity-0"]])
                                }, null, 8, ["class"]),
                                u.$slots.item ? _(u.$slots, "item", {
                                  key: 0,
                                  option: v
                                }) : (m(), R(Q, { key: 1 }, [
                                  Y(X(v.name), 1)
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
        }, 8, ["open"])
      ]),
      _: 3
    }, 16));
  }
}), jf = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(Hu), E({
      class: s(z)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        t.class
      )
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Uf = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(Xu), E({
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
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hf = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(Uu), E({
      class: s(z)("w-full border-collapse space-y-1", t.class)
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kf = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(Zu), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gf = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(Yu), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), To = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(Ju), E({
      class: s(z)("flex", t.class)
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qf = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(Ku), E({
      class: s(z)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yf = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(Wu), E({
      class: s(z)("relative flex w-full items-center justify-between pt-1", t.class)
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zf = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(ju), E({
      class: s(z)("text-sm font-medium", t.class)
    }, s(n)), {
      default: f(({ headingValue: r }) => [
        _(o.$slots, "default", { headingValue: r }, () => [
          Y(X(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jf = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(Gu), E({
      class: s(z)(
        s(Sa)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, s(n)), {
      default: f(() => [
        Y(" > ")
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Xf = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(qu), E({
      class: s(z)(
        s(Sa)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, s(n)), {
      default: f(() => [
        Y(" < ")
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Qf = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, em = /* @__PURE__ */ b({
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
    return (r, i) => (m(), y(s(zu), E({
      class: s(z)("p-3", a.class)
    }, s(l)), {
      default: f(({ grid: d, weekDays: c }) => [
        P(s(Yf), null, {
          default: f(() => [
            P(s(Xf)),
            P(s(Zf)),
            P(s(Jf))
          ]),
          _: 1
        }),
        H("div", Qf, [
          (m(!0), R(Q, null, ve(d, (u) => (m(), y(s(Hf), {
            key: u.value.toString()
          }, {
            default: f(() => [
              P(s(Gf), null, {
                default: f(() => [
                  P(s(To), null, {
                    default: f(() => [
                      (m(!0), R(Q, null, ve(c, (p) => (m(), y(s(qf), { key: p }, {
                        default: f(() => [
                          Y(X(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              P(s(Kf), null, {
                default: f(() => [
                  (m(!0), R(Q, null, ve(u.rows, (p, v) => (m(), y(s(To), {
                    key: `weekDate-${v}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (m(!0), R(Q, null, ve(p, (g) => (m(), y(s(jf), {
                        key: g.toString(),
                        date: g
                      }, {
                        default: f(() => [
                          P(s(Uf), {
                            day: g,
                            month: u.value
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
function ys(e) {
  return kn() ? (Bn(e), !0) : !1;
}
function ja(e) {
  return typeof e == "function" ? e() : s(e);
}
const tm = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const am = (e) => typeof e < "u", nm = Object.prototype.toString, om = (e) => nm.call(e) === "[object Object]", bs = () => {
};
function lm(e, t) {
  function a(...n) {
    return new Promise((o, l) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(l);
    });
  }
  return a;
}
const ws = (e) => e();
function sm(e = ws) {
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
  return { isActive: Dn(t), pause: a, resume: n, eventFilter: o };
}
function rm(e) {
  return Te();
}
function im(...e) {
  if (e.length !== 1)
    return No(...e);
  const t = e[0];
  return typeof t == "function" ? Dn(Ko(() => ({ get: t, set: bs }))) : M(t);
}
function dm(e, t, a = {}) {
  const {
    eventFilter: n = ws,
    ...o
  } = a;
  return J(
    e,
    lm(
      n,
      t
    ),
    o
  );
}
function um(e, t, a = {}) {
  const {
    eventFilter: n,
    ...o
  } = a, { eventFilter: l, pause: r, resume: i, isActive: d } = sm(n);
  return { stop: dm(
    e,
    t,
    {
      ...o,
      eventFilter: l
    }
  ), pause: r, resume: i, isActive: d };
}
function _s(e, t = !0, a) {
  rm() ? ce(e, a) : t ? e() : te(e);
}
function xs(e) {
  var t;
  const a = ja(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const At = tm ? window : void 0;
function Io(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = At) : [t, a, n, o] = e, !t)
    return bs;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const l = [], r = () => {
    l.forEach((u) => u()), l.length = 0;
  }, i = (u, p, v, g) => (u.addEventListener(p, v, g), () => u.removeEventListener(p, v, g)), d = J(
    () => [xs(t), ja(o)],
    ([u, p]) => {
      if (r(), !u)
        return;
      const v = om(p) ? { ...p } : p;
      l.push(
        ...a.flatMap((g) => n.map((w) => i(u, g, w, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), r();
  };
  return ys(c), c;
}
function cm() {
  const e = M(!1), t = Te();
  return t && ce(() => {
    e.value = !0;
  }, t), e;
}
function pm(e) {
  const t = cm();
  return B(() => (t.value, !!e()));
}
function fm(e, t = {}) {
  const { window: a = At } = t, n = pm(() => a && "matchMedia" in a && typeof a.matchMedia == "function");
  let o;
  const l = M(!1), r = (c) => {
    l.value = c.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", r) : o.removeListener(r));
  }, d = he(() => {
    n.value && (i(), o = a.matchMedia(ja(e)), "addEventListener" in o ? o.addEventListener("change", r) : o.addListener(r), l.value = o.matches);
  });
  return ys(() => {
    d(), i(), o = void 0;
  }), l;
}
function mm(e) {
  return JSON.parse(JSON.stringify(e));
}
const ya = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ba = "__vueuse_ssr_handlers__", vm = /* @__PURE__ */ hm();
function hm() {
  return ba in ya || (ya[ba] = ya[ba] || {}), ya[ba];
}
function $s(e, t) {
  return vm[e] || t;
}
function gm(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const ym = {
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
}, Ro = "vueuse-storage";
function bm(e, t, a, n = {}) {
  var o;
  const {
    flush: l = "pre",
    deep: r = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: d = !0,
    mergeDefaults: c = !1,
    shallow: u,
    window: p = At,
    eventFilter: v,
    onError: g = (k) => {
      console.error(k);
    },
    initOnMounted: w
  } = n, h = (u ? Cn : M)(typeof t == "function" ? t() : t);
  if (!a)
    try {
      a = $s("getDefaultStorage", () => {
        var k;
        return (k = At) == null ? void 0 : k.localStorage;
      })();
    } catch (k) {
      g(k);
    }
  if (!a)
    return h;
  const x = ja(t), $ = gm(x), D = (o = n.serializer) != null ? o : ym[$], { pause: C, resume: O } = um(
    h,
    () => A(h.value),
    { flush: l, deep: r, eventFilter: v }
  );
  p && i && _s(() => {
    Io(p, "storage", W), Io(p, Ro, j), w && W();
  }), w || W();
  function S(k, I) {
    p && p.dispatchEvent(new CustomEvent(Ro, {
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
    if (!k && c) {
      const V = D.read(I);
      return typeof c == "function" ? c(V, x) : $ === "object" && !Array.isArray(V) ? { ...x, ...V } : V;
    } else return typeof I != "string" ? I : D.read(I);
  }
  function W(k) {
    if (!(k && k.storageArea !== a)) {
      if (k && k.key == null) {
        h.value = x;
        return;
      }
      if (!(k && k.key !== e)) {
        C();
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
  return fm("(prefers-color-scheme: dark)", e);
}
function wm(e = {}) {
  const {
    selector: t = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = At,
    storage: l,
    storageKey: r = "vueuse-color-scheme",
    listenToStorageChanges: i = !0,
    storageRef: d,
    emitAuto: c,
    disableTransition: u = !0
  } = e, p = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, v = Cs({ window: o }), g = B(() => v.value ? "dark" : "light"), w = d || (r == null ? im(n) : bm(r, n, l, { window: o, listenToStorageChanges: i })), h = B(() => w.value === "auto" ? g.value : w.value), x = $s(
    "updateHTMLAttrs",
    (O, S, A) => {
      const T = typeof O == "string" ? o == null ? void 0 : o.document.querySelector(O) : xs(O);
      if (!T)
        return;
      let W;
      if (u && (W = o.document.createElement("style"), W.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(W)), S === "class") {
        const j = A.split(/\s/g);
        Object.values(p).flatMap((k) => (k || "").split(/\s/g)).filter(Boolean).forEach((k) => {
          j.includes(k) ? T.classList.add(k) : T.classList.remove(k);
        });
      } else
        T.setAttribute(S, A);
      u && (o.getComputedStyle(W).opacity, document.head.removeChild(W));
    }
  );
  function $(O) {
    var S;
    x(t, a, (S = p[O]) != null ? S : O);
  }
  function D(O) {
    e.onChanged ? e.onChanged(O, $) : $(O);
  }
  J(h, D, { flush: "post", immediate: !0 }), _s(() => D(h.value));
  const C = B({
    get() {
      return c ? w.value : h.value;
    },
    set(O) {
      w.value = O;
    }
  });
  try {
    return Object.assign(C, { store: w, system: g, state: h });
  } catch {
    return C;
  }
}
function _m(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: a = "",
    window: n = At
  } = e, o = wm({
    ...e,
    onChanged: (i, d) => {
      var c;
      e.onChanged ? (c = e.onChanged) == null || c.call(e, i === "dark", d, i) : d(i);
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
function xm(e, t, a, n = {}) {
  var o, l, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: p,
    shouldEmit: v
  } = n, g = Te(), w = a || (g == null ? void 0 : g.emit) || ((o = g == null ? void 0 : g.$emit) == null ? void 0 : o.bind(g)) || ((r = (l = g == null ? void 0 : g.proxy) == null ? void 0 : l.$emit) == null ? void 0 : r.bind(g == null ? void 0 : g.proxy));
  let h = c;
  h = h || `update:${t.toString()}`;
  const x = (C) => i ? typeof i == "function" ? i(C) : mm(C) : C, $ = () => am(e[t]) ? x(e[t]) : p, D = (C) => {
    v ? v(C) && w(h, C) : w(h, C);
  };
  if (d) {
    const C = $(), O = M(C);
    let S = !1;
    return J(
      () => e[t],
      (A) => {
        S || (S = !0, O.value = x(A), te(() => S = !1));
      }
    ), J(
      O,
      (A) => {
        !S && (A !== e[t] || u) && D(A);
      },
      { deep: u }
    ), O;
  } else
    return B({
      get() {
        return $();
      },
      set(C) {
        D(C);
      }
    });
}
const $m = { class: "flex items-center space-x-2" }, Cm = /* @__PURE__ */ b({
  __name: "Toggle",
  props: /* @__PURE__ */ un({
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
  emits: /* @__PURE__ */ un(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const a = t, n = e, o = qo(e, "modelValue");
    J(o, () => {
      a("update:modelValue", o.value);
    });
    const l = B(() => {
      const { class: i, ...d } = n;
      return d;
    }), r = ae(l, a);
    return (i, d) => (m(), y(yt, null, {
      default: f(() => [
        H("div", $m, [
          P(s(vf), E({
            checked: o.value,
            "onUpdate:checked": d[0] || (d[0] = (c) => o.value = c)
          }, s(r), {
            class: s(z)(
              "focus-visible:ring-primary-950 dark:focus-visible:ring-offset-primary-950 peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-600 data-[state=unchecked]:bg-primary-300 dark:focus-visible:ring-primary-300 dark:data-[state=checked]:bg-primary-800 dark:data-[state=unchecked]:bg-primary-600",
              n.class
            )
          }), {
            default: f(({ checked: c }) => [
              P(s(hf), { class: "dark:bg-primary-950 pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" }, {
                default: f(() => [
                  c ? _(i.$slots, "checked", { key: 0 }) : ee("", !0),
                  c ? ee("", !0) : _(i.$slots, "not-checked", { key: 1 })
                ]),
                _: 2
              }, 1024)
            ]),
            _: 3
          }, 16, ["checked", "class"]),
          i.label ? (m(), y(ro, {
            key: 0,
            for: i.id
          }, {
            default: f(() => [
              Y(X(i.label), 1)
            ]),
            _: 1
          }, 8, ["for"])) : ee("", !0)
        ])
      ]),
      _: 3
    }));
  }
}), Yv = /* @__PURE__ */ b({
  __name: "DarkModeToggle",
  setup(e) {
    const t = _m({
      selector: "html"
    });
    return (a, n) => (m(), y(Cm, {
      modelValue: s(t),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => Qt(t) ? t.value = o : null)
    }, {
      checked: f(() => [
        P(s(Fr), { class: "m-auto mt-0.5 size-4 text-primary-900" })
      ]),
      "not-checked": f(() => [
        P(s(Lr), { class: "m-auto size-5 text-primary-900" })
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
    return (o, l) => (m(), R(Q, null, [
      P(s(Xt), {
        onClick: n,
        class: se(t.class)
      }, {
        default: f(() => [
          (m(!0), R(Q, null, ve(o.headers, (r) => (m(), y(s(Oa), {
            key: r.value
          }, {
            default: f(() => [
              o.$slots[`cell_header_${r.value}`] ? _(o.$slots, `cell_header_${r.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (m(), R(Q, { key: 1 }, [
                Y(X(o.row[r.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (m(), y(s(xn), { key: 0 }, {
            default: f(() => [
              _(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : ee("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (m(!0), R(Q, { key: 0 }, ve(o.subRows, (r, i) => (m(), y(s(Xt), { key: i }, {
        default: f(() => [
          (m(!0), R(Q, null, ve(o.headers, (d) => (m(), y(s(Oa), {
            key: d.value
          }, {
            default: f(() => [
              o.$slots[`subrow_cell_${d.value}`] ? _(o.$slots, `subrow_cell_${d.value}`, {
                key: 0,
                item: r,
                open: a.value
              }) : (m(), R(Q, { key: 1 }, [
                Y(X("subrow_cell_" + d.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (m(), y(s(xn), { key: 0 }, {
            default: f(() => [
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
}), km = { class: "relative w-full overflow-auto" }, Bm = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", km, [
      H("table", {
        class: se(s(z)("w-full caption-bottom text-sm", t.class))
      }, [
        _(a.$slots, "default")
      ], 2)
    ]));
  }
}), Pm = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("tbody", {
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
    return (a, n) => (m(), R("td", {
      class: se(["p-4 align-middle dark:text-slate-300 [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Om = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("th", {
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
}), Dm = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("thead", {
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
    return (a, n) => (m(), R("tfoot", {
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
}), Xt = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("tr", {
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
}), xn = /* @__PURE__ */ b({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("td", {
      class: se(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Sm = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("caption", {
      class: se(s(z)("mt-4 text-sm text-slate-500 dark:text-slate-400", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Em = { class: "flex items-center justify-center py-10" }, Xv = /* @__PURE__ */ b({
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
    return (n, o) => (m(), y(Xt, null, {
      default: f(() => [
        P(Oa, E({
          class: s(z)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, a.value), {
          default: f(() => [
            H("div", Em, [
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
    return (t, a) => (m(), y(s(Bm), null, {
      default: f(() => [
        t.caption ? (m(), y(s(Sm), { key: 0 }, {
          default: f(() => [
            Y(X(t.caption), 1)
          ]),
          _: 1
        })) : ee("", !0),
        P(s(Dm), null, {
          default: f(() => [
            P(s(Xt), null, {
              default: f(() => [
                (m(!0), R(Q, null, ve(t.headers, (n, o) => (m(), y(s(Om), null, {
                  default: f(() => [
                    t.$slots[`header_${t.headers[o].value}`] ? _(t.$slots, `header_${t.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (m(), R(Q, { key: 1 }, [
                      Y(X(n.name), 1)
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
        P(s(Pm), null, {
          default: f(() => [
            _(t.$slots, "default", { item: t.rows }, () => [
              (m(!0), R(Q, null, ve(t.rows, (n, o) => (m(), y(s(Xt), { key: o }, {
                default: f(() => [
                  (m(!0), R(Q, null, ve(t.headers, (l) => (m(), y(s(Oa), {
                    key: l.value
                  }, {
                    default: f(() => [
                      t.$slots[`cell_${l.value}`] ? _(t.$slots, `cell_${l.value}`, {
                        key: 0,
                        item: n
                      }) : (m(), R(Q, { key: 1 }, [
                        Y(X(n[l.value]), 1)
                      ], 64))
                    ]),
                    _: 2
                  }, 1024))), 128)),
                  t.$slots.row_actions ? (m(), y(s(xn), { key: 0 }, {
                    default: f(() => [
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
}), Mm = /* @__PURE__ */ b({
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
    return (l, r) => (m(), y(s(ap), U(K(s(o))), {
      default: f(({ open: i }) => [
        _(l.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), ks = /* @__PURE__ */ b({
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
    return (a, n) => (m(), R("div", {
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
}), Am = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(ks, {
      class: se(t.class)
    }, {
      default: f(() => [
        P(s(as), E(s(n), {
          as: o.as,
          href: o.href,
          class: "size-full"
        }), {
          default: f(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "href"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Tm = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = ie(e);
    return (n, o) => (m(), y(s(np), E({ class: "outline-none" }, s(a)), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Im = /* @__PURE__ */ b({
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
    return (r, i) => (m(), y(s(op), null, {
      default: f(() => [
        P(s(lp), E(s(l), {
          class: s(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: f(() => [
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
    return (a, n) => (m(), y(s(sp), U(K(t)), {
      default: f(() => [
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
    return (l, r) => (m(), y(s(up), U(K(s(o))), {
      default: f(() => [
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
    return (o, l) => (m(), y(ks, {
      class: se(t.class)
    }, {
      default: f(() => [
        P(s(as), E(s(n), { class: "size-full" }), {
          default: f(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Rm = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, nh = /* @__PURE__ */ b({
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
    return (r, i) => (m(), y(s(ip), E(s(l), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
        a.class
      )
    }), {
      default: f(() => [
        H("span", Rm, [
          P(s(ns), null, {
            default: f(() => [
              P(s(Ma), { class: "size-4" })
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
function Bs(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Vo(e, t) {
  return m(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  ]);
}
const Vm = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, oh = /* @__PURE__ */ b({
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
    return (r, i) => (m(), y(s(cp), E(s(l), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
        a.class
      )
    }), {
      default: f(() => [
        H("span", Vm, [
          P(s(ns), null, {
            default: f(() => [
              P(s(Bs), { class: "size-2 fill-current" })
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
    return (a, n) => (m(), R("span", {
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
    return (n, o) => (m(), y(s(rp), E(a.value, {
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
    return (o, l) => (m(), y(s(dp), E(s(n), {
      class: s(z)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", t.class)
    }), {
      default: f(() => [
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
    return (l, r) => (m(), y(s(pp), U(K(s(o))), {
      default: f(() => [
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
    return (o, l) => (m(), y(s(mp), E(s(n), {
      class: s(z)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800",
        t.class
      )
    }), {
      default: f(() => [
        _(o.$slots, "default"),
        P(s(nl), { class: "ml-auto size-4" })
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
    return (r, i) => (m(), y(s(fp), E(s(l), {
      class: s(z)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        a.class
      )
    }), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fm = /* @__PURE__ */ b({
  __name: "Dropdown",
  props: {
    triggerClass: {},
    widthClass: { default: "w-56" }
  },
  setup(e) {
    return (t, a) => (m(), y(s(Mm), null, {
      default: f(({ open: n }) => [
        P(s(Tm), {
          "as-child": "",
          class: se([t.triggerClass])
        }, {
          default: f(() => [
            _(t.$slots, "trigger", { open: n })
          ]),
          _: 2
        }, 1032, ["class"]),
        P(s(Im), {
          class: se([t.widthClass])
        }, {
          default: f(() => [
            _(t.$slots, "content")
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }));
  }
}), Lm = { class: "text-black dark:text-slate-400" }, ch = /* @__PURE__ */ b({
  __name: "Modal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const a = t, n = () => a("close");
    return (o, l) => (m(), y(s(fs), { open: o.open }, {
      default: f(() => [
        P(s(Of), null, {
          default: f(() => [
            _(o.$slots, "trigger")
          ]),
          _: 3
        }),
        P(s(ms), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: se("max-w-" + o.size)
        }, {
          default: f(() => [
            P(s(Df), null, {
              default: f(() => [
                P(s(Sf), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.header ? _(o.$slots, "header", { key: 0 }) : (r = o.headerData) != null && r.title ? (m(), R(Q, { key: 1 }, [
                        Y(X(o.headerData.title), 1)
                      ], 64)) : ee("", !0)
                    ];
                  }),
                  _: 3
                }),
                P(s(Ef), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.description ? _(o.$slots, "description", { key: 0 }) : (r = o.headerData) != null && r.description ? (m(), R(Q, { key: 1 }, [
                        Y(X(o.headerData.description), 1)
                      ], 64)) : ee("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            H("div", Lm, [
              o.$slots.content ? _(o.$slots, "content", { key: 0 }) : _(o.$slots, "default", { key: 1 })
            ]),
            P(s(Tf), null, {
              default: f(() => [
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
}), Nm = /* @__PURE__ */ b({
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
    return (n, o) => (m(), y(s(yp), E(a.value, {
      class: s(z)("flex h-9 w-9 items-center justify-center", t.class)
    }), {
      default: f(() => [
        P(s(Rr), { class: "size-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), zm = /* @__PURE__ */ b({
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
    return (n, o) => (m(), y(s(bp), U(K(a.value)), {
      default: f(() => [
        P(s(ct), {
          href: n.href,
          is: n.is,
          as: n.as,
          class: "size-10 p-0",
          variant: "outline"
        }, {
          default: f(() => [
            P(s(Er), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["href", "is", "as"])
      ]),
      _: 1
    }, 16));
  }
}), Wm = /* @__PURE__ */ b({
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
    return (n, o) => (m(), y(s(wp), U(K(a.value)), {
      default: f(() => [
        P(s(ct), {
          href: n.href,
          is: n.is,
          as: n.as,
          class: "size-10 p-0",
          variant: "outline"
        }, {
          default: f(() => [
            P(s(Mr), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["href", "is", "as"])
      ]),
      _: 1
    }, 16));
  }
}), jm = /* @__PURE__ */ b({
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
    return (n, o) => (m(), y(s(Cp), U(K(a.value)), {
      default: f(() => [
        P(s(ct), {
          class: se(s(z)("size-10 p-0", t.class)),
          is: n.is,
          as: n.as,
          href: n.href,
          variant: "outline"
        }, {
          default: f(() => [
            P(s(nl), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["class", "is", "as", "href"])
      ]),
      _: 1
    }, 16));
  }
}), Um = /* @__PURE__ */ b({
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
    return (n, o) => (m(), y(s(kp), U(K(a.value)), {
      default: f(() => [
        P(s(ct), {
          class: se(s(z)("size-10 p-0", t.class)),
          href: n.href,
          is: n.is,
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            P(s(Ar), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["class", "href", "is", "as"])
      ]),
      _: 1
    }, 16));
  }
}), Hm = { class: "my-auto text-slate-400 dark:text-slate-100" }, Km = /* @__PURE__ */ b({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, a) => (m(), R("div", Hm, " Showing " + X(t.min) + " to " + X(t.max) + " of " + X(t.total) + " results ", 1));
  }
}), Gm = { class: "justify-between sm:flex" }, ph = /* @__PURE__ */ b({
  __name: "Pagination",
  props: {
    data: {},
    is: { default: "a" },
    as: {}
  },
  setup(e) {
    const t = e, a = () => t.data.current_page === 1 ? t.data.data.length === 0 ? 0 : 1 : t.data.current_page === t.data.last_page ? t.data.total - t.data.data.length : t.data.current_page * t.data.per_page - t.data.per_page, n = () => t.data.current_page === 1 ? t.data.data.length : t.data.current_page === t.data.last_page ? t.data.total : t.data.current_page * t.data.per_page;
    return (o, l) => (m(), R("div", Gm, [
      P(s(Km), {
        min: a(),
        max: n(),
        total: o.data.total
      }, null, 8, ["min", "max", "total"]),
      P(s(gp), null, {
        default: f(() => [
          P(s($p), { class: "flex items-center gap-1" }, {
            default: f(() => [
              P(s(zm), {
                is: o.is,
                as: o.as,
                href: o.data.first_page_url
              }, null, 8, ["is", "as", "href"]),
              o.data.prev_page_url ? (m(), y(s(Um), {
                key: 0,
                is: o.is,
                as: o.as,
                href: o.data.prev_page_url
              }, null, 8, ["is", "as", "href"])) : ee("", !0),
              (m(!0), R(Q, null, ve(o.data.links, (r, i) => (m(), R(Q, null, [
                i < 5 ? (m(), R("div", { key: i }, [
                  P(s(ct), {
                    href: r.url,
                    is: o.is,
                    as: o.as,
                    class: "size-10 p-0",
                    variant: r.active ? "primary" : "outline"
                  }, {
                    default: f(() => [
                      Y(X(r.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["href", "is", "as", "variant"])
                ])) : ee("", !0)
              ], 64))), 256)),
              o.data.links.length > 5 ? (m(), y(s(Nm), { key: 1 })) : ee("", !0),
              o.data.next_page_url ? (m(), y(s(jm), {
                key: 2,
                is: o.is,
                as: o.as,
                href: o.data.next_page_url
              }, null, 8, ["is", "as", "href"])) : ee("", !0),
              P(s(Wm), {
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
}), qm = /* @__PURE__ */ b({
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
    return (l, r) => (m(), y(s(yf), U(K(s(o))), {
      default: f(() => [
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
    return (o, l) => (m(), y(s(_f), E(s(n), {
      class: s(z)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        t.class
      )
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ym = /* @__PURE__ */ b({
  __name: "TabsItem",
  props: {
    class: {},
    is: { default: "a" },
    tab: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(Me(a.is), {
      href: a.tab.href,
      class: se([
        a.tab.active ? "bg-white text-primary-500 hover:bg-opacity-80 dark:bg-slate-950 dark:text-primary-400" : "hover:bg-white dark:hover:bg-slate-900",
        s(z)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
          t.class
        )
      ])
    }, {
      default: f(() => {
        var o;
        return [
          (o = a.tab) != null && o.icon ? (m(), y(Me(a.tab.icon), {
            key: 0,
            class: "size-5"
          })) : ee("", !0),
          Y(" " + X(a.tab.name), 1)
        ];
      }),
      _: 1
    }, 8, ["href", "class"]));
  }
}), Fo = /* @__PURE__ */ b({
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
    return (n, o) => (m(), y(s(bf), E(a.value, {
      class: s(z)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        t.class
      )
    }), {
      default: f(() => [
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
    return (n, o) => (m(), y(s(wf), E({
      class: s(z)(
        "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        t.class
      )
    }, a.value), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zm = {}, Jm = { class: "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function Xm(e, t) {
  return m(), R("div", Jm, [
    _(e.$slots, "default")
  ]);
}
const Qm = /* @__PURE__ */ Ea(Zm, [["render", Xm]]), vh = /* @__PURE__ */ b({
  __name: "Tabs",
  props: {
    is: { default: "a" },
    tabs: {}
  },
  setup(e) {
    const t = e, a = B(
      () => t.tabs.find((n) => n.active)
    );
    return (n, o) => (m(), y(s(qm), null, {
      default: f(() => [
        P(s(Fo), { class: "hidden gap-2 md:block" }, {
          default: f(() => [
            (m(!0), R(Q, null, ve(n.tabs, (l) => (m(), y(s(Ym), {
              key: l.name,
              is: n.is,
              tab: l
            }, null, 8, ["is", "tab"]))), 128))
          ]),
          _: 1
        }),
        P(s(Fo), { class: "flex md:hidden" }, {
          default: f(() => [
            P(Fm, { "trigger-class": "size-full" }, {
              trigger: f(() => [
                P(tl, null, {
                  default: f(() => {
                    var l;
                    return [
                      Y(X(((l = a.value) == null ? void 0 : l.name) ?? "Select an option"), 1)
                    ];
                  }),
                  _: 1
                })
              ]),
              content: f(() => [
                (m(!0), R(Q, null, ve(n.tabs, (l) => (m(), y(s(Am), {
                  href: l.href,
                  key: l.name
                }, {
                  default: f(() => [
                    Y(X(l.name), 1)
                  ]),
                  _: 2
                }, 1032, ["href"]))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        P(s(Qm), null, {
          default: f(() => [
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
    }), (r, i) => (m(), y(s(vs), null, {
      default: f(() => [
        P(s(hs), { "as-child": "" }, {
          default: f(() => [
            P(s(ct), {
              variant: "outline",
              class: se([
                "w-[280px] justify-start text-left font-normal dark:text-white",
                !r.modelValue && "text-muted-foreground"
              ])
            }, {
              default: f(() => [
                P(s(Sr), { class: "mr-2 size-4" }),
                Y(" " + X(l.value ? s(o).format(l.value.toDate(s(Rt)())) : r.placeholder), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }),
        P(s(gs), { class: "w-auto p-0" }, {
          default: f(() => [
            P(s(em), {
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
});
var ge = [];
for (var dn = 0; dn < 256; ++dn)
  ge.push((dn + 256).toString(16).slice(1));
function ev(e, t = 0) {
  return (ge[e[t + 0]] + ge[e[t + 1]] + ge[e[t + 2]] + ge[e[t + 3]] + "-" + ge[e[t + 4]] + ge[e[t + 5]] + "-" + ge[e[t + 6]] + ge[e[t + 7]] + "-" + ge[e[t + 8]] + ge[e[t + 9]] + "-" + ge[e[t + 10]] + ge[e[t + 11]] + ge[e[t + 12]] + ge[e[t + 13]] + ge[e[t + 14]] + ge[e[t + 15]]).toLowerCase();
}
var wa, tv = new Uint8Array(16);
function av() {
  if (!wa && (wa = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !wa))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return wa(tv);
}
var nv = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Lo = {
  randomUUID: nv
};
function ov(e, t, a) {
  if (Lo.randomUUID && !t && !e)
    return Lo.randomUUID();
  e = e || {};
  var n = e.random || (e.rng || av)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, ev(n);
}
const lv = { class: "flex items-center space-x-2" }, sv = ["src"], rv = ["accept"], gh = /* @__PURE__ */ b({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = "file-upload-" + ov(), l = B(() => i.value ? URL.createObjectURL(i.value) : null), r = a.currentImage ? a.currentImage : a.defaultImage, i = B({
      get: () => a.modelValue,
      set: (u) => n("update:modelValue", u)
    }), d = (u) => {
      i.value = u.target.files[0];
    }, c = () => document.getElementById(o).click();
    return (u, p) => (m(), y(yt, U(K(u.$props)), {
      default: f(() => [
        H("div", lv, [
          _(u.$slots, "image", {
            newImage: l.value,
            curImage: s(r)
          }, () => [
            H("img", {
              src: l.value ?? s(r),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-700"
            }, null, 8, sv)
          ]),
          H("input", {
            id: o,
            accept: u.accept,
            hidden: "",
            type: "file",
            onInput: d
          }, null, 40, rv),
          P(tl, { onClick: c }, {
            default: f(() => [
              Y(" Upload ")
            ]),
            _: 1
          })
        ])
      ]),
      _: 3
    }, 16));
  }
}), iv = /* @__PURE__ */ b({
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
    return (l, r) => (m(), y(s(Fp), U(K(s(o))), {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dv = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(df), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uv = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(zp), E(s(n), {
      class: s(z)(
        "flex h-10 w-full items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300 [&>span]:line-clamp-1",
        t.class
      )
    }), {
      default: f(() => [
        _(o.$slots, "default"),
        P(s(uf), { "as-child": "" }, {
          default: f(() => [
            P(s(al), { class: "size-4 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cv = /* @__PURE__ */ b({
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
    return (r, i) => (m(), y(s(Wp), null, {
      default: f(() => [
        P(s(Zp), E({ ...s(l), ...r.$attrs }, {
          class: s(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            r.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: f(() => [
            P(s(mv)),
            P(s(lf), {
              class: se(
                s(z)(
                  "p-1",
                  r.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: f(() => [
                _(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            P(s(vv))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), yh = /* @__PURE__ */ b({
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
    return (n, o) => (m(), y(s(nf), E({
      class: s(z)("w-full p-1", t.class)
    }, a.value), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pv = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, fv = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(Qp), E(s(n), {
      class: s(z)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
        t.class
      )
    }), {
      default: f(() => [
        H("span", pv, [
          P(s(ef), null, {
            default: f(() => [
              P(s(Ma), { class: "size-4 text-primary-700 dark:text-primary-400" })
            ]),
            _: 1
          })
        ]),
        P(s(is), null, {
          default: f(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bh = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(is), U(K(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wh = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), y(s(of), {
      class: se(s(z)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _h = /* @__PURE__ */ b({
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
    return (n, o) => (m(), y(s(Jp), E(a.value, {
      class: s(z)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), mv = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(sf), E(s(n), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          P(s(Ir), { class: "size-4 text-primary-900" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vv = /* @__PURE__ */ b({
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
    return (o, l) => (m(), y(s(rf), E(s(n), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          P(s(al), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hv = { class: "w-fit" }, xh = /* @__PURE__ */ b({
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
    }), (l, r) => (m(), y(yt, U(K(l.$props)), {
      default: f(() => [
        H("div", hv, [
          P(s(iv), {
            modelValue: o.value,
            "onUpdate:modelValue": r[0] || (r[0] = (i) => o.value = i)
          }, {
            default: f(() => [
              P(s(uv), null, {
                default: f(() => [
                  P(s(dv), null, {
                    default: f(() => [
                      Y(X(o.value ?? l.placeholder), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              P(s(cv), null, {
                default: f(() => [
                  (m(!0), R(Q, null, ve(l.options, (i) => (m(), y(s(fv), { value: i }, {
                    default: f(() => [
                      l.$slots.options ? _(l.$slots, "options", {
                        key: 0,
                        item: i
                      }) : (m(), R(Q, { key: 1 }, [
                        Y(X(i), 1)
                      ], 64))
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 256))
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 8, ["modelValue"])
        ])
      ]),
      _: 3
    }, 16));
  }
}), gv = ["disabled", "placeholder", "required", "type"], $h = /* @__PURE__ */ b({
  __name: "Text",
  props: /* @__PURE__ */ un({
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
    const t = qo(e, "modelValue");
    return (a, n) => (m(), y(yt, U(K(a.$props)), {
      default: f(() => [
        Tt(H("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: se(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:ring-offset-slate-950 dark:placeholder:text-slate-500", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
          }])
        }, null, 10, gv), [
          [Vs, t.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), yv = ["placeholder"], Ch = /* @__PURE__ */ b({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = xm(e, "modelValue", t, {
      passive: !0
    });
    return (l, r) => (m(), y(yt, U(K(l.$props)), {
      default: f(() => [
        Tt(H("textarea", {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => Qt(o) ? o.value = i : null),
          placeholder: l.placeholder,
          class: se(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:ring-offset-slate-950 dark:placeholder:text-slate-500", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !l.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": l.error
          }])
        }, null, 10, yv), [
          [Fs, s(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), bv = {}, wv = { class: "p-6" };
function _v(e, t) {
  return m(), R("div", wv, [
    _(e.$slots, "default")
  ]);
}
const kh = /* @__PURE__ */ Ea(bv, [["render", _v]]), xv = {
  "aria-live": "assertive",
  class: "pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
}, $v = { class: "flex w-full flex-col items-center space-y-4 sm:items-end" }, Cv = {
  key: 0,
  class: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
}, kv = { class: "p-4" }, Bv = { class: "flex items-start" }, Pv = { class: "flex-shrink-0" }, Ov = { class: "ml-3 w-0 flex-1 pt-0.5" }, Dv = { class: "text-sm font-medium text-slate-900" }, Sv = { class: "mt-3 flex space-x-7" }, Ev = ["onClick"], Bh = /* @__PURE__ */ b({
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
          icon: Bs,
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
          icon: Vo,
          heading: "Error",
          messages: Object.values(t.errors),
          iconClasses: "text-red-500"
        }) : a.value.push({
          icon: Vo,
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
    ), (l, r) => (m(), R("div", xv, [
      H("div", $v, [
        (m(!0), R(Q, null, ve(s(a), (i, d) => (m(), y(Ls, {
          key: d,
          "enter-active-class": "transform ease-out duration-300 transition",
          "enter-from-class": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
          "enter-to-class": "translate-y-0 opacity-100 sm:translate-x-0",
          "leave-active-class": "transition ease-in duration-100",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: f(() => [
            i.messages.length > 0 ? (m(), R("div", Cv, [
              H("div", kv, [
                H("div", Bv, [
                  H("div", Pv, [
                    (m(), y(Me(i.icon), {
                      class: se(["size-6", i.iconClasses]),
                      "aria-hidden": "true"
                    }, null, 8, ["class"]))
                  ]),
                  H("div", Ov, [
                    H("p", Dv, X(i.heading), 1),
                    (m(!0), R(Q, null, ve(i.messages, (c, u) => (m(), R("p", {
                      key: u,
                      class: "mt-1 text-sm text-slate-500"
                    }, X(c), 1))), 128)),
                    H("div", Sv, [
                      H("button", {
                        onClick: (c) => o(d),
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
  ks as BaseDropdownMenuItem,
  ct as Button,
  jf as CalendarCell,
  Uf as CalendarCellTrigger,
  Hf as CalendarGrid,
  Kf as CalendarGridBody,
  Gf as CalendarGridHead,
  To as CalendarGridRow,
  qf as CalendarHeadCell,
  Yf as CalendarHeader,
  Zf as CalendarHeading,
  Jf as CalendarNextButton,
  Xf as CalendarPrevButton,
  Wv as Checkbox,
  Zv as CollapsibleTableRow,
  qv as Combobox,
  ps as Command,
  Hv as CommandDialog,
  If as CommandEmpty,
  Rf as CommandGroup,
  Ff as CommandInput,
  Lf as CommandItem,
  zf as CommandList,
  Kv as CommandSeparator,
  Gv as CommandShortcut,
  kh as Container,
  Tv as DangerButton,
  Yv as DarkModeToggle,
  Qv as Datatable,
  hh as DatePicker,
  fs as Dialog,
  jv as DialogClose,
  ms as DialogContent,
  Ef as DialogDescription,
  Tf as DialogFooter,
  Df as DialogHeader,
  Uv as DialogScrollContent,
  Sf as DialogTitle,
  Of as DialogTrigger,
  Fm as Dropdown,
  Mm as DropdownMenu,
  nh as DropdownMenuCheckboxItem,
  Im as DropdownMenuContent,
  eh as DropdownMenuGroup,
  ah as DropdownMenuItem,
  rh as DropdownMenuLabel,
  Am as DropdownMenuLink,
  op as DropdownMenuPortal,
  th as DropdownMenuRadioGroup,
  oh as DropdownMenuRadioItem,
  sh as DropdownMenuSeparator,
  lh as DropdownMenuShortcut,
  ih as DropdownMenuSub,
  uh as DropdownMenuSubContent,
  dh as DropdownMenuSubTrigger,
  Tm as DropdownMenuTrigger,
  _r as Error,
  Iv as Form,
  Or as FormElement,
  Rv as FormGrid,
  gh as ImageUpload,
  ro as Label,
  ch as Modal,
  Bh as Notifications,
  ph as Pagination,
  Km as PaginationDetails,
  Nm as PaginationEllipsis,
  zm as PaginationFirst,
  Wm as PaginationLast,
  $p as PaginationList,
  zv as PaginationListItem,
  jm as PaginationNext,
  Um as PaginationPrev,
  gp as PaginationRoot,
  vs as Popover,
  gs as PopoverContent,
  hs as PopoverTrigger,
  Av as PrimaryButton,
  tl as SecondaryButton,
  xh as Select,
  cv as SelectContent,
  yh as SelectGroup,
  fv as SelectItem,
  bh as SelectItemText,
  wh as SelectLabel,
  iv as SelectRoot,
  vv as SelectScrollDownButton,
  mv as SelectScrollUpButton,
  _h as SelectSeparator,
  uv as SelectTrigger,
  dv as SelectValue,
  Bm as Table,
  Pm as TableBody,
  Sm as TableCaption,
  Oa as TableCell,
  Xv as TableEmpty,
  Jv as TableFooter,
  Om as TableHead,
  Dm as TableHeader,
  Xt as TableRow,
  xn as TableRowAction,
  vh as Tabs,
  mh as TabsContent,
  Ym as TabsItem,
  Fo as TabsList,
  qm as TabsRoot,
  fh as TabsTrigger,
  $h as Text,
  Ch as TextArea,
  Cm as Toggle
};
