import * as Il from "vue";
import { computed as $, ref as A, shallowRef as Fo, watch as te, getCurrentScope as Lo, onScopeDispose as No, shallowReadonly as Gt, unref as l, defineComponent as y, toRefs as me, createBlock as g, openBlock as v, withCtx as f, renderSlot as b, getCurrentInstance as at, toRef as Os, camelize as As, withKeys as Ke, h as Ze, onMounted as ce, createElementVNode as re, toDisplayString as Q, normalizeProps as H, guardReactiveProps as W, createTextVNode as q, mergeProps as P, withModifiers as Ce, createCommentVNode as Z, createElementBlock as F, Fragment as J, renderList as fe, resolveDynamicComponent as Ae, createVNode as D, useSlots as Ms, onBeforeMount as rd, Teleport as Sn, watchEffect as be, onBeforeUnmount as zo, nextTick as le, withDirectives as ua, vShow as Uo, watchSyncEffect as id, isRef as ca, inject as Ts, provide as Is, toHandlers as dd, normalizeStyle as Et, toHandlerKey as ud, Comment as Vs, cloneVNode as cd, vModelSelect as pd, onBeforeUpdate as fd, onUpdated as vd, markRaw as md, onUnmounted as Ot, readonly as Ra, toRaw as hd, reactive as Rs, customRef as Fs, mergeDefaults as Ls, watchPostEffect as gd, effectScope as Ns, normalizeClass as K, mergeModels as fo, useModel as zs, vModelDynamic as yd, vModelText as bd, isVNode as _d } from "vue";
function wd(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Us = {}, Hs = {};
(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  function e(n, o) {
    return {
      handler: n,
      config: o
    };
  }
  e.withOptions = function(n, o = () => ({})) {
    const s = function(r) {
      return {
        __options: r,
        handler: n(r),
        config: o(r)
      };
    };
    return s.__isOptionsFunction = !0, s.__pluginFunction = n, s.__configFunction = o, s;
  };
  const a = e;
})(Hs);
(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const e = /* @__PURE__ */ a(Hs);
  function a(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const n = e.default;
})(Us);
let Yn = Us;
var xd = (Yn.__esModule ? Yn : { default: Yn }).default;
const $d = xd;
function Vl(t) {
  return Object.fromEntries(
    Object.entries(t).filter(([e]) => e !== "DEFAULT")
  );
}
var Cd = $d(
  ({ addUtilities: t, matchUtilities: e, theme: a }) => {
    t({
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
    }), e(
      {
        "fade-in": (n) => ({ "--tw-enter-opacity": n }),
        "fade-out": (n) => ({ "--tw-exit-opacity": n })
      },
      { values: a("animationOpacity") }
    ), e(
      {
        "zoom-in": (n) => ({ "--tw-enter-scale": n }),
        "zoom-out": (n) => ({ "--tw-exit-scale": n })
      },
      { values: a("animationScale") }
    ), e(
      {
        "spin-in": (n) => ({ "--tw-enter-rotate": n }),
        "spin-out": (n) => ({ "--tw-exit-rotate": n })
      },
      { values: a("animationRotate") }
    ), e(
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
    ), e(
      { duration: (n) => ({ animationDuration: n }) },
      { values: Vl(a("animationDuration")) }
    ), e(
      { delay: (n) => ({ animationDelay: n }) },
      { values: a("animationDelay") }
    ), e(
      { ease: (n) => ({ animationTimingFunction: n }) },
      { values: Vl(a("animationTimingFunction")) }
    ), t({
      ".running": { animationPlayState: "running" },
      ".paused": { animationPlayState: "paused" }
    }), e(
      { "fill-mode": (n) => ({ animationFillMode: n }) },
      { values: a("animationFillMode") }
    ), e(
      { direction: (n) => ({ animationDirection: n }) },
      { values: a("animationDirection") }
    ), e(
      { repeat: (n) => ({ animationIterationCount: n }) },
      { values: a("animationRepeat") }
    );
  },
  {
    theme: {
      extend: {
        animationDelay: ({ theme: t }) => ({
          ...t("transitionDelay")
        }),
        animationDuration: ({ theme: t }) => ({
          0: "0ms",
          ...t("transitionDuration")
        }),
        animationTimingFunction: ({ theme: t }) => ({
          ...t("transitionTimingFunction")
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
        animationOpacity: ({ theme: t }) => ({
          DEFAULT: 0,
          ...t("opacity")
        }),
        animationTranslate: ({ theme: t }) => ({
          DEFAULT: "100%",
          ...t("translate")
        }),
        animationScale: ({ theme: t }) => ({
          DEFAULT: 0,
          ...t("scale")
        }),
        animationRotate: ({ theme: t }) => ({
          DEFAULT: "30deg",
          ...t("rotate")
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
const kd = /* @__PURE__ */ wd(Cd), k0 = {
  safelist: ["dark"],
  darkMode: ["class"],
  plugins: [kd],
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
function Qt(t, e) {
  return t - e * Math.floor(t / e);
}
const Ks = 1721426;
function It(t, e, a, n) {
  e = Fa(t, e);
  let o = e - 1, s = -2;
  return a <= 2 ? s = 0 : kt(e) && (s = -1), Ks - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + s + n);
}
function kt(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Fa(t, e) {
  return t === "BC" ? 1 - e : e;
}
function Pn(t) {
  let e = "AD";
  return t <= 0 && (e = "BC", t = 1 - t), [
    e,
    t
  ];
}
const Bd = {
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
class We {
  fromJulianDay(e) {
    let a = e, n = a - Ks, o = Math.floor(n / 146097), s = Qt(n, 146097), r = Math.floor(s / 36524), i = Qt(s, 36524), d = Math.floor(i / 1461), u = Qt(i, 1461), c = Math.floor(u / 365), p = o * 400 + r * 100 + d * 4 + c + (r !== 4 && c !== 4 ? 1 : 0), [_, m] = Pn(p), w = a - It(_, m, 1, 1), h = 2;
    a < It(_, m, 3, 1) ? h = 0 : kt(m) && (h = 1);
    let x = Math.floor(((w + h) * 12 + 373) / 367), C = a - It(_, m, x, 1) + 1;
    return new _e(_, m, x, C);
  }
  toJulianDay(e) {
    return It(e.era, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    return Bd[kt(e.year) ? "leapyear" : "standard"][e.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(e) {
    return 12;
  }
  getDaysInYear(e) {
    return kt(e.year) ? 366 : 365;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearsInEra(e) {
    return 9999;
  }
  getEras() {
    return [
      "BC",
      "AD"
    ];
  }
  isInverseEra(e) {
    return e.era === "BC";
  }
  balanceDate(e) {
    e.year <= 0 && (e.era = e.era === "BC" ? "AD" : "BC", e.year = 1 - e.year);
  }
  constructor() {
    this.identifier = "gregory";
  }
}
const Dd = {
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
function Be(t, e) {
  return e = Pe(e, t.calendar), t.era === e.era && t.year === e.year && t.month === e.month && t.day === e.day;
}
function Ws(t, e) {
  return e = Pe(e, t.calendar), t = Rt(t), e = Rt(e), t.era === e.era && t.year === e.year && t.month === e.month;
}
function Xe(t, e) {
  return t.calendar.identifier === e.calendar.identifier && t.era === e.era && t.year === e.year && t.month === e.month && t.day === e.day;
}
function Rl(t, e) {
  return t = Rt(t), e = Rt(e), t.calendar.identifier === e.calendar.identifier && t.era === e.era && t.year === e.year && t.month === e.month;
}
function js(t, e) {
  return Be(t, vn(e));
}
function Gs(t, e, a) {
  let n = t.calendar.toJulianDay(t), o = Od(e), s = Math.ceil(n + 1 - o) % 7;
  return s < 0 && (s += 7), s;
}
function Sd(t) {
  return ut(Date.now(), t);
}
function vn(t) {
  return Td(Sd(t));
}
function Ys(t, e) {
  return t.calendar.toJulianDay(t) - e.calendar.toJulianDay(e);
}
function Pd(t, e) {
  return Fl(t) - Fl(e);
}
function Fl(t) {
  return t.hour * 36e5 + t.minute * 6e4 + t.second * 1e3 + t.millisecond;
}
let qn = null;
function vt() {
  return qn == null && (qn = new Intl.DateTimeFormat().resolvedOptions().timeZone), qn;
}
function Rt(t) {
  return t.subtract({
    days: t.day - 1
  });
}
function Ll(t) {
  return t.add({
    days: t.calendar.getDaysInMonth(t) - t.day
  });
}
const Nl = /* @__PURE__ */ new Map();
function Ed(t) {
  if (Intl.Locale) {
    let a = Nl.get(t);
    return a || (a = new Intl.Locale(t).maximize().region, a && Nl.set(t, a)), a;
  }
  let e = t.split("-")[1];
  return e === "u" ? void 0 : e;
}
function Od(t) {
  let e = Ed(t);
  return e && Dd[e] || 0;
}
function aa(t) {
  t = Pe(t, new We());
  let e = Fa(t.era, t.year);
  return qs(e, t.month, t.day, t.hour, t.minute, t.second, t.millisecond);
}
function qs(t, e, a, n, o, s, r) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, s, r), i.setUTCFullYear(t, e - 1, a), i.getTime();
}
function vo(t, e) {
  if (e === "UTC") return 0;
  if (t > 0 && e === vt()) return new Date(t).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: s, minute: r, second: i } = Js(t, e);
  return qs(a, n, o, s, r, i, 0) - Math.floor(t / 1e3) * 1e3;
}
const zl = /* @__PURE__ */ new Map();
function Js(t, e) {
  let a = zl.get(e);
  a || (a = new Intl.DateTimeFormat("en-US", {
    timeZone: e,
    hour12: !1,
    era: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }), zl.set(e, a));
  let n = a.formatToParts(new Date(t)), o = {};
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
const Ul = 864e5;
function Ad(t, e, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((s) => Md(t, e, s));
}
function Md(t, e, a) {
  let n = Js(a, e);
  return t.year === n.year && t.month === n.month && t.day === n.day && t.hour === n.hour && t.minute === n.minute && t.second === n.second;
}
function dt(t, e, a = "compatible") {
  let n = na(t);
  if (e === "UTC") return aa(n);
  if (e === vt() && a === "compatible") {
    n = Pe(n, new We());
    let d = /* @__PURE__ */ new Date(), u = Fa(n.era, n.year);
    return d.setFullYear(u, n.month - 1, n.day), d.setHours(n.hour, n.minute, n.second, n.millisecond), d.getTime();
  }
  let o = aa(n), s = vo(o - Ul, e), r = vo(o + Ul, e), i = Ad(n, e, o - s, o - r);
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
function Qs(t, e, a = "compatible") {
  return new Date(dt(t, e, a));
}
function ut(t, e) {
  let a = vo(t, e), n = new Date(t + a), o = n.getUTCFullYear(), s = n.getUTCMonth() + 1, r = n.getUTCDate(), i = n.getUTCHours(), d = n.getUTCMinutes(), u = n.getUTCSeconds(), c = n.getUTCMilliseconds();
  return new la(o < 1 ? "BC" : "AD", o < 1 ? -o + 1 : o, s, r, e, a, i, d, u, c);
}
function Td(t) {
  return new _e(t.calendar, t.era, t.year, t.month, t.day);
}
function na(t, e) {
  let a = 0, n = 0, o = 0, s = 0;
  if ("timeZone" in t) ({ hour: a, minute: n, second: o, millisecond: s } = t);
  else if ("hour" in t && !e) return t;
  return e && ({ hour: a, minute: n, second: o, millisecond: s } = e), new oa(t.calendar, t.era, t.year, t.month, t.day, a, n, o, s);
}
function Pe(t, e) {
  if (t.calendar.identifier === e.identifier) return t;
  let a = e.fromJulianDay(t.calendar.toJulianDay(t)), n = t.copy();
  return n.calendar = e, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, Ft(n), n;
}
function Id(t, e, a) {
  if (t instanceof la)
    return t.timeZone === e ? t : Rd(t, e);
  let n = dt(t, e, a);
  return ut(n, e);
}
function Vd(t) {
  let e = aa(t) - t.offset;
  return new Date(e);
}
function Rd(t, e) {
  let a = aa(t) - t.offset;
  return Pe(ut(a, e), t.calendar);
}
const Ba = 36e5;
function En(t, e) {
  let a = t.copy(), n = "hour" in a ? zd(a, e) : 0;
  mo(a, e.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, t), a.month += e.months || 0, ho(a), Xs(a), a.day += (e.weeks || 0) * 7, a.day += e.days || 0, a.day += n, Fd(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
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
function mo(t, e) {
  var a, n;
  !((a = (n = t.calendar).isInverseEra) === null || a === void 0) && a.call(n, t) && (e = -e), t.year += e;
}
function ho(t) {
  for (; t.month < 1; )
    mo(t, -1), t.month += t.calendar.getMonthsInYear(t);
  let e = 0;
  for (; t.month > (e = t.calendar.getMonthsInYear(t)); )
    t.month -= e, mo(t, 1);
}
function Fd(t) {
  for (; t.day < 1; )
    t.month--, ho(t), t.day += t.calendar.getDaysInMonth(t);
  for (; t.day > t.calendar.getDaysInMonth(t); )
    t.day -= t.calendar.getDaysInMonth(t), t.month++, ho(t);
}
function Xs(t) {
  t.month = Math.max(1, Math.min(t.calendar.getMonthsInYear(t), t.month)), t.day = Math.max(1, Math.min(t.calendar.getDaysInMonth(t), t.day));
}
function Ft(t) {
  t.calendar.constrainDate && t.calendar.constrainDate(t), t.year = Math.max(1, Math.min(t.calendar.getYearsInEra(t), t.year)), Xs(t);
}
function Zs(t) {
  let e = {};
  for (let a in t) typeof t[a] == "number" && (e[a] = -t[a]);
  return e;
}
function er(t, e) {
  return En(t, Zs(e));
}
function Ho(t, e) {
  let a = t.copy();
  return e.era != null && (a.era = e.era), e.year != null && (a.year = e.year), e.month != null && (a.month = e.month), e.day != null && (a.day = e.day), Ft(a), a;
}
function mn(t, e) {
  let a = t.copy();
  return e.hour != null && (a.hour = e.hour), e.minute != null && (a.minute = e.minute), e.second != null && (a.second = e.second), e.millisecond != null && (a.millisecond = e.millisecond), Nd(a), a;
}
function Ld(t) {
  t.second += Math.floor(t.millisecond / 1e3), t.millisecond = Ja(t.millisecond, 1e3), t.minute += Math.floor(t.second / 60), t.second = Ja(t.second, 60), t.hour += Math.floor(t.minute / 60), t.minute = Ja(t.minute, 60);
  let e = Math.floor(t.hour / 24);
  return t.hour = Ja(t.hour, 24), e;
}
function Nd(t) {
  t.millisecond = Math.max(0, Math.min(t.millisecond, 1e3)), t.second = Math.max(0, Math.min(t.second, 59)), t.minute = Math.max(0, Math.min(t.minute, 59)), t.hour = Math.max(0, Math.min(t.hour, 23));
}
function Ja(t, e) {
  let a = t % e;
  return a < 0 && (a += e), a;
}
function zd(t, e) {
  return t.hour += e.hours || 0, t.minute += e.minutes || 0, t.second += e.seconds || 0, t.millisecond += e.milliseconds || 0, Ld(t);
}
function Ko(t, e, a, n) {
  let o = t.copy();
  switch (e) {
    case "era": {
      let i = t.calendar.getEras(), d = i.indexOf(t.era);
      if (d < 0) throw new Error("Invalid era: " + t.era);
      d = ct(d, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[d], Ft(o);
      break;
    }
    case "year":
      var s, r;
      !((s = (r = o.calendar).isInverseEra) === null || s === void 0) && s.call(r, o) && (a = -a), o.year = ct(t.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, t);
      break;
    case "month":
      o.month = ct(t.month, a, 1, t.calendar.getMonthsInYear(t), n == null ? void 0 : n.round);
      break;
    case "day":
      o.day = ct(t.day, a, 1, t.calendar.getDaysInMonth(t), n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + e);
  }
  return t.calendar.balanceDate && t.calendar.balanceDate(o), Ft(o), o;
}
function tr(t, e, a, n) {
  let o = t.copy();
  switch (e) {
    case "hour": {
      let s = t.hour, r = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let d = s >= 12;
        r = d ? 12 : 0, i = d ? 23 : 11;
      }
      o.hour = ct(s, a, r, i, n == null ? void 0 : n.round);
      break;
    }
    case "minute":
      o.minute = ct(t.minute, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "second":
      o.second = ct(t.second, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "millisecond":
      o.millisecond = ct(t.millisecond, a, 0, 999, n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + e);
  }
  return o;
}
function ct(t, e, a, n, o = !1) {
  if (o) {
    t += Math.sign(e), t < a && (t = n);
    let s = Math.abs(e);
    e > 0 ? t = Math.ceil(t / s) * s : t = Math.floor(t / s) * s, t > n && (t = a);
  } else
    t += e, t < a ? t = n - (a - t - 1) : t > n && (t = a + (t - n - 1));
  return t;
}
function ar(t, e) {
  let a;
  if (e.years != null && e.years !== 0 || e.months != null && e.months !== 0 || e.weeks != null && e.weeks !== 0 || e.days != null && e.days !== 0) {
    let o = En(na(t), {
      years: e.years,
      months: e.months,
      weeks: e.weeks,
      days: e.days
    });
    a = dt(o, t.timeZone);
  } else
    a = aa(t) - t.offset;
  a += e.milliseconds || 0, a += (e.seconds || 0) * 1e3, a += (e.minutes || 0) * 6e4, a += (e.hours || 0) * 36e5;
  let n = ut(a, t.timeZone);
  return Pe(n, t.calendar);
}
function Ud(t, e) {
  return ar(t, Zs(e));
}
function Hd(t, e, a, n) {
  switch (e) {
    case "hour": {
      let o = 0, s = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let w = t.hour >= 12;
        o = w ? 12 : 0, s = w ? 23 : 11;
      }
      let r = na(t), i = Pe(mn(r, {
        hour: o
      }), new We()), d = [
        dt(i, t.timeZone, "earlier"),
        dt(i, t.timeZone, "later")
      ].filter((w) => ut(w, t.timeZone).day === i.day)[0], u = Pe(mn(r, {
        hour: s
      }), new We()), c = [
        dt(u, t.timeZone, "earlier"),
        dt(u, t.timeZone, "later")
      ].filter((w) => ut(w, t.timeZone).day === u.day).pop(), p = aa(t) - t.offset, _ = Math.floor(p / Ba), m = p % Ba;
      return p = ct(_, a, Math.floor(d / Ba), Math.floor(c / Ba), n == null ? void 0 : n.round) * Ba + m, Pe(ut(p, t.timeZone), t.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return tr(t, e, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = Ko(na(t), e, a, n), s = dt(o, t.timeZone);
      return Pe(ut(s, t.timeZone), t.calendar);
    }
    default:
      throw new Error("Unsupported field " + e);
  }
}
function Kd(t, e, a) {
  let n = na(t), o = mn(Ho(n, e), e);
  if (o.compare(n) === 0) return t;
  let s = dt(o, t.timeZone, a);
  return Pe(ut(s, t.timeZone), t.calendar);
}
function Wd(t) {
  return `${String(t.hour).padStart(2, "0")}:${String(t.minute).padStart(2, "0")}:${String(t.second).padStart(2, "0")}${t.millisecond ? String(t.millisecond / 1e3).slice(1) : ""}`;
}
function nr(t) {
  let e = Pe(t, new We()), a;
  return e.era === "BC" ? a = e.year === 1 ? "0000" : "-" + String(Math.abs(1 - e.year)).padStart(6, "00") : a = String(e.year).padStart(4, "0"), `${a}-${String(e.month).padStart(2, "0")}-${String(e.day).padStart(2, "0")}`;
}
function or(t) {
  return `${nr(t)}T${Wd(t)}`;
}
function jd(t) {
  let e = Math.sign(t) < 0 ? "-" : "+";
  t = Math.abs(t);
  let a = Math.floor(t / 36e5), n = t % 36e5 / 6e4;
  return `${e}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function Gd(t) {
  return `${or(t)}${jd(t.offset)}[${t.timeZone}]`;
}
function Yd(t, e) {
  if (e.has(t))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Wo(t, e, a) {
  Yd(t, e), e.set(t, a);
}
function jo(t) {
  let e = typeof t[0] == "object" ? t.shift() : new We(), a;
  if (typeof t[0] == "string") a = t.shift();
  else {
    let r = e.getEras();
    a = r[r.length - 1];
  }
  let n = t.shift(), o = t.shift(), s = t.shift();
  return [
    e,
    a,
    n,
    o,
    s
  ];
}
var qd = /* @__PURE__ */ new WeakMap();
class _e {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new _e(this.calendar, this.era, this.year, this.month, this.day) : new _e(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(e) {
    return En(this, e);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(e) {
    return er(this, e);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e) {
    return Ho(this, e);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    return Ko(this, e, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(e) {
    return Qs(this, e);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return nr(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return Ys(this, e);
  }
  constructor(...e) {
    Wo(this, qd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = jo(e);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, Ft(this);
  }
}
var Jd = /* @__PURE__ */ new WeakMap();
class oa {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new oa(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new oa(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(e) {
    return En(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return er(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e) {
    return Ho(mn(this, e), e);
  }
  /**
  * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    switch (e) {
      case "era":
      case "year":
      case "month":
      case "day":
        return Ko(this, e, a, n);
      default:
        return tr(this, e, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(e, a) {
    return Qs(this, e, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return or(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    let a = Ys(this, e);
    return a === 0 ? Pd(this, na(e)) : a;
  }
  constructor(...e) {
    Wo(this, Jd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = jo(e);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Ft(this);
  }
}
var Qd = /* @__PURE__ */ new WeakMap();
class la {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new la(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new la(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(e) {
    return ar(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return Ud(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e, a) {
    return Kd(this, e, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    return Hd(this, e, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return Vd(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return Gd(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return this.toDate().getTime() - Id(e, this.timeZone).toDate().getTime();
  }
  constructor(...e) {
    Wo(this, Qd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = jo(e), i = e.shift(), d = e.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.timeZone = i, this.offset = d, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Ft(this);
  }
}
const Xt = [
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
], Xd = [
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
], dn = [
  1867,
  1911,
  1925,
  1988,
  2018
], Ct = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function Hl(t) {
  const e = Xt.findIndex(([a, n, o]) => t.year < a || t.year === a && t.month < n || t.year === a && t.month === n && t.day < o);
  return e === -1 ? Xt.length - 1 : e === 0 ? 0 : e - 1;
}
function Jn(t) {
  let e = dn[Ct.indexOf(t.era)];
  if (!e) throw new Error("Unknown era: " + t.era);
  return new _e(t.year + e, t.month, t.day);
}
class Zd extends We {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = Hl(a);
    return new _e(this, Ct[n], a.year - dn[n], a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(Jn(e));
  }
  balanceDate(e) {
    let a = Jn(e), n = Hl(a);
    Ct[n] !== e.era && (e.era = Ct[n], e.year = a.year - dn[n]), this.constrainDate(e);
  }
  constrainDate(e) {
    let a = Ct.indexOf(e.era), n = Xd[a];
    if (n != null) {
      let [o, s, r] = n, i = o - dn[a];
      e.year = Math.max(1, Math.min(i, e.year)), e.year === i && (e.month = Math.min(s, e.month), e.month === s && (e.day = Math.min(r, e.day)));
    }
    if (e.year === 1 && a >= 0) {
      let [, o, s] = Xt[a];
      e.month = Math.max(o, e.month), e.month === o && (e.day = Math.max(s, e.day));
    }
  }
  getEras() {
    return Ct;
  }
  getYearsInEra(e) {
    let a = Ct.indexOf(e.era), n = Xt[a], o = Xt[a + 1];
    if (o == null)
      return 9999 - n[0] + 1;
    let s = o[0] - n[0];
    return (e.month < o[1] || e.month === o[1] && e.day < o[2]) && s++, s;
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(Jn(e));
  }
  getMinimumMonthInYear(e) {
    let a = Kl(e);
    return a ? a[1] : 1;
  }
  getMinimumDayInMonth(e) {
    let a = Kl(e);
    return a && e.month === a[1] ? a[2] : 1;
  }
  constructor(...e) {
    super(...e), this.identifier = "japanese";
  }
}
function Kl(t) {
  if (t.year === 1) {
    let e = Ct.indexOf(t.era);
    return Xt[e];
  }
}
const lr = -543;
class eu extends We {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = Fa(a.era, a.year);
    return new _e(this, n - lr, a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(Wl(e));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(Wl(e));
  }
  balanceDate() {
  }
  constructor(...e) {
    super(...e), this.identifier = "buddhist";
  }
}
function Wl(t) {
  let [e, a] = Pn(t.year + lr);
  return new _e(e, a, t.month, t.day);
}
const hn = 1911;
function sr(t) {
  return t.era === "minguo" ? t.year + hn : 1 - t.year + hn;
}
function jl(t) {
  let e = t - hn;
  return e > 0 ? [
    "minguo",
    e
  ] : [
    "before_minguo",
    1 - e
  ];
}
class tu extends We {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = Fa(a.era, a.year), [o, s] = jl(n);
    return new _e(this, o, s, a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(Gl(e));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(e) {
    let [a, n] = jl(sr(e));
    e.era = a, e.year = n;
  }
  isInverseEra(e) {
    return e.era === "before_minguo";
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(Gl(e));
  }
  getYearsInEra(e) {
    return e.era === "before_minguo" ? 9999 : 9999 - hn;
  }
  constructor(...e) {
    super(...e), this.identifier = "roc";
  }
}
function Gl(t) {
  let [e, a] = Pn(sr(t));
  return new _e(e, a, t.month, t.day);
}
const Yl = 1948320, ql = [
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
class au {
  fromJulianDay(e) {
    let a = e - Yl, n = 1 + Math.floor((33 * a + 3) / 12053), o = 365 * (n - 1) + Math.floor((8 * n + 21) / 33), s = a - o, r = s < 216 ? Math.floor(s / 31) : Math.floor((s - 6) / 30), i = s - ql[r] + 1;
    return new _e(this, n, r + 1, i);
  }
  toJulianDay(e) {
    let a = Yl - 1 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
    return a += ql[e.month - 1], a += e.day, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(e) {
    return e.month <= 6 ? 31 : e.month <= 11 || Qt(25 * e.year + 11, 33) < 8 ? 30 : 29;
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
const Qn = 78, Jl = 80;
class nu extends We {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = a.year - Qn, o = e - It(a.era, a.year, 1, 1), s;
    o < Jl ? (n--, s = kt(a.year - 1) ? 31 : 30, o += s + 155 + 90 + 10) : (s = kt(a.year) ? 31 : 30, o -= Jl);
    let r, i;
    if (o < s)
      r = 1, i = o + 1;
    else {
      let d = o - s;
      d < 155 ? (r = Math.floor(d / 31) + 2, i = d % 31 + 1) : (d -= 155, r = Math.floor(d / 30) + 7, i = d % 30 + 1);
    }
    return new _e(this, n, r, i);
  }
  toJulianDay(e) {
    let a = e.year + Qn, [n, o] = Pn(a), s, r;
    return kt(o) ? (s = 31, r = It(n, o, 3, 21)) : (s = 30, r = It(n, o, 3, 22)), e.month === 1 ? r + e.day - 1 : (r += s + Math.min(e.month - 2, 5) * 31, e.month >= 8 && (r += (e.month - 7) * 30), r += e.day - 1, r);
  }
  getDaysInMonth(e) {
    return e.month === 1 && kt(e.year + Qn) || e.month >= 2 && e.month <= 6 ? 31 : 30;
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
  constructor(...e) {
    super(...e), this.identifier = "indian";
  }
}
const gn = 1948440, Ql = 1948439, Re = 1300, Yt = 1600, ou = 460322;
function yn(t, e, a, n) {
  return n + Math.ceil(29.5 * (a - 1)) + (e - 1) * 354 + Math.floor((3 + 11 * e) / 30) + t - 1;
}
function rr(t, e, a) {
  let n = Math.floor((30 * (a - e) + 10646) / 10631), o = Math.min(12, Math.ceil((a - (29 + yn(e, n, 1, 1))) / 29.5) + 1), s = a - yn(e, n, o, 1) + 1;
  return new _e(t, n, o, s);
}
function Xl(t) {
  return (14 + 11 * t) % 30 < 11;
}
class Go {
  fromJulianDay(e) {
    return rr(this, gn, e);
  }
  toJulianDay(e) {
    return yn(gn, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    let a = 29 + e.month % 2;
    return e.month === 12 && Xl(e.year) && a++, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(e) {
    return Xl(e.year) ? 355 : 354;
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
class lu extends Go {
  fromJulianDay(e) {
    return rr(this, Ql, e);
  }
  toJulianDay(e) {
    return yn(Ql, e.year, e.month, e.day);
  }
  constructor(...e) {
    super(...e), this.identifier = "islamic-tbla";
  }
}
const su = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let go, Zt;
function un(t) {
  return ou + Zt[t - Re];
}
function Pa(t, e) {
  let a = t - Re, n = 1 << 11 - (e - 1);
  return go[a] & n ? 30 : 29;
}
function Zl(t, e) {
  let a = un(t);
  for (let n = 1; n < e; n++) a += Pa(t, n);
  return a;
}
function es(t) {
  return Zt[t + 1 - Re] - Zt[t - Re];
}
class ru extends Go {
  fromJulianDay(e) {
    let a = e - gn, n = un(Re), o = un(Yt);
    if (a < n || a > o) return super.fromJulianDay(e);
    {
      let s = Re - 1, r = 1, i = 1;
      for (; i > 0; ) {
        s++, i = a - un(s) + 1;
        let d = es(s);
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
      return new _e(this, s, r, a - Zl(s, r) + 1);
    }
  }
  toJulianDay(e) {
    return e.year < Re || e.year > Yt ? super.toJulianDay(e) : gn + Zl(e.year, e.month) + (e.day - 1);
  }
  getDaysInMonth(e) {
    return e.year < Re || e.year > Yt ? super.getDaysInMonth(e) : Pa(e.year, e.month);
  }
  getDaysInYear(e) {
    return e.year < Re || e.year > Yt ? super.getDaysInYear(e) : es(e.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", go || (go = new Uint16Array(Uint8Array.from(atob(su), (e) => e.charCodeAt(0)).buffer)), !Zt) {
      Zt = new Uint32Array(Yt - Re + 1);
      let e = 0;
      for (let a = Re; a <= Yt; a++) {
        Zt[a - Re] = e;
        for (let n = 1; n <= 12; n++) e += Pa(a, n);
      }
    }
  }
}
const ts = 347997, ir = 1080, dr = 24 * ir, iu = 29, du = 12 * ir + 793, uu = iu * dr + du;
function Tt(t) {
  return Qt(t * 7 + 1, 19) < 7;
}
function cn(t) {
  let e = Math.floor((235 * t - 234) / 19), a = 12084 + 13753 * e, n = e * 29 + Math.floor(a / 25920);
  return Qt(3 * (n + 1), 7) < 3 && (n += 1), n;
}
function cu(t) {
  let e = cn(t - 1), a = cn(t);
  return cn(t + 1) - a === 356 ? 2 : a - e === 382 ? 1 : 0;
}
function Oa(t) {
  return cn(t) + cu(t);
}
function ur(t) {
  return Oa(t + 1) - Oa(t);
}
function pu(t) {
  let e = ur(t);
  switch (e > 380 && (e -= 30), e) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function Qa(t, e) {
  if (e >= 6 && !Tt(t) && e++, e === 4 || e === 7 || e === 9 || e === 11 || e === 13) return 29;
  let a = pu(t);
  return e === 2 ? a === 2 ? 30 : 29 : e === 3 ? a === 0 ? 29 : 30 : e === 6 ? Tt(t) ? 30 : 0 : 30;
}
class fu {
  fromJulianDay(e) {
    let a = e - ts, n = a * dr / uu, o = Math.floor((19 * n + 234) / 235) + 1, s = Oa(o), r = Math.floor(a - s);
    for (; r < 1; )
      o--, s = Oa(o), r = Math.floor(a - s);
    let i = 1, d = 0;
    for (; d < r; )
      d += Qa(o, i), i++;
    i--, d -= Qa(o, i);
    let u = r - d;
    return new _e(this, o, i, u);
  }
  toJulianDay(e) {
    let a = Oa(e.year);
    for (let n = 1; n < e.month; n++) a += Qa(e.year, n);
    return a + e.day + ts;
  }
  getDaysInMonth(e) {
    return Qa(e.year, e.month);
  }
  getMonthsInYear(e) {
    return Tt(e.year) ? 13 : 12;
  }
  getDaysInYear(e) {
    return ur(e.year);
  }
  getYearsInEra() {
    return 9999;
  }
  getEras() {
    return [
      "AM"
    ];
  }
  balanceYearMonth(e, a) {
    a.year !== e.year && (Tt(a.year) && !Tt(e.year) && a.month > 6 ? e.month-- : !Tt(a.year) && Tt(e.year) && a.month > 6 && e.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const yo = 1723856, as = 1824665, bo = 5500;
function bn(t, e, a, n) {
  return t + 365 * e + Math.floor(e / 4) + 30 * (a - 1) + n - 1;
}
function Yo(t, e) {
  let a = Math.floor(4 * (e - t) / 1461), n = 1 + Math.floor((e - bn(t, a, 1, 1)) / 30), o = e + 1 - bn(t, a, n, 1);
  return [
    a,
    n,
    o
  ];
}
function cr(t) {
  return Math.floor(t % 4 / 3);
}
function pr(t, e) {
  return e % 13 !== 0 ? 30 : cr(t) + 5;
}
class qo {
  fromJulianDay(e) {
    let [a, n, o] = Yo(yo, e), s = "AM";
    return a <= 0 && (s = "AA", a += bo), new _e(this, s, a, n, o);
  }
  toJulianDay(e) {
    let a = e.year;
    return e.era === "AA" && (a -= bo), bn(yo, a, e.month, e.day);
  }
  getDaysInMonth(e) {
    return pr(e.year, e.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(e) {
    return 365 + cr(e.year);
  }
  getYearsInEra(e) {
    return e.era === "AA" ? 9999 : 9991;
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
class vu extends qo {
  fromJulianDay(e) {
    let [a, n, o] = Yo(yo, e);
    return a += bo, new _e(this, "AA", a, n, o);
  }
  getEras() {
    return [
      "AA"
    ];
  }
  getYearsInEra() {
    return 9999;
  }
  constructor(...e) {
    super(...e), this.identifier = "ethioaa";
  }
}
class mu extends qo {
  fromJulianDay(e) {
    let [a, n, o] = Yo(as, e), s = "CE";
    return a <= 0 && (s = "BCE", a = 1 - a), new _e(this, s, a, n, o);
  }
  toJulianDay(e) {
    let a = e.year;
    return e.era === "BCE" && (a = 1 - a), bn(as, a, e.month, e.day);
  }
  getDaysInMonth(e) {
    let a = e.year;
    return e.era === "BCE" && (a = 1 - a), pr(a, e.month);
  }
  isInverseEra(e) {
    return e.era === "BCE";
  }
  balanceDate(e) {
    e.year <= 0 && (e.era = e.era === "BCE" ? "CE" : "BCE", e.year = 1 - e.year);
  }
  getEras() {
    return [
      "BCE",
      "CE"
    ];
  }
  getYearsInEra(e) {
    return e.era === "BCE" ? 9999 : 9715;
  }
  constructor(...e) {
    super(...e), this.identifier = "coptic";
  }
}
function hu(t) {
  switch (t) {
    case "buddhist":
      return new eu();
    case "ethiopic":
      return new qo();
    case "ethioaa":
      return new vu();
    case "coptic":
      return new mu();
    case "hebrew":
      return new fu();
    case "indian":
      return new nu();
    case "islamic-civil":
      return new Go();
    case "islamic-tbla":
      return new lu();
    case "islamic-umalqura":
      return new ru();
    case "japanese":
      return new Zd();
    case "persian":
      return new au();
    case "roc":
      return new tu();
    case "gregory":
    default:
      return new We();
  }
}
let Xn = /* @__PURE__ */ new Map();
class Qe {
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(e) {
    return this.formatter.format(e);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */
  formatToParts(e) {
    return this.formatter.formatToParts(e);
  }
  /** Formats a date range as a string. */
  formatRange(e, a) {
    if (typeof this.formatter.formatRange == "function")
      return this.formatter.formatRange(e, a);
    if (a < e) throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(e)} – ${this.formatter.format(a)}`;
  }
  /** Formats a date range as an array of parts. */
  formatRangeToParts(e, a) {
    if (typeof this.formatter.formatRangeToParts == "function")
      return this.formatter.formatRangeToParts(e, a);
    if (a < e) throw new RangeError("End date must be >= start date");
    let n = this.formatter.formatToParts(e), o = this.formatter.formatToParts(a);
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
    let e = this.formatter.resolvedOptions();
    return bu() && (this.resolvedHourCycle || (this.resolvedHourCycle = _u(e.locale, this.options)), e.hourCycle = this.resolvedHourCycle, e.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), e.calendar === "ethiopic-amete-alem" && (e.calendar = "ethioaa"), e;
  }
  constructor(e, a = {}) {
    this.formatter = fr(e, a), this.options = a;
  }
}
const gu = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function fr(t, e = {}) {
  if (typeof e.hour12 == "boolean" && yu()) {
    e = {
      ...e
    };
    let o = gu[String(e.hour12)][t.split("-")[0]], s = e.hour12 ? "h12" : "h23";
    e.hourCycle = o ?? s, delete e.hour12;
  }
  let a = t + (e ? Object.entries(e).sort((o, s) => o[0] < s[0] ? -1 : 1).join() : "");
  if (Xn.has(a)) return Xn.get(a);
  let n = new Intl.DateTimeFormat(t, e);
  return Xn.set(a, n), n;
}
let Zn = null;
function yu() {
  return Zn == null && (Zn = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Zn;
}
let eo = null;
function bu() {
  return eo == null && (eo = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), eo;
}
function _u(t, e) {
  if (!e.timeStyle && !e.hour) return;
  t = t.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), t += (t.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = fr(t, {
    ...e,
    timeZone: void 0
    // use local timezone
  }), n = parseInt(a.formatToParts(new Date(2020, 2, 3, 0)).find((s) => s.type === "hour").value, 10), o = parseInt(a.formatToParts(new Date(2020, 2, 3, 23)).find((s) => s.type === "hour").value, 10);
  if (n === 0 && o === 23) return "h23";
  if (n === 24 && o === 23) return "h24";
  if (n === 0 && o === 11) return "h11";
  if (n === 12 && o === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
function wu(t, e) {
  const a = [];
  for (let n = 0; n < t.length; n += e)
    a.push(t.slice(n, n + e));
  return a;
}
function Fe(t, e = vt()) {
  return Jo(t) ? t.toDate() : t.toDate(e);
}
function xu(t) {
  return t instanceof oa;
}
function Jo(t) {
  return t instanceof la;
}
function $u(t) {
  return xu(t) || Jo(t);
}
function mt(t) {
  if (t instanceof Date) {
    const e = t.getFullYear(), a = t.getMonth() + 1;
    return new Date(e, a, 0).getDate();
  } else
    return t.set({ day: 100 }).day;
}
function Bt(t, e) {
  return t.compare(e) < 0;
}
function Ea(t, e) {
  return t.compare(e) > 0;
}
function Cu(t, e) {
  return t.compare(e) <= 0;
}
function ku(t, e) {
  return t.compare(e) >= 0;
}
function Bu(t, e, a) {
  return ku(t, e) && Cu(t, a);
}
function Du(t, e, a) {
  return Ea(t, e) && Bt(t, a);
}
function Su(t, e, a) {
  const n = Gs(t, a);
  return e > n ? t.subtract({ days: n + 7 - e }) : e === n ? t : t.subtract({ days: n - e });
}
function Pu(t, e, a) {
  const n = Gs(t, a), o = e === 0 ? 6 : e - 1;
  return n === o ? t : n > o ? t.add({ days: 7 - n + o }) : t.add({ days: o - n });
}
function Eu(t, e, a, n) {
  if (a === void 0 && n === void 0)
    return !0;
  let o = t.add({ days: 1 });
  if (n != null && n(o) || a != null && a(o))
    return !1;
  const s = e;
  for (; o.compare(s) < 0; )
    if (o = o.add({ days: 1 }), n != null && n(o) || a != null && a(o))
      return !1;
  return !0;
}
function ns(t, e) {
  const a = [];
  let n = t.add({ days: 1 });
  const o = e;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function to(t) {
  const { dateObj: e, weekStartsOn: a, fixedWeeks: n, locale: o } = t, s = mt(e), r = Array.from({ length: s }, (x, C) => e.set({ day: C + 1 })), i = Rt(e), d = Ll(e), u = Su(i, a, o), c = Pu(d, a, o), p = ns(u.subtract({ days: 1 }), i), _ = ns(d, c.add({ days: 1 })), m = p.length + r.length + _.length;
  if (n && m < 42) {
    const x = 42 - m;
    let C = _[_.length - 1];
    C || (C = Ll(e));
    const S = Array.from({ length: x }, (k, O) => {
      const E = O + 1;
      return C.add({ days: E });
    });
    _.push(...S);
  }
  const w = p.concat(r, _), h = wu(w, 7);
  return {
    value: e,
    cells: w,
    rows: h
  };
}
function Ou(t) {
  const { dateObj: e, startIndex: a, endIndex: n } = t, o = Array.from({ length: Math.abs(a ?? 0) + n }, (s, r) => r <= Math.abs(a ?? 0) ? e.subtract({ years: r }).set({ day: 1, month: 1 }) : e.add({ years: r - n }).set({ day: 1, month: 1 }));
  return o.sort((s, r) => s.year - r.year), o;
}
function Au(t) {
  const { dateObj: e, numberOfMonths: a = 1, pagedNavigation: n = !1 } = t;
  return a && n ? Array.from({ length: Math.floor(12 / a) }, (o, s) => Rt(e.set({ month: s * a + 1 }))) : Array.from({ length: 12 }, (o, s) => Rt(e.set({ month: s + 1 })));
}
function Mt(t) {
  const { numberOfMonths: e, dateObj: a, ...n } = t, o = [];
  if (!e || e === 1)
    return o.push(
      to({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    to({
      ...n,
      dateObj: a
    })
  );
  for (let s = 1; s < e; s++) {
    const r = a.add({ months: s });
    o.push(
      to({
        ...n,
        dateObj: r
      })
    );
  }
  return o;
}
const Mu = ["top", "right", "bottom", "left"], Dt = Math.min, Oe = Math.max, _n = Math.round, Xa = Math.floor, et = (t) => ({
  x: t,
  y: t
}), Tu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Iu = {
  start: "end",
  end: "start"
};
function _o(t, e, a) {
  return Oe(t, Dt(e, a));
}
function ht(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function gt(t) {
  return t.split("-")[0];
}
function pa(t) {
  return t.split("-")[1];
}
function Qo(t) {
  return t === "x" ? "y" : "x";
}
function Xo(t) {
  return t === "y" ? "height" : "width";
}
function St(t) {
  return ["top", "bottom"].includes(gt(t)) ? "y" : "x";
}
function Zo(t) {
  return Qo(St(t));
}
function Vu(t, e, a) {
  a === void 0 && (a = !1);
  const n = pa(t), o = Zo(t), s = Xo(o);
  let r = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = wn(r)), [r, wn(r)];
}
function Ru(t) {
  const e = wn(t);
  return [wo(t), e, wo(e)];
}
function wo(t) {
  return t.replace(/start|end/g, (e) => Iu[e]);
}
function Fu(t, e, a) {
  const n = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return a ? e ? o : n : e ? n : o;
    case "left":
    case "right":
      return e ? s : r;
    default:
      return [];
  }
}
function Lu(t, e, a, n) {
  const o = pa(t);
  let s = Fu(gt(t), a === "start", n);
  return o && (s = s.map((r) => r + "-" + o), e && (s = s.concat(s.map(wo)))), s;
}
function wn(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Tu[e]);
}
function Nu(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function vr(t) {
  return typeof t != "number" ? Nu(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function xn(t) {
  const {
    x: e,
    y: a,
    width: n,
    height: o
  } = t;
  return {
    width: n,
    height: o,
    top: a,
    left: e,
    right: e + n,
    bottom: a + o,
    x: e,
    y: a
  };
}
function os(t, e, a) {
  let {
    reference: n,
    floating: o
  } = t;
  const s = St(e), r = Zo(e), i = Xo(r), d = gt(e), u = s === "y", c = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, _ = n[i] / 2 - o[i] / 2;
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
  switch (pa(e)) {
    case "start":
      m[r] -= _ * (a && u ? -1 : 1);
      break;
    case "end":
      m[r] += _ * (a && u ? -1 : 1);
      break;
  }
  return m;
}
const zu = async (t, e, a) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: r
  } = a, i = s.filter(Boolean), d = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let u = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: c,
    y: p
  } = os(u, n, d), _ = n, m = {}, w = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: x,
      fn: C
    } = i[h], {
      x: S,
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
        reference: t,
        floating: e
      }
    });
    c = S ?? c, p = k ?? p, m = {
      ...m,
      [x]: {
        ...m[x],
        ...O
      }
    }, E && w <= 50 && (w++, typeof E == "object" && (E.placement && (_ = E.placement), E.rects && (u = E.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : E.rects), {
      x: c,
      y: p
    } = os(u, _, d)), h = -1);
  }
  return {
    x: c,
    y: p,
    placement: _,
    strategy: o,
    middlewareData: m
  };
};
async function Ma(t, e) {
  var a;
  e === void 0 && (e = {});
  const {
    x: n,
    y: o,
    platform: s,
    rects: r,
    elements: i,
    strategy: d
  } = t, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: _ = !1,
    padding: m = 0
  } = ht(e, t), w = vr(m), x = i[_ ? p === "floating" ? "reference" : "floating" : p], C = xn(await s.getClippingRect({
    element: (a = await (s.isElement == null ? void 0 : s.isElement(x))) == null || a ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: d
  })), S = p === "floating" ? {
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
  }, E = xn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: S,
    offsetParent: k,
    strategy: d
  }) : S);
  return {
    top: (C.top - E.top + w.top) / O.y,
    bottom: (E.bottom - C.bottom + w.bottom) / O.y,
    left: (C.left - E.left + w.left) / O.x,
    right: (E.right - C.right + w.right) / O.x
  };
}
const Uu = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: a,
      y: n,
      placement: o,
      rects: s,
      platform: r,
      elements: i,
      middlewareData: d
    } = e, {
      element: u,
      padding: c = 0
    } = ht(t, e) || {};
    if (u == null)
      return {};
    const p = vr(c), _ = {
      x: a,
      y: n
    }, m = Zo(o), w = Xo(m), h = await r.getDimensions(u), x = m === "y", C = x ? "top" : "left", S = x ? "bottom" : "right", k = x ? "clientHeight" : "clientWidth", O = s.reference[w] + s.reference[m] - _[m] - s.floating[w], E = _[m] - s.reference[m], V = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(u));
    let M = V ? V[k] : 0;
    (!M || !await (r.isElement == null ? void 0 : r.isElement(V))) && (M = i.floating[k] || s.floating[w]);
    const U = O / 2 - E / 2, N = M / 2 - h[w] / 2 - 1, B = Dt(p[C], N), I = Dt(p[S], N), R = B, Y = M - h[w] - I, G = M / 2 - h[w] / 2 + U, X = _o(R, G, Y), de = !d.arrow && pa(o) != null && G !== X && s.reference[w] / 2 - (G < R ? B : I) - h[w] / 2 < 0, ge = de ? G < R ? G - R : G - Y : 0;
    return {
      [m]: _[m] + ge,
      data: {
        [m]: X,
        centerOffset: G - X - ge,
        ...de && {
          alignmentOffset: ge
        }
      },
      reset: de
    };
  }
}), Hu = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var a, n;
      const {
        placement: o,
        middlewareData: s,
        rects: r,
        initialPlacement: i,
        platform: d,
        elements: u
      } = e, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: _,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: h = !0,
        ...x
      } = ht(t, e);
      if ((a = s.arrow) != null && a.alignmentOffset)
        return {};
      const C = gt(o), S = St(i), k = gt(i) === i, O = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), E = _ || (k || !h ? [wn(i)] : Ru(i)), V = w !== "none";
      !_ && V && E.push(...Lu(i, h, w, O));
      const M = [i, ...E], U = await Ma(e, x), N = [];
      let B = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (c && N.push(U[C]), p) {
        const G = Vu(o, r, O);
        N.push(U[G[0]], U[G[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: N
      }], !N.every((G) => G <= 0)) {
        var I, R;
        const G = (((I = s.flip) == null ? void 0 : I.index) || 0) + 1, X = M[G];
        if (X)
          return {
            data: {
              index: G,
              overflows: B
            },
            reset: {
              placement: X
            }
          };
        let de = (R = B.filter((ge) => ge.overflows[0] <= 0).sort((ge, ye) => ge.overflows[1] - ye.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!de)
          switch (m) {
            case "bestFit": {
              var Y;
              const ge = (Y = B.filter((ye) => {
                if (V) {
                  const j = St(ye.placement);
                  return j === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((ye) => [ye.placement, ye.overflows.filter((j) => j > 0).reduce((j, oe) => j + oe, 0)]).sort((ye, j) => ye[1] - j[1])[0]) == null ? void 0 : Y[0];
              ge && (de = ge);
              break;
            }
            case "initialPlacement":
              de = i;
              break;
          }
        if (o !== de)
          return {
            reset: {
              placement: de
            }
          };
      }
      return {};
    }
  };
};
function ls(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function ss(t) {
  return Mu.some((e) => t[e] >= 0);
}
const Ku = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: a
      } = e, {
        strategy: n = "referenceHidden",
        ...o
      } = ht(t, e);
      switch (n) {
        case "referenceHidden": {
          const s = await Ma(e, {
            ...o,
            elementContext: "reference"
          }), r = ls(s, a.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: ss(r)
            }
          };
        }
        case "escaped": {
          const s = await Ma(e, {
            ...o,
            altBoundary: !0
          }), r = ls(s, a.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: ss(r)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Wu(t, e) {
  const {
    placement: a,
    platform: n,
    elements: o
  } = t, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), r = gt(a), i = pa(a), d = St(a) === "y", u = ["left", "top"].includes(r) ? -1 : 1, c = s && d ? -1 : 1, p = ht(e, t);
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
const ju = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var a, n;
      const {
        x: o,
        y: s,
        placement: r,
        middlewareData: i
      } = e, d = await Wu(e, t);
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
}, Gu = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: a,
        y: n,
        placement: o
      } = e, {
        mainAxis: s = !0,
        crossAxis: r = !1,
        limiter: i = {
          fn: (x) => {
            let {
              x: C,
              y: S
            } = x;
            return {
              x: C,
              y: S
            };
          }
        },
        ...d
      } = ht(t, e), u = {
        x: a,
        y: n
      }, c = await Ma(e, d), p = St(gt(o)), _ = Qo(p);
      let m = u[_], w = u[p];
      if (s) {
        const x = _ === "y" ? "top" : "left", C = _ === "y" ? "bottom" : "right", S = m + c[x], k = m - c[C];
        m = _o(S, m, k);
      }
      if (r) {
        const x = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", S = w + c[x], k = w - c[C];
        w = _o(S, w, k);
      }
      const h = i.fn({
        ...e,
        [_]: m,
        [p]: w
      });
      return {
        ...h,
        data: {
          x: h.x - a,
          y: h.y - n,
          enabled: {
            [_]: s,
            [p]: r
          }
        }
      };
    }
  };
}, Yu = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: a,
        y: n,
        placement: o,
        rects: s,
        middlewareData: r
      } = e, {
        offset: i = 0,
        mainAxis: d = !0,
        crossAxis: u = !0
      } = ht(t, e), c = {
        x: a,
        y: n
      }, p = St(o), _ = Qo(p);
      let m = c[_], w = c[p];
      const h = ht(i, e), x = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (d) {
        const k = _ === "y" ? "height" : "width", O = s.reference[_] - s.floating[k] + x.mainAxis, E = s.reference[_] + s.reference[k] - x.mainAxis;
        m < O ? m = O : m > E && (m = E);
      }
      if (u) {
        var C, S;
        const k = _ === "y" ? "width" : "height", O = ["top", "left"].includes(gt(o)), E = s.reference[p] - s.floating[k] + (O && ((C = r.offset) == null ? void 0 : C[p]) || 0) + (O ? 0 : x.crossAxis), V = s.reference[p] + s.reference[k] + (O ? 0 : ((S = r.offset) == null ? void 0 : S[p]) || 0) - (O ? x.crossAxis : 0);
        w < E ? w = E : w > V && (w = V);
      }
      return {
        [_]: m,
        [p]: w
      };
    }
  };
}, qu = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var a, n;
      const {
        placement: o,
        rects: s,
        platform: r,
        elements: i
      } = e, {
        apply: d = () => {
        },
        ...u
      } = ht(t, e), c = await Ma(e, u), p = gt(o), _ = pa(o), m = St(o) === "y", {
        width: w,
        height: h
      } = s.floating;
      let x, C;
      p === "top" || p === "bottom" ? (x = p, C = _ === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, x = _ === "end" ? "top" : "bottom");
      const S = h - c.top - c.bottom, k = w - c.left - c.right, O = Dt(h - c[x], S), E = Dt(w - c[C], k), V = !e.middlewareData.shift;
      let M = O, U = E;
      if ((a = e.middlewareData.shift) != null && a.enabled.x && (U = k), (n = e.middlewareData.shift) != null && n.enabled.y && (M = S), V && !_) {
        const B = Oe(c.left, 0), I = Oe(c.right, 0), R = Oe(c.top, 0), Y = Oe(c.bottom, 0);
        m ? U = w - 2 * (B !== 0 || I !== 0 ? B + I : Oe(c.left, c.right)) : M = h - 2 * (R !== 0 || Y !== 0 ? R + Y : Oe(c.top, c.bottom));
      }
      await d({
        ...e,
        availableWidth: U,
        availableHeight: M
      });
      const N = await r.getDimensions(i.floating);
      return w !== N.width || h !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function On() {
  return typeof window < "u";
}
function Nt(t) {
  return el(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Me(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function nt(t) {
  var e;
  return (e = (el(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function el(t) {
  return On() ? t instanceof Node || t instanceof Me(t).Node : !1;
}
function je(t) {
  return On() ? t instanceof Element || t instanceof Me(t).Element : !1;
}
function tt(t) {
  return On() ? t instanceof HTMLElement || t instanceof Me(t).HTMLElement : !1;
}
function rs(t) {
  return !On() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Me(t).ShadowRoot;
}
function La(t) {
  const {
    overflow: e,
    overflowX: a,
    overflowY: n,
    display: o
  } = Ge(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + a) && !["inline", "contents"].includes(o);
}
function Ju(t) {
  return ["table", "td", "th"].includes(Nt(t));
}
function An(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function tl(t) {
  const e = al(), a = je(t) ? Ge(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => a[n] ? a[n] !== "none" : !1) || (a.containerType ? a.containerType !== "normal" : !1) || !e && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !e && (a.filter ? a.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function Qu(t) {
  let e = Pt(t);
  for (; tt(e) && !sa(e); ) {
    if (tl(e))
      return e;
    if (An(e))
      return null;
    e = Pt(e);
  }
  return null;
}
function al() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function sa(t) {
  return ["html", "body", "#document"].includes(Nt(t));
}
function Ge(t) {
  return Me(t).getComputedStyle(t);
}
function Mn(t) {
  return je(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function Pt(t) {
  if (Nt(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    rs(t) && t.host || // Fallback.
    nt(t)
  );
  return rs(e) ? e.host : e;
}
function mr(t) {
  const e = Pt(t);
  return sa(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : tt(e) && La(e) ? e : mr(e);
}
function Ta(t, e, a) {
  var n;
  e === void 0 && (e = []), a === void 0 && (a = !0);
  const o = mr(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Me(o);
  if (s) {
    const i = xo(r);
    return e.concat(r, r.visualViewport || [], La(o) ? o : [], i && a ? Ta(i) : []);
  }
  return e.concat(o, Ta(o, [], a));
}
function xo(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function hr(t) {
  const e = Ge(t);
  let a = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = tt(t), s = o ? t.offsetWidth : a, r = o ? t.offsetHeight : n, i = _n(a) !== s || _n(n) !== r;
  return i && (a = s, n = r), {
    width: a,
    height: n,
    $: i
  };
}
function nl(t) {
  return je(t) ? t : t.contextElement;
}
function ea(t) {
  const e = nl(t);
  if (!tt(e))
    return et(1);
  const a = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = hr(e);
  let r = (s ? _n(a.width) : a.width) / n, i = (s ? _n(a.height) : a.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: r,
    y: i
  };
}
const Xu = /* @__PURE__ */ et(0);
function gr(t) {
  const e = Me(t);
  return !al() || !e.visualViewport ? Xu : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Zu(t, e, a) {
  return e === void 0 && (e = !1), !a || e && a !== Me(t) ? !1 : e;
}
function Lt(t, e, a, n) {
  e === void 0 && (e = !1), a === void 0 && (a = !1);
  const o = t.getBoundingClientRect(), s = nl(t);
  let r = et(1);
  e && (n ? je(n) && (r = ea(n)) : r = ea(t));
  const i = Zu(s, a, n) ? gr(s) : et(0);
  let d = (o.left + i.x) / r.x, u = (o.top + i.y) / r.y, c = o.width / r.x, p = o.height / r.y;
  if (s) {
    const _ = Me(s), m = n && je(n) ? Me(n) : n;
    let w = _, h = xo(w);
    for (; h && n && m !== w; ) {
      const x = ea(h), C = h.getBoundingClientRect(), S = Ge(h), k = C.left + (h.clientLeft + parseFloat(S.paddingLeft)) * x.x, O = C.top + (h.clientTop + parseFloat(S.paddingTop)) * x.y;
      d *= x.x, u *= x.y, c *= x.x, p *= x.y, d += k, u += O, w = Me(h), h = xo(w);
    }
  }
  return xn({
    width: c,
    height: p,
    x: d,
    y: u
  });
}
function ol(t, e) {
  const a = Mn(t).scrollLeft;
  return e ? e.left + a : Lt(nt(t)).left + a;
}
function yr(t, e, a) {
  a === void 0 && (a = !1);
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - (a ? 0 : (
    // RTL <body> scrollbar.
    ol(t, n)
  )), s = n.top + e.scrollTop;
  return {
    x: o,
    y: s
  };
}
function ec(t) {
  let {
    elements: e,
    rect: a,
    offsetParent: n,
    strategy: o
  } = t;
  const s = o === "fixed", r = nt(n), i = e ? An(e.floating) : !1;
  if (n === r || i && s)
    return a;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = et(1);
  const c = et(0), p = tt(n);
  if ((p || !p && !s) && ((Nt(n) !== "body" || La(r)) && (d = Mn(n)), tt(n))) {
    const m = Lt(n);
    u = ea(n), c.x = m.x + n.clientLeft, c.y = m.y + n.clientTop;
  }
  const _ = r && !p && !s ? yr(r, d, !0) : et(0);
  return {
    width: a.width * u.x,
    height: a.height * u.y,
    x: a.x * u.x - d.scrollLeft * u.x + c.x + _.x,
    y: a.y * u.y - d.scrollTop * u.y + c.y + _.y
  };
}
function tc(t) {
  return Array.from(t.getClientRects());
}
function ac(t) {
  const e = nt(t), a = Mn(t), n = t.ownerDocument.body, o = Oe(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), s = Oe(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -a.scrollLeft + ol(t);
  const i = -a.scrollTop;
  return Ge(n).direction === "rtl" && (r += Oe(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: r,
    y: i
  };
}
function nc(t, e) {
  const a = Me(t), n = nt(t), o = a.visualViewport;
  let s = n.clientWidth, r = n.clientHeight, i = 0, d = 0;
  if (o) {
    s = o.width, r = o.height;
    const u = al();
    (!u || u && e === "fixed") && (i = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: i,
    y: d
  };
}
function oc(t, e) {
  const a = Lt(t, !0, e === "fixed"), n = a.top + t.clientTop, o = a.left + t.clientLeft, s = tt(t) ? ea(t) : et(1), r = t.clientWidth * s.x, i = t.clientHeight * s.y, d = o * s.x, u = n * s.y;
  return {
    width: r,
    height: i,
    x: d,
    y: u
  };
}
function is(t, e, a) {
  let n;
  if (e === "viewport")
    n = nc(t, a);
  else if (e === "document")
    n = ac(nt(t));
  else if (je(e))
    n = oc(e, a);
  else {
    const o = gr(t);
    n = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return xn(n);
}
function br(t, e) {
  const a = Pt(t);
  return a === e || !je(a) || sa(a) ? !1 : Ge(a).position === "fixed" || br(a, e);
}
function lc(t, e) {
  const a = e.get(t);
  if (a)
    return a;
  let n = Ta(t, [], !1).filter((i) => je(i) && Nt(i) !== "body"), o = null;
  const s = Ge(t).position === "fixed";
  let r = s ? Pt(t) : t;
  for (; je(r) && !sa(r); ) {
    const i = Ge(r), d = tl(r);
    !d && i.position === "fixed" && (o = null), (s ? !d && !o : !d && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || La(r) && !d && br(t, r)) ? n = n.filter((c) => c !== r) : o = i, r = Pt(r);
  }
  return e.set(t, n), n;
}
function sc(t) {
  let {
    element: e,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = t;
  const r = [...a === "clippingAncestors" ? An(e) ? [] : lc(e, this._c) : [].concat(a), n], i = r[0], d = r.reduce((u, c) => {
    const p = is(e, c, o);
    return u.top = Oe(p.top, u.top), u.right = Dt(p.right, u.right), u.bottom = Dt(p.bottom, u.bottom), u.left = Oe(p.left, u.left), u;
  }, is(e, i, o));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function rc(t) {
  const {
    width: e,
    height: a
  } = hr(t);
  return {
    width: e,
    height: a
  };
}
function ic(t, e, a) {
  const n = tt(e), o = nt(e), s = a === "fixed", r = Lt(t, !0, s, e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = et(0);
  if (n || !n && !s)
    if ((Nt(e) !== "body" || La(o)) && (i = Mn(e)), n) {
      const _ = Lt(e, !0, s, e);
      d.x = _.x + e.clientLeft, d.y = _.y + e.clientTop;
    } else o && (d.x = ol(o));
  const u = o && !n && !s ? yr(o, i) : et(0), c = r.left + i.scrollLeft - d.x - u.x, p = r.top + i.scrollTop - d.y - u.y;
  return {
    x: c,
    y: p,
    width: r.width,
    height: r.height
  };
}
function ao(t) {
  return Ge(t).position === "static";
}
function ds(t, e) {
  if (!tt(t) || Ge(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let a = t.offsetParent;
  return nt(t) === a && (a = a.ownerDocument.body), a;
}
function _r(t, e) {
  const a = Me(t);
  if (An(t))
    return a;
  if (!tt(t)) {
    let o = Pt(t);
    for (; o && !sa(o); ) {
      if (je(o) && !ao(o))
        return o;
      o = Pt(o);
    }
    return a;
  }
  let n = ds(t, e);
  for (; n && Ju(n) && ao(n); )
    n = ds(n, e);
  return n && sa(n) && ao(n) && !tl(n) ? a : n || Qu(t) || a;
}
const dc = async function(t) {
  const e = this.getOffsetParent || _r, a = this.getDimensions, n = await a(t.floating);
  return {
    reference: ic(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function uc(t) {
  return Ge(t).direction === "rtl";
}
const cc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ec,
  getDocumentElement: nt,
  getClippingRect: sc,
  getOffsetParent: _r,
  getElementRects: dc,
  getClientRects: tc,
  getDimensions: rc,
  getScale: ea,
  isElement: je,
  isRTL: uc
};
function wr(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function pc(t, e) {
  let a = null, n;
  const o = nt(t);
  function s() {
    var i;
    clearTimeout(n), (i = a) == null || i.disconnect(), a = null;
  }
  function r(i, d) {
    i === void 0 && (i = !1), d === void 0 && (d = 1), s();
    const u = t.getBoundingClientRect(), {
      left: c,
      top: p,
      width: _,
      height: m
    } = u;
    if (i || e(), !_ || !m)
      return;
    const w = Xa(p), h = Xa(o.clientWidth - (c + _)), x = Xa(o.clientHeight - (p + m)), C = Xa(c), k = {
      rootMargin: -w + "px " + -h + "px " + -x + "px " + -C + "px",
      threshold: Oe(0, Dt(1, d)) || 1
    };
    let O = !0;
    function E(V) {
      const M = V[0].intersectionRatio;
      if (M !== d) {
        if (!O)
          return r();
        M ? r(!1, M) : n = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !wr(u, t.getBoundingClientRect()) && r(), O = !1;
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
    a.observe(t);
  }
  return r(!0), s;
}
function fc(t, e, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, u = nl(t), c = o || s ? [...u ? Ta(u) : [], ...Ta(e)] : [];
  c.forEach((C) => {
    o && C.addEventListener("scroll", a, {
      passive: !0
    }), s && C.addEventListener("resize", a);
  });
  const p = u && i ? pc(u, a) : null;
  let _ = -1, m = null;
  r && (m = new ResizeObserver((C) => {
    let [S] = C;
    S && S.target === u && m && (m.unobserve(e), cancelAnimationFrame(_), _ = requestAnimationFrame(() => {
      var k;
      (k = m) == null || k.observe(e);
    })), a();
  }), u && !d && m.observe(u), m.observe(e));
  let w, h = d ? Lt(t) : null;
  d && x();
  function x() {
    const C = Lt(t);
    h && !wr(h, C) && a(), h = C, w = requestAnimationFrame(x);
  }
  return a(), () => {
    var C;
    c.forEach((S) => {
      o && S.removeEventListener("scroll", a), s && S.removeEventListener("resize", a);
    }), p == null || p(), (C = m) == null || C.disconnect(), m = null, d && cancelAnimationFrame(w);
  };
}
const vc = ju, mc = Gu, us = Hu, hc = qu, gc = Ku, yc = Uu, bc = Yu, _c = (t, e, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: cc,
    ...a
  }, s = {
    ...o.platform,
    _c: n
  };
  return zu(t, e, {
    ...o,
    platform: s
  });
};
function wc(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function $o(t) {
  if (wc(t)) {
    const e = t.$el;
    return el(e) && Nt(e) === "#comment" ? null : e;
  }
  return t;
}
function Jt(t) {
  return typeof t == "function" ? t() : l(t);
}
function xc(t) {
  return {
    name: "arrow",
    options: t,
    fn(e) {
      const a = $o(Jt(t.element));
      return a == null ? {} : yc({
        element: a,
        padding: t.padding
      }).fn(e);
    }
  };
}
function xr(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function cs(t, e) {
  const a = xr(t);
  return Math.round(e * a) / a;
}
function $c(t, e, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = $(() => {
    var M;
    return (M = Jt(a.open)) != null ? M : !0;
  }), s = $(() => Jt(a.middleware)), r = $(() => {
    var M;
    return (M = Jt(a.placement)) != null ? M : "bottom";
  }), i = $(() => {
    var M;
    return (M = Jt(a.strategy)) != null ? M : "absolute";
  }), d = $(() => {
    var M;
    return (M = Jt(a.transform)) != null ? M : !0;
  }), u = $(() => $o(t.value)), c = $(() => $o(e.value)), p = A(0), _ = A(0), m = A(i.value), w = A(r.value), h = Fo({}), x = A(!1), C = $(() => {
    const M = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return M;
    const U = cs(c.value, p.value), N = cs(c.value, _.value);
    return d.value ? {
      ...M,
      transform: "translate(" + U + "px, " + N + "px)",
      ...xr(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: U + "px",
      top: N + "px"
    };
  });
  let S;
  function k() {
    if (u.value == null || c.value == null)
      return;
    const M = o.value;
    _c(u.value, c.value, {
      middleware: s.value,
      placement: r.value,
      strategy: i.value
    }).then((U) => {
      p.value = U.x, _.value = U.y, m.value = U.strategy, w.value = U.placement, h.value = U.middlewareData, x.value = M !== !1;
    });
  }
  function O() {
    typeof S == "function" && (S(), S = void 0);
  }
  function E() {
    if (O(), n === void 0) {
      k();
      return;
    }
    if (u.value != null && c.value != null) {
      S = n(u.value, c.value, k);
      return;
    }
  }
  function V() {
    o.value || (x.value = !1);
  }
  return te([s, r, i, o], k, {
    flush: "sync"
  }), te([u, c], E, {
    flush: "sync"
  }), te(o, V, {
    flush: "sync"
  }), Lo() && No(O), {
    x: Gt(p),
    y: Gt(_),
    strategy: Gt(m),
    placement: Gt(w),
    middlewareData: Gt(h),
    isPositioned: Gt(x),
    floatingStyles: C,
    update: k
  };
}
function ne(t, e) {
  const a = typeof t == "string" && !e ? `${t}Context` : e, n = Symbol(a);
  return [(o) => {
    const s = Ts(n, o);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(
        ", "
      )}` : `\`${t}\``}`
    );
  }, (o) => (Is(n, o), o)];
}
function ll(t, e, a) {
  const n = a.originalEvent.target, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
function $n(t, e = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(a, Math.max(e, t));
}
function Cc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var kc = function t(e, a) {
  if (e === a) return !0;
  if (e && a && typeof e == "object" && typeof a == "object") {
    if (e.constructor !== a.constructor) return !1;
    var n, o, s;
    if (Array.isArray(e)) {
      if (n = e.length, n != a.length) return !1;
      for (o = n; o-- !== 0; )
        if (!t(e[o], a[o])) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === a.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === a.toString();
    if (s = Object.keys(e), n = s.length, n !== Object.keys(a).length) return !1;
    for (o = n; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(a, s[o])) return !1;
    for (o = n; o-- !== 0; ) {
      var r = s[o];
      if (!t(e[r], a[r])) return !1;
    }
    return !0;
  }
  return e !== e && a !== a;
};
const Vt = /* @__PURE__ */ Cc(kc);
function pn(t) {
  return t == null;
}
function $r(t) {
  const { defaultValue: e, defaultPlaceholder: a, granularity: n = "day", locale: o = "en" } = t;
  if (Array.isArray(e) && e.length)
    return e.at(-1).copy();
  if (e && !Array.isArray(e))
    return e.copy();
  if (a)
    return a.copy();
  const s = /* @__PURE__ */ new Date(), r = s.getFullYear(), i = s.getMonth() + 1, d = s.getDate(), u = ["hour", "minute", "second"], c = new Qe(o), p = hu(c.resolvedOptions().calendar);
  return u.includes(n ?? "day") ? Pe(new oa(r, i, d, 0, 0, 0), p) : Pe(new _e(r, i, d), p);
}
function Cr(t) {
  const e = t.querySelector("[data-selected]");
  if (e)
    return e.focus();
  const a = t.querySelector("[data-today]");
  if (a)
    return a.focus();
  const n = t.querySelector("[data-radix-vue-calendar-day]");
  if (n)
    return n.focus();
}
function Bc(t, e) {
  var a;
  const n = Fo();
  return be(() => {
    n.value = t();
  }, {
    ...e,
    flush: (a = void 0) != null ? a : "sync"
  }), Ra(n);
}
function zt(t) {
  return Lo() ? (No(t), !0) : !1;
}
function Dc() {
  const t = /* @__PURE__ */ new Set(), e = (a) => {
    t.delete(a);
  };
  return {
    on: (a) => {
      t.add(a);
      const n = () => e(a);
      return zt(n), {
        off: n
      };
    },
    off: e,
    trigger: (...a) => Promise.all(Array.from(t).map((n) => n(...a)))
  };
}
function Sc(t) {
  let e = !1, a;
  const n = Ns(!0);
  return (...o) => (e || (a = n.run(() => t(...o)), e = !0), a);
}
function kr(t) {
  let e = 0, a, n;
  const o = () => {
    e -= 1, n && e <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...s) => (e += 1, a || (n = Ns(!0), a = n.run(() => t(...s))), zt(o), a);
}
function ft(t) {
  return typeof t == "function" ? t() : l(t);
}
const ot = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Pc = (t) => typeof t < "u", Ec = (t) => t != null, Oc = Object.prototype.toString, Ac = (t) => Oc.call(t) === "[object Object]", Br = () => {
}, ps = /* @__PURE__ */ Mc();
function Mc() {
  var t, e;
  return ot && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Tc(t) {
  return at();
}
function Dr(t, e = 1e4) {
  return Fs((a, n) => {
    let o = ft(t), s;
    const r = () => setTimeout(() => {
      o = ft(t), n();
    }, ft(e));
    return zt(() => {
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
function Ic(t, e) {
  Tc() && zo(t, e);
}
function sl(t, e, a = {}) {
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
      o.value = !1, s = null, t(...u);
    }, ft(e));
  }
  return n && (o.value = !0, ot && d()), zt(i), {
    isPending: Ra(o),
    start: d,
    stop: i
  };
}
function Vc(t = 1e3, e = {}) {
  const {
    controls: a = !1,
    callback: n
  } = e, o = sl(
    n ?? Br,
    t,
    e
  ), s = $(() => !o.isPending.value);
  return a ? {
    ready: s,
    ...o
  } : s;
}
function Le(t) {
  var e;
  const a = ft(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
const Na = ot ? window : void 0;
function ra(...t) {
  let e, a, n, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([a, n, o] = t, e = Na) : [e, a, n, o] = t, !e)
    return Br;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, p, _, m) => (c.addEventListener(p, _, m), () => c.removeEventListener(p, _, m)), d = te(
    () => [Le(e), ft(o)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const _ = Ac(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((w) => i(c, m, w, _)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), r();
  };
  return zt(u), u;
}
function Rc(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (e) => e.key === t : Array.isArray(t) ? (e) => t.includes(e.key) : () => !0;
}
function rl(...t) {
  let e, a, n = {};
  t.length === 3 ? (e = t[0], a = t[1], n = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (e = !0, a = t[0], n = t[1]) : (e = t[0], a = t[1]) : (e = !0, a = t[0]);
  const {
    target: o = Na,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, d = Rc(e);
  return ra(o, s, (u) => {
    u.repeat && ft(i) || d(u) && a(u);
  }, r);
}
function il() {
  const t = A(!1), e = at();
  return e && ce(() => {
    t.value = !0;
  }, e), t;
}
function Fc(t) {
  const e = il();
  return $(() => (e.value, !!t()));
}
function Lc(t, e, a = {}) {
  const { window: n = Na, ...o } = a;
  let s;
  const r = Fc(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, d = $(() => {
    const _ = ft(t), m = (Array.isArray(_) ? _ : [_]).map(Le).filter(Ec);
    return new Set(m);
  }), u = te(
    () => d.value,
    (_) => {
      i(), r.value && _.size && (s = new MutationObserver(e), _.forEach((m) => s.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => s == null ? void 0 : s.takeRecords(), p = () => {
    i(), u();
  };
  return zt(p), {
    isSupported: r,
    stop: p,
    takeRecords: c
  };
}
function Sr(t, e = {}) {
  const {
    immediate: a = !0,
    fpsLimit: n = void 0,
    window: o = Na
  } = e, s = A(!1), r = n ? 1e3 / n : null;
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
    i = _, t({ delta: m, timestamp: _ }), d = o.requestAnimationFrame(u);
  }
  function c() {
    !s.value && o && (s.value = !0, i = 0, d = o.requestAnimationFrame(u));
  }
  function p() {
    s.value = !1, d != null && o && (o.cancelAnimationFrame(d), d = null);
  }
  return a && c(), zt(p), {
    isActive: Ra(s),
    pause: p,
    resume: c
  };
}
function Nc(t) {
  return JSON.parse(JSON.stringify(t));
}
function ve(t, e, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: _
  } = n, m = at(), w = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let h = u;
  e || (e = "modelValue"), h = h || `update:${e.toString()}`;
  const x = (k) => i ? typeof i == "function" ? i(k) : Nc(k) : k, C = () => Pc(t[e]) ? x(t[e]) : p, S = (k) => {
    _ ? _(k) && w(h, k) : w(h, k);
  };
  if (d) {
    const k = C(), O = A(k);
    let E = !1;
    return te(
      () => t[e],
      (V) => {
        E || (E = !0, O.value = x(V), le(() => E = !1));
      }
    ), te(
      O,
      (V) => {
        !E && (V !== t[e] || c) && S(V);
      },
      { deep: c }
    ), O;
  } else
    return $({
      get() {
        return C();
      },
      set(k) {
        S(k);
      }
    });
}
function Tn(t) {
  return t ? t.flatMap((e) => e.type === J ? Tn(e.children) : [e]) : [];
}
function xe() {
  let t = document.activeElement;
  if (t == null)
    return null;
  for (; t != null && t.shadowRoot != null && t.shadowRoot.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
const zc = ["INPUT", "TEXTAREA"];
function Pr(t, e, a, n = {}) {
  if (!e || n.enableIgnoredElement && zc.includes(e.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = !0,
    dir: d = "ltr",
    preventScroll: u = !0,
    focus: c = !1
  } = n, [p, _, m, w, h, x] = [
    t.key === "ArrowRight",
    t.key === "ArrowLeft",
    t.key === "ArrowUp",
    t.key === "ArrowDown",
    t.key === "Home",
    t.key === "End"
  ], C = m || w, S = p || _;
  if (!h && !x && (!C && !S || o === "vertical" && S || o === "horizontal" && C))
    return null;
  const k = a ? Array.from(a.querySelectorAll(s)) : r;
  if (!k.length)
    return null;
  u && t.preventDefault();
  let O = null;
  return S || C ? O = Er(k, e, {
    goForward: C ? w : d === "ltr" ? p : _,
    loop: i
  }) : h ? O = k.at(0) || null : x && (O = k.at(-1) || null), c && (O == null || O.focus()), O;
}
function Er(t, e, a, n = t.length) {
  if (--n === 0)
    return null;
  const o = t.indexOf(e), s = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (s < 0 || s >= t.length))
    return null;
  const r = (s + t.length) % t.length, i = t[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Er(
    t,
    i,
    a,
    n
  ) : i : null;
}
function no(t) {
  if (t === null || typeof t != "object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t ? !1 : Symbol.toStringTag in t ? Object.prototype.toString.call(t) === "[object Module]" : !0;
}
function Co(t, e, a = ".", n) {
  if (!no(e))
    return Co(t, {}, a);
  const o = Object.assign({}, e);
  for (const s in t) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = t[s];
    r != null && (Array.isArray(r) && Array.isArray(o[s]) ? o[s] = [...r, ...o[s]] : no(r) && no(o[s]) ? o[s] = Co(
      r,
      o[s],
      (a ? `${a}.` : "") + s.toString()
    ) : o[s] = r);
  }
  return o;
}
function Uc(t) {
  return (...e) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    e.reduce((a, n) => Co(a, n, ""), {})
  );
}
const Hc = Uc(), [In, B0] = ne("ConfigProvider");
let Kc = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Wc = (t = 21) => {
  let e = "", a = t;
  for (; a--; )
    e += Kc[Math.random() * 64 | 0];
  return e;
};
const jc = kr(() => {
  const t = A(/* @__PURE__ */ new Map()), e = A(), a = $(() => {
    for (const r of t.value.values())
      if (r)
        return !0;
    return !1;
  }), n = In({
    scrollBody: A(!0)
  });
  let o = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = e.value ?? "", ps && (o == null || o()), e.value = void 0;
  };
  return te(a, (r, i) => {
    var d;
    if (!ot)
      return;
    if (!r) {
      i && s();
      return;
    }
    e.value === void 0 && (e.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, c = { padding: u, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? Hc({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), ps && (o = ra(
      document,
      "touchmove",
      (_) => Gc(_),
      { passive: !1 }
    )), le(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), t;
});
function za(t) {
  const e = Wc(6), a = jc();
  a.value.set(e, t ?? !1);
  const n = $({
    get: () => a.value.get(e) ?? !1,
    set: (o) => a.value.set(e, o)
  });
  return Ic(() => {
    a.value.delete(e);
  }), n;
}
function Or(t) {
  const e = window.getComputedStyle(t);
  if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && t.clientWidth < t.scrollWidth || e.overflowY === "auto" && t.clientHeight < t.scrollHeight)
    return !0;
  {
    const a = t.parentNode;
    return !(a instanceof Element) || a.tagName === "BODY" ? !1 : Or(a);
  }
}
function Gc(t) {
  const e = t || window.event, a = e.target;
  return a instanceof Element && Or(a) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.cancelable && e.preventDefault(), !1);
}
const Yc = "data-radix-vue-collection-item";
function fa(t, e = Yc) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = A([]);
    function s() {
      const r = Le(n);
      return r ? o.value = Array.from(
        r.querySelectorAll(`[${e}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return fd(() => {
      o.value = [];
    }), ce(s), vd(s), te(() => n == null ? void 0 : n.value, s, { immediate: !0 }), Is(a, o), o;
  }, injectCollection: () => Ts(a, A([])) };
}
function Ar(t) {
  const e = A(t);
  function a() {
    return e.value;
  }
  function n(h) {
    e.value = h;
  }
  function o(h, x) {
    return new Qe(e.value, x).format(h);
  }
  function s(h, x = !0) {
    return $u(h) && x ? o(Fe(h), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Fe(h), {
      dateStyle: "long"
    });
  }
  function r(h, x = {}) {
    return new Qe(e.value, { month: "long", year: "numeric", ...x }).format(h);
  }
  function i(h, x = {}) {
    return new Qe(e.value, { month: "long", ...x }).format(h);
  }
  function d() {
    const h = vn(vt());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => ({ label: i(Fe(h.set({ month: x }))), value: x }));
  }
  function u(h, x = {}) {
    return new Qe(e.value, { year: "numeric", ...x }).format(h);
  }
  function c(h, x) {
    return Jo(h) ? new Qe(e.value, {
      ...x,
      timeZone: h.timeZone
    }).formatToParts(Fe(h)) : new Qe(e.value, x).formatToParts(Fe(h));
  }
  function p(h, x = "narrow") {
    return new Qe(e.value, { weekday: x }).format(h);
  }
  function _(h) {
    var x;
    return ((x = new Qe(e.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(h).find((C) => C.type === "dayPeriod")) == null ? void 0 : x.value) === "PM" ? "PM" : "AM";
  }
  const m = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function w(h, x, C = {}) {
    const S = { ...m, ...C }, k = c(h, S).find((O) => O.type === x);
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
function lt(t) {
  const e = In({
    dir: A("ltr")
  });
  return $(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function Ut(t) {
  const e = at(), a = e == null ? void 0 : e.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${e == null ? void 0 : e.type.__name}`
  ), a == null || a.forEach((o) => {
    n[ud(As(o))] = (...s) => t(o, ...s);
  }), n;
}
let oo = 0;
function dl() {
  be((t) => {
    if (!ot)
      return;
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      e[0] ?? fs()
    ), document.body.insertAdjacentElement(
      "beforeend",
      e[1] ?? fs()
    ), oo++, t(() => {
      oo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), oo--;
    });
  });
}
function fs() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
function Ua(t) {
  return $(() => {
    var e;
    return ft(t) ? !!((e = Le(t)) != null && e.closest("form")) : !0;
  });
}
function se(t) {
  const e = at(), a = Object.keys((e == null ? void 0 : e.type.props) ?? {}).reduce((o, s) => {
    const r = (e == null ? void 0 : e.type.props[s]).default;
    return r !== void 0 && (o[s] = r), o;
  }, {}), n = Os(t);
  return $(() => {
    const o = {}, s = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      o[As(r)] = s[r];
    }), Object.keys({ ...a, ...o }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function ee(t, e) {
  const a = se(t), n = e ? Ut(e) : {};
  return $(() => ({
    ...a.value,
    ...n
  }));
}
function z() {
  const t = at(), e = A(), a = $(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = e.value) == null ? void 0 : r.$el.nodeName) ? (i = e.value) == null ? void 0 : i.$el.nextElementSibling : Le(e);
  }), n = Object.assign({}, t.exposed), o = {};
  for (const r in t.props)
    Object.defineProperty(o, r, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[r]
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
    get: () => t.vnode.el
  }), t.exposed = o;
  function s(r) {
    e.value = r, r && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => r instanceof Element ? r : r.$el
    }), t.exposed = o);
  }
  return { forwardRef: s, currentRef: e, currentElement: a };
}
function qc(t, e) {
  const a = Dr(!1, 300), n = A(null), o = Dc();
  function s() {
    n.value = null, a.value = !1;
  }
  function r(i, d) {
    const u = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = Jc(c, u.getBoundingClientRect()), _ = Qc(c, p), m = Xc(d.getBoundingClientRect()), w = ep([..._, ...m]);
    n.value = w, a.value = !0;
  }
  return be((i) => {
    if (t.value && e.value) {
      const d = (c) => r(c, e.value), u = (c) => r(c, t.value);
      t.value.addEventListener("pointerleave", d), e.value.addEventListener("pointerleave", u), i(() => {
        var c, p;
        (c = t.value) == null || c.removeEventListener("pointerleave", d), (p = e.value) == null || p.removeEventListener("pointerleave", u);
      });
    }
  }), be((i) => {
    var d;
    if (n.value) {
      const u = (c) => {
        var p, _;
        if (!n.value)
          return;
        const m = c.target, w = { x: c.clientX, y: c.clientY }, h = ((p = t.value) == null ? void 0 : p.contains(m)) || ((_ = e.value) == null ? void 0 : _.contains(m)), x = !Zc(w, n.value), C = !!m.closest("[data-grace-area-trigger]");
        h ? s() : (x || C) && (s(), o.trigger());
      };
      (d = t.value) == null || d.ownerDocument.addEventListener("pointermove", u), i(() => {
        var c;
        return (c = t.value) == null ? void 0 : c.ownerDocument.removeEventListener("pointermove", u);
      });
    }
  }), {
    isPointerInTransit: a,
    onPointerExit: o.on
  };
}
function Jc(t, e) {
  const a = Math.abs(e.top - t.y), n = Math.abs(e.bottom - t.y), o = Math.abs(e.right - t.x), s = Math.abs(e.left - t.x);
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
function Qc(t, e, a = 5) {
  const n = [];
  switch (e) {
    case "top":
      n.push(
        { x: t.x - a, y: t.y + a },
        { x: t.x + a, y: t.y + a }
      );
      break;
    case "bottom":
      n.push(
        { x: t.x - a, y: t.y - a },
        { x: t.x + a, y: t.y - a }
      );
      break;
    case "left":
      n.push(
        { x: t.x + a, y: t.y - a },
        { x: t.x + a, y: t.y + a }
      );
      break;
    case "right":
      n.push(
        { x: t.x - a, y: t.y - a },
        { x: t.x - a, y: t.y + a }
      );
      break;
  }
  return n;
}
function Xc(t) {
  const { top: e, right: a, bottom: n, left: o } = t;
  return [
    { x: o, y: e },
    { x: a, y: e },
    { x: a, y: n },
    { x: o, y: n }
  ];
}
function Zc(t, e) {
  const { x: a, y: n } = t;
  let o = !1;
  for (let s = 0, r = e.length - 1; s < e.length; r = s++) {
    const i = e[s].x, d = e[s].y, u = e[r].x, c = e[r].y;
    d > n != c > n && a < (u - i) * (n - d) / (c - d) + i && (o = !o);
  }
  return o;
}
function ep(t) {
  const e = t.slice();
  return e.sort((a, n) => a.x < n.x ? -1 : a.x > n.x ? 1 : a.y < n.y ? -1 : a.y > n.y ? 1 : 0), tp(e);
}
function tp(t) {
  if (t.length <= 1)
    return t.slice();
  const e = [];
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    for (; e.length >= 2; ) {
      const s = e[e.length - 1], r = e[e.length - 2];
      if ((s.x - r.x) * (o.y - r.y) >= (s.y - r.y) * (o.x - r.x))
        e.pop();
      else break;
    }
    e.push(o);
  }
  e.pop();
  const a = [];
  for (let n = t.length - 1; n >= 0; n--) {
    const o = t[n];
    for (; a.length >= 2; ) {
      const s = a[a.length - 1], r = a[a.length - 2];
      if ((s.x - r.x) * (o.y - r.y) >= (s.y - r.y) * (o.x - r.x))
        a.pop();
      else break;
    }
    a.push(o);
  }
  return a.pop(), e.length === 1 && a.length === 1 && e[0].x === a[0].x && e[0].y === a[0].y ? e : e.concat(a);
}
var ap = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, qt = /* @__PURE__ */ new WeakMap(), Za = /* @__PURE__ */ new WeakMap(), en = {}, lo = 0, Mr = function(t) {
  return t && (t.host || Mr(t.parentNode));
}, np = function(t, e) {
  return e.map(function(a) {
    if (t.contains(a))
      return a;
    var n = Mr(a);
    return n && t.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, op = function(t, e, a, n) {
  var o = np(e, Array.isArray(t) ? t : [t]);
  en[a] || (en[a] = /* @__PURE__ */ new WeakMap());
  var s = en[a], r = [], i = /* @__PURE__ */ new Set(), d = new Set(o), u = function(p) {
    !p || i.has(p) || (i.add(p), u(p.parentNode));
  };
  o.forEach(u);
  var c = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(_) {
      if (i.has(_))
        c(_);
      else
        try {
          var m = _.getAttribute(n), w = m !== null && m !== "false", h = (qt.get(_) || 0) + 1, x = (s.get(_) || 0) + 1;
          qt.set(_, h), s.set(_, x), r.push(_), h === 1 && w && Za.set(_, !0), x === 1 && _.setAttribute(a, "true"), w || _.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", _, C);
        }
    });
  };
  return c(e), i.clear(), lo++, function() {
    r.forEach(function(p) {
      var _ = qt.get(p) - 1, m = s.get(p) - 1;
      qt.set(p, _), s.set(p, m), _ || (Za.has(p) || p.removeAttribute(n), Za.delete(p)), m || p.removeAttribute(a);
    }), lo--, lo || (qt = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakMap(), Za = /* @__PURE__ */ new WeakMap(), en = {});
  };
}, lp = function(t, e, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), o = ap(t);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), op(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function Ha(t) {
  let e;
  te(() => Le(t), (a) => {
    a ? e = lp(a) : e && e();
  }), Ot(() => {
    e && e();
  });
}
let sp = 0;
function we(t, e = "radix") {
  const a = In({ useId: void 0 });
  return Il.useId ? `${e}-${Il.useId()}` : a.useId ? `${e}-${a.useId()}` : `${e}-${++sp}`;
}
function Tr(t) {
  const e = A(), a = $(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.width) ?? 0;
  }), n = $(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.height) ?? 0;
  });
  return ce(() => {
    const o = Le(t);
    if (o) {
      e.value = { width: o.offsetWidth, height: o.offsetHeight };
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
        e.value = { width: d, height: u };
      });
      return s.observe(o, { box: "border-box" }), () => s.unobserve(o);
    } else
      e.value = void 0;
  }), {
    width: a,
    height: n
  };
}
function rp(t, e) {
  const a = A(t);
  function n(o) {
    return e[a.value][o] ?? a.value;
  }
  return {
    state: a,
    dispatch: (o) => {
      a.value = n(o);
    }
  };
}
const ip = "data-item-text";
function ul(t) {
  const e = Dr("", 1e3);
  return {
    search: e,
    handleTypeaheadSearch: (a, n) => {
      if (!(t != null && t.value) && !n)
        return;
      e.value = e.value + a;
      const o = (t == null ? void 0 : t.value) ?? n, s = xe(), r = o.map((p) => {
        var _;
        return {
          ref: p,
          textValue: ((_ = (p.querySelector(`[${ip}]`) ?? p).textContent) == null ? void 0 : _.trim()) ?? ""
        };
      }), i = r.find((p) => p.ref === s), d = r.map((p) => p.textValue), u = up(d, e.value, i == null ? void 0 : i.textValue), c = r.find((p) => p.textValue === u);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      e.value = "";
    }
  };
}
function dp(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
function up(t, e, a) {
  const n = e.length > 1 && Array.from(e).every((i) => i === e[0]) ? e[0] : e, o = a ? t.indexOf(a) : -1;
  let s = dp(t, Math.max(o, 0));
  n.length === 1 && (s = s.filter((i) => i !== a));
  const r = s.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return r !== a ? r : void 0;
}
function Ir() {
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
const cl = y({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(t, { attrs: e, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const s = Tn(a.default()), r = s.findIndex((c) => c.type !== Vs);
      if (r === -1)
        return s;
      const i = s[r];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? P(e, i.props) : e;
      e.class && (o = i.props) != null && o.class && delete i.props.class;
      const u = cd(i, d);
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
  setup(t, { attrs: e, slots: a }) {
    const n = t.asChild ? "template" : t.as;
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => Ze(n, e) : n !== "template" ? () => Ze(t.as, e, { default: a.default }) : () => Ze(cl, e, { default: a.default });
  }
});
function va() {
  const t = A(), e = $(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (n = t.value) == null ? void 0 : n.$el.nextElementSibling : Le(t);
  });
  return {
    primitiveElement: t,
    currentElement: e
  };
}
const [Vr, cp] = ne("CollapsibleRoot"), pp = /* @__PURE__ */ y({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(t, { expose: e, emit: a }) {
    const n = t, o = ve(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = ve(n, "disabled");
    return cp({
      contentId: "",
      disabled: s,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), e({ open: o }), z(), (r, i) => (v(), g(l(L), {
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
}), fp = /* @__PURE__ */ y({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    z();
    const a = Vr();
    return (n, o) => {
      var s, r;
      return v(), g(l(L), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": e.asChild,
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
function vp(t, e) {
  var a;
  const n = A({}), o = A("none"), s = A(t), r = t.value ? "mounted" : "unmounted";
  let i;
  const d = ((a = e.value) == null ? void 0 : a.ownerDocument.defaultView) ?? Na, { state: u, dispatch: c } = rp(r, {
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
      const S = new CustomEvent(x, { bubbles: !1, cancelable: !1 });
      (C = e.value) == null || C.dispatchEvent(S);
    }
  };
  te(
    t,
    async (x, C) => {
      var S;
      const k = C !== x;
      if (await le(), k) {
        const O = o.value, E = tn(e.value);
        x ? (c("MOUNT"), p("enter"), E === "none" && p("after-enter")) : E === "none" || ((S = n.value) == null ? void 0 : S.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : C && O !== E ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const _ = (x) => {
    const C = tn(e.value), S = C.includes(
      x.animationName
    ), k = u.value === "mounted" ? "enter" : "leave";
    if (x.target === e.value && S && (p(`after-${k}`), c("ANIMATION_END"), !s.value)) {
      const O = e.value.style.animationFillMode;
      e.value.style.animationFillMode = "forwards", i = d == null ? void 0 : d.setTimeout(() => {
        var E;
        ((E = e.value) == null ? void 0 : E.style.animationFillMode) === "forwards" && (e.value.style.animationFillMode = O);
      });
    }
    x.target === e.value && C === "none" && c("ANIMATION_END");
  }, m = (x) => {
    x.target === e.value && (o.value = tn(e.value));
  }, w = te(
    e,
    (x, C) => {
      x ? (n.value = getComputedStyle(x), x.addEventListener("animationstart", m), x.addEventListener("animationcancel", _), x.addEventListener("animationend", _)) : (c("ANIMATION_END"), i !== void 0 && (d == null || d.clearTimeout(i)), C == null || C.removeEventListener("animationstart", m), C == null || C.removeEventListener("animationcancel", _), C == null || C.removeEventListener("animationend", _));
    },
    { immediate: !0 }
  ), h = te(u, () => {
    const x = tn(e.value);
    o.value = u.value === "mounted" ? x : "none";
  });
  return Ot(() => {
    w(), h();
  }), {
    isPresent: $(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function tn(t) {
  return t && getComputedStyle(t).animationName || "none";
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
  setup(t, { slots: e, expose: a }) {
    var n;
    const { present: o, forceMount: s } = me(t), r = A(), { isPresent: i } = vp(o, r);
    a({ present: i });
    let d = e.default({ present: i });
    d = Tn(d || []);
    const u = at();
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
    return () => s.value || o.value || i.value ? Ze(e.default({ present: i })[0], {
      ref: (c) => {
        const p = Le(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
}), mp = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Vr();
    a.contentId || (a.contentId = we(void 0, "radix-vue-collapsible-content"));
    const n = A(), { forwardRef: o, currentElement: s } = z(), r = A(0), i = A(0), d = $(() => a.open.value), u = A(d.value), c = A();
    return te(
      () => {
        var p;
        return [d.value, (p = n.value) == null ? void 0 : p.present];
      },
      async () => {
        await le();
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
    }), (p, _) => (v(), g(l(Te), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || l(a).open.value,
      "force-mount": !0
    }, {
      default: f(() => {
        var m, w;
        return [
          D(l(L), P(p.$attrs, {
            id: l(a).contentId,
            ref: l(o),
            "as-child": e.asChild,
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
              var h;
              return [
                (h = n.value) != null && h.present ? b(p.$slots, "default", { key: 0 }) : Z("", !0)
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
function Rr({ type: t, defaultValue: e, modelValue: a }) {
  const n = a || e;
  if (pn(t) && pn(a) && pn(e))
    throw new Error("Either the `type` or the `value` or `default-value` prop must be defined.");
  if (a !== void 0 && e !== void 0 && typeof a != typeof e)
    throw new Error(
      `Invalid prop \`value\` of value \`${a}\` supplied, should be the same type as the \`defaultValue\` prop, which is \`${e}\`. The \`value\` prop must be:
  ${t === "single" ? "- a string" : t === "multiple" ? "- an array of strings" : `- a string
- an array of strings`}
  - \`undefined\``
    );
  const o = a !== void 0 || e !== void 0;
  if (t && o) {
    const s = Array.isArray(a) || Array.isArray(e), r = a !== void 0 ? "modelValue" : "defaultValue", i = r === "modelValue" ? typeof a : typeof e;
    if (t === "single" && s)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "multiple";
    if (t === "multiple" && !s)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "single";
  }
  return o ? Array.isArray(n) ? "multiple" : "single" : t;
}
function hp({ type: t, defaultValue: e, modelValue: a }) {
  return t || Rr({ type: t, defaultValue: e, modelValue: a });
}
function gp({ type: t, defaultValue: e }) {
  return e !== void 0 ? e : t === "single" ? void 0 : [];
}
function yp(t, e) {
  const a = A(hp(t)), n = ve(t, "modelValue", e, {
    defaultValue: gp(t),
    passive: t.modelValue === void 0,
    deep: !0
  });
  te(
    () => [t.type, t.modelValue, t.defaultValue],
    () => {
      const r = Rr(t);
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
const [Vn, bp] = ne("AccordionRoot"), _p = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, { dir: o, disabled: s } = me(a), r = lt(o), { modelValue: i, changeModelValue: d, isSingle: u } = yp(a, n), { forwardRef: c, currentElement: p } = z();
    return bp({
      disabled: s,
      direction: r,
      orientation: a.orientation,
      parentElement: p,
      isSingle: u,
      collapsible: a.collapsible,
      modelValue: i,
      changeModelValue: d
    }), (_, m) => (v(), g(l(L), {
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
}), [pl, wp] = ne("AccordionItem"), xp = /* @__PURE__ */ y({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t, { expose: e }) {
    const a = t, n = Vn(), o = $(
      () => n.isSingle.value ? a.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(a.value)
    ), s = $(() => n.disabled.value || a.disabled), r = $(() => s.value ? "" : void 0), i = $(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    e({ open: o, dataDisabled: r });
    const { currentRef: d, currentElement: u } = z();
    wp({
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
      Pr(
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
    return (p, _) => (v(), g(l(pp), {
      "data-orientation": l(n).orientation,
      "data-disabled": r.value,
      "data-state": i.value,
      disabled: s.value,
      open: o.value,
      as: a.as,
      "as-child": a.asChild,
      onKeydown: Ke(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: f(() => [
        b(p.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), $p = /* @__PURE__ */ y({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Vn(), n = pl();
    return z(), (o, s) => (v(), g(l(mp), {
      role: "region",
      hidden: !l(n).open.value,
      "as-child": e.asChild,
      "force-mount": e.forceMount,
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
}), Cp = /* @__PURE__ */ y({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(t) {
    const e = t, a = Vn(), n = pl();
    return z(), (o, s) => (v(), g(l(L), {
      as: e.as,
      "as-child": e.asChild,
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
}), kp = /* @__PURE__ */ y({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Vn(), n = pl();
    n.triggerId || (n.triggerId = we(void 0, "radix-vue-accordion-trigger"));
    function o() {
      const s = a.isSingle.value && n.open.value && !a.collapsible;
      n.disabled.value || s || a.changeModelValue(n.value.value);
    }
    return (s, r) => (v(), g(l(fp), {
      id: l(n).triggerId,
      ref: l(n).currentRef,
      "data-radix-vue-collection-item": "",
      as: e.as,
      "as-child": e.asChild,
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
}), [st, Bp] = ne("DialogRoot"), Fr = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = ve(a, "open", e, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = A(), s = A(), { modal: r } = me(a);
    return Bp({
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
}), Lr = /* @__PURE__ */ y({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = st(), { forwardRef: n, currentElement: o } = z();
    return a.contentId || (a.contentId = we(void 0, "radix-vue-dialog-content")), ce(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), g(l(L), P(e, {
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
}), Ka = /* @__PURE__ */ y({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = il();
    return (a, n) => l(e) || a.forceMount ? (v(), g(Sn, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      b(a.$slots, "default")
    ], 8, ["to", "disabled"])) : Z("", !0);
  }
}), fl = /* @__PURE__ */ y({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Ka), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dp = "dismissableLayer.pointerDownOutside", Sp = "dismissableLayer.focusOutside";
function Nr(t, e) {
  const a = e.closest(
    "[data-dismissable-layer]"
  ), n = t.dataset.dismissableLayer === "" ? t : t.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    t.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function Pp(t, e) {
  var a;
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = A(!1), s = A(() => {
  });
  return be((r) => {
    if (!ot)
      return;
    const i = async (u) => {
      const c = u.target;
      if (e != null && e.value) {
        if (Nr(e.value, c)) {
          o.value = !1;
          return;
        }
        if (u.target && !o.value) {
          let p = function() {
            ll(
              Dp,
              t,
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
function Ep(t, e) {
  var a;
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = A(!1);
  return be((s) => {
    if (!ot)
      return;
    const r = async (i) => {
      e != null && e.value && (await le(), !(!e.value || Nr(e.value, i.target)) && i.target && !o.value && ll(
        Sp,
        t,
        { originalEvent: i }
      ));
    };
    n.addEventListener("focusin", r), s(() => n.removeEventListener("focusin", r));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const Ue = Rs({
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
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: s } = z(), r = $(
      () => {
        var w;
        return ((w = s.value) == null ? void 0 : w.ownerDocument) ?? globalThis.document;
      }
    ), i = $(() => Ue.layersRoot), d = $(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), u = $(() => Ue.layersWithOutsidePointerEventsDisabled.size > 0), c = $(() => {
      const w = Array.from(i.value), [h] = [...Ue.layersWithOutsidePointerEventsDisabled].slice(-1), x = w.indexOf(h);
      return d.value >= x;
    }), p = Pp(async (w) => {
      const h = [...Ue.branches].some(
        (x) => x == null ? void 0 : x.contains(w.target)
      );
      !c.value || h || (n("pointerDownOutside", w), n("interactOutside", w), await le(), w.defaultPrevented || n("dismiss"));
    }, s), _ = Ep((w) => {
      [...Ue.branches].some(
        (h) => h == null ? void 0 : h.contains(w.target)
      ) || (n("focusOutside", w), n("interactOutside", w), w.defaultPrevented || n("dismiss"));
    }, s);
    rl("Escape", (w) => {
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
    }), (w, h) => (v(), g(l(L), {
      ref: l(o),
      "as-child": w.asChild,
      as: w.as,
      "data-dismissable-layer": "",
      style: Et({
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
}), Op = /* @__PURE__ */ y({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = z();
    return ce(() => {
      Ue.branches.add(n.value);
    }), Ot(() => {
      Ue.branches.delete(n.value);
    }), (o, s) => (v(), g(l(L), P({ ref: l(a) }, e), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), so = "focusScope.autoFocusOnMount", ro = "focusScope.autoFocusOnUnmount", vs = { bubbles: !1, cancelable: !0 };
function fn(t, { select: e = !1 } = {}) {
  const a = xe();
  for (const n of t)
    if ($t(n, { select: e }), xe() !== a)
      return !0;
}
function Ap(t) {
  const e = vl(t), a = ms(e, t), n = ms(e.reverse(), t);
  return [a, n];
}
function vl(t) {
  const e = [], a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) e.push(a.currentNode);
  return e;
}
function ms(t, e) {
  for (const a of t)
    if (!Mp(a, { upTo: e }))
      return a;
}
function Mp(t, { upTo: e }) {
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  for (; t; ) {
    if (e !== void 0 && t === e)
      return !1;
    if (getComputedStyle(t).display === "none")
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function Tp(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function $t(t, { select: e = !1 } = {}) {
  if (t && t.focus) {
    const a = xe();
    t.focus({ preventScroll: !0 }), t !== a && Tp(t) && e && t.select();
  }
}
const Ip = Sc(() => A([]));
function Vp() {
  const t = Ip();
  return {
    add(e) {
      const a = t.value[0];
      e !== a && (a == null || a.pause()), t.value = hs(t.value, e), t.value.unshift(e);
    },
    remove(e) {
      var a;
      t.value = hs(t.value, e), (a = t.value[0]) == null || a.resume();
    }
  };
}
function hs(t, e) {
  const a = [...t], n = a.indexOf(e);
  return n !== -1 && a.splice(n, 1), a;
}
function Rp(t) {
  return t.filter((e) => e.tagName !== "A");
}
const Rn = /* @__PURE__ */ y({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(t, { emit: e }) {
    const a = t, n = e, { currentRef: o, currentElement: s } = z(), r = A(null), i = Vp(), d = Rs({
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
        p.contains(C) ? r.value = C : $t(r.value, { select: !0 });
      }
      function m(x) {
        if (d.paused || !p)
          return;
        const C = x.relatedTarget;
        C !== null && (p.contains(C) || $t(r.value, { select: !0 }));
      }
      function w(x) {
        p.contains(r.value) || $t(p);
      }
      document.addEventListener("focusin", _), document.addEventListener("focusout", m);
      const h = new MutationObserver(w);
      p && h.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", _), document.removeEventListener("focusout", m), h.disconnect();
      });
    }), be(async (c) => {
      const p = s.value;
      if (await le(), !p)
        return;
      i.add(d);
      const _ = xe();
      if (!p.contains(_)) {
        const m = new CustomEvent(so, vs);
        p.addEventListener(so, (w) => n("mountAutoFocus", w)), p.dispatchEvent(m), m.defaultPrevented || (fn(Rp(vl(p)), {
          select: !0
        }), xe() === _ && $t(p));
      }
      c(() => {
        p.removeEventListener(so, (h) => n("mountAutoFocus", h));
        const m = new CustomEvent(ro, vs), w = (h) => {
          n("unmountAutoFocus", h);
        };
        p.addEventListener(ro, w), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || $t(_ ?? document.body, { select: !0 }), p.removeEventListener(ro, w), i.remove(d);
        }, 0);
      });
    });
    function u(c) {
      if (!a.loop && !a.trapped || d.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, _ = xe();
      if (p && _) {
        const m = c.currentTarget, [w, h] = Ap(m);
        w && h ? !c.shiftKey && _ === h ? (c.preventDefault(), a.loop && $t(w, { select: !0 })) : c.shiftKey && _ === w && (c.preventDefault(), a.loop && $t(h, { select: !0 })) : _ === m && c.preventDefault();
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
        b(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Fp = "menu.itemSelect", ko = ["Enter", " "], Lp = ["ArrowDown", "PageUp", "Home"], zr = ["ArrowUp", "PageDown", "End"], Np = [...Lp, ...zr], zp = {
  ltr: [...ko, "ArrowRight"],
  rtl: [...ko, "ArrowLeft"]
}, Up = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function ml(t) {
  return t ? "open" : "closed";
}
function Cn(t) {
  return t === "indeterminate";
}
function hl(t) {
  return Cn(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
function Bo(t) {
  const e = xe();
  for (const a of t)
    if (a === e || (a.focus(), xe() !== e))
      return;
}
function Hp(t, e) {
  const { x: a, y: n } = t;
  let o = !1;
  for (let s = 0, r = e.length - 1; s < e.length; r = s++) {
    const i = e[s].x, d = e[s].y, u = e[r].x, c = e[r].y;
    d > n != c > n && a < (u - i) * (n - d) / (c - d) + i && (o = !o);
  }
  return o;
}
function Kp(t, e) {
  if (!e)
    return !1;
  const a = { x: t.clientX, y: t.clientY };
  return Hp(a, e);
}
function Ia(t) {
  return t.pointerType === "mouse";
}
const Wp = "DialogTitle", jp = "DialogContent";
function Gp({
  titleName: t = Wp,
  contentName: e = jp,
  componentLink: a = "dialog.html#title",
  titleId: n,
  descriptionId: o,
  contentElement: s
}) {
  const r = `Warning: \`${e}\` requires a \`${t}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${a}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${e}.`;
  ce(() => {
    var d;
    document.getElementById(n) || console.warn(r);
    const u = (d = s.value) == null ? void 0 : d.getAttribute("aria-describedby");
    o && u && (document.getElementById(o) || console.warn(i));
  });
}
const Ur = /* @__PURE__ */ y({
  __name: "DialogContentImpl",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = st(), { forwardRef: s, currentElement: r } = z();
    return o.titleId || (o.titleId = we(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = we(void 0, "radix-vue-dialog-description")), ce(() => {
      o.contentElement = r, xe() !== document.body && (o.triggerElement.value = xe());
    }), process.env.NODE_ENV !== "production" && Gp({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: r
    }), (i, d) => (v(), g(l(Rn), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: f(() => [
        D(l(ma), P({
          id: l(o).contentId,
          ref: l(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(o).descriptionId,
          "aria-labelledby": l(o).titleId,
          "data-state": l(ml)(l(o).open.value)
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
}), Yp = /* @__PURE__ */ y({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = st(), s = Ut(n), { forwardRef: r, currentElement: i } = z();
    return Ha(i), (d, u) => (v(), g(Ur, P({ ...a, ...l(s) }, {
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
}), qp = /* @__PURE__ */ y({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: e }) {
    const a = t, n = Ut(e);
    z();
    const o = st(), s = A(!1), r = A(!1);
    return (i, d) => (v(), g(Ur, P({ ...a, ...l(n) }, {
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
}), gl = /* @__PURE__ */ y({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = st(), s = Ut(n), { forwardRef: r } = z();
    return (i, d) => (v(), g(l(Te), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), g(Yp, P({
          key: 0,
          ref: l(r)
        }, { ...a, ...l(s), ...i.$attrs }), {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), g(qp, P({
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
}), Jp = /* @__PURE__ */ y({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = st();
    return za(!0), z(), (a, n) => (v(), g(l(L), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": l(e).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), yl = /* @__PURE__ */ y({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = st(), { forwardRef: a } = z();
    return (n, o) => {
      var s;
      return (s = l(e)) != null && s.modal.value ? (v(), g(l(Te), {
        key: 0,
        present: n.forceMount || l(e).open.value
      }, {
        default: f(() => [
          D(Jp, P(n.$attrs, {
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
      }, 8, ["present"])) : Z("", !0);
    };
  }
}), Wa = /* @__PURE__ */ y({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    z();
    const a = st();
    return (n, o) => (v(), g(l(L), P(e, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (s) => l(a).onOpenChange(!1))
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Hr = /* @__PURE__ */ y({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(t) {
    const e = t, a = st();
    return z(), (n, o) => (v(), g(l(L), P(e, {
      id: l(a).titleId
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Kr = /* @__PURE__ */ y({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(t) {
    const e = t;
    z();
    const a = st();
    return (n, o) => (v(), g(l(L), P(e, {
      id: l(a).descriptionId
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function Qp(t) {
  function e(n) {
    return Array.isArray(t.date.value) ? t.date.value.some((o) => Be(o, n)) : t.date.value ? Be(t.date.value, n) : !1;
  }
  const a = $(
    () => {
      var n, o, s, r;
      if (Array.isArray(t.date.value)) {
        if (!t.date.value.length)
          return !1;
        for (const i of t.date.value)
          if ((n = t.isDateDisabled) != null && n.call(t, i) || (o = t.isDateUnavailable) != null && o.call(t, i))
            return !0;
      } else {
        if (!t.date.value)
          return !1;
        if ((s = t.isDateDisabled) != null && s.call(t, t.date.value) || (r = t.isDateUnavailable) != null && r.call(t, t.date.value))
          return !0;
      }
      return !1;
    }
  );
  return {
    isDateSelected: e,
    isInvalid: a
  };
}
function Xp(t, e) {
  const a = e(t), n = a.compare(t), o = {};
  return n >= 7 && (o.day = 1), n >= mt(t) && (o.month = 1), a.set({ ...o });
}
function Zp(t, e) {
  const a = e(t), n = t.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= mt(t) && (o.month = 13), a.set({ ...o });
}
function ef(t, e) {
  return e(t);
}
function tf(t, e) {
  return e(t);
}
function Wr(t) {
  const e = Ar(t.locale.value), a = $(() => {
    const h = {
      calendar: t.placeholder.value.calendar.identifier
    };
    return t.placeholder.value.calendar.identifier === "gregory" && t.placeholder.value.era === "BC" && (h.era = "short"), h;
  }), n = A(Mt({
    dateObj: t.placeholder.value,
    weekStartsOn: t.weekStartsOn.value,
    locale: t.locale.value,
    fixedWeeks: t.fixedWeeks.value,
    numberOfMonths: t.numberOfMonths.value
  })), o = $(() => n.value.map((h) => h.value));
  function s(h) {
    return !o.value.some((x) => Rl(h, x));
  }
  const r = (h = "month", x) => {
    if (!t.maxValue.value || !n.value.length)
      return !1;
    if (t.disabled.value)
      return !0;
    const C = n.value[n.value.length - 1].value;
    if (x || t.nextPage.value) {
      const k = Xp(C, x || t.nextPage.value);
      return Ea(k, t.maxValue.value);
    }
    if (h === "year") {
      const k = C.add({ years: 1 }).set({ day: 1, month: 1 });
      return Ea(k, t.maxValue.value);
    }
    const S = C.add({ months: 1 }).set({ day: 1 });
    return Ea(S, t.maxValue.value);
  }, i = (h = "month", x) => {
    if (!t.minValue.value || !n.value.length)
      return !1;
    if (t.disabled.value)
      return !0;
    const C = n.value[0].value;
    if (x || t.prevPage.value) {
      const k = Zp(C, x || t.prevPage.value);
      return Bt(k, t.minValue.value);
    }
    if (h === "year") {
      const k = C.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return Bt(k, t.minValue.value);
    }
    const S = C.subtract({ months: 1 }).set({ day: 35 });
    return Bt(S, t.minValue.value);
  };
  function d(h) {
    var x;
    return !!((x = t.isDateDisabled) != null && x.call(t, h) || t.disabled.value || t.maxValue.value && Ea(h, t.maxValue.value) || t.minValue.value && Bt(h, t.minValue.value));
  }
  const u = (h) => {
    var x;
    return !!((x = t.isDateUnavailable) != null && x.call(t, h));
  }, c = $(() => n.value.length ? n.value[0].rows[0].map((h) => e.dayOfWeek(Fe(h), t.weekdayFormat.value)) : []), p = (h = "month", x) => {
    const C = n.value[0].value;
    if (x || t.nextPage.value) {
      const O = ef(C, x || t.nextPage.value), E = Mt({
        dateObj: O,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = E;
      const V = {};
      if (!x) {
        const M = E[0].value.compare(C);
        M >= mt(C) && (V.day = 1), M >= 365 && (V.month = 1);
      }
      t.placeholder.value = E[0].value.set({ ...V });
      return;
    }
    const S = h === "month" ? C.add({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : C.add({ years: 1 }), k = Mt({
      dateObj: S,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    });
    n.value = k, t.placeholder.value = k[0].value.set({ day: 1 });
  }, _ = (h = "month", x) => {
    const C = n.value[0].value;
    if (x || t.prevPage.value) {
      const O = tf(C, x || t.prevPage.value), E = Mt({
        dateObj: O,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = E;
      const V = {};
      if (!x) {
        const M = C.compare(E[0].value);
        M >= mt(C) && (V.day = 1), M >= 365 && (V.month = 1);
      }
      t.placeholder.value = E[0].value.set({ ...V });
      return;
    }
    const S = h === "month" ? C.subtract({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : C.subtract({ years: 1 }), k = Mt({
      dateObj: S,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    });
    n.value = k, t.placeholder.value = k[0].value.set({ day: 1 });
  };
  te(t.placeholder, (h) => {
    o.value.some((x) => Rl(x, h)) || (n.value = Mt({
      dateObj: h,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    }));
  }), te([t.locale, t.weekStartsOn, t.fixedWeeks, t.numberOfMonths], () => {
    n.value = Mt({
      dateObj: t.placeholder.value,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    });
  });
  const m = $(() => {
    if (!n.value.length)
      return "";
    if (t.locale.value !== e.getLocale() && e.setLocale(t.locale.value), n.value.length === 1) {
      const E = n.value[0].value;
      return `${e.fullMonthAndYear(Fe(E), a.value)}`;
    }
    const h = Fe(n.value[0].value), x = Fe(n.value[n.value.length - 1].value), C = e.fullMonth(h, a.value), S = e.fullMonth(x, a.value), k = e.fullYear(h, a.value), O = e.fullYear(x, a.value);
    return k === O ? `${C} - ${S} ${O}` : `${C} ${k} - ${S} ${O}`;
  }), w = $(() => `${t.calendarLabel.value ?? "Event Date"}, ${m.value}`);
  return {
    isDateDisabled: d,
    isDateUnavailable: u,
    isNextButtonDisabled: r,
    isPrevButtonDisabled: i,
    grid: n,
    weekdays: c,
    visibleView: o,
    isOutsideVisibleView: s,
    formatter: e,
    nextPage: p,
    prevPage: _,
    headingValue: m,
    fullCalendarLabel: w
  };
}
const af = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, nf = {
  role: "heading",
  "aria-level": "2"
}, [ha, of] = ne("CalendarRoot"), jr = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, {
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
      numberOfMonths: h,
      preventDeselect: x,
      isDateDisabled: C,
      isDateUnavailable: S,
      calendarLabel: k,
      defaultValue: O,
      nextPage: E,
      prevPage: V,
      dir: M
    } = me(a), { primitiveElement: U, currentElement: N } = va(), B = lt(M), I = ve(a, "modelValue", n, {
      defaultValue: O.value,
      passive: a.modelValue === void 0
    }), R = $r({
      defaultPlaceholder: a.placeholder,
      defaultValue: I.value,
      locale: a.locale
    }), Y = ve(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? R.copy(),
      passive: a.placeholder === void 0
    });
    function G(ie) {
      Y.value = ie.copy();
    }
    const {
      fullCalendarLabel: X,
      headingValue: de,
      isDateDisabled: ge,
      isDateUnavailable: ye,
      isNextButtonDisabled: j,
      isPrevButtonDisabled: oe,
      weekdays: ue,
      isOutsideVisibleView: Ne,
      nextPage: qe,
      prevPage: yt,
      formatter: bt,
      grid: Ca
    } = Wr({
      locale: o,
      placeholder: Y,
      weekStartsOn: u,
      fixedWeeks: p,
      numberOfMonths: h,
      minValue: m,
      maxValue: w,
      disabled: s,
      weekdayFormat: c,
      pagedNavigation: d,
      isDateDisabled: C.value,
      isDateUnavailable: S.value,
      calendarLabel: k,
      nextPage: E,
      prevPage: V
    }), {
      isInvalid: Ie,
      isDateSelected: Ee
    } = Qp({
      date: I,
      isDateDisabled: ge,
      isDateUnavailable: ye
    });
    te(I, (ie) => {
      if (Array.isArray(ie) && ie.length) {
        const De = ie[ie.length - 1];
        De && !Xe(Y.value, De) && G(De);
      } else !Array.isArray(ie) && ie && !Xe(Y.value, ie) && G(ie);
    });
    function Je(ie) {
      if (_.value) {
        if (!I.value)
          I.value = [ie.copy()];
        else if (Array.isArray(I.value)) {
          if (I.value.findIndex((De) => Be(De, ie)) === -1)
            I.value = [...I.value, ie];
          else if (!x.value) {
            const De = I.value.filter((rt) => !Be(rt, ie));
            if (!De.length) {
              Y.value = ie.copy(), I.value = void 0;
              return;
            }
            I.value = De.map((rt) => rt.copy());
          }
        }
      } else {
        if (!I.value) {
          I.value = ie.copy();
          return;
        }
        !x.value && Xe(I.value, ie) ? (Y.value = ie.copy(), I.value = void 0) : I.value = ie.copy();
      }
    }
    return ce(() => {
      i.value && Cr(N.value);
    }), of({
      isDateUnavailable: ye,
      dir: B,
      isDateDisabled: ge,
      locale: o,
      formatter: bt,
      modelValue: I,
      placeholder: Y,
      disabled: s,
      initialFocus: i,
      pagedNavigation: d,
      weekStartsOn: u,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: _,
      numberOfMonths: h,
      readonly: r,
      preventDeselect: x,
      fullCalendarLabel: X,
      headingValue: de,
      isInvalid: Ie,
      isDateSelected: Ee,
      isNextButtonDisabled: j,
      isPrevButtonDisabled: oe,
      isOutsideVisibleView: Ne,
      nextPage: qe,
      prevPage: yt,
      parentElement: N,
      onPlaceholderChange: G,
      onDateChange: Je
    }), (ie, De) => (v(), g(l(L), {
      ref_key: "primitiveElement",
      ref: U,
      as: ie.as,
      "as-child": ie.asChild,
      role: "application",
      "aria-label": l(X),
      "data-readonly": l(r) ? "" : void 0,
      "data-disabled": l(s) ? "" : void 0,
      "data-invalid": l(Ie) ? "" : void 0,
      dir: l(B)
    }, {
      default: f(() => [
        b(ie.$slots, "default", {
          date: l(Y),
          grid: l(Ca),
          weekDays: l(ue),
          weekStartsOn: l(u),
          locale: l(o),
          fixedWeeks: l(p)
        }),
        re("div", af, [
          re("div", nf, Q(l(X)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), lf = /* @__PURE__ */ y({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sf = /* @__PURE__ */ y({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = ha();
    return (n, o) => (v(), g(l(L), P(e, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        b(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          q(Q(l(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), rf = /* @__PURE__ */ y({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(t) {
    const e = t, a = ha(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), g(l(L), P(e, {
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
}), df = /* @__PURE__ */ y({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(t) {
    const e = ha();
    return (a, n) => {
      var o, s;
      return v(), g(l(L), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": l(e).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": l(e).isDateDisabled(a.date) || ((s = (o = l(e)).isDateUnavailable) == null ? void 0 : s.call(o, a.date)),
        "data-disabled": l(e).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
          b(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), uf = /* @__PURE__ */ y({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cf = /* @__PURE__ */ y({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = $(() => n.disabled.value || n.isNextButtonDisabled(e.step, e.nextPage)), n = ha();
    return (o, s) => (v(), g(l(L), {
      as: e.as,
      "as-child": e.asChild,
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).nextPage(e.step, e.nextPage))
    }, {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          q("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), pf = /* @__PURE__ */ y({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = $(() => n.disabled.value || n.isPrevButtonDisabled(e.step, e.prevPage)), n = ha();
    return (o, s) => (v(), g(l(L), {
      "aria-label": "Previous page",
      as: e.as,
      "as-child": e.asChild,
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).prevPage(e.step, e.prevPage))
    }, {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          q("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), ff = /* @__PURE__ */ y({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), P(e, { "aria-hidden": "true" }), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vf = /* @__PURE__ */ y({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mf = /* @__PURE__ */ y({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hf = /* @__PURE__ */ y({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Ir(), n = ha(), { primitiveElement: o, currentElement: s } = va(), r = $(() => e.day.day.toLocaleString(n.locale.value)), i = $(() => n.formatter.custom(Fe(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), d = $(() => n.isDateDisabled(e.day)), u = $(
      () => {
        var k;
        return (k = n.isDateUnavailable) == null ? void 0 : k.call(n, e.day);
      }
    ), c = $(() => js(e.day, vt())), p = $(() => !Ws(e.day, e.month)), _ = $(
      () => n.isOutsideVisibleView(e.day)
    ), m = $(() => !n.disabled.value && Be(e.day, n.placeholder.value)), w = $(() => n.isDateSelected(e.day)), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])";
    function x(k) {
      var O;
      n.readonly.value || n.isDateDisabled(k) || (O = n.isDateUnavailable) != null && O.call(n, k) || n.onDateChange(k);
    }
    function C() {
      x(e.day);
    }
    function S(k) {
      k.preventDefault(), k.stopPropagation();
      const O = n.parentElement.value, E = O ? Array.from(O.querySelectorAll(h)) : [];
      let V = E.indexOf(s.value);
      const M = 7, U = n.dir.value === "rtl" ? -1 : 1;
      switch (k.code) {
        case a.ARROW_RIGHT:
          V += U;
          break;
        case a.ARROW_LEFT:
          V -= U;
          break;
        case a.ARROW_UP:
          V -= M;
          break;
        case a.ARROW_DOWN:
          V += M;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          x(e.day);
          return;
        default:
          return;
      }
      if (V >= 0 && V < E.length) {
        E[V].focus();
        return;
      }
      if (V < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), le(() => {
          const N = O ? Array.from(O.querySelectorAll(h)) : [];
          if (!n.pagedNavigation.value) {
            const B = mt(n.placeholder.value);
            N[B - Math.abs(V)].focus();
            return;
          }
          N[N.length - Math.abs(V)].focus();
        });
        return;
      }
      if (V >= E.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), le(() => {
          const N = O ? Array.from(O.querySelectorAll(h)) : [];
          if (!n.pagedNavigation.value) {
            const B = mt(n.placeholder.value.add({ months: n.numberOfMonths.value - 1 }));
            N[N.length - B + V - E.length].focus();
            return;
          }
          N[V - E.length].focus();
        });
      }
    }
    return (k, O) => (v(), g(l(L), P({
      ref_key: "primitiveElement",
      ref: o
    }, e, {
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
        Ke(S, ["up", "down", "left", "right", "space", "enter"]),
        O[0] || (O[0] = Ke(Ce(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: f(() => [
        b(k.$slots, "default", { dayValue: r.value }, () => [
          q(Q(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function kn(t) {
  return t === "indeterminate";
}
function Gr(t) {
  return kn(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
const gf = ["value", "checked", "name", "disabled", "required"], [yf, bf] = ne("CheckboxRoot"), _f = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, { disabled: o } = me(a), s = ve(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    }), { forwardRef: r, currentElement: i } = z(), d = Ua(i), u = $(() => {
      var c;
      return a.id && i.value ? (c = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return bf({
      disabled: o,
      state: s
    }), (c, p) => (v(), F(J, null, [
      D(l(L), P(c.$attrs, {
        id: c.id,
        ref: l(r),
        role: "checkbox",
        "as-child": a.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": l(kn)(l(s)) ? "mixed" : l(s),
        "aria-required": a.required,
        "aria-label": c.$attrs["aria-label"] || u.value,
        "data-state": l(Gr)(l(s)),
        "data-disabled": l(o) ? "" : void 0,
        disabled: l(o),
        onKeydown: Ke(Ce(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (_) => s.value = l(kn)(l(s)) ? !0 : !l(s))
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
      }, null, 8, gf)) : Z("", !0)
    ], 64));
  }
}), wf = /* @__PURE__ */ y({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e } = z(), a = yf();
    return (n, o) => (v(), g(l(Te), {
      present: n.forceMount || l(kn)(l(a).state.value) || l(a).state.value === !0
    }, {
      default: f(() => [
        D(l(L), P({
          ref: l(e),
          "data-state": l(Gr)(l(a).state.value),
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
}), [Yr, xf] = ne("PopperRoot"), ga = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(t) {
    const e = A();
    return xf({
      anchor: e,
      onAnchorChange: (a) => e.value = a
    }), (a, n) => b(a.$slots, "default");
  }
}), Fn = /* @__PURE__ */ y({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = z(), o = Yr();
    return be(() => {
      o.onAnchorChange(e.element ?? n.value);
    }), (s, r) => (v(), g(l(L), {
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
function $f(t) {
  return t !== null;
}
function Cf(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      var a, n, o;
      const { placement: s, rects: r, middlewareData: i } = e, d = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, u = d ? 0 : t.arrowWidth, c = d ? 0 : t.arrowHeight, [p, _] = Do(s), m = { start: "0%", center: "50%", end: "100%" }[_], w = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + u / 2, h = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + c / 2;
      let x = "", C = "";
      return p === "bottom" ? (x = d ? m : `${w}px`, C = `${-c}px`) : p === "top" ? (x = d ? m : `${w}px`, C = `${r.floating.height + c}px`) : p === "right" ? (x = `${-c}px`, C = d ? m : `${h}px`) : p === "left" && (x = `${r.floating.width + c}px`, C = d ? m : `${h}px`), { data: { x, y: C } };
    }
  };
}
function Do(t) {
  const [e, a = "center"] = t.split("-");
  return [e, a];
}
const qr = {
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
}, [D0, kf] = ne("PopperContent"), ia = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Ls({
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
    ...qr
  }),
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Yr(), { forwardRef: s, currentElement: r } = z(), i = A(), d = A(), { width: u, height: c } = Tr(d), p = $(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), _ = $(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = $(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), w = $(() => ({
      padding: _.value,
      boundary: m.value.filter($f),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), h = Bc(() => [
      vc({
        mainAxis: a.sideOffset + c.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && us({
        ...w.value
      }),
      a.avoidCollisions && mc({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? bc() : void 0,
        ...w.value
      }),
      !a.prioritizePosition && a.avoidCollisions && us({
        ...w.value
      }),
      hc({
        ...w.value,
        apply: ({ elements: B, rects: I, availableWidth: R, availableHeight: Y }) => {
          const { width: G, height: X } = I.reference, de = B.floating.style;
          de.setProperty(
            "--radix-popper-available-width",
            `${R}px`
          ), de.setProperty(
            "--radix-popper-available-height",
            `${Y}px`
          ), de.setProperty(
            "--radix-popper-anchor-width",
            `${G}px`
          ), de.setProperty(
            "--radix-popper-anchor-height",
            `${X}px`
          );
        }
      }),
      d.value && xc({ element: d.value, padding: a.arrowPadding }),
      Cf({
        arrowWidth: u.value,
        arrowHeight: c.value
      }),
      a.hideWhenDetached && gc({ strategy: "referenceHidden", ...w.value })
    ]), { floatingStyles: x, placement: C, isPositioned: S, middlewareData: k } = $c(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...B) => fc(...B, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: h
      }
    ), O = $(
      () => Do(C.value)[0]
    ), E = $(
      () => Do(C.value)[1]
    );
    gd(() => {
      S.value && n("placed");
    });
    const V = $(
      () => {
        var B;
        return ((B = k.value.arrow) == null ? void 0 : B.centerOffset) !== 0;
      }
    ), M = A("");
    be(() => {
      r.value && (M.value = window.getComputedStyle(r.value).zIndex);
    });
    const U = $(() => {
      var B;
      return ((B = k.value.arrow) == null ? void 0 : B.x) ?? 0;
    }), N = $(() => {
      var B;
      return ((B = k.value.arrow) == null ? void 0 : B.y) ?? 0;
    });
    return kf({
      placedSide: O,
      onArrowChange: (B) => d.value = B,
      arrowX: U,
      arrowY: N,
      shouldHideArrow: V
    }), (B, I) => {
      var R, Y, G;
      return v(), F("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Et({
          ...l(x),
          transform: l(S) ? l(x).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: M.value,
          "--radix-popper-transform-origin": [
            (R = l(k).transformOrigin) == null ? void 0 : R.x,
            (Y = l(k).transformOrigin) == null ? void 0 : Y.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((G = l(k).hide) == null ? void 0 : G.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        D(l(L), P({ ref: l(s) }, B.$attrs, {
          "as-child": a.asChild,
          as: B.as,
          "data-side": O.value,
          "data-align": E.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l(S) ? void 0 : "none"
          }
        }), {
          default: f(() => [
            b(B.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), ja = /* @__PURE__ */ y({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return z(), (e, a) => (v(), g(l(L), {
      as: e.as,
      "as-child": e.asChild,
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
        b(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Bf = /* @__PURE__ */ y({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(t) {
    const e = t, a = $(() => typeof e.value == "string" || typeof e.value == "number" || typeof e.value == "boolean" ? [{ name: e.name, value: e.value }] : typeof e.value == "object" && Array.isArray(e.value) ? e.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${o}][${e.name}][${s}]`, value: r })) : { name: `[${e.name}][${o}]`, value: n }) : e.value !== null && typeof e.value == "object" && !Array.isArray(e.value) ? Object.entries(e.value).map(([n, o]) => ({ name: `[${e.name}][${n}]`, value: o })) : []);
    return (n, o) => (v(!0), F(J, null, fe(a.value, (s) => (v(), g(ja, {
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
}), Df = "data-radix-vue-collection-item", [bl, Sf] = ne("CollectionProvider");
function _l(t = Df) {
  const e = A(/* @__PURE__ */ new Map()), a = A(), n = Sf({
    collectionRef: a,
    itemMap: e,
    attrName: t
  }), { getItems: o } = xl(n), s = $(() => Array.from(n.itemMap.value.values())), r = $(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: s, itemMapSize: r };
}
const wl = y({
  name: "CollectionSlot",
  setup(t, { slots: e }) {
    const a = bl(), { primitiveElement: n, currentElement: o } = va();
    return te(o, () => {
      a.collectionRef.value = o.value;
    }), () => Ze(cl, { ref: n }, e);
  }
}), Ln = y({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(t, { slots: e, attrs: a }) {
    const n = bl(), { primitiveElement: o, currentElement: s } = va();
    return be((r) => {
      if (s.value) {
        const i = md(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: t.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => Ze(cl, { ...a, [n.attrName]: "", ref: o }, e);
  }
});
function xl(t) {
  const e = t ?? bl();
  return { getItems: () => {
    const a = e.collectionRef.value;
    if (!a)
      return [];
    const n = Array.from(a.querySelectorAll(`[${e.attrName}]`));
    return Array.from(e.itemMap.value.values()).sort(
      (o, s) => n.indexOf(o.ref) - n.indexOf(s.ref)
    );
  } };
}
const [ya, Pf] = ne("ComboboxRoot"), Ef = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, { multiple: o, disabled: s, dir: r } = me(a), i = lt(r), d = ve(a, "searchTerm", n, {
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
    async function _(j) {
      var oe, ue;
      c.value = j, await le(), j ? (u.value && (Array.isArray(u.value) && o.value ? p.value = (oe = k().find((Ne) => {
        var qe, yt;
        return ((yt = (qe = Ne.ref) == null ? void 0 : qe.dataset) == null ? void 0 : yt.state) === "checked";
      })) == null ? void 0 : oe.value : p.value = u.value), await le(), (ue = h.value) == null || ue.focus(), Y()) : (w.value = !1, a.resetSearchTermOnBlur && U("blur"));
    }
    function m(j) {
      if (Array.isArray(u.value) && o.value) {
        const oe = u.value.findIndex((Ne) => Vt(Ne, j)), ue = [...u.value];
        oe === -1 ? ue.push(j) : ue.splice(oe, 1), u.value = ue;
      } else
        u.value = j, _(!1);
    }
    const w = A(!1), h = A(), x = A(), { forwardRef: C, currentElement: S } = z(), { getItems: k, reactiveItems: O, itemMapSize: E } = _l("data-radix-vue-combobox-item"), V = A([]);
    te(() => E.value, () => {
      V.value = k().map((j) => j.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const M = $(() => {
      if (w.value) {
        if (a.filterFunction)
          return a.filterFunction(V.value, d.value);
        const j = V.value.filter((oe) => typeof oe == "string");
        if (j.length)
          return j.filter((oe) => {
            var ue;
            return oe.toLowerCase().includes((ue = d.value) == null ? void 0 : ue.toLowerCase());
          });
      }
      return V.value;
    });
    function U(j) {
      const oe = j === "blur" || j === "select" && a.resetSearchTermOnSelect;
      !o.value && u.value && !Array.isArray(u.value) ? a.displayValue ? d.value = a.displayValue(u.value) : typeof u.value != "object" ? d.value = u.value.toString() : oe && (d.value = "") : oe && (d.value = "");
    }
    const N = $(() => M.value.findIndex((j) => Vt(j, p.value))), B = $(() => {
      var j;
      return (j = O.value.find((oe) => Vt(oe.value, p.value))) == null ? void 0 : j.ref;
    }), I = $(() => JSON.stringify(u.value));
    te(I, async () => {
      await le(), await le(), U("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), te(() => [M.value.length, d.value.length], async ([j, oe], [ue, Ne]) => {
      await le(), await le(), j && (Ne > oe || N.value === -1) && (p.value = M.value[0]);
    });
    const R = Ua(S);
    function Y() {
      var j;
      B.value instanceof Element && ((j = B.value) == null || j.scrollIntoView({ block: "nearest" }));
    }
    function G() {
      B.value instanceof Element && B.value.focus && B.value.focus();
    }
    const X = A(!1);
    function de() {
      X.value = !0;
    }
    function ge() {
      requestAnimationFrame(() => {
        X.value = !1;
      });
    }
    async function ye(j) {
      var oe;
      M.value.length && p.value && B.value instanceof Element && (j.preventDefault(), j.stopPropagation(), X.value || (oe = B.value) == null || oe.click());
    }
    return Pf({
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
      inputElement: h,
      selectedElement: B,
      onInputElementChange: (j) => h.value = j,
      onInputNavigation: async (j) => {
        const oe = N.value;
        oe === 0 && j === "up" || oe === M.value.length - 1 && j === "down" || (oe === -1 && M.value.length || j === "home" ? p.value = M.value[0] : j === "end" ? p.value = M.value[M.value.length - 1] : p.value = M.value[j === "up" ? oe - 1 : oe + 1], await le(), Y(), G(), le(() => {
          var ue;
          return (ue = h.value) == null ? void 0 : ue.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: ye,
      onCompositionEnd: ge,
      onCompositionStart: de,
      selectedValue: p,
      onSelectedValueChange: (j) => p.value = j,
      parentElement: S,
      contentElement: x,
      onContentElementChange: (j) => x.value = j
    }), (j, oe) => (v(), g(l(ga), null, {
      default: f(() => [
        D(l(L), P({
          ref: l(C),
          style: {
            pointerEvents: l(c) ? "auto" : void 0
          },
          as: j.as,
          "as-child": j.asChild,
          dir: l(i)
        }, j.$attrs), {
          default: f(() => [
            b(j.$slots, "default", {
              open: l(c),
              modelValue: l(u)
            }),
            l(R) && a.name ? (v(), g(l(Bf), {
              key: 0,
              name: a.name,
              value: l(u)
            }, null, 8, ["name", "value"])) : Z("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Of = /* @__PURE__ */ y({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(t) {
    const e = t, a = ya(), { forwardRef: n, currentElement: o } = z();
    ce(() => {
      const c = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      c && (a.onInputElementChange(c), setTimeout(() => {
        e.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const s = $(() => e.disabled || a.disabled.value || !1), r = A();
    id(() => {
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
        Ke(Ce(i, ["prevent"]), ["down", "up"]),
        Ke(l(a).onInputEnter, ["enter"]),
        Ke(Ce(d, ["prevent"]), ["home", "end"])
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
}), [Jr, Af] = ne("ComboboxGroup"), Mf = /* @__PURE__ */ y({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { currentRef: a, currentElement: n } = z(), o = we(void 0, "radix-vue-combobox-group"), s = ya(), r = A(!1);
    function i() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!d.length;
    }
    return Lc(n, () => {
      le(() => {
        i();
      });
    }, { childList: !0 }), te(() => s.searchTerm.value, () => {
      le(() => {
        i();
      });
    }, { immediate: !0 }), Af({
      id: o
    }), (d, u) => ua((v(), g(l(L), P(e, {
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
      [Uo, r.value]
    ]);
  }
}), Tf = /* @__PURE__ */ y({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    z();
    const a = Jr({ id: "" });
    return (n, o) => (v(), g(l(L), P(e, {
      id: l(a).id
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [S0, If] = ne("ComboboxContent"), Vf = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, { position: o } = me(a), s = ya();
    za(a.bodyLock);
    const { forwardRef: r, currentElement: i } = z();
    Ha(s.parentElement);
    const d = $(() => a.position === "popper" ? a : {}), u = se(d.value);
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
    return If({ position: o }), (_, m) => (v(), g(l(wl), null, {
      default: f(() => [
        _.dismissable ? (v(), g(l(ma), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": _.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (w) => l(s).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (w) => {
            var h;
            (h = l(s).parentElement.value) != null && h.contains(w.target) && w.preventDefault(), n("focusOutside", w);
          }),
          onInteractOutside: m[2] || (m[2] = (w) => n("interactOutside", w)),
          onEscapeKeyDown: m[3] || (m[3] = (w) => n("escapeKeyDown", w)),
          onPointerDownOutside: m[4] || (m[4] = (w) => {
            var h;
            (h = l(s).parentElement.value) != null && h.contains(w.target) && w.preventDefault(), n("pointerDownOutside", w);
          })
        }, {
          default: f(() => [
            (v(), g(Ae(l(o) === "popper" ? l(ia) : l(L)), P({ ..._.$attrs, ...l(u) }, {
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
        }, 8, ["disable-outside-pointer-events"])) : (v(), g(Ae(l(o) === "popper" ? l(ia) : l(L)), P({ key: 1 }, { ..._.$attrs, ...d.value }, {
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
}), Rf = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = ee(t, e), { forwardRef: n } = z(), o = ya();
    return o.contentId || (o.contentId = we(void 0, "radix-vue-combobox-content")), (s, r) => (v(), g(l(Te), {
      present: s.forceMount || l(o).open.value
    }, {
      default: f(() => [
        D(Vf, P({ ...l(a), ...s.$attrs }, { ref: l(n) }), {
          default: f(() => [
            b(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ff = /* @__PURE__ */ y({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    z();
    const a = ya(), n = $(() => a.filteredOptions.value.length === 0);
    return (o, s) => n.value ? (v(), g(l(L), H(P({ key: 0 }, e)), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          q("No options")
        ])
      ]),
      _: 3
    }, 16)) : Z("", !0);
  }
});
function Lf(t) {
  const e = In({
    nonce: A()
  });
  return $(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.nonce) == null ? void 0 : a.value);
  });
}
const [P0, Nf] = ne("ComboboxItem"), zf = "combobox.select", Uf = /* @__PURE__ */ y({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { disabled: o } = me(a), s = ya();
    Jr({ id: "", options: A([]) });
    const { forwardRef: r } = z(), i = $(
      () => {
        var h, x;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (h = s.modelValue.value) == null ? void 0 : h.some((C) => Vt(C, a.value)) : Vt((x = s.modelValue) == null ? void 0 : x.value, a.value);
      }
    ), d = $(() => Vt(s.selectedValue.value, a.value)), u = we(void 0, "radix-vue-combobox-item"), c = we(void 0, "radix-vue-combobox-option"), p = $(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((h) => Vt(h, a.value)) : !0);
    async function _(h) {
      n("select", h), !(h != null && h.defaultPrevented) && !o.value && h && s.onValueChange(a.value);
    }
    function m(h) {
      if (!h)
        return;
      const x = { originalEvent: h, value: a.value };
      ll(zf, _, x);
    }
    async function w(h) {
      await le(), !h.defaultPrevented && s.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Nf({
      isSelected: i
    }), (h, x) => (v(), g(l(Ln), { value: h.value }, {
      default: f(() => [
        ua(D(l(L), {
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
          onPointermove: w
        }, {
          default: f(() => [
            b(h.$slots, "default", {}, () => [
              q(Q(h.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Uo, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Hf = /* @__PURE__ */ y({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return z(), (a, n) => (v(), g(l(L), P(e, { "aria-hidden": "true" }), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qr = /* @__PURE__ */ y({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Fn), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Kf() {
  const t = A(!1);
  return ce(() => {
    ra("keydown", () => {
      t.value = !0;
    }, { capture: !0, passive: !0 }), ra(["pointerdown", "pointermove"], () => {
      t.value = !1;
    }, { capture: !0, passive: !0 });
  }), t;
}
const Wf = kr(Kf), [Ht, Xr] = ne(["MenuRoot", "MenuSub"], "MenuContext"), [Ga, jf] = ne("MenuRoot"), Gf = /* @__PURE__ */ y({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, { modal: o, dir: s } = me(a), r = lt(s), i = ve(a, "open", n), d = A(), u = Wf();
    return Xr({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: d,
      onContentChange: (c) => {
        d.value = c;
      }
    }), jf({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: u,
      dir: r,
      modal: o
    }), (c, p) => (v(), g(l(ga), null, {
      default: f(() => [
        b(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Yf = "rovingFocusGroup.onEntryFocus", qf = { bubbles: !1, cancelable: !0 }, Jf = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Qf(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function Xf(t, e, a) {
  const n = Qf(t.key, a);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Jf[n];
}
function Zr(t, e = !1) {
  const a = xe();
  for (const n of t)
    if (n === a || (n.focus({ preventScroll: e }), xe() !== a))
      return;
}
function Zf(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
const [ev, tv] = ne("RovingFocusGroup"), ei = /* @__PURE__ */ y({
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
  setup(t, { expose: e, emit: a }) {
    const n = t, o = a, { loop: s, orientation: r, dir: i } = me(n), d = lt(i), u = ve(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = A(!1), p = A(!1), _ = A(0), { getItems: m } = _l();
    function w(x) {
      const C = !p.value;
      if (x.currentTarget && x.target === x.currentTarget && C && !c.value) {
        const S = new CustomEvent(Yf, qf);
        if (x.currentTarget.dispatchEvent(S), o("entryFocus", S), !S.defaultPrevented) {
          const k = m().map((M) => M.ref).filter((M) => M.dataset.disabled !== ""), O = k.find((M) => M.getAttribute("data-active") === "true"), E = k.find(
            (M) => M.id === u.value
          ), V = [O, E, ...k].filter(
            Boolean
          );
          Zr(V, n.preventScrollOnEntryFocus);
        }
      }
      p.value = !1;
    }
    function h() {
      setTimeout(() => {
        p.value = !1;
      }, 1);
    }
    return e({
      getItems: m
    }), tv({
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
    }), (x, C) => (v(), g(l(wl), null, {
      default: f(() => [
        D(l(L), {
          tabindex: c.value || _.value === 0 ? -1 : 0,
          "data-orientation": l(r),
          as: x.as,
          "as-child": x.asChild,
          dir: l(d),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (S) => p.value = !0),
          onMouseup: h,
          onFocus: w,
          onBlur: C[1] || (C[1] = (S) => c.value = !1)
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
}), av = /* @__PURE__ */ y({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: !0 },
    active: { type: Boolean, default: !0 },
    allowShiftKey: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = ev(), n = $(() => e.tabStopId || we()), o = $(
      () => a.currentTabStopId.value === n.value
    ), { getItems: s } = xl();
    ce(() => {
      e.focusable && a.onFocusableItemAdd();
    }), Ot(() => {
      e.focusable && a.onFocusableItemRemove();
    });
    function r(i) {
      if (i.key === "Tab" && i.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const d = Xf(
        i,
        a.orientation.value,
        a.dir.value
      );
      if (d !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !e.allowShiftKey && i.shiftKey)
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
          u = a.loop.value ? Zf(u, c + 1) : u.slice(c + 1);
        }
        le(() => Zr(u));
      }
    }
    return (i, d) => (v(), g(l(Ln), null, {
      default: f(() => [
        D(l(L), {
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
}), [$l, nv] = ne("MenuContent"), Cl = /* @__PURE__ */ y({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Ls({
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
    ...qr
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Ht(), s = Ga(), { trapFocus: r, disableOutsidePointerEvents: i, loop: d } = me(a);
    dl(), za(i.value);
    const u = A(""), c = A(0), p = A(0), _ = A(null), m = A("right"), w = A(0), h = A(null), { createCollection: x } = fa(), { forwardRef: C, currentElement: S } = z(), k = x(S);
    te(S, (B) => {
      o.onContentChange(B);
    });
    const { handleTypeaheadSearch: O } = ul(k);
    Ot(() => {
      window.clearTimeout(c.value);
    });
    function E(B) {
      var I, R;
      return m.value === ((I = _.value) == null ? void 0 : I.side) && Kp(B, (R = _.value) == null ? void 0 : R.area);
    }
    async function V(B) {
      var I;
      n("openAutoFocus", B), !B.defaultPrevented && (B.preventDefault(), (I = S.value) == null || I.focus({
        preventScroll: !0
      }));
    }
    function M(B) {
      if (B.defaultPrevented)
        return;
      const I = B.target.closest("[data-radix-menu-content]") === B.currentTarget, R = B.ctrlKey || B.altKey || B.metaKey, Y = B.key.length === 1, G = Pr(
        B,
        xe(),
        S.value,
        {
          loop: d.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (G)
        return G == null ? void 0 : G.focus();
      if (B.code === "Space" || (I && (B.key === "Tab" && B.preventDefault(), !R && Y && O(B.key)), B.target !== S.value) || !Np.includes(B.key))
        return;
      B.preventDefault();
      const X = k.value;
      zr.includes(B.key) && X.reverse(), Bo(X);
    }
    function U(B) {
      var I, R;
      (R = (I = B == null ? void 0 : B.currentTarget) == null ? void 0 : I.contains) != null && R.call(I, B.target) || (window.clearTimeout(c.value), u.value = "");
    }
    function N(B) {
      var I;
      if (!Ia(B))
        return;
      const R = B.target, Y = w.value !== B.clientX;
      if ((I = B == null ? void 0 : B.currentTarget) != null && I.contains(R) && Y) {
        const G = B.clientX > w.value ? "right" : "left";
        m.value = G, w.value = B.clientX;
      }
    }
    return nv({
      onItemEnter: (B) => !!E(B),
      onItemLeave: (B) => {
        var I;
        E(B) || ((I = S.value) == null || I.focus(), h.value = null);
      },
      onTriggerLeave: (B) => !!E(B),
      searchRef: u,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (B) => {
        _.value = B;
      }
    }), (B, I) => (v(), g(l(Rn), {
      "as-child": "",
      trapped: l(r),
      onMountAutoFocus: V,
      onUnmountAutoFocus: I[7] || (I[7] = (R) => n("closeAutoFocus", R))
    }, {
      default: f(() => [
        D(l(ma), {
          "as-child": "",
          "disable-outside-pointer-events": l(i),
          onEscapeKeyDown: I[2] || (I[2] = (R) => n("escapeKeyDown", R)),
          onPointerDownOutside: I[3] || (I[3] = (R) => n("pointerDownOutside", R)),
          onFocusOutside: I[4] || (I[4] = (R) => n("focusOutside", R)),
          onInteractOutside: I[5] || (I[5] = (R) => n("interactOutside", R)),
          onDismiss: I[6] || (I[6] = (R) => n("dismiss"))
        }, {
          default: f(() => [
            D(l(ei), {
              "current-tab-stop-id": h.value,
              "onUpdate:currentTabStopId": I[0] || (I[0] = (R) => h.value = R),
              "as-child": "",
              orientation: "vertical",
              dir: l(s).dir.value,
              loop: l(d),
              onEntryFocus: I[1] || (I[1] = (R) => {
                n("entryFocus", R), l(s).isUsingKeyboardRef.value || R.preventDefault();
              })
            }, {
              default: f(() => [
                D(l(ia), {
                  ref: l(C),
                  role: "menu",
                  as: B.as,
                  "as-child": B.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(ml)(l(o).open.value),
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
                  onBlur: U,
                  onPointermove: N
                }, {
                  default: f(() => [
                    b(B.$slots, "default")
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
}), ti = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = $l(), { forwardRef: n } = z(), o = A(!1);
    async function s(i) {
      if (!i.defaultPrevented && Ia(i)) {
        if (e.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function r(i) {
      await le(), !i.defaultPrevented && Ia(i) && a.onItemLeave(i);
    }
    return (i, d) => (v(), g(l(Ln), {
      value: { textValue: i.textValue }
    }, {
      default: f(() => [
        D(l(L), P({
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
            await le(), !(u.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: d[1] || (d[1] = async (u) => {
            await le(), !u.defaultPrevented && (o.value = !1);
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
}), kl = /* @__PURE__ */ y({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: s } = z(), r = Ga(), i = $l(), d = A(!1);
    async function u() {
      const c = s.value;
      if (!a.disabled && c) {
        const p = new CustomEvent(Fp, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await le(), p.defaultPrevented ? d.value = !1 : r.onClose();
      }
    }
    return (c, p) => (v(), g(ti, P(a, {
      ref: l(o),
      onClick: u,
      onPointerdown: p[0] || (p[0] = () => {
        d.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (_) => {
        var m;
        await le(), !_.defaultPrevented && (d.value || (m = _.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (_) => {
        const m = l(i).searchRef.value !== "";
        c.disabled || m && _.key === " " || l(ko).includes(_.key) && (_.currentTarget.click(), _.preventDefault());
      })
    }), {
      default: f(() => [
        b(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ov, ai] = ne(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), lv = /* @__PURE__ */ y({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = ov({
      checked: A(!1)
    });
    return (a, n) => (v(), g(l(Te), {
      present: a.forceMount || l(Cn)(l(e).checked.value) || l(e).checked.value === !0
    }, {
      default: f(() => [
        D(l(L), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": l(hl)(l(e).checked.value)
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
}), sv = /* @__PURE__ */ y({
  __name: "MenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String], default: !1 },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = ve(a, "checked", n);
    return ai({ checked: o }), (s, r) => (v(), g(kl, P({ role: "menuitemcheckbox" }, a, {
      "aria-checked": l(Cn)(l(o)) ? "mixed" : l(o),
      "data-state": l(hl)(l(o)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), l(Cn)(l(o)) ? o.value = !0 : o.value = !l(o);
      })
    }), {
      default: f(() => [
        b(s.$slots, "default", { checked: l(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), rv = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = ee(a, n), s = Ht(), { forwardRef: r, currentElement: i } = z();
    return Ha(i), (d, u) => (v(), g(Cl, P(l(o), {
      ref: l(r),
      "trap-focus": l(s).open.value,
      "disable-outside-pointer-events": l(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: u[0] || (u[0] = (c) => l(s).onOpenChange(!1)),
      onFocusOutside: u[1] || (u[1] = Ce((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: f(() => [
        b(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), iv = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = ee(t, e), n = Ht();
    return (o, s) => (v(), g(Cl, P(l(a), {
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
}), dv = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = ee(t, e), n = Ht(), o = Ga();
    return (s, r) => (v(), g(l(Te), {
      present: s.forceMount || l(n).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), g(rv, H(P({ key: 0 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            b(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), g(iv, H(P({ key: 1 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            b(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ni = /* @__PURE__ */ y({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), P({ role: "group" }, e), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uv = /* @__PURE__ */ y({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cv = /* @__PURE__ */ y({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Ka), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [pv, fv] = ne("MenuRadioGroup"), vv = /* @__PURE__ */ y({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = ve(a, "modelValue", e);
    return fv({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, s) => (v(), g(ni, H(W(a)), {
      default: f(() => [
        b(o.$slots, "default", { modelValue: l(n) })
      ]),
      _: 3
    }, 16));
  }
}), mv = /* @__PURE__ */ y({
  __name: "MenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { value: o } = me(a), s = pv(), r = $(
      () => s.modelValue.value === (o == null ? void 0 : o.value)
    );
    return ai({ checked: r }), (i, d) => (v(), g(kl, P({ role: "menuitemradio" }, a, {
      "aria-checked": r.value,
      "data-state": l(hl)(r.value),
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
}), hv = /* @__PURE__ */ y({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), P(e, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [oi, gv] = ne("MenuSub"), yv = /* @__PURE__ */ y({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = ve(a, "open", e, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = Ht(), s = A(), r = A();
    return be((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), Xr({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: r,
      onContentChange: (i) => {
        r.value = i;
      }
    }), gv({
      triggerId: "",
      contentId: "",
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, d) => (v(), g(l(ga), null, {
      default: f(() => [
        b(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), bv = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = ee(t, e), n = Ht(), o = Ga(), s = oi(), { forwardRef: r, currentElement: i } = z();
    return s.contentId || (s.contentId = we(void 0, "radix-vue-menu-sub-content")), (d, u) => (v(), g(l(Te), {
      present: d.forceMount || l(n).open.value
    }, {
      default: f(() => [
        D(Cl, P(l(a), {
          id: l(s).contentId,
          ref: l(r),
          "aria-labelledby": l(s).triggerId,
          align: "start",
          side: l(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: u[0] || (u[0] = Ce((c) => {
            var p;
            l(o).isUsingKeyboardRef.value && ((p = l(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: u[1] || (u[1] = Ce(() => {
          }, ["prevent"])),
          onFocusOutside: u[2] || (u[2] = (c) => {
            c.defaultPrevented || c.target !== l(s).trigger.value && l(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: u[3] || (u[3] = (c) => {
            l(o).onClose(), c.preventDefault();
          }),
          onKeydown: u[4] || (u[4] = (c) => {
            var p, _;
            const m = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), w = l(Up)[l(o).dir.value].includes(c.key);
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
}), _v = /* @__PURE__ */ y({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Ht(), n = Ga(), o = oi(), s = $l(), r = A(null);
    o.triggerId || (o.triggerId = we(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    Ot(() => {
      i();
    });
    function d(p) {
      !Ia(p) || s.onItemEnter(p) || !e.disabled && !a.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function u(p) {
      var _, m;
      if (!Ia(p))
        return;
      i();
      const w = (_ = a.content.value) == null ? void 0 : _.getBoundingClientRect();
      if (w != null && w.width) {
        const h = (m = a.content.value) == null ? void 0 : m.dataset.side, x = h === "right", C = x ? -5 : 5, S = w[x ? "left" : "right"], k = w[x ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: S, y: w.top },
            { x: k, y: w.top },
            { x: k, y: w.bottom },
            { x: S, y: w.bottom }
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
      var _;
      const m = s.searchRef.value !== "";
      e.disabled || m && p.key === " " || zp[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await le(), (_ = a.content.value) == null || _.focus(), p.preventDefault());
    }
    return (p, _) => (v(), g(Qr, { "as-child": "" }, {
      default: f(() => [
        D(ti, P(e, {
          id: l(o).triggerId,
          ref: (m) => {
            var w;
            (w = l(o)) == null || w.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(a).open.value,
          "aria-controls": l(o).contentId,
          "data-state": l(ml)(l(a).open.value),
          onClick: _[0] || (_[0] = async (m) => {
            e.disabled || m.defaultPrevented || (m.currentTarget.focus(), l(a).open.value || l(a).onOpenChange(!0));
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
}), [li, wv] = ne("DropdownMenuRoot"), xv = /* @__PURE__ */ y({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e;
    z();
    const o = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), s = A(), { modal: r, dir: i } = me(a), d = lt(i);
    return wv({
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
    }), (u, c) => (v(), g(l(Gf), {
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
}), $v = /* @__PURE__ */ y({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = li(), { forwardRef: n, currentElement: o } = z();
    return ce(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = we(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (v(), g(l(Qr), { "as-child": "" }, {
      default: f(() => [
        D(l(L), {
          id: l(a).triggerId,
          ref: l(n),
          type: s.as === "button" ? "button" : void 0,
          "as-child": e.asChild,
          as: s.as,
          "aria-haspopup": "menu",
          "aria-expanded": l(a).open.value,
          "aria-controls": l(a).open.value ? l(a).contentId : void 0,
          "data-disabled": s.disabled ? "" : void 0,
          disabled: s.disabled,
          "data-state": l(a).open.value ? "open" : "closed",
          onClick: r[0] || (r[0] = async (i) => {
            var d;
            !s.disabled && i.button === 0 && i.ctrlKey === !1 && ((d = l(a)) == null || d.onOpenToggle(), await le(), l(a).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = Ke(
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
}), Cv = /* @__PURE__ */ y({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(cv), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kv = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = ee(t, e);
    z();
    const n = li(), o = A(!1);
    function s(r) {
      r.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, r.preventDefault());
    }
    return n.contentId || (n.contentId = we(void 0, "radix-vue-dropdown-menu-content")), (r, i) => {
      var d;
      return v(), g(l(dv), P(l(a), {
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
}), si = /* @__PURE__ */ y({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = Ut(e);
    return z(), (o, s) => (v(), g(l(kl), H(W({ ...a, ...l(n) })), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bv = /* @__PURE__ */ y({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return z(), (a, n) => (v(), g(l(ni), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dv = /* @__PURE__ */ y({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return z(), (a, n) => (v(), g(l(hv), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sv = /* @__PURE__ */ y({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(t, { emit: e }) {
    const a = t, n = Ut(e);
    return z(), (o, s) => (v(), g(l(sv), H(W({ ...a, ...l(n) })), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ri = /* @__PURE__ */ y({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return z(), (a, n) => (v(), g(l(lv), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pv = /* @__PURE__ */ y({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return z(), (a, n) => (v(), g(l(uv), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ev = /* @__PURE__ */ y({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = Ut(e);
    return z(), (o, s) => (v(), g(l(vv), H(W({ ...a, ...l(n) })), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ov = /* @__PURE__ */ y({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = ee(t, e);
    return z(), (n, o) => (v(), g(l(mv), H(W(l(a))), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Av = /* @__PURE__ */ y({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = ve(a, "open", e, {
      passive: a.open === void 0,
      defaultValue: a.defaultOpen ?? !1
    });
    return z(), (o, s) => (v(), g(l(yv), {
      open: l(n),
      "onUpdate:open": s[0] || (s[0] = (r) => ca(n) ? n.value = r : null)
    }, {
      default: f(() => [
        b(o.$slots, "default", { open: l(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Mv = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = ee(t, e);
    return z(), (n, o) => (v(), g(l(bv), P(l(a), { style: {
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
}), Tv = /* @__PURE__ */ y({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return z(), (a, n) => (v(), g(l(_v), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Iv = /* @__PURE__ */ y({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(t) {
    const e = t;
    return z(), (a, n) => (v(), g(l(L), P(e, {
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
}), [ba, Vv] = ne("PaginationRoot"), Rv = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, { siblingCount: o, disabled: s, showEdges: r } = me(a);
    z();
    const i = ve(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), d = $(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return Vv({
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
        b(u.$slots, "default", {
          page: l(i),
          pageCount: d.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Fv = /* @__PURE__ */ y({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return z(), (a, n) => (v(), g(l(L), P(e, { "data-type": "ellipsis" }), {
      default: f(() => [
        b(a.$slots, "default", {}, () => [
          q("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), Lv = /* @__PURE__ */ y({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = ba();
    z();
    const n = $(() => a.page.value === 1 || a.disabled.value);
    return (o, s) => (v(), g(l(L), P(e, {
      "aria-label": "First Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && l(a).onPageChange(1))
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          q("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Nv = /* @__PURE__ */ y({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = ba();
    z();
    const n = $(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, s) => (v(), g(l(L), P(e, {
      "aria-label": "Last Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && l(a).onPageChange(l(a).pageCount.value))
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          q("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function _t(t, e) {
  const a = e - t + 1;
  return Array.from({ length: a }, (n, o) => o + t);
}
function zv(t) {
  return t.map((e) => typeof e == "number" ? { type: "page", value: e } : { type: "ellipsis" });
}
const an = "ellipsis";
function Uv(t, e, a, n) {
  const o = e, s = Math.max(t - a, 1), r = Math.min(t + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, e) - 2, d = s > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(s - 1) > 2, u = r < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - r) > 2;
    if (!d && u)
      return [..._t(1, i), an, o];
    if (d && !u) {
      const c = _t(o - i + 1, o);
      return [1, an, ...c];
    }
    if (d && u) {
      const c = _t(s, r);
      return [1, an, ...c, an, o];
    }
    return _t(1, o);
  } else {
    const i = a * 2 + 1;
    return e < i ? _t(1, o) : t <= a + 1 ? _t(1, i) : e - t <= a ? _t(e - i + 1, o) : _t(s, r);
  }
}
const Hv = /* @__PURE__ */ y({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    z();
    const a = ba(), n = $(() => zv(
      Uv(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, s) => (v(), g(l(L), H(W(e)), {
      default: f(() => [
        b(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), E0 = /* @__PURE__ */ y({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    z();
    const a = ba(), n = $(() => a.page.value === e.value), o = $(() => a.disabled.value);
    return (s, r) => (v(), g(l(L), P(e, {
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
          q(Q(s.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), Kv = /* @__PURE__ */ y({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    z();
    const a = ba(), n = $(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, s) => (v(), g(l(L), P(e, {
      "aria-label": "Next Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && l(a).onPageChange(l(a).page.value + 1))
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          q("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Wv = /* @__PURE__ */ y({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    z();
    const a = ba(), n = $(() => a.page.value === 1 || a.disabled.value);
    return (o, s) => (v(), g(l(L), P(e, {
      "aria-label": "Previous Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && l(a).onPageChange(l(a).page.value - 1))
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          q("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), [Ya, jv] = ne("PopoverRoot"), Gv = /* @__PURE__ */ y({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, { modal: o } = me(a), s = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = A(), i = A(!1);
    return jv({
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
    }), (d, u) => (v(), g(l(ga), null, {
      default: f(() => [
        b(d.$slots, "default", { open: l(s) })
      ]),
      _: 3
    }));
  }
}), Yv = /* @__PURE__ */ y({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Ya(), { forwardRef: n, currentElement: o } = z();
    return ce(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), g(Ae(l(a).hasCustomAnchor.value ? l(L) : l(Fn)), { "as-child": "" }, {
      default: f(() => [
        D(l(L), {
          ref: l(n),
          type: s.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": l(a).open.value,
          "aria-controls": l(a).contentId,
          "data-state": l(a).open.value ? "open" : "closed",
          as: s.as,
          "as-child": e.asChild,
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
}), qv = /* @__PURE__ */ y({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Ka), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ii = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = se(a), { forwardRef: s } = z(), r = Ya();
    return dl(), (i, d) => (v(), g(l(Rn), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: f(() => [
        D(l(ma), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (u) => n("pointerDownOutside", u)),
          onInteractOutside: d[1] || (d[1] = (u) => n("interactOutside", u)),
          onEscapeKeyDown: d[2] || (d[2] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[3] || (d[3] = (u) => n("focusOutside", u)),
          onDismiss: d[4] || (d[4] = (u) => l(r).onOpenChange(!1))
        }, {
          default: f(() => [
            D(l(ia), P(l(o), {
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
}), Jv = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = Ya(), s = A(!1);
    za(!0);
    const r = ee(a, n), { forwardRef: i, currentElement: d } = z();
    return Ha(d), (u, c) => (v(), g(ii, P(l(r), {
      ref: l(i),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Ce(
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
      onFocusOutside: c[2] || (c[2] = Ce(() => {
      }, ["prevent"]))
    }), {
      default: f(() => [
        b(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Qv = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = Ya(), s = A(!1), r = A(!1), i = ee(a, n);
    return (d, u) => (v(), g(ii, P(l(i), {
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
}), Xv = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = Ya(), s = ee(a, n), { forwardRef: r } = z();
    return o.contentId || (o.contentId = we(void 0, "radix-vue-popover-content")), (i, d) => (v(), g(l(Te), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), g(Jv, P({ key: 0 }, l(s), { ref: l(r) }), {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), g(Qv, P({ key: 1 }, l(s), { ref: l(r) }), {
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
function Zv(t) {
  const e = $(() => t.start.value ? !!t.isDateDisabled(t.start.value) : !1), a = $(() => t.end.value ? !!t.isDateDisabled(t.end.value) : !1), n = $(
    () => e.value || a.value ? !1 : !!(t.start.value && t.end.value && Bt(t.end.value, t.start.value))
  ), o = (d) => t.start.value ? Be(t.start.value, d) : !1, s = (d) => t.end.value ? Be(t.end.value, d) : !1, r = (d) => t.start.value && Be(t.start.value, d) || t.end.value && Be(t.end.value, d) ? !0 : t.end.value && t.start.value ? Du(d, t.start.value, t.end.value) : !1, i = $(() => {
    if (t.start.value && t.end.value || !t.start.value || !t.focusedValue.value)
      return null;
    const d = Bt(t.start.value, t.focusedValue.value), u = d ? t.start.value : t.focusedValue.value, c = d ? t.focusedValue.value : t.start.value;
    return Be(u, c) ? {
      start: u,
      end: c
    } : Eu(u, c, t.isDateUnavailable, t.isDateDisabled) ? {
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
    isHighlightedStart: (d) => !i.value || !i.value.start ? !1 : Be(i.value.start, d),
    isHighlightedEnd: (d) => !i.value || !i.value.end ? !1 : Be(i.value.end, d)
  };
}
const em = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, tm = {
  role: "heading",
  "aria-level": "2"
}, [_a, am] = ne("RangeCalendarRoot"), nm = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, {
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
      calendarLabel: h,
      maxValue: x,
      minValue: C,
      locale: S,
      dir: k,
      nextPage: O,
      prevPage: E
    } = me(a), { primitiveElement: V, currentElement: M } = va(), U = lt(k), N = A(), B = A(), I = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), R = $r({
      defaultPlaceholder: a.placeholder,
      defaultValue: I.value.start,
      locale: a.locale
    }), Y = A(I.value.start), G = A(I.value.end), X = ve(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? R.copy(),
      passive: a.placeholder === void 0
    });
    function de(pe) {
      X.value = pe.copy();
    }
    const {
      fullCalendarLabel: ge,
      headingValue: ye,
      isDateDisabled: j,
      isDateUnavailable: oe,
      isNextButtonDisabled: ue,
      isPrevButtonDisabled: Ne,
      grid: qe,
      weekdays: yt,
      isOutsideVisibleView: bt,
      nextPage: Ca,
      prevPage: Ie,
      formatter: Ee
    } = Wr({
      locale: S,
      placeholder: X,
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
      calendarLabel: h,
      nextPage: O,
      prevPage: E
    }), {
      isInvalid: Je,
      isSelected: ie,
      highlightedRange: De,
      isSelectionStart: rt,
      isSelectionEnd: ka,
      isHighlightedStart: ld,
      isHighlightedEnd: sd
    } = Zv({
      start: Y,
      end: G,
      isDateDisabled: j,
      isDateUnavailable: oe,
      focusedValue: B
    });
    return te(I, (pe) => {
      var Ve, Se, Gn, Tl;
      (!pe || !pe.start || Y.value && !Xe(pe.start, Y.value)) && (Y.value = (Se = (Ve = pe == null ? void 0 : pe.start) == null ? void 0 : Ve.copy) == null ? void 0 : Se.call(Ve)), (!pe || !pe.end || G.value && !Xe(pe.end, G.value)) && (G.value = (Tl = (Gn = pe == null ? void 0 : pe.end) == null ? void 0 : Gn.copy) == null ? void 0 : Tl.call(Gn));
    }), te(Y, (pe) => {
      pe && !Xe(pe, X.value) && de(pe), n("update:startValue", pe);
    }), te([Y, G], ([pe, Ve]) => {
      const Se = I.value;
      if (!(Se && Se.start && Se.end && pe && Ve && Xe(Se.start, pe) && Xe(Se.end, Ve)))
        if (pe && Ve) {
          if (Se.start && Se.end && Xe(Se.start, pe) && Xe(Se.end, Ve))
            return;
          Bt(Ve, pe) ? I.value = {
            start: Ve.copy(),
            end: pe.copy()
          } : I.value = {
            start: pe.copy(),
            end: Ve.copy()
          };
        } else Se.start && Se.end && (I.value = {
          start: pe == null ? void 0 : pe.copy(),
          end: void 0
        });
    }), am({
      isDateUnavailable: oe,
      startValue: Y,
      endValue: G,
      formatter: Ee,
      modelValue: I,
      placeholder: X,
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
      isInvalid: Je,
      isDateDisabled: j,
      highlightedRange: De,
      focusedValue: B,
      lastPressedDateValue: N,
      isSelected: ie,
      isSelectionEnd: ka,
      isSelectionStart: rt,
      isNextButtonDisabled: ue,
      isPrevButtonDisabled: Ne,
      isOutsideVisibleView: bt,
      nextPage: Ca,
      prevPage: Ie,
      parentElement: M,
      onPlaceholderChange: de,
      locale: S,
      dir: U,
      isHighlightedStart: ld,
      isHighlightedEnd: sd
    }), ce(() => {
      r.value && Cr(M.value);
    }), (pe, Ve) => (v(), g(l(L), {
      ref_key: "primitiveElement",
      ref: V,
      as: pe.as,
      "as-child": pe.asChild,
      role: "application",
      "aria-label": l(ge),
      "data-readonly": l(s) ? "" : void 0,
      "data-disabled": l(o) ? "" : void 0,
      "data-invalid": l(Je) ? "" : void 0,
      dir: l(U)
    }, {
      default: f(() => [
        re("div", em, [
          re("div", tm, Q(l(ge)), 1)
        ]),
        b(pe.$slots, "default", {
          date: l(X),
          grid: l(qe),
          weekDays: l(yt),
          weekStartsOn: l(d),
          locale: l(S),
          fixedWeeks: l(c)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), om = /* @__PURE__ */ y({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lm = /* @__PURE__ */ y({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = _a();
    return (n, o) => (v(), g(l(L), P(e, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        b(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          q(Q(l(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), sm = /* @__PURE__ */ y({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(t) {
    const e = t, a = _a(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), g(l(L), P(e, {
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
}), rm = /* @__PURE__ */ y({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(t) {
    const e = _a();
    return (a, n) => {
      var o, s;
      return v(), g(l(L), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": l(e).isSelected(a.date) ? !0 : void 0,
        "aria-disabled": l(e).isDateDisabled(a.date) || ((s = (o = l(e)).isDateUnavailable) == null ? void 0 : s.call(o, a.date)),
        "data-disabled": l(e).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
          b(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), im = /* @__PURE__ */ y({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dm = /* @__PURE__ */ y({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = $(() => n.disabled.value || n.isNextButtonDisabled(e.step, e.nextPage)), n = _a();
    return (o, s) => (v(), g(l(L), P(e, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).nextPage(e.step, e.nextPage))
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          q("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), um = /* @__PURE__ */ y({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = $(() => n.disabled.value || n.isPrevButtonDisabled(e.step, e.prevPage)), n = _a();
    return (o, s) => (v(), g(l(L), P(e, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).prevPage(e.step, e.prevPage))
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          q("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), cm = /* @__PURE__ */ y({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), P(e, { "aria-hidden": "true" }), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pm = /* @__PURE__ */ y({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fm = /* @__PURE__ */ y({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vm = /* @__PURE__ */ y({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = _a(), n = Ir(), { primitiveElement: o, currentElement: s } = va(), r = $(() => a.formatter.custom(Fe(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = $(() => a.isDateDisabled(e.day)), d = $(() => {
      var N;
      return (N = a.isDateUnavailable) == null ? void 0 : N.call(a, e.day);
    }), u = $(() => a.isSelected(e.day)), c = $(() => a.isSelectionStart(e.day)), p = $(() => a.isSelectionEnd(e.day)), _ = $(() => a.isHighlightedStart(e.day)), m = $(() => a.isHighlightedEnd(e.day)), w = $(() => a.highlightedRange.value ? Bu(e.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])", x = $(() => js(e.day, vt())), C = $(() => !Ws(e.day, e.month)), S = $(
      () => a.isOutsideVisibleView(e.day)
    ), k = $(() => e.day.day.toLocaleString(a.locale.value)), O = $(() => !a.disabled.value && Be(e.day, a.placeholder.value));
    function E(N, B) {
      var I;
      if (!a.readonly.value && !(a.isDateDisabled(B) || (I = a.isDateUnavailable) != null && I.call(a, B))) {
        if (a.lastPressedDateValue.value = B.copy(), a.startValue.value && a.highlightedRange.value === null) {
          if (Be(B, a.startValue.value) && !a.preventDeselect.value && !a.endValue.value) {
            a.startValue.value = void 0, a.onPlaceholderChange(B);
            return;
          } else if (!a.endValue.value) {
            N.preventDefault(), a.lastPressedDateValue.value && Be(a.lastPressedDateValue.value, B) && (a.startValue.value = B.copy());
            return;
          }
        }
        if (a.startValue.value && a.endValue.value && Be(a.endValue.value, B) && !a.preventDeselect.value) {
          a.startValue.value = void 0, a.endValue.value = void 0, a.onPlaceholderChange(B);
          return;
        }
        a.startValue.value ? a.endValue.value ? a.endValue.value && a.startValue.value && (a.endValue.value = void 0, a.startValue.value = B.copy()) : a.endValue.value = B.copy() : a.startValue.value = B.copy();
      }
    }
    function V(N) {
      E(N, e.day);
    }
    function M() {
      var N;
      a.isDateDisabled(e.day) || (N = a.isDateUnavailable) != null && N.call(a, e.day) || (a.focusedValue.value = e.day.copy());
    }
    function U(N) {
      N.preventDefault(), N.stopPropagation();
      const B = a.parentElement.value, I = B ? Array.from(B.querySelectorAll(h)) : [];
      let R = I.indexOf(s.value);
      const Y = 7, G = a.dir.value === "rtl" ? -1 : 1;
      switch (N.code) {
        case n.ARROW_RIGHT:
          R += G;
          break;
        case n.ARROW_LEFT:
          R -= G;
          break;
        case n.ARROW_UP:
          R -= Y;
          break;
        case n.ARROW_DOWN:
          R += Y;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          E(N, e.day);
          return;
        default:
          return;
      }
      if (R >= 0 && R < I.length) {
        I[R].focus();
        return;
      }
      if (R < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), le(() => {
          const X = B ? Array.from(B.querySelectorAll(h)) : [];
          if (!a.pagedNavigation.value) {
            const de = mt(a.placeholder.value);
            X[de - Math.abs(R)].focus();
            return;
          }
          X[X.length - Math.abs(R)].focus();
        });
        return;
      }
      if (R >= I.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), le(() => {
          const X = B ? Array.from(B.querySelectorAll(h)) : [];
          if (!a.pagedNavigation.value) {
            const de = mt(a.placeholder.value.add({ months: a.numberOfMonths.value - 1 }));
            X[X.length - de + R - I.length].focus();
            return;
          }
          X[R - I.length].focus();
        });
      }
    }
    return (N, B) => (v(), g(l(L), P({
      ref_key: "primitiveElement",
      ref: o
    }, e, {
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
      "data-outside-visible-view": S.value ? "" : void 0,
      "data-value": N.day.toString(),
      "data-disabled": i.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": x.value ? "" : void 0,
      "data-outside-view": C.value ? "" : void 0,
      "data-focused": O.value ? "" : void 0,
      tabindex: O.value ? 0 : C.value || i.value ? void 0 : -1,
      onClick: V,
      onFocusin: M,
      onMouseenter: M,
      onKeydown: Ke(U, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: f(() => [
        b(N.$slots, "default", { dayValue: k.value }, () => [
          q(Q(k.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-focused", "tabindex"]));
  }
}), mm = ["default-value"], hm = /* @__PURE__ */ y({
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
  setup(t) {
    const e = t, { value: a } = me(e), n = A();
    return (o, s) => (v(), g(l(ja), { "as-child": "" }, {
      default: f(() => [
        ua(re("select", P({
          ref_key: "selectElement",
          ref: n
        }, e, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => ca(a) ? a.value = r : null),
          "default-value": l(a)
        }), [
          b(o.$slots, "default")
        ], 16, mm), [
          [pd, l(a)]
        ])
      ]),
      _: 3
    }));
  }
}), gm = {
  key: 0,
  value: ""
}, [Kt, di] = ne("SelectRoot"), [ym, bm] = ne("SelectRoot"), _m = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), s = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = A(), i = A(), d = A({
      x: 0,
      y: 0
    }), u = A(!1), { required: c, disabled: p, dir: _ } = me(a), m = lt(_);
    di({
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
    const w = Ua(r), h = A(/* @__PURE__ */ new Set()), x = $(() => Array.from(h.value).map((C) => {
      var S;
      return (S = C.props) == null ? void 0 : S.value;
    }).join(";"));
    return bm({
      onNativeOptionAdd: (C) => {
        h.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        h.value.delete(C);
      }
    }), (C, S) => (v(), g(l(ga), null, {
      default: f(() => [
        b(C.$slots, "default", {
          modelValue: l(o),
          open: l(s)
        }),
        l(w) ? (v(), g(hm, P({ key: x.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: l(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: l(p),
          value: l(o),
          onChange: S[0] || (S[0] = (k) => o.value = k.target.value)
        }), {
          default: f(() => [
            l(o) === void 0 ? (v(), F("option", gm)) : Z("", !0),
            (v(!0), F(J, null, fe(Array.from(h.value), (k) => (v(), g(Ae(k), P({ ref_for: !0 }, k.props, {
              key: k.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : Z("", !0)
      ]),
      _: 3
    }));
  }
}), wm = [" ", "Enter", "ArrowUp", "ArrowDown"], xm = [" ", "Enter"], He = 10;
function ui(t) {
  return t === "" || pn(t);
}
const $m = /* @__PURE__ */ y({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Kt(), n = $(() => {
      var m;
      return ((m = a.disabled) == null ? void 0 : m.value) || e.disabled;
    }), { forwardRef: o, currentElement: s } = z();
    a.contentId || (a.contentId = we(void 0, "radix-vue-select-content")), ce(() => {
      a.triggerElement = s;
    });
    const { injectCollection: r } = fa(), i = r(), { search: d, handleTypeaheadSearch: u, resetTypeahead: c } = ul(i);
    function p() {
      n.value || (a.onOpenChange(!0), c());
    }
    function _(m) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, w) => (v(), g(l(Fn), { "as-child": "" }, {
      default: f(() => {
        var h, x, C, S;
        return [
          D(l(L), {
            ref: l(o),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": l(a).contentId,
            "aria-expanded": l(a).open.value || !1,
            "aria-required": (h = l(a).required) == null ? void 0 : h.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (x = l(a)) == null ? void 0 : x.dir.value,
            "data-state": (C = l(a)) != null && C.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": l(ui)((S = l(a).modelValue) == null ? void 0 : S.value) ? "" : void 0,
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
            onPointerup: w[2] || (w[2] = Ce(
              (k) => {
                k.pointerType === "touch" && _(k);
              },
              ["prevent"]
            )),
            onKeydown: w[3] || (w[3] = (k) => {
              const O = l(d) !== "";
              !(k.ctrlKey || k.altKey || k.metaKey) && k.key.length === 1 && O && k.key === " " || (l(u)(k.key), l(wm).includes(k.key) && (p(), k.preventDefault()));
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
}), Cm = /* @__PURE__ */ y({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Ka), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Bl, km] = ne("SelectItemAlignedPosition"), Bm = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, { injectCollection: o } = fa(), s = Kt(), r = Wt(), i = o(), d = A(!1), u = A(!0), c = A(), { forwardRef: p, currentElement: _ } = z(), { viewport: m, selectedItem: w, selectedItemText: h, focusSelectedItem: x } = r;
    function C() {
      if (s.triggerElement.value && s.valueElement.value && c.value && _.value && m != null && m.value && w != null && w.value && h != null && h.value) {
        const O = s.triggerElement.value.getBoundingClientRect(), E = _.value.getBoundingClientRect(), V = s.valueElement.value.getBoundingClientRect(), M = h.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const Ie = M.left - E.left, Ee = V.left - Ie, Je = O.left - Ee, ie = O.width + Je, De = Math.max(ie, E.width), rt = window.innerWidth - He, ka = $n(Ee, He, Math.max(He, rt - De));
          c.value.style.minWidth = `${ie}px`, c.value.style.left = `${ka}px`;
        } else {
          const Ie = E.right - M.right, Ee = window.innerWidth - V.right - Ie, Je = window.innerWidth - O.right - Ee, ie = O.width + Je, De = Math.max(ie, E.width), rt = window.innerWidth - He, ka = $n(
            Ee,
            He,
            Math.max(He, rt - De)
          );
          c.value.style.minWidth = `${ie}px`, c.value.style.right = `${ka}px`;
        }
        const U = i.value, N = window.innerHeight - He * 2, B = m.value.scrollHeight, I = window.getComputedStyle(_.value), R = Number.parseInt(
          I.borderTopWidth,
          10
        ), Y = Number.parseInt(I.paddingTop, 10), G = Number.parseInt(
          I.borderBottomWidth,
          10
        ), X = Number.parseInt(
          I.paddingBottom,
          10
        ), de = R + Y + B + X + G, ge = Math.min(
          w.value.offsetHeight * 5,
          de
        ), ye = window.getComputedStyle(m.value), j = Number.parseInt(ye.paddingTop, 10), oe = Number.parseInt(
          ye.paddingBottom,
          10
        ), ue = O.top + O.height / 2 - He, Ne = N - ue, qe = w.value.offsetHeight / 2, yt = w.value.offsetTop + qe, bt = R + Y + yt, Ca = de - bt;
        if (bt <= ue) {
          const Ie = w.value === U[U.length - 1];
          c.value.style.bottom = "0px";
          const Ee = _.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, Je = Math.max(
            Ne,
            qe + (Ie ? oe : 0) + Ee + G
          ), ie = bt + Je;
          c.value.style.height = `${ie}px`;
        } else {
          const Ie = w.value === U[0];
          c.value.style.top = "0px";
          const Ee = Math.max(
            ue,
            R + m.value.offsetTop + (Ie ? j : 0) + qe
          ) + Ca;
          c.value.style.height = `${Ee}px`, m.value.scrollTop = bt - ue + m.value.offsetTop;
        }
        c.value.style.margin = `${He}px 0`, c.value.style.minHeight = `${ge}px`, c.value.style.maxHeight = `${N}px`, n("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const S = A("");
    ce(async () => {
      await le(), C(), _.value && (S.value = window.getComputedStyle(_.value).zIndex);
    });
    function k(O) {
      O && u.value === !0 && (C(), x == null || x(), u.value = !1);
    }
    return km({
      contentWrapper: c,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: k
    }), (O, E) => (v(), F("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: Et({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: S.value
      })
    }, [
      D(l(L), P({
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
}), Dm = /* @__PURE__ */ y({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: He },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = se(t);
    return (a, n) => (v(), g(l(ia), P(l(e), { style: {
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
}, [Wt, Sm] = ne("SelectContent"), Pm = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = Kt();
    dl(), za(a.bodyLock);
    const { createCollection: s } = fa(), r = A();
    Ha(r);
    const i = s(r), { search: d, handleTypeaheadSearch: u } = ul(i), c = A(), p = A(), _ = A(), m = A(!1), w = A(!1);
    function h() {
      p.value && r.value && Bo([p.value, r.value]);
    }
    te(m, () => {
      h();
    });
    const { onOpenChange: x, triggerPointerDownPosRef: C } = o;
    be((E) => {
      if (!r.value)
        return;
      let V = { x: 0, y: 0 };
      const M = (N) => {
        var B, I;
        V = {
          x: Math.abs(
            Math.round(N.pageX) - (((B = C.value) == null ? void 0 : B.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(N.pageY) - (((I = C.value) == null ? void 0 : I.y) ?? 0)
          )
        };
      }, U = (N) => {
        var B;
        N.pointerType !== "touch" && (V.x <= 10 && V.y <= 10 ? N.preventDefault() : (B = r.value) != null && B.contains(N.target) || x(!1), document.removeEventListener("pointermove", M), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", M), document.addEventListener("pointerup", U, {
        capture: !0,
        once: !0
      })), E(() => {
        document.removeEventListener("pointermove", M), document.removeEventListener("pointerup", U, {
          capture: !0
        });
      });
    });
    function S(E) {
      const V = E.ctrlKey || E.altKey || E.metaKey;
      if (E.key === "Tab" && E.preventDefault(), !V && E.key.length === 1 && u(E.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(E.key)) {
        let M = i.value;
        if (["ArrowUp", "End"].includes(E.key) && (M = M.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(E.key)) {
          const U = E.target, N = M.indexOf(U);
          M = M.slice(N + 1);
        }
        setTimeout(() => Bo(M)), E.preventDefault();
      }
    }
    const k = $(() => a.position === "popper" ? a : {}), O = se(k.value);
    return Sm({
      content: r,
      viewport: c,
      onViewportChange: (E) => {
        c.value = E;
      },
      itemRefCallback: (E, V, M) => {
        var U, N;
        const B = !w.value && !M;
        (((U = o.modelValue) == null ? void 0 : U.value) !== void 0 && ((N = o.modelValue) == null ? void 0 : N.value) === V || B) && (p.value = E, B && (w.value = !0));
      },
      selectedItem: p,
      selectedItemText: _,
      onItemLeave: () => {
        var E;
        (E = r.value) == null || E.focus();
      },
      itemTextRefCallback: (E, V, M) => {
        var U, N;
        const B = !w.value && !M;
        (((U = o.modelValue) == null ? void 0 : U.value) !== void 0 && ((N = o.modelValue) == null ? void 0 : N.value) === V || B) && (_.value = E);
      },
      focusSelectedItem: h,
      position: a.position,
      isPositioned: m,
      searchRef: d
    }), (E, V) => (v(), g(l(Rn), {
      "as-child": "",
      onMountAutoFocus: V[6] || (V[6] = Ce(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: V[7] || (V[7] = (M) => {
        var U;
        n("closeAutoFocus", M), !M.defaultPrevented && ((U = l(o).triggerElement.value) == null || U.focus({ preventScroll: !0 }), M.preventDefault());
      })
    }, {
      default: f(() => [
        D(l(ma), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: V[2] || (V[2] = Ce(() => {
          }, ["prevent"])),
          onDismiss: V[3] || (V[3] = (M) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: V[4] || (V[4] = (M) => n("escapeKeyDown", M)),
          onPointerDownOutside: V[5] || (V[5] = (M) => n("pointerDownOutside", M))
        }, {
          default: f(() => [
            (v(), g(Ae(
              E.position === "popper" ? Dm : Bm
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
              onContextmenu: V[0] || (V[0] = Ce(() => {
              }, ["prevent"])),
              onPlaced: V[1] || (V[1] = (M) => m.value = !0),
              onKeydown: S
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
}), Em = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(t) {
    return di(t.context), (e, a) => b(e.$slots, "default");
  }
}), Om = { key: 1 }, Am = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = ee(a, e), o = Kt(), s = A();
    ce(() => {
      s.value = new DocumentFragment();
    });
    const r = A(), i = $(() => a.forceMount || o.open.value);
    return (d, u) => {
      var c;
      return i.value ? (v(), g(l(Te), {
        key: 0,
        ref_key: "presenceRef",
        ref: r,
        present: !0
      }, {
        default: f(() => [
          D(Pm, H(W({ ...l(n), ...d.$attrs })), {
            default: f(() => [
              b(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = r.value) != null && c.present) && s.value ? (v(), F("div", Om, [
        (v(), g(Sn, { to: s.value }, [
          D(Em, { context: l(o) }, {
            default: f(() => [
              b(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : Z("", !0);
    };
  }
}), Mm = /* @__PURE__ */ y({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), P({ "aria-hidden": "true" }, e), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ci, Tm] = ne("SelectItem"), Im = /* @__PURE__ */ y({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { disabled: a } = me(e), n = Kt(), o = Wt(wa), { forwardRef: s, currentElement: r } = z(), i = $(() => {
      var h;
      return ((h = n.modelValue) == null ? void 0 : h.value) === e.value;
    }), d = A(!1), u = A(e.textValue ?? ""), c = we(void 0, "radix-vue-select-item-text");
    async function p(h) {
      await le(), !(h != null && h.defaultPrevented) && (a.value || (n.onValueChange(e.value), n.onOpenChange(!1)));
    }
    async function _(h) {
      var x;
      await le(), !h.defaultPrevented && (a.value ? (x = o.onItemLeave) == null || x.call(o) : h.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(h) {
      var x;
      await le(), !h.defaultPrevented && h.currentTarget === xe() && ((x = o.onItemLeave) == null || x.call(o));
    }
    async function w(h) {
      var x;
      await le(), !(h.defaultPrevented || ((x = o.searchRef) == null ? void 0 : x.value) !== "" && h.key === " ") && (xm.includes(h.key) && p(), h.key === " " && h.preventDefault());
    }
    if (e.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ce(() => {
      r.value && o.itemRefCallback(
        r.value,
        e.value,
        e.disabled
      );
    }), Tm({
      value: e.value,
      disabled: a,
      textId: c,
      isSelected: i,
      onItemTextChange: (h) => {
        u.value = ((u.value || (h == null ? void 0 : h.textContent)) ?? "").trim();
      }
    }), (h, x) => (v(), g(l(L), {
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
      onFocus: x[0] || (x[0] = (C) => d.value = !0),
      onBlur: x[1] || (x[1] = (C) => d.value = !1),
      onPointerup: p,
      onPointerdown: x[2] || (x[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: x[3] || (x[3] = Ce(() => {
      }, ["prevent", "stop"])),
      onPointermove: _,
      onPointerleave: m,
      onKeydown: w
    }, {
      default: f(() => [
        b(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Vm = /* @__PURE__ */ y({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = ci();
    return (n, o) => l(a).isSelected.value ? (v(), g(l(L), P({
      key: 0,
      "aria-hidden": "true"
    }, e), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : Z("", !0);
  }
}), [Rm, Fm] = ne("SelectGroup"), Lm = /* @__PURE__ */ y({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = we(void 0, "radix-vue-select-group");
    return Fm({ id: a }), (n, o) => (v(), g(l(L), P({ role: "group" }, e, { "aria-labelledby": l(a) }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Nm = /* @__PURE__ */ y({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Rm({ id: "" });
    return (n, o) => (v(), g(l(L), P(e, {
      id: l(a).id
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), pi = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = Kt(), n = Wt(wa), o = ym(), s = ci(), { forwardRef: r, currentElement: i } = z(), d = $(() => {
      var u;
      return Ze("option", {
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
    }), zo(() => {
      o.onNativeOptionRemove(d.value);
    }), (u, c) => (v(), F(J, null, [
      D(l(L), P({
        id: l(s).textId,
        ref: l(r)
      }, { ...e, ...u.$attrs }, { "data-item-text": "" }), {
        default: f(() => [
          b(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      l(s).isSelected.value && l(a).valueElement.value && !l(a).valueElementHasChildren.value ? (v(), g(Sn, {
        key: 0,
        to: l(a).valueElement.value
      }, [
        b(u.$slots, "default")
      ], 8, ["to"])) : Z("", !0)
    ], 64));
  }
}), zm = /* @__PURE__ */ y({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { nonce: a } = me(e), n = Lf(a), o = Wt(wa), s = o.position === "item-aligned" ? Bl() : void 0, { forwardRef: r, currentElement: i } = z();
    ce(() => {
      o == null || o.onViewportChange(i.value);
    });
    const d = A(0);
    function u(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: _, contentWrapper: m } = s ?? {};
      if (_ != null && _.value && m != null && m.value) {
        const w = Math.abs(d.value - p.scrollTop);
        if (w > 0) {
          const h = window.innerHeight - He * 2, x = Number.parseFloat(
            m.value.style.minHeight
          ), C = Number.parseFloat(m.value.style.height), S = Math.max(x, C);
          if (S < h) {
            const k = S + w, O = Math.min(h, k), E = k - O;
            m.value.style.height = `${O}px`, m.value.style.bottom === "0px" && (p.scrollTop = E > 0 ? E : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = p.scrollTop;
    }
    return (c, p) => (v(), F(J, null, [
      D(l(L), P({
        ref: l(r),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...c.$attrs, ...e }, {
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
      D(l(L), {
        as: "style",
        nonce: l(n)
      }, {
        default: f(() => [
          q(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), fi = /* @__PURE__ */ y({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(t, { emit: e }) {
    const a = e, { injectCollection: n } = fa(), o = n(), s = Wt(wa), r = A(null);
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
    return zo(() => i()), (c, p) => {
      var _;
      return v(), g(l(L), P({
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
}), Um = /* @__PURE__ */ y({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = Wt(wa), a = e.position === "item-aligned" ? Bl() : void 0, { forwardRef: n, currentElement: o } = z(), s = A(!1);
    return be((r) => {
      var i, d;
      if ((i = e.viewport) != null && i.value && (d = e.isPositioned) != null && d.value) {
        let u = function() {
          s.value = c.scrollTop > 0;
        };
        const c = e.viewport.value;
        u(), c.addEventListener("scroll", u), r(() => c.removeEventListener("scroll", u));
      }
    }), te(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), g(fi, {
      key: 0,
      ref: l(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: u } = l(e);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop - u.value.offsetHeight);
      })
    }, {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : Z("", !0);
  }
}), Hm = /* @__PURE__ */ y({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = Wt(wa), a = e.position === "item-aligned" ? Bl() : void 0, { forwardRef: n, currentElement: o } = z(), s = A(!1);
    return be((r) => {
      var i, d;
      if ((i = e.viewport) != null && i.value && (d = e.isPositioned) != null && d.value) {
        let u = function() {
          const p = c.scrollHeight - c.clientHeight;
          s.value = Math.ceil(c.scrollTop) < p;
        };
        const c = e.viewport.value;
        u(), c.addEventListener("scroll", u), r(() => c.removeEventListener("scroll", u));
      }
    }), te(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), g(fi, {
      key: 0,
      ref: l(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: u } = l(e);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop + u.value.offsetHeight);
      })
    }, {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : Z("", !0);
  }
}), Km = /* @__PURE__ */ y({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e, currentElement: a } = z(), n = Kt(), o = Ms();
    return rd(() => {
      var s;
      const r = !!Tn((s = o == null ? void 0 : o.default) == null ? void 0 : s.call(o)).length;
      n.onValueElementHasChildrenChange(r);
    }), ce(() => {
      n.valueElement = a;
    }), (s, r) => (v(), g(l(L), {
      ref: l(e),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: f(() => {
        var i;
        return [
          l(ui)((i = l(n).modelValue) == null ? void 0 : i.value) ? (v(), F(J, { key: 0 }, [
            q(Q(s.placeholder), 1)
          ], 64)) : b(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Wm = /* @__PURE__ */ y({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return (e, a) => (v(), g(l(L), {
      "aria-hidden": "true",
      as: e.as,
      "as-child": e.asChild
    }, {
      default: f(() => [
        b(e.$slots, "default", {}, () => [
          q("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), jm = /* @__PURE__ */ y({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = ["horizontal", "vertical"];
    function n(i) {
      return a.includes(i);
    }
    const o = $(
      () => n(e.orientation) ? e.orientation : "horizontal"
    ), s = $(
      () => o.value === "vertical" ? e.orientation : void 0
    ), r = $(
      () => e.decorative ? { role: "none" } : { "aria-orientation": s.value, role: "separator" }
    );
    return (i, d) => (v(), g(l(L), P({
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
}), Gm = /* @__PURE__ */ y({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(jm, H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Ym(t = [], e, a) {
  const n = [...t];
  return n[a] = e, n.sort((o, s) => o - s);
}
function vi(t, e, a) {
  const n = 100 / (a - e) * (t - e);
  return $n(n, 0, 100);
}
function qm(t, e) {
  return e > 2 ? `Value ${t + 1} of ${e}` : e === 2 ? ["Minimum", "Maximum"][t] : void 0;
}
function Jm(t, e) {
  if (t.length === 1)
    return 0;
  const a = t.map((o) => Math.abs(o - e)), n = Math.min(...a);
  return a.indexOf(n);
}
function Qm(t, e, a) {
  const n = t / 2, o = Dl([0, 50], [0, n]);
  return (n - o(e) * a) * a;
}
function Xm(t) {
  return t.slice(0, -1).map((e, a) => t[a + 1] - e);
}
function Zm(t, e) {
  if (e > 0) {
    const a = Xm(t);
    return Math.min(...a) >= e;
  }
  return !0;
}
function Dl(t, e) {
  return (a) => {
    if (t[0] === t[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (t[1] - t[0]);
    return e[0] + n * (a - t[0]);
  };
}
function eh(t) {
  return (String(t).split(".")[1] || "").length;
}
function th(t, e) {
  const a = 10 ** e;
  return Math.round(t * a) / a;
}
const mi = ["PageUp", "PageDown"], hi = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], gi = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [yi, bi] = ne(["SliderVertical", "SliderHorizontal"]), _i = /* @__PURE__ */ y({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Nn();
    return (s, r) => (v(), g(l(L), P({ "data-slider-impl": "" }, a, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : l(mi).concat(l(hi)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
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
}), ah = /* @__PURE__ */ y({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, { max: o, min: s, dir: r, inverted: i } = me(a), { forwardRef: d, currentElement: u } = z(), c = A(), p = $(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function _(m) {
      const w = c.value || u.value.getBoundingClientRect(), h = [0, w.width], x = p.value ? [s.value, o.value] : [o.value, s.value], C = Dl(h, x);
      return c.value = w, C(m - w.left);
    }
    return bi({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, w) => (v(), g(_i, {
      ref: l(d),
      dir: l(r),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: w[0] || (w[0] = (h) => {
        const x = _(h.clientX);
        n("slideStart", x);
      }),
      onSlideMove: w[1] || (w[1] = (h) => {
        const x = _(h.clientX);
        n("slideMove", x);
      }),
      onSlideEnd: w[2] || (w[2] = () => {
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: w[3] || (w[3] = (h) => {
        const x = p.value ? "from-left" : "from-right", C = l(gi)[x].includes(h.key);
        n("stepKeyDown", h, C ? -1 : 1);
      }),
      onEndKeyDown: w[4] || (w[4] = (h) => n("endKeyDown", h)),
      onHomeKeyDown: w[5] || (w[5] = (h) => n("homeKeyDown", h))
    }, {
      default: f(() => [
        b(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), nh = /* @__PURE__ */ y({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, { max: o, min: s, inverted: r } = me(a), { forwardRef: i, currentElement: d } = z(), u = A(), c = $(() => !r.value);
    function p(_) {
      const m = u.value || d.value.getBoundingClientRect(), w = [0, m.height], h = c.value ? [o.value, s.value] : [s.value, o.value], x = Dl(w, h);
      return u.value = m, x(_ - m.top);
    }
    return bi({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (_, m) => (v(), g(_i, {
      ref: l(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: m[0] || (m[0] = (w) => {
        const h = p(w.clientY);
        n("slideStart", h);
      }),
      onSlideMove: m[1] || (m[1] = (w) => {
        const h = p(w.clientY);
        n("slideMove", h);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        u.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (w) => {
        const h = c.value ? "from-bottom" : "from-top", x = l(gi)[h].includes(w.key);
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
}), oh = ["value", "name", "disabled", "step"], [Nn, lh] = ne("SliderRoot"), sh = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, { min: o, max: s, step: r, minStepsBetweenThumbs: i, orientation: d, disabled: u, dir: c } = me(a), p = lt(c), { forwardRef: _, currentElement: m } = z(), w = Ua(m);
    _l();
    const h = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), x = A(0), C = A(h.value);
    function S(M) {
      const U = Jm(h.value, M);
      E(M, U);
    }
    function k(M) {
      E(M, x.value);
    }
    function O() {
      const M = C.value[x.value];
      h.value[x.value] !== M && n("valueCommit", hd(h.value));
    }
    function E(M, U, { commit: N } = { commit: !1 }) {
      var B;
      const I = eh(r.value), R = th(Math.round((M - o.value) / r.value) * r.value + o.value, I), Y = $n(R, o.value, s.value), G = Ym(h.value, Y, U);
      if (Zm(G, i.value * r.value)) {
        x.value = G.indexOf(Y);
        const X = String(G) !== String(h.value);
        X && N && n("valueCommit", G), X && ((B = V.value[x.value]) == null || B.focus(), h.value = G);
      }
    }
    const V = A([]);
    return lh({
      modelValue: h,
      valueIndexToChangeRef: x,
      thumbElements: V,
      orientation: d,
      min: o,
      max: s,
      disabled: u
    }), (M, U) => (v(), F(J, null, [
      D(l(wl), null, {
        default: f(() => [
          (v(), g(Ae(l(d) === "horizontal" ? ah : nh), P(M.$attrs, {
            ref: l(_),
            "as-child": M.asChild,
            as: M.as,
            min: l(o),
            max: l(s),
            dir: l(p),
            inverted: M.inverted,
            "aria-disabled": l(u),
            "data-disabled": l(u) ? "" : void 0,
            onPointerdown: U[0] || (U[0] = () => {
              l(u) || (C.value = l(h));
            }),
            onSlideStart: U[1] || (U[1] = (N) => !l(u) && S(N)),
            onSlideMove: U[2] || (U[2] = (N) => !l(u) && k(N)),
            onSlideEnd: U[3] || (U[3] = (N) => !l(u) && O()),
            onHomeKeyDown: U[4] || (U[4] = (N) => !l(u) && E(l(o), 0, { commit: !0 })),
            onEndKeyDown: U[5] || (U[5] = (N) => !l(u) && E(l(s), l(h).length - 1, { commit: !0 })),
            onStepKeyDown: U[6] || (U[6] = (N, B) => {
              if (!l(u)) {
                const I = l(mi).includes(N.key) || N.shiftKey && l(hi).includes(N.key) ? 10 : 1, R = x.value, Y = l(h)[R], G = l(r) * I * B;
                E(Y + G, R, { commit: !0 });
              }
            })
          }), {
            default: f(() => [
              b(M.$slots, "default", { modelValue: l(h) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      l(w) ? (v(!0), F(J, { key: 0 }, fe(l(h), (N, B) => (v(), F("input", {
        key: B,
        value: N,
        type: "number",
        style: { display: "none" },
        name: M.name ? M.name + (l(h).length > 1 ? "[]" : "") : void 0,
        disabled: l(u),
        step: l(r)
      }, null, 8, oh))), 128)) : Z("", !0)
    ], 64));
  }
}), rh = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Nn(), n = yi(), { forwardRef: o, currentElement: s } = z(), r = $(() => {
      var m, w;
      return (w = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : w[e.index];
    }), i = $(() => r.value === void 0 ? 0 : vi(r.value, a.min.value ?? 0, a.max.value ?? 100)), d = $(() => {
      var m, w;
      return qm(e.index, ((w = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : w.length) ?? 0);
    }), u = Tr(s), c = $(() => u[n.size].value), p = $(() => c.value ? Qm(c.value, i.value, n.direction) : 0), _ = il();
    return ce(() => {
      a.thumbElements.value.push(s.value);
    }), Ot(() => {
      const m = a.thumbElements.value.findIndex((w) => w === s.value) ?? -1;
      a.thumbElements.value.splice(m, 1);
    }), (m, w) => (v(), g(l(Ln), null, {
      default: f(() => [
        D(l(L), P(m.$attrs, {
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
}), ih = /* @__PURE__ */ y({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { getItems: a } = xl(), { forwardRef: n, currentElement: o } = z(), s = $(() => o.value ? a().findIndex((r) => r.ref === o.value) : -1);
    return (r, i) => (v(), g(rh, P({ ref: l(n) }, e, { index: s.value }), {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), dh = /* @__PURE__ */ y({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Nn();
    return z(), (a, n) => (v(), g(l(L), {
      "as-child": a.asChild,
      as: a.as,
      "data-disabled": l(e).disabled.value ? "" : void 0,
      "data-orientation": l(e).orientation.value
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), uh = /* @__PURE__ */ y({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Nn(), a = yi();
    z();
    const n = $(() => {
      var r, i;
      return (i = (r = e.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (d) => vi(d, e.min.value, e.max.value)
      );
    }), o = $(() => e.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = $(() => 100 - Math.max(...n.value));
    return (r, i) => (v(), g(l(L), {
      "data-disabled": l(e).disabled.value ? "" : void 0,
      "data-orientation": l(e).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: Et({
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
function ch() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
ch();
const ph = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [fh, vh] = ne("SwitchRoot"), mh = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, { disabled: o } = me(a), s = ve(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    });
    function r() {
      o.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: d } = z(), u = Ua(d), c = $(() => {
      var p;
      return a.id && d.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return vh({
      checked: s,
      toggleCheck: r,
      disabled: o
    }), (p, _) => (v(), F(J, null, [
      D(l(L), P(p.$attrs, {
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
        onKeydown: Ke(Ce(r, ["prevent"]), ["enter"])
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
      }, null, 8, ph)) : Z("", !0)
    ], 64));
  }
}), hh = /* @__PURE__ */ y({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = fh();
    return z(), (a, n) => {
      var o;
      return v(), g(l(L), {
        "data-state": (o = l(e).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": l(e).disabled.value ? "" : void 0,
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
}), [Sl, gh] = ne("TabsRoot"), yh = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, { orientation: o, dir: s } = me(a), r = lt(s);
    z();
    const i = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), d = A();
    return gh({
      modelValue: i,
      changeModelValue: (u) => {
        i.value = u;
      },
      orientation: o,
      dir: r,
      activationMode: a.activationMode,
      baseId: we(void 0, "radix-vue-tabs"),
      tabsList: d
    }), (u, c) => (v(), g(l(L), {
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
}), bh = /* @__PURE__ */ y({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { loop: a } = me(e), { forwardRef: n, currentElement: o } = z(), s = Sl();
    return s.tabsList = o, (r, i) => (v(), g(l(ei), {
      "as-child": "",
      orientation: l(s).orientation.value,
      dir: l(s).dir.value,
      loop: l(a)
    }, {
      default: f(() => [
        D(l(L), {
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
function wi(t, e) {
  return `${t}-trigger-${e}`;
}
function xi(t, e) {
  return `${t}-content-${e}`;
}
const _h = /* @__PURE__ */ y({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a } = z(), n = Sl(), o = $(() => wi(n.baseId, e.value)), s = $(() => xi(n.baseId, e.value)), r = $(() => e.value === n.modelValue.value), i = A(r.value);
    return ce(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (d, u) => (v(), g(l(Te), {
      present: r.value,
      "force-mount": ""
    }, {
      default: f(({ present: c }) => [
        D(l(L), {
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
          style: Et({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: f(() => [
            d.forceMount || r.value ? b(d.$slots, "default", { key: 0 }) : Z("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), wh = /* @__PURE__ */ y({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, { forwardRef: a } = z(), n = Sl(), o = $(() => wi(n.baseId, e.value)), s = $(() => xi(n.baseId, e.value)), r = $(() => e.value === n.modelValue.value);
    return (i, d) => (v(), g(l(av), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: f(() => [
        D(l(L), {
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
          onMousedown: d[0] || (d[0] = Ce((u) => {
            !i.disabled && u.ctrlKey === !1 ? l(n).changeModelValue(i.value) : u.preventDefault();
          }, ["left"])),
          onKeydown: d[1] || (d[1] = Ke((u) => l(n).changeModelValue(i.value), ["enter", "space"])),
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
}), [zn, xh] = ne("ToastProvider"), $h = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(t) {
    const e = t, { label: a, duration: n, swipeDirection: o, swipeThreshold: s } = me(e), r = A(), i = A(0), d = A(!1), u = A(!1);
    if (e.label && typeof e.label == "string" && !e.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return xh({
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
}), Ch = "toast.swipeStart", kh = "toast.swipeMove", Bh = "toast.swipeCancel", Dh = "toast.swipeEnd", So = "toast.viewportPause", Po = "toast.viewportResume";
function nn(t, e, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
function gs(t, e, a = 0) {
  const n = Math.abs(t.x), o = Math.abs(t.y), s = n > o;
  return e === "left" || e === "right" ? s && n > a : !s && o > a;
}
function Sh(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
function $i(t) {
  const e = [];
  return Array.from(t.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && e.push(a.textContent), Sh(a)) {
      const n = a.ariaHidden || a.hidden || a.style.display === "none", o = a.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const s = a.dataset.radixToastAnnounceAlt;
          s && e.push(s);
        } else
          e.push(...$i(a));
    }
  }), e;
}
const Ph = /* @__PURE__ */ y({
  __name: "ToastAnnounce",
  setup(t) {
    const e = zn(), a = Vc(1e3), n = A(!1);
    return Sr(() => {
      n.value = !0;
    }), (o, s) => l(a) || n.value ? (v(), g(l(ja), { key: 0 }, {
      default: f(() => [
        q(Q(l(e).label.value) + " ", 1),
        b(o.$slots, "default")
      ]),
      _: 3
    })) : Z("", !0);
  }
}), [Eh, Oh] = ne("ToastRoot"), Ah = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: s } = z(), r = zn(), i = A(null), d = A(null), u = $(
      () => typeof a.duration == "number" ? a.duration : r.duration.value
    ), c = A(0), p = A(u.value), _ = A(0), m = A(u.value), w = Sr(() => {
      const S = (/* @__PURE__ */ new Date()).getTime() - c.value;
      m.value = Math.max(p.value - S, 0);
    }, { fpsLimit: 60 });
    function h(S) {
      S <= 0 || S === Number.POSITIVE_INFINITY || ot && (window.clearTimeout(_.value), c.value = (/* @__PURE__ */ new Date()).getTime(), _.value = window.setTimeout(x, S));
    }
    function x() {
      var S, k;
      (S = s.value) != null && S.contains(xe()) && ((k = r.viewport.value) == null || k.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const C = $(() => s.value ? $i(s.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const S = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(S);
    }
    return be((S) => {
      const k = r.viewport.value;
      if (k) {
        const O = () => {
          h(p.value), w.resume(), n("resume");
        }, E = () => {
          const V = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - V, window.clearTimeout(_.value), w.pause(), n("pause");
        };
        return k.addEventListener(So, E), k.addEventListener(Po, O), () => {
          k.removeEventListener(So, E), k.removeEventListener(Po, O);
        };
      }
    }), te(() => [a.open, u.value], () => {
      p.value = u.value, a.open && !r.isClosePausedRef.value && h(u.value);
    }, { immediate: !0 }), rl("Escape", (S) => {
      n("escapeKeyDown", S), S.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, x());
    }), ce(() => {
      r.onToastAdd();
    }), Ot(() => {
      r.onToastRemove();
    }), Oh({ onClose: x }), (S, k) => (v(), F(J, null, [
      C.value ? (v(), g(Ph, {
        key: 0,
        role: "alert",
        "aria-live": S.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: f(() => [
          q(Q(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : Z("", !0),
      l(r).viewport.value ? (v(), g(Sn, {
        key: 1,
        to: l(r).viewport.value
      }, [
        D(l(L), P({
          ref: l(o),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, S.$attrs, {
          as: S.as,
          "as-child": S.asChild,
          "data-state": S.open ? "open" : "closed",
          "data-swipe-direction": l(r).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: k[0] || (k[0] = Ce((O) => {
            i.value = { x: O.clientX, y: O.clientY };
          }, ["left"])),
          onPointermove: k[1] || (k[1] = (O) => {
            if (!i.value) return;
            const E = O.clientX - i.value.x, V = O.clientY - i.value.y, M = !!d.value, U = ["left", "right"].includes(l(r).swipeDirection.value), N = ["left", "up"].includes(l(r).swipeDirection.value) ? Math.min : Math.max, B = U ? N(0, E) : 0, I = U ? 0 : N(0, V), R = O.pointerType === "touch" ? 10 : 2, Y = { x: B, y: I }, G = { originalEvent: O, delta: Y };
            M ? (d.value = Y, l(nn)(l(kh), (X) => n("swipeMove", X), G)) : l(gs)(Y, l(r).swipeDirection.value, R) ? (d.value = Y, l(nn)(l(Ch), (X) => n("swipeStart", X), G), O.target.setPointerCapture(O.pointerId)) : (Math.abs(E) > R || Math.abs(V) > R) && (i.value = null);
          }),
          onPointerup: k[2] || (k[2] = (O) => {
            const E = d.value, V = O.target;
            if (V.hasPointerCapture(O.pointerId) && V.releasePointerCapture(O.pointerId), d.value = null, i.value = null, E) {
              const M = O.currentTarget, U = { originalEvent: O, delta: E };
              l(gs)(E, l(r).swipeDirection.value, l(r).swipeThreshold.value) ? l(nn)(l(Dh), (N) => n("swipeEnd", N), U) : l(nn)(l(Bh), (N) => n("swipeCancel", N), U), M == null || M.addEventListener("click", (N) => N.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: f(() => [
            b(S.$slots, "default", {
              remaining: m.value,
              duration: u.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : Z("", !0)
    ], 64));
  }
}), Mh = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o } = z(), s = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    return (r, i) => (v(), g(l(Te), {
      present: r.forceMount || l(s)
    }, {
      default: f(() => [
        D(Ah, P({
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
}), Ci = /* @__PURE__ */ y({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    return (e, a) => (v(), g(l(L), {
      as: e.as,
      "as-child": e.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": e.altText || void 0
    }, {
      default: f(() => [
        b(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), ki = /* @__PURE__ */ y({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Eh(), { forwardRef: n } = z();
    return (o, s) => (v(), g(Ci, { "as-child": "" }, {
      default: f(() => [
        D(l(L), P(e, {
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
}), Th = /* @__PURE__ */ y({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    if (!t.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: e } = z();
    return (a, n) => a.altText ? (v(), g(Ci, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: f(() => [
        D(ki, {
          ref: l(e),
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
    }, 8, ["alt-text"])) : Z("", !0);
  }
}), ys = /* @__PURE__ */ y({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(t, { emit: e }) {
    const a = e, n = zn();
    return (o, s) => (v(), g(l(ja), {
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
}), Ih = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(t) {
    const e = t, { hotkey: a, label: n } = me(e), { forwardRef: o, currentElement: s } = z(), { createCollection: r } = fa(), i = r(s), d = zn(), u = $(() => d.toastCount.value > 0), c = A(), p = A(), _ = $(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    rl(a.value, () => {
      s.value.focus();
    }), ce(() => {
      d.onViewportChange(s.value);
    }), be((w) => {
      const h = s.value;
      if (u.value && h) {
        const x = () => {
          if (!d.isClosePausedRef.value) {
            const E = new CustomEvent(So);
            h.dispatchEvent(E), d.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (d.isClosePausedRef.value) {
            const E = new CustomEvent(Po);
            h.dispatchEvent(E), d.isClosePausedRef.value = !1;
          }
        }, S = (E) => {
          !h.contains(E.relatedTarget) && C();
        }, k = () => {
          h.contains(xe()) || C();
        }, O = (E) => {
          var V, M, U;
          const N = E.altKey || E.ctrlKey || E.metaKey;
          if (E.key === "Tab" && !N) {
            const B = xe(), I = E.shiftKey;
            if (E.target === h && I) {
              (V = c.value) == null || V.focus();
              return;
            }
            const R = m({ tabbingDirection: I ? "backwards" : "forwards" }), Y = R.findIndex((G) => G === B);
            fn(R.slice(Y + 1)) ? E.preventDefault() : I ? (M = c.value) == null || M.focus() : (U = p.value) == null || U.focus();
          }
        };
        h.addEventListener("focusin", x), h.addEventListener("focusout", S), h.addEventListener("pointermove", x), h.addEventListener("pointerleave", k), h.addEventListener("keydown", O), window.addEventListener("blur", x), window.addEventListener("focus", C), w(() => {
          h.removeEventListener("focusin", x), h.removeEventListener("focusout", S), h.removeEventListener("pointermove", x), h.removeEventListener("pointerleave", k), h.removeEventListener("keydown", O), window.removeEventListener("blur", x), window.removeEventListener("focus", C);
        });
      }
    });
    function m({ tabbingDirection: w }) {
      const h = i.value.map((x) => {
        const C = [x, ...vl(x)];
        return w === "forwards" ? C : C.reverse();
      });
      return (w === "forwards" ? h.reverse() : h).flat();
    }
    return (w, h) => (v(), g(l(Op), {
      role: "region",
      "aria-label": typeof l(n) == "string" ? l(n).replace("{hotkey}", _.value) : l(n)(_.value),
      tabindex: "-1",
      style: Et({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: u.value ? void 0 : "none"
      })
    }, {
      default: f(() => [
        u.value ? (v(), g(ys, {
          key: 0,
          ref: (x) => {
            c.value = l(Le)(x);
          },
          onFocusFromOutsideViewport: h[0] || (h[0] = () => {
            const x = m({
              tabbingDirection: "forwards"
            });
            l(fn)(x);
          })
        }, null, 512)) : Z("", !0),
        D(l(L), P({
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
        u.value ? (v(), g(ys, {
          key: 1,
          ref: (x) => {
            p.value = l(Le)(x);
          },
          onFocusFromOutsideViewport: h[1] || (h[1] = () => {
            const x = m({
              tabbingDirection: "backwards"
            });
            l(fn)(x);
          })
        }, null, 512)) : Z("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Vh = /* @__PURE__ */ y({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return z(), (a, n) => (v(), g(l(L), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rh = /* @__PURE__ */ y({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return z(), (a, n) => (v(), g(l(L), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bi = "tooltip.open", [Pl, Fh] = ne("TooltipProvider"), Di = /* @__PURE__ */ y({
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
  setup(t) {
    const e = t, { delayDuration: a, skipDelayDuration: n, disableHoverableContent: o, disableClosingTrigger: s, ignoreNonKeyboardFocus: r, disabled: i } = me(e);
    z();
    const d = A(!0), u = A(!1), { start: c, stop: p } = sl(() => {
      d.value = !0;
    }, n, { immediate: !1 });
    return Fh({
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
}), [Un, Lh] = ne("TooltipRoot"), Nh = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e;
    z();
    const o = Pl(), s = $(() => a.disableHoverableContent ?? o.disableHoverableContent.value), r = $(() => a.disableClosingTrigger ?? o.disableClosingTrigger.value), i = $(() => a.disabled ?? o.disabled.value), d = $(() => a.delayDuration ?? o.delayDuration.value), u = $(() => a.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), c = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    te(c, (k) => {
      o.onClose && (k ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Bi))) : o.onClose());
    });
    const p = A(!1), _ = A(), m = $(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: w, stop: h } = sl(() => {
      p.value = !0, c.value = !0;
    }, d, { immediate: !1 });
    function x() {
      h(), p.value = !1, c.value = !0;
    }
    function C() {
      h(), c.value = !1;
    }
    function S() {
      w();
    }
    return Lh({
      contentId: "",
      open: c,
      stateAttribute: m,
      trigger: _,
      onTriggerChange(k) {
        _.value = k;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? S() : x();
      },
      onTriggerLeave() {
        s.value ? C() : h();
      },
      onOpen: x,
      onClose: C,
      disableHoverableContent: s,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: u
    }), (k, O) => (v(), g(l(ga), null, {
      default: f(() => [
        b(k.$slots, "default", { open: l(c) })
      ]),
      _: 3
    }));
  }
}), zh = /* @__PURE__ */ y({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Un(), n = Pl();
    a.contentId || (a.contentId = we(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: s } = z(), r = A(!1), i = A(!1), d = $(() => a.disabled.value ? {} : {
      click: h,
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
      var C, S;
      r.value || a.ignoreNonKeyboardFocus.value && !((S = (C = x.target).matches) != null && S.call(C, ":focus-visible")) || a.onOpen();
    }
    function w() {
      a.onClose();
    }
    function h() {
      a.disableClosingTrigger.value || a.onClose();
    }
    return (x, C) => (v(), g(l(Fn), { "as-child": "" }, {
      default: f(() => [
        D(l(L), P({
          ref: l(o),
          "aria-describedby": l(a).open.value ? l(a).contentId : void 0,
          "data-state": l(a).stateAttribute.value,
          as: x.as,
          "as-child": e.asChild,
          "data-grace-area-trigger": ""
        }, dd(d.value)), {
          default: f(() => [
            b(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Si = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = Un(), { forwardRef: s } = z(), r = Ms(), i = $(() => {
      var c;
      return (c = r.default) == null ? void 0 : c.call(r);
    }), d = $(() => {
      var c;
      if (a.ariaLabel)
        return a.ariaLabel;
      let p = "";
      function _(m) {
        typeof m.children == "string" && m.type !== Vs ? p += m.children : Array.isArray(m.children) && m.children.forEach((w) => _(w));
      }
      return (c = i.value) == null || c.forEach((m) => _(m)), p;
    }), u = $(() => {
      const { ariaLabel: c, ...p } = a;
      return p;
    });
    return ce(() => {
      ra(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(o.trigger.value) && o.onClose();
      }), ra(window, Bi, o.onClose);
    }), (c, p) => (v(), g(l(ma), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (_) => n("escapeKeyDown", _)),
      onPointerDownOutside: p[1] || (p[1] = (_) => {
        var m;
        l(o).disableClosingTrigger.value && (m = l(o).trigger.value) != null && m.contains(_.target) && _.preventDefault(), n("pointerDownOutside", _);
      }),
      onFocusOutside: p[2] || (p[2] = Ce(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (_) => l(o).onClose())
    }, {
      default: f(() => [
        D(l(ia), P({
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
            D(l(ja), {
              id: l(o).contentId,
              role: "tooltip"
            }, {
              default: f(() => [
                q(Q(d.value), 1)
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
}), Uh = /* @__PURE__ */ y({
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
  setup(t) {
    const e = se(t), { forwardRef: a, currentElement: n } = z(), { trigger: o, onClose: s } = Un(), r = Pl(), { isPointerInTransit: i, onPointerExit: d } = qc(o, n);
    return r.isPointerInTransitRef = i, d(() => {
      s();
    }), (u, c) => (v(), g(Si, P({ ref: l(a) }, l(e)), {
      default: f(() => [
        b(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hh = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = Un(), s = ee(a, n), { forwardRef: r } = z();
    return (i, d) => (v(), g(l(Te), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        (v(), g(Ae(l(o).disableHoverableContent.value ? Si : Uh), P({ ref: l(r) }, l(s)), {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Kh = /* @__PURE__ */ y({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Ka), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), O0 = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (s, r) => (v(), g(l(_p), H(W(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), El = "-", Wh = (t) => {
  const e = Gh(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (r) => {
      const i = r.split(El);
      return i[0] === "" && i.length !== 1 && i.shift(), Pi(i, e) || jh(r);
    },
    getConflictingClassGroupIds: (r, i) => {
      const d = a[r] || [];
      return i && n[r] ? [...d, ...n[r]] : d;
    }
  };
}, Pi = (t, e) => {
  var r;
  if (t.length === 0)
    return e.classGroupId;
  const a = t[0], n = e.nextPart.get(a), o = n ? Pi(t.slice(1), n) : void 0;
  if (o)
    return o;
  if (e.validators.length === 0)
    return;
  const s = t.join(El);
  return (r = e.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : r.classGroupId;
}, bs = /^\[(.+)\]$/, jh = (t) => {
  if (bs.test(t)) {
    const e = bs.exec(t)[1], a = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Gh = (t) => {
  const {
    theme: e,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return qh(Object.entries(t.classGroups), a).forEach(([s, r]) => {
    Eo(r, n, s, e);
  }), n;
}, Eo = (t, e, a, n) => {
  t.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? e : _s(e, o);
      s.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (Yh(o)) {
        Eo(o(n), e, a, n);
        return;
      }
      e.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([s, r]) => {
      Eo(r, _s(e, s), a, n);
    });
  });
}, _s = (t, e) => {
  let a = t;
  return e.split(El).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Yh = (t) => t.isThemeGetter, qh = (t, e) => e ? t.map(([a, n]) => {
  const o = n.map((s) => typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([r, i]) => [e + r, i])) : s);
  return [a, o];
}) : t, Jh = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (s, r) => {
    a.set(s, r), e++, e > t && (e = 0, n = a, a = /* @__PURE__ */ new Map());
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
}, Ei = "!", Qh = (t) => {
  const {
    separator: e,
    experimentalParseClassName: a
  } = t, n = e.length === 1, o = e[0], s = e.length, r = (i) => {
    const d = [];
    let u = 0, c = 0, p;
    for (let x = 0; x < i.length; x++) {
      let C = i[x];
      if (u === 0) {
        if (C === o && (n || i.slice(x, x + s) === e)) {
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
    const _ = d.length === 0 ? i : i.substring(c), m = _.startsWith(Ei), w = m ? _.substring(1) : _, h = p && p > c ? p - c : void 0;
    return {
      modifiers: d,
      hasImportantModifier: m,
      baseClassName: w,
      maybePostfixModifierPosition: h
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: r
  }) : r;
}, Xh = (t) => {
  if (t.length <= 1)
    return t;
  const e = [];
  let a = [];
  return t.forEach((n) => {
    n[0] === "[" ? (e.push(...a.sort(), n), a = []) : a.push(n);
  }), e.push(...a.sort()), e;
}, Zh = (t) => ({
  cache: Jh(t.cacheSize),
  parseClassName: Qh(t),
  ...Wh(t)
}), eg = /\s+/, tg = (t, e) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = e, s = [], r = t.trim().split(eg);
  let i = "";
  for (let d = r.length - 1; d >= 0; d -= 1) {
    const u = r[d], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: _,
      maybePostfixModifierPosition: m
    } = a(u);
    let w = !!m, h = n(w ? _.substring(0, m) : _);
    if (!h) {
      if (!w) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (h = n(_), !h) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      w = !1;
    }
    const x = Xh(c).join(":"), C = p ? x + Ei : x, S = C + h;
    if (s.includes(S))
      continue;
    s.push(S);
    const k = o(h, w);
    for (let O = 0; O < k.length; ++O) {
      const E = k[O];
      s.push(C + E);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function ag() {
  let t = 0, e, a, n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (a = Oi(e)) && (n && (n += " "), n += a);
  return n;
}
const Oi = (t) => {
  if (typeof t == "string")
    return t;
  let e, a = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = Oi(t[n])) && (a && (a += " "), a += e);
  return a;
};
function ng(t, ...e) {
  let a, n, o, s = r;
  function r(d) {
    const u = e.reduce((c, p) => p(c), t());
    return a = Zh(u), n = a.cache.get, o = a.cache.set, s = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = tg(d, a);
    return o(d, c), c;
  }
  return function() {
    return s(ag.apply(null, arguments));
  };
}
const he = (t) => {
  const e = (a) => a[t] || [];
  return e.isThemeGetter = !0, e;
}, Ai = /^\[(?:([a-z-]+):)?(.+)\]$/i, og = /^\d+\/\d+$/, lg = /* @__PURE__ */ new Set(["px", "full", "screen"]), sg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, rg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ig = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, dg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ug = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, it = (t) => ta(t) || lg.has(t) || og.test(t), wt = (t) => xa(t, "length", yg), ta = (t) => !!t && !Number.isNaN(Number(t)), io = (t) => xa(t, "number", ta), Da = (t) => !!t && Number.isInteger(Number(t)), cg = (t) => t.endsWith("%") && ta(t.slice(0, -1)), ae = (t) => Ai.test(t), xt = (t) => sg.test(t), pg = /* @__PURE__ */ new Set(["length", "size", "percentage"]), fg = (t) => xa(t, pg, Mi), vg = (t) => xa(t, "position", Mi), mg = /* @__PURE__ */ new Set(["image", "url"]), hg = (t) => xa(t, mg, _g), gg = (t) => xa(t, "", bg), Sa = () => !0, xa = (t, e, a) => {
  const n = Ai.exec(t);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : a(n[2]) : !1;
}, yg = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  rg.test(t) && !ig.test(t)
), Mi = () => !1, bg = (t) => dg.test(t), _g = (t) => ug.test(t), wg = () => {
  const t = he("colors"), e = he("spacing"), a = he("blur"), n = he("brightness"), o = he("borderColor"), s = he("borderRadius"), r = he("borderSpacing"), i = he("borderWidth"), d = he("contrast"), u = he("grayscale"), c = he("hueRotate"), p = he("invert"), _ = he("gap"), m = he("gradientColorStops"), w = he("gradientColorStopPositions"), h = he("inset"), x = he("margin"), C = he("opacity"), S = he("padding"), k = he("saturate"), O = he("scale"), E = he("sepia"), V = he("skew"), M = he("space"), U = he("translate"), N = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", ae, e], R = () => [ae, e], Y = () => ["", it, wt], G = () => ["auto", ta, ae], X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], de = () => ["solid", "dashed", "dotted", "double", "none"], ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ye = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", ae], oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ue = () => [ta, ae];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Sa],
      spacing: [it, wt],
      blur: ["none", "", xt, ae],
      brightness: ue(),
      borderColor: [t],
      borderRadius: ["none", "", "full", xt, ae],
      borderSpacing: R(),
      borderWidth: Y(),
      contrast: ue(),
      grayscale: j(),
      hueRotate: ue(),
      invert: j(),
      gap: R(),
      gradientColorStops: [t],
      gradientColorStopPositions: [cg, wt],
      inset: I(),
      margin: I(),
      opacity: ue(),
      padding: R(),
      saturate: ue(),
      scale: ue(),
      sepia: j(),
      skew: ue(),
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
        aspect: ["auto", "square", "video", ae]
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
        columns: [xt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": oe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": oe()
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
        object: [...X(), ae]
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
        z: ["auto", Da, ae]
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
        flex: ["1", "auto", "initial", "none", ae]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: j()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: j()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Da, ae]
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
          span: ["full", Da, ae]
        }, ae]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": G()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": G()
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
          span: [Da, ae]
        }, ae]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": G()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": G()
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
        "auto-cols": ["auto", "min", "max", "fr", ae]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ae]
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
        p: [S]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [S]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [S]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [S]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [S]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [S]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [S]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [S]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [S]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ae, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ae, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ae, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [xt]
        }, xt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ae, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ae, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ae, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ae, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", xt, wt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", io]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ae]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ta, io]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", it, ae]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ae]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ae]
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
        placeholder: [t]
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
        text: [t]
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
        decoration: [...de(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", it, wt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", it, ae]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ae]
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
        content: ["none", ae]
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
        bg: [...X(), vg]
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
        bg: ["auto", "cover", "contain", fg]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, hg]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
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
        border: [...de(), "hidden"]
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
        divide: de()
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
        outline: ["", ...de()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [it, ae]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [it, wt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
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
        ring: [t]
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
        "ring-offset": [it, wt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", xt, gg]
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
        "drop-shadow": ["", "none", xt, ae]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ae]
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
        ease: ["linear", "in", "out", "in-out", ae]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", ae]
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
        rotate: [Da, ae]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [U]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [U]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ae]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ae]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
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
        "will-change": ["auto", "scroll", "contents", "transform", ae]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [it, wt, io]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
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
}, xg = /* @__PURE__ */ ng(wg);
function T(...t) {
  return xg(t);
}
const A0 = /* @__PURE__ */ y({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l($p), P(a.value, { class: "overflow-hidden text-sm text-accordion-text transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: f(() => [
        re("div", {
          class: K(l(T)("pb-4 pt-0", e.class))
        }, [
          b(n.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), M0 = /* @__PURE__ */ y({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(xp), P(l(n), {
      class: l(T)("border-b border-accordion-border", e.class)
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
const $g = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var on = {
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
const Cg = ({ size: t, strokeWidth: e = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: s, class: r, ...i }, { slots: d }) => Ze(
  "svg",
  {
    ...on,
    width: t || on.width,
    height: t || on.height,
    stroke: n || on.stroke,
    "stroke-width": a ? Number(e) * 24 / Number(t) : e,
    class: ["lucide", `lucide-${$g(s ?? "icon")}`],
    ...i
  },
  [...o.map((u) => Ze(...u)), ...d.default ? [d.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = (t, e) => (a, { slots: n }) => Ze(
  Cg,
  {
    ...a,
    iconNode: e,
    name: t
  },
  n
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kg = $e("CalendarIcon", [
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
const Hn = $e("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = $e("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bg = $e("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = $e("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = $e("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sg = $e("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pg = $e("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eg = $e("ChevronsUpDownIcon", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Og = $e("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ti = $e("EllipsisIcon", [
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
const Ag = $e("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mg = $e("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tg = $e("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ig = $e("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = $e("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rg = $e("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fg = $e("SunIcon", [
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
const Kn = $e("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), T0 = /* @__PURE__ */ y({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Cp), { class: "flex" }, {
      default: f(() => [
        D(l(kp), P(a.value, {
          class: l(T)(
            "flex flex-1 items-center justify-between py-4 font-medium text-heading transition-all [&[data-state=open]>svg]:rotate-180",
            e.class
          )
        }), {
          default: f(() => [
            b(n.$slots, "default"),
            b(n.$slots, "icon", {}, () => [
              D(l(Ol), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
});
function Ii(t) {
  var e, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (a = Ii(t[e])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function Lg() {
  for (var t, e, a = 0, n = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (e = Ii(t)) && (n && (n += " "), n += e);
  return n;
}
const ws = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, xs = Lg, $a = (t, e) => (a) => {
  var n;
  if ((e == null ? void 0 : e.variants) == null) return xs(t, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: s } = e, r = Object.keys(o).map((u) => {
    const c = a == null ? void 0 : a[u], p = s == null ? void 0 : s[u];
    if (c === null) return null;
    const _ = ws(c) || ws(p);
    return o[u][_];
  }), i = a && Object.entries(a).reduce((u, c) => {
    let [p, _] = c;
    return _ === void 0 || (u[p] = _), u;
  }, {}), d = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, c) => {
    let { class: p, className: _, ...m } = c;
    return Object.entries(m).every((w) => {
      let [h, x] = w;
      return Array.isArray(x) ? x.includes({
        ...s,
        ...i
      }[h]) : {
        ...s,
        ...i
      }[h] === x;
    }) ? [
      ...u,
      p,
      _
    ] : u;
  }, []);
  return xs(t, r, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, I0 = /* @__PURE__ */ y({
  __name: "Badge",
  props: {
    variant: {},
    type: {},
    size: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      class: K(l(T)(l(Ng)({ variant: a.variant, type: a.type, size: a.size }), e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ng = $a(
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
), V0 = /* @__PURE__ */ y({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("nav", {
      "aria-label": "breadcrumb",
      class: K(e.class)
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), R0 = /* @__PURE__ */ y({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: K(l(T)("flex h-9 w-9 items-center justify-center", e.class))
    }, [
      b(a.$slots, "default", {}, () => [
        D(l(Ti), { class: "h-4 w-4" })
      ]),
      n[0] || (n[0] = re("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), F0 = /* @__PURE__ */ y({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("li", {
      class: K(l(T)("inline-flex items-center gap-1.5", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), L0 = /* @__PURE__ */ y({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), {
      as: a.as,
      "as-child": a.asChild,
      class: K(l(T)("transition-colors hover:text-foreground", e.class))
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), N0 = /* @__PURE__ */ y({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("ol", {
      class: K(
        l(T)(
          "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), z0 = /* @__PURE__ */ y({
  __name: "BreadcrumbPage",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("span", {
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: K(l(T)("font-normal text-foreground", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), U0 = /* @__PURE__ */ y({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: K(l(T)("[&>svg]:h-3.5 [&>svg]:w-3.5", e.class))
    }, [
      b(a.$slots, "default", {}, () => [
        D(l(Al))
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
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), {
      as: a.as,
      "as-child": a.asChild,
      class: K(l(T)(l(jt)({ variant: a.variant, size: a.size }), e.class))
    }, {
      default: f(() => [
        b(a.$slots, "default"),
        a.loading ? (v(), g(l(Ag), {
          key: 0,
          class: K(l(zg)({ size: a.size }))
        }, null, 8, ["class"])) : Z("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), zg = $a("animate-spin", {
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
}), jt = $a(
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
), H0 = /* @__PURE__ */ y({
  __name: "Card",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      class: K(
        l(T)("rounded-lg border border-card-border bg-card text-card-foreground shadow-sm", e.class)
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), K0 = /* @__PURE__ */ y({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      class: K(l(T)("flex flex-col gap-y-1.5 p-6", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), W0 = /* @__PURE__ */ y({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("h3", {
      class: K(l(T)("text-2xl font-semibold leading-none tracking-tight", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), j0 = /* @__PURE__ */ y({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("p", {
      class: K(l(T)("text-sm text-muted-foreground", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), G0 = /* @__PURE__ */ y({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      class: K(l(T)("p-6 pt-0", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Y0 = /* @__PURE__ */ y({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      class: K(l(T)("flex items-center p-6 pt-0", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ug = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, q0 = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(jr), P({
      class: l(T)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: u }) => [
        D(l(Ui), null, {
          default: f(() => [
            D(l(Kg)),
            D(l(Hi)),
            D(l(Hg))
          ]),
          _: 1
        }),
        re("div", Ug, [
          (v(!0), F(J, null, fe(d, (c) => (v(), g(l(Fi), {
            key: c.value.toString()
          }, {
            default: f(() => [
              D(l(Ni), null, {
                default: f(() => [
                  D(l(Bn), null, {
                    default: f(() => [
                      (v(!0), F(J, null, fe(u, (p) => (v(), g(l(zi), { key: p }, {
                        default: f(() => [
                          q(Q(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              D(l(Li), null, {
                default: f(() => [
                  (v(!0), F(J, null, fe(c.rows, (p, _) => (v(), g(l(Bn), {
                    key: `weekDate-${_}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), F(J, null, fe(p, (m) => (v(), g(l(Vi), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          D(l(Ri), {
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
}), Vi = /* @__PURE__ */ y({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(df), P({
      class: l(T)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        e.class
      )
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ri = /* @__PURE__ */ y({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(hf), P({
      class: l(T)(
        l(jt)({ variant: "ghost" }),
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
        e.class
      )
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fi = /* @__PURE__ */ y({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(rf), P({
      class: l(T)("w-full border-collapse space-y-1", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Li = /* @__PURE__ */ y({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(vf), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ni = /* @__PURE__ */ y({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(ff), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bn = /* @__PURE__ */ y({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(mf), P({
      class: l(T)("flex", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zi = /* @__PURE__ */ y({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(uf), P({
      class: l(T)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ui = /* @__PURE__ */ y({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(lf), P({
      class: l(T)("relative flex w-full items-center justify-between pt-1", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hi = /* @__PURE__ */ y({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(sf), P({
      class: l(T)("text-sm font-medium text-text", e.class)
    }, l(n)), {
      default: f(({ headingValue: r }) => [
        b(o.$slots, "default", { headingValue: r }, () => [
          q(Q(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hg = /* @__PURE__ */ y({
  __name: "CalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(cf), P({
      class: l(T)(
        l(jt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, l(n)), {
      default: f(() => s[0] || (s[0] = [
        q(" > ")
      ])),
      _: 1
    }, 16, ["class"]));
  }
}), Kg = /* @__PURE__ */ y({
  __name: "CalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(pf), P({
      class: l(T)(
        l(jt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, l(n)), {
      default: f(() => s[0] || (s[0] = [
        q(" < ")
      ])),
      _: 1
    }, 16, ["class"]));
  }
});
function Ki(t) {
  return Lo() ? (No(t), !0) : !1;
}
function Wn(t) {
  return typeof t == "function" ? t() : l(t);
}
const Wg = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const jg = (t) => typeof t < "u", Gg = Object.prototype.toString, Yg = (t) => Gg.call(t) === "[object Object]", Wi = () => {
};
function qg(t, e) {
  function a(...n) {
    return new Promise((o, s) => {
      Promise.resolve(t(() => e.apply(this, n), { fn: e, thisArg: this, args: n })).then(o).catch(s);
    });
  }
  return a;
}
const ji = (t) => t();
function Jg(t = ji) {
  const e = A(!0);
  function a() {
    e.value = !1;
  }
  function n() {
    e.value = !0;
  }
  const o = (...s) => {
    e.value && t(...s);
  };
  return { isActive: Ra(e), pause: a, resume: n, eventFilter: o };
}
function Qg(t) {
  return at();
}
function Xg(...t) {
  if (t.length !== 1)
    return Os(...t);
  const e = t[0];
  return typeof e == "function" ? Ra(Fs(() => ({ get: e, set: Wi }))) : A(e);
}
function Zg(t, e, a = {}) {
  const {
    eventFilter: n = ji,
    ...o
  } = a;
  return te(
    t,
    qg(
      n,
      e
    ),
    o
  );
}
function ey(t, e, a = {}) {
  const {
    eventFilter: n,
    ...o
  } = a, { eventFilter: s, pause: r, resume: i, isActive: d } = Jg(n);
  return { stop: Zg(
    t,
    e,
    {
      ...o,
      eventFilter: s
    }
  ), pause: r, resume: i, isActive: d };
}
function Gi(t, e = !0, a) {
  Qg() ? ce(t, a) : e ? t() : le(t);
}
function Yi(t) {
  var e;
  const a = Wn(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
const da = Wg ? window : void 0;
function Oo(...t) {
  let e, a, n, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([a, n, o] = t, e = da) : [e, a, n, o] = t, !e)
    return Wi;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, p, _, m) => (c.addEventListener(p, _, m), () => c.removeEventListener(p, _, m)), d = te(
    () => [Yi(e), Wn(o)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const _ = Yg(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((w) => i(c, m, w, _)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), r();
  };
  return Ki(u), u;
}
function ty() {
  const t = A(!1), e = at();
  return e && ce(() => {
    t.value = !0;
  }, e), t;
}
function ay(t) {
  const e = ty();
  return $(() => (e.value, !!t()));
}
function qi(t, e = {}) {
  const { window: a = da } = e, n = ay(() => a && "matchMedia" in a && typeof a.matchMedia == "function");
  let o;
  const s = A(!1), r = (u) => {
    s.value = u.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", r) : o.removeListener(r));
  }, d = be(() => {
    n.value && (i(), o = a.matchMedia(Wn(t)), "addEventListener" in o ? o.addEventListener("change", r) : o.addListener(r), s.value = o.matches);
  });
  return Ki(() => {
    d(), i(), o = void 0;
  }), s;
}
function ny(t) {
  return JSON.parse(JSON.stringify(t));
}
const ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, sn = "__vueuse_ssr_handlers__", oy = /* @__PURE__ */ ly();
function ly() {
  return sn in ln || (ln[sn] = ln[sn] || {}), ln[sn];
}
function Ji(t, e) {
  return oy[t] || e;
}
function sy(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const ry = {
  boolean: {
    read: (t) => t === "true",
    write: (t) => String(t)
  },
  object: {
    read: (t) => JSON.parse(t),
    write: (t) => JSON.stringify(t)
  },
  number: {
    read: (t) => Number.parseFloat(t),
    write: (t) => String(t)
  },
  any: {
    read: (t) => t,
    write: (t) => String(t)
  },
  string: {
    read: (t) => t,
    write: (t) => String(t)
  },
  map: {
    read: (t) => new Map(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t.entries()))
  },
  set: {
    read: (t) => new Set(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t))
  },
  date: {
    read: (t) => new Date(t),
    write: (t) => t.toISOString()
  }
}, $s = "vueuse-storage";
function iy(t, e, a, n = {}) {
  var o;
  const {
    flush: s = "pre",
    deep: r = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: d = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: p = da,
    eventFilter: _,
    onError: m = (B) => {
      console.error(B);
    },
    initOnMounted: w
  } = n, h = (c ? Fo : A)(typeof e == "function" ? e() : e);
  if (!a)
    try {
      a = Ji("getDefaultStorage", () => {
        var B;
        return (B = da) == null ? void 0 : B.localStorage;
      })();
    } catch (B) {
      m(B);
    }
  if (!a)
    return h;
  const x = Wn(e), C = sy(x), S = (o = n.serializer) != null ? o : ry[C], { pause: k, resume: O } = ey(
    h,
    () => V(h.value),
    { flush: s, deep: r, eventFilter: _ }
  );
  p && i && Gi(() => {
    Oo(p, "storage", U), Oo(p, $s, N), w && U();
  }), w || U();
  function E(B, I) {
    p && p.dispatchEvent(new CustomEvent($s, {
      detail: {
        key: t,
        oldValue: B,
        newValue: I,
        storageArea: a
      }
    }));
  }
  function V(B) {
    try {
      const I = a.getItem(t);
      if (B == null)
        E(I, null), a.removeItem(t);
      else {
        const R = S.write(B);
        I !== R && (a.setItem(t, R), E(I, R));
      }
    } catch (I) {
      m(I);
    }
  }
  function M(B) {
    const I = B ? B.newValue : a.getItem(t);
    if (I == null)
      return d && x != null && a.setItem(t, S.write(x)), x;
    if (!B && u) {
      const R = S.read(I);
      return typeof u == "function" ? u(R, x) : C === "object" && !Array.isArray(R) ? { ...x, ...R } : R;
    } else return typeof I != "string" ? I : S.read(I);
  }
  function U(B) {
    if (!(B && B.storageArea !== a)) {
      if (B && B.key == null) {
        h.value = x;
        return;
      }
      if (!(B && B.key !== t)) {
        k();
        try {
          (B == null ? void 0 : B.newValue) !== S.write(h.value) && (h.value = M(B));
        } catch (I) {
          m(I);
        } finally {
          B ? le(O) : O();
        }
      }
    }
  }
  function N(B) {
    U(B.detail);
  }
  return h;
}
function Qi(t) {
  return qi("(prefers-color-scheme: dark)", t);
}
function dy(t = {}) {
  const {
    selector: e = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = da,
    storage: s,
    storageKey: r = "vueuse-color-scheme",
    listenToStorageChanges: i = !0,
    storageRef: d,
    emitAuto: u,
    disableTransition: c = !0
  } = t, p = {
    auto: "",
    light: "light",
    dark: "dark",
    ...t.modes || {}
  }, _ = Qi({ window: o }), m = $(() => _.value ? "dark" : "light"), w = d || (r == null ? Xg(n) : iy(r, n, s, { window: o, listenToStorageChanges: i })), h = $(() => w.value === "auto" ? m.value : w.value), x = Ji(
    "updateHTMLAttrs",
    (O, E, V) => {
      const M = typeof O == "string" ? o == null ? void 0 : o.document.querySelector(O) : Yi(O);
      if (!M)
        return;
      let U;
      if (c && (U = o.document.createElement("style"), U.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(U)), E === "class") {
        const N = V.split(/\s/g);
        Object.values(p).flatMap((B) => (B || "").split(/\s/g)).filter(Boolean).forEach((B) => {
          N.includes(B) ? M.classList.add(B) : M.classList.remove(B);
        });
      } else
        M.setAttribute(E, V);
      c && (o.getComputedStyle(U).opacity, document.head.removeChild(U));
    }
  );
  function C(O) {
    var E;
    x(e, a, (E = p[O]) != null ? E : O);
  }
  function S(O) {
    t.onChanged ? t.onChanged(O, C) : C(O);
  }
  te(h, S, { flush: "post", immediate: !0 }), Gi(() => S(h.value));
  const k = $({
    get() {
      return u ? w.value : h.value;
    },
    set(O) {
      w.value = O;
    }
  });
  try {
    return Object.assign(k, { store: w, system: m, state: h });
  } catch {
    return k;
  }
}
function uy(t = {}) {
  const {
    valueDark: e = "dark",
    valueLight: a = "",
    window: n = da
  } = t, o = dy({
    ...t,
    onChanged: (i, d) => {
      var u;
      t.onChanged ? (u = t.onChanged) == null || u.call(t, i === "dark", d, i) : d(i);
    },
    modes: {
      dark: e,
      light: a
    }
  }), s = $(() => o.system ? o.system.value : Qi({ window: n }).value ? "dark" : "light");
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
function Ml(t, e, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: _
  } = n, m = at(), w = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let h = u;
  e || (e = "modelValue"), h = h || `update:${e.toString()}`;
  const x = (k) => i ? typeof i == "function" ? i(k) : ny(k) : k, C = () => jg(t[e]) ? x(t[e]) : p, S = (k) => {
    _ ? _(k) && w(h, k) : w(h, k);
  };
  if (d) {
    const k = C(), O = A(k);
    let E = !1;
    return te(
      () => t[e],
      (V) => {
        E || (E = !0, O.value = x(V), le(() => E = !1));
      }
    ), te(
      O,
      (V) => {
        !E && (V !== t[e] || c) && S(V);
      },
      { deep: c }
    ), O;
  } else
    return $({
      get() {
        return C();
      },
      set(k) {
        S(k);
      }
    });
}
const Ao = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (s, r) => (v(), g(l(_m), H(W(l(o))), {
      default: f(({ open: i }) => [
        b(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Mo = /* @__PURE__ */ y({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Km), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), To = /* @__PURE__ */ y({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    open: { type: Boolean }
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l($m), P(l(n), {
      class: l(T)(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-start text-sm ring-offset-background transition placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        e.class
      )
    }), {
      default: f(() => [
        b(o.$slots, "default"),
        D(l(Wm), { "as-child": "" }, {
          default: f(() => [
            D(l(Ol), {
              class: K(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Io = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(Cm), null, {
      default: f(() => [
        D(l(Am), P({ ...l(s), ...r.$attrs }, {
          class: l(T)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            r.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: f(() => [
            D(l(py)),
            D(l(zm), {
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
            D(l(fy))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), J0 = /* @__PURE__ */ y({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Lm), P({
      class: l(T)("w-full p-1", e.class)
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cy = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Vo = /* @__PURE__ */ y({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(Im), P(l(n), {
      class: l(T)(
        "focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        e.class
      )
    }), {
      default: f(() => [
        re("span", cy, [
          D(l(Vm), null, {
            default: f(() => [
              D(l(Hn), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        D(l(pi), null, {
          default: f(() => [
            b(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Q0 = /* @__PURE__ */ y({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(pi), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), X0 = /* @__PURE__ */ y({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Nm), {
      class: K(l(T)("py-1.5 pl-8 pr-2 text-sm font-semibold", e.class))
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Z0 = /* @__PURE__ */ y({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Mm), P(a.value, {
      class: l(T)("-mx-1 my-1 h-px bg-muted", e.class)
    }), null, 16, ["class"]));
  }
}), py = /* @__PURE__ */ y({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(Um), P(l(n), {
      class: l(T)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          D(l(Dg), { class: "size-4 text-primary" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fy = /* @__PURE__ */ y({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(Hm), P(l(n), {
      class: l(T)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          D(l(Ol), { class: "size-4 text-primary" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vy = { class: "flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, my = /* @__PURE__ */ y({
  __name: "CalendarWithSelect",
  props: {
    modelValue: { default: void 0 },
    multiple: { type: Boolean },
    defaultValue: {},
    defaultPlaceholder: {},
    placeholder: { default() {
      return vn(vt());
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: d, placeholder: u, ...c } = a;
      return c;
    }), s = Ml(a, "modelValue", n, {
      passive: !0,
      defaultValue: vn(vt())
    }), r = ee(o, n), i = Ar("en");
    return (d, u) => (v(), g(l(jr), P({
      placeholder: l(s),
      "onUpdate:placeholder": u[2] || (u[2] = (c) => ca(s) ? s.value = c : null)
    }, l(r), {
      class: l(T)("rounded-md border p-3", a.class)
    }), {
      default: f(({ date: c, grid: p, weekDays: _ }) => [
        D(l(Ui), null, {
          default: f(() => [
            D(l(Hi), { class: "flex w-full items-center justify-between gap-2" }, {
              default: f(() => [
                D(l(Ao), {
                  "default-value": l(s).month.toString(),
                  "onUpdate:modelValue": u[0] || (u[0] = (m) => {
                    var w;
                    !m || !l(s) || Number(m) !== ((w = l(s)) == null ? void 0 : w.month) && (s.value = l(s).set({
                      month: Number(m)
                    }));
                  })
                }, {
                  default: f(() => [
                    D(l(To), {
                      "aria-label": "Select month",
                      class: "w-[60%]"
                    }, {
                      default: f(() => [
                        D(l(Mo), { placeholder: "Select month" })
                      ]),
                      _: 1
                    }),
                    D(l(Io), { class: "max-h-[200px]" }, {
                      default: f(() => [
                        (v(!0), F(J, null, fe(l(Au)({ dateObj: c }), (m) => (v(), g(l(Vo), {
                          key: m.toString(),
                          value: m.month.toString()
                        }, {
                          default: f(() => [
                            q(Q(l(i).custom(l(Fe)(m), { month: "long" })), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]))), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["default-value"]),
                D(l(Ao), {
                  "default-value": l(s).year.toString(),
                  "onUpdate:modelValue": u[1] || (u[1] = (m) => {
                    var w;
                    !m || !l(s) || Number(m) !== ((w = l(s)) == null ? void 0 : w.year) && (s.value = l(s).set({
                      year: Number(m)
                    }));
                  })
                }, {
                  default: f(() => [
                    D(l(To), {
                      "aria-label": "Select year",
                      class: "w-[40%]"
                    }, {
                      default: f(() => [
                        D(l(Mo), { placeholder: "Select year" })
                      ]),
                      _: 1
                    }),
                    D(l(Io), { class: "max-h-[200px]" }, {
                      default: f(() => [
                        (v(!0), F(J, null, fe(l(Ou)({ dateObj: c, startIndex: -100, endIndex: 10 }), (m) => (v(), g(l(Vo), {
                          key: m.toString(),
                          value: m.year.toString()
                        }, {
                          default: f(() => [
                            q(Q(m.year), 1)
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
        re("div", vy, [
          (v(!0), F(J, null, fe(p, (m) => (v(), g(l(Fi), {
            key: m.value.toString()
          }, {
            default: f(() => [
              D(l(Ni), null, {
                default: f(() => [
                  D(l(Bn), null, {
                    default: f(() => [
                      (v(!0), F(J, null, fe(_, (w) => (v(), g(l(zi), { key: w }, {
                        default: f(() => [
                          q(Q(w), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              D(l(Li), { class: "grid" }, {
                default: f(() => [
                  (v(!0), F(J, null, fe(m.rows, (w, h) => (v(), g(l(Bn), {
                    key: `weekDate-${h}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), F(J, null, fe(w, (x) => (v(), g(l(Vi), {
                        key: x.toString(),
                        date: x
                      }, {
                        default: f(() => [
                          D(l(Ri), {
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
}), Xi = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(Ef), P(l(s), {
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
}), Zi = /* @__PURE__ */ y({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (s, r) => (v(), g(l(Fr), H(W(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), e_ = /* @__PURE__ */ y({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Wa), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hy = /* @__PURE__ */ y({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Lr), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gy = /* @__PURE__ */ y({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      class: K(l(T)("flex flex-col gap-y-1.5 text-center sm:text-left", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), yy = /* @__PURE__ */ y({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(Hr), P(l(n), {
      class: l(T)("text-2xl font-semibold leading-none tracking-tight text-heading", e.class)
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), by = /* @__PURE__ */ y({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(Kr), P(l(n), {
      class: l(T)("text-sm text-sub-text", e.class)
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ed = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = n;
      return i;
    }), s = ee(o, a);
    return (r, i) => (v(), g(l(fl), null, {
      default: f(() => [
        D(l(yl), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        D(l(gl), P(l(s), {
          class: l(T)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg",
            n.class
          )
        }), {
          default: f(() => [
            b(r.$slots, "default"),
            D(l(Wa), {
              onClick: i[0] || (i[0] = (d) => a("close", d)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: f(() => [
                D(l(Kn), { class: "size-4 dark:text-slate-300" }),
                i[1] || (i[1] = re("span", { class: "sr-only" }, "Close", -1))
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
}), t_ = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(fl), null, {
      default: f(() => [
        D(l(yl), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: f(() => [
            D(l(gl), P({
              class: l(T)(
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
                b(r.$slots, "default"),
                D(l(Wa), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: f(() => [
                    D(l(Kn), { class: "size-4" }),
                    i[1] || (i[1] = re("span", { class: "sr-only" }, "Close", -1))
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
}), _y = /* @__PURE__ */ y({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      class: K(
        l(T)("flex flex-col-reverse text-text sm:flex-row sm:justify-end sm:gap-x-2", e.class)
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), a_ = /* @__PURE__ */ y({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (s, r) => (v(), g(l(Zi), H(W(l(o))), {
      default: f(() => [
        D(l(ed), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: f(() => [
            D(Xi, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), wy = /* @__PURE__ */ y({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Ff), P(a.value, {
      class: l(T)("py-6 text-center text-sm", e.class)
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xy = /* @__PURE__ */ y({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Mf), P(a.value, {
      class: l(T)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        e.class
      )
    }), {
      default: f(() => [
        n.heading ? (v(), g(l(Tf), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: f(() => [
            q(Q(n.heading), 1)
          ]),
          _: 1
        })) : Z("", !0),
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $y = { class: "flex items-center border-b px-3" }, Cy = /* @__PURE__ */ y({
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
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), F("div", $y, [
      D(l(Rg), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      D(l(Of), P({ ...l(n), ...o.$attrs }, {
        "auto-focus": "",
        class: l(T)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          e.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), ky = /* @__PURE__ */ y({
  __name: "CommandItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(Uf), P(l(s), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), By = { role: "presentation" }, Dy = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(Rf), P(l(s), {
      class: l(T)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: f(() => [
        re("div", By, [
          b(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n_ = /* @__PURE__ */ y({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Hf), P(a.value, {
      class: l(T)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", e.class)
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o_ = /* @__PURE__ */ y({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("span", {
      class: K(l(T)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Sy = /* @__PURE__ */ y({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (s, r) => (v(), g(l(xv), H(W(l(o))), {
      default: f(({ open: i }) => [
        b(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Py = /* @__PURE__ */ y({
  __name: "BaseDropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      class: K(
        l(T)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ey = /* @__PURE__ */ y({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = se(t);
    return (n, o) => (v(), g(l($v), P({ class: "outline-none" }, l(a)), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oy = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(Cv), null, {
      default: f(() => [
        D(l(kv), P(l(s), {
          class: l(T)(
            "z-50 min-w-32 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
}), l_ = /* @__PURE__ */ y({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Bv), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), s_ = /* @__PURE__ */ y({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (s, r) => (v(), g(l(Ev), H(W(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), r_ = /* @__PURE__ */ y({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(si), P(l(n), {
      class: l(T)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.inset && "pl-8",
        e.class
      )
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ay = /* @__PURE__ */ y({
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
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(Py, {
      class: K(e.class)
    }, {
      default: f(() => [
        D(l(si), P(l(n), {
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
}), My = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, i_ = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(Sv), P(l(s), {
      class: l(T)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        re("span", My, [
          D(l(ri), null, {
            default: f(() => [
              D(l(Hn), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ty = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, d_ = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(Ov), P(l(s), {
      class: l(T)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        re("span", Ty, [
          D(l(ri), null, {
            default: f(() => [
              D(l(Og), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), u_ = /* @__PURE__ */ y({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("span", {
      class: K(l(T)("ml-auto text-xs tracking-widest opacity-60", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), c_ = /* @__PURE__ */ y({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Dv), P(a.value, {
      class: l(T)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", e.class)
    }), null, 16, ["class"]));
  }
}), p_ = /* @__PURE__ */ y({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(Pv), P(l(n), {
      class: l(T)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", e.class)
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), f_ = /* @__PURE__ */ y({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (s, r) => (v(), g(l(Av), H(W(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), v_ = /* @__PURE__ */ y({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(Tv), P(l(n), {
      class: l(T)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        e.class
      )
    }), {
      default: f(() => [
        b(o.$slots, "default"),
        D(l(Al), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), m_ = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(Mv), P(l(s), {
      class: l(T)(
        "z-50 min-w-32 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        a.class
      )
    }), {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Iy = { class: "text-xs text-slate-600 dark:text-slate-300" }, Vy = /* @__PURE__ */ y({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(t) {
    return (e, a) => (v(), F("div", Iy, "Characters: " + Q(e.count), 1));
  }
}), qa = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [n, o] of e)
    a[n] = o;
  return a;
}, Ry = {}, Fy = { class: "text-sm text-slate-400 dark:text-slate-500" };
function Ly(t, e) {
  return v(), F("div", Fy, [
    b(t.$slots, "default")
  ]);
}
const Ny = /* @__PURE__ */ qa(Ry, [["render", Ly]]), zy = { class: "text-sm text-red-600 dark:text-red-400" }, Uy = /* @__PURE__ */ y({
  __name: "Error",
  props: {
    error: {}
  },
  setup(t) {
    return (e, a) => ua((v(), F("div", null, [
      re("p", zy, Q(e.error), 1)
    ], 512)), [
      [Uo, e.error]
    ]);
  }
}), Hy = {}, Ky = { class: "w-full space-y-4 p-1.5" };
function Wy(t, e) {
  return v(), F("div", Ky, [
    b(t.$slots, "default")
  ]);
}
const h_ = /* @__PURE__ */ qa(Hy, [["render", Wy]]), jy = {}, Gy = { class: "my-4" };
function Yy(t, e) {
  return v(), F("div", Gy, [
    b(t.$slots, "default")
  ]);
}
const qy = /* @__PURE__ */ qa(jy, [["render", Yy]]), Jy = { class: "grid gap-4 md:grid-cols-2" }, g_ = /* @__PURE__ */ y({
  __name: "FormGrid",
  setup(t) {
    return (e, a) => (v(), g(qy, null, {
      default: f(() => [
        re("div", Jy, [
          b(e.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), td = /* @__PURE__ */ y({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    id: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Iv), P(a.value, {
      class: l(T)(
        "text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        e.class
      )
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qy = { class: "relative" }, Xy = {
  name: "Base",
  inheritAttrs: !1
}, At = /* @__PURE__ */ y({
  ...Xy,
  props: {
    id: {},
    modelValue: {},
    label: {},
    showLabel: { type: Boolean, default: !0 },
    description: {},
    showCharacterCount: { type: Boolean, default: !1 },
    error: {}
  },
  setup(t) {
    return (e, a) => {
      var n;
      return v(), F("div", null, [
        e.label && e.showLabel ? (v(), g(l(td), {
          key: 0,
          id: e.id
        }, {
          default: f(() => [
            q(Q(e.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : Z("", !0),
        re("div", Qy, [
          b(e.$slots, "default"),
          e.showCharacterCount ? (v(), g(l(Vy), {
            key: 0,
            count: (n = e.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : Z("", !0)
        ]),
        D(l(Ny), { class: "mt-[2px]" }, {
          default: f(() => [
            q(Q(e.description), 1)
          ]),
          _: 1
        }),
        D(l(Uy), { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), Zy = { class: "flex gap-2" }, y_ = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = e, o = A(t.modelValue);
    return te(o, (s) => {
      a("update:modelValue", s);
    }), (s, r) => (v(), g(l(At), H(W(s.$props)), {
      default: f(() => [
        re("div", Zy, [
          D(l(_f), {
            id: s.id,
            checked: o.value,
            "onUpdate:checked": r[0] || (r[0] = (i) => o.value = i),
            class: "peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground"
          }, {
            default: f(() => [
              D(l(wf), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: f(() => [
                  D(l(Hn), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          s.text ? (v(), g(l(td), {
            key: 0,
            id: s.id,
            class: "my-auto"
          }, {
            default: f(() => [
              q(Q(s.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : Z("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), ad = /* @__PURE__ */ y({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (s, r) => (v(), g(l(Gv), H(W(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nd = /* @__PURE__ */ y({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Yv), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), od = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(qv), null, {
      default: f(() => [
        D(l(Xv), P({ ...l(s), ...r.$attrs }, {
          class: l(T)(
            "z-50 w-72 rounded-md border border-border bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
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
}), b_ = /* @__PURE__ */ y({
  __name: "Combobox",
  props: {
    modelValue: {},
    placeholder: {},
    emptyMessage: {},
    options: {},
    multiple: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, n = t, o = $(() => n.emptyMessage ?? "Option not found"), s = $(() => n.placeholder ?? "Select an option"), r = A(!1), i = A(n.modelValue ?? []), d = (p, _) => p.filter((m) => m.name.toLowerCase().includes(_.toLowerCase())), u = $(() => {
      var p;
      return Array.isArray(i.value) ? i.value.length ? i.value.map((_) => _.name).join(", ") : s.value : typeof i.value == "object" ? i.value.name : (p = n.options.find((_) => _.id === i.value)) == null ? void 0 : p.name;
    }), c = (p) => Array.isArray(i.value) ? i.value.find((_) => _.id === p.id) : typeof i.value == "object" ? i.value.id === p.id : i.value === p.id;
    return te(i, () => {
      Array.isArray(i.value) ? a("update:modelValue", i.value) : a("update:modelValue", i.value.id);
    }), (p, _) => (v(), g(l(At), H(W(p.$props)), {
      default: f(() => [
        D(l(ad), {
          open: r.value,
          "onUpdate:open": _[2] || (_[2] = (m) => r.value = m)
        }, {
          default: f(() => [
            D(l(nd), { "as-child": "" }, {
              default: f(() => [
                D(l(Ye), {
                  variant: "outline",
                  role: "combobox",
                  "aria-expanded": r.value,
                  class: "w-full justify-between overflow-hidden"
                }, {
                  default: f(() => [
                    q(Q(u.value) + " ", 1),
                    D(l(Eg), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
                  ]),
                  _: 1
                }, 8, ["aria-expanded"])
              ]),
              _: 1
            }),
            D(l(od), { class: "w-full p-0" }, {
              default: f(() => [
                D(l(Xi), {
                  multiple: p.multiple,
                  modelValue: i.value,
                  "onUpdate:modelValue": _[1] || (_[1] = (m) => i.value = m),
                  "filter-function": d
                }, {
                  default: f(() => [
                    D(l(Cy), {
                      class: "h-9",
                      placeholder: s.value
                    }, null, 8, ["placeholder"]),
                    D(l(wy), null, {
                      default: f(() => [
                        q(Q(o.value), 1)
                      ]),
                      _: 1
                    }),
                    D(l(Dy), null, {
                      default: f(() => [
                        D(l(xy), null, {
                          default: f(() => [
                            (v(!0), F(J, null, fe(p.options, (m) => (v(), g(l(ky), {
                              key: m.id,
                              value: m,
                              onSelect: _[0] || (_[0] = () => {
                                p.multiple || (r.value = !1);
                              })
                            }, {
                              default: f(() => [
                                q(Q(m.name) + " ", 1),
                                D(l(Hn), {
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
}), __ = /* @__PURE__ */ y({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, n = t, o = new Qe("en-US", {
      dateStyle: "long"
    }), s = A(n.modelValue);
    return te(s, () => {
      a("update:modelValue", s.value);
    }), ce(() => {
      if (n.defaultValue)
        s.value = n.defaultValue;
      else if (s.value === null) {
        let r = /* @__PURE__ */ new Date();
        s.value = new _e(
          r.getFullYear(),
          r.getMonth() + 1,
          r.getDate()
        );
      }
    }), (r, i) => (v(), g(l(At), H(W(r.$props)), {
      default: f(() => [
        D(l(ad), null, {
          default: f(() => [
            D(l(nd), { "as-child": "" }, {
              default: f(() => [
                D(l(Ye), {
                  variant: "outline",
                  class: K(["w-[280px] justify-start text-left font-normal text-text"])
                }, {
                  default: f(() => [
                    D(l(kg), { class: "mr-2 size-4" }),
                    q(" " + Q(s.value ? l(o).format(s.value.toDate(l(vt)())) : r.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            D(l(od), { class: "w-auto p-0" }, {
              default: f(() => [
                D(l(my), {
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
var ke = [];
for (var uo = 0; uo < 256; ++uo)
  ke.push((uo + 256).toString(16).slice(1));
function eb(t, e = 0) {
  return (ke[t[e + 0]] + ke[t[e + 1]] + ke[t[e + 2]] + ke[t[e + 3]] + "-" + ke[t[e + 4]] + ke[t[e + 5]] + "-" + ke[t[e + 6]] + ke[t[e + 7]] + "-" + ke[t[e + 8]] + ke[t[e + 9]] + "-" + ke[t[e + 10]] + ke[t[e + 11]] + ke[t[e + 12]] + ke[t[e + 13]] + ke[t[e + 14]] + ke[t[e + 15]]).toLowerCase();
}
var rn, tb = new Uint8Array(16);
function ab() {
  if (!rn && (rn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !rn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return rn(tb);
}
var nb = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Cs = {
  randomUUID: nb
};
function ob(t, e, a) {
  if (Cs.randomUUID && !t)
    return Cs.randomUUID();
  t = t || {};
  var n = t.random || (t.rng || ab)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, eb(n);
}
const lb = { class: "flex items-center space-x-2" }, sb = ["src"], rb = ["accept"], w_ = /* @__PURE__ */ y({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = "file-upload-" + ob(), s = $(() => i.value ? URL.createObjectURL(i.value) : null), r = a.currentImage ? a.currentImage : a.defaultImage, i = $({
      get: () => a.modelValue,
      set: (c) => n("update:modelValue", c)
    }), d = (c) => {
      i.value = c.target.files[0];
    }, u = () => document.getElementById(o).click();
    return (c, p) => (v(), g(l(At), H(W(c.$props)), {
      default: f(() => [
        re("div", lb, [
          b(c.$slots, "image", {
            newImage: s.value,
            curImage: l(r)
          }, () => [
            re("img", {
              src: s.value ?? l(r),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, sb)
          ]),
          re("input", {
            id: o,
            accept: c.accept,
            hidden: "",
            type: "file",
            onInput: d
          }, null, 40, rb),
          D(l(Ye), {
            variant: "outline",
            onClick: u
          }, {
            default: f(() => p[0] || (p[0] = [
              q(" Upload ")
            ])),
            _: 1
          })
        ])
      ]),
      _: 3
    }, 16));
  }
}), ib = ["disabled", "placeholder", "required", "type"], db = /* @__PURE__ */ y({
  __name: "Input",
  props: /* @__PURE__ */ fo({
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
  setup(t) {
    const e = zs(t, "modelValue");
    return (a, n) => (v(), g(l(At), H(W(a.$props)), {
      default: f(() => [
        ua(re("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => e.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: K(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
          }])
        }, null, 10, ib), [
          [yd, e.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), x_ = /* @__PURE__ */ y({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, n = t, o = $(() => n.placeholder ?? "Select an option..."), s = A(
      n.modelValue ? n.options.find((r) => r === n.modelValue) : null
    );
    return te(s, () => {
      a("update:modelValue", s.value);
    }), (r, i) => (v(), g(l(At), H(W(r.$props)), {
      default: f(() => [
        D(l(Ao), {
          modelValue: s.value,
          "onUpdate:modelValue": i[0] || (i[0] = (d) => s.value = d)
        }, {
          default: f(({ open: d }) => [
            D(l(To), { open: d }, {
              default: f(() => [
                D(l(Mo), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            D(l(Io), null, {
              default: f(() => [
                (v(!0), F(J, null, fe(r.options, (u) => (v(), g(l(Vo), { value: u }, {
                  default: f(() => [
                    q(Q(u), 1)
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
}), ub = ["placeholder"], $_ = /* @__PURE__ */ y({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = Ml(t, "modelValue", e, {
      passive: !0
    });
    return (s, r) => (v(), g(l(At), H(W(s.$props)), {
      default: f(() => [
        ua(re("textarea", {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => ca(o) ? o.value = i : null),
          placeholder: s.placeholder,
          class: K(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !s.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": s.error
          }])
        }, null, 10, ub), [
          [bd, l(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), cb = /* @__PURE__ */ y({
  __name: "Toggle",
  props: /* @__PURE__ */ fo({
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
  emits: /* @__PURE__ */ fo(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const a = e, n = t, o = zs(t, "modelValue");
    te(o, () => {
      a("update:modelValue", o.value);
    });
    const s = $(() => {
      const { class: i, ...d } = n;
      return d;
    }), r = ee(s, a);
    return (i, d) => (v(), g(l(At), H(W(i.$props)), {
      default: f(() => [
        D(l(mh), P({
          checked: o.value,
          "onUpdate:checked": d[0] || (d[0] = (u) => o.value = u)
        }, l(r), {
          class: l(T)(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent",
            n.class
          )
        }), {
          default: f(({ checked: u }) => [
            D(l(hh), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: f(() => [
                u ? b(i.$slots, "checked", { key: 0 }) : Z("", !0),
                u ? Z("", !0) : b(i.$slots, "not-checked", { key: 1 })
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
}), pb = { class: "my-auto text-slate-400 dark:text-slate-100" }, fb = /* @__PURE__ */ y({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(t) {
    return (e, a) => (v(), F("div", pb, " Showing " + Q(e.min) + " to " + Q(e.max) + " of " + Q(e.total) + " results ", 1));
  }
}), vb = /* @__PURE__ */ y({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Fv), P(a.value, {
      class: l(T)("flex size-9 items-center justify-center text-text", e.class)
    }), {
      default: f(() => [
        b(n.$slots, "default", {}, () => [
          D(l(Ti))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mb = /* @__PURE__ */ y({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Lv), H(W(a.value)), {
      default: f(() => [
        D(l(Ye), {
          class: K(l(T)("size-10 p-0", e.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            b(n.$slots, "default", {}, () => [
              D(l(Sg), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), hb = /* @__PURE__ */ y({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Nv), H(W(a.value)), {
      default: f(() => [
        D(l(Ye), {
          class: K(l(T)("size-10 p-0", e.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            b(n.$slots, "default", {}, () => [
              D(l(Pg), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), gb = /* @__PURE__ */ y({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Kv), H(W(a.value)), {
      default: f(() => [
        D(l(Ye), {
          class: K(l(T)("size-10 p-0", e.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            b(n.$slots, "default", {}, () => [
              D(l(Al), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), yb = /* @__PURE__ */ y({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Wv), H(W(a.value)), {
      default: f(() => [
        D(l(Ye), {
          class: K(l(T)("size-10 p-0", e.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            b(n.$slots, "default", {}, () => [
              D(l(Bg), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), C_ = /* @__PURE__ */ y({
  __name: "LumuixModeToggle",
  setup(t) {
    const e = uy({
      selector: "html"
    });
    return (a, n) => (v(), g(cb, {
      modelValue: l(e),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => ca(e) ? e.value = o : null)
    }, {
      checked: f(() => [
        D(l(Mg), { class: "m-auto mt-0.5 size-4 text-primary" })
      ]),
      "not-checked": f(() => [
        D(l(Fg), { class: "m-auto mt-0.5 size-4 text-primary" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), k_ = /* @__PURE__ */ y({
  __name: "CollapsibleTableRow",
  props: {
    row: {},
    headers: {},
    subRows: {},
    setOpenTo: { type: Boolean, default: !1 },
    class: {}
  },
  setup(t) {
    const e = t, a = A(e.setOpenTo), n = () => {
      a.value = !a.value;
    };
    return (o, s) => (v(), F(J, null, [
      D(l(Va), {
        onClick: n,
        class: K(e.class)
      }, {
        default: f(() => [
          (v(!0), F(J, null, fe(o.headers, (r) => (v(), g(l(Dn), {
            key: r.value
          }, {
            default: f(() => [
              o.$slots[`cell_header_${r.value}`] ? b(o.$slots, `cell_header_${r.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (v(), F(J, { key: 1 }, [
                q(Q(o.row[r.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (v(), g(l(Ro), { key: 0 }, {
            default: f(() => [
              b(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : Z("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (v(!0), F(J, { key: 0 }, fe(o.subRows, (r, i) => (v(), g(l(Va), { key: i }, {
        default: f(() => [
          (v(!0), F(J, null, fe(o.headers, (d) => (v(), g(l(Dn), {
            key: d.value
          }, {
            default: f(() => [
              o.$slots[`subrow_cell_${d.value}`] ? b(o.$slots, `subrow_cell_${d.value}`, {
                key: 0,
                item: r,
                open: a.value
              }) : (v(), F(J, { key: 1 }, [
                q(Q("subrow_cell_" + d.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (v(), g(l(Ro), { key: 0 }, {
            default: f(() => [
              b(o.$slots, "sub_row_actions", {
                item: o.row,
                open: a.value
              })
            ]),
            _: 3
          })) : Z("", !0)
        ]),
        _: 2
      }, 1024))), 128)) : Z("", !0)
    ], 64));
  }
}), bb = { class: "relative w-full overflow-auto" }, _b = /* @__PURE__ */ y({
  __name: "Table",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", bb, [
      re("table", {
        class: K(l(T)("w-full caption-bottom text-sm", e.class))
      }, [
        b(a.$slots, "default")
      ], 2)
    ]));
  }
}), wb = /* @__PURE__ */ y({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("tbody", {
      class: K(l(T)("[&_tr:last-child]:border-0", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Dn = /* @__PURE__ */ y({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("td", {
      class: K(["p-4 align-middle text-text [&:has([role=checkbox])]:pr-0", e.class])
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), xb = /* @__PURE__ */ y({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("th", {
      class: K(
        l(T)(
          "h-12 px-4 text-left align-middle font-medium text-heading [&:has([role=checkbox])]:pr-0",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), $b = /* @__PURE__ */ y({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("thead", {
      class: K(l(T)("[&_tr]:border-b", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), B_ = /* @__PURE__ */ y({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("tfoot", {
      class: K(
        l(T)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Va = /* @__PURE__ */ y({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("tr", {
      class: K(
        l(T)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ro = /* @__PURE__ */ y({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("td", {
      class: K(["w-32 p-4 text-center align-middle dark:text-slate-300", e.class])
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Cb = /* @__PURE__ */ y({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("caption", {
      class: K(l(T)("mt-4 text-sm text-sub-text", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), kb = { class: "flex items-center justify-center py-10" }, D_ = /* @__PURE__ */ y({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(Va, null, {
      default: f(() => [
        D(Dn, P({
          class: l(T)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            e.class
          )
        }, a.value), {
          default: f(() => [
            re("div", kb, [
              b(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), S_ = /* @__PURE__ */ y({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(t) {
    return (e, a) => (v(), g(l(_b), null, {
      default: f(() => [
        e.caption ? (v(), g(l(Cb), { key: 0 }, {
          default: f(() => [
            q(Q(e.caption), 1)
          ]),
          _: 1
        })) : Z("", !0),
        D(l($b), null, {
          default: f(() => [
            D(l(Va), null, {
              default: f(() => [
                (v(!0), F(J, null, fe(e.headers, (n, o) => (v(), g(l(xb), null, {
                  default: f(() => [
                    e.$slots[`header_${e.headers[o].value}`] ? b(e.$slots, `header_${e.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (v(), F(J, { key: 1 }, [
                      q(Q(n.name), 1)
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
        D(l(wb), null, {
          default: f(() => [
            (v(!0), F(J, null, fe(e.rows, (n, o) => (v(), g(l(Va), { key: o }, {
              default: f(() => [
                (v(!0), F(J, null, fe(e.headers, (s) => (v(), g(l(Dn), {
                  key: s.value
                }, {
                  default: f(() => [
                    e.$slots[`cell_${s.value}`] ? b(e.$slots, `cell_${s.value}`, {
                      key: 0,
                      item: n
                    }) : (v(), F(J, { key: 1 }, [
                      q(Q(n[s.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                e.$slots.row_actions ? (v(), g(l(Ro), { key: 0 }, {
                  default: f(() => [
                    b(e.$slots, "row_actions", { item: n })
                  ]),
                  _: 2
                }, 1024)) : Z("", !0)
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
}), Bb = { class: "text-text" }, P_ = /* @__PURE__ */ y({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const a = e, n = () => a("close");
    return (o, s) => (v(), g(l(Zi), { open: o.open }, {
      default: f(() => [
        D(l(hy), { "as-child": "" }, {
          default: f(() => [
            b(o.$slots, "trigger")
          ]),
          _: 3
        }),
        D(l(ed), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: K("max-w-" + o.size)
        }, {
          default: f(() => [
            D(l(gy), null, {
              default: f(() => [
                D(l(yy), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.title ? b(o.$slots, "title", { key: 0 }) : (r = o.headerData) != null && r.title ? (v(), F(J, { key: 1 }, [
                        q(Q(o.headerData.title), 1)
                      ], 64)) : Z("", !0)
                    ];
                  }),
                  _: 3
                }),
                D(l(by), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.description ? b(o.$slots, "description", { key: 0 }) : (r = o.headerData) != null && r.description ? (v(), F(J, { key: 1 }, [
                        q(Q(o.headerData.description), 1)
                      ], 64)) : Z("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            re("div", Bb, [
              o.$slots.content ? b(o.$slots, "content", { key: 0 }) : b(o.$slots, "default", { key: 1 })
            ]),
            D(l(_y), null, {
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
}), Db = { class: "justify-between sm:flex" }, E_ = /* @__PURE__ */ y({
  __name: "LumuixPagination",
  props: {
    data: {},
    as: {}
  },
  setup(t) {
    const e = t, a = () => e.data.current_page === 1 ? e.data.data.length === 0 ? 0 : 1 : e.data.current_page === e.data.last_page ? e.data.total - e.data.data.length : e.data.current_page * e.data.per_page - e.data.per_page, n = () => e.data.current_page === 1 ? e.data.data.length : e.data.current_page === e.data.last_page ? e.data.total : e.data.current_page * e.data.per_page;
    return (o, s) => (v(), F("div", Db, [
      D(l(fb), {
        min: a(),
        max: n(),
        total: o.data.total
      }, null, 8, ["min", "max", "total"]),
      D(l(Rv), null, {
        default: f(() => [
          D(l(Hv), { class: "flex items-center gap-1" }, {
            default: f(() => [
              D(l(mb), {
                as: o.as,
                "as-child": "",
                href: o.data.first_page_url
              }, null, 8, ["as", "href"]),
              o.data.prev_page_url ? (v(), g(l(yb), {
                key: 0,
                as: o.as,
                "as-child": "",
                href: o.data.prev_page_url
              }, null, 8, ["as", "href"])) : Z("", !0),
              (v(!0), F(J, null, fe(o.data.links, (r, i) => (v(), F(J, null, [
                i < 5 ? (v(), F("div", { key: i }, [
                  D(l(Ye), {
                    href: r.url,
                    as: o.as,
                    class: "size-10 p-0",
                    variant: r.active ? "primary" : "outline"
                  }, {
                    default: f(() => [
                      q(Q(r.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["href", "as", "variant"])
                ])) : Z("", !0)
              ], 64))), 256)),
              o.data.links.length > 5 ? (v(), g(l(vb), { key: 1 })) : Z("", !0),
              o.data.next_page_url ? (v(), g(l(gb), {
                key: 2,
                as: o.as,
                "as-child": "",
                href: o.data.next_page_url
              }, null, 8, ["as", "href"])) : Z("", !0),
              D(l(hb), {
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
}), Sb = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (s, r) => (v(), g(l(yh), H(W(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), O_ = /* @__PURE__ */ y({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(wh), P(l(n), {
      class: l(T)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        e.class
      )
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pb = /* @__PURE__ */ y({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => {
      var o;
      return v(), g(Ae((o = a.tab) != null && o.is ? a.tab.is : "a"), {
        href: a.tab.href,
        class: K([
          a.tab.active ? "bg-white text-primary hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          l(T)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            e.class
          )
        ])
      }, {
        default: f(() => {
          var s;
          return [
            (s = a.tab) != null && s.icon ? (v(), g(Ae(a.tab.icon), {
              key: 0,
              class: "size-5"
            })) : Z("", !0),
            q(" " + Q(a.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), ks = /* @__PURE__ */ y({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(bh), P(a.value, {
      class: l(T)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        e.class
      )
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), A_ = /* @__PURE__ */ y({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(_h), P({
      class: l(T)(
        "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        e.class
      )
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Eb = {}, Ob = { class: "mt-2 text-text ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function Ab(t, e) {
  return v(), F("div", Ob, [
    b(t.$slots, "default")
  ]);
}
const Mb = /* @__PURE__ */ qa(Eb, [["render", Ab]]), M_ = /* @__PURE__ */ y({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(t) {
    const e = t, a = $(
      () => e.tabs.find((n) => n.active)
    );
    return (n, o) => (v(), g(l(Sb), null, {
      default: f(() => [
        D(l(ks), { class: "hidden gap-2 md:block" }, {
          default: f(() => [
            (v(!0), F(J, null, fe(n.tabs, (s) => (v(), g(l(Pb), {
              key: s.name,
              tab: s
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        D(l(ks), { class: "flex md:hidden" }, {
          default: f(() => [
            D(l(Sy), null, {
              default: f(() => [
                D(l(Ey), { "as-child": "" }, {
                  default: f(() => [
                    D(l(Ye), { variant: "secondary" }, {
                      default: f(() => {
                        var s;
                        return [
                          q(Q(((s = a.value) == null ? void 0 : s.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                D(l(Oy), { class: "w-full" }, {
                  default: f(() => [
                    (v(!0), F(J, null, fe(n.tabs, (s) => (v(), g(l(Ay), P({
                      key: s.name,
                      ref_for: !0
                    }, s), {
                      default: f(() => [
                        q(Q(s.name), 1)
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
        D(l(Mb), null, {
          default: f(() => [
            b(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Tb = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, T_ = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(nm), P({
      class: l(T)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: u }) => [
        D(l(zb), null, {
          default: f(() => [
            D(l(Kb)),
            D(l(Ub)),
            D(l(Hb))
          ]),
          _: 1
        }),
        re("div", Tb, [
          (v(!0), F(J, null, fe(d, (c) => (v(), g(l(Rb), {
            key: c.value.toString()
          }, {
            default: f(() => [
              D(l(Lb), null, {
                default: f(() => [
                  D(l(Bs), null, {
                    default: f(() => [
                      (v(!0), F(J, null, fe(u, (p) => (v(), g(l(Nb), { key: p }, {
                        default: f(() => [
                          q(Q(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              D(l(Fb), null, {
                default: f(() => [
                  (v(!0), F(J, null, fe(c.rows, (p, _) => (v(), g(l(Bs), {
                    key: `weekDate-${_}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), F(J, null, fe(p, (m) => (v(), g(l(Ib), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          D(l(Vb), {
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
}), Ib = /* @__PURE__ */ y({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(rm), P({
      class: l(T)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        e.class
      )
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vb = /* @__PURE__ */ y({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(vm), P({
      class: l(T)(
        l(jt)({ variant: "ghost" }),
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
        e.class
      )
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rb = /* @__PURE__ */ y({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(sm), P({
      class: l(T)("w-full border-collapse space-y-1", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fb = /* @__PURE__ */ y({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(pm), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lb = /* @__PURE__ */ y({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(cm), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bs = /* @__PURE__ */ y({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(fm), P({
      class: l(T)("mt-2 flex w-full", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Nb = /* @__PURE__ */ y({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(im), P({
      class: l(T)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zb = /* @__PURE__ */ y({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(om), P({
      class: l(T)("relative flex w-full items-center justify-between pt-1", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ub = /* @__PURE__ */ y({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(lm), P({
      class: l(T)("text-sm font-medium text-text", e.class)
    }, l(n)), {
      default: f(({ headingValue: r }) => [
        b(o.$slots, "default", { headingValue: r }, () => [
          q(Q(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hb = /* @__PURE__ */ y({
  __name: "RangeCalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(dm), P({
      class: l(T)(
        l(jt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          D(l(Ig), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kb = /* @__PURE__ */ y({
  __name: "RangeCalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = se(a);
    return (o, s) => (v(), g(l(um), P({
      class: l(T)(
        l(jt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          D(l(Tg), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wb = /* @__PURE__ */ y({
  __name: "Separator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    label: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Gm), P(a.value, {
      class: l(T)(
        "relative shrink-0 bg-border",
        e.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        e.class
      )
    }), {
      default: f(() => [
        e.label ? (v(), F("span", {
          key: 0,
          class: K(
            l(T)(
              "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background text-xs text-muted-foreground",
              e.orientation === "vertical" ? "w-[1px] px-1 py-2" : "h-[1px] px-2 py-1"
            )
          )
        }, Q(e.label), 3)) : Z("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), jb = /* @__PURE__ */ y({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (s, r) => (v(), g(l(Fr), H(W(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), I_ = /* @__PURE__ */ y({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Wa), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gb = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, side: i, ...d } = a;
      return d;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(fl), null, {
      default: f(() => [
        D(l(yl), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        D(l(gl), P({
          class: l(T)(l(Yb)({ side: r.side }), a.class)
        }, { ...l(s), ...r.$attrs }), {
          default: f(() => [
            b(r.$slots, "default"),
            D(l(Wa), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: f(() => [
                D(l(Kn), { class: "h-4 w-4 text-muted-foreground" })
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
}), V_ = /* @__PURE__ */ y({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Kr), P({
      class: l(T)("text-sm text-muted-foreground", e.class)
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), R_ = /* @__PURE__ */ y({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      class: K(l(T)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), F_ = /* @__PURE__ */ y({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      class: K(l(T)("flex flex-col gap-y-2 text-center sm:text-left", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), L_ = /* @__PURE__ */ y({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Hr), P({
      class: l(T)("text-lg font-semibold text-foreground", e.class)
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), N_ = /* @__PURE__ */ y({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Lr), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yb = $a(
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
), qb = "sidebar:state", Jb = 60 * 60 * 24 * 7, Qb = "16rem", Xb = "18rem", Zb = "3rem", e0 = "b", [jn, t0] = ne("Sidebar"), a0 = { class: "flex h-full w-full flex-col" }, n0 = ["data-state", "data-collapsible", "data-variant", "data-side"], o0 = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col bg-sidebar text-sidebar-foreground group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow"
}, z_ = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(t) {
    const e = t, { isMobile: a, state: n, openMobile: o, setOpenMobile: s } = jn();
    return (r, i) => r.collapsible === "none" ? (v(), F("div", P({
      key: 0,
      class: l(T)("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", e.class)
    }, r.$attrs), [
      b(r.$slots, "default")
    ], 16)) : l(a) ? (v(), g(l(jb), P({
      key: 1,
      open: l(o)
    }, r.$attrs, { "onUpdate:open": l(s) }), {
      default: f(() => [
        D(l(Gb), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: r.side,
          class: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: Et({
            "--sidebar-width": l(Xb)
          })
        }, {
          default: f(() => [
            re("div", a0, [
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
      re("div", {
        class: K(
          l(T)(
            "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            r.variant === "floating" || r.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )
        )
      }, null, 2),
      re("div", P({
        class: l(T)(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          r.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          r.variant === "floating" || r.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          e.class
        )
      }, r.$attrs), [
        re("div", o0, [
          b(r.$slots, "default", { state: l(n) })
        ])
      ], 16)
    ], 8, n0));
  }
}), U_ = /* @__PURE__ */ y({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      "data-sidebar": "content",
      class: K(
        l(T)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto bg-sidebar group-data-[collapsible=icon]:overflow-hidden",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), H_ = /* @__PURE__ */ y({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      "data-sidebar": "footer",
      class: K(l(T)("flex flex-col gap-2 p-2", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), K_ = /* @__PURE__ */ y({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      "data-sidebar": "group",
      class: K(l(T)("relative flex w-full min-w-0 flex-col p-2", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), W_ = /* @__PURE__ */ y({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), {
      "data-sidebar": "group-action",
      as: a.as,
      "as-child": a.asChild,
      class: K(
        l(T)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), j_ = /* @__PURE__ */ y({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      "data-sidebar": "group-content",
      class: K(l(T)("w-full text-sm", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), G_ = /* @__PURE__ */ y({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), {
      "data-sidebar": "group-label",
      as: a.as,
      "as-child": a.asChild,
      class: K(
        l(T)(
          "ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          e.class
        )
      )
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Y_ = /* @__PURE__ */ y({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      "data-sidebar": "header",
      class: K(l(T)("flex flex-col gap-2 p-2", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), q_ = /* @__PURE__ */ y({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(db, {
      "data-sidebar": "input",
      class: K(
        l(T)(
          "focus-visible:ring-sidebar-ring h-8 w-full bg-background shadow-none focus-visible:ring-2",
          e.class
        )
      )
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), J_ = /* @__PURE__ */ y({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("main", {
      class: K(
        l(T)(
          "relative flex min-h-svh flex-1 flex-col bg-background",
          "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Q_ = /* @__PURE__ */ y({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("ul", {
      "data-sidebar": "menu",
      class: K(l(T)("flex w-full min-w-0 flex-col gap-1", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), X_ = /* @__PURE__ */ y({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), {
      "data-sidebar": "menu-action",
      class: K(
        l(T)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          a.showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
          e.class
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
}), Z_ = /* @__PURE__ */ y({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      "data-sidebar": "menu-badge",
      class: K(
        l(T)(
          "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
          "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), l0 = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (s, r) => (v(), g(l(Nh), H(W(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), s0 = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(Kh), null, {
      default: f(() => [
        D(l(Hh), P({ ...l(s), ...r.$attrs }, {
          class: l(T)(
            "z-50 overflow-hidden rounded-md border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
}), ew = /* @__PURE__ */ y({
  __name: "TooltipProvider",
  props: {
    delayDuration: {},
    skipDelayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Di), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), r0 = /* @__PURE__ */ y({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(zh), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ds = /* @__PURE__ */ y({
  __name: "SidebarMenuButtonChild",
  props: {
    as: { default: "button" },
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: {},
    asChild: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), P({
      "data-sidebar": "menu-button",
      "data-size": a.size,
      "data-active": a.isActive,
      class: l(T)(l(u0)({ variant: a.variant, size: a.size }), e.class),
      as: a.as,
      "as-child": a.asChild
    }, a.$attrs), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), tw = /* @__PURE__ */ y({
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
  setup(t) {
    const e = t, { isMobile: a, state: n } = jn(), o = $(() => {
      const { tooltip: s, ...r } = e;
      return r;
    });
    return (s, r) => s.tooltip ? (v(), g(l(l0), { key: 1 }, {
      default: f(() => [
        D(l(r0), { "as-child": "" }, {
          default: f(() => [
            D(Ds, H(W({ ...o.value, ...s.$attrs })), {
              default: f(() => [
                b(s.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        D(l(s0), {
          side: "right",
          align: "center",
          hidden: l(n) !== "collapsed" || l(a)
        }, {
          default: f(() => [
            typeof s.tooltip == "string" ? (v(), F(J, { key: 0 }, [
              q(Q(s.tooltip), 1)
            ], 64)) : (v(), g(Ae(s.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (v(), g(Ds, H(P({ key: 0 }, { ...o.value, ...s.$attrs })), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), aw = /* @__PURE__ */ y({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("li", {
      "data-sidebar": "menu-item",
      class: K(l(T)("group/menu-item relative", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ss = /* @__PURE__ */ y({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("div", {
      class: K(l(T)("animate-pulse rounded-md bg-skeleton", e.class))
    }, null, 2));
  }
}), nw = /* @__PURE__ */ y({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (n, o) => (v(), F("div", {
      "data-sidebar": "menu-skeleton",
      class: K(l(T)("flex h-8 items-center gap-2 rounded-md px-2", e.class))
    }, [
      n.showIcon ? (v(), g(Ss, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : Z("", !0),
      D(Ss, {
        class: "h-4 max-w-[--skeleton-width] flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: Et({ "--skeleton-width": a.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), ow = /* @__PURE__ */ y({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), F("ul", {
      "data-sidebar": "menu-badge",
      class: K(
        l(T)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), lw = /* @__PURE__ */ y({
  __name: "SidebarMenuSubButton",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    size: { default: "md" },
    isActive: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), {
      "data-sidebar": "menu-sub-button",
      as: a.as,
      "as-child": a.asChild,
      "data-size": a.size,
      "data-active": a.isActive,
      class: K(
        l(T)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          a.size === "sm" && "text-xs",
          a.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), i0 = {};
function d0(t, e) {
  return v(), F("li", null, [
    b(t.$slots, "default")
  ]);
}
const sw = /* @__PURE__ */ qa(i0, [["render", d0]]), rw = /* @__PURE__ */ y({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = qi("(max-width: 768px)"), s = A(!1), r = Ml(a, "open", n, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function i(p) {
      r.value = p, document.cookie = `${qb}=${r.value}; path=/; max-age=${Jb}`;
    }
    function d(p) {
      s.value = p;
    }
    function u() {
      return o.value ? d(!s.value) : i(!r.value);
    }
    Oo("keydown", (p) => {
      p.key === e0 && (p.metaKey || p.ctrlKey) && (p.preventDefault(), u());
    });
    const c = $(() => r.value ? "expanded" : "collapsed");
    return t0({
      state: c,
      open: r,
      setOpen: i,
      isMobile: o,
      openMobile: s,
      setOpenMobile: d,
      toggleSidebar: u
    }), (p, _) => (v(), g(l(Di), { "delay-duration": 0 }, {
      default: f(() => [
        re("div", P({
          style: {
            "--sidebar-width": l(Qb),
            "--sidebar-width-icon": l(Zb)
          },
          class: l(T)(
            "group/sidebar-wrapper flex min-h-svh w-auto has-[[data-variant=inset]]:bg-sidebar",
            a.class
          )
        }, p.$attrs), [
          b(p.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), iw = /* @__PURE__ */ y({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(t) {
    const e = t, { toggleSidebar: a } = jn();
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
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          e.class
        )
      ),
      onClick: o[0] || (o[0] = //@ts-ignore
      (...s) => l(a) && l(a)(...s))
    }, [
      b(n.$slots, "default")
    ], 2));
  }
}), dw = /* @__PURE__ */ y({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(Wb, {
      "data-sidebar": "separator",
      class: K(l(T)("bg-sidebar-border mx-2 w-auto", e.class))
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), uw = /* @__PURE__ */ y({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(t) {
    const e = t, { toggleSidebar: a } = jn();
    return (n, o) => (v(), g(Ye, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: K(l(T)("h-7 w-7", e.class)),
      onClick: l(a)
    }, {
      default: f(() => [
        D(l(Vg)),
        o[0] || (o[0] = re("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), u0 = $a(
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
), cw = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(sh), P({
      class: l(T)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        a.class
      )
    }, l(s)), {
      default: f(() => [
        D(l(dh), { class: "relative h-2 w-full grow overflow-hidden rounded-full bg-accent data-[orientation=vertical]:w-2" }, {
          default: f(() => [
            D(l(uh), { class: "absolute h-full bg-primary data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (v(!0), F(J, null, fe(r.modelValue, (d, u) => (v(), g(l(ih), {
          key: u,
          class: "block size-5 rounded-full border-2 border-primary bg-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), c0 = 5, p0 = 5e6, pt = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let co = 0;
function f0() {
  return co = (co + 1) % Number.MAX_VALUE, co.toString();
}
const po = /* @__PURE__ */ new Map();
function Ps(t) {
  if (po.has(t)) return;
  const e = setTimeout(() => {
    po.delete(t), Aa({
      type: pt.REMOVE_TOAST,
      toastId: t
    });
  }, p0);
  po.set(t, e);
}
const ze = A({
  toasts: []
});
function Aa(t) {
  switch (t.type) {
    case pt.ADD_TOAST:
      ze.value.toasts = [t.toast, ...ze.value.toasts].slice(0, c0);
      break;
    case pt.UPDATE_TOAST:
      ze.value.toasts = ze.value.toasts.map(
        (e) => e.id === t.toast.id ? { ...e, ...t.toast } : e
      );
      break;
    case pt.DISMISS_TOAST: {
      const { toastId: e } = t;
      e ? Ps(e) : ze.value.toasts.forEach((a) => {
        Ps(a.id);
      }), ze.value.toasts = ze.value.toasts.map(
        (a) => a.id === e || e === void 0 ? {
          ...a,
          open: !1
        } : a
      );
      break;
    }
    case pt.REMOVE_TOAST:
      t.toastId === void 0 ? ze.value.toasts = [] : ze.value.toasts = ze.value.toasts.filter((e) => e.id !== t.toastId);
      break;
  }
}
function v0() {
  return {
    toasts: $(() => ze.value.toasts),
    toast: m0,
    dismiss: (t) => Aa({ type: pt.DISMISS_TOAST, toastId: t })
  };
}
function m0(t) {
  const e = f0(), a = (o) => Aa({
    type: pt.UPDATE_TOAST,
    toast: { ...o, id: e }
  }), n = () => Aa({ type: pt.DISMISS_TOAST, toastId: e });
  return Aa({
    type: pt.ADD_TOAST,
    toast: {
      ...t,
      id: e,
      open: !0,
      onOpenChange: (o) => {
        o || n();
      }
    }
  }), {
    id: e,
    dismiss: n,
    update: a
  };
}
const h0 = { class: "flex gap-3" }, g0 = { class: "grid gap-1" }, pw = /* @__PURE__ */ y({
  __name: "Toaster",
  setup(t) {
    const { toasts: e } = v0();
    return (a, n) => (v(), g(l(x0), null, {
      default: f(() => [
        (v(!0), F(J, null, fe(l(e), (o) => (v(), g(l(y0), P({
          key: o.id,
          ref_for: !0
        }, o, { class: "my-1" }), {
          default: f(() => [
            re("div", h0, [
              (v(), g(Ae(o.icon), {
                class: K(l(T)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              re("div", g0, [
                o.title ? (v(), g(l(w0), { key: 0 }, {
                  default: f(() => [
                    q(Q(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : Z("", !0),
                o.description ? (v(), F(J, { key: 1 }, [
                  _d(o.description) ? (v(), g(l(Es), { key: 0 }, {
                    default: f(() => [
                      (v(), g(Ae(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (v(), g(l(Es), { key: 1 }, {
                    default: f(() => [
                      q(Q(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : Z("", !0),
                D(l(_0))
              ]),
              (v(), g(Ae(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        D(l(b0))
      ]),
      _: 1
    }));
  }
}), y0 = /* @__PURE__ */ y({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ee(o, n);
    return (r, i) => (v(), g(l(Mh), P(l(s), {
      class: l(T)(l($0)({ variant: r.variant }), a.class),
      "onUpdate:open": r.onOpenChange
    }), {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), b0 = /* @__PURE__ */ y({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Ih), P(a.value, {
      class: l(T)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e.class
      )
    }), null, 16, ["class"]));
  }
}), fw = /* @__PURE__ */ y({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Th), H(W(a.value)), {
      default: f(() => [
        D(l(Ye), {
          variant: n.variant,
          class: K(e.class)
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
}), _0 = /* @__PURE__ */ y({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(ki), P(a.value, {
      class: l(T)(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        e.class
      )
    }), {
      default: f(() => [
        D(l(Kn), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), w0 = /* @__PURE__ */ y({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Vh), P(a.value, {
      class: l(T)("text-sm font-semibold", e.class)
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Es = /* @__PURE__ */ y({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), g(l(Rh), P({
      class: l(T)("text-sm opacity-90", e.class)
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), x0 = /* @__PURE__ */ y({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l($h), H(W(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $0 = $a(
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
  O0 as Accordion,
  A0 as AccordionContent,
  M0 as AccordionItem,
  T0 as AccordionTrigger,
  I0 as Badge,
  At as Base,
  Py as BaseDropdownMenuItem,
  V0 as Breadcrumb,
  R0 as BreadcrumbEllipsis,
  F0 as BreadcrumbItem,
  L0 as BreadcrumbLink,
  N0 as BreadcrumbList,
  z0 as BreadcrumbPage,
  U0 as BreadcrumbSeparator,
  Ye as Button,
  q0 as Calendar,
  Vi as CalendarCell,
  Ri as CalendarCellTrigger,
  Fi as CalendarGrid,
  Li as CalendarGridBody,
  Ni as CalendarGridHead,
  Bn as CalendarGridRow,
  zi as CalendarHeadCell,
  Ui as CalendarHeader,
  Hi as CalendarHeading,
  Hg as CalendarNextButton,
  Kg as CalendarPrevButton,
  my as CalendarWithSelect,
  H0 as Card,
  G0 as CardContent,
  j0 as CardDescription,
  Y0 as CardFooter,
  K0 as CardHeader,
  W0 as CardTitle,
  Vy as CharacterCount,
  y_ as Checkbox,
  k_ as CollapsibleTableRow,
  b_ as Combobox,
  Xi as Command,
  a_ as CommandDialog,
  wy as CommandEmpty,
  xy as CommandGroup,
  Cy as CommandInput,
  ky as CommandItem,
  Dy as CommandList,
  n_ as CommandSeparator,
  o_ as CommandShortcut,
  __ as DatePicker,
  Ny as Description,
  Zi as Dialog,
  e_ as DialogClose,
  ed as DialogContent,
  by as DialogDescription,
  _y as DialogFooter,
  gy as DialogHeader,
  t_ as DialogScrollContent,
  yy as DialogTitle,
  hy as DialogTrigger,
  Sy as DropdownMenu,
  i_ as DropdownMenuCheckboxItem,
  Oy as DropdownMenuContent,
  l_ as DropdownMenuGroup,
  r_ as DropdownMenuItem,
  p_ as DropdownMenuLabel,
  Ay as DropdownMenuLink,
  Cv as DropdownMenuPortal,
  s_ as DropdownMenuRadioGroup,
  d_ as DropdownMenuRadioItem,
  c_ as DropdownMenuSeparator,
  u_ as DropdownMenuShortcut,
  f_ as DropdownMenuSub,
  m_ as DropdownMenuSubContent,
  v_ as DropdownMenuSubTrigger,
  Ey as DropdownMenuTrigger,
  Uy as Error,
  h_ as Form,
  qy as FormElement,
  g_ as FormGrid,
  w_ as ImageUpload,
  db as Input,
  td as Label,
  S_ as LumuixDatatable,
  P_ as LumuixModal,
  C_ as LumuixModeToggle,
  E_ as LumuixPagination,
  M_ as LumuixTabs,
  Rv as Pagination,
  fb as PaginationDetails,
  vb as PaginationEllipsis,
  mb as PaginationFirst,
  hb as PaginationLast,
  Hv as PaginationList,
  E0 as PaginationListItem,
  gb as PaginationNext,
  yb as PaginationPrev,
  ad as Popover,
  od as PopoverContent,
  nd as PopoverTrigger,
  T_ as RangeCalendar,
  Ib as RangeCalendarCell,
  Vb as RangeCalendarCellTrigger,
  Rb as RangeCalendarGrid,
  Fb as RangeCalendarGridBody,
  Lb as RangeCalendarGridHead,
  Bs as RangeCalendarGridRow,
  Nb as RangeCalendarHeadCell,
  zb as RangeCalendarHeader,
  Ub as RangeCalendarHeading,
  Hb as RangeCalendarNextButton,
  Kb as RangeCalendarPrevButton,
  x_ as Select,
  Io as SelectContent,
  J0 as SelectGroup,
  Vo as SelectItem,
  Q0 as SelectItemText,
  X0 as SelectLabel,
  Ao as SelectRoot,
  fy as SelectScrollDownButton,
  py as SelectScrollUpButton,
  Z0 as SelectSeparator,
  To as SelectTrigger,
  Mo as SelectValue,
  Wb as Separator,
  jb as Sheet,
  I_ as SheetClose,
  Gb as SheetContent,
  V_ as SheetDescription,
  R_ as SheetFooter,
  F_ as SheetHeader,
  L_ as SheetTitle,
  N_ as SheetTrigger,
  z_ as Sidebar,
  U_ as SidebarContent,
  H_ as SidebarFooter,
  K_ as SidebarGroup,
  W_ as SidebarGroupAction,
  j_ as SidebarGroupContent,
  G_ as SidebarGroupLabel,
  Y_ as SidebarHeader,
  q_ as SidebarInput,
  J_ as SidebarInset,
  Q_ as SidebarMenu,
  X_ as SidebarMenuAction,
  Z_ as SidebarMenuBadge,
  tw as SidebarMenuButton,
  aw as SidebarMenuItem,
  nw as SidebarMenuSkeleton,
  ow as SidebarMenuSub,
  lw as SidebarMenuSubButton,
  sw as SidebarMenuSubItem,
  rw as SidebarProvider,
  iw as SidebarRail,
  dw as SidebarSeparator,
  uw as SidebarTrigger,
  Ss as Skeleton,
  cw as Slider,
  Mb as TabBaseContent,
  _b as Table,
  wb as TableBody,
  Cb as TableCaption,
  Dn as TableCell,
  D_ as TableEmpty,
  B_ as TableFooter,
  xb as TableHead,
  $b as TableHeader,
  Va as TableRow,
  Ro as TableRowAction,
  A_ as TabsContent,
  Pb as TabsItem,
  ks as TabsList,
  Sb as TabsRoot,
  O_ as TabsTrigger,
  $_ as TextArea,
  y0 as Toast,
  fw as ToastAction,
  _0 as ToastClose,
  Es as ToastDescription,
  x0 as ToastProvider,
  w0 as ToastTitle,
  b0 as ToastViewport,
  pw as Toaster,
  cb as Toggle,
  l0 as Tooltip,
  s0 as TooltipContent,
  ew as TooltipProvider,
  r0 as TooltipTrigger,
  Ng as badgeVariants,
  jt as buttonVariants,
  k0 as preset,
  Yb as sheetVariants,
  u0 as sidebarMenuButtonVariants,
  zg as spinnerSize,
  m0 as toast,
  $0 as toastVariants,
  jn as useSidebar,
  v0 as useToast
};
