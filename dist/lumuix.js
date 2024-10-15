import * as Mo from "vue";
import { openBlock as v, createElementBlock as U, renderSlot as w, defineComponent as b, normalizeClass as se, unref as l, computed as $, ref as M, shallowRef as Gn, watch as Q, getCurrentScope as qn, onScopeDispose as Yn, shallowReadonly as At, getCurrentInstance as He, toRef as vl, camelize as ml, Comment as ir, mergeProps as E, cloneVNode as dr, h as ze, toRefs as me, onMounted as ie, createBlock as y, withCtx as f, normalizeProps as j, guardReactiveProps as H, reactive as hl, createVNode as O, createCommentVNode as J, createElementVNode as de, toDisplayString as X, createTextVNode as Y, withKeys as We, withModifiers as _e, Fragment as ee, watchEffect as ge, markRaw as ur, nextTick as te, watchSyncEffect as cr, withDirectives as Gt, vShow as Xn, isRef as ba, resolveDynamicComponent as Ue, renderList as he, Teleport as Ja, onBeforeUnmount as Zn, useSlots as pr, onBeforeMount as fr, normalizeStyle as wa, effectScope as gl, toHandlerKey as vr, onUnmounted as kt, vModelSelect as mr, inject as yl, provide as bl, customRef as wl, readonly as _a, onBeforeUpdate as hr, onUpdated as gr, mergeDefaults as _l, watchPostEffect as yr, mergeModels as Sn, useModel as xl, vModelDynamic as br, vModelText as wr, isVNode as _r } from "vue";
const ug = {
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
}, xr = {}, Cr = { class: "p-6" };
function $r(e, t) {
  return v(), U("div", Cr, [
    w(e.$slots, "default")
  ]);
}
const cg = /* @__PURE__ */ xa(xr, [["render", $r]]);
function Cl(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (a = Cl(e[t])) && (n && (n += " "), n += a);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function kr() {
  for (var e, t, a = 0, n = ""; a < arguments.length; ) (e = arguments[a++]) && (t = Cl(e)) && (n && (n += " "), n += t);
  return n;
}
const To = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Ao = kr, Jn = (e, t) => (a) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Ao(e, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: s } = t, r = Object.keys(o).map((c) => {
    const u = a == null ? void 0 : a[c], p = s == null ? void 0 : s[c];
    if (u === null) return null;
    const h = To(u) || To(p);
    return o[c][h];
  }), i = a && Object.entries(a).reduce((c, u) => {
    let [p, h] = u;
    return h === void 0 || (c[p] = h), c;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, u) => {
    let { class: p, className: h, ...m } = u;
    return Object.entries(m).every((x) => {
      let [g, _] = x;
      return Array.isArray(_) ? _.includes({
        ...s,
        ...i
      }[g]) : {
        ...s,
        ...i
      }[g] === _;
    }) ? [
      ...c,
      p,
      h
    ] : c;
  }, []);
  return Ao(e, r, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, Qn = "-", Br = (e) => {
  const t = Dr(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (r) => {
      const i = r.split(Qn);
      return i[0] === "" && i.length !== 1 && i.shift(), $l(i, t) || Pr(r);
    },
    getConflictingClassGroupIds: (r, i) => {
      const d = a[r] || [];
      return i && n[r] ? [...d, ...n[r]] : d;
    }
  };
}, $l = (e, t) => {
  var r;
  if (e.length === 0)
    return t.classGroupId;
  const a = e[0], n = t.nextPart.get(a), o = n ? $l(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Qn);
  return (r = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : r.classGroupId;
}, Io = /^\[(.+)\]$/, Pr = (e) => {
  if (Io.test(e)) {
    const t = Io.exec(e)[1], a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
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
  return Sr(Object.entries(e.classGroups), a).forEach(([s, r]) => {
    En(r, n, s, t);
  }), n;
}, En = (e, t, a, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Vo(t, o);
      s.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (Or(o)) {
        En(o(n), t, a, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([s, r]) => {
      En(r, Vo(t, s), a, n);
    });
  });
}, Vo = (e, t) => {
  let a = e;
  return t.split(Qn).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Or = (e) => e.isThemeGetter, Sr = (e, t) => t ? e.map(([a, n]) => {
  const o = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([r, i]) => [t + r, i])) : s);
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
}, kl = "!", Mr = (e) => {
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
    const h = d.length === 0 ? i : i.substring(u), m = h.startsWith(kl), x = m ? h.substring(1) : h, g = p && p > u ? p - u : void 0;
    return {
      modifiers: d,
      hasImportantModifier: m,
      baseClassName: x,
      maybePostfixModifierPosition: g
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
}), Ir = /\s+/, Vr = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, s = [], r = e.trim().split(Ir);
  let i = "";
  for (let d = r.length - 1; d >= 0; d -= 1) {
    const c = r[d], {
      modifiers: u,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: m
    } = a(c);
    let x = !!m, g = n(x ? h.substring(0, m) : h);
    if (!g) {
      if (!x) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = n(h), !g) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      x = !1;
    }
    const _ = Tr(u).join(":"), C = p ? _ + kl : _, P = C + g;
    if (s.includes(P))
      continue;
    s.push(P);
    const k = o(g, x);
    for (let D = 0; D < k.length; ++D) {
      const S = k[D];
      s.push(C + S);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Rr() {
  let e = 0, t, a, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (a = Bl(t)) && (n && (n += " "), n += a);
  return n;
}
const Bl = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Bl(e[n])) && (a && (a += " "), a += t);
  return a;
};
function Fr(e, ...t) {
  let a, n, o, s = r;
  function r(d) {
    const c = t.reduce((u, p) => p(u), e());
    return a = Ar(c), n = a.cache.get, o = a.cache.set, s = i, i(d);
  }
  function i(d) {
    const c = n(d);
    if (c)
      return c;
    const u = Vr(d, a);
    return o(d, u), u;
  }
  return function() {
    return s(Rr.apply(null, arguments));
  };
}
const pe = (e) => {
  const t = (a) => a[e] || [];
  return t.isThemeGetter = !0, t;
}, Pl = /^\[(?:([a-z-]+):)?(.+)\]$/i, Lr = /^\d+\/\d+$/, Nr = /* @__PURE__ */ new Set(["px", "full", "screen"]), zr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Wr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ur = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, jr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Hr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ze = (e) => Rt(e) || Nr.has(e) || Lr.test(e), dt = (e) => qt(e, "length", Qr), Rt = (e) => !!e && !Number.isNaN(Number(e)), vn = (e) => qt(e, "number", Rt), ra = (e) => !!e && Number.isInteger(Number(e)), Kr = (e) => e.endsWith("%") && Rt(e.slice(0, -1)), Z = (e) => Pl.test(e), ut = (e) => zr.test(e), Gr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), qr = (e) => qt(e, Gr, Dl), Yr = (e) => qt(e, "position", Dl), Xr = /* @__PURE__ */ new Set(["image", "url"]), Zr = (e) => qt(e, Xr, ti), Jr = (e) => qt(e, "", ei), ia = () => !0, qt = (e, t, a) => {
  const n = Pl.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : a(n[2]) : !1;
}, Qr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Wr.test(e) && !Ur.test(e)
), Dl = () => !1, ei = (e) => jr.test(e), ti = (e) => Hr.test(e), ai = () => {
  const e = pe("colors"), t = pe("spacing"), a = pe("blur"), n = pe("brightness"), o = pe("borderColor"), s = pe("borderRadius"), r = pe("borderSpacing"), i = pe("borderWidth"), d = pe("contrast"), c = pe("grayscale"), u = pe("hueRotate"), p = pe("invert"), h = pe("gap"), m = pe("gradientColorStops"), x = pe("gradientColorStopPositions"), g = pe("inset"), _ = pe("margin"), C = pe("opacity"), P = pe("padding"), k = pe("saturate"), D = pe("scale"), S = pe("sepia"), I = pe("skew"), A = pe("space"), z = pe("translate"), F = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", Z, t], V = () => [Z, t], G = () => ["", Ze, dt], K = () => ["auto", Rt, Z], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], q = () => ["solid", "dashed", "dotted", "double", "none"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ue = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], fe = () => ["", "0", Z], ke = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ye = () => [Rt, Z];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ia],
      spacing: [Ze, dt],
      blur: ["none", "", ut, Z],
      brightness: ye(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ut, Z],
      borderSpacing: V(),
      borderWidth: G(),
      contrast: ye(),
      grayscale: fe(),
      hueRotate: ye(),
      invert: fe(),
      gap: V(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Kr, dt],
      inset: T(),
      margin: T(),
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
        columns: [ut]
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
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
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
        z: ["auto", ra, Z]
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
        order: ["first", "last", "none", ra, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ia]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ra, Z]
        }, Z]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ia]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ra, Z]
        }, Z]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
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
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
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
          screen: [ut]
        }, ut]
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
        text: ["base", ut, dt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", vn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ia]
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
        "line-clamp": ["none", Rt, vn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ze, Z]
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
        decoration: ["auto", "from-font", Ze, dt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ze, Z]
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
        bg: [...W(), Yr]
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
        }, Zr]
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
        "outline-offset": [Ze, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ze, dt]
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
        "ring-offset": [Ze, dt]
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
        shadow: ["", "inner", "none", ut, Jr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ia]
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
        "drop-shadow": ["", "none", ut, Z]
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
        rotate: [ra, Z]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [z]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [z]
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
        stroke: [Ze, dt, vn]
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
}, ni = /* @__PURE__ */ Fr(ai);
function L(...e) {
  return ni(e);
}
const pg = /* @__PURE__ */ b({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("div", {
      class: se(l(L)(l(oi)({ variant: a.variant }), t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), oi = Jn(
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
function mn(e, t) {
  return e - t * Math.floor(e / t);
}
const Ol = 1721426;
function Sa(e, t, a, n) {
  t = eo(e, t);
  let o = t - 1, s = -2;
  return a <= 2 ? s = 0 : Wa(t) && (s = -1), Ol - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + s + n);
}
function Wa(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function eo(e, t) {
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
class Lt {
  fromJulianDay(t) {
    let a = t, n = a - Ol, o = Math.floor(n / 146097), s = mn(n, 146097), r = Math.floor(s / 36524), i = mn(s, 36524), d = Math.floor(i / 1461), c = mn(i, 1461), u = Math.floor(c / 365), p = o * 400 + r * 100 + d * 4 + u + (r !== 4 && u !== 4 ? 1 : 0), [h, m] = li(p), x = a - Sa(h, m, 1, 1), g = 2;
    a < Sa(h, m, 3, 1) ? g = 0 : Wa(m) && (g = 1);
    let _ = Math.floor(((x + g) * 12 + 373) / 367), C = a - Sa(h, m, _, 1) + 1;
    return new Wt(h, m, _, C);
  }
  toJulianDay(t) {
    return Sa(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return si[Wa(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return Wa(t.year) ? 366 : 365;
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
  return t = Se(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Sl(e, t) {
  return t = Se(t, e.calendar), e = pa(e), t = pa(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Ne(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Ro(e, t) {
  return e = pa(e), t = pa(t), e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month;
}
function El(e, t) {
  return we(e, Tl(t));
}
function Ml(e, t) {
  let a = e.calendar.toJulianDay(e), n = Math.ceil(a + 1 - ci(t)) % 7;
  return n < 0 && (n += 7), n;
}
function ii(e) {
  return tt(Date.now(), e);
}
function Tl(e) {
  return vi(ii(e));
}
function Al(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function di(e, t) {
  return Fo(e) - Fo(t);
}
function Fo(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let hn = null;
function Bt() {
  return hn == null && (hn = new Intl.DateTimeFormat().resolvedOptions().timeZone), hn;
}
function pa(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function Lo(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const No = /* @__PURE__ */ new Map();
function ui(e) {
  if (Intl.Locale) {
    let a = No.get(e);
    return a || (a = new Intl.Locale(e).maximize().region, a && No.set(e, a)), a;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function ci(e) {
  let t = ui(e);
  return t && ri[t] || 0;
}
function Nt(e) {
  e = Se(e, new Lt());
  let t = eo(e.era, e.year);
  return Il(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function Il(e, t, a, n, o, s, r) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, s, r), i.setUTCFullYear(e, t - 1, a), i.getTime();
}
function Mn(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === Bt()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: s, minute: r, second: i } = Vl(e, t);
  return Il(a, n, o, s, r, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const zo = /* @__PURE__ */ new Map();
function Vl(e, t) {
  let a = zo.get(t);
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
  }), zo.set(t, a));
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
const Wo = 864e5;
function pi(e, t, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((s) => fi(e, t, s));
}
function fi(e, t, a) {
  let n = Vl(a, t);
  return e.year === n.year && e.month === n.month && e.day === n.day && e.hour === n.hour && e.minute === n.minute && e.second === n.second;
}
function et(e, t, a = "compatible") {
  let n = zt(e);
  if (t === "UTC") return Nt(n);
  if (t === Bt() && a === "compatible") {
    n = Se(n, new Lt());
    let d = /* @__PURE__ */ new Date(), c = eo(n.era, n.year);
    return d.setFullYear(c, n.month - 1, n.day), d.setHours(n.hour, n.minute, n.second, n.millisecond), d.getTime();
  }
  let o = Nt(n), s = Mn(o - Wo, t), r = Mn(o + Wo, t), i = pi(n, t, o - s, o - r);
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
function Rl(e, t, a = "compatible") {
  return new Date(et(e, t, a));
}
function tt(e, t) {
  let a = Mn(e, t), n = new Date(e + a), o = n.getUTCFullYear(), s = n.getUTCMonth() + 1, r = n.getUTCDate(), i = n.getUTCHours(), d = n.getUTCMinutes(), c = n.getUTCSeconds(), u = n.getUTCMilliseconds();
  return new jt(o, s, r, t, a, i, d, c, u);
}
function vi(e) {
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
  return n.calendar = t, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, Ct(n), n;
}
function mi(e, t, a) {
  if (e instanceof jt)
    return e.timeZone === t ? e : gi(e, t);
  let n = et(e, t, a);
  return tt(n, t);
}
function hi(e) {
  let t = Nt(e) - e.offset;
  return new Date(t);
}
function gi(e, t) {
  let a = Nt(e) - e.offset;
  return Se(tt(a, t), e.calendar);
}
const da = 36e5;
function Qa(e, t) {
  let a = e.copy(), n = "hour" in a ? _i(a, t) : 0;
  Tn(a, t.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e), a.month += t.months || 0, An(a), Fl(a), a.day += (t.weeks || 0) * 7, a.day += t.days || 0, a.day += n, yi(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
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
function Tn(e, t) {
  var a, n;
  !((a = (n = e.calendar).isInverseEra) === null || a === void 0) && a.call(n, e) && (t = -t), e.year += t;
}
function An(e) {
  for (; e.month < 1; )
    Tn(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, Tn(e, 1);
}
function yi(e) {
  for (; e.day < 1; )
    e.month--, An(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, An(e);
}
function Fl(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function Ct(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Fl(e);
}
function Ll(e) {
  let t = {};
  for (let a in e) typeof e[a] == "number" && (t[a] = -e[a]);
  return t;
}
function Nl(e, t) {
  return Qa(e, Ll(t));
}
function to(e, t) {
  let a = e.copy();
  return t.era != null && (a.era = t.era), t.year != null && (a.year = t.year), t.month != null && (a.month = t.month), t.day != null && (a.day = t.day), Ct(a), a;
}
function ja(e, t) {
  let a = e.copy();
  return t.hour != null && (a.hour = t.hour), t.minute != null && (a.minute = t.minute), t.second != null && (a.second = t.second), t.millisecond != null && (a.millisecond = t.millisecond), wi(a), a;
}
function bi(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Ea(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Ea(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Ea(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = Ea(e.hour, 24), t;
}
function wi(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Ea(e, t) {
  let a = e % t;
  return a < 0 && (a += t), a;
}
function _i(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, bi(e);
}
function ao(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "era": {
      let i = e.calendar.getEras(), d = i.indexOf(e.era);
      if (d < 0) throw new Error("Invalid era: " + e.era);
      d = at(d, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[d], Ct(o);
      break;
    }
    case "year":
      var s, r;
      !((s = (r = o.calendar).isInverseEra) === null || s === void 0) && s.call(r, o) && (a = -a), o.year = at(e.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, e);
      break;
    case "month":
      o.month = at(e.month, a, 1, e.calendar.getMonthsInYear(e), n == null ? void 0 : n.round);
      break;
    case "day":
      o.day = at(e.day, a, 1, e.calendar.getDaysInMonth(e), n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(o), Ct(o), o;
}
function zl(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "hour": {
      let s = e.hour, r = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let d = s >= 12;
        r = d ? 12 : 0, i = d ? 23 : 11;
      }
      o.hour = at(s, a, r, i, n == null ? void 0 : n.round);
      break;
    }
    case "minute":
      o.minute = at(e.minute, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "second":
      o.second = at(e.second, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "millisecond":
      o.millisecond = at(e.millisecond, a, 0, 999, n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return o;
}
function at(e, t, a, n, o = !1) {
  if (o) {
    e += Math.sign(t), e < a && (e = n);
    let s = Math.abs(t);
    t > 0 ? e = Math.ceil(e / s) * s : e = Math.floor(e / s) * s, e > n && (e = a);
  } else
    e += t, e < a ? e = n - (a - e - 1) : e > n && (e = a + (e - n - 1));
  return e;
}
function Wl(e, t) {
  let a;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let o = Qa(zt(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    a = et(o, e.timeZone);
  } else
    a = Nt(e) - e.offset;
  a += t.milliseconds || 0, a += (t.seconds || 0) * 1e3, a += (t.minutes || 0) * 6e4, a += (t.hours || 0) * 36e5;
  let n = tt(a, e.timeZone);
  return Se(n, e.calendar);
}
function xi(e, t) {
  return Wl(e, Ll(t));
}
function Ci(e, t, a, n) {
  switch (t) {
    case "hour": {
      let o = 0, s = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let x = e.hour >= 12;
        o = x ? 12 : 0, s = x ? 23 : 11;
      }
      let r = zt(e), i = Se(ja(r, {
        hour: o
      }), new Lt()), d = [
        et(i, e.timeZone, "earlier"),
        et(i, e.timeZone, "later")
      ].filter((x) => tt(x, e.timeZone).day === i.day)[0], c = Se(ja(r, {
        hour: s
      }), new Lt()), u = [
        et(c, e.timeZone, "earlier"),
        et(c, e.timeZone, "later")
      ].filter((x) => tt(x, e.timeZone).day === c.day).pop(), p = Nt(e) - e.offset, h = Math.floor(p / da), m = p % da;
      return p = at(h, a, Math.floor(d / da), Math.floor(u / da), n == null ? void 0 : n.round) * da + m, Se(tt(p, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return zl(e, t, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = ao(zt(e), t, a, n), s = et(o, e.timeZone);
      return Se(tt(s, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function $i(e, t, a) {
  let n = zt(e), o = ja(to(n, t), t);
  if (o.compare(n) === 0) return e;
  let s = et(o, e.timeZone, a);
  return Se(tt(s, e.timeZone), e.calendar);
}
function ki(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function Ul(e) {
  let t = Se(e, new Lt());
  return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function jl(e) {
  return `${Ul(e)}T${ki(e)}`;
}
function Bi(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let a = Math.floor(e / 36e5), n = e % 36e5 / 6e4;
  return `${t}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function Pi(e) {
  return `${jl(e)}${Bi(e.offset)}[${e.timeZone}]`;
}
function Di(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function no(e, t, a) {
  Di(e, t), t.set(e, a);
}
function oo(e) {
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
var Oi = /* @__PURE__ */ new WeakMap();
class Wt {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Wt(this.calendar, this.era, this.year, this.month, this.day) : new Wt(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return Qa(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return Nl(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return to(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return ao(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return Rl(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Ul(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return Al(this, t);
  }
  constructor(...t) {
    no(this, Oi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = oo(t);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, Ct(this);
  }
}
var Si = /* @__PURE__ */ new WeakMap();
class Ut {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ut(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new Ut(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return Qa(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return Nl(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return to(ja(this, t), t);
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
        return ao(this, t, a, n);
      default:
        return zl(this, t, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, a) {
    return Rl(this, t, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return jl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let a = Al(this, t);
    return a === 0 ? di(this, zt(t)) : a;
  }
  constructor(...t) {
    no(this, Si, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = oo(t);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, Ct(this);
  }
}
var Ei = /* @__PURE__ */ new WeakMap();
class jt {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new jt(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new jt(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return Wl(this, t);
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
    no(this, Ei, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = oo(t), i = t.shift(), d = t.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.timeZone = i, this.offset = d, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, Ct(this);
  }
}
let gn = /* @__PURE__ */ new Map();
class Je {
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
    return Ai() && (this.resolvedHourCycle || (this.resolvedHourCycle = Ii(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, a = {}) {
    this.formatter = Hl(t, a), this.options = a;
  }
}
const Mi = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function Hl(e, t = {}) {
  if (typeof t.hour12 == "boolean" && Ti()) {
    t = {
      ...t
    };
    let o = Mi[String(t.hour12)][e.split("-")[0]], s = t.hour12 ? "h12" : "h23";
    t.hourCycle = o ?? s, delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((o, s) => o[0] < s[0] ? -1 : 1).join() : "");
  if (gn.has(a)) return gn.get(a);
  let n = new Intl.DateTimeFormat(e, t);
  return gn.set(a, n), n;
}
let yn = null;
function Ti() {
  return yn == null && (yn = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), yn;
}
let bn = null;
function Ai() {
  return bn == null && (bn = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), bn;
}
function Ii(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = Hl(e, {
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
function Ie(e, t = Bt()) {
  return lo(e) ? e.toDate() : e.toDate(t);
}
function Ri(e) {
  return e instanceof Ut;
}
function lo(e) {
  return e instanceof jt;
}
function Fi(e) {
  return Ri(e) || lo(e);
}
function fa(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), a = e.getMonth() + 1;
    return new Date(t, a, 0).getDate();
  } else
    return e.set({ day: 100 }).day;
}
function ft(e, t) {
  return e.compare(t) < 0;
}
function ua(e, t) {
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
  return ua(e, t) && ft(e, a);
}
function Ui(e, t, a) {
  const n = Ml(e, a);
  return t > n ? e.subtract({ days: n + 7 - t }) : t === n ? e : e.subtract({ days: n - t });
}
function ji(e, t, a) {
  const n = Ml(e, a), o = t === 0 ? 6 : t - 1;
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
function Uo(e, t) {
  const a = [];
  let n = e.add({ days: 1 });
  const o = t;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function wn(e) {
  const { dateObj: t, weekStartsOn: a, fixedWeeks: n, locale: o } = e, s = fa(t), r = Array.from({ length: s }, (_, C) => t.set({ day: C + 1 })), i = pa(t), d = Lo(t), c = Ui(i, a, o), u = ji(d, a, o), p = Uo(c.subtract({ days: 1 }), i), h = Uo(d, u.add({ days: 1 })), m = p.length + r.length + h.length;
  if (n && m < 42) {
    const _ = 42 - m;
    let C = h[h.length - 1];
    C || (C = Lo(t));
    const P = Array.from({ length: _ }, (k, D) => {
      const S = D + 1;
      return C.add({ days: S });
    });
    h.push(...P);
  }
  const x = p.concat(r, h), g = Vi(x, 7);
  return {
    value: t,
    cells: x,
    rows: g
  };
}
function _t(e) {
  const { numberOfMonths: t, dateObj: a, ...n } = e, o = [];
  if (!t || t === 1)
    return o.push(
      wn({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    wn({
      ...n,
      dateObj: a
    })
  );
  for (let s = 1; s < t; s++) {
    const r = a.add({ months: s });
    o.push(
      wn({
        ...n,
        dateObj: r
      })
    );
  }
  return o;
}
const Ki = ["top", "right", "bottom", "left"], vt = Math.min, Pe = Math.max, Ha = Math.round, Ma = Math.floor, mt = (e) => ({
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
function In(e, t, a) {
  return Pe(e, vt(t, a));
}
function lt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function st(e) {
  return e.split("-")[0];
}
function Yt(e) {
  return e.split("-")[1];
}
function so(e) {
  return e === "x" ? "y" : "x";
}
function ro(e) {
  return e === "y" ? "height" : "width";
}
function ht(e) {
  return ["top", "bottom"].includes(st(e)) ? "y" : "x";
}
function io(e) {
  return so(ht(e));
}
function Yi(e, t, a) {
  a === void 0 && (a = !1);
  const n = Yt(e), o = io(e), s = ro(o);
  let r = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (r = Ka(r)), [r, Ka(r)];
}
function Xi(e) {
  const t = Ka(e);
  return [Vn(e), t, Vn(t)];
}
function Vn(e) {
  return e.replace(/start|end/g, (t) => qi[t]);
}
function Zi(e, t, a) {
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
function Ji(e, t, a, n) {
  const o = Yt(e);
  let s = Zi(st(e), a === "start", n);
  return o && (s = s.map((r) => r + "-" + o), t && (s = s.concat(s.map(Vn)))), s;
}
function Ka(e) {
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
function Kl(e) {
  return typeof e != "number" ? Qi(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ga(e) {
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
function jo(e, t, a) {
  let {
    reference: n,
    floating: o
  } = e;
  const s = ht(t), r = io(t), i = ro(r), d = st(t), c = s === "y", u = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, h = n[i] / 2 - o[i] / 2;
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
  switch (Yt(t)) {
    case "start":
      m[r] -= h * (a && c ? -1 : 1);
      break;
    case "end":
      m[r] += h * (a && c ? -1 : 1);
      break;
  }
  return m;
}
const ed = async (e, t, a) => {
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
  } = jo(c, n, d), h = n, m = {}, x = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: _,
      fn: C
    } = i[g], {
      x: P,
      y: k,
      data: D,
      reset: S
    } = await C({
      x: u,
      y: p,
      initialPlacement: n,
      placement: h,
      strategy: o,
      middlewareData: m,
      rects: c,
      platform: r,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = P ?? u, p = k ?? p, m = {
      ...m,
      [_]: {
        ...m[_],
        ...D
      }
    }, S && x <= 50 && (x++, typeof S == "object" && (S.placement && (h = S.placement), S.rects && (c = S.rects === !0 ? await r.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: u,
      y: p
    } = jo(c, h, d)), g = -1);
  }
  return {
    x: u,
    y: p,
    placement: h,
    strategy: o,
    middlewareData: m
  };
};
async function va(e, t) {
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
    altBoundary: h = !1,
    padding: m = 0
  } = lt(t, e), x = Kl(m), _ = i[h ? p === "floating" ? "reference" : "floating" : p], C = Ga(await s.getClippingRect({
    element: (a = await (s.isElement == null ? void 0 : s.isElement(_))) == null || a ? _ : _.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: d
  })), P = p === "floating" ? {
    x: n,
    y: o,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), D = await (s.isElement == null ? void 0 : s.isElement(k)) ? await (s.getScale == null ? void 0 : s.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Ga(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: P,
    offsetParent: k,
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
      platform: r,
      elements: i,
      middlewareData: d
    } = t, {
      element: c,
      padding: u = 0
    } = lt(e, t) || {};
    if (c == null)
      return {};
    const p = Kl(u), h = {
      x: a,
      y: n
    }, m = io(o), x = ro(m), g = await r.getDimensions(c), _ = m === "y", C = _ ? "top" : "left", P = _ ? "bottom" : "right", k = _ ? "clientHeight" : "clientWidth", D = s.reference[x] + s.reference[m] - h[m] - s.floating[x], S = h[m] - s.reference[m], I = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c));
    let A = I ? I[k] : 0;
    (!A || !await (r.isElement == null ? void 0 : r.isElement(I))) && (A = i.floating[k] || s.floating[x]);
    const z = D / 2 - S / 2, F = A / 2 - g[x] / 2 - 1, B = vt(p[C], F), T = vt(p[P], F), V = B, G = A - g[x] - T, K = A / 2 - g[x] / 2 + z, W = In(V, K, G), q = !d.arrow && Yt(o) != null && K !== W && s.reference[x] / 2 - (K < V ? B : T) - g[x] / 2 < 0, ae = q ? K < V ? K - V : K - G : 0;
    return {
      [m]: h[m] + ae,
      data: {
        [m]: W,
        centerOffset: K - W - ae,
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
        middlewareData: s,
        rects: r,
        initialPlacement: i,
        platform: d,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: p = !0,
        fallbackPlacements: h,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: g = !0,
        ..._
      } = lt(e, t);
      if ((a = s.arrow) != null && a.alignmentOffset)
        return {};
      const C = st(o), P = ht(i), k = st(i) === i, D = await (d.isRTL == null ? void 0 : d.isRTL(c.floating)), S = h || (k || !g ? [Ka(i)] : Xi(i)), I = x !== "none";
      !h && I && S.push(...Ji(i, g, x, D));
      const A = [i, ...S], z = await va(t, _), F = [];
      let B = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (u && F.push(z[C]), p) {
        const K = Yi(o, r, D);
        F.push(z[K[0]], z[K[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: F
      }], !F.every((K) => K <= 0)) {
        var T, V;
        const K = (((T = s.flip) == null ? void 0 : T.index) || 0) + 1, W = A[K];
        if (W)
          return {
            data: {
              index: K,
              overflows: B
            },
            reset: {
              placement: W
            }
          };
        let q = (V = B.filter((ae) => ae.overflows[0] <= 0).sort((ae, ue) => ae.overflows[1] - ue.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!q)
          switch (m) {
            case "bestFit": {
              var G;
              const ae = (G = B.filter((ue) => {
                if (I) {
                  const fe = ht(ue.placement);
                  return fe === P || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  fe === "y";
                }
                return !0;
              }).map((ue) => [ue.placement, ue.overflows.filter((fe) => fe > 0).reduce((fe, ke) => fe + ke, 0)]).sort((ue, fe) => ue[1] - fe[1])[0]) == null ? void 0 : G[0];
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
function Ho(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ko(e) {
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
      } = lt(e, t);
      switch (n) {
        case "referenceHidden": {
          const s = await va(t, {
            ...o,
            elementContext: "reference"
          }), r = Ho(s, a.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: Ko(r)
            }
          };
        }
        case "escaped": {
          const s = await va(t, {
            ...o,
            altBoundary: !0
          }), r = Ho(s, a.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: Ko(r)
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
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), r = st(a), i = Yt(a), d = ht(a) === "y", c = ["left", "top"].includes(r) ? -1 : 1, u = s && d ? -1 : 1, p = lt(t, e);
  let {
    mainAxis: h,
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
  return i && typeof x == "number" && (m = i === "end" ? x * -1 : x), d ? {
    x: m * u,
    y: h * c
  } : {
    x: h * c,
    y: m * u
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
        placement: r,
        middlewareData: i
      } = t, d = await od(t, e);
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
      } = lt(e, t), c = {
        x: a,
        y: n
      }, u = await va(t, d), p = ht(st(o)), h = so(p);
      let m = c[h], x = c[p];
      if (s) {
        const _ = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", P = m + u[_], k = m - u[C];
        m = In(P, m, k);
      }
      if (r) {
        const _ = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", P = x + u[_], k = x - u[C];
        x = In(P, x, k);
      }
      const g = i.fn({
        ...t,
        [h]: m,
        [p]: x
      });
      return {
        ...g,
        data: {
          x: g.x - a,
          y: g.y - n,
          enabled: {
            [h]: s,
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
        rects: s,
        middlewareData: r
      } = t, {
        offset: i = 0,
        mainAxis: d = !0,
        crossAxis: c = !0
      } = lt(e, t), u = {
        x: a,
        y: n
      }, p = ht(o), h = so(p);
      let m = u[h], x = u[p];
      const g = lt(i, t), _ = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (d) {
        const k = h === "y" ? "height" : "width", D = s.reference[h] - s.floating[k] + _.mainAxis, S = s.reference[h] + s.reference[k] - _.mainAxis;
        m < D ? m = D : m > S && (m = S);
      }
      if (c) {
        var C, P;
        const k = h === "y" ? "width" : "height", D = ["top", "left"].includes(st(o)), S = s.reference[p] - s.floating[k] + (D && ((C = r.offset) == null ? void 0 : C[p]) || 0) + (D ? 0 : _.crossAxis), I = s.reference[p] + s.reference[k] + (D ? 0 : ((P = r.offset) == null ? void 0 : P[p]) || 0) - (D ? _.crossAxis : 0);
        x < S ? x = S : x > I && (x = I);
      }
      return {
        [h]: m,
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
        platform: r,
        elements: i
      } = t, {
        apply: d = () => {
        },
        ...c
      } = lt(e, t), u = await va(t, c), p = st(o), h = Yt(o), m = ht(o) === "y", {
        width: x,
        height: g
      } = s.floating;
      let _, C;
      p === "top" || p === "bottom" ? (_ = p, C = h === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, _ = h === "end" ? "top" : "bottom");
      const P = g - u.top - u.bottom, k = x - u.left - u.right, D = vt(g - u[_], P), S = vt(x - u[C], k), I = !t.middlewareData.shift;
      let A = D, z = S;
      if ((a = t.middlewareData.shift) != null && a.enabled.x && (z = k), (n = t.middlewareData.shift) != null && n.enabled.y && (A = P), I && !h) {
        const B = Pe(u.left, 0), T = Pe(u.right, 0), V = Pe(u.top, 0), G = Pe(u.bottom, 0);
        m ? z = x - 2 * (B !== 0 || T !== 0 ? B + T : Pe(u.left, u.right)) : A = g - 2 * (V !== 0 || G !== 0 ? V + G : Pe(u.top, u.bottom));
      }
      await d({
        ...t,
        availableWidth: z,
        availableHeight: A
      });
      const F = await r.getDimensions(i.floating);
      return x !== F.width || g !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function en() {
  return typeof window < "u";
}
function Pt(e) {
  return uo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function De(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ke(e) {
  var t;
  return (t = (uo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function uo(e) {
  return en() ? e instanceof Node || e instanceof De(e).Node : !1;
}
function Ve(e) {
  return en() ? e instanceof Element || e instanceof De(e).Element : !1;
}
function je(e) {
  return en() ? e instanceof HTMLElement || e instanceof De(e).HTMLElement : !1;
}
function Go(e) {
  return !en() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof De(e).ShadowRoot;
}
function Ca(e) {
  const {
    overflow: t,
    overflowX: a,
    overflowY: n,
    display: o
  } = Re(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + a) && !["inline", "contents"].includes(o);
}
function dd(e) {
  return ["table", "td", "th"].includes(Pt(e));
}
function tn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function co(e) {
  const t = po(), a = Ve(e) ? Re(e) : e;
  return a.transform !== "none" || a.perspective !== "none" || (a.containerType ? a.containerType !== "normal" : !1) || !t && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !t && (a.filter ? a.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function ud(e) {
  let t = gt(e);
  for (; je(t) && !Ht(t); ) {
    if (co(t))
      return t;
    if (tn(t))
      return null;
    t = gt(t);
  }
  return null;
}
function po() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ht(e) {
  return ["html", "body", "#document"].includes(Pt(e));
}
function Re(e) {
  return De(e).getComputedStyle(e);
}
function an(e) {
  return Ve(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function gt(e) {
  if (Pt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Go(e) && e.host || // Fallback.
    Ke(e)
  );
  return Go(t) ? t.host : t;
}
function Gl(e) {
  const t = gt(e);
  return Ht(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : je(t) && Ca(t) ? t : Gl(t);
}
function ma(e, t, a) {
  var n;
  t === void 0 && (t = []), a === void 0 && (a = !0);
  const o = Gl(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = De(o);
  if (s) {
    const i = Rn(r);
    return t.concat(r, r.visualViewport || [], Ca(o) ? o : [], i && a ? ma(i) : []);
  }
  return t.concat(o, ma(o, [], a));
}
function Rn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ql(e) {
  const t = Re(e);
  let a = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = je(e), s = o ? e.offsetWidth : a, r = o ? e.offsetHeight : n, i = Ha(a) !== s || Ha(n) !== r;
  return i && (a = s, n = r), {
    width: a,
    height: n,
    $: i
  };
}
function fo(e) {
  return Ve(e) ? e : e.contextElement;
}
function Ft(e) {
  const t = fo(e);
  if (!je(t))
    return mt(1);
  const a = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = ql(t);
  let r = (s ? Ha(a.width) : a.width) / n, i = (s ? Ha(a.height) : a.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: r,
    y: i
  };
}
const cd = /* @__PURE__ */ mt(0);
function Yl(e) {
  const t = De(e);
  return !po() || !t.visualViewport ? cd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function pd(e, t, a) {
  return t === void 0 && (t = !1), !a || t && a !== De(e) ? !1 : t;
}
function $t(e, t, a, n) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const o = e.getBoundingClientRect(), s = fo(e);
  let r = mt(1);
  t && (n ? Ve(n) && (r = Ft(n)) : r = Ft(e));
  const i = pd(s, a, n) ? Yl(s) : mt(0);
  let d = (o.left + i.x) / r.x, c = (o.top + i.y) / r.y, u = o.width / r.x, p = o.height / r.y;
  if (s) {
    const h = De(s), m = n && Ve(n) ? De(n) : n;
    let x = h, g = Rn(x);
    for (; g && n && m !== x; ) {
      const _ = Ft(g), C = g.getBoundingClientRect(), P = Re(g), k = C.left + (g.clientLeft + parseFloat(P.paddingLeft)) * _.x, D = C.top + (g.clientTop + parseFloat(P.paddingTop)) * _.y;
      d *= _.x, c *= _.y, u *= _.x, p *= _.y, d += k, c += D, x = De(g), g = Rn(x);
    }
  }
  return Ga({
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
  const s = o === "fixed", r = Ke(n), i = t ? tn(t.floating) : !1;
  if (n === r || i && s)
    return a;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = mt(1);
  const u = mt(0), p = je(n);
  if ((p || !p && !s) && ((Pt(n) !== "body" || Ca(r)) && (d = an(n)), je(n))) {
    const h = $t(n);
    c = Ft(n), u.x = h.x + n.clientLeft, u.y = h.y + n.clientTop;
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
function Fn(e, t) {
  const a = an(e).scrollLeft;
  return t ? t.left + a : $t(Ke(e)).left + a;
}
function md(e) {
  const t = Ke(e), a = an(e), n = e.ownerDocument.body, o = Pe(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = Pe(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -a.scrollLeft + Fn(e);
  const i = -a.scrollTop;
  return Re(n).direction === "rtl" && (r += Pe(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: r,
    y: i
  };
}
function hd(e, t) {
  const a = De(e), n = Ke(e), o = a.visualViewport;
  let s = n.clientWidth, r = n.clientHeight, i = 0, d = 0;
  if (o) {
    s = o.width, r = o.height;
    const c = po();
    (!c || c && t === "fixed") && (i = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: i,
    y: d
  };
}
function gd(e, t) {
  const a = $t(e, !0, t === "fixed"), n = a.top + e.clientTop, o = a.left + e.clientLeft, s = je(e) ? Ft(e) : mt(1), r = e.clientWidth * s.x, i = e.clientHeight * s.y, d = o * s.x, c = n * s.y;
  return {
    width: r,
    height: i,
    x: d,
    y: c
  };
}
function qo(e, t, a) {
  let n;
  if (t === "viewport")
    n = hd(e, a);
  else if (t === "document")
    n = md(Ke(e));
  else if (Ve(t))
    n = gd(t, a);
  else {
    const o = Yl(e);
    n = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Ga(n);
}
function Xl(e, t) {
  const a = gt(e);
  return a === t || !Ve(a) || Ht(a) ? !1 : Re(a).position === "fixed" || Xl(a, t);
}
function yd(e, t) {
  const a = t.get(e);
  if (a)
    return a;
  let n = ma(e, [], !1).filter((i) => Ve(i) && Pt(i) !== "body"), o = null;
  const s = Re(e).position === "fixed";
  let r = s ? gt(e) : e;
  for (; Ve(r) && !Ht(r); ) {
    const i = Re(r), d = co(r);
    !d && i.position === "fixed" && (o = null), (s ? !d && !o : !d && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ca(r) && !d && Xl(e, r)) ? n = n.filter((u) => u !== r) : o = i, r = gt(r);
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
  const r = [...a === "clippingAncestors" ? tn(t) ? [] : yd(t, this._c) : [].concat(a), n], i = r[0], d = r.reduce((c, u) => {
    const p = qo(t, u, o);
    return c.top = Pe(p.top, c.top), c.right = vt(p.right, c.right), c.bottom = vt(p.bottom, c.bottom), c.left = Pe(p.left, c.left), c;
  }, qo(t, i, o));
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
  } = ql(e);
  return {
    width: t,
    height: a
  };
}
function _d(e, t, a) {
  const n = je(t), o = Ke(t), s = a === "fixed", r = $t(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = mt(0);
  if (n || !n && !s)
    if ((Pt(t) !== "body" || Ca(o)) && (i = an(t)), n) {
      const m = $t(t, !0, s, t);
      d.x = m.x + t.clientLeft, d.y = m.y + t.clientTop;
    } else o && (d.x = Fn(o));
  let c = 0, u = 0;
  if (o && !n && !s) {
    const m = o.getBoundingClientRect();
    u = m.top + i.scrollTop, c = m.left + i.scrollLeft - // RTL <body> scrollbar.
    Fn(o, m);
  }
  const p = r.left + i.scrollLeft - d.x - c, h = r.top + i.scrollTop - d.y - u;
  return {
    x: p,
    y: h,
    width: r.width,
    height: r.height
  };
}
function _n(e) {
  return Re(e).position === "static";
}
function Yo(e, t) {
  if (!je(e) || Re(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let a = e.offsetParent;
  return Ke(e) === a && (a = a.ownerDocument.body), a;
}
function Zl(e, t) {
  const a = De(e);
  if (tn(e))
    return a;
  if (!je(e)) {
    let o = gt(e);
    for (; o && !Ht(o); ) {
      if (Ve(o) && !_n(o))
        return o;
      o = gt(o);
    }
    return a;
  }
  let n = Yo(e, t);
  for (; n && dd(n) && _n(n); )
    n = Yo(n, t);
  return n && Ht(n) && _n(n) && !co(n) ? a : n || ud(e) || a;
}
const xd = async function(e) {
  const t = this.getOffsetParent || Zl, a = this.getDimensions, n = await a(e.floating);
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
  return Re(e).direction === "rtl";
}
const $d = {
  convertOffsetParentRelativeRectToViewportRelativeRect: fd,
  getDocumentElement: Ke,
  getClippingRect: bd,
  getOffsetParent: Zl,
  getElementRects: xd,
  getClientRects: vd,
  getDimensions: wd,
  getScale: Ft,
  isElement: Ve,
  isRTL: Cd
};
function kd(e, t) {
  let a = null, n;
  const o = Ke(e);
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
      height: h
    } = e.getBoundingClientRect();
    if (i || t(), !p || !h)
      return;
    const m = Ma(u), x = Ma(o.clientWidth - (c + p)), g = Ma(o.clientHeight - (u + h)), _ = Ma(c), P = {
      rootMargin: -m + "px " + -x + "px " + -g + "px " + -_ + "px",
      threshold: Pe(0, vt(1, d)) || 1
    };
    let k = !0;
    function D(S) {
      const I = S[0].intersectionRatio;
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
  return r(!0), s;
}
function Bd(e, t, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, c = fo(e), u = o || s ? [...c ? ma(c) : [], ...ma(t)] : [];
  u.forEach((C) => {
    o && C.addEventListener("scroll", a, {
      passive: !0
    }), s && C.addEventListener("resize", a);
  });
  const p = c && i ? kd(c, a) : null;
  let h = -1, m = null;
  r && (m = new ResizeObserver((C) => {
    let [P] = C;
    P && P.target === c && m && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var k;
      (k = m) == null || k.observe(t);
    })), a();
  }), c && !d && m.observe(c), m.observe(t));
  let x, g = d ? $t(e) : null;
  d && _();
  function _() {
    const C = $t(e);
    g && (C.x !== g.x || C.y !== g.y || C.width !== g.width || C.height !== g.height) && a(), g = C, x = requestAnimationFrame(_);
  }
  return a(), () => {
    var C;
    u.forEach((P) => {
      o && P.removeEventListener("scroll", a), s && P.removeEventListener("resize", a);
    }), p == null || p(), (C = m) == null || C.disconnect(), m = null, d && cancelAnimationFrame(x);
  };
}
const Pd = ld, Dd = sd, Xo = ad, Od = id, Sd = nd, Ed = td, Md = rd, Td = (e, t, a) => {
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
function Ad(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Ln(e) {
  if (Ad(e)) {
    const t = e.$el;
    return uo(t) && Pt(t) === "#comment" ? null : t;
  }
  return e;
}
function Vt(e) {
  return typeof e == "function" ? e() : l(e);
}
function Id(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const a = Ln(Vt(e.element));
      return a == null ? {} : Ed({
        element: a,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Jl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Zo(e, t) {
  const a = Jl(e);
  return Math.round(t * a) / a;
}
function Vd(e, t, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = $(() => {
    var A;
    return (A = Vt(a.open)) != null ? A : !0;
  }), s = $(() => Vt(a.middleware)), r = $(() => {
    var A;
    return (A = Vt(a.placement)) != null ? A : "bottom";
  }), i = $(() => {
    var A;
    return (A = Vt(a.strategy)) != null ? A : "absolute";
  }), d = $(() => {
    var A;
    return (A = Vt(a.transform)) != null ? A : !0;
  }), c = $(() => Ln(e.value)), u = $(() => Ln(t.value)), p = M(0), h = M(0), m = M(i.value), x = M(r.value), g = Gn({}), _ = M(!1), C = $(() => {
    const A = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return A;
    const z = Zo(u.value, p.value), F = Zo(u.value, h.value);
    return d.value ? {
      ...A,
      transform: "translate(" + z + "px, " + F + "px)",
      ...Jl(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: z + "px",
      top: F + "px"
    };
  });
  let P;
  function k() {
    if (c.value == null || u.value == null)
      return;
    const A = o.value;
    Td(c.value, u.value, {
      middleware: s.value,
      placement: r.value,
      strategy: i.value
    }).then((z) => {
      p.value = z.x, h.value = z.y, m.value = z.strategy, x.value = z.placement, g.value = z.middlewareData, _.value = A !== !1;
    });
  }
  function D() {
    typeof P == "function" && (P(), P = void 0);
  }
  function S() {
    if (D(), n === void 0) {
      k();
      return;
    }
    if (c.value != null && u.value != null) {
      P = n(c.value, u.value, k);
      return;
    }
  }
  function I() {
    o.value || (_.value = !1);
  }
  return Q([s, r, i, o], k, {
    flush: "sync"
  }), Q([c, u], S, {
    flush: "sync"
  }), Q(o, I, {
    flush: "sync"
  }), qn() && Yn(D), {
    x: At(p),
    y: At(h),
    strategy: At(m),
    placement: At(x),
    middlewareData: At(g),
    isPositioned: At(_),
    floatingStyles: C,
    update: k
  };
}
function re(e, t) {
  const a = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(a);
  return [(o) => {
    const s = yl(n, o);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (bl(n, o), o)];
}
function vo(e, t, a) {
  const n = a.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function Jo(e, t = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
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
      var r = s[o];
      if (!e(t[r], a[r])) return !1;
    }
    return !0;
  }
  return t !== t && a !== a;
};
const xt = /* @__PURE__ */ Rd(Fd);
function Ld(e) {
  return e == null;
}
function Ql(e) {
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
function es(e) {
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
  const n = Gn();
  return ge(() => {
    n.value = e();
  }, {
    ...t,
    flush: (a = void 0) != null ? a : "sync"
  }), _a(n);
}
function Xt(e) {
  return qn() ? (Yn(e), !0) : !1;
}
function zd(e) {
  let t = !1, a;
  const n = gl(!0);
  return (...o) => (t || (a = n.run(() => e(...o)), t = !0), a);
}
function ts(e) {
  let t = 0, a, n;
  const o = () => {
    t -= 1, n && t <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...s) => (t += 1, a || (n = gl(!0), a = n.run(() => e(...s))), Xt(o), a);
}
function ot(e) {
  return typeof e == "function" ? e() : l(e);
}
const Ge = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Wd = (e) => typeof e < "u", Ud = (e) => e != null, jd = Object.prototype.toString, Hd = (e) => jd.call(e) === "[object Object]", as = () => {
}, Qo = /* @__PURE__ */ Kd();
function Kd() {
  var e, t;
  return Ge && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Gd(e) {
  return He();
}
function qd(e, t = 1e4) {
  return wl((a, n) => {
    let o = ot(e), s;
    const r = () => setTimeout(() => {
      o = ot(e), n();
    }, ot(t));
    return Xt(() => {
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
function Yd(e, t) {
  Gd() && Zn(e, t);
}
function Xd(e, t, a = {}) {
  const {
    immediate: n = !0
  } = a, o = M(!1);
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
    }, ot(t));
  }
  return n && (o.value = !0, Ge && d()), Xt(i), {
    isPending: _a(o),
    start: d,
    stop: i
  };
}
function Zd(e = 1e3, t = {}) {
  const {
    controls: a = !1,
    callback: n
  } = t, o = Xd(
    n ?? as,
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
  const a = ot(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const nn = Ge ? window : void 0;
function qa(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = nn) : [t, a, n, o] = e, !t)
    return as;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((u) => u()), s.length = 0;
  }, i = (u, p, h, m) => (u.addEventListener(p, h, m), () => u.removeEventListener(p, h, m)), d = Q(
    () => [Ee(t), ot(o)],
    ([u, p]) => {
      if (r(), !u)
        return;
      const h = Hd(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((x) => i(u, m, x, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), r();
  };
  return Xt(c), c;
}
function Jd(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function mo(...e) {
  let t, a, n = {};
  e.length === 3 ? (t = e[0], a = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, a = e[0], n = e[1]) : (t = e[0], a = e[1]) : (t = !0, a = e[0]);
  const {
    target: o = nn,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, d = Jd(t);
  return qa(o, s, (c) => {
    c.repeat && ot(i) || d(c) && a(c);
  }, r);
}
function ns() {
  const e = M(!1), t = He();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function Qd(e) {
  const t = ns();
  return $(() => (t.value, !!e()));
}
function eu(e, t, a = {}) {
  const { window: n = nn, ...o } = a;
  let s;
  const r = Qd(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, d = $(() => {
    const h = ot(e), m = (Array.isArray(h) ? h : [h]).map(Ee).filter(Ud);
    return new Set(m);
  }), c = Q(
    () => d.value,
    (h) => {
      i(), r.value && h.size && (s = new MutationObserver(t), h.forEach((m) => s.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), u = () => s == null ? void 0 : s.takeRecords(), p = () => {
    i(), c();
  };
  return Xt(p), {
    isSupported: r,
    stop: p,
    takeRecords: u
  };
}
function os(e, t = {}) {
  const {
    immediate: a = !0,
    fpsLimit: n = void 0,
    window: o = nn
  } = t, s = M(!1), r = n ? 1e3 / n : null;
  let i = 0, d = null;
  function c(h) {
    if (!s.value || !o)
      return;
    i || (i = h);
    const m = h - i;
    if (r && m < r) {
      d = o.requestAnimationFrame(c);
      return;
    }
    i = h, e({ delta: m, timestamp: h }), d = o.requestAnimationFrame(c);
  }
  function u() {
    !s.value && o && (s.value = !0, i = 0, d = o.requestAnimationFrame(c));
  }
  function p() {
    s.value = !1, d != null && o && (o.cancelAnimationFrame(d), d = null);
  }
  return a && u(), Xt(p), {
    isActive: _a(s),
    pause: p,
    resume: u
  };
}
function tu(e) {
  return JSON.parse(JSON.stringify(e));
}
function ve(e, t, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: p,
    shouldEmit: h
  } = n, m = He(), x = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let g = c;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const _ = (k) => i ? typeof i == "function" ? i(k) : tu(k) : k, C = () => Wd(e[t]) ? _(e[t]) : p, P = (k) => {
    h ? h(k) && x(g, k) : x(g, k);
  };
  if (d) {
    const k = C(), D = M(k);
    let S = !1;
    return Q(
      () => e[t],
      (I) => {
        S || (S = !0, D.value = _(I), te(() => S = !1));
      }
    ), Q(
      D,
      (I) => {
        !S && (I !== e[t] || u) && P(I);
      },
      { deep: u }
    ), D;
  } else
    return $({
      get() {
        return C();
      },
      set(k) {
        P(k);
      }
    });
}
function on(e) {
  return e ? e.flatMap((t) => t.type === ee ? on(t.children) : [t]) : [];
}
const au = ["INPUT", "TEXTAREA"];
function nu(e, t, a, n = {}) {
  if (!t || n.enableIgnoredElement && au.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = !0,
    dir: d = "ltr",
    preventScroll: c = !0,
    focus: u = !1
  } = n, [p, h, m, x, g, _] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = m || x, P = p || h;
  if (!g && !_ && (!C && !P || o === "vertical" && P || o === "horizontal" && C))
    return null;
  const k = a ? Array.from(a.querySelectorAll(s)) : r;
  if (!k.length)
    return null;
  c && e.preventDefault();
  let D = null;
  return P || C ? D = ls(k, t, {
    goForward: C ? x : d === "ltr" ? p : h,
    loop: i
  }) : g ? D = k.at(0) || null : _ && (D = k.at(-1) || null), u && (D == null || D.focus()), D;
}
function ls(e, t, a, n = e.length) {
  if (--n === 0)
    return null;
  const o = e.indexOf(t), s = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (s < 0 || s >= e.length))
    return null;
  const r = (s + e.length) % e.length, i = e[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? ls(
    e,
    i,
    a,
    n
  ) : i : null;
}
function xn(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Nn(e, t, a = ".", n) {
  if (!xn(t))
    return Nn(e, {}, a);
  const o = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = e[s];
    r != null && (Array.isArray(r) && Array.isArray(o[s]) ? o[s] = [...r, ...o[s]] : xn(r) && xn(o[s]) ? o[s] = Nn(
      r,
      o[s],
      (a ? `${a}.` : "") + s.toString()
    ) : o[s] = r);
  }
  return o;
}
function ou(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((a, n) => Nn(a, n, ""), {})
  );
}
const lu = ou(), [ln, fg] = re("ConfigProvider");
let su = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", ru = (e = 21) => {
  let t = "", a = e;
  for (; a--; )
    t += su[Math.random() * 64 | 0];
  return t;
};
const iu = ts(() => {
  const e = M(/* @__PURE__ */ new Map()), t = M(), a = $(() => {
    for (const r of e.value.values())
      if (r)
        return !0;
    return !1;
  }), n = ln({
    scrollBody: M(!0)
  });
  let o = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Qo && (o == null || o()), t.value = void 0;
  };
  return Q(a, (r, i) => {
    var d;
    if (!Ge)
      return;
    if (!r) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, u = { padding: c, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? lu({
      padding: n.scrollBody.value.padding === !0 ? c : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? c : n.scrollBody.value.margin
    }, u) : u : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Qo && (o = qa(
      document,
      "touchmove",
      (h) => {
        var m;
        h.target === document.documentElement && (h.touches.length > 1 || (m = h.preventDefault) == null || m.call(h));
      },
      { passive: !1 }
    )), te(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function $a(e) {
  const t = ru(6), a = iu();
  a.value.set(t, e ?? !1);
  const n = $({
    get: () => a.value.get(t) ?? !1,
    set: (o) => a.value.set(t, o)
  });
  return Yd(() => {
    a.value.delete(t);
  }), n;
}
const du = "data-radix-vue-collection-item";
function Zt(e, t = du) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = M([]);
    function s() {
      const r = Ee(n);
      return r ? o.value = Array.from(
        r.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return hr(() => {
      o.value = [];
    }), ie(s), gr(s), Q(() => n == null ? void 0 : n.value, s, { immediate: !0 }), bl(a, o), o;
  }, injectCollection: () => yl(a, M([])) };
}
function uu(e) {
  const t = M(e);
  function a() {
    return t.value;
  }
  function n(g) {
    t.value = g;
  }
  function o(g, _) {
    return new Je(t.value, _).format(g);
  }
  function s(g, _ = !0) {
    return Fi(g) && _ ? o(Ie(g), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Ie(g), {
      dateStyle: "long"
    });
  }
  function r(g, _ = {}) {
    return new Je(t.value, { month: "long", year: "numeric", ..._ }).format(g);
  }
  function i(g, _ = {}) {
    return new Je(t.value, { month: "long", ..._ }).format(g);
  }
  function d() {
    const g = Tl(Bt());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_) => ({ label: i(Ie(g.set({ month: _ }))), value: _ }));
  }
  function c(g, _ = {}) {
    return new Je(t.value, { year: "numeric", ..._ }).format(g);
  }
  function u(g, _) {
    return lo(g) ? new Je(t.value, {
      ..._,
      timeZone: g.timeZone
    }).formatToParts(Ie(g)) : new Je(t.value, _).formatToParts(Ie(g));
  }
  function p(g, _ = "narrow") {
    return new Je(t.value, { weekday: _ }).format(g);
  }
  function h(g) {
    var _;
    return ((_ = new Je(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(g).find((C) => C.type === "dayPeriod")) == null ? void 0 : _.value) === "PM" ? "PM" : "AM";
  }
  const m = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function x(g, _, C = {}) {
    const P = { ...m, ...C }, k = u(g, P).find((D) => D.type === _);
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
    part: x,
    dayPeriod: h,
    selectedDate: s,
    dayOfWeek: p,
    getMonths: d
  };
}
function yt(e) {
  const t = ln({
    dir: M("ltr")
  });
  return $(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function Dt(e) {
  const t = He(), a = t == null ? void 0 : t.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), a == null || a.forEach((o) => {
    n[vr(ml(o))] = (...s) => e(o, ...s);
  }), n;
}
let Cn = 0;
function ho() {
  ge((e) => {
    if (!Ge)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? el()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? el()
    ), Cn++, e(() => {
      Cn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), Cn--;
    });
  });
}
function el() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function sn(e) {
  return $(() => {
    var t;
    return ot(e) ? !!((t = Ee(e)) != null && t.closest("form")) : !0;
  });
}
function ne(e) {
  const t = He(), a = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, s) => {
    const r = (t == null ? void 0 : t.type.props[s]).default;
    return r !== void 0 && (o[s] = r), o;
  }, {}), n = vl(e);
  return $(() => {
    const o = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      o[ml(r)] = s[r];
    }), Object.keys({ ...a, ...o }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function oe(e, t) {
  const a = ne(e), n = t ? Dt(t) : {};
  return $(() => ({
    ...a.value,
    ...n
  }));
}
function N() {
  const e = He(), t = M(), a = $(() => {
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
var cu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, It = /* @__PURE__ */ new WeakMap(), Ta = /* @__PURE__ */ new WeakMap(), Aa = {}, $n = 0, ss = function(e) {
  return e && (e.host || ss(e.parentNode));
}, pu = function(e, t) {
  return t.map(function(a) {
    if (e.contains(a))
      return a;
    var n = ss(a);
    return n && e.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, fu = function(e, t, a, n) {
  var o = pu(t, Array.isArray(e) ? e : [e]);
  Aa[a] || (Aa[a] = /* @__PURE__ */ new WeakMap());
  var s = Aa[a], r = [], i = /* @__PURE__ */ new Set(), d = new Set(o), c = function(p) {
    !p || i.has(p) || (i.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var u = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(h) {
      if (i.has(h))
        u(h);
      else
        try {
          var m = h.getAttribute(n), x = m !== null && m !== "false", g = (It.get(h) || 0) + 1, _ = (s.get(h) || 0) + 1;
          It.set(h, g), s.set(h, _), r.push(h), g === 1 && x && Ta.set(h, !0), _ === 1 && h.setAttribute(a, "true"), x || h.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", h, C);
        }
    });
  };
  return u(t), i.clear(), $n++, function() {
    r.forEach(function(p) {
      var h = It.get(p) - 1, m = s.get(p) - 1;
      It.set(p, h), s.set(p, m), h || (Ta.has(p) || p.removeAttribute(n), Ta.delete(p)), m || p.removeAttribute(a);
    }), $n--, $n || (It = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Ta = /* @__PURE__ */ new WeakMap(), Aa = {});
  };
}, vu = function(e, t, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = cu(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), fu(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function ka(e) {
  let t;
  Q(() => Ee(e), (a) => {
    a ? t = vu(a) : t && t();
  }), kt(() => {
    t && t();
  });
}
let mu = 0;
function xe(e, t = "radix") {
  const a = ln({ useId: void 0 });
  return Mo.useId ? `${t}-${Mo.useId()}` : a.useId ? `${t}-${a.useId()}` : `${t}-${++mu}`;
}
function hu(e) {
  const t = M(), a = $(() => {
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
function go(e) {
  const t = qd("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, n) => {
      var o, s;
      if (!(e != null && e.value) && !n)
        return;
      t.value = t.value + a;
      const r = (e == null ? void 0 : e.value) ?? n, i = document.activeElement, d = ((s = (o = r.find((h) => h === i)) == null ? void 0 : o.textContent) == null ? void 0 : s.trim()) ?? "", c = r.map((h) => {
        var m;
        return ((m = h.textContent) == null ? void 0 : m.trim()) ?? "";
      }), u = bu(c, t.value, d), p = r.find(
        (h) => {
          var m;
          return ((m = h.textContent) == null ? void 0 : m.trim()) === u;
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
  let s = yu(e, Math.max(o, 0));
  n.length === 1 && (s = s.filter((i) => i !== a));
  const r = s.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return r !== a ? r : void 0;
}
function rs() {
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
const yo = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const s = on(a.default()), r = s.findIndex((u) => u.type !== ir);
      if (r === -1)
        return s;
      const i = s[r];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? E(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const c = dr(i, d);
      for (const u in d)
        u.startsWith("on") && (c.props || (c.props = {}), c.props[u] = d[u]);
      return s.length === 1 ? c : (s[r] = c, s);
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => ze(n, t) : n !== "template" ? () => ze(e.as, t, { default: a.default }) : () => ze(yo, t, { default: a.default });
  }
});
function Ot() {
  const e = M(), t = $(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = e.value) == null ? void 0 : a.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : Ee(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function wu(e, t) {
  const a = M({}), n = M("none"), o = e.value ? "mounted" : "unmounted", { state: s, dispatch: r } = gu(o, {
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
  }), i = (h) => {
    var m;
    if (Ge) {
      const x = new CustomEvent(h, { bubbles: !1, cancelable: !1 });
      (m = t.value) == null || m.dispatchEvent(x);
    }
  };
  Q(
    e,
    async (h, m) => {
      var x;
      const g = m !== h;
      if (await te(), g) {
        const _ = n.value, C = Ia(t.value);
        h ? (r("MOUNT"), i("enter"), C === "none" && i("after-enter")) : C === "none" || ((x = a.value) == null ? void 0 : x.display) === "none" ? (r("UNMOUNT"), i("leave"), i("after-leave")) : m && _ !== C ? (r("ANIMATION_OUT"), i("leave")) : (r("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (h) => {
    const m = Ia(t.value), x = m.includes(
      h.animationName
    ), g = s.value === "mounted" ? "enter" : "leave";
    h.target === t.value && x && (i(`after-${g}`), r("ANIMATION_END")), h.target === t.value && m === "none" && r("ANIMATION_END");
  }, c = (h) => {
    h.target === t.value && (n.value = Ia(t.value));
  }, u = Q(
    t,
    (h, m) => {
      h ? (a.value = getComputedStyle(h), h.addEventListener("animationstart", c), h.addEventListener("animationcancel", d), h.addEventListener("animationend", d)) : (r("ANIMATION_END"), m == null || m.removeEventListener("animationstart", c), m == null || m.removeEventListener("animationcancel", d), m == null || m.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), p = Q(s, () => {
    const h = Ia(t.value);
    n.value = s.value === "mounted" ? h : "none";
  });
  return kt(() => {
    u(), p();
  }), {
    isPresent: $(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function Ia(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Fe = b({
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
    const { present: o, forceMount: s } = me(e), r = M(), { isPresent: i } = wu(o, r);
    a({ present: i });
    let d = t.default({ present: i });
    d = on(d || []);
    const c = He();
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
    return () => s.value || o.value || i.value ? ze(t.default({ present: i })[0], {
      ref: (u) => {
        const p = Ee(u);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
}), [qe, _u] = re("DialogRoot"), xu = /* @__PURE__ */ b({
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
    }), o = M(), s = M(), { modal: r } = me(a);
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
      contentElement: s
    }), (i, d) => w(i.$slots, "default", { open: l(n) });
  }
}), Cu = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = qe(), { forwardRef: n, currentElement: o } = N();
    return a.contentId || (a.contentId = xe(void 0, "radix-vue-dialog-content")), ie(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), y(l(R), E(t, {
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
}), rn = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = ns();
    return (a, n) => l(t) || a.forceMount ? (v(), y(Ja, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      w(a.$slots, "default")
    ], 8, ["to", "disabled"])) : J("", !0);
  }
}), is = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(rn), j(H(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $u = "dismissableLayer.pointerDownOutside", ku = "dismissableLayer.focusOutside";
function ds(e, t) {
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
  return ge((r) => {
    if (!Ge)
      return;
    const i = async (c) => {
      const u = c.target;
      if (t != null && t.value) {
        if (ds(t.value, u)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let p = function() {
            vo(
              $u,
              e,
              h
            );
          };
          const h = { originalEvent: c };
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
function Pu(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1);
  return ge((s) => {
    if (!Ge)
      return;
    const r = async (i) => {
      t != null && t.value && (await te(), !(!t.value || ds(t.value, i.target)) && i.target && !o.value && vo(
        ku,
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
const Ae = hl({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ba = /* @__PURE__ */ b({
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
        var x;
        return ((x = s.value) == null ? void 0 : x.ownerDocument) ?? globalThis.document;
      }
    ), i = $(() => Ae.layersRoot), d = $(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), c = $(() => Ae.layersWithOutsidePointerEventsDisabled.size > 0), u = $(() => {
      const x = Array.from(i.value), [g] = [...Ae.layersWithOutsidePointerEventsDisabled].slice(-1), _ = x.indexOf(g);
      return d.value >= _;
    }), p = Bu(async (x) => {
      const g = [...Ae.branches].some(
        (_) => _ == null ? void 0 : _.contains(x.target)
      );
      !u.value || g || (n("pointerDownOutside", x), n("interactOutside", x), await te(), x.defaultPrevented || n("dismiss"));
    }, s), h = Pu((x) => {
      [...Ae.branches].some(
        (g) => g == null ? void 0 : g.contains(x.target)
      ) || (n("focusOutside", x), n("interactOutside", x), x.defaultPrevented || n("dismiss"));
    }, s);
    mo("Escape", (x) => {
      d.value === i.value.size - 1 && (n("escapeKeyDown", x), x.defaultPrevented || n("dismiss"));
    });
    let m;
    return ge((x) => {
      s.value && (a.disableOutsidePointerEvents && (Ae.layersWithOutsidePointerEventsDisabled.size === 0 && (m = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), Ae.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), x(() => {
        a.disableOutsidePointerEvents && Ae.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = m);
      }));
    }), ge((x) => {
      x(() => {
        s.value && (i.value.delete(s.value), Ae.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (x, g) => (v(), y(l(R), {
      ref: l(o),
      "as-child": x.asChild,
      as: x.as,
      "data-dismissable-layer": "",
      style: wa({
        pointerEvents: c.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(h).onFocusCapture,
      onBlurCapture: l(h).onBlurCapture,
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
    return ie(() => {
      Ae.branches.add(n.value);
    }), kt(() => {
      Ae.branches.delete(n.value);
    }), (o, s) => (v(), y(l(R), E({ ref: l(a) }, t), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kn = "focusScope.autoFocusOnMount", Bn = "focusScope.autoFocusOnUnmount", tl = { bubbles: !1, cancelable: !0 };
function Ua(e, { select: t = !1 } = {}) {
  const a = document.activeElement;
  for (const n of e)
    if (pt(n, { select: t }), document.activeElement !== a)
      return !0;
}
function Ou(e) {
  const t = bo(e), a = al(t, e), n = al(t.reverse(), e);
  return [a, n];
}
function bo(e) {
  const t = [], a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) t.push(a.currentNode);
  return t;
}
function al(e, t) {
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
function pt(e, { select: t = !1 } = {}) {
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
      t !== a && (a == null || a.pause()), e.value = nl(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var a;
      e.value = nl(e.value, t), (a = e.value[0]) == null || a.resume();
    }
  };
}
function nl(e, t) {
  const a = [...e], n = a.indexOf(t);
  return n !== -1 && a.splice(n, 1), a;
}
function Au(e) {
  return e.filter((t) => t.tagName !== "A");
}
const dn = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, n = t, { currentRef: o, currentElement: s } = N(), r = M(null), i = Tu(), d = hl({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ge((u) => {
      if (!Ge)
        return;
      const p = s.value;
      if (!a.trapped)
        return;
      function h(_) {
        if (d.paused || !p)
          return;
        const C = _.target;
        p.contains(C) ? r.value = C : pt(r.value, { select: !0 });
      }
      function m(_) {
        if (d.paused || !p)
          return;
        const C = _.relatedTarget;
        C !== null && (p.contains(C) || pt(r.value, { select: !0 }));
      }
      function x(_) {
        p.contains(r.value) || pt(p);
      }
      document.addEventListener("focusin", h), document.addEventListener("focusout", m);
      const g = new MutationObserver(x);
      p && g.observe(p, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), ge(async (u) => {
      const p = s.value;
      if (await te(), !p)
        return;
      i.add(d);
      const h = document.activeElement;
      if (!p.contains(h)) {
        const m = new CustomEvent(kn, tl);
        p.addEventListener(kn, (x) => n("mountAutoFocus", x)), p.dispatchEvent(m), m.defaultPrevented || (Ua(Au(bo(p)), {
          select: !0
        }), document.activeElement === h && pt(p));
      }
      u(() => {
        p.removeEventListener(kn, (g) => n("mountAutoFocus", g));
        const m = new CustomEvent(Bn, tl), x = (g) => {
          n("unmountAutoFocus", g);
        };
        p.addEventListener(Bn, x), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || pt(h ?? document.body, { select: !0 }), p.removeEventListener(Bn, x), i.remove(d);
        }, 0);
      });
    });
    function c(u) {
      if (!a.loop && !a.trapped || d.paused)
        return;
      const p = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, h = document.activeElement;
      if (p && h) {
        const m = u.currentTarget, [x, g] = Ou(m);
        x && g ? !u.shiftKey && h === g ? (u.preventDefault(), a.loop && pt(x, { select: !0 })) : u.shiftKey && h === x && (u.preventDefault(), a.loop && pt(g, { select: !0 })) : h === m && u.preventDefault();
      }
    }
    return (u, p) => (v(), y(l(R), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: c
    }, {
      default: f(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Iu = "menu.itemSelect", zn = ["Enter", " "], Vu = ["ArrowDown", "PageUp", "Home"], us = ["ArrowUp", "PageDown", "End"], Ru = [...Vu, ...us], Fu = {
  ltr: [...zn, "ArrowRight"],
  rtl: [...zn, "ArrowLeft"]
}, Lu = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function wo(e) {
  return e ? "open" : "closed";
}
function Ya(e) {
  return e === "indeterminate";
}
function _o(e) {
  return Ya(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Wn(e) {
  const t = document.activeElement;
  for (const a of e)
    if (a === t || (a.focus(), document.activeElement !== t))
      return;
}
function Nu(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, d = t[s].y, c = t[r].x, u = t[r].y;
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
function ha(e) {
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
const cs = /* @__PURE__ */ b({
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
    const a = e, n = t, o = qe(), { forwardRef: s, currentElement: r } = N();
    return o.titleId || (o.titleId = xe(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = xe(void 0, "radix-vue-dialog-description")), ie(() => {
      o.contentElement = r, document.activeElement !== document.body && (o.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && ju({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: r
    }), (i, d) => (v(), y(l(dn), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: d[6] || (d[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: f(() => [
        O(l(Ba), E({
          id: l(o).contentId,
          ref: l(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(o).descriptionId,
          "aria-labelledby": l(o).titleId,
          "data-state": l(wo)(l(o).open.value)
        }, i.$attrs, {
          onDismiss: d[0] || (d[0] = (c) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: d[2] || (d[2] = (c) => n("focusOutside", c)),
          onInteractOutside: d[3] || (d[3] = (c) => n("interactOutside", c)),
          onPointerDownOutside: d[4] || (d[4] = (c) => n("pointerDownOutside", c))
        }), {
          default: f(() => [
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
    const a = e, n = t, o = qe(), s = Dt(n), { forwardRef: r, currentElement: i } = N();
    return ka(i), (d, c) => (v(), y(cs, E({ ...a, ...l(s) }, {
      ref: l(r),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: c[0] || (c[0] = (u) => {
        var p;
        u.defaultPrevented || (u.preventDefault(), (p = l(o).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: c[1] || (c[1] = (u) => {
        const p = u.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || h) && u.preventDefault();
      }),
      onFocusOutside: c[2] || (c[2] = (u) => {
        u.preventDefault();
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
    const a = e, n = Dt(t);
    N();
    const o = qe(), s = M(!1), r = M(!1);
    return (i, d) => (v(), y(cs, E({ ...a, ...l(n) }, {
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
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ps = /* @__PURE__ */ b({
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
    const a = e, n = t, o = qe(), s = Dt(n), { forwardRef: r } = N();
    return (i, d) => (v(), y(l(Fe), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), y(Hu, E({
          key: 0,
          ref: l(r)
        }, { ...a, ...l(s), ...i.$attrs }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), y(Ku, E({
          key: 1,
          ref: l(r)
        }, { ...a, ...l(s), ...i.$attrs }), {
          default: f(() => [
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
    const t = qe();
    return $a(!0), N(), (a, n) => (v(), y(l(R), {
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
}), fs = /* @__PURE__ */ b({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = qe(), { forwardRef: a } = N();
    return (n, o) => {
      var s;
      return (s = l(t)) != null && s.modal.value ? (v(), y(l(Fe), {
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
}), xo = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const a = qe();
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
    const t = e, a = qe();
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
    const a = qe();
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
function Xu(e) {
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
function Zu(e, t) {
  const a = t(e), n = a.compare(e), o = {};
  return n >= 7 && (o.day = 1), n >= fa(e) && (o.month = 1), a.set({ ...o });
}
function Ju(e, t) {
  const a = t(e), n = e.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= fa(e) && (o.month = 13), a.set({ ...o });
}
function Qu(e, t) {
  return t(e);
}
function ec(e, t) {
  return t(e);
}
function vs(e) {
  const t = uu(e.locale.value), a = $(() => {
    const g = {
      calendar: e.placeholder.value.calendar.identifier
    };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (g.era = "short"), g;
  }), n = M(_t({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), o = $(() => n.value.map((g) => g.value));
  function s(g) {
    return !o.value.some((_) => Ro(g, _));
  }
  const r = (g = "month", _) => {
    if (!e.maxValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[n.value.length - 1].value;
    if (_ || e.nextPage.value) {
      const k = Zu(C, _ || e.nextPage.value);
      return ua(k, e.maxValue.value);
    }
    if (g === "year") {
      const k = C.add({ years: 1 }).set({ day: 1, month: 1 });
      return ua(k, e.maxValue.value);
    }
    const P = C.add({ months: 1 }).set({ day: 1 });
    return ua(P, e.maxValue.value);
  }, i = (g = "month", _) => {
    if (!e.minValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[0].value;
    if (_ || e.prevPage.value) {
      const k = Ju(C, _ || e.prevPage.value);
      return ft(k, e.minValue.value);
    }
    if (g === "year") {
      const k = C.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return ft(k, e.minValue.value);
    }
    const P = C.subtract({ months: 1 }).set({ day: 35 });
    return ft(P, e.minValue.value);
  };
  function d(g) {
    var _;
    return !!((_ = e.isDateDisabled) != null && _.call(e, g) || e.disabled.value || e.maxValue.value && ua(g, e.maxValue.value) || e.minValue.value && ft(g, e.minValue.value));
  }
  const c = (g) => {
    var _;
    return !!((_ = e.isDateUnavailable) != null && _.call(e, g));
  }, u = $(() => n.value.length ? n.value[0].rows[0].map((g) => t.dayOfWeek(Ie(g), e.weekdayFormat.value)) : []), p = (g = "month", _) => {
    const C = n.value[0].value;
    if (_ || e.nextPage.value) {
      const D = Qu(C, _ || e.nextPage.value), S = _t({
        dateObj: D,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = S;
      const I = {};
      if (!_) {
        const A = S[0].value.compare(C);
        A >= fa(C) && (I.day = 1), A >= 365 && (I.month = 1);
      }
      e.placeholder.value = S[0].value.set({ ...I });
      return;
    }
    const P = g === "month" ? C.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.add({ years: 1 }), k = _t({
      dateObj: P,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = k, e.placeholder.value = k[0].value.set({ day: 1 });
  }, h = (g = "month", _) => {
    const C = n.value[0].value;
    if (_ || e.prevPage.value) {
      const D = ec(C, _ || e.prevPage.value), S = _t({
        dateObj: D,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = S;
      const I = {};
      if (!_) {
        const A = C.compare(S[0].value);
        A >= fa(C) && (I.day = 1), A >= 365 && (I.month = 1);
      }
      e.placeholder.value = S[0].value.set({ ...I });
      return;
    }
    const P = g === "month" ? C.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.subtract({ years: 1 }), k = _t({
      dateObj: P,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = k, e.placeholder.value = k[0].value.set({ day: 1 });
  };
  Q(e.placeholder, (g) => {
    o.value.some((_) => Ro(_, g)) || (n.value = _t({
      dateObj: g,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), Q([e.locale, e.weekStartsOn, e.fixedWeeks, e.numberOfMonths], () => {
    n.value = _t({
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
      return `${t.fullMonthAndYear(Ie(S), a.value)}`;
    }
    const g = Ie(n.value[0].value), _ = Ie(n.value[n.value.length - 1].value), C = t.fullMonth(g, a.value), P = t.fullMonth(_, a.value), k = t.fullYear(g, a.value), D = t.fullYear(_, a.value);
    return k === D ? `${C} - ${P} ${D}` : `${C} ${k} - ${P} ${D}`;
  }), x = $(() => `${e.calendarLabel.value ?? "Event Date"}, ${m.value}`);
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
    prevPage: h,
    headingValue: m,
    fullCalendarLabel: x
  };
}
const tc = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, ac = {
  role: "heading",
  "aria-level": "2"
}, [Jt, nc] = re("CalendarRoot"), oc = /* @__PURE__ */ b({
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
      multiple: h,
      minValue: m,
      maxValue: x,
      numberOfMonths: g,
      preventDeselect: _,
      isDateDisabled: C,
      isDateUnavailable: P,
      calendarLabel: k,
      defaultValue: D,
      nextPage: S,
      prevPage: I,
      dir: A
    } = me(a), { primitiveElement: z, currentElement: F } = Ot(), B = yt(A), T = ve(a, "modelValue", n, {
      defaultValue: D.value,
      passive: a.modelValue === void 0
    }), V = Ql({
      defaultPlaceholder: a.placeholder,
      defaultValue: T.value
    }), G = ve(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? V.copy(),
      passive: a.placeholder === void 0
    });
    function K(le) {
      G.value = le.copy();
    }
    const {
      fullCalendarLabel: W,
      headingValue: q,
      isDateDisabled: ae,
      isDateUnavailable: ue,
      isNextButtonDisabled: fe,
      isPrevButtonDisabled: ke,
      weekdays: ye,
      isOutsideVisibleView: na,
      nextPage: wt,
      prevPage: oa,
      formatter: rt,
      grid: la
    } = vs({
      locale: o,
      placeholder: G,
      weekStartsOn: c,
      fixedWeeks: p,
      numberOfMonths: g,
      minValue: m,
      maxValue: x,
      disabled: s,
      weekdayFormat: u,
      pagedNavigation: d,
      isDateDisabled: C.value,
      isDateUnavailable: P.value,
      calendarLabel: k,
      nextPage: S,
      prevPage: I
    }), {
      isInvalid: Oe,
      isDateSelected: Be
    } = Xu({
      date: T,
      isDateDisabled: ae,
      isDateUnavailable: ue
    });
    Q(T, (le) => {
      if (Array.isArray(le) && le.length) {
        const $e = le[le.length - 1];
        $e && !Ne(G.value, $e) && K($e);
      } else !Array.isArray(le) && le && !Ne(G.value, le) && K(le);
    });
    function Le(le) {
      if (h.value) {
        if (Array.isArray(T.value)) {
          if (!T.value) {
            T.value = [le.copy()];
            return;
          }
          if (T.value.findIndex(($e) => we($e, le)) === -1)
            T.value = [...T.value, le];
          else if (!_.value) {
            const $e = T.value.filter((Xe) => !we(Xe, le));
            if (!$e.length) {
              G.value = le.copy(), T.value = void 0;
              return;
            }
            T.value = $e.map((Xe) => Xe.copy());
          }
        }
      } else {
        if (!T.value) {
          T.value = le.copy();
          return;
        }
        !_.value && Ne(T.value, le) ? (G.value = le.copy(), T.value = void 0) : T.value = le.copy();
      }
    }
    return ie(() => {
      i.value && es(F.value);
    }), nc({
      isDateUnavailable: ue,
      dir: B,
      isDateDisabled: ae,
      locale: o,
      formatter: rt,
      modelValue: T,
      placeholder: G,
      disabled: s,
      initialFocus: i,
      pagedNavigation: d,
      weekStartsOn: c,
      weekdayFormat: u,
      fixedWeeks: p,
      multiple: h,
      numberOfMonths: g,
      readonly: r,
      preventDeselect: _,
      fullCalendarLabel: W,
      headingValue: q,
      isInvalid: Oe,
      isDateSelected: Be,
      isNextButtonDisabled: fe,
      isPrevButtonDisabled: ke,
      isOutsideVisibleView: na,
      nextPage: wt,
      prevPage: oa,
      parentElement: F,
      onPlaceholderChange: K,
      onDateChange: Le
    }), (le, $e) => (v(), y(l(R), {
      ref_key: "primitiveElement",
      ref: z,
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
        w(le.$slots, "default", {
          date: l(G),
          grid: l(la),
          weekDays: l(ye),
          weekStartsOn: l(c),
          locale: l(o),
          fixedWeeks: l(p)
        }),
        de("div", tc, [
          de("div", ac, X(l(W)), 1)
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
    return (a, n) => (v(), y(l(R), j(H(t)), {
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
    const t = e, a = Jt();
    return (n, o) => (v(), y(l(R), E(t, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        w(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          Y(X(l(a).headingValue.value), 1)
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
    const t = e, a = Jt(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), y(l(R), E(t, {
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
    const t = Jt();
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
    return (a, n) => (v(), y(l(R), j(H(t)), {
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
    const t = e, a = $(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = Jt();
    return (o, s) => (v(), y(l(R), {
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
    const t = e, a = $(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = Jt();
    return (o, s) => (v(), y(l(R), {
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
    return (a, n) => (v(), y(l(R), j(H(t)), {
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
    return (a, n) => (v(), y(l(R), j(H(t)), {
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
    const t = e, a = rs(), n = Jt(), { primitiveElement: o, currentElement: s } = Ot(), r = $(() => t.day.day.toLocaleString(n.locale.value)), i = $(() => n.formatter.custom(Ie(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), d = $(() => n.isDateDisabled(t.day)), c = $(
      () => {
        var k;
        return (k = n.isDateUnavailable) == null ? void 0 : k.call(n, t.day);
      }
    ), u = $(() => El(t.day, Bt())), p = $(() => !Sl(t.day, t.month)), h = $(
      () => n.isOutsideVisibleView(t.day)
    ), m = $(() => !n.disabled.value && we(t.day, n.placeholder.value)), x = $(() => n.isDateSelected(t.day)), g = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function _(k) {
      var D;
      n.readonly.value || n.isDateDisabled(k) || (D = n.isDateUnavailable) != null && D.call(n, k) || n.onDateChange(k);
    }
    function C() {
      _(t.day);
    }
    function P(k) {
      k.preventDefault(), k.stopPropagation();
      const D = n.parentElement.value, S = D ? Array.from(D.querySelectorAll(g)) : [];
      let I = S.indexOf(s.value);
      const A = 7, z = n.dir.value === "rtl" ? -1 : 1;
      switch (k.code) {
        case a.ARROW_RIGHT:
          I += z;
          break;
        case a.ARROW_LEFT:
          I -= z;
          break;
        case a.ARROW_UP:
          I -= A;
          break;
        case a.ARROW_DOWN:
          I += A;
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
        n.prevPage(), te(() => {
          const F = D ? Array.from(D.querySelectorAll(g)) : [];
          F[F.length - Math.abs(I)].focus();
        });
        return;
      }
      if (I >= S.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), te(() => {
          (D ? Array.from(D.querySelectorAll(g)) : [])[I - S.length].focus();
        });
      }
    }
    return (k, D) => (v(), y(l(R), E({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": p.value || d.value || c.value ? !0 : void 0,
      "data-selected": x.value ? !0 : void 0,
      "data-value": k.day.toString(),
      "data-disabled": d.value || p.value ? "" : void 0,
      "data-unavailable": c.value ? "" : void 0,
      "data-today": u.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": h.value ? "" : void 0,
      "data-focused": m.value ? "" : void 0,
      tabindex: m.value ? 0 : p.value || d.value ? void 0 : -1,
      onClick: C,
      onKeydown: [
        We(P, ["up", "down", "left", "right", "space", "enter"]),
        D[0] || (D[0] = We(_e(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: f(() => [
        w(k.$slots, "default", { dayValue: r.value }, () => [
          Y(X(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Xa(e) {
  return e === "indeterminate";
}
function ms(e) {
  return Xa(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const hc = ["value", "checked", "name", "disabled", "required"], [gc, yc] = re("CheckboxRoot"), bc = /* @__PURE__ */ b({
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
    }), { forwardRef: r, currentElement: i } = N(), d = sn(i), c = $(() => {
      var u;
      return a.id && i.value ? (u = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : u.innerText : void 0;
    });
    return yc({
      disabled: o,
      state: s
    }), (u, p) => (v(), U(ee, null, [
      O(l(R), E(u.$attrs, {
        id: u.id,
        ref: l(r),
        role: "checkbox",
        "as-child": a.asChild,
        as: u.as,
        type: u.as === "button" ? "button" : void 0,
        "aria-checked": l(Xa)(l(s)) ? "mixed" : l(s),
        "aria-required": !1,
        "aria-label": u.$attrs["aria-label"] || c.value,
        "data-state": l(ms)(l(s)),
        "data-disabled": l(o) ? "" : void 0,
        disabled: l(o),
        onKeydown: We(_e(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (h) => s.value = l(Xa)(l(s)) ? !0 : !l(s))
      }), {
        default: f(() => [
          w(u.$slots, "default", { checked: l(s) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      l(d) ? (v(), U("input", {
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
    return (n, o) => (v(), y(l(Fe), {
      present: n.forceMount || l(Xa)(l(a).state.value) || l(a).state.value === !0
    }, {
      default: f(() => [
        O(l(R), E({
          ref: l(t),
          "data-state": l(ms)(l(a).state.value),
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
}), [hs, _c] = re("PopperRoot"), Pa = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = M();
    return _c({
      anchor: t,
      onAnchorChange: (a) => t.value = a
    }), (a, n) => w(a.$slots, "default");
  }
}), Co = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = N(), o = hs();
    return ge(() => {
      o.onAnchorChange(t.element ?? n.value);
    }), (s, r) => (v(), y(l(R), {
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
      const { placement: s, rects: r, middlewareData: i } = t, d = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, c = d ? 0 : e.arrowWidth, u = d ? 0 : e.arrowHeight, [p, h] = Un(s), m = { start: "0%", center: "50%", end: "100%" }[h], x = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + c / 2, g = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + u / 2;
      let _ = "", C = "";
      return p === "bottom" ? (_ = d ? m : `${x}px`, C = `${-u}px`) : p === "top" ? (_ = d ? m : `${x}px`, C = `${r.floating.height + u}px`) : p === "right" ? (_ = `${-u}px`, C = d ? m : `${g}px`) : p === "left" && (_ = `${r.floating.width + u}px`, C = d ? m : `${g}px`), { data: { x: _, y: C } };
    }
  };
}
function Un(e) {
  const [t, a = "center"] = e.split("-");
  return [t, a];
}
const gs = {
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
}, [vg, $c] = re("PopperContent"), ga = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ _l({
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
    ...gs
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = hs(), { forwardRef: s, currentElement: r } = N(), i = M(), d = M(), { width: c, height: u } = hu(d), p = $(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), h = $(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = $(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), x = $(() => ({
      padding: h.value,
      boundary: m.value.filter(xc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), g = Nd(() => [
      Pd({
        mainAxis: a.sideOffset + u.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && Xo({
        ...x.value
      }),
      a.avoidCollisions && Dd({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? Md() : void 0,
        ...x.value
      }),
      !a.prioritizePosition && a.avoidCollisions && Xo({
        ...x.value
      }),
      Od({
        ...x.value,
        apply: ({ elements: B, rects: T, availableWidth: V, availableHeight: G }) => {
          const { width: K, height: W } = T.reference, q = B.floating.style;
          q.setProperty(
            "--radix-popper-available-width",
            `${V}px`
          ), q.setProperty(
            "--radix-popper-available-height",
            `${G}px`
          ), q.setProperty(
            "--radix-popper-anchor-width",
            `${K}px`
          ), q.setProperty(
            "--radix-popper-anchor-height",
            `${W}px`
          );
        }
      }),
      d.value && Id({ element: d.value, padding: a.arrowPadding }),
      Cc({
        arrowWidth: c.value,
        arrowHeight: u.value
      }),
      a.hideWhenDetached && Sd({ strategy: "referenceHidden", ...x.value })
    ]), { floatingStyles: _, placement: C, isPositioned: P, middlewareData: k } = Vd(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...B) => Bd(...B, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), D = $(
      () => Un(C.value)[0]
    ), S = $(
      () => Un(C.value)[1]
    );
    yr(() => {
      P.value && n("placed");
    });
    const I = $(
      () => {
        var B;
        return ((B = k.value.arrow) == null ? void 0 : B.centerOffset) !== 0;
      }
    ), A = M("");
    ge(() => {
      r.value && (A.value = window.getComputedStyle(r.value).zIndex);
    });
    const z = $(() => {
      var B;
      return ((B = k.value.arrow) == null ? void 0 : B.x) ?? 0;
    }), F = $(() => {
      var B;
      return ((B = k.value.arrow) == null ? void 0 : B.y) ?? 0;
    });
    return $c({
      placedSide: D,
      onArrowChange: (B) => d.value = B,
      arrowX: z,
      arrowY: F,
      shouldHideArrow: I
    }), (B, T) => {
      var V, G, K;
      return v(), U("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: wa({
          ...l(_),
          transform: l(P) ? l(_).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: A.value,
          "--radix-popper-transform-origin": [
            (V = l(k).transformOrigin) == null ? void 0 : V.x,
            (G = l(k).transformOrigin) == null ? void 0 : G.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((K = l(k).hide) == null ? void 0 : K.referenceHidden) && {
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
}), un = /* @__PURE__ */ b({
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
    const t = e, a = $(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${o}][${t.name}][${s}]`, value: r })) : { name: `[${t.name}][${o}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, o]) => ({ name: `[${t.name}][${n}]`, value: o })) : []);
    return (n, o) => (v(!0), U(ee, null, he(a.value, (s) => (v(), y(un, {
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
}), Bc = "data-radix-vue-collection-item", [$o, Pc] = re("CollectionProvider");
function ys(e = Bc) {
  const t = M(/* @__PURE__ */ new Map()), a = M(), n = Pc({
    collectionRef: a,
    itemMap: t,
    attrName: e
  }), { getItems: o } = ws(n), s = $(() => Array.from(n.itemMap.value.values())), r = $(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: s, itemMapSize: r };
}
const bs = b({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const a = $o(), { primitiveElement: n, currentElement: o } = Ot();
    return Q(o, () => {
      a.collectionRef.value = o.value;
    }), () => ze(yo, { ref: n }, t);
  }
}), ko = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: a }) {
    const n = $o(), { primitiveElement: o, currentElement: s } = Ot();
    return ge((r) => {
      if (s.value) {
        const i = ur(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: e.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => ze(yo, { ...a, [n.attrName]: "", ref: o }, t);
  }
});
function ws(e) {
  const t = e ?? $o();
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
const [Qt, Dc] = re("ComboboxRoot"), Oc = /* @__PURE__ */ b({
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
    const a = e, n = t, { multiple: o, disabled: s, dir: r } = me(a), i = yt(r), d = ve(a, "searchTerm", n, {
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
    async function h(W) {
      var q, ae;
      u.value = W, await te(), W ? (c.value && (Array.isArray(c.value) && o.value ? p.value = (q = k().find((ue) => {
        var fe, ke;
        return ((ke = (fe = ue.ref) == null ? void 0 : fe.dataset) == null ? void 0 : ke.state) === "checked";
      })) == null ? void 0 : q.value : p.value = c.value), await te(), (ae = g.value) == null || ae.focus(), G()) : (x.value = !1, a.resetSearchTermOnBlur && z());
    }
    function m(W) {
      if (Array.isArray(c.value) && o.value) {
        const q = c.value.findIndex((ue) => xt(ue, W)), ae = [...c.value];
        q === -1 ? ae.push(W) : ae.splice(q, 1), c.value = ae;
      } else
        c.value = W, h(!1);
    }
    const x = M(!1), g = M(), _ = M(), { forwardRef: C, currentElement: P } = N(), { getItems: k, reactiveItems: D, itemMapSize: S } = ys("data-radix-vue-combobox-item"), I = M([]);
    Q(() => S.value, () => {
      I.value = k().map((W) => W.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const A = $(() => {
      if (x.value) {
        if (a.filterFunction)
          return a.filterFunction(I.value, d.value);
        const W = I.value.filter((q) => typeof q == "string");
        if (W.length)
          return W.filter((q) => {
            var ae;
            return q.toLowerCase().includes((ae = d.value) == null ? void 0 : ae.toLowerCase());
          });
      }
      return I.value;
    });
    function z() {
      !o.value && c.value && !Array.isArray(c.value) ? a.displayValue ? d.value = a.displayValue(c.value) : typeof c.value != "object" ? d.value = c.value.toString() : d.value = "" : d.value = "";
    }
    const F = $(() => A.value.findIndex((W) => xt(W, p.value))), B = $(() => {
      var W;
      return (W = D.value.find((q) => xt(q.value, p.value))) == null ? void 0 : W.ref;
    }), T = $(() => JSON.stringify(c.value));
    Q(T, async () => {
      await te(), await te(), z();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), Q(() => [A.value.length, d.value.length], async ([W, q], [ae, ue]) => {
      await te(), await te(), W && (ue > q || F.value === -1) && (p.value = A.value[0]);
    });
    const V = sn(P);
    function G() {
      var W;
      B.value instanceof Element && ((W = B.value) == null || W.scrollIntoView({ block: "nearest" }));
    }
    function K() {
      B.value instanceof Element && B.value.focus && B.value.focus();
    }
    return Dc({
      searchTerm: d,
      modelValue: c,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: x,
      multiple: o,
      disabled: s,
      open: u,
      onOpenChange: h,
      filteredOptions: A,
      contentId: "",
      inputElement: g,
      selectedElement: B,
      onInputElementChange: (W) => g.value = W,
      onInputNavigation: async (W) => {
        const q = F.value;
        q === 0 && W === "up" || q === A.value.length - 1 && W === "down" || (q === -1 && A.value.length || W === "home" ? p.value = A.value[0] : W === "end" ? p.value = A.value[A.value.length - 1] : p.value = A.value[W === "up" ? q - 1 : q + 1], await te(), G(), K(), te(() => {
          var ae;
          return (ae = g.value) == null ? void 0 : ae.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async (W) => {
        var q;
        A.value.length && p.value && B.value instanceof Element && (W.preventDefault(), W.stopPropagation(), (q = B.value) == null || q.click());
      },
      selectedValue: p,
      onSelectedValueChange: (W) => p.value = W,
      parentElement: P,
      contentElement: _,
      onContentElementChange: (W) => _.value = W
    }), (W, q) => (v(), y(l(Pa), null, {
      default: f(() => [
        O(l(R), E({
          ref: l(C),
          style: {
            pointerEvents: l(u) ? "auto" : void 0
          },
          as: W.as,
          "as-child": W.asChild,
          dir: l(i)
        }, W.$attrs), {
          default: f(() => [
            w(W.$slots, "default", {
              open: l(u),
              modelValue: l(c)
            }),
            l(V) && a.name ? (v(), y(l(kc), {
              key: 0,
              name: a.name,
              value: l(c)
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
    const t = e, a = Qt(), { forwardRef: n, currentElement: o } = N();
    ie(() => {
      const u = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      u && (a.onInputElementChange(u), setTimeout(() => {
        t.autoFocus && (u == null || u.focus());
      }, 1));
    });
    const s = $(() => t.disabled || a.disabled.value || !1), r = M();
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
    return (u, p) => (v(), y(l(R), {
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
        We(_e(i, ["prevent"]), ["down", "up"]),
        We(l(a).onInputEnter, ["enter"]),
        We(_e(d, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: f(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), [_s, Ec] = re("ComboboxGroup"), Mc = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: a, currentElement: n } = N(), o = xe(void 0, "radix-vue-combobox-group"), s = Qt(), r = M(!1);
    function i() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!d.length;
    }
    return eu(n, () => {
      te(() => {
        i();
      });
    }, { childList: !0 }), Q(() => s.searchTerm.value, () => {
      te(() => {
        i();
      });
    }, { immediate: !0 }), Ec({
      id: o
    }), (d, c) => Gt((v(), y(l(R), E(t, {
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
      [Xn, r.value]
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
    const a = _s({ id: "" });
    return (n, o) => (v(), y(l(R), E(t, {
      id: l(a).id
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [mg, Ac] = re("ComboboxContent"), Ic = /* @__PURE__ */ b({
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
    const a = e, n = t, { position: o } = me(a), s = Qt();
    $a(a.bodyLock);
    const { forwardRef: r, currentElement: i } = N();
    ka(s.parentElement);
    const d = $(() => a.position === "popper" ? a : {}), c = ne(d.value);
    function u(h) {
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
    return Ac({ position: o }), (h, m) => (v(), y(l(bs), null, {
      default: f(() => [
        h.dismissable ? (v(), y(l(Ba), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": h.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (x) => l(s).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (x) => {
            var g;
            (g = l(s).parentElement.value) != null && g.contains(x.target) && x.preventDefault(), n("focusOutside", x);
          }),
          onInteractOutside: m[2] || (m[2] = (x) => n("interactOutside", x)),
          onEscapeKeyDown: m[3] || (m[3] = (x) => n("escapeKeyDown", x)),
          onPointerDownOutside: m[4] || (m[4] = (x) => {
            var g;
            (g = l(s).parentElement.value) != null && g.contains(x.target) && x.preventDefault(), n("pointerDownOutside", x);
          })
        }, {
          default: f(() => [
            (v(), y(Ue(l(o) === "popper" ? l(ga) : l(R)), E({ ...h.$attrs, ...l(c) }, {
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
                w(h.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (v(), y(Ue(l(o) === "popper" ? l(ga) : l(R)), E({ key: 1 }, { ...h.$attrs, ...d.value }, {
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
            w(h.$slots, "default")
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
    const a = oe(e, t), { forwardRef: n } = N(), o = Qt();
    return o.contentId || (o.contentId = xe(void 0, "radix-vue-combobox-content")), (s, r) => (v(), y(l(Fe), {
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
    const a = Qt(), n = $(() => a.filteredOptions.value.length === 0);
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
  const t = ln({
    nonce: M()
  });
  return $(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.nonce) == null ? void 0 : a.value);
  });
}
const [hg, Lc] = re("ComboboxItem"), Nc = "combobox.select", zc = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { disabled: o } = me(a), s = Qt();
    _s({ id: "", options: M([]) });
    const { forwardRef: r } = N(), i = $(
      () => {
        var g, _;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (g = s.modelValue.value) == null ? void 0 : g.some((C) => xt(C, a.value)) : xt((_ = s.modelValue) == null ? void 0 : _.value, a.value);
      }
    ), d = $(() => xt(s.selectedValue.value, a.value)), c = xe(void 0, "radix-vue-combobox-item"), u = xe(void 0, "radix-vue-combobox-option"), p = $(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((g) => xt(g, a.value)) : !0);
    async function h(g) {
      n("select", g), !(g != null && g.defaultPrevented) && !o.value && g && s.onValueChange(a.value);
    }
    function m(g) {
      if (!g)
        return;
      const _ = { originalEvent: g, value: a.value };
      vo(Nc, h, _);
    }
    async function x(g) {
      await te(), !g.defaultPrevented && s.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Lc({
      isSelected: i
    }), (g, _) => (v(), y(l(ko), { value: g.value }, {
      default: f(() => [
        Gt(O(l(R), {
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
          as: g.as,
          "as-child": g.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: m,
          onPointermove: x
        }, {
          default: f(() => [
            w(g.$slots, "default", {}, () => [
              Y(X(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Xn, p.value]
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
}), xs = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Co), j(H(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Uc() {
  const e = M(!1);
  return ie(() => {
    qa("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), qa(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const jc = ts(Uc), [St, Cs] = re(["MenuRoot", "MenuSub"], "MenuContext"), [Da, Hc] = re("MenuRoot"), Kc = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o, dir: s } = me(a), r = yt(s), i = ve(a, "open", n), d = M(), c = jc();
    return Cs({
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
    }), (u, p) => (v(), y(l(Pa), null, {
      default: f(() => [
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
function Xc(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Zc(e, t, a) {
  const n = Xc(e.key, a);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Yc[n];
}
function $s(e, t = !1, a) {
  const n = (a == null ? void 0 : a.activeElement) ?? document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n))
      return;
}
function Jc(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
const [Qc, ep] = re("RovingFocusGroup"), ks = /* @__PURE__ */ b({
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
    const n = e, o = a, { loop: s, orientation: r, dir: i } = me(n), d = yt(i), c = ve(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), u = M(!1), p = M(!1), h = M(0), { getItems: m } = ys();
    function x(_) {
      const C = !p.value;
      if (_.currentTarget && _.target === _.currentTarget && C && !u.value) {
        const P = new CustomEvent(Gc, qc);
        if (_.currentTarget.dispatchEvent(P), o("entryFocus", P), !P.defaultPrevented) {
          const k = m().map((A) => A.ref).filter((A) => A.dataset.disabled !== ""), D = k.find((A) => A.getAttribute("data-active") === "true"), S = k.find(
            (A) => A.id === c.value
          ), I = [D, S, ...k].filter(
            Boolean
          );
          $s(I, n.preventScrollOnEntryFocus);
        }
      }
      p.value = !1;
    }
    function g() {
      setTimeout(() => {
        p.value = !1;
      }, 1);
    }
    return t({
      getItems: m
    }), ep({
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
        h.value++;
      },
      onFocusableItemRemove: () => {
        h.value--;
      }
    }), (_, C) => (v(), y(l(bs), null, {
      default: f(() => [
        O(l(R), {
          tabindex: u.value || h.value === 0 ? -1 : 0,
          "data-orientation": l(r),
          as: _.as,
          "as-child": _.asChild,
          dir: l(d),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (P) => p.value = !0),
          onMouseup: g,
          onFocus: x,
          onBlur: C[1] || (C[1] = (P) => u.value = !1)
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
    const t = e, a = Qc(), n = $(() => t.tabStopId || xe()), o = $(
      () => a.currentTabStopId.value === n.value
    ), { getItems: s } = ws(), { primitiveElement: r, currentElement: i } = Ot(), d = $(() => {
      var u;
      return (u = i.value) == null ? void 0 : u.getRootNode();
    });
    ie(() => {
      t.focusable && a.onFocusableItemAdd();
    }), kt(() => {
      t.focusable && a.onFocusableItemRemove();
    });
    function c(u) {
      if (u.key === "Tab" && u.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (u.target !== u.currentTarget)
        return;
      const p = Zc(
        u,
        a.orientation.value,
        a.dir.value
      );
      if (p !== void 0) {
        if (u.metaKey || u.ctrlKey || u.altKey || !t.allowShiftKey && u.shiftKey)
          return;
        u.preventDefault();
        let h = [...s().map((m) => m.ref).filter((m) => m.dataset.disabled !== "")];
        if (p === "last")
          h.reverse();
        else if (p === "prev" || p === "next") {
          p === "prev" && h.reverse();
          const m = h.indexOf(
            u.currentTarget
          );
          h = a.loop.value ? Jc(h, m + 1) : h.slice(m + 1);
        }
        te(() => $s(h, !1, d.value));
      }
    }
    return (u, p) => (v(), y(l(ko), null, {
      default: f(() => [
        O(l(R), {
          ref_key: "primitiveElement",
          ref: r,
          tabindex: o.value ? 0 : -1,
          "data-orientation": l(a).orientation.value,
          "data-active": u.active,
          "data-disabled": u.focusable ? void 0 : "",
          as: u.as,
          "as-child": u.asChild,
          onMousedown: p[0] || (p[0] = (h) => {
            u.focusable ? l(a).onItemFocus(n.value) : h.preventDefault();
          }),
          onFocus: p[1] || (p[1] = (h) => l(a).onItemFocus(n.value)),
          onKeydown: c
        }, {
          default: f(() => [
            w(u.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [Bo, ap] = re("MenuContent"), Po = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ _l({
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
    ...gs
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = St(), s = Da(), { trapFocus: r, disableOutsidePointerEvents: i, loop: d } = me(a);
    ho(), $a(i.value);
    const c = M(""), u = M(0), p = M(0), h = M(null), m = M("right"), x = M(0), g = M(null), { createCollection: _ } = Zt(), { forwardRef: C, currentElement: P } = N(), k = _(P);
    Q(P, (B) => {
      o.onContentChange(B);
    });
    const { handleTypeaheadSearch: D } = go(k);
    kt(() => {
      window.clearTimeout(u.value);
    });
    function S(B) {
      var T, V;
      return m.value === ((T = h.value) == null ? void 0 : T.side) && zu(B, (V = h.value) == null ? void 0 : V.area);
    }
    async function I(B) {
      var T;
      n("openAutoFocus", B), !B.defaultPrevented && (B.preventDefault(), (T = P.value) == null || T.focus({
        preventScroll: !0
      }));
    }
    function A(B) {
      if (B.defaultPrevented)
        return;
      const T = B.target.closest("[data-radix-menu-content]") === B.currentTarget, V = B.ctrlKey || B.altKey || B.metaKey, G = B.key.length === 1, K = nu(
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
      if (K)
        return K == null ? void 0 : K.focus();
      if (B.code === "Space" || (T && (B.key === "Tab" && B.preventDefault(), !V && G && D(B.key)), B.target !== P.value) || !Ru.includes(B.key))
        return;
      B.preventDefault();
      const W = k.value;
      us.includes(B.key) && W.reverse(), Wn(W);
    }
    function z(B) {
      var T, V;
      (V = (T = B == null ? void 0 : B.currentTarget) == null ? void 0 : T.contains) != null && V.call(T, B.target) || (window.clearTimeout(u.value), c.value = "");
    }
    function F(B) {
      var T;
      if (!ha(B))
        return;
      const V = B.target, G = x.value !== B.clientX;
      if ((T = B == null ? void 0 : B.currentTarget) != null && T.contains(V) && G) {
        const K = B.clientX > x.value ? "right" : "left";
        m.value = K, x.value = B.clientX;
      }
    }
    return ap({
      onItemEnter: (B) => !!S(B),
      onItemLeave: (B) => {
        var T;
        S(B) || ((T = P.value) == null || T.focus(), g.value = null);
      },
      onTriggerLeave: (B) => !!S(B),
      searchRef: c,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (B) => {
        h.value = B;
      }
    }), (B, T) => (v(), y(l(dn), {
      "as-child": "",
      trapped: l(r),
      onMountAutoFocus: I,
      onUnmountAutoFocus: T[7] || (T[7] = (V) => n("closeAutoFocus", V))
    }, {
      default: f(() => [
        O(l(Ba), {
          "as-child": "",
          "disable-outside-pointer-events": l(i),
          onEscapeKeyDown: T[2] || (T[2] = (V) => n("escapeKeyDown", V)),
          onPointerDownOutside: T[3] || (T[3] = (V) => n("pointerDownOutside", V)),
          onFocusOutside: T[4] || (T[4] = (V) => n("focusOutside", V)),
          onInteractOutside: T[5] || (T[5] = (V) => n("interactOutside", V)),
          onDismiss: T[6] || (T[6] = (V) => n("dismiss"))
        }, {
          default: f(() => [
            O(l(ks), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": T[0] || (T[0] = (V) => g.value = V),
              "as-child": "",
              orientation: "vertical",
              dir: l(s).dir.value,
              loop: l(d),
              onEntryFocus: T[1] || (T[1] = (V) => {
                n("entryFocus", V), l(s).isUsingKeyboardRef.value || V.preventDefault();
              })
            }, {
              default: f(() => [
                O(l(ga), {
                  ref: l(C),
                  role: "menu",
                  as: B.as,
                  "as-child": B.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(wo)(l(o).open.value),
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
                  onKeydown: A,
                  onBlur: z,
                  onPointermove: F
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
}), Bs = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Bo(), { forwardRef: n } = N(), o = M(!1);
    async function s(i) {
      if (!i.defaultPrevented && ha(i)) {
        if (t.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function r(i) {
      await te(), !i.defaultPrevented && ha(i) && a.onItemLeave(i);
    }
    return (i, d) => (v(), y(l(ko), null, {
      default: f(() => [
        O(l(R), E({
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
            await te(), !(c.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: d[1] || (d[1] = async (c) => {
            await te(), !c.defaultPrevented && (o.value = !1);
          })
        }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), Do = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: s } = N(), r = Da(), i = Bo(), d = M(!1);
    async function c() {
      const u = s.value;
      if (!a.disabled && u) {
        const p = new CustomEvent(Iu, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await te(), p.defaultPrevented ? d.value = !1 : r.onClose();
      }
    }
    return (u, p) => (v(), y(Bs, E(a, {
      ref: l(o),
      onClick: c,
      onPointerdown: p[0] || (p[0] = () => {
        d.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (h) => {
        var m;
        await te(), !h.defaultPrevented && (d.value || (m = h.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (h) => {
        const m = l(i).searchRef.value !== "";
        u.disabled || m && h.key === " " || l(zn).includes(h.key) && (h.currentTarget.click(), h.preventDefault());
      })
    }), {
      default: f(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [np, Ps] = re(
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
    return (a, n) => (v(), y(l(Fe), {
      present: a.forceMount || l(Ya)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: f(() => [
        O(l(R), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": l(_o)(l(t).checked.value)
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
    return Ps({ checked: o }), (s, r) => (v(), y(Do, E({ role: "menuitemcheckbox" }, a, {
      "aria-checked": l(Ya)(l(o)) ? "mixed" : l(o),
      "data-state": l(_o)(l(o)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), l(Ya)(l(o)) ? o.value = !0 : o.value = !l(o);
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
    const a = e, n = t, o = oe(a, n), s = St(), { forwardRef: r, currentElement: i } = N();
    return ka(i), (d, c) => (v(), y(Po, E(l(o), {
      ref: l(r),
      "trap-focus": l(s).open.value,
      "disable-outside-pointer-events": l(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (u) => l(s).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = _e((u) => n("focusOutside", u), ["prevent"]))
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
    const a = oe(e, t), n = St();
    return (o, s) => (v(), y(Po, E(l(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (r) => l(n).onOpenChange(!1))
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
    const a = oe(e, t), n = St(), o = Da();
    return (s, r) => (v(), y(l(Fe), {
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
}), Ds = /* @__PURE__ */ b({
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
    return (a, n) => (v(), y(l(R), j(H(t)), {
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
    return (a, n) => (v(), y(l(rn), j(H(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [cp, pp] = re("MenuRadioGroup"), fp = /* @__PURE__ */ b({
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
    }), (o, s) => (v(), y(Ds, j(H(a)), {
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
    const a = e, n = t, { value: o } = me(a), s = cp(), r = $(
      () => s.modelValue.value === (o == null ? void 0 : o.value)
    );
    return Ps({ checked: r }), (i, d) => (v(), y(Do, E({ role: "menuitemradio" }, a, {
      "aria-checked": r.value,
      "data-state": l(_o)(r.value),
      onSelect: d[0] || (d[0] = async (c) => {
        n("select", c), l(s).onValueChange(l(o));
      })
    }), {
      default: f(() => [
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
}), [Os, hp] = re("MenuSub"), gp = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = ve(a, "open", t, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = St(), s = M(), r = M();
    return ge((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), Cs({
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
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, d) => (v(), y(l(Pa), null, {
      default: f(() => [
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
    const a = oe(e, t), n = St(), o = Da(), s = Os(), { forwardRef: r, currentElement: i } = N();
    return s.contentId || (s.contentId = xe(void 0, "radix-vue-menu-sub-content")), (d, c) => (v(), y(l(Fe), {
      present: d.forceMount || l(n).open.value
    }, {
      default: f(() => [
        O(Po, E(l(a), {
          id: l(s).contentId,
          ref: l(r),
          "aria-labelledby": l(s).triggerId,
          align: "start",
          side: l(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = _e((u) => {
            var p;
            l(o).isUsingKeyboardRef.value && ((p = l(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = _e(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (u) => {
            u.defaultPrevented || u.target !== l(s).trigger.value && l(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (u) => {
            l(o).onClose(), u.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (u) => {
            var p, h;
            const m = (p = u.currentTarget) == null ? void 0 : p.contains(u.target), x = l(Lu)[l(o).dir.value].includes(u.key);
            m && x && (l(n).onOpenChange(!1), (h = l(s).trigger.value) == null || h.focus(), u.preventDefault());
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
    const t = e, a = St(), n = Da(), o = Os(), s = Bo(), r = M(null);
    o.triggerId || (o.triggerId = xe(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    kt(() => {
      i();
    });
    function d(p) {
      !ha(p) || s.onItemEnter(p) || !t.disabled && !a.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function c(p) {
      var h, m;
      if (!ha(p))
        return;
      i();
      const x = (h = a.content.value) == null ? void 0 : h.getBoundingClientRect();
      if (x != null && x.width) {
        const g = (m = a.content.value) == null ? void 0 : m.dataset.side, _ = g === "right", C = _ ? -5 : 5, P = x[_ ? "left" : "right"], k = x[_ ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: P, y: x.top },
            { x: k, y: x.top },
            { x: k, y: x.bottom },
            { x: P, y: x.bottom }
          ],
          side: g
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
      var h;
      const m = s.searchRef.value !== "";
      t.disabled || m && p.key === " " || Fu[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await te(), (h = a.content.value) == null || h.focus(), p.preventDefault());
    }
    return (p, h) => (v(), y(xs, { "as-child": "" }, {
      default: f(() => [
        O(Bs, E(t, {
          id: l(o).triggerId,
          ref: (m) => {
            var x;
            (x = l(o)) == null || x.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(a).open.value,
          "aria-controls": l(o).contentId,
          "data-state": l(wo)(l(a).open.value),
          onClick: h[0] || (h[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), l(a).open.value || l(a).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: c,
          onKeydown: u
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
}), [Ss, wp] = re("DropdownMenuRoot"), _p = /* @__PURE__ */ b({
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
    }), s = M(), { modal: r, dir: i } = me(a), d = yt(i);
    return wp({
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
    }), (c, u) => (v(), y(l(Kc), {
      open: l(o),
      "onUpdate:open": u[0] || (u[0] = (p) => ba(o) ? o.value = p : null),
      dir: l(d),
      modal: l(r)
    }, {
      default: f(() => [
        w(c.$slots, "default", { open: l(o) })
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
    const t = e, a = Ss(), { forwardRef: n, currentElement: o } = N();
    return ie(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = xe(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (v(), y(l(xs), { "as-child": "" }, {
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
          onClick: r[0] || (r[0] = async (i) => {
            var d;
            !s.disabled && i.button === 0 && i.ctrlKey === !1 && ((d = l(a)) == null || d.onOpenToggle(), await te(), l(a).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = We(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && l(a).onOpenToggle(), i.key === "ArrowDown" && l(a).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
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
    return (a, n) => (v(), y(l(up), j(H(t)), {
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
    const a = oe(e, t);
    N();
    const n = Ss(), o = M(!1);
    function s(r) {
      r.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, r.preventDefault());
    }
    return n.contentId || (n.contentId = xe(void 0, "radix-vue-dropdown-menu-content")), (r, i) => {
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
        onInteractOutside: i[0] || (i[0] = (c) => {
          var u;
          if (c.defaultPrevented) return;
          const p = c.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || h;
          (!l(n).modal.value || m) && (o.value = !0), (u = l(n).triggerElement.value) != null && u.contains(c.target) && c.preventDefault();
        })
      }), {
        default: f(() => [
          w(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Es = /* @__PURE__ */ b({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = Dt(t);
    return N(), (o, s) => (v(), y(l(Do), j(H({ ...a, ...l(n) })), {
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
    return N(), (a, n) => (v(), y(l(Ds), j(H(t)), {
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
    return N(), (a, n) => (v(), y(l(mp), j(H(t)), {
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
    const a = e, n = Dt(t);
    return N(), (o, s) => (v(), y(l(lp), j(H({ ...a, ...l(n) })), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ms = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (a, n) => (v(), y(l(op), j(H(t)), {
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
    return N(), (a, n) => (v(), y(l(dp), j(H(t)), {
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
    const a = e, n = Dt(t);
    return N(), (o, s) => (v(), y(l(fp), j(H({ ...a, ...l(n) })), {
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
    const a = oe(e, t);
    return N(), (n, o) => (v(), y(l(vp), j(H(l(a))), {
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
      "onUpdate:open": s[0] || (s[0] = (r) => ba(n) ? n.value = r : null)
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
    const a = oe(e, t);
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
    return N(), (a, n) => (v(), y(l(bp), j(H(t)), {
      default: f(() => [
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
}), [ea, Ip] = re("PaginationRoot"), Vp = /* @__PURE__ */ b({
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
    const a = e, n = t, { siblingCount: o, disabled: s, showEdges: r } = me(a);
    N();
    const i = ve(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), d = $(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return Ip({
      page: i,
      onPageChange(c) {
        i.value = c;
      },
      pageCount: d,
      siblingCount: o,
      disabled: s,
      showEdges: r
    }), (c, u) => (v(), y(l(R), {
      as: c.as,
      "as-child": c.asChild
    }, {
      default: f(() => [
        w(c.$slots, "default", {
          page: l(i),
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
    const t = e, a = ea();
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
    const t = e, a = ea();
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
function ct(e, t) {
  const a = t - e + 1;
  return Array.from({ length: a }, (n, o) => o + e);
}
function Np(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const Va = "ellipsis";
function zp(e, t, a, n) {
  const o = t, s = Math.max(e - a, 1), r = Math.min(e + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, t) - 2, d = s > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(s - 1) > 2, c = r < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - r) > 2;
    if (!d && c)
      return [...ct(1, i), Va, o];
    if (d && !c) {
      const u = ct(o - i + 1, o);
      return [1, Va, ...u];
    }
    if (d && c) {
      const u = ct(s, r);
      return [1, Va, ...u, Va, o];
    }
    return ct(1, o);
  } else {
    const i = a * 2 + 1;
    return t < i ? ct(1, o) : e <= a + 1 ? ct(1, i) : t - e <= a ? ct(t - i + 1, o) : ct(s, r);
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
    const a = ea(), n = $(() => Np(
      zp(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, s) => (v(), y(l(R), j(H(t)), {
      default: f(() => [
        w(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), gg = /* @__PURE__ */ b({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const a = ea(), n = $(() => a.page.value === t.value);
    return (o, s) => (v(), y(l(R), E(t, {
      "data-type": "page",
      "aria-label": `Page ${o.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: l(a).disabled.value,
      type: o.as === "button" ? "button" : void 0,
      onClick: s[0] || (s[0] = (r) => l(a).onPageChange(o.value))
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Y(X(o.value), 1)
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
    const a = ea();
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
    const a = ea();
    return (n, o) => {
      var s;
      return v(), y(l(R), E(t, {
        "aria-label": "Previous Page",
        type: n.as === "button" ? "button" : void 0,
        disabled: l(a).page.value === 1 || ((s = l(a).disabled) == null ? void 0 : s.value),
        onClick: o[0] || (o[0] = (r) => l(a).onPageChange(l(a).page.value - 1))
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
}), [Oa, Hp] = re("PopoverRoot"), Kp = /* @__PURE__ */ b({
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
    }), r = M(), i = M(!1);
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
      triggerElement: r,
      hasCustomAnchor: i
    }), (d, c) => (v(), y(l(Pa), null, {
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
    const t = e, a = Oa(), { forwardRef: n, currentElement: o } = N();
    return ie(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), y(Ue(l(a).hasCustomAnchor.value ? l(R) : l(Co)), { "as-child": "" }, {
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
    return (a, n) => (v(), y(l(rn), j(H(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ts = /* @__PURE__ */ b({
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
    const a = e, n = t, o = ne(a), { forwardRef: s } = N(), r = Oa();
    return ho(), (i, d) => (v(), y(l(dn), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: d[6] || (d[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: f(() => [
        O(l(Ba), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (c) => n("pointerDownOutside", c)),
          onInteractOutside: d[1] || (d[1] = (c) => n("interactOutside", c)),
          onEscapeKeyDown: d[2] || (d[2] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: d[3] || (d[3] = (c) => n("focusOutside", c)),
          onDismiss: d[4] || (d[4] = (c) => l(r).onOpenChange(!1))
        }, {
          default: f(() => [
            O(l(ga), E(l(o), {
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
    const a = e, n = t, o = Oa(), s = M(!1);
    $a(!0);
    const r = oe(a, n), { forwardRef: i, currentElement: d } = N();
    return ka(d), (c, u) => (v(), y(Ts, E(l(r), {
      ref: l(i),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: u[0] || (u[0] = _e(
        (p) => {
          var h;
          n("closeAutoFocus", p), s.value || (h = l(o).triggerElement.value) == null || h.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: u[1] || (u[1] = (p) => {
        n("pointerDownOutside", p);
        const h = p.detail.originalEvent, m = h.button === 0 && h.ctrlKey === !0, x = h.button === 2 || m;
        s.value = x;
      }),
      onFocusOutside: u[2] || (u[2] = _e(() => {
      }, ["prevent"]))
    }), {
      default: f(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Xp = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Oa(), s = M(!1), r = M(!1), i = oe(a, n);
    return (d, c) => (v(), y(Ts, E(l(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (u) => {
        var p;
        n("closeAutoFocus", u), u.defaultPrevented || (s.value || (p = l(o).triggerElement.value) == null || p.focus(), u.preventDefault()), s.value = !1, r.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = async (u) => {
        var p;
        n("interactOutside", u), u.defaultPrevented || (s.value = !0, u.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const h = u.target;
        (p = l(o).triggerElement.value) != null && p.contains(h) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && r.value && u.preventDefault();
      })
    }), {
      default: f(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zp = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Oa(), s = oe(a, n), { forwardRef: r } = N();
    return o.contentId || (o.contentId = xe(void 0, "radix-vue-popover-content")), (i, d) => (v(), y(l(Fe), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), y(Yp, E({ key: 0 }, l(s), { ref: l(r) }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), y(Xp, E({ key: 1 }, l(s), { ref: l(r) }), {
          default: f(() => [
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
  const t = $(() => e.start.value ? !!e.isDateDisabled(e.start.value) : !1), a = $(() => e.end.value ? !!e.isDateDisabled(e.end.value) : !1), n = $(
    () => t.value || a.value ? !1 : !!(e.start.value && e.end.value && ft(e.end.value, e.start.value))
  ), o = (d) => e.start.value ? we(e.start.value, d) : !1, s = (d) => e.end.value ? we(e.end.value, d) : !1, r = (d) => e.start.value && we(e.start.value, d) || e.end.value && we(e.end.value, d) ? !0 : e.end.value && e.start.value ? Wi(d, e.start.value, e.end.value) : !1, i = $(() => {
    if (e.start.value && e.end.value || !e.start.value || !e.focusedValue.value)
      return null;
    const d = ft(e.start.value, e.focusedValue.value), c = d ? e.start.value : e.focusedValue.value, u = d ? e.focusedValue.value : e.start.value;
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
    isSelectionEnd: s,
    isHighlightedStart: (d) => !i.value || !i.value.start ? !1 : we(i.value.start, d),
    isHighlightedEnd: (d) => !i.value || !i.value.end ? !1 : we(i.value.end, d)
  };
}
const Qp = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, ef = {
  role: "heading",
  "aria-level": "2"
}, [ta, tf] = re("RangeCalendarRoot"), af = /* @__PURE__ */ b({
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
      preventDeselect: h,
      isDateUnavailable: m,
      isDateDisabled: x,
      calendarLabel: g,
      maxValue: _,
      minValue: C,
      locale: P,
      dir: k,
      nextPage: D,
      prevPage: S
    } = me(a), { primitiveElement: I, currentElement: A } = Ot(), z = yt(k), F = M(), B = M(), T = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), V = Ql({
      defaultPlaceholder: a.placeholder,
      defaultValue: T.value.start
    }), G = M(T.value.start), K = M(T.value.end), W = ve(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? V.copy(),
      passive: a.placeholder === void 0
    });
    function q(ce) {
      W.value = ce.copy();
    }
    const {
      fullCalendarLabel: ae,
      headingValue: ue,
      isDateDisabled: fe,
      isDateUnavailable: ke,
      isNextButtonDisabled: ye,
      isPrevButtonDisabled: na,
      grid: wt,
      weekdays: oa,
      isOutsideVisibleView: rt,
      nextPage: la,
      prevPage: Oe,
      formatter: Be
    } = vs({
      locale: P,
      placeholder: W,
      weekStartsOn: d,
      fixedWeeks: u,
      numberOfMonths: p,
      minValue: C,
      maxValue: _,
      disabled: o,
      weekdayFormat: c,
      pagedNavigation: i,
      isDateDisabled: x.value,
      isDateUnavailable: m.value,
      calendarLabel: g,
      nextPage: D,
      prevPage: S
    }), {
      isInvalid: Le,
      isSelected: le,
      highlightedRange: $e,
      isSelectionStart: Xe,
      isSelectionEnd: sa,
      isHighlightedStart: sr,
      isHighlightedEnd: rr
    } = Jp({
      start: G,
      end: K,
      isDateDisabled: fe,
      isDateUnavailable: ke,
      focusedValue: B
    });
    return Q(T, (ce) => {
      ce.start && (!G.value || !Ne(G.value, ce.start)) && (G.value = ce.start.copy()), ce.end && (!K.value || !Ne(K.value, ce.end)) && (K.value = ce.end.copy());
    }), Q(G, (ce) => {
      ce && !Ne(ce, W.value) && q(ce), n("update:startValue", ce);
    }), Q([G, K], ([ce, it]) => {
      const Me = T.value;
      if (!(Me && Me.start && Me.end && ce && it && Ne(Me.start, ce) && Ne(Me.end, it)))
        if (ce && it) {
          if (Me.start && Me.end && Ne(Me.start, ce) && Ne(Me.end, it))
            return;
          ft(it, ce) ? T.value = {
            start: it.copy(),
            end: ce.copy()
          } : T.value = {
            start: ce.copy(),
            end: it.copy()
          };
        } else Me.start && Me.end && (T.value = {
          start: void 0,
          end: void 0
        });
    }), tf({
      isDateUnavailable: ke,
      startValue: G,
      endValue: K,
      formatter: Be,
      modelValue: T,
      placeholder: W,
      disabled: o,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: u,
      numberOfMonths: p,
      readonly: s,
      preventDeselect: h,
      fullCalendarLabel: ae,
      headingValue: ue,
      isInvalid: Le,
      isDateDisabled: fe,
      highlightedRange: $e,
      focusedValue: B,
      lastPressedDateValue: F,
      isSelected: le,
      isSelectionEnd: sa,
      isSelectionStart: Xe,
      isNextButtonDisabled: ye,
      isPrevButtonDisabled: na,
      isOutsideVisibleView: rt,
      nextPage: la,
      prevPage: Oe,
      parentElement: A,
      onPlaceholderChange: q,
      locale: P,
      dir: z,
      isHighlightedStart: sr,
      isHighlightedEnd: rr
    }), ie(() => {
      r.value && es(A.value);
    }), (ce, it) => (v(), y(l(R), {
      ref_key: "primitiveElement",
      ref: I,
      as: ce.as,
      "as-child": ce.asChild,
      role: "application",
      "aria-label": l(ae),
      "data-readonly": l(s) ? "" : void 0,
      "data-disabled": l(o) ? "" : void 0,
      "data-invalid": l(Le) ? "" : void 0,
      dir: l(z)
    }, {
      default: f(() => [
        de("div", Qp, [
          de("div", ef, X(l(ae)), 1)
        ]),
        w(ce.$slots, "default", {
          date: l(W),
          grid: l(wt),
          weekDays: l(oa),
          weekStartsOn: l(d),
          locale: l(P),
          fixedWeeks: l(u)
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
    return (a, n) => (v(), y(l(R), j(H(t)), {
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
    const t = e, a = ta();
    return (n, o) => (v(), y(l(R), E(t, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        w(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          Y(X(l(a).headingValue.value), 1)
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
    const t = e, a = ta(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), y(l(R), E(t, {
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
    const t = ta();
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
    return (a, n) => (v(), y(l(R), j(H(t)), {
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
    const t = e, a = $(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = ta();
    return (o, s) => (v(), y(l(R), E(t, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).nextPage(t.step, t.nextPage))
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
    const t = e, a = $(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = ta();
    return (o, s) => (v(), y(l(R), E(t, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).prevPage(t.step, t.prevPage))
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
    return (a, n) => (v(), y(l(R), j(H(t)), {
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
    return (a, n) => (v(), y(l(R), j(H(t)), {
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
    const t = e, a = ta(), n = rs(), { primitiveElement: o, currentElement: s } = Ot(), r = $(() => a.formatter.custom(Ie(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = $(() => a.isDateDisabled(t.day)), d = $(() => {
      var F;
      return (F = a.isDateUnavailable) == null ? void 0 : F.call(a, t.day);
    }), c = $(() => a.isSelected(t.day)), u = $(() => a.isSelectionStart(t.day)), p = $(() => a.isSelectionEnd(t.day)), h = $(() => a.isHighlightedStart(t.day)), m = $(() => a.isHighlightedEnd(t.day)), x = $(() => a.highlightedRange.value ? zi(t.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), g = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", _ = $(() => El(t.day, Bt())), C = $(() => !Sl(t.day, t.month)), P = $(
      () => a.isOutsideVisibleView(t.day)
    ), k = $(() => t.day.day.toLocaleString(a.locale.value)), D = $(() => !a.disabled.value && we(t.day, a.placeholder.value));
    function S(F, B) {
      var T;
      if (!a.readonly.value && !(a.isDateDisabled(B) || (T = a.isDateUnavailable) != null && T.call(a, B))) {
        if (a.lastPressedDateValue.value = B.copy(), a.startValue.value && a.highlightedRange.value === null) {
          if (we(B, a.startValue.value) && !a.preventDeselect.value && !a.endValue.value) {
            a.startValue.value = void 0, a.onPlaceholderChange(B);
            return;
          } else if (!a.endValue.value) {
            F.preventDefault(), a.lastPressedDateValue.value && we(a.lastPressedDateValue.value, B) && (a.startValue.value = B.copy());
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
    function I(F) {
      S(F, t.day);
    }
    function A() {
      var F;
      a.isDateDisabled(t.day) || (F = a.isDateUnavailable) != null && F.call(a, t.day) || (a.focusedValue.value = t.day.copy());
    }
    function z(F) {
      F.preventDefault(), F.stopPropagation();
      const B = a.parentElement.value, T = B ? Array.from(B.querySelectorAll(g)) : [];
      let V = T.indexOf(s.value);
      const G = 7, K = a.dir.value === "rtl" ? -1 : 1;
      switch (F.code) {
        case n.ARROW_RIGHT:
          V += K;
          break;
        case n.ARROW_LEFT:
          V -= K;
          break;
        case n.ARROW_UP:
          V -= G;
          break;
        case n.ARROW_DOWN:
          V += G;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          S(F, t.day);
          return;
        default:
          return;
      }
      if (V >= 0 && V < T.length) {
        T[V].focus();
        return;
      }
      if (V < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), te(() => {
          const W = B ? Array.from(B.querySelectorAll(g)) : [];
          W[W.length - Math.abs(V)].focus();
        });
        return;
      }
      if (V >= T.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), te(() => {
          (B ? Array.from(B.querySelectorAll(g)) : [])[V - T.length].focus();
        });
      }
    }
    return (F, B) => (v(), y(l(R), E({
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
      "data-highlighted-start": h.value ? !0 : void 0,
      "data-highlighted-end": m.value ? !0 : void 0,
      "data-selected": c.value ? !0 : void 0,
      "data-outside-visible-view": P.value ? "" : void 0,
      "data-value": F.day.toString(),
      "data-disabled": i.value || C.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": _.value ? "" : void 0,
      "data-outside-month": C.value ? "" : void 0,
      "data-focused": D.value ? "" : void 0,
      tabindex: D.value ? 0 : C.value || i.value ? void 0 : -1,
      onClick: I,
      onFocusin: A,
      onMouseenter: A,
      onKeydown: We(z, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: f(() => [
        w(F.$slots, "default", { dayValue: k.value }, () => [
          Y(X(k.value), 1)
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
    return (o, s) => (v(), y(l(un), { "as-child": "" }, {
      default: f(() => [
        Gt(de("select", E({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => ba(a) ? a.value = r : null),
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
}, [Et, As] = re("SelectRoot"), [yf, bf] = re("SelectRoot"), wf = /* @__PURE__ */ b({
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
    }), r = M(), i = M(), d = M({
      x: 0,
      y: 0
    }), c = M(!1), { required: u, disabled: p, dir: h } = me(a), m = yt(h);
    As({
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
    const x = sn(r), g = M(/* @__PURE__ */ new Set()), _ = $(() => Array.from(g.value).map((C) => {
      var P;
      return (P = C.props) == null ? void 0 : P.value;
    }).join(";"));
    return bf({
      onNativeOptionAdd: (C) => {
        g.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        g.value.delete(C);
      }
    }), (C, P) => (v(), y(l(Pa), null, {
      default: f(() => [
        w(C.$slots, "default", {
          modelValue: l(o),
          open: l(s)
        }),
        l(x) ? (v(), y(hf, E({ key: _.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: l(u),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: l(p),
          value: l(o),
          onChange: P[0] || (P[0] = (k) => o.value = k.target.value)
        }), {
          default: f(() => [
            l(o) === void 0 ? (v(), U("option", gf)) : J("", !0),
            (v(!0), U(ee, null, he(Array.from(g.value), (k) => (v(), y(Ue(k), E({ ref_for: !0 }, k.props, {
              key: k.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : J("", !0)
      ]),
      _: 3
    }));
  }
}), _f = [" ", "Enter", "ArrowUp", "ArrowDown"], xf = [" ", "Enter"], Qe = 10;
function Is(e) {
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
    const t = e, a = Et(), n = $(() => {
      var m;
      return ((m = a.disabled) == null ? void 0 : m.value) || t.disabled;
    }), { forwardRef: o, currentElement: s } = N();
    a.contentId || (a.contentId = xe(void 0, "radix-vue-select-content")), ie(() => {
      a.triggerElement = s;
    });
    const { injectCollection: r } = Zt(), i = r(), { search: d, handleTypeaheadSearch: c, resetTypeahead: u } = go(i);
    function p() {
      n.value || (a.onOpenChange(!0), u());
    }
    function h(m) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, x) => (v(), y(l(Co), { "as-child": "" }, {
      default: f(() => {
        var g, _, C, P;
        return [
          O(l(R), {
            ref: l(o),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": l(a).contentId,
            "aria-expanded": l(a).open.value || !1,
            "aria-required": (g = l(a).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (_ = l(a)) == null ? void 0 : _.dir.value,
            "data-state": (C = l(a)) != null && C.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": l(Is)((P = l(a).modelValue) == null ? void 0 : P.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: x[0] || (x[0] = (k) => {
              var D;
              (D = k == null ? void 0 : k.currentTarget) == null || D.focus();
            }),
            onPointerdown: x[1] || (x[1] = (k) => {
              if (k.pointerType === "touch")
                return k.preventDefault();
              const D = k.target;
              D.hasPointerCapture(k.pointerId) && D.releasePointerCapture(k.pointerId), k.button === 0 && k.ctrlKey === !1 && (h(k), k.preventDefault());
            }),
            onPointerup: x[2] || (x[2] = _e(
              (k) => {
                k.pointerType === "touch" && h(k);
              },
              ["prevent"]
            )),
            onKeydown: x[3] || (x[3] = (k) => {
              const D = l(d) !== "";
              !(k.ctrlKey || k.altKey || k.metaKey) && k.key.length === 1 && D && k.key === " " || (l(c)(k.key), l(_f).includes(k.key) && (p(), k.preventDefault()));
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
    return (a, n) => (v(), y(l(rn), j(H(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Oo, kf] = re("SelectItemAlignedPosition"), Bf = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, { injectCollection: o } = Zt(), s = Et(), r = Mt(), i = o(), d = M(!1), c = M(!0), u = M(), { forwardRef: p, currentElement: h } = N(), { viewport: m, selectedItem: x, selectedItemText: g, focusSelectedItem: _ } = r;
    function C() {
      if (s.triggerElement.value && s.valueElement.value && u.value && h.value && m != null && m.value && x != null && x.value && g != null && g.value) {
        const D = s.triggerElement.value.getBoundingClientRect(), S = h.value.getBoundingClientRect(), I = s.valueElement.value.getBoundingClientRect(), A = g.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const Oe = A.left - S.left, Be = I.left - Oe, Le = D.left - Be, le = D.width + Le, $e = Math.max(le, S.width), Xe = window.innerWidth - Qe, sa = Jo(Be, Qe, Xe - $e);
          u.value.style.minWidth = `${le}px`, u.value.style.left = `${sa}px`;
        } else {
          const Oe = S.right - A.right, Be = window.innerWidth - I.right - Oe, Le = window.innerWidth - D.right - Be, le = D.width + Le, $e = Math.max(le, S.width), Xe = window.innerWidth - Qe, sa = Jo(
            Be,
            Qe,
            Xe - $e
          );
          u.value.style.minWidth = `${le}px`, u.value.style.right = `${sa}px`;
        }
        const z = i.value, F = window.innerHeight - Qe * 2, B = m.value.scrollHeight, T = window.getComputedStyle(h.value), V = Number.parseInt(
          T.borderTopWidth,
          10
        ), G = Number.parseInt(T.paddingTop, 10), K = Number.parseInt(
          T.borderBottomWidth,
          10
        ), W = Number.parseInt(
          T.paddingBottom,
          10
        ), q = V + G + B + W + K, ae = Math.min(
          x.value.offsetHeight * 5,
          q
        ), ue = window.getComputedStyle(m.value), fe = Number.parseInt(ue.paddingTop, 10), ke = Number.parseInt(
          ue.paddingBottom,
          10
        ), ye = D.top + D.height / 2 - Qe, na = F - ye, wt = x.value.offsetHeight / 2, oa = x.value.offsetTop + wt, rt = V + G + oa, la = q - rt;
        if (rt <= ye) {
          const Oe = x.value === z[z.length - 1];
          u.value.style.bottom = "0px";
          const Be = h.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, Le = Math.max(
            na,
            wt + (Oe ? ke : 0) + Be + K
          ), le = rt + Le;
          u.value.style.height = `${le}px`;
        } else {
          const Oe = x.value === z[0];
          u.value.style.top = "0px";
          const Be = Math.max(
            ye,
            V + m.value.offsetTop + (Oe ? fe : 0) + wt
          ) + la;
          u.value.style.height = `${Be}px`, m.value.scrollTop = rt - ye + m.value.offsetTop;
        }
        u.value.style.margin = `${Qe}px 0`, u.value.style.minHeight = `${ae}px`, u.value.style.maxHeight = `${F}px`, n("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const P = M("");
    ie(async () => {
      await te(), C(), h.value && (P.value = window.getComputedStyle(h.value).zIndex);
    });
    function k(D) {
      D && c.value === !0 && (C(), _ == null || _(), c.value = !1);
    }
    return kf({
      contentWrapper: u,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: k
    }), (D, S) => (v(), U("div", {
      ref_key: "contentWrapperElement",
      ref: u,
      style: wa({
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
    collisionPadding: { default: Qe },
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
    return (a, n) => (v(), y(l(ga), E(l(t), { style: {
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
}), aa = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Mt, Df] = re("SelectContent"), Of = /* @__PURE__ */ b({
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
    ho(), $a(a.bodyLock);
    const { createCollection: s } = Zt(), r = M();
    ka(r);
    const i = s(r), { search: d, handleTypeaheadSearch: c } = go(i), u = M(), p = M(), h = M(), m = M(!1), x = M(!1);
    function g() {
      p.value && r.value && Wn([p.value, r.value]);
    }
    Q(m, () => {
      g();
    });
    const { onOpenChange: _, triggerPointerDownPosRef: C } = o;
    ge((S) => {
      if (!r.value)
        return;
      let I = { x: 0, y: 0 };
      const A = (F) => {
        var B, T;
        I = {
          x: Math.abs(
            Math.round(F.pageX) - (((B = C.value) == null ? void 0 : B.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(F.pageY) - (((T = C.value) == null ? void 0 : T.y) ?? 0)
          )
        };
      }, z = (F) => {
        var B;
        F.pointerType !== "touch" && (I.x <= 10 && I.y <= 10 ? F.preventDefault() : (B = r.value) != null && B.contains(F.target) || _(!1), document.removeEventListener("pointermove", A), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", A), document.addEventListener("pointerup", z, {
        capture: !0,
        once: !0
      })), S(() => {
        document.removeEventListener("pointermove", A), document.removeEventListener("pointerup", z, {
          capture: !0
        });
      });
    });
    function P(S) {
      const I = S.ctrlKey || S.altKey || S.metaKey;
      if (S.key === "Tab" && S.preventDefault(), !I && S.key.length === 1 && c(S.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(S.key)) {
        let A = i.value;
        if (["ArrowUp", "End"].includes(S.key) && (A = A.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const z = S.target, F = A.indexOf(z);
          A = A.slice(F + 1);
        }
        setTimeout(() => Wn(A)), S.preventDefault();
      }
    }
    const k = $(() => a.position === "popper" ? a : {}), D = ne(k.value);
    return Df({
      content: r,
      viewport: u,
      onViewportChange: (S) => {
        u.value = S;
      },
      itemRefCallback: (S, I, A) => {
        var z, F;
        const B = !x.value && !A;
        (((z = o.modelValue) == null ? void 0 : z.value) !== void 0 && ((F = o.modelValue) == null ? void 0 : F.value) === I || B) && (p.value = S, B && (x.value = !0));
      },
      selectedItem: p,
      selectedItemText: h,
      onItemLeave: () => {
        var S;
        (S = r.value) == null || S.focus();
      },
      itemTextRefCallback: (S, I, A) => {
        var z, F;
        const B = !x.value && !A;
        (((z = o.modelValue) == null ? void 0 : z.value) !== void 0 && ((F = o.modelValue) == null ? void 0 : F.value) === I || B) && (h.value = S);
      },
      focusSelectedItem: g,
      position: a.position,
      isPositioned: m,
      searchRef: d
    }), (S, I) => (v(), y(l(dn), {
      "as-child": "",
      onMountAutoFocus: I[6] || (I[6] = _e(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: I[7] || (I[7] = (A) => {
        var z;
        n("closeAutoFocus", A), !A.defaultPrevented && ((z = l(o).triggerElement.value) == null || z.focus({ preventScroll: !0 }), A.preventDefault());
      })
    }, {
      default: f(() => [
        O(l(Ba), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: I[2] || (I[2] = _e(() => {
          }, ["prevent"])),
          onDismiss: I[3] || (I[3] = (A) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: I[4] || (I[4] = (A) => n("escapeKeyDown", A)),
          onPointerDownOutside: I[5] || (I[5] = (A) => n("pointerDownOutside", A))
        }, {
          default: f(() => [
            (v(), y(Ue(
              S.position === "popper" ? Pf : Bf
            ), E({ ...S.$attrs, ...l(D) }, {
              id: l(o).contentId,
              ref: (A) => {
                r.value = l(Ee)(A);
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
              onPlaced: I[1] || (I[1] = (A) => m.value = !0),
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
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return As(e.context), (t, a) => w(t.$slots, "default");
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
    const a = e, n = oe(a, t), o = Et(), s = M();
    ie(() => {
      s.value = new DocumentFragment();
    });
    const r = M(), i = $(() => a.forceMount || o.open.value);
    return (d, c) => {
      var u;
      return i.value ? (v(), y(l(Fe), {
        key: 0,
        ref_key: "presenceRef",
        ref: r,
        present: !0
      }, {
        default: f(() => [
          O(Of, j(H({ ...l(n), ...d.$attrs })), {
            default: f(() => [
              w(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((u = r.value) != null && u.present) && s.value ? (v(), U("div", Ef, [
        (v(), y(Ja, { to: s.value }, [
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
}), Tf = /* @__PURE__ */ b({
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
}), [Vs, Af] = re("SelectItem"), If = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: a } = me(t), n = Et(), o = Mt(aa), { forwardRef: s, currentElement: r } = N(), i = $(() => {
      var g;
      return ((g = n.modelValue) == null ? void 0 : g.value) === t.value;
    }), d = M(!1), c = M(t.textValue ?? ""), u = xe(void 0, "radix-vue-select-item-text");
    async function p(g) {
      await te(), !(g != null && g.defaultPrevented) && (a.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function h(g) {
      var _;
      await te(), !g.defaultPrevented && (a.value ? (_ = o.onItemLeave) == null || _.call(o) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(g) {
      var _;
      await te(), !g.defaultPrevented && g.currentTarget === document.activeElement && ((_ = o.onItemLeave) == null || _.call(o));
    }
    async function x(g) {
      var _;
      await te(), !(g.defaultPrevented || ((_ = o.searchRef) == null ? void 0 : _.value) !== "" && g.key === " ") && (xf.includes(g.key) && p(), g.key === " " && g.preventDefault());
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
    }), Af({
      value: t.value,
      disabled: a,
      textId: u,
      isSelected: i,
      onItemTextChange: (g) => {
        c.value = ((c.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, _) => (v(), y(l(R), {
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
      as: g.as,
      "as-child": g.asChild,
      onFocus: _[0] || (_[0] = (C) => d.value = !0),
      onBlur: _[1] || (_[1] = (C) => d.value = !1),
      onPointerup: p,
      onPointerdown: _[2] || (_[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: _[3] || (_[3] = _e(() => {
      }, ["prevent", "stop"])),
      onPointermove: h,
      onPointerleave: m,
      onKeydown: x
    }, {
      default: f(() => [
        w(g.$slots, "default")
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
    const t = e, a = Vs();
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
}), [Rf, Ff] = re("SelectGroup"), Lf = /* @__PURE__ */ b({
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
}), Rs = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = Et(), n = Mt(aa), o = yf(), s = Vs(), { forwardRef: r, currentElement: i } = N(), d = $(() => {
      var c;
      return ze("option", {
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
    }), Zn(() => {
      o.onNativeOptionRemove(d.value);
    }), (c, u) => (v(), U(ee, null, [
      O(l(R), E({
        id: l(s).textId,
        ref: l(r)
      }, { ...t, ...c.$attrs }), {
        default: f(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      l(s).isSelected.value && l(a).valueElement.value && !l(a).valueElementHasChildren.value ? (v(), y(Ja, {
        key: 0,
        to: l(a).valueElement.value
      }, [
        w(c.$slots, "default")
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
    const t = e, { nonce: a } = me(t), n = Fc(a), o = Mt(aa), s = o.position === "item-aligned" ? Oo() : void 0, { forwardRef: r, currentElement: i } = N();
    ie(() => {
      o == null || o.onViewportChange(i.value);
    });
    const d = M(0);
    function c(u) {
      const p = u.currentTarget, { shouldExpandOnScrollRef: h, contentWrapper: m } = s ?? {};
      if (h != null && h.value && m != null && m.value) {
        const x = Math.abs(d.value - p.scrollTop);
        if (x > 0) {
          const g = window.innerHeight - Qe * 2, _ = Number.parseFloat(
            m.value.style.minHeight
          ), C = Number.parseFloat(m.value.style.height), P = Math.max(_, C);
          if (P < g) {
            const k = P + x, D = Math.min(g, k), S = k - D;
            m.value.style.height = `${D}px`, m.value.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = p.scrollTop;
    }
    return (u, p) => (v(), U(ee, null, [
      O(l(R), E({
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
          w(u.$slots, "default")
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
}), Fs = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const a = t, { injectCollection: n } = Zt(), o = n(), s = Mt(aa), r = M(null);
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
    return Zn(() => i()), (u, p) => {
      var h;
      return v(), y(l(R), E({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (h = u.$parent) == null ? void 0 : h.$props, {
        onPointerdown: d,
        onPointermove: c,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: f(() => [
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
    const t = Mt(aa), a = t.position === "item-aligned" ? Oo() : void 0, { forwardRef: n, currentElement: o } = N(), s = M(!1);
    return ge((r) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let c = function() {
          s.value = u.scrollTop > 0;
        };
        const u = t.viewport.value;
        c(), u.addEventListener("scroll", c), r(() => u.removeEventListener("scroll", c));
      }
    }), Q(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), y(Fs, {
      key: 0,
      ref: l(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: c } = l(t);
        d != null && d.value && c != null && c.value && (d.value.scrollTop = d.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: f(() => [
        w(r.$slots, "default")
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
    const t = Mt(aa), a = t.position === "item-aligned" ? Oo() : void 0, { forwardRef: n, currentElement: o } = N(), s = M(!1);
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
    }), Q(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), y(Fs, {
      key: 0,
      ref: l(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: c } = l(t);
        d != null && d.value && c != null && c.value && (d.value.scrollTop = d.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: f(() => [
        w(r.$slots, "default")
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
    const { forwardRef: t, currentElement: a } = N(), n = Et(), o = pr();
    return fr(() => {
      var s;
      const r = !!on((s = o == null ? void 0 : o.default) == null ? void 0 : s.call(o)).length;
      n.onValueElementHasChildrenChange(r);
    }), ie(() => {
      n.valueElement = a;
    }), (s, r) => (v(), y(l(R), {
      ref: l(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: f(() => {
        var i;
        return [
          l(Is)((i = l(n).modelValue) == null ? void 0 : i.value) ? (v(), U(ee, { key: 0 }, [
            Y(X(s.placeholder), 1)
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
const Gf = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [qf, Yf] = re("SwitchRoot"), Xf = /* @__PURE__ */ b({
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
    function r() {
      o.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: d } = N(), c = sn(d), u = $(() => {
      var p;
      return a.id && d.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Yf({
      checked: s,
      toggleCheck: r,
      disabled: o
    }), (p, h) => (v(), U(ee, null, [
      O(l(R), E(p.$attrs, {
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
        onKeydown: We(_e(r, ["prevent"]), ["enter"])
      }), {
        default: f(() => [
          w(p.$slots, "default", { checked: l(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      l(c) ? (v(), U("input", {
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
}), Zf = /* @__PURE__ */ b({
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
}), [So, Jf] = re("TabsRoot"), Qf = /* @__PURE__ */ b({
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
    const a = e, n = t, { orientation: o, dir: s } = me(a), r = yt(s);
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
    }), (c, u) => (v(), y(l(R), {
      dir: l(r),
      "data-orientation": l(o),
      "as-child": c.asChild,
      as: c.as
    }, {
      default: f(() => [
        w(c.$slots, "default", { modelValue: l(i) })
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
    const t = e, { loop: a } = me(t), { forwardRef: n, currentElement: o } = N(), s = So();
    return s.tabsList = o, (r, i) => (v(), y(l(ks), {
      "as-child": "",
      orientation: l(s).orientation.value,
      dir: l(s).dir.value,
      loop: l(a)
    }, {
      default: f(() => [
        O(l(R), {
          ref: l(n),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": l(s).orientation.value
        }, {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function Ls(e, t) {
  return `${e}-trigger-${t}`;
}
function Ns(e, t) {
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
    const t = e, { forwardRef: a } = N(), n = So(), o = $(() => Ls(n.baseId, t.value)), s = $(() => Ns(n.baseId, t.value)), r = $(() => t.value === n.modelValue.value), i = M(r.value);
    return ie(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (d, c) => (v(), y(l(Fe), {
      present: r.value,
      "force-mount": ""
    }, {
      default: f(({ present: u }) => [
        O(l(R), {
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
          style: wa({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: f(() => [
            d.forceMount || r.value ? w(d.$slots, "default", { key: 0 }) : J("", !0)
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
    const t = e, { forwardRef: a } = N(), n = So(), o = $(() => Ls(n.baseId, t.value)), s = $(() => Ns(n.baseId, t.value)), r = $(() => t.value === n.modelValue.value);
    return (i, d) => (v(), y(l(tp), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: f(() => [
        O(l(R), {
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
          onMousedown: d[0] || (d[0] = _e((c) => {
            !i.disabled && c.ctrlKey === !1 ? l(n).changeModelValue(i.value) : c.preventDefault();
          }, ["left"])),
          onKeydown: d[1] || (d[1] = We((c) => l(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: d[2] || (d[2] = () => {
            const c = l(n).activationMode !== "manual";
            !r.value && !i.disabled && c && l(n).changeModelValue(i.value);
          })
        }, {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [cn, nv] = re("ToastProvider"), ov = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: a, duration: n, swipeDirection: o, swipeThreshold: s } = me(t), r = M(), i = M(0), d = M(!1), c = M(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const u = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(u);
    }
    return nv({
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
    }), (u, p) => w(u.$slots, "default");
  }
}), lv = "toast.swipeStart", sv = "toast.swipeMove", rv = "toast.swipeCancel", iv = "toast.swipeEnd", jn = "toast.viewportPause", Hn = "toast.viewportResume";
function Ra(e, t, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function ol(e, t, a = 0) {
  const n = Math.abs(e.x), o = Math.abs(e.y), s = n > o;
  return t === "left" || t === "right" ? s && n > a : !s && o > a;
}
function dv(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function zs(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && t.push(a.textContent), dv(a)) {
      const n = a.ariaHidden || a.hidden || a.style.display === "none", o = a.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const s = a.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...zs(a));
    }
  }), t;
}
const uv = /* @__PURE__ */ b({
  __name: "ToastAnnounce",
  setup(e) {
    const t = cn(), a = Zd(1e3), n = M(!1);
    return os(() => {
      n.value = !0;
    }), (o, s) => l(a) || n.value ? (v(), y(l(un), { key: 0 }, {
      default: f(() => [
        Y(X(l(t).label.value) + " ", 1),
        w(o.$slots, "default")
      ]),
      _: 3
    })) : J("", !0);
  }
}), [cv, pv] = re("ToastRoot"), fv = /* @__PURE__ */ b({
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
    const a = e, n = t, { forwardRef: o, currentElement: s } = N(), r = cn(), i = M(null), d = M(null), c = $(() => a.duration || r.duration.value), u = M(0), p = M(c.value), h = M(0), m = M(c.value), x = os(() => {
      const P = (/* @__PURE__ */ new Date()).getTime() - u.value;
      m.value = Math.max(p.value - P, 0);
    }, { fpsLimit: 60 });
    function g(P) {
      !P || P === Number.POSITIVE_INFINITY || Ge && (window.clearTimeout(h.value), u.value = (/* @__PURE__ */ new Date()).getTime(), h.value = window.setTimeout(_, P));
    }
    function _() {
      var P, k;
      (P = s.value) != null && P.contains(document.activeElement) && ((k = r.viewport.value) == null || k.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const C = $(() => s.value ? zs(s.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const P = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(P);
    }
    return ge((P) => {
      const k = r.viewport.value;
      if (k) {
        const D = () => {
          g(p.value), x.resume(), n("resume");
        }, S = () => {
          const I = (/* @__PURE__ */ new Date()).getTime() - u.value;
          p.value = p.value - I, window.clearTimeout(h.value), x.pause(), n("pause");
        };
        return k.addEventListener(jn, S), k.addEventListener(Hn, D), () => {
          k.removeEventListener(jn, S), k.removeEventListener(Hn, D);
        };
      }
    }), Q(() => [a.open, c.value], () => {
      p.value = c.value, a.open && !r.isClosePausedRef.value && g(c.value);
    }, { immediate: !0 }), mo("Escape", (P) => {
      n("escapeKeyDown", P), P.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, _());
    }), ie(() => {
      r.onToastAdd();
    }), kt(() => {
      r.onToastRemove();
    }), pv({ onClose: _ }), (P, k) => (v(), U(ee, null, [
      C.value ? (v(), y(uv, {
        key: 0,
        role: "status",
        "aria-live": P.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: f(() => [
          Y(X(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : J("", !0),
      l(r).viewport.value ? (v(), y(Ja, {
        key: 1,
        to: l(r).viewport.value
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
          "data-swipe-direction": l(r).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: k[0] || (k[0] = _e((D) => {
            i.value = { x: D.clientX, y: D.clientY };
          }, ["left"])),
          onPointermove: k[1] || (k[1] = (D) => {
            if (!i.value) return;
            const S = D.clientX - i.value.x, I = D.clientY - i.value.y, A = !!d.value, z = ["left", "right"].includes(l(r).swipeDirection.value), F = ["left", "up"].includes(l(r).swipeDirection.value) ? Math.min : Math.max, B = z ? F(0, S) : 0, T = z ? 0 : F(0, I), V = D.pointerType === "touch" ? 10 : 2, G = { x: B, y: T }, K = { originalEvent: D, delta: G };
            A ? (d.value = G, l(Ra)(l(sv), (W) => n("swipeMove", W), K)) : l(ol)(G, l(r).swipeDirection.value, V) ? (d.value = G, l(Ra)(l(lv), (W) => n("swipeStart", W), K), D.target.setPointerCapture(D.pointerId)) : (Math.abs(S) > V || Math.abs(I) > V) && (i.value = null);
          }),
          onPointerup: k[2] || (k[2] = (D) => {
            const S = d.value, I = D.target;
            if (I.hasPointerCapture(D.pointerId) && I.releasePointerCapture(D.pointerId), d.value = null, i.value = null, S) {
              const A = D.currentTarget, z = { originalEvent: D, delta: S };
              l(ol)(S, l(r).swipeDirection.value, l(r).swipeThreshold.value) ? l(Ra)(l(iv), (F) => n("swipeEnd", F), z) : l(Ra)(l(rv), (F) => n("swipeCancel", F), z), A == null || A.addEventListener("click", (F) => F.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: f(() => [
            w(P.$slots, "default", {
              remaining: m.value,
              duration: c.value
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
    return (r, i) => (v(), y(l(Fe), {
      present: r.forceMount || l(s)
    }, {
      default: f(() => [
        O(fv, E({
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
            w(r.$slots, "default", {
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
}), Ws = /* @__PURE__ */ b({
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
}), Us = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = cv(), { forwardRef: n } = N();
    return (o, s) => (v(), y(Ws, { "as-child": "" }, {
      default: f(() => [
        O(l(R), E(t, {
          ref: l(n),
          type: o.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (r) => l(a).onClose())
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
    return (a, n) => a.altText ? (v(), y(Ws, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: f(() => [
        O(Us, {
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
}), ll = /* @__PURE__ */ b({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const a = t, n = cn();
    return (o, s) => (v(), y(l(un), {
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
    const t = e, { hotkey: a, label: n } = me(t), { forwardRef: o, currentElement: s } = N(), { createCollection: r } = Zt(), i = r(s), d = cn(), c = $(() => d.toastCount.value > 0), u = M(), p = M(), h = $(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    mo(a.value, () => {
      s.value.focus();
    }), ie(() => {
      d.onViewportChange(s.value);
    }), ge((x) => {
      const g = s.value;
      if (c.value && g) {
        const _ = () => {
          if (!d.isClosePausedRef.value) {
            const S = new CustomEvent(jn);
            g.dispatchEvent(S), d.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (d.isClosePausedRef.value) {
            const S = new CustomEvent(Hn);
            g.dispatchEvent(S), d.isClosePausedRef.value = !1;
          }
        }, P = (S) => {
          !g.contains(S.relatedTarget) && C();
        }, k = () => {
          g.contains(document.activeElement) || C();
        }, D = (S) => {
          var I, A, z;
          const F = S.altKey || S.ctrlKey || S.metaKey;
          if (S.key === "Tab" && !F) {
            const B = document.activeElement, T = S.shiftKey;
            if (S.target === g && T) {
              (I = u.value) == null || I.focus();
              return;
            }
            const V = m({ tabbingDirection: T ? "backwards" : "forwards" }), G = V.findIndex((K) => K === B);
            Ua(V.slice(G + 1)) ? S.preventDefault() : T ? (A = u.value) == null || A.focus() : (z = p.value) == null || z.focus();
          }
        };
        g.addEventListener("focusin", _), g.addEventListener("focusout", P), g.addEventListener("pointermove", _), g.addEventListener("pointerleave", k), g.addEventListener("keydown", D), window.addEventListener("blur", _), window.addEventListener("focus", C), x(() => {
          g.removeEventListener("focusin", _), g.removeEventListener("focusout", P), g.removeEventListener("pointermove", _), g.removeEventListener("pointerleave", k), g.removeEventListener("keydown", D), window.removeEventListener("blur", _), window.removeEventListener("focus", C);
        });
      }
    });
    function m({ tabbingDirection: x }) {
      const g = i.value.map((_) => {
        const C = [_, ...bo(_)];
        return x === "forwards" ? C : C.reverse();
      });
      return (x === "forwards" ? g.reverse() : g).flat();
    }
    return (x, g) => (v(), y(l(Du), {
      role: "region",
      "aria-label": typeof l(n) == "string" ? l(n).replace("{hotkey}", h.value) : l(n)(h.value),
      tabindex: "-1",
      style: wa({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: f(() => [
        c.value ? (v(), y(ll, {
          key: 0,
          ref: (_) => {
            u.value = l(Ee)(_);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const _ = m({
              tabbingDirection: "forwards"
            });
            l(Ua)(_);
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
        c.value ? (v(), y(ll, {
          key: 1,
          ref: (_) => {
            p.value = l(Ee)(_);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const _ = m({
              tabbingDirection: "backwards"
            });
            l(Ua)(_);
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
    return N(), (a, n) => (v(), y(l(R), j(H(t)), {
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
    return N(), (a, n) => (v(), y(l(R), j(H(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ye = /* @__PURE__ */ b({
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
      class: se(l(L)(l(Tt)({ variant: a.variant, size: a.size }), t.class))
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Tt = Jn(
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = oe(o, n);
    return (r, i) => (v(), y(l(oc), E({
      class: l(L)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: c }) => [
        O(l(Pv), null, {
          default: f(() => [
            O(l(Sv)),
            O(l(Dv)),
            O(l(Ov))
          ]),
          _: 1
        }),
        de("div", bv, [
          (v(!0), U(ee, null, he(d, (u) => (v(), y(l(Cv), {
            key: u.value.toString()
          }, {
            default: f(() => [
              O(l(kv), null, {
                default: f(() => [
                  O(l(sl), null, {
                    default: f(() => [
                      (v(!0), U(ee, null, he(c, (p) => (v(), y(l(Bv), { key: p }, {
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
              O(l($v), null, {
                default: f(() => [
                  (v(!0), U(ee, null, he(u.rows, (p, h) => (v(), y(l(sl), {
                    key: `weekDate-${h}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), U(ee, null, he(p, (m) => (v(), y(l(_v), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          O(l(xv), {
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
}), _v = /* @__PURE__ */ b({
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
    return (o, s) => (v(), y(l(ic), E({
      class: l(L)(
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(mc), E({
      class: l(L)(
        l(Tt)({ variant: "ghost" }),
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(rc), E({
      class: l(L)("w-full border-collapse space-y-1", t.class)
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
    return (a, n) => (v(), y(l(fc), j(H(t)), {
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
    return (a, n) => (v(), y(l(pc), j(H(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sl = /* @__PURE__ */ b({
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
    return (o, s) => (v(), y(l(vc), E({
      class: l(L)("flex", t.class)
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(dc), E({
      class: l(L)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(lc), E({
      class: l(L)("relative flex w-full items-center justify-between pt-1", t.class)
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(sc), E({
      class: l(L)("text-sm font-medium", t.class)
    }, l(n)), {
      default: f(({ headingValue: r }) => [
        w(o.$slots, "default", { headingValue: r }, () => [
          Y(X(r), 1)
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(uc), E({
      class: l(L)(
        l(Tt)({ variant: "outline" }),
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(cc), E({
      class: l(L)(
        l(Tt)({ variant: "outline" }),
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
}), js = /* @__PURE__ */ b({
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
    return (r, i) => (v(), y(l(Oc), E(l(s), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        a.class
      ]
    }), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hs = /* @__PURE__ */ b({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (s, r) => (v(), y(l(xu), j(H(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yg = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(xo), j(H(t)), {
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
    return (a, n) => (v(), y(l(Cu), j(H(t)), {
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
    return (a, n) => (v(), U("div", {
      class: se(l(L)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(qu), E(l(n), {
      class: l(L)(
        "text-lg font-semibold leading-none tracking-tight text-black dark:text-slate-200",
        t.class
      )
    }), {
      default: f(() => [
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Yu), E(l(n), {
      class: l(L)("text-sm text-slate-500 dark:text-slate-500", t.class)
    }), {
      default: f(() => [
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
const Iv = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Fa = {
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
const Vv = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: s, class: r, ...i }, { slots: d }) => ze(
  "svg",
  {
    ...Fa,
    width: e || Fa.width,
    height: e || Fa.height,
    stroke: n || Fa.stroke,
    "stroke-width": a ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${Iv(s ?? "icon")}`],
    ...i
  },
  [...o.map((c) => ze(...c)), ...d.default ? [d.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = (e, t) => (a, { slots: n }) => ze(
  Vv,
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
const Rv = Ce("CalendarIcon", [
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
const pn = Ce("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = Ce("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fv = Ce("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = Ce("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lv = Ce("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nv = Ce("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zv = Ce("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wv = Ce("ChevronsUpDownIcon", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uv = Ce("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jv = Ce("EllipsisIcon", [
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
const Hv = Ce("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kv = Ce("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gv = Ce("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qv = Ce("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yv = Ce("SunIcon", [
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
const Eo = Ce("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), qs = /* @__PURE__ */ b({
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
    return (r, i) => (v(), y(l(is), null, {
      default: f(() => [
        O(l(fs), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        O(l(ps), E(l(s), {
          class: l(L)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg",
            n.class
          )
        }), {
          default: f(() => [
            w(r.$slots, "default"),
            O(l(xo), {
              onClick: i[0] || (i[0] = (d) => a("close", d)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: f(() => [
                O(l(Eo), {
                  size: 16,
                  class: "dark:text-slate-300"
                }),
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
}), bg = /* @__PURE__ */ b({
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
    return (r, i) => (v(), y(l(is), null, {
      default: f(() => [
        O(l(fs), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: f(() => [
            O(l(ps), E({
              class: l(L)(
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
                w(r.$slots, "default"),
                O(l(xo), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: f(() => [
                    O(l(Eo), { size: 16 }),
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
}), Xv = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("div", {
      class: se(
        l(L)(
          "flex flex-col-reverse dark:text-slate-500 sm:flex-row sm:justify-end sm:gap-x-2",
          t.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), wg = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (s, r) => (v(), y(l(Hs), j(H(l(o))), {
      default: f(() => [
        O(l(qs), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: f(() => [
            O(js, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), Zv = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Rc), E(a.value, {
      class: l(L)("py-6 text-center text-sm", t.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jv = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Mc), E(a.value, {
      class: l(L)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: f(() => [
        n.heading ? (v(), y(l(Tc), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: f(() => [
            Y(X(n.heading), 1)
          ]),
          _: 1
        })) : J("", !0),
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qv = { class: "flex items-center border-b px-3" }, em = /* @__PURE__ */ b({
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
    return (o, s) => (v(), U("div", Qv, [
      O(l(qv), {
        size: 16,
        class: "mr-2 shrink-0 opacity-50"
      }),
      O(l(Sc), E({ ...l(n), ...o.$attrs }, {
        "auto-focus": "",
        class: l(L)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), tm = /* @__PURE__ */ b({
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
    return (r, i) => (v(), y(l(zc), E(l(s), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), am = { role: "presentation" }, nm = /* @__PURE__ */ b({
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
    return (r, i) => (v(), y(l(Vc), E(l(s), {
      class: l(L)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: f(() => [
        de("div", am, [
          w(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _g = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Wc), E(a.value, {
      class: l(L)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xg = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("span", {
      class: se(l(L)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), om = /* @__PURE__ */ b({
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
    return (s, r) => (v(), y(l(_p), j(H(l(o))), {
      default: f(({ open: i }) => [
        w(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), lm = /* @__PURE__ */ b({
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
      class: se(
        l(L)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          t.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), sm = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = ne(e);
    return (n, o) => (v(), y(l(xp), E({ class: "outline-none" }, l(a)), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rm = /* @__PURE__ */ b({
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
    return (r, i) => (v(), y(l(Cp), null, {
      default: f(() => [
        O(l($p), E(l(s), {
          class: l(L)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
            a.class
          )
        }), {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Cg = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(kp), j(H(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $g = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (s, r) => (v(), y(l(Op), j(H(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kg = /* @__PURE__ */ b({
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
    return (o, s) => (v(), y(l(Es), E(l(n), {
      class: l(L)(
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
}), im = /* @__PURE__ */ b({
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
    return (o, s) => (v(), y(lm, {
      class: se(t.class)
    }, {
      default: f(() => [
        O(l(Es), E(l(n), {
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
}), dm = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Bg = /* @__PURE__ */ b({
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
    return (r, i) => (v(), y(l(Pp), E(l(s), {
      class: l(L)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        de("span", dm, [
          O(l(Ms), null, {
            default: f(() => [
              O(l(pn), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), um = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Pg = /* @__PURE__ */ b({
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
    return (r, i) => (v(), y(l(Sp), E(l(s), {
      class: l(L)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        de("span", um, [
          O(l(Ms), null, {
            default: f(() => [
              O(l(Uv), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dg = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("span", {
      class: se(l(L)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Og = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Bp), E(a.value, {
      class: l(L)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), Sg = /* @__PURE__ */ b({
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
    return (o, s) => (v(), y(l(Dp), E(l(n), {
      class: l(L)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", t.class)
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Eg = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (s, r) => (v(), y(l(Ep), j(H(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mg = /* @__PURE__ */ b({
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
    return (o, s) => (v(), y(l(Tp), E(l(n), {
      class: l(L)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: f(() => [
        w(o.$slots, "default"),
        O(l(Gs), { class: "ml-auto size-4" })
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = oe(o, n);
    return (r, i) => (v(), y(l(Mp), E(l(s), {
      class: l(L)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
        a.class
      )
    }), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cm = { class: "text-xs text-slate-600 dark:text-slate-300" }, pm = /* @__PURE__ */ b({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(e) {
    return (t, a) => (v(), U("div", cm, "Characters: " + X(t.count), 1));
  }
}), fm = {}, vm = { class: "text-sm text-slate-400 dark:text-slate-500" };
function mm(e, t) {
  return v(), U("div", vm, [
    w(e.$slots, "default")
  ]);
}
const hm = /* @__PURE__ */ xa(fm, [["render", mm]]), gm = { class: "text-sm text-red-600 dark:text-red-400" }, ym = /* @__PURE__ */ b({
  __name: "Error",
  props: {
    error: {}
  },
  setup(e) {
    return (t, a) => Gt((v(), U("div", null, [
      de("p", gm, X(t.error), 1)
    ], 512)), [
      [Xn, t.error]
    ]);
  }
}), bm = {}, wm = { class: "w-full space-y-4 p-1.5" };
function _m(e, t) {
  return v(), U("div", wm, [
    w(e.$slots, "default")
  ]);
}
const Ag = /* @__PURE__ */ xa(bm, [["render", _m]]), xm = {}, Cm = { class: "my-4" };
function $m(e, t) {
  return v(), U("div", Cm, [
    w(e.$slots, "default")
  ]);
}
const km = /* @__PURE__ */ xa(xm, [["render", $m]]), Bm = { class: "grid gap-4 md:grid-cols-2" }, Ig = /* @__PURE__ */ b({
  __name: "FormGrid",
  setup(e) {
    return (t, a) => (v(), y(km, null, {
      default: f(() => [
        de("div", Bm, [
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
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(Ap), E(a.value, {
      class: l(L)(
        "text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        t.class
      )
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pm = { class: "relative" }, Dm = {
  name: "Base",
  inheritAttrs: !1
}, bt = /* @__PURE__ */ b({
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
      return v(), U("div", null, [
        t.label && t.showLabel ? (v(), y(l(Ys), {
          key: 0,
          id: t.id
        }, {
          default: f(() => [
            Y(X(t.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : J("", !0),
        de("div", Pm, [
          w(t.$slots, "default"),
          t.showCharacterCount ? (v(), y(l(pm), {
            key: 0,
            count: (n = t.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : J("", !0)
        ]),
        O(l(hm), { class: "mt-[5px]" }, {
          default: f(() => [
            Y(X(t.description), 1)
          ]),
          _: 1
        }),
        O(l(ym), {
          error: t.error,
          class: "mt-[3px]"
        }, null, 8, ["error"])
      ]);
    };
  }
}), Om = { class: "flex gap-2" }, Vg = /* @__PURE__ */ b({
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
    const a = t, o = M(e.modelValue);
    return Q(o, (s) => {
      a("update:modelValue", s);
    }), (s, r) => (v(), y(l(bt), j(H(s.$props)), {
      default: f(() => [
        de("div", Om, [
          O(l(bc), {
            id: s.id,
            checked: o.value,
            "onUpdate:checked": r[0] || (r[0] = (i) => o.value = i),
            class: "peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=checked]:text-primary-50 dark:border-primary-900 dark:ring-offset-primary-950 dark:focus-visible:ring-primary-300 dark:data-[state=checked]:bg-primary-400 dark:data-[state=checked]:text-primary-800"
          }, {
            default: f(() => [
              O(l(wc), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: f(() => [
                  O(l(pn), { size: 16 })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          s.text ? (v(), y(l(Ys), {
            key: 0,
            id: s.id,
            class: "my-auto"
          }, {
            default: f(() => [
              Y(X(s.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : J("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), Xs = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (s, r) => (v(), y(l(Kp), j(H(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zs = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Gp), j(H(t)), {
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = oe(o, n);
    return (r, i) => (v(), y(l(qp), null, {
      default: f(() => [
        O(l(Zp), E({ ...l(s), ...r.$attrs }, {
          class: l(L)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Rg = /* @__PURE__ */ b({
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
    const a = t, n = e, o = $(() => n.emptyMessage ?? "Option not found"), s = $(() => n.placeholder ?? "Select an option"), r = M(!1), i = M(n.modelValue ?? []), d = (p, h) => p.filter((m) => m.name.toLowerCase().includes(h.toLowerCase())), c = $(() => {
      var p;
      return Array.isArray(i.value) ? i.value.length ? i.value.map((h) => h.name).join(", ") : s.value : typeof i.value == "object" ? i.value.name : (p = n.options.find((h) => h.id === i.value)) == null ? void 0 : p.name;
    }), u = (p) => Array.isArray(i.value) ? i.value.find((h) => h.id === p.id) : typeof i.value == "object" ? i.value.id === p.id : i.value === p.id;
    return Q(i, () => {
      Array.isArray(i.value) ? a("update:modelValue", i.value) : a("update:modelValue", i.value.id);
    }), (p, h) => (v(), y(l(bt), j(H(p.$props)), {
      default: f(() => [
        O(l(Xs), {
          open: r.value,
          "onUpdate:open": h[2] || (h[2] = (m) => r.value = m)
        }, {
          default: f(() => [
            O(l(Zs), { "as-child": "" }, {
              default: f(() => [
                O(l(Ye), {
                  variant: "outline",
                  role: "combobox",
                  "aria-expanded": r.value,
                  class: "w-[200px] justify-between overflow-hidden"
                }, {
                  default: f(() => [
                    Y(X(c.value) + " ", 1),
                    O(l(Wv), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
                  ]),
                  _: 1
                }, 8, ["aria-expanded"])
              ]),
              _: 1
            }),
            O(l(Js), { class: "w-[200px] p-0" }, {
              default: f(() => [
                O(l(js), {
                  multiple: p.multiple,
                  modelValue: i.value,
                  "onUpdate:modelValue": h[1] || (h[1] = (m) => i.value = m),
                  "filter-function": d
                }, {
                  default: f(() => [
                    O(l(em), {
                      class: "h-9",
                      placeholder: s.value
                    }, null, 8, ["placeholder"]),
                    O(l(Zv), null, {
                      default: f(() => [
                        Y(X(o.value), 1)
                      ]),
                      _: 1
                    }),
                    O(l(nm), null, {
                      default: f(() => [
                        O(l(Jv), null, {
                          default: f(() => [
                            (v(!0), U(ee, null, he(p.options, (m) => (v(), y(l(tm), {
                              key: m.id,
                              value: m,
                              onSelect: h[0] || (h[0] = () => {
                                p.multiple || (r.value = !1);
                              })
                            }, {
                              default: f(() => [
                                Y(X(m.name) + " ", 1),
                                O(l(pn), {
                                  class: se(l(L)("ml-auto size-4", u(m) ? "opacity-100" : "opacity-0"))
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
}), Fg = /* @__PURE__ */ b({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = new Je("en-US", {
      dateStyle: "long"
    }), s = M();
    return Q(s, () => {
      a("update:modelValue", s.value);
    }), ie(() => {
      n.defaultValue && (s.value = n.defaultValue);
    }), (r, i) => (v(), y(l(bt), j(H(r.$props)), {
      default: f(() => [
        O(l(Xs), null, {
          default: f(() => [
            O(l(Zs), { "as-child": "" }, {
              default: f(() => [
                O(l(Ye), {
                  variant: "outline",
                  class: se([
                    "w-[280px] justify-start text-left font-normal dark:text-white",
                    !r.modelValue && "text-muted-foreground"
                  ])
                }, {
                  default: f(() => [
                    O(l(Rv), {
                      size: 16,
                      class: "mr-2"
                    }),
                    Y(" " + X(s.value ? l(o).format(s.value.toDate(l(Bt)())) : r.placeholder), 1)
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
for (var Pn = 0; Pn < 256; ++Pn)
  be.push((Pn + 256).toString(16).slice(1));
function Sm(e, t = 0) {
  return (be[e[t + 0]] + be[e[t + 1]] + be[e[t + 2]] + be[e[t + 3]] + "-" + be[e[t + 4]] + be[e[t + 5]] + "-" + be[e[t + 6]] + be[e[t + 7]] + "-" + be[e[t + 8]] + be[e[t + 9]] + "-" + be[e[t + 10]] + be[e[t + 11]] + be[e[t + 12]] + be[e[t + 13]] + be[e[t + 14]] + be[e[t + 15]]).toLowerCase();
}
var La, Em = new Uint8Array(16);
function Mm() {
  if (!La && (La = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !La))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return La(Em);
}
var Tm = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const rl = {
  randomUUID: Tm
};
function Am(e, t, a) {
  if (rl.randomUUID && !t && !e)
    return rl.randomUUID();
  e = e || {};
  var n = e.random || (e.rng || Mm)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Sm(n);
}
const Im = { class: "flex items-center space-x-2" }, Vm = ["src"], Rm = ["accept"], Lg = /* @__PURE__ */ b({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = "file-upload-" + Am(), s = $(() => i.value ? URL.createObjectURL(i.value) : null), r = a.currentImage ? a.currentImage : a.defaultImage, i = $({
      get: () => a.modelValue,
      set: (u) => n("update:modelValue", u)
    }), d = (u) => {
      i.value = u.target.files[0];
    }, c = () => document.getElementById(o).click();
    return (u, p) => (v(), y(l(bt), j(H(u.$props)), {
      default: f(() => [
        de("div", Im, [
          w(u.$slots, "image", {
            newImage: s.value,
            curImage: l(r)
          }, () => [
            de("img", {
              src: s.value ?? l(r),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, Vm)
          ]),
          de("input", {
            id: o,
            accept: u.accept,
            hidden: "",
            type: "file",
            onInput: d
          }, null, 40, Rm),
          O(l(Ye), {
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
}), Fm = ["disabled", "placeholder", "required", "type"], Ng = /* @__PURE__ */ b({
  __name: "Input",
  props: /* @__PURE__ */ Sn({
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
    const t = xl(e, "modelValue");
    return (a, n) => (v(), y(l(bt), j(H(a.$props)), {
      default: f(() => [
        Gt(de("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: se(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
          }])
        }, null, 10, Fm), [
          [br, t.value]
        ])
      ]),
      _: 1
    }, 16));
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
    const o = oe(e, t);
    return (s, r) => (v(), y(l(wf), j(H(l(o))), {
      default: f(({ open: i }) => [
        w(s.$slots, "default", { open: i })
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
    return (a, n) => (v(), y(l(jf), j(H(t)), {
      default: f(() => [
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
    class: {},
    open: { type: Boolean }
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Cf), E(l(n), {
      class: l(L)(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-start text-sm ring-offset-background transition placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        t.class
      )
    }), {
      default: f(() => [
        w(o.$slots, "default"),
        O(l(Hf), { "as-child": "" }, {
          default: f(() => [
            O(l(Ks), {
              class: se(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = oe(o, n);
    return (r, i) => (v(), y(l($f), null, {
      default: f(() => [
        O(l(Mf), E({ ...l(s), ...r.$attrs }, {
          class: l(L)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            r.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: f(() => [
            O(l(Hm)),
            O(l(zf), {
              class: se(
                l(L)(
                  "p-1",
                  r.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: f(() => [
                w(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            O(l(Km))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), zg = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Lf), E({
      class: l(L)("w-full p-1", t.class)
    }, a.value), {
      default: f(() => [
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(If), E(l(n), {
      class: l(L)(
        "focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        t.class
      )
    }), {
      default: f(() => [
        de("span", Um, [
          O(l(Vf), null, {
            default: f(() => [
              O(l(pn), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        O(l(Rs), null, {
          default: f(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wg = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Rs), j(H(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ug = /* @__PURE__ */ b({
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
      class: se(l(L)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), jg = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Tf), E(a.value, {
      class: l(L)("-mx-1 my-1 h-px bg-muted", t.class)
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Wf), E(l(n), {
      class: l(L)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          O(l(Lv), { class: "size-4 text-primary-900" })
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(Uf), E(l(n), {
      class: l(L)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          O(l(Ks), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hg = /* @__PURE__ */ b({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = $(() => n.placeholder ?? "Select an option..."), s = M(
      n.modelValue ? n.options.find((r) => r === n.modelValue) : null
    );
    return Q(s, () => {
      a("update:modelValue", s.value);
    }), (r, i) => (v(), y(l(bt), j(H(r.$props)), {
      default: f(() => [
        O(l(Lm), {
          modelValue: s.value,
          "onUpdate:modelValue": i[0] || (i[0] = (d) => s.value = d)
        }, {
          default: f(({ open: d }) => [
            O(l(zm), { open: d }, {
              default: f(() => [
                O(l(Nm), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            O(l(Wm), null, {
              default: f(() => [
                (v(!0), U(ee, null, he(r.options, (c) => (v(), y(l(jm), { value: c }, {
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
function Qs(e) {
  return qn() ? (Yn(e), !0) : !1;
}
function fn(e) {
  return typeof e == "function" ? e() : l(e);
}
const Gm = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const qm = (e) => typeof e < "u", Ym = Object.prototype.toString, Xm = (e) => Ym.call(e) === "[object Object]", er = () => {
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
function Jm(e = tr) {
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
  return { isActive: _a(t), pause: a, resume: n, eventFilter: o };
}
function Qm(e) {
  return He();
}
function eh(...e) {
  if (e.length !== 1)
    return vl(...e);
  const t = e[0];
  return typeof t == "function" ? _a(wl(() => ({ get: t, set: er }))) : M(t);
}
function th(e, t, a = {}) {
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
function ah(e, t, a = {}) {
  const {
    eventFilter: n,
    ...o
  } = a, { eventFilter: s, pause: r, resume: i, isActive: d } = Jm(n);
  return { stop: th(
    e,
    t,
    {
      ...o,
      eventFilter: s
    }
  ), pause: r, resume: i, isActive: d };
}
function ar(e, t = !0, a) {
  Qm() ? ie(e, a) : t ? e() : te(e);
}
function nr(e) {
  var t;
  const a = fn(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const Kt = Gm ? window : void 0;
function il(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = Kt) : [t, a, n, o] = e, !t)
    return er;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((u) => u()), s.length = 0;
  }, i = (u, p, h, m) => (u.addEventListener(p, h, m), () => u.removeEventListener(p, h, m)), d = Q(
    () => [nr(t), fn(o)],
    ([u, p]) => {
      if (r(), !u)
        return;
      const h = Xm(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((x) => i(u, m, x, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), r();
  };
  return Qs(c), c;
}
function nh() {
  const e = M(!1), t = He();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function oh(e) {
  const t = nh();
  return $(() => (t.value, !!e()));
}
function lh(e, t = {}) {
  const { window: a = Kt } = t, n = oh(() => a && "matchMedia" in a && typeof a.matchMedia == "function");
  let o;
  const s = M(!1), r = (c) => {
    s.value = c.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", r) : o.removeListener(r));
  }, d = ge(() => {
    n.value && (i(), o = a.matchMedia(fn(e)), "addEventListener" in o ? o.addEventListener("change", r) : o.addListener(r), s.value = o.matches);
  });
  return Qs(() => {
    d(), i(), o = void 0;
  }), s;
}
function sh(e) {
  return JSON.parse(JSON.stringify(e));
}
const Na = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, za = "__vueuse_ssr_handlers__", rh = /* @__PURE__ */ ih();
function ih() {
  return za in Na || (Na[za] = Na[za] || {}), Na[za];
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
}, dl = "vueuse-storage";
function ch(e, t, a, n = {}) {
  var o;
  const {
    flush: s = "pre",
    deep: r = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: d = !0,
    mergeDefaults: c = !1,
    shallow: u,
    window: p = Kt,
    eventFilter: h,
    onError: m = (B) => {
      console.error(B);
    },
    initOnMounted: x
  } = n, g = (u ? Gn : M)(typeof t == "function" ? t() : t);
  if (!a)
    try {
      a = or("getDefaultStorage", () => {
        var B;
        return (B = Kt) == null ? void 0 : B.localStorage;
      })();
    } catch (B) {
      m(B);
    }
  if (!a)
    return g;
  const _ = fn(t), C = dh(_), P = (o = n.serializer) != null ? o : uh[C], { pause: k, resume: D } = ah(
    g,
    () => I(g.value),
    { flush: s, deep: r, eventFilter: h }
  );
  p && i && ar(() => {
    il(p, "storage", z), il(p, dl, F), x && z();
  }), x || z();
  function S(B, T) {
    p && p.dispatchEvent(new CustomEvent(dl, {
      detail: {
        key: e,
        oldValue: B,
        newValue: T,
        storageArea: a
      }
    }));
  }
  function I(B) {
    try {
      const T = a.getItem(e);
      if (B == null)
        S(T, null), a.removeItem(e);
      else {
        const V = P.write(B);
        T !== V && (a.setItem(e, V), S(T, V));
      }
    } catch (T) {
      m(T);
    }
  }
  function A(B) {
    const T = B ? B.newValue : a.getItem(e);
    if (T == null)
      return d && _ != null && a.setItem(e, P.write(_)), _;
    if (!B && c) {
      const V = P.read(T);
      return typeof c == "function" ? c(V, _) : C === "object" && !Array.isArray(V) ? { ..._, ...V } : V;
    } else return typeof T != "string" ? T : P.read(T);
  }
  function z(B) {
    if (!(B && B.storageArea !== a)) {
      if (B && B.key == null) {
        g.value = _;
        return;
      }
      if (!(B && B.key !== e)) {
        k();
        try {
          (B == null ? void 0 : B.newValue) !== P.write(g.value) && (g.value = A(B));
        } catch (T) {
          m(T);
        } finally {
          B ? te(D) : D();
        }
      }
    }
  }
  function F(B) {
    z(B.detail);
  }
  return g;
}
function lr(e) {
  return lh("(prefers-color-scheme: dark)", e);
}
function ph(e = {}) {
  const {
    selector: t = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = Kt,
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
  }, h = lr({ window: o }), m = $(() => h.value ? "dark" : "light"), x = d || (r == null ? eh(n) : ch(r, n, s, { window: o, listenToStorageChanges: i })), g = $(() => x.value === "auto" ? m.value : x.value), _ = or(
    "updateHTMLAttrs",
    (D, S, I) => {
      const A = typeof D == "string" ? o == null ? void 0 : o.document.querySelector(D) : nr(D);
      if (!A)
        return;
      let z;
      if (u && (z = o.document.createElement("style"), z.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(z)), S === "class") {
        const F = I.split(/\s/g);
        Object.values(p).flatMap((B) => (B || "").split(/\s/g)).filter(Boolean).forEach((B) => {
          F.includes(B) ? A.classList.add(B) : A.classList.remove(B);
        });
      } else
        A.setAttribute(S, I);
      u && (o.getComputedStyle(z).opacity, document.head.removeChild(z));
    }
  );
  function C(D) {
    var S;
    _(t, a, (S = p[D]) != null ? S : D);
  }
  function P(D) {
    e.onChanged ? e.onChanged(D, C) : C(D);
  }
  Q(g, P, { flush: "post", immediate: !0 }), ar(() => P(g.value));
  const k = $({
    get() {
      return c ? x.value : g.value;
    },
    set(D) {
      x.value = D;
    }
  });
  try {
    return Object.assign(k, { store: x, system: m, state: g });
  } catch {
    return k;
  }
}
function fh(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: a = "",
    window: n = Kt
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
  }), s = $(() => o.system ? o.system.value : lr({ window: n }).value ? "dark" : "light");
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
function vh(e, t, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: p,
    shouldEmit: h
  } = n, m = He(), x = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let g = c;
  g = g || `update:${t.toString()}`;
  const _ = (k) => i ? typeof i == "function" ? i(k) : sh(k) : k, C = () => qm(e[t]) ? _(e[t]) : p, P = (k) => {
    h ? h(k) && x(g, k) : x(g, k);
  };
  if (d) {
    const k = C(), D = M(k);
    let S = !1;
    return Q(
      () => e[t],
      (I) => {
        S || (S = !0, D.value = _(I), te(() => S = !1));
      }
    ), Q(
      D,
      (I) => {
        !S && (I !== e[t] || u) && P(I);
      },
      { deep: u }
    ), D;
  } else
    return $({
      get() {
        return C();
      },
      set(k) {
        P(k);
      }
    });
}
const mh = ["placeholder"], Kg = /* @__PURE__ */ b({
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
    return (s, r) => (v(), y(l(bt), j(H(s.$props)), {
      default: f(() => [
        Gt(de("textarea", {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => ba(o) ? o.value = i : null),
          placeholder: s.placeholder,
          class: se(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !s.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": s.error
          }])
        }, null, 10, mh), [
          [wr, l(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), hh = /* @__PURE__ */ b({
  __name: "Toggle",
  props: /* @__PURE__ */ Sn({
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
  emits: /* @__PURE__ */ Sn(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const a = t, n = e, o = xl(e, "modelValue");
    Q(o, () => {
      a("update:modelValue", o.value);
    });
    const s = $(() => {
      const { class: i, ...d } = n;
      return d;
    }), r = oe(s, a);
    return (i, d) => (v(), y(l(bt), j(H(i.$props)), {
      default: f(() => [
        O(l(Xf), E({
          checked: o.value,
          "onUpdate:checked": d[0] || (d[0] = (c) => o.value = c)
        }, l(r), {
          class: l(L)(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-600 data-[state=unchecked]:bg-primary-300 dark:focus-visible:ring-primary-300 dark:focus-visible:ring-offset-primary-800 dark:data-[state=checked]:bg-primary-900 dark:data-[state=unchecked]:bg-primary-500",
            n.class
          )
        }), {
          default: f(({ checked: c }) => [
            O(l(Zf), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: f(() => [
                c ? w(i.$slots, "checked", { key: 0 }) : J("", !0),
                c ? J("", !0) : w(i.$slots, "not-checked", { key: 1 })
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
}), gh = { class: "my-auto text-slate-400 dark:text-slate-100" }, yh = /* @__PURE__ */ b({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, a) => (v(), U("div", gh, " Showing " + X(t.min) + " to " + X(t.max) + " of " + X(t.total) + " results ", 1));
  }
}), bh = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Rp), E(a.value, {
      class: l(L)("flex size-9 items-center justify-center", t.class)
    }), {
      default: f(() => [
        w(n.$slots, "default", {}, () => [
          O(l(jv))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wh = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Fp), j(H(a.value)), {
      default: f(() => [
        O(l(Ye), {
          class: se(l(L)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            w(n.$slots, "default", {}, () => [
              O(l(Nv), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), _h = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Lp), j(H(a.value)), {
      default: f(() => [
        O(l(Ye), {
          class: se(l(L)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            w(n.$slots, "default", {}, () => [
              O(l(zv), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), xh = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Up), j(H(a.value)), {
      default: f(() => [
        O(l(Ye), {
          class: se(l(L)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            w(n.$slots, "default", {}, () => [
              O(l(Gs), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), Ch = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(jp), j(H(a.value)), {
      default: f(() => [
        O(l(Ye), {
          class: se(l(L)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            w(n.$slots, "default", {}, () => [
              O(l(Fv), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), Gg = /* @__PURE__ */ b({
  __name: "LumuixModeToggle",
  setup(e) {
    const t = fh({
      selector: "html"
    });
    return (a, n) => (v(), y(hh, {
      modelValue: l(t),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => ba(t) ? t.value = o : null)
    }, {
      checked: f(() => [
        O(l(Hv), {
          size: 16,
          class: "m-auto mt-0.5 text-primary-900"
        })
      ]),
      "not-checked": f(() => [
        O(l(Yv), {
          size: 16,
          class: "m-auto mt-0.5 text-primary-900"
        })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), qg = /* @__PURE__ */ b({
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
    return (o, s) => (v(), U(ee, null, [
      O(l(ya), {
        onClick: n,
        class: se(t.class)
      }, {
        default: f(() => [
          (v(!0), U(ee, null, he(o.headers, (r) => (v(), y(l(Za), {
            key: r.value
          }, {
            default: f(() => [
              o.$slots[`cell_header_${r.value}`] ? w(o.$slots, `cell_header_${r.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (v(), U(ee, { key: 1 }, [
                Y(X(o.row[r.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (v(), y(l(Kn), { key: 0 }, {
            default: f(() => [
              w(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : J("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (v(!0), U(ee, { key: 0 }, he(o.subRows, (r, i) => (v(), y(l(ya), { key: i }, {
        default: f(() => [
          (v(!0), U(ee, null, he(o.headers, (d) => (v(), y(l(Za), {
            key: d.value
          }, {
            default: f(() => [
              o.$slots[`subrow_cell_${d.value}`] ? w(o.$slots, `subrow_cell_${d.value}`, {
                key: 0,
                item: r,
                open: a.value
              }) : (v(), U(ee, { key: 1 }, [
                Y(X("subrow_cell_" + d.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (v(), y(l(Kn), { key: 0 }, {
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
}), $h = { class: "relative w-full overflow-auto" }, kh = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("div", $h, [
      de("table", {
        class: se(l(L)("w-full caption-bottom text-sm", t.class))
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
    return (a, n) => (v(), U("tbody", {
      class: se(l(L)("[&_tr:last-child]:border-0", t.class))
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
    return (a, n) => (v(), U("td", {
      class: se(["p-4 align-middle dark:text-slate-300 [&:has([role=checkbox])]:pr-0", t.class])
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
    return (a, n) => (v(), U("th", {
      class: se(
        l(L)(
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
    return (a, n) => (v(), U("thead", {
      class: se(l(L)("[&_tr]:border-b", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Yg = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("tfoot", {
      class: se(
        l(L)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0",
          t.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), ya = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("tr", {
      class: se(
        l(L)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          t.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Kn = /* @__PURE__ */ b({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), U("td", {
      class: se(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
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
    return (a, n) => (v(), U("caption", {
      class: se(l(L)("mt-4 text-sm text-slate-500 dark:text-slate-400", t.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Sh = { class: "flex items-center justify-center py-10" }, Xg = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(ya, null, {
      default: f(() => [
        O(Za, E({
          class: l(L)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, a.value), {
          default: f(() => [
            de("div", Sh, [
              w(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Zg = /* @__PURE__ */ b({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, a) => (v(), y(l(kh), null, {
      default: f(() => [
        t.caption ? (v(), y(l(Oh), { key: 0 }, {
          default: f(() => [
            Y(X(t.caption), 1)
          ]),
          _: 1
        })) : J("", !0),
        O(l(Dh), null, {
          default: f(() => [
            O(l(ya), null, {
              default: f(() => [
                (v(!0), U(ee, null, he(t.headers, (n, o) => (v(), y(l(Ph), null, {
                  default: f(() => [
                    t.$slots[`header_${t.headers[o].value}`] ? w(t.$slots, `header_${t.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (v(), U(ee, { key: 1 }, [
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
        O(l(Bh), null, {
          default: f(() => [
            (v(!0), U(ee, null, he(t.rows, (n, o) => (v(), y(l(ya), { key: o }, {
              default: f(() => [
                (v(!0), U(ee, null, he(t.headers, (s) => (v(), y(l(Za), {
                  key: s.value
                }, {
                  default: f(() => [
                    t.$slots[`cell_${s.value}`] ? w(t.$slots, `cell_${s.value}`, {
                      key: 0,
                      item: n
                    }) : (v(), U(ee, { key: 1 }, [
                      Y(X(n[s.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                t.$slots.row_actions ? (v(), y(l(Kn), { key: 0 }, {
                  default: f(() => [
                    w(t.$slots, "row_actions", { item: n })
                  ]),
                  _: 2
                }, 1024)) : J("", !0)
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
}), Eh = { class: "text-black dark:text-slate-400" }, Jg = /* @__PURE__ */ b({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const a = t, n = () => a("close");
    return (o, s) => (v(), y(l(Hs), { open: o.open }, {
      default: f(() => [
        O(l(Ev), { "as-child": "" }, {
          default: f(() => [
            w(o.$slots, "trigger")
          ]),
          _: 3
        }),
        O(l(qs), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: se("max-w-" + o.size)
        }, {
          default: f(() => [
            O(l(Mv), null, {
              default: f(() => [
                O(l(Tv), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.title ? w(o.$slots, "title", { key: 0 }) : (r = o.headerData) != null && r.title ? (v(), U(ee, { key: 1 }, [
                        Y(X(o.headerData.title), 1)
                      ], 64)) : J("", !0)
                    ];
                  }),
                  _: 3
                }),
                O(l(Av), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.description ? w(o.$slots, "description", { key: 0 }) : (r = o.headerData) != null && r.description ? (v(), U(ee, { key: 1 }, [
                        Y(X(o.headerData.description), 1)
                      ], 64)) : J("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            de("div", Eh, [
              o.$slots.content ? w(o.$slots, "content", { key: 0 }) : w(o.$slots, "default", { key: 1 })
            ]),
            O(l(Xv), null, {
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
}), Mh = { class: "justify-between sm:flex" }, Qg = /* @__PURE__ */ b({
  __name: "LumuixPagination",
  props: {
    data: {},
    as: {}
  },
  setup(e) {
    const t = e, a = () => t.data.current_page === 1 ? t.data.data.length === 0 ? 0 : 1 : t.data.current_page === t.data.last_page ? t.data.total - t.data.data.length : t.data.current_page * t.data.per_page - t.data.per_page, n = () => t.data.current_page === 1 ? t.data.data.length : t.data.current_page === t.data.last_page ? t.data.total : t.data.current_page * t.data.per_page;
    return (o, s) => (v(), U("div", Mh, [
      O(l(yh), {
        min: a(),
        max: n(),
        total: o.data.total
      }, null, 8, ["min", "max", "total"]),
      O(l(Vp), null, {
        default: f(() => [
          O(l(Wp), { class: "flex items-center gap-1" }, {
            default: f(() => [
              O(l(wh), {
                as: o.as,
                "as-child": "",
                href: o.data.first_page_url
              }, null, 8, ["as", "href"]),
              o.data.prev_page_url ? (v(), y(l(Ch), {
                key: 0,
                as: o.as,
                "as-child": "",
                href: o.data.prev_page_url
              }, null, 8, ["as", "href"])) : J("", !0),
              (v(!0), U(ee, null, he(o.data.links, (r, i) => (v(), U(ee, null, [
                i < 5 ? (v(), U("div", { key: i }, [
                  O(l(Ye), {
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
                ])) : J("", !0)
              ], 64))), 256)),
              o.data.links.length > 5 ? (v(), y(l(bh), { key: 1 })) : J("", !0),
              o.data.next_page_url ? (v(), y(l(xh), {
                key: 2,
                as: o.as,
                "as-child": "",
                href: o.data.next_page_url
              }, null, 8, ["as", "href"])) : J("", !0),
              O(l(_h), {
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
}), Th = /* @__PURE__ */ b({
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
    return (s, r) => (v(), y(l(Qf), j(H(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ey = /* @__PURE__ */ b({
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
    return (o, s) => (v(), y(l(av), E(l(n), {
      class: l(L)(
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
}), Ah = /* @__PURE__ */ b({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => {
      var o;
      return v(), y(Ue((o = a.tab) != null && o.is ? a.tab.is : "a"), {
        href: a.tab.href,
        class: se([
          a.tab.active ? "bg-white text-primary-500 hover:bg-opacity-80 dark:bg-slate-950 dark:text-primary-400" : "hover:bg-white dark:hover:bg-slate-900",
          l(L)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            t.class
          )
        ])
      }, {
        default: f(() => {
          var s;
          return [
            (s = a.tab) != null && s.icon ? (v(), y(Ue(a.tab.icon), {
              key: 0,
              class: "size-5"
            })) : J("", !0),
            Y(" " + X(a.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), ul = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(ev), E(a.value, {
      class: l(L)(
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
}), ty = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(tv), E({
      class: l(L)(
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
  return v(), U("div", Vh, [
    w(e.$slots, "default")
  ]);
}
const Fh = /* @__PURE__ */ xa(Ih, [["render", Rh]]), ay = /* @__PURE__ */ b({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(e) {
    const t = e, a = $(
      () => t.tabs.find((n) => n.active)
    );
    return (n, o) => (v(), y(l(Th), null, {
      default: f(() => [
        O(l(ul), { class: "hidden gap-2 md:block" }, {
          default: f(() => [
            (v(!0), U(ee, null, he(n.tabs, (s) => (v(), y(l(Ah), {
              key: s.name,
              tab: s
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        O(l(ul), { class: "flex md:hidden" }, {
          default: f(() => [
            O(l(om), null, {
              default: f(() => [
                O(l(sm), { "as-child": "" }, {
                  default: f(() => [
                    O(l(Ye), { variant: "secondary" }, {
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
                O(l(rm), { class: "w-full" }, {
                  default: f(() => [
                    (v(!0), U(ee, null, he(n.tabs, (s) => (v(), y(l(im), E({
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
}), Lh = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, ny = /* @__PURE__ */ b({
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
    return (r, i) => (v(), y(l(af), E({
      class: l(L)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: c }) => [
        O(l(Kh), null, {
          default: f(() => [
            O(l(Yh)),
            O(l(Gh)),
            O(l(qh))
          ]),
          _: 1
        }),
        de("div", Lh, [
          (v(!0), U(ee, null, he(d, (u) => (v(), y(l(Wh), {
            key: u.value.toString()
          }, {
            default: f(() => [
              O(l(jh), null, {
                default: f(() => [
                  O(l(cl), null, {
                    default: f(() => [
                      (v(!0), U(ee, null, he(c, (p) => (v(), y(l(Hh), { key: p }, {
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
              O(l(Uh), null, {
                default: f(() => [
                  (v(!0), U(ee, null, he(u.rows, (p, h) => (v(), y(l(cl), {
                    key: `weekDate-${h}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), U(ee, null, he(p, (m) => (v(), y(l(Nh), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          O(l(zh), {
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
}), Nh = /* @__PURE__ */ b({
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
    return (o, s) => (v(), y(l(sf), E({
      class: l(L)(
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(vf), E({
      class: l(L)(
        l(Tt)({ variant: "ghost" }),
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(lf), E({
      class: l(L)("w-full border-collapse space-y-1", t.class)
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
    return (a, n) => (v(), y(l(pf), j(H(t)), {
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
    return (a, n) => (v(), y(l(cf), j(H(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cl = /* @__PURE__ */ b({
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
    return (o, s) => (v(), y(l(ff), E({
      class: l(L)("mt-2 flex w-full", t.class)
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(rf), E({
      class: l(L)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(nf), E({
      class: l(L)("relative flex w-full items-center justify-between pt-1", t.class)
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(of), E({
      class: l(L)("text-sm font-medium", t.class)
    }, l(n)), {
      default: f(({ headingValue: r }) => [
        w(o.$slots, "default", { headingValue: r }, () => [
          Y(X(r), 1)
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(df), E({
      class: l(L)(
        l(Tt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          O(l(Gv), { size: 16 })
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
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = ne(a);
    return (o, s) => (v(), y(l(uf), E({
      class: l(L)(
        l(Tt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          O(l(Kv), { size: 16 })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xh = 5, Zh = 5e6, nt = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Dn = 0;
function Jh() {
  return Dn = (Dn + 1) % Number.MAX_VALUE, Dn.toString();
}
const On = /* @__PURE__ */ new Map();
function pl(e) {
  if (On.has(e)) return;
  const t = setTimeout(() => {
    On.delete(e), ca({
      type: nt.REMOVE_TOAST,
      toastId: e
    });
  }, Zh);
  On.set(e, t);
}
const Te = M({
  toasts: []
});
function ca(e) {
  switch (e.type) {
    case nt.ADD_TOAST:
      Te.value.toasts = [e.toast, ...Te.value.toasts].slice(0, Xh);
      break;
    case nt.UPDATE_TOAST:
      Te.value.toasts = Te.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case nt.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? pl(t) : Te.value.toasts.forEach((a) => {
        pl(a.id);
      }), Te.value.toasts = Te.value.toasts.map(
        (a) => a.id === t || t === void 0 ? {
          ...a,
          open: !1
        } : a
      );
      break;
    }
    case nt.REMOVE_TOAST:
      e.toastId === void 0 ? Te.value.toasts = [] : Te.value.toasts = Te.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function Qh() {
  return {
    toasts: $(() => Te.value.toasts),
    toast: eg,
    dismiss: (e) => ca({ type: nt.DISMISS_TOAST, toastId: e })
  };
}
function eg(e) {
  const t = Jh(), a = (o) => ca({
    type: nt.UPDATE_TOAST,
    toast: { ...o, id: t }
  }), n = () => ca({ type: nt.DISMISS_TOAST, toastId: t });
  return ca({
    type: nt.ADD_TOAST,
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
const tg = { class: "flex gap-3" }, ag = { class: "grid gap-1" }, oy = /* @__PURE__ */ b({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = Qh();
    return (a, n) => (v(), y(l(rg), null, {
      default: f(() => [
        (v(!0), U(ee, null, he(l(t), (o) => (v(), y(l(ng), E({
          key: o.id,
          ref_for: !0
        }, o, { class: "my-1" }), {
          default: f(() => [
            de("div", tg, [
              (v(), y(Ue(o.icon), {
                class: se(l(L)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              de("div", ag, [
                o.title ? (v(), y(l(sg), { key: 0 }, {
                  default: f(() => [
                    Y(X(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : J("", !0),
                o.description ? (v(), U(ee, { key: 1 }, [
                  _r(o.description) ? (v(), y(l(fl), { key: 0 }, {
                    default: f(() => [
                      (v(), y(Ue(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (v(), y(l(fl), { key: 1 }, {
                    default: f(() => [
                      Y(X(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : J("", !0),
                O(l(lg))
              ]),
              (v(), y(Ue(o.action)))
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = oe(o, n);
    return (r, i) => (v(), y(l(vv), E(l(s), {
      class: l(L)(l(ig)({ variant: r.variant }), a.class),
      "onUpdate:open": r.onOpenChange
    }), {
      default: f(() => [
        w(r.$slots, "default")
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
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), y(l(hv), E(a.value, {
      class: l(L)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), ly = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(mv), j(H(a.value)), {
      default: f(() => [
        O(l(Ye), {
          variant: n.variant,
          class: se(t.class)
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
}), lg = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Us), E(a.value, {
      class: l(L)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: f(() => [
        O(l(Eo), {
          size: 15,
          class: "transition hover:text-slate-400"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), sg = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(gv), E(a.value, {
      class: l(L)("text-sm font-semibold", t.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fl = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(yv), E({
      class: l(L)("text-sm opacity-90", t.class)
    }, a.value), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rg = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(ov), j(H(t)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ig = Jn(
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
  pg as Badge,
  bt as Base,
  lm as BaseDropdownMenuItem,
  Ye as Button,
  wv as Calendar,
  _v as CalendarCell,
  xv as CalendarCellTrigger,
  Cv as CalendarGrid,
  $v as CalendarGridBody,
  kv as CalendarGridHead,
  sl as CalendarGridRow,
  Bv as CalendarHeadCell,
  Pv as CalendarHeader,
  Dv as CalendarHeading,
  Ov as CalendarNextButton,
  Sv as CalendarPrevButton,
  pm as CharacterCount,
  Vg as Checkbox,
  qg as CollapsibleTableRow,
  Rg as Combobox,
  js as Command,
  wg as CommandDialog,
  Zv as CommandEmpty,
  Jv as CommandGroup,
  em as CommandInput,
  tm as CommandItem,
  nm as CommandList,
  _g as CommandSeparator,
  xg as CommandShortcut,
  cg as Container,
  Fg as DatePicker,
  hm as Description,
  Hs as Dialog,
  yg as DialogClose,
  qs as DialogContent,
  Av as DialogDescription,
  Xv as DialogFooter,
  Mv as DialogHeader,
  bg as DialogScrollContent,
  Tv as DialogTitle,
  Ev as DialogTrigger,
  om as DropdownMenu,
  Bg as DropdownMenuCheckboxItem,
  rm as DropdownMenuContent,
  Cg as DropdownMenuGroup,
  kg as DropdownMenuItem,
  Sg as DropdownMenuLabel,
  im as DropdownMenuLink,
  Cp as DropdownMenuPortal,
  $g as DropdownMenuRadioGroup,
  Pg as DropdownMenuRadioItem,
  Og as DropdownMenuSeparator,
  Dg as DropdownMenuShortcut,
  Eg as DropdownMenuSub,
  Tg as DropdownMenuSubContent,
  Mg as DropdownMenuSubTrigger,
  sm as DropdownMenuTrigger,
  ym as Error,
  Ag as Form,
  km as FormElement,
  Ig as FormGrid,
  Lg as ImageUpload,
  Ng as Input,
  Ys as Label,
  Zg as LumuixDatatable,
  Jg as LumuixModal,
  Gg as LumuixModeToggle,
  Qg as LumuixPagination,
  ay as LumuixTabs,
  Vp as Pagination,
  yh as PaginationDetails,
  bh as PaginationEllipsis,
  wh as PaginationFirst,
  _h as PaginationLast,
  Wp as PaginationList,
  gg as PaginationListItem,
  xh as PaginationNext,
  Ch as PaginationPrev,
  Xs as Popover,
  Js as PopoverContent,
  Zs as PopoverTrigger,
  ny as RangeCalendar,
  Nh as RangeCalendarCell,
  zh as RangeCalendarCellTrigger,
  Wh as RangeCalendarGrid,
  Uh as RangeCalendarGridBody,
  jh as RangeCalendarGridHead,
  cl as RangeCalendarGridRow,
  Hh as RangeCalendarHeadCell,
  Kh as RangeCalendarHeader,
  Gh as RangeCalendarHeading,
  qh as RangeCalendarNextButton,
  Yh as RangeCalendarPrevButton,
  Hg as Select,
  Wm as SelectContent,
  zg as SelectGroup,
  jm as SelectItem,
  Wg as SelectItemText,
  Ug as SelectLabel,
  Lm as SelectRoot,
  Km as SelectScrollDownButton,
  Hm as SelectScrollUpButton,
  jg as SelectSeparator,
  zm as SelectTrigger,
  Nm as SelectValue,
  Fh as TabBaseContent,
  kh as Table,
  Bh as TableBody,
  Oh as TableCaption,
  Za as TableCell,
  Xg as TableEmpty,
  Yg as TableFooter,
  Ph as TableHead,
  Dh as TableHeader,
  ya as TableRow,
  Kn as TableRowAction,
  ty as TabsContent,
  Ah as TabsItem,
  ul as TabsList,
  Th as TabsRoot,
  ey as TabsTrigger,
  Kg as TextArea,
  ng as Toast,
  ly as ToastAction,
  lg as ToastClose,
  fl as ToastDescription,
  rg as ToastProvider,
  sg as ToastTitle,
  og as ToastViewport,
  oy as Toaster,
  hh as Toggle,
  oi as badgeVariants,
  Tt as buttonVariants,
  ug as preset,
  eg as toast,
  ig as toastVariants,
  Qh as useToast
};
