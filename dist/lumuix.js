import * as Lo from "vue";
import { openBlock as v, createElementBlock as U, renderSlot as x, defineComponent as w, normalizeClass as re, unref as l, computed as $, ref as A, shallowRef as Yn, watch as ee, getCurrentScope as Xn, onScopeDispose as Zn, shallowReadonly as Tt, getCurrentInstance as He, toRef as wl, camelize as _l, Comment as br, mergeProps as E, cloneVNode as wr, h as We, toRefs as ue, onMounted as ie, createBlock as g, withCtx as f, normalizeProps as K, guardReactiveProps as H, reactive as xl, createVNode as P, createCommentVNode as Q, createElementVNode as de, toDisplayString as X, createTextVNode as Y, withKeys as Ue, withModifiers as _e, Fragment as J, watchEffect as ye, markRaw as _r, nextTick as te, watchSyncEffect as xr, withDirectives as Gt, vShow as Jn, isRef as wa, resolveDynamicComponent as Ie, renderList as he, Teleport as en, onBeforeUnmount as Qn, useSlots as Cr, onBeforeMount as $r, normalizeStyle as qt, effectScope as Cl, toHandlerKey as kr, onUnmounted as bt, vModelSelect as Br, toRaw as Dr, inject as $l, provide as kl, customRef as Bl, readonly as _a, onBeforeUpdate as Pr, onUpdated as Or, mergeDefaults as Dl, watchPostEffect as Sr, mergeModels as An, useModel as Pl, vModelDynamic as Er, vModelText as Mr, isVNode as Ar } from "vue";
const Fy = {
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
}, xa = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, o] of t)
    a[n] = o;
  return a;
}, Tr = {}, Vr = { class: "p-6" };
function Ir(e, t) {
  return v(), U("div", Vr, [
    x(e.$slots, "default")
  ]);
}
const Ly = /* @__PURE__ */ xa(Tr, [["render", Ir]]);
function Ol(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (a = Ol(e[t])) && (n && (n += " "), n += a);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Rr() {
  for (var e, t, a = 0, n = ""; a < arguments.length; ) (e = arguments[a++]) && (t = Ol(e)) && (n && (n += " "), n += t);
  return n;
}
const No = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, zo = Rr, eo = (e, t) => (a) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return zo(e, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: s } = t, r = Object.keys(o).map((u) => {
    const c = a == null ? void 0 : a[u], p = s == null ? void 0 : s[u];
    if (c === null) return null;
    const y = No(c) || No(p);
    return o[u][y];
  }), i = a && Object.entries(a).reduce((u, c) => {
    let [p, y] = c;
    return y === void 0 || (u[p] = y), u;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, c) => {
    let { class: p, className: y, ...m } = c;
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
      ...u,
      p,
      y
    ] : u;
  }, []);
  return zo(e, r, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, to = "-", Fr = (e) => {
  const t = Nr(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (r) => {
      const i = r.split(to);
      return i[0] === "" && i.length !== 1 && i.shift(), Sl(i, t) || Lr(r);
    },
    getConflictingClassGroupIds: (r, i) => {
      const d = a[r] || [];
      return i && n[r] ? [...d, ...n[r]] : d;
    }
  };
}, Sl = (e, t) => {
  var r;
  if (e.length === 0)
    return t.classGroupId;
  const a = e[0], n = t.nextPart.get(a), o = n ? Sl(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(to);
  return (r = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : r.classGroupId;
}, Wo = /^\[(.+)\]$/, Lr = (e) => {
  if (Wo.test(e)) {
    const t = Wo.exec(e)[1], a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Nr = (e) => {
  const {
    theme: t,
    prefix: a
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Wr(Object.entries(e.classGroups), a).forEach(([s, r]) => {
    Tn(r, n, s, t);
  }), n;
}, Tn = (e, t, a, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Uo(t, o);
      s.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (zr(o)) {
        Tn(o(n), t, a, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([s, r]) => {
      Tn(r, Uo(t, s), a, n);
    });
  });
}, Uo = (e, t) => {
  let a = e;
  return t.split(to).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, zr = (e) => e.isThemeGetter, Wr = (e, t) => t ? e.map(([a, n]) => {
  const o = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([r, i]) => [t + r, i])) : s);
  return [a, o];
}) : e, Ur = (e) => {
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
}, El = "!", Kr = (e) => {
  const {
    separator: t,
    experimentalParseClassName: a
  } = e, n = t.length === 1, o = t[0], s = t.length, r = (i) => {
    const d = [];
    let u = 0, c = 0, p;
    for (let _ = 0; _ < i.length; _++) {
      let C = i[_];
      if (u === 0) {
        if (C === o && (n || i.slice(_, _ + s) === t)) {
          d.push(i.slice(c, _)), c = _ + s;
          continue;
        }
        if (C === "/") {
          p = _;
          continue;
        }
      }
      C === "[" ? u++ : C === "]" && u--;
    }
    const y = d.length === 0 ? i : i.substring(c), m = y.startsWith(El), b = m ? y.substring(1) : y, h = p && p > c ? p - c : void 0;
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
}, jr = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let a = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...a.sort(), n), a = []) : a.push(n);
  }), t.push(...a.sort()), t;
}, Hr = (e) => ({
  cache: Ur(e.cacheSize),
  parseClassName: Kr(e),
  ...Fr(e)
}), Gr = /\s+/, qr = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, s = [], r = e.trim().split(Gr);
  let i = "";
  for (let d = r.length - 1; d >= 0; d -= 1) {
    const u = r[d], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: y,
      maybePostfixModifierPosition: m
    } = a(u);
    let b = !!m, h = n(b ? y.substring(0, m) : y);
    if (!h) {
      if (!b) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (h = n(y), !h) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      b = !1;
    }
    const _ = jr(c).join(":"), C = p ? _ + El : _, D = C + h;
    if (s.includes(D))
      continue;
    s.push(D);
    const k = o(h, b);
    for (let O = 0; O < k.length; ++O) {
      const S = k[O];
      s.push(C + S);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Yr() {
  let e = 0, t, a, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (a = Ml(t)) && (n && (n += " "), n += a);
  return n;
}
const Ml = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ml(e[n])) && (a && (a += " "), a += t);
  return a;
};
function Xr(e, ...t) {
  let a, n, o, s = r;
  function r(d) {
    const u = t.reduce((c, p) => p(c), e());
    return a = Hr(u), n = a.cache.get, o = a.cache.set, s = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = qr(d, a);
    return o(d, c), c;
  }
  return function() {
    return s(Yr.apply(null, arguments));
  };
}
const fe = (e) => {
  const t = (a) => a[e] || [];
  return t.isThemeGetter = !0, t;
}, Al = /^\[(?:([a-z-]+):)?(.+)\]$/i, Zr = /^\d+\/\d+$/, Jr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Qr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ei = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ti = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ai = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ni = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Je = (e) => Rt(e) || Jr.has(e) || Zr.test(e), ct = (e) => Yt(e, "length", ci), Rt = (e) => !!e && !Number.isNaN(Number(e)), yn = (e) => Yt(e, "number", Rt), ia = (e) => !!e && Number.isInteger(Number(e)), oi = (e) => e.endsWith("%") && Rt(e.slice(0, -1)), Z = (e) => Al.test(e), pt = (e) => Qr.test(e), li = /* @__PURE__ */ new Set(["length", "size", "percentage"]), si = (e) => Yt(e, li, Tl), ri = (e) => Yt(e, "position", Tl), ii = /* @__PURE__ */ new Set(["image", "url"]), di = (e) => Yt(e, ii, fi), ui = (e) => Yt(e, "", pi), da = () => !0, Yt = (e, t, a) => {
  const n = Al.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : a(n[2]) : !1;
}, ci = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ei.test(e) && !ti.test(e)
), Tl = () => !1, pi = (e) => ai.test(e), fi = (e) => ni.test(e), vi = () => {
  const e = fe("colors"), t = fe("spacing"), a = fe("blur"), n = fe("brightness"), o = fe("borderColor"), s = fe("borderRadius"), r = fe("borderSpacing"), i = fe("borderWidth"), d = fe("contrast"), u = fe("grayscale"), c = fe("hueRotate"), p = fe("invert"), y = fe("gap"), m = fe("gradientColorStops"), b = fe("gradientColorStopPositions"), h = fe("inset"), _ = fe("margin"), C = fe("opacity"), D = fe("padding"), k = fe("saturate"), O = fe("scale"), S = fe("sepia"), V = fe("skew"), M = fe("space"), F = fe("translate"), R = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", Z, t], I = () => [Z, t], G = () => ["", Je, ct], j = () => ["auto", Rt, Z], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], q = () => ["solid", "dashed", "dotted", "double", "none"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ce = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], me = () => ["", "0", Z], ke = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ge = () => [Rt, Z];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [da],
      spacing: [Je, ct],
      blur: ["none", "", pt, Z],
      brightness: ge(),
      borderColor: [e],
      borderRadius: ["none", "", "full", pt, Z],
      borderSpacing: I(),
      borderWidth: G(),
      contrast: ge(),
      grayscale: me(),
      hueRotate: ge(),
      invert: me(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [oi, ct],
      inset: T(),
      margin: T(),
      opacity: ge(),
      padding: I(),
      saturate: ge(),
      scale: ge(),
      sepia: me(),
      skew: ge(),
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
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        z: ["auto", ia, Z]
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
        order: ["first", "last", "none", ia, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [da]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ia, Z]
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
        "grid-rows": [da]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ia, Z]
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
        gap: [y]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [y]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [y]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", yn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [da]
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
        "line-clamp": ["none", Rt, yn]
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
        indent: I()
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
        bg: [...W(), ri]
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
        bg: ["auto", "cover", "contain", si]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, di]
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
        shadow: ["", "inner", "none", pt, ui]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [da]
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
        "drop-shadow": ["", "none", pt, Z]
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
        saturate: [k]
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
        "backdrop-saturate": [k]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Z]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ge()
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
        delay: ge()
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
        rotate: [ia, Z]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [F]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [F]
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
        stroke: [Je, ct, yn]
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
}, mi = /* @__PURE__ */ Xr(vi);
function z(...e) {
  return mi(e);
}
const Ny = /* @__PURE__ */ w({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("div", {
      class: re(l(z)(l(hi)({ variant: a.variant }), t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), hi = eo(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-slate-800 text-slate-50",
        primary: "border-transparent bg-primary-600 text-primary-50",
        secondary: "border-transparent bg-secondary-600 text-secondary-50",
        destructive: "border-transparent bg-destructive-600 text-destructive-50",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function gn(e, t) {
  return e - t * Math.floor(e / t);
}
const Vl = 1721426;
function Ea(e, t, a, n) {
  t = ao(e, t);
  let o = t - 1, s = -2;
  return a <= 2 ? s = 0 : Ua(t) && (s = -1), Vl - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + s + n);
}
function Ua(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function ao(e, t) {
  return e === "BC" ? 1 - t : t;
}
function yi(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const gi = {
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
class Lt {
  fromJulianDay(t) {
    let a = t, n = a - Vl, o = Math.floor(n / 146097), s = gn(n, 146097), r = Math.floor(s / 36524), i = gn(s, 36524), d = Math.floor(i / 1461), u = gn(i, 1461), c = Math.floor(u / 365), p = o * 400 + r * 100 + d * 4 + c + (r !== 4 && c !== 4 ? 1 : 0), [y, m] = yi(p), b = a - Ea(y, m, 1, 1), h = 2;
    a < Ea(y, m, 3, 1) ? h = 0 : Ua(m) && (h = 1);
    let _ = Math.floor(((b + h) * 12 + 373) / 367), C = a - Ea(y, m, _, 1) + 1;
    return new Wt(y, m, _, C);
  }
  toJulianDay(t) {
    return Ea(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return gi[Ua(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return Ua(t.year) ? 366 : 365;
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
const bi = {
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
  return t = Se(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Il(e, t) {
  return t = Se(t, e.calendar), e = fa(e), t = fa(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function ze(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Ko(e, t) {
  return e = fa(e), t = fa(t), e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month;
}
function Rl(e, t) {
  return we(e, Ll(t));
}
function Fl(e, t) {
  let a = e.calendar.toJulianDay(e), n = Math.ceil(a + 1 - Ci(t)) % 7;
  return n < 0 && (n += 7), n;
}
function wi(e) {
  return at(Date.now(), e);
}
function Ll(e) {
  return Bi(wi(e));
}
function Nl(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function _i(e, t) {
  return jo(e) - jo(t);
}
function jo(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let bn = null;
function Bt() {
  return bn == null && (bn = new Intl.DateTimeFormat().resolvedOptions().timeZone), bn;
}
function fa(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function Ho(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const Go = /* @__PURE__ */ new Map();
function xi(e) {
  if (Intl.Locale) {
    let a = Go.get(e);
    return a || (a = new Intl.Locale(e).maximize().region, a && Go.set(e, a)), a;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function Ci(e) {
  let t = xi(e);
  return t && bi[t] || 0;
}
function Nt(e) {
  e = Se(e, new Lt());
  let t = ao(e.era, e.year);
  return zl(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function zl(e, t, a, n, o, s, r) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, s, r), i.setUTCFullYear(e, t - 1, a), i.getTime();
}
function Vn(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === Bt()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: s, minute: r, second: i } = Wl(e, t);
  return zl(a, n, o, s, r, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const qo = /* @__PURE__ */ new Map();
function Wl(e, t) {
  let a = qo.get(t);
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
  }), qo.set(t, a));
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
const Yo = 864e5;
function $i(e, t, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((s) => ki(e, t, s));
}
function ki(e, t, a) {
  let n = Wl(a, t);
  return e.year === n.year && e.month === n.month && e.day === n.day && e.hour === n.hour && e.minute === n.minute && e.second === n.second;
}
function tt(e, t, a = "compatible") {
  let n = zt(e);
  if (t === "UTC") return Nt(n);
  if (t === Bt() && a === "compatible") {
    n = Se(n, new Lt());
    let d = /* @__PURE__ */ new Date(), u = ao(n.era, n.year);
    return d.setFullYear(u, n.month - 1, n.day), d.setHours(n.hour, n.minute, n.second, n.millisecond), d.getTime();
  }
  let o = Nt(n), s = Vn(o - Yo, t), r = Vn(o + Yo, t), i = $i(n, t, o - s, o - r);
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
function Ul(e, t, a = "compatible") {
  return new Date(tt(e, t, a));
}
function at(e, t) {
  let a = Vn(e, t), n = new Date(e + a), o = n.getUTCFullYear(), s = n.getUTCMonth() + 1, r = n.getUTCDate(), i = n.getUTCHours(), d = n.getUTCMinutes(), u = n.getUTCSeconds(), c = n.getUTCMilliseconds();
  return new Kt(o, s, r, t, a, i, d, u, c);
}
function Bi(e) {
  return new Wt(e.calendar, e.era, e.year, e.month, e.day);
}
function zt(e, t) {
  let a = 0, n = 0, o = 0, s = 0;
  if ("timeZone" in e) ({ hour: a, minute: n, second: o, millisecond: s } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: a, minute: n, second: o, millisecond: s } = t), new Ut(e.calendar, e.era, e.year, e.month, e.day, a, n, o, s);
}
function Se(e, t) {
  if (e.calendar.identifier === t.identifier) return e;
  let a = t.fromJulianDay(e.calendar.toJulianDay(e)), n = e.copy();
  return n.calendar = t, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, $t(n), n;
}
function Di(e, t, a) {
  if (e instanceof Kt)
    return e.timeZone === t ? e : Oi(e, t);
  let n = tt(e, t, a);
  return at(n, t);
}
function Pi(e) {
  let t = Nt(e) - e.offset;
  return new Date(t);
}
function Oi(e, t) {
  let a = Nt(e) - e.offset;
  return Se(at(a, t), e.calendar);
}
const ua = 36e5;
function tn(e, t) {
  let a = e.copy(), n = "hour" in a ? Ai(a, t) : 0;
  In(a, t.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e), a.month += t.months || 0, Rn(a), Kl(a), a.day += (t.weeks || 0) * 7, a.day += t.days || 0, a.day += n, Si(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
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
function In(e, t) {
  var a, n;
  !((a = (n = e.calendar).isInverseEra) === null || a === void 0) && a.call(n, e) && (t = -t), e.year += t;
}
function Rn(e) {
  for (; e.month < 1; )
    In(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, In(e, 1);
}
function Si(e) {
  for (; e.day < 1; )
    e.month--, Rn(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, Rn(e);
}
function Kl(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function $t(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Kl(e);
}
function jl(e) {
  let t = {};
  for (let a in e) typeof e[a] == "number" && (t[a] = -e[a]);
  return t;
}
function Hl(e, t) {
  return tn(e, jl(t));
}
function no(e, t) {
  let a = e.copy();
  return t.era != null && (a.era = t.era), t.year != null && (a.year = t.year), t.month != null && (a.month = t.month), t.day != null && (a.day = t.day), $t(a), a;
}
function ja(e, t) {
  let a = e.copy();
  return t.hour != null && (a.hour = t.hour), t.minute != null && (a.minute = t.minute), t.second != null && (a.second = t.second), t.millisecond != null && (a.millisecond = t.millisecond), Mi(a), a;
}
function Ei(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Ma(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Ma(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Ma(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = Ma(e.hour, 24), t;
}
function Mi(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Ma(e, t) {
  let a = e % t;
  return a < 0 && (a += t), a;
}
function Ai(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, Ei(e);
}
function oo(e, t, a, n) {
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
function Gl(e, t, a, n) {
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
function ql(e, t) {
  let a;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let o = tn(zt(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    a = tt(o, e.timeZone);
  } else
    a = Nt(e) - e.offset;
  a += t.milliseconds || 0, a += (t.seconds || 0) * 1e3, a += (t.minutes || 0) * 6e4, a += (t.hours || 0) * 36e5;
  let n = at(a, e.timeZone);
  return Se(n, e.calendar);
}
function Ti(e, t) {
  return ql(e, jl(t));
}
function Vi(e, t, a, n) {
  switch (t) {
    case "hour": {
      let o = 0, s = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let b = e.hour >= 12;
        o = b ? 12 : 0, s = b ? 23 : 11;
      }
      let r = zt(e), i = Se(ja(r, {
        hour: o
      }), new Lt()), d = [
        tt(i, e.timeZone, "earlier"),
        tt(i, e.timeZone, "later")
      ].filter((b) => at(b, e.timeZone).day === i.day)[0], u = Se(ja(r, {
        hour: s
      }), new Lt()), c = [
        tt(u, e.timeZone, "earlier"),
        tt(u, e.timeZone, "later")
      ].filter((b) => at(b, e.timeZone).day === u.day).pop(), p = Nt(e) - e.offset, y = Math.floor(p / ua), m = p % ua;
      return p = nt(y, a, Math.floor(d / ua), Math.floor(c / ua), n == null ? void 0 : n.round) * ua + m, Se(at(p, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return Gl(e, t, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = oo(zt(e), t, a, n), s = tt(o, e.timeZone);
      return Se(at(s, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function Ii(e, t, a) {
  let n = zt(e), o = ja(no(n, t), t);
  if (o.compare(n) === 0) return e;
  let s = tt(o, e.timeZone, a);
  return Se(at(s, e.timeZone), e.calendar);
}
function Ri(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function Yl(e) {
  let t = Se(e, new Lt());
  return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function Xl(e) {
  return `${Yl(e)}T${Ri(e)}`;
}
function Fi(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let a = Math.floor(e / 36e5), n = e % 36e5 / 6e4;
  return `${t}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function Li(e) {
  return `${Xl(e)}${Fi(e.offset)}[${e.timeZone}]`;
}
function Ni(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function lo(e, t, a) {
  Ni(e, t), t.set(e, a);
}
function so(e) {
  let t = typeof e[0] == "object" ? e.shift() : new Lt(), a;
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
var zi = /* @__PURE__ */ new WeakMap();
class Wt {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Wt(this.calendar, this.era, this.year, this.month, this.day) : new Wt(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return tn(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return Hl(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return no(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return oo(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return Ul(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Yl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return Nl(this, t);
  }
  constructor(...t) {
    lo(this, zi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = so(t);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, $t(this);
  }
}
var Wi = /* @__PURE__ */ new WeakMap();
class Ut {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ut(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new Ut(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return tn(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return Hl(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return no(ja(this, t), t);
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
        return oo(this, t, a, n);
      default:
        return Gl(this, t, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, a) {
    return Ul(this, t, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Xl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let a = Nl(this, t);
    return a === 0 ? _i(this, zt(t)) : a;
  }
  constructor(...t) {
    lo(this, Wi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = so(t);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, $t(this);
  }
}
var Ui = /* @__PURE__ */ new WeakMap();
class Kt {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Kt(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new Kt(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return ql(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return Ti(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, a) {
    return Ii(this, t, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return Vi(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return Pi(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return Li(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - Di(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    lo(this, Ui, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = so(t), i = t.shift(), d = t.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.timeZone = i, this.offset = d, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, $t(this);
  }
}
let wn = /* @__PURE__ */ new Map();
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
    return Hi() && (this.resolvedHourCycle || (this.resolvedHourCycle = Gi(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, a = {}) {
    this.formatter = Zl(t, a), this.options = a;
  }
}
const Ki = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function Zl(e, t = {}) {
  if (typeof t.hour12 == "boolean" && ji()) {
    t = {
      ...t
    };
    let o = Ki[String(t.hour12)][e.split("-")[0]], s = t.hour12 ? "h12" : "h23";
    t.hourCycle = o ?? s, delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((o, s) => o[0] < s[0] ? -1 : 1).join() : "");
  if (wn.has(a)) return wn.get(a);
  let n = new Intl.DateTimeFormat(e, t);
  return wn.set(a, n), n;
}
let _n = null;
function ji() {
  return _n == null && (_n = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), _n;
}
let xn = null;
function Hi() {
  return xn == null && (xn = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), xn;
}
function Gi(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = Zl(e, {
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
function qi(e, t) {
  const a = [];
  for (let n = 0; n < e.length; n += t)
    a.push(e.slice(n, n + t));
  return a;
}
function Ve(e, t = Bt()) {
  return ro(e) ? e.toDate() : e.toDate(t);
}
function Yi(e) {
  return e instanceof Ut;
}
function ro(e) {
  return e instanceof Kt;
}
function Xi(e) {
  return Yi(e) || ro(e);
}
function va(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), a = e.getMonth() + 1;
    return new Date(t, a, 0).getDate();
  } else
    return e.set({ day: 100 }).day;
}
function mt(e, t) {
  return e.compare(t) < 0;
}
function ca(e, t) {
  return e.compare(t) > 0;
}
function Zi(e, t) {
  return e.compare(t) <= 0;
}
function Ji(e, t) {
  return e.compare(t) >= 0;
}
function Qi(e, t, a) {
  return Ji(e, t) && Zi(e, a);
}
function ed(e, t, a) {
  return ca(e, t) && mt(e, a);
}
function td(e, t, a) {
  const n = Fl(e, a);
  return t > n ? e.subtract({ days: n + 7 - t }) : t === n ? e : e.subtract({ days: n - t });
}
function ad(e, t, a) {
  const n = Fl(e, a), o = t === 0 ? 6 : t - 1;
  return n === o ? e : n > o ? e.add({ days: 7 - n + o }) : e.add({ days: o - n });
}
function nd(e, t, a, n) {
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
function Xo(e, t) {
  const a = [];
  let n = e.add({ days: 1 });
  const o = t;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function Cn(e) {
  const { dateObj: t, weekStartsOn: a, fixedWeeks: n, locale: o } = e, s = va(t), r = Array.from({ length: s }, (_, C) => t.set({ day: C + 1 })), i = fa(t), d = Ho(t), u = td(i, a, o), c = ad(d, a, o), p = Xo(u.subtract({ days: 1 }), i), y = Xo(d, c.add({ days: 1 })), m = p.length + r.length + y.length;
  if (n && m < 42) {
    const _ = 42 - m;
    let C = y[y.length - 1];
    C || (C = Ho(t));
    const D = Array.from({ length: _ }, (k, O) => {
      const S = O + 1;
      return C.add({ days: S });
    });
    y.push(...D);
  }
  const b = p.concat(r, y), h = qi(b, 7);
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
      Cn({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    Cn({
      ...n,
      dateObj: a
    })
  );
  for (let s = 1; s < t; s++) {
    const r = a.add({ months: s });
    o.push(
      Cn({
        ...n,
        dateObj: r
      })
    );
  }
  return o;
}
const od = ["top", "right", "bottom", "left"], ht = Math.min, De = Math.max, Ha = Math.round, Aa = Math.floor, Ke = (e) => ({
  x: e,
  y: e
}), ld = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, sd = {
  start: "end",
  end: "start"
};
function Fn(e, t, a) {
  return De(e, ht(t, a));
}
function st(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rt(e) {
  return e.split("-")[0];
}
function Xt(e) {
  return e.split("-")[1];
}
function io(e) {
  return e === "x" ? "y" : "x";
}
function uo(e) {
  return e === "y" ? "height" : "width";
}
function yt(e) {
  return ["top", "bottom"].includes(rt(e)) ? "y" : "x";
}
function co(e) {
  return io(yt(e));
}
function rd(e, t, a) {
  a === void 0 && (a = !1);
  const n = Xt(e), o = co(e), s = uo(o);
  let r = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (r = Ga(r)), [r, Ga(r)];
}
function id(e) {
  const t = Ga(e);
  return [Ln(e), t, Ln(t)];
}
function Ln(e) {
  return e.replace(/start|end/g, (t) => sd[t]);
}
function dd(e, t, a) {
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
function ud(e, t, a, n) {
  const o = Xt(e);
  let s = dd(rt(e), a === "start", n);
  return o && (s = s.map((r) => r + "-" + o), t && (s = s.concat(s.map(Ln)))), s;
}
function Ga(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ld[t]);
}
function cd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Jl(e) {
  return typeof e != "number" ? cd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function qa(e) {
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
function Zo(e, t, a) {
  let {
    reference: n,
    floating: o
  } = e;
  const s = yt(t), r = co(t), i = uo(r), d = rt(t), u = s === "y", c = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, y = n[i] / 2 - o[i] / 2;
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
  switch (Xt(t)) {
    case "start":
      m[r] -= y * (a && u ? -1 : 1);
      break;
    case "end":
      m[r] += y * (a && u ? -1 : 1);
      break;
  }
  return m;
}
const pd = async (e, t, a) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: r
  } = a, i = s.filter(Boolean), d = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let u = await r.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: p
  } = Zo(u, n, d), y = n, m = {}, b = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: _,
      fn: C
    } = i[h], {
      x: D,
      y: k,
      data: O,
      reset: S
    } = await C({
      x: c,
      y: p,
      initialPlacement: n,
      placement: y,
      strategy: o,
      middlewareData: m,
      rects: u,
      platform: r,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = D ?? c, p = k ?? p, m = {
      ...m,
      [_]: {
        ...m[_],
        ...O
      }
    }, S && b <= 50 && (b++, typeof S == "object" && (S.placement && (y = S.placement), S.rects && (u = S.rects === !0 ? await r.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: c,
      y: p
    } = Zo(u, y, d)), h = -1);
  }
  return {
    x: c,
    y: p,
    placement: y,
    strategy: o,
    middlewareData: m
  };
};
async function ma(e, t) {
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
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: y = !1,
    padding: m = 0
  } = st(t, e), b = Jl(m), _ = i[y ? p === "floating" ? "reference" : "floating" : p], C = qa(await s.getClippingRect({
    element: (a = await (s.isElement == null ? void 0 : s.isElement(_))) == null || a ? _ : _.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: c,
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
  }, S = qa(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: D,
    offsetParent: k,
    strategy: d
  }) : D);
  return {
    top: (C.top - S.top + b.top) / O.y,
    bottom: (S.bottom - C.bottom + b.bottom) / O.y,
    left: (C.left - S.left + b.left) / O.x,
    right: (S.right - C.right + b.right) / O.x
  };
}
const fd = (e) => ({
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
      element: u,
      padding: c = 0
    } = st(e, t) || {};
    if (u == null)
      return {};
    const p = Jl(c), y = {
      x: a,
      y: n
    }, m = co(o), b = uo(m), h = await r.getDimensions(u), _ = m === "y", C = _ ? "top" : "left", D = _ ? "bottom" : "right", k = _ ? "clientHeight" : "clientWidth", O = s.reference[b] + s.reference[m] - y[m] - s.floating[b], S = y[m] - s.reference[m], V = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(u));
    let M = V ? V[k] : 0;
    (!M || !await (r.isElement == null ? void 0 : r.isElement(V))) && (M = i.floating[k] || s.floating[b]);
    const F = O / 2 - S / 2, R = M / 2 - h[b] / 2 - 1, B = ht(p[C], R), T = ht(p[D], R), I = B, G = M - h[b] - T, j = M / 2 - h[b] / 2 + F, W = Fn(I, j, G), q = !d.arrow && Xt(o) != null && j !== W && s.reference[b] / 2 - (j < I ? B : T) - h[b] / 2 < 0, ae = q ? j < I ? j - I : j - G : 0;
    return {
      [m]: y[m] + ae,
      data: {
        [m]: W,
        centerOffset: j - W - ae,
        ...q && {
          alignmentOffset: ae
        }
      },
      reset: q
    };
  }
}), vd = function(e) {
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
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: y,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: h = !0,
        ..._
      } = st(e, t);
      if ((a = s.arrow) != null && a.alignmentOffset)
        return {};
      const C = rt(o), D = yt(i), k = rt(i) === i, O = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), S = y || (k || !h ? [Ga(i)] : id(i)), V = b !== "none";
      !y && V && S.push(...ud(i, h, b, O));
      const M = [i, ...S], F = await ma(t, _), R = [];
      let B = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (c && R.push(F[C]), p) {
        const j = rd(o, r, O);
        R.push(F[j[0]], F[j[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: R
      }], !R.every((j) => j <= 0)) {
        var T, I;
        const j = (((T = s.flip) == null ? void 0 : T.index) || 0) + 1, W = M[j];
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
        let q = (I = B.filter((ae) => ae.overflows[0] <= 0).sort((ae, ce) => ae.overflows[1] - ce.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!q)
          switch (m) {
            case "bestFit": {
              var G;
              const ae = (G = B.filter((ce) => {
                if (V) {
                  const me = yt(ce.placement);
                  return me === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  me === "y";
                }
                return !0;
              }).map((ce) => [ce.placement, ce.overflows.filter((me) => me > 0).reduce((me, ke) => me + ke, 0)]).sort((ce, me) => ce[1] - me[1])[0]) == null ? void 0 : G[0];
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
function Jo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Qo(e) {
  return od.some((t) => e[t] >= 0);
}
const md = function(e) {
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
          const s = await ma(t, {
            ...o,
            elementContext: "reference"
          }), r = Jo(s, a.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: Qo(r)
            }
          };
        }
        case "escaped": {
          const s = await ma(t, {
            ...o,
            altBoundary: !0
          }), r = Jo(s, a.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: Qo(r)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function hd(e, t) {
  const {
    placement: a,
    platform: n,
    elements: o
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), r = rt(a), i = Xt(a), d = yt(a) === "y", u = ["left", "top"].includes(r) ? -1 : 1, c = s && d ? -1 : 1, p = st(t, e);
  let {
    mainAxis: y,
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
    x: m * c,
    y: y * u
  } : {
    x: y * u,
    y: m * c
  };
}
const yd = function(e) {
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
      } = t, d = await hd(t, e);
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
}, gd = function(e) {
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
      } = st(e, t), u = {
        x: a,
        y: n
      }, c = await ma(t, d), p = yt(rt(o)), y = io(p);
      let m = u[y], b = u[p];
      if (s) {
        const _ = y === "y" ? "top" : "left", C = y === "y" ? "bottom" : "right", D = m + c[_], k = m - c[C];
        m = Fn(D, m, k);
      }
      if (r) {
        const _ = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", D = b + c[_], k = b - c[C];
        b = Fn(D, b, k);
      }
      const h = i.fn({
        ...t,
        [y]: m,
        [p]: b
      });
      return {
        ...h,
        data: {
          x: h.x - a,
          y: h.y - n,
          enabled: {
            [y]: s,
            [p]: r
          }
        }
      };
    }
  };
}, bd = function(e) {
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
        crossAxis: u = !0
      } = st(e, t), c = {
        x: a,
        y: n
      }, p = yt(o), y = io(p);
      let m = c[y], b = c[p];
      const h = st(i, t), _ = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (d) {
        const k = y === "y" ? "height" : "width", O = s.reference[y] - s.floating[k] + _.mainAxis, S = s.reference[y] + s.reference[k] - _.mainAxis;
        m < O ? m = O : m > S && (m = S);
      }
      if (u) {
        var C, D;
        const k = y === "y" ? "width" : "height", O = ["top", "left"].includes(rt(o)), S = s.reference[p] - s.floating[k] + (O && ((C = r.offset) == null ? void 0 : C[p]) || 0) + (O ? 0 : _.crossAxis), V = s.reference[p] + s.reference[k] + (O ? 0 : ((D = r.offset) == null ? void 0 : D[p]) || 0) - (O ? _.crossAxis : 0);
        b < S ? b = S : b > V && (b = V);
      }
      return {
        [y]: m,
        [p]: b
      };
    }
  };
}, wd = function(e) {
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
        ...u
      } = st(e, t), c = await ma(t, u), p = rt(o), y = Xt(o), m = yt(o) === "y", {
        width: b,
        height: h
      } = s.floating;
      let _, C;
      p === "top" || p === "bottom" ? (_ = p, C = y === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, _ = y === "end" ? "top" : "bottom");
      const D = h - c.top - c.bottom, k = b - c.left - c.right, O = ht(h - c[_], D), S = ht(b - c[C], k), V = !t.middlewareData.shift;
      let M = O, F = S;
      if ((a = t.middlewareData.shift) != null && a.enabled.x && (F = k), (n = t.middlewareData.shift) != null && n.enabled.y && (M = D), V && !y) {
        const B = De(c.left, 0), T = De(c.right, 0), I = De(c.top, 0), G = De(c.bottom, 0);
        m ? F = b - 2 * (B !== 0 || T !== 0 ? B + T : De(c.left, c.right)) : M = h - 2 * (I !== 0 || G !== 0 ? I + G : De(c.top, c.bottom));
      }
      await d({
        ...t,
        availableWidth: F,
        availableHeight: M
      });
      const R = await r.getDimensions(i.floating);
      return b !== R.width || h !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function an() {
  return typeof window < "u";
}
function Dt(e) {
  return po(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ge(e) {
  var t;
  return (t = (po(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function po(e) {
  return an() ? e instanceof Node || e instanceof Pe(e).Node : !1;
}
function Re(e) {
  return an() ? e instanceof Element || e instanceof Pe(e).Element : !1;
}
function je(e) {
  return an() ? e instanceof HTMLElement || e instanceof Pe(e).HTMLElement : !1;
}
function el(e) {
  return !an() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Pe(e).ShadowRoot;
}
function Ca(e) {
  const {
    overflow: t,
    overflowX: a,
    overflowY: n,
    display: o
  } = Fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + a) && !["inline", "contents"].includes(o);
}
function _d(e) {
  return ["table", "td", "th"].includes(Dt(e));
}
function nn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function fo(e) {
  const t = vo(), a = Re(e) ? Fe(e) : e;
  return a.transform !== "none" || a.perspective !== "none" || (a.containerType ? a.containerType !== "normal" : !1) || !t && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !t && (a.filter ? a.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function xd(e) {
  let t = gt(e);
  for (; je(t) && !jt(t); ) {
    if (fo(t))
      return t;
    if (nn(t))
      return null;
    t = gt(t);
  }
  return null;
}
function vo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function jt(e) {
  return ["html", "body", "#document"].includes(Dt(e));
}
function Fe(e) {
  return Pe(e).getComputedStyle(e);
}
function on(e) {
  return Re(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function gt(e) {
  if (Dt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    el(e) && e.host || // Fallback.
    Ge(e)
  );
  return el(t) ? t.host : t;
}
function Ql(e) {
  const t = gt(e);
  return jt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : je(t) && Ca(t) ? t : Ql(t);
}
function ha(e, t, a) {
  var n;
  t === void 0 && (t = []), a === void 0 && (a = !0);
  const o = Ql(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Pe(o);
  if (s) {
    const i = Nn(r);
    return t.concat(r, r.visualViewport || [], Ca(o) ? o : [], i && a ? ha(i) : []);
  }
  return t.concat(o, ha(o, [], a));
}
function Nn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function es(e) {
  const t = Fe(e);
  let a = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = je(e), s = o ? e.offsetWidth : a, r = o ? e.offsetHeight : n, i = Ha(a) !== s || Ha(n) !== r;
  return i && (a = s, n = r), {
    width: a,
    height: n,
    $: i
  };
}
function mo(e) {
  return Re(e) ? e : e.contextElement;
}
function Ft(e) {
  const t = mo(e);
  if (!je(t))
    return Ke(1);
  const a = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = es(t);
  let r = (s ? Ha(a.width) : a.width) / n, i = (s ? Ha(a.height) : a.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: r,
    y: i
  };
}
const Cd = /* @__PURE__ */ Ke(0);
function ts(e) {
  const t = Pe(e);
  return !vo() || !t.visualViewport ? Cd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function $d(e, t, a) {
  return t === void 0 && (t = !1), !a || t && a !== Pe(e) ? !1 : t;
}
function kt(e, t, a, n) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const o = e.getBoundingClientRect(), s = mo(e);
  let r = Ke(1);
  t && (n ? Re(n) && (r = Ft(n)) : r = Ft(e));
  const i = $d(s, a, n) ? ts(s) : Ke(0);
  let d = (o.left + i.x) / r.x, u = (o.top + i.y) / r.y, c = o.width / r.x, p = o.height / r.y;
  if (s) {
    const y = Pe(s), m = n && Re(n) ? Pe(n) : n;
    let b = y, h = Nn(b);
    for (; h && n && m !== b; ) {
      const _ = Ft(h), C = h.getBoundingClientRect(), D = Fe(h), k = C.left + (h.clientLeft + parseFloat(D.paddingLeft)) * _.x, O = C.top + (h.clientTop + parseFloat(D.paddingTop)) * _.y;
      d *= _.x, u *= _.y, c *= _.x, p *= _.y, d += k, u += O, b = Pe(h), h = Nn(b);
    }
  }
  return qa({
    width: c,
    height: p,
    x: d,
    y: u
  });
}
function ho(e, t) {
  const a = on(e).scrollLeft;
  return t ? t.left + a : kt(Ge(e)).left + a;
}
function as(e, t, a) {
  a === void 0 && (a = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (a ? 0 : (
    // RTL <body> scrollbar.
    ho(e, n)
  )), s = n.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function kd(e) {
  let {
    elements: t,
    rect: a,
    offsetParent: n,
    strategy: o
  } = e;
  const s = o === "fixed", r = Ge(n), i = t ? nn(t.floating) : !1;
  if (n === r || i && s)
    return a;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ke(1);
  const c = Ke(0), p = je(n);
  if ((p || !p && !s) && ((Dt(n) !== "body" || Ca(r)) && (d = on(n)), je(n))) {
    const m = kt(n);
    u = Ft(n), c.x = m.x + n.clientLeft, c.y = m.y + n.clientTop;
  }
  const y = r && !p && !s ? as(r, d, !0) : Ke(0);
  return {
    width: a.width * u.x,
    height: a.height * u.y,
    x: a.x * u.x - d.scrollLeft * u.x + c.x + y.x,
    y: a.y * u.y - d.scrollTop * u.y + c.y + y.y
  };
}
function Bd(e) {
  return Array.from(e.getClientRects());
}
function Dd(e) {
  const t = Ge(e), a = on(e), n = e.ownerDocument.body, o = De(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = De(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -a.scrollLeft + ho(e);
  const i = -a.scrollTop;
  return Fe(n).direction === "rtl" && (r += De(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: r,
    y: i
  };
}
function Pd(e, t) {
  const a = Pe(e), n = Ge(e), o = a.visualViewport;
  let s = n.clientWidth, r = n.clientHeight, i = 0, d = 0;
  if (o) {
    s = o.width, r = o.height;
    const u = vo();
    (!u || u && t === "fixed") && (i = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: i,
    y: d
  };
}
function Od(e, t) {
  const a = kt(e, !0, t === "fixed"), n = a.top + e.clientTop, o = a.left + e.clientLeft, s = je(e) ? Ft(e) : Ke(1), r = e.clientWidth * s.x, i = e.clientHeight * s.y, d = o * s.x, u = n * s.y;
  return {
    width: r,
    height: i,
    x: d,
    y: u
  };
}
function tl(e, t, a) {
  let n;
  if (t === "viewport")
    n = Pd(e, a);
  else if (t === "document")
    n = Dd(Ge(e));
  else if (Re(t))
    n = Od(t, a);
  else {
    const o = ts(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return qa(n);
}
function ns(e, t) {
  const a = gt(e);
  return a === t || !Re(a) || jt(a) ? !1 : Fe(a).position === "fixed" || ns(a, t);
}
function Sd(e, t) {
  const a = t.get(e);
  if (a)
    return a;
  let n = ha(e, [], !1).filter((i) => Re(i) && Dt(i) !== "body"), o = null;
  const s = Fe(e).position === "fixed";
  let r = s ? gt(e) : e;
  for (; Re(r) && !jt(r); ) {
    const i = Fe(r), d = fo(r);
    !d && i.position === "fixed" && (o = null), (s ? !d && !o : !d && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ca(r) && !d && ns(e, r)) ? n = n.filter((c) => c !== r) : o = i, r = gt(r);
  }
  return t.set(e, n), n;
}
function Ed(e) {
  let {
    element: t,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = e;
  const r = [...a === "clippingAncestors" ? nn(t) ? [] : Sd(t, this._c) : [].concat(a), n], i = r[0], d = r.reduce((u, c) => {
    const p = tl(t, c, o);
    return u.top = De(p.top, u.top), u.right = ht(p.right, u.right), u.bottom = ht(p.bottom, u.bottom), u.left = De(p.left, u.left), u;
  }, tl(t, i, o));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function Md(e) {
  const {
    width: t,
    height: a
  } = es(e);
  return {
    width: t,
    height: a
  };
}
function Ad(e, t, a) {
  const n = je(t), o = Ge(t), s = a === "fixed", r = kt(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = Ke(0);
  if (n || !n && !s)
    if ((Dt(t) !== "body" || Ca(o)) && (i = on(t)), n) {
      const y = kt(t, !0, s, t);
      d.x = y.x + t.clientLeft, d.y = y.y + t.clientTop;
    } else o && (d.x = ho(o));
  const u = o && !n && !s ? as(o, i) : Ke(0), c = r.left + i.scrollLeft - d.x - u.x, p = r.top + i.scrollTop - d.y - u.y;
  return {
    x: c,
    y: p,
    width: r.width,
    height: r.height
  };
}
function $n(e) {
  return Fe(e).position === "static";
}
function al(e, t) {
  if (!je(e) || Fe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let a = e.offsetParent;
  return Ge(e) === a && (a = a.ownerDocument.body), a;
}
function os(e, t) {
  const a = Pe(e);
  if (nn(e))
    return a;
  if (!je(e)) {
    let o = gt(e);
    for (; o && !jt(o); ) {
      if (Re(o) && !$n(o))
        return o;
      o = gt(o);
    }
    return a;
  }
  let n = al(e, t);
  for (; n && _d(n) && $n(n); )
    n = al(n, t);
  return n && jt(n) && $n(n) && !fo(n) ? a : n || xd(e) || a;
}
const Td = async function(e) {
  const t = this.getOffsetParent || os, a = this.getDimensions, n = await a(e.floating);
  return {
    reference: Ad(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Vd(e) {
  return Fe(e).direction === "rtl";
}
const Id = {
  convertOffsetParentRelativeRectToViewportRelativeRect: kd,
  getDocumentElement: Ge,
  getClippingRect: Ed,
  getOffsetParent: os,
  getElementRects: Td,
  getClientRects: Bd,
  getDimensions: Md,
  getScale: Ft,
  isElement: Re,
  isRTL: Vd
};
function Rd(e, t) {
  let a = null, n;
  const o = Ge(e);
  function s() {
    var i;
    clearTimeout(n), (i = a) == null || i.disconnect(), a = null;
  }
  function r(i, d) {
    i === void 0 && (i = !1), d === void 0 && (d = 1), s();
    const {
      left: u,
      top: c,
      width: p,
      height: y
    } = e.getBoundingClientRect();
    if (i || t(), !p || !y)
      return;
    const m = Aa(c), b = Aa(o.clientWidth - (u + p)), h = Aa(o.clientHeight - (c + y)), _ = Aa(u), D = {
      rootMargin: -m + "px " + -b + "px " + -h + "px " + -_ + "px",
      threshold: De(0, ht(1, d)) || 1
    };
    let k = !0;
    function O(S) {
      const V = S[0].intersectionRatio;
      if (V !== d) {
        if (!k)
          return r();
        V ? r(!1, V) : n = setTimeout(() => {
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
function Fd(e, t, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, u = mo(e), c = o || s ? [...u ? ha(u) : [], ...ha(t)] : [];
  c.forEach((C) => {
    o && C.addEventListener("scroll", a, {
      passive: !0
    }), s && C.addEventListener("resize", a);
  });
  const p = u && i ? Rd(u, a) : null;
  let y = -1, m = null;
  r && (m = new ResizeObserver((C) => {
    let [D] = C;
    D && D.target === u && m && (m.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      var k;
      (k = m) == null || k.observe(t);
    })), a();
  }), u && !d && m.observe(u), m.observe(t));
  let b, h = d ? kt(e) : null;
  d && _();
  function _() {
    const C = kt(e);
    h && (C.x !== h.x || C.y !== h.y || C.width !== h.width || C.height !== h.height) && a(), h = C, b = requestAnimationFrame(_);
  }
  return a(), () => {
    var C;
    c.forEach((D) => {
      o && D.removeEventListener("scroll", a), s && D.removeEventListener("resize", a);
    }), p == null || p(), (C = m) == null || C.disconnect(), m = null, d && cancelAnimationFrame(b);
  };
}
const Ld = yd, Nd = gd, nl = vd, zd = wd, Wd = md, Ud = fd, Kd = bd, jd = (e, t, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Id,
    ...a
  }, s = {
    ...o.platform,
    _c: n
  };
  return pd(e, t, {
    ...o,
    platform: s
  });
};
function Hd(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function zn(e) {
  if (Hd(e)) {
    const t = e.$el;
    return po(t) && Dt(t) === "#comment" ? null : t;
  }
  return e;
}
function It(e) {
  return typeof e == "function" ? e() : l(e);
}
function Gd(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const a = zn(It(e.element));
      return a == null ? {} : Ud({
        element: a,
        padding: e.padding
      }).fn(t);
    }
  };
}
function ls(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ol(e, t) {
  const a = ls(e);
  return Math.round(t * a) / a;
}
function qd(e, t, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = $(() => {
    var M;
    return (M = It(a.open)) != null ? M : !0;
  }), s = $(() => It(a.middleware)), r = $(() => {
    var M;
    return (M = It(a.placement)) != null ? M : "bottom";
  }), i = $(() => {
    var M;
    return (M = It(a.strategy)) != null ? M : "absolute";
  }), d = $(() => {
    var M;
    return (M = It(a.transform)) != null ? M : !0;
  }), u = $(() => zn(e.value)), c = $(() => zn(t.value)), p = A(0), y = A(0), m = A(i.value), b = A(r.value), h = Yn({}), _ = A(!1), C = $(() => {
    const M = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return M;
    const F = ol(c.value, p.value), R = ol(c.value, y.value);
    return d.value ? {
      ...M,
      transform: "translate(" + F + "px, " + R + "px)",
      ...ls(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: F + "px",
      top: R + "px"
    };
  });
  let D;
  function k() {
    if (u.value == null || c.value == null)
      return;
    const M = o.value;
    jd(u.value, c.value, {
      middleware: s.value,
      placement: r.value,
      strategy: i.value
    }).then((F) => {
      p.value = F.x, y.value = F.y, m.value = F.strategy, b.value = F.placement, h.value = F.middlewareData, _.value = M !== !1;
    });
  }
  function O() {
    typeof D == "function" && (D(), D = void 0);
  }
  function S() {
    if (O(), n === void 0) {
      k();
      return;
    }
    if (u.value != null && c.value != null) {
      D = n(u.value, c.value, k);
      return;
    }
  }
  function V() {
    o.value || (_.value = !1);
  }
  return ee([s, r, i, o], k, {
    flush: "sync"
  }), ee([u, c], S, {
    flush: "sync"
  }), ee(o, V, {
    flush: "sync"
  }), Xn() && Zn(O), {
    x: Tt(p),
    y: Tt(y),
    strategy: Tt(m),
    placement: Tt(b),
    middlewareData: Tt(h),
    isPositioned: Tt(_),
    floatingStyles: C,
    update: k
  };
}
function se(e, t) {
  const a = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(a);
  return [(o) => {
    const s = $l(n, o);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (kl(n, o), o)];
}
function yo(e, t, a) {
  const n = a.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function Ya(e, t = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(e, t), a);
}
function Yd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xd = function e(t, a) {
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
const Ct = /* @__PURE__ */ Yd(Xd);
function Zd(e) {
  return e == null;
}
function ss(e) {
  const { defaultValue: t, defaultPlaceholder: a, granularity: n = "day" } = e;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (a)
    return a.copy();
  const o = /* @__PURE__ */ new Date(), s = o.getFullYear(), r = o.getMonth() + 1, i = o.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new Ut(s, r, i, 0, 0, 0) : new Wt(s, r, i);
}
function rs(e) {
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
function Jd(e, t) {
  var a;
  const n = Yn();
  return ye(() => {
    n.value = e();
  }, {
    ...t,
    flush: (a = void 0) != null ? a : "sync"
  }), _a(n);
}
function Zt(e) {
  return Xn() ? (Zn(e), !0) : !1;
}
function Qd(e) {
  let t = !1, a;
  const n = Cl(!0);
  return (...o) => (t || (a = n.run(() => e(...o)), t = !0), a);
}
function is(e) {
  let t = 0, a, n;
  const o = () => {
    t -= 1, n && t <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...s) => (t += 1, a || (n = Cl(!0), a = n.run(() => e(...s))), Zt(o), a);
}
function lt(e) {
  return typeof e == "function" ? e() : l(e);
}
const qe = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const eu = (e) => typeof e < "u", tu = (e) => e != null, au = Object.prototype.toString, nu = (e) => au.call(e) === "[object Object]", ds = () => {
}, ll = /* @__PURE__ */ ou();
function ou() {
  var e, t;
  return qe && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function lu(e) {
  return He();
}
function su(e, t = 1e4) {
  return Bl((a, n) => {
    let o = lt(e), s;
    const r = () => setTimeout(() => {
      o = lt(e), n();
    }, lt(t));
    return Zt(() => {
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
function ru(e, t) {
  lu() && Qn(e, t);
}
function iu(e, t, a = {}) {
  const {
    immediate: n = !0
  } = a, o = A(!1);
  let s = null;
  function r() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    o.value = !1, r();
  }
  function d(...u) {
    r(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, e(...u);
    }, lt(t));
  }
  return n && (o.value = !0, qe && d()), Zt(i), {
    isPending: _a(o),
    start: d,
    stop: i
  };
}
function du(e = 1e3, t = {}) {
  const {
    controls: a = !1,
    callback: n
  } = t, o = iu(
    n ?? ds,
    e,
    t
  ), s = $(() => !o.isPending.value);
  return a ? {
    ready: s,
    ...o
  } : s;
}
function Ee(e) {
  var t;
  const a = lt(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const ln = qe ? window : void 0;
function Xa(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = ln) : [t, a, n, o] = e, !t)
    return ds;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, p, y, m) => (c.addEventListener(p, y, m), () => c.removeEventListener(p, y, m)), d = ee(
    () => [Ee(t), lt(o)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const y = nu(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((b) => i(c, m, b, y)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), r();
  };
  return Zt(u), u;
}
function uu(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function go(...e) {
  let t, a, n = {};
  e.length === 3 ? (t = e[0], a = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, a = e[0], n = e[1]) : (t = e[0], a = e[1]) : (t = !0, a = e[0]);
  const {
    target: o = ln,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, d = uu(t);
  return Xa(o, s, (u) => {
    u.repeat && lt(i) || d(u) && a(u);
  }, r);
}
function bo() {
  const e = A(!1), t = He();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function cu(e) {
  const t = bo();
  return $(() => (t.value, !!e()));
}
function pu(e, t, a = {}) {
  const { window: n = ln, ...o } = a;
  let s;
  const r = cu(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, d = $(() => {
    const y = lt(e), m = (Array.isArray(y) ? y : [y]).map(Ee).filter(tu);
    return new Set(m);
  }), u = ee(
    () => d.value,
    (y) => {
      i(), r.value && y.size && (s = new MutationObserver(t), y.forEach((m) => s.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => s == null ? void 0 : s.takeRecords(), p = () => {
    i(), u();
  };
  return Zt(p), {
    isSupported: r,
    stop: p,
    takeRecords: c
  };
}
function us(e, t = {}) {
  const {
    immediate: a = !0,
    fpsLimit: n = void 0,
    window: o = ln
  } = t, s = A(!1), r = n ? 1e3 / n : null;
  let i = 0, d = null;
  function u(y) {
    if (!s.value || !o)
      return;
    i || (i = y);
    const m = y - i;
    if (r && m < r) {
      d = o.requestAnimationFrame(u);
      return;
    }
    i = y, e({ delta: m, timestamp: y }), d = o.requestAnimationFrame(u);
  }
  function c() {
    !s.value && o && (s.value = !0, i = 0, d = o.requestAnimationFrame(u));
  }
  function p() {
    s.value = !1, d != null && o && (o.cancelAnimationFrame(d), d = null);
  }
  return a && c(), Zt(p), {
    isActive: _a(s),
    pause: p,
    resume: c
  };
}
function fu(e) {
  return JSON.parse(JSON.stringify(e));
}
function ve(e, t, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: y
  } = n, m = He(), b = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let h = u;
  t || (t = "modelValue"), h = h || `update:${t.toString()}`;
  const _ = (k) => i ? typeof i == "function" ? i(k) : fu(k) : k, C = () => eu(e[t]) ? _(e[t]) : p, D = (k) => {
    y ? y(k) && b(h, k) : b(h, k);
  };
  if (d) {
    const k = C(), O = A(k);
    let S = !1;
    return ee(
      () => e[t],
      (V) => {
        S || (S = !0, O.value = _(V), te(() => S = !1));
      }
    ), ee(
      O,
      (V) => {
        !S && (V !== e[t] || c) && D(V);
      },
      { deep: c }
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
function sn(e) {
  return e ? e.flatMap((t) => t.type === J ? sn(t.children) : [t]) : [];
}
const vu = ["INPUT", "TEXTAREA"];
function mu(e, t, a, n = {}) {
  if (!t || n.enableIgnoredElement && vu.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = !0,
    dir: d = "ltr",
    preventScroll: u = !0,
    focus: c = !1
  } = n, [p, y, m, b, h, _] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = m || b, D = p || y;
  if (!h && !_ && (!C && !D || o === "vertical" && D || o === "horizontal" && C))
    return null;
  const k = a ? Array.from(a.querySelectorAll(s)) : r;
  if (!k.length)
    return null;
  u && e.preventDefault();
  let O = null;
  return D || C ? O = cs(k, t, {
    goForward: C ? b : d === "ltr" ? p : y,
    loop: i
  }) : h ? O = k.at(0) || null : _ && (O = k.at(-1) || null), c && (O == null || O.focus()), O;
}
function cs(e, t, a, n = e.length) {
  if (--n === 0)
    return null;
  const o = e.indexOf(t), s = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (s < 0 || s >= e.length))
    return null;
  const r = (s + e.length) % e.length, i = e[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? cs(
    e,
    i,
    a,
    n
  ) : i : null;
}
function kn(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Wn(e, t, a = ".", n) {
  if (!kn(t))
    return Wn(e, {}, a);
  const o = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = e[s];
    r != null && (Array.isArray(r) && Array.isArray(o[s]) ? o[s] = [...r, ...o[s]] : kn(r) && kn(o[s]) ? o[s] = Wn(
      r,
      o[s],
      (a ? `${a}.` : "") + s.toString()
    ) : o[s] = r);
  }
  return o;
}
function hu(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((a, n) => Wn(a, n, ""), {})
  );
}
const yu = hu(), [rn, zy] = se("ConfigProvider");
let gu = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", bu = (e = 21) => {
  let t = "", a = e;
  for (; a--; )
    t += gu[Math.random() * 64 | 0];
  return t;
};
const wu = is(() => {
  const e = A(/* @__PURE__ */ new Map()), t = A(), a = $(() => {
    for (const r of e.value.values())
      if (r)
        return !0;
    return !1;
  }), n = rn({
    scrollBody: A(!0)
  });
  let o = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", ll && (o == null || o()), t.value = void 0;
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
    const u = window.innerWidth - document.documentElement.clientWidth, c = { padding: u, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? yu({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), ll && (o = Xa(
      document,
      "touchmove",
      (y) => {
        var m;
        y.target === document.documentElement && (y.touches.length > 1 || (m = y.preventDefault) == null || m.call(y));
      },
      { passive: !1 }
    )), te(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function $a(e) {
  const t = bu(6), a = wu();
  a.value.set(t, e ?? !1);
  const n = $({
    get: () => a.value.get(t) ?? !1,
    set: (o) => a.value.set(t, o)
  });
  return ru(() => {
    a.value.delete(t);
  }), n;
}
const _u = "data-radix-vue-collection-item";
function Jt(e, t = _u) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = A([]);
    function s() {
      const r = Ee(n);
      return r ? o.value = Array.from(
        r.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return Pr(() => {
      o.value = [];
    }), ie(s), Or(s), ee(() => n == null ? void 0 : n.value, s, { immediate: !0 }), kl(a, o), o;
  }, injectCollection: () => $l(a, A([])) };
}
function xu(e) {
  const t = A(e);
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
    return Xi(h) && _ ? o(Ve(h), {
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
    const h = Ll(Bt());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_) => ({ label: i(Ve(h.set({ month: _ }))), value: _ }));
  }
  function u(h, _ = {}) {
    return new Qe(t.value, { year: "numeric", ..._ }).format(h);
  }
  function c(h, _) {
    return ro(h) ? new Qe(t.value, {
      ..._,
      timeZone: h.timeZone
    }).formatToParts(Ve(h)) : new Qe(t.value, _).formatToParts(Ve(h));
  }
  function p(h, _ = "narrow") {
    return new Qe(t.value, { weekday: _ }).format(h);
  }
  function y(h) {
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
    const D = { ...m, ...C }, k = c(h, D).find((O) => O.type === _);
    return k ? k.value : "";
  }
  return {
    setLocale: n,
    getLocale: a,
    fullMonth: i,
    fullYear: u,
    fullMonthAndYear: r,
    toParts: c,
    custom: o,
    part: b,
    dayPeriod: y,
    selectedDate: s,
    dayOfWeek: p,
    getMonths: d
  };
}
function it(e) {
  const t = rn({
    dir: A("ltr")
  });
  return $(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function Pt(e) {
  const t = He(), a = t == null ? void 0 : t.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), a == null || a.forEach((o) => {
    n[kr(_l(o))] = (...s) => e(o, ...s);
  }), n;
}
let Bn = 0;
function wo() {
  ye((e) => {
    if (!qe)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? sl()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? sl()
    ), Bn++, e(() => {
      Bn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), Bn--;
    });
  });
}
function sl() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function ka(e) {
  return $(() => {
    var t;
    return lt(e) ? !!((t = Ee(e)) != null && t.closest("form")) : !0;
  });
}
function ne(e) {
  const t = He(), a = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, s) => {
    const r = (t == null ? void 0 : t.type.props[s]).default;
    return r !== void 0 && (o[s] = r), o;
  }, {}), n = wl(e);
  return $(() => {
    const o = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      o[_l(r)] = s[r];
    }), Object.keys({ ...a, ...o }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function oe(e, t) {
  const a = ne(e), n = t ? Pt(t) : {};
  return $(() => ({
    ...a.value,
    ...n
  }));
}
function N() {
  const e = He(), t = A(), a = $(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = t.value) == null ? void 0 : r.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Ee(t);
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
var Cu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Vt = /* @__PURE__ */ new WeakMap(), Ta = /* @__PURE__ */ new WeakMap(), Va = {}, Dn = 0, ps = function(e) {
  return e && (e.host || ps(e.parentNode));
}, $u = function(e, t) {
  return t.map(function(a) {
    if (e.contains(a))
      return a;
    var n = ps(a);
    return n && e.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, ku = function(e, t, a, n) {
  var o = $u(t, Array.isArray(e) ? e : [e]);
  Va[a] || (Va[a] = /* @__PURE__ */ new WeakMap());
  var s = Va[a], r = [], i = /* @__PURE__ */ new Set(), d = new Set(o), u = function(p) {
    !p || i.has(p) || (i.add(p), u(p.parentNode));
  };
  o.forEach(u);
  var c = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(y) {
      if (i.has(y))
        c(y);
      else
        try {
          var m = y.getAttribute(n), b = m !== null && m !== "false", h = (Vt.get(y) || 0) + 1, _ = (s.get(y) || 0) + 1;
          Vt.set(y, h), s.set(y, _), r.push(y), h === 1 && b && Ta.set(y, !0), _ === 1 && y.setAttribute(a, "true"), b || y.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", y, C);
        }
    });
  };
  return c(t), i.clear(), Dn++, function() {
    r.forEach(function(p) {
      var y = Vt.get(p) - 1, m = s.get(p) - 1;
      Vt.set(p, y), s.set(p, m), y || (Ta.has(p) || p.removeAttribute(n), Ta.delete(p)), m || p.removeAttribute(a);
    }), Dn--, Dn || (Vt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Ta = /* @__PURE__ */ new WeakMap(), Va = {});
  };
}, Bu = function(e, t, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = Cu(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), ku(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function Ba(e) {
  let t;
  ee(() => Ee(e), (a) => {
    a ? t = Bu(a) : t && t();
  }), bt(() => {
    t && t();
  });
}
let Du = 0;
function xe(e, t = "radix") {
  const a = rn({ useId: void 0 });
  return Lo.useId ? `${t}-${Lo.useId()}` : a.useId ? `${t}-${a.useId()}` : `${t}-${++Du}`;
}
function fs(e) {
  const t = A(), a = $(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), n = $(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return ie(() => {
    const o = Ee(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const s = new ResizeObserver((r) => {
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
      return s.observe(o, { box: "border-box" }), () => s.unobserve(o);
    } else
      t.value = void 0;
  }), {
    width: a,
    height: n
  };
}
function Pu(e, t) {
  const a = A(e);
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
function _o(e) {
  const t = su("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, n) => {
      var o, s;
      if (!(e != null && e.value) && !n)
        return;
      t.value = t.value + a;
      const r = (e == null ? void 0 : e.value) ?? n, i = document.activeElement, d = ((s = (o = r.find((y) => y === i)) == null ? void 0 : o.textContent) == null ? void 0 : s.trim()) ?? "", u = r.map((y) => {
        var m;
        return ((m = y.textContent) == null ? void 0 : m.trim()) ?? "";
      }), c = Su(u, t.value, d), p = r.find(
        (y) => {
          var m;
          return ((m = y.textContent) == null ? void 0 : m.trim()) === c;
        }
      );
      return p && p.focus(), p;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Ou(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
function Su(e, t, a) {
  const n = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = a ? e.indexOf(a) : -1;
  let s = Ou(e, Math.max(o, 0));
  n.length === 1 && (s = s.filter((i) => i !== a));
  const r = s.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return r !== a ? r : void 0;
}
function vs() {
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
const xo = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const s = sn(a.default()), r = s.findIndex((c) => c.type !== br);
      if (r === -1)
        return s;
      const i = s[r];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? E(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const u = wr(i, d);
      for (const c in d)
        c.startsWith("on") && (u.props || (u.props = {}), u.props[c] = d[c]);
      return s.length === 1 ? u : (s[r] = u, s);
    };
  }
}), L = w({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => We(n, t) : n !== "template" ? () => We(e.as, t, { default: a.default }) : () => We(xo, t, { default: a.default });
  }
});
function Ot() {
  const e = A(), t = $(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = e.value) == null ? void 0 : a.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : Ee(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function Eu(e, t) {
  const a = A({}), n = A("none"), o = e.value ? "mounted" : "unmounted", { state: s, dispatch: r } = Pu(o, {
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
  }), i = (y) => {
    var m;
    if (qe) {
      const b = new CustomEvent(y, { bubbles: !1, cancelable: !1 });
      (m = t.value) == null || m.dispatchEvent(b);
    }
  };
  ee(
    e,
    async (y, m) => {
      var b;
      const h = m !== y;
      if (await te(), h) {
        const _ = n.value, C = Ia(t.value);
        y ? (r("MOUNT"), i("enter"), C === "none" && i("after-enter")) : C === "none" || ((b = a.value) == null ? void 0 : b.display) === "none" ? (r("UNMOUNT"), i("leave"), i("after-leave")) : m && _ !== C ? (r("ANIMATION_OUT"), i("leave")) : (r("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (y) => {
    const m = Ia(t.value), b = m.includes(
      y.animationName
    ), h = s.value === "mounted" ? "enter" : "leave";
    y.target === t.value && b && (i(`after-${h}`), r("ANIMATION_END")), y.target === t.value && m === "none" && r("ANIMATION_END");
  }, u = (y) => {
    y.target === t.value && (n.value = Ia(t.value));
  }, c = ee(
    t,
    (y, m) => {
      y ? (a.value = getComputedStyle(y), y.addEventListener("animationstart", u), y.addEventListener("animationcancel", d), y.addEventListener("animationend", d)) : (r("ANIMATION_END"), m == null || m.removeEventListener("animationstart", u), m == null || m.removeEventListener("animationcancel", d), m == null || m.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), p = ee(s, () => {
    const y = Ia(t.value);
    n.value = s.value === "mounted" ? y : "none";
  });
  return bt(() => {
    c(), p();
  }), {
    isPresent: $(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function Ia(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Le = w({
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
    const { present: o, forceMount: s } = ue(e), r = A(), { isPresent: i } = Eu(o, r);
    a({ present: i });
    let d = t.default({ present: i });
    d = sn(d || []);
    const u = He();
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
    return () => s.value || o.value || i.value ? We(t.default({ present: i })[0], {
      ref: (c) => {
        const p = Ee(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
}), [Ye, Mu] = se("DialogRoot"), Au = /* @__PURE__ */ w({
  inheritAttrs: !1,
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
    }), o = A(), s = A(), { modal: r } = ue(a);
    return Mu({
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
}), Tu = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ye(), { forwardRef: n, currentElement: o } = N();
    return a.contentId || (a.contentId = xe(void 0, "radix-vue-dialog-content")), ie(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), g(l(L), E(t, {
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
}), dn = /* @__PURE__ */ w({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = bo();
    return (a, n) => l(t) || a.forceMount ? (v(), g(en, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      x(a.$slots, "default")
    ], 8, ["to", "disabled"])) : Q("", !0);
  }
}), ms = /* @__PURE__ */ w({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(dn), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vu = "dismissableLayer.pointerDownOutside", Iu = "dismissableLayer.focusOutside";
function hs(e, t) {
  const a = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function Ru(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = A(!1), s = A(() => {
  });
  return ye((r) => {
    if (!qe)
      return;
    const i = async (u) => {
      const c = u.target;
      if (t != null && t.value) {
        if (hs(t.value, c)) {
          o.value = !1;
          return;
        }
        if (u.target && !o.value) {
          let p = function() {
            yo(
              Vu,
              e,
              y
            );
          };
          const y = { originalEvent: u };
          u.pointerType === "touch" ? (n.removeEventListener("click", s.value), s.value = p, n.addEventListener("click", s.value, {
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
function Fu(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = A(!1);
  return ye((s) => {
    if (!qe)
      return;
    const r = async (i) => {
      t != null && t.value && (await te(), !(!t.value || hs(t.value, i.target)) && i.target && !o.value && yo(
        Iu,
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
const Te = xl({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Da = /* @__PURE__ */ w({
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
    ), i = $(() => Te.layersRoot), d = $(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), u = $(() => Te.layersWithOutsidePointerEventsDisabled.size > 0), c = $(() => {
      const b = Array.from(i.value), [h] = [...Te.layersWithOutsidePointerEventsDisabled].slice(-1), _ = b.indexOf(h);
      return d.value >= _;
    }), p = Ru(async (b) => {
      const h = [...Te.branches].some(
        (_) => _ == null ? void 0 : _.contains(b.target)
      );
      !c.value || h || (n("pointerDownOutside", b), n("interactOutside", b), await te(), b.defaultPrevented || n("dismiss"));
    }, s), y = Fu((b) => {
      [...Te.branches].some(
        (h) => h == null ? void 0 : h.contains(b.target)
      ) || (n("focusOutside", b), n("interactOutside", b), b.defaultPrevented || n("dismiss"));
    }, s);
    go("Escape", (b) => {
      d.value === i.value.size - 1 && (n("escapeKeyDown", b), b.defaultPrevented || n("dismiss"));
    });
    let m;
    return ye((b) => {
      s.value && (a.disableOutsidePointerEvents && (Te.layersWithOutsidePointerEventsDisabled.size === 0 && (m = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), Te.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), b(() => {
        a.disableOutsidePointerEvents && Te.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = m);
      }));
    }), ye((b) => {
      b(() => {
        s.value && (i.value.delete(s.value), Te.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (b, h) => (v(), g(l(L), {
      ref: l(o),
      "as-child": b.asChild,
      as: b.as,
      "data-dismissable-layer": "",
      style: qt({
        pointerEvents: u.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(y).onFocusCapture,
      onBlurCapture: l(y).onBlurCapture,
      onPointerdownCapture: l(p).onPointerDownCapture
    }, {
      default: f(() => [
        x(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Lu = /* @__PURE__ */ w({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = N();
    return ie(() => {
      Te.branches.add(n.value);
    }), bt(() => {
      Te.branches.delete(n.value);
    }), (o, s) => (v(), g(l(L), E({ ref: l(a) }, t), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pn = "focusScope.autoFocusOnMount", On = "focusScope.autoFocusOnUnmount", rl = { bubbles: !1, cancelable: !0 };
function Ka(e, { select: t = !1 } = {}) {
  const a = document.activeElement;
  for (const n of e)
    if (vt(n, { select: t }), document.activeElement !== a)
      return !0;
}
function Nu(e) {
  const t = Co(e), a = il(t, e), n = il(t.reverse(), e);
  return [a, n];
}
function Co(e) {
  const t = [], a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) t.push(a.currentNode);
  return t;
}
function il(e, t) {
  for (const a of e)
    if (!zu(a, { upTo: t }))
      return a;
}
function zu(e, { upTo: t }) {
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
function Wu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function vt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const a = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== a && Wu(e) && t && e.select();
  }
}
const Uu = Qd(() => A([]));
function Ku() {
  const e = Uu();
  return {
    add(t) {
      const a = e.value[0];
      t !== a && (a == null || a.pause()), e.value = dl(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var a;
      e.value = dl(e.value, t), (a = e.value[0]) == null || a.resume();
    }
  };
}
function dl(e, t) {
  const a = [...e], n = a.indexOf(t);
  return n !== -1 && a.splice(n, 1), a;
}
function ju(e) {
  return e.filter((t) => t.tagName !== "A");
}
const un = /* @__PURE__ */ w({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, n = t, { currentRef: o, currentElement: s } = N(), r = A(null), i = Ku(), d = xl({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ye((c) => {
      if (!qe)
        return;
      const p = s.value;
      if (!a.trapped)
        return;
      function y(_) {
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
      document.addEventListener("focusin", y), document.addEventListener("focusout", m);
      const h = new MutationObserver(b);
      p && h.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", m), h.disconnect();
      });
    }), ye(async (c) => {
      const p = s.value;
      if (await te(), !p)
        return;
      i.add(d);
      const y = document.activeElement;
      if (!p.contains(y)) {
        const m = new CustomEvent(Pn, rl);
        p.addEventListener(Pn, (b) => n("mountAutoFocus", b)), p.dispatchEvent(m), m.defaultPrevented || (Ka(ju(Co(p)), {
          select: !0
        }), document.activeElement === y && vt(p));
      }
      c(() => {
        p.removeEventListener(Pn, (h) => n("mountAutoFocus", h));
        const m = new CustomEvent(On, rl), b = (h) => {
          n("unmountAutoFocus", h);
        };
        p.addEventListener(On, b), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || vt(y ?? document.body, { select: !0 }), p.removeEventListener(On, b), i.remove(d);
        }, 0);
      });
    });
    function u(c) {
      if (!a.loop && !a.trapped || d.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, y = document.activeElement;
      if (p && y) {
        const m = c.currentTarget, [b, h] = Nu(m);
        b && h ? !c.shiftKey && y === h ? (c.preventDefault(), a.loop && vt(b, { select: !0 })) : c.shiftKey && y === b && (c.preventDefault(), a.loop && vt(h, { select: !0 })) : y === m && c.preventDefault();
      }
    }
    return (c, p) => (v(), g(l(L), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: u
    }, {
      default: f(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Hu = "menu.itemSelect", Un = ["Enter", " "], Gu = ["ArrowDown", "PageUp", "Home"], ys = ["ArrowUp", "PageDown", "End"], qu = [...Gu, ...ys], Yu = {
  ltr: [...Un, "ArrowRight"],
  rtl: [...Un, "ArrowLeft"]
}, Xu = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function $o(e) {
  return e ? "open" : "closed";
}
function Za(e) {
  return e === "indeterminate";
}
function ko(e) {
  return Za(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Kn(e) {
  const t = document.activeElement;
  for (const a of e)
    if (a === t || (a.focus(), document.activeElement !== t))
      return;
}
function Zu(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, d = t[s].y, u = t[r].x, c = t[r].y;
    d > n != c > n && a < (u - i) * (n - d) / (c - d) + i && (o = !o);
  }
  return o;
}
function Ju(e, t) {
  if (!t)
    return !1;
  const a = { x: e.clientX, y: e.clientY };
  return Zu(a, t);
}
function ya(e) {
  return e.pointerType === "mouse";
}
const Qu = "DialogTitle", ec = "DialogContent";
function tc({
  titleName: e = Qu,
  contentName: t = ec,
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
    const u = (d = s.value) == null ? void 0 : d.getAttribute("aria-describedby");
    o && u && (document.getElementById(o) || console.warn(i));
  });
}
const gs = /* @__PURE__ */ w({
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
    return o.titleId || (o.titleId = xe(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = xe(void 0, "radix-vue-dialog-description")), ie(() => {
      o.contentElement = r, document.activeElement !== document.body && (o.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && tc({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: r
    }), (i, d) => (v(), g(l(un), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: f(() => [
        P(l(Da), E({
          id: l(o).contentId,
          ref: l(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(o).descriptionId,
          "aria-labelledby": l(o).titleId,
          "data-state": l($o)(l(o).open.value)
        }, i.$attrs, {
          onDismiss: d[0] || (d[0] = (u) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[2] || (d[2] = (u) => n("focusOutside", u)),
          onInteractOutside: d[3] || (d[3] = (u) => n("interactOutside", u)),
          onPointerDownOutside: d[4] || (d[4] = (u) => n("pointerDownOutside", u))
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
}), ac = /* @__PURE__ */ w({
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
    const a = e, n = t, o = Ye(), s = Pt(n), { forwardRef: r, currentElement: i } = N();
    return Ba(i), (d, u) => (v(), g(gs, E({ ...a, ...l(s) }, {
      ref: l(r),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = l(o).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: u[1] || (u[1] = (c) => {
        const p = c.detail.originalEvent, y = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || y) && c.preventDefault();
      }),
      onFocusOutside: u[2] || (u[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: f(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), nc = /* @__PURE__ */ w({
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
    const a = e, n = Pt(t);
    N();
    const o = Ye(), s = A(!1), r = A(!1);
    return (i, d) => (v(), g(gs, E({ ...a, ...l(n) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (u) => {
        var c;
        u.defaultPrevented || (s.value || (c = l(o).triggerElement.value) == null || c.focus(), u.preventDefault()), s.value = !1, r.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (u) => {
        var c;
        u.defaultPrevented || (s.value = !0, u.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const p = u.target;
        (c = l(o).triggerElement.value) != null && c.contains(p) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && r.value && u.preventDefault();
      })
    }), {
      default: f(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bs = /* @__PURE__ */ w({
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
    const a = e, n = t, o = Ye(), s = Pt(n), { forwardRef: r } = N();
    return (i, d) => (v(), g(l(Le), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), g(ac, E({
          key: 0,
          ref: l(r)
        }, { ...a, ...l(s), ...i.$attrs }), {
          default: f(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), g(nc, E({
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
}), oc = /* @__PURE__ */ w({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ye();
    return $a(!0), N(), (a, n) => (v(), g(l(L), {
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
}), ws = /* @__PURE__ */ w({
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
      return (s = l(t)) != null && s.modal.value ? (v(), g(l(Le), {
        key: 0,
        present: n.forceMount || l(t).open.value
      }, {
        default: f(() => [
          P(oc, E(n.$attrs, {
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
}), Bo = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const a = Ye();
    return (n, o) => (v(), g(l(L), E(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (s) => l(a).onOpenChange(!1))
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), lc = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, a = Ye();
    return N(), (n, o) => (v(), g(l(L), E(t, {
      id: l(a).titleId
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), sc = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    N();
    const a = Ye();
    return (n, o) => (v(), g(l(L), E(t, {
      id: l(a).descriptionId
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function rc(e) {
  function t(n) {
    return Array.isArray(e.date.value) ? e.date.value.some((o) => we(o, n)) : e.date.value ? we(e.date.value, n) : !1;
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
function ic(e, t) {
  const a = t(e), n = a.compare(e), o = {};
  return n >= 7 && (o.day = 1), n >= va(e) && (o.month = 1), a.set({ ...o });
}
function dc(e, t) {
  const a = t(e), n = e.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= va(e) && (o.month = 13), a.set({ ...o });
}
function uc(e, t) {
  return t(e);
}
function cc(e, t) {
  return t(e);
}
function _s(e) {
  const t = xu(e.locale.value), a = $(() => {
    const h = {
      calendar: e.placeholder.value.calendar.identifier
    };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (h.era = "short"), h;
  }), n = A(xt({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), o = $(() => n.value.map((h) => h.value));
  function s(h) {
    return !o.value.some((_) => Ko(h, _));
  }
  const r = (h = "month", _) => {
    if (!e.maxValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[n.value.length - 1].value;
    if (_ || e.nextPage.value) {
      const k = ic(C, _ || e.nextPage.value);
      return ca(k, e.maxValue.value);
    }
    if (h === "year") {
      const k = C.add({ years: 1 }).set({ day: 1, month: 1 });
      return ca(k, e.maxValue.value);
    }
    const D = C.add({ months: 1 }).set({ day: 1 });
    return ca(D, e.maxValue.value);
  }, i = (h = "month", _) => {
    if (!e.minValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[0].value;
    if (_ || e.prevPage.value) {
      const k = dc(C, _ || e.prevPage.value);
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
    return !!((_ = e.isDateDisabled) != null && _.call(e, h) || e.disabled.value || e.maxValue.value && ca(h, e.maxValue.value) || e.minValue.value && mt(h, e.minValue.value));
  }
  const u = (h) => {
    var _;
    return !!((_ = e.isDateUnavailable) != null && _.call(e, h));
  }, c = $(() => n.value.length ? n.value[0].rows[0].map((h) => t.dayOfWeek(Ve(h), e.weekdayFormat.value)) : []), p = (h = "month", _) => {
    const C = n.value[0].value;
    if (_ || e.nextPage.value) {
      const O = uc(C, _ || e.nextPage.value), S = xt({
        dateObj: O,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = S;
      const V = {};
      if (!_) {
        const M = S[0].value.compare(C);
        M >= va(C) && (V.day = 1), M >= 365 && (V.month = 1);
      }
      e.placeholder.value = S[0].value.set({ ...V });
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
  }, y = (h = "month", _) => {
    const C = n.value[0].value;
    if (_ || e.prevPage.value) {
      const O = cc(C, _ || e.prevPage.value), S = xt({
        dateObj: O,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = S;
      const V = {};
      if (!_) {
        const M = C.compare(S[0].value);
        M >= va(C) && (V.day = 1), M >= 365 && (V.month = 1);
      }
      e.placeholder.value = S[0].value.set({ ...V });
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
    o.value.some((_) => Ko(_, h)) || (n.value = xt({
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
      const S = n.value[0].value;
      return `${t.fullMonthAndYear(Ve(S), a.value)}`;
    }
    const h = Ve(n.value[0].value), _ = Ve(n.value[n.value.length - 1].value), C = t.fullMonth(h, a.value), D = t.fullMonth(_, a.value), k = t.fullYear(h, a.value), O = t.fullYear(_, a.value);
    return k === O ? `${C} - ${D} ${O}` : `${C} ${k} - ${D} ${O}`;
  }), b = $(() => `${e.calendarLabel.value ?? "Event Date"}, ${m.value}`);
  return {
    isDateDisabled: d,
    isDateUnavailable: u,
    isNextButtonDisabled: r,
    isPrevButtonDisabled: i,
    grid: n,
    weekdays: c,
    visibleView: o,
    isOutsideVisibleView: s,
    formatter: t,
    nextPage: p,
    prevPage: y,
    headingValue: m,
    fullCalendarLabel: b
  };
}
const pc = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, fc = {
  role: "heading",
  "aria-level": "2"
}, [Qt, vc] = se("CalendarRoot"), mc = /* @__PURE__ */ w({
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
      weekStartsOn: u,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: y,
      minValue: m,
      maxValue: b,
      numberOfMonths: h,
      preventDeselect: _,
      isDateDisabled: C,
      isDateUnavailable: D,
      calendarLabel: k,
      defaultValue: O,
      nextPage: S,
      prevPage: V,
      dir: M
    } = ue(a), { primitiveElement: F, currentElement: R } = Ot(), B = it(M), T = ve(a, "modelValue", n, {
      defaultValue: O.value,
      passive: a.modelValue === void 0
    }), I = ss({
      defaultPlaceholder: a.placeholder,
      defaultValue: T.value
    }), G = ve(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? I.copy(),
      passive: a.placeholder === void 0
    });
    function j(le) {
      G.value = le.copy();
    }
    const {
      fullCalendarLabel: W,
      headingValue: q,
      isDateDisabled: ae,
      isDateUnavailable: ce,
      isNextButtonDisabled: me,
      isPrevButtonDisabled: ke,
      weekdays: ge,
      isOutsideVisibleView: oa,
      nextPage: _t,
      prevPage: la,
      formatter: dt,
      grid: sa
    } = _s({
      locale: o,
      placeholder: G,
      weekStartsOn: u,
      fixedWeeks: p,
      numberOfMonths: h,
      minValue: m,
      maxValue: b,
      disabled: s,
      weekdayFormat: c,
      pagedNavigation: d,
      isDateDisabled: C.value,
      isDateUnavailable: D.value,
      calendarLabel: k,
      nextPage: S,
      prevPage: V
    }), {
      isInvalid: Oe,
      isDateSelected: Be
    } = rc({
      date: T,
      isDateDisabled: ae,
      isDateUnavailable: ce
    });
    ee(T, (le) => {
      if (Array.isArray(le) && le.length) {
        const $e = le[le.length - 1];
        $e && !ze(G.value, $e) && j($e);
      } else !Array.isArray(le) && le && !ze(G.value, le) && j(le);
    });
    function Ne(le) {
      if (y.value) {
        if (!T.value)
          T.value = [le.copy()];
        else if (Array.isArray(T.value)) {
          if (T.value.findIndex(($e) => we($e, le)) === -1)
            T.value = [...T.value, le];
          else if (!_.value) {
            const $e = T.value.filter((Ze) => !we(Ze, le));
            if (!$e.length) {
              G.value = le.copy(), T.value = void 0;
              return;
            }
            T.value = $e.map((Ze) => Ze.copy());
          }
        }
      } else {
        if (!T.value) {
          T.value = le.copy();
          return;
        }
        !_.value && ze(T.value, le) ? (G.value = le.copy(), T.value = void 0) : T.value = le.copy();
      }
    }
    return ie(() => {
      i.value && rs(R.value);
    }), vc({
      isDateUnavailable: ce,
      dir: B,
      isDateDisabled: ae,
      locale: o,
      formatter: dt,
      modelValue: T,
      placeholder: G,
      disabled: s,
      initialFocus: i,
      pagedNavigation: d,
      weekStartsOn: u,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: y,
      numberOfMonths: h,
      readonly: r,
      preventDeselect: _,
      fullCalendarLabel: W,
      headingValue: q,
      isInvalid: Oe,
      isDateSelected: Be,
      isNextButtonDisabled: me,
      isPrevButtonDisabled: ke,
      isOutsideVisibleView: oa,
      nextPage: _t,
      prevPage: la,
      parentElement: R,
      onPlaceholderChange: j,
      onDateChange: Ne
    }), (le, $e) => (v(), g(l(L), {
      ref_key: "primitiveElement",
      ref: F,
      as: le.as,
      "as-child": le.asChild,
      role: "application",
      "aria-label": l(W),
      "data-readonly": l(r) ? "" : void 0,
      "data-disabled": l(s) ? "" : void 0,
      "data-invalid": l(Oe) ? "" : void 0,
      dir: l(B)
    }, {
      default: f(() => [
        x(le.$slots, "default", {
          date: l(G),
          grid: l(sa),
          weekDays: l(ge),
          weekStartsOn: l(u),
          locale: l(o),
          fixedWeeks: l(p)
        }),
        de("div", pc, [
          de("div", fc, X(l(W)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), hc = /* @__PURE__ */ w({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(L), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yc = /* @__PURE__ */ w({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = Qt();
    return (n, o) => (v(), g(l(L), E(t, {
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
}), gc = /* @__PURE__ */ w({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = Qt(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), g(l(L), E(t, {
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
}), bc = /* @__PURE__ */ w({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = Qt();
    return (a, n) => {
      var o, s;
      return v(), g(l(L), {
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
}), wc = /* @__PURE__ */ w({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(L), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _c = /* @__PURE__ */ w({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = Qt();
    return (o, s) => (v(), g(l(L), {
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
}), xc = /* @__PURE__ */ w({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = Qt();
    return (o, s) => (v(), g(l(L), {
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
}), Cc = /* @__PURE__ */ w({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(L), E(t, { "aria-hidden": "true" }), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $c = /* @__PURE__ */ w({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(L), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kc = /* @__PURE__ */ w({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(L), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bc = /* @__PURE__ */ w({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = vs(), n = Qt(), { primitiveElement: o, currentElement: s } = Ot(), r = $(() => t.day.day.toLocaleString(n.locale.value)), i = $(() => n.formatter.custom(Ve(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), d = $(() => n.isDateDisabled(t.day)), u = $(
      () => {
        var k;
        return (k = n.isDateUnavailable) == null ? void 0 : k.call(n, t.day);
      }
    ), c = $(() => Rl(t.day, Bt())), p = $(() => !Il(t.day, t.month)), y = $(
      () => n.isOutsideVisibleView(t.day)
    ), m = $(() => !n.disabled.value && we(t.day, n.placeholder.value)), b = $(() => n.isDateSelected(t.day)), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function _(k) {
      var O;
      n.readonly.value || n.isDateDisabled(k) || (O = n.isDateUnavailable) != null && O.call(n, k) || n.onDateChange(k);
    }
    function C() {
      _(t.day);
    }
    function D(k) {
      k.preventDefault(), k.stopPropagation();
      const O = n.parentElement.value, S = O ? Array.from(O.querySelectorAll(h)) : [];
      let V = S.indexOf(s.value);
      const M = 7, F = n.dir.value === "rtl" ? -1 : 1;
      switch (k.code) {
        case a.ARROW_RIGHT:
          V += F;
          break;
        case a.ARROW_LEFT:
          V -= F;
          break;
        case a.ARROW_UP:
          V -= M;
          break;
        case a.ARROW_DOWN:
          V += M;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          _(t.day);
          return;
        default:
          return;
      }
      if (V >= 0 && V < S.length) {
        S[V].focus();
        return;
      }
      if (V < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), te(() => {
          const R = O ? Array.from(O.querySelectorAll(h)) : [];
          R[R.length - Math.abs(V)].focus();
        });
        return;
      }
      if (V >= S.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), te(() => {
          (O ? Array.from(O.querySelectorAll(h)) : [])[V - S.length].focus();
        });
      }
    }
    return (k, O) => (v(), g(l(L), E({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": p.value || d.value || u.value ? !0 : void 0,
      "data-selected": b.value ? !0 : void 0,
      "data-value": k.day.toString(),
      "data-disabled": d.value || p.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": c.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": y.value ? "" : void 0,
      "data-focused": m.value ? "" : void 0,
      tabindex: m.value ? 0 : p.value || d.value ? void 0 : -1,
      onClick: C,
      onKeydown: [
        Ue(D, ["up", "down", "left", "right", "space", "enter"]),
        O[0] || (O[0] = Ue(_e(() => {
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
function Ja(e) {
  return e === "indeterminate";
}
function xs(e) {
  return Ja(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Dc = ["value", "checked", "name", "disabled", "required"], [Pc, Oc] = se("CheckboxRoot"), Sc = /* @__PURE__ */ w({
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
    const a = e, n = t, { disabled: o } = ue(a), s = ve(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    }), { forwardRef: r, currentElement: i } = N(), d = ka(i), u = $(() => {
      var c;
      return a.id && i.value ? (c = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return Oc({
      disabled: o,
      state: s
    }), (c, p) => (v(), U(J, null, [
      P(l(L), E(c.$attrs, {
        id: c.id,
        ref: l(r),
        role: "checkbox",
        "as-child": a.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": l(Ja)(l(s)) ? "mixed" : l(s),
        "aria-required": !1,
        "aria-label": c.$attrs["aria-label"] || u.value,
        "data-state": l(xs)(l(s)),
        "data-disabled": l(o) ? "" : void 0,
        disabled: l(o),
        onKeydown: Ue(_e(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (y) => s.value = l(Ja)(l(s)) ? !0 : !l(s))
      }), {
        default: f(() => [
          x(c.$slots, "default", { checked: l(s) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      l(d) ? (v(), U("input", {
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
      }, null, 8, Dc)) : Q("", !0)
    ], 64));
  }
}), Ec = /* @__PURE__ */ w({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = N(), a = Pc();
    return (n, o) => (v(), g(l(Le), {
      present: n.forceMount || l(Ja)(l(a).state.value) || l(a).state.value === !0
    }, {
      default: f(() => [
        P(l(L), E({
          ref: l(t),
          "data-state": l(xs)(l(a).state.value),
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
}), [Cs, Mc] = se("PopperRoot"), Pa = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = A();
    return Mc({
      anchor: t,
      onAnchorChange: (a) => t.value = a
    }), (a, n) => x(a.$slots, "default");
  }
}), Do = /* @__PURE__ */ w({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = N(), o = Cs();
    return ye(() => {
      o.onAnchorChange(t.element ?? n.value);
    }), (s, r) => (v(), g(l(L), {
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
function Ac(e) {
  return e !== null;
}
function Tc(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var a, n, o;
      const { placement: s, rects: r, middlewareData: i } = t, d = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, u = d ? 0 : e.arrowWidth, c = d ? 0 : e.arrowHeight, [p, y] = jn(s), m = { start: "0%", center: "50%", end: "100%" }[y], b = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + u / 2, h = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + c / 2;
      let _ = "", C = "";
      return p === "bottom" ? (_ = d ? m : `${b}px`, C = `${-c}px`) : p === "top" ? (_ = d ? m : `${b}px`, C = `${r.floating.height + c}px`) : p === "right" ? (_ = `${-c}px`, C = d ? m : `${h}px`) : p === "left" && (_ = `${r.floating.width + c}px`, C = d ? m : `${h}px`), { data: { x: _, y: C } };
    }
  };
}
function jn(e) {
  const [t, a = "center"] = e.split("-");
  return [t, a];
}
const $s = {
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
}, [Wy, Vc] = se("PopperContent"), ga = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Dl({
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
    ...$s
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Cs(), { forwardRef: s, currentElement: r } = N(), i = A(), d = A(), { width: u, height: c } = fs(d), p = $(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), y = $(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = $(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), b = $(() => ({
      padding: y.value,
      boundary: m.value.filter(Ac),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), h = Jd(() => [
      Ld({
        mainAxis: a.sideOffset + c.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && nl({
        ...b.value
      }),
      a.avoidCollisions && Nd({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? Kd() : void 0,
        ...b.value
      }),
      !a.prioritizePosition && a.avoidCollisions && nl({
        ...b.value
      }),
      zd({
        ...b.value,
        apply: ({ elements: B, rects: T, availableWidth: I, availableHeight: G }) => {
          const { width: j, height: W } = T.reference, q = B.floating.style;
          q.setProperty(
            "--radix-popper-available-width",
            `${I}px`
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
      d.value && Gd({ element: d.value, padding: a.arrowPadding }),
      Tc({
        arrowWidth: u.value,
        arrowHeight: c.value
      }),
      a.hideWhenDetached && Wd({ strategy: "referenceHidden", ...b.value })
    ]), { floatingStyles: _, placement: C, isPositioned: D, middlewareData: k } = qd(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...B) => Fd(...B, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: h
      }
    ), O = $(
      () => jn(C.value)[0]
    ), S = $(
      () => jn(C.value)[1]
    );
    Sr(() => {
      D.value && n("placed");
    });
    const V = $(
      () => {
        var B;
        return ((B = k.value.arrow) == null ? void 0 : B.centerOffset) !== 0;
      }
    ), M = A("");
    ye(() => {
      r.value && (M.value = window.getComputedStyle(r.value).zIndex);
    });
    const F = $(() => {
      var B;
      return ((B = k.value.arrow) == null ? void 0 : B.x) ?? 0;
    }), R = $(() => {
      var B;
      return ((B = k.value.arrow) == null ? void 0 : B.y) ?? 0;
    });
    return Vc({
      placedSide: O,
      onArrowChange: (B) => d.value = B,
      arrowX: F,
      arrowY: R,
      shouldHideArrow: V
    }), (B, T) => {
      var I, G, j;
      return v(), U("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: qt({
          ...l(_),
          transform: l(D) ? l(_).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: M.value,
          "--radix-popper-transform-origin": [
            (I = l(k).transformOrigin) == null ? void 0 : I.x,
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
        P(l(L), E({ ref: l(s) }, B.$attrs, {
          "as-child": a.asChild,
          as: B.as,
          "data-side": O.value,
          "data-align": S.value,
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
}), cn = /* @__PURE__ */ w({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return N(), (t, a) => (v(), g(l(L), {
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
}), Ic = /* @__PURE__ */ w({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, a = $(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${o}][${t.name}][${s}]`, value: r })) : { name: `[${t.name}][${o}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, o]) => ({ name: `[${t.name}][${n}]`, value: o })) : []);
    return (n, o) => (v(!0), U(J, null, he(a.value, (s) => (v(), g(cn, {
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
}), Rc = "data-radix-vue-collection-item", [Po, Fc] = se("CollectionProvider");
function Oo(e = Rc) {
  const t = A(/* @__PURE__ */ new Map()), a = A(), n = Fc({
    collectionRef: a,
    itemMap: t,
    attrName: e
  }), { getItems: o } = Eo(n), s = $(() => Array.from(n.itemMap.value.values())), r = $(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: s, itemMapSize: r };
}
const So = w({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const a = Po(), { primitiveElement: n, currentElement: o } = Ot();
    return ee(o, () => {
      a.collectionRef.value = o.value;
    }), () => We(xo, { ref: n }, t);
  }
}), pn = w({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: a }) {
    const n = Po(), { primitiveElement: o, currentElement: s } = Ot();
    return ye((r) => {
      if (s.value) {
        const i = _r(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: e.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => We(xo, { ...a, [n.attrName]: "", ref: o }, t);
  }
});
function Eo(e) {
  const t = e ?? Po();
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
const [ea, Lc] = se("ComboboxRoot"), Nc = /* @__PURE__ */ w({
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
    const a = e, n = t, { multiple: o, disabled: s, dir: r } = ue(a), i = it(r), d = ve(a, "searchTerm", n, {
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
    async function y(W) {
      var q, ae;
      c.value = W, await te(), W ? (u.value && (Array.isArray(u.value) && o.value ? p.value = (q = k().find((ce) => {
        var me, ke;
        return ((ke = (me = ce.ref) == null ? void 0 : me.dataset) == null ? void 0 : ke.state) === "checked";
      })) == null ? void 0 : q.value : p.value = u.value), await te(), (ae = h.value) == null || ae.focus(), G()) : (b.value = !1, a.resetSearchTermOnBlur && F());
    }
    function m(W) {
      if (Array.isArray(u.value) && o.value) {
        const q = u.value.findIndex((ce) => Ct(ce, W)), ae = [...u.value];
        q === -1 ? ae.push(W) : ae.splice(q, 1), u.value = ae;
      } else
        u.value = W, y(!1);
    }
    const b = A(!1), h = A(), _ = A(), { forwardRef: C, currentElement: D } = N(), { getItems: k, reactiveItems: O, itemMapSize: S } = Oo("data-radix-vue-combobox-item"), V = A([]);
    ee(() => S.value, () => {
      V.value = k().map((W) => W.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const M = $(() => {
      if (b.value) {
        if (a.filterFunction)
          return a.filterFunction(V.value, d.value);
        const W = V.value.filter((q) => typeof q == "string");
        if (W.length)
          return W.filter((q) => {
            var ae;
            return q.toLowerCase().includes((ae = d.value) == null ? void 0 : ae.toLowerCase());
          });
      }
      return V.value;
    });
    function F() {
      !o.value && u.value && !Array.isArray(u.value) ? a.displayValue ? d.value = a.displayValue(u.value) : typeof u.value != "object" ? d.value = u.value.toString() : d.value = "" : d.value = "";
    }
    const R = $(() => M.value.findIndex((W) => Ct(W, p.value))), B = $(() => {
      var W;
      return (W = O.value.find((q) => Ct(q.value, p.value))) == null ? void 0 : W.ref;
    }), T = $(() => JSON.stringify(u.value));
    ee(T, async () => {
      await te(), await te(), F();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), ee(() => [M.value.length, d.value.length], async ([W, q], [ae, ce]) => {
      await te(), await te(), W && (ce > q || R.value === -1) && (p.value = M.value[0]);
    });
    const I = ka(D);
    function G() {
      var W;
      B.value instanceof Element && ((W = B.value) == null || W.scrollIntoView({ block: "nearest" }));
    }
    function j() {
      B.value instanceof Element && B.value.focus && B.value.focus();
    }
    return Lc({
      searchTerm: d,
      modelValue: u,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: b,
      multiple: o,
      disabled: s,
      open: c,
      onOpenChange: y,
      filteredOptions: M,
      contentId: "",
      inputElement: h,
      selectedElement: B,
      onInputElementChange: (W) => h.value = W,
      onInputNavigation: async (W) => {
        const q = R.value;
        q === 0 && W === "up" || q === M.value.length - 1 && W === "down" || (q === -1 && M.value.length || W === "home" ? p.value = M.value[0] : W === "end" ? p.value = M.value[M.value.length - 1] : p.value = M.value[W === "up" ? q - 1 : q + 1], await te(), G(), j(), te(() => {
          var ae;
          return (ae = h.value) == null ? void 0 : ae.focus({ preventScroll: !0 });
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
    }), (W, q) => (v(), g(l(Pa), null, {
      default: f(() => [
        P(l(L), E({
          ref: l(C),
          style: {
            pointerEvents: l(c) ? "auto" : void 0
          },
          as: W.as,
          "as-child": W.asChild,
          dir: l(i)
        }, W.$attrs), {
          default: f(() => [
            x(W.$slots, "default", {
              open: l(c),
              modelValue: l(u)
            }),
            l(I) && a.name ? (v(), g(l(Ic), {
              key: 0,
              name: a.name,
              value: l(u)
            }, null, 8, ["name", "value"])) : Q("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), zc = /* @__PURE__ */ w({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, a = ea(), { forwardRef: n, currentElement: o } = N();
    ie(() => {
      const c = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      c && (a.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const s = $(() => t.disabled || a.disabled.value || !1), r = A();
    xr(() => {
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
    return (c, p) => (v(), g(l(L), {
      ref: l(n),
      as: c.as,
      "as-child": c.asChild,
      type: c.type,
      disabled: s.value,
      value: l(a).searchTerm.value,
      "aria-expanded": l(a).open.value,
      "aria-controls": l(a).contentId,
      "aria-disabled": s.value ?? void 0,
      "aria-activedescendant": r.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: u,
      onKeydown: [
        Ue(_e(i, ["prevent"]), ["down", "up"]),
        Ue(l(a).onInputEnter, ["enter"]),
        Ue(_e(d, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: f(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), [ks, Wc] = se("ComboboxGroup"), Uc = /* @__PURE__ */ w({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: a, currentElement: n } = N(), o = xe(void 0, "radix-vue-combobox-group"), s = ea(), r = A(!1);
    function i() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!d.length;
    }
    return pu(n, () => {
      te(() => {
        i();
      });
    }, { childList: !0 }), ee(() => s.searchTerm.value, () => {
      te(() => {
        i();
      });
    }, { immediate: !0 }), Wc({
      id: o
    }), (d, u) => Gt((v(), g(l(L), E(t, {
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
      [Jn, r.value]
    ]);
  }
}), Kc = /* @__PURE__ */ w({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    N();
    const a = ks({ id: "" });
    return (n, o) => (v(), g(l(L), E(t, {
      id: l(a).id
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Uy, jc] = se("ComboboxContent"), Hc = /* @__PURE__ */ w({
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
    const a = e, n = t, { position: o } = ue(a), s = ea();
    $a(a.bodyLock);
    const { forwardRef: r, currentElement: i } = N();
    Ba(s.parentElement);
    const d = $(() => a.position === "popper" ? a : {}), u = ne(d.value);
    function c(y) {
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
    return jc({ position: o }), (y, m) => (v(), g(l(So), null, {
      default: f(() => [
        y.dismissable ? (v(), g(l(Da), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": y.disableOutsidePointerEvents,
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
            (v(), g(Ie(l(o) === "popper" ? l(ga) : l(L)), E({ ...y.$attrs, ...l(u) }, {
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
              onPointerleave: c
            }), {
              default: f(() => [
                x(y.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (v(), g(Ie(l(o) === "popper" ? l(ga) : l(L)), E({ key: 1 }, { ...y.$attrs, ...d.value }, {
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
          onPointerleave: c
        }), {
          default: f(() => [
            x(y.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Gc = /* @__PURE__ */ w({
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
    const a = oe(e, t), { forwardRef: n } = N(), o = ea();
    return o.contentId || (o.contentId = xe(void 0, "radix-vue-combobox-content")), (s, r) => (v(), g(l(Le), {
      present: s.forceMount || l(o).open.value
    }, {
      default: f(() => [
        P(Hc, E({ ...l(a), ...s.$attrs }, { ref: l(n) }), {
          default: f(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), qc = /* @__PURE__ */ w({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    N();
    const a = ea(), n = $(() => a.filteredOptions.value.length === 0);
    return (o, s) => n.value ? (v(), g(l(L), K(E({ key: 0 }, t)), {
      default: f(() => [
        x(o.$slots, "default", {}, () => [
          Y("No options")
        ])
      ]),
      _: 3
    }, 16)) : Q("", !0);
  }
});
function Yc(e) {
  const t = rn({
    nonce: A()
  });
  return $(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.nonce) == null ? void 0 : a.value);
  });
}
const [Ky, Xc] = se("ComboboxItem"), Zc = "combobox.select", Jc = /* @__PURE__ */ w({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { disabled: o } = ue(a), s = ea();
    ks({ id: "", options: A([]) });
    const { forwardRef: r } = N(), i = $(
      () => {
        var h, _;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (h = s.modelValue.value) == null ? void 0 : h.some((C) => Ct(C, a.value)) : Ct((_ = s.modelValue) == null ? void 0 : _.value, a.value);
      }
    ), d = $(() => Ct(s.selectedValue.value, a.value)), u = xe(void 0, "radix-vue-combobox-item"), c = xe(void 0, "radix-vue-combobox-option"), p = $(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((h) => Ct(h, a.value)) : !0);
    async function y(h) {
      n("select", h), !(h != null && h.defaultPrevented) && !o.value && h && s.onValueChange(a.value);
    }
    function m(h) {
      if (!h)
        return;
      const _ = { originalEvent: h, value: a.value };
      yo(Zc, y, _);
    }
    async function b(h) {
      await te(), !h.defaultPrevented && s.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Xc({
      isSelected: i
    }), (h, _) => (v(), g(l(pn), { value: h.value }, {
      default: f(() => [
        Gt(P(l(L), {
          id: l(c),
          ref: l(r),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": l(u),
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
          [Jn, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Qc = /* @__PURE__ */ w({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), g(l(L), E(t, { "aria-hidden": "true" }), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bs = /* @__PURE__ */ w({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(Do), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ep() {
  const e = A(!1);
  return ie(() => {
    Xa("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Xa(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const tp = is(ep), [St, Ds] = se(["MenuRoot", "MenuSub"], "MenuContext"), [Oa, ap] = se("MenuRoot"), np = /* @__PURE__ */ w({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o, dir: s } = ue(a), r = it(s), i = ve(a, "open", n), d = A(), u = tp();
    return Ds({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: d,
      onContentChange: (c) => {
        d.value = c;
      }
    }), ap({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: u,
      dir: r,
      modal: o
    }), (c, p) => (v(), g(l(Pa), null, {
      default: f(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), op = "rovingFocusGroup.onEntryFocus", lp = { bubbles: !1, cancelable: !0 }, sp = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function rp(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function ip(e, t, a) {
  const n = rp(e.key, a);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return sp[n];
}
function Ps(e, t = !1, a) {
  const n = (a == null ? void 0 : a.activeElement) ?? document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n))
      return;
}
function dp(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
const [up, cp] = se("RovingFocusGroup"), Os = /* @__PURE__ */ w({
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
    const n = e, o = a, { loop: s, orientation: r, dir: i } = ue(n), d = it(i), u = ve(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = A(!1), p = A(!1), y = A(0), { getItems: m } = Oo();
    function b(_) {
      const C = !p.value;
      if (_.currentTarget && _.target === _.currentTarget && C && !c.value) {
        const D = new CustomEvent(op, lp);
        if (_.currentTarget.dispatchEvent(D), o("entryFocus", D), !D.defaultPrevented) {
          const k = m().map((M) => M.ref).filter((M) => M.dataset.disabled !== ""), O = k.find((M) => M.getAttribute("data-active") === "true"), S = k.find(
            (M) => M.id === u.value
          ), V = [O, S, ...k].filter(
            Boolean
          );
          Ps(V, n.preventScrollOnEntryFocus);
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
    }), cp({
      loop: s,
      dir: d,
      orientation: r,
      currentTabStopId: u,
      onItemFocus: (_) => {
        u.value = _;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        y.value++;
      },
      onFocusableItemRemove: () => {
        y.value--;
      }
    }), (_, C) => (v(), g(l(So), null, {
      default: f(() => [
        P(l(L), {
          tabindex: c.value || y.value === 0 ? -1 : 0,
          "data-orientation": l(r),
          as: _.as,
          "as-child": _.asChild,
          dir: l(d),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (D) => p.value = !0),
          onMouseup: h,
          onFocus: b,
          onBlur: C[1] || (C[1] = (D) => c.value = !1)
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
}), pp = /* @__PURE__ */ w({
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
    const t = e, a = up(), n = $(() => t.tabStopId || xe()), o = $(
      () => a.currentTabStopId.value === n.value
    ), { getItems: s } = Eo(), { primitiveElement: r, currentElement: i } = Ot(), d = $(() => {
      var c;
      return (c = i.value) == null ? void 0 : c.getRootNode();
    });
    ie(() => {
      t.focusable && a.onFocusableItemAdd();
    }), bt(() => {
      t.focusable && a.onFocusableItemRemove();
    });
    function u(c) {
      if (c.key === "Tab" && c.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (c.target !== c.currentTarget)
        return;
      const p = ip(
        c,
        a.orientation.value,
        a.dir.value
      );
      if (p !== void 0) {
        if (c.metaKey || c.ctrlKey || c.altKey || !t.allowShiftKey && c.shiftKey)
          return;
        c.preventDefault();
        let y = [...s().map((m) => m.ref).filter((m) => m.dataset.disabled !== "")];
        if (p === "last")
          y.reverse();
        else if (p === "prev" || p === "next") {
          p === "prev" && y.reverse();
          const m = y.indexOf(
            c.currentTarget
          );
          y = a.loop.value ? dp(y, m + 1) : y.slice(m + 1);
        }
        te(() => Ps(y, !1, d.value));
      }
    }
    return (c, p) => (v(), g(l(pn), null, {
      default: f(() => [
        P(l(L), {
          ref_key: "primitiveElement",
          ref: r,
          tabindex: o.value ? 0 : -1,
          "data-orientation": l(a).orientation.value,
          "data-active": c.active,
          "data-disabled": c.focusable ? void 0 : "",
          as: c.as,
          "as-child": c.asChild,
          onMousedown: p[0] || (p[0] = (y) => {
            c.focusable ? l(a).onItemFocus(n.value) : y.preventDefault();
          }),
          onFocus: p[1] || (p[1] = (y) => l(a).onItemFocus(n.value)),
          onKeydown: u
        }, {
          default: f(() => [
            x(c.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [Mo, fp] = se("MenuContent"), Ao = /* @__PURE__ */ w({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Dl({
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
    ...$s
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = St(), s = Oa(), { trapFocus: r, disableOutsidePointerEvents: i, loop: d } = ue(a);
    wo(), $a(i.value);
    const u = A(""), c = A(0), p = A(0), y = A(null), m = A("right"), b = A(0), h = A(null), { createCollection: _ } = Jt(), { forwardRef: C, currentElement: D } = N(), k = _(D);
    ee(D, (B) => {
      o.onContentChange(B);
    });
    const { handleTypeaheadSearch: O } = _o(k);
    bt(() => {
      window.clearTimeout(c.value);
    });
    function S(B) {
      var T, I;
      return m.value === ((T = y.value) == null ? void 0 : T.side) && Ju(B, (I = y.value) == null ? void 0 : I.area);
    }
    async function V(B) {
      var T;
      n("openAutoFocus", B), !B.defaultPrevented && (B.preventDefault(), (T = D.value) == null || T.focus({
        preventScroll: !0
      }));
    }
    function M(B) {
      if (B.defaultPrevented)
        return;
      const T = B.target.closest("[data-radix-menu-content]") === B.currentTarget, I = B.ctrlKey || B.altKey || B.metaKey, G = B.key.length === 1, j = mu(
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
      if (B.code === "Space" || (T && (B.key === "Tab" && B.preventDefault(), !I && G && O(B.key)), B.target !== D.value) || !qu.includes(B.key))
        return;
      B.preventDefault();
      const W = k.value;
      ys.includes(B.key) && W.reverse(), Kn(W);
    }
    function F(B) {
      var T, I;
      (I = (T = B == null ? void 0 : B.currentTarget) == null ? void 0 : T.contains) != null && I.call(T, B.target) || (window.clearTimeout(c.value), u.value = "");
    }
    function R(B) {
      var T;
      if (!ya(B))
        return;
      const I = B.target, G = b.value !== B.clientX;
      if ((T = B == null ? void 0 : B.currentTarget) != null && T.contains(I) && G) {
        const j = B.clientX > b.value ? "right" : "left";
        m.value = j, b.value = B.clientX;
      }
    }
    return fp({
      onItemEnter: (B) => !!S(B),
      onItemLeave: (B) => {
        var T;
        S(B) || ((T = D.value) == null || T.focus(), h.value = null);
      },
      onTriggerLeave: (B) => !!S(B),
      searchRef: u,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (B) => {
        y.value = B;
      }
    }), (B, T) => (v(), g(l(un), {
      "as-child": "",
      trapped: l(r),
      onMountAutoFocus: V,
      onUnmountAutoFocus: T[7] || (T[7] = (I) => n("closeAutoFocus", I))
    }, {
      default: f(() => [
        P(l(Da), {
          "as-child": "",
          "disable-outside-pointer-events": l(i),
          onEscapeKeyDown: T[2] || (T[2] = (I) => n("escapeKeyDown", I)),
          onPointerDownOutside: T[3] || (T[3] = (I) => n("pointerDownOutside", I)),
          onFocusOutside: T[4] || (T[4] = (I) => n("focusOutside", I)),
          onInteractOutside: T[5] || (T[5] = (I) => n("interactOutside", I)),
          onDismiss: T[6] || (T[6] = (I) => n("dismiss"))
        }, {
          default: f(() => [
            P(l(Os), {
              "current-tab-stop-id": h.value,
              "onUpdate:currentTabStopId": T[0] || (T[0] = (I) => h.value = I),
              "as-child": "",
              orientation: "vertical",
              dir: l(s).dir.value,
              loop: l(d),
              onEntryFocus: T[1] || (T[1] = (I) => {
                n("entryFocus", I), l(s).isUsingKeyboardRef.value || I.preventDefault();
              })
            }, {
              default: f(() => [
                P(l(ga), {
                  ref: l(C),
                  role: "menu",
                  as: B.as,
                  "as-child": B.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l($o)(l(o).open.value),
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
                  onBlur: F,
                  onPointermove: R
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
}), Ss = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Mo(), { forwardRef: n } = N(), o = A(!1);
    async function s(i) {
      if (!i.defaultPrevented && ya(i)) {
        if (t.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function r(i) {
      await te(), !i.defaultPrevented && ya(i) && a.onItemLeave(i);
    }
    return (i, d) => (v(), g(l(pn), null, {
      default: f(() => [
        P(l(L), E({
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
          onFocus: d[0] || (d[0] = async (u) => {
            await te(), !(u.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: d[1] || (d[1] = async (u) => {
            await te(), !u.defaultPrevented && (o.value = !1);
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
}), To = /* @__PURE__ */ w({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: s } = N(), r = Oa(), i = Mo(), d = A(!1);
    async function u() {
      const c = s.value;
      if (!a.disabled && c) {
        const p = new CustomEvent(Hu, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await te(), p.defaultPrevented ? d.value = !1 : r.onClose();
      }
    }
    return (c, p) => (v(), g(Ss, E(a, {
      ref: l(o),
      onClick: u,
      onPointerdown: p[0] || (p[0] = () => {
        d.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (y) => {
        var m;
        await te(), !y.defaultPrevented && (d.value || (m = y.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (y) => {
        const m = l(i).searchRef.value !== "";
        c.disabled || m && y.key === " " || l(Un).includes(y.key) && (y.currentTarget.click(), y.preventDefault());
      })
    }), {
      default: f(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [vp, Es] = se(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), mp = /* @__PURE__ */ w({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = vp({
      checked: A(!1)
    });
    return (a, n) => (v(), g(l(Le), {
      present: a.forceMount || l(Za)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: f(() => [
        P(l(L), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": l(ko)(l(t).checked.value)
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
}), hp = /* @__PURE__ */ w({
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
    return Es({ checked: o }), (s, r) => (v(), g(To, E({ role: "menuitemcheckbox" }, a, {
      "aria-checked": l(Za)(l(o)) ? "mixed" : l(o),
      "data-state": l(ko)(l(o)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), l(Za)(l(o)) ? o.value = !0 : o.value = !l(o);
      })
    }), {
      default: f(() => [
        x(s.$slots, "default", { checked: l(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), yp = /* @__PURE__ */ w({
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
    const a = e, n = t, o = oe(a, n), s = St(), { forwardRef: r, currentElement: i } = N();
    return Ba(i), (d, u) => (v(), g(Ao, E(l(o), {
      ref: l(r),
      "trap-focus": l(s).open.value,
      "disable-outside-pointer-events": l(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: u[0] || (u[0] = (c) => l(s).onOpenChange(!1)),
      onFocusOutside: u[1] || (u[1] = _e((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: f(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), gp = /* @__PURE__ */ w({
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
    const a = oe(e, t), n = St();
    return (o, s) => (v(), g(Ao, E(l(a), {
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
}), bp = /* @__PURE__ */ w({
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
    const a = oe(e, t), n = St(), o = Oa();
    return (s, r) => (v(), g(l(Le), {
      present: s.forceMount || l(n).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), g(yp, K(E({ key: 0 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), g(gp, K(E({ key: 1 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ms = /* @__PURE__ */ w({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(L), E({ role: "group" }, t), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wp = /* @__PURE__ */ w({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(L), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _p = /* @__PURE__ */ w({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(dn), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [xp, Cp] = se("MenuRadioGroup"), $p = /* @__PURE__ */ w({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = ve(a, "modelValue", t);
    return Cp({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, s) => (v(), g(Ms, K(H(a)), {
      default: f(() => [
        x(o.$slots, "default", { modelValue: l(n) })
      ]),
      _: 3
    }, 16));
  }
}), kp = /* @__PURE__ */ w({
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
    const a = e, n = t, { value: o } = ue(a), s = xp(), r = $(
      () => s.modelValue.value === (o == null ? void 0 : o.value)
    );
    return Es({ checked: r }), (i, d) => (v(), g(To, E({ role: "menuitemradio" }, a, {
      "aria-checked": r.value,
      "data-state": l(ko)(r.value),
      onSelect: d[0] || (d[0] = async (u) => {
        n("select", u), l(s).onValueChange(l(o));
      })
    }), {
      default: f(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Bp = /* @__PURE__ */ w({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(L), E(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [As, Dp] = se("MenuSub"), Pp = /* @__PURE__ */ w({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = ve(a, "open", t, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = St(), s = A(), r = A();
    return ye((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), Ds({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: r,
      onContentChange: (i) => {
        r.value = i;
      }
    }), Dp({
      triggerId: "",
      contentId: "",
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, d) => (v(), g(l(Pa), null, {
      default: f(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Op = /* @__PURE__ */ w({
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
    const a = oe(e, t), n = St(), o = Oa(), s = As(), { forwardRef: r, currentElement: i } = N();
    return s.contentId || (s.contentId = xe(void 0, "radix-vue-menu-sub-content")), (d, u) => (v(), g(l(Le), {
      present: d.forceMount || l(n).open.value
    }, {
      default: f(() => [
        P(Ao, E(l(a), {
          id: l(s).contentId,
          ref: l(r),
          "aria-labelledby": l(s).triggerId,
          align: "start",
          side: l(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: u[0] || (u[0] = _e((c) => {
            var p;
            l(o).isUsingKeyboardRef.value && ((p = l(i)) == null || p.focus());
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
            var p, y;
            const m = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), b = l(Xu)[l(o).dir.value].includes(c.key);
            m && b && (l(n).onOpenChange(!1), (y = l(s).trigger.value) == null || y.focus(), c.preventDefault());
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
}), Sp = /* @__PURE__ */ w({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = St(), n = Oa(), o = As(), s = Mo(), r = A(null);
    o.triggerId || (o.triggerId = xe(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    bt(() => {
      i();
    });
    function d(p) {
      !ya(p) || s.onItemEnter(p) || !t.disabled && !a.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function u(p) {
      var y, m;
      if (!ya(p))
        return;
      i();
      const b = (y = a.content.value) == null ? void 0 : y.getBoundingClientRect();
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
    async function c(p) {
      var y;
      const m = s.searchRef.value !== "";
      t.disabled || m && p.key === " " || Yu[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await te(), (y = a.content.value) == null || y.focus(), p.preventDefault());
    }
    return (p, y) => (v(), g(Bs, { "as-child": "" }, {
      default: f(() => [
        P(Ss, E(t, {
          id: l(o).triggerId,
          ref: (m) => {
            var b;
            (b = l(o)) == null || b.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(a).open.value,
          "aria-controls": l(o).contentId,
          "data-state": l($o)(l(a).open.value),
          onClick: y[0] || (y[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), l(a).open.value || l(a).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: u,
          onKeydown: c
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
}), [Ts, Ep] = se("DropdownMenuRoot"), Mp = /* @__PURE__ */ w({
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
    }), s = A(), { modal: r, dir: i } = ue(a), d = it(i);
    return Ep({
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
      modal: r,
      dir: d
    }), (u, c) => (v(), g(l(np), {
      open: l(o),
      "onUpdate:open": c[0] || (c[0] = (p) => wa(o) ? o.value = p : null),
      dir: l(d),
      modal: l(r)
    }, {
      default: f(() => [
        x(u.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Ap = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ts(), { forwardRef: n, currentElement: o } = N();
    return ie(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = xe(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (v(), g(l(Bs), { "as-child": "" }, {
      default: f(() => [
        P(l(L), {
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
            !s.disabled && i.button === 0 && i.ctrlKey === !1 && ((d = l(a)) == null || d.onOpenToggle(), await te(), l(a).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = Ue(
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
}), Tp = /* @__PURE__ */ w({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(_p), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vp = /* @__PURE__ */ w({
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
    const a = oe(e, t);
    N();
    const n = Ts(), o = A(!1);
    function s(r) {
      r.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, r.preventDefault());
    }
    return n.contentId || (n.contentId = xe(void 0, "radix-vue-dropdown-menu-content")), (r, i) => {
      var d;
      return v(), g(l(bp), E(l(a), {
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
        onInteractOutside: i[0] || (i[0] = (u) => {
          var c;
          if (u.defaultPrevented) return;
          const p = u.detail.originalEvent, y = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || y;
          (!l(n).modal.value || m) && (o.value = !0), (c = l(n).triggerElement.value) != null && c.contains(u.target) && u.preventDefault();
        })
      }), {
        default: f(() => [
          x(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Vs = /* @__PURE__ */ w({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = Pt(t);
    return N(), (o, s) => (v(), g(l(To), K(H({ ...a, ...l(n) })), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ip = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), g(l(Ms), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rp = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), g(l(Bp), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fp = /* @__PURE__ */ w({
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
    const a = e, n = Pt(t);
    return N(), (o, s) => (v(), g(l(hp), K(H({ ...a, ...l(n) })), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Is = /* @__PURE__ */ w({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), g(l(mp), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lp = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), g(l(wp), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Np = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = Pt(t);
    return N(), (o, s) => (v(), g(l($p), K(H({ ...a, ...l(n) })), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zp = /* @__PURE__ */ w({
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
    const a = oe(e, t);
    return N(), (n, o) => (v(), g(l(kp), K(H(l(a))), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wp = /* @__PURE__ */ w({
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
    return N(), (o, s) => (v(), g(l(Pp), {
      open: l(n),
      "onUpdate:open": s[0] || (s[0] = (r) => wa(n) ? n.value = r : null)
    }, {
      default: f(() => [
        x(o.$slots, "default", { open: l(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Up = /* @__PURE__ */ w({
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
    const a = oe(e, t);
    return N(), (n, o) => (v(), g(l(Op), E(l(a), { style: {
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
}), Kp = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), g(l(Sp), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jp = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), g(l(L), E(t, {
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
}), [ta, Hp] = se("PaginationRoot"), Gp = /* @__PURE__ */ w({
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
    const a = e, n = t, { siblingCount: o, disabled: s, showEdges: r } = ue(a);
    N();
    const i = ve(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), d = $(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return Hp({
      page: i,
      onPageChange(u) {
        i.value = u;
      },
      pageCount: d,
      siblingCount: o,
      disabled: s,
      showEdges: r
    }), (u, c) => (v(), g(l(L), {
      as: u.as,
      "as-child": u.asChild
    }, {
      default: f(() => [
        x(u.$slots, "default", {
          page: l(i),
          pageCount: d.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), qp = /* @__PURE__ */ w({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), g(l(L), E(t, { "data-type": "ellipsis" }), {
      default: f(() => [
        x(a.$slots, "default", {}, () => [
          Y("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), Yp = /* @__PURE__ */ w({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = ta();
    return N(), (n, o) => (v(), g(l(L), E(t, {
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
}), Xp = /* @__PURE__ */ w({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = ta();
    return N(), (n, o) => (v(), g(l(L), E(t, {
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
function Zp(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const Ra = "ellipsis";
function Jp(e, t, a, n) {
  const o = t, s = Math.max(e - a, 1), r = Math.min(e + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, t) - 2, d = s > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(s - 1) > 2, u = r < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - r) > 2;
    if (!d && u)
      return [...ft(1, i), Ra, o];
    if (d && !u) {
      const c = ft(o - i + 1, o);
      return [1, Ra, ...c];
    }
    if (d && u) {
      const c = ft(s, r);
      return [1, Ra, ...c, Ra, o];
    }
    return ft(1, o);
  } else {
    const i = a * 2 + 1;
    return t < i ? ft(1, o) : e <= a + 1 ? ft(1, i) : t - e <= a ? ft(t - i + 1, o) : ft(s, r);
  }
}
const Qp = /* @__PURE__ */ w({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    N();
    const a = ta(), n = $(() => Zp(
      Jp(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, s) => (v(), g(l(L), K(H(t)), {
      default: f(() => [
        x(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), jy = /* @__PURE__ */ w({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const a = ta(), n = $(() => a.page.value === t.value);
    return (o, s) => (v(), g(l(L), E(t, {
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
}), ef = /* @__PURE__ */ w({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const a = ta();
    return (n, o) => (v(), g(l(L), E(t, {
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
}), tf = /* @__PURE__ */ w({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const a = ta();
    return (n, o) => {
      var s;
      return v(), g(l(L), E(t, {
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
}), [Sa, af] = se("PopoverRoot"), nf = /* @__PURE__ */ w({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o } = ue(a), s = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = A(), i = A(!1);
    return af({
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
    }), (d, u) => (v(), g(l(Pa), null, {
      default: f(() => [
        x(d.$slots, "default", { open: l(s) })
      ]),
      _: 3
    }));
  }
}), of = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Sa(), { forwardRef: n, currentElement: o } = N();
    return ie(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), g(Ie(l(a).hasCustomAnchor.value ? l(L) : l(Do)), { "as-child": "" }, {
      default: f(() => [
        P(l(L), {
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
}), lf = /* @__PURE__ */ w({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(dn), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rs = /* @__PURE__ */ w({
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
    const a = e, n = t, o = ne(a), { forwardRef: s } = N(), r = Sa();
    return wo(), (i, d) => (v(), g(l(un), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: f(() => [
        P(l(Da), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (u) => n("pointerDownOutside", u)),
          onInteractOutside: d[1] || (d[1] = (u) => n("interactOutside", u)),
          onEscapeKeyDown: d[2] || (d[2] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[3] || (d[3] = (u) => n("focusOutside", u)),
          onDismiss: d[4] || (d[4] = (u) => l(r).onOpenChange(!1))
        }, {
          default: f(() => [
            P(l(ga), E(l(o), {
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
}), sf = /* @__PURE__ */ w({
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
    const a = e, n = t, o = Sa(), s = A(!1);
    $a(!0);
    const r = oe(a, n), { forwardRef: i, currentElement: d } = N();
    return Ba(d), (u, c) => (v(), g(Rs, E(l(r), {
      ref: l(i),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = _e(
        (p) => {
          var y;
          n("closeAutoFocus", p), s.value || (y = l(o).triggerElement.value) == null || y.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        n("pointerDownOutside", p);
        const y = p.detail.originalEvent, m = y.button === 0 && y.ctrlKey === !0, b = y.button === 2 || m;
        s.value = b;
      }),
      onFocusOutside: c[2] || (c[2] = _e(() => {
      }, ["prevent"]))
    }), {
      default: f(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), rf = /* @__PURE__ */ w({
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
    const a = e, n = t, o = Sa(), s = A(!1), r = A(!1), i = oe(a, n);
    return (d, u) => (v(), g(Rs, E(l(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (s.value || (p = l(o).triggerElement.value) == null || p.focus(), c.preventDefault()), s.value = !1, r.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = async (c) => {
        var p;
        n("interactOutside", c), c.defaultPrevented || (s.value = !0, c.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const y = c.target;
        (p = l(o).triggerElement.value) != null && p.contains(y) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && r.value && c.preventDefault();
      })
    }), {
      default: f(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), df = /* @__PURE__ */ w({
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
    const a = e, n = t, o = Sa(), s = oe(a, n), { forwardRef: r } = N();
    return o.contentId || (o.contentId = xe(void 0, "radix-vue-popover-content")), (i, d) => (v(), g(l(Le), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), g(sf, E({ key: 0 }, l(s), { ref: l(r) }), {
          default: f(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), g(rf, E({ key: 1 }, l(s), { ref: l(r) }), {
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
function uf(e) {
  const t = $(() => e.start.value ? !!e.isDateDisabled(e.start.value) : !1), a = $(() => e.end.value ? !!e.isDateDisabled(e.end.value) : !1), n = $(
    () => t.value || a.value ? !1 : !!(e.start.value && e.end.value && mt(e.end.value, e.start.value))
  ), o = (d) => e.start.value ? we(e.start.value, d) : !1, s = (d) => e.end.value ? we(e.end.value, d) : !1, r = (d) => e.start.value && we(e.start.value, d) || e.end.value && we(e.end.value, d) ? !0 : e.end.value && e.start.value ? ed(d, e.start.value, e.end.value) : !1, i = $(() => {
    if (e.start.value && e.end.value || !e.start.value || !e.focusedValue.value)
      return null;
    const d = mt(e.start.value, e.focusedValue.value), u = d ? e.start.value : e.focusedValue.value, c = d ? e.focusedValue.value : e.start.value;
    return we(u.add({ days: 1 }), c) ? {
      start: u,
      end: c
    } : nd(u, c, e.isDateUnavailable, e.isDateDisabled) ? {
      start: u,
      end: c
    } : null;
  });
  return {
    isInvalid: n,
    isSelected: r,
    highlightedRange: i,
    isSelectionStart: o,
    isSelectionEnd: s,
    isHighlightedStart: (d) => !i.value || !i.value.start ? !1 : we(i.value.start, d),
    isHighlightedEnd: (d) => !i.value || !i.value.end ? !1 : we(i.value.end, d)
  };
}
const cf = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, pf = {
  role: "heading",
  "aria-level": "2"
}, [aa, ff] = se("RangeCalendarRoot"), vf = /* @__PURE__ */ w({
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
      weekdayFormat: u,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: y,
      isDateUnavailable: m,
      isDateDisabled: b,
      calendarLabel: h,
      maxValue: _,
      minValue: C,
      locale: D,
      dir: k,
      nextPage: O,
      prevPage: S
    } = ue(a), { primitiveElement: V, currentElement: M } = Ot(), F = it(k), R = A(), B = A(), T = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), I = ss({
      defaultPlaceholder: a.placeholder,
      defaultValue: T.value.start
    }), G = A(T.value.start), j = A(T.value.end), W = ve(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? I.copy(),
      passive: a.placeholder === void 0
    });
    function q(pe) {
      W.value = pe.copy();
    }
    const {
      fullCalendarLabel: ae,
      headingValue: ce,
      isDateDisabled: me,
      isDateUnavailable: ke,
      isNextButtonDisabled: ge,
      isPrevButtonDisabled: oa,
      grid: _t,
      weekdays: la,
      isOutsideVisibleView: dt,
      nextPage: sa,
      prevPage: Oe,
      formatter: Be
    } = _s({
      locale: D,
      placeholder: W,
      weekStartsOn: d,
      fixedWeeks: c,
      numberOfMonths: p,
      minValue: C,
      maxValue: _,
      disabled: o,
      weekdayFormat: u,
      pagedNavigation: i,
      isDateDisabled: b.value,
      isDateUnavailable: m.value,
      calendarLabel: h,
      nextPage: O,
      prevPage: S
    }), {
      isInvalid: Ne,
      isSelected: le,
      highlightedRange: $e,
      isSelectionStart: Ze,
      isSelectionEnd: ra,
      isHighlightedStart: yr,
      isHighlightedEnd: gr
    } = uf({
      start: G,
      end: j,
      isDateDisabled: me,
      isDateUnavailable: ke,
      focusedValue: B
    });
    return ee(T, (pe) => {
      pe.start && (!G.value || !ze(G.value, pe.start)) && (G.value = pe.start.copy()), pe.end && (!j.value || !ze(j.value, pe.end)) && (j.value = pe.end.copy());
    }), ee(G, (pe) => {
      pe && !ze(pe, W.value) && q(pe), n("update:startValue", pe);
    }), ee([G, j], ([pe, ut]) => {
      const Me = T.value;
      if (!(Me && Me.start && Me.end && pe && ut && ze(Me.start, pe) && ze(Me.end, ut)))
        if (pe && ut) {
          if (Me.start && Me.end && ze(Me.start, pe) && ze(Me.end, ut))
            return;
          mt(ut, pe) ? T.value = {
            start: ut.copy(),
            end: pe.copy()
          } : T.value = {
            start: pe.copy(),
            end: ut.copy()
          };
        } else Me.start && Me.end && (T.value = {
          start: void 0,
          end: void 0
        });
    }), ff({
      isDateUnavailable: ke,
      startValue: G,
      endValue: j,
      formatter: Be,
      modelValue: T,
      placeholder: W,
      disabled: o,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: d,
      weekdayFormat: u,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: s,
      preventDeselect: y,
      fullCalendarLabel: ae,
      headingValue: ce,
      isInvalid: Ne,
      isDateDisabled: me,
      highlightedRange: $e,
      focusedValue: B,
      lastPressedDateValue: R,
      isSelected: le,
      isSelectionEnd: ra,
      isSelectionStart: Ze,
      isNextButtonDisabled: ge,
      isPrevButtonDisabled: oa,
      isOutsideVisibleView: dt,
      nextPage: sa,
      prevPage: Oe,
      parentElement: M,
      onPlaceholderChange: q,
      locale: D,
      dir: F,
      isHighlightedStart: yr,
      isHighlightedEnd: gr
    }), ie(() => {
      r.value && rs(M.value);
    }), (pe, ut) => (v(), g(l(L), {
      ref_key: "primitiveElement",
      ref: V,
      as: pe.as,
      "as-child": pe.asChild,
      role: "application",
      "aria-label": l(ae),
      "data-readonly": l(s) ? "" : void 0,
      "data-disabled": l(o) ? "" : void 0,
      "data-invalid": l(Ne) ? "" : void 0,
      dir: l(F)
    }, {
      default: f(() => [
        de("div", cf, [
          de("div", pf, X(l(ae)), 1)
        ]),
        x(pe.$slots, "default", {
          date: l(W),
          grid: l(_t),
          weekDays: l(la),
          weekStartsOn: l(d),
          locale: l(D),
          fixedWeeks: l(c)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), mf = /* @__PURE__ */ w({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(L), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hf = /* @__PURE__ */ w({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = aa();
    return (n, o) => (v(), g(l(L), E(t, {
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
}), yf = /* @__PURE__ */ w({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = aa(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), g(l(L), E(t, {
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
}), gf = /* @__PURE__ */ w({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = aa();
    return (a, n) => {
      var o, s;
      return v(), g(l(L), {
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
}), bf = /* @__PURE__ */ w({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(L), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wf = /* @__PURE__ */ w({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = aa();
    return (o, s) => (v(), g(l(L), E(t, {
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
}), _f = /* @__PURE__ */ w({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = aa();
    return (o, s) => (v(), g(l(L), E(t, {
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
}), xf = /* @__PURE__ */ w({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(L), E(t, { "aria-hidden": "true" }), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cf = /* @__PURE__ */ w({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(L), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $f = /* @__PURE__ */ w({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(L), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kf = /* @__PURE__ */ w({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = aa(), n = vs(), { primitiveElement: o, currentElement: s } = Ot(), r = $(() => a.formatter.custom(Ve(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = $(() => a.isDateDisabled(t.day)), d = $(() => {
      var R;
      return (R = a.isDateUnavailable) == null ? void 0 : R.call(a, t.day);
    }), u = $(() => a.isSelected(t.day)), c = $(() => a.isSelectionStart(t.day)), p = $(() => a.isSelectionEnd(t.day)), y = $(() => a.isHighlightedStart(t.day)), m = $(() => a.isHighlightedEnd(t.day)), b = $(() => a.highlightedRange.value ? Qi(t.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", _ = $(() => Rl(t.day, Bt())), C = $(() => !Il(t.day, t.month)), D = $(
      () => a.isOutsideVisibleView(t.day)
    ), k = $(() => t.day.day.toLocaleString(a.locale.value)), O = $(() => !a.disabled.value && we(t.day, a.placeholder.value));
    function S(R, B) {
      var T;
      if (!a.readonly.value && !(a.isDateDisabled(B) || (T = a.isDateUnavailable) != null && T.call(a, B))) {
        if (a.lastPressedDateValue.value = B.copy(), a.startValue.value && a.highlightedRange.value === null) {
          if (we(B, a.startValue.value) && !a.preventDeselect.value && !a.endValue.value) {
            a.startValue.value = void 0, a.onPlaceholderChange(B);
            return;
          } else if (!a.endValue.value) {
            R.preventDefault(), a.lastPressedDateValue.value && we(a.lastPressedDateValue.value, B) && (a.startValue.value = B.copy());
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
    function V(R) {
      S(R, t.day);
    }
    function M() {
      var R;
      a.isDateDisabled(t.day) || (R = a.isDateUnavailable) != null && R.call(a, t.day) || (a.focusedValue.value = t.day.copy());
    }
    function F(R) {
      R.preventDefault(), R.stopPropagation();
      const B = a.parentElement.value, T = B ? Array.from(B.querySelectorAll(h)) : [];
      let I = T.indexOf(s.value);
      const G = 7, j = a.dir.value === "rtl" ? -1 : 1;
      switch (R.code) {
        case n.ARROW_RIGHT:
          I += j;
          break;
        case n.ARROW_LEFT:
          I -= j;
          break;
        case n.ARROW_UP:
          I -= G;
          break;
        case n.ARROW_DOWN:
          I += G;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          S(R, t.day);
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
        a.prevPage(), te(() => {
          const W = B ? Array.from(B.querySelectorAll(h)) : [];
          W[W.length - Math.abs(I)].focus();
        });
        return;
      }
      if (I >= T.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), te(() => {
          (B ? Array.from(B.querySelectorAll(h)) : [])[I - T.length].focus();
        });
      }
    }
    return (R, B) => (v(), g(l(L), E({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": u.value ? !0 : void 0,
      "aria-disabled": C.value || i.value || d.value ? !0 : void 0,
      "data-highlighted": b.value ? "" : void 0,
      "data-selection-start": c.value ? !0 : void 0,
      "data-selection-end": p.value ? !0 : void 0,
      "data-highlighted-start": y.value ? !0 : void 0,
      "data-highlighted-end": m.value ? !0 : void 0,
      "data-selected": u.value ? !0 : void 0,
      "data-outside-visible-view": D.value ? "" : void 0,
      "data-value": R.day.toString(),
      "data-disabled": i.value || C.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": _.value ? "" : void 0,
      "data-outside-month": C.value ? "" : void 0,
      "data-focused": O.value ? "" : void 0,
      tabindex: O.value ? 0 : C.value || i.value ? void 0 : -1,
      onClick: V,
      onFocusin: M,
      onMouseenter: M,
      onKeydown: Ue(F, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: f(() => [
        x(R.$slots, "default", { dayValue: k.value }, () => [
          Y(X(k.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
}), Bf = ["default-value"], Df = /* @__PURE__ */ w({
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
    const t = e, { value: a } = ue(t), n = A();
    return (o, s) => (v(), g(l(cn), { "as-child": "" }, {
      default: f(() => [
        Gt(de("select", E({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => wa(a) ? a.value = r : null),
          "default-value": l(a)
        }), [
          x(o.$slots, "default")
        ], 16, Bf), [
          [Br, l(a)]
        ])
      ]),
      _: 3
    }));
  }
}), Pf = {
  key: 0,
  value: ""
}, [Et, Fs] = se("SelectRoot"), [Of, Sf] = se("SelectRoot"), Ef = /* @__PURE__ */ w({
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
    }), r = A(), i = A(), d = A({
      x: 0,
      y: 0
    }), u = A(!1), { required: c, disabled: p, dir: y } = ue(a), m = it(y);
    Fs({
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
      open: s,
      required: c,
      onOpenChange: (C) => {
        s.value = C;
      },
      dir: m,
      triggerPointerDownPosRef: d,
      disabled: p
    });
    const b = ka(r), h = A(/* @__PURE__ */ new Set()), _ = $(() => Array.from(h.value).map((C) => {
      var D;
      return (D = C.props) == null ? void 0 : D.value;
    }).join(";"));
    return Sf({
      onNativeOptionAdd: (C) => {
        h.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        h.value.delete(C);
      }
    }), (C, D) => (v(), g(l(Pa), null, {
      default: f(() => [
        x(C.$slots, "default", {
          modelValue: l(o),
          open: l(s)
        }),
        l(b) ? (v(), g(Df, E({ key: _.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: l(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: l(p),
          value: l(o),
          onChange: D[0] || (D[0] = (k) => o.value = k.target.value)
        }), {
          default: f(() => [
            l(o) === void 0 ? (v(), U("option", Pf)) : Q("", !0),
            (v(!0), U(J, null, he(Array.from(h.value), (k) => (v(), g(Ie(k), E({ ref_for: !0 }, k.props, {
              key: k.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : Q("", !0)
      ]),
      _: 3
    }));
  }
}), Mf = [" ", "Enter", "ArrowUp", "ArrowDown"], Af = [" ", "Enter"], et = 10;
function Ls(e) {
  return e === "" || Zd(e);
}
const Tf = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Et(), n = $(() => {
      var m;
      return ((m = a.disabled) == null ? void 0 : m.value) || t.disabled;
    }), { forwardRef: o, currentElement: s } = N();
    a.contentId || (a.contentId = xe(void 0, "radix-vue-select-content")), ie(() => {
      a.triggerElement = s;
    });
    const { injectCollection: r } = Jt(), i = r(), { search: d, handleTypeaheadSearch: u, resetTypeahead: c } = _o(i);
    function p() {
      n.value || (a.onOpenChange(!0), c());
    }
    function y(m) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, b) => (v(), g(l(Do), { "as-child": "" }, {
      default: f(() => {
        var h, _, C, D;
        return [
          P(l(L), {
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
            "data-placeholder": l(Ls)((D = l(a).modelValue) == null ? void 0 : D.value) ? "" : void 0,
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
              O.hasPointerCapture(k.pointerId) && O.releasePointerCapture(k.pointerId), k.button === 0 && k.ctrlKey === !1 && (y(k), k.preventDefault());
            }),
            onPointerup: b[2] || (b[2] = _e(
              (k) => {
                k.pointerType === "touch" && y(k);
              },
              ["prevent"]
            )),
            onKeydown: b[3] || (b[3] = (k) => {
              const O = l(d) !== "";
              !(k.ctrlKey || k.altKey || k.metaKey) && k.key.length === 1 && O && k.key === " " || (l(u)(k.key), l(Mf).includes(k.key) && (p(), k.preventDefault()));
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
}), Vf = /* @__PURE__ */ w({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(dn), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Vo, If] = se("SelectItemAlignedPosition"), Rf = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, { injectCollection: o } = Jt(), s = Et(), r = Mt(), i = o(), d = A(!1), u = A(!0), c = A(), { forwardRef: p, currentElement: y } = N(), { viewport: m, selectedItem: b, selectedItemText: h, focusSelectedItem: _ } = r;
    function C() {
      if (s.triggerElement.value && s.valueElement.value && c.value && y.value && m != null && m.value && b != null && b.value && h != null && h.value) {
        const O = s.triggerElement.value.getBoundingClientRect(), S = y.value.getBoundingClientRect(), V = s.valueElement.value.getBoundingClientRect(), M = h.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const Oe = M.left - S.left, Be = V.left - Oe, Ne = O.left - Be, le = O.width + Ne, $e = Math.max(le, S.width), Ze = window.innerWidth - et, ra = Ya(Be, et, Ze - $e);
          c.value.style.minWidth = `${le}px`, c.value.style.left = `${ra}px`;
        } else {
          const Oe = S.right - M.right, Be = window.innerWidth - V.right - Oe, Ne = window.innerWidth - O.right - Be, le = O.width + Ne, $e = Math.max(le, S.width), Ze = window.innerWidth - et, ra = Ya(
            Be,
            et,
            Ze - $e
          );
          c.value.style.minWidth = `${le}px`, c.value.style.right = `${ra}px`;
        }
        const F = i.value, R = window.innerHeight - et * 2, B = m.value.scrollHeight, T = window.getComputedStyle(y.value), I = Number.parseInt(
          T.borderTopWidth,
          10
        ), G = Number.parseInt(T.paddingTop, 10), j = Number.parseInt(
          T.borderBottomWidth,
          10
        ), W = Number.parseInt(
          T.paddingBottom,
          10
        ), q = I + G + B + W + j, ae = Math.min(
          b.value.offsetHeight * 5,
          q
        ), ce = window.getComputedStyle(m.value), me = Number.parseInt(ce.paddingTop, 10), ke = Number.parseInt(
          ce.paddingBottom,
          10
        ), ge = O.top + O.height / 2 - et, oa = R - ge, _t = b.value.offsetHeight / 2, la = b.value.offsetTop + _t, dt = I + G + la, sa = q - dt;
        if (dt <= ge) {
          const Oe = b.value === F[F.length - 1];
          c.value.style.bottom = "0px";
          const Be = y.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, Ne = Math.max(
            oa,
            _t + (Oe ? ke : 0) + Be + j
          ), le = dt + Ne;
          c.value.style.height = `${le}px`;
        } else {
          const Oe = b.value === F[0];
          c.value.style.top = "0px";
          const Be = Math.max(
            ge,
            I + m.value.offsetTop + (Oe ? me : 0) + _t
          ) + sa;
          c.value.style.height = `${Be}px`, m.value.scrollTop = dt - ge + m.value.offsetTop;
        }
        c.value.style.margin = `${et}px 0`, c.value.style.minHeight = `${ae}px`, c.value.style.maxHeight = `${R}px`, n("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const D = A("");
    ie(async () => {
      await te(), C(), y.value && (D.value = window.getComputedStyle(y.value).zIndex);
    });
    function k(O) {
      O && u.value === !0 && (C(), _ == null || _(), u.value = !1);
    }
    return If({
      contentWrapper: c,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: k
    }), (O, S) => (v(), U("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: qt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: D.value
      })
    }, [
      P(l(L), E({
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
}), Ff = /* @__PURE__ */ w({
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
    return (a, n) => (v(), g(l(ga), E(l(t), { style: {
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
}), na = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Mt, Lf] = se("SelectContent"), Nf = /* @__PURE__ */ w({
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
    const a = e, n = t, o = Et();
    wo(), $a(a.bodyLock);
    const { createCollection: s } = Jt(), r = A();
    Ba(r);
    const i = s(r), { search: d, handleTypeaheadSearch: u } = _o(i), c = A(), p = A(), y = A(), m = A(!1), b = A(!1);
    function h() {
      p.value && r.value && Kn([p.value, r.value]);
    }
    ee(m, () => {
      h();
    });
    const { onOpenChange: _, triggerPointerDownPosRef: C } = o;
    ye((S) => {
      if (!r.value)
        return;
      let V = { x: 0, y: 0 };
      const M = (R) => {
        var B, T;
        V = {
          x: Math.abs(
            Math.round(R.pageX) - (((B = C.value) == null ? void 0 : B.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(R.pageY) - (((T = C.value) == null ? void 0 : T.y) ?? 0)
          )
        };
      }, F = (R) => {
        var B;
        R.pointerType !== "touch" && (V.x <= 10 && V.y <= 10 ? R.preventDefault() : (B = r.value) != null && B.contains(R.target) || _(!1), document.removeEventListener("pointermove", M), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", M), document.addEventListener("pointerup", F, {
        capture: !0,
        once: !0
      })), S(() => {
        document.removeEventListener("pointermove", M), document.removeEventListener("pointerup", F, {
          capture: !0
        });
      });
    });
    function D(S) {
      const V = S.ctrlKey || S.altKey || S.metaKey;
      if (S.key === "Tab" && S.preventDefault(), !V && S.key.length === 1 && u(S.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(S.key)) {
        let M = i.value;
        if (["ArrowUp", "End"].includes(S.key) && (M = M.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const F = S.target, R = M.indexOf(F);
          M = M.slice(R + 1);
        }
        setTimeout(() => Kn(M)), S.preventDefault();
      }
    }
    const k = $(() => a.position === "popper" ? a : {}), O = ne(k.value);
    return Lf({
      content: r,
      viewport: c,
      onViewportChange: (S) => {
        c.value = S;
      },
      itemRefCallback: (S, V, M) => {
        var F, R;
        const B = !b.value && !M;
        (((F = o.modelValue) == null ? void 0 : F.value) !== void 0 && ((R = o.modelValue) == null ? void 0 : R.value) === V || B) && (p.value = S, B && (b.value = !0));
      },
      selectedItem: p,
      selectedItemText: y,
      onItemLeave: () => {
        var S;
        (S = r.value) == null || S.focus();
      },
      itemTextRefCallback: (S, V, M) => {
        var F, R;
        const B = !b.value && !M;
        (((F = o.modelValue) == null ? void 0 : F.value) !== void 0 && ((R = o.modelValue) == null ? void 0 : R.value) === V || B) && (y.value = S);
      },
      focusSelectedItem: h,
      position: a.position,
      isPositioned: m,
      searchRef: d
    }), (S, V) => (v(), g(l(un), {
      "as-child": "",
      onMountAutoFocus: V[6] || (V[6] = _e(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: V[7] || (V[7] = (M) => {
        var F;
        n("closeAutoFocus", M), !M.defaultPrevented && ((F = l(o).triggerElement.value) == null || F.focus({ preventScroll: !0 }), M.preventDefault());
      })
    }, {
      default: f(() => [
        P(l(Da), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: V[2] || (V[2] = _e(() => {
          }, ["prevent"])),
          onDismiss: V[3] || (V[3] = (M) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: V[4] || (V[4] = (M) => n("escapeKeyDown", M)),
          onPointerDownOutside: V[5] || (V[5] = (M) => n("pointerDownOutside", M))
        }, {
          default: f(() => [
            (v(), g(Ie(
              S.position === "popper" ? Ff : Rf
            ), E({ ...S.$attrs, ...l(O) }, {
              id: l(o).contentId,
              ref: (M) => {
                r.value = l(Ee)(M);
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
              onContextmenu: V[0] || (V[0] = _e(() => {
              }, ["prevent"])),
              onPlaced: V[1] || (V[1] = (M) => m.value = !0),
              onKeydown: D
            }), {
              default: f(() => [
                x(S.$slots, "default")
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
}), zf = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Fs(e.context), (t, a) => x(t.$slots, "default");
  }
}), Wf = { key: 1 }, Uf = /* @__PURE__ */ w({
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
    const a = e, n = oe(a, t), o = Et(), s = A();
    ie(() => {
      s.value = new DocumentFragment();
    });
    const r = A(), i = $(() => a.forceMount || o.open.value);
    return (d, u) => {
      var c;
      return i.value ? (v(), g(l(Le), {
        key: 0,
        ref_key: "presenceRef",
        ref: r,
        present: !0
      }, {
        default: f(() => [
          P(Nf, K(H({ ...l(n), ...d.$attrs })), {
            default: f(() => [
              x(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = r.value) != null && c.present) && s.value ? (v(), U("div", Wf, [
        (v(), g(en, { to: s.value }, [
          P(zf, { context: l(o) }, {
            default: f(() => [
              x(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : Q("", !0);
    };
  }
}), Kf = /* @__PURE__ */ w({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(L), E({ "aria-hidden": "true" }, t), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ns, jf] = se("SelectItem"), Hf = /* @__PURE__ */ w({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: a } = ue(t), n = Et(), o = Mt(na), { forwardRef: s, currentElement: r } = N(), i = $(() => {
      var h;
      return ((h = n.modelValue) == null ? void 0 : h.value) === t.value;
    }), d = A(!1), u = A(t.textValue ?? ""), c = xe(void 0, "radix-vue-select-item-text");
    async function p(h) {
      await te(), !(h != null && h.defaultPrevented) && (a.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function y(h) {
      var _;
      await te(), !h.defaultPrevented && (a.value ? (_ = o.onItemLeave) == null || _.call(o) : h.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(h) {
      var _;
      await te(), !h.defaultPrevented && h.currentTarget === document.activeElement && ((_ = o.onItemLeave) == null || _.call(o));
    }
    async function b(h) {
      var _;
      await te(), !(h.defaultPrevented || ((_ = o.searchRef) == null ? void 0 : _.value) !== "" && h.key === " ") && (Af.includes(h.key) && p(), h.key === " " && h.preventDefault());
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
    }), jf({
      value: t.value,
      disabled: a,
      textId: c,
      isSelected: i,
      onItemTextChange: (h) => {
        u.value = ((u.value || (h == null ? void 0 : h.textContent)) ?? "").trim();
      }
    }), (h, _) => (v(), g(l(L), {
      ref: l(s),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": l(c),
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
      onTouchend: _[3] || (_[3] = _e(() => {
      }, ["prevent", "stop"])),
      onPointermove: y,
      onPointerleave: m,
      onKeydown: b
    }, {
      default: f(() => [
        x(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Gf = /* @__PURE__ */ w({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = Ns();
    return (n, o) => l(a).isSelected.value ? (v(), g(l(L), E({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : Q("", !0);
  }
}), [qf, Yf] = se("SelectGroup"), Xf = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = xe(void 0, "radix-vue-select-group");
    return Yf({ id: a }), (n, o) => (v(), g(l(L), E({ role: "group" }, t, { "aria-labelledby": l(a) }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Zf = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = qf({ id: "" });
    return (n, o) => (v(), g(l(L), E(t, {
      id: l(a).id
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), zs = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = Et(), n = Mt(na), o = Of(), s = Ns(), { forwardRef: r, currentElement: i } = N(), d = $(() => {
      var u;
      return We("option", {
        key: s.value,
        value: s.value,
        disabled: s.disabled.value,
        textContent: (u = i.value) == null ? void 0 : u.textContent
      });
    });
    return ie(() => {
      i.value && (s.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        s.value,
        s.disabled.value
      ), o.onNativeOptionAdd(d.value));
    }), Qn(() => {
      o.onNativeOptionRemove(d.value);
    }), (u, c) => (v(), U(J, null, [
      P(l(L), E({
        id: l(s).textId,
        ref: l(r)
      }, { ...t, ...u.$attrs }), {
        default: f(() => [
          x(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      l(s).isSelected.value && l(a).valueElement.value && !l(a).valueElementHasChildren.value ? (v(), g(en, {
        key: 0,
        to: l(a).valueElement.value
      }, [
        x(u.$slots, "default")
      ], 8, ["to"])) : Q("", !0)
    ], 64));
  }
}), Jf = /* @__PURE__ */ w({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: a } = ue(t), n = Yc(a), o = Mt(na), s = o.position === "item-aligned" ? Vo() : void 0, { forwardRef: r, currentElement: i } = N();
    ie(() => {
      o == null || o.onViewportChange(i.value);
    });
    const d = A(0);
    function u(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: y, contentWrapper: m } = s ?? {};
      if (y != null && y.value && m != null && m.value) {
        const b = Math.abs(d.value - p.scrollTop);
        if (b > 0) {
          const h = window.innerHeight - et * 2, _ = Number.parseFloat(
            m.value.style.minHeight
          ), C = Number.parseFloat(m.value.style.height), D = Math.max(_, C);
          if (D < h) {
            const k = D + b, O = Math.min(h, k), S = k - O;
            m.value.style.height = `${O}px`, m.value.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = p.scrollTop;
    }
    return (c, p) => (v(), U(J, null, [
      P(l(L), E({
        ref: l(r),
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
          x(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      P(l(L), {
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
}), Ws = /* @__PURE__ */ w({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const a = t, { injectCollection: n } = Jt(), o = n(), s = Mt(na), r = A(null);
    function i() {
      r.value !== null && (window.clearInterval(r.value), r.value = null);
    }
    ye(() => {
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
      (c = s.onItemLeave) == null || c.call(s), r.value === null && (r.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    return Qn(() => i()), (c, p) => {
      var y;
      return v(), g(l(L), E({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (y = c.$parent) == null ? void 0 : y.$props, {
        onPointerdown: d,
        onPointermove: u,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: f(() => [
          x(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Qf = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Mt(na), a = t.position === "item-aligned" ? Vo() : void 0, { forwardRef: n, currentElement: o } = N(), s = A(!1);
    return ye((r) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let u = function() {
          s.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        u(), c.addEventListener("scroll", u), r(() => c.removeEventListener("scroll", u));
      }
    }), ee(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), g(Ws, {
      key: 0,
      ref: l(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: u } = l(t);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop - u.value.offsetHeight);
      })
    }, {
      default: f(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : Q("", !0);
  }
}), ev = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Mt(na), a = t.position === "item-aligned" ? Vo() : void 0, { forwardRef: n, currentElement: o } = N(), s = A(!1);
    return ye((r) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let u = function() {
          const p = c.scrollHeight - c.clientHeight;
          s.value = Math.ceil(c.scrollTop) < p;
        };
        const c = t.viewport.value;
        u(), c.addEventListener("scroll", u), r(() => c.removeEventListener("scroll", u));
      }
    }), ee(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), g(Ws, {
      key: 0,
      ref: l(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: u } = l(t);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop + u.value.offsetHeight);
      })
    }, {
      default: f(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : Q("", !0);
  }
}), tv = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: a } = N(), n = Et(), o = Cr();
    return $r(() => {
      var s;
      const r = !!sn((s = o == null ? void 0 : o.default) == null ? void 0 : s.call(o)).length;
      n.onValueElementHasChildrenChange(r);
    }), ie(() => {
      n.valueElement = a;
    }), (s, r) => (v(), g(l(L), {
      ref: l(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: f(() => {
        var i;
        return [
          l(Ls)((i = l(n).modelValue) == null ? void 0 : i.value) ? (v(), U(J, { key: 0 }, [
            Y(X(s.placeholder), 1)
          ], 64)) : x(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), av = /* @__PURE__ */ w({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, a) => (v(), g(l(L), {
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
function nv(e = [], t, a) {
  const n = [...e];
  return n[a] = t, n.sort((o, s) => o - s);
}
function Us(e, t, a) {
  const n = 100 / (a - t) * (e - t);
  return Ya(n, 0, 100);
}
function ov(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function lv(e, t) {
  if (e.length === 1)
    return 0;
  const a = e.map((o) => Math.abs(o - t)), n = Math.min(...a);
  return a.indexOf(n);
}
function sv(e, t, a) {
  const n = e / 2, o = Io([0, 50], [0, n]);
  return (n - o(t) * a) * a;
}
function rv(e) {
  return e.slice(0, -1).map((t, a) => e[a + 1] - t);
}
function iv(e, t) {
  if (t > 0) {
    const a = rv(e);
    return Math.min(...a) >= t;
  }
  return !0;
}
function Io(e, t) {
  return (a) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (a - e[0]);
  };
}
function dv(e) {
  return (String(e).split(".")[1] || "").length;
}
function uv(e, t) {
  const a = 10 ** t;
  return Math.round(e * a) / a;
}
const Ks = ["PageUp", "PageDown"], js = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Hs = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Gs, qs] = se(["SliderVertical", "SliderHorizontal"]), Ys = /* @__PURE__ */ w({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = fn();
    return (s, r) => (v(), g(l(L), E({ "data-slider-impl": "" }, a, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : l(Ks).concat(l(js)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
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
}), cv = /* @__PURE__ */ w({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, { max: o, min: s, dir: r, inverted: i } = ue(a), { forwardRef: d, currentElement: u } = N(), c = A(), p = $(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function y(m) {
      const b = c.value || u.value.getBoundingClientRect(), h = [0, b.width], _ = p.value ? [s.value, o.value] : [o.value, s.value], C = Io(h, _);
      return c.value = b, C(m - b.left);
    }
    return qs({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, b) => (v(), g(Ys, {
      ref: l(d),
      dir: l(r),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: b[0] || (b[0] = (h) => {
        const _ = y(h.clientX);
        n("slideStart", _);
      }),
      onSlideMove: b[1] || (b[1] = (h) => {
        const _ = y(h.clientX);
        n("slideMove", _);
      }),
      onSlideEnd: b[2] || (b[2] = () => {
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: b[3] || (b[3] = (h) => {
        const _ = p.value ? "from-left" : "from-right", C = l(Hs)[_].includes(h.key);
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
}), pv = /* @__PURE__ */ w({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, { max: o, min: s, inverted: r } = ue(a), { forwardRef: i, currentElement: d } = N(), u = A(), c = $(() => !r.value);
    function p(y) {
      const m = u.value || d.value.getBoundingClientRect(), b = [0, m.height], h = c.value ? [o.value, s.value] : [s.value, o.value], _ = Io(b, h);
      return u.value = m, _(y - m.top);
    }
    return qs({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (y, m) => (v(), g(Ys, {
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
        u.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (b) => {
        const h = c.value ? "from-bottom" : "from-top", _ = l(Hs)[h].includes(b.key);
        n("stepKeyDown", b, _ ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (b) => n("endKeyDown", b)),
      onHomeKeyDown: m[5] || (m[5] = (b) => n("homeKeyDown", b))
    }, {
      default: f(() => [
        x(y.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), fv = ["value", "name", "disabled", "step"], [fn, vv] = se("SliderRoot"), mv = /* @__PURE__ */ w({
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
    const a = e, n = t, { min: o, max: s, step: r, minStepsBetweenThumbs: i, orientation: d, disabled: u, dir: c } = ue(a), p = it(c), { forwardRef: y, currentElement: m } = N(), b = ka(m);
    Oo();
    const h = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), _ = A(0), C = A(h.value);
    function D(M) {
      const F = lv(h.value, M);
      S(M, F);
    }
    function k(M) {
      S(M, _.value);
    }
    function O() {
      const M = C.value[_.value];
      h.value[_.value] !== M && n("valueCommit", Dr(h.value));
    }
    function S(M, F, { commit: R } = { commit: !1 }) {
      var B;
      const T = dv(r.value), I = uv(Math.round((M - o.value) / r.value) * r.value + o.value, T), G = Ya(I, o.value, s.value), j = nv(h.value, G, F);
      if (iv(j, i.value * r.value)) {
        _.value = j.indexOf(G);
        const W = String(j) !== String(h.value);
        W && R && n("valueCommit", j), W && ((B = V.value[_.value]) == null || B.focus(), h.value = j);
      }
    }
    const V = A([]);
    return vv({
      modelValue: h,
      valueIndexToChangeRef: _,
      thumbElements: V,
      orientation: d,
      min: o,
      max: s,
      disabled: u
    }), (M, F) => (v(), U(J, null, [
      P(l(So), null, {
        default: f(() => [
          (v(), g(Ie(l(d) === "horizontal" ? cv : pv), E(M.$attrs, {
            ref: l(y),
            "as-child": M.asChild,
            as: M.as,
            min: l(o),
            max: l(s),
            dir: l(p),
            inverted: M.inverted,
            "aria-disabled": l(u),
            "data-disabled": l(u) ? "" : void 0,
            onPointerdown: F[0] || (F[0] = () => {
              l(u) || (C.value = l(h));
            }),
            onSlideStart: F[1] || (F[1] = (R) => !l(u) && D(R)),
            onSlideMove: F[2] || (F[2] = (R) => !l(u) && k(R)),
            onSlideEnd: F[3] || (F[3] = (R) => !l(u) && O()),
            onHomeKeyDown: F[4] || (F[4] = (R) => !l(u) && S(l(o), 0, { commit: !0 })),
            onEndKeyDown: F[5] || (F[5] = (R) => !l(u) && S(l(s), l(h).length - 1, { commit: !0 })),
            onStepKeyDown: F[6] || (F[6] = (R, B) => {
              if (!l(u)) {
                const T = l(Ks).includes(R.key) || R.shiftKey && l(js).includes(R.key) ? 10 : 1, I = _.value, G = l(h)[I], j = l(r) * T * B;
                S(G + j, I, { commit: !0 });
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
      l(b) ? (v(!0), U(J, { key: 0 }, he(l(h), (R, B) => (v(), U("input", {
        key: B,
        value: R,
        type: "number",
        style: { display: "none" },
        name: M.name ? M.name + (l(h).length > 1 ? "[]" : "") : void 0,
        disabled: l(u),
        step: l(r)
      }, null, 8, fv))), 128)) : Q("", !0)
    ], 64));
  }
}), hv = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = fn(), n = Gs(), { forwardRef: o, currentElement: s } = N(), r = $(() => {
      var m, b;
      return (b = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : b[t.index];
    }), i = $(() => r.value === void 0 ? 0 : Us(r.value, a.min.value ?? 0, a.max.value ?? 100)), d = $(() => {
      var m, b;
      return ov(t.index, ((b = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : b.length) ?? 0);
    }), u = fs(s), c = $(() => u[n.size].value), p = $(() => c.value ? sv(c.value, i.value, n.direction) : 0), y = bo();
    return ie(() => {
      a.thumbElements.value.push(s.value);
    }), bt(() => {
      const m = a.thumbElements.value.findIndex((b) => b === s.value) ?? -1;
      a.thumbElements.value.splice(m, 1);
    }), (m, b) => (v(), g(l(pn), null, {
      default: f(() => [
        P(l(L), E(m.$attrs, {
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
            display: !l(y) && r.value === void 0 ? "none" : void 0
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
}), yv = /* @__PURE__ */ w({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: a } = Eo(), { forwardRef: n, currentElement: o } = N(), s = $(() => o.value ? a().findIndex((r) => r.ref === o.value) : -1);
    return (r, i) => (v(), g(hv, E({ ref: l(n) }, t, { index: s.value }), {
      default: f(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), gv = /* @__PURE__ */ w({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = fn();
    return N(), (a, n) => (v(), g(l(L), {
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
}), bv = /* @__PURE__ */ w({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = fn(), a = Gs();
    N();
    const n = $(() => {
      var r, i;
      return (i = (r = t.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (d) => Us(d, t.min.value, t.max.value)
      );
    }), o = $(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = $(() => 100 - Math.max(...n.value));
    return (r, i) => (v(), g(l(L), {
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: qt({
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
function wv() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
wv();
const _v = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [xv, Cv] = se("SwitchRoot"), $v = /* @__PURE__ */ w({
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
    const a = e, n = t, { disabled: o } = ue(a), s = ve(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    });
    function r() {
      o.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: d } = N(), u = ka(d), c = $(() => {
      var p;
      return a.id && d.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Cv({
      checked: s,
      toggleCheck: r,
      disabled: o
    }), (p, y) => (v(), U(J, null, [
      P(l(L), E(p.$attrs, {
        id: p.id,
        ref: l(i),
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
        onClick: r,
        onKeydown: Ue(_e(r, ["prevent"]), ["enter"])
      }), {
        default: f(() => [
          x(p.$slots, "default", { checked: l(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      l(u) ? (v(), U("input", {
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
      }, null, 8, _v)) : Q("", !0)
    ], 64));
  }
}), kv = /* @__PURE__ */ w({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = xv();
    return N(), (a, n) => {
      var o;
      return v(), g(l(L), {
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
}), [Ro, Bv] = se("TabsRoot"), Dv = /* @__PURE__ */ w({
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
    const a = e, n = t, { orientation: o, dir: s } = ue(a), r = it(s);
    N();
    const i = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), d = A();
    return Bv({
      modelValue: i,
      changeModelValue: (u) => {
        i.value = u;
      },
      orientation: o,
      dir: r,
      activationMode: a.activationMode,
      baseId: xe(void 0, "radix-vue-tabs"),
      tabsList: d
    }), (u, c) => (v(), g(l(L), {
      dir: l(r),
      "data-orientation": l(o),
      "as-child": u.asChild,
      as: u.as
    }, {
      default: f(() => [
        x(u.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), Pv = /* @__PURE__ */ w({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: a } = ue(t), { forwardRef: n, currentElement: o } = N(), s = Ro();
    return s.tabsList = o, (r, i) => (v(), g(l(Os), {
      "as-child": "",
      orientation: l(s).orientation.value,
      dir: l(s).dir.value,
      loop: l(a)
    }, {
      default: f(() => [
        P(l(L), {
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
function Xs(e, t) {
  return `${e}-trigger-${t}`;
}
function Zs(e, t) {
  return `${e}-content-${t}`;
}
const Ov = /* @__PURE__ */ w({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a } = N(), n = Ro(), o = $(() => Xs(n.baseId, t.value)), s = $(() => Zs(n.baseId, t.value)), r = $(() => t.value === n.modelValue.value), i = A(r.value);
    return ie(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (d, u) => (v(), g(l(Le), {
      present: r.value,
      "force-mount": ""
    }, {
      default: f(({ present: c }) => [
        P(l(L), {
          id: s.value,
          ref: l(a),
          "as-child": d.asChild,
          as: d.as,
          role: "tabpanel",
          "data-state": r.value ? "active" : "inactive",
          "data-orientation": l(n).orientation.value,
          "aria-labelledby": o.value,
          hidden: !c.value,
          tabindex: "0",
          style: qt({
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
}), Sv = /* @__PURE__ */ w({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: a } = N(), n = Ro(), o = $(() => Xs(n.baseId, t.value)), s = $(() => Zs(n.baseId, t.value)), r = $(() => t.value === n.modelValue.value);
    return (i, d) => (v(), g(l(pp), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: f(() => [
        P(l(L), {
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
          onMousedown: d[0] || (d[0] = _e((u) => {
            !i.disabled && u.ctrlKey === !1 ? l(n).changeModelValue(i.value) : u.preventDefault();
          }, ["left"])),
          onKeydown: d[1] || (d[1] = Ue((u) => l(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: d[2] || (d[2] = () => {
            const u = l(n).activationMode !== "manual";
            !r.value && !i.disabled && u && l(n).changeModelValue(i.value);
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
}), [vn, Ev] = se("ToastProvider"), Mv = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: a, duration: n, swipeDirection: o, swipeThreshold: s } = ue(t), r = A(), i = A(0), d = A(!1), u = A(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return Ev({
      label: a,
      duration: n,
      swipeDirection: o,
      swipeThreshold: s,
      toastCount: i,
      viewport: r,
      onViewportChange(c) {
        r.value = c;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: d,
      isClosePausedRef: u
    }), (c, p) => x(c.$slots, "default");
  }
}), Av = "toast.swipeStart", Tv = "toast.swipeMove", Vv = "toast.swipeCancel", Iv = "toast.swipeEnd", Hn = "toast.viewportPause", Gn = "toast.viewportResume";
function Fa(e, t, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function ul(e, t, a = 0) {
  const n = Math.abs(e.x), o = Math.abs(e.y), s = n > o;
  return t === "left" || t === "right" ? s && n > a : !s && o > a;
}
function Rv(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Js(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && t.push(a.textContent), Rv(a)) {
      const n = a.ariaHidden || a.hidden || a.style.display === "none", o = a.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const s = a.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Js(a));
    }
  }), t;
}
const Fv = /* @__PURE__ */ w({
  __name: "ToastAnnounce",
  setup(e) {
    const t = vn(), a = du(1e3), n = A(!1);
    return us(() => {
      n.value = !0;
    }), (o, s) => l(a) || n.value ? (v(), g(l(cn), { key: 0 }, {
      default: f(() => [
        Y(X(l(t).label.value) + " ", 1),
        x(o.$slots, "default")
      ]),
      _: 3
    })) : Q("", !0);
  }
}), [Lv, Nv] = se("ToastRoot"), zv = /* @__PURE__ */ w({
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
    const a = e, n = t, { forwardRef: o, currentElement: s } = N(), r = vn(), i = A(null), d = A(null), u = $(() => a.duration || r.duration.value), c = A(0), p = A(u.value), y = A(0), m = A(u.value), b = us(() => {
      const D = (/* @__PURE__ */ new Date()).getTime() - c.value;
      m.value = Math.max(p.value - D, 0);
    }, { fpsLimit: 60 });
    function h(D) {
      !D || D === Number.POSITIVE_INFINITY || qe && (window.clearTimeout(y.value), c.value = (/* @__PURE__ */ new Date()).getTime(), y.value = window.setTimeout(_, D));
    }
    function _() {
      var D, k;
      (D = s.value) != null && D.contains(document.activeElement) && ((k = r.viewport.value) == null || k.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const C = $(() => s.value ? Js(s.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const D = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(D);
    }
    return ye((D) => {
      const k = r.viewport.value;
      if (k) {
        const O = () => {
          h(p.value), b.resume(), n("resume");
        }, S = () => {
          const V = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - V, window.clearTimeout(y.value), b.pause(), n("pause");
        };
        return k.addEventListener(Hn, S), k.addEventListener(Gn, O), () => {
          k.removeEventListener(Hn, S), k.removeEventListener(Gn, O);
        };
      }
    }), ee(() => [a.open, u.value], () => {
      p.value = u.value, a.open && !r.isClosePausedRef.value && h(u.value);
    }, { immediate: !0 }), go("Escape", (D) => {
      n("escapeKeyDown", D), D.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, _());
    }), ie(() => {
      r.onToastAdd();
    }), bt(() => {
      r.onToastRemove();
    }), Nv({ onClose: _ }), (D, k) => (v(), U(J, null, [
      C.value ? (v(), g(Fv, {
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
      l(r).viewport.value ? (v(), g(en, {
        key: 1,
        to: l(r).viewport.value
      }, [
        P(l(L), E({
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
          onPointerdown: k[0] || (k[0] = _e((O) => {
            i.value = { x: O.clientX, y: O.clientY };
          }, ["left"])),
          onPointermove: k[1] || (k[1] = (O) => {
            if (!i.value) return;
            const S = O.clientX - i.value.x, V = O.clientY - i.value.y, M = !!d.value, F = ["left", "right"].includes(l(r).swipeDirection.value), R = ["left", "up"].includes(l(r).swipeDirection.value) ? Math.min : Math.max, B = F ? R(0, S) : 0, T = F ? 0 : R(0, V), I = O.pointerType === "touch" ? 10 : 2, G = { x: B, y: T }, j = { originalEvent: O, delta: G };
            M ? (d.value = G, l(Fa)(l(Tv), (W) => n("swipeMove", W), j)) : l(ul)(G, l(r).swipeDirection.value, I) ? (d.value = G, l(Fa)(l(Av), (W) => n("swipeStart", W), j), O.target.setPointerCapture(O.pointerId)) : (Math.abs(S) > I || Math.abs(V) > I) && (i.value = null);
          }),
          onPointerup: k[2] || (k[2] = (O) => {
            const S = d.value, V = O.target;
            if (V.hasPointerCapture(O.pointerId) && V.releasePointerCapture(O.pointerId), d.value = null, i.value = null, S) {
              const M = O.currentTarget, F = { originalEvent: O, delta: S };
              l(ul)(S, l(r).swipeDirection.value, l(r).swipeThreshold.value) ? l(Fa)(l(Iv), (R) => n("swipeEnd", R), F) : l(Fa)(l(Vv), (R) => n("swipeCancel", R), F), M == null || M.addEventListener("click", (R) => R.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: f(() => [
            x(D.$slots, "default", {
              remaining: m.value,
              duration: u.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : Q("", !0)
    ], 64));
  }
}), Wv = /* @__PURE__ */ w({
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
    return (r, i) => (v(), g(l(Le), {
      present: r.forceMount || l(s)
    }, {
      default: f(() => [
        P(zv, E({
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
            const { x: u, y: c } = d.detail.delta, p = d.currentTarget;
            p.setAttribute("data-swipe", "move"), p.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), p.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (d) => {
            const u = d.currentTarget;
            u.setAttribute("data-swipe", "cancel"), u.style.removeProperty("--radix-toast-swipe-move-x"), u.style.removeProperty("--radix-toast-swipe-move-y"), u.style.removeProperty("--radix-toast-swipe-end-x"), u.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (d) => {
            const { x: u, y: c } = d.detail.delta, p = d.currentTarget;
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), s.value = !1;
          })
        }), {
          default: f(({ remaining: d, duration: u }) => [
            x(r.$slots, "default", {
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
}), Qs = /* @__PURE__ */ w({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, a) => (v(), g(l(L), {
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
}), er = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Lv(), { forwardRef: n } = N();
    return (o, s) => (v(), g(Qs, { "as-child": "" }, {
      default: f(() => [
        P(l(L), E(t, {
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
}), Uv = /* @__PURE__ */ w({
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
    return (a, n) => a.altText ? (v(), g(Qs, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: f(() => [
        P(er, {
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
}), cl = /* @__PURE__ */ w({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const a = t, n = vn();
    return (o, s) => (v(), g(l(cn), {
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
}), Kv = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: a, label: n } = ue(t), { forwardRef: o, currentElement: s } = N(), { createCollection: r } = Jt(), i = r(s), d = vn(), u = $(() => d.toastCount.value > 0), c = A(), p = A(), y = $(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    go(a.value, () => {
      s.value.focus();
    }), ie(() => {
      d.onViewportChange(s.value);
    }), ye((b) => {
      const h = s.value;
      if (u.value && h) {
        const _ = () => {
          if (!d.isClosePausedRef.value) {
            const S = new CustomEvent(Hn);
            h.dispatchEvent(S), d.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (d.isClosePausedRef.value) {
            const S = new CustomEvent(Gn);
            h.dispatchEvent(S), d.isClosePausedRef.value = !1;
          }
        }, D = (S) => {
          !h.contains(S.relatedTarget) && C();
        }, k = () => {
          h.contains(document.activeElement) || C();
        }, O = (S) => {
          var V, M, F;
          const R = S.altKey || S.ctrlKey || S.metaKey;
          if (S.key === "Tab" && !R) {
            const B = document.activeElement, T = S.shiftKey;
            if (S.target === h && T) {
              (V = c.value) == null || V.focus();
              return;
            }
            const I = m({ tabbingDirection: T ? "backwards" : "forwards" }), G = I.findIndex((j) => j === B);
            Ka(I.slice(G + 1)) ? S.preventDefault() : T ? (M = c.value) == null || M.focus() : (F = p.value) == null || F.focus();
          }
        };
        h.addEventListener("focusin", _), h.addEventListener("focusout", D), h.addEventListener("pointermove", _), h.addEventListener("pointerleave", k), h.addEventListener("keydown", O), window.addEventListener("blur", _), window.addEventListener("focus", C), b(() => {
          h.removeEventListener("focusin", _), h.removeEventListener("focusout", D), h.removeEventListener("pointermove", _), h.removeEventListener("pointerleave", k), h.removeEventListener("keydown", O), window.removeEventListener("blur", _), window.removeEventListener("focus", C);
        });
      }
    });
    function m({ tabbingDirection: b }) {
      const h = i.value.map((_) => {
        const C = [_, ...Co(_)];
        return b === "forwards" ? C : C.reverse();
      });
      return (b === "forwards" ? h.reverse() : h).flat();
    }
    return (b, h) => (v(), g(l(Lu), {
      role: "region",
      "aria-label": typeof l(n) == "string" ? l(n).replace("{hotkey}", y.value) : l(n)(y.value),
      tabindex: "-1",
      style: qt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: u.value ? void 0 : "none"
      })
    }, {
      default: f(() => [
        u.value ? (v(), g(cl, {
          key: 0,
          ref: (_) => {
            c.value = l(Ee)(_);
          },
          onFocusFromOutsideViewport: h[0] || (h[0] = () => {
            const _ = m({
              tabbingDirection: "forwards"
            });
            l(Ka)(_);
          })
        }, null, 512)) : Q("", !0),
        P(l(L), E({
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
        u.value ? (v(), g(cl, {
          key: 1,
          ref: (_) => {
            p.value = l(Ee)(_);
          },
          onFocusFromOutsideViewport: h[1] || (h[1] = () => {
            const _ = m({
              tabbingDirection: "backwards"
            });
            l(Ka)(_);
          })
        }, null, 512)) : Q("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), jv = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), g(l(L), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hv = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), g(l(L), K(H(t)), {
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
    return (a, n) => (v(), g(l(L), {
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
}), At = eo(
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
), Gv = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, qv = /* @__PURE__ */ w({
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
    }), s = oe(o, n);
    return (r, i) => (v(), g(l(mc), E({
      class: l(z)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: u }) => [
        P(l(tm), null, {
          default: f(() => [
            P(l(om)),
            P(l(am)),
            P(l(nm))
          ]),
          _: 1
        }),
        de("div", Gv, [
          (v(!0), U(J, null, he(d, (c) => (v(), g(l(Zv), {
            key: c.value.toString()
          }, {
            default: f(() => [
              P(l(Qv), null, {
                default: f(() => [
                  P(l(pl), null, {
                    default: f(() => [
                      (v(!0), U(J, null, he(u, (p) => (v(), g(l(em), { key: p }, {
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
              P(l(Jv), null, {
                default: f(() => [
                  (v(!0), U(J, null, he(c.rows, (p, y) => (v(), g(l(pl), {
                    key: `weekDate-${y}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), U(J, null, he(p, (m) => (v(), g(l(Yv), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          P(l(Xv), {
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
}), Yv = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(bc), E({
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
}), Xv = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(Bc), E({
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
}), Zv = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(gc), E({
      class: l(z)("w-full border-collapse space-y-1", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jv = /* @__PURE__ */ w({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l($c), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qv = /* @__PURE__ */ w({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(Cc), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pl = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(kc), E({
      class: l(z)("flex", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), em = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(wc), E({
      class: l(z)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tm = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(hc), E({
      class: l(z)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), am = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(yc), E({
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
}), nm = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(_c), E({
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
}), om = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(xc), E({
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
}), tr = /* @__PURE__ */ w({
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
    }), s = oe(o, n);
    return (r, i) => (v(), g(l(Nc), E(l(s), {
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
}), ar = /* @__PURE__ */ w({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (s, r) => (v(), g(l(Au), K(H(l(o))), {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hy = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(Bo), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lm = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(Tu), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sm = /* @__PURE__ */ w({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("div", {
      class: re(l(z)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), rm = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(lc), E(l(n), {
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
}), im = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(sc), E(l(n), {
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
const dm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var La = {
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
const um = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: s, class: r, ...i }, { slots: d }) => We(
  "svg",
  {
    ...La,
    width: e || La.width,
    height: e || La.height,
    stroke: n || La.stroke,
    "stroke-width": a ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${dm(s ?? "icon")}`],
    ...i
  },
  [...o.map((u) => We(...u)), ...d.default ? [d.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = (e, t) => (a, { slots: n }) => We(
  um,
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
const cm = Ce("CalendarIcon", [
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
const mn = Ce("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = Ce("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = Ce("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = Ce("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fm = Ce("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vm = Ce("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mm = Ce("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hm = Ce("ChevronsUpDownIcon", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ym = Ce("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gm = Ce("EllipsisIcon", [
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
const bm = Ce("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wm = Ce("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _m = Ce("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xm = Ce("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cm = Ce("SunIcon", [
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
const Fo = Ce("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), lr = /* @__PURE__ */ w({
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
    }), s = oe(o, a);
    return (r, i) => (v(), g(l(ms), null, {
      default: f(() => [
        P(l(ws), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        P(l(bs), E(l(s), {
          class: l(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg",
            n.class
          )
        }), {
          default: f(() => [
            x(r.$slots, "default"),
            P(l(Bo), {
              onClick: i[0] || (i[0] = (d) => a("close", d)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: f(() => [
                P(l(Fo), { class: "size-4 dark:text-slate-300" }),
                i[1] || (i[1] = de("span", { class: "sr-only" }, "Close", -1))
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
}), Gy = /* @__PURE__ */ w({
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
    }), s = oe(o, n);
    return (r, i) => (v(), g(l(ms), null, {
      default: f(() => [
        P(l(ws), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: f(() => [
            P(l(bs), E({
              class: l(z)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg md:w-full",
                a.class
              )
            }, l(s), {
              onPointerDownOutside: i[0] || (i[0] = (d) => {
                const u = d.detail.originalEvent, c = u.target;
                (u.offsetX > c.clientWidth || u.offsetY > c.clientHeight) && d.preventDefault();
              })
            }), {
              default: f(() => [
                x(r.$slots, "default"),
                P(l(Bo), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: f(() => [
                    P(l(Fo), { class: "size-4" }),
                    i[1] || (i[1] = de("span", { class: "sr-only" }, "Close", -1))
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
}), $m = /* @__PURE__ */ w({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("div", {
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
}), qy = /* @__PURE__ */ w({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (s, r) => (v(), g(l(ar), K(H(l(o))), {
      default: f(() => [
        P(l(lr), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: f(() => [
            P(tr, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), km = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(qc), E(a.value, {
      class: l(z)("py-6 text-center text-sm", t.class)
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bm = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(Uc), E(a.value, {
      class: l(z)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: f(() => [
        n.heading ? (v(), g(l(Kc), {
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
}), Dm = { class: "flex items-center border-b px-3" }, Pm = /* @__PURE__ */ w({
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
    return (o, s) => (v(), U("div", Dm, [
      P(l(xm), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      P(l(zc), E({ ...l(n), ...o.$attrs }, {
        "auto-focus": "",
        class: l(z)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Om = /* @__PURE__ */ w({
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
    }), s = oe(o, n);
    return (r, i) => (v(), g(l(Jc), E(l(s), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: f(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sm = { role: "presentation" }, Em = /* @__PURE__ */ w({
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
    }), s = oe(o, n);
    return (r, i) => (v(), g(l(Gc), E(l(s), {
      class: l(z)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: f(() => [
        de("div", Sm, [
          x(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yy = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(Qc), E(a.value, {
      class: l(z)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xy = /* @__PURE__ */ w({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("span", {
      class: re(l(z)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), Mm = /* @__PURE__ */ w({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (s, r) => (v(), g(l(Mp), K(H(l(o))), {
      default: f(({ open: i }) => [
        x(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Am = /* @__PURE__ */ w({
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
    return (a, n) => (v(), U("div", {
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
}), Tm = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = ne(e);
    return (n, o) => (v(), g(l(Ap), E({ class: "outline-none" }, l(a)), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vm = /* @__PURE__ */ w({
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
    }), s = oe(o, n);
    return (r, i) => (v(), g(l(Tp), null, {
      default: f(() => [
        P(l(Vp), E(l(s), {
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
}), Zy = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(Ip), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jy = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (s, r) => (v(), g(l(Np), K(H(l(o))), {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qy = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(Vs), E(l(n), {
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
}), Im = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(Am, {
      class: re(t.class)
    }, {
      default: f(() => [
        P(l(Vs), E(l(n), {
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
}), Rm = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, eg = /* @__PURE__ */ w({
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
    }), s = oe(o, n);
    return (r, i) => (v(), g(l(Fp), E(l(s), {
      class: l(z)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        de("span", Rm, [
          P(l(Is), null, {
            default: f(() => [
              P(l(mn), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fm = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, tg = /* @__PURE__ */ w({
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
    }), s = oe(o, n);
    return (r, i) => (v(), g(l(zp), E(l(s), {
      class: l(z)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        de("span", Fm, [
          P(l(Is), null, {
            default: f(() => [
              P(l(ym), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ag = /* @__PURE__ */ w({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("span", {
      class: re(l(z)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), ng = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(Rp), E(a.value, {
      class: l(z)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), og = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(Lp), E(l(n), {
      class: l(z)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", t.class)
    }), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lg = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (s, r) => (v(), g(l(Wp), K(H(l(o))), {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sg = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(Kp), E(l(n), {
      class: l(z)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: f(() => [
        x(o.$slots, "default"),
        P(l(or), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rg = /* @__PURE__ */ w({
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
    }), s = oe(o, n);
    return (r, i) => (v(), g(l(Up), E(l(s), {
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
}), Lm = { class: "text-xs text-slate-600 dark:text-slate-300" }, Nm = /* @__PURE__ */ w({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(e) {
    return (t, a) => (v(), U("div", Lm, "Characters: " + X(t.count), 1));
  }
}), zm = {}, Wm = { class: "text-sm text-slate-400 dark:text-slate-500" };
function Um(e, t) {
  return v(), U("div", Wm, [
    x(e.$slots, "default")
  ]);
}
const Km = /* @__PURE__ */ xa(zm, [["render", Um]]), jm = { class: "text-sm text-red-600 dark:text-red-400" }, Hm = /* @__PURE__ */ w({
  __name: "Error",
  props: {
    error: {}
  },
  setup(e) {
    return (t, a) => Gt((v(), U("div", null, [
      de("p", jm, X(t.error), 1)
    ], 512)), [
      [Jn, t.error]
    ]);
  }
}), Gm = {}, qm = { class: "w-full space-y-4 p-1.5" };
function Ym(e, t) {
  return v(), U("div", qm, [
    x(e.$slots, "default")
  ]);
}
const ig = /* @__PURE__ */ xa(Gm, [["render", Ym]]), Xm = {}, Zm = { class: "my-4" };
function Jm(e, t) {
  return v(), U("div", Zm, [
    x(e.$slots, "default")
  ]);
}
const Qm = /* @__PURE__ */ xa(Xm, [["render", Jm]]), eh = { class: "grid gap-4 md:grid-cols-2" }, dg = /* @__PURE__ */ w({
  __name: "FormGrid",
  setup(e) {
    return (t, a) => (v(), g(Qm, null, {
      default: f(() => [
        de("div", eh, [
          x(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), sr = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(jp), E(a.value, {
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
}), th = { class: "relative" }, ah = {
  name: "Base",
  inheritAttrs: !1
}, wt = /* @__PURE__ */ w({
  ...ah,
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
      return v(), U("div", null, [
        t.label && t.showLabel ? (v(), g(l(sr), {
          key: 0,
          id: t.id
        }, {
          default: f(() => [
            Y(X(t.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : Q("", !0),
        de("div", th, [
          x(t.$slots, "default"),
          t.showCharacterCount ? (v(), g(l(Nm), {
            key: 0,
            count: (n = t.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : Q("", !0)
        ]),
        P(l(Km), { class: "mt-[5px]" }, {
          default: f(() => [
            Y(X(t.description), 1)
          ]),
          _: 1
        }),
        P(l(Hm), {
          error: t.error,
          class: "mt-[3px]"
        }, null, 8, ["error"])
      ]);
    };
  }
}), nh = { class: "flex gap-2" }, ug = /* @__PURE__ */ w({
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
    const a = t, o = A(e.modelValue);
    return ee(o, (s) => {
      a("update:modelValue", s);
    }), (s, r) => (v(), g(l(wt), K(H(s.$props)), {
      default: f(() => [
        de("div", nh, [
          P(l(Sc), {
            id: s.id,
            checked: o.value,
            "onUpdate:checked": r[0] || (r[0] = (i) => o.value = i),
            class: "peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=checked]:text-primary-50 dark:border-primary-900 dark:ring-offset-primary-950 dark:focus-visible:ring-primary-300 dark:data-[state=checked]:bg-primary-400 dark:data-[state=checked]:text-primary-800"
          }, {
            default: f(() => [
              P(l(Ec), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: f(() => [
                  P(l(mn), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          s.text ? (v(), g(l(sr), {
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
}), rr = /* @__PURE__ */ w({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (s, r) => (v(), g(l(nf), K(H(l(o))), {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ir = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(of), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dr = /* @__PURE__ */ w({
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
    }), s = oe(o, n);
    return (r, i) => (v(), g(l(lf), null, {
      default: f(() => [
        P(l(df), E({ ...l(s), ...r.$attrs }, {
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
}), cg = /* @__PURE__ */ w({
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
    const a = t, n = e, o = $(() => n.emptyMessage ?? "Option not found"), s = $(() => n.placeholder ?? "Select an option"), r = A(!1), i = A(n.modelValue ?? []), d = (p, y) => p.filter((m) => m.name.toLowerCase().includes(y.toLowerCase())), u = $(() => {
      var p;
      return Array.isArray(i.value) ? i.value.length ? i.value.map((y) => y.name).join(", ") : s.value : typeof i.value == "object" ? i.value.name : (p = n.options.find((y) => y.id === i.value)) == null ? void 0 : p.name;
    }), c = (p) => Array.isArray(i.value) ? i.value.find((y) => y.id === p.id) : typeof i.value == "object" ? i.value.id === p.id : i.value === p.id;
    return ee(i, () => {
      Array.isArray(i.value) ? a("update:modelValue", i.value) : a("update:modelValue", i.value.id);
    }), (p, y) => (v(), g(l(wt), K(H(p.$props)), {
      default: f(() => [
        P(l(rr), {
          open: r.value,
          "onUpdate:open": y[2] || (y[2] = (m) => r.value = m)
        }, {
          default: f(() => [
            P(l(ir), { "as-child": "" }, {
              default: f(() => [
                P(l(Xe), {
                  variant: "outline",
                  role: "combobox",
                  "aria-expanded": r.value,
                  class: "w-[200px] justify-between overflow-hidden"
                }, {
                  default: f(() => [
                    Y(X(u.value) + " ", 1),
                    P(l(hm), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
                  ]),
                  _: 1
                }, 8, ["aria-expanded"])
              ]),
              _: 1
            }),
            P(l(dr), { class: "w-[200px] p-0" }, {
              default: f(() => [
                P(l(tr), {
                  multiple: p.multiple,
                  modelValue: i.value,
                  "onUpdate:modelValue": y[1] || (y[1] = (m) => i.value = m),
                  "filter-function": d
                }, {
                  default: f(() => [
                    P(l(Pm), {
                      class: "h-9",
                      placeholder: s.value
                    }, null, 8, ["placeholder"]),
                    P(l(km), null, {
                      default: f(() => [
                        Y(X(o.value), 1)
                      ]),
                      _: 1
                    }),
                    P(l(Em), null, {
                      default: f(() => [
                        P(l(Bm), null, {
                          default: f(() => [
                            (v(!0), U(J, null, he(p.options, (m) => (v(), g(l(Om), {
                              key: m.id,
                              value: m,
                              onSelect: y[0] || (y[0] = () => {
                                p.multiple || (r.value = !1);
                              })
                            }, {
                              default: f(() => [
                                Y(X(m.name) + " ", 1),
                                P(l(mn), {
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
        }, 8, ["open"])
      ]),
      _: 1
    }, 16));
  }
}), pg = /* @__PURE__ */ w({
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
    }), s = A();
    return ee(s, () => {
      a("update:modelValue", s.value);
    }), ie(() => {
      n.defaultValue && (s.value = n.defaultValue);
    }), (r, i) => (v(), g(l(wt), K(H(r.$props)), {
      default: f(() => [
        P(l(rr), null, {
          default: f(() => [
            P(l(ir), { "as-child": "" }, {
              default: f(() => [
                P(l(Xe), {
                  variant: "outline",
                  class: re([
                    "w-[280px] justify-start text-left font-normal dark:text-white",
                    !r.modelValue && "text-muted-foreground"
                  ])
                }, {
                  default: f(() => [
                    P(l(cm), { class: "mr-2 size-4" }),
                    Y(" " + X(s.value ? l(o).format(s.value.toDate(l(Bt)())) : r.placeholder), 1)
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            }),
            P(l(dr), { class: "w-auto p-0" }, {
              default: f(() => [
                P(l(qv), {
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
var be = [];
for (var Sn = 0; Sn < 256; ++Sn)
  be.push((Sn + 256).toString(16).slice(1));
function oh(e, t = 0) {
  return (be[e[t + 0]] + be[e[t + 1]] + be[e[t + 2]] + be[e[t + 3]] + "-" + be[e[t + 4]] + be[e[t + 5]] + "-" + be[e[t + 6]] + be[e[t + 7]] + "-" + be[e[t + 8]] + be[e[t + 9]] + "-" + be[e[t + 10]] + be[e[t + 11]] + be[e[t + 12]] + be[e[t + 13]] + be[e[t + 14]] + be[e[t + 15]]).toLowerCase();
}
var Na, lh = new Uint8Array(16);
function sh() {
  if (!Na && (Na = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Na))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Na(lh);
}
var rh = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const fl = {
  randomUUID: rh
};
function ih(e, t, a) {
  if (fl.randomUUID && !t && !e)
    return fl.randomUUID();
  e = e || {};
  var n = e.random || (e.rng || sh)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, oh(n);
}
const dh = { class: "flex items-center space-x-2" }, uh = ["src"], ch = ["accept"], fg = /* @__PURE__ */ w({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = "file-upload-" + ih(), s = $(() => i.value ? URL.createObjectURL(i.value) : null), r = a.currentImage ? a.currentImage : a.defaultImage, i = $({
      get: () => a.modelValue,
      set: (c) => n("update:modelValue", c)
    }), d = (c) => {
      i.value = c.target.files[0];
    }, u = () => document.getElementById(o).click();
    return (c, p) => (v(), g(l(wt), K(H(c.$props)), {
      default: f(() => [
        de("div", dh, [
          x(c.$slots, "image", {
            newImage: s.value,
            curImage: l(r)
          }, () => [
            de("img", {
              src: s.value ?? l(r),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, uh)
          ]),
          de("input", {
            id: o,
            accept: c.accept,
            hidden: "",
            type: "file",
            onInput: d
          }, null, 40, ch),
          P(l(Xe), {
            variant: "outline",
            onClick: u
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
}), ph = ["disabled", "placeholder", "required", "type"], vg = /* @__PURE__ */ w({
  __name: "Input",
  props: /* @__PURE__ */ An({
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
    return (a, n) => (v(), g(l(wt), K(H(a.$props)), {
      default: f(() => [
        Gt(de("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: re(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
          }])
        }, null, 10, ph), [
          [Er, t.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), fh = /* @__PURE__ */ w({
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
    const o = oe(e, t);
    return (s, r) => (v(), g(l(Ef), K(H(l(o))), {
      default: f(({ open: i }) => [
        x(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), vh = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(tv), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mh = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(Tf), E(l(n), {
      class: l(z)(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-start text-sm ring-offset-background transition placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        t.class
      )
    }), {
      default: f(() => [
        x(o.$slots, "default"),
        P(l(av), { "as-child": "" }, {
          default: f(() => [
            P(l(nr), {
              class: re(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hh = /* @__PURE__ */ w({
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
    }), s = oe(o, n);
    return (r, i) => (v(), g(l(Vf), null, {
      default: f(() => [
        P(l(Uf), E({ ...l(s), ...r.$attrs }, {
          class: l(z)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            r.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: f(() => [
            P(l(bh)),
            P(l(Jf), {
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
            P(l(wh))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), mg = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(Xf), E({
      class: l(z)("w-full p-1", t.class)
    }, a.value), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yh = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, gh = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(Hf), E(l(n), {
      class: l(z)(
        "focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        t.class
      )
    }), {
      default: f(() => [
        de("span", yh, [
          P(l(Gf), null, {
            default: f(() => [
              P(l(mn), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        P(l(zs), null, {
          default: f(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hg = /* @__PURE__ */ w({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(zs), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yg = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(Zf), {
      class: re(l(z)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), gg = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(Kf), E(a.value, {
      class: l(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), bh = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(Qf), E(l(n), {
      class: l(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        x(o.$slots, "default", {}, () => [
          P(l(fm), { class: "size-4 text-primary-900" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wh = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(ev), E(l(n), {
      class: l(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        x(o.$slots, "default", {}, () => [
          P(l(nr), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bg = /* @__PURE__ */ w({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = $(() => n.placeholder ?? "Select an option..."), s = A(
      n.modelValue ? n.options.find((r) => r === n.modelValue) : null
    );
    return ee(s, () => {
      a("update:modelValue", s.value);
    }), (r, i) => (v(), g(l(wt), K(H(r.$props)), {
      default: f(() => [
        P(l(fh), {
          modelValue: s.value,
          "onUpdate:modelValue": i[0] || (i[0] = (d) => s.value = d)
        }, {
          default: f(({ open: d }) => [
            P(l(mh), { open: d }, {
              default: f(() => [
                P(l(vh), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            P(l(hh), null, {
              default: f(() => [
                (v(!0), U(J, null, he(r.options, (u) => (v(), g(l(gh), { value: u }, {
                  default: f(() => [
                    Y(X(u), 1)
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
function ur(e) {
  return Xn() ? (Zn(e), !0) : !1;
}
function hn(e) {
  return typeof e == "function" ? e() : l(e);
}
const _h = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const xh = (e) => typeof e < "u", Ch = Object.prototype.toString, $h = (e) => Ch.call(e) === "[object Object]", cr = () => {
};
function kh(e, t) {
  function a(...n) {
    return new Promise((o, s) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(s);
    });
  }
  return a;
}
const pr = (e) => e();
function Bh(e = pr) {
  const t = A(!0);
  function a() {
    t.value = !1;
  }
  function n() {
    t.value = !0;
  }
  const o = (...s) => {
    t.value && e(...s);
  };
  return { isActive: _a(t), pause: a, resume: n, eventFilter: o };
}
function Dh(e) {
  return He();
}
function Ph(...e) {
  if (e.length !== 1)
    return wl(...e);
  const t = e[0];
  return typeof t == "function" ? _a(Bl(() => ({ get: t, set: cr }))) : A(t);
}
function Oh(e, t, a = {}) {
  const {
    eventFilter: n = pr,
    ...o
  } = a;
  return ee(
    e,
    kh(
      n,
      t
    ),
    o
  );
}
function Sh(e, t, a = {}) {
  const {
    eventFilter: n,
    ...o
  } = a, { eventFilter: s, pause: r, resume: i, isActive: d } = Bh(n);
  return { stop: Oh(
    e,
    t,
    {
      ...o,
      eventFilter: s
    }
  ), pause: r, resume: i, isActive: d };
}
function fr(e, t = !0, a) {
  Dh() ? ie(e, a) : t ? e() : te(e);
}
function vr(e) {
  var t;
  const a = hn(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const Ht = _h ? window : void 0;
function vl(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = Ht) : [t, a, n, o] = e, !t)
    return cr;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, p, y, m) => (c.addEventListener(p, y, m), () => c.removeEventListener(p, y, m)), d = ee(
    () => [vr(t), hn(o)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const y = $h(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((b) => i(c, m, b, y)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), r();
  };
  return ur(u), u;
}
function Eh() {
  const e = A(!1), t = He();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function Mh(e) {
  const t = Eh();
  return $(() => (t.value, !!e()));
}
function Ah(e, t = {}) {
  const { window: a = Ht } = t, n = Mh(() => a && "matchMedia" in a && typeof a.matchMedia == "function");
  let o;
  const s = A(!1), r = (u) => {
    s.value = u.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", r) : o.removeListener(r));
  }, d = ye(() => {
    n.value && (i(), o = a.matchMedia(hn(e)), "addEventListener" in o ? o.addEventListener("change", r) : o.addListener(r), s.value = o.matches);
  });
  return ur(() => {
    d(), i(), o = void 0;
  }), s;
}
function Th(e) {
  return JSON.parse(JSON.stringify(e));
}
const za = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wa = "__vueuse_ssr_handlers__", Vh = /* @__PURE__ */ Ih();
function Ih() {
  return Wa in za || (za[Wa] = za[Wa] || {}), za[Wa];
}
function mr(e, t) {
  return Vh[e] || t;
}
function Rh(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Fh = {
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
}, ml = "vueuse-storage";
function Lh(e, t, a, n = {}) {
  var o;
  const {
    flush: s = "pre",
    deep: r = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: d = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: p = Ht,
    eventFilter: y,
    onError: m = (B) => {
      console.error(B);
    },
    initOnMounted: b
  } = n, h = (c ? Yn : A)(typeof t == "function" ? t() : t);
  if (!a)
    try {
      a = mr("getDefaultStorage", () => {
        var B;
        return (B = Ht) == null ? void 0 : B.localStorage;
      })();
    } catch (B) {
      m(B);
    }
  if (!a)
    return h;
  const _ = hn(t), C = Rh(_), D = (o = n.serializer) != null ? o : Fh[C], { pause: k, resume: O } = Sh(
    h,
    () => V(h.value),
    { flush: s, deep: r, eventFilter: y }
  );
  p && i && fr(() => {
    vl(p, "storage", F), vl(p, ml, R), b && F();
  }), b || F();
  function S(B, T) {
    p && p.dispatchEvent(new CustomEvent(ml, {
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
        S(T, null), a.removeItem(e);
      else {
        const I = D.write(B);
        T !== I && (a.setItem(e, I), S(T, I));
      }
    } catch (T) {
      m(T);
    }
  }
  function M(B) {
    const T = B ? B.newValue : a.getItem(e);
    if (T == null)
      return d && _ != null && a.setItem(e, D.write(_)), _;
    if (!B && u) {
      const I = D.read(T);
      return typeof u == "function" ? u(I, _) : C === "object" && !Array.isArray(I) ? { ..._, ...I } : I;
    } else return typeof T != "string" ? T : D.read(T);
  }
  function F(B) {
    if (!(B && B.storageArea !== a)) {
      if (B && B.key == null) {
        h.value = _;
        return;
      }
      if (!(B && B.key !== e)) {
        k();
        try {
          (B == null ? void 0 : B.newValue) !== D.write(h.value) && (h.value = M(B));
        } catch (T) {
          m(T);
        } finally {
          B ? te(O) : O();
        }
      }
    }
  }
  function R(B) {
    F(B.detail);
  }
  return h;
}
function hr(e) {
  return Ah("(prefers-color-scheme: dark)", e);
}
function Nh(e = {}) {
  const {
    selector: t = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = Ht,
    storage: s,
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
  }, y = hr({ window: o }), m = $(() => y.value ? "dark" : "light"), b = d || (r == null ? Ph(n) : Lh(r, n, s, { window: o, listenToStorageChanges: i })), h = $(() => b.value === "auto" ? m.value : b.value), _ = mr(
    "updateHTMLAttrs",
    (O, S, V) => {
      const M = typeof O == "string" ? o == null ? void 0 : o.document.querySelector(O) : vr(O);
      if (!M)
        return;
      let F;
      if (c && (F = o.document.createElement("style"), F.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(F)), S === "class") {
        const R = V.split(/\s/g);
        Object.values(p).flatMap((B) => (B || "").split(/\s/g)).filter(Boolean).forEach((B) => {
          R.includes(B) ? M.classList.add(B) : M.classList.remove(B);
        });
      } else
        M.setAttribute(S, V);
      c && (o.getComputedStyle(F).opacity, document.head.removeChild(F));
    }
  );
  function C(O) {
    var S;
    _(t, a, (S = p[O]) != null ? S : O);
  }
  function D(O) {
    e.onChanged ? e.onChanged(O, C) : C(O);
  }
  ee(h, D, { flush: "post", immediate: !0 }), fr(() => D(h.value));
  const k = $({
    get() {
      return u ? b.value : h.value;
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
function zh(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: a = "",
    window: n = Ht
  } = e, o = Nh({
    ...e,
    onChanged: (i, d) => {
      var u;
      e.onChanged ? (u = e.onChanged) == null || u.call(e, i === "dark", d, i) : d(i);
    },
    modes: {
      dark: t,
      light: a
    }
  }), s = $(() => o.system ? o.system.value : hr({ window: n }).value ? "dark" : "light");
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
function Wh(e, t, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: y
  } = n, m = He(), b = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let h = u;
  h = h || `update:${t.toString()}`;
  const _ = (k) => i ? typeof i == "function" ? i(k) : Th(k) : k, C = () => xh(e[t]) ? _(e[t]) : p, D = (k) => {
    y ? y(k) && b(h, k) : b(h, k);
  };
  if (d) {
    const k = C(), O = A(k);
    let S = !1;
    return ee(
      () => e[t],
      (V) => {
        S || (S = !0, O.value = _(V), te(() => S = !1));
      }
    ), ee(
      O,
      (V) => {
        !S && (V !== e[t] || c) && D(V);
      },
      { deep: c }
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
const Uh = ["placeholder"], wg = /* @__PURE__ */ w({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = Wh(e, "modelValue", t, {
      passive: !0
    });
    return (s, r) => (v(), g(l(wt), K(H(s.$props)), {
      default: f(() => [
        Gt(de("textarea", {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => wa(o) ? o.value = i : null),
          placeholder: s.placeholder,
          class: re(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !s.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": s.error
          }])
        }, null, 10, Uh), [
          [Mr, l(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), Kh = /* @__PURE__ */ w({
  __name: "Toggle",
  props: /* @__PURE__ */ An({
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
  emits: /* @__PURE__ */ An(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const a = t, n = e, o = Pl(e, "modelValue");
    ee(o, () => {
      a("update:modelValue", o.value);
    });
    const s = $(() => {
      const { class: i, ...d } = n;
      return d;
    }), r = oe(s, a);
    return (i, d) => (v(), g(l(wt), K(H(i.$props)), {
      default: f(() => [
        P(l($v), E({
          checked: o.value,
          "onUpdate:checked": d[0] || (d[0] = (u) => o.value = u)
        }, l(r), {
          class: l(z)(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-600 data-[state=unchecked]:bg-primary-300 dark:focus-visible:ring-primary-300 dark:focus-visible:ring-offset-primary-800 dark:data-[state=checked]:bg-primary-900 dark:data-[state=unchecked]:bg-primary-500",
            n.class
          )
        }), {
          default: f(({ checked: u }) => [
            P(l(kv), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: f(() => [
                u ? x(i.$slots, "checked", { key: 0 }) : Q("", !0),
                u ? Q("", !0) : x(i.$slots, "not-checked", { key: 1 })
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
}), jh = { class: "my-auto text-slate-400 dark:text-slate-100" }, Hh = /* @__PURE__ */ w({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, a) => (v(), U("div", jh, " Showing " + X(t.min) + " to " + X(t.max) + " of " + X(t.total) + " results ", 1));
  }
}), Gh = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(qp), E(a.value, {
      class: l(z)("flex size-9 items-center justify-center", t.class)
    }), {
      default: f(() => [
        x(n.$slots, "default", {}, () => [
          P(l(gm))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qh = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(Yp), K(H(a.value)), {
      default: f(() => [
        P(l(Xe), {
          class: re(l(z)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            x(n.$slots, "default", {}, () => [
              P(l(vm), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), Yh = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(Xp), K(H(a.value)), {
      default: f(() => [
        P(l(Xe), {
          class: re(l(z)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            x(n.$slots, "default", {}, () => [
              P(l(mm), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), Xh = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(ef), K(H(a.value)), {
      default: f(() => [
        P(l(Xe), {
          class: re(l(z)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            x(n.$slots, "default", {}, () => [
              P(l(or), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), Zh = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(tf), K(H(a.value)), {
      default: f(() => [
        P(l(Xe), {
          class: re(l(z)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            x(n.$slots, "default", {}, () => [
              P(l(pm), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), _g = /* @__PURE__ */ w({
  __name: "LumuixModeToggle",
  setup(e) {
    const t = zh({
      selector: "html"
    });
    return (a, n) => (v(), g(Kh, {
      modelValue: l(t),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => wa(t) ? t.value = o : null)
    }, {
      checked: f(() => [
        P(l(bm), { class: "m-auto mt-0.5 size-4 text-primary-900" })
      ]),
      "not-checked": f(() => [
        P(l(Cm), { class: "m-auto mt-0.5 size-4 text-primary-900" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), xg = /* @__PURE__ */ w({
  __name: "CollapsibleTableRow",
  props: {
    row: {},
    headers: {},
    subRows: {},
    setOpenTo: { type: Boolean, default: !1 },
    class: {}
  },
  setup(e) {
    const t = e, a = A(t.setOpenTo), n = () => {
      a.value = !a.value;
    };
    return (o, s) => (v(), U(J, null, [
      P(l(ba), {
        onClick: n,
        class: re(t.class)
      }, {
        default: f(() => [
          (v(!0), U(J, null, he(o.headers, (r) => (v(), g(l(Qa), {
            key: r.value
          }, {
            default: f(() => [
              o.$slots[`cell_header_${r.value}`] ? x(o.$slots, `cell_header_${r.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (v(), U(J, { key: 1 }, [
                Y(X(o.row[r.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (v(), g(l(qn), { key: 0 }, {
            default: f(() => [
              x(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : Q("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (v(!0), U(J, { key: 0 }, he(o.subRows, (r, i) => (v(), g(l(ba), { key: i }, {
        default: f(() => [
          (v(!0), U(J, null, he(o.headers, (d) => (v(), g(l(Qa), {
            key: d.value
          }, {
            default: f(() => [
              o.$slots[`subrow_cell_${d.value}`] ? x(o.$slots, `subrow_cell_${d.value}`, {
                key: 0,
                item: r,
                open: a.value
              }) : (v(), U(J, { key: 1 }, [
                Y(X("subrow_cell_" + d.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (v(), g(l(qn), { key: 0 }, {
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
}), Jh = { class: "relative w-full overflow-auto" }, Qh = /* @__PURE__ */ w({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("div", Jh, [
      de("table", {
        class: re(l(z)("w-full caption-bottom text-sm", t.class))
      }, [
        x(a.$slots, "default")
      ], 2)
    ]));
  }
}), ey = /* @__PURE__ */ w({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("tbody", {
      class: re(l(z)("[&_tr:last-child]:border-0", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), Qa = /* @__PURE__ */ w({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("td", {
      class: re(["p-4 align-middle dark:text-slate-300 [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), ty = /* @__PURE__ */ w({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("th", {
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
}), ay = /* @__PURE__ */ w({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("thead", {
      class: re(l(z)("[&_tr]:border-b", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), Cg = /* @__PURE__ */ w({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("tfoot", {
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
}), ba = /* @__PURE__ */ w({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("tr", {
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
}), qn = /* @__PURE__ */ w({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("td", {
      class: re(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), ny = /* @__PURE__ */ w({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("caption", {
      class: re(l(z)("mt-4 text-sm text-slate-500 dark:text-slate-400", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), oy = { class: "flex items-center justify-center py-10" }, $g = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(ba, null, {
      default: f(() => [
        P(Qa, E({
          class: l(z)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, a.value), {
          default: f(() => [
            de("div", oy, [
              x(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), kg = /* @__PURE__ */ w({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, a) => (v(), g(l(Qh), null, {
      default: f(() => [
        t.caption ? (v(), g(l(ny), { key: 0 }, {
          default: f(() => [
            Y(X(t.caption), 1)
          ]),
          _: 1
        })) : Q("", !0),
        P(l(ay), null, {
          default: f(() => [
            P(l(ba), null, {
              default: f(() => [
                (v(!0), U(J, null, he(t.headers, (n, o) => (v(), g(l(ty), null, {
                  default: f(() => [
                    t.$slots[`header_${t.headers[o].value}`] ? x(t.$slots, `header_${t.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (v(), U(J, { key: 1 }, [
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
        P(l(ey), null, {
          default: f(() => [
            (v(!0), U(J, null, he(t.rows, (n, o) => (v(), g(l(ba), { key: o }, {
              default: f(() => [
                (v(!0), U(J, null, he(t.headers, (s) => (v(), g(l(Qa), {
                  key: s.value
                }, {
                  default: f(() => [
                    t.$slots[`cell_${s.value}`] ? x(t.$slots, `cell_${s.value}`, {
                      key: 0,
                      item: n
                    }) : (v(), U(J, { key: 1 }, [
                      Y(X(n[s.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                t.$slots.row_actions ? (v(), g(l(qn), { key: 0 }, {
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
}), ly = { class: "text-black dark:text-slate-400" }, Bg = /* @__PURE__ */ w({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const a = t, n = () => a("close");
    return (o, s) => (v(), g(l(ar), { open: o.open }, {
      default: f(() => [
        P(l(lm), { "as-child": "" }, {
          default: f(() => [
            x(o.$slots, "trigger")
          ]),
          _: 3
        }),
        P(l(lr), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: re("max-w-" + o.size)
        }, {
          default: f(() => [
            P(l(sm), null, {
              default: f(() => [
                P(l(rm), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.title ? x(o.$slots, "title", { key: 0 }) : (r = o.headerData) != null && r.title ? (v(), U(J, { key: 1 }, [
                        Y(X(o.headerData.title), 1)
                      ], 64)) : Q("", !0)
                    ];
                  }),
                  _: 3
                }),
                P(l(im), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.description ? x(o.$slots, "description", { key: 0 }) : (r = o.headerData) != null && r.description ? (v(), U(J, { key: 1 }, [
                        Y(X(o.headerData.description), 1)
                      ], 64)) : Q("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            de("div", ly, [
              o.$slots.content ? x(o.$slots, "content", { key: 0 }) : x(o.$slots, "default", { key: 1 })
            ]),
            P(l($m), null, {
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
}), sy = { class: "justify-between sm:flex" }, Dg = /* @__PURE__ */ w({
  __name: "LumuixPagination",
  props: {
    data: {},
    as: {}
  },
  setup(e) {
    const t = e, a = () => t.data.current_page === 1 ? t.data.data.length === 0 ? 0 : 1 : t.data.current_page === t.data.last_page ? t.data.total - t.data.data.length : t.data.current_page * t.data.per_page - t.data.per_page, n = () => t.data.current_page === 1 ? t.data.data.length : t.data.current_page === t.data.last_page ? t.data.total : t.data.current_page * t.data.per_page;
    return (o, s) => (v(), U("div", sy, [
      P(l(Hh), {
        min: a(),
        max: n(),
        total: o.data.total
      }, null, 8, ["min", "max", "total"]),
      P(l(Gp), null, {
        default: f(() => [
          P(l(Qp), { class: "flex items-center gap-1" }, {
            default: f(() => [
              P(l(qh), {
                as: o.as,
                "as-child": "",
                href: o.data.first_page_url
              }, null, 8, ["as", "href"]),
              o.data.prev_page_url ? (v(), g(l(Zh), {
                key: 0,
                as: o.as,
                "as-child": "",
                href: o.data.prev_page_url
              }, null, 8, ["as", "href"])) : Q("", !0),
              (v(!0), U(J, null, he(o.data.links, (r, i) => (v(), U(J, null, [
                i < 5 ? (v(), U("div", { key: i }, [
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
              o.data.links.length > 5 ? (v(), g(l(Gh), { key: 1 })) : Q("", !0),
              o.data.next_page_url ? (v(), g(l(Xh), {
                key: 2,
                as: o.as,
                "as-child": "",
                href: o.data.next_page_url
              }, null, 8, ["as", "href"])) : Q("", !0),
              P(l(Yh), {
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
}), ry = /* @__PURE__ */ w({
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
    const o = oe(e, t);
    return (s, r) => (v(), g(l(Dv), K(H(l(o))), {
      default: f(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pg = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(Sv), E(l(n), {
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
}), iy = /* @__PURE__ */ w({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => {
      var o;
      return v(), g(Ie((o = a.tab) != null && o.is ? a.tab.is : "a"), {
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
          var s;
          return [
            (s = a.tab) != null && s.icon ? (v(), g(Ie(a.tab.icon), {
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
}), hl = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(Pv), E(a.value, {
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
}), Og = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(Ov), E({
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
}), dy = {}, uy = { class: "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function cy(e, t) {
  return v(), U("div", uy, [
    x(e.$slots, "default")
  ]);
}
const py = /* @__PURE__ */ xa(dy, [["render", cy]]), Sg = /* @__PURE__ */ w({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(e) {
    const t = e, a = $(
      () => t.tabs.find((n) => n.active)
    );
    return (n, o) => (v(), g(l(ry), null, {
      default: f(() => [
        P(l(hl), { class: "hidden gap-2 md:block" }, {
          default: f(() => [
            (v(!0), U(J, null, he(n.tabs, (s) => (v(), g(l(iy), {
              key: s.name,
              tab: s
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        P(l(hl), { class: "flex md:hidden" }, {
          default: f(() => [
            P(l(Mm), null, {
              default: f(() => [
                P(l(Tm), { "as-child": "" }, {
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
                P(l(Vm), { class: "w-full" }, {
                  default: f(() => [
                    (v(!0), U(J, null, he(n.tabs, (s) => (v(), g(l(Im), E({
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
        P(l(py), null, {
          default: f(() => [
            x(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), fy = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, Eg = /* @__PURE__ */ w({
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
    }), s = oe(o, n);
    return (r, i) => (v(), g(l(vf), E({
      class: l(z)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: u }) => [
        P(l(wy), null, {
          default: f(() => [
            P(l(Cy)),
            P(l(_y)),
            P(l(xy))
          ]),
          _: 1
        }),
        de("div", fy, [
          (v(!0), U(J, null, he(d, (c) => (v(), g(l(hy), {
            key: c.value.toString()
          }, {
            default: f(() => [
              P(l(gy), null, {
                default: f(() => [
                  P(l(yl), null, {
                    default: f(() => [
                      (v(!0), U(J, null, he(u, (p) => (v(), g(l(by), { key: p }, {
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
              P(l(yy), null, {
                default: f(() => [
                  (v(!0), U(J, null, he(c.rows, (p, y) => (v(), g(l(yl), {
                    key: `weekDate-${y}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), U(J, null, he(p, (m) => (v(), g(l(vy), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          P(l(my), {
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
}), vy = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(gf), E({
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
}), my = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(kf), E({
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
}), hy = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(yf), E({
      class: l(z)("w-full border-collapse space-y-1", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yy = /* @__PURE__ */ w({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(Cf), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gy = /* @__PURE__ */ w({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(xf), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yl = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l($f), E({
      class: l(z)("mt-2 flex w-full", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), by = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(bf), E({
      class: l(z)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wy = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(mf), E({
      class: l(z)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _y = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(hf), E({
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
}), xy = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(wf), E({
      class: l(z)(
        l(At)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default", {}, () => [
          P(l(_m), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cy = /* @__PURE__ */ w({
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
    return (o, s) => (v(), g(l(_f), E({
      class: l(z)(
        l(At)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        x(o.$slots, "default", {}, () => [
          P(l(wm), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mg = /* @__PURE__ */ w({
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
    }), s = oe(o, n);
    return (r, i) => (v(), g(l(mv), E({
      class: l(z)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        a.class
      )
    }, l(s)), {
      default: f(() => [
        P(l(gv), { class: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary data-[orientation=vertical]:w-2" }, {
          default: f(() => [
            P(l(bv), { class: "absolute h-full bg-primary data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (v(!0), U(J, null, he(r.modelValue, (d, u) => (v(), g(l(yv), {
          key: u,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), $y = 5, ky = 5e6, ot = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let En = 0;
function By() {
  return En = (En + 1) % Number.MAX_VALUE, En.toString();
}
const Mn = /* @__PURE__ */ new Map();
function gl(e) {
  if (Mn.has(e)) return;
  const t = setTimeout(() => {
    Mn.delete(e), pa({
      type: ot.REMOVE_TOAST,
      toastId: e
    });
  }, ky);
  Mn.set(e, t);
}
const Ae = A({
  toasts: []
});
function pa(e) {
  switch (e.type) {
    case ot.ADD_TOAST:
      Ae.value.toasts = [e.toast, ...Ae.value.toasts].slice(0, $y);
      break;
    case ot.UPDATE_TOAST:
      Ae.value.toasts = Ae.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case ot.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? gl(t) : Ae.value.toasts.forEach((a) => {
        gl(a.id);
      }), Ae.value.toasts = Ae.value.toasts.map(
        (a) => a.id === t || t === void 0 ? {
          ...a,
          open: !1
        } : a
      );
      break;
    }
    case ot.REMOVE_TOAST:
      e.toastId === void 0 ? Ae.value.toasts = [] : Ae.value.toasts = Ae.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function Dy() {
  return {
    toasts: $(() => Ae.value.toasts),
    toast: Py,
    dismiss: (e) => pa({ type: ot.DISMISS_TOAST, toastId: e })
  };
}
function Py(e) {
  const t = By(), a = (o) => pa({
    type: ot.UPDATE_TOAST,
    toast: { ...o, id: t }
  }), n = () => pa({ type: ot.DISMISS_TOAST, toastId: t });
  return pa({
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
const Oy = { class: "flex gap-3" }, Sy = { class: "grid gap-1" }, Ag = /* @__PURE__ */ w({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = Dy();
    return (a, n) => (v(), g(l(Vy), null, {
      default: f(() => [
        (v(!0), U(J, null, he(l(t), (o) => (v(), g(l(Ey), E({
          key: o.id,
          ref_for: !0
        }, o, { class: "my-1" }), {
          default: f(() => [
            de("div", Oy, [
              (v(), g(Ie(o.icon), {
                class: re(l(z)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              de("div", Sy, [
                o.title ? (v(), g(l(Ty), { key: 0 }, {
                  default: f(() => [
                    Y(X(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : Q("", !0),
                o.description ? (v(), U(J, { key: 1 }, [
                  Ar(o.description) ? (v(), g(l(bl), { key: 0 }, {
                    default: f(() => [
                      (v(), g(Ie(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (v(), g(l(bl), { key: 1 }, {
                    default: f(() => [
                      Y(X(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : Q("", !0),
                P(l(Ay))
              ]),
              (v(), g(Ie(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        P(l(My))
      ]),
      _: 1
    }));
  }
}), Ey = /* @__PURE__ */ w({
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
    }), s = oe(o, n);
    return (r, i) => (v(), g(l(Wv), E(l(s), {
      class: l(z)(l(Iy)({ variant: r.variant }), a.class),
      "onUpdate:open": r.onOpenChange
    }), {
      default: f(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), My = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(Kv), E(a.value, {
      class: l(z)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Tg = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(Uv), K(H(a.value)), {
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
}), Ay = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(er), E(a.value, {
      class: l(z)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: f(() => [
        P(l(Fo), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Ty = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(jv), E(a.value, {
      class: l(z)("text-sm font-semibold", t.class)
    }), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bl = /* @__PURE__ */ w({
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
    return (n, o) => (v(), g(l(Hv), E({
      class: l(z)("text-sm opacity-90", t.class)
    }, a.value), {
      default: f(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vy = /* @__PURE__ */ w({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(Mv), K(H(t)), {
      default: f(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Iy = eo(
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
  Ny as Badge,
  wt as Base,
  Am as BaseDropdownMenuItem,
  Xe as Button,
  qv as Calendar,
  Yv as CalendarCell,
  Xv as CalendarCellTrigger,
  Zv as CalendarGrid,
  Jv as CalendarGridBody,
  Qv as CalendarGridHead,
  pl as CalendarGridRow,
  em as CalendarHeadCell,
  tm as CalendarHeader,
  am as CalendarHeading,
  nm as CalendarNextButton,
  om as CalendarPrevButton,
  Nm as CharacterCount,
  ug as Checkbox,
  xg as CollapsibleTableRow,
  cg as Combobox,
  tr as Command,
  qy as CommandDialog,
  km as CommandEmpty,
  Bm as CommandGroup,
  Pm as CommandInput,
  Om as CommandItem,
  Em as CommandList,
  Yy as CommandSeparator,
  Xy as CommandShortcut,
  Ly as Container,
  pg as DatePicker,
  Km as Description,
  ar as Dialog,
  Hy as DialogClose,
  lr as DialogContent,
  im as DialogDescription,
  $m as DialogFooter,
  sm as DialogHeader,
  Gy as DialogScrollContent,
  rm as DialogTitle,
  lm as DialogTrigger,
  Mm as DropdownMenu,
  eg as DropdownMenuCheckboxItem,
  Vm as DropdownMenuContent,
  Zy as DropdownMenuGroup,
  Qy as DropdownMenuItem,
  og as DropdownMenuLabel,
  Im as DropdownMenuLink,
  Tp as DropdownMenuPortal,
  Jy as DropdownMenuRadioGroup,
  tg as DropdownMenuRadioItem,
  ng as DropdownMenuSeparator,
  ag as DropdownMenuShortcut,
  lg as DropdownMenuSub,
  rg as DropdownMenuSubContent,
  sg as DropdownMenuSubTrigger,
  Tm as DropdownMenuTrigger,
  Hm as Error,
  ig as Form,
  Qm as FormElement,
  dg as FormGrid,
  fg as ImageUpload,
  vg as Input,
  sr as Label,
  kg as LumuixDatatable,
  Bg as LumuixModal,
  _g as LumuixModeToggle,
  Dg as LumuixPagination,
  Sg as LumuixTabs,
  Gp as Pagination,
  Hh as PaginationDetails,
  Gh as PaginationEllipsis,
  qh as PaginationFirst,
  Yh as PaginationLast,
  Qp as PaginationList,
  jy as PaginationListItem,
  Xh as PaginationNext,
  Zh as PaginationPrev,
  rr as Popover,
  dr as PopoverContent,
  ir as PopoverTrigger,
  Eg as RangeCalendar,
  vy as RangeCalendarCell,
  my as RangeCalendarCellTrigger,
  hy as RangeCalendarGrid,
  yy as RangeCalendarGridBody,
  gy as RangeCalendarGridHead,
  yl as RangeCalendarGridRow,
  by as RangeCalendarHeadCell,
  wy as RangeCalendarHeader,
  _y as RangeCalendarHeading,
  xy as RangeCalendarNextButton,
  Cy as RangeCalendarPrevButton,
  bg as Select,
  hh as SelectContent,
  mg as SelectGroup,
  gh as SelectItem,
  hg as SelectItemText,
  yg as SelectLabel,
  fh as SelectRoot,
  wh as SelectScrollDownButton,
  bh as SelectScrollUpButton,
  gg as SelectSeparator,
  mh as SelectTrigger,
  vh as SelectValue,
  Mg as Slider,
  py as TabBaseContent,
  Qh as Table,
  ey as TableBody,
  ny as TableCaption,
  Qa as TableCell,
  $g as TableEmpty,
  Cg as TableFooter,
  ty as TableHead,
  ay as TableHeader,
  ba as TableRow,
  qn as TableRowAction,
  Og as TabsContent,
  iy as TabsItem,
  hl as TabsList,
  ry as TabsRoot,
  Pg as TabsTrigger,
  wg as TextArea,
  Ey as Toast,
  Tg as ToastAction,
  Ay as ToastClose,
  bl as ToastDescription,
  Vy as ToastProvider,
  Ty as ToastTitle,
  My as ToastViewport,
  Ag as Toaster,
  Kh as Toggle,
  hi as badgeVariants,
  At as buttonVariants,
  Fy as preset,
  Py as toast,
  Iy as toastVariants,
  Dy as useToast
};
