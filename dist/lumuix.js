import * as Ml from "vue";
import { computed as $, ref as A, shallowRef as Ro, watch as ee, getCurrentScope as Fo, onScopeDispose as Lo, shallowReadonly as jt, unref as l, defineComponent as y, toRefs as ve, createBlock as g, openBlock as v, withCtx as f, renderSlot as b, getCurrentInstance as tt, toRef as Ps, camelize as Es, withKeys as We, h as Ze, onMounted as ue, createElementVNode as re, toDisplayString as Q, normalizeProps as W, guardReactiveProps as H, createTextVNode as q, mergeProps as P, withModifiers as Ce, createCommentVNode as Z, createElementBlock as R, Fragment as J, renderList as ce, resolveDynamicComponent as Oe, createVNode as B, useSlots as Os, onBeforeMount as ld, Teleport as Sn, watchEffect as be, onBeforeUnmount as No, nextTick as le, withDirectives as da, vShow as zo, watchSyncEffect as sd, isRef as ua, inject as As, provide as Ms, toHandlers as rd, normalizeStyle as Pt, toHandlerKey as id, Comment as Ts, cloneVNode as dd, vModelSelect as ud, onBeforeUpdate as cd, onUpdated as pd, markRaw as fd, onUnmounted as Et, readonly as Ra, toRaw as vd, reactive as Is, customRef as Vs, mergeDefaults as Rs, watchPostEffect as md, effectScope as Fs, normalizeClass as K, mergeModels as po, useModel as Ls, vModelDynamic as hd, vModelText as gd, isVNode as yd } from "vue";
function bd(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ns = {}, zs = {};
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
})(zs);
(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const e = /* @__PURE__ */ a(zs);
  function a(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const n = e.default;
})(Ns);
let Gn = Ns;
var _d = (Gn.__esModule ? Gn : { default: Gn }).default;
const wd = _d;
function Tl(t) {
  return Object.fromEntries(
    Object.entries(t).filter(([e]) => e !== "DEFAULT")
  );
}
var xd = wd(
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
      { values: Tl(a("animationDuration")) }
    ), e(
      { delay: (n) => ({ animationDelay: n }) },
      { values: a("animationDelay") }
    ), e(
      { ease: (n) => ({ animationTimingFunction: n }) },
      { values: Tl(a("animationTimingFunction")) }
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
const $d = /* @__PURE__ */ bd(xd), $0 = {
  safelist: ["dark"],
  darkMode: ["class"],
  plugins: [$d],
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
function Jt(t, e) {
  return t - e * Math.floor(t / e);
}
const Us = 1721426;
function Tt(t, e, a, n) {
  e = Fa(t, e);
  let o = e - 1, s = -2;
  return a <= 2 ? s = 0 : Ct(e) && (s = -1), Us - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + s + n);
}
function Ct(t) {
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
const Cd = {
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
  fromJulianDay(e) {
    let a = e, n = a - Us, o = Math.floor(n / 146097), s = Jt(n, 146097), r = Math.floor(s / 36524), i = Jt(s, 36524), d = Math.floor(i / 1461), u = Jt(i, 1461), c = Math.floor(u / 365), p = o * 400 + r * 100 + d * 4 + c + (r !== 4 && c !== 4 ? 1 : 0), [_, m] = Pn(p), w = a - Tt(_, m, 1, 1), h = 2;
    a < Tt(_, m, 3, 1) ? h = 0 : Ct(m) && (h = 1);
    let x = Math.floor(((w + h) * 12 + 373) / 367), C = a - Tt(_, m, x, 1) + 1;
    return new _e(_, m, x, C);
  }
  toJulianDay(e) {
    return Tt(e.era, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    return Cd[Ct(e.year) ? "leapyear" : "standard"][e.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(e) {
    return 12;
  }
  getDaysInYear(e) {
    return Ct(e.year) ? 366 : 365;
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
const kd = {
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
  return e = Se(e, t.calendar), t.era === e.era && t.year === e.year && t.month === e.month && t.day === e.day;
}
function Ws(t, e) {
  return e = Se(e, t.calendar), t = Vt(t), e = Vt(e), t.era === e.era && t.year === e.year && t.month === e.month;
}
function Qe(t, e) {
  return t.calendar.identifier === e.calendar.identifier && t.era === e.era && t.year === e.year && t.month === e.month && t.day === e.day;
}
function Il(t, e) {
  return t = Vt(t), e = Vt(e), t.calendar.identifier === e.calendar.identifier && t.era === e.era && t.year === e.year && t.month === e.month;
}
function Ks(t, e) {
  return Be(t, vn(e));
}
function Hs(t, e, a) {
  let n = t.calendar.toJulianDay(t), o = Pd(e), s = Math.ceil(n + 1 - o) % 7;
  return s < 0 && (s += 7), s;
}
function Bd(t) {
  return dt(Date.now(), t);
}
function vn(t) {
  return Ad(Bd(t));
}
function js(t, e) {
  return t.calendar.toJulianDay(t) - e.calendar.toJulianDay(e);
}
function Dd(t, e) {
  return Vl(t) - Vl(e);
}
function Vl(t) {
  return t.hour * 36e5 + t.minute * 6e4 + t.second * 1e3 + t.millisecond;
}
let Yn = null;
function ft() {
  return Yn == null && (Yn = new Intl.DateTimeFormat().resolvedOptions().timeZone), Yn;
}
function Vt(t) {
  return t.subtract({
    days: t.day - 1
  });
}
function Rl(t) {
  return t.add({
    days: t.calendar.getDaysInMonth(t) - t.day
  });
}
const Fl = /* @__PURE__ */ new Map();
function Sd(t) {
  if (Intl.Locale) {
    let a = Fl.get(t);
    return a || (a = new Intl.Locale(t).maximize().region, a && Fl.set(t, a)), a;
  }
  let e = t.split("-")[1];
  return e === "u" ? void 0 : e;
}
function Pd(t) {
  let e = Sd(t);
  return e && kd[e] || 0;
}
function ta(t) {
  t = Se(t, new Ke());
  let e = Fa(t.era, t.year);
  return Gs(e, t.month, t.day, t.hour, t.minute, t.second, t.millisecond);
}
function Gs(t, e, a, n, o, s, r) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, s, r), i.setUTCFullYear(t, e - 1, a), i.getTime();
}
function fo(t, e) {
  if (e === "UTC") return 0;
  if (t > 0 && e === ft()) return new Date(t).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: s, minute: r, second: i } = Ys(t, e);
  return Gs(a, n, o, s, r, i, 0) - Math.floor(t / 1e3) * 1e3;
}
const Ll = /* @__PURE__ */ new Map();
function Ys(t, e) {
  let a = Ll.get(e);
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
  }), Ll.set(e, a));
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
const Nl = 864e5;
function Ed(t, e, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((s) => Od(t, e, s));
}
function Od(t, e, a) {
  let n = Ys(a, e);
  return t.year === n.year && t.month === n.month && t.day === n.day && t.hour === n.hour && t.minute === n.minute && t.second === n.second;
}
function it(t, e, a = "compatible") {
  let n = aa(t);
  if (e === "UTC") return ta(n);
  if (e === ft() && a === "compatible") {
    n = Se(n, new Ke());
    let d = /* @__PURE__ */ new Date(), u = Fa(n.era, n.year);
    return d.setFullYear(u, n.month - 1, n.day), d.setHours(n.hour, n.minute, n.second, n.millisecond), d.getTime();
  }
  let o = ta(n), s = fo(o - Nl, e), r = fo(o + Nl, e), i = Ed(n, e, o - s, o - r);
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
function qs(t, e, a = "compatible") {
  return new Date(it(t, e, a));
}
function dt(t, e) {
  let a = fo(t, e), n = new Date(t + a), o = n.getUTCFullYear(), s = n.getUTCMonth() + 1, r = n.getUTCDate(), i = n.getUTCHours(), d = n.getUTCMinutes(), u = n.getUTCSeconds(), c = n.getUTCMilliseconds();
  return new oa(o < 1 ? "BC" : "AD", o < 1 ? -o + 1 : o, s, r, e, a, i, d, u, c);
}
function Ad(t) {
  return new _e(t.calendar, t.era, t.year, t.month, t.day);
}
function aa(t, e) {
  let a = 0, n = 0, o = 0, s = 0;
  if ("timeZone" in t) ({ hour: a, minute: n, second: o, millisecond: s } = t);
  else if ("hour" in t && !e) return t;
  return e && ({ hour: a, minute: n, second: o, millisecond: s } = e), new na(t.calendar, t.era, t.year, t.month, t.day, a, n, o, s);
}
function Se(t, e) {
  if (t.calendar.identifier === e.identifier) return t;
  let a = e.fromJulianDay(t.calendar.toJulianDay(t)), n = t.copy();
  return n.calendar = e, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, Rt(n), n;
}
function Md(t, e, a) {
  if (t instanceof oa)
    return t.timeZone === e ? t : Id(t, e);
  let n = it(t, e, a);
  return dt(n, e);
}
function Td(t) {
  let e = ta(t) - t.offset;
  return new Date(e);
}
function Id(t, e) {
  let a = ta(t) - t.offset;
  return Se(dt(a, e), t.calendar);
}
const ka = 36e5;
function En(t, e) {
  let a = t.copy(), n = "hour" in a ? Ld(a, e) : 0;
  vo(a, e.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, t), a.month += e.months || 0, mo(a), Js(a), a.day += (e.weeks || 0) * 7, a.day += e.days || 0, a.day += n, Vd(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
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
function vo(t, e) {
  var a, n;
  !((a = (n = t.calendar).isInverseEra) === null || a === void 0) && a.call(n, t) && (e = -e), t.year += e;
}
function mo(t) {
  for (; t.month < 1; )
    vo(t, -1), t.month += t.calendar.getMonthsInYear(t);
  let e = 0;
  for (; t.month > (e = t.calendar.getMonthsInYear(t)); )
    t.month -= e, vo(t, 1);
}
function Vd(t) {
  for (; t.day < 1; )
    t.month--, mo(t), t.day += t.calendar.getDaysInMonth(t);
  for (; t.day > t.calendar.getDaysInMonth(t); )
    t.day -= t.calendar.getDaysInMonth(t), t.month++, mo(t);
}
function Js(t) {
  t.month = Math.max(1, Math.min(t.calendar.getMonthsInYear(t), t.month)), t.day = Math.max(1, Math.min(t.calendar.getDaysInMonth(t), t.day));
}
function Rt(t) {
  t.calendar.constrainDate && t.calendar.constrainDate(t), t.year = Math.max(1, Math.min(t.calendar.getYearsInEra(t), t.year)), Js(t);
}
function Qs(t) {
  let e = {};
  for (let a in t) typeof t[a] == "number" && (e[a] = -t[a]);
  return e;
}
function Zs(t, e) {
  return En(t, Qs(e));
}
function Uo(t, e) {
  let a = t.copy();
  return e.era != null && (a.era = e.era), e.year != null && (a.year = e.year), e.month != null && (a.month = e.month), e.day != null && (a.day = e.day), Rt(a), a;
}
function mn(t, e) {
  let a = t.copy();
  return e.hour != null && (a.hour = e.hour), e.minute != null && (a.minute = e.minute), e.second != null && (a.second = e.second), e.millisecond != null && (a.millisecond = e.millisecond), Fd(a), a;
}
function Rd(t) {
  t.second += Math.floor(t.millisecond / 1e3), t.millisecond = Ja(t.millisecond, 1e3), t.minute += Math.floor(t.second / 60), t.second = Ja(t.second, 60), t.hour += Math.floor(t.minute / 60), t.minute = Ja(t.minute, 60);
  let e = Math.floor(t.hour / 24);
  return t.hour = Ja(t.hour, 24), e;
}
function Fd(t) {
  t.millisecond = Math.max(0, Math.min(t.millisecond, 1e3)), t.second = Math.max(0, Math.min(t.second, 59)), t.minute = Math.max(0, Math.min(t.minute, 59)), t.hour = Math.max(0, Math.min(t.hour, 23));
}
function Ja(t, e) {
  let a = t % e;
  return a < 0 && (a += e), a;
}
function Ld(t, e) {
  return t.hour += e.hours || 0, t.minute += e.minutes || 0, t.second += e.seconds || 0, t.millisecond += e.milliseconds || 0, Rd(t);
}
function Wo(t, e, a, n) {
  let o = t.copy();
  switch (e) {
    case "era": {
      let i = t.calendar.getEras(), d = i.indexOf(t.era);
      if (d < 0) throw new Error("Invalid era: " + t.era);
      d = ut(d, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[d], Rt(o);
      break;
    }
    case "year":
      var s, r;
      !((s = (r = o.calendar).isInverseEra) === null || s === void 0) && s.call(r, o) && (a = -a), o.year = ut(t.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, t);
      break;
    case "month":
      o.month = ut(t.month, a, 1, t.calendar.getMonthsInYear(t), n == null ? void 0 : n.round);
      break;
    case "day":
      o.day = ut(t.day, a, 1, t.calendar.getDaysInMonth(t), n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + e);
  }
  return t.calendar.balanceDate && t.calendar.balanceDate(o), Rt(o), o;
}
function Xs(t, e, a, n) {
  let o = t.copy();
  switch (e) {
    case "hour": {
      let s = t.hour, r = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let d = s >= 12;
        r = d ? 12 : 0, i = d ? 23 : 11;
      }
      o.hour = ut(s, a, r, i, n == null ? void 0 : n.round);
      break;
    }
    case "minute":
      o.minute = ut(t.minute, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "second":
      o.second = ut(t.second, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "millisecond":
      o.millisecond = ut(t.millisecond, a, 0, 999, n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + e);
  }
  return o;
}
function ut(t, e, a, n, o = !1) {
  if (o) {
    t += Math.sign(e), t < a && (t = n);
    let s = Math.abs(e);
    e > 0 ? t = Math.ceil(t / s) * s : t = Math.floor(t / s) * s, t > n && (t = a);
  } else
    t += e, t < a ? t = n - (a - t - 1) : t > n && (t = a + (t - n - 1));
  return t;
}
function er(t, e) {
  let a;
  if (e.years != null && e.years !== 0 || e.months != null && e.months !== 0 || e.weeks != null && e.weeks !== 0 || e.days != null && e.days !== 0) {
    let o = En(aa(t), {
      years: e.years,
      months: e.months,
      weeks: e.weeks,
      days: e.days
    });
    a = it(o, t.timeZone);
  } else
    a = ta(t) - t.offset;
  a += e.milliseconds || 0, a += (e.seconds || 0) * 1e3, a += (e.minutes || 0) * 6e4, a += (e.hours || 0) * 36e5;
  let n = dt(a, t.timeZone);
  return Se(n, t.calendar);
}
function Nd(t, e) {
  return er(t, Qs(e));
}
function zd(t, e, a, n) {
  switch (e) {
    case "hour": {
      let o = 0, s = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let w = t.hour >= 12;
        o = w ? 12 : 0, s = w ? 23 : 11;
      }
      let r = aa(t), i = Se(mn(r, {
        hour: o
      }), new Ke()), d = [
        it(i, t.timeZone, "earlier"),
        it(i, t.timeZone, "later")
      ].filter((w) => dt(w, t.timeZone).day === i.day)[0], u = Se(mn(r, {
        hour: s
      }), new Ke()), c = [
        it(u, t.timeZone, "earlier"),
        it(u, t.timeZone, "later")
      ].filter((w) => dt(w, t.timeZone).day === u.day).pop(), p = ta(t) - t.offset, _ = Math.floor(p / ka), m = p % ka;
      return p = ut(_, a, Math.floor(d / ka), Math.floor(c / ka), n == null ? void 0 : n.round) * ka + m, Se(dt(p, t.timeZone), t.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return Xs(t, e, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = Wo(aa(t), e, a, n), s = it(o, t.timeZone);
      return Se(dt(s, t.timeZone), t.calendar);
    }
    default:
      throw new Error("Unsupported field " + e);
  }
}
function Ud(t, e, a) {
  let n = aa(t), o = mn(Uo(n, e), e);
  if (o.compare(n) === 0) return t;
  let s = it(o, t.timeZone, a);
  return Se(dt(s, t.timeZone), t.calendar);
}
function Wd(t) {
  return `${String(t.hour).padStart(2, "0")}:${String(t.minute).padStart(2, "0")}:${String(t.second).padStart(2, "0")}${t.millisecond ? String(t.millisecond / 1e3).slice(1) : ""}`;
}
function tr(t) {
  let e = Se(t, new Ke()), a;
  return e.era === "BC" ? a = e.year === 1 ? "0000" : "-" + String(Math.abs(1 - e.year)).padStart(6, "00") : a = String(e.year).padStart(4, "0"), `${a}-${String(e.month).padStart(2, "0")}-${String(e.day).padStart(2, "0")}`;
}
function ar(t) {
  return `${tr(t)}T${Wd(t)}`;
}
function Kd(t) {
  let e = Math.sign(t) < 0 ? "-" : "+";
  t = Math.abs(t);
  let a = Math.floor(t / 36e5), n = t % 36e5 / 6e4;
  return `${e}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function Hd(t) {
  return `${ar(t)}${Kd(t.offset)}[${t.timeZone}]`;
}
function jd(t, e) {
  if (e.has(t))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Ko(t, e, a) {
  jd(t, e), e.set(t, a);
}
function Ho(t) {
  let e = typeof t[0] == "object" ? t.shift() : new Ke(), a;
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
var Gd = /* @__PURE__ */ new WeakMap();
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
    return Zs(this, e);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e) {
    return Uo(this, e);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    return Wo(this, e, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(e) {
    return qs(this, e);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return tr(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return js(this, e);
  }
  constructor(...e) {
    Ko(this, Gd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = Ho(e);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, Rt(this);
  }
}
var Yd = /* @__PURE__ */ new WeakMap();
class na {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new na(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new na(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(e) {
    return En(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return Zs(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e) {
    return Uo(mn(this, e), e);
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
        return Wo(this, e, a, n);
      default:
        return Xs(this, e, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(e, a) {
    return qs(this, e, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return ar(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    let a = js(this, e);
    return a === 0 ? Dd(this, aa(e)) : a;
  }
  constructor(...e) {
    Ko(this, Yd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = Ho(e);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Rt(this);
  }
}
var qd = /* @__PURE__ */ new WeakMap();
class oa {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new oa(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new oa(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(e) {
    return er(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return Nd(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e, a) {
    return Ud(this, e, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    return zd(this, e, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return Td(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return Hd(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return this.toDate().getTime() - Md(e, this.timeZone).toDate().getTime();
  }
  constructor(...e) {
    Ko(this, qd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = Ho(e), i = e.shift(), d = e.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.timeZone = i, this.offset = d, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Rt(this);
  }
}
const Qt = [
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
], Jd = [
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
], $t = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function zl(t) {
  const e = Qt.findIndex(([a, n, o]) => t.year < a || t.year === a && t.month < n || t.year === a && t.month === n && t.day < o);
  return e === -1 ? Qt.length - 1 : e === 0 ? 0 : e - 1;
}
function qn(t) {
  let e = dn[$t.indexOf(t.era)];
  if (!e) throw new Error("Unknown era: " + t.era);
  return new _e(t.year + e, t.month, t.day);
}
class Qd extends Ke {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = zl(a);
    return new _e(this, $t[n], a.year - dn[n], a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(qn(e));
  }
  balanceDate(e) {
    let a = qn(e), n = zl(a);
    $t[n] !== e.era && (e.era = $t[n], e.year = a.year - dn[n]), this.constrainDate(e);
  }
  constrainDate(e) {
    let a = $t.indexOf(e.era), n = Jd[a];
    if (n != null) {
      let [o, s, r] = n, i = o - dn[a];
      e.year = Math.max(1, Math.min(i, e.year)), e.year === i && (e.month = Math.min(s, e.month), e.month === s && (e.day = Math.min(r, e.day)));
    }
    if (e.year === 1 && a >= 0) {
      let [, o, s] = Qt[a];
      e.month = Math.max(o, e.month), e.month === o && (e.day = Math.max(s, e.day));
    }
  }
  getEras() {
    return $t;
  }
  getYearsInEra(e) {
    let a = $t.indexOf(e.era), n = Qt[a], o = Qt[a + 1];
    if (o == null)
      return 9999 - n[0] + 1;
    let s = o[0] - n[0];
    return (e.month < o[1] || e.month === o[1] && e.day < o[2]) && s++, s;
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(qn(e));
  }
  getMinimumMonthInYear(e) {
    let a = Ul(e);
    return a ? a[1] : 1;
  }
  getMinimumDayInMonth(e) {
    let a = Ul(e);
    return a && e.month === a[1] ? a[2] : 1;
  }
  constructor(...e) {
    super(...e), this.identifier = "japanese";
  }
}
function Ul(t) {
  if (t.year === 1) {
    let e = $t.indexOf(t.era);
    return Qt[e];
  }
}
const nr = -543;
class Zd extends Ke {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = Fa(a.era, a.year);
    return new _e(this, n - nr, a.month, a.day);
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
  let [e, a] = Pn(t.year + nr);
  return new _e(e, a, t.month, t.day);
}
const hn = 1911;
function or(t) {
  return t.era === "minguo" ? t.year + hn : 1 - t.year + hn;
}
function Kl(t) {
  let e = t - hn;
  return e > 0 ? [
    "minguo",
    e
  ] : [
    "before_minguo",
    1 - e
  ];
}
class Xd extends Ke {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = Fa(a.era, a.year), [o, s] = Kl(n);
    return new _e(this, o, s, a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(Hl(e));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(e) {
    let [a, n] = Kl(or(e));
    e.era = a, e.year = n;
  }
  isInverseEra(e) {
    return e.era === "before_minguo";
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(Hl(e));
  }
  getYearsInEra(e) {
    return e.era === "before_minguo" ? 9999 : 9999 - hn;
  }
  constructor(...e) {
    super(...e), this.identifier = "roc";
  }
}
function Hl(t) {
  let [e, a] = Pn(or(t));
  return new _e(e, a, t.month, t.day);
}
const jl = 1948320, Gl = [
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
class eu {
  fromJulianDay(e) {
    let a = e - jl, n = 1 + Math.floor((33 * a + 3) / 12053), o = 365 * (n - 1) + Math.floor((8 * n + 21) / 33), s = a - o, r = s < 216 ? Math.floor(s / 31) : Math.floor((s - 6) / 30), i = s - Gl[r] + 1;
    return new _e(this, n, r + 1, i);
  }
  toJulianDay(e) {
    let a = jl - 1 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
    return a += Gl[e.month - 1], a += e.day, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(e) {
    return e.month <= 6 ? 31 : e.month <= 11 || Jt(25 * e.year + 11, 33) < 8 ? 30 : 29;
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
const Jn = 78, Yl = 80;
class tu extends Ke {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = a.year - Jn, o = e - Tt(a.era, a.year, 1, 1), s;
    o < Yl ? (n--, s = Ct(a.year - 1) ? 31 : 30, o += s + 155 + 90 + 10) : (s = Ct(a.year) ? 31 : 30, o -= Yl);
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
    let a = e.year + Jn, [n, o] = Pn(a), s, r;
    return Ct(o) ? (s = 31, r = Tt(n, o, 3, 21)) : (s = 30, r = Tt(n, o, 3, 22)), e.month === 1 ? r + e.day - 1 : (r += s + Math.min(e.month - 2, 5) * 31, e.month >= 8 && (r += (e.month - 7) * 30), r += e.day - 1, r);
  }
  getDaysInMonth(e) {
    return e.month === 1 && Ct(e.year + Jn) || e.month >= 2 && e.month <= 6 ? 31 : 30;
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
const gn = 1948440, ql = 1948439, Ie = 1300, Gt = 1600, au = 460322;
function yn(t, e, a, n) {
  return n + Math.ceil(29.5 * (a - 1)) + (e - 1) * 354 + Math.floor((3 + 11 * e) / 30) + t - 1;
}
function lr(t, e, a) {
  let n = Math.floor((30 * (a - e) + 10646) / 10631), o = Math.min(12, Math.ceil((a - (29 + yn(e, n, 1, 1))) / 29.5) + 1), s = a - yn(e, n, o, 1) + 1;
  return new _e(t, n, o, s);
}
function Jl(t) {
  return (14 + 11 * t) % 30 < 11;
}
class jo {
  fromJulianDay(e) {
    return lr(this, gn, e);
  }
  toJulianDay(e) {
    return yn(gn, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    let a = 29 + e.month % 2;
    return e.month === 12 && Jl(e.year) && a++, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(e) {
    return Jl(e.year) ? 355 : 354;
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
class nu extends jo {
  fromJulianDay(e) {
    return lr(this, ql, e);
  }
  toJulianDay(e) {
    return yn(ql, e.year, e.month, e.day);
  }
  constructor(...e) {
    super(...e), this.identifier = "islamic-tbla";
  }
}
const ou = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let ho, Zt;
function un(t) {
  return au + Zt[t - Ie];
}
function Sa(t, e) {
  let a = t - Ie, n = 1 << 11 - (e - 1);
  return ho[a] & n ? 30 : 29;
}
function Ql(t, e) {
  let a = un(t);
  for (let n = 1; n < e; n++) a += Sa(t, n);
  return a;
}
function Zl(t) {
  return Zt[t + 1 - Ie] - Zt[t - Ie];
}
class lu extends jo {
  fromJulianDay(e) {
    let a = e - gn, n = un(Ie), o = un(Gt);
    if (a < n || a > o) return super.fromJulianDay(e);
    {
      let s = Ie - 1, r = 1, i = 1;
      for (; i > 0; ) {
        s++, i = a - un(s) + 1;
        let d = Zl(s);
        if (i === d) {
          r = 12;
          break;
        } else if (i < d) {
          let u = Sa(s, r);
          for (r = 1; i > u; )
            i -= u, r++, u = Sa(s, r);
          break;
        }
      }
      return new _e(this, s, r, a - Ql(s, r) + 1);
    }
  }
  toJulianDay(e) {
    return e.year < Ie || e.year > Gt ? super.toJulianDay(e) : gn + Ql(e.year, e.month) + (e.day - 1);
  }
  getDaysInMonth(e) {
    return e.year < Ie || e.year > Gt ? super.getDaysInMonth(e) : Sa(e.year, e.month);
  }
  getDaysInYear(e) {
    return e.year < Ie || e.year > Gt ? super.getDaysInYear(e) : Zl(e.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", ho || (ho = new Uint16Array(Uint8Array.from(atob(ou), (e) => e.charCodeAt(0)).buffer)), !Zt) {
      Zt = new Uint32Array(Gt - Ie + 1);
      let e = 0;
      for (let a = Ie; a <= Gt; a++) {
        Zt[a - Ie] = e;
        for (let n = 1; n <= 12; n++) e += Sa(a, n);
      }
    }
  }
}
const Xl = 347997, sr = 1080, rr = 24 * sr, su = 29, ru = 12 * sr + 793, iu = su * rr + ru;
function Mt(t) {
  return Jt(t * 7 + 1, 19) < 7;
}
function cn(t) {
  let e = Math.floor((235 * t - 234) / 19), a = 12084 + 13753 * e, n = e * 29 + Math.floor(a / 25920);
  return Jt(3 * (n + 1), 7) < 3 && (n += 1), n;
}
function du(t) {
  let e = cn(t - 1), a = cn(t);
  return cn(t + 1) - a === 356 ? 2 : a - e === 382 ? 1 : 0;
}
function Ea(t) {
  return cn(t) + du(t);
}
function ir(t) {
  return Ea(t + 1) - Ea(t);
}
function uu(t) {
  let e = ir(t);
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
  if (e >= 6 && !Mt(t) && e++, e === 4 || e === 7 || e === 9 || e === 11 || e === 13) return 29;
  let a = uu(t);
  return e === 2 ? a === 2 ? 30 : 29 : e === 3 ? a === 0 ? 29 : 30 : e === 6 ? Mt(t) ? 30 : 0 : 30;
}
class cu {
  fromJulianDay(e) {
    let a = e - Xl, n = a * rr / iu, o = Math.floor((19 * n + 234) / 235) + 1, s = Ea(o), r = Math.floor(a - s);
    for (; r < 1; )
      o--, s = Ea(o), r = Math.floor(a - s);
    let i = 1, d = 0;
    for (; d < r; )
      d += Qa(o, i), i++;
    i--, d -= Qa(o, i);
    let u = r - d;
    return new _e(this, o, i, u);
  }
  toJulianDay(e) {
    let a = Ea(e.year);
    for (let n = 1; n < e.month; n++) a += Qa(e.year, n);
    return a + e.day + Xl;
  }
  getDaysInMonth(e) {
    return Qa(e.year, e.month);
  }
  getMonthsInYear(e) {
    return Mt(e.year) ? 13 : 12;
  }
  getDaysInYear(e) {
    return ir(e.year);
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
    a.year !== e.year && (Mt(a.year) && !Mt(e.year) && a.month > 6 ? e.month-- : !Mt(a.year) && Mt(e.year) && a.month > 6 && e.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const go = 1723856, es = 1824665, yo = 5500;
function bn(t, e, a, n) {
  return t + 365 * e + Math.floor(e / 4) + 30 * (a - 1) + n - 1;
}
function Go(t, e) {
  let a = Math.floor(4 * (e - t) / 1461), n = 1 + Math.floor((e - bn(t, a, 1, 1)) / 30), o = e + 1 - bn(t, a, n, 1);
  return [
    a,
    n,
    o
  ];
}
function dr(t) {
  return Math.floor(t % 4 / 3);
}
function ur(t, e) {
  return e % 13 !== 0 ? 30 : dr(t) + 5;
}
class Yo {
  fromJulianDay(e) {
    let [a, n, o] = Go(go, e), s = "AM";
    return a <= 0 && (s = "AA", a += yo), new _e(this, s, a, n, o);
  }
  toJulianDay(e) {
    let a = e.year;
    return e.era === "AA" && (a -= yo), bn(go, a, e.month, e.day);
  }
  getDaysInMonth(e) {
    return ur(e.year, e.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(e) {
    return 365 + dr(e.year);
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
class pu extends Yo {
  fromJulianDay(e) {
    let [a, n, o] = Go(go, e);
    return a += yo, new _e(this, "AA", a, n, o);
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
class fu extends Yo {
  fromJulianDay(e) {
    let [a, n, o] = Go(es, e), s = "CE";
    return a <= 0 && (s = "BCE", a = 1 - a), new _e(this, s, a, n, o);
  }
  toJulianDay(e) {
    let a = e.year;
    return e.era === "BCE" && (a = 1 - a), bn(es, a, e.month, e.day);
  }
  getDaysInMonth(e) {
    let a = e.year;
    return e.era === "BCE" && (a = 1 - a), ur(a, e.month);
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
function vu(t) {
  switch (t) {
    case "buddhist":
      return new Zd();
    case "ethiopic":
      return new Yo();
    case "ethioaa":
      return new pu();
    case "coptic":
      return new fu();
    case "hebrew":
      return new cu();
    case "indian":
      return new tu();
    case "islamic-civil":
      return new jo();
    case "islamic-tbla":
      return new nu();
    case "islamic-umalqura":
      return new lu();
    case "japanese":
      return new Qd();
    case "persian":
      return new eu();
    case "roc":
      return new Xd();
    case "gregory":
    default:
      return new Ke();
  }
}
let Qn = /* @__PURE__ */ new Map();
class Je {
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
    return gu() && (this.resolvedHourCycle || (this.resolvedHourCycle = yu(e.locale, this.options)), e.hourCycle = this.resolvedHourCycle, e.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), e.calendar === "ethiopic-amete-alem" && (e.calendar = "ethioaa"), e;
  }
  constructor(e, a = {}) {
    this.formatter = cr(e, a), this.options = a;
  }
}
const mu = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function cr(t, e = {}) {
  if (typeof e.hour12 == "boolean" && hu()) {
    e = {
      ...e
    };
    let o = mu[String(e.hour12)][t.split("-")[0]], s = e.hour12 ? "h12" : "h23";
    e.hourCycle = o ?? s, delete e.hour12;
  }
  let a = t + (e ? Object.entries(e).sort((o, s) => o[0] < s[0] ? -1 : 1).join() : "");
  if (Qn.has(a)) return Qn.get(a);
  let n = new Intl.DateTimeFormat(t, e);
  return Qn.set(a, n), n;
}
let Zn = null;
function hu() {
  return Zn == null && (Zn = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Zn;
}
let Xn = null;
function gu() {
  return Xn == null && (Xn = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), Xn;
}
function yu(t, e) {
  if (!e.timeStyle && !e.hour) return;
  t = t.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), t += (t.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = cr(t, {
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
function bu(t, e) {
  const a = [];
  for (let n = 0; n < t.length; n += e)
    a.push(t.slice(n, n + e));
  return a;
}
function Ve(t, e = ft()) {
  return qo(t) ? t.toDate() : t.toDate(e);
}
function _u(t) {
  return t instanceof na;
}
function qo(t) {
  return t instanceof oa;
}
function wu(t) {
  return _u(t) || qo(t);
}
function Aa(t) {
  if (t instanceof Date) {
    const e = t.getFullYear(), a = t.getMonth() + 1;
    return new Date(e, a, 0).getDate();
  } else
    return t.set({ day: 100 }).day;
}
function kt(t, e) {
  return t.compare(e) < 0;
}
function Pa(t, e) {
  return t.compare(e) > 0;
}
function xu(t, e) {
  return t.compare(e) <= 0;
}
function $u(t, e) {
  return t.compare(e) >= 0;
}
function Cu(t, e, a) {
  return $u(t, e) && xu(t, a);
}
function ku(t, e, a) {
  return Pa(t, e) && kt(t, a);
}
function Bu(t, e, a) {
  const n = Hs(t, a);
  return e > n ? t.subtract({ days: n + 7 - e }) : e === n ? t : t.subtract({ days: n - e });
}
function Du(t, e, a) {
  const n = Hs(t, a), o = e === 0 ? 6 : e - 1;
  return n === o ? t : n > o ? t.add({ days: 7 - n + o }) : t.add({ days: o - n });
}
function Su(t, e, a, n) {
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
function ts(t, e) {
  const a = [];
  let n = t.add({ days: 1 });
  const o = e;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function eo(t) {
  const { dateObj: e, weekStartsOn: a, fixedWeeks: n, locale: o } = t, s = Aa(e), r = Array.from({ length: s }, (x, C) => e.set({ day: C + 1 })), i = Vt(e), d = Rl(e), u = Bu(i, a, o), c = Du(d, a, o), p = ts(u.subtract({ days: 1 }), i), _ = ts(d, c.add({ days: 1 })), m = p.length + r.length + _.length;
  if (n && m < 42) {
    const x = 42 - m;
    let C = _[_.length - 1];
    C || (C = Rl(e));
    const S = Array.from({ length: x }, (k, E) => {
      const O = E + 1;
      return C.add({ days: O });
    });
    _.push(...S);
  }
  const w = p.concat(r, _), h = bu(w, 7);
  return {
    value: e,
    cells: w,
    rows: h
  };
}
function Pu(t) {
  const { dateObj: e, startIndex: a, endIndex: n } = t, o = Array.from({ length: Math.abs(a ?? 0) + n }, (s, r) => r <= Math.abs(a ?? 0) ? e.subtract({ years: r }).set({ day: 1, month: 1 }) : e.add({ years: r - n }).set({ day: 1, month: 1 }));
  return o.sort((s, r) => s.year - r.year), o;
}
function Eu(t) {
  const { dateObj: e, numberOfMonths: a = 1, pagedNavigation: n = !1 } = t;
  return a && n ? Array.from({ length: Math.floor(12 / a) }, (o, s) => Vt(e.set({ month: s * a + 1 }))) : Array.from({ length: 12 }, (o, s) => Vt(e.set({ month: s + 1 })));
}
function At(t) {
  const { numberOfMonths: e, dateObj: a, ...n } = t, o = [];
  if (!e || e === 1)
    return o.push(
      eo({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    eo({
      ...n,
      dateObj: a
    })
  );
  for (let s = 1; s < e; s++) {
    const r = a.add({ months: s });
    o.push(
      eo({
        ...n,
        dateObj: r
      })
    );
  }
  return o;
}
const Ou = ["top", "right", "bottom", "left"], Bt = Math.min, Ee = Math.max, _n = Math.round, Za = Math.floor, Xe = (t) => ({
  x: t,
  y: t
}), Au = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Mu = {
  start: "end",
  end: "start"
};
function bo(t, e, a) {
  return Ee(t, Bt(e, a));
}
function vt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function mt(t) {
  return t.split("-")[0];
}
function ca(t) {
  return t.split("-")[1];
}
function Jo(t) {
  return t === "x" ? "y" : "x";
}
function Qo(t) {
  return t === "y" ? "height" : "width";
}
function Dt(t) {
  return ["top", "bottom"].includes(mt(t)) ? "y" : "x";
}
function Zo(t) {
  return Jo(Dt(t));
}
function Tu(t, e, a) {
  a === void 0 && (a = !1);
  const n = ca(t), o = Zo(t), s = Qo(o);
  let r = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = wn(r)), [r, wn(r)];
}
function Iu(t) {
  const e = wn(t);
  return [_o(t), e, _o(e)];
}
function _o(t) {
  return t.replace(/start|end/g, (e) => Mu[e]);
}
function Vu(t, e, a) {
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
function Ru(t, e, a, n) {
  const o = ca(t);
  let s = Vu(mt(t), a === "start", n);
  return o && (s = s.map((r) => r + "-" + o), e && (s = s.concat(s.map(_o)))), s;
}
function wn(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Au[e]);
}
function Fu(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function pr(t) {
  return typeof t != "number" ? Fu(t) : {
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
function as(t, e, a) {
  let {
    reference: n,
    floating: o
  } = t;
  const s = Dt(e), r = Zo(e), i = Qo(r), d = mt(e), u = s === "y", c = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, _ = n[i] / 2 - o[i] / 2;
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
  switch (ca(e)) {
    case "start":
      m[r] -= _ * (a && u ? -1 : 1);
      break;
    case "end":
      m[r] += _ * (a && u ? -1 : 1);
      break;
  }
  return m;
}
const Lu = async (t, e, a) => {
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
  } = as(u, n, d), _ = n, m = {}, w = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: x,
      fn: C
    } = i[h], {
      x: S,
      y: k,
      data: E,
      reset: O
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
        ...E
      }
    }, O && w <= 50 && (w++, typeof O == "object" && (O.placement && (_ = O.placement), O.rects && (u = O.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : O.rects), {
      x: c,
      y: p
    } = as(u, _, d)), h = -1);
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
  } = vt(e, t), w = pr(m), x = i[_ ? p === "floating" ? "reference" : "floating" : p], C = xn(await s.getClippingRect({
    element: (a = await (s.isElement == null ? void 0 : s.isElement(x))) == null || a ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: d
  })), S = p === "floating" ? {
    x: n,
    y: o,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), E = await (s.isElement == null ? void 0 : s.isElement(k)) ? await (s.getScale == null ? void 0 : s.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = xn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: S,
    offsetParent: k,
    strategy: d
  }) : S);
  return {
    top: (C.top - O.top + w.top) / E.y,
    bottom: (O.bottom - C.bottom + w.bottom) / E.y,
    left: (C.left - O.left + w.left) / E.x,
    right: (O.right - C.right + w.right) / E.x
  };
}
const Nu = (t) => ({
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
    } = vt(t, e) || {};
    if (u == null)
      return {};
    const p = pr(c), _ = {
      x: a,
      y: n
    }, m = Zo(o), w = Qo(m), h = await r.getDimensions(u), x = m === "y", C = x ? "top" : "left", S = x ? "bottom" : "right", k = x ? "clientHeight" : "clientWidth", E = s.reference[w] + s.reference[m] - _[m] - s.floating[w], O = _[m] - s.reference[m], V = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(u));
    let M = V ? V[k] : 0;
    (!M || !await (r.isElement == null ? void 0 : r.isElement(V))) && (M = i.floating[k] || s.floating[w]);
    const U = E / 2 - O / 2, z = M / 2 - h[w] / 2 - 1, D = Bt(p[C], z), I = Bt(p[S], z), F = D, Y = M - h[w] - I, G = M / 2 - h[w] / 2 + U, ae = bo(F, G, Y), pe = !d.arrow && ca(o) != null && G !== ae && s.reference[w] / 2 - (G < F ? D : I) - h[w] / 2 < 0, ge = pe ? G < F ? G - F : G - Y : 0;
    return {
      [m]: _[m] + ge,
      data: {
        [m]: ae,
        centerOffset: G - ae - ge,
        ...pe && {
          alignmentOffset: ge
        }
      },
      reset: pe
    };
  }
}), zu = function(t) {
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
      } = vt(t, e);
      if ((a = s.arrow) != null && a.alignmentOffset)
        return {};
      const C = mt(o), S = Dt(i), k = mt(i) === i, E = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), O = _ || (k || !h ? [wn(i)] : Iu(i)), V = w !== "none";
      !_ && V && O.push(...Ru(i, h, w, E));
      const M = [i, ...O], U = await Ma(e, x), z = [];
      let D = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (c && z.push(U[C]), p) {
        const G = Tu(o, r, E);
        z.push(U[G[0]], U[G[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: z
      }], !z.every((G) => G <= 0)) {
        var I, F;
        const G = (((I = s.flip) == null ? void 0 : I.index) || 0) + 1, ae = M[G];
        if (ae)
          return {
            data: {
              index: G,
              overflows: D
            },
            reset: {
              placement: ae
            }
          };
        let pe = (F = D.filter((ge) => ge.overflows[0] <= 0).sort((ge, ye) => ge.overflows[1] - ye.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!pe)
          switch (m) {
            case "bestFit": {
              var Y;
              const ge = (Y = D.filter((ye) => {
                if (V) {
                  const j = Dt(ye.placement);
                  return j === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((ye) => [ye.placement, ye.overflows.filter((j) => j > 0).reduce((j, oe) => j + oe, 0)]).sort((ye, j) => ye[1] - j[1])[0]) == null ? void 0 : Y[0];
              ge && (pe = ge);
              break;
            }
            case "initialPlacement":
              pe = i;
              break;
          }
        if (o !== pe)
          return {
            reset: {
              placement: pe
            }
          };
      }
      return {};
    }
  };
};
function ns(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function os(t) {
  return Ou.some((e) => t[e] >= 0);
}
const Uu = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: a
      } = e, {
        strategy: n = "referenceHidden",
        ...o
      } = vt(t, e);
      switch (n) {
        case "referenceHidden": {
          const s = await Ma(e, {
            ...o,
            elementContext: "reference"
          }), r = ns(s, a.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: os(r)
            }
          };
        }
        case "escaped": {
          const s = await Ma(e, {
            ...o,
            altBoundary: !0
          }), r = ns(s, a.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: os(r)
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
  } = t, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), r = mt(a), i = ca(a), d = Dt(a) === "y", u = ["left", "top"].includes(r) ? -1 : 1, c = s && d ? -1 : 1, p = vt(e, t);
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
const Ku = function(t) {
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
}, Hu = function(t) {
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
      } = vt(t, e), u = {
        x: a,
        y: n
      }, c = await Ma(e, d), p = Dt(mt(o)), _ = Jo(p);
      let m = u[_], w = u[p];
      if (s) {
        const x = _ === "y" ? "top" : "left", C = _ === "y" ? "bottom" : "right", S = m + c[x], k = m - c[C];
        m = bo(S, m, k);
      }
      if (r) {
        const x = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", S = w + c[x], k = w - c[C];
        w = bo(S, w, k);
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
}, ju = function(t) {
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
      } = vt(t, e), c = {
        x: a,
        y: n
      }, p = Dt(o), _ = Jo(p);
      let m = c[_], w = c[p];
      const h = vt(i, e), x = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (d) {
        const k = _ === "y" ? "height" : "width", E = s.reference[_] - s.floating[k] + x.mainAxis, O = s.reference[_] + s.reference[k] - x.mainAxis;
        m < E ? m = E : m > O && (m = O);
      }
      if (u) {
        var C, S;
        const k = _ === "y" ? "width" : "height", E = ["top", "left"].includes(mt(o)), O = s.reference[p] - s.floating[k] + (E && ((C = r.offset) == null ? void 0 : C[p]) || 0) + (E ? 0 : x.crossAxis), V = s.reference[p] + s.reference[k] + (E ? 0 : ((S = r.offset) == null ? void 0 : S[p]) || 0) - (E ? x.crossAxis : 0);
        w < O ? w = O : w > V && (w = V);
      }
      return {
        [_]: m,
        [p]: w
      };
    }
  };
}, Gu = function(t) {
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
      } = vt(t, e), c = await Ma(e, u), p = mt(o), _ = ca(o), m = Dt(o) === "y", {
        width: w,
        height: h
      } = s.floating;
      let x, C;
      p === "top" || p === "bottom" ? (x = p, C = _ === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, x = _ === "end" ? "top" : "bottom");
      const S = h - c.top - c.bottom, k = w - c.left - c.right, E = Bt(h - c[x], S), O = Bt(w - c[C], k), V = !e.middlewareData.shift;
      let M = E, U = O;
      if ((a = e.middlewareData.shift) != null && a.enabled.x && (U = k), (n = e.middlewareData.shift) != null && n.enabled.y && (M = S), V && !_) {
        const D = Ee(c.left, 0), I = Ee(c.right, 0), F = Ee(c.top, 0), Y = Ee(c.bottom, 0);
        m ? U = w - 2 * (D !== 0 || I !== 0 ? D + I : Ee(c.left, c.right)) : M = h - 2 * (F !== 0 || Y !== 0 ? F + Y : Ee(c.top, c.bottom));
      }
      await d({
        ...e,
        availableWidth: U,
        availableHeight: M
      });
      const z = await r.getDimensions(i.floating);
      return w !== z.width || h !== z.height ? {
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
function Lt(t) {
  return Xo(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Ae(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function at(t) {
  var e;
  return (e = (Xo(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Xo(t) {
  return On() ? t instanceof Node || t instanceof Ae(t).Node : !1;
}
function He(t) {
  return On() ? t instanceof Element || t instanceof Ae(t).Element : !1;
}
function et(t) {
  return On() ? t instanceof HTMLElement || t instanceof Ae(t).HTMLElement : !1;
}
function ls(t) {
  return !On() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Ae(t).ShadowRoot;
}
function La(t) {
  const {
    overflow: e,
    overflowX: a,
    overflowY: n,
    display: o
  } = je(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + a) && !["inline", "contents"].includes(o);
}
function Yu(t) {
  return ["table", "td", "th"].includes(Lt(t));
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
function el(t) {
  const e = tl(), a = He(t) ? je(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => a[n] ? a[n] !== "none" : !1) || (a.containerType ? a.containerType !== "normal" : !1) || !e && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !e && (a.filter ? a.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function qu(t) {
  let e = St(t);
  for (; et(e) && !la(e); ) {
    if (el(e))
      return e;
    if (An(e))
      return null;
    e = St(e);
  }
  return null;
}
function tl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function la(t) {
  return ["html", "body", "#document"].includes(Lt(t));
}
function je(t) {
  return Ae(t).getComputedStyle(t);
}
function Mn(t) {
  return He(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function St(t) {
  if (Lt(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    ls(t) && t.host || // Fallback.
    at(t)
  );
  return ls(e) ? e.host : e;
}
function fr(t) {
  const e = St(t);
  return la(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : et(e) && La(e) ? e : fr(e);
}
function Ta(t, e, a) {
  var n;
  e === void 0 && (e = []), a === void 0 && (a = !0);
  const o = fr(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Ae(o);
  if (s) {
    const i = wo(r);
    return e.concat(r, r.visualViewport || [], La(o) ? o : [], i && a ? Ta(i) : []);
  }
  return e.concat(o, Ta(o, [], a));
}
function wo(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function vr(t) {
  const e = je(t);
  let a = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = et(t), s = o ? t.offsetWidth : a, r = o ? t.offsetHeight : n, i = _n(a) !== s || _n(n) !== r;
  return i && (a = s, n = r), {
    width: a,
    height: n,
    $: i
  };
}
function al(t) {
  return He(t) ? t : t.contextElement;
}
function Xt(t) {
  const e = al(t);
  if (!et(e))
    return Xe(1);
  const a = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = vr(e);
  let r = (s ? _n(a.width) : a.width) / n, i = (s ? _n(a.height) : a.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: r,
    y: i
  };
}
const Ju = /* @__PURE__ */ Xe(0);
function mr(t) {
  const e = Ae(t);
  return !tl() || !e.visualViewport ? Ju : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Qu(t, e, a) {
  return e === void 0 && (e = !1), !a || e && a !== Ae(t) ? !1 : e;
}
function Ft(t, e, a, n) {
  e === void 0 && (e = !1), a === void 0 && (a = !1);
  const o = t.getBoundingClientRect(), s = al(t);
  let r = Xe(1);
  e && (n ? He(n) && (r = Xt(n)) : r = Xt(t));
  const i = Qu(s, a, n) ? mr(s) : Xe(0);
  let d = (o.left + i.x) / r.x, u = (o.top + i.y) / r.y, c = o.width / r.x, p = o.height / r.y;
  if (s) {
    const _ = Ae(s), m = n && He(n) ? Ae(n) : n;
    let w = _, h = wo(w);
    for (; h && n && m !== w; ) {
      const x = Xt(h), C = h.getBoundingClientRect(), S = je(h), k = C.left + (h.clientLeft + parseFloat(S.paddingLeft)) * x.x, E = C.top + (h.clientTop + parseFloat(S.paddingTop)) * x.y;
      d *= x.x, u *= x.y, c *= x.x, p *= x.y, d += k, u += E, w = Ae(h), h = wo(w);
    }
  }
  return xn({
    width: c,
    height: p,
    x: d,
    y: u
  });
}
function nl(t, e) {
  const a = Mn(t).scrollLeft;
  return e ? e.left + a : Ft(at(t)).left + a;
}
function hr(t, e, a) {
  a === void 0 && (a = !1);
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - (a ? 0 : (
    // RTL <body> scrollbar.
    nl(t, n)
  )), s = n.top + e.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Zu(t) {
  let {
    elements: e,
    rect: a,
    offsetParent: n,
    strategy: o
  } = t;
  const s = o === "fixed", r = at(n), i = e ? An(e.floating) : !1;
  if (n === r || i && s)
    return a;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Xe(1);
  const c = Xe(0), p = et(n);
  if ((p || !p && !s) && ((Lt(n) !== "body" || La(r)) && (d = Mn(n)), et(n))) {
    const m = Ft(n);
    u = Xt(n), c.x = m.x + n.clientLeft, c.y = m.y + n.clientTop;
  }
  const _ = r && !p && !s ? hr(r, d, !0) : Xe(0);
  return {
    width: a.width * u.x,
    height: a.height * u.y,
    x: a.x * u.x - d.scrollLeft * u.x + c.x + _.x,
    y: a.y * u.y - d.scrollTop * u.y + c.y + _.y
  };
}
function Xu(t) {
  return Array.from(t.getClientRects());
}
function ec(t) {
  const e = at(t), a = Mn(t), n = t.ownerDocument.body, o = Ee(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), s = Ee(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -a.scrollLeft + nl(t);
  const i = -a.scrollTop;
  return je(n).direction === "rtl" && (r += Ee(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: r,
    y: i
  };
}
function tc(t, e) {
  const a = Ae(t), n = at(t), o = a.visualViewport;
  let s = n.clientWidth, r = n.clientHeight, i = 0, d = 0;
  if (o) {
    s = o.width, r = o.height;
    const u = tl();
    (!u || u && e === "fixed") && (i = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: i,
    y: d
  };
}
function ac(t, e) {
  const a = Ft(t, !0, e === "fixed"), n = a.top + t.clientTop, o = a.left + t.clientLeft, s = et(t) ? Xt(t) : Xe(1), r = t.clientWidth * s.x, i = t.clientHeight * s.y, d = o * s.x, u = n * s.y;
  return {
    width: r,
    height: i,
    x: d,
    y: u
  };
}
function ss(t, e, a) {
  let n;
  if (e === "viewport")
    n = tc(t, a);
  else if (e === "document")
    n = ec(at(t));
  else if (He(e))
    n = ac(e, a);
  else {
    const o = mr(t);
    n = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return xn(n);
}
function gr(t, e) {
  const a = St(t);
  return a === e || !He(a) || la(a) ? !1 : je(a).position === "fixed" || gr(a, e);
}
function nc(t, e) {
  const a = e.get(t);
  if (a)
    return a;
  let n = Ta(t, [], !1).filter((i) => He(i) && Lt(i) !== "body"), o = null;
  const s = je(t).position === "fixed";
  let r = s ? St(t) : t;
  for (; He(r) && !la(r); ) {
    const i = je(r), d = el(r);
    !d && i.position === "fixed" && (o = null), (s ? !d && !o : !d && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || La(r) && !d && gr(t, r)) ? n = n.filter((c) => c !== r) : o = i, r = St(r);
  }
  return e.set(t, n), n;
}
function oc(t) {
  let {
    element: e,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = t;
  const r = [...a === "clippingAncestors" ? An(e) ? [] : nc(e, this._c) : [].concat(a), n], i = r[0], d = r.reduce((u, c) => {
    const p = ss(e, c, o);
    return u.top = Ee(p.top, u.top), u.right = Bt(p.right, u.right), u.bottom = Bt(p.bottom, u.bottom), u.left = Ee(p.left, u.left), u;
  }, ss(e, i, o));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function lc(t) {
  const {
    width: e,
    height: a
  } = vr(t);
  return {
    width: e,
    height: a
  };
}
function sc(t, e, a) {
  const n = et(e), o = at(e), s = a === "fixed", r = Ft(t, !0, s, e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = Xe(0);
  if (n || !n && !s)
    if ((Lt(e) !== "body" || La(o)) && (i = Mn(e)), n) {
      const _ = Ft(e, !0, s, e);
      d.x = _.x + e.clientLeft, d.y = _.y + e.clientTop;
    } else o && (d.x = nl(o));
  const u = o && !n && !s ? hr(o, i) : Xe(0), c = r.left + i.scrollLeft - d.x - u.x, p = r.top + i.scrollTop - d.y - u.y;
  return {
    x: c,
    y: p,
    width: r.width,
    height: r.height
  };
}
function to(t) {
  return je(t).position === "static";
}
function rs(t, e) {
  if (!et(t) || je(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let a = t.offsetParent;
  return at(t) === a && (a = a.ownerDocument.body), a;
}
function yr(t, e) {
  const a = Ae(t);
  if (An(t))
    return a;
  if (!et(t)) {
    let o = St(t);
    for (; o && !la(o); ) {
      if (He(o) && !to(o))
        return o;
      o = St(o);
    }
    return a;
  }
  let n = rs(t, e);
  for (; n && Yu(n) && to(n); )
    n = rs(n, e);
  return n && la(n) && to(n) && !el(n) ? a : n || qu(t) || a;
}
const rc = async function(t) {
  const e = this.getOffsetParent || yr, a = this.getDimensions, n = await a(t.floating);
  return {
    reference: sc(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function ic(t) {
  return je(t).direction === "rtl";
}
const dc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Zu,
  getDocumentElement: at,
  getClippingRect: oc,
  getOffsetParent: yr,
  getElementRects: rc,
  getClientRects: Xu,
  getDimensions: lc,
  getScale: Xt,
  isElement: He,
  isRTL: ic
};
function br(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function uc(t, e) {
  let a = null, n;
  const o = at(t);
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
    const w = Za(p), h = Za(o.clientWidth - (c + _)), x = Za(o.clientHeight - (p + m)), C = Za(c), k = {
      rootMargin: -w + "px " + -h + "px " + -x + "px " + -C + "px",
      threshold: Ee(0, Bt(1, d)) || 1
    };
    let E = !0;
    function O(V) {
      const M = V[0].intersectionRatio;
      if (M !== d) {
        if (!E)
          return r();
        M ? r(!1, M) : n = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !br(u, t.getBoundingClientRect()) && r(), E = !1;
    }
    try {
      a = new IntersectionObserver(O, {
        ...k,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      a = new IntersectionObserver(O, k);
    }
    a.observe(t);
  }
  return r(!0), s;
}
function cc(t, e, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, u = al(t), c = o || s ? [...u ? Ta(u) : [], ...Ta(e)] : [];
  c.forEach((C) => {
    o && C.addEventListener("scroll", a, {
      passive: !0
    }), s && C.addEventListener("resize", a);
  });
  const p = u && i ? uc(u, a) : null;
  let _ = -1, m = null;
  r && (m = new ResizeObserver((C) => {
    let [S] = C;
    S && S.target === u && m && (m.unobserve(e), cancelAnimationFrame(_), _ = requestAnimationFrame(() => {
      var k;
      (k = m) == null || k.observe(e);
    })), a();
  }), u && !d && m.observe(u), m.observe(e));
  let w, h = d ? Ft(t) : null;
  d && x();
  function x() {
    const C = Ft(t);
    h && !br(h, C) && a(), h = C, w = requestAnimationFrame(x);
  }
  return a(), () => {
    var C;
    c.forEach((S) => {
      o && S.removeEventListener("scroll", a), s && S.removeEventListener("resize", a);
    }), p == null || p(), (C = m) == null || C.disconnect(), m = null, d && cancelAnimationFrame(w);
  };
}
const pc = Ku, fc = Hu, is = zu, vc = Gu, mc = Uu, hc = Nu, gc = ju, yc = (t, e, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: dc,
    ...a
  }, s = {
    ...o.platform,
    _c: n
  };
  return Lu(t, e, {
    ...o,
    platform: s
  });
};
function bc(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function xo(t) {
  if (bc(t)) {
    const e = t.$el;
    return Xo(e) && Lt(e) === "#comment" ? null : e;
  }
  return t;
}
function qt(t) {
  return typeof t == "function" ? t() : l(t);
}
function _c(t) {
  return {
    name: "arrow",
    options: t,
    fn(e) {
      const a = xo(qt(t.element));
      return a == null ? {} : hc({
        element: a,
        padding: t.padding
      }).fn(e);
    }
  };
}
function _r(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ds(t, e) {
  const a = _r(t);
  return Math.round(e * a) / a;
}
function wc(t, e, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = $(() => {
    var M;
    return (M = qt(a.open)) != null ? M : !0;
  }), s = $(() => qt(a.middleware)), r = $(() => {
    var M;
    return (M = qt(a.placement)) != null ? M : "bottom";
  }), i = $(() => {
    var M;
    return (M = qt(a.strategy)) != null ? M : "absolute";
  }), d = $(() => {
    var M;
    return (M = qt(a.transform)) != null ? M : !0;
  }), u = $(() => xo(t.value)), c = $(() => xo(e.value)), p = A(0), _ = A(0), m = A(i.value), w = A(r.value), h = Ro({}), x = A(!1), C = $(() => {
    const M = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return M;
    const U = ds(c.value, p.value), z = ds(c.value, _.value);
    return d.value ? {
      ...M,
      transform: "translate(" + U + "px, " + z + "px)",
      ..._r(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: U + "px",
      top: z + "px"
    };
  });
  let S;
  function k() {
    if (u.value == null || c.value == null)
      return;
    const M = o.value;
    yc(u.value, c.value, {
      middleware: s.value,
      placement: r.value,
      strategy: i.value
    }).then((U) => {
      p.value = U.x, _.value = U.y, m.value = U.strategy, w.value = U.placement, h.value = U.middlewareData, x.value = M !== !1;
    });
  }
  function E() {
    typeof S == "function" && (S(), S = void 0);
  }
  function O() {
    if (E(), n === void 0) {
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
  return ee([s, r, i, o], k, {
    flush: "sync"
  }), ee([u, c], O, {
    flush: "sync"
  }), ee(o, V, {
    flush: "sync"
  }), Fo() && Lo(E), {
    x: jt(p),
    y: jt(_),
    strategy: jt(m),
    placement: jt(w),
    middlewareData: jt(h),
    isPositioned: jt(x),
    floatingStyles: C,
    update: k
  };
}
function ne(t, e) {
  const a = typeof t == "string" && !e ? `${t}Context` : e, n = Symbol(a);
  return [(o) => {
    const s = As(n, o);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(
        ", "
      )}` : `\`${t}\``}`
    );
  }, (o) => (Ms(n, o), o)];
}
function ol(t, e, a) {
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
function xc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var $c = function t(e, a) {
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
const It = /* @__PURE__ */ xc($c);
function pn(t) {
  return t == null;
}
function wr(t) {
  const { defaultValue: e, defaultPlaceholder: a, granularity: n = "day", locale: o = "en" } = t;
  if (Array.isArray(e) && e.length)
    return e.at(-1).copy();
  if (e && !Array.isArray(e))
    return e.copy();
  if (a)
    return a.copy();
  const s = /* @__PURE__ */ new Date(), r = s.getFullYear(), i = s.getMonth() + 1, d = s.getDate(), u = ["hour", "minute", "second"], c = new Je(o), p = vu(c.resolvedOptions().calendar);
  return u.includes(n ?? "day") ? Se(new na(r, i, d, 0, 0, 0), p) : Se(new _e(r, i, d), p);
}
function xr(t) {
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
function Cc(t, e) {
  var a;
  const n = Ro();
  return be(() => {
    n.value = t();
  }, {
    ...e,
    flush: (a = void 0) != null ? a : "sync"
  }), Ra(n);
}
function Nt(t) {
  return Fo() ? (Lo(t), !0) : !1;
}
function kc() {
  const t = /* @__PURE__ */ new Set(), e = (a) => {
    t.delete(a);
  };
  return {
    on: (a) => {
      t.add(a);
      const n = () => e(a);
      return Nt(n), {
        off: n
      };
    },
    off: e,
    trigger: (...a) => Promise.all(Array.from(t).map((n) => n(...a)))
  };
}
function Bc(t) {
  let e = !1, a;
  const n = Fs(!0);
  return (...o) => (e || (a = n.run(() => t(...o)), e = !0), a);
}
function $r(t) {
  let e = 0, a, n;
  const o = () => {
    e -= 1, n && e <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...s) => (e += 1, a || (n = Fs(!0), a = n.run(() => t(...s))), Nt(o), a);
}
function pt(t) {
  return typeof t == "function" ? t() : l(t);
}
const nt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Dc = (t) => typeof t < "u", Sc = (t) => t != null, Pc = Object.prototype.toString, Ec = (t) => Pc.call(t) === "[object Object]", Cr = () => {
}, us = /* @__PURE__ */ Oc();
function Oc() {
  var t, e;
  return nt && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Ac(t) {
  return tt();
}
function kr(t, e = 1e4) {
  return Vs((a, n) => {
    let o = pt(t), s;
    const r = () => setTimeout(() => {
      o = pt(t), n();
    }, pt(e));
    return Nt(() => {
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
function Mc(t, e) {
  Ac() && No(t, e);
}
function ll(t, e, a = {}) {
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
    }, pt(e));
  }
  return n && (o.value = !0, nt && d()), Nt(i), {
    isPending: Ra(o),
    start: d,
    stop: i
  };
}
function Tc(t = 1e3, e = {}) {
  const {
    controls: a = !1,
    callback: n
  } = e, o = ll(
    n ?? Cr,
    t,
    e
  ), s = $(() => !o.isPending.value);
  return a ? {
    ready: s,
    ...o
  } : s;
}
function Re(t) {
  var e;
  const a = pt(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
const Na = nt ? window : void 0;
function sa(...t) {
  let e, a, n, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([a, n, o] = t, e = Na) : [e, a, n, o] = t, !e)
    return Cr;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, p, _, m) => (c.addEventListener(p, _, m), () => c.removeEventListener(p, _, m)), d = ee(
    () => [Re(e), pt(o)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const _ = Ec(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((w) => i(c, m, w, _)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), r();
  };
  return Nt(u), u;
}
function Ic(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (e) => e.key === t : Array.isArray(t) ? (e) => t.includes(e.key) : () => !0;
}
function sl(...t) {
  let e, a, n = {};
  t.length === 3 ? (e = t[0], a = t[1], n = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (e = !0, a = t[0], n = t[1]) : (e = t[0], a = t[1]) : (e = !0, a = t[0]);
  const {
    target: o = Na,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, d = Ic(e);
  return sa(o, s, (u) => {
    u.repeat && pt(i) || d(u) && a(u);
  }, r);
}
function rl() {
  const t = A(!1), e = tt();
  return e && ue(() => {
    t.value = !0;
  }, e), t;
}
function Vc(t) {
  const e = rl();
  return $(() => (e.value, !!t()));
}
function Rc(t, e, a = {}) {
  const { window: n = Na, ...o } = a;
  let s;
  const r = Vc(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, d = $(() => {
    const _ = pt(t), m = (Array.isArray(_) ? _ : [_]).map(Re).filter(Sc);
    return new Set(m);
  }), u = ee(
    () => d.value,
    (_) => {
      i(), r.value && _.size && (s = new MutationObserver(e), _.forEach((m) => s.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => s == null ? void 0 : s.takeRecords(), p = () => {
    i(), u();
  };
  return Nt(p), {
    isSupported: r,
    stop: p,
    takeRecords: c
  };
}
function Br(t, e = {}) {
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
  return a && c(), Nt(p), {
    isActive: Ra(s),
    pause: p,
    resume: c
  };
}
function Fc(t) {
  return JSON.parse(JSON.stringify(t));
}
function fe(t, e, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: _
  } = n, m = tt(), w = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let h = u;
  e || (e = "modelValue"), h = h || `update:${e.toString()}`;
  const x = (k) => i ? typeof i == "function" ? i(k) : Fc(k) : k, C = () => Dc(t[e]) ? x(t[e]) : p, S = (k) => {
    _ ? _(k) && w(h, k) : w(h, k);
  };
  if (d) {
    const k = C(), E = A(k);
    let O = !1;
    return ee(
      () => t[e],
      (V) => {
        O || (O = !0, E.value = x(V), le(() => O = !1));
      }
    ), ee(
      E,
      (V) => {
        !O && (V !== t[e] || c) && S(V);
      },
      { deep: c }
    ), E;
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
const Lc = ["INPUT", "TEXTAREA"];
function Dr(t, e, a, n = {}) {
  if (!e || n.enableIgnoredElement && Lc.includes(e.nodeName))
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
  let E = null;
  return S || C ? E = Sr(k, e, {
    goForward: C ? w : d === "ltr" ? p : _,
    loop: i
  }) : h ? E = k.at(0) || null : x && (E = k.at(-1) || null), c && (E == null || E.focus()), E;
}
function Sr(t, e, a, n = t.length) {
  if (--n === 0)
    return null;
  const o = t.indexOf(e), s = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (s < 0 || s >= t.length))
    return null;
  const r = (s + t.length) % t.length, i = t[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Sr(
    t,
    i,
    a,
    n
  ) : i : null;
}
function ao(t) {
  if (t === null || typeof t != "object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t ? !1 : Symbol.toStringTag in t ? Object.prototype.toString.call(t) === "[object Module]" : !0;
}
function $o(t, e, a = ".", n) {
  if (!ao(e))
    return $o(t, {}, a);
  const o = Object.assign({}, e);
  for (const s in t) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = t[s];
    r != null && (Array.isArray(r) && Array.isArray(o[s]) ? o[s] = [...r, ...o[s]] : ao(r) && ao(o[s]) ? o[s] = $o(
      r,
      o[s],
      (a ? `${a}.` : "") + s.toString()
    ) : o[s] = r);
  }
  return o;
}
function Nc(t) {
  return (...e) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    e.reduce((a, n) => $o(a, n, ""), {})
  );
}
const zc = Nc(), [In, C0] = ne("ConfigProvider");
let Uc = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Wc = (t = 21) => {
  let e = "", a = t;
  for (; a--; )
    e += Uc[Math.random() * 64 | 0];
  return e;
};
const Kc = $r(() => {
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
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = e.value ?? "", us && (o == null || o()), e.value = void 0;
  };
  return ee(a, (r, i) => {
    var d;
    if (!nt)
      return;
    if (!r) {
      i && s();
      return;
    }
    e.value === void 0 && (e.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, c = { padding: u, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? zc({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), us && (o = sa(
      document,
      "touchmove",
      (_) => Hc(_),
      { passive: !1 }
    )), le(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), t;
});
function za(t) {
  const e = Wc(6), a = Kc();
  a.value.set(e, t ?? !1);
  const n = $({
    get: () => a.value.get(e) ?? !1,
    set: (o) => a.value.set(e, o)
  });
  return Mc(() => {
    a.value.delete(e);
  }), n;
}
function Pr(t) {
  const e = window.getComputedStyle(t);
  if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && t.clientWidth < t.scrollWidth || e.overflowY === "auto" && t.clientHeight < t.scrollHeight)
    return !0;
  {
    const a = t.parentNode;
    return !a || a.tagName === "BODY" ? !1 : Pr(a);
  }
}
function Hc(t) {
  const e = t || window.event, a = e.target;
  return a instanceof Element && Pr(a) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.cancelable && e.preventDefault(), !1);
}
const jc = "data-radix-vue-collection-item";
function pa(t, e = jc) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = A([]);
    function s() {
      const r = Re(n);
      return r ? o.value = Array.from(
        r.querySelectorAll(`[${e}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return cd(() => {
      o.value = [];
    }), ue(s), pd(s), ee(() => n == null ? void 0 : n.value, s, { immediate: !0 }), Ms(a, o), o;
  }, injectCollection: () => As(a, A([])) };
}
function Er(t) {
  const e = A(t);
  function a() {
    return e.value;
  }
  function n(h) {
    e.value = h;
  }
  function o(h, x) {
    return new Je(e.value, x).format(h);
  }
  function s(h, x = !0) {
    return wu(h) && x ? o(Ve(h), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Ve(h), {
      dateStyle: "long"
    });
  }
  function r(h, x = {}) {
    return new Je(e.value, { month: "long", year: "numeric", ...x }).format(h);
  }
  function i(h, x = {}) {
    return new Je(e.value, { month: "long", ...x }).format(h);
  }
  function d() {
    const h = vn(ft());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => ({ label: i(Ve(h.set({ month: x }))), value: x }));
  }
  function u(h, x = {}) {
    return new Je(e.value, { year: "numeric", ...x }).format(h);
  }
  function c(h, x) {
    return qo(h) ? new Je(e.value, {
      ...x,
      timeZone: h.timeZone
    }).formatToParts(Ve(h)) : new Je(e.value, x).formatToParts(Ve(h));
  }
  function p(h, x = "narrow") {
    return new Je(e.value, { weekday: x }).format(h);
  }
  function _(h) {
    var x;
    return ((x = new Je(e.value, {
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
    const S = { ...m, ...C }, k = c(h, S).find((E) => E.type === x);
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
function ot(t) {
  const e = In({
    dir: A("ltr")
  });
  return $(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function zt(t) {
  const e = tt(), a = e == null ? void 0 : e.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${e == null ? void 0 : e.type.__name}`
  ), a == null || a.forEach((o) => {
    n[id(Es(o))] = (...s) => t(o, ...s);
  }), n;
}
let no = 0;
function il() {
  be((t) => {
    if (!nt)
      return;
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      e[0] ?? cs()
    ), document.body.insertAdjacentElement(
      "beforeend",
      e[1] ?? cs()
    ), no++, t(() => {
      no === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), no--;
    });
  });
}
function cs() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
function Ua(t) {
  return $(() => {
    var e;
    return pt(t) ? !!((e = Re(t)) != null && e.closest("form")) : !0;
  });
}
function se(t) {
  const e = tt(), a = Object.keys((e == null ? void 0 : e.type.props) ?? {}).reduce((o, s) => {
    const r = (e == null ? void 0 : e.type.props[s]).default;
    return r !== void 0 && (o[s] = r), o;
  }, {}), n = Ps(t);
  return $(() => {
    const o = {}, s = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      o[Es(r)] = s[r];
    }), Object.keys({ ...a, ...o }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function X(t, e) {
  const a = se(t), n = e ? zt(e) : {};
  return $(() => ({
    ...a.value,
    ...n
  }));
}
function N() {
  const t = tt(), e = A(), a = $(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = e.value) == null ? void 0 : r.$el.nodeName) ? (i = e.value) == null ? void 0 : i.$el.nextElementSibling : Re(e);
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
    e.value = r, !(r instanceof Element || !r) && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => r.$el
    }), t.exposed = o);
  }
  return { forwardRef: s, currentRef: e, currentElement: a };
}
function Gc(t, e) {
  const a = kr(!1, 300), n = A(null), o = kc();
  function s() {
    n.value = null, a.value = !1;
  }
  function r(i, d) {
    const u = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = Yc(c, u.getBoundingClientRect()), _ = qc(c, p), m = Jc(d.getBoundingClientRect()), w = Zc([..._, ...m]);
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
        const m = c.target, w = { x: c.clientX, y: c.clientY }, h = ((p = t.value) == null ? void 0 : p.contains(m)) || ((_ = e.value) == null ? void 0 : _.contains(m)), x = !Qc(w, n.value), C = !!m.closest("[data-grace-area-trigger]");
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
function Yc(t, e) {
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
function qc(t, e, a = 5) {
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
function Jc(t) {
  const { top: e, right: a, bottom: n, left: o } = t;
  return [
    { x: o, y: e },
    { x: a, y: e },
    { x: a, y: n },
    { x: o, y: n }
  ];
}
function Qc(t, e) {
  const { x: a, y: n } = t;
  let o = !1;
  for (let s = 0, r = e.length - 1; s < e.length; r = s++) {
    const i = e[s].x, d = e[s].y, u = e[r].x, c = e[r].y;
    d > n != c > n && a < (u - i) * (n - d) / (c - d) + i && (o = !o);
  }
  return o;
}
function Zc(t) {
  const e = t.slice();
  return e.sort((a, n) => a.x < n.x ? -1 : a.x > n.x ? 1 : a.y < n.y ? -1 : a.y > n.y ? 1 : 0), Xc(e);
}
function Xc(t) {
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
var ep = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, Yt = /* @__PURE__ */ new WeakMap(), Xa = /* @__PURE__ */ new WeakMap(), en = {}, oo = 0, Or = function(t) {
  return t && (t.host || Or(t.parentNode));
}, tp = function(t, e) {
  return e.map(function(a) {
    if (t.contains(a))
      return a;
    var n = Or(a);
    return n && t.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, ap = function(t, e, a, n) {
  var o = tp(e, Array.isArray(t) ? t : [t]);
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
          var m = _.getAttribute(n), w = m !== null && m !== "false", h = (Yt.get(_) || 0) + 1, x = (s.get(_) || 0) + 1;
          Yt.set(_, h), s.set(_, x), r.push(_), h === 1 && w && Xa.set(_, !0), x === 1 && _.setAttribute(a, "true"), w || _.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", _, C);
        }
    });
  };
  return c(e), i.clear(), oo++, function() {
    r.forEach(function(p) {
      var _ = Yt.get(p) - 1, m = s.get(p) - 1;
      Yt.set(p, _), s.set(p, m), _ || (Xa.has(p) || p.removeAttribute(n), Xa.delete(p)), m || p.removeAttribute(a);
    }), oo--, oo || (Yt = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ new WeakMap(), Xa = /* @__PURE__ */ new WeakMap(), en = {});
  };
}, np = function(t, e, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), o = ep(t);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), ap(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function Wa(t) {
  let e;
  ee(() => Re(t), (a) => {
    a ? e = np(a) : e && e();
  }), Et(() => {
    e && e();
  });
}
let op = 0;
function we(t, e = "radix") {
  const a = In({ useId: void 0 });
  return Ml.useId ? `${e}-${Ml.useId()}` : a.useId ? `${e}-${a.useId()}` : `${e}-${++op}`;
}
function Ar(t) {
  const e = A(), a = $(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.width) ?? 0;
  }), n = $(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.height) ?? 0;
  });
  return ue(() => {
    const o = Re(t);
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
function lp(t, e) {
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
const sp = "data-item-text";
function dl(t) {
  const e = kr("", 1e3);
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
          textValue: ((_ = (p.querySelector(`[${sp}]`) ?? p).textContent) == null ? void 0 : _.trim()) ?? ""
        };
      }), i = r.find((p) => p.ref === s), d = r.map((p) => p.textValue), u = ip(d, e.value, i == null ? void 0 : i.textValue), c = r.find((p) => p.textValue === u);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      e.value = "";
    }
  };
}
function rp(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
function ip(t, e, a) {
  const n = e.length > 1 && Array.from(e).every((i) => i === e[0]) ? e[0] : e, o = a ? t.indexOf(a) : -1;
  let s = rp(t, Math.max(o, 0));
  n.length === 1 && (s = s.filter((i) => i !== a));
  const r = s.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return r !== a ? r : void 0;
}
function Mr() {
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
const ul = y({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(t, { attrs: e, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const s = Tn(a.default()), r = s.findIndex((c) => c.type !== Ts);
      if (r === -1)
        return s;
      const i = s[r];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? P(e, i.props) : e;
      e.class && (o = i.props) != null && o.class && delete i.props.class;
      const u = dd(i, d);
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => Ze(n, e) : n !== "template" ? () => Ze(t.as, e, { default: a.default }) : () => Ze(ul, e, { default: a.default });
  }
});
function fa() {
  const t = A(), e = $(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (n = t.value) == null ? void 0 : n.$el.nextElementSibling : Re(t);
  });
  return {
    primitiveElement: t,
    currentElement: e
  };
}
const [Tr, dp] = ne("CollapsibleRoot"), up = /* @__PURE__ */ y({
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
    const n = t, o = fe(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = fe(n, "disabled");
    return dp({
      contentId: "",
      disabled: s,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), e({ open: o }), N(), (r, i) => (v(), g(l(L), {
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
}), cp = /* @__PURE__ */ y({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    N();
    const a = Tr();
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
function pp(t, e) {
  var a;
  const n = A({}), o = A("none"), s = A(t), r = t.value ? "mounted" : "unmounted";
  let i;
  const d = ((a = e.value) == null ? void 0 : a.ownerDocument.defaultView) ?? Na, { state: u, dispatch: c } = lp(r, {
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
    if (nt) {
      const S = new CustomEvent(x, { bubbles: !1, cancelable: !1 });
      (C = e.value) == null || C.dispatchEvent(S);
    }
  };
  ee(
    t,
    async (x, C) => {
      var S;
      const k = C !== x;
      if (await le(), k) {
        const E = o.value, O = tn(e.value);
        x ? (c("MOUNT"), p("enter"), O === "none" && p("after-enter")) : O === "none" || ((S = n.value) == null ? void 0 : S.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : C && E !== O ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const _ = (x) => {
    const C = tn(e.value), S = C.includes(
      x.animationName
    ), k = u.value === "mounted" ? "enter" : "leave";
    if (x.target === e.value && S && (p(`after-${k}`), c("ANIMATION_END"), !s.value)) {
      const E = e.value.style.animationFillMode;
      e.value.style.animationFillMode = "forwards", i = d == null ? void 0 : d.setTimeout(() => {
        var O;
        ((O = e.value) == null ? void 0 : O.style.animationFillMode) === "forwards" && (e.value.style.animationFillMode = E);
      });
    }
    x.target === e.value && C === "none" && c("ANIMATION_END");
  }, m = (x) => {
    x.target === e.value && (o.value = tn(e.value));
  }, w = ee(
    e,
    (x, C) => {
      x ? (n.value = getComputedStyle(x), x.addEventListener("animationstart", m), x.addEventListener("animationcancel", _), x.addEventListener("animationend", _)) : (c("ANIMATION_END"), d == null || d.clearTimeout(i), C == null || C.removeEventListener("animationstart", m), C == null || C.removeEventListener("animationcancel", _), C == null || C.removeEventListener("animationend", _));
    },
    { immediate: !0 }
  ), h = ee(u, () => {
    const x = tn(e.value);
    o.value = u.value === "mounted" ? x : "none";
  });
  return Et(() => {
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
const Me = y({
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
    const { present: o, forceMount: s } = ve(t), r = A(), { isPresent: i } = pp(o, r);
    a({ present: i });
    let d = e.default({ present: i });
    d = Tn(d || []);
    const u = tt();
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
        const p = Re(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
}), fp = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Tr();
    a.contentId || (a.contentId = we(void 0, "radix-vue-collapsible-content"));
    const n = A(), { forwardRef: o, currentElement: s } = N(), r = A(0), i = A(0), d = $(() => a.open.value), u = A(d.value), c = A();
    return ee(
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
    ), ue(() => {
      requestAnimationFrame(() => {
        u.value = !1;
      });
    }), (p, _) => (v(), g(l(Me), {
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
function Ir({ type: t, defaultValue: e, modelValue: a }) {
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
function vp({ type: t, defaultValue: e, modelValue: a }) {
  return t || Ir({ type: t, defaultValue: e, modelValue: a });
}
function mp({ type: t, defaultValue: e }) {
  return e !== void 0 ? e : t === "single" ? void 0 : [];
}
function hp(t, e) {
  const a = A(vp(t)), n = fe(t, "modelValue", e, {
    defaultValue: mp(t),
    passive: t.modelValue === void 0,
    deep: !0
  });
  ee(
    () => [t.type, t.modelValue, t.defaultValue],
    () => {
      const r = Ir(t);
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
const [Vn, gp] = ne("AccordionRoot"), yp = /* @__PURE__ */ y({
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
    const a = t, n = e, { dir: o, disabled: s } = ve(a), r = ot(o), { modelValue: i, changeModelValue: d, isSingle: u } = hp(a, n), { forwardRef: c, currentElement: p } = N();
    return gp({
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
}), [cl, bp] = ne("AccordionItem"), _p = /* @__PURE__ */ y({
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
    const { currentRef: d, currentElement: u } = N();
    bp({
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
      Dr(
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
    return (p, _) => (v(), g(l(up), {
      "data-orientation": l(n).orientation,
      "data-disabled": r.value,
      "data-state": i.value,
      disabled: s.value,
      open: o.value,
      as: a.as,
      "as-child": a.asChild,
      onKeydown: We(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: f(() => [
        b(p.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), wp = /* @__PURE__ */ y({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Vn(), n = cl();
    return N(), (o, s) => (v(), g(l(fp), {
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
}), xp = /* @__PURE__ */ y({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(t) {
    const e = t, a = Vn(), n = cl();
    return N(), (o, s) => (v(), g(l(L), {
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
}), $p = /* @__PURE__ */ y({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Vn(), n = cl();
    n.triggerId || (n.triggerId = we(void 0, "radix-vue-accordion-trigger"));
    function o() {
      const s = a.isSingle.value && n.open.value && !a.collapsible;
      n.disabled.value || s || a.changeModelValue(n.value.value);
    }
    return (s, r) => (v(), g(l(cp), {
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
}), [lt, Cp] = ne("DialogRoot"), Vr = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = fe(a, "open", e, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = A(), s = A(), { modal: r } = ve(a);
    return Cp({
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
}), Rr = /* @__PURE__ */ y({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = lt(), { forwardRef: n, currentElement: o } = N();
    return a.contentId || (a.contentId = we(void 0, "radix-vue-dialog-content")), ue(() => {
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
    const e = rl();
    return (a, n) => l(e) || a.forceMount ? (v(), g(Sn, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      b(a.$slots, "default")
    ], 8, ["to", "disabled"])) : Z("", !0);
  }
}), pl = /* @__PURE__ */ y({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Ka), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kp = "dismissableLayer.pointerDownOutside", Bp = "dismissableLayer.focusOutside";
function Fr(t, e) {
  const a = e.closest(
    "[data-dismissable-layer]"
  ), n = t.dataset.dismissableLayer === "" ? t : t.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    t.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function Dp(t, e) {
  var a;
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = A(!1), s = A(() => {
  });
  return be((r) => {
    if (!nt)
      return;
    const i = async (u) => {
      const c = u.target;
      if (e != null && e.value) {
        if (Fr(e.value, c)) {
          o.value = !1;
          return;
        }
        if (u.target && !o.value) {
          let p = function() {
            ol(
              kp,
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
function Sp(t, e) {
  var a;
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = A(!1);
  return be((s) => {
    if (!nt)
      return;
    const r = async (i) => {
      e != null && e.value && (await le(), !(!e.value || Fr(e.value, i.target)) && i.target && !o.value && ol(
        Bp,
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
const ze = Is({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), va = /* @__PURE__ */ y({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: s } = N(), r = $(
      () => {
        var w;
        return ((w = s.value) == null ? void 0 : w.ownerDocument) ?? globalThis.document;
      }
    ), i = $(() => ze.layersRoot), d = $(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), u = $(() => ze.layersWithOutsidePointerEventsDisabled.size > 0), c = $(() => {
      const w = Array.from(i.value), [h] = [...ze.layersWithOutsidePointerEventsDisabled].slice(-1), x = w.indexOf(h);
      return d.value >= x;
    }), p = Dp(async (w) => {
      const h = [...ze.branches].some(
        (x) => x == null ? void 0 : x.contains(w.target)
      );
      !c.value || h || (n("pointerDownOutside", w), n("interactOutside", w), await le(), w.defaultPrevented || n("dismiss"));
    }, s), _ = Sp((w) => {
      [...ze.branches].some(
        (h) => h == null ? void 0 : h.contains(w.target)
      ) || (n("focusOutside", w), n("interactOutside", w), w.defaultPrevented || n("dismiss"));
    }, s);
    sl("Escape", (w) => {
      d.value === i.value.size - 1 && (n("escapeKeyDown", w), w.defaultPrevented || n("dismiss"));
    });
    let m;
    return be((w) => {
      s.value && (a.disableOutsidePointerEvents && (ze.layersWithOutsidePointerEventsDisabled.size === 0 && (m = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), ze.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), w(() => {
        a.disableOutsidePointerEvents && ze.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = m);
      }));
    }), be((w) => {
      w(() => {
        s.value && (i.value.delete(s.value), ze.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (w, h) => (v(), g(l(L), {
      ref: l(o),
      "as-child": w.asChild,
      as: w.as,
      "data-dismissable-layer": "",
      style: Pt({
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
}), Pp = /* @__PURE__ */ y({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = N();
    return ue(() => {
      ze.branches.add(n.value);
    }), Et(() => {
      ze.branches.delete(n.value);
    }), (o, s) => (v(), g(l(L), P({ ref: l(a) }, e), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lo = "focusScope.autoFocusOnMount", so = "focusScope.autoFocusOnUnmount", ps = { bubbles: !1, cancelable: !0 };
function fn(t, { select: e = !1 } = {}) {
  const a = xe();
  for (const n of t)
    if (xt(n, { select: e }), xe() !== a)
      return !0;
}
function Ep(t) {
  const e = fl(t), a = fs(e, t), n = fs(e.reverse(), t);
  return [a, n];
}
function fl(t) {
  const e = [], a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) e.push(a.currentNode);
  return e;
}
function fs(t, e) {
  for (const a of t)
    if (!Op(a, { upTo: e }))
      return a;
}
function Op(t, { upTo: e }) {
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
function Ap(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function xt(t, { select: e = !1 } = {}) {
  if (t && t.focus) {
    const a = xe();
    t.focus({ preventScroll: !0 }), t !== a && Ap(t) && e && t.select();
  }
}
const Mp = Bc(() => A([]));
function Tp() {
  const t = Mp();
  return {
    add(e) {
      const a = t.value[0];
      e !== a && (a == null || a.pause()), t.value = vs(t.value, e), t.value.unshift(e);
    },
    remove(e) {
      var a;
      t.value = vs(t.value, e), (a = t.value[0]) == null || a.resume();
    }
  };
}
function vs(t, e) {
  const a = [...t], n = a.indexOf(e);
  return n !== -1 && a.splice(n, 1), a;
}
function Ip(t) {
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
    const a = t, n = e, { currentRef: o, currentElement: s } = N(), r = A(null), i = Tp(), d = Is({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    be((c) => {
      if (!nt)
        return;
      const p = s.value;
      if (!a.trapped)
        return;
      function _(x) {
        if (d.paused || !p)
          return;
        const C = x.target;
        p.contains(C) ? r.value = C : xt(r.value, { select: !0 });
      }
      function m(x) {
        if (d.paused || !p)
          return;
        const C = x.relatedTarget;
        C !== null && (p.contains(C) || xt(r.value, { select: !0 }));
      }
      function w(x) {
        p.contains(r.value) || xt(p);
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
        const m = new CustomEvent(lo, ps);
        p.addEventListener(lo, (w) => n("mountAutoFocus", w)), p.dispatchEvent(m), m.defaultPrevented || (fn(Ip(fl(p)), {
          select: !0
        }), xe() === _ && xt(p));
      }
      c(() => {
        p.removeEventListener(lo, (h) => n("mountAutoFocus", h));
        const m = new CustomEvent(so, ps), w = (h) => {
          n("unmountAutoFocus", h);
        };
        p.addEventListener(so, w), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || xt(_ ?? document.body, { select: !0 }), p.removeEventListener(so, w), i.remove(d);
        }, 0);
      });
    });
    function u(c) {
      if (!a.loop && !a.trapped || d.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, _ = xe();
      if (p && _) {
        const m = c.currentTarget, [w, h] = Ep(m);
        w && h ? !c.shiftKey && _ === h ? (c.preventDefault(), a.loop && xt(w, { select: !0 })) : c.shiftKey && _ === w && (c.preventDefault(), a.loop && xt(h, { select: !0 })) : _ === m && c.preventDefault();
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
}), Vp = "menu.itemSelect", Co = ["Enter", " "], Rp = ["ArrowDown", "PageUp", "Home"], Lr = ["ArrowUp", "PageDown", "End"], Fp = [...Rp, ...Lr], Lp = {
  ltr: [...Co, "ArrowRight"],
  rtl: [...Co, "ArrowLeft"]
}, Np = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function vl(t) {
  return t ? "open" : "closed";
}
function Cn(t) {
  return t === "indeterminate";
}
function ml(t) {
  return Cn(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
function ko(t) {
  const e = xe();
  for (const a of t)
    if (a === e || (a.focus(), xe() !== e))
      return;
}
function zp(t, e) {
  const { x: a, y: n } = t;
  let o = !1;
  for (let s = 0, r = e.length - 1; s < e.length; r = s++) {
    const i = e[s].x, d = e[s].y, u = e[r].x, c = e[r].y;
    d > n != c > n && a < (u - i) * (n - d) / (c - d) + i && (o = !o);
  }
  return o;
}
function Up(t, e) {
  if (!e)
    return !1;
  const a = { x: t.clientX, y: t.clientY };
  return zp(a, e);
}
function Ia(t) {
  return t.pointerType === "mouse";
}
const Wp = "DialogTitle", Kp = "DialogContent";
function Hp({
  titleName: t = Wp,
  contentName: e = Kp,
  componentLink: a = "dialog.html#title",
  titleId: n,
  descriptionId: o,
  contentElement: s
}) {
  const r = `Warning: \`${e}\` requires a \`${t}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${a}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${e}.`;
  ue(() => {
    var d;
    document.getElementById(n) || console.warn(r);
    const u = (d = s.value) == null ? void 0 : d.getAttribute("aria-describedby");
    o && u && (document.getElementById(o) || console.warn(i));
  });
}
const Nr = /* @__PURE__ */ y({
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
    const a = t, n = e, o = lt(), { forwardRef: s, currentElement: r } = N();
    return o.titleId || (o.titleId = we(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = we(void 0, "radix-vue-dialog-description")), ue(() => {
      o.contentElement = r, xe() !== document.body && (o.triggerElement.value = xe());
    }), process.env.NODE_ENV !== "production" && Hp({
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
        B(l(va), P({
          id: l(o).contentId,
          ref: l(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(o).descriptionId,
          "aria-labelledby": l(o).titleId,
          "data-state": l(vl)(l(o).open.value)
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
}), jp = /* @__PURE__ */ y({
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
    const a = t, n = e, o = lt(), s = zt(n), { forwardRef: r, currentElement: i } = N();
    return Wa(i), (d, u) => (v(), g(Nr, P({ ...a, ...l(s) }, {
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
}), Gp = /* @__PURE__ */ y({
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
    const a = t, n = zt(e);
    N();
    const o = lt(), s = A(!1), r = A(!1);
    return (i, d) => (v(), g(Nr, P({ ...a, ...l(n) }, {
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
}), hl = /* @__PURE__ */ y({
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
    const a = t, n = e, o = lt(), s = zt(n), { forwardRef: r } = N();
    return (i, d) => (v(), g(l(Me), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), g(jp, P({
          key: 0,
          ref: l(r)
        }, { ...a, ...l(s), ...i.$attrs }), {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), g(Gp, P({
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
}), Yp = /* @__PURE__ */ y({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = lt();
    return za(!0), N(), (a, n) => (v(), g(l(L), {
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
}), gl = /* @__PURE__ */ y({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = lt(), { forwardRef: a } = N();
    return (n, o) => {
      var s;
      return (s = l(e)) != null && s.modal.value ? (v(), g(l(Me), {
        key: 0,
        present: n.forceMount || l(e).open.value
      }, {
        default: f(() => [
          B(Yp, P(n.$attrs, {
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
}), Ha = /* @__PURE__ */ y({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    N();
    const a = lt();
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
}), zr = /* @__PURE__ */ y({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(t) {
    const e = t, a = lt();
    return N(), (n, o) => (v(), g(l(L), P(e, {
      id: l(a).titleId
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ur = /* @__PURE__ */ y({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(t) {
    const e = t;
    N();
    const a = lt();
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
function qp(t) {
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
function Jp(t, e) {
  const a = e(t), n = a.compare(t), o = {};
  return n >= 7 && (o.day = 1), n >= Aa(t) && (o.month = 1), a.set({ ...o });
}
function Qp(t, e) {
  const a = e(t), n = t.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= Aa(t) && (o.month = 13), a.set({ ...o });
}
function Zp(t, e) {
  return e(t);
}
function Xp(t, e) {
  return e(t);
}
function Wr(t) {
  const e = Er(t.locale.value), a = $(() => {
    const h = {
      calendar: t.placeholder.value.calendar.identifier
    };
    return t.placeholder.value.calendar.identifier === "gregory" && t.placeholder.value.era === "BC" && (h.era = "short"), h;
  }), n = A(At({
    dateObj: t.placeholder.value,
    weekStartsOn: t.weekStartsOn.value,
    locale: t.locale.value,
    fixedWeeks: t.fixedWeeks.value,
    numberOfMonths: t.numberOfMonths.value
  })), o = $(() => n.value.map((h) => h.value));
  function s(h) {
    return !o.value.some((x) => Il(h, x));
  }
  const r = (h = "month", x) => {
    if (!t.maxValue.value || !n.value.length)
      return !1;
    if (t.disabled.value)
      return !0;
    const C = n.value[n.value.length - 1].value;
    if (x || t.nextPage.value) {
      const k = Jp(C, x || t.nextPage.value);
      return Pa(k, t.maxValue.value);
    }
    if (h === "year") {
      const k = C.add({ years: 1 }).set({ day: 1, month: 1 });
      return Pa(k, t.maxValue.value);
    }
    const S = C.add({ months: 1 }).set({ day: 1 });
    return Pa(S, t.maxValue.value);
  }, i = (h = "month", x) => {
    if (!t.minValue.value || !n.value.length)
      return !1;
    if (t.disabled.value)
      return !0;
    const C = n.value[0].value;
    if (x || t.prevPage.value) {
      const k = Qp(C, x || t.prevPage.value);
      return kt(k, t.minValue.value);
    }
    if (h === "year") {
      const k = C.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return kt(k, t.minValue.value);
    }
    const S = C.subtract({ months: 1 }).set({ day: 35 });
    return kt(S, t.minValue.value);
  };
  function d(h) {
    var x;
    return !!((x = t.isDateDisabled) != null && x.call(t, h) || t.disabled.value || t.maxValue.value && Pa(h, t.maxValue.value) || t.minValue.value && kt(h, t.minValue.value));
  }
  const u = (h) => {
    var x;
    return !!((x = t.isDateUnavailable) != null && x.call(t, h));
  }, c = $(() => n.value.length ? n.value[0].rows[0].map((h) => e.dayOfWeek(Ve(h), t.weekdayFormat.value)) : []), p = (h = "month", x) => {
    const C = n.value[0].value;
    if (x || t.nextPage.value) {
      const E = Zp(C, x || t.nextPage.value), O = At({
        dateObj: E,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = O;
      const V = {};
      if (!x) {
        const M = O[0].value.compare(C);
        M >= Aa(C) && (V.day = 1), M >= 365 && (V.month = 1);
      }
      t.placeholder.value = O[0].value.set({ ...V });
      return;
    }
    const S = h === "month" ? C.add({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : C.add({ years: 1 }), k = At({
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
      const E = Xp(C, x || t.prevPage.value), O = At({
        dateObj: E,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = O;
      const V = {};
      if (!x) {
        const M = C.compare(O[0].value);
        M >= Aa(C) && (V.day = 1), M >= 365 && (V.month = 1);
      }
      t.placeholder.value = O[0].value.set({ ...V });
      return;
    }
    const S = h === "month" ? C.subtract({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : C.subtract({ years: 1 }), k = At({
      dateObj: S,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    });
    n.value = k, t.placeholder.value = k[0].value.set({ day: 1 });
  };
  ee(t.placeholder, (h) => {
    o.value.some((x) => Il(x, h)) || (n.value = At({
      dateObj: h,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    }));
  }), ee([t.locale, t.weekStartsOn, t.fixedWeeks, t.numberOfMonths], () => {
    n.value = At({
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
      const O = n.value[0].value;
      return `${e.fullMonthAndYear(Ve(O), a.value)}`;
    }
    const h = Ve(n.value[0].value), x = Ve(n.value[n.value.length - 1].value), C = e.fullMonth(h, a.value), S = e.fullMonth(x, a.value), k = e.fullYear(h, a.value), E = e.fullYear(x, a.value);
    return k === E ? `${C} - ${S} ${E}` : `${C} ${k} - ${S} ${E}`;
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
const ef = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, tf = {
  role: "heading",
  "aria-level": "2"
}, [ma, af] = ne("CalendarRoot"), Kr = /* @__PURE__ */ y({
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
      defaultValue: E,
      nextPage: O,
      prevPage: V,
      dir: M
    } = ve(a), { primitiveElement: U, currentElement: z } = fa(), D = ot(M), I = fe(a, "modelValue", n, {
      defaultValue: E.value,
      passive: a.modelValue === void 0
    }), F = wr({
      defaultPlaceholder: a.placeholder,
      defaultValue: I.value,
      locale: a.locale
    }), Y = fe(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? F.copy(),
      passive: a.placeholder === void 0
    });
    function G(ie) {
      Y.value = ie.copy();
    }
    const {
      fullCalendarLabel: ae,
      headingValue: pe,
      isDateDisabled: ge,
      isDateUnavailable: ye,
      isNextButtonDisabled: j,
      isPrevButtonDisabled: oe,
      weekdays: de,
      isOutsideVisibleView: Fe,
      nextPage: Ye,
      prevPage: ht,
      formatter: gt,
      grid: $a
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
      nextPage: O,
      prevPage: V
    }), {
      isInvalid: Te,
      isDateSelected: Pe
    } = qp({
      date: I,
      isDateDisabled: ge,
      isDateUnavailable: ye
    });
    ee(I, (ie) => {
      if (Array.isArray(ie) && ie.length) {
        const De = ie[ie.length - 1];
        De && !Qe(Y.value, De) && G(De);
      } else !Array.isArray(ie) && ie && !Qe(Y.value, ie) && G(ie);
    });
    function qe(ie) {
      if (_.value) {
        if (!I.value)
          I.value = [ie.copy()];
        else if (Array.isArray(I.value)) {
          if (I.value.findIndex((De) => Be(De, ie)) === -1)
            I.value = [...I.value, ie];
          else if (!x.value) {
            const De = I.value.filter((st) => !Be(st, ie));
            if (!De.length) {
              Y.value = ie.copy(), I.value = void 0;
              return;
            }
            I.value = De.map((st) => st.copy());
          }
        }
      } else {
        if (!I.value) {
          I.value = ie.copy();
          return;
        }
        !x.value && Qe(I.value, ie) ? (Y.value = ie.copy(), I.value = void 0) : I.value = ie.copy();
      }
    }
    return ue(() => {
      i.value && xr(z.value);
    }), af({
      isDateUnavailable: ye,
      dir: D,
      isDateDisabled: ge,
      locale: o,
      formatter: gt,
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
      fullCalendarLabel: ae,
      headingValue: pe,
      isInvalid: Te,
      isDateSelected: Pe,
      isNextButtonDisabled: j,
      isPrevButtonDisabled: oe,
      isOutsideVisibleView: Fe,
      nextPage: Ye,
      prevPage: ht,
      parentElement: z,
      onPlaceholderChange: G,
      onDateChange: qe
    }), (ie, De) => (v(), g(l(L), {
      ref_key: "primitiveElement",
      ref: U,
      as: ie.as,
      "as-child": ie.asChild,
      role: "application",
      "aria-label": l(ae),
      "data-readonly": l(r) ? "" : void 0,
      "data-disabled": l(s) ? "" : void 0,
      "data-invalid": l(Te) ? "" : void 0,
      dir: l(D)
    }, {
      default: f(() => [
        b(ie.$slots, "default", {
          date: l(Y),
          grid: l($a),
          weekDays: l(de),
          weekStartsOn: l(u),
          locale: l(o),
          fixedWeeks: l(p)
        }),
        re("div", ef, [
          re("div", tf, Q(l(ae)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), nf = /* @__PURE__ */ y({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), of = /* @__PURE__ */ y({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = ma();
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
}), lf = /* @__PURE__ */ y({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(t) {
    const e = t, a = ma(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
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
}), sf = /* @__PURE__ */ y({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(t) {
    const e = ma();
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
}), rf = /* @__PURE__ */ y({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), df = /* @__PURE__ */ y({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = $(() => n.disabled.value || n.isNextButtonDisabled(e.step, e.nextPage)), n = ma();
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
}), uf = /* @__PURE__ */ y({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = $(() => n.disabled.value || n.isPrevButtonDisabled(e.step, e.prevPage)), n = ma();
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
}), cf = /* @__PURE__ */ y({
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
}), pf = /* @__PURE__ */ y({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ff = /* @__PURE__ */ y({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vf = /* @__PURE__ */ y({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Mr(), n = ma(), { primitiveElement: o, currentElement: s } = fa(), r = $(() => e.day.day.toLocaleString(n.locale.value)), i = $(() => n.formatter.custom(Ve(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), d = $(() => n.isDateDisabled(e.day)), u = $(
      () => {
        var k;
        return (k = n.isDateUnavailable) == null ? void 0 : k.call(n, e.day);
      }
    ), c = $(() => Ks(e.day, ft())), p = $(() => !Ws(e.day, e.month)), _ = $(
      () => n.isOutsideVisibleView(e.day)
    ), m = $(() => !n.disabled.value && Be(e.day, n.placeholder.value)), w = $(() => n.isDateSelected(e.day)), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function x(k) {
      var E;
      n.readonly.value || n.isDateDisabled(k) || (E = n.isDateUnavailable) != null && E.call(n, k) || n.onDateChange(k);
    }
    function C() {
      x(e.day);
    }
    function S(k) {
      k.preventDefault(), k.stopPropagation();
      const E = n.parentElement.value, O = E ? Array.from(E.querySelectorAll(h)) : [];
      let V = O.indexOf(s.value);
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
      if (V >= 0 && V < O.length) {
        O[V].focus();
        return;
      }
      if (V < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), le(() => {
          const z = E ? Array.from(E.querySelectorAll(h)) : [];
          z[z.length - Math.abs(V)].focus();
        });
        return;
      }
      if (V >= O.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), le(() => {
          (E ? Array.from(E.querySelectorAll(h)) : [])[V - O.length].focus();
        });
      }
    }
    return (k, E) => (v(), g(l(L), P({
      ref_key: "primitiveElement",
      ref: o
    }, e, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": p.value || d.value || u.value ? !0 : void 0,
      "data-selected": w.value ? !0 : void 0,
      "data-value": k.day.toString(),
      "data-disabled": d.value || p.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": c.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": _.value ? "" : void 0,
      "data-focused": m.value ? "" : void 0,
      tabindex: m.value ? 0 : p.value || d.value ? void 0 : -1,
      onClick: C,
      onKeydown: [
        We(S, ["up", "down", "left", "right", "space", "enter"]),
        E[0] || (E[0] = We(Ce(() => {
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
function Hr(t) {
  return kn(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
const mf = ["value", "checked", "name", "disabled", "required"], [hf, gf] = ne("CheckboxRoot"), yf = /* @__PURE__ */ y({
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
    const a = t, n = e, { disabled: o } = ve(a), s = fe(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    }), { forwardRef: r, currentElement: i } = N(), d = Ua(i), u = $(() => {
      var c;
      return a.id && i.value ? (c = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return gf({
      disabled: o,
      state: s
    }), (c, p) => (v(), R(J, null, [
      B(l(L), P(c.$attrs, {
        id: c.id,
        ref: l(r),
        role: "checkbox",
        "as-child": a.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": l(kn)(l(s)) ? "mixed" : l(s),
        "aria-required": !1,
        "aria-label": c.$attrs["aria-label"] || u.value,
        "data-state": l(Hr)(l(s)),
        "data-disabled": l(o) ? "" : void 0,
        disabled: l(o),
        onKeydown: We(Ce(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (_) => s.value = l(kn)(l(s)) ? !0 : !l(s))
      }), {
        default: f(() => [
          b(c.$slots, "default", { checked: l(s) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      l(d) ? (v(), R("input", {
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
      }, null, 8, mf)) : Z("", !0)
    ], 64));
  }
}), bf = /* @__PURE__ */ y({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e } = N(), a = hf();
    return (n, o) => (v(), g(l(Me), {
      present: n.forceMount || l(kn)(l(a).state.value) || l(a).state.value === !0
    }, {
      default: f(() => [
        B(l(L), P({
          ref: l(e),
          "data-state": l(Hr)(l(a).state.value),
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
}), [jr, _f] = ne("PopperRoot"), ha = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(t) {
    const e = A();
    return _f({
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
    const e = t, { forwardRef: a, currentElement: n } = N(), o = jr();
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
function wf(t) {
  return t !== null;
}
function xf(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      var a, n, o;
      const { placement: s, rects: r, middlewareData: i } = e, d = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, u = d ? 0 : t.arrowWidth, c = d ? 0 : t.arrowHeight, [p, _] = Bo(s), m = { start: "0%", center: "50%", end: "100%" }[_], w = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + u / 2, h = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + c / 2;
      let x = "", C = "";
      return p === "bottom" ? (x = d ? m : `${w}px`, C = `${-c}px`) : p === "top" ? (x = d ? m : `${w}px`, C = `${r.floating.height + c}px`) : p === "right" ? (x = `${-c}px`, C = d ? m : `${h}px`) : p === "left" && (x = `${r.floating.width + c}px`, C = d ? m : `${h}px`), { data: { x, y: C } };
    }
  };
}
function Bo(t) {
  const [e, a = "center"] = t.split("-");
  return [e, a];
}
const Gr = {
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
}, [k0, $f] = ne("PopperContent"), ra = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Rs({
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
    ...Gr
  }),
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = jr(), { forwardRef: s, currentElement: r } = N(), i = A(), d = A(), { width: u, height: c } = Ar(d), p = $(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), _ = $(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = $(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), w = $(() => ({
      padding: _.value,
      boundary: m.value.filter(wf),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), h = Cc(() => [
      pc({
        mainAxis: a.sideOffset + c.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && is({
        ...w.value
      }),
      a.avoidCollisions && fc({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? gc() : void 0,
        ...w.value
      }),
      !a.prioritizePosition && a.avoidCollisions && is({
        ...w.value
      }),
      vc({
        ...w.value,
        apply: ({ elements: D, rects: I, availableWidth: F, availableHeight: Y }) => {
          const { width: G, height: ae } = I.reference, pe = D.floating.style;
          pe.setProperty(
            "--radix-popper-available-width",
            `${F}px`
          ), pe.setProperty(
            "--radix-popper-available-height",
            `${Y}px`
          ), pe.setProperty(
            "--radix-popper-anchor-width",
            `${G}px`
          ), pe.setProperty(
            "--radix-popper-anchor-height",
            `${ae}px`
          );
        }
      }),
      d.value && _c({ element: d.value, padding: a.arrowPadding }),
      xf({
        arrowWidth: u.value,
        arrowHeight: c.value
      }),
      a.hideWhenDetached && mc({ strategy: "referenceHidden", ...w.value })
    ]), { floatingStyles: x, placement: C, isPositioned: S, middlewareData: k } = wc(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...D) => cc(...D, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: h
      }
    ), E = $(
      () => Bo(C.value)[0]
    ), O = $(
      () => Bo(C.value)[1]
    );
    md(() => {
      S.value && n("placed");
    });
    const V = $(
      () => {
        var D;
        return ((D = k.value.arrow) == null ? void 0 : D.centerOffset) !== 0;
      }
    ), M = A("");
    be(() => {
      r.value && (M.value = window.getComputedStyle(r.value).zIndex);
    });
    const U = $(() => {
      var D;
      return ((D = k.value.arrow) == null ? void 0 : D.x) ?? 0;
    }), z = $(() => {
      var D;
      return ((D = k.value.arrow) == null ? void 0 : D.y) ?? 0;
    });
    return $f({
      placedSide: E,
      onArrowChange: (D) => d.value = D,
      arrowX: U,
      arrowY: z,
      shouldHideArrow: V
    }), (D, I) => {
      var F, Y, G;
      return v(), R("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Pt({
          ...l(x),
          transform: l(S) ? l(x).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: M.value,
          "--radix-popper-transform-origin": [
            (F = l(k).transformOrigin) == null ? void 0 : F.x,
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
        B(l(L), P({ ref: l(s) }, D.$attrs, {
          "as-child": a.asChild,
          as: D.as,
          "data-side": E.value,
          "data-align": O.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l(S) ? void 0 : "none"
          }
        }), {
          default: f(() => [
            b(D.$slots, "default")
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
    return N(), (e, a) => (v(), g(l(L), {
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
}), Cf = /* @__PURE__ */ y({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(t) {
    const e = t, a = $(() => typeof e.value == "string" || typeof e.value == "number" || typeof e.value == "boolean" ? [{ name: e.name, value: e.value }] : typeof e.value == "object" && Array.isArray(e.value) ? e.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${o}][${e.name}][${s}]`, value: r })) : { name: `[${e.name}][${o}]`, value: n }) : e.value !== null && typeof e.value == "object" && !Array.isArray(e.value) ? Object.entries(e.value).map(([n, o]) => ({ name: `[${e.name}][${n}]`, value: o })) : []);
    return (n, o) => (v(!0), R(J, null, ce(a.value, (s) => (v(), g(ja, {
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
}), kf = "data-radix-vue-collection-item", [yl, Bf] = ne("CollectionProvider");
function bl(t = kf) {
  const e = A(/* @__PURE__ */ new Map()), a = A(), n = Bf({
    collectionRef: a,
    itemMap: e,
    attrName: t
  }), { getItems: o } = wl(n), s = $(() => Array.from(n.itemMap.value.values())), r = $(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: s, itemMapSize: r };
}
const _l = y({
  name: "CollectionSlot",
  setup(t, { slots: e }) {
    const a = yl(), { primitiveElement: n, currentElement: o } = fa();
    return ee(o, () => {
      a.collectionRef.value = o.value;
    }), () => Ze(ul, { ref: n }, e);
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
    const n = yl(), { primitiveElement: o, currentElement: s } = fa();
    return be((r) => {
      if (s.value) {
        const i = fd(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: t.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => Ze(ul, { ...a, [n.attrName]: "", ref: o }, e);
  }
});
function wl(t) {
  const e = t ?? yl();
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
const [ga, Df] = ne("ComboboxRoot"), Sf = /* @__PURE__ */ y({
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
    const a = t, n = e, { multiple: o, disabled: s, dir: r } = ve(a), i = ot(r), d = fe(a, "searchTerm", n, {
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
    async function _(j) {
      var oe, de;
      c.value = j, await le(), j ? (u.value && (Array.isArray(u.value) && o.value ? p.value = (oe = k().find((Fe) => {
        var Ye, ht;
        return ((ht = (Ye = Fe.ref) == null ? void 0 : Ye.dataset) == null ? void 0 : ht.state) === "checked";
      })) == null ? void 0 : oe.value : p.value = u.value), await le(), (de = h.value) == null || de.focus(), Y()) : (w.value = !1, a.resetSearchTermOnBlur && U("blur"));
    }
    function m(j) {
      if (Array.isArray(u.value) && o.value) {
        const oe = u.value.findIndex((Fe) => It(Fe, j)), de = [...u.value];
        oe === -1 ? de.push(j) : de.splice(oe, 1), u.value = de;
      } else
        u.value = j, _(!1);
    }
    const w = A(!1), h = A(), x = A(), { forwardRef: C, currentElement: S } = N(), { getItems: k, reactiveItems: E, itemMapSize: O } = bl("data-radix-vue-combobox-item"), V = A([]);
    ee(() => O.value, () => {
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
            var de;
            return oe.toLowerCase().includes((de = d.value) == null ? void 0 : de.toLowerCase());
          });
      }
      return V.value;
    });
    function U(j) {
      const oe = j === "blur" || j === "select" && a.resetSearchTermOnSelect;
      !o.value && u.value && !Array.isArray(u.value) ? a.displayValue ? d.value = a.displayValue(u.value) : typeof u.value != "object" ? d.value = u.value.toString() : oe && (d.value = "") : oe && (d.value = "");
    }
    const z = $(() => M.value.findIndex((j) => It(j, p.value))), D = $(() => {
      var j;
      return (j = E.value.find((oe) => It(oe.value, p.value))) == null ? void 0 : j.ref;
    }), I = $(() => JSON.stringify(u.value));
    ee(I, async () => {
      await le(), await le(), U("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), ee(() => [M.value.length, d.value.length], async ([j, oe], [de, Fe]) => {
      await le(), await le(), j && (Fe > oe || z.value === -1) && (p.value = M.value[0]);
    });
    const F = Ua(S);
    function Y() {
      var j;
      D.value instanceof Element && ((j = D.value) == null || j.scrollIntoView({ block: "nearest" }));
    }
    function G() {
      D.value instanceof Element && D.value.focus && D.value.focus();
    }
    const ae = A(!1);
    function pe() {
      ae.value = !0;
    }
    function ge() {
      requestAnimationFrame(() => {
        ae.value = !1;
      });
    }
    async function ye(j) {
      var oe;
      M.value.length && p.value && D.value instanceof Element && (j.preventDefault(), j.stopPropagation(), ae.value || (oe = D.value) == null || oe.click());
    }
    return Df({
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
      selectedElement: D,
      onInputElementChange: (j) => h.value = j,
      onInputNavigation: async (j) => {
        const oe = z.value;
        oe === 0 && j === "up" || oe === M.value.length - 1 && j === "down" || (oe === -1 && M.value.length || j === "home" ? p.value = M.value[0] : j === "end" ? p.value = M.value[M.value.length - 1] : p.value = M.value[j === "up" ? oe - 1 : oe + 1], await le(), Y(), G(), le(() => {
          var de;
          return (de = h.value) == null ? void 0 : de.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: ye,
      onCompositionEnd: ge,
      onCompositionStart: pe,
      selectedValue: p,
      onSelectedValueChange: (j) => p.value = j,
      parentElement: S,
      contentElement: x,
      onContentElementChange: (j) => x.value = j
    }), (j, oe) => (v(), g(l(ha), null, {
      default: f(() => [
        B(l(L), P({
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
            l(F) && a.name ? (v(), g(l(Cf), {
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
}), Pf = /* @__PURE__ */ y({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(t) {
    const e = t, a = ga(), { forwardRef: n, currentElement: o } = N();
    ue(() => {
      const c = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      c && (a.onInputElementChange(c), setTimeout(() => {
        e.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const s = $(() => e.disabled || a.disabled.value || !1), r = A();
    sd(() => {
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
        We(Ce(i, ["prevent"]), ["down", "up"]),
        We(l(a).onInputEnter, ["enter"]),
        We(Ce(d, ["prevent"]), ["home", "end"])
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
}), [Yr, Ef] = ne("ComboboxGroup"), Of = /* @__PURE__ */ y({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { currentRef: a, currentElement: n } = N(), o = we(void 0, "radix-vue-combobox-group"), s = ga(), r = A(!1);
    function i() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!d.length;
    }
    return Rc(n, () => {
      le(() => {
        i();
      });
    }, { childList: !0 }), ee(() => s.searchTerm.value, () => {
      le(() => {
        i();
      });
    }, { immediate: !0 }), Ef({
      id: o
    }), (d, u) => da((v(), g(l(L), P(e, {
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
      [zo, r.value]
    ]);
  }
}), Af = /* @__PURE__ */ y({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    N();
    const a = Yr({ id: "" });
    return (n, o) => (v(), g(l(L), P(e, {
      id: l(a).id
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [B0, Mf] = ne("ComboboxContent"), Tf = /* @__PURE__ */ y({
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
    const a = t, n = e, { position: o } = ve(a), s = ga();
    za(a.bodyLock);
    const { forwardRef: r, currentElement: i } = N();
    Wa(s.parentElement);
    const d = $(() => a.position === "popper" ? a : {}), u = se(d.value);
    function c(_) {
      s.onSelectedValueChange("");
    }
    ue(() => {
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
    return Mf({ position: o }), (_, m) => (v(), g(l(_l), null, {
      default: f(() => [
        _.dismissable ? (v(), g(l(va), {
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
            (v(), g(Oe(l(o) === "popper" ? l(ra) : l(L)), P({ ..._.$attrs, ...l(u) }, {
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
        }, 8, ["disable-outside-pointer-events"])) : (v(), g(Oe(l(o) === "popper" ? l(ra) : l(L)), P({ key: 1 }, { ..._.$attrs, ...d.value }, {
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
}), If = /* @__PURE__ */ y({
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
    const a = X(t, e), { forwardRef: n } = N(), o = ga();
    return o.contentId || (o.contentId = we(void 0, "radix-vue-combobox-content")), (s, r) => (v(), g(l(Me), {
      present: s.forceMount || l(o).open.value
    }, {
      default: f(() => [
        B(Tf, P({ ...l(a), ...s.$attrs }, { ref: l(n) }), {
          default: f(() => [
            b(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Vf = /* @__PURE__ */ y({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    N();
    const a = ga(), n = $(() => a.filteredOptions.value.length === 0);
    return (o, s) => n.value ? (v(), g(l(L), W(P({ key: 0 }, e)), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          q("No options")
        ])
      ]),
      _: 3
    }, 16)) : Z("", !0);
  }
});
function Rf(t) {
  const e = In({
    nonce: A()
  });
  return $(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.nonce) == null ? void 0 : a.value);
  });
}
const [D0, Ff] = ne("ComboboxItem"), Lf = "combobox.select", Nf = /* @__PURE__ */ y({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { disabled: o } = ve(a), s = ga();
    Yr({ id: "", options: A([]) });
    const { forwardRef: r } = N(), i = $(
      () => {
        var h, x;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (h = s.modelValue.value) == null ? void 0 : h.some((C) => It(C, a.value)) : It((x = s.modelValue) == null ? void 0 : x.value, a.value);
      }
    ), d = $(() => It(s.selectedValue.value, a.value)), u = we(void 0, "radix-vue-combobox-item"), c = we(void 0, "radix-vue-combobox-option"), p = $(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((h) => It(h, a.value)) : !0);
    async function _(h) {
      n("select", h), !(h != null && h.defaultPrevented) && !o.value && h && s.onValueChange(a.value);
    }
    function m(h) {
      if (!h)
        return;
      const x = { originalEvent: h, value: a.value };
      ol(Lf, _, x);
    }
    async function w(h) {
      await le(), !h.defaultPrevented && s.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Ff({
      isSelected: i
    }), (h, x) => (v(), g(l(Ln), { value: h.value }, {
      default: f(() => [
        da(B(l(L), {
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
          [zo, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), zf = /* @__PURE__ */ y({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (v(), g(l(L), P(e, { "aria-hidden": "true" }), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qr = /* @__PURE__ */ y({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Fn), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Uf() {
  const t = A(!1);
  return ue(() => {
    sa("keydown", () => {
      t.value = !0;
    }, { capture: !0, passive: !0 }), sa(["pointerdown", "pointermove"], () => {
      t.value = !1;
    }, { capture: !0, passive: !0 });
  }), t;
}
const Wf = $r(Uf), [Ut, Jr] = ne(["MenuRoot", "MenuSub"], "MenuContext"), [Ga, Kf] = ne("MenuRoot"), Hf = /* @__PURE__ */ y({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, { modal: o, dir: s } = ve(a), r = ot(s), i = fe(a, "open", n), d = A(), u = Wf();
    return Jr({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: d,
      onContentChange: (c) => {
        d.value = c;
      }
    }), Kf({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: u,
      dir: r,
      modal: o
    }), (c, p) => (v(), g(l(ha), null, {
      default: f(() => [
        b(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), jf = "rovingFocusGroup.onEntryFocus", Gf = { bubbles: !1, cancelable: !0 }, Yf = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function qf(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function Jf(t, e, a) {
  const n = qf(t.key, a);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Yf[n];
}
function Qr(t, e = !1) {
  const a = xe();
  for (const n of t)
    if (n === a || (n.focus({ preventScroll: e }), xe() !== a))
      return;
}
function Qf(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
const [Zf, Xf] = ne("RovingFocusGroup"), Zr = /* @__PURE__ */ y({
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
    const n = t, o = a, { loop: s, orientation: r, dir: i } = ve(n), d = ot(i), u = fe(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = A(!1), p = A(!1), _ = A(0), { getItems: m } = bl();
    function w(x) {
      const C = !p.value;
      if (x.currentTarget && x.target === x.currentTarget && C && !c.value) {
        const S = new CustomEvent(jf, Gf);
        if (x.currentTarget.dispatchEvent(S), o("entryFocus", S), !S.defaultPrevented) {
          const k = m().map((M) => M.ref).filter((M) => M.dataset.disabled !== ""), E = k.find((M) => M.getAttribute("data-active") === "true"), O = k.find(
            (M) => M.id === u.value
          ), V = [E, O, ...k].filter(
            Boolean
          );
          Qr(V, n.preventScrollOnEntryFocus);
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
    }), Xf({
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
    }), (x, C) => (v(), g(l(_l), null, {
      default: f(() => [
        B(l(L), {
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
}), ev = /* @__PURE__ */ y({
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
    const e = t, a = Zf(), n = $(() => e.tabStopId || we()), o = $(
      () => a.currentTabStopId.value === n.value
    ), { getItems: s } = wl();
    ue(() => {
      e.focusable && a.onFocusableItemAdd();
    }), Et(() => {
      e.focusable && a.onFocusableItemRemove();
    });
    function r(i) {
      if (i.key === "Tab" && i.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const d = Jf(
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
          u = a.loop.value ? Qf(u, c + 1) : u.slice(c + 1);
        }
        le(() => Qr(u));
      }
    }
    return (i, d) => (v(), g(l(Ln), null, {
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
}), [xl, tv] = ne("MenuContent"), $l = /* @__PURE__ */ y({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Rs({
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
    ...Gr
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Ut(), s = Ga(), { trapFocus: r, disableOutsidePointerEvents: i, loop: d } = ve(a);
    il(), za(i.value);
    const u = A(""), c = A(0), p = A(0), _ = A(null), m = A("right"), w = A(0), h = A(null), { createCollection: x } = pa(), { forwardRef: C, currentElement: S } = N(), k = x(S);
    ee(S, (D) => {
      o.onContentChange(D);
    });
    const { handleTypeaheadSearch: E } = dl(k);
    Et(() => {
      window.clearTimeout(c.value);
    });
    function O(D) {
      var I, F;
      return m.value === ((I = _.value) == null ? void 0 : I.side) && Up(D, (F = _.value) == null ? void 0 : F.area);
    }
    async function V(D) {
      var I;
      n("openAutoFocus", D), !D.defaultPrevented && (D.preventDefault(), (I = S.value) == null || I.focus({
        preventScroll: !0
      }));
    }
    function M(D) {
      if (D.defaultPrevented)
        return;
      const I = D.target.closest("[data-radix-menu-content]") === D.currentTarget, F = D.ctrlKey || D.altKey || D.metaKey, Y = D.key.length === 1, G = Dr(
        D,
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
      if (D.code === "Space" || (I && (D.key === "Tab" && D.preventDefault(), !F && Y && E(D.key)), D.target !== S.value) || !Fp.includes(D.key))
        return;
      D.preventDefault();
      const ae = k.value;
      Lr.includes(D.key) && ae.reverse(), ko(ae);
    }
    function U(D) {
      var I, F;
      (F = (I = D == null ? void 0 : D.currentTarget) == null ? void 0 : I.contains) != null && F.call(I, D.target) || (window.clearTimeout(c.value), u.value = "");
    }
    function z(D) {
      var I;
      if (!Ia(D))
        return;
      const F = D.target, Y = w.value !== D.clientX;
      if ((I = D == null ? void 0 : D.currentTarget) != null && I.contains(F) && Y) {
        const G = D.clientX > w.value ? "right" : "left";
        m.value = G, w.value = D.clientX;
      }
    }
    return tv({
      onItemEnter: (D) => !!O(D),
      onItemLeave: (D) => {
        var I;
        O(D) || ((I = S.value) == null || I.focus(), h.value = null);
      },
      onTriggerLeave: (D) => !!O(D),
      searchRef: u,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (D) => {
        _.value = D;
      }
    }), (D, I) => (v(), g(l(Rn), {
      "as-child": "",
      trapped: l(r),
      onMountAutoFocus: V,
      onUnmountAutoFocus: I[7] || (I[7] = (F) => n("closeAutoFocus", F))
    }, {
      default: f(() => [
        B(l(va), {
          "as-child": "",
          "disable-outside-pointer-events": l(i),
          onEscapeKeyDown: I[2] || (I[2] = (F) => n("escapeKeyDown", F)),
          onPointerDownOutside: I[3] || (I[3] = (F) => n("pointerDownOutside", F)),
          onFocusOutside: I[4] || (I[4] = (F) => n("focusOutside", F)),
          onInteractOutside: I[5] || (I[5] = (F) => n("interactOutside", F)),
          onDismiss: I[6] || (I[6] = (F) => n("dismiss"))
        }, {
          default: f(() => [
            B(l(Zr), {
              "current-tab-stop-id": h.value,
              "onUpdate:currentTabStopId": I[0] || (I[0] = (F) => h.value = F),
              "as-child": "",
              orientation: "vertical",
              dir: l(s).dir.value,
              loop: l(d),
              onEntryFocus: I[1] || (I[1] = (F) => {
                n("entryFocus", F), l(s).isUsingKeyboardRef.value || F.preventDefault();
              })
            }, {
              default: f(() => [
                B(l(ra), {
                  ref: l(C),
                  role: "menu",
                  as: D.as,
                  "as-child": D.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(vl)(l(o).open.value),
                  dir: l(s).dir.value,
                  side: D.side,
                  "side-offset": D.sideOffset,
                  align: D.align,
                  "align-offset": D.alignOffset,
                  "avoid-collisions": D.avoidCollisions,
                  "collision-boundary": D.collisionBoundary,
                  "collision-padding": D.collisionPadding,
                  "arrow-padding": D.arrowPadding,
                  "prioritize-position": D.prioritizePosition,
                  sticky: D.sticky,
                  "hide-when-detached": D.hideWhenDetached,
                  onKeydown: M,
                  onBlur: U,
                  onPointermove: z
                }, {
                  default: f(() => [
                    b(D.$slots, "default")
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
}), Xr = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = xl(), { forwardRef: n } = N(), o = A(!1);
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
}), Cl = /* @__PURE__ */ y({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: s } = N(), r = Ga(), i = xl(), d = A(!1);
    async function u() {
      const c = s.value;
      if (!a.disabled && c) {
        const p = new CustomEvent(Vp, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await le(), p.defaultPrevented ? d.value = !1 : r.onClose();
      }
    }
    return (c, p) => (v(), g(Xr, P(a, {
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
        c.disabled || m && _.key === " " || l(Co).includes(_.key) && (_.currentTarget.click(), _.preventDefault());
      })
    }), {
      default: f(() => [
        b(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [av, ei] = ne(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), nv = /* @__PURE__ */ y({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = av({
      checked: A(!1)
    });
    return (a, n) => (v(), g(l(Me), {
      present: a.forceMount || l(Cn)(l(e).checked.value) || l(e).checked.value === !0
    }, {
      default: f(() => [
        B(l(L), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": l(ml)(l(e).checked.value)
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
}), ov = /* @__PURE__ */ y({
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
    const a = t, n = e, o = fe(a, "checked", n);
    return ei({ checked: o }), (s, r) => (v(), g(Cl, P({ role: "menuitemcheckbox" }, a, {
      "aria-checked": l(Cn)(l(o)) ? "mixed" : l(o),
      "data-state": l(ml)(l(o)),
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
}), lv = /* @__PURE__ */ y({
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
    const a = t, n = e, o = X(a, n), s = Ut(), { forwardRef: r, currentElement: i } = N();
    return Wa(i), (d, u) => (v(), g($l, P(l(o), {
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
}), sv = /* @__PURE__ */ y({
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
    const a = X(t, e), n = Ut();
    return (o, s) => (v(), g($l, P(l(a), {
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
}), rv = /* @__PURE__ */ y({
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
    const a = X(t, e), n = Ut(), o = Ga();
    return (s, r) => (v(), g(l(Me), {
      present: s.forceMount || l(n).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), g(lv, W(P({ key: 0 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            b(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), g(sv, W(P({ key: 1 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            b(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ti = /* @__PURE__ */ y({
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
}), iv = /* @__PURE__ */ y({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dv = /* @__PURE__ */ y({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Ka), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [uv, cv] = ne("MenuRadioGroup"), pv = /* @__PURE__ */ y({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = fe(a, "modelValue", e);
    return cv({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, s) => (v(), g(ti, W(H(a)), {
      default: f(() => [
        b(o.$slots, "default", { modelValue: l(n) })
      ]),
      _: 3
    }, 16));
  }
}), fv = /* @__PURE__ */ y({
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
    const a = t, n = e, { value: o } = ve(a), s = uv(), r = $(
      () => s.modelValue.value === (o == null ? void 0 : o.value)
    );
    return ei({ checked: r }), (i, d) => (v(), g(Cl, P({ role: "menuitemradio" }, a, {
      "aria-checked": r.value,
      "data-state": l(ml)(r.value),
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
}), vv = /* @__PURE__ */ y({
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
}), [ai, mv] = ne("MenuSub"), hv = /* @__PURE__ */ y({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = fe(a, "open", e, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = Ut(), s = A(), r = A();
    return be((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), Jr({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: r,
      onContentChange: (i) => {
        r.value = i;
      }
    }), mv({
      triggerId: "",
      contentId: "",
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, d) => (v(), g(l(ha), null, {
      default: f(() => [
        b(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), gv = /* @__PURE__ */ y({
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
    const a = X(t, e), n = Ut(), o = Ga(), s = ai(), { forwardRef: r, currentElement: i } = N();
    return s.contentId || (s.contentId = we(void 0, "radix-vue-menu-sub-content")), (d, u) => (v(), g(l(Me), {
      present: d.forceMount || l(n).open.value
    }, {
      default: f(() => [
        B($l, P(l(a), {
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
            const m = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), w = l(Np)[l(o).dir.value].includes(c.key);
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
}), yv = /* @__PURE__ */ y({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Ut(), n = Ga(), o = ai(), s = xl(), r = A(null);
    o.triggerId || (o.triggerId = we(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    Et(() => {
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
      e.disabled || m && p.key === " " || Lp[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await le(), (_ = a.content.value) == null || _.focus(), p.preventDefault());
    }
    return (p, _) => (v(), g(qr, { "as-child": "" }, {
      default: f(() => [
        B(Xr, P(e, {
          id: l(o).triggerId,
          ref: (m) => {
            var w;
            (w = l(o)) == null || w.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(a).open.value,
          "aria-controls": l(o).contentId,
          "data-state": l(vl)(l(a).open.value),
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
}), [ni, bv] = ne("DropdownMenuRoot"), _v = /* @__PURE__ */ y({
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
    N();
    const o = fe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), s = A(), { modal: r, dir: i } = ve(a), d = ot(i);
    return bv({
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
    }), (u, c) => (v(), g(l(Hf), {
      open: l(o),
      "onUpdate:open": c[0] || (c[0] = (p) => ua(o) ? o.value = p : null),
      dir: l(d),
      modal: l(r)
    }, {
      default: f(() => [
        b(u.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), wv = /* @__PURE__ */ y({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = ni(), { forwardRef: n, currentElement: o } = N();
    return ue(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = we(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (v(), g(l(qr), { "as-child": "" }, {
      default: f(() => [
        B(l(L), {
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
          onKeydown: r[1] || (r[1] = We(
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
}), xv = /* @__PURE__ */ y({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(dv), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $v = /* @__PURE__ */ y({
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
    const a = X(t, e);
    N();
    const n = ni(), o = A(!1);
    function s(r) {
      r.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, r.preventDefault());
    }
    return n.contentId || (n.contentId = we(void 0, "radix-vue-dropdown-menu-content")), (r, i) => {
      var d;
      return v(), g(l(rv), P(l(a), {
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
}), oi = /* @__PURE__ */ y({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = zt(e);
    return N(), (o, s) => (v(), g(l(Cl), W(H({ ...a, ...l(n) })), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cv = /* @__PURE__ */ y({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (v(), g(l(ti), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kv = /* @__PURE__ */ y({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (v(), g(l(vv), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bv = /* @__PURE__ */ y({
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
    const a = t, n = zt(e);
    return N(), (o, s) => (v(), g(l(ov), W(H({ ...a, ...l(n) })), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), li = /* @__PURE__ */ y({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (v(), g(l(nv), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dv = /* @__PURE__ */ y({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (v(), g(l(iv), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sv = /* @__PURE__ */ y({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = zt(e);
    return N(), (o, s) => (v(), g(l(pv), W(H({ ...a, ...l(n) })), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pv = /* @__PURE__ */ y({
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
    const a = X(t, e);
    return N(), (n, o) => (v(), g(l(fv), W(H(l(a))), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ev = /* @__PURE__ */ y({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = fe(a, "open", e, {
      passive: a.open === void 0,
      defaultValue: a.defaultOpen ?? !1
    });
    return N(), (o, s) => (v(), g(l(hv), {
      open: l(n),
      "onUpdate:open": s[0] || (s[0] = (r) => ua(n) ? n.value = r : null)
    }, {
      default: f(() => [
        b(o.$slots, "default", { open: l(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Ov = /* @__PURE__ */ y({
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
    const a = X(t, e);
    return N(), (n, o) => (v(), g(l(gv), P(l(a), { style: {
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
}), Av = /* @__PURE__ */ y({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (v(), g(l(yv), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mv = /* @__PURE__ */ y({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (v(), g(l(L), P(e, {
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
}), [ya, Tv] = ne("PaginationRoot"), Iv = /* @__PURE__ */ y({
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
    const a = t, n = e, { siblingCount: o, disabled: s, showEdges: r } = ve(a);
    N();
    const i = fe(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), d = $(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return Tv({
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
}), Vv = /* @__PURE__ */ y({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (v(), g(l(L), P(e, { "data-type": "ellipsis" }), {
      default: f(() => [
        b(a.$slots, "default", {}, () => [
          q("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), Rv = /* @__PURE__ */ y({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = ya();
    N();
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
}), Fv = /* @__PURE__ */ y({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = ya();
    N();
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
function bt(t, e) {
  const a = e - t + 1;
  return Array.from({ length: a }, (n, o) => o + t);
}
function Lv(t) {
  return t.map((e) => typeof e == "number" ? { type: "page", value: e } : { type: "ellipsis" });
}
const an = "ellipsis";
function Nv(t, e, a, n) {
  const o = e, s = Math.max(t - a, 1), r = Math.min(t + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, e) - 2, d = s > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(s - 1) > 2, u = r < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - r) > 2;
    if (!d && u)
      return [...bt(1, i), an, o];
    if (d && !u) {
      const c = bt(o - i + 1, o);
      return [1, an, ...c];
    }
    if (d && u) {
      const c = bt(s, r);
      return [1, an, ...c, an, o];
    }
    return bt(1, o);
  } else {
    const i = a * 2 + 1;
    return e < i ? bt(1, o) : t <= a + 1 ? bt(1, i) : e - t <= a ? bt(e - i + 1, o) : bt(s, r);
  }
}
const zv = /* @__PURE__ */ y({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    N();
    const a = ya(), n = $(() => Lv(
      Nv(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, s) => (v(), g(l(L), W(H(e)), {
      default: f(() => [
        b(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), S0 = /* @__PURE__ */ y({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    N();
    const a = ya(), n = $(() => a.page.value === e.value), o = $(() => a.disabled.value);
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
}), Uv = /* @__PURE__ */ y({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    N();
    const a = ya(), n = $(() => a.page.value === a.pageCount.value || a.disabled.value);
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
    N();
    const a = ya(), n = $(() => a.page.value === 1 || a.disabled.value);
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
}), [Ya, Kv] = ne("PopoverRoot"), Hv = /* @__PURE__ */ y({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, { modal: o } = ve(a), s = fe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = A(), i = A(!1);
    return Kv({
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
    }), (d, u) => (v(), g(l(ha), null, {
      default: f(() => [
        b(d.$slots, "default", { open: l(s) })
      ]),
      _: 3
    }));
  }
}), jv = /* @__PURE__ */ y({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Ya(), { forwardRef: n, currentElement: o } = N();
    return ue(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), g(Oe(l(a).hasCustomAnchor.value ? l(L) : l(Fn)), { "as-child": "" }, {
      default: f(() => [
        B(l(L), {
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
}), Gv = /* @__PURE__ */ y({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Ka), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), si = /* @__PURE__ */ y({
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
    const a = t, n = e, o = se(a), { forwardRef: s } = N(), r = Ya();
    return il(), (i, d) => (v(), g(l(Rn), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: f(() => [
        B(l(va), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (u) => n("pointerDownOutside", u)),
          onInteractOutside: d[1] || (d[1] = (u) => n("interactOutside", u)),
          onEscapeKeyDown: d[2] || (d[2] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[3] || (d[3] = (u) => n("focusOutside", u)),
          onDismiss: d[4] || (d[4] = (u) => l(r).onOpenChange(!1))
        }, {
          default: f(() => [
            B(l(ra), P(l(o), {
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
}), Yv = /* @__PURE__ */ y({
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
    const r = X(a, n), { forwardRef: i, currentElement: d } = N();
    return Wa(d), (u, c) => (v(), g(si, P(l(r), {
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
}), qv = /* @__PURE__ */ y({
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
    const a = t, n = e, o = Ya(), s = A(!1), r = A(!1), i = X(a, n);
    return (d, u) => (v(), g(si, P(l(i), {
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
}), Jv = /* @__PURE__ */ y({
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
    const a = t, n = e, o = Ya(), s = X(a, n), { forwardRef: r } = N();
    return o.contentId || (o.contentId = we(void 0, "radix-vue-popover-content")), (i, d) => (v(), g(l(Me), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), g(Yv, P({ key: 0 }, l(s), { ref: l(r) }), {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), g(qv, P({ key: 1 }, l(s), { ref: l(r) }), {
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
function Qv(t) {
  const e = $(() => t.start.value ? !!t.isDateDisabled(t.start.value) : !1), a = $(() => t.end.value ? !!t.isDateDisabled(t.end.value) : !1), n = $(
    () => e.value || a.value ? !1 : !!(t.start.value && t.end.value && kt(t.end.value, t.start.value))
  ), o = (d) => t.start.value ? Be(t.start.value, d) : !1, s = (d) => t.end.value ? Be(t.end.value, d) : !1, r = (d) => t.start.value && Be(t.start.value, d) || t.end.value && Be(t.end.value, d) ? !0 : t.end.value && t.start.value ? ku(d, t.start.value, t.end.value) : !1, i = $(() => {
    if (t.start.value && t.end.value || !t.start.value || !t.focusedValue.value)
      return null;
    const d = kt(t.start.value, t.focusedValue.value), u = d ? t.start.value : t.focusedValue.value, c = d ? t.focusedValue.value : t.start.value;
    return Be(u, c) ? {
      start: u,
      end: c
    } : Su(u, c, t.isDateUnavailable, t.isDateDisabled) ? {
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
const Zv = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Xv = {
  role: "heading",
  "aria-level": "2"
}, [ba, em] = ne("RangeCalendarRoot"), tm = /* @__PURE__ */ y({
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
      nextPage: E,
      prevPage: O
    } = ve(a), { primitiveElement: V, currentElement: M } = fa(), U = ot(k), z = A(), D = A(), I = fe(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), F = wr({
      defaultPlaceholder: a.placeholder,
      defaultValue: I.value.start,
      locale: a.locale
    }), Y = A(I.value.start), G = A(I.value.end), ae = fe(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? F.copy(),
      passive: a.placeholder === void 0
    });
    function pe(me) {
      ae.value = me.copy();
    }
    const {
      fullCalendarLabel: ge,
      headingValue: ye,
      isDateDisabled: j,
      isDateUnavailable: oe,
      isNextButtonDisabled: de,
      isPrevButtonDisabled: Fe,
      grid: Ye,
      weekdays: ht,
      isOutsideVisibleView: gt,
      nextPage: $a,
      prevPage: Te,
      formatter: Pe
    } = Wr({
      locale: S,
      placeholder: ae,
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
      nextPage: E,
      prevPage: O
    }), {
      isInvalid: qe,
      isSelected: ie,
      highlightedRange: De,
      isSelectionStart: st,
      isSelectionEnd: Ca,
      isHighlightedStart: nd,
      isHighlightedEnd: od
    } = Qv({
      start: Y,
      end: G,
      isDateDisabled: j,
      isDateUnavailable: oe,
      focusedValue: D
    });
    return ee(I, (me) => {
      me.start && (!Y.value || !Qe(Y.value, me.start)) && (Y.value = me.start.copy()), me.end && (!G.value || !Qe(G.value, me.end)) && (G.value = me.end.copy());
    }), ee(Y, (me) => {
      me && !Qe(me, ae.value) && pe(me), n("update:startValue", me);
    }), ee([Y, G], ([me, yt]) => {
      const Le = I.value;
      if (!(Le && Le.start && Le.end && me && yt && Qe(Le.start, me) && Qe(Le.end, yt)))
        if (me && yt) {
          if (Le.start && Le.end && Qe(Le.start, me) && Qe(Le.end, yt))
            return;
          kt(yt, me) ? I.value = {
            start: yt.copy(),
            end: me.copy()
          } : I.value = {
            start: me.copy(),
            end: yt.copy()
          };
        } else Le.start && Le.end && (I.value = {
          start: void 0,
          end: void 0
        });
    }), em({
      isDateUnavailable: oe,
      startValue: Y,
      endValue: G,
      formatter: Pe,
      modelValue: I,
      placeholder: ae,
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
      isInvalid: qe,
      isDateDisabled: j,
      highlightedRange: De,
      focusedValue: D,
      lastPressedDateValue: z,
      isSelected: ie,
      isSelectionEnd: Ca,
      isSelectionStart: st,
      isNextButtonDisabled: de,
      isPrevButtonDisabled: Fe,
      isOutsideVisibleView: gt,
      nextPage: $a,
      prevPage: Te,
      parentElement: M,
      onPlaceholderChange: pe,
      locale: S,
      dir: U,
      isHighlightedStart: nd,
      isHighlightedEnd: od
    }), ue(() => {
      r.value && xr(M.value);
    }), (me, yt) => (v(), g(l(L), {
      ref_key: "primitiveElement",
      ref: V,
      as: me.as,
      "as-child": me.asChild,
      role: "application",
      "aria-label": l(ge),
      "data-readonly": l(s) ? "" : void 0,
      "data-disabled": l(o) ? "" : void 0,
      "data-invalid": l(qe) ? "" : void 0,
      dir: l(U)
    }, {
      default: f(() => [
        re("div", Zv, [
          re("div", Xv, Q(l(ge)), 1)
        ]),
        b(me.$slots, "default", {
          date: l(ae),
          grid: l(Ye),
          weekDays: l(ht),
          weekStartsOn: l(d),
          locale: l(S),
          fixedWeeks: l(c)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), am = /* @__PURE__ */ y({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nm = /* @__PURE__ */ y({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = ba();
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
}), om = /* @__PURE__ */ y({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(t) {
    const e = t, a = ba(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
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
}), lm = /* @__PURE__ */ y({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(t) {
    const e = ba();
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
}), sm = /* @__PURE__ */ y({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rm = /* @__PURE__ */ y({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = $(() => n.disabled.value || n.isNextButtonDisabled(e.step, e.nextPage)), n = ba();
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
}), im = /* @__PURE__ */ y({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = $(() => n.disabled.value || n.isPrevButtonDisabled(e.step, e.prevPage)), n = ba();
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
}), dm = /* @__PURE__ */ y({
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
}), um = /* @__PURE__ */ y({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cm = /* @__PURE__ */ y({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(L), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pm = /* @__PURE__ */ y({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = ba(), n = Mr(), { primitiveElement: o, currentElement: s } = fa(), r = $(() => a.formatter.custom(Ve(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = $(() => a.isDateDisabled(e.day)), d = $(() => {
      var z;
      return (z = a.isDateUnavailable) == null ? void 0 : z.call(a, e.day);
    }), u = $(() => a.isSelected(e.day)), c = $(() => a.isSelectionStart(e.day)), p = $(() => a.isSelectionEnd(e.day)), _ = $(() => a.isHighlightedStart(e.day)), m = $(() => a.isHighlightedEnd(e.day)), w = $(() => a.highlightedRange.value ? Cu(e.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", x = $(() => Ks(e.day, ft())), C = $(() => !Ws(e.day, e.month)), S = $(
      () => a.isOutsideVisibleView(e.day)
    ), k = $(() => e.day.day.toLocaleString(a.locale.value)), E = $(() => !a.disabled.value && Be(e.day, a.placeholder.value));
    function O(z, D) {
      var I;
      if (!a.readonly.value && !(a.isDateDisabled(D) || (I = a.isDateUnavailable) != null && I.call(a, D))) {
        if (a.lastPressedDateValue.value = D.copy(), a.startValue.value && a.highlightedRange.value === null) {
          if (Be(D, a.startValue.value) && !a.preventDeselect.value && !a.endValue.value) {
            a.startValue.value = void 0, a.onPlaceholderChange(D);
            return;
          } else if (!a.endValue.value) {
            z.preventDefault(), a.lastPressedDateValue.value && Be(a.lastPressedDateValue.value, D) && (a.startValue.value = D.copy());
            return;
          }
        }
        if (a.startValue.value && a.endValue.value && Be(a.endValue.value, D) && !a.preventDeselect.value) {
          a.startValue.value = void 0, a.endValue.value = void 0, a.onPlaceholderChange(D);
          return;
        }
        a.startValue.value ? a.endValue.value ? a.endValue.value && a.startValue.value && (a.endValue.value = void 0, a.startValue.value = D.copy()) : a.endValue.value = D.copy() : a.startValue.value = D.copy();
      }
    }
    function V(z) {
      O(z, e.day);
    }
    function M() {
      var z;
      a.isDateDisabled(e.day) || (z = a.isDateUnavailable) != null && z.call(a, e.day) || (a.focusedValue.value = e.day.copy());
    }
    function U(z) {
      z.preventDefault(), z.stopPropagation();
      const D = a.parentElement.value, I = D ? Array.from(D.querySelectorAll(h)) : [];
      let F = I.indexOf(s.value);
      const Y = 7, G = a.dir.value === "rtl" ? -1 : 1;
      switch (z.code) {
        case n.ARROW_RIGHT:
          F += G;
          break;
        case n.ARROW_LEFT:
          F -= G;
          break;
        case n.ARROW_UP:
          F -= Y;
          break;
        case n.ARROW_DOWN:
          F += Y;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          O(z, e.day);
          return;
        default:
          return;
      }
      if (F >= 0 && F < I.length) {
        I[F].focus();
        return;
      }
      if (F < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), le(() => {
          const ae = D ? Array.from(D.querySelectorAll(h)) : [];
          ae[ae.length - Math.abs(F)].focus();
        });
        return;
      }
      if (F >= I.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), le(() => {
          (D ? Array.from(D.querySelectorAll(h)) : [])[F - I.length].focus();
        });
      }
    }
    return (z, D) => (v(), g(l(L), P({
      ref_key: "primitiveElement",
      ref: o
    }, e, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": u.value ? !0 : void 0,
      "aria-disabled": C.value || i.value || d.value ? !0 : void 0,
      "data-highlighted": w.value ? "" : void 0,
      "data-selection-start": c.value ? !0 : void 0,
      "data-selection-end": p.value ? !0 : void 0,
      "data-highlighted-start": _.value ? !0 : void 0,
      "data-highlighted-end": m.value ? !0 : void 0,
      "data-selected": u.value ? !0 : void 0,
      "data-outside-visible-view": S.value ? "" : void 0,
      "data-value": z.day.toString(),
      "data-disabled": i.value || C.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": x.value ? "" : void 0,
      "data-outside-month": C.value ? "" : void 0,
      "data-focused": E.value ? "" : void 0,
      tabindex: E.value ? 0 : C.value || i.value ? void 0 : -1,
      onClick: V,
      onFocusin: M,
      onMouseenter: M,
      onKeydown: We(U, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: f(() => [
        b(z.$slots, "default", { dayValue: k.value }, () => [
          q(Q(k.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
}), fm = ["default-value"], vm = /* @__PURE__ */ y({
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
    const e = t, { value: a } = ve(e), n = A();
    return (o, s) => (v(), g(l(ja), { "as-child": "" }, {
      default: f(() => [
        da(re("select", P({
          ref_key: "selectElement",
          ref: n
        }, e, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => ua(a) ? a.value = r : null),
          "default-value": l(a)
        }), [
          b(o.$slots, "default")
        ], 16, fm), [
          [ud, l(a)]
        ])
      ]),
      _: 3
    }));
  }
}), mm = {
  key: 0,
  value: ""
}, [Wt, ri] = ne("SelectRoot"), [hm, gm] = ne("SelectRoot"), ym = /* @__PURE__ */ y({
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
    const a = t, n = e, o = fe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), s = fe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = A(), i = A(), d = A({
      x: 0,
      y: 0
    }), u = A(!1), { required: c, disabled: p, dir: _ } = ve(a), m = ot(_);
    ri({
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
    return gm({
      onNativeOptionAdd: (C) => {
        h.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        h.value.delete(C);
      }
    }), (C, S) => (v(), g(l(ha), null, {
      default: f(() => [
        b(C.$slots, "default", {
          modelValue: l(o),
          open: l(s)
        }),
        l(w) ? (v(), g(vm, P({ key: x.value }, C.$attrs, {
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
            l(o) === void 0 ? (v(), R("option", mm)) : Z("", !0),
            (v(!0), R(J, null, ce(Array.from(h.value), (k) => (v(), g(Oe(k), P({ ref_for: !0 }, k.props, {
              key: k.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : Z("", !0)
      ]),
      _: 3
    }));
  }
}), bm = [" ", "Enter", "ArrowUp", "ArrowDown"], _m = [" ", "Enter"], Ue = 10;
function ii(t) {
  return t === "" || pn(t);
}
const wm = /* @__PURE__ */ y({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Wt(), n = $(() => {
      var m;
      return ((m = a.disabled) == null ? void 0 : m.value) || e.disabled;
    }), { forwardRef: o, currentElement: s } = N();
    a.contentId || (a.contentId = we(void 0, "radix-vue-select-content")), ue(() => {
      a.triggerElement = s;
    });
    const { injectCollection: r } = pa(), i = r(), { search: d, handleTypeaheadSearch: u, resetTypeahead: c } = dl(i);
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
          B(l(L), {
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
            "data-placeholder": l(ii)((S = l(a).modelValue) == null ? void 0 : S.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: w[0] || (w[0] = (k) => {
              var E;
              (E = k == null ? void 0 : k.currentTarget) == null || E.focus();
            }),
            onPointerdown: w[1] || (w[1] = (k) => {
              if (k.pointerType === "touch")
                return k.preventDefault();
              const E = k.target;
              E.hasPointerCapture(k.pointerId) && E.releasePointerCapture(k.pointerId), k.button === 0 && k.ctrlKey === !1 && (_(k), k.preventDefault());
            }),
            onPointerup: w[2] || (w[2] = Ce(
              (k) => {
                k.pointerType === "touch" && _(k);
              },
              ["prevent"]
            )),
            onKeydown: w[3] || (w[3] = (k) => {
              const E = l(d) !== "";
              !(k.ctrlKey || k.altKey || k.metaKey) && k.key.length === 1 && E && k.key === " " || (l(u)(k.key), l(bm).includes(k.key) && (p(), k.preventDefault()));
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
}), xm = /* @__PURE__ */ y({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Ka), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [kl, $m] = ne("SelectItemAlignedPosition"), Cm = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, { injectCollection: o } = pa(), s = Wt(), r = Kt(), i = o(), d = A(!1), u = A(!0), c = A(), { forwardRef: p, currentElement: _ } = N(), { viewport: m, selectedItem: w, selectedItemText: h, focusSelectedItem: x } = r;
    function C() {
      if (s.triggerElement.value && s.valueElement.value && c.value && _.value && m != null && m.value && w != null && w.value && h != null && h.value) {
        const E = s.triggerElement.value.getBoundingClientRect(), O = _.value.getBoundingClientRect(), V = s.valueElement.value.getBoundingClientRect(), M = h.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const Te = M.left - O.left, Pe = V.left - Te, qe = E.left - Pe, ie = E.width + qe, De = Math.max(ie, O.width), st = window.innerWidth - Ue, Ca = $n(Pe, Ue, Math.max(Ue, st - De));
          c.value.style.minWidth = `${ie}px`, c.value.style.left = `${Ca}px`;
        } else {
          const Te = O.right - M.right, Pe = window.innerWidth - V.right - Te, qe = window.innerWidth - E.right - Pe, ie = E.width + qe, De = Math.max(ie, O.width), st = window.innerWidth - Ue, Ca = $n(
            Pe,
            Ue,
            Math.max(Ue, st - De)
          );
          c.value.style.minWidth = `${ie}px`, c.value.style.right = `${Ca}px`;
        }
        const U = i.value, z = window.innerHeight - Ue * 2, D = m.value.scrollHeight, I = window.getComputedStyle(_.value), F = Number.parseInt(
          I.borderTopWidth,
          10
        ), Y = Number.parseInt(I.paddingTop, 10), G = Number.parseInt(
          I.borderBottomWidth,
          10
        ), ae = Number.parseInt(
          I.paddingBottom,
          10
        ), pe = F + Y + D + ae + G, ge = Math.min(
          w.value.offsetHeight * 5,
          pe
        ), ye = window.getComputedStyle(m.value), j = Number.parseInt(ye.paddingTop, 10), oe = Number.parseInt(
          ye.paddingBottom,
          10
        ), de = E.top + E.height / 2 - Ue, Fe = z - de, Ye = w.value.offsetHeight / 2, ht = w.value.offsetTop + Ye, gt = F + Y + ht, $a = pe - gt;
        if (gt <= de) {
          const Te = w.value === U[U.length - 1];
          c.value.style.bottom = "0px";
          const Pe = _.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, qe = Math.max(
            Fe,
            Ye + (Te ? oe : 0) + Pe + G
          ), ie = gt + qe;
          c.value.style.height = `${ie}px`;
        } else {
          const Te = w.value === U[0];
          c.value.style.top = "0px";
          const Pe = Math.max(
            de,
            F + m.value.offsetTop + (Te ? j : 0) + Ye
          ) + $a;
          c.value.style.height = `${Pe}px`, m.value.scrollTop = gt - de + m.value.offsetTop;
        }
        c.value.style.margin = `${Ue}px 0`, c.value.style.minHeight = `${ge}px`, c.value.style.maxHeight = `${z}px`, n("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const S = A("");
    ue(async () => {
      await le(), C(), _.value && (S.value = window.getComputedStyle(_.value).zIndex);
    });
    function k(E) {
      E && u.value === !0 && (C(), x == null || x(), u.value = !1);
    }
    return $m({
      contentWrapper: c,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: k
    }), (E, O) => (v(), R("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: Pt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: S.value
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
      }, { ...E.$attrs, ...a }), {
        default: f(() => [
          b(E.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), km = /* @__PURE__ */ y({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: Ue },
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
    return (a, n) => (v(), g(l(ra), P(l(e), { style: {
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
}), _a = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Kt, Bm] = ne("SelectContent"), Dm = /* @__PURE__ */ y({
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
    const a = t, n = e, o = Wt();
    il(), za(a.bodyLock);
    const { createCollection: s } = pa(), r = A();
    Wa(r);
    const i = s(r), { search: d, handleTypeaheadSearch: u } = dl(i), c = A(), p = A(), _ = A(), m = A(!1), w = A(!1);
    function h() {
      p.value && r.value && ko([p.value, r.value]);
    }
    ee(m, () => {
      h();
    });
    const { onOpenChange: x, triggerPointerDownPosRef: C } = o;
    be((O) => {
      if (!r.value)
        return;
      let V = { x: 0, y: 0 };
      const M = (z) => {
        var D, I;
        V = {
          x: Math.abs(
            Math.round(z.pageX) - (((D = C.value) == null ? void 0 : D.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(z.pageY) - (((I = C.value) == null ? void 0 : I.y) ?? 0)
          )
        };
      }, U = (z) => {
        var D;
        z.pointerType !== "touch" && (V.x <= 10 && V.y <= 10 ? z.preventDefault() : (D = r.value) != null && D.contains(z.target) || x(!1), document.removeEventListener("pointermove", M), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", M), document.addEventListener("pointerup", U, {
        capture: !0,
        once: !0
      })), O(() => {
        document.removeEventListener("pointermove", M), document.removeEventListener("pointerup", U, {
          capture: !0
        });
      });
    });
    function S(O) {
      const V = O.ctrlKey || O.altKey || O.metaKey;
      if (O.key === "Tab" && O.preventDefault(), !V && O.key.length === 1 && u(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
        let M = i.value;
        if (["ArrowUp", "End"].includes(O.key) && (M = M.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
          const U = O.target, z = M.indexOf(U);
          M = M.slice(z + 1);
        }
        setTimeout(() => ko(M)), O.preventDefault();
      }
    }
    const k = $(() => a.position === "popper" ? a : {}), E = se(k.value);
    return Bm({
      content: r,
      viewport: c,
      onViewportChange: (O) => {
        c.value = O;
      },
      itemRefCallback: (O, V, M) => {
        var U, z;
        const D = !w.value && !M;
        (((U = o.modelValue) == null ? void 0 : U.value) !== void 0 && ((z = o.modelValue) == null ? void 0 : z.value) === V || D) && (p.value = O, D && (w.value = !0));
      },
      selectedItem: p,
      selectedItemText: _,
      onItemLeave: () => {
        var O;
        (O = r.value) == null || O.focus();
      },
      itemTextRefCallback: (O, V, M) => {
        var U, z;
        const D = !w.value && !M;
        (((U = o.modelValue) == null ? void 0 : U.value) !== void 0 && ((z = o.modelValue) == null ? void 0 : z.value) === V || D) && (_.value = O);
      },
      focusSelectedItem: h,
      position: a.position,
      isPositioned: m,
      searchRef: d
    }), (O, V) => (v(), g(l(Rn), {
      "as-child": "",
      onMountAutoFocus: V[6] || (V[6] = Ce(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: V[7] || (V[7] = (M) => {
        var U;
        n("closeAutoFocus", M), !M.defaultPrevented && ((U = l(o).triggerElement.value) == null || U.focus({ preventScroll: !0 }), M.preventDefault());
      })
    }, {
      default: f(() => [
        B(l(va), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: V[2] || (V[2] = Ce(() => {
          }, ["prevent"])),
          onDismiss: V[3] || (V[3] = (M) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: V[4] || (V[4] = (M) => n("escapeKeyDown", M)),
          onPointerDownOutside: V[5] || (V[5] = (M) => n("pointerDownOutside", M))
        }, {
          default: f(() => [
            (v(), g(Oe(
              O.position === "popper" ? km : Cm
            ), P({ ...O.$attrs, ...l(E) }, {
              id: l(o).contentId,
              ref: (M) => {
                r.value = l(Re)(M);
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
                b(O.$slots, "default")
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
}), Sm = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(t) {
    return ri(t.context), (e, a) => b(e.$slots, "default");
  }
}), Pm = { key: 1 }, Em = /* @__PURE__ */ y({
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
    const a = t, n = X(a, e), o = Wt(), s = A();
    ue(() => {
      s.value = new DocumentFragment();
    });
    const r = A(), i = $(() => a.forceMount || o.open.value);
    return (d, u) => {
      var c;
      return i.value ? (v(), g(l(Me), {
        key: 0,
        ref_key: "presenceRef",
        ref: r,
        present: !0
      }, {
        default: f(() => [
          B(Dm, W(H({ ...l(n), ...d.$attrs })), {
            default: f(() => [
              b(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = r.value) != null && c.present) && s.value ? (v(), R("div", Pm, [
        (v(), g(Sn, { to: s.value }, [
          B(Sm, { context: l(o) }, {
            default: f(() => [
              b(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : Z("", !0);
    };
  }
}), Om = /* @__PURE__ */ y({
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
}), [di, Am] = ne("SelectItem"), Mm = /* @__PURE__ */ y({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { disabled: a } = ve(e), n = Wt(), o = Kt(_a), { forwardRef: s, currentElement: r } = N(), i = $(() => {
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
      await le(), !(h.defaultPrevented || ((x = o.searchRef) == null ? void 0 : x.value) !== "" && h.key === " ") && (_m.includes(h.key) && p(), h.key === " " && h.preventDefault());
    }
    if (e.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ue(() => {
      r.value && o.itemRefCallback(
        r.value,
        e.value,
        e.disabled
      );
    }), Am({
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
}), Tm = /* @__PURE__ */ y({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = di();
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
}), [Im, Vm] = ne("SelectGroup"), Rm = /* @__PURE__ */ y({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = we(void 0, "radix-vue-select-group");
    return Vm({ id: a }), (n, o) => (v(), g(l(L), P({ role: "group" }, e, { "aria-labelledby": l(a) }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Fm = /* @__PURE__ */ y({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Im({ id: "" });
    return (n, o) => (v(), g(l(L), P(e, {
      id: l(a).id
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ui = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = Wt(), n = Kt(_a), o = hm(), s = di(), { forwardRef: r, currentElement: i } = N(), d = $(() => {
      var u;
      return Ze("option", {
        key: s.value,
        value: s.value,
        disabled: s.disabled.value,
        textContent: (u = i.value) == null ? void 0 : u.textContent
      });
    });
    return ue(() => {
      i.value && (s.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        s.value,
        s.disabled.value
      ), o.onNativeOptionAdd(d.value));
    }), No(() => {
      o.onNativeOptionRemove(d.value);
    }), (u, c) => (v(), R(J, null, [
      B(l(L), P({
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
}), Lm = /* @__PURE__ */ y({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { nonce: a } = ve(e), n = Rf(a), o = Kt(_a), s = o.position === "item-aligned" ? kl() : void 0, { forwardRef: r, currentElement: i } = N();
    ue(() => {
      o == null || o.onViewportChange(i.value);
    });
    const d = A(0);
    function u(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: _, contentWrapper: m } = s ?? {};
      if (_ != null && _.value && m != null && m.value) {
        const w = Math.abs(d.value - p.scrollTop);
        if (w > 0) {
          const h = window.innerHeight - Ue * 2, x = Number.parseFloat(
            m.value.style.minHeight
          ), C = Number.parseFloat(m.value.style.height), S = Math.max(x, C);
          if (S < h) {
            const k = S + w, E = Math.min(h, k), O = k - E;
            m.value.style.height = `${E}px`, m.value.style.bottom === "0px" && (p.scrollTop = O > 0 ? O : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = p.scrollTop;
    }
    return (c, p) => (v(), R(J, null, [
      B(l(L), P({
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
      B(l(L), {
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
}), ci = /* @__PURE__ */ y({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(t, { emit: e }) {
    const a = e, { injectCollection: n } = pa(), o = n(), s = Kt(_a), r = A(null);
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
    return No(() => i()), (c, p) => {
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
}), Nm = /* @__PURE__ */ y({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = Kt(_a), a = e.position === "item-aligned" ? kl() : void 0, { forwardRef: n, currentElement: o } = N(), s = A(!1);
    return be((r) => {
      var i, d;
      if ((i = e.viewport) != null && i.value && (d = e.isPositioned) != null && d.value) {
        let u = function() {
          s.value = c.scrollTop > 0;
        };
        const c = e.viewport.value;
        u(), c.addEventListener("scroll", u), r(() => c.removeEventListener("scroll", u));
      }
    }), ee(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), g(ci, {
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
}), zm = /* @__PURE__ */ y({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = Kt(_a), a = e.position === "item-aligned" ? kl() : void 0, { forwardRef: n, currentElement: o } = N(), s = A(!1);
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
    }), ee(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), g(ci, {
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
}), Um = /* @__PURE__ */ y({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e, currentElement: a } = N(), n = Wt(), o = Os();
    return ld(() => {
      var s;
      const r = !!Tn((s = o == null ? void 0 : o.default) == null ? void 0 : s.call(o)).length;
      n.onValueElementHasChildrenChange(r);
    }), ue(() => {
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
          l(ii)((i = l(n).modelValue) == null ? void 0 : i.value) ? (v(), R(J, { key: 0 }, [
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
}), Km = /* @__PURE__ */ y({
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
}), Hm = /* @__PURE__ */ y({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(Km, W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function jm(t = [], e, a) {
  const n = [...t];
  return n[a] = e, n.sort((o, s) => o - s);
}
function pi(t, e, a) {
  const n = 100 / (a - e) * (t - e);
  return $n(n, 0, 100);
}
function Gm(t, e) {
  return e > 2 ? `Value ${t + 1} of ${e}` : e === 2 ? ["Minimum", "Maximum"][t] : void 0;
}
function Ym(t, e) {
  if (t.length === 1)
    return 0;
  const a = t.map((o) => Math.abs(o - e)), n = Math.min(...a);
  return a.indexOf(n);
}
function qm(t, e, a) {
  const n = t / 2, o = Bl([0, 50], [0, n]);
  return (n - o(e) * a) * a;
}
function Jm(t) {
  return t.slice(0, -1).map((e, a) => t[a + 1] - e);
}
function Qm(t, e) {
  if (e > 0) {
    const a = Jm(t);
    return Math.min(...a) >= e;
  }
  return !0;
}
function Bl(t, e) {
  return (a) => {
    if (t[0] === t[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (t[1] - t[0]);
    return e[0] + n * (a - t[0]);
  };
}
function Zm(t) {
  return (String(t).split(".")[1] || "").length;
}
function Xm(t, e) {
  const a = 10 ** e;
  return Math.round(t * a) / a;
}
const fi = ["PageUp", "PageDown"], vi = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], mi = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [hi, gi] = ne(["SliderVertical", "SliderHorizontal"]), yi = /* @__PURE__ */ y({
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
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : l(fi).concat(l(vi)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
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
}), eh = /* @__PURE__ */ y({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, { max: o, min: s, dir: r, inverted: i } = ve(a), { forwardRef: d, currentElement: u } = N(), c = A(), p = $(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function _(m) {
      const w = c.value || u.value.getBoundingClientRect(), h = [0, w.width], x = p.value ? [s.value, o.value] : [o.value, s.value], C = Bl(h, x);
      return c.value = w, C(m - w.left);
    }
    return gi({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, w) => (v(), g(yi, {
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
        const x = p.value ? "from-left" : "from-right", C = l(mi)[x].includes(h.key);
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
}), th = /* @__PURE__ */ y({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, { max: o, min: s, inverted: r } = ve(a), { forwardRef: i, currentElement: d } = N(), u = A(), c = $(() => !r.value);
    function p(_) {
      const m = u.value || d.value.getBoundingClientRect(), w = [0, m.height], h = c.value ? [o.value, s.value] : [s.value, o.value], x = Bl(w, h);
      return u.value = m, x(_ - m.top);
    }
    return gi({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (_, m) => (v(), g(yi, {
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
        const h = c.value ? "from-bottom" : "from-top", x = l(mi)[h].includes(w.key);
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
}), ah = ["value", "name", "disabled", "step"], [Nn, nh] = ne("SliderRoot"), oh = /* @__PURE__ */ y({
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
    const a = t, n = e, { min: o, max: s, step: r, minStepsBetweenThumbs: i, orientation: d, disabled: u, dir: c } = ve(a), p = ot(c), { forwardRef: _, currentElement: m } = N(), w = Ua(m);
    bl();
    const h = fe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), x = A(0), C = A(h.value);
    function S(M) {
      const U = Ym(h.value, M);
      O(M, U);
    }
    function k(M) {
      O(M, x.value);
    }
    function E() {
      const M = C.value[x.value];
      h.value[x.value] !== M && n("valueCommit", vd(h.value));
    }
    function O(M, U, { commit: z } = { commit: !1 }) {
      var D;
      const I = Zm(r.value), F = Xm(Math.round((M - o.value) / r.value) * r.value + o.value, I), Y = $n(F, o.value, s.value), G = jm(h.value, Y, U);
      if (Qm(G, i.value * r.value)) {
        x.value = G.indexOf(Y);
        const ae = String(G) !== String(h.value);
        ae && z && n("valueCommit", G), ae && ((D = V.value[x.value]) == null || D.focus(), h.value = G);
      }
    }
    const V = A([]);
    return nh({
      modelValue: h,
      valueIndexToChangeRef: x,
      thumbElements: V,
      orientation: d,
      min: o,
      max: s,
      disabled: u
    }), (M, U) => (v(), R(J, null, [
      B(l(_l), null, {
        default: f(() => [
          (v(), g(Oe(l(d) === "horizontal" ? eh : th), P(M.$attrs, {
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
            onSlideStart: U[1] || (U[1] = (z) => !l(u) && S(z)),
            onSlideMove: U[2] || (U[2] = (z) => !l(u) && k(z)),
            onSlideEnd: U[3] || (U[3] = (z) => !l(u) && E()),
            onHomeKeyDown: U[4] || (U[4] = (z) => !l(u) && O(l(o), 0, { commit: !0 })),
            onEndKeyDown: U[5] || (U[5] = (z) => !l(u) && O(l(s), l(h).length - 1, { commit: !0 })),
            onStepKeyDown: U[6] || (U[6] = (z, D) => {
              if (!l(u)) {
                const I = l(fi).includes(z.key) || z.shiftKey && l(vi).includes(z.key) ? 10 : 1, F = x.value, Y = l(h)[F], G = l(r) * I * D;
                O(Y + G, F, { commit: !0 });
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
      l(w) ? (v(!0), R(J, { key: 0 }, ce(l(h), (z, D) => (v(), R("input", {
        key: D,
        value: z,
        type: "number",
        style: { display: "none" },
        name: M.name ? M.name + (l(h).length > 1 ? "[]" : "") : void 0,
        disabled: l(u),
        step: l(r)
      }, null, 8, ah))), 128)) : Z("", !0)
    ], 64));
  }
}), lh = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Nn(), n = hi(), { forwardRef: o, currentElement: s } = N(), r = $(() => {
      var m, w;
      return (w = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : w[e.index];
    }), i = $(() => r.value === void 0 ? 0 : pi(r.value, a.min.value ?? 0, a.max.value ?? 100)), d = $(() => {
      var m, w;
      return Gm(e.index, ((w = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : w.length) ?? 0);
    }), u = Ar(s), c = $(() => u[n.size].value), p = $(() => c.value ? qm(c.value, i.value, n.direction) : 0), _ = rl();
    return ue(() => {
      a.thumbElements.value.push(s.value);
    }), Et(() => {
      const m = a.thumbElements.value.findIndex((w) => w === s.value) ?? -1;
      a.thumbElements.value.splice(m, 1);
    }), (m, w) => (v(), g(l(Ln), null, {
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
}), sh = /* @__PURE__ */ y({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { getItems: a } = wl(), { forwardRef: n, currentElement: o } = N(), s = $(() => o.value ? a().findIndex((r) => r.ref === o.value) : -1);
    return (r, i) => (v(), g(lh, P({ ref: l(n) }, e, { index: s.value }), {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), rh = /* @__PURE__ */ y({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Nn();
    return N(), (a, n) => (v(), g(l(L), {
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
}), ih = /* @__PURE__ */ y({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Nn(), a = hi();
    N();
    const n = $(() => {
      var r, i;
      return (i = (r = e.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (d) => pi(d, e.min.value, e.max.value)
      );
    }), o = $(() => e.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = $(() => 100 - Math.max(...n.value));
    return (r, i) => (v(), g(l(L), {
      "data-disabled": l(e).disabled.value ? "" : void 0,
      "data-orientation": l(e).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: Pt({
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
function dh() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
dh();
const uh = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [ch, ph] = ne("SwitchRoot"), fh = /* @__PURE__ */ y({
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
    const a = t, n = e, { disabled: o } = ve(a), s = fe(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    });
    function r() {
      o.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: d } = N(), u = Ua(d), c = $(() => {
      var p;
      return a.id && d.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return ph({
      checked: s,
      toggleCheck: r,
      disabled: o
    }), (p, _) => (v(), R(J, null, [
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
        onKeydown: We(Ce(r, ["prevent"]), ["enter"])
      }), {
        default: f(() => [
          b(p.$slots, "default", { checked: l(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      l(u) ? (v(), R("input", {
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
      }, null, 8, uh)) : Z("", !0)
    ], 64));
  }
}), vh = /* @__PURE__ */ y({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = ch();
    return N(), (a, n) => {
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
}), [Dl, mh] = ne("TabsRoot"), hh = /* @__PURE__ */ y({
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
    const a = t, n = e, { orientation: o, dir: s } = ve(a), r = ot(s);
    N();
    const i = fe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), d = A();
    return mh({
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
}), gh = /* @__PURE__ */ y({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { loop: a } = ve(e), { forwardRef: n, currentElement: o } = N(), s = Dl();
    return s.tabsList = o, (r, i) => (v(), g(l(Zr), {
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
function bi(t, e) {
  return `${t}-trigger-${e}`;
}
function _i(t, e) {
  return `${t}-content-${e}`;
}
const yh = /* @__PURE__ */ y({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a } = N(), n = Dl(), o = $(() => bi(n.baseId, e.value)), s = $(() => _i(n.baseId, e.value)), r = $(() => e.value === n.modelValue.value), i = A(r.value);
    return ue(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (d, u) => (v(), g(l(Me), {
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
          style: Pt({
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
}), bh = /* @__PURE__ */ y({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, { forwardRef: a } = N(), n = Dl(), o = $(() => bi(n.baseId, e.value)), s = $(() => _i(n.baseId, e.value)), r = $(() => e.value === n.modelValue.value);
    return (i, d) => (v(), g(l(ev), {
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
          onMousedown: d[0] || (d[0] = Ce((u) => {
            !i.disabled && u.ctrlKey === !1 ? l(n).changeModelValue(i.value) : u.preventDefault();
          }, ["left"])),
          onKeydown: d[1] || (d[1] = We((u) => l(n).changeModelValue(i.value), ["enter", "space"])),
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
}), [zn, _h] = ne("ToastProvider"), wh = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(t) {
    const e = t, { label: a, duration: n, swipeDirection: o, swipeThreshold: s } = ve(e), r = A(), i = A(0), d = A(!1), u = A(!1);
    if (e.label && typeof e.label == "string" && !e.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return _h({
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
}), xh = "toast.swipeStart", $h = "toast.swipeMove", Ch = "toast.swipeCancel", kh = "toast.swipeEnd", Do = "toast.viewportPause", So = "toast.viewportResume";
function nn(t, e, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
function ms(t, e, a = 0) {
  const n = Math.abs(t.x), o = Math.abs(t.y), s = n > o;
  return e === "left" || e === "right" ? s && n > a : !s && o > a;
}
function Bh(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
function wi(t) {
  const e = [];
  return Array.from(t.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && e.push(a.textContent), Bh(a)) {
      const n = a.ariaHidden || a.hidden || a.style.display === "none", o = a.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const s = a.dataset.radixToastAnnounceAlt;
          s && e.push(s);
        } else
          e.push(...wi(a));
    }
  }), e;
}
const Dh = /* @__PURE__ */ y({
  __name: "ToastAnnounce",
  setup(t) {
    const e = zn(), a = Tc(1e3), n = A(!1);
    return Br(() => {
      n.value = !0;
    }), (o, s) => l(a) || n.value ? (v(), g(l(ja), { key: 0 }, {
      default: f(() => [
        q(Q(l(e).label.value) + " ", 1),
        b(o.$slots, "default")
      ]),
      _: 3
    })) : Z("", !0);
  }
}), [Sh, Ph] = ne("ToastRoot"), Eh = /* @__PURE__ */ y({
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
    const a = t, n = e, { forwardRef: o, currentElement: s } = N(), r = zn(), i = A(null), d = A(null), u = $(
      () => typeof a.duration == "number" ? a.duration : r.duration.value
    ), c = A(0), p = A(u.value), _ = A(0), m = A(u.value), w = Br(() => {
      const S = (/* @__PURE__ */ new Date()).getTime() - c.value;
      m.value = Math.max(p.value - S, 0);
    }, { fpsLimit: 60 });
    function h(S) {
      S <= 0 || S === Number.POSITIVE_INFINITY || nt && (window.clearTimeout(_.value), c.value = (/* @__PURE__ */ new Date()).getTime(), _.value = window.setTimeout(x, S));
    }
    function x() {
      var S, k;
      (S = s.value) != null && S.contains(xe()) && ((k = r.viewport.value) == null || k.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const C = $(() => s.value ? wi(s.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const S = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(S);
    }
    return be((S) => {
      const k = r.viewport.value;
      if (k) {
        const E = () => {
          h(p.value), w.resume(), n("resume");
        }, O = () => {
          const V = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - V, window.clearTimeout(_.value), w.pause(), n("pause");
        };
        return k.addEventListener(Do, O), k.addEventListener(So, E), () => {
          k.removeEventListener(Do, O), k.removeEventListener(So, E);
        };
      }
    }), ee(() => [a.open, u.value], () => {
      p.value = u.value, a.open && !r.isClosePausedRef.value && h(u.value);
    }, { immediate: !0 }), sl("Escape", (S) => {
      n("escapeKeyDown", S), S.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, x());
    }), ue(() => {
      r.onToastAdd();
    }), Et(() => {
      r.onToastRemove();
    }), Ph({ onClose: x }), (S, k) => (v(), R(J, null, [
      C.value ? (v(), g(Dh, {
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
        B(l(L), P({
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
          onPointerdown: k[0] || (k[0] = Ce((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: k[1] || (k[1] = (E) => {
            if (!i.value) return;
            const O = E.clientX - i.value.x, V = E.clientY - i.value.y, M = !!d.value, U = ["left", "right"].includes(l(r).swipeDirection.value), z = ["left", "up"].includes(l(r).swipeDirection.value) ? Math.min : Math.max, D = U ? z(0, O) : 0, I = U ? 0 : z(0, V), F = E.pointerType === "touch" ? 10 : 2, Y = { x: D, y: I }, G = { originalEvent: E, delta: Y };
            M ? (d.value = Y, l(nn)(l($h), (ae) => n("swipeMove", ae), G)) : l(ms)(Y, l(r).swipeDirection.value, F) ? (d.value = Y, l(nn)(l(xh), (ae) => n("swipeStart", ae), G), E.target.setPointerCapture(E.pointerId)) : (Math.abs(O) > F || Math.abs(V) > F) && (i.value = null);
          }),
          onPointerup: k[2] || (k[2] = (E) => {
            const O = d.value, V = E.target;
            if (V.hasPointerCapture(E.pointerId) && V.releasePointerCapture(E.pointerId), d.value = null, i.value = null, O) {
              const M = E.currentTarget, U = { originalEvent: E, delta: O };
              l(ms)(O, l(r).swipeDirection.value, l(r).swipeThreshold.value) ? l(nn)(l(kh), (z) => n("swipeEnd", z), U) : l(nn)(l(Ch), (z) => n("swipeCancel", z), U), M == null || M.addEventListener("click", (z) => z.preventDefault(), {
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
}), Oh = /* @__PURE__ */ y({
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
    const a = t, n = e, { forwardRef: o } = N(), s = fe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    return (r, i) => (v(), g(l(Me), {
      present: r.forceMount || l(s)
    }, {
      default: f(() => [
        B(Eh, P({
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
}), xi = /* @__PURE__ */ y({
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
}), $i = /* @__PURE__ */ y({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Sh(), { forwardRef: n } = N();
    return (o, s) => (v(), g(xi, { "as-child": "" }, {
      default: f(() => [
        B(l(L), P(e, {
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
}), Ah = /* @__PURE__ */ y({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    if (!t.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: e } = N();
    return (a, n) => a.altText ? (v(), g(xi, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: f(() => [
        B($i, {
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
}), hs = /* @__PURE__ */ y({
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
}), Mh = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(t) {
    const e = t, { hotkey: a, label: n } = ve(e), { forwardRef: o, currentElement: s } = N(), { createCollection: r } = pa(), i = r(s), d = zn(), u = $(() => d.toastCount.value > 0), c = A(), p = A(), _ = $(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    sl(a.value, () => {
      s.value.focus();
    }), ue(() => {
      d.onViewportChange(s.value);
    }), be((w) => {
      const h = s.value;
      if (u.value && h) {
        const x = () => {
          if (!d.isClosePausedRef.value) {
            const O = new CustomEvent(Do);
            h.dispatchEvent(O), d.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (d.isClosePausedRef.value) {
            const O = new CustomEvent(So);
            h.dispatchEvent(O), d.isClosePausedRef.value = !1;
          }
        }, S = (O) => {
          !h.contains(O.relatedTarget) && C();
        }, k = () => {
          h.contains(xe()) || C();
        }, E = (O) => {
          var V, M, U;
          const z = O.altKey || O.ctrlKey || O.metaKey;
          if (O.key === "Tab" && !z) {
            const D = xe(), I = O.shiftKey;
            if (O.target === h && I) {
              (V = c.value) == null || V.focus();
              return;
            }
            const F = m({ tabbingDirection: I ? "backwards" : "forwards" }), Y = F.findIndex((G) => G === D);
            fn(F.slice(Y + 1)) ? O.preventDefault() : I ? (M = c.value) == null || M.focus() : (U = p.value) == null || U.focus();
          }
        };
        h.addEventListener("focusin", x), h.addEventListener("focusout", S), h.addEventListener("pointermove", x), h.addEventListener("pointerleave", k), h.addEventListener("keydown", E), window.addEventListener("blur", x), window.addEventListener("focus", C), w(() => {
          h.removeEventListener("focusin", x), h.removeEventListener("focusout", S), h.removeEventListener("pointermove", x), h.removeEventListener("pointerleave", k), h.removeEventListener("keydown", E), window.removeEventListener("blur", x), window.removeEventListener("focus", C);
        });
      }
    });
    function m({ tabbingDirection: w }) {
      const h = i.value.map((x) => {
        const C = [x, ...fl(x)];
        return w === "forwards" ? C : C.reverse();
      });
      return (w === "forwards" ? h.reverse() : h).flat();
    }
    return (w, h) => (v(), g(l(Pp), {
      role: "region",
      "aria-label": typeof l(n) == "string" ? l(n).replace("{hotkey}", _.value) : l(n)(_.value),
      tabindex: "-1",
      style: Pt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: u.value ? void 0 : "none"
      })
    }, {
      default: f(() => [
        u.value ? (v(), g(hs, {
          key: 0,
          ref: (x) => {
            c.value = l(Re)(x);
          },
          onFocusFromOutsideViewport: h[0] || (h[0] = () => {
            const x = m({
              tabbingDirection: "forwards"
            });
            l(fn)(x);
          })
        }, null, 512)) : Z("", !0),
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
        u.value ? (v(), g(hs, {
          key: 1,
          ref: (x) => {
            p.value = l(Re)(x);
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
}), Th = /* @__PURE__ */ y({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (v(), g(l(L), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ih = /* @__PURE__ */ y({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (v(), g(l(L), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ci = "tooltip.open", [Sl, Vh] = ne("TooltipProvider"), ki = /* @__PURE__ */ y({
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
    const e = t, { delayDuration: a, skipDelayDuration: n, disableHoverableContent: o, disableClosingTrigger: s, ignoreNonKeyboardFocus: r, disabled: i } = ve(e);
    N();
    const d = A(!0), u = A(!1), { start: c, stop: p } = ll(() => {
      d.value = !0;
    }, n, { immediate: !1 });
    return Vh({
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
}), [Un, Rh] = ne("TooltipRoot"), Fh = /* @__PURE__ */ y({
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
    N();
    const o = Sl(), s = $(() => a.disableHoverableContent ?? o.disableHoverableContent.value), r = $(() => a.disableClosingTrigger ?? o.disableClosingTrigger.value), i = $(() => a.disabled ?? o.disabled.value), d = $(() => a.delayDuration ?? o.delayDuration.value), u = $(() => a.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), c = fe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    ee(c, (k) => {
      o.onClose && (k ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Ci))) : o.onClose());
    });
    const p = A(!1), _ = A(), m = $(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: w, stop: h } = ll(() => {
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
    return Rh({
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
    }), (k, E) => (v(), g(l(ha), null, {
      default: f(() => [
        b(k.$slots, "default", { open: l(c) })
      ]),
      _: 3
    }));
  }
}), Lh = /* @__PURE__ */ y({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Un(), n = Sl();
    a.contentId || (a.contentId = we(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: s } = N(), r = A(!1), i = A(!1), d = $(() => a.disabled.value ? {} : {
      click: h,
      focus: m,
      pointermove: p,
      pointerleave: _,
      pointerdown: c,
      blur: w
    });
    ue(() => {
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
        B(l(L), P({
          ref: l(o),
          "aria-describedby": l(a).open.value ? l(a).contentId : void 0,
          "data-state": l(a).stateAttribute.value,
          as: x.as,
          "as-child": e.asChild,
          "data-grace-area-trigger": ""
        }, rd(d.value)), {
          default: f(() => [
            b(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Bi = /* @__PURE__ */ y({
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
    const a = t, n = e, o = Un(), { forwardRef: s } = N(), r = Os(), i = $(() => {
      var c;
      return (c = r.default) == null ? void 0 : c.call(r);
    }), d = $(() => {
      var c;
      if (a.ariaLabel)
        return a.ariaLabel;
      let p = "";
      function _(m) {
        typeof m.children == "string" && m.type !== Ts ? p += m.children : Array.isArray(m.children) && m.children.forEach((w) => _(w));
      }
      return (c = i.value) == null || c.forEach((m) => _(m)), p;
    }), u = $(() => {
      const { ariaLabel: c, ...p } = a;
      return p;
    });
    return ue(() => {
      sa(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(o.trigger.value) && o.onClose();
      }), sa(window, Ci, o.onClose);
    }), (c, p) => (v(), g(l(va), {
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
        B(l(ra), P({
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
            B(l(ja), {
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
}), Nh = /* @__PURE__ */ y({
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
    const e = se(t), { forwardRef: a, currentElement: n } = N(), { trigger: o, onClose: s } = Un(), r = Sl(), { isPointerInTransit: i, onPointerExit: d } = Gc(o, n);
    return r.isPointerInTransitRef = i, d(() => {
      s();
    }), (u, c) => (v(), g(Bi, P({ ref: l(a) }, l(e)), {
      default: f(() => [
        b(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zh = /* @__PURE__ */ y({
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
    const a = t, n = e, o = Un(), s = X(a, n), { forwardRef: r } = N();
    return (i, d) => (v(), g(l(Me), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        (v(), g(Oe(l(o).disableHoverableContent.value ? Bi : Nh), P({ ref: l(r) }, l(s)), {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Uh = /* @__PURE__ */ y({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Ka), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), P0 = /* @__PURE__ */ y({
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
    const o = X(t, e);
    return (s, r) => (v(), g(l(yp), W(H(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pl = "-", Wh = (t) => {
  const e = Hh(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (r) => {
      const i = r.split(Pl);
      return i[0] === "" && i.length !== 1 && i.shift(), Di(i, e) || Kh(r);
    },
    getConflictingClassGroupIds: (r, i) => {
      const d = a[r] || [];
      return i && n[r] ? [...d, ...n[r]] : d;
    }
  };
}, Di = (t, e) => {
  var r;
  if (t.length === 0)
    return e.classGroupId;
  const a = t[0], n = e.nextPart.get(a), o = n ? Di(t.slice(1), n) : void 0;
  if (o)
    return o;
  if (e.validators.length === 0)
    return;
  const s = t.join(Pl);
  return (r = e.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : r.classGroupId;
}, gs = /^\[(.+)\]$/, Kh = (t) => {
  if (gs.test(t)) {
    const e = gs.exec(t)[1], a = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Hh = (t) => {
  const {
    theme: e,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Gh(Object.entries(t.classGroups), a).forEach(([s, r]) => {
    Po(r, n, s, e);
  }), n;
}, Po = (t, e, a, n) => {
  t.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? e : ys(e, o);
      s.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (jh(o)) {
        Po(o(n), e, a, n);
        return;
      }
      e.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([s, r]) => {
      Po(r, ys(e, s), a, n);
    });
  });
}, ys = (t, e) => {
  let a = t;
  return e.split(Pl).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, jh = (t) => t.isThemeGetter, Gh = (t, e) => e ? t.map(([a, n]) => {
  const o = n.map((s) => typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([r, i]) => [e + r, i])) : s);
  return [a, o];
}) : t, Yh = (t) => {
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
}, Si = "!", qh = (t) => {
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
    const _ = d.length === 0 ? i : i.substring(c), m = _.startsWith(Si), w = m ? _.substring(1) : _, h = p && p > c ? p - c : void 0;
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
}, Jh = (t) => {
  if (t.length <= 1)
    return t;
  const e = [];
  let a = [];
  return t.forEach((n) => {
    n[0] === "[" ? (e.push(...a.sort(), n), a = []) : a.push(n);
  }), e.push(...a.sort()), e;
}, Qh = (t) => ({
  cache: Yh(t.cacheSize),
  parseClassName: qh(t),
  ...Wh(t)
}), Zh = /\s+/, Xh = (t, e) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = e, s = [], r = t.trim().split(Zh);
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
    const x = Jh(c).join(":"), C = p ? x + Si : x, S = C + h;
    if (s.includes(S))
      continue;
    s.push(S);
    const k = o(h, w);
    for (let E = 0; E < k.length; ++E) {
      const O = k[E];
      s.push(C + O);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function eg() {
  let t = 0, e, a, n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (a = Pi(e)) && (n && (n += " "), n += a);
  return n;
}
const Pi = (t) => {
  if (typeof t == "string")
    return t;
  let e, a = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = Pi(t[n])) && (a && (a += " "), a += e);
  return a;
};
function tg(t, ...e) {
  let a, n, o, s = r;
  function r(d) {
    const u = e.reduce((c, p) => p(c), t());
    return a = Qh(u), n = a.cache.get, o = a.cache.set, s = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = Xh(d, a);
    return o(d, c), c;
  }
  return function() {
    return s(eg.apply(null, arguments));
  };
}
const he = (t) => {
  const e = (a) => a[t] || [];
  return e.isThemeGetter = !0, e;
}, Ei = /^\[(?:([a-z-]+):)?(.+)\]$/i, ag = /^\d+\/\d+$/, ng = /* @__PURE__ */ new Set(["px", "full", "screen"]), og = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, sg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, rg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ig = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, rt = (t) => ea(t) || ng.has(t) || ag.test(t), _t = (t) => wa(t, "length", hg), ea = (t) => !!t && !Number.isNaN(Number(t)), ro = (t) => wa(t, "number", ea), Ba = (t) => !!t && Number.isInteger(Number(t)), dg = (t) => t.endsWith("%") && ea(t.slice(0, -1)), te = (t) => Ei.test(t), wt = (t) => og.test(t), ug = /* @__PURE__ */ new Set(["length", "size", "percentage"]), cg = (t) => wa(t, ug, Oi), pg = (t) => wa(t, "position", Oi), fg = /* @__PURE__ */ new Set(["image", "url"]), vg = (t) => wa(t, fg, yg), mg = (t) => wa(t, "", gg), Da = () => !0, wa = (t, e, a) => {
  const n = Ei.exec(t);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : a(n[2]) : !1;
}, hg = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lg.test(t) && !sg.test(t)
), Oi = () => !1, gg = (t) => rg.test(t), yg = (t) => ig.test(t), bg = () => {
  const t = he("colors"), e = he("spacing"), a = he("blur"), n = he("brightness"), o = he("borderColor"), s = he("borderRadius"), r = he("borderSpacing"), i = he("borderWidth"), d = he("contrast"), u = he("grayscale"), c = he("hueRotate"), p = he("invert"), _ = he("gap"), m = he("gradientColorStops"), w = he("gradientColorStopPositions"), h = he("inset"), x = he("margin"), C = he("opacity"), S = he("padding"), k = he("saturate"), E = he("scale"), O = he("sepia"), V = he("skew"), M = he("space"), U = he("translate"), z = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", te, e], F = () => [te, e], Y = () => ["", rt, _t], G = () => ["auto", ea, te], ae = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], pe = () => ["solid", "dashed", "dotted", "double", "none"], ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ye = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", te], oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], de = () => [ea, te];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Da],
      spacing: [rt, _t],
      blur: ["none", "", wt, te],
      brightness: de(),
      borderColor: [t],
      borderRadius: ["none", "", "full", wt, te],
      borderSpacing: F(),
      borderWidth: Y(),
      contrast: de(),
      grayscale: j(),
      hueRotate: de(),
      invert: j(),
      gap: F(),
      gradientColorStops: [t],
      gradientColorStopPositions: [dg, _t],
      inset: I(),
      margin: I(),
      opacity: de(),
      padding: F(),
      saturate: de(),
      scale: de(),
      sepia: j(),
      skew: de(),
      space: F(),
      translate: F()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", te]
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
        columns: [wt]
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
        object: [...ae(), te]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": z()
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
        z: ["auto", Ba, te]
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
        flex: ["1", "auto", "initial", "none", te]
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
        order: ["first", "last", "none", Ba, te]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Da]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ba, te]
        }, te]
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
        "grid-rows": [Da]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ba, te]
        }, te]
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
        "auto-cols": ["auto", "min", "max", "fr", te]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", te]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", te, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [te, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [te, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [wt]
        }, wt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [te, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [te, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [te, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [te, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", wt, _t]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ro]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Da]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", te]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ea, ro]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", rt, te]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", te]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", te]
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
        decoration: [...pe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", rt, _t]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", rt, te]
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
        indent: F()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", te]
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
        content: ["none", te]
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
        bg: [...ae(), pg]
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
        bg: ["auto", "cover", "contain", cg]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, vg]
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
        border: [...pe(), "hidden"]
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
        divide: pe()
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
        outline: ["", ...pe()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [rt, te]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [rt, _t]
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
        "ring-offset": [rt, _t]
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
        shadow: ["", "inner", "none", wt, mg]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Da]
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
        "drop-shadow": ["", "none", wt, te]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", te]
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
        ease: ["linear", "in", "out", "in-out", te]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", te]
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
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ba, te]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", te]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", te]
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
        "scroll-m": F()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": F()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": F()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": F()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": F()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": F()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": F()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": F()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": F()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": F()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": F()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": F()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": F()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": F()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": F()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": F()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": F()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": F()
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
        "will-change": ["auto", "scroll", "contents", "transform", te]
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
        stroke: [rt, _t, ro]
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
}, _g = /* @__PURE__ */ tg(bg);
function T(...t) {
  return _g(t);
}
const E0 = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(wp), P(a.value, { class: "overflow-hidden text-sm text-accordion-text transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
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
}), O0 = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(_p), P(l(n), {
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
const wg = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
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
const xg = ({ size: t, strokeWidth: e = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: s, class: r, ...i }, { slots: d }) => Ze(
  "svg",
  {
    ...on,
    width: t || on.width,
    height: t || on.height,
    stroke: n || on.stroke,
    "stroke-width": a ? Number(e) * 24 / Number(t) : e,
    class: ["lucide", `lucide-${wg(s ?? "icon")}`],
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
  xg,
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
const $g = $e("CalendarIcon", [
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
const Wn = $e("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const El = $e("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cg = $e("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = $e("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kg = $e("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bg = $e("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = $e("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sg = $e("ChevronsUpDownIcon", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pg = $e("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ai = $e("EllipsisIcon", [
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
const Eg = $e("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Og = $e("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ag = $e("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mg = $e("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tg = $e("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ig = $e("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = $e("SunIcon", [
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
]), A0 = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(xp), { class: "flex" }, {
      default: f(() => [
        B(l($p), P(a.value, {
          class: l(T)(
            "flex flex-1 items-center justify-between py-4 font-medium text-heading transition-all [&[data-state=open]>svg]:rotate-180",
            e.class
          )
        }), {
          default: f(() => [
            b(n.$slots, "default"),
            b(n.$slots, "icon", {}, () => [
              B(l(El), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
});
function Mi(t) {
  var e, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (a = Mi(t[e])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function Rg() {
  for (var t, e, a = 0, n = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (e = Mi(t)) && (n && (n += " "), n += e);
  return n;
}
const bs = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, _s = Rg, xa = (t, e) => (a) => {
  var n;
  if ((e == null ? void 0 : e.variants) == null) return _s(t, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: s } = e, r = Object.keys(o).map((u) => {
    const c = a == null ? void 0 : a[u], p = s == null ? void 0 : s[u];
    if (c === null) return null;
    const _ = bs(c) || bs(p);
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
  return _s(t, r, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, M0 = /* @__PURE__ */ y({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
      class: K(l(T)(l(Fg)({ variant: a.variant }), e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Fg = xa(
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
), T0 = /* @__PURE__ */ y({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("nav", {
      "aria-label": "breadcrumb",
      class: K(e.class)
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), I0 = /* @__PURE__ */ y({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: K(l(T)("flex h-9 w-9 items-center justify-center", e.class))
    }, [
      b(a.$slots, "default", {}, () => [
        B(l(Ai), { class: "h-4 w-4" })
      ]),
      n[0] || (n[0] = re("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), V0 = /* @__PURE__ */ y({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("li", {
      class: K(l(T)("inline-flex items-center gap-1.5", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), R0 = /* @__PURE__ */ y({
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
}), F0 = /* @__PURE__ */ y({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("ol", {
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
}), L0 = /* @__PURE__ */ y({
  __name: "BreadcrumbPage",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("span", {
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: K(l(T)("font-normal text-foreground", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), N0 = /* @__PURE__ */ y({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: K(l(T)("[&>svg]:h-3.5 [&>svg]:w-3.5", e.class))
    }, [
      b(a.$slots, "default", {}, () => [
        B(l(Ol))
      ])
    ], 2));
  }
}), Ge = /* @__PURE__ */ y({
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
      class: K(l(T)(l(Ht)({ variant: a.variant, size: a.size }), e.class))
    }, {
      default: f(() => [
        b(a.$slots, "default"),
        a.loading ? (v(), g(l(Eg), {
          key: 0,
          class: K(l(Lg)({ size: a.size }))
        }, null, 8, ["class"])) : Z("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Lg = xa("animate-spin", {
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
}), Ht = xa(
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
), z0 = /* @__PURE__ */ y({
  __name: "Card",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
      class: K(
        l(T)("rounded-lg border border-card-border bg-card text-card-foreground shadow-sm", e.class)
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), U0 = /* @__PURE__ */ y({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
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
    return (a, n) => (v(), R("h3", {
      class: K(l(T)("text-2xl font-semibold leading-none tracking-tight", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), K0 = /* @__PURE__ */ y({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("p", {
      class: K(l(T)("text-sm text-muted-foreground", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), H0 = /* @__PURE__ */ y({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
      class: K(l(T)("p-6 pt-0", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), j0 = /* @__PURE__ */ y({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
      class: K(l(T)("flex items-center p-6 pt-0", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ng = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, G0 = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(Kr), P({
      class: l(T)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: u }) => [
        B(l(Ni), null, {
          default: f(() => [
            B(l(Ug)),
            B(l(zi)),
            B(l(zg))
          ]),
          _: 1
        }),
        re("div", Ng, [
          (v(!0), R(J, null, ce(d, (c) => (v(), g(l(Vi), {
            key: c.value.toString()
          }, {
            default: f(() => [
              B(l(Fi), null, {
                default: f(() => [
                  B(l(Bn), null, {
                    default: f(() => [
                      (v(!0), R(J, null, ce(u, (p) => (v(), g(l(Li), { key: p }, {
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
              B(l(Ri), null, {
                default: f(() => [
                  (v(!0), R(J, null, ce(c.rows, (p, _) => (v(), g(l(Bn), {
                    key: `weekDate-${_}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), R(J, null, ce(p, (m) => (v(), g(l(Ti), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          B(l(Ii), {
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
}), Ti = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(sf), P({
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
}), Ii = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(vf), P({
      class: l(T)(
        l(Ht)({ variant: "ghost" }),
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
}), Vi = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(lf), P({
      class: l(T)("w-full border-collapse space-y-1", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ri = /* @__PURE__ */ y({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(pf), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fi = /* @__PURE__ */ y({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(cf), W(H(e)), {
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
    return (o, s) => (v(), g(l(ff), P({
      class: l(T)("flex", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Li = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(rf), P({
      class: l(T)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ni = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(nf), P({
      class: l(T)("relative flex w-full items-center justify-between pt-1", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zi = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(of), P({
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
}), zg = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(df), P({
      class: l(T)(
        l(Ht)({ variant: "outline" }),
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
}), Ug = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(uf), P({
      class: l(T)(
        l(Ht)({ variant: "outline" }),
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
function Ui(t) {
  return Fo() ? (Lo(t), !0) : !1;
}
function Hn(t) {
  return typeof t == "function" ? t() : l(t);
}
const Wg = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Kg = (t) => typeof t < "u", Hg = Object.prototype.toString, jg = (t) => Hg.call(t) === "[object Object]", Wi = () => {
};
function Gg(t, e) {
  function a(...n) {
    return new Promise((o, s) => {
      Promise.resolve(t(() => e.apply(this, n), { fn: e, thisArg: this, args: n })).then(o).catch(s);
    });
  }
  return a;
}
const Ki = (t) => t();
function Yg(t = Ki) {
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
function qg(t) {
  return tt();
}
function Jg(...t) {
  if (t.length !== 1)
    return Ps(...t);
  const e = t[0];
  return typeof e == "function" ? Ra(Vs(() => ({ get: e, set: Wi }))) : A(e);
}
function Qg(t, e, a = {}) {
  const {
    eventFilter: n = Ki,
    ...o
  } = a;
  return ee(
    t,
    Gg(
      n,
      e
    ),
    o
  );
}
function Zg(t, e, a = {}) {
  const {
    eventFilter: n,
    ...o
  } = a, { eventFilter: s, pause: r, resume: i, isActive: d } = Yg(n);
  return { stop: Qg(
    t,
    e,
    {
      ...o,
      eventFilter: s
    }
  ), pause: r, resume: i, isActive: d };
}
function Hi(t, e = !0, a) {
  qg() ? ue(t, a) : e ? t() : le(t);
}
function ji(t) {
  var e;
  const a = Hn(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
const ia = Wg ? window : void 0;
function Eo(...t) {
  let e, a, n, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([a, n, o] = t, e = ia) : [e, a, n, o] = t, !e)
    return Wi;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, p, _, m) => (c.addEventListener(p, _, m), () => c.removeEventListener(p, _, m)), d = ee(
    () => [ji(e), Hn(o)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const _ = jg(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((w) => i(c, m, w, _)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), r();
  };
  return Ui(u), u;
}
function Xg() {
  const t = A(!1), e = tt();
  return e && ue(() => {
    t.value = !0;
  }, e), t;
}
function ey(t) {
  const e = Xg();
  return $(() => (e.value, !!t()));
}
function Gi(t, e = {}) {
  const { window: a = ia } = e, n = ey(() => a && "matchMedia" in a && typeof a.matchMedia == "function");
  let o;
  const s = A(!1), r = (u) => {
    s.value = u.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", r) : o.removeListener(r));
  }, d = be(() => {
    n.value && (i(), o = a.matchMedia(Hn(t)), "addEventListener" in o ? o.addEventListener("change", r) : o.addListener(r), s.value = o.matches);
  });
  return Ui(() => {
    d(), i(), o = void 0;
  }), s;
}
function ty(t) {
  return JSON.parse(JSON.stringify(t));
}
const ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, sn = "__vueuse_ssr_handlers__", ay = /* @__PURE__ */ ny();
function ny() {
  return sn in ln || (ln[sn] = ln[sn] || {}), ln[sn];
}
function Yi(t, e) {
  return ay[t] || e;
}
function oy(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const ly = {
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
}, ws = "vueuse-storage";
function sy(t, e, a, n = {}) {
  var o;
  const {
    flush: s = "pre",
    deep: r = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: d = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: p = ia,
    eventFilter: _,
    onError: m = (D) => {
      console.error(D);
    },
    initOnMounted: w
  } = n, h = (c ? Ro : A)(typeof e == "function" ? e() : e);
  if (!a)
    try {
      a = Yi("getDefaultStorage", () => {
        var D;
        return (D = ia) == null ? void 0 : D.localStorage;
      })();
    } catch (D) {
      m(D);
    }
  if (!a)
    return h;
  const x = Hn(e), C = oy(x), S = (o = n.serializer) != null ? o : ly[C], { pause: k, resume: E } = Zg(
    h,
    () => V(h.value),
    { flush: s, deep: r, eventFilter: _ }
  );
  p && i && Hi(() => {
    Eo(p, "storage", U), Eo(p, ws, z), w && U();
  }), w || U();
  function O(D, I) {
    p && p.dispatchEvent(new CustomEvent(ws, {
      detail: {
        key: t,
        oldValue: D,
        newValue: I,
        storageArea: a
      }
    }));
  }
  function V(D) {
    try {
      const I = a.getItem(t);
      if (D == null)
        O(I, null), a.removeItem(t);
      else {
        const F = S.write(D);
        I !== F && (a.setItem(t, F), O(I, F));
      }
    } catch (I) {
      m(I);
    }
  }
  function M(D) {
    const I = D ? D.newValue : a.getItem(t);
    if (I == null)
      return d && x != null && a.setItem(t, S.write(x)), x;
    if (!D && u) {
      const F = S.read(I);
      return typeof u == "function" ? u(F, x) : C === "object" && !Array.isArray(F) ? { ...x, ...F } : F;
    } else return typeof I != "string" ? I : S.read(I);
  }
  function U(D) {
    if (!(D && D.storageArea !== a)) {
      if (D && D.key == null) {
        h.value = x;
        return;
      }
      if (!(D && D.key !== t)) {
        k();
        try {
          (D == null ? void 0 : D.newValue) !== S.write(h.value) && (h.value = M(D));
        } catch (I) {
          m(I);
        } finally {
          D ? le(E) : E();
        }
      }
    }
  }
  function z(D) {
    U(D.detail);
  }
  return h;
}
function qi(t) {
  return Gi("(prefers-color-scheme: dark)", t);
}
function ry(t = {}) {
  const {
    selector: e = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = ia,
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
  }, _ = qi({ window: o }), m = $(() => _.value ? "dark" : "light"), w = d || (r == null ? Jg(n) : sy(r, n, s, { window: o, listenToStorageChanges: i })), h = $(() => w.value === "auto" ? m.value : w.value), x = Yi(
    "updateHTMLAttrs",
    (E, O, V) => {
      const M = typeof E == "string" ? o == null ? void 0 : o.document.querySelector(E) : ji(E);
      if (!M)
        return;
      let U;
      if (c && (U = o.document.createElement("style"), U.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(U)), O === "class") {
        const z = V.split(/\s/g);
        Object.values(p).flatMap((D) => (D || "").split(/\s/g)).filter(Boolean).forEach((D) => {
          z.includes(D) ? M.classList.add(D) : M.classList.remove(D);
        });
      } else
        M.setAttribute(O, V);
      c && (o.getComputedStyle(U).opacity, document.head.removeChild(U));
    }
  );
  function C(E) {
    var O;
    x(e, a, (O = p[E]) != null ? O : E);
  }
  function S(E) {
    t.onChanged ? t.onChanged(E, C) : C(E);
  }
  ee(h, S, { flush: "post", immediate: !0 }), Hi(() => S(h.value));
  const k = $({
    get() {
      return u ? w.value : h.value;
    },
    set(E) {
      w.value = E;
    }
  });
  try {
    return Object.assign(k, { store: w, system: m, state: h });
  } catch {
    return k;
  }
}
function iy(t = {}) {
  const {
    valueDark: e = "dark",
    valueLight: a = "",
    window: n = ia
  } = t, o = ry({
    ...t,
    onChanged: (i, d) => {
      var u;
      t.onChanged ? (u = t.onChanged) == null || u.call(t, i === "dark", d, i) : d(i);
    },
    modes: {
      dark: e,
      light: a
    }
  }), s = $(() => o.system ? o.system.value : qi({ window: n }).value ? "dark" : "light");
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
function Al(t, e, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: _
  } = n, m = tt(), w = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let h = u;
  e || (e = "modelValue"), h = h || `update:${e.toString()}`;
  const x = (k) => i ? typeof i == "function" ? i(k) : ty(k) : k, C = () => Kg(t[e]) ? x(t[e]) : p, S = (k) => {
    _ ? _(k) && w(h, k) : w(h, k);
  };
  if (d) {
    const k = C(), E = A(k);
    let O = !1;
    return ee(
      () => t[e],
      (V) => {
        O || (O = !0, E.value = x(V), le(() => O = !1));
      }
    ), ee(
      E,
      (V) => {
        !O && (V !== t[e] || c) && S(V);
      },
      { deep: c }
    ), E;
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
const Oo = /* @__PURE__ */ y({
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
    const o = X(t, e);
    return (s, r) => (v(), g(l(ym), W(H(l(o))), {
      default: f(({ open: i }) => [
        b(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Ao = /* @__PURE__ */ y({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Um), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mo = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(wm), P(l(n), {
      class: l(T)(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-start text-sm ring-offset-background transition placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        e.class
      )
    }), {
      default: f(() => [
        b(o.$slots, "default"),
        B(l(Wm), { "as-child": "" }, {
          default: f(() => [
            B(l(El), {
              class: K(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), To = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(xm), null, {
      default: f(() => [
        B(l(Em), P({ ...l(s), ...r.$attrs }, {
          class: l(T)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            r.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: f(() => [
            B(l(uy)),
            B(l(Lm), {
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
            B(l(cy))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Y0 = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Rm), P({
      class: l(T)("w-full p-1", e.class)
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dy = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Io = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(Mm), P(l(n), {
      class: l(T)(
        "focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        e.class
      )
    }), {
      default: f(() => [
        re("span", dy, [
          B(l(Tm), null, {
            default: f(() => [
              B(l(Wn), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        B(l(ui), null, {
          default: f(() => [
            b(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), q0 = /* @__PURE__ */ y({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(ui), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), J0 = /* @__PURE__ */ y({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Fm), {
      class: K(l(T)("py-1.5 pl-8 pr-2 text-sm font-semibold", e.class))
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Q0 = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Om), P(a.value, {
      class: l(T)("-mx-1 my-1 h-px bg-muted", e.class)
    }), null, 16, ["class"]));
  }
}), uy = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(Nm), P(l(n), {
      class: l(T)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          B(l(kg), { class: "size-4 text-primary" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cy = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(zm), P(l(n), {
      class: l(T)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          B(l(El), { class: "size-4 text-primary" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), py = { class: "flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, fy = /* @__PURE__ */ y({
  __name: "CalendarWithSelect",
  props: {
    modelValue: { default: void 0 },
    multiple: { type: Boolean },
    defaultValue: {},
    defaultPlaceholder: {},
    placeholder: { default() {
      return vn(ft());
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
    }), s = Al(a, "modelValue", n, {
      passive: !0,
      defaultValue: vn(ft())
    }), r = X(o, n), i = Er("en");
    return (d, u) => (v(), g(l(Kr), P({
      placeholder: l(s),
      "onUpdate:placeholder": u[2] || (u[2] = (c) => ua(s) ? s.value = c : null)
    }, l(r), {
      class: l(T)("rounded-md border p-3", a.class)
    }), {
      default: f(({ date: c, grid: p, weekDays: _ }) => [
        B(l(Ni), null, {
          default: f(() => [
            B(l(zi), { class: "flex w-full items-center justify-between gap-2" }, {
              default: f(() => [
                B(l(Oo), {
                  "default-value": l(s).month.toString(),
                  "onUpdate:modelValue": u[0] || (u[0] = (m) => {
                    var w;
                    !m || !l(s) || Number(m) !== ((w = l(s)) == null ? void 0 : w.month) && (s.value = l(s).set({
                      month: Number(m)
                    }));
                  })
                }, {
                  default: f(() => [
                    B(l(Mo), {
                      "aria-label": "Select month",
                      class: "w-[60%]"
                    }, {
                      default: f(() => [
                        B(l(Ao), { placeholder: "Select month" })
                      ]),
                      _: 1
                    }),
                    B(l(To), { class: "max-h-[200px]" }, {
                      default: f(() => [
                        (v(!0), R(J, null, ce(l(Eu)({ dateObj: c }), (m) => (v(), g(l(Io), {
                          key: m.toString(),
                          value: m.month.toString()
                        }, {
                          default: f(() => [
                            q(Q(l(i).custom(l(Ve)(m), { month: "long" })), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]))), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["default-value"]),
                B(l(Oo), {
                  "default-value": l(s).year.toString(),
                  "onUpdate:modelValue": u[1] || (u[1] = (m) => {
                    var w;
                    !m || !l(s) || Number(m) !== ((w = l(s)) == null ? void 0 : w.year) && (s.value = l(s).set({
                      year: Number(m)
                    }));
                  })
                }, {
                  default: f(() => [
                    B(l(Mo), {
                      "aria-label": "Select year",
                      class: "w-[40%]"
                    }, {
                      default: f(() => [
                        B(l(Ao), { placeholder: "Select year" })
                      ]),
                      _: 1
                    }),
                    B(l(To), { class: "max-h-[200px]" }, {
                      default: f(() => [
                        (v(!0), R(J, null, ce(l(Pu)({ dateObj: c, startIndex: -10, endIndex: 10 }), (m) => (v(), g(l(Io), {
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
        re("div", py, [
          (v(!0), R(J, null, ce(p, (m) => (v(), g(l(Vi), {
            key: m.value.toString()
          }, {
            default: f(() => [
              B(l(Fi), null, {
                default: f(() => [
                  B(l(Bn), null, {
                    default: f(() => [
                      (v(!0), R(J, null, ce(_, (w) => (v(), g(l(Li), { key: w }, {
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
              B(l(Ri), { class: "grid" }, {
                default: f(() => [
                  (v(!0), R(J, null, ce(m.rows, (w, h) => (v(), g(l(Bn), {
                    key: `weekDate-${h}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), R(J, null, ce(w, (x) => (v(), g(l(Ti), {
                        key: x.toString(),
                        date: x
                      }, {
                        default: f(() => [
                          B(l(Ii), {
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
}), Ji = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(Sf), P(l(s), {
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
}), Qi = /* @__PURE__ */ y({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = X(t, e);
    return (s, r) => (v(), g(l(Vr), W(H(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Z0 = /* @__PURE__ */ y({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Ha), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vy = /* @__PURE__ */ y({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Rr), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), my = /* @__PURE__ */ y({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
      class: K(l(T)("flex flex-col gap-y-1.5 text-center sm:text-left", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), hy = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(zr), P(l(n), {
      class: l(T)("text-2xl font-semibold leading-none tracking-tight text-heading", e.class)
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gy = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(Ur), P(l(n), {
      class: l(T)("text-sm text-sub-text", e.class)
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zi = /* @__PURE__ */ y({
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
    }), s = X(o, a);
    return (r, i) => (v(), g(l(pl), null, {
      default: f(() => [
        B(l(gl), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        B(l(hl), P(l(s), {
          class: l(T)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg",
            n.class
          )
        }), {
          default: f(() => [
            b(r.$slots, "default"),
            B(l(Ha), {
              onClick: i[0] || (i[0] = (d) => a("close", d)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: f(() => [
                B(l(Kn), { class: "size-4 dark:text-slate-300" }),
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
}), X0 = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(pl), null, {
      default: f(() => [
        B(l(gl), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: f(() => [
            B(l(hl), P({
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
                B(l(Ha), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: f(() => [
                    B(l(Kn), { class: "size-4" }),
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
}), yy = /* @__PURE__ */ y({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
      class: K(
        l(T)("flex flex-col-reverse text-text sm:flex-row sm:justify-end sm:gap-x-2", e.class)
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), e_ = /* @__PURE__ */ y({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = X(t, e);
    return (s, r) => (v(), g(l(Qi), W(H(l(o))), {
      default: f(() => [
        B(l(Zi), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: f(() => [
            B(Ji, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), by = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Vf), P(a.value, {
      class: l(T)("py-6 text-center text-sm", e.class)
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _y = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Of), P(a.value, {
      class: l(T)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        e.class
      )
    }), {
      default: f(() => [
        n.heading ? (v(), g(l(Af), {
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
}), wy = { class: "flex items-center border-b px-3" }, xy = /* @__PURE__ */ y({
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
    return (o, s) => (v(), R("div", wy, [
      B(l(Ig), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      B(l(Pf), P({ ...l(n), ...o.$attrs }, {
        "auto-focus": "",
        class: l(T)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          e.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), $y = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(Nf), P(l(s), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cy = { role: "presentation" }, ky = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(If), P(l(s), {
      class: l(T)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: f(() => [
        re("div", Cy, [
          b(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), t_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(zf), P(a.value, {
      class: l(T)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", e.class)
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), a_ = /* @__PURE__ */ y({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("span", {
      class: K(l(T)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), By = /* @__PURE__ */ y({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = X(t, e);
    return (s, r) => (v(), g(l(_v), W(H(l(o))), {
      default: f(({ open: i }) => [
        b(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Dy = /* @__PURE__ */ y({
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
    return (a, n) => (v(), R("div", {
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
}), Sy = /* @__PURE__ */ y({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = se(t);
    return (n, o) => (v(), g(l(wv), P({ class: "outline-none" }, l(a)), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Py = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(xv), null, {
      default: f(() => [
        B(l($v), P(l(s), {
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
}), n_ = /* @__PURE__ */ y({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Cv), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), o_ = /* @__PURE__ */ y({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = X(t, e);
    return (s, r) => (v(), g(l(Sv), W(H(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), l_ = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(oi), P(l(n), {
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
}), Ey = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(Dy, {
      class: K(e.class)
    }, {
      default: f(() => [
        B(l(oi), P(l(n), {
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
}), Oy = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, s_ = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(Bv), P(l(s), {
      class: l(T)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        re("span", Oy, [
          B(l(li), null, {
            default: f(() => [
              B(l(Wn), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ay = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, r_ = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(Pv), P(l(s), {
      class: l(T)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        re("span", Ay, [
          B(l(li), null, {
            default: f(() => [
              B(l(Pg), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), i_ = /* @__PURE__ */ y({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("span", {
      class: K(l(T)("ml-auto text-xs tracking-widest opacity-60", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), d_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(kv), P(a.value, {
      class: l(T)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", e.class)
    }), null, 16, ["class"]));
  }
}), u_ = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(Dv), P(l(n), {
      class: l(T)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", e.class)
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), c_ = /* @__PURE__ */ y({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = X(t, e);
    return (s, r) => (v(), g(l(Ev), W(H(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), p_ = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(Av), P(l(n), {
      class: l(T)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        e.class
      )
    }), {
      default: f(() => [
        b(o.$slots, "default"),
        B(l(Ol), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), f_ = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(Ov), P(l(s), {
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
}), My = { class: "text-xs text-slate-600 dark:text-slate-300" }, Ty = /* @__PURE__ */ y({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(t) {
    return (e, a) => (v(), R("div", My, "Characters: " + Q(e.count), 1));
  }
}), qa = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [n, o] of e)
    a[n] = o;
  return a;
}, Iy = {}, Vy = { class: "text-sm text-slate-400 dark:text-slate-500" };
function Ry(t, e) {
  return v(), R("div", Vy, [
    b(t.$slots, "default")
  ]);
}
const Fy = /* @__PURE__ */ qa(Iy, [["render", Ry]]), Ly = { class: "text-sm text-red-600 dark:text-red-400" }, Ny = /* @__PURE__ */ y({
  __name: "Error",
  props: {
    error: {}
  },
  setup(t) {
    return (e, a) => da((v(), R("div", null, [
      re("p", Ly, Q(e.error), 1)
    ], 512)), [
      [zo, e.error]
    ]);
  }
}), zy = {}, Uy = { class: "w-full space-y-4 p-1.5" };
function Wy(t, e) {
  return v(), R("div", Uy, [
    b(t.$slots, "default")
  ]);
}
const v_ = /* @__PURE__ */ qa(zy, [["render", Wy]]), Ky = {}, Hy = { class: "my-4" };
function jy(t, e) {
  return v(), R("div", Hy, [
    b(t.$slots, "default")
  ]);
}
const Gy = /* @__PURE__ */ qa(Ky, [["render", jy]]), Yy = { class: "grid gap-4 md:grid-cols-2" }, m_ = /* @__PURE__ */ y({
  __name: "FormGrid",
  setup(t) {
    return (e, a) => (v(), g(Gy, null, {
      default: f(() => [
        re("div", Yy, [
          b(e.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), Xi = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Mv), P(a.value, {
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
}), qy = { class: "relative" }, Jy = {
  name: "Base",
  inheritAttrs: !1
}, Ot = /* @__PURE__ */ y({
  ...Jy,
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
      return v(), R("div", null, [
        e.label && e.showLabel ? (v(), g(l(Xi), {
          key: 0,
          id: e.id
        }, {
          default: f(() => [
            q(Q(e.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : Z("", !0),
        re("div", qy, [
          b(e.$slots, "default"),
          e.showCharacterCount ? (v(), g(l(Ty), {
            key: 0,
            count: (n = e.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : Z("", !0)
        ]),
        B(l(Fy), { class: "mt-[2px]" }, {
          default: f(() => [
            q(Q(e.description), 1)
          ]),
          _: 1
        }),
        B(l(Ny), { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), Qy = { class: "flex gap-2" }, h_ = /* @__PURE__ */ y({
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
    return ee(o, (s) => {
      a("update:modelValue", s);
    }), (s, r) => (v(), g(l(Ot), W(H(s.$props)), {
      default: f(() => [
        re("div", Qy, [
          B(l(yf), {
            id: s.id,
            checked: o.value,
            "onUpdate:checked": r[0] || (r[0] = (i) => o.value = i),
            class: "peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground"
          }, {
            default: f(() => [
              B(l(bf), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: f(() => [
                  B(l(Wn), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          s.text ? (v(), g(l(Xi), {
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
}), ed = /* @__PURE__ */ y({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = X(t, e);
    return (s, r) => (v(), g(l(Hv), W(H(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), td = /* @__PURE__ */ y({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(jv), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ad = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(Gv), null, {
      default: f(() => [
        B(l(Jv), P({ ...l(s), ...r.$attrs }, {
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
}), g_ = /* @__PURE__ */ y({
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
    return ee(i, () => {
      Array.isArray(i.value) ? a("update:modelValue", i.value) : a("update:modelValue", i.value.id);
    }), (p, _) => (v(), g(l(Ot), W(H(p.$props)), {
      default: f(() => [
        B(l(ed), {
          open: r.value,
          "onUpdate:open": _[2] || (_[2] = (m) => r.value = m)
        }, {
          default: f(() => [
            B(l(td), { "as-child": "" }, {
              default: f(() => [
                B(l(Ge), {
                  variant: "outline",
                  role: "combobox",
                  "aria-expanded": r.value,
                  class: "w-[200px] justify-between overflow-hidden"
                }, {
                  default: f(() => [
                    q(Q(u.value) + " ", 1),
                    B(l(Sg), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
                  ]),
                  _: 1
                }, 8, ["aria-expanded"])
              ]),
              _: 1
            }),
            B(l(ad), { class: "w-[200px] p-0" }, {
              default: f(() => [
                B(l(Ji), {
                  multiple: p.multiple,
                  modelValue: i.value,
                  "onUpdate:modelValue": _[1] || (_[1] = (m) => i.value = m),
                  "filter-function": d
                }, {
                  default: f(() => [
                    B(l(xy), {
                      class: "h-9",
                      placeholder: s.value
                    }, null, 8, ["placeholder"]),
                    B(l(by), null, {
                      default: f(() => [
                        q(Q(o.value), 1)
                      ]),
                      _: 1
                    }),
                    B(l(ky), null, {
                      default: f(() => [
                        B(l(_y), null, {
                          default: f(() => [
                            (v(!0), R(J, null, ce(p.options, (m) => (v(), g(l($y), {
                              key: m.id,
                              value: m,
                              onSelect: _[0] || (_[0] = () => {
                                p.multiple || (r.value = !1);
                              })
                            }, {
                              default: f(() => [
                                q(Q(m.name) + " ", 1),
                                B(l(Wn), {
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
}), y_ = /* @__PURE__ */ y({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, n = t, o = new Je("en-US", {
      dateStyle: "long"
    }), s = A(n.modelValue);
    return ee(s, () => {
      a("update:modelValue", s.value);
    }), ue(() => {
      n.defaultValue && (s.value = n.defaultValue);
    }), (r, i) => (v(), g(l(Ot), W(H(r.$props)), {
      default: f(() => [
        B(l(ed), null, {
          default: f(() => [
            B(l(td), { "as-child": "" }, {
              default: f(() => [
                B(l(Ge), {
                  variant: "outline",
                  class: K(["w-[280px] justify-start text-left font-normal text-text"])
                }, {
                  default: f(() => [
                    B(l($g), { class: "mr-2 size-4" }),
                    q(" " + Q(s.value ? l(o).format(s.value.toDate(l(ft)())) : r.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            B(l(ad), { class: "w-auto p-0" }, {
              default: f(() => [
                B(l(fy), {
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
for (var io = 0; io < 256; ++io)
  ke.push((io + 256).toString(16).slice(1));
function Zy(t, e = 0) {
  return (ke[t[e + 0]] + ke[t[e + 1]] + ke[t[e + 2]] + ke[t[e + 3]] + "-" + ke[t[e + 4]] + ke[t[e + 5]] + "-" + ke[t[e + 6]] + ke[t[e + 7]] + "-" + ke[t[e + 8]] + ke[t[e + 9]] + "-" + ke[t[e + 10]] + ke[t[e + 11]] + ke[t[e + 12]] + ke[t[e + 13]] + ke[t[e + 14]] + ke[t[e + 15]]).toLowerCase();
}
var rn, Xy = new Uint8Array(16);
function eb() {
  if (!rn && (rn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !rn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return rn(Xy);
}
var tb = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const xs = {
  randomUUID: tb
};
function ab(t, e, a) {
  if (xs.randomUUID && !t)
    return xs.randomUUID();
  t = t || {};
  var n = t.random || (t.rng || eb)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Zy(n);
}
const nb = { class: "flex items-center space-x-2" }, ob = ["src"], lb = ["accept"], b_ = /* @__PURE__ */ y({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = "file-upload-" + ab(), s = $(() => i.value ? URL.createObjectURL(i.value) : null), r = a.currentImage ? a.currentImage : a.defaultImage, i = $({
      get: () => a.modelValue,
      set: (c) => n("update:modelValue", c)
    }), d = (c) => {
      i.value = c.target.files[0];
    }, u = () => document.getElementById(o).click();
    return (c, p) => (v(), g(l(Ot), W(H(c.$props)), {
      default: f(() => [
        re("div", nb, [
          b(c.$slots, "image", {
            newImage: s.value,
            curImage: l(r)
          }, () => [
            re("img", {
              src: s.value ?? l(r),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, ob)
          ]),
          re("input", {
            id: o,
            accept: c.accept,
            hidden: "",
            type: "file",
            onInput: d
          }, null, 40, lb),
          B(l(Ge), {
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
}), sb = ["disabled", "placeholder", "required", "type"], rb = /* @__PURE__ */ y({
  __name: "Input",
  props: /* @__PURE__ */ po({
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
    const e = Ls(t, "modelValue");
    return (a, n) => (v(), g(l(Ot), W(H(a.$props)), {
      default: f(() => [
        da(re("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => e.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: K(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
          }])
        }, null, 10, sb), [
          [hd, e.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), __ = /* @__PURE__ */ y({
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
    return ee(s, () => {
      a("update:modelValue", s.value);
    }), (r, i) => (v(), g(l(Ot), W(H(r.$props)), {
      default: f(() => [
        B(l(Oo), {
          modelValue: s.value,
          "onUpdate:modelValue": i[0] || (i[0] = (d) => s.value = d)
        }, {
          default: f(({ open: d }) => [
            B(l(Mo), { open: d }, {
              default: f(() => [
                B(l(Ao), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            B(l(To), null, {
              default: f(() => [
                (v(!0), R(J, null, ce(r.options, (u) => (v(), g(l(Io), { value: u }, {
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
}), ib = ["placeholder"], w_ = /* @__PURE__ */ y({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = Al(t, "modelValue", e, {
      passive: !0
    });
    return (s, r) => (v(), g(l(Ot), W(H(s.$props)), {
      default: f(() => [
        da(re("textarea", {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => ua(o) ? o.value = i : null),
          placeholder: s.placeholder,
          class: K(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !s.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": s.error
          }])
        }, null, 10, ib), [
          [gd, l(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), db = /* @__PURE__ */ y({
  __name: "Toggle",
  props: /* @__PURE__ */ po({
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
  emits: /* @__PURE__ */ po(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const a = e, n = t, o = Ls(t, "modelValue");
    ee(o, () => {
      a("update:modelValue", o.value);
    });
    const s = $(() => {
      const { class: i, ...d } = n;
      return d;
    }), r = X(s, a);
    return (i, d) => (v(), g(l(Ot), W(H(i.$props)), {
      default: f(() => [
        B(l(fh), P({
          checked: o.value,
          "onUpdate:checked": d[0] || (d[0] = (u) => o.value = u)
        }, l(r), {
          class: l(T)(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent",
            n.class
          )
        }), {
          default: f(({ checked: u }) => [
            B(l(vh), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
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
}), ub = { class: "my-auto text-slate-400 dark:text-slate-100" }, cb = /* @__PURE__ */ y({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(t) {
    return (e, a) => (v(), R("div", ub, " Showing " + Q(e.min) + " to " + Q(e.max) + " of " + Q(e.total) + " results ", 1));
  }
}), pb = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Vv), P(a.value, {
      class: l(T)("flex size-9 items-center justify-center text-text", e.class)
    }), {
      default: f(() => [
        b(n.$slots, "default", {}, () => [
          B(l(Ai))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fb = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Rv), W(H(a.value)), {
      default: f(() => [
        B(l(Ge), {
          class: K(l(T)("size-10 p-0", e.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            b(n.$slots, "default", {}, () => [
              B(l(Bg), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), vb = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Fv), W(H(a.value)), {
      default: f(() => [
        B(l(Ge), {
          class: K(l(T)("size-10 p-0", e.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            b(n.$slots, "default", {}, () => [
              B(l(Dg), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), mb = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Uv), W(H(a.value)), {
      default: f(() => [
        B(l(Ge), {
          class: K(l(T)("size-10 p-0", e.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            b(n.$slots, "default", {}, () => [
              B(l(Ol), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), hb = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Wv), W(H(a.value)), {
      default: f(() => [
        B(l(Ge), {
          class: K(l(T)("size-10 p-0", e.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            b(n.$slots, "default", {}, () => [
              B(l(Cg), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), x_ = /* @__PURE__ */ y({
  __name: "LumuixModeToggle",
  setup(t) {
    const e = iy({
      selector: "html"
    });
    return (a, n) => (v(), g(db, {
      modelValue: l(e),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => ua(e) ? e.value = o : null)
    }, {
      checked: f(() => [
        B(l(Og), { class: "m-auto mt-0.5 size-4 text-primary" })
      ]),
      "not-checked": f(() => [
        B(l(Vg), { class: "m-auto mt-0.5 size-4 text-primary" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), $_ = /* @__PURE__ */ y({
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
    return (o, s) => (v(), R(J, null, [
      B(l(Va), {
        onClick: n,
        class: K(e.class)
      }, {
        default: f(() => [
          (v(!0), R(J, null, ce(o.headers, (r) => (v(), g(l(Dn), {
            key: r.value
          }, {
            default: f(() => [
              o.$slots[`cell_header_${r.value}`] ? b(o.$slots, `cell_header_${r.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (v(), R(J, { key: 1 }, [
                q(Q(o.row[r.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (v(), g(l(Vo), { key: 0 }, {
            default: f(() => [
              b(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : Z("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (v(!0), R(J, { key: 0 }, ce(o.subRows, (r, i) => (v(), g(l(Va), { key: i }, {
        default: f(() => [
          (v(!0), R(J, null, ce(o.headers, (d) => (v(), g(l(Dn), {
            key: d.value
          }, {
            default: f(() => [
              o.$slots[`subrow_cell_${d.value}`] ? b(o.$slots, `subrow_cell_${d.value}`, {
                key: 0,
                item: r,
                open: a.value
              }) : (v(), R(J, { key: 1 }, [
                q(Q("subrow_cell_" + d.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (v(), g(l(Vo), { key: 0 }, {
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
}), gb = { class: "relative w-full overflow-auto" }, yb = /* @__PURE__ */ y({
  __name: "Table",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", gb, [
      re("table", {
        class: K(l(T)("w-full caption-bottom text-sm", e.class))
      }, [
        b(a.$slots, "default")
      ], 2)
    ]));
  }
}), bb = /* @__PURE__ */ y({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("tbody", {
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
    return (a, n) => (v(), R("td", {
      class: K(["p-4 align-middle text-text [&:has([role=checkbox])]:pr-0", e.class])
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), _b = /* @__PURE__ */ y({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("th", {
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
}), wb = /* @__PURE__ */ y({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("thead", {
      class: K(l(T)("[&_tr]:border-b", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), C_ = /* @__PURE__ */ y({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("tfoot", {
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
    return (a, n) => (v(), R("tr", {
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
}), Vo = /* @__PURE__ */ y({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("td", {
      class: K(["w-32 p-4 text-center align-middle dark:text-slate-300", e.class])
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), xb = /* @__PURE__ */ y({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("caption", {
      class: K(l(T)("mt-4 text-sm text-sub-text", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), $b = { class: "flex items-center justify-center py-10" }, k_ = /* @__PURE__ */ y({
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
        B(Dn, P({
          class: l(T)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            e.class
          )
        }, a.value), {
          default: f(() => [
            re("div", $b, [
              b(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), B_ = /* @__PURE__ */ y({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(t) {
    return (e, a) => (v(), g(l(yb), null, {
      default: f(() => [
        e.caption ? (v(), g(l(xb), { key: 0 }, {
          default: f(() => [
            q(Q(e.caption), 1)
          ]),
          _: 1
        })) : Z("", !0),
        B(l(wb), null, {
          default: f(() => [
            B(l(Va), null, {
              default: f(() => [
                (v(!0), R(J, null, ce(e.headers, (n, o) => (v(), g(l(_b), null, {
                  default: f(() => [
                    e.$slots[`header_${e.headers[o].value}`] ? b(e.$slots, `header_${e.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (v(), R(J, { key: 1 }, [
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
        B(l(bb), null, {
          default: f(() => [
            (v(!0), R(J, null, ce(e.rows, (n, o) => (v(), g(l(Va), { key: o }, {
              default: f(() => [
                (v(!0), R(J, null, ce(e.headers, (s) => (v(), g(l(Dn), {
                  key: s.value
                }, {
                  default: f(() => [
                    e.$slots[`cell_${s.value}`] ? b(e.$slots, `cell_${s.value}`, {
                      key: 0,
                      item: n
                    }) : (v(), R(J, { key: 1 }, [
                      q(Q(n[s.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                e.$slots.row_actions ? (v(), g(l(Vo), { key: 0 }, {
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
}), Cb = { class: "text-text" }, D_ = /* @__PURE__ */ y({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const a = e, n = () => a("close");
    return (o, s) => (v(), g(l(Qi), { open: o.open }, {
      default: f(() => [
        B(l(vy), { "as-child": "" }, {
          default: f(() => [
            b(o.$slots, "trigger")
          ]),
          _: 3
        }),
        B(l(Zi), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: K("max-w-" + o.size)
        }, {
          default: f(() => [
            B(l(my), null, {
              default: f(() => [
                B(l(hy), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.title ? b(o.$slots, "title", { key: 0 }) : (r = o.headerData) != null && r.title ? (v(), R(J, { key: 1 }, [
                        q(Q(o.headerData.title), 1)
                      ], 64)) : Z("", !0)
                    ];
                  }),
                  _: 3
                }),
                B(l(gy), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.description ? b(o.$slots, "description", { key: 0 }) : (r = o.headerData) != null && r.description ? (v(), R(J, { key: 1 }, [
                        q(Q(o.headerData.description), 1)
                      ], 64)) : Z("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            re("div", Cb, [
              o.$slots.content ? b(o.$slots, "content", { key: 0 }) : b(o.$slots, "default", { key: 1 })
            ]),
            B(l(yy), null, {
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
}), kb = { class: "justify-between sm:flex" }, S_ = /* @__PURE__ */ y({
  __name: "LumuixPagination",
  props: {
    data: {},
    as: {}
  },
  setup(t) {
    const e = t, a = () => e.data.current_page === 1 ? e.data.data.length === 0 ? 0 : 1 : e.data.current_page === e.data.last_page ? e.data.total - e.data.data.length : e.data.current_page * e.data.per_page - e.data.per_page, n = () => e.data.current_page === 1 ? e.data.data.length : e.data.current_page === e.data.last_page ? e.data.total : e.data.current_page * e.data.per_page;
    return (o, s) => (v(), R("div", kb, [
      B(l(cb), {
        min: a(),
        max: n(),
        total: o.data.total
      }, null, 8, ["min", "max", "total"]),
      B(l(Iv), null, {
        default: f(() => [
          B(l(zv), { class: "flex items-center gap-1" }, {
            default: f(() => [
              B(l(fb), {
                as: o.as,
                "as-child": "",
                href: o.data.first_page_url
              }, null, 8, ["as", "href"]),
              o.data.prev_page_url ? (v(), g(l(hb), {
                key: 0,
                as: o.as,
                "as-child": "",
                href: o.data.prev_page_url
              }, null, 8, ["as", "href"])) : Z("", !0),
              (v(!0), R(J, null, ce(o.data.links, (r, i) => (v(), R(J, null, [
                i < 5 ? (v(), R("div", { key: i }, [
                  B(l(Ge), {
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
              o.data.links.length > 5 ? (v(), g(l(pb), { key: 1 })) : Z("", !0),
              o.data.next_page_url ? (v(), g(l(mb), {
                key: 2,
                as: o.as,
                "as-child": "",
                href: o.data.next_page_url
              }, null, 8, ["as", "href"])) : Z("", !0),
              B(l(vb), {
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
}), Bb = /* @__PURE__ */ y({
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
    const o = X(t, e);
    return (s, r) => (v(), g(l(hh), W(H(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), P_ = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(bh), P(l(n), {
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
}), Db = /* @__PURE__ */ y({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => {
      var o;
      return v(), g(Oe((o = a.tab) != null && o.is ? a.tab.is : "a"), {
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
            (s = a.tab) != null && s.icon ? (v(), g(Oe(a.tab.icon), {
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
}), $s = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(gh), P(a.value, {
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
}), E_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(yh), P({
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
}), Sb = {}, Pb = { class: "mt-2 text-text ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function Eb(t, e) {
  return v(), R("div", Pb, [
    b(t.$slots, "default")
  ]);
}
const Ob = /* @__PURE__ */ qa(Sb, [["render", Eb]]), O_ = /* @__PURE__ */ y({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(t) {
    const e = t, a = $(
      () => e.tabs.find((n) => n.active)
    );
    return (n, o) => (v(), g(l(Bb), null, {
      default: f(() => [
        B(l($s), { class: "hidden gap-2 md:block" }, {
          default: f(() => [
            (v(!0), R(J, null, ce(n.tabs, (s) => (v(), g(l(Db), {
              key: s.name,
              tab: s
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        B(l($s), { class: "flex md:hidden" }, {
          default: f(() => [
            B(l(By), null, {
              default: f(() => [
                B(l(Sy), { "as-child": "" }, {
                  default: f(() => [
                    B(l(Ge), { variant: "secondary" }, {
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
                B(l(Py), { class: "w-full" }, {
                  default: f(() => [
                    (v(!0), R(J, null, ce(n.tabs, (s) => (v(), g(l(Ey), P({
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
        B(l(Ob), null, {
          default: f(() => [
            b(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Ab = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, A_ = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(tm), P({
      class: l(T)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: u }) => [
        B(l(Lb), null, {
          default: f(() => [
            B(l(Ub)),
            B(l(Nb)),
            B(l(zb))
          ]),
          _: 1
        }),
        re("div", Ab, [
          (v(!0), R(J, null, ce(d, (c) => (v(), g(l(Ib), {
            key: c.value.toString()
          }, {
            default: f(() => [
              B(l(Rb), null, {
                default: f(() => [
                  B(l(Cs), null, {
                    default: f(() => [
                      (v(!0), R(J, null, ce(u, (p) => (v(), g(l(Fb), { key: p }, {
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
              B(l(Vb), null, {
                default: f(() => [
                  (v(!0), R(J, null, ce(c.rows, (p, _) => (v(), g(l(Cs), {
                    key: `weekDate-${_}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), R(J, null, ce(p, (m) => (v(), g(l(Mb), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          B(l(Tb), {
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
}), Mb = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(lm), P({
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
}), Tb = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(pm), P({
      class: l(T)(
        l(Ht)({ variant: "ghost" }),
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
}), Ib = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(om), P({
      class: l(T)("w-full border-collapse space-y-1", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vb = /* @__PURE__ */ y({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(um), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rb = /* @__PURE__ */ y({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(dm), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cs = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(cm), P({
      class: l(T)("mt-2 flex w-full", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fb = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(sm), P({
      class: l(T)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lb = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(am), P({
      class: l(T)("relative flex w-full items-center justify-between pt-1", e.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Nb = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(nm), P({
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
}), zb = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(rm), P({
      class: l(T)(
        l(Ht)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          B(l(Mg), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ub = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(im), P({
      class: l(T)(
        l(Ht)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          B(l(Ag), { class: "size-4" })
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
    return (n, o) => (v(), g(l(Hm), P(a.value, {
      class: l(T)(
        "relative shrink-0 bg-border",
        e.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        e.class
      )
    }), {
      default: f(() => [
        e.label ? (v(), R("span", {
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
}), Kb = /* @__PURE__ */ y({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = X(t, e);
    return (s, r) => (v(), g(l(Vr), W(H(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), M_ = /* @__PURE__ */ y({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Ha), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hb = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(pl), null, {
      default: f(() => [
        B(l(gl), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        B(l(hl), P({
          class: l(T)(l(jb)({ side: r.side }), a.class)
        }, { ...l(s), ...r.$attrs }), {
          default: f(() => [
            b(r.$slots, "default"),
            B(l(Ha), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: f(() => [
                B(l(Kn), { class: "h-4 w-4 text-muted-foreground" })
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
}), T_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Ur), P({
      class: l(T)("text-sm text-muted-foreground", e.class)
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), I_ = /* @__PURE__ */ y({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
      class: K(l(T)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), V_ = /* @__PURE__ */ y({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
      class: K(l(T)("flex flex-col gap-y-2 text-center sm:text-left", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), R_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(zr), P({
      class: l(T)("text-lg font-semibold text-foreground", e.class)
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), F_ = /* @__PURE__ */ y({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Rr), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jb = xa(
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
), Gb = "sidebar:state", Yb = 60 * 60 * 24 * 7, qb = "16rem", Jb = "18rem", Qb = "3rem", Zb = "b", [jn, Xb] = ne("Sidebar"), e0 = { class: "flex h-full w-full flex-col" }, t0 = ["data-state", "data-collapsible", "data-variant", "data-side"], a0 = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col bg-sidebar text-sidebar-foreground group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow"
}, L_ = /* @__PURE__ */ y({
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
    return (r, i) => r.collapsible === "none" ? (v(), R("div", P({
      key: 0,
      class: l(T)("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", e.class)
    }, r.$attrs), [
      b(r.$slots, "default")
    ], 16)) : l(a) ? (v(), g(l(Kb), P({
      key: 1,
      open: l(o)
    }, r.$attrs, { "onUpdate:open": l(s) }), {
      default: f(() => [
        B(l(Hb), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: r.side,
          class: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: Pt({
            "--sidebar-width": l(Jb)
          })
        }, {
          default: f(() => [
            re("div", e0, [
              b(r.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (v(), R("div", {
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
        re("div", a0, [
          b(r.$slots, "default", { state: l(n) })
        ])
      ], 16)
    ], 8, t0));
  }
}), N_ = /* @__PURE__ */ y({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
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
}), z_ = /* @__PURE__ */ y({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
      "data-sidebar": "footer",
      class: K(l(T)("flex flex-col gap-2 p-2", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), U_ = /* @__PURE__ */ y({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
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
}), K_ = /* @__PURE__ */ y({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
      "data-sidebar": "group-content",
      class: K(l(T)("w-full text-sm", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), H_ = /* @__PURE__ */ y({
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
}), j_ = /* @__PURE__ */ y({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
      "data-sidebar": "header",
      class: K(l(T)("flex flex-col gap-2 p-2", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), G_ = /* @__PURE__ */ y({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(rb, {
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
}), Y_ = /* @__PURE__ */ y({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("main", {
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
}), q_ = /* @__PURE__ */ y({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("ul", {
      "data-sidebar": "menu",
      class: K(l(T)("flex w-full min-w-0 flex-col gap-1", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), J_ = /* @__PURE__ */ y({
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
}), Q_ = /* @__PURE__ */ y({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
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
}), n0 = /* @__PURE__ */ y({
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
    const o = X(t, e);
    return (s, r) => (v(), g(l(Fh), W(H(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), o0 = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(Uh), null, {
      default: f(() => [
        B(l(zh), P({ ...l(s), ...r.$attrs }, {
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
}), Z_ = /* @__PURE__ */ y({
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
    return (a, n) => (v(), g(l(ki), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), l0 = /* @__PURE__ */ y({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(Lh), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ks = /* @__PURE__ */ y({
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
      class: l(T)(l(i0)({ variant: a.variant, size: a.size }), e.class),
      as: a.as,
      "as-child": a.asChild
    }, a.$attrs), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), X_ = /* @__PURE__ */ y({
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
    return (s, r) => s.tooltip ? (v(), g(l(n0), { key: 1 }, {
      default: f(() => [
        B(l(l0), { "as-child": "" }, {
          default: f(() => [
            B(ks, W(H({ ...o.value, ...s.$attrs })), {
              default: f(() => [
                b(s.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        B(l(o0), {
          side: "right",
          align: "center",
          hidden: l(n) !== "collapsed" || l(a)
        }, {
          default: f(() => [
            typeof s.tooltip == "string" ? (v(), R(J, { key: 0 }, [
              q(Q(s.tooltip), 1)
            ], 64)) : (v(), g(Oe(s.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (v(), g(ks, W(P({ key: 0 }, { ...o.value, ...s.$attrs })), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ew = /* @__PURE__ */ y({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("li", {
      "data-sidebar": "menu-item",
      class: K(l(T)("group/menu-item relative", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Bs = /* @__PURE__ */ y({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("div", {
      class: K(l(T)("animate-pulse rounded-md bg-skeleton", e.class))
    }, null, 2));
  }
}), tw = /* @__PURE__ */ y({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (n, o) => (v(), R("div", {
      "data-sidebar": "menu-skeleton",
      class: K(l(T)("flex h-8 items-center gap-2 rounded-md px-2", e.class))
    }, [
      n.showIcon ? (v(), g(Bs, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : Z("", !0),
      B(Bs, {
        class: "h-4 max-w-[--skeleton-width] flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: Pt({ "--skeleton-width": a.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), aw = /* @__PURE__ */ y({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), R("ul", {
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
}), nw = /* @__PURE__ */ y({
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
}), s0 = {};
function r0(t, e) {
  return v(), R("li", null, [
    b(t.$slots, "default")
  ]);
}
const ow = /* @__PURE__ */ qa(s0, [["render", r0]]), lw = /* @__PURE__ */ y({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Gi("(max-width: 768px)"), s = A(!1), r = Al(a, "open", n, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function i(p) {
      r.value = p, document.cookie = `${Gb}=${r.value}; path=/; max-age=${Yb}`;
    }
    function d(p) {
      s.value = p;
    }
    function u() {
      return o.value ? d(!s.value) : i(!r.value);
    }
    Eo("keydown", (p) => {
      p.key === Zb && (p.metaKey || p.ctrlKey) && (p.preventDefault(), u());
    });
    const c = $(() => r.value ? "expanded" : "collapsed");
    return Xb({
      state: c,
      open: r,
      setOpen: i,
      isMobile: o,
      openMobile: s,
      setOpenMobile: d,
      toggleSidebar: u
    }), (p, _) => (v(), g(l(ki), { "delay-duration": 0 }, {
      default: f(() => [
        re("div", P({
          style: {
            "--sidebar-width": l(qb),
            "--sidebar-width-icon": l(Qb)
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
}), sw = /* @__PURE__ */ y({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(t) {
    const e = t, { toggleSidebar: a } = jn();
    return (n, o) => (v(), R("button", {
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
}), rw = /* @__PURE__ */ y({
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
}), iw = /* @__PURE__ */ y({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(t) {
    const e = t, { toggleSidebar: a } = jn();
    return (n, o) => (v(), g(Ge, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: K(l(T)("h-7 w-7", e.class)),
      onClick: l(a)
    }, {
      default: f(() => [
        B(l(Tg)),
        o[0] || (o[0] = re("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), i0 = xa(
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
), dw = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(oh), P({
      class: l(T)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        a.class
      )
    }, l(s)), {
      default: f(() => [
        B(l(rh), { class: "relative h-2 w-full grow overflow-hidden rounded-full bg-accent data-[orientation=vertical]:w-2" }, {
          default: f(() => [
            B(l(ih), { class: "absolute h-full bg-primary data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (v(!0), R(J, null, ce(r.modelValue, (d, u) => (v(), g(l(sh), {
          key: u,
          class: "block size-5 rounded-full border-2 border-primary bg-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), d0 = 5, u0 = 5e6, ct = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let uo = 0;
function c0() {
  return uo = (uo + 1) % Number.MAX_VALUE, uo.toString();
}
const co = /* @__PURE__ */ new Map();
function Ds(t) {
  if (co.has(t)) return;
  const e = setTimeout(() => {
    co.delete(t), Oa({
      type: ct.REMOVE_TOAST,
      toastId: t
    });
  }, u0);
  co.set(t, e);
}
const Ne = A({
  toasts: []
});
function Oa(t) {
  switch (t.type) {
    case ct.ADD_TOAST:
      Ne.value.toasts = [t.toast, ...Ne.value.toasts].slice(0, d0);
      break;
    case ct.UPDATE_TOAST:
      Ne.value.toasts = Ne.value.toasts.map(
        (e) => e.id === t.toast.id ? { ...e, ...t.toast } : e
      );
      break;
    case ct.DISMISS_TOAST: {
      const { toastId: e } = t;
      e ? Ds(e) : Ne.value.toasts.forEach((a) => {
        Ds(a.id);
      }), Ne.value.toasts = Ne.value.toasts.map(
        (a) => a.id === e || e === void 0 ? {
          ...a,
          open: !1
        } : a
      );
      break;
    }
    case ct.REMOVE_TOAST:
      t.toastId === void 0 ? Ne.value.toasts = [] : Ne.value.toasts = Ne.value.toasts.filter((e) => e.id !== t.toastId);
      break;
  }
}
function p0() {
  return {
    toasts: $(() => Ne.value.toasts),
    toast: f0,
    dismiss: (t) => Oa({ type: ct.DISMISS_TOAST, toastId: t })
  };
}
function f0(t) {
  const e = c0(), a = (o) => Oa({
    type: ct.UPDATE_TOAST,
    toast: { ...o, id: e }
  }), n = () => Oa({ type: ct.DISMISS_TOAST, toastId: e });
  return Oa({
    type: ct.ADD_TOAST,
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
const v0 = { class: "flex gap-3" }, m0 = { class: "grid gap-1" }, uw = /* @__PURE__ */ y({
  __name: "Toaster",
  setup(t) {
    const { toasts: e } = p0();
    return (a, n) => (v(), g(l(_0), null, {
      default: f(() => [
        (v(!0), R(J, null, ce(l(e), (o) => (v(), g(l(h0), P({
          key: o.id,
          ref_for: !0
        }, o, { class: "my-1" }), {
          default: f(() => [
            re("div", v0, [
              (v(), g(Oe(o.icon), {
                class: K(l(T)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              re("div", m0, [
                o.title ? (v(), g(l(b0), { key: 0 }, {
                  default: f(() => [
                    q(Q(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : Z("", !0),
                o.description ? (v(), R(J, { key: 1 }, [
                  yd(o.description) ? (v(), g(l(Ss), { key: 0 }, {
                    default: f(() => [
                      (v(), g(Oe(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (v(), g(l(Ss), { key: 1 }, {
                    default: f(() => [
                      q(Q(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : Z("", !0),
                B(l(y0))
              ]),
              (v(), g(Oe(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        B(l(g0))
      ]),
      _: 1
    }));
  }
}), h0 = /* @__PURE__ */ y({
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
    }), s = X(o, n);
    return (r, i) => (v(), g(l(Oh), P(l(s), {
      class: l(T)(l(w0)({ variant: r.variant }), a.class),
      "onUpdate:open": r.onOpenChange
    }), {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), g0 = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Mh), P(a.value, {
      class: l(T)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e.class
      )
    }), null, 16, ["class"]));
  }
}), cw = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Ah), W(H(a.value)), {
      default: f(() => [
        B(l(Ge), {
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
}), y0 = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l($i), P(a.value, {
      class: l(T)(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        e.class
      )
    }), {
      default: f(() => [
        B(l(Kn), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), b0 = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Th), P(a.value, {
      class: l(T)("text-sm font-semibold", e.class)
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ss = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Ih), P({
      class: l(T)("text-sm opacity-90", e.class)
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _0 = /* @__PURE__ */ y({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), g(l(wh), W(H(e)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), w0 = xa(
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
  P0 as Accordion,
  E0 as AccordionContent,
  O0 as AccordionItem,
  A0 as AccordionTrigger,
  M0 as Badge,
  Ot as Base,
  Dy as BaseDropdownMenuItem,
  T0 as Breadcrumb,
  I0 as BreadcrumbEllipsis,
  V0 as BreadcrumbItem,
  R0 as BreadcrumbLink,
  F0 as BreadcrumbList,
  L0 as BreadcrumbPage,
  N0 as BreadcrumbSeparator,
  Ge as Button,
  G0 as Calendar,
  Ti as CalendarCell,
  Ii as CalendarCellTrigger,
  Vi as CalendarGrid,
  Ri as CalendarGridBody,
  Fi as CalendarGridHead,
  Bn as CalendarGridRow,
  Li as CalendarHeadCell,
  Ni as CalendarHeader,
  zi as CalendarHeading,
  zg as CalendarNextButton,
  Ug as CalendarPrevButton,
  fy as CalendarWithSelect,
  z0 as Card,
  H0 as CardContent,
  K0 as CardDescription,
  j0 as CardFooter,
  U0 as CardHeader,
  W0 as CardTitle,
  Ty as CharacterCount,
  h_ as Checkbox,
  $_ as CollapsibleTableRow,
  g_ as Combobox,
  Ji as Command,
  e_ as CommandDialog,
  by as CommandEmpty,
  _y as CommandGroup,
  xy as CommandInput,
  $y as CommandItem,
  ky as CommandList,
  t_ as CommandSeparator,
  a_ as CommandShortcut,
  y_ as DatePicker,
  Fy as Description,
  Qi as Dialog,
  Z0 as DialogClose,
  Zi as DialogContent,
  gy as DialogDescription,
  yy as DialogFooter,
  my as DialogHeader,
  X0 as DialogScrollContent,
  hy as DialogTitle,
  vy as DialogTrigger,
  By as DropdownMenu,
  s_ as DropdownMenuCheckboxItem,
  Py as DropdownMenuContent,
  n_ as DropdownMenuGroup,
  l_ as DropdownMenuItem,
  u_ as DropdownMenuLabel,
  Ey as DropdownMenuLink,
  xv as DropdownMenuPortal,
  o_ as DropdownMenuRadioGroup,
  r_ as DropdownMenuRadioItem,
  d_ as DropdownMenuSeparator,
  i_ as DropdownMenuShortcut,
  c_ as DropdownMenuSub,
  f_ as DropdownMenuSubContent,
  p_ as DropdownMenuSubTrigger,
  Sy as DropdownMenuTrigger,
  Ny as Error,
  v_ as Form,
  Gy as FormElement,
  m_ as FormGrid,
  b_ as ImageUpload,
  rb as Input,
  Xi as Label,
  B_ as LumuixDatatable,
  D_ as LumuixModal,
  x_ as LumuixModeToggle,
  S_ as LumuixPagination,
  O_ as LumuixTabs,
  Iv as Pagination,
  cb as PaginationDetails,
  pb as PaginationEllipsis,
  fb as PaginationFirst,
  vb as PaginationLast,
  zv as PaginationList,
  S0 as PaginationListItem,
  mb as PaginationNext,
  hb as PaginationPrev,
  ed as Popover,
  ad as PopoverContent,
  td as PopoverTrigger,
  A_ as RangeCalendar,
  Mb as RangeCalendarCell,
  Tb as RangeCalendarCellTrigger,
  Ib as RangeCalendarGrid,
  Vb as RangeCalendarGridBody,
  Rb as RangeCalendarGridHead,
  Cs as RangeCalendarGridRow,
  Fb as RangeCalendarHeadCell,
  Lb as RangeCalendarHeader,
  Nb as RangeCalendarHeading,
  zb as RangeCalendarNextButton,
  Ub as RangeCalendarPrevButton,
  __ as Select,
  To as SelectContent,
  Y0 as SelectGroup,
  Io as SelectItem,
  q0 as SelectItemText,
  J0 as SelectLabel,
  Oo as SelectRoot,
  cy as SelectScrollDownButton,
  uy as SelectScrollUpButton,
  Q0 as SelectSeparator,
  Mo as SelectTrigger,
  Ao as SelectValue,
  Wb as Separator,
  Kb as Sheet,
  M_ as SheetClose,
  Hb as SheetContent,
  T_ as SheetDescription,
  I_ as SheetFooter,
  V_ as SheetHeader,
  R_ as SheetTitle,
  F_ as SheetTrigger,
  L_ as Sidebar,
  N_ as SidebarContent,
  z_ as SidebarFooter,
  U_ as SidebarGroup,
  W_ as SidebarGroupAction,
  K_ as SidebarGroupContent,
  H_ as SidebarGroupLabel,
  j_ as SidebarHeader,
  G_ as SidebarInput,
  Y_ as SidebarInset,
  q_ as SidebarMenu,
  J_ as SidebarMenuAction,
  Q_ as SidebarMenuBadge,
  X_ as SidebarMenuButton,
  ew as SidebarMenuItem,
  tw as SidebarMenuSkeleton,
  aw as SidebarMenuSub,
  nw as SidebarMenuSubButton,
  ow as SidebarMenuSubItem,
  lw as SidebarProvider,
  sw as SidebarRail,
  rw as SidebarSeparator,
  iw as SidebarTrigger,
  Bs as Skeleton,
  dw as Slider,
  Ob as TabBaseContent,
  yb as Table,
  bb as TableBody,
  xb as TableCaption,
  Dn as TableCell,
  k_ as TableEmpty,
  C_ as TableFooter,
  _b as TableHead,
  wb as TableHeader,
  Va as TableRow,
  Vo as TableRowAction,
  E_ as TabsContent,
  Db as TabsItem,
  $s as TabsList,
  Bb as TabsRoot,
  P_ as TabsTrigger,
  w_ as TextArea,
  h0 as Toast,
  cw as ToastAction,
  y0 as ToastClose,
  Ss as ToastDescription,
  _0 as ToastProvider,
  b0 as ToastTitle,
  g0 as ToastViewport,
  uw as Toaster,
  db as Toggle,
  n0 as Tooltip,
  o0 as TooltipContent,
  Z_ as TooltipProvider,
  l0 as TooltipTrigger,
  Fg as badgeVariants,
  Ht as buttonVariants,
  $0 as preset,
  jb as sheetVariants,
  i0 as sidebarMenuButtonVariants,
  Lg as spinnerSize,
  f0 as toast,
  w0 as toastVariants,
  jn as useSidebar,
  p0 as useToast
};
