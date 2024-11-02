import * as Wo from "vue";
import { openBlock as v, createElementBlock as K, renderSlot as x, defineComponent as w, normalizeClass as re, unref as l, computed as $, ref as T, shallowRef as Zn, watch as ee, getCurrentScope as Jn, onScopeDispose as Qn, shallowReadonly as It, getCurrentInstance as je, toRef as Cl, camelize as $l, Comment as kl, mergeProps as S, cloneVNode as Dr, h as We, toRefs as de, onMounted as ie, createBlock as y, withCtx as f, normalizeProps as U, guardReactiveProps as H, reactive as Bl, createVNode as P, createCommentVNode as Q, createElementVNode as ue, toDisplayString as X, createTextVNode as Y, withKeys as Ke, withModifiers as be, Fragment as J, watchEffect as ge, markRaw as Pr, nextTick as ae, watchSyncEffect as Or, withDirectives as Xt, vShow as eo, isRef as Ca, resolveDynamicComponent as Se, renderList as he, Teleport as an, onBeforeUnmount as to, useSlots as Dl, onBeforeMount as Er, normalizeStyle as Zt, toHandlers as Sr, effectScope as Pl, readonly as $a, toHandlerKey as Tr, onUnmounted as bt, vModelSelect as Mr, toRaw as Ar, inject as Ol, provide as El, customRef as Sl, onBeforeUpdate as Ir, onUpdated as Rr, mergeDefaults as Tl, watchPostEffect as Vr, mergeModels as In, useModel as Ml, vModelDynamic as Fr, vModelText as Lr, isVNode as Nr } from "vue";
const ly = {
  safelist: ["dark"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      }
    }
  }
}, ka = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, o] of t)
    a[n] = o;
  return a;
}, zr = {}, Wr = { class: "p-6" };
function Kr(e, t) {
  return v(), K("div", Wr, [
    x(e.$slots, "default")
  ]);
}
const sy = /* @__PURE__ */ ka(zr, [["render", Kr]]);
function Al(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (a = Al(e[t])) && (n && (n += " "), n += a);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Ur() {
  for (var e, t, a = 0, n = ""; a < arguments.length; ) (e = arguments[a++]) && (t = Al(e)) && (n && (n += " "), n += t);
  return n;
}
const Ko = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Uo = Ur, ao = (e, t) => (a) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Uo(e, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: s } = t, r = Object.keys(o).map((c) => {
    const u = a == null ? void 0 : a[c], p = s == null ? void 0 : s[c];
    if (u === null) return null;
    const g = Ko(u) || Ko(p);
    return o[c][g];
  }), i = a && Object.entries(a).reduce((c, u) => {
    let [p, g] = u;
    return g === void 0 || (c[p] = g), c;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, u) => {
    let { class: p, className: g, ...m } = u;
    return Object.entries(m).every((b) => {
      let [h, _] = b;
      return Array.isArray(_) ? _.includes({
        ...s,
        ...i
      }[h]) : {
        ...s,
        ...i
      }[h] === _;
    }) ? [
      ...c,
      p,
      g
    ] : c;
  }, []);
  return Uo(e, r, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, no = "-", Hr = (e) => {
  const t = Gr(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (r) => {
      const i = r.split(no);
      return i[0] === "" && i.length !== 1 && i.shift(), Il(i, t) || jr(r);
    },
    getConflictingClassGroupIds: (r, i) => {
      const d = a[r] || [];
      return i && n[r] ? [...d, ...n[r]] : d;
    }
  };
}, Il = (e, t) => {
  var r;
  if (e.length === 0)
    return t.classGroupId;
  const a = e[0], n = t.nextPart.get(a), o = n ? Il(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(no);
  return (r = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : r.classGroupId;
}, Ho = /^\[(.+)\]$/, jr = (e) => {
  if (Ho.test(e)) {
    const t = Ho.exec(e)[1], a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Gr = (e) => {
  const {
    theme: t,
    prefix: a
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Yr(Object.entries(e.classGroups), a).forEach(([s, r]) => {
    Rn(r, n, s, t);
  }), n;
}, Rn = (e, t, a, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : jo(t, o);
      s.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (qr(o)) {
        Rn(o(n), t, a, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([s, r]) => {
      Rn(r, jo(t, s), a, n);
    });
  });
}, jo = (e, t) => {
  let a = e;
  return t.split(no).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, qr = (e) => e.isThemeGetter, Yr = (e, t) => t ? e.map(([a, n]) => {
  const o = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([r, i]) => [t + r, i])) : s);
  return [a, o];
}) : e, Xr = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (s, r) => {
    a.set(s, r), t++, t > e && (t = 0, n = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let r = a.get(s);
      if (r !== void 0)
        return r;
      if ((r = n.get(s)) !== void 0)
        return o(s, r), r;
    },
    set(s, r) {
      a.has(s) ? a.set(s, r) : o(s, r);
    }
  };
}, Rl = "!", Zr = (e) => {
  const {
    separator: t,
    experimentalParseClassName: a
  } = e, n = t.length === 1, o = t[0], s = t.length, r = (i) => {
    const d = [];
    let c = 0, u = 0, p;
    for (let _ = 0; _ < i.length; _++) {
      let C = i[_];
      if (c === 0) {
        if (C === o && (n || i.slice(_, _ + s) === t)) {
          d.push(i.slice(u, _)), u = _ + s;
          continue;
        }
        if (C === "/") {
          p = _;
          continue;
        }
      }
      C === "[" ? c++ : C === "]" && c--;
    }
    const g = d.length === 0 ? i : i.substring(u), m = g.startsWith(Rl), b = m ? g.substring(1) : g, h = p && p > u ? p - u : void 0;
    return {
      modifiers: d,
      hasImportantModifier: m,
      baseClassName: b,
      maybePostfixModifierPosition: h
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: r
  }) : r;
}, Jr = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let a = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...a.sort(), n), a = []) : a.push(n);
  }), t.push(...a.sort()), t;
}, Qr = (e) => ({
  cache: Xr(e.cacheSize),
  parseClassName: Zr(e),
  ...Hr(e)
}), ei = /\s+/, ti = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, s = [], r = e.trim().split(ei);
  let i = "";
  for (let d = r.length - 1; d >= 0; d -= 1) {
    const c = r[d], {
      modifiers: u,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: m
    } = a(c);
    let b = !!m, h = n(b ? g.substring(0, m) : g);
    if (!h) {
      if (!b) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (h = n(g), !h) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      b = !1;
    }
    const _ = Jr(u).join(":"), C = p ? _ + Rl : _, D = C + h;
    if (s.includes(D))
      continue;
    s.push(D);
    const k = o(h, b);
    for (let O = 0; O < k.length; ++O) {
      const E = k[O];
      s.push(C + E);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function ai() {
  let e = 0, t, a, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (a = Vl(t)) && (n && (n += " "), n += a);
  return n;
}
const Vl = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Vl(e[n])) && (a && (a += " "), a += t);
  return a;
};
function ni(e, ...t) {
  let a, n, o, s = r;
  function r(d) {
    const c = t.reduce((u, p) => p(u), e());
    return a = Qr(c), n = a.cache.get, o = a.cache.set, s = i, i(d);
  }
  function i(d) {
    const c = n(d);
    if (c)
      return c;
    const u = ti(d, a);
    return o(d, u), u;
  }
  return function() {
    return s(ai.apply(null, arguments));
  };
}
const ve = (e) => {
  const t = (a) => a[e] || [];
  return t.isThemeGetter = !0, t;
}, Fl = /^\[(?:([a-z-]+):)?(.+)\]$/i, oi = /^\d+\/\d+$/, li = /* @__PURE__ */ new Set(["px", "full", "screen"]), si = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ri = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ii = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, di = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ui = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Je = (e) => Ft(e) || li.has(e) || oi.test(e), ct = (e) => Jt(e, "length", yi), Ft = (e) => !!e && !Number.isNaN(Number(e)), bn = (e) => Jt(e, "number", Ft), pa = (e) => !!e && Number.isInteger(Number(e)), ci = (e) => e.endsWith("%") && Ft(e.slice(0, -1)), Z = (e) => Fl.test(e), pt = (e) => si.test(e), pi = /* @__PURE__ */ new Set(["length", "size", "percentage"]), fi = (e) => Jt(e, pi, Ll), vi = (e) => Jt(e, "position", Ll), mi = /* @__PURE__ */ new Set(["image", "url"]), hi = (e) => Jt(e, mi, wi), gi = (e) => Jt(e, "", bi), fa = () => !0, Jt = (e, t, a) => {
  const n = Fl.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : a(n[2]) : !1;
}, yi = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ri.test(e) && !ii.test(e)
), Ll = () => !1, bi = (e) => di.test(e), wi = (e) => ui.test(e), _i = () => {
  const e = ve("colors"), t = ve("spacing"), a = ve("blur"), n = ve("brightness"), o = ve("borderColor"), s = ve("borderRadius"), r = ve("borderSpacing"), i = ve("borderWidth"), d = ve("contrast"), c = ve("grayscale"), u = ve("hueRotate"), p = ve("invert"), g = ve("gap"), m = ve("gradientColorStops"), b = ve("gradientColorStopPositions"), h = ve("inset"), _ = ve("margin"), C = ve("opacity"), D = ve("padding"), k = ve("saturate"), O = ve("scale"), E = ve("sepia"), I = ve("skew"), M = ve("space"), L = ve("translate"), V = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", Z, t], R = () => [Z, t], G = () => ["", Je, ct], j = () => ["auto", Ft, Z], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], q = () => ["solid", "dashed", "dotted", "double", "none"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ce = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], me = () => ["", "0", Z], ke = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ye = () => [Ft, Z];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [fa],
      spacing: [Je, ct],
      blur: ["none", "", pt, Z],
      brightness: ye(),
      borderColor: [e],
      borderRadius: ["none", "", "full", pt, Z],
      borderSpacing: R(),
      borderWidth: G(),
      contrast: ye(),
      grayscale: me(),
      hueRotate: ye(),
      invert: me(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [ci, ct],
      inset: A(),
      margin: A(),
      opacity: ye(),
      padding: R(),
      saturate: ye(),
      scale: ye(),
      sepia: me(),
      skew: ye(),
      space: R(),
      translate: R()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Z]
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
        columns: [pt]
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
        object: [...W(), Z]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: B()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": B()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": B()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: V()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": V()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": V()
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
        z: ["auto", pa, Z]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: A()
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
        flex: ["1", "auto", "initial", "none", Z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: me()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: me()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", pa, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [fa]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", pa, Z]
        }, Z]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": j()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": j()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [fa]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [pa, Z]
        }, Z]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": j()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": j()
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
        "auto-cols": ["auto", "min", "max", "fr", Z]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Z]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...ce()]
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
        content: ["normal", ...ce(), "baseline"]
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
        "place-content": [...ce(), "baseline"]
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
        m: [_]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [_]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [_]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [_]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [_]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [_]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [_]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [_]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [_]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [M]
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
        "space-y": [M]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Z, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Z, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Z, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [pt]
        }, pt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Z, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", pt, ct]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", bn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [fa]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ft, bn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Je, Z]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Z]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Z]
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
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Je, ct]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Je, Z]
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
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Z]
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
        content: ["none", Z]
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
        bg: [...W(), vi]
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
        bg: ["auto", "cover", "contain", fi]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, hi]
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
        from: [b]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [b]
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
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...q(), "hidden"]
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
        divide: q()
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
        outline: ["", ...q()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Je, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Je, ct]
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
        "ring-opacity": [C]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Je, ct]
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
        shadow: ["", "inner", "none", pt, gi]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [fa]
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
        "drop-shadow": ["", "none", pt, Z]
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
        saturate: [k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
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
        "backdrop-opacity": [C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Z]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ye()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ye()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Z]
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
        rotate: [pa, Z]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [L]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [L]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [I]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [I]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Z]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Z]
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
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
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
        "will-change": ["auto", "scroll", "contents", "transform", Z]
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
        stroke: [Je, ct, bn]
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
}, xi = /* @__PURE__ */ ni(_i);
function z(...e) {
  return xi(e);
}
const ry = /* @__PURE__ */ w({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("div", {
      class: re(l(z)(l(Ci)({ variant: a.variant }), t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), Ci = ao(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-slate-800 text-slate-50",
        primary: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function wn(e, t) {
  return e - t * Math.floor(e / t);
}
const Nl = 1721426;
function Aa(e, t, a, n) {
  t = oo(e, t);
  let o = t - 1, s = -2;
  return a <= 2 ? s = 0 : ja(t) && (s = -1), Nl - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + s + n);
}
function ja(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function oo(e, t) {
  return e === "BC" ? 1 - t : t;
}
function $i(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const ki = {
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
class Nt {
  fromJulianDay(t) {
    let a = t, n = a - Nl, o = Math.floor(n / 146097), s = wn(n, 146097), r = Math.floor(s / 36524), i = wn(s, 36524), d = Math.floor(i / 1461), c = wn(i, 1461), u = Math.floor(c / 365), p = o * 400 + r * 100 + d * 4 + u + (r !== 4 && u !== 4 ? 1 : 0), [g, m] = $i(p), b = a - Aa(g, m, 1, 1), h = 2;
    a < Aa(g, m, 3, 1) ? h = 0 : ja(m) && (h = 1);
    let _ = Math.floor(((b + h) * 12 + 373) / 367), C = a - Aa(g, m, _, 1) + 1;
    return new Kt(g, m, _, C);
  }
  toJulianDay(t) {
    return Aa(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return ki[ja(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return ja(t.year) ? 366 : 365;
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
const Bi = {
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
function xe(e, t) {
  return t = Ee(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function zl(e, t) {
  return t = Ee(t, e.calendar), e = ga(e), t = ga(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function ze(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Go(e, t) {
  return e = ga(e), t = ga(t), e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month;
}
function Wl(e, t) {
  return xe(e, Ul(t));
}
function Kl(e, t) {
  let a = e.calendar.toJulianDay(e), n = Math.ceil(a + 1 - Ei(t)) % 7;
  return n < 0 && (n += 7), n;
}
function Di(e) {
  return at(Date.now(), e);
}
function Ul(e) {
  return Mi(Di(e));
}
function Hl(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function Pi(e, t) {
  return qo(e) - qo(t);
}
function qo(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let _n = null;
function Bt() {
  return _n == null && (_n = new Intl.DateTimeFormat().resolvedOptions().timeZone), _n;
}
function ga(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function Yo(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const Xo = /* @__PURE__ */ new Map();
function Oi(e) {
  if (Intl.Locale) {
    let a = Xo.get(e);
    return a || (a = new Intl.Locale(e).maximize().region, a && Xo.set(e, a)), a;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function Ei(e) {
  let t = Oi(e);
  return t && Bi[t] || 0;
}
function zt(e) {
  e = Ee(e, new Nt());
  let t = oo(e.era, e.year);
  return jl(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function jl(e, t, a, n, o, s, r) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, s, r), i.setUTCFullYear(e, t - 1, a), i.getTime();
}
function Vn(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === Bt()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: s, minute: r, second: i } = Gl(e, t);
  return jl(a, n, o, s, r, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const Zo = /* @__PURE__ */ new Map();
function Gl(e, t) {
  let a = Zo.get(t);
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
  }), Zo.set(t, a));
  let n = a.formatToParts(new Date(e)), o = {};
  for (let s of n) s.type !== "literal" && (o[s.type] = s.value);
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
const Jo = 864e5;
function Si(e, t, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((s) => Ti(e, t, s));
}
function Ti(e, t, a) {
  let n = Gl(a, t);
  return e.year === n.year && e.month === n.month && e.day === n.day && e.hour === n.hour && e.minute === n.minute && e.second === n.second;
}
function tt(e, t, a = "compatible") {
  let n = Wt(e);
  if (t === "UTC") return zt(n);
  if (t === Bt() && a === "compatible") {
    n = Ee(n, new Nt());
    let d = /* @__PURE__ */ new Date(), c = oo(n.era, n.year);
    return d.setFullYear(c, n.month - 1, n.day), d.setHours(n.hour, n.minute, n.second, n.millisecond), d.getTime();
  }
  let o = zt(n), s = Vn(o - Jo, t), r = Vn(o + Jo, t), i = Si(n, t, o - s, o - r);
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
      return Math.min(o - s, o - r);
    case "compatible":
    case "later":
      return Math.max(o - s, o - r);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function ql(e, t, a = "compatible") {
  return new Date(tt(e, t, a));
}
function at(e, t) {
  let a = Vn(e, t), n = new Date(e + a), o = n.getUTCFullYear(), s = n.getUTCMonth() + 1, r = n.getUTCDate(), i = n.getUTCHours(), d = n.getUTCMinutes(), c = n.getUTCSeconds(), u = n.getUTCMilliseconds();
  return new Ht(o, s, r, t, a, i, d, c, u);
}
function Mi(e) {
  return new Kt(e.calendar, e.era, e.year, e.month, e.day);
}
function Wt(e, t) {
  let a = 0, n = 0, o = 0, s = 0;
  if ("timeZone" in e) ({ hour: a, minute: n, second: o, millisecond: s } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: a, minute: n, second: o, millisecond: s } = t), new Ut(e.calendar, e.era, e.year, e.month, e.day, a, n, o, s);
}
function Ee(e, t) {
  if (e.calendar.identifier === t.identifier) return e;
  let a = t.fromJulianDay(e.calendar.toJulianDay(e)), n = e.copy();
  return n.calendar = t, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, $t(n), n;
}
function Ai(e, t, a) {
  if (e instanceof Ht)
    return e.timeZone === t ? e : Ri(e, t);
  let n = tt(e, t, a);
  return at(n, t);
}
function Ii(e) {
  let t = zt(e) - e.offset;
  return new Date(t);
}
function Ri(e, t) {
  let a = zt(e) - e.offset;
  return Ee(at(a, t), e.calendar);
}
const va = 36e5;
function nn(e, t) {
  let a = e.copy(), n = "hour" in a ? Ni(a, t) : 0;
  Fn(a, t.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e), a.month += t.months || 0, Ln(a), Yl(a), a.day += (t.weeks || 0) * 7, a.day += t.days || 0, a.day += n, Vi(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
  let o = a.calendar.getYearsInEra(a);
  if (a.year > o) {
    var s, r;
    let d = (s = (r = a.calendar).isInverseEra) === null || s === void 0 ? void 0 : s.call(r, a);
    a.year = o, a.month = d ? 1 : a.calendar.getMonthsInYear(a), a.day = d ? 1 : a.calendar.getDaysInMonth(a);
  }
  a.month < 1 && (a.month = 1, a.day = 1);
  let i = a.calendar.getMonthsInYear(a);
  return a.month > i && (a.month = i, a.day = a.calendar.getDaysInMonth(a)), a.day = Math.max(1, Math.min(a.calendar.getDaysInMonth(a), a.day)), a;
}
function Fn(e, t) {
  var a, n;
  !((a = (n = e.calendar).isInverseEra) === null || a === void 0) && a.call(n, e) && (t = -t), e.year += t;
}
function Ln(e) {
  for (; e.month < 1; )
    Fn(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, Fn(e, 1);
}
function Vi(e) {
  for (; e.day < 1; )
    e.month--, Ln(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, Ln(e);
}
function Yl(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function $t(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Yl(e);
}
function Xl(e) {
  let t = {};
  for (let a in e) typeof e[a] == "number" && (t[a] = -e[a]);
  return t;
}
function Zl(e, t) {
  return nn(e, Xl(t));
}
function lo(e, t) {
  let a = e.copy();
  return t.era != null && (a.era = t.era), t.year != null && (a.year = t.year), t.month != null && (a.month = t.month), t.day != null && (a.day = t.day), $t(a), a;
}
function qa(e, t) {
  let a = e.copy();
  return t.hour != null && (a.hour = t.hour), t.minute != null && (a.minute = t.minute), t.second != null && (a.second = t.second), t.millisecond != null && (a.millisecond = t.millisecond), Li(a), a;
}
function Fi(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Ia(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Ia(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Ia(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = Ia(e.hour, 24), t;
}
function Li(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Ia(e, t) {
  let a = e % t;
  return a < 0 && (a += t), a;
}
function Ni(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, Fi(e);
}
function so(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "era": {
      let i = e.calendar.getEras(), d = i.indexOf(e.era);
      if (d < 0) throw new Error("Invalid era: " + e.era);
      d = nt(d, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[d], $t(o);
      break;
    }
    case "year":
      var s, r;
      !((s = (r = o.calendar).isInverseEra) === null || s === void 0) && s.call(r, o) && (a = -a), o.year = nt(e.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, e);
      break;
    case "month":
      o.month = nt(e.month, a, 1, e.calendar.getMonthsInYear(e), n == null ? void 0 : n.round);
      break;
    case "day":
      o.day = nt(e.day, a, 1, e.calendar.getDaysInMonth(e), n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(o), $t(o), o;
}
function Jl(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "hour": {
      let s = e.hour, r = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let d = s >= 12;
        r = d ? 12 : 0, i = d ? 23 : 11;
      }
      o.hour = nt(s, a, r, i, n == null ? void 0 : n.round);
      break;
    }
    case "minute":
      o.minute = nt(e.minute, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "second":
      o.second = nt(e.second, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "millisecond":
      o.millisecond = nt(e.millisecond, a, 0, 999, n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return o;
}
function nt(e, t, a, n, o = !1) {
  if (o) {
    e += Math.sign(t), e < a && (e = n);
    let s = Math.abs(t);
    t > 0 ? e = Math.ceil(e / s) * s : e = Math.floor(e / s) * s, e > n && (e = a);
  } else
    e += t, e < a ? e = n - (a - e - 1) : e > n && (e = a + (e - n - 1));
  return e;
}
function Ql(e, t) {
  let a;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let o = nn(Wt(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    a = tt(o, e.timeZone);
  } else
    a = zt(e) - e.offset;
  a += t.milliseconds || 0, a += (t.seconds || 0) * 1e3, a += (t.minutes || 0) * 6e4, a += (t.hours || 0) * 36e5;
  let n = at(a, e.timeZone);
  return Ee(n, e.calendar);
}
function zi(e, t) {
  return Ql(e, Xl(t));
}
function Wi(e, t, a, n) {
  switch (t) {
    case "hour": {
      let o = 0, s = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let b = e.hour >= 12;
        o = b ? 12 : 0, s = b ? 23 : 11;
      }
      let r = Wt(e), i = Ee(qa(r, {
        hour: o
      }), new Nt()), d = [
        tt(i, e.timeZone, "earlier"),
        tt(i, e.timeZone, "later")
      ].filter((b) => at(b, e.timeZone).day === i.day)[0], c = Ee(qa(r, {
        hour: s
      }), new Nt()), u = [
        tt(c, e.timeZone, "earlier"),
        tt(c, e.timeZone, "later")
      ].filter((b) => at(b, e.timeZone).day === c.day).pop(), p = zt(e) - e.offset, g = Math.floor(p / va), m = p % va;
      return p = nt(g, a, Math.floor(d / va), Math.floor(u / va), n == null ? void 0 : n.round) * va + m, Ee(at(p, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return Jl(e, t, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = so(Wt(e), t, a, n), s = tt(o, e.timeZone);
      return Ee(at(s, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function Ki(e, t, a) {
  let n = Wt(e), o = qa(lo(n, t), t);
  if (o.compare(n) === 0) return e;
  let s = tt(o, e.timeZone, a);
  return Ee(at(s, e.timeZone), e.calendar);
}
function Ui(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function es(e) {
  let t = Ee(e, new Nt());
  return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function ts(e) {
  return `${es(e)}T${Ui(e)}`;
}
function Hi(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let a = Math.floor(e / 36e5), n = e % 36e5 / 6e4;
  return `${t}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function ji(e) {
  return `${ts(e)}${Hi(e.offset)}[${e.timeZone}]`;
}
function Gi(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function ro(e, t, a) {
  Gi(e, t), t.set(e, a);
}
function io(e) {
  let t = typeof e[0] == "object" ? e.shift() : new Nt(), a;
  if (typeof e[0] == "string") a = e.shift();
  else {
    let r = t.getEras();
    a = r[r.length - 1];
  }
  let n = e.shift(), o = e.shift(), s = e.shift();
  return [
    t,
    a,
    n,
    o,
    s
  ];
}
var qi = /* @__PURE__ */ new WeakMap();
class Kt {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Kt(this.calendar, this.era, this.year, this.month, this.day) : new Kt(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return nn(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return Zl(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return lo(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return so(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return ql(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return es(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return Hl(this, t);
  }
  constructor(...t) {
    ro(this, qi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = io(t);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, $t(this);
  }
}
var Yi = /* @__PURE__ */ new WeakMap();
class Ut {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ut(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new Ut(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return nn(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return Zl(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return lo(qa(this, t), t);
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
        return so(this, t, a, n);
      default:
        return Jl(this, t, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, a) {
    return ql(this, t, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return ts(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let a = Hl(this, t);
    return a === 0 ? Pi(this, Wt(t)) : a;
  }
  constructor(...t) {
    ro(this, Yi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = io(t);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, $t(this);
  }
}
var Xi = /* @__PURE__ */ new WeakMap();
class Ht {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ht(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new Ht(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return Ql(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return zi(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, a) {
    return Ki(this, t, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return Wi(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return Ii(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return ji(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - Ai(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    ro(this, Xi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = io(t), i = t.shift(), d = t.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.timeZone = i, this.offset = d, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, $t(this);
  }
}
let xn = /* @__PURE__ */ new Map();
class Qe {
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
      ...n.map((s) => ({
        ...s,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...o.map((s) => ({
        ...s,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let t = this.formatter.resolvedOptions();
    return Qi() && (this.resolvedHourCycle || (this.resolvedHourCycle = ed(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, a = {}) {
    this.formatter = as(t, a), this.options = a;
  }
}
const Zi = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function as(e, t = {}) {
  if (typeof t.hour12 == "boolean" && Ji()) {
    t = {
      ...t
    };
    let o = Zi[String(t.hour12)][e.split("-")[0]], s = t.hour12 ? "h12" : "h23";
    t.hourCycle = o ?? s, delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((o, s) => o[0] < s[0] ? -1 : 1).join() : "");
  if (xn.has(a)) return xn.get(a);
  let n = new Intl.DateTimeFormat(e, t);
  return xn.set(a, n), n;
}
let Cn = null;
function Ji() {
  return Cn == null && (Cn = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Cn;
}
let $n = null;
function Qi() {
  return $n == null && ($n = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), $n;
}
function ed(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = as(e, {
    ...t,
    timeZone: void 0
    // use local timezone
  }), n = parseInt(a.formatToParts(new Date(2020, 2, 3, 0)).find((s) => s.type === "hour").value, 10), o = parseInt(a.formatToParts(new Date(2020, 2, 3, 23)).find((s) => s.type === "hour").value, 10);
  if (n === 0 && o === 23) return "h23";
  if (n === 24 && o === 23) return "h24";
  if (n === 0 && o === 11) return "h11";
  if (n === 12 && o === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
function td(e, t) {
  const a = [];
  for (let n = 0; n < e.length; n += t)
    a.push(e.slice(n, n + t));
  return a;
}
function Ve(e, t = Bt()) {
  return uo(e) ? e.toDate() : e.toDate(t);
}
function ad(e) {
  return e instanceof Ut;
}
function uo(e) {
  return e instanceof Ht;
}
function nd(e) {
  return ad(e) || uo(e);
}
function ya(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), a = e.getMonth() + 1;
    return new Date(t, a, 0).getDate();
  } else
    return e.set({ day: 100 }).day;
}
function mt(e, t) {
  return e.compare(t) < 0;
}
function ma(e, t) {
  return e.compare(t) > 0;
}
function od(e, t) {
  return e.compare(t) <= 0;
}
function ld(e, t) {
  return e.compare(t) >= 0;
}
function sd(e, t, a) {
  return ld(e, t) && od(e, a);
}
function rd(e, t, a) {
  return ma(e, t) && mt(e, a);
}
function id(e, t, a) {
  const n = Kl(e, a);
  return t > n ? e.subtract({ days: n + 7 - t }) : t === n ? e : e.subtract({ days: n - t });
}
function dd(e, t, a) {
  const n = Kl(e, a), o = t === 0 ? 6 : t - 1;
  return n === o ? e : n > o ? e.add({ days: 7 - n + o }) : e.add({ days: o - n });
}
function ud(e, t, a, n) {
  if (a === void 0 && n === void 0)
    return !0;
  let o = e.add({ days: 1 });
  if (n != null && n(o) || a != null && a(o))
    return !1;
  const s = t;
  for (; o.compare(s) < 0; )
    if (o = o.add({ days: 1 }), n != null && n(o) || a != null && a(o))
      return !1;
  return !0;
}
function Qo(e, t) {
  const a = [];
  let n = e.add({ days: 1 });
  const o = t;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function kn(e) {
  const { dateObj: t, weekStartsOn: a, fixedWeeks: n, locale: o } = e, s = ya(t), r = Array.from({ length: s }, (_, C) => t.set({ day: C + 1 })), i = ga(t), d = Yo(t), c = id(i, a, o), u = dd(d, a, o), p = Qo(c.subtract({ days: 1 }), i), g = Qo(d, u.add({ days: 1 })), m = p.length + r.length + g.length;
  if (n && m < 42) {
    const _ = 42 - m;
    let C = g[g.length - 1];
    C || (C = Yo(t));
    const D = Array.from({ length: _ }, (k, O) => {
      const E = O + 1;
      return C.add({ days: E });
    });
    g.push(...D);
  }
  const b = p.concat(r, g), h = td(b, 7);
  return {
    value: t,
    cells: b,
    rows: h
  };
}
function xt(e) {
  const { numberOfMonths: t, dateObj: a, ...n } = e, o = [];
  if (!t || t === 1)
    return o.push(
      kn({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    kn({
      ...n,
      dateObj: a
    })
  );
  for (let s = 1; s < t; s++) {
    const r = a.add({ months: s });
    o.push(
      kn({
        ...n,
        dateObj: r
      })
    );
  }
  return o;
}
const cd = ["top", "right", "bottom", "left"], ht = Math.min, De = Math.max, Ya = Math.round, Ra = Math.floor, Ue = (e) => ({
  x: e,
  y: e
}), pd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, fd = {
  start: "end",
  end: "start"
};
function Nn(e, t, a) {
  return De(e, ht(t, a));
}
function st(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rt(e) {
  return e.split("-")[0];
}
function Qt(e) {
  return e.split("-")[1];
}
function co(e) {
  return e === "x" ? "y" : "x";
}
function po(e) {
  return e === "y" ? "height" : "width";
}
function gt(e) {
  return ["top", "bottom"].includes(rt(e)) ? "y" : "x";
}
function fo(e) {
  return co(gt(e));
}
function vd(e, t, a) {
  a === void 0 && (a = !1);
  const n = Qt(e), o = fo(e), s = po(o);
  let r = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (r = Xa(r)), [r, Xa(r)];
}
function md(e) {
  const t = Xa(e);
  return [zn(e), t, zn(t)];
}
function zn(e) {
  return e.replace(/start|end/g, (t) => fd[t]);
}
function hd(e, t, a) {
  const n = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], r = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return a ? t ? o : n : t ? n : o;
    case "left":
    case "right":
      return t ? s : r;
    default:
      return [];
  }
}
function gd(e, t, a, n) {
  const o = Qt(e);
  let s = hd(rt(e), a === "start", n);
  return o && (s = s.map((r) => r + "-" + o), t && (s = s.concat(s.map(zn)))), s;
}
function Xa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => pd[t]);
}
function yd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ns(e) {
  return typeof e != "number" ? yd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Za(e) {
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
function el(e, t, a) {
  let {
    reference: n,
    floating: o
  } = e;
  const s = gt(t), r = fo(t), i = po(r), d = rt(t), c = s === "y", u = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, g = n[i] / 2 - o[i] / 2;
  let m;
  switch (d) {
    case "top":
      m = {
        x: u,
        y: n.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      m = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      m = {
        x: n.x - o.width,
        y: p
      };
      break;
    default:
      m = {
        x: n.x,
        y: n.y
      };
  }
  switch (Qt(t)) {
    case "start":
      m[r] -= g * (a && c ? -1 : 1);
      break;
    case "end":
      m[r] += g * (a && c ? -1 : 1);
      break;
  }
  return m;
}
const bd = async (e, t, a) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: r
  } = a, i = s.filter(Boolean), d = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let c = await r.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: p
  } = el(c, n, d), g = n, m = {}, b = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: _,
      fn: C
    } = i[h], {
      x: D,
      y: k,
      data: O,
      reset: E
    } = await C({
      x: u,
      y: p,
      initialPlacement: n,
      placement: g,
      strategy: o,
      middlewareData: m,
      rects: c,
      platform: r,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = D ?? u, p = k ?? p, m = {
      ...m,
      [_]: {
        ...m[_],
        ...O
      }
    }, E && b <= 50 && (b++, typeof E == "object" && (E.placement && (g = E.placement), E.rects && (c = E.rects === !0 ? await r.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: u,
      y: p
    } = el(c, g, d)), h = -1);
  }
  return {
    x: u,
    y: p,
    placement: g,
    strategy: o,
    middlewareData: m
  };
};
async function ba(e, t) {
  var a;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: s,
    rects: r,
    elements: i,
    strategy: d
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: m = 0
  } = st(t, e), b = ns(m), _ = i[g ? p === "floating" ? "reference" : "floating" : p], C = Za(await s.getClippingRect({
    element: (a = await (s.isElement == null ? void 0 : s.isElement(_))) == null || a ? _ : _.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: d
  })), D = p === "floating" ? {
    x: n,
    y: o,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), O = await (s.isElement == null ? void 0 : s.isElement(k)) ? await (s.getScale == null ? void 0 : s.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = Za(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: D,
    offsetParent: k,
    strategy: d
  }) : D);
  return {
    top: (C.top - E.top + b.top) / O.y,
    bottom: (E.bottom - C.bottom + b.bottom) / O.y,
    left: (C.left - E.left + b.left) / O.x,
    right: (E.right - C.right + b.right) / O.x
  };
}
const wd = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: a,
      y: n,
      placement: o,
      rects: s,
      platform: r,
      elements: i,
      middlewareData: d
    } = t, {
      element: c,
      padding: u = 0
    } = st(e, t) || {};
    if (c == null)
      return {};
    const p = ns(u), g = {
      x: a,
      y: n
    }, m = fo(o), b = po(m), h = await r.getDimensions(c), _ = m === "y", C = _ ? "top" : "left", D = _ ? "bottom" : "right", k = _ ? "clientHeight" : "clientWidth", O = s.reference[b] + s.reference[m] - g[m] - s.floating[b], E = g[m] - s.reference[m], I = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c));
    let M = I ? I[k] : 0;
    (!M || !await (r.isElement == null ? void 0 : r.isElement(I))) && (M = i.floating[k] || s.floating[b]);
    const L = O / 2 - E / 2, V = M / 2 - h[b] / 2 - 1, B = ht(p[C], V), A = ht(p[D], V), R = B, G = M - h[b] - A, j = M / 2 - h[b] / 2 + L, W = Nn(R, j, G), q = !d.arrow && Qt(o) != null && j !== W && s.reference[b] / 2 - (j < R ? B : A) - h[b] / 2 < 0, oe = q ? j < R ? j - R : j - G : 0;
    return {
      [m]: g[m] + oe,
      data: {
        [m]: W,
        centerOffset: j - W - oe,
        ...q && {
          alignmentOffset: oe
        }
      },
      reset: q
    };
  }
}), _d = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var a, n;
      const {
        placement: o,
        middlewareData: s,
        rects: r,
        initialPlacement: i,
        platform: d,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: h = !0,
        ..._
      } = st(e, t);
      if ((a = s.arrow) != null && a.alignmentOffset)
        return {};
      const C = rt(o), D = gt(i), k = rt(i) === i, O = await (d.isRTL == null ? void 0 : d.isRTL(c.floating)), E = g || (k || !h ? [Xa(i)] : md(i)), I = b !== "none";
      !g && I && E.push(...gd(i, h, b, O));
      const M = [i, ...E], L = await ba(t, _), V = [];
      let B = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (u && V.push(L[C]), p) {
        const j = vd(o, r, O);
        V.push(L[j[0]], L[j[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: V
      }], !V.every((j) => j <= 0)) {
        var A, R;
        const j = (((A = s.flip) == null ? void 0 : A.index) || 0) + 1, W = M[j];
        if (W)
          return {
            data: {
              index: j,
              overflows: B
            },
            reset: {
              placement: W
            }
          };
        let q = (R = B.filter((oe) => oe.overflows[0] <= 0).sort((oe, ce) => oe.overflows[1] - ce.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!q)
          switch (m) {
            case "bestFit": {
              var G;
              const oe = (G = B.filter((ce) => {
                if (I) {
                  const me = gt(ce.placement);
                  return me === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  me === "y";
                }
                return !0;
              }).map((ce) => [ce.placement, ce.overflows.filter((me) => me > 0).reduce((me, ke) => me + ke, 0)]).sort((ce, me) => ce[1] - me[1])[0]) == null ? void 0 : G[0];
              oe && (q = oe);
              break;
            }
            case "initialPlacement":
              q = i;
              break;
          }
        if (o !== q)
          return {
            reset: {
              placement: q
            }
          };
      }
      return {};
    }
  };
};
function tl(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function al(e) {
  return cd.some((t) => e[t] >= 0);
}
const xd = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: a
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = st(e, t);
      switch (n) {
        case "referenceHidden": {
          const s = await ba(t, {
            ...o,
            elementContext: "reference"
          }), r = tl(s, a.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: al(r)
            }
          };
        }
        case "escaped": {
          const s = await ba(t, {
            ...o,
            altBoundary: !0
          }), r = tl(s, a.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: al(r)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Cd(e, t) {
  const {
    placement: a,
    platform: n,
    elements: o
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), r = rt(a), i = Qt(a), d = gt(a) === "y", c = ["left", "top"].includes(r) ? -1 : 1, u = s && d ? -1 : 1, p = st(t, e);
  let {
    mainAxis: g,
    crossAxis: m,
    alignmentAxis: b
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof b == "number" && (m = i === "end" ? b * -1 : b), d ? {
    x: m * u,
    y: g * c
  } : {
    x: g * c,
    y: m * u
  };
}
const $d = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var a, n;
      const {
        x: o,
        y: s,
        placement: r,
        middlewareData: i
      } = t, d = await Cd(t, e);
      return r === ((a = i.offset) == null ? void 0 : a.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: o + d.x,
        y: s + d.y,
        data: {
          ...d,
          placement: r
        }
      };
    }
  };
}, kd = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: a,
        y: n,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: r = !1,
        limiter: i = {
          fn: (_) => {
            let {
              x: C,
              y: D
            } = _;
            return {
              x: C,
              y: D
            };
          }
        },
        ...d
      } = st(e, t), c = {
        x: a,
        y: n
      }, u = await ba(t, d), p = gt(rt(o)), g = co(p);
      let m = c[g], b = c[p];
      if (s) {
        const _ = g === "y" ? "top" : "left", C = g === "y" ? "bottom" : "right", D = m + u[_], k = m - u[C];
        m = Nn(D, m, k);
      }
      if (r) {
        const _ = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", D = b + u[_], k = b - u[C];
        b = Nn(D, b, k);
      }
      const h = i.fn({
        ...t,
        [g]: m,
        [p]: b
      });
      return {
        ...h,
        data: {
          x: h.x - a,
          y: h.y - n,
          enabled: {
            [g]: s,
            [p]: r
          }
        }
      };
    }
  };
}, Bd = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: a,
        y: n,
        placement: o,
        rects: s,
        middlewareData: r
      } = t, {
        offset: i = 0,
        mainAxis: d = !0,
        crossAxis: c = !0
      } = st(e, t), u = {
        x: a,
        y: n
      }, p = gt(o), g = co(p);
      let m = u[g], b = u[p];
      const h = st(i, t), _ = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (d) {
        const k = g === "y" ? "height" : "width", O = s.reference[g] - s.floating[k] + _.mainAxis, E = s.reference[g] + s.reference[k] - _.mainAxis;
        m < O ? m = O : m > E && (m = E);
      }
      if (c) {
        var C, D;
        const k = g === "y" ? "width" : "height", O = ["top", "left"].includes(rt(o)), E = s.reference[p] - s.floating[k] + (O && ((C = r.offset) == null ? void 0 : C[p]) || 0) + (O ? 0 : _.crossAxis), I = s.reference[p] + s.reference[k] + (O ? 0 : ((D = r.offset) == null ? void 0 : D[p]) || 0) - (O ? _.crossAxis : 0);
        b < E ? b = E : b > I && (b = I);
      }
      return {
        [g]: m,
        [p]: b
      };
    }
  };
}, Dd = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var a, n;
      const {
        placement: o,
        rects: s,
        platform: r,
        elements: i
      } = t, {
        apply: d = () => {
        },
        ...c
      } = st(e, t), u = await ba(t, c), p = rt(o), g = Qt(o), m = gt(o) === "y", {
        width: b,
        height: h
      } = s.floating;
      let _, C;
      p === "top" || p === "bottom" ? (_ = p, C = g === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, _ = g === "end" ? "top" : "bottom");
      const D = h - u.top - u.bottom, k = b - u.left - u.right, O = ht(h - u[_], D), E = ht(b - u[C], k), I = !t.middlewareData.shift;
      let M = O, L = E;
      if ((a = t.middlewareData.shift) != null && a.enabled.x && (L = k), (n = t.middlewareData.shift) != null && n.enabled.y && (M = D), I && !g) {
        const B = De(u.left, 0), A = De(u.right, 0), R = De(u.top, 0), G = De(u.bottom, 0);
        m ? L = b - 2 * (B !== 0 || A !== 0 ? B + A : De(u.left, u.right)) : M = h - 2 * (R !== 0 || G !== 0 ? R + G : De(u.top, u.bottom));
      }
      await d({
        ...t,
        availableWidth: L,
        availableHeight: M
      });
      const V = await r.getDimensions(i.floating);
      return b !== V.width || h !== V.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function on() {
  return typeof window < "u";
}
function Dt(e) {
  return vo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ge(e) {
  var t;
  return (t = (vo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function vo(e) {
  return on() ? e instanceof Node || e instanceof Pe(e).Node : !1;
}
function Fe(e) {
  return on() ? e instanceof Element || e instanceof Pe(e).Element : !1;
}
function He(e) {
  return on() ? e instanceof HTMLElement || e instanceof Pe(e).HTMLElement : !1;
}
function nl(e) {
  return !on() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Pe(e).ShadowRoot;
}
function Ba(e) {
  const {
    overflow: t,
    overflowX: a,
    overflowY: n,
    display: o
  } = Le(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + a) && !["inline", "contents"].includes(o);
}
function Pd(e) {
  return ["table", "td", "th"].includes(Dt(e));
}
function ln(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function mo(e) {
  const t = ho(), a = Fe(e) ? Le(e) : e;
  return a.transform !== "none" || a.perspective !== "none" || (a.containerType ? a.containerType !== "normal" : !1) || !t && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !t && (a.filter ? a.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function Od(e) {
  let t = yt(e);
  for (; He(t) && !jt(t); ) {
    if (mo(t))
      return t;
    if (ln(t))
      return null;
    t = yt(t);
  }
  return null;
}
function ho() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function jt(e) {
  return ["html", "body", "#document"].includes(Dt(e));
}
function Le(e) {
  return Pe(e).getComputedStyle(e);
}
function sn(e) {
  return Fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function yt(e) {
  if (Dt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    nl(e) && e.host || // Fallback.
    Ge(e)
  );
  return nl(t) ? t.host : t;
}
function os(e) {
  const t = yt(e);
  return jt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : He(t) && Ba(t) ? t : os(t);
}
function wa(e, t, a) {
  var n;
  t === void 0 && (t = []), a === void 0 && (a = !0);
  const o = os(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Pe(o);
  if (s) {
    const i = Wn(r);
    return t.concat(r, r.visualViewport || [], Ba(o) ? o : [], i && a ? wa(i) : []);
  }
  return t.concat(o, wa(o, [], a));
}
function Wn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ls(e) {
  const t = Le(e);
  let a = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = He(e), s = o ? e.offsetWidth : a, r = o ? e.offsetHeight : n, i = Ya(a) !== s || Ya(n) !== r;
  return i && (a = s, n = r), {
    width: a,
    height: n,
    $: i
  };
}
function go(e) {
  return Fe(e) ? e : e.contextElement;
}
function Lt(e) {
  const t = go(e);
  if (!He(t))
    return Ue(1);
  const a = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = ls(t);
  let r = (s ? Ya(a.width) : a.width) / n, i = (s ? Ya(a.height) : a.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: r,
    y: i
  };
}
const Ed = /* @__PURE__ */ Ue(0);
function ss(e) {
  const t = Pe(e);
  return !ho() || !t.visualViewport ? Ed : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Sd(e, t, a) {
  return t === void 0 && (t = !1), !a || t && a !== Pe(e) ? !1 : t;
}
function kt(e, t, a, n) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const o = e.getBoundingClientRect(), s = go(e);
  let r = Ue(1);
  t && (n ? Fe(n) && (r = Lt(n)) : r = Lt(e));
  const i = Sd(s, a, n) ? ss(s) : Ue(0);
  let d = (o.left + i.x) / r.x, c = (o.top + i.y) / r.y, u = o.width / r.x, p = o.height / r.y;
  if (s) {
    const g = Pe(s), m = n && Fe(n) ? Pe(n) : n;
    let b = g, h = Wn(b);
    for (; h && n && m !== b; ) {
      const _ = Lt(h), C = h.getBoundingClientRect(), D = Le(h), k = C.left + (h.clientLeft + parseFloat(D.paddingLeft)) * _.x, O = C.top + (h.clientTop + parseFloat(D.paddingTop)) * _.y;
      d *= _.x, c *= _.y, u *= _.x, p *= _.y, d += k, c += O, b = Pe(h), h = Wn(b);
    }
  }
  return Za({
    width: u,
    height: p,
    x: d,
    y: c
  });
}
function yo(e, t) {
  const a = sn(e).scrollLeft;
  return t ? t.left + a : kt(Ge(e)).left + a;
}
function rs(e, t, a) {
  a === void 0 && (a = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (a ? 0 : (
    // RTL <body> scrollbar.
    yo(e, n)
  )), s = n.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Td(e) {
  let {
    elements: t,
    rect: a,
    offsetParent: n,
    strategy: o
  } = e;
  const s = o === "fixed", r = Ge(n), i = t ? ln(t.floating) : !1;
  if (n === r || i && s)
    return a;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ue(1);
  const u = Ue(0), p = He(n);
  if ((p || !p && !s) && ((Dt(n) !== "body" || Ba(r)) && (d = sn(n)), He(n))) {
    const m = kt(n);
    c = Lt(n), u.x = m.x + n.clientLeft, u.y = m.y + n.clientTop;
  }
  const g = r && !p && !s ? rs(r, d, !0) : Ue(0);
  return {
    width: a.width * c.x,
    height: a.height * c.y,
    x: a.x * c.x - d.scrollLeft * c.x + u.x + g.x,
    y: a.y * c.y - d.scrollTop * c.y + u.y + g.y
  };
}
function Md(e) {
  return Array.from(e.getClientRects());
}
function Ad(e) {
  const t = Ge(e), a = sn(e), n = e.ownerDocument.body, o = De(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = De(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -a.scrollLeft + yo(e);
  const i = -a.scrollTop;
  return Le(n).direction === "rtl" && (r += De(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: r,
    y: i
  };
}
function Id(e, t) {
  const a = Pe(e), n = Ge(e), o = a.visualViewport;
  let s = n.clientWidth, r = n.clientHeight, i = 0, d = 0;
  if (o) {
    s = o.width, r = o.height;
    const c = ho();
    (!c || c && t === "fixed") && (i = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: i,
    y: d
  };
}
function Rd(e, t) {
  const a = kt(e, !0, t === "fixed"), n = a.top + e.clientTop, o = a.left + e.clientLeft, s = He(e) ? Lt(e) : Ue(1), r = e.clientWidth * s.x, i = e.clientHeight * s.y, d = o * s.x, c = n * s.y;
  return {
    width: r,
    height: i,
    x: d,
    y: c
  };
}
function ol(e, t, a) {
  let n;
  if (t === "viewport")
    n = Id(e, a);
  else if (t === "document")
    n = Ad(Ge(e));
  else if (Fe(t))
    n = Rd(t, a);
  else {
    const o = ss(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Za(n);
}
function is(e, t) {
  const a = yt(e);
  return a === t || !Fe(a) || jt(a) ? !1 : Le(a).position === "fixed" || is(a, t);
}
function Vd(e, t) {
  const a = t.get(e);
  if (a)
    return a;
  let n = wa(e, [], !1).filter((i) => Fe(i) && Dt(i) !== "body"), o = null;
  const s = Le(e).position === "fixed";
  let r = s ? yt(e) : e;
  for (; Fe(r) && !jt(r); ) {
    const i = Le(r), d = mo(r);
    !d && i.position === "fixed" && (o = null), (s ? !d && !o : !d && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ba(r) && !d && is(e, r)) ? n = n.filter((u) => u !== r) : o = i, r = yt(r);
  }
  return t.set(e, n), n;
}
function Fd(e) {
  let {
    element: t,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = e;
  const r = [...a === "clippingAncestors" ? ln(t) ? [] : Vd(t, this._c) : [].concat(a), n], i = r[0], d = r.reduce((c, u) => {
    const p = ol(t, u, o);
    return c.top = De(p.top, c.top), c.right = ht(p.right, c.right), c.bottom = ht(p.bottom, c.bottom), c.left = De(p.left, c.left), c;
  }, ol(t, i, o));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function Ld(e) {
  const {
    width: t,
    height: a
  } = ls(e);
  return {
    width: t,
    height: a
  };
}
function Nd(e, t, a) {
  const n = He(t), o = Ge(t), s = a === "fixed", r = kt(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = Ue(0);
  if (n || !n && !s)
    if ((Dt(t) !== "body" || Ba(o)) && (i = sn(t)), n) {
      const g = kt(t, !0, s, t);
      d.x = g.x + t.clientLeft, d.y = g.y + t.clientTop;
    } else o && (d.x = yo(o));
  const c = o && !n && !s ? rs(o, i) : Ue(0), u = r.left + i.scrollLeft - d.x - c.x, p = r.top + i.scrollTop - d.y - c.y;
  return {
    x: u,
    y: p,
    width: r.width,
    height: r.height
  };
}
function Bn(e) {
  return Le(e).position === "static";
}
function ll(e, t) {
  if (!He(e) || Le(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let a = e.offsetParent;
  return Ge(e) === a && (a = a.ownerDocument.body), a;
}
function ds(e, t) {
  const a = Pe(e);
  if (ln(e))
    return a;
  if (!He(e)) {
    let o = yt(e);
    for (; o && !jt(o); ) {
      if (Fe(o) && !Bn(o))
        return o;
      o = yt(o);
    }
    return a;
  }
  let n = ll(e, t);
  for (; n && Pd(n) && Bn(n); )
    n = ll(n, t);
  return n && jt(n) && Bn(n) && !mo(n) ? a : n || Od(e) || a;
}
const zd = async function(e) {
  const t = this.getOffsetParent || ds, a = this.getDimensions, n = await a(e.floating);
  return {
    reference: Nd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Wd(e) {
  return Le(e).direction === "rtl";
}
const Kd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Td,
  getDocumentElement: Ge,
  getClippingRect: Fd,
  getOffsetParent: ds,
  getElementRects: zd,
  getClientRects: Md,
  getDimensions: Ld,
  getScale: Lt,
  isElement: Fe,
  isRTL: Wd
};
function Ud(e, t) {
  let a = null, n;
  const o = Ge(e);
  function s() {
    var i;
    clearTimeout(n), (i = a) == null || i.disconnect(), a = null;
  }
  function r(i, d) {
    i === void 0 && (i = !1), d === void 0 && (d = 1), s();
    const {
      left: c,
      top: u,
      width: p,
      height: g
    } = e.getBoundingClientRect();
    if (i || t(), !p || !g)
      return;
    const m = Ra(u), b = Ra(o.clientWidth - (c + p)), h = Ra(o.clientHeight - (u + g)), _ = Ra(c), D = {
      rootMargin: -m + "px " + -b + "px " + -h + "px " + -_ + "px",
      threshold: De(0, ht(1, d)) || 1
    };
    let k = !0;
    function O(E) {
      const I = E[0].intersectionRatio;
      if (I !== d) {
        if (!k)
          return r();
        I ? r(!1, I) : n = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      k = !1;
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
  return r(!0), s;
}
function Hd(e, t, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, c = go(e), u = o || s ? [...c ? wa(c) : [], ...wa(t)] : [];
  u.forEach((C) => {
    o && C.addEventListener("scroll", a, {
      passive: !0
    }), s && C.addEventListener("resize", a);
  });
  const p = c && i ? Ud(c, a) : null;
  let g = -1, m = null;
  r && (m = new ResizeObserver((C) => {
    let [D] = C;
    D && D.target === c && m && (m.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var k;
      (k = m) == null || k.observe(t);
    })), a();
  }), c && !d && m.observe(c), m.observe(t));
  let b, h = d ? kt(e) : null;
  d && _();
  function _() {
    const C = kt(e);
    h && (C.x !== h.x || C.y !== h.y || C.width !== h.width || C.height !== h.height) && a(), h = C, b = requestAnimationFrame(_);
  }
  return a(), () => {
    var C;
    u.forEach((D) => {
      o && D.removeEventListener("scroll", a), s && D.removeEventListener("resize", a);
    }), p == null || p(), (C = m) == null || C.disconnect(), m = null, d && cancelAnimationFrame(b);
  };
}
const jd = $d, Gd = kd, sl = _d, qd = Dd, Yd = xd, Xd = wd, Zd = Bd, Jd = (e, t, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Kd,
    ...a
  }, s = {
    ...o.platform,
    _c: n
  };
  return bd(e, t, {
    ...o,
    platform: s
  });
};
function Qd(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Kn(e) {
  if (Qd(e)) {
    const t = e.$el;
    return vo(t) && Dt(t) === "#comment" ? null : t;
  }
  return e;
}
function Vt(e) {
  return typeof e == "function" ? e() : l(e);
}
function eu(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const a = Kn(Vt(e.element));
      return a == null ? {} : Xd({
        element: a,
        padding: e.padding
      }).fn(t);
    }
  };
}
function us(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function rl(e, t) {
  const a = us(e);
  return Math.round(t * a) / a;
}
function tu(e, t, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = $(() => {
    var M;
    return (M = Vt(a.open)) != null ? M : !0;
  }), s = $(() => Vt(a.middleware)), r = $(() => {
    var M;
    return (M = Vt(a.placement)) != null ? M : "bottom";
  }), i = $(() => {
    var M;
    return (M = Vt(a.strategy)) != null ? M : "absolute";
  }), d = $(() => {
    var M;
    return (M = Vt(a.transform)) != null ? M : !0;
  }), c = $(() => Kn(e.value)), u = $(() => Kn(t.value)), p = T(0), g = T(0), m = T(i.value), b = T(r.value), h = Zn({}), _ = T(!1), C = $(() => {
    const M = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return M;
    const L = rl(u.value, p.value), V = rl(u.value, g.value);
    return d.value ? {
      ...M,
      transform: "translate(" + L + "px, " + V + "px)",
      ...us(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: L + "px",
      top: V + "px"
    };
  });
  let D;
  function k() {
    if (c.value == null || u.value == null)
      return;
    const M = o.value;
    Jd(c.value, u.value, {
      middleware: s.value,
      placement: r.value,
      strategy: i.value
    }).then((L) => {
      p.value = L.x, g.value = L.y, m.value = L.strategy, b.value = L.placement, h.value = L.middlewareData, _.value = M !== !1;
    });
  }
  function O() {
    typeof D == "function" && (D(), D = void 0);
  }
  function E() {
    if (O(), n === void 0) {
      k();
      return;
    }
    if (c.value != null && u.value != null) {
      D = n(c.value, u.value, k);
      return;
    }
  }
  function I() {
    o.value || (_.value = !1);
  }
  return ee([s, r, i, o], k, {
    flush: "sync"
  }), ee([c, u], E, {
    flush: "sync"
  }), ee(o, I, {
    flush: "sync"
  }), Jn() && Qn(O), {
    x: It(p),
    y: It(g),
    strategy: It(m),
    placement: It(b),
    middlewareData: It(h),
    isPositioned: It(_),
    floatingStyles: C,
    update: k
  };
}
function le(e, t) {
  const a = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(a);
  return [(o) => {
    const s = Ol(n, o);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (El(n, o), o)];
}
function bo(e, t, a) {
  const n = a.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function Ja(e, t = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(e, t), a);
}
function au(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nu = function e(t, a) {
  if (t === a) return !0;
  if (t && a && typeof t == "object" && typeof a == "object") {
    if (t.constructor !== a.constructor) return !1;
    var n, o, s;
    if (Array.isArray(t)) {
      if (n = t.length, n != a.length) return !1;
      for (o = n; o-- !== 0; )
        if (!e(t[o], a[o])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === a.source && t.flags === a.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === a.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === a.toString();
    if (s = Object.keys(t), n = s.length, n !== Object.keys(a).length) return !1;
    for (o = n; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(a, s[o])) return !1;
    for (o = n; o-- !== 0; ) {
      var r = s[o];
      if (!e(t[r], a[r])) return !1;
    }
    return !0;
  }
  return t !== t && a !== a;
};
const Ct = /* @__PURE__ */ au(nu);
function ou(e) {
  return e == null;
}
function cs(e) {
  const { defaultValue: t, defaultPlaceholder: a, granularity: n = "day" } = e;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (a)
    return a.copy();
  const o = /* @__PURE__ */ new Date(), s = o.getFullYear(), r = o.getMonth() + 1, i = o.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new Ut(s, r, i, 0, 0, 0) : new Kt(s, r, i);
}
function ps(e) {
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
function lu(e, t) {
  var a;
  const n = Zn();
  return ge(() => {
    n.value = e();
  }, {
    ...t,
    flush: (a = void 0) != null ? a : "sync"
  }), $a(n);
}
function Pt(e) {
  return Jn() ? (Qn(e), !0) : !1;
}
function su() {
  const e = /* @__PURE__ */ new Set(), t = (a) => {
    e.delete(a);
  };
  return {
    on: (a) => {
      e.add(a);
      const n = () => t(a);
      return Pt(n), {
        off: n
      };
    },
    off: t,
    trigger: (...a) => Promise.all(Array.from(e).map((n) => n(...a)))
  };
}
function ru(e) {
  let t = !1, a;
  const n = Pl(!0);
  return (...o) => (t || (a = n.run(() => e(...o)), t = !0), a);
}
function fs(e) {
  let t = 0, a, n;
  const o = () => {
    t -= 1, n && t <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...s) => (t += 1, a || (n = Pl(!0), a = n.run(() => e(...s))), Pt(o), a);
}
function lt(e) {
  return typeof e == "function" ? e() : l(e);
}
const qe = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const iu = (e) => typeof e < "u", du = (e) => e != null, uu = Object.prototype.toString, cu = (e) => uu.call(e) === "[object Object]", vs = () => {
}, il = /* @__PURE__ */ pu();
function pu() {
  var e, t;
  return qe && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function fu(e) {
  return je();
}
function ms(e, t = 1e4) {
  return Sl((a, n) => {
    let o = lt(e), s;
    const r = () => setTimeout(() => {
      o = lt(e), n();
    }, lt(t));
    return Pt(() => {
      clearTimeout(s);
    }), {
      get() {
        return a(), o;
      },
      set(i) {
        o = i, n(), clearTimeout(s), s = r();
      }
    };
  });
}
function vu(e, t) {
  fu() && to(e, t);
}
function wo(e, t, a = {}) {
  const {
    immediate: n = !0
  } = a, o = T(!1);
  let s = null;
  function r() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    o.value = !1, r();
  }
  function d(...c) {
    r(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, e(...c);
    }, lt(t));
  }
  return n && (o.value = !0, qe && d()), Pt(i), {
    isPending: $a(o),
    start: d,
    stop: i
  };
}
function mu(e = 1e3, t = {}) {
  const {
    controls: a = !1,
    callback: n
  } = t, o = wo(
    n ?? vs,
    e,
    t
  ), s = $(() => !o.isPending.value);
  return a ? {
    ready: s,
    ...o
  } : s;
}
function Te(e) {
  var t;
  const a = lt(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const rn = qe ? window : void 0;
function Gt(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = rn) : [t, a, n, o] = e, !t)
    return vs;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((u) => u()), s.length = 0;
  }, i = (u, p, g, m) => (u.addEventListener(p, g, m), () => u.removeEventListener(p, g, m)), d = ee(
    () => [Te(t), lt(o)],
    ([u, p]) => {
      if (r(), !u)
        return;
      const g = cu(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((b) => i(u, m, b, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), r();
  };
  return Pt(c), c;
}
function hu(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function _o(...e) {
  let t, a, n = {};
  e.length === 3 ? (t = e[0], a = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, a = e[0], n = e[1]) : (t = e[0], a = e[1]) : (t = !0, a = e[0]);
  const {
    target: o = rn,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, d = hu(t);
  return Gt(o, s, (c) => {
    c.repeat && lt(i) || d(c) && a(c);
  }, r);
}
function xo() {
  const e = T(!1), t = je();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function gu(e) {
  const t = xo();
  return $(() => (t.value, !!e()));
}
function yu(e, t, a = {}) {
  const { window: n = rn, ...o } = a;
  let s;
  const r = gu(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, d = $(() => {
    const g = lt(e), m = (Array.isArray(g) ? g : [g]).map(Te).filter(du);
    return new Set(m);
  }), c = ee(
    () => d.value,
    (g) => {
      i(), r.value && g.size && (s = new MutationObserver(t), g.forEach((m) => s.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), u = () => s == null ? void 0 : s.takeRecords(), p = () => {
    i(), c();
  };
  return Pt(p), {
    isSupported: r,
    stop: p,
    takeRecords: u
  };
}
function hs(e, t = {}) {
  const {
    immediate: a = !0,
    fpsLimit: n = void 0,
    window: o = rn
  } = t, s = T(!1), r = n ? 1e3 / n : null;
  let i = 0, d = null;
  function c(g) {
    if (!s.value || !o)
      return;
    i || (i = g);
    const m = g - i;
    if (r && m < r) {
      d = o.requestAnimationFrame(c);
      return;
    }
    i = g, e({ delta: m, timestamp: g }), d = o.requestAnimationFrame(c);
  }
  function u() {
    !s.value && o && (s.value = !0, i = 0, d = o.requestAnimationFrame(c));
  }
  function p() {
    s.value = !1, d != null && o && (o.cancelAnimationFrame(d), d = null);
  }
  return a && u(), Pt(p), {
    isActive: $a(s),
    pause: p,
    resume: u
  };
}
function bu(e) {
  return JSON.parse(JSON.stringify(e));
}
function pe(e, t, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = je(), b = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let h = c;
  t || (t = "modelValue"), h = h || `update:${t.toString()}`;
  const _ = (k) => i ? typeof i == "function" ? i(k) : bu(k) : k, C = () => iu(e[t]) ? _(e[t]) : p, D = (k) => {
    g ? g(k) && b(h, k) : b(h, k);
  };
  if (d) {
    const k = C(), O = T(k);
    let E = !1;
    return ee(
      () => e[t],
      (I) => {
        E || (E = !0, O.value = _(I), ae(() => E = !1));
      }
    ), ee(
      O,
      (I) => {
        !E && (I !== e[t] || u) && D(I);
      },
      { deep: u }
    ), O;
  } else
    return $({
      get() {
        return C();
      },
      set(k) {
        D(k);
      }
    });
}
function dn(e) {
  return e ? e.flatMap((t) => t.type === J ? dn(t.children) : [t]) : [];
}
const wu = ["INPUT", "TEXTAREA"];
function _u(e, t, a, n = {}) {
  if (!t || n.enableIgnoredElement && wu.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = !0,
    dir: d = "ltr",
    preventScroll: c = !0,
    focus: u = !1
  } = n, [p, g, m, b, h, _] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = m || b, D = p || g;
  if (!h && !_ && (!C && !D || o === "vertical" && D || o === "horizontal" && C))
    return null;
  const k = a ? Array.from(a.querySelectorAll(s)) : r;
  if (!k.length)
    return null;
  c && e.preventDefault();
  let O = null;
  return D || C ? O = gs(k, t, {
    goForward: C ? b : d === "ltr" ? p : g,
    loop: i
  }) : h ? O = k.at(0) || null : _ && (O = k.at(-1) || null), u && (O == null || O.focus()), O;
}
function gs(e, t, a, n = e.length) {
  if (--n === 0)
    return null;
  const o = e.indexOf(t), s = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (s < 0 || s >= e.length))
    return null;
  const r = (s + e.length) % e.length, i = e[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? gs(
    e,
    i,
    a,
    n
  ) : i : null;
}
function Dn(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Un(e, t, a = ".", n) {
  if (!Dn(t))
    return Un(e, {}, a);
  const o = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = e[s];
    r != null && (Array.isArray(r) && Array.isArray(o[s]) ? o[s] = [...r, ...o[s]] : Dn(r) && Dn(o[s]) ? o[s] = Un(
      r,
      o[s],
      (a ? `${a}.` : "") + s.toString()
    ) : o[s] = r);
  }
  return o;
}
function xu(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((a, n) => Un(a, n, ""), {})
  );
}
const Cu = xu(), [un, iy] = le("ConfigProvider");
let $u = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", ku = (e = 21) => {
  let t = "", a = e;
  for (; a--; )
    t += $u[Math.random() * 64 | 0];
  return t;
};
const Bu = fs(() => {
  const e = T(/* @__PURE__ */ new Map()), t = T(), a = $(() => {
    for (const r of e.value.values())
      if (r)
        return !0;
    return !1;
  }), n = un({
    scrollBody: T(!0)
  });
  let o = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", il && (o == null || o()), t.value = void 0;
  };
  return ee(a, (r, i) => {
    var d;
    if (!qe)
      return;
    if (!r) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, u = { padding: c, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? Cu({
      padding: n.scrollBody.value.padding === !0 ? c : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? c : n.scrollBody.value.margin
    }, u) : u : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), il && (o = Gt(
      document,
      "touchmove",
      (g) => {
        var m;
        g.target === document.documentElement && (g.touches.length > 1 || (m = g.preventDefault) == null || m.call(g));
      },
      { passive: !1 }
    )), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Da(e) {
  const t = ku(6), a = Bu();
  a.value.set(t, e ?? !1);
  const n = $({
    get: () => a.value.get(t) ?? !1,
    set: (o) => a.value.set(t, o)
  });
  return vu(() => {
    a.value.delete(t);
  }), n;
}
const Du = "data-radix-vue-collection-item";
function ea(e, t = Du) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = T([]);
    function s() {
      const r = Te(n);
      return r ? o.value = Array.from(
        r.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return Ir(() => {
      o.value = [];
    }), ie(s), Rr(s), ee(() => n == null ? void 0 : n.value, s, { immediate: !0 }), El(a, o), o;
  }, injectCollection: () => Ol(a, T([])) };
}
function Pu(e) {
  const t = T(e);
  function a() {
    return t.value;
  }
  function n(h) {
    t.value = h;
  }
  function o(h, _) {
    return new Qe(t.value, _).format(h);
  }
  function s(h, _ = !0) {
    return nd(h) && _ ? o(Ve(h), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Ve(h), {
      dateStyle: "long"
    });
  }
  function r(h, _ = {}) {
    return new Qe(t.value, { month: "long", year: "numeric", ..._ }).format(h);
  }
  function i(h, _ = {}) {
    return new Qe(t.value, { month: "long", ..._ }).format(h);
  }
  function d() {
    const h = Ul(Bt());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_) => ({ label: i(Ve(h.set({ month: _ }))), value: _ }));
  }
  function c(h, _ = {}) {
    return new Qe(t.value, { year: "numeric", ..._ }).format(h);
  }
  function u(h, _) {
    return uo(h) ? new Qe(t.value, {
      ..._,
      timeZone: h.timeZone
    }).formatToParts(Ve(h)) : new Qe(t.value, _).formatToParts(Ve(h));
  }
  function p(h, _ = "narrow") {
    return new Qe(t.value, { weekday: _ }).format(h);
  }
  function g(h) {
    var _;
    return ((_ = new Qe(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(h).find((C) => C.type === "dayPeriod")) == null ? void 0 : _.value) === "PM" ? "PM" : "AM";
  }
  const m = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function b(h, _, C = {}) {
    const D = { ...m, ...C }, k = u(h, D).find((O) => O.type === _);
    return k ? k.value : "";
  }
  return {
    setLocale: n,
    getLocale: a,
    fullMonth: i,
    fullYear: c,
    fullMonthAndYear: r,
    toParts: u,
    custom: o,
    part: b,
    dayPeriod: g,
    selectedDate: s,
    dayOfWeek: p,
    getMonths: d
  };
}
function it(e) {
  const t = un({
    dir: T("ltr")
  });
  return $(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function Ot(e) {
  const t = je(), a = t == null ? void 0 : t.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), a == null || a.forEach((o) => {
    n[Tr($l(o))] = (...s) => e(o, ...s);
  }), n;
}
let Pn = 0;
function Co() {
  ge((e) => {
    if (!qe)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? dl()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? dl()
    ), Pn++, e(() => {
      Pn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), Pn--;
    });
  });
}
function dl() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function Pa(e) {
  return $(() => {
    var t;
    return lt(e) ? !!((t = Te(e)) != null && t.closest("form")) : !0;
  });
}
function ne(e) {
  const t = je(), a = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, s) => {
    const r = (t == null ? void 0 : t.type.props[s]).default;
    return r !== void 0 && (o[s] = r), o;
  }, {}), n = Cl(e);
  return $(() => {
    const o = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      o[$l(r)] = s[r];
    }), Object.keys({ ...a, ...o }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function te(e, t) {
  const a = ne(e), n = t ? Ot(t) : {};
  return $(() => ({
    ...a.value,
    ...n
  }));
}
function N() {
  const e = je(), t = T(), a = $(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = t.value) == null ? void 0 : r.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Te(t);
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
  function s(r) {
    t.value = r, !(r instanceof Element || !r) && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => r.$el
    }), e.exposed = o);
  }
  return { forwardRef: s, currentRef: t, currentElement: a };
}
function Ou(e, t) {
  const a = ms(!1, 300), n = T(null), o = su();
  function s() {
    n.value = null, a.value = !1;
  }
  function r(i, d) {
    const c = i.currentTarget, u = { x: i.clientX, y: i.clientY }, p = Eu(u, c.getBoundingClientRect()), g = Su(u, p), m = Tu(d.getBoundingClientRect()), b = Au([...g, ...m]);
    n.value = b, a.value = !0;
  }
  return ge((i) => {
    if (e.value && t.value) {
      const d = (u) => r(u, t.value), c = (u) => r(u, e.value);
      e.value.addEventListener("pointerleave", d), t.value.addEventListener("pointerleave", c), i(() => {
        var u, p;
        (u = e.value) == null || u.removeEventListener("pointerleave", d), (p = t.value) == null || p.removeEventListener("pointerleave", c);
      });
    }
  }), ge((i) => {
    var d;
    if (n.value) {
      const c = (u) => {
        var p, g;
        if (!n.value)
          return;
        const m = u.target, b = { x: u.clientX, y: u.clientY }, h = ((p = e.value) == null ? void 0 : p.contains(m)) || ((g = t.value) == null ? void 0 : g.contains(m)), _ = !Mu(b, n.value), C = m.hasAttribute("data-grace-area-trigger");
        h ? s() : (_ || C) && (s(), o.trigger());
      };
      (d = e.value) == null || d.ownerDocument.addEventListener("pointermove", c), i(() => {
        var u;
        return (u = e.value) == null ? void 0 : u.ownerDocument.removeEventListener("pointermove", c);
      });
    }
  }), {
    isPointerInTransit: a,
    onPointerExit: o.on
  };
}
function Eu(e, t) {
  const a = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(a, n, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case a:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Su(e, t, a = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: e.x - a, y: e.y + a },
        { x: e.x + a, y: e.y + a }
      );
      break;
    case "bottom":
      n.push(
        { x: e.x - a, y: e.y - a },
        { x: e.x + a, y: e.y - a }
      );
      break;
    case "left":
      n.push(
        { x: e.x + a, y: e.y - a },
        { x: e.x + a, y: e.y + a }
      );
      break;
    case "right":
      n.push(
        { x: e.x - a, y: e.y - a },
        { x: e.x - a, y: e.y + a }
      );
      break;
  }
  return n;
}
function Tu(e) {
  const { top: t, right: a, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: a, y: t },
    { x: a, y: n },
    { x: o, y: n }
  ];
}
function Mu(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, d = t[s].y, c = t[r].x, u = t[r].y;
    d > n != u > n && a < (c - i) * (n - d) / (u - d) + i && (o = !o);
  }
  return o;
}
function Au(e) {
  const t = e.slice();
  return t.sort((a, n) => a.x < n.x ? -1 : a.x > n.x ? 1 : a.y < n.y ? -1 : a.y > n.y ? 1 : 0), Iu(t);
}
function Iu(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], r = t[t.length - 2];
      if ((s.x - r.x) * (o.y - r.y) >= (s.y - r.y) * (o.x - r.x))
        t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const a = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const o = e[n];
    for (; a.length >= 2; ) {
      const s = a[a.length - 1], r = a[a.length - 2];
      if ((s.x - r.x) * (o.y - r.y) >= (s.y - r.y) * (o.x - r.x))
        a.pop();
      else break;
    }
    a.push(o);
  }
  return a.pop(), t.length === 1 && a.length === 1 && t[0].x === a[0].x && t[0].y === a[0].y ? t : t.concat(a);
}
var Ru = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Rt = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap(), Fa = {}, On = 0, ys = function(e) {
  return e && (e.host || ys(e.parentNode));
}, Vu = function(e, t) {
  return t.map(function(a) {
    if (e.contains(a))
      return a;
    var n = ys(a);
    return n && e.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, Fu = function(e, t, a, n) {
  var o = Vu(t, Array.isArray(e) ? e : [e]);
  Fa[a] || (Fa[a] = /* @__PURE__ */ new WeakMap());
  var s = Fa[a], r = [], i = /* @__PURE__ */ new Set(), d = new Set(o), c = function(p) {
    !p || i.has(p) || (i.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var u = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(g) {
      if (i.has(g))
        u(g);
      else
        try {
          var m = g.getAttribute(n), b = m !== null && m !== "false", h = (Rt.get(g) || 0) + 1, _ = (s.get(g) || 0) + 1;
          Rt.set(g, h), s.set(g, _), r.push(g), h === 1 && b && Va.set(g, !0), _ === 1 && g.setAttribute(a, "true"), b || g.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", g, C);
        }
    });
  };
  return u(t), i.clear(), On++, function() {
    r.forEach(function(p) {
      var g = Rt.get(p) - 1, m = s.get(p) - 1;
      Rt.set(p, g), s.set(p, m), g || (Va.has(p) || p.removeAttribute(n), Va.delete(p)), m || p.removeAttribute(a);
    }), On--, On || (Rt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap(), Fa = {});
  };
}, Lu = function(e, t, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = Ru(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), Fu(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function Oa(e) {
  let t;
  ee(() => Te(e), (a) => {
    a ? t = Lu(a) : t && t();
  }), bt(() => {
    t && t();
  });
}
let Nu = 0;
function we(e, t = "radix") {
  const a = un({ useId: void 0 });
  return Wo.useId ? `${t}-${Wo.useId()}` : a.useId ? `${t}-${a.useId()}` : `${t}-${++Nu}`;
}
function bs(e) {
  const t = T(), a = $(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), n = $(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return ie(() => {
    const o = Te(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const s = new ResizeObserver((r) => {
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
      return s.observe(o, { box: "border-box" }), () => s.unobserve(o);
    } else
      t.value = void 0;
  }), {
    width: a,
    height: n
  };
}
function zu(e, t) {
  const a = T(e);
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
function $o(e) {
  const t = ms("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, n) => {
      var o, s;
      if (!(e != null && e.value) && !n)
        return;
      t.value = t.value + a;
      const r = (e == null ? void 0 : e.value) ?? n, i = document.activeElement, d = ((s = (o = r.find((g) => g === i)) == null ? void 0 : o.textContent) == null ? void 0 : s.trim()) ?? "", c = r.map((g) => {
        var m;
        return ((m = g.textContent) == null ? void 0 : m.trim()) ?? "";
      }), u = Ku(c, t.value, d), p = r.find(
        (g) => {
          var m;
          return ((m = g.textContent) == null ? void 0 : m.trim()) === u;
        }
      );
      return p && p.focus(), p;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Wu(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
function Ku(e, t, a) {
  const n = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = a ? e.indexOf(a) : -1;
  let s = Wu(e, Math.max(o, 0));
  n.length === 1 && (s = s.filter((i) => i !== a));
  const r = s.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return r !== a ? r : void 0;
}
function ws() {
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
const ko = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const s = dn(a.default()), r = s.findIndex((u) => u.type !== kl);
      if (r === -1)
        return s;
      const i = s[r];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? S(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const c = Dr(i, d);
      for (const u in d)
        u.startsWith("on") && (c.props || (c.props = {}), c.props[u] = d[u]);
      return s.length === 1 ? c : (s[r] = c, s);
    };
  }
}), F = w({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => We(n, t) : n !== "template" ? () => We(e.as, t, { default: a.default }) : () => We(ko, t, { default: a.default });
  }
});
function Et() {
  const e = T(), t = $(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = e.value) == null ? void 0 : a.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : Te(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function Uu(e, t) {
  const a = T({}), n = T("none"), o = e.value ? "mounted" : "unmounted", { state: s, dispatch: r } = zu(o, {
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
  }), i = (g) => {
    var m;
    if (qe) {
      const b = new CustomEvent(g, { bubbles: !1, cancelable: !1 });
      (m = t.value) == null || m.dispatchEvent(b);
    }
  };
  ee(
    e,
    async (g, m) => {
      var b;
      const h = m !== g;
      if (await ae(), h) {
        const _ = n.value, C = La(t.value);
        g ? (r("MOUNT"), i("enter"), C === "none" && i("after-enter")) : C === "none" || ((b = a.value) == null ? void 0 : b.display) === "none" ? (r("UNMOUNT"), i("leave"), i("after-leave")) : m && _ !== C ? (r("ANIMATION_OUT"), i("leave")) : (r("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (g) => {
    const m = La(t.value), b = m.includes(
      g.animationName
    ), h = s.value === "mounted" ? "enter" : "leave";
    g.target === t.value && b && (i(`after-${h}`), r("ANIMATION_END")), g.target === t.value && m === "none" && r("ANIMATION_END");
  }, c = (g) => {
    g.target === t.value && (n.value = La(t.value));
  }, u = ee(
    t,
    (g, m) => {
      g ? (a.value = getComputedStyle(g), g.addEventListener("animationstart", c), g.addEventListener("animationcancel", d), g.addEventListener("animationend", d)) : (r("ANIMATION_END"), m == null || m.removeEventListener("animationstart", c), m == null || m.removeEventListener("animationcancel", d), m == null || m.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), p = ee(s, () => {
    const g = La(t.value);
    n.value = s.value === "mounted" ? g : "none";
  });
  return bt(() => {
    u(), p();
  }), {
    isPresent: $(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function La(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Me = w({
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
    const { present: o, forceMount: s } = de(e), r = T(), { isPresent: i } = Uu(o, r);
    a({ present: i });
    let d = t.default({ present: i });
    d = dn(d || []);
    const c = je();
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
    return () => s.value || o.value || i.value ? We(t.default({ present: i })[0], {
      ref: (u) => {
        const p = Te(u);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
}), [Ye, Hu] = le("DialogRoot"), ju = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = pe(a, "open", t, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = T(), s = T(), { modal: r } = de(a);
    return Hu({
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
      contentElement: s
    }), (i, d) => x(i.$slots, "default", { open: l(n) });
  }
}), Gu = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ye(), { forwardRef: n, currentElement: o } = N();
    return a.contentId || (a.contentId = we(void 0, "radix-vue-dialog-content")), ie(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), y(l(F), S(t, {
      ref: l(n),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": l(a).open.value || !1,
      "aria-controls": l(a).open.value ? l(a).contentId : void 0,
      "data-state": l(a).open.value ? "open" : "closed",
      onClick: l(a).onOpenToggle
    }), {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Ea = /* @__PURE__ */ w({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = xo();
    return (a, n) => l(t) || a.forceMount ? (v(), y(an, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      x(a.$slots, "default")
    ], 8, ["to", "disabled"])) : Q("", !0);
  }
}), _s = /* @__PURE__ */ w({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Ea), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qu = "dismissableLayer.pointerDownOutside", Yu = "dismissableLayer.focusOutside";
function xs(e, t) {
  const a = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function Xu(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = T(!1), s = T(() => {
  });
  return ge((r) => {
    if (!qe)
      return;
    const i = async (c) => {
      const u = c.target;
      if (t != null && t.value) {
        if (xs(t.value, u)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let p = function() {
            bo(
              qu,
              e,
              g
            );
          };
          const g = { originalEvent: c };
          c.pointerType === "touch" ? (n.removeEventListener("click", s.value), s.value = p, n.addEventListener("click", s.value, {
            once: !0
          })) : p();
        } else
          n.removeEventListener("click", s.value);
        o.value = !1;
      }
    }, d = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    r(() => {
      window.clearTimeout(d), n.removeEventListener("pointerdown", i), n.removeEventListener("click", s.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function Zu(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = T(!1);
  return ge((s) => {
    if (!qe)
      return;
    const r = async (i) => {
      t != null && t.value && (await ae(), !(!t.value || xs(t.value, i.target)) && i.target && !o.value && bo(
        Yu,
        e,
        { originalEvent: i }
      ));
    };
    n.addEventListener("focusin", r), s(() => n.removeEventListener("focusin", r));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const Re = Bl({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ta = /* @__PURE__ */ w({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: s } = N(), r = $(
      () => {
        var b;
        return ((b = s.value) == null ? void 0 : b.ownerDocument) ?? globalThis.document;
      }
    ), i = $(() => Re.layersRoot), d = $(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), c = $(() => Re.layersWithOutsidePointerEventsDisabled.size > 0), u = $(() => {
      const b = Array.from(i.value), [h] = [...Re.layersWithOutsidePointerEventsDisabled].slice(-1), _ = b.indexOf(h);
      return d.value >= _;
    }), p = Xu(async (b) => {
      const h = [...Re.branches].some(
        (_) => _ == null ? void 0 : _.contains(b.target)
      );
      !u.value || h || (n("pointerDownOutside", b), n("interactOutside", b), await ae(), b.defaultPrevented || n("dismiss"));
    }, s), g = Zu((b) => {
      [...Re.branches].some(
        (h) => h == null ? void 0 : h.contains(b.target)
      ) || (n("focusOutside", b), n("interactOutside", b), b.defaultPrevented || n("dismiss"));
    }, s);
    _o("Escape", (b) => {
      d.value === i.value.size - 1 && (n("escapeKeyDown", b), b.defaultPrevented || n("dismiss"));
    });
    let m;
    return ge((b) => {
      s.value && (a.disableOutsidePointerEvents && (Re.layersWithOutsidePointerEventsDisabled.size === 0 && (m = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), Re.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), b(() => {
        a.disableOutsidePointerEvents && Re.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = m);
      }));
    }), ge((b) => {
      b(() => {
        s.value && (i.value.delete(s.value), Re.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (b, h) => (v(), y(l(F), {
      ref: l(o),
      "as-child": b.asChild,
      as: b.as,
      "data-dismissable-layer": "",
      style: Zt({
        pointerEvents: c.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(g).onFocusCapture,
      onBlurCapture: l(g).onBlurCapture,
      onPointerdownCapture: l(p).onPointerDownCapture
    }, {
      default: f(() => [
        x(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Ju = /* @__PURE__ */ w({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = N();
    return ie(() => {
      Re.branches.add(n.value);
    }), bt(() => {
      Re.branches.delete(n.value);
    }), (o, s) => (v(), y(l(F), S({ ref: l(a) }, t), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), En = "focusScope.autoFocusOnMount", Sn = "focusScope.autoFocusOnUnmount", ul = { bubbles: !1, cancelable: !0 };
function Ga(e, { select: t = !1 } = {}) {
  const a = document.activeElement;
  for (const n of e)
    if (vt(n, { select: t }), document.activeElement !== a)
      return !0;
}
function Qu(e) {
  const t = Bo(e), a = cl(t, e), n = cl(t.reverse(), e);
  return [a, n];
}
function Bo(e) {
  const t = [], a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) t.push(a.currentNode);
  return t;
}
function cl(e, t) {
  for (const a of e)
    if (!ec(a, { upTo: t }))
      return a;
}
function ec(e, { upTo: t }) {
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
function tc(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function vt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const a = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== a && tc(e) && t && e.select();
  }
}
const ac = ru(() => T([]));
function nc() {
  const e = ac();
  return {
    add(t) {
      const a = e.value[0];
      t !== a && (a == null || a.pause()), e.value = pl(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var a;
      e.value = pl(e.value, t), (a = e.value[0]) == null || a.resume();
    }
  };
}
function pl(e, t) {
  const a = [...e], n = a.indexOf(t);
  return n !== -1 && a.splice(n, 1), a;
}
function oc(e) {
  return e.filter((t) => t.tagName !== "A");
}
const cn = /* @__PURE__ */ w({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, n = t, { currentRef: o, currentElement: s } = N(), r = T(null), i = nc(), d = Bl({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ge((u) => {
      if (!qe)
        return;
      const p = s.value;
      if (!a.trapped)
        return;
      function g(_) {
        if (d.paused || !p)
          return;
        const C = _.target;
        p.contains(C) ? r.value = C : vt(r.value, { select: !0 });
      }
      function m(_) {
        if (d.paused || !p)
          return;
        const C = _.relatedTarget;
        C !== null && (p.contains(C) || vt(r.value, { select: !0 }));
      }
      function b(_) {
        p.contains(r.value) || vt(p);
      }
      document.addEventListener("focusin", g), document.addEventListener("focusout", m);
      const h = new MutationObserver(b);
      p && h.observe(p, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", m), h.disconnect();
      });
    }), ge(async (u) => {
      const p = s.value;
      if (await ae(), !p)
        return;
      i.add(d);
      const g = document.activeElement;
      if (!p.contains(g)) {
        const m = new CustomEvent(En, ul);
        p.addEventListener(En, (b) => n("mountAutoFocus", b)), p.dispatchEvent(m), m.defaultPrevented || (Ga(oc(Bo(p)), {
          select: !0
        }), document.activeElement === g && vt(p));
      }
      u(() => {
        p.removeEventListener(En, (h) => n("mountAutoFocus", h));
        const m = new CustomEvent(Sn, ul), b = (h) => {
          n("unmountAutoFocus", h);
        };
        p.addEventListener(Sn, b), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || vt(g ?? document.body, { select: !0 }), p.removeEventListener(Sn, b), i.remove(d);
        }, 0);
      });
    });
    function c(u) {
      if (!a.loop && !a.trapped || d.paused)
        return;
      const p = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, g = document.activeElement;
      if (p && g) {
        const m = u.currentTarget, [b, h] = Qu(m);
        b && h ? !u.shiftKey && g === h ? (u.preventDefault(), a.loop && vt(b, { select: !0 })) : u.shiftKey && g === b && (u.preventDefault(), a.loop && vt(h, { select: !0 })) : g === m && u.preventDefault();
      }
    }
    return (u, p) => (v(), y(l(F), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: c
    }, {
      default: f(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), lc = "menu.itemSelect", Hn = ["Enter", " "], sc = ["ArrowDown", "PageUp", "Home"], Cs = ["ArrowUp", "PageDown", "End"], rc = [...sc, ...Cs], ic = {
  ltr: [...Hn, "ArrowRight"],
  rtl: [...Hn, "ArrowLeft"]
}, dc = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Do(e) {
  return e ? "open" : "closed";
}
function Qa(e) {
  return e === "indeterminate";
}
function Po(e) {
  return Qa(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function jn(e) {
  const t = document.activeElement;
  for (const a of e)
    if (a === t || (a.focus(), document.activeElement !== t))
      return;
}
function uc(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, d = t[s].y, c = t[r].x, u = t[r].y;
    d > n != u > n && a < (c - i) * (n - d) / (u - d) + i && (o = !o);
  }
  return o;
}
function cc(e, t) {
  if (!t)
    return !1;
  const a = { x: e.clientX, y: e.clientY };
  return uc(a, t);
}
function _a(e) {
  return e.pointerType === "mouse";
}
const pc = "DialogTitle", fc = "DialogContent";
function vc({
  titleName: e = pc,
  contentName: t = fc,
  componentLink: a = "dialog.html#title",
  titleId: n,
  descriptionId: o,
  contentElement: s
}) {
  const r = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${a}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ie(() => {
    var d;
    document.getElementById(n) || console.warn(r);
    const c = (d = s.value) == null ? void 0 : d.getAttribute("aria-describedby");
    o && c && (document.getElementById(o) || console.warn(i));
  });
}
const $s = /* @__PURE__ */ w({
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
    const a = e, n = t, o = Ye(), { forwardRef: s, currentElement: r } = N();
    return o.titleId || (o.titleId = we(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = we(void 0, "radix-vue-dialog-description")), ie(() => {
      o.contentElement = r, document.activeElement !== document.body && (o.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && vc({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: r
    }), (i, d) => (v(), y(l(cn), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: d[6] || (d[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: f(() => [
        P(l(ta), S({
          id: l(o).contentId,
          ref: l(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(o).descriptionId,
          "aria-labelledby": l(o).titleId,
          "data-state": l(Do)(l(o).open.value)
        }, i.$attrs, {
          onDismiss: d[0] || (d[0] = (c) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: d[2] || (d[2] = (c) => n("focusOutside", c)),
          onInteractOutside: d[3] || (d[3] = (c) => n("interactOutside", c)),
          onPointerDownOutside: d[4] || (d[4] = (c) => n("pointerDownOutside", c))
        }), {
          default: f(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), mc = /* @__PURE__ */ w({
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
    const a = e, n = t, o = Ye(), s = Ot(n), { forwardRef: r, currentElement: i } = N();
    return Oa(i), (d, c) => (v(), y($s, S({ ...a, ...l(s) }, {
      ref: l(r),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: c[0] || (c[0] = (u) => {
        var p;
        u.defaultPrevented || (u.preventDefault(), (p = l(o).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: c[1] || (c[1] = (u) => {
        const p = u.detail.originalEvent, g = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || g) && u.preventDefault();
      }),
      onFocusOutside: c[2] || (c[2] = (u) => {
        u.preventDefault();
      })
    }), {
      default: f(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), hc = /* @__PURE__ */ w({
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
    const a = e, n = Ot(t);
    N();
    const o = Ye(), s = T(!1), r = T(!1);
    return (i, d) => (v(), y($s, S({ ...a, ...l(n) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var u;
        c.defaultPrevented || (s.value || (u = l(o).triggerElement.value) == null || u.focus(), c.preventDefault()), s.value = !1, r.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        var u;
        c.defaultPrevented || (s.value = !0, c.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const p = c.target;
        (u = l(o).triggerElement.value) != null && u.contains(p) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && r.value && c.preventDefault();
      })
    }), {
      default: f(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ks = /* @__PURE__ */ w({
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
    const a = e, n = t, o = Ye(), s = Ot(n), { forwardRef: r } = N();
    return (i, d) => (v(), y(l(Me), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), y(mc, S({
          key: 0,
          ref: l(r)
        }, { ...a, ...l(s), ...i.$attrs }), {
          default: f(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), y(hc, S({
          key: 1,
          ref: l(r)
        }, { ...a, ...l(s), ...i.$attrs }), {
          default: f(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), gc = /* @__PURE__ */ w({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ye();
    return Da(!0), N(), (a, n) => (v(), y(l(F), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": l(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Bs = /* @__PURE__ */ w({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ye(), { forwardRef: a } = N();
    return (n, o) => {
      var s;
      return (s = l(t)) != null && s.modal.value ? (v(), y(l(Me), {
        key: 0,
        present: n.forceMount || l(t).open.value
      }, {
        default: f(() => [
          P(gc, S(n.$attrs, {
            ref: l(a),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: f(() => [
              x(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : Q("", !0);
    };
  }
}), Oo = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const a = Ye();
    return (n, o) => (v(), y(l(F), S(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (s) => l(a).onOpenChange(!1))
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), yc = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, a = Ye();
    return N(), (n, o) => (v(), y(l(F), S(t, {
      id: l(a).titleId
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), bc = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    N();
    const a = Ye();
    return (n, o) => (v(), y(l(F), S(t, {
      id: l(a).descriptionId
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function wc(e) {
  function t(n) {
    return Array.isArray(e.date.value) ? e.date.value.some((o) => xe(o, n)) : e.date.value ? xe(e.date.value, n) : !1;
  }
  const a = $(
    () => {
      var n, o, s, r;
      if (Array.isArray(e.date.value)) {
        if (!e.date.value.length)
          return !1;
        for (const i of e.date.value)
          if ((n = e.isDateDisabled) != null && n.call(e, i) || (o = e.isDateUnavailable) != null && o.call(e, i))
            return !0;
      } else {
        if (!e.date.value)
          return !1;
        if ((s = e.isDateDisabled) != null && s.call(e, e.date.value) || (r = e.isDateUnavailable) != null && r.call(e, e.date.value))
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
function _c(e, t) {
  const a = t(e), n = a.compare(e), o = {};
  return n >= 7 && (o.day = 1), n >= ya(e) && (o.month = 1), a.set({ ...o });
}
function xc(e, t) {
  const a = t(e), n = e.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= ya(e) && (o.month = 13), a.set({ ...o });
}
function Cc(e, t) {
  return t(e);
}
function $c(e, t) {
  return t(e);
}
function Ds(e) {
  const t = Pu(e.locale.value), a = $(() => {
    const h = {
      calendar: e.placeholder.value.calendar.identifier
    };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (h.era = "short"), h;
  }), n = T(xt({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), o = $(() => n.value.map((h) => h.value));
  function s(h) {
    return !o.value.some((_) => Go(h, _));
  }
  const r = (h = "month", _) => {
    if (!e.maxValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[n.value.length - 1].value;
    if (_ || e.nextPage.value) {
      const k = _c(C, _ || e.nextPage.value);
      return ma(k, e.maxValue.value);
    }
    if (h === "year") {
      const k = C.add({ years: 1 }).set({ day: 1, month: 1 });
      return ma(k, e.maxValue.value);
    }
    const D = C.add({ months: 1 }).set({ day: 1 });
    return ma(D, e.maxValue.value);
  }, i = (h = "month", _) => {
    if (!e.minValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[0].value;
    if (_ || e.prevPage.value) {
      const k = xc(C, _ || e.prevPage.value);
      return mt(k, e.minValue.value);
    }
    if (h === "year") {
      const k = C.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return mt(k, e.minValue.value);
    }
    const D = C.subtract({ months: 1 }).set({ day: 35 });
    return mt(D, e.minValue.value);
  };
  function d(h) {
    var _;
    return !!((_ = e.isDateDisabled) != null && _.call(e, h) || e.disabled.value || e.maxValue.value && ma(h, e.maxValue.value) || e.minValue.value && mt(h, e.minValue.value));
  }
  const c = (h) => {
    var _;
    return !!((_ = e.isDateUnavailable) != null && _.call(e, h));
  }, u = $(() => n.value.length ? n.value[0].rows[0].map((h) => t.dayOfWeek(Ve(h), e.weekdayFormat.value)) : []), p = (h = "month", _) => {
    const C = n.value[0].value;
    if (_ || e.nextPage.value) {
      const O = Cc(C, _ || e.nextPage.value), E = xt({
        dateObj: O,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = E;
      const I = {};
      if (!_) {
        const M = E[0].value.compare(C);
        M >= ya(C) && (I.day = 1), M >= 365 && (I.month = 1);
      }
      e.placeholder.value = E[0].value.set({ ...I });
      return;
    }
    const D = h === "month" ? C.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.add({ years: 1 }), k = xt({
      dateObj: D,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = k, e.placeholder.value = k[0].value.set({ day: 1 });
  }, g = (h = "month", _) => {
    const C = n.value[0].value;
    if (_ || e.prevPage.value) {
      const O = $c(C, _ || e.prevPage.value), E = xt({
        dateObj: O,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = E;
      const I = {};
      if (!_) {
        const M = C.compare(E[0].value);
        M >= ya(C) && (I.day = 1), M >= 365 && (I.month = 1);
      }
      e.placeholder.value = E[0].value.set({ ...I });
      return;
    }
    const D = h === "month" ? C.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.subtract({ years: 1 }), k = xt({
      dateObj: D,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = k, e.placeholder.value = k[0].value.set({ day: 1 });
  };
  ee(e.placeholder, (h) => {
    o.value.some((_) => Go(_, h)) || (n.value = xt({
      dateObj: h,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), ee([e.locale, e.weekStartsOn, e.fixedWeeks, e.numberOfMonths], () => {
    n.value = xt({
      dateObj: e.placeholder.value,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
  });
  const m = $(() => {
    if (!n.value.length)
      return "";
    if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value), n.value.length === 1) {
      const E = n.value[0].value;
      return `${t.fullMonthAndYear(Ve(E), a.value)}`;
    }
    const h = Ve(n.value[0].value), _ = Ve(n.value[n.value.length - 1].value), C = t.fullMonth(h, a.value), D = t.fullMonth(_, a.value), k = t.fullYear(h, a.value), O = t.fullYear(_, a.value);
    return k === O ? `${C} - ${D} ${O}` : `${C} ${k} - ${D} ${O}`;
  }), b = $(() => `${e.calendarLabel.value ?? "Event Date"}, ${m.value}`);
  return {
    isDateDisabled: d,
    isDateUnavailable: c,
    isNextButtonDisabled: r,
    isPrevButtonDisabled: i,
    grid: n,
    weekdays: u,
    visibleView: o,
    isOutsideVisibleView: s,
    formatter: t,
    nextPage: p,
    prevPage: g,
    headingValue: m,
    fullCalendarLabel: b
  };
}
const kc = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Bc = {
  role: "heading",
  "aria-level": "2"
}, [aa, Dc] = le("CalendarRoot"), Pc = /* @__PURE__ */ w({
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
      disabled: s,
      readonly: r,
      initialFocus: i,
      pagedNavigation: d,
      weekStartsOn: c,
      weekdayFormat: u,
      fixedWeeks: p,
      multiple: g,
      minValue: m,
      maxValue: b,
      numberOfMonths: h,
      preventDeselect: _,
      isDateDisabled: C,
      isDateUnavailable: D,
      calendarLabel: k,
      defaultValue: O,
      nextPage: E,
      prevPage: I,
      dir: M
    } = de(a), { primitiveElement: L, currentElement: V } = Et(), B = it(M), A = pe(a, "modelValue", n, {
      defaultValue: O.value,
      passive: a.modelValue === void 0
    }), R = cs({
      defaultPlaceholder: a.placeholder,
      defaultValue: A.value
    }), G = pe(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? R.copy(),
      passive: a.placeholder === void 0
    });
    function j(se) {
      G.value = se.copy();
    }
    const {
      fullCalendarLabel: W,
      headingValue: q,
      isDateDisabled: oe,
      isDateUnavailable: ce,
      isNextButtonDisabled: me,
      isPrevButtonDisabled: ke,
      weekdays: ye,
      isOutsideVisibleView: ia,
      nextPage: _t,
      prevPage: da,
      formatter: dt,
      grid: ua
    } = Ds({
      locale: o,
      placeholder: G,
      weekStartsOn: c,
      fixedWeeks: p,
      numberOfMonths: h,
      minValue: m,
      maxValue: b,
      disabled: s,
      weekdayFormat: u,
      pagedNavigation: d,
      isDateDisabled: C.value,
      isDateUnavailable: D.value,
      calendarLabel: k,
      nextPage: E,
      prevPage: I
    }), {
      isInvalid: Oe,
      isDateSelected: Be
    } = wc({
      date: A,
      isDateDisabled: oe,
      isDateUnavailable: ce
    });
    ee(A, (se) => {
      if (Array.isArray(se) && se.length) {
        const $e = se[se.length - 1];
        $e && !ze(G.value, $e) && j($e);
      } else !Array.isArray(se) && se && !ze(G.value, se) && j(se);
    });
    function Ne(se) {
      if (g.value) {
        if (!A.value)
          A.value = [se.copy()];
        else if (Array.isArray(A.value)) {
          if (A.value.findIndex(($e) => xe($e, se)) === -1)
            A.value = [...A.value, se];
          else if (!_.value) {
            const $e = A.value.filter((Ze) => !xe(Ze, se));
            if (!$e.length) {
              G.value = se.copy(), A.value = void 0;
              return;
            }
            A.value = $e.map((Ze) => Ze.copy());
          }
        }
      } else {
        if (!A.value) {
          A.value = se.copy();
          return;
        }
        !_.value && ze(A.value, se) ? (G.value = se.copy(), A.value = void 0) : A.value = se.copy();
      }
    }
    return ie(() => {
      i.value && ps(V.value);
    }), Dc({
      isDateUnavailable: ce,
      dir: B,
      isDateDisabled: oe,
      locale: o,
      formatter: dt,
      modelValue: A,
      placeholder: G,
      disabled: s,
      initialFocus: i,
      pagedNavigation: d,
      weekStartsOn: c,
      weekdayFormat: u,
      fixedWeeks: p,
      multiple: g,
      numberOfMonths: h,
      readonly: r,
      preventDeselect: _,
      fullCalendarLabel: W,
      headingValue: q,
      isInvalid: Oe,
      isDateSelected: Be,
      isNextButtonDisabled: me,
      isPrevButtonDisabled: ke,
      isOutsideVisibleView: ia,
      nextPage: _t,
      prevPage: da,
      parentElement: V,
      onPlaceholderChange: j,
      onDateChange: Ne
    }), (se, $e) => (v(), y(l(F), {
      ref_key: "primitiveElement",
      ref: L,
      as: se.as,
      "as-child": se.asChild,
      role: "application",
      "aria-label": l(W),
      "data-readonly": l(r) ? "" : void 0,
      "data-disabled": l(s) ? "" : void 0,
      "data-invalid": l(Oe) ? "" : void 0,
      dir: l(B)
    }, {
      default: f(() => [
        x(se.$slots, "default", {
          date: l(G),
          grid: l(ua),
          weekDays: l(ye),
          weekStartsOn: l(c),
          locale: l(o),
          fixedWeeks: l(p)
        }),
        ue("div", kc, [
          ue("div", Bc, X(l(W)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), Oc = /* @__PURE__ */ w({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(F), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ec = /* @__PURE__ */ w({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = aa();
    return (n, o) => (v(), y(l(F), S(t, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        x(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          Y(X(l(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Sc = /* @__PURE__ */ w({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = aa(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), y(l(F), S(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Tc = /* @__PURE__ */ w({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = aa();
    return (a, n) => {
      var o, s;
      return v(), y(l(F), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": l(t).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": l(t).isDateDisabled(a.date) || ((s = (o = l(t)).isDateUnavailable) == null ? void 0 : s.call(o, a.date)),
        "data-disabled": l(t).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
          x(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Mc = /* @__PURE__ */ w({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(F), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ac = /* @__PURE__ */ w({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = aa();
    return (o, s) => (v(), y(l(F), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).nextPage(t.step, t.nextPage))
    }, {
      default: f(() => [
        x(o.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Ic = /* @__PURE__ */ w({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = aa();
    return (o, s) => (v(), y(l(F), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).prevPage(t.step, t.prevPage))
    }, {
      default: f(() => [
        x(o.$slots, "default", {}, () => [
          Y("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Rc = /* @__PURE__ */ w({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(F), S(t, { "aria-hidden": "true" }), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vc = /* @__PURE__ */ w({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(F), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fc = /* @__PURE__ */ w({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(F), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lc = /* @__PURE__ */ w({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = ws(), n = aa(), { primitiveElement: o, currentElement: s } = Et(), r = $(() => t.day.day.toLocaleString(n.locale.value)), i = $(() => n.formatter.custom(Ve(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), d = $(() => n.isDateDisabled(t.day)), c = $(
      () => {
        var k;
        return (k = n.isDateUnavailable) == null ? void 0 : k.call(n, t.day);
      }
    ), u = $(() => Wl(t.day, Bt())), p = $(() => !zl(t.day, t.month)), g = $(
      () => n.isOutsideVisibleView(t.day)
    ), m = $(() => !n.disabled.value && xe(t.day, n.placeholder.value)), b = $(() => n.isDateSelected(t.day)), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function _(k) {
      var O;
      n.readonly.value || n.isDateDisabled(k) || (O = n.isDateUnavailable) != null && O.call(n, k) || n.onDateChange(k);
    }
    function C() {
      _(t.day);
    }
    function D(k) {
      k.preventDefault(), k.stopPropagation();
      const O = n.parentElement.value, E = O ? Array.from(O.querySelectorAll(h)) : [];
      let I = E.indexOf(s.value);
      const M = 7, L = n.dir.value === "rtl" ? -1 : 1;
      switch (k.code) {
        case a.ARROW_RIGHT:
          I += L;
          break;
        case a.ARROW_LEFT:
          I -= L;
          break;
        case a.ARROW_UP:
          I -= M;
          break;
        case a.ARROW_DOWN:
          I += M;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          _(t.day);
          return;
        default:
          return;
      }
      if (I >= 0 && I < E.length) {
        E[I].focus();
        return;
      }
      if (I < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), ae(() => {
          const V = O ? Array.from(O.querySelectorAll(h)) : [];
          V[V.length - Math.abs(I)].focus();
        });
        return;
      }
      if (I >= E.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), ae(() => {
          (O ? Array.from(O.querySelectorAll(h)) : [])[I - E.length].focus();
        });
      }
    }
    return (k, O) => (v(), y(l(F), S({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": p.value || d.value || c.value ? !0 : void 0,
      "data-selected": b.value ? !0 : void 0,
      "data-value": k.day.toString(),
      "data-disabled": d.value || p.value ? "" : void 0,
      "data-unavailable": c.value ? "" : void 0,
      "data-today": u.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": g.value ? "" : void 0,
      "data-focused": m.value ? "" : void 0,
      tabindex: m.value ? 0 : p.value || d.value ? void 0 : -1,
      onClick: C,
      onKeydown: [
        Ke(D, ["up", "down", "left", "right", "space", "enter"]),
        O[0] || (O[0] = Ke(be(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: f(() => [
        x(k.$slots, "default", { dayValue: r.value }, () => [
          Y(X(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function en(e) {
  return e === "indeterminate";
}
function Ps(e) {
  return en(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Nc = ["value", "checked", "name", "disabled", "required"], [zc, Wc] = le("CheckboxRoot"), Kc = /* @__PURE__ */ w({
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
    const a = e, n = t, { disabled: o } = de(a), s = pe(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    }), { forwardRef: r, currentElement: i } = N(), d = Pa(i), c = $(() => {
      var u;
      return a.id && i.value ? (u = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : u.innerText : void 0;
    });
    return Wc({
      disabled: o,
      state: s
    }), (u, p) => (v(), K(J, null, [
      P(l(F), S(u.$attrs, {
        id: u.id,
        ref: l(r),
        role: "checkbox",
        "as-child": a.asChild,
        as: u.as,
        type: u.as === "button" ? "button" : void 0,
        "aria-checked": l(en)(l(s)) ? "mixed" : l(s),
        "aria-required": !1,
        "aria-label": u.$attrs["aria-label"] || c.value,
        "data-state": l(Ps)(l(s)),
        "data-disabled": l(o) ? "" : void 0,
        disabled: l(o),
        onKeydown: Ke(be(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (g) => s.value = l(en)(l(s)) ? !0 : !l(s))
      }), {
        default: f(() => [
          x(u.$slots, "default", { checked: l(s) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      l(d) ? (v(), K("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "true",
        value: u.value,
        checked: !!l(s),
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
      }, null, 8, Nc)) : Q("", !0)
    ], 64));
  }
}), Uc = /* @__PURE__ */ w({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = N(), a = zc();
    return (n, o) => (v(), y(l(Me), {
      present: n.forceMount || l(en)(l(a).state.value) || l(a).state.value === !0
    }, {
      default: f(() => [
        P(l(F), S({
          ref: l(t),
          "data-state": l(Ps)(l(a).state.value),
          "data-disabled": l(a).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: f(() => [
            x(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Os, Hc] = le("PopperRoot"), na = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = T();
    return Hc({
      anchor: t,
      onAnchorChange: (a) => t.value = a
    }), (a, n) => x(a.$slots, "default");
  }
}), pn = /* @__PURE__ */ w({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = N(), o = Os();
    return ge(() => {
      o.onAnchorChange(t.element ?? n.value);
    }), (s, r) => (v(), y(l(F), {
      ref: l(a),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function jc(e) {
  return e !== null;
}
function Gc(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var a, n, o;
      const { placement: s, rects: r, middlewareData: i } = t, d = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, c = d ? 0 : e.arrowWidth, u = d ? 0 : e.arrowHeight, [p, g] = Gn(s), m = { start: "0%", center: "50%", end: "100%" }[g], b = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + c / 2, h = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + u / 2;
      let _ = "", C = "";
      return p === "bottom" ? (_ = d ? m : `${b}px`, C = `${-u}px`) : p === "top" ? (_ = d ? m : `${b}px`, C = `${r.floating.height + u}px`) : p === "right" ? (_ = `${-u}px`, C = d ? m : `${h}px`) : p === "left" && (_ = `${r.floating.width + u}px`, C = d ? m : `${h}px`), { data: { x: _, y: C } };
    }
  };
}
function Gn(e) {
  const [t, a = "center"] = e.split("-");
  return [t, a];
}
const Es = {
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
}, [dy, qc] = le("PopperContent"), qt = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Tl({
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
    ...Es
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Os(), { forwardRef: s, currentElement: r } = N(), i = T(), d = T(), { width: c, height: u } = bs(d), p = $(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), g = $(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = $(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), b = $(() => ({
      padding: g.value,
      boundary: m.value.filter(jc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), h = lu(() => [
      jd({
        mainAxis: a.sideOffset + u.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && sl({
        ...b.value
      }),
      a.avoidCollisions && Gd({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? Zd() : void 0,
        ...b.value
      }),
      !a.prioritizePosition && a.avoidCollisions && sl({
        ...b.value
      }),
      qd({
        ...b.value,
        apply: ({ elements: B, rects: A, availableWidth: R, availableHeight: G }) => {
          const { width: j, height: W } = A.reference, q = B.floating.style;
          q.setProperty(
            "--radix-popper-available-width",
            `${R}px`
          ), q.setProperty(
            "--radix-popper-available-height",
            `${G}px`
          ), q.setProperty(
            "--radix-popper-anchor-width",
            `${j}px`
          ), q.setProperty(
            "--radix-popper-anchor-height",
            `${W}px`
          );
        }
      }),
      d.value && eu({ element: d.value, padding: a.arrowPadding }),
      Gc({
        arrowWidth: c.value,
        arrowHeight: u.value
      }),
      a.hideWhenDetached && Yd({ strategy: "referenceHidden", ...b.value })
    ]), { floatingStyles: _, placement: C, isPositioned: D, middlewareData: k } = tu(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...B) => Hd(...B, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: h
      }
    ), O = $(
      () => Gn(C.value)[0]
    ), E = $(
      () => Gn(C.value)[1]
    );
    Vr(() => {
      D.value && n("placed");
    });
    const I = $(
      () => {
        var B;
        return ((B = k.value.arrow) == null ? void 0 : B.centerOffset) !== 0;
      }
    ), M = T("");
    ge(() => {
      r.value && (M.value = window.getComputedStyle(r.value).zIndex);
    });
    const L = $(() => {
      var B;
      return ((B = k.value.arrow) == null ? void 0 : B.x) ?? 0;
    }), V = $(() => {
      var B;
      return ((B = k.value.arrow) == null ? void 0 : B.y) ?? 0;
    });
    return qc({
      placedSide: O,
      onArrowChange: (B) => d.value = B,
      arrowX: L,
      arrowY: V,
      shouldHideArrow: I
    }), (B, A) => {
      var R, G, j;
      return v(), K("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Zt({
          ...l(_),
          transform: l(D) ? l(_).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: M.value,
          "--radix-popper-transform-origin": [
            (R = l(k).transformOrigin) == null ? void 0 : R.x,
            (G = l(k).transformOrigin) == null ? void 0 : G.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((j = l(k).hide) == null ? void 0 : j.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        P(l(F), S({ ref: l(s) }, B.$attrs, {
          "as-child": a.asChild,
          as: B.as,
          "data-side": O.value,
          "data-align": E.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l(D) ? void 0 : "none"
          }
        }), {
          default: f(() => [
            x(B.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Sa = /* @__PURE__ */ w({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return N(), (t, a) => (v(), y(l(F), {
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
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Yc = /* @__PURE__ */ w({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, a = $(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${o}][${t.name}][${s}]`, value: r })) : { name: `[${t.name}][${o}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, o]) => ({ name: `[${t.name}][${n}]`, value: o })) : []);
    return (n, o) => (v(!0), K(J, null, he(a.value, (s) => (v(), y(Sa, {
      key: s.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: s.name,
      value: s.value,
      required: n.required,
      disabled: n.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), Xc = "data-radix-vue-collection-item", [Eo, Zc] = le("CollectionProvider");
function So(e = Xc) {
  const t = T(/* @__PURE__ */ new Map()), a = T(), n = Zc({
    collectionRef: a,
    itemMap: t,
    attrName: e
  }), { getItems: o } = Mo(n), s = $(() => Array.from(n.itemMap.value.values())), r = $(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: s, itemMapSize: r };
}
const To = w({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const a = Eo(), { primitiveElement: n, currentElement: o } = Et();
    return ee(o, () => {
      a.collectionRef.value = o.value;
    }), () => We(ko, { ref: n }, t);
  }
}), fn = w({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: a }) {
    const n = Eo(), { primitiveElement: o, currentElement: s } = Et();
    return ge((r) => {
      if (s.value) {
        const i = Pr(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: e.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => We(ko, { ...a, [n.attrName]: "", ref: o }, t);
  }
});
function Mo(e) {
  const t = e ?? Eo();
  return { getItems: () => {
    const a = t.collectionRef.value;
    if (!a)
      return [];
    const n = Array.from(a.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (o, s) => n.indexOf(o.ref) - n.indexOf(s.ref)
    );
  } };
}
const [oa, Jc] = le("ComboboxRoot"), Qc = /* @__PURE__ */ w({
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
    const a = e, n = t, { multiple: o, disabled: s, dir: r } = de(a), i = it(r), d = pe(a, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: a.searchTerm === void 0
    }), c = pe(a, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: a.defaultValue ?? o.value ? [] : void 0,
      passive: a.modelValue === void 0,
      deep: !0
    }), u = pe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), p = pe(a, "selectedValue", n, {
      defaultValue: void 0,
      passive: a.selectedValue === void 0
    });
    async function g(W) {
      var q, oe;
      u.value = W, await ae(), W ? (c.value && (Array.isArray(c.value) && o.value ? p.value = (q = k().find((ce) => {
        var me, ke;
        return ((ke = (me = ce.ref) == null ? void 0 : me.dataset) == null ? void 0 : ke.state) === "checked";
      })) == null ? void 0 : q.value : p.value = c.value), await ae(), (oe = h.value) == null || oe.focus(), G()) : (b.value = !1, a.resetSearchTermOnBlur && L());
    }
    function m(W) {
      if (Array.isArray(c.value) && o.value) {
        const q = c.value.findIndex((ce) => Ct(ce, W)), oe = [...c.value];
        q === -1 ? oe.push(W) : oe.splice(q, 1), c.value = oe;
      } else
        c.value = W, g(!1);
    }
    const b = T(!1), h = T(), _ = T(), { forwardRef: C, currentElement: D } = N(), { getItems: k, reactiveItems: O, itemMapSize: E } = So("data-radix-vue-combobox-item"), I = T([]);
    ee(() => E.value, () => {
      I.value = k().map((W) => W.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const M = $(() => {
      if (b.value) {
        if (a.filterFunction)
          return a.filterFunction(I.value, d.value);
        const W = I.value.filter((q) => typeof q == "string");
        if (W.length)
          return W.filter((q) => {
            var oe;
            return q.toLowerCase().includes((oe = d.value) == null ? void 0 : oe.toLowerCase());
          });
      }
      return I.value;
    });
    function L() {
      !o.value && c.value && !Array.isArray(c.value) ? a.displayValue ? d.value = a.displayValue(c.value) : typeof c.value != "object" ? d.value = c.value.toString() : d.value = "" : d.value = "";
    }
    const V = $(() => M.value.findIndex((W) => Ct(W, p.value))), B = $(() => {
      var W;
      return (W = O.value.find((q) => Ct(q.value, p.value))) == null ? void 0 : W.ref;
    }), A = $(() => JSON.stringify(c.value));
    ee(A, async () => {
      await ae(), await ae(), L();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), ee(() => [M.value.length, d.value.length], async ([W, q], [oe, ce]) => {
      await ae(), await ae(), W && (ce > q || V.value === -1) && (p.value = M.value[0]);
    });
    const R = Pa(D);
    function G() {
      var W;
      B.value instanceof Element && ((W = B.value) == null || W.scrollIntoView({ block: "nearest" }));
    }
    function j() {
      B.value instanceof Element && B.value.focus && B.value.focus();
    }
    return Jc({
      searchTerm: d,
      modelValue: c,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: b,
      multiple: o,
      disabled: s,
      open: u,
      onOpenChange: g,
      filteredOptions: M,
      contentId: "",
      inputElement: h,
      selectedElement: B,
      onInputElementChange: (W) => h.value = W,
      onInputNavigation: async (W) => {
        const q = V.value;
        q === 0 && W === "up" || q === M.value.length - 1 && W === "down" || (q === -1 && M.value.length || W === "home" ? p.value = M.value[0] : W === "end" ? p.value = M.value[M.value.length - 1] : p.value = M.value[W === "up" ? q - 1 : q + 1], await ae(), G(), j(), ae(() => {
          var oe;
          return (oe = h.value) == null ? void 0 : oe.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async (W) => {
        var q;
        M.value.length && p.value && B.value instanceof Element && (W.preventDefault(), W.stopPropagation(), (q = B.value) == null || q.click());
      },
      selectedValue: p,
      onSelectedValueChange: (W) => p.value = W,
      parentElement: D,
      contentElement: _,
      onContentElementChange: (W) => _.value = W
    }), (W, q) => (v(), y(l(na), null, {
      default: f(() => [
        P(l(F), S({
          ref: l(C),
          style: {
            pointerEvents: l(u) ? "auto" : void 0
          },
          as: W.as,
          "as-child": W.asChild,
          dir: l(i)
        }, W.$attrs), {
          default: f(() => [
            x(W.$slots, "default", {
              open: l(u),
              modelValue: l(c)
            }),
            l(R) && a.name ? (v(), y(l(Yc), {
              key: 0,
              name: a.name,
              value: l(c)
            }, null, 8, ["name", "value"])) : Q("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), ep = /* @__PURE__ */ w({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, a = oa(), { forwardRef: n, currentElement: o } = N();
    ie(() => {
      const u = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      u && (a.onInputElementChange(u), setTimeout(() => {
        t.autoFocus && (u == null || u.focus());
      }, 1));
    });
    const s = $(() => t.disabled || a.disabled.value || !1), r = T();
    Or(() => {
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
    return (u, p) => (v(), y(l(F), {
      ref: l(n),
      as: u.as,
      "as-child": u.asChild,
      type: u.type,
      disabled: s.value,
      value: l(a).searchTerm.value,
      "aria-expanded": l(a).open.value,
      "aria-controls": l(a).contentId,
      "aria-disabled": s.value ?? void 0,
      "aria-activedescendant": r.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: c,
      onKeydown: [
        Ke(be(i, ["prevent"]), ["down", "up"]),
        Ke(l(a).onInputEnter, ["enter"]),
        Ke(be(d, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: f(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), [Ss, tp] = le("ComboboxGroup"), ap = /* @__PURE__ */ w({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: a, currentElement: n } = N(), o = we(void 0, "radix-vue-combobox-group"), s = oa(), r = T(!1);
    function i() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!d.length;
    }
    return yu(n, () => {
      ae(() => {
        i();
      });
    }, { childList: !0 }), ee(() => s.searchTerm.value, () => {
      ae(() => {
        i();
      });
    }, { immediate: !0 }), tp({
      id: o
    }), (d, c) => Xt((v(), y(l(F), S(t, {
      ref_key: "currentRef",
      ref: a,
      role: "group",
      "aria-labelledby": l(o)
    }), {
      default: f(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [eo, r.value]
    ]);
  }
}), np = /* @__PURE__ */ w({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    N();
    const a = Ss({ id: "" });
    return (n, o) => (v(), y(l(F), S(t, {
      id: l(a).id
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [uy, op] = le("ComboboxContent"), lp = /* @__PURE__ */ w({
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
    const a = e, n = t, { position: o } = de(a), s = oa();
    Da(a.bodyLock);
    const { forwardRef: r, currentElement: i } = N();
    Oa(s.parentElement);
    const d = $(() => a.position === "popper" ? a : {}), c = ne(d.value);
    function u(g) {
      s.onSelectedValueChange("");
    }
    ie(() => {
      s.onContentElementChange(i.value);
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
    return op({ position: o }), (g, m) => (v(), y(l(To), null, {
      default: f(() => [
        g.dismissable ? (v(), y(l(ta), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": g.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (b) => l(s).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (b) => {
            var h;
            (h = l(s).parentElement.value) != null && h.contains(b.target) && b.preventDefault(), n("focusOutside", b);
          }),
          onInteractOutside: m[2] || (m[2] = (b) => n("interactOutside", b)),
          onEscapeKeyDown: m[3] || (m[3] = (b) => n("escapeKeyDown", b)),
          onPointerDownOutside: m[4] || (m[4] = (b) => {
            var h;
            (h = l(s).parentElement.value) != null && h.contains(b.target) && b.preventDefault(), n("pointerDownOutside", b);
          })
        }, {
          default: f(() => [
            (v(), y(Se(l(o) === "popper" ? l(qt) : l(F)), S({ ...g.$attrs, ...l(c) }, {
              id: l(s).contentId,
              ref: l(r),
              role: "listbox",
              "data-state": l(s).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...l(o) === "popper" ? p : {}
              },
              onPointerleave: u
            }), {
              default: f(() => [
                x(g.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (v(), y(Se(l(o) === "popper" ? l(qt) : l(F)), S({ key: 1 }, { ...g.$attrs, ...d.value }, {
          id: l(s).contentId,
          ref: l(r),
          role: "listbox",
          "data-state": l(s).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...l(o) === "popper" ? p : {}
          },
          onPointerleave: u
        }), {
          default: f(() => [
            x(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), sp = /* @__PURE__ */ w({
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
    const a = te(e, t), { forwardRef: n } = N(), o = oa();
    return o.contentId || (o.contentId = we(void 0, "radix-vue-combobox-content")), (s, r) => (v(), y(l(Me), {
      present: s.forceMount || l(o).open.value
    }, {
      default: f(() => [
        P(lp, S({ ...l(a), ...s.$attrs }, { ref: l(n) }), {
          default: f(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), rp = /* @__PURE__ */ w({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    N();
    const a = oa(), n = $(() => a.filteredOptions.value.length === 0);
    return (o, s) => n.value ? (v(), y(l(F), U(S({ key: 0 }, t)), {
      default: f(() => [
        x(o.$slots, "default", {}, () => [
          Y("No options")
        ])
      ]),
      _: 3
    }, 16)) : Q("", !0);
  }
});
function ip(e) {
  const t = un({
    nonce: T()
  });
  return $(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.nonce) == null ? void 0 : a.value);
  });
}
const [cy, dp] = le("ComboboxItem"), up = "combobox.select", cp = /* @__PURE__ */ w({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { disabled: o } = de(a), s = oa();
    Ss({ id: "", options: T([]) });
    const { forwardRef: r } = N(), i = $(
      () => {
        var h, _;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (h = s.modelValue.value) == null ? void 0 : h.some((C) => Ct(C, a.value)) : Ct((_ = s.modelValue) == null ? void 0 : _.value, a.value);
      }
    ), d = $(() => Ct(s.selectedValue.value, a.value)), c = we(void 0, "radix-vue-combobox-item"), u = we(void 0, "radix-vue-combobox-option"), p = $(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((h) => Ct(h, a.value)) : !0);
    async function g(h) {
      n("select", h), !(h != null && h.defaultPrevented) && !o.value && h && s.onValueChange(a.value);
    }
    function m(h) {
      if (!h)
        return;
      const _ = { originalEvent: h, value: a.value };
      bo(up, g, _);
    }
    async function b(h) {
      await ae(), !h.defaultPrevented && s.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return dp({
      isSelected: i
    }), (h, _) => (v(), y(l(fn), { value: h.value }, {
      default: f(() => [
        Xt(P(l(F), {
          id: l(u),
          ref: l(r),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": l(c),
          "data-highlighted": d.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": l(o) || void 0,
          "data-disabled": l(o) ? "" : void 0,
          as: h.as,
          "as-child": h.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: m,
          onPointermove: b
        }, {
          default: f(() => [
            x(h.$slots, "default", {}, () => [
              Y(X(h.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [eo, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), pp = /* @__PURE__ */ w({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), y(l(F), S(t, { "aria-hidden": "true" }), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ts = /* @__PURE__ */ w({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(pn), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function fp() {
  const e = T(!1);
  return ie(() => {
    Gt("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Gt(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const vp = fs(fp), [St, Ms] = le(["MenuRoot", "MenuSub"], "MenuContext"), [Ta, mp] = le("MenuRoot"), hp = /* @__PURE__ */ w({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o, dir: s } = de(a), r = it(s), i = pe(a, "open", n), d = T(), c = vp();
    return Ms({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      content: d,
      onContentChange: (u) => {
        d.value = u;
      }
    }), mp({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: c,
      dir: r,
      modal: o
    }), (u, p) => (v(), y(l(na), null, {
      default: f(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), gp = "rovingFocusGroup.onEntryFocus", yp = { bubbles: !1, cancelable: !0 }, bp = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function wp(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function _p(e, t, a) {
  const n = wp(e.key, a);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return bp[n];
}
function As(e, t = !1, a) {
  const n = (a == null ? void 0 : a.activeElement) ?? document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n))
      return;
}
function xp(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
const [Cp, $p] = le("RovingFocusGroup"), Is = /* @__PURE__ */ w({
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
    const n = e, o = a, { loop: s, orientation: r, dir: i } = de(n), d = it(i), c = pe(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), u = T(!1), p = T(!1), g = T(0), { getItems: m } = So();
    function b(_) {
      const C = !p.value;
      if (_.currentTarget && _.target === _.currentTarget && C && !u.value) {
        const D = new CustomEvent(gp, yp);
        if (_.currentTarget.dispatchEvent(D), o("entryFocus", D), !D.defaultPrevented) {
          const k = m().map((M) => M.ref).filter((M) => M.dataset.disabled !== ""), O = k.find((M) => M.getAttribute("data-active") === "true"), E = k.find(
            (M) => M.id === c.value
          ), I = [O, E, ...k].filter(
            Boolean
          );
          As(I, n.preventScrollOnEntryFocus);
        }
      }
      p.value = !1;
    }
    function h() {
      setTimeout(() => {
        p.value = !1;
      }, 1);
    }
    return t({
      getItems: m
    }), $p({
      loop: s,
      dir: d,
      orientation: r,
      currentTabStopId: c,
      onItemFocus: (_) => {
        c.value = _;
      },
      onItemShiftTab: () => {
        u.value = !0;
      },
      onFocusableItemAdd: () => {
        g.value++;
      },
      onFocusableItemRemove: () => {
        g.value--;
      }
    }), (_, C) => (v(), y(l(To), null, {
      default: f(() => [
        P(l(F), {
          tabindex: u.value || g.value === 0 ? -1 : 0,
          "data-orientation": l(r),
          as: _.as,
          "as-child": _.asChild,
          dir: l(d),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (D) => p.value = !0),
          onMouseup: h,
          onFocus: b,
          onBlur: C[1] || (C[1] = (D) => u.value = !1)
        }, {
          default: f(() => [
            x(_.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), kp = /* @__PURE__ */ w({
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
    const t = e, a = Cp(), n = $(() => t.tabStopId || we()), o = $(
      () => a.currentTabStopId.value === n.value
    ), { getItems: s } = Mo(), { primitiveElement: r, currentElement: i } = Et(), d = $(() => {
      var u;
      return (u = i.value) == null ? void 0 : u.getRootNode();
    });
    ie(() => {
      t.focusable && a.onFocusableItemAdd();
    }), bt(() => {
      t.focusable && a.onFocusableItemRemove();
    });
    function c(u) {
      if (u.key === "Tab" && u.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (u.target !== u.currentTarget)
        return;
      const p = _p(
        u,
        a.orientation.value,
        a.dir.value
      );
      if (p !== void 0) {
        if (u.metaKey || u.ctrlKey || u.altKey || !t.allowShiftKey && u.shiftKey)
          return;
        u.preventDefault();
        let g = [...s().map((m) => m.ref).filter((m) => m.dataset.disabled !== "")];
        if (p === "last")
          g.reverse();
        else if (p === "prev" || p === "next") {
          p === "prev" && g.reverse();
          const m = g.indexOf(
            u.currentTarget
          );
          g = a.loop.value ? xp(g, m + 1) : g.slice(m + 1);
        }
        ae(() => As(g, !1, d.value));
      }
    }
    return (u, p) => (v(), y(l(fn), null, {
      default: f(() => [
        P(l(F), {
          ref_key: "primitiveElement",
          ref: r,
          tabindex: o.value ? 0 : -1,
          "data-orientation": l(a).orientation.value,
          "data-active": u.active,
          "data-disabled": u.focusable ? void 0 : "",
          as: u.as,
          "as-child": u.asChild,
          onMousedown: p[0] || (p[0] = (g) => {
            u.focusable ? l(a).onItemFocus(n.value) : g.preventDefault();
          }),
          onFocus: p[1] || (p[1] = (g) => l(a).onItemFocus(n.value)),
          onKeydown: c
        }, {
          default: f(() => [
            x(u.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [Ao, Bp] = le("MenuContent"), Io = /* @__PURE__ */ w({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Tl({
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
    ...Es
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = St(), s = Ta(), { trapFocus: r, disableOutsidePointerEvents: i, loop: d } = de(a);
    Co(), Da(i.value);
    const c = T(""), u = T(0), p = T(0), g = T(null), m = T("right"), b = T(0), h = T(null), { createCollection: _ } = ea(), { forwardRef: C, currentElement: D } = N(), k = _(D);
    ee(D, (B) => {
      o.onContentChange(B);
    });
    const { handleTypeaheadSearch: O } = $o(k);
    bt(() => {
      window.clearTimeout(u.value);
    });
    function E(B) {
      var A, R;
      return m.value === ((A = g.value) == null ? void 0 : A.side) && cc(B, (R = g.value) == null ? void 0 : R.area);
    }
    async function I(B) {
      var A;
      n("openAutoFocus", B), !B.defaultPrevented && (B.preventDefault(), (A = D.value) == null || A.focus({
        preventScroll: !0
      }));
    }
    function M(B) {
      if (B.defaultPrevented)
        return;
      const A = B.target.closest("[data-radix-menu-content]") === B.currentTarget, R = B.ctrlKey || B.altKey || B.metaKey, G = B.key.length === 1, j = _u(
        B,
        document.activeElement,
        D.value,
        {
          loop: d.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (j)
        return j == null ? void 0 : j.focus();
      if (B.code === "Space" || (A && (B.key === "Tab" && B.preventDefault(), !R && G && O(B.key)), B.target !== D.value) || !rc.includes(B.key))
        return;
      B.preventDefault();
      const W = k.value;
      Cs.includes(B.key) && W.reverse(), jn(W);
    }
    function L(B) {
      var A, R;
      (R = (A = B == null ? void 0 : B.currentTarget) == null ? void 0 : A.contains) != null && R.call(A, B.target) || (window.clearTimeout(u.value), c.value = "");
    }
    function V(B) {
      var A;
      if (!_a(B))
        return;
      const R = B.target, G = b.value !== B.clientX;
      if ((A = B == null ? void 0 : B.currentTarget) != null && A.contains(R) && G) {
        const j = B.clientX > b.value ? "right" : "left";
        m.value = j, b.value = B.clientX;
      }
    }
    return Bp({
      onItemEnter: (B) => !!E(B),
      onItemLeave: (B) => {
        var A;
        E(B) || ((A = D.value) == null || A.focus(), h.value = null);
      },
      onTriggerLeave: (B) => !!E(B),
      searchRef: c,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (B) => {
        g.value = B;
      }
    }), (B, A) => (v(), y(l(cn), {
      "as-child": "",
      trapped: l(r),
      onMountAutoFocus: I,
      onUnmountAutoFocus: A[7] || (A[7] = (R) => n("closeAutoFocus", R))
    }, {
      default: f(() => [
        P(l(ta), {
          "as-child": "",
          "disable-outside-pointer-events": l(i),
          onEscapeKeyDown: A[2] || (A[2] = (R) => n("escapeKeyDown", R)),
          onPointerDownOutside: A[3] || (A[3] = (R) => n("pointerDownOutside", R)),
          onFocusOutside: A[4] || (A[4] = (R) => n("focusOutside", R)),
          onInteractOutside: A[5] || (A[5] = (R) => n("interactOutside", R)),
          onDismiss: A[6] || (A[6] = (R) => n("dismiss"))
        }, {
          default: f(() => [
            P(l(Is), {
              "current-tab-stop-id": h.value,
              "onUpdate:currentTabStopId": A[0] || (A[0] = (R) => h.value = R),
              "as-child": "",
              orientation: "vertical",
              dir: l(s).dir.value,
              loop: l(d),
              onEntryFocus: A[1] || (A[1] = (R) => {
                n("entryFocus", R), l(s).isUsingKeyboardRef.value || R.preventDefault();
              })
            }, {
              default: f(() => [
                P(l(qt), {
                  ref: l(C),
                  role: "menu",
                  as: B.as,
                  "as-child": B.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(Do)(l(o).open.value),
                  dir: l(s).dir.value,
                  side: B.side,
                  "side-offset": B.sideOffset,
                  align: B.align,
                  "align-offset": B.alignOffset,
                  "avoid-collisions": B.avoidCollisions,
                  "collision-boundary": B.collisionBoundary,
                  "collision-padding": B.collisionPadding,
                  "arrow-padding": B.arrowPadding,
                  "prioritize-position": B.prioritizePosition,
                  sticky: B.sticky,
                  "hide-when-detached": B.hideWhenDetached,
                  onKeydown: M,
                  onBlur: L,
                  onPointermove: V
                }, {
                  default: f(() => [
                    x(B.$slots, "default")
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
}), Rs = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Ao(), { forwardRef: n } = N(), o = T(!1);
    async function s(i) {
      if (!i.defaultPrevented && _a(i)) {
        if (t.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function r(i) {
      await ae(), !i.defaultPrevented && _a(i) && a.onItemLeave(i);
    }
    return (i, d) => (v(), y(l(fn), null, {
      default: f(() => [
        P(l(F), S({
          ref: l(n),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || void 0,
          "data-disabled": i.disabled ? "" : void 0,
          "data-highlighted": o.value ? "" : void 0,
          onPointermove: s,
          onPointerleave: r,
          onFocus: d[0] || (d[0] = async (c) => {
            await ae(), !(c.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: d[1] || (d[1] = async (c) => {
            await ae(), !c.defaultPrevented && (o.value = !1);
          })
        }), {
          default: f(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), Ro = /* @__PURE__ */ w({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: s } = N(), r = Ta(), i = Ao(), d = T(!1);
    async function c() {
      const u = s.value;
      if (!a.disabled && u) {
        const p = new CustomEvent(lc, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await ae(), p.defaultPrevented ? d.value = !1 : r.onClose();
      }
    }
    return (u, p) => (v(), y(Rs, S(a, {
      ref: l(o),
      onClick: c,
      onPointerdown: p[0] || (p[0] = () => {
        d.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (g) => {
        var m;
        await ae(), !g.defaultPrevented && (d.value || (m = g.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (g) => {
        const m = l(i).searchRef.value !== "";
        u.disabled || m && g.key === " " || l(Hn).includes(g.key) && (g.currentTarget.click(), g.preventDefault());
      })
    }), {
      default: f(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Dp, Vs] = le(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Pp = /* @__PURE__ */ w({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Dp({
      checked: T(!1)
    });
    return (a, n) => (v(), y(l(Me), {
      present: a.forceMount || l(Qa)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: f(() => [
        P(l(F), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": l(Po)(l(t).checked.value)
        }, {
          default: f(() => [
            x(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Op = /* @__PURE__ */ w({
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
    const a = e, n = t, o = pe(a, "checked", n);
    return Vs({ checked: o }), (s, r) => (v(), y(Ro, S({ role: "menuitemcheckbox" }, a, {
      "aria-checked": l(Qa)(l(o)) ? "mixed" : l(o),
      "data-state": l(Po)(l(o)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), l(Qa)(l(o)) ? o.value = !0 : o.value = !l(o);
      })
    }), {
      default: f(() => [
        x(s.$slots, "default", { checked: l(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Ep = /* @__PURE__ */ w({
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
    const a = e, n = t, o = te(a, n), s = St(), { forwardRef: r, currentElement: i } = N();
    return Oa(i), (d, c) => (v(), y(Io, S(l(o), {
      ref: l(r),
      "trap-focus": l(s).open.value,
      "disable-outside-pointer-events": l(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (u) => l(s).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = be((u) => n("focusOutside", u), ["prevent"]))
    }), {
      default: f(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Sp = /* @__PURE__ */ w({
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
    const a = te(e, t), n = St();
    return (o, s) => (v(), y(Io, S(l(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (r) => l(n).onOpenChange(!1))
    }), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tp = /* @__PURE__ */ w({
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
    const a = te(e, t), n = St(), o = Ta();
    return (s, r) => (v(), y(l(Me), {
      present: s.forceMount || l(n).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), y(Ep, U(S({ key: 0 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), y(Sp, U(S({ key: 1 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Fs = /* @__PURE__ */ w({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(F), S({ role: "group" }, t), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mp = /* @__PURE__ */ w({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(F), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ap = /* @__PURE__ */ w({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Ea), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ip, Rp] = le("MenuRadioGroup"), Vp = /* @__PURE__ */ w({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = pe(a, "modelValue", t);
    return Rp({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, s) => (v(), y(Fs, U(H(a)), {
      default: f(() => [
        x(o.$slots, "default", { modelValue: l(n) })
      ]),
      _: 3
    }, 16));
  }
}), Fp = /* @__PURE__ */ w({
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
    const a = e, n = t, { value: o } = de(a), s = Ip(), r = $(
      () => s.modelValue.value === (o == null ? void 0 : o.value)
    );
    return Vs({ checked: r }), (i, d) => (v(), y(Ro, S({ role: "menuitemradio" }, a, {
      "aria-checked": r.value,
      "data-state": l(Po)(r.value),
      onSelect: d[0] || (d[0] = async (c) => {
        n("select", c), l(s).onValueChange(l(o));
      })
    }), {
      default: f(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Lp = /* @__PURE__ */ w({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(F), S(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ls, Np] = le("MenuSub"), zp = /* @__PURE__ */ w({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = pe(a, "open", t, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = St(), s = T(), r = T();
    return ge((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), Ms({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: r,
      onContentChange: (i) => {
        r.value = i;
      }
    }), Np({
      triggerId: "",
      contentId: "",
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, d) => (v(), y(l(na), null, {
      default: f(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Wp = /* @__PURE__ */ w({
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
    const a = te(e, t), n = St(), o = Ta(), s = Ls(), { forwardRef: r, currentElement: i } = N();
    return s.contentId || (s.contentId = we(void 0, "radix-vue-menu-sub-content")), (d, c) => (v(), y(l(Me), {
      present: d.forceMount || l(n).open.value
    }, {
      default: f(() => [
        P(Io, S(l(a), {
          id: l(s).contentId,
          ref: l(r),
          "aria-labelledby": l(s).triggerId,
          align: "start",
          side: l(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = be((u) => {
            var p;
            l(o).isUsingKeyboardRef.value && ((p = l(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = be(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (u) => {
            u.defaultPrevented || u.target !== l(s).trigger.value && l(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (u) => {
            l(o).onClose(), u.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (u) => {
            var p, g;
            const m = (p = u.currentTarget) == null ? void 0 : p.contains(u.target), b = l(dc)[l(o).dir.value].includes(u.key);
            m && b && (l(n).onOpenChange(!1), (g = l(s).trigger.value) == null || g.focus(), u.preventDefault());
          })
        }), {
          default: f(() => [
            x(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Kp = /* @__PURE__ */ w({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = St(), n = Ta(), o = Ls(), s = Ao(), r = T(null);
    o.triggerId || (o.triggerId = we(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    bt(() => {
      i();
    });
    function d(p) {
      !_a(p) || s.onItemEnter(p) || !t.disabled && !a.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function c(p) {
      var g, m;
      if (!_a(p))
        return;
      i();
      const b = (g = a.content.value) == null ? void 0 : g.getBoundingClientRect();
      if (b != null && b.width) {
        const h = (m = a.content.value) == null ? void 0 : m.dataset.side, _ = h === "right", C = _ ? -5 : 5, D = b[_ ? "left" : "right"], k = b[_ ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: D, y: b.top },
            { x: k, y: b.top },
            { x: k, y: b.bottom },
            { x: D, y: b.bottom }
          ],
          side: h
        }), window.clearTimeout(s.pointerGraceTimerRef.value), s.pointerGraceTimerRef.value = window.setTimeout(
          () => s.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (s.onTriggerLeave(p))
          return;
        s.onPointerGraceIntentChange(null);
      }
    }
    async function u(p) {
      var g;
      const m = s.searchRef.value !== "";
      t.disabled || m && p.key === " " || ic[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await ae(), (g = a.content.value) == null || g.focus(), p.preventDefault());
    }
    return (p, g) => (v(), y(Ts, { "as-child": "" }, {
      default: f(() => [
        P(Rs, S(t, {
          id: l(o).triggerId,
          ref: (m) => {
            var b;
            (b = l(o)) == null || b.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(a).open.value,
          "aria-controls": l(o).contentId,
          "data-state": l(Do)(l(a).open.value),
          onClick: g[0] || (g[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), l(a).open.value || l(a).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: c,
          onKeydown: u
        }), {
          default: f(() => [
            x(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [Ns, Up] = le("DropdownMenuRoot"), Hp = /* @__PURE__ */ w({
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
    N();
    const o = pe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), s = T(), { modal: r, dir: i } = de(a), d = it(i);
    return Up({
      open: o,
      onOpenChange: (c) => {
        o.value = c;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerId: "",
      triggerElement: s,
      contentId: "",
      modal: r,
      dir: d
    }), (c, u) => (v(), y(l(hp), {
      open: l(o),
      "onUpdate:open": u[0] || (u[0] = (p) => Ca(o) ? o.value = p : null),
      dir: l(d),
      modal: l(r)
    }, {
      default: f(() => [
        x(c.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), jp = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ns(), { forwardRef: n, currentElement: o } = N();
    return ie(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = we(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (v(), y(l(Ts), { "as-child": "" }, {
      default: f(() => [
        P(l(F), {
          id: l(a).triggerId,
          ref: l(n),
          type: s.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: s.as,
          "aria-haspopup": "menu",
          "aria-expanded": l(a).open.value,
          "aria-controls": l(a).open.value ? l(a).contentId : void 0,
          "data-disabled": s.disabled ? "" : void 0,
          disabled: s.disabled,
          "data-state": l(a).open.value ? "open" : "closed",
          onClick: r[0] || (r[0] = async (i) => {
            var d;
            !s.disabled && i.button === 0 && i.ctrlKey === !1 && ((d = l(a)) == null || d.onOpenToggle(), await ae(), l(a).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = Ke(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && l(a).onOpenToggle(), i.key === "ArrowDown" && l(a).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: f(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Gp = /* @__PURE__ */ w({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Ap), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qp = /* @__PURE__ */ w({
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
    const a = te(e, t);
    N();
    const n = Ns(), o = T(!1);
    function s(r) {
      r.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, r.preventDefault());
    }
    return n.contentId || (n.contentId = we(void 0, "radix-vue-dropdown-menu-content")), (r, i) => {
      var d;
      return v(), y(l(Tp), S(l(a), {
        id: l(n).contentId,
        "aria-labelledby": (d = l(n)) == null ? void 0 : d.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: s,
        onInteractOutside: i[0] || (i[0] = (c) => {
          var u;
          if (c.defaultPrevented) return;
          const p = c.detail.originalEvent, g = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || g;
          (!l(n).modal.value || m) && (o.value = !0), (u = l(n).triggerElement.value) != null && u.contains(c.target) && c.preventDefault();
        })
      }), {
        default: f(() => [
          x(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), zs = /* @__PURE__ */ w({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = Ot(t);
    return N(), (o, s) => (v(), y(l(Ro), U(H({ ...a, ...l(n) })), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yp = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), y(l(Fs), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xp = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), y(l(Lp), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zp = /* @__PURE__ */ w({
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
    const a = e, n = Ot(t);
    return N(), (o, s) => (v(), y(l(Op), U(H({ ...a, ...l(n) })), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ws = /* @__PURE__ */ w({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), y(l(Pp), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jp = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), y(l(Mp), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qp = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = Ot(t);
    return N(), (o, s) => (v(), y(l(Vp), U(H({ ...a, ...l(n) })), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ef = /* @__PURE__ */ w({
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
    const a = te(e, t);
    return N(), (n, o) => (v(), y(l(Fp), U(H(l(a))), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tf = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = pe(a, "open", t, {
      passive: a.open === void 0,
      defaultValue: a.defaultOpen ?? !1
    });
    return N(), (o, s) => (v(), y(l(zp), {
      open: l(n),
      "onUpdate:open": s[0] || (s[0] = (r) => Ca(n) ? n.value = r : null)
    }, {
      default: f(() => [
        x(o.$slots, "default", { open: l(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), af = /* @__PURE__ */ w({
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
    const a = te(e, t);
    return N(), (n, o) => (v(), y(l(Wp), S(l(a), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nf = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), y(l(Kp), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), of = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), y(l(F), S(t, {
      onMousedown: n[0] || (n[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [la, lf] = le("PaginationRoot"), sf = /* @__PURE__ */ w({
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
    const a = e, n = t, { siblingCount: o, disabled: s, showEdges: r } = de(a);
    N();
    const i = pe(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), d = $(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return lf({
      page: i,
      onPageChange(c) {
        i.value = c;
      },
      pageCount: d,
      siblingCount: o,
      disabled: s,
      showEdges: r
    }), (c, u) => (v(), y(l(F), {
      as: c.as,
      "as-child": c.asChild
    }, {
      default: f(() => [
        x(c.$slots, "default", {
          page: l(i),
          pageCount: d.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), rf = /* @__PURE__ */ w({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), y(l(F), S(t, { "data-type": "ellipsis" }), {
      default: f(() => [
        x(a.$slots, "default", {}, () => [
          Y("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), df = /* @__PURE__ */ w({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = la();
    return N(), (n, o) => (v(), y(l(F), S(t, {
      "aria-label": "First Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: l(a).page.value === 1 || l(a).disabled.value,
      onClick: o[0] || (o[0] = (s) => l(a).onPageChange(1))
    }), {
      default: f(() => [
        x(n.$slots, "default", {}, () => [
          Y("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), uf = /* @__PURE__ */ w({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = la();
    return N(), (n, o) => (v(), y(l(F), S(t, {
      "aria-label": "Last Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: l(a).page.value === l(a).pageCount.value || l(a).disabled.value,
      onClick: o[0] || (o[0] = (s) => l(a).onPageChange(l(a).pageCount.value))
    }), {
      default: f(() => [
        x(n.$slots, "default", {}, () => [
          Y("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function ft(e, t) {
  const a = t - e + 1;
  return Array.from({ length: a }, (n, o) => o + e);
}
function cf(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const Na = "ellipsis";
function pf(e, t, a, n) {
  const o = t, s = Math.max(e - a, 1), r = Math.min(e + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, t) - 2, d = s > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(s - 1) > 2, c = r < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - r) > 2;
    if (!d && c)
      return [...ft(1, i), Na, o];
    if (d && !c) {
      const u = ft(o - i + 1, o);
      return [1, Na, ...u];
    }
    if (d && c) {
      const u = ft(s, r);
      return [1, Na, ...u, Na, o];
    }
    return ft(1, o);
  } else {
    const i = a * 2 + 1;
    return t < i ? ft(1, o) : e <= a + 1 ? ft(1, i) : t - e <= a ? ft(t - i + 1, o) : ft(s, r);
  }
}
const ff = /* @__PURE__ */ w({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    N();
    const a = la(), n = $(() => cf(
      pf(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, s) => (v(), y(l(F), U(H(t)), {
      default: f(() => [
        x(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), py = /* @__PURE__ */ w({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const a = la(), n = $(() => a.page.value === t.value);
    return (o, s) => (v(), y(l(F), S(t, {
      "data-type": "page",
      "aria-label": `Page ${o.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: l(a).disabled.value,
      type: o.as === "button" ? "button" : void 0,
      onClick: s[0] || (s[0] = (r) => l(a).onPageChange(o.value))
    }), {
      default: f(() => [
        x(o.$slots, "default", {}, () => [
          Y(X(o.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), vf = /* @__PURE__ */ w({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const a = la();
    return (n, o) => (v(), y(l(F), S(t, {
      "aria-label": "Next Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: l(a).page.value === l(a).pageCount.value || l(a).disabled.value,
      onClick: o[0] || (o[0] = (s) => l(a).onPageChange(l(a).page.value + 1))
    }), {
      default: f(() => [
        x(n.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), mf = /* @__PURE__ */ w({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const a = la();
    return (n, o) => {
      var s;
      return v(), y(l(F), S(t, {
        "aria-label": "Previous Page",
        type: n.as === "button" ? "button" : void 0,
        disabled: l(a).page.value === 1 || ((s = l(a).disabled) == null ? void 0 : s.value),
        onClick: o[0] || (o[0] = (r) => l(a).onPageChange(l(a).page.value - 1))
      }), {
        default: f(() => [
          x(n.$slots, "default", {}, () => [
            Y("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
}), [Ma, hf] = le("PopoverRoot"), gf = /* @__PURE__ */ w({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o } = de(a), s = pe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = T(), i = T(!1);
    return hf({
      contentId: "",
      modal: o,
      open: s,
      onOpenChange: (d) => {
        s.value = d;
      },
      onOpenToggle: () => {
        s.value = !s.value;
      },
      triggerElement: r,
      hasCustomAnchor: i
    }), (d, c) => (v(), y(l(na), null, {
      default: f(() => [
        x(d.$slots, "default", { open: l(s) })
      ]),
      _: 3
    }));
  }
}), yf = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ma(), { forwardRef: n, currentElement: o } = N();
    return ie(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), y(Se(l(a).hasCustomAnchor.value ? l(F) : l(pn)), { "as-child": "" }, {
      default: f(() => [
        P(l(F), {
          ref: l(n),
          type: s.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": l(a).open.value,
          "aria-controls": l(a).contentId,
          "data-state": l(a).open.value ? "open" : "closed",
          as: s.as,
          "as-child": t.asChild,
          onClick: l(a).onOpenToggle
        }, {
          default: f(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), bf = /* @__PURE__ */ w({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Ea), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ks = /* @__PURE__ */ w({
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
    const a = e, n = t, o = ne(a), { forwardRef: s } = N(), r = Ma();
    return Co(), (i, d) => (v(), y(l(cn), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: d[6] || (d[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: f(() => [
        P(l(ta), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (c) => n("pointerDownOutside", c)),
          onInteractOutside: d[1] || (d[1] = (c) => n("interactOutside", c)),
          onEscapeKeyDown: d[2] || (d[2] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: d[3] || (d[3] = (c) => n("focusOutside", c)),
          onDismiss: d[4] || (d[4] = (c) => l(r).onOpenChange(!1))
        }, {
          default: f(() => [
            P(l(qt), S(l(o), {
              id: l(r).contentId,
              ref: l(s),
              "data-state": l(r).open.value ? "open" : "closed",
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
                x(i.$slots, "default")
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
}), wf = /* @__PURE__ */ w({
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
    const a = e, n = t, o = Ma(), s = T(!1);
    Da(!0);
    const r = te(a, n), { forwardRef: i, currentElement: d } = N();
    return Oa(d), (c, u) => (v(), y(Ks, S(l(r), {
      ref: l(i),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: u[0] || (u[0] = be(
        (p) => {
          var g;
          n("closeAutoFocus", p), s.value || (g = l(o).triggerElement.value) == null || g.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: u[1] || (u[1] = (p) => {
        n("pointerDownOutside", p);
        const g = p.detail.originalEvent, m = g.button === 0 && g.ctrlKey === !0, b = g.button === 2 || m;
        s.value = b;
      }),
      onFocusOutside: u[2] || (u[2] = be(() => {
      }, ["prevent"]))
    }), {
      default: f(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), _f = /* @__PURE__ */ w({
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
    const a = e, n = t, o = Ma(), s = T(!1), r = T(!1), i = te(a, n);
    return (d, c) => (v(), y(Ks, S(l(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (u) => {
        var p;
        n("closeAutoFocus", u), u.defaultPrevented || (s.value || (p = l(o).triggerElement.value) == null || p.focus(), u.preventDefault()), s.value = !1, r.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = async (u) => {
        var p;
        n("interactOutside", u), u.defaultPrevented || (s.value = !0, u.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const g = u.target;
        (p = l(o).triggerElement.value) != null && p.contains(g) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && r.value && u.preventDefault();
      })
    }), {
      default: f(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xf = /* @__PURE__ */ w({
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
    const a = e, n = t, o = Ma(), s = te(a, n), { forwardRef: r } = N();
    return o.contentId || (o.contentId = we(void 0, "radix-vue-popover-content")), (i, d) => (v(), y(l(Me), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), y(wf, S({ key: 0 }, l(s), { ref: l(r) }), {
          default: f(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), y(_f, S({ key: 1 }, l(s), { ref: l(r) }), {
          default: f(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function Cf(e) {
  const t = $(() => e.start.value ? !!e.isDateDisabled(e.start.value) : !1), a = $(() => e.end.value ? !!e.isDateDisabled(e.end.value) : !1), n = $(
    () => t.value || a.value ? !1 : !!(e.start.value && e.end.value && mt(e.end.value, e.start.value))
  ), o = (d) => e.start.value ? xe(e.start.value, d) : !1, s = (d) => e.end.value ? xe(e.end.value, d) : !1, r = (d) => e.start.value && xe(e.start.value, d) || e.end.value && xe(e.end.value, d) ? !0 : e.end.value && e.start.value ? rd(d, e.start.value, e.end.value) : !1, i = $(() => {
    if (e.start.value && e.end.value || !e.start.value || !e.focusedValue.value)
      return null;
    const d = mt(e.start.value, e.focusedValue.value), c = d ? e.start.value : e.focusedValue.value, u = d ? e.focusedValue.value : e.start.value;
    return xe(c.add({ days: 1 }), u) ? {
      start: c,
      end: u
    } : ud(c, u, e.isDateUnavailable, e.isDateDisabled) ? {
      start: c,
      end: u
    } : null;
  });
  return {
    isInvalid: n,
    isSelected: r,
    highlightedRange: i,
    isSelectionStart: o,
    isSelectionEnd: s,
    isHighlightedStart: (d) => !i.value || !i.value.start ? !1 : xe(i.value.start, d),
    isHighlightedEnd: (d) => !i.value || !i.value.end ? !1 : xe(i.value.end, d)
  };
}
const $f = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, kf = {
  role: "heading",
  "aria-level": "2"
}, [sa, Bf] = le("RangeCalendarRoot"), Df = /* @__PURE__ */ w({
  __name: "RangeCalendarRoot",
  props: {
    defaultPlaceholder: {},
    defaultValue: { default: () => ({ start: void 0, end: void 0 }) },
    modelValue: {},
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
  emits: ["update:modelValue", "update:placeholder", "update:startValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, {
      disabled: o,
      readonly: s,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: u,
      numberOfMonths: p,
      preventDeselect: g,
      isDateUnavailable: m,
      isDateDisabled: b,
      calendarLabel: h,
      maxValue: _,
      minValue: C,
      locale: D,
      dir: k,
      nextPage: O,
      prevPage: E
    } = de(a), { primitiveElement: I, currentElement: M } = Et(), L = it(k), V = T(), B = T(), A = pe(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), R = cs({
      defaultPlaceholder: a.placeholder,
      defaultValue: A.value.start
    }), G = T(A.value.start), j = T(A.value.end), W = pe(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? R.copy(),
      passive: a.placeholder === void 0
    });
    function q(fe) {
      W.value = fe.copy();
    }
    const {
      fullCalendarLabel: oe,
      headingValue: ce,
      isDateDisabled: me,
      isDateUnavailable: ke,
      isNextButtonDisabled: ye,
      isPrevButtonDisabled: ia,
      grid: _t,
      weekdays: da,
      isOutsideVisibleView: dt,
      nextPage: ua,
      prevPage: Oe,
      formatter: Be
    } = Ds({
      locale: D,
      placeholder: W,
      weekStartsOn: d,
      fixedWeeks: u,
      numberOfMonths: p,
      minValue: C,
      maxValue: _,
      disabled: o,
      weekdayFormat: c,
      pagedNavigation: i,
      isDateDisabled: b.value,
      isDateUnavailable: m.value,
      calendarLabel: h,
      nextPage: O,
      prevPage: E
    }), {
      isInvalid: Ne,
      isSelected: se,
      highlightedRange: $e,
      isSelectionStart: Ze,
      isSelectionEnd: ca,
      isHighlightedStart: kr,
      isHighlightedEnd: Br
    } = Cf({
      start: G,
      end: j,
      isDateDisabled: me,
      isDateUnavailable: ke,
      focusedValue: B
    });
    return ee(A, (fe) => {
      fe.start && (!G.value || !ze(G.value, fe.start)) && (G.value = fe.start.copy()), fe.end && (!j.value || !ze(j.value, fe.end)) && (j.value = fe.end.copy());
    }), ee(G, (fe) => {
      fe && !ze(fe, W.value) && q(fe), n("update:startValue", fe);
    }), ee([G, j], ([fe, ut]) => {
      const Ae = A.value;
      if (!(Ae && Ae.start && Ae.end && fe && ut && ze(Ae.start, fe) && ze(Ae.end, ut)))
        if (fe && ut) {
          if (Ae.start && Ae.end && ze(Ae.start, fe) && ze(Ae.end, ut))
            return;
          mt(ut, fe) ? A.value = {
            start: ut.copy(),
            end: fe.copy()
          } : A.value = {
            start: fe.copy(),
            end: ut.copy()
          };
        } else Ae.start && Ae.end && (A.value = {
          start: void 0,
          end: void 0
        });
    }), Bf({
      isDateUnavailable: ke,
      startValue: G,
      endValue: j,
      formatter: Be,
      modelValue: A,
      placeholder: W,
      disabled: o,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: u,
      numberOfMonths: p,
      readonly: s,
      preventDeselect: g,
      fullCalendarLabel: oe,
      headingValue: ce,
      isInvalid: Ne,
      isDateDisabled: me,
      highlightedRange: $e,
      focusedValue: B,
      lastPressedDateValue: V,
      isSelected: se,
      isSelectionEnd: ca,
      isSelectionStart: Ze,
      isNextButtonDisabled: ye,
      isPrevButtonDisabled: ia,
      isOutsideVisibleView: dt,
      nextPage: ua,
      prevPage: Oe,
      parentElement: M,
      onPlaceholderChange: q,
      locale: D,
      dir: L,
      isHighlightedStart: kr,
      isHighlightedEnd: Br
    }), ie(() => {
      r.value && ps(M.value);
    }), (fe, ut) => (v(), y(l(F), {
      ref_key: "primitiveElement",
      ref: I,
      as: fe.as,
      "as-child": fe.asChild,
      role: "application",
      "aria-label": l(oe),
      "data-readonly": l(s) ? "" : void 0,
      "data-disabled": l(o) ? "" : void 0,
      "data-invalid": l(Ne) ? "" : void 0,
      dir: l(L)
    }, {
      default: f(() => [
        ue("div", $f, [
          ue("div", kf, X(l(oe)), 1)
        ]),
        x(fe.$slots, "default", {
          date: l(W),
          grid: l(_t),
          weekDays: l(da),
          weekStartsOn: l(d),
          locale: l(D),
          fixedWeeks: l(u)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), Pf = /* @__PURE__ */ w({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(F), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Of = /* @__PURE__ */ w({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = sa();
    return (n, o) => (v(), y(l(F), S(t, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        x(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          Y(X(l(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Ef = /* @__PURE__ */ w({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = sa(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), y(l(F), S(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Sf = /* @__PURE__ */ w({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = sa();
    return (a, n) => {
      var o, s;
      return v(), y(l(F), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": l(t).isSelected(a.date) ? !0 : void 0,
        "aria-disabled": l(t).isDateDisabled(a.date) || ((s = (o = l(t)).isDateUnavailable) == null ? void 0 : s.call(o, a.date)),
        "data-disabled": l(t).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
          x(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Tf = /* @__PURE__ */ w({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(F), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mf = /* @__PURE__ */ w({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = sa();
    return (o, s) => (v(), y(l(F), S(t, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).nextPage(t.step, t.nextPage))
    }), {
      default: f(() => [
        x(o.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Af = /* @__PURE__ */ w({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = sa();
    return (o, s) => (v(), y(l(F), S(t, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).prevPage(t.step, t.prevPage))
    }), {
      default: f(() => [
        x(o.$slots, "default", {}, () => [
          Y("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), If = /* @__PURE__ */ w({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(F), S(t, { "aria-hidden": "true" }), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rf = /* @__PURE__ */ w({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(F), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vf = /* @__PURE__ */ w({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(F), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ff = /* @__PURE__ */ w({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = sa(), n = ws(), { primitiveElement: o, currentElement: s } = Et(), r = $(() => a.formatter.custom(Ve(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = $(() => a.isDateDisabled(t.day)), d = $(() => {
      var V;
      return (V = a.isDateUnavailable) == null ? void 0 : V.call(a, t.day);
    }), c = $(() => a.isSelected(t.day)), u = $(() => a.isSelectionStart(t.day)), p = $(() => a.isSelectionEnd(t.day)), g = $(() => a.isHighlightedStart(t.day)), m = $(() => a.isHighlightedEnd(t.day)), b = $(() => a.highlightedRange.value ? sd(t.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", _ = $(() => Wl(t.day, Bt())), C = $(() => !zl(t.day, t.month)), D = $(
      () => a.isOutsideVisibleView(t.day)
    ), k = $(() => t.day.day.toLocaleString(a.locale.value)), O = $(() => !a.disabled.value && xe(t.day, a.placeholder.value));
    function E(V, B) {
      var A;
      if (!a.readonly.value && !(a.isDateDisabled(B) || (A = a.isDateUnavailable) != null && A.call(a, B))) {
        if (a.lastPressedDateValue.value = B.copy(), a.startValue.value && a.highlightedRange.value === null) {
          if (xe(B, a.startValue.value) && !a.preventDeselect.value && !a.endValue.value) {
            a.startValue.value = void 0, a.onPlaceholderChange(B);
            return;
          } else if (!a.endValue.value) {
            V.preventDefault(), a.lastPressedDateValue.value && xe(a.lastPressedDateValue.value, B) && (a.startValue.value = B.copy());
            return;
          }
        }
        if (a.startValue.value && a.endValue.value && xe(a.endValue.value, B) && !a.preventDeselect.value) {
          a.startValue.value = void 0, a.endValue.value = void 0, a.onPlaceholderChange(B);
          return;
        }
        a.startValue.value ? a.endValue.value ? a.endValue.value && a.startValue.value && (a.endValue.value = void 0, a.startValue.value = B.copy()) : a.endValue.value = B.copy() : a.startValue.value = B.copy();
      }
    }
    function I(V) {
      E(V, t.day);
    }
    function M() {
      var V;
      a.isDateDisabled(t.day) || (V = a.isDateUnavailable) != null && V.call(a, t.day) || (a.focusedValue.value = t.day.copy());
    }
    function L(V) {
      V.preventDefault(), V.stopPropagation();
      const B = a.parentElement.value, A = B ? Array.from(B.querySelectorAll(h)) : [];
      let R = A.indexOf(s.value);
      const G = 7, j = a.dir.value === "rtl" ? -1 : 1;
      switch (V.code) {
        case n.ARROW_RIGHT:
          R += j;
          break;
        case n.ARROW_LEFT:
          R -= j;
          break;
        case n.ARROW_UP:
          R -= G;
          break;
        case n.ARROW_DOWN:
          R += G;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          E(V, t.day);
          return;
        default:
          return;
      }
      if (R >= 0 && R < A.length) {
        A[R].focus();
        return;
      }
      if (R < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), ae(() => {
          const W = B ? Array.from(B.querySelectorAll(h)) : [];
          W[W.length - Math.abs(R)].focus();
        });
        return;
      }
      if (R >= A.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), ae(() => {
          (B ? Array.from(B.querySelectorAll(h)) : [])[R - A.length].focus();
        });
      }
    }
    return (V, B) => (v(), y(l(F), S({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": c.value ? !0 : void 0,
      "aria-disabled": C.value || i.value || d.value ? !0 : void 0,
      "data-highlighted": b.value ? "" : void 0,
      "data-selection-start": u.value ? !0 : void 0,
      "data-selection-end": p.value ? !0 : void 0,
      "data-highlighted-start": g.value ? !0 : void 0,
      "data-highlighted-end": m.value ? !0 : void 0,
      "data-selected": c.value ? !0 : void 0,
      "data-outside-visible-view": D.value ? "" : void 0,
      "data-value": V.day.toString(),
      "data-disabled": i.value || C.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": _.value ? "" : void 0,
      "data-outside-month": C.value ? "" : void 0,
      "data-focused": O.value ? "" : void 0,
      tabindex: O.value ? 0 : C.value || i.value ? void 0 : -1,
      onClick: I,
      onFocusin: M,
      onMouseenter: M,
      onKeydown: Ke(L, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: f(() => [
        x(V.$slots, "default", { dayValue: k.value }, () => [
          Y(X(k.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
}), Lf = ["default-value"], Nf = /* @__PURE__ */ w({
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
    const t = e, { value: a } = de(t), n = T();
    return (o, s) => (v(), y(l(Sa), { "as-child": "" }, {
      default: f(() => [
        Xt(ue("select", S({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => Ca(a) ? a.value = r : null),
          "default-value": l(a)
        }), [
          x(o.$slots, "default")
        ], 16, Lf), [
          [Mr, l(a)]
        ])
      ]),
      _: 3
    }));
  }
}), zf = {
  key: 0,
  value: ""
}, [Tt, Us] = le("SelectRoot"), [Wf, Kf] = le("SelectRoot"), Uf = /* @__PURE__ */ w({
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
    const a = e, n = t, o = pe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), s = pe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = T(), i = T(), d = T({
      x: 0,
      y: 0
    }), c = T(!1), { required: u, disabled: p, dir: g } = de(a), m = it(g);
    Us({
      triggerElement: r,
      onTriggerChange: (C) => {
        r.value = C;
      },
      valueElement: i,
      onValueElementChange: (C) => {
        i.value = C;
      },
      valueElementHasChildren: c,
      onValueElementHasChildrenChange: (C) => {
        c.value = C;
      },
      contentId: "",
      modelValue: o,
      onValueChange: (C) => {
        o.value = C;
      },
      open: s,
      required: u,
      onOpenChange: (C) => {
        s.value = C;
      },
      dir: m,
      triggerPointerDownPosRef: d,
      disabled: p
    });
    const b = Pa(r), h = T(/* @__PURE__ */ new Set()), _ = $(() => Array.from(h.value).map((C) => {
      var D;
      return (D = C.props) == null ? void 0 : D.value;
    }).join(";"));
    return Kf({
      onNativeOptionAdd: (C) => {
        h.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        h.value.delete(C);
      }
    }), (C, D) => (v(), y(l(na), null, {
      default: f(() => [
        x(C.$slots, "default", {
          modelValue: l(o),
          open: l(s)
        }),
        l(b) ? (v(), y(Nf, S({ key: _.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: l(u),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: l(p),
          value: l(o),
          onChange: D[0] || (D[0] = (k) => o.value = k.target.value)
        }), {
          default: f(() => [
            l(o) === void 0 ? (v(), K("option", zf)) : Q("", !0),
            (v(!0), K(J, null, he(Array.from(h.value), (k) => (v(), y(Se(k), S({ ref_for: !0 }, k.props, {
              key: k.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : Q("", !0)
      ]),
      _: 3
    }));
  }
}), Hf = [" ", "Enter", "ArrowUp", "ArrowDown"], jf = [" ", "Enter"], et = 10;
function Hs(e) {
  return e === "" || ou(e);
}
const Gf = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Tt(), n = $(() => {
      var m;
      return ((m = a.disabled) == null ? void 0 : m.value) || t.disabled;
    }), { forwardRef: o, currentElement: s } = N();
    a.contentId || (a.contentId = we(void 0, "radix-vue-select-content")), ie(() => {
      a.triggerElement = s;
    });
    const { injectCollection: r } = ea(), i = r(), { search: d, handleTypeaheadSearch: c, resetTypeahead: u } = $o(i);
    function p() {
      n.value || (a.onOpenChange(!0), u());
    }
    function g(m) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, b) => (v(), y(l(pn), { "as-child": "" }, {
      default: f(() => {
        var h, _, C, D;
        return [
          P(l(F), {
            ref: l(o),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": l(a).contentId,
            "aria-expanded": l(a).open.value || !1,
            "aria-required": (h = l(a).required) == null ? void 0 : h.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (_ = l(a)) == null ? void 0 : _.dir.value,
            "data-state": (C = l(a)) != null && C.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": l(Hs)((D = l(a).modelValue) == null ? void 0 : D.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: b[0] || (b[0] = (k) => {
              var O;
              (O = k == null ? void 0 : k.currentTarget) == null || O.focus();
            }),
            onPointerdown: b[1] || (b[1] = (k) => {
              if (k.pointerType === "touch")
                return k.preventDefault();
              const O = k.target;
              O.hasPointerCapture(k.pointerId) && O.releasePointerCapture(k.pointerId), k.button === 0 && k.ctrlKey === !1 && (g(k), k.preventDefault());
            }),
            onPointerup: b[2] || (b[2] = be(
              (k) => {
                k.pointerType === "touch" && g(k);
              },
              ["prevent"]
            )),
            onKeydown: b[3] || (b[3] = (k) => {
              const O = l(d) !== "";
              !(k.ctrlKey || k.altKey || k.metaKey) && k.key.length === 1 && O && k.key === " " || (l(c)(k.key), l(Hf).includes(k.key) && (p(), k.preventDefault()));
            })
          }, {
            default: f(() => [
              x(m.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), qf = /* @__PURE__ */ w({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Ea), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Vo, Yf] = le("SelectItemAlignedPosition"), Xf = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, { injectCollection: o } = ea(), s = Tt(), r = Mt(), i = o(), d = T(!1), c = T(!0), u = T(), { forwardRef: p, currentElement: g } = N(), { viewport: m, selectedItem: b, selectedItemText: h, focusSelectedItem: _ } = r;
    function C() {
      if (s.triggerElement.value && s.valueElement.value && u.value && g.value && m != null && m.value && b != null && b.value && h != null && h.value) {
        const O = s.triggerElement.value.getBoundingClientRect(), E = g.value.getBoundingClientRect(), I = s.valueElement.value.getBoundingClientRect(), M = h.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const Oe = M.left - E.left, Be = I.left - Oe, Ne = O.left - Be, se = O.width + Ne, $e = Math.max(se, E.width), Ze = window.innerWidth - et, ca = Ja(Be, et, Ze - $e);
          u.value.style.minWidth = `${se}px`, u.value.style.left = `${ca}px`;
        } else {
          const Oe = E.right - M.right, Be = window.innerWidth - I.right - Oe, Ne = window.innerWidth - O.right - Be, se = O.width + Ne, $e = Math.max(se, E.width), Ze = window.innerWidth - et, ca = Ja(
            Be,
            et,
            Ze - $e
          );
          u.value.style.minWidth = `${se}px`, u.value.style.right = `${ca}px`;
        }
        const L = i.value, V = window.innerHeight - et * 2, B = m.value.scrollHeight, A = window.getComputedStyle(g.value), R = Number.parseInt(
          A.borderTopWidth,
          10
        ), G = Number.parseInt(A.paddingTop, 10), j = Number.parseInt(
          A.borderBottomWidth,
          10
        ), W = Number.parseInt(
          A.paddingBottom,
          10
        ), q = R + G + B + W + j, oe = Math.min(
          b.value.offsetHeight * 5,
          q
        ), ce = window.getComputedStyle(m.value), me = Number.parseInt(ce.paddingTop, 10), ke = Number.parseInt(
          ce.paddingBottom,
          10
        ), ye = O.top + O.height / 2 - et, ia = V - ye, _t = b.value.offsetHeight / 2, da = b.value.offsetTop + _t, dt = R + G + da, ua = q - dt;
        if (dt <= ye) {
          const Oe = b.value === L[L.length - 1];
          u.value.style.bottom = "0px";
          const Be = g.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, Ne = Math.max(
            ia,
            _t + (Oe ? ke : 0) + Be + j
          ), se = dt + Ne;
          u.value.style.height = `${se}px`;
        } else {
          const Oe = b.value === L[0];
          u.value.style.top = "0px";
          const Be = Math.max(
            ye,
            R + m.value.offsetTop + (Oe ? me : 0) + _t
          ) + ua;
          u.value.style.height = `${Be}px`, m.value.scrollTop = dt - ye + m.value.offsetTop;
        }
        u.value.style.margin = `${et}px 0`, u.value.style.minHeight = `${oe}px`, u.value.style.maxHeight = `${V}px`, n("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const D = T("");
    ie(async () => {
      await ae(), C(), g.value && (D.value = window.getComputedStyle(g.value).zIndex);
    });
    function k(O) {
      O && c.value === !0 && (C(), _ == null || _(), c.value = !1);
    }
    return Yf({
      contentWrapper: u,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: k
    }), (O, E) => (v(), K("div", {
      ref_key: "contentWrapperElement",
      ref: u,
      style: Zt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: D.value
      })
    }, [
      P(l(F), S({
        ref: l(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...O.$attrs, ...a }), {
        default: f(() => [
          x(O.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Zf = /* @__PURE__ */ w({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: et },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = ne(e);
    return (a, n) => (v(), y(l(qt), S(l(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ra = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Mt, Jf] = le("SelectContent"), Qf = /* @__PURE__ */ w({
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
    const a = e, n = t, o = Tt();
    Co(), Da(a.bodyLock);
    const { createCollection: s } = ea(), r = T();
    Oa(r);
    const i = s(r), { search: d, handleTypeaheadSearch: c } = $o(i), u = T(), p = T(), g = T(), m = T(!1), b = T(!1);
    function h() {
      p.value && r.value && jn([p.value, r.value]);
    }
    ee(m, () => {
      h();
    });
    const { onOpenChange: _, triggerPointerDownPosRef: C } = o;
    ge((E) => {
      if (!r.value)
        return;
      let I = { x: 0, y: 0 };
      const M = (V) => {
        var B, A;
        I = {
          x: Math.abs(
            Math.round(V.pageX) - (((B = C.value) == null ? void 0 : B.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(V.pageY) - (((A = C.value) == null ? void 0 : A.y) ?? 0)
          )
        };
      }, L = (V) => {
        var B;
        V.pointerType !== "touch" && (I.x <= 10 && I.y <= 10 ? V.preventDefault() : (B = r.value) != null && B.contains(V.target) || _(!1), document.removeEventListener("pointermove", M), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", M), document.addEventListener("pointerup", L, {
        capture: !0,
        once: !0
      })), E(() => {
        document.removeEventListener("pointermove", M), document.removeEventListener("pointerup", L, {
          capture: !0
        });
      });
    });
    function D(E) {
      const I = E.ctrlKey || E.altKey || E.metaKey;
      if (E.key === "Tab" && E.preventDefault(), !I && E.key.length === 1 && c(E.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(E.key)) {
        let M = i.value;
        if (["ArrowUp", "End"].includes(E.key) && (M = M.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(E.key)) {
          const L = E.target, V = M.indexOf(L);
          M = M.slice(V + 1);
        }
        setTimeout(() => jn(M)), E.preventDefault();
      }
    }
    const k = $(() => a.position === "popper" ? a : {}), O = ne(k.value);
    return Jf({
      content: r,
      viewport: u,
      onViewportChange: (E) => {
        u.value = E;
      },
      itemRefCallback: (E, I, M) => {
        var L, V;
        const B = !b.value && !M;
        (((L = o.modelValue) == null ? void 0 : L.value) !== void 0 && ((V = o.modelValue) == null ? void 0 : V.value) === I || B) && (p.value = E, B && (b.value = !0));
      },
      selectedItem: p,
      selectedItemText: g,
      onItemLeave: () => {
        var E;
        (E = r.value) == null || E.focus();
      },
      itemTextRefCallback: (E, I, M) => {
        var L, V;
        const B = !b.value && !M;
        (((L = o.modelValue) == null ? void 0 : L.value) !== void 0 && ((V = o.modelValue) == null ? void 0 : V.value) === I || B) && (g.value = E);
      },
      focusSelectedItem: h,
      position: a.position,
      isPositioned: m,
      searchRef: d
    }), (E, I) => (v(), y(l(cn), {
      "as-child": "",
      onMountAutoFocus: I[6] || (I[6] = be(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: I[7] || (I[7] = (M) => {
        var L;
        n("closeAutoFocus", M), !M.defaultPrevented && ((L = l(o).triggerElement.value) == null || L.focus({ preventScroll: !0 }), M.preventDefault());
      })
    }, {
      default: f(() => [
        P(l(ta), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: I[2] || (I[2] = be(() => {
          }, ["prevent"])),
          onDismiss: I[3] || (I[3] = (M) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: I[4] || (I[4] = (M) => n("escapeKeyDown", M)),
          onPointerDownOutside: I[5] || (I[5] = (M) => n("pointerDownOutside", M))
        }, {
          default: f(() => [
            (v(), y(Se(
              E.position === "popper" ? Zf : Xf
            ), S({ ...E.$attrs, ...l(O) }, {
              id: l(o).contentId,
              ref: (M) => {
                r.value = l(Te)(M);
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
              onContextmenu: I[0] || (I[0] = be(() => {
              }, ["prevent"])),
              onPlaced: I[1] || (I[1] = (M) => m.value = !0),
              onKeydown: D
            }), {
              default: f(() => [
                x(E.$slots, "default")
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
}), ev = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Us(e.context), (t, a) => x(t.$slots, "default");
  }
}), tv = { key: 1 }, av = /* @__PURE__ */ w({
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
    const a = e, n = te(a, t), o = Tt(), s = T();
    ie(() => {
      s.value = new DocumentFragment();
    });
    const r = T(), i = $(() => a.forceMount || o.open.value);
    return (d, c) => {
      var u;
      return i.value ? (v(), y(l(Me), {
        key: 0,
        ref_key: "presenceRef",
        ref: r,
        present: !0
      }, {
        default: f(() => [
          P(Qf, U(H({ ...l(n), ...d.$attrs })), {
            default: f(() => [
              x(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((u = r.value) != null && u.present) && s.value ? (v(), K("div", tv, [
        (v(), y(an, { to: s.value }, [
          P(ev, { context: l(o) }, {
            default: f(() => [
              x(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : Q("", !0);
    };
  }
}), nv = /* @__PURE__ */ w({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(F), S({ "aria-hidden": "true" }, t), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [js, ov] = le("SelectItem"), lv = /* @__PURE__ */ w({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: a } = de(t), n = Tt(), o = Mt(ra), { forwardRef: s, currentElement: r } = N(), i = $(() => {
      var h;
      return ((h = n.modelValue) == null ? void 0 : h.value) === t.value;
    }), d = T(!1), c = T(t.textValue ?? ""), u = we(void 0, "radix-vue-select-item-text");
    async function p(h) {
      await ae(), !(h != null && h.defaultPrevented) && (a.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function g(h) {
      var _;
      await ae(), !h.defaultPrevented && (a.value ? (_ = o.onItemLeave) == null || _.call(o) : h.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(h) {
      var _;
      await ae(), !h.defaultPrevented && h.currentTarget === document.activeElement && ((_ = o.onItemLeave) == null || _.call(o));
    }
    async function b(h) {
      var _;
      await ae(), !(h.defaultPrevented || ((_ = o.searchRef) == null ? void 0 : _.value) !== "" && h.key === " ") && (jf.includes(h.key) && p(), h.key === " " && h.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ie(() => {
      r.value && o.itemRefCallback(
        r.value,
        t.value,
        t.disabled
      );
    }), ov({
      value: t.value,
      disabled: a,
      textId: u,
      isSelected: i,
      onItemTextChange: (h) => {
        c.value = ((c.value || (h == null ? void 0 : h.textContent)) ?? "").trim();
      }
    }), (h, _) => (v(), y(l(F), {
      ref: l(s),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": l(u),
      "data-highlighted": d.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": l(a) || void 0,
      "data-disabled": l(a) ? "" : void 0,
      tabindex: l(a) ? void 0 : -1,
      as: h.as,
      "as-child": h.asChild,
      onFocus: _[0] || (_[0] = (C) => d.value = !0),
      onBlur: _[1] || (_[1] = (C) => d.value = !1),
      onPointerup: p,
      onPointerdown: _[2] || (_[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: _[3] || (_[3] = be(() => {
      }, ["prevent", "stop"])),
      onPointermove: g,
      onPointerleave: m,
      onKeydown: b
    }, {
      default: f(() => [
        x(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), sv = /* @__PURE__ */ w({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = js();
    return (n, o) => l(a).isSelected.value ? (v(), y(l(F), S({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : Q("", !0);
  }
}), [rv, iv] = le("SelectGroup"), dv = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = we(void 0, "radix-vue-select-group");
    return iv({ id: a }), (n, o) => (v(), y(l(F), S({ role: "group" }, t, { "aria-labelledby": l(a) }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), uv = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = rv({ id: "" });
    return (n, o) => (v(), y(l(F), S(t, {
      id: l(a).id
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Gs = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = Tt(), n = Mt(ra), o = Wf(), s = js(), { forwardRef: r, currentElement: i } = N(), d = $(() => {
      var c;
      return We("option", {
        key: s.value,
        value: s.value,
        disabled: s.disabled.value,
        textContent: (c = i.value) == null ? void 0 : c.textContent
      });
    });
    return ie(() => {
      i.value && (s.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        s.value,
        s.disabled.value
      ), o.onNativeOptionAdd(d.value));
    }), to(() => {
      o.onNativeOptionRemove(d.value);
    }), (c, u) => (v(), K(J, null, [
      P(l(F), S({
        id: l(s).textId,
        ref: l(r)
      }, { ...t, ...c.$attrs }), {
        default: f(() => [
          x(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      l(s).isSelected.value && l(a).valueElement.value && !l(a).valueElementHasChildren.value ? (v(), y(an, {
        key: 0,
        to: l(a).valueElement.value
      }, [
        x(c.$slots, "default")
      ], 8, ["to"])) : Q("", !0)
    ], 64));
  }
}), cv = /* @__PURE__ */ w({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: a } = de(t), n = ip(a), o = Mt(ra), s = o.position === "item-aligned" ? Vo() : void 0, { forwardRef: r, currentElement: i } = N();
    ie(() => {
      o == null || o.onViewportChange(i.value);
    });
    const d = T(0);
    function c(u) {
      const p = u.currentTarget, { shouldExpandOnScrollRef: g, contentWrapper: m } = s ?? {};
      if (g != null && g.value && m != null && m.value) {
        const b = Math.abs(d.value - p.scrollTop);
        if (b > 0) {
          const h = window.innerHeight - et * 2, _ = Number.parseFloat(
            m.value.style.minHeight
          ), C = Number.parseFloat(m.value.style.height), D = Math.max(_, C);
          if (D < h) {
            const k = D + b, O = Math.min(h, k), E = k - O;
            m.value.style.height = `${O}px`, m.value.style.bottom === "0px" && (p.scrollTop = E > 0 ? E : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = p.scrollTop;
    }
    return (u, p) => (v(), K(J, null, [
      P(l(F), S({
        ref: l(r),
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
          x(u.$slots, "default")
        ]),
        _: 3
      }, 16),
      P(l(F), {
        as: "style",
        nonce: l(n)
      }, {
        default: f(() => [
          Y(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), qs = /* @__PURE__ */ w({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const a = t, { injectCollection: n } = ea(), o = n(), s = Mt(ra), r = T(null);
    function i() {
      r.value !== null && (window.clearInterval(r.value), r.value = null);
    }
    ge(() => {
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
      (u = s.onItemLeave) == null || u.call(s), r.value === null && (r.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    return to(() => i()), (u, p) => {
      var g;
      return v(), y(l(F), S({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (g = u.$parent) == null ? void 0 : g.$props, {
        onPointerdown: d,
        onPointermove: c,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: f(() => [
          x(u.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), pv = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Mt(ra), a = t.position === "item-aligned" ? Vo() : void 0, { forwardRef: n, currentElement: o } = N(), s = T(!1);
    return ge((r) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let c = function() {
          s.value = u.scrollTop > 0;
        };
        const u = t.viewport.value;
        c(), u.addEventListener("scroll", c), r(() => u.removeEventListener("scroll", c));
      }
    }), ee(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), y(qs, {
      key: 0,
      ref: l(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: c } = l(t);
        d != null && d.value && c != null && c.value && (d.value.scrollTop = d.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: f(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : Q("", !0);
  }
}), fv = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Mt(ra), a = t.position === "item-aligned" ? Vo() : void 0, { forwardRef: n, currentElement: o } = N(), s = T(!1);
    return ge((r) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let c = function() {
          const p = u.scrollHeight - u.clientHeight;
          s.value = Math.ceil(u.scrollTop) < p;
        };
        const u = t.viewport.value;
        c(), u.addEventListener("scroll", c), r(() => u.removeEventListener("scroll", c));
      }
    }), ee(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), y(qs, {
      key: 0,
      ref: l(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: c } = l(t);
        d != null && d.value && c != null && c.value && (d.value.scrollTop = d.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: f(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : Q("", !0);
  }
}), vv = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: a } = N(), n = Tt(), o = Dl();
    return Er(() => {
      var s;
      const r = !!dn((s = o == null ? void 0 : o.default) == null ? void 0 : s.call(o)).length;
      n.onValueElementHasChildrenChange(r);
    }), ie(() => {
      n.valueElement = a;
    }), (s, r) => (v(), y(l(F), {
      ref: l(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: f(() => {
        var i;
        return [
          l(Hs)((i = l(n).modelValue) == null ? void 0 : i.value) ? (v(), K(J, { key: 0 }, [
            Y(X(s.placeholder), 1)
          ], 64)) : x(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), mv = /* @__PURE__ */ w({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, a) => (v(), y(l(F), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: f(() => [
        x(t.$slots, "default", {}, () => [
          Y("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function hv(e = [], t, a) {
  const n = [...e];
  return n[a] = t, n.sort((o, s) => o - s);
}
function Ys(e, t, a) {
  const n = 100 / (a - t) * (e - t);
  return Ja(n, 0, 100);
}
function gv(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function yv(e, t) {
  if (e.length === 1)
    return 0;
  const a = e.map((o) => Math.abs(o - t)), n = Math.min(...a);
  return a.indexOf(n);
}
function bv(e, t, a) {
  const n = e / 2, o = Fo([0, 50], [0, n]);
  return (n - o(t) * a) * a;
}
function wv(e) {
  return e.slice(0, -1).map((t, a) => e[a + 1] - t);
}
function _v(e, t) {
  if (t > 0) {
    const a = wv(e);
    return Math.min(...a) >= t;
  }
  return !0;
}
function Fo(e, t) {
  return (a) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (a - e[0]);
  };
}
function xv(e) {
  return (String(e).split(".")[1] || "").length;
}
function Cv(e, t) {
  const a = 10 ** t;
  return Math.round(e * a) / a;
}
const Xs = ["PageUp", "PageDown"], Zs = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Js = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Qs, er] = le(["SliderVertical", "SliderHorizontal"]), tr = /* @__PURE__ */ w({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = vn();
    return (s, r) => (v(), y(l(F), S({ "data-slider-impl": "" }, a, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : l(Xs).concat(l(Zs)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: r[1] || (r[1] = (i) => {
        const d = i.target;
        d.setPointerCapture(i.pointerId), i.preventDefault(), l(o).thumbElements.value.includes(d) ? d.focus() : n("slideStart", i);
      }),
      onPointermove: r[2] || (r[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && n("slideMove", i);
      }),
      onPointerup: r[3] || (r[3] = (i) => {
        const d = i.target;
        d.hasPointerCapture(i.pointerId) && (d.releasePointerCapture(i.pointerId), n("slideEnd", i));
      })
    }), {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $v = /* @__PURE__ */ w({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, { max: o, min: s, dir: r, inverted: i } = de(a), { forwardRef: d, currentElement: c } = N(), u = T(), p = $(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function g(m) {
      const b = u.value || c.value.getBoundingClientRect(), h = [0, b.width], _ = p.value ? [s.value, o.value] : [o.value, s.value], C = Fo(h, _);
      return u.value = b, C(m - b.left);
    }
    return er({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, b) => (v(), y(tr, {
      ref: l(d),
      dir: l(r),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: b[0] || (b[0] = (h) => {
        const _ = g(h.clientX);
        n("slideStart", _);
      }),
      onSlideMove: b[1] || (b[1] = (h) => {
        const _ = g(h.clientX);
        n("slideMove", _);
      }),
      onSlideEnd: b[2] || (b[2] = () => {
        u.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: b[3] || (b[3] = (h) => {
        const _ = p.value ? "from-left" : "from-right", C = l(Js)[_].includes(h.key);
        n("stepKeyDown", h, C ? -1 : 1);
      }),
      onEndKeyDown: b[4] || (b[4] = (h) => n("endKeyDown", h)),
      onHomeKeyDown: b[5] || (b[5] = (h) => n("homeKeyDown", h))
    }, {
      default: f(() => [
        x(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), kv = /* @__PURE__ */ w({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, { max: o, min: s, inverted: r } = de(a), { forwardRef: i, currentElement: d } = N(), c = T(), u = $(() => !r.value);
    function p(g) {
      const m = c.value || d.value.getBoundingClientRect(), b = [0, m.height], h = u.value ? [o.value, s.value] : [s.value, o.value], _ = Fo(b, h);
      return c.value = m, _(g - m.top);
    }
    return er({
      startEdge: u.value ? "bottom" : "top",
      endEdge: u.value ? "top" : "bottom",
      size: "height",
      direction: u.value ? 1 : -1
    }), (g, m) => (v(), y(tr, {
      ref: l(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: m[0] || (m[0] = (b) => {
        const h = p(b.clientY);
        n("slideStart", h);
      }),
      onSlideMove: m[1] || (m[1] = (b) => {
        const h = p(b.clientY);
        n("slideMove", h);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (b) => {
        const h = u.value ? "from-bottom" : "from-top", _ = l(Js)[h].includes(b.key);
        n("stepKeyDown", b, _ ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (b) => n("endKeyDown", b)),
      onHomeKeyDown: m[5] || (m[5] = (b) => n("homeKeyDown", b))
    }, {
      default: f(() => [
        x(g.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), Bv = ["value", "name", "disabled", "step"], [vn, Dv] = le("SliderRoot"), Pv = /* @__PURE__ */ w({
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
    const a = e, n = t, { min: o, max: s, step: r, minStepsBetweenThumbs: i, orientation: d, disabled: c, dir: u } = de(a), p = it(u), { forwardRef: g, currentElement: m } = N(), b = Pa(m);
    So();
    const h = pe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), _ = T(0), C = T(h.value);
    function D(M) {
      const L = yv(h.value, M);
      E(M, L);
    }
    function k(M) {
      E(M, _.value);
    }
    function O() {
      const M = C.value[_.value];
      h.value[_.value] !== M && n("valueCommit", Ar(h.value));
    }
    function E(M, L, { commit: V } = { commit: !1 }) {
      var B;
      const A = xv(r.value), R = Cv(Math.round((M - o.value) / r.value) * r.value + o.value, A), G = Ja(R, o.value, s.value), j = hv(h.value, G, L);
      if (_v(j, i.value * r.value)) {
        _.value = j.indexOf(G);
        const W = String(j) !== String(h.value);
        W && V && n("valueCommit", j), W && ((B = I.value[_.value]) == null || B.focus(), h.value = j);
      }
    }
    const I = T([]);
    return Dv({
      modelValue: h,
      valueIndexToChangeRef: _,
      thumbElements: I,
      orientation: d,
      min: o,
      max: s,
      disabled: c
    }), (M, L) => (v(), K(J, null, [
      P(l(To), null, {
        default: f(() => [
          (v(), y(Se(l(d) === "horizontal" ? $v : kv), S(M.$attrs, {
            ref: l(g),
            "as-child": M.asChild,
            as: M.as,
            min: l(o),
            max: l(s),
            dir: l(p),
            inverted: M.inverted,
            "aria-disabled": l(c),
            "data-disabled": l(c) ? "" : void 0,
            onPointerdown: L[0] || (L[0] = () => {
              l(c) || (C.value = l(h));
            }),
            onSlideStart: L[1] || (L[1] = (V) => !l(c) && D(V)),
            onSlideMove: L[2] || (L[2] = (V) => !l(c) && k(V)),
            onSlideEnd: L[3] || (L[3] = (V) => !l(c) && O()),
            onHomeKeyDown: L[4] || (L[4] = (V) => !l(c) && E(l(o), 0, { commit: !0 })),
            onEndKeyDown: L[5] || (L[5] = (V) => !l(c) && E(l(s), l(h).length - 1, { commit: !0 })),
            onStepKeyDown: L[6] || (L[6] = (V, B) => {
              if (!l(c)) {
                const A = l(Xs).includes(V.key) || V.shiftKey && l(Zs).includes(V.key) ? 10 : 1, R = _.value, G = l(h)[R], j = l(r) * A * B;
                E(G + j, R, { commit: !0 });
              }
            })
          }), {
            default: f(() => [
              x(M.$slots, "default", { modelValue: l(h) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      l(b) ? (v(!0), K(J, { key: 0 }, he(l(h), (V, B) => (v(), K("input", {
        key: B,
        value: V,
        type: "number",
        style: { display: "none" },
        name: M.name ? M.name + (l(h).length > 1 ? "[]" : "") : void 0,
        disabled: l(c),
        step: l(r)
      }, null, 8, Bv))), 128)) : Q("", !0)
    ], 64));
  }
}), Ov = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = vn(), n = Qs(), { forwardRef: o, currentElement: s } = N(), r = $(() => {
      var m, b;
      return (b = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : b[t.index];
    }), i = $(() => r.value === void 0 ? 0 : Ys(r.value, a.min.value ?? 0, a.max.value ?? 100)), d = $(() => {
      var m, b;
      return gv(t.index, ((b = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : b.length) ?? 0);
    }), c = bs(s), u = $(() => c[n.size].value), p = $(() => u.value ? bv(u.value, i.value, n.direction) : 0), g = xo();
    return ie(() => {
      a.thumbElements.value.push(s.value);
    }), bt(() => {
      const m = a.thumbElements.value.findIndex((b) => b === s.value) ?? -1;
      a.thumbElements.value.splice(m, 1);
    }), (m, b) => (v(), y(l(fn), null, {
      default: f(() => [
        P(l(F), S(m.$attrs, {
          ref: l(o),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: l(a).disabled.value ? void 0 : 0,
          "aria-label": m.$attrs["aria-label"] || d.value,
          "data-disabled": l(a).disabled.value ? "" : void 0,
          "data-orientation": l(a).orientation.value,
          "aria-valuenow": r.value,
          "aria-valuemin": l(a).min.value,
          "aria-valuemax": l(a).max.value,
          "aria-orientation": l(a).orientation.value,
          "as-child": m.asChild,
          as: m.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [l(n).startEdge]: `calc(${i.value}% + ${p.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !l(g) && r.value === void 0 ? "none" : void 0
          },
          onFocus: b[0] || (b[0] = () => {
            l(a).valueIndexToChangeRef.value = m.index;
          })
        }), {
          default: f(() => [
            x(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), Ev = /* @__PURE__ */ w({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: a } = Mo(), { forwardRef: n, currentElement: o } = N(), s = $(() => o.value ? a().findIndex((r) => r.ref === o.value) : -1);
    return (r, i) => (v(), y(Ov, S({ ref: l(n) }, t, { index: s.value }), {
      default: f(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Sv = /* @__PURE__ */ w({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = vn();
    return N(), (a, n) => (v(), y(l(F), {
      "as-child": a.asChild,
      as: a.as,
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value
    }, {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), Tv = /* @__PURE__ */ w({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = vn(), a = Qs();
    N();
    const n = $(() => {
      var r, i;
      return (i = (r = t.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (d) => Ys(d, t.min.value, t.max.value)
      );
    }), o = $(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = $(() => 100 - Math.max(...n.value));
    return (r, i) => (v(), y(l(F), {
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: Zt({
        [l(a).startEdge]: `${o.value}%`,
        [l(a).endEdge]: `${s.value}%`
      })
    }, {
      default: f(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function Mv() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
Mv();
const Av = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Iv, Rv] = le("SwitchRoot"), Vv = /* @__PURE__ */ w({
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
    const a = e, n = t, { disabled: o } = de(a), s = pe(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    });
    function r() {
      o.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: d } = N(), c = Pa(d), u = $(() => {
      var p;
      return a.id && d.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Rv({
      checked: s,
      toggleCheck: r,
      disabled: o
    }), (p, g) => (v(), K(J, null, [
      P(l(F), S(p.$attrs, {
        id: p.id,
        ref: l(i),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || u.value,
        "aria-checked": l(s),
        "aria-required": p.required,
        "data-state": l(s) ? "checked" : "unchecked",
        "data-disabled": l(o) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        disabled: l(o),
        onClick: r,
        onKeydown: Ke(be(r, ["prevent"]), ["enter"])
      }), {
        default: f(() => [
          x(p.$slots, "default", { checked: l(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      l(c) ? (v(), K("input", {
        key: 0,
        type: "checkbox",
        name: p.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: l(o),
        required: p.required,
        value: p.value,
        checked: !!l(s),
        "data-state": l(s) ? "checked" : "unchecked",
        "data-disabled": l(o) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Av)) : Q("", !0)
    ], 64));
  }
}), Fv = /* @__PURE__ */ w({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Iv();
    return N(), (a, n) => {
      var o;
      return v(), y(l(F), {
        "data-state": (o = l(t).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": l(t).disabled.value ? "" : void 0,
        "as-child": a.asChild,
        as: a.as
      }, {
        default: f(() => [
          x(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [Lo, Lv] = le("TabsRoot"), Nv = /* @__PURE__ */ w({
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
    const a = e, n = t, { orientation: o, dir: s } = de(a), r = it(s);
    N();
    const i = pe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), d = T();
    return Lv({
      modelValue: i,
      changeModelValue: (c) => {
        i.value = c;
      },
      orientation: o,
      dir: r,
      activationMode: a.activationMode,
      baseId: we(void 0, "radix-vue-tabs"),
      tabsList: d
    }), (c, u) => (v(), y(l(F), {
      dir: l(r),
      "data-orientation": l(o),
      "as-child": c.asChild,
      as: c.as
    }, {
      default: f(() => [
        x(c.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), zv = /* @__PURE__ */ w({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: a } = de(t), { forwardRef: n, currentElement: o } = N(), s = Lo();
    return s.tabsList = o, (r, i) => (v(), y(l(Is), {
      "as-child": "",
      orientation: l(s).orientation.value,
      dir: l(s).dir.value,
      loop: l(a)
    }, {
      default: f(() => [
        P(l(F), {
          ref: l(n),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": l(s).orientation.value
        }, {
          default: f(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function ar(e, t) {
  return `${e}-trigger-${t}`;
}
function nr(e, t) {
  return `${e}-content-${t}`;
}
const Wv = /* @__PURE__ */ w({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a } = N(), n = Lo(), o = $(() => ar(n.baseId, t.value)), s = $(() => nr(n.baseId, t.value)), r = $(() => t.value === n.modelValue.value), i = T(r.value);
    return ie(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (d, c) => (v(), y(l(Me), {
      present: r.value,
      "force-mount": ""
    }, {
      default: f(({ present: u }) => [
        P(l(F), {
          id: s.value,
          ref: l(a),
          "as-child": d.asChild,
          as: d.as,
          role: "tabpanel",
          "data-state": r.value ? "active" : "inactive",
          "data-orientation": l(n).orientation.value,
          "aria-labelledby": o.value,
          hidden: !u.value,
          tabindex: "0",
          style: Zt({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: f(() => [
            d.forceMount || r.value ? x(d.$slots, "default", { key: 0 }) : Q("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Kv = /* @__PURE__ */ w({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: a } = N(), n = Lo(), o = $(() => ar(n.baseId, t.value)), s = $(() => nr(n.baseId, t.value)), r = $(() => t.value === n.modelValue.value);
    return (i, d) => (v(), y(l(kp), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: f(() => [
        P(l(F), {
          id: o.value,
          ref: l(a),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": r.value ? "true" : "false",
          "aria-controls": s.value,
          "data-state": r.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": l(n).orientation.value,
          onMousedown: d[0] || (d[0] = be((c) => {
            !i.disabled && c.ctrlKey === !1 ? l(n).changeModelValue(i.value) : c.preventDefault();
          }, ["left"])),
          onKeydown: d[1] || (d[1] = Ke((c) => l(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: d[2] || (d[2] = () => {
            const c = l(n).activationMode !== "manual";
            !r.value && !i.disabled && c && l(n).changeModelValue(i.value);
          })
        }, {
          default: f(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [mn, Uv] = le("ToastProvider"), Hv = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: a, duration: n, swipeDirection: o, swipeThreshold: s } = de(t), r = T(), i = T(0), d = T(!1), c = T(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const u = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(u);
    }
    return Uv({
      label: a,
      duration: n,
      swipeDirection: o,
      swipeThreshold: s,
      toastCount: i,
      viewport: r,
      onViewportChange(u) {
        r.value = u;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: d,
      isClosePausedRef: c
    }), (u, p) => x(u.$slots, "default");
  }
}), jv = "toast.swipeStart", Gv = "toast.swipeMove", qv = "toast.swipeCancel", Yv = "toast.swipeEnd", qn = "toast.viewportPause", Yn = "toast.viewportResume";
function za(e, t, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function fl(e, t, a = 0) {
  const n = Math.abs(e.x), o = Math.abs(e.y), s = n > o;
  return t === "left" || t === "right" ? s && n > a : !s && o > a;
}
function Xv(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function or(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && t.push(a.textContent), Xv(a)) {
      const n = a.ariaHidden || a.hidden || a.style.display === "none", o = a.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const s = a.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...or(a));
    }
  }), t;
}
const Zv = /* @__PURE__ */ w({
  __name: "ToastAnnounce",
  setup(e) {
    const t = mn(), a = mu(1e3), n = T(!1);
    return hs(() => {
      n.value = !0;
    }), (o, s) => l(a) || n.value ? (v(), y(l(Sa), { key: 0 }, {
      default: f(() => [
        Y(X(l(t).label.value) + " ", 1),
        x(o.$slots, "default")
      ]),
      _: 3
    })) : Q("", !0);
  }
}), [Jv, Qv] = le("ToastRoot"), em = /* @__PURE__ */ w({
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
    const a = e, n = t, { forwardRef: o, currentElement: s } = N(), r = mn(), i = T(null), d = T(null), c = $(() => a.duration || r.duration.value), u = T(0), p = T(c.value), g = T(0), m = T(c.value), b = hs(() => {
      const D = (/* @__PURE__ */ new Date()).getTime() - u.value;
      m.value = Math.max(p.value - D, 0);
    }, { fpsLimit: 60 });
    function h(D) {
      !D || D === Number.POSITIVE_INFINITY || qe && (window.clearTimeout(g.value), u.value = (/* @__PURE__ */ new Date()).getTime(), g.value = window.setTimeout(_, D));
    }
    function _() {
      var D, k;
      (D = s.value) != null && D.contains(document.activeElement) && ((k = r.viewport.value) == null || k.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const C = $(() => s.value ? or(s.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const D = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(D);
    }
    return ge((D) => {
      const k = r.viewport.value;
      if (k) {
        const O = () => {
          h(p.value), b.resume(), n("resume");
        }, E = () => {
          const I = (/* @__PURE__ */ new Date()).getTime() - u.value;
          p.value = p.value - I, window.clearTimeout(g.value), b.pause(), n("pause");
        };
        return k.addEventListener(qn, E), k.addEventListener(Yn, O), () => {
          k.removeEventListener(qn, E), k.removeEventListener(Yn, O);
        };
      }
    }), ee(() => [a.open, c.value], () => {
      p.value = c.value, a.open && !r.isClosePausedRef.value && h(c.value);
    }, { immediate: !0 }), _o("Escape", (D) => {
      n("escapeKeyDown", D), D.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, _());
    }), ie(() => {
      r.onToastAdd();
    }), bt(() => {
      r.onToastRemove();
    }), Qv({ onClose: _ }), (D, k) => (v(), K(J, null, [
      C.value ? (v(), y(Zv, {
        key: 0,
        role: "status",
        "aria-live": D.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: f(() => [
          Y(X(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : Q("", !0),
      l(r).viewport.value ? (v(), y(an, {
        key: 1,
        to: l(r).viewport.value
      }, [
        P(l(F), S({
          ref: l(o),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, D.$attrs, {
          as: D.as,
          "as-child": D.asChild,
          "data-state": D.open ? "open" : "closed",
          "data-swipe-direction": l(r).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: k[0] || (k[0] = be((O) => {
            i.value = { x: O.clientX, y: O.clientY };
          }, ["left"])),
          onPointermove: k[1] || (k[1] = (O) => {
            if (!i.value) return;
            const E = O.clientX - i.value.x, I = O.clientY - i.value.y, M = !!d.value, L = ["left", "right"].includes(l(r).swipeDirection.value), V = ["left", "up"].includes(l(r).swipeDirection.value) ? Math.min : Math.max, B = L ? V(0, E) : 0, A = L ? 0 : V(0, I), R = O.pointerType === "touch" ? 10 : 2, G = { x: B, y: A }, j = { originalEvent: O, delta: G };
            M ? (d.value = G, l(za)(l(Gv), (W) => n("swipeMove", W), j)) : l(fl)(G, l(r).swipeDirection.value, R) ? (d.value = G, l(za)(l(jv), (W) => n("swipeStart", W), j), O.target.setPointerCapture(O.pointerId)) : (Math.abs(E) > R || Math.abs(I) > R) && (i.value = null);
          }),
          onPointerup: k[2] || (k[2] = (O) => {
            const E = d.value, I = O.target;
            if (I.hasPointerCapture(O.pointerId) && I.releasePointerCapture(O.pointerId), d.value = null, i.value = null, E) {
              const M = O.currentTarget, L = { originalEvent: O, delta: E };
              l(fl)(E, l(r).swipeDirection.value, l(r).swipeThreshold.value) ? l(za)(l(Yv), (V) => n("swipeEnd", V), L) : l(za)(l(qv), (V) => n("swipeCancel", V), L), M == null || M.addEventListener("click", (V) => V.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: f(() => [
            x(D.$slots, "default", {
              remaining: m.value,
              duration: c.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : Q("", !0)
    ], 64));
  }
}), tm = /* @__PURE__ */ w({
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
    const a = e, n = t, { forwardRef: o } = N(), s = pe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    return (r, i) => (v(), y(l(Me), {
      present: r.forceMount || l(s)
    }, {
      default: f(() => [
        P(em, S({
          ref: l(o),
          open: l(s),
          type: r.type,
          as: r.as,
          "as-child": r.asChild,
          duration: r.duration
        }, r.$attrs, {
          onClose: i[0] || (i[0] = (d) => s.value = !1),
          onPause: i[1] || (i[1] = (d) => n("pause")),
          onResume: i[2] || (i[2] = (d) => n("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (d) => n("escapeKeyDown", d)),
          onSwipeStart: i[4] || (i[4] = (d) => {
            n("swipeStart", d), d.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (d) => {
            const { x: c, y: u } = d.detail.delta, p = d.currentTarget;
            p.setAttribute("data-swipe", "move"), p.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), p.style.setProperty("--radix-toast-swipe-move-y", `${u}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (d) => {
            const c = d.currentTarget;
            c.setAttribute("data-swipe", "cancel"), c.style.removeProperty("--radix-toast-swipe-move-x"), c.style.removeProperty("--radix-toast-swipe-move-y"), c.style.removeProperty("--radix-toast-swipe-end-x"), c.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (d) => {
            const { x: c, y: u } = d.detail.delta, p = d.currentTarget;
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${u}px`), s.value = !1;
          })
        }), {
          default: f(({ remaining: d, duration: c }) => [
            x(r.$slots, "default", {
              remaining: d,
              duration: c,
              open: l(s)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), lr = /* @__PURE__ */ w({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, a) => (v(), y(l(F), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: f(() => [
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), sr = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Jv(), { forwardRef: n } = N();
    return (o, s) => (v(), y(lr, { "as-child": "" }, {
      default: f(() => [
        P(l(F), S(t, {
          ref: l(n),
          type: o.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (r) => l(a).onClose())
        }), {
          default: f(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), am = /* @__PURE__ */ w({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = N();
    return (a, n) => a.altText ? (v(), y(lr, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: f(() => [
        P(sr, {
          ref: l(t),
          as: a.as,
          "as-child": a.asChild
        }, {
          default: f(() => [
            x(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : Q("", !0);
  }
}), vl = /* @__PURE__ */ w({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const a = t, n = mn();
    return (o, s) => (v(), y(l(Sa), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s[0] || (s[0] = (r) => {
        var i;
        const d = r.relatedTarget;
        !((i = l(n).viewport.value) != null && i.contains(d)) && a("focusFromOutsideViewport");
      })
    }, {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), nm = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: a, label: n } = de(t), { forwardRef: o, currentElement: s } = N(), { createCollection: r } = ea(), i = r(s), d = mn(), c = $(() => d.toastCount.value > 0), u = T(), p = T(), g = $(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    _o(a.value, () => {
      s.value.focus();
    }), ie(() => {
      d.onViewportChange(s.value);
    }), ge((b) => {
      const h = s.value;
      if (c.value && h) {
        const _ = () => {
          if (!d.isClosePausedRef.value) {
            const E = new CustomEvent(qn);
            h.dispatchEvent(E), d.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (d.isClosePausedRef.value) {
            const E = new CustomEvent(Yn);
            h.dispatchEvent(E), d.isClosePausedRef.value = !1;
          }
        }, D = (E) => {
          !h.contains(E.relatedTarget) && C();
        }, k = () => {
          h.contains(document.activeElement) || C();
        }, O = (E) => {
          var I, M, L;
          const V = E.altKey || E.ctrlKey || E.metaKey;
          if (E.key === "Tab" && !V) {
            const B = document.activeElement, A = E.shiftKey;
            if (E.target === h && A) {
              (I = u.value) == null || I.focus();
              return;
            }
            const R = m({ tabbingDirection: A ? "backwards" : "forwards" }), G = R.findIndex((j) => j === B);
            Ga(R.slice(G + 1)) ? E.preventDefault() : A ? (M = u.value) == null || M.focus() : (L = p.value) == null || L.focus();
          }
        };
        h.addEventListener("focusin", _), h.addEventListener("focusout", D), h.addEventListener("pointermove", _), h.addEventListener("pointerleave", k), h.addEventListener("keydown", O), window.addEventListener("blur", _), window.addEventListener("focus", C), b(() => {
          h.removeEventListener("focusin", _), h.removeEventListener("focusout", D), h.removeEventListener("pointermove", _), h.removeEventListener("pointerleave", k), h.removeEventListener("keydown", O), window.removeEventListener("blur", _), window.removeEventListener("focus", C);
        });
      }
    });
    function m({ tabbingDirection: b }) {
      const h = i.value.map((_) => {
        const C = [_, ...Bo(_)];
        return b === "forwards" ? C : C.reverse();
      });
      return (b === "forwards" ? h.reverse() : h).flat();
    }
    return (b, h) => (v(), y(l(Ju), {
      role: "region",
      "aria-label": typeof l(n) == "string" ? l(n).replace("{hotkey}", g.value) : l(n)(g.value),
      tabindex: "-1",
      style: Zt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: f(() => [
        c.value ? (v(), y(vl, {
          key: 0,
          ref: (_) => {
            u.value = l(Te)(_);
          },
          onFocusFromOutsideViewport: h[0] || (h[0] = () => {
            const _ = m({
              tabbingDirection: "forwards"
            });
            l(Ga)(_);
          })
        }, null, 512)) : Q("", !0),
        P(l(F), S({
          ref: l(o),
          tabindex: "-1",
          as: b.as,
          "as-child": b.asChild
        }, b.$attrs), {
          default: f(() => [
            x(b.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        c.value ? (v(), y(vl, {
          key: 1,
          ref: (_) => {
            p.value = l(Te)(_);
          },
          onFocusFromOutsideViewport: h[1] || (h[1] = () => {
            const _ = m({
              tabbingDirection: "backwards"
            });
            l(Ga)(_);
          })
        }, null, 512)) : Q("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), om = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), y(l(F), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lm = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), y(l(F), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rr = "tooltip.open", [No, sm] = le("TooltipProvider"), rm = /* @__PURE__ */ w({
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
    const t = e, { delayDuration: a, skipDelayDuration: n, disableHoverableContent: o, disableClosingTrigger: s, ignoreNonKeyboardFocus: r, disabled: i } = de(t);
    N();
    const d = T(!0), c = T(!1), { start: u, stop: p } = wo(() => {
      d.value = !0;
    }, n, { immediate: !1 });
    return sm({
      isOpenDelayed: d,
      delayDuration: a,
      onOpen() {
        p(), d.value = !1;
      },
      onClose() {
        u();
      },
      isPointerInTransitRef: c,
      disableHoverableContent: o,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: r
    }), (g, m) => x(g.$slots, "default");
  }
}), [hn, im] = le("TooltipRoot"), dm = /* @__PURE__ */ w({
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
    const a = e, n = t;
    N();
    const o = No(), s = $(() => a.disableHoverableContent ?? o.disableHoverableContent.value), r = $(() => a.disableClosingTrigger ?? o.disableClosingTrigger.value), i = $(() => a.disabled ?? o.disabled.value), d = $(() => a.delayDuration ?? o.delayDuration.value), c = $(() => a.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), u = pe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    ee(u, (k) => {
      o.onClose && (k ? (o.onOpen(), document.dispatchEvent(new CustomEvent(rr))) : o.onClose());
    });
    const p = T(!1), g = T(), m = $(() => u.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: b, stop: h } = wo(() => {
      p.value = !0, u.value = !0;
    }, d, { immediate: !1 });
    function _() {
      h(), p.value = !1, u.value = !0;
    }
    function C() {
      h(), u.value = !1;
    }
    function D() {
      b();
    }
    return im({
      contentId: "",
      open: u,
      stateAttribute: m,
      trigger: g,
      onTriggerChange(k) {
        g.value = k;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? D() : _();
      },
      onTriggerLeave() {
        s.value ? C() : h();
      },
      onOpen: _,
      onClose: C,
      disableHoverableContent: s,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: c
    }), (k, O) => (v(), y(l(na), null, {
      default: f(() => [
        x(k.$slots, "default", { open: l(u) })
      ]),
      _: 3
    }));
  }
}), um = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = hn(), n = No();
    a.contentId || (a.contentId = we(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: s } = N(), r = T(!1), i = T(!1), d = $(() => a.disabled.value ? {} : {
      click: h,
      focus: m,
      pointermove: p,
      pointerleave: g,
      pointerdown: u,
      blur: b
    });
    ie(() => {
      a.onTriggerChange(s.value);
    });
    function c() {
      setTimeout(() => {
        r.value = !1;
      }, 1);
    }
    function u() {
      r.value = !0, document.addEventListener("pointerup", c, { once: !0 });
    }
    function p(_) {
      _.pointerType !== "touch" && !i.value && !n.isPointerInTransitRef.value && (a.onTriggerEnter(), i.value = !0);
    }
    function g() {
      a.onTriggerLeave(), i.value = !1;
    }
    function m(_) {
      var C, D;
      r.value || a.ignoreNonKeyboardFocus.value && !((D = (C = _.target).matches) != null && D.call(C, ":focus-visible")) || a.onOpen();
    }
    function b() {
      a.onClose();
    }
    function h() {
      a.disableClosingTrigger.value || a.onClose();
    }
    return (_, C) => (v(), y(l(pn), { "as-child": "" }, {
      default: f(() => [
        P(l(F), S({
          ref: l(o),
          "aria-describedby": l(a).open.value ? l(a).contentId : void 0,
          "data-state": l(a).stateAttribute.value,
          as: _.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Sr(d.value)), {
          default: f(() => [
            x(_.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), ir = /* @__PURE__ */ w({
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
    const a = e, n = t, o = hn(), { forwardRef: s } = N(), r = Dl(), i = $(() => {
      var u;
      return (u = r.default) == null ? void 0 : u.call(r);
    }), d = $(() => {
      var u;
      if (a.ariaLabel)
        return a.ariaLabel;
      let p = "";
      function g(m) {
        typeof m.children == "string" && m.type !== kl ? p += m.children : Array.isArray(m.children) && m.children.forEach((b) => g(b));
      }
      return (u = i.value) == null || u.forEach((m) => g(m)), p;
    }), c = $(() => {
      const { ariaLabel: u, ...p } = a;
      return p;
    });
    return ie(() => {
      Gt(window, "scroll", (u) => {
        const p = u.target;
        p != null && p.contains(o.trigger.value) && o.onClose();
      }), Gt(window, rr, o.onClose);
    }), (u, p) => (v(), y(l(ta), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (g) => n("escapeKeyDown", g)),
      onPointerDownOutside: p[1] || (p[1] = (g) => {
        var m;
        l(o).disableClosingTrigger.value && (m = l(o).trigger.value) != null && m.contains(g.target) && g.preventDefault(), n("pointerDownOutside", g);
      }),
      onFocusOutside: p[2] || (p[2] = be(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (g) => l(o).onClose())
    }, {
      default: f(() => [
        P(l(qt), S({
          ref: l(s),
          "data-state": l(o).stateAttribute.value
        }, { ...u.$attrs, ...c.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: f(() => [
            x(u.$slots, "default"),
            P(l(Sa), {
              id: l(o).contentId,
              role: "tooltip"
            }, {
              default: f(() => [
                Y(X(d.value), 1)
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
}), cm = /* @__PURE__ */ w({
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
    const t = ne(e), { forwardRef: a, currentElement: n } = N(), { trigger: o, onClose: s } = hn(), r = No(), { isPointerInTransit: i, onPointerExit: d } = Ou(o, n);
    return r.isPointerInTransitRef = i, d(() => {
      s();
    }), (c, u) => (v(), y(ir, S({ ref: l(a) }, l(t)), {
      default: f(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pm = /* @__PURE__ */ w({
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
    const a = e, n = t, o = hn(), s = te(a, n), { forwardRef: r } = N();
    return (i, d) => (v(), y(l(Me), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        (v(), y(Se(l(o).disableHoverableContent.value ? ir : cm), S({ ref: l(r) }, l(s)), {
          default: f(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), fm = /* @__PURE__ */ w({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Ea), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xe = /* @__PURE__ */ w({
  __name: "Button",
  props: {
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(F), {
      as: a.as,
      "as-child": a.asChild,
      class: re(l(z)(l(At)({ variant: a.variant, size: a.size }), t.class))
    }, {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), At = ao(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-slate-800 text-slate-50 hover:bg-slate-800/90 dark:bg-slate-300 dark:text-slate-900 dark:hover:bg-slate-300/90",
        primary: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), vm = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, mm = /* @__PURE__ */ w({
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = te(o, n);
    return (r, i) => (v(), y(l(Pc), S({
      class: l(z)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: c }) => [
        P(l(xm), null, {
          default: f(() => [
            P(l(km)),
            P(l(Cm)),
            P(l($m))
          ]),
          _: 1
        }),
        ue("div", vm, [
          (v(!0), K(J, null, he(d, (u) => (v(), y(l(ym), {
            key: u.value.toString()
          }, {
            default: f(() => [
              P(l(wm), null, {
                default: f(() => [
                  P(l(ml), null, {
                    default: f(() => [
                      (v(!0), K(J, null, he(c, (p) => (v(), y(l(_m), { key: p }, {
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
              P(l(bm), null, {
                default: f(() => [
                  (v(!0), K(J, null, he(u.rows, (p, g) => (v(), y(l(ml), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), K(J, null, he(p, (m) => (v(), y(l(hm), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          P(l(gm), {
                            day: m,
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
}), hm = /* @__PURE__ */ w({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Tc), S({
      class: l(z)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gm = /* @__PURE__ */ w({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Lc), S({
      class: l(z)(
        l(At)({ variant: "ghost" }),
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
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ym = /* @__PURE__ */ w({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Sc), S({
      class: l(z)("w-full border-collapse space-y-1", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bm = /* @__PURE__ */ w({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Vc), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wm = /* @__PURE__ */ w({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Rc), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ml = /* @__PURE__ */ w({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Fc), S({
      class: l(z)("flex", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _m = /* @__PURE__ */ w({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Mc), S({
      class: l(z)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xm = /* @__PURE__ */ w({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Oc), S({
      class: l(z)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cm = /* @__PURE__ */ w({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Ec), S({
      class: l(z)("text-sm font-medium", t.class)
    }, l(n)), {
      default: f(({ headingValue: r }) => [
        x(o.$slots, "default", { headingValue: r }, () => [
          Y(X(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $m = /* @__PURE__ */ w({
  __name: "CalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Ac), S({
      class: l(z)(
        l(At)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => s[0] || (s[0] = [
        Y(" > ")
      ])),
      _: 1
    }, 16, ["class"]));
  }
}), km = /* @__PURE__ */ w({
  __name: "CalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Ic), S({
      class: l(z)(
        l(At)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => s[0] || (s[0] = [
        Y(" < ")
      ])),
      _: 1
    }, 16, ["class"]));
  }
}), dr = /* @__PURE__ */ w({
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = te(o, n);
    return (r, i) => (v(), y(l(Qc), S(l(s), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        a.class
      ]
    }), {
      default: f(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ur = /* @__PURE__ */ w({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = te(e, t);
    return (s, r) => (v(), y(l(ju), U(H(l(o))), {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fy = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Oo), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bm = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Gu), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dm = /* @__PURE__ */ w({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("div", {
      class: re(l(z)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), Pm = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(yc), S(l(n), {
      class: l(z)(
        "text-lg font-semibold leading-none tracking-tight text-black dark:text-slate-200",
        t.class
      )
    }), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Om = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(bc), S(l(n), {
      class: l(z)("text-sm text-slate-500 dark:text-slate-500", t.class)
    }), {
      default: f(() => [
        x(o.$slots, "default")
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
const Em = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Wa = {
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
const Sm = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: s, class: r, ...i }, { slots: d }) => We(
  "svg",
  {
    ...Wa,
    width: e || Wa.width,
    height: e || Wa.height,
    stroke: n || Wa.stroke,
    "stroke-width": a ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${Em(s ?? "icon")}`],
    ...i
  },
  [...o.map((c) => We(...c)), ...d.default ? [d.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = (e, t) => (a, { slots: n }) => We(
  Sm,
  {
    ...a,
    iconNode: t,
    name: e
  },
  n
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tm = Ce("CalendarIcon", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gn = Ce("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cr = Ce("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mm = Ce("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pr = Ce("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Am = Ce("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Im = Ce("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rm = Ce("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vm = Ce("ChevronsUpDownIcon", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fm = Ce("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lm = Ce("EllipsisIcon", [
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
const Nm = Ce("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zm = Ce("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wm = Ce("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Km = Ce("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Um = Ce("SunIcon", [
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
const zo = Ce("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), fr = /* @__PURE__ */ w({
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
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = n;
      return i;
    }), s = te(o, a);
    return (r, i) => (v(), y(l(_s), null, {
      default: f(() => [
        P(l(Bs), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        P(l(ks), S(l(s), {
          class: l(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg",
            n.class
          )
        }), {
          default: f(() => [
            x(r.$slots, "default"),
            P(l(Oo), {
              onClick: i[0] || (i[0] = (d) => a("close", d)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: f(() => [
                P(l(zo), { class: "size-4 dark:text-slate-300" }),
                i[1] || (i[1] = ue("span", { class: "sr-only" }, "Close", -1))
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
}), vy = /* @__PURE__ */ w({
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = te(o, n);
    return (r, i) => (v(), y(l(_s), null, {
      default: f(() => [
        P(l(Bs), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: f(() => [
            P(l(ks), S({
              class: l(z)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg md:w-full",
                a.class
              )
            }, l(s), {
              onPointerDownOutside: i[0] || (i[0] = (d) => {
                const c = d.detail.originalEvent, u = c.target;
                (c.offsetX > u.clientWidth || c.offsetY > u.clientHeight) && d.preventDefault();
              })
            }), {
              default: f(() => [
                x(r.$slots, "default"),
                P(l(Oo), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: f(() => [
                    P(l(zo), { class: "size-4" }),
                    i[1] || (i[1] = ue("span", { class: "sr-only" }, "Close", -1))
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
}), Hm = /* @__PURE__ */ w({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("div", {
      class: re(
        l(z)(
          "flex flex-col-reverse dark:text-slate-500 sm:flex-row sm:justify-end sm:gap-x-2",
          t.class
        )
      )
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), my = /* @__PURE__ */ w({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = te(e, t);
    return (s, r) => (v(), y(l(ur), U(H(l(o))), {
      default: f(() => [
        P(l(fr), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: f(() => [
            P(dr, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: f(() => [
                x(s.$slots, "default")
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
}), jm = /* @__PURE__ */ w({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(rp), S(a.value, {
      class: l(z)("py-6 text-center text-sm", t.class)
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gm = /* @__PURE__ */ w({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(ap), S(a.value, {
      class: l(z)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: f(() => [
        n.heading ? (v(), y(l(np), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: f(() => [
            Y(X(n.heading), 1)
          ]),
          _: 1
        })) : Q("", !0),
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qm = { class: "flex items-center border-b px-3" }, Ym = /* @__PURE__ */ w({
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), K("div", qm, [
      P(l(Km), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      P(l(ep), S({ ...l(n), ...o.$attrs }, {
        "auto-focus": "",
        class: l(z)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Xm = /* @__PURE__ */ w({
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = te(o, n);
    return (r, i) => (v(), y(l(cp), S(l(s), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: f(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zm = { role: "presentation" }, Jm = /* @__PURE__ */ w({
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = te(o, n);
    return (r, i) => (v(), y(l(sp), S(l(s), {
      class: l(z)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: f(() => [
        ue("div", Zm, [
          x(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hy = /* @__PURE__ */ w({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(pp), S(a.value, {
      class: l(z)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gy = /* @__PURE__ */ w({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("span", {
      class: re(l(z)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), Qm = /* @__PURE__ */ w({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = te(e, t);
    return (s, r) => (v(), y(l(Hp), U(H(l(o))), {
      default: f(({ open: i }) => [
        x(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), eh = /* @__PURE__ */ w({
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
    return (a, n) => (v(), K("div", {
      class: re(
        l(z)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          t.class
        )
      )
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), th = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = ne(e);
    return (n, o) => (v(), y(l(jp), S({ class: "outline-none" }, l(a)), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ah = /* @__PURE__ */ w({
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = te(o, n);
    return (r, i) => (v(), y(l(Gp), null, {
      default: f(() => [
        P(l(qp), S(l(s), {
          class: l(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
            a.class
          )
        }), {
          default: f(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), yy = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Yp), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), by = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = te(e, t);
    return (s, r) => (v(), y(l(Qp), U(H(l(o))), {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wy = /* @__PURE__ */ w({
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(zs), S(l(n), {
      class: l(z)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.inset && "pl-8",
        t.class
      )
    }), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nh = /* @__PURE__ */ w({
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(eh, {
      class: re(t.class)
    }, {
      default: f(() => [
        P(l(zs), S(l(n), {
          as: o.as,
          href: o.href,
          class: "size-full"
        }), {
          default: f(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "href"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), oh = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, _y = /* @__PURE__ */ w({
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = te(o, n);
    return (r, i) => (v(), y(l(Zp), S(l(s), {
      class: l(z)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        ue("span", oh, [
          P(l(Ws), null, {
            default: f(() => [
              P(l(gn), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lh = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, xy = /* @__PURE__ */ w({
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = te(o, n);
    return (r, i) => (v(), y(l(ef), S(l(s), {
      class: l(z)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        ue("span", lh, [
          P(l(Ws), null, {
            default: f(() => [
              P(l(Fm), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cy = /* @__PURE__ */ w({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("span", {
      class: re(l(z)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), $y = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(Xp), S(a.value, {
      class: l(z)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), ky = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Jp), S(l(n), {
      class: l(z)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", t.class)
    }), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), By = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = te(e, t);
    return (s, r) => (v(), y(l(tf), U(H(l(o))), {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dy = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(nf), S(l(n), {
      class: l(z)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: f(() => [
        x(o.$slots, "default"),
        P(l(pr), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Py = /* @__PURE__ */ w({
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = te(o, n);
    return (r, i) => (v(), y(l(af), S(l(s), {
      class: l(z)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
        a.class
      )
    }), {
      default: f(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sh = { class: "text-xs text-slate-600 dark:text-slate-300" }, rh = /* @__PURE__ */ w({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(e) {
    return (t, a) => (v(), K("div", sh, "Characters: " + X(t.count), 1));
  }
}), ih = {}, dh = { class: "text-sm text-slate-400 dark:text-slate-500" };
function uh(e, t) {
  return v(), K("div", dh, [
    x(e.$slots, "default")
  ]);
}
const ch = /* @__PURE__ */ ka(ih, [["render", uh]]), ph = { class: "text-sm text-red-600 dark:text-red-400" }, fh = /* @__PURE__ */ w({
  __name: "Error",
  props: {
    error: {}
  },
  setup(e) {
    return (t, a) => Xt((v(), K("div", null, [
      ue("p", ph, X(t.error), 1)
    ], 512)), [
      [eo, t.error]
    ]);
  }
}), vh = {}, mh = { class: "w-full space-y-4 p-1.5" };
function hh(e, t) {
  return v(), K("div", mh, [
    x(e.$slots, "default")
  ]);
}
const Oy = /* @__PURE__ */ ka(vh, [["render", hh]]), gh = {}, yh = { class: "my-4" };
function bh(e, t) {
  return v(), K("div", yh, [
    x(e.$slots, "default")
  ]);
}
const wh = /* @__PURE__ */ ka(gh, [["render", bh]]), _h = { class: "grid gap-4 md:grid-cols-2" }, Ey = /* @__PURE__ */ w({
  __name: "FormGrid",
  setup(e) {
    return (t, a) => (v(), y(wh, null, {
      default: f(() => [
        ue("div", _h, [
          x(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), vr = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    id: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(of), S(a.value, {
      class: l(z)(
        "text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        t.class
      )
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xh = { class: "relative" }, Ch = {
  name: "Base",
  inheritAttrs: !1
}, wt = /* @__PURE__ */ w({
  ...Ch,
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
      return v(), K("div", null, [
        t.label && t.showLabel ? (v(), y(l(vr), {
          key: 0,
          id: t.id
        }, {
          default: f(() => [
            Y(X(t.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : Q("", !0),
        ue("div", xh, [
          x(t.$slots, "default"),
          t.showCharacterCount ? (v(), y(l(rh), {
            key: 0,
            count: (n = t.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : Q("", !0)
        ]),
        P(l(ch), { class: "mt-[5px]" }, {
          default: f(() => [
            Y(X(t.description), 1)
          ]),
          _: 1
        }),
        P(l(fh), {
          error: t.error,
          class: "mt-[3px]"
        }, null, 8, ["error"])
      ]);
    };
  }
}), $h = { class: "flex gap-2" }, Sy = /* @__PURE__ */ w({
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
    text: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, o = T(e.modelValue);
    return ee(o, (s) => {
      a("update:modelValue", s);
    }), (s, r) => (v(), y(l(wt), U(H(s.$props)), {
      default: f(() => [
        ue("div", $h, [
          P(l(Kc), {
            id: s.id,
            checked: o.value,
            "onUpdate:checked": r[0] || (r[0] = (i) => o.value = i),
            class: "data-[state=checked]:text-primary-foreground dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:text-primary-foreground peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary dark:border-primary dark:ring-offset-primary dark:data-[state=checked]:bg-primary"
          }, {
            default: f(() => [
              P(l(Uc), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: f(() => [
                  P(l(gn), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          s.text ? (v(), y(l(vr), {
            key: 0,
            id: s.id,
            class: "my-auto"
          }, {
            default: f(() => [
              Y(X(s.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : Q("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), mr = /* @__PURE__ */ w({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = te(e, t);
    return (s, r) => (v(), y(l(gf), U(H(l(o))), {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hr = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(yf), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gr = /* @__PURE__ */ w({
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = te(o, n);
    return (r, i) => (v(), y(l(bf), null, {
      default: f(() => [
        P(l(xf), S({ ...l(s), ...r.$attrs }, {
          class: l(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: f(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ty = /* @__PURE__ */ w({
  __name: "Combobox",
  props: {
    modelValue: {},
    placeholder: {},
    emptyMessage: {},
    options: {},
    multiple: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = $(() => n.emptyMessage ?? "Option not found"), s = $(() => n.placeholder ?? "Select an option"), r = T(!1), i = T(n.modelValue ?? []), d = (p, g) => p.filter((m) => m.name.toLowerCase().includes(g.toLowerCase())), c = $(() => {
      var p;
      return Array.isArray(i.value) ? i.value.length ? i.value.map((g) => g.name).join(", ") : s.value : typeof i.value == "object" ? i.value.name : (p = n.options.find((g) => g.id === i.value)) == null ? void 0 : p.name;
    }), u = (p) => Array.isArray(i.value) ? i.value.find((g) => g.id === p.id) : typeof i.value == "object" ? i.value.id === p.id : i.value === p.id;
    return ee(i, () => {
      Array.isArray(i.value) ? a("update:modelValue", i.value) : a("update:modelValue", i.value.id);
    }), (p, g) => (v(), y(l(wt), U(H(p.$props)), {
      default: f(() => [
        P(l(mr), {
          open: r.value,
          "onUpdate:open": g[2] || (g[2] = (m) => r.value = m)
        }, {
          default: f(() => [
            P(l(hr), { "as-child": "" }, {
              default: f(() => [
                P(l(Xe), {
                  variant: "outline",
                  role: "combobox",
                  "aria-expanded": r.value,
                  class: "w-[200px] justify-between overflow-hidden"
                }, {
                  default: f(() => [
                    Y(X(c.value) + " ", 1),
                    P(l(Vm), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
                  ]),
                  _: 1
                }, 8, ["aria-expanded"])
              ]),
              _: 1
            }),
            P(l(gr), { class: "w-[200px] p-0" }, {
              default: f(() => [
                P(l(dr), {
                  multiple: p.multiple,
                  modelValue: i.value,
                  "onUpdate:modelValue": g[1] || (g[1] = (m) => i.value = m),
                  "filter-function": d
                }, {
                  default: f(() => [
                    P(l(Ym), {
                      class: "h-9",
                      placeholder: s.value
                    }, null, 8, ["placeholder"]),
                    P(l(jm), null, {
                      default: f(() => [
                        Y(X(o.value), 1)
                      ]),
                      _: 1
                    }),
                    P(l(Jm), null, {
                      default: f(() => [
                        P(l(Gm), null, {
                          default: f(() => [
                            (v(!0), K(J, null, he(p.options, (m) => (v(), y(l(Xm), {
                              key: m.id,
                              value: m,
                              onSelect: g[0] || (g[0] = () => {
                                p.multiple || (r.value = !1);
                              })
                            }, {
                              default: f(() => [
                                Y(X(m.name) + " ", 1),
                                P(l(gn), {
                                  class: re(l(z)("ml-auto size-4", u(m) ? "opacity-100" : "opacity-0"))
                                }, null, 8, ["class"])
                              ]),
                              _: 2
                            }, 1032, ["value"]))), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["multiple", "modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ]),
      _: 1
    }, 16));
  }
}), My = /* @__PURE__ */ w({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = new Qe("en-US", {
      dateStyle: "long"
    }), s = T();
    return ee(s, () => {
      a("update:modelValue", s.value);
    }), ie(() => {
      n.defaultValue && (s.value = n.defaultValue);
    }), (r, i) => (v(), y(l(wt), U(H(r.$props)), {
      default: f(() => [
        P(l(mr), null, {
          default: f(() => [
            P(l(hr), { "as-child": "" }, {
              default: f(() => [
                P(l(Xe), {
                  variant: "outline",
                  class: re([
                    "w-[280px] justify-start text-left font-normal dark:text-white",
                    !r.modelValue && "text-muted-foreground"
                  ])
                }, {
                  default: f(() => [
                    P(l(Tm), { class: "mr-2 size-4" }),
                    Y(" " + X(s.value ? l(o).format(s.value.toDate(l(Bt)())) : r.placeholder), 1)
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            }),
            P(l(gr), { class: "w-auto p-0" }, {
              default: f(() => [
                P(l(mm), {
                  modelValue: s.value,
                  "onUpdate:modelValue": i[0] || (i[0] = (d) => s.value = d),
                  "default-value": r.defaultValue,
                  "initial-focus": ""
                }, null, 8, ["modelValue", "default-value"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16));
  }
});
var _e = [];
for (var Tn = 0; Tn < 256; ++Tn)
  _e.push((Tn + 256).toString(16).slice(1));
function kh(e, t = 0) {
  return (_e[e[t + 0]] + _e[e[t + 1]] + _e[e[t + 2]] + _e[e[t + 3]] + "-" + _e[e[t + 4]] + _e[e[t + 5]] + "-" + _e[e[t + 6]] + _e[e[t + 7]] + "-" + _e[e[t + 8]] + _e[e[t + 9]] + "-" + _e[e[t + 10]] + _e[e[t + 11]] + _e[e[t + 12]] + _e[e[t + 13]] + _e[e[t + 14]] + _e[e[t + 15]]).toLowerCase();
}
var Ka, Bh = new Uint8Array(16);
function Dh() {
  if (!Ka && (Ka = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ka))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ka(Bh);
}
var Ph = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const hl = {
  randomUUID: Ph
};
function Oh(e, t, a) {
  if (hl.randomUUID && !t && !e)
    return hl.randomUUID();
  e = e || {};
  var n = e.random || (e.rng || Dh)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, kh(n);
}
const Eh = { class: "flex items-center space-x-2" }, Sh = ["src"], Th = ["accept"], Ay = /* @__PURE__ */ w({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = "file-upload-" + Oh(), s = $(() => i.value ? URL.createObjectURL(i.value) : null), r = a.currentImage ? a.currentImage : a.defaultImage, i = $({
      get: () => a.modelValue,
      set: (u) => n("update:modelValue", u)
    }), d = (u) => {
      i.value = u.target.files[0];
    }, c = () => document.getElementById(o).click();
    return (u, p) => (v(), y(l(wt), U(H(u.$props)), {
      default: f(() => [
        ue("div", Eh, [
          x(u.$slots, "image", {
            newImage: s.value,
            curImage: l(r)
          }, () => [
            ue("img", {
              src: s.value ?? l(r),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, Sh)
          ]),
          ue("input", {
            id: o,
            accept: u.accept,
            hidden: "",
            type: "file",
            onInput: d
          }, null, 40, Th),
          P(l(Xe), {
            variant: "outline",
            onClick: c
          }, {
            default: f(() => p[0] || (p[0] = [
              Y(" Upload ")
            ])),
            _: 1
          })
        ])
      ]),
      _: 3
    }, 16));
  }
}), Mh = ["disabled", "placeholder", "required", "type"], Iy = /* @__PURE__ */ w({
  __name: "Input",
  props: /* @__PURE__ */ In({
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
    const t = Ml(e, "modelValue");
    return (a, n) => (v(), y(l(wt), U(H(a.$props)), {
      default: f(() => [
        Xt(ue("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: re(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
          }])
        }, null, 10, Mh), [
          [Fr, t.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), Ah = /* @__PURE__ */ w({
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
    const o = te(e, t);
    return (s, r) => (v(), y(l(Uf), U(H(l(o))), {
      default: f(({ open: i }) => [
        x(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Ih = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(vv), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rh = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    open: { type: Boolean }
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Gf), S(l(n), {
      class: l(z)(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-start text-sm ring-offset-background transition placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        t.class
      )
    }), {
      default: f(() => [
        x(o.$slots, "default"),
        P(l(mv), { "as-child": "" }, {
          default: f(() => [
            P(l(cr), {
              class: re(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vh = /* @__PURE__ */ w({
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = te(o, n);
    return (r, i) => (v(), y(l(qf), null, {
      default: f(() => [
        P(l(av), S({ ...l(s), ...r.$attrs }, {
          class: l(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            r.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: f(() => [
            P(l(Nh)),
            P(l(cv), {
              class: re(
                l(z)(
                  "p-1",
                  r.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: f(() => [
                x(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            P(l(zh))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ry = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(dv), S({
      class: l(z)("w-full p-1", t.class)
    }, a.value), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fh = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Lh = /* @__PURE__ */ w({
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(lv), S(l(n), {
      class: l(z)(
        "focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        t.class
      )
    }), {
      default: f(() => [
        ue("span", Fh, [
          P(l(sv), null, {
            default: f(() => [
              P(l(gn), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        P(l(Gs), null, {
          default: f(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vy = /* @__PURE__ */ w({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Gs), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fy = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(uv), {
      class: re(l(z)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ly = /* @__PURE__ */ w({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(nv), S(a.value, {
      class: l(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Nh = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(pv), S(l(n), {
      class: l(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        x(o.$slots, "default", {}, () => [
          P(l(Am), { class: "size-4 text-primary" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zh = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(fv), S(l(n), {
      class: l(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        x(o.$slots, "default", {}, () => [
          P(l(cr), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ny = /* @__PURE__ */ w({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = $(() => n.placeholder ?? "Select an option..."), s = T(
      n.modelValue ? n.options.find((r) => r === n.modelValue) : null
    );
    return ee(s, () => {
      a("update:modelValue", s.value);
    }), (r, i) => (v(), y(l(wt), U(H(r.$props)), {
      default: f(() => [
        P(l(Ah), {
          modelValue: s.value,
          "onUpdate:modelValue": i[0] || (i[0] = (d) => s.value = d)
        }, {
          default: f(({ open: d }) => [
            P(l(Rh), { open: d }, {
              default: f(() => [
                P(l(Ih), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            P(l(Vh), null, {
              default: f(() => [
                (v(!0), K(J, null, he(r.options, (c) => (v(), y(l(Lh), { value: c }, {
                  default: f(() => [
                    Y(X(c), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]))), 256))
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
});
function yr(e) {
  return Jn() ? (Qn(e), !0) : !1;
}
function yn(e) {
  return typeof e == "function" ? e() : l(e);
}
const Wh = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Kh = (e) => typeof e < "u", Uh = Object.prototype.toString, Hh = (e) => Uh.call(e) === "[object Object]", br = () => {
};
function jh(e, t) {
  function a(...n) {
    return new Promise((o, s) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(s);
    });
  }
  return a;
}
const wr = (e) => e();
function Gh(e = wr) {
  const t = T(!0);
  function a() {
    t.value = !1;
  }
  function n() {
    t.value = !0;
  }
  const o = (...s) => {
    t.value && e(...s);
  };
  return { isActive: $a(t), pause: a, resume: n, eventFilter: o };
}
function qh(e) {
  return je();
}
function Yh(...e) {
  if (e.length !== 1)
    return Cl(...e);
  const t = e[0];
  return typeof t == "function" ? $a(Sl(() => ({ get: t, set: br }))) : T(t);
}
function Xh(e, t, a = {}) {
  const {
    eventFilter: n = wr,
    ...o
  } = a;
  return ee(
    e,
    jh(
      n,
      t
    ),
    o
  );
}
function Zh(e, t, a = {}) {
  const {
    eventFilter: n,
    ...o
  } = a, { eventFilter: s, pause: r, resume: i, isActive: d } = Gh(n);
  return { stop: Xh(
    e,
    t,
    {
      ...o,
      eventFilter: s
    }
  ), pause: r, resume: i, isActive: d };
}
function _r(e, t = !0, a) {
  qh() ? ie(e, a) : t ? e() : ae(e);
}
function xr(e) {
  var t;
  const a = yn(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const Yt = Wh ? window : void 0;
function gl(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = Yt) : [t, a, n, o] = e, !t)
    return br;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((u) => u()), s.length = 0;
  }, i = (u, p, g, m) => (u.addEventListener(p, g, m), () => u.removeEventListener(p, g, m)), d = ee(
    () => [xr(t), yn(o)],
    ([u, p]) => {
      if (r(), !u)
        return;
      const g = Hh(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((b) => i(u, m, b, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), r();
  };
  return yr(c), c;
}
function Jh() {
  const e = T(!1), t = je();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function Qh(e) {
  const t = Jh();
  return $(() => (t.value, !!e()));
}
function eg(e, t = {}) {
  const { window: a = Yt } = t, n = Qh(() => a && "matchMedia" in a && typeof a.matchMedia == "function");
  let o;
  const s = T(!1), r = (c) => {
    s.value = c.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", r) : o.removeListener(r));
  }, d = ge(() => {
    n.value && (i(), o = a.matchMedia(yn(e)), "addEventListener" in o ? o.addEventListener("change", r) : o.addListener(r), s.value = o.matches);
  });
  return yr(() => {
    d(), i(), o = void 0;
  }), s;
}
function tg(e) {
  return JSON.parse(JSON.stringify(e));
}
const Ua = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ha = "__vueuse_ssr_handlers__", ag = /* @__PURE__ */ ng();
function ng() {
  return Ha in Ua || (Ua[Ha] = Ua[Ha] || {}), Ua[Ha];
}
function Cr(e, t) {
  return ag[e] || t;
}
function og(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const lg = {
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
}, yl = "vueuse-storage";
function sg(e, t, a, n = {}) {
  var o;
  const {
    flush: s = "pre",
    deep: r = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: d = !0,
    mergeDefaults: c = !1,
    shallow: u,
    window: p = Yt,
    eventFilter: g,
    onError: m = (B) => {
      console.error(B);
    },
    initOnMounted: b
  } = n, h = (u ? Zn : T)(typeof t == "function" ? t() : t);
  if (!a)
    try {
      a = Cr("getDefaultStorage", () => {
        var B;
        return (B = Yt) == null ? void 0 : B.localStorage;
      })();
    } catch (B) {
      m(B);
    }
  if (!a)
    return h;
  const _ = yn(t), C = og(_), D = (o = n.serializer) != null ? o : lg[C], { pause: k, resume: O } = Zh(
    h,
    () => I(h.value),
    { flush: s, deep: r, eventFilter: g }
  );
  p && i && _r(() => {
    gl(p, "storage", L), gl(p, yl, V), b && L();
  }), b || L();
  function E(B, A) {
    p && p.dispatchEvent(new CustomEvent(yl, {
      detail: {
        key: e,
        oldValue: B,
        newValue: A,
        storageArea: a
      }
    }));
  }
  function I(B) {
    try {
      const A = a.getItem(e);
      if (B == null)
        E(A, null), a.removeItem(e);
      else {
        const R = D.write(B);
        A !== R && (a.setItem(e, R), E(A, R));
      }
    } catch (A) {
      m(A);
    }
  }
  function M(B) {
    const A = B ? B.newValue : a.getItem(e);
    if (A == null)
      return d && _ != null && a.setItem(e, D.write(_)), _;
    if (!B && c) {
      const R = D.read(A);
      return typeof c == "function" ? c(R, _) : C === "object" && !Array.isArray(R) ? { ..._, ...R } : R;
    } else return typeof A != "string" ? A : D.read(A);
  }
  function L(B) {
    if (!(B && B.storageArea !== a)) {
      if (B && B.key == null) {
        h.value = _;
        return;
      }
      if (!(B && B.key !== e)) {
        k();
        try {
          (B == null ? void 0 : B.newValue) !== D.write(h.value) && (h.value = M(B));
        } catch (A) {
          m(A);
        } finally {
          B ? ae(O) : O();
        }
      }
    }
  }
  function V(B) {
    L(B.detail);
  }
  return h;
}
function $r(e) {
  return eg("(prefers-color-scheme: dark)", e);
}
function rg(e = {}) {
  const {
    selector: t = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = Yt,
    storage: s,
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
  }, g = $r({ window: o }), m = $(() => g.value ? "dark" : "light"), b = d || (r == null ? Yh(n) : sg(r, n, s, { window: o, listenToStorageChanges: i })), h = $(() => b.value === "auto" ? m.value : b.value), _ = Cr(
    "updateHTMLAttrs",
    (O, E, I) => {
      const M = typeof O == "string" ? o == null ? void 0 : o.document.querySelector(O) : xr(O);
      if (!M)
        return;
      let L;
      if (u && (L = o.document.createElement("style"), L.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(L)), E === "class") {
        const V = I.split(/\s/g);
        Object.values(p).flatMap((B) => (B || "").split(/\s/g)).filter(Boolean).forEach((B) => {
          V.includes(B) ? M.classList.add(B) : M.classList.remove(B);
        });
      } else
        M.setAttribute(E, I);
      u && (o.getComputedStyle(L).opacity, document.head.removeChild(L));
    }
  );
  function C(O) {
    var E;
    _(t, a, (E = p[O]) != null ? E : O);
  }
  function D(O) {
    e.onChanged ? e.onChanged(O, C) : C(O);
  }
  ee(h, D, { flush: "post", immediate: !0 }), _r(() => D(h.value));
  const k = $({
    get() {
      return c ? b.value : h.value;
    },
    set(O) {
      b.value = O;
    }
  });
  try {
    return Object.assign(k, { store: b, system: m, state: h });
  } catch {
    return k;
  }
}
function ig(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: a = "",
    window: n = Yt
  } = e, o = rg({
    ...e,
    onChanged: (i, d) => {
      var c;
      e.onChanged ? (c = e.onChanged) == null || c.call(e, i === "dark", d, i) : d(i);
    },
    modes: {
      dark: t,
      light: a
    }
  }), s = $(() => o.system ? o.system.value : $r({ window: n }).value ? "dark" : "light");
  return $({
    get() {
      return o.value === "dark";
    },
    set(i) {
      const d = i ? "dark" : "light";
      s.value === d ? o.value = "auto" : o.value = d;
    }
  });
}
function dg(e, t, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = je(), b = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let h = c;
  h = h || `update:${t.toString()}`;
  const _ = (k) => i ? typeof i == "function" ? i(k) : tg(k) : k, C = () => Kh(e[t]) ? _(e[t]) : p, D = (k) => {
    g ? g(k) && b(h, k) : b(h, k);
  };
  if (d) {
    const k = C(), O = T(k);
    let E = !1;
    return ee(
      () => e[t],
      (I) => {
        E || (E = !0, O.value = _(I), ae(() => E = !1));
      }
    ), ee(
      O,
      (I) => {
        !E && (I !== e[t] || u) && D(I);
      },
      { deep: u }
    ), O;
  } else
    return $({
      get() {
        return C();
      },
      set(k) {
        D(k);
      }
    });
}
const ug = ["placeholder"], zy = /* @__PURE__ */ w({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = dg(e, "modelValue", t, {
      passive: !0
    });
    return (s, r) => (v(), y(l(wt), U(H(s.$props)), {
      default: f(() => [
        Xt(ue("textarea", {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => Ca(o) ? o.value = i : null),
          placeholder: s.placeholder,
          class: re(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !s.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": s.error
          }])
        }, null, 10, ug), [
          [Lr, l(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), cg = /* @__PURE__ */ w({
  __name: "Toggle",
  props: /* @__PURE__ */ In({
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
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ In(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const a = t, n = e, o = Ml(e, "modelValue");
    ee(o, () => {
      a("update:modelValue", o.value);
    });
    const s = $(() => {
      const { class: i, ...d } = n;
      return d;
    }), r = te(s, a);
    return (i, d) => (v(), y(l(wt), U(H(i.$props)), {
      default: f(() => [
        P(l(Vv), S({
          checked: o.value,
          "onUpdate:checked": d[0] || (d[0] = (c) => o.value = c)
        }, l(r), {
          class: l(z)(
            "data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-primary",
            n.class
          )
        }), {
          default: f(({ checked: c }) => [
            P(l(Fv), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: f(() => [
                c ? x(i.$slots, "checked", { key: 0 }) : Q("", !0),
                c ? Q("", !0) : x(i.$slots, "not-checked", { key: 1 })
              ]),
              _: 2
            }, 1024)
          ]),
          _: 3
        }, 16, ["checked", "class"])
      ]),
      _: 3
    }, 16));
  }
}), pg = { class: "my-auto text-slate-400 dark:text-slate-100" }, fg = /* @__PURE__ */ w({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, a) => (v(), K("div", pg, " Showing " + X(t.min) + " to " + X(t.max) + " of " + X(t.total) + " results ", 1));
  }
}), vg = /* @__PURE__ */ w({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(rf), S(a.value, {
      class: l(z)("flex size-9 items-center justify-center", t.class)
    }), {
      default: f(() => [
        x(n.$slots, "default", {}, () => [
          P(l(Lm))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mg = /* @__PURE__ */ w({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(df), U(H(a.value)), {
      default: f(() => [
        P(l(Xe), {
          class: re(l(z)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            x(n.$slots, "default", {}, () => [
              P(l(Im), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), hg = /* @__PURE__ */ w({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(uf), U(H(a.value)), {
      default: f(() => [
        P(l(Xe), {
          class: re(l(z)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            x(n.$slots, "default", {}, () => [
              P(l(Rm), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), gg = /* @__PURE__ */ w({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(vf), U(H(a.value)), {
      default: f(() => [
        P(l(Xe), {
          class: re(l(z)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            x(n.$slots, "default", {}, () => [
              P(l(pr), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), yg = /* @__PURE__ */ w({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(mf), U(H(a.value)), {
      default: f(() => [
        P(l(Xe), {
          class: re(l(z)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            x(n.$slots, "default", {}, () => [
              P(l(Mm), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), Wy = /* @__PURE__ */ w({
  __name: "LumuixModeToggle",
  setup(e) {
    const t = ig({
      selector: "html"
    });
    return (a, n) => (v(), y(cg, {
      modelValue: l(t),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => Ca(t) ? t.value = o : null)
    }, {
      checked: f(() => [
        P(l(Nm), { class: "m-auto mt-0.5 size-4 text-primary" })
      ]),
      "not-checked": f(() => [
        P(l(Um), { class: "m-auto mt-0.5 size-4 text-primary" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Ky = /* @__PURE__ */ w({
  __name: "CollapsibleTableRow",
  props: {
    row: {},
    headers: {},
    subRows: {},
    setOpenTo: { type: Boolean, default: !1 },
    class: {}
  },
  setup(e) {
    const t = e, a = T(t.setOpenTo), n = () => {
      a.value = !a.value;
    };
    return (o, s) => (v(), K(J, null, [
      P(l(xa), {
        onClick: n,
        class: re(t.class)
      }, {
        default: f(() => [
          (v(!0), K(J, null, he(o.headers, (r) => (v(), y(l(tn), {
            key: r.value
          }, {
            default: f(() => [
              o.$slots[`cell_header_${r.value}`] ? x(o.$slots, `cell_header_${r.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (v(), K(J, { key: 1 }, [
                Y(X(o.row[r.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (v(), y(l(Xn), { key: 0 }, {
            default: f(() => [
              x(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : Q("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (v(!0), K(J, { key: 0 }, he(o.subRows, (r, i) => (v(), y(l(xa), { key: i }, {
        default: f(() => [
          (v(!0), K(J, null, he(o.headers, (d) => (v(), y(l(tn), {
            key: d.value
          }, {
            default: f(() => [
              o.$slots[`subrow_cell_${d.value}`] ? x(o.$slots, `subrow_cell_${d.value}`, {
                key: 0,
                item: r,
                open: a.value
              }) : (v(), K(J, { key: 1 }, [
                Y(X("subrow_cell_" + d.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (v(), y(l(Xn), { key: 0 }, {
            default: f(() => [
              x(o.$slots, "sub_row_actions", {
                item: o.row,
                open: a.value
              })
            ]),
            _: 3
          })) : Q("", !0)
        ]),
        _: 2
      }, 1024))), 128)) : Q("", !0)
    ], 64));
  }
}), bg = { class: "relative w-full overflow-auto" }, wg = /* @__PURE__ */ w({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("div", bg, [
      ue("table", {
        class: re(l(z)("w-full caption-bottom text-sm", t.class))
      }, [
        x(a.$slots, "default")
      ], 2)
    ]));
  }
}), _g = /* @__PURE__ */ w({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("tbody", {
      class: re(l(z)("[&_tr:last-child]:border-0", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), tn = /* @__PURE__ */ w({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("td", {
      class: re(["p-4 align-middle dark:text-slate-300 [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), xg = /* @__PURE__ */ w({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("th", {
      class: re(
        l(z)(
          "h-12 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400 [&:has([role=checkbox])]:pr-0",
          t.class
        )
      )
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), Cg = /* @__PURE__ */ w({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("thead", {
      class: re(l(z)("[&_tr]:border-b", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), Uy = /* @__PURE__ */ w({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("tfoot", {
      class: re(
        l(z)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0",
          t.class
        )
      )
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), xa = /* @__PURE__ */ w({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("tr", {
      class: re(
        l(z)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          t.class
        )
      )
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), Xn = /* @__PURE__ */ w({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("td", {
      class: re(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), $g = /* @__PURE__ */ w({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("caption", {
      class: re(l(z)("mt-4 text-sm text-slate-500 dark:text-slate-400", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), kg = { class: "flex items-center justify-center py-10" }, Hy = /* @__PURE__ */ w({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(xa, null, {
      default: f(() => [
        P(tn, S({
          class: l(z)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, a.value), {
          default: f(() => [
            ue("div", kg, [
              x(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), jy = /* @__PURE__ */ w({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, a) => (v(), y(l(wg), null, {
      default: f(() => [
        t.caption ? (v(), y(l($g), { key: 0 }, {
          default: f(() => [
            Y(X(t.caption), 1)
          ]),
          _: 1
        })) : Q("", !0),
        P(l(Cg), null, {
          default: f(() => [
            P(l(xa), null, {
              default: f(() => [
                (v(!0), K(J, null, he(t.headers, (n, o) => (v(), y(l(xg), null, {
                  default: f(() => [
                    t.$slots[`header_${t.headers[o].value}`] ? x(t.$slots, `header_${t.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (v(), K(J, { key: 1 }, [
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
        P(l(_g), null, {
          default: f(() => [
            (v(!0), K(J, null, he(t.rows, (n, o) => (v(), y(l(xa), { key: o }, {
              default: f(() => [
                (v(!0), K(J, null, he(t.headers, (s) => (v(), y(l(tn), {
                  key: s.value
                }, {
                  default: f(() => [
                    t.$slots[`cell_${s.value}`] ? x(t.$slots, `cell_${s.value}`, {
                      key: 0,
                      item: n
                    }) : (v(), K(J, { key: 1 }, [
                      Y(X(n[s.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                t.$slots.row_actions ? (v(), y(l(Xn), { key: 0 }, {
                  default: f(() => [
                    x(t.$slots, "row_actions", { item: n })
                  ]),
                  _: 2
                }, 1024)) : Q("", !0)
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
}), Bg = { class: "text-black dark:text-slate-400" }, Gy = /* @__PURE__ */ w({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const a = t, n = () => a("close");
    return (o, s) => (v(), y(l(ur), { open: o.open }, {
      default: f(() => [
        P(l(Bm), { "as-child": "" }, {
          default: f(() => [
            x(o.$slots, "trigger")
          ]),
          _: 3
        }),
        P(l(fr), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: re("max-w-" + o.size)
        }, {
          default: f(() => [
            P(l(Dm), null, {
              default: f(() => [
                P(l(Pm), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.title ? x(o.$slots, "title", { key: 0 }) : (r = o.headerData) != null && r.title ? (v(), K(J, { key: 1 }, [
                        Y(X(o.headerData.title), 1)
                      ], 64)) : Q("", !0)
                    ];
                  }),
                  _: 3
                }),
                P(l(Om), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.description ? x(o.$slots, "description", { key: 0 }) : (r = o.headerData) != null && r.description ? (v(), K(J, { key: 1 }, [
                        Y(X(o.headerData.description), 1)
                      ], 64)) : Q("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            ue("div", Bg, [
              o.$slots.content ? x(o.$slots, "content", { key: 0 }) : x(o.$slots, "default", { key: 1 })
            ]),
            P(l(Hm), null, {
              default: f(() => [
                x(o.$slots, "footer")
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
}), Dg = { class: "justify-between sm:flex" }, qy = /* @__PURE__ */ w({
  __name: "LumuixPagination",
  props: {
    data: {},
    as: {}
  },
  setup(e) {
    const t = e, a = () => t.data.current_page === 1 ? t.data.data.length === 0 ? 0 : 1 : t.data.current_page === t.data.last_page ? t.data.total - t.data.data.length : t.data.current_page * t.data.per_page - t.data.per_page, n = () => t.data.current_page === 1 ? t.data.data.length : t.data.current_page === t.data.last_page ? t.data.total : t.data.current_page * t.data.per_page;
    return (o, s) => (v(), K("div", Dg, [
      P(l(fg), {
        min: a(),
        max: n(),
        total: o.data.total
      }, null, 8, ["min", "max", "total"]),
      P(l(sf), null, {
        default: f(() => [
          P(l(ff), { class: "flex items-center gap-1" }, {
            default: f(() => [
              P(l(mg), {
                as: o.as,
                "as-child": "",
                href: o.data.first_page_url
              }, null, 8, ["as", "href"]),
              o.data.prev_page_url ? (v(), y(l(yg), {
                key: 0,
                as: o.as,
                "as-child": "",
                href: o.data.prev_page_url
              }, null, 8, ["as", "href"])) : Q("", !0),
              (v(!0), K(J, null, he(o.data.links, (r, i) => (v(), K(J, null, [
                i < 5 ? (v(), K("div", { key: i }, [
                  P(l(Xe), {
                    href: r.url,
                    as: o.as,
                    class: "size-10 p-0",
                    variant: r.active ? "primary" : "outline"
                  }, {
                    default: f(() => [
                      Y(X(r.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["href", "as", "variant"])
                ])) : Q("", !0)
              ], 64))), 256)),
              o.data.links.length > 5 ? (v(), y(l(vg), { key: 1 })) : Q("", !0),
              o.data.next_page_url ? (v(), y(l(gg), {
                key: 2,
                as: o.as,
                "as-child": "",
                href: o.data.next_page_url
              }, null, 8, ["as", "href"])) : Q("", !0),
              P(l(hg), {
                as: o.as,
                "as-child": "",
                href: o.data.last_page_url
              }, null, 8, ["as", "href"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}), Pg = /* @__PURE__ */ w({
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
    const o = te(e, t);
    return (s, r) => (v(), y(l(Nv), U(H(l(o))), {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yy = /* @__PURE__ */ w({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Kv), S(l(n), {
      class: l(z)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        t.class
      )
    }), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Og = /* @__PURE__ */ w({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => {
      var o;
      return v(), y(Se((o = a.tab) != null && o.is ? a.tab.is : "a"), {
        href: a.tab.href,
        class: re([
          a.tab.active ? "bg-white text-primary hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          l(z)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            t.class
          )
        ])
      }, {
        default: f(() => {
          var s;
          return [
            (s = a.tab) != null && s.icon ? (v(), y(Se(a.tab.icon), {
              key: 0,
              class: "size-5"
            })) : Q("", !0),
            Y(" " + X(a.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), bl = /* @__PURE__ */ w({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(zv), S(a.value, {
      class: l(z)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        t.class
      )
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xy = /* @__PURE__ */ w({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(Wv), S({
      class: l(z)(
        "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        t.class
      )
    }, a.value), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Eg = {}, Sg = { class: "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function Tg(e, t) {
  return v(), K("div", Sg, [
    x(e.$slots, "default")
  ]);
}
const Mg = /* @__PURE__ */ ka(Eg, [["render", Tg]]), Zy = /* @__PURE__ */ w({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(e) {
    const t = e, a = $(
      () => t.tabs.find((n) => n.active)
    );
    return (n, o) => (v(), y(l(Pg), null, {
      default: f(() => [
        P(l(bl), { class: "hidden gap-2 md:block" }, {
          default: f(() => [
            (v(!0), K(J, null, he(n.tabs, (s) => (v(), y(l(Og), {
              key: s.name,
              tab: s
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        P(l(bl), { class: "flex md:hidden" }, {
          default: f(() => [
            P(l(Qm), null, {
              default: f(() => [
                P(l(th), { "as-child": "" }, {
                  default: f(() => [
                    P(l(Xe), { variant: "secondary" }, {
                      default: f(() => {
                        var s;
                        return [
                          Y(X(((s = a.value) == null ? void 0 : s.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                P(l(ah), { class: "w-full" }, {
                  default: f(() => [
                    (v(!0), K(J, null, he(n.tabs, (s) => (v(), y(l(nh), S({
                      key: s.name,
                      ref_for: !0
                    }, s), {
                      default: f(() => [
                        Y(X(s.name), 1)
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
        P(l(Mg), null, {
          default: f(() => [
            x(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Ag = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, Jy = /* @__PURE__ */ w({
  __name: "RangeCalendar",
  props: {
    defaultPlaceholder: {},
    defaultValue: {},
    modelValue: {},
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
  emits: ["update:modelValue", "update:placeholder", "update:startValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = te(o, n);
    return (r, i) => (v(), y(l(Df), S({
      class: l(z)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: c }) => [
        P(l(zg), null, {
          default: f(() => [
            P(l(Ug)),
            P(l(Wg)),
            P(l(Kg))
          ]),
          _: 1
        }),
        ue("div", Ag, [
          (v(!0), K(J, null, he(d, (u) => (v(), y(l(Vg), {
            key: u.value.toString()
          }, {
            default: f(() => [
              P(l(Lg), null, {
                default: f(() => [
                  P(l(wl), null, {
                    default: f(() => [
                      (v(!0), K(J, null, he(c, (p) => (v(), y(l(Ng), { key: p }, {
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
              P(l(Fg), null, {
                default: f(() => [
                  (v(!0), K(J, null, he(u.rows, (p, g) => (v(), y(l(wl), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), K(J, null, he(p, (m) => (v(), y(l(Ig), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          P(l(Rg), {
                            day: m,
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
}), Ig = /* @__PURE__ */ w({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Sf), S({
      class: l(z)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rg = /* @__PURE__ */ w({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Ff), S({
      class: l(z)(
        l(At)({ variant: "ghost" }),
        "h-9 w-9 p-0 font-normal data-[selected]:opacity-100",
        "[&[data-today]:not([data-selected])]:bg-slate-100 [&[data-today]:not([data-selected])]:text-slate-900 dark:[&[data-today]:not([data-selected])]:bg-slate-800 dark:[&[data-today]:not([data-selected])]:text-slate-50",
        // Selection Start
        "data-[selection-start]:bg-slate-900 data-[selection-start]:text-slate-50 data-[selection-start]:hover:bg-slate-900 data-[selection-start]:hover:text-slate-50 data-[selection-start]:focus:bg-slate-900 data-[selection-start]:focus:text-slate-50 dark:data-[selection-start]:bg-slate-50 dark:data-[selection-start]:text-slate-900 dark:data-[selection-start]:hover:bg-slate-50 dark:data-[selection-start]:hover:text-slate-900 dark:data-[selection-start]:focus:bg-slate-50 dark:data-[selection-start]:focus:text-slate-900",
        // Selection End
        "data-[selection-end]:bg-slate-900 data-[selection-end]:text-slate-50 data-[selection-end]:hover:bg-slate-900 data-[selection-end]:hover:text-slate-50 data-[selection-end]:focus:bg-slate-900 data-[selection-end]:focus:text-slate-50 dark:data-[selection-end]:bg-slate-50 dark:data-[selection-end]:text-slate-900 dark:data-[selection-end]:hover:bg-slate-50 dark:data-[selection-end]:hover:text-slate-900 dark:data-[selection-end]:focus:bg-slate-50 dark:data-[selection-end]:focus:text-slate-900",
        // Outside months
        "data-[outside-view]:text-slate-500 data-[outside-view]:opacity-50 dark:data-[outside-view]:text-slate-400 [&[data-outside-view][data-selected]]:bg-slate-100/50 [&[data-outside-view][data-selected]]:text-slate-500 [&[data-outside-view][data-selected]]:opacity-30 dark:[&[data-outside-view][data-selected]]:bg-slate-800/50 dark:[&[data-outside-view][data-selected]]:text-slate-400",
        // Disabled
        "data-[disabled]:text-slate-500 data-[disabled]:opacity-50 dark:data-[disabled]:text-slate-400",
        // Unavailable
        "data-[unavailable]:text-slate-50 data-[unavailable]:line-through dark:data-[unavailable]:text-slate-50",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vg = /* @__PURE__ */ w({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Ef), S({
      class: l(z)("w-full border-collapse space-y-1", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fg = /* @__PURE__ */ w({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Rf), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lg = /* @__PURE__ */ w({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(If), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wl = /* @__PURE__ */ w({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Vf), S({
      class: l(z)("mt-2 flex w-full", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ng = /* @__PURE__ */ w({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Tf), S({
      class: l(z)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zg = /* @__PURE__ */ w({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Pf), S({
      class: l(z)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wg = /* @__PURE__ */ w({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Of), S({
      class: l(z)("text-sm font-medium", t.class)
    }, l(n)), {
      default: f(({ headingValue: r }) => [
        x(o.$slots, "default", { headingValue: r }, () => [
          Y(X(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kg = /* @__PURE__ */ w({
  __name: "RangeCalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Mf), S({
      class: l(z)(
        l(At)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default", {}, () => [
          P(l(Wm), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ug = /* @__PURE__ */ w({
  __name: "RangeCalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Af), S({
      class: l(z)(
        l(At)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default", {}, () => [
          P(l(zm), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qy = /* @__PURE__ */ w({
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = te(o, n);
    return (r, i) => (v(), y(l(Pv), S({
      class: l(z)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        a.class
      )
    }, l(s)), {
      default: f(() => [
        P(l(Sv), { class: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary data-[orientation=vertical]:w-2" }, {
          default: f(() => [
            P(l(Tv), { class: "absolute h-full bg-primary data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (v(!0), K(J, null, he(r.modelValue, (d, c) => (v(), y(l(Ev), {
          key: c,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Hg = 5, jg = 5e6, ot = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Mn = 0;
function Gg() {
  return Mn = (Mn + 1) % Number.MAX_VALUE, Mn.toString();
}
const An = /* @__PURE__ */ new Map();
function _l(e) {
  if (An.has(e)) return;
  const t = setTimeout(() => {
    An.delete(e), ha({
      type: ot.REMOVE_TOAST,
      toastId: e
    });
  }, jg);
  An.set(e, t);
}
const Ie = T({
  toasts: []
});
function ha(e) {
  switch (e.type) {
    case ot.ADD_TOAST:
      Ie.value.toasts = [e.toast, ...Ie.value.toasts].slice(0, Hg);
      break;
    case ot.UPDATE_TOAST:
      Ie.value.toasts = Ie.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case ot.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? _l(t) : Ie.value.toasts.forEach((a) => {
        _l(a.id);
      }), Ie.value.toasts = Ie.value.toasts.map(
        (a) => a.id === t || t === void 0 ? {
          ...a,
          open: !1
        } : a
      );
      break;
    }
    case ot.REMOVE_TOAST:
      e.toastId === void 0 ? Ie.value.toasts = [] : Ie.value.toasts = Ie.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function qg() {
  return {
    toasts: $(() => Ie.value.toasts),
    toast: Yg,
    dismiss: (e) => ha({ type: ot.DISMISS_TOAST, toastId: e })
  };
}
function Yg(e) {
  const t = Gg(), a = (o) => ha({
    type: ot.UPDATE_TOAST,
    toast: { ...o, id: t }
  }), n = () => ha({ type: ot.DISMISS_TOAST, toastId: t });
  return ha({
    type: ot.ADD_TOAST,
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || n();
      }
    }
  }), {
    id: t,
    dismiss: n,
    update: a
  };
}
const Xg = { class: "flex gap-3" }, Zg = { class: "grid gap-1" }, eb = /* @__PURE__ */ w({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = qg();
    return (a, n) => (v(), y(l(ay), null, {
      default: f(() => [
        (v(!0), K(J, null, he(l(t), (o) => (v(), y(l(Jg), S({
          key: o.id,
          ref_for: !0
        }, o, { class: "my-1" }), {
          default: f(() => [
            ue("div", Xg, [
              (v(), y(Se(o.icon), {
                class: re(l(z)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              ue("div", Zg, [
                o.title ? (v(), y(l(ty), { key: 0 }, {
                  default: f(() => [
                    Y(X(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : Q("", !0),
                o.description ? (v(), K(J, { key: 1 }, [
                  Nr(o.description) ? (v(), y(l(xl), { key: 0 }, {
                    default: f(() => [
                      (v(), y(Se(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (v(), y(l(xl), { key: 1 }, {
                    default: f(() => [
                      Y(X(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : Q("", !0),
                P(l(ey))
              ]),
              (v(), y(Se(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        P(l(Qg))
      ]),
      _: 1
    }));
  }
}), Jg = /* @__PURE__ */ w({
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = te(o, n);
    return (r, i) => (v(), y(l(tm), S(l(s), {
      class: l(z)(l(ny)({ variant: r.variant }), a.class),
      "onUpdate:open": r.onOpenChange
    }), {
      default: f(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), Qg = /* @__PURE__ */ w({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(nm), S(a.value, {
      class: l(z)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), tb = /* @__PURE__ */ w({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(am), U(H(a.value)), {
      default: f(() => [
        P(l(Xe), {
          variant: n.variant,
          class: re(t.class)
        }, {
          default: f(() => [
            x(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["variant", "class"])
      ]),
      _: 3
    }, 16));
  }
}), ey = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(sr), S(a.value, {
      class: l(z)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: f(() => [
        P(l(zo), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), ty = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(om), S(a.value, {
      class: l(z)("text-sm font-semibold", t.class)
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xl = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(lm), S({
      class: l(z)("text-sm opacity-90", t.class)
    }, a.value), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ay = /* @__PURE__ */ w({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Hv), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ny = ao(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x] data-[swipe=move]:translate-x-[--radix-toast-swipe-move-x] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), ab = /* @__PURE__ */ w({
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
    const o = te(e, t);
    return (s, r) => (v(), y(l(dm), U(H(l(o))), {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nb = /* @__PURE__ */ w({
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = te(o, n);
    return (r, i) => (v(), y(l(fm), null, {
      default: f(() => [
        P(l(pm), S({ ...l(s), ...r.$attrs }, {
          class: l(z)(
            "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
            a.class
          )
        }), {
          default: f(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ob = /* @__PURE__ */ w({
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
    return (a, n) => (v(), y(l(rm), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lb = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(um), U(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  ry as Badge,
  wt as Base,
  eh as BaseDropdownMenuItem,
  Xe as Button,
  mm as Calendar,
  hm as CalendarCell,
  gm as CalendarCellTrigger,
  ym as CalendarGrid,
  bm as CalendarGridBody,
  wm as CalendarGridHead,
  ml as CalendarGridRow,
  _m as CalendarHeadCell,
  xm as CalendarHeader,
  Cm as CalendarHeading,
  $m as CalendarNextButton,
  km as CalendarPrevButton,
  rh as CharacterCount,
  Sy as Checkbox,
  Ky as CollapsibleTableRow,
  Ty as Combobox,
  dr as Command,
  my as CommandDialog,
  jm as CommandEmpty,
  Gm as CommandGroup,
  Ym as CommandInput,
  Xm as CommandItem,
  Jm as CommandList,
  hy as CommandSeparator,
  gy as CommandShortcut,
  sy as Container,
  My as DatePicker,
  ch as Description,
  ur as Dialog,
  fy as DialogClose,
  fr as DialogContent,
  Om as DialogDescription,
  Hm as DialogFooter,
  Dm as DialogHeader,
  vy as DialogScrollContent,
  Pm as DialogTitle,
  Bm as DialogTrigger,
  Qm as DropdownMenu,
  _y as DropdownMenuCheckboxItem,
  ah as DropdownMenuContent,
  yy as DropdownMenuGroup,
  wy as DropdownMenuItem,
  ky as DropdownMenuLabel,
  nh as DropdownMenuLink,
  Gp as DropdownMenuPortal,
  by as DropdownMenuRadioGroup,
  xy as DropdownMenuRadioItem,
  $y as DropdownMenuSeparator,
  Cy as DropdownMenuShortcut,
  By as DropdownMenuSub,
  Py as DropdownMenuSubContent,
  Dy as DropdownMenuSubTrigger,
  th as DropdownMenuTrigger,
  fh as Error,
  Oy as Form,
  wh as FormElement,
  Ey as FormGrid,
  Ay as ImageUpload,
  Iy as Input,
  vr as Label,
  jy as LumuixDatatable,
  Gy as LumuixModal,
  Wy as LumuixModeToggle,
  qy as LumuixPagination,
  Zy as LumuixTabs,
  sf as Pagination,
  fg as PaginationDetails,
  vg as PaginationEllipsis,
  mg as PaginationFirst,
  hg as PaginationLast,
  ff as PaginationList,
  py as PaginationListItem,
  gg as PaginationNext,
  yg as PaginationPrev,
  mr as Popover,
  gr as PopoverContent,
  hr as PopoverTrigger,
  Jy as RangeCalendar,
  Ig as RangeCalendarCell,
  Rg as RangeCalendarCellTrigger,
  Vg as RangeCalendarGrid,
  Fg as RangeCalendarGridBody,
  Lg as RangeCalendarGridHead,
  wl as RangeCalendarGridRow,
  Ng as RangeCalendarHeadCell,
  zg as RangeCalendarHeader,
  Wg as RangeCalendarHeading,
  Kg as RangeCalendarNextButton,
  Ug as RangeCalendarPrevButton,
  Ny as Select,
  Vh as SelectContent,
  Ry as SelectGroup,
  Lh as SelectItem,
  Vy as SelectItemText,
  Fy as SelectLabel,
  Ah as SelectRoot,
  zh as SelectScrollDownButton,
  Nh as SelectScrollUpButton,
  Ly as SelectSeparator,
  Rh as SelectTrigger,
  Ih as SelectValue,
  Qy as Slider,
  Mg as TabBaseContent,
  wg as Table,
  _g as TableBody,
  $g as TableCaption,
  tn as TableCell,
  Hy as TableEmpty,
  Uy as TableFooter,
  xg as TableHead,
  Cg as TableHeader,
  xa as TableRow,
  Xn as TableRowAction,
  Xy as TabsContent,
  Og as TabsItem,
  bl as TabsList,
  Pg as TabsRoot,
  Yy as TabsTrigger,
  zy as TextArea,
  Jg as Toast,
  tb as ToastAction,
  ey as ToastClose,
  xl as ToastDescription,
  ay as ToastProvider,
  ty as ToastTitle,
  Qg as ToastViewport,
  eb as Toaster,
  cg as Toggle,
  ab as Tooltip,
  nb as TooltipContent,
  ob as TooltipProvider,
  lb as TooltipTrigger,
  Ci as badgeVariants,
  At as buttonVariants,
  ly as preset,
  Yg as toast,
  ny as toastVariants,
  qg as useToast
};
