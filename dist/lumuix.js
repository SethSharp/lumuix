import * as rc from "vue";
import { computed as S, ref as R, shallowRef as $l, watch as te, getCurrentScope as Sl, onScopeDispose as Tl, shallowReadonly as aa, unref as l, getCurrentInstance as wt, toRef as yf, camelize as Or, defineComponent as _, Comment as bf, mergeProps as P, cloneVNode as Am, h as Ot, toRefs as _e, openBlock as g, createBlock as w, withCtx as y, renderSlot as x, withKeys as yt, onMounted as pe, normalizeProps as K, guardReactiveProps as Z, reactive as Dl, createVNode as O, createCommentVNode as ne, createElementVNode as ce, toDisplayString as oe, createTextVNode as ee, withModifiers as Ie, createElementBlock as L, Fragment as re, watchEffect as De, markRaw as Om, nextTick as se, watchSyncEffect as Em, withDirectives as Ba, vShow as Ml, isRef as Oo, resolveDynamicComponent as nt, renderList as $e, Teleport as ps, onBeforeUnmount as Bl, useSlots as _f, onBeforeMount as Pm, normalizeStyle as Ft, toHandlers as Rm, inject as Aa, provide as Bn, effectScope as wf, readonly as Eo, toHandlerKey as Im, onUnmounted as Je, vModelSelect as Fm, toRaw as mr, customRef as xf, onBeforeUpdate as Vm, onUpdated as Nm, mergeDefaults as Cf, watchPostEffect as Lm, normalizeClass as j, createApp as zm, mergeModels as Bi, useModel as kf, vModelDynamic as Um, vModelText as Hm, isVNode as Wm } from "vue";
var Ym = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $f(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Sf = {}, Tf = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  function t(a, o) {
    return {
      handler: a,
      config: o
    };
  }
  t.withOptions = function(a, o = () => ({})) {
    const r = function(s) {
      return {
        __options: s,
        handler: a(s),
        config: o(s)
      };
    };
    return r.__isOptionsFunction = !0, r.__pluginFunction = a, r.__configFunction = o, r;
  };
  const n = t;
})(Tf);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(Tf);
  function n(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const a = t.default;
})(Sf);
let Js = Sf;
var Km = (Js.__esModule ? Js : { default: Js }).default;
const jm = Km;
function sc(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var Gm = jm(
  ({ addUtilities: e, matchUtilities: t, theme: n }) => {
    e({
      "@keyframes enter": n("keyframes.enter"),
      "@keyframes exit": n("keyframes.exit"),
      ".animate-in": {
        animationName: "enter",
        animationDuration: n("animationDuration.DEFAULT"),
        "--tw-enter-opacity": "initial",
        "--tw-enter-scale": "initial",
        "--tw-enter-rotate": "initial",
        "--tw-enter-translate-x": "initial",
        "--tw-enter-translate-y": "initial"
      },
      ".animate-out": {
        animationName: "exit",
        animationDuration: n("animationDuration.DEFAULT"),
        "--tw-exit-opacity": "initial",
        "--tw-exit-scale": "initial",
        "--tw-exit-rotate": "initial",
        "--tw-exit-translate-x": "initial",
        "--tw-exit-translate-y": "initial"
      }
    }), t(
      {
        "fade-in": (a) => ({ "--tw-enter-opacity": a }),
        "fade-out": (a) => ({ "--tw-exit-opacity": a })
      },
      { values: n("animationOpacity") }
    ), t(
      {
        "zoom-in": (a) => ({ "--tw-enter-scale": a }),
        "zoom-out": (a) => ({ "--tw-exit-scale": a })
      },
      { values: n("animationScale") }
    ), t(
      {
        "spin-in": (a) => ({ "--tw-enter-rotate": a }),
        "spin-out": (a) => ({ "--tw-exit-rotate": a })
      },
      { values: n("animationRotate") }
    ), t(
      {
        "slide-in-from-top": (a) => ({
          "--tw-enter-translate-y": `-${a}`
        }),
        "slide-in-from-bottom": (a) => ({
          "--tw-enter-translate-y": a
        }),
        "slide-in-from-left": (a) => ({
          "--tw-enter-translate-x": `-${a}`
        }),
        "slide-in-from-right": (a) => ({
          "--tw-enter-translate-x": a
        }),
        "slide-out-to-top": (a) => ({
          "--tw-exit-translate-y": `-${a}`
        }),
        "slide-out-to-bottom": (a) => ({
          "--tw-exit-translate-y": a
        }),
        "slide-out-to-left": (a) => ({
          "--tw-exit-translate-x": `-${a}`
        }),
        "slide-out-to-right": (a) => ({
          "--tw-exit-translate-x": a
        })
      },
      { values: n("animationTranslate") }
    ), t(
      { duration: (a) => ({ animationDuration: a }) },
      { values: sc(n("animationDuration")) }
    ), t(
      { delay: (a) => ({ animationDelay: a }) },
      { values: n("animationDelay") }
    ), t(
      { ease: (a) => ({ animationTimingFunction: a }) },
      { values: sc(n("animationTimingFunction")) }
    ), e({
      ".running": { animationPlayState: "running" },
      ".paused": { animationPlayState: "paused" }
    }), t(
      { "fill-mode": (a) => ({ animationFillMode: a }) },
      { values: n("animationFillMode") }
    ), t(
      { direction: (a) => ({ animationDirection: a }) },
      { values: n("animationDirection") }
    ), t(
      { repeat: (a) => ({ animationIterationCount: a }) },
      { values: n("animationRepeat") }
    );
  },
  {
    theme: {
      extend: {
        animationDelay: ({ theme: e }) => ({
          ...e("transitionDelay")
        }),
        animationDuration: ({ theme: e }) => ({
          0: "0ms",
          ...e("transitionDuration")
        }),
        animationTimingFunction: ({ theme: e }) => ({
          ...e("transitionTimingFunction")
        }),
        animationFillMode: {
          none: "none",
          forwards: "forwards",
          backwards: "backwards",
          both: "both"
        },
        animationDirection: {
          normal: "normal",
          reverse: "reverse",
          alternate: "alternate",
          "alternate-reverse": "alternate-reverse"
        },
        animationOpacity: ({ theme: e }) => ({
          DEFAULT: 0,
          ...e("opacity")
        }),
        animationTranslate: ({ theme: e }) => ({
          DEFAULT: "100%",
          ...e("translate")
        }),
        animationScale: ({ theme: e }) => ({
          DEFAULT: 0,
          ...e("scale")
        }),
        animationRotate: ({ theme: e }) => ({
          DEFAULT: "30deg",
          ...e("rotate")
        }),
        animationRepeat: {
          0: "0",
          1: "1",
          infinite: "infinite"
        },
        keyframes: {
          enter: {
            from: {
              opacity: "var(--tw-enter-opacity, 1)",
              transform: "translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))"
            }
          },
          exit: {
            to: {
              opacity: "var(--tw-exit-opacity, 1)",
              transform: "translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))"
            }
          }
        }
      }
    }
  }
);
const qm = /* @__PURE__ */ $f(Gm), eP = {
  safelist: ["dark"],
  darkMode: ["class"],
  plugins: [qm],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        heading: "hsl(var(--heading))",
        text: "hsl(var(--text))",
        "sub-text": "hsl(var(--sub-text))",
        foreground: "hsl(var(--foreground))",
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
        accordion: {
          text: "hsl(var(--accordion-text))",
          border: "hsl(var(--accordion-border))"
        },
        skeleton: {
          DEFAULT: "hsl(var(--skeleton))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          border: "hsl(var(--card-border))",
          foreground: "hsl(var(--card-foreground))"
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))"
        }
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  }
};
function Qs(e, t) {
  return e - t * Math.floor(e / t);
}
const Df = 1721426;
function Xo(e, t, n, a) {
  t = Al(e, t);
  let o = t - 1, r = -2;
  return n <= 2 ? r = 0 : gr(t) && (r = -1), Df - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * n - 362) / 12 + r + a);
}
function gr(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function Al(e, t) {
  return e === "BC" ? 1 - t : t;
}
function Xm(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const Zm = {
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
class pa {
  fromJulianDay(t) {
    let n = t, a = n - Df, o = Math.floor(a / 146097), r = Qs(a, 146097), s = Math.floor(r / 36524), i = Qs(r, 36524), u = Math.floor(i / 1461), c = Qs(i, 1461), d = Math.floor(c / 365), f = o * 400 + s * 100 + u * 4 + d + (s !== 4 && d !== 4 ? 1 : 0), [p, h] = Xm(f), m = n - Xo(p, h, 1, 1), v = 2;
    n < Xo(p, h, 3, 1) ? v = 0 : gr(h) && (v = 1);
    let b = Math.floor(((m + v) * 12 + 373) / 367), C = n - Xo(p, h, b, 1) + 1;
    return new ma(p, h, b, C);
  }
  toJulianDay(t) {
    return Xo(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return Zm[gr(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return gr(t.year) ? 366 : 365;
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
const Jm = {
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
function Ne(e, t) {
  return t = ut(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Mf(e, t) {
  return t = ut(t, e.calendar), e = mo(e), t = mo(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Dt(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function ic(e, t) {
  return e = mo(e), t = mo(t), e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month;
}
function Bf(e, t) {
  return Ne(e, Of(t));
}
function Af(e, t) {
  let n = e.calendar.toJulianDay(e), a = Math.ceil(n + 1 - ng(t)) % 7;
  return a < 0 && (a += 7), a;
}
function Qm(e) {
  return qt(Date.now(), e);
}
function Of(e) {
  return rg(Qm(e));
}
function Ef(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function eg(e, t) {
  return lc(e) - lc(t);
}
function lc(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let ei = null;
function Kn() {
  return ei == null && (ei = new Intl.DateTimeFormat().resolvedOptions().timeZone), ei;
}
function mo(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function uc(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const cc = /* @__PURE__ */ new Map();
function tg(e) {
  if (Intl.Locale) {
    let n = cc.get(e);
    return n || (n = new Intl.Locale(e).maximize().region, n && cc.set(e, n)), n;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function ng(e) {
  let t = tg(e);
  return t && Jm[t] || 0;
}
function ha(e) {
  e = ut(e, new pa());
  let t = Al(e.era, e.year);
  return Pf(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function Pf(e, t, n, a, o, r, s) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(a, o, r, s), i.setUTCFullYear(e, t - 1, n), i.getTime();
}
function Ai(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === Kn()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: n, month: a, day: o, hour: r, minute: s, second: i } = Rf(e, t);
  return Pf(n, a, o, r, s, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const dc = /* @__PURE__ */ new Map();
function Rf(e, t) {
  let n = dc.get(t);
  n || (n = new Intl.DateTimeFormat("en-US", {
    timeZone: t,
    hour12: !1,
    era: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }), dc.set(t, n));
  let a = n.formatToParts(new Date(e)), o = {};
  for (let r of a) r.type !== "literal" && (o[r.type] = r.value);
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
const fc = 864e5;
function ag(e, t, n, a) {
  return (n === a ? [
    n
  ] : [
    n,
    a
  ]).filter((r) => og(e, t, r));
}
function og(e, t, n) {
  let a = Rf(n, t);
  return e.year === a.year && e.month === a.month && e.day === a.day && e.hour === a.hour && e.minute === a.minute && e.second === a.second;
}
function Gt(e, t, n = "compatible") {
  let a = va(e);
  if (t === "UTC") return ha(a);
  if (t === Kn() && n === "compatible") {
    a = ut(a, new pa());
    let u = /* @__PURE__ */ new Date(), c = Al(a.era, a.year);
    return u.setFullYear(c, a.month - 1, a.day), u.setHours(a.hour, a.minute, a.second, a.millisecond), u.getTime();
  }
  let o = ha(a), r = Ai(o - fc, t), s = Ai(o + fc, t), i = ag(a, t, o - r, o - s);
  if (i.length === 1) return i[0];
  if (i.length > 1) switch (n) {
    case "compatible":
    case "earlier":
      return i[0];
    case "later":
      return i[i.length - 1];
    case "reject":
      throw new RangeError("Multiple possible absolute times found");
  }
  switch (n) {
    case "earlier":
      return Math.min(o - r, o - s);
    case "compatible":
    case "later":
      return Math.max(o - r, o - s);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function If(e, t, n = "compatible") {
  return new Date(Gt(e, t, n));
}
function qt(e, t) {
  let n = Ai(e, t), a = new Date(e + n), o = a.getUTCFullYear(), r = a.getUTCMonth() + 1, s = a.getUTCDate(), i = a.getUTCHours(), u = a.getUTCMinutes(), c = a.getUTCSeconds(), d = a.getUTCMilliseconds();
  return new ya(o, r, s, t, n, i, u, c, d);
}
function rg(e) {
  return new ma(e.calendar, e.era, e.year, e.month, e.day);
}
function va(e, t) {
  let n = 0, a = 0, o = 0, r = 0;
  if ("timeZone" in e) ({ hour: n, minute: a, second: o, millisecond: r } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: n, minute: a, second: o, millisecond: r } = t), new ga(e.calendar, e.era, e.year, e.month, e.day, n, a, o, r);
}
function ut(e, t) {
  if (e.calendar.identifier === t.identifier) return e;
  let n = t.fromJulianDay(e.calendar.toJulianDay(e)), a = e.copy();
  return a.calendar = t, a.era = n.era, a.year = n.year, a.month = n.month, a.day = n.day, zn(a), a;
}
function sg(e, t, n) {
  if (e instanceof ya)
    return e.timeZone === t ? e : lg(e, t);
  let a = Gt(e, t, n);
  return qt(a, t);
}
function ig(e) {
  let t = ha(e) - e.offset;
  return new Date(t);
}
function lg(e, t) {
  let n = ha(e) - e.offset;
  return ut(qt(n, t), e.calendar);
}
const Ga = 36e5;
function hs(e, t) {
  let n = e.copy(), a = "hour" in n ? fg(n, t) : 0;
  Oi(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, Ei(n), Ff(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += a, ug(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
  let o = n.calendar.getYearsInEra(n);
  if (n.year > o) {
    var r, s;
    let u = (r = (s = n.calendar).isInverseEra) === null || r === void 0 ? void 0 : r.call(s, n);
    n.year = o, n.month = u ? 1 : n.calendar.getMonthsInYear(n), n.day = u ? 1 : n.calendar.getDaysInMonth(n);
  }
  n.month < 1 && (n.month = 1, n.day = 1);
  let i = n.calendar.getMonthsInYear(n);
  return n.month > i && (n.month = i, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n;
}
function Oi(e, t) {
  var n, a;
  !((n = (a = e.calendar).isInverseEra) === null || n === void 0) && n.call(a, e) && (t = -t), e.year += t;
}
function Ei(e) {
  for (; e.month < 1; )
    Oi(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, Oi(e, 1);
}
function ug(e) {
  for (; e.day < 1; )
    e.month--, Ei(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, Ei(e);
}
function Ff(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function zn(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Ff(e);
}
function Vf(e) {
  let t = {};
  for (let n in e) typeof e[n] == "number" && (t[n] = -e[n]);
  return t;
}
function Nf(e, t) {
  return hs(e, Vf(t));
}
function Ol(e, t) {
  let n = e.copy();
  return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), zn(n), n;
}
function Er(e, t) {
  let n = e.copy();
  return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), dg(n), n;
}
function cg(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Zo(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Zo(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Zo(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = Zo(e.hour, 24), t;
}
function dg(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Zo(e, t) {
  let n = e % t;
  return n < 0 && (n += t), n;
}
function fg(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, cg(e);
}
function El(e, t, n, a) {
  let o = e.copy();
  switch (t) {
    case "era": {
      let i = e.calendar.getEras(), u = i.indexOf(e.era);
      if (u < 0) throw new Error("Invalid era: " + e.era);
      u = Xt(u, n, 0, i.length - 1, a == null ? void 0 : a.round), o.era = i[u], zn(o);
      break;
    }
    case "year":
      var r, s;
      !((r = (s = o.calendar).isInverseEra) === null || r === void 0) && r.call(s, o) && (n = -n), o.year = Xt(e.year, n, -1 / 0, 9999, a == null ? void 0 : a.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, e);
      break;
    case "month":
      o.month = Xt(e.month, n, 1, e.calendar.getMonthsInYear(e), a == null ? void 0 : a.round);
      break;
    case "day":
      o.day = Xt(e.day, n, 1, e.calendar.getDaysInMonth(e), a == null ? void 0 : a.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(o), zn(o), o;
}
function Lf(e, t, n, a) {
  let o = e.copy();
  switch (t) {
    case "hour": {
      let r = e.hour, s = 0, i = 23;
      if ((a == null ? void 0 : a.hourCycle) === 12) {
        let u = r >= 12;
        s = u ? 12 : 0, i = u ? 23 : 11;
      }
      o.hour = Xt(r, n, s, i, a == null ? void 0 : a.round);
      break;
    }
    case "minute":
      o.minute = Xt(e.minute, n, 0, 59, a == null ? void 0 : a.round);
      break;
    case "second":
      o.second = Xt(e.second, n, 0, 59, a == null ? void 0 : a.round);
      break;
    case "millisecond":
      o.millisecond = Xt(e.millisecond, n, 0, 999, a == null ? void 0 : a.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return o;
}
function Xt(e, t, n, a, o = !1) {
  if (o) {
    e += Math.sign(t), e < n && (e = a);
    let r = Math.abs(t);
    t > 0 ? e = Math.ceil(e / r) * r : e = Math.floor(e / r) * r, e > a && (e = n);
  } else
    e += t, e < n ? e = a - (n - e - 1) : e > a && (e = n + (e - a - 1));
  return e;
}
function zf(e, t) {
  let n;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let o = hs(va(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    n = Gt(o, e.timeZone);
  } else
    n = ha(e) - e.offset;
  n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5;
  let a = qt(n, e.timeZone);
  return ut(a, e.calendar);
}
function pg(e, t) {
  return zf(e, Vf(t));
}
function hg(e, t, n, a) {
  switch (t) {
    case "hour": {
      let o = 0, r = 23;
      if ((a == null ? void 0 : a.hourCycle) === 12) {
        let m = e.hour >= 12;
        o = m ? 12 : 0, r = m ? 23 : 11;
      }
      let s = va(e), i = ut(Er(s, {
        hour: o
      }), new pa()), u = [
        Gt(i, e.timeZone, "earlier"),
        Gt(i, e.timeZone, "later")
      ].filter((m) => qt(m, e.timeZone).day === i.day)[0], c = ut(Er(s, {
        hour: r
      }), new pa()), d = [
        Gt(c, e.timeZone, "earlier"),
        Gt(c, e.timeZone, "later")
      ].filter((m) => qt(m, e.timeZone).day === c.day).pop(), f = ha(e) - e.offset, p = Math.floor(f / Ga), h = f % Ga;
      return f = Xt(p, n, Math.floor(u / Ga), Math.floor(d / Ga), a == null ? void 0 : a.round) * Ga + h, ut(qt(f, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return Lf(e, t, n, a);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = El(va(e), t, n, a), r = Gt(o, e.timeZone);
      return ut(qt(r, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function vg(e, t, n) {
  let a = va(e), o = Er(Ol(a, t), t);
  if (o.compare(a) === 0) return e;
  let r = Gt(o, e.timeZone, n);
  return ut(qt(r, e.timeZone), e.calendar);
}
function mg(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function Uf(e) {
  let t = ut(e, new pa());
  return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function Hf(e) {
  return `${Uf(e)}T${mg(e)}`;
}
function gg(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let n = Math.floor(e / 36e5), a = e % 36e5 / 6e4;
  return `${t}${String(n).padStart(2, "0")}:${String(a).padStart(2, "0")}`;
}
function yg(e) {
  return `${Hf(e)}${gg(e.offset)}[${e.timeZone}]`;
}
function bg(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Pl(e, t, n) {
  bg(e, t), t.set(e, n);
}
function Rl(e) {
  let t = typeof e[0] == "object" ? e.shift() : new pa(), n;
  if (typeof e[0] == "string") n = e.shift();
  else {
    let s = t.getEras();
    n = s[s.length - 1];
  }
  let a = e.shift(), o = e.shift(), r = e.shift();
  return [
    t,
    n,
    a,
    o,
    r
  ];
}
var _g = /* @__PURE__ */ new WeakMap();
class ma {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new ma(this.calendar, this.era, this.year, this.month, this.day) : new ma(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return hs(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return Nf(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Ol(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, a) {
    return El(this, t, n, a);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return If(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Uf(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return Ef(this, t);
  }
  constructor(...t) {
    Pl(this, _g, {
      writable: !0,
      value: void 0
    });
    let [n, a, o, r, s] = Rl(t);
    this.calendar = n, this.era = a, this.year = o, this.month = r, this.day = s, zn(this);
  }
}
var wg = /* @__PURE__ */ new WeakMap();
class ga {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new ga(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new ga(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return hs(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return Nf(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Ol(Er(this, t), t);
  }
  /**
  * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, a) {
    switch (t) {
      case "era":
      case "year":
      case "month":
      case "day":
        return El(this, t, n, a);
      default:
        return Lf(this, t, n, a);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, n) {
    return If(this, t, n);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Hf(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let n = Ef(this, t);
    return n === 0 ? eg(this, va(t)) : n;
  }
  constructor(...t) {
    Pl(this, wg, {
      writable: !0,
      value: void 0
    });
    let [n, a, o, r, s] = Rl(t);
    this.calendar = n, this.era = a, this.year = o, this.month = r, this.day = s, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, zn(this);
  }
}
var xg = /* @__PURE__ */ new WeakMap();
class ya {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new ya(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new ya(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return zf(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return pg(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, n) {
    return vg(this, t, n);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, a) {
    return hg(this, t, n, a);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return ig(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return yg(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - sg(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    Pl(this, xg, {
      writable: !0,
      value: void 0
    });
    let [n, a, o, r, s] = Rl(t), i = t.shift(), u = t.shift();
    this.calendar = n, this.era = a, this.year = o, this.month = r, this.day = s, this.timeZone = i, this.offset = u, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, zn(this);
  }
}
let ti = /* @__PURE__ */ new Map();
class Kt {
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(t) {
    return this.formatter.format(t);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */
  formatToParts(t) {
    return this.formatter.formatToParts(t);
  }
  /** Formats a date range as a string. */
  formatRange(t, n) {
    if (typeof this.formatter.formatRange == "function")
      return this.formatter.formatRange(t, n);
    if (n < t) throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(t)} – ${this.formatter.format(n)}`;
  }
  /** Formats a date range as an array of parts. */
  formatRangeToParts(t, n) {
    if (typeof this.formatter.formatRangeToParts == "function")
      return this.formatter.formatRangeToParts(t, n);
    if (n < t) throw new RangeError("End date must be >= start date");
    let a = this.formatter.formatToParts(t), o = this.formatter.formatToParts(n);
    return [
      ...a.map((r) => ({
        ...r,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...o.map((r) => ({
        ...r,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let t = this.formatter.resolvedOptions();
    return $g() && (this.resolvedHourCycle || (this.resolvedHourCycle = Sg(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, n = {}) {
    this.formatter = Wf(t, n), this.options = n;
  }
}
const Cg = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function Wf(e, t = {}) {
  if (typeof t.hour12 == "boolean" && kg()) {
    t = {
      ...t
    };
    let o = Cg[String(t.hour12)][e.split("-")[0]], r = t.hour12 ? "h12" : "h23";
    t.hourCycle = o ?? r, delete t.hour12;
  }
  let n = e + (t ? Object.entries(t).sort((o, r) => o[0] < r[0] ? -1 : 1).join() : "");
  if (ti.has(n)) return ti.get(n);
  let a = new Intl.DateTimeFormat(e, t);
  return ti.set(n, a), a;
}
let ni = null;
function kg() {
  return ni == null && (ni = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), ni;
}
let ai = null;
function $g() {
  return ai == null && (ai = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), ai;
}
function Sg(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let n = Wf(e, {
    ...t,
    timeZone: void 0
    // use local timezone
  }), a = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find((r) => r.type === "hour").value, 10), o = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find((r) => r.type === "hour").value, 10);
  if (a === 0 && o === 23) return "h23";
  if (a === 24 && o === 23) return "h24";
  if (a === 0 && o === 11) return "h11";
  if (a === 12 && o === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
function Tg(e, t) {
  const n = [];
  for (let a = 0; a < e.length; a += t)
    n.push(e.slice(a, a + t));
  return n;
}
function mt(e, t = Kn()) {
  return Il(e) ? e.toDate() : e.toDate(t);
}
function Dg(e) {
  return e instanceof ga;
}
function Il(e) {
  return e instanceof ya;
}
function Mg(e) {
  return Dg(e) || Il(e);
}
function go(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), n = e.getMonth() + 1;
    return new Date(t, n, 0).getDate();
  } else
    return e.set({ day: 100 }).day;
}
function vn(e, t) {
  return e.compare(t) < 0;
}
function oo(e, t) {
  return e.compare(t) > 0;
}
function Bg(e, t) {
  return e.compare(t) <= 0;
}
function Ag(e, t) {
  return e.compare(t) >= 0;
}
function Og(e, t, n) {
  return Ag(e, t) && Bg(e, n);
}
function Eg(e, t, n) {
  return oo(e, t) && vn(e, n);
}
function Pg(e, t, n) {
  const a = Af(e, n);
  return t > a ? e.subtract({ days: a + 7 - t }) : t === a ? e : e.subtract({ days: a - t });
}
function Rg(e, t, n) {
  const a = Af(e, n), o = t === 0 ? 6 : t - 1;
  return a === o ? e : a > o ? e.add({ days: 7 - a + o }) : e.add({ days: o - a });
}
function Ig(e, t, n, a) {
  if (n === void 0 && a === void 0)
    return !0;
  let o = e.add({ days: 1 });
  if (a != null && a(o) || n != null && n(o))
    return !1;
  const r = t;
  for (; o.compare(r) < 0; )
    if (o = o.add({ days: 1 }), a != null && a(o) || n != null && n(o))
      return !1;
  return !0;
}
function pc(e, t) {
  const n = [];
  let a = e.add({ days: 1 });
  const o = t;
  for (; a.compare(o) < 0; )
    n.push(a), a = a.add({ days: 1 });
  return n;
}
function oi(e) {
  const { dateObj: t, weekStartsOn: n, fixedWeeks: a, locale: o } = e, r = go(t), s = Array.from({ length: r }, (b, C) => t.set({ day: C + 1 })), i = mo(t), u = uc(t), c = Pg(i, n, o), d = Rg(u, n, o), f = pc(c.subtract({ days: 1 }), i), p = pc(u, d.add({ days: 1 })), h = f.length + s.length + p.length;
  if (a && h < 42) {
    const b = 42 - h;
    let C = p[p.length - 1];
    C || (C = uc(t));
    const $ = Array.from({ length: b }, (k, D) => {
      const T = D + 1;
      return C.add({ days: T });
    });
    p.push(...$);
  }
  const m = f.concat(s, p), v = Tg(m, 7);
  return {
    value: t,
    cells: m,
    rows: v
  };
}
function Dn(e) {
  const { numberOfMonths: t, dateObj: n, ...a } = e, o = [];
  if (!t || t === 1)
    return o.push(
      oi({
        ...a,
        dateObj: n
      })
    ), o;
  o.push(
    oi({
      ...a,
      dateObj: n
    })
  );
  for (let r = 1; r < t; r++) {
    const s = n.add({ months: r });
    o.push(
      oi({
        ...a,
        dateObj: s
      })
    );
  }
  return o;
}
const Fg = ["top", "right", "bottom", "left"], bn = Math.min, et = Math.max, Pr = Math.round, Jo = Math.floor, Et = (e) => ({
  x: e,
  y: e
}), Vg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ng = {
  start: "end",
  end: "start"
};
function Pi(e, t, n) {
  return et(e, bn(t, n));
}
function nn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function an(e) {
  return e.split("-")[0];
}
function Oa(e) {
  return e.split("-")[1];
}
function Fl(e) {
  return e === "x" ? "y" : "x";
}
function Vl(e) {
  return e === "y" ? "height" : "width";
}
function _n(e) {
  return ["top", "bottom"].includes(an(e)) ? "y" : "x";
}
function Nl(e) {
  return Fl(_n(e));
}
function Lg(e, t, n) {
  n === void 0 && (n = !1);
  const a = Oa(e), o = Nl(e), r = Vl(o);
  let s = o === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = Rr(s)), [s, Rr(s)];
}
function zg(e) {
  const t = Rr(e);
  return [Ri(e), t, Ri(t)];
}
function Ri(e) {
  return e.replace(/start|end/g, (t) => Ng[t]);
}
function Ug(e, t, n) {
  const a = ["left", "right"], o = ["right", "left"], r = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : a : t ? a : o;
    case "left":
    case "right":
      return t ? r : s;
    default:
      return [];
  }
}
function Hg(e, t, n, a) {
  const o = Oa(e);
  let r = Ug(an(e), n === "start", a);
  return o && (r = r.map((s) => s + "-" + o), t && (r = r.concat(r.map(Ri)))), r;
}
function Rr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Vg[t]);
}
function Wg(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Yf(e) {
  return typeof e != "number" ? Wg(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ir(e) {
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
function hc(e, t, n) {
  let {
    reference: a,
    floating: o
  } = e;
  const r = _n(t), s = Nl(t), i = Vl(s), u = an(t), c = r === "y", d = a.x + a.width / 2 - o.width / 2, f = a.y + a.height / 2 - o.height / 2, p = a[i] / 2 - o[i] / 2;
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
  switch (Oa(t)) {
    case "start":
      h[s] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const Yg = async (e, t, n) => {
  const {
    placement: a = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: s
  } = n, i = r.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = hc(c, a, u), p = a, h = {}, m = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: b,
      fn: C
    } = i[v], {
      x: $,
      y: k,
      data: D,
      reset: T
    } = await C({
      x: d,
      y: f,
      initialPlacement: a,
      placement: p,
      strategy: o,
      middlewareData: h,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = $ ?? d, f = k ?? f, h = {
      ...h,
      [b]: {
        ...h[b],
        ...D
      }
    }, T && m <= 50 && (m++, typeof T == "object" && (T.placement && (p = T.placement), T.rects && (c = T.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : T.rects), {
      x: d,
      y: f
    } = hc(c, p, u)), v = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function yo(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: a,
    y: o,
    platform: r,
    rects: s,
    elements: i,
    strategy: u
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = nn(t, e), m = Yf(h), b = i[p ? f === "floating" ? "reference" : "floating" : f], C = Ir(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(b))) == null || n ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: u
  })), $ = f === "floating" ? {
    x: a,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, k = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), D = await (r.isElement == null ? void 0 : r.isElement(k)) ? await (r.getScale == null ? void 0 : r.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = Ir(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: $,
    offsetParent: k,
    strategy: u
  }) : $);
  return {
    top: (C.top - T.top + m.top) / D.y,
    bottom: (T.bottom - C.bottom + m.bottom) / D.y,
    left: (C.left - T.left + m.left) / D.x,
    right: (T.right - C.right + m.right) / D.x
  };
}
const Kg = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: a,
      placement: o,
      rects: r,
      platform: s,
      elements: i,
      middlewareData: u
    } = t, {
      element: c,
      padding: d = 0
    } = nn(e, t) || {};
    if (c == null)
      return {};
    const f = Yf(d), p = {
      x: n,
      y: a
    }, h = Nl(o), m = Vl(h), v = await s.getDimensions(c), b = h === "y", C = b ? "top" : "left", $ = b ? "bottom" : "right", k = b ? "clientHeight" : "clientWidth", D = r.reference[m] + r.reference[h] - p[h] - r.floating[m], T = p[h] - r.reference[h], A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let M = A ? A[k] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(A))) && (M = i.floating[k] || r.floating[m]);
    const N = D / 2 - T / 2, V = M / 2 - v[m] / 2 - 1, B = bn(f[C], V), E = bn(f[$], V), I = B, Y = M - v[m] - E, q = M / 2 - v[m] / 2 + N, W = Pi(I, q, Y), Q = !u.arrow && Oa(o) != null && q !== W && r.reference[m] / 2 - (q < I ? B : E) - v[m] / 2 < 0, ie = Q ? q < I ? q - I : q - Y : 0;
    return {
      [h]: p[h] + ie,
      data: {
        [h]: W,
        centerOffset: q - W - ie,
        ...Q && {
          alignmentOffset: ie
        }
      },
      reset: Q
    };
  }
}), jg = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, a;
      const {
        placement: o,
        middlewareData: r,
        rects: s,
        initialPlacement: i,
        platform: u,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: v = !0,
        ...b
      } = nn(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const C = an(o), $ = _n(i), k = an(i) === i, D = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), T = p || (k || !v ? [Rr(i)] : zg(i)), A = m !== "none";
      !p && A && T.push(...Hg(i, v, m, D));
      const M = [i, ...T], N = await yo(t, b), V = [];
      let B = ((a = r.flip) == null ? void 0 : a.overflows) || [];
      if (d && V.push(N[C]), f) {
        const q = Lg(o, s, D);
        V.push(N[q[0]], N[q[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: V
      }], !V.every((q) => q <= 0)) {
        var E, I;
        const q = (((E = r.flip) == null ? void 0 : E.index) || 0) + 1, W = M[q];
        if (W)
          return {
            data: {
              index: q,
              overflows: B
            },
            reset: {
              placement: W
            }
          };
        let Q = (I = B.filter((ie) => ie.overflows[0] <= 0).sort((ie, me) => ie.overflows[1] - me.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!Q)
          switch (h) {
            case "bestFit": {
              var Y;
              const ie = (Y = B.filter((me) => {
                if (A) {
                  const ve = _n(me.placement);
                  return ve === $ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ve === "y";
                }
                return !0;
              }).map((me) => [me.placement, me.overflows.filter((ve) => ve > 0).reduce((ve, ze) => ve + ze, 0)]).sort((me, ve) => me[1] - ve[1])[0]) == null ? void 0 : Y[0];
              ie && (Q = ie);
              break;
            }
            case "initialPlacement":
              Q = i;
              break;
          }
        if (o !== Q)
          return {
            reset: {
              placement: Q
            }
          };
      }
      return {};
    }
  };
};
function vc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function mc(e) {
  return Fg.some((t) => e[t] >= 0);
}
const Gg = function(e) {
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
          const r = await yo(t, {
            ...o,
            elementContext: "reference"
          }), s = vc(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: mc(s)
            }
          };
        }
        case "escaped": {
          const r = await yo(t, {
            ...o,
            altBoundary: !0
          }), s = vc(r, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: mc(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function qg(e, t) {
  const {
    placement: n,
    platform: a,
    elements: o
  } = e, r = await (a.isRTL == null ? void 0 : a.isRTL(o.floating)), s = an(n), i = Oa(n), u = _n(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, d = r && u ? -1 : 1, f = nn(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: m
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof m == "number" && (h = i === "end" ? m * -1 : m), u ? {
    x: h * d,
    y: p * c
  } : {
    x: p * c,
    y: h * d
  };
}
const Xg = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, a;
      const {
        x: o,
        y: r,
        placement: s,
        middlewareData: i
      } = t, u = await qg(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (a = i.arrow) != null && a.alignmentOffset ? {} : {
        x: o + u.x,
        y: r + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, Zg = function(e) {
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
        crossAxis: s = !1,
        limiter: i = {
          fn: (b) => {
            let {
              x: C,
              y: $
            } = b;
            return {
              x: C,
              y: $
            };
          }
        },
        ...u
      } = nn(e, t), c = {
        x: n,
        y: a
      }, d = await yo(t, u), f = _n(an(o)), p = Fl(f);
      let h = c[p], m = c[f];
      if (r) {
        const b = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", $ = h + d[b], k = h - d[C];
        h = Pi($, h, k);
      }
      if (s) {
        const b = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", $ = m + d[b], k = m - d[C];
        m = Pi($, m, k);
      }
      const v = i.fn({
        ...t,
        [p]: h,
        [f]: m
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - a,
          enabled: {
            [p]: r,
            [f]: s
          }
        }
      };
    }
  };
}, Jg = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: a,
        placement: o,
        rects: r,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: c = !0
      } = nn(e, t), d = {
        x: n,
        y: a
      }, f = _n(o), p = Fl(f);
      let h = d[p], m = d[f];
      const v = nn(i, t), b = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (u) {
        const k = p === "y" ? "height" : "width", D = r.reference[p] - r.floating[k] + b.mainAxis, T = r.reference[p] + r.reference[k] - b.mainAxis;
        h < D ? h = D : h > T && (h = T);
      }
      if (c) {
        var C, $;
        const k = p === "y" ? "width" : "height", D = ["top", "left"].includes(an(o)), T = r.reference[f] - r.floating[k] + (D && ((C = s.offset) == null ? void 0 : C[f]) || 0) + (D ? 0 : b.crossAxis), A = r.reference[f] + r.reference[k] + (D ? 0 : (($ = s.offset) == null ? void 0 : $[f]) || 0) - (D ? b.crossAxis : 0);
        m < T ? m = T : m > A && (m = A);
      }
      return {
        [p]: h,
        [f]: m
      };
    }
  };
}, Qg = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, a;
      const {
        placement: o,
        rects: r,
        platform: s,
        elements: i
      } = t, {
        apply: u = () => {
        },
        ...c
      } = nn(e, t), d = await yo(t, c), f = an(o), p = Oa(o), h = _n(o) === "y", {
        width: m,
        height: v
      } = r.floating;
      let b, C;
      f === "top" || f === "bottom" ? (b = f, C = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = f, b = p === "end" ? "top" : "bottom");
      const $ = v - d.top - d.bottom, k = m - d.left - d.right, D = bn(v - d[b], $), T = bn(m - d[C], k), A = !t.middlewareData.shift;
      let M = D, N = T;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = k), (a = t.middlewareData.shift) != null && a.enabled.y && (M = $), A && !p) {
        const B = et(d.left, 0), E = et(d.right, 0), I = et(d.top, 0), Y = et(d.bottom, 0);
        h ? N = m - 2 * (B !== 0 || E !== 0 ? B + E : et(d.left, d.right)) : M = v - 2 * (I !== 0 || Y !== 0 ? I + Y : et(d.top, d.bottom));
      }
      await u({
        ...t,
        availableWidth: N,
        availableHeight: M
      });
      const V = await s.getDimensions(i.floating);
      return m !== V.width || v !== V.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function vs() {
  return typeof window < "u";
}
function jn(e) {
  return Ll(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function at(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Vt(e) {
  var t;
  return (t = (Ll(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ll(e) {
  return vs() ? e instanceof Node || e instanceof at(e).Node : !1;
}
function bt(e) {
  return vs() ? e instanceof Element || e instanceof at(e).Element : !1;
}
function It(e) {
  return vs() ? e instanceof HTMLElement || e instanceof at(e).HTMLElement : !1;
}
function gc(e) {
  return !vs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot;
}
function Po(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: a,
    display: o
  } = _t(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !["inline", "contents"].includes(o);
}
function ey(e) {
  return ["table", "td", "th"].includes(jn(e));
}
function ms(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function zl(e) {
  const t = Ul(), n = bt(e) ? _t(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((a) => (n.willChange || "").includes(a)) || ["paint", "layout", "strict", "content"].some((a) => (n.contain || "").includes(a));
}
function ty(e) {
  let t = wn(e);
  for (; It(t) && !ba(t); ) {
    if (zl(t))
      return t;
    if (ms(t))
      return null;
    t = wn(t);
  }
  return null;
}
function Ul() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ba(e) {
  return ["html", "body", "#document"].includes(jn(e));
}
function _t(e) {
  return at(e).getComputedStyle(e);
}
function gs(e) {
  return bt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function wn(e) {
  if (jn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    gc(e) && e.host || // Fallback.
    Vt(e)
  );
  return gc(t) ? t.host : t;
}
function Kf(e) {
  const t = wn(e);
  return ba(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : It(t) && Po(t) ? t : Kf(t);
}
function bo(e, t, n) {
  var a;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Kf(e), r = o === ((a = e.ownerDocument) == null ? void 0 : a.body), s = at(o);
  if (r) {
    const i = Ii(s);
    return t.concat(s, s.visualViewport || [], Po(o) ? o : [], i && n ? bo(i) : []);
  }
  return t.concat(o, bo(o, [], n));
}
function Ii(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function jf(e) {
  const t = _t(e);
  let n = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
  const o = It(e), r = o ? e.offsetWidth : n, s = o ? e.offsetHeight : a, i = Pr(n) !== r || Pr(a) !== s;
  return i && (n = r, a = s), {
    width: n,
    height: a,
    $: i
  };
}
function Hl(e) {
  return bt(e) ? e : e.contextElement;
}
function ia(e) {
  const t = Hl(e);
  if (!It(t))
    return Et(1);
  const n = t.getBoundingClientRect(), {
    width: a,
    height: o,
    $: r
  } = jf(t);
  let s = (r ? Pr(n.width) : n.width) / a, i = (r ? Pr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const ny = /* @__PURE__ */ Et(0);
function Gf(e) {
  const t = at(e);
  return !Ul() || !t.visualViewport ? ny : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ay(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== at(e) ? !1 : t;
}
function Un(e, t, n, a) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = Hl(e);
  let s = Et(1);
  t && (a ? bt(a) && (s = ia(a)) : s = ia(e));
  const i = ay(r, n, a) ? Gf(r) : Et(0);
  let u = (o.left + i.x) / s.x, c = (o.top + i.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (r) {
    const p = at(r), h = a && bt(a) ? at(a) : a;
    let m = p, v = Ii(m);
    for (; v && a && h !== m; ) {
      const b = ia(v), C = v.getBoundingClientRect(), $ = _t(v), k = C.left + (v.clientLeft + parseFloat($.paddingLeft)) * b.x, D = C.top + (v.clientTop + parseFloat($.paddingTop)) * b.y;
      u *= b.x, c *= b.y, d *= b.x, f *= b.y, u += k, c += D, m = at(v), v = Ii(m);
    }
  }
  return Ir({
    width: d,
    height: f,
    x: u,
    y: c
  });
}
function Wl(e, t) {
  const n = gs(e).scrollLeft;
  return t ? t.left + n : Un(Vt(e)).left + n;
}
function qf(e, t, n) {
  n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), o = a.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Wl(e, a)
  )), r = a.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function oy(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: a,
    strategy: o
  } = e;
  const r = o === "fixed", s = Vt(a), i = t ? ms(t.floating) : !1;
  if (a === s || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Et(1);
  const d = Et(0), f = It(a);
  if ((f || !f && !r) && ((jn(a) !== "body" || Po(s)) && (u = gs(a)), It(a))) {
    const h = Un(a);
    c = ia(a), d.x = h.x + a.clientLeft, d.y = h.y + a.clientTop;
  }
  const p = s && !f && !r ? qf(s, u, !0) : Et(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - u.scrollLeft * c.x + d.x + p.x,
    y: n.y * c.y - u.scrollTop * c.y + d.y + p.y
  };
}
function ry(e) {
  return Array.from(e.getClientRects());
}
function sy(e) {
  const t = Vt(e), n = gs(e), a = e.ownerDocument.body, o = et(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth), r = et(t.scrollHeight, t.clientHeight, a.scrollHeight, a.clientHeight);
  let s = -n.scrollLeft + Wl(e);
  const i = -n.scrollTop;
  return _t(a).direction === "rtl" && (s += et(t.clientWidth, a.clientWidth) - o), {
    width: o,
    height: r,
    x: s,
    y: i
  };
}
function iy(e, t) {
  const n = at(e), a = Vt(e), o = n.visualViewport;
  let r = a.clientWidth, s = a.clientHeight, i = 0, u = 0;
  if (o) {
    r = o.width, s = o.height;
    const c = Ul();
    (!c || c && t === "fixed") && (i = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: r,
    height: s,
    x: i,
    y: u
  };
}
function ly(e, t) {
  const n = Un(e, !0, t === "fixed"), a = n.top + e.clientTop, o = n.left + e.clientLeft, r = It(e) ? ia(e) : Et(1), s = e.clientWidth * r.x, i = e.clientHeight * r.y, u = o * r.x, c = a * r.y;
  return {
    width: s,
    height: i,
    x: u,
    y: c
  };
}
function yc(e, t, n) {
  let a;
  if (t === "viewport")
    a = iy(e, n);
  else if (t === "document")
    a = sy(Vt(e));
  else if (bt(t))
    a = ly(t, n);
  else {
    const o = Gf(e);
    a = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ir(a);
}
function Xf(e, t) {
  const n = wn(e);
  return n === t || !bt(n) || ba(n) ? !1 : _t(n).position === "fixed" || Xf(n, t);
}
function uy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let a = bo(e, [], !1).filter((i) => bt(i) && jn(i) !== "body"), o = null;
  const r = _t(e).position === "fixed";
  let s = r ? wn(e) : e;
  for (; bt(s) && !ba(s); ) {
    const i = _t(s), u = zl(s);
    !u && i.position === "fixed" && (o = null), (r ? !u && !o : !u && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Po(s) && !u && Xf(e, s)) ? a = a.filter((d) => d !== s) : o = i, s = wn(s);
  }
  return t.set(e, a), a;
}
function cy(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: a,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? ms(t) ? [] : uy(t, this._c) : [].concat(n), a], i = s[0], u = s.reduce((c, d) => {
    const f = yc(t, d, o);
    return c.top = et(f.top, c.top), c.right = bn(f.right, c.right), c.bottom = bn(f.bottom, c.bottom), c.left = et(f.left, c.left), c;
  }, yc(t, i, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function dy(e) {
  const {
    width: t,
    height: n
  } = jf(e);
  return {
    width: t,
    height: n
  };
}
function fy(e, t, n) {
  const a = It(t), o = Vt(t), r = n === "fixed", s = Un(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Et(0);
  if (a || !a && !r)
    if ((jn(t) !== "body" || Po(o)) && (i = gs(t)), a) {
      const p = Un(t, !0, r, t);
      u.x = p.x + t.clientLeft, u.y = p.y + t.clientTop;
    } else o && (u.x = Wl(o));
  const c = o && !a && !r ? qf(o, i) : Et(0), d = s.left + i.scrollLeft - u.x - c.x, f = s.top + i.scrollTop - u.y - c.y;
  return {
    x: d,
    y: f,
    width: s.width,
    height: s.height
  };
}
function ri(e) {
  return _t(e).position === "static";
}
function bc(e, t) {
  if (!It(e) || _t(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Vt(e) === n && (n = n.ownerDocument.body), n;
}
function Zf(e, t) {
  const n = at(e);
  if (ms(e))
    return n;
  if (!It(e)) {
    let o = wn(e);
    for (; o && !ba(o); ) {
      if (bt(o) && !ri(o))
        return o;
      o = wn(o);
    }
    return n;
  }
  let a = bc(e, t);
  for (; a && ey(a) && ri(a); )
    a = bc(a, t);
  return a && ba(a) && ri(a) && !zl(a) ? n : a || ty(e) || n;
}
const py = async function(e) {
  const t = this.getOffsetParent || Zf, n = this.getDimensions, a = await n(e.floating);
  return {
    reference: fy(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: a.width,
      height: a.height
    }
  };
};
function hy(e) {
  return _t(e).direction === "rtl";
}
const vy = {
  convertOffsetParentRelativeRectToViewportRelativeRect: oy,
  getDocumentElement: Vt,
  getClippingRect: cy,
  getOffsetParent: Zf,
  getElementRects: py,
  getClientRects: ry,
  getDimensions: dy,
  getScale: ia,
  isElement: bt,
  isRTL: hy
};
function my(e, t) {
  let n = null, a;
  const o = Vt(e);
  function r() {
    var i;
    clearTimeout(a), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), r();
    const {
      left: c,
      top: d,
      width: f,
      height: p
    } = e.getBoundingClientRect();
    if (i || t(), !f || !p)
      return;
    const h = Jo(d), m = Jo(o.clientWidth - (c + f)), v = Jo(o.clientHeight - (d + p)), b = Jo(c), $ = {
      rootMargin: -h + "px " + -m + "px " + -v + "px " + -b + "px",
      threshold: et(0, bn(1, u)) || 1
    };
    let k = !0;
    function D(T) {
      const A = T[0].intersectionRatio;
      if (A !== u) {
        if (!k)
          return s();
        A ? s(!1, A) : a = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      k = !1;
    }
    try {
      n = new IntersectionObserver(D, {
        ...$,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(D, $);
    }
    n.observe(e);
  }
  return s(!0), r;
}
function gy(e, t, n, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: r = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = a, c = Hl(e), d = o || r ? [...c ? bo(c) : [], ...bo(t)] : [];
  d.forEach((C) => {
    o && C.addEventListener("scroll", n, {
      passive: !0
    }), r && C.addEventListener("resize", n);
  });
  const f = c && i ? my(c, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((C) => {
    let [$] = C;
    $ && $.target === c && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var k;
      (k = h) == null || k.observe(t);
    })), n();
  }), c && !u && h.observe(c), h.observe(t));
  let m, v = u ? Un(e) : null;
  u && b();
  function b() {
    const C = Un(e);
    v && (C.x !== v.x || C.y !== v.y || C.width !== v.width || C.height !== v.height) && n(), v = C, m = requestAnimationFrame(b);
  }
  return n(), () => {
    var C;
    d.forEach(($) => {
      o && $.removeEventListener("scroll", n), r && $.removeEventListener("resize", n);
    }), f == null || f(), (C = h) == null || C.disconnect(), h = null, u && cancelAnimationFrame(m);
  };
}
const yy = Xg, by = Zg, _c = jg, _y = Qg, wy = Gg, xy = Kg, Cy = Jg, ky = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), o = {
    platform: vy,
    ...n
  }, r = {
    ...o.platform,
    _c: a
  };
  return Yg(e, t, {
    ...o,
    platform: r
  });
};
function $y(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Fi(e) {
  if ($y(e)) {
    const t = e.$el;
    return Ll(t) && jn(t) === "#comment" ? null : t;
  }
  return e;
}
function sa(e) {
  return typeof e == "function" ? e() : l(e);
}
function Sy(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Fi(sa(e.element));
      return n == null ? {} : xy({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Jf(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function wc(e, t) {
  const n = Jf(e);
  return Math.round(t * n) / n;
}
function Ty(e, t, n) {
  n === void 0 && (n = {});
  const a = n.whileElementsMounted, o = S(() => {
    var M;
    return (M = sa(n.open)) != null ? M : !0;
  }), r = S(() => sa(n.middleware)), s = S(() => {
    var M;
    return (M = sa(n.placement)) != null ? M : "bottom";
  }), i = S(() => {
    var M;
    return (M = sa(n.strategy)) != null ? M : "absolute";
  }), u = S(() => {
    var M;
    return (M = sa(n.transform)) != null ? M : !0;
  }), c = S(() => Fi(e.value)), d = S(() => Fi(t.value)), f = R(0), p = R(0), h = R(i.value), m = R(s.value), v = $l({}), b = R(!1), C = S(() => {
    const M = {
      position: h.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return M;
    const N = wc(d.value, f.value), V = wc(d.value, p.value);
    return u.value ? {
      ...M,
      transform: "translate(" + N + "px, " + V + "px)",
      ...Jf(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: h.value,
      left: N + "px",
      top: V + "px"
    };
  });
  let $;
  function k() {
    if (c.value == null || d.value == null)
      return;
    const M = o.value;
    ky(c.value, d.value, {
      middleware: r.value,
      placement: s.value,
      strategy: i.value
    }).then((N) => {
      f.value = N.x, p.value = N.y, h.value = N.strategy, m.value = N.placement, v.value = N.middlewareData, b.value = M !== !1;
    });
  }
  function D() {
    typeof $ == "function" && ($(), $ = void 0);
  }
  function T() {
    if (D(), a === void 0) {
      k();
      return;
    }
    if (c.value != null && d.value != null) {
      $ = a(c.value, d.value, k);
      return;
    }
  }
  function A() {
    o.value || (b.value = !1);
  }
  return te([r, s, i, o], k, {
    flush: "sync"
  }), te([c, d], T, {
    flush: "sync"
  }), te(o, A, {
    flush: "sync"
  }), Sl() && Tl(D), {
    x: aa(f),
    y: aa(p),
    strategy: aa(h),
    placement: aa(m),
    middlewareData: aa(v),
    isPositioned: aa(b),
    floatingStyles: C,
    update: k
  };
}
function de(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(o) => {
    const r = Aa(a, o);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (Bn(a, o), o)];
}
function Yl(e, t, n) {
  const a = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
function Fr(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(e, t), n);
}
function Dy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var My = function e(t, n) {
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
      var s = r[o];
      if (!e(t[s], n[s])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const An = /* @__PURE__ */ Dy(My);
function yr(e) {
  return e == null;
}
function Qf(e) {
  const { defaultValue: t, defaultPlaceholder: n, granularity: a = "day" } = e;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (n)
    return n.copy();
  const o = /* @__PURE__ */ new Date(), r = o.getFullYear(), s = o.getMonth() + 1, i = o.getDate();
  return ["hour", "minute", "second"].includes(a ?? "day") ? new ga(r, s, i, 0, 0, 0) : new ma(r, s, i);
}
function ep(e) {
  const t = e.querySelector("[data-selected]");
  if (t)
    return t.focus();
  const n = e.querySelector("[data-today]");
  if (n)
    return n.focus();
  const a = e.querySelector("[data-radix-vue-calendar-day]");
  if (a)
    return a.focus();
}
function By(e, t) {
  var n;
  const a = $l();
  return De(() => {
    a.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Eo(a);
}
function Gn(e) {
  return Sl() ? (Tl(e), !0) : !1;
}
function Ay() {
  const e = /* @__PURE__ */ new Set(), t = (n) => {
    e.delete(n);
  };
  return {
    on: (n) => {
      e.add(n);
      const a = () => t(n);
      return Gn(a), {
        off: a
      };
    },
    off: t,
    trigger: (...n) => Promise.all(Array.from(e).map((a) => a(...n)))
  };
}
function Oy(e) {
  let t = !1, n;
  const a = wf(!0);
  return (...o) => (t || (n = a.run(() => e(...o)), t = !0), n);
}
function tp(e) {
  let t = 0, n, a;
  const o = () => {
    t -= 1, a && t <= 0 && (a.stop(), n = void 0, a = void 0);
  };
  return (...r) => (t += 1, n || (a = wf(!0), n = a.run(() => e(...r))), Gn(o), n);
}
function tn(e) {
  return typeof e == "function" ? e() : l(e);
}
const Nt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ey = (e) => typeof e < "u", Py = (e) => e != null, Ry = Object.prototype.toString, Iy = (e) => Ry.call(e) === "[object Object]", np = () => {
}, xc = /* @__PURE__ */ Fy();
function Fy() {
  var e, t;
  return Nt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Vy(e) {
  return wt();
}
function ap(e, t = 1e4) {
  return xf((n, a) => {
    let o = tn(e), r;
    const s = () => setTimeout(() => {
      o = tn(e), a();
    }, tn(t));
    return Gn(() => {
      clearTimeout(r);
    }), {
      get() {
        return n(), o;
      },
      set(i) {
        o = i, a(), clearTimeout(r), r = s();
      }
    };
  });
}
function Ny(e, t) {
  Vy() && Bl(e, t);
}
function Kl(e, t, n = {}) {
  const {
    immediate: a = !0
  } = n, o = R(!1);
  let r = null;
  function s() {
    r && (clearTimeout(r), r = null);
  }
  function i() {
    o.value = !1, s();
  }
  function u(...c) {
    s(), o.value = !0, r = setTimeout(() => {
      o.value = !1, r = null, e(...c);
    }, tn(t));
  }
  return a && (o.value = !0, Nt && u()), Gn(i), {
    isPending: Eo(o),
    start: u,
    stop: i
  };
}
function Ly(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: a
  } = t, o = Kl(
    a ?? np,
    e,
    t
  ), r = S(() => !o.isPending.value);
  return n ? {
    ready: r,
    ...o
  } : r;
}
function dt(e) {
  var t;
  const n = tn(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ys = Nt ? window : void 0;
function _a(...e) {
  let t, n, a, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, a, o] = e, t = ys) : [t, n, a, o] = e, !t)
    return np;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const r = [], s = () => {
    r.forEach((d) => d()), r.length = 0;
  }, i = (d, f, p, h) => (d.addEventListener(f, p, h), () => d.removeEventListener(f, p, h)), u = te(
    () => [dt(t), tn(o)],
    ([d, f]) => {
      if (s(), !d)
        return;
      const p = Iy(f) ? { ...f } : f;
      r.push(
        ...n.flatMap((h) => a.map((m) => i(d, h, m, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), s();
  };
  return Gn(c), c;
}
function zy(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function jl(...e) {
  let t, n, a = {};
  e.length === 3 ? (t = e[0], n = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], a = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = ys,
    eventName: r = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = a, u = zy(t);
  return _a(o, r, (c) => {
    c.repeat && tn(i) || u(c) && n(c);
  }, s);
}
function Gl() {
  const e = R(!1), t = wt();
  return t && pe(() => {
    e.value = !0;
  }, t), e;
}
function Uy(e) {
  const t = Gl();
  return S(() => (t.value, !!e()));
}
function Hy(e, t, n = {}) {
  const { window: a = ys, ...o } = n;
  let r;
  const s = Uy(() => a && "MutationObserver" in a), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = S(() => {
    const p = tn(e), h = (Array.isArray(p) ? p : [p]).map(dt).filter(Py);
    return new Set(h);
  }), c = te(
    () => u.value,
    (p) => {
      i(), s.value && p.size && (r = new MutationObserver(t), p.forEach((h) => r.observe(h, o)));
    },
    { immediate: !0, flush: "post" }
  ), d = () => r == null ? void 0 : r.takeRecords(), f = () => {
    i(), c();
  };
  return Gn(f), {
    isSupported: s,
    stop: f,
    takeRecords: d
  };
}
function op(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: a = void 0,
    window: o = ys
  } = t, r = R(!1), s = a ? 1e3 / a : null;
  let i = 0, u = null;
  function c(p) {
    if (!r.value || !o)
      return;
    i || (i = p);
    const h = p - i;
    if (s && h < s) {
      u = o.requestAnimationFrame(c);
      return;
    }
    i = p, e({ delta: h, timestamp: p }), u = o.requestAnimationFrame(c);
  }
  function d() {
    !r.value && o && (r.value = !0, i = 0, u = o.requestAnimationFrame(c));
  }
  function f() {
    r.value = !1, u != null && o && (o.cancelAnimationFrame(u), u = null);
  }
  return n && d(), Gn(f), {
    isActive: Eo(r),
    pause: f,
    resume: d
  };
}
function Wy(e) {
  return JSON.parse(JSON.stringify(e));
}
function xe(e, t, n, a = {}) {
  var o, r, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, h = wt(), m = n || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((s = (r = h == null ? void 0 : h.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let v = c;
  t || (t = "modelValue"), v = v || `update:${t.toString()}`;
  const b = (k) => i ? typeof i == "function" ? i(k) : Wy(k) : k, C = () => Ey(e[t]) ? b(e[t]) : f, $ = (k) => {
    p ? p(k) && m(v, k) : m(v, k);
  };
  if (u) {
    const k = C(), D = R(k);
    let T = !1;
    return te(
      () => e[t],
      (A) => {
        T || (T = !0, D.value = b(A), se(() => T = !1));
      }
    ), te(
      D,
      (A) => {
        !T && (A !== e[t] || d) && $(A);
      },
      { deep: d }
    ), D;
  } else
    return S({
      get() {
        return C();
      },
      set(k) {
        $(k);
      }
    });
}
function bs(e) {
  return e ? e.flatMap((t) => t.type === re ? bs(t.children) : [t]) : [];
}
const Yy = ["INPUT", "TEXTAREA"];
function rp(e, t, n, a = {}) {
  if (!t || a.enableIgnoredElement && Yy.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: s = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: c = !0,
    focus: d = !1
  } = a, [f, p, h, m, v, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = h || m, $ = f || p;
  if (!v && !b && (!C && !$ || o === "vertical" && $ || o === "horizontal" && C))
    return null;
  const k = n ? Array.from(n.querySelectorAll(r)) : s;
  if (!k.length)
    return null;
  c && e.preventDefault();
  let D = null;
  return $ || C ? D = sp(k, t, {
    goForward: C ? m : u === "ltr" ? f : p,
    loop: i
  }) : v ? D = k.at(0) || null : b && (D = k.at(-1) || null), d && (D == null || D.focus()), D;
}
function sp(e, t, n, a = e.length) {
  if (--a === 0)
    return null;
  const o = e.indexOf(t), r = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const s = (r + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? sp(
    e,
    i,
    n,
    a
  ) : i : null;
}
function si(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Vi(e, t, n = ".", a) {
  if (!si(t))
    return Vi(e, {}, n);
  const o = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const s = e[r];
    s != null && (Array.isArray(s) && Array.isArray(o[r]) ? o[r] = [...s, ...o[r]] : si(s) && si(o[r]) ? o[r] = Vi(
      s,
      o[r],
      (n ? `${n}.` : "") + r.toString()
    ) : o[r] = s);
  }
  return o;
}
function Ky(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, a) => Vi(n, a, ""), {})
  );
}
const jy = Ky(), [_s, tP] = de("ConfigProvider");
let Gy = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", qy = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Gy[Math.random() * 64 | 0];
  return t;
};
const Xy = tp(() => {
  const e = R(/* @__PURE__ */ new Map()), t = R(), n = S(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), a = _s({
    scrollBody: R(!0)
  });
  let o = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", xc && (o == null || o()), t.value = void 0;
  };
  return te(n, (s, i) => {
    var u;
    if (!Nt)
      return;
    if (!s) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, d = { padding: c, margin: 0 }, f = (u = a.scrollBody) != null && u.value ? typeof a.scrollBody.value == "object" ? jy({
      padding: a.scrollBody.value.padding === !0 ? c : a.scrollBody.value.padding,
      margin: a.scrollBody.value.margin === !0 ? c : a.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof f.padding == "number" ? `${f.padding}px` : String(f.padding), document.body.style.marginRight = typeof f.margin == "number" ? `${f.margin}px` : String(f.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), xc && (o = _a(
      document,
      "touchmove",
      (p) => {
        var h;
        p.target === document.documentElement && (p.touches.length > 1 || (h = p.preventDefault) == null || h.call(p));
      },
      { passive: !1 }
    )), se(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Ro(e) {
  const t = qy(6), n = Xy();
  n.value.set(t, e ?? !1);
  const a = S({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return Ny(() => {
    n.value.delete(t);
  }), a;
}
const Zy = "data-radix-vue-collection-item";
function Ea(e, t = Zy) {
  const n = Symbol();
  return { createCollection: (a) => {
    const o = R([]);
    function r() {
      const s = dt(a);
      return s ? o.value = Array.from(
        s.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return Vm(() => {
      o.value = [];
    }), pe(r), Nm(r), te(() => a == null ? void 0 : a.value, r, { immediate: !0 }), Bn(n, o), o;
  }, injectCollection: () => Aa(n, R([])) };
}
function Jy(e) {
  const t = R(e);
  function n() {
    return t.value;
  }
  function a(v) {
    t.value = v;
  }
  function o(v, b) {
    return new Kt(t.value, b).format(v);
  }
  function r(v, b = !0) {
    return Mg(v) && b ? o(mt(v), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(mt(v), {
      dateStyle: "long"
    });
  }
  function s(v, b = {}) {
    return new Kt(t.value, { month: "long", year: "numeric", ...b }).format(v);
  }
  function i(v, b = {}) {
    return new Kt(t.value, { month: "long", ...b }).format(v);
  }
  function u() {
    const v = Of(Kn());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((b) => ({ label: i(mt(v.set({ month: b }))), value: b }));
  }
  function c(v, b = {}) {
    return new Kt(t.value, { year: "numeric", ...b }).format(v);
  }
  function d(v, b) {
    return Il(v) ? new Kt(t.value, {
      ...b,
      timeZone: v.timeZone
    }).formatToParts(mt(v)) : new Kt(t.value, b).formatToParts(mt(v));
  }
  function f(v, b = "narrow") {
    return new Kt(t.value, { weekday: b }).format(v);
  }
  function p(v) {
    var b;
    return ((b = new Kt(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(v).find((C) => C.type === "dayPeriod")) == null ? void 0 : b.value) === "PM" ? "PM" : "AM";
  }
  const h = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function m(v, b, C = {}) {
    const $ = { ...h, ...C }, k = d(v, $).find((D) => D.type === b);
    return k ? k.value : "";
  }
  return {
    setLocale: a,
    getLocale: n,
    fullMonth: i,
    fullYear: c,
    fullMonthAndYear: s,
    toParts: d,
    custom: o,
    part: m,
    dayPeriod: p,
    selectedDate: r,
    dayOfWeek: f,
    getMonths: u
  };
}
function Lt(e) {
  const t = _s({
    dir: R("ltr")
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function qn(e) {
  const t = wt(), n = t == null ? void 0 : t.type.emits, a = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    a[Im(Or(o))] = (...r) => e(o, ...r);
  }), a;
}
let ii = 0;
function ql() {
  De((e) => {
    if (!Nt)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Cc()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Cc()
    ), ii++, e(() => {
      ii === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), ii--;
    });
  });
}
function Cc() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function Io(e) {
  return S(() => {
    var t;
    return tn(e) ? !!((t = dt(e)) != null && t.closest("form")) : !0;
  });
}
function he(e) {
  const t = wt(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, r) => {
    const s = (t == null ? void 0 : t.type.props[r]).default;
    return s !== void 0 && (o[r] = s), o;
  }, {}), a = yf(e);
  return S(() => {
    const o = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((s) => {
      o[Or(s)] = r[s];
    }), Object.keys({ ...n, ...o }).reduce((s, i) => (a.value[i] !== void 0 && (s[i] = a.value[i]), s), {});
  });
}
function le(e, t) {
  const n = he(e), a = t ? qn(t) : {};
  return S(() => ({
    ...n.value,
    ...a
  }));
}
function H() {
  const e = wt(), t = R(), n = S(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : dt(t);
  }), a = Object.assign({}, e.exposed), o = {};
  for (const s in e.props)
    Object.defineProperty(o, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s]
    });
  if (Object.keys(a).length > 0)
    for (const s in a)
      Object.defineProperty(o, s, {
        enumerable: !0,
        configurable: !0,
        get: () => a[s]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function r(s) {
    t.value = s, !(s instanceof Element || !s) && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s.$el
    }), e.exposed = o);
  }
  return { forwardRef: r, currentRef: t, currentElement: n };
}
function Qy(e, t) {
  const n = ap(!1, 300), a = R(null), o = Ay();
  function r() {
    a.value = null, n.value = !1;
  }
  function s(i, u) {
    const c = i.currentTarget, d = { x: i.clientX, y: i.clientY }, f = e0(d, c.getBoundingClientRect()), p = t0(d, f), h = n0(u.getBoundingClientRect()), m = o0([...p, ...h]);
    a.value = m, n.value = !0;
  }
  return De((i) => {
    if (e.value && t.value) {
      const u = (d) => s(d, t.value), c = (d) => s(d, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", c), i(() => {
        var d, f;
        (d = e.value) == null || d.removeEventListener("pointerleave", u), (f = t.value) == null || f.removeEventListener("pointerleave", c);
      });
    }
  }), De((i) => {
    var u;
    if (a.value) {
      const c = (d) => {
        var f, p;
        if (!a.value)
          return;
        const h = d.target, m = { x: d.clientX, y: d.clientY }, v = ((f = e.value) == null ? void 0 : f.contains(h)) || ((p = t.value) == null ? void 0 : p.contains(h)), b = !a0(m, a.value), C = h.hasAttribute("data-grace-area-trigger");
        v ? r() : (b || C) && (r(), o.trigger());
      };
      (u = e.value) == null || u.ownerDocument.addEventListener("pointermove", c), i(() => {
        var d;
        return (d = e.value) == null ? void 0 : d.ownerDocument.removeEventListener("pointermove", c);
      });
    }
  }), {
    isPointerInTransit: n,
    onPointerExit: o.on
  };
}
function e0(e, t) {
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
function t0(e, t, n = 5) {
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
function n0(e) {
  const { top: t, right: n, bottom: a, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: a },
    { x: o, y: a }
  ];
}
function a0(e, t) {
  const { x: n, y: a } = e;
  let o = !1;
  for (let r = 0, s = t.length - 1; r < t.length; s = r++) {
    const i = t[r].x, u = t[r].y, c = t[s].x, d = t[s].y;
    u > a != d > a && n < (c - i) * (a - u) / (d - u) + i && (o = !o);
  }
  return o;
}
function o0(e) {
  const t = e.slice();
  return t.sort((n, a) => n.x < a.x ? -1 : n.x > a.x ? 1 : n.y < a.y ? -1 : n.y > a.y ? 1 : 0), r0(t);
}
function r0(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    for (; t.length >= 2; ) {
      const r = t[t.length - 1], s = t[t.length - 2];
      if ((r.x - s.x) * (o.y - s.y) >= (r.y - s.y) * (o.x - s.x))
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
      const r = n[n.length - 1], s = n[n.length - 2];
      if ((r.x - s.x) * (o.y - s.y) >= (r.y - s.y) * (o.x - s.x))
        n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var s0 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, oa = /* @__PURE__ */ new WeakMap(), Qo = /* @__PURE__ */ new WeakMap(), er = {}, li = 0, ip = function(e) {
  return e && (e.host || ip(e.parentNode));
}, i0 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var a = ip(n);
    return a && e.contains(a) ? a : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, l0 = function(e, t, n, a) {
  var o = i0(t, Array.isArray(e) ? e : [e]);
  er[n] || (er[n] = /* @__PURE__ */ new WeakMap());
  var r = er[n], s = [], i = /* @__PURE__ */ new Set(), u = new Set(o), c = function(f) {
    !f || i.has(f) || (i.add(f), c(f.parentNode));
  };
  o.forEach(c);
  var d = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        d(p);
      else
        try {
          var h = p.getAttribute(a), m = h !== null && h !== "false", v = (oa.get(p) || 0) + 1, b = (r.get(p) || 0) + 1;
          oa.set(p, v), r.set(p, b), s.push(p), v === 1 && m && Qo.set(p, !0), b === 1 && p.setAttribute(n, "true"), m || p.setAttribute(a, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", p, C);
        }
    });
  };
  return d(t), i.clear(), li++, function() {
    s.forEach(function(f) {
      var p = oa.get(f) - 1, h = r.get(f) - 1;
      oa.set(f, p), r.set(f, h), p || (Qo.has(f) || f.removeAttribute(a), Qo.delete(f)), h || f.removeAttribute(n);
    }), li--, li || (oa = /* @__PURE__ */ new WeakMap(), oa = /* @__PURE__ */ new WeakMap(), Qo = /* @__PURE__ */ new WeakMap(), er = {});
  };
}, u0 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var a = Array.from(Array.isArray(e) ? e : [e]), o = s0(e);
  return o ? (a.push.apply(a, Array.from(o.querySelectorAll("[aria-live]"))), l0(a, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function Fo(e) {
  let t;
  te(() => dt(e), (n) => {
    n ? t = u0(n) : t && t();
  }), Je(() => {
    t && t();
  });
}
let c0 = 0;
function Ee(e, t = "radix") {
  const n = _s({ useId: void 0 });
  return rc.useId ? `${t}-${rc.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++c0}`;
}
function lp(e) {
  const t = R(), n = S(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), a = S(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return pe(() => {
    const o = dt(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const r = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let u, c;
        if ("borderBoxSize" in i) {
          const d = i.borderBoxSize, f = Array.isArray(d) ? d[0] : d;
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
function d0(e, t) {
  const n = R(e);
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
function Xl(e) {
  const t = ap("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, a) => {
      var o, r;
      if (!(e != null && e.value) && !a)
        return;
      t.value = t.value + n;
      const s = (e == null ? void 0 : e.value) ?? a, i = document.activeElement, u = ((r = (o = s.find((p) => p === i)) == null ? void 0 : o.textContent) == null ? void 0 : r.trim()) ?? "", c = s.map((p) => {
        var h;
        return ((h = p.textContent) == null ? void 0 : h.trim()) ?? "";
      }), d = p0(c, t.value, u), f = s.find(
        (p) => {
          var h;
          return ((h = p.textContent) == null ? void 0 : h.trim()) === d;
        }
      );
      return f && f.focus(), f;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function f0(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
function p0(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = n ? e.indexOf(n) : -1;
  let r = f0(e, Math.max(o, 0));
  a.length === 1 && (r = r.filter((i) => i !== n));
  const s = r.find(
    (i) => i.toLowerCase().startsWith(a.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function up() {
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
const Zl = _({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var a, o;
      if (!n.default)
        return null;
      const r = bs(n.default()), s = r.findIndex((d) => d.type !== bf);
      if (s === -1)
        return r;
      const i = r[s];
      (a = i.props) == null || delete a.ref;
      const u = i.props ? P(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const c = Am(i, u);
      for (const d in u)
        d.startsWith("on") && (c.props || (c.props = {}), c.props[d] = u[d]);
      return r.length === 1 ? c : (r[s] = c, r);
    };
  }
}), z = _({
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
    return typeof a == "string" && ["area", "img", "input"].includes(a) ? () => Ot(a, t) : a !== "template" ? () => Ot(e.as, t, { default: n.default }) : () => Ot(Zl, t, { default: n.default });
  }
});
function Xn() {
  const e = R(), t = S(() => {
    var n, a;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (a = e.value) == null ? void 0 : a.$el.nextElementSibling : dt(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [cp, h0] = de("CollapsibleRoot"), v0 = /* @__PURE__ */ _({
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
    const a = e, o = xe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = xe(a, "disabled");
    return h0({
      contentId: "",
      disabled: r,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), t({ open: o }), H(), (s, i) => (g(), w(l(z), {
      as: s.as,
      "as-child": a.asChild,
      "data-state": l(o) ? "open" : "closed",
      "data-disabled": l(r) ? "" : void 0
    }, {
      default: y(() => [
        x(s.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), m0 = /* @__PURE__ */ _({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    H();
    const n = cp();
    return (a, o) => {
      var r, s;
      return g(), w(l(z), {
        type: a.as === "button" ? "button" : void 0,
        as: a.as,
        "as-child": t.asChild,
        "aria-controls": l(n).contentId,
        "aria-expanded": l(n).open.value,
        "data-state": l(n).open.value ? "open" : "closed",
        "data-disabled": (r = l(n).disabled) != null && r.value ? "" : void 0,
        disabled: (s = l(n).disabled) == null ? void 0 : s.value,
        onClick: l(n).onOpenToggle
      }, {
        default: y(() => [
          x(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function g0(e, t) {
  const n = R({}), a = R("none"), o = e.value ? "mounted" : "unmounted", { state: r, dispatch: s } = d0(o, {
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
  }), i = (p) => {
    var h;
    if (Nt) {
      const m = new CustomEvent(p, { bubbles: !1, cancelable: !1 });
      (h = t.value) == null || h.dispatchEvent(m);
    }
  };
  te(
    e,
    async (p, h) => {
      var m;
      const v = h !== p;
      if (await se(), v) {
        const b = a.value, C = tr(t.value);
        p ? (s("MOUNT"), i("enter"), C === "none" && i("after-enter")) : C === "none" || ((m = n.value) == null ? void 0 : m.display) === "none" ? (s("UNMOUNT"), i("leave"), i("after-leave")) : h && b !== C ? (s("ANIMATION_OUT"), i("leave")) : (s("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const u = (p) => {
    const h = tr(t.value), m = h.includes(
      p.animationName
    ), v = r.value === "mounted" ? "enter" : "leave";
    p.target === t.value && m && (i(`after-${v}`), s("ANIMATION_END")), p.target === t.value && h === "none" && s("ANIMATION_END");
  }, c = (p) => {
    p.target === t.value && (a.value = tr(t.value));
  }, d = te(
    t,
    (p, h) => {
      p ? (n.value = getComputedStyle(p), p.addEventListener("animationstart", c), p.addEventListener("animationcancel", u), p.addEventListener("animationend", u)) : (s("ANIMATION_END"), h == null || h.removeEventListener("animationstart", c), h == null || h.removeEventListener("animationcancel", u), h == null || h.removeEventListener("animationend", u));
    },
    { immediate: !0 }
  ), f = te(r, () => {
    const p = tr(t.value);
    a.value = r.value === "mounted" ? p : "none";
  });
  return Je(() => {
    d(), f();
  }), {
    isPresent: S(
      () => ["mounted", "unmountSuspended"].includes(r.value)
    )
  };
}
function tr(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const st = _({
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
    const { present: o, forceMount: r } = _e(e), s = R(), { isPresent: i } = g0(o, s);
    n({ present: i });
    let u = t.default({ present: i });
    u = bs(u || []);
    const c = wt();
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
    return () => r.value || o.value || i.value ? Ot(t.default({ present: i })[0], {
      ref: (d) => {
        const f = dt(d);
        return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-radix-popper-content-wrapper") ? s.value = f.firstElementChild : s.value = f), f;
      }
    }) : null;
  }
}), y0 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = cp();
    n.contentId || (n.contentId = Ee(void 0, "radix-vue-collapsible-content"));
    const a = R(), { forwardRef: o, currentElement: r } = H(), s = R(0), i = R(0), u = S(() => n.open.value), c = R(u.value), d = R();
    return te(
      () => {
        var f;
        return [u.value, (f = a.value) == null ? void 0 : f.present];
      },
      async () => {
        await se();
        const f = r.value;
        if (!f)
          return;
        d.value = d.value || {
          transitionDuration: f.style.transitionDuration,
          animationName: f.style.animationName
        }, f.style.transitionDuration = "0s", f.style.animationName = "none";
        const p = f.getBoundingClientRect();
        i.value = p.height, s.value = p.width, c.value || (f.style.transitionDuration = d.value.transitionDuration, f.style.animationName = d.value.animationName);
      },
      {
        immediate: !0
      }
    ), pe(() => {
      requestAnimationFrame(() => {
        c.value = !1;
      });
    }), (f, p) => (g(), w(l(st), {
      ref_key: "presentRef",
      ref: a,
      present: f.forceMount || l(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var h, m;
        return [
          O(l(z), P(f.$attrs, {
            id: l(n).contentId,
            ref: l(o),
            "as-child": t.asChild,
            as: f.as,
            "data-state": l(n).open.value ? "open" : "closed",
            "data-disabled": (h = l(n).disabled) != null && h.value ? "" : void 0,
            hidden: !((m = a.value) != null && m.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${s.value}px`
            }
          }), {
            default: y(() => {
              var v;
              return [
                (v = a.value) != null && v.present ? x(f.$slots, "default", { key: 0 }) : ne("", !0)
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
function dp({ type: e, defaultValue: t, modelValue: n }) {
  const a = n || t;
  if (yr(e) && yr(n) && yr(t))
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
    const r = Array.isArray(n) || Array.isArray(t), s = n !== void 0 ? "modelValue" : "defaultValue", i = s === "modelValue" ? typeof n : typeof t;
    if (e === "single" && r)
      return console.error(`Invalid prop \`${s}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${s} prop.`), "multiple";
    if (e === "multiple" && !r)
      return console.error(`Invalid prop \`${s}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${s} prop.`), "single";
  }
  return o ? Array.isArray(a) ? "multiple" : "single" : e;
}
function b0({ type: e, defaultValue: t, modelValue: n }) {
  return e || dp({ type: e, defaultValue: t, modelValue: n });
}
function _0({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function w0(e, t) {
  const n = R(b0(e)), a = xe(e, "modelValue", t, {
    defaultValue: _0(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  te(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const s = dp(e);
      n.value !== s && (n.value = s);
    },
    { immediate: !0 }
  );
  function o(s) {
    if (n.value === "single")
      a.value = s === a.value ? void 0 : s;
    else {
      const i = [...a.value || []];
      if (i.includes(s)) {
        const u = i.findIndex((c) => c === s);
        i.splice(u, 1);
      } else
        i.push(s);
      a.value = i;
    }
  }
  const r = S(() => n.value === "single");
  return {
    modelValue: a,
    type: n,
    changeModelValue: o,
    isSingle: r
  };
}
const [ws, x0] = de("AccordionRoot"), C0 = /* @__PURE__ */ _({
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
    const n = e, a = t, { dir: o, disabled: r } = _e(n), s = Lt(o), { modelValue: i, changeModelValue: u, isSingle: c } = w0(n, a), { forwardRef: d, currentElement: f } = H();
    return x0({
      disabled: r,
      direction: s,
      orientation: n.orientation,
      parentElement: f,
      isSingle: c,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (p, h) => (g(), w(l(z), {
      ref: l(d),
      "as-child": p.asChild,
      as: p.as
    }, {
      default: y(() => [
        x(p.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [Jl, k0] = de("AccordionItem"), $0 = /* @__PURE__ */ _({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, a = ws(), o = S(
      () => a.isSingle.value ? n.value === a.modelValue.value : Array.isArray(a.modelValue.value) && a.modelValue.value.includes(n.value)
    ), r = S(() => a.disabled.value || n.disabled || a.isSingle.value && o.value && !a.collapsible), s = S(() => r.value ? "" : void 0), i = S(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: o, dataDisabled: s });
    const { currentRef: u, currentElement: c } = H();
    k0({
      open: o,
      dataState: i,
      disabled: r,
      dataDisabled: s,
      triggerId: "",
      currentRef: u,
      currentElement: c,
      value: S(() => n.value)
    });
    function d(f) {
      rp(
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
    return (f, p) => (g(), w(l(v0), {
      "data-orientation": l(a).orientation,
      "data-disabled": s.value,
      "data-state": i.value,
      disabled: r.value,
      open: o.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: yt(d, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        x(f.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), S0 = /* @__PURE__ */ _({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ws(), a = Jl();
    return H(), (o, r) => (g(), w(l(y0), {
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
        x(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), T0 = /* @__PURE__ */ _({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = ws(), a = Jl();
    return H(), (o, r) => (g(), w(l(z), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": l(n).orientation,
      "data-state": l(a).dataState.value,
      "data-disabled": l(a).dataDisabled.value
    }, {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), D0 = /* @__PURE__ */ _({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ws(), a = Jl();
    a.triggerId || (a.triggerId = Ee(void 0, "radix-vue-accordion-trigger"));
    function o() {
      a.disabled.value || n.changeModelValue(a.value.value);
    }
    return (r, s) => (g(), w(l(m0), {
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
        x(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [zt, M0] = de("DialogRoot"), fp = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = xe(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), o = R(), r = R(), { modal: s } = _e(n);
    return M0({
      open: a,
      modal: s,
      openModal: () => {
        a.value = !0;
      },
      onOpenChange: (i) => {
        a.value = i;
      },
      onOpenToggle: () => {
        a.value = !a.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: o,
      contentElement: r
    }), (i, u) => x(i.$slots, "default", { open: l(a) });
  }
}), pp = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = zt(), { forwardRef: a, currentElement: o } = H();
    return n.contentId || (n.contentId = Ee(void 0, "radix-vue-dialog-content")), pe(() => {
      n.triggerElement.value = o.value;
    }), (r, s) => (g(), w(l(z), P(t, {
      ref: l(a),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": l(n).open.value || !1,
      "aria-controls": l(n).open.value ? l(n).contentId : void 0,
      "data-state": l(n).open.value ? "open" : "closed",
      onClick: l(n).onOpenToggle
    }), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Vo = /* @__PURE__ */ _({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Gl();
    return (n, a) => l(t) || n.forceMount ? (g(), w(ps, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      x(n.$slots, "default")
    ], 8, ["to", "disabled"])) : ne("", !0);
  }
}), Ql = /* @__PURE__ */ _({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Vo), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), B0 = "dismissableLayer.pointerDownOutside", A0 = "dismissableLayer.focusOutside";
function hp(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), a = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && a === n || o.indexOf(a) < o.indexOf(n));
}
function O0(e, t) {
  var n;
  const a = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = R(!1), r = R(() => {
  });
  return De((s) => {
    if (!Nt)
      return;
    const i = async (c) => {
      const d = c.target;
      if (t != null && t.value) {
        if (hp(t.value, d)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let f = function() {
            Yl(
              B0,
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
      a.addEventListener("pointerdown", i);
    }, 0);
    s(() => {
      window.clearTimeout(u), a.removeEventListener("pointerdown", i), a.removeEventListener("click", r.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function E0(e, t) {
  var n;
  const a = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = R(!1);
  return De((r) => {
    if (!Nt)
      return;
    const s = async (i) => {
      t != null && t.value && (await se(), !(!t.value || hp(t.value, i.target)) && i.target && !o.value && Yl(
        A0,
        e,
        { originalEvent: i }
      ));
    };
    a.addEventListener("focusin", s), r(() => a.removeEventListener("focusin", s));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const pt = Dl({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Pa = /* @__PURE__ */ _({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: r } = H(), s = S(
      () => {
        var m;
        return ((m = r.value) == null ? void 0 : m.ownerDocument) ?? globalThis.document;
      }
    ), i = S(() => pt.layersRoot), u = S(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), c = S(() => pt.layersWithOutsidePointerEventsDisabled.size > 0), d = S(() => {
      const m = Array.from(i.value), [v] = [...pt.layersWithOutsidePointerEventsDisabled].slice(-1), b = m.indexOf(v);
      return u.value >= b;
    }), f = O0(async (m) => {
      const v = [...pt.branches].some(
        (b) => b == null ? void 0 : b.contains(m.target)
      );
      !d.value || v || (a("pointerDownOutside", m), a("interactOutside", m), await se(), m.defaultPrevented || a("dismiss"));
    }, r), p = E0((m) => {
      [...pt.branches].some(
        (v) => v == null ? void 0 : v.contains(m.target)
      ) || (a("focusOutside", m), a("interactOutside", m), m.defaultPrevented || a("dismiss"));
    }, r);
    jl("Escape", (m) => {
      u.value === i.value.size - 1 && (a("escapeKeyDown", m), m.defaultPrevented || a("dismiss"));
    });
    let h;
    return De((m) => {
      r.value && (n.disableOutsidePointerEvents && (pt.layersWithOutsidePointerEventsDisabled.size === 0 && (h = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), pt.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), m(() => {
        n.disableOutsidePointerEvents && pt.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = h);
      }));
    }), De((m) => {
      m(() => {
        r.value && (i.value.delete(r.value), pt.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (m, v) => (g(), w(l(z), {
      ref: l(o),
      "as-child": m.asChild,
      as: m.as,
      "data-dismissable-layer": "",
      style: Ft({
        pointerEvents: c.value ? d.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(p).onFocusCapture,
      onBlurCapture: l(p).onBlurCapture,
      onPointerdownCapture: l(f).onPointerDownCapture
    }, {
      default: y(() => [
        x(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), P0 = /* @__PURE__ */ _({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = H();
    return pe(() => {
      pt.branches.add(a.value);
    }), Je(() => {
      pt.branches.delete(a.value);
    }), (o, r) => (g(), w(l(z), P({ ref: l(n) }, t), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ui = "focusScope.autoFocusOnMount", ci = "focusScope.autoFocusOnUnmount", kc = { bubbles: !1, cancelable: !0 };
function br(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const a of e)
    if (fn(a, { select: t }), document.activeElement !== n)
      return !0;
}
function R0(e) {
  const t = eu(e), n = $c(t, e), a = $c(t.reverse(), e);
  return [n, a];
}
function eu(e) {
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
    if (!I0(n, { upTo: t }))
      return n;
}
function I0(e, { upTo: t }) {
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
function F0(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function fn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && F0(e) && t && e.select();
  }
}
const V0 = Oy(() => R([]));
function N0() {
  const e = V0();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Sc(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Sc(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Sc(e, t) {
  const n = [...e], a = n.indexOf(t);
  return a !== -1 && n.splice(a, 1), n;
}
function L0(e) {
  return e.filter((t) => t.tagName !== "A");
}
const xs = /* @__PURE__ */ _({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, { currentRef: o, currentElement: r } = H(), s = R(null), i = N0(), u = Dl({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    De((d) => {
      if (!Nt)
        return;
      const f = r.value;
      if (!n.trapped)
        return;
      function p(b) {
        if (u.paused || !f)
          return;
        const C = b.target;
        f.contains(C) ? s.value = C : fn(s.value, { select: !0 });
      }
      function h(b) {
        if (u.paused || !f)
          return;
        const C = b.relatedTarget;
        C !== null && (f.contains(C) || fn(s.value, { select: !0 }));
      }
      function m(b) {
        f.contains(s.value) || fn(f);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", h);
      const v = new MutationObserver(m);
      f && v.observe(f, { childList: !0, subtree: !0 }), d(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", h), v.disconnect();
      });
    }), De(async (d) => {
      const f = r.value;
      if (await se(), !f)
        return;
      i.add(u);
      const p = document.activeElement;
      if (!f.contains(p)) {
        const h = new CustomEvent(ui, kc);
        f.addEventListener(ui, (m) => a("mountAutoFocus", m)), f.dispatchEvent(h), h.defaultPrevented || (br(L0(eu(f)), {
          select: !0
        }), document.activeElement === p && fn(f));
      }
      d(() => {
        f.removeEventListener(ui, (v) => a("mountAutoFocus", v));
        const h = new CustomEvent(ci, kc), m = (v) => {
          a("unmountAutoFocus", v);
        };
        f.addEventListener(ci, m), f.dispatchEvent(h), setTimeout(() => {
          h.defaultPrevented || fn(p ?? document.body, { select: !0 }), f.removeEventListener(ci, m), i.remove(u);
        }, 0);
      });
    });
    function c(d) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const f = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, p = document.activeElement;
      if (f && p) {
        const h = d.currentTarget, [m, v] = R0(h);
        m && v ? !d.shiftKey && p === v ? (d.preventDefault(), n.loop && fn(m, { select: !0 })) : d.shiftKey && p === m && (d.preventDefault(), n.loop && fn(v, { select: !0 })) : p === h && d.preventDefault();
      }
    }
    return (d, f) => (g(), w(l(z), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": d.asChild,
      as: d.as,
      onKeydown: c
    }, {
      default: y(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), z0 = "menu.itemSelect", Ni = ["Enter", " "], U0 = ["ArrowDown", "PageUp", "Home"], vp = ["ArrowUp", "PageDown", "End"], H0 = [...U0, ...vp], W0 = {
  ltr: [...Ni, "ArrowRight"],
  rtl: [...Ni, "ArrowLeft"]
}, Y0 = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function tu(e) {
  return e ? "open" : "closed";
}
function Vr(e) {
  return e === "indeterminate";
}
function nu(e) {
  return Vr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Li(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function K0(e, t) {
  const { x: n, y: a } = e;
  let o = !1;
  for (let r = 0, s = t.length - 1; r < t.length; s = r++) {
    const i = t[r].x, u = t[r].y, c = t[s].x, d = t[s].y;
    u > a != d > a && n < (c - i) * (a - u) / (d - u) + i && (o = !o);
  }
  return o;
}
function j0(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return K0(n, t);
}
function _o(e) {
  return e.pointerType === "mouse";
}
const G0 = "DialogTitle", q0 = "DialogContent";
function X0({
  titleName: e = G0,
  contentName: t = q0,
  componentLink: n = "dialog.html#title",
  titleId: a,
  descriptionId: o,
  contentElement: r
}) {
  const s = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  pe(() => {
    var u;
    document.getElementById(a) || console.warn(s);
    const c = (u = r.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && c && (document.getElementById(o) || console.warn(i));
  });
}
const mp = /* @__PURE__ */ _({
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
    const n = e, a = t, o = zt(), { forwardRef: r, currentElement: s } = H();
    return o.titleId || (o.titleId = Ee(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = Ee(void 0, "radix-vue-dialog-description")), pe(() => {
      o.contentElement = s, document.activeElement !== document.body && (o.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && X0({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: s
    }), (i, u) => (g(), w(l(xs), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (c) => a("openAutoFocus", c)),
      onUnmountAutoFocus: u[6] || (u[6] = (c) => a("closeAutoFocus", c))
    }, {
      default: y(() => [
        O(l(Pa), P({
          id: l(o).contentId,
          ref: l(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(o).descriptionId,
          "aria-labelledby": l(o).titleId,
          "data-state": l(tu)(l(o).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (c) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (c) => a("escapeKeyDown", c)),
          onFocusOutside: u[2] || (u[2] = (c) => a("focusOutside", c)),
          onInteractOutside: u[3] || (u[3] = (c) => a("interactOutside", c)),
          onPointerDownOutside: u[4] || (u[4] = (c) => a("pointerDownOutside", c))
        }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Z0 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = zt(), r = qn(a), { forwardRef: s, currentElement: i } = H();
    return Fo(i), (u, c) => (g(), w(mp, P({ ...n, ...l(r) }, {
      ref: l(s),
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
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), J0 = /* @__PURE__ */ _({
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
    const n = e, a = qn(t);
    H();
    const o = zt(), r = R(!1), s = R(!1);
    return (i, u) => (g(), w(mp, P({ ...n, ...l(a) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var d;
        c.defaultPrevented || (r.value || (d = l(o).triggerElement.value) == null || d.focus(), c.preventDefault()), r.value = !1, s.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (c) => {
        var d;
        c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const f = c.target;
        (d = l(o).triggerElement.value) != null && d.contains(f) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && s.value && c.preventDefault();
      })
    }), {
      default: y(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), au = /* @__PURE__ */ _({
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
    const n = e, a = t, o = zt(), r = qn(a), { forwardRef: s } = H();
    return (i, u) => (g(), w(l(st), {
      present: i.forceMount || l(o).open.value
    }, {
      default: y(() => [
        l(o).modal.value ? (g(), w(Z0, P({
          key: 0,
          ref: l(s)
        }, { ...n, ...l(r), ...i.$attrs }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), w(J0, P({
          key: 1,
          ref: l(s)
        }, { ...n, ...l(r), ...i.$attrs }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Q0 = /* @__PURE__ */ _({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = zt();
    return Ro(!0), H(), (n, a) => (g(), w(l(z), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": l(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), ou = /* @__PURE__ */ _({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = zt(), { forwardRef: n } = H();
    return (a, o) => {
      var r;
      return (r = l(t)) != null && r.modal.value ? (g(), w(l(st), {
        key: 0,
        present: a.forceMount || l(t).open.value
      }, {
        default: y(() => [
          O(Q0, P(a.$attrs, {
            ref: l(n),
            as: a.as,
            "as-child": a.asChild
          }), {
            default: y(() => [
              x(a.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : ne("", !0);
    };
  }
}), No = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    H();
    const n = zt();
    return (a, o) => (g(), w(l(z), P(t, {
      type: a.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (r) => l(n).onOpenChange(!1))
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), gp = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = zt();
    return H(), (a, o) => (g(), w(l(z), P(t, {
      id: l(n).titleId
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), yp = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    H();
    const n = zt();
    return (a, o) => (g(), w(l(z), P(t, {
      id: l(n).descriptionId
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function eb(e) {
  function t(a) {
    return Array.isArray(e.date.value) ? e.date.value.some((o) => Ne(o, a)) : e.date.value ? Ne(e.date.value, a) : !1;
  }
  const n = S(
    () => {
      var a, o, r, s;
      if (Array.isArray(e.date.value)) {
        if (!e.date.value.length)
          return !1;
        for (const i of e.date.value)
          if ((a = e.isDateDisabled) != null && a.call(e, i) || (o = e.isDateUnavailable) != null && o.call(e, i))
            return !0;
      } else {
        if (!e.date.value)
          return !1;
        if ((r = e.isDateDisabled) != null && r.call(e, e.date.value) || (s = e.isDateUnavailable) != null && s.call(e, e.date.value))
          return !0;
      }
      return !1;
    }
  );
  return {
    isDateSelected: t,
    isInvalid: n
  };
}
function tb(e, t) {
  const n = t(e), a = n.compare(e), o = {};
  return a >= 7 && (o.day = 1), a >= go(e) && (o.month = 1), n.set({ ...o });
}
function nb(e, t) {
  const n = t(e), a = e.compare(n), o = {};
  return a >= 7 && (o.day = 35), a >= go(e) && (o.month = 13), n.set({ ...o });
}
function ab(e, t) {
  return t(e);
}
function ob(e, t) {
  return t(e);
}
function bp(e) {
  const t = Jy(e.locale.value), n = S(() => {
    const v = {
      calendar: e.placeholder.value.calendar.identifier
    };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (v.era = "short"), v;
  }), a = R(Dn({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), o = S(() => a.value.map((v) => v.value));
  function r(v) {
    return !o.value.some((b) => ic(v, b));
  }
  const s = (v = "month", b) => {
    if (!e.maxValue.value || !a.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = a.value[a.value.length - 1].value;
    if (b || e.nextPage.value) {
      const k = tb(C, b || e.nextPage.value);
      return oo(k, e.maxValue.value);
    }
    if (v === "year") {
      const k = C.add({ years: 1 }).set({ day: 1, month: 1 });
      return oo(k, e.maxValue.value);
    }
    const $ = C.add({ months: 1 }).set({ day: 1 });
    return oo($, e.maxValue.value);
  }, i = (v = "month", b) => {
    if (!e.minValue.value || !a.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = a.value[0].value;
    if (b || e.prevPage.value) {
      const k = nb(C, b || e.prevPage.value);
      return vn(k, e.minValue.value);
    }
    if (v === "year") {
      const k = C.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return vn(k, e.minValue.value);
    }
    const $ = C.subtract({ months: 1 }).set({ day: 35 });
    return vn($, e.minValue.value);
  };
  function u(v) {
    var b;
    return !!((b = e.isDateDisabled) != null && b.call(e, v) || e.disabled.value || e.maxValue.value && oo(v, e.maxValue.value) || e.minValue.value && vn(v, e.minValue.value));
  }
  const c = (v) => {
    var b;
    return !!((b = e.isDateUnavailable) != null && b.call(e, v));
  }, d = S(() => a.value.length ? a.value[0].rows[0].map((v) => t.dayOfWeek(mt(v), e.weekdayFormat.value)) : []), f = (v = "month", b) => {
    const C = a.value[0].value;
    if (b || e.nextPage.value) {
      const D = ab(C, b || e.nextPage.value), T = Dn({
        dateObj: D,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      a.value = T;
      const A = {};
      if (!b) {
        const M = T[0].value.compare(C);
        M >= go(C) && (A.day = 1), M >= 365 && (A.month = 1);
      }
      e.placeholder.value = T[0].value.set({ ...A });
      return;
    }
    const $ = v === "month" ? C.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.add({ years: 1 }), k = Dn({
      dateObj: $,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    a.value = k, e.placeholder.value = k[0].value.set({ day: 1 });
  }, p = (v = "month", b) => {
    const C = a.value[0].value;
    if (b || e.prevPage.value) {
      const D = ob(C, b || e.prevPage.value), T = Dn({
        dateObj: D,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      a.value = T;
      const A = {};
      if (!b) {
        const M = C.compare(T[0].value);
        M >= go(C) && (A.day = 1), M >= 365 && (A.month = 1);
      }
      e.placeholder.value = T[0].value.set({ ...A });
      return;
    }
    const $ = v === "month" ? C.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.subtract({ years: 1 }), k = Dn({
      dateObj: $,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    a.value = k, e.placeholder.value = k[0].value.set({ day: 1 });
  };
  te(e.placeholder, (v) => {
    o.value.some((b) => ic(b, v)) || (a.value = Dn({
      dateObj: v,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), te([e.locale, e.weekStartsOn, e.fixedWeeks, e.numberOfMonths], () => {
    a.value = Dn({
      dateObj: e.placeholder.value,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
  });
  const h = S(() => {
    if (!a.value.length)
      return "";
    if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value), a.value.length === 1) {
      const T = a.value[0].value;
      return `${t.fullMonthAndYear(mt(T), n.value)}`;
    }
    const v = mt(a.value[0].value), b = mt(a.value[a.value.length - 1].value), C = t.fullMonth(v, n.value), $ = t.fullMonth(b, n.value), k = t.fullYear(v, n.value), D = t.fullYear(b, n.value);
    return k === D ? `${C} - ${$} ${D}` : `${C} ${k} - ${$} ${D}`;
  }), m = S(() => `${e.calendarLabel.value ?? "Event Date"}, ${h.value}`);
  return {
    isDateDisabled: u,
    isDateUnavailable: c,
    isNextButtonDisabled: s,
    isPrevButtonDisabled: i,
    grid: a,
    weekdays: d,
    visibleView: o,
    isOutsideVisibleView: r,
    formatter: t,
    nextPage: f,
    prevPage: p,
    headingValue: h,
    fullCalendarLabel: m
  };
}
const rb = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, sb = {
  role: "heading",
  "aria-level": "2"
}, [Ra, ib] = de("CalendarRoot"), lb = /* @__PURE__ */ _({
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
    const n = e, a = t, {
      locale: o,
      disabled: r,
      readonly: s,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: c,
      weekdayFormat: d,
      fixedWeeks: f,
      multiple: p,
      minValue: h,
      maxValue: m,
      numberOfMonths: v,
      preventDeselect: b,
      isDateDisabled: C,
      isDateUnavailable: $,
      calendarLabel: k,
      defaultValue: D,
      nextPage: T,
      prevPage: A,
      dir: M
    } = _e(n), { primitiveElement: N, currentElement: V } = Xn(), B = Lt(M), E = xe(n, "modelValue", a, {
      defaultValue: D.value,
      passive: n.modelValue === void 0
    }), I = Qf({
      defaultPlaceholder: n.placeholder,
      defaultValue: E.value
    }), Y = xe(n, "placeholder", a, {
      defaultValue: n.defaultPlaceholder ?? I.copy(),
      passive: n.placeholder === void 0
    });
    function q(X) {
      Y.value = X.copy();
    }
    const {
      fullCalendarLabel: W,
      headingValue: Q,
      isDateDisabled: ie,
      isDateUnavailable: me,
      isNextButtonDisabled: ve,
      isPrevButtonDisabled: ze,
      weekdays: Be,
      isOutsideVisibleView: $n,
      nextPage: Ht,
      prevPage: Sn,
      formatter: St,
      grid: Tn
    } = bp({
      locale: o,
      placeholder: Y,
      weekStartsOn: c,
      fixedWeeks: f,
      numberOfMonths: v,
      minValue: h,
      maxValue: m,
      disabled: r,
      weekdayFormat: d,
      pagedNavigation: u,
      isDateDisabled: C.value,
      isDateUnavailable: $.value,
      calendarLabel: k,
      nextPage: T,
      prevPage: A
    }), {
      isInvalid: Ke,
      isDateSelected: We
    } = eb({
      date: E,
      isDateDisabled: ie,
      isDateUnavailable: me
    });
    te(E, (X) => {
      if (Array.isArray(X) && X.length) {
        const ae = X[X.length - 1];
        ae && !Dt(Y.value, ae) && q(ae);
      } else !Array.isArray(X) && X && !Dt(Y.value, X) && q(X);
    });
    function G(X) {
      if (p.value) {
        if (!E.value)
          E.value = [X.copy()];
        else if (Array.isArray(E.value)) {
          if (E.value.findIndex((ae) => Ne(ae, X)) === -1)
            E.value = [...E.value, X];
          else if (!b.value) {
            const ae = E.value.filter((U) => !Ne(U, X));
            if (!ae.length) {
              Y.value = X.copy(), E.value = void 0;
              return;
            }
            E.value = ae.map((U) => U.copy());
          }
        }
      } else {
        if (!E.value) {
          E.value = X.copy();
          return;
        }
        !b.value && Dt(E.value, X) ? (Y.value = X.copy(), E.value = void 0) : E.value = X.copy();
      }
    }
    return pe(() => {
      i.value && ep(V.value);
    }), ib({
      isDateUnavailable: me,
      dir: B,
      isDateDisabled: ie,
      locale: o,
      formatter: St,
      modelValue: E,
      placeholder: Y,
      disabled: r,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: c,
      weekdayFormat: d,
      fixedWeeks: f,
      multiple: p,
      numberOfMonths: v,
      readonly: s,
      preventDeselect: b,
      fullCalendarLabel: W,
      headingValue: Q,
      isInvalid: Ke,
      isDateSelected: We,
      isNextButtonDisabled: ve,
      isPrevButtonDisabled: ze,
      isOutsideVisibleView: $n,
      nextPage: Ht,
      prevPage: Sn,
      parentElement: V,
      onPlaceholderChange: q,
      onDateChange: G
    }), (X, ae) => (g(), w(l(z), {
      ref_key: "primitiveElement",
      ref: N,
      as: X.as,
      "as-child": X.asChild,
      role: "application",
      "aria-label": l(W),
      "data-readonly": l(s) ? "" : void 0,
      "data-disabled": l(r) ? "" : void 0,
      "data-invalid": l(Ke) ? "" : void 0,
      dir: l(B)
    }, {
      default: y(() => [
        x(X.$slots, "default", {
          date: l(Y),
          grid: l(Tn),
          weekDays: l(Be),
          weekStartsOn: l(c),
          locale: l(o),
          fixedWeeks: l(f)
        }),
        ce("div", rb, [
          ce("div", sb, oe(l(W)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), ub = /* @__PURE__ */ _({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cb = /* @__PURE__ */ _({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = Ra();
    return (a, o) => (g(), w(l(z), P(t, {
      "data-disabled": l(n).disabled.value ? "" : void 0
    }), {
      default: y(() => [
        x(a.$slots, "default", {
          headingValue: l(n).headingValue.value
        }, () => [
          ee(oe(l(n).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), db = /* @__PURE__ */ _({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, n = Ra(), a = S(() => n.disabled.value ? !0 : void 0), o = S(() => n.readonly.value ? !0 : void 0);
    return (r, s) => (g(), w(l(z), P(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": a.value,
      "data-readonly": o.value && "",
      "data-disabled": a.value && ""
    }), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), fb = /* @__PURE__ */ _({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = Ra();
    return (n, a) => {
      var o, r;
      return g(), w(l(z), {
        as: n.as,
        "as-child": n.asChild,
        role: "gridcell",
        "aria-selected": l(t).isDateSelected(n.date) ? !0 : void 0,
        "aria-disabled": l(t).isDateDisabled(n.date) || ((r = (o = l(t)).isDateUnavailable) == null ? void 0 : r.call(o, n.date)),
        "data-disabled": l(t).isDateDisabled(n.date) ? "" : void 0
      }, {
        default: y(() => [
          x(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), pb = /* @__PURE__ */ _({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hb = /* @__PURE__ */ _({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = S(() => a.disabled.value || a.isNextButtonDisabled(t.step, t.nextPage)), a = Ra();
    return (o, r) => (g(), w(l(z), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": n.value || void 0,
      "data-disabled": n.value || void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (s) => l(a).nextPage(t.step, t.nextPage))
    }, {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ee("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), vb = /* @__PURE__ */ _({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = S(() => a.disabled.value || a.isPrevButtonDisabled(t.step, t.prevPage)), a = Ra();
    return (o, r) => (g(), w(l(z), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": n.value || void 0,
      "data-disabled": n.value || void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (s) => l(a).prevPage(t.step, t.prevPage))
    }, {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ee("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), mb = /* @__PURE__ */ _({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), P(t, { "aria-hidden": "true" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gb = /* @__PURE__ */ _({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yb = /* @__PURE__ */ _({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bb = /* @__PURE__ */ _({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = up(), a = Ra(), { primitiveElement: o, currentElement: r } = Xn(), s = S(() => t.day.day.toLocaleString(a.locale.value)), i = S(() => a.formatter.custom(mt(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = S(() => a.isDateDisabled(t.day)), c = S(
      () => {
        var k;
        return (k = a.isDateUnavailable) == null ? void 0 : k.call(a, t.day);
      }
    ), d = S(() => Bf(t.day, Kn())), f = S(() => !Mf(t.day, t.month)), p = S(
      () => a.isOutsideVisibleView(t.day)
    ), h = S(() => !a.disabled.value && Ne(t.day, a.placeholder.value)), m = S(() => a.isDateSelected(t.day)), v = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function b(k) {
      var D;
      a.readonly.value || a.isDateDisabled(k) || (D = a.isDateUnavailable) != null && D.call(a, k) || a.onDateChange(k);
    }
    function C() {
      b(t.day);
    }
    function $(k) {
      k.preventDefault(), k.stopPropagation();
      const D = a.parentElement.value, T = D ? Array.from(D.querySelectorAll(v)) : [];
      let A = T.indexOf(r.value);
      const M = 7, N = a.dir.value === "rtl" ? -1 : 1;
      switch (k.code) {
        case n.ARROW_RIGHT:
          A += N;
          break;
        case n.ARROW_LEFT:
          A -= N;
          break;
        case n.ARROW_UP:
          A -= M;
          break;
        case n.ARROW_DOWN:
          A += M;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          b(t.day);
          return;
        default:
          return;
      }
      if (A >= 0 && A < T.length) {
        T[A].focus();
        return;
      }
      if (A < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), se(() => {
          const V = D ? Array.from(D.querySelectorAll(v)) : [];
          V[V.length - Math.abs(A)].focus();
        });
        return;
      }
      if (A >= T.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), se(() => {
          (D ? Array.from(D.querySelectorAll(v)) : [])[A - T.length].focus();
        });
      }
    }
    return (k, D) => (g(), w(l(z), P({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": f.value || u.value || c.value ? !0 : void 0,
      "data-selected": m.value ? !0 : void 0,
      "data-value": k.day.toString(),
      "data-disabled": u.value || f.value ? "" : void 0,
      "data-unavailable": c.value ? "" : void 0,
      "data-today": d.value ? "" : void 0,
      "data-outside-view": f.value ? "" : void 0,
      "data-outside-visible-view": p.value ? "" : void 0,
      "data-focused": h.value ? "" : void 0,
      tabindex: h.value ? 0 : f.value || u.value ? void 0 : -1,
      onClick: C,
      onKeydown: [
        yt($, ["up", "down", "left", "right", "space", "enter"]),
        D[0] || (D[0] = yt(Ie(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: y(() => [
        x(k.$slots, "default", { dayValue: s.value }, () => [
          ee(oe(s.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Nr(e) {
  return e === "indeterminate";
}
function _p(e) {
  return Nr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const _b = ["value", "checked", "name", "disabled", "required"], [wb, xb] = de("CheckboxRoot"), Cb = /* @__PURE__ */ _({
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
    const n = e, a = t, { disabled: o } = _e(n), r = xe(n, "checked", a, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    }), { forwardRef: s, currentElement: i } = H(), u = Io(i), c = S(() => {
      var d;
      return n.id && i.value ? (d = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : d.innerText : void 0;
    });
    return xb({
      disabled: o,
      state: r
    }), (d, f) => (g(), L(re, null, [
      O(l(z), P(d.$attrs, {
        id: d.id,
        ref: l(s),
        role: "checkbox",
        "as-child": n.asChild,
        as: d.as,
        type: d.as === "button" ? "button" : void 0,
        "aria-checked": l(Nr)(l(r)) ? "mixed" : l(r),
        "aria-required": !1,
        "aria-label": d.$attrs["aria-label"] || c.value,
        "data-state": l(_p)(l(r)),
        "data-disabled": l(o) ? "" : void 0,
        disabled: l(o),
        onKeydown: yt(Ie(() => {
        }, ["prevent"]), ["enter"]),
        onClick: f[0] || (f[0] = (p) => r.value = l(Nr)(l(r)) ? !0 : !l(r))
      }), {
        default: y(() => [
          x(d.$slots, "default", { checked: l(r) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      l(u) ? (g(), L("input", {
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
      }, null, 8, _b)) : ne("", !0)
    ], 64));
  }
}), kb = /* @__PURE__ */ _({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = H(), n = wb();
    return (a, o) => (g(), w(l(st), {
      present: a.forceMount || l(Nr)(l(n).state.value) || l(n).state.value === !0
    }, {
      default: y(() => [
        O(l(z), P({
          ref: l(t),
          "data-state": l(_p)(l(n).state.value),
          "data-disabled": l(n).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": a.asChild,
          as: a.as
        }, a.$attrs), {
          default: y(() => [
            x(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [wp, $b] = de("PopperRoot"), Ia = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = R();
    return $b({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, a) => x(n.$slots, "default");
  }
}), Cs = /* @__PURE__ */ _({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = H(), o = wp();
    return De(() => {
      o.onAnchorChange(t.element ?? a.value);
    }), (r, s) => (g(), w(l(z), {
      ref: l(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Sb(e) {
  return e !== null;
}
function Tb(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, a, o;
      const { placement: r, rects: s, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, c = u ? 0 : e.arrowWidth, d = u ? 0 : e.arrowHeight, [f, p] = zi(r), h = { start: "0%", center: "50%", end: "100%" }[p], m = (((a = i.arrow) == null ? void 0 : a.x) ?? 0) + c / 2, v = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + d / 2;
      let b = "", C = "";
      return f === "bottom" ? (b = u ? h : `${m}px`, C = `${-d}px`) : f === "top" ? (b = u ? h : `${m}px`, C = `${s.floating.height + d}px`) : f === "right" ? (b = `${-d}px`, C = u ? h : `${v}px`) : f === "left" && (b = `${s.floating.width + d}px`, C = u ? h : `${v}px`), { data: { x: b, y: C } };
    }
  };
}
function zi(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const xp = {
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
}, [nP, Db] = de("PopperContent"), wa = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Cf({
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
    ...xp
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = wp(), { forwardRef: r, currentElement: s } = H(), i = R(), u = R(), { width: c, height: d } = lp(u), f = S(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), p = S(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), h = S(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), m = S(() => ({
      padding: p.value,
      boundary: h.value.filter(Sb),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: h.value.length > 0
    })), v = By(() => [
      yy({
        mainAxis: n.sideOffset + d.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && _c({
        ...m.value
      }),
      n.avoidCollisions && by({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Cy() : void 0,
        ...m.value
      }),
      !n.prioritizePosition && n.avoidCollisions && _c({
        ...m.value
      }),
      _y({
        ...m.value,
        apply: ({ elements: B, rects: E, availableWidth: I, availableHeight: Y }) => {
          const { width: q, height: W } = E.reference, Q = B.floating.style;
          Q.setProperty(
            "--radix-popper-available-width",
            `${I}px`
          ), Q.setProperty(
            "--radix-popper-available-height",
            `${Y}px`
          ), Q.setProperty(
            "--radix-popper-anchor-width",
            `${q}px`
          ), Q.setProperty(
            "--radix-popper-anchor-height",
            `${W}px`
          );
        }
      }),
      u.value && Sy({ element: u.value, padding: n.arrowPadding }),
      Tb({
        arrowWidth: c.value,
        arrowHeight: d.value
      }),
      n.hideWhenDetached && wy({ strategy: "referenceHidden", ...m.value })
    ]), { floatingStyles: b, placement: C, isPositioned: $, middlewareData: k } = Ty(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: f,
        whileElementsMounted: (...B) => gy(...B, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: v
      }
    ), D = S(
      () => zi(C.value)[0]
    ), T = S(
      () => zi(C.value)[1]
    );
    Lm(() => {
      $.value && a("placed");
    });
    const A = S(
      () => {
        var B;
        return ((B = k.value.arrow) == null ? void 0 : B.centerOffset) !== 0;
      }
    ), M = R("");
    De(() => {
      s.value && (M.value = window.getComputedStyle(s.value).zIndex);
    });
    const N = S(() => {
      var B;
      return ((B = k.value.arrow) == null ? void 0 : B.x) ?? 0;
    }), V = S(() => {
      var B;
      return ((B = k.value.arrow) == null ? void 0 : B.y) ?? 0;
    });
    return Db({
      placedSide: D,
      onArrowChange: (B) => u.value = B,
      arrowX: N,
      arrowY: V,
      shouldHideArrow: A
    }), (B, E) => {
      var I, Y, q;
      return g(), L("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Ft({
          ...l(b),
          transform: l($) ? l(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: M.value,
          "--radix-popper-transform-origin": [
            (I = l(k).transformOrigin) == null ? void 0 : I.x,
            (Y = l(k).transformOrigin) == null ? void 0 : Y.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((q = l(k).hide) == null ? void 0 : q.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        O(l(z), P({ ref: l(r) }, B.$attrs, {
          "as-child": n.asChild,
          as: B.as,
          "data-side": D.value,
          "data-align": T.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l($) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            x(B.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Lo = /* @__PURE__ */ _({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return H(), (t, n) => (g(), w(l(z), {
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
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Mb = /* @__PURE__ */ _({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = S(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((a, o) => typeof a == "object" ? Object.entries(a).map(([r, s]) => ({ name: `[${o}][${t.name}][${r}]`, value: s })) : { name: `[${t.name}][${o}]`, value: a }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([a, o]) => ({ name: `[${t.name}][${a}]`, value: o })) : []);
    return (a, o) => (g(!0), L(re, null, $e(n.value, (r) => (g(), w(Lo, {
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
}), Bb = "data-radix-vue-collection-item", [ru, Ab] = de("CollectionProvider");
function su(e = Bb) {
  const t = R(/* @__PURE__ */ new Map()), n = R(), a = Ab({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: o } = lu(a), r = S(() => Array.from(a.itemMap.value.values())), s = S(() => a.itemMap.value.size);
  return { getItems: o, reactiveItems: r, itemMapSize: s };
}
const iu = _({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = ru(), { primitiveElement: a, currentElement: o } = Xn();
    return te(o, () => {
      n.collectionRef.value = o.value;
    }), () => Ot(Zl, { ref: a }, t);
  }
}), ks = _({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const a = ru(), { primitiveElement: o, currentElement: r } = Xn();
    return De((s) => {
      if (r.value) {
        const i = Om(r.value);
        a.itemMap.value.set(i, { ref: r.value, value: e.value }), s(() => a.itemMap.value.delete(i));
      }
    }), () => Ot(Zl, { ...n, [a.attrName]: "", ref: o }, t);
  }
});
function lu(e) {
  const t = e ?? ru();
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
const [Fa, Ob] = de("ComboboxRoot"), Eb = /* @__PURE__ */ _({
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
    const n = e, a = t, { multiple: o, disabled: r, dir: s } = _e(n), i = Lt(s), u = xe(n, "searchTerm", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), c = xe(n, "modelValue", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? o.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), d = xe(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), f = xe(n, "selectedValue", a, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function p(W) {
      var Q, ie;
      d.value = W, await se(), W ? (c.value && (Array.isArray(c.value) && o.value ? f.value = (Q = k().find((me) => {
        var ve, ze;
        return ((ze = (ve = me.ref) == null ? void 0 : ve.dataset) == null ? void 0 : ze.state) === "checked";
      })) == null ? void 0 : Q.value : f.value = c.value), await se(), (ie = v.value) == null || ie.focus(), Y()) : (m.value = !1, n.resetSearchTermOnBlur && N());
    }
    function h(W) {
      if (Array.isArray(c.value) && o.value) {
        const Q = c.value.findIndex((me) => An(me, W)), ie = [...c.value];
        Q === -1 ? ie.push(W) : ie.splice(Q, 1), c.value = ie;
      } else
        c.value = W, p(!1);
    }
    const m = R(!1), v = R(), b = R(), { forwardRef: C, currentElement: $ } = H(), { getItems: k, reactiveItems: D, itemMapSize: T } = su("data-radix-vue-combobox-item"), A = R([]);
    te(() => T.value, () => {
      A.value = k().map((W) => W.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const M = S(() => {
      if (m.value) {
        if (n.filterFunction)
          return n.filterFunction(A.value, u.value);
        const W = A.value.filter((Q) => typeof Q == "string");
        if (W.length)
          return W.filter((Q) => {
            var ie;
            return Q.toLowerCase().includes((ie = u.value) == null ? void 0 : ie.toLowerCase());
          });
      }
      return A.value;
    });
    function N() {
      !o.value && c.value && !Array.isArray(c.value) ? n.displayValue ? u.value = n.displayValue(c.value) : typeof c.value != "object" ? u.value = c.value.toString() : u.value = "" : u.value = "";
    }
    const V = S(() => M.value.findIndex((W) => An(W, f.value))), B = S(() => {
      var W;
      return (W = D.value.find((Q) => An(Q.value, f.value))) == null ? void 0 : W.ref;
    }), E = S(() => JSON.stringify(c.value));
    te(E, async () => {
      await se(), await se(), N();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), te(() => [M.value.length, u.value.length], async ([W, Q], [ie, me]) => {
      await se(), await se(), W && (me > Q || V.value === -1) && (f.value = M.value[0]);
    });
    const I = Io($);
    function Y() {
      var W;
      B.value instanceof Element && ((W = B.value) == null || W.scrollIntoView({ block: "nearest" }));
    }
    function q() {
      B.value instanceof Element && B.value.focus && B.value.focus();
    }
    return Ob({
      searchTerm: u,
      modelValue: c,
      // @ts-expect-error ignoring
      onValueChange: h,
      isUserInputted: m,
      multiple: o,
      disabled: r,
      open: d,
      onOpenChange: p,
      filteredOptions: M,
      contentId: "",
      inputElement: v,
      selectedElement: B,
      onInputElementChange: (W) => v.value = W,
      onInputNavigation: async (W) => {
        const Q = V.value;
        Q === 0 && W === "up" || Q === M.value.length - 1 && W === "down" || (Q === -1 && M.value.length || W === "home" ? f.value = M.value[0] : W === "end" ? f.value = M.value[M.value.length - 1] : f.value = M.value[W === "up" ? Q - 1 : Q + 1], await se(), Y(), q(), se(() => {
          var ie;
          return (ie = v.value) == null ? void 0 : ie.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async (W) => {
        var Q;
        M.value.length && f.value && B.value instanceof Element && (W.preventDefault(), W.stopPropagation(), (Q = B.value) == null || Q.click());
      },
      selectedValue: f,
      onSelectedValueChange: (W) => f.value = W,
      parentElement: $,
      contentElement: b,
      onContentElementChange: (W) => b.value = W
    }), (W, Q) => (g(), w(l(Ia), null, {
      default: y(() => [
        O(l(z), P({
          ref: l(C),
          style: {
            pointerEvents: l(d) ? "auto" : void 0
          },
          as: W.as,
          "as-child": W.asChild,
          dir: l(i)
        }, W.$attrs), {
          default: y(() => [
            x(W.$slots, "default", {
              open: l(d),
              modelValue: l(c)
            }),
            l(I) && n.name ? (g(), w(l(Mb), {
              key: 0,
              name: n.name,
              value: l(c)
            }, null, 8, ["name", "value"])) : ne("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Pb = /* @__PURE__ */ _({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = Fa(), { forwardRef: a, currentElement: o } = H();
    pe(() => {
      const d = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      d && (n.onInputElementChange(d), setTimeout(() => {
        t.autoFocus && (d == null || d.focus());
      }, 1));
    });
    const r = S(() => t.disabled || n.disabled.value || !1), s = R();
    Em(() => {
      var d;
      return s.value = (d = n.selectedElement.value) == null ? void 0 : d.id;
    });
    function i(d) {
      n.open.value ? n.onInputNavigation(d.key === "ArrowUp" ? "up" : "down") : n.onOpenChange(!0);
    }
    function u(d) {
      n.open.value && n.onInputNavigation(d.key === "Home" ? "home" : "end");
    }
    function c(d) {
      var f;
      n.searchTerm.value = (f = d.target) == null ? void 0 : f.value, n.open.value || n.onOpenChange(!0), n.isUserInputted.value = !0;
    }
    return (d, f) => (g(), w(l(z), {
      ref: l(a),
      as: d.as,
      "as-child": d.asChild,
      type: d.type,
      disabled: r.value,
      value: l(n).searchTerm.value,
      "aria-expanded": l(n).open.value,
      "aria-controls": l(n).contentId,
      "aria-disabled": r.value ?? void 0,
      "aria-activedescendant": s.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: c,
      onKeydown: [
        yt(Ie(i, ["prevent"]), ["down", "up"]),
        yt(l(n).onInputEnter, ["enter"]),
        yt(Ie(u, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: y(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), [Cp, Rb] = de("ComboboxGroup"), Ib = /* @__PURE__ */ _({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: a } = H(), o = Ee(void 0, "radix-vue-combobox-group"), r = Fa(), s = R(!1);
    function i() {
      if (!a.value)
        return;
      const u = a.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      s.value = !!u.length;
    }
    return Hy(a, () => {
      se(() => {
        i();
      });
    }, { childList: !0 }), te(() => r.searchTerm.value, () => {
      se(() => {
        i();
      });
    }, { immediate: !0 }), Rb({
      id: o
    }), (u, c) => Ba((g(), w(l(z), P(t, {
      ref_key: "currentRef",
      ref: n,
      role: "group",
      "aria-labelledby": l(o)
    }), {
      default: y(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [Ml, s.value]
    ]);
  }
}), Fb = /* @__PURE__ */ _({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    H();
    const n = Cp({ id: "" });
    return (a, o) => (g(), w(l(z), P(t, {
      id: l(n).id
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [aP, Vb] = de("ComboboxContent"), Nb = /* @__PURE__ */ _({
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
    const n = e, a = t, { position: o } = _e(n), r = Fa();
    Ro(n.bodyLock);
    const { forwardRef: s, currentElement: i } = H();
    Fo(r.parentElement);
    const u = S(() => n.position === "popper" ? n : {}), c = he(u.value);
    function d(p) {
      r.onSelectedValueChange("");
    }
    pe(() => {
      r.onContentElementChange(i.value);
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
    return Vb({ position: o }), (p, h) => (g(), w(l(iu), null, {
      default: y(() => [
        p.dismissable ? (g(), w(l(Pa), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": p.disableOutsidePointerEvents,
          onDismiss: h[0] || (h[0] = (m) => l(r).onOpenChange(!1)),
          onFocusOutside: h[1] || (h[1] = (m) => {
            var v;
            (v = l(r).parentElement.value) != null && v.contains(m.target) && m.preventDefault(), a("focusOutside", m);
          }),
          onInteractOutside: h[2] || (h[2] = (m) => a("interactOutside", m)),
          onEscapeKeyDown: h[3] || (h[3] = (m) => a("escapeKeyDown", m)),
          onPointerDownOutside: h[4] || (h[4] = (m) => {
            var v;
            (v = l(r).parentElement.value) != null && v.contains(m.target) && m.preventDefault(), a("pointerDownOutside", m);
          })
        }, {
          default: y(() => [
            (g(), w(nt(l(o) === "popper" ? l(wa) : l(z)), P({ ...p.$attrs, ...l(c) }, {
              id: l(r).contentId,
              ref: l(s),
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
                x(p.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (g(), w(nt(l(o) === "popper" ? l(wa) : l(z)), P({ key: 1 }, { ...p.$attrs, ...u.value }, {
          id: l(r).contentId,
          ref: l(s),
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
            x(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Lb = /* @__PURE__ */ _({
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
    const n = le(e, t), { forwardRef: a } = H(), o = Fa();
    return o.contentId || (o.contentId = Ee(void 0, "radix-vue-combobox-content")), (r, s) => (g(), w(l(st), {
      present: r.forceMount || l(o).open.value
    }, {
      default: y(() => [
        O(Nb, P({ ...l(n), ...r.$attrs }, { ref: l(a) }), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), zb = /* @__PURE__ */ _({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    H();
    const n = Fa(), a = S(() => n.filteredOptions.value.length === 0);
    return (o, r) => a.value ? (g(), w(l(z), K(P({ key: 0 }, t)), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ee("No options")
        ])
      ]),
      _: 3
    }, 16)) : ne("", !0);
  }
});
function Ub(e) {
  const t = _s({
    nonce: R()
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [oP, Hb] = de("ComboboxItem"), Wb = "combobox.select", Yb = /* @__PURE__ */ _({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { disabled: o } = _e(n), r = Fa();
    Cp({ id: "", options: R([]) });
    const { forwardRef: s } = H(), i = S(
      () => {
        var v, b;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (v = r.modelValue.value) == null ? void 0 : v.some((C) => An(C, n.value)) : An((b = r.modelValue) == null ? void 0 : b.value, n.value);
      }
    ), u = S(() => An(r.selectedValue.value, n.value)), c = Ee(void 0, "radix-vue-combobox-item"), d = Ee(void 0, "radix-vue-combobox-option"), f = S(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((v) => An(v, n.value)) : !0);
    async function p(v) {
      a("select", v), !(v != null && v.defaultPrevented) && !o.value && v && r.onValueChange(n.value);
    }
    function h(v) {
      if (!v)
        return;
      const b = { originalEvent: v, value: n.value };
      Yl(Wb, p, b);
    }
    async function m(v) {
      await se(), !v.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Hb({
      isSelected: i
    }), (v, b) => (g(), w(l(ks), { value: v.value }, {
      default: y(() => [
        Ba(O(l(z), {
          id: l(d),
          ref: l(s),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": l(c),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": l(o) || void 0,
          "data-disabled": l(o) ? "" : void 0,
          as: v.as,
          "as-child": v.asChild,
          "data-hidden": f.value ? void 0 : !0,
          onClick: h,
          onPointermove: m
        }, {
          default: y(() => [
            x(v.$slots, "default", {}, () => [
              ee(oe(v.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Ml, f.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Kb = /* @__PURE__ */ _({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return H(), (n, a) => (g(), w(l(z), P(t, { "aria-hidden": "true" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kp = /* @__PURE__ */ _({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Cs), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function jb() {
  const e = R(!1);
  return pe(() => {
    _a("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), _a(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const Gb = tp(jb), [Zn, $p] = de(["MenuRoot", "MenuSub"], "MenuContext"), [zo, qb] = de("MenuRoot"), Xb = /* @__PURE__ */ _({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { modal: o, dir: r } = _e(n), s = Lt(r), i = xe(n, "open", a), u = R(), c = Gb();
    return $p({
      open: i,
      onOpenChange: (d) => {
        i.value = d;
      },
      content: u,
      onContentChange: (d) => {
        u.value = d;
      }
    }), qb({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: c,
      dir: s,
      modal: o
    }), (d, f) => (g(), w(l(Ia), null, {
      default: y(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Zb = "rovingFocusGroup.onEntryFocus", Jb = { bubbles: !1, cancelable: !0 }, Qb = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function e_(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function t_(e, t, n) {
  const a = e_(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(a)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(a)))
    return Qb[a];
}
function Sp(e, t = !1, n) {
  const a = (n == null ? void 0 : n.activeElement) ?? document.activeElement;
  for (const o of e)
    if (o === a || (o.focus({ preventScroll: t }), document.activeElement !== a))
      return;
}
function n_(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
const [a_, o_] = de("RovingFocusGroup"), Tp = /* @__PURE__ */ _({
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
    const a = e, o = n, { loop: r, orientation: s, dir: i } = _e(a), u = Lt(i), c = xe(a, "currentTabStopId", o, {
      defaultValue: a.defaultCurrentTabStopId,
      passive: a.currentTabStopId === void 0
    }), d = R(!1), f = R(!1), p = R(0), { getItems: h } = su();
    function m(b) {
      const C = !f.value;
      if (b.currentTarget && b.target === b.currentTarget && C && !d.value) {
        const $ = new CustomEvent(Zb, Jb);
        if (b.currentTarget.dispatchEvent($), o("entryFocus", $), !$.defaultPrevented) {
          const k = h().map((M) => M.ref).filter((M) => M.dataset.disabled !== ""), D = k.find((M) => M.getAttribute("data-active") === "true"), T = k.find(
            (M) => M.id === c.value
          ), A = [D, T, ...k].filter(
            Boolean
          );
          Sp(A, a.preventScrollOnEntryFocus);
        }
      }
      f.value = !1;
    }
    function v() {
      setTimeout(() => {
        f.value = !1;
      }, 1);
    }
    return t({
      getItems: h
    }), o_({
      loop: r,
      dir: u,
      orientation: s,
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
    }), (b, C) => (g(), w(l(iu), null, {
      default: y(() => [
        O(l(z), {
          tabindex: d.value || p.value === 0 ? -1 : 0,
          "data-orientation": l(s),
          as: b.as,
          "as-child": b.asChild,
          dir: l(u),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = ($) => f.value = !0),
          onMouseup: v,
          onFocus: m,
          onBlur: C[1] || (C[1] = ($) => d.value = !1)
        }, {
          default: y(() => [
            x(b.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), r_ = /* @__PURE__ */ _({
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
    const t = e, n = a_(), a = S(() => t.tabStopId || Ee()), o = S(
      () => n.currentTabStopId.value === a.value
    ), { getItems: r } = lu(), { primitiveElement: s, currentElement: i } = Xn(), u = S(() => {
      var d;
      return (d = i.value) == null ? void 0 : d.getRootNode();
    });
    pe(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Je(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function c(d) {
      if (d.key === "Tab" && d.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (d.target !== d.currentTarget)
        return;
      const f = t_(
        d,
        n.orientation.value,
        n.dir.value
      );
      if (f !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey)
          return;
        d.preventDefault();
        let p = [...r().map((h) => h.ref).filter((h) => h.dataset.disabled !== "")];
        if (f === "last")
          p.reverse();
        else if (f === "prev" || f === "next") {
          f === "prev" && p.reverse();
          const h = p.indexOf(
            d.currentTarget
          );
          p = n.loop.value ? n_(p, h + 1) : p.slice(h + 1);
        }
        se(() => Sp(p, !1, u.value));
      }
    }
    return (d, f) => (g(), w(l(ks), null, {
      default: y(() => [
        O(l(z), {
          ref_key: "primitiveElement",
          ref: s,
          tabindex: o.value ? 0 : -1,
          "data-orientation": l(n).orientation.value,
          "data-active": d.active,
          "data-disabled": d.focusable ? void 0 : "",
          as: d.as,
          "as-child": d.asChild,
          onMousedown: f[0] || (f[0] = (p) => {
            d.focusable ? l(n).onItemFocus(a.value) : p.preventDefault();
          }),
          onFocus: f[1] || (f[1] = (p) => l(n).onItemFocus(a.value)),
          onKeydown: c
        }, {
          default: y(() => [
            x(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [uu, s_] = de("MenuContent"), cu = /* @__PURE__ */ _({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Cf({
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
    ...xp
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Zn(), r = zo(), { trapFocus: s, disableOutsidePointerEvents: i, loop: u } = _e(n);
    ql(), Ro(i.value);
    const c = R(""), d = R(0), f = R(0), p = R(null), h = R("right"), m = R(0), v = R(null), { createCollection: b } = Ea(), { forwardRef: C, currentElement: $ } = H(), k = b($);
    te($, (B) => {
      o.onContentChange(B);
    });
    const { handleTypeaheadSearch: D } = Xl(k);
    Je(() => {
      window.clearTimeout(d.value);
    });
    function T(B) {
      var E, I;
      return h.value === ((E = p.value) == null ? void 0 : E.side) && j0(B, (I = p.value) == null ? void 0 : I.area);
    }
    async function A(B) {
      var E;
      a("openAutoFocus", B), !B.defaultPrevented && (B.preventDefault(), (E = $.value) == null || E.focus({
        preventScroll: !0
      }));
    }
    function M(B) {
      if (B.defaultPrevented)
        return;
      const E = B.target.closest("[data-radix-menu-content]") === B.currentTarget, I = B.ctrlKey || B.altKey || B.metaKey, Y = B.key.length === 1, q = rp(
        B,
        document.activeElement,
        $.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (q)
        return q == null ? void 0 : q.focus();
      if (B.code === "Space" || (E && (B.key === "Tab" && B.preventDefault(), !I && Y && D(B.key)), B.target !== $.value) || !H0.includes(B.key))
        return;
      B.preventDefault();
      const W = k.value;
      vp.includes(B.key) && W.reverse(), Li(W);
    }
    function N(B) {
      var E, I;
      (I = (E = B == null ? void 0 : B.currentTarget) == null ? void 0 : E.contains) != null && I.call(E, B.target) || (window.clearTimeout(d.value), c.value = "");
    }
    function V(B) {
      var E;
      if (!_o(B))
        return;
      const I = B.target, Y = m.value !== B.clientX;
      if ((E = B == null ? void 0 : B.currentTarget) != null && E.contains(I) && Y) {
        const q = B.clientX > m.value ? "right" : "left";
        h.value = q, m.value = B.clientX;
      }
    }
    return s_({
      onItemEnter: (B) => !!T(B),
      onItemLeave: (B) => {
        var E;
        T(B) || ((E = $.value) == null || E.focus(), v.value = null);
      },
      onTriggerLeave: (B) => !!T(B),
      searchRef: c,
      pointerGraceTimerRef: f,
      onPointerGraceIntentChange: (B) => {
        p.value = B;
      }
    }), (B, E) => (g(), w(l(xs), {
      "as-child": "",
      trapped: l(s),
      onMountAutoFocus: A,
      onUnmountAutoFocus: E[7] || (E[7] = (I) => a("closeAutoFocus", I))
    }, {
      default: y(() => [
        O(l(Pa), {
          "as-child": "",
          "disable-outside-pointer-events": l(i),
          onEscapeKeyDown: E[2] || (E[2] = (I) => a("escapeKeyDown", I)),
          onPointerDownOutside: E[3] || (E[3] = (I) => a("pointerDownOutside", I)),
          onFocusOutside: E[4] || (E[4] = (I) => a("focusOutside", I)),
          onInteractOutside: E[5] || (E[5] = (I) => a("interactOutside", I)),
          onDismiss: E[6] || (E[6] = (I) => a("dismiss"))
        }, {
          default: y(() => [
            O(l(Tp), {
              "current-tab-stop-id": v.value,
              "onUpdate:currentTabStopId": E[0] || (E[0] = (I) => v.value = I),
              "as-child": "",
              orientation: "vertical",
              dir: l(r).dir.value,
              loop: l(u),
              onEntryFocus: E[1] || (E[1] = (I) => {
                a("entryFocus", I), l(r).isUsingKeyboardRef.value || I.preventDefault();
              })
            }, {
              default: y(() => [
                O(l(wa), {
                  ref: l(C),
                  role: "menu",
                  as: B.as,
                  "as-child": B.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(tu)(l(o).open.value),
                  dir: l(r).dir.value,
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
                  onBlur: N,
                  onPointermove: V
                }, {
                  default: y(() => [
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
}), Dp = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = uu(), { forwardRef: a } = H(), o = R(!1);
    async function r(i) {
      if (!i.defaultPrevented && _o(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function s(i) {
      await se(), !i.defaultPrevented && _o(i) && n.onItemLeave(i);
    }
    return (i, u) => (g(), w(l(ks), null, {
      default: y(() => [
        O(l(z), P({
          ref: l(a),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || void 0,
          "data-disabled": i.disabled ? "" : void 0,
          "data-highlighted": o.value ? "" : void 0,
          onPointermove: r,
          onPointerleave: s,
          onFocus: u[0] || (u[0] = async (c) => {
            await se(), !(c.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (c) => {
            await se(), !c.defaultPrevented && (o.value = !1);
          })
        }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), du = /* @__PURE__ */ _({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: r } = H(), s = zo(), i = uu(), u = R(!1);
    async function c() {
      const d = r.value;
      if (!n.disabled && d) {
        const f = new CustomEvent(z0, {
          bubbles: !0,
          cancelable: !0
        });
        a("select", f), await se(), f.defaultPrevented ? u.value = !1 : s.onClose();
      }
    }
    return (d, f) => (g(), w(Dp, P(n, {
      ref: l(o),
      onClick: c,
      onPointerdown: f[0] || (f[0] = () => {
        u.value = !0;
      }),
      onPointerup: f[1] || (f[1] = async (p) => {
        var h;
        await se(), !p.defaultPrevented && (u.value || (h = p.currentTarget) == null || h.click());
      }),
      onKeydown: f[2] || (f[2] = async (p) => {
        const h = l(i).searchRef.value !== "";
        d.disabled || h && p.key === " " || l(Ni).includes(p.key) && (p.currentTarget.click(), p.preventDefault());
      })
    }), {
      default: y(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [i_, Mp] = de(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), l_ = /* @__PURE__ */ _({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = i_({
      checked: R(!1)
    });
    return (n, a) => (g(), w(l(st), {
      present: n.forceMount || l(Vr)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: y(() => [
        O(l(z), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": l(nu)(l(t).checked.value)
        }, {
          default: y(() => [
            x(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), u_ = /* @__PURE__ */ _({
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
    const n = e, a = t, o = xe(n, "checked", a);
    return Mp({ checked: o }), (r, s) => (g(), w(du, P({ role: "menuitemcheckbox" }, n, {
      "aria-checked": l(Vr)(l(o)) ? "mixed" : l(o),
      "data-state": l(nu)(l(o)),
      onSelect: s[0] || (s[0] = async (i) => {
        a("select", i), l(Vr)(l(o)) ? o.value = !0 : o.value = !l(o);
      })
    }), {
      default: y(() => [
        x(r.$slots, "default", { checked: l(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), c_ = /* @__PURE__ */ _({
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
    const n = e, a = t, o = le(n, a), r = Zn(), { forwardRef: s, currentElement: i } = H();
    return Fo(i), (u, c) => (g(), w(cu, P(l(o), {
      ref: l(s),
      "trap-focus": l(r).open.value,
      "disable-outside-pointer-events": l(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (d) => l(r).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = Ie((d) => a("focusOutside", d), ["prevent"]))
    }), {
      default: y(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), d_ = /* @__PURE__ */ _({
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
    const n = le(e, t), a = Zn();
    return (o, r) => (g(), w(cu, P(l(n), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: r[0] || (r[0] = (s) => l(a).onOpenChange(!1))
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), f_ = /* @__PURE__ */ _({
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
    const n = le(e, t), a = Zn(), o = zo();
    return (r, s) => (g(), w(l(st), {
      present: r.forceMount || l(a).open.value
    }, {
      default: y(() => [
        l(o).modal.value ? (g(), w(c_, K(P({ key: 0 }, { ...r.$attrs, ...l(n) })), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), w(d_, K(P({ key: 1 }, { ...r.$attrs, ...l(n) })), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Bp = /* @__PURE__ */ _({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), P({ role: "group" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), p_ = /* @__PURE__ */ _({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), h_ = /* @__PURE__ */ _({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Vo), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [v_, m_] = de("MenuRadioGroup"), g_ = /* @__PURE__ */ _({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = xe(n, "modelValue", t);
    return m_({
      modelValue: a,
      onValueChange: (o) => {
        a.value = o;
      }
    }), (o, r) => (g(), w(Bp, K(Z(n)), {
      default: y(() => [
        x(o.$slots, "default", { modelValue: l(a) })
      ]),
      _: 3
    }, 16));
  }
}), y_ = /* @__PURE__ */ _({
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
    const n = e, a = t, { value: o } = _e(n), r = v_(), s = S(
      () => r.modelValue.value === (o == null ? void 0 : o.value)
    );
    return Mp({ checked: s }), (i, u) => (g(), w(du, P({ role: "menuitemradio" }, n, {
      "aria-checked": s.value,
      "data-state": l(nu)(s.value),
      onSelect: u[0] || (u[0] = async (c) => {
        a("select", c), l(r).onValueChange(l(o));
      })
    }), {
      default: y(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), b_ = /* @__PURE__ */ _({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), P(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ap, __] = de("MenuSub"), w_ = /* @__PURE__ */ _({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = xe(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), o = Zn(), r = R(), s = R();
    return De((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (a.value = !1), i(() => a.value = !1);
    }), $p({
      open: a,
      onOpenChange: (i) => {
        a.value = i;
      },
      content: s,
      onContentChange: (i) => {
        s.value = i;
      }
    }), __({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (g(), w(l(Ia), null, {
      default: y(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), x_ = /* @__PURE__ */ _({
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
    const n = le(e, t), a = Zn(), o = zo(), r = Ap(), { forwardRef: s, currentElement: i } = H();
    return r.contentId || (r.contentId = Ee(void 0, "radix-vue-menu-sub-content")), (u, c) => (g(), w(l(st), {
      present: u.forceMount || l(a).open.value
    }, {
      default: y(() => [
        O(cu, P(l(n), {
          id: l(r).contentId,
          ref: l(s),
          "aria-labelledby": l(r).triggerId,
          align: "start",
          side: l(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = Ie((d) => {
            var f;
            l(o).isUsingKeyboardRef.value && ((f = l(i)) == null || f.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = Ie(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (d) => {
            d.defaultPrevented || d.target !== l(r).trigger.value && l(a).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (d) => {
            l(o).onClose(), d.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (d) => {
            var f, p;
            const h = (f = d.currentTarget) == null ? void 0 : f.contains(d.target), m = l(Y0)[l(o).dir.value].includes(d.key);
            h && m && (l(a).onOpenChange(!1), (p = l(r).trigger.value) == null || p.focus(), d.preventDefault());
          })
        }), {
          default: y(() => [
            x(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), C_ = /* @__PURE__ */ _({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Zn(), a = zo(), o = Ap(), r = uu(), s = R(null);
    o.triggerId || (o.triggerId = Ee(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      s.value && window.clearTimeout(s.value), s.value = null;
    }
    Je(() => {
      i();
    });
    function u(f) {
      !_o(f) || r.onItemEnter(f) || !t.disabled && !n.open.value && !s.value && (r.onPointerGraceIntentChange(null), s.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function c(f) {
      var p, h;
      if (!_o(f))
        return;
      i();
      const m = (p = n.content.value) == null ? void 0 : p.getBoundingClientRect();
      if (m != null && m.width) {
        const v = (h = n.content.value) == null ? void 0 : h.dataset.side, b = v === "right", C = b ? -5 : 5, $ = m[b ? "left" : "right"], k = m[b ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: f.clientX + C, y: f.clientY },
            { x: $, y: m.top },
            { x: k, y: m.top },
            { x: k, y: m.bottom },
            { x: $, y: m.bottom }
          ],
          side: v
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
      t.disabled || h && f.key === " " || W0[a.dir.value].includes(f.key) && (n.onOpenChange(!0), await se(), (p = n.content.value) == null || p.focus(), f.preventDefault());
    }
    return (f, p) => (g(), w(kp, { "as-child": "" }, {
      default: y(() => [
        O(Dp, P(t, {
          id: l(o).triggerId,
          ref: (h) => {
            var m;
            (m = l(o)) == null || m.onTriggerChange(h == null ? void 0 : h.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(o).contentId,
          "data-state": l(tu)(l(n).open.value),
          onClick: p[0] || (p[0] = async (h) => {
            t.disabled || h.defaultPrevented || (h.currentTarget.focus(), l(n).open.value || l(n).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: c,
          onKeydown: d
        }), {
          default: y(() => [
            x(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [Op, k_] = de("DropdownMenuRoot"), $_ = /* @__PURE__ */ _({
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
    H();
    const o = xe(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = R(), { modal: s, dir: i } = _e(n), u = Lt(i);
    return k_({
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
      modal: s,
      dir: u
    }), (c, d) => (g(), w(l(Xb), {
      open: l(o),
      "onUpdate:open": d[0] || (d[0] = (f) => Oo(o) ? o.value = f : null),
      dir: l(u),
      modal: l(s)
    }, {
      default: y(() => [
        x(c.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), S_ = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Op(), { forwardRef: a, currentElement: o } = H();
    return pe(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = Ee(void 0, "radix-vue-dropdown-menu-trigger")), (r, s) => (g(), w(l(kp), { "as-child": "" }, {
      default: y(() => [
        O(l(z), {
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
          onClick: s[0] || (s[0] = async (i) => {
            var u;
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = l(n)) == null || u.onOpenToggle(), await se(), l(n).open.value && i.preventDefault());
          }),
          onKeydown: s[1] || (s[1] = yt(
            (i) => {
              r.disabled || (["Enter", " "].includes(i.key) && l(n).onOpenToggle(), i.key === "ArrowDown" && l(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), T_ = /* @__PURE__ */ _({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(h_), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), D_ = /* @__PURE__ */ _({
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
    const n = le(e, t);
    H();
    const a = Op(), o = R(!1);
    function r(s) {
      s.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = a.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, s.preventDefault());
    }
    return a.contentId || (a.contentId = Ee(void 0, "radix-vue-dropdown-menu-content")), (s, i) => {
      var u;
      return g(), w(l(f_), P(l(n), {
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
        onInteractOutside: i[0] || (i[0] = (c) => {
          var d;
          if (c.defaultPrevented) return;
          const f = c.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0, h = f.button === 2 || p;
          (!l(a).modal.value || h) && (o.value = !0), (d = l(a).triggerElement.value) != null && d.contains(c.target) && c.preventDefault();
        })
      }), {
        default: y(() => [
          x(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Ep = /* @__PURE__ */ _({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = qn(t);
    return H(), (o, r) => (g(), w(l(du), K(Z({ ...n, ...l(a) })), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), M_ = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return H(), (n, a) => (g(), w(l(Bp), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), B_ = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return H(), (n, a) => (g(), w(l(b_), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), A_ = /* @__PURE__ */ _({
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
    const n = e, a = qn(t);
    return H(), (o, r) => (g(), w(l(u_), K(Z({ ...n, ...l(a) })), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pp = /* @__PURE__ */ _({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return H(), (n, a) => (g(), w(l(l_), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), O_ = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return H(), (n, a) => (g(), w(l(p_), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), E_ = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = qn(t);
    return H(), (o, r) => (g(), w(l(g_), K(Z({ ...n, ...l(a) })), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), P_ = /* @__PURE__ */ _({
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
    const n = le(e, t);
    return H(), (a, o) => (g(), w(l(y_), K(Z(l(n))), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), R_ = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = xe(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return H(), (o, r) => (g(), w(l(w_), {
      open: l(a),
      "onUpdate:open": r[0] || (r[0] = (s) => Oo(a) ? a.value = s : null)
    }, {
      default: y(() => [
        x(o.$slots, "default", { open: l(a) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), I_ = /* @__PURE__ */ _({
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
    const n = le(e, t);
    return H(), (a, o) => (g(), w(l(x_), P(l(n), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), F_ = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return H(), (n, a) => (g(), w(l(C_), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), V_ = /* @__PURE__ */ _({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return H(), (n, a) => (g(), w(l(z), P(t, {
      onMousedown: a[0] || (a[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Va, N_] = de("PaginationRoot"), L_ = /* @__PURE__ */ _({
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
    const n = e, a = t, { siblingCount: o, disabled: r, showEdges: s } = _e(n);
    H();
    const i = xe(n, "page", a, {
      defaultValue: n.defaultPage,
      passive: n.page === void 0
    }), u = S(() => Math.max(1, Math.ceil(n.total / n.itemsPerPage)));
    return N_({
      page: i,
      onPageChange(c) {
        i.value = c;
      },
      pageCount: u,
      siblingCount: o,
      disabled: r,
      showEdges: s
    }), (c, d) => (g(), w(l(z), {
      as: c.as,
      "as-child": c.asChild
    }, {
      default: y(() => [
        x(c.$slots, "default", {
          page: l(i),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), z_ = /* @__PURE__ */ _({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return H(), (n, a) => (g(), w(l(z), P(t, { "data-type": "ellipsis" }), {
      default: y(() => [
        x(n.$slots, "default", {}, () => [
          ee("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), U_ = /* @__PURE__ */ _({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Va();
    return H(), (a, o) => (g(), w(l(z), P(t, {
      "aria-label": "First Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: l(n).page.value === 1 || l(n).disabled.value,
      onClick: o[0] || (o[0] = (r) => l(n).onPageChange(1))
    }), {
      default: y(() => [
        x(a.$slots, "default", {}, () => [
          ee("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), H_ = /* @__PURE__ */ _({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Va();
    return H(), (a, o) => (g(), w(l(z), P(t, {
      "aria-label": "Last Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: l(n).page.value === l(n).pageCount.value || l(n).disabled.value,
      onClick: o[0] || (o[0] = (r) => l(n).onPageChange(l(n).pageCount.value))
    }), {
      default: y(() => [
        x(a.$slots, "default", {}, () => [
          ee("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function un(e, t) {
  const n = t - e + 1;
  return Array.from({ length: n }, (a, o) => o + e);
}
function W_(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const nr = "ellipsis";
function Y_(e, t, n, a) {
  const o = t, r = Math.max(e - n, 1), s = Math.min(e + n, o);
  if (a) {
    const i = Math.min(2 * n + 5, t) - 2, u = r > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(r - 1) > 2, c = s < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - s) > 2;
    if (!u && c)
      return [...un(1, i), nr, o];
    if (u && !c) {
      const d = un(o - i + 1, o);
      return [1, nr, ...d];
    }
    if (u && c) {
      const d = un(r, s);
      return [1, nr, ...d, nr, o];
    }
    return un(1, o);
  } else {
    const i = n * 2 + 1;
    return t < i ? un(1, o) : e <= n + 1 ? un(1, i) : t - e <= n ? un(t - i + 1, o) : un(r, s);
  }
}
const K_ = /* @__PURE__ */ _({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    H();
    const n = Va(), a = S(() => W_(
      Y_(
        n.page.value,
        n.pageCount.value,
        n.siblingCount.value,
        n.showEdges.value
      )
    ));
    return (o, r) => (g(), w(l(z), K(Z(t)), {
      default: y(() => [
        x(o.$slots, "default", { items: a.value })
      ]),
      _: 3
    }, 16));
  }
}), rP = /* @__PURE__ */ _({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    H();
    const n = Va(), a = S(() => n.page.value === t.value);
    return (o, r) => (g(), w(l(z), P(t, {
      "data-type": "page",
      "aria-label": `Page ${o.value}`,
      "aria-current": a.value ? "page" : void 0,
      "data-selected": a.value ? "true" : void 0,
      disabled: l(n).disabled.value,
      type: o.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (s) => l(n).onPageChange(o.value))
    }), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ee(oe(o.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), j_ = /* @__PURE__ */ _({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    H();
    const n = Va();
    return (a, o) => (g(), w(l(z), P(t, {
      "aria-label": "Next Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: l(n).page.value === l(n).pageCount.value || l(n).disabled.value,
      onClick: o[0] || (o[0] = (r) => l(n).onPageChange(l(n).page.value + 1))
    }), {
      default: y(() => [
        x(a.$slots, "default", {}, () => [
          ee("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), G_ = /* @__PURE__ */ _({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    H();
    const n = Va();
    return (a, o) => {
      var r;
      return g(), w(l(z), P(t, {
        "aria-label": "Previous Page",
        type: a.as === "button" ? "button" : void 0,
        disabled: l(n).page.value === 1 || ((r = l(n).disabled) == null ? void 0 : r.value),
        onClick: o[0] || (o[0] = (s) => l(n).onPageChange(l(n).page.value - 1))
      }), {
        default: y(() => [
          x(a.$slots, "default", {}, () => [
            ee("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
}), [Uo, q_] = de("PopoverRoot"), X_ = /* @__PURE__ */ _({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { modal: o } = _e(n), r = xe(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = R(), i = R(!1);
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
      triggerElement: s,
      hasCustomAnchor: i
    }), (u, c) => (g(), w(l(Ia), null, {
      default: y(() => [
        x(u.$slots, "default", { open: l(r) })
      ]),
      _: 3
    }));
  }
}), Z_ = /* @__PURE__ */ _({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Uo(), { forwardRef: a, currentElement: o } = H();
    return pe(() => {
      n.triggerElement.value = o.value;
    }), (r, s) => (g(), w(nt(l(n).hasCustomAnchor.value ? l(z) : l(Cs)), { "as-child": "" }, {
      default: y(() => [
        O(l(z), {
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
            x(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), J_ = /* @__PURE__ */ _({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Vo), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rp = /* @__PURE__ */ _({
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
    const n = e, a = t, o = he(n), { forwardRef: r } = H(), s = Uo();
    return ql(), (i, u) => (g(), w(l(xs), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (c) => a("openAutoFocus", c)),
      onUnmountAutoFocus: u[6] || (u[6] = (c) => a("closeAutoFocus", c))
    }, {
      default: y(() => [
        O(l(Pa), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (c) => a("pointerDownOutside", c)),
          onInteractOutside: u[1] || (u[1] = (c) => a("interactOutside", c)),
          onEscapeKeyDown: u[2] || (u[2] = (c) => a("escapeKeyDown", c)),
          onFocusOutside: u[3] || (u[3] = (c) => a("focusOutside", c)),
          onDismiss: u[4] || (u[4] = (c) => l(s).onOpenChange(!1))
        }, {
          default: y(() => [
            O(l(wa), P(l(o), {
              id: l(s).contentId,
              ref: l(r),
              "data-state": l(s).open.value ? "open" : "closed",
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
}), Q_ = /* @__PURE__ */ _({
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
    const n = e, a = t, o = Uo(), r = R(!1);
    Ro(!0);
    const s = le(n, a), { forwardRef: i, currentElement: u } = H();
    return Fo(u), (c, d) => (g(), w(Rp, P(l(s), {
      ref: l(i),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: d[0] || (d[0] = Ie(
        (f) => {
          var p;
          a("closeAutoFocus", f), r.value || (p = l(o).triggerElement.value) == null || p.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: d[1] || (d[1] = (f) => {
        a("pointerDownOutside", f);
        const p = f.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || h;
        r.value = m;
      }),
      onFocusOutside: d[2] || (d[2] = Ie(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), e1 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = Uo(), r = R(!1), s = R(!1), i = le(n, a);
    return (u, c) => (g(), w(Rp, P(l(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (d) => {
        var f;
        a("closeAutoFocus", d), d.defaultPrevented || (r.value || (f = l(o).triggerElement.value) == null || f.focus(), d.preventDefault()), r.value = !1, s.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = async (d) => {
        var f;
        a("interactOutside", d), d.defaultPrevented || (r.value = !0, d.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const p = d.target;
        (f = l(o).triggerElement.value) != null && f.contains(p) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && s.value && d.preventDefault();
      })
    }), {
      default: y(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), t1 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = Uo(), r = le(n, a), { forwardRef: s } = H();
    return o.contentId || (o.contentId = Ee(void 0, "radix-vue-popover-content")), (i, u) => (g(), w(l(st), {
      present: i.forceMount || l(o).open.value
    }, {
      default: y(() => [
        l(o).modal.value ? (g(), w(Q_, P({ key: 0 }, l(r), { ref: l(s) }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), w(e1, P({ key: 1 }, l(r), { ref: l(s) }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function n1(e) {
  const t = S(() => e.start.value ? !!e.isDateDisabled(e.start.value) : !1), n = S(() => e.end.value ? !!e.isDateDisabled(e.end.value) : !1), a = S(
    () => t.value || n.value ? !1 : !!(e.start.value && e.end.value && vn(e.end.value, e.start.value))
  ), o = (u) => e.start.value ? Ne(e.start.value, u) : !1, r = (u) => e.end.value ? Ne(e.end.value, u) : !1, s = (u) => e.start.value && Ne(e.start.value, u) || e.end.value && Ne(e.end.value, u) ? !0 : e.end.value && e.start.value ? Eg(u, e.start.value, e.end.value) : !1, i = S(() => {
    if (e.start.value && e.end.value || !e.start.value || !e.focusedValue.value)
      return null;
    const u = vn(e.start.value, e.focusedValue.value), c = u ? e.start.value : e.focusedValue.value, d = u ? e.focusedValue.value : e.start.value;
    return Ne(c.add({ days: 1 }), d) ? {
      start: c,
      end: d
    } : Ig(c, d, e.isDateUnavailable, e.isDateDisabled) ? {
      start: c,
      end: d
    } : null;
  });
  return {
    isInvalid: a,
    isSelected: s,
    highlightedRange: i,
    isSelectionStart: o,
    isSelectionEnd: r,
    isHighlightedStart: (u) => !i.value || !i.value.start ? !1 : Ne(i.value.start, u),
    isHighlightedEnd: (u) => !i.value || !i.value.end ? !1 : Ne(i.value.end, u)
  };
}
const a1 = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, o1 = {
  role: "heading",
  "aria-level": "2"
}, [Na, r1] = de("RangeCalendarRoot"), s1 = /* @__PURE__ */ _({
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
    const n = e, a = t, {
      disabled: o,
      readonly: r,
      initialFocus: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: c,
      fixedWeeks: d,
      numberOfMonths: f,
      preventDeselect: p,
      isDateUnavailable: h,
      isDateDisabled: m,
      calendarLabel: v,
      maxValue: b,
      minValue: C,
      locale: $,
      dir: k,
      nextPage: D,
      prevPage: T
    } = _e(n), { primitiveElement: A, currentElement: M } = Xn(), N = Lt(k), V = R(), B = R(), E = xe(n, "modelValue", a, {
      defaultValue: n.defaultValue ?? { start: void 0, end: void 0 },
      passive: n.modelValue === void 0
    }), I = Qf({
      defaultPlaceholder: n.placeholder,
      defaultValue: E.value.start
    }), Y = R(E.value.start), q = R(E.value.end), W = xe(n, "placeholder", a, {
      defaultValue: n.defaultPlaceholder ?? I.copy(),
      passive: n.placeholder === void 0
    });
    function Q(fe) {
      W.value = fe.copy();
    }
    const {
      fullCalendarLabel: ie,
      headingValue: me,
      isDateDisabled: ve,
      isDateUnavailable: ze,
      isNextButtonDisabled: Be,
      isPrevButtonDisabled: $n,
      grid: Ht,
      weekdays: Sn,
      isOutsideVisibleView: St,
      nextPage: Tn,
      prevPage: Ke,
      formatter: We
    } = bp({
      locale: $,
      placeholder: W,
      weekStartsOn: u,
      fixedWeeks: d,
      numberOfMonths: f,
      minValue: C,
      maxValue: b,
      disabled: o,
      weekdayFormat: c,
      pagedNavigation: i,
      isDateDisabled: m.value,
      isDateUnavailable: h.value,
      calendarLabel: v,
      nextPage: D,
      prevPage: T
    }), {
      isInvalid: G,
      isSelected: X,
      highlightedRange: ae,
      isSelectionStart: U,
      isSelectionEnd: Ae,
      isHighlightedStart: ke,
      isHighlightedEnd: Ye
    } = n1({
      start: Y,
      end: q,
      isDateDisabled: ve,
      isDateUnavailable: ze,
      focusedValue: B
    });
    return te(E, (fe) => {
      fe.start && (!Y.value || !Dt(Y.value, fe.start)) && (Y.value = fe.start.copy()), fe.end && (!q.value || !Dt(q.value, fe.end)) && (q.value = fe.end.copy());
    }), te(Y, (fe) => {
      fe && !Dt(fe, W.value) && Q(fe), a("update:startValue", fe);
    }), te([Y, q], ([fe, Ue]) => {
      const je = E.value;
      if (!(je && je.start && je.end && fe && Ue && Dt(je.start, fe) && Dt(je.end, Ue)))
        if (fe && Ue) {
          if (je.start && je.end && Dt(je.start, fe) && Dt(je.end, Ue))
            return;
          vn(Ue, fe) ? E.value = {
            start: Ue.copy(),
            end: fe.copy()
          } : E.value = {
            start: fe.copy(),
            end: Ue.copy()
          };
        } else je.start && je.end && (E.value = {
          start: void 0,
          end: void 0
        });
    }), r1({
      isDateUnavailable: ze,
      startValue: Y,
      endValue: q,
      formatter: We,
      modelValue: E,
      placeholder: W,
      disabled: o,
      initialFocus: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: c,
      fixedWeeks: d,
      numberOfMonths: f,
      readonly: r,
      preventDeselect: p,
      fullCalendarLabel: ie,
      headingValue: me,
      isInvalid: G,
      isDateDisabled: ve,
      highlightedRange: ae,
      focusedValue: B,
      lastPressedDateValue: V,
      isSelected: X,
      isSelectionEnd: Ae,
      isSelectionStart: U,
      isNextButtonDisabled: Be,
      isPrevButtonDisabled: $n,
      isOutsideVisibleView: St,
      nextPage: Tn,
      prevPage: Ke,
      parentElement: M,
      onPlaceholderChange: Q,
      locale: $,
      dir: N,
      isHighlightedStart: ke,
      isHighlightedEnd: Ye
    }), pe(() => {
      s.value && ep(M.value);
    }), (fe, Ue) => (g(), w(l(z), {
      ref_key: "primitiveElement",
      ref: A,
      as: fe.as,
      "as-child": fe.asChild,
      role: "application",
      "aria-label": l(ie),
      "data-readonly": l(r) ? "" : void 0,
      "data-disabled": l(o) ? "" : void 0,
      "data-invalid": l(G) ? "" : void 0,
      dir: l(N)
    }, {
      default: y(() => [
        ce("div", a1, [
          ce("div", o1, oe(l(ie)), 1)
        ]),
        x(fe.$slots, "default", {
          date: l(W),
          grid: l(Ht),
          weekDays: l(Sn),
          weekStartsOn: l(u),
          locale: l($),
          fixedWeeks: l(d)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), i1 = /* @__PURE__ */ _({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), l1 = /* @__PURE__ */ _({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = Na();
    return (a, o) => (g(), w(l(z), P(t, {
      "data-disabled": l(n).disabled.value ? "" : void 0
    }), {
      default: y(() => [
        x(a.$slots, "default", {
          headingValue: l(n).headingValue.value
        }, () => [
          ee(oe(l(n).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), u1 = /* @__PURE__ */ _({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, n = Na(), a = S(() => n.disabled.value ? !0 : void 0), o = S(() => n.readonly.value ? !0 : void 0);
    return (r, s) => (g(), w(l(z), P(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": a.value,
      "data-readonly": o.value && "",
      "data-disabled": a.value && ""
    }), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), c1 = /* @__PURE__ */ _({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = Na();
    return (n, a) => {
      var o, r;
      return g(), w(l(z), {
        as: n.as,
        "as-child": n.asChild,
        role: "gridcell",
        "aria-selected": l(t).isSelected(n.date) ? !0 : void 0,
        "aria-disabled": l(t).isDateDisabled(n.date) || ((r = (o = l(t)).isDateUnavailable) == null ? void 0 : r.call(o, n.date)),
        "data-disabled": l(t).isDateDisabled(n.date) ? "" : void 0
      }, {
        default: y(() => [
          x(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), d1 = /* @__PURE__ */ _({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), f1 = /* @__PURE__ */ _({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = S(() => a.disabled.value || a.isNextButtonDisabled(t.step, t.nextPage)), a = Na();
    return (o, r) => (g(), w(l(z), P(t, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": n.value || void 0,
      "data-disabled": n.value || void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (s) => l(a).nextPage(t.step, t.nextPage))
    }), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ee("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), p1 = /* @__PURE__ */ _({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = S(() => a.disabled.value || a.isPrevButtonDisabled(t.step, t.prevPage)), a = Na();
    return (o, r) => (g(), w(l(z), P(t, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": n.value || void 0,
      "data-disabled": n.value || void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (s) => l(a).prevPage(t.step, t.prevPage))
    }), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ee("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), h1 = /* @__PURE__ */ _({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), P(t, { "aria-hidden": "true" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), v1 = /* @__PURE__ */ _({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), m1 = /* @__PURE__ */ _({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), g1 = /* @__PURE__ */ _({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = Na(), a = up(), { primitiveElement: o, currentElement: r } = Xn(), s = S(() => n.formatter.custom(mt(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = S(() => n.isDateDisabled(t.day)), u = S(() => {
      var V;
      return (V = n.isDateUnavailable) == null ? void 0 : V.call(n, t.day);
    }), c = S(() => n.isSelected(t.day)), d = S(() => n.isSelectionStart(t.day)), f = S(() => n.isSelectionEnd(t.day)), p = S(() => n.isHighlightedStart(t.day)), h = S(() => n.isHighlightedEnd(t.day)), m = S(() => n.highlightedRange.value ? Og(t.day, n.highlightedRange.value.start, n.highlightedRange.value.end) : !1), v = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", b = S(() => Bf(t.day, Kn())), C = S(() => !Mf(t.day, t.month)), $ = S(
      () => n.isOutsideVisibleView(t.day)
    ), k = S(() => t.day.day.toLocaleString(n.locale.value)), D = S(() => !n.disabled.value && Ne(t.day, n.placeholder.value));
    function T(V, B) {
      var E;
      if (!n.readonly.value && !(n.isDateDisabled(B) || (E = n.isDateUnavailable) != null && E.call(n, B))) {
        if (n.lastPressedDateValue.value = B.copy(), n.startValue.value && n.highlightedRange.value === null) {
          if (Ne(B, n.startValue.value) && !n.preventDeselect.value && !n.endValue.value) {
            n.startValue.value = void 0, n.onPlaceholderChange(B);
            return;
          } else if (!n.endValue.value) {
            V.preventDefault(), n.lastPressedDateValue.value && Ne(n.lastPressedDateValue.value, B) && (n.startValue.value = B.copy());
            return;
          }
        }
        if (n.startValue.value && n.endValue.value && Ne(n.endValue.value, B) && !n.preventDeselect.value) {
          n.startValue.value = void 0, n.endValue.value = void 0, n.onPlaceholderChange(B);
          return;
        }
        n.startValue.value ? n.endValue.value ? n.endValue.value && n.startValue.value && (n.endValue.value = void 0, n.startValue.value = B.copy()) : n.endValue.value = B.copy() : n.startValue.value = B.copy();
      }
    }
    function A(V) {
      T(V, t.day);
    }
    function M() {
      var V;
      n.isDateDisabled(t.day) || (V = n.isDateUnavailable) != null && V.call(n, t.day) || (n.focusedValue.value = t.day.copy());
    }
    function N(V) {
      V.preventDefault(), V.stopPropagation();
      const B = n.parentElement.value, E = B ? Array.from(B.querySelectorAll(v)) : [];
      let I = E.indexOf(r.value);
      const Y = 7, q = n.dir.value === "rtl" ? -1 : 1;
      switch (V.code) {
        case a.ARROW_RIGHT:
          I += q;
          break;
        case a.ARROW_LEFT:
          I -= q;
          break;
        case a.ARROW_UP:
          I -= Y;
          break;
        case a.ARROW_DOWN:
          I += Y;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          T(V, t.day);
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
        n.prevPage(), se(() => {
          const W = B ? Array.from(B.querySelectorAll(v)) : [];
          W[W.length - Math.abs(I)].focus();
        });
        return;
      }
      if (I >= E.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), se(() => {
          (B ? Array.from(B.querySelectorAll(v)) : [])[I - E.length].focus();
        });
      }
    }
    return (V, B) => (g(), w(l(z), P({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": s.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": c.value ? !0 : void 0,
      "aria-disabled": C.value || i.value || u.value ? !0 : void 0,
      "data-highlighted": m.value ? "" : void 0,
      "data-selection-start": d.value ? !0 : void 0,
      "data-selection-end": f.value ? !0 : void 0,
      "data-highlighted-start": p.value ? !0 : void 0,
      "data-highlighted-end": h.value ? !0 : void 0,
      "data-selected": c.value ? !0 : void 0,
      "data-outside-visible-view": $.value ? "" : void 0,
      "data-value": V.day.toString(),
      "data-disabled": i.value || C.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": b.value ? "" : void 0,
      "data-outside-month": C.value ? "" : void 0,
      "data-focused": D.value ? "" : void 0,
      tabindex: D.value ? 0 : C.value || i.value ? void 0 : -1,
      onClick: A,
      onFocusin: M,
      onMouseenter: M,
      onKeydown: yt(N, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: y(() => [
        x(V.$slots, "default", { dayValue: k.value }, () => [
          ee(oe(k.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
}), y1 = ["default-value"], b1 = /* @__PURE__ */ _({
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
    const t = e, { value: n } = _e(t), a = R();
    return (o, r) => (g(), w(l(Lo), { "as-child": "" }, {
      default: y(() => [
        Ba(ce("select", P({
          ref_key: "selectElement",
          ref: a
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (s) => Oo(n) ? n.value = s : null),
          "default-value": l(n)
        }), [
          x(o.$slots, "default")
        ], 16, y1), [
          [Fm, l(n)]
        ])
      ]),
      _: 3
    }));
  }
}), _1 = {
  key: 0,
  value: ""
}, [Jn, Ip] = de("SelectRoot"), [w1, x1] = de("SelectRoot"), C1 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = xe(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), r = xe(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = R(), i = R(), u = R({
      x: 0,
      y: 0
    }), c = R(!1), { required: d, disabled: f, dir: p } = _e(n), h = Lt(p);
    Ip({
      triggerElement: s,
      onTriggerChange: (C) => {
        s.value = C;
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
      open: r,
      required: d,
      onOpenChange: (C) => {
        r.value = C;
      },
      dir: h,
      triggerPointerDownPosRef: u,
      disabled: f
    });
    const m = Io(s), v = R(/* @__PURE__ */ new Set()), b = S(() => Array.from(v.value).map((C) => {
      var $;
      return ($ = C.props) == null ? void 0 : $.value;
    }).join(";"));
    return x1({
      onNativeOptionAdd: (C) => {
        v.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        v.value.delete(C);
      }
    }), (C, $) => (g(), w(l(Ia), null, {
      default: y(() => [
        x(C.$slots, "default", {
          modelValue: l(o),
          open: l(r)
        }),
        l(m) ? (g(), w(b1, P({ key: b.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: l(d),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: l(f),
          value: l(o),
          onChange: $[0] || ($[0] = (k) => o.value = k.target.value)
        }), {
          default: y(() => [
            l(o) === void 0 ? (g(), L("option", _1)) : ne("", !0),
            (g(!0), L(re, null, $e(Array.from(v.value), (k) => (g(), w(nt(k), P({ ref_for: !0 }, k.props, {
              key: k.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : ne("", !0)
      ]),
      _: 3
    }));
  }
}), k1 = [" ", "Enter", "ArrowUp", "ArrowDown"], $1 = [" ", "Enter"], jt = 10;
function Fp(e) {
  return e === "" || yr(e);
}
const S1 = /* @__PURE__ */ _({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Jn(), a = S(() => {
      var h;
      return ((h = n.disabled) == null ? void 0 : h.value) || t.disabled;
    }), { forwardRef: o, currentElement: r } = H();
    n.contentId || (n.contentId = Ee(void 0, "radix-vue-select-content")), pe(() => {
      n.triggerElement = r;
    });
    const { injectCollection: s } = Ea(), i = s(), { search: u, handleTypeaheadSearch: c, resetTypeahead: d } = Xl(i);
    function f() {
      a.value || (n.onOpenChange(!0), d());
    }
    function p(h) {
      f(), n.triggerPointerDownPosRef.value = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      };
    }
    return (h, m) => (g(), w(l(Cs), { "as-child": "" }, {
      default: y(() => {
        var v, b, C, $;
        return [
          O(l(z), {
            ref: l(o),
            role: "combobox",
            type: h.as === "button" ? "button" : void 0,
            "aria-controls": l(n).contentId,
            "aria-expanded": l(n).open.value || !1,
            "aria-required": (v = l(n).required) == null ? void 0 : v.value,
            "aria-autocomplete": "none",
            disabled: a.value,
            dir: (b = l(n)) == null ? void 0 : b.dir.value,
            "data-state": (C = l(n)) != null && C.open.value ? "open" : "closed",
            "data-disabled": a.value ? "" : void 0,
            "data-placeholder": l(Fp)(($ = l(n).modelValue) == null ? void 0 : $.value) ? "" : void 0,
            "as-child": h.asChild,
            as: h.as,
            onClick: m[0] || (m[0] = (k) => {
              var D;
              (D = k == null ? void 0 : k.currentTarget) == null || D.focus();
            }),
            onPointerdown: m[1] || (m[1] = (k) => {
              if (k.pointerType === "touch")
                return k.preventDefault();
              const D = k.target;
              D.hasPointerCapture(k.pointerId) && D.releasePointerCapture(k.pointerId), k.button === 0 && k.ctrlKey === !1 && (p(k), k.preventDefault());
            }),
            onPointerup: m[2] || (m[2] = Ie(
              (k) => {
                k.pointerType === "touch" && p(k);
              },
              ["prevent"]
            )),
            onKeydown: m[3] || (m[3] = (k) => {
              const D = l(u) !== "";
              !(k.ctrlKey || k.altKey || k.metaKey) && k.key.length === 1 && D && k.key === " " || (l(c)(k.key), l(k1).includes(k.key) && (f(), k.preventDefault()));
            })
          }, {
            default: y(() => [
              x(h.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), T1 = /* @__PURE__ */ _({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Vo), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [fu, D1] = de("SelectItemAlignedPosition"), M1 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { injectCollection: o } = Ea(), r = Jn(), s = Qn(), i = o(), u = R(!1), c = R(!0), d = R(), { forwardRef: f, currentElement: p } = H(), { viewport: h, selectedItem: m, selectedItemText: v, focusSelectedItem: b } = s;
    function C() {
      if (r.triggerElement.value && r.valueElement.value && d.value && p.value && h != null && h.value && m != null && m.value && v != null && v.value) {
        const D = r.triggerElement.value.getBoundingClientRect(), T = p.value.getBoundingClientRect(), A = r.valueElement.value.getBoundingClientRect(), M = v.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const Ke = M.left - T.left, We = A.left - Ke, G = D.left - We, X = D.width + G, ae = Math.max(X, T.width), U = window.innerWidth - jt, Ae = Fr(We, jt, U - ae);
          d.value.style.minWidth = `${X}px`, d.value.style.left = `${Ae}px`;
        } else {
          const Ke = T.right - M.right, We = window.innerWidth - A.right - Ke, G = window.innerWidth - D.right - We, X = D.width + G, ae = Math.max(X, T.width), U = window.innerWidth - jt, Ae = Fr(
            We,
            jt,
            U - ae
          );
          d.value.style.minWidth = `${X}px`, d.value.style.right = `${Ae}px`;
        }
        const N = i.value, V = window.innerHeight - jt * 2, B = h.value.scrollHeight, E = window.getComputedStyle(p.value), I = Number.parseInt(
          E.borderTopWidth,
          10
        ), Y = Number.parseInt(E.paddingTop, 10), q = Number.parseInt(
          E.borderBottomWidth,
          10
        ), W = Number.parseInt(
          E.paddingBottom,
          10
        ), Q = I + Y + B + W + q, ie = Math.min(
          m.value.offsetHeight * 5,
          Q
        ), me = window.getComputedStyle(h.value), ve = Number.parseInt(me.paddingTop, 10), ze = Number.parseInt(
          me.paddingBottom,
          10
        ), Be = D.top + D.height / 2 - jt, $n = V - Be, Ht = m.value.offsetHeight / 2, Sn = m.value.offsetTop + Ht, St = I + Y + Sn, Tn = Q - St;
        if (St <= Be) {
          const Ke = m.value === N[N.length - 1];
          d.value.style.bottom = "0px";
          const We = p.value.clientHeight - h.value.offsetTop - h.value.offsetHeight, G = Math.max(
            $n,
            Ht + (Ke ? ze : 0) + We + q
          ), X = St + G;
          d.value.style.height = `${X}px`;
        } else {
          const Ke = m.value === N[0];
          d.value.style.top = "0px";
          const We = Math.max(
            Be,
            I + h.value.offsetTop + (Ke ? ve : 0) + Ht
          ) + Tn;
          d.value.style.height = `${We}px`, h.value.scrollTop = St - Be + h.value.offsetTop;
        }
        d.value.style.margin = `${jt}px 0`, d.value.style.minHeight = `${ie}px`, d.value.style.maxHeight = `${V}px`, a("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const $ = R("");
    pe(async () => {
      await se(), C(), p.value && ($.value = window.getComputedStyle(p.value).zIndex);
    });
    function k(D) {
      D && c.value === !0 && (C(), b == null || b(), c.value = !1);
    }
    return D1({
      contentWrapper: d,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: k
    }), (D, T) => (g(), L("div", {
      ref_key: "contentWrapperElement",
      ref: d,
      style: Ft({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: $.value
      })
    }, [
      O(l(z), P({
        ref: l(f),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...D.$attrs, ...n }), {
        default: y(() => [
          x(D.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), B1 = /* @__PURE__ */ _({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: jt },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = he(e);
    return (n, a) => (g(), w(l(wa), P(l(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), La = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Qn, A1] = de("SelectContent"), O1 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = Jn();
    ql(), Ro(n.bodyLock);
    const { createCollection: r } = Ea(), s = R();
    Fo(s);
    const i = r(s), { search: u, handleTypeaheadSearch: c } = Xl(i), d = R(), f = R(), p = R(), h = R(!1), m = R(!1);
    function v() {
      f.value && s.value && Li([f.value, s.value]);
    }
    te(h, () => {
      v();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: C } = o;
    De((T) => {
      if (!s.value)
        return;
      let A = { x: 0, y: 0 };
      const M = (V) => {
        var B, E;
        A = {
          x: Math.abs(
            Math.round(V.pageX) - (((B = C.value) == null ? void 0 : B.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(V.pageY) - (((E = C.value) == null ? void 0 : E.y) ?? 0)
          )
        };
      }, N = (V) => {
        var B;
        V.pointerType !== "touch" && (A.x <= 10 && A.y <= 10 ? V.preventDefault() : (B = s.value) != null && B.contains(V.target) || b(!1), document.removeEventListener("pointermove", M), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", M), document.addEventListener("pointerup", N, {
        capture: !0,
        once: !0
      })), T(() => {
        document.removeEventListener("pointermove", M), document.removeEventListener("pointerup", N, {
          capture: !0
        });
      });
    });
    function $(T) {
      const A = T.ctrlKey || T.altKey || T.metaKey;
      if (T.key === "Tab" && T.preventDefault(), !A && T.key.length === 1 && c(T.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(T.key)) {
        let M = i.value;
        if (["ArrowUp", "End"].includes(T.key) && (M = M.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(T.key)) {
          const N = T.target, V = M.indexOf(N);
          M = M.slice(V + 1);
        }
        setTimeout(() => Li(M)), T.preventDefault();
      }
    }
    const k = S(() => n.position === "popper" ? n : {}), D = he(k.value);
    return A1({
      content: s,
      viewport: d,
      onViewportChange: (T) => {
        d.value = T;
      },
      itemRefCallback: (T, A, M) => {
        var N, V;
        const B = !m.value && !M;
        (((N = o.modelValue) == null ? void 0 : N.value) !== void 0 && ((V = o.modelValue) == null ? void 0 : V.value) === A || B) && (f.value = T, B && (m.value = !0));
      },
      selectedItem: f,
      selectedItemText: p,
      onItemLeave: () => {
        var T;
        (T = s.value) == null || T.focus();
      },
      itemTextRefCallback: (T, A, M) => {
        var N, V;
        const B = !m.value && !M;
        (((N = o.modelValue) == null ? void 0 : N.value) !== void 0 && ((V = o.modelValue) == null ? void 0 : V.value) === A || B) && (p.value = T);
      },
      focusSelectedItem: v,
      position: n.position,
      isPositioned: h,
      searchRef: u
    }), (T, A) => (g(), w(l(xs), {
      "as-child": "",
      onMountAutoFocus: A[6] || (A[6] = Ie(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: A[7] || (A[7] = (M) => {
        var N;
        a("closeAutoFocus", M), !M.defaultPrevented && ((N = l(o).triggerElement.value) == null || N.focus({ preventScroll: !0 }), M.preventDefault());
      })
    }, {
      default: y(() => [
        O(l(Pa), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: A[2] || (A[2] = Ie(() => {
          }, ["prevent"])),
          onDismiss: A[3] || (A[3] = (M) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: A[4] || (A[4] = (M) => a("escapeKeyDown", M)),
          onPointerDownOutside: A[5] || (A[5] = (M) => a("pointerDownOutside", M))
        }, {
          default: y(() => [
            (g(), w(nt(
              T.position === "popper" ? B1 : M1
            ), P({ ...T.$attrs, ...l(D) }, {
              id: l(o).contentId,
              ref: (M) => {
                s.value = l(dt)(M);
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
              onContextmenu: A[0] || (A[0] = Ie(() => {
              }, ["prevent"])),
              onPlaced: A[1] || (A[1] = (M) => h.value = !0),
              onKeydown: $
            }), {
              default: y(() => [
                x(T.$slots, "default")
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
}), E1 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Ip(e.context), (t, n) => x(t.$slots, "default");
  }
}), P1 = { key: 1 }, R1 = /* @__PURE__ */ _({
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
    const n = e, a = le(n, t), o = Jn(), r = R();
    pe(() => {
      r.value = new DocumentFragment();
    });
    const s = R(), i = S(() => n.forceMount || o.open.value);
    return (u, c) => {
      var d;
      return i.value ? (g(), w(l(st), {
        key: 0,
        ref_key: "presenceRef",
        ref: s,
        present: !0
      }, {
        default: y(() => [
          O(O1, K(Z({ ...l(a), ...u.$attrs })), {
            default: y(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((d = s.value) != null && d.present) && r.value ? (g(), L("div", P1, [
        (g(), w(ps, { to: r.value }, [
          O(E1, { context: l(o) }, {
            default: y(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : ne("", !0);
    };
  }
}), I1 = /* @__PURE__ */ _({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), P({ "aria-hidden": "true" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Vp, F1] = de("SelectItem"), V1 = /* @__PURE__ */ _({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = _e(t), a = Jn(), o = Qn(La), { forwardRef: r, currentElement: s } = H(), i = S(() => {
      var v;
      return ((v = a.modelValue) == null ? void 0 : v.value) === t.value;
    }), u = R(!1), c = R(t.textValue ?? ""), d = Ee(void 0, "radix-vue-select-item-text");
    async function f(v) {
      await se(), !(v != null && v.defaultPrevented) && (n.value || (a.onValueChange(t.value), a.onOpenChange(!1)));
    }
    async function p(v) {
      var b;
      await se(), !v.defaultPrevented && (n.value ? (b = o.onItemLeave) == null || b.call(o) : v.currentTarget.focus({ preventScroll: !0 }));
    }
    async function h(v) {
      var b;
      await se(), !v.defaultPrevented && v.currentTarget === document.activeElement && ((b = o.onItemLeave) == null || b.call(o));
    }
    async function m(v) {
      var b;
      await se(), !(v.defaultPrevented || ((b = o.searchRef) == null ? void 0 : b.value) !== "" && v.key === " ") && ($1.includes(v.key) && f(), v.key === " " && v.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return pe(() => {
      s.value && o.itemRefCallback(
        s.value,
        t.value,
        t.disabled
      );
    }), F1({
      value: t.value,
      disabled: n,
      textId: d,
      isSelected: i,
      onItemTextChange: (v) => {
        c.value = ((c.value || (v == null ? void 0 : v.textContent)) ?? "").trim();
      }
    }), (v, b) => (g(), w(l(z), {
      ref: l(r),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": l(d),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": l(n) || void 0,
      "data-disabled": l(n) ? "" : void 0,
      tabindex: l(n) ? void 0 : -1,
      as: v.as,
      "as-child": v.asChild,
      onFocus: b[0] || (b[0] = (C) => u.value = !0),
      onBlur: b[1] || (b[1] = (C) => u.value = !1),
      onPointerup: f,
      onPointerdown: b[2] || (b[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: b[3] || (b[3] = Ie(() => {
      }, ["prevent", "stop"])),
      onPointermove: p,
      onPointerleave: h,
      onKeydown: m
    }, {
      default: y(() => [
        x(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), N1 = /* @__PURE__ */ _({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Vp();
    return (a, o) => l(n).isSelected.value ? (g(), w(l(z), P({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16)) : ne("", !0);
  }
}), [L1, z1] = de("SelectGroup"), U1 = /* @__PURE__ */ _({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ee(void 0, "radix-vue-select-group");
    return z1({ id: n }), (a, o) => (g(), w(l(z), P({ role: "group" }, t, { "aria-labelledby": l(n) }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), H1 = /* @__PURE__ */ _({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = L1({ id: "" });
    return (a, o) => (g(), w(l(z), P(t, {
      id: l(n).id
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Np = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Jn(), a = Qn(La), o = w1(), r = Vp(), { forwardRef: s, currentElement: i } = H(), u = S(() => {
      var c;
      return Ot("option", {
        key: r.value,
        value: r.value,
        disabled: r.disabled.value,
        textContent: (c = i.value) == null ? void 0 : c.textContent
      });
    });
    return pe(() => {
      i.value && (r.onItemTextChange(i.value), a.itemTextRefCallback(
        i.value,
        r.value,
        r.disabled.value
      ), o.onNativeOptionAdd(u.value));
    }), Bl(() => {
      o.onNativeOptionRemove(u.value);
    }), (c, d) => (g(), L(re, null, [
      O(l(z), P({
        id: l(r).textId,
        ref: l(s)
      }, { ...t, ...c.$attrs }), {
        default: y(() => [
          x(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      l(r).isSelected.value && l(n).valueElement.value && !l(n).valueElementHasChildren.value ? (g(), w(ps, {
        key: 0,
        to: l(n).valueElement.value
      }, [
        x(c.$slots, "default")
      ], 8, ["to"])) : ne("", !0)
    ], 64));
  }
}), W1 = /* @__PURE__ */ _({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = _e(t), a = Ub(n), o = Qn(La), r = o.position === "item-aligned" ? fu() : void 0, { forwardRef: s, currentElement: i } = H();
    pe(() => {
      o == null || o.onViewportChange(i.value);
    });
    const u = R(0);
    function c(d) {
      const f = d.currentTarget, { shouldExpandOnScrollRef: p, contentWrapper: h } = r ?? {};
      if (p != null && p.value && h != null && h.value) {
        const m = Math.abs(u.value - f.scrollTop);
        if (m > 0) {
          const v = window.innerHeight - jt * 2, b = Number.parseFloat(
            h.value.style.minHeight
          ), C = Number.parseFloat(h.value.style.height), $ = Math.max(b, C);
          if ($ < v) {
            const k = $ + m, D = Math.min(v, k), T = k - D;
            h.value.style.height = `${D}px`, h.value.style.bottom === "0px" && (f.scrollTop = T > 0 ? T : 0, h.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = f.scrollTop;
    }
    return (d, f) => (g(), L(re, null, [
      O(l(z), P({
        ref: l(s),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...d.$attrs, ...t }, {
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
        default: y(() => [
          x(d.$slots, "default")
        ]),
        _: 3
      }, 16),
      O(l(z), {
        as: "style",
        nonce: l(a)
      }, {
        default: y(() => [
          ee(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Lp = /* @__PURE__ */ _({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: a } = Ea(), o = a(), r = Qn(La), s = R(null);
    function i() {
      s.value !== null && (window.clearInterval(s.value), s.value = null);
    }
    De(() => {
      const d = o.value.find(
        (f) => f === document.activeElement
      );
      d == null || d.scrollIntoView({ block: "nearest" });
    });
    function u() {
      s.value === null && (s.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    function c() {
      var d;
      (d = r.onItemLeave) == null || d.call(r), s.value === null && (s.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    return Bl(() => i()), (d, f) => {
      var p;
      return g(), w(l(z), P({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (p = d.$parent) == null ? void 0 : p.$props, {
        onPointerdown: u,
        onPointermove: c,
        onPointerleave: f[0] || (f[0] = () => {
          i();
        })
      }), {
        default: y(() => [
          x(d.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Y1 = /* @__PURE__ */ _({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Qn(La), n = t.position === "item-aligned" ? fu() : void 0, { forwardRef: a, currentElement: o } = H(), r = R(!1);
    return De((s) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let c = function() {
          r.value = d.scrollTop > 0;
        };
        const d = t.viewport.value;
        c(), d.addEventListener("scroll", c), s(() => d.removeEventListener("scroll", c));
      }
    }), te(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (s, i) => r.value ? (g(), w(Lp, {
      key: 0,
      ref: l(a),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: c } = l(t);
        u != null && u.value && c != null && c.value && (u.value.scrollTop = u.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : ne("", !0);
  }
}), K1 = /* @__PURE__ */ _({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Qn(La), n = t.position === "item-aligned" ? fu() : void 0, { forwardRef: a, currentElement: o } = H(), r = R(!1);
    return De((s) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let c = function() {
          const f = d.scrollHeight - d.clientHeight;
          r.value = Math.ceil(d.scrollTop) < f;
        };
        const d = t.viewport.value;
        c(), d.addEventListener("scroll", c), s(() => d.removeEventListener("scroll", c));
      }
    }), te(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (s, i) => r.value ? (g(), w(Lp, {
      key: 0,
      ref: l(a),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: c } = l(t);
        u != null && u.value && c != null && c.value && (u.value.scrollTop = u.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : ne("", !0);
  }
}), j1 = /* @__PURE__ */ _({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = H(), a = Jn(), o = _f();
    return Pm(() => {
      var r;
      const s = !!bs((r = o == null ? void 0 : o.default) == null ? void 0 : r.call(o)).length;
      a.onValueElementHasChildrenChange(s);
    }), pe(() => {
      a.valueElement = n;
    }), (r, s) => (g(), w(l(z), {
      ref: l(t),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: y(() => {
        var i;
        return [
          l(Fp)((i = l(a).modelValue) == null ? void 0 : i.value) ? (g(), L(re, { key: 0 }, [
            ee(oe(r.placeholder), 1)
          ], 64)) : x(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), G1 = /* @__PURE__ */ _({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (g(), w(l(z), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: y(() => [
        x(t.$slots, "default", {}, () => [
          ee("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), q1 = /* @__PURE__ */ _({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ["horizontal", "vertical"];
    function a(i) {
      return n.includes(i);
    }
    const o = S(
      () => a(t.orientation) ? t.orientation : "horizontal"
    ), r = S(
      () => o.value === "vertical" ? t.orientation : void 0
    ), s = S(
      () => t.decorative ? { role: "none" } : { "aria-orientation": r.value, role: "separator" }
    );
    return (i, u) => (g(), w(l(z), P({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": o.value
    }, s.value), {
      default: y(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), X1 = /* @__PURE__ */ _({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(q1, K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Z1(e = [], t, n) {
  const a = [...e];
  return a[n] = t, a.sort((o, r) => o - r);
}
function zp(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Fr(a, 0, 100);
}
function J1(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Q1(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((o) => Math.abs(o - t)), a = Math.min(...n);
  return n.indexOf(a);
}
function ew(e, t, n) {
  const a = e / 2, o = pu([0, 50], [0, a]);
  return (a - o(t) * n) * n;
}
function tw(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function nw(e, t) {
  if (t > 0) {
    const n = tw(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function pu(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const a = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + a * (n - e[0]);
  };
}
function aw(e) {
  return (String(e).split(".")[1] || "").length;
}
function ow(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const Up = ["PageUp", "PageDown"], Hp = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Wp = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Yp, Kp] = de(["SliderVertical", "SliderHorizontal"]), jp = /* @__PURE__ */ _({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = $s();
    return (r, s) => (g(), w(l(z), P({ "data-slider-impl": "" }, n, {
      onKeydown: s[0] || (s[0] = (i) => {
        i.key === "Home" ? (a("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (a("endKeyDown", i), i.preventDefault()) : l(Up).concat(l(Hp)).includes(i.key) && (a("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: s[1] || (s[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), l(o).thumbElements.value.includes(u) ? u.focus() : a("slideStart", i);
      }),
      onPointermove: s[2] || (s[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && a("slideMove", i);
      }),
      onPointerup: s[3] || (s[3] = (i) => {
        const u = i.target;
        u.hasPointerCapture(i.pointerId) && (u.releasePointerCapture(i.pointerId), a("slideEnd", i));
      })
    }), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rw = /* @__PURE__ */ _({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, { max: o, min: r, dir: s, inverted: i } = _e(n), { forwardRef: u, currentElement: c } = H(), d = R(), f = S(() => (s == null ? void 0 : s.value) === "ltr" && !i.value || (s == null ? void 0 : s.value) !== "ltr" && i.value);
    function p(h) {
      const m = d.value || c.value.getBoundingClientRect(), v = [0, m.width], b = f.value ? [r.value, o.value] : [o.value, r.value], C = pu(v, b);
      return d.value = m, C(h - m.left);
    }
    return Kp({
      startEdge: f.value ? "left" : "right",
      endEdge: f.value ? "right" : "left",
      direction: f.value ? 1 : -1,
      size: "width"
    }), (h, m) => (g(), w(jp, {
      ref: l(u),
      dir: l(s),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: m[0] || (m[0] = (v) => {
        const b = p(v.clientX);
        a("slideStart", b);
      }),
      onSlideMove: m[1] || (m[1] = (v) => {
        const b = p(v.clientX);
        a("slideMove", b);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        d.value = void 0, a("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (v) => {
        const b = f.value ? "from-left" : "from-right", C = l(Wp)[b].includes(v.key);
        a("stepKeyDown", v, C ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (v) => a("endKeyDown", v)),
      onHomeKeyDown: m[5] || (m[5] = (v) => a("homeKeyDown", v))
    }, {
      default: y(() => [
        x(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), sw = /* @__PURE__ */ _({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, { max: o, min: r, inverted: s } = _e(n), { forwardRef: i, currentElement: u } = H(), c = R(), d = S(() => !s.value);
    function f(p) {
      const h = c.value || u.value.getBoundingClientRect(), m = [0, h.height], v = d.value ? [o.value, r.value] : [r.value, o.value], b = pu(m, v);
      return c.value = h, b(p - h.top);
    }
    return Kp({
      startEdge: d.value ? "bottom" : "top",
      endEdge: d.value ? "top" : "bottom",
      size: "height",
      direction: d.value ? 1 : -1
    }), (p, h) => (g(), w(jp, {
      ref: l(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: h[0] || (h[0] = (m) => {
        const v = f(m.clientY);
        a("slideStart", v);
      }),
      onSlideMove: h[1] || (h[1] = (m) => {
        const v = f(m.clientY);
        a("slideMove", v);
      }),
      onSlideEnd: h[2] || (h[2] = () => {
        c.value = void 0, a("slideEnd");
      }),
      onStepKeyDown: h[3] || (h[3] = (m) => {
        const v = d.value ? "from-bottom" : "from-top", b = l(Wp)[v].includes(m.key);
        a("stepKeyDown", m, b ? -1 : 1);
      }),
      onEndKeyDown: h[4] || (h[4] = (m) => a("endKeyDown", m)),
      onHomeKeyDown: h[5] || (h[5] = (m) => a("homeKeyDown", m))
    }, {
      default: y(() => [
        x(p.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), iw = ["value", "name", "disabled", "step"], [$s, lw] = de("SliderRoot"), uw = /* @__PURE__ */ _({
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
    const n = e, a = t, { min: o, max: r, step: s, minStepsBetweenThumbs: i, orientation: u, disabled: c, dir: d } = _e(n), f = Lt(d), { forwardRef: p, currentElement: h } = H(), m = Io(h);
    su();
    const v = xe(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), b = R(0), C = R(v.value);
    function $(M) {
      const N = Q1(v.value, M);
      T(M, N);
    }
    function k(M) {
      T(M, b.value);
    }
    function D() {
      const M = C.value[b.value];
      v.value[b.value] !== M && a("valueCommit", mr(v.value));
    }
    function T(M, N, { commit: V } = { commit: !1 }) {
      var B;
      const E = aw(s.value), I = ow(Math.round((M - o.value) / s.value) * s.value + o.value, E), Y = Fr(I, o.value, r.value), q = Z1(v.value, Y, N);
      if (nw(q, i.value * s.value)) {
        b.value = q.indexOf(Y);
        const W = String(q) !== String(v.value);
        W && V && a("valueCommit", q), W && ((B = A.value[b.value]) == null || B.focus(), v.value = q);
      }
    }
    const A = R([]);
    return lw({
      modelValue: v,
      valueIndexToChangeRef: b,
      thumbElements: A,
      orientation: u,
      min: o,
      max: r,
      disabled: c
    }), (M, N) => (g(), L(re, null, [
      O(l(iu), null, {
        default: y(() => [
          (g(), w(nt(l(u) === "horizontal" ? rw : sw), P(M.$attrs, {
            ref: l(p),
            "as-child": M.asChild,
            as: M.as,
            min: l(o),
            max: l(r),
            dir: l(f),
            inverted: M.inverted,
            "aria-disabled": l(c),
            "data-disabled": l(c) ? "" : void 0,
            onPointerdown: N[0] || (N[0] = () => {
              l(c) || (C.value = l(v));
            }),
            onSlideStart: N[1] || (N[1] = (V) => !l(c) && $(V)),
            onSlideMove: N[2] || (N[2] = (V) => !l(c) && k(V)),
            onSlideEnd: N[3] || (N[3] = (V) => !l(c) && D()),
            onHomeKeyDown: N[4] || (N[4] = (V) => !l(c) && T(l(o), 0, { commit: !0 })),
            onEndKeyDown: N[5] || (N[5] = (V) => !l(c) && T(l(r), l(v).length - 1, { commit: !0 })),
            onStepKeyDown: N[6] || (N[6] = (V, B) => {
              if (!l(c)) {
                const E = l(Up).includes(V.key) || V.shiftKey && l(Hp).includes(V.key) ? 10 : 1, I = b.value, Y = l(v)[I], q = l(s) * E * B;
                T(Y + q, I, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              x(M.$slots, "default", { modelValue: l(v) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      l(m) ? (g(!0), L(re, { key: 0 }, $e(l(v), (V, B) => (g(), L("input", {
        key: B,
        value: V,
        type: "number",
        style: { display: "none" },
        name: M.name ? M.name + (l(v).length > 1 ? "[]" : "") : void 0,
        disabled: l(c),
        step: l(s)
      }, null, 8, iw))), 128)) : ne("", !0)
    ], 64));
  }
}), cw = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = $s(), a = Yp(), { forwardRef: o, currentElement: r } = H(), s = S(() => {
      var h, m;
      return (m = (h = n.modelValue) == null ? void 0 : h.value) == null ? void 0 : m[t.index];
    }), i = S(() => s.value === void 0 ? 0 : zp(s.value, n.min.value ?? 0, n.max.value ?? 100)), u = S(() => {
      var h, m;
      return J1(t.index, ((m = (h = n.modelValue) == null ? void 0 : h.value) == null ? void 0 : m.length) ?? 0);
    }), c = lp(r), d = S(() => c[a.size].value), f = S(() => d.value ? ew(d.value, i.value, a.direction) : 0), p = Gl();
    return pe(() => {
      n.thumbElements.value.push(r.value);
    }), Je(() => {
      const h = n.thumbElements.value.findIndex((m) => m === r.value) ?? -1;
      n.thumbElements.value.splice(h, 1);
    }), (h, m) => (g(), w(l(ks), null, {
      default: y(() => [
        O(l(z), P(h.$attrs, {
          ref: l(o),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: l(n).disabled.value ? void 0 : 0,
          "aria-label": h.$attrs["aria-label"] || u.value,
          "data-disabled": l(n).disabled.value ? "" : void 0,
          "data-orientation": l(n).orientation.value,
          "aria-valuenow": s.value,
          "aria-valuemin": l(n).min.value,
          "aria-valuemax": l(n).max.value,
          "aria-orientation": l(n).orientation.value,
          "as-child": h.asChild,
          as: h.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [l(a).startEdge]: `calc(${i.value}% + ${f.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !l(p) && s.value === void 0 ? "none" : void 0
          },
          onFocus: m[0] || (m[0] = () => {
            l(n).valueIndexToChangeRef.value = h.index;
          })
        }), {
          default: y(() => [
            x(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), dw = /* @__PURE__ */ _({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = lu(), { forwardRef: a, currentElement: o } = H(), r = S(() => o.value ? n().findIndex((s) => s.ref === o.value) : -1);
    return (s, i) => (g(), w(cw, P({ ref: l(a) }, t, { index: r.value }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), fw = /* @__PURE__ */ _({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = $s();
    return H(), (n, a) => (g(), w(l(z), {
      "as-child": n.asChild,
      as: n.as,
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), pw = /* @__PURE__ */ _({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = $s(), n = Yp();
    H();
    const a = S(() => {
      var s, i;
      return (i = (s = t.modelValue) == null ? void 0 : s.value) == null ? void 0 : i.map(
        (u) => zp(u, t.min.value, t.max.value)
      );
    }), o = S(() => t.modelValue.value.length > 1 ? Math.min(...a.value) : 0), r = S(() => 100 - Math.max(...a.value));
    return (s, i) => (g(), w(l(z), {
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value,
      "as-child": s.asChild,
      as: s.as,
      style: Ft({
        [l(n).startEdge]: `${o.value}%`,
        [l(n).endEdge]: `${r.value}%`
      })
    }, {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function hw() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
hw();
const vw = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [mw, gw] = de("SwitchRoot"), yw = /* @__PURE__ */ _({
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
    const n = e, a = t, { disabled: o } = _e(n), r = xe(n, "checked", a, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function s() {
      o.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = H(), c = Io(u), d = S(() => {
      var f;
      return n.id && u.value ? (f = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : f.innerText : void 0;
    });
    return gw({
      checked: r,
      toggleCheck: s,
      disabled: o
    }), (f, p) => (g(), L(re, null, [
      O(l(z), P(f.$attrs, {
        id: f.id,
        ref: l(i),
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
        onClick: s,
        onKeydown: yt(Ie(s, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          x(f.$slots, "default", { checked: l(r) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      l(c) ? (g(), L("input", {
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
      }, null, 8, vw)) : ne("", !0)
    ], 64));
  }
}), bw = /* @__PURE__ */ _({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = mw();
    return H(), (n, a) => {
      var o;
      return g(), w(l(z), {
        "data-state": (o = l(t).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": l(t).disabled.value ? "" : void 0,
        "as-child": n.asChild,
        as: n.as
      }, {
        default: y(() => [
          x(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [hu, _w] = de("TabsRoot"), ww = /* @__PURE__ */ _({
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
    const n = e, a = t, { orientation: o, dir: r } = _e(n), s = Lt(r);
    H();
    const i = xe(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = R();
    return _w({
      modelValue: i,
      changeModelValue: (c) => {
        i.value = c;
      },
      orientation: o,
      dir: s,
      activationMode: n.activationMode,
      baseId: Ee(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (c, d) => (g(), w(l(z), {
      dir: l(s),
      "data-orientation": l(o),
      "as-child": c.asChild,
      as: c.as
    }, {
      default: y(() => [
        x(c.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), xw = /* @__PURE__ */ _({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = _e(t), { forwardRef: a, currentElement: o } = H(), r = hu();
    return r.tabsList = o, (s, i) => (g(), w(l(Tp), {
      "as-child": "",
      orientation: l(r).orientation.value,
      dir: l(r).dir.value,
      loop: l(n)
    }, {
      default: y(() => [
        O(l(z), {
          ref: l(a),
          role: "tablist",
          "as-child": s.asChild,
          as: s.as,
          "aria-orientation": l(r).orientation.value
        }, {
          default: y(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function Gp(e, t) {
  return `${e}-trigger-${t}`;
}
function qp(e, t) {
  return `${e}-content-${t}`;
}
const Cw = /* @__PURE__ */ _({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = H(), a = hu(), o = S(() => Gp(a.baseId, t.value)), r = S(() => qp(a.baseId, t.value)), s = S(() => t.value === a.modelValue.value), i = R(s.value);
    return pe(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, c) => (g(), w(l(st), {
      present: s.value,
      "force-mount": ""
    }, {
      default: y(({ present: d }) => [
        O(l(z), {
          id: r.value,
          ref: l(n),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": s.value ? "active" : "inactive",
          "data-orientation": l(a).orientation.value,
          "aria-labelledby": o.value,
          hidden: !d.value,
          tabindex: "0",
          style: Ft({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || s.value ? x(u.$slots, "default", { key: 0 }) : ne("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), kw = /* @__PURE__ */ _({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = H(), a = hu(), o = S(() => Gp(a.baseId, t.value)), r = S(() => qp(a.baseId, t.value)), s = S(() => t.value === a.modelValue.value);
    return (i, u) => (g(), w(l(r_), {
      "as-child": "",
      focusable: !i.disabled,
      active: s.value
    }, {
      default: y(() => [
        O(l(z), {
          id: o.value,
          ref: l(n),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": s.value ? "true" : "false",
          "aria-controls": r.value,
          "data-state": s.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": l(a).orientation.value,
          onMousedown: u[0] || (u[0] = Ie((c) => {
            !i.disabled && c.ctrlKey === !1 ? l(a).changeModelValue(i.value) : c.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = yt((c) => l(a).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const c = l(a).activationMode !== "manual";
            !s.value && !i.disabled && c && l(a).changeModelValue(i.value);
          })
        }, {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [Ss, $w] = de("ToastProvider"), Sw = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: a, swipeDirection: o, swipeThreshold: r } = _e(t), s = R(), i = R(0), u = R(!1), c = R(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const d = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(d);
    }
    return $w({
      label: n,
      duration: a,
      swipeDirection: o,
      swipeThreshold: r,
      toastCount: i,
      viewport: s,
      onViewportChange(d) {
        s.value = d;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: c
    }), (d, f) => x(d.$slots, "default");
  }
}), Tw = "toast.swipeStart", Dw = "toast.swipeMove", Mw = "toast.swipeCancel", Bw = "toast.swipeEnd", Ui = "toast.viewportPause", Hi = "toast.viewportResume";
function ar(e, t, n) {
  const a = n.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
function Tc(e, t, n = 0) {
  const a = Math.abs(e.x), o = Math.abs(e.y), r = a > o;
  return t === "left" || t === "right" ? r && a > n : !r && o > n;
}
function Aw(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Xp(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Aw(n)) {
      const a = n.ariaHidden || n.hidden || n.style.display === "none", o = n.dataset.radixToastAnnounceExclude === "";
      if (!a)
        if (o) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...Xp(n));
    }
  }), t;
}
const Ow = /* @__PURE__ */ _({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Ss(), n = Ly(1e3), a = R(!1);
    return op(() => {
      a.value = !0;
    }), (o, r) => l(n) || a.value ? (g(), w(l(Lo), { key: 0 }, {
      default: y(() => [
        ee(oe(l(t).label.value) + " ", 1),
        x(o.$slots, "default")
      ]),
      _: 3
    })) : ne("", !0);
  }
}), [Ew, Pw] = de("ToastRoot"), Rw = /* @__PURE__ */ _({
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
    const n = e, a = t, { forwardRef: o, currentElement: r } = H(), s = Ss(), i = R(null), u = R(null), c = S(() => n.duration || s.duration.value), d = R(0), f = R(c.value), p = R(0), h = R(c.value), m = op(() => {
      const $ = (/* @__PURE__ */ new Date()).getTime() - d.value;
      h.value = Math.max(f.value - $, 0);
    }, { fpsLimit: 60 });
    function v($) {
      !$ || $ === Number.POSITIVE_INFINITY || Nt && (window.clearTimeout(p.value), d.value = (/* @__PURE__ */ new Date()).getTime(), p.value = window.setTimeout(b, $));
    }
    function b() {
      var $, k;
      ($ = r.value) != null && $.contains(document.activeElement) && ((k = s.viewport.value) == null || k.focus()), s.isClosePausedRef.value = !1, a("close");
    }
    const C = S(() => r.value ? Xp(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const $ = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error($);
    }
    return De(($) => {
      const k = s.viewport.value;
      if (k) {
        const D = () => {
          v(f.value), m.resume(), a("resume");
        }, T = () => {
          const A = (/* @__PURE__ */ new Date()).getTime() - d.value;
          f.value = f.value - A, window.clearTimeout(p.value), m.pause(), a("pause");
        };
        return k.addEventListener(Ui, T), k.addEventListener(Hi, D), () => {
          k.removeEventListener(Ui, T), k.removeEventListener(Hi, D);
        };
      }
    }), te(() => [n.open, c.value], () => {
      f.value = c.value, n.open && !s.isClosePausedRef.value && v(c.value);
    }, { immediate: !0 }), jl("Escape", ($) => {
      a("escapeKeyDown", $), $.defaultPrevented || (s.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), pe(() => {
      s.onToastAdd();
    }), Je(() => {
      s.onToastRemove();
    }), Pw({ onClose: b }), ($, k) => (g(), L(re, null, [
      C.value ? (g(), w(Ow, {
        key: 0,
        role: "status",
        "aria-live": $.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: y(() => [
          ee(oe(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : ne("", !0),
      l(s).viewport.value ? (g(), w(ps, {
        key: 1,
        to: l(s).viewport.value
      }, [
        O(l(z), P({
          ref: l(o),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, $.$attrs, {
          as: $.as,
          "as-child": $.asChild,
          "data-state": $.open ? "open" : "closed",
          "data-swipe-direction": l(s).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: k[0] || (k[0] = Ie((D) => {
            i.value = { x: D.clientX, y: D.clientY };
          }, ["left"])),
          onPointermove: k[1] || (k[1] = (D) => {
            if (!i.value) return;
            const T = D.clientX - i.value.x, A = D.clientY - i.value.y, M = !!u.value, N = ["left", "right"].includes(l(s).swipeDirection.value), V = ["left", "up"].includes(l(s).swipeDirection.value) ? Math.min : Math.max, B = N ? V(0, T) : 0, E = N ? 0 : V(0, A), I = D.pointerType === "touch" ? 10 : 2, Y = { x: B, y: E }, q = { originalEvent: D, delta: Y };
            M ? (u.value = Y, l(ar)(l(Dw), (W) => a("swipeMove", W), q)) : l(Tc)(Y, l(s).swipeDirection.value, I) ? (u.value = Y, l(ar)(l(Tw), (W) => a("swipeStart", W), q), D.target.setPointerCapture(D.pointerId)) : (Math.abs(T) > I || Math.abs(A) > I) && (i.value = null);
          }),
          onPointerup: k[2] || (k[2] = (D) => {
            const T = u.value, A = D.target;
            if (A.hasPointerCapture(D.pointerId) && A.releasePointerCapture(D.pointerId), u.value = null, i.value = null, T) {
              const M = D.currentTarget, N = { originalEvent: D, delta: T };
              l(Tc)(T, l(s).swipeDirection.value, l(s).swipeThreshold.value) ? l(ar)(l(Bw), (V) => a("swipeEnd", V), N) : l(ar)(l(Mw), (V) => a("swipeCancel", V), N), M == null || M.addEventListener("click", (V) => V.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            x($.$slots, "default", {
              remaining: h.value,
              duration: c.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : ne("", !0)
    ], 64));
  }
}), Iw = /* @__PURE__ */ _({
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
    const n = e, a = t, { forwardRef: o } = H(), r = xe(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (s, i) => (g(), w(l(st), {
      present: s.forceMount || l(r)
    }, {
      default: y(() => [
        O(Rw, P({
          ref: l(o),
          open: l(r),
          type: s.type,
          as: s.as,
          "as-child": s.asChild,
          duration: s.duration
        }, s.$attrs, {
          onClose: i[0] || (i[0] = (u) => r.value = !1),
          onPause: i[1] || (i[1] = (u) => a("pause")),
          onResume: i[2] || (i[2] = (u) => a("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => a("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            a("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (u) => {
            const { x: c, y: d } = u.detail.delta, f = u.currentTarget;
            f.setAttribute("data-swipe", "move"), f.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), f.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const c = u.currentTarget;
            c.setAttribute("data-swipe", "cancel"), c.style.removeProperty("--radix-toast-swipe-move-x"), c.style.removeProperty("--radix-toast-swipe-move-y"), c.style.removeProperty("--radix-toast-swipe-end-x"), c.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: c, y: d } = u.detail.delta, f = u.currentTarget;
            f.setAttribute("data-swipe", "end"), f.style.removeProperty("--radix-toast-swipe-move-x"), f.style.removeProperty("--radix-toast-swipe-move-y"), f.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), f.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), r.value = !1;
          })
        }), {
          default: y(({ remaining: u, duration: c }) => [
            x(s.$slots, "default", {
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
}), Zp = /* @__PURE__ */ _({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (g(), w(l(z), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: y(() => [
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), Jp = /* @__PURE__ */ _({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Ew(), { forwardRef: a } = H();
    return (o, r) => (g(), w(Zp, { "as-child": "" }, {
      default: y(() => [
        O(l(z), P(t, {
          ref: l(a),
          type: o.as === "button" ? "button" : void 0,
          onClick: r[0] || (r[0] = (s) => l(n).onClose())
        }), {
          default: y(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), Fw = /* @__PURE__ */ _({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = H();
    return (n, a) => n.altText ? (g(), w(Zp, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        O(Jp, {
          ref: l(t),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: y(() => [
            x(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : ne("", !0);
  }
}), Dc = /* @__PURE__ */ _({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, a = Ss();
    return (o, r) => (g(), w(l(Lo), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: r[0] || (r[0] = (s) => {
        var i;
        const u = s.relatedTarget;
        !((i = l(a).viewport.value) != null && i.contains(u)) && n("focusFromOutsideViewport");
      })
    }, {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Vw = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: a } = _e(t), { forwardRef: o, currentElement: r } = H(), { createCollection: s } = Ea(), i = s(r), u = Ss(), c = S(() => u.toastCount.value > 0), d = R(), f = R(), p = S(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    jl(n.value, () => {
      r.value.focus();
    }), pe(() => {
      u.onViewportChange(r.value);
    }), De((m) => {
      const v = r.value;
      if (c.value && v) {
        const b = () => {
          if (!u.isClosePausedRef.value) {
            const T = new CustomEvent(Ui);
            v.dispatchEvent(T), u.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (u.isClosePausedRef.value) {
            const T = new CustomEvent(Hi);
            v.dispatchEvent(T), u.isClosePausedRef.value = !1;
          }
        }, $ = (T) => {
          !v.contains(T.relatedTarget) && C();
        }, k = () => {
          v.contains(document.activeElement) || C();
        }, D = (T) => {
          var A, M, N;
          const V = T.altKey || T.ctrlKey || T.metaKey;
          if (T.key === "Tab" && !V) {
            const B = document.activeElement, E = T.shiftKey;
            if (T.target === v && E) {
              (A = d.value) == null || A.focus();
              return;
            }
            const I = h({ tabbingDirection: E ? "backwards" : "forwards" }), Y = I.findIndex((q) => q === B);
            br(I.slice(Y + 1)) ? T.preventDefault() : E ? (M = d.value) == null || M.focus() : (N = f.value) == null || N.focus();
          }
        };
        v.addEventListener("focusin", b), v.addEventListener("focusout", $), v.addEventListener("pointermove", b), v.addEventListener("pointerleave", k), v.addEventListener("keydown", D), window.addEventListener("blur", b), window.addEventListener("focus", C), m(() => {
          v.removeEventListener("focusin", b), v.removeEventListener("focusout", $), v.removeEventListener("pointermove", b), v.removeEventListener("pointerleave", k), v.removeEventListener("keydown", D), window.removeEventListener("blur", b), window.removeEventListener("focus", C);
        });
      }
    });
    function h({ tabbingDirection: m }) {
      const v = i.value.map((b) => {
        const C = [b, ...eu(b)];
        return m === "forwards" ? C : C.reverse();
      });
      return (m === "forwards" ? v.reverse() : v).flat();
    }
    return (m, v) => (g(), w(l(P0), {
      role: "region",
      "aria-label": typeof l(a) == "string" ? l(a).replace("{hotkey}", p.value) : l(a)(p.value),
      tabindex: "-1",
      style: Ft({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        c.value ? (g(), w(Dc, {
          key: 0,
          ref: (b) => {
            d.value = l(dt)(b);
          },
          onFocusFromOutsideViewport: v[0] || (v[0] = () => {
            const b = h({
              tabbingDirection: "forwards"
            });
            l(br)(b);
          })
        }, null, 512)) : ne("", !0),
        O(l(z), P({
          ref: l(o),
          tabindex: "-1",
          as: m.as,
          "as-child": m.asChild
        }, m.$attrs), {
          default: y(() => [
            x(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        c.value ? (g(), w(Dc, {
          key: 1,
          ref: (b) => {
            f.value = l(dt)(b);
          },
          onFocusFromOutsideViewport: v[1] || (v[1] = () => {
            const b = h({
              tabbingDirection: "backwards"
            });
            l(br)(b);
          })
        }, null, 512)) : ne("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Nw = /* @__PURE__ */ _({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return H(), (n, a) => (g(), w(l(z), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lw = /* @__PURE__ */ _({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return H(), (n, a) => (g(), w(l(z), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qp = "tooltip.open", [vu, zw] = de("TooltipProvider"), eh = /* @__PURE__ */ _({
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
    const t = e, { delayDuration: n, skipDelayDuration: a, disableHoverableContent: o, disableClosingTrigger: r, ignoreNonKeyboardFocus: s, disabled: i } = _e(t);
    H();
    const u = R(!0), c = R(!1), { start: d, stop: f } = Kl(() => {
      u.value = !0;
    }, a, { immediate: !1 });
    return zw({
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
      disabled: i,
      ignoreNonKeyboardFocus: s
    }), (p, h) => x(p.$slots, "default");
  }
}), [Ts, Uw] = de("TooltipRoot"), Hw = /* @__PURE__ */ _({
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
    H();
    const o = vu(), r = S(() => n.disableHoverableContent ?? o.disableHoverableContent.value), s = S(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value), i = S(() => n.disabled ?? o.disabled.value), u = S(() => n.delayDuration ?? o.delayDuration.value), c = S(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), d = xe(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    te(d, (k) => {
      o.onClose && (k ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Qp))) : o.onClose());
    });
    const f = R(!1), p = R(), h = S(() => d.value ? f.value ? "delayed-open" : "instant-open" : "closed"), { start: m, stop: v } = Kl(() => {
      f.value = !0, d.value = !0;
    }, u, { immediate: !1 });
    function b() {
      v(), f.value = !1, d.value = !0;
    }
    function C() {
      v(), d.value = !1;
    }
    function $() {
      m();
    }
    return Uw({
      contentId: "",
      open: d,
      stateAttribute: h,
      trigger: p,
      onTriggerChange(k) {
        p.value = k;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? $() : b();
      },
      onTriggerLeave() {
        r.value ? C() : v();
      },
      onOpen: b,
      onClose: C,
      disableHoverableContent: r,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: c
    }), (k, D) => (g(), w(l(Ia), null, {
      default: y(() => [
        x(k.$slots, "default", { open: l(d) })
      ]),
      _: 3
    }));
  }
}), Ww = /* @__PURE__ */ _({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Ts(), a = vu();
    n.contentId || (n.contentId = Ee(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: r } = H(), s = R(!1), i = R(!1), u = S(() => n.disabled.value ? {} : {
      click: v,
      focus: h,
      pointermove: f,
      pointerleave: p,
      pointerdown: d,
      blur: m
    });
    pe(() => {
      n.onTriggerChange(r.value);
    });
    function c() {
      setTimeout(() => {
        s.value = !1;
      }, 1);
    }
    function d() {
      s.value = !0, document.addEventListener("pointerup", c, { once: !0 });
    }
    function f(b) {
      b.pointerType !== "touch" && !i.value && !a.isPointerInTransitRef.value && (n.onTriggerEnter(), i.value = !0);
    }
    function p() {
      n.onTriggerLeave(), i.value = !1;
    }
    function h(b) {
      var C, $;
      s.value || n.ignoreNonKeyboardFocus.value && !(($ = (C = b.target).matches) != null && $.call(C, ":focus-visible")) || n.onOpen();
    }
    function m() {
      n.onClose();
    }
    function v() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (b, C) => (g(), w(l(Cs), { "as-child": "" }, {
      default: y(() => [
        O(l(z), P({
          ref: l(o),
          "aria-describedby": l(n).open.value ? l(n).contentId : void 0,
          "data-state": l(n).stateAttribute.value,
          as: b.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Rm(u.value)), {
          default: y(() => [
            x(b.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), th = /* @__PURE__ */ _({
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
    const n = e, a = t, o = Ts(), { forwardRef: r } = H(), s = _f(), i = S(() => {
      var d;
      return (d = s.default) == null ? void 0 : d.call(s);
    }), u = S(() => {
      var d;
      if (n.ariaLabel)
        return n.ariaLabel;
      let f = "";
      function p(h) {
        typeof h.children == "string" && h.type !== bf ? f += h.children : Array.isArray(h.children) && h.children.forEach((m) => p(m));
      }
      return (d = i.value) == null || d.forEach((h) => p(h)), f;
    }), c = S(() => {
      const { ariaLabel: d, ...f } = n;
      return f;
    });
    return pe(() => {
      _a(window, "scroll", (d) => {
        const f = d.target;
        f != null && f.contains(o.trigger.value) && o.onClose();
      }), _a(window, Qp, o.onClose);
    }), (d, f) => (g(), w(l(Pa), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: f[0] || (f[0] = (p) => a("escapeKeyDown", p)),
      onPointerDownOutside: f[1] || (f[1] = (p) => {
        var h;
        l(o).disableClosingTrigger.value && (h = l(o).trigger.value) != null && h.contains(p.target) && p.preventDefault(), a("pointerDownOutside", p);
      }),
      onFocusOutside: f[2] || (f[2] = Ie(() => {
      }, ["prevent"])),
      onDismiss: f[3] || (f[3] = (p) => l(o).onClose())
    }, {
      default: y(() => [
        O(l(wa), P({
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
            x(d.$slots, "default"),
            O(l(Lo), {
              id: l(o).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                ee(oe(u.value), 1)
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
}), Yw = /* @__PURE__ */ _({
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
    const t = he(e), { forwardRef: n, currentElement: a } = H(), { trigger: o, onClose: r } = Ts(), s = vu(), { isPointerInTransit: i, onPointerExit: u } = Qy(o, a);
    return s.isPointerInTransitRef = i, u(() => {
      r();
    }), (c, d) => (g(), w(th, P({ ref: l(n) }, l(t)), {
      default: y(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kw = /* @__PURE__ */ _({
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
    const n = e, a = t, o = Ts(), r = le(n, a), { forwardRef: s } = H();
    return (i, u) => (g(), w(l(st), {
      present: i.forceMount || l(o).open.value
    }, {
      default: y(() => [
        (g(), w(nt(l(o).disableHoverableContent.value ? th : Yw), P({ ref: l(s) }, l(r)), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), jw = /* @__PURE__ */ _({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Vo), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sP = /* @__PURE__ */ _({
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
    const o = le(e, t);
    return (r, s) => (g(), w(l(C0), K(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mu = "-", Gw = (e) => {
  const t = Xw(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(mu);
      return i[0] === "" && i.length !== 1 && i.shift(), nh(i, t) || qw(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const u = n[s] || [];
      return i && a[s] ? [...u, ...a[s]] : u;
    }
  };
}, nh = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], a = t.nextPart.get(n), o = a ? nh(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const r = e.join(mu);
  return (s = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : s.classGroupId;
}, Mc = /^\[(.+)\]$/, qw = (e) => {
  if (Mc.test(e)) {
    const t = Mc.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Xw = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Jw(Object.entries(e.classGroups), n).forEach(([r, s]) => {
    Wi(s, a, r, t);
  }), a;
}, Wi = (e, t, n, a) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const r = o === "" ? t : Bc(t, o);
      r.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Zw(o)) {
        Wi(o(a), t, n, a);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([r, s]) => {
      Wi(s, Bc(t, r), n, a);
    });
  });
}, Bc = (e, t) => {
  let n = e;
  return t.split(mu).forEach((a) => {
    n.nextPart.has(a) || n.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(a);
  }), n;
}, Zw = (e) => e.isThemeGetter, Jw = (e, t) => t ? e.map(([n, a]) => {
  const o = a.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([s, i]) => [t + s, i])) : r);
  return [n, o];
}) : e, Qw = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const o = (r, s) => {
    n.set(r, s), t++, t > e && (t = 0, a = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(r) {
      let s = n.get(r);
      if (s !== void 0)
        return s;
      if ((s = a.get(r)) !== void 0)
        return o(r, s), s;
    },
    set(r, s) {
      n.has(r) ? n.set(r, s) : o(r, s);
    }
  };
}, ah = "!", ex = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, a = t.length === 1, o = t[0], r = t.length, s = (i) => {
    const u = [];
    let c = 0, d = 0, f;
    for (let b = 0; b < i.length; b++) {
      let C = i[b];
      if (c === 0) {
        if (C === o && (a || i.slice(b, b + r) === t)) {
          u.push(i.slice(d, b)), d = b + r;
          continue;
        }
        if (C === "/") {
          f = b;
          continue;
        }
      }
      C === "[" ? c++ : C === "]" && c--;
    }
    const p = u.length === 0 ? i : i.substring(d), h = p.startsWith(ah), m = h ? p.substring(1) : p, v = f && f > d ? f - d : void 0;
    return {
      modifiers: u,
      hasImportantModifier: h,
      baseClassName: m,
      maybePostfixModifierPosition: v
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: s
  }) : s;
}, tx = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...n.sort(), a), n = []) : n.push(a);
  }), t.push(...n.sort()), t;
}, nx = (e) => ({
  cache: Qw(e.cacheSize),
  parseClassName: ex(e),
  ...Gw(e)
}), ax = /\s+/, ox = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: a,
    getConflictingClassGroupIds: o
  } = t, r = [], s = e.trim().split(ax);
  let i = "";
  for (let u = s.length - 1; u >= 0; u -= 1) {
    const c = s[u], {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: p,
      maybePostfixModifierPosition: h
    } = n(c);
    let m = !!h, v = a(m ? p.substring(0, h) : p);
    if (!v) {
      if (!m) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (v = a(p), !v) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      m = !1;
    }
    const b = tx(d).join(":"), C = f ? b + ah : b, $ = C + v;
    if (r.includes($))
      continue;
    r.push($);
    const k = o(v, m);
    for (let D = 0; D < k.length; ++D) {
      const T = k[D];
      r.push(C + T);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function rx() {
  let e = 0, t, n, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = oh(t)) && (a && (a += " "), a += n);
  return a;
}
const oh = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = oh(e[a])) && (n && (n += " "), n += t);
  return n;
};
function sx(e, ...t) {
  let n, a, o, r = s;
  function s(u) {
    const c = t.reduce((d, f) => f(d), e());
    return n = nx(c), a = n.cache.get, o = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const c = a(u);
    if (c)
      return c;
    const d = ox(u, n);
    return o(u, d), d;
  }
  return function() {
    return r(rx.apply(null, arguments));
  };
}
const Se = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, rh = /^\[(?:([a-z-]+):)?(.+)\]$/i, ix = /^\d+\/\d+$/, lx = /* @__PURE__ */ new Set(["px", "full", "screen"]), ux = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, cx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, dx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, fx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, px = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Wt = (e) => la(e) || lx.has(e) || ix.test(e), cn = (e) => za(e, "length", wx), la = (e) => !!e && !Number.isNaN(Number(e)), di = (e) => za(e, "number", la), qa = (e) => !!e && Number.isInteger(Number(e)), hx = (e) => e.endsWith("%") && la(e.slice(0, -1)), ue = (e) => rh.test(e), dn = (e) => ux.test(e), vx = /* @__PURE__ */ new Set(["length", "size", "percentage"]), mx = (e) => za(e, vx, sh), gx = (e) => za(e, "position", sh), yx = /* @__PURE__ */ new Set(["image", "url"]), bx = (e) => za(e, yx, Cx), _x = (e) => za(e, "", xx), Xa = () => !0, za = (e, t, n) => {
  const a = rh.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : n(a[2]) : !1;
}, wx = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  cx.test(e) && !dx.test(e)
), sh = () => !1, xx = (e) => fx.test(e), Cx = (e) => px.test(e), kx = () => {
  const e = Se("colors"), t = Se("spacing"), n = Se("blur"), a = Se("brightness"), o = Se("borderColor"), r = Se("borderRadius"), s = Se("borderSpacing"), i = Se("borderWidth"), u = Se("contrast"), c = Se("grayscale"), d = Se("hueRotate"), f = Se("invert"), p = Se("gap"), h = Se("gradientColorStops"), m = Se("gradientColorStopPositions"), v = Se("inset"), b = Se("margin"), C = Se("opacity"), $ = Se("padding"), k = Se("saturate"), D = Se("scale"), T = Se("sepia"), A = Se("skew"), M = Se("space"), N = Se("translate"), V = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", ue, t], I = () => [ue, t], Y = () => ["", Wt, cn], q = () => ["auto", la, ue], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Q = () => ["solid", "dashed", "dotted", "double", "none"], ie = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], me = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ve = () => ["", "0", ue], ze = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Be = () => [la, ue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Xa],
      spacing: [Wt, cn],
      blur: ["none", "", dn, ue],
      brightness: Be(),
      borderColor: [e],
      borderRadius: ["none", "", "full", dn, ue],
      borderSpacing: I(),
      borderWidth: Y(),
      contrast: Be(),
      grayscale: ve(),
      hueRotate: Be(),
      invert: ve(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [hx, cn],
      inset: E(),
      margin: E(),
      opacity: Be(),
      padding: I(),
      saturate: Be(),
      scale: Be(),
      sepia: ve(),
      skew: Be(),
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
        columns: [dn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ze()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ze()
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
        object: [...W(), ue]
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
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
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
        z: ["auto", qa, ue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: E()
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
        grow: ve()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ve()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", qa, ue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Xa]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", qa, ue]
        }, ue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Xa]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [qa, ue]
        }, ue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": q()
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
        justify: ["normal", ...me()]
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
        content: ["normal", ...me(), "baseline"]
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
        "place-content": [...me(), "baseline"]
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
        p: [$]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [$]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [$]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [$]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [$]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [$]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [$]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [$]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [$]
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
          screen: [dn]
        }, dn]
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
        text: ["base", dn, cn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", di]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Xa]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", la, di]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Wt, ue]
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
        decoration: [...Q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Wt, cn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Wt, ue]
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
        bg: [...W(), gx]
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
        bg: ["auto", "cover", "contain", mx]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, bx]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
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
        border: [...Q(), "hidden"]
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
        divide: Q()
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
        outline: ["", ...Q()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Wt, ue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Wt, cn]
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
        ring: Y()
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
        "ring-offset": [Wt, cn]
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
        shadow: ["", "inner", "none", dn, _x]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Xa]
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
        "mix-blend": [...ie(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ie()
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
        "drop-shadow": ["", "none", dn, ue]
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
        saturate: [k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [T]
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
        "backdrop-sepia": [T]
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
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
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
        duration: Be()
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
        delay: Be()
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
        rotate: [qa, ue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [N]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [N]
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
        stroke: [Wt, cn, di]
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
}, $x = /* @__PURE__ */ sx(kx);
function F(...e) {
  return $x(e);
}
const iP = /* @__PURE__ */ _({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(S0), P(n.value, { class: "overflow-hidden text-sm text-accordion-text transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: y(() => [
        ce("div", {
          class: j(l(F)("pb-4 pt-0", t.class))
        }, [
          x(a.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), lP = /* @__PURE__ */ _({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l($0), P(l(a), {
      class: l(F)("border-b border-accordion-border", t.class)
    }), {
      default: y(() => [
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
const Sx = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var or = {
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
const Tx = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: a, iconNode: o, name: r, class: s, ...i }, { slots: u }) => Ot(
  "svg",
  {
    ...or,
    width: e || or.width,
    height: e || or.height,
    stroke: a || or.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${Sx(r ?? "icon")}`],
    ...i
  },
  [...o.map((c) => Ot(...c)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pe = (e, t) => (n, { slots: a }) => Ot(
  Tx,
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
const Dx = Pe("CalendarIcon", [
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
const Ds = Pe("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gu = Pe("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mx = Pe("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yu = Pe("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bx = Pe("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ax = Pe("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ox = Pe("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ex = Pe("ChevronsUpDownIcon", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Px = Pe("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ih = Pe("EllipsisIcon", [
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
const Rx = Pe("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ix = Pe("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fx = Pe("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vx = Pe("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nx = Pe("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lx = Pe("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zx = Pe("SunIcon", [
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
const Ms = Pe("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), uP = /* @__PURE__ */ _({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(T0), { class: "flex" }, {
      default: y(() => [
        O(l(D0), P(n.value, {
          class: l(F)(
            "flex flex-1 items-center justify-between py-4 font-medium text-heading transition-all [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            x(a.$slots, "default"),
            x(a.$slots, "icon", {}, () => [
              O(l(gu), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
});
function lh(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = lh(e[t])) && (a && (a += " "), a += n);
  else for (t in e) e[t] && (a && (a += " "), a += t);
  return a;
}
function Ux() {
  for (var e, t, n = 0, a = ""; n < arguments.length; ) (e = arguments[n++]) && (t = lh(e)) && (a && (a += " "), a += t);
  return a;
}
const Ac = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Oc = Ux, Ua = (e, t) => (n) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null) return Oc(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: r } = t, s = Object.keys(o).map((c) => {
    const d = n == null ? void 0 : n[c], f = r == null ? void 0 : r[c];
    if (d === null) return null;
    const p = Ac(d) || Ac(f);
    return o[c][p];
  }), i = n && Object.entries(n).reduce((c, d) => {
    let [f, p] = d;
    return p === void 0 || (c[f] = p), c;
  }, {}), u = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((c, d) => {
    let { class: f, className: p, ...h } = d;
    return Object.entries(h).every((m) => {
      let [v, b] = m;
      return Array.isArray(b) ? b.includes({
        ...r,
        ...i
      }[v]) : {
        ...r,
        ...i
      }[v] === b;
    }) ? [
      ...c,
      f,
      p
    ] : c;
  }, []);
  return Oc(e, s, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, cP = /* @__PURE__ */ _({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: j(l(F)(l(Hx)({ variant: n.variant }), t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Hx = Ua(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default",
  {
    variants: {
      variant: {
        default: "border-transparent bg-slate-800 text-slate-50 ",
        primary: "border-transparent bg-primary text-primary-foreground ",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), dP = /* @__PURE__ */ _({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("nav", {
      "aria-label": "breadcrumb",
      class: j(t.class)
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), fP = /* @__PURE__ */ _({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: j(l(F)("flex h-9 w-9 items-center justify-center", t.class))
    }, [
      x(n.$slots, "default", {}, () => [
        O(l(ih), { class: "h-4 w-4" })
      ]),
      a[0] || (a[0] = ce("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), pP = /* @__PURE__ */ _({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("li", {
      class: j(l(F)("inline-flex items-center gap-1.5", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), hP = /* @__PURE__ */ _({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), {
      as: n.as,
      "as-child": n.asChild,
      class: j(l(F)("transition-colors hover:text-foreground", t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), vP = /* @__PURE__ */ _({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("ol", {
      class: j(
        l(F)(
          "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), mP = /* @__PURE__ */ _({
  __name: "BreadcrumbPage",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("span", {
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: j(l(F)("font-normal text-foreground", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), gP = /* @__PURE__ */ _({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: j(l(F)("[&>svg]:h-3.5 [&>svg]:w-3.5", t.class))
    }, [
      x(n.$slots, "default", {}, () => [
        O(l(yu))
      ])
    ], 2));
  }
}), xt = /* @__PURE__ */ _({
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
    return (n, a) => (g(), w(l(z), {
      as: n.as,
      "as-child": n.asChild,
      class: j(l(F)(l(Cn)({ variant: n.variant, size: n.size }), t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default"),
        n.loading ? (g(), w(l(Rx), {
          key: 0,
          class: j(l(Wx)({ size: n.size }))
        }, null, 8, ["class"])) : ne("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Wx = Ua("animate-spin", {
  variants: {
    size: {
      // requires ! due to parent sizing from the Button
      default: "!size-4",
      xs: "!size-3",
      sm: "!size-3",
      lg: "!size-4",
      xl: "!size-5",
      xxl: "!size-6",
      icon: "!size-5"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), Cn = Ua(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-slate-800 text-slate-50 hover:bg-slate-800/80",
        primary: "bg-primary text-primary-foreground shadow hover:bg-primary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/70",
        outline: "border border-input text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-transparent",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/50",
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
), Yx = /* @__PURE__ */ _({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: j(
        l(F)("rounded-lg border border-card-border bg-card text-card-foreground shadow-sm", t.class)
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Kx = /* @__PURE__ */ _({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: j(l(F)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), jx = /* @__PURE__ */ _({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("h3", {
      class: j(l(F)("text-2xl font-semibold leading-none tracking-tight", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), yP = /* @__PURE__ */ _({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("p", {
      class: j(l(F)("text-sm text-muted-foreground", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Gx = /* @__PURE__ */ _({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: j(l(F)("p-6 pt-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), bP = /* @__PURE__ */ _({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: j(l(F)("flex items-center p-6 pt-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
});
var Yi = "http://www.w3.org/1999/xhtml";
const Ec = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Yi,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Bs(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ec.hasOwnProperty(t) ? { space: Ec[t], local: e } : e;
}
function qx(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Yi && t.documentElement.namespaceURI === Yi ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Xx(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function uh(e) {
  var t = Bs(e);
  return (t.local ? Xx : qx)(t);
}
function Zx() {
}
function bu(e) {
  return e == null ? Zx : function() {
    return this.querySelector(e);
  };
}
function Jx(e) {
  typeof e != "function" && (e = bu(e));
  for (var t = this._groups, n = t.length, a = new Array(n), o = 0; o < n; ++o)
    for (var r = t[o], s = r.length, i = a[o] = new Array(s), u, c, d = 0; d < s; ++d)
      (u = r[d]) && (c = e.call(u, u.__data__, d, r)) && ("__data__" in u && (c.__data__ = u.__data__), i[d] = c);
  return new rt(a, this._parents);
}
function Qx(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function eC() {
  return [];
}
function ch(e) {
  return e == null ? eC : function() {
    return this.querySelectorAll(e);
  };
}
function tC(e) {
  return function() {
    return Qx(e.apply(this, arguments));
  };
}
function nC(e) {
  typeof e == "function" ? e = tC(e) : e = ch(e);
  for (var t = this._groups, n = t.length, a = [], o = [], r = 0; r < n; ++r)
    for (var s = t[r], i = s.length, u, c = 0; c < i; ++c)
      (u = s[c]) && (a.push(e.call(u, u.__data__, c, s)), o.push(u));
  return new rt(a, o);
}
function dh(e) {
  return function() {
    return this.matches(e);
  };
}
function fh(e) {
  return function(t) {
    return t.matches(e);
  };
}
var aC = Array.prototype.find;
function oC(e) {
  return function() {
    return aC.call(this.children, e);
  };
}
function rC() {
  return this.firstElementChild;
}
function sC(e) {
  return this.select(e == null ? rC : oC(typeof e == "function" ? e : fh(e)));
}
var iC = Array.prototype.filter;
function lC() {
  return Array.from(this.children);
}
function uC(e) {
  return function() {
    return iC.call(this.children, e);
  };
}
function cC(e) {
  return this.selectAll(e == null ? lC : uC(typeof e == "function" ? e : fh(e)));
}
function dC(e) {
  typeof e != "function" && (e = dh(e));
  for (var t = this._groups, n = t.length, a = new Array(n), o = 0; o < n; ++o)
    for (var r = t[o], s = r.length, i = a[o] = [], u, c = 0; c < s; ++c)
      (u = r[c]) && e.call(u, u.__data__, c, r) && i.push(u);
  return new rt(a, this._parents);
}
function ph(e) {
  return new Array(e.length);
}
function fC() {
  return new rt(this._enter || this._groups.map(ph), this._parents);
}
function Lr(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Lr.prototype = {
  constructor: Lr,
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
function pC(e) {
  return function() {
    return e;
  };
}
function hC(e, t, n, a, o, r) {
  for (var s = 0, i, u = t.length, c = r.length; s < c; ++s)
    (i = t[s]) ? (i.__data__ = r[s], a[s] = i) : n[s] = new Lr(e, r[s]);
  for (; s < u; ++s)
    (i = t[s]) && (o[s] = i);
}
function vC(e, t, n, a, o, r, s) {
  var i, u, c = /* @__PURE__ */ new Map(), d = t.length, f = r.length, p = new Array(d), h;
  for (i = 0; i < d; ++i)
    (u = t[i]) && (p[i] = h = s.call(u, u.__data__, i, t) + "", c.has(h) ? o[i] = u : c.set(h, u));
  for (i = 0; i < f; ++i)
    h = s.call(e, r[i], i, r) + "", (u = c.get(h)) ? (a[i] = u, u.__data__ = r[i], c.delete(h)) : n[i] = new Lr(e, r[i]);
  for (i = 0; i < d; ++i)
    (u = t[i]) && c.get(p[i]) === u && (o[i] = u);
}
function mC(e) {
  return e.__data__;
}
function gC(e, t) {
  if (!arguments.length) return Array.from(this, mC);
  var n = t ? vC : hC, a = this._parents, o = this._groups;
  typeof e != "function" && (e = pC(e));
  for (var r = o.length, s = new Array(r), i = new Array(r), u = new Array(r), c = 0; c < r; ++c) {
    var d = a[c], f = o[c], p = f.length, h = yC(e.call(d, d && d.__data__, c, a)), m = h.length, v = i[c] = new Array(m), b = s[c] = new Array(m), C = u[c] = new Array(p);
    n(d, f, v, b, C, h, t);
    for (var $ = 0, k = 0, D, T; $ < m; ++$)
      if (D = v[$]) {
        for ($ >= k && (k = $ + 1); !(T = b[k]) && ++k < m; ) ;
        D._next = T || null;
      }
  }
  return s = new rt(s, a), s._enter = i, s._exit = u, s;
}
function yC(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function bC() {
  return new rt(this._exit || this._groups.map(ph), this._parents);
}
function _C(e, t, n) {
  var a = this.enter(), o = this, r = this.exit();
  return typeof e == "function" ? (a = e(a), a && (a = a.selection())) : a = a.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? r.remove() : n(r), a && o ? a.merge(o).order() : o;
}
function wC(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, a = t._groups, o = n.length, r = a.length, s = Math.min(o, r), i = new Array(o), u = 0; u < s; ++u)
    for (var c = n[u], d = a[u], f = c.length, p = i[u] = new Array(f), h, m = 0; m < f; ++m)
      (h = c[m] || d[m]) && (p[m] = h);
  for (; u < o; ++u)
    i[u] = n[u];
  return new rt(i, this._parents);
}
function xC() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var a = e[t], o = a.length - 1, r = a[o], s; --o >= 0; )
      (s = a[o]) && (r && s.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(s, r), r = s);
  return this;
}
function CC(e) {
  e || (e = kC);
  function t(f, p) {
    return f && p ? e(f.__data__, p.__data__) : !f - !p;
  }
  for (var n = this._groups, a = n.length, o = new Array(a), r = 0; r < a; ++r) {
    for (var s = n[r], i = s.length, u = o[r] = new Array(i), c, d = 0; d < i; ++d)
      (c = s[d]) && (u[d] = c);
    u.sort(t);
  }
  return new rt(o, this._parents).order();
}
function kC(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function $C() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function SC() {
  return Array.from(this);
}
function TC() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var a = e[t], o = 0, r = a.length; o < r; ++o) {
      var s = a[o];
      if (s) return s;
    }
  return null;
}
function DC() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function MC() {
  return !this.node();
}
function BC(e) {
  for (var t = this._groups, n = 0, a = t.length; n < a; ++n)
    for (var o = t[n], r = 0, s = o.length, i; r < s; ++r)
      (i = o[r]) && e.call(i, i.__data__, r, o);
  return this;
}
function AC(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function OC(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function EC(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function PC(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function RC(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function IC(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function FC(e, t) {
  var n = Bs(e);
  if (arguments.length < 2) {
    var a = this.node();
    return n.local ? a.getAttributeNS(n.space, n.local) : a.getAttribute(n);
  }
  return this.each((t == null ? n.local ? OC : AC : typeof t == "function" ? n.local ? IC : RC : n.local ? PC : EC)(n, t));
}
function hh(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function VC(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function NC(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function LC(e, t, n) {
  return function() {
    var a = t.apply(this, arguments);
    a == null ? this.style.removeProperty(e) : this.style.setProperty(e, a, n);
  };
}
function zC(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? VC : typeof t == "function" ? LC : NC)(e, t, n ?? "")) : xa(this.node(), e);
}
function xa(e, t) {
  return e.style.getPropertyValue(t) || hh(e).getComputedStyle(e, null).getPropertyValue(t);
}
function UC(e) {
  return function() {
    delete this[e];
  };
}
function HC(e, t) {
  return function() {
    this[e] = t;
  };
}
function WC(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function YC(e, t) {
  return arguments.length > 1 ? this.each((t == null ? UC : typeof t == "function" ? WC : HC)(e, t)) : this.node()[e];
}
function vh(e) {
  return e.trim().split(/^|\s+/);
}
function _u(e) {
  return e.classList || new mh(e);
}
function mh(e) {
  this._node = e, this._names = vh(e.getAttribute("class") || "");
}
mh.prototype = {
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
function gh(e, t) {
  for (var n = _u(e), a = -1, o = t.length; ++a < o; ) n.add(t[a]);
}
function yh(e, t) {
  for (var n = _u(e), a = -1, o = t.length; ++a < o; ) n.remove(t[a]);
}
function KC(e) {
  return function() {
    gh(this, e);
  };
}
function jC(e) {
  return function() {
    yh(this, e);
  };
}
function GC(e, t) {
  return function() {
    (t.apply(this, arguments) ? gh : yh)(this, e);
  };
}
function qC(e, t) {
  var n = vh(e + "");
  if (arguments.length < 2) {
    for (var a = _u(this.node()), o = -1, r = n.length; ++o < r; ) if (!a.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? GC : t ? KC : jC)(n, t));
}
function XC() {
  this.textContent = "";
}
function ZC(e) {
  return function() {
    this.textContent = e;
  };
}
function JC(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function QC(e) {
  return arguments.length ? this.each(e == null ? XC : (typeof e == "function" ? JC : ZC)(e)) : this.node().textContent;
}
function ek() {
  this.innerHTML = "";
}
function tk(e) {
  return function() {
    this.innerHTML = e;
  };
}
function nk(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function ak(e) {
  return arguments.length ? this.each(e == null ? ek : (typeof e == "function" ? nk : tk)(e)) : this.node().innerHTML;
}
function ok() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function rk() {
  return this.each(ok);
}
function sk() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ik() {
  return this.each(sk);
}
function lk(e) {
  var t = typeof e == "function" ? e : uh(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function uk() {
  return null;
}
function ck(e, t) {
  var n = typeof e == "function" ? e : uh(e), a = t == null ? uk : typeof t == "function" ? t : bu(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), a.apply(this, arguments) || null);
  });
}
function dk() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function fk() {
  return this.each(dk);
}
function pk() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function hk() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function vk(e) {
  return this.select(e ? hk : pk);
}
function mk(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function gk(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function yk(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", a = t.indexOf(".");
    return a >= 0 && (n = t.slice(a + 1), t = t.slice(0, a)), { type: t, name: n };
  });
}
function bk(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, a = -1, o = t.length, r; n < o; ++n)
        r = t[n], (!e.type || r.type === e.type) && r.name === e.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++a] = r;
      ++a ? t.length = a : delete this.__on;
    }
  };
}
function _k(e, t, n) {
  return function() {
    var a = this.__on, o, r = gk(t);
    if (a) {
      for (var s = 0, i = a.length; s < i; ++s)
        if ((o = a[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = r, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, r, n), o = { type: e.type, name: e.name, value: t, listener: r, options: n }, a ? a.push(o) : this.__on = [o];
  };
}
function wk(e, t, n) {
  var a = yk(e + ""), o, r = a.length, s;
  if (arguments.length < 2) {
    var i = this.node().__on;
    if (i) {
      for (var u = 0, c = i.length, d; u < c; ++u)
        for (o = 0, d = i[u]; o < r; ++o)
          if ((s = a[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (i = t ? _k : bk, o = 0; o < r; ++o) this.each(i(a[o], t, n));
  return this;
}
function bh(e, t, n) {
  var a = hh(e), o = a.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = a.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function xk(e, t) {
  return function() {
    return bh(this, e, t);
  };
}
function Ck(e, t) {
  return function() {
    return bh(this, e, t.apply(this, arguments));
  };
}
function kk(e, t) {
  return this.each((typeof t == "function" ? Ck : xk)(e, t));
}
function* $k() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var a = e[t], o = 0, r = a.length, s; o < r; ++o)
      (s = a[o]) && (yield s);
}
var _h = [null];
function rt(e, t) {
  this._groups = e, this._parents = t;
}
function Ho() {
  return new rt([[document.documentElement]], _h);
}
function Sk() {
  return this;
}
rt.prototype = Ho.prototype = {
  constructor: rt,
  select: Jx,
  selectAll: nC,
  selectChild: sC,
  selectChildren: cC,
  filter: dC,
  data: gC,
  enter: fC,
  exit: bC,
  join: _C,
  merge: wC,
  selection: Sk,
  order: xC,
  sort: CC,
  call: $C,
  nodes: SC,
  node: TC,
  size: DC,
  empty: MC,
  each: BC,
  attr: FC,
  style: zC,
  property: YC,
  classed: qC,
  text: QC,
  html: ak,
  raise: rk,
  lower: ik,
  append: lk,
  insert: ck,
  remove: fk,
  clone: vk,
  datum: mk,
  on: wk,
  dispatch: kk,
  [Symbol.iterator]: $k
};
function Xe(e) {
  return typeof e == "string" ? new rt([[document.querySelector(e)]], [document.documentElement]) : new rt([[e]], _h);
}
function Tk(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function zr(e, t) {
  if (e = Tk(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var a = n.createSVGPoint();
      return a.x = e.clientX, a.y = e.clientY, a = a.matrixTransform(t.getScreenCTM().inverse()), [a.x, a.y];
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
var co;
(function(e) {
  e[e.SVG = 0] = "SVG", e[e.HTML = 1] = "HTML";
})(co || (co = {}));
var Ca;
(function(e) {
  e.Fit = "fit", e.Extend = "extend", e.FitWidth = "fit_width";
})(Ca || (Ca = {}));
function fo(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Dk(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function As(e) {
  let t, n, a;
  e.length !== 2 ? (t = fo, n = (i, u) => fo(e(i), u), a = (i, u) => e(i) - u) : (t = e === fo || e === Dk ? e : Mk, n = e, a = e);
  function o(i, u, c = 0, d = i.length) {
    if (c < d) {
      if (t(u, u) !== 0) return d;
      do {
        const f = c + d >>> 1;
        n(i[f], u) < 0 ? c = f + 1 : d = f;
      } while (c < d);
    }
    return c;
  }
  function r(i, u, c = 0, d = i.length) {
    if (c < d) {
      if (t(u, u) !== 0) return d;
      do {
        const f = c + d >>> 1;
        n(i[f], u) <= 0 ? c = f + 1 : d = f;
      } while (c < d);
    }
    return c;
  }
  function s(i, u, c = 0, d = i.length) {
    const f = o(i, u, c, d - 1);
    return f > c && a(i[f - 1], u) > -a(i[f], u) ? f - 1 : f;
  }
  return { left: o, center: s, right: r };
}
function Mk() {
  return 0;
}
function wh(e) {
  return e === null ? NaN : +e;
}
const Bk = As(fo), Os = Bk.right;
As(wh).center;
function Ak(e, t) {
  let n, a;
  for (const o of e)
    o != null && (n === void 0 ? o >= o && (n = a = o) : (n > o && (n = o), a < o && (a = o)));
  return [n, a];
}
class Pc extends Map {
  constructor(t, n = Pk) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(Rc(this, t));
  }
  has(t) {
    return super.has(Rc(this, t));
  }
  set(t, n) {
    return super.set(Ok(this, t), n);
  }
  delete(t) {
    return super.delete(Ek(this, t));
  }
}
function Rc({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function Ok({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function Ek({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function Pk(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Rk = Math.sqrt(50), Ik = Math.sqrt(10), Fk = Math.sqrt(2);
function Ur(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), r = a / Math.pow(10, o), s = r >= Rk ? 10 : r >= Ik ? 5 : r >= Fk ? 2 : 1;
  let i, u, c;
  return o < 0 ? (c = Math.pow(10, -o) / s, i = Math.round(e * c), u = Math.round(t * c), i / c < e && ++i, u / c > t && --u, c = -c) : (c = Math.pow(10, o) * s, i = Math.round(e / c), u = Math.round(t / c), i * c < e && ++i, u * c > t && --u), u < i && 0.5 <= n && n < 2 ? Ur(e, t, n * 2) : [i, u, c];
}
function Ki(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, r, s] = a ? Ur(t, e, n) : Ur(e, t, n);
  if (!(r >= o)) return [];
  const i = r - o + 1, u = new Array(i);
  if (a)
    if (s < 0) for (let c = 0; c < i; ++c) u[c] = (r - c) / -s;
    else for (let c = 0; c < i; ++c) u[c] = (r - c) * s;
  else if (s < 0) for (let c = 0; c < i; ++c) u[c] = (o + c) / -s;
  else for (let c = 0; c < i; ++c) u[c] = (o + c) * s;
  return u;
}
function ji(e, t, n) {
  return t = +t, e = +e, n = +n, Ur(e, t, n)[2];
}
function Gi(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, o = a ? ji(t, e, n) : ji(e, t, n);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function Ic(e, t) {
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
function Fc(e, t) {
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
function Vk(e, t, n = wh) {
  if (!(!(a = e.length) || isNaN(t = +t))) {
    if (t <= 0 || a < 2) return +n(e[0], 0, e);
    if (t >= 1) return +n(e[a - 1], a - 1, e);
    var a, o = (a - 1) * t, r = Math.floor(o), s = +n(e[r], r, e), i = +n(e[r + 1], r + 1, e);
    return s + (i - s) * (o - r);
  }
}
function* Nk(e) {
  for (const t of e)
    yield* t;
}
function Lk(e) {
  return Array.from(Nk(e));
}
function zk(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, r = new Array(o); ++a < o; )
    r[a] = e + a * n;
  return r;
}
function Uk(e, t) {
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
function Hk(e, t, n) {
  var a = {}, o = a.noTrailing, r = o === void 0 ? !1 : o, s = a.noLeading, i = s === void 0 ? !1 : s, u = a.debounceMode, c = u === void 0 ? void 0 : u, d, f = !1, p = 0;
  function h() {
    d && clearTimeout(d);
  }
  function m(b) {
    var C = b || {}, $ = C.upcomingOnly, k = $ === void 0 ? !1 : $;
    h(), f = !k;
  }
  function v() {
    for (var b = arguments.length, C = new Array(b), $ = 0; $ < b; $++)
      C[$] = arguments[$];
    var k = this, D = Date.now() - p;
    if (f)
      return;
    function T() {
      p = Date.now(), t.apply(k, C);
    }
    function A() {
      d = void 0;
    }
    !i && c && !d && T(), h(), c === void 0 && D > e ? i ? (p = Date.now(), r || (d = setTimeout(c ? A : T, e))) : T() : r !== !0 && (d = setTimeout(c ? A : T, c === void 0 ? e - D : e));
  }
  return v.cancel = m, v;
}
const yn = (e) => typeof e == "number", wu = (e) => typeof e == "function", Es = (e) => Array.isArray(e), Wk = (e) => e instanceof Object, Hr = (e) => e.constructor.name !== "Function" && e.constructor.name !== "Object", Vc = (e) => Wk(e) && !Es(e) && !wu(e) && !Hr(e), wo = (e, t, n = /* @__PURE__ */ new Set()) => {
  if (Array.isArray(e)) {
    if (!Array.isArray(t) || e.length !== t.length)
      return !1;
    if (n.has(e))
      return !0;
    n.add(e);
    for (let a = 0; a < e.length; a++)
      if (!wo(e[a], t[a], n))
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
    if (Object.keys(e).length !== Object.keys(t).length)
      return !1;
    if (n.has(e))
      return !0;
    n.add(e);
    for (const o in e)
      if (!wo(e[o], t[o], n))
        return !1;
    return !0;
  }
  return e === t;
}, qi = (e) => e.flat(), Wr = (e, t = /* @__PURE__ */ new Map()) => {
  if (typeof e != "object" || e === null)
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof Array) {
    const n = [];
    t.set(e, n);
    for (const a of e)
      n.push(t.has(a) ? t.get(a) : Wr(a, t));
    return n;
  }
  if (Hr(e))
    return e;
  if (e instanceof Object) {
    const n = {};
    t.set(e, n);
    const a = e;
    return Object.keys(e).reduce((o, r) => (o[r] = t.has(a[r]) ? t.get(a[r]) : Wr(a[r], t), o), n), n;
  }
  return e;
}, Hn = (e, t, n = /* @__PURE__ */ new Map()) => {
  if (!e || !t || e === t)
    return e;
  const a = Hr(e) ? e : Wr(e);
  return n.has(t) ? n.get(t) : (n.set(t, a), Object.keys(t).forEach((o) => {
    o === "__proto__" || o === "constructor" || (Vc(e[o]) && Vc(t[o]) ? a[o] = Hn(e[o], t[o], n) : Hr(t) ? a[o] = t : a[o] = Wr(t[o]));
  }), a);
}, Yk = (e, t) => (e = Object.assign({}, e), t.forEach((n) => delete e[n]), e), Yr = (e, t, n) => Hk(t, e);
function xu(e, t, n) {
  return wu(t) ? t(e, n) : t;
}
function Cu(e, t, n) {
  return xu(e, t, n);
}
function tt(e, t, n) {
  return xu(e, t, n);
}
function Za(e) {
  return e.filter((t) => t && !yn(t));
}
function mn(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Kk(e, t, ...n) {
  const a = [];
  let o = 0, r = 0;
  for (const s of n) {
    const i = tt(e, s, t) || 0;
    i >= 0 ? a.push(o += i) : a.push(r += i);
  }
  return a;
}
function jk(e, ...t) {
  return e ? Fc(e, (a, o) => Fc(t, (r) => tt(a, r, o))) : void 0;
}
function Gk(e, ...t) {
  return e ? Ic(e, (a, o) => Ic(t, (r) => tt(a, r, o))) : void 0;
}
function fi(e, ...t) {
  return [jk(e, ...t), Gk(e, ...t)];
}
function qk(e, t, n) {
  if (e.length <= 1)
    return e[0];
  const a = e.map((s, i) => tt(s, n, i));
  a.sort((s, i) => s - i);
  const o = As((s) => s).left, r = o(a, t, 1, e.length - 1);
  return t - a[r - 1] > a[r] - t ? e[r] : e[r - 1];
}
function Xk(e, t, n) {
  return e.filter((o, r) => {
    const s = tt(o, n, r);
    return s >= t[0] && s <= t[1];
  });
}
var Rn = [], Zk = function() {
  return Rn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Jk = function() {
  return Rn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Nc = "ResizeObserver loop completed with undelivered notifications.", Qk = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Nc
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Nc), window.dispatchEvent(e);
}, xo;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(xo || (xo = {}));
var In = function(e) {
  return Object.freeze(e);
}, e$ = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, In(this);
  }
  return e;
}(), xh = function() {
  function e(t, n, a, o) {
    return this.x = t, this.y = n, this.width = a, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, In(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, a = t.y, o = t.top, r = t.right, s = t.bottom, i = t.left, u = t.width, c = t.height;
    return { x: n, y: a, top: o, right: r, bottom: s, left: i, width: u, height: c };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), ku = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Ch = function(e) {
  if (ku(e)) {
    var t = e.getBBox(), n = t.width, a = t.height;
    return !n && !a;
  }
  var o = e, r = o.offsetWidth, s = o.offsetHeight;
  return !(r || s || e.getClientRects().length);
}, Lc = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, t$ = function(e) {
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
}, po = typeof window < "u" ? window : {}, rr = /* @__PURE__ */ new WeakMap(), zc = /auto|scroll/, n$ = /^tb|vertical/, a$ = /msie|trident/i.test(po.navigator && po.navigator.userAgent), Tt = function(e) {
  return parseFloat(e || "0");
}, ua = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new e$((n ? t : e) || 0, (n ? e : t) || 0);
}, Uc = In({
  devicePixelContentBoxSize: ua(),
  borderBoxSize: ua(),
  contentBoxSize: ua(),
  contentRect: new xh(0, 0, 0, 0)
}), kh = function(e, t) {
  if (t === void 0 && (t = !1), rr.has(e) && !t)
    return rr.get(e);
  if (Ch(e))
    return rr.set(e, Uc), Uc;
  var n = getComputedStyle(e), a = ku(e) && e.ownerSVGElement && e.getBBox(), o = !a$ && n.boxSizing === "border-box", r = n$.test(n.writingMode || ""), s = !a && zc.test(n.overflowY || ""), i = !a && zc.test(n.overflowX || ""), u = a ? 0 : Tt(n.paddingTop), c = a ? 0 : Tt(n.paddingRight), d = a ? 0 : Tt(n.paddingBottom), f = a ? 0 : Tt(n.paddingLeft), p = a ? 0 : Tt(n.borderTopWidth), h = a ? 0 : Tt(n.borderRightWidth), m = a ? 0 : Tt(n.borderBottomWidth), v = a ? 0 : Tt(n.borderLeftWidth), b = f + c, C = u + d, $ = v + h, k = p + m, D = i ? e.offsetHeight - k - e.clientHeight : 0, T = s ? e.offsetWidth - $ - e.clientWidth : 0, A = o ? b + $ : 0, M = o ? C + k : 0, N = a ? a.width : Tt(n.width) - A - T, V = a ? a.height : Tt(n.height) - M - D, B = N + b + T + $, E = V + C + D + k, I = In({
    devicePixelContentBoxSize: ua(Math.round(N * devicePixelRatio), Math.round(V * devicePixelRatio), r),
    borderBoxSize: ua(B, E, r),
    contentBoxSize: ua(N, V, r),
    contentRect: new xh(f, u, N, V)
  });
  return rr.set(e, I), I;
}, $h = function(e, t, n) {
  var a = kh(e, n), o = a.borderBoxSize, r = a.contentBoxSize, s = a.devicePixelContentBoxSize;
  switch (t) {
    case xo.DEVICE_PIXEL_CONTENT_BOX:
      return s;
    case xo.BORDER_BOX:
      return o;
    default:
      return r;
  }
}, o$ = /* @__PURE__ */ function() {
  function e(t) {
    var n = kh(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = In([n.borderBoxSize]), this.contentBoxSize = In([n.contentBoxSize]), this.devicePixelContentBoxSize = In([n.devicePixelContentBoxSize]);
  }
  return e;
}(), Sh = function(e) {
  if (Ch(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, r$ = function() {
  var e = 1 / 0, t = [];
  Rn.forEach(function(s) {
    if (s.activeTargets.length !== 0) {
      var i = [];
      s.activeTargets.forEach(function(c) {
        var d = new o$(c.target), f = Sh(c.target);
        i.push(d), c.lastReportedSize = $h(c.target, c.observedBox), f < e && (e = f);
      }), t.push(function() {
        s.callback.call(s.observer, i, s.observer);
      }), s.activeTargets.splice(0, s.activeTargets.length);
    }
  });
  for (var n = 0, a = t; n < a.length; n++) {
    var o = a[n];
    o();
  }
  return e;
}, Hc = function(e) {
  Rn.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(o) {
      o.isActive() && (Sh(o.target) > e ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
}, s$ = function() {
  var e = 0;
  for (Hc(e); Zk(); )
    e = r$(), Hc(e);
  return Jk() && Qk(), e > 0;
}, pi, Th = [], i$ = function() {
  return Th.splice(0).forEach(function(e) {
    return e();
  });
}, l$ = function(e) {
  if (!pi) {
    var t = 0, n = document.createTextNode(""), a = { characterData: !0 };
    new MutationObserver(function() {
      return i$();
    }).observe(n, a), pi = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  Th.push(e), pi();
}, u$ = function(e) {
  l$(function() {
    requestAnimationFrame(e);
  });
}, _r = 0, c$ = function() {
  return !!_r;
}, d$ = 250, f$ = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Wc = [
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
], Yc = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, hi = !1, p$ = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = d$), !hi) {
      hi = !0;
      var a = Yc(t);
      u$(function() {
        var o = !1;
        try {
          o = s$();
        } finally {
          if (hi = !1, t = a - Yc(), !c$())
            return;
          o ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, f$);
    };
    document.body ? n() : po.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Wc.forEach(function(n) {
      return po.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Wc.forEach(function(n) {
      return po.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Xi = new p$(), Kc = function(e) {
  !_r && e > 0 && Xi.start(), _r += e, !_r && Xi.stop();
}, h$ = function(e) {
  return !ku(e) && !t$(e) && getComputedStyle(e).display === "inline";
}, v$ = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || xo.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = $h(this.target, this.observedBox, !0);
    return h$(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), m$ = /* @__PURE__ */ function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), sr = /* @__PURE__ */ new WeakMap(), jc = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, ir = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var a = new m$(t, n);
    sr.set(t, a);
  }, e.observe = function(t, n, a) {
    var o = sr.get(t), r = o.observationTargets.length === 0;
    jc(o.observationTargets, n) < 0 && (r && Rn.push(o), o.observationTargets.push(new v$(n, a && a.box)), Kc(1), Xi.schedule());
  }, e.unobserve = function(t, n) {
    var a = sr.get(t), o = jc(a.observationTargets, n), r = a.observationTargets.length === 1;
    o >= 0 && (r && Rn.splice(Rn.indexOf(a), 1), a.observationTargets.splice(o, 1), Kc(-1));
  }, e.disconnect = function(t) {
    var n = this, a = sr.get(t);
    a.observationTargets.slice().forEach(function(o) {
      return n.unobserve(t, o.target);
    }), a.activeTargets.splice(0, a.activeTargets.length);
  }, e;
}(), g$ = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    ir.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Lc(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ir.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Lc(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ir.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    ir.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const y$ = globalThis.ResizeObserver || g$, Dh = {
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
  sizing: Ca.Fit,
  width: void 0,
  height: void 0,
  svgDefs: void 0,
  ariaLabel: void 0
};
class Co {
  constructor(t) {
    this._defaultConfig = Dh, this._isFirstRender = !0, this._renderAnimationFrameId = null, this._container = t;
    const n = Xe(this._container);
    n.attr("role", "figure"), this.svg = n.append("svg").style("display", "block").attr("xmlns", "http://www.w3.org/2000/svg").attr("height", Co.DEFAULT_CONTAINER_HEIGHT).attr("aria-hidden", !0), this._svgDefs = this.svg.append("defs"), this._svgDefsExternal = this.svg.append("defs"), this.element = this.svg.node();
  }
  updateContainer(t) {
    var n;
    this.prevConfig = this.config, this.config = Hn(this._defaultConfig, t), (t == null ? void 0 : t.svgDefs) !== ((n = this.prevConfig) === null || n === void 0 ? void 0 : n.svgDefs) && (this._svgDefsExternal.selectAll("*").remove(), this._svgDefsExternal.html(t.svgDefs));
  }
  // The `_preRender` step should be used to perform some actions before rendering.
  // For example, calculating scales, setting component sizes, etc ...
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _preRender() {
  }
  // The `_render` step should be used to perform the actual rendering
  _render(t) {
    const { config: n } = this;
    Xe(this._container).attr("aria-label", n.ariaLabel), this._isFirstRender = !1;
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
    return this.config.height ? this.element.clientHeight : this._container.clientHeight || this._container.getBoundingClientRect().height || Co.DEFAULT_CONTAINER_HEIGHT;
  }
  get width() {
    return mn(this.containerWidth - this.config.margin.left - this.config.margin.right, 0, Number.POSITIVE_INFINITY);
  }
  get height() {
    return mn(this.containerHeight - this.config.margin.top - this.config.margin.bottom, 0, Number.POSITIVE_INFINITY);
  }
  _removeAllChildren() {
    for (; this.element.firstChild; )
      this.element.removeChild(this.element.firstChild);
  }
  _onResize() {
    const { config: t } = this;
    (t.sizing === Ca.Fit || t.sizing === Ca.FitWidth) && this.render(0);
  }
  _setUpResizeObserver() {
    if (this._resizeObserver)
      return;
    const t = this._container.getBoundingClientRect();
    this._containerSize = { width: t.width, height: t.height }, this._resizeObserver = new y$((n, a) => {
      cancelAnimationFrame(this._resizeObserverAnimationFrameId), this._resizeObserverAnimationFrameId = requestAnimationFrame(() => {
        const o = this._container.getBoundingClientRect(), r = { width: o.width, height: o.height };
        !wo(this._containerSize, r) && r.width && r.height && (this._containerSize = r, this._onResize());
      });
    }), this._resizeObserver.observe(this._container);
  }
  destroy() {
    var t;
    cancelAnimationFrame(this._renderAnimationFrameId), cancelAnimationFrame(this._resizeObserverAnimationFrameId), (t = this._resizeObserver) === null || t === void 0 || t.disconnect(), this.svg.remove();
  }
}
Co.DEFAULT_CONTAINER_HEIGHT = 300;
var b$ = !1;
function _$(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function w$(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var x$ = /* @__PURE__ */ function() {
  function e(n) {
    var a = this;
    this._insertTag = function(o) {
      var r;
      a.tags.length === 0 ? a.insertionPoint ? r = a.insertionPoint.nextSibling : a.prepend ? r = a.container.firstChild : r = a.before : r = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(o, r), a.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !b$ : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, t.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(w$(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var r = _$(o);
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
}(), He = "-ms-", Kr = "-moz-", ye = "-webkit-", Mh = "comm", $u = "rule", Su = "decl", C$ = "@import", Bh = "@keyframes", k$ = "@layer", $$ = Math.abs, Ps = String.fromCharCode, S$ = Object.assign;
function T$(e, t) {
  return Le(e, 0) ^ 45 ? (((t << 2 ^ Le(e, 0)) << 2 ^ Le(e, 1)) << 2 ^ Le(e, 2)) << 2 ^ Le(e, 3) : 0;
}
function Ah(e) {
  return e.trim();
}
function D$(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function be(e, t, n) {
  return e.replace(t, n);
}
function Zi(e, t) {
  return e.indexOf(t);
}
function Le(e, t) {
  return e.charCodeAt(t) | 0;
}
function ko(e, t, n) {
  return e.slice(t, n);
}
function Bt(e) {
  return e.length;
}
function Tu(e) {
  return e.length;
}
function lr(e, t) {
  return t.push(e), e;
}
function M$(e, t) {
  return e.map(t).join("");
}
var Rs = 1, ka = 1, Oh = 0, Ze = 0, Oe = 0, Ha = "";
function Is(e, t, n, a, o, r, s) {
  return { value: e, root: t, parent: n, type: a, props: o, children: r, line: Rs, column: ka, length: s, return: "" };
}
function Ja(e, t) {
  return S$(Is("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function B$() {
  return Oe;
}
function A$() {
  return Oe = Ze > 0 ? Le(Ha, --Ze) : 0, ka--, Oe === 10 && (ka = 1, Rs--), Oe;
}
function ot() {
  return Oe = Ze < Oh ? Le(Ha, Ze++) : 0, ka++, Oe === 10 && (ka = 1, Rs++), Oe;
}
function Pt() {
  return Le(Ha, Ze);
}
function wr() {
  return Ze;
}
function Wo(e, t) {
  return ko(Ha, e, t);
}
function $o(e) {
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
function Eh(e) {
  return Rs = ka = 1, Oh = Bt(Ha = e), Ze = 0, [];
}
function Ph(e) {
  return Ha = "", e;
}
function xr(e) {
  return Ah(Wo(Ze - 1, Ji(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function O$(e) {
  for (; (Oe = Pt()) && Oe < 33; )
    ot();
  return $o(e) > 2 || $o(Oe) > 3 ? "" : " ";
}
function E$(e, t) {
  for (; --t && ot() && !(Oe < 48 || Oe > 102 || Oe > 57 && Oe < 65 || Oe > 70 && Oe < 97); )
    ;
  return Wo(e, wr() + (t < 6 && Pt() == 32 && ot() == 32));
}
function Ji(e) {
  for (; ot(); )
    switch (Oe) {
      case e:
        return Ze;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ji(Oe);
        break;
      case 40:
        e === 41 && Ji(e);
        break;
      case 92:
        ot();
        break;
    }
  return Ze;
}
function P$(e, t) {
  for (; ot() && e + Oe !== 57; )
    if (e + Oe === 84 && Pt() === 47)
      break;
  return "/*" + Wo(t, Ze - 1) + "*" + Ps(e === 47 ? e : ot());
}
function R$(e) {
  for (; !$o(Pt()); )
    ot();
  return Wo(e, Ze);
}
function I$(e) {
  return Ph(Cr("", null, null, null, [""], e = Eh(e), 0, [0], e));
}
function Cr(e, t, n, a, o, r, s, i, u) {
  for (var c = 0, d = 0, f = s, p = 0, h = 0, m = 0, v = 1, b = 1, C = 1, $ = 0, k = "", D = o, T = r, A = a, M = k; b; )
    switch (m = $, $ = ot()) {
      case 40:
        if (m != 108 && Le(M, f - 1) == 58) {
          Zi(M += be(xr($), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        M += xr($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        M += O$(m);
        break;
      case 92:
        M += E$(wr() - 1, 7);
        continue;
      case 47:
        switch (Pt()) {
          case 42:
          case 47:
            lr(F$(P$(ot(), wr()), t, n), u);
            break;
          default:
            M += "/";
        }
        break;
      case 123 * v:
        i[c++] = Bt(M) * C;
      case 125 * v:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            b = 0;
          case 59 + d:
            C == -1 && (M = be(M, /\f/g, "")), h > 0 && Bt(M) - f && lr(h > 32 ? qc(M + ";", a, n, f - 1) : qc(be(M, " ", "") + ";", a, n, f - 2), u);
            break;
          case 59:
            M += ";";
          default:
            if (lr(A = Gc(M, t, n, c, d, o, i, k, D = [], T = [], f), r), $ === 123)
              if (d === 0)
                Cr(M, t, A, A, D, r, f, i, T);
              else
                switch (p === 99 && Le(M, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Cr(e, A, A, a && lr(Gc(e, A, A, 0, 0, o, i, k, o, D = [], f), T), o, T, f, i, a ? D : T);
                    break;
                  default:
                    Cr(M, A, A, A, [""], T, 0, i, T);
                }
        }
        c = d = h = 0, v = C = 1, k = M = "", f = s;
        break;
      case 58:
        f = 1 + Bt(M), h = m;
      default:
        if (v < 1) {
          if ($ == 123)
            --v;
          else if ($ == 125 && v++ == 0 && A$() == 125)
            continue;
        }
        switch (M += Ps($), $ * v) {
          case 38:
            C = d > 0 ? 1 : (M += "\f", -1);
            break;
          case 44:
            i[c++] = (Bt(M) - 1) * C, C = 1;
            break;
          case 64:
            Pt() === 45 && (M += xr(ot())), p = Pt(), d = f = Bt(k = M += R$(wr())), $++;
            break;
          case 45:
            m === 45 && Bt(M) == 2 && (v = 0);
        }
    }
  return r;
}
function Gc(e, t, n, a, o, r, s, i, u, c, d) {
  for (var f = o - 1, p = o === 0 ? r : [""], h = Tu(p), m = 0, v = 0, b = 0; m < a; ++m)
    for (var C = 0, $ = ko(e, f + 1, f = $$(v = s[m])), k = e; C < h; ++C)
      (k = Ah(v > 0 ? p[C] + " " + $ : be($, /&\f/g, p[C]))) && (u[b++] = k);
  return Is(e, t, n, o === 0 ? $u : i, u, c, d);
}
function F$(e, t, n) {
  return Is(e, t, n, Mh, Ps(B$()), ko(e, 2, -2), 0);
}
function qc(e, t, n, a) {
  return Is(e, t, n, Su, ko(e, 0, a), ko(e, a + 1, -1), a);
}
function ca(e, t) {
  for (var n = "", a = Tu(e), o = 0; o < a; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function V$(e, t, n, a) {
  switch (e.type) {
    case k$:
      if (e.children.length) break;
    case C$:
    case Su:
      return e.return = e.return || e.value;
    case Mh:
      return "";
    case Bh:
      return e.return = e.value + "{" + ca(e.children, a) + "}";
    case $u:
      e.value = e.props.join(",");
  }
  return Bt(n = ca(e.children, a)) ? e.return = e.value + "{" + n + "}" : "";
}
function N$(e) {
  var t = Tu(e);
  return function(n, a, o, r) {
    for (var s = "", i = 0; i < t; i++)
      s += e[i](n, a, o, r) || "";
    return s;
  };
}
function L$(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function z$(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var U$ = function(t, n, a) {
  for (var o = 0, r = 0; o = r, r = Pt(), o === 38 && r === 12 && (n[a] = 1), !$o(r); )
    ot();
  return Wo(t, Ze);
}, H$ = function(t, n) {
  var a = -1, o = 44;
  do
    switch ($o(o)) {
      case 0:
        o === 38 && Pt() === 12 && (n[a] = 1), t[a] += U$(Ze - 1, n, a);
        break;
      case 2:
        t[a] += xr(o);
        break;
      case 4:
        if (o === 44) {
          t[++a] = Pt() === 58 ? "&\f" : "", n[a] = t[a].length;
          break;
        }
      default:
        t[a] += Ps(o);
    }
  while (o = ot());
  return t;
}, W$ = function(t, n) {
  return Ph(H$(Eh(t), n));
}, Xc = /* @__PURE__ */ new WeakMap(), Y$ = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, a = t.parent, o = t.column === a.column && t.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Xc.get(a)) && !o) {
      Xc.set(t, !0);
      for (var r = [], s = W$(n, r), i = a.props, u = 0, c = 0; u < s.length; u++)
        for (var d = 0; d < i.length; d++, c++)
          t.props[c] = r[u] ? s[u].replace(/&\f/g, i[d]) : i[d] + " " + s[u];
    }
  }
}, K$ = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Rh(e, t) {
  switch (T$(e, t)) {
    case 5103:
      return ye + "print-" + e + e;
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
      return ye + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ye + e + Kr + e + He + e + e;
    case 6828:
    case 4268:
      return ye + e + He + e + e;
    case 6165:
      return ye + e + He + "flex-" + e + e;
    case 5187:
      return ye + e + be(e, /(\w+).+(:[^]+)/, ye + "box-$1$2" + He + "flex-$1$2") + e;
    case 5443:
      return ye + e + He + "flex-item-" + be(e, /flex-|-self/, "") + e;
    case 4675:
      return ye + e + He + "flex-line-pack" + be(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ye + e + He + be(e, "shrink", "negative") + e;
    case 5292:
      return ye + e + He + be(e, "basis", "preferred-size") + e;
    case 6060:
      return ye + "box-" + be(e, "-grow", "") + ye + e + He + be(e, "grow", "positive") + e;
    case 4554:
      return ye + be(e, /([^-])(transform)/g, "$1" + ye + "$2") + e;
    case 6187:
      return be(be(be(e, /(zoom-|grab)/, ye + "$1"), /(image-set)/, ye + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return be(e, /(image-set\([^]*)/, ye + "$1$`$1");
    case 4968:
      return be(be(e, /(.+:)(flex-)?(.*)/, ye + "box-pack:$3" + He + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ye + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return be(e, /(.+)-inline(.+)/, ye + "$1$2") + e;
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
      if (Bt(e) - 1 - t > 6) switch (Le(e, t + 1)) {
        case 109:
          if (Le(e, t + 4) !== 45) break;
        case 102:
          return be(e, /(.+:)(.+)-([^]+)/, "$1" + ye + "$2-$3$1" + Kr + (Le(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Zi(e, "stretch") ? Rh(be(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Le(e, t + 1) !== 115) break;
    case 6444:
      switch (Le(e, Bt(e) - 3 - (~Zi(e, "!important") && 10))) {
        case 107:
          return be(e, ":", ":" + ye) + e;
        case 101:
          return be(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ye + (Le(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ye + "$2$3$1" + He + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Le(e, t + 11)) {
        case 114:
          return ye + e + He + be(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ye + e + He + be(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ye + e + He + be(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ye + e + He + e + e;
  }
  return e;
}
var j$ = function(t, n, a, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Su:
      t.return = Rh(t.value, t.length);
      break;
    case Bh:
      return ca([Ja(t, {
        value: be(t.value, "@", "@" + ye)
      })], o);
    case $u:
      if (t.length) return M$(t.props, function(r) {
        switch (D$(r, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ca([Ja(t, {
              props: [be(r, /:(read-\w+)/, ":" + Kr + "$1")]
            })], o);
          case "::placeholder":
            return ca([Ja(t, {
              props: [be(r, /:(plac\w+)/, ":" + ye + "input-$1")]
            }), Ja(t, {
              props: [be(r, /:(plac\w+)/, ":" + Kr + "$1")]
            }), Ja(t, {
              props: [be(r, /:(plac\w+)/, He + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, G$ = [j$], q$ = function(t) {
  var n = t.key;
  if (n === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(v) {
      var b = v.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || G$, r = {}, s, i = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(v) {
      for (var b = v.getAttribute("data-emotion").split(" "), C = 1; C < b.length; C++)
        r[b[C]] = !0;
      i.push(v);
    }
  );
  var u, c = [Y$, K$];
  {
    var d, f = [V$, L$(function(v) {
      d.insert(v);
    })], p = N$(c.concat(o, f)), h = function(b) {
      return ca(I$(b), p);
    };
    u = function(b, C, $, k) {
      d = $, h(b ? b + "{" + C.styles + "}" : C.styles), k && (m.inserted[C.name] = !0);
    };
  }
  var m = {
    key: n,
    sheet: new x$({
      key: n,
      container: s,
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
  return m.sheet.hydrate(i), m;
};
function X$(e) {
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
var Z$ = {
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
}, J$ = !1, Q$ = /[A-Z]|^ms/g, e2 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ih = function(t) {
  return t.charCodeAt(1) === 45;
}, Zc = function(t) {
  return t != null && typeof t != "boolean";
}, vi = /* @__PURE__ */ z$(function(e) {
  return Ih(e) ? e : e.replace(Q$, "-$&").toLowerCase();
}), Jc = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(e2, function(a, o, r) {
          return gn = {
            name: o,
            styles: r,
            next: gn
          }, o;
        });
  }
  return Z$[t] !== 1 && !Ih(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, t2 = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function jr(e, t, n) {
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
        return gn = {
          name: o.name,
          styles: o.styles,
          next: gn
        }, o.name;
      var r = n;
      if (r.styles !== void 0) {
        var s = r.next;
        if (s !== void 0)
          for (; s !== void 0; )
            gn = {
              name: s.name,
              styles: s.styles,
              next: gn
            }, s = s.next;
        var i = r.styles + ";";
        return i;
      }
      return n2(e, t, n);
    }
  }
  var u = n;
  if (t == null)
    return u;
  var c = t[u];
  return c !== void 0 ? c : u;
}
function n2(e, t, n) {
  var a = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      a += jr(e, t, n[o]) + ";";
  else
    for (var r in n) {
      var s = n[r];
      if (typeof s != "object") {
        var i = s;
        t != null && t[i] !== void 0 ? a += r + "{" + t[i] + "}" : Zc(i) && (a += vi(r) + ":" + Jc(r, i) + ";");
      } else {
        if (r === "NO_COMPONENT_SELECTOR" && J$)
          throw new Error(t2);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var u = 0; u < s.length; u++)
            Zc(s[u]) && (a += vi(r) + ":" + Jc(r, s[u]) + ";");
        else {
          var c = jr(e, t, s);
          switch (r) {
            case "animation":
            case "animationName": {
              a += vi(r) + ":" + c + ";";
              break;
            }
            default:
              a += r + "{" + c + "}";
          }
        }
      }
    }
  return a;
}
var Qc = /label:\s*([^\s;{]+)\s*(;|$)/g, gn;
function mi(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var a = !0, o = "";
  gn = void 0;
  var r = e[0];
  if (r == null || r.raw === void 0)
    a = !1, o += jr(n, t, r);
  else {
    var s = r;
    o += s[0];
  }
  for (var i = 1; i < e.length; i++)
    if (o += jr(n, t, e[i]), a) {
      var u = r;
      o += u[i];
    }
  Qc.lastIndex = 0;
  for (var c = "", d; (d = Qc.exec(o)) !== null; )
    c += "-" + d[1];
  var f = X$(o) + c;
  return {
    name: f,
    styles: o,
    next: gn
  };
}
function Fh(e, t, n) {
  var a = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (a += o + " ");
  }), a;
}
var a2 = function(t, n, a) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, o2 = function(t, n, a) {
  a2(t, n);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var r = n;
    do
      t.insert(n === r ? "." + o : "", r, t.sheet, !0), r = r.next;
    while (r !== void 0);
  }
};
function ed(e, t) {
  if (e.inserted[t.name] === void 0)
    return e.insert("", t, e.sheet, !0);
}
function td(e, t, n) {
  var a = [], o = Fh(e, a, n);
  return a.length < 2 ? n : o + t(a);
}
var r2 = function(t) {
  var n = q$(t);
  n.sheet.speedy = function(i) {
    this.isSpeedy = i;
  }, n.compat = !0;
  var a = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
      c[d] = arguments[d];
    var f = mi(c, n.registered, void 0);
    return o2(n, f), n.key + "-" + f.name;
  }, o = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
      c[d] = arguments[d];
    var f = mi(c, n.registered), p = "animation-" + f.name;
    return ed(n, {
      name: f.name,
      styles: "@keyframes " + p + "{" + f.styles + "}"
    }), p;
  }, r = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
      c[d] = arguments[d];
    var f = mi(c, n.registered);
    ed(n, f);
  }, s = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
      c[d] = arguments[d];
    return td(n.registered, a, s2(c));
  };
  return {
    css: a,
    cx: s,
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
    getRegisteredStyles: Fh.bind(null, n.registered),
    merge: td.bind(null, n.registered, a)
  };
}, s2 = function e(t) {
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
            for (var s in o)
              o[s] && s && (r && (r += " "), r += s);
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
}, Vh = r2({
  key: "css"
}), Wa = Vh.injectGlobal, Ce = Vh.css, i2 = function(t, n) {
  n || (n = [0, ""]), t = String(t);
  var a = parseFloat(t, 10);
  return n[0] = a, n[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "", n;
}, Nh = i2, Qa = Lh("in", document.body);
function Qi(e, t) {
  var n = Nh(getComputedStyle(e).getPropertyValue(t));
  return n[0] * zh(n[1], e);
}
function Lh(e, t) {
  var n = document.createElement("div");
  n.style.height = "128" + e, t.appendChild(n);
  var a = Qi(n, "height") / 128;
  return t.removeChild(n), a;
}
function zh(e, t) {
  if (!e) return null;
  switch (t = t || document.body, e = (e + "" || "px").trim().toLowerCase(), (t === window || t === document) && (t = document.body), e) {
    case "%":
      return t.clientHeight / 100;
    case "ch":
    case "ex":
      return Lh(e, t);
    case "em":
      return Qi(t, "font-size");
    case "rem":
      return Qi(document.body, "font-size");
    case "vw":
      return window.innerWidth / 100;
    case "vh":
      return window.innerHeight / 100;
    case "vmin":
      return Math.min(window.innerWidth, window.innerHeight) / 100;
    case "vmax":
      return Math.max(window.innerWidth, window.innerHeight) / 100;
    case "in":
      return Qa;
    case "cm":
      return Qa / 2.54;
    case "mm":
      return Qa / 25.4;
    case "pt":
      return Qa / 72;
    case "pc":
      return Qa / 6;
    case "px":
      return 1;
  }
  var n = Nh(e);
  if (!isNaN(n[0]) && n[1]) {
    var a = zh(n[1], t);
    return typeof a == "number" ? n[0] * a : null;
  }
  return null;
}
function Uh() {
  const e = () => Math.floor((1 + crypto.getRandomValues(new Uint32Array(1))[0]) * 65536).toString(16).substring(1);
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}
function l2(e, t) {
  const n = e.substr(4, e.length - 5);
  return getComputedStyle(t).getPropertyValue(n);
}
function u2(e, t, n = 0) {
  const [a, o, r, s] = [
    e.x + n,
    e.y + e.height - 2 * n,
    e.x + e.width - 2 * n,
    e.y + n
  ], [i, u, c, d] = [
    t.x + n,
    t.y + t.height - 2 * n,
    t.x + t.width - 2 * n,
    t.y + n
  ];
  return !(o < d || u < s || r < i || c < a);
}
function Du(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Hh(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function Yo() {
}
var So = 0.7, Gr = 1 / So, da = "\\s*([+-]?\\d+)\\s*", To = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", c2 = /^#([0-9a-f]{3,8})$/, d2 = new RegExp(`^rgb\\(${da},${da},${da}\\)$`), f2 = new RegExp(`^rgb\\(${Rt},${Rt},${Rt}\\)$`), p2 = new RegExp(`^rgba\\(${da},${da},${da},${To}\\)$`), h2 = new RegExp(`^rgba\\(${Rt},${Rt},${Rt},${To}\\)$`), v2 = new RegExp(`^hsl\\(${To},${Rt},${Rt}\\)$`), m2 = new RegExp(`^hsla\\(${To},${Rt},${Rt},${To}\\)$`), nd = {
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
Du(Yo, Wn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ad,
  // Deprecated! Use color.formatHex.
  formatHex: ad,
  formatHex8: g2,
  formatHsl: y2,
  formatRgb: od,
  toString: od
});
function ad() {
  return this.rgb().formatHex();
}
function g2() {
  return this.rgb().formatHex8();
}
function y2() {
  return Wh(this).formatHsl();
}
function od() {
  return this.rgb().formatRgb();
}
function Wn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = c2.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? rd(t) : n === 3 ? new Ge(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ur(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ur(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = d2.exec(e)) ? new Ge(t[1], t[2], t[3], 1) : (t = f2.exec(e)) ? new Ge(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = p2.exec(e)) ? ur(t[1], t[2], t[3], t[4]) : (t = h2.exec(e)) ? ur(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = v2.exec(e)) ? ld(t[1], t[2] / 100, t[3] / 100, 1) : (t = m2.exec(e)) ? ld(t[1], t[2] / 100, t[3] / 100, t[4]) : nd.hasOwnProperty(e) ? rd(nd[e]) : e === "transparent" ? new Ge(NaN, NaN, NaN, 0) : null;
}
function rd(e) {
  return new Ge(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ur(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new Ge(e, t, n, a);
}
function b2(e) {
  return e instanceof Yo || (e = Wn(e)), e ? (e = e.rgb(), new Ge(e.r, e.g, e.b, e.opacity)) : new Ge();
}
function el(e, t, n, a) {
  return arguments.length === 1 ? b2(e) : new Ge(e, t, n, a ?? 1);
}
function Ge(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Du(Ge, el, Hh(Yo, {
  brighter(e) {
    return e = e == null ? Gr : Math.pow(Gr, e), new Ge(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? So : Math.pow(So, e), new Ge(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ge(Fn(this.r), Fn(this.g), Fn(this.b), qr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: sd,
  // Deprecated! Use color.formatHex.
  formatHex: sd,
  formatHex8: _2,
  formatRgb: id,
  toString: id
}));
function sd() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}`;
}
function _2() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}${On((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function id() {
  const e = qr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Fn(this.r)}, ${Fn(this.g)}, ${Fn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function qr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Fn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function On(e) {
  return e = Fn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ld(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new gt(e, t, n, a);
}
function Wh(e) {
  if (e instanceof gt) return new gt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Yo || (e = Wn(e)), !e) return new gt();
  if (e instanceof gt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), r = Math.max(t, n, a), s = NaN, i = r - o, u = (r + o) / 2;
  return i ? (t === r ? s = (n - a) / i + (n < a) * 6 : n === r ? s = (a - t) / i + 2 : s = (t - n) / i + 4, i /= u < 0.5 ? r + o : 2 - r - o, s *= 60) : i = u > 0 && u < 1 ? 0 : s, new gt(s, i, u, e.opacity);
}
function Mu(e, t, n, a) {
  return arguments.length === 1 ? Wh(e) : new gt(e, t, n, a ?? 1);
}
function gt(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Du(gt, Mu, Hh(Yo, {
  brighter(e) {
    return e = e == null ? Gr : Math.pow(Gr, e), new gt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? So : Math.pow(So, e), new gt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new Ge(
      gi(e >= 240 ? e - 240 : e + 120, o, a),
      gi(e, o, a),
      gi(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new gt(ud(this.h), cr(this.s), cr(this.l), qr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = qr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ud(this.h)}, ${cr(this.s) * 100}%, ${cr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ud(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function cr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function gi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ro = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS) || ["#4D8CFD", "#FF6B7E", "#F4B83E", "#A6CC74", "#00C19A", "#6859BE"], w2 = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS_DARK) || ["#4D8CFD", "#FF6B7E", "#FFC16D", "#A6CC74", "#00C19A", "#7887E0"], pn = (e) => `--vis-${yn(e) ? `color${e % ro.length}` : e}`;
function x2(e, t = 0.4) {
  const n = Mu(e);
  return n.l = n.l * (1 + t), n.formatHex();
}
function C2(e, t = 0.4, n = 0.6) {
  const a = Mu(e);
  return a.s = a.s * (1 - n), a.l = a.l * (1 - t), a.formatHex();
}
const Do = 10, tl = [
  { id: "stripes-diagonal", svg: '<path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#000"/>' },
  { id: "dots", svg: '<path d="m0-1.5a1 1 0 010 3m10-3a1 1 0 000 3M5 3.5a1 1 0 010 3 1 1 0 010-3M0 8.5 a1 1 0 010 3m10-3a1 1 0 000 3" fill"#000"/>' },
  { id: "stripes-vertical", svg: '<path d="M 5,-1 L5,11" stroke="#000"/>' },
  { id: "crosshatch", svg: '<path d="M0 0L10 10ZM10 0L0 10Z" stroke="#000"/>' },
  { id: "waves", svg: '<path d="M0 4Q2.5 1 5 4 7.5 7 10 4v2Q7.5 9 5 6 2.5 3 0 6Z" fill="#000"/>' },
  { id: "circles", svg: '<circle cx="5" cy="5" r="3" stroke="#000" fill="#fff"/>' }
], nl = [
  { id: "circle", marker: '<circle cx="5" cy="5" r="5"/>', dashArray: [] },
  { id: "triangle", marker: '<path d="M5,0 L10,9 L0,9Z">', dashArray: [9, 1] },
  { id: "diamond", marker: '<path d="M 0 5 L5 0 L 10 5 L 5 10 L 0 5Z">', dashArray: [2] },
  { id: "arrow", marker: '<path d="M4 0 0 0 6 5 0 10 4 10 10 5Z">', dashArray: [2, 3, 8, 3] },
  { id: "square", marker: '<rect x="1" y="1" width="8" height="8"/>', dashArray: [6] },
  { id: "star", marker: '<path d="m2 9 3-9 3 9L0 3h10Z"/>', dashArray: [1, 6] }
];
function hn(e) {
  return `vis-${`pattern-${e.svg ? "fill" : "marker"}`}-${e.id}`;
}
const k2 = (e) => `<mask id="${hn(e)}">
    <pattern id="${e.id}" viewBox="0 0 10 10" width="${Do}" height="${Do}" patternUnits="userSpaceOnUse">
      <rect width="100%" height="100%" fill="#fff"/>
      ${e.svg}
    </pattern>
    <rect x="-50%" y="-50%" width="200%" height="200%" fill="url(#${e.id})"/>
  </mask>`, $2 = (e, t) => `<marker id="${hn(e)}"
    fill="var(${pn(t)})"
    markerUnits="userSpaceOnUse"
    refX="5"
    refY="5"
    markerWidth="${Do}"
    markerHeight="${Do}">
    ${e.marker}
  </marker>`;
function S2() {
  const e = tl.map(k2).concat(nl.map($2)).join(""), t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  t.setAttribute("height", "100%"), t.setAttribute("width", "100%"), t.style.position = "fixed", t.style.zIndex = "-99999999", t.innerHTML = `<defs>${e}</defs>`, document.body.appendChild(t);
}
typeof window < "u" && S2();
const Yh = (globalThis == null ? void 0 : globalThis.UNOVIS_FONT_W2H_RATIO_DEFAULT) || 0.5, Kh = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_SEPARATOR_DEFAULT) || [" ", "-", ".", ","], jh = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_HYPHEN_CHARACTER_DEFAULT) || "-", cd = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_DEFAULT) || {
  text: "",
  fontSize: 12,
  fontFamily: "var(--vis-font-family)",
  lineHeight: 1.25,
  marginTop: 0,
  marginBottom: 0
};
Wa`
  :root {
    label: vis-root-styles;
    --vis-font-family: Inter, Arial, "Helvetica Neue", Helvetica, sans-serif;
    --vis-font-wh-ratio: ${Yh};
    --vis-color-main: var(${pn(0)});
    --vis-color-main-light: ${x2(ro[0])};
    --vis-color-main-dark: ${C2(ro[0])};
    --vis-color-grey: #2a2a2a;
    ${ro.map((e, t) => `${pn(t)}: ${e};`)}
    ${w2.map((e, t) => `--vis-dark-color${t}: ${e};`)}
    ${tl.map((e, t) => `
      --${hn(e)}: url(#${hn(e)});
      --vis-pattern-fill${t}: var(--${hn(e)});
    `)}
    ${nl.map((e, t) => {
  var n;
  return `
      --${hn(e)}: url(#${hn(e)});
      --vis-pattern-marker${t}: var(--${hn(e)});
      --vis-pattern-dasharray${t}: ${(n = e.dashArray) === null || n === void 0 ? void 0 : n.join(" ")};
    `;
})}

    body.theme-dark {
      ${ro.map((e, t) => `${pn(t)}: var(--vis-dark-color${t});`)}
    }

    body.theme-patterns {
      ${tl.map((e, t) => `path[style*="fill: var(${pn(t)})"]  {
        mask: var(--vis-pattern-fill${t});
      }`)}
      ${nl.map((e, t) => `
      path[stroke="var(${pn(t)})"]:not([style*="fill"]),
      path[style*="stroke: var(${pn(t)})"]:not([style*="fill"]) {
        marker: var(--vis-pattern-marker${t});
        stroke-dasharray: var(--vis-pattern-dasharray${t});
      }
    `)}
}
`;
function T2(e = window == null ? void 0 : window.document.body) {
  return e ? +l2("var(--vis-font-wh-ratio)", e) : Yh;
}
var D2 = { value: () => {
} };
function Gh() {
  for (var e = 0, t = arguments.length, n = {}, a; e < t; ++e) {
    if (!(a = arguments[e] + "") || a in n || /[\s.]/.test(a)) throw new Error("illegal type: " + a);
    n[a] = [];
  }
  return new kr(n);
}
function kr(e) {
  this._ = e;
}
function M2(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var a = "", o = n.indexOf(".");
    if (o >= 0 && (a = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: a };
  });
}
kr.prototype = Gh.prototype = {
  constructor: kr,
  on: function(e, t) {
    var n = this._, a = M2(e + "", n), o, r = -1, s = a.length;
    if (arguments.length < 2) {
      for (; ++r < s; ) if ((o = (e = a[r]).type) && (o = B2(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++r < s; )
      if (o = (e = a[r]).type) n[o] = dd(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = dd(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new kr(e);
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
function B2(e, t) {
  for (var n = 0, a = e.length, o; n < a; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function dd(e, t, n) {
  for (var a = 0, o = e.length; a < o; ++a)
    if (e[a].name === t) {
      e[a] = D2, e = e.slice(0, a).concat(e.slice(a + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var $a = 0, so = 0, eo = 0, qh = 1e3, Xr, io, Zr = 0, Yn = 0, Fs = 0, Mo = typeof performance == "object" && performance.now ? performance : Date, Xh = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Bu() {
  return Yn || (Xh(A2), Yn = Mo.now() + Fs);
}
function A2() {
  Yn = 0;
}
function Jr() {
  this._call = this._time = this._next = null;
}
Jr.prototype = Zh.prototype = {
  constructor: Jr,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Bu() : +n) + (t == null ? 0 : +t), !this._next && io !== this && (io ? io._next = this : Xr = this, io = this), this._call = e, this._time = n, al();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, al());
  }
};
function Zh(e, t, n) {
  var a = new Jr();
  return a.restart(e, t, n), a;
}
function O2() {
  Bu(), ++$a;
  for (var e = Xr, t; e; )
    (t = Yn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --$a;
}
function fd() {
  Yn = (Zr = Mo.now()) + Fs, $a = so = 0;
  try {
    O2();
  } finally {
    $a = 0, P2(), Yn = 0;
  }
}
function E2() {
  var e = Mo.now(), t = e - Zr;
  t > qh && (Fs -= t, Zr = e);
}
function P2() {
  for (var e, t = Xr, n, a = 1 / 0; t; )
    t._call ? (a > t._time && (a = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Xr = n);
  io = e, al(a);
}
function al(e) {
  if (!$a) {
    so && (so = clearTimeout(so));
    var t = e - Yn;
    t > 24 ? (e < 1 / 0 && (so = setTimeout(fd, e - Mo.now() - Fs)), eo && (eo = clearInterval(eo))) : (eo || (Zr = Mo.now(), eo = setInterval(E2, qh)), $a = 1, Xh(fd));
  }
}
function pd(e, t, n) {
  var a = new Jr();
  return t = t == null ? 0 : +t, a.restart((o) => {
    a.stop(), e(o + t);
  }, t, n), a;
}
var R2 = Gh("start", "end", "cancel", "interrupt"), I2 = [], Jh = 0, hd = 1, ol = 2, $r = 3, vd = 4, rl = 5, Sr = 6;
function Vs(e, t, n, a, o, r) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  F2(e, n, {
    name: t,
    index: a,
    // For context during callback.
    group: o,
    // For context during callback.
    on: R2,
    tween: I2,
    time: r.time,
    delay: r.delay,
    duration: r.duration,
    ease: r.ease,
    timer: null,
    state: Jh
  });
}
function Au(e, t) {
  var n = Ct(e, t);
  if (n.state > Jh) throw new Error("too late; already scheduled");
  return n;
}
function Ut(e, t) {
  var n = Ct(e, t);
  if (n.state > $r) throw new Error("too late; already running");
  return n;
}
function Ct(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function F2(e, t, n) {
  var a = e.__transition, o;
  a[t] = n, n.timer = Zh(r, 0, n.time);
  function r(c) {
    n.state = hd, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, f, p, h;
    if (n.state !== hd) return u();
    for (d in a)
      if (h = a[d], h.name === n.name) {
        if (h.state === $r) return pd(s);
        h.state === vd ? (h.state = Sr, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete a[d]) : +d < t && (h.state = Sr, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete a[d]);
      }
    if (pd(function() {
      n.state === $r && (n.state = vd, n.timer.restart(i, n.delay, n.time), i(c));
    }), n.state = ol, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ol) {
      for (n.state = $r, o = new Array(p = n.tween.length), d = 0, f = -1; d < p; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function i(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(u), n.state = rl, 1), f = -1, p = o.length; ++f < p; )
      o[f].call(e, d);
    n.state === rl && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = Sr, n.timer.stop(), delete a[t];
    for (var c in a) return;
    delete e.__transition;
  }
}
function Ou(e, t) {
  var n = e.__transition, a, o, r = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((a = n[s]).name !== t) {
        r = !1;
        continue;
      }
      o = a.state > ol && a.state < rl, a.state = Sr, a.timer.stop(), a.on.call(o ? "interrupt" : "cancel", e, e.__data__, a.index, a.group), delete n[s];
    }
    r && delete e.__transition;
  }
}
function V2(e) {
  return this.each(function() {
    Ou(this, e);
  });
}
const Eu = (e) => () => e;
function N2(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function L2(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function z2(e) {
  return (e = +e) == 1 ? Qh : function(t, n) {
    return n - t ? L2(t, n, e) : Eu(isNaN(t) ? n : t);
  };
}
function Qh(e, t) {
  var n = t - e;
  return n ? N2(e, n) : Eu(isNaN(e) ? t : e);
}
const Qr = function e(t) {
  var n = z2(t);
  function a(o, r) {
    var s = n((o = el(o)).r, (r = el(r)).r), i = n(o.g, r.g), u = n(o.b, r.b), c = Qh(o.opacity, r.opacity);
    return function(d) {
      return o.r = s(d), o.g = i(d), o.b = u(d), o.opacity = c(d), o + "";
    };
  }
  return a.gamma = e, a;
}(1);
function U2(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(r) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - r) + t[o] * r;
    return a;
  };
}
function H2(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function W2(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), r = new Array(n), s;
  for (s = 0; s < a; ++s) o[s] = Ya(e[s], t[s]);
  for (; s < n; ++s) r[s] = t[s];
  return function(i) {
    for (s = 0; s < a; ++s) r[s] = o[s](i);
    return r;
  };
}
function Y2(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function ht(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function K2(e, t) {
  var n = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Ya(e[o], t[o]) : a[o] = t[o];
  return function(r) {
    for (o in n) a[o] = n[o](r);
    return a;
  };
}
var sl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, yi = new RegExp(sl.source, "g");
function j2(e) {
  return function() {
    return e;
  };
}
function G2(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ev(e, t) {
  var n = sl.lastIndex = yi.lastIndex = 0, a, o, r, s = -1, i = [], u = [];
  for (e = e + "", t = t + ""; (a = sl.exec(e)) && (o = yi.exec(t)); )
    (r = o.index) > n && (r = t.slice(n, r), i[s] ? i[s] += r : i[++s] = r), (a = a[0]) === (o = o[0]) ? i[s] ? i[s] += o : i[++s] = o : (i[++s] = null, u.push({ i: s, x: ht(a, o) })), n = yi.lastIndex;
  return n < t.length && (r = t.slice(n), i[s] ? i[s] += r : i[++s] = r), i.length < 2 ? u[0] ? G2(u[0].x) : j2(t) : (t = u.length, function(c) {
    for (var d = 0, f; d < t; ++d) i[(f = u[d]).i] = f.x(c);
    return i.join("");
  });
}
function Ya(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Eu(t) : (n === "number" ? ht : n === "string" ? (a = Wn(t)) ? (t = a, Qr) : ev : t instanceof Wn ? Qr : t instanceof Date ? Y2 : H2(t) ? U2 : Array.isArray(t) ? W2 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? K2 : ht)(e, t);
}
function Pu(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
var md = 180 / Math.PI, il = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function tv(e, t, n, a, o, r) {
  var s, i, u;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (u = e * n + t * a) && (n -= e * u, a -= t * u), (i = Math.sqrt(n * n + a * a)) && (n /= i, a /= i, u /= i), e * a < t * n && (e = -e, t = -t, u = -u, s = -s), {
    translateX: o,
    translateY: r,
    rotate: Math.atan2(t, e) * md,
    skewX: Math.atan(u) * md,
    scaleX: s,
    scaleY: i
  };
}
var dr;
function q2(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? il : tv(t.a, t.b, t.c, t.d, t.e, t.f);
}
function X2(e) {
  return e == null || (dr || (dr = document.createElementNS("http://www.w3.org/2000/svg", "g")), dr.setAttribute("transform", e), !(e = dr.transform.baseVal.consolidate())) ? il : (e = e.matrix, tv(e.a, e.b, e.c, e.d, e.e, e.f));
}
function nv(e, t, n, a) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function r(c, d, f, p, h, m) {
    if (c !== f || d !== p) {
      var v = h.push("translate(", null, t, null, n);
      m.push({ i: v - 4, x: ht(c, f) }, { i: v - 2, x: ht(d, p) });
    } else (f || p) && h.push("translate(" + f + t + p + n);
  }
  function s(c, d, f, p) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), p.push({ i: f.push(o(f) + "rotate(", null, a) - 2, x: ht(c, d) })) : d && f.push(o(f) + "rotate(" + d + a);
  }
  function i(c, d, f, p) {
    c !== d ? p.push({ i: f.push(o(f) + "skewX(", null, a) - 2, x: ht(c, d) }) : d && f.push(o(f) + "skewX(" + d + a);
  }
  function u(c, d, f, p, h, m) {
    if (c !== f || d !== p) {
      var v = h.push(o(h) + "scale(", null, ",", null, ")");
      m.push({ i: v - 4, x: ht(c, f) }, { i: v - 2, x: ht(d, p) });
    } else (f !== 1 || p !== 1) && h.push(o(h) + "scale(" + f + "," + p + ")");
  }
  return function(c, d) {
    var f = [], p = [];
    return c = e(c), d = e(d), r(c.translateX, c.translateY, d.translateX, d.translateY, f, p), s(c.rotate, d.rotate, f, p), i(c.skewX, d.skewX, f, p), u(c.scaleX, c.scaleY, d.scaleX, d.scaleY, f, p), c = d = null, function(h) {
      for (var m = -1, v = p.length, b; ++m < v; ) f[(b = p[m]).i] = b.x(h);
      return f.join("");
    };
  };
}
var Z2 = nv(q2, "px, ", "px)", "deg)"), J2 = nv(X2, ", ", ")", ")");
function Q2(e, t) {
  t === void 0 && (t = e, e = Ya);
  for (var n = 0, a = t.length - 1, o = t[0], r = new Array(a < 0 ? 0 : a); n < a; ) r[n] = e(o, o = t[++n]);
  return function(s) {
    var i = Math.max(0, Math.min(a - 1, Math.floor(s *= a)));
    return r[i](s - i);
  };
}
function eS(e, t) {
  var n, a;
  return function() {
    var o = Ut(this, e), r = o.tween;
    if (r !== n) {
      a = n = r;
      for (var s = 0, i = a.length; s < i; ++s)
        if (a[s].name === t) {
          a = a.slice(), a.splice(s, 1);
          break;
        }
    }
    o.tween = a;
  };
}
function tS(e, t, n) {
  var a, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var r = Ut(this, e), s = r.tween;
    if (s !== a) {
      o = (a = s).slice();
      for (var i = { name: t, value: n }, u = 0, c = o.length; u < c; ++u)
        if (o[u].name === t) {
          o[u] = i;
          break;
        }
      u === c && o.push(i);
    }
    r.tween = o;
  };
}
function nS(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var a = Ct(this.node(), n).tween, o = 0, r = a.length, s; o < r; ++o)
      if ((s = a[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? eS : tS)(n, e, t));
}
function Ru(e, t, n) {
  var a = e._id;
  return e.each(function() {
    var o = Ut(this, a);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Ct(o, a).value[t];
  };
}
function av(e, t) {
  var n;
  return (typeof t == "number" ? ht : t instanceof Wn ? Qr : (n = Wn(t)) ? (t = n, Qr) : ev)(e, t);
}
function aS(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function oS(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function rS(e, t, n) {
  var a, o = n + "", r;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === a ? r : r = t(a = s, n);
  };
}
function sS(e, t, n) {
  var a, o = n + "", r;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === a ? r : r = t(a = s, n);
  };
}
function iS(e, t, n) {
  var a, o, r;
  return function() {
    var s, i = n(this), u;
    return i == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), u = i + "", s === u ? null : s === a && u === o ? r : (o = u, r = t(a = s, i)));
  };
}
function lS(e, t, n) {
  var a, o, r;
  return function() {
    var s, i = n(this), u;
    return i == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), u = i + "", s === u ? null : s === a && u === o ? r : (o = u, r = t(a = s, i)));
  };
}
function uS(e, t) {
  var n = Bs(e), a = n === "transform" ? J2 : av;
  return this.attrTween(e, typeof t == "function" ? (n.local ? lS : iS)(n, a, Ru(this, "attr." + e, t)) : t == null ? (n.local ? oS : aS)(n) : (n.local ? sS : rS)(n, a, t));
}
function cS(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function dS(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function fS(e, t) {
  var n, a;
  function o() {
    var r = t.apply(this, arguments);
    return r !== a && (n = (a = r) && dS(e, r)), n;
  }
  return o._value = t, o;
}
function pS(e, t) {
  var n, a;
  function o() {
    var r = t.apply(this, arguments);
    return r !== a && (n = (a = r) && cS(e, r)), n;
  }
  return o._value = t, o;
}
function hS(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var a = Bs(e);
  return this.tween(n, (a.local ? fS : pS)(a, t));
}
function vS(e, t) {
  return function() {
    Au(this, e).delay = +t.apply(this, arguments);
  };
}
function mS(e, t) {
  return t = +t, function() {
    Au(this, e).delay = t;
  };
}
function gS(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? vS : mS)(t, e)) : Ct(this.node(), t).delay;
}
function yS(e, t) {
  return function() {
    Ut(this, e).duration = +t.apply(this, arguments);
  };
}
function bS(e, t) {
  return t = +t, function() {
    Ut(this, e).duration = t;
  };
}
function _S(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? yS : bS)(t, e)) : Ct(this.node(), t).duration;
}
function wS(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Ut(this, e).ease = t;
  };
}
function xS(e) {
  var t = this._id;
  return arguments.length ? this.each(wS(t, e)) : Ct(this.node(), t).ease;
}
function CS(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Ut(this, e).ease = n;
  };
}
function kS(e) {
  if (typeof e != "function") throw new Error();
  return this.each(CS(this._id, e));
}
function $S(e) {
  typeof e != "function" && (e = dh(e));
  for (var t = this._groups, n = t.length, a = new Array(n), o = 0; o < n; ++o)
    for (var r = t[o], s = r.length, i = a[o] = [], u, c = 0; c < s; ++c)
      (u = r[c]) && e.call(u, u.__data__, c, r) && i.push(u);
  return new on(a, this._parents, this._name, this._id);
}
function SS(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, a = t.length, o = n.length, r = Math.min(a, o), s = new Array(a), i = 0; i < r; ++i)
    for (var u = t[i], c = n[i], d = u.length, f = s[i] = new Array(d), p, h = 0; h < d; ++h)
      (p = u[h] || c[h]) && (f[h] = p);
  for (; i < a; ++i)
    s[i] = t[i];
  return new on(s, this._parents, this._name, this._id);
}
function TS(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function DS(e, t, n) {
  var a, o, r = TS(t) ? Au : Ut;
  return function() {
    var s = r(this, e), i = s.on;
    i !== a && (o = (a = i).copy()).on(t, n), s.on = o;
  };
}
function MS(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Ct(this.node(), n).on.on(e) : this.each(DS(n, e, t));
}
function BS(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function AS() {
  return this.on("end.remove", BS(this._id));
}
function OS(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = bu(e));
  for (var a = this._groups, o = a.length, r = new Array(o), s = 0; s < o; ++s)
    for (var i = a[s], u = i.length, c = r[s] = new Array(u), d, f, p = 0; p < u; ++p)
      (d = i[p]) && (f = e.call(d, d.__data__, p, i)) && ("__data__" in d && (f.__data__ = d.__data__), c[p] = f, Vs(c[p], t, n, p, c, Ct(d, n)));
  return new on(r, this._parents, t, n);
}
function ES(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ch(e));
  for (var a = this._groups, o = a.length, r = [], s = [], i = 0; i < o; ++i)
    for (var u = a[i], c = u.length, d, f = 0; f < c; ++f)
      if (d = u[f]) {
        for (var p = e.call(d, d.__data__, f, u), h, m = Ct(d, n), v = 0, b = p.length; v < b; ++v)
          (h = p[v]) && Vs(h, t, n, v, p, m);
        r.push(p), s.push(d);
      }
  return new on(r, s, t, n);
}
var PS = Ho.prototype.constructor;
function RS() {
  return new PS(this._groups, this._parents);
}
function IS(e, t) {
  var n, a, o;
  return function() {
    var r = xa(this, e), s = (this.style.removeProperty(e), xa(this, e));
    return r === s ? null : r === n && s === a ? o : o = t(n = r, a = s);
  };
}
function ov(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function FS(e, t, n) {
  var a, o = n + "", r;
  return function() {
    var s = xa(this, e);
    return s === o ? null : s === a ? r : r = t(a = s, n);
  };
}
function VS(e, t, n) {
  var a, o, r;
  return function() {
    var s = xa(this, e), i = n(this), u = i + "";
    return i == null && (u = i = (this.style.removeProperty(e), xa(this, e))), s === u ? null : s === a && u === o ? r : (o = u, r = t(a = s, i));
  };
}
function NS(e, t) {
  var n, a, o, r = "style." + t, s = "end." + r, i;
  return function() {
    var u = Ut(this, e), c = u.on, d = u.value[r] == null ? i || (i = ov(t)) : void 0;
    (c !== n || o !== d) && (a = (n = c).copy()).on(s, o = d), u.on = a;
  };
}
function LS(e, t, n) {
  var a = (e += "") == "transform" ? Z2 : av;
  return t == null ? this.styleTween(e, IS(e, a)).on("end.style." + e, ov(e)) : typeof t == "function" ? this.styleTween(e, VS(e, a, Ru(this, "style." + e, t))).each(NS(this._id, e)) : this.styleTween(e, FS(e, a, t), n).on("end.style." + e, null);
}
function zS(e, t, n) {
  return function(a) {
    this.style.setProperty(e, t.call(this, a), n);
  };
}
function US(e, t, n) {
  var a, o;
  function r() {
    var s = t.apply(this, arguments);
    return s !== o && (a = (o = s) && zS(e, s, n)), a;
  }
  return r._value = t, r;
}
function HS(e, t, n) {
  var a = "style." + (e += "");
  if (arguments.length < 2) return (a = this.tween(a)) && a._value;
  if (t == null) return this.tween(a, null);
  if (typeof t != "function") throw new Error();
  return this.tween(a, US(e, t, n ?? ""));
}
function WS(e) {
  return function() {
    this.textContent = e;
  };
}
function YS(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function KS(e) {
  return this.tween("text", typeof e == "function" ? YS(Ru(this, "text", e)) : WS(e == null ? "" : e + ""));
}
function jS(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function GS(e) {
  var t, n;
  function a() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && jS(o)), t;
  }
  return a._value = e, a;
}
function qS(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, GS(e));
}
function XS() {
  for (var e = this._name, t = this._id, n = rv(), a = this._groups, o = a.length, r = 0; r < o; ++r)
    for (var s = a[r], i = s.length, u, c = 0; c < i; ++c)
      if (u = s[c]) {
        var d = Ct(u, t);
        Vs(u, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new on(a, this._parents, e, n);
}
function ZS() {
  var e, t, n = this, a = n._id, o = n.size();
  return new Promise(function(r, s) {
    var i = { value: s }, u = { value: function() {
      --o === 0 && r();
    } };
    n.each(function() {
      var c = Ut(this, a), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(i), t._.interrupt.push(i), t._.end.push(u)), c.on = t;
    }), o === 0 && r();
  });
}
var JS = 0;
function on(e, t, n, a) {
  this._groups = e, this._parents = t, this._name = n, this._id = a;
}
function rv() {
  return ++JS;
}
var Yt = Ho.prototype;
on.prototype = {
  constructor: on,
  select: OS,
  selectAll: ES,
  selectChild: Yt.selectChild,
  selectChildren: Yt.selectChildren,
  filter: $S,
  merge: SS,
  selection: RS,
  transition: XS,
  call: Yt.call,
  nodes: Yt.nodes,
  node: Yt.node,
  size: Yt.size,
  empty: Yt.empty,
  each: Yt.each,
  on: MS,
  attr: uS,
  attrTween: hS,
  style: LS,
  styleTween: HS,
  text: KS,
  textTween: qS,
  remove: AS,
  tween: nS,
  delay: gS,
  duration: _S,
  ease: xS,
  easeVarying: kS,
  end: ZS,
  [Symbol.iterator]: Yt[Symbol.iterator]
};
const gd = (e) => +e;
function QS(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var eT = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: QS
};
function tT(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function nT(e) {
  var t, n;
  e instanceof on ? (t = e._id, e = e._name) : (t = rv(), (n = eT).time = Bu(), e = e == null ? null : e + "");
  for (var a = this._groups, o = a.length, r = 0; r < o; ++r)
    for (var s = a[r], i = s.length, u, c = 0; c < i; ++c)
      (u = s[c]) && Vs(u, e, t, c, s, n || tT(u, t));
  return new on(a, this._parents, e, t);
}
Ho.prototype.interrupt = V2;
Ho.prototype.transition = nT;
function Zt(e, t, n) {
  if (e.nodes().forEach((a) => Ou(a)), t) {
    const a = e.transition().duration(t);
    return n && a.ease(n), a;
  } else
    return e;
}
class Iu {
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
var we;
(function(e) {
  e.X = "x", e.Y = "y";
})(we || (we = {}));
function kt(e, t) {
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
function sv(e, t) {
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
const yd = Symbol("implicit");
function Fu() {
  var e = new Pc(), t = [], n = [], a = yd;
  function o(r) {
    let s = e.get(r);
    if (s === void 0) {
      if (a !== yd) return a;
      e.set(r, s = t.push(r) - 1);
    }
    return n[s % n.length];
  }
  return o.domain = function(r) {
    if (!arguments.length) return t.slice();
    t = [], e = new Pc();
    for (const s of r)
      e.has(s) || e.set(s, t.push(s) - 1);
    return o;
  }, o.range = function(r) {
    return arguments.length ? (n = Array.from(r), o) : n.slice();
  }, o.unknown = function(r) {
    return arguments.length ? (a = r, o) : a;
  }, o.copy = function() {
    return Fu(t, n).unknown(a);
  }, kt.apply(o, arguments), o;
}
function Vu() {
  var e = Fu().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, r, s, i = !1, u = 0, c = 0, d = 0.5;
  delete e.unknown;
  function f() {
    var p = t().length, h = o < a, m = h ? o : a, v = h ? a : o;
    r = (v - m) / Math.max(1, p - u + c * 2), i && (r = Math.floor(r)), m += (v - m - r * (p - u)) * d, s = r * (1 - u), i && (m = Math.round(m), s = Math.round(s));
    var b = zk(p).map(function(C) {
      return m + r * C;
    });
    return n(h ? b.reverse() : b);
  }
  return e.domain = function(p) {
    return arguments.length ? (t(p), f()) : t();
  }, e.range = function(p) {
    return arguments.length ? ([a, o] = p, a = +a, o = +o, f()) : [a, o];
  }, e.rangeRound = function(p) {
    return [a, o] = p, a = +a, o = +o, i = !0, f();
  }, e.bandwidth = function() {
    return s;
  }, e.step = function() {
    return r;
  }, e.round = function(p) {
    return arguments.length ? (i = !!p, f()) : i;
  }, e.padding = function(p) {
    return arguments.length ? (u = Math.min(1, c = +p), f()) : u;
  }, e.paddingInner = function(p) {
    return arguments.length ? (u = Math.min(1, p), f()) : u;
  }, e.paddingOuter = function(p) {
    return arguments.length ? (c = +p, f()) : c;
  }, e.align = function(p) {
    return arguments.length ? (d = Math.max(0, Math.min(1, p)), f()) : d;
  }, e.copy = function() {
    return Vu(t(), [a, o]).round(i).paddingInner(u).paddingOuter(c).align(d);
  }, kt.apply(f(), arguments);
}
function iv(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return iv(t());
  }, e;
}
function aT() {
  return iv(Vu.apply(null, arguments).paddingInner(1));
}
function oT(e) {
  return function() {
    return e;
  };
}
function ll(e) {
  return +e;
}
var bd = [0, 1];
function qe(e) {
  return e;
}
function ul(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : oT(isNaN(t) ? NaN : 0.5);
}
function rT(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function sT(e, t, n) {
  var a = e[0], o = e[1], r = t[0], s = t[1];
  return o < a ? (a = ul(o, a), r = n(s, r)) : (a = ul(a, o), r = n(r, s)), function(i) {
    return r(a(i));
  };
}
function iT(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), r = new Array(a), s = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++s < a; )
    o[s] = ul(e[s], e[s + 1]), r[s] = n(t[s], t[s + 1]);
  return function(i) {
    var u = Os(e, i, 1, a) - 1;
    return r[u](o[u](i));
  };
}
function Ko(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ns() {
  var e = bd, t = bd, n = Ya, a, o, r, s = qe, i, u, c;
  function d() {
    var p = Math.min(e.length, t.length);
    return s !== qe && (s = rT(e[0], e[p - 1])), i = p > 2 ? iT : sT, u = c = null, f;
  }
  function f(p) {
    return p == null || isNaN(p = +p) ? r : (u || (u = i(e.map(a), t, n)))(a(s(p)));
  }
  return f.invert = function(p) {
    return s(o((c || (c = i(t, e.map(a), ht)))(p)));
  }, f.domain = function(p) {
    return arguments.length ? (e = Array.from(p, ll), d()) : e.slice();
  }, f.range = function(p) {
    return arguments.length ? (t = Array.from(p), d()) : t.slice();
  }, f.rangeRound = function(p) {
    return t = Array.from(p), n = Pu, d();
  }, f.clamp = function(p) {
    return arguments.length ? (s = p ? !0 : qe, d()) : s !== qe;
  }, f.interpolate = function(p) {
    return arguments.length ? (n = p, d()) : n;
  }, f.unknown = function(p) {
    return arguments.length ? (r = p, f) : r;
  }, function(p, h) {
    return a = p, o = h, d();
  };
}
function lv() {
  return Ns()(qe, qe);
}
function lT(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function es(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function Sa(e) {
  return e = es(Math.abs(e)), e ? e[1] : NaN;
}
function uT(e, t) {
  return function(n, a) {
    for (var o = n.length, r = [], s = 0, i = e[0], u = 0; o > 0 && i > 0 && (u + i + 1 > a && (i = Math.max(1, a - u)), r.push(n.substring(o -= i, o + i)), !((u += i + 1) > a)); )
      i = e[s = (s + 1) % e.length];
    return r.reverse().join(t);
  };
}
function cT(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var dT = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Bo(e) {
  if (!(t = dT.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Nu({
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
Bo.prototype = Nu.prototype;
function Nu(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Nu.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function fT(e) {
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
var uv;
function pT(e, t) {
  var n = es(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], r = o - (uv = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, s = a.length;
  return r === s ? a : r > s ? a + new Array(r - s + 1).join("0") : r > 0 ? a.slice(0, r) + "." + a.slice(r) : "0." + new Array(1 - r).join("0") + es(e, Math.max(0, t + r - 1))[0];
}
function _d(e, t) {
  var n = es(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const wd = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: lT,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => _d(e * 100, t),
  r: _d,
  s: pT,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function xd(e) {
  return e;
}
var Cd = Array.prototype.map, kd = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function hT(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? xd : uT(Cd.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", r = e.numerals === void 0 ? xd : cT(Cd.call(e.numerals, String)), s = e.percent === void 0 ? "%" : e.percent + "", i = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = Bo(f);
    var p = f.fill, h = f.align, m = f.sign, v = f.symbol, b = f.zero, C = f.width, $ = f.comma, k = f.precision, D = f.trim, T = f.type;
    T === "n" ? ($ = !0, T = "g") : wd[T] || (k === void 0 && (k = 12), D = !0, T = "g"), (b || p === "0" && h === "=") && (b = !0, p = "0", h = "=");
    var A = v === "$" ? n : v === "#" && /[boxX]/.test(T) ? "0" + T.toLowerCase() : "", M = v === "$" ? a : /[%p]/.test(T) ? s : "", N = wd[T], V = /[defgprs%]/.test(T);
    k = k === void 0 ? 6 : /[gprs]/.test(T) ? Math.max(1, Math.min(21, k)) : Math.max(0, Math.min(20, k));
    function B(E) {
      var I = A, Y = M, q, W, Q;
      if (T === "c")
        Y = N(E) + Y, E = "";
      else {
        E = +E;
        var ie = E < 0 || 1 / E < 0;
        if (E = isNaN(E) ? u : N(Math.abs(E), k), D && (E = fT(E)), ie && +E == 0 && m !== "+" && (ie = !1), I = (ie ? m === "(" ? m : i : m === "-" || m === "(" ? "" : m) + I, Y = (T === "s" ? kd[8 + uv / 3] : "") + Y + (ie && m === "(" ? ")" : ""), V) {
          for (q = -1, W = E.length; ++q < W; )
            if (Q = E.charCodeAt(q), 48 > Q || Q > 57) {
              Y = (Q === 46 ? o + E.slice(q + 1) : E.slice(q)) + Y, E = E.slice(0, q);
              break;
            }
        }
      }
      $ && !b && (E = t(E, 1 / 0));
      var me = I.length + E.length + Y.length, ve = me < C ? new Array(C - me + 1).join(p) : "";
      switch ($ && b && (E = t(ve + E, ve.length ? C - Y.length : 1 / 0), ve = ""), h) {
        case "<":
          E = I + E + Y + ve;
          break;
        case "=":
          E = I + ve + E + Y;
          break;
        case "^":
          E = ve.slice(0, me = ve.length >> 1) + I + E + Y + ve.slice(me);
          break;
        default:
          E = ve + I + E + Y;
          break;
      }
      return r(E);
    }
    return B.toString = function() {
      return f + "";
    }, B;
  }
  function d(f, p) {
    var h = c((f = Bo(f), f.type = "f", f)), m = Math.max(-8, Math.min(8, Math.floor(Sa(p) / 3))) * 3, v = Math.pow(10, -m), b = kd[8 + m / 3];
    return function(C) {
      return h(v * C) + b;
    };
  }
  return {
    format: c,
    formatPrefix: d
  };
}
var fr, Lu, cv;
vT({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function vT(e) {
  return fr = hT(e), Lu = fr.format, cv = fr.formatPrefix, fr;
}
function mT(e) {
  return Math.max(0, -Sa(Math.abs(e)));
}
function gT(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Sa(t) / 3))) * 3 - Sa(Math.abs(e)));
}
function yT(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Sa(t) - Sa(e)) + 1;
}
function bT(e, t, n, a) {
  var o = Gi(e, t, n), r;
  switch (a = Bo(a ?? ",f"), a.type) {
    case "s": {
      var s = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(r = gT(o, s)) && (a.precision = r), cv(a, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(r = yT(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = r - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(r = mT(o)) && (a.precision = r - (a.type === "%") * 2);
      break;
    }
  }
  return Lu(a);
}
function ea(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return Ki(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return bT(o[0], o[o.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), o = 0, r = a.length - 1, s = a[o], i = a[r], u, c, d = 10;
    for (i < s && (c = s, s = i, i = c, c = o, o = r, r = c); d-- > 0; ) {
      if (c = ji(s, i, n), c === u)
        return a[o] = s, a[r] = i, t(a);
      if (c > 0)
        s = Math.floor(s / c) * c, i = Math.ceil(i / c) * c;
      else if (c < 0)
        s = Math.ceil(s * c) / c, i = Math.floor(i * c) / c;
      else
        break;
      u = c;
    }
    return e;
  }, e;
}
function dv() {
  var e = lv();
  return e.copy = function() {
    return Ko(e, dv());
  }, kt.apply(e, arguments), ea(e);
}
function fv(e) {
  var t;
  function n(a) {
    return a == null || isNaN(a = +a) ? t : a;
  }
  return n.invert = n, n.domain = n.range = function(a) {
    return arguments.length ? (e = Array.from(a, ll), n) : e.slice();
  }, n.unknown = function(a) {
    return arguments.length ? (t = a, n) : t;
  }, n.copy = function() {
    return fv(e).unknown(t);
  }, e = arguments.length ? Array.from(e, ll) : [0, 1], ea(n);
}
function pv(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, o = e[n], r = e[a], s;
  return r < o && (s = n, n = a, a = s, s = o, o = r, r = s), e[n] = t.floor(o), e[a] = t.ceil(r), e;
}
function $d(e) {
  return Math.log(e);
}
function Sd(e) {
  return Math.exp(e);
}
function _T(e) {
  return -Math.log(-e);
}
function wT(e) {
  return -Math.exp(-e);
}
function xT(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function CT(e) {
  return e === 10 ? xT : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function kT(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Td(e) {
  return (t, n) => -e(-t, n);
}
function $T(e) {
  const t = e($d, Sd), n = t.domain;
  let a = 10, o, r;
  function s() {
    return o = kT(a), r = CT(a), n()[0] < 0 ? (o = Td(o), r = Td(r), e(_T, wT)) : e($d, Sd), t;
  }
  return t.base = function(i) {
    return arguments.length ? (a = +i, s()) : a;
  }, t.domain = function(i) {
    return arguments.length ? (n(i), s()) : n();
  }, t.ticks = (i) => {
    const u = n();
    let c = u[0], d = u[u.length - 1];
    const f = d < c;
    f && ([c, d] = [d, c]);
    let p = o(c), h = o(d), m, v;
    const b = i == null ? 10 : +i;
    let C = [];
    if (!(a % 1) && h - p < b) {
      if (p = Math.floor(p), h = Math.ceil(h), c > 0) {
        for (; p <= h; ++p)
          for (m = 1; m < a; ++m)
            if (v = p < 0 ? m / r(-p) : m * r(p), !(v < c)) {
              if (v > d) break;
              C.push(v);
            }
      } else for (; p <= h; ++p)
        for (m = a - 1; m >= 1; --m)
          if (v = p > 0 ? m / r(-p) : m * r(p), !(v < c)) {
            if (v > d) break;
            C.push(v);
          }
      C.length * 2 < b && (C = Ki(c, d, b));
    } else
      C = Ki(p, h, Math.min(h - p, b)).map(r);
    return f ? C.reverse() : C;
  }, t.tickFormat = (i, u) => {
    if (i == null && (i = 10), u == null && (u = a === 10 ? "s" : ","), typeof u != "function" && (!(a % 1) && (u = Bo(u)).precision == null && (u.trim = !0), u = Lu(u)), i === 1 / 0) return u;
    const c = Math.max(1, a * i / t.ticks().length);
    return (d) => {
      let f = d / r(Math.round(o(d)));
      return f * a < a - 0.5 && (f *= a), f <= c ? u(d) : "";
    };
  }, t.nice = () => n(pv(n(), {
    floor: (i) => r(Math.floor(o(i))),
    ceil: (i) => r(Math.ceil(o(i)))
  })), t;
}
function hv() {
  const e = $T(Ns()).domain([1, 10]);
  return e.copy = () => Ko(e, hv()).base(e.base()), kt.apply(e, arguments), e;
}
function Dd(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Md(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function ST(e) {
  var t = 1, n = e(Dd(t), Md(t));
  return n.constant = function(a) {
    return arguments.length ? e(Dd(t = +a), Md(t)) : t;
  }, ea(n);
}
function vv() {
  var e = ST(Ns());
  return e.copy = function() {
    return Ko(e, vv()).constant(e.constant());
  }, kt.apply(e, arguments);
}
function Bd(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function TT(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function DT(e) {
  return e < 0 ? -e * e : e * e;
}
function MT(e) {
  var t = e(qe, qe), n = 1;
  function a() {
    return n === 1 ? e(qe, qe) : n === 0.5 ? e(TT, DT) : e(Bd(n), Bd(1 / n));
  }
  return t.exponent = function(o) {
    return arguments.length ? (n = +o, a()) : n;
  }, ea(t);
}
function zu() {
  var e = MT(Ns());
  return e.copy = function() {
    return Ko(e, zu()).exponent(e.exponent());
  }, kt.apply(e, arguments), e;
}
function BT() {
  return zu.apply(null, arguments).exponent(0.5);
}
function mv() {
  var e = [], t = [], n = [], a;
  function o() {
    var s = 0, i = Math.max(1, t.length);
    for (n = new Array(i - 1); ++s < i; ) n[s - 1] = Vk(e, s / i);
    return r;
  }
  function r(s) {
    return s == null || isNaN(s = +s) ? a : t[Os(n, s)];
  }
  return r.invertExtent = function(s) {
    var i = t.indexOf(s);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? n[i - 1] : e[0],
      i < n.length ? n[i] : e[e.length - 1]
    ];
  }, r.domain = function(s) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of s) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(fo), o();
  }, r.range = function(s) {
    return arguments.length ? (t = Array.from(s), o()) : t.slice();
  }, r.unknown = function(s) {
    return arguments.length ? (a = s, r) : a;
  }, r.quantiles = function() {
    return n.slice();
  }, r.copy = function() {
    return mv().domain(e).range(t).unknown(a);
  }, kt.apply(r, arguments);
}
function gv() {
  var e = 0, t = 1, n = 1, a = [0.5], o = [0, 1], r;
  function s(u) {
    return u != null && u <= u ? o[Os(a, u, 0, n)] : r;
  }
  function i() {
    var u = -1;
    for (a = new Array(n); ++u < n; ) a[u] = ((u + 1) * t - (u - n) * e) / (n + 1);
    return s;
  }
  return s.domain = function(u) {
    return arguments.length ? ([e, t] = u, e = +e, t = +t, i()) : [e, t];
  }, s.range = function(u) {
    return arguments.length ? (n = (o = Array.from(u)).length - 1, i()) : o.slice();
  }, s.invertExtent = function(u) {
    var c = o.indexOf(u);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, a[0]] : c >= n ? [a[n - 1], t] : [a[c - 1], a[c]];
  }, s.unknown = function(u) {
    return arguments.length && (r = u), s;
  }, s.thresholds = function() {
    return a.slice();
  }, s.copy = function() {
    return gv().domain([e, t]).range(o).unknown(r);
  }, kt.apply(ea(s), arguments);
}
function yv() {
  var e = [0.5], t = [0, 1], n, a = 1;
  function o(r) {
    return r != null && r <= r ? t[Os(e, r, 0, a)] : n;
  }
  return o.domain = function(r) {
    return arguments.length ? (e = Array.from(r), a = Math.min(e.length, t.length - 1), o) : e.slice();
  }, o.range = function(r) {
    return arguments.length ? (t = Array.from(r), a = Math.min(e.length, t.length - 1), o) : t.slice();
  }, o.invertExtent = function(r) {
    var s = t.indexOf(r);
    return [e[s - 1], e[s]];
  }, o.unknown = function(r) {
    return arguments.length ? (n = r, o) : n;
  }, o.copy = function() {
    return yv().domain(e).range(t).unknown(n);
  }, kt.apply(o, arguments);
}
const bi = /* @__PURE__ */ new Date(), _i = /* @__PURE__ */ new Date();
function Re(e, t, n, a) {
  function o(r) {
    return e(r = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+r)), r;
  }
  return o.floor = (r) => (e(r = /* @__PURE__ */ new Date(+r)), r), o.ceil = (r) => (e(r = new Date(r - 1)), t(r, 1), e(r), r), o.round = (r) => {
    const s = o(r), i = o.ceil(r);
    return r - s < i - r ? s : i;
  }, o.offset = (r, s) => (t(r = /* @__PURE__ */ new Date(+r), s == null ? 1 : Math.floor(s)), r), o.range = (r, s, i) => {
    const u = [];
    if (r = o.ceil(r), i = i == null ? 1 : Math.floor(i), !(r < s) || !(i > 0)) return u;
    let c;
    do
      u.push(c = /* @__PURE__ */ new Date(+r)), t(r, i), e(r);
    while (c < r && r < s);
    return u;
  }, o.filter = (r) => Re((s) => {
    if (s >= s) for (; e(s), !r(s); ) s.setTime(s - 1);
  }, (s, i) => {
    if (s >= s)
      if (i < 0) for (; ++i <= 0; )
        for (; t(s, -1), !r(s); )
          ;
      else for (; --i >= 0; )
        for (; t(s, 1), !r(s); )
          ;
  }), n && (o.count = (r, s) => (bi.setTime(+r), _i.setTime(+s), e(bi), e(_i), Math.floor(n(bi, _i))), o.every = (r) => (r = Math.floor(r), !isFinite(r) || !(r > 0) ? null : r > 1 ? o.filter(a ? (s) => a(s) % r === 0 : (s) => o.count(0, s) % r === 0) : o)), o;
}
const ts = Re(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ts.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Re((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : ts);
ts.range;
const Jt = 1e3, ct = Jt * 60, Qt = ct * 60, rn = Qt * 24, Uu = rn * 7, Ad = rn * 30, wi = rn * 365, En = Re((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Jt);
}, (e, t) => (t - e) / Jt, (e) => e.getUTCSeconds());
En.range;
const Hu = Re((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Jt);
}, (e, t) => {
  e.setTime(+e + t * ct);
}, (e, t) => (t - e) / ct, (e) => e.getMinutes());
Hu.range;
const Wu = Re((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ct);
}, (e, t) => (t - e) / ct, (e) => e.getUTCMinutes());
Wu.range;
const Yu = Re((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Jt - e.getMinutes() * ct);
}, (e, t) => {
  e.setTime(+e + t * Qt);
}, (e, t) => (t - e) / Qt, (e) => e.getHours());
Yu.range;
const Ku = Re((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Qt);
}, (e, t) => (t - e) / Qt, (e) => e.getUTCHours());
Ku.range;
const jo = Re(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ct) / rn,
  (e) => e.getDate() - 1
);
jo.range;
const Ls = Re((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / rn, (e) => e.getUTCDate() - 1);
Ls.range;
const bv = Re((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / rn, (e) => Math.floor(e / rn));
bv.range;
function ta(e) {
  return Re((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ct) / Uu);
}
const zs = ta(0), ns = ta(1), AT = ta(2), OT = ta(3), Ta = ta(4), ET = ta(5), PT = ta(6);
zs.range;
ns.range;
AT.range;
OT.range;
Ta.range;
ET.range;
PT.range;
function na(e) {
  return Re((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Uu);
}
const Us = na(0), as = na(1), RT = na(2), IT = na(3), Da = na(4), FT = na(5), VT = na(6);
Us.range;
as.range;
RT.range;
IT.range;
Da.range;
FT.range;
VT.range;
const ju = Re((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
ju.range;
const Gu = Re((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Gu.range;
const sn = Re((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
sn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Re((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
sn.range;
const ln = Re((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
ln.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Re((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
ln.range;
function _v(e, t, n, a, o, r) {
  const s = [
    [En, 1, Jt],
    [En, 5, 5 * Jt],
    [En, 15, 15 * Jt],
    [En, 30, 30 * Jt],
    [r, 1, ct],
    [r, 5, 5 * ct],
    [r, 15, 15 * ct],
    [r, 30, 30 * ct],
    [o, 1, Qt],
    [o, 3, 3 * Qt],
    [o, 6, 6 * Qt],
    [o, 12, 12 * Qt],
    [a, 1, rn],
    [a, 2, 2 * rn],
    [n, 1, Uu],
    [t, 1, Ad],
    [t, 3, 3 * Ad],
    [e, 1, wi]
  ];
  function i(c, d, f) {
    const p = d < c;
    p && ([c, d] = [d, c]);
    const h = f && typeof f.range == "function" ? f : u(c, d, f), m = h ? h.range(c, +d + 1) : [];
    return p ? m.reverse() : m;
  }
  function u(c, d, f) {
    const p = Math.abs(d - c) / f, h = As(([, , b]) => b).right(s, p);
    if (h === s.length) return e.every(Gi(c / wi, d / wi, f));
    if (h === 0) return ts.every(Math.max(Gi(c, d, f), 1));
    const [m, v] = s[p / s[h - 1][2] < s[h][2] / p ? h - 1 : h];
    return m.every(v);
  }
  return [i, u];
}
const [NT, LT] = _v(ln, Gu, Us, bv, Ku, Wu), [zT, UT] = _v(sn, ju, zs, jo, Yu, Hu);
function xi(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ci(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function to(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function HT(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, r = e.days, s = e.shortDays, i = e.months, u = e.shortMonths, c = no(o), d = ao(o), f = no(r), p = ao(r), h = no(s), m = ao(s), v = no(i), b = ao(i), C = no(u), $ = ao(u), k = {
    a: ie,
    A: me,
    b: ve,
    B: ze,
    c: null,
    d: Fd,
    e: Fd,
    f: fD,
    g: xD,
    G: kD,
    H: uD,
    I: cD,
    j: dD,
    L: wv,
    m: pD,
    M: hD,
    p: Be,
    q: $n,
    Q: Ld,
    s: zd,
    S: vD,
    u: mD,
    U: gD,
    V: yD,
    w: bD,
    W: _D,
    x: null,
    X: null,
    y: wD,
    Y: CD,
    Z: $D,
    "%": Nd
  }, D = {
    a: Ht,
    A: Sn,
    b: St,
    B: Tn,
    c: null,
    d: Vd,
    e: Vd,
    f: MD,
    g: ND,
    G: zD,
    H: SD,
    I: TD,
    j: DD,
    L: Cv,
    m: BD,
    M: AD,
    p: Ke,
    q: We,
    Q: Ld,
    s: zd,
    S: OD,
    u: ED,
    U: PD,
    V: RD,
    w: ID,
    W: FD,
    x: null,
    X: null,
    y: VD,
    Y: LD,
    Z: UD,
    "%": Nd
  }, T = {
    a: B,
    A: E,
    b: I,
    B: Y,
    c: q,
    d: Rd,
    e: Rd,
    f: rD,
    g: Pd,
    G: Ed,
    H: Id,
    I: Id,
    j: tD,
    L: oD,
    m: eD,
    M: nD,
    p: V,
    q: QT,
    Q: iD,
    s: lD,
    S: aD,
    u: GT,
    U: qT,
    V: XT,
    w: jT,
    W: ZT,
    x: W,
    X: Q,
    y: Pd,
    Y: Ed,
    Z: JT,
    "%": sD
  };
  k.x = A(n, k), k.X = A(a, k), k.c = A(t, k), D.x = A(n, D), D.X = A(a, D), D.c = A(t, D);
  function A(G, X) {
    return function(ae) {
      var U = [], Ae = -1, ke = 0, Ye = G.length, fe, Ue, je;
      for (ae instanceof Date || (ae = /* @__PURE__ */ new Date(+ae)); ++Ae < Ye; )
        G.charCodeAt(Ae) === 37 && (U.push(G.slice(ke, Ae)), (Ue = Od[fe = G.charAt(++Ae)]) != null ? fe = G.charAt(++Ae) : Ue = fe === "e" ? " " : "0", (je = X[fe]) && (fe = je(ae, Ue)), U.push(fe), ke = Ae + 1);
      return U.push(G.slice(ke, Ae)), U.join("");
    };
  }
  function M(G, X) {
    return function(ae) {
      var U = to(1900, void 0, 1), Ae = N(U, G, ae += "", 0), ke, Ye;
      if (Ae != ae.length) return null;
      if ("Q" in U) return new Date(U.Q);
      if ("s" in U) return new Date(U.s * 1e3 + ("L" in U ? U.L : 0));
      if (X && !("Z" in U) && (U.Z = 0), "p" in U && (U.H = U.H % 12 + U.p * 12), U.m === void 0 && (U.m = "q" in U ? U.q : 0), "V" in U) {
        if (U.V < 1 || U.V > 53) return null;
        "w" in U || (U.w = 1), "Z" in U ? (ke = Ci(to(U.y, 0, 1)), Ye = ke.getUTCDay(), ke = Ye > 4 || Ye === 0 ? as.ceil(ke) : as(ke), ke = Ls.offset(ke, (U.V - 1) * 7), U.y = ke.getUTCFullYear(), U.m = ke.getUTCMonth(), U.d = ke.getUTCDate() + (U.w + 6) % 7) : (ke = xi(to(U.y, 0, 1)), Ye = ke.getDay(), ke = Ye > 4 || Ye === 0 ? ns.ceil(ke) : ns(ke), ke = jo.offset(ke, (U.V - 1) * 7), U.y = ke.getFullYear(), U.m = ke.getMonth(), U.d = ke.getDate() + (U.w + 6) % 7);
      } else ("W" in U || "U" in U) && ("w" in U || (U.w = "u" in U ? U.u % 7 : "W" in U ? 1 : 0), Ye = "Z" in U ? Ci(to(U.y, 0, 1)).getUTCDay() : xi(to(U.y, 0, 1)).getDay(), U.m = 0, U.d = "W" in U ? (U.w + 6) % 7 + U.W * 7 - (Ye + 5) % 7 : U.w + U.U * 7 - (Ye + 6) % 7);
      return "Z" in U ? (U.H += U.Z / 100 | 0, U.M += U.Z % 100, Ci(U)) : xi(U);
    };
  }
  function N(G, X, ae, U) {
    for (var Ae = 0, ke = X.length, Ye = ae.length, fe, Ue; Ae < ke; ) {
      if (U >= Ye) return -1;
      if (fe = X.charCodeAt(Ae++), fe === 37) {
        if (fe = X.charAt(Ae++), Ue = T[fe in Od ? X.charAt(Ae++) : fe], !Ue || (U = Ue(G, ae, U)) < 0) return -1;
      } else if (fe != ae.charCodeAt(U++))
        return -1;
    }
    return U;
  }
  function V(G, X, ae) {
    var U = c.exec(X.slice(ae));
    return U ? (G.p = d.get(U[0].toLowerCase()), ae + U[0].length) : -1;
  }
  function B(G, X, ae) {
    var U = h.exec(X.slice(ae));
    return U ? (G.w = m.get(U[0].toLowerCase()), ae + U[0].length) : -1;
  }
  function E(G, X, ae) {
    var U = f.exec(X.slice(ae));
    return U ? (G.w = p.get(U[0].toLowerCase()), ae + U[0].length) : -1;
  }
  function I(G, X, ae) {
    var U = C.exec(X.slice(ae));
    return U ? (G.m = $.get(U[0].toLowerCase()), ae + U[0].length) : -1;
  }
  function Y(G, X, ae) {
    var U = v.exec(X.slice(ae));
    return U ? (G.m = b.get(U[0].toLowerCase()), ae + U[0].length) : -1;
  }
  function q(G, X, ae) {
    return N(G, t, X, ae);
  }
  function W(G, X, ae) {
    return N(G, n, X, ae);
  }
  function Q(G, X, ae) {
    return N(G, a, X, ae);
  }
  function ie(G) {
    return s[G.getDay()];
  }
  function me(G) {
    return r[G.getDay()];
  }
  function ve(G) {
    return u[G.getMonth()];
  }
  function ze(G) {
    return i[G.getMonth()];
  }
  function Be(G) {
    return o[+(G.getHours() >= 12)];
  }
  function $n(G) {
    return 1 + ~~(G.getMonth() / 3);
  }
  function Ht(G) {
    return s[G.getUTCDay()];
  }
  function Sn(G) {
    return r[G.getUTCDay()];
  }
  function St(G) {
    return u[G.getUTCMonth()];
  }
  function Tn(G) {
    return i[G.getUTCMonth()];
  }
  function Ke(G) {
    return o[+(G.getUTCHours() >= 12)];
  }
  function We(G) {
    return 1 + ~~(G.getUTCMonth() / 3);
  }
  return {
    format: function(G) {
      var X = A(G += "", k);
      return X.toString = function() {
        return G;
      }, X;
    },
    parse: function(G) {
      var X = M(G += "", !1);
      return X.toString = function() {
        return G;
      }, X;
    },
    utcFormat: function(G) {
      var X = A(G += "", D);
      return X.toString = function() {
        return G;
      }, X;
    },
    utcParse: function(G) {
      var X = M(G += "", !0);
      return X.toString = function() {
        return G;
      }, X;
    }
  };
}
var Od = { "-": "", _: " ", 0: "0" }, Fe = /^\s*\d+/, WT = /^%/, YT = /[\\^$*+?|[\]().{}]/g;
function ge(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", r = o.length;
  return a + (r < n ? new Array(n - r + 1).join(t) + o : o);
}
function KT(e) {
  return e.replace(YT, "\\$&");
}
function no(e) {
  return new RegExp("^(?:" + e.map(KT).join("|") + ")", "i");
}
function ao(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function jT(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function GT(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function qT(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function XT(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function ZT(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Ed(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Pd(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function JT(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function QT(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function eD(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Rd(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function tD(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Id(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function nD(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function aD(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function oD(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function rD(e, t, n) {
  var a = Fe.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function sD(e, t, n) {
  var a = WT.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function iD(e, t, n) {
  var a = Fe.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function lD(e, t, n) {
  var a = Fe.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Fd(e, t) {
  return ge(e.getDate(), t, 2);
}
function uD(e, t) {
  return ge(e.getHours(), t, 2);
}
function cD(e, t) {
  return ge(e.getHours() % 12 || 12, t, 2);
}
function dD(e, t) {
  return ge(1 + jo.count(sn(e), e), t, 3);
}
function wv(e, t) {
  return ge(e.getMilliseconds(), t, 3);
}
function fD(e, t) {
  return wv(e, t) + "000";
}
function pD(e, t) {
  return ge(e.getMonth() + 1, t, 2);
}
function hD(e, t) {
  return ge(e.getMinutes(), t, 2);
}
function vD(e, t) {
  return ge(e.getSeconds(), t, 2);
}
function mD(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function gD(e, t) {
  return ge(zs.count(sn(e) - 1, e), t, 2);
}
function xv(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ta(e) : Ta.ceil(e);
}
function yD(e, t) {
  return e = xv(e), ge(Ta.count(sn(e), e) + (sn(e).getDay() === 4), t, 2);
}
function bD(e) {
  return e.getDay();
}
function _D(e, t) {
  return ge(ns.count(sn(e) - 1, e), t, 2);
}
function wD(e, t) {
  return ge(e.getFullYear() % 100, t, 2);
}
function xD(e, t) {
  return e = xv(e), ge(e.getFullYear() % 100, t, 2);
}
function CD(e, t) {
  return ge(e.getFullYear() % 1e4, t, 4);
}
function kD(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Ta(e) : Ta.ceil(e), ge(e.getFullYear() % 1e4, t, 4);
}
function $D(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ge(t / 60 | 0, "0", 2) + ge(t % 60, "0", 2);
}
function Vd(e, t) {
  return ge(e.getUTCDate(), t, 2);
}
function SD(e, t) {
  return ge(e.getUTCHours(), t, 2);
}
function TD(e, t) {
  return ge(e.getUTCHours() % 12 || 12, t, 2);
}
function DD(e, t) {
  return ge(1 + Ls.count(ln(e), e), t, 3);
}
function Cv(e, t) {
  return ge(e.getUTCMilliseconds(), t, 3);
}
function MD(e, t) {
  return Cv(e, t) + "000";
}
function BD(e, t) {
  return ge(e.getUTCMonth() + 1, t, 2);
}
function AD(e, t) {
  return ge(e.getUTCMinutes(), t, 2);
}
function OD(e, t) {
  return ge(e.getUTCSeconds(), t, 2);
}
function ED(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function PD(e, t) {
  return ge(Us.count(ln(e) - 1, e), t, 2);
}
function kv(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Da(e) : Da.ceil(e);
}
function RD(e, t) {
  return e = kv(e), ge(Da.count(ln(e), e) + (ln(e).getUTCDay() === 4), t, 2);
}
function ID(e) {
  return e.getUTCDay();
}
function FD(e, t) {
  return ge(as.count(ln(e) - 1, e), t, 2);
}
function VD(e, t) {
  return ge(e.getUTCFullYear() % 100, t, 2);
}
function ND(e, t) {
  return e = kv(e), ge(e.getUTCFullYear() % 100, t, 2);
}
function LD(e, t) {
  return ge(e.getUTCFullYear() % 1e4, t, 4);
}
function zD(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Da(e) : Da.ceil(e), ge(e.getUTCFullYear() % 1e4, t, 4);
}
function UD() {
  return "+0000";
}
function Nd() {
  return "%";
}
function Ld(e) {
  return +e;
}
function zd(e) {
  return Math.floor(+e / 1e3);
}
var ra, $v, Sv;
HD({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function HD(e) {
  return ra = HT(e), $v = ra.format, ra.parse, Sv = ra.utcFormat, ra.utcParse, ra;
}
function WD(e) {
  return new Date(e);
}
function YD(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function qu(e, t, n, a, o, r, s, i, u, c) {
  var d = lv(), f = d.invert, p = d.domain, h = c(".%L"), m = c(":%S"), v = c("%I:%M"), b = c("%I %p"), C = c("%a %d"), $ = c("%b %d"), k = c("%B"), D = c("%Y");
  function T(A) {
    return (u(A) < A ? h : i(A) < A ? m : s(A) < A ? v : r(A) < A ? b : a(A) < A ? o(A) < A ? C : $ : n(A) < A ? k : D)(A);
  }
  return d.invert = function(A) {
    return new Date(f(A));
  }, d.domain = function(A) {
    return arguments.length ? p(Array.from(A, YD)) : p().map(WD);
  }, d.ticks = function(A) {
    var M = p();
    return e(M[0], M[M.length - 1], A ?? 10);
  }, d.tickFormat = function(A, M) {
    return M == null ? T : c(M);
  }, d.nice = function(A) {
    var M = p();
    return (!A || typeof A.range != "function") && (A = t(M[0], M[M.length - 1], A ?? 10)), A ? p(pv(M, A)) : d;
  }, d.copy = function() {
    return Ko(d, qu(e, t, n, a, o, r, s, i, u, c));
  }, d;
}
function KD() {
  return kt.apply(qu(zT, UT, sn, ju, zs, jo, Yu, Hu, En, $v).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function jD() {
  return kt.apply(qu(NT, LT, ln, Gu, Us, Ls, Ku, Wu, En, Sv).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function GD() {
  var e = 0, t = 1, n, a, o, r, s = qe, i = !1, u;
  function c(f) {
    return f == null || isNaN(f = +f) ? u : s(o === 0 ? 0.5 : (f = (r(f) - n) * o, i ? Math.max(0, Math.min(1, f)) : f));
  }
  c.domain = function(f) {
    return arguments.length ? ([e, t] = f, n = r(e = +e), a = r(t = +t), o = n === a ? 0 : 1 / (a - n), c) : [e, t];
  }, c.clamp = function(f) {
    return arguments.length ? (i = !!f, c) : i;
  }, c.interpolator = function(f) {
    return arguments.length ? (s = f, c) : s;
  };
  function d(f) {
    return function(p) {
      var h, m;
      return arguments.length ? ([h, m] = p, s = f(h, m), c) : [s(0), s(1)];
    };
  }
  return c.range = d(Ya), c.rangeRound = d(Pu), c.unknown = function(f) {
    return arguments.length ? (u = f, c) : u;
  }, function(f) {
    return r = f, n = f(e), a = f(t), o = n === a ? 0 : 1 / (a - n), c;
  };
}
function Tv(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Dv() {
  var e = ea(GD()(qe));
  return e.copy = function() {
    return Tv(e, Dv());
  }, sv.apply(e, arguments);
}
function qD() {
  var e = 0, t = 0.5, n = 1, a = 1, o, r, s, i, u, c = qe, d, f = !1, p;
  function h(v) {
    return isNaN(v = +v) ? p : (v = 0.5 + ((v = +d(v)) - r) * (a * v < a * r ? i : u), c(f ? Math.max(0, Math.min(1, v)) : v));
  }
  h.domain = function(v) {
    return arguments.length ? ([e, t, n] = v, o = d(e = +e), r = d(t = +t), s = d(n = +n), i = o === r ? 0 : 0.5 / (r - o), u = r === s ? 0 : 0.5 / (s - r), a = r < o ? -1 : 1, h) : [e, t, n];
  }, h.clamp = function(v) {
    return arguments.length ? (f = !!v, h) : f;
  }, h.interpolator = function(v) {
    return arguments.length ? (c = v, h) : c;
  };
  function m(v) {
    return function(b) {
      var C, $, k;
      return arguments.length ? ([C, $, k] = b, c = Q2(v, [C, $, k]), h) : [c(0), c(0.5), c(1)];
    };
  }
  return h.range = m(Ya), h.rangeRound = m(Pu), h.unknown = function(v) {
    return arguments.length ? (p = v, h) : p;
  }, function(v) {
    return d = v, o = v(e), r = v(t), s = v(n), i = o === r ? 0 : 0.5 / (r - o), u = r === s ? 0 : 0.5 / (s - r), a = r < o ? -1 : 1, h;
  };
}
function Mv() {
  var e = ea(qD()(qe));
  return e.copy = function() {
    return Tv(e, Mv());
  }, sv.apply(e, arguments);
}
const Ud = {
  scaleLinear: dv,
  scalePow: zu,
  scaleSqrt: BT,
  scaleLog: hv,
  scaleSymlog: vv,
  scaleIdentity: fv,
  scaleTime: KD,
  scaleUtc: jD,
  scaleSequential: Dv,
  scaleDiverging: Mv,
  scaleQuantize: gv,
  scaleQuantile: mv,
  scaleThreshold: yv,
  scaleOrdinal: Fu,
  scaleBand: Vu,
  scalePoint: aT
};
var Me;
(function(e) {
  e.X = "x", e.Y = "y";
})(Me || (Me = {}));
var Vn;
(function(e) {
  e.West = "west", e.East = "east", e.North = "north", e.South = "south";
})(Vn || (Vn = {}));
const XD = Object.assign(Object.assign({}, Dh), { components: [], tooltip: void 0, crosshair: void 0, annotations: void 0, xAxis: void 0, yAxis: void 0, autoMargin: !0, xScale: void 0, xDomain: void 0, xDomainMinConstraint: void 0, xDomainMaxConstraint: void 0, xRange: void 0, yScale: void 0, yDomain: void 0, yDomainMinConstraint: void 0, yDomainMaxConstraint: void 0, yRange: void 0, yDirection: Vn.North, preventEmptyDomain: null, scaleByDomain: !1 });
class ZD extends Co {
  constructor(t, n, a) {
    var o, r;
    super(t), this._defaultConfig = XD, this.datamodel = new Iu(), this.config = this._defaultConfig, this._clipPathId = Uh(), this._axisMargin = { top: 0, bottom: 0, left: 0, right: 0 }, this._firstRender = !0, this._clipPath = this.svg.append("clipPath").attr("id", this._clipPathId), this._clipPath.append("rect");
    const s = "saturate", i = window.location.href.replace(window.location.hash, "");
    this.svg.attr("class", Ce`
      --highlight-filter-id: url(${i}#${s}); // defining a css variable
    `), this._svgDefs.append("filter").attr("id", s).attr("filterUnits", "objectBoundingBox").html('<feColorMatrix type="saturate" in="SourceGraphic" values="1.35"/>'), n && this.updateContainer(n, !0), a && this.setData(a, !0), (this.config.xAxis || this.config.yAxis || !((o = this.components) === null || o === void 0) && o.some((u) => u.datamodel.data)) && this.render(), (r = document.fonts) === null || r === void 0 || r.ready.then(() => {
      this._firstRender || this._renderAxes(0);
    });
  }
  get components() {
    return this.config.components;
  }
  // Overriding ContainerCore default get width method to work with axis auto margin
  get width() {
    const t = this._getMargin();
    return mn(this.containerWidth - t.left - t.right, 0, Number.POSITIVE_INFINITY);
  }
  // Overriding ContainerCore default get height method to work with axis auto margin
  get height() {
    const t = this._getMargin();
    return mn(this.containerHeight - t.top - t.bottom, 0, Number.POSITIVE_INFINITY);
  }
  setData(t, n) {
    var a, o, r, s;
    const { components: i, config: u } = this;
    t && (this.datamodel.data = t, i.forEach((c) => {
      c.setData(t);
    }), (a = u.crosshair) === null || a === void 0 || a.setData(t), (o = u.xAxis) === null || o === void 0 || o.setData(t), (r = u.yAxis) === null || r === void 0 || r.setData(t), (s = u.tooltip) === null || s === void 0 || s.hide(), n || this.render());
  }
  updateContainer(t, n) {
    super.updateContainer(t), this._removeAllChildren(), this.setData(this.datamodel.data, !0), t.xAxis && (this.config.xAxis.config.type = we.X, this.element.appendChild(t.xAxis.element)), t.yAxis && (this.config.yAxis.config.type = we.Y, this.element.appendChild(t.yAxis.element));
    for (const s of this.components)
      this.element.appendChild(s.element);
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
    const n = Za([...this.components, t.xAxis, t.yAxis, t.crosshair, t.annotations]);
    for (const a of n)
      a.setSize(this.width, this.height, this.containerWidth, this.containerHeight);
    this._updateScales(...this.components, t.xAxis, t.yAxis, t.crosshair);
  }
  _render(t) {
    var n, a, o, r, s;
    const { config: i } = this;
    super._render();
    const u = this._getMargin();
    for (const f of this.components)
      f.g.attr("transform", `translate(${u.left},${u.top})`).style("clip-path", f.clippable ? `url(#${this._clipPathId})` : null).style("-webkit-clip-path", f.clippable ? `url(#${this._clipPathId})` : null), f.render(t);
    this._renderAxes(this._firstRender ? 0 : t);
    const c = 2;
    this._clipPath.select("rect").attr("x", -c).attr("y", -c).attr("width", this.width + 2 * c).attr("height", this.height + 2 * c), (n = i.tooltip) === null || n === void 0 || n.update();
    const d = i.crosshair;
    if (d) {
      const f = this.components.filter((v) => !v.stacked).map((v) => v.config.y), p = this.components.filter((v) => v.stacked).map((v) => v.config.y), h = (a = this.components.find((v) => v.config.baseline)) === null || a === void 0 ? void 0 : a.config, m = h == null ? void 0 : h.baseline;
      d.accessors = {
        x: (o = this.components[0]) === null || o === void 0 ? void 0 : o.config.x,
        y: qi(f),
        yStacked: qi(p),
        baseline: m
      }, d.g.attr("transform", `translate(${u.left},${u.top})`).style("clip-path", `url(#${this._clipPathId})`).style("-webkit-clip-path", `url(#${this._clipPathId})`), d.hide();
    }
    (r = i.annotations) === null || r === void 0 || r.g.attr("transform", `translate(${u.left},${u.top})`), (s = i.annotations) === null || s === void 0 || s.render(), this._firstRender = !1;
  }
  _updateScales(...t) {
    const n = Za(t || this.components);
    this._setScales(...n), this._updateScalesDomain(...n), this._updateScalesRange(...n);
  }
  _setScales(...t) {
    const { config: n } = this;
    t && (n.xScale && t.forEach((a) => a.setScale(Me.X, n.xScale)), n.yScale && t.forEach((a) => a.setScale(Me.Y, n.yScale)));
  }
  _updateScalesDomain(...t) {
    const { config: n } = this;
    if (!t)
      return;
    const a = t.filter((o) => !o.config.excludeFromDomainCalculation);
    Object.values(Me).forEach((o) => {
      var r, s, i, u, c, d, f, p;
      const [h, m] = Ak(Lk(a.map((T) => T.getDataExtent(o, n.scaleByDomain)))), v = o === Me.Y ? n.yDomain : n.xDomain, b = o === Me.Y ? n.yDomainMinConstraint : n.xDomainMinConstraint, C = o === Me.Y ? n.yDomainMaxConstraint : n.xDomainMaxConstraint, $ = (s = (r = v == null ? void 0 : v[0]) !== null && r !== void 0 ? r : h) !== null && s !== void 0 ? s : 0, k = (u = (i = v == null ? void 0 : v[1]) !== null && i !== void 0 ? i : m) !== null && u !== void 0 ? u : 1, D = [
        mn($, (c = b == null ? void 0 : b[0]) !== null && c !== void 0 ? c : Number.NEGATIVE_INFINITY, (d = b == null ? void 0 : b[1]) !== null && d !== void 0 ? d : Number.POSITIVE_INFINITY),
        mn(k, (f = C == null ? void 0 : C[0]) !== null && f !== void 0 ? f : Number.NEGATIVE_INFINITY, (p = C == null ? void 0 : C[1]) !== null && p !== void 0 ? p : Number.POSITIVE_INFINITY)
      ];
      if (D[0] === D[1]) {
        const T = a.some((A) => {
          var M;
          return ((M = A.datamodel.data) === null || M === void 0 ? void 0 : M.length) > 0;
        });
        (n.preventEmptyDomain || n.preventEmptyDomain === null && (!T || o === Me.Y)) && (D[1] = D[0] + 1);
      }
      t.forEach((T) => T.setScaleDomain(o, D));
    });
  }
  _updateScalesRange(...t) {
    var n, a, o, r, s, i;
    const { config: u } = this;
    if (!t)
      return;
    const c = u.yDirection === Vn.South, d = [(n = u.padding.left) !== null && n !== void 0 ? n : 0, this.width - ((a = u.padding.right) !== null && a !== void 0 ? a : 0)], f = [this.height - ((o = u.padding.bottom) !== null && o !== void 0 ? o : 0), (r = u.padding.top) !== null && r !== void 0 ? r : 0];
    c && f.reverse();
    for (const h of t)
      h.setSize(this.width, this.height, this.containerWidth, this.containerHeight), h.setScaleRange(Me.X, (s = u.xRange) !== null && s !== void 0 ? s : d), h.setScaleRange(Me.Y, (i = u.yRange) !== null && i !== void 0 ? i : f);
    const p = t.map((h) => h.bleed).reduce((h, m) => {
      for (const v of Object.keys(h)) {
        const b = v;
        h[b] < m[b] && (h[b] = m[b]);
      }
      return h;
    }, { top: 0, bottom: 0, left: 0, right: 0 });
    for (const h of t)
      h.setScaleRange(Me.X, [d[0] + p.left, d[1] - p.right]), h.setScaleRange(
        Me.Y,
        c ? [f[0] + p.top, f[1] - p.bottom] : [f[0] - p.bottom, f[1] + p.top]
        // if Y axis is directed upwards
      );
  }
  _renderAxes(t) {
    const { config: { xAxis: n, yAxis: a } } = this, o = this._getMargin();
    Za([n, a]).forEach((s) => {
      const i = s.getOffset(o);
      s.g.attr("transform", `translate(${i.left},${i.top})`), s.render(t);
    });
  }
  _setAutoMargin() {
    const { config: { xAxis: t, yAxis: n } } = this, a = Za([...this.components, t, n]);
    this._setScales(...a), this._updateScalesDomain(...a);
    const o = this._firstRender ? 2 : 1;
    for (let r = 0; r < o; r += 1) {
      const s = { top: 0, bottom: 0, left: 0, right: 0 };
      this._updateScalesRange(...a), Za([t, n]).forEach((u) => {
        u.preRender();
        const c = u.getRequiredMargin();
        s.top < c.top && (s.top = c.top), s.bottom < c.bottom && (s.bottom = c.bottom), s.left < c.left && (s.left = c.left), s.right < c.right && (s.right = c.right);
      }), this._axisMargin = s;
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
    const { components: t, config: { tooltip: n, crosshair: a, annotations: o, xAxis: r, yAxis: s } } = this;
    super.destroy();
    for (const i of t)
      i == null || i.destroy();
    n == null || n.destroy(), a == null || a.destroy(), o == null || o.destroy(), r == null || r.destroy(), s == null || s.destroy();
  }
}
const Bv = {
  duration: 600,
  events: {},
  attributes: {}
};
class JD {
  constructor(t = co.SVG) {
    var n, a;
    this.type = co.SVG, this.datamodel = new Iu(), this.sizing = Ca.Fit, this.events = {}, this._defaultConfig = Bv, this._width = 400, this._height = 200, this._containerWidth = void 0, this._containerHeight = void 0, this._setUpComponentEventsThrottled = Yr(this._setUpComponentEvents, 500), this._setCustomAttributesThrottled = Yr(this._setCustomAttributes, 500), t === co.SVG ? this.element = document.createElementNS("http://www.w3.org/2000/svg", "g") : this.element = document.createElement("div"), this.uid = Uh(), this.g = Xe(this.element);
    const o = (a = (n = this.constructor) === null || n === void 0 ? void 0 : n.selectors) === null || a === void 0 ? void 0 : a.root;
    o && this.g.attr("class", o);
  }
  setConfig(t) {
    this.prevConfig = this.config, this.config = Hn(this._defaultConfig, t);
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
        r.on(o + n, (s, i) => {
          const u = r.nodes(), c = u.indexOf(s.currentTarget), d = t[a][o];
          return d == null ? void 0 : d(i, s, c, u);
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
class QD extends Iu {
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
const Hs = Object.assign(Object.assign({}, Bv), { x: void 0, y: void 0, id: (e, t) => {
  var n;
  return (n = e.id) !== null && n !== void 0 ? n : `${t}`;
}, color: (e) => e.color, xScale: void 0, yScale: void 0, excludeFromDomainCalculation: !1 });
class Xu extends JD {
  constructor() {
    super(...arguments), this.datamodel = new QD(), this.clippable = !0, this.stacked = !1, this._defaultConfig = Hs, this._xScale = Ud.scaleLinear(), this._yScale = Ud.scaleLinear();
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
    t === Me.X && ((a = this._xScale) === null || a === void 0 || a.domain(n)), t === Me.Y && ((o = this._yScale) === null || o === void 0 || o.domain(n));
  }
  setScaleRange(t, n) {
    var a, o;
    t === Me.X && ((a = this._xScale) === null || a === void 0 || a.range(n)), t === Me.Y && ((o = this._yScale) === null || o === void 0 || o.range(n));
  }
  setScale(t, n) {
    n && t === Me.X && (this._xScale = n), n && t === Me.Y && (this._yScale = n);
  }
  getDataExtent(t, n) {
    const { config: a, datamodel: o } = this;
    switch (t) {
      case Me.X:
        return this.getXDataExtent();
      case Me.Y:
        return this.getYDataExtent(n);
      default:
        return fi(o.data, a[t]);
    }
  }
  getXDataExtent() {
    const { config: t, datamodel: n } = this;
    return fi(n.data, t.x);
  }
  getYDataExtent(t) {
    const { config: n, datamodel: a } = this, o = t ? Xk(a.data, this.xScale.domain(), n.x) : a.data, r = Es(n.y) ? n.y : [n.y];
    return fi(o, ...r);
  }
}
var J;
(function(e) {
  e.Top = "top", e.Bottom = "bottom", e.Left = "left", e.Right = "right", e.Center = "center", e.Auto = "auto";
})(J || (J = {}));
var Hd;
(function(e) {
  e.Absolute = "absolute", e.Fixed = "fixed";
})(Hd || (Hd = {}));
var Wd;
(function(e) {
  e.Inside = "inside", e.Outside = "outside";
})(Wd || (Wd = {}));
var Yd;
(function(e) {
  e.Horizontal = "horizontal", e.Vertical = "vertical";
})(Yd || (Yd = {}));
const eM = {
  components: [],
  container: void 0,
  followCursor: !0,
  allowHover: !0,
  horizontalPlacement: J.Auto,
  horizontalShift: 0,
  verticalPlacement: J.Top,
  verticalShift: 0,
  attributes: {},
  triggers: {},
  className: void 0
}, Ws = Ce`
  label: tooltip;
  display: inline-block;
  left: 0;
  bottom: 0;
  min-width: max-content;
  position: absolute;
  opacity: 0;
  transition: opacity;
  transition-duration: var(--vis-tooltip-transition-duration);
  z-index: 999999;
  padding: var(--vis-tooltip-padding);
  color: var(--vis-tooltip-text-color);
  border-radius: var(--vis-tooltip-border-radius);
  box-shadow: var(--vis-tooltip-box-shadow);
  border: solid 1px var(--vis-tooltip-border-color);
  background-color: var(--vis-tooltip-background-color);
  backdrop-filter: var(--vis-tooltip-backdrop-filter);
`, tM = Ws, nM = Wa`
  :root {
    --vis-tooltip-background-color: rgba(255, 255, 255, 0.95);
    --vis-tooltip-border-color: #e5e9f7;
    --vis-tooltip-text-color: #000;
    --vis-tooltip-shadow-color: rgba(172, 179, 184, 0.35);
    --vis-tooltip-backdrop-filter: none;
    --vis-tooltip-padding: 10px 15px;
    --vis-tooltip-border-radius: 5px;
    --vis-tooltip-transition-duration: 300ms;
    --vis-tooltip-box-shadow: none;

    --vis-dark-tooltip-background-color: rgba(30,30,30, 0.95);
    --vis-dark-tooltip-text-color: #e5e9f7;
    --vis-dark-tooltip-border-color: var(--vis-color-grey);
    --vis-dark-tooltip-shadow-color: rgba(0,0,0, 0.95);
  }

  body.theme-dark ${`.${Ws}`} {
    --vis-tooltip-background-color: var(--vis-dark-tooltip-background-color);
    --vis-tooltip-text-color: var(--vis-dark-tooltip-text-color);
    --vis-tooltip-border-color: var(--vis-dark-tooltip-border-color);
    --vis-tooltip-shadow-color: var(--vis-dark-tooltip-shadow-color);
  }

  body.theme-dark {
    --vis-tooltip-background-color: rgba(30,30,30, 0.95);
    --vis-tooltip-text-color: #e5e9f7;
    --vis-tooltip-border-color: var(--vis-color-grey);
    --vis-tooltip-shadow-color: rgba(0,0,0, 0.95);
  }
`, Av = Ce`
  bottom: unset;
  position: fixed;
`, cl = Ce`
  opacity: 1;
`, dl = Ce`
  display: none;
`, Ov = Ce`
  label: non-interactive;
  pointer-events: none;
  user-select: none;
`, aM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hidden: dl,
  nonInteractive: Ov,
  positionFixed: Av,
  root: Ws,
  show: cl,
  tooltip: tM,
  variables: nM
}, Symbol.toStringTag, { value: "Module" }));
class Ev {
  constructor(t = {}) {
    this._defaultConfig = eM, this.config = this._defaultConfig, this._setUpEventsThrottled = Yr(this._setUpEvents, 500), this._setContainerPositionThrottled = Yr(this._setContainerPosition, 500), this._isShown = !1, this.element = document.createElement("div"), this.div = Xe(this.element).attr("class", Ws), this.setConfig(t), this.components = this.config.components, this._mutationObserver = new MutationObserver(() => {
      this._isShown && (!this.config.followCursor && this._hoveredElement ? this.placeByElement(this._hoveredElement) : this._position && this.place({ x: this._position[0], y: this._position[1] }));
    }), this._mutationObserver.observe(this.div.node(), { childList: !0, subtree: !0 });
  }
  setConfig(t) {
    var n;
    this.prevConfig = this.config, this.config = Hn(this._defaultConfig, t), this.prevConfig.horizontalPlacement !== this.config.horizontalPlacement && this.overrideHorizontalPlacement(void 0), this.config.container && this.config.container !== ((n = this.prevConfig) === null || n === void 0 ? void 0 : n.container) && this.setContainer(this.config.container), this._setUpAttributes();
  }
  setContainer(t) {
    var n;
    (n = this.element.parentNode) === null || n === void 0 || n.removeChild(this.element), this._container = t, this._container.appendChild(this.element), this._setContainerPositionThrottled();
  }
  getContainer() {
    return this._container;
  }
  hasContainer() {
    return !!this._container && this._container.isConnected;
  }
  setComponents(t) {
    this.components = t;
  }
  update() {
    this._container && this._setUpEventsThrottled();
  }
  /** Show the tooltip by providing content and position */
  show(t, n) {
    this.render(t), this.place(n);
  }
  /** Hide the tooltip */
  hide() {
    this.div.classed(cl, !1).on("transitionend", () => {
      this.div.classed(dl, !this._isShown);
    }), this._isShown = !1;
  }
  /** Simply displays the tooltip with its previous content on position */
  display() {
    this.div.classed(dl, !1).classed(cl, !0), this._isShown = !0;
  }
  place(t) {
    if (this._position = [t.x, t.y], !this.hasContainer()) {
      console.warn("Unovis | Tooltip: Container was not set or is not initialized yet");
      return;
    }
    const { config: n } = this, a = this.element.offsetWidth, o = this.element.offsetHeight, r = this._overriddenHorizontalPlacement || (n.horizontalPlacement === J.Auto ? J.Center : n.horizontalPlacement), s = n.verticalPlacement === J.Auto ? t.y - o < 0 ? J.Bottom : J.Top : n.verticalPlacement, i = 5, u = r === J.Left ? -a - i - n.horizontalShift : r === J.Center ? -a / 2 : i + n.horizontalShift, c = s === J.Bottom ? i + n.verticalShift : s === J.Center ? -o / 2 : -i - n.verticalShift - o, [d, f] = this._constraintPosToContainer(t.x + u, t.y + c, a, o);
    this._applyPosition(d, f, o);
  }
  placeByElement(t) {
    const { config: n } = this;
    this._hoveredElement = t;
    const a = 5, o = this.element.offsetWidth, r = this.element.offsetHeight, s = this.isContainerBody(), i = s ? window.innerWidth : this._container.scrollWidth, u = t.getBoundingClientRect(), c = s ? [u.x, u.y] : zr({
      clientX: u.x,
      clientY: u.y,
      pageX: u.x,
      pageY: u.y
    }, this._container), d = this._overriddenHorizontalPlacement || (n.horizontalPlacement === J.Auto ? c[0] - o < 0 ? J.Right : c[0] + o > i ? J.Left : J.Center : n.horizontalPlacement);
    let f = 0;
    switch (d) {
      case J.Left:
        f = -o - a - n.horizontalShift;
        break;
      case J.Right:
        f = u.width + a + n.horizontalShift;
        break;
      case J.Center:
      default:
        f = (-o + u.width) / 2;
        break;
    }
    const p = n.verticalPlacement === J.Auto ? d !== J.Center ? J.Center : c[1] - r < 0 ? J.Bottom : J.Top : n.verticalPlacement;
    let h = -r;
    switch (p) {
      case J.Center:
        h += (r + u.height) / 2;
        break;
      case J.Bottom:
        h += r + u.height + a + n.verticalShift;
        break;
      case J.Top:
      default:
        h += -a - n.verticalShift;
        break;
    }
    const [m, v] = this._constraintPosToContainer(c[0] + f, c[1] + h, o, r);
    this._applyPosition(m, v, r);
  }
  isContainerBody() {
    return this._container === document.body;
  }
  /** Allows to override the horizontal placement of the tooltip which is useful when you want to define custom positioning behavior.
   * This method has been added for Crosshair to allow it position tooltip left or right of the crosshair line
   * (see the `_showTooltip` method of the Crosshair component).
   */
  overrideHorizontalPlacement(t) {
    this._overriddenHorizontalPlacement = t;
  }
  render(t) {
    var n;
    const { config: a, prevConfig: o } = this;
    t instanceof HTMLElement ? this.div.select(":first-child").node() !== t && this.div.html("").append(() => t) : t && this.div.html(t), this.div.classed((n = a.className) !== null && n !== void 0 ? n : "", !!a.className).classed(Ov, !a.allowHover || a.followCursor), o != null && o.className && o.className !== a.className && this.div.classed(o.className, !1), this.display();
  }
  _applyPosition(t, n, a) {
    const o = this.isContainerBody(), r = o ? window.innerHeight : this._container.scrollHeight;
    this.div.classed(Av, o).style("top", o ? `${n}px` : "unset").style("bottom", o ? "unset" : `${r - n - a}px`).style("left", `${t}px`);
  }
  _constraintPosToContainer(t, n, a, o) {
    const r = this.isContainerBody(), s = r ? window.innerHeight : this._container.scrollHeight, i = r ? window.innerWidth : this._container.scrollWidth, u = 10, c = t > i - a - u, d = t < u, f = c ? i - a - u : d ? u : t, p = 10, h = n > s - o - p, m = n < p, v = h ? s - o - p : m ? p : n;
    return [
      i < a ? 0 : f,
      s < o ? 0 : v
    ];
  }
  _setContainerPosition() {
    var t;
    this._container !== document.body && ((t = getComputedStyle(this._container)) === null || t === void 0 ? void 0 : t.position) === "static" && (this._container.style.position = "relative");
  }
  _setUpEvents() {
    const { config: t } = this;
    this.components.forEach((n) => {
      const a = Xe(n.element);
      a.on("mousemove.tooltip", (o) => {
        const r = o.composedPath && o.composedPath() || o.path || [o.target];
        for (const s of Object.keys(t.triggers)) {
          const i = t.triggers[s];
          if (!i)
            continue;
          const u = a.selectAll(`.${s}`).nodes();
          for (const c of r) {
            if (c === a.node())
              break;
            if (c.classList.contains(s)) {
              const d = u.indexOf(c), f = Xe(c).datum(), p = i(f, d, u), [h, m] = this.isContainerBody() ? [o.clientX, o.clientY] : zr(o, this._container);
              p === null ? this.hide() : (this.render(p), t.followCursor ? this.place({ x: h, y: m }) : this.placeByElement(c)), o.stopPropagation();
              return;
            }
          }
        }
        this._isShown && this.hide();
      }).on("mouseleave.tooltip", (o) => {
        o.stopPropagation(), this.hide();
      });
    }), t.allowHover && !t.followCursor ? this.div.on("mouseenter.tooltip", this.display.bind(this)).on("mouseleave.tooltip", this.hide.bind(this)) : this.div.on("mouseenter.tooltip", null).on("mouseleave.tooltip", null);
  }
  _setUpAttributes() {
    const t = this.config.attributes;
    t && Object.keys(t).forEach((n) => {
      this.div.attr(n, t[n]);
    });
  }
  destroy() {
    var t;
    this._mutationObserver.disconnect(), (t = this.div) === null || t === void 0 || t.remove();
  }
}
Ev.selectors = aM;
function At(e) {
  return function() {
    return e;
  };
}
const Pv = Math.cos, os = Math.sin, $t = Math.sqrt, Kd = 1e-12, rs = Math.PI, Ys = 2 * rs, fl = Math.PI, pl = 2 * fl, Mn = 1e-6, oM = pl - Mn;
function Rv(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function rM(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Rv;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, r = a.length; o < r; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class sM {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Rv : rM(t);
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
  bezierCurveTo(t, n, a, o, r, s) {
    this._append`C${+t},${+n},${+a},${+o},${this._x1 = +r},${this._y1 = +s}`;
  }
  arcTo(t, n, a, o, r) {
    if (t = +t, n = +n, a = +a, o = +o, r = +r, r < 0) throw new Error(`negative radius: ${r}`);
    let s = this._x1, i = this._y1, u = a - t, c = o - n, d = s - t, f = i - n, p = d * d + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (p > Mn) if (!(Math.abs(f * u - c * d) > Mn) || !r)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let h = a - s, m = o - i, v = u * u + c * c, b = h * h + m * m, C = Math.sqrt(v), $ = Math.sqrt(p), k = r * Math.tan((fl - Math.acos((v + p - b) / (2 * C * $))) / 2), D = k / $, T = k / C;
      Math.abs(D - 1) > Mn && this._append`L${t + D * d},${n + D * f}`, this._append`A${r},${r},0,0,${+(f * h > d * m)},${this._x1 = t + T * u},${this._y1 = n + T * c}`;
    }
  }
  arc(t, n, a, o, r, s) {
    if (t = +t, n = +n, a = +a, s = !!s, a < 0) throw new Error(`negative radius: ${a}`);
    let i = a * Math.cos(o), u = a * Math.sin(o), c = t + i, d = n + u, f = 1 ^ s, p = s ? o - r : r - o;
    this._x1 === null ? this._append`M${c},${d}` : (Math.abs(this._x1 - c) > Mn || Math.abs(this._y1 - d) > Mn) && this._append`L${c},${d}`, a && (p < 0 && (p = p % pl + pl), p > oM ? this._append`A${a},${a},0,1,${f},${t - i},${n - u}A${a},${a},0,1,${f},${this._x1 = c},${this._y1 = d}` : p > Mn && this._append`A${a},${a},0,${+(p >= fl)},${f},${this._x1 = t + a * Math.cos(r)},${this._y1 = n + a * Math.sin(r)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function Iv(e) {
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
  }, () => new sM(t);
}
function iM(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Fv(e) {
  this._context = e;
}
Fv.prototype = {
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
function Vv(e) {
  return new Fv(e);
}
function lM(e) {
  return e[0];
}
function uM(e) {
  return e[1];
}
function cM(e, t) {
  var n = At(!0), a = null, o = Vv, r = null, s = Iv(i);
  e = typeof e == "function" ? e : e === void 0 ? lM : At(e), t = typeof t == "function" ? t : t === void 0 ? uM : At(t);
  function i(u) {
    var c, d = (u = iM(u)).length, f, p = !1, h;
    for (a == null && (r = o(h = s())), c = 0; c <= d; ++c)
      !(c < d && n(f = u[c], c, u)) === p && ((p = !p) ? r.lineStart() : r.lineEnd()), p && r.point(+e(f, c, u), +t(f, c, u));
    if (h) return r = null, h + "" || null;
  }
  return i.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : At(+u), i) : e;
  }, i.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : At(+u), i) : t;
  }, i.defined = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : At(!!u), i) : n;
  }, i.curve = function(u) {
    return arguments.length ? (o = u, a != null && (r = o(a)), i) : o;
  }, i.context = function(u) {
    return arguments.length ? (u == null ? a = r = null : r = o(a = u), i) : a;
  }, i;
}
const Nv = {
  draw(e, t) {
    const n = $t(t / rs);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, Ys);
  }
}, dM = {
  draw(e, t) {
    const n = $t(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, Lv = $t(1 / 3), fM = Lv * 2, pM = {
  draw(e, t) {
    const n = $t(t / fM), a = n * Lv;
    e.moveTo(0, -n), e.lineTo(a, 0), e.lineTo(0, n), e.lineTo(-a, 0), e.closePath();
  }
}, hM = {
  draw(e, t) {
    const n = $t(t), a = -n / 2;
    e.rect(a, a, n, n);
  }
}, vM = 0.8908130915292852, zv = os(rs / 10) / os(7 * rs / 10), mM = os(Ys / 10) * zv, gM = -Pv(Ys / 10) * zv, yM = {
  draw(e, t) {
    const n = $t(t * vM), a = mM * n, o = gM * n;
    e.moveTo(0, -n), e.lineTo(a, o);
    for (let r = 1; r < 5; ++r) {
      const s = Ys * r / 5, i = Pv(s), u = os(s);
      e.lineTo(u * n, -i * n), e.lineTo(i * a - u * o, u * a + i * o);
    }
    e.closePath();
  }
}, ki = $t(3), bM = {
  draw(e, t) {
    const n = -$t(t / (ki * 3));
    e.moveTo(0, n * 2), e.lineTo(-ki * n, -n), e.lineTo(ki * n, -n), e.closePath();
  }
}, it = -0.5, lt = $t(3) / 2, hl = 1 / $t(12), _M = (hl / 2 + 1) * 3, wM = {
  draw(e, t) {
    const n = $t(t / _M), a = n / 2, o = n * hl, r = a, s = n * hl + n, i = -r, u = s;
    e.moveTo(a, o), e.lineTo(r, s), e.lineTo(i, u), e.lineTo(it * a - lt * o, lt * a + it * o), e.lineTo(it * r - lt * s, lt * r + it * s), e.lineTo(it * i - lt * u, lt * i + it * u), e.lineTo(it * a + lt * o, it * o - lt * a), e.lineTo(it * r + lt * s, it * s - lt * r), e.lineTo(it * i + lt * u, it * u - lt * i), e.closePath();
  }
};
function xM(e, t) {
  let n = null, a = Iv(o);
  e = typeof e == "function" ? e : At(e || Nv), t = typeof t == "function" ? t : At(t === void 0 ? 64 : +t);
  function o() {
    let r;
    if (n || (n = r = a()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), r) return n = null, r + "" || null;
  }
  return o.type = function(r) {
    return arguments.length ? (e = typeof r == "function" ? r : At(r), o) : e;
  }, o.size = function(r) {
    return arguments.length ? (t = typeof r == "function" ? r : At(+r), o) : t;
  }, o.context = function(r) {
    return arguments.length ? (n = r ?? null, o) : n;
  }, o;
}
function xn() {
}
function ss(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function Ks(e) {
  this._context = e;
}
Ks.prototype = {
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
        ss(this, this._x1, this._y1);
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
        ss(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function CM(e) {
  return new Ks(e);
}
function Uv(e) {
  this._context = e;
}
Uv.prototype = {
  areaStart: xn,
  areaEnd: xn,
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
        ss(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function kM(e) {
  return new Uv(e);
}
function Hv(e) {
  this._context = e;
}
Hv.prototype = {
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
        ss(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function $M(e) {
  return new Hv(e);
}
function Wv(e, t) {
  this._basis = new Ks(e), this._beta = t;
}
Wv.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length - 1;
    if (n > 0)
      for (var a = e[0], o = t[0], r = e[n] - a, s = t[n] - o, i = -1, u; ++i <= n; )
        u = i / n, this._basis.point(
          this._beta * e[i] + (1 - this._beta) * (a + u * r),
          this._beta * t[i] + (1 - this._beta) * (o + u * s)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const SM = function e(t) {
  function n(a) {
    return t === 1 ? new Ks(a) : new Wv(a, t);
  }
  return n.beta = function(a) {
    return e(+a);
  }, n;
}(0.85);
function is(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function Zu(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Zu.prototype = {
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
        is(this, this._x1, this._y1);
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
        is(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const TM = function e(t) {
  function n(a) {
    return new Zu(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Ju(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Ju.prototype = {
  areaStart: xn,
  areaEnd: xn,
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
        is(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const DM = function e(t) {
  function n(a) {
    return new Ju(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Qu(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Qu.prototype = {
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
        is(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const MM = function e(t) {
  function n(a) {
    return new Qu(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function ec(e, t, n) {
  var a = e._x1, o = e._y1, r = e._x2, s = e._y2;
  if (e._l01_a > Kd) {
    var i = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, u = 3 * e._l01_a * (e._l01_a + e._l12_a);
    a = (a * i - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / u, o = (o * i - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / u;
  }
  if (e._l23_a > Kd) {
    var c = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, d = 3 * e._l23_a * (e._l23_a + e._l12_a);
    r = (r * c + e._x1 * e._l23_2a - t * e._l12_2a) / d, s = (s * c + e._y1 * e._l23_2a - n * e._l12_2a) / d;
  }
  e._context.bezierCurveTo(a, o, r, s, e._x2, e._y2);
}
function Yv(e, t) {
  this._context = e, this._alpha = t;
}
Yv.prototype = {
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
        ec(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const BM = function e(t) {
  function n(a) {
    return t ? new Yv(a, t) : new Zu(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Kv(e, t) {
  this._context = e, this._alpha = t;
}
Kv.prototype = {
  areaStart: xn,
  areaEnd: xn,
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
        ec(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const AM = function e(t) {
  function n(a) {
    return t ? new Kv(a, t) : new Ju(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function jv(e, t) {
  this._context = e, this._alpha = t;
}
jv.prototype = {
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
        ec(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const OM = function e(t) {
  function n(a) {
    return t ? new jv(a, t) : new Qu(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Gv(e) {
  this._context = e;
}
Gv.prototype = {
  areaStart: xn,
  areaEnd: xn,
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
function EM(e) {
  return new Gv(e);
}
function jd(e) {
  return e < 0 ? -1 : 1;
}
function Gd(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, r = (e._y1 - e._y0) / (a || o < 0 && -0), s = (n - e._y1) / (o || a < 0 && -0), i = (r * o + s * a) / (a + o);
  return (jd(r) + jd(s)) * Math.min(Math.abs(r), Math.abs(s), 0.5 * Math.abs(i)) || 0;
}
function qd(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function $i(e, t, n) {
  var a = e._x0, o = e._y0, r = e._x1, s = e._y1, i = (r - a) / 3;
  e._context.bezierCurveTo(a + i, o + i * t, r - i, s - i * n, r, s);
}
function ls(e) {
  this._context = e;
}
ls.prototype = {
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
        $i(this, this._t0, qd(this, this._t0));
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
          this._point = 3, $i(this, qd(this, n = Gd(this, e, t)), n);
          break;
        default:
          $i(this, this._t0, n = Gd(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function qv(e) {
  this._context = new Xv(e);
}
(qv.prototype = Object.create(ls.prototype)).point = function(e, t) {
  ls.prototype.point.call(this, t, e);
};
function Xv(e) {
  this._context = e;
}
Xv.prototype = {
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
function PM(e) {
  return new ls(e);
}
function RM(e) {
  return new qv(e);
}
function Zv(e) {
  this._context = e;
}
Zv.prototype = {
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
        for (var a = Xd(e), o = Xd(t), r = 0, s = 1; s < n; ++r, ++s)
          this._context.bezierCurveTo(a[0][r], o[0][r], a[1][r], o[1][r], e[s], t[s]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Xd(e) {
  var t, n = e.length - 1, a, o = new Array(n), r = new Array(n), s = new Array(n);
  for (o[0] = 0, r[0] = 2, s[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) o[t] = 1, r[t] = 4, s[t] = 4 * e[t] + 2 * e[t + 1];
  for (o[n - 1] = 2, r[n - 1] = 7, s[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) a = o[t] / r[t - 1], r[t] -= a, s[t] -= a * s[t - 1];
  for (o[n - 1] = s[n - 1] / r[n - 1], t = n - 2; t >= 0; --t) o[t] = (s[t] - o[t + 1]) / r[t];
  for (r[n - 1] = (e[n] + o[n - 1]) / 2, t = 0; t < n - 1; ++t) r[t] = 2 * e[t + 1] - o[t + 1];
  return [o, r];
}
function IM(e) {
  return new Zv(e);
}
function js(e, t) {
  this._context = e, this._t = t;
}
js.prototype = {
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
function FM(e) {
  return new js(e, 0.5);
}
function VM(e) {
  return new js(e, 0);
}
function NM(e) {
  return new js(e, 1);
}
function Zd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function LM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zd(Object(n), !0).forEach(function(a) {
      zM(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zd(Object(n)).forEach(function(a) {
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
function zM(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function us() {
  return us = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, us.apply(this, arguments);
}
function UM(e, t) {
  if (e) {
    if (typeof e == "string") return Jd(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Jd(e, t);
  }
}
function Jd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function Jv(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = UM(e)) || t) {
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
  var r = !0, s = !1, i;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var u = n.next();
      return r = u.done, u;
    },
    e: function(u) {
      s = !0, i = u;
    },
    f: function() {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (s) throw i;
      }
    }
  };
}
function HM(e, t) {
  var n = [], a = [];
  function o(r, s) {
    if (r.length === 1)
      n.push(r[0]), a.push(r[0]);
    else {
      for (var i = Array(r.length - 1), u = 0; u < i.length; u++)
        u === 0 && n.push(r[0]), u === i.length - 1 && a.push(r[u + 1]), i[u] = [(1 - s) * r[u][0] + s * r[u + 1][0], (1 - s) * r[u][1] + s * r[u + 1][1]];
      o(i, s);
    }
  }
  return e.length && o(e, t), {
    left: n,
    right: a.reverse()
  };
}
function WM(e) {
  var t = {};
  return e.length === 4 && (t.x2 = e[2][0], t.y2 = e[2][1]), e.length >= 3 && (t.x1 = e[1][0], t.y1 = e[1][1]), t.x = e[e.length - 1][0], t.y = e[e.length - 1][1], e.length === 4 ? t.type = "C" : e.length === 3 ? t.type = "Q" : t.type = "L", t;
}
function YM(e, t) {
  t = t || 2;
  for (var n = [], a = e, o = 1 / t, r = 0; r < t - 1; r++) {
    var s = o / (1 - o * r), i = HM(a, s);
    n.push(i.left), a = i.right;
  }
  return n.push(a), n;
}
function KM(e, t, n) {
  var a = [[e.x, e.y]];
  return t.x1 != null && a.push([t.x1, t.y1]), t.x2 != null && a.push([t.x2, t.y2]), a.push([t.x, t.y]), YM(a, n).map(WM);
}
var jM = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g, fa = {
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
Object.keys(fa).forEach(function(e) {
  fa[e.toLowerCase()] = fa[e];
});
function vl(e, t) {
  for (var n = Array(e), a = 0; a < e; a++)
    n[a] = t;
  return n;
}
function GM(e) {
  return "".concat(e.type).concat(fa[e.type].map(function(t) {
    return e[t];
  }).join(","));
}
function qM(e, t) {
  var n = {
    x1: "x",
    y1: "y",
    x2: "x",
    y2: "y"
  }, a = ["xAxisRotation", "largeArcFlag", "sweepFlag"];
  if (e.type !== t.type && t.type.toUpperCase() !== "M") {
    var o = {};
    Object.keys(t).forEach(function(r) {
      var s = t[r], i = e[r];
      i === void 0 && (a.includes(r) ? i = s : (i === void 0 && n[r] && (i = e[n[r]]), i === void 0 && (i = 0))), o[r] = i;
    }), o.type = t.type, e = o;
  }
  return e;
}
function XM(e, t, n) {
  var a = [];
  if (t.type === "L" || t.type === "Q" || t.type === "C")
    a = a.concat(KM(e, t, n));
  else {
    var o = us({}, e);
    o.type === "M" && (o.type = "L"), a = a.concat(vl(n - 1).map(function() {
      return o;
    })), a.push(t);
  }
  return a;
}
function Qd(e, t, n) {
  var a = e.length - 1, o = t.length - 1, r = a / o, s = vl(o).reduce(function(u, c, d) {
    var f = Math.floor(r * d);
    if (n && f < e.length - 1 && n(e[f], e[f + 1])) {
      var p = r * d % 1 < 0.5;
      u[f] && (p ? f > 0 ? f -= 1 : f < e.length - 1 && (f += 1) : f < e.length - 1 ? f += 1 : f > 0 && (f -= 1));
    }
    return u[f] = (u[f] || 0) + 1, u;
  }, []), i = s.reduce(function(u, c, d) {
    if (d === e.length - 1) {
      var f = vl(c, us({}, e[e.length - 1]));
      return f[0].type === "M" && f.forEach(function(p) {
        p.type = "L";
      }), u.concat(f);
    }
    return u.concat(XM(e[d], e[d + 1], c));
  }, []);
  return i.unshift(e[0]), i;
}
function ef(e) {
  for (var t = (e || "").match(jM) || [], n = [], a, o, r = 0; r < t.length; ++r)
    if (a = fa[t[r]], a) {
      o = {
        type: t[r]
      };
      for (var s = 0; s < a.length; ++s)
        o[a[s]] = +t[r + s + 1];
      r += a.length, n.push(o);
    }
  return n;
}
function ZM(e, t, n) {
  var a = e == null ? [] : e.slice(), o = t == null ? [] : t.slice(), r = ho(n) === "object" ? n : {
    excludeSegment: n,
    snapEndsToInput: !0
  }, s = r.excludeSegment, i = r.snapEndsToInput;
  if (!a.length && !o.length)
    return function() {
      return [];
    };
  var u = (a.length === 0 || a[a.length - 1].type === "Z") && (o.length === 0 || o[o.length - 1].type === "Z");
  a.length > 0 && a[a.length - 1].type === "Z" && a.pop(), o.length > 0 && o[o.length - 1].type === "Z" && o.pop(), a.length ? o.length || o.push(a[0]) : a.push(o[0]);
  var c = Math.abs(o.length - a.length);
  c !== 0 && (o.length > a.length ? a = Qd(a, o, s) : o.length < a.length && (o = Qd(o, a, s))), a = a.map(function(f, p) {
    return qM(f, o[p]);
  });
  var d = a.map(function(f) {
    return LM({}, f);
  });
  return u && (d.push({
    type: "Z"
  }), a.push({
    type: "Z"
  })), function(p) {
    if (p === 1 && i)
      return t ?? [];
    if (p === 0)
      return a;
    for (var h = 0; h < d.length; ++h) {
      var m = a[h], v = o[h], b = d[h], C = Jv(fa[b.type]), $;
      try {
        for (C.s(); !($ = C.n()).done; ) {
          var k = $.value;
          b[k] = (1 - p) * m[k] + p * v[k], (k === "largeArcFlag" || k === "sweepFlag") && (b[k] = Math.round(b[k]));
        }
      } catch (D) {
        C.e(D);
      } finally {
        C.f();
      }
    }
    return d;
  };
}
function JM(e, t, n) {
  var a = ef(e), o = ef(t), r = ho(n) === "object" ? n : {
    excludeSegment: n,
    snapEndsToInput: !0
  }, s = r.excludeSegment, i = r.snapEndsToInput;
  if (!a.length && !o.length)
    return function() {
      return "";
    };
  var u = ZM(a, o, {
    excludeSegment: s,
    snapEndsToInput: i
  });
  return function(d) {
    if (d === 1 && i)
      return t ?? "";
    var f = u(d), p = "", h = Jv(f), m;
    try {
      for (h.s(); !(m = h.n()).done; ) {
        var v = m.value;
        p += GM(v);
      }
    } catch (b) {
      h.e(b);
    } finally {
      h.f();
    }
    return p;
  };
}
function Pn(e, t, n, a) {
  return Array.isArray(t) && isFinite(n) ? t[n % t.length] : Cu(e, t, n) || (yn(n) && !a ? `var(${pn(n)})` : null);
}
var Te;
(function(e) {
  e.Basis = "basis", e.BasisClosed = "basisClosed", e.BasisOpen = "basisOpen", e.Bundle = "bundle", e.Cardinal = "cardinal", e.CardinalClosed = "cardinalClosed", e.CardinalOpen = "cardinalOpen", e.CatmullRom = "catmullRom", e.CatmullRomClosed = "catmullRomClosed", e.CatmullRomOpen = "catmullRomOpen", e.Linear = "linear", e.LinearClosed = "linearClosed", e.MonotoneX = "monotoneX", e.MonotoneY = "monotoneY", e.Natural = "natural", e.Step = "step", e.StepAfter = "stepAfter", e.StepBefore = "stepBefore";
})(Te || (Te = {}));
const tf = {
  [Te.Basis]: CM,
  [Te.BasisClosed]: kM,
  [Te.BasisOpen]: $M,
  [Te.Bundle]: SM,
  [Te.Cardinal]: TM,
  [Te.CardinalClosed]: DM,
  [Te.CardinalOpen]: MM,
  [Te.CatmullRom]: BM,
  [Te.CatmullRomClosed]: AM,
  [Te.CatmullRomOpen]: OM,
  [Te.Linear]: Vv,
  [Te.LinearClosed]: EM,
  [Te.MonotoneX]: PM,
  [Te.MonotoneY]: RM,
  [Te.Natural]: IM,
  [Te.Step]: FM,
  [Te.StepAfter]: NM,
  [Te.StepBefore]: VM
}, QM = Object.assign(Object.assign({}, Hs), { curveType: Te.MonotoneX, lineWidth: 2, lineDashArray: void 0, fallbackValue: void 0, highlightOnHover: !1, cursor: null }), eB = Wa`
  :root {
    --vis-line-cursor: default;
    --vis-line-stroke-dasharray: none;
    --vis-line-stroke-dashoffset: 0;
  }
`, tB = Ce`
  label: line-component;
`, lo = Ce`
  label: line;
  transition: opacity 200ms;
  cursor: var(--vis-line-cursor);
`, ml = Ce`
  label: linePath;
  fill: none;
  stroke-dasharray: var(--vis-line-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-stroke-dashoffset);
`, gl = Ce`
  label: lineSelectionHelper;
  fill: none;
  stroke: rgba(0, 0, 0, 0);
  stroke-width: 8px;
`, yl = Ce`
  opacity: 0.2;
`, nB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dim: yl,
  globalStyles: eB,
  line: lo,
  linePath: ml,
  lineSelectionHelper: gl,
  root: tB
}, Symbol.toStringTag, { value: "Module" }));
class Ka extends Xu {
  constructor(t) {
    super(), this._defaultConfig = QM, this.config = this._defaultConfig, this.curve = tf[Te.MonotoneX], this.events = {
      [Ka.selectors.line]: {
        mouseover: this._highlight.bind(this),
        mouseleave: this._resetHighlight.bind(this)
      }
    }, t && this.setConfig(t);
  }
  get bleed() {
    const { config: { lineWidth: t } } = this, n = this.yScale.domain(), o = (this.yScale.range()[0] > this.yScale.range()[1] ? Vn.North : Vn.South) === Vn.South, r = t > 3, s = t >= 10;
    return {
      top: !s && (!o && n[1] === 0 || o && n[0] === 0) ? 0 : t / 2,
      bottom: !s && (!o && n[0] === 0 || o && n[1] === 0) ? 0 : t / 2,
      left: r ? t / 2 : 0,
      right: r ? t / 2 : 0
    };
  }
  _render(t) {
    super._render(t);
    const { config: n, datamodel: { data: a } } = this, o = yn(t) ? t : n.duration;
    this.curve = tf[n.curveType], this.lineGen = cM().x((f) => f.x).y((f) => f.y).defined((f) => f.defined).curve(this.curve);
    const r = Es(n.y) ? n.y : [n.y], s = a.map((f, p) => this.xScale(tt(f, n.x, p))), i = r.map((f) => {
      const p = a.map((v, b) => {
        const C = tt(v, f, b), $ = (yn(C) || C === null) && isFinite(C) ? C : n.fallbackValue;
        return {
          x: s[b],
          y: this.yScale($ ?? 0),
          defined: isFinite($),
          value: $
        };
      }), h = p.reduce((v, b) => b.defined || v, !1), m = h && p.some((v) => v.value !== null);
      return {
        values: p,
        defined: h,
        visible: m
      };
    }), u = this.g.selectAll(`.${lo}`).data(i), c = u.enter().append("g").attr("class", lo);
    c.append("path").attr("class", ml).attr("stroke", (f, p) => Pn(a, n.color, p)).attr("stroke-opacity", 0).attr("stroke-width", n.lineWidth), c.append("path").attr("class", gl).attr("d", this._emptyPath());
    const d = c.merge(u);
    d.style("cursor", (f, p) => Cu(a, n.cursor, p)), d.each((f, p, h) => {
      var m;
      const v = Xe(h[p]), b = v.select(`.${ml}`), C = v.select(`.${gl}`), $ = f.visible, k = xu(a, n.lineDashArray, p), D = Zt(b, o).attr("stroke", Pn(a, n.color, p)).attr("stroke-width", n.lineWidth).attr("stroke-opacity", $ ? 1 : 0).style("stroke-dasharray", (m = k == null ? void 0 : k.join(" ")) !== null && m !== void 0 ? m : null), T = f.values.some((M) => !M.defined), A = this.lineGen(f.values);
      if (o && !T) {
        const M = b.attr("d") || this._emptyPath(), N = A || this._emptyPath();
        D.attrTween("d", () => JM(M, N));
      } else f.visible && D.attr("d", A);
      C.attr("d", A).attr("visibility", $ ? null : "hidden");
    }), Zt(u.exit(), o).style("opacity", 0).remove();
  }
  _emptyPath() {
    const t = this.xScale.range(), n = this.yScale.range();
    return `M${t[0]},${n[0]} L${t[1]},${n[0]}`;
  }
  _highlight(t) {
    const { config: n } = this;
    n.highlightOnHover && this.g.selectAll(`.${lo}`).classed(yl, (a) => a !== t);
  }
  _resetHighlight() {
    const { config: t } = this;
    t.highlightOnHover && this.g.selectAll(`.${lo}`).classed(yl, !1);
  }
}
Ka.selectors = nB;
function aB(e) {
  return e;
}
var Tr = 1, Dr = 2, bl = 3, uo = 4, nf = 1e-6;
function oB(e) {
  return "translate(" + e + ",0)";
}
function rB(e) {
  return "translate(0," + e + ")";
}
function sB(e) {
  return (t) => +e(t);
}
function iB(e, t) {
  return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function lB() {
  return !this.__axis;
}
function Gs(e, t) {
  var n = [], a = null, o = null, r = 6, s = 6, i = 3, u = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, c = e === Tr || e === uo ? -1 : 1, d = e === uo || e === Dr ? "x" : "y", f = e === Tr || e === bl ? oB : rB;
  function p(h) {
    var m = a ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), v = o ?? (t.tickFormat ? t.tickFormat.apply(t, n) : aB), b = Math.max(r, 0) + i, C = t.range(), $ = +C[0] + u, k = +C[C.length - 1] + u, D = (t.bandwidth ? iB : sB)(t.copy(), u), T = h.selection ? h.selection() : h, A = T.selectAll(".domain").data([null]), M = T.selectAll(".tick").data(m, t).order(), N = M.exit(), V = M.enter().append("g").attr("class", "tick"), B = M.select("line"), E = M.select("text");
    A = A.merge(A.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), M = M.merge(V), B = B.merge(V.append("line").attr("stroke", "currentColor").attr(d + "2", c * r)), E = E.merge(V.append("text").attr("fill", "currentColor").attr(d, c * b).attr("dy", e === Tr ? "0em" : e === bl ? "0.71em" : "0.32em")), h !== T && (A = A.transition(h), M = M.transition(h), B = B.transition(h), E = E.transition(h), N = N.transition(h).attr("opacity", nf).attr("transform", function(I) {
      return isFinite(I = D(I)) ? f(I + u) : this.getAttribute("transform");
    }), V.attr("opacity", nf).attr("transform", function(I) {
      var Y = this.parentNode.__axis;
      return f((Y && isFinite(Y = Y(I)) ? Y : D(I)) + u);
    })), N.remove(), A.attr("d", e === uo || e === Dr ? s ? "M" + c * s + "," + $ + "H" + u + "V" + k + "H" + c * s : "M" + u + "," + $ + "V" + k : s ? "M" + $ + "," + c * s + "V" + u + "H" + k + "V" + c * s : "M" + $ + "," + u + "H" + k), M.attr("opacity", 1).attr("transform", function(I) {
      return f(D(I) + u);
    }), B.attr(d + "2", c * r), E.attr(d, c * b).text(v), T.filter(lB).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === Dr ? "start" : e === uo ? "end" : "middle"), T.each(function() {
      this.__axis = D;
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
    return arguments.length ? (r = s = +h, p) : r;
  }, p.tickSizeInner = function(h) {
    return arguments.length ? (r = +h, p) : r;
  }, p.tickSizeOuter = function(h) {
    return arguments.length ? (s = +h, p) : s;
  }, p.tickPadding = function(h) {
    return arguments.length ? (i = +h, p) : i;
  }, p.offset = function(h) {
    return arguments.length ? (u = +h, p) : u;
  }, p;
}
function af(e) {
  return Gs(Tr, e);
}
function of(e) {
  return Gs(Dr, e);
}
function rf(e) {
  return Gs(bl, e);
}
function sf(e) {
  return Gs(uo, e);
}
var Nn;
(function(e) {
  e.Start = "start", e.Middle = "middle", e.End = "end";
})(Nn || (Nn = {}));
var Ln;
(function(e) {
  e.Top = "top", e.Middle = "middle", e.Bottom = "bottom";
})(Ln || (Ln = {}));
var cs;
(function(e) {
  e.Wrap = "wrap", e.Trim = "trim";
})(cs || (cs = {}));
var vt;
(function(e) {
  e.Left = "left", e.Center = "center", e.Right = "right";
})(vt || (vt = {}));
var Qv = { exports: {} };
(function(e) {
  (function(t) {
    if (typeof n != "function") {
      var n = function(m) {
        return m;
      };
      n.nonNative = !0;
    }
    const a = n("plaintext"), o = n("html"), r = n("comment"), s = /<(\w*)>/g, i = /<\/?([^\s\/>]+)/;
    function u(m, v, b) {
      m = m || "", v = v || [], b = b || "";
      let C = d(v, b);
      return f(m, C);
    }
    function c(m, v) {
      m = m || [], v = v || "";
      let b = d(m, v);
      return function($) {
        return f($ || "", b);
      };
    }
    u.init_streaming_mode = c;
    function d(m, v) {
      return m = p(m), {
        allowable_tags: m,
        tag_replacement: v,
        state: a,
        tag_buffer: "",
        depth: 0,
        in_quote_char: ""
      };
    }
    function f(m, v) {
      if (typeof m != "string")
        throw new TypeError("'html' parameter must be a string");
      let b = v.allowable_tags, C = v.tag_replacement, $ = v.state, k = v.tag_buffer, D = v.depth, T = v.in_quote_char, A = "";
      for (let M = 0, N = m.length; M < N; M++) {
        let V = m[M];
        if ($ === a)
          switch (V) {
            case "<":
              $ = o, k += V;
              break;
            default:
              A += V;
              break;
          }
        else if ($ === o)
          switch (V) {
            case "<":
              if (T)
                break;
              D++;
              break;
            case ">":
              if (T)
                break;
              if (D) {
                D--;
                break;
              }
              T = "", $ = a, k += ">", b.has(h(k)) ? A += k : A += C, k = "";
              break;
            case '"':
            case "'":
              V === T ? T = "" : T = T || V, k += V;
              break;
            case "-":
              k === "<!-" && ($ = r), k += V;
              break;
            case " ":
            case `
`:
              if (k === "<") {
                $ = a, A += "< ", k = "";
                break;
              }
              k += V;
              break;
            default:
              k += V;
              break;
          }
        else if ($ === r)
          switch (V) {
            case ">":
              k.slice(-2) == "--" && ($ = a), k = "";
              break;
            default:
              k += V;
              break;
          }
      }
      return v.state = $, v.tag_buffer = k, v.depth = D, v.in_quote_char = T, A;
    }
    function p(m) {
      let v = /* @__PURE__ */ new Set();
      if (typeof m == "string") {
        let b;
        for (; b = s.exec(m); )
          v.add(b[1]);
      } else !n.nonNative && typeof m[n.iterator] == "function" ? v = new Set(m) : typeof m.forEach == "function" && m.forEach(v.add, v);
      return v;
    }
    function h(m) {
      let v = i.exec(m);
      return v ? v[1].toLowerCase() : null;
    }
    e.exports ? e.exports = u : t.striptags = u;
  })(Ym);
})(Qv);
var uB = Qv.exports;
const cB = /* @__PURE__ */ $f(uB);
function dB(e) {
  switch (e) {
    case vt.Center:
      return "middle";
    case vt.Right:
      return "end";
    case vt.Left:
    default:
      return "start";
  }
}
function fB(e) {
  var t;
  return (t = e.match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)) === null || t === void 0 ? void 0 : t.filter(Boolean).map((n) => n.toLowerCase()).join("-");
}
function pB(e) {
  return e.replace(/['"]/g, "&#39;").replace(/\u0000/g, "\\0").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
}
function hB(e = "", t = 15) {
  return e.length > t ? `…${e.substr(e.length - t, t)}` : e;
}
function vB(e = "", t = 15) {
  const n = Math.floor((t - 3) / 2);
  return e.length > t ? `${e.substr(0, n)}…${e.substr(-n, n)}` : e;
}
function mB(e = "", t = 15) {
  return e.length > t ? `${e.substr(0, t)}…` : e;
}
function gB(e = "", t = 15, n = Nn.Middle) {
  let a = mB(e, t);
  return n === Nn.Start ? a = hB(e, t) : n === Nn.Middle && (a = vB(e, t)), a;
}
function yB(e, t = [" "]) {
  let n = [e];
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    n.forEach((r, s) => {
      const i = r.split(o), u = i.map((c, d) => `${c}${d === i.length - 1 ? "" : o}`);
      n[s] = u;
    }), n = qi(n);
  }
  return n;
}
function bB(e, t, n, a, o, r) {
  var s;
  t === void 0 && (t = 50), n === void 0 && (n = Nn.Middle), o === void 0 && (o = +((s = window.getComputedStyle(e.node())) === null || s === void 0 ? void 0 : s.fontSize) || 0);
  const i = e.text(), u = i.length, c = o * u * r, f = Math.ceil(u * t / (1.1 * c));
  return f < u ? (e.text(gB(i, f, n)), !0) : !1;
}
function Mr(e, t, n = T2()) {
  return e.length * t * n || 0;
}
function Br(e, t, n) {
  const a = "http://www.w3.org/2000/svg", o = document.createElementNS(a, "svg"), r = document.createElementNS(a, "text");
  r.textContent = e, r.setAttribute("font-size", `${n}`), r.setAttribute("font-family", t), o.appendChild(r), document.body.appendChild(o);
  const s = r.getComputedTextLength();
  return document.body.removeChild(o), s;
}
function _B(e, t = void 0, n = !0, a = Kh, o = !1) {
  const r = `${e.text}`;
  if (!r)
    return [];
  const s = Array.isArray(a) ? a : [a];
  return r.split(`
`).map((u) => {
    const c = [];
    if (!t)
      return [u];
    const d = yB(u, s);
    let f = "";
    for (let p = 0; p < d.length; p += 1) {
      (n ? Mr(f + d[p], e.fontSize, e.fontWidthToHeightRatio) : Br(f + d[p], e.fontFamily, e.fontSize)) < t || p === 0 ? f += d[p] : (c.push(f.trim()), f = d[p]);
      const m = 2;
      if (o)
        for (; f.trim().length > m && (n ? Mr(f, e.fontSize, e.fontWidthToHeightRatio) : Br(f, e.fontFamily, e.fontSize)) > t; ) {
          let b = f.trim().length - m;
          for (; b > 0; ) {
            const C = `${f.substring(0, b)}${jh}`;
            if ((n ? Mr(C, e.fontSize, e.fontWidthToHeightRatio) : Br(C, e.fontFamily, e.fontSize)) <= t || b === 1) {
              c.push(C.trim()), f = f.substring(b);
              break;
            }
            b--;
          }
        }
    }
    return f && c.push(f.trim()), c;
  }).flat();
}
function wB(e, t = void 0, n = void 0, a = !0, o = Kh, r = !1) {
  const s = Array.isArray(e) ? e.map((f) => Hn(cd, f)) : [Hn(cd, e)], i = s.map((f) => _B(f, t, a, o, r)), u = s[0];
  let c = -u.fontSize * (u.lineHeight - 1);
  const d = [];
  return s.forEach((f, p) => {
    var h;
    let m = i[p];
    const v = p > 0 ? d[p - 1] : void 0, b = v ? v.marginBottom : 0, C = f.marginTop, $ = Math.max(b, C);
    c += $;
    const k = f.fontSize * f.lineHeight;
    let D = 0;
    for (let T = 0; T < m.length; T += 1) {
      let A = m[T];
      c += k;
      const M = `${A} …`, N = a ? Mr(M, f.fontSize, f.fontWidthToHeightRatio) : Br(M, f.fontFamily, f.fontSize);
      if (D = Math.max(N, D), n && c + k > n && T !== m.length - 1) {
        A.charAt(A.length - 1) === jh && (A = A.substr(0, m[T].length - 1)), N < t ? m[T] = M : m[T] = `${m[T].substr(0, m[T].length - 2)}…`, m = m.slice(0, T + 1);
        break;
      }
    }
    d.push(Object.assign(Object.assign({}, f), { _lines: m, _estimatedHeight: c - ((v == null ? void 0 : v._estimatedHeight) || 0), _maxWidth: Math.max(D, (h = v == null ? void 0 : v._maxWidth) !== null && h !== void 0 ? h : 0) }));
  }), d;
}
function xB(e, t = 0, n) {
  return e.map((a, o) => {
    const r = o > 0 ? e[o - 1] : void 0, s = r ? r.marginBottom / r.fontSize : 0, i = a.marginTop / a.fontSize, u = Math.max(s, i), c = {
      fontSize: a.fontSize,
      fontFamily: a.fontFamily,
      fontWeight: a.fontWeight,
      fill: a.color,
      y: o === 0 && n
    };
    return `<tspan xmlns="http://www.w3.org/2000/svg" ${Object.entries(c).filter(([f, p]) => p).map(([f, p]) => `${fB(f)}="${pB(p.toString())}"`).join(" ")}>${a._lines.map((f, p) => {
      let h;
      return o === 0 && p === 0 ? h = 0.8 + u : p === 0 ? h = u + a.lineHeight : h = a.lineHeight, `<tspan x="${t}" dy="${h}em">${f.length ? f : " "}</tspan>`;
    }).join("")}</tspan>`;
  });
}
function CB(e) {
  return Uk(e, (t) => t._estimatedHeight);
}
const kB = ["text", "tspan", "textPath", "altGlyph", "altGlyphDef", "altGlyphItem", "glyphRef", "textRef", "textArea"];
function $B(e, t, n, a) {
  var o, r;
  const s = wB(t, n.width, void 0, n.fastMode, n.separator, n.wordBreak), i = (o = n.x) !== null && o !== void 0 ? o : +e.getAttribute("x"), u = (r = n.y) !== null && r !== void 0 ? r : +e.getAttribute("y"), c = i ?? 0;
  let d = u ?? 0;
  if (n.textAlign && e.setAttribute("text-anchor", dB(n.textAlign)), n.verticalAlign && n.verticalAlign !== Ln.Top) {
    const f = CB(s), p = n.verticalAlign === Ln.Middle ? -f / 2 : n.verticalAlign === Ln.Bottom ? -f : 0;
    d += p;
  }
  n.textRotationAngle ? e.setAttribute("transform", `rotate(${n.textRotationAngle === 0 || n.textRotationAngle ? n.textRotationAngle : 0} ${c} ${d})`) : e.removeAttribute("transform");
  {
    const f = new DOMParser();
    e.textContent = "", s.forEach((p) => {
      const h = xB([p], c, d).join(""), m = cB(h, kB), v = f.parseFromString(m, "image/svg+xml").firstChild;
      e.appendChild(v);
    });
  }
}
const SB = Object.assign(Object.assign({}, Hs), { position: void 0, type: void 0, label: void 0, labelFontSize: null, gridLine: !0, tickLine: !0, domainLine: !0, numTicks: void 0, minMaxTicksOnly: !1, minMaxTicksOnlyWhenWidthIsLess: 250, tickTextWidth: void 0, tickTextSeparator: void 0, tickTextForceWordBreak: !1, tickTextTrimType: Nn.Middle, tickTextFitMode: cs.Wrap, tickTextFontSize: null, tickTextAlign: void 0, tickTextColor: null, tickTextAngle: void 0, labelMargin: 8, labelColor: null, tickFormat: void 0, tickValues: void 0, fullSize: !0, tickPadding: 8, tickTextHideOverlapping: void 0 }), em = Ce`
  label: axis-component;
`, TB = Wa`
  :root {
    // Undefined by default to allow proper fallback to var(--vis-font-family)
    /* --vis-axis-font-family: */
    --vis-axis-tick-color: #e8e9ef;
    /* --vis-axis-domain-color: // Undefined by default to allow fallback to var(--vis-axis-tick-color) */
    --vis-axis-grid-color: #e8e9ef;
    --vis-axis-label-color: #6c778c;
    --vis-axis-tick-label-color: #6c778c;
    --vis-axis-tick-label-font-size: 12px;
    --vis-axis-tick-label-cursor: default;
    --vis-axis-tick-label-text-decoration: none;
    --vis-axis-label-font-size: 14px;
    --vis-axis-tick-line-width: 1px;
    --vis-axis-tick-label-hide-transition: opacity 400ms ease-in-out;
    --vis-axis-grid-line-width: 1px;
    /* --vis-axis-domain-line-width: // Undefined by default to allow fallback to var(--vis-axis-grid-line-width) */

    --vis-dark-axis-tick-color: #6c778c;
    /* --vis-dark-axis-domain-color: // Undefined by default to allow fallback to var(--vis-dark-axis-tick-color) */
    --vis-dark-axis-tick-label-color: #e8e9ef;
    --vis-dark-axis-grid-color: #6c778c;
    --vis-dark-axis-label-color: #fefefe;
  }

  body.theme-dark ${`.${em}`} {
    --vis-axis-tick-color: var(--vis-dark-axis-tick-color);
    --vis-axis-domain-color: var(--vis-dark-axis-domain-color);
    --vis-axis-tick-label-color: var(--vis-dark-axis-tick-label-color);
    --vis-axis-grid-color: var(--vis-dark-axis-grid-color);
    --vis-axis-label-color: var(--vis-dark-axis-label-color);
  }
`, tc = Ce`
  label: hide-tick-line;
`, nc = Ce`
  label: hide-domain;
`, tm = Ce`
  label: axis;

  user-select: none;

  .domain {
    stroke: var(--vis-axis-domain-color, var(--vis-axis-tick-color));
    stroke-width: var(--vis-axis-domain-line-width, var(--vis-axis-grid-line-width));
  }

  &${`.${tc}`} {
    .tick > line {
      opacity: 0;
    }
  }

  &${`.${nc}`} {
    .domain {
      opacity: 0;
    }
  }
`, nm = Ce`
  label: grid;

  .domain {
    opacity: 0;
  }

  line {
    stroke: var(--vis-axis-grid-color);
    stroke-width: var(--vis-axis-grid-line-width);
  }
`, am = Ce`
  label: tick;

  stroke: none;
  font-size: var(--vis-axis-tick-label-font-size);

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
`, _l = Ce`
  label: label;
  fill: var(--vis-axis-label-color);
  font-size: var(--vis-axis-label-font-size);
  font-family: var(--vis-axis-font-family, var(--vis-font-family));
  text-anchor: middle;
`, om = Ce`
  label: tick-label;
`, rm = Ce`
  label: tick-label-hideable;
  opacity: 0;
  transition: var(--vis-axis-tick-label-hide-transition);
`, DB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  axis: tm,
  globalStyles: TB,
  grid: nm,
  hideDomain: nc,
  hideTickLine: tc,
  label: _l,
  root: em,
  tick: am,
  tickLabel: om,
  tickLabelHideable: rm
}, Symbol.toStringTag, { value: "Module" }));
class qs extends Xu {
  constructor(t) {
    super(), this._defaultConfig = SB, this.config = this._defaultConfig, this._defaultNumTicks = 3, this.events = {}, t && this.setConfig(t), this.axisGroup = this.g.append("g"), this.gridGroup = this.g.append("g").attr("class", nm);
  }
  /** Renders axis to an invisible grouped to calculate automatic chart margins */
  preRender() {
    const { config: t } = this, n = this.g.append("g").attr("opacity", 0);
    this._renderAxis(n, 0), this._axisRawBBox = n.node().getBBox(), t.tickTextAlign && this._alignTickLabels(), this._renderAxisLabel(n), this._axisSizeBBox = this._getAxisSize(n), this._requiredMargin = this._getRequiredMargin(this._axisSizeBBox), n.remove();
  }
  getPosition() {
    const { config: { type: t, position: n } } = this;
    return n ?? (t === we.X ? J.Bottom : J.Left);
  }
  _getAxisSize(t) {
    return t.node().getBBox();
  }
  _getRequiredMargin(t = this._axisSizeBBox) {
    const { config: { type: n, position: a } } = this;
    switch (n) {
      case we.X: {
        const r = this._axisSizeBBox.x + this._axisSizeBBox.width, s = this._axisSizeBBox.x < 0 ? Math.abs(this._axisSizeBBox.x) : 0, i = r - this._width > 1 ? r - this._width : 0;
        switch (a) {
          case J.Top:
            return { top: t.height, left: s, right: i };
          case J.Bottom:
          default:
            return { bottom: t.height, left: s, right: i };
        }
      }
      case we.Y: {
        const o = t.height > this._height ? (t.height - this._height) / 2 : 0, r = o, s = o;
        switch (a) {
          case J.Right:
            return { right: t.width, top: r, bottom: s };
          case J.Left:
          default:
            return { left: t.width, top: r, bottom: s };
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
      case we.X:
        switch (a) {
          case J.Top:
            return { top: t.top, left: t.left };
          case J.Bottom:
          default:
            return { top: t.top + this._height, left: t.left };
        }
      case we.Y:
        switch (a) {
          case J.Right:
            return { top: t.top, left: t.left + this._width };
          case J.Left:
          default:
            return { top: t.top, left: t.left };
        }
    }
  }
  _render(t = this.config.duration, n = this.axisGroup) {
    const { config: a } = this;
    if (this._renderAxis(n, t), this._renderAxisLabel(n), a.gridLine) {
      const o = this._buildGrid().tickFormat(() => "");
      o.tickValues(this._getConfiguredTickValues()), this.gridGroup.selectAll("*").interrupt(), Zt(this.gridGroup, t).call(o).style("opacity", 1);
    } else
      Zt(this.gridGroup, t).style("opacity", 0);
    a.tickTextAlign && this._alignTickLabels(), this._resolveTickLabelOverlap(n);
  }
  _buildAxis() {
    const { config: { type: t, position: n, tickPadding: a } } = this, o = this._getNumTicks();
    switch (t) {
      case we.X:
        switch (n) {
          case J.Top:
            return af(this.xScale).ticks(o).tickPadding(a);
          case J.Bottom:
          default:
            return rf(this.xScale).ticks(o).tickPadding(a);
        }
      case we.Y:
        switch (n) {
          case J.Right:
            return of(this.yScale).ticks(o).tickPadding(a);
          case J.Left:
          default:
            return sf(this.yScale).ticks(o).tickPadding(a);
        }
    }
  }
  _buildGrid() {
    const { config: { type: t, position: n } } = this, a = this._getNumTicks();
    switch (t) {
      case we.X:
        switch (n) {
          case J.Top:
            return af(this.xScale).ticks(a * 2).tickSize(-this._height).tickSizeOuter(0);
          case J.Bottom:
          default:
            return rf(this.xScale).ticks(a * 2).tickSize(-this._height).tickSizeOuter(0);
        }
      case we.Y:
        switch (n) {
          case J.Right:
            return of(this.yScale).ticks(a * 2).tickSize(-this._width).tickSizeOuter(0);
          case J.Left:
          default:
            return sf(this.yScale).ticks(a * 2).tickSize(-this._width).tickSizeOuter(0);
        }
    }
  }
  _renderAxis(t = this.axisGroup, n = this.config.duration) {
    const { config: a } = this, o = this._buildAxis(), r = this._getConfiguredTickValues() || o.scale().ticks(this._getNumTicks());
    o.tickValues(r), t.selectAll("*").interrupt(), Zt(t, n).call(o);
    const s = t.selectAll("g.tick");
    s.classed(am, !0).style("font-size", a.tickTextFontSize);
    const i = t.selectAll("g.tick > text").filter((u) => r.some((c) => wo(u, c))).classed(om, !0).classed(rm, !!a.tickTextHideOverlapping).style("fill", a.tickTextColor);
    if (i.nodes().forEach((u) => Ou(u)), i.each((u, c, d) => {
      var f, p;
      let h = (p = (f = a.tickFormat) === null || f === void 0 ? void 0 : f.call(a, u, c, r)) !== null && p !== void 0 ? p : `${u}`;
      const m = d[c], v = a.tickTextWidth || (a.type === we.X ? this._containerWidth / (s.size() + 1) : this._containerWidth / 5), b = getComputedStyle(m), C = Number.parseFloat(b.fontSize), $ = b.fontFamily, k = {
        verticalAlign: a.type === we.X ? Ln.Top : Ln.Middle,
        width: v,
        textRotationAngle: a.tickTextAngle,
        separator: a.tickTextSeparator,
        wordBreak: a.tickTextForceWordBreak
      };
      if (a.tickTextFitMode === cs.Trim) {
        const T = Xe(m).text(h);
        bB(T, v, a.tickTextTrimType, !0, C, 0.58), h = Xe(m).text();
      }
      $B(m, { text: h, fontFamily: $, fontSize: C }, k);
    }), t.classed(tm, !0).classed(tc, !a.tickLine).classed(nc, !a.domainLine), a.fullSize) {
      const u = this._getFullDomainPath(0);
      Zt(t.select(".domain"), n).attr("d", u);
    }
  }
  _resolveTickLabelOverlap(t = this.axisGroup) {
    const { config: n } = this, a = t.selectAll("g.tick > text");
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
      const s = r[o];
      s._visible = !0;
    });
    const n = 3;
    for (let a = 0; a < n; a += 1)
      t.each((o, r, s) => {
        const i = s[r];
        if (!i._visible)
          return;
        const c = i.getBoundingClientRect();
        for (let d = r + 1; d < s.length; d += 1) {
          if (r === d)
            continue;
          const f = s[d];
          if (f._visible) {
            const h = f.getBoundingClientRect();
            if (u2(c, h, -5)) {
              f._visible = !1;
              break;
            }
          }
        }
      });
    t.each((a, o, r) => {
      const s = r[o];
      Xe(s).style("opacity", s._visible ? 1 : 0);
    });
  }
  _getNumTicks() {
    const { config: { type: t, numTicks: n } } = this;
    if (n)
      return n;
    if (t === we.X) {
      const a = this.xScale.range(), o = a[1] - a[0];
      return Math.floor(o / 175);
    }
    if (t === we.Y) {
      const a = this.yScale.range(), o = Math.abs(a[0] - a[1]);
      return Math.pow(o, 0.85) / 25;
    }
    return this._defaultNumTicks;
  }
  _getConfiguredTickValues() {
    const { config: t } = this, n = t.type === we.X ? this.xScale : this.yScale, a = n == null ? void 0 : n.domain();
    return t.tickValues ? t.tickValues.filter((o) => o >= a[0] && o <= a[1]) : t.minMaxTicksOnly || t.type === we.X && this._width < t.minMaxTicksOnlyWhenWidthIsLess ? a : null;
  }
  _getFullDomainPath(t = 0) {
    const { config: { type: n } } = this;
    switch (n) {
      case we.X:
        return `M0.5, ${t} V0.5 H${this._width + 0.5} V${t}`;
      case we.Y:
        return `M${-t}, ${this._height + 0.5} H0.5 V0.5 H${-t}`;
    }
  }
  _renderAxisLabel(t = this.axisGroup) {
    var n;
    const { type: a, label: o, labelMargin: r, labelFontSize: s } = this.config;
    t.selectAll(`.${_l}`).remove();
    const i = this.getPosition(), { width: u, height: c } = (n = this._axisRawBBox) !== null && n !== void 0 ? n : t.node().getBBox(), d = a === we.X ? this._width / 2 : Math.pow(-1, +(i === J.Left)) * u, f = a === we.X ? Math.pow(-1, +(i === J.Top)) * c : this._height / 2, p = a === we.X ? 0 : Math.pow(-1, +(i === J.Left)) * r, h = a === we.X ? Math.pow(-1, +(i === J.Top)) * r : 0, m = a === we.Y ? -90 : 0;
    t.append("text").attr("class", _l).text(o).attr("dy", `${this._getLabelDY()}em`).attr("transform", `translate(${d + p},${f + h}) rotate(${m})`).style("font-size", s).style("fill", this.config.labelColor);
  }
  _getLabelDY() {
    const { type: t, position: n } = this.config;
    switch (t) {
      case we.X:
        switch (n) {
          case J.Top:
            return 0;
          case J.Bottom:
          default:
            return 0.75;
        }
      case we.Y:
        switch (n) {
          case J.Right:
            return 0.75;
          case J.Left:
          default:
            return -0.25;
        }
    }
  }
  _alignTickLabels() {
    const { config: { type: t, tickTextAlign: n, tickTextAngle: a, position: o } } = this, r = this.g.selectAll("g.tick > text"), s = this._getTickTextAnchor(n), i = t === we.X ? 0 : this._getYTickTextTranslate(n, o), u = a ? `translate(${i},0) rotate(${a})` : `translate(${i},0)`;
    r.attr("transform", u).attr("text-anchor", s);
  }
  _getTickTextAnchor(t) {
    switch (t) {
      case vt.Left:
        return "start";
      case vt.Right:
        return "end";
      case vt.Center:
        return "middle";
      default:
        return null;
    }
  }
  _getYTickTextTranslate(t, n = J.Left) {
    const o = this._axisRawBBox.width - 9;
    switch (t) {
      case vt.Left:
        return n === J.Left ? o * -1 : 0;
      case vt.Right:
        return n === J.Left ? 0 : o;
      case vt.Center:
        return n === J.Left ? o * -0.5 : o * 0.5;
      default:
        return 0;
    }
  }
}
qs.selectors = DB;
var Mt;
(function(e) {
  e.Circle = "circle", e.Cross = "cross", e.Diamond = "diamond", e.Square = "square", e.Star = "star", e.Triangle = "triangle", e.Wye = "wye";
})(Mt || (Mt = {}));
const MB = {
  [Mt.Circle]: Nv,
  [Mt.Cross]: dM,
  [Mt.Diamond]: pM,
  [Mt.Square]: hM,
  [Mt.Star]: yM,
  [Mt.Triangle]: bM,
  [Mt.Wye]: wM
}, Qe = Object.assign(Object.assign({}, Mt), { Line: "line" });
var ds;
(function(e) {
  e.Horizontal = "horizontal", e.Vertical = "vertical";
})(ds || (ds = {}));
const BB = {
  items: [],
  labelClassName: "",
  onLegendItemClick: void 0,
  labelFontSize: null,
  labelMaxWidth: null,
  bulletSize: null,
  bulletShape: (e) => {
    var t;
    return (t = e.shape) !== null && t !== void 0 ? t : Qe.Circle;
  },
  orientation: ds.Horizontal,
  renderIntoProvidedDomNode: !1
}, Si = Do * 3, AB = {
  [Qe.Circle]: Math.PI / 4,
  [Qe.Cross]: 5 / 9,
  [Qe.Diamond]: Math.sqrt(3) / 6,
  [Qe.Square]: 1,
  [Qe.Star]: 0.3,
  [Qe.Triangle]: Math.sqrt(3) / 4,
  [Qe.Wye]: 5 / 11
};
function OB(e) {
  e.each((t, n, a) => {
    Xe(a[n]).append("svg").attr("width", "100%").attr("height", "100%").append("path");
  });
}
function EB(e, t, n) {
  e.each((a, o, r) => {
    const s = Cu(a, t.bulletShape, o), i = Pn(a, n, o), u = Si, c = s === Qe.Line ? Si / 2.5 : Si, f = Xe(r[o]).select("svg").attr("viewBox", `0 0 ${u} ${c}`).select("path").attr("stroke", i), p = a.inactive ? "var(--vis-legend-bullet-inactive-opacity)" : 1;
    if (s === Qe.Line)
      f.attr("d", `M0,${c / 2} L${u / 2},${c / 2} L${u},${c / 2}`).attr("transform", null).style("opacity", p).style("stroke-width", "3px").style("fill", null).style("fill-opacity", null).style("marker-start", "none").style("marker-end", "none");
    else {
      const h = xM().type(MB[s]).size(u * c * AB[s]), m = (u - 2) / u;
      let v = c / 2;
      switch (s) {
        case Qe.Triangle:
          v += c / 8;
          break;
        case Qe.Star:
          v += c / 16;
          break;
        case Qe.Wye:
          v -= c / 16;
          break;
      }
      f.attr("d", h).attr("transform", `translate(${u / 2}, ${Math.round(v)}) scale(${m})`).style("stroke-width", "1px").style("opacity", null).style("fill", i).style("fill-opacity", p);
    }
  });
}
const ac = Ce`
  label: bullet-legend-component;
`, PB = Wa`
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

  body.theme-dark ${`.${ac}`} {
    --vis-legend-label-color: var(--vis-dark-legend-label-color);
  }

  body.theme-patterns {
    --vis-legend-bullet-size: 14px;
  }
`, Ar = Ce`
  label: legendItem;
  display: inline-flex;
  align-items: center;
  font-family: var(--vis-legend-font-family, var(--vis-font-family));
  margin-right: var(--vis-legend-item-spacing);
  white-space: nowrap;
  cursor: default;
  user-select: none;
  max-width: min-content;
`, sm = Ce`
  label: legendItemVertical;
  display: flex;
  margin-top: var(--vis-legend-vertical-item-spacing);
`, im = Ce`
  cursor: pointer;
`, wl = Ce`
  label: legendItemLabel;
  font-size: var(--vis-legend-label-font-size);
  display: inline-block;
  vertical-align: middle;
  color: var(--vis-legend-label-color);
  max-width: var(--vis-legend-label-max-width);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`, xl = Ce`
  flex: 0 0 auto;
  label: legendItemBullet;
  margin-right: var(--vis-legend-bullet-label-spacing);
  height: var(--vis-legend-bullet-size);
  width: var(--vis-legend-bullet-size);

  svg {
    display: block;
  }
`, RB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bullet: xl,
  clickable: im,
  item: Ar,
  itemVertical: sm,
  label: wl,
  root: ac,
  variables: PB
}, Symbol.toStringTag, { value: "Module" }));
class oc {
  constructor(t, n) {
    this._defaultConfig = BB, this.config = this._defaultConfig, this._colorAccessor = (a) => a.color, this._container = t, this.div = n != null && n.renderIntoProvidedDomNode ? Xe(this._container) : Xe(this._container).append("div"), this.div.classed(ac, !0), this.element = this.div.node(), n && this.update(n);
  }
  update(t) {
    this.prevConfig = this.config, this.config = Hn(this._defaultConfig, t), this.render();
  }
  render() {
    const { config: t } = this, n = this.div.selectAll(`.${Ar}`).data(t.items), a = n.enter().append("div").on("click", this._onItemClick.bind(this)), o = a.merge(n);
    o.attr("class", (r) => {
      var s;
      return `${Ar} ${(s = r.className) !== null && s !== void 0 ? s : ""}`;
    }).classed(sm, t.orientation === ds.Vertical).classed(im, (r) => !!t.onLegendItemClick && this._isItemClickable(r)).attr("title", (r) => r.name).style("display", (r) => r.hidden ? "none" : null), a.append("span").attr("class", xl).call(OB), o.select(`.${xl}`).style("width", t.bulletSize).style("height", t.bulletSize).style("box-sizing", "content-box").call(EB, this.config, this._colorAccessor), a.append("span").attr("class", wl).classed(t.labelClassName, !0).style("max-width", t.labelMaxWidth).style("font-size", t.labelFontSize), o.select(`.${wl}`).text((r) => r.name), n.exit().remove();
  }
  _isItemClickable(t) {
    return t.pointer === void 0 ? !0 : t.pointer;
  }
  _onItemClick(t, n) {
    const { config: { onLegendItemClick: a } } = this, r = this.div.selectAll(`.${Ar}`).nodes().indexOf(t.currentTarget);
    a && a(n, r);
  }
  destroy() {
    this.element !== this._container && this.div.remove();
  }
}
oc.selectors = RB;
const IB = Object.assign(Object.assign({}, Hs), { yStacked: void 0, baseline: null, duration: 100, tooltip: void 0, template: (e, t) => "", hideWhenFarFromPointer: !0, hideWhenFarFromPointerDistance: 100, snapToData: !0, getCircles: void 0, color: void 0, strokeColor: void 0, strokeWidth: void 0 }), FB = Wa`
  :root {
    --vis-crosshair-line-stroke-color: #888;
    --vis-crosshair-line-stroke-width: 1px;
    --vis-crosshair-line-stroke-opacity: 1;
    --vis-crosshair-circle-stroke-color: #fff;
    --vis-crosshair-circle-stroke-width: 1px;
    --vis-crosshair-circle-stroke-opacity: 0.75;
  }
`, VB = Ce`
  label: crosshair-component;
`, lm = Ce`
  stroke: var(--vis-crosshair-line-stroke-color);
  stroke-width: var(--vis-crosshair-line-stroke-width);
  stroke-opacity: var(--vis-crosshair-line-stroke-opacity);
  pointer-events: none;
`, um = Ce`
  stroke: var(--vis-crosshair-circle-stroke-color);
  stroke-width: var(--vis-crosshair-circle-stroke-width);
  stroke-opacity: var(--vis-crosshair-circle-stroke-opacity);
  pointer-events: none;
`, NB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  circle: um,
  globalStyles: FB,
  line: lm,
  root: VB
}, Symbol.toStringTag, { value: "Module" }));
class cm extends Xu {
  constructor(t) {
    super(), this.clippable = !0, this._defaultConfig = IB, this.config = this._defaultConfig, this.x = 0, this.show = !1, this._animFrameId = null, this._accessors = {
      x: void 0,
      y: void 0,
      yStacked: void 0,
      baseline: void 0
    }, t && this.setConfig(t), this.g.style("opacity", this.show ? 1 : 0), this.line = this.g.append("line").attr("class", lm);
  }
  set accessors(t) {
    this._accessors = t;
  }
  get accessors() {
    var t;
    const { config: n } = this, a = !!(n.x || n.y || n.yStacked), o = a ? n.x : this._accessors.x, r = a ? n.y : this._accessors.y, s = r ? Es(r) ? r : [r] : void 0, i = a ? n.yStacked : this._accessors.yStacked, u = (t = n.baseline) !== null && t !== void 0 ? t : this._accessors.baseline;
    return { x: o, y: s, yStacked: i, baseline: u };
  }
  setContainer(t) {
    this.container = t, this.container.on("mousemove.crosshair", this._onMouseMove.bind(this)), this.container.on("mouseout.crosshair", this._onMouseOut.bind(this));
  }
  _render(t) {
    const { config: n } = this;
    if (n.snapToData && !this.datum)
      return;
    const a = yn(t) ? t : n.duration;
    Zt(this.g, a).style("opacity", this.show ? 1 : 0), this.line.attr("y1", 0).attr("y1", this._height), Zt(this.line, a, gd).attr("x1", this.x).attr("x2", this.x);
    const o = this.getCircleData(), r = this.g.selectAll("circle").data(o, (i, u) => {
      var c;
      return (c = i.id) !== null && c !== void 0 ? c : u;
    }), s = r.enter().append("circle").attr("class", um).attr("r", 0).attr("cx", this.x).attr("cy", (i) => i.y).style("fill", (i) => i.color).style("stroke", (i) => i.strokeColor).style("stroke-width", (i) => i.strokeWidth);
    Zt(s.merge(r), a, gd).attr("cx", this.x).attr("cy", (i) => i.y).attr("r", 4).style("opacity", (i) => i.opacity).style("fill", (i) => i.color).style("stroke", (i) => i.strokeColor).style("stroke-width", (i) => i.strokeWidth), r.exit().remove();
  }
  hide() {
    this._onMouseOut();
  }
  _onMouseMove(t) {
    var n, a;
    const { config: o, datamodel: r, element: s } = this;
    !this.accessors.x && (!((n = r.data) === null || n === void 0) && n.length) && console.warn("Unovis | Crosshair: X accessor function has not been configured. Please check if it's present in the configuration object");
    const [i] = zr(t, s), u = this.xScale.range();
    if (o.snapToData) {
      !this.accessors.y && !this.accessors.yStacked && (!((a = r.data) === null || a === void 0) && a.length) && console.warn("Unovis | Crosshair: Y accessors have not been configured. Please check if they're present in the configuration object");
      const c = this.xScale, d = c.invert(i);
      if (this.datum = qk(r.data, d, this.accessors.x), this.datumIndex = r.data.indexOf(this.datum), !this.datum)
        return;
      this.x = mn(Math.round(c(tt(this.datum, this.accessors.x, this.datumIndex))), 0, this._width), this.show = this.x >= 0 && this.x <= this._width && (!o.hideWhenFarFromPointer || Math.abs(this.x - i) < o.hideWhenFarFromPointerDistance);
    } else
      this.x = mn(i, u[0], u[1]), this.show = i >= u[0] - 2 && i <= u[1] + 2;
    window.cancelAnimationFrame(this._animFrameId), this._animFrameId = window.requestAnimationFrame(() => {
      this._render();
    }), this.show ? this._showTooltip(t) : this._hideTooltip();
  }
  _onMouseOut() {
    this.show = !1, window.cancelAnimationFrame(this._animFrameId), this._animFrameId = window.requestAnimationFrame(() => {
      this._render();
    }), this._hideTooltip();
  }
  _showTooltip(t) {
    var n;
    const { config: a } = this, o = (n = a.tooltip) !== null && n !== void 0 ? n : this.tooltip;
    if (!o)
      return;
    const r = o.getContainer() || this.container.node(), [s, i] = o.isContainerBody() ? [t.clientX, t.clientY] : zr(t, r), u = a.template(this.datum, this.xScale.invert(this.x));
    if (o.config.followCursor = !0, !o.config.horizontalPlacement || o.config.horizontalPlacement === J.Auto) {
      const c = o.isContainerBody() ? s - this.container.node().getBoundingClientRect().left : s;
      o.overrideHorizontalPlacement(c > this._containerWidth / 2 ? J.Left : J.Right);
    }
    u && o.show(u, { x: s, y: i });
  }
  _hideTooltip() {
    var t;
    const { config: n } = this, a = (t = n.tooltip) !== null && t !== void 0 ? t : this.tooltip;
    a == null || a.hide();
  }
  // We don't want Crosshair to be be taken in to account in domain calculations
  getYDataExtent() {
    return [void 0, void 0];
  }
  getCircleData() {
    var t, n;
    const { config: a, datamodel: { data: o } } = this;
    if (wu(a.getCircles))
      return a.getCircles(this.xScale.invert(this.x), o, this.yScale);
    if (a.snapToData && this.datum) {
      const r = (t = this.accessors.y) !== null && t !== void 0 ? t : [], s = (n = this.accessors.yStacked) !== null && n !== void 0 ? n : [], i = tt(this.datum, this.accessors.baseline, this.datumIndex) || 0, u = Kk(this.datum, this.datumIndex, ...s).map((d, f, p) => ({
        y: this.yScale(d + i),
        opacity: yn(tt(this.datum, s[f])) ? 1 : 0,
        color: Pn(this.datum, a.color, f),
        strokeColor: a.strokeColor ? Pn(this.datum, a.strokeColor, f) : void 0,
        strokeWidth: a.strokeWidth ? tt(this.datum, a.strokeWidth, f) : void 0
      })), c = r.map((d, f) => {
        const p = tt(this.datum, d);
        return {
          y: this.yScale(p),
          opacity: yn(p) ? 1 : 0,
          color: Pn(this.datum, a.color, u.length + f),
          strokeColor: a.strokeColor ? Pn(this.datum, a.strokeColor, f) : void 0,
          strokeWidth: a.strokeWidth ? tt(this.datum, a.strokeWidth, f) : void 0
        };
      });
      return u.concat(c);
    }
    return [];
  }
}
cm.selectors = NB;
const dm = Symbol("componentAccessorKey"), fm = Symbol("tooltipAccessorKey"), pm = Symbol("crosshairAccessorKey"), hm = Symbol("axisAccessorKey"), LB = Symbol("annotationsAccessorKey");
function Go(e, t) {
  return wo(e, t);
}
function ja(e) {
  const t = wt(), n = t.attrs;
  return S(() => {
    const a = {}, o = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(o).forEach((r) => {
      a[Or(r)] = e[Or(r)];
    }), { ...a, ...n };
  });
}
const zB = /* @__PURE__ */ _({
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
    const n = e, { data: a } = _e(n), o = ja(n), r = R(), s = Dl({
      components: [],
      annotations: void 0,
      crosshair: void 0,
      tooltip: void 0,
      xAxis: void 0,
      yAxis: void 0
    }), i = R();
    return te(a, () => {
      r.value && r.value.setData(a.value, !0);
    }), De(() => {
      var u;
      s.components.map((c) => c.config), (u = r.value) == null || u.updateContainer({ ...mr(o.value), ...mr(s) });
    }), pe(() => {
      i.value && (r.value = new ZD(i.value, { ...mr(s) }, a.value));
    }), Je(() => {
      var u;
      return (u = r.value) == null ? void 0 : u.destroy();
    }), Bn(dm, {
      data: a,
      update: (u) => s.components = [...s.components, u],
      destroy: () => {
        var u;
        return s.components = (u = s.components) == null ? void 0 : u.filter((c) => !c.isDestroyed());
      }
    }), Bn(hm, {
      data: a,
      update: (u) => s[`${u.config.type}Axis`] = u,
      destroy: (u) => {
        s[`${u}Axis`] = void 0;
      }
    }), Bn(pm, {
      data: a,
      update: (u) => s.crosshair = u,
      destroy: () => {
        s.crosshair = void 0;
      }
    }), Bn(fm, {
      data: a,
      update: (u) => s.tooltip = u,
      destroy: () => {
        s.tooltip = void 0;
      }
    }), Bn(LB, {
      data: a,
      update: (u) => s.annotations = u,
      destroy: () => {
        s.annotations = void 0;
      }
    }), t({
      component: r
    }), (u, c) => (g(), L("div", {
      "data-vis-xy-container": "",
      ref_key: "elRef",
      ref: i,
      class: "unovis-xy-container"
    }, [
      x(u.$slots, "default")
    ], 512));
  }
}), UB = { "data-vis-axis": "" };
qs.selectors;
const lf = /* @__PURE__ */ _({
  __name: "index",
  props: {
    position: {},
    type: {},
    fullSize: { type: Boolean },
    label: {},
    labelFontSize: {},
    labelMargin: {},
    labelColor: {},
    gridLine: { type: Boolean },
    tickLine: { type: Boolean },
    domainLine: { type: Boolean },
    minMaxTicksOnly: { type: Boolean },
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
    const n = Aa(hm), a = e, o = S(() => n.data.value ?? a.data), r = ja(a), s = R();
    return pe(() => {
      se(() => {
        var i;
        s.value = new qs(r.value), (i = s.value) == null || i.setData(o.value), n.update(s.value);
      });
    }), Je(() => {
      var i;
      (i = s.value) == null || i.destroy(), n.destroy(a.type);
    }), te(r, (i, u) => {
      var c;
      Go(i, u) || (c = s.value) == null || c.setConfig(r.value);
    }), te(o, () => {
      var i;
      (i = s.value) == null || i.setData(o.value);
    }), t({
      component: s
    }), (i, u) => (g(), L("div", UB));
  }
}), HB = { "data-vis-crosshair": "" }, WB = /* @__PURE__ */ _({
  __name: "index",
  props: {
    data: {}
  },
  setup(e, { expose: t }) {
    const n = Aa(pm), a = e, o = S(() => n.data.value ?? a.data), r = ja(a), s = R();
    return pe(() => {
      se(() => {
        var i;
        s.value = new cm(r.value), (i = s.value) == null || i.setData(o.value), n.update(s.value);
      });
    }), Je(() => {
      var i;
      (i = s.value) == null || i.destroy(), n.destroy();
    }), te(r, (i, u) => {
      var c;
      Go(i, u) || (c = s.value) == null || c.setConfig(r.value);
    }), te(o, () => {
      var i;
      (i = s.value) == null || i.setData(o.value);
    }), t({
      component: s
    }), (i, u) => (g(), L("div", HB));
  }
}), YB = { "data-vis-component": "" };
Ka.selectors;
const KB = /* @__PURE__ */ _({
  __name: "index",
  props: {
    color: {},
    curveType: {},
    lineWidth: {},
    lineDashArray: {},
    fallbackValue: {},
    highlightOnHover: { type: Boolean },
    cursor: {},
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
    const n = Aa(dm), a = e, o = S(() => n.data.value ?? a.data), r = ja(a), s = R();
    return pe(() => {
      se(() => {
        var i;
        s.value = new Ka(r.value), (i = s.value) == null || i.setData(o.value), n.update(s.value);
      });
    }), Je(() => {
      var i;
      (i = s.value) == null || i.destroy(), n.destroy();
    }), te(r, (i, u) => {
      var c;
      Go(i, u) || (c = s.value) == null || c.setConfig(r.value);
    }), te(o, () => {
      var i;
      (i = s.value) == null || i.setData(o.value);
    }), t({
      component: s
    }), (i, u) => (g(), L("div", YB));
  }
}), jB = { "data-vis-tooltip": "" }, GB = /* @__PURE__ */ _({
  __name: "index",
  props: {
    components: {},
    container: {},
    followCursor: { type: Boolean },
    allowHover: { type: Boolean },
    horizontalPlacement: {},
    horizontalShift: {},
    verticalPlacement: {},
    verticalShift: {},
    triggers: {},
    attributes: {},
    className: {},
    data: {}
  },
  setup(e, { expose: t }) {
    const n = Aa(fm), a = ja(e), o = R();
    return pe(() => {
      se(() => {
        o.value = new Ev(a.value), n.update(o.value);
      });
    }), Je(() => {
      var r;
      (r = o.value) == null || r.destroy(), n.destroy();
    }), te(a, (r, s) => {
      var i;
      Go(r, s) || (i = o.value) == null || i.setConfig(a.value);
    }), t({
      component: o
    }), (r, s) => (g(), L("div", jB));
  }
}), qB = /* @__PURE__ */ _({
  __name: "index",
  props: {
    items: {},
    labelClassName: {},
    onLegendItemClick: { type: Function },
    labelFontSize: {},
    labelMaxWidth: {},
    bulletSize: {},
    bulletShape: {},
    orientation: {},
    renderIntoProvidedDomNode: { type: Boolean },
    data: {}
  },
  setup(e, { expose: t }) {
    const n = e;
    S(() => n.data);
    const a = ja(n), o = R(), r = R();
    return pe(() => {
      se(() => {
        r.value && (o.value = new oc(r.value, { ...a.value, renderIntoProvidedDomNode: !0 }));
      });
    }), Je(() => {
      var s;
      (s = o.value) == null || s.destroy();
    }), te(a, (s, i) => {
      var u;
      Go(s, i) || (u = o.value) == null || u.update(a.value);
    }), t({
      component: o
    }), (s, i) => (g(), L("div", {
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
      e.appendChild(document.createTextNode(".unovis-xy-container,.unovis-single-container{display:block;position:relative;width:100%}[data-vis-leaflet-map],[data-vis-leaflet-flow-map]{display:block;position:relative}[data-vis-bullet-legend]{display:block}")), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
const XB = /* @__PURE__ */ _({
  __name: "ChartCrosshair",
  props: {
    colors: { default: () => [] },
    index: {},
    items: {},
    customTooltip: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ new WeakMap();
    function a(r) {
      if (n.has(r))
        return n.get(r);
      {
        const s = document.createElement("div"), i = Object.entries(Yk(r, [t.index])).map(([c, d]) => ({ ...t.items.find((p) => p.name === c), value: d })), u = t.customTooltip ?? aA;
        return zm(u, { title: r[t.index].toString(), data: i }).mount(
          s
        ), n.set(r, s.innerHTML), s.innerHTML;
      }
    }
    function o(r, s) {
      return t.colors[s] ?? "transparent";
    }
    return (r, s) => (g(), L(re, null, [
      O(l(GB), {
        "horizontal-shift": 20,
        "vertical-shift": 20
      }),
      O(l(WB), {
        template: a,
        color: o
      })
    ], 64));
  }
}), ZB = /* @__PURE__ */ _({
  __name: "ChartLegend",
  props: {
    items: { default: () => [] }
  },
  emits: ["legendItemClick", "update:items"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = R();
    pe(() => {
      const s = `.${oc.selectors.item}`;
      se(() => {
        var c;
        const i = (c = o.value) == null ? void 0 : c.querySelectorAll(s), u = Cn({ variant: "ghost", size: "xs" }).split(" ");
        i == null || i.forEach((d) => d.classList.add(...u, "!inline-flex", "!mr-2"));
      });
    });
    function r(s, i) {
      a("legendItemClick", s, i);
      const u = !n.items[i].inactive;
      n.items.some((d) => d.inactive) && u ? a(
        "update:items",
        n.items.map((d) => ({ ...d, inactive: !1 }))
      ) : a(
        "update:items",
        n.items.map(
          (d) => d.name === s.name ? { ...s, inactive: !1 } : { ...d, inactive: !0 }
        )
      );
    }
    return (s, i) => (g(), L("div", {
      ref_key: "elRef",
      ref: o,
      class: "w-max"
    }, [
      O(l(qB), {
        items: s.items,
        "on-legend-item-click": r
      }, null, 8, ["items"])
    ], 512));
  }
}), JB = { class: "flex items-center" }, QB = { class: "mr-2 h-2.5 w-2.5" }, eA = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 30 30"
}, tA = ["stroke", "fill"], nA = { class: "ml-4 font-semibold" }, aA = /* @__PURE__ */ _({
  __name: "ChartTooltip",
  props: {
    title: {},
    data: {}
  },
  setup(e) {
    return (t, n) => (g(), w(l(Yx), { class: "text-sm" }, {
      default: y(() => [
        t.title ? (g(), w(l(Kx), {
          key: 0,
          class: "border-b p-3"
        }, {
          default: y(() => [
            O(l(jx), null, {
              default: y(() => [
                ee(oe(t.title), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : ne("", !0),
        O(l(Gx), { class: "flex min-w-[180px] flex-col gap-1 p-3" }, {
          default: y(() => [
            (g(!0), L(re, null, $e(t.data, (a, o) => (g(), L("div", {
              key: o,
              class: "flex justify-between"
            }, [
              ce("div", JB, [
                ce("span", QB, [
                  (g(), L("svg", eA, [
                    ce("path", {
                      d: " M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0",
                      stroke: a.color,
                      fill: a.color,
                      "stroke-width": "1"
                    }, null, 8, tA)
                  ]))
                ]),
                ce("span", null, oe(a.name), 1)
              ]),
              ce("span", nA, oe(a.value), 1)
            ]))), 128))
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
function oA(e = 3) {
  const t = Math.floor(e / 2), n = e % 2, a = t + n, o = t;
  return [
    ...Array.from(new Array(a).keys()).map(
      (r) => `hsl(var(--vis-primary-color) / ${1 - 1 / a * r})`
    ),
    ...Array.from(new Array(o).keys()).map(
      (r) => `hsl(var(--vis-secondary-color) / ${1 - 1 / o * r})`
    )
  ];
}
function vm(e) {
  return Sl() ? (Tl(e), !0) : !1;
}
function Xs(e) {
  return typeof e == "function" ? e() : l(e);
}
const rA = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const sA = (e) => typeof e < "u", iA = Object.prototype.toString, lA = (e) => iA.call(e) === "[object Object]", mm = () => {
};
function uA(e, t) {
  function n(...a) {
    return new Promise((o, r) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(o).catch(r);
    });
  }
  return n;
}
const gm = (e) => e();
function cA(e = gm) {
  const t = R(!0);
  function n() {
    t.value = !1;
  }
  function a() {
    t.value = !0;
  }
  const o = (...r) => {
    t.value && e(...r);
  };
  return { isActive: Eo(t), pause: n, resume: a, eventFilter: o };
}
function dA(e) {
  return wt();
}
function fA(...e) {
  if (e.length !== 1)
    return yf(...e);
  const t = e[0];
  return typeof t == "function" ? Eo(xf(() => ({ get: t, set: mm }))) : R(t);
}
function pA(e, t, n = {}) {
  const {
    eventFilter: a = gm,
    ...o
  } = n;
  return te(
    e,
    uA(
      a,
      t
    ),
    o
  );
}
function hA(e, t, n = {}) {
  const {
    eventFilter: a,
    ...o
  } = n, { eventFilter: r, pause: s, resume: i, isActive: u } = cA(a);
  return { stop: pA(
    e,
    t,
    {
      ...o,
      eventFilter: r
    }
  ), pause: s, resume: i, isActive: u };
}
function ym(e, t = !0, n) {
  dA() ? pe(e, n) : t ? e() : se(e);
}
function bm(e) {
  var t;
  const n = Xs(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ma = rA ? window : void 0;
function Cl(...e) {
  let t, n, a, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, a, o] = e, t = Ma) : [t, n, a, o] = e, !t)
    return mm;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const r = [], s = () => {
    r.forEach((d) => d()), r.length = 0;
  }, i = (d, f, p, h) => (d.addEventListener(f, p, h), () => d.removeEventListener(f, p, h)), u = te(
    () => [bm(t), Xs(o)],
    ([d, f]) => {
      if (s(), !d)
        return;
      const p = lA(f) ? { ...f } : f;
      r.push(
        ...n.flatMap((h) => a.map((m) => i(d, h, m, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), s();
  };
  return vm(c), c;
}
function _m() {
  const e = R(!1), t = wt();
  return t && pe(() => {
    e.value = !0;
  }, t), e;
}
function vA(e) {
  const t = _m();
  return S(() => (t.value, !!e()));
}
function mA(e, t = {}) {
  const { window: n = Ma } = t, a = vA(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const r = R(!1), s = (c) => {
    r.value = c.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", s) : o.removeListener(s));
  }, u = De(() => {
    a.value && (i(), o = n.matchMedia(Xs(e)), "addEventListener" in o ? o.addEventListener("change", s) : o.addListener(s), r.value = o.matches);
  });
  return vm(() => {
    u(), i(), o = void 0;
  }), r;
}
function gA(e) {
  return JSON.parse(JSON.stringify(e));
}
const pr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hr = "__vueuse_ssr_handlers__", yA = /* @__PURE__ */ bA();
function bA() {
  return hr in pr || (pr[hr] = pr[hr] || {}), pr[hr];
}
function wm(e, t) {
  return yA[e] || t;
}
function _A(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const wA = {
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
}, uf = "vueuse-storage";
function xA(e, t, n, a = {}) {
  var o;
  const {
    flush: r = "pre",
    deep: s = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: u = !0,
    mergeDefaults: c = !1,
    shallow: d,
    window: f = Ma,
    eventFilter: p,
    onError: h = (B) => {
      console.error(B);
    },
    initOnMounted: m
  } = a, v = (d ? $l : R)(typeof t == "function" ? t() : t);
  if (!n)
    try {
      n = wm("getDefaultStorage", () => {
        var B;
        return (B = Ma) == null ? void 0 : B.localStorage;
      })();
    } catch (B) {
      h(B);
    }
  if (!n)
    return v;
  const b = Xs(t), C = _A(b), $ = (o = a.serializer) != null ? o : wA[C], { pause: k, resume: D } = hA(
    v,
    () => A(v.value),
    { flush: r, deep: s, eventFilter: p }
  );
  f && i && ym(() => {
    Cl(f, "storage", N), Cl(f, uf, V), m && N();
  }), m || N();
  function T(B, E) {
    f && f.dispatchEvent(new CustomEvent(uf, {
      detail: {
        key: e,
        oldValue: B,
        newValue: E,
        storageArea: n
      }
    }));
  }
  function A(B) {
    try {
      const E = n.getItem(e);
      if (B == null)
        T(E, null), n.removeItem(e);
      else {
        const I = $.write(B);
        E !== I && (n.setItem(e, I), T(E, I));
      }
    } catch (E) {
      h(E);
    }
  }
  function M(B) {
    const E = B ? B.newValue : n.getItem(e);
    if (E == null)
      return u && b != null && n.setItem(e, $.write(b)), b;
    if (!B && c) {
      const I = $.read(E);
      return typeof c == "function" ? c(I, b) : C === "object" && !Array.isArray(I) ? { ...b, ...I } : I;
    } else return typeof E != "string" ? E : $.read(E);
  }
  function N(B) {
    if (!(B && B.storageArea !== n)) {
      if (B && B.key == null) {
        v.value = b;
        return;
      }
      if (!(B && B.key !== e)) {
        k();
        try {
          (B == null ? void 0 : B.newValue) !== $.write(v.value) && (v.value = M(B));
        } catch (E) {
          h(E);
        } finally {
          B ? se(D) : D();
        }
      }
    }
  }
  function V(B) {
    N(B.detail);
  }
  return v;
}
function xm(e) {
  return mA("(prefers-color-scheme: dark)", e);
}
function CA(e = {}) {
  const {
    selector: t = "html",
    attribute: n = "class",
    initialValue: a = "auto",
    window: o = Ma,
    storage: r,
    storageKey: s = "vueuse-color-scheme",
    listenToStorageChanges: i = !0,
    storageRef: u,
    emitAuto: c,
    disableTransition: d = !0
  } = e, f = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, p = xm({ window: o }), h = S(() => p.value ? "dark" : "light"), m = u || (s == null ? fA(a) : xA(s, a, r, { window: o, listenToStorageChanges: i })), v = S(() => m.value === "auto" ? h.value : m.value), b = wm(
    "updateHTMLAttrs",
    (D, T, A) => {
      const M = typeof D == "string" ? o == null ? void 0 : o.document.querySelector(D) : bm(D);
      if (!M)
        return;
      let N;
      if (d && (N = o.document.createElement("style"), N.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(N)), T === "class") {
        const V = A.split(/\s/g);
        Object.values(f).flatMap((B) => (B || "").split(/\s/g)).filter(Boolean).forEach((B) => {
          V.includes(B) ? M.classList.add(B) : M.classList.remove(B);
        });
      } else
        M.setAttribute(T, A);
      d && (o.getComputedStyle(N).opacity, document.head.removeChild(N));
    }
  );
  function C(D) {
    var T;
    b(t, n, (T = f[D]) != null ? T : D);
  }
  function $(D) {
    e.onChanged ? e.onChanged(D, C) : C(D);
  }
  te(v, $, { flush: "post", immediate: !0 }), ym(() => $(v.value));
  const k = S({
    get() {
      return c ? m.value : v.value;
    },
    set(D) {
      m.value = D;
    }
  });
  try {
    return Object.assign(k, { store: m, system: h, state: v });
  } catch {
    return k;
  }
}
function kA(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: n = "",
    window: a = Ma
  } = e, o = CA({
    ...e,
    onChanged: (i, u) => {
      var c;
      e.onChanged ? (c = e.onChanged) == null || c.call(e, i === "dark", u, i) : u(i);
    },
    modes: {
      dark: t,
      light: n
    }
  }), r = S(() => o.system ? o.system.value : xm({ window: a }).value ? "dark" : "light");
  return S({
    get() {
      return o.value === "dark";
    },
    set(i) {
      const u = i ? "dark" : "light";
      r.value === u ? o.value = "auto" : o.value = u;
    }
  });
}
function Cm(e, t, n, a = {}) {
  var o, r, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, h = wt(), m = n || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((s = (r = h == null ? void 0 : h.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let v = c;
  t || (t = "modelValue"), v = v || `update:${t.toString()}`;
  const b = (k) => i ? typeof i == "function" ? i(k) : gA(k) : k, C = () => sA(e[t]) ? b(e[t]) : f, $ = (k) => {
    p ? p(k) && m(v, k) : m(v, k);
  };
  if (u) {
    const k = C(), D = R(k);
    let T = !1;
    return te(
      () => e[t],
      (A) => {
        T || (T = !0, D.value = b(A), se(() => T = !1));
      }
    ), te(
      D,
      (A) => {
        !T && (A !== e[t] || d) && $(A);
      },
      { deep: d }
    ), D;
  } else
    return S({
      get() {
        return C();
      },
      set(k) {
        $(k);
      }
    });
}
const _P = /* @__PURE__ */ _({
  __name: "LineChart",
  props: {
    data: {},
    categories: {},
    index: {},
    colors: {},
    margin: { default: () => ({ top: 0, bottom: 0, left: 0, right: 0 }) },
    filterOpacity: { default: 0.2 },
    xFormatter: {},
    yFormatter: {},
    showXAxis: { type: Boolean, default: !0 },
    showYAxis: { type: Boolean, default: !0 },
    showTooltip: { type: Boolean, default: !0 },
    showLegend: { type: Boolean, default: !0 },
    showGridLine: { type: Boolean, default: !0 },
    customTooltip: {},
    curveType: { default: Te.MonotoneX },
    class: {}
  },
  emits: ["legendItemClick"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = S(() => n.index), r = S(
      () => {
        var c;
        return (c = n.colors) != null && c.length ? n.colors : oA(n.categories.length);
      }
    ), s = R(
      n.categories.map((c, d) => ({
        name: c,
        color: r.value[d],
        inactive: !1
      }))
    ), i = _m();
    function u(c, d) {
      a("legendItemClick", c, d);
    }
    return (c, d) => (g(), L("div", {
      class: j(l(F)("flex h-[400px] w-full flex-col items-end", n.class ?? ""))
    }, [
      c.showLegend ? (g(), w(l(ZB), {
        key: 0,
        items: s.value,
        "onUpdate:items": d[0] || (d[0] = (f) => s.value = f),
        onLegendItemClick: u
      }, null, 8, ["items"])) : ne("", !0),
      O(l(zB), {
        margin: { left: 20, right: 20 },
        data: c.data,
        style: Ft({ height: l(i) ? "100%" : "auto" })
      }, {
        default: y(() => [
          c.showTooltip ? (g(), w(l(XB), {
            key: 0,
            colors: r.value,
            items: s.value,
            index: o.value,
            "custom-tooltip": c.customTooltip
          }, null, 8, ["colors", "items", "index", "custom-tooltip"])) : ne("", !0),
          (g(!0), L(re, null, $e(c.categories, (f, p) => {
            var h;
            return g(), w(l(KB), {
              key: f,
              x: (m, v) => v,
              y: (m) => m[f],
              "curve-type": c.curveType,
              color: r.value[p],
              attributes: {
                [l(Ka).selectors.line]: {
                  opacity: (h = s.value.find((m) => m.name === f)) != null && h.inactive ? c.filterOpacity : 1
                }
              }
            }, null, 8, ["x", "y", "curve-type", "color", "attributes"]);
          }), 128)),
          c.showXAxis ? (g(), w(l(lf), {
            key: 1,
            type: "x",
            "tick-format": c.xFormatter ?? ((f) => {
              var p;
              return (p = c.data[f]) == null ? void 0 : p[o.value];
            }),
            "grid-line": !1,
            "tick-line": !1,
            "tick-text-color": "hsl(var(--vis-text-color))"
          }, null, 8, ["tick-format"])) : ne("", !0),
          c.showYAxis ? (g(), w(l(lf), {
            key: 2,
            type: "y",
            "tick-line": !1,
            "tick-format": c.yFormatter,
            "domain-line": !1,
            "grid-line": c.showGridLine,
            attributes: {
              [l(qs).selectors.grid]: {
                class: "text-muted"
              }
            },
            "tick-text-color": "hsl(var(--vis-text-color))"
          }, null, 8, ["tick-format", "grid-line", "attributes"])) : ne("", !0),
          x(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["data", "style"])
    ], 2));
  }
}), $A = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, SA = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(lb), P({
      class: l(F)("p-3", n.class)
    }, l(r)), {
      default: y(({ grid: u, weekDays: c }) => [
        O(l(EA), null, {
          default: y(() => [
            O(l(IA)),
            O(l(PA)),
            O(l(RA))
          ]),
          _: 1
        }),
        ce("div", $A, [
          (g(!0), L(re, null, $e(u, (d) => (g(), w(l(MA), {
            key: d.value.toString()
          }, {
            default: y(() => [
              O(l(AA), null, {
                default: y(() => [
                  O(l(cf), null, {
                    default: y(() => [
                      (g(!0), L(re, null, $e(c, (f) => (g(), w(l(OA), { key: f }, {
                        default: y(() => [
                          ee(oe(f), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              O(l(BA), null, {
                default: y(() => [
                  (g(!0), L(re, null, $e(d.rows, (f, p) => (g(), w(l(cf), {
                    key: `weekDate-${p}`,
                    class: "mt-2 w-full"
                  }, {
                    default: y(() => [
                      (g(!0), L(re, null, $e(f, (h) => (g(), w(l(TA), {
                        key: h.toString(),
                        date: h
                      }, {
                        default: y(() => [
                          O(l(DA), {
                            day: h,
                            month: d.value
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
}), TA = /* @__PURE__ */ _({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(fb), P({
      class: l(F)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        t.class
      )
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), DA = /* @__PURE__ */ _({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(bb), P({
      class: l(F)(
        l(Cn)({ variant: "ghost" }),
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
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), MA = /* @__PURE__ */ _({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(db), P({
      class: l(F)("w-full border-collapse space-y-1", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), BA = /* @__PURE__ */ _({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(gb), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), AA = /* @__PURE__ */ _({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(mb), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cf = /* @__PURE__ */ _({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(yb), P({
      class: l(F)("flex", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), OA = /* @__PURE__ */ _({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(pb), P({
      class: l(F)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), EA = /* @__PURE__ */ _({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(ub), P({
      class: l(F)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), PA = /* @__PURE__ */ _({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(cb), P({
      class: l(F)("text-sm font-medium text-text", t.class)
    }, l(a)), {
      default: y(({ headingValue: s }) => [
        x(o.$slots, "default", { headingValue: s }, () => [
          ee(oe(s), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), RA = /* @__PURE__ */ _({
  __name: "CalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(hb), P({
      class: l(F)(
        l(Cn)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: y(() => r[0] || (r[0] = [
        ee(" > ")
      ])),
      _: 1
    }, 16, ["class"]));
  }
}), IA = /* @__PURE__ */ _({
  __name: "CalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(vb), P({
      class: l(F)(
        l(Cn)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: y(() => r[0] || (r[0] = [
        ee(" < ")
      ])),
      _: 1
    }, 16, ["class"]));
  }
}), km = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(Eb), P(l(r), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        n.class
      ]
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $m = /* @__PURE__ */ _({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = le(e, t);
    return (r, s) => (g(), w(l(fp), K(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wP = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(No), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), FA = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(pp), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), VA = /* @__PURE__ */ _({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: j(l(F)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), NA = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(gp), P(l(a), {
      class: l(F)("text-2xl font-semibold leading-none tracking-tight text-heading", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), LA = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(yp), P(l(a), {
      class: l(F)("text-sm text-sub-text", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sm = /* @__PURE__ */ _({
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
    const n = t, a = e, o = S(() => {
      const { class: s, ...i } = a;
      return i;
    }), r = le(o, n);
    return (s, i) => (g(), w(l(Ql), null, {
      default: y(() => [
        O(l(ou), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        O(l(au), P(l(r), {
          class: l(F)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg",
            a.class
          )
        }), {
          default: y(() => [
            x(s.$slots, "default"),
            O(l(No), {
              onClick: i[0] || (i[0] = (u) => n("close", u)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: y(() => [
                O(l(Ms), { class: "size-4 dark:text-slate-300" }),
                i[1] || (i[1] = ce("span", { class: "sr-only" }, "Close", -1))
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
}), xP = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(Ql), null, {
      default: y(() => [
        O(l(ou), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            O(l(au), P({
              class: l(F)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg md:w-full",
                n.class
              )
            }, l(r), {
              onPointerDownOutside: i[0] || (i[0] = (u) => {
                const c = u.detail.originalEvent, d = c.target;
                (c.offsetX > d.clientWidth || c.offsetY > d.clientHeight) && u.preventDefault();
              })
            }), {
              default: y(() => [
                x(s.$slots, "default"),
                O(l(No), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: y(() => [
                    O(l(Ms), { class: "size-4" }),
                    i[1] || (i[1] = ce("span", { class: "sr-only" }, "Close", -1))
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
}), zA = /* @__PURE__ */ _({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: j(
        l(F)("flex flex-col-reverse text-text sm:flex-row sm:justify-end sm:gap-x-2", t.class)
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), CP = /* @__PURE__ */ _({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = le(e, t);
    return (r, s) => (g(), w(l($m), K(Z(l(o))), {
      default: y(() => [
        O(l(Sm), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            O(km, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: y(() => [
                x(r.$slots, "default")
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
}), UA = /* @__PURE__ */ _({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(zb), P(n.value, {
      class: l(F)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), HA = /* @__PURE__ */ _({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Ib), P(n.value, {
      class: l(F)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: y(() => [
        a.heading ? (g(), w(l(Fb), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: y(() => [
            ee(oe(a.heading), 1)
          ]),
          _: 1
        })) : ne("", !0),
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), WA = { class: "flex items-center border-b px-3" }, YA = /* @__PURE__ */ _({
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
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), L("div", WA, [
      O(l(Lx), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      O(l(Pb), P({ ...l(a), ...o.$attrs }, {
        "auto-focus": "",
        class: l(F)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), KA = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(Yb), P(l(r), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jA = { role: "presentation" }, GA = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(Lb), P(l(r), {
      class: l(F)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        ce("div", jA, [
          x(s.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kP = /* @__PURE__ */ _({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Kb), P(n.value, {
      class: l(F)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $P = /* @__PURE__ */ _({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("span", {
      class: j(l(F)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), qA = /* @__PURE__ */ _({
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
    return (r, s) => (g(), w(l($_), K(Z(l(o))), {
      default: y(({ open: i }) => [
        x(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), XA = /* @__PURE__ */ _({
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
    return (n, a) => (g(), L("div", {
      class: j(
        l(F)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          n.inset && "pl-8",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), ZA = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = he(e);
    return (a, o) => (g(), w(l(S_), P({ class: "outline-none" }, l(n)), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), JA = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(T_), null, {
      default: y(() => [
        O(l(D_), P(l(r), {
          class: l(F)(
            "z-50 min-w-32 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), SP = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(M_), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), TP = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = le(e, t);
    return (r, s) => (g(), w(l(E_), K(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), DP = /* @__PURE__ */ _({
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
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(Ep), P(l(a), {
      class: l(F)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.inset && "pl-8",
        t.class
      )
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), QA = /* @__PURE__ */ _({
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
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(XA, {
      class: j(t.class)
    }, {
      default: y(() => [
        O(l(Ep), P(l(a), {
          as: o.as,
          href: o.href,
          class: "size-full"
        }), {
          default: y(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "href"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), eO = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, MP = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(A_), P(l(r), {
      class: l(F)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        ce("span", eO, [
          O(l(Pp), null, {
            default: y(() => [
              O(l(Ds), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tO = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, BP = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(P_), P(l(r), {
      class: l(F)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        ce("span", tO, [
          O(l(Pp), null, {
            default: y(() => [
              O(l(Px), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), AP = /* @__PURE__ */ _({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("span", {
      class: j(l(F)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), OP = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(B_), P(n.value, {
      class: l(F)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), EP = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(O_), P(l(a), {
      class: l(F)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), PP = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = le(e, t);
    return (r, s) => (g(), w(l(R_), K(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), RP = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(F_), P(l(a), {
      class: l(F)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        x(o.$slots, "default"),
        O(l(yu), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), IP = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(I_), P(l(r), {
      class: l(F)(
        "z-50 min-w-32 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        n.class
      )
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nO = { class: "text-xs text-slate-600 dark:text-slate-300" }, aO = /* @__PURE__ */ _({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(e) {
    return (t, n) => (g(), L("div", nO, "Characters: " + oe(t.count), 1));
  }
}), qo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, oO = {}, rO = { class: "text-sm text-slate-400 dark:text-slate-500" };
function sO(e, t) {
  return g(), L("div", rO, [
    x(e.$slots, "default")
  ]);
}
const iO = /* @__PURE__ */ qo(oO, [["render", sO]]), lO = { class: "text-sm text-red-600 dark:text-red-400" }, uO = /* @__PURE__ */ _({
  __name: "Error",
  props: {
    error: {}
  },
  setup(e) {
    return (t, n) => Ba((g(), L("div", null, [
      ce("p", lO, oe(t.error), 1)
    ], 512)), [
      [Ml, t.error]
    ]);
  }
}), cO = {}, dO = { class: "w-full space-y-4 p-1.5" };
function fO(e, t) {
  return g(), L("div", dO, [
    x(e.$slots, "default")
  ]);
}
const FP = /* @__PURE__ */ qo(cO, [["render", fO]]), pO = {}, hO = { class: "my-4" };
function vO(e, t) {
  return g(), L("div", hO, [
    x(e.$slots, "default")
  ]);
}
const mO = /* @__PURE__ */ qo(pO, [["render", vO]]), gO = { class: "grid gap-4 md:grid-cols-2" }, VP = /* @__PURE__ */ _({
  __name: "FormGrid",
  setup(e) {
    return (t, n) => (g(), w(mO, null, {
      default: y(() => [
        ce("div", gO, [
          x(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), Tm = /* @__PURE__ */ _({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    id: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(V_), P(n.value, {
      class: l(F)(
        "text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        t.class
      )
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yO = { class: "relative" }, bO = {
  name: "Base",
  inheritAttrs: !1
}, kn = /* @__PURE__ */ _({
  ...bO,
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
      return g(), L("div", null, [
        t.label && t.showLabel ? (g(), w(l(Tm), {
          key: 0,
          id: t.id
        }, {
          default: y(() => [
            ee(oe(t.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : ne("", !0),
        ce("div", yO, [
          x(t.$slots, "default"),
          t.showCharacterCount ? (g(), w(l(aO), {
            key: 0,
            count: (a = t.modelValue) == null ? void 0 : a.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : ne("", !0)
        ]),
        O(l(iO), { class: "mt-[2px]" }, {
          default: y(() => [
            ee(oe(t.description), 1)
          ]),
          _: 1
        }),
        O(l(uO), { error: t.error }, null, 8, ["error"])
      ]);
    };
  }
}), _O = { class: "flex gap-2" }, NP = /* @__PURE__ */ _({
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
    const n = t, o = R(e.modelValue);
    return te(o, (r) => {
      n("update:modelValue", r);
    }), (r, s) => (g(), w(l(kn), K(Z(r.$props)), {
      default: y(() => [
        ce("div", _O, [
          O(l(Cb), {
            id: r.id,
            checked: o.value,
            "onUpdate:checked": s[0] || (s[0] = (i) => o.value = i),
            class: "peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground"
          }, {
            default: y(() => [
              O(l(kb), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: y(() => [
                  O(l(Ds), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          r.text ? (g(), w(l(Tm), {
            key: 0,
            id: r.id,
            class: "my-auto"
          }, {
            default: y(() => [
              ee(oe(r.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : ne("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), Dm = /* @__PURE__ */ _({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = le(e, t);
    return (r, s) => (g(), w(l(X_), K(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mm = /* @__PURE__ */ _({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Z_), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bm = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(J_), null, {
      default: y(() => [
        O(l(t1), P({ ...l(r), ...s.$attrs }, {
          class: l(F)(
            "z-50 w-72 rounded-md border border-border bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            n.class
          )
        }), {
          default: y(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), LP = /* @__PURE__ */ _({
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
    const n = t, a = e, o = S(() => a.emptyMessage ?? "Option not found"), r = S(() => a.placeholder ?? "Select an option"), s = R(!1), i = R(a.modelValue ?? []), u = (f, p) => f.filter((h) => h.name.toLowerCase().includes(p.toLowerCase())), c = S(() => {
      var f;
      return Array.isArray(i.value) ? i.value.length ? i.value.map((p) => p.name).join(", ") : r.value : typeof i.value == "object" ? i.value.name : (f = a.options.find((p) => p.id === i.value)) == null ? void 0 : f.name;
    }), d = (f) => Array.isArray(i.value) ? i.value.find((p) => p.id === f.id) : typeof i.value == "object" ? i.value.id === f.id : i.value === f.id;
    return te(i, () => {
      Array.isArray(i.value) ? n("update:modelValue", i.value) : n("update:modelValue", i.value.id);
    }), (f, p) => (g(), w(l(kn), K(Z(f.$props)), {
      default: y(() => [
        O(l(Dm), {
          open: s.value,
          "onUpdate:open": p[2] || (p[2] = (h) => s.value = h)
        }, {
          default: y(() => [
            O(l(Mm), { "as-child": "" }, {
              default: y(() => [
                O(l(xt), {
                  variant: "outline",
                  role: "combobox",
                  "aria-expanded": s.value,
                  class: "w-[200px] justify-between overflow-hidden"
                }, {
                  default: y(() => [
                    ee(oe(c.value) + " ", 1),
                    O(l(Ex), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
                  ]),
                  _: 1
                }, 8, ["aria-expanded"])
              ]),
              _: 1
            }),
            O(l(Bm), { class: "w-[200px] p-0" }, {
              default: y(() => [
                O(l(km), {
                  multiple: f.multiple,
                  modelValue: i.value,
                  "onUpdate:modelValue": p[1] || (p[1] = (h) => i.value = h),
                  "filter-function": u
                }, {
                  default: y(() => [
                    O(l(YA), {
                      class: "h-9",
                      placeholder: r.value
                    }, null, 8, ["placeholder"]),
                    O(l(UA), null, {
                      default: y(() => [
                        ee(oe(o.value), 1)
                      ]),
                      _: 1
                    }),
                    O(l(GA), null, {
                      default: y(() => [
                        O(l(HA), null, {
                          default: y(() => [
                            (g(!0), L(re, null, $e(f.options, (h) => (g(), w(l(KA), {
                              key: h.id,
                              value: h,
                              onSelect: p[0] || (p[0] = () => {
                                f.multiple || (s.value = !1);
                              })
                            }, {
                              default: y(() => [
                                ee(oe(h.name) + " ", 1),
                                O(l(Ds), {
                                  class: j(l(F)("ml-auto size-4", d(h) ? "opacity-100" : "opacity-0"))
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
}), zP = /* @__PURE__ */ _({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, a = e, o = new Kt("en-US", {
      dateStyle: "long"
    }), r = R(a.modelValue);
    return te(r, () => {
      n("update:modelValue", r.value);
    }), pe(() => {
      a.defaultValue && (r.value = a.defaultValue);
    }), (s, i) => (g(), w(l(kn), K(Z(s.$props)), {
      default: y(() => [
        O(l(Dm), null, {
          default: y(() => [
            O(l(Mm), { "as-child": "" }, {
              default: y(() => [
                O(l(xt), {
                  variant: "outline",
                  class: j(["w-[280px] justify-start text-left font-normal text-text"])
                }, {
                  default: y(() => [
                    O(l(Dx), { class: "mr-2 size-4" }),
                    ee(" " + oe(r.value ? l(o).format(r.value.toDate(l(Kn)())) : s.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            O(l(Bm), { class: "w-auto p-0" }, {
              default: y(() => [
                O(l(SA), {
                  modelValue: r.value,
                  "onUpdate:modelValue": i[0] || (i[0] = (u) => r.value = u),
                  "default-value": s.defaultValue,
                  multiple: !1,
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
var Ve = [];
for (var Ti = 0; Ti < 256; ++Ti)
  Ve.push((Ti + 256).toString(16).slice(1));
function wO(e, t = 0) {
  return (Ve[e[t + 0]] + Ve[e[t + 1]] + Ve[e[t + 2]] + Ve[e[t + 3]] + "-" + Ve[e[t + 4]] + Ve[e[t + 5]] + "-" + Ve[e[t + 6]] + Ve[e[t + 7]] + "-" + Ve[e[t + 8]] + Ve[e[t + 9]] + "-" + Ve[e[t + 10]] + Ve[e[t + 11]] + Ve[e[t + 12]] + Ve[e[t + 13]] + Ve[e[t + 14]] + Ve[e[t + 15]]).toLowerCase();
}
var vr, xO = new Uint8Array(16);
function CO() {
  if (!vr && (vr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !vr))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return vr(xO);
}
var kO = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const df = {
  randomUUID: kO
};
function $O(e, t, n) {
  if (df.randomUUID && !t && !e)
    return df.randomUUID();
  e = e || {};
  var a = e.random || (e.rng || CO)();
  return a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, wO(a);
}
const SO = { class: "flex items-center space-x-2" }, TO = ["src"], DO = ["accept"], UP = /* @__PURE__ */ _({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = "file-upload-" + $O(), r = S(() => i.value ? URL.createObjectURL(i.value) : null), s = n.currentImage ? n.currentImage : n.defaultImage, i = S({
      get: () => n.modelValue,
      set: (d) => a("update:modelValue", d)
    }), u = (d) => {
      i.value = d.target.files[0];
    }, c = () => document.getElementById(o).click();
    return (d, f) => (g(), w(l(kn), K(Z(d.$props)), {
      default: y(() => [
        ce("div", SO, [
          x(d.$slots, "image", {
            newImage: r.value,
            curImage: l(s)
          }, () => [
            ce("img", {
              src: r.value ?? l(s),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, TO)
          ]),
          ce("input", {
            id: o,
            accept: d.accept,
            hidden: "",
            type: "file",
            onInput: u
          }, null, 40, DO),
          O(l(xt), {
            variant: "outline",
            onClick: c
          }, {
            default: y(() => f[0] || (f[0] = [
              ee(" Upload ")
            ])),
            _: 1
          })
        ])
      ]),
      _: 3
    }, 16));
  }
}), MO = ["disabled", "placeholder", "required", "type"], BO = /* @__PURE__ */ _({
  __name: "Input",
  props: /* @__PURE__ */ Bi({
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
    const t = kf(e, "modelValue");
    return (n, a) => (g(), w(l(kn), K(Z(n.$props)), {
      default: y(() => [
        Ba(ce("input", {
          "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o),
          disabled: n.disabled,
          placeholder: n.placeholder,
          required: n.required,
          type: n.type,
          class: j(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !n.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": n.error
          }])
        }, null, 10, MO), [
          [Um, t.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), AO = /* @__PURE__ */ _({
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
    return (r, s) => (g(), w(l(C1), K(Z(l(o))), {
      default: y(({ open: i }) => [
        x(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), OO = /* @__PURE__ */ _({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(j1), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), EO = /* @__PURE__ */ _({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    open: { type: Boolean }
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(S1), P(l(a), {
      class: l(F)(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-start text-sm ring-offset-background transition placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        t.class
      )
    }), {
      default: y(() => [
        x(o.$slots, "default"),
        O(l(G1), { "as-child": "" }, {
          default: y(() => [
            O(l(gu), {
              class: j(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), PO = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(T1), null, {
      default: y(() => [
        O(l(R1), P({ ...l(r), ...s.$attrs }, {
          class: l(F)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            s.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            O(l(FO)),
            O(l(W1), {
              class: j(
                l(F)(
                  "p-1",
                  s.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: y(() => [
                x(s.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            O(l(VO))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), HP = /* @__PURE__ */ _({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(U1), P({
      class: l(F)("w-full p-1", t.class)
    }, n.value), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), RO = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, IO = /* @__PURE__ */ _({
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
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(V1), P(l(a), {
      class: l(F)(
        "focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        t.class
      )
    }), {
      default: y(() => [
        ce("span", RO, [
          O(l(N1), null, {
            default: y(() => [
              O(l(Ds), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        O(l(Np), null, {
          default: y(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), WP = /* @__PURE__ */ _({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Np), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), YP = /* @__PURE__ */ _({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(H1), {
      class: j(l(F)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), KP = /* @__PURE__ */ _({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(I1), P(n.value, {
      class: l(F)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), FO = /* @__PURE__ */ _({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(Y1), P(l(a), {
      class: l(F)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          O(l(Bx), { class: "size-4 text-primary" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), VO = /* @__PURE__ */ _({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(K1), P(l(a), {
      class: l(F)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          O(l(gu), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jP = /* @__PURE__ */ _({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, a = e, o = S(() => a.placeholder ?? "Select an option..."), r = R(
      a.modelValue ? a.options.find((s) => s === a.modelValue) : null
    );
    return te(r, () => {
      n("update:modelValue", r.value);
    }), (s, i) => (g(), w(l(kn), K(Z(s.$props)), {
      default: y(() => [
        O(l(AO), {
          modelValue: r.value,
          "onUpdate:modelValue": i[0] || (i[0] = (u) => r.value = u)
        }, {
          default: y(({ open: u }) => [
            O(l(EO), { open: u }, {
              default: y(() => [
                O(l(OO), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            O(l(PO), null, {
              default: y(() => [
                (g(!0), L(re, null, $e(s.options, (c) => (g(), w(l(IO), { value: c }, {
                  default: y(() => [
                    ee(oe(c), 1)
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
}), NO = ["placeholder"], GP = /* @__PURE__ */ _({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = Cm(e, "modelValue", t, {
      passive: !0
    });
    return (r, s) => (g(), w(l(kn), K(Z(r.$props)), {
      default: y(() => [
        Ba(ce("textarea", {
          "onUpdate:modelValue": s[0] || (s[0] = (i) => Oo(o) ? o.value = i : null),
          placeholder: r.placeholder,
          class: j(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !r.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": r.error
          }])
        }, null, 10, NO), [
          [Hm, l(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), LO = /* @__PURE__ */ _({
  __name: "Toggle",
  props: /* @__PURE__ */ Bi({
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
  emits: /* @__PURE__ */ Bi(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = t, a = e, o = kf(e, "modelValue");
    te(o, () => {
      n("update:modelValue", o.value);
    });
    const r = S(() => {
      const { class: i, ...u } = a;
      return u;
    }), s = le(r, n);
    return (i, u) => (g(), w(l(kn), K(Z(i.$props)), {
      default: y(() => [
        O(l(yw), P({
          checked: o.value,
          "onUpdate:checked": u[0] || (u[0] = (c) => o.value = c)
        }, l(s), {
          class: l(F)(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent",
            a.class
          )
        }), {
          default: y(({ checked: c }) => [
            O(l(bw), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: y(() => [
                c ? x(i.$slots, "checked", { key: 0 }) : ne("", !0),
                c ? ne("", !0) : x(i.$slots, "not-checked", { key: 1 })
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
}), zO = { class: "my-auto text-slate-400 dark:text-slate-100" }, UO = /* @__PURE__ */ _({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, n) => (g(), L("div", zO, " Showing " + oe(t.min) + " to " + oe(t.max) + " of " + oe(t.total) + " results ", 1));
  }
}), HO = /* @__PURE__ */ _({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(z_), P(n.value, {
      class: l(F)("flex size-9 items-center justify-center text-text", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default", {}, () => [
          O(l(ih))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), WO = /* @__PURE__ */ _({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(U_), K(Z(n.value)), {
      default: y(() => [
        O(l(xt), {
          class: j(l(F)("size-10 p-0", t.class)),
          as: a.as,
          variant: "outline"
        }, {
          default: y(() => [
            x(a.$slots, "default", {}, () => [
              O(l(Ax), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), YO = /* @__PURE__ */ _({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(H_), K(Z(n.value)), {
      default: y(() => [
        O(l(xt), {
          class: j(l(F)("size-10 p-0", t.class)),
          as: a.as,
          variant: "outline"
        }, {
          default: y(() => [
            x(a.$slots, "default", {}, () => [
              O(l(Ox), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), KO = /* @__PURE__ */ _({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(j_), K(Z(n.value)), {
      default: y(() => [
        O(l(xt), {
          class: j(l(F)("size-10 p-0", t.class)),
          as: a.as,
          variant: "outline"
        }, {
          default: y(() => [
            x(a.$slots, "default", {}, () => [
              O(l(yu), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), jO = /* @__PURE__ */ _({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(G_), K(Z(n.value)), {
      default: y(() => [
        O(l(xt), {
          class: j(l(F)("size-10 p-0", t.class)),
          as: a.as,
          variant: "outline"
        }, {
          default: y(() => [
            x(a.$slots, "default", {}, () => [
              O(l(Mx), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), qP = /* @__PURE__ */ _({
  __name: "LumuixModeToggle",
  setup(e) {
    const t = kA({
      selector: "html"
    });
    return (n, a) => (g(), w(LO, {
      modelValue: l(t),
      "onUpdate:modelValue": a[0] || (a[0] = (o) => Oo(t) ? t.value = o : null)
    }, {
      checked: y(() => [
        O(l(Ix), { class: "m-auto mt-0.5 size-4 text-primary" })
      ]),
      "not-checked": y(() => [
        O(l(zx), { class: "m-auto mt-0.5 size-4 text-primary" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), XP = /* @__PURE__ */ _({
  __name: "CollapsibleTableRow",
  props: {
    row: {},
    headers: {},
    subRows: {},
    setOpenTo: { type: Boolean, default: !1 },
    class: {}
  },
  setup(e) {
    const t = e, n = R(t.setOpenTo), a = () => {
      n.value = !n.value;
    };
    return (o, r) => (g(), L(re, null, [
      O(l(Ao), {
        onClick: a,
        class: j(t.class)
      }, {
        default: y(() => [
          (g(!0), L(re, null, $e(o.headers, (s) => (g(), w(l(fs), {
            key: s.value
          }, {
            default: y(() => [
              o.$slots[`cell_header_${s.value}`] ? x(o.$slots, `cell_header_${s.value}`, {
                key: 0,
                item: o.row,
                open: n.value
              }) : (g(), L(re, { key: 1 }, [
                ee(oe(o.row[s.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (g(), w(l(kl), { key: 0 }, {
            default: y(() => [
              x(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : ne("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      n.value ? (g(!0), L(re, { key: 0 }, $e(o.subRows, (s, i) => (g(), w(l(Ao), { key: i }, {
        default: y(() => [
          (g(!0), L(re, null, $e(o.headers, (u) => (g(), w(l(fs), {
            key: u.value
          }, {
            default: y(() => [
              o.$slots[`subrow_cell_${u.value}`] ? x(o.$slots, `subrow_cell_${u.value}`, {
                key: 0,
                item: s,
                open: n.value
              }) : (g(), L(re, { key: 1 }, [
                ee(oe("subrow_cell_" + u.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (g(), w(l(kl), { key: 0 }, {
            default: y(() => [
              x(o.$slots, "sub_row_actions", {
                item: o.row,
                open: n.value
              })
            ]),
            _: 3
          })) : ne("", !0)
        ]),
        _: 2
      }, 1024))), 128)) : ne("", !0)
    ], 64));
  }
}), GO = { class: "relative w-full overflow-auto" }, qO = /* @__PURE__ */ _({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", GO, [
      ce("table", {
        class: j(l(F)("w-full caption-bottom text-sm", t.class))
      }, [
        x(n.$slots, "default")
      ], 2)
    ]));
  }
}), XO = /* @__PURE__ */ _({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("tbody", {
      class: j(l(F)("[&_tr:last-child]:border-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), fs = /* @__PURE__ */ _({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("td", {
      class: j(["p-4 align-middle text-text [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), ZO = /* @__PURE__ */ _({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("th", {
      class: j(
        l(F)(
          "h-12 px-4 text-left align-middle font-medium text-heading [&:has([role=checkbox])]:pr-0",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), JO = /* @__PURE__ */ _({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("thead", {
      class: j(l(F)("[&_tr]:border-b", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), ZP = /* @__PURE__ */ _({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("tfoot", {
      class: j(
        l(F)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Ao = /* @__PURE__ */ _({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("tr", {
      class: j(
        l(F)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), kl = /* @__PURE__ */ _({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("td", {
      class: j(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), QO = /* @__PURE__ */ _({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("caption", {
      class: j(l(F)("mt-4 text-sm text-sub-text", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), eE = { class: "flex items-center justify-center py-10" }, JP = /* @__PURE__ */ _({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(Ao, null, {
      default: y(() => [
        O(fs, P({
          class: l(F)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, n.value), {
          default: y(() => [
            ce("div", eE, [
              x(a.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), QP = /* @__PURE__ */ _({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (g(), w(l(qO), null, {
      default: y(() => [
        t.caption ? (g(), w(l(QO), { key: 0 }, {
          default: y(() => [
            ee(oe(t.caption), 1)
          ]),
          _: 1
        })) : ne("", !0),
        O(l(JO), null, {
          default: y(() => [
            O(l(Ao), null, {
              default: y(() => [
                (g(!0), L(re, null, $e(t.headers, (a, o) => (g(), w(l(ZO), null, {
                  default: y(() => [
                    t.$slots[`header_${t.headers[o].value}`] ? x(t.$slots, `header_${t.headers[o].value}`, {
                      key: 0,
                      item: a
                    }) : (g(), L(re, { key: 1 }, [
                      ee(oe(a.name), 1)
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
        O(l(XO), null, {
          default: y(() => [
            (g(!0), L(re, null, $e(t.rows, (a, o) => (g(), w(l(Ao), { key: o }, {
              default: y(() => [
                (g(!0), L(re, null, $e(t.headers, (r) => (g(), w(l(fs), {
                  key: r.value
                }, {
                  default: y(() => [
                    t.$slots[`cell_${r.value}`] ? x(t.$slots, `cell_${r.value}`, {
                      key: 0,
                      item: a
                    }) : (g(), L(re, { key: 1 }, [
                      ee(oe(a[r.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                t.$slots.row_actions ? (g(), w(l(kl), { key: 0 }, {
                  default: y(() => [
                    x(t.$slots, "row_actions", { item: a })
                  ]),
                  _: 2
                }, 1024)) : ne("", !0)
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
}), tE = { class: "text-text" }, e3 = /* @__PURE__ */ _({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, a = () => n("close");
    return (o, r) => (g(), w(l($m), { open: o.open }, {
      default: y(() => [
        O(l(FA), { "as-child": "" }, {
          default: y(() => [
            x(o.$slots, "trigger")
          ]),
          _: 3
        }),
        O(l(Sm), {
          onClose: a,
          onEscapeKeyDown: a,
          onPointerDownOutside: a,
          class: j("max-w-" + o.size)
        }, {
          default: y(() => [
            O(l(VA), null, {
              default: y(() => [
                O(l(NA), null, {
                  default: y(() => {
                    var s;
                    return [
                      o.$slots.title ? x(o.$slots, "title", { key: 0 }) : (s = o.headerData) != null && s.title ? (g(), L(re, { key: 1 }, [
                        ee(oe(o.headerData.title), 1)
                      ], 64)) : ne("", !0)
                    ];
                  }),
                  _: 3
                }),
                O(l(LA), null, {
                  default: y(() => {
                    var s;
                    return [
                      o.$slots.description ? x(o.$slots, "description", { key: 0 }) : (s = o.headerData) != null && s.description ? (g(), L(re, { key: 1 }, [
                        ee(oe(o.headerData.description), 1)
                      ], 64)) : ne("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            ce("div", tE, [
              o.$slots.content ? x(o.$slots, "content", { key: 0 }) : x(o.$slots, "default", { key: 1 })
            ]),
            O(l(zA), null, {
              default: y(() => [
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
}), nE = { class: "justify-between sm:flex" }, t3 = /* @__PURE__ */ _({
  __name: "LumuixPagination",
  props: {
    data: {},
    as: {}
  },
  setup(e) {
    const t = e, n = () => t.data.current_page === 1 ? t.data.data.length === 0 ? 0 : 1 : t.data.current_page === t.data.last_page ? t.data.total - t.data.data.length : t.data.current_page * t.data.per_page - t.data.per_page, a = () => t.data.current_page === 1 ? t.data.data.length : t.data.current_page === t.data.last_page ? t.data.total : t.data.current_page * t.data.per_page;
    return (o, r) => (g(), L("div", nE, [
      O(l(UO), {
        min: n(),
        max: a(),
        total: o.data.total
      }, null, 8, ["min", "max", "total"]),
      O(l(L_), null, {
        default: y(() => [
          O(l(K_), { class: "flex items-center gap-1" }, {
            default: y(() => [
              O(l(WO), {
                as: o.as,
                "as-child": "",
                href: o.data.first_page_url
              }, null, 8, ["as", "href"]),
              o.data.prev_page_url ? (g(), w(l(jO), {
                key: 0,
                as: o.as,
                "as-child": "",
                href: o.data.prev_page_url
              }, null, 8, ["as", "href"])) : ne("", !0),
              (g(!0), L(re, null, $e(o.data.links, (s, i) => (g(), L(re, null, [
                i < 5 ? (g(), L("div", { key: i }, [
                  O(l(xt), {
                    href: s.url,
                    as: o.as,
                    class: "size-10 p-0",
                    variant: s.active ? "primary" : "outline"
                  }, {
                    default: y(() => [
                      ee(oe(s.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["href", "as", "variant"])
                ])) : ne("", !0)
              ], 64))), 256)),
              o.data.links.length > 5 ? (g(), w(l(HO), { key: 1 })) : ne("", !0),
              o.data.next_page_url ? (g(), w(l(KO), {
                key: 2,
                as: o.as,
                "as-child": "",
                href: o.data.next_page_url
              }, null, 8, ["as", "href"])) : ne("", !0),
              O(l(YO), {
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
}), aE = /* @__PURE__ */ _({
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
    return (r, s) => (g(), w(l(ww), K(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), n3 = /* @__PURE__ */ _({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(kw), P(l(a), {
      class: l(F)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        t.class
      )
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oE = /* @__PURE__ */ _({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => {
      var o;
      return g(), w(nt((o = n.tab) != null && o.is ? n.tab.is : "a"), {
        href: n.tab.href,
        class: j([
          n.tab.active ? "bg-white text-primary hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          l(F)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            t.class
          )
        ])
      }, {
        default: y(() => {
          var r;
          return [
            (r = n.tab) != null && r.icon ? (g(), w(nt(n.tab.icon), {
              key: 0,
              class: "size-5"
            })) : ne("", !0),
            ee(" " + oe(n.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), ff = /* @__PURE__ */ _({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(xw), P(n.value, {
      class: l(F)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        t.class
      )
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), a3 = /* @__PURE__ */ _({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Cw), P({
      class: l(F)(
        "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        t.class
      )
    }, n.value), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rE = {}, sE = { class: "mt-2 text-text ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function iE(e, t) {
  return g(), L("div", sE, [
    x(e.$slots, "default")
  ]);
}
const lE = /* @__PURE__ */ qo(rE, [["render", iE]]), o3 = /* @__PURE__ */ _({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(e) {
    const t = e, n = S(
      () => t.tabs.find((a) => a.active)
    );
    return (a, o) => (g(), w(l(aE), null, {
      default: y(() => [
        O(l(ff), { class: "hidden gap-2 md:block" }, {
          default: y(() => [
            (g(!0), L(re, null, $e(a.tabs, (r) => (g(), w(l(oE), {
              key: r.name,
              tab: r
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        O(l(ff), { class: "flex md:hidden" }, {
          default: y(() => [
            O(l(qA), null, {
              default: y(() => [
                O(l(ZA), { "as-child": "" }, {
                  default: y(() => [
                    O(l(xt), { variant: "secondary" }, {
                      default: y(() => {
                        var r;
                        return [
                          ee(oe(((r = n.value) == null ? void 0 : r.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                O(l(JA), { class: "w-full" }, {
                  default: y(() => [
                    (g(!0), L(re, null, $e(a.tabs, (r) => (g(), w(l(QA), P({
                      key: r.name,
                      ref_for: !0
                    }, r), {
                      default: y(() => [
                        ee(oe(r.name), 1)
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
        O(l(lE), null, {
          default: y(() => [
            x(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), uE = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, r3 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(s1), P({
      class: l(F)("p-3", n.class)
    }, l(r)), {
      default: y(({ grid: u, weekDays: c }) => [
        O(l(mE), null, {
          default: y(() => [
            O(l(bE)),
            O(l(gE)),
            O(l(yE))
          ]),
          _: 1
        }),
        ce("div", uE, [
          (g(!0), L(re, null, $e(u, (d) => (g(), w(l(fE), {
            key: d.value.toString()
          }, {
            default: y(() => [
              O(l(hE), null, {
                default: y(() => [
                  O(l(pf), null, {
                    default: y(() => [
                      (g(!0), L(re, null, $e(c, (f) => (g(), w(l(vE), { key: f }, {
                        default: y(() => [
                          ee(oe(f), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              O(l(pE), null, {
                default: y(() => [
                  (g(!0), L(re, null, $e(d.rows, (f, p) => (g(), w(l(pf), {
                    key: `weekDate-${p}`,
                    class: "mt-2 w-full"
                  }, {
                    default: y(() => [
                      (g(!0), L(re, null, $e(f, (h) => (g(), w(l(cE), {
                        key: h.toString(),
                        date: h
                      }, {
                        default: y(() => [
                          O(l(dE), {
                            day: h,
                            month: d.value
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
}), cE = /* @__PURE__ */ _({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(c1), P({
      class: l(F)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        t.class
      )
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dE = /* @__PURE__ */ _({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(g1), P({
      class: l(F)(
        l(Cn)({ variant: "ghost" }),
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
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fE = /* @__PURE__ */ _({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(u1), P({
      class: l(F)("w-full border-collapse space-y-1", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pE = /* @__PURE__ */ _({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(v1), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hE = /* @__PURE__ */ _({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(h1), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pf = /* @__PURE__ */ _({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(m1), P({
      class: l(F)("mt-2 flex w-full", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vE = /* @__PURE__ */ _({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(d1), P({
      class: l(F)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mE = /* @__PURE__ */ _({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(i1), P({
      class: l(F)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gE = /* @__PURE__ */ _({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(l1), P({
      class: l(F)("text-sm font-medium text-text", t.class)
    }, l(a)), {
      default: y(({ headingValue: s }) => [
        x(o.$slots, "default", { headingValue: s }, () => [
          ee(oe(s), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yE = /* @__PURE__ */ _({
  __name: "RangeCalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(f1), P({
      class: l(F)(
        l(Cn)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          O(l(Vx), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bE = /* @__PURE__ */ _({
  __name: "RangeCalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = he(n);
    return (o, r) => (g(), w(l(p1), P({
      class: l(F)(
        l(Cn)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          O(l(Fx), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _E = /* @__PURE__ */ _({
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
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(X1), P(n.value, {
      class: l(F)(
        "relative shrink-0 bg-border",
        t.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        t.class
      )
    }), {
      default: y(() => [
        t.label ? (g(), L("span", {
          key: 0,
          class: j(
            l(F)(
              "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background text-xs text-muted-foreground",
              t.orientation === "vertical" ? "w-[1px] px-1 py-2" : "h-[1px] px-2 py-1"
            )
          )
        }, oe(t.label), 3)) : ne("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), wE = /* @__PURE__ */ _({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = le(e, t);
    return (r, s) => (g(), w(l(fp), K(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), s3 = /* @__PURE__ */ _({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(No), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xE = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, side: i, ...u } = n;
      return u;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(Ql), null, {
      default: y(() => [
        O(l(ou), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        O(l(au), P({
          class: l(F)(l(CE)({ side: s.side }), n.class)
        }, { ...l(r), ...s.$attrs }), {
          default: y(() => [
            x(s.$slots, "default"),
            O(l(No), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                O(l(Ms), { class: "h-4 w-4 text-muted-foreground" })
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
}), i3 = /* @__PURE__ */ _({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(yp), P({
      class: l(F)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), l3 = /* @__PURE__ */ _({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: j(l(F)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), u3 = /* @__PURE__ */ _({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: j(l(F)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), c3 = /* @__PURE__ */ _({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(gp), P({
      class: l(F)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), d3 = /* @__PURE__ */ _({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(pp), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), CE = Ua(
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
), kE = "sidebar:state", $E = 60 * 60 * 24 * 7, SE = "16rem", TE = "18rem", DE = "3rem", ME = "b", [Zs, BE] = de("Sidebar"), AE = { class: "flex h-full w-full flex-col" }, OE = ["data-state", "data-collapsible", "data-variant", "data-side"], EE = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow"
}, f3 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: n, state: a, openMobile: o, setOpenMobile: r } = Zs();
    return (s, i) => s.collapsible === "none" ? (g(), L("div", P({
      key: 0,
      class: l(F)("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", t.class)
    }, s.$attrs), [
      x(s.$slots, "default")
    ], 16)) : l(n) ? (g(), w(wE, P({
      key: 1,
      open: l(o)
    }, s.$attrs, { "onUpdate:open": l(r) }), {
      default: y(() => [
        O(xE, {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          class: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: Ft({
            "--sidebar-width": l(TE)
          })
        }, {
          default: y(() => [
            ce("div", AE, [
              x(s.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (g(), L("div", {
      key: 2,
      class: "group peer hidden md:block",
      "data-state": l(a),
      "data-collapsible": l(a) === "collapsed" ? s.collapsible : "",
      "data-variant": s.variant,
      "data-side": s.side
    }, [
      ce("div", {
        class: j(
          l(F)(
            "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            s.variant === "floating" || s.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )
        )
      }, null, 2),
      ce("div", P({
        class: l(F)(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          s.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          s.variant === "floating" || s.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, s.$attrs), [
        ce("div", EE, [
          x(s.$slots, "default", { state: l(a) })
        ])
      ], 16)
    ], 8, OE));
  }
}), p3 = /* @__PURE__ */ _({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "content",
      class: j(
        l(F)(
          "flex min-h-0 flex-1 flex-col overflow-auto bg-sidebar group-data-[collapsible=icon]:overflow-hidden",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), h3 = /* @__PURE__ */ _({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "footer",
      class: j(l(F)("flex flex-col gap-2 p-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), v3 = /* @__PURE__ */ _({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "group",
      class: j(l(F)("relative flex w-full min-w-0 flex-col p-0.5 sm:p-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), m3 = /* @__PURE__ */ _({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), {
      "data-sidebar": "group-action",
      as: n.as,
      "as-child": n.asChild,
      class: j(
        l(F)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), g3 = /* @__PURE__ */ _({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "group-content",
      class: j(l(F)("w-full text-sm", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), y3 = /* @__PURE__ */ _({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), {
      "data-sidebar": "group-label",
      as: n.as,
      "as-child": n.asChild,
      class: j(
        l(F)(
          "ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          t.class
        )
      )
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), b3 = /* @__PURE__ */ _({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "header",
      class: j(l(F)("flex flex-col gap-2 p-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), _3 = /* @__PURE__ */ _({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(BO, {
      "data-sidebar": "input",
      class: j(
        l(F)(
          "focus-visible:ring-sidebar-ring h-8 w-full bg-background shadow-none focus-visible:ring-2",
          t.class
        )
      )
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), w3 = /* @__PURE__ */ _({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("main", {
      class: j(
        l(F)(
          "relative flex min-h-svh flex-1 flex-col bg-background",
          "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), x3 = /* @__PURE__ */ _({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("ul", {
      "data-sidebar": "menu",
      class: j(l(F)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), C3 = /* @__PURE__ */ _({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(z), {
      "data-sidebar": "menu-action",
      class: j(
        l(F)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          n.showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
          t.class
        )
      ),
      as: n.as,
      "as-child": n.asChild
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), k3 = /* @__PURE__ */ _({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "menu-badge",
      class: j(
        l(F)(
          "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
          "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), PE = /* @__PURE__ */ _({
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
    const o = le(e, t);
    return (r, s) => (g(), w(l(Hw), K(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), RE = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(jw), null, {
      default: y(() => [
        O(l(Kw), P({ ...l(r), ...s.$attrs }, {
          class: l(F)(
            "z-50 overflow-hidden rounded-md border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), $3 = /* @__PURE__ */ _({
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
    return (n, a) => (g(), w(l(eh), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), IE = /* @__PURE__ */ _({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Ww), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hf = /* @__PURE__ */ _({
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
    return (n, a) => (g(), w(l(z), P({
      "data-sidebar": "menu-button",
      "data-size": n.size,
      "data-active": n.isActive,
      class: l(F)(l(NE)({ variant: n.variant, size: n.size }), t.class),
      as: n.as,
      "as-child": n.asChild
    }, n.$attrs), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), S3 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SidebarMenuButton",
  props: {
    as: { default: "button" },
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: {},
    asChild: { type: Boolean },
    tooltip: {}
  },
  setup(e) {
    const t = e, { isMobile: n, state: a } = Zs(), o = S(() => {
      const { tooltip: r, ...s } = t;
      return s;
    });
    return (r, s) => r.tooltip ? (g(), w(l(PE), { key: 1 }, {
      default: y(() => [
        O(l(IE), { "as-child": "" }, {
          default: y(() => [
            O(hf, K(Z({ ...o.value, ...r.$attrs })), {
              default: y(() => [
                x(r.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        O(l(RE), {
          side: "right",
          align: "center",
          hidden: l(a) !== "collapsed" || l(n)
        }, {
          default: y(() => [
            typeof r.tooltip == "string" ? (g(), L(re, { key: 0 }, [
              ee(oe(r.tooltip), 1)
            ], 64)) : (g(), w(nt(r.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (g(), w(hf, K(P({ key: 0 }, {
      ...o.value,
      ...r.$attrs,
      as: t.as
    })), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), T3 = /* @__PURE__ */ _({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("li", {
      "data-sidebar": "menu-item",
      class: j(l(F)("group/menu-item relative", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), vf = /* @__PURE__ */ _({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: j(l(F)("animate-pulse rounded-md bg-skeleton", t.class))
    }, null, 2));
  }
}), D3 = /* @__PURE__ */ _({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (a, o) => (g(), L("div", {
      "data-sidebar": "menu-skeleton",
      class: j(l(F)("flex h-8 items-center gap-2 rounded-md px-2", t.class))
    }, [
      a.showIcon ? (g(), w(vf, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : ne("", !0),
      O(vf, {
        class: "h-4 max-w-[--skeleton-width] flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: Ft({ "--skeleton-width": n.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), M3 = /* @__PURE__ */ _({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("ul", {
      "data-sidebar": "menu-badge",
      class: j(
        l(F)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), B3 = /* @__PURE__ */ _({
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
    return (n, a) => (g(), w(l(z), {
      "data-sidebar": "menu-sub-button",
      as: n.as,
      "as-child": n.asChild,
      "data-size": n.size,
      "data-active": n.isActive,
      class: j(
        l(F)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          n.size === "sm" && "text-xs",
          n.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), FE = {};
function VE(e, t) {
  return g(), L("li", null, [
    x(e.$slots, "default")
  ]);
}
const A3 = /* @__PURE__ */ qo(FE, [["render", VE]]), O3 = /* @__PURE__ */ _({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = R(!1), r = R(!1), s = Cm(n, "open", a, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function i(f) {
      s.value = f, document.cookie = `${kE}=${s.value}; path=/; max-age=${$E}`;
    }
    function u(f) {
      r.value = f;
    }
    function c() {
      return o.value ? u(!s.value) : i(!s.value);
    }
    Cl("keydown", (f) => {
      f.key === ME && (f.metaKey || f.ctrlKey) && (f.preventDefault(), c());
    });
    const d = S(() => s.value ? "expanded" : "collapsed");
    return BE({
      state: d,
      open: s,
      setOpen: i,
      isMobile: o,
      openMobile: r,
      setOpenMobile: u,
      toggleSidebar: c
    }), (f, p) => (g(), w(l(eh), { "delay-duration": 0 }, {
      default: y(() => [
        ce("div", {
          style: Ft({
            "--sidebar-width": l(SE),
            "--sidebar-width-icon": l(DE)
          }),
          class: j(
            l(F)(
              "group/sidebar-wrapper flex min-h-svh w-auto text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar",
              n.class
            )
          )
        }, [
          x(f.$slots, "default")
        ], 6)
      ]),
      _: 3
    }));
  }
}), E3 = /* @__PURE__ */ _({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: n } = Zs();
    return (a, o) => (g(), L("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: j(
        l(F)(
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          t.class
        )
      ),
      onClick: o[0] || (o[0] = //@ts-ignore
      (...r) => l(n) && l(n)(...r))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), P3 = /* @__PURE__ */ _({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(_E, {
      "data-sidebar": "separator",
      class: j(l(F)("bg-sidebar-border mx-2 w-auto", t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), R3 = /* @__PURE__ */ _({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: n } = Zs();
    return (a, o) => (g(), w(xt, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: j(l(F)("h-7 w-7", t.class)),
      onClick: l(n)
    }, {
      default: y(() => [
        O(l(Nx)),
        o[0] || (o[0] = ce("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), NE = Ua(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), I3 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(uw), P({
      class: l(F)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        n.class
      )
    }, l(r)), {
      default: y(() => [
        O(l(fw), { class: "relative h-2 w-full grow overflow-hidden rounded-full bg-accent data-[orientation=vertical]:w-2" }, {
          default: y(() => [
            O(l(pw), { class: "absolute h-full bg-primary data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (g(!0), L(re, null, $e(s.modelValue, (u, c) => (g(), w(l(dw), {
          key: c,
          class: "block size-5 rounded-full border-2 border-primary bg-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), LE = 5, zE = 5e6, en = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Di = 0;
function UE() {
  return Di = (Di + 1) % Number.MAX_VALUE, Di.toString();
}
const Mi = /* @__PURE__ */ new Map();
function mf(e) {
  if (Mi.has(e)) return;
  const t = setTimeout(() => {
    Mi.delete(e), vo({
      type: en.REMOVE_TOAST,
      toastId: e
    });
  }, zE);
  Mi.set(e, t);
}
const ft = R({
  toasts: []
});
function vo(e) {
  switch (e.type) {
    case en.ADD_TOAST:
      ft.value.toasts = [e.toast, ...ft.value.toasts].slice(0, LE);
      break;
    case en.UPDATE_TOAST:
      ft.value.toasts = ft.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case en.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? mf(t) : ft.value.toasts.forEach((n) => {
        mf(n.id);
      }), ft.value.toasts = ft.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case en.REMOVE_TOAST:
      e.toastId === void 0 ? ft.value.toasts = [] : ft.value.toasts = ft.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function HE() {
  return {
    toasts: S(() => ft.value.toasts),
    toast: WE,
    dismiss: (e) => vo({ type: en.DISMISS_TOAST, toastId: e })
  };
}
function WE(e) {
  const t = UE(), n = (o) => vo({
    type: en.UPDATE_TOAST,
    toast: { ...o, id: t }
  }), a = () => vo({ type: en.DISMISS_TOAST, toastId: t });
  return vo({
    type: en.ADD_TOAST,
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
const YE = { class: "flex gap-3" }, KE = { class: "grid gap-1" }, F3 = /* @__PURE__ */ _({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = HE();
    return (n, a) => (g(), w(l(ZE), null, {
      default: y(() => [
        (g(!0), L(re, null, $e(l(t), (o) => (g(), w(l(jE), P({
          key: o.id,
          ref_for: !0
        }, o, { class: "my-1" }), {
          default: y(() => [
            ce("div", YE, [
              (g(), w(nt(o.icon), {
                class: j(l(F)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              ce("div", KE, [
                o.title ? (g(), w(l(XE), { key: 0 }, {
                  default: y(() => [
                    ee(oe(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : ne("", !0),
                o.description ? (g(), L(re, { key: 1 }, [
                  Wm(o.description) ? (g(), w(l(gf), { key: 0 }, {
                    default: y(() => [
                      (g(), w(nt(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (g(), w(l(gf), { key: 1 }, {
                    default: y(() => [
                      ee(oe(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : ne("", !0),
                O(l(qE))
              ]),
              (g(), w(nt(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        O(l(GE))
      ]),
      _: 1
    }));
  }
}), jE = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = le(o, a);
    return (s, i) => (g(), w(l(Iw), P(l(r), {
      class: l(F)(l(JE)({ variant: s.variant }), n.class),
      "onUpdate:open": s.onOpenChange
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), GE = /* @__PURE__ */ _({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Vw), P(n.value, {
      class: l(F)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), V3 = /* @__PURE__ */ _({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Fw), K(Z(n.value)), {
      default: y(() => [
        O(l(xt), {
          variant: a.variant,
          class: j(t.class)
        }, {
          default: y(() => [
            x(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["variant", "class"])
      ]),
      _: 3
    }, 16));
  }
}), qE = /* @__PURE__ */ _({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Jp), P(n.value, {
      class: l(F)(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        O(l(Ms), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), XE = /* @__PURE__ */ _({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Nw), P(n.value, {
      class: l(F)("text-sm font-semibold", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gf = /* @__PURE__ */ _({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Lw), P({
      class: l(F)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ZE = /* @__PURE__ */ _({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Sw), K(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), JE = Ua(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x] data-[swipe=move]:translate-x-[--radix-toast-swipe-move-x] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
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
  sP as Accordion,
  iP as AccordionContent,
  lP as AccordionItem,
  uP as AccordionTrigger,
  cP as Badge,
  kn as Base,
  XA as BaseDropdownMenuItem,
  dP as Breadcrumb,
  fP as BreadcrumbEllipsis,
  pP as BreadcrumbItem,
  hP as BreadcrumbLink,
  vP as BreadcrumbList,
  mP as BreadcrumbPage,
  gP as BreadcrumbSeparator,
  xt as Button,
  SA as Calendar,
  TA as CalendarCell,
  DA as CalendarCellTrigger,
  MA as CalendarGrid,
  BA as CalendarGridBody,
  AA as CalendarGridHead,
  cf as CalendarGridRow,
  OA as CalendarHeadCell,
  EA as CalendarHeader,
  PA as CalendarHeading,
  RA as CalendarNextButton,
  IA as CalendarPrevButton,
  Yx as Card,
  Gx as CardContent,
  yP as CardDescription,
  bP as CardFooter,
  Kx as CardHeader,
  jx as CardTitle,
  aO as CharacterCount,
  NP as Checkbox,
  XP as CollapsibleTableRow,
  LP as Combobox,
  km as Command,
  CP as CommandDialog,
  UA as CommandEmpty,
  HA as CommandGroup,
  YA as CommandInput,
  KA as CommandItem,
  GA as CommandList,
  kP as CommandSeparator,
  $P as CommandShortcut,
  zP as DatePicker,
  iO as Description,
  $m as Dialog,
  wP as DialogClose,
  Sm as DialogContent,
  LA as DialogDescription,
  zA as DialogFooter,
  VA as DialogHeader,
  xP as DialogScrollContent,
  NA as DialogTitle,
  FA as DialogTrigger,
  qA as DropdownMenu,
  MP as DropdownMenuCheckboxItem,
  JA as DropdownMenuContent,
  SP as DropdownMenuGroup,
  DP as DropdownMenuItem,
  EP as DropdownMenuLabel,
  QA as DropdownMenuLink,
  T_ as DropdownMenuPortal,
  TP as DropdownMenuRadioGroup,
  BP as DropdownMenuRadioItem,
  OP as DropdownMenuSeparator,
  AP as DropdownMenuShortcut,
  PP as DropdownMenuSub,
  IP as DropdownMenuSubContent,
  RP as DropdownMenuSubTrigger,
  ZA as DropdownMenuTrigger,
  uO as Error,
  FP as Form,
  mO as FormElement,
  VP as FormGrid,
  UP as ImageUpload,
  BO as Input,
  Tm as Label,
  _P as LineChart,
  QP as LumuixDatatable,
  e3 as LumuixModal,
  qP as LumuixModeToggle,
  t3 as LumuixPagination,
  o3 as LumuixTabs,
  L_ as Pagination,
  UO as PaginationDetails,
  HO as PaginationEllipsis,
  WO as PaginationFirst,
  YO as PaginationLast,
  K_ as PaginationList,
  rP as PaginationListItem,
  KO as PaginationNext,
  jO as PaginationPrev,
  Dm as Popover,
  Bm as PopoverContent,
  Mm as PopoverTrigger,
  r3 as RangeCalendar,
  cE as RangeCalendarCell,
  dE as RangeCalendarCellTrigger,
  fE as RangeCalendarGrid,
  pE as RangeCalendarGridBody,
  hE as RangeCalendarGridHead,
  pf as RangeCalendarGridRow,
  vE as RangeCalendarHeadCell,
  mE as RangeCalendarHeader,
  gE as RangeCalendarHeading,
  yE as RangeCalendarNextButton,
  bE as RangeCalendarPrevButton,
  jP as Select,
  PO as SelectContent,
  HP as SelectGroup,
  IO as SelectItem,
  WP as SelectItemText,
  YP as SelectLabel,
  AO as SelectRoot,
  VO as SelectScrollDownButton,
  FO as SelectScrollUpButton,
  KP as SelectSeparator,
  EO as SelectTrigger,
  OO as SelectValue,
  _E as Separator,
  wE as Sheet,
  s3 as SheetClose,
  xE as SheetContent,
  i3 as SheetDescription,
  l3 as SheetFooter,
  u3 as SheetHeader,
  c3 as SheetTitle,
  d3 as SheetTrigger,
  f3 as Sidebar,
  p3 as SidebarContent,
  h3 as SidebarFooter,
  v3 as SidebarGroup,
  m3 as SidebarGroupAction,
  g3 as SidebarGroupContent,
  y3 as SidebarGroupLabel,
  b3 as SidebarHeader,
  _3 as SidebarInput,
  w3 as SidebarInset,
  x3 as SidebarMenu,
  C3 as SidebarMenuAction,
  k3 as SidebarMenuBadge,
  S3 as SidebarMenuButton,
  T3 as SidebarMenuItem,
  D3 as SidebarMenuSkeleton,
  M3 as SidebarMenuSub,
  B3 as SidebarMenuSubButton,
  A3 as SidebarMenuSubItem,
  O3 as SidebarProvider,
  E3 as SidebarRail,
  P3 as SidebarSeparator,
  R3 as SidebarTrigger,
  vf as Skeleton,
  I3 as Slider,
  lE as TabBaseContent,
  qO as Table,
  XO as TableBody,
  QO as TableCaption,
  fs as TableCell,
  JP as TableEmpty,
  ZP as TableFooter,
  ZO as TableHead,
  JO as TableHeader,
  Ao as TableRow,
  kl as TableRowAction,
  a3 as TabsContent,
  oE as TabsItem,
  ff as TabsList,
  aE as TabsRoot,
  n3 as TabsTrigger,
  GP as TextArea,
  jE as Toast,
  V3 as ToastAction,
  qE as ToastClose,
  gf as ToastDescription,
  ZE as ToastProvider,
  XE as ToastTitle,
  GE as ToastViewport,
  F3 as Toaster,
  LO as Toggle,
  PE as Tooltip,
  RE as TooltipContent,
  $3 as TooltipProvider,
  IE as TooltipTrigger,
  Hx as badgeVariants,
  Cn as buttonVariants,
  eP as preset,
  CE as sheetVariants,
  NE as sidebarMenuButtonVariants,
  Wx as spinnerSize,
  WE as toast,
  JE as toastVariants,
  Zs as useSidebar,
  HE as useToast
};
