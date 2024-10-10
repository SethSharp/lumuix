import * as So from "vue";
import { openBlock as v, createElementBlock as F, renderSlot as w, defineComponent as b, normalizeClass as re, unref as l, computed as k, ref as M, shallowRef as Hn, watch as Q, getCurrentScope as Kn, onScopeDispose as Gn, shallowReadonly as Et, getCurrentInstance as je, toRef as pl, camelize as fl, Comment as ir, mergeProps as E, cloneVNode as dr, h as Ne, toRefs as me, onMounted as de, createBlock as y, withCtx as f, normalizeProps as j, guardReactiveProps as G, reactive as vl, createVNode as O, createCommentVNode as J, createElementVNode as oe, toDisplayString as Z, createTextVNode as Y, withKeys as ze, withModifiers as _e, Fragment as ee, watchEffect as ge, markRaw as ur, nextTick as ne, watchSyncEffect as cr, withDirectives as jt, vShow as qn, isRef as ya, resolveDynamicComponent as We, renderList as he, Teleport as Xa, onBeforeUnmount as Yn, useSlots as pr, onBeforeMount as fr, normalizeStyle as ba, effectScope as ml, toHandlerKey as vr, onUnmounted as Ct, vModelSelect as mr, inject as hl, provide as gl, customRef as yl, readonly as wa, onBeforeUpdate as hr, onUpdated as gr, mergeDefaults as bl, watchPostEffect as yr, mergeModels as Dn, useModel as wl, vModelDynamic as br, vModelText as wr, isVNode as _r } from "vue";
const cg = {
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
}, _a = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, o] of t)
    a[n] = o;
  return a;
}, xr = {}, Cr = { class: "p-6" };
function $r(e, t) {
  return v(), F("div", Cr, [
    w(e.$slots, "default")
  ]);
}
const pg = /* @__PURE__ */ _a(xr, [["render", $r]]);
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
const Eo = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Mo = kr, Zn = (e, t) => (a) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Mo(e, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((u) => {
    const c = a == null ? void 0 : a[u], p = s == null ? void 0 : s[u];
    if (c === null) return null;
    const g = Eo(c) || Eo(p);
    return o[u][g];
  }), r = a && Object.entries(a).reduce((u, c) => {
    let [p, g] = c;
    return g === void 0 || (u[p] = g), u;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, c) => {
    let { class: p, className: g, ...m } = c;
    return Object.entries(m).every((x) => {
      let [h, _] = x;
      return Array.isArray(_) ? _.includes({
        ...s,
        ...r
      }[h]) : {
        ...s,
        ...r
      }[h] === _;
    }) ? [
      ...u,
      p,
      g
    ] : u;
  }, []);
  return Mo(e, i, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, Xn = "-", Br = (e) => {
  const t = Dr(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const r = i.split(Xn);
      return r[0] === "" && r.length !== 1 && r.shift(), xl(r, t) || Pr(i);
    },
    getConflictingClassGroupIds: (i, r) => {
      const d = a[i] || [];
      return r && n[i] ? [...d, ...n[i]] : d;
    }
  };
}, xl = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const a = e[0], n = t.nextPart.get(a), o = n ? xl(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Xn);
  return (i = t.validators.find(({
    validator: r
  }) => r(s))) == null ? void 0 : i.classGroupId;
}, Ao = /^\[(.+)\]$/, Pr = (e) => {
  if (Ao.test(e)) {
    const t = Ao.exec(e)[1], a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
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
  return Sr(Object.entries(e.classGroups), a).forEach(([s, i]) => {
    On(i, n, s, t);
  }), n;
}, On = (e, t, a, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : To(t, o);
      s.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (Or(o)) {
        On(o(n), t, a, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      On(i, To(t, s), a, n);
    });
  });
}, To = (e, t) => {
  let a = e;
  return t.split(Xn).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Or = (e) => e.isThemeGetter, Sr = (e, t) => t ? e.map(([a, n]) => {
  const o = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, r]) => [t + i, r])) : s);
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
  const o = (s, i) => {
    a.set(s, i), t++, t > e && (t = 0, n = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = a.get(s);
      if (i !== void 0)
        return i;
      if ((i = n.get(s)) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      a.has(s) ? a.set(s, i) : o(s, i);
    }
  };
}, Cl = "!", Mr = (e) => {
  const {
    separator: t,
    experimentalParseClassName: a
  } = e, n = t.length === 1, o = t[0], s = t.length, i = (r) => {
    const d = [];
    let u = 0, c = 0, p;
    for (let _ = 0; _ < r.length; _++) {
      let C = r[_];
      if (u === 0) {
        if (C === o && (n || r.slice(_, _ + s) === t)) {
          d.push(r.slice(c, _)), c = _ + s;
          continue;
        }
        if (C === "/") {
          p = _;
          continue;
        }
      }
      C === "[" ? u++ : C === "]" && u--;
    }
    const g = d.length === 0 ? r : r.substring(c), m = g.startsWith(Cl), x = m ? g.substring(1) : g, h = p && p > c ? p - c : void 0;
    return {
      modifiers: d,
      hasImportantModifier: m,
      baseClassName: x,
      maybePostfixModifierPosition: h
    };
  };
  return a ? (r) => a({
    className: r,
    parseClassName: i
  }) : i;
}, Ar = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let a = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...a.sort(), n), a = []) : a.push(n);
  }), t.push(...a.sort()), t;
}, Tr = (e) => ({
  cache: Er(e.cacheSize),
  parseClassName: Mr(e),
  ...Br(e)
}), Ir = /\s+/, Vr = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(Ir);
  let r = "";
  for (let d = i.length - 1; d >= 0; d -= 1) {
    const u = i[d], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: m
    } = a(u);
    let x = !!m, h = n(x ? g.substring(0, m) : g);
    if (!h) {
      if (!x) {
        r = u + (r.length > 0 ? " " + r : r);
        continue;
      }
      if (h = n(g), !h) {
        r = u + (r.length > 0 ? " " + r : r);
        continue;
      }
      x = !1;
    }
    const _ = Ar(c).join(":"), C = p ? _ + Cl : _, P = C + h;
    if (s.includes(P))
      continue;
    s.push(P);
    const $ = o(h, x);
    for (let D = 0; D < $.length; ++D) {
      const S = $[D];
      s.push(C + S);
    }
    r = u + (r.length > 0 ? " " + r : r);
  }
  return r;
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
  let a, n, o, s = i;
  function i(d) {
    const u = t.reduce((c, p) => p(c), e());
    return a = Tr(u), n = a.cache.get, o = a.cache.set, s = r, r(d);
  }
  function r(d) {
    const u = n(d);
    if (u)
      return u;
    const c = Vr(d, a);
    return o(d, c), c;
  }
  return function() {
    return s(Rr.apply(null, arguments));
  };
}
const pe = (e) => {
  const t = (a) => a[e] || [];
  return t.isThemeGetter = !0, t;
}, kl = /^\[(?:([a-z-]+):)?(.+)\]$/i, Lr = /^\d+\/\d+$/, Nr = /* @__PURE__ */ new Set(["px", "full", "screen"]), zr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Wr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ur = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, jr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Hr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ze = (e) => Tt(e) || Nr.has(e) || Lr.test(e), it = (e) => Ht(e, "length", Qr), Tt = (e) => !!e && !Number.isNaN(Number(e)), pn = (e) => Ht(e, "number", Tt), sa = (e) => !!e && Number.isInteger(Number(e)), Kr = (e) => e.endsWith("%") && Tt(e.slice(0, -1)), X = (e) => kl.test(e), dt = (e) => zr.test(e), Gr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), qr = (e) => Ht(e, Gr, Bl), Yr = (e) => Ht(e, "position", Bl), Zr = /* @__PURE__ */ new Set(["image", "url"]), Xr = (e) => Ht(e, Zr, ti), Jr = (e) => Ht(e, "", ei), ra = () => !0, Ht = (e, t, a) => {
  const n = kl.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : a(n[2]) : !1;
}, Qr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Wr.test(e) && !Ur.test(e)
), Bl = () => !1, ei = (e) => jr.test(e), ti = (e) => Hr.test(e), ai = () => {
  const e = pe("colors"), t = pe("spacing"), a = pe("blur"), n = pe("brightness"), o = pe("borderColor"), s = pe("borderRadius"), i = pe("borderSpacing"), r = pe("borderWidth"), d = pe("contrast"), u = pe("grayscale"), c = pe("hueRotate"), p = pe("invert"), g = pe("gap"), m = pe("gradientColorStops"), x = pe("gradientColorStopPositions"), h = pe("inset"), _ = pe("margin"), C = pe("opacity"), P = pe("padding"), $ = pe("saturate"), D = pe("scale"), S = pe("sepia"), I = pe("skew"), T = pe("space"), W = pe("translate"), L = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", X, t], V = () => [X, t], K = () => ["", Ze, it], H = () => ["auto", Tt, X], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], q = () => ["solid", "dashed", "dotted", "double", "none"], te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ue = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], fe = () => ["", "0", X], $e = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ye = () => [Tt, X];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ra],
      spacing: [Ze, it],
      blur: ["none", "", dt, X],
      brightness: ye(),
      borderColor: [e],
      borderRadius: ["none", "", "full", dt, X],
      borderSpacing: V(),
      borderWidth: K(),
      contrast: ye(),
      grayscale: fe(),
      hueRotate: ye(),
      invert: fe(),
      gap: V(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Kr, it],
      inset: A(),
      margin: A(),
      opacity: ye(),
      padding: V(),
      saturate: ye(),
      scale: ye(),
      sepia: fe(),
      skew: ye(),
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
        z: ["auto", sa, X]
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
        order: ["first", "last", "none", sa, X]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ra]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", sa, X]
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
        "grid-rows": [ra]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [sa, X]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", pn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ra]
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
        "line-clamp": ["none", Tt, pn]
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
        indent: V()
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
        border: [r]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [r]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [r]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [r]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [r]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [r]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [r]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [r]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [r]
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
        "divide-x": [r]
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
        "divide-y": [r]
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
        shadow: [ra]
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
        "mix-blend": [...te(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": te()
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
        rotate: [sa, X]
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
        stroke: [Ze, it, pn]
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
const fg = /* @__PURE__ */ b({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      class: re(l(z)(l(oi)({ variant: a.variant }), t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), oi = Zn(
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
function fn(e, t) {
  return e - t * Math.floor(e / t);
}
const Pl = 1721426;
function Oa(e, t, a, n) {
  t = Jn(e, t);
  let o = t - 1, s = -2;
  return a <= 2 ? s = 0 : za(t) && (s = -1), Pl - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + s + n);
}
function za(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function Jn(e, t) {
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
class Vt {
  fromJulianDay(t) {
    let a = t, n = a - Pl, o = Math.floor(n / 146097), s = fn(n, 146097), i = Math.floor(s / 36524), r = fn(s, 36524), d = Math.floor(r / 1461), u = fn(r, 1461), c = Math.floor(u / 365), p = o * 400 + i * 100 + d * 4 + c + (i !== 4 && c !== 4 ? 1 : 0), [g, m] = li(p), x = a - Oa(g, m, 1, 1), h = 2;
    a < Oa(g, m, 3, 1) ? h = 0 : za(m) && (h = 1);
    let _ = Math.floor(((x + h) * 12 + 373) / 367), C = a - Oa(g, m, _, 1) + 1;
    return new Lt(g, m, _, C);
  }
  toJulianDay(t) {
    return Oa(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return si[za(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return za(t.year) ? 366 : 365;
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
  return t = Oe(t, e.calendar), e = ca(e), t = ca(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Le(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Io(e, t) {
  return e = ca(e), t = ca(t), e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month;
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
  return Vo(e) - Vo(t);
}
function Vo(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let vn = null;
function $t() {
  return vn == null && (vn = new Intl.DateTimeFormat().resolvedOptions().timeZone), vn;
}
function ca(e) {
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
  e = Oe(e, new Vt());
  let t = Jn(e.era, e.year);
  return Al(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function Al(e, t, a, n, o, s, i) {
  let r = /* @__PURE__ */ new Date();
  return r.setUTCHours(n, o, s, i), r.setUTCFullYear(e, t - 1, a), r.getTime();
}
function Sn(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === $t()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: s, minute: i, second: r } = Tl(e, t);
  return Al(a, n, o, s, i, r, 0) - Math.floor(e / 1e3) * 1e3;
}
const Lo = /* @__PURE__ */ new Map();
function Tl(e, t) {
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
const No = 864e5;
function pi(e, t, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((s) => fi(e, t, s));
}
function fi(e, t, a) {
  let n = Tl(a, t);
  return e.year === n.year && e.month === n.month && e.day === n.day && e.hour === n.hour && e.minute === n.minute && e.second === n.second;
}
function Qe(e, t, a = "compatible") {
  let n = Ft(e);
  if (t === "UTC") return Rt(n);
  if (t === $t() && a === "compatible") {
    n = Oe(n, new Vt());
    let d = /* @__PURE__ */ new Date(), u = Jn(n.era, n.year);
    return d.setFullYear(u, n.month - 1, n.day), d.setHours(n.hour, n.minute, n.second, n.millisecond), d.getTime();
  }
  let o = Rt(n), s = Sn(o - No, t), i = Sn(o + No, t), r = pi(n, t, o - s, o - i);
  if (r.length === 1) return r[0];
  if (r.length > 1) switch (a) {
    case "compatible":
    case "earlier":
      return r[0];
    case "later":
      return r[r.length - 1];
    case "reject":
      throw new RangeError("Multiple possible absolute times found");
  }
  switch (a) {
    case "earlier":
      return Math.min(o - s, o - i);
    case "compatible":
    case "later":
      return Math.max(o - s, o - i);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function Il(e, t, a = "compatible") {
  return new Date(Qe(e, t, a));
}
function et(e, t) {
  let a = Sn(e, t), n = new Date(e + a), o = n.getUTCFullYear(), s = n.getUTCMonth() + 1, i = n.getUTCDate(), r = n.getUTCHours(), d = n.getUTCMinutes(), u = n.getUTCSeconds(), c = n.getUTCMilliseconds();
  return new zt(o, s, i, t, a, r, d, u, c);
}
function vi(e) {
  return new Lt(e.calendar, e.era, e.year, e.month, e.day);
}
function Ft(e, t) {
  let a = 0, n = 0, o = 0, s = 0;
  if ("timeZone" in e) ({ hour: a, minute: n, second: o, millisecond: s } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: a, minute: n, second: o, millisecond: s } = t), new Nt(e.calendar, e.era, e.year, e.month, e.day, a, n, o, s);
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
const ia = 36e5;
function Ja(e, t) {
  let a = e.copy(), n = "hour" in a ? _i(a, t) : 0;
  En(a, t.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e), a.month += t.months || 0, Mn(a), Vl(a), a.day += (t.weeks || 0) * 7, a.day += t.days || 0, a.day += n, yi(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
  let o = a.calendar.getYearsInEra(a);
  if (a.year > o) {
    var s, i;
    let d = (s = (i = a.calendar).isInverseEra) === null || s === void 0 ? void 0 : s.call(i, a);
    a.year = o, a.month = d ? 1 : a.calendar.getMonthsInYear(a), a.day = d ? 1 : a.calendar.getDaysInMonth(a);
  }
  a.month < 1 && (a.month = 1, a.day = 1);
  let r = a.calendar.getMonthsInYear(a);
  return a.month > r && (a.month = r, a.day = a.calendar.getDaysInMonth(a)), a.day = Math.max(1, Math.min(a.calendar.getDaysInMonth(a), a.day)), a;
}
function En(e, t) {
  var a, n;
  !((a = (n = e.calendar).isInverseEra) === null || a === void 0) && a.call(n, e) && (t = -t), e.year += t;
}
function Mn(e) {
  for (; e.month < 1; )
    En(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, En(e, 1);
}
function yi(e) {
  for (; e.day < 1; )
    e.month--, Mn(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, Mn(e);
}
function Vl(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function _t(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Vl(e);
}
function Rl(e) {
  let t = {};
  for (let a in e) typeof e[a] == "number" && (t[a] = -e[a]);
  return t;
}
function Fl(e, t) {
  return Ja(e, Rl(t));
}
function Qn(e, t) {
  let a = e.copy();
  return t.era != null && (a.era = t.era), t.year != null && (a.year = t.year), t.month != null && (a.month = t.month), t.day != null && (a.day = t.day), _t(a), a;
}
function Ua(e, t) {
  let a = e.copy();
  return t.hour != null && (a.hour = t.hour), t.minute != null && (a.minute = t.minute), t.second != null && (a.second = t.second), t.millisecond != null && (a.millisecond = t.millisecond), wi(a), a;
}
function bi(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Sa(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Sa(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Sa(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = Sa(e.hour, 24), t;
}
function wi(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Sa(e, t) {
  let a = e % t;
  return a < 0 && (a += t), a;
}
function _i(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, bi(e);
}
function eo(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "era": {
      let r = e.calendar.getEras(), d = r.indexOf(e.era);
      if (d < 0) throw new Error("Invalid era: " + e.era);
      d = tt(d, a, 0, r.length - 1, n == null ? void 0 : n.round), o.era = r[d], _t(o);
      break;
    }
    case "year":
      var s, i;
      !((s = (i = o.calendar).isInverseEra) === null || s === void 0) && s.call(i, o) && (a = -a), o.year = tt(e.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, e);
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
      let s = e.hour, i = 0, r = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let d = s >= 12;
        i = d ? 12 : 0, r = d ? 23 : 11;
      }
      o.hour = tt(s, a, i, r, n == null ? void 0 : n.round);
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
    let s = Math.abs(t);
    t > 0 ? e = Math.ceil(e / s) * s : e = Math.floor(e / s) * s, e > n && (e = a);
  } else
    e += t, e < a ? e = n - (a - e - 1) : e > n && (e = a + (e - n - 1));
  return e;
}
function Nl(e, t) {
  let a;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let o = Ja(Ft(e), {
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
      let o = 0, s = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let x = e.hour >= 12;
        o = x ? 12 : 0, s = x ? 23 : 11;
      }
      let i = Ft(e), r = Oe(Ua(i, {
        hour: o
      }), new Vt()), d = [
        Qe(r, e.timeZone, "earlier"),
        Qe(r, e.timeZone, "later")
      ].filter((x) => et(x, e.timeZone).day === r.day)[0], u = Oe(Ua(i, {
        hour: s
      }), new Vt()), c = [
        Qe(u, e.timeZone, "earlier"),
        Qe(u, e.timeZone, "later")
      ].filter((x) => et(x, e.timeZone).day === u.day).pop(), p = Rt(e) - e.offset, g = Math.floor(p / ia), m = p % ia;
      return p = tt(g, a, Math.floor(d / ia), Math.floor(c / ia), n == null ? void 0 : n.round) * ia + m, Oe(et(p, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return Ll(e, t, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = eo(Ft(e), t, a, n), s = Qe(o, e.timeZone);
      return Oe(et(s, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function $i(e, t, a) {
  let n = Ft(e), o = Ua(Qn(n, t), t);
  if (o.compare(n) === 0) return e;
  let s = Qe(o, e.timeZone, a);
  return Oe(et(s, e.timeZone), e.calendar);
}
function ki(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function zl(e) {
  let t = Oe(e, new Vt());
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
function to(e, t, a) {
  Di(e, t), t.set(e, a);
}
function ao(e) {
  let t = typeof e[0] == "object" ? e.shift() : new Vt(), a;
  if (typeof e[0] == "string") a = e.shift();
  else {
    let i = t.getEras();
    a = i[i.length - 1];
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
var Oi = /* @__PURE__ */ new WeakMap();
class Lt {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Lt(this.calendar, this.era, this.year, this.month, this.day) : new Lt(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return Ja(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return Fl(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Qn(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return eo(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return Il(this, t);
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
    to(this, Oi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, i] = ao(t);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = i, _t(this);
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
    return Ja(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return Fl(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Qn(Ua(this, t), t);
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
        return eo(this, t, a, n);
      default:
        return Ll(this, t, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, a) {
    return Il(this, t, a);
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
    to(this, Si, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, i] = ao(t);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = i, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, _t(this);
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
    to(this, Ei, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, i] = ao(t), r = t.shift(), d = t.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = i, this.timeZone = r, this.offset = d, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, _t(this);
  }
}
let mn = /* @__PURE__ */ new Map();
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
    return Ti() && (this.resolvedHourCycle || (this.resolvedHourCycle = Ii(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
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
  if (typeof t.hour12 == "boolean" && Ai()) {
    t = {
      ...t
    };
    let o = Mi[String(t.hour12)][e.split("-")[0]], s = t.hour12 ? "h12" : "h23";
    t.hourCycle = o ?? s, delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((o, s) => o[0] < s[0] ? -1 : 1).join() : "");
  if (mn.has(a)) return mn.get(a);
  let n = new Intl.DateTimeFormat(e, t);
  return mn.set(a, n), n;
}
let hn = null;
function Ai() {
  return hn == null && (hn = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), hn;
}
let gn = null;
function Ti() {
  return gn == null && (gn = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), gn;
}
function Ii(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = Ul(e, {
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
function Vi(e, t) {
  const a = [];
  for (let n = 0; n < e.length; n += t)
    a.push(e.slice(n, n + t));
  return a;
}
function Te(e, t = $t()) {
  return no(e) ? e.toDate() : e.toDate(t);
}
function Ri(e) {
  return e instanceof Nt;
}
function no(e) {
  return e instanceof zt;
}
function Fi(e) {
  return Ri(e) || no(e);
}
function pa(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), a = e.getMonth() + 1;
    return new Date(t, a, 0).getDate();
  } else
    return e.set({ day: 100 }).day;
}
function pt(e, t) {
  return e.compare(t) < 0;
}
function da(e, t) {
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
  return da(e, t) && pt(e, a);
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
  const s = t;
  for (; o.compare(s) < 0; )
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
function yn(e) {
  const { dateObj: t, weekStartsOn: a, fixedWeeks: n, locale: o } = e, s = pa(t), i = Array.from({ length: s }, (_, C) => t.set({ day: C + 1 })), r = ca(t), d = Ro(t), u = Ui(r, a, o), c = ji(d, a, o), p = zo(u.subtract({ days: 1 }), r), g = zo(d, c.add({ days: 1 })), m = p.length + i.length + g.length;
  if (n && m < 42) {
    const _ = 42 - m;
    let C = g[g.length - 1];
    C || (C = Ro(t));
    const P = Array.from({ length: _ }, ($, D) => {
      const S = D + 1;
      return C.add({ days: S });
    });
    g.push(...P);
  }
  const x = p.concat(i, g), h = Vi(x, 7);
  return {
    value: t,
    cells: x,
    rows: h
  };
}
function bt(e) {
  const { numberOfMonths: t, dateObj: a, ...n } = e, o = [];
  if (!t || t === 1)
    return o.push(
      yn({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    yn({
      ...n,
      dateObj: a
    })
  );
  for (let s = 1; s < t; s++) {
    const i = a.add({ months: s });
    o.push(
      yn({
        ...n,
        dateObj: i
      })
    );
  }
  return o;
}
const Ki = ["top", "right", "bottom", "left"], ft = Math.min, Be = Math.max, ja = Math.round, Ea = Math.floor, vt = (e) => ({
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
function An(e, t, a) {
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
function oo(e) {
  return e === "x" ? "y" : "x";
}
function lo(e) {
  return e === "y" ? "height" : "width";
}
function mt(e) {
  return ["top", "bottom"].includes(lt(e)) ? "y" : "x";
}
function so(e) {
  return oo(mt(e));
}
function Yi(e, t, a) {
  a === void 0 && (a = !1);
  const n = Kt(e), o = so(e), s = lo(o);
  let i = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Ha(i)), [i, Ha(i)];
}
function Zi(e) {
  const t = Ha(e);
  return [Tn(e), t, Tn(t)];
}
function Tn(e) {
  return e.replace(/start|end/g, (t) => qi[t]);
}
function Xi(e, t, a) {
  const n = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return a ? t ? o : n : t ? n : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function Ji(e, t, a, n) {
  const o = Kt(e);
  let s = Xi(lt(e), a === "start", n);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Tn)))), s;
}
function Ha(e) {
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
function Ka(e) {
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
  const s = mt(t), i = so(t), r = lo(i), d = lt(t), u = s === "y", c = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, g = n[r] / 2 - o[r] / 2;
  let m;
  switch (d) {
    case "top":
      m = {
        x: c,
        y: n.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: c,
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
  switch (Kt(t)) {
    case "start":
      m[i] -= g * (a && u ? -1 : 1);
      break;
    case "end":
      m[i] += g * (a && u ? -1 : 1);
      break;
  }
  return m;
}
const ed = async (e, t, a) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = a, r = s.filter(Boolean), d = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: p
  } = Wo(u, n, d), g = n, m = {}, x = 0;
  for (let h = 0; h < r.length; h++) {
    const {
      name: _,
      fn: C
    } = r[h], {
      x: P,
      y: $,
      data: D,
      reset: S
    } = await C({
      x: c,
      y: p,
      initialPlacement: n,
      placement: g,
      strategy: o,
      middlewareData: m,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = P ?? c, p = $ ?? p, m = {
      ...m,
      [_]: {
        ...m[_],
        ...D
      }
    }, S && x <= 50 && (x++, typeof S == "object" && (S.placement && (g = S.placement), S.rects && (u = S.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: c,
      y: p
    } = Wo(u, g, d)), h = -1);
  }
  return {
    x: c,
    y: p,
    placement: g,
    strategy: o,
    middlewareData: m
  };
};
async function fa(e, t) {
  var a;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: s,
    rects: i,
    elements: r,
    strategy: d
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: m = 0
  } = ot(t, e), x = jl(m), _ = r[g ? p === "floating" ? "reference" : "floating" : p], C = Ka(await s.getClippingRect({
    element: (a = await (s.isElement == null ? void 0 : s.isElement(_))) == null || a ? _ : _.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(r.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: d
  })), P = p === "floating" ? {
    x: n,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, $ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(r.floating)), D = await (s.isElement == null ? void 0 : s.isElement($)) ? await (s.getScale == null ? void 0 : s.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Ka(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: r,
    rect: P,
    offsetParent: $,
    strategy: d
  }) : P);
  return {
    top: (C.top - S.top + x.top) / D.y,
    bottom: (S.bottom - C.bottom + x.bottom) / D.y,
    left: (C.left - S.left + x.left) / D.x,
    right: (S.right - C.right + x.right) / D.x
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
      rects: s,
      platform: i,
      elements: r,
      middlewareData: d
    } = t, {
      element: u,
      padding: c = 0
    } = ot(e, t) || {};
    if (u == null)
      return {};
    const p = jl(c), g = {
      x: a,
      y: n
    }, m = so(o), x = lo(m), h = await i.getDimensions(u), _ = m === "y", C = _ ? "top" : "left", P = _ ? "bottom" : "right", $ = _ ? "clientHeight" : "clientWidth", D = s.reference[x] + s.reference[m] - g[m] - s.floating[x], S = g[m] - s.reference[m], I = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let T = I ? I[$] : 0;
    (!T || !await (i.isElement == null ? void 0 : i.isElement(I))) && (T = r.floating[$] || s.floating[x]);
    const W = D / 2 - S / 2, L = T / 2 - h[x] / 2 - 1, B = ft(p[C], L), A = ft(p[P], L), V = B, K = T - h[x] - A, H = T / 2 - h[x] / 2 + W, U = An(V, H, K), q = !d.arrow && Kt(o) != null && H !== U && s.reference[x] / 2 - (H < V ? B : A) - h[x] / 2 < 0, te = q ? H < V ? H - V : H - K : 0;
    return {
      [m]: g[m] + te,
      data: {
        [m]: U,
        centerOffset: H - U - te,
        ...q && {
          alignmentOffset: te
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
        middlewareData: s,
        rects: i,
        initialPlacement: r,
        platform: d,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: h = !0,
        ..._
      } = ot(e, t);
      if ((a = s.arrow) != null && a.alignmentOffset)
        return {};
      const C = lt(o), P = mt(r), $ = lt(r) === r, D = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), S = g || ($ || !h ? [Ha(r)] : Zi(r)), I = x !== "none";
      !g && I && S.push(...Ji(r, h, x, D));
      const T = [r, ...S], W = await fa(t, _), L = [];
      let B = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (c && L.push(W[C]), p) {
        const H = Yi(o, i, D);
        L.push(W[H[0]], W[H[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: L
      }], !L.every((H) => H <= 0)) {
        var A, V;
        const H = (((A = s.flip) == null ? void 0 : A.index) || 0) + 1, U = T[H];
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
        let q = (V = B.filter((te) => te.overflows[0] <= 0).sort((te, ue) => te.overflows[1] - ue.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!q)
          switch (m) {
            case "bestFit": {
              var K;
              const te = (K = B.filter((ue) => {
                if (I) {
                  const fe = mt(ue.placement);
                  return fe === P || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  fe === "y";
                }
                return !0;
              }).map((ue) => [ue.placement, ue.overflows.filter((fe) => fe > 0).reduce((fe, $e) => fe + $e, 0)]).sort((ue, fe) => ue[1] - fe[1])[0]) == null ? void 0 : K[0];
              te && (q = te);
              break;
            }
            case "initialPlacement":
              q = r;
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
          const s = await fa(t, {
            ...o,
            elementContext: "reference"
          }), i = Uo(s, a.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: jo(i)
            }
          };
        }
        case "escaped": {
          const s = await fa(t, {
            ...o,
            altBoundary: !0
          }), i = Uo(s, a.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: jo(i)
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
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = lt(a), r = Kt(a), d = mt(a) === "y", u = ["left", "top"].includes(i) ? -1 : 1, c = s && d ? -1 : 1, p = ot(t, e);
  let {
    mainAxis: g,
    crossAxis: m,
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
  return r && typeof x == "number" && (m = r === "end" ? x * -1 : x), d ? {
    x: m * c,
    y: g * u
  } : {
    x: g * u,
    y: m * c
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
        y: s,
        placement: i,
        middlewareData: r
      } = t, d = await od(t, e);
      return i === ((a = r.offset) == null ? void 0 : a.placement) && (n = r.arrow) != null && n.alignmentOffset ? {} : {
        x: o + d.x,
        y: s + d.y,
        data: {
          ...d,
          placement: i
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
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: r = {
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
      } = ot(e, t), u = {
        x: a,
        y: n
      }, c = await fa(t, d), p = mt(lt(o)), g = oo(p);
      let m = u[g], x = u[p];
      if (s) {
        const _ = g === "y" ? "top" : "left", C = g === "y" ? "bottom" : "right", P = m + c[_], $ = m - c[C];
        m = An(P, m, $);
      }
      if (i) {
        const _ = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", P = x + c[_], $ = x - c[C];
        x = An(P, x, $);
      }
      const h = r.fn({
        ...t,
        [g]: m,
        [p]: x
      });
      return {
        ...h,
        data: {
          x: h.x - a,
          y: h.y - n,
          enabled: {
            [g]: s,
            [p]: i
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
        rects: s,
        middlewareData: i
      } = t, {
        offset: r = 0,
        mainAxis: d = !0,
        crossAxis: u = !0
      } = ot(e, t), c = {
        x: a,
        y: n
      }, p = mt(o), g = oo(p);
      let m = c[g], x = c[p];
      const h = ot(r, t), _ = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (d) {
        const $ = g === "y" ? "height" : "width", D = s.reference[g] - s.floating[$] + _.mainAxis, S = s.reference[g] + s.reference[$] - _.mainAxis;
        m < D ? m = D : m > S && (m = S);
      }
      if (u) {
        var C, P;
        const $ = g === "y" ? "width" : "height", D = ["top", "left"].includes(lt(o)), S = s.reference[p] - s.floating[$] + (D && ((C = i.offset) == null ? void 0 : C[p]) || 0) + (D ? 0 : _.crossAxis), I = s.reference[p] + s.reference[$] + (D ? 0 : ((P = i.offset) == null ? void 0 : P[p]) || 0) - (D ? _.crossAxis : 0);
        x < S ? x = S : x > I && (x = I);
      }
      return {
        [g]: m,
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
        rects: s,
        platform: i,
        elements: r
      } = t, {
        apply: d = () => {
        },
        ...u
      } = ot(e, t), c = await fa(t, u), p = lt(o), g = Kt(o), m = mt(o) === "y", {
        width: x,
        height: h
      } = s.floating;
      let _, C;
      p === "top" || p === "bottom" ? (_ = p, C = g === (await (i.isRTL == null ? void 0 : i.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (C = p, _ = g === "end" ? "top" : "bottom");
      const P = h - c.top - c.bottom, $ = x - c.left - c.right, D = ft(h - c[_], P), S = ft(x - c[C], $), I = !t.middlewareData.shift;
      let T = D, W = S;
      if ((a = t.middlewareData.shift) != null && a.enabled.x && (W = $), (n = t.middlewareData.shift) != null && n.enabled.y && (T = P), I && !g) {
        const B = Be(c.left, 0), A = Be(c.right, 0), V = Be(c.top, 0), K = Be(c.bottom, 0);
        m ? W = x - 2 * (B !== 0 || A !== 0 ? B + A : Be(c.left, c.right)) : T = h - 2 * (V !== 0 || K !== 0 ? V + K : Be(c.top, c.bottom));
      }
      await d({
        ...t,
        availableWidth: W,
        availableHeight: T
      });
      const L = await i.getDimensions(r.floating);
      return x !== L.width || h !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Qa() {
  return typeof window < "u";
}
function kt(e) {
  return ro(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function He(e) {
  var t;
  return (t = (ro(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ro(e) {
  return Qa() ? e instanceof Node || e instanceof Pe(e).Node : !1;
}
function Ie(e) {
  return Qa() ? e instanceof Element || e instanceof Pe(e).Element : !1;
}
function Ue(e) {
  return Qa() ? e instanceof HTMLElement || e instanceof Pe(e).HTMLElement : !1;
}
function Ho(e) {
  return !Qa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Pe(e).ShadowRoot;
}
function xa(e) {
  const {
    overflow: t,
    overflowX: a,
    overflowY: n,
    display: o
  } = Ve(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + a) && !["inline", "contents"].includes(o);
}
function dd(e) {
  return ["table", "td", "th"].includes(kt(e));
}
function en(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function io(e) {
  const t = uo(), a = Ie(e) ? Ve(e) : e;
  return a.transform !== "none" || a.perspective !== "none" || (a.containerType ? a.containerType !== "normal" : !1) || !t && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !t && (a.filter ? a.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function ud(e) {
  let t = ht(e);
  for (; Ue(t) && !Wt(t); ) {
    if (io(t))
      return t;
    if (en(t))
      return null;
    t = ht(t);
  }
  return null;
}
function uo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Wt(e) {
  return ["html", "body", "#document"].includes(kt(e));
}
function Ve(e) {
  return Pe(e).getComputedStyle(e);
}
function tn(e) {
  return Ie(e) ? {
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
  return Wt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ue(t) && xa(t) ? t : Hl(t);
}
function va(e, t, a) {
  var n;
  t === void 0 && (t = []), a === void 0 && (a = !0);
  const o = Hl(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Pe(o);
  if (s) {
    const r = In(i);
    return t.concat(i, i.visualViewport || [], xa(o) ? o : [], r && a ? va(r) : []);
  }
  return t.concat(o, va(o, [], a));
}
function In(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Kl(e) {
  const t = Ve(e);
  let a = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = Ue(e), s = o ? e.offsetWidth : a, i = o ? e.offsetHeight : n, r = ja(a) !== s || ja(n) !== i;
  return r && (a = s, n = i), {
    width: a,
    height: n,
    $: r
  };
}
function co(e) {
  return Ie(e) ? e : e.contextElement;
}
function It(e) {
  const t = co(e);
  if (!Ue(t))
    return vt(1);
  const a = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = Kl(t);
  let i = (s ? ja(a.width) : a.width) / n, r = (s ? ja(a.height) : a.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!r || !Number.isFinite(r)) && (r = 1), {
    x: i,
    y: r
  };
}
const cd = /* @__PURE__ */ vt(0);
function Gl(e) {
  const t = Pe(e);
  return !uo() || !t.visualViewport ? cd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function pd(e, t, a) {
  return t === void 0 && (t = !1), !a || t && a !== Pe(e) ? !1 : t;
}
function xt(e, t, a, n) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const o = e.getBoundingClientRect(), s = co(e);
  let i = vt(1);
  t && (n ? Ie(n) && (i = It(n)) : i = It(e));
  const r = pd(s, a, n) ? Gl(s) : vt(0);
  let d = (o.left + r.x) / i.x, u = (o.top + r.y) / i.y, c = o.width / i.x, p = o.height / i.y;
  if (s) {
    const g = Pe(s), m = n && Ie(n) ? Pe(n) : n;
    let x = g, h = In(x);
    for (; h && n && m !== x; ) {
      const _ = It(h), C = h.getBoundingClientRect(), P = Ve(h), $ = C.left + (h.clientLeft + parseFloat(P.paddingLeft)) * _.x, D = C.top + (h.clientTop + parseFloat(P.paddingTop)) * _.y;
      d *= _.x, u *= _.y, c *= _.x, p *= _.y, d += $, u += D, x = Pe(h), h = In(x);
    }
  }
  return Ka({
    width: c,
    height: p,
    x: d,
    y: u
  });
}
function fd(e) {
  let {
    elements: t,
    rect: a,
    offsetParent: n,
    strategy: o
  } = e;
  const s = o === "fixed", i = He(n), r = t ? en(t.floating) : !1;
  if (n === i || r && s)
    return a;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = vt(1);
  const c = vt(0), p = Ue(n);
  if ((p || !p && !s) && ((kt(n) !== "body" || xa(i)) && (d = tn(n)), Ue(n))) {
    const g = xt(n);
    u = It(n), c.x = g.x + n.clientLeft, c.y = g.y + n.clientTop;
  }
  return {
    width: a.width * u.x,
    height: a.height * u.y,
    x: a.x * u.x - d.scrollLeft * u.x + c.x,
    y: a.y * u.y - d.scrollTop * u.y + c.y
  };
}
function vd(e) {
  return Array.from(e.getClientRects());
}
function Vn(e, t) {
  const a = tn(e).scrollLeft;
  return t ? t.left + a : xt(He(e)).left + a;
}
function md(e) {
  const t = He(e), a = tn(e), n = e.ownerDocument.body, o = Be(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = Be(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -a.scrollLeft + Vn(e);
  const r = -a.scrollTop;
  return Ve(n).direction === "rtl" && (i += Be(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: r
  };
}
function hd(e, t) {
  const a = Pe(e), n = He(e), o = a.visualViewport;
  let s = n.clientWidth, i = n.clientHeight, r = 0, d = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = uo();
    (!u || u && t === "fixed") && (r = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: r,
    y: d
  };
}
function gd(e, t) {
  const a = xt(e, !0, t === "fixed"), n = a.top + e.clientTop, o = a.left + e.clientLeft, s = Ue(e) ? It(e) : vt(1), i = e.clientWidth * s.x, r = e.clientHeight * s.y, d = o * s.x, u = n * s.y;
  return {
    width: i,
    height: r,
    x: d,
    y: u
  };
}
function Ko(e, t, a) {
  let n;
  if (t === "viewport")
    n = hd(e, a);
  else if (t === "document")
    n = md(He(e));
  else if (Ie(t))
    n = gd(t, a);
  else {
    const o = Gl(e);
    n = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Ka(n);
}
function ql(e, t) {
  const a = ht(e);
  return a === t || !Ie(a) || Wt(a) ? !1 : Ve(a).position === "fixed" || ql(a, t);
}
function yd(e, t) {
  const a = t.get(e);
  if (a)
    return a;
  let n = va(e, [], !1).filter((r) => Ie(r) && kt(r) !== "body"), o = null;
  const s = Ve(e).position === "fixed";
  let i = s ? ht(e) : e;
  for (; Ie(i) && !Wt(i); ) {
    const r = Ve(i), d = io(i);
    !d && r.position === "fixed" && (o = null), (s ? !d && !o : !d && r.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || xa(i) && !d && ql(e, i)) ? n = n.filter((c) => c !== i) : o = r, i = ht(i);
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
  const i = [...a === "clippingAncestors" ? en(t) ? [] : yd(t, this._c) : [].concat(a), n], r = i[0], d = i.reduce((u, c) => {
    const p = Ko(t, c, o);
    return u.top = Be(p.top, u.top), u.right = ft(p.right, u.right), u.bottom = ft(p.bottom, u.bottom), u.left = Be(p.left, u.left), u;
  }, Ko(t, r, o));
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
  const n = Ue(t), o = He(t), s = a === "fixed", i = xt(e, !0, s, t);
  let r = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = vt(0);
  if (n || !n && !s)
    if ((kt(t) !== "body" || xa(o)) && (r = tn(t)), n) {
      const m = xt(t, !0, s, t);
      d.x = m.x + t.clientLeft, d.y = m.y + t.clientTop;
    } else o && (d.x = Vn(o));
  let u = 0, c = 0;
  if (o && !n && !s) {
    const m = o.getBoundingClientRect();
    c = m.top + r.scrollTop, u = m.left + r.scrollLeft - // RTL <body> scrollbar.
    Vn(o, m);
  }
  const p = i.left + r.scrollLeft - d.x - u, g = i.top + r.scrollTop - d.y - c;
  return {
    x: p,
    y: g,
    width: i.width,
    height: i.height
  };
}
function bn(e) {
  return Ve(e).position === "static";
}
function Go(e, t) {
  if (!Ue(e) || Ve(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let a = e.offsetParent;
  return He(e) === a && (a = a.ownerDocument.body), a;
}
function Yl(e, t) {
  const a = Pe(e);
  if (en(e))
    return a;
  if (!Ue(e)) {
    let o = ht(e);
    for (; o && !Wt(o); ) {
      if (Ie(o) && !bn(o))
        return o;
      o = ht(o);
    }
    return a;
  }
  let n = Go(e, t);
  for (; n && dd(n) && bn(n); )
    n = Go(n, t);
  return n && Wt(n) && bn(n) && !io(n) ? a : n || ud(e) || a;
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
  return Ve(e).direction === "rtl";
}
const $d = {
  convertOffsetParentRelativeRectToViewportRelativeRect: fd,
  getDocumentElement: He,
  getClippingRect: bd,
  getOffsetParent: Yl,
  getElementRects: xd,
  getClientRects: vd,
  getDimensions: wd,
  getScale: It,
  isElement: Ie,
  isRTL: Cd
};
function kd(e, t) {
  let a = null, n;
  const o = He(e);
  function s() {
    var r;
    clearTimeout(n), (r = a) == null || r.disconnect(), a = null;
  }
  function i(r, d) {
    r === void 0 && (r = !1), d === void 0 && (d = 1), s();
    const {
      left: u,
      top: c,
      width: p,
      height: g
    } = e.getBoundingClientRect();
    if (r || t(), !p || !g)
      return;
    const m = Ea(c), x = Ea(o.clientWidth - (u + p)), h = Ea(o.clientHeight - (c + g)), _ = Ea(u), P = {
      rootMargin: -m + "px " + -x + "px " + -h + "px " + -_ + "px",
      threshold: Be(0, ft(1, d)) || 1
    };
    let $ = !0;
    function D(S) {
      const I = S[0].intersectionRatio;
      if (I !== d) {
        if (!$)
          return i();
        I ? i(!1, I) : n = setTimeout(() => {
          i(!1, 1e-7);
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
  return i(!0), s;
}
function Bd(e, t, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: r = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, u = co(e), c = o || s ? [...u ? va(u) : [], ...va(t)] : [];
  c.forEach((C) => {
    o && C.addEventListener("scroll", a, {
      passive: !0
    }), s && C.addEventListener("resize", a);
  });
  const p = u && r ? kd(u, a) : null;
  let g = -1, m = null;
  i && (m = new ResizeObserver((C) => {
    let [P] = C;
    P && P.target === u && m && (m.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var $;
      ($ = m) == null || $.observe(t);
    })), a();
  }), u && !d && m.observe(u), m.observe(t));
  let x, h = d ? xt(e) : null;
  d && _();
  function _() {
    const C = xt(e);
    h && (C.x !== h.x || C.y !== h.y || C.width !== h.width || C.height !== h.height) && a(), h = C, x = requestAnimationFrame(_);
  }
  return a(), () => {
    var C;
    c.forEach((P) => {
      o && P.removeEventListener("scroll", a), s && P.removeEventListener("resize", a);
    }), p == null || p(), (C = m) == null || C.disconnect(), m = null, d && cancelAnimationFrame(x);
  };
}
const Pd = ld, Dd = sd, qo = ad, Od = id, Sd = nd, Ed = td, Md = rd, Ad = (e, t, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: $d,
    ...a
  }, s = {
    ...o.platform,
    _c: n
  };
  return ed(e, t, {
    ...o,
    platform: s
  });
};
function Td(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Rn(e) {
  if (Td(e)) {
    const t = e.$el;
    return ro(t) && kt(t) === "#comment" ? null : t;
  }
  return e;
}
function At(e) {
  return typeof e == "function" ? e() : l(e);
}
function Id(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const a = Rn(At(e.element));
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
function Vd(e, t, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = k(() => {
    var T;
    return (T = At(a.open)) != null ? T : !0;
  }), s = k(() => At(a.middleware)), i = k(() => {
    var T;
    return (T = At(a.placement)) != null ? T : "bottom";
  }), r = k(() => {
    var T;
    return (T = At(a.strategy)) != null ? T : "absolute";
  }), d = k(() => {
    var T;
    return (T = At(a.transform)) != null ? T : !0;
  }), u = k(() => Rn(e.value)), c = k(() => Rn(t.value)), p = M(0), g = M(0), m = M(r.value), x = M(i.value), h = Hn({}), _ = M(!1), C = k(() => {
    const T = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return T;
    const W = Yo(c.value, p.value), L = Yo(c.value, g.value);
    return d.value ? {
      ...T,
      transform: "translate(" + W + "px, " + L + "px)",
      ...Zl(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: W + "px",
      top: L + "px"
    };
  });
  let P;
  function $() {
    if (u.value == null || c.value == null)
      return;
    const T = o.value;
    Ad(u.value, c.value, {
      middleware: s.value,
      placement: i.value,
      strategy: r.value
    }).then((W) => {
      p.value = W.x, g.value = W.y, m.value = W.strategy, x.value = W.placement, h.value = W.middlewareData, _.value = T !== !1;
    });
  }
  function D() {
    typeof P == "function" && (P(), P = void 0);
  }
  function S() {
    if (D(), n === void 0) {
      $();
      return;
    }
    if (u.value != null && c.value != null) {
      P = n(u.value, c.value, $);
      return;
    }
  }
  function I() {
    o.value || (_.value = !1);
  }
  return Q([s, i, r, o], $, {
    flush: "sync"
  }), Q([u, c], S, {
    flush: "sync"
  }), Q(o, I, {
    flush: "sync"
  }), Kn() && Gn(D), {
    x: Et(p),
    y: Et(g),
    strategy: Et(m),
    placement: Et(x),
    middlewareData: Et(h),
    isPositioned: Et(_),
    floatingStyles: C,
    update: $
  };
}
function ie(e, t) {
  const a = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(a);
  return [(o) => {
    const s = hl(n, o);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (gl(n, o), o)];
}
function po(e, t, a) {
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
      var i = s[o];
      if (!e(t[i], a[i])) return !1;
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
  const o = /* @__PURE__ */ new Date(), s = o.getFullYear(), i = o.getMonth() + 1, r = o.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new Nt(s, i, r, 0, 0, 0) : new Lt(s, i, r);
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
  const n = Hn();
  return ge(() => {
    n.value = e();
  }, {
    ...t,
    flush: (a = void 0) != null ? a : "sync"
  }), wa(n);
}
function Gt(e) {
  return Kn() ? (Gn(e), !0) : !1;
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
  return (...s) => (t += 1, a || (n = ml(!0), a = n.run(() => e(...s))), Gt(o), a);
}
function nt(e) {
  return typeof e == "function" ? e() : l(e);
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
    let o = nt(e), s;
    const i = () => setTimeout(() => {
      o = nt(e), n();
    }, nt(t));
    return Gt(() => {
      clearTimeout(s);
    }), {
      get() {
        return a(), o;
      },
      set(r) {
        o = r, n(), clearTimeout(s), s = i();
      }
    };
  });
}
function Yd(e, t) {
  Gd() && Yn(e, t);
}
function Zd(e, t, a = {}) {
  const {
    immediate: n = !0
  } = a, o = M(!1);
  let s = null;
  function i() {
    s && (clearTimeout(s), s = null);
  }
  function r() {
    o.value = !1, i();
  }
  function d(...u) {
    i(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, e(...u);
    }, nt(t));
  }
  return n && (o.value = !0, Ke && d()), Gt(r), {
    isPending: wa(o),
    start: d,
    stop: r
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
  ), s = k(() => !o.isPending.value);
  return a ? {
    ready: s,
    ...o
  } : s;
}
function Se(e) {
  var t;
  const a = nt(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const an = Ke ? window : void 0;
function Ga(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = an) : [t, a, n, o] = e, !t)
    return es;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], i = () => {
    s.forEach((c) => c()), s.length = 0;
  }, r = (c, p, g, m) => (c.addEventListener(p, g, m), () => c.removeEventListener(p, g, m)), d = Q(
    () => [Se(t), nt(o)],
    ([c, p]) => {
      if (i(), !c)
        return;
      const g = Hd(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((x) => r(c, m, x, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), i();
  };
  return Gt(u), u;
}
function Jd(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function fo(...e) {
  let t, a, n = {};
  e.length === 3 ? (t = e[0], a = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, a = e[0], n = e[1]) : (t = e[0], a = e[1]) : (t = !0, a = e[0]);
  const {
    target: o = an,
    eventName: s = "keydown",
    passive: i = !1,
    dedupe: r = !1
  } = n, d = Jd(t);
  return Ga(o, s, (u) => {
    u.repeat && nt(r) || d(u) && a(u);
  }, i);
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
  const { window: n = an, ...o } = a;
  let s;
  const i = Qd(() => n && "MutationObserver" in n), r = () => {
    s && (s.disconnect(), s = void 0);
  }, d = k(() => {
    const g = nt(e), m = (Array.isArray(g) ? g : [g]).map(Se).filter(Ud);
    return new Set(m);
  }), u = Q(
    () => d.value,
    (g) => {
      r(), i.value && g.size && (s = new MutationObserver(t), g.forEach((m) => s.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => s == null ? void 0 : s.takeRecords(), p = () => {
    r(), u();
  };
  return Gt(p), {
    isSupported: i,
    stop: p,
    takeRecords: c
  };
}
function as(e, t = {}) {
  const {
    immediate: a = !0,
    fpsLimit: n = void 0,
    window: o = an
  } = t, s = M(!1), i = n ? 1e3 / n : null;
  let r = 0, d = null;
  function u(g) {
    if (!s.value || !o)
      return;
    r || (r = g);
    const m = g - r;
    if (i && m < i) {
      d = o.requestAnimationFrame(u);
      return;
    }
    r = g, e({ delta: m, timestamp: g }), d = o.requestAnimationFrame(u);
  }
  function c() {
    !s.value && o && (s.value = !0, r = 0, d = o.requestAnimationFrame(u));
  }
  function p() {
    s.value = !1, d != null && o && (o.cancelAnimationFrame(d), d = null);
  }
  return a && c(), Gt(p), {
    isActive: wa(s),
    pause: p,
    resume: c
  };
}
function tu(e) {
  return JSON.parse(JSON.stringify(e));
}
function ve(e, t, a, n = {}) {
  var o, s, i;
  const {
    clone: r = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = je(), x = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((i = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : i.bind(m == null ? void 0 : m.proxy));
  let h = u;
  t || (t = "modelValue"), h = h || `update:${t.toString()}`;
  const _ = ($) => r ? typeof r == "function" ? r($) : tu($) : $, C = () => Wd(e[t]) ? _(e[t]) : p, P = ($) => {
    g ? g($) && x(h, $) : x(h, $);
  };
  if (d) {
    const $ = C(), D = M($);
    let S = !1;
    return Q(
      () => e[t],
      (I) => {
        S || (S = !0, D.value = _(I), ne(() => S = !1));
      }
    ), Q(
      D,
      (I) => {
        !S && (I !== e[t] || c) && P(I);
      },
      { deep: c }
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
function nn(e) {
  return e ? e.flatMap((t) => t.type === ee ? nn(t.children) : [t]) : [];
}
const au = ["INPUT", "TEXTAREA"];
function nu(e, t, a, n = {}) {
  if (!t || n.enableIgnoredElement && au.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: i = [],
    loop: r = !0,
    dir: d = "ltr",
    preventScroll: u = !0,
    focus: c = !1
  } = n, [p, g, m, x, h, _] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = m || x, P = p || g;
  if (!h && !_ && (!C && !P || o === "vertical" && P || o === "horizontal" && C))
    return null;
  const $ = a ? Array.from(a.querySelectorAll(s)) : i;
  if (!$.length)
    return null;
  u && e.preventDefault();
  let D = null;
  return P || C ? D = ns($, t, {
    goForward: C ? x : d === "ltr" ? p : g,
    loop: r
  }) : h ? D = $.at(0) || null : _ && (D = $.at(-1) || null), c && (D == null || D.focus()), D;
}
function ns(e, t, a, n = e.length) {
  if (--n === 0)
    return null;
  const o = e.indexOf(t), s = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (s < 0 || s >= e.length))
    return null;
  const i = (s + e.length) % e.length, r = e[i];
  return r ? r.hasAttribute("disabled") && r.getAttribute("disabled") !== "false" ? ns(
    e,
    r,
    a,
    n
  ) : r : null;
}
function wn(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Fn(e, t, a = ".", n) {
  if (!wn(t))
    return Fn(e, {}, a);
  const o = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const i = e[s];
    i != null && (Array.isArray(i) && Array.isArray(o[s]) ? o[s] = [...i, ...o[s]] : wn(i) && wn(o[s]) ? o[s] = Fn(
      i,
      o[s],
      (a ? `${a}.` : "") + s.toString()
    ) : o[s] = i);
  }
  return o;
}
function ou(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((a, n) => Fn(a, n, ""), {})
  );
}
const lu = ou(), [on, vg] = ie("ConfigProvider");
let su = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", ru = (e = 21) => {
  let t = "", a = e;
  for (; a--; )
    t += su[Math.random() * 64 | 0];
  return t;
};
const iu = Ql(() => {
  const e = M(/* @__PURE__ */ new Map()), t = M(), a = k(() => {
    for (const i of e.value.values())
      if (i)
        return !0;
    return !1;
  }), n = on({
    scrollBody: M(!0)
  });
  let o = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Xo && (o == null || o()), t.value = void 0;
  };
  return Q(a, (i, r) => {
    var d;
    if (!Ke)
      return;
    if (!i) {
      r && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, c = { padding: u, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? lu({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = `${p.padding}px`, document.body.style.marginRight = `${p.margin}px`, document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Xo && (o = Ga(
      document,
      "touchmove",
      (g) => {
        var m;
        g.target === document.documentElement && (g.touches.length > 1 || (m = g.preventDefault) == null || m.call(g));
      },
      { passive: !1 }
    )), ne(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Ca(e) {
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
    function s() {
      const i = Se(n);
      return i ? o.value = Array.from(
        i.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return hr(() => {
      o.value = [];
    }), de(s), gr(s), Q(() => n == null ? void 0 : n.value, s, { immediate: !0 }), gl(a, o), o;
  }, injectCollection: () => hl(a, M([])) };
}
function uu(e) {
  const t = M(e);
  function a() {
    return t.value;
  }
  function n(h) {
    t.value = h;
  }
  function o(h, _) {
    return new Xe(t.value, _).format(h);
  }
  function s(h, _ = !0) {
    return Fi(h) && _ ? o(Te(h), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Te(h), {
      dateStyle: "long"
    });
  }
  function i(h, _ = {}) {
    return new Xe(t.value, { month: "long", year: "numeric", ..._ }).format(h);
  }
  function r(h, _ = {}) {
    return new Xe(t.value, { month: "long", ..._ }).format(h);
  }
  function d() {
    const h = El($t());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_) => ({ label: r(Te(h.set({ month: _ }))), value: _ }));
  }
  function u(h, _ = {}) {
    return new Xe(t.value, { year: "numeric", ..._ }).format(h);
  }
  function c(h, _) {
    return no(h) ? new Xe(t.value, {
      ..._,
      timeZone: h.timeZone
    }).formatToParts(Te(h)) : new Xe(t.value, _).formatToParts(Te(h));
  }
  function p(h, _ = "narrow") {
    return new Xe(t.value, { weekday: _ }).format(h);
  }
  function g(h) {
    var _;
    return ((_ = new Xe(t.value, {
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
  function x(h, _, C = {}) {
    const P = { ...m, ...C }, $ = c(h, P).find((D) => D.type === _);
    return $ ? $.value : "";
  }
  return {
    setLocale: n,
    getLocale: a,
    fullMonth: r,
    fullYear: u,
    fullMonthAndYear: i,
    toParts: c,
    custom: o,
    part: x,
    dayPeriod: g,
    selectedDate: s,
    dayOfWeek: p,
    getMonths: d
  };
}
function gt(e) {
  const t = on({
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
    n[vr(fl(o))] = (...s) => e(o, ...s);
  }), n;
}
let _n = 0;
function vo() {
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
    ), _n++, e(() => {
      _n === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), _n--;
    });
  });
}
function Jo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function ln(e) {
  return k(() => {
    var t;
    return nt(e) ? !!((t = Se(e)) != null && t.closest("form")) : !0;
  });
}
function ae(e) {
  const t = je(), a = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, s) => {
    const i = (t == null ? void 0 : t.type.props[s]).default;
    return i !== void 0 && (o[s] = i), o;
  }, {}), n = pl(e);
  return k(() => {
    const o = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((i) => {
      o[fl(i)] = s[i];
    }), Object.keys({ ...a, ...o }).reduce((i, r) => (n.value[r] !== void 0 && (i[r] = n.value[r]), i), {});
  });
}
function le(e, t) {
  const a = ae(e), n = t ? Bt(t) : {};
  return k(() => ({
    ...a.value,
    ...n
  }));
}
function N() {
  const e = je(), t = M(), a = k(() => {
    var i, r;
    return ["#text", "#comment"].includes((i = t.value) == null ? void 0 : i.$el.nodeName) ? (r = t.value) == null ? void 0 : r.$el.nextElementSibling : Se(t);
  }), n = Object.assign({}, e.exposed), o = {};
  for (const i in e.props)
    Object.defineProperty(o, i, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[i]
    });
  if (Object.keys(n).length > 0)
    for (const i in n)
      Object.defineProperty(o, i, {
        enumerable: !0,
        configurable: !0,
        get: () => n[i]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function s(i) {
    t.value = i, !(i instanceof Element || !i) && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => i.$el
    }), e.exposed = o);
  }
  return { forwardRef: s, currentRef: t, currentElement: a };
}
var cu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Mt = /* @__PURE__ */ new WeakMap(), Ma = /* @__PURE__ */ new WeakMap(), Aa = {}, xn = 0, os = function(e) {
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
  Aa[a] || (Aa[a] = /* @__PURE__ */ new WeakMap());
  var s = Aa[a], i = [], r = /* @__PURE__ */ new Set(), d = new Set(o), u = function(p) {
    !p || r.has(p) || (r.add(p), u(p.parentNode));
  };
  o.forEach(u);
  var c = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(g) {
      if (r.has(g))
        c(g);
      else
        try {
          var m = g.getAttribute(n), x = m !== null && m !== "false", h = (Mt.get(g) || 0) + 1, _ = (s.get(g) || 0) + 1;
          Mt.set(g, h), s.set(g, _), i.push(g), h === 1 && x && Ma.set(g, !0), _ === 1 && g.setAttribute(a, "true"), x || g.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", g, C);
        }
    });
  };
  return c(t), r.clear(), xn++, function() {
    i.forEach(function(p) {
      var g = Mt.get(p) - 1, m = s.get(p) - 1;
      Mt.set(p, g), s.set(p, m), g || (Ma.has(p) || p.removeAttribute(n), Ma.delete(p)), m || p.removeAttribute(a);
    }), xn--, xn || (Mt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Ma = /* @__PURE__ */ new WeakMap(), Aa = {});
  };
}, vu = function(e, t, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = cu(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), fu(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function $a(e) {
  let t;
  Q(() => Se(e), (a) => {
    a ? t = vu(a) : t && t();
  }), Ct(() => {
    t && t();
  });
}
let mu = 0;
function xe(e, t = "radix") {
  const a = on({ useId: void 0 });
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
      const s = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const r = i[0];
        let d, u;
        if ("borderBoxSize" in r) {
          const c = r.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          d = p.inlineSize, u = p.blockSize;
        } else
          d = o.offsetWidth, u = o.offsetHeight;
        t.value = { width: d, height: u };
      });
      return s.observe(o, { box: "border-box" }), () => s.unobserve(o);
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
function mo(e) {
  const t = qd("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, n) => {
      var o, s;
      if (!(e != null && e.value) && !n)
        return;
      t.value = t.value + a;
      const i = (e == null ? void 0 : e.value) ?? n, r = document.activeElement, d = ((s = (o = i.find((g) => g === r)) == null ? void 0 : o.textContent) == null ? void 0 : s.trim()) ?? "", u = i.map((g) => {
        var m;
        return ((m = g.textContent) == null ? void 0 : m.trim()) ?? "";
      }), c = bu(u, t.value, d), p = i.find(
        (g) => {
          var m;
          return ((m = g.textContent) == null ? void 0 : m.trim()) === c;
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
  const n = t.length > 1 && Array.from(t).every((r) => r === t[0]) ? t[0] : t, o = a ? e.indexOf(a) : -1;
  let s = yu(e, Math.max(o, 0));
  n.length === 1 && (s = s.filter((r) => r !== a));
  const i = s.find(
    (r) => r.toLowerCase().startsWith(n.toLowerCase())
  );
  return i !== a ? i : void 0;
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
const ho = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const s = nn(a.default()), i = s.findIndex((c) => c.type !== ir);
      if (i === -1)
        return s;
      const r = s[i];
      (n = r.props) == null || delete n.ref;
      const d = r.props ? E(t, r.props) : t;
      t.class && (o = r.props) != null && o.class && delete r.props.class;
      const u = dr(r, d);
      for (const c in d)
        c.startsWith("on") && (u.props || (u.props = {}), u.props[c] = d[c]);
      return s.length === 1 ? u : (s[i] = u, s);
    };
  }
}), R = b({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => Ne(n, t) : n !== "template" ? () => Ne(e.as, t, { default: a.default }) : () => Ne(ho, t, { default: a.default });
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
  const a = M({}), n = M("none"), o = e.value ? "mounted" : "unmounted", { state: s, dispatch: i } = gu(o, {
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
  }), r = (g) => {
    var m;
    if (Ke) {
      const x = new CustomEvent(g, { bubbles: !1, cancelable: !1 });
      (m = t.value) == null || m.dispatchEvent(x);
    }
  };
  Q(
    e,
    async (g, m) => {
      var x;
      const h = m !== g;
      if (await ne(), h) {
        const _ = n.value, C = Ta(t.value);
        g ? (i("MOUNT"), r("enter"), C === "none" && r("after-enter")) : C === "none" || ((x = a.value) == null ? void 0 : x.display) === "none" ? (i("UNMOUNT"), r("leave"), r("after-leave")) : m && _ !== C ? (i("ANIMATION_OUT"), r("leave")) : (i("UNMOUNT"), r("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (g) => {
    const m = Ta(t.value), x = m.includes(
      g.animationName
    ), h = s.value === "mounted" ? "enter" : "leave";
    g.target === t.value && x && (r(`after-${h}`), i("ANIMATION_END")), g.target === t.value && m === "none" && i("ANIMATION_END");
  }, u = (g) => {
    g.target === t.value && (n.value = Ta(t.value));
  }, c = Q(
    t,
    (g, m) => {
      g ? (a.value = getComputedStyle(g), g.addEventListener("animationstart", u), g.addEventListener("animationcancel", d), g.addEventListener("animationend", d)) : (i("ANIMATION_END"), m == null || m.removeEventListener("animationstart", u), m == null || m.removeEventListener("animationcancel", d), m == null || m.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), p = Q(s, () => {
    const g = Ta(t.value);
    n.value = s.value === "mounted" ? g : "none";
  });
  return Ct(() => {
    c(), p();
  }), {
    isPresent: k(
      () => ["mounted", "unmountSuspended"].includes(s.value)
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
    const { present: o, forceMount: s } = me(e), i = M(), { isPresent: r } = wu(o, i);
    a({ present: r });
    let d = t.default({ present: r });
    d = nn(d || []);
    const u = je();
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
    return () => s.value || o.value || r.value ? Ne(t.default({ present: r })[0], {
      ref: (c) => {
        const p = Se(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? i.value = p.firstElementChild : i.value = p), p;
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
    }), o = M(), s = M(), { modal: i } = me(a);
    return _u({
      open: n,
      modal: i,
      openModal: () => {
        n.value = !0;
      },
      onOpenChange: (r) => {
        n.value = r;
      },
      onOpenToggle: () => {
        n.value = !n.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: o,
      contentElement: s
    }), (r, d) => w(r.$slots, "default", { open: l(n) });
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
    }), (s, i) => (v(), y(l(R), E(t, {
      ref: l(n),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": l(a).open.value || !1,
      "aria-controls": l(a).open.value ? l(a).contentId : void 0,
      "data-state": l(a).open.value ? "open" : "closed",
      onClick: l(a).onOpenToggle
    }), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), sn = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = ts();
    return (a, n) => l(t) || a.forceMount ? (v(), y(Xa, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      w(a.$slots, "default")
    ], 8, ["to", "disabled"])) : J("", !0);
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
    return (a, n) => (v(), y(l(sn), j(G(t)), {
      default: f(() => [
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
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1), s = M(() => {
  });
  return ge((i) => {
    if (!Ke)
      return;
    const r = async (u) => {
      const c = u.target;
      if (t != null && t.value) {
        if (rs(t.value, c)) {
          o.value = !1;
          return;
        }
        if (u.target && !o.value) {
          let p = function() {
            po(
              $u,
              e,
              g
            );
          };
          const g = { originalEvent: u };
          u.pointerType === "touch" ? (n.removeEventListener("click", s.value), s.value = p, n.addEventListener("click", s.value, {
            once: !0
          })) : p();
        } else
          n.removeEventListener("click", s.value);
        o.value = !1;
      }
    }, d = window.setTimeout(() => {
      n.addEventListener("pointerdown", r);
    }, 0);
    i(() => {
      window.clearTimeout(d), n.removeEventListener("pointerdown", r), n.removeEventListener("click", s.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function Pu(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1);
  return ge((s) => {
    if (!Ke)
      return;
    const i = async (r) => {
      t != null && t.value && (await ne(), !(!t.value || rs(t.value, r.target)) && r.target && !o.value && po(
        ku,
        e,
        { originalEvent: r }
      ));
    };
    n.addEventListener("focusin", i), s(() => n.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const Ae = vl({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ka = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: s } = N(), i = k(
      () => {
        var x;
        return ((x = s.value) == null ? void 0 : x.ownerDocument) ?? globalThis.document;
      }
    ), r = k(() => Ae.layersRoot), d = k(() => s.value ? Array.from(r.value).indexOf(s.value) : -1), u = k(() => Ae.layersWithOutsidePointerEventsDisabled.size > 0), c = k(() => {
      const x = Array.from(r.value), [h] = [...Ae.layersWithOutsidePointerEventsDisabled].slice(-1), _ = x.indexOf(h);
      return d.value >= _;
    }), p = Bu(async (x) => {
      const h = [...Ae.branches].some(
        (_) => _ == null ? void 0 : _.contains(x.target)
      );
      !c.value || h || (n("pointerDownOutside", x), n("interactOutside", x), await ne(), x.defaultPrevented || n("dismiss"));
    }, s), g = Pu((x) => {
      [...Ae.branches].some(
        (h) => h == null ? void 0 : h.contains(x.target)
      ) || (n("focusOutside", x), n("interactOutside", x), x.defaultPrevented || n("dismiss"));
    }, s);
    fo("Escape", (x) => {
      d.value === r.value.size - 1 && (n("escapeKeyDown", x), x.defaultPrevented || n("dismiss"));
    });
    let m;
    return ge((x) => {
      s.value && (a.disableOutsidePointerEvents && (Ae.layersWithOutsidePointerEventsDisabled.size === 0 && (m = i.value.body.style.pointerEvents, i.value.body.style.pointerEvents = "none"), Ae.layersWithOutsidePointerEventsDisabled.add(s.value)), r.value.add(s.value), x(() => {
        a.disableOutsidePointerEvents && Ae.layersWithOutsidePointerEventsDisabled.size === 1 && (i.value.body.style.pointerEvents = m);
      }));
    }), ge((x) => {
      x(() => {
        s.value && (r.value.delete(s.value), Ae.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (x, h) => (v(), y(l(R), {
      ref: l(o),
      "as-child": x.asChild,
      as: x.as,
      "data-dismissable-layer": "",
      style: ba({
        pointerEvents: u.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(g).onFocusCapture,
      onBlurCapture: l(g).onBlurCapture,
      onPointerdownCapture: l(p).onPointerDownCapture
    }, {
      default: f(() => [
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
      Ae.branches.add(n.value);
    }), Ct(() => {
      Ae.branches.delete(n.value);
    }), (o, s) => (v(), y(l(R), E({ ref: l(a) }, t), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cn = "focusScope.autoFocusOnMount", $n = "focusScope.autoFocusOnUnmount", Qo = { bubbles: !1, cancelable: !0 };
function Wa(e, { select: t = !1 } = {}) {
  const a = document.activeElement;
  for (const n of e)
    if (ct(n, { select: t }), document.activeElement !== a)
      return !0;
}
function Ou(e) {
  const t = go(e), a = el(t, e), n = el(t.reverse(), e);
  return [a, n];
}
function go(e) {
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
function Au() {
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
function Tu(e) {
  return e.filter((t) => t.tagName !== "A");
}
const rn = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, n = t, { currentRef: o, currentElement: s } = N(), i = M(null), r = Au(), d = vl({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ge((c) => {
      if (!Ke)
        return;
      const p = s.value;
      if (!a.trapped)
        return;
      function g(_) {
        if (d.paused || !p)
          return;
        const C = _.target;
        p.contains(C) ? i.value = C : ct(i.value, { select: !0 });
      }
      function m(_) {
        if (d.paused || !p)
          return;
        const C = _.relatedTarget;
        C !== null && (p.contains(C) || ct(i.value, { select: !0 }));
      }
      function x(_) {
        p.contains(i.value) || ct(p);
      }
      document.addEventListener("focusin", g), document.addEventListener("focusout", m);
      const h = new MutationObserver(x);
      p && h.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", m), h.disconnect();
      });
    }), ge(async (c) => {
      const p = s.value;
      if (await ne(), !p)
        return;
      r.add(d);
      const g = document.activeElement;
      if (!p.contains(g)) {
        const m = new CustomEvent(Cn, Qo);
        p.addEventListener(Cn, (x) => n("mountAutoFocus", x)), p.dispatchEvent(m), m.defaultPrevented || (Wa(Tu(go(p)), {
          select: !0
        }), document.activeElement === g && ct(p));
      }
      c(() => {
        p.removeEventListener(Cn, (h) => n("mountAutoFocus", h));
        const m = new CustomEvent($n, Qo), x = (h) => {
          n("unmountAutoFocus", h);
        };
        p.addEventListener($n, x), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || ct(g ?? document.body, { select: !0 }), p.removeEventListener($n, x), r.remove(d);
        }, 0);
      });
    });
    function u(c) {
      if (!a.loop && !a.trapped || d.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, g = document.activeElement;
      if (p && g) {
        const m = c.currentTarget, [x, h] = Ou(m);
        x && h ? !c.shiftKey && g === h ? (c.preventDefault(), a.loop && ct(x, { select: !0 })) : c.shiftKey && g === x && (c.preventDefault(), a.loop && ct(h, { select: !0 })) : g === m && c.preventDefault();
      }
    }
    return (c, p) => (v(), y(l(R), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: u
    }, {
      default: f(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Iu = "menu.itemSelect", Ln = ["Enter", " "], Vu = ["ArrowDown", "PageUp", "Home"], is = ["ArrowUp", "PageDown", "End"], Ru = [...Vu, ...is], Fu = {
  ltr: [...Ln, "ArrowRight"],
  rtl: [...Ln, "ArrowLeft"]
}, Lu = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function yo(e) {
  return e ? "open" : "closed";
}
function qa(e) {
  return e === "indeterminate";
}
function bo(e) {
  return qa(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Nn(e) {
  const t = document.activeElement;
  for (const a of e)
    if (a === t || (a.focus(), document.activeElement !== t))
      return;
}
function Nu(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const r = t[s].x, d = t[s].y, u = t[i].x, c = t[i].y;
    d > n != c > n && a < (u - r) * (n - d) / (c - d) + r && (o = !o);
  }
  return o;
}
function zu(e, t) {
  if (!t)
    return !1;
  const a = { x: e.clientX, y: e.clientY };
  return Nu(a, t);
}
function ma(e) {
  return e.pointerType === "mouse";
}
const Wu = "DialogTitle", Uu = "DialogContent";
function ju({
  titleName: e = Wu,
  contentName: t = Uu,
  componentLink: a = "dialog.html#title",
  titleId: n,
  descriptionId: o,
  contentElement: s
}) {
  const i = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${a}`, r = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  de(() => {
    var d;
    document.getElementById(n) || console.warn(i);
    const u = (d = s.value) == null ? void 0 : d.getAttribute("aria-describedby");
    o && u && (document.getElementById(o) || console.warn(r));
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
    const a = e, n = t, o = Ge(), { forwardRef: s, currentElement: i } = N();
    return o.titleId || (o.titleId = xe(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = xe(void 0, "radix-vue-dialog-description")), de(() => {
      o.contentElement = i, document.activeElement !== document.body && (o.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && ju({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: i
    }), (r, d) => (v(), y(l(rn), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: f(() => [
        O(l(ka), E({
          id: l(o).contentId,
          ref: l(s),
          as: r.as,
          "as-child": r.asChild,
          "disable-outside-pointer-events": r.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(o).descriptionId,
          "aria-labelledby": l(o).titleId,
          "data-state": l(yo)(l(o).open.value)
        }, r.$attrs, {
          onDismiss: d[0] || (d[0] = (u) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[2] || (d[2] = (u) => n("focusOutside", u)),
          onInteractOutside: d[3] || (d[3] = (u) => n("interactOutside", u)),
          onPointerDownOutside: d[4] || (d[4] = (u) => n("pointerDownOutside", u))
        }), {
          default: f(() => [
            w(r.$slots, "default")
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
    const a = e, n = t, o = Ge(), s = Bt(n), { forwardRef: i, currentElement: r } = N();
    return $a(r), (d, u) => (v(), y(ds, E({ ...a, ...l(s) }, {
      ref: l(i),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = l(o).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: u[1] || (u[1] = (c) => {
        const p = c.detail.originalEvent, g = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || g) && c.preventDefault();
      }),
      onFocusOutside: u[2] || (u[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: f(() => [
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
    const o = Ge(), s = M(!1), i = M(!1);
    return (r, d) => (v(), y(ds, E({ ...a, ...l(n) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (u) => {
        var c;
        u.defaultPrevented || (s.value || (c = l(o).triggerElement.value) == null || c.focus(), u.preventDefault()), s.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (u) => {
        var c;
        u.defaultPrevented || (s.value = !0, u.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const p = u.target;
        (c = l(o).triggerElement.value) != null && c.contains(p) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && i.value && u.preventDefault();
      })
    }), {
      default: f(() => [
        w(r.$slots, "default")
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
    const a = e, n = t, o = Ge(), s = Bt(n), { forwardRef: i } = N();
    return (r, d) => (v(), y(l(Re), {
      present: r.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), y(Hu, E({
          key: 0,
          ref: l(i)
        }, { ...a, ...l(s), ...r.$attrs }), {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), y(Ku, E({
          key: 1,
          ref: l(i)
        }, { ...a, ...l(s), ...r.$attrs }), {
          default: f(() => [
            w(r.$slots, "default")
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
    return Ca(!0), N(), (a, n) => (v(), y(l(R), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": l(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: f(() => [
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
      var s;
      return (s = l(t)) != null && s.modal.value ? (v(), y(l(Re), {
        key: 0,
        present: n.forceMount || l(t).open.value
      }, {
        default: f(() => [
          O(Gu, E(n.$attrs, {
            ref: l(a),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: f(() => [
              w(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : J("", !0);
    };
  }
}), wo = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const a = Ge();
    return (n, o) => (v(), y(l(R), E(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (s) => l(a).onOpenChange(!1))
    }), {
      default: f(() => [
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
    return N(), (n, o) => (v(), y(l(R), E(t, {
      id: l(a).titleId
    }), {
      default: f(() => [
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
    return (n, o) => (v(), y(l(R), E(t, {
      id: l(a).descriptionId
    }), {
      default: f(() => [
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
      var n, o, s, i;
      if (Array.isArray(e.date.value)) {
        if (!e.date.value.length)
          return !1;
        for (const r of e.date.value)
          if ((n = e.isDateDisabled) != null && n.call(e, r) || (o = e.isDateUnavailable) != null && o.call(e, r))
            return !0;
      } else {
        if (!e.date.value)
          return !1;
        if ((s = e.isDateDisabled) != null && s.call(e, e.date.value) || (i = e.isDateUnavailable) != null && i.call(e, e.date.value))
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
  return n >= 7 && (o.day = 1), n >= pa(e) && (o.month = 1), a.set({ ...o });
}
function Ju(e, t) {
  const a = t(e), n = e.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= pa(e) && (o.month = 13), a.set({ ...o });
}
function Qu(e, t) {
  return t(e);
}
function ec(e, t) {
  return t(e);
}
function ps(e) {
  const t = uu(e.locale.value), a = k(() => {
    const h = {
      calendar: e.placeholder.value.calendar.identifier
    };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (h.era = "short"), h;
  }), n = M(bt({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), o = k(() => n.value.map((h) => h.value));
  function s(h) {
    return !o.value.some((_) => Io(h, _));
  }
  const i = (h = "month", _) => {
    if (!e.maxValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[n.value.length - 1].value;
    if (_ || e.nextPage.value) {
      const $ = Xu(C, _ || e.nextPage.value);
      return da($, e.maxValue.value);
    }
    if (h === "year") {
      const $ = C.add({ years: 1 }).set({ day: 1, month: 1 });
      return da($, e.maxValue.value);
    }
    const P = C.add({ months: 1 }).set({ day: 1 });
    return da(P, e.maxValue.value);
  }, r = (h = "month", _) => {
    if (!e.minValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[0].value;
    if (_ || e.prevPage.value) {
      const $ = Ju(C, _ || e.prevPage.value);
      return pt($, e.minValue.value);
    }
    if (h === "year") {
      const $ = C.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return pt($, e.minValue.value);
    }
    const P = C.subtract({ months: 1 }).set({ day: 35 });
    return pt(P, e.minValue.value);
  };
  function d(h) {
    var _;
    return !!((_ = e.isDateDisabled) != null && _.call(e, h) || e.disabled.value || e.maxValue.value && da(h, e.maxValue.value) || e.minValue.value && pt(h, e.minValue.value));
  }
  const u = (h) => {
    var _;
    return !!((_ = e.isDateUnavailable) != null && _.call(e, h));
  }, c = k(() => n.value.length ? n.value[0].rows[0].map((h) => t.dayOfWeek(Te(h), e.weekdayFormat.value)) : []), p = (h = "month", _) => {
    const C = n.value[0].value;
    if (_ || e.nextPage.value) {
      const D = Qu(C, _ || e.nextPage.value), S = bt({
        dateObj: D,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = S;
      const I = {};
      if (!_) {
        const T = S[0].value.compare(C);
        T >= pa(C) && (I.day = 1), T >= 365 && (I.month = 1);
      }
      e.placeholder.value = S[0].value.set({ ...I });
      return;
    }
    const P = h === "month" ? C.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.add({ years: 1 }), $ = bt({
      dateObj: P,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = $, e.placeholder.value = $[0].value.set({ day: 1 });
  }, g = (h = "month", _) => {
    const C = n.value[0].value;
    if (_ || e.prevPage.value) {
      const D = ec(C, _ || e.prevPage.value), S = bt({
        dateObj: D,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = S;
      const I = {};
      if (!_) {
        const T = C.compare(S[0].value);
        T >= pa(C) && (I.day = 1), T >= 365 && (I.month = 1);
      }
      e.placeholder.value = S[0].value.set({ ...I });
      return;
    }
    const P = h === "month" ? C.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.subtract({ years: 1 }), $ = bt({
      dateObj: P,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = $, e.placeholder.value = $[0].value.set({ day: 1 });
  };
  Q(e.placeholder, (h) => {
    o.value.some((_) => Io(_, h)) || (n.value = bt({
      dateObj: h,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), Q([e.locale, e.weekStartsOn, e.fixedWeeks, e.numberOfMonths], () => {
    n.value = bt({
      dateObj: e.placeholder.value,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
  });
  const m = k(() => {
    if (!n.value.length)
      return "";
    if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value), n.value.length === 1) {
      const S = n.value[0].value;
      return `${t.fullMonthAndYear(Te(S), a.value)}`;
    }
    const h = Te(n.value[0].value), _ = Te(n.value[n.value.length - 1].value), C = t.fullMonth(h, a.value), P = t.fullMonth(_, a.value), $ = t.fullYear(h, a.value), D = t.fullYear(_, a.value);
    return $ === D ? `${C} - ${P} ${D}` : `${C} ${$} - ${P} ${D}`;
  }), x = k(() => `${e.calendarLabel.value ?? "Event Date"}, ${m.value}`);
  return {
    isDateDisabled: d,
    isDateUnavailable: u,
    isNextButtonDisabled: i,
    isPrevButtonDisabled: r,
    grid: n,
    weekdays: c,
    visibleView: o,
    isOutsideVisibleView: s,
    formatter: t,
    nextPage: p,
    prevPage: g,
    headingValue: m,
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
      disabled: s,
      readonly: i,
      initialFocus: r,
      pagedNavigation: d,
      weekStartsOn: u,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: g,
      minValue: m,
      maxValue: x,
      numberOfMonths: h,
      preventDeselect: _,
      isDateDisabled: C,
      isDateUnavailable: P,
      calendarLabel: $,
      defaultValue: D,
      nextPage: S,
      prevPage: I,
      dir: T
    } = me(a), { primitiveElement: W, currentElement: L } = Yt(), B = gt(T), A = ve(a, "modelValue", n, {
      defaultValue: D.value,
      passive: a.modelValue === void 0
    }), V = Xl({
      defaultPlaceholder: a.placeholder,
      defaultValue: A.value
    }), K = ve(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? V.copy(),
      passive: a.placeholder === void 0
    });
    function H(se) {
      K.value = se.copy();
    }
    const {
      fullCalendarLabel: U,
      headingValue: q,
      isDateDisabled: te,
      isDateUnavailable: ue,
      isNextButtonDisabled: fe,
      isPrevButtonDisabled: $e,
      weekdays: ye,
      isOutsideVisibleView: aa,
      nextPage: yt,
      prevPage: na,
      formatter: st,
      grid: oa
    } = ps({
      locale: o,
      placeholder: K,
      weekStartsOn: u,
      fixedWeeks: p,
      numberOfMonths: h,
      minValue: m,
      maxValue: x,
      disabled: s,
      weekdayFormat: c,
      pagedNavigation: d,
      isDateDisabled: C.value,
      isDateUnavailable: P.value,
      calendarLabel: $,
      nextPage: S,
      prevPage: I
    }), {
      isInvalid: De,
      isDateSelected: ke
    } = Zu({
      date: A,
      isDateDisabled: te,
      isDateUnavailable: ue
    });
    Q(A, (se) => {
      if (Array.isArray(se) && se.length) {
        const Ce = se[se.length - 1];
        Ce && !Le(K.value, Ce) && H(Ce);
      } else !Array.isArray(se) && se && !Le(K.value, se) && H(se);
    });
    function Fe(se) {
      if (g.value) {
        if (Array.isArray(A.value)) {
          if (!A.value) {
            A.value = [se.copy()];
            return;
          }
          if (A.value.findIndex((Ce) => we(Ce, se)) === -1)
            A.value = [...A.value, se];
          else if (!_.value) {
            const Ce = A.value.filter((Ye) => !we(Ye, se));
            if (!Ce.length) {
              K.value = se.copy(), A.value = void 0;
              return;
            }
            A.value = Ce.map((Ye) => Ye.copy());
          }
        }
      } else {
        if (!A.value) {
          A.value = se.copy();
          return;
        }
        !_.value && Le(A.value, se) ? (K.value = se.copy(), A.value = void 0) : A.value = se.copy();
      }
    }
    return de(() => {
      r.value && Jl(L.value);
    }), nc({
      isDateUnavailable: ue,
      dir: B,
      isDateDisabled: te,
      locale: o,
      formatter: st,
      modelValue: A,
      placeholder: K,
      disabled: s,
      initialFocus: r,
      pagedNavigation: d,
      weekStartsOn: u,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: g,
      numberOfMonths: h,
      readonly: i,
      preventDeselect: _,
      fullCalendarLabel: U,
      headingValue: q,
      isInvalid: De,
      isDateSelected: ke,
      isNextButtonDisabled: fe,
      isPrevButtonDisabled: $e,
      isOutsideVisibleView: aa,
      nextPage: yt,
      prevPage: na,
      parentElement: L,
      onPlaceholderChange: H,
      onDateChange: Fe
    }), (se, Ce) => (v(), y(l(R), {
      ref_key: "primitiveElement",
      ref: W,
      as: se.as,
      "as-child": se.asChild,
      role: "application",
      "aria-label": l(U),
      "data-readonly": l(i) ? "" : void 0,
      "data-disabled": l(s) ? "" : void 0,
      "data-invalid": l(De) ? "" : void 0,
      dir: l(B)
    }, {
      default: f(() => [
        w(se.$slots, "default", {
          date: l(K),
          grid: l(oa),
          weekDays: l(ye),
          weekStartsOn: l(u),
          locale: l(o),
          fixedWeeks: l(p)
        }),
        oe("div", tc, [
          oe("div", ac, Z(l(U)), 1)
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
    return (a, n) => (v(), y(l(R), j(G(t)), {
      default: f(() => [
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
    return (n, o) => (v(), y(l(R), E(t, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        w(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          Y(Z(l(a).headingValue.value), 1)
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
    return (s, i) => (v(), y(l(R), E(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: f(() => [
        w(s.$slots, "default")
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
      var o, s;
      return v(), y(l(R), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": l(t).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": l(t).isDateDisabled(a.date) || ((s = (o = l(t)).isDateUnavailable) == null ? void 0 : s.call(o, a.date)),
        "data-disabled": l(t).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
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
    return (a, n) => (v(), y(l(R), j(G(t)), {
      default: f(() => [
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
    return (o, s) => (v(), y(l(R), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (i) => l(n).nextPage(t.step, t.nextPage))
    }, {
      default: f(() => [
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
    return (o, s) => (v(), y(l(R), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (i) => l(n).prevPage(t.step, t.prevPage))
    }, {
      default: f(() => [
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
    return (a, n) => (v(), y(l(R), E(t, { "aria-hidden": "true" }), {
      default: f(() => [
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
    return (a, n) => (v(), y(l(R), j(G(t)), {
      default: f(() => [
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
    return (a, n) => (v(), y(l(R), j(G(t)), {
      default: f(() => [
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
    const t = e, a = ls(), n = Zt(), { primitiveElement: o, currentElement: s } = Yt(), i = k(() => t.day.day.toLocaleString(n.locale.value)), r = k(() => n.formatter.custom(Te(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), d = k(() => n.isDateDisabled(t.day)), u = k(
      () => {
        var $;
        return ($ = n.isDateUnavailable) == null ? void 0 : $.call(n, t.day);
      }
    ), c = k(() => Ol(t.day, $t())), p = k(() => !Dl(t.day, t.month)), g = k(
      () => n.isOutsideVisibleView(t.day)
    ), m = k(() => !n.disabled.value && we(t.day, n.placeholder.value)), x = k(() => n.isDateSelected(t.day)), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function _($) {
      var D;
      n.readonly.value || n.isDateDisabled($) || (D = n.isDateUnavailable) != null && D.call(n, $) || n.onDateChange($);
    }
    function C() {
      _(t.day);
    }
    function P($) {
      $.preventDefault(), $.stopPropagation();
      const D = n.parentElement.value, S = D ? Array.from(D.querySelectorAll(h)) : [];
      let I = S.indexOf(s.value);
      const T = 7, W = n.dir.value === "rtl" ? -1 : 1;
      switch ($.code) {
        case a.ARROW_RIGHT:
          I += W;
          break;
        case a.ARROW_LEFT:
          I -= W;
          break;
        case a.ARROW_UP:
          I -= T;
          break;
        case a.ARROW_DOWN:
          I += T;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          _(t.day);
          return;
        default:
          return;
      }
      if (I >= 0 && I < S.length) {
        S[I].focus();
        return;
      }
      if (I < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), ne(() => {
          const L = D ? Array.from(D.querySelectorAll(h)) : [];
          L[L.length - Math.abs(I)].focus();
        });
        return;
      }
      if (I >= S.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), ne(() => {
          (D ? Array.from(D.querySelectorAll(h)) : [])[I - S.length].focus();
        });
      }
    }
    return ($, D) => (v(), y(l(R), E({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": p.value || d.value || u.value ? !0 : void 0,
      "data-selected": x.value ? !0 : void 0,
      "data-value": $.day.toString(),
      "data-disabled": d.value || p.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": c.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": g.value ? "" : void 0,
      "data-focused": m.value ? "" : void 0,
      tabindex: m.value ? 0 : p.value || d.value ? void 0 : -1,
      onClick: C,
      onKeydown: [
        ze(P, ["up", "down", "left", "right", "space", "enter"]),
        D[0] || (D[0] = ze(_e(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: f(() => [
        w($.$slots, "default", { dayValue: i.value }, () => [
          Y(Z(i.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Ya(e) {
  return e === "indeterminate";
}
function fs(e) {
  return Ya(e) ? "indeterminate" : e ? "checked" : "unchecked";
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
    const a = e, n = t, { disabled: o } = me(a), s = ve(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    }), { forwardRef: i, currentElement: r } = N(), d = ln(r), u = k(() => {
      var c;
      return a.id && r.value ? (c = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return yc({
      disabled: o,
      state: s
    }), (c, p) => (v(), F(ee, null, [
      O(l(R), E(c.$attrs, {
        id: c.id,
        ref: l(i),
        role: "checkbox",
        "as-child": a.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": l(Ya)(l(s)) ? "mixed" : l(s),
        "aria-required": !1,
        "aria-label": c.$attrs["aria-label"] || u.value,
        "data-state": l(fs)(l(s)),
        "data-disabled": l(o) ? "" : void 0,
        disabled: l(o),
        onKeydown: ze(_e(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (g) => s.value = l(Ya)(l(s)) ? !0 : !l(s))
      }), {
        default: f(() => [
          w(c.$slots, "default", { checked: l(s) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      l(d) ? (v(), F("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "true",
        value: c.value,
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
      }, null, 8, hc)) : J("", !0)
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
    return (n, o) => (v(), y(l(Re), {
      present: n.forceMount || l(Ya)(l(a).state.value) || l(a).state.value === !0
    }, {
      default: f(() => [
        O(l(R), E({
          ref: l(t),
          "data-state": l(fs)(l(a).state.value),
          "data-disabled": l(a).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: f(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [vs, _c] = ie("PopperRoot"), Ba = /* @__PURE__ */ b({
  __name: "PopperRoot",
  setup(e) {
    const t = M();
    return _c({
      anchor: t,
      onAnchorChange: (a) => t.value = a
    }), (a, n) => w(a.$slots, "default");
  }
}), _o = /* @__PURE__ */ b({
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
    }), (s, i) => (v(), y(l(R), {
      ref: l(a),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: f(() => [
        w(s.$slots, "default")
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
      const { placement: s, rects: i, middlewareData: r } = t, d = ((a = r.arrow) == null ? void 0 : a.centerOffset) !== 0, u = d ? 0 : e.arrowWidth, c = d ? 0 : e.arrowHeight, [p, g] = zn(s), m = { start: "0%", center: "50%", end: "100%" }[g], x = (((n = r.arrow) == null ? void 0 : n.x) ?? 0) + u / 2, h = (((o = r.arrow) == null ? void 0 : o.y) ?? 0) + c / 2;
      let _ = "", C = "";
      return p === "bottom" ? (_ = d ? m : `${x}px`, C = `${-c}px`) : p === "top" ? (_ = d ? m : `${x}px`, C = `${i.floating.height + c}px`) : p === "right" ? (_ = `${-c}px`, C = d ? m : `${h}px`) : p === "left" && (_ = `${i.floating.width + c}px`, C = d ? m : `${h}px`), { data: { x: _, y: C } };
    }
  };
}
function zn(e) {
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
}, [mg, $c] = ie("PopperContent"), ha = /* @__PURE__ */ b({
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
    const a = e, n = t, o = vs(), { forwardRef: s, currentElement: i } = N(), r = M(), d = M(), { width: u, height: c } = hu(d), p = k(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), g = k(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = k(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), x = k(() => ({
      padding: g.value,
      boundary: m.value.filter(xc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), h = Nd(() => [
      Pd({
        mainAxis: a.sideOffset + c.value,
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
        apply: ({ elements: B, rects: A, availableWidth: V, availableHeight: K }) => {
          const { width: H, height: U } = A.reference, q = B.floating.style;
          q.setProperty(
            "--radix-popper-available-width",
            `${V}px`
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
      d.value && Id({ element: d.value, padding: a.arrowPadding }),
      Cc({
        arrowWidth: u.value,
        arrowHeight: c.value
      }),
      a.hideWhenDetached && Sd({ strategy: "referenceHidden", ...x.value })
    ]), { floatingStyles: _, placement: C, isPositioned: P, middlewareData: $ } = Vd(
      o.anchor,
      r,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...B) => Bd(...B, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: h
      }
    ), D = k(
      () => zn(C.value)[0]
    ), S = k(
      () => zn(C.value)[1]
    );
    yr(() => {
      P.value && n("placed");
    });
    const I = k(
      () => {
        var B;
        return ((B = $.value.arrow) == null ? void 0 : B.centerOffset) !== 0;
      }
    ), T = M("");
    ge(() => {
      i.value && (T.value = window.getComputedStyle(i.value).zIndex);
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
      shouldHideArrow: I
    }), (B, A) => {
      var V, K, H;
      return v(), F("div", {
        ref_key: "floatingRef",
        ref: r,
        "data-radix-popper-content-wrapper": "",
        style: ba({
          ...l(_),
          transform: l(P) ? l(_).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: T.value,
          "--radix-popper-transform-origin": [
            (V = l($).transformOrigin) == null ? void 0 : V.x,
            (K = l($).transformOrigin) == null ? void 0 : K.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((H = l($).hide) == null ? void 0 : H.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        O(l(R), E({ ref: l(s) }, B.$attrs, {
          "as-child": a.asChild,
          as: B.as,
          "data-side": D.value,
          "data-align": S.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l(P) ? void 0 : "none"
          }
        }), {
          default: f(() => [
            w(B.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), dn = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return N(), (t, a) => (v(), y(l(R), {
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
    const t = e, a = k(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([s, i]) => ({ name: `[${o}][${t.name}][${s}]`, value: i })) : { name: `[${t.name}][${o}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, o]) => ({ name: `[${t.name}][${n}]`, value: o })) : []);
    return (n, o) => (v(!0), F(ee, null, he(a.value, (s) => (v(), y(dn, {
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
}), Bc = "data-radix-vue-collection-item", [xo, Pc] = ie("CollectionProvider");
function hs(e = Bc) {
  const t = M(/* @__PURE__ */ new Map()), a = M(), n = Pc({
    collectionRef: a,
    itemMap: t,
    attrName: e
  }), { getItems: o } = ys(n), s = k(() => Array.from(n.itemMap.value.values())), i = k(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: s, itemMapSize: i };
}
const gs = b({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const a = xo(), { primitiveElement: n, currentElement: o } = Yt();
    return Q(o, () => {
      a.collectionRef.value = o.value;
    }), () => Ne(ho, { ref: n }, t);
  }
}), Co = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: a }) {
    const n = xo(), { primitiveElement: o, currentElement: s } = Yt();
    return ge((i) => {
      if (s.value) {
        const r = ur(s.value);
        n.itemMap.value.set(r, { ref: s.value, value: e.value }), i(() => n.itemMap.value.delete(r));
      }
    }), () => Ne(ho, { ...a, [n.attrName]: "", ref: o }, t);
  }
});
function ys(e) {
  const t = e ?? xo();
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
    const a = e, n = t, { multiple: o, disabled: s, dir: i } = me(a), r = gt(i), d = ve(a, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: a.searchTerm === void 0
    }), u = ve(a, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: a.defaultValue ?? o.value ? [] : void 0,
      passive: a.modelValue === void 0,
      deep: !0
    }), c = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), p = ve(a, "selectedValue", n, {
      defaultValue: void 0,
      passive: a.selectedValue === void 0
    });
    async function g(U) {
      var q, te;
      c.value = U, await ne(), U ? (u.value && (Array.isArray(u.value) && o.value ? p.value = (q = $().find((ue) => {
        var fe, $e;
        return (($e = (fe = ue.ref) == null ? void 0 : fe.dataset) == null ? void 0 : $e.state) === "checked";
      })) == null ? void 0 : q.value : p.value = u.value), (te = h.value) == null || te.focus(), K()) : (x.value = !1, a.resetSearchTermOnBlur && W());
    }
    function m(U) {
      if (Array.isArray(u.value) && o.value) {
        const q = u.value.findIndex((ue) => wt(ue, U)), te = [...u.value];
        q === -1 ? te.push(U) : te.splice(q, 1), u.value = te;
      } else
        u.value = U, g(!1);
    }
    const x = M(!1), h = M(), _ = M(), { forwardRef: C, currentElement: P } = N(), { getItems: $, reactiveItems: D, itemMapSize: S } = hs("data-radix-vue-combobox-item"), I = M([]);
    Q(() => S.value, () => {
      I.value = $().map((U) => U.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const T = k(() => {
      if (x.value) {
        if (a.filterFunction)
          return a.filterFunction(I.value, d.value);
        const U = I.value.filter((q) => typeof q == "string");
        if (U.length)
          return U.filter((q) => {
            var te;
            return q.toLowerCase().includes((te = d.value) == null ? void 0 : te.toLowerCase());
          });
      }
      return I.value;
    });
    function W() {
      !o.value && u.value && !Array.isArray(u.value) ? a.displayValue ? d.value = a.displayValue(u.value) : typeof u.value != "object" ? d.value = u.value.toString() : d.value = "" : d.value = "";
    }
    const L = k(() => T.value.findIndex((U) => wt(U, p.value))), B = k(() => {
      var U;
      return (U = D.value.find((q) => wt(q.value, p.value))) == null ? void 0 : U.ref;
    }), A = k(() => JSON.stringify(u.value));
    Q(A, async () => {
      await ne(), await ne(), W();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), Q(() => [T.value.length, d.value.length], async ([U, q], [te, ue]) => {
      await ne(), await ne(), U && (ue > q || L.value === -1) && (p.value = T.value[0]);
    });
    const V = ln(P);
    function K() {
      B.value instanceof Element && B.value.scrollIntoView({ block: "nearest" });
    }
    function H() {
      B.value instanceof Element && B.value.focus && B.value.focus();
    }
    return Dc({
      searchTerm: d,
      modelValue: u,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: x,
      multiple: o,
      disabled: s,
      open: c,
      onOpenChange: g,
      filteredOptions: T,
      contentId: "",
      inputElement: h,
      selectedElement: B,
      onInputElementChange: (U) => h.value = U,
      onInputNavigation: async (U) => {
        const q = L.value;
        q === 0 && U === "up" || q === T.value.length - 1 && U === "down" || (q === -1 && T.value.length || U === "home" ? p.value = T.value[0] : U === "end" ? p.value = T.value[T.value.length - 1] : p.value = T.value[U === "up" ? q - 1 : q + 1], K(), H(), ne(() => {
          var te;
          return (te = h.value) == null ? void 0 : te.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async (U) => {
        var q;
        T.value.length && p.value && B.value instanceof Element && (U.preventDefault(), U.stopPropagation(), (q = B.value) == null || q.click());
      },
      selectedValue: p,
      onSelectedValueChange: (U) => p.value = U,
      parentElement: P,
      contentElement: _,
      onContentElementChange: (U) => _.value = U
    }), (U, q) => (v(), y(l(Ba), null, {
      default: f(() => [
        O(l(R), E({
          ref: l(C),
          style: {
            pointerEvents: l(c) ? "auto" : void 0
          },
          as: U.as,
          "as-child": U.asChild,
          dir: l(r)
        }, U.$attrs), {
          default: f(() => [
            w(U.$slots, "default", {
              open: l(c),
              modelValue: l(u)
            }),
            l(V) && a.name ? (v(), y(l(kc), {
              key: 0,
              name: a.name,
              value: l(u)
            }, null, 8, ["name", "value"])) : J("", !0)
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
      const c = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      c && (a.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const s = k(() => t.disabled || a.disabled.value || !1), i = M();
    cr(() => {
      var c;
      return i.value = (c = a.selectedElement.value) == null ? void 0 : c.id;
    });
    function r(c) {
      a.open.value ? a.onInputNavigation(c.key === "ArrowUp" ? "up" : "down") : a.onOpenChange(!0);
    }
    function d(c) {
      a.open.value && a.onInputNavigation(c.key === "Home" ? "home" : "end");
    }
    function u(c) {
      var p;
      a.searchTerm.value = (p = c.target) == null ? void 0 : p.value, a.open.value || a.onOpenChange(!0), a.isUserInputted.value = !0;
    }
    return (c, p) => (v(), y(l(R), {
      ref: l(n),
      as: c.as,
      "as-child": c.asChild,
      type: c.type,
      disabled: s.value,
      value: l(a).searchTerm.value,
      "aria-expanded": l(a).open.value,
      "aria-controls": l(a).contentId,
      "aria-disabled": s.value ?? void 0,
      "aria-activedescendant": i.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: u,
      onKeydown: [
        ze(_e(r, ["prevent"]), ["down", "up"]),
        ze(l(a).onInputEnter, ["enter"]),
        ze(_e(d, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: f(() => [
        w(c.$slots, "default")
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
    const t = e, { currentRef: a, currentElement: n } = N(), o = xe(void 0, "radix-vue-combobox-group"), s = Xt(), i = M(!1);
    function r() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      i.value = !!d.length;
    }
    return eu(n, () => {
      ne(() => {
        r();
      });
    }, { childList: !0 }), Q(() => s.searchTerm.value, () => {
      ne(() => {
        r();
      });
    }, { immediate: !0 }), Ec({
      id: o
    }), (d, u) => jt((v(), y(l(R), E(t, {
      ref_key: "currentRef",
      ref: a,
      role: "group",
      "aria-labelledby": l(o)
    }), {
      default: f(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [qn, i.value]
    ]);
  }
}), Ac = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(R), E(t, {
      id: l(a).id
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [hg, Tc] = ie("ComboboxContent"), Ic = /* @__PURE__ */ b({
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
    const a = e, n = t, { position: o } = me(a), s = Xt();
    Ca(a.bodyLock);
    const { forwardRef: i, currentElement: r } = N();
    $a(s.parentElement);
    const d = k(() => a.position === "popper" ? a : {}), u = ae(d.value);
    function c(g) {
      s.onSelectedValueChange("");
    }
    de(() => {
      s.onContentElementChange(r.value);
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
    return Tc({ position: o }), (g, m) => (v(), y(l(gs), null, {
      default: f(() => [
        g.dismissable ? (v(), y(l(ka), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": g.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (x) => l(s).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (x) => {
            var h;
            (h = l(s).parentElement.value) != null && h.contains(x.target) && x.preventDefault(), n("focusOutside", x);
          }),
          onInteractOutside: m[2] || (m[2] = (x) => n("interactOutside", x)),
          onEscapeKeyDown: m[3] || (m[3] = (x) => n("escapeKeyDown", x)),
          onPointerDownOutside: m[4] || (m[4] = (x) => {
            var h;
            (h = l(s).parentElement.value) != null && h.contains(x.target) && x.preventDefault(), n("pointerDownOutside", x);
          })
        }, {
          default: f(() => [
            (v(), y(We(l(o) === "popper" ? l(ha) : l(R)), E({ ...g.$attrs, ...l(u) }, {
              id: l(s).contentId,
              ref: l(i),
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
              onPointerleave: c
            }), {
              default: f(() => [
                w(g.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (v(), y(We(l(o) === "popper" ? l(ha) : l(R)), E({ key: 1 }, { ...g.$attrs, ...d.value }, {
          id: l(s).contentId,
          ref: l(i),
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
          onPointerleave: c
        }), {
          default: f(() => [
            w(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Vc = /* @__PURE__ */ b({
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
    return o.contentId || (o.contentId = xe(void 0, "radix-vue-combobox-content")), (s, i) => (v(), y(l(Re), {
      present: s.forceMount || l(o).open.value
    }, {
      default: f(() => [
        O(Ic, E({ ...l(a), ...s.$attrs }, { ref: l(n) }), {
          default: f(() => [
            w(s.$slots, "default")
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
    return (o, s) => n.value ? (v(), y(l(R), j(E({ key: 0 }, t)), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Y("No options")
        ])
      ]),
      _: 3
    }, 16)) : J("", !0);
  }
});
function Fc(e) {
  const t = on({
    nonce: M()
  });
  return k(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.nonce) == null ? void 0 : a.value);
  });
}
const [gg, Lc] = ie("ComboboxItem"), Nc = "combobox.select", zc = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { disabled: o } = me(a), s = Xt();
    bs({ id: "", options: M([]) });
    const { forwardRef: i } = N(), r = k(
      () => {
        var h, _;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (h = s.modelValue.value) == null ? void 0 : h.some((C) => wt(C, a.value)) : wt((_ = s.modelValue) == null ? void 0 : _.value, a.value);
      }
    ), d = k(() => wt(s.selectedValue.value, a.value)), u = xe(void 0, "radix-vue-combobox-item"), c = xe(void 0, "radix-vue-combobox-option"), p = k(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((h) => wt(h, a.value)) : !0);
    async function g(h) {
      n("select", h), !(h != null && h.defaultPrevented) && !o.value && h && s.onValueChange(a.value);
    }
    function m(h) {
      if (!h)
        return;
      const _ = { originalEvent: h, value: a.value };
      po(Nc, g, _);
    }
    async function x(h) {
      await ne(), !h.defaultPrevented && s.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Lc({
      isSelected: r
    }), (h, _) => (v(), y(l(Co), { value: h.value }, {
      default: f(() => [
        jt(O(l(R), {
          id: l(c),
          ref: l(i),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": l(u),
          "data-highlighted": d.value ? "" : void 0,
          "aria-selected": r.value,
          "data-state": r.value ? "checked" : "unchecked",
          "aria-disabled": l(o) || void 0,
          "data-disabled": l(o) ? "" : void 0,
          as: h.as,
          "as-child": h.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: m,
          onPointermove: x
        }, {
          default: f(() => [
            w(h.$slots, "default", {}, () => [
              Y(Z(h.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [qn, p.value]
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
    return N(), (a, n) => (v(), y(l(R), E(t, { "aria-hidden": "true" }), {
      default: f(() => [
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
    return (a, n) => (v(), y(l(_o), j(G(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Uc() {
  const e = M(!1);
  return de(() => {
    Ga("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Ga(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const jc = Ql(Uc), [Pt, _s] = ie(["MenuRoot", "MenuSub"], "MenuContext"), [Pa, Hc] = ie("MenuRoot"), Kc = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o, dir: s } = me(a), i = gt(s), r = ve(a, "open", n), d = M(), u = jc();
    return _s({
      open: r,
      onOpenChange: (c) => {
        r.value = c;
      },
      content: d,
      onContentChange: (c) => {
        d.value = c;
      }
    }), Hc({
      onClose: () => {
        r.value = !1;
      },
      isUsingKeyboardRef: u,
      dir: i,
      modal: o
    }), (c, p) => (v(), y(l(Ba), null, {
      default: f(() => [
        w(c.$slots, "default")
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
    const n = e, o = a, { loop: s, orientation: i, dir: r } = me(n), d = gt(r), u = ve(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = M(!1), p = M(!1), g = M(0), { getItems: m } = hs();
    function x(_) {
      const C = !p.value;
      if (_.currentTarget && _.target === _.currentTarget && C && !c.value) {
        const P = new CustomEvent(Gc, qc);
        if (_.currentTarget.dispatchEvent(P), o("entryFocus", P), !P.defaultPrevented) {
          const $ = m().map((T) => T.ref).filter((T) => T.dataset.disabled !== ""), D = $.find((T) => T.getAttribute("data-active") === "true"), S = $.find(
            (T) => T.id === u.value
          ), I = [D, S, ...$].filter(
            Boolean
          );
          xs(I, n.preventScrollOnEntryFocus);
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
    }), ep({
      loop: s,
      dir: d,
      orientation: i,
      currentTabStopId: u,
      onItemFocus: (_) => {
        u.value = _;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        g.value++;
      },
      onFocusableItemRemove: () => {
        g.value--;
      }
    }), (_, C) => (v(), y(l(gs), null, {
      default: f(() => [
        O(l(R), {
          tabindex: c.value || g.value === 0 ? -1 : 0,
          "data-orientation": l(i),
          as: _.as,
          "as-child": _.asChild,
          dir: l(d),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (P) => p.value = !0),
          onMouseup: h,
          onFocus: x,
          onBlur: C[1] || (C[1] = (P) => c.value = !1)
        }, {
          default: f(() => [
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
    ), { getItems: s } = ys();
    de(() => {
      t.focusable && a.onFocusableItemAdd();
    }), Ct(() => {
      t.focusable && a.onFocusableItemRemove();
    });
    function i(r) {
      if (r.key === "Tab" && r.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (r.target !== r.currentTarget)
        return;
      const d = Xc(
        r,
        a.orientation.value,
        a.dir.value
      );
      if (d !== void 0) {
        if (r.metaKey || r.ctrlKey || r.altKey || !t.allowShiftKey && r.shiftKey)
          return;
        r.preventDefault();
        let u = [...s().map((c) => c.ref).filter((c) => c.dataset.disabled !== "")];
        if (d === "last")
          u.reverse();
        else if (d === "prev" || d === "next") {
          d === "prev" && u.reverse();
          const c = u.indexOf(
            r.currentTarget
          );
          u = a.loop.value ? Jc(u, c + 1) : u.slice(c + 1);
        }
        ne(() => xs(u));
      }
    }
    return (r, d) => (v(), y(l(Co), null, {
      default: f(() => [
        O(l(R), {
          tabindex: o.value ? 0 : -1,
          "data-orientation": l(a).orientation.value,
          "data-active": r.active,
          "data-disabled": r.focusable ? void 0 : "",
          as: r.as,
          "as-child": r.asChild,
          onMousedown: d[0] || (d[0] = (u) => {
            r.focusable ? l(a).onItemFocus(n.value) : u.preventDefault();
          }),
          onFocus: d[1] || (d[1] = (u) => l(a).onItemFocus(n.value)),
          onKeydown: i
        }, {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [$o, ap] = ie("MenuContent"), ko = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Pt(), s = Pa(), { trapFocus: i, disableOutsidePointerEvents: r, loop: d } = me(a);
    vo(), Ca(r.value);
    const u = M(""), c = M(0), p = M(0), g = M(null), m = M("right"), x = M(0), h = M(null), { createCollection: _ } = qt(), { forwardRef: C, currentElement: P } = N(), $ = _(P);
    Q(P, (B) => {
      o.onContentChange(B);
    });
    const { handleTypeaheadSearch: D } = mo($);
    Ct(() => {
      window.clearTimeout(c.value);
    });
    function S(B) {
      var A, V;
      return m.value === ((A = g.value) == null ? void 0 : A.side) && zu(B, (V = g.value) == null ? void 0 : V.area);
    }
    async function I(B) {
      var A;
      n("openAutoFocus", B), !B.defaultPrevented && (B.preventDefault(), (A = P.value) == null || A.focus({
        preventScroll: !0
      }));
    }
    function T(B) {
      if (B.defaultPrevented)
        return;
      const A = B.target.closest("[data-radix-menu-content]") === B.currentTarget, V = B.ctrlKey || B.altKey || B.metaKey, K = B.key.length === 1, H = nu(
        B,
        document.activeElement,
        P.value,
        {
          loop: d.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (H)
        return H == null ? void 0 : H.focus();
      if (B.code === "Space" || (A && (B.key === "Tab" && B.preventDefault(), !V && K && D(B.key)), B.target !== P.value) || !Ru.includes(B.key))
        return;
      B.preventDefault();
      const U = $.value;
      is.includes(B.key) && U.reverse(), Nn(U);
    }
    function W(B) {
      var A, V;
      (V = (A = B == null ? void 0 : B.currentTarget) == null ? void 0 : A.contains) != null && V.call(A, B.target) || (window.clearTimeout(c.value), u.value = "");
    }
    function L(B) {
      var A;
      if (!ma(B))
        return;
      const V = B.target, K = x.value !== B.clientX;
      if ((A = B == null ? void 0 : B.currentTarget) != null && A.contains(V) && K) {
        const H = B.clientX > x.value ? "right" : "left";
        m.value = H, x.value = B.clientX;
      }
    }
    return ap({
      onItemEnter: (B) => !!S(B),
      onItemLeave: (B) => {
        var A;
        S(B) || ((A = P.value) == null || A.focus(), h.value = null);
      },
      onTriggerLeave: (B) => !!S(B),
      searchRef: u,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (B) => {
        g.value = B;
      }
    }), (B, A) => (v(), y(l(rn), {
      "as-child": "",
      trapped: l(i),
      onMountAutoFocus: I,
      onUnmountAutoFocus: A[7] || (A[7] = (V) => n("closeAutoFocus", V))
    }, {
      default: f(() => [
        O(l(ka), {
          "as-child": "",
          "disable-outside-pointer-events": l(r),
          onEscapeKeyDown: A[2] || (A[2] = (V) => n("escapeKeyDown", V)),
          onPointerDownOutside: A[3] || (A[3] = (V) => n("pointerDownOutside", V)),
          onFocusOutside: A[4] || (A[4] = (V) => n("focusOutside", V)),
          onInteractOutside: A[5] || (A[5] = (V) => n("interactOutside", V)),
          onDismiss: A[6] || (A[6] = (V) => n("dismiss"))
        }, {
          default: f(() => [
            O(l(Cs), {
              "current-tab-stop-id": h.value,
              "onUpdate:currentTabStopId": A[0] || (A[0] = (V) => h.value = V),
              "as-child": "",
              orientation: "vertical",
              dir: l(s).dir.value,
              loop: l(d),
              onEntryFocus: A[1] || (A[1] = (V) => {
                n("entryFocus", V), l(s).isUsingKeyboardRef.value || V.preventDefault();
              })
            }, {
              default: f(() => [
                O(l(ha), {
                  ref: l(C),
                  role: "menu",
                  as: B.as,
                  "as-child": B.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(yo)(l(o).open.value),
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
                  onKeydown: T,
                  onBlur: W,
                  onPointermove: L
                }, {
                  default: f(() => [
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
    const t = e, a = $o(), { forwardRef: n } = N(), o = M(!1);
    async function s(r) {
      if (!r.defaultPrevented && ma(r)) {
        if (t.disabled)
          a.onItemLeave(r);
        else if (!a.onItemEnter(r)) {
          const d = r.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function i(r) {
      await ne(), !r.defaultPrevented && ma(r) && a.onItemLeave(r);
    }
    return (r, d) => (v(), y(l(Co), null, {
      default: f(() => [
        O(l(R), E({
          ref: l(n),
          role: "menuitem",
          tabindex: "-1"
        }, r.$attrs, {
          as: r.as,
          "as-child": r.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": r.disabled || void 0,
          "data-disabled": r.disabled ? "" : void 0,
          "data-highlighted": o.value ? "" : void 0,
          onPointermove: s,
          onPointerleave: i,
          onFocus: d[0] || (d[0] = async (u) => {
            await ne(), !(u.defaultPrevented || r.disabled) && (o.value = !0);
          }),
          onBlur: d[1] || (d[1] = async (u) => {
            await ne(), !u.defaultPrevented && (o.value = !1);
          })
        }), {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), Bo = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: s } = N(), i = Pa(), r = $o(), d = M(!1);
    async function u() {
      const c = s.value;
      if (!a.disabled && c) {
        const p = new CustomEvent(Iu, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await ne(), p.defaultPrevented ? d.value = !1 : i.onClose();
      }
    }
    return (c, p) => (v(), y($s, E(a, {
      ref: l(o),
      onClick: u,
      onPointerdown: p[0] || (p[0] = () => {
        d.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (g) => {
        var m;
        await ne(), !g.defaultPrevented && (d.value || (m = g.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (g) => {
        const m = l(r).searchRef.value !== "";
        c.disabled || m && g.key === " " || l(Ln).includes(g.key) && (g.currentTarget.click(), g.preventDefault());
      })
    }), {
      default: f(() => [
        w(c.$slots, "default")
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
    return (a, n) => (v(), y(l(Re), {
      present: a.forceMount || l(qa)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: f(() => [
        O(l(R), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": l(bo)(l(t).checked.value)
        }, {
          default: f(() => [
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
    return ks({ checked: o }), (s, i) => (v(), y(Bo, E({ role: "menuitemcheckbox" }, a, {
      "aria-checked": l(qa)(l(o)) ? "mixed" : l(o),
      "data-state": l(bo)(l(o)),
      onSelect: i[0] || (i[0] = async (r) => {
        n("select", r), l(qa)(l(o)) ? o.value = !0 : o.value = !l(o);
      })
    }), {
      default: f(() => [
        w(s.$slots, "default", { checked: l(o) })
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
    const a = e, n = t, o = le(a, n), s = Pt(), { forwardRef: i, currentElement: r } = N();
    return $a(r), (d, u) => (v(), y(ko, E(l(o), {
      ref: l(i),
      "trap-focus": l(s).open.value,
      "disable-outside-pointer-events": l(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: u[0] || (u[0] = (c) => l(s).onOpenChange(!1)),
      onFocusOutside: u[1] || (u[1] = _e((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: f(() => [
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
    return (o, s) => (v(), y(ko, E(l(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (i) => l(n).onOpenChange(!1))
    }), {
      default: f(() => [
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
    const a = le(e, t), n = Pt(), o = Pa();
    return (s, i) => (v(), y(l(Re), {
      present: s.forceMount || l(n).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), y(sp, j(E({ key: 0 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), y(rp, j(E({ key: 1 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            w(s.$slots, "default")
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
    return (a, n) => (v(), y(l(R), E({ role: "group" }, t), {
      default: f(() => [
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
    return (a, n) => (v(), y(l(R), j(G(t)), {
      default: f(() => [
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
    return (a, n) => (v(), y(l(sn), j(G(t)), {
      default: f(() => [
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
    }), (o, s) => (v(), y(Bs, j(G(a)), {
      default: f(() => [
        w(o.$slots, "default", { modelValue: l(n) })
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
    const a = e, n = t, { value: o } = me(a), s = cp(), i = k(
      () => s.modelValue.value === (o == null ? void 0 : o.value)
    );
    return ks({ checked: i }), (r, d) => (v(), y(Bo, E({ role: "menuitemradio" }, a, {
      "aria-checked": i.value,
      "data-state": l(bo)(i.value),
      onSelect: d[0] || (d[0] = async (u) => {
        n("select", u), l(s).onValueChange(l(o));
      })
    }), {
      default: f(() => [
        w(r.$slots, "default")
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
    return (a, n) => (v(), y(l(R), E(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: f(() => [
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
    }), o = Pt(), s = M(), i = M();
    return ge((r) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), r(() => n.value = !1);
    }), _s({
      open: n,
      onOpenChange: (r) => {
        n.value = r;
      },
      content: i,
      onContentChange: (r) => {
        i.value = r;
      }
    }), hp({
      triggerId: "",
      contentId: "",
      trigger: s,
      onTriggerChange: (r) => {
        s.value = r;
      }
    }), (r, d) => (v(), y(l(Ba), null, {
      default: f(() => [
        w(r.$slots, "default")
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
    const a = le(e, t), n = Pt(), o = Pa(), s = Ps(), { forwardRef: i, currentElement: r } = N();
    return s.contentId || (s.contentId = xe(void 0, "radix-vue-menu-sub-content")), (d, u) => (v(), y(l(Re), {
      present: d.forceMount || l(n).open.value
    }, {
      default: f(() => [
        O(ko, E(l(a), {
          id: l(s).contentId,
          ref: l(i),
          "aria-labelledby": l(s).triggerId,
          align: "start",
          side: l(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: u[0] || (u[0] = _e((c) => {
            var p;
            l(o).isUsingKeyboardRef.value && ((p = l(r)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: u[1] || (u[1] = _e(() => {
          }, ["prevent"])),
          onFocusOutside: u[2] || (u[2] = (c) => {
            c.defaultPrevented || c.target !== l(s).trigger.value && l(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: u[3] || (u[3] = (c) => {
            l(o).onClose(), c.preventDefault();
          }),
          onKeydown: u[4] || (u[4] = (c) => {
            var p, g;
            const m = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), x = l(Lu)[l(o).dir.value].includes(c.key);
            m && x && (l(n).onOpenChange(!1), (g = l(s).trigger.value) == null || g.focus(), c.preventDefault());
          })
        }), {
          default: f(() => [
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
    const t = e, a = Pt(), n = Pa(), o = Ps(), s = $o(), i = M(null);
    o.triggerId || (o.triggerId = xe(void 0, "radix-vue-menu-sub-trigger"));
    function r() {
      i.value && window.clearTimeout(i.value), i.value = null;
    }
    Ct(() => {
      r();
    });
    function d(p) {
      !ma(p) || s.onItemEnter(p) || !t.disabled && !a.open.value && !i.value && (s.onPointerGraceIntentChange(null), i.value = window.setTimeout(() => {
        a.onOpenChange(!0), r();
      }, 100));
    }
    async function u(p) {
      var g, m;
      if (!ma(p))
        return;
      r();
      const x = (g = a.content.value) == null ? void 0 : g.getBoundingClientRect();
      if (x != null && x.width) {
        const h = (m = a.content.value) == null ? void 0 : m.dataset.side, _ = h === "right", C = _ ? -5 : 5, P = x[_ ? "left" : "right"], $ = x[_ ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: P, y: x.top },
            { x: $, y: x.top },
            { x: $, y: x.bottom },
            { x: P, y: x.bottom }
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
    async function c(p) {
      var g;
      const m = s.searchRef.value !== "";
      t.disabled || m && p.key === " " || Fu[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await ne(), (g = a.content.value) == null || g.focus(), p.preventDefault());
    }
    return (p, g) => (v(), y(ws, { "as-child": "" }, {
      default: f(() => [
        O($s, E(t, {
          id: l(o).triggerId,
          ref: (m) => {
            var x;
            (x = l(o)) == null || x.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(a).open.value,
          "aria-controls": l(o).contentId,
          "data-state": l(yo)(l(a).open.value),
          onClick: g[0] || (g[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), l(a).open.value || l(a).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: u,
          onKeydown: c
        }), {
          default: f(() => [
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
    }), s = M(), { modal: i, dir: r } = me(a), d = gt(r);
    return wp({
      open: o,
      onOpenChange: (u) => {
        o.value = u;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerId: "",
      triggerElement: s,
      contentId: "",
      modal: i,
      dir: d
    }), (u, c) => (v(), y(l(Kc), {
      open: l(o),
      "onUpdate:open": c[0] || (c[0] = (p) => ya(o) ? o.value = p : null),
      dir: l(d),
      modal: l(i)
    }, {
      default: f(() => [
        w(u.$slots, "default", { open: l(o) })
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
    }), a.triggerId || (a.triggerId = xe(void 0, "radix-vue-dropdown-menu-trigger")), (s, i) => (v(), y(l(ws), { "as-child": "" }, {
      default: f(() => [
        O(l(R), {
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
          onClick: i[0] || (i[0] = async (r) => {
            var d;
            !s.disabled && r.button === 0 && r.ctrlKey === !1 && ((d = l(a)) == null || d.onOpenToggle(), await ne(), l(a).open.value && r.preventDefault());
          }),
          onKeydown: i[1] || (i[1] = ze(
            (r) => {
              s.disabled || (["Enter", " "].includes(r.key) && l(a).onOpenToggle(), r.key === "ArrowDown" && l(a).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(r.key) && r.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: f(() => [
            w(s.$slots, "default")
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
    return (a, n) => (v(), y(l(up), j(G(t)), {
      default: f(() => [
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
    function s(i) {
      i.defaultPrevented || (o.value || setTimeout(() => {
        var r;
        (r = n.triggerElement.value) == null || r.focus();
      }, 0), o.value = !1, i.preventDefault());
    }
    return n.contentId || (n.contentId = xe(void 0, "radix-vue-dropdown-menu-content")), (i, r) => {
      var d;
      return v(), y(l(ip), E(l(a), {
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
        onInteractOutside: r[0] || (r[0] = (u) => {
          var c;
          if (u.defaultPrevented) return;
          const p = u.detail.originalEvent, g = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || g;
          (!l(n).modal.value || m) && (o.value = !0), (c = l(n).triggerElement.value) != null && c.contains(u.target) && u.preventDefault();
        })
      }), {
        default: f(() => [
          w(i.$slots, "default")
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
    return N(), (o, s) => (v(), y(l(Bo), j(G({ ...a, ...l(n) })), {
      default: f(() => [
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
    return N(), (a, n) => (v(), y(l(Bs), j(G(t)), {
      default: f(() => [
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
    return N(), (a, n) => (v(), y(l(mp), j(G(t)), {
      default: f(() => [
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
    return N(), (o, s) => (v(), y(l(lp), j(G({ ...a, ...l(n) })), {
      default: f(() => [
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
    return N(), (a, n) => (v(), y(l(op), j(G(t)), {
      default: f(() => [
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
    return N(), (a, n) => (v(), y(l(dp), j(G(t)), {
      default: f(() => [
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
    return N(), (o, s) => (v(), y(l(fp), j(G({ ...a, ...l(n) })), {
      default: f(() => [
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
    return N(), (n, o) => (v(), y(l(vp), j(G(l(a))), {
      default: f(() => [
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
    return N(), (o, s) => (v(), y(l(gp), {
      open: l(n),
      "onUpdate:open": s[0] || (s[0] = (i) => ya(n) ? n.value = i : null)
    }, {
      default: f(() => [
        w(o.$slots, "default", { open: l(n) })
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
    return N(), (n, o) => (v(), y(l(yp), E(l(a), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ap = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), y(l(bp), j(G(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tp = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), y(l(R), E(t, {
      onMousedown: n[0] || (n[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Jt, Ip] = ie("PaginationRoot"), Vp = /* @__PURE__ */ b({
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
    const a = e, n = t, { siblingCount: o, disabled: s, showEdges: i } = me(a);
    N();
    const r = ve(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), d = k(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return Ip({
      page: r,
      onPageChange(u) {
        r.value = u;
      },
      pageCount: d,
      siblingCount: o,
      disabled: s,
      showEdges: i
    }), (u, c) => (v(), y(l(R), {
      as: u.as,
      "as-child": u.asChild
    }, {
      default: f(() => [
        w(u.$slots, "default", {
          page: l(r),
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
    return N(), (a, n) => (v(), y(l(R), E(t, { "data-type": "ellipsis" }), {
      default: f(() => [
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
    return N(), (n, o) => (v(), y(l(R), E(t, {
      "aria-label": "First Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: l(a).page.value === 1 || l(a).disabled.value,
      onClick: o[0] || (o[0] = (s) => l(a).onPageChange(1))
    }), {
      default: f(() => [
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
    return N(), (n, o) => (v(), y(l(R), E(t, {
      "aria-label": "Last Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: l(a).page.value === l(a).pageCount.value || l(a).disabled.value,
      onClick: o[0] || (o[0] = (s) => l(a).onPageChange(l(a).pageCount.value))
    }), {
      default: f(() => [
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
const Ia = "ellipsis";
function zp(e, t, a, n) {
  const o = t, s = Math.max(e - a, 1), i = Math.min(e + a, o);
  if (n) {
    const r = Math.min(2 * a + 5, t) - 2, d = s > 3 && Math.abs(o - r - 1 + 1) > 2 && Math.abs(s - 1) > 2, u = i < o - 2 && Math.abs(o - r) > 2 && Math.abs(o - i) > 2;
    if (!d && u)
      return [...ut(1, r), Ia, o];
    if (d && !u) {
      const c = ut(o - r + 1, o);
      return [1, Ia, ...c];
    }
    if (d && u) {
      const c = ut(s, i);
      return [1, Ia, ...c, Ia, o];
    }
    return ut(1, o);
  } else {
    const r = a * 2 + 1;
    return t < r ? ut(1, o) : e <= a + 1 ? ut(1, r) : t - e <= a ? ut(t - r + 1, o) : ut(s, i);
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
    return (o, s) => (v(), y(l(R), j(G(t)), {
      default: f(() => [
        w(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), yg = /* @__PURE__ */ b({
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
    return (o, s) => (v(), y(l(R), E(t, {
      "data-type": "page",
      "aria-label": `Page ${o.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: l(a).disabled.value,
      type: o.as === "button" ? "button" : void 0,
      onClick: s[0] || (s[0] = (i) => l(a).onPageChange(o.value))
    }), {
      default: f(() => [
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
    return (n, o) => (v(), y(l(R), E(t, {
      "aria-label": "Next Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: l(a).page.value === l(a).pageCount.value || l(a).disabled.value,
      onClick: o[0] || (o[0] = (s) => l(a).onPageChange(l(a).page.value + 1))
    }), {
      default: f(() => [
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
      var s;
      return v(), y(l(R), E(t, {
        "aria-label": "Previous Page",
        type: n.as === "button" ? "button" : void 0,
        disabled: l(a).page.value === 1 || ((s = l(a).disabled) == null ? void 0 : s.value),
        onClick: o[0] || (o[0] = (i) => l(a).onPageChange(l(a).page.value - 1))
      }), {
        default: f(() => [
          w(n.$slots, "default", {}, () => [
            Y("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
}), [Da, Hp] = ie("PopoverRoot"), Kp = /* @__PURE__ */ b({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o } = me(a), s = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), i = M(), r = M(!1);
    return Hp({
      contentId: "",
      modal: o,
      open: s,
      onOpenChange: (d) => {
        s.value = d;
      },
      onOpenToggle: () => {
        s.value = !s.value;
      },
      triggerElement: i,
      hasCustomAnchor: r
    }), (d, u) => (v(), y(l(Ba), null, {
      default: f(() => [
        w(d.$slots, "default", { open: l(s) })
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
    const t = e, a = Da(), { forwardRef: n, currentElement: o } = N();
    return de(() => {
      a.triggerElement.value = o.value;
    }), (s, i) => (v(), y(We(l(a).hasCustomAnchor.value ? l(R) : l(_o)), { "as-child": "" }, {
      default: f(() => [
        O(l(R), {
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
            w(s.$slots, "default")
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
    return (a, n) => (v(), y(l(sn), j(G(t)), {
      default: f(() => [
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
    const a = e, n = t, o = ae(a), { forwardRef: s } = N(), i = Da();
    return vo(), (r, d) => (v(), y(l(rn), {
      "as-child": "",
      loop: "",
      trapped: r.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: f(() => [
        O(l(ka), {
          "as-child": "",
          "disable-outside-pointer-events": r.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (u) => n("pointerDownOutside", u)),
          onInteractOutside: d[1] || (d[1] = (u) => n("interactOutside", u)),
          onEscapeKeyDown: d[2] || (d[2] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[3] || (d[3] = (u) => n("focusOutside", u)),
          onDismiss: d[4] || (d[4] = (u) => l(i).onOpenChange(!1))
        }, {
          default: f(() => [
            O(l(ha), E(l(o), {
              id: l(i).contentId,
              ref: l(s),
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
              default: f(() => [
                w(r.$slots, "default")
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
    const a = e, n = t, o = Da(), s = M(!1);
    Ca(!0);
    const i = le(a, n), { forwardRef: r, currentElement: d } = N();
    return $a(d), (u, c) => (v(), y(Es, E(l(i), {
      ref: l(r),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = _e(
        (p) => {
          var g;
          n("closeAutoFocus", p), s.value || (g = l(o).triggerElement.value) == null || g.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        n("pointerDownOutside", p);
        const g = p.detail.originalEvent, m = g.button === 0 && g.ctrlKey === !0, x = g.button === 2 || m;
        s.value = x;
      }),
      onFocusOutside: c[2] || (c[2] = _e(() => {
      }, ["prevent"]))
    }), {
      default: f(() => [
        w(u.$slots, "default")
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
    const a = e, n = t, o = Da(), s = M(!1), i = M(!1), r = le(a, n);
    return (d, u) => (v(), y(Es, E(l(r), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (s.value || (p = l(o).triggerElement.value) == null || p.focus(), c.preventDefault()), s.value = !1, i.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = async (c) => {
        var p;
        n("interactOutside", c), c.defaultPrevented || (s.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const g = c.target;
        (p = l(o).triggerElement.value) != null && p.contains(g) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: f(() => [
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
    const a = e, n = t, o = Da(), s = le(a, n), { forwardRef: i } = N();
    return o.contentId || (o.contentId = xe(void 0, "radix-vue-popover-content")), (r, d) => (v(), y(l(Re), {
      present: r.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), y(Yp, E({ key: 0 }, l(s), { ref: l(i) }), {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), y(Zp, E({ key: 1 }, l(s), { ref: l(i) }), {
          default: f(() => [
            w(r.$slots, "default")
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
  ), o = (d) => e.start.value ? we(e.start.value, d) : !1, s = (d) => e.end.value ? we(e.end.value, d) : !1, i = (d) => e.start.value && we(e.start.value, d) || e.end.value && we(e.end.value, d) ? !0 : e.end.value && e.start.value ? Wi(d, e.start.value, e.end.value) : !1, r = k(() => {
    if (e.start.value && e.end.value || !e.start.value || !e.focusedValue.value)
      return null;
    const d = pt(e.start.value, e.focusedValue.value), u = d ? e.start.value : e.focusedValue.value, c = d ? e.focusedValue.value : e.start.value;
    return we(u.add({ days: 1 }), c) ? {
      start: u,
      end: c
    } : Hi(u, c, e.isDateUnavailable, e.isDateDisabled) ? {
      start: u,
      end: c
    } : null;
  });
  return {
    isInvalid: n,
    isSelected: i,
    highlightedRange: r,
    isSelectionStart: o,
    isSelectionEnd: s,
    isHighlightedStart: (d) => !r.value || !r.value.start ? !1 : we(r.value.start, d),
    isHighlightedEnd: (d) => !r.value || !r.value.end ? !1 : we(r.value.end, d)
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
      readonly: s,
      initialFocus: i,
      pagedNavigation: r,
      weekStartsOn: d,
      weekdayFormat: u,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: g,
      isDateUnavailable: m,
      isDateDisabled: x,
      calendarLabel: h,
      maxValue: _,
      minValue: C,
      locale: P,
      dir: $,
      nextPage: D,
      prevPage: S
    } = me(a), { primitiveElement: I, currentElement: T } = Yt(), W = gt($), L = M(), B = M(), A = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), V = Xl({
      defaultPlaceholder: a.placeholder,
      defaultValue: A.value.start
    }), K = M(A.value.start), H = M(A.value.end), U = ve(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? V.copy(),
      passive: a.placeholder === void 0
    });
    function q(ce) {
      U.value = ce.copy();
    }
    const {
      fullCalendarLabel: te,
      headingValue: ue,
      isDateDisabled: fe,
      isDateUnavailable: $e,
      isNextButtonDisabled: ye,
      isPrevButtonDisabled: aa,
      grid: yt,
      weekdays: na,
      isOutsideVisibleView: st,
      nextPage: oa,
      prevPage: De,
      formatter: ke
    } = ps({
      locale: P,
      placeholder: U,
      weekStartsOn: d,
      fixedWeeks: c,
      numberOfMonths: p,
      minValue: C,
      maxValue: _,
      disabled: o,
      weekdayFormat: u,
      pagedNavigation: r,
      isDateDisabled: x.value,
      isDateUnavailable: m.value,
      calendarLabel: h,
      nextPage: D,
      prevPage: S
    }), {
      isInvalid: Fe,
      isSelected: se,
      highlightedRange: Ce,
      isSelectionStart: Ye,
      isSelectionEnd: la,
      isHighlightedStart: sr,
      isHighlightedEnd: rr
    } = Jp({
      start: K,
      end: H,
      isDateDisabled: fe,
      isDateUnavailable: $e,
      focusedValue: B
    });
    return Q(A, (ce) => {
      ce.start && (!K.value || !Le(K.value, ce.start)) && (K.value = ce.start.copy()), ce.end && (!H.value || !Le(H.value, ce.end)) && (H.value = ce.end.copy());
    }), Q(K, (ce) => {
      ce && !Le(ce, U.value) && q(ce), n("update:startValue", ce);
    }), Q([K, H], ([ce, rt]) => {
      const Ee = A.value;
      if (!(Ee && Ee.start && Ee.end && ce && rt && Le(Ee.start, ce) && Le(Ee.end, rt)))
        if (ce && rt) {
          if (Ee.start && Ee.end && Le(Ee.start, ce) && Le(Ee.end, rt))
            return;
          pt(rt, ce) ? A.value = {
            start: rt.copy(),
            end: ce.copy()
          } : A.value = {
            start: ce.copy(),
            end: rt.copy()
          };
        } else Ee.start && Ee.end && (A.value = {
          start: void 0,
          end: void 0
        });
    }), tf({
      isDateUnavailable: $e,
      startValue: K,
      endValue: H,
      formatter: ke,
      modelValue: A,
      placeholder: U,
      disabled: o,
      initialFocus: i,
      pagedNavigation: r,
      weekStartsOn: d,
      weekdayFormat: u,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: s,
      preventDeselect: g,
      fullCalendarLabel: te,
      headingValue: ue,
      isInvalid: Fe,
      isDateDisabled: fe,
      highlightedRange: Ce,
      focusedValue: B,
      lastPressedDateValue: L,
      isSelected: se,
      isSelectionEnd: la,
      isSelectionStart: Ye,
      isNextButtonDisabled: ye,
      isPrevButtonDisabled: aa,
      isOutsideVisibleView: st,
      nextPage: oa,
      prevPage: De,
      parentElement: T,
      onPlaceholderChange: q,
      locale: P,
      dir: W,
      isHighlightedStart: sr,
      isHighlightedEnd: rr
    }), de(() => {
      i.value && Jl(T.value);
    }), (ce, rt) => (v(), y(l(R), {
      ref_key: "primitiveElement",
      ref: I,
      as: ce.as,
      "as-child": ce.asChild,
      role: "application",
      "aria-label": l(te),
      "data-readonly": l(s) ? "" : void 0,
      "data-disabled": l(o) ? "" : void 0,
      "data-invalid": l(Fe) ? "" : void 0,
      dir: l(W)
    }, {
      default: f(() => [
        oe("div", Qp, [
          oe("div", ef, Z(l(te)), 1)
        ]),
        w(ce.$slots, "default", {
          date: l(U),
          grid: l(yt),
          weekDays: l(na),
          weekStartsOn: l(d),
          locale: l(P),
          fixedWeeks: l(c)
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
    return (a, n) => (v(), y(l(R), j(G(t)), {
      default: f(() => [
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
    return (n, o) => (v(), y(l(R), E(t, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        w(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          Y(Z(l(a).headingValue.value), 1)
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
    return (s, i) => (v(), y(l(R), E(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: f(() => [
        w(s.$slots, "default")
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
      var o, s;
      return v(), y(l(R), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": l(t).isSelected(a.date) ? !0 : void 0,
        "aria-disabled": l(t).isDateDisabled(a.date) || ((s = (o = l(t)).isDateUnavailable) == null ? void 0 : s.call(o, a.date)),
        "data-disabled": l(t).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
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
    return (a, n) => (v(), y(l(R), j(G(t)), {
      default: f(() => [
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
    return (o, s) => (v(), y(l(R), E(t, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (i) => l(n).nextPage(t.step, t.nextPage))
    }), {
      default: f(() => [
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
    return (o, s) => (v(), y(l(R), E(t, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (i) => l(n).prevPage(t.step, t.prevPage))
    }), {
      default: f(() => [
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
    return (a, n) => (v(), y(l(R), E(t, { "aria-hidden": "true" }), {
      default: f(() => [
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
    return (a, n) => (v(), y(l(R), j(G(t)), {
      default: f(() => [
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
    return (a, n) => (v(), y(l(R), j(G(t)), {
      default: f(() => [
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
    const t = e, a = Qt(), n = ls(), { primitiveElement: o, currentElement: s } = Yt(), i = k(() => a.formatter.custom(Te(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), r = k(() => a.isDateDisabled(t.day)), d = k(() => {
      var L;
      return (L = a.isDateUnavailable) == null ? void 0 : L.call(a, t.day);
    }), u = k(() => a.isSelected(t.day)), c = k(() => a.isSelectionStart(t.day)), p = k(() => a.isSelectionEnd(t.day)), g = k(() => a.isHighlightedStart(t.day)), m = k(() => a.isHighlightedEnd(t.day)), x = k(() => a.highlightedRange.value ? zi(t.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", _ = k(() => Ol(t.day, $t())), C = k(() => !Dl(t.day, t.month)), P = k(
      () => a.isOutsideVisibleView(t.day)
    ), $ = k(() => t.day.day.toLocaleString(a.locale.value)), D = k(() => !a.disabled.value && we(t.day, a.placeholder.value));
    function S(L, B) {
      var A;
      if (!a.readonly.value && !(a.isDateDisabled(B) || (A = a.isDateUnavailable) != null && A.call(a, B))) {
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
    function I(L) {
      S(L, t.day);
    }
    function T() {
      var L;
      a.isDateDisabled(t.day) || (L = a.isDateUnavailable) != null && L.call(a, t.day) || (a.focusedValue.value = t.day.copy());
    }
    function W(L) {
      L.preventDefault(), L.stopPropagation();
      const B = a.parentElement.value, A = B ? Array.from(B.querySelectorAll(h)) : [];
      let V = A.indexOf(s.value);
      const K = 7, H = a.dir.value === "rtl" ? -1 : 1;
      switch (L.code) {
        case n.ARROW_RIGHT:
          V += H;
          break;
        case n.ARROW_LEFT:
          V -= H;
          break;
        case n.ARROW_UP:
          V -= K;
          break;
        case n.ARROW_DOWN:
          V += K;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          S(L, t.day);
          return;
        default:
          return;
      }
      if (V >= 0 && V < A.length) {
        A[V].focus();
        return;
      }
      if (V < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), ne(() => {
          const U = B ? Array.from(B.querySelectorAll(h)) : [];
          U[U.length - Math.abs(V)].focus();
        });
        return;
      }
      if (V >= A.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), ne(() => {
          (B ? Array.from(B.querySelectorAll(h)) : [])[V - A.length].focus();
        });
      }
    }
    return (L, B) => (v(), y(l(R), E({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": u.value ? !0 : void 0,
      "aria-disabled": C.value || r.value || d.value ? !0 : void 0,
      "data-highlighted": x.value ? "" : void 0,
      "data-selection-start": c.value ? !0 : void 0,
      "data-selection-end": p.value ? !0 : void 0,
      "data-highlighted-start": g.value ? !0 : void 0,
      "data-highlighted-end": m.value ? !0 : void 0,
      "data-selected": u.value ? !0 : void 0,
      "data-outside-visible-view": P.value ? "" : void 0,
      "data-value": L.day.toString(),
      "data-disabled": r.value || C.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": _.value ? "" : void 0,
      "data-outside-month": C.value ? "" : void 0,
      "data-focused": D.value ? "" : void 0,
      tabindex: D.value ? 0 : C.value || r.value ? void 0 : -1,
      onClick: I,
      onFocusin: T,
      onMouseenter: T,
      onKeydown: ze(W, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: f(() => [
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
    return (o, s) => (v(), y(l(dn), { "as-child": "" }, {
      default: f(() => [
        jt(oe("select", E({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (i) => ya(a) ? a.value = i : null),
          "default-value": l(a)
        }), [
          w(o.$slots, "default")
        ], 16, mf), [
          [mr, l(a)]
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
    }), s = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), i = M(), r = M(), d = M({
      x: 0,
      y: 0
    }), u = M(!1), { required: c, disabled: p, dir: g } = me(a), m = gt(g);
    Ms({
      triggerElement: i,
      onTriggerChange: (C) => {
        i.value = C;
      },
      valueElement: r,
      onValueElementChange: (C) => {
        r.value = C;
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
      open: s,
      required: c,
      onOpenChange: (C) => {
        s.value = C;
      },
      dir: m,
      triggerPointerDownPosRef: d,
      disabled: p
    });
    const x = ln(i), h = M(/* @__PURE__ */ new Set()), _ = k(() => Array.from(h.value).map((C) => {
      var P;
      return (P = C.props) == null ? void 0 : P.value;
    }).join(";"));
    return bf({
      onNativeOptionAdd: (C) => {
        h.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        h.value.delete(C);
      }
    }), (C, P) => (v(), y(l(Ba), null, {
      default: f(() => [
        w(C.$slots, "default", {
          modelValue: l(o),
          open: l(s)
        }),
        l(x) ? (v(), y(hf, E({ key: _.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: l(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: l(p),
          value: l(o),
          onChange: P[0] || (P[0] = ($) => o.value = $.target.value)
        }), {
          default: f(() => [
            l(o) === void 0 ? (v(), F("option", gf)) : J("", !0),
            (v(!0), F(ee, null, he(Array.from(h.value), ($) => (v(), y(We($), E({ ref_for: !0 }, $.props, {
              key: $.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : J("", !0)
      ]),
      _: 3
    }));
  }
}), _f = [" ", "Enter", "ArrowUp", "ArrowDown"], xf = [" ", "Enter"], Je = 10;
function As(e) {
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
      var m;
      return ((m = a.disabled) == null ? void 0 : m.value) || t.disabled;
    }), { forwardRef: o, currentElement: s } = N();
    a.contentId || (a.contentId = xe(void 0, "radix-vue-select-content")), de(() => {
      a.triggerElement = s;
    });
    const { injectCollection: i } = qt(), r = i(), { search: d, handleTypeaheadSearch: u, resetTypeahead: c } = mo(r);
    function p() {
      n.value || (a.onOpenChange(!0), c());
    }
    function g(m) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, x) => (v(), y(l(_o), { "as-child": "" }, {
      default: f(() => {
        var h, _, C, P;
        return [
          O(l(R), {
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
            "data-placeholder": l(As)((P = l(a).modelValue) == null ? void 0 : P.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
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
              const D = l(d) !== "";
              !($.ctrlKey || $.altKey || $.metaKey) && $.key.length === 1 && D && $.key === " " || (l(u)($.key), l(_f).includes($.key) && (p(), $.preventDefault()));
            })
          }, {
            default: f(() => [
              w(m.$slots, "default")
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
    return (a, n) => (v(), y(l(sn), j(G(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Po, kf] = ie("SelectItemAlignedPosition"), Bf = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, { injectCollection: o } = qt(), s = Dt(), i = Ot(), r = o(), d = M(!1), u = M(!0), c = M(), { forwardRef: p, currentElement: g } = N(), { viewport: m, selectedItem: x, selectedItemText: h, focusSelectedItem: _ } = i;
    function C() {
      if (s.triggerElement.value && s.valueElement.value && c.value && g.value && m != null && m.value && x != null && x.value && h != null && h.value) {
        const D = s.triggerElement.value.getBoundingClientRect(), S = g.value.getBoundingClientRect(), I = s.valueElement.value.getBoundingClientRect(), T = h.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const De = T.left - S.left, ke = I.left - De, Fe = D.left - ke, se = D.width + Fe, Ce = Math.max(se, S.width), Ye = window.innerWidth - Je, la = Zo(ke, Je, Ye - Ce);
          c.value.style.minWidth = `${se}px`, c.value.style.left = `${la}px`;
        } else {
          const De = S.right - T.right, ke = window.innerWidth - I.right - De, Fe = window.innerWidth - D.right - ke, se = D.width + Fe, Ce = Math.max(se, S.width), Ye = window.innerWidth - Je, la = Zo(
            ke,
            Je,
            Ye - Ce
          );
          c.value.style.minWidth = `${se}px`, c.value.style.right = `${la}px`;
        }
        const W = r.value, L = window.innerHeight - Je * 2, B = m.value.scrollHeight, A = window.getComputedStyle(g.value), V = Number.parseInt(
          A.borderTopWidth,
          10
        ), K = Number.parseInt(A.paddingTop, 10), H = Number.parseInt(
          A.borderBottomWidth,
          10
        ), U = Number.parseInt(
          A.paddingBottom,
          10
        ), q = V + K + B + U + H, te = Math.min(
          x.value.offsetHeight * 5,
          q
        ), ue = window.getComputedStyle(m.value), fe = Number.parseInt(ue.paddingTop, 10), $e = Number.parseInt(
          ue.paddingBottom,
          10
        ), ye = D.top + D.height / 2 - Je, aa = L - ye, yt = x.value.offsetHeight / 2, na = x.value.offsetTop + yt, st = V + K + na, oa = q - st;
        if (st <= ye) {
          const De = x.value === W[W.length - 1];
          c.value.style.bottom = "0px";
          const ke = g.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, Fe = Math.max(
            aa,
            yt + (De ? $e : 0) + ke + H
          ), se = st + Fe;
          c.value.style.height = `${se}px`;
        } else {
          const De = x.value === W[0];
          c.value.style.top = "0px";
          const ke = Math.max(
            ye,
            V + m.value.offsetTop + (De ? fe : 0) + yt
          ) + oa;
          c.value.style.height = `${ke}px`, m.value.scrollTop = st - ye + m.value.offsetTop;
        }
        c.value.style.margin = `${Je}px 0`, c.value.style.minHeight = `${te}px`, c.value.style.maxHeight = `${L}px`, n("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const P = M("");
    de(async () => {
      await ne(), C(), g.value && (P.value = window.getComputedStyle(g.value).zIndex);
    });
    function $(D) {
      D && u.value === !0 && (C(), _ == null || _(), u.value = !1);
    }
    return kf({
      contentWrapper: c,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: $
    }), (D, S) => (v(), F("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: ba({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: P.value
      })
    }, [
      O(l(R), E({
        ref: l(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...D.$attrs, ...a }), {
        default: f(() => [
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
    const t = ae(e);
    return (a, n) => (v(), y(l(ha), E(l(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: f(() => [
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
    vo(), Ca(a.bodyLock);
    const { createCollection: s } = qt(), i = M();
    $a(i);
    const r = s(i), { search: d, handleTypeaheadSearch: u } = mo(r), c = M(), p = M(), g = M(), m = M(!1), x = M(!1);
    function h() {
      p.value && i.value && Nn([p.value, i.value]);
    }
    Q(m, () => {
      h();
    });
    const { onOpenChange: _, triggerPointerDownPosRef: C } = o;
    ge((S) => {
      if (!i.value)
        return;
      let I = { x: 0, y: 0 };
      const T = (L) => {
        var B, A;
        I = {
          x: Math.abs(
            Math.round(L.pageX) - (((B = C.value) == null ? void 0 : B.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(L.pageY) - (((A = C.value) == null ? void 0 : A.y) ?? 0)
          )
        };
      }, W = (L) => {
        var B;
        L.pointerType !== "touch" && (I.x <= 10 && I.y <= 10 ? L.preventDefault() : (B = i.value) != null && B.contains(L.target) || _(!1), document.removeEventListener("pointermove", T), C.value = null);
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
    function P(S) {
      const I = S.ctrlKey || S.altKey || S.metaKey;
      if (S.key === "Tab" && S.preventDefault(), !I && S.key.length === 1 && u(S.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(S.key)) {
        let T = r.value;
        if (["ArrowUp", "End"].includes(S.key) && (T = T.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const W = S.target, L = T.indexOf(W);
          T = T.slice(L + 1);
        }
        setTimeout(() => Nn(T)), S.preventDefault();
      }
    }
    const $ = k(() => a.position === "popper" ? a : {}), D = ae($.value);
    return Df({
      content: i,
      viewport: c,
      onViewportChange: (S) => {
        c.value = S;
      },
      itemRefCallback: (S, I, T) => {
        var W, L;
        const B = !x.value && !T;
        (((W = o.modelValue) == null ? void 0 : W.value) !== void 0 && ((L = o.modelValue) == null ? void 0 : L.value) === I || B) && (p.value = S, B && (x.value = !0));
      },
      selectedItem: p,
      selectedItemText: g,
      onItemLeave: () => {
        var S;
        (S = i.value) == null || S.focus();
      },
      itemTextRefCallback: (S, I, T) => {
        var W, L;
        const B = !x.value && !T;
        (((W = o.modelValue) == null ? void 0 : W.value) !== void 0 && ((L = o.modelValue) == null ? void 0 : L.value) === I || B) && (g.value = S);
      },
      focusSelectedItem: h,
      position: a.position,
      isPositioned: m,
      searchRef: d
    }), (S, I) => (v(), y(l(rn), {
      "as-child": "",
      onMountAutoFocus: I[6] || (I[6] = _e(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: I[7] || (I[7] = (T) => {
        var W;
        n("closeAutoFocus", T), !T.defaultPrevented && ((W = l(o).triggerElement.value) == null || W.focus({ preventScroll: !0 }), T.preventDefault());
      })
    }, {
      default: f(() => [
        O(l(ka), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: I[2] || (I[2] = _e(() => {
          }, ["prevent"])),
          onDismiss: I[3] || (I[3] = (T) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: I[4] || (I[4] = (T) => n("escapeKeyDown", T)),
          onPointerDownOutside: I[5] || (I[5] = (T) => n("pointerDownOutside", T))
        }, {
          default: f(() => [
            (v(), y(We(
              S.position === "popper" ? Pf : Bf
            ), E({ ...S.$attrs, ...l(D) }, {
              id: l(o).contentId,
              ref: (T) => {
                i.value = l(Se)(T);
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
              onContextmenu: I[0] || (I[0] = _e(() => {
              }, ["prevent"])),
              onPlaced: I[1] || (I[1] = (T) => m.value = !0),
              onKeydown: P
            }), {
              default: f(() => [
                w(S.$slots, "default")
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
    const a = e, n = le(a, t), o = Dt(), s = M();
    de(() => {
      s.value = new DocumentFragment();
    });
    const i = M(), r = k(() => a.forceMount || o.open.value);
    return (d, u) => {
      var c;
      return r.value ? (v(), y(l(Re), {
        key: 0,
        ref_key: "presenceRef",
        ref: i,
        present: !0
      }, {
        default: f(() => [
          O(Of, j(G({ ...l(n), ...d.$attrs })), {
            default: f(() => [
              w(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = i.value) != null && c.present) && s.value ? (v(), F("div", Ef, [
        (v(), y(Xa, { to: s.value }, [
          O(Sf, { context: l(o) }, {
            default: f(() => [
              w(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : J("", !0);
    };
  }
}), Af = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(R), E({ "aria-hidden": "true" }, t), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ts, Tf] = ie("SelectItem"), If = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: a } = me(t), n = Dt(), o = Ot(ea), { forwardRef: s, currentElement: i } = N(), r = k(() => {
      var h;
      return ((h = n.modelValue) == null ? void 0 : h.value) === t.value;
    }), d = M(!1), u = M(t.textValue ?? ""), c = xe(void 0, "radix-vue-select-item-text");
    async function p(h) {
      await ne(), !(h != null && h.defaultPrevented) && (a.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function g(h) {
      var _;
      await ne(), !h.defaultPrevented && (a.value ? (_ = o.onItemLeave) == null || _.call(o) : h.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(h) {
      var _;
      await ne(), !h.defaultPrevented && h.currentTarget === document.activeElement && ((_ = o.onItemLeave) == null || _.call(o));
    }
    async function x(h) {
      var _;
      await ne(), !(h.defaultPrevented || ((_ = o.searchRef) == null ? void 0 : _.value) !== "" && h.key === " ") && (xf.includes(h.key) && p(), h.key === " " && h.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return de(() => {
      i.value && o.itemRefCallback(
        i.value,
        t.value,
        t.disabled
      );
    }), Tf({
      value: t.value,
      disabled: a,
      textId: c,
      isSelected: r,
      onItemTextChange: (h) => {
        u.value = ((u.value || (h == null ? void 0 : h.textContent)) ?? "").trim();
      }
    }), (h, _) => (v(), y(l(R), {
      ref: l(s),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": l(c),
      "data-highlighted": d.value ? "" : void 0,
      "aria-selected": r.value,
      "data-state": r.value ? "checked" : "unchecked",
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
      onTouchend: _[3] || (_[3] = _e(() => {
      }, ["prevent", "stop"])),
      onPointermove: g,
      onPointerleave: m,
      onKeydown: x
    }, {
      default: f(() => [
        w(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Vf = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = Ts();
    return (n, o) => l(a).isSelected.value ? (v(), y(l(R), E({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : J("", !0);
  }
}), [Rf, Ff] = ie("SelectGroup"), Lf = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = xe(void 0, "radix-vue-select-group");
    return Ff({ id: a }), (n, o) => (v(), y(l(R), E({ role: "group" }, t, { "aria-labelledby": l(a) }), {
      default: f(() => [
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
    return (n, o) => (v(), y(l(R), E(t, {
      id: l(a).id
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Is = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = Dt(), n = Ot(ea), o = yf(), s = Ts(), { forwardRef: i, currentElement: r } = N(), d = k(() => {
      var u;
      return Ne("option", {
        key: s.value,
        value: s.value,
        disabled: s.disabled.value,
        textContent: (u = r.value) == null ? void 0 : u.textContent
      });
    });
    return de(() => {
      r.value && (s.onItemTextChange(r.value), n.itemTextRefCallback(
        r.value,
        s.value,
        s.disabled.value
      ), o.onNativeOptionAdd(d.value));
    }), Yn(() => {
      o.onNativeOptionRemove(d.value);
    }), (u, c) => (v(), F(ee, null, [
      O(l(R), E({
        id: l(s).textId,
        ref: l(i)
      }, { ...t, ...u.$attrs }), {
        default: f(() => [
          w(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      l(s).isSelected.value && l(a).valueElement.value && !l(a).valueElementHasChildren.value ? (v(), y(Xa, {
        key: 0,
        to: l(a).valueElement.value
      }, [
        w(u.$slots, "default")
      ], 8, ["to"])) : J("", !0)
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
    const t = e, { nonce: a } = me(t), n = Fc(a), o = Ot(ea), s = o.position === "item-aligned" ? Po() : void 0, { forwardRef: i, currentElement: r } = N();
    de(() => {
      o == null || o.onViewportChange(r.value);
    });
    const d = M(0);
    function u(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: g, contentWrapper: m } = s ?? {};
      if (g != null && g.value && m != null && m.value) {
        const x = Math.abs(d.value - p.scrollTop);
        if (x > 0) {
          const h = window.innerHeight - Je * 2, _ = Number.parseFloat(
            m.value.style.minHeight
          ), C = Number.parseFloat(m.value.style.height), P = Math.max(_, C);
          if (P < h) {
            const $ = P + x, D = Math.min(h, $), S = $ - D;
            m.value.style.height = `${D}px`, m.value.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = p.scrollTop;
    }
    return (c, p) => (v(), F(ee, null, [
      O(l(R), E({
        ref: l(i),
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
        default: f(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      O(l(R), {
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
}), Vs = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const a = t, { injectCollection: n } = qt(), o = n(), s = Ot(ea), i = M(null);
    function r() {
      i.value !== null && (window.clearInterval(i.value), i.value = null);
    }
    ge(() => {
      const c = o.value.find(
        (p) => p === document.activeElement
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function d() {
      i.value === null && (i.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    function u() {
      var c;
      (c = s.onItemLeave) == null || c.call(s), i.value === null && (i.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    return Yn(() => r()), (c, p) => {
      var g;
      return v(), y(l(R), E({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (g = c.$parent) == null ? void 0 : g.$props, {
        onPointerdown: d,
        onPointermove: u,
        onPointerleave: p[0] || (p[0] = () => {
          r();
        })
      }), {
        default: f(() => [
          w(c.$slots, "default")
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
    const t = Ot(ea), a = t.position === "item-aligned" ? Po() : void 0, { forwardRef: n, currentElement: o } = N(), s = M(!1);
    return ge((i) => {
      var r, d;
      if ((r = t.viewport) != null && r.value && (d = t.isPositioned) != null && d.value) {
        let u = function() {
          s.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        u(), c.addEventListener("scroll", u), i(() => c.removeEventListener("scroll", u));
      }
    }), Q(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (i, r) => s.value ? (v(), y(Vs, {
      key: 0,
      ref: l(n),
      onAutoScroll: r[0] || (r[0] = () => {
        const { viewport: d, selectedItem: u } = l(t);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop - u.value.offsetHeight);
      })
    }, {
      default: f(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 512)) : J("", !0);
  }
}), Uf = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ot(ea), a = t.position === "item-aligned" ? Po() : void 0, { forwardRef: n, currentElement: o } = N(), s = M(!1);
    return ge((i) => {
      var r, d;
      if ((r = t.viewport) != null && r.value && (d = t.isPositioned) != null && d.value) {
        let u = function() {
          const p = c.scrollHeight - c.clientHeight;
          s.value = Math.ceil(c.scrollTop) < p;
        };
        const c = t.viewport.value;
        u(), c.addEventListener("scroll", u), i(() => c.removeEventListener("scroll", u));
      }
    }), Q(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (i, r) => s.value ? (v(), y(Vs, {
      key: 0,
      ref: l(n),
      onAutoScroll: r[0] || (r[0] = () => {
        const { viewport: d, selectedItem: u } = l(t);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop + u.value.offsetHeight);
      })
    }, {
      default: f(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 512)) : J("", !0);
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
      var s;
      const i = !!nn((s = o == null ? void 0 : o.default) == null ? void 0 : s.call(o)).length;
      n.onValueElementHasChildrenChange(i);
    }), de(() => {
      n.valueElement = a;
    }), (s, i) => (v(), y(l(R), {
      ref: l(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: f(() => {
        var r;
        return [
          l(As)((r = l(n).modelValue) == null ? void 0 : r.value) ? (v(), F(ee, { key: 0 }, [
            Y(Z(s.placeholder), 1)
          ], 64)) : w(s.$slots, "default", { key: 1 })
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
    return (t, a) => (v(), y(l(R), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: f(() => [
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
    const a = e, n = t, { disabled: o } = me(a), s = ve(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    });
    function i() {
      o.value || (s.value = !s.value);
    }
    const { forwardRef: r, currentElement: d } = N(), u = ln(d), c = k(() => {
      var p;
      return a.id && d.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Yf({
      checked: s,
      toggleCheck: i,
      disabled: o
    }), (p, g) => (v(), F(ee, null, [
      O(l(R), E(p.$attrs, {
        id: p.id,
        ref: l(r),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || c.value,
        "aria-checked": l(s),
        "aria-required": p.required,
        "data-state": l(s) ? "checked" : "unchecked",
        "data-disabled": l(o) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        disabled: l(o),
        onClick: i,
        onKeydown: ze(_e(i, ["prevent"]), ["enter"])
      }), {
        default: f(() => [
          w(p.$slots, "default", { checked: l(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      l(u) ? (v(), F("input", {
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
      }, null, 8, Gf)) : J("", !0)
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
      return v(), y(l(R), {
        "data-state": (o = l(t).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": l(t).disabled.value ? "" : void 0,
        "as-child": a.asChild,
        as: a.as
      }, {
        default: f(() => [
          w(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [Do, Jf] = ie("TabsRoot"), Qf = /* @__PURE__ */ b({
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
    const a = e, n = t, { orientation: o, dir: s } = me(a), i = gt(s);
    N();
    const r = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), d = M();
    return Jf({
      modelValue: r,
      changeModelValue: (u) => {
        r.value = u;
      },
      orientation: o,
      dir: i,
      activationMode: a.activationMode,
      baseId: xe(void 0, "radix-vue-tabs"),
      tabsList: d
    }), (u, c) => (v(), y(l(R), {
      dir: l(i),
      "data-orientation": l(o),
      "as-child": u.asChild,
      as: u.as
    }, {
      default: f(() => [
        w(u.$slots, "default", { modelValue: l(r) })
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
    const t = e, { loop: a } = me(t), { forwardRef: n, currentElement: o } = N(), s = Do();
    return s.tabsList = o, (i, r) => (v(), y(l(Cs), {
      "as-child": "",
      orientation: l(s).orientation.value,
      dir: l(s).dir.value,
      loop: l(a)
    }, {
      default: f(() => [
        O(l(R), {
          ref: l(n),
          role: "tablist",
          "as-child": i.asChild,
          as: i.as,
          "aria-orientation": l(s).orientation.value
        }, {
          default: f(() => [
            w(i.$slots, "default")
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
    const t = e, { forwardRef: a } = N(), n = Do(), o = k(() => Rs(n.baseId, t.value)), s = k(() => Fs(n.baseId, t.value)), i = k(() => t.value === n.modelValue.value), r = M(i.value);
    return de(() => {
      requestAnimationFrame(() => {
        r.value = !1;
      });
    }), (d, u) => (v(), y(l(Re), {
      present: i.value,
      "force-mount": ""
    }, {
      default: f(({ present: c }) => [
        O(l(R), {
          id: s.value,
          ref: l(a),
          "as-child": d.asChild,
          as: d.as,
          role: "tabpanel",
          "data-state": i.value ? "active" : "inactive",
          "data-orientation": l(n).orientation.value,
          "aria-labelledby": o.value,
          hidden: !c.value,
          tabindex: "0",
          style: ba({
            animationDuration: r.value ? "0s" : void 0
          })
        }, {
          default: f(() => [
            d.forceMount || i.value ? w(d.$slots, "default", { key: 0 }) : J("", !0)
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
    const t = e, { forwardRef: a } = N(), n = Do(), o = k(() => Rs(n.baseId, t.value)), s = k(() => Fs(n.baseId, t.value)), i = k(() => t.value === n.modelValue.value);
    return (r, d) => (v(), y(l(tp), {
      "as-child": "",
      focusable: !r.disabled,
      active: i.value
    }, {
      default: f(() => [
        O(l(R), {
          id: o.value,
          ref: l(a),
          role: "tab",
          type: r.as === "button" ? "button" : void 0,
          as: r.as,
          "as-child": r.asChild,
          "aria-selected": i.value ? "true" : "false",
          "aria-controls": s.value,
          "data-state": i.value ? "active" : "inactive",
          disabled: r.disabled,
          "data-disabled": r.disabled ? "" : void 0,
          "data-orientation": l(n).orientation.value,
          onMousedown: d[0] || (d[0] = _e((u) => {
            !r.disabled && u.ctrlKey === !1 ? l(n).changeModelValue(r.value) : u.preventDefault();
          }, ["left"])),
          onKeydown: d[1] || (d[1] = ze((u) => l(n).changeModelValue(r.value), ["enter", "space"])),
          onFocus: d[2] || (d[2] = () => {
            const u = l(n).activationMode !== "manual";
            !i.value && !r.disabled && u && l(n).changeModelValue(r.value);
          })
        }, {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [un, nv] = ie("ToastProvider"), ov = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: a, duration: n, swipeDirection: o, swipeThreshold: s } = me(t), i = M(), r = M(0), d = M(!1), u = M(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return nv({
      label: a,
      duration: n,
      swipeDirection: o,
      swipeThreshold: s,
      toastCount: r,
      viewport: i,
      onViewportChange(c) {
        i.value = c;
      },
      onToastAdd() {
        r.value++;
      },
      onToastRemove() {
        r.value--;
      },
      isFocusedToastEscapeKeyDownRef: d,
      isClosePausedRef: u
    }), (c, p) => w(c.$slots, "default");
  }
}), lv = "toast.swipeStart", sv = "toast.swipeMove", rv = "toast.swipeCancel", iv = "toast.swipeEnd", Wn = "toast.viewportPause", Un = "toast.viewportResume";
function Va(e, t, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function al(e, t, a = 0) {
  const n = Math.abs(e.x), o = Math.abs(e.y), s = n > o;
  return t === "left" || t === "right" ? s && n > a : !s && o > a;
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
          const s = a.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Ls(a));
    }
  }), t;
}
const uv = /* @__PURE__ */ b({
  __name: "ToastAnnounce",
  setup(e) {
    const t = un(), a = Xd(1e3), n = M(!1);
    return as(() => {
      n.value = !0;
    }), (o, s) => l(a) || n.value ? (v(), y(l(dn), { key: 0 }, {
      default: f(() => [
        Y(Z(l(t).label.value) + " ", 1),
        w(o.$slots, "default")
      ]),
      _: 3
    })) : J("", !0);
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
    const a = e, n = t, { forwardRef: o, currentElement: s } = N(), i = un(), r = M(null), d = M(null), u = k(() => a.duration || i.duration.value), c = M(0), p = M(u.value), g = M(0), m = M(u.value), x = as(() => {
      const P = (/* @__PURE__ */ new Date()).getTime() - c.value;
      m.value = Math.max(p.value - P, 0);
    }, { fpsLimit: 60 });
    function h(P) {
      !P || P === Number.POSITIVE_INFINITY || Ke && (window.clearTimeout(g.value), c.value = (/* @__PURE__ */ new Date()).getTime(), g.value = window.setTimeout(_, P));
    }
    function _() {
      var P, $;
      (P = s.value) != null && P.contains(document.activeElement) && (($ = i.viewport.value) == null || $.focus()), i.isClosePausedRef.value = !1, n("close");
    }
    const C = k(() => s.value ? Ls(s.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const P = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(P);
    }
    return ge((P) => {
      const $ = i.viewport.value;
      if ($) {
        const D = () => {
          h(p.value), x.resume(), n("resume");
        }, S = () => {
          const I = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - I, window.clearTimeout(g.value), x.pause(), n("pause");
        };
        return $.addEventListener(Wn, S), $.addEventListener(Un, D), () => {
          $.removeEventListener(Wn, S), $.removeEventListener(Un, D);
        };
      }
    }), Q(() => [a.open, u.value], () => {
      p.value = u.value, a.open && !i.isClosePausedRef.value && h(u.value);
    }, { immediate: !0 }), fo("Escape", (P) => {
      n("escapeKeyDown", P), P.defaultPrevented || (i.isFocusedToastEscapeKeyDownRef.value = !0, _());
    }), de(() => {
      i.onToastAdd();
    }), Ct(() => {
      i.onToastRemove();
    }), pv({ onClose: _ }), (P, $) => (v(), F(ee, null, [
      C.value ? (v(), y(uv, {
        key: 0,
        role: "status",
        "aria-live": P.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: f(() => [
          Y(Z(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : J("", !0),
      l(i).viewport.value ? (v(), y(Xa, {
        key: 1,
        to: l(i).viewport.value
      }, [
        O(l(R), E({
          ref: l(o),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, P.$attrs, {
          as: P.as,
          "as-child": P.asChild,
          "data-state": P.open ? "open" : "closed",
          "data-swipe-direction": l(i).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: $[0] || ($[0] = _e((D) => {
            r.value = { x: D.clientX, y: D.clientY };
          }, ["left"])),
          onPointermove: $[1] || ($[1] = (D) => {
            if (!r.value) return;
            const S = D.clientX - r.value.x, I = D.clientY - r.value.y, T = !!d.value, W = ["left", "right"].includes(l(i).swipeDirection.value), L = ["left", "up"].includes(l(i).swipeDirection.value) ? Math.min : Math.max, B = W ? L(0, S) : 0, A = W ? 0 : L(0, I), V = D.pointerType === "touch" ? 10 : 2, K = { x: B, y: A }, H = { originalEvent: D, delta: K };
            T ? (d.value = K, l(Va)(l(sv), (U) => n("swipeMove", U), H)) : l(al)(K, l(i).swipeDirection.value, V) ? (d.value = K, l(Va)(l(lv), (U) => n("swipeStart", U), H), D.target.setPointerCapture(D.pointerId)) : (Math.abs(S) > V || Math.abs(I) > V) && (r.value = null);
          }),
          onPointerup: $[2] || ($[2] = (D) => {
            const S = d.value, I = D.target;
            if (I.hasPointerCapture(D.pointerId) && I.releasePointerCapture(D.pointerId), d.value = null, r.value = null, S) {
              const T = D.currentTarget, W = { originalEvent: D, delta: S };
              l(al)(S, l(i).swipeDirection.value, l(i).swipeThreshold.value) ? l(Va)(l(iv), (L) => n("swipeEnd", L), W) : l(Va)(l(rv), (L) => n("swipeCancel", L), W), T == null || T.addEventListener("click", (L) => L.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: f(() => [
            w(P.$slots, "default", {
              remaining: m.value,
              duration: u.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : J("", !0)
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
    const a = e, n = t, { forwardRef: o } = N(), s = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    return (i, r) => (v(), y(l(Re), {
      present: i.forceMount || l(s)
    }, {
      default: f(() => [
        O(fv, E({
          ref: l(o),
          open: l(s),
          type: i.type,
          as: i.as,
          "as-child": i.asChild,
          duration: i.duration
        }, i.$attrs, {
          onClose: r[0] || (r[0] = (d) => s.value = !1),
          onPause: r[1] || (r[1] = (d) => n("pause")),
          onResume: r[2] || (r[2] = (d) => n("resume")),
          onEscapeKeyDown: r[3] || (r[3] = (d) => n("escapeKeyDown", d)),
          onSwipeStart: r[4] || (r[4] = (d) => {
            n("swipeStart", d), d.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: r[5] || (r[5] = (d) => {
            const { x: u, y: c } = d.detail.delta, p = d.currentTarget;
            p.setAttribute("data-swipe", "move"), p.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), p.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: r[6] || (r[6] = (d) => {
            const u = d.currentTarget;
            u.setAttribute("data-swipe", "cancel"), u.style.removeProperty("--radix-toast-swipe-move-x"), u.style.removeProperty("--radix-toast-swipe-move-y"), u.style.removeProperty("--radix-toast-swipe-end-x"), u.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: r[7] || (r[7] = (d) => {
            const { x: u, y: c } = d.detail.delta, p = d.currentTarget;
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), s.value = !1;
          })
        }), {
          default: f(({ remaining: d, duration: u }) => [
            w(i.$slots, "default", {
              remaining: d,
              duration: u,
              open: l(s)
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
    return (t, a) => (v(), y(l(R), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: f(() => [
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
    return (o, s) => (v(), y(Ns, { "as-child": "" }, {
      default: f(() => [
        O(l(R), E(t, {
          ref: l(n),
          type: o.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (i) => l(a).onClose())
        }), {
          default: f(() => [
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
    return (a, n) => a.altText ? (v(), y(Ns, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: f(() => [
        O(zs, {
          ref: l(t),
          as: a.as,
          "as-child": a.asChild
        }, {
          default: f(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : J("", !0);
  }
}), nl = /* @__PURE__ */ b({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const a = t, n = un();
    return (o, s) => (v(), y(l(dn), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s[0] || (s[0] = (i) => {
        var r;
        const d = i.relatedTarget;
        !((r = l(n).viewport.value) != null && r.contains(d)) && a("focusFromOutsideViewport");
      })
    }, {
      default: f(() => [
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
    const t = e, { hotkey: a, label: n } = me(t), { forwardRef: o, currentElement: s } = N(), { createCollection: i } = qt(), r = i(s), d = un(), u = k(() => d.toastCount.value > 0), c = M(), p = M(), g = k(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    fo(a.value, () => {
      s.value.focus();
    }), de(() => {
      d.onViewportChange(s.value);
    }), ge((x) => {
      const h = s.value;
      if (u.value && h) {
        const _ = () => {
          if (!d.isClosePausedRef.value) {
            const S = new CustomEvent(Wn);
            h.dispatchEvent(S), d.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (d.isClosePausedRef.value) {
            const S = new CustomEvent(Un);
            h.dispatchEvent(S), d.isClosePausedRef.value = !1;
          }
        }, P = (S) => {
          !h.contains(S.relatedTarget) && C();
        }, $ = () => {
          h.contains(document.activeElement) || C();
        }, D = (S) => {
          var I, T, W;
          const L = S.altKey || S.ctrlKey || S.metaKey;
          if (S.key === "Tab" && !L) {
            const B = document.activeElement, A = S.shiftKey;
            if (S.target === h && A) {
              (I = c.value) == null || I.focus();
              return;
            }
            const V = m({ tabbingDirection: A ? "backwards" : "forwards" }), K = V.findIndex((H) => H === B);
            Wa(V.slice(K + 1)) ? S.preventDefault() : A ? (T = c.value) == null || T.focus() : (W = p.value) == null || W.focus();
          }
        };
        h.addEventListener("focusin", _), h.addEventListener("focusout", P), h.addEventListener("pointermove", _), h.addEventListener("pointerleave", $), h.addEventListener("keydown", D), window.addEventListener("blur", _), window.addEventListener("focus", C), x(() => {
          h.removeEventListener("focusin", _), h.removeEventListener("focusout", P), h.removeEventListener("pointermove", _), h.removeEventListener("pointerleave", $), h.removeEventListener("keydown", D), window.removeEventListener("blur", _), window.removeEventListener("focus", C);
        });
      }
    });
    function m({ tabbingDirection: x }) {
      const h = r.value.map((_) => {
        const C = [_, ...go(_)];
        return x === "forwards" ? C : C.reverse();
      });
      return (x === "forwards" ? h.reverse() : h).flat();
    }
    return (x, h) => (v(), y(l(Du), {
      role: "region",
      "aria-label": typeof l(n) == "string" ? l(n).replace("{hotkey}", g.value) : l(n)(g.value),
      tabindex: "-1",
      style: ba({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: u.value ? void 0 : "none"
      })
    }, {
      default: f(() => [
        u.value ? (v(), y(nl, {
          key: 0,
          ref: (_) => {
            c.value = l(Se)(_);
          },
          onFocusFromOutsideViewport: h[0] || (h[0] = () => {
            const _ = m({
              tabbingDirection: "forwards"
            });
            l(Wa)(_);
          })
        }, null, 512)) : J("", !0),
        O(l(R), E({
          ref: l(o),
          tabindex: "-1",
          as: x.as,
          "as-child": x.asChild
        }, x.$attrs), {
          default: f(() => [
            w(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        u.value ? (v(), y(nl, {
          key: 1,
          ref: (_) => {
            p.value = l(Se)(_);
          },
          onFocusFromOutsideViewport: h[1] || (h[1] = () => {
            const _ = m({
              tabbingDirection: "backwards"
            });
            l(Wa)(_);
          })
        }, null, 512)) : J("", !0)
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
    return N(), (a, n) => (v(), y(l(R), j(G(t)), {
      default: f(() => [
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
    return N(), (a, n) => (v(), y(l(R), j(G(t)), {
      default: f(() => [
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
    return (a, n) => (v(), y(l(R), {
      as: a.as,
      "as-child": a.asChild,
      class: re(l(z)(l(St)({ variant: a.variant, size: a.size }), t.class))
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), St = Zn(
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
      const { class: i, ...r } = a;
      return r;
    }), s = le(o, n);
    return (i, r) => (v(), y(l(oc), E({
      class: l(z)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: u }) => [
        O(l(Pv), null, {
          default: f(() => [
            O(l(Sv)),
            O(l(Dv)),
            O(l(Ov))
          ]),
          _: 1
        }),
        oe("div", bv, [
          (v(!0), F(ee, null, he(d, (c) => (v(), y(l(Cv), {
            key: c.value.toString()
          }, {
            default: f(() => [
              O(l(kv), null, {
                default: f(() => [
                  O(l(ol), null, {
                    default: f(() => [
                      (v(!0), F(ee, null, he(u, (p) => (v(), y(l(Bv), { key: p }, {
                        default: f(() => [
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
              O(l($v), null, {
                default: f(() => [
                  (v(!0), F(ee, null, he(c.rows, (p, g) => (v(), y(l(ol), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), F(ee, null, he(p, (m) => (v(), y(l(_v), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          O(l(xv), {
                            day: m,
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(ic), E({
      class: l(z)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        t.class
      )
    }, l(n)), {
      default: f(() => [
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(mc), E({
      class: l(z)(
        l(St)({ variant: "ghost" }),
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(rc), E({
      class: l(z)("w-full border-collapse space-y-1", t.class)
    }, l(n)), {
      default: f(() => [
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
    return (a, n) => (v(), y(l(fc), j(G(t)), {
      default: f(() => [
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
    return (a, n) => (v(), y(l(pc), j(G(t)), {
      default: f(() => [
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(vc), E({
      class: l(z)("flex", t.class)
    }, l(n)), {
      default: f(() => [
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(dc), E({
      class: l(z)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(n)), {
      default: f(() => [
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(lc), E({
      class: l(z)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(n)), {
      default: f(() => [
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(sc), E({
      class: l(z)("text-sm font-medium", t.class)
    }, l(n)), {
      default: f(({ headingValue: i }) => [
        w(o.$slots, "default", { headingValue: i }, () => [
          Y(Z(i), 1)
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(uc), E({
      class: l(z)(
        l(St)({ variant: "outline" }),
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(cc), E({
      class: l(z)(
        l(St)({ variant: "outline" }),
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
      const { class: i, ...r } = a;
      return r;
    }), s = le(o, n);
    return (i, r) => (v(), y(l(Oc), E(l(s), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        a.class
      ]
    }), {
      default: f(() => [
        w(i.$slots, "default")
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
    return (s, i) => (v(), y(l(xu), j(G(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bg = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(wo), j(G(t)), {
      default: f(() => [
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
    return (a, n) => (v(), y(l(Cu), j(G(t)), {
      default: f(() => [
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
    return (a, n) => (v(), F("div", {
      class: re(l(z)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Av = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(qu), E(l(n), {
      class: l(z)("text-lg leading-none tracking-tight text-slate-500 dark:text-slate-200", t.class)
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tv = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(Yu), E(l(n), {
      class: l(z)("text-sm text-slate-500 dark:text-slate-500", t.class)
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function Iv(e, t) {
  return v(), F("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    oe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    })
  ]);
}
function Vv(e, t) {
  return v(), F("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    oe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]);
}
function Rv(e, t) {
  return v(), F("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    oe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
    })
  ]);
}
function Fv(e, t) {
  return v(), F("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    oe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    })
  ]);
}
function js(e, t) {
  return v(), F("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    oe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5 8.25 12l7.5-7.5"
    })
  ]);
}
function Hs(e, t) {
  return v(), F("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    oe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m8.25 4.5 7.5 7.5-7.5 7.5"
    })
  ]);
}
function Lv(e, t) {
  return v(), F("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    oe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    })
  ]);
}
function Nv(e, t) {
  return v(), F("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    oe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    })
  ]);
}
function zv(e, t) {
  return v(), F("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    oe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    })
  ]);
}
function Wv(e, t) {
  return v(), F("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    oe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    })
  ]);
}
function Ks(e, t) {
  return v(), F("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    oe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
const Gs = /* @__PURE__ */ b({
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
      const { class: i, ...r } = n;
      return r;
    }), s = le(o, a);
    return (i, r) => (v(), y(l(ss), null, {
      default: f(() => [
        O(l(cs), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        O(l(us), E(l(s), {
          class: l(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg",
            n.class
          )
        }), {
          default: f(() => [
            w(i.$slots, "default"),
            O(l(wo), {
              onClick: r[0] || (r[0] = (d) => a("close", d)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: f(() => [
                O(l(Ks), { class: "size-6 dark:text-slate-300" }),
                r[1] || (r[1] = oe("span", { class: "sr-only" }, "Close", -1))
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
}), wg = /* @__PURE__ */ b({
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
      const { class: i, ...r } = a;
      return r;
    }), s = le(o, n);
    return (i, r) => (v(), y(l(ss), null, {
      default: f(() => [
        O(l(cs), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: f(() => [
            O(l(us), E({
              class: l(z)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg md:w-full",
                a.class
              )
            }, l(s), {
              onPointerDownOutside: r[0] || (r[0] = (d) => {
                const u = d.detail.originalEvent, c = u.target;
                (u.offsetX > c.clientWidth || u.offsetY > c.clientHeight) && d.preventDefault();
              })
            }), {
              default: f(() => [
                w(i.$slots, "default"),
                O(l(wo), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: f(() => [
                    O(l(Ks), { class: "size-4" }),
                    r[1] || (r[1] = oe("span", { class: "sr-only" }, "Close", -1))
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
}), Uv = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      class: re(l(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), _g = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = le(e, t);
    return (s, i) => (v(), y(l(Us), j(G(l(o))), {
      default: f(() => [
        O(l(Gs), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: f(() => [
            O(Ws, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: f(() => [
                w(s.$slots, "default")
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
}), jv = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Rc), E(a.value, {
      class: l(z)("py-6 text-center text-sm", t.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hv = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Mc), E(a.value, {
      class: l(z)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: f(() => [
        n.heading ? (v(), y(l(Ac), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: f(() => [
            Y(Z(n.heading), 1)
          ]),
          _: 1
        })) : J("", !0),
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kv = { class: "flex items-center border-b px-3" }, Gv = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), F("div", Kv, [
      O(l(Nv), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      O(l(Sc), E({ ...l(n), ...o.$attrs }, {
        "auto-focus": "",
        class: l(z)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), qv = /* @__PURE__ */ b({
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
      const { class: i, ...r } = a;
      return r;
    }), s = le(o, n);
    return (i, r) => (v(), y(l(zc), E(l(s), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: f(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yv = { role: "presentation" }, Zv = /* @__PURE__ */ b({
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
      const { class: i, ...r } = a;
      return r;
    }), s = le(o, n);
    return (i, r) => (v(), y(l(Vc), E(l(s), {
      class: l(z)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: f(() => [
        oe("div", Yv, [
          w(i.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xg = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Wc), E(a.value, {
      class: l(z)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cg = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("span", {
      class: re(l(z)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Xv = /* @__PURE__ */ b({
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
    return (s, i) => (v(), y(l(_p), j(G(l(o))), {
      default: f(({ open: r }) => [
        w(s.$slots, "default", { open: r })
      ]),
      _: 3
    }, 16));
  }
}), Jv = /* @__PURE__ */ b({
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
    return (a, n) => (v(), F("div", {
      class: re(
        l(z)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          t.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Qv = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = ae(e);
    return (n, o) => (v(), y(l(xp), E({ class: "outline-none" }, l(a)), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), em = /* @__PURE__ */ b({
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
      const { class: i, ...r } = a;
      return r;
    }), s = le(o, n);
    return (i, r) => (v(), y(l(Cp), null, {
      default: f(() => [
        O(l($p), E(l(s), {
          class: l(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
            a.class
          )
        }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), $g = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(kp), j(G(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kg = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = le(e, t);
    return (s, i) => (v(), y(l(Op), j(G(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bg = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(Os), E(l(n), {
      class: l(z)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.inset && "pl-8",
        t.class
      )
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tm = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(Jv, {
      class: re(t.class)
    }, {
      default: f(() => [
        O(l(Os), E(l(n), {
          as: o.as,
          href: o.href,
          class: "size-full"
        }), {
          default: f(() => [
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
const am = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ra = {
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
const nm = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: s, class: i, ...r }, { slots: d }) => Ne(
  "svg",
  {
    ...Ra,
    width: e || Ra.width,
    height: e || Ra.height,
    stroke: n || Ra.stroke,
    "stroke-width": a ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${am(s ?? "icon")}`],
    ...r
  },
  [...o.map((u) => Ne(...u)), ...d.default ? [d.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = (e, t) => (a, { slots: n }) => Ne(
  nm,
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
const Oo = ta("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = ta("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const om = ta("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = ta("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sm = ta("ChevronsUpDownIcon", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rm = ta("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), im = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Pg = /* @__PURE__ */ b({
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
      const { class: i, ...r } = a;
      return r;
    }), s = le(o, n);
    return (i, r) => (v(), y(l(Pp), E(l(s), {
      class: l(z)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        oe("span", im, [
          O(l(Ss), null, {
            default: f(() => [
              O(l(Oo), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dm = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Dg = /* @__PURE__ */ b({
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
      const { class: i, ...r } = a;
      return r;
    }), s = le(o, n);
    return (i, r) => (v(), y(l(Sp), E(l(s), {
      class: l(z)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        oe("span", dm, [
          O(l(Ss), null, {
            default: f(() => [
              O(l(rm), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Og = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("span", {
      class: re(l(z)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Sg = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Bp), E(a.value, {
      class: l(z)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), Eg = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(Dp), E(l(n), {
      class: l(z)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", t.class)
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mg = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = le(e, t);
    return (s, i) => (v(), y(l(Ep), j(G(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(Ap), E(l(n), {
      class: l(z)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: f(() => [
        w(o.$slots, "default"),
        O(l(om), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tg = /* @__PURE__ */ b({
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
      const { class: i, ...r } = a;
      return r;
    }), s = le(o, n);
    return (i, r) => (v(), y(l(Mp), E(l(s), {
      class: l(z)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
        a.class
      )
    }), {
      default: f(() => [
        w(i.$slots, "default")
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
    return (t, a) => (v(), F("div", um, "Characters: " + Z(t.count), 1));
  }
}), pm = {}, fm = { class: "text-sm text-slate-600 dark:text-slate-300" };
function vm(e, t) {
  return v(), F("div", fm, [
    w(e.$slots, "default")
  ]);
}
const mm = /* @__PURE__ */ _a(pm, [["render", vm]]), hm = { class: "text-sm text-red-600 dark:text-red-400" }, gm = /* @__PURE__ */ b({
  __name: "Error",
  props: {
    error: {}
  },
  setup(e) {
    return (t, a) => jt((v(), F("div", null, [
      oe("p", hm, Z(t.error), 1)
    ], 512)), [
      [qn, t.error]
    ]);
  }
}), ym = {}, bm = { class: "w-full space-y-4 p-1.5" };
function wm(e, t) {
  return v(), F("div", bm, [
    w(e.$slots, "default")
  ]);
}
const Ig = /* @__PURE__ */ _a(ym, [["render", wm]]), _m = {}, xm = { class: "my-4" };
function Cm(e, t) {
  return v(), F("div", xm, [
    w(e.$slots, "default")
  ]);
}
const $m = /* @__PURE__ */ _a(_m, [["render", Cm]]), km = { class: "grid gap-4 md:grid-cols-2" }, Vg = /* @__PURE__ */ b({
  __name: "FormGrid",
  setup(e) {
    return (t, a) => (v(), y($m, null, {
      default: f(() => [
        oe("div", km, [
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
    return (n, o) => (v(), y(l(Tp), E(a.value, {
      class: l(z)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        t.class
      )
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bm = { class: "flex gap-2" }, Rg = /* @__PURE__ */ b({
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
    return Q(o, (s) => {
      a("update:modelValue", s);
    }), (s, i) => (v(), F("div", Bm, [
      O(l(bc), {
        id: s.id,
        checked: o.value,
        "onUpdate:checked": i[0] || (i[0] = (r) => o.value = r),
        class: "peer size-4 shrink-0 rounded-sm border border-primary-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-900 data-[state=checked]:text-primary-50 dark:border-primary-50 dark:ring-offset-primary-950 dark:focus-visible:ring-primary-300 dark:data-[state=checked]:bg-primary-300 dark:data-[state=checked]:text-primary-900"
      }, {
        default: f(() => [
          O(l(wc), { class: "flex h-full w-full items-center justify-center text-current" }, {
            default: f(() => [
              O(l(Vv), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["id", "checked"]),
      s.label ? (v(), y(l(Ys), {
        key: 0,
        id: s.id,
        class: "my-auto"
      }, {
        default: f(() => [
          Y(Z(s.label), 1)
        ]),
        _: 1
      }, 8, ["id"])) : J("", !0)
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
    return (s, i) => (v(), y(l(Kp), j(G(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
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
    return (a, n) => (v(), y(l(Gp), j(G(t)), {
      default: f(() => [
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
      const { class: i, ...r } = a;
      return r;
    }), s = le(o, n);
    return (i, r) => (v(), y(l(qp), null, {
      default: f(() => [
        O(l(Xp), E({ ...l(s), ...i.$attrs }, {
          class: l(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Fg = /* @__PURE__ */ b({
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
    const a = t, n = e, o = k(() => n.emptyMessage ?? "Option not found"), s = k(() => n.placeholder ?? "Select an option"), i = M(!1), r = M(n.modelValue ?? []), d = (p, g) => p.filter((m) => m.name.toLowerCase().includes(g.toLowerCase())), u = k(() => {
      var p;
      return Array.isArray(r.value) ? r.value.length ? r.value.map((g) => g.name).join(", ") : s.value : typeof r.value == "object" ? r.value.name : (p = n.options.find((g) => g.id === r.value)) == null ? void 0 : p.name;
    }), c = (p) => Array.isArray(r.value) ? r.value.find((g) => g.id === p.id) : typeof r.value == "object" ? r.value.id === p.id : r.value === p.id;
    return Q(r, () => {
      Array.isArray(r.value) ? a("update:modelValue", r.value) : a("update:modelValue", r.value.id);
    }), (p, g) => (v(), y(l(Zs), {
      open: i.value,
      "onUpdate:open": g[2] || (g[2] = (m) => i.value = m)
    }, {
      default: f(() => [
        O(l(Xs), { "as-child": "" }, {
          default: f(() => [
            O(l(qe), {
              variant: "outline",
              role: "combobox",
              "aria-expanded": i.value,
              class: "w-[200px] justify-between overflow-hidden !font-normal dark:text-white"
            }, {
              default: f(() => [
                Y(Z(u.value) + " ", 1),
                O(l(sm), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
              ]),
              _: 1
            }, 8, ["aria-expanded"])
          ]),
          _: 1
        }),
        O(l(Js), { class: "w-[200px] p-0" }, {
          default: f(() => [
            O(l(Ws), {
              multiple: p.multiple,
              modelValue: r.value,
              "onUpdate:modelValue": g[1] || (g[1] = (m) => r.value = m),
              "filter-function": d
            }, {
              default: f(() => [
                O(l(Gv), {
                  class: "h-9",
                  placeholder: s.value
                }, null, 8, ["placeholder"]),
                O(l(jv), null, {
                  default: f(() => [
                    Y(Z(o.value), 1)
                  ]),
                  _: 1
                }),
                O(l(Zv), null, {
                  default: f(() => [
                    O(l(Hv), null, {
                      default: f(() => [
                        (v(!0), F(ee, null, he(p.options, (m) => (v(), y(l(qv), {
                          key: m.id,
                          value: m,
                          onSelect: g[0] || (g[0] = () => {
                            p.multiple || (i.value = !1);
                          })
                        }, {
                          default: f(() => [
                            Y(Z(m.name) + " ", 1),
                            O(l(Oo), {
                              class: re(l(z)("ml-auto size-4", c(m) ? "opacity-100" : "opacity-0"))
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
    }, 8, ["open"]));
  }
}), Lg = /* @__PURE__ */ b({
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
    }), s = M();
    return Q(s, () => {
      a("update:modelValue", s.value);
    }), de(() => {
      n.defaultValue && (s.value = n.defaultValue);
    }), (i, r) => (v(), y(l(Zs), null, {
      default: f(() => [
        O(l(Xs), { "as-child": "" }, {
          default: f(() => [
            O(l(qe), {
              variant: "outline",
              class: re([
                "w-[280px] justify-start text-left font-normal dark:text-white",
                !i.modelValue && "text-muted-foreground"
              ])
            }, {
              default: f(() => [
                O(l(Iv), { class: "mr-2 size-4" }),
                Y(" " + Z(s.value ? l(o).format(s.value.toDate(l($t)())) : i.placeholder), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }),
        O(l(Js), { class: "w-auto p-0" }, {
          default: f(() => [
            O(l(wv), {
              modelValue: s.value,
              "onUpdate:modelValue": r[0] || (r[0] = (d) => s.value = d),
              "default-value": i.defaultValue,
              "initial-focus": ""
            }, null, 8, ["modelValue", "default-value"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Pm = { class: "relative" }, Dm = {
  name: "Base",
  inheritAttrs: !1
}, Ng = /* @__PURE__ */ b({
  ...Dm,
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
      return v(), F("div", null, [
        t.label && t.showLabel ? (v(), y(l(Ys), {
          key: 0,
          id: t.id
        }, {
          default: f(() => [
            Y(Z(t.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : J("", !0),
        oe("div", Pm, [
          w(t.$slots, "default"),
          t.showCharacterCount ? (v(), y(l(cm), {
            key: 0,
            count: (n = t.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[3px]"
          }, null, 8, ["count"])) : J("", !0)
        ]),
        O(l(mm), { class: "mt-[3px] w-4/5" }, {
          default: f(() => [
            Y(Z(t.description), 1)
          ]),
          _: 1
        }),
        O(l(gm), { error: t.error }, null, 8, ["error"])
      ]);
    };
  }
});
var be = [];
for (var kn = 0; kn < 256; ++kn)
  be.push((kn + 256).toString(16).slice(1));
function Om(e, t = 0) {
  return (be[e[t + 0]] + be[e[t + 1]] + be[e[t + 2]] + be[e[t + 3]] + "-" + be[e[t + 4]] + be[e[t + 5]] + "-" + be[e[t + 6]] + be[e[t + 7]] + "-" + be[e[t + 8]] + be[e[t + 9]] + "-" + be[e[t + 10]] + be[e[t + 11]] + be[e[t + 12]] + be[e[t + 13]] + be[e[t + 14]] + be[e[t + 15]]).toLowerCase();
}
var Fa, Sm = new Uint8Array(16);
function Em() {
  if (!Fa && (Fa = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Fa))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Fa(Sm);
}
var Mm = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const ll = {
  randomUUID: Mm
};
function Am(e, t, a) {
  if (ll.randomUUID && !t && !e)
    return ll.randomUUID();
  e = e || {};
  var n = e.random || (e.rng || Em)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Om(n);
}
const Tm = { class: "flex items-center space-x-2" }, Im = ["src"], Vm = ["accept"], zg = /* @__PURE__ */ b({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = "file-upload-" + Am(), s = k(() => r.value ? URL.createObjectURL(r.value) : null), i = a.currentImage ? a.currentImage : a.defaultImage, r = k({
      get: () => a.modelValue,
      set: (c) => n("update:modelValue", c)
    }), d = (c) => {
      r.value = c.target.files[0];
    }, u = () => document.getElementById(o).click();
    return (c, p) => (v(), F("div", Tm, [
      w(c.$slots, "image", {
        newImage: s.value,
        curImage: l(i)
      }, () => [
        oe("img", {
          src: s.value ?? l(i),
          alt: "Image cannot be shown right now",
          class: "size-24 rounded-full dark:bg-slate-700"
        }, null, 8, Im)
      ]),
      oe("input", {
        id: o,
        accept: c.accept,
        hidden: "",
        type: "file",
        onInput: d
      }, null, 40, Vm),
      O(l(qe), {
        variant: "secondary",
        onClick: u
      }, {
        default: f(() => p[0] || (p[0] = [
          Y(" Upload ")
        ])),
        _: 1
      })
    ]));
  }
}), Rm = ["disabled", "placeholder", "required", "type"], Wg = /* @__PURE__ */ b({
  __name: "Input",
  props: /* @__PURE__ */ Dn({
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
    return (a, n) => jt((v(), F("input", {
      "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o),
      disabled: a.disabled,
      placeholder: a.placeholder,
      required: a.required,
      type: a.type,
      class: re(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
        "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
        "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
      }])
    }, null, 10, Rm)), [
      [br, t.value]
    ]);
  }
}), Fm = /* @__PURE__ */ b({
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
    return (s, i) => (v(), y(l(wf), j(G(l(o))), {
      default: f(({ open: r }) => [
        w(s.$slots, "default", { open: r })
      ]),
      _: 3
    }, 16));
  }
}), Lm = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(jf), j(G(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nm = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    open: { type: Boolean }
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(Cf), E(l(n), {
      class: l(z)(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-start text-sm ring-offset-background transition placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        t.class
      )
    }), {
      default: f(() => [
        w(o.$slots, "default"),
        O(l(Hf), { "as-child": "" }, {
          default: f(() => [
            O(l(qs), {
              class: re(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zm = /* @__PURE__ */ b({
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
      const { class: i, ...r } = a;
      return r;
    }), s = le(o, n);
    return (i, r) => (v(), y(l($f), null, {
      default: f(() => [
        O(l(Mf), E({ ...l(s), ...i.$attrs }, {
          class: l(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            i.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: f(() => [
            O(l(jm)),
            O(l(zf), {
              class: re(
                l(z)(
                  "p-1",
                  i.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: f(() => [
                w(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            O(l(Hm))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ug = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Lf), E({
      class: l(z)("w-full p-1", t.class)
    }, a.value), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wm = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Um = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(If), E(l(n), {
      class: l(z)(
        "focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800",
        t.class
      )
    }), {
      default: f(() => [
        oe("span", Wm, [
          O(l(Vf), null, {
            default: f(() => [
              O(l(Oo), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        O(l(Is), null, {
          default: f(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jg = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Is), j(G(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hg = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Nf), {
      class: re(l(z)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Kg = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Af), E(a.value, {
      class: l(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), jm = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(Wf), E(l(n), {
      class: l(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          O(l(lm), { class: "size-4 text-primary-900" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hm = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(Uf), E(l(n), {
      class: l(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          O(l(qs), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gg = /* @__PURE__ */ b({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = k(() => n.placeholder ?? "Select an option..."), s = M(
      n.modelValue ? n.options.find((i) => i === n.modelValue) : null
    );
    return Q(s, () => {
      a("update:modelValue", s.value);
    }), (i, r) => (v(), y(l(Fm), {
      modelValue: s.value,
      "onUpdate:modelValue": r[0] || (r[0] = (d) => s.value = d)
    }, {
      default: f(({ open: d }) => [
        O(l(Nm), { open: d }, {
          default: f(() => [
            O(l(Lm), { placeholder: o.value }, null, 8, ["placeholder"])
          ]),
          _: 2
        }, 1032, ["open"]),
        O(l(zm), null, {
          default: f(() => [
            (v(!0), F(ee, null, he(i.options, (u) => (v(), y(l(Um), { value: u }, {
              default: f(() => [
                Y(Z(u), 1)
              ]),
              _: 2
            }, 1032, ["value"]))), 256))
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
function Qs(e) {
  return Kn() ? (Gn(e), !0) : !1;
}
function cn(e) {
  return typeof e == "function" ? e() : l(e);
}
const Km = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Gm = (e) => typeof e < "u", qm = Object.prototype.toString, Ym = (e) => qm.call(e) === "[object Object]", er = () => {
};
function Zm(e, t) {
  function a(...n) {
    return new Promise((o, s) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(s);
    });
  }
  return a;
}
const tr = (e) => e();
function Xm(e = tr) {
  const t = M(!0);
  function a() {
    t.value = !1;
  }
  function n() {
    t.value = !0;
  }
  const o = (...s) => {
    t.value && e(...s);
  };
  return { isActive: wa(t), pause: a, resume: n, eventFilter: o };
}
function Jm(e) {
  return je();
}
function Qm(...e) {
  if (e.length !== 1)
    return pl(...e);
  const t = e[0];
  return typeof t == "function" ? wa(yl(() => ({ get: t, set: er }))) : M(t);
}
function eh(e, t, a = {}) {
  const {
    eventFilter: n = tr,
    ...o
  } = a;
  return Q(
    e,
    Zm(
      n,
      t
    ),
    o
  );
}
function th(e, t, a = {}) {
  const {
    eventFilter: n,
    ...o
  } = a, { eventFilter: s, pause: i, resume: r, isActive: d } = Xm(n);
  return { stop: eh(
    e,
    t,
    {
      ...o,
      eventFilter: s
    }
  ), pause: i, resume: r, isActive: d };
}
function ar(e, t = !0, a) {
  Jm() ? de(e, a) : t ? e() : ne(e);
}
function nr(e) {
  var t;
  const a = cn(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const Ut = Km ? window : void 0;
function sl(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = Ut) : [t, a, n, o] = e, !t)
    return er;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], i = () => {
    s.forEach((c) => c()), s.length = 0;
  }, r = (c, p, g, m) => (c.addEventListener(p, g, m), () => c.removeEventListener(p, g, m)), d = Q(
    () => [nr(t), cn(o)],
    ([c, p]) => {
      if (i(), !c)
        return;
      const g = Ym(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((x) => r(c, m, x, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), i();
  };
  return Qs(u), u;
}
function ah() {
  const e = M(!1), t = je();
  return t && de(() => {
    e.value = !0;
  }, t), e;
}
function nh(e) {
  const t = ah();
  return k(() => (t.value, !!e()));
}
function oh(e, t = {}) {
  const { window: a = Ut } = t, n = nh(() => a && "matchMedia" in a && typeof a.matchMedia == "function");
  let o;
  const s = M(!1), i = (u) => {
    s.value = u.matches;
  }, r = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", i) : o.removeListener(i));
  }, d = ge(() => {
    n.value && (r(), o = a.matchMedia(cn(e)), "addEventListener" in o ? o.addEventListener("change", i) : o.addListener(i), s.value = o.matches);
  });
  return Qs(() => {
    d(), r(), o = void 0;
  }), s;
}
function lh(e) {
  return JSON.parse(JSON.stringify(e));
}
const La = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Na = "__vueuse_ssr_handlers__", sh = /* @__PURE__ */ rh();
function rh() {
  return Na in La || (La[Na] = La[Na] || {}), La[Na];
}
function or(e, t) {
  return sh[e] || t;
}
function ih(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const dh = {
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
function uh(e, t, a, n = {}) {
  var o;
  const {
    flush: s = "pre",
    deep: i = !0,
    listenToStorageChanges: r = !0,
    writeDefaults: d = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: p = Ut,
    eventFilter: g,
    onError: m = (B) => {
      console.error(B);
    },
    initOnMounted: x
  } = n, h = (c ? Hn : M)(typeof t == "function" ? t() : t);
  if (!a)
    try {
      a = or("getDefaultStorage", () => {
        var B;
        return (B = Ut) == null ? void 0 : B.localStorage;
      })();
    } catch (B) {
      m(B);
    }
  if (!a)
    return h;
  const _ = cn(t), C = ih(_), P = (o = n.serializer) != null ? o : dh[C], { pause: $, resume: D } = th(
    h,
    () => I(h.value),
    { flush: s, deep: i, eventFilter: g }
  );
  p && r && ar(() => {
    sl(p, "storage", W), sl(p, rl, L), x && W();
  }), x || W();
  function S(B, A) {
    p && p.dispatchEvent(new CustomEvent(rl, {
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
        S(A, null), a.removeItem(e);
      else {
        const V = P.write(B);
        A !== V && (a.setItem(e, V), S(A, V));
      }
    } catch (A) {
      m(A);
    }
  }
  function T(B) {
    const A = B ? B.newValue : a.getItem(e);
    if (A == null)
      return d && _ != null && a.setItem(e, P.write(_)), _;
    if (!B && u) {
      const V = P.read(A);
      return typeof u == "function" ? u(V, _) : C === "object" && !Array.isArray(V) ? { ..._, ...V } : V;
    } else return typeof A != "string" ? A : P.read(A);
  }
  function W(B) {
    if (!(B && B.storageArea !== a)) {
      if (B && B.key == null) {
        h.value = _;
        return;
      }
      if (!(B && B.key !== e)) {
        $();
        try {
          (B == null ? void 0 : B.newValue) !== P.write(h.value) && (h.value = T(B));
        } catch (A) {
          m(A);
        } finally {
          B ? ne(D) : D();
        }
      }
    }
  }
  function L(B) {
    W(B.detail);
  }
  return h;
}
function lr(e) {
  return oh("(prefers-color-scheme: dark)", e);
}
function ch(e = {}) {
  const {
    selector: t = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = Ut,
    storage: s,
    storageKey: i = "vueuse-color-scheme",
    listenToStorageChanges: r = !0,
    storageRef: d,
    emitAuto: u,
    disableTransition: c = !0
  } = e, p = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, g = lr({ window: o }), m = k(() => g.value ? "dark" : "light"), x = d || (i == null ? Qm(n) : uh(i, n, s, { window: o, listenToStorageChanges: r })), h = k(() => x.value === "auto" ? m.value : x.value), _ = or(
    "updateHTMLAttrs",
    (D, S, I) => {
      const T = typeof D == "string" ? o == null ? void 0 : o.document.querySelector(D) : nr(D);
      if (!T)
        return;
      let W;
      if (c && (W = o.document.createElement("style"), W.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(W)), S === "class") {
        const L = I.split(/\s/g);
        Object.values(p).flatMap((B) => (B || "").split(/\s/g)).filter(Boolean).forEach((B) => {
          L.includes(B) ? T.classList.add(B) : T.classList.remove(B);
        });
      } else
        T.setAttribute(S, I);
      c && (o.getComputedStyle(W).opacity, document.head.removeChild(W));
    }
  );
  function C(D) {
    var S;
    _(t, a, (S = p[D]) != null ? S : D);
  }
  function P(D) {
    e.onChanged ? e.onChanged(D, C) : C(D);
  }
  Q(h, P, { flush: "post", immediate: !0 }), ar(() => P(h.value));
  const $ = k({
    get() {
      return u ? x.value : h.value;
    },
    set(D) {
      x.value = D;
    }
  });
  try {
    return Object.assign($, { store: x, system: m, state: h });
  } catch {
    return $;
  }
}
function ph(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: a = "",
    window: n = Ut
  } = e, o = ch({
    ...e,
    onChanged: (r, d) => {
      var u;
      e.onChanged ? (u = e.onChanged) == null || u.call(e, r === "dark", d, r) : d(r);
    },
    modes: {
      dark: t,
      light: a
    }
  }), s = k(() => o.system ? o.system.value : lr({ window: n }).value ? "dark" : "light");
  return k({
    get() {
      return o.value === "dark";
    },
    set(r) {
      const d = r ? "dark" : "light";
      s.value === d ? o.value = "auto" : o.value = d;
    }
  });
}
function fh(e, t, a, n = {}) {
  var o, s, i;
  const {
    clone: r = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = je(), x = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((i = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : i.bind(m == null ? void 0 : m.proxy));
  let h = u;
  h = h || `update:${t.toString()}`;
  const _ = ($) => r ? typeof r == "function" ? r($) : lh($) : $, C = () => Gm(e[t]) ? _(e[t]) : p, P = ($) => {
    g ? g($) && x(h, $) : x(h, $);
  };
  if (d) {
    const $ = C(), D = M($);
    let S = !1;
    return Q(
      () => e[t],
      (I) => {
        S || (S = !0, D.value = _(I), ne(() => S = !1));
      }
    ), Q(
      D,
      (I) => {
        !S && (I !== e[t] || c) && P(I);
      },
      { deep: c }
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
const vh = ["placeholder"], qg = /* @__PURE__ */ b({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = fh(e, "modelValue", t, {
      passive: !0
    });
    return (s, i) => jt((v(), F("textarea", {
      "onUpdate:modelValue": i[0] || (i[0] = (r) => ya(o) ? o.value = r : null),
      placeholder: s.placeholder,
      class: re(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
        "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !s.error,
        "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": s.error
      }])
    }, null, 10, vh)), [
      [wr, l(o)]
    ]);
  }
}), mh = /* @__PURE__ */ b({
  __name: "Toggle",
  props: /* @__PURE__ */ Dn({
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
  emits: /* @__PURE__ */ Dn(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const a = t, n = e, o = wl(e, "modelValue");
    Q(o, () => {
      a("update:modelValue", o.value);
    });
    const s = k(() => {
      const { class: r, ...d } = n;
      return d;
    }), i = le(s, a);
    return (r, d) => (v(), y(l(Zf), E({
      checked: o.value,
      "onUpdate:checked": d[0] || (d[0] = (u) => o.value = u)
    }, l(i), {
      class: l(z)(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-600 data-[state=unchecked]:bg-primary-300 dark:focus-visible:ring-primary-300 dark:focus-visible:ring-offset-primary-950 dark:data-[state=checked]:bg-primary-800 dark:data-[state=unchecked]:bg-primary-600",
        n.class
      )
    }), {
      default: f(({ checked: u }) => [
        O(l(Xf), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-primary-950" }, {
          default: f(() => [
            u ? w(r.$slots, "checked", { key: 0 }) : J("", !0),
            u ? J("", !0) : w(r.$slots, "not-checked", { key: 1 })
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["checked", "class"]));
  }
}), hh = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Rp), E(a.value, {
      class: l(z)("flex h-9 w-9 items-center justify-center", t.class)
    }), {
      default: f(() => [
        O(l(Lv), { class: "size-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), gh = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Fp), j(G(a.value)), {
      default: f(() => [
        O(l(qe), {
          href: n.href,
          is: n.is,
          as: n.as,
          class: "size-10 p-0",
          variant: "outline"
        }, {
          default: f(() => [
            O(l(Rv), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["href", "is", "as"])
      ]),
      _: 1
    }, 16));
  }
}), yh = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Lp), j(G(a.value)), {
      default: f(() => [
        O(l(qe), {
          href: n.href,
          is: n.is,
          as: n.as,
          class: "size-10 p-0",
          variant: "outline"
        }, {
          default: f(() => [
            O(l(Fv), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["href", "is", "as"])
      ]),
      _: 1
    }, 16));
  }
}), bh = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Up), j(G(a.value)), {
      default: f(() => [
        O(l(qe), {
          class: re(l(z)("size-10 p-0", t.class)),
          is: n.is,
          as: n.as,
          href: n.href,
          variant: "outline"
        }, {
          default: f(() => [
            O(l(Hs), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["class", "is", "as", "href"])
      ]),
      _: 1
    }, 16));
  }
}), wh = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(jp), j(G(a.value)), {
      default: f(() => [
        O(l(qe), {
          class: re(l(z)("size-10 p-0", t.class)),
          href: n.href,
          is: n.is,
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            O(l(js), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["class", "href", "is", "as"])
      ]),
      _: 1
    }, 16));
  }
}), _h = { class: "my-auto text-slate-400 dark:text-slate-100" }, xh = /* @__PURE__ */ b({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, a) => (v(), F("div", _h, " Showing " + Z(t.min) + " to " + Z(t.max) + " of " + Z(t.total) + " results ", 1));
  }
}), Yg = /* @__PURE__ */ b({
  __name: "DarkModeToggle",
  setup(e) {
    const t = ph({
      selector: "html"
    });
    return (a, n) => (v(), y(mh, {
      modelValue: l(t),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => ya(t) ? t.value = o : null)
    }, {
      checked: f(() => [
        O(l(zv), { class: "m-auto mt-0.5 size-4 text-primary-900" })
      ]),
      "not-checked": f(() => [
        O(l(Wv), { class: "m-auto size-5 text-primary-900" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Zg = /* @__PURE__ */ b({
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
    return (o, s) => (v(), F(ee, null, [
      O(l(ga), {
        onClick: n,
        class: re(t.class)
      }, {
        default: f(() => [
          (v(!0), F(ee, null, he(o.headers, (i) => (v(), y(l(Za), {
            key: i.value
          }, {
            default: f(() => [
              o.$slots[`cell_header_${i.value}`] ? w(o.$slots, `cell_header_${i.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (v(), F(ee, { key: 1 }, [
                Y(Z(o.row[i.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (v(), y(l(jn), { key: 0 }, {
            default: f(() => [
              w(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : J("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (v(!0), F(ee, { key: 0 }, he(o.subRows, (i, r) => (v(), y(l(ga), { key: r }, {
        default: f(() => [
          (v(!0), F(ee, null, he(o.headers, (d) => (v(), y(l(Za), {
            key: d.value
          }, {
            default: f(() => [
              o.$slots[`subrow_cell_${d.value}`] ? w(o.$slots, `subrow_cell_${d.value}`, {
                key: 0,
                item: i,
                open: a.value
              }) : (v(), F(ee, { key: 1 }, [
                Y(Z("subrow_cell_" + d.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (v(), y(l(jn), { key: 0 }, {
            default: f(() => [
              w(o.$slots, "sub_row_actions", {
                item: o.row,
                open: a.value
              })
            ]),
            _: 3
          })) : J("", !0)
        ]),
        _: 2
      }, 1024))), 128)) : J("", !0)
    ], 64));
  }
}), Ch = { class: "relative w-full overflow-auto" }, $h = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", Ch, [
      oe("table", {
        class: re(l(z)("w-full caption-bottom text-sm", t.class))
      }, [
        w(a.$slots, "default")
      ], 2)
    ]));
  }
}), kh = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("tbody", {
      class: re(l(z)("[&_tr:last-child]:border-0", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Za = /* @__PURE__ */ b({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("td", {
      class: re(["p-4 align-middle dark:text-slate-300 [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Bh = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("th", {
      class: re(
        l(z)(
          "h-12 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400 [&:has([role=checkbox])]:pr-0",
          t.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Ph = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("thead", {
      class: re(l(z)("[&_tr]:border-b", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Xg = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("tfoot", {
      class: re(
        l(z)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0",
          t.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), ga = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("tr", {
      class: re(
        l(z)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          t.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), jn = /* @__PURE__ */ b({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("td", {
      class: re(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Dh = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("caption", {
      class: re(l(z)("mt-4 text-sm text-slate-500 dark:text-slate-400", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Oh = { class: "flex items-center justify-center py-10" }, Jg = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(ga, null, {
      default: f(() => [
        O(Za, E({
          class: l(z)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, a.value), {
          default: f(() => [
            oe("div", Oh, [
              w(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Qg = /* @__PURE__ */ b({
  __name: "Datatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, a) => (v(), y(l($h), null, {
      default: f(() => [
        t.caption ? (v(), y(l(Dh), { key: 0 }, {
          default: f(() => [
            Y(Z(t.caption), 1)
          ]),
          _: 1
        })) : J("", !0),
        O(l(Ph), null, {
          default: f(() => [
            O(l(ga), null, {
              default: f(() => [
                (v(!0), F(ee, null, he(t.headers, (n, o) => (v(), y(l(Bh), null, {
                  default: f(() => [
                    t.$slots[`header_${t.headers[o].value}`] ? w(t.$slots, `header_${t.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (v(), F(ee, { key: 1 }, [
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
        O(l(kh), null, {
          default: f(() => [
            w(t.$slots, "default", { item: t.rows }, () => [
              (v(!0), F(ee, null, he(t.rows, (n, o) => (v(), y(l(ga), { key: o }, {
                default: f(() => [
                  (v(!0), F(ee, null, he(t.headers, (s) => (v(), y(l(Za), {
                    key: s.value
                  }, {
                    default: f(() => [
                      t.$slots[`cell_${s.value}`] ? w(t.$slots, `cell_${s.value}`, {
                        key: 0,
                        item: n
                      }) : (v(), F(ee, { key: 1 }, [
                        Y(Z(n[s.value]), 1)
                      ], 64))
                    ]),
                    _: 2
                  }, 1024))), 128)),
                  t.$slots.row_actions ? (v(), y(l(jn), { key: 0 }, {
                    default: f(() => [
                      w(t.$slots, "row_actions", { item: n })
                    ]),
                    _: 2
                  }, 1024)) : J("", !0)
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
}), Sh = /* @__PURE__ */ b({
  __name: "Dropdown",
  props: {
    triggerClass: {},
    widthClass: { default: "w-56" }
  },
  setup(e) {
    return (t, a) => (v(), y(l(Xv), null, {
      default: f(({ open: n }) => [
        O(l(Qv), {
          "as-child": "",
          class: re([t.triggerClass])
        }, {
          default: f(() => [
            w(t.$slots, "trigger", { open: n })
          ]),
          _: 2
        }, 1032, ["class"]),
        O(l(em), {
          class: re([t.widthClass])
        }, {
          default: f(() => [
            w(t.$slots, "content")
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }));
  }
}), Eh = { class: "text-black dark:text-slate-400" }, ey = /* @__PURE__ */ b({
  __name: "Modal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const a = t, n = () => a("close");
    return (o, s) => (v(), y(l(Us), { open: o.open }, {
      default: f(() => [
        O(l(Ev), null, {
          default: f(() => [
            w(o.$slots, "trigger")
          ]),
          _: 3
        }),
        O(l(Gs), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: re("max-w-" + o.size)
        }, {
          default: f(() => [
            O(l(Mv), null, {
              default: f(() => [
                O(l(Av), null, {
                  default: f(() => {
                    var i;
                    return [
                      o.$slots.header ? w(o.$slots, "header", { key: 0 }) : (i = o.headerData) != null && i.title ? (v(), F(ee, { key: 1 }, [
                        Y(Z(o.headerData.title), 1)
                      ], 64)) : J("", !0)
                    ];
                  }),
                  _: 3
                }),
                O(l(Tv), null, {
                  default: f(() => {
                    var i;
                    return [
                      o.$slots.description ? w(o.$slots, "description", { key: 0 }) : (i = o.headerData) != null && i.description ? (v(), F(ee, { key: 1 }, [
                        Y(Z(o.headerData.description), 1)
                      ], 64)) : J("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            oe("div", Eh, [
              o.$slots.content ? w(o.$slots, "content", { key: 0 }) : w(o.$slots, "default", { key: 1 })
            ]),
            O(l(Uv), null, {
              default: f(() => [
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
}), Mh = { class: "justify-between sm:flex" }, ty = /* @__PURE__ */ b({
  __name: "Pagination",
  props: {
    data: {},
    is: { default: "a" },
    as: {}
  },
  setup(e) {
    const t = e, a = () => t.data.current_page === 1 ? t.data.data.length === 0 ? 0 : 1 : t.data.current_page === t.data.last_page ? t.data.total - t.data.data.length : t.data.current_page * t.data.per_page - t.data.per_page, n = () => t.data.current_page === 1 ? t.data.data.length : t.data.current_page === t.data.last_page ? t.data.total : t.data.current_page * t.data.per_page;
    return (o, s) => (v(), F("div", Mh, [
      O(l(xh), {
        min: a(),
        max: n(),
        total: o.data.total
      }, null, 8, ["min", "max", "total"]),
      O(l(Vp), null, {
        default: f(() => [
          O(l(Wp), { class: "flex items-center gap-1" }, {
            default: f(() => [
              O(l(gh), {
                is: o.is,
                as: o.as,
                href: o.data.first_page_url
              }, null, 8, ["is", "as", "href"]),
              o.data.prev_page_url ? (v(), y(l(wh), {
                key: 0,
                is: o.is,
                as: o.as,
                href: o.data.prev_page_url
              }, null, 8, ["is", "as", "href"])) : J("", !0),
              (v(!0), F(ee, null, he(o.data.links, (i, r) => (v(), F(ee, null, [
                r < 5 ? (v(), F("div", { key: r }, [
                  O(l(qe), {
                    href: i.url,
                    is: o.is,
                    as: o.as,
                    class: "size-10 p-0",
                    variant: i.active ? "primary" : "outline"
                  }, {
                    default: f(() => [
                      Y(Z(i.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["href", "is", "as", "variant"])
                ])) : J("", !0)
              ], 64))), 256)),
              o.data.links.length > 5 ? (v(), y(l(hh), { key: 1 })) : J("", !0),
              o.data.next_page_url ? (v(), y(l(bh), {
                key: 2,
                is: o.is,
                as: o.as,
                href: o.data.next_page_url
              }, null, 8, ["is", "as", "href"])) : J("", !0),
              O(l(yh), {
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
    return (s, i) => (v(), y(l(Qf), j(G(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ay = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(av), E(l(n), {
      class: l(z)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        t.class
      )
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Th = /* @__PURE__ */ b({
  __name: "TabsItem",
  props: {
    class: {},
    is: { default: "a" },
    tab: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(We(a.is), {
      href: a.tab.href,
      class: re([
        a.tab.active ? "bg-white text-primary-500 hover:bg-opacity-80 dark:bg-slate-950 dark:text-primary-400" : "hover:bg-white dark:hover:bg-slate-900",
        l(z)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
          t.class
        )
      ])
    }, {
      default: f(() => {
        var o;
        return [
          (o = a.tab) != null && o.icon ? (v(), y(We(a.tab.icon), {
            key: 0,
            class: "size-5"
          })) : J("", !0),
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
    return (n, o) => (v(), y(l(ev), E(a.value, {
      class: l(z)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        t.class
      )
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ny = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(tv), E({
      class: l(z)(
        "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        t.class
      )
    }, a.value), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ih = {}, Vh = { class: "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function Rh(e, t) {
  return v(), F("div", Vh, [
    w(e.$slots, "default")
  ]);
}
const Fh = /* @__PURE__ */ _a(Ih, [["render", Rh]]), oy = /* @__PURE__ */ b({
  __name: "Tabs",
  props: {
    is: { default: "a" },
    tabs: {}
  },
  setup(e) {
    const t = e, a = k(
      () => t.tabs.find((n) => n.active)
    );
    return (n, o) => (v(), y(l(Ah), null, {
      default: f(() => [
        O(l(il), { class: "hidden gap-2 md:block" }, {
          default: f(() => [
            (v(!0), F(ee, null, he(n.tabs, (s) => (v(), y(l(Th), {
              key: s.name,
              is: n.is,
              tab: s
            }, null, 8, ["is", "tab"]))), 128))
          ]),
          _: 1
        }),
        O(l(il), { class: "flex md:hidden" }, {
          default: f(() => [
            O(Sh, { "trigger-class": "size-full" }, {
              trigger: f(() => [
                O(l(qe), { variant: "secondary" }, {
                  default: f(() => {
                    var s;
                    return [
                      Y(Z(((s = a.value) == null ? void 0 : s.name) ?? "Select an option"), 1)
                    ];
                  }),
                  _: 1
                })
              ]),
              content: f(() => [
                (v(!0), F(ee, null, he(n.tabs, (s) => (v(), y(l(tm), {
                  href: s.href,
                  key: s.name
                }, {
                  default: f(() => [
                    Y(Z(s.name), 1)
                  ]),
                  _: 2
                }, 1032, ["href"]))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        O(l(Fh), null, {
          default: f(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Lh = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, ly = /* @__PURE__ */ b({
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
      const { class: i, ...r } = a;
      return r;
    }), s = le(o, n);
    return (i, r) => (v(), y(l(af), E({
      class: l(z)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: u }) => [
        O(l(Kh), null, {
          default: f(() => [
            O(l(Yh)),
            O(l(Gh)),
            O(l(qh))
          ]),
          _: 1
        }),
        oe("div", Lh, [
          (v(!0), F(ee, null, he(d, (c) => (v(), y(l(Wh), {
            key: c.value.toString()
          }, {
            default: f(() => [
              O(l(jh), null, {
                default: f(() => [
                  O(l(dl), null, {
                    default: f(() => [
                      (v(!0), F(ee, null, he(u, (p) => (v(), y(l(Hh), { key: p }, {
                        default: f(() => [
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
              O(l(Uh), null, {
                default: f(() => [
                  (v(!0), F(ee, null, he(c.rows, (p, g) => (v(), y(l(dl), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), F(ee, null, he(p, (m) => (v(), y(l(Nh), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          O(l(zh), {
                            day: m,
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
}), Nh = /* @__PURE__ */ b({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(sf), E({
      class: l(z)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zh = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(vf), E({
      class: l(z)(
        l(St)({ variant: "ghost" }),
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
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wh = /* @__PURE__ */ b({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(lf), E({
      class: l(z)("w-full border-collapse space-y-1", t.class)
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Uh = /* @__PURE__ */ b({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(pf), j(G(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jh = /* @__PURE__ */ b({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(cf), j(G(t)), {
      default: f(() => [
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(ff), E({
      class: l(z)("mt-2 flex w-full", t.class)
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hh = /* @__PURE__ */ b({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(rf), E({
      class: l(z)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kh = /* @__PURE__ */ b({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(nf), E({
      class: l(z)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gh = /* @__PURE__ */ b({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = k(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(of), E({
      class: l(z)("text-sm font-medium", t.class)
    }, l(n)), {
      default: f(({ headingValue: i }) => [
        w(o.$slots, "default", { headingValue: i }, () => [
          Y(Z(i), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qh = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(df), E({
      class: l(z)(
        l(St)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          O(l(Hs), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yh = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = ae(a);
    return (o, s) => (v(), y(l(uf), E({
      class: l(z)(
        l(St)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          O(l(js), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zh = 5, Xh = 5e6, at = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Bn = 0;
function Jh() {
  return Bn = (Bn + 1) % Number.MAX_VALUE, Bn.toString();
}
const Pn = /* @__PURE__ */ new Map();
function ul(e) {
  if (Pn.has(e)) return;
  const t = setTimeout(() => {
    Pn.delete(e), ua({
      type: at.REMOVE_TOAST,
      toastId: e
    });
  }, Xh);
  Pn.set(e, t);
}
const Me = M({
  toasts: []
});
function ua(e) {
  switch (e.type) {
    case at.ADD_TOAST:
      Me.value.toasts = [e.toast, ...Me.value.toasts].slice(0, Zh);
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
function Qh() {
  return {
    toasts: k(() => Me.value.toasts),
    toast: eg,
    dismiss: (e) => ua({ type: at.DISMISS_TOAST, toastId: e })
  };
}
function eg(e) {
  const t = Jh(), a = (o) => ua({
    type: at.UPDATE_TOAST,
    toast: { ...o, id: t }
  }), n = () => ua({ type: at.DISMISS_TOAST, toastId: t });
  return ua({
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
const tg = { class: "flex gap-3" }, ag = { class: "grid gap-1" }, sy = /* @__PURE__ */ b({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = Qh();
    return (a, n) => (v(), y(l(ig), null, {
      default: f(() => [
        (v(!0), F(ee, null, he(l(t), (o) => (v(), y(l(ng), E({
          key: o.id,
          ref_for: !0
        }, o, { class: "my-1" }), {
          default: f(() => [
            oe("div", tg, [
              (v(), y(We(o.icon), {
                class: re(l(z)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              oe("div", ag, [
                o.title ? (v(), y(l(rg), { key: 0 }, {
                  default: f(() => [
                    Y(Z(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : J("", !0),
                o.description ? (v(), F(ee, { key: 1 }, [
                  _r(o.description) ? (v(), y(l(cl), { key: 0 }, {
                    default: f(() => [
                      (v(), y(We(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (v(), y(l(cl), { key: 1 }, {
                    default: f(() => [
                      Y(Z(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : J("", !0),
                O(l(sg))
              ]),
              (v(), y(We(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        O(l(og))
      ]),
      _: 1
    }));
  }
}), ng = /* @__PURE__ */ b({
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
      const { class: i, ...r } = a;
      return r;
    }), s = le(o, n);
    return (i, r) => (v(), y(l(vv), E(l(s), {
      class: l(z)(l(dg)({ variant: i.variant }), a.class),
      "onUpdate:open": i.onOpenChange
    }), {
      default: f(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), og = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(hv), E(a.value, {
      class: l(z)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), ry = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(mv), j(G(a.value)), {
      default: f(() => [
        O(l(qe), {
          variant: n.variant,
          class: re(t.class)
        }, {
          default: f(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["variant", "class"])
      ]),
      _: 3
    }, 16));
  }
});
function lg(e, t) {
  return v(), F("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    oe("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  ]);
}
const sg = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(zs), E(a.value, {
      class: l(z)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: f(() => [
        O(l(lg), { class: "size-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), rg = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(gv), E(a.value, {
      class: l(z)("text-sm font-semibold", t.class)
    }), {
      default: f(() => [
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
    return (n, o) => (v(), y(l(yv), E({
      class: l(z)("text-sm opacity-90", t.class)
    }, a.value), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ig = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(ov), j(G(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dg = Zn(
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
  fg as Badge,
  Ng as Base,
  Jv as BaseDropdownMenuItem,
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
  Rg as Checkbox,
  Zg as CollapsibleTableRow,
  Fg as Combobox,
  Ws as Command,
  _g as CommandDialog,
  jv as CommandEmpty,
  Hv as CommandGroup,
  Gv as CommandInput,
  qv as CommandItem,
  Zv as CommandList,
  xg as CommandSeparator,
  Cg as CommandShortcut,
  pg as Container,
  Yg as DarkModeToggle,
  Qg as Datatable,
  Lg as DatePicker,
  mm as Description,
  Us as Dialog,
  bg as DialogClose,
  Gs as DialogContent,
  Tv as DialogDescription,
  Uv as DialogFooter,
  Mv as DialogHeader,
  wg as DialogScrollContent,
  Av as DialogTitle,
  Ev as DialogTrigger,
  Sh as Dropdown,
  Xv as DropdownMenu,
  Pg as DropdownMenuCheckboxItem,
  em as DropdownMenuContent,
  $g as DropdownMenuGroup,
  Bg as DropdownMenuItem,
  Eg as DropdownMenuLabel,
  tm as DropdownMenuLink,
  Cp as DropdownMenuPortal,
  kg as DropdownMenuRadioGroup,
  Dg as DropdownMenuRadioItem,
  Sg as DropdownMenuSeparator,
  Og as DropdownMenuShortcut,
  Mg as DropdownMenuSub,
  Tg as DropdownMenuSubContent,
  Ag as DropdownMenuSubTrigger,
  Qv as DropdownMenuTrigger,
  gm as Error,
  Ig as Form,
  $m as FormElement,
  Vg as FormGrid,
  zg as ImageUpload,
  Wg as Input,
  Ys as Label,
  ey as Modal,
  ty as Pagination,
  xh as PaginationDetails,
  hh as PaginationEllipsis,
  gh as PaginationFirst,
  yh as PaginationLast,
  Wp as PaginationList,
  yg as PaginationListItem,
  bh as PaginationNext,
  wh as PaginationPrev,
  Vp as PaginationRoot,
  Zs as Popover,
  Js as PopoverContent,
  Xs as PopoverTrigger,
  ly as RangeCalendar,
  Nh as RangeCalendarCell,
  zh as RangeCalendarCellTrigger,
  Wh as RangeCalendarGrid,
  Uh as RangeCalendarGridBody,
  jh as RangeCalendarGridHead,
  dl as RangeCalendarGridRow,
  Hh as RangeCalendarHeadCell,
  Kh as RangeCalendarHeader,
  Gh as RangeCalendarHeading,
  qh as RangeCalendarNextButton,
  Yh as RangeCalendarPrevButton,
  Gg as Select,
  zm as SelectContent,
  Ug as SelectGroup,
  Um as SelectItem,
  jg as SelectItemText,
  Hg as SelectLabel,
  Fm as SelectRoot,
  Hm as SelectScrollDownButton,
  jm as SelectScrollUpButton,
  Kg as SelectSeparator,
  Nm as SelectTrigger,
  Lm as SelectValue,
  Fh as TabBaseContent,
  $h as Table,
  kh as TableBody,
  Dh as TableCaption,
  Za as TableCell,
  Jg as TableEmpty,
  Xg as TableFooter,
  Bh as TableHead,
  Ph as TableHeader,
  ga as TableRow,
  jn as TableRowAction,
  oy as Tabs,
  ny as TabsContent,
  Th as TabsItem,
  il as TabsList,
  Ah as TabsRoot,
  ay as TabsTrigger,
  qg as TextArea,
  ng as Toast,
  ry as ToastAction,
  sg as ToastClose,
  cl as ToastDescription,
  ig as ToastProvider,
  rg as ToastTitle,
  og as ToastViewport,
  sy as Toaster,
  mh as Toggle,
  oi as badgeVariants,
  St as buttonVariants,
  cg as preset,
  eg as toast,
  dg as toastVariants,
  Qh as useToast
};
