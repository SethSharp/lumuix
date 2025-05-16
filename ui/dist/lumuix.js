import * as Nl from "vue";
import { computed as $, ref as A, shallowRef as Ft, watch as ae, getCurrentScope as zo, onScopeDispose as Uo, shallowReadonly as qt, unref as l, defineComponent as y, toRefs as me, createBlock as h, openBlock as v, withCtx as f, renderSlot as b, getCurrentInstance as qe, toRef as Rs, camelize as Fs, withKeys as He, h as et, onMounted as ce, createElementVNode as ie, toDisplayString as X, normalizeProps as H, guardReactiveProps as j, createTextVNode as J, mergeProps as P, withModifiers as ke, createCommentVNode as ee, createElementBlock as F, Fragment as Q, renderList as fe, resolveDynamicComponent as Be, createVNode as B, useSlots as Ls, onBeforeMount as ud, Teleport as On, watchEffect as be, onBeforeUnmount as Wo, nextTick as se, withDirectives as ua, vShow as Ho, watchSyncEffect as cd, isRef as ca, inject as Ko, provide as Ns, toHandlers as pd, normalizeStyle as Ot, toHandlerKey as fd, Comment as zs, cloneVNode as vd, vModelSelect as md, onBeforeUpdate as hd, onUpdated as gd, markRaw as yd, onUnmounted as At, readonly as La, toRaw as bd, reactive as Us, customRef as Ws, mergeDefaults as Hs, watchPostEffect as _d, effectScope as Ks, normalizeClass as K, hasInjectionContext as js, toValue as St, mergeModels as go, useModel as Gs, vModelDynamic as wd, vModelText as xd, isVNode as $d } from "vue";
function Cd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qs = {}, Ys = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  function t(n, o) {
    return {
      handler: n,
      config: o
    };
  }
  t.withOptions = function(n, o = () => ({})) {
    const s = function(r) {
      return {
        __options: r,
        handler: n(r),
        config: o(r)
      };
    };
    return s.__isOptionsFunction = !0, s.__pluginFunction = n, s.__configFunction = o, s;
  };
  const a = t;
})(Ys);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = /* @__PURE__ */ a(Ys);
  function a(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const n = t.default;
})(qs);
let Jn = qs;
var kd = (Jn.__esModule ? Jn : { default: Jn }).default;
const Bd = kd;
function zl(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var Dd = Bd(
  ({ addUtilities: e, matchUtilities: t, theme: a }) => {
    e({
      "@keyframes enter": a("keyframes.enter"),
      "@keyframes exit": a("keyframes.exit"),
      ".animate-in": {
        animationName: "enter",
        animationDuration: a("animationDuration.DEFAULT"),
        "--tw-enter-opacity": "initial",
        "--tw-enter-scale": "initial",
        "--tw-enter-rotate": "initial",
        "--tw-enter-translate-x": "initial",
        "--tw-enter-translate-y": "initial"
      },
      ".animate-out": {
        animationName: "exit",
        animationDuration: a("animationDuration.DEFAULT"),
        "--tw-exit-opacity": "initial",
        "--tw-exit-scale": "initial",
        "--tw-exit-rotate": "initial",
        "--tw-exit-translate-x": "initial",
        "--tw-exit-translate-y": "initial"
      }
    }), t(
      {
        "fade-in": (n) => ({ "--tw-enter-opacity": n }),
        "fade-out": (n) => ({ "--tw-exit-opacity": n })
      },
      { values: a("animationOpacity") }
    ), t(
      {
        "zoom-in": (n) => ({ "--tw-enter-scale": n }),
        "zoom-out": (n) => ({ "--tw-exit-scale": n })
      },
      { values: a("animationScale") }
    ), t(
      {
        "spin-in": (n) => ({ "--tw-enter-rotate": n }),
        "spin-out": (n) => ({ "--tw-exit-rotate": n })
      },
      { values: a("animationRotate") }
    ), t(
      {
        "slide-in-from-top": (n) => ({
          "--tw-enter-translate-y": `-${n}`
        }),
        "slide-in-from-bottom": (n) => ({
          "--tw-enter-translate-y": n
        }),
        "slide-in-from-left": (n) => ({
          "--tw-enter-translate-x": `-${n}`
        }),
        "slide-in-from-right": (n) => ({
          "--tw-enter-translate-x": n
        }),
        "slide-out-to-top": (n) => ({
          "--tw-exit-translate-y": `-${n}`
        }),
        "slide-out-to-bottom": (n) => ({
          "--tw-exit-translate-y": n
        }),
        "slide-out-to-left": (n) => ({
          "--tw-exit-translate-x": `-${n}`
        }),
        "slide-out-to-right": (n) => ({
          "--tw-exit-translate-x": n
        })
      },
      { values: a("animationTranslate") }
    ), t(
      { duration: (n) => ({ animationDuration: n }) },
      { values: zl(a("animationDuration")) }
    ), t(
      { delay: (n) => ({ animationDelay: n }) },
      { values: a("animationDelay") }
    ), t(
      { ease: (n) => ({ animationTimingFunction: n }) },
      { values: zl(a("animationTimingFunction")) }
    ), e({
      ".running": { animationPlayState: "running" },
      ".paused": { animationPlayState: "paused" }
    }), t(
      { "fill-mode": (n) => ({ animationFillMode: n }) },
      { values: a("animationFillMode") }
    ), t(
      { direction: (n) => ({ animationDirection: n }) },
      { values: a("animationDirection") }
    ), t(
      { repeat: (n) => ({ animationIterationCount: n }) },
      { values: a("animationRepeat") }
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
const Sd = /* @__PURE__ */ Cd(Dd), I0 = {
  safelist: ["dark"],
  darkMode: ["class"],
  plugins: [Sd],
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
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))"
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
function Xt(e, t) {
  return e - t * Math.floor(e / t);
}
const Js = 1721426;
function Vt(e, t, a, n) {
  t = Na(e, t);
  let o = t - 1, s = -2;
  return a <= 2 ? s = 0 : Bt(t) && (s = -1), Js - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + s + n);
}
function Bt(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function Na(e, t) {
  return e === "BC" ? 1 - t : t;
}
function An(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const Pd = {
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
class Ke {
  fromJulianDay(t) {
    let a = t, n = a - Js, o = Math.floor(n / 146097), s = Xt(n, 146097), r = Math.floor(s / 36524), i = Xt(s, 36524), d = Math.floor(i / 1461), u = Xt(i, 1461), c = Math.floor(u / 365), p = o * 400 + r * 100 + d * 4 + c + (r !== 4 && c !== 4 ? 1 : 0), [_, m] = An(p), w = a - Vt(_, m, 1, 1), g = 2;
    a < Vt(_, m, 3, 1) ? g = 0 : Bt(m) && (g = 1);
    let x = Math.floor(((w + g) * 12 + 373) / 367), C = a - Vt(_, m, x, 1) + 1;
    return new _e(_, m, x, C);
  }
  toJulianDay(t) {
    return Vt(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return Pd[Bt(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return Bt(t.year) ? 366 : 365;
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
const Ed = {
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
function Ce(e, t) {
  return t = Ee(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function jo(e, t) {
  return t = Ee(t, e.calendar), e = Ma(e), t = Ma(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Ze(e, t) {
  return Go(e.calendar, t.calendar) && Ce(e, t);
}
function Ul(e, t) {
  return Go(e.calendar, t.calendar) && jo(e, t);
}
function Go(e, t) {
  var a, n, o, s;
  return (s = (o = (a = e.isEqual) === null || a === void 0 ? void 0 : a.call(e, t)) !== null && o !== void 0 ? o : (n = t.isEqual) === null || n === void 0 ? void 0 : n.call(t, e)) !== null && s !== void 0 ? s : e.identifier === t.identifier;
}
function Qs(e, t) {
  return Ce(e, hn(t));
}
function Xs(e, t, a) {
  let n = e.calendar.toJulianDay(e), o = Td(t), s = Math.ceil(n + 1 - o) % 7;
  return s < 0 && (s += 7), s;
}
function Od(e) {
  return ut(Date.now(), e);
}
function hn(e) {
  return Rd(Od(e));
}
function Zs(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function Ad(e, t) {
  return Wl(e) - Wl(t);
}
function Wl(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let Qn = null;
function mt() {
  return Qn == null && (Qn = new Intl.DateTimeFormat().resolvedOptions().timeZone), Qn;
}
function Ma(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function Hl(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const Kl = /* @__PURE__ */ new Map();
function Md(e) {
  if (Intl.Locale) {
    let a = Kl.get(e);
    return a || (a = new Intl.Locale(e).maximize().region, a && Kl.set(e, a)), a;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function Td(e) {
  let t = Md(e);
  return t && Ed[t] || 0;
}
function na(e) {
  e = Ee(e, new Ke());
  let t = Na(e.era, e.year);
  return er(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function er(e, t, a, n, o, s, r) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, s, r), i.setUTCFullYear(e, t - 1, a), i.getTime();
}
function yo(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === mt()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: s, minute: r, second: i } = tr(e, t);
  return er(a, n, o, s, r, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const jl = /* @__PURE__ */ new Map();
function tr(e, t) {
  let a = jl.get(t);
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
  }), jl.set(t, a));
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
const Gl = 864e5;
function Id(e, t, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((s) => Vd(e, t, s));
}
function Vd(e, t, a) {
  let n = tr(a, t);
  return e.year === n.year && e.month === n.month && e.day === n.day && e.hour === n.hour && e.minute === n.minute && e.second === n.second;
}
function dt(e, t, a = "compatible") {
  let n = oa(e);
  if (t === "UTC") return na(n);
  if (t === mt() && a === "compatible") {
    n = Ee(n, new Ke());
    let d = /* @__PURE__ */ new Date(), u = Na(n.era, n.year);
    return d.setFullYear(u, n.month - 1, n.day), d.setHours(n.hour, n.minute, n.second, n.millisecond), d.getTime();
  }
  let o = na(n), s = yo(o - Gl, t), r = yo(o + Gl, t), i = Id(n, t, o - s, o - r);
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
function ar(e, t, a = "compatible") {
  return new Date(dt(e, t, a));
}
function ut(e, t) {
  let a = yo(e, t), n = new Date(e + a), o = n.getUTCFullYear(), s = n.getUTCMonth() + 1, r = n.getUTCDate(), i = n.getUTCHours(), d = n.getUTCMinutes(), u = n.getUTCSeconds(), c = n.getUTCMilliseconds();
  return new sa(o < 1 ? "BC" : "AD", o < 1 ? -o + 1 : o, s, r, t, a, i, d, u, c);
}
function Rd(e) {
  return new _e(e.calendar, e.era, e.year, e.month, e.day);
}
function oa(e, t) {
  let a = 0, n = 0, o = 0, s = 0;
  if ("timeZone" in e) ({ hour: a, minute: n, second: o, millisecond: s } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: a, minute: n, second: o, millisecond: s } = t), new la(e.calendar, e.era, e.year, e.month, e.day, a, n, o, s);
}
function Ee(e, t) {
  if (Go(e.calendar, t)) return e;
  let a = t.fromJulianDay(e.calendar.toJulianDay(e)), n = e.copy();
  return n.calendar = t, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, Lt(n), n;
}
function Fd(e, t, a) {
  if (e instanceof sa)
    return e.timeZone === t ? e : Nd(e, t);
  let n = dt(e, t, a);
  return ut(n, t);
}
function Ld(e) {
  let t = na(e) - e.offset;
  return new Date(t);
}
function Nd(e, t) {
  let a = na(e) - e.offset;
  return Ee(ut(a, t), e.calendar);
}
const Ba = 36e5;
function Mn(e, t) {
  let a = e.copy(), n = "hour" in a ? Hd(a, t) : 0;
  bo(a, t.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e), a.month += t.months || 0, _o(a), nr(a), a.day += (t.weeks || 0) * 7, a.day += t.days || 0, a.day += n, zd(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
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
function bo(e, t) {
  var a, n;
  !((a = (n = e.calendar).isInverseEra) === null || a === void 0) && a.call(n, e) && (t = -t), e.year += t;
}
function _o(e) {
  for (; e.month < 1; )
    bo(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, bo(e, 1);
}
function zd(e) {
  for (; e.day < 1; )
    e.month--, _o(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, _o(e);
}
function nr(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function Lt(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), nr(e);
}
function or(e) {
  let t = {};
  for (let a in e) typeof e[a] == "number" && (t[a] = -e[a]);
  return t;
}
function lr(e, t) {
  return Mn(e, or(t));
}
function qo(e, t) {
  let a = e.copy();
  return t.era != null && (a.era = t.era), t.year != null && (a.year = t.year), t.month != null && (a.month = t.month), t.day != null && (a.day = t.day), Lt(a), a;
}
function gn(e, t) {
  let a = e.copy();
  return t.hour != null && (a.hour = t.hour), t.minute != null && (a.minute = t.minute), t.second != null && (a.second = t.second), t.millisecond != null && (a.millisecond = t.millisecond), Wd(a), a;
}
function Ud(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Xa(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Xa(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Xa(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = Xa(e.hour, 24), t;
}
function Wd(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Xa(e, t) {
  let a = e % t;
  return a < 0 && (a += t), a;
}
function Hd(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, Ud(e);
}
function Yo(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "era": {
      let i = e.calendar.getEras(), d = i.indexOf(e.era);
      if (d < 0) throw new Error("Invalid era: " + e.era);
      d = ct(d, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[d], Lt(o);
      break;
    }
    case "year":
      var s, r;
      !((s = (r = o.calendar).isInverseEra) === null || s === void 0) && s.call(r, o) && (a = -a), o.year = ct(e.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, e);
      break;
    case "month":
      o.month = ct(e.month, a, 1, e.calendar.getMonthsInYear(e), n == null ? void 0 : n.round);
      break;
    case "day":
      o.day = ct(e.day, a, 1, e.calendar.getDaysInMonth(e), n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(o), Lt(o), o;
}
function sr(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "hour": {
      let s = e.hour, r = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let d = s >= 12;
        r = d ? 12 : 0, i = d ? 23 : 11;
      }
      o.hour = ct(s, a, r, i, n == null ? void 0 : n.round);
      break;
    }
    case "minute":
      o.minute = ct(e.minute, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "second":
      o.second = ct(e.second, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "millisecond":
      o.millisecond = ct(e.millisecond, a, 0, 999, n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return o;
}
function ct(e, t, a, n, o = !1) {
  if (o) {
    e += Math.sign(t), e < a && (e = n);
    let s = Math.abs(t);
    t > 0 ? e = Math.ceil(e / s) * s : e = Math.floor(e / s) * s, e > n && (e = a);
  } else
    e += t, e < a ? e = n - (a - e - 1) : e > n && (e = a + (e - n - 1));
  return e;
}
function rr(e, t) {
  let a;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let o = Mn(oa(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    a = dt(o, e.timeZone);
  } else
    a = na(e) - e.offset;
  a += t.milliseconds || 0, a += (t.seconds || 0) * 1e3, a += (t.minutes || 0) * 6e4, a += (t.hours || 0) * 36e5;
  let n = ut(a, e.timeZone);
  return Ee(n, e.calendar);
}
function Kd(e, t) {
  return rr(e, or(t));
}
function jd(e, t, a, n) {
  switch (t) {
    case "hour": {
      let o = 0, s = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let w = e.hour >= 12;
        o = w ? 12 : 0, s = w ? 23 : 11;
      }
      let r = oa(e), i = Ee(gn(r, {
        hour: o
      }), new Ke()), d = [
        dt(i, e.timeZone, "earlier"),
        dt(i, e.timeZone, "later")
      ].filter((w) => ut(w, e.timeZone).day === i.day)[0], u = Ee(gn(r, {
        hour: s
      }), new Ke()), c = [
        dt(u, e.timeZone, "earlier"),
        dt(u, e.timeZone, "later")
      ].filter((w) => ut(w, e.timeZone).day === u.day).pop(), p = na(e) - e.offset, _ = Math.floor(p / Ba), m = p % Ba;
      return p = ct(_, a, Math.floor(d / Ba), Math.floor(c / Ba), n == null ? void 0 : n.round) * Ba + m, Ee(ut(p, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return sr(e, t, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = Yo(oa(e), t, a, n), s = dt(o, e.timeZone);
      return Ee(ut(s, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function Gd(e, t, a) {
  let n = oa(e), o = gn(qo(n, t), t);
  if (o.compare(n) === 0) return e;
  let s = dt(o, e.timeZone, a);
  return Ee(ut(s, e.timeZone), e.calendar);
}
function qd(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function ir(e) {
  let t = Ee(e, new Ke()), a;
  return t.era === "BC" ? a = t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : a = String(t.year).padStart(4, "0"), `${a}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function dr(e) {
  return `${ir(e)}T${qd(e)}`;
}
function Yd(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let a = Math.floor(e / 36e5), n = e % 36e5 / 6e4;
  return `${t}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function Jd(e) {
  return `${dr(e)}${Yd(e.offset)}[${e.timeZone}]`;
}
function Qd(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Jo(e, t, a) {
  Qd(e, t), t.set(e, a);
}
function Qo(e) {
  let t = typeof e[0] == "object" ? e.shift() : new Ke(), a;
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
var Xd = /* @__PURE__ */ new WeakMap();
class _e {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new _e(this.calendar, this.era, this.year, this.month, this.day) : new _e(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return Mn(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return lr(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return qo(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return Yo(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return ar(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return ir(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return Zs(this, t);
  }
  constructor(...t) {
    Jo(this, Xd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = Qo(t);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, Lt(this);
  }
}
var Zd = /* @__PURE__ */ new WeakMap();
class la {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new la(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new la(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return Mn(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return lr(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return qo(gn(this, t), t);
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
        return Yo(this, t, a, n);
      default:
        return sr(this, t, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, a) {
    return ar(this, t, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return dr(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let a = Zs(this, t);
    return a === 0 ? Ad(this, oa(t)) : a;
  }
  constructor(...t) {
    Jo(this, Zd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = Qo(t);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, Lt(this);
  }
}
var eu = /* @__PURE__ */ new WeakMap();
class sa {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new sa(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new sa(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return rr(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return Kd(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, a) {
    return Gd(this, t, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return jd(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return Ld(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return Jd(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - Fd(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    Jo(this, eu, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = Qo(t), i = t.shift(), d = t.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.timeZone = i, this.offset = d, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, Lt(this);
  }
}
const Zt = [
  [
    1868,
    9,
    8
  ],
  [
    1912,
    7,
    30
  ],
  [
    1926,
    12,
    25
  ],
  [
    1989,
    1,
    8
  ],
  [
    2019,
    5,
    1
  ]
], tu = [
  [
    1912,
    7,
    29
  ],
  [
    1926,
    12,
    24
  ],
  [
    1989,
    1,
    7
  ],
  [
    2019,
    4,
    30
  ]
], cn = [
  1867,
  1911,
  1925,
  1988,
  2018
], kt = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function ql(e) {
  const t = Zt.findIndex(([a, n, o]) => e.year < a || e.year === a && e.month < n || e.year === a && e.month === n && e.day < o);
  return t === -1 ? Zt.length - 1 : t === 0 ? 0 : t - 1;
}
function Xn(e) {
  let t = cn[kt.indexOf(e.era)];
  if (!t) throw new Error("Unknown era: " + e.era);
  return new _e(e.year + t, e.month, e.day);
}
class au extends Ke {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), n = ql(a);
    return new _e(this, kt[n], a.year - cn[n], a.month, a.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Xn(t));
  }
  balanceDate(t) {
    let a = Xn(t), n = ql(a);
    kt[n] !== t.era && (t.era = kt[n], t.year = a.year - cn[n]), this.constrainDate(t);
  }
  constrainDate(t) {
    let a = kt.indexOf(t.era), n = tu[a];
    if (n != null) {
      let [o, s, r] = n, i = o - cn[a];
      t.year = Math.max(1, Math.min(i, t.year)), t.year === i && (t.month = Math.min(s, t.month), t.month === s && (t.day = Math.min(r, t.day)));
    }
    if (t.year === 1 && a >= 0) {
      let [, o, s] = Zt[a];
      t.month = Math.max(o, t.month), t.month === o && (t.day = Math.max(s, t.day));
    }
  }
  getEras() {
    return kt;
  }
  getYearsInEra(t) {
    let a = kt.indexOf(t.era), n = Zt[a], o = Zt[a + 1];
    if (o == null)
      return 9999 - n[0] + 1;
    let s = o[0] - n[0];
    return (t.month < o[1] || t.month === o[1] && t.day < o[2]) && s++, s;
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Xn(t));
  }
  getMinimumMonthInYear(t) {
    let a = Yl(t);
    return a ? a[1] : 1;
  }
  getMinimumDayInMonth(t) {
    let a = Yl(t);
    return a && t.month === a[1] ? a[2] : 1;
  }
  constructor(...t) {
    super(...t), this.identifier = "japanese";
  }
}
function Yl(e) {
  if (e.year === 1) {
    let t = kt.indexOf(e.era);
    return Zt[t];
  }
}
const ur = -543;
class nu extends Ke {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), n = Na(a.era, a.year);
    return new _e(this, n - ur, a.month, a.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Jl(t));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Jl(t));
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "buddhist";
  }
}
function Jl(e) {
  let [t, a] = An(e.year + ur);
  return new _e(t, a, e.month, e.day);
}
const yn = 1911;
function cr(e) {
  return e.era === "minguo" ? e.year + yn : 1 - e.year + yn;
}
function Ql(e) {
  let t = e - yn;
  return t > 0 ? [
    "minguo",
    t
  ] : [
    "before_minguo",
    1 - t
  ];
}
class ou extends Ke {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), n = Na(a.era, a.year), [o, s] = Ql(n);
    return new _e(this, o, s, a.month, a.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Xl(t));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(t) {
    let [a, n] = Ql(cr(t));
    t.era = a, t.year = n;
  }
  isInverseEra(t) {
    return t.era === "before_minguo";
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Xl(t));
  }
  getYearsInEra(t) {
    return t.era === "before_minguo" ? 9999 : 9999 - yn;
  }
  constructor(...t) {
    super(...t), this.identifier = "roc";
  }
}
function Xl(e) {
  let [t, a] = An(cr(e));
  return new _e(t, a, e.month, e.day);
}
const Zl = 1948320, es = [
  0,
  31,
  62,
  93,
  124,
  155,
  186,
  216,
  246,
  276,
  306,
  336
  // Esfand
];
class lu {
  fromJulianDay(t) {
    let a = t - Zl, n = 1 + Math.floor((33 * a + 3) / 12053), o = 365 * (n - 1) + Math.floor((8 * n + 21) / 33), s = a - o, r = s < 216 ? Math.floor(s / 31) : Math.floor((s - 6) / 30), i = s - es[r] + 1;
    return new _e(this, n, r + 1, i);
  }
  toJulianDay(t) {
    let a = Zl - 1 + 365 * (t.year - 1) + Math.floor((8 * t.year + 21) / 33);
    return a += es[t.month - 1], a += t.day, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(t) {
    return t.month <= 6 ? 31 : t.month <= 11 || Xt(25 * t.year + 11, 33) < 8 ? 30 : 29;
  }
  getEras() {
    return [
      "AP"
    ];
  }
  getYearsInEra() {
    return 9377;
  }
  constructor() {
    this.identifier = "persian";
  }
}
const Zn = 78, ts = 80;
class su extends Ke {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), n = a.year - Zn, o = t - Vt(a.era, a.year, 1, 1), s;
    o < ts ? (n--, s = Bt(a.year - 1) ? 31 : 30, o += s + 155 + 90 + 10) : (s = Bt(a.year) ? 31 : 30, o -= ts);
    let r, i;
    if (o < s)
      r = 1, i = o + 1;
    else {
      let d = o - s;
      d < 155 ? (r = Math.floor(d / 31) + 2, i = d % 31 + 1) : (d -= 155, r = Math.floor(d / 30) + 7, i = d % 30 + 1);
    }
    return new _e(this, n, r, i);
  }
  toJulianDay(t) {
    let a = t.year + Zn, [n, o] = An(a), s, r;
    return Bt(o) ? (s = 31, r = Vt(n, o, 3, 21)) : (s = 30, r = Vt(n, o, 3, 22)), t.month === 1 ? r + t.day - 1 : (r += s + Math.min(t.month - 2, 5) * 31, t.month >= 8 && (r += (t.month - 7) * 30), r += t.day - 1, r);
  }
  getDaysInMonth(t) {
    return t.month === 1 && Bt(t.year + Zn) || t.month >= 2 && t.month <= 6 ? 31 : 30;
  }
  getYearsInEra() {
    return 9919;
  }
  getEras() {
    return [
      "saka"
    ];
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "indian";
  }
}
const bn = 1948440, as = 1948439, Re = 1300, Yt = 1600, ru = 460322;
function _n(e, t, a, n) {
  return n + Math.ceil(29.5 * (a - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function pr(e, t, a) {
  let n = Math.floor((30 * (a - t) + 10646) / 10631), o = Math.min(12, Math.ceil((a - (29 + _n(t, n, 1, 1))) / 29.5) + 1), s = a - _n(t, n, o, 1) + 1;
  return new _e(e, n, o, s);
}
function ns(e) {
  return (14 + 11 * e) % 30 < 11;
}
class Xo {
  fromJulianDay(t) {
    return pr(this, bn, t);
  }
  toJulianDay(t) {
    return _n(bn, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    let a = 29 + t.month % 2;
    return t.month === 12 && ns(t.year) && a++, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(t) {
    return ns(t.year) ? 355 : 354;
  }
  getYearsInEra() {
    return 9665;
  }
  getEras() {
    return [
      "AH"
    ];
  }
  constructor() {
    this.identifier = "islamic-civil";
  }
}
class iu extends Xo {
  fromJulianDay(t) {
    return pr(this, as, t);
  }
  toJulianDay(t) {
    return _n(as, t.year, t.month, t.day);
  }
  constructor(...t) {
    super(...t), this.identifier = "islamic-tbla";
  }
}
const du = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let wo, ea;
function pn(e) {
  return ru + ea[e - Re];
}
function Pa(e, t) {
  let a = e - Re, n = 1 << 11 - (t - 1);
  return wo[a] & n ? 30 : 29;
}
function os(e, t) {
  let a = pn(e);
  for (let n = 1; n < t; n++) a += Pa(e, n);
  return a;
}
function ls(e) {
  return ea[e + 1 - Re] - ea[e - Re];
}
class uu extends Xo {
  fromJulianDay(t) {
    let a = t - bn, n = pn(Re), o = pn(Yt);
    if (a < n || a > o) return super.fromJulianDay(t);
    {
      let s = Re - 1, r = 1, i = 1;
      for (; i > 0; ) {
        s++, i = a - pn(s) + 1;
        let d = ls(s);
        if (i === d) {
          r = 12;
          break;
        } else if (i < d) {
          let u = Pa(s, r);
          for (r = 1; i > u; )
            i -= u, r++, u = Pa(s, r);
          break;
        }
      }
      return new _e(this, s, r, a - os(s, r) + 1);
    }
  }
  toJulianDay(t) {
    return t.year < Re || t.year > Yt ? super.toJulianDay(t) : bn + os(t.year, t.month) + (t.day - 1);
  }
  getDaysInMonth(t) {
    return t.year < Re || t.year > Yt ? super.getDaysInMonth(t) : Pa(t.year, t.month);
  }
  getDaysInYear(t) {
    return t.year < Re || t.year > Yt ? super.getDaysInYear(t) : ls(t.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", wo || (wo = new Uint16Array(Uint8Array.from(atob(du), (t) => t.charCodeAt(0)).buffer)), !ea) {
      ea = new Uint32Array(Yt - Re + 1);
      let t = 0;
      for (let a = Re; a <= Yt; a++) {
        ea[a - Re] = t;
        for (let n = 1; n <= 12; n++) t += Pa(a, n);
      }
    }
  }
}
const ss = 347997, fr = 1080, vr = 24 * fr, cu = 29, pu = 12 * fr + 793, fu = cu * vr + pu;
function It(e) {
  return Xt(e * 7 + 1, 19) < 7;
}
function fn(e) {
  let t = Math.floor((235 * e - 234) / 19), a = 12084 + 13753 * t, n = t * 29 + Math.floor(a / 25920);
  return Xt(3 * (n + 1), 7) < 3 && (n += 1), n;
}
function vu(e) {
  let t = fn(e - 1), a = fn(e);
  return fn(e + 1) - a === 356 ? 2 : a - t === 382 ? 1 : 0;
}
function Oa(e) {
  return fn(e) + vu(e);
}
function mr(e) {
  return Oa(e + 1) - Oa(e);
}
function mu(e) {
  let t = mr(e);
  switch (t > 380 && (t -= 30), t) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function Za(e, t) {
  if (t >= 6 && !It(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13) return 29;
  let a = mu(e);
  return t === 2 ? a === 2 ? 30 : 29 : t === 3 ? a === 0 ? 29 : 30 : t === 6 ? It(e) ? 30 : 0 : 30;
}
class hu {
  fromJulianDay(t) {
    let a = t - ss, n = a * vr / fu, o = Math.floor((19 * n + 234) / 235) + 1, s = Oa(o), r = Math.floor(a - s);
    for (; r < 1; )
      o--, s = Oa(o), r = Math.floor(a - s);
    let i = 1, d = 0;
    for (; d < r; )
      d += Za(o, i), i++;
    i--, d -= Za(o, i);
    let u = r - d;
    return new _e(this, o, i, u);
  }
  toJulianDay(t) {
    let a = Oa(t.year);
    for (let n = 1; n < t.month; n++) a += Za(t.year, n);
    return a + t.day + ss;
  }
  getDaysInMonth(t) {
    return Za(t.year, t.month);
  }
  getMonthsInYear(t) {
    return It(t.year) ? 13 : 12;
  }
  getDaysInYear(t) {
    return mr(t.year);
  }
  getYearsInEra() {
    return 9999;
  }
  getEras() {
    return [
      "AM"
    ];
  }
  balanceYearMonth(t, a) {
    a.year !== t.year && (It(a.year) && !It(t.year) && a.month > 6 ? t.month-- : !It(a.year) && It(t.year) && a.month > 6 && t.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const xo = 1723856, rs = 1824665, $o = 5500;
function wn(e, t, a, n) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (a - 1) + n - 1;
}
function Zo(e, t) {
  let a = Math.floor(4 * (t - e) / 1461), n = 1 + Math.floor((t - wn(e, a, 1, 1)) / 30), o = t + 1 - wn(e, a, n, 1);
  return [
    a,
    n,
    o
  ];
}
function hr(e) {
  return Math.floor(e % 4 / 3);
}
function gr(e, t) {
  return t % 13 !== 0 ? 30 : hr(e) + 5;
}
class el {
  fromJulianDay(t) {
    let [a, n, o] = Zo(xo, t), s = "AM";
    return a <= 0 && (s = "AA", a += $o), new _e(this, s, a, n, o);
  }
  toJulianDay(t) {
    let a = t.year;
    return t.era === "AA" && (a -= $o), wn(xo, a, t.month, t.day);
  }
  getDaysInMonth(t) {
    return gr(t.year, t.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(t) {
    return 365 + hr(t.year);
  }
  getYearsInEra(t) {
    return t.era === "AA" ? 9999 : 9991;
  }
  getEras() {
    return [
      "AA",
      "AM"
    ];
  }
  constructor() {
    this.identifier = "ethiopic";
  }
}
class gu extends el {
  fromJulianDay(t) {
    let [a, n, o] = Zo(xo, t);
    return a += $o, new _e(this, "AA", a, n, o);
  }
  getEras() {
    return [
      "AA"
    ];
  }
  getYearsInEra() {
    return 9999;
  }
  constructor(...t) {
    super(...t), this.identifier = "ethioaa";
  }
}
class yu extends el {
  fromJulianDay(t) {
    let [a, n, o] = Zo(rs, t), s = "CE";
    return a <= 0 && (s = "BCE", a = 1 - a), new _e(this, s, a, n, o);
  }
  toJulianDay(t) {
    let a = t.year;
    return t.era === "BCE" && (a = 1 - a), wn(rs, a, t.month, t.day);
  }
  getDaysInMonth(t) {
    let a = t.year;
    return t.era === "BCE" && (a = 1 - a), gr(a, t.month);
  }
  isInverseEra(t) {
    return t.era === "BCE";
  }
  balanceDate(t) {
    t.year <= 0 && (t.era = t.era === "BCE" ? "CE" : "BCE", t.year = 1 - t.year);
  }
  getEras() {
    return [
      "BCE",
      "CE"
    ];
  }
  getYearsInEra(t) {
    return t.era === "BCE" ? 9999 : 9715;
  }
  constructor(...t) {
    super(...t), this.identifier = "coptic";
  }
}
function bu(e) {
  switch (e) {
    case "buddhist":
      return new nu();
    case "ethiopic":
      return new el();
    case "ethioaa":
      return new gu();
    case "coptic":
      return new yu();
    case "hebrew":
      return new hu();
    case "indian":
      return new su();
    case "islamic-civil":
      return new Xo();
    case "islamic-tbla":
      return new iu();
    case "islamic-umalqura":
      return new uu();
    case "japanese":
      return new au();
    case "persian":
      return new lu();
    case "roc":
      return new ou();
    case "gregory":
    default:
      return new Ke();
  }
}
let eo = /* @__PURE__ */ new Map();
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
    return xu() && (this.resolvedHourCycle || (this.resolvedHourCycle = $u(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, a = {}) {
    this.formatter = yr(t, a), this.options = a;
  }
}
const _u = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function yr(e, t = {}) {
  if (typeof t.hour12 == "boolean" && wu()) {
    t = {
      ...t
    };
    let o = _u[String(t.hour12)][e.split("-")[0]], s = t.hour12 ? "h12" : "h23";
    t.hourCycle = o ?? s, delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((o, s) => o[0] < s[0] ? -1 : 1).join() : "");
  if (eo.has(a)) return eo.get(a);
  let n = new Intl.DateTimeFormat(e, t);
  return eo.set(a, n), n;
}
let to = null;
function wu() {
  return to == null && (to = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), to;
}
let ao = null;
function xu() {
  return ao == null && (ao = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), ao;
}
function $u(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = yr(e, {
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
function Cu(e, t) {
  const a = [];
  for (let n = 0; n < e.length; n += t)
    a.push(e.slice(n, n + t));
  return a;
}
function Fe(e, t = mt()) {
  return tl(e) ? e.toDate() : e.toDate(t);
}
function ku(e) {
  return e instanceof la;
}
function tl(e) {
  return e instanceof sa;
}
function Bu(e) {
  return ku(e) || tl(e);
}
function ht(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), a = e.getMonth() + 1;
    return new Date(t, a, 0).getDate();
  } else
    return e.set({ day: 100 }).day;
}
function Dt(e, t) {
  return e.compare(t) < 0;
}
function Ea(e, t) {
  return e.compare(t) > 0;
}
function Du(e, t) {
  return e.compare(t) <= 0;
}
function Su(e, t) {
  return e.compare(t) >= 0;
}
function Pu(e, t, a) {
  return Su(e, t) && Du(e, a);
}
function Eu(e, t, a) {
  return Ea(e, t) && Dt(e, a);
}
function Ou(e, t, a) {
  const n = Xs(e, a);
  return t > n ? e.subtract({ days: n + 7 - t }) : t === n ? e : e.subtract({ days: n - t });
}
function Au(e, t, a) {
  const n = Xs(e, a), o = t === 0 ? 6 : t - 1;
  return n === o ? e : n > o ? e.add({ days: 7 - n + o }) : e.add({ days: o - n });
}
function Mu(e, t, a, n) {
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
function is(e, t) {
  const a = [];
  let n = e.add({ days: 1 });
  const o = t;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function no(e) {
  const { dateObj: t, weekStartsOn: a, fixedWeeks: n, locale: o } = e, s = ht(t), r = Array.from({ length: s }, (x, C) => t.set({ day: C + 1 })), i = Ma(t), d = Hl(t), u = Ou(i, a, o), c = Au(d, a, o), p = is(u.subtract({ days: 1 }), i), _ = is(d, c.add({ days: 1 })), m = p.length + r.length + _.length;
  if (n && m < 42) {
    const x = 42 - m;
    let C = _[_.length - 1];
    C || (C = Hl(t));
    const D = Array.from({ length: x }, (k, O) => {
      const E = O + 1;
      return C.add({ days: E });
    });
    _.push(...D);
  }
  const w = p.concat(r, _), g = Cu(w, 7);
  return {
    value: t,
    cells: w,
    rows: g
  };
}
function Tu(e) {
  const { dateObj: t, startIndex: a, endIndex: n } = e, o = Array.from({ length: Math.abs(a ?? 0) + n }, (s, r) => r <= Math.abs(a ?? 0) ? t.subtract({ years: r }).set({ day: 1, month: 1 }) : t.add({ years: r - n }).set({ day: 1, month: 1 }));
  return o.sort((s, r) => s.year - r.year), o;
}
function Iu(e) {
  const { dateObj: t, numberOfMonths: a = 1, pagedNavigation: n = !1 } = e;
  return a && n ? Array.from({ length: Math.floor(12 / a) }, (o, s) => Ma(t.set({ month: s * a + 1 }))) : Array.from({ length: 12 }, (o, s) => Ma(t.set({ month: s + 1 })));
}
function Tt(e) {
  const { numberOfMonths: t, dateObj: a, ...n } = e, o = [];
  if (!t || t === 1)
    return o.push(
      no({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    no({
      ...n,
      dateObj: a
    })
  );
  for (let s = 1; s < t; s++) {
    const r = a.add({ months: s });
    o.push(
      no({
        ...n,
        dateObj: r
      })
    );
  }
  return o;
}
const Vu = ["top", "right", "bottom", "left"], Pt = Math.min, Ae = Math.max, xn = Math.round, en = Math.floor, tt = (e) => ({
  x: e,
  y: e
}), Ru = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Fu = {
  start: "end",
  end: "start"
};
function Co(e, t, a) {
  return Ae(e, Pt(t, a));
}
function gt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yt(e) {
  return e.split("-")[0];
}
function pa(e) {
  return e.split("-")[1];
}
function al(e) {
  return e === "x" ? "y" : "x";
}
function nl(e) {
  return e === "y" ? "height" : "width";
}
function ft(e) {
  return ["top", "bottom"].includes(yt(e)) ? "y" : "x";
}
function ol(e) {
  return al(ft(e));
}
function Lu(e, t, a) {
  a === void 0 && (a = !1);
  const n = pa(e), o = ol(e), s = nl(o);
  let r = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (r = $n(r)), [r, $n(r)];
}
function Nu(e) {
  const t = $n(e);
  return [ko(e), t, ko(t)];
}
function ko(e) {
  return e.replace(/start|end/g, (t) => Fu[t]);
}
function zu(e, t, a) {
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
function Uu(e, t, a, n) {
  const o = pa(e);
  let s = zu(yt(e), a === "start", n);
  return o && (s = s.map((r) => r + "-" + o), t && (s = s.concat(s.map(ko)))), s;
}
function $n(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ru[t]);
}
function Wu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function br(e) {
  return typeof e != "number" ? Wu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Cn(e) {
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
function ds(e, t, a) {
  let {
    reference: n,
    floating: o
  } = e;
  const s = ft(t), r = ol(t), i = nl(r), d = yt(t), u = s === "y", c = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, _ = n[i] / 2 - o[i] / 2;
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
  switch (pa(t)) {
    case "start":
      m[r] -= _ * (a && u ? -1 : 1);
      break;
    case "end":
      m[r] += _ * (a && u ? -1 : 1);
      break;
  }
  return m;
}
const Hu = async (e, t, a) => {
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
  } = ds(u, n, d), _ = n, m = {}, w = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: x,
      fn: C
    } = i[g], {
      x: D,
      y: k,
      data: O,
      reset: E
    } = await C({
      x: c,
      y: p,
      initialPlacement: n,
      placement: _,
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
      [x]: {
        ...m[x],
        ...O
      }
    }, E && w <= 50 && (w++, typeof E == "object" && (E.placement && (_ = E.placement), E.rects && (u = E.rects === !0 ? await r.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: c,
      y: p
    } = ds(u, _, d)), g = -1);
  }
  return {
    x: c,
    y: p,
    placement: _,
    strategy: o,
    middlewareData: m
  };
};
async function Ta(e, t) {
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
    altBoundary: _ = !1,
    padding: m = 0
  } = gt(t, e), w = br(m), x = i[_ ? p === "floating" ? "reference" : "floating" : p], C = Cn(await s.getClippingRect({
    element: (a = await (s.isElement == null ? void 0 : s.isElement(x))) == null || a ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
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
  }, E = Cn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: D,
    offsetParent: k,
    strategy: d
  }) : D);
  return {
    top: (C.top - E.top + w.top) / O.y,
    bottom: (E.bottom - C.bottom + w.bottom) / O.y,
    left: (C.left - E.left + w.left) / O.x,
    right: (E.right - C.right + w.right) / O.x
  };
}
const Ku = (e) => ({
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
    } = gt(e, t) || {};
    if (u == null)
      return {};
    const p = br(c), _ = {
      x: a,
      y: n
    }, m = ol(o), w = nl(m), g = await r.getDimensions(u), x = m === "y", C = x ? "top" : "left", D = x ? "bottom" : "right", k = x ? "clientHeight" : "clientWidth", O = s.reference[w] + s.reference[m] - _[m] - s.floating[w], E = _[m] - s.reference[m], I = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(u));
    let M = I ? I[k] : 0;
    (!M || !await (r.isElement == null ? void 0 : r.isElement(I))) && (M = i.floating[k] || s.floating[w]);
    const W = O / 2 - E / 2, N = M / 2 - g[w] / 2 - 1, S = Pt(p[C], N), V = Pt(p[D], N), R = S, q = M - g[w] - V, U = M / 2 - g[w] / 2 + W, Y = Co(R, U, q), te = !d.arrow && pa(o) != null && U !== Y && s.reference[w] / 2 - (U < R ? S : V) - g[w] / 2 < 0, ge = te ? U < R ? U - R : U - q : 0;
    return {
      [m]: _[m] + ge,
      data: {
        [m]: Y,
        centerOffset: U - Y - ge,
        ...te && {
          alignmentOffset: ge
        }
      },
      reset: te
    };
  }
}), ju = function(e) {
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
        fallbackPlacements: _,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: g = !0,
        ...x
      } = gt(e, t);
      if ((a = s.arrow) != null && a.alignmentOffset)
        return {};
      const C = yt(o), D = ft(i), k = yt(i) === i, O = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), E = _ || (k || !g ? [$n(i)] : Nu(i)), I = w !== "none";
      !_ && I && E.push(...Uu(i, g, w, O));
      const M = [i, ...E], W = await Ta(t, x), N = [];
      let S = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (c && N.push(W[C]), p) {
        const Y = Lu(o, r, O);
        N.push(W[Y[0]], W[Y[1]]);
      }
      if (S = [...S, {
        placement: o,
        overflows: N
      }], !N.every((Y) => Y <= 0)) {
        var V, R;
        const Y = (((V = s.flip) == null ? void 0 : V.index) || 0) + 1, te = M[Y];
        if (te) {
          var q;
          const ye = p === "alignment" ? D !== ft(te) : !1, G = ((q = S[0]) == null ? void 0 : q.overflows[0]) > 0;
          if (!ye || G)
            return {
              data: {
                index: Y,
                overflows: S
              },
              reset: {
                placement: te
              }
            };
        }
        let ge = (R = S.filter((ye) => ye.overflows[0] <= 0).sort((ye, G) => ye.overflows[1] - G.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!ge)
          switch (m) {
            case "bestFit": {
              var U;
              const ye = (U = S.filter((G) => {
                if (I) {
                  const Z = ft(G.placement);
                  return Z === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Z === "y";
                }
                return !0;
              }).map((G) => [G.placement, G.overflows.filter((Z) => Z > 0).reduce((Z, de) => Z + de, 0)]).sort((G, Z) => G[1] - Z[1])[0]) == null ? void 0 : U[0];
              ye && (ge = ye);
              break;
            }
            case "initialPlacement":
              ge = i;
              break;
          }
        if (o !== ge)
          return {
            reset: {
              placement: ge
            }
          };
      }
      return {};
    }
  };
};
function us(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function cs(e) {
  return Vu.some((t) => e[t] >= 0);
}
const Gu = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: a
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = gt(e, t);
      switch (n) {
        case "referenceHidden": {
          const s = await Ta(t, {
            ...o,
            elementContext: "reference"
          }), r = us(s, a.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: cs(r)
            }
          };
        }
        case "escaped": {
          const s = await Ta(t, {
            ...o,
            altBoundary: !0
          }), r = us(s, a.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: cs(r)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function qu(e, t) {
  const {
    placement: a,
    platform: n,
    elements: o
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), r = yt(a), i = pa(a), d = ft(a) === "y", u = ["left", "top"].includes(r) ? -1 : 1, c = s && d ? -1 : 1, p = gt(t, e);
  let {
    mainAxis: _,
    crossAxis: m,
    alignmentAxis: w
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof w == "number" && (m = i === "end" ? w * -1 : w), d ? {
    x: m * c,
    y: _ * u
  } : {
    x: _ * u,
    y: m * c
  };
}
const Yu = function(e) {
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
      } = t, d = await qu(t, e);
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
}, Ju = function(e) {
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
      } = gt(e, t), u = {
        x: a,
        y: n
      }, c = await Ta(t, d), p = ft(yt(o)), _ = al(p);
      let m = u[_], w = u[p];
      if (s) {
        const x = _ === "y" ? "top" : "left", C = _ === "y" ? "bottom" : "right", D = m + c[x], k = m - c[C];
        m = Co(D, m, k);
      }
      if (r) {
        const x = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", D = w + c[x], k = w - c[C];
        w = Co(D, w, k);
      }
      const g = i.fn({
        ...t,
        [_]: m,
        [p]: w
      });
      return {
        ...g,
        data: {
          x: g.x - a,
          y: g.y - n,
          enabled: {
            [_]: s,
            [p]: r
          }
        }
      };
    }
  };
}, Qu = function(e) {
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
      } = gt(e, t), c = {
        x: a,
        y: n
      }, p = ft(o), _ = al(p);
      let m = c[_], w = c[p];
      const g = gt(i, t), x = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (d) {
        const k = _ === "y" ? "height" : "width", O = s.reference[_] - s.floating[k] + x.mainAxis, E = s.reference[_] + s.reference[k] - x.mainAxis;
        m < O ? m = O : m > E && (m = E);
      }
      if (u) {
        var C, D;
        const k = _ === "y" ? "width" : "height", O = ["top", "left"].includes(yt(o)), E = s.reference[p] - s.floating[k] + (O && ((C = r.offset) == null ? void 0 : C[p]) || 0) + (O ? 0 : x.crossAxis), I = s.reference[p] + s.reference[k] + (O ? 0 : ((D = r.offset) == null ? void 0 : D[p]) || 0) - (O ? x.crossAxis : 0);
        w < E ? w = E : w > I && (w = I);
      }
      return {
        [_]: m,
        [p]: w
      };
    }
  };
}, Xu = function(e) {
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
      } = gt(e, t), c = await Ta(t, u), p = yt(o), _ = pa(o), m = ft(o) === "y", {
        width: w,
        height: g
      } = s.floating;
      let x, C;
      p === "top" || p === "bottom" ? (x = p, C = _ === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, x = _ === "end" ? "top" : "bottom");
      const D = g - c.top - c.bottom, k = w - c.left - c.right, O = Pt(g - c[x], D), E = Pt(w - c[C], k), I = !t.middlewareData.shift;
      let M = O, W = E;
      if ((a = t.middlewareData.shift) != null && a.enabled.x && (W = k), (n = t.middlewareData.shift) != null && n.enabled.y && (M = D), I && !_) {
        const S = Ae(c.left, 0), V = Ae(c.right, 0), R = Ae(c.top, 0), q = Ae(c.bottom, 0);
        m ? W = w - 2 * (S !== 0 || V !== 0 ? S + V : Ae(c.left, c.right)) : M = g - 2 * (R !== 0 || q !== 0 ? R + q : Ae(c.top, c.bottom));
      }
      await d({
        ...t,
        availableWidth: W,
        availableHeight: M
      });
      const N = await r.getDimensions(i.floating);
      return w !== N.width || g !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Tn() {
  return typeof window < "u";
}
function zt(e) {
  return ll(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Me(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function nt(e) {
  var t;
  return (t = (ll(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ll(e) {
  return Tn() ? e instanceof Node || e instanceof Me(e).Node : !1;
}
function je(e) {
  return Tn() ? e instanceof Element || e instanceof Me(e).Element : !1;
}
function at(e) {
  return Tn() ? e instanceof HTMLElement || e instanceof Me(e).HTMLElement : !1;
}
function ps(e) {
  return !Tn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Me(e).ShadowRoot;
}
function za(e) {
  const {
    overflow: t,
    overflowX: a,
    overflowY: n,
    display: o
  } = Ge(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + a) && !["inline", "contents"].includes(o);
}
function Zu(e) {
  return ["table", "td", "th"].includes(zt(e));
}
function In(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function sl(e) {
  const t = rl(), a = je(e) ? Ge(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => a[n] ? a[n] !== "none" : !1) || (a.containerType ? a.containerType !== "normal" : !1) || !t && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !t && (a.filter ? a.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function ec(e) {
  let t = Et(e);
  for (; at(t) && !ra(t); ) {
    if (sl(t))
      return t;
    if (In(t))
      return null;
    t = Et(t);
  }
  return null;
}
function rl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ra(e) {
  return ["html", "body", "#document"].includes(zt(e));
}
function Ge(e) {
  return Me(e).getComputedStyle(e);
}
function Vn(e) {
  return je(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Et(e) {
  if (zt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ps(e) && e.host || // Fallback.
    nt(e)
  );
  return ps(t) ? t.host : t;
}
function _r(e) {
  const t = Et(e);
  return ra(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : at(t) && za(t) ? t : _r(t);
}
function Ia(e, t, a) {
  var n;
  t === void 0 && (t = []), a === void 0 && (a = !0);
  const o = _r(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Me(o);
  if (s) {
    const i = Bo(r);
    return t.concat(r, r.visualViewport || [], za(o) ? o : [], i && a ? Ia(i) : []);
  }
  return t.concat(o, Ia(o, [], a));
}
function Bo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function wr(e) {
  const t = Ge(e);
  let a = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = at(e), s = o ? e.offsetWidth : a, r = o ? e.offsetHeight : n, i = xn(a) !== s || xn(n) !== r;
  return i && (a = s, n = r), {
    width: a,
    height: n,
    $: i
  };
}
function il(e) {
  return je(e) ? e : e.contextElement;
}
function ta(e) {
  const t = il(e);
  if (!at(t))
    return tt(1);
  const a = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = wr(t);
  let r = (s ? xn(a.width) : a.width) / n, i = (s ? xn(a.height) : a.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: r,
    y: i
  };
}
const tc = /* @__PURE__ */ tt(0);
function xr(e) {
  const t = Me(e);
  return !rl() || !t.visualViewport ? tc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ac(e, t, a) {
  return t === void 0 && (t = !1), !a || t && a !== Me(e) ? !1 : t;
}
function Nt(e, t, a, n) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const o = e.getBoundingClientRect(), s = il(e);
  let r = tt(1);
  t && (n ? je(n) && (r = ta(n)) : r = ta(e));
  const i = ac(s, a, n) ? xr(s) : tt(0);
  let d = (o.left + i.x) / r.x, u = (o.top + i.y) / r.y, c = o.width / r.x, p = o.height / r.y;
  if (s) {
    const _ = Me(s), m = n && je(n) ? Me(n) : n;
    let w = _, g = Bo(w);
    for (; g && n && m !== w; ) {
      const x = ta(g), C = g.getBoundingClientRect(), D = Ge(g), k = C.left + (g.clientLeft + parseFloat(D.paddingLeft)) * x.x, O = C.top + (g.clientTop + parseFloat(D.paddingTop)) * x.y;
      d *= x.x, u *= x.y, c *= x.x, p *= x.y, d += k, u += O, w = Me(g), g = Bo(w);
    }
  }
  return Cn({
    width: c,
    height: p,
    x: d,
    y: u
  });
}
function dl(e, t) {
  const a = Vn(e).scrollLeft;
  return t ? t.left + a : Nt(nt(e)).left + a;
}
function $r(e, t, a) {
  a === void 0 && (a = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (a ? 0 : (
    // RTL <body> scrollbar.
    dl(e, n)
  )), s = n.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function nc(e) {
  let {
    elements: t,
    rect: a,
    offsetParent: n,
    strategy: o
  } = e;
  const s = o === "fixed", r = nt(n), i = t ? In(t.floating) : !1;
  if (n === r || i && s)
    return a;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = tt(1);
  const c = tt(0), p = at(n);
  if ((p || !p && !s) && ((zt(n) !== "body" || za(r)) && (d = Vn(n)), at(n))) {
    const m = Nt(n);
    u = ta(n), c.x = m.x + n.clientLeft, c.y = m.y + n.clientTop;
  }
  const _ = r && !p && !s ? $r(r, d, !0) : tt(0);
  return {
    width: a.width * u.x,
    height: a.height * u.y,
    x: a.x * u.x - d.scrollLeft * u.x + c.x + _.x,
    y: a.y * u.y - d.scrollTop * u.y + c.y + _.y
  };
}
function oc(e) {
  return Array.from(e.getClientRects());
}
function lc(e) {
  const t = nt(e), a = Vn(e), n = e.ownerDocument.body, o = Ae(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = Ae(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -a.scrollLeft + dl(e);
  const i = -a.scrollTop;
  return Ge(n).direction === "rtl" && (r += Ae(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: r,
    y: i
  };
}
function sc(e, t) {
  const a = Me(e), n = nt(e), o = a.visualViewport;
  let s = n.clientWidth, r = n.clientHeight, i = 0, d = 0;
  if (o) {
    s = o.width, r = o.height;
    const u = rl();
    (!u || u && t === "fixed") && (i = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: i,
    y: d
  };
}
function rc(e, t) {
  const a = Nt(e, !0, t === "fixed"), n = a.top + e.clientTop, o = a.left + e.clientLeft, s = at(e) ? ta(e) : tt(1), r = e.clientWidth * s.x, i = e.clientHeight * s.y, d = o * s.x, u = n * s.y;
  return {
    width: r,
    height: i,
    x: d,
    y: u
  };
}
function fs(e, t, a) {
  let n;
  if (t === "viewport")
    n = sc(e, a);
  else if (t === "document")
    n = lc(nt(e));
  else if (je(t))
    n = rc(t, a);
  else {
    const o = xr(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Cn(n);
}
function Cr(e, t) {
  const a = Et(e);
  return a === t || !je(a) || ra(a) ? !1 : Ge(a).position === "fixed" || Cr(a, t);
}
function ic(e, t) {
  const a = t.get(e);
  if (a)
    return a;
  let n = Ia(e, [], !1).filter((i) => je(i) && zt(i) !== "body"), o = null;
  const s = Ge(e).position === "fixed";
  let r = s ? Et(e) : e;
  for (; je(r) && !ra(r); ) {
    const i = Ge(r), d = sl(r);
    !d && i.position === "fixed" && (o = null), (s ? !d && !o : !d && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || za(r) && !d && Cr(e, r)) ? n = n.filter((c) => c !== r) : o = i, r = Et(r);
  }
  return t.set(e, n), n;
}
function dc(e) {
  let {
    element: t,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = e;
  const r = [...a === "clippingAncestors" ? In(t) ? [] : ic(t, this._c) : [].concat(a), n], i = r[0], d = r.reduce((u, c) => {
    const p = fs(t, c, o);
    return u.top = Ae(p.top, u.top), u.right = Pt(p.right, u.right), u.bottom = Pt(p.bottom, u.bottom), u.left = Ae(p.left, u.left), u;
  }, fs(t, i, o));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function uc(e) {
  const {
    width: t,
    height: a
  } = wr(e);
  return {
    width: t,
    height: a
  };
}
function cc(e, t, a) {
  const n = at(t), o = nt(t), s = a === "fixed", r = Nt(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = tt(0);
  function u() {
    d.x = dl(o);
  }
  if (n || !n && !s)
    if ((zt(t) !== "body" || za(o)) && (i = Vn(t)), n) {
      const m = Nt(t, !0, s, t);
      d.x = m.x + t.clientLeft, d.y = m.y + t.clientTop;
    } else o && u();
  s && !n && o && u();
  const c = o && !n && !s ? $r(o, i) : tt(0), p = r.left + i.scrollLeft - d.x - c.x, _ = r.top + i.scrollTop - d.y - c.y;
  return {
    x: p,
    y: _,
    width: r.width,
    height: r.height
  };
}
function oo(e) {
  return Ge(e).position === "static";
}
function vs(e, t) {
  if (!at(e) || Ge(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let a = e.offsetParent;
  return nt(e) === a && (a = a.ownerDocument.body), a;
}
function kr(e, t) {
  const a = Me(e);
  if (In(e))
    return a;
  if (!at(e)) {
    let o = Et(e);
    for (; o && !ra(o); ) {
      if (je(o) && !oo(o))
        return o;
      o = Et(o);
    }
    return a;
  }
  let n = vs(e, t);
  for (; n && Zu(n) && oo(n); )
    n = vs(n, t);
  return n && ra(n) && oo(n) && !sl(n) ? a : n || ec(e) || a;
}
const pc = async function(e) {
  const t = this.getOffsetParent || kr, a = this.getDimensions, n = await a(e.floating);
  return {
    reference: cc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function fc(e) {
  return Ge(e).direction === "rtl";
}
const vc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: nc,
  getDocumentElement: nt,
  getClippingRect: dc,
  getOffsetParent: kr,
  getElementRects: pc,
  getClientRects: oc,
  getDimensions: uc,
  getScale: ta,
  isElement: je,
  isRTL: fc
};
function Br(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function mc(e, t) {
  let a = null, n;
  const o = nt(e);
  function s() {
    var i;
    clearTimeout(n), (i = a) == null || i.disconnect(), a = null;
  }
  function r(i, d) {
    i === void 0 && (i = !1), d === void 0 && (d = 1), s();
    const u = e.getBoundingClientRect(), {
      left: c,
      top: p,
      width: _,
      height: m
    } = u;
    if (i || t(), !_ || !m)
      return;
    const w = en(p), g = en(o.clientWidth - (c + _)), x = en(o.clientHeight - (p + m)), C = en(c), k = {
      rootMargin: -w + "px " + -g + "px " + -x + "px " + -C + "px",
      threshold: Ae(0, Pt(1, d)) || 1
    };
    let O = !0;
    function E(I) {
      const M = I[0].intersectionRatio;
      if (M !== d) {
        if (!O)
          return r();
        M ? r(!1, M) : n = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !Br(u, e.getBoundingClientRect()) && r(), O = !1;
    }
    try {
      a = new IntersectionObserver(E, {
        ...k,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      a = new IntersectionObserver(E, k);
    }
    a.observe(e);
  }
  return r(!0), s;
}
function hc(e, t, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, u = il(e), c = o || s ? [...u ? Ia(u) : [], ...Ia(t)] : [];
  c.forEach((C) => {
    o && C.addEventListener("scroll", a, {
      passive: !0
    }), s && C.addEventListener("resize", a);
  });
  const p = u && i ? mc(u, a) : null;
  let _ = -1, m = null;
  r && (m = new ResizeObserver((C) => {
    let [D] = C;
    D && D.target === u && m && (m.unobserve(t), cancelAnimationFrame(_), _ = requestAnimationFrame(() => {
      var k;
      (k = m) == null || k.observe(t);
    })), a();
  }), u && !d && m.observe(u), m.observe(t));
  let w, g = d ? Nt(e) : null;
  d && x();
  function x() {
    const C = Nt(e);
    g && !Br(g, C) && a(), g = C, w = requestAnimationFrame(x);
  }
  return a(), () => {
    var C;
    c.forEach((D) => {
      o && D.removeEventListener("scroll", a), s && D.removeEventListener("resize", a);
    }), p == null || p(), (C = m) == null || C.disconnect(), m = null, d && cancelAnimationFrame(w);
  };
}
const gc = Yu, yc = Ju, ms = ju, bc = Xu, _c = Gu, wc = Ku, xc = Qu, $c = (e, t, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: vc,
    ...a
  }, s = {
    ...o.platform,
    _c: n
  };
  return Hu(e, t, {
    ...o,
    platform: s
  });
};
function Cc(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Do(e) {
  if (Cc(e)) {
    const t = e.$el;
    return ll(t) && zt(t) === "#comment" ? null : t;
  }
  return e;
}
function Qt(e) {
  return typeof e == "function" ? e() : l(e);
}
function kc(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const a = Do(Qt(e.element));
      return a == null ? {} : wc({
        element: a,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Dr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function hs(e, t) {
  const a = Dr(e);
  return Math.round(t * a) / a;
}
function Bc(e, t, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = $(() => {
    var M;
    return (M = Qt(a.open)) != null ? M : !0;
  }), s = $(() => Qt(a.middleware)), r = $(() => {
    var M;
    return (M = Qt(a.placement)) != null ? M : "bottom";
  }), i = $(() => {
    var M;
    return (M = Qt(a.strategy)) != null ? M : "absolute";
  }), d = $(() => {
    var M;
    return (M = Qt(a.transform)) != null ? M : !0;
  }), u = $(() => Do(e.value)), c = $(() => Do(t.value)), p = A(0), _ = A(0), m = A(i.value), w = A(r.value), g = Ft({}), x = A(!1), C = $(() => {
    const M = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return M;
    const W = hs(c.value, p.value), N = hs(c.value, _.value);
    return d.value ? {
      ...M,
      transform: "translate(" + W + "px, " + N + "px)",
      ...Dr(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: W + "px",
      top: N + "px"
    };
  });
  let D;
  function k() {
    if (u.value == null || c.value == null)
      return;
    const M = o.value;
    $c(u.value, c.value, {
      middleware: s.value,
      placement: r.value,
      strategy: i.value
    }).then((W) => {
      p.value = W.x, _.value = W.y, m.value = W.strategy, w.value = W.placement, g.value = W.middlewareData, x.value = M !== !1;
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
    if (u.value != null && c.value != null) {
      D = n(u.value, c.value, k);
      return;
    }
  }
  function I() {
    o.value || (x.value = !1);
  }
  return ae([s, r, i, o], k, {
    flush: "sync"
  }), ae([u, c], E, {
    flush: "sync"
  }), ae(o, I, {
    flush: "sync"
  }), zo() && Uo(O), {
    x: qt(p),
    y: qt(_),
    strategy: qt(m),
    placement: qt(w),
    middlewareData: qt(g),
    isPositioned: qt(x),
    floatingStyles: C,
    update: k
  };
}
function le(e, t) {
  const a = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(a);
  return [(o) => {
    const s = Ko(n, o);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (Ns(n, o), o)];
}
function ul(e, t, a) {
  const n = a.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function kn(e, t = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(a, Math.max(t, e));
}
function Dc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Sc = function e(t, a) {
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
const Rt = /* @__PURE__ */ Dc(Sc);
function vn(e) {
  return e == null;
}
function Sr(e) {
  const { defaultValue: t, defaultPlaceholder: a, granularity: n = "day", locale: o = "en" } = e;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (a)
    return a.copy();
  const s = /* @__PURE__ */ new Date(), r = s.getFullYear(), i = s.getMonth() + 1, d = s.getDate(), u = ["hour", "minute", "second"], c = new Xe(o), p = bu(c.resolvedOptions().calendar);
  return u.includes(n ?? "day") ? Ee(new la(r, i, d, 0, 0, 0), p) : Ee(new _e(r, i, d), p);
}
function Pr(e) {
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
function Pc(e, t) {
  var a;
  const n = Ft();
  return be(() => {
    n.value = e();
  }, {
    ...t,
    flush: (a = void 0) != null ? a : "sync"
  }), La(n);
}
function Ut(e) {
  return zo() ? (Uo(e), !0) : !1;
}
function Ec() {
  const e = /* @__PURE__ */ new Set(), t = (a) => {
    e.delete(a);
  };
  return {
    on: (a) => {
      e.add(a);
      const n = () => t(a);
      return Ut(n), {
        off: n
      };
    },
    off: t,
    trigger: (...a) => Promise.all(Array.from(e).map((n) => n(...a)))
  };
}
function Oc(e) {
  let t = !1, a;
  const n = Ks(!0);
  return (...o) => (t || (a = n.run(() => e(...o)), t = !0), a);
}
function Er(e) {
  let t = 0, a, n;
  const o = () => {
    t -= 1, n && t <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...s) => (t += 1, a || (n = Ks(!0), a = n.run(() => e(...s))), Ut(o), a);
}
function vt(e) {
  return typeof e == "function" ? e() : l(e);
}
const ot = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ac = (e) => typeof e < "u", Mc = (e) => e != null, Tc = Object.prototype.toString, Ic = (e) => Tc.call(e) === "[object Object]", Or = () => {
}, gs = /* @__PURE__ */ Vc();
function Vc() {
  var e, t;
  return ot && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Rc(e) {
  return qe();
}
function Ar(e, t = 1e4) {
  return Ws((a, n) => {
    let o = vt(e), s;
    const r = () => setTimeout(() => {
      o = vt(e), n();
    }, vt(t));
    return Ut(() => {
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
function Fc(e, t) {
  Rc() && Wo(e, t);
}
function cl(e, t, a = {}) {
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
    }, vt(t));
  }
  return n && (o.value = !0, ot && d()), Ut(i), {
    isPending: La(o),
    start: d,
    stop: i
  };
}
function Lc(e = 1e3, t = {}) {
  const {
    controls: a = !1,
    callback: n
  } = t, o = cl(
    n ?? Or,
    e,
    t
  ), s = $(() => !o.isPending.value);
  return a ? {
    ready: s,
    ...o
  } : s;
}
function Le(e) {
  var t;
  const a = vt(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const Ua = ot ? window : void 0;
function ia(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = Ua) : [t, a, n, o] = e, !t)
    return Or;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, p, _, m) => (c.addEventListener(p, _, m), () => c.removeEventListener(p, _, m)), d = ae(
    () => [Le(t), vt(o)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const _ = Ic(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((w) => i(c, m, w, _)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), r();
  };
  return Ut(u), u;
}
function Nc(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function pl(...e) {
  let t, a, n = {};
  e.length === 3 ? (t = e[0], a = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, a = e[0], n = e[1]) : (t = e[0], a = e[1]) : (t = !0, a = e[0]);
  const {
    target: o = Ua,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, d = Nc(t);
  return ia(o, s, (u) => {
    u.repeat && vt(i) || d(u) && a(u);
  }, r);
}
function fl() {
  const e = A(!1), t = qe();
  return t && ce(() => {
    e.value = !0;
  }, t), e;
}
function zc(e) {
  const t = fl();
  return $(() => (t.value, !!e()));
}
function Uc(e, t, a = {}) {
  const { window: n = Ua, ...o } = a;
  let s;
  const r = zc(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, d = $(() => {
    const _ = vt(e), m = (Array.isArray(_) ? _ : [_]).map(Le).filter(Mc);
    return new Set(m);
  }), u = ae(
    () => d.value,
    (_) => {
      i(), r.value && _.size && (s = new MutationObserver(t), _.forEach((m) => s.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => s == null ? void 0 : s.takeRecords(), p = () => {
    i(), u();
  };
  return Ut(p), {
    isSupported: r,
    stop: p,
    takeRecords: c
  };
}
function Mr(e, t = {}) {
  const {
    immediate: a = !0,
    fpsLimit: n = void 0,
    window: o = Ua
  } = t, s = A(!1), r = n ? 1e3 / n : null;
  let i = 0, d = null;
  function u(_) {
    if (!s.value || !o)
      return;
    i || (i = _);
    const m = _ - i;
    if (r && m < r) {
      d = o.requestAnimationFrame(u);
      return;
    }
    i = _, e({ delta: m, timestamp: _ }), d = o.requestAnimationFrame(u);
  }
  function c() {
    !s.value && o && (s.value = !0, i = 0, d = o.requestAnimationFrame(u));
  }
  function p() {
    s.value = !1, d != null && o && (o.cancelAnimationFrame(d), d = null);
  }
  return a && c(), Ut(p), {
    isActive: La(s),
    pause: p,
    resume: c
  };
}
function Wc(e) {
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
    shouldEmit: _
  } = n, m = qe(), w = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let g = u;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const x = (k) => i ? typeof i == "function" ? i(k) : Wc(k) : k, C = () => Ac(e[t]) ? x(e[t]) : p, D = (k) => {
    _ ? _(k) && w(g, k) : w(g, k);
  };
  if (d) {
    const k = C(), O = A(k);
    let E = !1;
    return ae(
      () => e[t],
      (I) => {
        E || (E = !0, O.value = x(I), se(() => E = !1));
      }
    ), ae(
      O,
      (I) => {
        !E && (I !== e[t] || c) && D(I);
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
function Rn(e) {
  return e ? e.flatMap((t) => t.type === Q ? Rn(t.children) : [t]) : [];
}
function xe() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const Hc = ["INPUT", "TEXTAREA"];
function Tr(e, t, a, n = {}) {
  if (!t || n.enableIgnoredElement && Hc.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = !0,
    dir: d = "ltr",
    preventScroll: u = !0,
    focus: c = !1
  } = n, [p, _, m, w, g, x] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = m || w, D = p || _;
  if (!g && !x && (!C && !D || o === "vertical" && D || o === "horizontal" && C))
    return null;
  const k = a ? Array.from(a.querySelectorAll(s)) : r;
  if (!k.length)
    return null;
  u && e.preventDefault();
  let O = null;
  return D || C ? O = Ir(k, t, {
    goForward: C ? w : d === "ltr" ? p : _,
    loop: i
  }) : g ? O = k.at(0) || null : x && (O = k.at(-1) || null), c && (O == null || O.focus()), O;
}
function Ir(e, t, a, n = e.length) {
  if (--n === 0)
    return null;
  const o = e.indexOf(t), s = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (s < 0 || s >= e.length))
    return null;
  const r = (s + e.length) % e.length, i = e[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Ir(
    e,
    i,
    a,
    n
  ) : i : null;
}
function lo(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function So(e, t, a = ".", n) {
  if (!lo(t))
    return So(e, {}, a);
  const o = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = e[s];
    r != null && (Array.isArray(r) && Array.isArray(o[s]) ? o[s] = [...r, ...o[s]] : lo(r) && lo(o[s]) ? o[s] = So(
      r,
      o[s],
      (a ? `${a}.` : "") + s.toString()
    ) : o[s] = r);
  }
  return o;
}
function Kc(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((a, n) => So(a, n, ""), {})
  );
}
const jc = Kc(), [Fn, V0] = le("ConfigProvider");
let Gc = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", qc = (e = 21) => {
  let t = "", a = e;
  for (; a--; )
    t += Gc[Math.random() * 64 | 0];
  return t;
};
const Yc = Er(() => {
  const e = A(/* @__PURE__ */ new Map()), t = A(), a = $(() => {
    for (const r of e.value.values())
      if (r)
        return !0;
    return !1;
  }), n = Fn({
    scrollBody: A(!0)
  });
  let o = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", gs && (o == null || o()), t.value = void 0;
  };
  return ae(a, (r, i) => {
    var d;
    if (!ot)
      return;
    if (!r) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, c = { padding: u, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? jc({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), gs && (o = ia(
      document,
      "touchmove",
      (_) => Jc(_),
      { passive: !1 }
    )), se(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Wa(e) {
  const t = qc(6), a = Yc();
  a.value.set(t, e ?? !1);
  const n = $({
    get: () => a.value.get(t) ?? !1,
    set: (o) => a.value.set(t, o)
  });
  return Fc(() => {
    a.value.delete(t);
  }), n;
}
function Vr(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const a = e.parentNode;
    return !(a instanceof Element) || a.tagName === "BODY" ? !1 : Vr(a);
  }
}
function Jc(e) {
  const t = e || window.event, a = t.target;
  return a instanceof Element && Vr(a) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Qc = "data-radix-vue-collection-item";
function fa(e, t = Qc) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = A([]);
    function s() {
      const r = Le(n);
      return r ? o.value = Array.from(
        r.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return hd(() => {
      o.value = [];
    }), ce(s), gd(s), ae(() => n == null ? void 0 : n.value, s, { immediate: !0 }), Ns(a, o), o;
  }, injectCollection: () => Ko(a, A([])) };
}
function Rr(e) {
  const t = A(e);
  function a() {
    return t.value;
  }
  function n(g) {
    t.value = g;
  }
  function o(g, x) {
    return new Xe(t.value, x).format(g);
  }
  function s(g, x = !0) {
    return Bu(g) && x ? o(Fe(g), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Fe(g), {
      dateStyle: "long"
    });
  }
  function r(g, x = {}) {
    return new Xe(t.value, { month: "long", year: "numeric", ...x }).format(g);
  }
  function i(g, x = {}) {
    return new Xe(t.value, { month: "long", ...x }).format(g);
  }
  function d() {
    const g = hn(mt());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => ({ label: i(Fe(g.set({ month: x }))), value: x }));
  }
  function u(g, x = {}) {
    return new Xe(t.value, { year: "numeric", ...x }).format(g);
  }
  function c(g, x) {
    return tl(g) ? new Xe(t.value, {
      ...x,
      timeZone: g.timeZone
    }).formatToParts(Fe(g)) : new Xe(t.value, x).formatToParts(Fe(g));
  }
  function p(g, x = "narrow") {
    return new Xe(t.value, { weekday: x }).format(g);
  }
  function _(g) {
    var x;
    return ((x = new Xe(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(g).find((C) => C.type === "dayPeriod")) == null ? void 0 : x.value) === "PM" ? "PM" : "AM";
  }
  const m = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function w(g, x, C = {}) {
    const D = { ...m, ...C }, k = c(g, D).find((O) => O.type === x);
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
    part: w,
    dayPeriod: _,
    selectedDate: s,
    dayOfWeek: p,
    getMonths: d
  };
}
function lt(e) {
  const t = Fn({
    dir: A("ltr")
  });
  return $(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function Wt(e) {
  const t = qe(), a = t == null ? void 0 : t.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), a == null || a.forEach((o) => {
    n[fd(Fs(o))] = (...s) => e(o, ...s);
  }), n;
}
let so = 0;
function vl() {
  be((e) => {
    if (!ot)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? ys()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? ys()
    ), so++, e(() => {
      so === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), so--;
    });
  });
}
function ys() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Ha(e) {
  return $(() => {
    var t;
    return vt(e) ? !!((t = Le(e)) != null && t.closest("form")) : !0;
  });
}
function re(e) {
  const t = qe(), a = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, s) => {
    const r = (t == null ? void 0 : t.type.props[s]).default;
    return r !== void 0 && (o[s] = r), o;
  }, {}), n = Rs(e);
  return $(() => {
    const o = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      o[Fs(r)] = s[r];
    }), Object.keys({ ...a, ...o }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function ne(e, t) {
  const a = re(e), n = t ? Wt(t) : {};
  return $(() => ({
    ...a.value,
    ...n
  }));
}
function z() {
  const e = qe(), t = A(), a = $(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = t.value) == null ? void 0 : r.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Le(t);
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
    t.value = r, r && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => r instanceof Element ? r : r.$el
    }), e.exposed = o);
  }
  return { forwardRef: s, currentRef: t, currentElement: a };
}
function Xc(e, t) {
  const a = Ar(!1, 300), n = A(null), o = Ec();
  function s() {
    n.value = null, a.value = !1;
  }
  function r(i, d) {
    const u = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = Zc(c, u.getBoundingClientRect()), _ = ep(c, p), m = tp(d.getBoundingClientRect()), w = np([..._, ...m]);
    n.value = w, a.value = !0;
  }
  return be((i) => {
    if (e.value && t.value) {
      const d = (c) => r(c, t.value), u = (c) => r(c, e.value);
      e.value.addEventListener("pointerleave", d), t.value.addEventListener("pointerleave", u), i(() => {
        var c, p;
        (c = e.value) == null || c.removeEventListener("pointerleave", d), (p = t.value) == null || p.removeEventListener("pointerleave", u);
      });
    }
  }), be((i) => {
    var d;
    if (n.value) {
      const u = (c) => {
        var p, _;
        if (!n.value)
          return;
        const m = c.target, w = { x: c.clientX, y: c.clientY }, g = ((p = e.value) == null ? void 0 : p.contains(m)) || ((_ = t.value) == null ? void 0 : _.contains(m)), x = !ap(w, n.value), C = !!m.closest("[data-grace-area-trigger]");
        g ? s() : (x || C) && (s(), o.trigger());
      };
      (d = e.value) == null || d.ownerDocument.addEventListener("pointermove", u), i(() => {
        var c;
        return (c = e.value) == null ? void 0 : c.ownerDocument.removeEventListener("pointermove", u);
      });
    }
  }), {
    isPointerInTransit: a,
    onPointerExit: o.on
  };
}
function Zc(e, t) {
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
function ep(e, t, a = 5) {
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
function tp(e) {
  const { top: t, right: a, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: a, y: t },
    { x: a, y: n },
    { x: o, y: n }
  ];
}
function ap(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, d = t[s].y, u = t[r].x, c = t[r].y;
    d > n != c > n && a < (u - i) * (n - d) / (c - d) + i && (o = !o);
  }
  return o;
}
function np(e) {
  const t = e.slice();
  return t.sort((a, n) => a.x < n.x ? -1 : a.x > n.x ? 1 : a.y < n.y ? -1 : a.y > n.y ? 1 : 0), op(t);
}
function op(e) {
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
var lp = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Jt = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ new WeakMap(), an = {}, ro = 0, Fr = function(e) {
  return e && (e.host || Fr(e.parentNode));
}, sp = function(e, t) {
  return t.map(function(a) {
    if (e.contains(a))
      return a;
    var n = Fr(a);
    return n && e.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, rp = function(e, t, a, n) {
  var o = sp(t, Array.isArray(e) ? e : [e]);
  an[a] || (an[a] = /* @__PURE__ */ new WeakMap());
  var s = an[a], r = [], i = /* @__PURE__ */ new Set(), d = new Set(o), u = function(p) {
    !p || i.has(p) || (i.add(p), u(p.parentNode));
  };
  o.forEach(u);
  var c = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(_) {
      if (i.has(_))
        c(_);
      else
        try {
          var m = _.getAttribute(n), w = m !== null && m !== "false", g = (Jt.get(_) || 0) + 1, x = (s.get(_) || 0) + 1;
          Jt.set(_, g), s.set(_, x), r.push(_), g === 1 && w && tn.set(_, !0), x === 1 && _.setAttribute(a, "true"), w || _.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", _, C);
        }
    });
  };
  return c(t), i.clear(), ro++, function() {
    r.forEach(function(p) {
      var _ = Jt.get(p) - 1, m = s.get(p) - 1;
      Jt.set(p, _), s.set(p, m), _ || (tn.has(p) || p.removeAttribute(n), tn.delete(p)), m || p.removeAttribute(a);
    }), ro--, ro || (Jt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ new WeakMap(), an = {});
  };
}, ip = function(e, t, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = lp(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), rp(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function Ka(e) {
  let t;
  ae(() => Le(e), (a) => {
    a ? t = ip(a) : t && t();
  }), At(() => {
    t && t();
  });
}
let dp = 0;
function we(e, t = "radix") {
  const a = Fn({ useId: void 0 });
  return Nl.useId ? `${t}-${Nl.useId()}` : a.useId ? `${t}-${a.useId()}` : `${t}-${++dp}`;
}
function Lr(e) {
  const t = A(), a = $(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), n = $(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return ce(() => {
    const o = Le(e);
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
function up(e, t) {
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
const cp = "data-item-text";
function ml(e) {
  const t = Ar("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, n) => {
      if (!(e != null && e.value) && !n)
        return;
      t.value = t.value + a;
      const o = (e == null ? void 0 : e.value) ?? n, s = xe(), r = o.map((p) => {
        var _;
        return {
          ref: p,
          textValue: ((_ = (p.querySelector(`[${cp}]`) ?? p).textContent) == null ? void 0 : _.trim()) ?? ""
        };
      }), i = r.find((p) => p.ref === s), d = r.map((p) => p.textValue), u = fp(d, t.value, i == null ? void 0 : i.textValue), c = r.find((p) => p.textValue === u);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function pp(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
function fp(e, t, a) {
  const n = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = a ? e.indexOf(a) : -1;
  let s = pp(e, Math.max(o, 0));
  n.length === 1 && (s = s.filter((i) => i !== a));
  const r = s.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return r !== a ? r : void 0;
}
function Nr() {
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
const hl = y({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const s = Rn(a.default()), r = s.findIndex((c) => c.type !== zs);
      if (r === -1)
        return s;
      const i = s[r];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? P(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const u = vd(i, d);
      for (const c in d)
        c.startsWith("on") && (u.props || (u.props = {}), u.props[c] = d[c]);
      return s.length === 1 ? u : (s[r] = u, s);
    };
  }
}), L = y({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => et(n, t) : n !== "template" ? () => et(e.as, t, { default: a.default }) : () => et(hl, t, { default: a.default });
  }
});
function va() {
  const e = A(), t = $(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = e.value) == null ? void 0 : a.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : Le(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [zr, vp] = le("CollapsibleRoot"), mp = /* @__PURE__ */ y({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(e, { expose: t, emit: a }) {
    const n = e, o = ve(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = ve(n, "disabled");
    return vp({
      contentId: "",
      disabled: s,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), t({ open: o }), z(), (r, i) => (v(), h(l(L), {
      as: r.as,
      "as-child": n.asChild,
      "data-state": l(o) ? "open" : "closed",
      "data-disabled": l(s) ? "" : void 0
    }, {
      default: f(() => [
        b(r.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), hp = /* @__PURE__ */ y({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    z();
    const a = zr();
    return (n, o) => {
      var s, r;
      return v(), h(l(L), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": t.asChild,
        "aria-controls": l(a).contentId,
        "aria-expanded": l(a).open.value,
        "data-state": l(a).open.value ? "open" : "closed",
        "data-disabled": (s = l(a).disabled) != null && s.value ? "" : void 0,
        disabled: (r = l(a).disabled) == null ? void 0 : r.value,
        onClick: l(a).onOpenToggle
      }, {
        default: f(() => [
          b(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function gp(e, t) {
  var a;
  const n = A({}), o = A("none"), s = A(e), r = e.value ? "mounted" : "unmounted";
  let i;
  const d = ((a = t.value) == null ? void 0 : a.ownerDocument.defaultView) ?? Ua, { state: u, dispatch: c } = up(r, {
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
  }), p = (x) => {
    var C;
    if (ot) {
      const D = new CustomEvent(x, { bubbles: !1, cancelable: !1 });
      (C = t.value) == null || C.dispatchEvent(D);
    }
  };
  ae(
    e,
    async (x, C) => {
      var D;
      const k = C !== x;
      if (await se(), k) {
        const O = o.value, E = nn(t.value);
        x ? (c("MOUNT"), p("enter"), E === "none" && p("after-enter")) : E === "none" || ((D = n.value) == null ? void 0 : D.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : C && O !== E ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const _ = (x) => {
    const C = nn(t.value), D = C.includes(
      x.animationName
    ), k = u.value === "mounted" ? "enter" : "leave";
    if (x.target === t.value && D && (p(`after-${k}`), c("ANIMATION_END"), !s.value)) {
      const O = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = d == null ? void 0 : d.setTimeout(() => {
        var E;
        ((E = t.value) == null ? void 0 : E.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = O);
      });
    }
    x.target === t.value && C === "none" && c("ANIMATION_END");
  }, m = (x) => {
    x.target === t.value && (o.value = nn(t.value));
  }, w = ae(
    t,
    (x, C) => {
      x ? (n.value = getComputedStyle(x), x.addEventListener("animationstart", m), x.addEventListener("animationcancel", _), x.addEventListener("animationend", _)) : (c("ANIMATION_END"), i !== void 0 && (d == null || d.clearTimeout(i)), C == null || C.removeEventListener("animationstart", m), C == null || C.removeEventListener("animationcancel", _), C == null || C.removeEventListener("animationend", _));
    },
    { immediate: !0 }
  ), g = ae(u, () => {
    const x = nn(t.value);
    o.value = u.value === "mounted" ? x : "none";
  });
  return At(() => {
    w(), g();
  }), {
    isPresent: $(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function nn(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Te = y({
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
    const { present: o, forceMount: s } = me(e), r = A(), { isPresent: i } = gp(o, r);
    a({ present: i });
    let d = t.default({ present: i });
    d = Rn(d || []);
    const u = qe();
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
    return () => s.value || o.value || i.value ? et(t.default({ present: i })[0], {
      ref: (c) => {
        const p = Le(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
}), yp = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = zr();
    a.contentId || (a.contentId = we(void 0, "radix-vue-collapsible-content"));
    const n = A(), { forwardRef: o, currentElement: s } = z(), r = A(0), i = A(0), d = $(() => a.open.value), u = A(d.value), c = A();
    return ae(
      () => {
        var p;
        return [d.value, (p = n.value) == null ? void 0 : p.present];
      },
      async () => {
        await se();
        const p = s.value;
        if (!p)
          return;
        c.value = c.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const _ = p.getBoundingClientRect();
        i.value = _.height, r.value = _.width, u.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: !0
      }
    ), ce(() => {
      requestAnimationFrame(() => {
        u.value = !1;
      });
    }), (p, _) => (v(), h(l(Te), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || l(a).open.value,
      "force-mount": !0
    }, {
      default: f(() => {
        var m, w;
        return [
          B(l(L), P(p.$attrs, {
            id: l(a).contentId,
            ref: l(o),
            "as-child": t.asChild,
            as: p.as,
            "data-state": l(a).open.value ? "open" : "closed",
            "data-disabled": (m = l(a).disabled) != null && m.value ? "" : void 0,
            hidden: !((w = n.value) != null && w.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${r.value}px`
            }
          }), {
            default: f(() => {
              var g;
              return [
                (g = n.value) != null && g.present ? b(p.$slots, "default", { key: 0 }) : ee("", !0)
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
function Ur({ type: e, defaultValue: t, modelValue: a }) {
  const n = a || t;
  if (vn(e) && vn(a) && vn(t))
    throw new Error("Either the `type` or the `value` or `default-value` prop must be defined.");
  if (a !== void 0 && t !== void 0 && typeof a != typeof t)
    throw new Error(
      `Invalid prop \`value\` of value \`${a}\` supplied, should be the same type as the \`defaultValue\` prop, which is \`${t}\`. The \`value\` prop must be:
  ${e === "single" ? "- a string" : e === "multiple" ? "- an array of strings" : `- a string
- an array of strings`}
  - \`undefined\``
    );
  const o = a !== void 0 || t !== void 0;
  if (e && o) {
    const s = Array.isArray(a) || Array.isArray(t), r = a !== void 0 ? "modelValue" : "defaultValue", i = r === "modelValue" ? typeof a : typeof t;
    if (e === "single" && s)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "multiple";
    if (e === "multiple" && !s)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "single";
  }
  return o ? Array.isArray(n) ? "multiple" : "single" : e;
}
function bp({ type: e, defaultValue: t, modelValue: a }) {
  return e || Ur({ type: e, defaultValue: t, modelValue: a });
}
function _p({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function wp(e, t) {
  const a = A(bp(e)), n = ve(e, "modelValue", t, {
    defaultValue: _p(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  ae(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const r = Ur(e);
      a.value !== r && (a.value = r);
    },
    { immediate: !0 }
  );
  function o(r) {
    if (a.value === "single")
      n.value = r === n.value ? void 0 : r;
    else {
      const i = [...n.value || []];
      if (i.includes(r)) {
        const d = i.findIndex((u) => u === r);
        i.splice(d, 1);
      } else
        i.push(r);
      n.value = i;
    }
  }
  const s = $(() => a.value === "single");
  return {
    modelValue: n,
    type: a,
    changeModelValue: o,
    isSingle: s
  };
}
const [Ln, xp] = le("AccordionRoot"), $p = /* @__PURE__ */ y({
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
    const a = e, n = t, { dir: o, disabled: s } = me(a), r = lt(o), { modelValue: i, changeModelValue: d, isSingle: u } = wp(a, n), { forwardRef: c, currentElement: p } = z();
    return xp({
      disabled: s,
      direction: r,
      orientation: a.orientation,
      parentElement: p,
      isSingle: u,
      collapsible: a.collapsible,
      modelValue: i,
      changeModelValue: d
    }), (_, m) => (v(), h(l(L), {
      ref: l(c),
      "as-child": _.asChild,
      as: _.as
    }, {
      default: f(() => [
        b(_.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [gl, Cp] = le("AccordionItem"), kp = /* @__PURE__ */ y({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const a = e, n = Ln(), o = $(
      () => n.isSingle.value ? a.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(a.value)
    ), s = $(() => n.disabled.value || a.disabled), r = $(() => s.value ? "" : void 0), i = $(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: o, dataDisabled: r });
    const { currentRef: d, currentElement: u } = z();
    Cp({
      open: o,
      dataState: i,
      disabled: s,
      dataDisabled: r,
      triggerId: "",
      currentRef: d,
      currentElement: u,
      value: $(() => a.value)
    });
    function c(p) {
      var _;
      const m = p.target;
      if (Array.from(((_ = n.parentElement.value) == null ? void 0 : _.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((w) => w === m) === -1)
        return null;
      Tr(
        p,
        u.value,
        n.parentElement.value,
        {
          arrowKeyOptions: n.orientation,
          dir: n.direction.value,
          focus: !0
        }
      );
    }
    return (p, _) => (v(), h(l(mp), {
      "data-orientation": l(n).orientation,
      "data-disabled": r.value,
      "data-state": i.value,
      disabled: s.value,
      open: o.value,
      as: a.as,
      "as-child": a.asChild,
      onKeydown: He(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: f(() => [
        b(p.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), Bp = /* @__PURE__ */ y({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Ln(), n = gl();
    return z(), (o, s) => (v(), h(l(yp), {
      role: "region",
      hidden: !l(n).open.value,
      "as-child": t.asChild,
      "force-mount": t.forceMount,
      "aria-labelledby": l(n).triggerId,
      "data-state": l(n).dataState.value,
      "data-disabled": l(n).dataDisabled.value,
      "data-orientation": l(a).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), Dp = /* @__PURE__ */ y({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, a = Ln(), n = gl();
    return z(), (o, s) => (v(), h(l(L), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": l(a).orientation,
      "data-state": l(n).dataState.value,
      "data-disabled": l(n).dataDisabled.value
    }, {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), Sp = /* @__PURE__ */ y({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Ln(), n = gl();
    n.triggerId || (n.triggerId = we(void 0, "radix-vue-accordion-trigger"));
    function o() {
      const s = a.isSingle.value && n.open.value && !a.collapsible;
      n.disabled.value || s || a.changeModelValue(n.value.value);
    }
    return (s, r) => (v(), h(l(hp), {
      id: l(n).triggerId,
      ref: l(n).currentRef,
      "data-radix-vue-collection-item": "",
      as: t.as,
      "as-child": t.asChild,
      "aria-disabled": l(n).disabled.value || void 0,
      "aria-expanded": l(n).open.value || !1,
      "data-disabled": l(n).dataDisabled.value,
      "data-orientation": l(a).orientation,
      "data-state": l(n).dataState.value,
      disabled: l(n).disabled.value,
      onClick: o
    }, {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [st, Pp] = le("DialogRoot"), Wr = /* @__PURE__ */ y({
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
    }), o = A(), s = A(), { modal: r } = me(a);
    return Pp({
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
    }), (i, d) => b(i.$slots, "default", { open: l(n) });
  }
}), Hr = /* @__PURE__ */ y({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = st(), { forwardRef: n, currentElement: o } = z();
    return a.contentId || (a.contentId = we(void 0, "radix-vue-dialog-content")), ce(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), h(l(L), P(t, {
      ref: l(n),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": l(a).open.value || !1,
      "aria-controls": l(a).open.value ? l(a).contentId : void 0,
      "data-state": l(a).open.value ? "open" : "closed",
      onClick: l(a).onOpenToggle
    }), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), ja = /* @__PURE__ */ y({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = fl();
    return (a, n) => l(t) || a.forceMount ? (v(), h(On, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      b(a.$slots, "default")
    ], 8, ["to", "disabled"])) : ee("", !0);
  }
}), yl = /* @__PURE__ */ y({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(ja), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ep = "dismissableLayer.pointerDownOutside", Op = "dismissableLayer.focusOutside";
function Kr(e, t) {
  const a = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function Ap(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = A(!1), s = A(() => {
  });
  return be((r) => {
    if (!ot)
      return;
    const i = async (u) => {
      const c = u.target;
      if (t != null && t.value) {
        if (Kr(t.value, c)) {
          o.value = !1;
          return;
        }
        if (u.target && !o.value) {
          let p = function() {
            ul(
              Ep,
              e,
              _
            );
          };
          const _ = { originalEvent: u };
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
function Mp(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = A(!1);
  return be((s) => {
    if (!ot)
      return;
    const r = async (i) => {
      t != null && t.value && (await se(), !(!t.value || Kr(t.value, i.target)) && i.target && !o.value && ul(
        Op,
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
const Ue = Us({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ma = /* @__PURE__ */ y({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: s } = z(), r = $(
      () => {
        var w;
        return ((w = s.value) == null ? void 0 : w.ownerDocument) ?? globalThis.document;
      }
    ), i = $(() => Ue.layersRoot), d = $(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), u = $(() => Ue.layersWithOutsidePointerEventsDisabled.size > 0), c = $(() => {
      const w = Array.from(i.value), [g] = [...Ue.layersWithOutsidePointerEventsDisabled].slice(-1), x = w.indexOf(g);
      return d.value >= x;
    }), p = Ap(async (w) => {
      const g = [...Ue.branches].some(
        (x) => x == null ? void 0 : x.contains(w.target)
      );
      !c.value || g || (n("pointerDownOutside", w), n("interactOutside", w), await se(), w.defaultPrevented || n("dismiss"));
    }, s), _ = Mp((w) => {
      [...Ue.branches].some(
        (g) => g == null ? void 0 : g.contains(w.target)
      ) || (n("focusOutside", w), n("interactOutside", w), w.defaultPrevented || n("dismiss"));
    }, s);
    pl("Escape", (w) => {
      d.value === i.value.size - 1 && (n("escapeKeyDown", w), w.defaultPrevented || n("dismiss"));
    });
    let m;
    return be((w) => {
      s.value && (a.disableOutsidePointerEvents && (Ue.layersWithOutsidePointerEventsDisabled.size === 0 && (m = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), Ue.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), w(() => {
        a.disableOutsidePointerEvents && Ue.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = m);
      }));
    }), be((w) => {
      w(() => {
        s.value && (i.value.delete(s.value), Ue.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (w, g) => (v(), h(l(L), {
      ref: l(o),
      "as-child": w.asChild,
      as: w.as,
      "data-dismissable-layer": "",
      style: Ot({
        pointerEvents: u.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(_).onFocusCapture,
      onBlurCapture: l(_).onBlurCapture,
      onPointerdownCapture: l(p).onPointerDownCapture
    }, {
      default: f(() => [
        b(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Tp = /* @__PURE__ */ y({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = z();
    return ce(() => {
      Ue.branches.add(n.value);
    }), At(() => {
      Ue.branches.delete(n.value);
    }), (o, s) => (v(), h(l(L), P({ ref: l(a) }, t), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), io = "focusScope.autoFocusOnMount", uo = "focusScope.autoFocusOnUnmount", bs = { bubbles: !1, cancelable: !0 };
function mn(e, { select: t = !1 } = {}) {
  const a = xe();
  for (const n of e)
    if (Ct(n, { select: t }), xe() !== a)
      return !0;
}
function Ip(e) {
  const t = bl(e), a = _s(t, e), n = _s(t.reverse(), e);
  return [a, n];
}
function bl(e) {
  const t = [], a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) t.push(a.currentNode);
  return t;
}
function _s(e, t) {
  for (const a of e)
    if (!Vp(a, { upTo: t }))
      return a;
}
function Vp(e, { upTo: t }) {
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
function Rp(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ct(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const a = xe();
    e.focus({ preventScroll: !0 }), e !== a && Rp(e) && t && e.select();
  }
}
const Fp = Oc(() => A([]));
function Lp() {
  const e = Fp();
  return {
    add(t) {
      const a = e.value[0];
      t !== a && (a == null || a.pause()), e.value = ws(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var a;
      e.value = ws(e.value, t), (a = e.value[0]) == null || a.resume();
    }
  };
}
function ws(e, t) {
  const a = [...e], n = a.indexOf(t);
  return n !== -1 && a.splice(n, 1), a;
}
function Np(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Nn = /* @__PURE__ */ y({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, n = t, { currentRef: o, currentElement: s } = z(), r = A(null), i = Lp(), d = Us({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    be((c) => {
      if (!ot)
        return;
      const p = s.value;
      if (!a.trapped)
        return;
      function _(x) {
        if (d.paused || !p)
          return;
        const C = x.target;
        p.contains(C) ? r.value = C : Ct(r.value, { select: !0 });
      }
      function m(x) {
        if (d.paused || !p)
          return;
        const C = x.relatedTarget;
        C !== null && (p.contains(C) || Ct(r.value, { select: !0 }));
      }
      function w(x) {
        p.contains(r.value) || Ct(p);
      }
      document.addEventListener("focusin", _), document.addEventListener("focusout", m);
      const g = new MutationObserver(w);
      p && g.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", _), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), be(async (c) => {
      const p = s.value;
      if (await se(), !p)
        return;
      i.add(d);
      const _ = xe();
      if (!p.contains(_)) {
        const m = new CustomEvent(io, bs);
        p.addEventListener(io, (w) => n("mountAutoFocus", w)), p.dispatchEvent(m), m.defaultPrevented || (mn(Np(bl(p)), {
          select: !0
        }), xe() === _ && Ct(p));
      }
      c(() => {
        p.removeEventListener(io, (g) => n("mountAutoFocus", g));
        const m = new CustomEvent(uo, bs), w = (g) => {
          n("unmountAutoFocus", g);
        };
        p.addEventListener(uo, w), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Ct(_ ?? document.body, { select: !0 }), p.removeEventListener(uo, w), i.remove(d);
        }, 0);
      });
    });
    function u(c) {
      if (!a.loop && !a.trapped || d.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, _ = xe();
      if (p && _) {
        const m = c.currentTarget, [w, g] = Ip(m);
        w && g ? !c.shiftKey && _ === g ? (c.preventDefault(), a.loop && Ct(w, { select: !0 })) : c.shiftKey && _ === w && (c.preventDefault(), a.loop && Ct(g, { select: !0 })) : _ === m && c.preventDefault();
      }
    }
    return (c, p) => (v(), h(l(L), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: u
    }, {
      default: f(() => [
        b(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), zp = "menu.itemSelect", Po = ["Enter", " "], Up = ["ArrowDown", "PageUp", "Home"], jr = ["ArrowUp", "PageDown", "End"], Wp = [...Up, ...jr], Hp = {
  ltr: [...Po, "ArrowRight"],
  rtl: [...Po, "ArrowLeft"]
}, Kp = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function _l(e) {
  return e ? "open" : "closed";
}
function Bn(e) {
  return e === "indeterminate";
}
function wl(e) {
  return Bn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Eo(e) {
  const t = xe();
  for (const a of e)
    if (a === t || (a.focus(), xe() !== t))
      return;
}
function jp(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, d = t[s].y, u = t[r].x, c = t[r].y;
    d > n != c > n && a < (u - i) * (n - d) / (c - d) + i && (o = !o);
  }
  return o;
}
function Gp(e, t) {
  if (!t)
    return !1;
  const a = { x: e.clientX, y: e.clientY };
  return jp(a, t);
}
function Va(e) {
  return e.pointerType === "mouse";
}
const qp = "DialogTitle", Yp = "DialogContent";
function Jp({
  titleName: e = qp,
  contentName: t = Yp,
  componentLink: a = "dialog.html#title",
  titleId: n,
  descriptionId: o,
  contentElement: s
}) {
  const r = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${a}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ce(() => {
    var d;
    document.getElementById(n) || console.warn(r);
    const u = (d = s.value) == null ? void 0 : d.getAttribute("aria-describedby");
    o && u && (document.getElementById(o) || console.warn(i));
  });
}
const Gr = /* @__PURE__ */ y({
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
    const a = e, n = t, o = st(), { forwardRef: s, currentElement: r } = z();
    return o.titleId || (o.titleId = we(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = we(void 0, "radix-vue-dialog-description")), ce(() => {
      o.contentElement = r, xe() !== document.body && (o.triggerElement.value = xe());
    }), process.env.NODE_ENV !== "production" && Jp({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: r
    }), (i, d) => (v(), h(l(Nn), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: f(() => [
        B(l(ma), P({
          id: l(o).contentId,
          ref: l(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(o).descriptionId,
          "aria-labelledby": l(o).titleId,
          "data-state": l(_l)(l(o).open.value)
        }, i.$attrs, {
          onDismiss: d[0] || (d[0] = (u) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[2] || (d[2] = (u) => n("focusOutside", u)),
          onInteractOutside: d[3] || (d[3] = (u) => n("interactOutside", u)),
          onPointerDownOutside: d[4] || (d[4] = (u) => n("pointerDownOutside", u))
        }), {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Qp = /* @__PURE__ */ y({
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
    const a = e, n = t, o = st(), s = Wt(n), { forwardRef: r, currentElement: i } = z();
    return Ka(i), (d, u) => (v(), h(Gr, P({ ...a, ...l(s) }, {
      ref: l(r),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = l(o).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: u[1] || (u[1] = (c) => {
        const p = c.detail.originalEvent, _ = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || _) && c.preventDefault();
      }),
      onFocusOutside: u[2] || (u[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: f(() => [
        b(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Xp = /* @__PURE__ */ y({
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
    const a = e, n = Wt(t);
    z();
    const o = st(), s = A(!1), r = A(!1);
    return (i, d) => (v(), h(Gr, P({ ...a, ...l(n) }, {
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
        b(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xl = /* @__PURE__ */ y({
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
    const a = e, n = t, o = st(), s = Wt(n), { forwardRef: r } = z();
    return (i, d) => (v(), h(l(Te), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), h(Qp, P({
          key: 0,
          ref: l(r)
        }, { ...a, ...l(s), ...i.$attrs }), {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), h(Xp, P({
          key: 1,
          ref: l(r)
        }, { ...a, ...l(s), ...i.$attrs }), {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Zp = /* @__PURE__ */ y({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = st();
    return Wa(!0), z(), (a, n) => (v(), h(l(L), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": l(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), $l = /* @__PURE__ */ y({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = st(), { forwardRef: a } = z();
    return (n, o) => {
      var s;
      return (s = l(t)) != null && s.modal.value ? (v(), h(l(Te), {
        key: 0,
        present: n.forceMount || l(t).open.value
      }, {
        default: f(() => [
          B(Zp, P(n.$attrs, {
            ref: l(a),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: f(() => [
              b(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : ee("", !0);
    };
  }
}), Ga = /* @__PURE__ */ y({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    z();
    const a = st();
    return (n, o) => (v(), h(l(L), P(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (s) => l(a).onOpenChange(!1))
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), qr = /* @__PURE__ */ y({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, a = st();
    return z(), (n, o) => (v(), h(l(L), P(t, {
      id: l(a).titleId
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Yr = /* @__PURE__ */ y({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    z();
    const a = st();
    return (n, o) => (v(), h(l(L), P(t, {
      id: l(a).descriptionId
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function ef(e) {
  function t(n) {
    return Array.isArray(e.date.value) ? e.date.value.some((o) => Ce(o, n)) : e.date.value ? Ce(e.date.value, n) : !1;
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
function tf(e, t) {
  const a = t(e), n = a.compare(e), o = {};
  return n >= 7 && (o.day = 1), n >= ht(e) && (o.month = 1), a.set({ ...o });
}
function af(e, t) {
  const a = t(e), n = e.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= ht(e) && (o.month = 13), a.set({ ...o });
}
function nf(e, t) {
  return t(e);
}
function of(e, t) {
  return t(e);
}
function Jr(e) {
  const t = Rr(e.locale.value), a = $(() => {
    const g = {
      calendar: e.placeholder.value.calendar.identifier
    };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (g.era = "short"), g;
  }), n = A(Tt({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), o = $(() => n.value.map((g) => g.value));
  function s(g) {
    return !o.value.some((x) => Ul(g, x));
  }
  const r = (g = "month", x) => {
    if (!e.maxValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[n.value.length - 1].value;
    if (x || e.nextPage.value) {
      const k = tf(C, x || e.nextPage.value);
      return Ea(k, e.maxValue.value);
    }
    if (g === "year") {
      const k = C.add({ years: 1 }).set({ day: 1, month: 1 });
      return Ea(k, e.maxValue.value);
    }
    const D = C.add({ months: 1 }).set({ day: 1 });
    return Ea(D, e.maxValue.value);
  }, i = (g = "month", x) => {
    if (!e.minValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[0].value;
    if (x || e.prevPage.value) {
      const k = af(C, x || e.prevPage.value);
      return Dt(k, e.minValue.value);
    }
    if (g === "year") {
      const k = C.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return Dt(k, e.minValue.value);
    }
    const D = C.subtract({ months: 1 }).set({ day: 35 });
    return Dt(D, e.minValue.value);
  };
  function d(g) {
    var x;
    return !!((x = e.isDateDisabled) != null && x.call(e, g) || e.disabled.value || e.maxValue.value && Ea(g, e.maxValue.value) || e.minValue.value && Dt(g, e.minValue.value));
  }
  const u = (g) => {
    var x;
    return !!((x = e.isDateUnavailable) != null && x.call(e, g));
  }, c = $(() => n.value.length ? n.value[0].rows[0].map((g) => t.dayOfWeek(Fe(g), e.weekdayFormat.value)) : []), p = (g = "month", x) => {
    const C = n.value[0].value;
    if (x || e.nextPage.value) {
      const O = nf(C, x || e.nextPage.value), E = Tt({
        dateObj: O,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = E;
      const I = {};
      if (!x) {
        const M = E[0].value.compare(C);
        M >= ht(C) && (I.day = 1), M >= 365 && (I.month = 1);
      }
      e.placeholder.value = E[0].value.set({ ...I });
      return;
    }
    const D = g === "month" ? C.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.add({ years: 1 }), k = Tt({
      dateObj: D,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = k, e.placeholder.value = k[0].value.set({ day: 1 });
  }, _ = (g = "month", x) => {
    const C = n.value[0].value;
    if (x || e.prevPage.value) {
      const O = of(C, x || e.prevPage.value), E = Tt({
        dateObj: O,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = E;
      const I = {};
      if (!x) {
        const M = C.compare(E[0].value);
        M >= ht(C) && (I.day = 1), M >= 365 && (I.month = 1);
      }
      e.placeholder.value = E[0].value.set({ ...I });
      return;
    }
    const D = g === "month" ? C.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.subtract({ years: 1 }), k = Tt({
      dateObj: D,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = k, e.placeholder.value = k[0].value.set({ day: 1 });
  };
  ae(e.placeholder, (g) => {
    o.value.some((x) => Ul(x, g)) || (n.value = Tt({
      dateObj: g,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), ae([e.locale, e.weekStartsOn, e.fixedWeeks, e.numberOfMonths], () => {
    n.value = Tt({
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
      return `${t.fullMonthAndYear(Fe(E), a.value)}`;
    }
    const g = Fe(n.value[0].value), x = Fe(n.value[n.value.length - 1].value), C = t.fullMonth(g, a.value), D = t.fullMonth(x, a.value), k = t.fullYear(g, a.value), O = t.fullYear(x, a.value);
    return k === O ? `${C} - ${D} ${O}` : `${C} ${k} - ${D} ${O}`;
  }), w = $(() => `${e.calendarLabel.value ?? "Event Date"}, ${m.value}`);
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
    prevPage: _,
    headingValue: m,
    fullCalendarLabel: w
  };
}
const lf = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, sf = {
  role: "heading",
  "aria-level": "2"
}, [ha, rf] = le("CalendarRoot"), Qr = /* @__PURE__ */ y({
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
      multiple: _,
      minValue: m,
      maxValue: w,
      numberOfMonths: g,
      preventDeselect: x,
      isDateDisabled: C,
      isDateUnavailable: D,
      calendarLabel: k,
      defaultValue: O,
      nextPage: E,
      prevPage: I,
      dir: M
    } = me(a), { primitiveElement: W, currentElement: N } = va(), S = lt(M), V = ve(a, "modelValue", n, {
      defaultValue: O.value,
      passive: a.modelValue === void 0
    }), R = Sr({
      defaultPlaceholder: a.placeholder,
      defaultValue: V.value,
      locale: a.locale
    }), q = ve(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? R.copy(),
      passive: a.placeholder === void 0
    });
    function U(ue) {
      q.value = ue.copy();
    }
    const {
      fullCalendarLabel: Y,
      headingValue: te,
      isDateDisabled: ge,
      isDateUnavailable: ye,
      isNextButtonDisabled: G,
      isPrevButtonDisabled: Z,
      weekdays: de,
      isOutsideVisibleView: Ne,
      nextPage: Je,
      prevPage: bt,
      formatter: _t,
      grid: Ca
    } = Jr({
      locale: o,
      placeholder: q,
      weekStartsOn: u,
      fixedWeeks: p,
      numberOfMonths: g,
      minValue: m,
      maxValue: w,
      disabled: s,
      weekdayFormat: c,
      pagedNavigation: d,
      isDateDisabled: C.value,
      isDateUnavailable: D.value,
      calendarLabel: k,
      nextPage: E,
      prevPage: I
    }), {
      isInvalid: Ie,
      isDateSelected: Oe
    } = ef({
      date: V,
      isDateDisabled: ge,
      isDateUnavailable: ye
    });
    ae(V, (ue) => {
      if (Array.isArray(ue) && ue.length) {
        const Se = ue[ue.length - 1];
        Se && !Ze(q.value, Se) && U(Se);
      } else !Array.isArray(ue) && ue && !Ze(q.value, ue) && U(ue);
    });
    function Qe(ue) {
      if (_.value) {
        if (!V.value)
          V.value = [ue.copy()];
        else if (Array.isArray(V.value)) {
          if (V.value.findIndex((Se) => Ce(Se, ue)) === -1)
            V.value = [...V.value, ue];
          else if (!x.value) {
            const Se = V.value.filter((rt) => !Ce(rt, ue));
            if (!Se.length) {
              q.value = ue.copy(), V.value = void 0;
              return;
            }
            V.value = Se.map((rt) => rt.copy());
          }
        }
      } else {
        if (!V.value) {
          V.value = ue.copy();
          return;
        }
        !x.value && Ze(V.value, ue) ? (q.value = ue.copy(), V.value = void 0) : V.value = ue.copy();
      }
    }
    return ce(() => {
      i.value && Pr(N.value);
    }), rf({
      isDateUnavailable: ye,
      dir: S,
      isDateDisabled: ge,
      locale: o,
      formatter: _t,
      modelValue: V,
      placeholder: q,
      disabled: s,
      initialFocus: i,
      pagedNavigation: d,
      weekStartsOn: u,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: _,
      numberOfMonths: g,
      readonly: r,
      preventDeselect: x,
      fullCalendarLabel: Y,
      headingValue: te,
      isInvalid: Ie,
      isDateSelected: Oe,
      isNextButtonDisabled: G,
      isPrevButtonDisabled: Z,
      isOutsideVisibleView: Ne,
      nextPage: Je,
      prevPage: bt,
      parentElement: N,
      onPlaceholderChange: U,
      onDateChange: Qe
    }), (ue, Se) => (v(), h(l(L), {
      ref_key: "primitiveElement",
      ref: W,
      as: ue.as,
      "as-child": ue.asChild,
      role: "application",
      "aria-label": l(Y),
      "data-readonly": l(r) ? "" : void 0,
      "data-disabled": l(s) ? "" : void 0,
      "data-invalid": l(Ie) ? "" : void 0,
      dir: l(S)
    }, {
      default: f(() => [
        b(ue.$slots, "default", {
          date: l(q),
          grid: l(Ca),
          weekDays: l(de),
          weekStartsOn: l(u),
          locale: l(o),
          fixedWeeks: l(p)
        }),
        ie("div", lf, [
          ie("div", sf, X(l(Y)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), df = /* @__PURE__ */ y({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uf = /* @__PURE__ */ y({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = ha();
    return (n, o) => (v(), h(l(L), P(t, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        b(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          J(X(l(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), cf = /* @__PURE__ */ y({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = ha(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), h(l(L), P(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), pf = /* @__PURE__ */ y({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = ha();
    return (a, n) => {
      var o, s;
      return v(), h(l(L), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": l(t).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": l(t).isDateDisabled(a.date) || ((s = (o = l(t)).isDateUnavailable) == null ? void 0 : s.call(o, a.date)),
        "data-disabled": l(t).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
          b(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), ff = /* @__PURE__ */ y({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vf = /* @__PURE__ */ y({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = ha();
    return (o, s) => (v(), h(l(L), {
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
        b(o.$slots, "default", {}, () => [
          J("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), mf = /* @__PURE__ */ y({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = ha();
    return (o, s) => (v(), h(l(L), {
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
        b(o.$slots, "default", {}, () => [
          J("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), hf = /* @__PURE__ */ y({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), P(t, { "aria-hidden": "true" }), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gf = /* @__PURE__ */ y({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yf = /* @__PURE__ */ y({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bf = /* @__PURE__ */ y({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = Nr(), n = ha(), { primitiveElement: o, currentElement: s } = va(), r = $(() => t.day.day.toLocaleString(n.locale.value)), i = $(() => n.formatter.custom(Fe(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), d = $(() => n.isDateDisabled(t.day)), u = $(
      () => {
        var k;
        return (k = n.isDateUnavailable) == null ? void 0 : k.call(n, t.day);
      }
    ), c = $(() => Qs(t.day, mt())), p = $(() => !jo(t.day, t.month)), _ = $(
      () => n.isOutsideVisibleView(t.day)
    ), m = $(() => !n.disabled.value && Ce(t.day, n.placeholder.value)), w = $(() => n.isDateSelected(t.day)), g = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])";
    function x(k) {
      var O;
      n.readonly.value || n.isDateDisabled(k) || (O = n.isDateUnavailable) != null && O.call(n, k) || n.onDateChange(k);
    }
    function C() {
      x(t.day);
    }
    function D(k) {
      k.preventDefault(), k.stopPropagation();
      const O = n.parentElement.value, E = O ? Array.from(O.querySelectorAll(g)) : [];
      let I = E.indexOf(s.value);
      const M = 7, W = n.dir.value === "rtl" ? -1 : 1;
      switch (k.code) {
        case a.ARROW_RIGHT:
          I += W;
          break;
        case a.ARROW_LEFT:
          I -= W;
          break;
        case a.ARROW_UP:
          I -= M;
          break;
        case a.ARROW_DOWN:
          I += M;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          x(t.day);
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
          const N = O ? Array.from(O.querySelectorAll(g)) : [];
          if (!n.pagedNavigation.value) {
            const S = ht(n.placeholder.value);
            N[S - Math.abs(I)].focus();
            return;
          }
          N[N.length - Math.abs(I)].focus();
        });
        return;
      }
      if (I >= E.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), se(() => {
          const N = O ? Array.from(O.querySelectorAll(g)) : [];
          if (!n.pagedNavigation.value) {
            const S = ht(n.placeholder.value.add({ months: n.numberOfMonths.value - 1 }));
            N[N.length - S + I - E.length].focus();
            return;
          }
          N[I - E.length].focus();
        });
      }
    }
    return (k, O) => (v(), h(l(L), P({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": d.value || u.value ? !0 : void 0,
      "data-selected": w.value ? !0 : void 0,
      "data-value": k.day.toString(),
      "data-disabled": d.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": c.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": _.value ? "" : void 0,
      "data-focused": m.value ? "" : void 0,
      tabindex: m.value ? 0 : p.value || d.value ? void 0 : -1,
      onClick: C,
      onKeydown: [
        He(D, ["up", "down", "left", "right", "space", "enter"]),
        O[0] || (O[0] = He(ke(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: f(() => [
        b(k.$slots, "default", { dayValue: r.value }, () => [
          J(X(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Dn(e) {
  return e === "indeterminate";
}
function Xr(e) {
  return Dn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const _f = ["value", "checked", "name", "disabled", "required"], [wf, xf] = le("CheckboxRoot"), $f = /* @__PURE__ */ y({
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
    }), { forwardRef: r, currentElement: i } = z(), d = Ha(i), u = $(() => {
      var c;
      return a.id && i.value ? (c = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return xf({
      disabled: o,
      state: s
    }), (c, p) => (v(), F(Q, null, [
      B(l(L), P(c.$attrs, {
        id: c.id,
        ref: l(r),
        role: "checkbox",
        "as-child": a.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": l(Dn)(l(s)) ? "mixed" : l(s),
        "aria-required": a.required,
        "aria-label": c.$attrs["aria-label"] || u.value,
        "data-state": l(Xr)(l(s)),
        "data-disabled": l(o) ? "" : void 0,
        disabled: l(o),
        onKeydown: He(ke(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (_) => s.value = l(Dn)(l(s)) ? !0 : !l(s))
      }), {
        default: f(() => [
          b(c.$slots, "default", { checked: l(s) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
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
      }, null, 8, _f)) : ee("", !0)
    ], 64));
  }
}), Cf = /* @__PURE__ */ y({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = z(), a = wf();
    return (n, o) => (v(), h(l(Te), {
      present: n.forceMount || l(Dn)(l(a).state.value) || l(a).state.value === !0
    }, {
      default: f(() => [
        B(l(L), P({
          ref: l(t),
          "data-state": l(Xr)(l(a).state.value),
          "data-disabled": l(a).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: f(() => [
            b(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Zr, kf] = le("PopperRoot"), ga = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = A();
    return kf({
      anchor: t,
      onAnchorChange: (a) => t.value = a
    }), (a, n) => b(a.$slots, "default");
  }
}), zn = /* @__PURE__ */ y({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = z(), o = Zr();
    return be(() => {
      o.onAnchorChange(t.element ?? n.value);
    }), (s, r) => (v(), h(l(L), {
      ref: l(a),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Bf(e) {
  return e !== null;
}
function Df(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var a, n, o;
      const { placement: s, rects: r, middlewareData: i } = t, d = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, u = d ? 0 : e.arrowWidth, c = d ? 0 : e.arrowHeight, [p, _] = Oo(s), m = { start: "0%", center: "50%", end: "100%" }[_], w = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + u / 2, g = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + c / 2;
      let x = "", C = "";
      return p === "bottom" ? (x = d ? m : `${w}px`, C = `${-c}px`) : p === "top" ? (x = d ? m : `${w}px`, C = `${r.floating.height + c}px`) : p === "right" ? (x = `${-c}px`, C = d ? m : `${g}px`) : p === "left" && (x = `${r.floating.width + c}px`, C = d ? m : `${g}px`), { data: { x, y: C } };
    }
  };
}
function Oo(e) {
  const [t, a = "center"] = e.split("-");
  return [t, a];
}
const ei = {
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
}, [R0, Sf] = le("PopperContent"), da = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Hs({
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
    ...ei
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Zr(), { forwardRef: s, currentElement: r } = z(), i = A(), d = A(), { width: u, height: c } = Lr(d), p = $(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), _ = $(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = $(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), w = $(() => ({
      padding: _.value,
      boundary: m.value.filter(Bf),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), g = Pc(() => [
      gc({
        mainAxis: a.sideOffset + c.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && ms({
        ...w.value
      }),
      a.avoidCollisions && yc({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? xc() : void 0,
        ...w.value
      }),
      !a.prioritizePosition && a.avoidCollisions && ms({
        ...w.value
      }),
      bc({
        ...w.value,
        apply: ({ elements: S, rects: V, availableWidth: R, availableHeight: q }) => {
          const { width: U, height: Y } = V.reference, te = S.floating.style;
          te.setProperty(
            "--radix-popper-available-width",
            `${R}px`
          ), te.setProperty(
            "--radix-popper-available-height",
            `${q}px`
          ), te.setProperty(
            "--radix-popper-anchor-width",
            `${U}px`
          ), te.setProperty(
            "--radix-popper-anchor-height",
            `${Y}px`
          );
        }
      }),
      d.value && kc({ element: d.value, padding: a.arrowPadding }),
      Df({
        arrowWidth: u.value,
        arrowHeight: c.value
      }),
      a.hideWhenDetached && _c({ strategy: "referenceHidden", ...w.value })
    ]), { floatingStyles: x, placement: C, isPositioned: D, middlewareData: k } = Bc(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...S) => hc(...S, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), O = $(
      () => Oo(C.value)[0]
    ), E = $(
      () => Oo(C.value)[1]
    );
    _d(() => {
      D.value && n("placed");
    });
    const I = $(
      () => {
        var S;
        return ((S = k.value.arrow) == null ? void 0 : S.centerOffset) !== 0;
      }
    ), M = A("");
    be(() => {
      r.value && (M.value = window.getComputedStyle(r.value).zIndex);
    });
    const W = $(() => {
      var S;
      return ((S = k.value.arrow) == null ? void 0 : S.x) ?? 0;
    }), N = $(() => {
      var S;
      return ((S = k.value.arrow) == null ? void 0 : S.y) ?? 0;
    });
    return Sf({
      placedSide: O,
      onArrowChange: (S) => d.value = S,
      arrowX: W,
      arrowY: N,
      shouldHideArrow: I
    }), (S, V) => {
      var R, q, U;
      return v(), F("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Ot({
          ...l(x),
          transform: l(D) ? l(x).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: M.value,
          "--radix-popper-transform-origin": [
            (R = l(k).transformOrigin) == null ? void 0 : R.x,
            (q = l(k).transformOrigin) == null ? void 0 : q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((U = l(k).hide) == null ? void 0 : U.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        B(l(L), P({ ref: l(s) }, S.$attrs, {
          "as-child": a.asChild,
          as: S.as,
          "data-side": O.value,
          "data-align": E.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l(D) ? void 0 : "none"
          }
        }), {
          default: f(() => [
            b(S.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), qa = /* @__PURE__ */ y({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return z(), (t, a) => (v(), h(l(L), {
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
        b(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Pf = /* @__PURE__ */ y({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, a = $(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${o}][${t.name}][${s}]`, value: r })) : { name: `[${t.name}][${o}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, o]) => ({ name: `[${t.name}][${n}]`, value: o })) : []);
    return (n, o) => (v(!0), F(Q, null, fe(a.value, (s) => (v(), h(qa, {
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
}), Ef = "data-radix-vue-collection-item", [Cl, Of] = le("CollectionProvider");
function kl(e = Ef) {
  const t = A(/* @__PURE__ */ new Map()), a = A(), n = Of({
    collectionRef: a,
    itemMap: t,
    attrName: e
  }), { getItems: o } = Dl(n), s = $(() => Array.from(n.itemMap.value.values())), r = $(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: s, itemMapSize: r };
}
const Bl = y({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const a = Cl(), { primitiveElement: n, currentElement: o } = va();
    return ae(o, () => {
      a.collectionRef.value = o.value;
    }), () => et(hl, { ref: n }, t);
  }
}), Un = y({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: a }) {
    const n = Cl(), { primitiveElement: o, currentElement: s } = va();
    return be((r) => {
      if (s.value) {
        const i = yd(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: e.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => et(hl, { ...a, [n.attrName]: "", ref: o }, t);
  }
});
function Dl(e) {
  const t = e ?? Cl();
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
const [ya, Af] = le("ComboboxRoot"), Mf = /* @__PURE__ */ y({
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
    const a = e, n = t, { multiple: o, disabled: s, dir: r } = me(a), i = lt(r), d = ve(a, "searchTerm", n, {
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
    async function _(G) {
      var Z, de;
      c.value = G, await se(), G ? (u.value && (Array.isArray(u.value) && o.value ? p.value = (Z = k().find((Ne) => {
        var Je, bt;
        return ((bt = (Je = Ne.ref) == null ? void 0 : Je.dataset) == null ? void 0 : bt.state) === "checked";
      })) == null ? void 0 : Z.value : p.value = u.value), await se(), (de = g.value) == null || de.focus(), q()) : (w.value = !1, a.resetSearchTermOnBlur && W("blur"));
    }
    function m(G) {
      if (Array.isArray(u.value) && o.value) {
        const Z = u.value.findIndex((Ne) => Rt(Ne, G)), de = [...u.value];
        Z === -1 ? de.push(G) : de.splice(Z, 1), u.value = de;
      } else
        u.value = G, _(!1);
    }
    const w = A(!1), g = A(), x = A(), { forwardRef: C, currentElement: D } = z(), { getItems: k, reactiveItems: O, itemMapSize: E } = kl("data-radix-vue-combobox-item"), I = A([]);
    ae(() => E.value, () => {
      I.value = k().map((G) => G.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const M = $(() => {
      if (w.value) {
        if (a.filterFunction)
          return a.filterFunction(I.value, d.value);
        const G = I.value.filter((Z) => typeof Z == "string");
        if (G.length)
          return G.filter((Z) => {
            var de;
            return Z.toLowerCase().includes((de = d.value) == null ? void 0 : de.toLowerCase());
          });
      }
      return I.value;
    });
    function W(G) {
      const Z = G === "blur" || G === "select" && a.resetSearchTermOnSelect;
      !o.value && u.value && !Array.isArray(u.value) ? a.displayValue ? d.value = a.displayValue(u.value) : typeof u.value != "object" ? d.value = u.value.toString() : Z && (d.value = "") : Z && (d.value = "");
    }
    const N = $(() => M.value.findIndex((G) => Rt(G, p.value))), S = $(() => {
      var G;
      return (G = O.value.find((Z) => Rt(Z.value, p.value))) == null ? void 0 : G.ref;
    }), V = $(() => JSON.stringify(u.value));
    ae(V, async () => {
      await se(), await se(), W("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), ae(() => [M.value.length, d.value.length], async ([G, Z], [de, Ne]) => {
      await se(), await se(), G && (Ne > Z || N.value === -1) && (p.value = M.value[0]);
    });
    const R = Ha(D);
    function q() {
      var G;
      S.value instanceof Element && ((G = S.value) == null || G.scrollIntoView({ block: "nearest" }));
    }
    function U() {
      S.value instanceof Element && S.value.focus && S.value.focus();
    }
    const Y = A(!1);
    function te() {
      Y.value = !0;
    }
    function ge() {
      requestAnimationFrame(() => {
        Y.value = !1;
      });
    }
    async function ye(G) {
      var Z;
      M.value.length && p.value && S.value instanceof Element && (G.preventDefault(), G.stopPropagation(), Y.value || (Z = S.value) == null || Z.click());
    }
    return Af({
      searchTerm: d,
      modelValue: u,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: w,
      multiple: o,
      disabled: s,
      open: c,
      onOpenChange: _,
      filteredOptions: M,
      contentId: "",
      inputElement: g,
      selectedElement: S,
      onInputElementChange: (G) => g.value = G,
      onInputNavigation: async (G) => {
        const Z = N.value;
        Z === 0 && G === "up" || Z === M.value.length - 1 && G === "down" || (Z === -1 && M.value.length || G === "home" ? p.value = M.value[0] : G === "end" ? p.value = M.value[M.value.length - 1] : p.value = M.value[G === "up" ? Z - 1 : Z + 1], await se(), q(), U(), se(() => {
          var de;
          return (de = g.value) == null ? void 0 : de.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: ye,
      onCompositionEnd: ge,
      onCompositionStart: te,
      selectedValue: p,
      onSelectedValueChange: (G) => p.value = G,
      parentElement: D,
      contentElement: x,
      onContentElementChange: (G) => x.value = G
    }), (G, Z) => (v(), h(l(ga), null, {
      default: f(() => [
        B(l(L), P({
          ref: l(C),
          style: {
            pointerEvents: l(c) ? "auto" : void 0
          },
          as: G.as,
          "as-child": G.asChild,
          dir: l(i)
        }, G.$attrs), {
          default: f(() => [
            b(G.$slots, "default", {
              open: l(c),
              modelValue: l(u)
            }),
            l(R) && a.name ? (v(), h(l(Pf), {
              key: 0,
              name: a.name,
              value: l(u)
            }, null, 8, ["name", "value"])) : ee("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Tf = /* @__PURE__ */ y({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, a = ya(), { forwardRef: n, currentElement: o } = z();
    ce(() => {
      const c = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      c && (a.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const s = $(() => t.disabled || a.disabled.value || !1), r = A();
    cd(() => {
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
    return (c, p) => (v(), h(l(L), {
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
        He(ke(i, ["prevent"]), ["down", "up"]),
        He(l(a).onInputEnter, ["enter"]),
        He(ke(d, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: l(a).onCompositionStart,
      onCompositionend: l(a).onCompositionEnd
    }, {
      default: f(() => [
        b(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [ti, If] = le("ComboboxGroup"), Vf = /* @__PURE__ */ y({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: a, currentElement: n } = z(), o = we(void 0, "radix-vue-combobox-group"), s = ya(), r = A(!1);
    function i() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!d.length;
    }
    return Uc(n, () => {
      se(() => {
        i();
      });
    }, { childList: !0 }), ae(() => s.searchTerm.value, () => {
      se(() => {
        i();
      });
    }, { immediate: !0 }), If({
      id: o
    }), (d, u) => ua((v(), h(l(L), P(t, {
      ref_key: "currentRef",
      ref: a,
      role: "group",
      "aria-labelledby": l(o)
    }), {
      default: f(() => [
        b(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [Ho, r.value]
    ]);
  }
}), Rf = /* @__PURE__ */ y({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    z();
    const a = ti({ id: "" });
    return (n, o) => (v(), h(l(L), P(t, {
      id: l(a).id
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [F0, Ff] = le("ComboboxContent"), Lf = /* @__PURE__ */ y({
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
    const a = e, n = t, { position: o } = me(a), s = ya();
    Wa(a.bodyLock);
    const { forwardRef: r, currentElement: i } = z();
    Ka(s.parentElement);
    const d = $(() => a.position === "popper" ? a : {}), u = re(d.value);
    function c(_) {
      s.onSelectedValueChange("");
    }
    ce(() => {
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
    return Ff({ position: o }), (_, m) => (v(), h(l(Bl), null, {
      default: f(() => [
        _.dismissable ? (v(), h(l(ma), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": _.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (w) => l(s).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (w) => {
            var g;
            (g = l(s).parentElement.value) != null && g.contains(w.target) && w.preventDefault(), n("focusOutside", w);
          }),
          onInteractOutside: m[2] || (m[2] = (w) => n("interactOutside", w)),
          onEscapeKeyDown: m[3] || (m[3] = (w) => n("escapeKeyDown", w)),
          onPointerDownOutside: m[4] || (m[4] = (w) => {
            var g;
            (g = l(s).parentElement.value) != null && g.contains(w.target) && w.preventDefault(), n("pointerDownOutside", w);
          })
        }, {
          default: f(() => [
            (v(), h(Be(l(o) === "popper" ? l(da) : l(L)), P({ ..._.$attrs, ...l(u) }, {
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
                b(_.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (v(), h(Be(l(o) === "popper" ? l(da) : l(L)), P({ key: 1 }, { ..._.$attrs, ...d.value }, {
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
            b(_.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Nf = /* @__PURE__ */ y({
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
    const a = ne(e, t), { forwardRef: n } = z(), o = ya();
    return o.contentId || (o.contentId = we(void 0, "radix-vue-combobox-content")), (s, r) => (v(), h(l(Te), {
      present: s.forceMount || l(o).open.value
    }, {
      default: f(() => [
        B(Lf, P({ ...l(a), ...s.$attrs }, { ref: l(n) }), {
          default: f(() => [
            b(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), zf = /* @__PURE__ */ y({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    z();
    const a = ya(), n = $(() => a.filteredOptions.value.length === 0);
    return (o, s) => n.value ? (v(), h(l(L), H(P({ key: 0 }, t)), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          J("No options")
        ])
      ]),
      _: 3
    }, 16)) : ee("", !0);
  }
});
function Uf(e) {
  const t = Fn({
    nonce: A()
  });
  return $(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.nonce) == null ? void 0 : a.value);
  });
}
const [L0, Wf] = le("ComboboxItem"), Hf = "combobox.select", Kf = /* @__PURE__ */ y({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { disabled: o } = me(a), s = ya();
    ti({ id: "", options: A([]) });
    const { forwardRef: r } = z(), i = $(
      () => {
        var g, x;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (g = s.modelValue.value) == null ? void 0 : g.some((C) => Rt(C, a.value)) : Rt((x = s.modelValue) == null ? void 0 : x.value, a.value);
      }
    ), d = $(() => Rt(s.selectedValue.value, a.value)), u = we(void 0, "radix-vue-combobox-item"), c = we(void 0, "radix-vue-combobox-option"), p = $(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((g) => Rt(g, a.value)) : !0);
    async function _(g) {
      n("select", g), !(g != null && g.defaultPrevented) && !o.value && g && s.onValueChange(a.value);
    }
    function m(g) {
      if (!g)
        return;
      const x = { originalEvent: g, value: a.value };
      ul(Hf, _, x);
    }
    async function w(g) {
      await se(), !g.defaultPrevented && s.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Wf({
      isSelected: i
    }), (g, x) => (v(), h(l(Un), { value: g.value }, {
      default: f(() => [
        ua(B(l(L), {
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
          as: g.as,
          "as-child": g.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: m,
          onPointermove: w
        }, {
          default: f(() => [
            b(g.$slots, "default", {}, () => [
              J(X(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Ho, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), jf = /* @__PURE__ */ y({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), h(l(L), P(t, { "aria-hidden": "true" }), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ai = /* @__PURE__ */ y({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(zn), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Gf() {
  const e = A(!1);
  return ce(() => {
    ia("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), ia(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const qf = Er(Gf), [Ht, ni] = le(["MenuRoot", "MenuSub"], "MenuContext"), [Ya, Yf] = le("MenuRoot"), Jf = /* @__PURE__ */ y({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o, dir: s } = me(a), r = lt(s), i = ve(a, "open", n), d = A(), u = qf();
    return ni({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: d,
      onContentChange: (c) => {
        d.value = c;
      }
    }), Yf({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: u,
      dir: r,
      modal: o
    }), (c, p) => (v(), h(l(ga), null, {
      default: f(() => [
        b(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Qf = "rovingFocusGroup.onEntryFocus", Xf = { bubbles: !1, cancelable: !0 }, Zf = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ev(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function tv(e, t, a) {
  const n = ev(e.key, a);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Zf[n];
}
function oi(e, t = !1) {
  const a = xe();
  for (const n of e)
    if (n === a || (n.focus({ preventScroll: t }), xe() !== a))
      return;
}
function av(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
const [nv, ov] = le("RovingFocusGroup"), li = /* @__PURE__ */ y({
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
    const n = e, o = a, { loop: s, orientation: r, dir: i } = me(n), d = lt(i), u = ve(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = A(!1), p = A(!1), _ = A(0), { getItems: m } = kl();
    function w(x) {
      const C = !p.value;
      if (x.currentTarget && x.target === x.currentTarget && C && !c.value) {
        const D = new CustomEvent(Qf, Xf);
        if (x.currentTarget.dispatchEvent(D), o("entryFocus", D), !D.defaultPrevented) {
          const k = m().map((M) => M.ref).filter((M) => M.dataset.disabled !== ""), O = k.find((M) => M.getAttribute("data-active") === "true"), E = k.find(
            (M) => M.id === u.value
          ), I = [O, E, ...k].filter(
            Boolean
          );
          oi(I, n.preventScrollOnEntryFocus);
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
    }), ov({
      loop: s,
      dir: d,
      orientation: r,
      currentTabStopId: u,
      onItemFocus: (x) => {
        u.value = x;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        _.value++;
      },
      onFocusableItemRemove: () => {
        _.value--;
      }
    }), (x, C) => (v(), h(l(Bl), null, {
      default: f(() => [
        B(l(L), {
          tabindex: c.value || _.value === 0 ? -1 : 0,
          "data-orientation": l(r),
          as: x.as,
          "as-child": x.asChild,
          dir: l(d),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (D) => p.value = !0),
          onMouseup: g,
          onFocus: w,
          onBlur: C[1] || (C[1] = (D) => c.value = !1)
        }, {
          default: f(() => [
            b(x.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), lv = /* @__PURE__ */ y({
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
    const t = e, a = nv(), n = $(() => t.tabStopId || we()), o = $(
      () => a.currentTabStopId.value === n.value
    ), { getItems: s } = Dl();
    ce(() => {
      t.focusable && a.onFocusableItemAdd();
    }), At(() => {
      t.focusable && a.onFocusableItemRemove();
    });
    function r(i) {
      if (i.key === "Tab" && i.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const d = tv(
        i,
        a.orientation.value,
        a.dir.value
      );
      if (d !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !t.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let u = [...s().map((c) => c.ref).filter((c) => c.dataset.disabled !== "")];
        if (d === "last")
          u.reverse();
        else if (d === "prev" || d === "next") {
          d === "prev" && u.reverse();
          const c = u.indexOf(
            i.currentTarget
          );
          u = a.loop.value ? av(u, c + 1) : u.slice(c + 1);
        }
        se(() => oi(u));
      }
    }
    return (i, d) => (v(), h(l(Un), null, {
      default: f(() => [
        B(l(L), {
          tabindex: o.value ? 0 : -1,
          "data-orientation": l(a).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: d[0] || (d[0] = (u) => {
            i.focusable ? l(a).onItemFocus(n.value) : u.preventDefault();
          }),
          onFocus: d[1] || (d[1] = (u) => l(a).onItemFocus(n.value)),
          onKeydown: r
        }, {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [Sl, sv] = le("MenuContent"), Pl = /* @__PURE__ */ y({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Hs({
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
    ...ei
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Ht(), s = Ya(), { trapFocus: r, disableOutsidePointerEvents: i, loop: d } = me(a);
    vl(), Wa(i.value);
    const u = A(""), c = A(0), p = A(0), _ = A(null), m = A("right"), w = A(0), g = A(null), { createCollection: x } = fa(), { forwardRef: C, currentElement: D } = z(), k = x(D);
    ae(D, (S) => {
      o.onContentChange(S);
    });
    const { handleTypeaheadSearch: O } = ml(k);
    At(() => {
      window.clearTimeout(c.value);
    });
    function E(S) {
      var V, R;
      return m.value === ((V = _.value) == null ? void 0 : V.side) && Gp(S, (R = _.value) == null ? void 0 : R.area);
    }
    async function I(S) {
      var V;
      n("openAutoFocus", S), !S.defaultPrevented && (S.preventDefault(), (V = D.value) == null || V.focus({
        preventScroll: !0
      }));
    }
    function M(S) {
      if (S.defaultPrevented)
        return;
      const V = S.target.closest("[data-radix-menu-content]") === S.currentTarget, R = S.ctrlKey || S.altKey || S.metaKey, q = S.key.length === 1, U = Tr(
        S,
        xe(),
        D.value,
        {
          loop: d.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (U)
        return U == null ? void 0 : U.focus();
      if (S.code === "Space" || (V && (S.key === "Tab" && S.preventDefault(), !R && q && O(S.key)), S.target !== D.value) || !Wp.includes(S.key))
        return;
      S.preventDefault();
      const Y = k.value;
      jr.includes(S.key) && Y.reverse(), Eo(Y);
    }
    function W(S) {
      var V, R;
      (R = (V = S == null ? void 0 : S.currentTarget) == null ? void 0 : V.contains) != null && R.call(V, S.target) || (window.clearTimeout(c.value), u.value = "");
    }
    function N(S) {
      var V;
      if (!Va(S))
        return;
      const R = S.target, q = w.value !== S.clientX;
      if ((V = S == null ? void 0 : S.currentTarget) != null && V.contains(R) && q) {
        const U = S.clientX > w.value ? "right" : "left";
        m.value = U, w.value = S.clientX;
      }
    }
    return sv({
      onItemEnter: (S) => !!E(S),
      onItemLeave: (S) => {
        var V;
        E(S) || ((V = D.value) == null || V.focus(), g.value = null);
      },
      onTriggerLeave: (S) => !!E(S),
      searchRef: u,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (S) => {
        _.value = S;
      }
    }), (S, V) => (v(), h(l(Nn), {
      "as-child": "",
      trapped: l(r),
      onMountAutoFocus: I,
      onUnmountAutoFocus: V[7] || (V[7] = (R) => n("closeAutoFocus", R))
    }, {
      default: f(() => [
        B(l(ma), {
          "as-child": "",
          "disable-outside-pointer-events": l(i),
          onEscapeKeyDown: V[2] || (V[2] = (R) => n("escapeKeyDown", R)),
          onPointerDownOutside: V[3] || (V[3] = (R) => n("pointerDownOutside", R)),
          onFocusOutside: V[4] || (V[4] = (R) => n("focusOutside", R)),
          onInteractOutside: V[5] || (V[5] = (R) => n("interactOutside", R)),
          onDismiss: V[6] || (V[6] = (R) => n("dismiss"))
        }, {
          default: f(() => [
            B(l(li), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": V[0] || (V[0] = (R) => g.value = R),
              "as-child": "",
              orientation: "vertical",
              dir: l(s).dir.value,
              loop: l(d),
              onEntryFocus: V[1] || (V[1] = (R) => {
                n("entryFocus", R), l(s).isUsingKeyboardRef.value || R.preventDefault();
              })
            }, {
              default: f(() => [
                B(l(da), {
                  ref: l(C),
                  role: "menu",
                  as: S.as,
                  "as-child": S.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(_l)(l(o).open.value),
                  dir: l(s).dir.value,
                  side: S.side,
                  "side-offset": S.sideOffset,
                  align: S.align,
                  "align-offset": S.alignOffset,
                  "avoid-collisions": S.avoidCollisions,
                  "collision-boundary": S.collisionBoundary,
                  "collision-padding": S.collisionPadding,
                  "arrow-padding": S.arrowPadding,
                  "prioritize-position": S.prioritizePosition,
                  sticky: S.sticky,
                  "hide-when-detached": S.hideWhenDetached,
                  onKeydown: M,
                  onBlur: W,
                  onPointermove: N
                }, {
                  default: f(() => [
                    b(S.$slots, "default")
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
}), si = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Sl(), { forwardRef: n } = z(), o = A(!1);
    async function s(i) {
      if (!i.defaultPrevented && Va(i)) {
        if (t.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function r(i) {
      await se(), !i.defaultPrevented && Va(i) && a.onItemLeave(i);
    }
    return (i, d) => (v(), h(l(Un), {
      value: { textValue: i.textValue }
    }, {
      default: f(() => [
        B(l(L), P({
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
            await se(), !(u.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: d[1] || (d[1] = async (u) => {
            await se(), !u.defaultPrevented && (o.value = !1);
          })
        }), {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), El = /* @__PURE__ */ y({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: s } = z(), r = Ya(), i = Sl(), d = A(!1);
    async function u() {
      const c = s.value;
      if (!a.disabled && c) {
        const p = new CustomEvent(zp, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await se(), p.defaultPrevented ? d.value = !1 : r.onClose();
      }
    }
    return (c, p) => (v(), h(si, P(a, {
      ref: l(o),
      onClick: u,
      onPointerdown: p[0] || (p[0] = () => {
        d.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (_) => {
        var m;
        await se(), !_.defaultPrevented && (d.value || (m = _.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (_) => {
        const m = l(i).searchRef.value !== "";
        c.disabled || m && _.key === " " || l(Po).includes(_.key) && (_.currentTarget.click(), _.preventDefault());
      })
    }), {
      default: f(() => [
        b(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [rv, ri] = le(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), iv = /* @__PURE__ */ y({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = rv({
      checked: A(!1)
    });
    return (a, n) => (v(), h(l(Te), {
      present: a.forceMount || l(Bn)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: f(() => [
        B(l(L), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": l(wl)(l(t).checked.value)
        }, {
          default: f(() => [
            b(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), dv = /* @__PURE__ */ y({
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
    return ri({ checked: o }), (s, r) => (v(), h(El, P({ role: "menuitemcheckbox" }, a, {
      "aria-checked": l(Bn)(l(o)) ? "mixed" : l(o),
      "data-state": l(wl)(l(o)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), l(Bn)(l(o)) ? o.value = !0 : o.value = !l(o);
      })
    }), {
      default: f(() => [
        b(s.$slots, "default", { checked: l(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), uv = /* @__PURE__ */ y({
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
    const a = e, n = t, o = ne(a, n), s = Ht(), { forwardRef: r, currentElement: i } = z();
    return Ka(i), (d, u) => (v(), h(Pl, P(l(o), {
      ref: l(r),
      "trap-focus": l(s).open.value,
      "disable-outside-pointer-events": l(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: u[0] || (u[0] = (c) => l(s).onOpenChange(!1)),
      onFocusOutside: u[1] || (u[1] = ke((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: f(() => [
        b(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), cv = /* @__PURE__ */ y({
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
    const a = ne(e, t), n = Ht();
    return (o, s) => (v(), h(Pl, P(l(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (r) => l(n).onOpenChange(!1))
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pv = /* @__PURE__ */ y({
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
    const a = ne(e, t), n = Ht(), o = Ya();
    return (s, r) => (v(), h(l(Te), {
      present: s.forceMount || l(n).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), h(uv, H(P({ key: 0 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            b(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), h(cv, H(P({ key: 1 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            b(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ii = /* @__PURE__ */ y({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), P({ role: "group" }, t), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fv = /* @__PURE__ */ y({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vv = /* @__PURE__ */ y({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(ja), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [mv, hv] = le("MenuRadioGroup"), gv = /* @__PURE__ */ y({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = ve(a, "modelValue", t);
    return hv({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, s) => (v(), h(ii, H(j(a)), {
      default: f(() => [
        b(o.$slots, "default", { modelValue: l(n) })
      ]),
      _: 3
    }, 16));
  }
}), yv = /* @__PURE__ */ y({
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
    const a = e, n = t, { value: o } = me(a), s = mv(), r = $(
      () => s.modelValue.value === (o == null ? void 0 : o.value)
    );
    return ri({ checked: r }), (i, d) => (v(), h(El, P({ role: "menuitemradio" }, a, {
      "aria-checked": r.value,
      "data-state": l(wl)(r.value),
      onSelect: d[0] || (d[0] = async (u) => {
        n("select", u), l(s).onValueChange(l(o));
      })
    }), {
      default: f(() => [
        b(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), bv = /* @__PURE__ */ y({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), P(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [di, _v] = le("MenuSub"), wv = /* @__PURE__ */ y({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = ve(a, "open", t, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = Ht(), s = A(), r = A();
    return be((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), ni({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: r,
      onContentChange: (i) => {
        r.value = i;
      }
    }), _v({
      triggerId: "",
      contentId: "",
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, d) => (v(), h(l(ga), null, {
      default: f(() => [
        b(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), xv = /* @__PURE__ */ y({
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
    const a = ne(e, t), n = Ht(), o = Ya(), s = di(), { forwardRef: r, currentElement: i } = z();
    return s.contentId || (s.contentId = we(void 0, "radix-vue-menu-sub-content")), (d, u) => (v(), h(l(Te), {
      present: d.forceMount || l(n).open.value
    }, {
      default: f(() => [
        B(Pl, P(l(a), {
          id: l(s).contentId,
          ref: l(r),
          "aria-labelledby": l(s).triggerId,
          align: "start",
          side: l(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: u[0] || (u[0] = ke((c) => {
            var p;
            l(o).isUsingKeyboardRef.value && ((p = l(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: u[1] || (u[1] = ke(() => {
          }, ["prevent"])),
          onFocusOutside: u[2] || (u[2] = (c) => {
            c.defaultPrevented || c.target !== l(s).trigger.value && l(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: u[3] || (u[3] = (c) => {
            l(o).onClose(), c.preventDefault();
          }),
          onKeydown: u[4] || (u[4] = (c) => {
            var p, _;
            const m = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), w = l(Kp)[l(o).dir.value].includes(c.key);
            m && w && (l(n).onOpenChange(!1), (_ = l(s).trigger.value) == null || _.focus(), c.preventDefault());
          })
        }), {
          default: f(() => [
            b(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), $v = /* @__PURE__ */ y({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Ht(), n = Ya(), o = di(), s = Sl(), r = A(null);
    o.triggerId || (o.triggerId = we(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    At(() => {
      i();
    });
    function d(p) {
      !Va(p) || s.onItemEnter(p) || !t.disabled && !a.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function u(p) {
      var _, m;
      if (!Va(p))
        return;
      i();
      const w = (_ = a.content.value) == null ? void 0 : _.getBoundingClientRect();
      if (w != null && w.width) {
        const g = (m = a.content.value) == null ? void 0 : m.dataset.side, x = g === "right", C = x ? -5 : 5, D = w[x ? "left" : "right"], k = w[x ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: D, y: w.top },
            { x: k, y: w.top },
            { x: k, y: w.bottom },
            { x: D, y: w.bottom }
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
    async function c(p) {
      var _;
      const m = s.searchRef.value !== "";
      t.disabled || m && p.key === " " || Hp[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await se(), (_ = a.content.value) == null || _.focus(), p.preventDefault());
    }
    return (p, _) => (v(), h(ai, { "as-child": "" }, {
      default: f(() => [
        B(si, P(t, {
          id: l(o).triggerId,
          ref: (m) => {
            var w;
            (w = l(o)) == null || w.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(a).open.value,
          "aria-controls": l(o).contentId,
          "data-state": l(_l)(l(a).open.value),
          onClick: _[0] || (_[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), l(a).open.value || l(a).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: u,
          onKeydown: c
        }), {
          default: f(() => [
            b(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [ui, Cv] = le("DropdownMenuRoot"), kv = /* @__PURE__ */ y({
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
    z();
    const o = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), s = A(), { modal: r, dir: i } = me(a), d = lt(i);
    return Cv({
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
    }), (u, c) => (v(), h(l(Jf), {
      open: l(o),
      "onUpdate:open": c[0] || (c[0] = (p) => ca(o) ? o.value = p : null),
      dir: l(d),
      modal: l(r)
    }, {
      default: f(() => [
        b(u.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Bv = /* @__PURE__ */ y({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = ui(), { forwardRef: n, currentElement: o } = z();
    return ce(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = we(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (v(), h(l(ai), { "as-child": "" }, {
      default: f(() => [
        B(l(L), {
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
            !s.disabled && i.button === 0 && i.ctrlKey === !1 && ((d = l(a)) == null || d.onOpenToggle(), await se(), l(a).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = He(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && l(a).onOpenToggle(), i.key === "ArrowDown" && l(a).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: f(() => [
            b(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Dv = /* @__PURE__ */ y({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(vv), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sv = /* @__PURE__ */ y({
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
    const a = ne(e, t);
    z();
    const n = ui(), o = A(!1);
    function s(r) {
      r.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, r.preventDefault());
    }
    return n.contentId || (n.contentId = we(void 0, "radix-vue-dropdown-menu-content")), (r, i) => {
      var d;
      return v(), h(l(pv), P(l(a), {
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
          const p = u.detail.originalEvent, _ = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || _;
          (!l(n).modal.value || m) && (o.value = !0), (c = l(n).triggerElement.value) != null && c.contains(u.target) && u.preventDefault();
        })
      }), {
        default: f(() => [
          b(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), ci = /* @__PURE__ */ y({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = Wt(t);
    return z(), (o, s) => (v(), h(l(El), H(j({ ...a, ...l(n) })), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pv = /* @__PURE__ */ y({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), h(l(ii), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ev = /* @__PURE__ */ y({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), h(l(bv), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ov = /* @__PURE__ */ y({
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
    const a = e, n = Wt(t);
    return z(), (o, s) => (v(), h(l(dv), H(j({ ...a, ...l(n) })), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pi = /* @__PURE__ */ y({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), h(l(iv), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Av = /* @__PURE__ */ y({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), h(l(fv), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mv = /* @__PURE__ */ y({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = Wt(t);
    return z(), (o, s) => (v(), h(l(gv), H(j({ ...a, ...l(n) })), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tv = /* @__PURE__ */ y({
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
    const a = ne(e, t);
    return z(), (n, o) => (v(), h(l(yv), H(j(l(a))), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Iv = /* @__PURE__ */ y({
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
    return z(), (o, s) => (v(), h(l(wv), {
      open: l(n),
      "onUpdate:open": s[0] || (s[0] = (r) => ca(n) ? n.value = r : null)
    }, {
      default: f(() => [
        b(o.$slots, "default", { open: l(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Vv = /* @__PURE__ */ y({
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
    const a = ne(e, t);
    return z(), (n, o) => (v(), h(l(xv), P(l(a), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rv = /* @__PURE__ */ y({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), h(l($v), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fv = /* @__PURE__ */ y({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), h(l(L), P(t, {
      onMousedown: n[0] || (n[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ba, Lv] = le("PaginationRoot"), Nv = /* @__PURE__ */ y({
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
    z();
    const i = ve(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), d = $(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return Lv({
      page: i,
      onPageChange(u) {
        i.value = u;
      },
      pageCount: d,
      siblingCount: o,
      disabled: s,
      showEdges: r
    }), (u, c) => (v(), h(l(L), {
      as: u.as,
      "as-child": u.asChild
    }, {
      default: f(() => [
        b(u.$slots, "default", {
          page: l(i),
          pageCount: d.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), zv = /* @__PURE__ */ y({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), h(l(L), P(t, { "data-type": "ellipsis" }), {
      default: f(() => [
        b(a.$slots, "default", {}, () => [
          J("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), Uv = /* @__PURE__ */ y({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = ba();
    z();
    const n = $(() => a.page.value === 1 || a.disabled.value);
    return (o, s) => (v(), h(l(L), P(t, {
      "aria-label": "First Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && l(a).onPageChange(1))
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          J("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Wv = /* @__PURE__ */ y({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = ba();
    z();
    const n = $(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, s) => (v(), h(l(L), P(t, {
      "aria-label": "Last Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && l(a).onPageChange(l(a).pageCount.value))
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          J("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function wt(e, t) {
  const a = t - e + 1;
  return Array.from({ length: a }, (n, o) => o + e);
}
function Hv(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const on = "ellipsis";
function Kv(e, t, a, n) {
  const o = t, s = Math.max(e - a, 1), r = Math.min(e + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, t) - 2, d = s > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(s - 1) > 2, u = r < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - r) > 2;
    if (!d && u)
      return [...wt(1, i), on, o];
    if (d && !u) {
      const c = wt(o - i + 1, o);
      return [1, on, ...c];
    }
    if (d && u) {
      const c = wt(s, r);
      return [1, on, ...c, on, o];
    }
    return wt(1, o);
  } else {
    const i = a * 2 + 1;
    return t < i ? wt(1, o) : e <= a + 1 ? wt(1, i) : t - e <= a ? wt(t - i + 1, o) : wt(s, r);
  }
}
const jv = /* @__PURE__ */ y({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    z();
    const a = ba(), n = $(() => Hv(
      Kv(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, s) => (v(), h(l(L), H(j(t)), {
      default: f(() => [
        b(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), N0 = /* @__PURE__ */ y({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    z();
    const a = ba(), n = $(() => a.page.value === t.value), o = $(() => a.disabled.value);
    return (s, r) => (v(), h(l(L), P(t, {
      "data-type": "page",
      "aria-label": `Page ${s.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: o.value,
      type: s.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (i) => !o.value && l(a).onPageChange(s.value))
    }), {
      default: f(() => [
        b(s.$slots, "default", {}, () => [
          J(X(s.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), Gv = /* @__PURE__ */ y({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    z();
    const a = ba(), n = $(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, s) => (v(), h(l(L), P(t, {
      "aria-label": "Next Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && l(a).onPageChange(l(a).page.value + 1))
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          J("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), qv = /* @__PURE__ */ y({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    z();
    const a = ba(), n = $(() => a.page.value === 1 || a.disabled.value);
    return (o, s) => (v(), h(l(L), P(t, {
      "aria-label": "Previous Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && l(a).onPageChange(l(a).page.value - 1))
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          J("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), [Ja, Yv] = le("PopoverRoot"), Jv = /* @__PURE__ */ y({
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
    }), r = A(), i = A(!1);
    return Yv({
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
    }), (d, u) => (v(), h(l(ga), null, {
      default: f(() => [
        b(d.$slots, "default", { open: l(s) })
      ]),
      _: 3
    }));
  }
}), Qv = /* @__PURE__ */ y({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ja(), { forwardRef: n, currentElement: o } = z();
    return ce(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), h(Be(l(a).hasCustomAnchor.value ? l(L) : l(zn)), { "as-child": "" }, {
      default: f(() => [
        B(l(L), {
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
            b(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Xv = /* @__PURE__ */ y({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(ja), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fi = /* @__PURE__ */ y({
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
    const a = e, n = t, o = re(a), { forwardRef: s } = z(), r = Ja();
    return vl(), (i, d) => (v(), h(l(Nn), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: f(() => [
        B(l(ma), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (u) => n("pointerDownOutside", u)),
          onInteractOutside: d[1] || (d[1] = (u) => n("interactOutside", u)),
          onEscapeKeyDown: d[2] || (d[2] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[3] || (d[3] = (u) => n("focusOutside", u)),
          onDismiss: d[4] || (d[4] = (u) => l(r).onOpenChange(!1))
        }, {
          default: f(() => [
            B(l(da), P(l(o), {
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
                b(i.$slots, "default")
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
}), Zv = /* @__PURE__ */ y({
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
    const a = e, n = t, o = Ja(), s = A(!1);
    Wa(!0);
    const r = ne(a, n), { forwardRef: i, currentElement: d } = z();
    return Ka(d), (u, c) => (v(), h(fi, P(l(r), {
      ref: l(i),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = ke(
        (p) => {
          var _;
          n("closeAutoFocus", p), s.value || (_ = l(o).triggerElement.value) == null || _.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        n("pointerDownOutside", p);
        const _ = p.detail.originalEvent, m = _.button === 0 && _.ctrlKey === !0, w = _.button === 2 || m;
        s.value = w;
      }),
      onFocusOutside: c[2] || (c[2] = ke(() => {
      }, ["prevent"]))
    }), {
      default: f(() => [
        b(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), em = /* @__PURE__ */ y({
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
    const a = e, n = t, o = Ja(), s = A(!1), r = A(!1), i = ne(a, n);
    return (d, u) => (v(), h(fi, P(l(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (s.value || (p = l(o).triggerElement.value) == null || p.focus(), c.preventDefault()), s.value = !1, r.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = async (c) => {
        var p;
        n("interactOutside", c), c.defaultPrevented || (s.value = !0, c.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const _ = c.target;
        (p = l(o).triggerElement.value) != null && p.contains(_) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && r.value && c.preventDefault();
      })
    }), {
      default: f(() => [
        b(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tm = /* @__PURE__ */ y({
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
    const a = e, n = t, o = Ja(), s = ne(a, n), { forwardRef: r } = z();
    return o.contentId || (o.contentId = we(void 0, "radix-vue-popover-content")), (i, d) => (v(), h(l(Te), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), h(Zv, P({ key: 0 }, l(s), { ref: l(r) }), {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), h(em, P({ key: 1 }, l(s), { ref: l(r) }), {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function am(e) {
  const t = $(() => e.start.value ? !!e.isDateDisabled(e.start.value) : !1), a = $(() => e.end.value ? !!e.isDateDisabled(e.end.value) : !1), n = $(
    () => t.value || a.value ? !1 : !!(e.start.value && e.end.value && Dt(e.end.value, e.start.value))
  ), o = (d) => e.start.value ? Ce(e.start.value, d) : !1, s = (d) => e.end.value ? Ce(e.end.value, d) : !1, r = (d) => e.start.value && Ce(e.start.value, d) || e.end.value && Ce(e.end.value, d) ? !0 : e.end.value && e.start.value ? Eu(d, e.start.value, e.end.value) : !1, i = $(() => {
    if (e.start.value && e.end.value || !e.start.value || !e.focusedValue.value)
      return null;
    const d = Dt(e.start.value, e.focusedValue.value), u = d ? e.start.value : e.focusedValue.value, c = d ? e.focusedValue.value : e.start.value;
    return Ce(u, c) ? {
      start: u,
      end: c
    } : Mu(u, c, e.isDateUnavailable, e.isDateDisabled) ? {
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
    isHighlightedStart: (d) => !i.value || !i.value.start ? !1 : Ce(i.value.start, d),
    isHighlightedEnd: (d) => !i.value || !i.value.end ? !1 : Ce(i.value.end, d)
  };
}
const nm = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, om = {
  role: "heading",
  "aria-level": "2"
}, [_a, lm] = le("RangeCalendarRoot"), sm = /* @__PURE__ */ y({
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
      preventDeselect: _,
      isDateUnavailable: m,
      isDateDisabled: w,
      calendarLabel: g,
      maxValue: x,
      minValue: C,
      locale: D,
      dir: k,
      nextPage: O,
      prevPage: E
    } = me(a), { primitiveElement: I, currentElement: M } = va(), W = lt(k), N = A(), S = A(), V = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), R = Sr({
      defaultPlaceholder: a.placeholder,
      defaultValue: V.value.start,
      locale: a.locale
    }), q = A(V.value.start), U = A(V.value.end), Y = ve(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? R.copy(),
      passive: a.placeholder === void 0
    });
    function te(pe) {
      Y.value = pe.copy();
    }
    const {
      fullCalendarLabel: ge,
      headingValue: ye,
      isDateDisabled: G,
      isDateUnavailable: Z,
      isNextButtonDisabled: de,
      isPrevButtonDisabled: Ne,
      grid: Je,
      weekdays: bt,
      isOutsideVisibleView: _t,
      nextPage: Ca,
      prevPage: Ie,
      formatter: Oe
    } = Jr({
      locale: D,
      placeholder: Y,
      weekStartsOn: d,
      fixedWeeks: c,
      numberOfMonths: p,
      minValue: C,
      maxValue: x,
      disabled: o,
      weekdayFormat: u,
      pagedNavigation: i,
      isDateDisabled: w.value,
      isDateUnavailable: m.value,
      calendarLabel: g,
      nextPage: O,
      prevPage: E
    }), {
      isInvalid: Qe,
      isSelected: ue,
      highlightedRange: Se,
      isSelectionStart: rt,
      isSelectionEnd: ka,
      isHighlightedStart: id,
      isHighlightedEnd: dd
    } = am({
      start: q,
      end: U,
      isDateDisabled: G,
      isDateUnavailable: Z,
      focusedValue: S
    });
    return ae(V, (pe) => {
      var Ve, Pe, Yn, Ll;
      (!pe || !pe.start || q.value && !Ze(pe.start, q.value)) && (q.value = (Pe = (Ve = pe == null ? void 0 : pe.start) == null ? void 0 : Ve.copy) == null ? void 0 : Pe.call(Ve)), (!pe || !pe.end || U.value && !Ze(pe.end, U.value)) && (U.value = (Ll = (Yn = pe == null ? void 0 : pe.end) == null ? void 0 : Yn.copy) == null ? void 0 : Ll.call(Yn));
    }), ae(q, (pe) => {
      pe && !Ze(pe, Y.value) && te(pe), n("update:startValue", pe);
    }), ae([q, U], ([pe, Ve]) => {
      const Pe = V.value;
      if (!(Pe && Pe.start && Pe.end && pe && Ve && Ze(Pe.start, pe) && Ze(Pe.end, Ve)))
        if (pe && Ve) {
          if (Pe.start && Pe.end && Ze(Pe.start, pe) && Ze(Pe.end, Ve))
            return;
          Dt(Ve, pe) ? V.value = {
            start: Ve.copy(),
            end: pe.copy()
          } : V.value = {
            start: pe.copy(),
            end: Ve.copy()
          };
        } else Pe.start && Pe.end && (V.value = {
          start: pe == null ? void 0 : pe.copy(),
          end: void 0
        });
    }), lm({
      isDateUnavailable: Z,
      startValue: q,
      endValue: U,
      formatter: Oe,
      modelValue: V,
      placeholder: Y,
      disabled: o,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: d,
      weekdayFormat: u,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: s,
      preventDeselect: _,
      fullCalendarLabel: ge,
      headingValue: ye,
      isInvalid: Qe,
      isDateDisabled: G,
      highlightedRange: Se,
      focusedValue: S,
      lastPressedDateValue: N,
      isSelected: ue,
      isSelectionEnd: ka,
      isSelectionStart: rt,
      isNextButtonDisabled: de,
      isPrevButtonDisabled: Ne,
      isOutsideVisibleView: _t,
      nextPage: Ca,
      prevPage: Ie,
      parentElement: M,
      onPlaceholderChange: te,
      locale: D,
      dir: W,
      isHighlightedStart: id,
      isHighlightedEnd: dd
    }), ce(() => {
      r.value && Pr(M.value);
    }), (pe, Ve) => (v(), h(l(L), {
      ref_key: "primitiveElement",
      ref: I,
      as: pe.as,
      "as-child": pe.asChild,
      role: "application",
      "aria-label": l(ge),
      "data-readonly": l(s) ? "" : void 0,
      "data-disabled": l(o) ? "" : void 0,
      "data-invalid": l(Qe) ? "" : void 0,
      dir: l(W)
    }, {
      default: f(() => [
        ie("div", nm, [
          ie("div", om, X(l(ge)), 1)
        ]),
        b(pe.$slots, "default", {
          date: l(Y),
          grid: l(Je),
          weekDays: l(bt),
          weekStartsOn: l(d),
          locale: l(D),
          fixedWeeks: l(c)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), rm = /* @__PURE__ */ y({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), im = /* @__PURE__ */ y({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = _a();
    return (n, o) => (v(), h(l(L), P(t, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        b(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          J(X(l(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), dm = /* @__PURE__ */ y({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = _a(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), h(l(L), P(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), um = /* @__PURE__ */ y({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = _a();
    return (a, n) => {
      var o, s;
      return v(), h(l(L), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": l(t).isSelected(a.date) ? !0 : void 0,
        "aria-disabled": l(t).isDateDisabled(a.date) || ((s = (o = l(t)).isDateUnavailable) == null ? void 0 : s.call(o, a.date)),
        "data-disabled": l(t).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
          b(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), cm = /* @__PURE__ */ y({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pm = /* @__PURE__ */ y({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = _a();
    return (o, s) => (v(), h(l(L), P(t, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).nextPage(t.step, t.nextPage))
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          J("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), fm = /* @__PURE__ */ y({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = _a();
    return (o, s) => (v(), h(l(L), P(t, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).prevPage(t.step, t.prevPage))
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          J("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), vm = /* @__PURE__ */ y({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), P(t, { "aria-hidden": "true" }), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mm = /* @__PURE__ */ y({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hm = /* @__PURE__ */ y({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gm = /* @__PURE__ */ y({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = _a(), n = Nr(), { primitiveElement: o, currentElement: s } = va(), r = $(() => a.formatter.custom(Fe(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = $(() => a.isDateDisabled(t.day)), d = $(() => {
      var N;
      return (N = a.isDateUnavailable) == null ? void 0 : N.call(a, t.day);
    }), u = $(() => a.isSelected(t.day)), c = $(() => a.isSelectionStart(t.day)), p = $(() => a.isSelectionEnd(t.day)), _ = $(() => a.isHighlightedStart(t.day)), m = $(() => a.isHighlightedEnd(t.day)), w = $(() => a.highlightedRange.value ? Pu(t.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), g = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])", x = $(() => Qs(t.day, mt())), C = $(() => !jo(t.day, t.month)), D = $(
      () => a.isOutsideVisibleView(t.day)
    ), k = $(() => t.day.day.toLocaleString(a.locale.value)), O = $(() => !a.disabled.value && Ce(t.day, a.placeholder.value));
    function E(N, S) {
      var V;
      if (!a.readonly.value && !(a.isDateDisabled(S) || (V = a.isDateUnavailable) != null && V.call(a, S))) {
        if (a.lastPressedDateValue.value = S.copy(), a.startValue.value && a.highlightedRange.value === null) {
          if (Ce(S, a.startValue.value) && !a.preventDeselect.value && !a.endValue.value) {
            a.startValue.value = void 0, a.onPlaceholderChange(S);
            return;
          } else if (!a.endValue.value) {
            N.preventDefault(), a.lastPressedDateValue.value && Ce(a.lastPressedDateValue.value, S) && (a.startValue.value = S.copy());
            return;
          }
        }
        if (a.startValue.value && a.endValue.value && Ce(a.endValue.value, S) && !a.preventDeselect.value) {
          a.startValue.value = void 0, a.endValue.value = void 0, a.onPlaceholderChange(S);
          return;
        }
        a.startValue.value ? a.endValue.value ? a.endValue.value && a.startValue.value && (a.endValue.value = void 0, a.startValue.value = S.copy()) : a.endValue.value = S.copy() : a.startValue.value = S.copy();
      }
    }
    function I(N) {
      E(N, t.day);
    }
    function M() {
      var N;
      a.isDateDisabled(t.day) || (N = a.isDateUnavailable) != null && N.call(a, t.day) || (a.focusedValue.value = t.day.copy());
    }
    function W(N) {
      N.preventDefault(), N.stopPropagation();
      const S = a.parentElement.value, V = S ? Array.from(S.querySelectorAll(g)) : [];
      let R = V.indexOf(s.value);
      const q = 7, U = a.dir.value === "rtl" ? -1 : 1;
      switch (N.code) {
        case n.ARROW_RIGHT:
          R += U;
          break;
        case n.ARROW_LEFT:
          R -= U;
          break;
        case n.ARROW_UP:
          R -= q;
          break;
        case n.ARROW_DOWN:
          R += q;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          E(N, t.day);
          return;
        default:
          return;
      }
      if (R >= 0 && R < V.length) {
        V[R].focus();
        return;
      }
      if (R < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), se(() => {
          const Y = S ? Array.from(S.querySelectorAll(g)) : [];
          if (!a.pagedNavigation.value) {
            const te = ht(a.placeholder.value);
            Y[te - Math.abs(R)].focus();
            return;
          }
          Y[Y.length - Math.abs(R)].focus();
        });
        return;
      }
      if (R >= V.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), se(() => {
          const Y = S ? Array.from(S.querySelectorAll(g)) : [];
          if (!a.pagedNavigation.value) {
            const te = ht(a.placeholder.value.add({ months: a.numberOfMonths.value - 1 }));
            Y[Y.length - te + R - V.length].focus();
            return;
          }
          Y[R - V.length].focus();
        });
      }
    }
    return (N, S) => (v(), h(l(L), P({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": u.value ? !0 : void 0,
      "aria-disabled": i.value || d.value ? !0 : void 0,
      "data-highlighted": w.value ? "" : void 0,
      "data-selection-start": c.value ? !0 : void 0,
      "data-selection-end": p.value ? !0 : void 0,
      "data-highlighted-start": _.value ? !0 : void 0,
      "data-highlighted-end": m.value ? !0 : void 0,
      "data-selected": u.value ? !0 : void 0,
      "data-outside-visible-view": D.value ? "" : void 0,
      "data-value": N.day.toString(),
      "data-disabled": i.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": x.value ? "" : void 0,
      "data-outside-view": C.value ? "" : void 0,
      "data-focused": O.value ? "" : void 0,
      tabindex: O.value ? 0 : C.value || i.value ? void 0 : -1,
      onClick: I,
      onFocusin: M,
      onMouseenter: M,
      onKeydown: He(W, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: f(() => [
        b(N.$slots, "default", { dayValue: k.value }, () => [
          J(X(k.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-focused", "tabindex"]));
  }
}), ym = ["default-value"], bm = /* @__PURE__ */ y({
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
    const t = e, { value: a } = me(t), n = A();
    return (o, s) => (v(), h(l(qa), { "as-child": "" }, {
      default: f(() => [
        ua(ie("select", P({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => ca(a) ? a.value = r : null),
          "default-value": l(a)
        }), [
          b(o.$slots, "default")
        ], 16, ym), [
          [md, l(a)]
        ])
      ]),
      _: 3
    }));
  }
}), _m = {
  key: 0,
  value: ""
}, [Kt, vi] = le("SelectRoot"), [wm, xm] = le("SelectRoot"), $m = /* @__PURE__ */ y({
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
    }), u = A(!1), { required: c, disabled: p, dir: _ } = me(a), m = lt(_);
    vi({
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
    const w = Ha(r), g = A(/* @__PURE__ */ new Set()), x = $(() => Array.from(g.value).map((C) => {
      var D;
      return (D = C.props) == null ? void 0 : D.value;
    }).join(";"));
    return xm({
      onNativeOptionAdd: (C) => {
        g.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        g.value.delete(C);
      }
    }), (C, D) => (v(), h(l(ga), null, {
      default: f(() => [
        b(C.$slots, "default", {
          modelValue: l(o),
          open: l(s)
        }),
        l(w) ? (v(), h(bm, P({ key: x.value }, C.$attrs, {
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
            l(o) === void 0 ? (v(), F("option", _m)) : ee("", !0),
            (v(!0), F(Q, null, fe(Array.from(g.value), (k) => (v(), h(Be(k), P({ ref_for: !0 }, k.props, {
              key: k.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : ee("", !0)
      ]),
      _: 3
    }));
  }
}), Cm = [" ", "Enter", "ArrowUp", "ArrowDown"], km = [" ", "Enter"], We = 10;
function mi(e) {
  return e === "" || vn(e);
}
const Bm = /* @__PURE__ */ y({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Kt(), n = $(() => {
      var m;
      return ((m = a.disabled) == null ? void 0 : m.value) || t.disabled;
    }), { forwardRef: o, currentElement: s } = z();
    a.contentId || (a.contentId = we(void 0, "radix-vue-select-content")), ce(() => {
      a.triggerElement = s;
    });
    const { injectCollection: r } = fa(), i = r(), { search: d, handleTypeaheadSearch: u, resetTypeahead: c } = ml(i);
    function p() {
      n.value || (a.onOpenChange(!0), c());
    }
    function _(m) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, w) => (v(), h(l(zn), { "as-child": "" }, {
      default: f(() => {
        var g, x, C, D;
        return [
          B(l(L), {
            ref: l(o),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": l(a).contentId,
            "aria-expanded": l(a).open.value || !1,
            "aria-required": (g = l(a).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (x = l(a)) == null ? void 0 : x.dir.value,
            "data-state": (C = l(a)) != null && C.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": l(mi)((D = l(a).modelValue) == null ? void 0 : D.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: w[0] || (w[0] = (k) => {
              var O;
              (O = k == null ? void 0 : k.currentTarget) == null || O.focus();
            }),
            onPointerdown: w[1] || (w[1] = (k) => {
              if (k.pointerType === "touch")
                return k.preventDefault();
              const O = k.target;
              O.hasPointerCapture(k.pointerId) && O.releasePointerCapture(k.pointerId), k.button === 0 && k.ctrlKey === !1 && (_(k), k.preventDefault());
            }),
            onPointerup: w[2] || (w[2] = ke(
              (k) => {
                k.pointerType === "touch" && _(k);
              },
              ["prevent"]
            )),
            onKeydown: w[3] || (w[3] = (k) => {
              const O = l(d) !== "";
              !(k.ctrlKey || k.altKey || k.metaKey) && k.key.length === 1 && O && k.key === " " || (l(u)(k.key), l(Cm).includes(k.key) && (p(), k.preventDefault()));
            })
          }, {
            default: f(() => [
              b(m.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), Dm = /* @__PURE__ */ y({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(ja), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ol, Sm] = le("SelectItemAlignedPosition"), Pm = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, { injectCollection: o } = fa(), s = Kt(), r = jt(), i = o(), d = A(!1), u = A(!0), c = A(), { forwardRef: p, currentElement: _ } = z(), { viewport: m, selectedItem: w, selectedItemText: g, focusSelectedItem: x } = r;
    function C() {
      if (s.triggerElement.value && s.valueElement.value && c.value && _.value && m != null && m.value && w != null && w.value && g != null && g.value) {
        const O = s.triggerElement.value.getBoundingClientRect(), E = _.value.getBoundingClientRect(), I = s.valueElement.value.getBoundingClientRect(), M = g.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const Ie = M.left - E.left, Oe = I.left - Ie, Qe = O.left - Oe, ue = O.width + Qe, Se = Math.max(ue, E.width), rt = window.innerWidth - We, ka = kn(Oe, We, Math.max(We, rt - Se));
          c.value.style.minWidth = `${ue}px`, c.value.style.left = `${ka}px`;
        } else {
          const Ie = E.right - M.right, Oe = window.innerWidth - I.right - Ie, Qe = window.innerWidth - O.right - Oe, ue = O.width + Qe, Se = Math.max(ue, E.width), rt = window.innerWidth - We, ka = kn(
            Oe,
            We,
            Math.max(We, rt - Se)
          );
          c.value.style.minWidth = `${ue}px`, c.value.style.right = `${ka}px`;
        }
        const W = i.value, N = window.innerHeight - We * 2, S = m.value.scrollHeight, V = window.getComputedStyle(_.value), R = Number.parseInt(
          V.borderTopWidth,
          10
        ), q = Number.parseInt(V.paddingTop, 10), U = Number.parseInt(
          V.borderBottomWidth,
          10
        ), Y = Number.parseInt(
          V.paddingBottom,
          10
        ), te = R + q + S + Y + U, ge = Math.min(
          w.value.offsetHeight * 5,
          te
        ), ye = window.getComputedStyle(m.value), G = Number.parseInt(ye.paddingTop, 10), Z = Number.parseInt(
          ye.paddingBottom,
          10
        ), de = O.top + O.height / 2 - We, Ne = N - de, Je = w.value.offsetHeight / 2, bt = w.value.offsetTop + Je, _t = R + q + bt, Ca = te - _t;
        if (_t <= de) {
          const Ie = w.value === W[W.length - 1];
          c.value.style.bottom = "0px";
          const Oe = _.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, Qe = Math.max(
            Ne,
            Je + (Ie ? Z : 0) + Oe + U
          ), ue = _t + Qe;
          c.value.style.height = `${ue}px`;
        } else {
          const Ie = w.value === W[0];
          c.value.style.top = "0px";
          const Oe = Math.max(
            de,
            R + m.value.offsetTop + (Ie ? G : 0) + Je
          ) + Ca;
          c.value.style.height = `${Oe}px`, m.value.scrollTop = _t - de + m.value.offsetTop;
        }
        c.value.style.margin = `${We}px 0`, c.value.style.minHeight = `${ge}px`, c.value.style.maxHeight = `${N}px`, n("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const D = A("");
    ce(async () => {
      await se(), C(), _.value && (D.value = window.getComputedStyle(_.value).zIndex);
    });
    function k(O) {
      O && u.value === !0 && (C(), x == null || x(), u.value = !1);
    }
    return Sm({
      contentWrapper: c,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: k
    }), (O, E) => (v(), F("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: Ot({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: D.value
      })
    }, [
      B(l(L), P({
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
          b(O.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Em = /* @__PURE__ */ y({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: We },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = re(e);
    return (a, n) => (v(), h(l(da), P(l(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wa = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [jt, Om] = le("SelectContent"), Am = /* @__PURE__ */ y({
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
    const a = e, n = t, o = Kt();
    vl(), Wa(a.bodyLock);
    const { createCollection: s } = fa(), r = A();
    Ka(r);
    const i = s(r), { search: d, handleTypeaheadSearch: u } = ml(i), c = A(), p = A(), _ = A(), m = A(!1), w = A(!1);
    function g() {
      p.value && r.value && Eo([p.value, r.value]);
    }
    ae(m, () => {
      g();
    });
    const { onOpenChange: x, triggerPointerDownPosRef: C } = o;
    be((E) => {
      if (!r.value)
        return;
      let I = { x: 0, y: 0 };
      const M = (N) => {
        var S, V;
        I = {
          x: Math.abs(
            Math.round(N.pageX) - (((S = C.value) == null ? void 0 : S.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(N.pageY) - (((V = C.value) == null ? void 0 : V.y) ?? 0)
          )
        };
      }, W = (N) => {
        var S;
        N.pointerType !== "touch" && (I.x <= 10 && I.y <= 10 ? N.preventDefault() : (S = r.value) != null && S.contains(N.target) || x(!1), document.removeEventListener("pointermove", M), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", M), document.addEventListener("pointerup", W, {
        capture: !0,
        once: !0
      })), E(() => {
        document.removeEventListener("pointermove", M), document.removeEventListener("pointerup", W, {
          capture: !0
        });
      });
    });
    function D(E) {
      const I = E.ctrlKey || E.altKey || E.metaKey;
      if (E.key === "Tab" && E.preventDefault(), !I && E.key.length === 1 && u(E.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(E.key)) {
        let M = i.value;
        if (["ArrowUp", "End"].includes(E.key) && (M = M.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(E.key)) {
          const W = E.target, N = M.indexOf(W);
          M = M.slice(N + 1);
        }
        setTimeout(() => Eo(M)), E.preventDefault();
      }
    }
    const k = $(() => a.position === "popper" ? a : {}), O = re(k.value);
    return Om({
      content: r,
      viewport: c,
      onViewportChange: (E) => {
        c.value = E;
      },
      itemRefCallback: (E, I, M) => {
        var W, N;
        const S = !w.value && !M;
        (((W = o.modelValue) == null ? void 0 : W.value) !== void 0 && ((N = o.modelValue) == null ? void 0 : N.value) === I || S) && (p.value = E, S && (w.value = !0));
      },
      selectedItem: p,
      selectedItemText: _,
      onItemLeave: () => {
        var E;
        (E = r.value) == null || E.focus();
      },
      itemTextRefCallback: (E, I, M) => {
        var W, N;
        const S = !w.value && !M;
        (((W = o.modelValue) == null ? void 0 : W.value) !== void 0 && ((N = o.modelValue) == null ? void 0 : N.value) === I || S) && (_.value = E);
      },
      focusSelectedItem: g,
      position: a.position,
      isPositioned: m,
      searchRef: d
    }), (E, I) => (v(), h(l(Nn), {
      "as-child": "",
      onMountAutoFocus: I[6] || (I[6] = ke(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: I[7] || (I[7] = (M) => {
        var W;
        n("closeAutoFocus", M), !M.defaultPrevented && ((W = l(o).triggerElement.value) == null || W.focus({ preventScroll: !0 }), M.preventDefault());
      })
    }, {
      default: f(() => [
        B(l(ma), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: I[2] || (I[2] = ke(() => {
          }, ["prevent"])),
          onDismiss: I[3] || (I[3] = (M) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: I[4] || (I[4] = (M) => n("escapeKeyDown", M)),
          onPointerDownOutside: I[5] || (I[5] = (M) => n("pointerDownOutside", M))
        }, {
          default: f(() => [
            (v(), h(Be(
              E.position === "popper" ? Em : Pm
            ), P({ ...E.$attrs, ...l(O) }, {
              id: l(o).contentId,
              ref: (M) => {
                r.value = l(Le)(M);
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
              onContextmenu: I[0] || (I[0] = ke(() => {
              }, ["prevent"])),
              onPlaced: I[1] || (I[1] = (M) => m.value = !0),
              onKeydown: D
            }), {
              default: f(() => [
                b(E.$slots, "default")
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
}), Mm = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return vi(e.context), (t, a) => b(t.$slots, "default");
  }
}), Tm = { key: 1 }, Im = /* @__PURE__ */ y({
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
    const a = e, n = ne(a, t), o = Kt(), s = A();
    ce(() => {
      s.value = new DocumentFragment();
    });
    const r = A(), i = $(() => a.forceMount || o.open.value);
    return (d, u) => {
      var c;
      return i.value ? (v(), h(l(Te), {
        key: 0,
        ref_key: "presenceRef",
        ref: r,
        present: !0
      }, {
        default: f(() => [
          B(Am, H(j({ ...l(n), ...d.$attrs })), {
            default: f(() => [
              b(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = r.value) != null && c.present) && s.value ? (v(), F("div", Tm, [
        (v(), h(On, { to: s.value }, [
          B(Mm, { context: l(o) }, {
            default: f(() => [
              b(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : ee("", !0);
    };
  }
}), Vm = /* @__PURE__ */ y({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), P({ "aria-hidden": "true" }, t), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [hi, Rm] = le("SelectItem"), Fm = /* @__PURE__ */ y({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: a } = me(t), n = Kt(), o = jt(wa), { forwardRef: s, currentElement: r } = z(), i = $(() => {
      var g;
      return ((g = n.modelValue) == null ? void 0 : g.value) === t.value;
    }), d = A(!1), u = A(t.textValue ?? ""), c = we(void 0, "radix-vue-select-item-text");
    async function p(g) {
      await se(), !(g != null && g.defaultPrevented) && (a.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function _(g) {
      var x;
      await se(), !g.defaultPrevented && (a.value ? (x = o.onItemLeave) == null || x.call(o) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(g) {
      var x;
      await se(), !g.defaultPrevented && g.currentTarget === xe() && ((x = o.onItemLeave) == null || x.call(o));
    }
    async function w(g) {
      var x;
      await se(), !(g.defaultPrevented || ((x = o.searchRef) == null ? void 0 : x.value) !== "" && g.key === " ") && (km.includes(g.key) && p(), g.key === " " && g.preventDefault());
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
    }), Rm({
      value: t.value,
      disabled: a,
      textId: c,
      isSelected: i,
      onItemTextChange: (g) => {
        u.value = ((u.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, x) => (v(), h(l(L), {
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
      as: g.as,
      "as-child": g.asChild,
      onFocus: x[0] || (x[0] = (C) => d.value = !0),
      onBlur: x[1] || (x[1] = (C) => d.value = !1),
      onPointerup: p,
      onPointerdown: x[2] || (x[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: x[3] || (x[3] = ke(() => {
      }, ["prevent", "stop"])),
      onPointermove: _,
      onPointerleave: m,
      onKeydown: w
    }, {
      default: f(() => [
        b(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Lm = /* @__PURE__ */ y({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = hi();
    return (n, o) => l(a).isSelected.value ? (v(), h(l(L), P({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : ee("", !0);
  }
}), [Nm, zm] = le("SelectGroup"), Um = /* @__PURE__ */ y({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = we(void 0, "radix-vue-select-group");
    return zm({ id: a }), (n, o) => (v(), h(l(L), P({ role: "group" }, t, { "aria-labelledby": l(a) }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Wm = /* @__PURE__ */ y({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = Nm({ id: "" });
    return (n, o) => (v(), h(l(L), P(t, {
      id: l(a).id
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), gi = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = Kt(), n = jt(wa), o = wm(), s = hi(), { forwardRef: r, currentElement: i } = z(), d = $(() => {
      var u;
      return et("option", {
        key: s.value,
        value: s.value,
        disabled: s.disabled.value,
        textContent: (u = i.value) == null ? void 0 : u.textContent
      });
    });
    return ce(() => {
      i.value && (s.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        s.value,
        s.disabled.value
      ), o.onNativeOptionAdd(d.value));
    }), Wo(() => {
      o.onNativeOptionRemove(d.value);
    }), (u, c) => (v(), F(Q, null, [
      B(l(L), P({
        id: l(s).textId,
        ref: l(r)
      }, { ...t, ...u.$attrs }, { "data-item-text": "" }), {
        default: f(() => [
          b(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      l(s).isSelected.value && l(a).valueElement.value && !l(a).valueElementHasChildren.value ? (v(), h(On, {
        key: 0,
        to: l(a).valueElement.value
      }, [
        b(u.$slots, "default")
      ], 8, ["to"])) : ee("", !0)
    ], 64));
  }
}), Hm = /* @__PURE__ */ y({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: a } = me(t), n = Uf(a), o = jt(wa), s = o.position === "item-aligned" ? Ol() : void 0, { forwardRef: r, currentElement: i } = z();
    ce(() => {
      o == null || o.onViewportChange(i.value);
    });
    const d = A(0);
    function u(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: _, contentWrapper: m } = s ?? {};
      if (_ != null && _.value && m != null && m.value) {
        const w = Math.abs(d.value - p.scrollTop);
        if (w > 0) {
          const g = window.innerHeight - We * 2, x = Number.parseFloat(
            m.value.style.minHeight
          ), C = Number.parseFloat(m.value.style.height), D = Math.max(x, C);
          if (D < g) {
            const k = D + w, O = Math.min(g, k), E = k - O;
            m.value.style.height = `${O}px`, m.value.style.bottom === "0px" && (p.scrollTop = E > 0 ? E : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = p.scrollTop;
    }
    return (c, p) => (v(), F(Q, null, [
      B(l(L), P({
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
          overflow: "hidden auto"
        },
        onScroll: u
      }), {
        default: f(() => [
          b(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      B(l(L), {
        as: "style",
        nonce: l(n)
      }, {
        default: f(() => [
          J(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), yi = /* @__PURE__ */ y({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const a = t, { injectCollection: n } = fa(), o = n(), s = jt(wa), r = A(null);
    function i() {
      r.value !== null && (window.clearInterval(r.value), r.value = null);
    }
    be(() => {
      const c = o.value.find(
        (p) => p === xe()
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
    return Wo(() => i()), (c, p) => {
      var _;
      return v(), h(l(L), P({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (_ = c.$parent) == null ? void 0 : _.$props, {
        onPointerdown: d,
        onPointermove: u,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: f(() => [
          b(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Km = /* @__PURE__ */ y({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = jt(wa), a = t.position === "item-aligned" ? Ol() : void 0, { forwardRef: n, currentElement: o } = z(), s = A(!1);
    return be((r) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let u = function() {
          s.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        u(), c.addEventListener("scroll", u), r(() => c.removeEventListener("scroll", u));
      }
    }), ae(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), h(yi, {
      key: 0,
      ref: l(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: u } = l(t);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop - u.value.offsetHeight);
      })
    }, {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : ee("", !0);
  }
}), jm = /* @__PURE__ */ y({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = jt(wa), a = t.position === "item-aligned" ? Ol() : void 0, { forwardRef: n, currentElement: o } = z(), s = A(!1);
    return be((r) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let u = function() {
          const p = c.scrollHeight - c.clientHeight;
          s.value = Math.ceil(c.scrollTop) < p;
        };
        const c = t.viewport.value;
        u(), c.addEventListener("scroll", u), r(() => c.removeEventListener("scroll", u));
      }
    }), ae(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), h(yi, {
      key: 0,
      ref: l(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: u } = l(t);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop + u.value.offsetHeight);
      })
    }, {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : ee("", !0);
  }
}), Gm = /* @__PURE__ */ y({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: a } = z(), n = Kt(), o = Ls();
    return ud(() => {
      var s;
      const r = !!Rn((s = o == null ? void 0 : o.default) == null ? void 0 : s.call(o)).length;
      n.onValueElementHasChildrenChange(r);
    }), ce(() => {
      n.valueElement = a;
    }), (s, r) => (v(), h(l(L), {
      ref: l(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: f(() => {
        var i;
        return [
          l(mi)((i = l(n).modelValue) == null ? void 0 : i.value) ? (v(), F(Q, { key: 0 }, [
            J(X(s.placeholder), 1)
          ], 64)) : b(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), qm = /* @__PURE__ */ y({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, a) => (v(), h(l(L), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: f(() => [
        b(t.$slots, "default", {}, () => [
          J("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Ym = /* @__PURE__ */ y({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = ["horizontal", "vertical"];
    function n(i) {
      return a.includes(i);
    }
    const o = $(
      () => n(t.orientation) ? t.orientation : "horizontal"
    ), s = $(
      () => o.value === "vertical" ? t.orientation : void 0
    ), r = $(
      () => t.decorative ? { role: "none" } : { "aria-orientation": s.value, role: "separator" }
    );
    return (i, d) => (v(), h(l(L), P({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": o.value
    }, r.value), {
      default: f(() => [
        b(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), Jm = /* @__PURE__ */ y({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(Ym, H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Qm(e = [], t, a) {
  const n = [...e];
  return n[a] = t, n.sort((o, s) => o - s);
}
function bi(e, t, a) {
  const n = 100 / (a - t) * (e - t);
  return kn(n, 0, 100);
}
function Xm(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Zm(e, t) {
  if (e.length === 1)
    return 0;
  const a = e.map((o) => Math.abs(o - t)), n = Math.min(...a);
  return a.indexOf(n);
}
function eh(e, t, a) {
  const n = e / 2, o = Al([0, 50], [0, n]);
  return (n - o(t) * a) * a;
}
function th(e) {
  return e.slice(0, -1).map((t, a) => e[a + 1] - t);
}
function ah(e, t) {
  if (t > 0) {
    const a = th(e);
    return Math.min(...a) >= t;
  }
  return !0;
}
function Al(e, t) {
  return (a) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (a - e[0]);
  };
}
function nh(e) {
  return (String(e).split(".")[1] || "").length;
}
function oh(e, t) {
  const a = 10 ** t;
  return Math.round(e * a) / a;
}
const _i = ["PageUp", "PageDown"], wi = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], xi = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [$i, Ci] = le(["SliderVertical", "SliderHorizontal"]), ki = /* @__PURE__ */ y({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Wn();
    return (s, r) => (v(), h(l(L), P({ "data-slider-impl": "" }, a, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : l(_i).concat(l(wi)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
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
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lh = /* @__PURE__ */ y({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, { max: o, min: s, dir: r, inverted: i } = me(a), { forwardRef: d, currentElement: u } = z(), c = A(), p = $(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function _(m) {
      const w = c.value || u.value.getBoundingClientRect(), g = [0, w.width], x = p.value ? [s.value, o.value] : [o.value, s.value], C = Al(g, x);
      return c.value = w, C(m - w.left);
    }
    return Ci({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, w) => (v(), h(ki, {
      ref: l(d),
      dir: l(r),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: w[0] || (w[0] = (g) => {
        const x = _(g.clientX);
        n("slideStart", x);
      }),
      onSlideMove: w[1] || (w[1] = (g) => {
        const x = _(g.clientX);
        n("slideMove", x);
      }),
      onSlideEnd: w[2] || (w[2] = () => {
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: w[3] || (w[3] = (g) => {
        const x = p.value ? "from-left" : "from-right", C = l(xi)[x].includes(g.key);
        n("stepKeyDown", g, C ? -1 : 1);
      }),
      onEndKeyDown: w[4] || (w[4] = (g) => n("endKeyDown", g)),
      onHomeKeyDown: w[5] || (w[5] = (g) => n("homeKeyDown", g))
    }, {
      default: f(() => [
        b(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), sh = /* @__PURE__ */ y({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, { max: o, min: s, inverted: r } = me(a), { forwardRef: i, currentElement: d } = z(), u = A(), c = $(() => !r.value);
    function p(_) {
      const m = u.value || d.value.getBoundingClientRect(), w = [0, m.height], g = c.value ? [o.value, s.value] : [s.value, o.value], x = Al(w, g);
      return u.value = m, x(_ - m.top);
    }
    return Ci({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (_, m) => (v(), h(ki, {
      ref: l(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: m[0] || (m[0] = (w) => {
        const g = p(w.clientY);
        n("slideStart", g);
      }),
      onSlideMove: m[1] || (m[1] = (w) => {
        const g = p(w.clientY);
        n("slideMove", g);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        u.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (w) => {
        const g = c.value ? "from-bottom" : "from-top", x = l(xi)[g].includes(w.key);
        n("stepKeyDown", w, x ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (w) => n("endKeyDown", w)),
      onHomeKeyDown: m[5] || (m[5] = (w) => n("homeKeyDown", w))
    }, {
      default: f(() => [
        b(_.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), rh = ["value", "name", "disabled", "step"], [Wn, ih] = le("SliderRoot"), dh = /* @__PURE__ */ y({
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
    const a = e, n = t, { min: o, max: s, step: r, minStepsBetweenThumbs: i, orientation: d, disabled: u, dir: c } = me(a), p = lt(c), { forwardRef: _, currentElement: m } = z(), w = Ha(m);
    kl();
    const g = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), x = A(0), C = A(g.value);
    function D(M) {
      const W = Zm(g.value, M);
      E(M, W);
    }
    function k(M) {
      E(M, x.value);
    }
    function O() {
      const M = C.value[x.value];
      g.value[x.value] !== M && n("valueCommit", bd(g.value));
    }
    function E(M, W, { commit: N } = { commit: !1 }) {
      var S;
      const V = nh(r.value), R = oh(Math.round((M - o.value) / r.value) * r.value + o.value, V), q = kn(R, o.value, s.value), U = Qm(g.value, q, W);
      if (ah(U, i.value * r.value)) {
        x.value = U.indexOf(q);
        const Y = String(U) !== String(g.value);
        Y && N && n("valueCommit", U), Y && ((S = I.value[x.value]) == null || S.focus(), g.value = U);
      }
    }
    const I = A([]);
    return ih({
      modelValue: g,
      valueIndexToChangeRef: x,
      thumbElements: I,
      orientation: d,
      min: o,
      max: s,
      disabled: u
    }), (M, W) => (v(), F(Q, null, [
      B(l(Bl), null, {
        default: f(() => [
          (v(), h(Be(l(d) === "horizontal" ? lh : sh), P(M.$attrs, {
            ref: l(_),
            "as-child": M.asChild,
            as: M.as,
            min: l(o),
            max: l(s),
            dir: l(p),
            inverted: M.inverted,
            "aria-disabled": l(u),
            "data-disabled": l(u) ? "" : void 0,
            onPointerdown: W[0] || (W[0] = () => {
              l(u) || (C.value = l(g));
            }),
            onSlideStart: W[1] || (W[1] = (N) => !l(u) && D(N)),
            onSlideMove: W[2] || (W[2] = (N) => !l(u) && k(N)),
            onSlideEnd: W[3] || (W[3] = (N) => !l(u) && O()),
            onHomeKeyDown: W[4] || (W[4] = (N) => !l(u) && E(l(o), 0, { commit: !0 })),
            onEndKeyDown: W[5] || (W[5] = (N) => !l(u) && E(l(s), l(g).length - 1, { commit: !0 })),
            onStepKeyDown: W[6] || (W[6] = (N, S) => {
              if (!l(u)) {
                const V = l(_i).includes(N.key) || N.shiftKey && l(wi).includes(N.key) ? 10 : 1, R = x.value, q = l(g)[R], U = l(r) * V * S;
                E(q + U, R, { commit: !0 });
              }
            })
          }), {
            default: f(() => [
              b(M.$slots, "default", { modelValue: l(g) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      l(w) ? (v(!0), F(Q, { key: 0 }, fe(l(g), (N, S) => (v(), F("input", {
        key: S,
        value: N,
        type: "number",
        style: { display: "none" },
        name: M.name ? M.name + (l(g).length > 1 ? "[]" : "") : void 0,
        disabled: l(u),
        step: l(r)
      }, null, 8, rh))), 128)) : ee("", !0)
    ], 64));
  }
}), uh = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Wn(), n = $i(), { forwardRef: o, currentElement: s } = z(), r = $(() => {
      var m, w;
      return (w = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : w[t.index];
    }), i = $(() => r.value === void 0 ? 0 : bi(r.value, a.min.value ?? 0, a.max.value ?? 100)), d = $(() => {
      var m, w;
      return Xm(t.index, ((w = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : w.length) ?? 0);
    }), u = Lr(s), c = $(() => u[n.size].value), p = $(() => c.value ? eh(c.value, i.value, n.direction) : 0), _ = fl();
    return ce(() => {
      a.thumbElements.value.push(s.value);
    }), At(() => {
      const m = a.thumbElements.value.findIndex((w) => w === s.value) ?? -1;
      a.thumbElements.value.splice(m, 1);
    }), (m, w) => (v(), h(l(Un), null, {
      default: f(() => [
        B(l(L), P(m.$attrs, {
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
            display: !l(_) && r.value === void 0 ? "none" : void 0
          },
          onFocus: w[0] || (w[0] = () => {
            l(a).valueIndexToChangeRef.value = m.index;
          })
        }), {
          default: f(() => [
            b(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), ch = /* @__PURE__ */ y({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: a } = Dl(), { forwardRef: n, currentElement: o } = z(), s = $(() => o.value ? a().findIndex((r) => r.ref === o.value) : -1);
    return (r, i) => (v(), h(uh, P({ ref: l(n) }, t, { index: s.value }), {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), ph = /* @__PURE__ */ y({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Wn();
    return z(), (a, n) => (v(), h(l(L), {
      "as-child": a.asChild,
      as: a.as,
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), fh = /* @__PURE__ */ y({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Wn(), a = $i();
    z();
    const n = $(() => {
      var r, i;
      return (i = (r = t.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (d) => bi(d, t.min.value, t.max.value)
      );
    }), o = $(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = $(() => 100 - Math.max(...n.value));
    return (r, i) => (v(), h(l(L), {
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: Ot({
        [l(a).startEdge]: `${o.value}%`,
        [l(a).endEdge]: `${s.value}%`
      })
    }, {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function vh() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
vh();
const mh = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [hh, gh] = le("SwitchRoot"), yh = /* @__PURE__ */ y({
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
    const { forwardRef: i, currentElement: d } = z(), u = Ha(d), c = $(() => {
      var p;
      return a.id && d.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return gh({
      checked: s,
      toggleCheck: r,
      disabled: o
    }), (p, _) => (v(), F(Q, null, [
      B(l(L), P(p.$attrs, {
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
        onKeydown: He(ke(r, ["prevent"]), ["enter"])
      }), {
        default: f(() => [
          b(p.$slots, "default", { checked: l(s) })
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
      }, null, 8, mh)) : ee("", !0)
    ], 64));
  }
}), bh = /* @__PURE__ */ y({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = hh();
    return z(), (a, n) => {
      var o;
      return v(), h(l(L), {
        "data-state": (o = l(t).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": l(t).disabled.value ? "" : void 0,
        "as-child": a.asChild,
        as: a.as
      }, {
        default: f(() => [
          b(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [Ml, _h] = le("TabsRoot"), wh = /* @__PURE__ */ y({
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
    const a = e, n = t, { orientation: o, dir: s } = me(a), r = lt(s);
    z();
    const i = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), d = A();
    return _h({
      modelValue: i,
      changeModelValue: (u) => {
        i.value = u;
      },
      orientation: o,
      dir: r,
      activationMode: a.activationMode,
      baseId: we(void 0, "radix-vue-tabs"),
      tabsList: d
    }), (u, c) => (v(), h(l(L), {
      dir: l(r),
      "data-orientation": l(o),
      "as-child": u.asChild,
      as: u.as
    }, {
      default: f(() => [
        b(u.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), xh = /* @__PURE__ */ y({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: a } = me(t), { forwardRef: n, currentElement: o } = z(), s = Ml();
    return s.tabsList = o, (r, i) => (v(), h(l(li), {
      "as-child": "",
      orientation: l(s).orientation.value,
      dir: l(s).dir.value,
      loop: l(a)
    }, {
      default: f(() => [
        B(l(L), {
          ref: l(n),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": l(s).orientation.value
        }, {
          default: f(() => [
            b(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function Bi(e, t) {
  return `${e}-trigger-${t}`;
}
function Di(e, t) {
  return `${e}-content-${t}`;
}
const $h = /* @__PURE__ */ y({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a } = z(), n = Ml(), o = $(() => Bi(n.baseId, t.value)), s = $(() => Di(n.baseId, t.value)), r = $(() => t.value === n.modelValue.value), i = A(r.value);
    return ce(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (d, u) => (v(), h(l(Te), {
      present: r.value,
      "force-mount": ""
    }, {
      default: f(({ present: c }) => [
        B(l(L), {
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
          style: Ot({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: f(() => [
            d.forceMount || r.value ? b(d.$slots, "default", { key: 0 }) : ee("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ch = /* @__PURE__ */ y({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: a } = z(), n = Ml(), o = $(() => Bi(n.baseId, t.value)), s = $(() => Di(n.baseId, t.value)), r = $(() => t.value === n.modelValue.value);
    return (i, d) => (v(), h(l(lv), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: f(() => [
        B(l(L), {
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
          onMousedown: d[0] || (d[0] = ke((u) => {
            !i.disabled && u.ctrlKey === !1 ? l(n).changeModelValue(i.value) : u.preventDefault();
          }, ["left"])),
          onKeydown: d[1] || (d[1] = He((u) => l(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: d[2] || (d[2] = () => {
            const u = l(n).activationMode !== "manual";
            !r.value && !i.disabled && u && l(n).changeModelValue(i.value);
          })
        }, {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [Hn, kh] = le("ToastProvider"), Bh = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: a, duration: n, swipeDirection: o, swipeThreshold: s } = me(t), r = A(), i = A(0), d = A(!1), u = A(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return kh({
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
    }), (c, p) => b(c.$slots, "default");
  }
}), Dh = "toast.swipeStart", Sh = "toast.swipeMove", Ph = "toast.swipeCancel", Eh = "toast.swipeEnd", Ao = "toast.viewportPause", Mo = "toast.viewportResume";
function ln(e, t, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function xs(e, t, a = 0) {
  const n = Math.abs(e.x), o = Math.abs(e.y), s = n > o;
  return t === "left" || t === "right" ? s && n > a : !s && o > a;
}
function Oh(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Si(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && t.push(a.textContent), Oh(a)) {
      const n = a.ariaHidden || a.hidden || a.style.display === "none", o = a.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const s = a.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Si(a));
    }
  }), t;
}
const Ah = /* @__PURE__ */ y({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Hn(), a = Lc(1e3), n = A(!1);
    return Mr(() => {
      n.value = !0;
    }), (o, s) => l(a) || n.value ? (v(), h(l(qa), { key: 0 }, {
      default: f(() => [
        J(X(l(t).label.value) + " ", 1),
        b(o.$slots, "default")
      ]),
      _: 3
    })) : ee("", !0);
  }
}), [Mh, Th] = le("ToastRoot"), Ih = /* @__PURE__ */ y({
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
    const a = e, n = t, { forwardRef: o, currentElement: s } = z(), r = Hn(), i = A(null), d = A(null), u = $(
      () => typeof a.duration == "number" ? a.duration : r.duration.value
    ), c = A(0), p = A(u.value), _ = A(0), m = A(u.value), w = Mr(() => {
      const D = (/* @__PURE__ */ new Date()).getTime() - c.value;
      m.value = Math.max(p.value - D, 0);
    }, { fpsLimit: 60 });
    function g(D) {
      D <= 0 || D === Number.POSITIVE_INFINITY || ot && (window.clearTimeout(_.value), c.value = (/* @__PURE__ */ new Date()).getTime(), _.value = window.setTimeout(x, D));
    }
    function x() {
      var D, k;
      (D = s.value) != null && D.contains(xe()) && ((k = r.viewport.value) == null || k.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const C = $(() => s.value ? Si(s.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const D = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(D);
    }
    return be((D) => {
      const k = r.viewport.value;
      if (k) {
        const O = () => {
          g(p.value), w.resume(), n("resume");
        }, E = () => {
          const I = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - I, window.clearTimeout(_.value), w.pause(), n("pause");
        };
        return k.addEventListener(Ao, E), k.addEventListener(Mo, O), () => {
          k.removeEventListener(Ao, E), k.removeEventListener(Mo, O);
        };
      }
    }), ae(() => [a.open, u.value], () => {
      p.value = u.value, a.open && !r.isClosePausedRef.value && g(u.value);
    }, { immediate: !0 }), pl("Escape", (D) => {
      n("escapeKeyDown", D), D.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, x());
    }), ce(() => {
      r.onToastAdd();
    }), At(() => {
      r.onToastRemove();
    }), Th({ onClose: x }), (D, k) => (v(), F(Q, null, [
      C.value ? (v(), h(Ah, {
        key: 0,
        role: "alert",
        "aria-live": D.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: f(() => [
          J(X(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : ee("", !0),
      l(r).viewport.value ? (v(), h(On, {
        key: 1,
        to: l(r).viewport.value
      }, [
        B(l(L), P({
          ref: l(o),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, D.$attrs, {
          as: D.as,
          "as-child": D.asChild,
          "data-state": D.open ? "open" : "closed",
          "data-swipe-direction": l(r).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: k[0] || (k[0] = ke((O) => {
            i.value = { x: O.clientX, y: O.clientY };
          }, ["left"])),
          onPointermove: k[1] || (k[1] = (O) => {
            if (!i.value) return;
            const E = O.clientX - i.value.x, I = O.clientY - i.value.y, M = !!d.value, W = ["left", "right"].includes(l(r).swipeDirection.value), N = ["left", "up"].includes(l(r).swipeDirection.value) ? Math.min : Math.max, S = W ? N(0, E) : 0, V = W ? 0 : N(0, I), R = O.pointerType === "touch" ? 10 : 2, q = { x: S, y: V }, U = { originalEvent: O, delta: q };
            M ? (d.value = q, l(ln)(l(Sh), (Y) => n("swipeMove", Y), U)) : l(xs)(q, l(r).swipeDirection.value, R) ? (d.value = q, l(ln)(l(Dh), (Y) => n("swipeStart", Y), U), O.target.setPointerCapture(O.pointerId)) : (Math.abs(E) > R || Math.abs(I) > R) && (i.value = null);
          }),
          onPointerup: k[2] || (k[2] = (O) => {
            const E = d.value, I = O.target;
            if (I.hasPointerCapture(O.pointerId) && I.releasePointerCapture(O.pointerId), d.value = null, i.value = null, E) {
              const M = O.currentTarget, W = { originalEvent: O, delta: E };
              l(xs)(E, l(r).swipeDirection.value, l(r).swipeThreshold.value) ? l(ln)(l(Eh), (N) => n("swipeEnd", N), W) : l(ln)(l(Ph), (N) => n("swipeCancel", N), W), M == null || M.addEventListener("click", (N) => N.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: f(() => [
            b(D.$slots, "default", {
              remaining: m.value,
              duration: u.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : ee("", !0)
    ], 64));
  }
}), Vh = /* @__PURE__ */ y({
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
    const a = e, n = t, { forwardRef: o } = z(), s = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    return (r, i) => (v(), h(l(Te), {
      present: r.forceMount || l(s)
    }, {
      default: f(() => [
        B(Ih, P({
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
            b(r.$slots, "default", {
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
}), Pi = /* @__PURE__ */ y({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, a) => (v(), h(l(L), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: f(() => [
        b(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), Ei = /* @__PURE__ */ y({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Mh(), { forwardRef: n } = z();
    return (o, s) => (v(), h(Pi, { "as-child": "" }, {
      default: f(() => [
        B(l(L), P(t, {
          ref: l(n),
          type: o.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (r) => l(a).onClose())
        }), {
          default: f(() => [
            b(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), Rh = /* @__PURE__ */ y({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = z();
    return (a, n) => a.altText ? (v(), h(Pi, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: f(() => [
        B(Ei, {
          ref: l(t),
          as: a.as,
          "as-child": a.asChild
        }, {
          default: f(() => [
            b(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : ee("", !0);
  }
}), $s = /* @__PURE__ */ y({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const a = t, n = Hn();
    return (o, s) => (v(), h(l(qa), {
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
        b(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Fh = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: a, label: n } = me(t), { forwardRef: o, currentElement: s } = z(), { createCollection: r } = fa(), i = r(s), d = Hn(), u = $(() => d.toastCount.value > 0), c = A(), p = A(), _ = $(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    pl(a.value, () => {
      s.value.focus();
    }), ce(() => {
      d.onViewportChange(s.value);
    }), be((w) => {
      const g = s.value;
      if (u.value && g) {
        const x = () => {
          if (!d.isClosePausedRef.value) {
            const E = new CustomEvent(Ao);
            g.dispatchEvent(E), d.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (d.isClosePausedRef.value) {
            const E = new CustomEvent(Mo);
            g.dispatchEvent(E), d.isClosePausedRef.value = !1;
          }
        }, D = (E) => {
          !g.contains(E.relatedTarget) && C();
        }, k = () => {
          g.contains(xe()) || C();
        }, O = (E) => {
          var I, M, W;
          const N = E.altKey || E.ctrlKey || E.metaKey;
          if (E.key === "Tab" && !N) {
            const S = xe(), V = E.shiftKey;
            if (E.target === g && V) {
              (I = c.value) == null || I.focus();
              return;
            }
            const R = m({ tabbingDirection: V ? "backwards" : "forwards" }), q = R.findIndex((U) => U === S);
            mn(R.slice(q + 1)) ? E.preventDefault() : V ? (M = c.value) == null || M.focus() : (W = p.value) == null || W.focus();
          }
        };
        g.addEventListener("focusin", x), g.addEventListener("focusout", D), g.addEventListener("pointermove", x), g.addEventListener("pointerleave", k), g.addEventListener("keydown", O), window.addEventListener("blur", x), window.addEventListener("focus", C), w(() => {
          g.removeEventListener("focusin", x), g.removeEventListener("focusout", D), g.removeEventListener("pointermove", x), g.removeEventListener("pointerleave", k), g.removeEventListener("keydown", O), window.removeEventListener("blur", x), window.removeEventListener("focus", C);
        });
      }
    });
    function m({ tabbingDirection: w }) {
      const g = i.value.map((x) => {
        const C = [x, ...bl(x)];
        return w === "forwards" ? C : C.reverse();
      });
      return (w === "forwards" ? g.reverse() : g).flat();
    }
    return (w, g) => (v(), h(l(Tp), {
      role: "region",
      "aria-label": typeof l(n) == "string" ? l(n).replace("{hotkey}", _.value) : l(n)(_.value),
      tabindex: "-1",
      style: Ot({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: u.value ? void 0 : "none"
      })
    }, {
      default: f(() => [
        u.value ? (v(), h($s, {
          key: 0,
          ref: (x) => {
            c.value = l(Le)(x);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const x = m({
              tabbingDirection: "forwards"
            });
            l(mn)(x);
          })
        }, null, 512)) : ee("", !0),
        B(l(L), P({
          ref: l(o),
          tabindex: "-1",
          as: w.as,
          "as-child": w.asChild
        }, w.$attrs), {
          default: f(() => [
            b(w.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        u.value ? (v(), h($s, {
          key: 1,
          ref: (x) => {
            p.value = l(Le)(x);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const x = m({
              tabbingDirection: "backwards"
            });
            l(mn)(x);
          })
        }, null, 512)) : ee("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Lh = /* @__PURE__ */ y({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), h(l(L), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nh = /* @__PURE__ */ y({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), h(l(L), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oi = "tooltip.open", [Tl, zh] = le("TooltipProvider"), Ai = /* @__PURE__ */ y({
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
    const t = e, { delayDuration: a, skipDelayDuration: n, disableHoverableContent: o, disableClosingTrigger: s, ignoreNonKeyboardFocus: r, disabled: i } = me(t);
    z();
    const d = A(!0), u = A(!1), { start: c, stop: p } = cl(() => {
      d.value = !0;
    }, n, { immediate: !1 });
    return zh({
      isOpenDelayed: d,
      delayDuration: a,
      onOpen() {
        p(), d.value = !1;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: u,
      disableHoverableContent: o,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: r
    }), (_, m) => b(_.$slots, "default");
  }
}), [Kn, Uh] = le("TooltipRoot"), Wh = /* @__PURE__ */ y({
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
    z();
    const o = Tl(), s = $(() => a.disableHoverableContent ?? o.disableHoverableContent.value), r = $(() => a.disableClosingTrigger ?? o.disableClosingTrigger.value), i = $(() => a.disabled ?? o.disabled.value), d = $(() => a.delayDuration ?? o.delayDuration.value), u = $(() => a.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), c = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    ae(c, (k) => {
      o.onClose && (k ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Oi))) : o.onClose());
    });
    const p = A(!1), _ = A(), m = $(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: w, stop: g } = cl(() => {
      p.value = !0, c.value = !0;
    }, d, { immediate: !1 });
    function x() {
      g(), p.value = !1, c.value = !0;
    }
    function C() {
      g(), c.value = !1;
    }
    function D() {
      w();
    }
    return Uh({
      contentId: "",
      open: c,
      stateAttribute: m,
      trigger: _,
      onTriggerChange(k) {
        _.value = k;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? D() : x();
      },
      onTriggerLeave() {
        s.value ? C() : g();
      },
      onOpen: x,
      onClose: C,
      disableHoverableContent: s,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: u
    }), (k, O) => (v(), h(l(ga), null, {
      default: f(() => [
        b(k.$slots, "default", { open: l(c) })
      ]),
      _: 3
    }));
  }
}), Hh = /* @__PURE__ */ y({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Kn(), n = Tl();
    a.contentId || (a.contentId = we(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: s } = z(), r = A(!1), i = A(!1), d = $(() => a.disabled.value ? {} : {
      click: g,
      focus: m,
      pointermove: p,
      pointerleave: _,
      pointerdown: c,
      blur: w
    });
    ce(() => {
      a.onTriggerChange(s.value);
    });
    function u() {
      setTimeout(() => {
        r.value = !1;
      }, 1);
    }
    function c() {
      r.value = !0, document.addEventListener("pointerup", u, { once: !0 });
    }
    function p(x) {
      x.pointerType !== "touch" && !i.value && !n.isPointerInTransitRef.value && (a.onTriggerEnter(), i.value = !0);
    }
    function _() {
      a.onTriggerLeave(), i.value = !1;
    }
    function m(x) {
      var C, D;
      r.value || a.ignoreNonKeyboardFocus.value && !((D = (C = x.target).matches) != null && D.call(C, ":focus-visible")) || a.onOpen();
    }
    function w() {
      a.onClose();
    }
    function g() {
      a.disableClosingTrigger.value || a.onClose();
    }
    return (x, C) => (v(), h(l(zn), { "as-child": "" }, {
      default: f(() => [
        B(l(L), P({
          ref: l(o),
          "aria-describedby": l(a).open.value ? l(a).contentId : void 0,
          "data-state": l(a).stateAttribute.value,
          as: x.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, pd(d.value)), {
          default: f(() => [
            b(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Mi = /* @__PURE__ */ y({
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
    const a = e, n = t, o = Kn(), { forwardRef: s } = z(), r = Ls(), i = $(() => {
      var c;
      return (c = r.default) == null ? void 0 : c.call(r);
    }), d = $(() => {
      var c;
      if (a.ariaLabel)
        return a.ariaLabel;
      let p = "";
      function _(m) {
        typeof m.children == "string" && m.type !== zs ? p += m.children : Array.isArray(m.children) && m.children.forEach((w) => _(w));
      }
      return (c = i.value) == null || c.forEach((m) => _(m)), p;
    }), u = $(() => {
      const { ariaLabel: c, ...p } = a;
      return p;
    });
    return ce(() => {
      ia(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(o.trigger.value) && o.onClose();
      }), ia(window, Oi, o.onClose);
    }), (c, p) => (v(), h(l(ma), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (_) => n("escapeKeyDown", _)),
      onPointerDownOutside: p[1] || (p[1] = (_) => {
        var m;
        l(o).disableClosingTrigger.value && (m = l(o).trigger.value) != null && m.contains(_.target) && _.preventDefault(), n("pointerDownOutside", _);
      }),
      onFocusOutside: p[2] || (p[2] = ke(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (_) => l(o).onClose())
    }, {
      default: f(() => [
        B(l(da), P({
          ref: l(s),
          "data-state": l(o).stateAttribute.value
        }, { ...c.$attrs, ...u.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: f(() => [
            b(c.$slots, "default"),
            B(l(qa), {
              id: l(o).contentId,
              role: "tooltip"
            }, {
              default: f(() => [
                J(X(d.value), 1)
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
}), Kh = /* @__PURE__ */ y({
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
    const t = re(e), { forwardRef: a, currentElement: n } = z(), { trigger: o, onClose: s } = Kn(), r = Tl(), { isPointerInTransit: i, onPointerExit: d } = Xc(o, n);
    return r.isPointerInTransitRef = i, d(() => {
      s();
    }), (u, c) => (v(), h(Mi, P({ ref: l(a) }, l(t)), {
      default: f(() => [
        b(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jh = /* @__PURE__ */ y({
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
    const a = e, n = t, o = Kn(), s = ne(a, n), { forwardRef: r } = z();
    return (i, d) => (v(), h(l(Te), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        (v(), h(Be(l(o).disableHoverableContent.value ? Mi : Kh), P({ ref: l(r) }, l(s)), {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Gh = /* @__PURE__ */ y({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(ja), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), z0 = /* @__PURE__ */ y({
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
    const o = ne(e, t);
    return (s, r) => (v(), h(l($p), H(j(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Il = "-", qh = (e) => {
  const t = Jh(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (r) => {
      const i = r.split(Il);
      return i[0] === "" && i.length !== 1 && i.shift(), Ti(i, t) || Yh(r);
    },
    getConflictingClassGroupIds: (r, i) => {
      const d = a[r] || [];
      return i && n[r] ? [...d, ...n[r]] : d;
    }
  };
}, Ti = (e, t) => {
  var r;
  if (e.length === 0)
    return t.classGroupId;
  const a = e[0], n = t.nextPart.get(a), o = n ? Ti(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Il);
  return (r = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : r.classGroupId;
}, Cs = /^\[(.+)\]$/, Yh = (e) => {
  if (Cs.test(e)) {
    const t = Cs.exec(e)[1], a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Jh = (e) => {
  const {
    theme: t,
    prefix: a
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Xh(Object.entries(e.classGroups), a).forEach(([s, r]) => {
    To(r, n, s, t);
  }), n;
}, To = (e, t, a, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : ks(t, o);
      s.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (Qh(o)) {
        To(o(n), t, a, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([s, r]) => {
      To(r, ks(t, s), a, n);
    });
  });
}, ks = (e, t) => {
  let a = e;
  return t.split(Il).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Qh = (e) => e.isThemeGetter, Xh = (e, t) => t ? e.map(([a, n]) => {
  const o = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([r, i]) => [t + r, i])) : s);
  return [a, o];
}) : e, Zh = (e) => {
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
}, Ii = "!", eg = (e) => {
  const {
    separator: t,
    experimentalParseClassName: a
  } = e, n = t.length === 1, o = t[0], s = t.length, r = (i) => {
    const d = [];
    let u = 0, c = 0, p;
    for (let x = 0; x < i.length; x++) {
      let C = i[x];
      if (u === 0) {
        if (C === o && (n || i.slice(x, x + s) === t)) {
          d.push(i.slice(c, x)), c = x + s;
          continue;
        }
        if (C === "/") {
          p = x;
          continue;
        }
      }
      C === "[" ? u++ : C === "]" && u--;
    }
    const _ = d.length === 0 ? i : i.substring(c), m = _.startsWith(Ii), w = m ? _.substring(1) : _, g = p && p > c ? p - c : void 0;
    return {
      modifiers: d,
      hasImportantModifier: m,
      baseClassName: w,
      maybePostfixModifierPosition: g
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: r
  }) : r;
}, tg = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let a = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...a.sort(), n), a = []) : a.push(n);
  }), t.push(...a.sort()), t;
}, ag = (e) => ({
  cache: Zh(e.cacheSize),
  parseClassName: eg(e),
  ...qh(e)
}), ng = /\s+/, og = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, s = [], r = e.trim().split(ng);
  let i = "";
  for (let d = r.length - 1; d >= 0; d -= 1) {
    const u = r[d], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: _,
      maybePostfixModifierPosition: m
    } = a(u);
    let w = !!m, g = n(w ? _.substring(0, m) : _);
    if (!g) {
      if (!w) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = n(_), !g) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      w = !1;
    }
    const x = tg(c).join(":"), C = p ? x + Ii : x, D = C + g;
    if (s.includes(D))
      continue;
    s.push(D);
    const k = o(g, w);
    for (let O = 0; O < k.length; ++O) {
      const E = k[O];
      s.push(C + E);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function lg() {
  let e = 0, t, a, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (a = Vi(t)) && (n && (n += " "), n += a);
  return n;
}
const Vi = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Vi(e[n])) && (a && (a += " "), a += t);
  return a;
};
function sg(e, ...t) {
  let a, n, o, s = r;
  function r(d) {
    const u = t.reduce((c, p) => p(c), e());
    return a = ag(u), n = a.cache.get, o = a.cache.set, s = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = og(d, a);
    return o(d, c), c;
  }
  return function() {
    return s(lg.apply(null, arguments));
  };
}
const he = (e) => {
  const t = (a) => a[e] || [];
  return t.isThemeGetter = !0, t;
}, Ri = /^\[(?:([a-z-]+):)?(.+)\]$/i, rg = /^\d+\/\d+$/, ig = /* @__PURE__ */ new Set(["px", "full", "screen"]), dg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ug = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, cg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, pg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, it = (e) => aa(e) || ig.has(e) || rg.test(e), xt = (e) => xa(e, "length", wg), aa = (e) => !!e && !Number.isNaN(Number(e)), co = (e) => xa(e, "number", aa), Da = (e) => !!e && Number.isInteger(Number(e)), vg = (e) => e.endsWith("%") && aa(e.slice(0, -1)), oe = (e) => Ri.test(e), $t = (e) => dg.test(e), mg = /* @__PURE__ */ new Set(["length", "size", "percentage"]), hg = (e) => xa(e, mg, Fi), gg = (e) => xa(e, "position", Fi), yg = /* @__PURE__ */ new Set(["image", "url"]), bg = (e) => xa(e, yg, $g), _g = (e) => xa(e, "", xg), Sa = () => !0, xa = (e, t, a) => {
  const n = Ri.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : a(n[2]) : !1;
}, wg = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ug.test(e) && !cg.test(e)
), Fi = () => !1, xg = (e) => pg.test(e), $g = (e) => fg.test(e), Cg = () => {
  const e = he("colors"), t = he("spacing"), a = he("blur"), n = he("brightness"), o = he("borderColor"), s = he("borderRadius"), r = he("borderSpacing"), i = he("borderWidth"), d = he("contrast"), u = he("grayscale"), c = he("hueRotate"), p = he("invert"), _ = he("gap"), m = he("gradientColorStops"), w = he("gradientColorStopPositions"), g = he("inset"), x = he("margin"), C = he("opacity"), D = he("padding"), k = he("saturate"), O = he("scale"), E = he("sepia"), I = he("skew"), M = he("space"), W = he("translate"), N = () => ["auto", "contain", "none"], S = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", oe, t], R = () => [oe, t], q = () => ["", it, xt], U = () => ["auto", aa, oe], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], te = () => ["solid", "dashed", "dotted", "double", "none"], ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ye = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", oe], Z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], de = () => [aa, oe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Sa],
      spacing: [it, xt],
      blur: ["none", "", $t, oe],
      brightness: de(),
      borderColor: [e],
      borderRadius: ["none", "", "full", $t, oe],
      borderSpacing: R(),
      borderWidth: q(),
      contrast: de(),
      grayscale: G(),
      hueRotate: de(),
      invert: G(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [vg, xt],
      inset: V(),
      margin: V(),
      opacity: de(),
      padding: R(),
      saturate: de(),
      scale: de(),
      sepia: G(),
      skew: de(),
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
        aspect: ["auto", "square", "video", oe]
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
        columns: [$t]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Z()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Z()
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
        object: [...Y(), oe]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
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
        z: ["auto", Da, oe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: V()
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
        flex: ["1", "auto", "initial", "none", oe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: G()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: G()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Da, oe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Sa]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Da, oe]
        }, oe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": U()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": U()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Sa]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Da, oe]
        }, oe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": U()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": U()
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
        "auto-cols": ["auto", "min", "max", "fr", oe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", oe]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [_]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [_]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [_]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...ye()]
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
        content: ["normal", ...ye(), "baseline"]
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
        "place-content": [...ye(), "baseline"]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", oe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [oe, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [oe, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [$t]
        }, $t]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [oe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [oe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [oe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [oe, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", $t, xt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", co]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Sa]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", oe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", aa, co]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", it, oe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", oe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", oe]
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
        decoration: [...te(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", it, xt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", it, oe]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", oe]
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
        content: ["none", oe]
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
        bg: [...Y(), gg]
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
        bg: ["auto", "cover", "contain", hg]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, bg]
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
        border: [...te(), "hidden"]
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
        divide: te()
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
        outline: ["", ...te()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [it, oe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [it, xt]
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
        ring: q()
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
        "ring-offset": [it, xt]
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
        shadow: ["", "inner", "none", $t, _g]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Sa]
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
        "mix-blend": [...ge(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ge()
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
        "drop-shadow": ["", "none", $t, oe]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", oe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: de()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", oe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: de()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", oe]
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
        rotate: [Da, oe]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", oe]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", oe]
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
        "will-change": ["auto", "scroll", "contents", "transform", oe]
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
        stroke: [it, xt, co]
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
}, kg = /* @__PURE__ */ sg(Cg);
function T(...e) {
  return kg(e);
}
const U0 = /* @__PURE__ */ y({
  __name: "AccordionContent",
  props: {
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
    return (n, o) => (v(), h(l(Bp), P(a.value, { class: "text-accordion-text data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all" }), {
      default: f(() => [
        ie("div", {
          class: K(l(T)("pb-4 pt-0", t.class))
        }, [
          b(n.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), W0 = /* @__PURE__ */ y({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = re(a);
    return (o, s) => (v(), h(l(kp), P(l(n), {
      class: l(T)("border-accordion-border border-b", t.class)
    }), {
      default: f(() => [
        b(o.$slots, "default")
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
const Bg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sn = {
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
const Dg = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: s, class: r, ...i }, { slots: d }) => et(
  "svg",
  {
    ...sn,
    width: e || sn.width,
    height: e || sn.height,
    stroke: n || sn.stroke,
    "stroke-width": a ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${Bg(s ?? "icon")}`],
    ...i
  },
  [...o.map((u) => et(...u)), ...d.default ? [d.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = (e, t) => (a, { slots: n }) => et(
  Dg,
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
const Sg = $e("CalendarIcon", [
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
const jn = $e("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vl = $e("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pg = $e("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = $e("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eg = $e("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Og = $e("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ag = $e("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mg = $e("ChevronsUpDownIcon", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tg = $e("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Li = $e("EllipsisIcon", [
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
const Ig = $e("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = $e("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rg = $e("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fg = $e("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lg = $e("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ng = $e("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zg = $e("SunIcon", [
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
const Gn = $e("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), H0 = /* @__PURE__ */ y({
  __name: "AccordionTrigger",
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
    return (n, o) => (v(), h(l(Dp), { class: "flex" }, {
      default: f(() => [
        B(l(Sp), P(a.value, {
          class: l(T)(
            "text-heading flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: f(() => [
            b(n.$slots, "default"),
            b(n.$slots, "icon", {}, () => [
              B(l(Vl), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
});
function Ni(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (a = Ni(e[t])) && (n && (n += " "), n += a);
  } else for (a in e) e[a] && (n && (n += " "), n += a);
  return n;
}
function Ug() {
  for (var e, t, a = 0, n = "", o = arguments.length; a < o; a++) (e = arguments[a]) && (t = Ni(e)) && (n && (n += " "), n += t);
  return n;
}
const Bs = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ds = Ug, $a = (e, t) => (a) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Ds(e, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: s } = t, r = Object.keys(o).map((u) => {
    const c = a == null ? void 0 : a[u], p = s == null ? void 0 : s[u];
    if (c === null) return null;
    const _ = Bs(c) || Bs(p);
    return o[u][_];
  }), i = a && Object.entries(a).reduce((u, c) => {
    let [p, _] = c;
    return _ === void 0 || (u[p] = _), u;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, c) => {
    let { class: p, className: _, ...m } = c;
    return Object.entries(m).every((w) => {
      let [g, x] = w;
      return Array.isArray(x) ? x.includes({
        ...s,
        ...i
      }[g]) : {
        ...s,
        ...i
      }[g] === x;
    }) ? [
      ...u,
      p,
      _
    ] : u;
  }, []);
  return Ds(e, r, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, K0 = /* @__PURE__ */ y({
  __name: "Badge",
  props: {
    variant: {},
    type: {},
    size: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      class: K(l(T)(l(Wg)({ variant: a.variant, type: a.type, size: a.size }), t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Wg = $a(
  "inline-flex items-center rounded-full border h-fit font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        warning: "bg-warning text-warning-foreground"
      },
      type: {
        outline: "",
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
), j0 = /* @__PURE__ */ y({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("nav", {
      "aria-label": "breadcrumb",
      class: K(t.class)
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), G0 = /* @__PURE__ */ y({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: K(l(T)("flex h-9 w-9 items-center justify-center", t.class))
    }, [
      b(a.$slots, "default", {}, () => [
        B(l(Li), { class: "h-4 w-4" })
      ]),
      n[0] || (n[0] = ie("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), q0 = /* @__PURE__ */ y({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("li", {
      class: K(l(T)("inline-flex items-center gap-1.5", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Y0 = /* @__PURE__ */ y({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), {
      as: a.as,
      "as-child": a.asChild,
      class: K(l(T)("hover:text-foreground transition-colors", t.class))
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), J0 = /* @__PURE__ */ y({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("ol", {
      class: K(
        l(T)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5",
          t.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Q0 = /* @__PURE__ */ y({
  __name: "BreadcrumbPage",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("span", {
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: K(l(T)("text-foreground font-normal", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), X0 = /* @__PURE__ */ y({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: K(l(T)("[&>svg]:h-3.5 [&>svg]:w-3.5", t.class))
    }, [
      b(a.$slots, "default", {}, () => [
        B(l(Rl))
      ])
    ], 2));
  }
}), Ye = /* @__PURE__ */ y({
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
    return (a, n) => (v(), h(l(L), {
      as: a.as,
      "as-child": a.asChild,
      class: K(l(T)(l(Gt)({ variant: a.variant, size: a.size }), t.class))
    }, {
      default: f(() => [
        b(a.$slots, "default"),
        a.loading ? (v(), h(l(Ig), {
          key: 0,
          class: K(l(Hg)({ size: a.size }))
        }, null, 8, ["class"])) : ee("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Hg = $a("animate-spin", {
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
}), Gt = $a(
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
), Z0 = /* @__PURE__ */ y({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      class: K(
        l(T)("border-card-border bg-card text-card-foreground rounded-lg border shadow-sm", t.class)
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), e_ = /* @__PURE__ */ y({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      class: K(l(T)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), t_ = /* @__PURE__ */ y({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("h3", {
      class: K(l(T)("text-2xl font-semibold leading-none tracking-tight", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), a_ = /* @__PURE__ */ y({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("p", {
      class: K(l(T)("text-muted-foreground text-sm", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), n_ = /* @__PURE__ */ y({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      class: K(l(T)("p-6 pt-0", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), o_ = /* @__PURE__ */ y({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      class: K(l(T)("flex items-center p-6 pt-0", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Kg = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, l_ = /* @__PURE__ */ y({
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
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(Qr), P({
      class: l(T)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: u }) => [
        B(l(Gi), null, {
          default: f(() => [
            B(l(Gg)),
            B(l(qi)),
            B(l(jg))
          ]),
          _: 1
        }),
        ie("div", Kg, [
          (v(!0), F(Q, null, fe(d, (c) => (v(), h(l(Wi), {
            key: c.value.toString()
          }, {
            default: f(() => [
              B(l(Ki), null, {
                default: f(() => [
                  B(l(Sn), null, {
                    default: f(() => [
                      (v(!0), F(Q, null, fe(u, (p) => (v(), h(l(ji), { key: p }, {
                        default: f(() => [
                          J(X(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              B(l(Hi), null, {
                default: f(() => [
                  (v(!0), F(Q, null, fe(c.rows, (p, _) => (v(), h(l(Sn), {
                    key: `weekDate-${_}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), F(Q, null, fe(p, (m) => (v(), h(l(zi), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          B(l(Ui), {
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
}), zi = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(pf), P({
      class: l(T)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ui = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(bf), P({
      class: l(T)(
        l(Gt)({ variant: "ghost" }),
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
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wi = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(cf), P({
      class: l(T)("w-full border-collapse space-y-1", t.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hi = /* @__PURE__ */ y({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(gf), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ki = /* @__PURE__ */ y({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(hf), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sn = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(yf), P({
      class: l(T)("flex", t.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ji = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(ff), P({
      class: l(T)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gi = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(df), P({
      class: l(T)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qi = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(uf), P({
      class: l(T)("text-text text-sm font-medium", t.class)
    }, l(n)), {
      default: f(({ headingValue: r }) => [
        b(o.$slots, "default", { headingValue: r }, () => [
          J(X(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jg = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(vf), P({
      class: l(T)(
        l(Gt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => s[0] || (s[0] = [
        J(" > ")
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
}), Gg = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(mf), P({
      class: l(T)(
        l(Gt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => s[0] || (s[0] = [
        J(" < ")
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
});
function qg(e) {
  return zo() ? (Uo(e), !0) : !1;
}
const po = /* @__PURE__ */ new WeakMap(), Yg = (...e) => {
  var t;
  const a = e[0], n = (t = qe()) == null ? void 0 : t.proxy;
  if (n == null && !js())
    throw new Error("injectLocal must be called in setup");
  return n && po.has(n) && a in po.get(n) ? po.get(n)[a] : Ko(...e);
}, Jg = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Qg = (e) => typeof e < "u", Xg = Object.prototype.toString, Zg = (e) => Xg.call(e) === "[object Object]", ey = () => {
};
function Yi(...e) {
  if (e.length !== 1)
    return Rs(...e);
  const t = e[0];
  return typeof t == "function" ? La(Ws(() => ({ get: t, set: ey }))) : A(t);
}
function ty(e, t) {
  function a(...n) {
    return new Promise((o, s) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(s);
    });
  }
  return a;
}
const Ji = (e) => e();
function ay(e = Ji, t = {}) {
  const {
    initialState: a = "active"
  } = t, n = Yi(a === "active");
  function o() {
    n.value = !1;
  }
  function s() {
    n.value = !0;
  }
  const r = (...i) => {
    n.value && e(...i);
  };
  return { isActive: La(n), pause: o, resume: s, eventFilter: r };
}
function Ss(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function fo(e) {
  return Array.isArray(e) ? e : [e];
}
function ny(e) {
  return qe();
}
function oy(e, t, a = {}) {
  const {
    eventFilter: n = Ji,
    ...o
  } = a;
  return ae(
    e,
    ty(
      n,
      t
    ),
    o
  );
}
function ly(e, t, a = {}) {
  const {
    eventFilter: n,
    initialState: o = "active",
    ...s
  } = a, { eventFilter: r, pause: i, resume: d, isActive: u } = ay(n, { initialState: o });
  return { stop: oy(
    e,
    t,
    {
      ...s,
      eventFilter: r
    }
  ), pause: i, resume: d, isActive: u };
}
function Qi(e, t = !0, a) {
  ny() ? ce(e, a) : t ? e() : se(e);
}
function sy(e, t, a) {
  return ae(
    e,
    t,
    {
      ...a,
      immediate: !0
    }
  );
}
const Ra = Jg ? window : void 0;
function Xi(e) {
  var t;
  const a = St(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
function Pn(...e) {
  const t = [], a = () => {
    t.forEach((i) => i()), t.length = 0;
  }, n = (i, d, u, c) => (i.addEventListener(d, u, c), () => i.removeEventListener(d, u, c)), o = $(() => {
    const i = fo(St(e[0])).filter((d) => d != null);
    return i.every((d) => typeof d != "string") ? i : void 0;
  }), s = sy(
    () => {
      var i, d;
      return [
        (d = (i = o.value) == null ? void 0 : i.map((u) => Xi(u))) != null ? d : [Ra].filter((u) => u != null),
        fo(St(o.value ? e[1] : e[0])),
        fo(l(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        St(o.value ? e[3] : e[2])
      ];
    },
    ([i, d, u, c]) => {
      if (a(), !(i != null && i.length) || !(d != null && d.length) || !(u != null && u.length))
        return;
      const p = Zg(c) ? { ...c } : c;
      t.push(
        ...i.flatMap(
          (_) => d.flatMap(
            (m) => u.map((w) => n(_, m, w, p))
          )
        )
      );
    },
    { flush: "post" }
  ), r = () => {
    s(), a();
  };
  return qg(a), r;
}
function ry() {
  const e = Ft(!1), t = qe();
  return t && ce(() => {
    e.value = !0;
  }, t), e;
}
function iy(e) {
  const t = ry();
  return $(() => (t.value, !!e()));
}
const dy = Symbol("vueuse-ssr-width");
function uy() {
  const e = js() ? Yg(dy, null) : null;
  return typeof e == "number" ? e : void 0;
}
function Zi(e, t = {}) {
  const { window: a = Ra, ssrWidth: n = uy() } = t, o = iy(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), s = Ft(typeof n == "number"), r = Ft(), i = Ft(!1), d = (u) => {
    i.value = u.matches;
  };
  return be(() => {
    if (s.value) {
      s.value = !o.value;
      const u = St(e).split(",");
      i.value = u.some((c) => {
        const p = c.includes("not all"), _ = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), m = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let w = !!(_ || m);
        return _ && w && (w = n >= Ss(_[1])), m && w && (w = n <= Ss(m[1])), p ? !w : w;
      });
      return;
    }
    o.value && (r.value = a.matchMedia(St(e)), i.value = r.value.matches);
  }), Pn(r, "change", d, { passive: !0 }), $(() => i.value);
}
function cy(e) {
  return JSON.parse(JSON.stringify(e));
}
const rn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, dn = "__vueuse_ssr_handlers__", py = /* @__PURE__ */ fy();
function fy() {
  return dn in rn || (rn[dn] = rn[dn] || {}), rn[dn];
}
function ed(e, t) {
  return py[e] || t;
}
function vy(e) {
  return Zi("(prefers-color-scheme: dark)", e);
}
function my(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const hy = {
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
}, Ps = "vueuse-storage";
function gy(e, t, a, n = {}) {
  var o;
  const {
    flush: s = "pre",
    deep: r = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: d = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: p = Ra,
    eventFilter: _,
    onError: m = (U) => {
      console.error(U);
    },
    initOnMounted: w
  } = n, g = (c ? Ft : A)(typeof t == "function" ? t() : t), x = $(() => St(e));
  if (!a)
    try {
      a = ed("getDefaultStorage", () => {
        var U;
        return (U = Ra) == null ? void 0 : U.localStorage;
      })();
    } catch (U) {
      m(U);
    }
  if (!a)
    return g;
  const C = St(t), D = my(C), k = (o = n.serializer) != null ? o : hy[D], { pause: O, resume: E } = ly(
    g,
    () => S(g.value),
    { flush: s, deep: r, eventFilter: _ }
  );
  ae(x, () => R(), { flush: s });
  let I = !1;
  const M = (U) => {
    w && !I || R(U);
  }, W = (U) => {
    w && !I || q(U);
  };
  p && i && (a instanceof Storage ? Pn(p, "storage", M, { passive: !0 }) : Pn(p, Ps, W)), w ? Qi(() => {
    I = !0, R();
  }) : R();
  function N(U, Y) {
    if (p) {
      const te = {
        key: x.value,
        oldValue: U,
        newValue: Y,
        storageArea: a
      };
      p.dispatchEvent(a instanceof Storage ? new StorageEvent("storage", te) : new CustomEvent(Ps, {
        detail: te
      }));
    }
  }
  function S(U) {
    try {
      const Y = a.getItem(x.value);
      if (U == null)
        N(Y, null), a.removeItem(x.value);
      else {
        const te = k.write(U);
        Y !== te && (a.setItem(x.value, te), N(Y, te));
      }
    } catch (Y) {
      m(Y);
    }
  }
  function V(U) {
    const Y = U ? U.newValue : a.getItem(x.value);
    if (Y == null)
      return d && C != null && a.setItem(x.value, k.write(C)), C;
    if (!U && u) {
      const te = k.read(Y);
      return typeof u == "function" ? u(te, C) : D === "object" && !Array.isArray(te) ? { ...C, ...te } : te;
    } else return typeof Y != "string" ? Y : k.read(Y);
  }
  function R(U) {
    if (!(U && U.storageArea !== a)) {
      if (U && U.key == null) {
        g.value = C;
        return;
      }
      if (!(U && U.key !== x.value)) {
        O();
        try {
          (U == null ? void 0 : U.newValue) !== k.write(g.value) && (g.value = V(U));
        } catch (Y) {
          m(Y);
        } finally {
          U ? se(E) : E();
        }
      }
    }
  }
  function q(U) {
    R(U.detail);
  }
  return g;
}
const yy = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function by(e = {}) {
  const {
    selector: t = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = Ra,
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
  }, _ = vy({ window: o }), m = $(() => _.value ? "dark" : "light"), w = d || (r == null ? Yi(n) : gy(r, n, s, { window: o, listenToStorageChanges: i })), g = $(() => w.value === "auto" ? m.value : w.value), x = ed(
    "updateHTMLAttrs",
    (O, E, I) => {
      const M = typeof O == "string" ? o == null ? void 0 : o.document.querySelector(O) : Xi(O);
      if (!M)
        return;
      const W = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
      let S = null;
      if (E === "class") {
        const R = I.split(/\s/g);
        Object.values(p).flatMap((q) => (q || "").split(/\s/g)).filter(Boolean).forEach((q) => {
          R.includes(q) ? W.add(q) : N.add(q);
        });
      } else
        S = { key: E, value: I };
      if (W.size === 0 && N.size === 0 && S === null)
        return;
      let V;
      c && (V = o.document.createElement("style"), V.appendChild(document.createTextNode(yy)), o.document.head.appendChild(V));
      for (const R of W)
        M.classList.add(R);
      for (const R of N)
        M.classList.remove(R);
      S && M.setAttribute(S.key, S.value), c && (o.getComputedStyle(V).opacity, document.head.removeChild(V));
    }
  );
  function C(O) {
    var E;
    x(t, a, (E = p[O]) != null ? E : O);
  }
  function D(O) {
    e.onChanged ? e.onChanged(O, C) : C(O);
  }
  ae(g, D, { flush: "post", immediate: !0 }), Qi(() => D(g.value));
  const k = $({
    get() {
      return u ? w.value : g.value;
    },
    set(O) {
      w.value = O;
    }
  });
  return Object.assign(k, { store: w, system: m, state: g });
}
function _y(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: a = ""
  } = e, n = by({
    ...e,
    onChanged: (r, i) => {
      var d;
      e.onChanged ? (d = e.onChanged) == null || d.call(e, r === "dark", i, r) : i(r);
    },
    modes: {
      dark: t,
      light: a
    }
  }), o = $(() => n.system.value);
  return $({
    get() {
      return n.value === "dark";
    },
    set(r) {
      const i = r ? "dark" : "light";
      o.value === i ? n.value = "auto" : n.value = i;
    }
  });
}
function Fl(e, t, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: _
  } = n, m = qe(), w = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let g = u;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const x = (k) => i ? typeof i == "function" ? i(k) : cy(k) : k, C = () => Qg(e[t]) ? x(e[t]) : p, D = (k) => {
    _ ? _(k) && w(g, k) : w(g, k);
  };
  if (d) {
    const k = C(), O = A(k);
    let E = !1;
    return ae(
      () => e[t],
      (I) => {
        E || (E = !0, O.value = x(I), se(() => E = !1));
      }
    ), ae(
      O,
      (I) => {
        !E && (I !== e[t] || c) && D(I);
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
const Io = /* @__PURE__ */ y({
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
    const o = ne(e, t);
    return (s, r) => (v(), h(l($m), H(j(l(o))), {
      default: f(({ open: i }) => [
        b(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Vo = /* @__PURE__ */ y({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(Gm), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ro = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(Bm), P(l(n), {
      class: l(T)(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-start text-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        t.class
      )
    }), {
      default: f(() => [
        b(o.$slots, "default"),
        B(l(qm), { "as-child": "" }, {
          default: f(() => [
            B(l(Vl), {
              class: K(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fo = /* @__PURE__ */ y({
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
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(Dm), null, {
      default: f(() => [
        B(l(Im), P({ ...l(s), ...r.$attrs }, {
          class: l(T)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            r.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: f(() => [
            B(l(xy)),
            B(l(Hm), {
              class: K(
                l(T)(
                  "p-1",
                  r.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: f(() => [
                b(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            B(l($y))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), s_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(l(Um), P({
      class: l(T)("w-full p-1", t.class)
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wy = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Lo = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(Fm), P(l(n), {
      class: l(T)(
        "focus:text-accent-foreground focus:bg-accent relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        t.class
      )
    }), {
      default: f(() => [
        ie("span", wy, [
          B(l(Lm), null, {
            default: f(() => [
              B(l(jn), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        B(l(gi), null, {
          default: f(() => [
            b(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r_ = /* @__PURE__ */ y({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(gi), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), i_ = /* @__PURE__ */ y({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(Wm), {
      class: K(l(T)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), d_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(l(Vm), P(a.value, {
      class: l(T)("bg-muted -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), xy = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(Km), P(l(n), {
      class: l(T)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          B(l(Eg), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $y = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(jm), P(l(n), {
      class: l(T)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          B(l(Vl), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cy = { class: "flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, ky = /* @__PURE__ */ y({
  __name: "CalendarWithSelect",
  props: {
    modelValue: { default: void 0 },
    multiple: { type: Boolean },
    defaultValue: {},
    defaultPlaceholder: {},
    placeholder: { default() {
      return hn(mt());
    } },
    pagedNavigation: { type: Boolean },
    preventDeselect: { type: Boolean },
    weekStartsOn: {},
    weekdayFormat: { default: "short" },
    calendarLabel: {},
    fixedWeeks: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: {},
    numberOfMonths: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    initialFocus: { type: Boolean },
    isDateDisabled: {},
    isDateUnavailable: {},
    dir: {},
    nextPage: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = $(() => {
      const { class: d, placeholder: u, ...c } = a;
      return c;
    }), s = Fl(a, "modelValue", n, {
      passive: !0,
      defaultValue: hn(mt())
    }), r = ne(o, n), i = Rr("en");
    return (d, u) => (v(), h(l(Qr), P({
      placeholder: l(s),
      "onUpdate:placeholder": u[2] || (u[2] = (c) => ca(s) ? s.value = c : null)
    }, l(r), {
      class: l(T)("rounded-md border p-3", a.class)
    }), {
      default: f(({ date: c, grid: p, weekDays: _ }) => [
        B(l(Gi), null, {
          default: f(() => [
            B(l(qi), { class: "flex w-full items-center justify-between gap-2" }, {
              default: f(() => [
                B(l(Io), {
                  "default-value": l(s).month.toString(),
                  "onUpdate:modelValue": u[0] || (u[0] = (m) => {
                    var w;
                    !m || !l(s) || Number(m) !== ((w = l(s)) == null ? void 0 : w.month) && (s.value = l(s).set({
                      month: Number(m)
                    }));
                  })
                }, {
                  default: f(() => [
                    B(l(Ro), {
                      "aria-label": "Select month",
                      class: "w-[60%]"
                    }, {
                      default: f(() => [
                        B(l(Vo), { placeholder: "Select month" })
                      ]),
                      _: 1
                    }),
                    B(l(Fo), { class: "max-h-[200px]" }, {
                      default: f(() => [
                        (v(!0), F(Q, null, fe(l(Iu)({ dateObj: c }), (m) => (v(), h(l(Lo), {
                          key: m.toString(),
                          value: m.month.toString()
                        }, {
                          default: f(() => [
                            J(X(l(i).custom(l(Fe)(m), { month: "long" })), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]))), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["default-value"]),
                B(l(Io), {
                  "default-value": l(s).year.toString(),
                  "onUpdate:modelValue": u[1] || (u[1] = (m) => {
                    var w;
                    !m || !l(s) || Number(m) !== ((w = l(s)) == null ? void 0 : w.year) && (s.value = l(s).set({
                      year: Number(m)
                    }));
                  })
                }, {
                  default: f(() => [
                    B(l(Ro), {
                      "aria-label": "Select year",
                      class: "w-[40%]"
                    }, {
                      default: f(() => [
                        B(l(Vo), { placeholder: "Select year" })
                      ]),
                      _: 1
                    }),
                    B(l(Fo), { class: "max-h-[200px]" }, {
                      default: f(() => [
                        (v(!0), F(Q, null, fe(l(Tu)({ dateObj: c, startIndex: -100, endIndex: 10 }), (m) => (v(), h(l(Lo), {
                          key: m.toString(),
                          value: m.year.toString()
                        }, {
                          default: f(() => [
                            J(X(m.year), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]))), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["default-value"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024),
        ie("div", Cy, [
          (v(!0), F(Q, null, fe(p, (m) => (v(), h(l(Wi), {
            key: m.value.toString()
          }, {
            default: f(() => [
              B(l(Ki), null, {
                default: f(() => [
                  B(l(Sn), null, {
                    default: f(() => [
                      (v(!0), F(Q, null, fe(_, (w) => (v(), h(l(ji), { key: w }, {
                        default: f(() => [
                          J(X(w), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              B(l(Hi), { class: "grid" }, {
                default: f(() => [
                  (v(!0), F(Q, null, fe(m.rows, (w, g) => (v(), h(l(Sn), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), F(Q, null, fe(w, (x) => (v(), h(l(zi), {
                        key: x.toString(),
                        date: x
                      }, {
                        default: f(() => [
                          B(l(Ui), {
                            day: x,
                            month: m.value
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
    }, 16, ["placeholder", "class"]));
  }
}), td = /* @__PURE__ */ y({
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
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(Mf), P(l(s), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        a.class
      ]
    }), {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ad = /* @__PURE__ */ y({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ne(e, t);
    return (s, r) => (v(), h(l(Wr), H(j(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), u_ = /* @__PURE__ */ y({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(Ga), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), By = /* @__PURE__ */ y({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(Hr), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dy = /* @__PURE__ */ y({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      class: K(l(T)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Sy = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(qr), P(l(n), {
      class: l(T)("text-heading text-2xl font-semibold leading-none tracking-tight", t.class)
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Py = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(Yr), P(l(n), {
      class: l(T)("text-sub-text text-sm", t.class)
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nd = /* @__PURE__ */ y({
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
    }), s = ne(o, a);
    return (r, i) => (v(), h(l(yl), null, {
      default: f(() => [
        B(l($l), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        B(l(xl), P(l(s), {
          class: l(T)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
            n.class
          )
        }), {
          default: f(() => [
            b(r.$slots, "default"),
            B(l(Ga), {
              onClick: i[0] || (i[0] = (d) => a("close", d)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: f(() => [
                B(l(Gn), { class: "size-4 dark:text-slate-300" }),
                i[1] || (i[1] = ie("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1,
              __: [1]
            })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), c_ = /* @__PURE__ */ y({
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
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(yl), null, {
      default: f(() => [
        B(l($l), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: f(() => [
            B(l(xl), P({
              class: l(T)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg md:w-full dark:border-slate-800 dark:bg-slate-950",
                a.class
              )
            }, l(s), {
              onPointerDownOutside: i[0] || (i[0] = (d) => {
                const u = d.detail.originalEvent, c = u.target;
                (u.offsetX > c.clientWidth || u.offsetY > c.clientHeight) && d.preventDefault();
              })
            }), {
              default: f(() => [
                b(r.$slots, "default"),
                B(l(Ga), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: f(() => [
                    B(l(Gn), { class: "size-4" }),
                    i[1] || (i[1] = ie("span", { class: "sr-only" }, "Close", -1))
                  ]),
                  _: 1,
                  __: [1]
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
}), Ey = /* @__PURE__ */ y({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      class: K(
        l(T)("text-text flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class)
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), p_ = /* @__PURE__ */ y({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ne(e, t);
    return (s, r) => (v(), h(l(ad), H(j(l(o))), {
      default: f(() => [
        B(l(nd), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: f(() => [
            B(td, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: f(() => [
                b(s.$slots, "default")
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
}), Oy = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(l(zf), P(a.value, {
      class: l(T)("py-6 text-center text-sm", t.class)
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ay = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(l(Vf), P(a.value, {
      class: l(T)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: f(() => [
        n.heading ? (v(), h(l(Rf), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: f(() => [
            J(X(n.heading), 1)
          ]),
          _: 1
        })) : ee("", !0),
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), My = { class: "flex items-center border-b px-3" }, Ty = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), F("div", My, [
      B(l(Ng), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      B(l(Tf), P({ ...l(n), ...o.$attrs }, {
        "auto-focus": "",
        class: l(T)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Iy = /* @__PURE__ */ y({
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
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(Kf), P(l(s), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vy = { role: "presentation" }, Ry = /* @__PURE__ */ y({
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
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(Nf), P(l(s), {
      class: l(T)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: f(() => [
        ie("div", Vy, [
          b(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), f_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(l(jf), P(a.value, {
      class: l(T)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), v_ = /* @__PURE__ */ y({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("span", {
      class: K(l(T)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Fy = /* @__PURE__ */ y({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ne(e, t);
    return (s, r) => (v(), h(l(kv), H(j(l(o))), {
      default: f(({ open: i }) => [
        b(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Ly = /* @__PURE__ */ y({
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
      class: K(
        l(T)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          t.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ny = /* @__PURE__ */ y({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = re(e);
    return (n, o) => (v(), h(l(Bv), P({ class: "outline-none" }, l(a)), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zy = /* @__PURE__ */ y({
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
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(Dv), null, {
      default: f(() => [
        B(l(Sv), P(l(s), {
          class: l(T)(
            "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: f(() => [
            b(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), m_ = /* @__PURE__ */ y({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(Pv), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), h_ = /* @__PURE__ */ y({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = ne(e, t);
    return (s, r) => (v(), h(l(Mv), H(j(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), g_ = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(ci), P(l(n), {
      class: l(T)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.inset && "pl-8",
        t.class
      )
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Uy = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(Ly, {
      class: K(t.class)
    }, {
      default: f(() => [
        B(l(ci), P(l(n), {
          as: o.as,
          href: o.href,
          class: "size-full"
        }), {
          default: f(() => [
            b(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "href"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Wy = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, y_ = /* @__PURE__ */ y({
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
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(Ov), P(l(s), {
      class: l(T)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        ie("span", Wy, [
          B(l(pi), null, {
            default: f(() => [
              B(l(jn), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hy = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, b_ = /* @__PURE__ */ y({
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
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(Tv), P(l(s), {
      class: l(T)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        ie("span", Hy, [
          B(l(pi), null, {
            default: f(() => [
              B(l(Tg), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), __ = /* @__PURE__ */ y({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("span", {
      class: K(l(T)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), w_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(l(Ev), P(a.value, {
      class: l(T)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), x_ = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(Av), P(l(n), {
      class: l(T)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", t.class)
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $_ = /* @__PURE__ */ y({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ne(e, t);
    return (s, r) => (v(), h(l(Iv), H(j(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), C_ = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(Rv), P(l(n), {
      class: l(T)(
        "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
        t.class
      )
    }), {
      default: f(() => [
        b(o.$slots, "default"),
        B(l(Rl), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), k_ = /* @__PURE__ */ y({
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
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(Vv), P(l(s), {
      class: l(T)(
        "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ky = { class: "text-xs text-slate-600 dark:text-slate-300" }, jy = /* @__PURE__ */ y({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(e) {
    return (t, a) => (v(), F("div", Ky, "Characters: " + X(t.count), 1));
  }
}), Qa = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, o] of t)
    a[n] = o;
  return a;
}, Gy = {}, qy = { class: "text-sm text-slate-400 dark:text-slate-500" };
function Yy(e, t) {
  return v(), F("div", qy, [
    b(e.$slots, "default")
  ]);
}
const Jy = /* @__PURE__ */ Qa(Gy, [["render", Yy]]), Qy = { class: "text-sm text-red-600 dark:text-red-400" }, Xy = /* @__PURE__ */ y({
  __name: "Error",
  props: {
    error: {}
  },
  setup(e) {
    return (t, a) => ua((v(), F("div", null, [
      ie("p", Qy, X(t.error), 1)
    ], 512)), [
      [Ho, t.error]
    ]);
  }
}), Zy = {}, eb = { class: "w-full space-y-4 p-1.5" };
function tb(e, t) {
  return v(), F("div", eb, [
    b(e.$slots, "default")
  ]);
}
const B_ = /* @__PURE__ */ Qa(Zy, [["render", tb]]), ab = {}, nb = { class: "my-4" };
function ob(e, t) {
  return v(), F("div", nb, [
    b(e.$slots, "default")
  ]);
}
const lb = /* @__PURE__ */ Qa(ab, [["render", ob]]), sb = { class: "grid gap-4 md:grid-cols-2" }, D_ = /* @__PURE__ */ y({
  __name: "FormGrid",
  setup(e) {
    return (t, a) => (v(), h(lb, null, {
      default: f(() => [
        ie("div", sb, [
          b(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), od = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(l(Fv), P(a.value, {
      class: l(T)(
        "text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        t.class
      )
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rb = { class: "relative" }, ib = {
  name: "Base",
  inheritAttrs: !1
}, Mt = /* @__PURE__ */ y({
  ...ib,
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
        t.label && t.showLabel ? (v(), h(l(od), {
          key: 0,
          id: t.id
        }, {
          default: f(() => [
            J(X(t.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : ee("", !0),
        ie("div", rb, [
          b(t.$slots, "default"),
          t.showCharacterCount ? (v(), h(l(jy), {
            key: 0,
            count: (n = t.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : ee("", !0)
        ]),
        B(l(Jy), { class: "mt-[2px]" }, {
          default: f(() => [
            J(X(t.description), 1)
          ]),
          _: 1
        }),
        B(l(Xy), { error: t.error }, null, 8, ["error"])
      ]);
    };
  }
}), db = { class: "flex gap-2" }, S_ = /* @__PURE__ */ y({
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
    return ae(o, (s) => {
      a("update:modelValue", s);
    }), (s, r) => (v(), h(l(Mt), H(j(s.$props)), {
      default: f(() => [
        ie("div", db, [
          B(l($f), {
            id: s.id,
            checked: o.value,
            "onUpdate:checked": r[0] || (r[0] = (i) => o.value = i),
            class: "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }, {
            default: f(() => [
              B(l(Cf), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: f(() => [
                  B(l(jn), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          s.text ? (v(), h(l(od), {
            key: 0,
            id: s.id,
            class: "my-auto"
          }, {
            default: f(() => [
              J(X(s.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : ee("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), ld = /* @__PURE__ */ y({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ne(e, t);
    return (s, r) => (v(), h(l(Jv), H(j(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sd = /* @__PURE__ */ y({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(Qv), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rd = /* @__PURE__ */ y({
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
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(Xv), null, {
      default: f(() => [
        B(l(tm), P({ ...l(s), ...r.$attrs }, {
          class: l(T)(
            "border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border bg-white p-4 text-slate-950 shadow-md outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: f(() => [
            b(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), P_ = /* @__PURE__ */ y({
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
    const a = t, n = e, o = $(() => n.emptyMessage ?? "Option not found"), s = $(() => n.placeholder ?? "Select an option"), r = A(!1), i = A(n.modelValue ?? []), d = (p, _) => p.filter((m) => m.name.toLowerCase().includes(_.toLowerCase())), u = $(() => {
      var p;
      return Array.isArray(i.value) ? i.value.length ? i.value.map((_) => _.name).join(", ") : s.value : typeof i.value == "object" ? i.value.name : (p = n.options.find((_) => _.id === i.value)) == null ? void 0 : p.name;
    }), c = (p) => Array.isArray(i.value) ? i.value.find((_) => _.id === p.id) : typeof i.value == "object" ? i.value.id === p.id : i.value === p.id;
    return ae(i, () => {
      Array.isArray(i.value) ? a("update:modelValue", i.value) : a("update:modelValue", i.value.id);
    }), (p, _) => (v(), h(l(Mt), H(j(p.$props)), {
      default: f(() => [
        B(l(ld), {
          open: r.value,
          "onUpdate:open": _[2] || (_[2] = (m) => r.value = m)
        }, {
          default: f(() => [
            B(l(sd), { "as-child": "" }, {
              default: f(() => [
                B(l(Ye), {
                  variant: "outline",
                  role: "combobox",
                  "aria-expanded": r.value,
                  class: "w-full justify-between overflow-hidden"
                }, {
                  default: f(() => [
                    J(X(u.value) + " ", 1),
                    B(l(Mg), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
                  ]),
                  _: 1
                }, 8, ["aria-expanded"])
              ]),
              _: 1
            }),
            B(l(rd), { class: "w-full p-0" }, {
              default: f(() => [
                B(l(td), {
                  multiple: p.multiple,
                  modelValue: i.value,
                  "onUpdate:modelValue": _[1] || (_[1] = (m) => i.value = m),
                  "filter-function": d
                }, {
                  default: f(() => [
                    B(l(Ty), {
                      class: "h-9",
                      placeholder: s.value
                    }, null, 8, ["placeholder"]),
                    B(l(Oy), null, {
                      default: f(() => [
                        J(X(o.value), 1)
                      ]),
                      _: 1
                    }),
                    B(l(Ry), null, {
                      default: f(() => [
                        B(l(Ay), null, {
                          default: f(() => [
                            (v(!0), F(Q, null, fe(p.options, (m) => (v(), h(l(Iy), {
                              key: m.id,
                              value: m,
                              onSelect: _[0] || (_[0] = () => {
                                p.multiple || (r.value = !1);
                              })
                            }, {
                              default: f(() => [
                                J(X(m.name) + " ", 1),
                                B(l(jn), {
                                  class: K(l(T)("ml-auto size-4", c(m) ? "opacity-100" : "opacity-0"))
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
}), E_ = /* @__PURE__ */ y({
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
    }), s = A(n.modelValue);
    return ae(s, () => {
      a("update:modelValue", s.value);
    }), ce(() => {
      if (n.defaultValue)
        s.value = n.defaultValue;
      else if (s.value === null) {
        const r = /* @__PURE__ */ new Date();
        s.value = new _e(
          r.getFullYear(),
          r.getMonth() + 1,
          r.getDate()
        );
      }
    }), (r, i) => (v(), h(l(Mt), H(j(r.$props)), {
      default: f(() => [
        B(l(ld), null, {
          default: f(() => [
            B(l(sd), { "as-child": "" }, {
              default: f(() => [
                B(l(Ye), {
                  variant: "outline",
                  class: K(["text-text w-[280px] justify-start text-left font-normal"])
                }, {
                  default: f(() => [
                    B(l(Sg), { class: "mr-2 size-4" }),
                    J(" " + X(s.value ? l(o).format(s.value.toDate(l(mt)())) : r.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            B(l(rd), { class: "w-auto p-0" }, {
              default: f(() => [
                B(l(ky), {
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
var De = [];
for (var vo = 0; vo < 256; ++vo)
  De.push((vo + 256).toString(16).slice(1));
function ub(e, t = 0) {
  return (De[e[t + 0]] + De[e[t + 1]] + De[e[t + 2]] + De[e[t + 3]] + "-" + De[e[t + 4]] + De[e[t + 5]] + "-" + De[e[t + 6]] + De[e[t + 7]] + "-" + De[e[t + 8]] + De[e[t + 9]] + "-" + De[e[t + 10]] + De[e[t + 11]] + De[e[t + 12]] + De[e[t + 13]] + De[e[t + 14]] + De[e[t + 15]]).toLowerCase();
}
var un, cb = new Uint8Array(16);
function pb() {
  if (!un && (un = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !un))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return un(cb);
}
var fb = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Es = {
  randomUUID: fb
};
function vb(e, t, a) {
  if (Es.randomUUID && !e)
    return Es.randomUUID();
  e = e || {};
  var n = e.random || (e.rng || pb)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, ub(n);
}
const mb = { class: "flex items-center space-x-2" }, hb = ["src"], gb = ["accept"], O_ = /* @__PURE__ */ y({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = "file-upload-" + vb(), s = $(() => i.value ? URL.createObjectURL(i.value) : null), r = a.currentImage ? a.currentImage : a.defaultImage, i = $({
      get: () => a.modelValue,
      set: (c) => n("update:modelValue", c)
    }), d = (c) => {
      i.value = c.target.files[0];
    }, u = () => document.getElementById(o).click();
    return (c, p) => (v(), h(l(Mt), H(j(c.$props)), {
      default: f(() => [
        ie("div", mb, [
          b(c.$slots, "image", {
            newImage: s.value,
            curImage: l(r)
          }, () => [
            ie("img", {
              src: s.value ?? l(r),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, hb)
          ]),
          ie("input", {
            id: o,
            accept: c.accept,
            hidden: "",
            type: "file",
            onInput: d
          }, null, 40, gb),
          B(l(Ye), {
            variant: "outline",
            onClick: u
          }, {
            default: f(() => p[0] || (p[0] = [
              J(" Upload ")
            ])),
            _: 1,
            __: [0]
          })
        ])
      ]),
      _: 3
    }, 16));
  }
}), yb = ["disabled", "placeholder", "required", "type"], bb = /* @__PURE__ */ y({
  __name: "Input",
  props: /* @__PURE__ */ go({
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
    const t = Gs(e, "modelValue");
    return (a, n) => (v(), h(l(Mt), H(j(a.$props)), {
      default: f(() => [
        ua(ie("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: K(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
          }])
        }, null, 10, yb), [
          [wd, t.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), A_ = /* @__PURE__ */ y({
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
    return ae(s, () => {
      a("update:modelValue", s.value);
    }), (r, i) => (v(), h(l(Mt), H(j(r.$props)), {
      default: f(() => [
        B(l(Io), {
          modelValue: s.value,
          "onUpdate:modelValue": i[0] || (i[0] = (d) => s.value = d)
        }, {
          default: f(({ open: d }) => [
            B(l(Ro), { open: d }, {
              default: f(() => [
                B(l(Vo), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            B(l(Fo), null, {
              default: f(() => [
                (v(!0), F(Q, null, fe(r.options, (u) => (v(), h(l(Lo), { value: u }, {
                  default: f(() => [
                    J(X(u), 1)
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
}), _b = ["placeholder"], M_ = /* @__PURE__ */ y({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = Fl(e, "modelValue", t, {
      passive: !0
    });
    return (s, r) => (v(), h(l(Mt), H(j(s.$props)), {
      default: f(() => [
        ua(ie("textarea", {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => ca(o) ? o.value = i : null),
          placeholder: s.placeholder,
          class: K(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !s.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": s.error
          }])
        }, null, 10, _b), [
          [xd, l(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), wb = /* @__PURE__ */ y({
  __name: "Toggle",
  props: /* @__PURE__ */ go({
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
  emits: /* @__PURE__ */ go(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const a = t, n = e, o = Gs(e, "modelValue");
    ae(o, () => {
      a("update:modelValue", o.value);
    });
    const s = $(() => {
      const { class: i, ...d } = n;
      return d;
    }), r = ne(s, a);
    return (i, d) => (v(), h(l(Mt), H(j(i.$props)), {
      default: f(() => [
        B(l(yh), P({
          checked: o.value,
          "onUpdate:checked": d[0] || (d[0] = (u) => o.value = u)
        }, l(r), {
          class: l(T)(
            "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
            n.class
          )
        }), {
          default: f(({ checked: u }) => [
            B(l(bh), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: f(() => [
                u ? b(i.$slots, "checked", { key: 0 }) : ee("", !0),
                u ? ee("", !0) : b(i.$slots, "not-checked", { key: 1 })
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
}), xb = { class: "my-auto text-slate-400 dark:text-slate-100" }, $b = /* @__PURE__ */ y({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, a) => (v(), F("div", xb, " Showing " + X(t.min) + " to " + X(t.max) + " of " + X(t.total) + " results ", 1));
  }
}), Cb = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(l(zv), P(a.value, {
      class: l(T)("text-text flex size-9 items-center justify-center", t.class)
    }), {
      default: f(() => [
        b(n.$slots, "default", {}, () => [
          B(l(Li))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kb = /* @__PURE__ */ y({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    href: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), h(l(Uv), H(j(a.value)), {
      default: f(() => [
        B(l(Ye), {
          class: K(l(T)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            b(n.$slots, "default", {}, () => [
              (v(), h(Be(n.as), { href: n.href }, {
                default: f(() => [
                  B(l(Og), { class: "size-4" })
                ]),
                _: 1
              }, 8, ["href"]))
            ])
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), Bb = /* @__PURE__ */ y({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    href: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), h(l(Wv), H(j(a.value)), {
      default: f(() => [
        B(l(Ye), {
          class: K(l(T)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            b(n.$slots, "default", {}, () => [
              (v(), h(Be(n.as), { href: n.href }, {
                default: f(() => [
                  B(l(Ag), { class: "size-4" })
                ]),
                _: 1
              }, 8, ["href"]))
            ])
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), Db = /* @__PURE__ */ y({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    href: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), h(l(Gv), H(j(a.value)), {
      default: f(() => [
        B(l(Ye), {
          class: K(l(T)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            b(n.$slots, "default", {}, () => [
              (v(), h(Be(n.as), { href: n.href }, {
                default: f(() => [
                  B(l(Rl), { class: "size-4" })
                ]),
                _: 1
              }, 8, ["href"]))
            ])
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), Sb = /* @__PURE__ */ y({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: {},
    href: {},
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), h(l(qv), H(j(a.value)), {
      default: f(() => [
        B(l(Ye), {
          class: K(l(T)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            b(n.$slots, "default", {}, () => [
              (v(), h(Be(n.as), { href: n.href }, {
                default: f(() => [
                  B(l(Pg), { class: "size-4" })
                ]),
                _: 1
              }, 8, ["href"]))
            ])
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), T_ = /* @__PURE__ */ y({
  __name: "LumuixModeToggle",
  setup(e) {
    const t = _y({
      selector: "html"
    });
    return (a, n) => (v(), h(wb, {
      modelValue: l(t),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => ca(t) ? t.value = o : null)
    }, {
      checked: f(() => [
        B(l(Vg), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      "not-checked": f(() => [
        B(l(zg), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), I_ = /* @__PURE__ */ y({
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
    return (o, s) => (v(), F(Q, null, [
      B(l(Fa), {
        onClick: n,
        class: K(t.class)
      }, {
        default: f(() => [
          (v(!0), F(Q, null, fe(o.headers, (r) => (v(), h(l(En), {
            key: r.value
          }, {
            default: f(() => [
              o.$slots[`cell_header_${r.value}`] ? b(o.$slots, `cell_header_${r.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (v(), F(Q, { key: 1 }, [
                J(X(o.row[r.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (v(), h(l(No), { key: 0 }, {
            default: f(() => [
              b(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : ee("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (v(!0), F(Q, { key: 0 }, fe(o.subRows, (r, i) => (v(), h(l(Fa), { key: i }, {
        default: f(() => [
          (v(!0), F(Q, null, fe(o.headers, (d) => (v(), h(l(En), {
            key: d.value
          }, {
            default: f(() => [
              o.$slots[`subrow_cell_${d.value}`] ? b(o.$slots, `subrow_cell_${d.value}`, {
                key: 0,
                item: r,
                open: a.value
              }) : (v(), F(Q, { key: 1 }, [
                J(X("subrow_cell_" + d.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (v(), h(l(No), { key: 0 }, {
            default: f(() => [
              b(o.$slots, "sub_row_actions", {
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
}), Pb = { class: "relative w-full overflow-auto" }, Eb = /* @__PURE__ */ y({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", Pb, [
      ie("table", {
        class: K(l(T)("w-full caption-bottom text-sm", t.class))
      }, [
        b(a.$slots, "default")
      ], 2)
    ]));
  }
}), Ob = /* @__PURE__ */ y({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("tbody", {
      class: K(l(T)("[&_tr:last-child]:border-0", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), En = /* @__PURE__ */ y({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("td", {
      class: K(["text-text p-4 align-middle [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ab = /* @__PURE__ */ y({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("th", {
      class: K(
        l(T)(
          "text-heading h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
          t.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Mb = /* @__PURE__ */ y({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("thead", {
      class: K(l(T)("[&_tr]:border-b", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), V_ = /* @__PURE__ */ y({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("tfoot", {
      class: K(
        l(T)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0",
          t.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Fa = /* @__PURE__ */ y({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("tr", {
      class: K(
        l(T)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          t.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), No = /* @__PURE__ */ y({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("td", {
      class: K(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Tb = /* @__PURE__ */ y({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("caption", {
      class: K(l(T)("text-sub-text mt-4 text-sm", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ib = { class: "flex items-center justify-center py-10" }, R_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(Fa, null, {
      default: f(() => [
        B(En, P({
          class: l(T)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, a.value), {
          default: f(() => [
            ie("div", Ib, [
              b(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), F_ = /* @__PURE__ */ y({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, a) => (v(), h(l(Eb), null, {
      default: f(() => [
        t.caption ? (v(), h(l(Tb), { key: 0 }, {
          default: f(() => [
            J(X(t.caption), 1)
          ]),
          _: 1
        })) : ee("", !0),
        B(l(Mb), null, {
          default: f(() => [
            B(l(Fa), null, {
              default: f(() => [
                (v(!0), F(Q, null, fe(t.headers, (n, o) => (v(), h(l(Ab), null, {
                  default: f(() => [
                    t.$slots[`header_${t.headers[o].value}`] ? b(t.$slots, `header_${t.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (v(), F(Q, { key: 1 }, [
                      J(X(n.name), 1)
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
        B(l(Ob), null, {
          default: f(() => [
            (v(!0), F(Q, null, fe(t.rows, (n, o) => (v(), h(l(Fa), { key: o }, {
              default: f(() => [
                (v(!0), F(Q, null, fe(t.headers, (s) => (v(), h(l(En), {
                  key: s.value
                }, {
                  default: f(() => [
                    t.$slots[`cell_${s.value}`] ? b(t.$slots, `cell_${s.value}`, {
                      key: 0,
                      item: n
                    }) : (v(), F(Q, { key: 1 }, [
                      J(X(n[s.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                t.$slots.row_actions ? (v(), h(l(No), { key: 0 }, {
                  default: f(() => [
                    b(t.$slots, "row_actions", { item: n })
                  ]),
                  _: 2
                }, 1024)) : ee("", !0)
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
}), Vb = { class: "text-text" }, L_ = /* @__PURE__ */ y({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const a = t, n = () => a("close");
    return (o, s) => (v(), h(l(ad), { open: o.open }, {
      default: f(() => [
        B(l(By), { "as-child": "" }, {
          default: f(() => [
            b(o.$slots, "trigger")
          ]),
          _: 3
        }),
        B(l(nd), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: K("max-w-" + o.size)
        }, {
          default: f(() => [
            B(l(Dy), null, {
              default: f(() => [
                B(l(Sy), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.title ? b(o.$slots, "title", { key: 0 }) : (r = o.headerData) != null && r.title ? (v(), F(Q, { key: 1 }, [
                        J(X(o.headerData.title), 1)
                      ], 64)) : ee("", !0)
                    ];
                  }),
                  _: 3
                }),
                B(l(Py), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.description ? b(o.$slots, "description", { key: 0 }) : (r = o.headerData) != null && r.description ? (v(), F(Q, { key: 1 }, [
                        J(X(o.headerData.description), 1)
                      ], 64)) : ee("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            ie("div", Vb, [
              o.$slots.content ? b(o.$slots, "content", { key: 0 }) : b(o.$slots, "default", { key: 1 })
            ]),
            B(l(Ey), null, {
              default: f(() => [
                b(o.$slots, "footer")
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
}), Rb = { class: "justify-between sm:flex" }, N_ = /* @__PURE__ */ y({
  __name: "LumuixPagination",
  props: {
    data: {},
    as: {}
  },
  setup(e) {
    const t = e, a = () => t.data.current_page === 1 ? t.data.data.length === 0 ? 0 : 1 : t.data.current_page === t.data.last_page ? t.data.total - t.data.data.length : t.data.current_page * t.data.per_page - t.data.per_page, n = () => t.data.current_page === 1 ? t.data.data.length : t.data.current_page === t.data.last_page ? t.data.total : t.data.current_page * t.data.per_page, o = $(() => t.data.links.findIndex((s) => s.active));
    return (s, r) => (v(), F("div", Rb, [
      B(l($b), {
        min: a(),
        max: n(),
        total: s.data.total
      }, null, 8, ["min", "max", "total"]),
      B(l(Nv), null, {
        default: f(() => [
          B(l(jv), { class: "flex items-center gap-1" }, {
            default: f(() => [
              B(l(kb), {
                as: s.as,
                href: s.data.first_page_url
              }, null, 8, ["as", "href"]),
              s.data.prev_page_url ? (v(), h(l(Sb), {
                key: 0,
                as: s.as,
                href: s.data.prev_page_url
              }, null, 8, ["as", "href"])) : ee("", !0),
              (v(!0), F(Q, null, fe(s.data.links, (i, d) => (v(), F(Q, null, [
                d <= o.value + 2 && d >= o.value - 2 ? (v(), h(l(Ye), {
                  key: d,
                  "as-child": "",
                  class: "size-10 p-0",
                  variant: i.active ? "primary" : "outline"
                }, {
                  default: f(() => [
                    (v(), h(Be(s.as), {
                      href: i.url
                    }, {
                      default: f(() => [
                        J(X(i.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"]))
                  ]),
                  _: 2
                }, 1032, ["variant"])) : ee("", !0)
              ], 64))), 256)),
              o.value < s.data.links.length - 2 ? (v(), h(l(Cb), { key: 1 })) : ee("", !0),
              s.data.next_page_url ? (v(), h(l(Db), {
                key: 2,
                as: s.as,
                href: s.data.next_page_url
              }, null, 8, ["as", "href"])) : ee("", !0),
              B(l(Bb), {
                as: s.as,
                href: s.data.last_page_url
              }, null, 8, ["as", "href"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}), Fb = /* @__PURE__ */ y({
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
    const o = ne(e, t);
    return (s, r) => (v(), h(l(wh), H(j(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), z_ = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(Ch), P(l(n), {
      class: l(T)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        t.class
      )
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lb = /* @__PURE__ */ y({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => {
      var o;
      return v(), h(Be((o = a.tab) != null && o.is ? a.tab.is : "a"), {
        href: a.tab.href,
        class: K([
          a.tab.active ? "text-primary bg-white hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          l(T)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            t.class
          )
        ])
      }, {
        default: f(() => {
          var s;
          return [
            (s = a.tab) != null && s.icon ? (v(), h(Be(a.tab.icon), {
              key: 0,
              class: "size-5"
            })) : ee("", !0),
            J(" " + X(a.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), Os = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(l(xh), P(a.value, {
      class: l(T)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        t.class
      )
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(l($h), P({
      class: l(T)(
        "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        t.class
      )
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Nb = {}, zb = { class: "text-text mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function Ub(e, t) {
  return v(), F("div", zb, [
    b(e.$slots, "default")
  ]);
}
const Wb = /* @__PURE__ */ Qa(Nb, [["render", Ub]]), W_ = /* @__PURE__ */ y({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(e) {
    const t = e, a = $(
      () => t.tabs.find((n) => n.active)
    );
    return (n, o) => (v(), h(l(Fb), null, {
      default: f(() => [
        B(l(Os), { class: "hidden gap-2 md:block" }, {
          default: f(() => [
            (v(!0), F(Q, null, fe(n.tabs, (s) => (v(), h(l(Lb), {
              key: s.name,
              tab: s
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        B(l(Os), { class: "flex md:hidden" }, {
          default: f(() => [
            B(l(Fy), null, {
              default: f(() => [
                B(l(Ny), { "as-child": "" }, {
                  default: f(() => [
                    B(l(Ye), { variant: "secondary" }, {
                      default: f(() => {
                        var s;
                        return [
                          J(X(((s = a.value) == null ? void 0 : s.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                B(l(zy), { class: "w-full" }, {
                  default: f(() => [
                    (v(!0), F(Q, null, fe(n.tabs, (s) => (v(), h(l(Uy), P({
                      key: s.name,
                      ref_for: !0
                    }, s), {
                      default: f(() => [
                        J(X(s.name), 1)
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
        B(l(Wb), null, {
          default: f(() => [
            b(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Hb = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, H_ = /* @__PURE__ */ y({
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
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(sm), P({
      class: l(T)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: u }) => [
        B(l(Qb), null, {
          default: f(() => [
            B(l(e0)),
            B(l(Xb)),
            B(l(Zb))
          ]),
          _: 1
        }),
        ie("div", Hb, [
          (v(!0), F(Q, null, fe(d, (c) => (v(), h(l(Gb), {
            key: c.value.toString()
          }, {
            default: f(() => [
              B(l(Yb), null, {
                default: f(() => [
                  B(l(As), null, {
                    default: f(() => [
                      (v(!0), F(Q, null, fe(u, (p) => (v(), h(l(Jb), { key: p }, {
                        default: f(() => [
                          J(X(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              B(l(qb), null, {
                default: f(() => [
                  (v(!0), F(Q, null, fe(c.rows, (p, _) => (v(), h(l(As), {
                    key: `weekDate-${_}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), F(Q, null, fe(p, (m) => (v(), h(l(Kb), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          B(l(jb), {
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
}), Kb = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(um), P({
      class: l(T)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jb = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(gm), P({
      class: l(T)(
        l(Gt)({ variant: "ghost" }),
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
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gb = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(dm), P({
      class: l(T)("w-full border-collapse space-y-1", t.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qb = /* @__PURE__ */ y({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(mm), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yb = /* @__PURE__ */ y({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(vm), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), As = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(hm), P({
      class: l(T)("mt-2 flex w-full", t.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jb = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(cm), P({
      class: l(T)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qb = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(rm), P({
      class: l(T)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xb = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(im), P({
      class: l(T)("text-text text-sm font-medium", t.class)
    }, l(n)), {
      default: f(({ headingValue: r }) => [
        b(o.$slots, "default", { headingValue: r }, () => [
          J(X(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zb = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(pm), P({
      class: l(T)(
        l(Gt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          B(l(Fg), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e0 = /* @__PURE__ */ y({
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
    }), n = re(a);
    return (o, s) => (v(), h(l(fm), P({
      class: l(T)(
        l(Gt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          B(l(Rg), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), t0 = /* @__PURE__ */ y({
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
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), h(l(Jm), P(a.value, {
      class: l(T)(
        "bg-border relative shrink-0",
        t.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        t.class
      )
    }), {
      default: f(() => [
        t.label ? (v(), F("span", {
          key: 0,
          class: K(
            l(T)(
              "bg-background text-muted-foreground absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-xs",
              t.orientation === "vertical" ? "w-[1px] px-1 py-2" : "h-[1px] px-2 py-1"
            )
          )
        }, X(t.label), 3)) : ee("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), a0 = /* @__PURE__ */ y({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ne(e, t);
    return (s, r) => (v(), h(l(Wr), H(j(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), K_ = /* @__PURE__ */ y({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(Ga), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), n0 = /* @__PURE__ */ y({
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
    const a = e, n = t, o = $(() => {
      const { class: r, side: i, ...d } = a;
      return d;
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(yl), null, {
      default: f(() => [
        B(l($l), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        B(l(xl), P({
          class: l(T)(l(o0)({ side: r.side }), a.class)
        }, { ...l(s), ...r.$attrs }), {
          default: f(() => [
            b(r.$slots, "default"),
            B(l(Ga), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none" }, {
              default: f(() => [
                B(l(Gn), { class: "text-muted-foreground h-4 w-4" })
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
}), j_ = /* @__PURE__ */ y({
  __name: "SheetDescription",
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
    return (n, o) => (v(), h(l(Yr), P({
      class: l(T)("text-muted-foreground text-sm", t.class)
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G_ = /* @__PURE__ */ y({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      class: K(l(T)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), q_ = /* @__PURE__ */ y({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      class: K(l(T)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Y_ = /* @__PURE__ */ y({
  __name: "SheetTitle",
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
    return (n, o) => (v(), h(l(qr), P({
      class: l(T)("text-foreground text-lg font-semibold", t.class)
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J_ = /* @__PURE__ */ y({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(Hr), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), o0 = $a(
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
), l0 = "sidebar:state", s0 = 60 * 60 * 24 * 7, r0 = "16rem", i0 = "18rem", d0 = "3rem", u0 = "b", [qn, c0] = le("Sidebar"), p0 = { class: "flex h-full w-full flex-col" }, f0 = ["data-state", "data-collapsible", "data-variant", "data-side"], v0 = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border bg-sidebar text-sidebar-foreground flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow"
}, Q_ = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: a, state: n, openMobile: o, setOpenMobile: s } = qn();
    return (r, i) => r.collapsible === "none" ? (v(), F("div", P({
      key: 0,
      class: l(T)("bg-sidebar text-sidebar-foreground flex h-full w-[--sidebar-width] flex-col", t.class)
    }, r.$attrs), [
      b(r.$slots, "default")
    ], 16)) : l(a) ? (v(), h(l(a0), P({
      key: 1,
      open: l(o)
    }, r.$attrs, { "onUpdate:open": l(s) }), {
      default: f(() => [
        B(l(n0), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: r.side,
          class: "bg-sidebar text-sidebar-foreground w-[--sidebar-width] p-0 [&>button]:hidden",
          style: Ot({
            "--sidebar-width": l(i0)
          })
        }, {
          default: f(() => [
            ie("div", p0, [
              b(r.$slots, "default", { state: l(n) })
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (v(), F("div", {
      key: 2,
      class: "group peer hidden md:block",
      "data-state": l(n),
      "data-collapsible": l(n) === "collapsed" ? r.collapsible : "",
      "data-variant": r.variant,
      "data-side": r.side
    }, [
      ie("div", {
        class: K(
          l(T)(
            "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            r.variant === "floating" || r.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )
        )
      }, null, 2),
      ie("div", P({
        class: l(T)(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          r.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          r.variant === "floating" || r.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, r.$attrs), [
        ie("div", v0, [
          b(r.$slots, "default", { state: l(n) })
        ])
      ], 16)
    ], 8, f0));
  }
}), X_ = /* @__PURE__ */ y({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      "data-sidebar": "content",
      class: K(
        l(T)(
          "bg-sidebar flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          t.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Z_ = /* @__PURE__ */ y({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      "data-sidebar": "footer",
      class: K(l(T)("flex flex-col gap-2 p-2", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), ew = /* @__PURE__ */ y({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      "data-sidebar": "group",
      class: K(l(T)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), tw = /* @__PURE__ */ y({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), {
      "data-sidebar": "group-action",
      as: a.as,
      "as-child": a.asChild,
      class: K(
        l(T)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), aw = /* @__PURE__ */ y({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      "data-sidebar": "group-content",
      class: K(l(T)("w-full text-sm", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), nw = /* @__PURE__ */ y({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), {
      "data-sidebar": "group-label",
      as: a.as,
      "as-child": a.asChild,
      class: K(
        l(T)(
          "ring-sidebar-ring text-sidebar-foreground/70 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-none transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          t.class
        )
      )
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), ow = /* @__PURE__ */ y({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      "data-sidebar": "header",
      class: K(l(T)("flex flex-col gap-2 p-2", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), lw = /* @__PURE__ */ y({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(bb, {
      "data-sidebar": "input",
      class: K(
        l(T)(
          "focus-visible:ring-sidebar-ring bg-background h-8 w-full shadow-none focus-visible:ring-2",
          t.class
        )
      )
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), sw = /* @__PURE__ */ y({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("main", {
      class: K(
        l(T)(
          "bg-background relative flex min-h-svh flex-1 flex-col",
          "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          t.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), rw = /* @__PURE__ */ y({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("ul", {
      "data-sidebar": "menu",
      class: K(l(T)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), iw = /* @__PURE__ */ y({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(L), {
      "data-sidebar": "menu-action",
      class: K(
        l(T)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground text-sidebar-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          a.showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
          t.class
        )
      ),
      as: a.as,
      "as-child": a.asChild
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), dw = /* @__PURE__ */ y({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      "data-sidebar": "menu-badge",
      class: K(
        l(T)(
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
      b(a.$slots, "default")
    ], 2));
  }
}), m0 = /* @__PURE__ */ y({
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
    const o = ne(e, t);
    return (s, r) => (v(), h(l(Wh), H(j(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), h0 = /* @__PURE__ */ y({
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
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(Gh), null, {
      default: f(() => [
        B(l(jh), P({ ...l(s), ...r.$attrs }, {
          class: l(T)(
            "border-border bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md",
            a.class
          )
        }), {
          default: f(() => [
            b(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), uw = /* @__PURE__ */ y({
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
    return (a, n) => (v(), h(l(Ai), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), g0 = /* @__PURE__ */ y({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(Hh), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ms = /* @__PURE__ */ y({
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
    return (a, n) => (v(), h(l(L), P({
      "data-sidebar": "menu-button",
      "data-size": a.size,
      "data-active": a.isActive,
      class: l(T)(l(_0)({ variant: a.variant, size: a.size }), t.class),
      as: a.as,
      "as-child": a.asChild
    }, a.$attrs), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), cw = /* @__PURE__ */ y({
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
    const t = e, { isMobile: a, state: n } = qn(), o = $(() => {
      const { tooltip: s, ...r } = t;
      return r;
    });
    return (s, r) => s.tooltip ? (v(), h(l(m0), { key: 1 }, {
      default: f(() => [
        B(l(g0), { "as-child": "" }, {
          default: f(() => [
            B(Ms, H(j({ ...o.value, ...s.$attrs })), {
              default: f(() => [
                b(s.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        B(l(h0), {
          side: "right",
          align: "center",
          hidden: l(n) !== "collapsed" || l(a)
        }, {
          default: f(() => [
            typeof s.tooltip == "string" ? (v(), F(Q, { key: 0 }, [
              J(X(s.tooltip), 1)
            ], 64)) : (v(), h(Be(s.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (v(), h(Ms, H(P({ key: 0 }, { ...o.value, ...s.$attrs })), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pw = /* @__PURE__ */ y({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("li", {
      "data-sidebar": "menu-item",
      class: K(l(T)("group/menu-item relative", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ts = /* @__PURE__ */ y({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("div", {
      class: K(l(T)("bg-skeleton animate-pulse rounded-md", t.class))
    }, null, 2));
  }
}), fw = /* @__PURE__ */ y({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (n, o) => (v(), F("div", {
      "data-sidebar": "menu-skeleton",
      class: K(l(T)("flex h-8 items-center gap-2 rounded-md px-2", t.class))
    }, [
      n.showIcon ? (v(), h(Ts, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : ee("", !0),
      B(Ts, {
        class: "h-4 max-w-[--skeleton-width] flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: Ot({ "--skeleton-width": a.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), vw = /* @__PURE__ */ y({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), F("ul", {
      "data-sidebar": "menu-badge",
      class: K(
        l(T)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), mw = /* @__PURE__ */ y({
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
    return (a, n) => (v(), h(l(L), {
      "data-sidebar": "menu-sub-button",
      as: a.as,
      "as-child": a.asChild,
      "data-size": a.size,
      "data-active": a.isActive,
      class: K(
        l(T)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground text-sidebar-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          a.size === "sm" && "text-xs",
          a.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), y0 = {};
function b0(e, t) {
  return v(), F("li", null, [
    b(e.$slots, "default")
  ]);
}
const hw = /* @__PURE__ */ Qa(y0, [["render", b0]]), gw = /* @__PURE__ */ y({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Zi("(max-width: 768px)"), s = A(!1), r = Fl(a, "open", n, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function i(p) {
      r.value = p, document.cookie = `${l0}=${r.value}; path=/; max-age=${s0}`;
    }
    function d(p) {
      s.value = p;
    }
    function u() {
      return o.value ? d(!s.value) : i(!r.value);
    }
    Pn("keydown", (p) => {
      p.key === u0 && (p.metaKey || p.ctrlKey) && (p.preventDefault(), u());
    });
    const c = $(() => r.value ? "expanded" : "collapsed");
    return c0({
      state: c,
      open: r,
      setOpen: i,
      isMobile: o,
      openMobile: s,
      setOpenMobile: d,
      toggleSidebar: u
    }), (p, _) => (v(), h(l(Ai), { "delay-duration": 0 }, {
      default: f(() => [
        ie("div", P({
          style: {
            "--sidebar-width": l(r0),
            "--sidebar-width-icon": l(d0)
          },
          class: l(T)(
            "group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-auto",
            a.class
          )
        }, p.$attrs), [
          b(p.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), yw = /* @__PURE__ */ y({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: a } = qn();
    return (n, o) => (v(), F("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: K(
        l(T)(
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          t.class
        )
      ),
      onClick: o[0] || (o[0] = //@ts-ignore
      (...s) => l(a) && l(a)(...s))
    }, [
      b(n.$slots, "default")
    ], 2));
  }
}), bw = /* @__PURE__ */ y({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(t0, {
      "data-sidebar": "separator",
      class: K(l(T)("bg-sidebar-border mx-2 w-auto", t.class))
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _w = /* @__PURE__ */ y({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: a } = qn();
    return (n, o) => (v(), h(Ye, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: K(l(T)("h-7 w-7", t.class)),
      onClick: l(a)
    }, {
      default: f(() => [
        B(l(Lg)),
        o[0] || (o[0] = ie("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1,
      __: [0]
    }, 8, ["class", "onClick"]));
  }
}), _0 = $a(
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
), ww = /* @__PURE__ */ y({
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
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(dh), P({
      class: l(T)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        a.class
      )
    }, l(s)), {
      default: f(() => [
        B(l(ph), { class: "bg-accent relative h-2 w-full grow overflow-hidden rounded-full data-[orientation=vertical]:w-2" }, {
          default: f(() => [
            B(l(fh), { class: "bg-primary absolute h-full data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (v(!0), F(Q, null, fe(r.modelValue, (d, u) => (v(), h(l(ch), {
          key: u,
          class: "border-primary bg-primary ring-offset-background focus-visible:ring-ring block size-5 rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), w0 = 5, x0 = 5e6, pt = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let mo = 0;
function $0() {
  return mo = (mo + 1) % Number.MAX_VALUE, mo.toString();
}
const ho = /* @__PURE__ */ new Map();
function Is(e) {
  if (ho.has(e)) return;
  const t = setTimeout(() => {
    ho.delete(e), Aa({
      type: pt.REMOVE_TOAST,
      toastId: e
    });
  }, x0);
  ho.set(e, t);
}
const ze = A({
  toasts: []
});
function Aa(e) {
  switch (e.type) {
    case pt.ADD_TOAST:
      ze.value.toasts = [e.toast, ...ze.value.toasts].slice(0, w0);
      break;
    case pt.UPDATE_TOAST:
      ze.value.toasts = ze.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case pt.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? Is(t) : ze.value.toasts.forEach((a) => {
        Is(a.id);
      }), ze.value.toasts = ze.value.toasts.map(
        (a) => a.id === t || t === void 0 ? {
          ...a,
          open: !1
        } : a
      );
      break;
    }
    case pt.REMOVE_TOAST:
      e.toastId === void 0 ? ze.value.toasts = [] : ze.value.toasts = ze.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function C0() {
  return {
    toasts: $(() => ze.value.toasts),
    toast: k0,
    dismiss: (e) => Aa({ type: pt.DISMISS_TOAST, toastId: e })
  };
}
function k0(e) {
  const t = $0(), a = (o) => Aa({
    type: pt.UPDATE_TOAST,
    toast: { ...o, id: t }
  }), n = () => Aa({ type: pt.DISMISS_TOAST, toastId: t });
  return Aa({
    type: pt.ADD_TOAST,
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
const B0 = { class: "flex gap-3" }, D0 = { class: "grid gap-1" }, xw = /* @__PURE__ */ y({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = C0();
    return (a, n) => (v(), h(l(A0), null, {
      default: f(() => [
        (v(!0), F(Q, null, fe(l(t), (o) => (v(), h(l(S0), P({
          key: o.id,
          ref_for: !0
        }, o, { class: "my-1" }), {
          default: f(() => [
            ie("div", B0, [
              (v(), h(Be(o.icon), {
                class: K(l(T)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              ie("div", D0, [
                o.title ? (v(), h(l(O0), { key: 0 }, {
                  default: f(() => [
                    J(X(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : ee("", !0),
                o.description ? (v(), F(Q, { key: 1 }, [
                  $d(o.description) ? (v(), h(l(Vs), { key: 0 }, {
                    default: f(() => [
                      (v(), h(Be(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (v(), h(l(Vs), { key: 1 }, {
                    default: f(() => [
                      J(X(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : ee("", !0),
                B(l(E0))
              ]),
              (v(), h(Be(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        B(l(P0))
      ]),
      _: 1
    }));
  }
}), S0 = /* @__PURE__ */ y({
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
    }), s = ne(o, n);
    return (r, i) => (v(), h(l(Vh), P(l(s), {
      class: l(T)(l(M0)({ variant: r.variant }), a.class),
      "onUpdate:open": r.onOpenChange
    }), {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), P0 = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(l(Fh), P(a.value, {
      class: l(T)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), $w = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(l(Rh), H(j(a.value)), {
      default: f(() => [
        B(l(Ye), {
          variant: n.variant,
          class: K(t.class)
        }, {
          default: f(() => [
            b(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["variant", "class"])
      ]),
      _: 3
    }, 16));
  }
}), E0 = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(l(Ei), P(a.value, {
      class: l(T)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: f(() => [
        B(l(Gn), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), O0 = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(l(Lh), P(a.value, {
      class: l(T)("text-sm font-semibold", t.class)
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vs = /* @__PURE__ */ y({
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
    return (n, o) => (v(), h(l(Nh), P({
      class: l(T)("text-sm opacity-90", t.class)
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), A0 = /* @__PURE__ */ y({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), h(l(Bh), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), M0 = $a(
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
  z0 as Accordion,
  U0 as AccordionContent,
  W0 as AccordionItem,
  H0 as AccordionTrigger,
  K0 as Badge,
  Mt as Base,
  Ly as BaseDropdownMenuItem,
  j0 as Breadcrumb,
  G0 as BreadcrumbEllipsis,
  q0 as BreadcrumbItem,
  Y0 as BreadcrumbLink,
  J0 as BreadcrumbList,
  Q0 as BreadcrumbPage,
  X0 as BreadcrumbSeparator,
  Ye as Button,
  l_ as Calendar,
  zi as CalendarCell,
  Ui as CalendarCellTrigger,
  Wi as CalendarGrid,
  Hi as CalendarGridBody,
  Ki as CalendarGridHead,
  Sn as CalendarGridRow,
  ji as CalendarHeadCell,
  Gi as CalendarHeader,
  qi as CalendarHeading,
  jg as CalendarNextButton,
  Gg as CalendarPrevButton,
  ky as CalendarWithSelect,
  Z0 as Card,
  n_ as CardContent,
  a_ as CardDescription,
  o_ as CardFooter,
  e_ as CardHeader,
  t_ as CardTitle,
  jy as CharacterCount,
  S_ as Checkbox,
  I_ as CollapsibleTableRow,
  P_ as Combobox,
  td as Command,
  p_ as CommandDialog,
  Oy as CommandEmpty,
  Ay as CommandGroup,
  Ty as CommandInput,
  Iy as CommandItem,
  Ry as CommandList,
  f_ as CommandSeparator,
  v_ as CommandShortcut,
  E_ as DatePicker,
  Jy as Description,
  ad as Dialog,
  u_ as DialogClose,
  nd as DialogContent,
  Py as DialogDescription,
  Ey as DialogFooter,
  Dy as DialogHeader,
  c_ as DialogScrollContent,
  Sy as DialogTitle,
  By as DialogTrigger,
  Fy as DropdownMenu,
  y_ as DropdownMenuCheckboxItem,
  zy as DropdownMenuContent,
  m_ as DropdownMenuGroup,
  g_ as DropdownMenuItem,
  x_ as DropdownMenuLabel,
  Uy as DropdownMenuLink,
  Dv as DropdownMenuPortal,
  h_ as DropdownMenuRadioGroup,
  b_ as DropdownMenuRadioItem,
  w_ as DropdownMenuSeparator,
  __ as DropdownMenuShortcut,
  $_ as DropdownMenuSub,
  k_ as DropdownMenuSubContent,
  C_ as DropdownMenuSubTrigger,
  Ny as DropdownMenuTrigger,
  Xy as Error,
  B_ as Form,
  lb as FormElement,
  D_ as FormGrid,
  O_ as ImageUpload,
  bb as Input,
  od as Label,
  F_ as LumuixDatatable,
  L_ as LumuixModal,
  T_ as LumuixModeToggle,
  N_ as LumuixPagination,
  W_ as LumuixTabs,
  Nv as Pagination,
  $b as PaginationDetails,
  Cb as PaginationEllipsis,
  kb as PaginationFirst,
  Bb as PaginationLast,
  jv as PaginationList,
  N0 as PaginationListItem,
  Db as PaginationNext,
  Sb as PaginationPrev,
  ld as Popover,
  rd as PopoverContent,
  sd as PopoverTrigger,
  H_ as RangeCalendar,
  Kb as RangeCalendarCell,
  jb as RangeCalendarCellTrigger,
  Gb as RangeCalendarGrid,
  qb as RangeCalendarGridBody,
  Yb as RangeCalendarGridHead,
  As as RangeCalendarGridRow,
  Jb as RangeCalendarHeadCell,
  Qb as RangeCalendarHeader,
  Xb as RangeCalendarHeading,
  Zb as RangeCalendarNextButton,
  e0 as RangeCalendarPrevButton,
  A_ as Select,
  Fo as SelectContent,
  s_ as SelectGroup,
  Lo as SelectItem,
  r_ as SelectItemText,
  i_ as SelectLabel,
  Io as SelectRoot,
  $y as SelectScrollDownButton,
  xy as SelectScrollUpButton,
  d_ as SelectSeparator,
  Ro as SelectTrigger,
  Vo as SelectValue,
  t0 as Separator,
  a0 as Sheet,
  K_ as SheetClose,
  n0 as SheetContent,
  j_ as SheetDescription,
  G_ as SheetFooter,
  q_ as SheetHeader,
  Y_ as SheetTitle,
  J_ as SheetTrigger,
  Q_ as Sidebar,
  X_ as SidebarContent,
  Z_ as SidebarFooter,
  ew as SidebarGroup,
  tw as SidebarGroupAction,
  aw as SidebarGroupContent,
  nw as SidebarGroupLabel,
  ow as SidebarHeader,
  lw as SidebarInput,
  sw as SidebarInset,
  rw as SidebarMenu,
  iw as SidebarMenuAction,
  dw as SidebarMenuBadge,
  cw as SidebarMenuButton,
  pw as SidebarMenuItem,
  fw as SidebarMenuSkeleton,
  vw as SidebarMenuSub,
  mw as SidebarMenuSubButton,
  hw as SidebarMenuSubItem,
  gw as SidebarProvider,
  yw as SidebarRail,
  bw as SidebarSeparator,
  _w as SidebarTrigger,
  Ts as Skeleton,
  ww as Slider,
  Wb as TabBaseContent,
  Eb as Table,
  Ob as TableBody,
  Tb as TableCaption,
  En as TableCell,
  R_ as TableEmpty,
  V_ as TableFooter,
  Ab as TableHead,
  Mb as TableHeader,
  Fa as TableRow,
  No as TableRowAction,
  U_ as TabsContent,
  Lb as TabsItem,
  Os as TabsList,
  Fb as TabsRoot,
  z_ as TabsTrigger,
  M_ as TextArea,
  S0 as Toast,
  $w as ToastAction,
  E0 as ToastClose,
  Vs as ToastDescription,
  A0 as ToastProvider,
  O0 as ToastTitle,
  P0 as ToastViewport,
  xw as Toaster,
  wb as Toggle,
  m0 as Tooltip,
  h0 as TooltipContent,
  uw as TooltipProvider,
  g0 as TooltipTrigger,
  Wg as badgeVariants,
  Gt as buttonVariants,
  I0 as preset,
  o0 as sheetVariants,
  _0 as sidebarMenuButtonVariants,
  Hg as spinnerSize,
  k0 as toast,
  M0 as toastVariants,
  qn as useSidebar,
  C0 as useToast
};
