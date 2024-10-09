import * as So from "vue";
import { openBlock as f, createElementBlock as R, renderSlot as w, defineComponent as b, normalizeClass as re, unref as s, computed as k, ref as M, shallowRef as jn, watch as ee, getCurrentScope as Hn, onScopeDispose as Kn, shallowReadonly as Et, getCurrentInstance as je, toRef as pl, camelize as fl, Comment as ir, mergeProps as E, cloneVNode as dr, h as Ne, toRefs as me, onMounted as de, createBlock as y, withCtx as v, normalizeProps as j, guardReactiveProps as G, reactive as vl, createVNode as S, createCommentVNode as Q, createElementVNode as te, toDisplayString as Z, createTextVNode as Y, withKeys as ze, withModifiers as _e, Fragment as J, watchEffect as ge, markRaw as ur, nextTick as oe, watchSyncEffect as cr, withDirectives as jt, vShow as Gn, isRef as ga, resolveDynamicComponent as We, renderList as he, Teleport as Za, onBeforeUnmount as qn, useSlots as pr, onBeforeMount as fr, normalizeStyle as ya, effectScope as ml, toHandlerKey as vr, onUnmounted as Ct, vModelSelect as mr, inject as hl, provide as gl, customRef as yl, readonly as ba, onBeforeUpdate as hr, onUpdated as gr, mergeDefaults as bl, watchPostEffect as yr, mergeModels as Pn, useModel as wl, vModelDynamic as br, vModelText as wr, isVNode as _r } from "vue";
const pg = {
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
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))",
          950: "hsl(var(--primary-950))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          50: "hsl(var(--secondary-50))",
          100: "hsl(var(--secondary-100))",
          200: "hsl(var(--secondary-200))",
          300: "hsl(var(--secondary-300))",
          400: "hsl(var(--secondary-400))",
          500: "hsl(var(--secondary-500))",
          600: "hsl(var(--secondary-600))",
          700: "hsl(var(--secondary-700))",
          800: "hsl(var(--secondary-800))",
          900: "hsl(var(--secondary-900))",
          950: "hsl(var(--secondary-950))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          50: "hsl(var(--destructive-50))",
          100: "hsl(var(--destructive-100))",
          200: "hsl(var(--destructive-200))",
          300: "hsl(var(--destructive-300))",
          400: "hsl(var(--destructive-400))",
          500: "hsl(var(--destructive-500))",
          600: "hsl(var(--destructive-600))",
          700: "hsl(var(--destructive-700))",
          800: "hsl(var(--destructive-800))",
          900: "hsl(var(--destructive-900))",
          950: "hsl(var(--destructive-950))"
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
}, wa = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, o] of t)
    a[n] = o;
  return a;
}, xr = {}, Cr = { class: "p-6" };
function $r(e, t) {
  return f(), R("div", Cr, [
    w(e.$slots, "default")
  ]);
}
const fg = /* @__PURE__ */ wa(xr, [["render", $r]]);
function _l(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (a = _l(e[t])) && (n && (n += " "), n += a);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function kr() {
  for (var e, t, a = 0, n = ""; a < arguments.length; ) (e = arguments[a++]) && (t = _l(e)) && (n && (n += " "), n += t);
  return n;
}
const Eo = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Mo = kr, Yn = (e, t) => (a) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Mo(e, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: l } = t, r = Object.keys(o).map((c) => {
    const u = a == null ? void 0 : a[c], p = l == null ? void 0 : l[c];
    if (u === null) return null;
    const g = Eo(u) || Eo(p);
    return o[c][g];
  }), i = a && Object.entries(a).reduce((c, u) => {
    let [p, g] = u;
    return g === void 0 || (c[p] = g), c;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, u) => {
    let { class: p, className: g, ...h } = u;
    return Object.entries(h).every((x) => {
      let [m, _] = x;
      return Array.isArray(_) ? _.includes({
        ...l,
        ...i
      }[m]) : {
        ...l,
        ...i
      }[m] === _;
    }) ? [
      ...c,
      p,
      g
    ] : c;
  }, []);
  return Mo(e, r, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, Zn = "-", Br = (e) => {
  const t = Dr(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (r) => {
      const i = r.split(Zn);
      return i[0] === "" && i.length !== 1 && i.shift(), xl(i, t) || Pr(r);
    },
    getConflictingClassGroupIds: (r, i) => {
      const d = a[r] || [];
      return i && n[r] ? [...d, ...n[r]] : d;
    }
  };
}, xl = (e, t) => {
  var r;
  if (e.length === 0)
    return t.classGroupId;
  const a = e[0], n = t.nextPart.get(a), o = n ? xl(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const l = e.join(Zn);
  return (r = t.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : r.classGroupId;
}, To = /^\[(.+)\]$/, Pr = (e) => {
  if (To.test(e)) {
    const t = To.exec(e)[1], a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Dr = (e) => {
  const {
    theme: t,
    prefix: a
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Sr(Object.entries(e.classGroups), a).forEach(([l, r]) => {
    Dn(r, n, l, t);
  }), n;
}, Dn = (e, t, a, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const l = o === "" ? t : Ao(t, o);
      l.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (Or(o)) {
        Dn(o(n), t, a, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([l, r]) => {
      Dn(r, Ao(t, l), a, n);
    });
  });
}, Ao = (e, t) => {
  let a = e;
  return t.split(Zn).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Or = (e) => e.isThemeGetter, Sr = (e, t) => t ? e.map(([a, n]) => {
  const o = n.map((l) => typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([r, i]) => [t + r, i])) : l);
  return [a, o];
}) : e, Er = (e) => {
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
}, Cl = "!", Mr = (e) => {
  const {
    separator: t,
    experimentalParseClassName: a
  } = e, n = t.length === 1, o = t[0], l = t.length, r = (i) => {
    const d = [];
    let c = 0, u = 0, p;
    for (let _ = 0; _ < i.length; _++) {
      let C = i[_];
      if (c === 0) {
        if (C === o && (n || i.slice(_, _ + l) === t)) {
          d.push(i.slice(u, _)), u = _ + l;
          continue;
        }
        if (C === "/") {
          p = _;
          continue;
        }
      }
      C === "[" ? c++ : C === "]" && c--;
    }
    const g = d.length === 0 ? i : i.substring(u), h = g.startsWith(Cl), x = h ? g.substring(1) : g, m = p && p > u ? p - u : void 0;
    return {
      modifiers: d,
      hasImportantModifier: h,
      baseClassName: x,
      maybePostfixModifierPosition: m
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: r
  }) : r;
}, Tr = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let a = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...a.sort(), n), a = []) : a.push(n);
  }), t.push(...a.sort()), t;
}, Ar = (e) => ({
  cache: Er(e.cacheSize),
  parseClassName: Mr(e),
  ...Br(e)
}), Vr = /\s+/, Ir = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, l = [], r = e.trim().split(Vr);
  let i = "";
  for (let d = r.length - 1; d >= 0; d -= 1) {
    const c = r[d], {
      modifiers: u,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: h
    } = a(c);
    let x = !!h, m = n(x ? g.substring(0, h) : g);
    if (!m) {
      if (!x) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (m = n(g), !m) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      x = !1;
    }
    const _ = Tr(u).join(":"), C = p ? _ + Cl : _, P = C + m;
    if (l.includes(P))
      continue;
    l.push(P);
    const $ = o(m, x);
    for (let D = 0; D < $.length; ++D) {
      const O = $[D];
      l.push(C + O);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Rr() {
  let e = 0, t, a, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (a = $l(t)) && (n && (n += " "), n += a);
  return n;
}
const $l = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = $l(e[n])) && (a && (a += " "), a += t);
  return a;
};
function Fr(e, ...t) {
  let a, n, o, l = r;
  function r(d) {
    const c = t.reduce((u, p) => p(u), e());
    return a = Ar(c), n = a.cache.get, o = a.cache.set, l = i, i(d);
  }
  function i(d) {
    const c = n(d);
    if (c)
      return c;
    const u = Ir(d, a);
    return o(d, u), u;
  }
  return function() {
    return l(Rr.apply(null, arguments));
  };
}
const pe = (e) => {
  const t = (a) => a[e] || [];
  return t.isThemeGetter = !0, t;
}, kl = /^\[(?:([a-z-]+):)?(.+)\]$/i, Lr = /^\d+\/\d+$/, Nr = /* @__PURE__ */ new Set(["px", "full", "screen"]), zr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Wr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ur = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, jr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Hr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ze = (e) => At(e) || Nr.has(e) || Lr.test(e), it = (e) => Ht(e, "length", Qr), At = (e) => !!e && !Number.isNaN(Number(e)), cn = (e) => Ht(e, "number", At), la = (e) => !!e && Number.isInteger(Number(e)), Kr = (e) => e.endsWith("%") && At(e.slice(0, -1)), X = (e) => kl.test(e), dt = (e) => zr.test(e), Gr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), qr = (e) => Ht(e, Gr, Bl), Yr = (e) => Ht(e, "position", Bl), Zr = /* @__PURE__ */ new Set(["image", "url"]), Xr = (e) => Ht(e, Zr, ti), Jr = (e) => Ht(e, "", ei), sa = () => !0, Ht = (e, t, a) => {
  const n = kl.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : a(n[2]) : !1;
}, Qr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Wr.test(e) && !Ur.test(e)
), Bl = () => !1, ei = (e) => jr.test(e), ti = (e) => Hr.test(e), ai = () => {
  const e = pe("colors"), t = pe("spacing"), a = pe("blur"), n = pe("brightness"), o = pe("borderColor"), l = pe("borderRadius"), r = pe("borderSpacing"), i = pe("borderWidth"), d = pe("contrast"), c = pe("grayscale"), u = pe("hueRotate"), p = pe("invert"), g = pe("gap"), h = pe("gradientColorStops"), x = pe("gradientColorStopPositions"), m = pe("inset"), _ = pe("margin"), C = pe("opacity"), P = pe("padding"), $ = pe("saturate"), D = pe("scale"), O = pe("sepia"), V = pe("skew"), A = pe("space"), W = pe("translate"), L = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", X, t], I = () => [X, t], K = () => ["", Ze, it], H = () => ["auto", At, X], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], q = () => ["solid", "dashed", "dotted", "double", "none"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ue = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], fe = () => ["", "0", X], $e = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ye = () => [At, X];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [sa],
      spacing: [Ze, it],
      blur: ["none", "", dt, X],
      brightness: ye(),
      borderColor: [e],
      borderRadius: ["none", "", "full", dt, X],
      borderSpacing: I(),
      borderWidth: K(),
      contrast: ye(),
      grayscale: fe(),
      hueRotate: ye(),
      invert: fe(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Kr, it],
      inset: T(),
      margin: T(),
      opacity: ye(),
      padding: I(),
      saturate: ye(),
      scale: ye(),
      sepia: fe(),
      skew: ye(),
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
        aspect: ["auto", "square", "video", X]
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
        columns: [dt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": $e()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": $e()
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
        object: [...U(), X]
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
        z: ["auto", la, X]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: T()
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
        flex: ["1", "auto", "initial", "none", X]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: fe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: fe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", la, X]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [sa]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", la, X]
        }, X]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [sa]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [la, X]
        }, X]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        "auto-cols": ["auto", "min", "max", "fr", X]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", X]
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
        p: [P]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [P]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [P]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [P]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [P]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [P]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [P]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [P]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [P]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [X, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [X, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [dt]
        }, dt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [X, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", dt, it]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", cn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [sa]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", X]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", At, cn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ze, X]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", X]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", X]
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
        decoration: ["auto", "from-font", Ze, it]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ze, X]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X]
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
        content: ["none", X]
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
        bg: [...U(), Yr]
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
        bg: ["auto", "cover", "contain", qr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Xr]
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
        from: [x]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [x]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [x]
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
        "outline-offset": [Ze, X]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ze, it]
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
        "ring-opacity": [C]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ze, it]
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
        shadow: ["", "inner", "none", dt, Jr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [sa]
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
        "mix-blend": [...ae(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ae()
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
        "drop-shadow": ["", "none", dt, X]
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
        saturate: [$]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [O]
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
        "backdrop-saturate": [$]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [O]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", X]
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
        ease: ["linear", "in", "out", "in-out", X]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", X]
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
        scale: [D]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [D]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [D]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [la, X]
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
        "skew-x": [V]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [V]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", X]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X]
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
        "will-change": ["auto", "scroll", "contents", "transform", X]
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
        stroke: [Ze, it, cn]
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
}, ni = /* @__PURE__ */ Fr(ai);
function z(...e) {
  return ni(e);
}
const vg = /* @__PURE__ */ b({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("div", {
      class: re(s(z)(s(oi)({ variant: a.variant }), t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), oi = Yn(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-slate-800 text-slate-50 hover:bg-slate-800/80",
        primary: "border-transparent bg-primary-600 text-primary-50 hover:bg-primary-600/80",
        secondary: "border-transparent bg-secondary-600 text-secondary-50 hover:bg-secondary-600/80",
        destructive: "border-transparent bg-destructive-600 text-destructive-50 hover:bg-destructive-600/80",
        outline: "text-foreground hover:bg-gray-100 hover:border-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function pn(e, t) {
  return e - t * Math.floor(e / t);
}
const Pl = 1721426;
function Da(e, t, a, n) {
  t = Xn(e, t);
  let o = t - 1, l = -2;
  return a <= 2 ? l = 0 : Na(t) && (l = -1), Pl - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + l + n);
}
function Na(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function Xn(e, t) {
  return e === "BC" ? 1 - t : t;
}
function li(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const si = {
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
class It {
  fromJulianDay(t) {
    let a = t, n = a - Pl, o = Math.floor(n / 146097), l = pn(n, 146097), r = Math.floor(l / 36524), i = pn(l, 36524), d = Math.floor(i / 1461), c = pn(i, 1461), u = Math.floor(c / 365), p = o * 400 + r * 100 + d * 4 + u + (r !== 4 && u !== 4 ? 1 : 0), [g, h] = li(p), x = a - Da(g, h, 1, 1), m = 2;
    a < Da(g, h, 3, 1) ? m = 0 : Na(h) && (m = 1);
    let _ = Math.floor(((x + m) * 12 + 373) / 367), C = a - Da(g, h, _, 1) + 1;
    return new Lt(g, h, _, C);
  }
  toJulianDay(t) {
    return Da(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return si[Na(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return Na(t.year) ? 366 : 365;
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
const ri = {
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
function we(e, t) {
  return t = Oe(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Dl(e, t) {
  return t = Oe(t, e.calendar), e = ua(e), t = ua(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Le(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Vo(e, t) {
  return e = ua(e), t = ua(t), e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month;
}
function Ol(e, t) {
  return we(e, El(t));
}
function Sl(e, t) {
  let a = e.calendar.toJulianDay(e), n = Math.ceil(a + 1 - ci(t)) % 7;
  return n < 0 && (n += 7), n;
}
function ii(e) {
  return et(Date.now(), e);
}
function El(e) {
  return vi(ii(e));
}
function Ml(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function di(e, t) {
  return Io(e) - Io(t);
}
function Io(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let fn = null;
function $t() {
  return fn == null && (fn = new Intl.DateTimeFormat().resolvedOptions().timeZone), fn;
}
function ua(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function Ro(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const Fo = /* @__PURE__ */ new Map();
function ui(e) {
  if (Intl.Locale) {
    let a = Fo.get(e);
    return a || (a = new Intl.Locale(e).maximize().region, a && Fo.set(e, a)), a;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function ci(e) {
  let t = ui(e);
  return t && ri[t] || 0;
}
function Rt(e) {
  e = Oe(e, new It());
  let t = Xn(e.era, e.year);
  return Tl(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function Tl(e, t, a, n, o, l, r) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, l, r), i.setUTCFullYear(e, t - 1, a), i.getTime();
}
function On(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === $t()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: l, minute: r, second: i } = Al(e, t);
  return Tl(a, n, o, l, r, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const Lo = /* @__PURE__ */ new Map();
function Al(e, t) {
  let a = Lo.get(t);
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
  }), Lo.set(t, a));
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
const No = 864e5;
function pi(e, t, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((l) => fi(e, t, l));
}
function fi(e, t, a) {
  let n = Al(a, t);
  return e.year === n.year && e.month === n.month && e.day === n.day && e.hour === n.hour && e.minute === n.minute && e.second === n.second;
}
function Qe(e, t, a = "compatible") {
  let n = Ft(e);
  if (t === "UTC") return Rt(n);
  if (t === $t() && a === "compatible") {
    n = Oe(n, new It());
    let d = /* @__PURE__ */ new Date(), c = Xn(n.era, n.year);
    return d.setFullYear(c, n.month - 1, n.day), d.setHours(n.hour, n.minute, n.second, n.millisecond), d.getTime();
  }
  let o = Rt(n), l = On(o - No, t), r = On(o + No, t), i = pi(n, t, o - l, o - r);
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
function Vl(e, t, a = "compatible") {
  return new Date(Qe(e, t, a));
}
function et(e, t) {
  let a = On(e, t), n = new Date(e + a), o = n.getUTCFullYear(), l = n.getUTCMonth() + 1, r = n.getUTCDate(), i = n.getUTCHours(), d = n.getUTCMinutes(), c = n.getUTCSeconds(), u = n.getUTCMilliseconds();
  return new zt(o, l, r, t, a, i, d, c, u);
}
function vi(e) {
  return new Lt(e.calendar, e.era, e.year, e.month, e.day);
}
function Ft(e, t) {
  let a = 0, n = 0, o = 0, l = 0;
  if ("timeZone" in e) ({ hour: a, minute: n, second: o, millisecond: l } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: a, minute: n, second: o, millisecond: l } = t), new Nt(e.calendar, e.era, e.year, e.month, e.day, a, n, o, l);
}
function Oe(e, t) {
  if (e.calendar.identifier === t.identifier) return e;
  let a = t.fromJulianDay(e.calendar.toJulianDay(e)), n = e.copy();
  return n.calendar = t, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, _t(n), n;
}
function mi(e, t, a) {
  if (e instanceof zt)
    return e.timeZone === t ? e : gi(e, t);
  let n = Qe(e, t, a);
  return et(n, t);
}
function hi(e) {
  let t = Rt(e) - e.offset;
  return new Date(t);
}
function gi(e, t) {
  let a = Rt(e) - e.offset;
  return Oe(et(a, t), e.calendar);
}
const ra = 36e5;
function Xa(e, t) {
  let a = e.copy(), n = "hour" in a ? _i(a, t) : 0;
  Sn(a, t.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e), a.month += t.months || 0, En(a), Il(a), a.day += (t.weeks || 0) * 7, a.day += t.days || 0, a.day += n, yi(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
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
function Sn(e, t) {
  var a, n;
  !((a = (n = e.calendar).isInverseEra) === null || a === void 0) && a.call(n, e) && (t = -t), e.year += t;
}
function En(e) {
  for (; e.month < 1; )
    Sn(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, Sn(e, 1);
}
function yi(e) {
  for (; e.day < 1; )
    e.month--, En(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, En(e);
}
function Il(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function _t(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Il(e);
}
function Rl(e) {
  let t = {};
  for (let a in e) typeof e[a] == "number" && (t[a] = -e[a]);
  return t;
}
function Fl(e, t) {
  return Xa(e, Rl(t));
}
function Jn(e, t) {
  let a = e.copy();
  return t.era != null && (a.era = t.era), t.year != null && (a.year = t.year), t.month != null && (a.month = t.month), t.day != null && (a.day = t.day), _t(a), a;
}
function Wa(e, t) {
  let a = e.copy();
  return t.hour != null && (a.hour = t.hour), t.minute != null && (a.minute = t.minute), t.second != null && (a.second = t.second), t.millisecond != null && (a.millisecond = t.millisecond), wi(a), a;
}
function bi(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Oa(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Oa(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Oa(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = Oa(e.hour, 24), t;
}
function wi(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Oa(e, t) {
  let a = e % t;
  return a < 0 && (a += t), a;
}
function _i(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, bi(e);
}
function Qn(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "era": {
      let i = e.calendar.getEras(), d = i.indexOf(e.era);
      if (d < 0) throw new Error("Invalid era: " + e.era);
      d = tt(d, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[d], _t(o);
      break;
    }
    case "year":
      var l, r;
      !((l = (r = o.calendar).isInverseEra) === null || l === void 0) && l.call(r, o) && (a = -a), o.year = tt(e.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, e);
      break;
    case "month":
      o.month = tt(e.month, a, 1, e.calendar.getMonthsInYear(e), n == null ? void 0 : n.round);
      break;
    case "day":
      o.day = tt(e.day, a, 1, e.calendar.getDaysInMonth(e), n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(o), _t(o), o;
}
function Ll(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "hour": {
      let l = e.hour, r = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let d = l >= 12;
        r = d ? 12 : 0, i = d ? 23 : 11;
      }
      o.hour = tt(l, a, r, i, n == null ? void 0 : n.round);
      break;
    }
    case "minute":
      o.minute = tt(e.minute, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "second":
      o.second = tt(e.second, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "millisecond":
      o.millisecond = tt(e.millisecond, a, 0, 999, n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return o;
}
function tt(e, t, a, n, o = !1) {
  if (o) {
    e += Math.sign(t), e < a && (e = n);
    let l = Math.abs(t);
    t > 0 ? e = Math.ceil(e / l) * l : e = Math.floor(e / l) * l, e > n && (e = a);
  } else
    e += t, e < a ? e = n - (a - e - 1) : e > n && (e = a + (e - n - 1));
  return e;
}
function Nl(e, t) {
  let a;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let o = Xa(Ft(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    a = Qe(o, e.timeZone);
  } else
    a = Rt(e) - e.offset;
  a += t.milliseconds || 0, a += (t.seconds || 0) * 1e3, a += (t.minutes || 0) * 6e4, a += (t.hours || 0) * 36e5;
  let n = et(a, e.timeZone);
  return Oe(n, e.calendar);
}
function xi(e, t) {
  return Nl(e, Rl(t));
}
function Ci(e, t, a, n) {
  switch (t) {
    case "hour": {
      let o = 0, l = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let x = e.hour >= 12;
        o = x ? 12 : 0, l = x ? 23 : 11;
      }
      let r = Ft(e), i = Oe(Wa(r, {
        hour: o
      }), new It()), d = [
        Qe(i, e.timeZone, "earlier"),
        Qe(i, e.timeZone, "later")
      ].filter((x) => et(x, e.timeZone).day === i.day)[0], c = Oe(Wa(r, {
        hour: l
      }), new It()), u = [
        Qe(c, e.timeZone, "earlier"),
        Qe(c, e.timeZone, "later")
      ].filter((x) => et(x, e.timeZone).day === c.day).pop(), p = Rt(e) - e.offset, g = Math.floor(p / ra), h = p % ra;
      return p = tt(g, a, Math.floor(d / ra), Math.floor(u / ra), n == null ? void 0 : n.round) * ra + h, Oe(et(p, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return Ll(e, t, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = Qn(Ft(e), t, a, n), l = Qe(o, e.timeZone);
      return Oe(et(l, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function $i(e, t, a) {
  let n = Ft(e), o = Wa(Jn(n, t), t);
  if (o.compare(n) === 0) return e;
  let l = Qe(o, e.timeZone, a);
  return Oe(et(l, e.timeZone), e.calendar);
}
function ki(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function zl(e) {
  let t = Oe(e, new It());
  return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function Wl(e) {
  return `${zl(e)}T${ki(e)}`;
}
function Bi(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let a = Math.floor(e / 36e5), n = e % 36e5 / 6e4;
  return `${t}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function Pi(e) {
  return `${Wl(e)}${Bi(e.offset)}[${e.timeZone}]`;
}
function Di(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function eo(e, t, a) {
  Di(e, t), t.set(e, a);
}
function to(e) {
  let t = typeof e[0] == "object" ? e.shift() : new It(), a;
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
var Oi = /* @__PURE__ */ new WeakMap();
class Lt {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Lt(this.calendar, this.era, this.year, this.month, this.day) : new Lt(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return Xa(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return Fl(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Jn(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return Qn(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return Vl(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return zl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return Ml(this, t);
  }
  constructor(...t) {
    eo(this, Oi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, r] = to(t);
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = r, _t(this);
  }
}
var Si = /* @__PURE__ */ new WeakMap();
class Nt {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Nt(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new Nt(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return Xa(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return Fl(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Jn(Wa(this, t), t);
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
        return Qn(this, t, a, n);
      default:
        return Ll(this, t, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, a) {
    return Vl(this, t, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Wl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let a = Ml(this, t);
    return a === 0 ? di(this, Ft(t)) : a;
  }
  constructor(...t) {
    eo(this, Si, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, r] = to(t);
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = r, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, _t(this);
  }
}
var Ei = /* @__PURE__ */ new WeakMap();
class zt {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new zt(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new zt(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return Nl(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return xi(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, a) {
    return $i(this, t, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return Ci(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return hi(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return Pi(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - mi(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    eo(this, Ei, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, r] = to(t), i = t.shift(), d = t.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = r, this.timeZone = i, this.offset = d, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, _t(this);
  }
}
let vn = /* @__PURE__ */ new Map();
class Xe {
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
    return Ai() && (this.resolvedHourCycle || (this.resolvedHourCycle = Vi(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, a = {}) {
    this.formatter = Ul(t, a), this.options = a;
  }
}
const Mi = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function Ul(e, t = {}) {
  if (typeof t.hour12 == "boolean" && Ti()) {
    t = {
      ...t
    };
    let o = Mi[String(t.hour12)][e.split("-")[0]], l = t.hour12 ? "h12" : "h23";
    t.hourCycle = o ?? l, delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((o, l) => o[0] < l[0] ? -1 : 1).join() : "");
  if (vn.has(a)) return vn.get(a);
  let n = new Intl.DateTimeFormat(e, t);
  return vn.set(a, n), n;
}
let mn = null;
function Ti() {
  return mn == null && (mn = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), mn;
}
let hn = null;
function Ai() {
  return hn == null && (hn = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), hn;
}
function Vi(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = Ul(e, {
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
function Ii(e, t) {
  const a = [];
  for (let n = 0; n < e.length; n += t)
    a.push(e.slice(n, n + t));
  return a;
}
function Ae(e, t = $t()) {
  return ao(e) ? e.toDate() : e.toDate(t);
}
function Ri(e) {
  return e instanceof Nt;
}
function ao(e) {
  return e instanceof zt;
}
function Fi(e) {
  return Ri(e) || ao(e);
}
function ca(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), a = e.getMonth() + 1;
    return new Date(t, a, 0).getDate();
  } else
    return e.set({ day: 100 }).day;
}
function pt(e, t) {
  return e.compare(t) < 0;
}
function ia(e, t) {
  return e.compare(t) > 0;
}
function Li(e, t) {
  return e.compare(t) <= 0;
}
function Ni(e, t) {
  return e.compare(t) >= 0;
}
function zi(e, t, a) {
  return Ni(e, t) && Li(e, a);
}
function Wi(e, t, a) {
  return ia(e, t) && pt(e, a);
}
function Ui(e, t, a) {
  const n = Sl(e, a);
  return t > n ? e.subtract({ days: n + 7 - t }) : t === n ? e : e.subtract({ days: n - t });
}
function ji(e, t, a) {
  const n = Sl(e, a), o = t === 0 ? 6 : t - 1;
  return n === o ? e : n > o ? e.add({ days: 7 - n + o }) : e.add({ days: o - n });
}
function Hi(e, t, a, n) {
  if (a === void 0 && n === void 0)
    return !0;
  let o = e.add({ days: 1 });
  if (n != null && n(o) || a != null && a(o))
    return !1;
  const l = t;
  for (; o.compare(l) < 0; )
    if (o = o.add({ days: 1 }), n != null && n(o) || a != null && a(o))
      return !1;
  return !0;
}
function zo(e, t) {
  const a = [];
  let n = e.add({ days: 1 });
  const o = t;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function gn(e) {
  const { dateObj: t, weekStartsOn: a, fixedWeeks: n, locale: o } = e, l = ca(t), r = Array.from({ length: l }, (_, C) => t.set({ day: C + 1 })), i = ua(t), d = Ro(t), c = Ui(i, a, o), u = ji(d, a, o), p = zo(c.subtract({ days: 1 }), i), g = zo(d, u.add({ days: 1 })), h = p.length + r.length + g.length;
  if (n && h < 42) {
    const _ = 42 - h;
    let C = g[g.length - 1];
    C || (C = Ro(t));
    const P = Array.from({ length: _ }, ($, D) => {
      const O = D + 1;
      return C.add({ days: O });
    });
    g.push(...P);
  }
  const x = p.concat(r, g), m = Ii(x, 7);
  return {
    value: t,
    cells: x,
    rows: m
  };
}
function bt(e) {
  const { numberOfMonths: t, dateObj: a, ...n } = e, o = [];
  if (!t || t === 1)
    return o.push(
      gn({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    gn({
      ...n,
      dateObj: a
    })
  );
  for (let l = 1; l < t; l++) {
    const r = a.add({ months: l });
    o.push(
      gn({
        ...n,
        dateObj: r
      })
    );
  }
  return o;
}
const Ki = ["top", "right", "bottom", "left"], ft = Math.min, Be = Math.max, Ua = Math.round, Sa = Math.floor, vt = (e) => ({
  x: e,
  y: e
}), Gi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, qi = {
  start: "end",
  end: "start"
};
function Mn(e, t, a) {
  return Be(e, ft(t, a));
}
function ot(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function lt(e) {
  return e.split("-")[0];
}
function Kt(e) {
  return e.split("-")[1];
}
function no(e) {
  return e === "x" ? "y" : "x";
}
function oo(e) {
  return e === "y" ? "height" : "width";
}
function mt(e) {
  return ["top", "bottom"].includes(lt(e)) ? "y" : "x";
}
function lo(e) {
  return no(mt(e));
}
function Yi(e, t, a) {
  a === void 0 && (a = !1);
  const n = Kt(e), o = lo(e), l = oo(o);
  let r = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (r = ja(r)), [r, ja(r)];
}
function Zi(e) {
  const t = ja(e);
  return [Tn(e), t, Tn(t)];
}
function Tn(e) {
  return e.replace(/start|end/g, (t) => qi[t]);
}
function Xi(e, t, a) {
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
function Ji(e, t, a, n) {
  const o = Kt(e);
  let l = Xi(lt(e), a === "start", n);
  return o && (l = l.map((r) => r + "-" + o), t && (l = l.concat(l.map(Tn)))), l;
}
function ja(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Gi[t]);
}
function Qi(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function jl(e) {
  return typeof e != "number" ? Qi(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ha(e) {
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
function Wo(e, t, a) {
  let {
    reference: n,
    floating: o
  } = e;
  const l = mt(t), r = lo(t), i = oo(r), d = lt(t), c = l === "y", u = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, g = n[i] / 2 - o[i] / 2;
  let h;
  switch (d) {
    case "top":
      h = {
        x: u,
        y: n.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      h = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      h = {
        x: n.x - o.width,
        y: p
      };
      break;
    default:
      h = {
        x: n.x,
        y: n.y
      };
  }
  switch (Kt(t)) {
    case "start":
      h[r] -= g * (a && c ? -1 : 1);
      break;
    case "end":
      h[r] += g * (a && c ? -1 : 1);
      break;
  }
  return h;
}
const ed = async (e, t, a) => {
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
  } = Wo(c, n, d), g = n, h = {}, x = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: _,
      fn: C
    } = i[m], {
      x: P,
      y: $,
      data: D,
      reset: O
    } = await C({
      x: u,
      y: p,
      initialPlacement: n,
      placement: g,
      strategy: o,
      middlewareData: h,
      rects: c,
      platform: r,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = P ?? u, p = $ ?? p, h = {
      ...h,
      [_]: {
        ...h[_],
        ...D
      }
    }, O && x <= 50 && (x++, typeof O == "object" && (O.placement && (g = O.placement), O.rects && (c = O.rects === !0 ? await r.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : O.rects), {
      x: u,
      y: p
    } = Wo(c, g, d)), m = -1);
  }
  return {
    x: u,
    y: p,
    placement: g,
    strategy: o,
    middlewareData: h
  };
};
async function pa(e, t) {
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
    altBoundary: g = !1,
    padding: h = 0
  } = ot(t, e), x = jl(h), _ = i[g ? p === "floating" ? "reference" : "floating" : p], C = Ha(await l.getClippingRect({
    element: (a = await (l.isElement == null ? void 0 : l.isElement(_))) == null || a ? _ : _.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: d
  })), P = p === "floating" ? {
    x: n,
    y: o,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, $ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(i.floating)), D = await (l.isElement == null ? void 0 : l.isElement($)) ? await (l.getScale == null ? void 0 : l.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = Ha(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: P,
    offsetParent: $,
    strategy: d
  }) : P);
  return {
    top: (C.top - O.top + x.top) / D.y,
    bottom: (O.bottom - C.bottom + x.bottom) / D.y,
    left: (C.left - O.left + x.left) / D.x,
    right: (O.right - C.right + x.right) / D.x
  };
}
const td = (e) => ({
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
    } = ot(e, t) || {};
    if (c == null)
      return {};
    const p = jl(u), g = {
      x: a,
      y: n
    }, h = lo(o), x = oo(h), m = await r.getDimensions(c), _ = h === "y", C = _ ? "top" : "left", P = _ ? "bottom" : "right", $ = _ ? "clientHeight" : "clientWidth", D = l.reference[x] + l.reference[h] - g[h] - l.floating[x], O = g[h] - l.reference[h], V = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c));
    let A = V ? V[$] : 0;
    (!A || !await (r.isElement == null ? void 0 : r.isElement(V))) && (A = i.floating[$] || l.floating[x]);
    const W = D / 2 - O / 2, L = A / 2 - m[x] / 2 - 1, B = ft(p[C], L), T = ft(p[P], L), I = B, K = A - m[x] - T, H = A / 2 - m[x] / 2 + W, U = Mn(I, H, K), q = !d.arrow && Kt(o) != null && H !== U && l.reference[x] / 2 - (H < I ? B : T) - m[x] / 2 < 0, ae = q ? H < I ? H - I : H - K : 0;
    return {
      [h]: g[h] + ae,
      data: {
        [h]: U,
        centerOffset: H - U - ae,
        ...q && {
          alignmentOffset: ae
        }
      },
      reset: q
    };
  }
}), ad = function(e) {
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
        fallbackPlacements: g,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: m = !0,
        ..._
      } = ot(e, t);
      if ((a = l.arrow) != null && a.alignmentOffset)
        return {};
      const C = lt(o), P = mt(i), $ = lt(i) === i, D = await (d.isRTL == null ? void 0 : d.isRTL(c.floating)), O = g || ($ || !m ? [ja(i)] : Zi(i)), V = x !== "none";
      !g && V && O.push(...Ji(i, m, x, D));
      const A = [i, ...O], W = await pa(t, _), L = [];
      let B = ((n = l.flip) == null ? void 0 : n.overflows) || [];
      if (u && L.push(W[C]), p) {
        const H = Yi(o, r, D);
        L.push(W[H[0]], W[H[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: L
      }], !L.every((H) => H <= 0)) {
        var T, I;
        const H = (((T = l.flip) == null ? void 0 : T.index) || 0) + 1, U = A[H];
        if (U)
          return {
            data: {
              index: H,
              overflows: B
            },
            reset: {
              placement: U
            }
          };
        let q = (I = B.filter((ae) => ae.overflows[0] <= 0).sort((ae, ue) => ae.overflows[1] - ue.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!q)
          switch (h) {
            case "bestFit": {
              var K;
              const ae = (K = B.filter((ue) => {
                if (V) {
                  const fe = mt(ue.placement);
                  return fe === P || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  fe === "y";
                }
                return !0;
              }).map((ue) => [ue.placement, ue.overflows.filter((fe) => fe > 0).reduce((fe, $e) => fe + $e, 0)]).sort((ue, fe) => ue[1] - fe[1])[0]) == null ? void 0 : K[0];
              ae && (q = ae);
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
function Uo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function jo(e) {
  return Ki.some((t) => e[t] >= 0);
}
const nd = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: a
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = ot(e, t);
      switch (n) {
        case "referenceHidden": {
          const l = await pa(t, {
            ...o,
            elementContext: "reference"
          }), r = Uo(l, a.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: jo(r)
            }
          };
        }
        case "escaped": {
          const l = await pa(t, {
            ...o,
            altBoundary: !0
          }), r = Uo(l, a.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: jo(r)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function od(e, t) {
  const {
    placement: a,
    platform: n,
    elements: o
  } = e, l = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), r = lt(a), i = Kt(a), d = mt(a) === "y", c = ["left", "top"].includes(r) ? -1 : 1, u = l && d ? -1 : 1, p = ot(t, e);
  let {
    mainAxis: g,
    crossAxis: h,
    alignmentAxis: x
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof x == "number" && (h = i === "end" ? x * -1 : x), d ? {
    x: h * u,
    y: g * c
  } : {
    x: g * c,
    y: h * u
  };
}
const ld = function(e) {
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
      } = t, d = await od(t, e);
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
}, sd = function(e) {
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
          fn: (_) => {
            let {
              x: C,
              y: P
            } = _;
            return {
              x: C,
              y: P
            };
          }
        },
        ...d
      } = ot(e, t), c = {
        x: a,
        y: n
      }, u = await pa(t, d), p = mt(lt(o)), g = no(p);
      let h = c[g], x = c[p];
      if (l) {
        const _ = g === "y" ? "top" : "left", C = g === "y" ? "bottom" : "right", P = h + u[_], $ = h - u[C];
        h = Mn(P, h, $);
      }
      if (r) {
        const _ = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", P = x + u[_], $ = x - u[C];
        x = Mn(P, x, $);
      }
      const m = i.fn({
        ...t,
        [g]: h,
        [p]: x
      });
      return {
        ...m,
        data: {
          x: m.x - a,
          y: m.y - n,
          enabled: {
            [g]: l,
            [p]: r
          }
        }
      };
    }
  };
}, rd = function(e) {
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
      } = ot(e, t), u = {
        x: a,
        y: n
      }, p = mt(o), g = no(p);
      let h = u[g], x = u[p];
      const m = ot(i, t), _ = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (d) {
        const $ = g === "y" ? "height" : "width", D = l.reference[g] - l.floating[$] + _.mainAxis, O = l.reference[g] + l.reference[$] - _.mainAxis;
        h < D ? h = D : h > O && (h = O);
      }
      if (c) {
        var C, P;
        const $ = g === "y" ? "width" : "height", D = ["top", "left"].includes(lt(o)), O = l.reference[p] - l.floating[$] + (D && ((C = r.offset) == null ? void 0 : C[p]) || 0) + (D ? 0 : _.crossAxis), V = l.reference[p] + l.reference[$] + (D ? 0 : ((P = r.offset) == null ? void 0 : P[p]) || 0) - (D ? _.crossAxis : 0);
        x < O ? x = O : x > V && (x = V);
      }
      return {
        [g]: h,
        [p]: x
      };
    }
  };
}, id = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var a, n;
      const {
        placement: o,
        rects: l,
        platform: r,
        elements: i
      } = t, {
        apply: d = () => {
        },
        ...c
      } = ot(e, t), u = await pa(t, c), p = lt(o), g = Kt(o), h = mt(o) === "y", {
        width: x,
        height: m
      } = l.floating;
      let _, C;
      p === "top" || p === "bottom" ? (_ = p, C = g === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, _ = g === "end" ? "top" : "bottom");
      const P = m - u.top - u.bottom, $ = x - u.left - u.right, D = ft(m - u[_], P), O = ft(x - u[C], $), V = !t.middlewareData.shift;
      let A = D, W = O;
      if ((a = t.middlewareData.shift) != null && a.enabled.x && (W = $), (n = t.middlewareData.shift) != null && n.enabled.y && (A = P), V && !g) {
        const B = Be(u.left, 0), T = Be(u.right, 0), I = Be(u.top, 0), K = Be(u.bottom, 0);
        h ? W = x - 2 * (B !== 0 || T !== 0 ? B + T : Be(u.left, u.right)) : A = m - 2 * (I !== 0 || K !== 0 ? I + K : Be(u.top, u.bottom));
      }
      await d({
        ...t,
        availableWidth: W,
        availableHeight: A
      });
      const L = await r.getDimensions(i.floating);
      return x !== L.width || m !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ja() {
  return typeof window < "u";
}
function kt(e) {
  return so(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function He(e) {
  var t;
  return (t = (so(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function so(e) {
  return Ja() ? e instanceof Node || e instanceof Pe(e).Node : !1;
}
function Ve(e) {
  return Ja() ? e instanceof Element || e instanceof Pe(e).Element : !1;
}
function Ue(e) {
  return Ja() ? e instanceof HTMLElement || e instanceof Pe(e).HTMLElement : !1;
}
function Ho(e) {
  return !Ja() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Pe(e).ShadowRoot;
}
function _a(e) {
  const {
    overflow: t,
    overflowX: a,
    overflowY: n,
    display: o
  } = Ie(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + a) && !["inline", "contents"].includes(o);
}
function dd(e) {
  return ["table", "td", "th"].includes(kt(e));
}
function Qa(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ro(e) {
  const t = io(), a = Ve(e) ? Ie(e) : e;
  return a.transform !== "none" || a.perspective !== "none" || (a.containerType ? a.containerType !== "normal" : !1) || !t && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !t && (a.filter ? a.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function ud(e) {
  let t = ht(e);
  for (; Ue(t) && !Wt(t); ) {
    if (ro(t))
      return t;
    if (Qa(t))
      return null;
    t = ht(t);
  }
  return null;
}
function io() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Wt(e) {
  return ["html", "body", "#document"].includes(kt(e));
}
function Ie(e) {
  return Pe(e).getComputedStyle(e);
}
function en(e) {
  return Ve(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ht(e) {
  if (kt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ho(e) && e.host || // Fallback.
    He(e)
  );
  return Ho(t) ? t.host : t;
}
function Hl(e) {
  const t = ht(e);
  return Wt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ue(t) && _a(t) ? t : Hl(t);
}
function fa(e, t, a) {
  var n;
  t === void 0 && (t = []), a === void 0 && (a = !0);
  const o = Hl(e), l = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Pe(o);
  if (l) {
    const i = An(r);
    return t.concat(r, r.visualViewport || [], _a(o) ? o : [], i && a ? fa(i) : []);
  }
  return t.concat(o, fa(o, [], a));
}
function An(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Kl(e) {
  const t = Ie(e);
  let a = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = Ue(e), l = o ? e.offsetWidth : a, r = o ? e.offsetHeight : n, i = Ua(a) !== l || Ua(n) !== r;
  return i && (a = l, n = r), {
    width: a,
    height: n,
    $: i
  };
}
function uo(e) {
  return Ve(e) ? e : e.contextElement;
}
function Vt(e) {
  const t = uo(e);
  if (!Ue(t))
    return vt(1);
  const a = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: l
  } = Kl(t);
  let r = (l ? Ua(a.width) : a.width) / n, i = (l ? Ua(a.height) : a.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: r,
    y: i
  };
}
const cd = /* @__PURE__ */ vt(0);
function Gl(e) {
  const t = Pe(e);
  return !io() || !t.visualViewport ? cd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function pd(e, t, a) {
  return t === void 0 && (t = !1), !a || t && a !== Pe(e) ? !1 : t;
}
function xt(e, t, a, n) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const o = e.getBoundingClientRect(), l = uo(e);
  let r = vt(1);
  t && (n ? Ve(n) && (r = Vt(n)) : r = Vt(e));
  const i = pd(l, a, n) ? Gl(l) : vt(0);
  let d = (o.left + i.x) / r.x, c = (o.top + i.y) / r.y, u = o.width / r.x, p = o.height / r.y;
  if (l) {
    const g = Pe(l), h = n && Ve(n) ? Pe(n) : n;
    let x = g, m = An(x);
    for (; m && n && h !== x; ) {
      const _ = Vt(m), C = m.getBoundingClientRect(), P = Ie(m), $ = C.left + (m.clientLeft + parseFloat(P.paddingLeft)) * _.x, D = C.top + (m.clientTop + parseFloat(P.paddingTop)) * _.y;
      d *= _.x, c *= _.y, u *= _.x, p *= _.y, d += $, c += D, x = Pe(m), m = An(x);
    }
  }
  return Ha({
    width: u,
    height: p,
    x: d,
    y: c
  });
}
function fd(e) {
  let {
    elements: t,
    rect: a,
    offsetParent: n,
    strategy: o
  } = e;
  const l = o === "fixed", r = He(n), i = t ? Qa(t.floating) : !1;
  if (n === r || i && l)
    return a;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = vt(1);
  const u = vt(0), p = Ue(n);
  if ((p || !p && !l) && ((kt(n) !== "body" || _a(r)) && (d = en(n)), Ue(n))) {
    const g = xt(n);
    c = Vt(n), u.x = g.x + n.clientLeft, u.y = g.y + n.clientTop;
  }
  return {
    width: a.width * c.x,
    height: a.height * c.y,
    x: a.x * c.x - d.scrollLeft * c.x + u.x,
    y: a.y * c.y - d.scrollTop * c.y + u.y
  };
}
function vd(e) {
  return Array.from(e.getClientRects());
}
function Vn(e, t) {
  const a = en(e).scrollLeft;
  return t ? t.left + a : xt(He(e)).left + a;
}
function md(e) {
  const t = He(e), a = en(e), n = e.ownerDocument.body, o = Be(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), l = Be(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -a.scrollLeft + Vn(e);
  const i = -a.scrollTop;
  return Ie(n).direction === "rtl" && (r += Be(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: l,
    x: r,
    y: i
  };
}
function hd(e, t) {
  const a = Pe(e), n = He(e), o = a.visualViewport;
  let l = n.clientWidth, r = n.clientHeight, i = 0, d = 0;
  if (o) {
    l = o.width, r = o.height;
    const c = io();
    (!c || c && t === "fixed") && (i = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: l,
    height: r,
    x: i,
    y: d
  };
}
function gd(e, t) {
  const a = xt(e, !0, t === "fixed"), n = a.top + e.clientTop, o = a.left + e.clientLeft, l = Ue(e) ? Vt(e) : vt(1), r = e.clientWidth * l.x, i = e.clientHeight * l.y, d = o * l.x, c = n * l.y;
  return {
    width: r,
    height: i,
    x: d,
    y: c
  };
}
function Ko(e, t, a) {
  let n;
  if (t === "viewport")
    n = hd(e, a);
  else if (t === "document")
    n = md(He(e));
  else if (Ve(t))
    n = gd(t, a);
  else {
    const o = Gl(e);
    n = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Ha(n);
}
function ql(e, t) {
  const a = ht(e);
  return a === t || !Ve(a) || Wt(a) ? !1 : Ie(a).position === "fixed" || ql(a, t);
}
function yd(e, t) {
  const a = t.get(e);
  if (a)
    return a;
  let n = fa(e, [], !1).filter((i) => Ve(i) && kt(i) !== "body"), o = null;
  const l = Ie(e).position === "fixed";
  let r = l ? ht(e) : e;
  for (; Ve(r) && !Wt(r); ) {
    const i = Ie(r), d = ro(r);
    !d && i.position === "fixed" && (o = null), (l ? !d && !o : !d && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || _a(r) && !d && ql(e, r)) ? n = n.filter((u) => u !== r) : o = i, r = ht(r);
  }
  return t.set(e, n), n;
}
function bd(e) {
  let {
    element: t,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = e;
  const r = [...a === "clippingAncestors" ? Qa(t) ? [] : yd(t, this._c) : [].concat(a), n], i = r[0], d = r.reduce((c, u) => {
    const p = Ko(t, u, o);
    return c.top = Be(p.top, c.top), c.right = ft(p.right, c.right), c.bottom = ft(p.bottom, c.bottom), c.left = Be(p.left, c.left), c;
  }, Ko(t, i, o));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function wd(e) {
  const {
    width: t,
    height: a
  } = Kl(e);
  return {
    width: t,
    height: a
  };
}
function _d(e, t, a) {
  const n = Ue(t), o = He(t), l = a === "fixed", r = xt(e, !0, l, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = vt(0);
  if (n || !n && !l)
    if ((kt(t) !== "body" || _a(o)) && (i = en(t)), n) {
      const h = xt(t, !0, l, t);
      d.x = h.x + t.clientLeft, d.y = h.y + t.clientTop;
    } else o && (d.x = Vn(o));
  let c = 0, u = 0;
  if (o && !n && !l) {
    const h = o.getBoundingClientRect();
    u = h.top + i.scrollTop, c = h.left + i.scrollLeft - // RTL <body> scrollbar.
    Vn(o, h);
  }
  const p = r.left + i.scrollLeft - d.x - c, g = r.top + i.scrollTop - d.y - u;
  return {
    x: p,
    y: g,
    width: r.width,
    height: r.height
  };
}
function yn(e) {
  return Ie(e).position === "static";
}
function Go(e, t) {
  if (!Ue(e) || Ie(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let a = e.offsetParent;
  return He(e) === a && (a = a.ownerDocument.body), a;
}
function Yl(e, t) {
  const a = Pe(e);
  if (Qa(e))
    return a;
  if (!Ue(e)) {
    let o = ht(e);
    for (; o && !Wt(o); ) {
      if (Ve(o) && !yn(o))
        return o;
      o = ht(o);
    }
    return a;
  }
  let n = Go(e, t);
  for (; n && dd(n) && yn(n); )
    n = Go(n, t);
  return n && Wt(n) && yn(n) && !ro(n) ? a : n || ud(e) || a;
}
const xd = async function(e) {
  const t = this.getOffsetParent || Yl, a = this.getDimensions, n = await a(e.floating);
  return {
    reference: _d(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Cd(e) {
  return Ie(e).direction === "rtl";
}
const $d = {
  convertOffsetParentRelativeRectToViewportRelativeRect: fd,
  getDocumentElement: He,
  getClippingRect: bd,
  getOffsetParent: Yl,
  getElementRects: xd,
  getClientRects: vd,
  getDimensions: wd,
  getScale: Vt,
  isElement: Ve,
  isRTL: Cd
};
function kd(e, t) {
  let a = null, n;
  const o = He(e);
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
      height: g
    } = e.getBoundingClientRect();
    if (i || t(), !p || !g)
      return;
    const h = Sa(u), x = Sa(o.clientWidth - (c + p)), m = Sa(o.clientHeight - (u + g)), _ = Sa(c), P = {
      rootMargin: -h + "px " + -x + "px " + -m + "px " + -_ + "px",
      threshold: Be(0, ft(1, d)) || 1
    };
    let $ = !0;
    function D(O) {
      const V = O[0].intersectionRatio;
      if (V !== d) {
        if (!$)
          return r();
        V ? r(!1, V) : n = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      $ = !1;
    }
    try {
      a = new IntersectionObserver(D, {
        ...P,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      a = new IntersectionObserver(D, P);
    }
    a.observe(e);
  }
  return r(!0), l;
}
function Bd(e, t, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: l = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, c = uo(e), u = o || l ? [...c ? fa(c) : [], ...fa(t)] : [];
  u.forEach((C) => {
    o && C.addEventListener("scroll", a, {
      passive: !0
    }), l && C.addEventListener("resize", a);
  });
  const p = c && i ? kd(c, a) : null;
  let g = -1, h = null;
  r && (h = new ResizeObserver((C) => {
    let [P] = C;
    P && P.target === c && h && (h.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var $;
      ($ = h) == null || $.observe(t);
    })), a();
  }), c && !d && h.observe(c), h.observe(t));
  let x, m = d ? xt(e) : null;
  d && _();
  function _() {
    const C = xt(e);
    m && (C.x !== m.x || C.y !== m.y || C.width !== m.width || C.height !== m.height) && a(), m = C, x = requestAnimationFrame(_);
  }
  return a(), () => {
    var C;
    u.forEach((P) => {
      o && P.removeEventListener("scroll", a), l && P.removeEventListener("resize", a);
    }), p == null || p(), (C = h) == null || C.disconnect(), h = null, d && cancelAnimationFrame(x);
  };
}
const Pd = ld, Dd = sd, qo = ad, Od = id, Sd = nd, Ed = td, Md = rd, Td = (e, t, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: $d,
    ...a
  }, l = {
    ...o.platform,
    _c: n
  };
  return ed(e, t, {
    ...o,
    platform: l
  });
};
function Ad(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function In(e) {
  if (Ad(e)) {
    const t = e.$el;
    return so(t) && kt(t) === "#comment" ? null : t;
  }
  return e;
}
function Tt(e) {
  return typeof e == "function" ? e() : s(e);
}
function Vd(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const a = In(Tt(e.element));
      return a == null ? {} : Ed({
        element: a,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Zl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Yo(e, t) {
  const a = Zl(e);
  return Math.round(t * a) / a;
}
function Id(e, t, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = k(() => {
    var A;
    return (A = Tt(a.open)) != null ? A : !0;
  }), l = k(() => Tt(a.middleware)), r = k(() => {
    var A;
    return (A = Tt(a.placement)) != null ? A : "bottom";
  }), i = k(() => {
    var A;
    return (A = Tt(a.strategy)) != null ? A : "absolute";
  }), d = k(() => {
    var A;
    return (A = Tt(a.transform)) != null ? A : !0;
  }), c = k(() => In(e.value)), u = k(() => In(t.value)), p = M(0), g = M(0), h = M(i.value), x = M(r.value), m = jn({}), _ = M(!1), C = k(() => {
    const A = {
      position: h.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return A;
    const W = Yo(u.value, p.value), L = Yo(u.value, g.value);
    return d.value ? {
      ...A,
      transform: "translate(" + W + "px, " + L + "px)",
      ...Zl(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: h.value,
      left: W + "px",
      top: L + "px"
    };
  });
  let P;
  function $() {
    if (c.value == null || u.value == null)
      return;
    const A = o.value;
    Td(c.value, u.value, {
      middleware: l.value,
      placement: r.value,
      strategy: i.value
    }).then((W) => {
      p.value = W.x, g.value = W.y, h.value = W.strategy, x.value = W.placement, m.value = W.middlewareData, _.value = A !== !1;
    });
  }
  function D() {
    typeof P == "function" && (P(), P = void 0);
  }
  function O() {
    if (D(), n === void 0) {
      $();
      return;
    }
    if (c.value != null && u.value != null) {
      P = n(c.value, u.value, $);
      return;
    }
  }
  function V() {
    o.value || (_.value = !1);
  }
  return ee([l, r, i, o], $, {
    flush: "sync"
  }), ee([c, u], O, {
    flush: "sync"
  }), ee(o, V, {
    flush: "sync"
  }), Hn() && Kn(D), {
    x: Et(p),
    y: Et(g),
    strategy: Et(h),
    placement: Et(x),
    middlewareData: Et(m),
    isPositioned: Et(_),
    floatingStyles: C,
    update: $
  };
}
function ie(e, t) {
  const a = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(a);
  return [(o) => {
    const l = hl(n, o);
    if (l || l === null)
      return l;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (gl(n, o), o)];
}
function co(e, t, a) {
  const n = a.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function Zo(e, t = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(e, t), a);
}
function Rd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fd = function e(t, a) {
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
const wt = /* @__PURE__ */ Rd(Fd);
function Ld(e) {
  return e == null;
}
function Xl(e) {
  const { defaultValue: t, defaultPlaceholder: a, granularity: n = "day" } = e;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (a)
    return a.copy();
  const o = /* @__PURE__ */ new Date(), l = o.getFullYear(), r = o.getMonth() + 1, i = o.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new Nt(l, r, i, 0, 0, 0) : new Lt(l, r, i);
}
function Jl(e) {
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
function Nd(e, t) {
  var a;
  const n = jn();
  return ge(() => {
    n.value = e();
  }, {
    ...t,
    flush: (a = void 0) != null ? a : "sync"
  }), ba(n);
}
function Gt(e) {
  return Hn() ? (Kn(e), !0) : !1;
}
function zd(e) {
  let t = !1, a;
  const n = ml(!0);
  return (...o) => (t || (a = n.run(() => e(...o)), t = !0), a);
}
function Ql(e) {
  let t = 0, a, n;
  const o = () => {
    t -= 1, n && t <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...l) => (t += 1, a || (n = ml(!0), a = n.run(() => e(...l))), Gt(o), a);
}
function nt(e) {
  return typeof e == "function" ? e() : s(e);
}
const Ke = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Wd = (e) => typeof e < "u", Ud = (e) => e != null, jd = Object.prototype.toString, Hd = (e) => jd.call(e) === "[object Object]", es = () => {
}, Xo = /* @__PURE__ */ Kd();
function Kd() {
  var e, t;
  return Ke && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Gd(e) {
  return je();
}
function qd(e, t = 1e4) {
  return yl((a, n) => {
    let o = nt(e), l;
    const r = () => setTimeout(() => {
      o = nt(e), n();
    }, nt(t));
    return Gt(() => {
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
function Yd(e, t) {
  Gd() && qn(e, t);
}
function Zd(e, t, a = {}) {
  const {
    immediate: n = !0
  } = a, o = M(!1);
  let l = null;
  function r() {
    l && (clearTimeout(l), l = null);
  }
  function i() {
    o.value = !1, r();
  }
  function d(...c) {
    r(), o.value = !0, l = setTimeout(() => {
      o.value = !1, l = null, e(...c);
    }, nt(t));
  }
  return n && (o.value = !0, Ke && d()), Gt(i), {
    isPending: ba(o),
    start: d,
    stop: i
  };
}
function Xd(e = 1e3, t = {}) {
  const {
    controls: a = !1,
    callback: n
  } = t, o = Zd(
    n ?? es,
    e,
    t
  ), l = k(() => !o.isPending.value);
  return a ? {
    ready: l,
    ...o
  } : l;
}
function Se(e) {
  var t;
  const a = nt(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const tn = Ke ? window : void 0;
function Ka(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = tn) : [t, a, n, o] = e, !t)
    return es;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const l = [], r = () => {
    l.forEach((u) => u()), l.length = 0;
  }, i = (u, p, g, h) => (u.addEventListener(p, g, h), () => u.removeEventListener(p, g, h)), d = ee(
    () => [Se(t), nt(o)],
    ([u, p]) => {
      if (r(), !u)
        return;
      const g = Hd(p) ? { ...p } : p;
      l.push(
        ...a.flatMap((h) => n.map((x) => i(u, h, x, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), r();
  };
  return Gt(c), c;
}
function Jd(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function po(...e) {
  let t, a, n = {};
  e.length === 3 ? (t = e[0], a = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, a = e[0], n = e[1]) : (t = e[0], a = e[1]) : (t = !0, a = e[0]);
  const {
    target: o = tn,
    eventName: l = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, d = Jd(t);
  return Ka(o, l, (c) => {
    c.repeat && nt(i) || d(c) && a(c);
  }, r);
}
function ts() {
  const e = M(!1), t = je();
  return t && de(() => {
    e.value = !0;
  }, t), e;
}
function Qd(e) {
  const t = ts();
  return k(() => (t.value, !!e()));
}
function eu(e, t, a = {}) {
  const { window: n = tn, ...o } = a;
  let l;
  const r = Qd(() => n && "MutationObserver" in n), i = () => {
    l && (l.disconnect(), l = void 0);
  }, d = k(() => {
    const g = nt(e), h = (Array.isArray(g) ? g : [g]).map(Se).filter(Ud);
    return new Set(h);
  }), c = ee(
    () => d.value,
    (g) => {
      i(), r.value && g.size && (l = new MutationObserver(t), g.forEach((h) => l.observe(h, o)));
    },
    { immediate: !0, flush: "post" }
  ), u = () => l == null ? void 0 : l.takeRecords(), p = () => {
    i(), c();
  };
  return Gt(p), {
    isSupported: r,
    stop: p,
    takeRecords: u
  };
}
function as(e, t = {}) {
  const {
    immediate: a = !0,
    fpsLimit: n = void 0,
    window: o = tn
  } = t, l = M(!1), r = n ? 1e3 / n : null;
  let i = 0, d = null;
  function c(g) {
    if (!l.value || !o)
      return;
    i || (i = g);
    const h = g - i;
    if (r && h < r) {
      d = o.requestAnimationFrame(c);
      return;
    }
    i = g, e({ delta: h, timestamp: g }), d = o.requestAnimationFrame(c);
  }
  function u() {
    !l.value && o && (l.value = !0, i = 0, d = o.requestAnimationFrame(c));
  }
  function p() {
    l.value = !1, d != null && o && (o.cancelAnimationFrame(d), d = null);
  }
  return a && u(), Gt(p), {
    isActive: ba(l),
    pause: p,
    resume: u
  };
}
function tu(e) {
  return JSON.parse(JSON.stringify(e));
}
function ve(e, t, a, n = {}) {
  var o, l, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, h = je(), x = a || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((r = (l = h == null ? void 0 : h.proxy) == null ? void 0 : l.$emit) == null ? void 0 : r.bind(h == null ? void 0 : h.proxy));
  let m = c;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const _ = ($) => i ? typeof i == "function" ? i($) : tu($) : $, C = () => Wd(e[t]) ? _(e[t]) : p, P = ($) => {
    g ? g($) && x(m, $) : x(m, $);
  };
  if (d) {
    const $ = C(), D = M($);
    let O = !1;
    return ee(
      () => e[t],
      (V) => {
        O || (O = !0, D.value = _(V), oe(() => O = !1));
      }
    ), ee(
      D,
      (V) => {
        !O && (V !== e[t] || u) && P(V);
      },
      { deep: u }
    ), D;
  } else
    return k({
      get() {
        return C();
      },
      set($) {
        P($);
      }
    });
}
function an(e) {
  return e ? e.flatMap((t) => t.type === J ? an(t.children) : [t]) : [];
}
const au = ["INPUT", "TEXTAREA"];
function nu(e, t, a, n = {}) {
  if (!t || n.enableIgnoredElement && au.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: l = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = !0,
    dir: d = "ltr",
    preventScroll: c = !0,
    focus: u = !1
  } = n, [p, g, h, x, m, _] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = h || x, P = p || g;
  if (!m && !_ && (!C && !P || o === "vertical" && P || o === "horizontal" && C))
    return null;
  const $ = a ? Array.from(a.querySelectorAll(l)) : r;
  if (!$.length)
    return null;
  c && e.preventDefault();
  let D = null;
  return P || C ? D = ns($, t, {
    goForward: C ? x : d === "ltr" ? p : g,
    loop: i
  }) : m ? D = $.at(0) || null : _ && (D = $.at(-1) || null), u && (D == null || D.focus()), D;
}
function ns(e, t, a, n = e.length) {
  if (--n === 0)
    return null;
  const o = e.indexOf(t), l = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (l < 0 || l >= e.length))
    return null;
  const r = (l + e.length) % e.length, i = e[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? ns(
    e,
    i,
    a,
    n
  ) : i : null;
}
function bn(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Rn(e, t, a = ".", n) {
  if (!bn(t))
    return Rn(e, {}, a);
  const o = Object.assign({}, t);
  for (const l in e) {
    if (l === "__proto__" || l === "constructor")
      continue;
    const r = e[l];
    r != null && (Array.isArray(r) && Array.isArray(o[l]) ? o[l] = [...r, ...o[l]] : bn(r) && bn(o[l]) ? o[l] = Rn(
      r,
      o[l],
      (a ? `${a}.` : "") + l.toString()
    ) : o[l] = r);
  }
  return o;
}
function ou(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((a, n) => Rn(a, n, ""), {})
  );
}
const lu = ou(), [nn, mg] = ie("ConfigProvider");
let su = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", ru = (e = 21) => {
  let t = "", a = e;
  for (; a--; )
    t += su[Math.random() * 64 | 0];
  return t;
};
const iu = Ql(() => {
  const e = M(/* @__PURE__ */ new Map()), t = M(), a = k(() => {
    for (const r of e.value.values())
      if (r)
        return !0;
    return !1;
  }), n = nn({
    scrollBody: M(!0)
  });
  let o = null;
  const l = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Xo && (o == null || o()), t.value = void 0;
  };
  return ee(a, (r, i) => {
    var d;
    if (!Ke)
      return;
    if (!r) {
      i && l();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, u = { padding: c, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? lu({
      padding: n.scrollBody.value.padding === !0 ? c : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? c : n.scrollBody.value.margin
    }, u) : u : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = `${p.padding}px`, document.body.style.marginRight = `${p.margin}px`, document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Xo && (o = Ka(
      document,
      "touchmove",
      (g) => {
        var h;
        g.target === document.documentElement && (g.touches.length > 1 || (h = g.preventDefault) == null || h.call(g));
      },
      { passive: !1 }
    )), oe(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function xa(e) {
  const t = ru(6), a = iu();
  a.value.set(t, e ?? !1);
  const n = k({
    get: () => a.value.get(t) ?? !1,
    set: (o) => a.value.set(t, o)
  });
  return Yd(() => {
    a.value.delete(t);
  }), n;
}
const du = "data-radix-vue-collection-item";
function qt(e, t = du) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = M([]);
    function l() {
      const r = Se(n);
      return r ? o.value = Array.from(
        r.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return hr(() => {
      o.value = [];
    }), de(l), gr(l), ee(() => n == null ? void 0 : n.value, l, { immediate: !0 }), gl(a, o), o;
  }, injectCollection: () => hl(a, M([])) };
}
function uu(e) {
  const t = M(e);
  function a() {
    return t.value;
  }
  function n(m) {
    t.value = m;
  }
  function o(m, _) {
    return new Xe(t.value, _).format(m);
  }
  function l(m, _ = !0) {
    return Fi(m) && _ ? o(Ae(m), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Ae(m), {
      dateStyle: "long"
    });
  }
  function r(m, _ = {}) {
    return new Xe(t.value, { month: "long", year: "numeric", ..._ }).format(m);
  }
  function i(m, _ = {}) {
    return new Xe(t.value, { month: "long", ..._ }).format(m);
  }
  function d() {
    const m = El($t());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_) => ({ label: i(Ae(m.set({ month: _ }))), value: _ }));
  }
  function c(m, _ = {}) {
    return new Xe(t.value, { year: "numeric", ..._ }).format(m);
  }
  function u(m, _) {
    return ao(m) ? new Xe(t.value, {
      ..._,
      timeZone: m.timeZone
    }).formatToParts(Ae(m)) : new Xe(t.value, _).formatToParts(Ae(m));
  }
  function p(m, _ = "narrow") {
    return new Xe(t.value, { weekday: _ }).format(m);
  }
  function g(m) {
    var _;
    return ((_ = new Xe(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(m).find((C) => C.type === "dayPeriod")) == null ? void 0 : _.value) === "PM" ? "PM" : "AM";
  }
  const h = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function x(m, _, C = {}) {
    const P = { ...h, ...C }, $ = u(m, P).find((D) => D.type === _);
    return $ ? $.value : "";
  }
  return {
    setLocale: n,
    getLocale: a,
    fullMonth: i,
    fullYear: c,
    fullMonthAndYear: r,
    toParts: u,
    custom: o,
    part: x,
    dayPeriod: g,
    selectedDate: l,
    dayOfWeek: p,
    getMonths: d
  };
}
function gt(e) {
  const t = nn({
    dir: M("ltr")
  });
  return k(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function Bt(e) {
  const t = je(), a = t == null ? void 0 : t.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), a == null || a.forEach((o) => {
    n[vr(fl(o))] = (...l) => e(o, ...l);
  }), n;
}
let wn = 0;
function fo() {
  ge((e) => {
    if (!Ke)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Jo()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Jo()
    ), wn++, e(() => {
      wn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), wn--;
    });
  });
}
function Jo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function on(e) {
  return k(() => {
    var t;
    return nt(e) ? !!((t = Se(e)) != null && t.closest("form")) : !0;
  });
}
function ne(e) {
  const t = je(), a = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, l) => {
    const r = (t == null ? void 0 : t.type.props[l]).default;
    return r !== void 0 && (o[l] = r), o;
  }, {}), n = pl(e);
  return k(() => {
    const o = {}, l = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(l).forEach((r) => {
      o[fl(r)] = l[r];
    }), Object.keys({ ...a, ...o }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function le(e, t) {
  const a = ne(e), n = t ? Bt(t) : {};
  return k(() => ({
    ...a.value,
    ...n
  }));
}
function N() {
  const e = je(), t = M(), a = k(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = t.value) == null ? void 0 : r.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Se(t);
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
var cu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Mt = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap(), Ma = {}, _n = 0, os = function(e) {
  return e && (e.host || os(e.parentNode));
}, pu = function(e, t) {
  return t.map(function(a) {
    if (e.contains(a))
      return a;
    var n = os(a);
    return n && e.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, fu = function(e, t, a, n) {
  var o = pu(t, Array.isArray(e) ? e : [e]);
  Ma[a] || (Ma[a] = /* @__PURE__ */ new WeakMap());
  var l = Ma[a], r = [], i = /* @__PURE__ */ new Set(), d = new Set(o), c = function(p) {
    !p || i.has(p) || (i.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var u = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(g) {
      if (i.has(g))
        u(g);
      else
        try {
          var h = g.getAttribute(n), x = h !== null && h !== "false", m = (Mt.get(g) || 0) + 1, _ = (l.get(g) || 0) + 1;
          Mt.set(g, m), l.set(g, _), r.push(g), m === 1 && x && Ea.set(g, !0), _ === 1 && g.setAttribute(a, "true"), x || g.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", g, C);
        }
    });
  };
  return u(t), i.clear(), _n++, function() {
    r.forEach(function(p) {
      var g = Mt.get(p) - 1, h = l.get(p) - 1;
      Mt.set(p, g), l.set(p, h), g || (Ea.has(p) || p.removeAttribute(n), Ea.delete(p)), h || p.removeAttribute(a);
    }), _n--, _n || (Mt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap(), Ma = {});
  };
}, vu = function(e, t, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = cu(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), fu(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function Ca(e) {
  let t;
  ee(() => Se(e), (a) => {
    a ? t = vu(a) : t && t();
  }), Ct(() => {
    t && t();
  });
}
let mu = 0;
function xe(e, t = "radix") {
  const a = nn({ useId: void 0 });
  return So.useId ? `${t}-${So.useId()}` : a.useId ? `${t}-${a.useId()}` : `${t}-${++mu}`;
}
function hu(e) {
  const t = M(), a = k(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), n = k(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return de(() => {
    const o = Se(e);
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
function gu(e, t) {
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
function vo(e) {
  const t = qd("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, n) => {
      var o, l;
      if (!(e != null && e.value) && !n)
        return;
      t.value = t.value + a;
      const r = (e == null ? void 0 : e.value) ?? n, i = document.activeElement, d = ((l = (o = r.find((g) => g === i)) == null ? void 0 : o.textContent) == null ? void 0 : l.trim()) ?? "", c = r.map((g) => {
        var h;
        return ((h = g.textContent) == null ? void 0 : h.trim()) ?? "";
      }), u = bu(c, t.value, d), p = r.find(
        (g) => {
          var h;
          return ((h = g.textContent) == null ? void 0 : h.trim()) === u;
        }
      );
      return p && p.focus(), p;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function yu(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
function bu(e, t, a) {
  const n = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = a ? e.indexOf(a) : -1;
  let l = yu(e, Math.max(o, 0));
  n.length === 1 && (l = l.filter((i) => i !== a));
  const r = l.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return r !== a ? r : void 0;
}
function ls() {
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
const mo = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const l = an(a.default()), r = l.findIndex((u) => u.type !== ir);
      if (r === -1)
        return l;
      const i = l[r];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? E(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const c = dr(i, d);
      for (const u in d)
        u.startsWith("on") && (c.props || (c.props = {}), c.props[u] = d[u]);
      return l.length === 1 ? c : (l[r] = c, l);
    };
  }
}), F = b({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => Ne(n, t) : n !== "template" ? () => Ne(e.as, t, { default: a.default }) : () => Ne(mo, t, { default: a.default });
  }
});
function Yt() {
  const e = M(), t = k(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = e.value) == null ? void 0 : a.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : Se(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function wu(e, t) {
  const a = M({}), n = M("none"), o = e.value ? "mounted" : "unmounted", { state: l, dispatch: r } = gu(o, {
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
    var h;
    if (Ke) {
      const x = new CustomEvent(g, { bubbles: !1, cancelable: !1 });
      (h = t.value) == null || h.dispatchEvent(x);
    }
  };
  ee(
    e,
    async (g, h) => {
      var x;
      const m = h !== g;
      if (await oe(), m) {
        const _ = n.value, C = Ta(t.value);
        g ? (r("MOUNT"), i("enter"), C === "none" && i("after-enter")) : C === "none" || ((x = a.value) == null ? void 0 : x.display) === "none" ? (r("UNMOUNT"), i("leave"), i("after-leave")) : h && _ !== C ? (r("ANIMATION_OUT"), i("leave")) : (r("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (g) => {
    const h = Ta(t.value), x = h.includes(
      g.animationName
    ), m = l.value === "mounted" ? "enter" : "leave";
    g.target === t.value && x && (i(`after-${m}`), r("ANIMATION_END")), g.target === t.value && h === "none" && r("ANIMATION_END");
  }, c = (g) => {
    g.target === t.value && (n.value = Ta(t.value));
  }, u = ee(
    t,
    (g, h) => {
      g ? (a.value = getComputedStyle(g), g.addEventListener("animationstart", c), g.addEventListener("animationcancel", d), g.addEventListener("animationend", d)) : (r("ANIMATION_END"), h == null || h.removeEventListener("animationstart", c), h == null || h.removeEventListener("animationcancel", d), h == null || h.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), p = ee(l, () => {
    const g = Ta(t.value);
    n.value = l.value === "mounted" ? g : "none";
  });
  return Ct(() => {
    u(), p();
  }), {
    isPresent: k(
      () => ["mounted", "unmountSuspended"].includes(l.value)
    )
  };
}
function Ta(e) {
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
    const { present: o, forceMount: l } = me(e), r = M(), { isPresent: i } = wu(o, r);
    a({ present: i });
    let d = t.default({ present: i });
    d = an(d || []);
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
    return () => l.value || o.value || i.value ? Ne(t.default({ present: i })[0], {
      ref: (u) => {
        const p = Se(u);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
}), [Ge, _u] = ie("DialogRoot"), xu = /* @__PURE__ */ b({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = ve(a, "open", t, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = M(), l = M(), { modal: r } = me(a);
    return _u({
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
    }), (i, d) => w(i.$slots, "default", { open: s(n) });
  }
}), Cu = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ge(), { forwardRef: n, currentElement: o } = N();
    return a.contentId || (a.contentId = xe(void 0, "radix-vue-dialog-content")), de(() => {
      a.triggerElement.value = o.value;
    }), (l, r) => (f(), y(s(F), E(t, {
      ref: s(n),
      type: l.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(a).open.value || !1,
      "aria-controls": s(a).open.value ? s(a).contentId : void 0,
      "data-state": s(a).open.value ? "open" : "closed",
      onClick: s(a).onOpenToggle
    }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), ln = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = ts();
    return (a, n) => s(t) || a.forceMount ? (f(), y(Za, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      w(a.$slots, "default")
    ], 8, ["to", "disabled"])) : Q("", !0);
  }
}), ss = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(ln), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $u = "dismissableLayer.pointerDownOutside", ku = "dismissableLayer.focusOutside";
function rs(e, t) {
  const a = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function Bu(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1), l = M(() => {
  });
  return ge((r) => {
    if (!Ke)
      return;
    const i = async (c) => {
      const u = c.target;
      if (t != null && t.value) {
        if (rs(t.value, u)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let p = function() {
            co(
              $u,
              e,
              g
            );
          };
          const g = { originalEvent: c };
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
function Pu(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1);
  return ge((l) => {
    if (!Ke)
      return;
    const r = async (i) => {
      t != null && t.value && (await oe(), !(!t.value || rs(t.value, i.target)) && i.target && !o.value && co(
        ku,
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
const Te = vl({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), $a = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: l } = N(), r = k(
      () => {
        var x;
        return ((x = l.value) == null ? void 0 : x.ownerDocument) ?? globalThis.document;
      }
    ), i = k(() => Te.layersRoot), d = k(() => l.value ? Array.from(i.value).indexOf(l.value) : -1), c = k(() => Te.layersWithOutsidePointerEventsDisabled.size > 0), u = k(() => {
      const x = Array.from(i.value), [m] = [...Te.layersWithOutsidePointerEventsDisabled].slice(-1), _ = x.indexOf(m);
      return d.value >= _;
    }), p = Bu(async (x) => {
      const m = [...Te.branches].some(
        (_) => _ == null ? void 0 : _.contains(x.target)
      );
      !u.value || m || (n("pointerDownOutside", x), n("interactOutside", x), await oe(), x.defaultPrevented || n("dismiss"));
    }, l), g = Pu((x) => {
      [...Te.branches].some(
        (m) => m == null ? void 0 : m.contains(x.target)
      ) || (n("focusOutside", x), n("interactOutside", x), x.defaultPrevented || n("dismiss"));
    }, l);
    po("Escape", (x) => {
      d.value === i.value.size - 1 && (n("escapeKeyDown", x), x.defaultPrevented || n("dismiss"));
    });
    let h;
    return ge((x) => {
      l.value && (a.disableOutsidePointerEvents && (Te.layersWithOutsidePointerEventsDisabled.size === 0 && (h = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), Te.layersWithOutsidePointerEventsDisabled.add(l.value)), i.value.add(l.value), x(() => {
        a.disableOutsidePointerEvents && Te.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = h);
      }));
    }), ge((x) => {
      x(() => {
        l.value && (i.value.delete(l.value), Te.layersWithOutsidePointerEventsDisabled.delete(l.value));
      });
    }), (x, m) => (f(), y(s(F), {
      ref: s(o),
      "as-child": x.asChild,
      as: x.as,
      "data-dismissable-layer": "",
      style: ya({
        pointerEvents: c.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(g).onFocusCapture,
      onBlurCapture: s(g).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: v(() => [
        w(x.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Du = /* @__PURE__ */ b({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = N();
    return de(() => {
      Te.branches.add(n.value);
    }), Ct(() => {
      Te.branches.delete(n.value);
    }), (o, l) => (f(), y(s(F), E({ ref: s(a) }, t), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xn = "focusScope.autoFocusOnMount", Cn = "focusScope.autoFocusOnUnmount", Qo = { bubbles: !1, cancelable: !0 };
function za(e, { select: t = !1 } = {}) {
  const a = document.activeElement;
  for (const n of e)
    if (ct(n, { select: t }), document.activeElement !== a)
      return !0;
}
function Ou(e) {
  const t = ho(e), a = el(t, e), n = el(t.reverse(), e);
  return [a, n];
}
function ho(e) {
  const t = [], a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) t.push(a.currentNode);
  return t;
}
function el(e, t) {
  for (const a of e)
    if (!Su(a, { upTo: t }))
      return a;
}
function Su(e, { upTo: t }) {
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
function Eu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ct(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const a = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== a && Eu(e) && t && e.select();
  }
}
const Mu = zd(() => M([]));
function Tu() {
  const e = Mu();
  return {
    add(t) {
      const a = e.value[0];
      t !== a && (a == null || a.pause()), e.value = tl(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var a;
      e.value = tl(e.value, t), (a = e.value[0]) == null || a.resume();
    }
  };
}
function tl(e, t) {
  const a = [...e], n = a.indexOf(t);
  return n !== -1 && a.splice(n, 1), a;
}
function Au(e) {
  return e.filter((t) => t.tagName !== "A");
}
const sn = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, n = t, { currentRef: o, currentElement: l } = N(), r = M(null), i = Tu(), d = vl({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ge((u) => {
      if (!Ke)
        return;
      const p = l.value;
      if (!a.trapped)
        return;
      function g(_) {
        if (d.paused || !p)
          return;
        const C = _.target;
        p.contains(C) ? r.value = C : ct(r.value, { select: !0 });
      }
      function h(_) {
        if (d.paused || !p)
          return;
        const C = _.relatedTarget;
        C !== null && (p.contains(C) || ct(r.value, { select: !0 }));
      }
      function x(_) {
        p.contains(r.value) || ct(p);
      }
      document.addEventListener("focusin", g), document.addEventListener("focusout", h);
      const m = new MutationObserver(x);
      p && m.observe(p, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", h), m.disconnect();
      });
    }), ge(async (u) => {
      const p = l.value;
      if (await oe(), !p)
        return;
      i.add(d);
      const g = document.activeElement;
      if (!p.contains(g)) {
        const h = new CustomEvent(xn, Qo);
        p.addEventListener(xn, (x) => n("mountAutoFocus", x)), p.dispatchEvent(h), h.defaultPrevented || (za(Au(ho(p)), {
          select: !0
        }), document.activeElement === g && ct(p));
      }
      u(() => {
        p.removeEventListener(xn, (m) => n("mountAutoFocus", m));
        const h = new CustomEvent(Cn, Qo), x = (m) => {
          n("unmountAutoFocus", m);
        };
        p.addEventListener(Cn, x), p.dispatchEvent(h), setTimeout(() => {
          h.defaultPrevented || ct(g ?? document.body, { select: !0 }), p.removeEventListener(Cn, x), i.remove(d);
        }, 0);
      });
    });
    function c(u) {
      if (!a.loop && !a.trapped || d.paused)
        return;
      const p = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, g = document.activeElement;
      if (p && g) {
        const h = u.currentTarget, [x, m] = Ou(h);
        x && m ? !u.shiftKey && g === m ? (u.preventDefault(), a.loop && ct(x, { select: !0 })) : u.shiftKey && g === x && (u.preventDefault(), a.loop && ct(m, { select: !0 })) : g === h && u.preventDefault();
      }
    }
    return (u, p) => (f(), y(s(F), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: c
    }, {
      default: v(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Vu = "menu.itemSelect", Fn = ["Enter", " "], Iu = ["ArrowDown", "PageUp", "Home"], is = ["ArrowUp", "PageDown", "End"], Ru = [...Iu, ...is], Fu = {
  ltr: [...Fn, "ArrowRight"],
  rtl: [...Fn, "ArrowLeft"]
}, Lu = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function go(e) {
  return e ? "open" : "closed";
}
function Ga(e) {
  return e === "indeterminate";
}
function yo(e) {
  return Ga(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Ln(e) {
  const t = document.activeElement;
  for (const a of e)
    if (a === t || (a.focus(), document.activeElement !== t))
      return;
}
function Nu(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let l = 0, r = t.length - 1; l < t.length; r = l++) {
    const i = t[l].x, d = t[l].y, c = t[r].x, u = t[r].y;
    d > n != u > n && a < (c - i) * (n - d) / (u - d) + i && (o = !o);
  }
  return o;
}
function zu(e, t) {
  if (!t)
    return !1;
  const a = { x: e.clientX, y: e.clientY };
  return Nu(a, t);
}
function va(e) {
  return e.pointerType === "mouse";
}
const Wu = "DialogTitle", Uu = "DialogContent";
function ju({
  titleName: e = Wu,
  contentName: t = Uu,
  componentLink: a = "dialog.html#title",
  titleId: n,
  descriptionId: o,
  contentElement: l
}) {
  const r = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${a}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  de(() => {
    var d;
    document.getElementById(n) || console.warn(r);
    const c = (d = l.value) == null ? void 0 : d.getAttribute("aria-describedby");
    o && c && (document.getElementById(o) || console.warn(i));
  });
}
const ds = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Ge(), { forwardRef: l, currentElement: r } = N();
    return o.titleId || (o.titleId = xe(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = xe(void 0, "radix-vue-dialog-description")), de(() => {
      o.contentElement = r, document.activeElement !== document.body && (o.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && ju({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: r
    }), (i, d) => (f(), y(s(sn), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: d[6] || (d[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: v(() => [
        S(s($a), E({
          id: s(o).contentId,
          ref: s(l),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(o).descriptionId,
          "aria-labelledby": s(o).titleId,
          "data-state": s(go)(s(o).open.value)
        }, i.$attrs, {
          onDismiss: d[0] || (d[0] = (c) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: d[2] || (d[2] = (c) => n("focusOutside", c)),
          onInteractOutside: d[3] || (d[3] = (c) => n("interactOutside", c)),
          onPointerDownOutside: d[4] || (d[4] = (c) => n("pointerDownOutside", c))
        }), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Hu = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Ge(), l = Bt(n), { forwardRef: r, currentElement: i } = N();
    return Ca(i), (d, c) => (f(), y(ds, E({ ...a, ...s(l) }, {
      ref: s(r),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: c[0] || (c[0] = (u) => {
        var p;
        u.defaultPrevented || (u.preventDefault(), (p = s(o).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: c[1] || (c[1] = (u) => {
        const p = u.detail.originalEvent, g = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || g) && u.preventDefault();
      }),
      onFocusOutside: c[2] || (c[2] = (u) => {
        u.preventDefault();
      })
    }), {
      default: v(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Ku = /* @__PURE__ */ b({
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
    const a = e, n = Bt(t);
    N();
    const o = Ge(), l = M(!1), r = M(!1);
    return (i, d) => (f(), y(ds, E({ ...a, ...s(n) }, {
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
      default: v(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), us = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Ge(), l = Bt(n), { forwardRef: r } = N();
    return (i, d) => (f(), y(s(Re), {
      present: i.forceMount || s(o).open.value
    }, {
      default: v(() => [
        s(o).modal.value ? (f(), y(Hu, E({
          key: 0,
          ref: s(r)
        }, { ...a, ...s(l), ...i.$attrs }), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), y(Ku, E({
          key: 1,
          ref: s(r)
        }, { ...a, ...s(l), ...i.$attrs }), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Gu = /* @__PURE__ */ b({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ge();
    return xa(!0), N(), (a, n) => (f(), y(s(F), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": s(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), cs = /* @__PURE__ */ b({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ge(), { forwardRef: a } = N();
    return (n, o) => {
      var l;
      return (l = s(t)) != null && l.modal.value ? (f(), y(s(Re), {
        key: 0,
        present: n.forceMount || s(t).open.value
      }, {
        default: v(() => [
          S(Gu, E(n.$attrs, {
            ref: s(a),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: v(() => [
              w(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : Q("", !0);
    };
  }
}), bo = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const a = Ge();
    return (n, o) => (f(), y(s(F), E(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (l) => s(a).onOpenChange(!1))
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), qu = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, a = Ge();
    return N(), (n, o) => (f(), y(s(F), E(t, {
      id: s(a).titleId
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Yu = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    N();
    const a = Ge();
    return (n, o) => (f(), y(s(F), E(t, {
      id: s(a).descriptionId
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function Zu(e) {
  function t(n) {
    return Array.isArray(e.date.value) ? e.date.value.some((o) => we(o, n)) : e.date.value ? we(e.date.value, n) : !1;
  }
  const a = k(
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
function Xu(e, t) {
  const a = t(e), n = a.compare(e), o = {};
  return n >= 7 && (o.day = 1), n >= ca(e) && (o.month = 1), a.set({ ...o });
}
function Ju(e, t) {
  const a = t(e), n = e.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= ca(e) && (o.month = 13), a.set({ ...o });
}
function Qu(e, t) {
  return t(e);
}
function ec(e, t) {
  return t(e);
}
function ps(e) {
  const t = uu(e.locale.value), a = k(() => {
    const m = {
      calendar: e.placeholder.value.calendar.identifier
    };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (m.era = "short"), m;
  }), n = M(bt({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), o = k(() => n.value.map((m) => m.value));
  function l(m) {
    return !o.value.some((_) => Vo(m, _));
  }
  const r = (m = "month", _) => {
    if (!e.maxValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[n.value.length - 1].value;
    if (_ || e.nextPage.value) {
      const $ = Xu(C, _ || e.nextPage.value);
      return ia($, e.maxValue.value);
    }
    if (m === "year") {
      const $ = C.add({ years: 1 }).set({ day: 1, month: 1 });
      return ia($, e.maxValue.value);
    }
    const P = C.add({ months: 1 }).set({ day: 1 });
    return ia(P, e.maxValue.value);
  }, i = (m = "month", _) => {
    if (!e.minValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[0].value;
    if (_ || e.prevPage.value) {
      const $ = Ju(C, _ || e.prevPage.value);
      return pt($, e.minValue.value);
    }
    if (m === "year") {
      const $ = C.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return pt($, e.minValue.value);
    }
    const P = C.subtract({ months: 1 }).set({ day: 35 });
    return pt(P, e.minValue.value);
  };
  function d(m) {
    var _;
    return !!((_ = e.isDateDisabled) != null && _.call(e, m) || e.disabled.value || e.maxValue.value && ia(m, e.maxValue.value) || e.minValue.value && pt(m, e.minValue.value));
  }
  const c = (m) => {
    var _;
    return !!((_ = e.isDateUnavailable) != null && _.call(e, m));
  }, u = k(() => n.value.length ? n.value[0].rows[0].map((m) => t.dayOfWeek(Ae(m), e.weekdayFormat.value)) : []), p = (m = "month", _) => {
    const C = n.value[0].value;
    if (_ || e.nextPage.value) {
      const D = Qu(C, _ || e.nextPage.value), O = bt({
        dateObj: D,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = O;
      const V = {};
      if (!_) {
        const A = O[0].value.compare(C);
        A >= ca(C) && (V.day = 1), A >= 365 && (V.month = 1);
      }
      e.placeholder.value = O[0].value.set({ ...V });
      return;
    }
    const P = m === "month" ? C.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.add({ years: 1 }), $ = bt({
      dateObj: P,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = $, e.placeholder.value = $[0].value.set({ day: 1 });
  }, g = (m = "month", _) => {
    const C = n.value[0].value;
    if (_ || e.prevPage.value) {
      const D = ec(C, _ || e.prevPage.value), O = bt({
        dateObj: D,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = O;
      const V = {};
      if (!_) {
        const A = C.compare(O[0].value);
        A >= ca(C) && (V.day = 1), A >= 365 && (V.month = 1);
      }
      e.placeholder.value = O[0].value.set({ ...V });
      return;
    }
    const P = m === "month" ? C.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.subtract({ years: 1 }), $ = bt({
      dateObj: P,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = $, e.placeholder.value = $[0].value.set({ day: 1 });
  };
  ee(e.placeholder, (m) => {
    o.value.some((_) => Vo(_, m)) || (n.value = bt({
      dateObj: m,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), ee([e.locale, e.weekStartsOn, e.fixedWeeks, e.numberOfMonths], () => {
    n.value = bt({
      dateObj: e.placeholder.value,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
  });
  const h = k(() => {
    if (!n.value.length)
      return "";
    if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value), n.value.length === 1) {
      const O = n.value[0].value;
      return `${t.fullMonthAndYear(Ae(O), a.value)}`;
    }
    const m = Ae(n.value[0].value), _ = Ae(n.value[n.value.length - 1].value), C = t.fullMonth(m, a.value), P = t.fullMonth(_, a.value), $ = t.fullYear(m, a.value), D = t.fullYear(_, a.value);
    return $ === D ? `${C} - ${P} ${D}` : `${C} ${$} - ${P} ${D}`;
  }), x = k(() => `${e.calendarLabel.value ?? "Event Date"}, ${h.value}`);
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
    prevPage: g,
    headingValue: h,
    fullCalendarLabel: x
  };
}
const tc = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, ac = {
  role: "heading",
  "aria-level": "2"
}, [Zt, nc] = ie("CalendarRoot"), oc = /* @__PURE__ */ b({
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
      multiple: g,
      minValue: h,
      maxValue: x,
      numberOfMonths: m,
      preventDeselect: _,
      isDateDisabled: C,
      isDateUnavailable: P,
      calendarLabel: $,
      defaultValue: D,
      nextPage: O,
      prevPage: V,
      dir: A
    } = me(a), { primitiveElement: W, currentElement: L } = Yt(), B = gt(A), T = ve(a, "modelValue", n, {
      defaultValue: D.value,
      passive: a.modelValue === void 0
    }), I = Xl({
      defaultPlaceholder: a.placeholder,
      defaultValue: T.value
    }), K = ve(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? I.copy(),
      passive: a.placeholder === void 0
    });
    function H(se) {
      K.value = se.copy();
    }
    const {
      fullCalendarLabel: U,
      headingValue: q,
      isDateDisabled: ae,
      isDateUnavailable: ue,
      isNextButtonDisabled: fe,
      isPrevButtonDisabled: $e,
      weekdays: ye,
      isOutsideVisibleView: ta,
      nextPage: yt,
      prevPage: aa,
      formatter: st,
      grid: na
    } = ps({
      locale: o,
      placeholder: K,
      weekStartsOn: c,
      fixedWeeks: p,
      numberOfMonths: m,
      minValue: h,
      maxValue: x,
      disabled: l,
      weekdayFormat: u,
      pagedNavigation: d,
      isDateDisabled: C.value,
      isDateUnavailable: P.value,
      calendarLabel: $,
      nextPage: O,
      prevPage: V
    }), {
      isInvalid: De,
      isDateSelected: ke
    } = Zu({
      date: T,
      isDateDisabled: ae,
      isDateUnavailable: ue
    });
    ee(T, (se) => {
      if (Array.isArray(se) && se.length) {
        const Ce = se[se.length - 1];
        Ce && !Le(K.value, Ce) && H(Ce);
      } else !Array.isArray(se) && se && !Le(K.value, se) && H(se);
    });
    function Fe(se) {
      if (g.value) {
        if (Array.isArray(T.value)) {
          if (!T.value) {
            T.value = [se.copy()];
            return;
          }
          if (T.value.findIndex((Ce) => we(Ce, se)) === -1)
            T.value = [...T.value, se];
          else if (!_.value) {
            const Ce = T.value.filter((Ye) => !we(Ye, se));
            if (!Ce.length) {
              K.value = se.copy(), T.value = void 0;
              return;
            }
            T.value = Ce.map((Ye) => Ye.copy());
          }
        }
      } else {
        if (!T.value) {
          T.value = se.copy();
          return;
        }
        !_.value && Le(T.value, se) ? (K.value = se.copy(), T.value = void 0) : T.value = se.copy();
      }
    }
    return de(() => {
      i.value && Jl(L.value);
    }), nc({
      isDateUnavailable: ue,
      dir: B,
      isDateDisabled: ae,
      locale: o,
      formatter: st,
      modelValue: T,
      placeholder: K,
      disabled: l,
      initialFocus: i,
      pagedNavigation: d,
      weekStartsOn: c,
      weekdayFormat: u,
      fixedWeeks: p,
      multiple: g,
      numberOfMonths: m,
      readonly: r,
      preventDeselect: _,
      fullCalendarLabel: U,
      headingValue: q,
      isInvalid: De,
      isDateSelected: ke,
      isNextButtonDisabled: fe,
      isPrevButtonDisabled: $e,
      isOutsideVisibleView: ta,
      nextPage: yt,
      prevPage: aa,
      parentElement: L,
      onPlaceholderChange: H,
      onDateChange: Fe
    }), (se, Ce) => (f(), y(s(F), {
      ref_key: "primitiveElement",
      ref: W,
      as: se.as,
      "as-child": se.asChild,
      role: "application",
      "aria-label": s(U),
      "data-readonly": s(r) ? "" : void 0,
      "data-disabled": s(l) ? "" : void 0,
      "data-invalid": s(De) ? "" : void 0,
      dir: s(B)
    }, {
      default: v(() => [
        w(se.$slots, "default", {
          date: s(K),
          grid: s(na),
          weekDays: s(ye),
          weekStartsOn: s(c),
          locale: s(o),
          fixedWeeks: s(p)
        }),
        te("div", tc, [
          te("div", ac, Z(s(U)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), lc = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(F), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sc = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = Zt();
    return (n, o) => (f(), y(s(F), E(t, {
      "data-disabled": s(a).disabled.value ? "" : void 0
    }), {
      default: v(() => [
        w(n.$slots, "default", {
          headingValue: s(a).headingValue.value
        }, () => [
          Y(Z(s(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), rc = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = Zt(), n = k(() => a.disabled.value ? !0 : void 0), o = k(() => a.readonly.value ? !0 : void 0);
    return (l, r) => (f(), y(s(F), E(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), ic = /* @__PURE__ */ b({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = Zt();
    return (a, n) => {
      var o, l;
      return f(), y(s(F), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": s(t).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": s(t).isDateDisabled(a.date) || ((l = (o = s(t)).isDateUnavailable) == null ? void 0 : l.call(o, a.date)),
        "data-disabled": s(t).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: v(() => [
          w(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), dc = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(F), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uc = /* @__PURE__ */ b({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = k(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = Zt();
    return (o, l) => (f(), y(s(F), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (r) => s(n).nextPage(t.step, t.nextPage))
    }, {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), cc = /* @__PURE__ */ b({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = k(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = Zt();
    return (o, l) => (f(), y(s(F), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (r) => s(n).prevPage(t.step, t.prevPage))
    }, {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Y("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), pc = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(F), E(t, { "aria-hidden": "true" }), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fc = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(F), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vc = /* @__PURE__ */ b({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(F), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mc = /* @__PURE__ */ b({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = ls(), n = Zt(), { primitiveElement: o, currentElement: l } = Yt(), r = k(() => t.day.day.toLocaleString(n.locale.value)), i = k(() => n.formatter.custom(Ae(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), d = k(() => n.isDateDisabled(t.day)), c = k(
      () => {
        var $;
        return ($ = n.isDateUnavailable) == null ? void 0 : $.call(n, t.day);
      }
    ), u = k(() => Ol(t.day, $t())), p = k(() => !Dl(t.day, t.month)), g = k(
      () => n.isOutsideVisibleView(t.day)
    ), h = k(() => !n.disabled.value && we(t.day, n.placeholder.value)), x = k(() => n.isDateSelected(t.day)), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function _($) {
      var D;
      n.readonly.value || n.isDateDisabled($) || (D = n.isDateUnavailable) != null && D.call(n, $) || n.onDateChange($);
    }
    function C() {
      _(t.day);
    }
    function P($) {
      $.preventDefault(), $.stopPropagation();
      const D = n.parentElement.value, O = D ? Array.from(D.querySelectorAll(m)) : [];
      let V = O.indexOf(l.value);
      const A = 7, W = n.dir.value === "rtl" ? -1 : 1;
      switch ($.code) {
        case a.ARROW_RIGHT:
          V += W;
          break;
        case a.ARROW_LEFT:
          V -= W;
          break;
        case a.ARROW_UP:
          V -= A;
          break;
        case a.ARROW_DOWN:
          V += A;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          _(t.day);
          return;
        default:
          return;
      }
      if (V >= 0 && V < O.length) {
        O[V].focus();
        return;
      }
      if (V < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), oe(() => {
          const L = D ? Array.from(D.querySelectorAll(m)) : [];
          L[L.length - Math.abs(V)].focus();
        });
        return;
      }
      if (V >= O.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), oe(() => {
          (D ? Array.from(D.querySelectorAll(m)) : [])[V - O.length].focus();
        });
      }
    }
    return ($, D) => (f(), y(s(F), E({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": p.value || d.value || c.value ? !0 : void 0,
      "data-selected": x.value ? !0 : void 0,
      "data-value": $.day.toString(),
      "data-disabled": d.value || p.value ? "" : void 0,
      "data-unavailable": c.value ? "" : void 0,
      "data-today": u.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": g.value ? "" : void 0,
      "data-focused": h.value ? "" : void 0,
      tabindex: h.value ? 0 : p.value || d.value ? void 0 : -1,
      onClick: C,
      onKeydown: [
        ze(P, ["up", "down", "left", "right", "space", "enter"]),
        D[0] || (D[0] = ze(_e(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: v(() => [
        w($.$slots, "default", { dayValue: r.value }, () => [
          Y(Z(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function qa(e) {
  return e === "indeterminate";
}
function fs(e) {
  return qa(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const hc = ["value", "checked", "name", "disabled", "required"], [gc, yc] = ie("CheckboxRoot"), bc = /* @__PURE__ */ b({
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
    const a = e, n = t, { disabled: o } = me(a), l = ve(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    }), { forwardRef: r, currentElement: i } = N(), d = on(i), c = k(() => {
      var u;
      return a.id && i.value ? (u = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : u.innerText : void 0;
    });
    return yc({
      disabled: o,
      state: l
    }), (u, p) => (f(), R(J, null, [
      S(s(F), E(u.$attrs, {
        id: u.id,
        ref: s(r),
        role: "checkbox",
        "as-child": a.asChild,
        as: u.as,
        type: u.as === "button" ? "button" : void 0,
        "aria-checked": s(qa)(s(l)) ? "mixed" : s(l),
        "aria-required": !1,
        "aria-label": u.$attrs["aria-label"] || c.value,
        "data-state": s(fs)(s(l)),
        "data-disabled": s(o) ? "" : void 0,
        disabled: s(o),
        onKeydown: ze(_e(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (g) => l.value = s(qa)(s(l)) ? !0 : !s(l))
      }), {
        default: v(() => [
          w(u.$slots, "default", { checked: s(l) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      s(d) ? (f(), R("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "true",
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
      }, null, 8, hc)) : Q("", !0)
    ], 64));
  }
}), wc = /* @__PURE__ */ b({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = N(), a = gc();
    return (n, o) => (f(), y(s(Re), {
      present: n.forceMount || s(qa)(s(a).state.value) || s(a).state.value === !0
    }, {
      default: v(() => [
        S(s(F), E({
          ref: s(t),
          "data-state": s(fs)(s(a).state.value),
          "data-disabled": s(a).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: v(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [vs, _c] = ie("PopperRoot"), ka = /* @__PURE__ */ b({
  __name: "PopperRoot",
  setup(e) {
    const t = M();
    return _c({
      anchor: t,
      onAnchorChange: (a) => t.value = a
    }), (a, n) => w(a.$slots, "default");
  }
}), wo = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = N(), o = vs();
    return ge(() => {
      o.onAnchorChange(t.element ?? n.value);
    }), (l, r) => (f(), y(s(F), {
      ref: s(a),
      as: l.as,
      "as-child": l.asChild
    }, {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function xc(e) {
  return e !== null;
}
function Cc(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var a, n, o;
      const { placement: l, rects: r, middlewareData: i } = t, d = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, c = d ? 0 : e.arrowWidth, u = d ? 0 : e.arrowHeight, [p, g] = Nn(l), h = { start: "0%", center: "50%", end: "100%" }[g], x = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + c / 2, m = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + u / 2;
      let _ = "", C = "";
      return p === "bottom" ? (_ = d ? h : `${x}px`, C = `${-u}px`) : p === "top" ? (_ = d ? h : `${x}px`, C = `${r.floating.height + u}px`) : p === "right" ? (_ = `${-u}px`, C = d ? h : `${m}px`) : p === "left" && (_ = `${r.floating.width + u}px`, C = d ? h : `${m}px`), { data: { x: _, y: C } };
    }
  };
}
function Nn(e) {
  const [t, a = "center"] = e.split("-");
  return [t, a];
}
const ms = {
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
}, [hg, $c] = ie("PopperContent"), ma = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ bl({
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
    ...ms
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = vs(), { forwardRef: l, currentElement: r } = N(), i = M(), d = M(), { width: c, height: u } = hu(d), p = k(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), g = k(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), h = k(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), x = k(() => ({
      padding: g.value,
      boundary: h.value.filter(xc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: h.value.length > 0
    })), m = Nd(() => [
      Pd({
        mainAxis: a.sideOffset + u.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && qo({
        ...x.value
      }),
      a.avoidCollisions && Dd({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? Md() : void 0,
        ...x.value
      }),
      !a.prioritizePosition && a.avoidCollisions && qo({
        ...x.value
      }),
      Od({
        ...x.value,
        apply: ({ elements: B, rects: T, availableWidth: I, availableHeight: K }) => {
          const { width: H, height: U } = T.reference, q = B.floating.style;
          q.setProperty(
            "--radix-popper-available-width",
            `${I}px`
          ), q.setProperty(
            "--radix-popper-available-height",
            `${K}px`
          ), q.setProperty(
            "--radix-popper-anchor-width",
            `${H}px`
          ), q.setProperty(
            "--radix-popper-anchor-height",
            `${U}px`
          );
        }
      }),
      d.value && Vd({ element: d.value, padding: a.arrowPadding }),
      Cc({
        arrowWidth: c.value,
        arrowHeight: u.value
      }),
      a.hideWhenDetached && Sd({ strategy: "referenceHidden", ...x.value })
    ]), { floatingStyles: _, placement: C, isPositioned: P, middlewareData: $ } = Id(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...B) => Bd(...B, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), D = k(
      () => Nn(C.value)[0]
    ), O = k(
      () => Nn(C.value)[1]
    );
    yr(() => {
      P.value && n("placed");
    });
    const V = k(
      () => {
        var B;
        return ((B = $.value.arrow) == null ? void 0 : B.centerOffset) !== 0;
      }
    ), A = M("");
    ge(() => {
      r.value && (A.value = window.getComputedStyle(r.value).zIndex);
    });
    const W = k(() => {
      var B;
      return ((B = $.value.arrow) == null ? void 0 : B.x) ?? 0;
    }), L = k(() => {
      var B;
      return ((B = $.value.arrow) == null ? void 0 : B.y) ?? 0;
    });
    return $c({
      placedSide: D,
      onArrowChange: (B) => d.value = B,
      arrowX: W,
      arrowY: L,
      shouldHideArrow: V
    }), (B, T) => {
      var I, K, H;
      return f(), R("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: ya({
          ...s(_),
          transform: s(P) ? s(_).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: A.value,
          "--radix-popper-transform-origin": [
            (I = s($).transformOrigin) == null ? void 0 : I.x,
            (K = s($).transformOrigin) == null ? void 0 : K.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((H = s($).hide) == null ? void 0 : H.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        S(s(F), E({ ref: s(l) }, B.$attrs, {
          "as-child": a.asChild,
          as: B.as,
          "data-side": D.value,
          "data-align": O.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(P) ? void 0 : "none"
          }
        }), {
          default: v(() => [
            w(B.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), rn = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return N(), (t, a) => (f(), y(s(F), {
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
      default: v(() => [
        w(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), kc = /* @__PURE__ */ b({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, a = k(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([l, r]) => ({ name: `[${o}][${t.name}][${l}]`, value: r })) : { name: `[${t.name}][${o}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, o]) => ({ name: `[${t.name}][${n}]`, value: o })) : []);
    return (n, o) => (f(!0), R(J, null, he(a.value, (l) => (f(), y(rn, {
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
}), Bc = "data-radix-vue-collection-item", [_o, Pc] = ie("CollectionProvider");
function hs(e = Bc) {
  const t = M(/* @__PURE__ */ new Map()), a = M(), n = Pc({
    collectionRef: a,
    itemMap: t,
    attrName: e
  }), { getItems: o } = ys(n), l = k(() => Array.from(n.itemMap.value.values())), r = k(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: l, itemMapSize: r };
}
const gs = b({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const a = _o(), { primitiveElement: n, currentElement: o } = Yt();
    return ee(o, () => {
      a.collectionRef.value = o.value;
    }), () => Ne(mo, { ref: n }, t);
  }
}), xo = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: a }) {
    const n = _o(), { primitiveElement: o, currentElement: l } = Yt();
    return ge((r) => {
      if (l.value) {
        const i = ur(l.value);
        n.itemMap.value.set(i, { ref: l.value, value: e.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => Ne(mo, { ...a, [n.attrName]: "", ref: o }, t);
  }
});
function ys(e) {
  const t = e ?? _o();
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
const [Xt, Dc] = ie("ComboboxRoot"), Oc = /* @__PURE__ */ b({
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
    const a = e, n = t, { multiple: o, disabled: l, dir: r } = me(a), i = gt(r), d = ve(a, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: a.searchTerm === void 0
    }), c = ve(a, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: a.defaultValue ?? o.value ? [] : void 0,
      passive: a.modelValue === void 0,
      deep: !0
    }), u = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), p = ve(a, "selectedValue", n, {
      defaultValue: void 0,
      passive: a.selectedValue === void 0
    });
    async function g(U) {
      var q, ae;
      u.value = U, await oe(), U ? (c.value && (Array.isArray(c.value) && o.value ? p.value = (q = $().find((ue) => {
        var fe, $e;
        return (($e = (fe = ue.ref) == null ? void 0 : fe.dataset) == null ? void 0 : $e.state) === "checked";
      })) == null ? void 0 : q.value : p.value = c.value), (ae = m.value) == null || ae.focus(), K()) : (x.value = !1, a.resetSearchTermOnBlur && W());
    }
    function h(U) {
      if (Array.isArray(c.value) && o.value) {
        const q = c.value.findIndex((ue) => wt(ue, U)), ae = [...c.value];
        q === -1 ? ae.push(U) : ae.splice(q, 1), c.value = ae;
      } else
        c.value = U, g(!1);
    }
    const x = M(!1), m = M(), _ = M(), { forwardRef: C, currentElement: P } = N(), { getItems: $, reactiveItems: D, itemMapSize: O } = hs("data-radix-vue-combobox-item"), V = M([]);
    ee(() => O.value, () => {
      V.value = $().map((U) => U.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const A = k(() => {
      if (x.value) {
        if (a.filterFunction)
          return a.filterFunction(V.value, d.value);
        const U = V.value.filter((q) => typeof q == "string");
        if (U.length)
          return U.filter((q) => {
            var ae;
            return q.toLowerCase().includes((ae = d.value) == null ? void 0 : ae.toLowerCase());
          });
      }
      return V.value;
    });
    function W() {
      !o.value && c.value && !Array.isArray(c.value) ? a.displayValue ? d.value = a.displayValue(c.value) : typeof c.value != "object" ? d.value = c.value.toString() : d.value = "" : d.value = "";
    }
    const L = k(() => A.value.findIndex((U) => wt(U, p.value))), B = k(() => {
      var U;
      return (U = D.value.find((q) => wt(q.value, p.value))) == null ? void 0 : U.ref;
    }), T = k(() => JSON.stringify(c.value));
    ee(T, async () => {
      await oe(), await oe(), W();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), ee(() => [A.value.length, d.value.length], async ([U, q], [ae, ue]) => {
      await oe(), await oe(), U && (ue > q || L.value === -1) && (p.value = A.value[0]);
    });
    const I = on(P);
    function K() {
      B.value instanceof Element && B.value.scrollIntoView({ block: "nearest" });
    }
    function H() {
      B.value instanceof Element && B.value.focus && B.value.focus();
    }
    return Dc({
      searchTerm: d,
      modelValue: c,
      // @ts-expect-error ignoring
      onValueChange: h,
      isUserInputted: x,
      multiple: o,
      disabled: l,
      open: u,
      onOpenChange: g,
      filteredOptions: A,
      contentId: "",
      inputElement: m,
      selectedElement: B,
      onInputElementChange: (U) => m.value = U,
      onInputNavigation: async (U) => {
        const q = L.value;
        q === 0 && U === "up" || q === A.value.length - 1 && U === "down" || (q === -1 && A.value.length || U === "home" ? p.value = A.value[0] : U === "end" ? p.value = A.value[A.value.length - 1] : p.value = A.value[U === "up" ? q - 1 : q + 1], K(), H(), oe(() => {
          var ae;
          return (ae = m.value) == null ? void 0 : ae.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async (U) => {
        var q;
        A.value.length && p.value && B.value instanceof Element && (U.preventDefault(), U.stopPropagation(), (q = B.value) == null || q.click());
      },
      selectedValue: p,
      onSelectedValueChange: (U) => p.value = U,
      parentElement: P,
      contentElement: _,
      onContentElementChange: (U) => _.value = U
    }), (U, q) => (f(), y(s(ka), null, {
      default: v(() => [
        S(s(F), E({
          ref: s(C),
          style: {
            pointerEvents: s(u) ? "auto" : void 0
          },
          as: U.as,
          "as-child": U.asChild,
          dir: s(i)
        }, U.$attrs), {
          default: v(() => [
            w(U.$slots, "default", {
              open: s(u),
              modelValue: s(c)
            }),
            s(I) && a.name ? (f(), y(s(kc), {
              key: 0,
              name: a.name,
              value: s(c)
            }, null, 8, ["name", "value"])) : Q("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Sc = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, a = Xt(), { forwardRef: n, currentElement: o } = N();
    de(() => {
      const u = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      u && (a.onInputElementChange(u), setTimeout(() => {
        t.autoFocus && (u == null || u.focus());
      }, 1));
    });
    const l = k(() => t.disabled || a.disabled.value || !1), r = M();
    cr(() => {
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
    return (u, p) => (f(), y(s(F), {
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
        ze(_e(i, ["prevent"]), ["down", "up"]),
        ze(s(a).onInputEnter, ["enter"]),
        ze(_e(d, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: v(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), [bs, Ec] = ie("ComboboxGroup"), Mc = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: a, currentElement: n } = N(), o = xe(void 0, "radix-vue-combobox-group"), l = Xt(), r = M(!1);
    function i() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!d.length;
    }
    return eu(n, () => {
      oe(() => {
        i();
      });
    }, { childList: !0 }), ee(() => l.searchTerm.value, () => {
      oe(() => {
        i();
      });
    }, { immediate: !0 }), Ec({
      id: o
    }), (d, c) => jt((f(), y(s(F), E(t, {
      ref_key: "currentRef",
      ref: a,
      role: "group",
      "aria-labelledby": s(o)
    }), {
      default: v(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [Gn, r.value]
    ]);
  }
}), Tc = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    N();
    const a = bs({ id: "" });
    return (n, o) => (f(), y(s(F), E(t, {
      id: s(a).id
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [gg, Ac] = ie("ComboboxContent"), Vc = /* @__PURE__ */ b({
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
    const a = e, n = t, { position: o } = me(a), l = Xt();
    xa(a.bodyLock);
    const { forwardRef: r, currentElement: i } = N();
    Ca(l.parentElement);
    const d = k(() => a.position === "popper" ? a : {}), c = ne(d.value);
    function u(g) {
      l.onSelectedValueChange("");
    }
    de(() => {
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
    return Ac({ position: o }), (g, h) => (f(), y(s(gs), null, {
      default: v(() => [
        g.dismissable ? (f(), y(s($a), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": g.disableOutsidePointerEvents,
          onDismiss: h[0] || (h[0] = (x) => s(l).onOpenChange(!1)),
          onFocusOutside: h[1] || (h[1] = (x) => {
            var m;
            (m = s(l).parentElement.value) != null && m.contains(x.target) && x.preventDefault(), n("focusOutside", x);
          }),
          onInteractOutside: h[2] || (h[2] = (x) => n("interactOutside", x)),
          onEscapeKeyDown: h[3] || (h[3] = (x) => n("escapeKeyDown", x)),
          onPointerDownOutside: h[4] || (h[4] = (x) => {
            var m;
            (m = s(l).parentElement.value) != null && m.contains(x.target) && x.preventDefault(), n("pointerDownOutside", x);
          })
        }, {
          default: v(() => [
            (f(), y(We(s(o) === "popper" ? s(ma) : s(F)), E({ ...g.$attrs, ...s(c) }, {
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
              default: v(() => [
                w(g.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (f(), y(We(s(o) === "popper" ? s(ma) : s(F)), E({ key: 1 }, { ...g.$attrs, ...d.value }, {
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
          default: v(() => [
            w(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Ic = /* @__PURE__ */ b({
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
    const a = le(e, t), { forwardRef: n } = N(), o = Xt();
    return o.contentId || (o.contentId = xe(void 0, "radix-vue-combobox-content")), (l, r) => (f(), y(s(Re), {
      present: l.forceMount || s(o).open.value
    }, {
      default: v(() => [
        S(Vc, E({ ...s(a), ...l.$attrs }, { ref: s(n) }), {
          default: v(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Rc = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    N();
    const a = Xt(), n = k(() => a.filteredOptions.value.length === 0);
    return (o, l) => n.value ? (f(), y(s(F), j(E({ key: 0 }, t)), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Y("No options")
        ])
      ]),
      _: 3
    }, 16)) : Q("", !0);
  }
});
function Fc(e) {
  const t = nn({
    nonce: M()
  });
  return k(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.nonce) == null ? void 0 : a.value);
  });
}
const [yg, Lc] = ie("ComboboxItem"), Nc = "combobox.select", zc = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { disabled: o } = me(a), l = Xt();
    bs({ id: "", options: M([]) });
    const { forwardRef: r } = N(), i = k(
      () => {
        var m, _;
        return l.multiple.value && Array.isArray(l.modelValue.value) ? (m = l.modelValue.value) == null ? void 0 : m.some((C) => wt(C, a.value)) : wt((_ = l.modelValue) == null ? void 0 : _.value, a.value);
      }
    ), d = k(() => wt(l.selectedValue.value, a.value)), c = xe(void 0, "radix-vue-combobox-item"), u = xe(void 0, "radix-vue-combobox-option"), p = k(() => l.isUserInputted.value ? l.searchTerm.value === "" || !!l.filteredOptions.value.find((m) => wt(m, a.value)) : !0);
    async function g(m) {
      n("select", m), !(m != null && m.defaultPrevented) && !o.value && m && l.onValueChange(a.value);
    }
    function h(m) {
      if (!m)
        return;
      const _ = { originalEvent: m, value: a.value };
      co(Nc, g, _);
    }
    async function x(m) {
      await oe(), !m.defaultPrevented && l.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Lc({
      isSelected: i
    }), (m, _) => (f(), y(s(xo), { value: m.value }, {
      default: v(() => [
        jt(S(s(F), {
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
          as: m.as,
          "as-child": m.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: h,
          onPointermove: x
        }, {
          default: v(() => [
            w(m.$slots, "default", {}, () => [
              Y(Z(m.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Gn, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Wc = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (f(), y(s(F), E(t, { "aria-hidden": "true" }), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ws = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(wo), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Uc() {
  const e = M(!1);
  return de(() => {
    Ka("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Ka(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const jc = Ql(Uc), [Pt, _s] = ie(["MenuRoot", "MenuSub"], "MenuContext"), [Ba, Hc] = ie("MenuRoot"), Kc = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o, dir: l } = me(a), r = gt(l), i = ve(a, "open", n), d = M(), c = jc();
    return _s({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      content: d,
      onContentChange: (u) => {
        d.value = u;
      }
    }), Hc({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: c,
      dir: r,
      modal: o
    }), (u, p) => (f(), y(s(ka), null, {
      default: v(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Gc = "rovingFocusGroup.onEntryFocus", qc = { bubbles: !1, cancelable: !0 }, Yc = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Zc(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Xc(e, t, a) {
  const n = Zc(e.key, a);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Yc[n];
}
function xs(e, t = !1) {
  const a = document.activeElement;
  for (const n of e)
    if (n === a || (n.focus({ preventScroll: t }), document.activeElement !== a))
      return;
}
function Jc(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
const [Qc, ep] = ie("RovingFocusGroup"), Cs = /* @__PURE__ */ b({
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
    const n = e, o = a, { loop: l, orientation: r, dir: i } = me(n), d = gt(i), c = ve(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), u = M(!1), p = M(!1), g = M(0), { getItems: h } = hs();
    function x(_) {
      const C = !p.value;
      if (_.currentTarget && _.target === _.currentTarget && C && !u.value) {
        const P = new CustomEvent(Gc, qc);
        if (_.currentTarget.dispatchEvent(P), o("entryFocus", P), !P.defaultPrevented) {
          const $ = h().map((A) => A.ref).filter((A) => A.dataset.disabled !== ""), D = $.find((A) => A.getAttribute("data-active") === "true"), O = $.find(
            (A) => A.id === c.value
          ), V = [D, O, ...$].filter(
            Boolean
          );
          xs(V, n.preventScrollOnEntryFocus);
        }
      }
      p.value = !1;
    }
    function m() {
      setTimeout(() => {
        p.value = !1;
      }, 1);
    }
    return t({
      getItems: h
    }), ep({
      loop: l,
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
    }), (_, C) => (f(), y(s(gs), null, {
      default: v(() => [
        S(s(F), {
          tabindex: u.value || g.value === 0 ? -1 : 0,
          "data-orientation": s(r),
          as: _.as,
          "as-child": _.asChild,
          dir: s(d),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (P) => p.value = !0),
          onMouseup: m,
          onFocus: x,
          onBlur: C[1] || (C[1] = (P) => u.value = !1)
        }, {
          default: v(() => [
            w(_.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), tp = /* @__PURE__ */ b({
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
    const t = e, a = Qc(), n = k(() => t.tabStopId || xe()), o = k(
      () => a.currentTabStopId.value === n.value
    ), { getItems: l } = ys();
    de(() => {
      t.focusable && a.onFocusableItemAdd();
    }), Ct(() => {
      t.focusable && a.onFocusableItemRemove();
    });
    function r(i) {
      if (i.key === "Tab" && i.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const d = Xc(
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
          c = a.loop.value ? Jc(c, u + 1) : c.slice(u + 1);
        }
        oe(() => xs(c));
      }
    }
    return (i, d) => (f(), y(s(xo), null, {
      default: v(() => [
        S(s(F), {
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
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [Co, ap] = ie("MenuContent"), $o = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ bl({
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
    ...ms
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Pt(), l = Ba(), { trapFocus: r, disableOutsidePointerEvents: i, loop: d } = me(a);
    fo(), xa(i.value);
    const c = M(""), u = M(0), p = M(0), g = M(null), h = M("right"), x = M(0), m = M(null), { createCollection: _ } = qt(), { forwardRef: C, currentElement: P } = N(), $ = _(P);
    ee(P, (B) => {
      o.onContentChange(B);
    });
    const { handleTypeaheadSearch: D } = vo($);
    Ct(() => {
      window.clearTimeout(u.value);
    });
    function O(B) {
      var T, I;
      return h.value === ((T = g.value) == null ? void 0 : T.side) && zu(B, (I = g.value) == null ? void 0 : I.area);
    }
    async function V(B) {
      var T;
      n("openAutoFocus", B), !B.defaultPrevented && (B.preventDefault(), (T = P.value) == null || T.focus({
        preventScroll: !0
      }));
    }
    function A(B) {
      if (B.defaultPrevented)
        return;
      const T = B.target.closest("[data-radix-menu-content]") === B.currentTarget, I = B.ctrlKey || B.altKey || B.metaKey, K = B.key.length === 1, H = nu(
        B,
        document.activeElement,
        P.value,
        {
          loop: d.value,
          arrowKeyOptions: "vertical",
          dir: l == null ? void 0 : l.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (H)
        return H == null ? void 0 : H.focus();
      if (B.code === "Space" || (T && (B.key === "Tab" && B.preventDefault(), !I && K && D(B.key)), B.target !== P.value) || !Ru.includes(B.key))
        return;
      B.preventDefault();
      const U = $.value;
      is.includes(B.key) && U.reverse(), Ln(U);
    }
    function W(B) {
      var T, I;
      (I = (T = B == null ? void 0 : B.currentTarget) == null ? void 0 : T.contains) != null && I.call(T, B.target) || (window.clearTimeout(u.value), c.value = "");
    }
    function L(B) {
      var T;
      if (!va(B))
        return;
      const I = B.target, K = x.value !== B.clientX;
      if ((T = B == null ? void 0 : B.currentTarget) != null && T.contains(I) && K) {
        const H = B.clientX > x.value ? "right" : "left";
        h.value = H, x.value = B.clientX;
      }
    }
    return ap({
      onItemEnter: (B) => !!O(B),
      onItemLeave: (B) => {
        var T;
        O(B) || ((T = P.value) == null || T.focus(), m.value = null);
      },
      onTriggerLeave: (B) => !!O(B),
      searchRef: c,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (B) => {
        g.value = B;
      }
    }), (B, T) => (f(), y(s(sn), {
      "as-child": "",
      trapped: s(r),
      onMountAutoFocus: V,
      onUnmountAutoFocus: T[7] || (T[7] = (I) => n("closeAutoFocus", I))
    }, {
      default: v(() => [
        S(s($a), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: T[2] || (T[2] = (I) => n("escapeKeyDown", I)),
          onPointerDownOutside: T[3] || (T[3] = (I) => n("pointerDownOutside", I)),
          onFocusOutside: T[4] || (T[4] = (I) => n("focusOutside", I)),
          onInteractOutside: T[5] || (T[5] = (I) => n("interactOutside", I)),
          onDismiss: T[6] || (T[6] = (I) => n("dismiss"))
        }, {
          default: v(() => [
            S(s(Cs), {
              "current-tab-stop-id": m.value,
              "onUpdate:currentTabStopId": T[0] || (T[0] = (I) => m.value = I),
              "as-child": "",
              orientation: "vertical",
              dir: s(l).dir.value,
              loop: s(d),
              onEntryFocus: T[1] || (T[1] = (I) => {
                n("entryFocus", I), s(l).isUsingKeyboardRef.value || I.preventDefault();
              })
            }, {
              default: v(() => [
                S(s(ma), {
                  ref: s(C),
                  role: "menu",
                  as: B.as,
                  "as-child": B.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(go)(s(o).open.value),
                  dir: s(l).dir.value,
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
                  onKeydown: A,
                  onBlur: W,
                  onPointermove: L
                }, {
                  default: v(() => [
                    w(B.$slots, "default")
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
}), $s = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Co(), { forwardRef: n } = N(), o = M(!1);
    async function l(i) {
      if (!i.defaultPrevented && va(i)) {
        if (t.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function r(i) {
      await oe(), !i.defaultPrevented && va(i) && a.onItemLeave(i);
    }
    return (i, d) => (f(), y(s(xo), null, {
      default: v(() => [
        S(s(F), E({
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
            await oe(), !(c.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: d[1] || (d[1] = async (c) => {
            await oe(), !c.defaultPrevented && (o.value = !1);
          })
        }), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), ko = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: l } = N(), r = Ba(), i = Co(), d = M(!1);
    async function c() {
      const u = l.value;
      if (!a.disabled && u) {
        const p = new CustomEvent(Vu, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await oe(), p.defaultPrevented ? d.value = !1 : r.onClose();
      }
    }
    return (u, p) => (f(), y($s, E(a, {
      ref: s(o),
      onClick: c,
      onPointerdown: p[0] || (p[0] = () => {
        d.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (g) => {
        var h;
        await oe(), !g.defaultPrevented && (d.value || (h = g.currentTarget) == null || h.click());
      }),
      onKeydown: p[2] || (p[2] = async (g) => {
        const h = s(i).searchRef.value !== "";
        u.disabled || h && g.key === " " || s(Fn).includes(g.key) && (g.currentTarget.click(), g.preventDefault());
      })
    }), {
      default: v(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [np, ks] = ie(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), op = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = np({
      checked: M(!1)
    });
    return (a, n) => (f(), y(s(Re), {
      present: a.forceMount || s(Ga)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: v(() => [
        S(s(F), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": s(yo)(s(t).checked.value)
        }, {
          default: v(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), lp = /* @__PURE__ */ b({
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
    const a = e, n = t, o = ve(a, "checked", n);
    return ks({ checked: o }), (l, r) => (f(), y(ko, E({ role: "menuitemcheckbox" }, a, {
      "aria-checked": s(Ga)(s(o)) ? "mixed" : s(o),
      "data-state": s(yo)(s(o)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), s(Ga)(s(o)) ? o.value = !0 : o.value = !s(o);
      })
    }), {
      default: v(() => [
        w(l.$slots, "default", { checked: s(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), sp = /* @__PURE__ */ b({
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
    const a = e, n = t, o = le(a, n), l = Pt(), { forwardRef: r, currentElement: i } = N();
    return Ca(i), (d, c) => (f(), y($o, E(s(o), {
      ref: s(r),
      "trap-focus": s(l).open.value,
      "disable-outside-pointer-events": s(l).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (u) => s(l).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = _e((u) => n("focusOutside", u), ["prevent"]))
    }), {
      default: v(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), rp = /* @__PURE__ */ b({
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
    const a = le(e, t), n = Pt();
    return (o, l) => (f(), y($o, E(s(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: l[0] || (l[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ip = /* @__PURE__ */ b({
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
    const a = le(e, t), n = Pt(), o = Ba();
    return (l, r) => (f(), y(s(Re), {
      present: l.forceMount || s(n).open.value
    }, {
      default: v(() => [
        s(o).modal.value ? (f(), y(sp, j(E({ key: 0 }, { ...l.$attrs, ...s(a) })), {
          default: v(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), y(rp, j(E({ key: 1 }, { ...l.$attrs, ...s(a) })), {
          default: v(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Bs = /* @__PURE__ */ b({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(F), E({ role: "group" }, t), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dp = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(F), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), up = /* @__PURE__ */ b({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(ln), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [cp, pp] = ie("MenuRadioGroup"), fp = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = ve(a, "modelValue", t);
    return pp({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, l) => (f(), y(Bs, j(G(a)), {
      default: v(() => [
        w(o.$slots, "default", { modelValue: s(n) })
      ]),
      _: 3
    }, 16));
  }
}), vp = /* @__PURE__ */ b({
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
    const a = e, n = t, { value: o } = me(a), l = cp(), r = k(
      () => l.modelValue.value === (o == null ? void 0 : o.value)
    );
    return ks({ checked: r }), (i, d) => (f(), y(ko, E({ role: "menuitemradio" }, a, {
      "aria-checked": r.value,
      "data-state": s(yo)(r.value),
      onSelect: d[0] || (d[0] = async (c) => {
        n("select", c), s(l).onValueChange(s(o));
      })
    }), {
      default: v(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), mp = /* @__PURE__ */ b({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(F), E(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ps, hp] = ie("MenuSub"), gp = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = ve(a, "open", t, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = Pt(), l = M(), r = M();
    return ge((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), _s({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: r,
      onContentChange: (i) => {
        r.value = i;
      }
    }), hp({
      triggerId: "",
      contentId: "",
      trigger: l,
      onTriggerChange: (i) => {
        l.value = i;
      }
    }), (i, d) => (f(), y(s(ka), null, {
      default: v(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), yp = /* @__PURE__ */ b({
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
    const a = le(e, t), n = Pt(), o = Ba(), l = Ps(), { forwardRef: r, currentElement: i } = N();
    return l.contentId || (l.contentId = xe(void 0, "radix-vue-menu-sub-content")), (d, c) => (f(), y(s(Re), {
      present: d.forceMount || s(n).open.value
    }, {
      default: v(() => [
        S($o, E(s(a), {
          id: s(l).contentId,
          ref: s(r),
          "aria-labelledby": s(l).triggerId,
          align: "start",
          side: s(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = _e((u) => {
            var p;
            s(o).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = _e(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (u) => {
            u.defaultPrevented || u.target !== s(l).trigger.value && s(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (u) => {
            s(o).onClose(), u.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (u) => {
            var p, g;
            const h = (p = u.currentTarget) == null ? void 0 : p.contains(u.target), x = s(Lu)[s(o).dir.value].includes(u.key);
            h && x && (s(n).onOpenChange(!1), (g = s(l).trigger.value) == null || g.focus(), u.preventDefault());
          })
        }), {
          default: v(() => [
            w(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), bp = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Pt(), n = Ba(), o = Ps(), l = Co(), r = M(null);
    o.triggerId || (o.triggerId = xe(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    Ct(() => {
      i();
    });
    function d(p) {
      !va(p) || l.onItemEnter(p) || !t.disabled && !a.open.value && !r.value && (l.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function c(p) {
      var g, h;
      if (!va(p))
        return;
      i();
      const x = (g = a.content.value) == null ? void 0 : g.getBoundingClientRect();
      if (x != null && x.width) {
        const m = (h = a.content.value) == null ? void 0 : h.dataset.side, _ = m === "right", C = _ ? -5 : 5, P = x[_ ? "left" : "right"], $ = x[_ ? "right" : "left"];
        l.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: P, y: x.top },
            { x: $, y: x.top },
            { x: $, y: x.bottom },
            { x: P, y: x.bottom }
          ],
          side: m
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
      var g;
      const h = l.searchRef.value !== "";
      t.disabled || h && p.key === " " || Fu[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await oe(), (g = a.content.value) == null || g.focus(), p.preventDefault());
    }
    return (p, g) => (f(), y(ws, { "as-child": "" }, {
      default: v(() => [
        S($s, E(t, {
          id: s(o).triggerId,
          ref: (h) => {
            var x;
            (x = s(o)) == null || x.onTriggerChange(h == null ? void 0 : h.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(o).contentId,
          "data-state": s(go)(s(a).open.value),
          onClick: g[0] || (g[0] = async (h) => {
            t.disabled || h.defaultPrevented || (h.currentTarget.focus(), s(a).open.value || s(a).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: c,
          onKeydown: u
        }), {
          default: v(() => [
            w(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [Ds, wp] = ie("DropdownMenuRoot"), _p = /* @__PURE__ */ b({
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
    const o = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), l = M(), { modal: r, dir: i } = me(a), d = gt(i);
    return wp({
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
    }), (c, u) => (f(), y(s(Kc), {
      open: s(o),
      "onUpdate:open": u[0] || (u[0] = (p) => ga(o) ? o.value = p : null),
      dir: s(d),
      modal: s(r)
    }, {
      default: v(() => [
        w(c.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), xp = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ds(), { forwardRef: n, currentElement: o } = N();
    return de(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = xe(void 0, "radix-vue-dropdown-menu-trigger")), (l, r) => (f(), y(s(ws), { "as-child": "" }, {
      default: v(() => [
        S(s(F), {
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
            !l.disabled && i.button === 0 && i.ctrlKey === !1 && ((d = s(a)) == null || d.onOpenToggle(), await oe(), s(a).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = ze(
            (i) => {
              l.disabled || (["Enter", " "].includes(i.key) && s(a).onOpenToggle(), i.key === "ArrowDown" && s(a).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: v(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Cp = /* @__PURE__ */ b({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(up), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $p = /* @__PURE__ */ b({
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
    const a = le(e, t);
    N();
    const n = Ds(), o = M(!1);
    function l(r) {
      r.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, r.preventDefault());
    }
    return n.contentId || (n.contentId = xe(void 0, "radix-vue-dropdown-menu-content")), (r, i) => {
      var d;
      return f(), y(s(ip), E(s(a), {
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
          const p = c.detail.originalEvent, g = p.button === 0 && p.ctrlKey === !0, h = p.button === 2 || g;
          (!s(n).modal.value || h) && (o.value = !0), (u = s(n).triggerElement.value) != null && u.contains(c.target) && c.preventDefault();
        })
      }), {
        default: v(() => [
          w(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Os = /* @__PURE__ */ b({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = Bt(t);
    return N(), (o, l) => (f(), y(s(ko), j(G({ ...a, ...s(n) })), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kp = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (f(), y(s(Bs), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bp = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (f(), y(s(mp), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pp = /* @__PURE__ */ b({
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
    const a = e, n = Bt(t);
    return N(), (o, l) => (f(), y(s(lp), j(G({ ...a, ...s(n) })), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ss = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (f(), y(s(op), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dp = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (f(), y(s(dp), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Op = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = Bt(t);
    return N(), (o, l) => (f(), y(s(fp), j(G({ ...a, ...s(n) })), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sp = /* @__PURE__ */ b({
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
    const a = le(e, t);
    return N(), (n, o) => (f(), y(s(vp), j(G(s(a))), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ep = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = ve(a, "open", t, {
      passive: a.open === void 0,
      defaultValue: a.defaultOpen ?? !1
    });
    return N(), (o, l) => (f(), y(s(gp), {
      open: s(n),
      "onUpdate:open": l[0] || (l[0] = (r) => ga(n) ? n.value = r : null)
    }, {
      default: v(() => [
        w(o.$slots, "default", { open: s(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Mp = /* @__PURE__ */ b({
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
    const a = le(e, t);
    return N(), (n, o) => (f(), y(s(yp), E(s(a), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tp = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (f(), y(s(bp), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ap = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (f(), y(s(F), E(t, {
      onMousedown: n[0] || (n[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Jt, Vp] = ie("PaginationRoot"), Ip = /* @__PURE__ */ b({
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
    N();
    const i = ve(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), d = k(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return Vp({
      page: i,
      onPageChange(c) {
        i.value = c;
      },
      pageCount: d,
      siblingCount: o,
      disabled: l,
      showEdges: r
    }), (c, u) => (f(), y(s(F), {
      as: c.as,
      "as-child": c.asChild
    }, {
      default: v(() => [
        w(c.$slots, "default", {
          page: s(i),
          pageCount: d.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Rp = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (f(), y(s(F), E(t, { "data-type": "ellipsis" }), {
      default: v(() => [
        w(a.$slots, "default", {}, () => [
          Y("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), Fp = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Jt();
    return N(), (n, o) => (f(), y(s(F), E(t, {
      "aria-label": "First Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: s(a).page.value === 1 || s(a).disabled.value,
      onClick: o[0] || (o[0] = (l) => s(a).onPageChange(1))
    }), {
      default: v(() => [
        w(n.$slots, "default", {}, () => [
          Y("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Lp = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Jt();
    return N(), (n, o) => (f(), y(s(F), E(t, {
      "aria-label": "Last Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: s(a).page.value === s(a).pageCount.value || s(a).disabled.value,
      onClick: o[0] || (o[0] = (l) => s(a).onPageChange(s(a).pageCount.value))
    }), {
      default: v(() => [
        w(n.$slots, "default", {}, () => [
          Y("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function ut(e, t) {
  const a = t - e + 1;
  return Array.from({ length: a }, (n, o) => o + e);
}
function Np(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const Aa = "ellipsis";
function zp(e, t, a, n) {
  const o = t, l = Math.max(e - a, 1), r = Math.min(e + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, t) - 2, d = l > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(l - 1) > 2, c = r < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - r) > 2;
    if (!d && c)
      return [...ut(1, i), Aa, o];
    if (d && !c) {
      const u = ut(o - i + 1, o);
      return [1, Aa, ...u];
    }
    if (d && c) {
      const u = ut(l, r);
      return [1, Aa, ...u, Aa, o];
    }
    return ut(1, o);
  } else {
    const i = a * 2 + 1;
    return t < i ? ut(1, o) : e <= a + 1 ? ut(1, i) : t - e <= a ? ut(t - i + 1, o) : ut(l, r);
  }
}
const Wp = /* @__PURE__ */ b({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    N();
    const a = Jt(), n = k(() => Np(
      zp(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, l) => (f(), y(s(F), j(G(t)), {
      default: v(() => [
        w(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), bg = /* @__PURE__ */ b({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const a = Jt(), n = k(() => a.page.value === t.value);
    return (o, l) => (f(), y(s(F), E(t, {
      "data-type": "page",
      "aria-label": `Page ${o.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: s(a).disabled.value,
      type: o.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (r) => s(a).onPageChange(o.value))
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Y(Z(o.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), Up = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const a = Jt();
    return (n, o) => (f(), y(s(F), E(t, {
      "aria-label": "Next Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: s(a).page.value === s(a).pageCount.value || s(a).disabled.value,
      onClick: o[0] || (o[0] = (l) => s(a).onPageChange(s(a).page.value + 1))
    }), {
      default: v(() => [
        w(n.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), jp = /* @__PURE__ */ b({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const a = Jt();
    return (n, o) => {
      var l;
      return f(), y(s(F), E(t, {
        "aria-label": "Previous Page",
        type: n.as === "button" ? "button" : void 0,
        disabled: s(a).page.value === 1 || ((l = s(a).disabled) == null ? void 0 : l.value),
        onClick: o[0] || (o[0] = (r) => s(a).onPageChange(s(a).page.value - 1))
      }), {
        default: v(() => [
          w(n.$slots, "default", {}, () => [
            Y("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
}), [Pa, Hp] = ie("PopoverRoot"), Kp = /* @__PURE__ */ b({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o } = me(a), l = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = M(), i = M(!1);
    return Hp({
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
    }), (d, c) => (f(), y(s(ka), null, {
      default: v(() => [
        w(d.$slots, "default", { open: s(l) })
      ]),
      _: 3
    }));
  }
}), Gp = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Pa(), { forwardRef: n, currentElement: o } = N();
    return de(() => {
      a.triggerElement.value = o.value;
    }), (l, r) => (f(), y(We(s(a).hasCustomAnchor.value ? s(F) : s(wo)), { "as-child": "" }, {
      default: v(() => [
        S(s(F), {
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
          default: v(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), qp = /* @__PURE__ */ b({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(ln), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Es = /* @__PURE__ */ b({
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
    const a = e, n = t, o = ne(a), { forwardRef: l } = N(), r = Pa();
    return fo(), (i, d) => (f(), y(s(sn), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: d[6] || (d[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: v(() => [
        S(s($a), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (c) => n("pointerDownOutside", c)),
          onInteractOutside: d[1] || (d[1] = (c) => n("interactOutside", c)),
          onEscapeKeyDown: d[2] || (d[2] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: d[3] || (d[3] = (c) => n("focusOutside", c)),
          onDismiss: d[4] || (d[4] = (c) => s(r).onOpenChange(!1))
        }, {
          default: v(() => [
            S(s(ma), E(s(o), {
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
              default: v(() => [
                w(i.$slots, "default")
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
}), Yp = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Pa(), l = M(!1);
    xa(!0);
    const r = le(a, n), { forwardRef: i, currentElement: d } = N();
    return Ca(d), (c, u) => (f(), y(Es, E(s(r), {
      ref: s(i),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: u[0] || (u[0] = _e(
        (p) => {
          var g;
          n("closeAutoFocus", p), l.value || (g = s(o).triggerElement.value) == null || g.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: u[1] || (u[1] = (p) => {
        n("pointerDownOutside", p);
        const g = p.detail.originalEvent, h = g.button === 0 && g.ctrlKey === !0, x = g.button === 2 || h;
        l.value = x;
      }),
      onFocusOutside: u[2] || (u[2] = _e(() => {
      }, ["prevent"]))
    }), {
      default: v(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Zp = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Pa(), l = M(!1), r = M(!1), i = le(a, n);
    return (d, c) => (f(), y(Es, E(s(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (u) => {
        var p;
        n("closeAutoFocus", u), u.defaultPrevented || (l.value || (p = s(o).triggerElement.value) == null || p.focus(), u.preventDefault()), l.value = !1, r.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = async (u) => {
        var p;
        n("interactOutside", u), u.defaultPrevented || (l.value = !0, u.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const g = u.target;
        (p = s(o).triggerElement.value) != null && p.contains(g) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && r.value && u.preventDefault();
      })
    }), {
      default: v(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xp = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Pa(), l = le(a, n), { forwardRef: r } = N();
    return o.contentId || (o.contentId = xe(void 0, "radix-vue-popover-content")), (i, d) => (f(), y(s(Re), {
      present: i.forceMount || s(o).open.value
    }, {
      default: v(() => [
        s(o).modal.value ? (f(), y(Yp, E({ key: 0 }, s(l), { ref: s(r) }), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), y(Zp, E({ key: 1 }, s(l), { ref: s(r) }), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function Jp(e) {
  const t = k(() => e.start.value ? !!e.isDateDisabled(e.start.value) : !1), a = k(() => e.end.value ? !!e.isDateDisabled(e.end.value) : !1), n = k(
    () => t.value || a.value ? !1 : !!(e.start.value && e.end.value && pt(e.end.value, e.start.value))
  ), o = (d) => e.start.value ? we(e.start.value, d) : !1, l = (d) => e.end.value ? we(e.end.value, d) : !1, r = (d) => e.start.value && we(e.start.value, d) || e.end.value && we(e.end.value, d) ? !0 : e.end.value && e.start.value ? Wi(d, e.start.value, e.end.value) : !1, i = k(() => {
    if (e.start.value && e.end.value || !e.start.value || !e.focusedValue.value)
      return null;
    const d = pt(e.start.value, e.focusedValue.value), c = d ? e.start.value : e.focusedValue.value, u = d ? e.focusedValue.value : e.start.value;
    return we(c.add({ days: 1 }), u) ? {
      start: c,
      end: u
    } : Hi(c, u, e.isDateUnavailable, e.isDateDisabled) ? {
      start: c,
      end: u
    } : null;
  });
  return {
    isInvalid: n,
    isSelected: r,
    highlightedRange: i,
    isSelectionStart: o,
    isSelectionEnd: l,
    isHighlightedStart: (d) => !i.value || !i.value.start ? !1 : we(i.value.start, d),
    isHighlightedEnd: (d) => !i.value || !i.value.end ? !1 : we(i.value.end, d)
  };
}
const Qp = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, ef = {
  role: "heading",
  "aria-level": "2"
}, [Qt, tf] = ie("RangeCalendarRoot"), af = /* @__PURE__ */ b({
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
      readonly: l,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: u,
      numberOfMonths: p,
      preventDeselect: g,
      isDateUnavailable: h,
      isDateDisabled: x,
      calendarLabel: m,
      maxValue: _,
      minValue: C,
      locale: P,
      dir: $,
      nextPage: D,
      prevPage: O
    } = me(a), { primitiveElement: V, currentElement: A } = Yt(), W = gt($), L = M(), B = M(), T = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), I = Xl({
      defaultPlaceholder: a.placeholder,
      defaultValue: T.value.start
    }), K = M(T.value.start), H = M(T.value.end), U = ve(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? I.copy(),
      passive: a.placeholder === void 0
    });
    function q(ce) {
      U.value = ce.copy();
    }
    const {
      fullCalendarLabel: ae,
      headingValue: ue,
      isDateDisabled: fe,
      isDateUnavailable: $e,
      isNextButtonDisabled: ye,
      isPrevButtonDisabled: ta,
      grid: yt,
      weekdays: aa,
      isOutsideVisibleView: st,
      nextPage: na,
      prevPage: De,
      formatter: ke
    } = ps({
      locale: P,
      placeholder: U,
      weekStartsOn: d,
      fixedWeeks: u,
      numberOfMonths: p,
      minValue: C,
      maxValue: _,
      disabled: o,
      weekdayFormat: c,
      pagedNavigation: i,
      isDateDisabled: x.value,
      isDateUnavailable: h.value,
      calendarLabel: m,
      nextPage: D,
      prevPage: O
    }), {
      isInvalid: Fe,
      isSelected: se,
      highlightedRange: Ce,
      isSelectionStart: Ye,
      isSelectionEnd: oa,
      isHighlightedStart: sr,
      isHighlightedEnd: rr
    } = Jp({
      start: K,
      end: H,
      isDateDisabled: fe,
      isDateUnavailable: $e,
      focusedValue: B
    });
    return ee(T, (ce) => {
      ce.start && (!K.value || !Le(K.value, ce.start)) && (K.value = ce.start.copy()), ce.end && (!H.value || !Le(H.value, ce.end)) && (H.value = ce.end.copy());
    }), ee(K, (ce) => {
      ce && !Le(ce, U.value) && q(ce), n("update:startValue", ce);
    }), ee([K, H], ([ce, rt]) => {
      const Ee = T.value;
      if (!(Ee && Ee.start && Ee.end && ce && rt && Le(Ee.start, ce) && Le(Ee.end, rt)))
        if (ce && rt) {
          if (Ee.start && Ee.end && Le(Ee.start, ce) && Le(Ee.end, rt))
            return;
          pt(rt, ce) ? T.value = {
            start: rt.copy(),
            end: ce.copy()
          } : T.value = {
            start: ce.copy(),
            end: rt.copy()
          };
        } else Ee.start && Ee.end && (T.value = {
          start: void 0,
          end: void 0
        });
    }), tf({
      isDateUnavailable: $e,
      startValue: K,
      endValue: H,
      formatter: ke,
      modelValue: T,
      placeholder: U,
      disabled: o,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: u,
      numberOfMonths: p,
      readonly: l,
      preventDeselect: g,
      fullCalendarLabel: ae,
      headingValue: ue,
      isInvalid: Fe,
      isDateDisabled: fe,
      highlightedRange: Ce,
      focusedValue: B,
      lastPressedDateValue: L,
      isSelected: se,
      isSelectionEnd: oa,
      isSelectionStart: Ye,
      isNextButtonDisabled: ye,
      isPrevButtonDisabled: ta,
      isOutsideVisibleView: st,
      nextPage: na,
      prevPage: De,
      parentElement: A,
      onPlaceholderChange: q,
      locale: P,
      dir: W,
      isHighlightedStart: sr,
      isHighlightedEnd: rr
    }), de(() => {
      r.value && Jl(A.value);
    }), (ce, rt) => (f(), y(s(F), {
      ref_key: "primitiveElement",
      ref: V,
      as: ce.as,
      "as-child": ce.asChild,
      role: "application",
      "aria-label": s(ae),
      "data-readonly": s(l) ? "" : void 0,
      "data-disabled": s(o) ? "" : void 0,
      "data-invalid": s(Fe) ? "" : void 0,
      dir: s(W)
    }, {
      default: v(() => [
        te("div", Qp, [
          te("div", ef, Z(s(ae)), 1)
        ]),
        w(ce.$slots, "default", {
          date: s(U),
          grid: s(yt),
          weekDays: s(aa),
          weekStartsOn: s(d),
          locale: s(P),
          fixedWeeks: s(u)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), nf = /* @__PURE__ */ b({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(F), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), of = /* @__PURE__ */ b({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = Qt();
    return (n, o) => (f(), y(s(F), E(t, {
      "data-disabled": s(a).disabled.value ? "" : void 0
    }), {
      default: v(() => [
        w(n.$slots, "default", {
          headingValue: s(a).headingValue.value
        }, () => [
          Y(Z(s(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), lf = /* @__PURE__ */ b({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = Qt(), n = k(() => a.disabled.value ? !0 : void 0), o = k(() => a.readonly.value ? !0 : void 0);
    return (l, r) => (f(), y(s(F), E(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), sf = /* @__PURE__ */ b({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = Qt();
    return (a, n) => {
      var o, l;
      return f(), y(s(F), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": s(t).isSelected(a.date) ? !0 : void 0,
        "aria-disabled": s(t).isDateDisabled(a.date) || ((l = (o = s(t)).isDateUnavailable) == null ? void 0 : l.call(o, a.date)),
        "data-disabled": s(t).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: v(() => [
          w(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), rf = /* @__PURE__ */ b({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(F), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), df = /* @__PURE__ */ b({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = k(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = Qt();
    return (o, l) => (f(), y(s(F), E(t, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (r) => s(n).nextPage(t.step, t.nextPage))
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), uf = /* @__PURE__ */ b({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = k(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = Qt();
    return (o, l) => (f(), y(s(F), E(t, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (r) => s(n).prevPage(t.step, t.prevPage))
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Y("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), cf = /* @__PURE__ */ b({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(F), E(t, { "aria-hidden": "true" }), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pf = /* @__PURE__ */ b({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(F), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ff = /* @__PURE__ */ b({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(F), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vf = /* @__PURE__ */ b({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = Qt(), n = ls(), { primitiveElement: o, currentElement: l } = Yt(), r = k(() => a.formatter.custom(Ae(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = k(() => a.isDateDisabled(t.day)), d = k(() => {
      var L;
      return (L = a.isDateUnavailable) == null ? void 0 : L.call(a, t.day);
    }), c = k(() => a.isSelected(t.day)), u = k(() => a.isSelectionStart(t.day)), p = k(() => a.isSelectionEnd(t.day)), g = k(() => a.isHighlightedStart(t.day)), h = k(() => a.isHighlightedEnd(t.day)), x = k(() => a.highlightedRange.value ? zi(t.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", _ = k(() => Ol(t.day, $t())), C = k(() => !Dl(t.day, t.month)), P = k(
      () => a.isOutsideVisibleView(t.day)
    ), $ = k(() => t.day.day.toLocaleString(a.locale.value)), D = k(() => !a.disabled.value && we(t.day, a.placeholder.value));
    function O(L, B) {
      var T;
      if (!a.readonly.value && !(a.isDateDisabled(B) || (T = a.isDateUnavailable) != null && T.call(a, B))) {
        if (a.lastPressedDateValue.value = B.copy(), a.startValue.value && a.highlightedRange.value === null) {
          if (we(B, a.startValue.value) && !a.preventDeselect.value && !a.endValue.value) {
            a.startValue.value = void 0, a.onPlaceholderChange(B);
            return;
          } else if (!a.endValue.value) {
            L.preventDefault(), a.lastPressedDateValue.value && we(a.lastPressedDateValue.value, B) && (a.startValue.value = B.copy());
            return;
          }
        }
        if (a.startValue.value && a.endValue.value && we(a.endValue.value, B) && !a.preventDeselect.value) {
          a.startValue.value = void 0, a.endValue.value = void 0, a.onPlaceholderChange(B);
          return;
        }
        a.startValue.value ? a.endValue.value ? a.endValue.value && a.startValue.value && (a.endValue.value = void 0, a.startValue.value = B.copy()) : a.endValue.value = B.copy() : a.startValue.value = B.copy();
      }
    }
    function V(L) {
      O(L, t.day);
    }
    function A() {
      var L;
      a.isDateDisabled(t.day) || (L = a.isDateUnavailable) != null && L.call(a, t.day) || (a.focusedValue.value = t.day.copy());
    }
    function W(L) {
      L.preventDefault(), L.stopPropagation();
      const B = a.parentElement.value, T = B ? Array.from(B.querySelectorAll(m)) : [];
      let I = T.indexOf(l.value);
      const K = 7, H = a.dir.value === "rtl" ? -1 : 1;
      switch (L.code) {
        case n.ARROW_RIGHT:
          I += H;
          break;
        case n.ARROW_LEFT:
          I -= H;
          break;
        case n.ARROW_UP:
          I -= K;
          break;
        case n.ARROW_DOWN:
          I += K;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          O(L, t.day);
          return;
        default:
          return;
      }
      if (I >= 0 && I < T.length) {
        T[I].focus();
        return;
      }
      if (I < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), oe(() => {
          const U = B ? Array.from(B.querySelectorAll(m)) : [];
          U[U.length - Math.abs(I)].focus();
        });
        return;
      }
      if (I >= T.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), oe(() => {
          (B ? Array.from(B.querySelectorAll(m)) : [])[I - T.length].focus();
        });
      }
    }
    return (L, B) => (f(), y(s(F), E({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": c.value ? !0 : void 0,
      "aria-disabled": C.value || i.value || d.value ? !0 : void 0,
      "data-highlighted": x.value ? "" : void 0,
      "data-selection-start": u.value ? !0 : void 0,
      "data-selection-end": p.value ? !0 : void 0,
      "data-highlighted-start": g.value ? !0 : void 0,
      "data-highlighted-end": h.value ? !0 : void 0,
      "data-selected": c.value ? !0 : void 0,
      "data-outside-visible-view": P.value ? "" : void 0,
      "data-value": L.day.toString(),
      "data-disabled": i.value || C.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": _.value ? "" : void 0,
      "data-outside-month": C.value ? "" : void 0,
      "data-focused": D.value ? "" : void 0,
      tabindex: D.value ? 0 : C.value || i.value ? void 0 : -1,
      onClick: V,
      onFocusin: A,
      onMouseenter: A,
      onKeydown: ze(W, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: v(() => [
        w(L.$slots, "default", { dayValue: $.value }, () => [
          Y(Z($.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
}), mf = ["default-value"], hf = /* @__PURE__ */ b({
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
    return (o, l) => (f(), y(s(rn), { "as-child": "" }, {
      default: v(() => [
        jt(te("select", E({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": l[0] || (l[0] = (r) => ga(a) ? a.value = r : null),
          "default-value": s(a)
        }), [
          w(o.$slots, "default")
        ], 16, mf), [
          [mr, s(a)]
        ])
      ]),
      _: 3
    }));
  }
}), gf = {
  key: 0,
  value: ""
}, [Dt, Ms] = ie("SelectRoot"), [yf, bf] = ie("SelectRoot"), wf = /* @__PURE__ */ b({
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
    const a = e, n = t, o = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), l = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = M(), i = M(), d = M({
      x: 0,
      y: 0
    }), c = M(!1), { required: u, disabled: p, dir: g } = me(a), h = gt(g);
    Ms({
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
      open: l,
      required: u,
      onOpenChange: (C) => {
        l.value = C;
      },
      dir: h,
      triggerPointerDownPosRef: d,
      disabled: p
    });
    const x = on(r), m = M(/* @__PURE__ */ new Set()), _ = k(() => Array.from(m.value).map((C) => {
      var P;
      return (P = C.props) == null ? void 0 : P.value;
    }).join(";"));
    return bf({
      onNativeOptionAdd: (C) => {
        m.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        m.value.delete(C);
      }
    }), (C, P) => (f(), y(s(ka), null, {
      default: v(() => [
        w(C.$slots, "default", {
          modelValue: s(o),
          open: s(l)
        }),
        s(x) ? (f(), y(hf, E({ key: _.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(u),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: s(p),
          value: s(o),
          onChange: P[0] || (P[0] = ($) => o.value = $.target.value)
        }), {
          default: v(() => [
            s(o) === void 0 ? (f(), R("option", gf)) : Q("", !0),
            (f(!0), R(J, null, he(Array.from(m.value), ($) => (f(), y(We($), E({ ref_for: !0 }, $.props, {
              key: $.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : Q("", !0)
      ]),
      _: 3
    }));
  }
}), _f = [" ", "Enter", "ArrowUp", "ArrowDown"], xf = [" ", "Enter"], Je = 10;
function Ts(e) {
  return e === "" || Ld(e);
}
const Cf = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Dt(), n = k(() => {
      var h;
      return ((h = a.disabled) == null ? void 0 : h.value) || t.disabled;
    }), { forwardRef: o, currentElement: l } = N();
    a.contentId || (a.contentId = xe(void 0, "radix-vue-select-content")), de(() => {
      a.triggerElement = l;
    });
    const { injectCollection: r } = qt(), i = r(), { search: d, handleTypeaheadSearch: c, resetTypeahead: u } = vo(i);
    function p() {
      n.value || (a.onOpenChange(!0), u());
    }
    function g(h) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      };
    }
    return (h, x) => (f(), y(s(wo), { "as-child": "" }, {
      default: v(() => {
        var m, _, C, P;
        return [
          S(s(F), {
            ref: s(o),
            role: "combobox",
            type: h.as === "button" ? "button" : void 0,
            "aria-controls": s(a).contentId,
            "aria-expanded": s(a).open.value || !1,
            "aria-required": (m = s(a).required) == null ? void 0 : m.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (_ = s(a)) == null ? void 0 : _.dir.value,
            "data-state": (C = s(a)) != null && C.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": s(Ts)((P = s(a).modelValue) == null ? void 0 : P.value) ? "" : void 0,
            "as-child": h.asChild,
            as: h.as,
            onClick: x[0] || (x[0] = ($) => {
              var D;
              (D = $ == null ? void 0 : $.currentTarget) == null || D.focus();
            }),
            onPointerdown: x[1] || (x[1] = ($) => {
              if ($.pointerType === "touch")
                return $.preventDefault();
              const D = $.target;
              D.hasPointerCapture($.pointerId) && D.releasePointerCapture($.pointerId), $.button === 0 && $.ctrlKey === !1 && (g($), $.preventDefault());
            }),
            onPointerup: x[2] || (x[2] = _e(
              ($) => {
                $.pointerType === "touch" && g($);
              },
              ["prevent"]
            )),
            onKeydown: x[3] || (x[3] = ($) => {
              const D = s(d) !== "";
              !($.ctrlKey || $.altKey || $.metaKey) && $.key.length === 1 && D && $.key === " " || (s(c)($.key), s(_f).includes($.key) && (p(), $.preventDefault()));
            })
          }, {
            default: v(() => [
              w(h.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), $f = /* @__PURE__ */ b({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(ln), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Bo, kf] = ie("SelectItemAlignedPosition"), Bf = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, { injectCollection: o } = qt(), l = Dt(), r = Ot(), i = o(), d = M(!1), c = M(!0), u = M(), { forwardRef: p, currentElement: g } = N(), { viewport: h, selectedItem: x, selectedItemText: m, focusSelectedItem: _ } = r;
    function C() {
      if (l.triggerElement.value && l.valueElement.value && u.value && g.value && h != null && h.value && x != null && x.value && m != null && m.value) {
        const D = l.triggerElement.value.getBoundingClientRect(), O = g.value.getBoundingClientRect(), V = l.valueElement.value.getBoundingClientRect(), A = m.value.getBoundingClientRect();
        if (l.dir.value !== "rtl") {
          const De = A.left - O.left, ke = V.left - De, Fe = D.left - ke, se = D.width + Fe, Ce = Math.max(se, O.width), Ye = window.innerWidth - Je, oa = Zo(ke, Je, Ye - Ce);
          u.value.style.minWidth = `${se}px`, u.value.style.left = `${oa}px`;
        } else {
          const De = O.right - A.right, ke = window.innerWidth - V.right - De, Fe = window.innerWidth - D.right - ke, se = D.width + Fe, Ce = Math.max(se, O.width), Ye = window.innerWidth - Je, oa = Zo(
            ke,
            Je,
            Ye - Ce
          );
          u.value.style.minWidth = `${se}px`, u.value.style.right = `${oa}px`;
        }
        const W = i.value, L = window.innerHeight - Je * 2, B = h.value.scrollHeight, T = window.getComputedStyle(g.value), I = Number.parseInt(
          T.borderTopWidth,
          10
        ), K = Number.parseInt(T.paddingTop, 10), H = Number.parseInt(
          T.borderBottomWidth,
          10
        ), U = Number.parseInt(
          T.paddingBottom,
          10
        ), q = I + K + B + U + H, ae = Math.min(
          x.value.offsetHeight * 5,
          q
        ), ue = window.getComputedStyle(h.value), fe = Number.parseInt(ue.paddingTop, 10), $e = Number.parseInt(
          ue.paddingBottom,
          10
        ), ye = D.top + D.height / 2 - Je, ta = L - ye, yt = x.value.offsetHeight / 2, aa = x.value.offsetTop + yt, st = I + K + aa, na = q - st;
        if (st <= ye) {
          const De = x.value === W[W.length - 1];
          u.value.style.bottom = "0px";
          const ke = g.value.clientHeight - h.value.offsetTop - h.value.offsetHeight, Fe = Math.max(
            ta,
            yt + (De ? $e : 0) + ke + H
          ), se = st + Fe;
          u.value.style.height = `${se}px`;
        } else {
          const De = x.value === W[0];
          u.value.style.top = "0px";
          const ke = Math.max(
            ye,
            I + h.value.offsetTop + (De ? fe : 0) + yt
          ) + na;
          u.value.style.height = `${ke}px`, h.value.scrollTop = st - ye + h.value.offsetTop;
        }
        u.value.style.margin = `${Je}px 0`, u.value.style.minHeight = `${ae}px`, u.value.style.maxHeight = `${L}px`, n("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const P = M("");
    de(async () => {
      await oe(), C(), g.value && (P.value = window.getComputedStyle(g.value).zIndex);
    });
    function $(D) {
      D && c.value === !0 && (C(), _ == null || _(), c.value = !1);
    }
    return kf({
      contentWrapper: u,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: $
    }), (D, O) => (f(), R("div", {
      ref_key: "contentWrapperElement",
      ref: u,
      style: ya({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: P.value
      })
    }, [
      S(s(F), E({
        ref: s(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...D.$attrs, ...a }), {
        default: v(() => [
          w(D.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Pf = /* @__PURE__ */ b({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: Je },
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
    return (a, n) => (f(), y(s(ma), E(s(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ea = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Ot, Df] = ie("SelectContent"), Of = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Dt();
    fo(), xa(a.bodyLock);
    const { createCollection: l } = qt(), r = M();
    Ca(r);
    const i = l(r), { search: d, handleTypeaheadSearch: c } = vo(i), u = M(), p = M(), g = M(), h = M(!1), x = M(!1);
    function m() {
      p.value && r.value && Ln([p.value, r.value]);
    }
    ee(h, () => {
      m();
    });
    const { onOpenChange: _, triggerPointerDownPosRef: C } = o;
    ge((O) => {
      if (!r.value)
        return;
      let V = { x: 0, y: 0 };
      const A = (L) => {
        var B, T;
        V = {
          x: Math.abs(
            Math.round(L.pageX) - (((B = C.value) == null ? void 0 : B.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(L.pageY) - (((T = C.value) == null ? void 0 : T.y) ?? 0)
          )
        };
      }, W = (L) => {
        var B;
        L.pointerType !== "touch" && (V.x <= 10 && V.y <= 10 ? L.preventDefault() : (B = r.value) != null && B.contains(L.target) || _(!1), document.removeEventListener("pointermove", A), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", A), document.addEventListener("pointerup", W, {
        capture: !0,
        once: !0
      })), O(() => {
        document.removeEventListener("pointermove", A), document.removeEventListener("pointerup", W, {
          capture: !0
        });
      });
    });
    function P(O) {
      const V = O.ctrlKey || O.altKey || O.metaKey;
      if (O.key === "Tab" && O.preventDefault(), !V && O.key.length === 1 && c(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
        let A = i.value;
        if (["ArrowUp", "End"].includes(O.key) && (A = A.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
          const W = O.target, L = A.indexOf(W);
          A = A.slice(L + 1);
        }
        setTimeout(() => Ln(A)), O.preventDefault();
      }
    }
    const $ = k(() => a.position === "popper" ? a : {}), D = ne($.value);
    return Df({
      content: r,
      viewport: u,
      onViewportChange: (O) => {
        u.value = O;
      },
      itemRefCallback: (O, V, A) => {
        var W, L;
        const B = !x.value && !A;
        (((W = o.modelValue) == null ? void 0 : W.value) !== void 0 && ((L = o.modelValue) == null ? void 0 : L.value) === V || B) && (p.value = O, B && (x.value = !0));
      },
      selectedItem: p,
      selectedItemText: g,
      onItemLeave: () => {
        var O;
        (O = r.value) == null || O.focus();
      },
      itemTextRefCallback: (O, V, A) => {
        var W, L;
        const B = !x.value && !A;
        (((W = o.modelValue) == null ? void 0 : W.value) !== void 0 && ((L = o.modelValue) == null ? void 0 : L.value) === V || B) && (g.value = O);
      },
      focusSelectedItem: m,
      position: a.position,
      isPositioned: h,
      searchRef: d
    }), (O, V) => (f(), y(s(sn), {
      "as-child": "",
      onMountAutoFocus: V[6] || (V[6] = _e(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: V[7] || (V[7] = (A) => {
        var W;
        n("closeAutoFocus", A), !A.defaultPrevented && ((W = s(o).triggerElement.value) == null || W.focus({ preventScroll: !0 }), A.preventDefault());
      })
    }, {
      default: v(() => [
        S(s($a), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: V[2] || (V[2] = _e(() => {
          }, ["prevent"])),
          onDismiss: V[3] || (V[3] = (A) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: V[4] || (V[4] = (A) => n("escapeKeyDown", A)),
          onPointerDownOutside: V[5] || (V[5] = (A) => n("pointerDownOutside", A))
        }, {
          default: v(() => [
            (f(), y(We(
              O.position === "popper" ? Pf : Bf
            ), E({ ...O.$attrs, ...s(D) }, {
              id: s(o).contentId,
              ref: (A) => {
                r.value = s(Se)(A);
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
              onContextmenu: V[0] || (V[0] = _e(() => {
              }, ["prevent"])),
              onPlaced: V[1] || (V[1] = (A) => h.value = !0),
              onKeydown: P
            }), {
              default: v(() => [
                w(O.$slots, "default")
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
}), Sf = /* @__PURE__ */ b({
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Ms(e.context), (t, a) => w(t.$slots, "default");
  }
}), Ef = { key: 1 }, Mf = /* @__PURE__ */ b({
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
    const a = e, n = le(a, t), o = Dt(), l = M();
    de(() => {
      l.value = new DocumentFragment();
    });
    const r = M(), i = k(() => a.forceMount || o.open.value);
    return (d, c) => {
      var u;
      return i.value ? (f(), y(s(Re), {
        key: 0,
        ref_key: "presenceRef",
        ref: r,
        present: !0
      }, {
        default: v(() => [
          S(Of, j(G({ ...s(n), ...d.$attrs })), {
            default: v(() => [
              w(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((u = r.value) != null && u.present) && l.value ? (f(), R("div", Ef, [
        (f(), y(Za, { to: l.value }, [
          S(Sf, { context: s(o) }, {
            default: v(() => [
              w(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : Q("", !0);
    };
  }
}), Tf = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(F), E({ "aria-hidden": "true" }, t), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [As, Af] = ie("SelectItem"), Vf = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: a } = me(t), n = Dt(), o = Ot(ea), { forwardRef: l, currentElement: r } = N(), i = k(() => {
      var m;
      return ((m = n.modelValue) == null ? void 0 : m.value) === t.value;
    }), d = M(!1), c = M(t.textValue ?? ""), u = xe(void 0, "radix-vue-select-item-text");
    async function p(m) {
      await oe(), !(m != null && m.defaultPrevented) && (a.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function g(m) {
      var _;
      await oe(), !m.defaultPrevented && (a.value ? (_ = o.onItemLeave) == null || _.call(o) : m.currentTarget.focus({ preventScroll: !0 }));
    }
    async function h(m) {
      var _;
      await oe(), !m.defaultPrevented && m.currentTarget === document.activeElement && ((_ = o.onItemLeave) == null || _.call(o));
    }
    async function x(m) {
      var _;
      await oe(), !(m.defaultPrevented || ((_ = o.searchRef) == null ? void 0 : _.value) !== "" && m.key === " ") && (xf.includes(m.key) && p(), m.key === " " && m.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return de(() => {
      r.value && o.itemRefCallback(
        r.value,
        t.value,
        t.disabled
      );
    }), Af({
      value: t.value,
      disabled: a,
      textId: u,
      isSelected: i,
      onItemTextChange: (m) => {
        c.value = ((c.value || (m == null ? void 0 : m.textContent)) ?? "").trim();
      }
    }), (m, _) => (f(), y(s(F), {
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
      as: m.as,
      "as-child": m.asChild,
      onFocus: _[0] || (_[0] = (C) => d.value = !0),
      onBlur: _[1] || (_[1] = (C) => d.value = !1),
      onPointerup: p,
      onPointerdown: _[2] || (_[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: _[3] || (_[3] = _e(() => {
      }, ["prevent", "stop"])),
      onPointermove: g,
      onPointerleave: h,
      onKeydown: x
    }, {
      default: v(() => [
        w(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), If = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = As();
    return (n, o) => s(a).isSelected.value ? (f(), y(s(F), E({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : Q("", !0);
  }
}), [Rf, Ff] = ie("SelectGroup"), Lf = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = xe(void 0, "radix-vue-select-group");
    return Ff({ id: a }), (n, o) => (f(), y(s(F), E({ role: "group" }, t, { "aria-labelledby": s(a) }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Nf = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = Rf({ id: "" });
    return (n, o) => (f(), y(s(F), E(t, {
      id: s(a).id
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Vs = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = Dt(), n = Ot(ea), o = yf(), l = As(), { forwardRef: r, currentElement: i } = N(), d = k(() => {
      var c;
      return Ne("option", {
        key: l.value,
        value: l.value,
        disabled: l.disabled.value,
        textContent: (c = i.value) == null ? void 0 : c.textContent
      });
    });
    return de(() => {
      i.value && (l.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        l.value,
        l.disabled.value
      ), o.onNativeOptionAdd(d.value));
    }), qn(() => {
      o.onNativeOptionRemove(d.value);
    }), (c, u) => (f(), R(J, null, [
      S(s(F), E({
        id: s(l).textId,
        ref: s(r)
      }, { ...t, ...c.$attrs }), {
        default: v(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(l).isSelected.value && s(a).valueElement.value && !s(a).valueElementHasChildren.value ? (f(), y(Za, {
        key: 0,
        to: s(a).valueElement.value
      }, [
        w(c.$slots, "default")
      ], 8, ["to"])) : Q("", !0)
    ], 64));
  }
}), zf = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: a } = me(t), n = Fc(a), o = Ot(ea), l = o.position === "item-aligned" ? Bo() : void 0, { forwardRef: r, currentElement: i } = N();
    de(() => {
      o == null || o.onViewportChange(i.value);
    });
    const d = M(0);
    function c(u) {
      const p = u.currentTarget, { shouldExpandOnScrollRef: g, contentWrapper: h } = l ?? {};
      if (g != null && g.value && h != null && h.value) {
        const x = Math.abs(d.value - p.scrollTop);
        if (x > 0) {
          const m = window.innerHeight - Je * 2, _ = Number.parseFloat(
            h.value.style.minHeight
          ), C = Number.parseFloat(h.value.style.height), P = Math.max(_, C);
          if (P < m) {
            const $ = P + x, D = Math.min(m, $), O = $ - D;
            h.value.style.height = `${D}px`, h.value.style.bottom === "0px" && (p.scrollTop = O > 0 ? O : 0, h.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = p.scrollTop;
    }
    return (u, p) => (f(), R(J, null, [
      S(s(F), E({
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
        default: v(() => [
          w(u.$slots, "default")
        ]),
        _: 3
      }, 16),
      S(s(F), {
        as: "style",
        nonce: s(n)
      }, {
        default: v(() => [
          Y(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Is = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const a = t, { injectCollection: n } = qt(), o = n(), l = Ot(ea), r = M(null);
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
      (u = l.onItemLeave) == null || u.call(l), r.value === null && (r.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    return qn(() => i()), (u, p) => {
      var g;
      return f(), y(s(F), E({
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
        default: v(() => [
          w(u.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Wf = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ot(ea), a = t.position === "item-aligned" ? Bo() : void 0, { forwardRef: n, currentElement: o } = N(), l = M(!1);
    return ge((r) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let c = function() {
          l.value = u.scrollTop > 0;
        };
        const u = t.viewport.value;
        c(), u.addEventListener("scroll", c), r(() => u.removeEventListener("scroll", c));
      }
    }), ee(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => l.value ? (f(), y(Is, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: c } = s(t);
        d != null && d.value && c != null && c.value && (d.value.scrollTop = d.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : Q("", !0);
  }
}), Uf = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ot(ea), a = t.position === "item-aligned" ? Bo() : void 0, { forwardRef: n, currentElement: o } = N(), l = M(!1);
    return ge((r) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let c = function() {
          const p = u.scrollHeight - u.clientHeight;
          l.value = Math.ceil(u.scrollTop) < p;
        };
        const u = t.viewport.value;
        c(), u.addEventListener("scroll", c), r(() => u.removeEventListener("scroll", c));
      }
    }), ee(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => l.value ? (f(), y(Is, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: c } = s(t);
        d != null && d.value && c != null && c.value && (d.value.scrollTop = d.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : Q("", !0);
  }
}), jf = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: a } = N(), n = Dt(), o = pr();
    return fr(() => {
      var l;
      const r = !!an((l = o == null ? void 0 : o.default) == null ? void 0 : l.call(o)).length;
      n.onValueElementHasChildrenChange(r);
    }), de(() => {
      n.valueElement = a;
    }), (l, r) => (f(), y(s(F), {
      ref: s(t),
      as: l.as,
      "as-child": l.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: v(() => {
        var i;
        return [
          s(Ts)((i = s(n).modelValue) == null ? void 0 : i.value) ? (f(), R(J, { key: 0 }, [
            Y(Z(l.placeholder), 1)
          ], 64)) : w(l.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Hf = /* @__PURE__ */ b({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, a) => (f(), y(s(F), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: v(() => [
        w(t.$slots, "default", {}, () => [
          Y("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Kf() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
Kf();
const Gf = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [qf, Yf] = ie("SwitchRoot"), Zf = /* @__PURE__ */ b({
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
    const a = e, n = t, { disabled: o } = me(a), l = ve(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    });
    function r() {
      o.value || (l.value = !l.value);
    }
    const { forwardRef: i, currentElement: d } = N(), c = on(d), u = k(() => {
      var p;
      return a.id && d.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Yf({
      checked: l,
      toggleCheck: r,
      disabled: o
    }), (p, g) => (f(), R(J, null, [
      S(s(F), E(p.$attrs, {
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
        onKeydown: ze(_e(r, ["prevent"]), ["enter"])
      }), {
        default: v(() => [
          w(p.$slots, "default", { checked: s(l) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(c) ? (f(), R("input", {
        key: 0,
        type: "checkbox",
        name: p.name,
        tabindex: "-1",
        "aria-hidden": "true",
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
      }, null, 8, Gf)) : Q("", !0)
    ], 64));
  }
}), Xf = /* @__PURE__ */ b({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = qf();
    return N(), (a, n) => {
      var o;
      return f(), y(s(F), {
        "data-state": (o = s(t).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": s(t).disabled.value ? "" : void 0,
        "as-child": a.asChild,
        as: a.as
      }, {
        default: v(() => [
          w(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [Po, Jf] = ie("TabsRoot"), Qf = /* @__PURE__ */ b({
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
    const a = e, n = t, { orientation: o, dir: l } = me(a), r = gt(l);
    N();
    const i = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), d = M();
    return Jf({
      modelValue: i,
      changeModelValue: (c) => {
        i.value = c;
      },
      orientation: o,
      dir: r,
      activationMode: a.activationMode,
      baseId: xe(void 0, "radix-vue-tabs"),
      tabsList: d
    }), (c, u) => (f(), y(s(F), {
      dir: s(r),
      "data-orientation": s(o),
      "as-child": c.asChild,
      as: c.as
    }, {
      default: v(() => [
        w(c.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), ev = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: a } = me(t), { forwardRef: n, currentElement: o } = N(), l = Po();
    return l.tabsList = o, (r, i) => (f(), y(s(Cs), {
      "as-child": "",
      orientation: s(l).orientation.value,
      dir: s(l).dir.value,
      loop: s(a)
    }, {
      default: v(() => [
        S(s(F), {
          ref: s(n),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": s(l).orientation.value
        }, {
          default: v(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function Rs(e, t) {
  return `${e}-trigger-${t}`;
}
function Fs(e, t) {
  return `${e}-content-${t}`;
}
const tv = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a } = N(), n = Po(), o = k(() => Rs(n.baseId, t.value)), l = k(() => Fs(n.baseId, t.value)), r = k(() => t.value === n.modelValue.value), i = M(r.value);
    return de(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (d, c) => (f(), y(s(Re), {
      present: r.value,
      "force-mount": ""
    }, {
      default: v(({ present: u }) => [
        S(s(F), {
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
          style: ya({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: v(() => [
            d.forceMount || r.value ? w(d.$slots, "default", { key: 0 }) : Q("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), av = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: a } = N(), n = Po(), o = k(() => Rs(n.baseId, t.value)), l = k(() => Fs(n.baseId, t.value)), r = k(() => t.value === n.modelValue.value);
    return (i, d) => (f(), y(s(tp), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: v(() => [
        S(s(F), {
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
          onMousedown: d[0] || (d[0] = _e((c) => {
            !i.disabled && c.ctrlKey === !1 ? s(n).changeModelValue(i.value) : c.preventDefault();
          }, ["left"])),
          onKeydown: d[1] || (d[1] = ze((c) => s(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: d[2] || (d[2] = () => {
            const c = s(n).activationMode !== "manual";
            !r.value && !i.disabled && c && s(n).changeModelValue(i.value);
          })
        }, {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [dn, nv] = ie("ToastProvider"), ov = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: a, duration: n, swipeDirection: o, swipeThreshold: l } = me(t), r = M(), i = M(0), d = M(!1), c = M(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const u = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(u);
    }
    return nv({
      label: a,
      duration: n,
      swipeDirection: o,
      swipeThreshold: l,
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
    }), (u, p) => w(u.$slots, "default");
  }
}), lv = "toast.swipeStart", sv = "toast.swipeMove", rv = "toast.swipeCancel", iv = "toast.swipeEnd", zn = "toast.viewportPause", Wn = "toast.viewportResume";
function Va(e, t, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function al(e, t, a = 0) {
  const n = Math.abs(e.x), o = Math.abs(e.y), l = n > o;
  return t === "left" || t === "right" ? l && n > a : !l && o > a;
}
function dv(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Ls(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && t.push(a.textContent), dv(a)) {
      const n = a.ariaHidden || a.hidden || a.style.display === "none", o = a.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const l = a.dataset.radixToastAnnounceAlt;
          l && t.push(l);
        } else
          t.push(...Ls(a));
    }
  }), t;
}
const uv = /* @__PURE__ */ b({
  __name: "ToastAnnounce",
  setup(e) {
    const t = dn(), a = Xd(1e3), n = M(!1);
    return as(() => {
      n.value = !0;
    }), (o, l) => s(a) || n.value ? (f(), y(s(rn), { key: 0 }, {
      default: v(() => [
        Y(Z(s(t).label.value) + " ", 1),
        w(o.$slots, "default")
      ]),
      _: 3
    })) : Q("", !0);
  }
}), [cv, pv] = ie("ToastRoot"), fv = /* @__PURE__ */ b({
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
    const a = e, n = t, { forwardRef: o, currentElement: l } = N(), r = dn(), i = M(null), d = M(null), c = k(() => a.duration || r.duration.value), u = M(0), p = M(c.value), g = M(0), h = M(c.value), x = as(() => {
      const P = (/* @__PURE__ */ new Date()).getTime() - u.value;
      h.value = Math.max(p.value - P, 0);
    }, { fpsLimit: 60 });
    function m(P) {
      !P || P === Number.POSITIVE_INFINITY || Ke && (window.clearTimeout(g.value), u.value = (/* @__PURE__ */ new Date()).getTime(), g.value = window.setTimeout(_, P));
    }
    function _() {
      var P, $;
      (P = l.value) != null && P.contains(document.activeElement) && (($ = r.viewport.value) == null || $.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const C = k(() => l.value ? Ls(l.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const P = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(P);
    }
    return ge((P) => {
      const $ = r.viewport.value;
      if ($) {
        const D = () => {
          m(p.value), x.resume(), n("resume");
        }, O = () => {
          const V = (/* @__PURE__ */ new Date()).getTime() - u.value;
          p.value = p.value - V, window.clearTimeout(g.value), x.pause(), n("pause");
        };
        return $.addEventListener(zn, O), $.addEventListener(Wn, D), () => {
          $.removeEventListener(zn, O), $.removeEventListener(Wn, D);
        };
      }
    }), ee(() => [a.open, c.value], () => {
      p.value = c.value, a.open && !r.isClosePausedRef.value && m(c.value);
    }, { immediate: !0 }), po("Escape", (P) => {
      n("escapeKeyDown", P), P.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, _());
    }), de(() => {
      r.onToastAdd();
    }), Ct(() => {
      r.onToastRemove();
    }), pv({ onClose: _ }), (P, $) => (f(), R(J, null, [
      C.value ? (f(), y(uv, {
        key: 0,
        role: "status",
        "aria-live": P.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: v(() => [
          Y(Z(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : Q("", !0),
      s(r).viewport.value ? (f(), y(Za, {
        key: 1,
        to: s(r).viewport.value
      }, [
        S(s(F), E({
          ref: s(o),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, P.$attrs, {
          as: P.as,
          "as-child": P.asChild,
          "data-state": P.open ? "open" : "closed",
          "data-swipe-direction": s(r).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: $[0] || ($[0] = _e((D) => {
            i.value = { x: D.clientX, y: D.clientY };
          }, ["left"])),
          onPointermove: $[1] || ($[1] = (D) => {
            if (!i.value) return;
            const O = D.clientX - i.value.x, V = D.clientY - i.value.y, A = !!d.value, W = ["left", "right"].includes(s(r).swipeDirection.value), L = ["left", "up"].includes(s(r).swipeDirection.value) ? Math.min : Math.max, B = W ? L(0, O) : 0, T = W ? 0 : L(0, V), I = D.pointerType === "touch" ? 10 : 2, K = { x: B, y: T }, H = { originalEvent: D, delta: K };
            A ? (d.value = K, s(Va)(s(sv), (U) => n("swipeMove", U), H)) : s(al)(K, s(r).swipeDirection.value, I) ? (d.value = K, s(Va)(s(lv), (U) => n("swipeStart", U), H), D.target.setPointerCapture(D.pointerId)) : (Math.abs(O) > I || Math.abs(V) > I) && (i.value = null);
          }),
          onPointerup: $[2] || ($[2] = (D) => {
            const O = d.value, V = D.target;
            if (V.hasPointerCapture(D.pointerId) && V.releasePointerCapture(D.pointerId), d.value = null, i.value = null, O) {
              const A = D.currentTarget, W = { originalEvent: D, delta: O };
              s(al)(O, s(r).swipeDirection.value, s(r).swipeThreshold.value) ? s(Va)(s(iv), (L) => n("swipeEnd", L), W) : s(Va)(s(rv), (L) => n("swipeCancel", L), W), A == null || A.addEventListener("click", (L) => L.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: v(() => [
            w(P.$slots, "default", {
              remaining: h.value,
              duration: c.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : Q("", !0)
    ], 64));
  }
}), vv = /* @__PURE__ */ b({
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
    const a = e, n = t, { forwardRef: o } = N(), l = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    return (r, i) => (f(), y(s(Re), {
      present: r.forceMount || s(l)
    }, {
      default: v(() => [
        S(fv, E({
          ref: s(o),
          open: s(l),
          type: r.type,
          as: r.as,
          "as-child": r.asChild,
          duration: r.duration
        }, r.$attrs, {
          onClose: i[0] || (i[0] = (d) => l.value = !1),
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
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${u}px`), l.value = !1;
          })
        }), {
          default: v(({ remaining: d, duration: c }) => [
            w(r.$slots, "default", {
              remaining: d,
              duration: c,
              open: s(l)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ns = /* @__PURE__ */ b({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, a) => (f(), y(s(F), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: v(() => [
        w(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), zs = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = cv(), { forwardRef: n } = N();
    return (o, l) => (f(), y(Ns, { "as-child": "" }, {
      default: v(() => [
        S(s(F), E(t, {
          ref: s(n),
          type: o.as === "button" ? "button" : void 0,
          onClick: l[0] || (l[0] = (r) => s(a).onClose())
        }), {
          default: v(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), mv = /* @__PURE__ */ b({
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
    return (a, n) => a.altText ? (f(), y(Ns, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: v(() => [
        S(zs, {
          ref: s(t),
          as: a.as,
          "as-child": a.asChild
        }, {
          default: v(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : Q("", !0);
  }
}), nl = /* @__PURE__ */ b({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const a = t, n = dn();
    return (o, l) => (f(), y(s(rn), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: l[0] || (l[0] = (r) => {
        var i;
        const d = r.relatedTarget;
        !((i = s(n).viewport.value) != null && i.contains(d)) && a("focusFromOutsideViewport");
      })
    }, {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), hv = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: a, label: n } = me(t), { forwardRef: o, currentElement: l } = N(), { createCollection: r } = qt(), i = r(l), d = dn(), c = k(() => d.toastCount.value > 0), u = M(), p = M(), g = k(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    po(a.value, () => {
      l.value.focus();
    }), de(() => {
      d.onViewportChange(l.value);
    }), ge((x) => {
      const m = l.value;
      if (c.value && m) {
        const _ = () => {
          if (!d.isClosePausedRef.value) {
            const O = new CustomEvent(zn);
            m.dispatchEvent(O), d.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (d.isClosePausedRef.value) {
            const O = new CustomEvent(Wn);
            m.dispatchEvent(O), d.isClosePausedRef.value = !1;
          }
        }, P = (O) => {
          !m.contains(O.relatedTarget) && C();
        }, $ = () => {
          m.contains(document.activeElement) || C();
        }, D = (O) => {
          var V, A, W;
          const L = O.altKey || O.ctrlKey || O.metaKey;
          if (O.key === "Tab" && !L) {
            const B = document.activeElement, T = O.shiftKey;
            if (O.target === m && T) {
              (V = u.value) == null || V.focus();
              return;
            }
            const I = h({ tabbingDirection: T ? "backwards" : "forwards" }), K = I.findIndex((H) => H === B);
            za(I.slice(K + 1)) ? O.preventDefault() : T ? (A = u.value) == null || A.focus() : (W = p.value) == null || W.focus();
          }
        };
        m.addEventListener("focusin", _), m.addEventListener("focusout", P), m.addEventListener("pointermove", _), m.addEventListener("pointerleave", $), m.addEventListener("keydown", D), window.addEventListener("blur", _), window.addEventListener("focus", C), x(() => {
          m.removeEventListener("focusin", _), m.removeEventListener("focusout", P), m.removeEventListener("pointermove", _), m.removeEventListener("pointerleave", $), m.removeEventListener("keydown", D), window.removeEventListener("blur", _), window.removeEventListener("focus", C);
        });
      }
    });
    function h({ tabbingDirection: x }) {
      const m = i.value.map((_) => {
        const C = [_, ...ho(_)];
        return x === "forwards" ? C : C.reverse();
      });
      return (x === "forwards" ? m.reverse() : m).flat();
    }
    return (x, m) => (f(), y(s(Du), {
      role: "region",
      "aria-label": typeof s(n) == "string" ? s(n).replace("{hotkey}", g.value) : s(n)(g.value),
      tabindex: "-1",
      style: ya({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: v(() => [
        c.value ? (f(), y(nl, {
          key: 0,
          ref: (_) => {
            u.value = s(Se)(_);
          },
          onFocusFromOutsideViewport: m[0] || (m[0] = () => {
            const _ = h({
              tabbingDirection: "forwards"
            });
            s(za)(_);
          })
        }, null, 512)) : Q("", !0),
        S(s(F), E({
          ref: s(o),
          tabindex: "-1",
          as: x.as,
          "as-child": x.asChild
        }, x.$attrs), {
          default: v(() => [
            w(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        c.value ? (f(), y(nl, {
          key: 1,
          ref: (_) => {
            p.value = s(Se)(_);
          },
          onFocusFromOutsideViewport: m[1] || (m[1] = () => {
            const _ = h({
              tabbingDirection: "backwards"
            });
            s(za)(_);
          })
        }, null, 512)) : Q("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), gv = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (f(), y(s(F), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yv = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (f(), y(s(F), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qe = /* @__PURE__ */ b({
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
    return (a, n) => (f(), y(s(F), {
      as: a.as,
      "as-child": a.asChild,
      class: re(s(z)(s(St)({ variant: a.variant, size: a.size }), t.class))
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), St = Yn(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-800 text-slate-50 hover:bg-slate-800/90 dark:bg-slate-300 dark:text-slate-900 dark:hover:bg-slate-300/90",
        primary: "bg-primary-500 text-primary-50 hover:bg-primary-500/90 dark:bg-primary-800 dark:text-slate-100 dark:hover:bg-primary-800/90",
        destructive: "bg-destructive-500 text-slate-50 hover:bg-destructive-500/90 dark:bg-destructive-800 dark:text-slate-100 dark:hover:bg-destructive-800/90",
        outline: "border border-slate-200 bg-white hover:bg-slate-200/90 hover:text-slate-900 dark:text-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary: "bg-secondary-400 text-secondary-100 hover:bg-secondary-400/90 dark:bg-secondary-800 dark:text-secondary-100 dark:hover:bg-secondary-800/80",
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
), bv = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, wv = /* @__PURE__ */ b({
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
    const a = e, n = t, o = k(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = le(o, n);
    return (r, i) => (f(), y(s(oc), E({
      class: s(z)("p-3", a.class)
    }, s(l)), {
      default: v(({ grid: d, weekDays: c }) => [
        S(s(Pv), null, {
          default: v(() => [
            S(s(Sv)),
            S(s(Dv)),
            S(s(Ov))
          ]),
          _: 1
        }),
        te("div", bv, [
          (f(!0), R(J, null, he(d, (u) => (f(), y(s(Cv), {
            key: u.value.toString()
          }, {
            default: v(() => [
              S(s(kv), null, {
                default: v(() => [
                  S(s(ol), null, {
                    default: v(() => [
                      (f(!0), R(J, null, he(c, (p) => (f(), y(s(Bv), { key: p }, {
                        default: v(() => [
                          Y(Z(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              S(s($v), null, {
                default: v(() => [
                  (f(!0), R(J, null, he(u.rows, (p, g) => (f(), y(s(ol), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: v(() => [
                      (f(!0), R(J, null, he(p, (h) => (f(), y(s(_v), {
                        key: h.toString(),
                        date: h
                      }, {
                        default: v(() => [
                          S(s(xv), {
                            day: h,
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
}), _v = /* @__PURE__ */ b({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(ic), E({
      class: s(z)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        t.class
      )
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xv = /* @__PURE__ */ b({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(mc), E({
      class: s(z)(
        s(St)({ variant: "ghost" }),
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
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cv = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(rc), E({
      class: s(z)("w-full border-collapse space-y-1", t.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $v = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(fc), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kv = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(pc), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ol = /* @__PURE__ */ b({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(vc), E({
      class: s(z)("flex", t.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bv = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(dc), E({
      class: s(z)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pv = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(lc), E({
      class: s(z)("relative flex w-full items-center justify-between pt-1", t.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dv = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(sc), E({
      class: s(z)("text-sm font-medium", t.class)
    }, s(n)), {
      default: v(({ headingValue: r }) => [
        w(o.$slots, "default", { headingValue: r }, () => [
          Y(Z(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ov = /* @__PURE__ */ b({
  __name: "CalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(uc), E({
      class: s(z)(
        s(St)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, s(n)), {
      default: v(() => l[0] || (l[0] = [
        Y(" > ")
      ])),
      _: 1
    }, 16, ["class"]));
  }
}), Sv = /* @__PURE__ */ b({
  __name: "CalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(cc), E({
      class: s(z)(
        s(St)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, s(n)), {
      default: v(() => l[0] || (l[0] = [
        Y(" < ")
      ])),
      _: 1
    }, 16, ["class"]));
  }
}), Ws = /* @__PURE__ */ b({
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
    const a = e, n = t, o = k(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = le(o, n);
    return (r, i) => (f(), y(s(Oc), E(s(l), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        a.class
      ]
    }), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Us = /* @__PURE__ */ b({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = le(e, t);
    return (l, r) => (f(), y(s(xu), j(G(s(o))), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wg = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(bo), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ev = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(Cu), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mv = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("div", {
      class: re(s(z)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Tv = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(qu), E(s(n), {
      class: s(z)("text-lg leading-none tracking-tight text-slate-500 dark:text-slate-200", t.class)
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Av = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(Yu), E(s(n), {
      class: s(z)("text-sm text-slate-500 dark:text-slate-500", t.class)
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function Vv(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    te("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    })
  ]);
}
function Do(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    te("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]);
}
function Iv(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    te("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
    })
  ]);
}
function Rv(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    te("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    })
  ]);
}
function js(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    te("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    })
  ]);
}
function Hs(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    te("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5 8.25 12l7.5-7.5"
    })
  ]);
}
function Ks(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    te("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m8.25 4.5 7.5 7.5-7.5 7.5"
    })
  ]);
}
function Fv(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    te("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    })
  ]);
}
function Lv(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    te("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 15.75 7.5-7.5 7.5 7.5"
    })
  ]);
}
function Nv(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    te("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    })
  ]);
}
function zv(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    te("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    })
  ]);
}
function Wv(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    te("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    })
  ]);
}
function Uv(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    te("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    })
  ]);
}
function Gs(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    te("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
const qs = /* @__PURE__ */ b({
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
    const a = t, n = e, o = k(() => {
      const { class: r, ...i } = n;
      return i;
    }), l = le(o, a);
    return (r, i) => (f(), y(s(ss), null, {
      default: v(() => [
        S(s(cs), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        S(s(us), E(s(l), {
          class: s(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg",
            n.class
          )
        }), {
          default: v(() => [
            w(r.$slots, "default"),
            S(s(bo), {
              onClick: i[0] || (i[0] = (d) => a("close", d)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: v(() => [
                S(s(Gs), { class: "size-6 dark:text-slate-300" }),
                i[1] || (i[1] = te("span", { class: "sr-only" }, "Close", -1))
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
}), _g = /* @__PURE__ */ b({
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
    const a = e, n = t, o = k(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = le(o, n);
    return (r, i) => (f(), y(s(ss), null, {
      default: v(() => [
        S(s(cs), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: v(() => [
            S(s(us), E({
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
              default: v(() => [
                w(r.$slots, "default"),
                S(s(bo), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: v(() => [
                    S(s(Gs), { class: "size-4" }),
                    i[1] || (i[1] = te("span", { class: "sr-only" }, "Close", -1))
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
}), jv = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("div", {
      class: re(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), xg = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = le(e, t);
    return (l, r) => (f(), y(s(Us), j(G(s(o))), {
      default: v(() => [
        S(s(qs), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: v(() => [
            S(Ws, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: v(() => [
                w(l.$slots, "default")
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
}), Hv = /* @__PURE__ */ b({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(Rc), E(a.value, {
      class: s(z)("py-6 text-center text-sm", t.class)
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kv = /* @__PURE__ */ b({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(Mc), E(a.value, {
      class: s(z)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: v(() => [
        n.heading ? (f(), y(s(Tc), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: v(() => [
            Y(Z(n.heading), 1)
          ]),
          _: 1
        })) : Q("", !0),
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gv = { class: "flex items-center border-b px-3" }, qv = /* @__PURE__ */ b({
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
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), R("div", Gv, [
      S(s(zv), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      S(s(Sc), E({ ...s(n), ...o.$attrs }, {
        "auto-focus": "",
        class: s(z)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Yv = /* @__PURE__ */ b({
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
    const a = e, n = t, o = k(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = le(o, n);
    return (r, i) => (f(), y(s(zc), E(s(l), { class: "relative flex cursor-default select-none rounded-sm px-1 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zv = { role: "presentation" }, Xv = /* @__PURE__ */ b({
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
    const a = e, n = t, o = k(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = le(o, n);
    return (r, i) => (f(), y(s(Ic), E(s(l), {
      class: s(z)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: v(() => [
        te("div", Zv, [
          w(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cg = /* @__PURE__ */ b({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(Wc), E(a.value, {
      class: s(z)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $g = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("span", {
      class: re(s(z)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Jv = /* @__PURE__ */ b({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = le(e, t);
    return (l, r) => (f(), y(s(_p), j(G(s(o))), {
      default: v(({ open: i }) => [
        w(l.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Qv = /* @__PURE__ */ b({
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
      class: re(
        s(z)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          t.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), em = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = ne(e);
    return (n, o) => (f(), y(s(xp), E({ class: "outline-none" }, s(a)), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tm = /* @__PURE__ */ b({
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
    const a = e, n = t, o = k(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = le(o, n);
    return (r, i) => (f(), y(s(Cp), null, {
      default: v(() => [
        S(s($p), E(s(l), {
          class: s(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
            a.class
          )
        }), {
          default: v(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), kg = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(kp), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bg = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = le(e, t);
    return (l, r) => (f(), y(s(Op), j(G(s(o))), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pg = /* @__PURE__ */ b({
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
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(Os), E(s(n), {
      class: s(z)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.inset && "pl-8",
        t.class
      )
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), am = /* @__PURE__ */ b({
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
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(Qv, {
      class: re(t.class)
    }, {
      default: v(() => [
        S(s(Os), E(s(n), {
          as: o.as,
          href: o.href,
          class: "size-full"
        }), {
          default: v(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "href"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ia = {
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
const om = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: l, class: r, ...i }, { slots: d }) => Ne(
  "svg",
  {
    ...Ia,
    width: e || Ia.width,
    height: e || Ia.height,
    stroke: n || Ia.stroke,
    "stroke-width": a ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${nm(l ?? "icon")}`],
    ...i
  },
  [...o.map((c) => Ne(...c)), ...d.default ? [d.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = (e, t) => (a, { slots: n }) => Ne(
  om,
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
const lm = Oo("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sm = Oo("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rm = Oo("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), im = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Dg = /* @__PURE__ */ b({
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
    const a = e, n = t, o = k(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = le(o, n);
    return (r, i) => (f(), y(s(Pp), E(s(l), {
      class: s(z)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: v(() => [
        te("span", im, [
          S(s(Ss), null, {
            default: v(() => [
              S(s(lm), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dm = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Og = /* @__PURE__ */ b({
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
    const a = e, n = t, o = k(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = le(o, n);
    return (r, i) => (f(), y(s(Sp), E(s(l), {
      class: s(z)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: v(() => [
        te("span", dm, [
          S(s(Ss), null, {
            default: v(() => [
              S(s(rm), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sg = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("span", {
      class: re(s(z)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Eg = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(Bp), E(a.value, {
      class: s(z)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), Mg = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(Dp), E(s(n), {
      class: s(z)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", t.class)
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tg = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = le(e, t);
    return (l, r) => (f(), y(s(Ep), j(G(s(o))), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ag = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(Tp), E(s(n), {
      class: s(z)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: v(() => [
        w(o.$slots, "default"),
        S(s(sm), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vg = /* @__PURE__ */ b({
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
    const a = e, n = t, o = k(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = le(o, n);
    return (r, i) => (f(), y(s(Mp), E(s(l), {
      class: s(z)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
        a.class
      )
    }), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), um = { class: "text-xs text-slate-600 dark:text-slate-300" }, cm = /* @__PURE__ */ b({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(e) {
    return (t, a) => (f(), R("div", um, "Characters: " + Z(t.count), 1));
  }
}), pm = {}, fm = { class: "text-sm text-slate-600 dark:text-slate-300" };
function vm(e, t) {
  return f(), R("div", fm, [
    w(e.$slots, "default")
  ]);
}
const mm = /* @__PURE__ */ wa(pm, [["render", vm]]), hm = { class: "text-sm text-red-600 dark:text-red-400" }, gm = /* @__PURE__ */ b({
  __name: "Error",
  props: {
    error: {}
  },
  setup(e) {
    return (t, a) => jt((f(), R("div", null, [
      te("p", hm, Z(t.error), 1)
    ], 512)), [
      [Gn, t.error]
    ]);
  }
}), ym = {}, bm = { class: "w-full space-y-4 p-1.5" };
function wm(e, t) {
  return f(), R("div", bm, [
    w(e.$slots, "default")
  ]);
}
const Ig = /* @__PURE__ */ wa(ym, [["render", wm]]), _m = {}, xm = { class: "my-4" };
function Cm(e, t) {
  return f(), R("div", xm, [
    w(e.$slots, "default")
  ]);
}
const $m = /* @__PURE__ */ wa(_m, [["render", Cm]]), km = { class: "grid gap-4 md:grid-cols-2" }, Rg = /* @__PURE__ */ b({
  __name: "FormGrid",
  setup(e) {
    return (t, a) => (f(), y($m, null, {
      default: v(() => [
        te("div", km, [
          w(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), Ys = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    id: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(Ap), E(a.value, {
      class: s(z)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        t.class
      )
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bm = { class: "flex gap-2" }, Fg = /* @__PURE__ */ b({
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
    return ee(o, (l) => {
      a("update:modelValue", l);
    }), (l, r) => (f(), R("div", Bm, [
      S(s(bc), {
        id: l.id,
        checked: o.value,
        "onUpdate:checked": r[0] || (r[0] = (i) => o.value = i),
        class: "peer size-4 shrink-0 rounded-sm border border-primary-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-900 data-[state=checked]:text-primary-50 dark:border-primary-50 dark:ring-offset-primary-950 dark:focus-visible:ring-primary-300 dark:data-[state=checked]:bg-primary-300 dark:data-[state=checked]:text-primary-900"
      }, {
        default: v(() => [
          S(s(wc), { class: "flex h-full w-full items-center justify-center text-current" }, {
            default: v(() => [
              S(s(Do), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["id", "checked"]),
      l.label ? (f(), y(s(Ys), {
        key: 0,
        id: l.id,
        class: "my-auto"
      }, {
        default: v(() => [
          Y(Z(l.label), 1)
        ]),
        _: 1
      }, 8, ["id"])) : Q("", !0)
    ]));
  }
}), Zs = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = le(e, t);
    return (l, r) => (f(), y(s(Kp), j(G(s(o))), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xs = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(Gp), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Js = /* @__PURE__ */ b({
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
    const a = e, n = t, o = k(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = le(o, n);
    return (r, i) => (f(), y(s(qp), null, {
      default: v(() => [
        S(s(Xp), E({ ...s(l), ...r.$attrs }, {
          class: s(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: v(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Pm = { class: "overflow-hidden !font-normal dark:text-white" }, Lg = /* @__PURE__ */ b({
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
    }, i = k(() => n.multiple ? l.value.map((u) => u.name).join(", ") : typeof l.value == "object" ? l.value.name : typeof l.value == "number" ? n.options.find((u) => u.id === l.value).name : n.placeholder), d = (u, p) => u.filter((g) => g.name.toLowerCase().includes(p.toLowerCase())), c = (u) => n.multiple ? l.value.find((p) => p.id === u.id) : typeof l.value == "object" ? l.value.id === u.id : typeof l.value == "number" ? l.value === u.id : !1;
    return ee(l, () => {
      n.multiple ? a("update:modelValue", l.value) : a("update:modelValue", l.value.id);
    }), (u, p) => (f(), y(s(Zs), {
      open: o.value,
      "onUpdate:open": p[1] || (p[1] = (g) => o.value = g)
    }, {
      default: v(() => [
        S(s(Xs), { "as-child": "" }, {
          default: v(() => [
            S(s(qe), {
              variant: "outline",
              role: "combobox",
              "aria-expanded": o.value,
              class: re(["justify-between", [u.widthClass]])
            }, {
              default: v(() => [
                te("div", Pm, [
                  u.$slots.selectedOptions ? w(u.$slots, "selectedOptions", {
                    key: 0,
                    selectedOptions: l.value
                  }) : (f(), R(J, { key: 1 }, [
                    Y(Z(i.value), 1)
                  ], 64))
                ]),
                S(s(Fv), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
              ]),
              _: 3
            }, 8, ["aria-expanded", "class"])
          ]),
          _: 3
        }),
        S(s(Js), {
          class: re(["!p-0", [u.widthClass]])
        }, {
          default: v(() => [
            S(s(Ws), {
              multiple: u.multiple,
              "filter-function": d,
              modelValue: l.value,
              "onUpdate:modelValue": p[0] || (p[0] = (g) => l.value = g)
            }, {
              default: v(() => [
                u.allowSearch ? (f(), y(s(qv), {
                  key: 0,
                  class: "h-9",
                  placeholder: u.placeholder
                }, null, 8, ["placeholder"])) : Q("", !0),
                S(s(Hv), null, {
                  default: v(() => [
                    Y(Z(u.noResults), 1)
                  ]),
                  _: 1
                }),
                S(s(Xv), null, {
                  default: v(() => [
                    S(s(Kv), null, {
                      default: v(() => [
                        (f(!0), R(J, null, he(u.options, (g) => (f(), y(s(Yv), {
                          key: g.id,
                          id: g.id,
                          value: g,
                          onSelect: (h) => r()
                        }, {
                          default: v(() => [
                            S(s(Do), {
                              class: re(["mr-2 size-4", [c(g) ? "opacity-100" : "opacity-0"]])
                            }, null, 8, ["class"]),
                            u.$slots.item ? w(u.$slots, "item", {
                              key: 0,
                              option: g
                            }) : (f(), R(J, { key: 1 }, [
                              Y(Z(g.name), 1)
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
}), Ng = /* @__PURE__ */ b({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = new Xe("en-US", {
      dateStyle: "long"
    }), l = M();
    return ee(l, () => {
      a("update:modelValue", l.value);
    }), de(() => {
      n.defaultValue && (l.value = n.defaultValue);
    }), (r, i) => (f(), y(s(Zs), null, {
      default: v(() => [
        S(s(Xs), { "as-child": "" }, {
          default: v(() => [
            S(s(qe), {
              variant: "outline",
              class: re([
                "w-[280px] justify-start text-left font-normal dark:text-white",
                !r.modelValue && "text-muted-foreground"
              ])
            }, {
              default: v(() => [
                S(s(Vv), { class: "mr-2 size-4" }),
                Y(" " + Z(l.value ? s(o).format(l.value.toDate(s($t)())) : r.placeholder), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }),
        S(s(Js), { class: "w-auto p-0" }, {
          default: v(() => [
            S(s(wv), {
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
}), Dm = { class: "relative" }, Om = {
  name: "Base",
  inheritAttrs: !1
}, zg = /* @__PURE__ */ b({
  ...Om,
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
        t.label && t.showLabel ? (f(), y(s(Ys), {
          key: 0,
          id: t.id
        }, {
          default: v(() => [
            Y(Z(t.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : Q("", !0),
        te("div", Dm, [
          w(t.$slots, "default"),
          t.showCharacterCount ? (f(), y(s(cm), {
            key: 0,
            count: (n = t.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[3px]"
          }, null, 8, ["count"])) : Q("", !0)
        ]),
        S(s(mm), { class: "mt-[3px] w-4/5" }, {
          default: v(() => [
            Y(Z(t.description), 1)
          ]),
          _: 1
        }),
        S(s(gm), { error: t.error }, null, 8, ["error"])
      ]);
    };
  }
});
var be = [];
for (var $n = 0; $n < 256; ++$n)
  be.push(($n + 256).toString(16).slice(1));
function Sm(e, t = 0) {
  return (be[e[t + 0]] + be[e[t + 1]] + be[e[t + 2]] + be[e[t + 3]] + "-" + be[e[t + 4]] + be[e[t + 5]] + "-" + be[e[t + 6]] + be[e[t + 7]] + "-" + be[e[t + 8]] + be[e[t + 9]] + "-" + be[e[t + 10]] + be[e[t + 11]] + be[e[t + 12]] + be[e[t + 13]] + be[e[t + 14]] + be[e[t + 15]]).toLowerCase();
}
var Ra, Em = new Uint8Array(16);
function Mm() {
  if (!Ra && (Ra = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ra))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ra(Em);
}
var Tm = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const ll = {
  randomUUID: Tm
};
function Am(e, t, a) {
  if (ll.randomUUID && !t && !e)
    return ll.randomUUID();
  e = e || {};
  var n = e.random || (e.rng || Mm)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Sm(n);
}
const Vm = { class: "flex items-center space-x-2" }, Im = ["src"], Rm = ["accept"], Wg = /* @__PURE__ */ b({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = "file-upload-" + Am(), l = k(() => i.value ? URL.createObjectURL(i.value) : null), r = a.currentImage ? a.currentImage : a.defaultImage, i = k({
      get: () => a.modelValue,
      set: (u) => n("update:modelValue", u)
    }), d = (u) => {
      i.value = u.target.files[0];
    }, c = () => document.getElementById(o).click();
    return (u, p) => (f(), R("div", Vm, [
      w(u.$slots, "image", {
        newImage: l.value,
        curImage: s(r)
      }, () => [
        te("img", {
          src: l.value ?? s(r),
          alt: "Image cannot be shown right now",
          class: "size-24 rounded-full dark:bg-slate-700"
        }, null, 8, Im)
      ]),
      te("input", {
        id: o,
        accept: u.accept,
        hidden: "",
        type: "file",
        onInput: d
      }, null, 40, Rm),
      S(s(qe), {
        variant: "secondary",
        onClick: c
      }, {
        default: v(() => p[0] || (p[0] = [
          Y(" Upload ")
        ])),
        _: 1
      })
    ]));
  }
}), Fm = ["disabled", "placeholder", "required", "type"], Ug = /* @__PURE__ */ b({
  __name: "Input",
  props: /* @__PURE__ */ Pn({
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
    const t = wl(e, "modelValue");
    return (a, n) => jt((f(), R("input", {
      "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o),
      disabled: a.disabled,
      placeholder: a.placeholder,
      required: a.required,
      type: a.type,
      class: re(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
        "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
        "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
      }])
    }, null, 10, Fm)), [
      [br, t.value]
    ]);
  }
}), Lm = /* @__PURE__ */ b({
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
    const o = le(e, t);
    return (l, r) => (f(), y(s(wf), j(G(s(o))), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nm = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(jf), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zm = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(Cf), E(s(n), {
      class: s(z)(
        "flex h-10 w-full items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300 [&>span]:line-clamp-1",
        t.class
      )
    }), {
      default: v(() => [
        w(o.$slots, "default"),
        S(s(Hf), { "as-child": "" }, {
          default: v(() => [
            S(s(js), { class: "size-4 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wm = /* @__PURE__ */ b({
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
    const a = e, n = t, o = k(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = le(o, n);
    return (r, i) => (f(), y(s($f), null, {
      default: v(() => [
        S(s(Mf), E({ ...s(l), ...r.$attrs }, {
          class: s(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            r.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: v(() => [
            S(s(Hm)),
            S(s(zf), {
              class: re(
                s(z)(
                  "p-1",
                  r.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: v(() => [
                w(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            S(s(Km))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), jg = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(Lf), E({
      class: s(z)("w-full p-1", t.class)
    }, a.value), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Um = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, jm = /* @__PURE__ */ b({
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
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(Vf), E(s(n), {
      class: s(z)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
        t.class
      )
    }), {
      default: v(() => [
        te("span", Um, [
          S(s(If), null, {
            default: v(() => [
              S(s(Do), { class: "size-4 text-primary-700 dark:text-primary-400" })
            ]),
            _: 1
          })
        ]),
        S(s(Vs), null, {
          default: v(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hg = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(Vs), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kg = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(Nf), {
      class: re(s(z)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Gg = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(Tf), E(a.value, {
      class: s(z)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), Hm = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(Wf), E(s(n), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          S(s(Lv), { class: "size-4 text-primary-900" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Km = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(Uf), E(s(n), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          S(s(js), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qg = /* @__PURE__ */ b({
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
    return ee(o, (l) => {
      if (l) {
        a("update:modelValue", l);
        return;
      }
      a("update:modelValue", null);
    }), (l, r) => (f(), y(s(Lm), {
      modelValue: o.value,
      "onUpdate:modelValue": r[0] || (r[0] = (i) => o.value = i)
    }, {
      default: v(() => [
        S(s(zm), null, {
          default: v(() => [
            S(s(Nm), null, {
              default: v(() => [
                Y(Z(o.value ?? l.placeholder), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        S(s(Wm), null, {
          default: v(() => [
            (f(!0), R(J, null, he(l.options, (i) => (f(), y(s(jm), { value: i }, {
              default: v(() => [
                l.$slots.options ? w(l.$slots, "options", {
                  key: 0,
                  item: i
                }) : (f(), R(J, { key: 1 }, [
                  Y(Z(i), 1)
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
});
function Qs(e) {
  return Hn() ? (Kn(e), !0) : !1;
}
function un(e) {
  return typeof e == "function" ? e() : s(e);
}
const Gm = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const qm = (e) => typeof e < "u", Ym = Object.prototype.toString, Zm = (e) => Ym.call(e) === "[object Object]", er = () => {
};
function Xm(e, t) {
  function a(...n) {
    return new Promise((o, l) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(l);
    });
  }
  return a;
}
const tr = (e) => e();
function Jm(e = tr) {
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
  return { isActive: ba(t), pause: a, resume: n, eventFilter: o };
}
function Qm(e) {
  return je();
}
function eh(...e) {
  if (e.length !== 1)
    return pl(...e);
  const t = e[0];
  return typeof t == "function" ? ba(yl(() => ({ get: t, set: er }))) : M(t);
}
function th(e, t, a = {}) {
  const {
    eventFilter: n = tr,
    ...o
  } = a;
  return ee(
    e,
    Xm(
      n,
      t
    ),
    o
  );
}
function ah(e, t, a = {}) {
  const {
    eventFilter: n,
    ...o
  } = a, { eventFilter: l, pause: r, resume: i, isActive: d } = Jm(n);
  return { stop: th(
    e,
    t,
    {
      ...o,
      eventFilter: l
    }
  ), pause: r, resume: i, isActive: d };
}
function ar(e, t = !0, a) {
  Qm() ? de(e, a) : t ? e() : oe(e);
}
function nr(e) {
  var t;
  const a = un(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const Ut = Gm ? window : void 0;
function sl(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = Ut) : [t, a, n, o] = e, !t)
    return er;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const l = [], r = () => {
    l.forEach((u) => u()), l.length = 0;
  }, i = (u, p, g, h) => (u.addEventListener(p, g, h), () => u.removeEventListener(p, g, h)), d = ee(
    () => [nr(t), un(o)],
    ([u, p]) => {
      if (r(), !u)
        return;
      const g = Zm(p) ? { ...p } : p;
      l.push(
        ...a.flatMap((h) => n.map((x) => i(u, h, x, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), r();
  };
  return Qs(c), c;
}
function nh() {
  const e = M(!1), t = je();
  return t && de(() => {
    e.value = !0;
  }, t), e;
}
function oh(e) {
  const t = nh();
  return k(() => (t.value, !!e()));
}
function lh(e, t = {}) {
  const { window: a = Ut } = t, n = oh(() => a && "matchMedia" in a && typeof a.matchMedia == "function");
  let o;
  const l = M(!1), r = (c) => {
    l.value = c.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", r) : o.removeListener(r));
  }, d = ge(() => {
    n.value && (i(), o = a.matchMedia(un(e)), "addEventListener" in o ? o.addEventListener("change", r) : o.addListener(r), l.value = o.matches);
  });
  return Qs(() => {
    d(), i(), o = void 0;
  }), l;
}
function sh(e) {
  return JSON.parse(JSON.stringify(e));
}
const Fa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, La = "__vueuse_ssr_handlers__", rh = /* @__PURE__ */ ih();
function ih() {
  return La in Fa || (Fa[La] = Fa[La] || {}), Fa[La];
}
function or(e, t) {
  return rh[e] || t;
}
function dh(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const uh = {
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
}, rl = "vueuse-storage";
function ch(e, t, a, n = {}) {
  var o;
  const {
    flush: l = "pre",
    deep: r = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: d = !0,
    mergeDefaults: c = !1,
    shallow: u,
    window: p = Ut,
    eventFilter: g,
    onError: h = (B) => {
      console.error(B);
    },
    initOnMounted: x
  } = n, m = (u ? jn : M)(typeof t == "function" ? t() : t);
  if (!a)
    try {
      a = or("getDefaultStorage", () => {
        var B;
        return (B = Ut) == null ? void 0 : B.localStorage;
      })();
    } catch (B) {
      h(B);
    }
  if (!a)
    return m;
  const _ = un(t), C = dh(_), P = (o = n.serializer) != null ? o : uh[C], { pause: $, resume: D } = ah(
    m,
    () => V(m.value),
    { flush: l, deep: r, eventFilter: g }
  );
  p && i && ar(() => {
    sl(p, "storage", W), sl(p, rl, L), x && W();
  }), x || W();
  function O(B, T) {
    p && p.dispatchEvent(new CustomEvent(rl, {
      detail: {
        key: e,
        oldValue: B,
        newValue: T,
        storageArea: a
      }
    }));
  }
  function V(B) {
    try {
      const T = a.getItem(e);
      if (B == null)
        O(T, null), a.removeItem(e);
      else {
        const I = P.write(B);
        T !== I && (a.setItem(e, I), O(T, I));
      }
    } catch (T) {
      h(T);
    }
  }
  function A(B) {
    const T = B ? B.newValue : a.getItem(e);
    if (T == null)
      return d && _ != null && a.setItem(e, P.write(_)), _;
    if (!B && c) {
      const I = P.read(T);
      return typeof c == "function" ? c(I, _) : C === "object" && !Array.isArray(I) ? { ..._, ...I } : I;
    } else return typeof T != "string" ? T : P.read(T);
  }
  function W(B) {
    if (!(B && B.storageArea !== a)) {
      if (B && B.key == null) {
        m.value = _;
        return;
      }
      if (!(B && B.key !== e)) {
        $();
        try {
          (B == null ? void 0 : B.newValue) !== P.write(m.value) && (m.value = A(B));
        } catch (T) {
          h(T);
        } finally {
          B ? oe(D) : D();
        }
      }
    }
  }
  function L(B) {
    W(B.detail);
  }
  return m;
}
function lr(e) {
  return lh("(prefers-color-scheme: dark)", e);
}
function ph(e = {}) {
  const {
    selector: t = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = Ut,
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
  }, g = lr({ window: o }), h = k(() => g.value ? "dark" : "light"), x = d || (r == null ? eh(n) : ch(r, n, l, { window: o, listenToStorageChanges: i })), m = k(() => x.value === "auto" ? h.value : x.value), _ = or(
    "updateHTMLAttrs",
    (D, O, V) => {
      const A = typeof D == "string" ? o == null ? void 0 : o.document.querySelector(D) : nr(D);
      if (!A)
        return;
      let W;
      if (u && (W = o.document.createElement("style"), W.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(W)), O === "class") {
        const L = V.split(/\s/g);
        Object.values(p).flatMap((B) => (B || "").split(/\s/g)).filter(Boolean).forEach((B) => {
          L.includes(B) ? A.classList.add(B) : A.classList.remove(B);
        });
      } else
        A.setAttribute(O, V);
      u && (o.getComputedStyle(W).opacity, document.head.removeChild(W));
    }
  );
  function C(D) {
    var O;
    _(t, a, (O = p[D]) != null ? O : D);
  }
  function P(D) {
    e.onChanged ? e.onChanged(D, C) : C(D);
  }
  ee(m, P, { flush: "post", immediate: !0 }), ar(() => P(m.value));
  const $ = k({
    get() {
      return c ? x.value : m.value;
    },
    set(D) {
      x.value = D;
    }
  });
  try {
    return Object.assign($, { store: x, system: h, state: m });
  } catch {
    return $;
  }
}
function fh(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: a = "",
    window: n = Ut
  } = e, o = ph({
    ...e,
    onChanged: (i, d) => {
      var c;
      e.onChanged ? (c = e.onChanged) == null || c.call(e, i === "dark", d, i) : d(i);
    },
    modes: {
      dark: t,
      light: a
    }
  }), l = k(() => o.system ? o.system.value : lr({ window: n }).value ? "dark" : "light");
  return k({
    get() {
      return o.value === "dark";
    },
    set(i) {
      const d = i ? "dark" : "light";
      l.value === d ? o.value = "auto" : o.value = d;
    }
  });
}
function vh(e, t, a, n = {}) {
  var o, l, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, h = je(), x = a || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((r = (l = h == null ? void 0 : h.proxy) == null ? void 0 : l.$emit) == null ? void 0 : r.bind(h == null ? void 0 : h.proxy));
  let m = c;
  m = m || `update:${t.toString()}`;
  const _ = ($) => i ? typeof i == "function" ? i($) : sh($) : $, C = () => qm(e[t]) ? _(e[t]) : p, P = ($) => {
    g ? g($) && x(m, $) : x(m, $);
  };
  if (d) {
    const $ = C(), D = M($);
    let O = !1;
    return ee(
      () => e[t],
      (V) => {
        O || (O = !0, D.value = _(V), oe(() => O = !1));
      }
    ), ee(
      D,
      (V) => {
        !O && (V !== e[t] || u) && P(V);
      },
      { deep: u }
    ), D;
  } else
    return k({
      get() {
        return C();
      },
      set($) {
        P($);
      }
    });
}
const mh = ["placeholder"], Yg = /* @__PURE__ */ b({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = vh(e, "modelValue", t, {
      passive: !0
    });
    return (l, r) => jt((f(), R("textarea", {
      "onUpdate:modelValue": r[0] || (r[0] = (i) => ga(o) ? o.value = i : null),
      placeholder: l.placeholder,
      class: re(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
        "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !l.error,
        "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": l.error
      }])
    }, null, 10, mh)), [
      [wr, s(o)]
    ]);
  }
}), hh = /* @__PURE__ */ b({
  __name: "Toggle",
  props: /* @__PURE__ */ Pn({
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
  emits: /* @__PURE__ */ Pn(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const a = t, n = e, o = wl(e, "modelValue");
    ee(o, () => {
      a("update:modelValue", o.value);
    });
    const l = k(() => {
      const { class: i, ...d } = n;
      return d;
    }), r = le(l, a);
    return (i, d) => (f(), y(s(Zf), E({
      checked: o.value,
      "onUpdate:checked": d[0] || (d[0] = (c) => o.value = c)
    }, s(r), {
      class: s(z)(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-600 data-[state=unchecked]:bg-primary-300 dark:focus-visible:ring-primary-300 dark:focus-visible:ring-offset-primary-950 dark:data-[state=checked]:bg-primary-800 dark:data-[state=unchecked]:bg-primary-600",
        n.class
      )
    }), {
      default: v(({ checked: c }) => [
        S(s(Xf), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-primary-950" }, {
          default: v(() => [
            c ? w(i.$slots, "checked", { key: 0 }) : Q("", !0),
            c ? Q("", !0) : w(i.$slots, "not-checked", { key: 1 })
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["checked", "class"]));
  }
}), gh = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(Rp), E(a.value, {
      class: s(z)("flex h-9 w-9 items-center justify-center", t.class)
    }), {
      default: v(() => [
        S(s(Nv), { class: "size-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), yh = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {},
    href: {},
    is: { default: "a" }
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(Fp), j(G(a.value)), {
      default: v(() => [
        S(s(qe), {
          href: n.href,
          is: n.is,
          as: n.as,
          class: "size-10 p-0",
          variant: "outline"
        }, {
          default: v(() => [
            S(s(Iv), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["href", "is", "as"])
      ]),
      _: 1
    }, 16));
  }
}), bh = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {},
    href: {},
    is: { default: "a" }
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(Lp), j(G(a.value)), {
      default: v(() => [
        S(s(qe), {
          href: n.href,
          is: n.is,
          as: n.as,
          class: "size-10 p-0",
          variant: "outline"
        }, {
          default: v(() => [
            S(s(Rv), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["href", "is", "as"])
      ]),
      _: 1
    }, 16));
  }
}), wh = /* @__PURE__ */ b({
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
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(Up), j(G(a.value)), {
      default: v(() => [
        S(s(qe), {
          class: re(s(z)("size-10 p-0", t.class)),
          is: n.is,
          as: n.as,
          href: n.href,
          variant: "outline"
        }, {
          default: v(() => [
            S(s(Ks), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["class", "is", "as", "href"])
      ]),
      _: 1
    }, 16));
  }
}), _h = /* @__PURE__ */ b({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    href: {},
    class: {},
    is: { default: "a" }
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(jp), j(G(a.value)), {
      default: v(() => [
        S(s(qe), {
          class: re(s(z)("size-10 p-0", t.class)),
          href: n.href,
          is: n.is,
          as: n.as,
          variant: "outline"
        }, {
          default: v(() => [
            S(s(Hs), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["class", "href", "is", "as"])
      ]),
      _: 1
    }, 16));
  }
}), xh = { class: "my-auto text-slate-400 dark:text-slate-100" }, Ch = /* @__PURE__ */ b({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, a) => (f(), R("div", xh, " Showing " + Z(t.min) + " to " + Z(t.max) + " of " + Z(t.total) + " results ", 1));
  }
}), Zg = /* @__PURE__ */ b({
  __name: "DarkModeToggle",
  setup(e) {
    const t = fh({
      selector: "html"
    });
    return (a, n) => (f(), y(hh, {
      modelValue: s(t),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => ga(t) ? t.value = o : null)
    }, {
      checked: v(() => [
        S(s(Wv), { class: "m-auto mt-0.5 size-4 text-primary-900" })
      ]),
      "not-checked": v(() => [
        S(s(Uv), { class: "m-auto size-5 text-primary-900" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Xg = /* @__PURE__ */ b({
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
    return (o, l) => (f(), R(J, null, [
      S(s(ha), {
        onClick: n,
        class: re(t.class)
      }, {
        default: v(() => [
          (f(!0), R(J, null, he(o.headers, (r) => (f(), y(s(Ya), {
            key: r.value
          }, {
            default: v(() => [
              o.$slots[`cell_header_${r.value}`] ? w(o.$slots, `cell_header_${r.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (f(), R(J, { key: 1 }, [
                Y(Z(o.row[r.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (f(), y(s(Un), { key: 0 }, {
            default: v(() => [
              w(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : Q("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (f(!0), R(J, { key: 0 }, he(o.subRows, (r, i) => (f(), y(s(ha), { key: i }, {
        default: v(() => [
          (f(!0), R(J, null, he(o.headers, (d) => (f(), y(s(Ya), {
            key: d.value
          }, {
            default: v(() => [
              o.$slots[`subrow_cell_${d.value}`] ? w(o.$slots, `subrow_cell_${d.value}`, {
                key: 0,
                item: r,
                open: a.value
              }) : (f(), R(J, { key: 1 }, [
                Y(Z("subrow_cell_" + d.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (f(), y(s(Un), { key: 0 }, {
            default: v(() => [
              w(o.$slots, "sub_row_actions", {
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
}), $h = { class: "relative w-full overflow-auto" }, kh = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("div", $h, [
      te("table", {
        class: re(s(z)("w-full caption-bottom text-sm", t.class))
      }, [
        w(a.$slots, "default")
      ], 2)
    ]));
  }
}), Bh = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("tbody", {
      class: re(s(z)("[&_tr:last-child]:border-0", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Ya = /* @__PURE__ */ b({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("td", {
      class: re(["p-4 align-middle dark:text-slate-300 [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Ph = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("th", {
      class: re(
        s(z)(
          "h-12 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400 [&:has([role=checkbox])]:pr-0",
          t.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Dh = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("thead", {
      class: re(s(z)("[&_tr]:border-b", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Jg = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("tfoot", {
      class: re(
        s(z)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0",
          t.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), ha = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("tr", {
      class: re(
        s(z)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          t.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Un = /* @__PURE__ */ b({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("td", {
      class: re(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Oh = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), R("caption", {
      class: re(s(z)("mt-4 text-sm text-slate-500 dark:text-slate-400", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Sh = { class: "flex items-center justify-center py-10" }, Qg = /* @__PURE__ */ b({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(ha, null, {
      default: v(() => [
        S(Ya, E({
          class: s(z)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, a.value), {
          default: v(() => [
            te("div", Sh, [
              w(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ey = /* @__PURE__ */ b({
  __name: "Datatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, a) => (f(), y(s(kh), null, {
      default: v(() => [
        t.caption ? (f(), y(s(Oh), { key: 0 }, {
          default: v(() => [
            Y(Z(t.caption), 1)
          ]),
          _: 1
        })) : Q("", !0),
        S(s(Dh), null, {
          default: v(() => [
            S(s(ha), null, {
              default: v(() => [
                (f(!0), R(J, null, he(t.headers, (n, o) => (f(), y(s(Ph), null, {
                  default: v(() => [
                    t.$slots[`header_${t.headers[o].value}`] ? w(t.$slots, `header_${t.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (f(), R(J, { key: 1 }, [
                      Y(Z(n.name), 1)
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
        S(s(Bh), null, {
          default: v(() => [
            w(t.$slots, "default", { item: t.rows }, () => [
              (f(!0), R(J, null, he(t.rows, (n, o) => (f(), y(s(ha), { key: o }, {
                default: v(() => [
                  (f(!0), R(J, null, he(t.headers, (l) => (f(), y(s(Ya), {
                    key: l.value
                  }, {
                    default: v(() => [
                      t.$slots[`cell_${l.value}`] ? w(t.$slots, `cell_${l.value}`, {
                        key: 0,
                        item: n
                      }) : (f(), R(J, { key: 1 }, [
                        Y(Z(n[l.value]), 1)
                      ], 64))
                    ]),
                    _: 2
                  }, 1024))), 128)),
                  t.$slots.row_actions ? (f(), y(s(Un), { key: 0 }, {
                    default: v(() => [
                      w(t.$slots, "row_actions", { item: n })
                    ]),
                    _: 2
                  }, 1024)) : Q("", !0)
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
}), Eh = /* @__PURE__ */ b({
  __name: "Dropdown",
  props: {
    triggerClass: {},
    widthClass: { default: "w-56" }
  },
  setup(e) {
    return (t, a) => (f(), y(s(Jv), null, {
      default: v(({ open: n }) => [
        S(s(em), {
          "as-child": "",
          class: re([t.triggerClass])
        }, {
          default: v(() => [
            w(t.$slots, "trigger", { open: n })
          ]),
          _: 2
        }, 1032, ["class"]),
        S(s(tm), {
          class: re([t.widthClass])
        }, {
          default: v(() => [
            w(t.$slots, "content")
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }));
  }
}), Mh = { class: "text-black dark:text-slate-400" }, ty = /* @__PURE__ */ b({
  __name: "Modal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const a = t, n = () => a("close");
    return (o, l) => (f(), y(s(Us), { open: o.open }, {
      default: v(() => [
        S(s(Ev), null, {
          default: v(() => [
            w(o.$slots, "trigger")
          ]),
          _: 3
        }),
        S(s(qs), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: re("max-w-" + o.size)
        }, {
          default: v(() => [
            S(s(Mv), null, {
              default: v(() => [
                S(s(Tv), null, {
                  default: v(() => {
                    var r;
                    return [
                      o.$slots.header ? w(o.$slots, "header", { key: 0 }) : (r = o.headerData) != null && r.title ? (f(), R(J, { key: 1 }, [
                        Y(Z(o.headerData.title), 1)
                      ], 64)) : Q("", !0)
                    ];
                  }),
                  _: 3
                }),
                S(s(Av), null, {
                  default: v(() => {
                    var r;
                    return [
                      o.$slots.description ? w(o.$slots, "description", { key: 0 }) : (r = o.headerData) != null && r.description ? (f(), R(J, { key: 1 }, [
                        Y(Z(o.headerData.description), 1)
                      ], 64)) : Q("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            te("div", Mh, [
              o.$slots.content ? w(o.$slots, "content", { key: 0 }) : w(o.$slots, "default", { key: 1 })
            ]),
            S(s(jv), null, {
              default: v(() => [
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
}), Th = { class: "justify-between sm:flex" }, ay = /* @__PURE__ */ b({
  __name: "Pagination",
  props: {
    data: {},
    is: { default: "a" },
    as: {}
  },
  setup(e) {
    const t = e, a = () => t.data.current_page === 1 ? t.data.data.length === 0 ? 0 : 1 : t.data.current_page === t.data.last_page ? t.data.total - t.data.data.length : t.data.current_page * t.data.per_page - t.data.per_page, n = () => t.data.current_page === 1 ? t.data.data.length : t.data.current_page === t.data.last_page ? t.data.total : t.data.current_page * t.data.per_page;
    return (o, l) => (f(), R("div", Th, [
      S(s(Ch), {
        min: a(),
        max: n(),
        total: o.data.total
      }, null, 8, ["min", "max", "total"]),
      S(s(Ip), null, {
        default: v(() => [
          S(s(Wp), { class: "flex items-center gap-1" }, {
            default: v(() => [
              S(s(yh), {
                is: o.is,
                as: o.as,
                href: o.data.first_page_url
              }, null, 8, ["is", "as", "href"]),
              o.data.prev_page_url ? (f(), y(s(_h), {
                key: 0,
                is: o.is,
                as: o.as,
                href: o.data.prev_page_url
              }, null, 8, ["is", "as", "href"])) : Q("", !0),
              (f(!0), R(J, null, he(o.data.links, (r, i) => (f(), R(J, null, [
                i < 5 ? (f(), R("div", { key: i }, [
                  S(s(qe), {
                    href: r.url,
                    is: o.is,
                    as: o.as,
                    class: "size-10 p-0",
                    variant: r.active ? "primary" : "outline"
                  }, {
                    default: v(() => [
                      Y(Z(r.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["href", "is", "as", "variant"])
                ])) : Q("", !0)
              ], 64))), 256)),
              o.data.links.length > 5 ? (f(), y(s(gh), { key: 1 })) : Q("", !0),
              o.data.next_page_url ? (f(), y(s(wh), {
                key: 2,
                is: o.is,
                as: o.as,
                href: o.data.next_page_url
              }, null, 8, ["is", "as", "href"])) : Q("", !0),
              S(s(bh), {
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
}), Ah = /* @__PURE__ */ b({
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
    const o = le(e, t);
    return (l, r) => (f(), y(s(Qf), j(G(s(o))), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ny = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(av), E(s(n), {
      class: s(z)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        t.class
      )
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vh = /* @__PURE__ */ b({
  __name: "TabsItem",
  props: {
    class: {},
    is: { default: "a" },
    tab: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(We(a.is), {
      href: a.tab.href,
      class: re([
        a.tab.active ? "bg-white text-primary-500 hover:bg-opacity-80 dark:bg-slate-950 dark:text-primary-400" : "hover:bg-white dark:hover:bg-slate-900",
        s(z)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
          t.class
        )
      ])
    }, {
      default: v(() => {
        var o;
        return [
          (o = a.tab) != null && o.icon ? (f(), y(We(a.tab.icon), {
            key: 0,
            class: "size-5"
          })) : Q("", !0),
          Y(" " + Z(a.tab.name), 1)
        ];
      }),
      _: 1
    }, 8, ["href", "class"]));
  }
}), il = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(ev), E(a.value, {
      class: s(z)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        t.class
      )
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oy = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(tv), E({
      class: s(z)(
        "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        t.class
      )
    }, a.value), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ih = {}, Rh = { class: "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function Fh(e, t) {
  return f(), R("div", Rh, [
    w(e.$slots, "default")
  ]);
}
const Lh = /* @__PURE__ */ wa(Ih, [["render", Fh]]), ly = /* @__PURE__ */ b({
  __name: "Tabs",
  props: {
    is: { default: "a" },
    tabs: {}
  },
  setup(e) {
    const t = e, a = k(
      () => t.tabs.find((n) => n.active)
    );
    return (n, o) => (f(), y(s(Ah), null, {
      default: v(() => [
        S(s(il), { class: "hidden gap-2 md:block" }, {
          default: v(() => [
            (f(!0), R(J, null, he(n.tabs, (l) => (f(), y(s(Vh), {
              key: l.name,
              is: n.is,
              tab: l
            }, null, 8, ["is", "tab"]))), 128))
          ]),
          _: 1
        }),
        S(s(il), { class: "flex md:hidden" }, {
          default: v(() => [
            S(Eh, { "trigger-class": "size-full" }, {
              trigger: v(() => [
                S(s(qe), { variant: "secondary" }, {
                  default: v(() => {
                    var l;
                    return [
                      Y(Z(((l = a.value) == null ? void 0 : l.name) ?? "Select an option"), 1)
                    ];
                  }),
                  _: 1
                })
              ]),
              content: v(() => [
                (f(!0), R(J, null, he(n.tabs, (l) => (f(), y(s(am), {
                  href: l.href,
                  key: l.name
                }, {
                  default: v(() => [
                    Y(Z(l.name), 1)
                  ]),
                  _: 2
                }, 1032, ["href"]))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        S(s(Lh), null, {
          default: v(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Nh = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, sy = /* @__PURE__ */ b({
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
    const a = e, n = t, o = k(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = le(o, n);
    return (r, i) => (f(), y(s(af), E({
      class: s(z)("p-3", a.class)
    }, s(l)), {
      default: v(({ grid: d, weekDays: c }) => [
        S(s(Gh), null, {
          default: v(() => [
            S(s(Zh)),
            S(s(qh)),
            S(s(Yh))
          ]),
          _: 1
        }),
        te("div", Nh, [
          (f(!0), R(J, null, he(d, (u) => (f(), y(s(Uh), {
            key: u.value.toString()
          }, {
            default: v(() => [
              S(s(Hh), null, {
                default: v(() => [
                  S(s(dl), null, {
                    default: v(() => [
                      (f(!0), R(J, null, he(c, (p) => (f(), y(s(Kh), { key: p }, {
                        default: v(() => [
                          Y(Z(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              S(s(jh), null, {
                default: v(() => [
                  (f(!0), R(J, null, he(u.rows, (p, g) => (f(), y(s(dl), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: v(() => [
                      (f(!0), R(J, null, he(p, (h) => (f(), y(s(zh), {
                        key: h.toString(),
                        date: h
                      }, {
                        default: v(() => [
                          S(s(Wh), {
                            day: h,
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
}), zh = /* @__PURE__ */ b({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(sf), E({
      class: s(z)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        t.class
      )
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wh = /* @__PURE__ */ b({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(vf), E({
      class: s(z)(
        s(St)({ variant: "ghost" }),
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
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Uh = /* @__PURE__ */ b({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(lf), E({
      class: s(z)("w-full border-collapse space-y-1", t.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jh = /* @__PURE__ */ b({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(pf), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hh = /* @__PURE__ */ b({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(cf), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dl = /* @__PURE__ */ b({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(ff), E({
      class: s(z)("mt-2 flex w-full", t.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kh = /* @__PURE__ */ b({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(rf), E({
      class: s(z)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gh = /* @__PURE__ */ b({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(nf), E({
      class: s(z)("relative flex w-full items-center justify-between pt-1", t.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qh = /* @__PURE__ */ b({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(of), E({
      class: s(z)("text-sm font-medium", t.class)
    }, s(n)), {
      default: v(({ headingValue: r }) => [
        w(o.$slots, "default", { headingValue: r }, () => [
          Y(Z(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yh = /* @__PURE__ */ b({
  __name: "RangeCalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(df), E({
      class: s(z)(
        s(St)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          S(s(Ks), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zh = /* @__PURE__ */ b({
  __name: "RangeCalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ne(a);
    return (o, l) => (f(), y(s(uf), E({
      class: s(z)(
        s(St)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          S(s(Hs), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xh = 5, Jh = 5e6, at = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let kn = 0;
function Qh() {
  return kn = (kn + 1) % Number.MAX_VALUE, kn.toString();
}
const Bn = /* @__PURE__ */ new Map();
function ul(e) {
  if (Bn.has(e)) return;
  const t = setTimeout(() => {
    Bn.delete(e), da({
      type: at.REMOVE_TOAST,
      toastId: e
    });
  }, Jh);
  Bn.set(e, t);
}
const Me = M({
  toasts: []
});
function da(e) {
  switch (e.type) {
    case at.ADD_TOAST:
      Me.value.toasts = [e.toast, ...Me.value.toasts].slice(0, Xh);
      break;
    case at.UPDATE_TOAST:
      Me.value.toasts = Me.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case at.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? ul(t) : Me.value.toasts.forEach((a) => {
        ul(a.id);
      }), Me.value.toasts = Me.value.toasts.map(
        (a) => a.id === t || t === void 0 ? {
          ...a,
          open: !1
        } : a
      );
      break;
    }
    case at.REMOVE_TOAST:
      e.toastId === void 0 ? Me.value.toasts = [] : Me.value.toasts = Me.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function eg() {
  return {
    toasts: k(() => Me.value.toasts),
    toast: tg,
    dismiss: (e) => da({ type: at.DISMISS_TOAST, toastId: e })
  };
}
function tg(e) {
  const t = Qh(), a = (o) => da({
    type: at.UPDATE_TOAST,
    toast: { ...o, id: t }
  }), n = () => da({ type: at.DISMISS_TOAST, toastId: t });
  return da({
    type: at.ADD_TOAST,
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
const ag = { class: "flex gap-3" }, ng = { class: "grid gap-1" }, ry = /* @__PURE__ */ b({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = eg();
    return (a, n) => (f(), y(s(dg), null, {
      default: v(() => [
        (f(!0), R(J, null, he(s(t), (o) => (f(), y(s(og), E({
          key: o.id,
          ref_for: !0
        }, o, { class: "my-1" }), {
          default: v(() => [
            te("div", ag, [
              (f(), y(We(o.icon), {
                class: re(s(z)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              te("div", ng, [
                o.title ? (f(), y(s(ig), { key: 0 }, {
                  default: v(() => [
                    Y(Z(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : Q("", !0),
                o.description ? (f(), R(J, { key: 1 }, [
                  _r(o.description) ? (f(), y(s(cl), { key: 0 }, {
                    default: v(() => [
                      (f(), y(We(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (f(), y(s(cl), { key: 1 }, {
                    default: v(() => [
                      Y(Z(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : Q("", !0),
                S(s(rg))
              ]),
              (f(), y(We(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        S(s(lg))
      ]),
      _: 1
    }));
  }
}), og = /* @__PURE__ */ b({
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
    const a = e, n = t, o = k(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = le(o, n);
    return (r, i) => (f(), y(s(vv), E(s(l), {
      class: s(z)(s(ug)({ variant: r.variant }), a.class),
      "onUpdate:open": r.onOpenChange
    }), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), lg = /* @__PURE__ */ b({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(hv), E(a.value, {
      class: s(z)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), iy = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(mv), j(G(a.value)), {
      default: v(() => [
        S(s(qe), {
          variant: n.variant,
          class: re(t.class)
        }, {
          default: v(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["variant", "class"])
      ]),
      _: 3
    }, 16));
  }
});
function sg(e, t) {
  return f(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    te("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  ]);
}
const rg = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(zs), E(a.value, {
      class: s(z)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: v(() => [
        S(s(sg), { class: "size-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), ig = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(gv), E(a.value, {
      class: s(z)("text-sm font-semibold", t.class)
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cl = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(s(yv), E({
      class: s(z)("text-sm opacity-90", t.class)
    }, a.value), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dg = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(s(ov), j(G(t)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ug = Yn(
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
);
export {
  vg as Badge,
  zg as Base,
  Qv as BaseDropdownMenuItem,
  qe as Button,
  wv as Calendar,
  _v as CalendarCell,
  xv as CalendarCellTrigger,
  Cv as CalendarGrid,
  $v as CalendarGridBody,
  kv as CalendarGridHead,
  ol as CalendarGridRow,
  Bv as CalendarHeadCell,
  Pv as CalendarHeader,
  Dv as CalendarHeading,
  Ov as CalendarNextButton,
  Sv as CalendarPrevButton,
  cm as CharacterCount,
  Fg as Checkbox,
  Xg as CollapsibleTableRow,
  Lg as Combobox,
  Ws as Command,
  xg as CommandDialog,
  Hv as CommandEmpty,
  Kv as CommandGroup,
  qv as CommandInput,
  Yv as CommandItem,
  Xv as CommandList,
  Cg as CommandSeparator,
  $g as CommandShortcut,
  fg as Container,
  Zg as DarkModeToggle,
  ey as Datatable,
  Ng as DatePicker,
  mm as Description,
  Us as Dialog,
  wg as DialogClose,
  qs as DialogContent,
  Av as DialogDescription,
  jv as DialogFooter,
  Mv as DialogHeader,
  _g as DialogScrollContent,
  Tv as DialogTitle,
  Ev as DialogTrigger,
  Eh as Dropdown,
  Jv as DropdownMenu,
  Dg as DropdownMenuCheckboxItem,
  tm as DropdownMenuContent,
  kg as DropdownMenuGroup,
  Pg as DropdownMenuItem,
  Mg as DropdownMenuLabel,
  am as DropdownMenuLink,
  Cp as DropdownMenuPortal,
  Bg as DropdownMenuRadioGroup,
  Og as DropdownMenuRadioItem,
  Eg as DropdownMenuSeparator,
  Sg as DropdownMenuShortcut,
  Tg as DropdownMenuSub,
  Vg as DropdownMenuSubContent,
  Ag as DropdownMenuSubTrigger,
  em as DropdownMenuTrigger,
  gm as Error,
  Ig as Form,
  $m as FormElement,
  Rg as FormGrid,
  Wg as ImageUpload,
  Ug as Input,
  Ys as Label,
  ty as Modal,
  ay as Pagination,
  Ch as PaginationDetails,
  gh as PaginationEllipsis,
  yh as PaginationFirst,
  bh as PaginationLast,
  Wp as PaginationList,
  bg as PaginationListItem,
  wh as PaginationNext,
  _h as PaginationPrev,
  Ip as PaginationRoot,
  Zs as Popover,
  Js as PopoverContent,
  Xs as PopoverTrigger,
  sy as RangeCalendar,
  zh as RangeCalendarCell,
  Wh as RangeCalendarCellTrigger,
  Uh as RangeCalendarGrid,
  jh as RangeCalendarGridBody,
  Hh as RangeCalendarGridHead,
  dl as RangeCalendarGridRow,
  Kh as RangeCalendarHeadCell,
  Gh as RangeCalendarHeader,
  qh as RangeCalendarHeading,
  Yh as RangeCalendarNextButton,
  Zh as RangeCalendarPrevButton,
  qg as Select,
  Wm as SelectContent,
  jg as SelectGroup,
  jm as SelectItem,
  Hg as SelectItemText,
  Kg as SelectLabel,
  Lm as SelectRoot,
  Km as SelectScrollDownButton,
  Hm as SelectScrollUpButton,
  Gg as SelectSeparator,
  zm as SelectTrigger,
  Nm as SelectValue,
  Lh as TabBaseContent,
  kh as Table,
  Bh as TableBody,
  Oh as TableCaption,
  Ya as TableCell,
  Qg as TableEmpty,
  Jg as TableFooter,
  Ph as TableHead,
  Dh as TableHeader,
  ha as TableRow,
  Un as TableRowAction,
  ly as Tabs,
  oy as TabsContent,
  Vh as TabsItem,
  il as TabsList,
  Ah as TabsRoot,
  ny as TabsTrigger,
  Yg as TextArea,
  og as Toast,
  iy as ToastAction,
  rg as ToastClose,
  cl as ToastDescription,
  dg as ToastProvider,
  ig as ToastTitle,
  lg as ToastViewport,
  ry as Toaster,
  hh as Toggle,
  oi as badgeVariants,
  St as buttonVariants,
  pg as preset,
  tg as toast,
  ug as toastVariants,
  eg as useToast
};
