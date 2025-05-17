var Ps = (t) => {
  throw TypeError(t);
};
var dd = (t, e, a) => e.has(t) || Ps("Cannot " + a);
var Fa = (t, e, a) => (dd(t, e, "read from private field"), a ? a.call(t) : e.get(t)), Os = (t, e, a) => e.has(t) ? Ps("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a);
import * as Rn from "vue";
import { computed as C, ref as O, shallowRef as wt, watch as X, getCurrentScope as eo, onScopeDispose as to, shallowReadonly as ra, unref as s, defineComponent as b, toRefs as he, createBlock as w, openBlock as v, withCtx as f, renderSlot as _, getCurrentInstance as Ee, toRef as Cr, camelize as ao, withKeys as Me, h as Ie, onMounted as ce, createElementVNode as me, toDisplayString as se, normalizeProps as H, guardReactiveProps as G, createTextVNode as Z, mergeProps as S, withModifiers as $e, createCommentVNode as re, createElementBlock as L, Fragment as ne, renderList as be, resolveDynamicComponent as Ne, createVNode as P, useSlots as Ol, onBeforeMount as cd, Teleport as en, watchEffect as _e, onBeforeUnmount as no, nextTick as ae, withDirectives as xa, vShow as $r, watchSyncEffect as Al, isRef as zt, inject as tn, provide as oo, toHandlers as pd, normalizeStyle as ut, toHandlerKey as Ml, Comment as Br, cloneVNode as Tl, vModelSelect as fd, onBeforeUpdate as vd, onUpdated as md, markRaw as Il, onUnmounted as ze, readonly as Ca, toRaw as hd, reactive as ro, customRef as kr, mergeDefaults as Dr, watchPostEffect as Sr, effectScope as Er, normalizeClass as q, toValue as Te, withMemo as gd, hasInjectionContext as Vl, mergeModels as Yo, useModel as Rl, vModelDynamic as yd, vModelText as bd, isVNode as wd } from "vue";
function _d(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Fl(t, e) {
  return { handler: t, config: e };
}
Fl.withOptions = function(t, e = () => ({})) {
  function a(n) {
    return { handler: t(n), config: e(n) };
  }
  return a.__isOptionsFunction = !0, a;
};
var xd = Fl, Cd = xd;
const $d = Cd;
function As(t) {
  return Object.fromEntries(
    Object.entries(t).filter(([e]) => e !== "DEFAULT")
  );
}
var Bd = $d(
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
      { values: As(a("animationDuration")) }
    ), e(
      { delay: (n) => ({ animationDelay: n }) },
      { values: a("animationDelay") }
    ), e(
      { ease: (n) => ({ animationTimingFunction: n }) },
      { values: As(a("animationTimingFunction")) }
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
const kd = /* @__PURE__ */ _d(Bd), q_ = {
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
function da(t, e) {
  return t - e * Math.floor(t / e);
}
const Ll = 1721426;
function jt(t, e, a, n) {
  e = an(t, e);
  let o = e - 1, r = -2;
  return a <= 2 ? r = 0 : Vt(e) && (r = -1), Ll - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + r + n);
}
function Vt(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function an(t, e) {
  return t === "BC" ? 1 - e : e;
}
function so(t) {
  let e = "AD";
  return t <= 0 && (e = "BC", t = 1 - t), [
    e,
    t
  ];
}
const Dd = {
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
class tt {
  fromJulianDay(e) {
    let a = e, n = a - Ll, o = Math.floor(n / 146097), r = da(n, 146097), l = Math.floor(r / 36524), i = da(r, 36524), u = Math.floor(i / 1461), c = da(i, 1461), d = Math.floor(c / 365), p = o * 400 + l * 100 + u * 4 + d + (l !== 4 && d !== 4 ? 1 : 0), [g, m] = so(p), h = a - jt(g, m, 1, 1), y = 2;
    a < jt(g, m, 3, 1) ? y = 0 : Vt(m) && (y = 1);
    let x = Math.floor(((h + y) * 12 + 373) / 367), $ = a - jt(g, m, x, 1) + 1;
    return new Be(g, m, x, $);
  }
  toJulianDay(e) {
    return jt(e.era, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    return Dd[Vt(e.year) ? "leapyear" : "standard"][e.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(e) {
    return 12;
  }
  getDaysInYear(e) {
    return Vt(e.year) ? 366 : 365;
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
const Sd = {
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
function Pe(t, e) {
  return e = Le(e, t.calendar), t.era === e.era && t.year === e.year && t.month === e.month && t.day === e.day;
}
function Pr(t, e) {
  return e = Le(e, t.calendar), t = Ga(t), e = Ga(e), t.era === e.era && t.year === e.year && t.month === e.month;
}
function st(t, e) {
  return Or(t.calendar, e.calendar) && Pe(t, e);
}
function Ms(t, e) {
  return Or(t.calendar, e.calendar) && Pr(t, e);
}
function Or(t, e) {
  var a, n, o, r;
  return (r = (o = (a = t.isEqual) === null || a === void 0 ? void 0 : a.call(t, e)) !== null && o !== void 0 ? o : (n = e.isEqual) === null || n === void 0 ? void 0 : n.call(e, t)) !== null && r !== void 0 ? r : t.identifier === e.identifier;
}
function Nl(t, e) {
  return Pe(t, Fn(e));
}
function zl(t, e, a) {
  let n = t.calendar.toJulianDay(t), o = Ad(e), r = Math.ceil(n + 1 - o) % 7;
  return r < 0 && (r += 7), r;
}
function Ed(t) {
  return gt(Date.now(), t);
}
function Fn(t) {
  return Id(Ed(t));
}
function Wl(t, e) {
  return t.calendar.toJulianDay(t) - e.calendar.toJulianDay(e);
}
function Pd(t, e) {
  return Ts(t) - Ts(e);
}
function Ts(t) {
  return t.hour * 36e5 + t.minute * 6e4 + t.second * 1e3 + t.millisecond;
}
let Do = null;
function Ct() {
  return Do == null && (Do = new Intl.DateTimeFormat().resolvedOptions().timeZone), Do;
}
function Ga(t) {
  return t.subtract({
    days: t.day - 1
  });
}
function Is(t) {
  return t.add({
    days: t.calendar.getDaysInMonth(t) - t.day
  });
}
const Vs = /* @__PURE__ */ new Map();
function Od(t) {
  if (Intl.Locale) {
    let a = Vs.get(t);
    return a || (a = new Intl.Locale(t).maximize().region, a && Vs.set(t, a)), a;
  }
  let e = t.split("-")[1];
  return e === "u" ? void 0 : e;
}
function Ad(t) {
  let e = Od(t);
  return e && Sd[e] || 0;
}
function ma(t) {
  t = Le(t, new tt());
  let e = an(t.era, t.year);
  return Ul(e, t.month, t.day, t.hour, t.minute, t.second, t.millisecond);
}
function Ul(t, e, a, n, o, r, l) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, r, l), i.setUTCFullYear(t, e - 1, a), i.getTime();
}
function Jo(t, e) {
  if (e === "UTC") return 0;
  if (t > 0 && e === Ct()) return new Date(t).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: r, minute: l, second: i } = Kl(t, e);
  return Ul(a, n, o, r, l, i, 0) - Math.floor(t / 1e3) * 1e3;
}
const Rs = /* @__PURE__ */ new Map();
function Kl(t, e) {
  let a = Rs.get(e);
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
  }), Rs.set(e, a));
  let n = a.formatToParts(new Date(t)), o = {};
  for (let r of n) r.type !== "literal" && (o[r.type] = r.value);
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
const Fs = 864e5;
function Md(t, e, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((r) => Td(t, e, r));
}
function Td(t, e, a) {
  let n = Kl(a, e);
  return t.year === n.year && t.month === n.month && t.day === n.day && t.hour === n.hour && t.minute === n.minute && t.second === n.second;
}
function ht(t, e, a = "compatible") {
  let n = ha(t);
  if (e === "UTC") return ma(n);
  if (e === Ct() && a === "compatible") {
    n = Le(n, new tt());
    let u = /* @__PURE__ */ new Date(), c = an(n.era, n.year);
    return u.setFullYear(c, n.month - 1, n.day), u.setHours(n.hour, n.minute, n.second, n.millisecond), u.getTime();
  }
  let o = ma(n), r = Jo(o - Fs, e), l = Jo(o + Fs, e), i = Md(n, e, o - r, o - l);
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
      return Math.min(o - r, o - l);
    case "compatible":
    case "later":
      return Math.max(o - r, o - l);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function Hl(t, e, a = "compatible") {
  return new Date(ht(t, e, a));
}
function gt(t, e) {
  let a = Jo(t, e), n = new Date(t + a), o = n.getUTCFullYear(), r = n.getUTCMonth() + 1, l = n.getUTCDate(), i = n.getUTCHours(), u = n.getUTCMinutes(), c = n.getUTCSeconds(), d = n.getUTCMilliseconds();
  return new ya(o < 1 ? "BC" : "AD", o < 1 ? -o + 1 : o, r, l, e, a, i, u, c, d);
}
function Id(t) {
  return new Be(t.calendar, t.era, t.year, t.month, t.day);
}
function ha(t, e) {
  let a = 0, n = 0, o = 0, r = 0;
  if ("timeZone" in t) ({ hour: a, minute: n, second: o, millisecond: r } = t);
  else if ("hour" in t && !e) return t;
  return e && ({ hour: a, minute: n, second: o, millisecond: r } = e), new ga(t.calendar, t.era, t.year, t.month, t.day, a, n, o, r);
}
function Le(t, e) {
  if (Or(t.calendar, e)) return t;
  let a = e.fromJulianDay(t.calendar.toJulianDay(t)), n = t.copy();
  return n.calendar = e, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, qt(n), n;
}
function Vd(t, e, a) {
  if (t instanceof ya)
    return t.timeZone === e ? t : Fd(t, e);
  let n = ht(t, e, a);
  return gt(n, e);
}
function Rd(t) {
  let e = ma(t) - t.offset;
  return new Date(e);
}
function Fd(t, e) {
  let a = ma(t) - t.offset;
  return Le(gt(a, e), t.calendar);
}
const La = 36e5;
function lo(t, e) {
  let a = t.copy(), n = "hour" in a ? Wd(a, e) : 0;
  Qo(a, e.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, t), a.month += e.months || 0, Xo(a), jl(a), a.day += (e.weeks || 0) * 7, a.day += e.days || 0, a.day += n, Ld(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
  let o = a.calendar.getYearsInEra(a);
  if (a.year > o) {
    var r, l;
    let u = (r = (l = a.calendar).isInverseEra) === null || r === void 0 ? void 0 : r.call(l, a);
    a.year = o, a.month = u ? 1 : a.calendar.getMonthsInYear(a), a.day = u ? 1 : a.calendar.getDaysInMonth(a);
  }
  a.month < 1 && (a.month = 1, a.day = 1);
  let i = a.calendar.getMonthsInYear(a);
  return a.month > i && (a.month = i, a.day = a.calendar.getDaysInMonth(a)), a.day = Math.max(1, Math.min(a.calendar.getDaysInMonth(a), a.day)), a;
}
function Qo(t, e) {
  var a, n;
  !((a = (n = t.calendar).isInverseEra) === null || a === void 0) && a.call(n, t) && (e = -e), t.year += e;
}
function Xo(t) {
  for (; t.month < 1; )
    Qo(t, -1), t.month += t.calendar.getMonthsInYear(t);
  let e = 0;
  for (; t.month > (e = t.calendar.getMonthsInYear(t)); )
    t.month -= e, Qo(t, 1);
}
function Ld(t) {
  for (; t.day < 1; )
    t.month--, Xo(t), t.day += t.calendar.getDaysInMonth(t);
  for (; t.day > t.calendar.getDaysInMonth(t); )
    t.day -= t.calendar.getDaysInMonth(t), t.month++, Xo(t);
}
function jl(t) {
  t.month = Math.max(1, Math.min(t.calendar.getMonthsInYear(t), t.month)), t.day = Math.max(1, Math.min(t.calendar.getDaysInMonth(t), t.day));
}
function qt(t) {
  t.calendar.constrainDate && t.calendar.constrainDate(t), t.year = Math.max(1, Math.min(t.calendar.getYearsInEra(t), t.year)), jl(t);
}
function Gl(t) {
  let e = {};
  for (let a in t) typeof t[a] == "number" && (e[a] = -t[a]);
  return e;
}
function ql(t, e) {
  return lo(t, Gl(e));
}
function Ar(t, e) {
  let a = t.copy();
  return e.era != null && (a.era = e.era), e.year != null && (a.year = e.year), e.month != null && (a.month = e.month), e.day != null && (a.day = e.day), qt(a), a;
}
function Ln(t, e) {
  let a = t.copy();
  return e.hour != null && (a.hour = e.hour), e.minute != null && (a.minute = e.minute), e.second != null && (a.second = e.second), e.millisecond != null && (a.millisecond = e.millisecond), zd(a), a;
}
function Nd(t) {
  t.second += Math.floor(t.millisecond / 1e3), t.millisecond = hn(t.millisecond, 1e3), t.minute += Math.floor(t.second / 60), t.second = hn(t.second, 60), t.hour += Math.floor(t.minute / 60), t.minute = hn(t.minute, 60);
  let e = Math.floor(t.hour / 24);
  return t.hour = hn(t.hour, 24), e;
}
function zd(t) {
  t.millisecond = Math.max(0, Math.min(t.millisecond, 1e3)), t.second = Math.max(0, Math.min(t.second, 59)), t.minute = Math.max(0, Math.min(t.minute, 59)), t.hour = Math.max(0, Math.min(t.hour, 23));
}
function hn(t, e) {
  let a = t % e;
  return a < 0 && (a += e), a;
}
function Wd(t, e) {
  return t.hour += e.hours || 0, t.minute += e.minutes || 0, t.second += e.seconds || 0, t.millisecond += e.milliseconds || 0, Nd(t);
}
function Mr(t, e, a, n) {
  let o = t.copy();
  switch (e) {
    case "era": {
      let i = t.calendar.getEras(), u = i.indexOf(t.era);
      if (u < 0) throw new Error("Invalid era: " + t.era);
      u = yt(u, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[u], qt(o);
      break;
    }
    case "year":
      var r, l;
      !((r = (l = o.calendar).isInverseEra) === null || r === void 0) && r.call(l, o) && (a = -a), o.year = yt(t.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, t);
      break;
    case "month":
      o.month = yt(t.month, a, 1, t.calendar.getMonthsInYear(t), n == null ? void 0 : n.round);
      break;
    case "day":
      o.day = yt(t.day, a, 1, t.calendar.getDaysInMonth(t), n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + e);
  }
  return t.calendar.balanceDate && t.calendar.balanceDate(o), qt(o), o;
}
function Yl(t, e, a, n) {
  let o = t.copy();
  switch (e) {
    case "hour": {
      let r = t.hour, l = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let u = r >= 12;
        l = u ? 12 : 0, i = u ? 23 : 11;
      }
      o.hour = yt(r, a, l, i, n == null ? void 0 : n.round);
      break;
    }
    case "minute":
      o.minute = yt(t.minute, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "second":
      o.second = yt(t.second, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "millisecond":
      o.millisecond = yt(t.millisecond, a, 0, 999, n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + e);
  }
  return o;
}
function yt(t, e, a, n, o = !1) {
  if (o) {
    t += Math.sign(e), t < a && (t = n);
    let r = Math.abs(e);
    e > 0 ? t = Math.ceil(t / r) * r : t = Math.floor(t / r) * r, t > n && (t = a);
  } else
    t += e, t < a ? t = n - (a - t - 1) : t > n && (t = a + (t - n - 1));
  return t;
}
function Jl(t, e) {
  let a;
  if (e.years != null && e.years !== 0 || e.months != null && e.months !== 0 || e.weeks != null && e.weeks !== 0 || e.days != null && e.days !== 0) {
    let o = lo(ha(t), {
      years: e.years,
      months: e.months,
      weeks: e.weeks,
      days: e.days
    });
    a = ht(o, t.timeZone);
  } else
    a = ma(t) - t.offset;
  a += e.milliseconds || 0, a += (e.seconds || 0) * 1e3, a += (e.minutes || 0) * 6e4, a += (e.hours || 0) * 36e5;
  let n = gt(a, t.timeZone);
  return Le(n, t.calendar);
}
function Ud(t, e) {
  return Jl(t, Gl(e));
}
function Kd(t, e, a, n) {
  switch (e) {
    case "hour": {
      let o = 0, r = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let h = t.hour >= 12;
        o = h ? 12 : 0, r = h ? 23 : 11;
      }
      let l = ha(t), i = Le(Ln(l, {
        hour: o
      }), new tt()), u = [
        ht(i, t.timeZone, "earlier"),
        ht(i, t.timeZone, "later")
      ].filter((h) => gt(h, t.timeZone).day === i.day)[0], c = Le(Ln(l, {
        hour: r
      }), new tt()), d = [
        ht(c, t.timeZone, "earlier"),
        ht(c, t.timeZone, "later")
      ].filter((h) => gt(h, t.timeZone).day === c.day).pop(), p = ma(t) - t.offset, g = Math.floor(p / La), m = p % La;
      return p = yt(g, a, Math.floor(u / La), Math.floor(d / La), n == null ? void 0 : n.round) * La + m, Le(gt(p, t.timeZone), t.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return Yl(t, e, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = Mr(ha(t), e, a, n), r = ht(o, t.timeZone);
      return Le(gt(r, t.timeZone), t.calendar);
    }
    default:
      throw new Error("Unsupported field " + e);
  }
}
function Hd(t, e, a) {
  let n = ha(t), o = Ln(Ar(n, e), e);
  if (o.compare(n) === 0) return t;
  let r = ht(o, t.timeZone, a);
  return Le(gt(r, t.timeZone), t.calendar);
}
function jd(t) {
  return `${String(t.hour).padStart(2, "0")}:${String(t.minute).padStart(2, "0")}:${String(t.second).padStart(2, "0")}${t.millisecond ? String(t.millisecond / 1e3).slice(1) : ""}`;
}
function Ql(t) {
  let e = Le(t, new tt()), a;
  return e.era === "BC" ? a = e.year === 1 ? "0000" : "-" + String(Math.abs(1 - e.year)).padStart(6, "00") : a = String(e.year).padStart(4, "0"), `${a}-${String(e.month).padStart(2, "0")}-${String(e.day).padStart(2, "0")}`;
}
function Xl(t) {
  return `${Ql(t)}T${jd(t)}`;
}
function Gd(t) {
  let e = Math.sign(t) < 0 ? "-" : "+";
  t = Math.abs(t);
  let a = Math.floor(t / 36e5), n = t % 36e5 / 6e4;
  return `${e}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function qd(t) {
  return `${Xl(t)}${Gd(t.offset)}[${t.timeZone}]`;
}
function Yd(t, e) {
  if (e.has(t))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Tr(t, e, a) {
  Yd(t, e), e.set(t, a);
}
function Ir(t) {
  let e = typeof t[0] == "object" ? t.shift() : new tt(), a;
  if (typeof t[0] == "string") a = t.shift();
  else {
    let l = e.getEras();
    a = l[l.length - 1];
  }
  let n = t.shift(), o = t.shift(), r = t.shift();
  return [
    e,
    a,
    n,
    o,
    r
  ];
}
var Jd = /* @__PURE__ */ new WeakMap();
class Be {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Be(this.calendar, this.era, this.year, this.month, this.day) : new Be(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(e) {
    return lo(this, e);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(e) {
    return ql(this, e);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e) {
    return Ar(this, e);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    return Mr(this, e, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(e) {
    return Hl(this, e);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Ql(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return Wl(this, e);
  }
  constructor(...e) {
    Tr(this, Jd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, r, l] = Ir(e);
    this.calendar = a, this.era = n, this.year = o, this.month = r, this.day = l, qt(this);
  }
}
var Qd = /* @__PURE__ */ new WeakMap();
class ga {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new ga(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new ga(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(e) {
    return lo(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return ql(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e) {
    return Ar(Ln(this, e), e);
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
        return Mr(this, e, a, n);
      default:
        return Yl(this, e, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(e, a) {
    return Hl(this, e, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Xl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    let a = Wl(this, e);
    return a === 0 ? Pd(this, ha(e)) : a;
  }
  constructor(...e) {
    Tr(this, Qd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, r, l] = Ir(e);
    this.calendar = a, this.era = n, this.year = o, this.month = r, this.day = l, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, qt(this);
  }
}
var Xd = /* @__PURE__ */ new WeakMap();
class ya {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new ya(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new ya(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(e) {
    return Jl(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return Ud(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e, a) {
    return Hd(this, e, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    return Kd(this, e, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return Rd(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return qd(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return this.toDate().getTime() - Vd(e, this.timeZone).toDate().getTime();
  }
  constructor(...e) {
    Tr(this, Xd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, r, l] = Ir(e), i = e.shift(), u = e.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = r, this.day = l, this.timeZone = i, this.offset = u, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, qt(this);
  }
}
const ca = [
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
], Zd = [
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
], On = [
  1867,
  1911,
  1925,
  1988,
  2018
], It = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function Ls(t) {
  const e = ca.findIndex(([a, n, o]) => t.year < a || t.year === a && t.month < n || t.year === a && t.month === n && t.day < o);
  return e === -1 ? ca.length - 1 : e === 0 ? 0 : e - 1;
}
function So(t) {
  let e = On[It.indexOf(t.era)];
  if (!e) throw new Error("Unknown era: " + t.era);
  return new Be(t.year + e, t.month, t.day);
}
class ec extends tt {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = Ls(a);
    return new Be(this, It[n], a.year - On[n], a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(So(e));
  }
  balanceDate(e) {
    let a = So(e), n = Ls(a);
    It[n] !== e.era && (e.era = It[n], e.year = a.year - On[n]), this.constrainDate(e);
  }
  constrainDate(e) {
    let a = It.indexOf(e.era), n = Zd[a];
    if (n != null) {
      let [o, r, l] = n, i = o - On[a];
      e.year = Math.max(1, Math.min(i, e.year)), e.year === i && (e.month = Math.min(r, e.month), e.month === r && (e.day = Math.min(l, e.day)));
    }
    if (e.year === 1 && a >= 0) {
      let [, o, r] = ca[a];
      e.month = Math.max(o, e.month), e.month === o && (e.day = Math.max(r, e.day));
    }
  }
  getEras() {
    return It;
  }
  getYearsInEra(e) {
    let a = It.indexOf(e.era), n = ca[a], o = ca[a + 1];
    if (o == null)
      return 9999 - n[0] + 1;
    let r = o[0] - n[0];
    return (e.month < o[1] || e.month === o[1] && e.day < o[2]) && r++, r;
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(So(e));
  }
  getMinimumMonthInYear(e) {
    let a = Ns(e);
    return a ? a[1] : 1;
  }
  getMinimumDayInMonth(e) {
    let a = Ns(e);
    return a && e.month === a[1] ? a[2] : 1;
  }
  constructor(...e) {
    super(...e), this.identifier = "japanese";
  }
}
function Ns(t) {
  if (t.year === 1) {
    let e = It.indexOf(t.era);
    return ca[e];
  }
}
const Zl = -543;
class tc extends tt {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = an(a.era, a.year);
    return new Be(this, n - Zl, a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(zs(e));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(zs(e));
  }
  balanceDate() {
  }
  constructor(...e) {
    super(...e), this.identifier = "buddhist";
  }
}
function zs(t) {
  let [e, a] = so(t.year + Zl);
  return new Be(e, a, t.month, t.day);
}
const Nn = 1911;
function ei(t) {
  return t.era === "minguo" ? t.year + Nn : 1 - t.year + Nn;
}
function Ws(t) {
  let e = t - Nn;
  return e > 0 ? [
    "minguo",
    e
  ] : [
    "before_minguo",
    1 - e
  ];
}
class ac extends tt {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = an(a.era, a.year), [o, r] = Ws(n);
    return new Be(this, o, r, a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(Us(e));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(e) {
    let [a, n] = Ws(ei(e));
    e.era = a, e.year = n;
  }
  isInverseEra(e) {
    return e.era === "before_minguo";
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(Us(e));
  }
  getYearsInEra(e) {
    return e.era === "before_minguo" ? 9999 : 9999 - Nn;
  }
  constructor(...e) {
    super(...e), this.identifier = "roc";
  }
}
function Us(t) {
  let [e, a] = so(ei(t));
  return new Be(e, a, t.month, t.day);
}
const Ks = 1948320, Hs = [
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
class nc {
  fromJulianDay(e) {
    let a = e - Ks, n = 1 + Math.floor((33 * a + 3) / 12053), o = 365 * (n - 1) + Math.floor((8 * n + 21) / 33), r = a - o, l = r < 216 ? Math.floor(r / 31) : Math.floor((r - 6) / 30), i = r - Hs[l] + 1;
    return new Be(this, n, l + 1, i);
  }
  toJulianDay(e) {
    let a = Ks - 1 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
    return a += Hs[e.month - 1], a += e.day, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(e) {
    return e.month <= 6 ? 31 : e.month <= 11 || da(25 * e.year + 11, 33) < 8 ? 30 : 29;
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
const Eo = 78, js = 80;
class oc extends tt {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = a.year - Eo, o = e - jt(a.era, a.year, 1, 1), r;
    o < js ? (n--, r = Vt(a.year - 1) ? 31 : 30, o += r + 155 + 90 + 10) : (r = Vt(a.year) ? 31 : 30, o -= js);
    let l, i;
    if (o < r)
      l = 1, i = o + 1;
    else {
      let u = o - r;
      u < 155 ? (l = Math.floor(u / 31) + 2, i = u % 31 + 1) : (u -= 155, l = Math.floor(u / 30) + 7, i = u % 30 + 1);
    }
    return new Be(this, n, l, i);
  }
  toJulianDay(e) {
    let a = e.year + Eo, [n, o] = so(a), r, l;
    return Vt(o) ? (r = 31, l = jt(n, o, 3, 21)) : (r = 30, l = jt(n, o, 3, 22)), e.month === 1 ? l + e.day - 1 : (l += r + Math.min(e.month - 2, 5) * 31, e.month >= 8 && (l += (e.month - 7) * 30), l += e.day - 1, l);
  }
  getDaysInMonth(e) {
    return e.month === 1 && Vt(e.year + Eo) || e.month >= 2 && e.month <= 6 ? 31 : 30;
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
const zn = 1948440, Gs = 1948439, qe = 1300, sa = 1600, rc = 460322;
function Wn(t, e, a, n) {
  return n + Math.ceil(29.5 * (a - 1)) + (e - 1) * 354 + Math.floor((3 + 11 * e) / 30) + t - 1;
}
function ti(t, e, a) {
  let n = Math.floor((30 * (a - e) + 10646) / 10631), o = Math.min(12, Math.ceil((a - (29 + Wn(e, n, 1, 1))) / 29.5) + 1), r = a - Wn(e, n, o, 1) + 1;
  return new Be(t, n, o, r);
}
function qs(t) {
  return (14 + 11 * t) % 30 < 11;
}
class Vr {
  fromJulianDay(e) {
    return ti(this, zn, e);
  }
  toJulianDay(e) {
    return Wn(zn, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    let a = 29 + e.month % 2;
    return e.month === 12 && qs(e.year) && a++, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(e) {
    return qs(e.year) ? 355 : 354;
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
class sc extends Vr {
  fromJulianDay(e) {
    return ti(this, Gs, e);
  }
  toJulianDay(e) {
    return Wn(Gs, e.year, e.month, e.day);
  }
  constructor(...e) {
    super(...e), this.identifier = "islamic-tbla";
  }
}
const lc = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let Zo, pa;
function An(t) {
  return rc + pa[t - qe];
}
function Wa(t, e) {
  let a = t - qe, n = 1 << 11 - (e - 1);
  return Zo[a] & n ? 30 : 29;
}
function Ys(t, e) {
  let a = An(t);
  for (let n = 1; n < e; n++) a += Wa(t, n);
  return a;
}
function Js(t) {
  return pa[t + 1 - qe] - pa[t - qe];
}
class ic extends Vr {
  fromJulianDay(e) {
    let a = e - zn, n = An(qe), o = An(sa);
    if (a < n || a > o) return super.fromJulianDay(e);
    {
      let r = qe - 1, l = 1, i = 1;
      for (; i > 0; ) {
        r++, i = a - An(r) + 1;
        let u = Js(r);
        if (i === u) {
          l = 12;
          break;
        } else if (i < u) {
          let c = Wa(r, l);
          for (l = 1; i > c; )
            i -= c, l++, c = Wa(r, l);
          break;
        }
      }
      return new Be(this, r, l, a - Ys(r, l) + 1);
    }
  }
  toJulianDay(e) {
    return e.year < qe || e.year > sa ? super.toJulianDay(e) : zn + Ys(e.year, e.month) + (e.day - 1);
  }
  getDaysInMonth(e) {
    return e.year < qe || e.year > sa ? super.getDaysInMonth(e) : Wa(e.year, e.month);
  }
  getDaysInYear(e) {
    return e.year < qe || e.year > sa ? super.getDaysInYear(e) : Js(e.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", Zo || (Zo = new Uint16Array(Uint8Array.from(atob(lc), (e) => e.charCodeAt(0)).buffer)), !pa) {
      pa = new Uint32Array(sa - qe + 1);
      let e = 0;
      for (let a = qe; a <= sa; a++) {
        pa[a - qe] = e;
        for (let n = 1; n <= 12; n++) e += Wa(a, n);
      }
    }
  }
}
const Qs = 347997, ai = 1080, ni = 24 * ai, uc = 29, dc = 12 * ai + 793, cc = uc * ni + dc;
function Ht(t) {
  return da(t * 7 + 1, 19) < 7;
}
function Mn(t) {
  let e = Math.floor((235 * t - 234) / 19), a = 12084 + 13753 * e, n = e * 29 + Math.floor(a / 25920);
  return da(3 * (n + 1), 7) < 3 && (n += 1), n;
}
function pc(t) {
  let e = Mn(t - 1), a = Mn(t);
  return Mn(t + 1) - a === 356 ? 2 : a - e === 382 ? 1 : 0;
}
function Ka(t) {
  return Mn(t) + pc(t);
}
function oi(t) {
  return Ka(t + 1) - Ka(t);
}
function fc(t) {
  let e = oi(t);
  switch (e > 380 && (e -= 30), e) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function gn(t, e) {
  if (e >= 6 && !Ht(t) && e++, e === 4 || e === 7 || e === 9 || e === 11 || e === 13) return 29;
  let a = fc(t);
  return e === 2 ? a === 2 ? 30 : 29 : e === 3 ? a === 0 ? 29 : 30 : e === 6 ? Ht(t) ? 30 : 0 : 30;
}
class vc {
  fromJulianDay(e) {
    let a = e - Qs, n = a * ni / cc, o = Math.floor((19 * n + 234) / 235) + 1, r = Ka(o), l = Math.floor(a - r);
    for (; l < 1; )
      o--, r = Ka(o), l = Math.floor(a - r);
    let i = 1, u = 0;
    for (; u < l; )
      u += gn(o, i), i++;
    i--, u -= gn(o, i);
    let c = l - u;
    return new Be(this, o, i, c);
  }
  toJulianDay(e) {
    let a = Ka(e.year);
    for (let n = 1; n < e.month; n++) a += gn(e.year, n);
    return a + e.day + Qs;
  }
  getDaysInMonth(e) {
    return gn(e.year, e.month);
  }
  getMonthsInYear(e) {
    return Ht(e.year) ? 13 : 12;
  }
  getDaysInYear(e) {
    return oi(e.year);
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
    a.year !== e.year && (Ht(a.year) && !Ht(e.year) && a.month > 6 ? e.month-- : !Ht(a.year) && Ht(e.year) && a.month > 6 && e.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const er = 1723856, Xs = 1824665, tr = 5500;
function Un(t, e, a, n) {
  return t + 365 * e + Math.floor(e / 4) + 30 * (a - 1) + n - 1;
}
function Rr(t, e) {
  let a = Math.floor(4 * (e - t) / 1461), n = 1 + Math.floor((e - Un(t, a, 1, 1)) / 30), o = e + 1 - Un(t, a, n, 1);
  return [
    a,
    n,
    o
  ];
}
function ri(t) {
  return Math.floor(t % 4 / 3);
}
function si(t, e) {
  return e % 13 !== 0 ? 30 : ri(t) + 5;
}
class Fr {
  fromJulianDay(e) {
    let [a, n, o] = Rr(er, e), r = "AM";
    return a <= 0 && (r = "AA", a += tr), new Be(this, r, a, n, o);
  }
  toJulianDay(e) {
    let a = e.year;
    return e.era === "AA" && (a -= tr), Un(er, a, e.month, e.day);
  }
  getDaysInMonth(e) {
    return si(e.year, e.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(e) {
    return 365 + ri(e.year);
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
class mc extends Fr {
  fromJulianDay(e) {
    let [a, n, o] = Rr(er, e);
    return a += tr, new Be(this, "AA", a, n, o);
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
class hc extends Fr {
  fromJulianDay(e) {
    let [a, n, o] = Rr(Xs, e), r = "CE";
    return a <= 0 && (r = "BCE", a = 1 - a), new Be(this, r, a, n, o);
  }
  toJulianDay(e) {
    let a = e.year;
    return e.era === "BCE" && (a = 1 - a), Un(Xs, a, e.month, e.day);
  }
  getDaysInMonth(e) {
    let a = e.year;
    return e.era === "BCE" && (a = 1 - a), si(a, e.month);
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
function gc(t) {
  switch (t) {
    case "buddhist":
      return new tc();
    case "ethiopic":
      return new Fr();
    case "ethioaa":
      return new mc();
    case "coptic":
      return new hc();
    case "hebrew":
      return new vc();
    case "indian":
      return new oc();
    case "islamic-civil":
      return new Vr();
    case "islamic-tbla":
      return new sc();
    case "islamic-umalqura":
      return new ic();
    case "japanese":
      return new ec();
    case "persian":
      return new nc();
    case "roc":
      return new ac();
    case "gregory":
    default:
      return new tt();
  }
}
let Po = /* @__PURE__ */ new Map();
class rt {
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
      ...n.map((r) => ({
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
    let e = this.formatter.resolvedOptions();
    return wc() && (this.resolvedHourCycle || (this.resolvedHourCycle = _c(e.locale, this.options)), e.hourCycle = this.resolvedHourCycle, e.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), e.calendar === "ethiopic-amete-alem" && (e.calendar = "ethioaa"), e;
  }
  constructor(e, a = {}) {
    this.formatter = li(e, a), this.options = a;
  }
}
const yc = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function li(t, e = {}) {
  if (typeof e.hour12 == "boolean" && bc()) {
    e = {
      ...e
    };
    let o = yc[String(e.hour12)][t.split("-")[0]], r = e.hour12 ? "h12" : "h23";
    e.hourCycle = o ?? r, delete e.hour12;
  }
  let a = t + (e ? Object.entries(e).sort((o, r) => o[0] < r[0] ? -1 : 1).join() : "");
  if (Po.has(a)) return Po.get(a);
  let n = new Intl.DateTimeFormat(t, e);
  return Po.set(a, n), n;
}
let Oo = null;
function bc() {
  return Oo == null && (Oo = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Oo;
}
let Ao = null;
function wc() {
  return Ao == null && (Ao = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), Ao;
}
function _c(t, e) {
  if (!e.timeStyle && !e.hour) return;
  t = t.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), t += (t.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = li(t, {
    ...e,
    timeZone: void 0
    // use local timezone
  }), n = parseInt(a.formatToParts(new Date(2020, 2, 3, 0)).find((r) => r.type === "hour").value, 10), o = parseInt(a.formatToParts(new Date(2020, 2, 3, 23)).find((r) => r.type === "hour").value, 10);
  if (n === 0 && o === 23) return "h23";
  if (n === 24 && o === 23) return "h24";
  if (n === 0 && o === 11) return "h11";
  if (n === 12 && o === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
function xc(t, e) {
  const a = [];
  for (let n = 0; n < t.length; n += e)
    a.push(t.slice(n, n + e));
  return a;
}
function Ye(t, e = Ct()) {
  return Lr(t) ? t.toDate() : t.toDate(e);
}
function Cc(t) {
  return t instanceof ga;
}
function Lr(t) {
  return t instanceof ya;
}
function $c(t) {
  return Cc(t) || Lr(t);
}
function $t(t) {
  if (t instanceof Date) {
    const e = t.getFullYear(), a = t.getMonth() + 1;
    return new Date(e, a, 0).getDate();
  } else
    return t.set({ day: 100 }).day;
}
function Rt(t, e) {
  return t.compare(e) < 0;
}
function Ua(t, e) {
  return t.compare(e) > 0;
}
function Bc(t, e) {
  return t.compare(e) <= 0;
}
function kc(t, e) {
  return t.compare(e) >= 0;
}
function Dc(t, e, a) {
  return kc(t, e) && Bc(t, a);
}
function Sc(t, e, a) {
  return Ua(t, e) && Rt(t, a);
}
function Ec(t, e, a) {
  const n = zl(t, a);
  return e > n ? t.subtract({ days: n + 7 - e }) : e === n ? t : t.subtract({ days: n - e });
}
function Pc(t, e, a) {
  const n = zl(t, a), o = e === 0 ? 6 : e - 1;
  return n === o ? t : n > o ? t.add({ days: 7 - n + o }) : t.add({ days: o - n });
}
function Oc(t, e, a, n) {
  if (a === void 0 && n === void 0)
    return !0;
  let o = t.add({ days: 1 });
  if (n != null && n(o) || a != null && a(o))
    return !1;
  const r = e;
  for (; o.compare(r) < 0; )
    if (o = o.add({ days: 1 }), n != null && n(o) || a != null && a(o))
      return !1;
  return !0;
}
function Zs(t, e) {
  const a = [];
  let n = t.add({ days: 1 });
  const o = e;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function Mo(t) {
  const { dateObj: e, weekStartsOn: a, fixedWeeks: n, locale: o } = t, r = $t(e), l = Array.from({ length: r }, (x, $) => e.set({ day: $ + 1 })), i = Ga(e), u = Is(e), c = Ec(i, a, o), d = Pc(u, a, o), p = Zs(c.subtract({ days: 1 }), i), g = Zs(u, d.add({ days: 1 })), m = p.length + l.length + g.length;
  if (n && m < 42) {
    const x = 42 - m;
    let $ = g[g.length - 1];
    $ || ($ = Is(e));
    const k = Array.from({ length: x }, (B, E) => {
      const D = E + 1;
      return $.add({ days: D });
    });
    g.push(...k);
  }
  const h = p.concat(l, g), y = xc(h, 7);
  return {
    value: e,
    cells: h,
    rows: y
  };
}
function Ac(t) {
  const { dateObj: e, startIndex: a, endIndex: n } = t, o = Array.from({ length: Math.abs(a ?? 0) + n }, (r, l) => l <= Math.abs(a ?? 0) ? e.subtract({ years: l }).set({ day: 1, month: 1 }) : e.add({ years: l - n }).set({ day: 1, month: 1 }));
  return o.sort((r, l) => r.year - l.year), o;
}
function Mc(t) {
  const { dateObj: e, numberOfMonths: a = 1, pagedNavigation: n = !1 } = t;
  return a && n ? Array.from({ length: Math.floor(12 / a) }, (o, r) => Ga(e.set({ month: r * a + 1 }))) : Array.from({ length: 12 }, (o, r) => Ga(e.set({ month: r + 1 })));
}
function Kt(t) {
  const { numberOfMonths: e, dateObj: a, ...n } = t, o = [];
  if (!e || e === 1)
    return o.push(
      Mo({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    Mo({
      ...n,
      dateObj: a
    })
  );
  for (let r = 1; r < e; r++) {
    const l = a.add({ months: r });
    o.push(
      Mo({
        ...n,
        dateObj: l
      })
    );
  }
  return o;
}
const Tc = ["top", "right", "bottom", "left"], Ft = Math.min, We = Math.max, Kn = Math.round, yn = Math.floor, lt = (t) => ({
  x: t,
  y: t
}), Ic = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Vc = {
  start: "end",
  end: "start"
};
function ar(t, e, a) {
  return We(t, Ft(e, a));
}
function Bt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function kt(t) {
  return t.split("-")[0];
}
function $a(t) {
  return t.split("-")[1];
}
function Nr(t) {
  return t === "x" ? "y" : "x";
}
function zr(t) {
  return t === "y" ? "height" : "width";
}
function _t(t) {
  return ["top", "bottom"].includes(kt(t)) ? "y" : "x";
}
function Wr(t) {
  return Nr(_t(t));
}
function Rc(t, e, a) {
  a === void 0 && (a = !1);
  const n = $a(t), o = Wr(t), r = zr(o);
  let l = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Hn(l)), [l, Hn(l)];
}
function Fc(t) {
  const e = Hn(t);
  return [nr(t), e, nr(e)];
}
function nr(t) {
  return t.replace(/start|end/g, (e) => Vc[e]);
}
function Lc(t, e, a) {
  const n = ["left", "right"], o = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return a ? e ? o : n : e ? n : o;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function Nc(t, e, a, n) {
  const o = $a(t);
  let r = Lc(kt(t), a === "start", n);
  return o && (r = r.map((l) => l + "-" + o), e && (r = r.concat(r.map(nr)))), r;
}
function Hn(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ic[e]);
}
function zc(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ii(t) {
  return typeof t != "number" ? zc(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function jn(t) {
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
function el(t, e, a) {
  let {
    reference: n,
    floating: o
  } = t;
  const r = _t(e), l = Wr(e), i = zr(l), u = kt(e), c = r === "y", d = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, g = n[i] / 2 - o[i] / 2;
  let m;
  switch (u) {
    case "top":
      m = {
        x: d,
        y: n.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: d,
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
  switch ($a(e)) {
    case "start":
      m[l] -= g * (a && c ? -1 : 1);
      break;
    case "end":
      m[l] += g * (a && c ? -1 : 1);
      break;
  }
  return m;
}
const Wc = async (t, e, a) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: l
  } = a, i = r.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let c = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: d,
    y: p
  } = el(c, n, u), g = n, m = {}, h = 0;
  for (let y = 0; y < i.length; y++) {
    const {
      name: x,
      fn: $
    } = i[y], {
      x: k,
      y: B,
      data: E,
      reset: D
    } = await $({
      x: d,
      y: p,
      initialPlacement: n,
      placement: g,
      strategy: o,
      middlewareData: m,
      rects: c,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    d = k ?? d, p = B ?? p, m = {
      ...m,
      [x]: {
        ...m[x],
        ...E
      }
    }, D && h <= 50 && (h++, typeof D == "object" && (D.placement && (g = D.placement), D.rects && (c = D.rects === !0 ? await l.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : D.rects), {
      x: d,
      y: p
    } = el(c, g, u)), y = -1);
  }
  return {
    x: d,
    y: p,
    placement: g,
    strategy: o,
    middlewareData: m
  };
};
async function qa(t, e) {
  var a;
  e === void 0 && (e = {});
  const {
    x: n,
    y: o,
    platform: r,
    rects: l,
    elements: i,
    strategy: u
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: m = 0
  } = Bt(e, t), h = ii(m), x = i[g ? p === "floating" ? "reference" : "floating" : p], $ = jn(await r.getClippingRect({
    element: (a = await (r.isElement == null ? void 0 : r.isElement(x))) == null || a ? x : x.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: u
  })), k = p === "floating" ? {
    x: n,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, B = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), E = await (r.isElement == null ? void 0 : r.isElement(B)) ? await (r.getScale == null ? void 0 : r.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, D = jn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: k,
    offsetParent: B,
    strategy: u
  }) : k);
  return {
    top: ($.top - D.top + h.top) / E.y,
    bottom: (D.bottom - $.bottom + h.bottom) / E.y,
    left: ($.left - D.left + h.left) / E.x,
    right: (D.right - $.right + h.right) / E.x
  };
}
const Uc = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: a,
      y: n,
      placement: o,
      rects: r,
      platform: l,
      elements: i,
      middlewareData: u
    } = e, {
      element: c,
      padding: d = 0
    } = Bt(t, e) || {};
    if (c == null)
      return {};
    const p = ii(d), g = {
      x: a,
      y: n
    }, m = Wr(o), h = zr(m), y = await l.getDimensions(c), x = m === "y", $ = x ? "top" : "left", k = x ? "bottom" : "right", B = x ? "clientHeight" : "clientWidth", E = r.reference[h] + r.reference[m] - g[m] - r.floating[h], D = g[m] - r.reference[m], I = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(c));
    let M = I ? I[B] : 0;
    (!M || !await (l.isElement == null ? void 0 : l.isElement(I))) && (M = i.floating[B] || r.floating[h]);
    const K = E / 2 - D / 2, R = M / 2 - y[h] / 2 - 1, A = Ft(p[$], R), T = Ft(p[k], R), F = A, j = M - y[h] - T, W = M / 2 - y[h] / 2 + K, z = ar(F, W, j), Q = !u.arrow && $a(o) != null && W !== z && r.reference[h] / 2 - (W < F ? A : T) - y[h] / 2 < 0, ie = Q ? W < F ? W - F : W - j : 0;
    return {
      [m]: g[m] + ie,
      data: {
        [m]: z,
        centerOffset: W - z - ie,
        ...Q && {
          alignmentOffset: ie
        }
      },
      reset: Q
    };
  }
}), Kc = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var a, n;
      const {
        placement: o,
        middlewareData: r,
        rects: l,
        initialPlacement: i,
        platform: u,
        elements: c
      } = e, {
        mainAxis: d = !0,
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: y = !0,
        ...x
      } = Bt(t, e);
      if ((a = r.arrow) != null && a.alignmentOffset)
        return {};
      const $ = kt(o), k = _t(i), B = kt(i) === i, E = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), D = g || (B || !y ? [Hn(i)] : Fc(i)), I = h !== "none";
      !g && I && D.push(...Nc(i, y, h, E));
      const M = [i, ...D], K = await qa(e, x), R = [];
      let A = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (d && R.push(K[$]), p) {
        const z = Rc(o, l, E);
        R.push(K[z[0]], K[z[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: R
      }], !R.every((z) => z <= 0)) {
        var T, F;
        const z = (((T = r.flip) == null ? void 0 : T.index) || 0) + 1, Q = M[z];
        if (Q) {
          var j;
          const ye = p === "alignment" ? k !== _t(Q) : !1, Y = ((j = A[0]) == null ? void 0 : j.overflows[0]) > 0;
          if (!ye || Y)
            return {
              data: {
                index: z,
                overflows: A
              },
              reset: {
                placement: Q
              }
            };
        }
        let ie = (F = A.filter((ye) => ye.overflows[0] <= 0).sort((ye, Y) => ye.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!ie)
          switch (m) {
            case "bestFit": {
              var W;
              const ye = (W = A.filter((Y) => {
                if (I) {
                  const oe = _t(Y.placement);
                  return oe === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  oe === "y";
                }
                return !0;
              }).map((Y) => [Y.placement, Y.overflows.filter((oe) => oe > 0).reduce((oe, ve) => oe + ve, 0)]).sort((Y, oe) => Y[1] - oe[1])[0]) == null ? void 0 : W[0];
              ye && (ie = ye);
              break;
            }
            case "initialPlacement":
              ie = i;
              break;
          }
        if (o !== ie)
          return {
            reset: {
              placement: ie
            }
          };
      }
      return {};
    }
  };
};
function tl(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function al(t) {
  return Tc.some((e) => t[e] >= 0);
}
const Hc = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: a
      } = e, {
        strategy: n = "referenceHidden",
        ...o
      } = Bt(t, e);
      switch (n) {
        case "referenceHidden": {
          const r = await qa(e, {
            ...o,
            elementContext: "reference"
          }), l = tl(r, a.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: al(l)
            }
          };
        }
        case "escaped": {
          const r = await qa(e, {
            ...o,
            altBoundary: !0
          }), l = tl(r, a.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: al(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function jc(t, e) {
  const {
    placement: a,
    platform: n,
    elements: o
  } = t, r = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), l = kt(a), i = $a(a), u = _t(a) === "y", c = ["left", "top"].includes(l) ? -1 : 1, d = r && u ? -1 : 1, p = Bt(e, t);
  let {
    mainAxis: g,
    crossAxis: m,
    alignmentAxis: h
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof h == "number" && (m = i === "end" ? h * -1 : h), u ? {
    x: m * d,
    y: g * c
  } : {
    x: g * c,
    y: m * d
  };
}
const Gc = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var a, n;
      const {
        x: o,
        y: r,
        placement: l,
        middlewareData: i
      } = e, u = await jc(e, t);
      return l === ((a = i.offset) == null ? void 0 : a.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: o + u.x,
        y: r + u.y,
        data: {
          ...u,
          placement: l
        }
      };
    }
  };
}, qc = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: a,
        y: n,
        placement: o
      } = e, {
        mainAxis: r = !0,
        crossAxis: l = !1,
        limiter: i = {
          fn: (x) => {
            let {
              x: $,
              y: k
            } = x;
            return {
              x: $,
              y: k
            };
          }
        },
        ...u
      } = Bt(t, e), c = {
        x: a,
        y: n
      }, d = await qa(e, u), p = _t(kt(o)), g = Nr(p);
      let m = c[g], h = c[p];
      if (r) {
        const x = g === "y" ? "top" : "left", $ = g === "y" ? "bottom" : "right", k = m + d[x], B = m - d[$];
        m = ar(k, m, B);
      }
      if (l) {
        const x = p === "y" ? "top" : "left", $ = p === "y" ? "bottom" : "right", k = h + d[x], B = h - d[$];
        h = ar(k, h, B);
      }
      const y = i.fn({
        ...e,
        [g]: m,
        [p]: h
      });
      return {
        ...y,
        data: {
          x: y.x - a,
          y: y.y - n,
          enabled: {
            [g]: r,
            [p]: l
          }
        }
      };
    }
  };
}, Yc = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: a,
        y: n,
        placement: o,
        rects: r,
        middlewareData: l
      } = e, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: c = !0
      } = Bt(t, e), d = {
        x: a,
        y: n
      }, p = _t(o), g = Nr(p);
      let m = d[g], h = d[p];
      const y = Bt(i, e), x = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (u) {
        const B = g === "y" ? "height" : "width", E = r.reference[g] - r.floating[B] + x.mainAxis, D = r.reference[g] + r.reference[B] - x.mainAxis;
        m < E ? m = E : m > D && (m = D);
      }
      if (c) {
        var $, k;
        const B = g === "y" ? "width" : "height", E = ["top", "left"].includes(kt(o)), D = r.reference[p] - r.floating[B] + (E && (($ = l.offset) == null ? void 0 : $[p]) || 0) + (E ? 0 : x.crossAxis), I = r.reference[p] + r.reference[B] + (E ? 0 : ((k = l.offset) == null ? void 0 : k[p]) || 0) - (E ? x.crossAxis : 0);
        h < D ? h = D : h > I && (h = I);
      }
      return {
        [g]: m,
        [p]: h
      };
    }
  };
}, Jc = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var a, n;
      const {
        placement: o,
        rects: r,
        platform: l,
        elements: i
      } = e, {
        apply: u = () => {
        },
        ...c
      } = Bt(t, e), d = await qa(e, c), p = kt(o), g = $a(o), m = _t(o) === "y", {
        width: h,
        height: y
      } = r.floating;
      let x, $;
      p === "top" || p === "bottom" ? (x = p, $ = g === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : ($ = p, x = g === "end" ? "top" : "bottom");
      const k = y - d.top - d.bottom, B = h - d.left - d.right, E = Ft(y - d[x], k), D = Ft(h - d[$], B), I = !e.middlewareData.shift;
      let M = E, K = D;
      if ((a = e.middlewareData.shift) != null && a.enabled.x && (K = B), (n = e.middlewareData.shift) != null && n.enabled.y && (M = k), I && !g) {
        const A = We(d.left, 0), T = We(d.right, 0), F = We(d.top, 0), j = We(d.bottom, 0);
        m ? K = h - 2 * (A !== 0 || T !== 0 ? A + T : We(d.left, d.right)) : M = y - 2 * (F !== 0 || j !== 0 ? F + j : We(d.top, d.bottom));
      }
      await u({
        ...e,
        availableWidth: K,
        availableHeight: M
      });
      const R = await l.getDimensions(i.floating);
      return h !== R.width || y !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function io() {
  return typeof window < "u";
}
function Jt(t) {
  return Ur(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Ue(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function dt(t) {
  var e;
  return (e = (Ur(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ur(t) {
  return io() ? t instanceof Node || t instanceof Ue(t).Node : !1;
}
function at(t) {
  return io() ? t instanceof Element || t instanceof Ue(t).Element : !1;
}
function it(t) {
  return io() ? t instanceof HTMLElement || t instanceof Ue(t).HTMLElement : !1;
}
function nl(t) {
  return !io() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Ue(t).ShadowRoot;
}
function nn(t) {
  const {
    overflow: e,
    overflowX: a,
    overflowY: n,
    display: o
  } = nt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + a) && !["inline", "contents"].includes(o);
}
function Qc(t) {
  return ["table", "td", "th"].includes(Jt(t));
}
function uo(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function Kr(t) {
  const e = Hr(), a = at(t) ? nt(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => a[n] ? a[n] !== "none" : !1) || (a.containerType ? a.containerType !== "normal" : !1) || !e && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !e && (a.filter ? a.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function Xc(t) {
  let e = Lt(t);
  for (; it(e) && !ba(e); ) {
    if (Kr(e))
      return e;
    if (uo(e))
      return null;
    e = Lt(e);
  }
  return null;
}
function Hr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ba(t) {
  return ["html", "body", "#document"].includes(Jt(t));
}
function nt(t) {
  return Ue(t).getComputedStyle(t);
}
function co(t) {
  return at(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function Lt(t) {
  if (Jt(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    nl(t) && t.host || // Fallback.
    dt(t)
  );
  return nl(e) ? e.host : e;
}
function ui(t) {
  const e = Lt(t);
  return ba(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : it(e) && nn(e) ? e : ui(e);
}
function Ya(t, e, a) {
  var n;
  e === void 0 && (e = []), a === void 0 && (a = !0);
  const o = ui(t), r = o === ((n = t.ownerDocument) == null ? void 0 : n.body), l = Ue(o);
  if (r) {
    const i = or(l);
    return e.concat(l, l.visualViewport || [], nn(o) ? o : [], i && a ? Ya(i) : []);
  }
  return e.concat(o, Ya(o, [], a));
}
function or(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function di(t) {
  const e = nt(t);
  let a = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = it(t), r = o ? t.offsetWidth : a, l = o ? t.offsetHeight : n, i = Kn(a) !== r || Kn(n) !== l;
  return i && (a = r, n = l), {
    width: a,
    height: n,
    $: i
  };
}
function jr(t) {
  return at(t) ? t : t.contextElement;
}
function fa(t) {
  const e = jr(t);
  if (!it(e))
    return lt(1);
  const a = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: r
  } = di(e);
  let l = (r ? Kn(a.width) : a.width) / n, i = (r ? Kn(a.height) : a.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const Zc = /* @__PURE__ */ lt(0);
function ci(t) {
  const e = Ue(t);
  return !Hr() || !e.visualViewport ? Zc : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function ep(t, e, a) {
  return e === void 0 && (e = !1), !a || e && a !== Ue(t) ? !1 : e;
}
function Yt(t, e, a, n) {
  e === void 0 && (e = !1), a === void 0 && (a = !1);
  const o = t.getBoundingClientRect(), r = jr(t);
  let l = lt(1);
  e && (n ? at(n) && (l = fa(n)) : l = fa(t));
  const i = ep(r, a, n) ? ci(r) : lt(0);
  let u = (o.left + i.x) / l.x, c = (o.top + i.y) / l.y, d = o.width / l.x, p = o.height / l.y;
  if (r) {
    const g = Ue(r), m = n && at(n) ? Ue(n) : n;
    let h = g, y = or(h);
    for (; y && n && m !== h; ) {
      const x = fa(y), $ = y.getBoundingClientRect(), k = nt(y), B = $.left + (y.clientLeft + parseFloat(k.paddingLeft)) * x.x, E = $.top + (y.clientTop + parseFloat(k.paddingTop)) * x.y;
      u *= x.x, c *= x.y, d *= x.x, p *= x.y, u += B, c += E, h = Ue(y), y = or(h);
    }
  }
  return jn({
    width: d,
    height: p,
    x: u,
    y: c
  });
}
function Gr(t, e) {
  const a = co(t).scrollLeft;
  return e ? e.left + a : Yt(dt(t)).left + a;
}
function pi(t, e, a) {
  a === void 0 && (a = !1);
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - (a ? 0 : (
    // RTL <body> scrollbar.
    Gr(t, n)
  )), r = n.top + e.scrollTop;
  return {
    x: o,
    y: r
  };
}
function tp(t) {
  let {
    elements: e,
    rect: a,
    offsetParent: n,
    strategy: o
  } = t;
  const r = o === "fixed", l = dt(n), i = e ? uo(e.floating) : !1;
  if (n === l || i && r)
    return a;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = lt(1);
  const d = lt(0), p = it(n);
  if ((p || !p && !r) && ((Jt(n) !== "body" || nn(l)) && (u = co(n)), it(n))) {
    const m = Yt(n);
    c = fa(n), d.x = m.x + n.clientLeft, d.y = m.y + n.clientTop;
  }
  const g = l && !p && !r ? pi(l, u, !0) : lt(0);
  return {
    width: a.width * c.x,
    height: a.height * c.y,
    x: a.x * c.x - u.scrollLeft * c.x + d.x + g.x,
    y: a.y * c.y - u.scrollTop * c.y + d.y + g.y
  };
}
function ap(t) {
  return Array.from(t.getClientRects());
}
function np(t) {
  const e = dt(t), a = co(t), n = t.ownerDocument.body, o = We(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), r = We(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let l = -a.scrollLeft + Gr(t);
  const i = -a.scrollTop;
  return nt(n).direction === "rtl" && (l += We(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: r,
    x: l,
    y: i
  };
}
function op(t, e) {
  const a = Ue(t), n = dt(t), o = a.visualViewport;
  let r = n.clientWidth, l = n.clientHeight, i = 0, u = 0;
  if (o) {
    r = o.width, l = o.height;
    const c = Hr();
    (!c || c && e === "fixed") && (i = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
function rp(t, e) {
  const a = Yt(t, !0, e === "fixed"), n = a.top + t.clientTop, o = a.left + t.clientLeft, r = it(t) ? fa(t) : lt(1), l = t.clientWidth * r.x, i = t.clientHeight * r.y, u = o * r.x, c = n * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: c
  };
}
function ol(t, e, a) {
  let n;
  if (e === "viewport")
    n = op(t, a);
  else if (e === "document")
    n = np(dt(t));
  else if (at(e))
    n = rp(e, a);
  else {
    const o = ci(t);
    n = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return jn(n);
}
function fi(t, e) {
  const a = Lt(t);
  return a === e || !at(a) || ba(a) ? !1 : nt(a).position === "fixed" || fi(a, e);
}
function sp(t, e) {
  const a = e.get(t);
  if (a)
    return a;
  let n = Ya(t, [], !1).filter((i) => at(i) && Jt(i) !== "body"), o = null;
  const r = nt(t).position === "fixed";
  let l = r ? Lt(t) : t;
  for (; at(l) && !ba(l); ) {
    const i = nt(l), u = Kr(l);
    !u && i.position === "fixed" && (o = null), (r ? !u && !o : !u && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || nn(l) && !u && fi(t, l)) ? n = n.filter((d) => d !== l) : o = i, l = Lt(l);
  }
  return e.set(t, n), n;
}
function lp(t) {
  let {
    element: e,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = t;
  const l = [...a === "clippingAncestors" ? uo(e) ? [] : sp(e, this._c) : [].concat(a), n], i = l[0], u = l.reduce((c, d) => {
    const p = ol(e, d, o);
    return c.top = We(p.top, c.top), c.right = Ft(p.right, c.right), c.bottom = Ft(p.bottom, c.bottom), c.left = We(p.left, c.left), c;
  }, ol(e, i, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function ip(t) {
  const {
    width: e,
    height: a
  } = di(t);
  return {
    width: e,
    height: a
  };
}
function up(t, e, a) {
  const n = it(e), o = dt(e), r = a === "fixed", l = Yt(t, !0, r, e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = lt(0);
  function c() {
    u.x = Gr(o);
  }
  if (n || !n && !r)
    if ((Jt(e) !== "body" || nn(o)) && (i = co(e)), n) {
      const m = Yt(e, !0, r, e);
      u.x = m.x + e.clientLeft, u.y = m.y + e.clientTop;
    } else o && c();
  r && !n && o && c();
  const d = o && !n && !r ? pi(o, i) : lt(0), p = l.left + i.scrollLeft - u.x - d.x, g = l.top + i.scrollTop - u.y - d.y;
  return {
    x: p,
    y: g,
    width: l.width,
    height: l.height
  };
}
function To(t) {
  return nt(t).position === "static";
}
function rl(t, e) {
  if (!it(t) || nt(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let a = t.offsetParent;
  return dt(t) === a && (a = a.ownerDocument.body), a;
}
function vi(t, e) {
  const a = Ue(t);
  if (uo(t))
    return a;
  if (!it(t)) {
    let o = Lt(t);
    for (; o && !ba(o); ) {
      if (at(o) && !To(o))
        return o;
      o = Lt(o);
    }
    return a;
  }
  let n = rl(t, e);
  for (; n && Qc(n) && To(n); )
    n = rl(n, e);
  return n && ba(n) && To(n) && !Kr(n) ? a : n || Xc(t) || a;
}
const dp = async function(t) {
  const e = this.getOffsetParent || vi, a = this.getDimensions, n = await a(t.floating);
  return {
    reference: up(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function cp(t) {
  return nt(t).direction === "rtl";
}
const pp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: tp,
  getDocumentElement: dt,
  getClippingRect: lp,
  getOffsetParent: vi,
  getElementRects: dp,
  getClientRects: ap,
  getDimensions: ip,
  getScale: fa,
  isElement: at,
  isRTL: cp
};
function mi(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function fp(t, e) {
  let a = null, n;
  const o = dt(t);
  function r() {
    var i;
    clearTimeout(n), (i = a) == null || i.disconnect(), a = null;
  }
  function l(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), r();
    const c = t.getBoundingClientRect(), {
      left: d,
      top: p,
      width: g,
      height: m
    } = c;
    if (i || e(), !g || !m)
      return;
    const h = yn(p), y = yn(o.clientWidth - (d + g)), x = yn(o.clientHeight - (p + m)), $ = yn(d), B = {
      rootMargin: -h + "px " + -y + "px " + -x + "px " + -$ + "px",
      threshold: We(0, Ft(1, u)) || 1
    };
    let E = !0;
    function D(I) {
      const M = I[0].intersectionRatio;
      if (M !== u) {
        if (!E)
          return l();
        M ? l(!1, M) : n = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !mi(c, t.getBoundingClientRect()) && l(), E = !1;
    }
    try {
      a = new IntersectionObserver(D, {
        ...B,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      a = new IntersectionObserver(D, B);
    }
    a.observe(t);
  }
  return l(!0), r;
}
function hi(t, e, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, c = jr(t), d = o || r ? [...c ? Ya(c) : [], ...Ya(e)] : [];
  d.forEach(($) => {
    o && $.addEventListener("scroll", a, {
      passive: !0
    }), r && $.addEventListener("resize", a);
  });
  const p = c && i ? fp(c, a) : null;
  let g = -1, m = null;
  l && (m = new ResizeObserver(($) => {
    let [k] = $;
    k && k.target === c && m && (m.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var B;
      (B = m) == null || B.observe(e);
    })), a();
  }), c && !u && m.observe(c), m.observe(e));
  let h, y = u ? Yt(t) : null;
  u && x();
  function x() {
    const $ = Yt(t);
    y && !mi(y, $) && a(), y = $, h = requestAnimationFrame(x);
  }
  return a(), () => {
    var $;
    d.forEach((k) => {
      o && k.removeEventListener("scroll", a), r && k.removeEventListener("resize", a);
    }), p == null || p(), ($ = m) == null || $.disconnect(), m = null, u && cancelAnimationFrame(h);
  };
}
const gi = Gc, yi = qc, Gn = Kc, bi = Jc, wi = Hc, vp = Uc, _i = Yc, mp = (t, e, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: pp,
    ...a
  }, r = {
    ...o.platform,
    _c: n
  };
  return Wc(t, e, {
    ...o,
    platform: r
  });
};
function hp(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function rr(t) {
  if (hp(t)) {
    const e = t.$el;
    return Ur(e) && Jt(e) === "#comment" ? null : e;
  }
  return t;
}
function ua(t) {
  return typeof t == "function" ? t() : s(t);
}
function xi(t) {
  return {
    name: "arrow",
    options: t,
    fn(e) {
      const a = rr(ua(t.element));
      return a == null ? {} : vp({
        element: a,
        padding: t.padding
      }).fn(e);
    }
  };
}
function Ci(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sl(t, e) {
  const a = Ci(t);
  return Math.round(e * a) / a;
}
function $i(t, e, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = C(() => {
    var M;
    return (M = ua(a.open)) != null ? M : !0;
  }), r = C(() => ua(a.middleware)), l = C(() => {
    var M;
    return (M = ua(a.placement)) != null ? M : "bottom";
  }), i = C(() => {
    var M;
    return (M = ua(a.strategy)) != null ? M : "absolute";
  }), u = C(() => {
    var M;
    return (M = ua(a.transform)) != null ? M : !0;
  }), c = C(() => rr(t.value)), d = C(() => rr(e.value)), p = O(0), g = O(0), m = O(i.value), h = O(l.value), y = wt({}), x = O(!1), $ = C(() => {
    const M = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return M;
    const K = sl(d.value, p.value), R = sl(d.value, g.value);
    return u.value ? {
      ...M,
      transform: "translate(" + K + "px, " + R + "px)",
      ...Ci(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: K + "px",
      top: R + "px"
    };
  });
  let k;
  function B() {
    if (c.value == null || d.value == null)
      return;
    const M = o.value;
    mp(c.value, d.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((K) => {
      p.value = K.x, g.value = K.y, m.value = K.strategy, h.value = K.placement, y.value = K.middlewareData, x.value = M !== !1;
    });
  }
  function E() {
    typeof k == "function" && (k(), k = void 0);
  }
  function D() {
    if (E(), n === void 0) {
      B();
      return;
    }
    if (c.value != null && d.value != null) {
      k = n(c.value, d.value, B);
      return;
    }
  }
  function I() {
    o.value || (x.value = !1);
  }
  return X([r, l, i, o], B, {
    flush: "sync"
  }), X([c, d], D, {
    flush: "sync"
  }), X(o, I, {
    flush: "sync"
  }), eo() && to(E), {
    x: ra(p),
    y: ra(g),
    strategy: ra(m),
    placement: ra(h),
    middlewareData: ra(y),
    isPositioned: ra(x),
    floatingStyles: $,
    update: B
  };
}
function pe(t, e) {
  const a = typeof t == "string" && !e ? `${t}Context` : e, n = Symbol(a);
  return [(o) => {
    const r = tn(n, o);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(
        ", "
      )}` : `\`${t}\``}`
    );
  }, (o) => (oo(n, o), o)];
}
function qr(t, e, a) {
  const n = a.originalEvent.target, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
function qn(t, e = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(a, Math.max(e, t));
}
function gp(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var yp = function t(e, a) {
  if (e === a) return !0;
  if (e && a && typeof e == "object" && typeof a == "object") {
    if (e.constructor !== a.constructor) return !1;
    var n, o, r;
    if (Array.isArray(e)) {
      if (n = e.length, n != a.length) return !1;
      for (o = n; o-- !== 0; )
        if (!t(e[o], a[o])) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === a.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === a.toString();
    if (r = Object.keys(e), n = r.length, n !== Object.keys(a).length) return !1;
    for (o = n; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(a, r[o])) return !1;
    for (o = n; o-- !== 0; ) {
      var l = r[o];
      if (!t(e[l], a[l])) return !1;
    }
    return !0;
  }
  return e !== e && a !== a;
};
const Gt = /* @__PURE__ */ gp(yp);
function Tn(t) {
  return t == null;
}
function Bi(t) {
  const { defaultValue: e, defaultPlaceholder: a, granularity: n = "day", locale: o = "en" } = t;
  if (Array.isArray(e) && e.length)
    return e.at(-1).copy();
  if (e && !Array.isArray(e))
    return e.copy();
  if (a)
    return a.copy();
  const r = /* @__PURE__ */ new Date(), l = r.getFullYear(), i = r.getMonth() + 1, u = r.getDate(), c = ["hour", "minute", "second"], d = new rt(o), p = gc(d.resolvedOptions().calendar);
  return c.includes(n ?? "day") ? Le(new ga(l, i, u, 0, 0, 0), p) : Le(new Be(l, i, u), p);
}
function ki(t) {
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
function bp(t, e) {
  var a;
  const n = wt();
  return _e(() => {
    n.value = t();
  }, {
    ...e,
    flush: (a = void 0) != null ? a : "sync"
  }), Ca(n);
}
function Qt(t) {
  return eo() ? (to(t), !0) : !1;
}
function wp() {
  const t = /* @__PURE__ */ new Set(), e = (a) => {
    t.delete(a);
  };
  return {
    on: (a) => {
      t.add(a);
      const n = () => e(a);
      return Qt(n), {
        off: n
      };
    },
    off: e,
    trigger: (...a) => Promise.all(Array.from(t).map((n) => n(...a)))
  };
}
function _p(t) {
  let e = !1, a;
  const n = Er(!0);
  return (...o) => (e || (a = n.run(() => t(...o)), e = !0), a);
}
function Di(t) {
  let e = 0, a, n;
  const o = () => {
    e -= 1, n && e <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...r) => (e += 1, a || (n = Er(!0), a = n.run(() => t(...r))), Qt(o), a);
}
function xt(t) {
  return typeof t == "function" ? t() : s(t);
}
const ct = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const xp = (t) => typeof t < "u", Cp = (t) => t != null, $p = Object.prototype.toString, Bp = (t) => $p.call(t) === "[object Object]", Si = () => {
}, ll = /* @__PURE__ */ kp();
function kp() {
  var t, e;
  return ct && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Dp(t) {
  return Ee();
}
function Ei(t, e = 1e4) {
  return kr((a, n) => {
    let o = xt(t), r;
    const l = () => setTimeout(() => {
      o = xt(t), n();
    }, xt(e));
    return Qt(() => {
      clearTimeout(r);
    }), {
      get() {
        return a(), o;
      },
      set(i) {
        o = i, n(), clearTimeout(r), r = l();
      }
    };
  });
}
function Sp(t, e) {
  Dp() && no(t, e);
}
function Yr(t, e, a = {}) {
  const {
    immediate: n = !0
  } = a, o = O(!1);
  let r = null;
  function l() {
    r && (clearTimeout(r), r = null);
  }
  function i() {
    o.value = !1, l();
  }
  function u(...c) {
    l(), o.value = !0, r = setTimeout(() => {
      o.value = !1, r = null, t(...c);
    }, xt(e));
  }
  return n && (o.value = !0, ct && u()), Qt(i), {
    isPending: Ca(o),
    start: u,
    stop: i
  };
}
function Ep(t = 1e3, e = {}) {
  const {
    controls: a = !1,
    callback: n
  } = e, o = Yr(
    n ?? Si,
    t,
    e
  ), r = C(() => !o.isPending.value);
  return a ? {
    ready: r,
    ...o
  } : r;
}
function Je(t) {
  var e;
  const a = xt(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
const on = ct ? window : void 0;
function wa(...t) {
  let e, a, n, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([a, n, o] = t, e = on) : [e, a, n, o] = t, !e)
    return Si;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const r = [], l = () => {
    r.forEach((d) => d()), r.length = 0;
  }, i = (d, p, g, m) => (d.addEventListener(p, g, m), () => d.removeEventListener(p, g, m)), u = X(
    () => [Je(e), xt(o)],
    ([d, p]) => {
      if (l(), !d)
        return;
      const g = Bp(p) ? { ...p } : p;
      r.push(
        ...a.flatMap((m) => n.map((h) => i(d, m, h, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), l();
  };
  return Qt(c), c;
}
function Pp(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (e) => e.key === t : Array.isArray(t) ? (e) => t.includes(e.key) : () => !0;
}
function Jr(...t) {
  let e, a, n = {};
  t.length === 3 ? (e = t[0], a = t[1], n = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (e = !0, a = t[0], n = t[1]) : (e = t[0], a = t[1]) : (e = !0, a = t[0]);
  const {
    target: o = on,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = n, u = Pp(e);
  return wa(o, r, (c) => {
    c.repeat && xt(i) || u(c) && a(c);
  }, l);
}
function Qr() {
  const t = O(!1), e = Ee();
  return e && ce(() => {
    t.value = !0;
  }, e), t;
}
function Op(t) {
  const e = Qr();
  return C(() => (e.value, !!t()));
}
function Ap(t, e, a = {}) {
  const { window: n = on, ...o } = a;
  let r;
  const l = Op(() => n && "MutationObserver" in n), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = C(() => {
    const g = xt(t), m = (Array.isArray(g) ? g : [g]).map(Je).filter(Cp);
    return new Set(m);
  }), c = X(
    () => u.value,
    (g) => {
      i(), l.value && g.size && (r = new MutationObserver(e), g.forEach((m) => r.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), d = () => r == null ? void 0 : r.takeRecords(), p = () => {
    i(), c();
  };
  return Qt(p), {
    isSupported: l,
    stop: p,
    takeRecords: d
  };
}
function Pi(t, e = {}) {
  const {
    immediate: a = !0,
    fpsLimit: n = void 0,
    window: o = on
  } = e, r = O(!1), l = n ? 1e3 / n : null;
  let i = 0, u = null;
  function c(g) {
    if (!r.value || !o)
      return;
    i || (i = g);
    const m = g - i;
    if (l && m < l) {
      u = o.requestAnimationFrame(c);
      return;
    }
    i = g, t({ delta: m, timestamp: g }), u = o.requestAnimationFrame(c);
  }
  function d() {
    !r.value && o && (r.value = !0, i = 0, u = o.requestAnimationFrame(c));
  }
  function p() {
    r.value = !1, u != null && o && (o.cancelAnimationFrame(u), u = null);
  }
  return a && d(), Qt(p), {
    isActive: Ca(r),
    pause: p,
    resume: d
  };
}
function Mp(t) {
  return JSON.parse(JSON.stringify(t));
}
function we(t, e, a, n = {}) {
  var o, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = Ee(), h = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let y = c;
  e || (e = "modelValue"), y = y || `update:${e.toString()}`;
  const x = (B) => i ? typeof i == "function" ? i(B) : Mp(B) : B, $ = () => xp(t[e]) ? x(t[e]) : p, k = (B) => {
    g ? g(B) && h(y, B) : h(y, B);
  };
  if (u) {
    const B = $(), E = O(B);
    let D = !1;
    return X(
      () => t[e],
      (I) => {
        D || (D = !0, E.value = x(I), ae(() => D = !1));
      }
    ), X(
      E,
      (I) => {
        !D && (I !== t[e] || d) && k(I);
      },
      { deep: d }
    ), E;
  } else
    return C({
      get() {
        return $();
      },
      set(B) {
        k(B);
      }
    });
}
function po(t) {
  return t ? t.flatMap((e) => e.type === ne ? po(e.children) : [e]) : [];
}
function De() {
  let t = document.activeElement;
  if (t == null)
    return null;
  for (; t != null && t.shadowRoot != null && t.shadowRoot.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
const Tp = ["INPUT", "TEXTAREA"];
function Oi(t, e, a, n = {}) {
  if (!e || n.enableIgnoredElement && Tp.includes(e.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: c = !0,
    focus: d = !1
  } = n, [p, g, m, h, y, x] = [
    t.key === "ArrowRight",
    t.key === "ArrowLeft",
    t.key === "ArrowUp",
    t.key === "ArrowDown",
    t.key === "Home",
    t.key === "End"
  ], $ = m || h, k = p || g;
  if (!y && !x && (!$ && !k || o === "vertical" && k || o === "horizontal" && $))
    return null;
  const B = a ? Array.from(a.querySelectorAll(r)) : l;
  if (!B.length)
    return null;
  c && t.preventDefault();
  let E = null;
  return k || $ ? E = Ai(B, e, {
    goForward: $ ? h : u === "ltr" ? p : g,
    loop: i
  }) : y ? E = B.at(0) || null : x && (E = B.at(-1) || null), d && (E == null || E.focus()), E;
}
function Ai(t, e, a, n = t.length) {
  if (--n === 0)
    return null;
  const o = t.indexOf(e), r = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (r < 0 || r >= t.length))
    return null;
  const l = (r + t.length) % t.length, i = t[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Ai(
    t,
    i,
    a,
    n
  ) : i : null;
}
function Io(t) {
  if (t === null || typeof t != "object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t ? !1 : Symbol.toStringTag in t ? Object.prototype.toString.call(t) === "[object Module]" : !0;
}
function sr(t, e, a = ".", n) {
  if (!Io(e))
    return sr(t, {}, a);
  const o = Object.assign({}, e);
  for (const r in t) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = t[r];
    l != null && (Array.isArray(l) && Array.isArray(o[r]) ? o[r] = [...l, ...o[r]] : Io(l) && Io(o[r]) ? o[r] = sr(
      l,
      o[r],
      (a ? `${a}.` : "") + r.toString()
    ) : o[r] = l);
  }
  return o;
}
function Ip(t) {
  return (...e) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    e.reduce((a, n) => sr(a, n, ""), {})
  );
}
const Vp = Ip(), [fo, Y_] = pe("ConfigProvider");
let Rp = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Fp = (t = 21) => {
  let e = "", a = t;
  for (; a--; )
    e += Rp[Math.random() * 64 | 0];
  return e;
};
const Lp = Di(() => {
  const t = O(/* @__PURE__ */ new Map()), e = O(), a = C(() => {
    for (const l of t.value.values())
      if (l)
        return !0;
    return !1;
  }), n = fo({
    scrollBody: O(!0)
  });
  let o = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = e.value ?? "", ll && (o == null || o()), e.value = void 0;
  };
  return X(a, (l, i) => {
    var u;
    if (!ct)
      return;
    if (!l) {
      i && r();
      return;
    }
    e.value === void 0 && (e.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, d = { padding: c, margin: 0 }, p = (u = n.scrollBody) != null && u.value ? typeof n.scrollBody.value == "object" ? Vp({
      padding: n.scrollBody.value.padding === !0 ? c : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? c : n.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), ll && (o = wa(
      document,
      "touchmove",
      (g) => Np(g),
      { passive: !1 }
    )), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), t;
});
function rn(t) {
  const e = Fp(6), a = Lp();
  a.value.set(e, t ?? !1);
  const n = C({
    get: () => a.value.get(e) ?? !1,
    set: (o) => a.value.set(e, o)
  });
  return Sp(() => {
    a.value.delete(e);
  }), n;
}
function Mi(t) {
  const e = window.getComputedStyle(t);
  if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && t.clientWidth < t.scrollWidth || e.overflowY === "auto" && t.clientHeight < t.scrollHeight)
    return !0;
  {
    const a = t.parentNode;
    return !(a instanceof Element) || a.tagName === "BODY" ? !1 : Mi(a);
  }
}
function Np(t) {
  const e = t || window.event, a = e.target;
  return a instanceof Element && Mi(a) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.cancelable && e.preventDefault(), !1);
}
const zp = "data-radix-vue-collection-item";
function Ba(t, e = zp) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = O([]);
    function r() {
      const l = Je(n);
      return l ? o.value = Array.from(
        l.querySelectorAll(`[${e}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return vd(() => {
      o.value = [];
    }), ce(r), md(r), X(() => n == null ? void 0 : n.value, r, { immediate: !0 }), oo(a, o), o;
  }, injectCollection: () => tn(a, O([])) };
}
function Ti(t) {
  const e = O(t);
  function a() {
    return e.value;
  }
  function n(y) {
    e.value = y;
  }
  function o(y, x) {
    return new rt(e.value, x).format(y);
  }
  function r(y, x = !0) {
    return $c(y) && x ? o(Ye(y), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Ye(y), {
      dateStyle: "long"
    });
  }
  function l(y, x = {}) {
    return new rt(e.value, { month: "long", year: "numeric", ...x }).format(y);
  }
  function i(y, x = {}) {
    return new rt(e.value, { month: "long", ...x }).format(y);
  }
  function u() {
    const y = Fn(Ct());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => ({ label: i(Ye(y.set({ month: x }))), value: x }));
  }
  function c(y, x = {}) {
    return new rt(e.value, { year: "numeric", ...x }).format(y);
  }
  function d(y, x) {
    return Lr(y) ? new rt(e.value, {
      ...x,
      timeZone: y.timeZone
    }).formatToParts(Ye(y)) : new rt(e.value, x).formatToParts(Ye(y));
  }
  function p(y, x = "narrow") {
    return new rt(e.value, { weekday: x }).format(y);
  }
  function g(y) {
    var x;
    return ((x = new rt(e.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(y).find(($) => $.type === "dayPeriod")) == null ? void 0 : x.value) === "PM" ? "PM" : "AM";
  }
  const m = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function h(y, x, $ = {}) {
    const k = { ...m, ...$ }, B = d(y, k).find((E) => E.type === x);
    return B ? B.value : "";
  }
  return {
    setLocale: n,
    getLocale: a,
    fullMonth: i,
    fullYear: c,
    fullMonthAndYear: l,
    toParts: d,
    custom: o,
    part: h,
    dayPeriod: g,
    selectedDate: r,
    dayOfWeek: p,
    getMonths: u
  };
}
function pt(t) {
  const e = fo({
    dir: O("ltr")
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function Xt(t) {
  const e = Ee(), a = e == null ? void 0 : e.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${e == null ? void 0 : e.type.__name}`
  ), a == null || a.forEach((o) => {
    n[Ml(ao(o))] = (...r) => t(o, ...r);
  }), n;
}
let Vo = 0;
function Xr() {
  _e((t) => {
    if (!ct)
      return;
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      e[0] ?? il()
    ), document.body.insertAdjacentElement(
      "beforeend",
      e[1] ?? il()
    ), Vo++, t(() => {
      Vo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), Vo--;
    });
  });
}
function il() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
function sn(t) {
  return C(() => {
    var e;
    return xt(t) ? !!((e = Je(t)) != null && e.closest("form")) : !0;
  });
}
function fe(t) {
  const e = Ee(), a = Object.keys((e == null ? void 0 : e.type.props) ?? {}).reduce((o, r) => {
    const l = (e == null ? void 0 : e.type.props[r]).default;
    return l !== void 0 && (o[r] = l), o;
  }, {}), n = Cr(t);
  return C(() => {
    const o = {}, r = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      o[ao(l)] = r[l];
    }), Object.keys({ ...a, ...o }).reduce((l, i) => (n.value[i] !== void 0 && (l[i] = n.value[i]), l), {});
  });
}
function ue(t, e) {
  const a = fe(t), n = e ? Xt(e) : {};
  return C(() => ({
    ...a.value,
    ...n
  }));
}
function U() {
  const t = Ee(), e = O(), a = C(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = e.value) == null ? void 0 : l.$el.nodeName) ? (i = e.value) == null ? void 0 : i.$el.nextElementSibling : Je(e);
  }), n = Object.assign({}, t.exposed), o = {};
  for (const l in t.props)
    Object.defineProperty(o, l, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[l]
    });
  if (Object.keys(n).length > 0)
    for (const l in n)
      Object.defineProperty(o, l, {
        enumerable: !0,
        configurable: !0,
        get: () => n[l]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => t.vnode.el
  }), t.exposed = o;
  function r(l) {
    e.value = l, l && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l instanceof Element ? l : l.$el
    }), t.exposed = o);
  }
  return { forwardRef: r, currentRef: e, currentElement: a };
}
function Wp(t, e) {
  const a = Ei(!1, 300), n = O(null), o = wp();
  function r() {
    n.value = null, a.value = !1;
  }
  function l(i, u) {
    const c = i.currentTarget, d = { x: i.clientX, y: i.clientY }, p = Up(d, c.getBoundingClientRect()), g = Kp(d, p), m = Hp(u.getBoundingClientRect()), h = Gp([...g, ...m]);
    n.value = h, a.value = !0;
  }
  return _e((i) => {
    if (t.value && e.value) {
      const u = (d) => l(d, e.value), c = (d) => l(d, t.value);
      t.value.addEventListener("pointerleave", u), e.value.addEventListener("pointerleave", c), i(() => {
        var d, p;
        (d = t.value) == null || d.removeEventListener("pointerleave", u), (p = e.value) == null || p.removeEventListener("pointerleave", c);
      });
    }
  }), _e((i) => {
    var u;
    if (n.value) {
      const c = (d) => {
        var p, g;
        if (!n.value)
          return;
        const m = d.target, h = { x: d.clientX, y: d.clientY }, y = ((p = t.value) == null ? void 0 : p.contains(m)) || ((g = e.value) == null ? void 0 : g.contains(m)), x = !jp(h, n.value), $ = !!m.closest("[data-grace-area-trigger]");
        y ? r() : (x || $) && (r(), o.trigger());
      };
      (u = t.value) == null || u.ownerDocument.addEventListener("pointermove", c), i(() => {
        var d;
        return (d = t.value) == null ? void 0 : d.ownerDocument.removeEventListener("pointermove", c);
      });
    }
  }), {
    isPointerInTransit: a,
    onPointerExit: o.on
  };
}
function Up(t, e) {
  const a = Math.abs(e.top - t.y), n = Math.abs(e.bottom - t.y), o = Math.abs(e.right - t.x), r = Math.abs(e.left - t.x);
  switch (Math.min(a, n, o, r)) {
    case r:
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
function Kp(t, e, a = 5) {
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
function Hp(t) {
  const { top: e, right: a, bottom: n, left: o } = t;
  return [
    { x: o, y: e },
    { x: a, y: e },
    { x: a, y: n },
    { x: o, y: n }
  ];
}
function jp(t, e) {
  const { x: a, y: n } = t;
  let o = !1;
  for (let r = 0, l = e.length - 1; r < e.length; l = r++) {
    const i = e[r].x, u = e[r].y, c = e[l].x, d = e[l].y;
    u > n != d > n && a < (c - i) * (n - u) / (d - u) + i && (o = !o);
  }
  return o;
}
function Gp(t) {
  const e = t.slice();
  return e.sort((a, n) => a.x < n.x ? -1 : a.x > n.x ? 1 : a.y < n.y ? -1 : a.y > n.y ? 1 : 0), qp(e);
}
function qp(t) {
  if (t.length <= 1)
    return t.slice();
  const e = [];
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    for (; e.length >= 2; ) {
      const r = e[e.length - 1], l = e[e.length - 2];
      if ((r.x - l.x) * (o.y - l.y) >= (r.y - l.y) * (o.x - l.x))
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
      const r = a[a.length - 1], l = a[a.length - 2];
      if ((r.x - l.x) * (o.y - l.y) >= (r.y - l.y) * (o.x - l.x))
        a.pop();
      else break;
    }
    a.push(o);
  }
  return a.pop(), e.length === 1 && a.length === 1 && e[0].x === a[0].x && e[0].y === a[0].y ? e : e.concat(a);
}
var Yp = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, la = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), wn = {}, Ro = 0, Ii = function(t) {
  return t && (t.host || Ii(t.parentNode));
}, Jp = function(t, e) {
  return e.map(function(a) {
    if (t.contains(a))
      return a;
    var n = Ii(a);
    return n && t.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, Qp = function(t, e, a, n) {
  var o = Jp(e, Array.isArray(t) ? t : [t]);
  wn[a] || (wn[a] = /* @__PURE__ */ new WeakMap());
  var r = wn[a], l = [], i = /* @__PURE__ */ new Set(), u = new Set(o), c = function(p) {
    !p || i.has(p) || (i.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var d = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(g) {
      if (i.has(g))
        d(g);
      else
        try {
          var m = g.getAttribute(n), h = m !== null && m !== "false", y = (la.get(g) || 0) + 1, x = (r.get(g) || 0) + 1;
          la.set(g, y), r.set(g, x), l.push(g), y === 1 && h && bn.set(g, !0), x === 1 && g.setAttribute(a, "true"), h || g.setAttribute(n, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", g, $);
        }
    });
  };
  return d(e), i.clear(), Ro++, function() {
    l.forEach(function(p) {
      var g = la.get(p) - 1, m = r.get(p) - 1;
      la.set(p, g), r.set(p, m), g || (bn.has(p) || p.removeAttribute(n), bn.delete(p)), m || p.removeAttribute(a);
    }), Ro--, Ro || (la = /* @__PURE__ */ new WeakMap(), la = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), wn = {});
  };
}, Xp = function(t, e, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), o = Yp(t);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), Qp(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function ln(t) {
  let e;
  X(() => Je(t), (a) => {
    a ? e = Xp(a) : e && e();
  }), ze(() => {
    e && e();
  });
}
let Zp = 0;
function ke(t, e = "radix") {
  const a = fo({ useId: void 0 });
  return Rn.useId ? `${e}-${Rn.useId()}` : a.useId ? `${e}-${a.useId()}` : `${e}-${++Zp}`;
}
function Vi(t) {
  const e = O(), a = C(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.width) ?? 0;
  }), n = C(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.height) ?? 0;
  });
  return ce(() => {
    const o = Je(t);
    if (o) {
      e.value = { width: o.offsetWidth, height: o.offsetHeight };
      const r = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const i = l[0];
        let u, c;
        if ("borderBoxSize" in i) {
          const d = i.borderBoxSize, p = Array.isArray(d) ? d[0] : d;
          u = p.inlineSize, c = p.blockSize;
        } else
          u = o.offsetWidth, c = o.offsetHeight;
        e.value = { width: u, height: c };
      });
      return r.observe(o, { box: "border-box" }), () => r.unobserve(o);
    } else
      e.value = void 0;
  }), {
    width: a,
    height: n
  };
}
function ef(t, e) {
  const a = O(t);
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
const tf = "data-item-text";
function Zr(t) {
  const e = Ei("", 1e3);
  return {
    search: e,
    handleTypeaheadSearch: (a, n) => {
      if (!(t != null && t.value) && !n)
        return;
      e.value = e.value + a;
      const o = (t == null ? void 0 : t.value) ?? n, r = De(), l = o.map((p) => {
        var g;
        return {
          ref: p,
          textValue: ((g = (p.querySelector(`[${tf}]`) ?? p).textContent) == null ? void 0 : g.trim()) ?? ""
        };
      }), i = l.find((p) => p.ref === r), u = l.map((p) => p.textValue), c = nf(u, e.value, i == null ? void 0 : i.textValue), d = l.find((p) => p.textValue === c);
      return d && d.ref.focus(), d == null ? void 0 : d.ref;
    },
    resetTypeahead: () => {
      e.value = "";
    }
  };
}
function af(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
function nf(t, e, a) {
  const n = e.length > 1 && Array.from(e).every((i) => i === e[0]) ? e[0] : e, o = a ? t.indexOf(a) : -1;
  let r = af(t, Math.max(o, 0));
  n.length === 1 && (r = r.filter((i) => i !== a));
  const l = r.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return l !== a ? l : void 0;
}
function Ri() {
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
const es = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(t, { attrs: e, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const r = po(a.default()), l = r.findIndex((d) => d.type !== Br);
      if (l === -1)
        return r;
      const i = r[l];
      (n = i.props) == null || delete n.ref;
      const u = i.props ? S(e, i.props) : e;
      e.class && (o = i.props) != null && o.class && delete i.props.class;
      const c = Tl(i, u);
      for (const d in u)
        d.startsWith("on") && (c.props || (c.props = {}), c.props[d] = u[d]);
      return r.length === 1 ? c : (r[l] = c, r);
    };
  }
}), N = b({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => Ie(n, e) : n !== "template" ? () => Ie(t.as, e, { default: a.default }) : () => Ie(es, e, { default: a.default });
  }
});
function ka() {
  const t = O(), e = C(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (n = t.value) == null ? void 0 : n.$el.nextElementSibling : Je(t);
  });
  return {
    primitiveElement: t,
    currentElement: e
  };
}
const [Fi, of] = pe("CollapsibleRoot"), rf = /* @__PURE__ */ b({
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
    const n = t, o = we(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = we(n, "disabled");
    return of({
      contentId: "",
      disabled: r,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), e({ open: o }), U(), (l, i) => (v(), w(s(N), {
      as: l.as,
      "as-child": n.asChild,
      "data-state": s(o) ? "open" : "closed",
      "data-disabled": s(r) ? "" : void 0
    }, {
      default: f(() => [
        _(l.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), sf = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    U();
    const a = Fi();
    return (n, o) => {
      var r, l;
      return v(), w(s(N), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": e.asChild,
        "aria-controls": s(a).contentId,
        "aria-expanded": s(a).open.value,
        "data-state": s(a).open.value ? "open" : "closed",
        "data-disabled": (r = s(a).disabled) != null && r.value ? "" : void 0,
        disabled: (l = s(a).disabled) == null ? void 0 : l.value,
        onClick: s(a).onOpenToggle
      }, {
        default: f(() => [
          _(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function lf(t, e) {
  var a;
  const n = O({}), o = O("none"), r = O(t), l = t.value ? "mounted" : "unmounted";
  let i;
  const u = ((a = e.value) == null ? void 0 : a.ownerDocument.defaultView) ?? on, { state: c, dispatch: d } = ef(l, {
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
    var $;
    if (ct) {
      const k = new CustomEvent(x, { bubbles: !1, cancelable: !1 });
      ($ = e.value) == null || $.dispatchEvent(k);
    }
  };
  X(
    t,
    async (x, $) => {
      var k;
      const B = $ !== x;
      if (await ae(), B) {
        const E = o.value, D = _n(e.value);
        x ? (d("MOUNT"), p("enter"), D === "none" && p("after-enter")) : D === "none" || ((k = n.value) == null ? void 0 : k.display) === "none" ? (d("UNMOUNT"), p("leave"), p("after-leave")) : $ && E !== D ? (d("ANIMATION_OUT"), p("leave")) : (d("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const g = (x) => {
    const $ = _n(e.value), k = $.includes(
      x.animationName
    ), B = c.value === "mounted" ? "enter" : "leave";
    if (x.target === e.value && k && (p(`after-${B}`), d("ANIMATION_END"), !r.value)) {
      const E = e.value.style.animationFillMode;
      e.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var D;
        ((D = e.value) == null ? void 0 : D.style.animationFillMode) === "forwards" && (e.value.style.animationFillMode = E);
      });
    }
    x.target === e.value && $ === "none" && d("ANIMATION_END");
  }, m = (x) => {
    x.target === e.value && (o.value = _n(e.value));
  }, h = X(
    e,
    (x, $) => {
      x ? (n.value = getComputedStyle(x), x.addEventListener("animationstart", m), x.addEventListener("animationcancel", g), x.addEventListener("animationend", g)) : (d("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), $ == null || $.removeEventListener("animationstart", m), $ == null || $.removeEventListener("animationcancel", g), $ == null || $.removeEventListener("animationend", g));
    },
    { immediate: !0 }
  ), y = X(c, () => {
    const x = _n(e.value);
    o.value = c.value === "mounted" ? x : "none";
  });
  return ze(() => {
    h(), y();
  }), {
    isPresent: C(
      () => ["mounted", "unmountSuspended"].includes(c.value)
    )
  };
}
function _n(t) {
  return t && getComputedStyle(t).animationName || "none";
}
const Ke = b({
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
    const { present: o, forceMount: r } = he(t), l = O(), { isPresent: i } = lf(o, l);
    a({ present: i });
    let u = e.default({ present: i });
    u = po(u || []);
    const c = Ee();
    if (u && (u == null ? void 0 : u.length) > 1) {
      const d = (n = c == null ? void 0 : c.parent) != null && n.type.name ? `<${c.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${d}\` for  \`Presence\` component.`,
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
    return () => r.value || o.value || i.value ? Ie(e.default({ present: i })[0], {
      ref: (d) => {
        const p = Je(d);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
      }
    }) : null;
  }
}), uf = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Fi();
    a.contentId || (a.contentId = ke(void 0, "radix-vue-collapsible-content"));
    const n = O(), { forwardRef: o, currentElement: r } = U(), l = O(0), i = O(0), u = C(() => a.open.value), c = O(u.value), d = O();
    return X(
      () => {
        var p;
        return [u.value, (p = n.value) == null ? void 0 : p.present];
      },
      async () => {
        await ae();
        const p = r.value;
        if (!p)
          return;
        d.value = d.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const g = p.getBoundingClientRect();
        i.value = g.height, l.value = g.width, c.value || (p.style.transitionDuration = d.value.transitionDuration, p.style.animationName = d.value.animationName);
      },
      {
        immediate: !0
      }
    ), ce(() => {
      requestAnimationFrame(() => {
        c.value = !1;
      });
    }), (p, g) => (v(), w(s(Ke), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || s(a).open.value,
      "force-mount": !0
    }, {
      default: f(() => {
        var m, h;
        return [
          P(s(N), S(p.$attrs, {
            id: s(a).contentId,
            ref: s(o),
            "as-child": e.asChild,
            as: p.as,
            "data-state": s(a).open.value ? "open" : "closed",
            "data-disabled": (m = s(a).disabled) != null && m.value ? "" : void 0,
            hidden: !((h = n.value) != null && h.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${l.value}px`
            }
          }), {
            default: f(() => {
              var y;
              return [
                (y = n.value) != null && y.present ? _(p.$slots, "default", { key: 0 }) : re("", !0)
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
function Li({ type: t, defaultValue: e, modelValue: a }) {
  const n = a || e;
  if (Tn(t) && Tn(a) && Tn(e))
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
    const r = Array.isArray(a) || Array.isArray(e), l = a !== void 0 ? "modelValue" : "defaultValue", i = l === "modelValue" ? typeof a : typeof e;
    if (t === "single" && r)
      return console.error(`Invalid prop \`${l}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`), "multiple";
    if (t === "multiple" && !r)
      return console.error(`Invalid prop \`${l}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`), "single";
  }
  return o ? Array.isArray(n) ? "multiple" : "single" : t;
}
function df({ type: t, defaultValue: e, modelValue: a }) {
  return t || Li({ type: t, defaultValue: e, modelValue: a });
}
function cf({ type: t, defaultValue: e }) {
  return e !== void 0 ? e : t === "single" ? void 0 : [];
}
function pf(t, e) {
  const a = O(df(t)), n = we(t, "modelValue", e, {
    defaultValue: cf(t),
    passive: t.modelValue === void 0,
    deep: !0
  });
  X(
    () => [t.type, t.modelValue, t.defaultValue],
    () => {
      const l = Li(t);
      a.value !== l && (a.value = l);
    },
    { immediate: !0 }
  );
  function o(l) {
    if (a.value === "single")
      n.value = l === n.value ? void 0 : l;
    else {
      const i = [...n.value || []];
      if (i.includes(l)) {
        const u = i.findIndex((c) => c === l);
        i.splice(u, 1);
      } else
        i.push(l);
      n.value = i;
    }
  }
  const r = C(() => a.value === "single");
  return {
    modelValue: n,
    type: a,
    changeModelValue: o,
    isSingle: r
  };
}
const [vo, ff] = pe("AccordionRoot"), vf = /* @__PURE__ */ b({
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
    const a = t, n = e, { dir: o, disabled: r } = he(a), l = pt(o), { modelValue: i, changeModelValue: u, isSingle: c } = pf(a, n), { forwardRef: d, currentElement: p } = U();
    return ff({
      disabled: r,
      direction: l,
      orientation: a.orientation,
      parentElement: p,
      isSingle: c,
      collapsible: a.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (g, m) => (v(), w(s(N), {
      ref: s(d),
      "as-child": g.asChild,
      as: g.as
    }, {
      default: f(() => [
        _(g.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [ts, mf] = pe("AccordionItem"), hf = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t, { expose: e }) {
    const a = t, n = vo(), o = C(
      () => n.isSingle.value ? a.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(a.value)
    ), r = C(() => n.disabled.value || a.disabled), l = C(() => r.value ? "" : void 0), i = C(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    e({ open: o, dataDisabled: l });
    const { currentRef: u, currentElement: c } = U();
    mf({
      open: o,
      dataState: i,
      disabled: r,
      dataDisabled: l,
      triggerId: "",
      currentRef: u,
      currentElement: c,
      value: C(() => a.value)
    });
    function d(p) {
      var g;
      const m = p.target;
      if (Array.from(((g = n.parentElement.value) == null ? void 0 : g.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((h) => h === m) === -1)
        return null;
      Oi(
        p,
        c.value,
        n.parentElement.value,
        {
          arrowKeyOptions: n.orientation,
          dir: n.direction.value,
          focus: !0
        }
      );
    }
    return (p, g) => (v(), w(s(rf), {
      "data-orientation": s(n).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: o.value,
      as: a.as,
      "as-child": a.asChild,
      onKeydown: Me(d, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: f(() => [
        _(p.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), gf = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = vo(), n = ts();
    return U(), (o, r) => (v(), w(s(uf), {
      role: "region",
      hidden: !s(n).open.value,
      "as-child": e.asChild,
      "force-mount": e.forceMount,
      "aria-labelledby": s(n).triggerId,
      "data-state": s(n).dataState.value,
      "data-disabled": s(n).dataDisabled.value,
      "data-orientation": s(a).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), yf = /* @__PURE__ */ b({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(t) {
    const e = t, a = vo(), n = ts();
    return U(), (o, r) => (v(), w(s(N), {
      as: e.as,
      "as-child": e.asChild,
      "data-orientation": s(a).orientation,
      "data-state": s(n).dataState.value,
      "data-disabled": s(n).dataDisabled.value
    }, {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), bf = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = vo(), n = ts();
    n.triggerId || (n.triggerId = ke(void 0, "radix-vue-accordion-trigger"));
    function o() {
      const r = a.isSingle.value && n.open.value && !a.collapsible;
      n.disabled.value || r || a.changeModelValue(n.value.value);
    }
    return (r, l) => (v(), w(s(sf), {
      id: s(n).triggerId,
      ref: s(n).currentRef,
      "data-radix-vue-collection-item": "",
      as: e.as,
      "as-child": e.asChild,
      "aria-disabled": s(n).disabled.value || void 0,
      "aria-expanded": s(n).open.value || !1,
      "data-disabled": s(n).dataDisabled.value,
      "data-orientation": s(a).orientation,
      "data-state": s(n).dataState.value,
      disabled: s(n).disabled.value,
      onClick: o
    }, {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [ft, wf] = pe("DialogRoot"), Ni = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = we(a, "open", e, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = O(), r = O(), { modal: l } = he(a);
    return wf({
      open: n,
      modal: l,
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
      contentElement: r
    }), (i, u) => _(i.$slots, "default", { open: s(n) });
  }
}), zi = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = ft(), { forwardRef: n, currentElement: o } = U();
    return a.contentId || (a.contentId = ke(void 0, "radix-vue-dialog-content")), ce(() => {
      a.triggerElement.value = o.value;
    }), (r, l) => (v(), w(s(N), S(e, {
      ref: s(n),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(a).open.value || !1,
      "aria-controls": s(a).open.value ? s(a).contentId : void 0,
      "data-state": s(a).open.value ? "open" : "closed",
      onClick: s(a).onOpenToggle
    }), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), un = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = Qr();
    return (a, n) => s(e) || a.forceMount ? (v(), w(en, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      _(a.$slots, "default")
    ], 8, ["to", "disabled"])) : re("", !0);
  }
}), as = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(un), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _f = "dismissableLayer.pointerDownOutside", xf = "dismissableLayer.focusOutside";
function Wi(t, e) {
  const a = e.closest(
    "[data-dismissable-layer]"
  ), n = t.dataset.dismissableLayer === "" ? t : t.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    t.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function Cf(t, e) {
  var a;
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = O(!1), r = O(() => {
  });
  return _e((l) => {
    if (!ct)
      return;
    const i = async (c) => {
      const d = c.target;
      if (e != null && e.value) {
        if (Wi(e.value, d)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let p = function() {
            qr(
              _f,
              t,
              g
            );
          };
          const g = { originalEvent: c };
          c.pointerType === "touch" ? (n.removeEventListener("click", r.value), r.value = p, n.addEventListener("click", r.value, {
            once: !0
          })) : p();
        } else
          n.removeEventListener("click", r.value);
        o.value = !1;
      }
    }, u = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    l(() => {
      window.clearTimeout(u), n.removeEventListener("pointerdown", i), n.removeEventListener("click", r.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function $f(t, e) {
  var a;
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = O(!1);
  return _e((r) => {
    if (!ct)
      return;
    const l = async (i) => {
      e != null && e.value && (await ae(), !(!e.value || Wi(e.value, i.target)) && i.target && !o.value && qr(
        xf,
        t,
        { originalEvent: i }
      ));
    };
    n.addEventListener("focusin", l), r(() => n.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const Ze = ro({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Da = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: r } = U(), l = C(
      () => {
        var h;
        return ((h = r.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), i = C(() => Ze.layersRoot), u = C(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), c = C(() => Ze.layersWithOutsidePointerEventsDisabled.size > 0), d = C(() => {
      const h = Array.from(i.value), [y] = [...Ze.layersWithOutsidePointerEventsDisabled].slice(-1), x = h.indexOf(y);
      return u.value >= x;
    }), p = Cf(async (h) => {
      const y = [...Ze.branches].some(
        (x) => x == null ? void 0 : x.contains(h.target)
      );
      !d.value || y || (n("pointerDownOutside", h), n("interactOutside", h), await ae(), h.defaultPrevented || n("dismiss"));
    }, r), g = $f((h) => {
      [...Ze.branches].some(
        (y) => y == null ? void 0 : y.contains(h.target)
      ) || (n("focusOutside", h), n("interactOutside", h), h.defaultPrevented || n("dismiss"));
    }, r);
    Jr("Escape", (h) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", h), h.defaultPrevented || n("dismiss"));
    });
    let m;
    return _e((h) => {
      r.value && (a.disableOutsidePointerEvents && (Ze.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Ze.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), h(() => {
        a.disableOutsidePointerEvents && Ze.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m);
      }));
    }), _e((h) => {
      h(() => {
        r.value && (i.value.delete(r.value), Ze.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (h, y) => (v(), w(s(N), {
      ref: s(o),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: ut({
        pointerEvents: c.value ? d.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(g).onFocusCapture,
      onBlurCapture: s(g).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: f(() => [
        _(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Bf = /* @__PURE__ */ b({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = U();
    return ce(() => {
      Ze.branches.add(n.value);
    }), ze(() => {
      Ze.branches.delete(n.value);
    }), (o, r) => (v(), w(s(N), S({ ref: s(a) }, e), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fo = "focusScope.autoFocusOnMount", Lo = "focusScope.autoFocusOnUnmount", ul = { bubbles: !1, cancelable: !0 };
function In(t, { select: e = !1 } = {}) {
  const a = De();
  for (const n of t)
    if (Tt(n, { select: e }), De() !== a)
      return !0;
}
function kf(t) {
  const e = ns(t), a = dl(e, t), n = dl(e.reverse(), t);
  return [a, n];
}
function ns(t) {
  const e = [], a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) e.push(a.currentNode);
  return e;
}
function dl(t, e) {
  for (const a of t)
    if (!Df(a, { upTo: e }))
      return a;
}
function Df(t, { upTo: e }) {
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
function Sf(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function Tt(t, { select: e = !1 } = {}) {
  if (t && t.focus) {
    const a = De();
    t.focus({ preventScroll: !0 }), t !== a && Sf(t) && e && t.select();
  }
}
const Ef = _p(() => O([]));
function Pf() {
  const t = Ef();
  return {
    add(e) {
      const a = t.value[0];
      e !== a && (a == null || a.pause()), t.value = cl(t.value, e), t.value.unshift(e);
    },
    remove(e) {
      var a;
      t.value = cl(t.value, e), (a = t.value[0]) == null || a.resume();
    }
  };
}
function cl(t, e) {
  const a = [...t], n = a.indexOf(e);
  return n !== -1 && a.splice(n, 1), a;
}
function Of(t) {
  return t.filter((e) => e.tagName !== "A");
}
const mo = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(t, { emit: e }) {
    const a = t, n = e, { currentRef: o, currentElement: r } = U(), l = O(null), i = Pf(), u = ro({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    _e((d) => {
      if (!ct)
        return;
      const p = r.value;
      if (!a.trapped)
        return;
      function g(x) {
        if (u.paused || !p)
          return;
        const $ = x.target;
        p.contains($) ? l.value = $ : Tt(l.value, { select: !0 });
      }
      function m(x) {
        if (u.paused || !p)
          return;
        const $ = x.relatedTarget;
        $ !== null && (p.contains($) || Tt(l.value, { select: !0 }));
      }
      function h(x) {
        p.contains(l.value) || Tt(p);
      }
      document.addEventListener("focusin", g), document.addEventListener("focusout", m);
      const y = new MutationObserver(h);
      p && y.observe(p, { childList: !0, subtree: !0 }), d(() => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", m), y.disconnect();
      });
    }), _e(async (d) => {
      const p = r.value;
      if (await ae(), !p)
        return;
      i.add(u);
      const g = De();
      if (!p.contains(g)) {
        const m = new CustomEvent(Fo, ul);
        p.addEventListener(Fo, (h) => n("mountAutoFocus", h)), p.dispatchEvent(m), m.defaultPrevented || (In(Of(ns(p)), {
          select: !0
        }), De() === g && Tt(p));
      }
      d(() => {
        p.removeEventListener(Fo, (y) => n("mountAutoFocus", y));
        const m = new CustomEvent(Lo, ul), h = (y) => {
          n("unmountAutoFocus", y);
        };
        p.addEventListener(Lo, h), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Tt(g ?? document.body, { select: !0 }), p.removeEventListener(Lo, h), i.remove(u);
        }, 0);
      });
    });
    function c(d) {
      if (!a.loop && !a.trapped || u.paused)
        return;
      const p = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, g = De();
      if (p && g) {
        const m = d.currentTarget, [h, y] = kf(m);
        h && y ? !d.shiftKey && g === y ? (d.preventDefault(), a.loop && Tt(h, { select: !0 })) : d.shiftKey && g === h && (d.preventDefault(), a.loop && Tt(y, { select: !0 })) : g === m && d.preventDefault();
      }
    }
    return (d, p) => (v(), w(s(N), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": d.asChild,
      as: d.as,
      onKeydown: c
    }, {
      default: f(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Af = "menu.itemSelect", lr = ["Enter", " "], Mf = ["ArrowDown", "PageUp", "Home"], Ui = ["ArrowUp", "PageDown", "End"], Tf = [...Mf, ...Ui], If = {
  ltr: [...lr, "ArrowRight"],
  rtl: [...lr, "ArrowLeft"]
}, Vf = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function os(t) {
  return t ? "open" : "closed";
}
function Yn(t) {
  return t === "indeterminate";
}
function rs(t) {
  return Yn(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
function ir(t) {
  const e = De();
  for (const a of t)
    if (a === e || (a.focus(), De() !== e))
      return;
}
function Rf(t, e) {
  const { x: a, y: n } = t;
  let o = !1;
  for (let r = 0, l = e.length - 1; r < e.length; l = r++) {
    const i = e[r].x, u = e[r].y, c = e[l].x, d = e[l].y;
    u > n != d > n && a < (c - i) * (n - u) / (d - u) + i && (o = !o);
  }
  return o;
}
function Ff(t, e) {
  if (!e)
    return !1;
  const a = { x: t.clientX, y: t.clientY };
  return Rf(a, e);
}
function Ja(t) {
  return t.pointerType === "mouse";
}
const Lf = "DialogTitle", Nf = "DialogContent";
function zf({
  titleName: t = Lf,
  contentName: e = Nf,
  componentLink: a = "dialog.html#title",
  titleId: n,
  descriptionId: o,
  contentElement: r
}) {
  const l = `Warning: \`${e}\` requires a \`${t}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${a}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${e}.`;
  ce(() => {
    var u;
    document.getElementById(n) || console.warn(l);
    const c = (u = r.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && c && (document.getElementById(o) || console.warn(i));
  });
}
const Ki = /* @__PURE__ */ b({
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
    const a = t, n = e, o = ft(), { forwardRef: r, currentElement: l } = U();
    return o.titleId || (o.titleId = ke(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = ke(void 0, "radix-vue-dialog-description")), ce(() => {
      o.contentElement = l, De() !== document.body && (o.triggerElement.value = De());
    }), process.env.NODE_ENV !== "production" && zf({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: l
    }), (i, u) => (v(), w(s(mo), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: u[6] || (u[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: f(() => [
        P(s(Da), S({
          id: s(o).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(o).descriptionId,
          "aria-labelledby": s(o).titleId,
          "data-state": s(os)(s(o).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (c) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: u[2] || (u[2] = (c) => n("focusOutside", c)),
          onInteractOutside: u[3] || (u[3] = (c) => n("interactOutside", c)),
          onPointerDownOutside: u[4] || (u[4] = (c) => n("pointerDownOutside", c))
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
}), Wf = /* @__PURE__ */ b({
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
    const a = t, n = e, o = ft(), r = Xt(n), { forwardRef: l, currentElement: i } = U();
    return ln(i), (u, c) => (v(), w(Ki, S({ ...a, ...s(r) }, {
      ref: s(l),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: c[0] || (c[0] = (d) => {
        var p;
        d.defaultPrevented || (d.preventDefault(), (p = s(o).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: c[1] || (c[1] = (d) => {
        const p = d.detail.originalEvent, g = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || g) && d.preventDefault();
      }),
      onFocusOutside: c[2] || (c[2] = (d) => {
        d.preventDefault();
      })
    }), {
      default: f(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Uf = /* @__PURE__ */ b({
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
    const a = t, n = Xt(e);
    U();
    const o = ft(), r = O(!1), l = O(!1);
    return (i, u) => (v(), w(Ki, S({ ...a, ...s(n) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var d;
        c.defaultPrevented || (r.value || (d = s(o).triggerElement.value) == null || d.focus(), c.preventDefault()), r.value = !1, l.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (c) => {
        var d;
        c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const p = c.target;
        (d = s(o).triggerElement.value) != null && d.contains(p) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && l.value && c.preventDefault();
      })
    }), {
      default: f(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ss = /* @__PURE__ */ b({
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
    const a = t, n = e, o = ft(), r = Xt(n), { forwardRef: l } = U();
    return (i, u) => (v(), w(s(Ke), {
      present: i.forceMount || s(o).open.value
    }, {
      default: f(() => [
        s(o).modal.value ? (v(), w(Wf, S({
          key: 0,
          ref: s(l)
        }, { ...a, ...s(r), ...i.$attrs }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), w(Uf, S({
          key: 1,
          ref: s(l)
        }, { ...a, ...s(r), ...i.$attrs }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Kf = /* @__PURE__ */ b({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = ft();
    return rn(!0), U(), (a, n) => (v(), w(s(N), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": s(e).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), ls = /* @__PURE__ */ b({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = ft(), { forwardRef: a } = U();
    return (n, o) => {
      var r;
      return (r = s(e)) != null && r.modal.value ? (v(), w(s(Ke), {
        key: 0,
        present: n.forceMount || s(e).open.value
      }, {
        default: f(() => [
          P(Kf, S(n.$attrs, {
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
      }, 8, ["present"])) : re("", !0);
    };
  }
}), dn = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    U();
    const a = ft();
    return (n, o) => (v(), w(s(N), S(e, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (r) => s(a).onOpenChange(!1))
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Hi = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(t) {
    const e = t, a = ft();
    return U(), (n, o) => (v(), w(s(N), S(e, {
      id: s(a).titleId
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ji = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(t) {
    const e = t;
    U();
    const a = ft();
    return (n, o) => (v(), w(s(N), S(e, {
      id: s(a).descriptionId
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function Hf(t) {
  function e(n) {
    return Array.isArray(t.date.value) ? t.date.value.some((o) => Pe(o, n)) : t.date.value ? Pe(t.date.value, n) : !1;
  }
  const a = C(
    () => {
      var n, o, r, l;
      if (Array.isArray(t.date.value)) {
        if (!t.date.value.length)
          return !1;
        for (const i of t.date.value)
          if ((n = t.isDateDisabled) != null && n.call(t, i) || (o = t.isDateUnavailable) != null && o.call(t, i))
            return !0;
      } else {
        if (!t.date.value)
          return !1;
        if ((r = t.isDateDisabled) != null && r.call(t, t.date.value) || (l = t.isDateUnavailable) != null && l.call(t, t.date.value))
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
function jf(t, e) {
  const a = e(t), n = a.compare(t), o = {};
  return n >= 7 && (o.day = 1), n >= $t(t) && (o.month = 1), a.set({ ...o });
}
function Gf(t, e) {
  const a = e(t), n = t.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= $t(t) && (o.month = 13), a.set({ ...o });
}
function qf(t, e) {
  return e(t);
}
function Yf(t, e) {
  return e(t);
}
function Gi(t) {
  const e = Ti(t.locale.value), a = C(() => {
    const y = {
      calendar: t.placeholder.value.calendar.identifier
    };
    return t.placeholder.value.calendar.identifier === "gregory" && t.placeholder.value.era === "BC" && (y.era = "short"), y;
  }), n = O(Kt({
    dateObj: t.placeholder.value,
    weekStartsOn: t.weekStartsOn.value,
    locale: t.locale.value,
    fixedWeeks: t.fixedWeeks.value,
    numberOfMonths: t.numberOfMonths.value
  })), o = C(() => n.value.map((y) => y.value));
  function r(y) {
    return !o.value.some((x) => Ms(y, x));
  }
  const l = (y = "month", x) => {
    if (!t.maxValue.value || !n.value.length)
      return !1;
    if (t.disabled.value)
      return !0;
    const $ = n.value[n.value.length - 1].value;
    if (x || t.nextPage.value) {
      const B = jf($, x || t.nextPage.value);
      return Ua(B, t.maxValue.value);
    }
    if (y === "year") {
      const B = $.add({ years: 1 }).set({ day: 1, month: 1 });
      return Ua(B, t.maxValue.value);
    }
    const k = $.add({ months: 1 }).set({ day: 1 });
    return Ua(k, t.maxValue.value);
  }, i = (y = "month", x) => {
    if (!t.minValue.value || !n.value.length)
      return !1;
    if (t.disabled.value)
      return !0;
    const $ = n.value[0].value;
    if (x || t.prevPage.value) {
      const B = Gf($, x || t.prevPage.value);
      return Rt(B, t.minValue.value);
    }
    if (y === "year") {
      const B = $.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return Rt(B, t.minValue.value);
    }
    const k = $.subtract({ months: 1 }).set({ day: 35 });
    return Rt(k, t.minValue.value);
  };
  function u(y) {
    var x;
    return !!((x = t.isDateDisabled) != null && x.call(t, y) || t.disabled.value || t.maxValue.value && Ua(y, t.maxValue.value) || t.minValue.value && Rt(y, t.minValue.value));
  }
  const c = (y) => {
    var x;
    return !!((x = t.isDateUnavailable) != null && x.call(t, y));
  }, d = C(() => n.value.length ? n.value[0].rows[0].map((y) => e.dayOfWeek(Ye(y), t.weekdayFormat.value)) : []), p = (y = "month", x) => {
    const $ = n.value[0].value;
    if (x || t.nextPage.value) {
      const E = qf($, x || t.nextPage.value), D = Kt({
        dateObj: E,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = D;
      const I = {};
      if (!x) {
        const M = D[0].value.compare($);
        M >= $t($) && (I.day = 1), M >= 365 && (I.month = 1);
      }
      t.placeholder.value = D[0].value.set({ ...I });
      return;
    }
    const k = y === "month" ? $.add({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : $.add({ years: 1 }), B = Kt({
      dateObj: k,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    });
    n.value = B, t.placeholder.value = B[0].value.set({ day: 1 });
  }, g = (y = "month", x) => {
    const $ = n.value[0].value;
    if (x || t.prevPage.value) {
      const E = Yf($, x || t.prevPage.value), D = Kt({
        dateObj: E,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = D;
      const I = {};
      if (!x) {
        const M = $.compare(D[0].value);
        M >= $t($) && (I.day = 1), M >= 365 && (I.month = 1);
      }
      t.placeholder.value = D[0].value.set({ ...I });
      return;
    }
    const k = y === "month" ? $.subtract({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : $.subtract({ years: 1 }), B = Kt({
      dateObj: k,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    });
    n.value = B, t.placeholder.value = B[0].value.set({ day: 1 });
  };
  X(t.placeholder, (y) => {
    o.value.some((x) => Ms(x, y)) || (n.value = Kt({
      dateObj: y,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    }));
  }), X([t.locale, t.weekStartsOn, t.fixedWeeks, t.numberOfMonths], () => {
    n.value = Kt({
      dateObj: t.placeholder.value,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    });
  });
  const m = C(() => {
    if (!n.value.length)
      return "";
    if (t.locale.value !== e.getLocale() && e.setLocale(t.locale.value), n.value.length === 1) {
      const D = n.value[0].value;
      return `${e.fullMonthAndYear(Ye(D), a.value)}`;
    }
    const y = Ye(n.value[0].value), x = Ye(n.value[n.value.length - 1].value), $ = e.fullMonth(y, a.value), k = e.fullMonth(x, a.value), B = e.fullYear(y, a.value), E = e.fullYear(x, a.value);
    return B === E ? `${$} - ${k} ${E}` : `${$} ${B} - ${k} ${E}`;
  }), h = C(() => `${t.calendarLabel.value ?? "Event Date"}, ${m.value}`);
  return {
    isDateDisabled: u,
    isDateUnavailable: c,
    isNextButtonDisabled: l,
    isPrevButtonDisabled: i,
    grid: n,
    weekdays: d,
    visibleView: o,
    isOutsideVisibleView: r,
    formatter: e,
    nextPage: p,
    prevPage: g,
    headingValue: m,
    fullCalendarLabel: h
  };
}
const Jf = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Qf = {
  role: "heading",
  "aria-level": "2"
}, [Sa, Xf] = pe("CalendarRoot"), qi = /* @__PURE__ */ b({
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
      disabled: r,
      readonly: l,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: c,
      weekdayFormat: d,
      fixedWeeks: p,
      multiple: g,
      minValue: m,
      maxValue: h,
      numberOfMonths: y,
      preventDeselect: x,
      isDateDisabled: $,
      isDateUnavailable: k,
      calendarLabel: B,
      defaultValue: E,
      nextPage: D,
      prevPage: I,
      dir: M
    } = he(a), { primitiveElement: K, currentElement: R } = ka(), A = pt(M), T = we(a, "modelValue", n, {
      defaultValue: E.value,
      passive: a.modelValue === void 0
    }), F = Bi({
      defaultPlaceholder: a.placeholder,
      defaultValue: T.value,
      locale: a.locale
    }), j = we(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? F.copy(),
      passive: a.placeholder === void 0
    });
    function W(ee) {
      j.value = ee.copy();
    }
    const {
      fullCalendarLabel: z,
      headingValue: Q,
      isDateDisabled: ie,
      isDateUnavailable: ye,
      isNextButtonDisabled: Y,
      isPrevButtonDisabled: oe,
      weekdays: ve,
      isOutsideVisibleView: Ve,
      nextPage: je,
      prevPage: Qe,
      formatter: ot,
      grid: Pt
    } = Gi({
      locale: o,
      placeholder: j,
      weekStartsOn: c,
      fixedWeeks: p,
      numberOfMonths: y,
      minValue: m,
      maxValue: h,
      disabled: r,
      weekdayFormat: d,
      pagedNavigation: u,
      isDateDisabled: $.value,
      isDateUnavailable: k.value,
      calendarLabel: B,
      nextPage: D,
      prevPage: I
    }), {
      isInvalid: J,
      isDateSelected: te
    } = Hf({
      date: T,
      isDateDisabled: ie,
      isDateUnavailable: ye
    });
    X(T, (ee) => {
      if (Array.isArray(ee) && ee.length) {
        const xe = ee[ee.length - 1];
        xe && !st(j.value, xe) && W(xe);
      } else !Array.isArray(ee) && ee && !st(j.value, ee) && W(ee);
    });
    function le(ee) {
      if (g.value) {
        if (!T.value)
          T.value = [ee.copy()];
        else if (Array.isArray(T.value)) {
          if (T.value.findIndex((xe) => Pe(xe, ee)) === -1)
            T.value = [...T.value, ee];
          else if (!x.value) {
            const xe = T.value.filter((Re) => !Pe(Re, ee));
            if (!xe.length) {
              j.value = ee.copy(), T.value = void 0;
              return;
            }
            T.value = xe.map((Re) => Re.copy());
          }
        }
      } else {
        if (!T.value) {
          T.value = ee.copy();
          return;
        }
        !x.value && st(T.value, ee) ? (j.value = ee.copy(), T.value = void 0) : T.value = ee.copy();
      }
    }
    return ce(() => {
      i.value && ki(R.value);
    }), Xf({
      isDateUnavailable: ye,
      dir: A,
      isDateDisabled: ie,
      locale: o,
      formatter: ot,
      modelValue: T,
      placeholder: j,
      disabled: r,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: c,
      weekdayFormat: d,
      fixedWeeks: p,
      multiple: g,
      numberOfMonths: y,
      readonly: l,
      preventDeselect: x,
      fullCalendarLabel: z,
      headingValue: Q,
      isInvalid: J,
      isDateSelected: te,
      isNextButtonDisabled: Y,
      isPrevButtonDisabled: oe,
      isOutsideVisibleView: Ve,
      nextPage: je,
      prevPage: Qe,
      parentElement: R,
      onPlaceholderChange: W,
      onDateChange: le
    }), (ee, xe) => (v(), w(s(N), {
      ref_key: "primitiveElement",
      ref: K,
      as: ee.as,
      "as-child": ee.asChild,
      role: "application",
      "aria-label": s(z),
      "data-readonly": s(l) ? "" : void 0,
      "data-disabled": s(r) ? "" : void 0,
      "data-invalid": s(J) ? "" : void 0,
      dir: s(A)
    }, {
      default: f(() => [
        _(ee.$slots, "default", {
          date: s(j),
          grid: s(Pt),
          weekDays: s(ve),
          weekStartsOn: s(c),
          locale: s(o),
          fixedWeeks: s(p)
        }),
        me("div", Jf, [
          me("div", Qf, se(s(z)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), Zf = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ev = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Sa();
    return (n, o) => (v(), w(s(N), S(e, {
      "data-disabled": s(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        _(n.$slots, "default", {
          headingValue: s(a).headingValue.value
        }, () => [
          Z(se(s(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), tv = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(t) {
    const e = t, a = Sa(), n = C(() => a.disabled.value ? !0 : void 0), o = C(() => a.readonly.value ? !0 : void 0);
    return (r, l) => (v(), w(s(N), S(e, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), av = /* @__PURE__ */ b({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(t) {
    const e = Sa();
    return (a, n) => {
      var o, r;
      return v(), w(s(N), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": s(e).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": s(e).isDateDisabled(a.date) || ((r = (o = s(e)).isDateUnavailable) == null ? void 0 : r.call(o, a.date)),
        "data-disabled": s(e).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
          _(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), nv = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ov = /* @__PURE__ */ b({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isNextButtonDisabled(e.step, e.nextPage)), n = Sa();
    return (o, r) => (v(), w(s(N), {
      as: e.as,
      "as-child": e.asChild,
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (l) => s(n).nextPage(e.step, e.nextPage))
    }, {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Z("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), rv = /* @__PURE__ */ b({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isPrevButtonDisabled(e.step, e.prevPage)), n = Sa();
    return (o, r) => (v(), w(s(N), {
      "aria-label": "Previous page",
      as: e.as,
      "as-child": e.asChild,
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (l) => s(n).prevPage(e.step, e.prevPage))
    }, {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Z("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), sv = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), S(e, { "aria-hidden": "true" }), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lv = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iv = /* @__PURE__ */ b({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uv = /* @__PURE__ */ b({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Ri(), n = Sa(), { primitiveElement: o, currentElement: r } = ka(), l = C(() => e.day.day.toLocaleString(n.locale.value)), i = C(() => n.formatter.custom(Ye(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = C(() => n.isDateDisabled(e.day)), c = C(
      () => {
        var B;
        return (B = n.isDateUnavailable) == null ? void 0 : B.call(n, e.day);
      }
    ), d = C(() => Nl(e.day, Ct())), p = C(() => !Pr(e.day, e.month)), g = C(
      () => n.isOutsideVisibleView(e.day)
    ), m = C(() => !n.disabled.value && Pe(e.day, n.placeholder.value)), h = C(() => n.isDateSelected(e.day)), y = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])";
    function x(B) {
      var E;
      n.readonly.value || n.isDateDisabled(B) || (E = n.isDateUnavailable) != null && E.call(n, B) || n.onDateChange(B);
    }
    function $() {
      x(e.day);
    }
    function k(B) {
      B.preventDefault(), B.stopPropagation();
      const E = n.parentElement.value, D = E ? Array.from(E.querySelectorAll(y)) : [];
      let I = D.indexOf(r.value);
      const M = 7, K = n.dir.value === "rtl" ? -1 : 1;
      switch (B.code) {
        case a.ARROW_RIGHT:
          I += K;
          break;
        case a.ARROW_LEFT:
          I -= K;
          break;
        case a.ARROW_UP:
          I -= M;
          break;
        case a.ARROW_DOWN:
          I += M;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          x(e.day);
          return;
        default:
          return;
      }
      if (I >= 0 && I < D.length) {
        D[I].focus();
        return;
      }
      if (I < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), ae(() => {
          const R = E ? Array.from(E.querySelectorAll(y)) : [];
          if (!n.pagedNavigation.value) {
            const A = $t(n.placeholder.value);
            R[A - Math.abs(I)].focus();
            return;
          }
          R[R.length - Math.abs(I)].focus();
        });
        return;
      }
      if (I >= D.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), ae(() => {
          const R = E ? Array.from(E.querySelectorAll(y)) : [];
          if (!n.pagedNavigation.value) {
            const A = $t(n.placeholder.value.add({ months: n.numberOfMonths.value - 1 }));
            R[R.length - A + I - D.length].focus();
            return;
          }
          R[I - D.length].focus();
        });
      }
    }
    return (B, E) => (v(), w(s(N), S({
      ref_key: "primitiveElement",
      ref: o
    }, e, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": u.value || c.value ? !0 : void 0,
      "data-selected": h.value ? !0 : void 0,
      "data-value": B.day.toString(),
      "data-disabled": u.value ? "" : void 0,
      "data-unavailable": c.value ? "" : void 0,
      "data-today": d.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": g.value ? "" : void 0,
      "data-focused": m.value ? "" : void 0,
      tabindex: m.value ? 0 : p.value || u.value ? void 0 : -1,
      onClick: $,
      onKeydown: [
        Me(k, ["up", "down", "left", "right", "space", "enter"]),
        E[0] || (E[0] = Me($e(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: f(() => [
        _(B.$slots, "default", { dayValue: l.value }, () => [
          Z(se(l.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Jn(t) {
  return t === "indeterminate";
}
function Yi(t) {
  return Jn(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
const dv = ["value", "checked", "name", "disabled", "required"], [cv, pv] = pe("CheckboxRoot"), fv = /* @__PURE__ */ b({
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
    const a = t, n = e, { disabled: o } = he(a), r = we(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    }), { forwardRef: l, currentElement: i } = U(), u = sn(i), c = C(() => {
      var d;
      return a.id && i.value ? (d = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : d.innerText : void 0;
    });
    return pv({
      disabled: o,
      state: r
    }), (d, p) => (v(), L(ne, null, [
      P(s(N), S(d.$attrs, {
        id: d.id,
        ref: s(l),
        role: "checkbox",
        "as-child": a.asChild,
        as: d.as,
        type: d.as === "button" ? "button" : void 0,
        "aria-checked": s(Jn)(s(r)) ? "mixed" : s(r),
        "aria-required": a.required,
        "aria-label": d.$attrs["aria-label"] || c.value,
        "data-state": s(Yi)(s(r)),
        "data-disabled": s(o) ? "" : void 0,
        disabled: s(o),
        onKeydown: Me($e(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (g) => r.value = s(Jn)(s(r)) ? !0 : !s(r))
      }), {
        default: f(() => [
          _(d.$slots, "default", { checked: s(r) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      s(u) ? (v(), L("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "true",
        value: d.value,
        checked: !!s(r),
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
      }, null, 8, dv)) : re("", !0)
    ], 64));
  }
}), vv = /* @__PURE__ */ b({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e } = U(), a = cv();
    return (n, o) => (v(), w(s(Ke), {
      present: n.forceMount || s(Jn)(s(a).state.value) || s(a).state.value === !0
    }, {
      default: f(() => [
        P(s(N), S({
          ref: s(e),
          "data-state": s(Yi)(s(a).state.value),
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
}), [Ji, mv] = pe("PopperRoot"), Ea = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(t) {
    const e = O();
    return mv({
      anchor: e,
      onAnchorChange: (a) => e.value = a
    }), (a, n) => _(a.$slots, "default");
  }
}), ho = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = U(), o = Ji();
    return _e(() => {
      o.onAnchorChange(e.element ?? n.value);
    }), (r, l) => (v(), w(s(N), {
      ref: s(a),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function hv(t) {
  return t !== null;
}
function gv(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      var a, n, o;
      const { placement: r, rects: l, middlewareData: i } = e, u = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, c = u ? 0 : t.arrowWidth, d = u ? 0 : t.arrowHeight, [p, g] = ur(r), m = { start: "0%", center: "50%", end: "100%" }[g], h = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + c / 2, y = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + d / 2;
      let x = "", $ = "";
      return p === "bottom" ? (x = u ? m : `${h}px`, $ = `${-d}px`) : p === "top" ? (x = u ? m : `${h}px`, $ = `${l.floating.height + d}px`) : p === "right" ? (x = `${-d}px`, $ = u ? m : `${y}px`) : p === "left" && (x = `${l.floating.width + d}px`, $ = u ? m : `${y}px`), { data: { x, y: $ } };
    }
  };
}
function ur(t) {
  const [e, a = "center"] = t.split("-");
  return [e, a];
}
const Qi = {
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
}, [J_, yv] = pe("PopperContent"), _a = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Dr({
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
    ...Qi
  }),
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Ji(), { forwardRef: r, currentElement: l } = U(), i = O(), u = O(), { width: c, height: d } = Vi(u), p = C(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), g = C(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = C(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), h = C(() => ({
      padding: g.value,
      boundary: m.value.filter(hv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), y = bp(() => [
      gi({
        mainAxis: a.sideOffset + d.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && Gn({
        ...h.value
      }),
      a.avoidCollisions && yi({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? _i() : void 0,
        ...h.value
      }),
      !a.prioritizePosition && a.avoidCollisions && Gn({
        ...h.value
      }),
      bi({
        ...h.value,
        apply: ({ elements: A, rects: T, availableWidth: F, availableHeight: j }) => {
          const { width: W, height: z } = T.reference, Q = A.floating.style;
          Q.setProperty(
            "--radix-popper-available-width",
            `${F}px`
          ), Q.setProperty(
            "--radix-popper-available-height",
            `${j}px`
          ), Q.setProperty(
            "--radix-popper-anchor-width",
            `${W}px`
          ), Q.setProperty(
            "--radix-popper-anchor-height",
            `${z}px`
          );
        }
      }),
      u.value && xi({ element: u.value, padding: a.arrowPadding }),
      gv({
        arrowWidth: c.value,
        arrowHeight: d.value
      }),
      a.hideWhenDetached && wi({ strategy: "referenceHidden", ...h.value })
    ]), { floatingStyles: x, placement: $, isPositioned: k, middlewareData: B } = $i(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...A) => hi(...A, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: y
      }
    ), E = C(
      () => ur($.value)[0]
    ), D = C(
      () => ur($.value)[1]
    );
    Sr(() => {
      k.value && n("placed");
    });
    const I = C(
      () => {
        var A;
        return ((A = B.value.arrow) == null ? void 0 : A.centerOffset) !== 0;
      }
    ), M = O("");
    _e(() => {
      l.value && (M.value = window.getComputedStyle(l.value).zIndex);
    });
    const K = C(() => {
      var A;
      return ((A = B.value.arrow) == null ? void 0 : A.x) ?? 0;
    }), R = C(() => {
      var A;
      return ((A = B.value.arrow) == null ? void 0 : A.y) ?? 0;
    });
    return yv({
      placedSide: E,
      onArrowChange: (A) => u.value = A,
      arrowX: K,
      arrowY: R,
      shouldHideArrow: I
    }), (A, T) => {
      var F, j, W;
      return v(), L("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: ut({
          ...s(x),
          transform: s(k) ? s(x).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: M.value,
          "--radix-popper-transform-origin": [
            (F = s(B).transformOrigin) == null ? void 0 : F.x,
            (j = s(B).transformOrigin) == null ? void 0 : j.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((W = s(B).hide) == null ? void 0 : W.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        P(s(N), S({ ref: s(r) }, A.$attrs, {
          "as-child": a.asChild,
          as: A.as,
          "data-side": E.value,
          "data-align": D.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(k) ? void 0 : "none"
          }
        }), {
          default: f(() => [
            _(A.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), cn = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return U(), (e, a) => (v(), w(s(N), {
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
        _(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), bv = /* @__PURE__ */ b({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(t) {
    const e = t, a = C(() => typeof e.value == "string" || typeof e.value == "number" || typeof e.value == "boolean" ? [{ name: e.name, value: e.value }] : typeof e.value == "object" && Array.isArray(e.value) ? e.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([r, l]) => ({ name: `[${o}][${e.name}][${r}]`, value: l })) : { name: `[${e.name}][${o}]`, value: n }) : e.value !== null && typeof e.value == "object" && !Array.isArray(e.value) ? Object.entries(e.value).map(([n, o]) => ({ name: `[${e.name}][${n}]`, value: o })) : []);
    return (n, o) => (v(!0), L(ne, null, be(a.value, (r) => (v(), w(cn, {
      key: r.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: r.name,
      value: r.value,
      required: n.required,
      disabled: n.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), wv = "data-radix-vue-collection-item", [is, _v] = pe("CollectionProvider");
function us(t = wv) {
  const e = O(/* @__PURE__ */ new Map()), a = O(), n = _v({
    collectionRef: a,
    itemMap: e,
    attrName: t
  }), { getItems: o } = cs(n), r = C(() => Array.from(n.itemMap.value.values())), l = C(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: r, itemMapSize: l };
}
const ds = b({
  name: "CollectionSlot",
  setup(t, { slots: e }) {
    const a = is(), { primitiveElement: n, currentElement: o } = ka();
    return X(o, () => {
      a.collectionRef.value = o.value;
    }), () => Ie(es, { ref: n }, e);
  }
}), go = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(t, { slots: e, attrs: a }) {
    const n = is(), { primitiveElement: o, currentElement: r } = ka();
    return _e((l) => {
      if (r.value) {
        const i = Il(r.value);
        n.itemMap.value.set(i, { ref: r.value, value: t.value }), l(() => n.itemMap.value.delete(i));
      }
    }), () => Ie(es, { ...a, [n.attrName]: "", ref: o }, e);
  }
});
function cs(t) {
  const e = t ?? is();
  return { getItems: () => {
    const a = e.collectionRef.value;
    if (!a)
      return [];
    const n = Array.from(a.querySelectorAll(`[${e.attrName}]`));
    return Array.from(e.itemMap.value.values()).sort(
      (o, r) => n.indexOf(o.ref) - n.indexOf(r.ref)
    );
  } };
}
const [Pa, xv] = pe("ComboboxRoot"), Cv = /* @__PURE__ */ b({
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
    const a = t, n = e, { multiple: o, disabled: r, dir: l } = he(a), i = pt(l), u = we(a, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: a.searchTerm === void 0
    }), c = we(a, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: a.defaultValue ?? o.value ? [] : void 0,
      passive: a.modelValue === void 0,
      deep: !0
    }), d = we(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), p = we(a, "selectedValue", n, {
      defaultValue: void 0,
      passive: a.selectedValue === void 0
    });
    async function g(Y) {
      var oe, ve;
      d.value = Y, await ae(), Y ? (c.value && (Array.isArray(c.value) && o.value ? p.value = (oe = B().find((Ve) => {
        var je, Qe;
        return ((Qe = (je = Ve.ref) == null ? void 0 : je.dataset) == null ? void 0 : Qe.state) === "checked";
      })) == null ? void 0 : oe.value : p.value = c.value), await ae(), (ve = y.value) == null || ve.focus(), j()) : (h.value = !1, a.resetSearchTermOnBlur && K("blur"));
    }
    function m(Y) {
      if (Array.isArray(c.value) && o.value) {
        const oe = c.value.findIndex((Ve) => Gt(Ve, Y)), ve = [...c.value];
        oe === -1 ? ve.push(Y) : ve.splice(oe, 1), c.value = ve;
      } else
        c.value = Y, g(!1);
    }
    const h = O(!1), y = O(), x = O(), { forwardRef: $, currentElement: k } = U(), { getItems: B, reactiveItems: E, itemMapSize: D } = us("data-radix-vue-combobox-item"), I = O([]);
    X(() => D.value, () => {
      I.value = B().map((Y) => Y.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const M = C(() => {
      if (h.value) {
        if (a.filterFunction)
          return a.filterFunction(I.value, u.value);
        const Y = I.value.filter((oe) => typeof oe == "string");
        if (Y.length)
          return Y.filter((oe) => {
            var ve;
            return oe.toLowerCase().includes((ve = u.value) == null ? void 0 : ve.toLowerCase());
          });
      }
      return I.value;
    });
    function K(Y) {
      const oe = Y === "blur" || Y === "select" && a.resetSearchTermOnSelect;
      !o.value && c.value && !Array.isArray(c.value) ? a.displayValue ? u.value = a.displayValue(c.value) : typeof c.value != "object" ? u.value = c.value.toString() : oe && (u.value = "") : oe && (u.value = "");
    }
    const R = C(() => M.value.findIndex((Y) => Gt(Y, p.value))), A = C(() => {
      var Y;
      return (Y = E.value.find((oe) => Gt(oe.value, p.value))) == null ? void 0 : Y.ref;
    }), T = C(() => JSON.stringify(c.value));
    X(T, async () => {
      await ae(), await ae(), K("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), X(() => [M.value.length, u.value.length], async ([Y, oe], [ve, Ve]) => {
      await ae(), await ae(), Y && (Ve > oe || R.value === -1) && (p.value = M.value[0]);
    });
    const F = sn(k);
    function j() {
      var Y;
      A.value instanceof Element && ((Y = A.value) == null || Y.scrollIntoView({ block: "nearest" }));
    }
    function W() {
      A.value instanceof Element && A.value.focus && A.value.focus();
    }
    const z = O(!1);
    function Q() {
      z.value = !0;
    }
    function ie() {
      requestAnimationFrame(() => {
        z.value = !1;
      });
    }
    async function ye(Y) {
      var oe;
      M.value.length && p.value && A.value instanceof Element && (Y.preventDefault(), Y.stopPropagation(), z.value || (oe = A.value) == null || oe.click());
    }
    return xv({
      searchTerm: u,
      modelValue: c,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: h,
      multiple: o,
      disabled: r,
      open: d,
      onOpenChange: g,
      filteredOptions: M,
      contentId: "",
      inputElement: y,
      selectedElement: A,
      onInputElementChange: (Y) => y.value = Y,
      onInputNavigation: async (Y) => {
        const oe = R.value;
        oe === 0 && Y === "up" || oe === M.value.length - 1 && Y === "down" || (oe === -1 && M.value.length || Y === "home" ? p.value = M.value[0] : Y === "end" ? p.value = M.value[M.value.length - 1] : p.value = M.value[Y === "up" ? oe - 1 : oe + 1], await ae(), j(), W(), ae(() => {
          var ve;
          return (ve = y.value) == null ? void 0 : ve.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: ye,
      onCompositionEnd: ie,
      onCompositionStart: Q,
      selectedValue: p,
      onSelectedValueChange: (Y) => p.value = Y,
      parentElement: k,
      contentElement: x,
      onContentElementChange: (Y) => x.value = Y
    }), (Y, oe) => (v(), w(s(Ea), null, {
      default: f(() => [
        P(s(N), S({
          ref: s($),
          style: {
            pointerEvents: s(d) ? "auto" : void 0
          },
          as: Y.as,
          "as-child": Y.asChild,
          dir: s(i)
        }, Y.$attrs), {
          default: f(() => [
            _(Y.$slots, "default", {
              open: s(d),
              modelValue: s(c)
            }),
            s(F) && a.name ? (v(), w(s(bv), {
              key: 0,
              name: a.name,
              value: s(c)
            }, null, 8, ["name", "value"])) : re("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), $v = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(t) {
    const e = t, a = Pa(), { forwardRef: n, currentElement: o } = U();
    ce(() => {
      const d = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      d && (a.onInputElementChange(d), setTimeout(() => {
        e.autoFocus && (d == null || d.focus());
      }, 1));
    });
    const r = C(() => e.disabled || a.disabled.value || !1), l = O();
    Al(() => {
      var d;
      return l.value = (d = a.selectedElement.value) == null ? void 0 : d.id;
    });
    function i(d) {
      a.open.value ? a.onInputNavigation(d.key === "ArrowUp" ? "up" : "down") : a.onOpenChange(!0);
    }
    function u(d) {
      a.open.value && a.onInputNavigation(d.key === "Home" ? "home" : "end");
    }
    function c(d) {
      var p;
      a.searchTerm.value = (p = d.target) == null ? void 0 : p.value, a.open.value || a.onOpenChange(!0), a.isUserInputted.value = !0;
    }
    return (d, p) => (v(), w(s(N), {
      ref: s(n),
      as: d.as,
      "as-child": d.asChild,
      type: d.type,
      disabled: r.value,
      value: s(a).searchTerm.value,
      "aria-expanded": s(a).open.value,
      "aria-controls": s(a).contentId,
      "aria-disabled": r.value ?? void 0,
      "aria-activedescendant": l.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: c,
      onKeydown: [
        Me($e(i, ["prevent"]), ["down", "up"]),
        Me(s(a).onInputEnter, ["enter"]),
        Me($e(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: s(a).onCompositionStart,
      onCompositionend: s(a).onCompositionEnd
    }, {
      default: f(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [Xi, Bv] = pe("ComboboxGroup"), kv = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { currentRef: a, currentElement: n } = U(), o = ke(void 0, "radix-vue-combobox-group"), r = Pa(), l = O(!1);
    function i() {
      if (!n.value)
        return;
      const u = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return Ap(n, () => {
      ae(() => {
        i();
      });
    }, { childList: !0 }), X(() => r.searchTerm.value, () => {
      ae(() => {
        i();
      });
    }, { immediate: !0 }), Bv({
      id: o
    }), (u, c) => xa((v(), w(s(N), S(e, {
      ref_key: "currentRef",
      ref: a,
      role: "group",
      "aria-labelledby": s(o)
    }), {
      default: f(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [$r, l.value]
    ]);
  }
}), Dv = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    U();
    const a = Xi({ id: "" });
    return (n, o) => (v(), w(s(N), S(e, {
      id: s(a).id
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Q_, Sv] = pe("ComboboxContent"), Ev = /* @__PURE__ */ b({
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
    const a = t, n = e, { position: o } = he(a), r = Pa();
    rn(a.bodyLock);
    const { forwardRef: l, currentElement: i } = U();
    ln(r.parentElement);
    const u = C(() => a.position === "popper" ? a : {}), c = fe(u.value);
    function d(g) {
      r.onSelectedValueChange("");
    }
    ce(() => {
      r.onContentElementChange(i.value);
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
    return Sv({ position: o }), (g, m) => (v(), w(s(ds), null, {
      default: f(() => [
        g.dismissable ? (v(), w(s(Da), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": g.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (h) => s(r).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (h) => {
            var y;
            (y = s(r).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("focusOutside", h);
          }),
          onInteractOutside: m[2] || (m[2] = (h) => n("interactOutside", h)),
          onEscapeKeyDown: m[3] || (m[3] = (h) => n("escapeKeyDown", h)),
          onPointerDownOutside: m[4] || (m[4] = (h) => {
            var y;
            (y = s(r).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("pointerDownOutside", h);
          })
        }, {
          default: f(() => [
            (v(), w(Ne(s(o) === "popper" ? s(_a) : s(N)), S({ ...g.$attrs, ...s(c) }, {
              id: s(r).contentId,
              ref: s(l),
              role: "listbox",
              "data-state": s(r).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...s(o) === "popper" ? p : {}
              },
              onPointerleave: d
            }), {
              default: f(() => [
                _(g.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (v(), w(Ne(s(o) === "popper" ? s(_a) : s(N)), S({ key: 1 }, { ...g.$attrs, ...u.value }, {
          id: s(r).contentId,
          ref: s(l),
          role: "listbox",
          "data-state": s(r).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...s(o) === "popper" ? p : {}
          },
          onPointerleave: d
        }), {
          default: f(() => [
            _(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Pv = /* @__PURE__ */ b({
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
    const a = ue(t, e), { forwardRef: n } = U(), o = Pa();
    return o.contentId || (o.contentId = ke(void 0, "radix-vue-combobox-content")), (r, l) => (v(), w(s(Ke), {
      present: r.forceMount || s(o).open.value
    }, {
      default: f(() => [
        P(Ev, S({ ...s(a), ...r.$attrs }, { ref: s(n) }), {
          default: f(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ov = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    U();
    const a = Pa(), n = C(() => a.filteredOptions.value.length === 0);
    return (o, r) => n.value ? (v(), w(s(N), H(S({ key: 0 }, e)), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Z("No options")
        ])
      ]),
      _: 3
    }, 16)) : re("", !0);
  }
});
function Av(t) {
  const e = fo({
    nonce: O()
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.nonce) == null ? void 0 : a.value);
  });
}
const [X_, Mv] = pe("ComboboxItem"), Tv = "combobox.select", Iv = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { disabled: o } = he(a), r = Pa();
    Xi({ id: "", options: O([]) });
    const { forwardRef: l } = U(), i = C(
      () => {
        var y, x;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (y = r.modelValue.value) == null ? void 0 : y.some(($) => Gt($, a.value)) : Gt((x = r.modelValue) == null ? void 0 : x.value, a.value);
      }
    ), u = C(() => Gt(r.selectedValue.value, a.value)), c = ke(void 0, "radix-vue-combobox-item"), d = ke(void 0, "radix-vue-combobox-option"), p = C(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((y) => Gt(y, a.value)) : !0);
    async function g(y) {
      n("select", y), !(y != null && y.defaultPrevented) && !o.value && y && r.onValueChange(a.value);
    }
    function m(y) {
      if (!y)
        return;
      const x = { originalEvent: y, value: a.value };
      qr(Tv, g, x);
    }
    async function h(y) {
      await ae(), !y.defaultPrevented && r.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Mv({
      isSelected: i
    }), (y, x) => (v(), w(s(go), { value: y.value }, {
      default: f(() => [
        xa(P(s(N), {
          id: s(d),
          ref: s(l),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": s(c),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": s(o) || void 0,
          "data-disabled": s(o) ? "" : void 0,
          as: y.as,
          "as-child": y.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: m,
          onPointermove: h
        }, {
          default: f(() => [
            _(y.$slots, "default", {}, () => [
              Z(se(y.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [$r, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Vv = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return U(), (a, n) => (v(), w(s(N), S(e, { "aria-hidden": "true" }), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zi = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(ho), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Rv() {
  const t = O(!1);
  return ce(() => {
    wa("keydown", () => {
      t.value = !0;
    }, { capture: !0, passive: !0 }), wa(["pointerdown", "pointermove"], () => {
      t.value = !1;
    }, { capture: !0, passive: !0 });
  }), t;
}
const Fv = Di(Rv), [Zt, eu] = pe(["MenuRoot", "MenuSub"], "MenuContext"), [pn, Lv] = pe("MenuRoot"), Nv = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, { modal: o, dir: r } = he(a), l = pt(r), i = we(a, "open", n), u = O(), c = Fv();
    return eu({
      open: i,
      onOpenChange: (d) => {
        i.value = d;
      },
      content: u,
      onContentChange: (d) => {
        u.value = d;
      }
    }), Lv({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: c,
      dir: l,
      modal: o
    }), (d, p) => (v(), w(s(Ea), null, {
      default: f(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }));
  }
}), zv = "rovingFocusGroup.onEntryFocus", Wv = { bubbles: !1, cancelable: !0 }, Uv = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Kv(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function Hv(t, e, a) {
  const n = Kv(t.key, a);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Uv[n];
}
function tu(t, e = !1) {
  const a = De();
  for (const n of t)
    if (n === a || (n.focus({ preventScroll: e }), De() !== a))
      return;
}
function jv(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
const [Gv, qv] = pe("RovingFocusGroup"), au = /* @__PURE__ */ b({
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
    const n = t, o = a, { loop: r, orientation: l, dir: i } = he(n), u = pt(i), c = we(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), d = O(!1), p = O(!1), g = O(0), { getItems: m } = us();
    function h(x) {
      const $ = !p.value;
      if (x.currentTarget && x.target === x.currentTarget && $ && !d.value) {
        const k = new CustomEvent(zv, Wv);
        if (x.currentTarget.dispatchEvent(k), o("entryFocus", k), !k.defaultPrevented) {
          const B = m().map((M) => M.ref).filter((M) => M.dataset.disabled !== ""), E = B.find((M) => M.getAttribute("data-active") === "true"), D = B.find(
            (M) => M.id === c.value
          ), I = [E, D, ...B].filter(
            Boolean
          );
          tu(I, n.preventScrollOnEntryFocus);
        }
      }
      p.value = !1;
    }
    function y() {
      setTimeout(() => {
        p.value = !1;
      }, 1);
    }
    return e({
      getItems: m
    }), qv({
      loop: r,
      dir: u,
      orientation: l,
      currentTabStopId: c,
      onItemFocus: (x) => {
        c.value = x;
      },
      onItemShiftTab: () => {
        d.value = !0;
      },
      onFocusableItemAdd: () => {
        g.value++;
      },
      onFocusableItemRemove: () => {
        g.value--;
      }
    }), (x, $) => (v(), w(s(ds), null, {
      default: f(() => [
        P(s(N), {
          tabindex: d.value || g.value === 0 ? -1 : 0,
          "data-orientation": s(l),
          as: x.as,
          "as-child": x.asChild,
          dir: s(u),
          style: { outline: "none" },
          onMousedown: $[0] || ($[0] = (k) => p.value = !0),
          onMouseup: y,
          onFocus: h,
          onBlur: $[1] || ($[1] = (k) => d.value = !1)
        }, {
          default: f(() => [
            _(x.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Yv = /* @__PURE__ */ b({
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
    const e = t, a = Gv(), n = C(() => e.tabStopId || ke()), o = C(
      () => a.currentTabStopId.value === n.value
    ), { getItems: r } = cs();
    ce(() => {
      e.focusable && a.onFocusableItemAdd();
    }), ze(() => {
      e.focusable && a.onFocusableItemRemove();
    });
    function l(i) {
      if (i.key === "Tab" && i.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = Hv(
        i,
        a.orientation.value,
        a.dir.value
      );
      if (u !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !e.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let c = [...r().map((d) => d.ref).filter((d) => d.dataset.disabled !== "")];
        if (u === "last")
          c.reverse();
        else if (u === "prev" || u === "next") {
          u === "prev" && c.reverse();
          const d = c.indexOf(
            i.currentTarget
          );
          c = a.loop.value ? jv(c, d + 1) : c.slice(d + 1);
        }
        ae(() => tu(c));
      }
    }
    return (i, u) => (v(), w(s(go), null, {
      default: f(() => [
        P(s(N), {
          tabindex: o.value ? 0 : -1,
          "data-orientation": s(a).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: u[0] || (u[0] = (c) => {
            i.focusable ? s(a).onItemFocus(n.value) : c.preventDefault();
          }),
          onFocus: u[1] || (u[1] = (c) => s(a).onItemFocus(n.value)),
          onKeydown: l
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
}), [ps, Jv] = pe("MenuContent"), fs = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Dr({
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
    ...Qi
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Zt(), r = pn(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = he(a);
    Xr(), rn(i.value);
    const c = O(""), d = O(0), p = O(0), g = O(null), m = O("right"), h = O(0), y = O(null), { createCollection: x } = Ba(), { forwardRef: $, currentElement: k } = U(), B = x(k);
    X(k, (A) => {
      o.onContentChange(A);
    });
    const { handleTypeaheadSearch: E } = Zr(B);
    ze(() => {
      window.clearTimeout(d.value);
    });
    function D(A) {
      var T, F;
      return m.value === ((T = g.value) == null ? void 0 : T.side) && Ff(A, (F = g.value) == null ? void 0 : F.area);
    }
    async function I(A) {
      var T;
      n("openAutoFocus", A), !A.defaultPrevented && (A.preventDefault(), (T = k.value) == null || T.focus({
        preventScroll: !0
      }));
    }
    function M(A) {
      if (A.defaultPrevented)
        return;
      const T = A.target.closest("[data-radix-menu-content]") === A.currentTarget, F = A.ctrlKey || A.altKey || A.metaKey, j = A.key.length === 1, W = Oi(
        A,
        De(),
        k.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (W)
        return W == null ? void 0 : W.focus();
      if (A.code === "Space" || (T && (A.key === "Tab" && A.preventDefault(), !F && j && E(A.key)), A.target !== k.value) || !Tf.includes(A.key))
        return;
      A.preventDefault();
      const z = B.value;
      Ui.includes(A.key) && z.reverse(), ir(z);
    }
    function K(A) {
      var T, F;
      (F = (T = A == null ? void 0 : A.currentTarget) == null ? void 0 : T.contains) != null && F.call(T, A.target) || (window.clearTimeout(d.value), c.value = "");
    }
    function R(A) {
      var T;
      if (!Ja(A))
        return;
      const F = A.target, j = h.value !== A.clientX;
      if ((T = A == null ? void 0 : A.currentTarget) != null && T.contains(F) && j) {
        const W = A.clientX > h.value ? "right" : "left";
        m.value = W, h.value = A.clientX;
      }
    }
    return Jv({
      onItemEnter: (A) => !!D(A),
      onItemLeave: (A) => {
        var T;
        D(A) || ((T = k.value) == null || T.focus(), y.value = null);
      },
      onTriggerLeave: (A) => !!D(A),
      searchRef: c,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (A) => {
        g.value = A;
      }
    }), (A, T) => (v(), w(s(mo), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: I,
      onUnmountAutoFocus: T[7] || (T[7] = (F) => n("closeAutoFocus", F))
    }, {
      default: f(() => [
        P(s(Da), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: T[2] || (T[2] = (F) => n("escapeKeyDown", F)),
          onPointerDownOutside: T[3] || (T[3] = (F) => n("pointerDownOutside", F)),
          onFocusOutside: T[4] || (T[4] = (F) => n("focusOutside", F)),
          onInteractOutside: T[5] || (T[5] = (F) => n("interactOutside", F)),
          onDismiss: T[6] || (T[6] = (F) => n("dismiss"))
        }, {
          default: f(() => [
            P(s(au), {
              "current-tab-stop-id": y.value,
              "onUpdate:currentTabStopId": T[0] || (T[0] = (F) => y.value = F),
              "as-child": "",
              orientation: "vertical",
              dir: s(r).dir.value,
              loop: s(u),
              onEntryFocus: T[1] || (T[1] = (F) => {
                n("entryFocus", F), s(r).isUsingKeyboardRef.value || F.preventDefault();
              })
            }, {
              default: f(() => [
                P(s(_a), {
                  ref: s($),
                  role: "menu",
                  as: A.as,
                  "as-child": A.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(os)(s(o).open.value),
                  dir: s(r).dir.value,
                  side: A.side,
                  "side-offset": A.sideOffset,
                  align: A.align,
                  "align-offset": A.alignOffset,
                  "avoid-collisions": A.avoidCollisions,
                  "collision-boundary": A.collisionBoundary,
                  "collision-padding": A.collisionPadding,
                  "arrow-padding": A.arrowPadding,
                  "prioritize-position": A.prioritizePosition,
                  sticky: A.sticky,
                  "hide-when-detached": A.hideWhenDetached,
                  onKeydown: M,
                  onBlur: K,
                  onPointermove: R
                }, {
                  default: f(() => [
                    _(A.$slots, "default")
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
}), nu = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = ps(), { forwardRef: n } = U(), o = O(!1);
    async function r(i) {
      if (!i.defaultPrevented && Ja(i)) {
        if (e.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await ae(), !i.defaultPrevented && Ja(i) && a.onItemLeave(i);
    }
    return (i, u) => (v(), w(s(go), {
      value: { textValue: i.textValue }
    }, {
      default: f(() => [
        P(s(N), S({
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
          onPointermove: r,
          onPointerleave: l,
          onFocus: u[0] || (u[0] = async (c) => {
            await ae(), !(c.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (c) => {
            await ae(), !c.defaultPrevented && (o.value = !1);
          })
        }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), vs = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: r } = U(), l = pn(), i = ps(), u = O(!1);
    async function c() {
      const d = r.value;
      if (!a.disabled && d) {
        const p = new CustomEvent(Af, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await ae(), p.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (d, p) => (v(), w(nu, S(a, {
      ref: s(o),
      onClick: c,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (g) => {
        var m;
        await ae(), !g.defaultPrevented && (u.value || (m = g.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (g) => {
        const m = s(i).searchRef.value !== "";
        d.disabled || m && g.key === " " || s(lr).includes(g.key) && (g.currentTarget.click(), g.preventDefault());
      })
    }), {
      default: f(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Qv, ou] = pe(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Xv = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Qv({
      checked: O(!1)
    });
    return (a, n) => (v(), w(s(Ke), {
      present: a.forceMount || s(Yn)(s(e).checked.value) || s(e).checked.value === !0
    }, {
      default: f(() => [
        P(s(N), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": s(rs)(s(e).checked.value)
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
}), Zv = /* @__PURE__ */ b({
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
    const a = t, n = e, o = we(a, "checked", n);
    return ou({ checked: o }), (r, l) => (v(), w(vs, S({ role: "menuitemcheckbox" }, a, {
      "aria-checked": s(Yn)(s(o)) ? "mixed" : s(o),
      "data-state": s(rs)(s(o)),
      onSelect: l[0] || (l[0] = async (i) => {
        n("select", i), s(Yn)(s(o)) ? o.value = !0 : o.value = !s(o);
      })
    }), {
      default: f(() => [
        _(r.$slots, "default", { checked: s(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), em = /* @__PURE__ */ b({
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
    const a = t, n = e, o = ue(a, n), r = Zt(), { forwardRef: l, currentElement: i } = U();
    return ln(i), (u, c) => (v(), w(fs, S(s(o), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (d) => s(r).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = $e((d) => n("focusOutside", d), ["prevent"]))
    }), {
      default: f(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), tm = /* @__PURE__ */ b({
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
    const a = ue(t, e), n = Zt();
    return (o, r) => (v(), w(fs, S(s(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: r[0] || (r[0] = (l) => s(n).onOpenChange(!1))
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), am = /* @__PURE__ */ b({
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
    const a = ue(t, e), n = Zt(), o = pn();
    return (r, l) => (v(), w(s(Ke), {
      present: r.forceMount || s(n).open.value
    }, {
      default: f(() => [
        s(o).modal.value ? (v(), w(em, H(S({ key: 0 }, { ...r.$attrs, ...s(a) })), {
          default: f(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), w(tm, H(S({ key: 1 }, { ...r.$attrs, ...s(a) })), {
          default: f(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ru = /* @__PURE__ */ b({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), S({ role: "group" }, e), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nm = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), om = /* @__PURE__ */ b({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(un), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [rm, sm] = pe("MenuRadioGroup"), lm = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = we(a, "modelValue", e);
    return sm({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, r) => (v(), w(ru, H(G(a)), {
      default: f(() => [
        _(o.$slots, "default", { modelValue: s(n) })
      ]),
      _: 3
    }, 16));
  }
}), im = /* @__PURE__ */ b({
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
    const a = t, n = e, { value: o } = he(a), r = rm(), l = C(
      () => r.modelValue.value === (o == null ? void 0 : o.value)
    );
    return ou({ checked: l }), (i, u) => (v(), w(vs, S({ role: "menuitemradio" }, a, {
      "aria-checked": l.value,
      "data-state": s(rs)(l.value),
      onSelect: u[0] || (u[0] = async (c) => {
        n("select", c), s(r).onValueChange(s(o));
      })
    }), {
      default: f(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), um = /* @__PURE__ */ b({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), S(e, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [su, dm] = pe("MenuSub"), cm = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = we(a, "open", e, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = Zt(), r = O(), l = O();
    return _e((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), eu({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), dm({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (v(), w(s(Ea), null, {
      default: f(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), pm = /* @__PURE__ */ b({
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
    const a = ue(t, e), n = Zt(), o = pn(), r = su(), { forwardRef: l, currentElement: i } = U();
    return r.contentId || (r.contentId = ke(void 0, "radix-vue-menu-sub-content")), (u, c) => (v(), w(s(Ke), {
      present: u.forceMount || s(n).open.value
    }, {
      default: f(() => [
        P(fs, S(s(a), {
          id: s(r).contentId,
          ref: s(l),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = $e((d) => {
            var p;
            s(o).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = $e(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (d) => {
            d.defaultPrevented || d.target !== s(r).trigger.value && s(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (d) => {
            s(o).onClose(), d.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (d) => {
            var p, g;
            const m = (p = d.currentTarget) == null ? void 0 : p.contains(d.target), h = s(Vf)[s(o).dir.value].includes(d.key);
            m && h && (s(n).onOpenChange(!1), (g = s(r).trigger.value) == null || g.focus(), d.preventDefault());
          })
        }), {
          default: f(() => [
            _(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), fm = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Zt(), n = pn(), o = su(), r = ps(), l = O(null);
    o.triggerId || (o.triggerId = ke(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    ze(() => {
      i();
    });
    function u(p) {
      !Ja(p) || r.onItemEnter(p) || !e.disabled && !a.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function c(p) {
      var g, m;
      if (!Ja(p))
        return;
      i();
      const h = (g = a.content.value) == null ? void 0 : g.getBoundingClientRect();
      if (h != null && h.width) {
        const y = (m = a.content.value) == null ? void 0 : m.dataset.side, x = y === "right", $ = x ? -5 : 5, k = h[x ? "left" : "right"], B = h[x ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + $, y: p.clientY },
            { x: k, y: h.top },
            { x: B, y: h.top },
            { x: B, y: h.bottom },
            { x: k, y: h.bottom }
          ],
          side: y
        }), window.clearTimeout(r.pointerGraceTimerRef.value), r.pointerGraceTimerRef.value = window.setTimeout(
          () => r.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (r.onTriggerLeave(p))
          return;
        r.onPointerGraceIntentChange(null);
      }
    }
    async function d(p) {
      var g;
      const m = r.searchRef.value !== "";
      e.disabled || m && p.key === " " || If[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await ae(), (g = a.content.value) == null || g.focus(), p.preventDefault());
    }
    return (p, g) => (v(), w(Zi, { "as-child": "" }, {
      default: f(() => [
        P(nu, S(e, {
          id: s(o).triggerId,
          ref: (m) => {
            var h;
            (h = s(o)) == null || h.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(o).contentId,
          "data-state": s(os)(s(a).open.value),
          onClick: g[0] || (g[0] = async (m) => {
            e.disabled || m.defaultPrevented || (m.currentTarget.focus(), s(a).open.value || s(a).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: c,
          onKeydown: d
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
}), [lu, vm] = pe("DropdownMenuRoot"), mm = /* @__PURE__ */ b({
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
    U();
    const o = we(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = O(), { modal: l, dir: i } = he(a), u = pt(i);
    return vm({
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
      modal: l,
      dir: u
    }), (c, d) => (v(), w(s(Nv), {
      open: s(o),
      "onUpdate:open": d[0] || (d[0] = (p) => zt(o) ? o.value = p : null),
      dir: s(u),
      modal: s(l)
    }, {
      default: f(() => [
        _(c.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), hm = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = lu(), { forwardRef: n, currentElement: o } = U();
    return ce(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = ke(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (v(), w(s(Zi), { "as-child": "" }, {
      default: f(() => [
        P(s(N), {
          id: s(a).triggerId,
          ref: s(n),
          type: r.as === "button" ? "button" : void 0,
          "as-child": e.asChild,
          as: r.as,
          "aria-haspopup": "menu",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(a).open.value ? s(a).contentId : void 0,
          "data-disabled": r.disabled ? "" : void 0,
          disabled: r.disabled,
          "data-state": s(a).open.value ? "open" : "closed",
          onClick: l[0] || (l[0] = async (i) => {
            var u;
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = s(a)) == null || u.onOpenToggle(), await ae(), s(a).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = Me(
            (i) => {
              r.disabled || (["Enter", " "].includes(i.key) && s(a).onOpenToggle(), i.key === "ArrowDown" && s(a).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: f(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), gm = /* @__PURE__ */ b({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(om), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ym = /* @__PURE__ */ b({
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
    const a = ue(t, e);
    U();
    const n = lu(), o = O(!1);
    function r(l) {
      l.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, l.preventDefault());
    }
    return n.contentId || (n.contentId = ke(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return v(), w(s(am), S(s(a), {
        id: s(n).contentId,
        "aria-labelledby": (u = s(n)) == null ? void 0 : u.triggerId,
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
          const p = c.detail.originalEvent, g = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || g;
          (!s(n).modal.value || m) && (o.value = !0), (d = s(n).triggerElement.value) != null && d.contains(c.target) && c.preventDefault();
        })
      }), {
        default: f(() => [
          _(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), iu = /* @__PURE__ */ b({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = Xt(e);
    return U(), (o, r) => (v(), w(s(vs), H(G({ ...a, ...s(n) })), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bm = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return U(), (a, n) => (v(), w(s(ru), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wm = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return U(), (a, n) => (v(), w(s(um), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _m = /* @__PURE__ */ b({
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
    const a = t, n = Xt(e);
    return U(), (o, r) => (v(), w(s(Zv), H(G({ ...a, ...s(n) })), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uu = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return U(), (a, n) => (v(), w(s(Xv), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xm = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return U(), (a, n) => (v(), w(s(nm), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cm = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = Xt(e);
    return U(), (o, r) => (v(), w(s(lm), H(G({ ...a, ...s(n) })), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $m = /* @__PURE__ */ b({
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
    const a = ue(t, e);
    return U(), (n, o) => (v(), w(s(im), H(G(s(a))), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bm = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = we(a, "open", e, {
      passive: a.open === void 0,
      defaultValue: a.defaultOpen ?? !1
    });
    return U(), (o, r) => (v(), w(s(cm), {
      open: s(n),
      "onUpdate:open": r[0] || (r[0] = (l) => zt(n) ? n.value = l : null)
    }, {
      default: f(() => [
        _(o.$slots, "default", { open: s(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), km = /* @__PURE__ */ b({
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
    const a = ue(t, e);
    return U(), (n, o) => (v(), w(s(pm), S(s(a), { style: {
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
}), Dm = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return U(), (a, n) => (v(), w(s(fm), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sm = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(t) {
    const e = t;
    return U(), (a, n) => (v(), w(s(N), S(e, {
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
}), [Oa, Em] = pe("PaginationRoot"), Z_ = /* @__PURE__ */ b({
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
    const a = t, n = e, { siblingCount: o, disabled: r, showEdges: l } = he(a);
    U();
    const i = we(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), u = C(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return Em({
      page: i,
      onPageChange(c) {
        i.value = c;
      },
      pageCount: u,
      siblingCount: o,
      disabled: r,
      showEdges: l
    }), (c, d) => (v(), w(s(N), {
      as: c.as,
      "as-child": c.asChild
    }, {
      default: f(() => [
        _(c.$slots, "default", {
          page: s(i),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Pm = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return U(), (a, n) => (v(), w(s(N), S(e, { "data-type": "ellipsis" }), {
      default: f(() => [
        _(a.$slots, "default", {}, () => [
          Z("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), Om = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Oa();
    U();
    const n = C(() => a.page.value === 1 || a.disabled.value);
    return (o, r) => (v(), w(s(N), S(e, {
      "aria-label": "First Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (l) => !n.value && s(a).onPageChange(1))
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Z("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Am = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Oa();
    U();
    const n = C(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, r) => (v(), w(s(N), S(e, {
      "aria-label": "Last Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (l) => !n.value && s(a).onPageChange(s(a).pageCount.value))
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Z("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function Ot(t, e) {
  const a = e - t + 1;
  return Array.from({ length: a }, (n, o) => o + t);
}
function Mm(t) {
  return t.map((e) => typeof e == "number" ? { type: "page", value: e } : { type: "ellipsis" });
}
const xn = "ellipsis";
function Tm(t, e, a, n) {
  const o = e, r = Math.max(t - a, 1), l = Math.min(t + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, e) - 2, u = r > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(r - 1) > 2, c = l < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - l) > 2;
    if (!u && c)
      return [...Ot(1, i), xn, o];
    if (u && !c) {
      const d = Ot(o - i + 1, o);
      return [1, xn, ...d];
    }
    if (u && c) {
      const d = Ot(r, l);
      return [1, xn, ...d, xn, o];
    }
    return Ot(1, o);
  } else {
    const i = a * 2 + 1;
    return e < i ? Ot(1, o) : t <= a + 1 ? Ot(1, i) : e - t <= a ? Ot(e - i + 1, o) : Ot(r, l);
  }
}
const e1 = /* @__PURE__ */ b({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    U();
    const a = Oa(), n = C(() => Mm(
      Tm(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, r) => (v(), w(s(N), H(G(e)), {
      default: f(() => [
        _(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), t1 = /* @__PURE__ */ b({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    U();
    const a = Oa(), n = C(() => a.page.value === e.value), o = C(() => a.disabled.value);
    return (r, l) => (v(), w(s(N), S(e, {
      "data-type": "page",
      "aria-label": `Page ${r.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: o.value,
      type: r.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (i) => !o.value && s(a).onPageChange(r.value))
    }), {
      default: f(() => [
        _(r.$slots, "default", {}, () => [
          Z(se(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), Im = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    U();
    const a = Oa(), n = C(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, r) => (v(), w(s(N), S(e, {
      "aria-label": "Next Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (l) => !n.value && s(a).onPageChange(s(a).page.value + 1))
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Z("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Vm = /* @__PURE__ */ b({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    U();
    const a = Oa(), n = C(() => a.page.value === 1 || a.disabled.value);
    return (o, r) => (v(), w(s(N), S(e, {
      "aria-label": "Previous Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (l) => !n.value && s(a).onPageChange(s(a).page.value - 1))
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Z("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), [fn, Rm] = pe("PopoverRoot"), Fm = /* @__PURE__ */ b({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, { modal: o } = he(a), r = we(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), l = O(), i = O(!1);
    return Rm({
      contentId: "",
      modal: o,
      open: r,
      onOpenChange: (u) => {
        r.value = u;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerElement: l,
      hasCustomAnchor: i
    }), (u, c) => (v(), w(s(Ea), null, {
      default: f(() => [
        _(u.$slots, "default", { open: s(r) })
      ]),
      _: 3
    }));
  }
}), Lm = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = fn(), { forwardRef: n, currentElement: o } = U();
    return ce(() => {
      a.triggerElement.value = o.value;
    }), (r, l) => (v(), w(Ne(s(a).hasCustomAnchor.value ? s(N) : s(ho)), { "as-child": "" }, {
      default: f(() => [
        P(s(N), {
          ref: s(n),
          type: r.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(a).open.value ? "open" : "closed",
          as: r.as,
          "as-child": e.asChild,
          onClick: s(a).onOpenToggle
        }, {
          default: f(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Nm = /* @__PURE__ */ b({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(un), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), du = /* @__PURE__ */ b({
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
    const a = t, n = e, o = fe(a), { forwardRef: r } = U(), l = fn();
    return Xr(), (i, u) => (v(), w(s(mo), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: u[6] || (u[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: f(() => [
        P(s(Da), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (c) => n("pointerDownOutside", c)),
          onInteractOutside: u[1] || (u[1] = (c) => n("interactOutside", c)),
          onEscapeKeyDown: u[2] || (u[2] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: u[3] || (u[3] = (c) => n("focusOutside", c)),
          onDismiss: u[4] || (u[4] = (c) => s(l).onOpenChange(!1))
        }, {
          default: f(() => [
            P(s(_a), S(s(o), {
              id: s(l).contentId,
              ref: s(r),
              "data-state": s(l).open.value ? "open" : "closed",
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
}), zm = /* @__PURE__ */ b({
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
    const a = t, n = e, o = fn(), r = O(!1);
    rn(!0);
    const l = ue(a, n), { forwardRef: i, currentElement: u } = U();
    return ln(u), (c, d) => (v(), w(du, S(s(l), {
      ref: s(i),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: d[0] || (d[0] = $e(
        (p) => {
          var g;
          n("closeAutoFocus", p), r.value || (g = s(o).triggerElement.value) == null || g.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: d[1] || (d[1] = (p) => {
        n("pointerDownOutside", p);
        const g = p.detail.originalEvent, m = g.button === 0 && g.ctrlKey === !0, h = g.button === 2 || m;
        r.value = h;
      }),
      onFocusOutside: d[2] || (d[2] = $e(() => {
      }, ["prevent"]))
    }), {
      default: f(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Wm = /* @__PURE__ */ b({
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
    const a = t, n = e, o = fn(), r = O(!1), l = O(!1), i = ue(a, n);
    return (u, c) => (v(), w(du, S(s(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (d) => {
        var p;
        n("closeAutoFocus", d), d.defaultPrevented || (r.value || (p = s(o).triggerElement.value) == null || p.focus(), d.preventDefault()), r.value = !1, l.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = async (d) => {
        var p;
        n("interactOutside", d), d.defaultPrevented || (r.value = !0, d.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const g = d.target;
        (p = s(o).triggerElement.value) != null && p.contains(g) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && l.value && d.preventDefault();
      })
    }), {
      default: f(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Um = /* @__PURE__ */ b({
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
    const a = t, n = e, o = fn(), r = ue(a, n), { forwardRef: l } = U();
    return o.contentId || (o.contentId = ke(void 0, "radix-vue-popover-content")), (i, u) => (v(), w(s(Ke), {
      present: i.forceMount || s(o).open.value
    }, {
      default: f(() => [
        s(o).modal.value ? (v(), w(zm, S({ key: 0 }, s(r), { ref: s(l) }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), w(Wm, S({ key: 1 }, s(r), { ref: s(l) }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function Km(t) {
  const e = C(() => t.start.value ? !!t.isDateDisabled(t.start.value) : !1), a = C(() => t.end.value ? !!t.isDateDisabled(t.end.value) : !1), n = C(
    () => e.value || a.value ? !1 : !!(t.start.value && t.end.value && Rt(t.end.value, t.start.value))
  ), o = (u) => t.start.value ? Pe(t.start.value, u) : !1, r = (u) => t.end.value ? Pe(t.end.value, u) : !1, l = (u) => t.start.value && Pe(t.start.value, u) || t.end.value && Pe(t.end.value, u) ? !0 : t.end.value && t.start.value ? Sc(u, t.start.value, t.end.value) : !1, i = C(() => {
    if (t.start.value && t.end.value || !t.start.value || !t.focusedValue.value)
      return null;
    const u = Rt(t.start.value, t.focusedValue.value), c = u ? t.start.value : t.focusedValue.value, d = u ? t.focusedValue.value : t.start.value;
    return Pe(c, d) ? {
      start: c,
      end: d
    } : Oc(c, d, t.isDateUnavailable, t.isDateDisabled) ? {
      start: c,
      end: d
    } : null;
  });
  return {
    isInvalid: n,
    isSelected: l,
    highlightedRange: i,
    isSelectionStart: o,
    isSelectionEnd: r,
    isHighlightedStart: (u) => !i.value || !i.value.start ? !1 : Pe(i.value.start, u),
    isHighlightedEnd: (u) => !i.value || !i.value.end ? !1 : Pe(i.value.end, u)
  };
}
const Hm = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, jm = {
  role: "heading",
  "aria-level": "2"
}, [Aa, Gm] = pe("RangeCalendarRoot"), qm = /* @__PURE__ */ b({
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
      readonly: r,
      initialFocus: l,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: c,
      fixedWeeks: d,
      numberOfMonths: p,
      preventDeselect: g,
      isDateUnavailable: m,
      isDateDisabled: h,
      calendarLabel: y,
      maxValue: x,
      minValue: $,
      locale: k,
      dir: B,
      nextPage: E,
      prevPage: D
    } = he(a), { primitiveElement: I, currentElement: M } = ka(), K = pt(B), R = O(), A = O(), T = we(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), F = Bi({
      defaultPlaceholder: a.placeholder,
      defaultValue: T.value.start,
      locale: a.locale
    }), j = O(T.value.start), W = O(T.value.end), z = we(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? F.copy(),
      passive: a.placeholder === void 0
    });
    function Q(ge) {
      z.value = ge.copy();
    }
    const {
      fullCalendarLabel: ie,
      headingValue: ye,
      isDateDisabled: Y,
      isDateUnavailable: oe,
      isNextButtonDisabled: ve,
      isPrevButtonDisabled: Ve,
      grid: je,
      weekdays: Qe,
      isOutsideVisibleView: ot,
      nextPage: Pt,
      prevPage: J,
      formatter: te
    } = Gi({
      locale: k,
      placeholder: z,
      weekStartsOn: u,
      fixedWeeks: d,
      numberOfMonths: p,
      minValue: $,
      maxValue: x,
      disabled: o,
      weekdayFormat: c,
      pagedNavigation: i,
      isDateDisabled: h.value,
      isDateUnavailable: m.value,
      calendarLabel: y,
      nextPage: E,
      prevPage: D
    }), {
      isInvalid: le,
      isSelected: ee,
      highlightedRange: xe,
      isSelectionStart: Re,
      isSelectionEnd: Wt,
      isHighlightedStart: Ut,
      isHighlightedEnd: ud
    } = Km({
      start: j,
      end: W,
      isDateDisabled: Y,
      isDateUnavailable: oe,
      focusedValue: A
    });
    return X(T, (ge) => {
      var Ge, Fe, ko, Es;
      (!ge || !ge.start || j.value && !st(ge.start, j.value)) && (j.value = (Fe = (Ge = ge == null ? void 0 : ge.start) == null ? void 0 : Ge.copy) == null ? void 0 : Fe.call(Ge)), (!ge || !ge.end || W.value && !st(ge.end, W.value)) && (W.value = (Es = (ko = ge == null ? void 0 : ge.end) == null ? void 0 : ko.copy) == null ? void 0 : Es.call(ko));
    }), X(j, (ge) => {
      ge && !st(ge, z.value) && Q(ge), n("update:startValue", ge);
    }), X([j, W], ([ge, Ge]) => {
      const Fe = T.value;
      if (!(Fe && Fe.start && Fe.end && ge && Ge && st(Fe.start, ge) && st(Fe.end, Ge)))
        if (ge && Ge) {
          if (Fe.start && Fe.end && st(Fe.start, ge) && st(Fe.end, Ge))
            return;
          Rt(Ge, ge) ? T.value = {
            start: Ge.copy(),
            end: ge.copy()
          } : T.value = {
            start: ge.copy(),
            end: Ge.copy()
          };
        } else Fe.start && Fe.end && (T.value = {
          start: ge == null ? void 0 : ge.copy(),
          end: void 0
        });
    }), Gm({
      isDateUnavailable: oe,
      startValue: j,
      endValue: W,
      formatter: te,
      modelValue: T,
      placeholder: z,
      disabled: o,
      initialFocus: l,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: c,
      fixedWeeks: d,
      numberOfMonths: p,
      readonly: r,
      preventDeselect: g,
      fullCalendarLabel: ie,
      headingValue: ye,
      isInvalid: le,
      isDateDisabled: Y,
      highlightedRange: xe,
      focusedValue: A,
      lastPressedDateValue: R,
      isSelected: ee,
      isSelectionEnd: Wt,
      isSelectionStart: Re,
      isNextButtonDisabled: ve,
      isPrevButtonDisabled: Ve,
      isOutsideVisibleView: ot,
      nextPage: Pt,
      prevPage: J,
      parentElement: M,
      onPlaceholderChange: Q,
      locale: k,
      dir: K,
      isHighlightedStart: Ut,
      isHighlightedEnd: ud
    }), ce(() => {
      l.value && ki(M.value);
    }), (ge, Ge) => (v(), w(s(N), {
      ref_key: "primitiveElement",
      ref: I,
      as: ge.as,
      "as-child": ge.asChild,
      role: "application",
      "aria-label": s(ie),
      "data-readonly": s(r) ? "" : void 0,
      "data-disabled": s(o) ? "" : void 0,
      "data-invalid": s(le) ? "" : void 0,
      dir: s(K)
    }, {
      default: f(() => [
        me("div", Hm, [
          me("div", jm, se(s(ie)), 1)
        ]),
        _(ge.$slots, "default", {
          date: s(z),
          grid: s(je),
          weekDays: s(Qe),
          weekStartsOn: s(u),
          locale: s(k),
          fixedWeeks: s(d)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), Ym = /* @__PURE__ */ b({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jm = /* @__PURE__ */ b({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Aa();
    return (n, o) => (v(), w(s(N), S(e, {
      "data-disabled": s(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        _(n.$slots, "default", {
          headingValue: s(a).headingValue.value
        }, () => [
          Z(se(s(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Qm = /* @__PURE__ */ b({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(t) {
    const e = t, a = Aa(), n = C(() => a.disabled.value ? !0 : void 0), o = C(() => a.readonly.value ? !0 : void 0);
    return (r, l) => (v(), w(s(N), S(e, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Xm = /* @__PURE__ */ b({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(t) {
    const e = Aa();
    return (a, n) => {
      var o, r;
      return v(), w(s(N), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": s(e).isSelected(a.date) ? !0 : void 0,
        "aria-disabled": s(e).isDateDisabled(a.date) || ((r = (o = s(e)).isDateUnavailable) == null ? void 0 : r.call(o, a.date)),
        "data-disabled": s(e).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
          _(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Zm = /* @__PURE__ */ b({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eh = /* @__PURE__ */ b({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isNextButtonDisabled(e.step, e.nextPage)), n = Aa();
    return (o, r) => (v(), w(s(N), S(e, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (l) => s(n).nextPage(e.step, e.nextPage))
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Z("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), th = /* @__PURE__ */ b({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isPrevButtonDisabled(e.step, e.prevPage)), n = Aa();
    return (o, r) => (v(), w(s(N), S(e, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (l) => s(n).prevPage(e.step, e.prevPage))
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Z("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), ah = /* @__PURE__ */ b({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), S(e, { "aria-hidden": "true" }), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nh = /* @__PURE__ */ b({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oh = /* @__PURE__ */ b({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rh = /* @__PURE__ */ b({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Aa(), n = Ri(), { primitiveElement: o, currentElement: r } = ka(), l = C(() => a.formatter.custom(Ye(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = C(() => a.isDateDisabled(e.day)), u = C(() => {
      var R;
      return (R = a.isDateUnavailable) == null ? void 0 : R.call(a, e.day);
    }), c = C(() => a.isSelected(e.day)), d = C(() => a.isSelectionStart(e.day)), p = C(() => a.isSelectionEnd(e.day)), g = C(() => a.isHighlightedStart(e.day)), m = C(() => a.isHighlightedEnd(e.day)), h = C(() => a.highlightedRange.value ? Dc(e.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), y = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])", x = C(() => Nl(e.day, Ct())), $ = C(() => !Pr(e.day, e.month)), k = C(
      () => a.isOutsideVisibleView(e.day)
    ), B = C(() => e.day.day.toLocaleString(a.locale.value)), E = C(() => !a.disabled.value && Pe(e.day, a.placeholder.value));
    function D(R, A) {
      var T;
      if (!a.readonly.value && !(a.isDateDisabled(A) || (T = a.isDateUnavailable) != null && T.call(a, A))) {
        if (a.lastPressedDateValue.value = A.copy(), a.startValue.value && a.highlightedRange.value === null) {
          if (Pe(A, a.startValue.value) && !a.preventDeselect.value && !a.endValue.value) {
            a.startValue.value = void 0, a.onPlaceholderChange(A);
            return;
          } else if (!a.endValue.value) {
            R.preventDefault(), a.lastPressedDateValue.value && Pe(a.lastPressedDateValue.value, A) && (a.startValue.value = A.copy());
            return;
          }
        }
        if (a.startValue.value && a.endValue.value && Pe(a.endValue.value, A) && !a.preventDeselect.value) {
          a.startValue.value = void 0, a.endValue.value = void 0, a.onPlaceholderChange(A);
          return;
        }
        a.startValue.value ? a.endValue.value ? a.endValue.value && a.startValue.value && (a.endValue.value = void 0, a.startValue.value = A.copy()) : a.endValue.value = A.copy() : a.startValue.value = A.copy();
      }
    }
    function I(R) {
      D(R, e.day);
    }
    function M() {
      var R;
      a.isDateDisabled(e.day) || (R = a.isDateUnavailable) != null && R.call(a, e.day) || (a.focusedValue.value = e.day.copy());
    }
    function K(R) {
      R.preventDefault(), R.stopPropagation();
      const A = a.parentElement.value, T = A ? Array.from(A.querySelectorAll(y)) : [];
      let F = T.indexOf(r.value);
      const j = 7, W = a.dir.value === "rtl" ? -1 : 1;
      switch (R.code) {
        case n.ARROW_RIGHT:
          F += W;
          break;
        case n.ARROW_LEFT:
          F -= W;
          break;
        case n.ARROW_UP:
          F -= j;
          break;
        case n.ARROW_DOWN:
          F += j;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          D(R, e.day);
          return;
        default:
          return;
      }
      if (F >= 0 && F < T.length) {
        T[F].focus();
        return;
      }
      if (F < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), ae(() => {
          const z = A ? Array.from(A.querySelectorAll(y)) : [];
          if (!a.pagedNavigation.value) {
            const Q = $t(a.placeholder.value);
            z[Q - Math.abs(F)].focus();
            return;
          }
          z[z.length - Math.abs(F)].focus();
        });
        return;
      }
      if (F >= T.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), ae(() => {
          const z = A ? Array.from(A.querySelectorAll(y)) : [];
          if (!a.pagedNavigation.value) {
            const Q = $t(a.placeholder.value.add({ months: a.numberOfMonths.value - 1 }));
            z[z.length - Q + F - T.length].focus();
            return;
          }
          z[F - T.length].focus();
        });
      }
    }
    return (R, A) => (v(), w(s(N), S({
      ref_key: "primitiveElement",
      ref: o
    }, e, {
      role: "button",
      "aria-label": l.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": c.value ? !0 : void 0,
      "aria-disabled": i.value || u.value ? !0 : void 0,
      "data-highlighted": h.value ? "" : void 0,
      "data-selection-start": d.value ? !0 : void 0,
      "data-selection-end": p.value ? !0 : void 0,
      "data-highlighted-start": g.value ? !0 : void 0,
      "data-highlighted-end": m.value ? !0 : void 0,
      "data-selected": c.value ? !0 : void 0,
      "data-outside-visible-view": k.value ? "" : void 0,
      "data-value": R.day.toString(),
      "data-disabled": i.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": x.value ? "" : void 0,
      "data-outside-view": $.value ? "" : void 0,
      "data-focused": E.value ? "" : void 0,
      tabindex: E.value ? 0 : $.value || i.value ? void 0 : -1,
      onClick: I,
      onFocusin: M,
      onMouseenter: M,
      onKeydown: Me(K, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: f(() => [
        _(R.$slots, "default", { dayValue: B.value }, () => [
          Z(se(B.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-focused", "tabindex"]));
  }
}), sh = ["default-value"], lh = /* @__PURE__ */ b({
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
    const e = t, { value: a } = he(e), n = O();
    return (o, r) => (v(), w(s(cn), { "as-child": "" }, {
      default: f(() => [
        xa(me("select", S({
          ref_key: "selectElement",
          ref: n
        }, e, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => zt(a) ? a.value = l : null),
          "default-value": s(a)
        }), [
          _(o.$slots, "default")
        ], 16, sh), [
          [fd, s(a)]
        ])
      ]),
      _: 3
    }));
  }
}), ih = {
  key: 0,
  value: ""
}, [ea, cu] = pe("SelectRoot"), [uh, dh] = pe("SelectRoot"), ch = /* @__PURE__ */ b({
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
    const a = t, n = e, o = we(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), r = we(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), l = O(), i = O(), u = O({
      x: 0,
      y: 0
    }), c = O(!1), { required: d, disabled: p, dir: g } = he(a), m = pt(g);
    cu({
      triggerElement: l,
      onTriggerChange: ($) => {
        l.value = $;
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
      open: r,
      required: d,
      onOpenChange: ($) => {
        r.value = $;
      },
      dir: m,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const h = sn(l), y = O(/* @__PURE__ */ new Set()), x = C(() => Array.from(y.value).map(($) => {
      var k;
      return (k = $.props) == null ? void 0 : k.value;
    }).join(";"));
    return dh({
      onNativeOptionAdd: ($) => {
        y.value.add($);
      },
      onNativeOptionRemove: ($) => {
        y.value.delete($);
      }
    }), ($, k) => (v(), w(s(Ea), null, {
      default: f(() => [
        _($.$slots, "default", {
          modelValue: s(o),
          open: s(r)
        }),
        s(h) ? (v(), w(lh, S({ key: x.value }, $.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(d),
          name: $.name,
          autocomplete: $.autocomplete,
          disabled: s(p),
          value: s(o),
          onChange: k[0] || (k[0] = (B) => o.value = B.target.value)
        }), {
          default: f(() => [
            s(o) === void 0 ? (v(), L("option", ih)) : re("", !0),
            (v(!0), L(ne, null, be(Array.from(y.value), (B) => (v(), w(Ne(B), S({ ref_for: !0 }, B.props, {
              key: B.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : re("", !0)
      ]),
      _: 3
    }));
  }
}), ph = [" ", "Enter", "ArrowUp", "ArrowDown"], fh = [" ", "Enter"], et = 10;
function pu(t) {
  return t === "" || Tn(t);
}
const vh = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = ea(), n = C(() => {
      var m;
      return ((m = a.disabled) == null ? void 0 : m.value) || e.disabled;
    }), { forwardRef: o, currentElement: r } = U();
    a.contentId || (a.contentId = ke(void 0, "radix-vue-select-content")), ce(() => {
      a.triggerElement = r;
    });
    const { injectCollection: l } = Ba(), i = l(), { search: u, handleTypeaheadSearch: c, resetTypeahead: d } = Zr(i);
    function p() {
      n.value || (a.onOpenChange(!0), d());
    }
    function g(m) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, h) => (v(), w(s(ho), { "as-child": "" }, {
      default: f(() => {
        var y, x, $, k;
        return [
          P(s(N), {
            ref: s(o),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": s(a).contentId,
            "aria-expanded": s(a).open.value || !1,
            "aria-required": (y = s(a).required) == null ? void 0 : y.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (x = s(a)) == null ? void 0 : x.dir.value,
            "data-state": ($ = s(a)) != null && $.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": s(pu)((k = s(a).modelValue) == null ? void 0 : k.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: h[0] || (h[0] = (B) => {
              var E;
              (E = B == null ? void 0 : B.currentTarget) == null || E.focus();
            }),
            onPointerdown: h[1] || (h[1] = (B) => {
              if (B.pointerType === "touch")
                return B.preventDefault();
              const E = B.target;
              E.hasPointerCapture(B.pointerId) && E.releasePointerCapture(B.pointerId), B.button === 0 && B.ctrlKey === !1 && (g(B), B.preventDefault());
            }),
            onPointerup: h[2] || (h[2] = $e(
              (B) => {
                B.pointerType === "touch" && g(B);
              },
              ["prevent"]
            )),
            onKeydown: h[3] || (h[3] = (B) => {
              const E = s(u) !== "";
              !(B.ctrlKey || B.altKey || B.metaKey) && B.key.length === 1 && E && B.key === " " || (s(c)(B.key), s(ph).includes(B.key) && (p(), B.preventDefault()));
            })
          }, {
            default: f(() => [
              _(m.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), mh = /* @__PURE__ */ b({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(un), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ms, hh] = pe("SelectItemAlignedPosition"), gh = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, { injectCollection: o } = Ba(), r = ea(), l = ta(), i = o(), u = O(!1), c = O(!0), d = O(), { forwardRef: p, currentElement: g } = U(), { viewport: m, selectedItem: h, selectedItemText: y, focusSelectedItem: x } = l;
    function $() {
      if (r.triggerElement.value && r.valueElement.value && d.value && g.value && m != null && m.value && h != null && h.value && y != null && y.value) {
        const E = r.triggerElement.value.getBoundingClientRect(), D = g.value.getBoundingClientRect(), I = r.valueElement.value.getBoundingClientRect(), M = y.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const J = M.left - D.left, te = I.left - J, le = E.left - te, ee = E.width + le, xe = Math.max(ee, D.width), Re = window.innerWidth - et, Wt = qn(te, et, Math.max(et, Re - xe));
          d.value.style.minWidth = `${ee}px`, d.value.style.left = `${Wt}px`;
        } else {
          const J = D.right - M.right, te = window.innerWidth - I.right - J, le = window.innerWidth - E.right - te, ee = E.width + le, xe = Math.max(ee, D.width), Re = window.innerWidth - et, Wt = qn(
            te,
            et,
            Math.max(et, Re - xe)
          );
          d.value.style.minWidth = `${ee}px`, d.value.style.right = `${Wt}px`;
        }
        const K = i.value, R = window.innerHeight - et * 2, A = m.value.scrollHeight, T = window.getComputedStyle(g.value), F = Number.parseInt(
          T.borderTopWidth,
          10
        ), j = Number.parseInt(T.paddingTop, 10), W = Number.parseInt(
          T.borderBottomWidth,
          10
        ), z = Number.parseInt(
          T.paddingBottom,
          10
        ), Q = F + j + A + z + W, ie = Math.min(
          h.value.offsetHeight * 5,
          Q
        ), ye = window.getComputedStyle(m.value), Y = Number.parseInt(ye.paddingTop, 10), oe = Number.parseInt(
          ye.paddingBottom,
          10
        ), ve = E.top + E.height / 2 - et, Ve = R - ve, je = h.value.offsetHeight / 2, Qe = h.value.offsetTop + je, ot = F + j + Qe, Pt = Q - ot;
        if (ot <= ve) {
          const J = h.value === K[K.length - 1];
          d.value.style.bottom = "0px";
          const te = g.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, le = Math.max(
            Ve,
            je + (J ? oe : 0) + te + W
          ), ee = ot + le;
          d.value.style.height = `${ee}px`;
        } else {
          const J = h.value === K[0];
          d.value.style.top = "0px";
          const te = Math.max(
            ve,
            F + m.value.offsetTop + (J ? Y : 0) + je
          ) + Pt;
          d.value.style.height = `${te}px`, m.value.scrollTop = ot - ve + m.value.offsetTop;
        }
        d.value.style.margin = `${et}px 0`, d.value.style.minHeight = `${ie}px`, d.value.style.maxHeight = `${R}px`, n("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const k = O("");
    ce(async () => {
      await ae(), $(), g.value && (k.value = window.getComputedStyle(g.value).zIndex);
    });
    function B(E) {
      E && c.value === !0 && ($(), x == null || x(), c.value = !1);
    }
    return hh({
      contentWrapper: d,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: B
    }), (E, D) => (v(), L("div", {
      ref_key: "contentWrapperElement",
      ref: d,
      style: ut({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: k.value
      })
    }, [
      P(s(N), S({
        ref: s(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...E.$attrs, ...a }), {
        default: f(() => [
          _(E.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), yh = /* @__PURE__ */ b({
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
  setup(t) {
    const e = fe(t);
    return (a, n) => (v(), w(s(_a), S(s(e), { style: {
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
}), Ma = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [ta, bh] = pe("SelectContent"), wh = /* @__PURE__ */ b({
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
    const a = t, n = e, o = ea();
    Xr(), rn(a.bodyLock);
    const { createCollection: r } = Ba(), l = O();
    ln(l);
    const i = r(l), { search: u, handleTypeaheadSearch: c } = Zr(i), d = O(), p = O(), g = O(), m = O(!1), h = O(!1);
    function y() {
      p.value && l.value && ir([p.value, l.value]);
    }
    X(m, () => {
      y();
    });
    const { onOpenChange: x, triggerPointerDownPosRef: $ } = o;
    _e((D) => {
      if (!l.value)
        return;
      let I = { x: 0, y: 0 };
      const M = (R) => {
        var A, T;
        I = {
          x: Math.abs(
            Math.round(R.pageX) - (((A = $.value) == null ? void 0 : A.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(R.pageY) - (((T = $.value) == null ? void 0 : T.y) ?? 0)
          )
        };
      }, K = (R) => {
        var A;
        R.pointerType !== "touch" && (I.x <= 10 && I.y <= 10 ? R.preventDefault() : (A = l.value) != null && A.contains(R.target) || x(!1), document.removeEventListener("pointermove", M), $.value = null);
      };
      $.value !== null && (document.addEventListener("pointermove", M), document.addEventListener("pointerup", K, {
        capture: !0,
        once: !0
      })), D(() => {
        document.removeEventListener("pointermove", M), document.removeEventListener("pointerup", K, {
          capture: !0
        });
      });
    });
    function k(D) {
      const I = D.ctrlKey || D.altKey || D.metaKey;
      if (D.key === "Tab" && D.preventDefault(), !I && D.key.length === 1 && c(D.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(D.key)) {
        let M = i.value;
        if (["ArrowUp", "End"].includes(D.key) && (M = M.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(D.key)) {
          const K = D.target, R = M.indexOf(K);
          M = M.slice(R + 1);
        }
        setTimeout(() => ir(M)), D.preventDefault();
      }
    }
    const B = C(() => a.position === "popper" ? a : {}), E = fe(B.value);
    return bh({
      content: l,
      viewport: d,
      onViewportChange: (D) => {
        d.value = D;
      },
      itemRefCallback: (D, I, M) => {
        var K, R;
        const A = !h.value && !M;
        (((K = o.modelValue) == null ? void 0 : K.value) !== void 0 && ((R = o.modelValue) == null ? void 0 : R.value) === I || A) && (p.value = D, A && (h.value = !0));
      },
      selectedItem: p,
      selectedItemText: g,
      onItemLeave: () => {
        var D;
        (D = l.value) == null || D.focus();
      },
      itemTextRefCallback: (D, I, M) => {
        var K, R;
        const A = !h.value && !M;
        (((K = o.modelValue) == null ? void 0 : K.value) !== void 0 && ((R = o.modelValue) == null ? void 0 : R.value) === I || A) && (g.value = D);
      },
      focusSelectedItem: y,
      position: a.position,
      isPositioned: m,
      searchRef: u
    }), (D, I) => (v(), w(s(mo), {
      "as-child": "",
      onMountAutoFocus: I[6] || (I[6] = $e(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: I[7] || (I[7] = (M) => {
        var K;
        n("closeAutoFocus", M), !M.defaultPrevented && ((K = s(o).triggerElement.value) == null || K.focus({ preventScroll: !0 }), M.preventDefault());
      })
    }, {
      default: f(() => [
        P(s(Da), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: I[2] || (I[2] = $e(() => {
          }, ["prevent"])),
          onDismiss: I[3] || (I[3] = (M) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: I[4] || (I[4] = (M) => n("escapeKeyDown", M)),
          onPointerDownOutside: I[5] || (I[5] = (M) => n("pointerDownOutside", M))
        }, {
          default: f(() => [
            (v(), w(Ne(
              D.position === "popper" ? yh : gh
            ), S({ ...D.$attrs, ...s(E) }, {
              id: s(o).contentId,
              ref: (M) => {
                l.value = s(Je)(M);
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
              onContextmenu: I[0] || (I[0] = $e(() => {
              }, ["prevent"])),
              onPlaced: I[1] || (I[1] = (M) => m.value = !0),
              onKeydown: k
            }), {
              default: f(() => [
                _(D.$slots, "default")
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
}), _h = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(t) {
    return cu(t.context), (e, a) => _(e.$slots, "default");
  }
}), xh = { key: 1 }, Ch = /* @__PURE__ */ b({
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
    const a = t, n = ue(a, e), o = ea(), r = O();
    ce(() => {
      r.value = new DocumentFragment();
    });
    const l = O(), i = C(() => a.forceMount || o.open.value);
    return (u, c) => {
      var d;
      return i.value ? (v(), w(s(Ke), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: f(() => [
          P(wh, H(G({ ...s(n), ...u.$attrs })), {
            default: f(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((d = l.value) != null && d.present) && r.value ? (v(), L("div", xh, [
        (v(), w(en, { to: r.value }, [
          P(_h, { context: s(o) }, {
            default: f(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : re("", !0);
    };
  }
}), $h = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), S({ "aria-hidden": "true" }, e), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [fu, Bh] = pe("SelectItem"), kh = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { disabled: a } = he(e), n = ea(), o = ta(Ma), { forwardRef: r, currentElement: l } = U(), i = C(() => {
      var y;
      return ((y = n.modelValue) == null ? void 0 : y.value) === e.value;
    }), u = O(!1), c = O(e.textValue ?? ""), d = ke(void 0, "radix-vue-select-item-text");
    async function p(y) {
      await ae(), !(y != null && y.defaultPrevented) && (a.value || (n.onValueChange(e.value), n.onOpenChange(!1)));
    }
    async function g(y) {
      var x;
      await ae(), !y.defaultPrevented && (a.value ? (x = o.onItemLeave) == null || x.call(o) : y.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(y) {
      var x;
      await ae(), !y.defaultPrevented && y.currentTarget === De() && ((x = o.onItemLeave) == null || x.call(o));
    }
    async function h(y) {
      var x;
      await ae(), !(y.defaultPrevented || ((x = o.searchRef) == null ? void 0 : x.value) !== "" && y.key === " ") && (fh.includes(y.key) && p(), y.key === " " && y.preventDefault());
    }
    if (e.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ce(() => {
      l.value && o.itemRefCallback(
        l.value,
        e.value,
        e.disabled
      );
    }), Bh({
      value: e.value,
      disabled: a,
      textId: d,
      isSelected: i,
      onItemTextChange: (y) => {
        c.value = ((c.value || (y == null ? void 0 : y.textContent)) ?? "").trim();
      }
    }), (y, x) => (v(), w(s(N), {
      ref: s(r),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": s(d),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": s(a) || void 0,
      "data-disabled": s(a) ? "" : void 0,
      tabindex: s(a) ? void 0 : -1,
      as: y.as,
      "as-child": y.asChild,
      onFocus: x[0] || (x[0] = ($) => u.value = !0),
      onBlur: x[1] || (x[1] = ($) => u.value = !1),
      onPointerup: p,
      onPointerdown: x[2] || (x[2] = ($) => {
        $.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: x[3] || (x[3] = $e(() => {
      }, ["prevent", "stop"])),
      onPointermove: g,
      onPointerleave: m,
      onKeydown: h
    }, {
      default: f(() => [
        _(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Dh = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = fu();
    return (n, o) => s(a).isSelected.value ? (v(), w(s(N), S({
      key: 0,
      "aria-hidden": "true"
    }, e), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : re("", !0);
  }
}), [Sh, Eh] = pe("SelectGroup"), Ph = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = ke(void 0, "radix-vue-select-group");
    return Eh({ id: a }), (n, o) => (v(), w(s(N), S({ role: "group" }, e, { "aria-labelledby": s(a) }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Oh = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Sh({ id: "" });
    return (n, o) => (v(), w(s(N), S(e, {
      id: s(a).id
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), vu = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = ea(), n = ta(Ma), o = uh(), r = fu(), { forwardRef: l, currentElement: i } = U(), u = C(() => {
      var c;
      return Ie("option", {
        key: r.value,
        value: r.value,
        disabled: r.disabled.value,
        textContent: (c = i.value) == null ? void 0 : c.textContent
      });
    });
    return ce(() => {
      i.value && (r.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        r.value,
        r.disabled.value
      ), o.onNativeOptionAdd(u.value));
    }), no(() => {
      o.onNativeOptionRemove(u.value);
    }), (c, d) => (v(), L(ne, null, [
      P(s(N), S({
        id: s(r).textId,
        ref: s(l)
      }, { ...e, ...c.$attrs }, { "data-item-text": "" }), {
        default: f(() => [
          _(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(r).isSelected.value && s(a).valueElement.value && !s(a).valueElementHasChildren.value ? (v(), w(en, {
        key: 0,
        to: s(a).valueElement.value
      }, [
        _(c.$slots, "default")
      ], 8, ["to"])) : re("", !0)
    ], 64));
  }
}), Ah = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { nonce: a } = he(e), n = Av(a), o = ta(Ma), r = o.position === "item-aligned" ? ms() : void 0, { forwardRef: l, currentElement: i } = U();
    ce(() => {
      o == null || o.onViewportChange(i.value);
    });
    const u = O(0);
    function c(d) {
      const p = d.currentTarget, { shouldExpandOnScrollRef: g, contentWrapper: m } = r ?? {};
      if (g != null && g.value && m != null && m.value) {
        const h = Math.abs(u.value - p.scrollTop);
        if (h > 0) {
          const y = window.innerHeight - et * 2, x = Number.parseFloat(
            m.value.style.minHeight
          ), $ = Number.parseFloat(m.value.style.height), k = Math.max(x, $);
          if (k < y) {
            const B = k + h, E = Math.min(y, B), D = B - E;
            m.value.style.height = `${E}px`, m.value.style.bottom === "0px" && (p.scrollTop = D > 0 ? D : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (d, p) => (v(), L(ne, null, [
      P(s(N), S({
        ref: s(l),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...d.$attrs, ...e }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "hidden auto"
        },
        onScroll: c
      }), {
        default: f(() => [
          _(d.$slots, "default")
        ]),
        _: 3
      }, 16),
      P(s(N), {
        as: "style",
        nonce: s(n)
      }, {
        default: f(() => [
          Z(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), mu = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(t, { emit: e }) {
    const a = e, { injectCollection: n } = Ba(), o = n(), r = ta(Ma), l = O(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    _e(() => {
      const d = o.value.find(
        (p) => p === De()
      );
      d == null || d.scrollIntoView({ block: "nearest" });
    });
    function u() {
      l.value === null && (l.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    function c() {
      var d;
      (d = r.onItemLeave) == null || d.call(r), l.value === null && (l.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    return no(() => i()), (d, p) => {
      var g;
      return v(), w(s(N), S({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (g = d.$parent) == null ? void 0 : g.$props, {
        onPointerdown: u,
        onPointermove: c,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: f(() => [
          _(d.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Mh = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = ta(Ma), a = e.position === "item-aligned" ? ms() : void 0, { forwardRef: n, currentElement: o } = U(), r = O(!1);
    return _e((l) => {
      var i, u;
      if ((i = e.viewport) != null && i.value && (u = e.isPositioned) != null && u.value) {
        let c = function() {
          r.value = d.scrollTop > 0;
        };
        const d = e.viewport.value;
        c(), d.addEventListener("scroll", c), l(() => d.removeEventListener("scroll", c));
      }
    }), X(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (l, i) => r.value ? (v(), w(mu, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: c } = s(e);
        u != null && u.value && c != null && c.value && (u.value.scrollTop = u.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : re("", !0);
  }
}), Th = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = ta(Ma), a = e.position === "item-aligned" ? ms() : void 0, { forwardRef: n, currentElement: o } = U(), r = O(!1);
    return _e((l) => {
      var i, u;
      if ((i = e.viewport) != null && i.value && (u = e.isPositioned) != null && u.value) {
        let c = function() {
          const p = d.scrollHeight - d.clientHeight;
          r.value = Math.ceil(d.scrollTop) < p;
        };
        const d = e.viewport.value;
        c(), d.addEventListener("scroll", c), l(() => d.removeEventListener("scroll", c));
      }
    }), X(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (l, i) => r.value ? (v(), w(mu, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: c } = s(e);
        u != null && u.value && c != null && c.value && (u.value.scrollTop = u.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : re("", !0);
  }
}), Ih = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e, currentElement: a } = U(), n = ea(), o = Ol();
    return cd(() => {
      var r;
      const l = !!po((r = o == null ? void 0 : o.default) == null ? void 0 : r.call(o)).length;
      n.onValueElementHasChildrenChange(l);
    }), ce(() => {
      n.valueElement = a;
    }), (r, l) => (v(), w(s(N), {
      ref: s(e),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: f(() => {
        var i;
        return [
          s(pu)((i = s(n).modelValue) == null ? void 0 : i.value) ? (v(), L(ne, { key: 0 }, [
            Z(se(r.placeholder), 1)
          ], 64)) : _(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Vh = /* @__PURE__ */ b({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return (e, a) => (v(), w(s(N), {
      "aria-hidden": "true",
      as: e.as,
      "as-child": e.asChild
    }, {
      default: f(() => [
        _(e.$slots, "default", {}, () => [
          Z("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Rh = /* @__PURE__ */ b({
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
    const o = C(
      () => n(e.orientation) ? e.orientation : "horizontal"
    ), r = C(
      () => o.value === "vertical" ? e.orientation : void 0
    ), l = C(
      () => e.decorative ? { role: "none" } : { "aria-orientation": r.value, role: "separator" }
    );
    return (i, u) => (v(), w(s(N), S({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": o.value
    }, l.value), {
      default: f(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), Fh = /* @__PURE__ */ b({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(Rh, H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Lh(t = [], e, a) {
  const n = [...t];
  return n[a] = e, n.sort((o, r) => o - r);
}
function hu(t, e, a) {
  const n = 100 / (a - e) * (t - e);
  return qn(n, 0, 100);
}
function Nh(t, e) {
  return e > 2 ? `Value ${t + 1} of ${e}` : e === 2 ? ["Minimum", "Maximum"][t] : void 0;
}
function zh(t, e) {
  if (t.length === 1)
    return 0;
  const a = t.map((o) => Math.abs(o - e)), n = Math.min(...a);
  return a.indexOf(n);
}
function Wh(t, e, a) {
  const n = t / 2, o = hs([0, 50], [0, n]);
  return (n - o(e) * a) * a;
}
function Uh(t) {
  return t.slice(0, -1).map((e, a) => t[a + 1] - e);
}
function Kh(t, e) {
  if (e > 0) {
    const a = Uh(t);
    return Math.min(...a) >= e;
  }
  return !0;
}
function hs(t, e) {
  return (a) => {
    if (t[0] === t[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (t[1] - t[0]);
    return e[0] + n * (a - t[0]);
  };
}
function Hh(t) {
  return (String(t).split(".")[1] || "").length;
}
function jh(t, e) {
  const a = 10 ** e;
  return Math.round(t * a) / a;
}
const gu = ["PageUp", "PageDown"], yu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], bu = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [wu, _u] = pe(["SliderVertical", "SliderHorizontal"]), xu = /* @__PURE__ */ b({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = yo();
    return (r, l) => (v(), w(s(N), S({ "data-slider-impl": "" }, a, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : s(gu).concat(s(yu)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: l[1] || (l[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), s(o).thumbElements.value.includes(u) ? u.focus() : n("slideStart", i);
      }),
      onPointermove: l[2] || (l[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && n("slideMove", i);
      }),
      onPointerup: l[3] || (l[3] = (i) => {
        const u = i.target;
        u.hasPointerCapture(i.pointerId) && (u.releasePointerCapture(i.pointerId), n("slideEnd", i));
      })
    }), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gh = /* @__PURE__ */ b({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, { max: o, min: r, dir: l, inverted: i } = he(a), { forwardRef: u, currentElement: c } = U(), d = O(), p = C(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function g(m) {
      const h = d.value || c.value.getBoundingClientRect(), y = [0, h.width], x = p.value ? [r.value, o.value] : [o.value, r.value], $ = hs(y, x);
      return d.value = h, $(m - h.left);
    }
    return _u({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, h) => (v(), w(xu, {
      ref: s(u),
      dir: s(l),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: h[0] || (h[0] = (y) => {
        const x = g(y.clientX);
        n("slideStart", x);
      }),
      onSlideMove: h[1] || (h[1] = (y) => {
        const x = g(y.clientX);
        n("slideMove", x);
      }),
      onSlideEnd: h[2] || (h[2] = () => {
        d.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: h[3] || (h[3] = (y) => {
        const x = p.value ? "from-left" : "from-right", $ = s(bu)[x].includes(y.key);
        n("stepKeyDown", y, $ ? -1 : 1);
      }),
      onEndKeyDown: h[4] || (h[4] = (y) => n("endKeyDown", y)),
      onHomeKeyDown: h[5] || (h[5] = (y) => n("homeKeyDown", y))
    }, {
      default: f(() => [
        _(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), qh = /* @__PURE__ */ b({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, { max: o, min: r, inverted: l } = he(a), { forwardRef: i, currentElement: u } = U(), c = O(), d = C(() => !l.value);
    function p(g) {
      const m = c.value || u.value.getBoundingClientRect(), h = [0, m.height], y = d.value ? [o.value, r.value] : [r.value, o.value], x = hs(h, y);
      return c.value = m, x(g - m.top);
    }
    return _u({
      startEdge: d.value ? "bottom" : "top",
      endEdge: d.value ? "top" : "bottom",
      size: "height",
      direction: d.value ? 1 : -1
    }), (g, m) => (v(), w(xu, {
      ref: s(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: m[0] || (m[0] = (h) => {
        const y = p(h.clientY);
        n("slideStart", y);
      }),
      onSlideMove: m[1] || (m[1] = (h) => {
        const y = p(h.clientY);
        n("slideMove", y);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (h) => {
        const y = d.value ? "from-bottom" : "from-top", x = s(bu)[y].includes(h.key);
        n("stepKeyDown", h, x ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (h) => n("endKeyDown", h)),
      onHomeKeyDown: m[5] || (m[5] = (h) => n("homeKeyDown", h))
    }, {
      default: f(() => [
        _(g.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), Yh = ["value", "name", "disabled", "step"], [yo, Jh] = pe("SliderRoot"), Qh = /* @__PURE__ */ b({
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
    const a = t, n = e, { min: o, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: c, dir: d } = he(a), p = pt(d), { forwardRef: g, currentElement: m } = U(), h = sn(m);
    us();
    const y = we(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), x = O(0), $ = O(y.value);
    function k(M) {
      const K = zh(y.value, M);
      D(M, K);
    }
    function B(M) {
      D(M, x.value);
    }
    function E() {
      const M = $.value[x.value];
      y.value[x.value] !== M && n("valueCommit", hd(y.value));
    }
    function D(M, K, { commit: R } = { commit: !1 }) {
      var A;
      const T = Hh(l.value), F = jh(Math.round((M - o.value) / l.value) * l.value + o.value, T), j = qn(F, o.value, r.value), W = Lh(y.value, j, K);
      if (Kh(W, i.value * l.value)) {
        x.value = W.indexOf(j);
        const z = String(W) !== String(y.value);
        z && R && n("valueCommit", W), z && ((A = I.value[x.value]) == null || A.focus(), y.value = W);
      }
    }
    const I = O([]);
    return Jh({
      modelValue: y,
      valueIndexToChangeRef: x,
      thumbElements: I,
      orientation: u,
      min: o,
      max: r,
      disabled: c
    }), (M, K) => (v(), L(ne, null, [
      P(s(ds), null, {
        default: f(() => [
          (v(), w(Ne(s(u) === "horizontal" ? Gh : qh), S(M.$attrs, {
            ref: s(g),
            "as-child": M.asChild,
            as: M.as,
            min: s(o),
            max: s(r),
            dir: s(p),
            inverted: M.inverted,
            "aria-disabled": s(c),
            "data-disabled": s(c) ? "" : void 0,
            onPointerdown: K[0] || (K[0] = () => {
              s(c) || ($.value = s(y));
            }),
            onSlideStart: K[1] || (K[1] = (R) => !s(c) && k(R)),
            onSlideMove: K[2] || (K[2] = (R) => !s(c) && B(R)),
            onSlideEnd: K[3] || (K[3] = (R) => !s(c) && E()),
            onHomeKeyDown: K[4] || (K[4] = (R) => !s(c) && D(s(o), 0, { commit: !0 })),
            onEndKeyDown: K[5] || (K[5] = (R) => !s(c) && D(s(r), s(y).length - 1, { commit: !0 })),
            onStepKeyDown: K[6] || (K[6] = (R, A) => {
              if (!s(c)) {
                const T = s(gu).includes(R.key) || R.shiftKey && s(yu).includes(R.key) ? 10 : 1, F = x.value, j = s(y)[F], W = s(l) * T * A;
                D(j + W, F, { commit: !0 });
              }
            })
          }), {
            default: f(() => [
              _(M.$slots, "default", { modelValue: s(y) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      s(h) ? (v(!0), L(ne, { key: 0 }, be(s(y), (R, A) => (v(), L("input", {
        key: A,
        value: R,
        type: "number",
        style: { display: "none" },
        name: M.name ? M.name + (s(y).length > 1 ? "[]" : "") : void 0,
        disabled: s(c),
        step: s(l)
      }, null, 8, Yh))), 128)) : re("", !0)
    ], 64));
  }
}), Xh = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = yo(), n = wu(), { forwardRef: o, currentElement: r } = U(), l = C(() => {
      var m, h;
      return (h = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : h[e.index];
    }), i = C(() => l.value === void 0 ? 0 : hu(l.value, a.min.value ?? 0, a.max.value ?? 100)), u = C(() => {
      var m, h;
      return Nh(e.index, ((h = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : h.length) ?? 0);
    }), c = Vi(r), d = C(() => c[n.size].value), p = C(() => d.value ? Wh(d.value, i.value, n.direction) : 0), g = Qr();
    return ce(() => {
      a.thumbElements.value.push(r.value);
    }), ze(() => {
      const m = a.thumbElements.value.findIndex((h) => h === r.value) ?? -1;
      a.thumbElements.value.splice(m, 1);
    }), (m, h) => (v(), w(s(go), null, {
      default: f(() => [
        P(s(N), S(m.$attrs, {
          ref: s(o),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: s(a).disabled.value ? void 0 : 0,
          "aria-label": m.$attrs["aria-label"] || u.value,
          "data-disabled": s(a).disabled.value ? "" : void 0,
          "data-orientation": s(a).orientation.value,
          "aria-valuenow": l.value,
          "aria-valuemin": s(a).min.value,
          "aria-valuemax": s(a).max.value,
          "aria-orientation": s(a).orientation.value,
          "as-child": m.asChild,
          as: m.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [s(n).startEdge]: `calc(${i.value}% + ${p.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !s(g) && l.value === void 0 ? "none" : void 0
          },
          onFocus: h[0] || (h[0] = () => {
            s(a).valueIndexToChangeRef.value = m.index;
          })
        }), {
          default: f(() => [
            _(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), Zh = /* @__PURE__ */ b({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { getItems: a } = cs(), { forwardRef: n, currentElement: o } = U(), r = C(() => o.value ? a().findIndex((l) => l.ref === o.value) : -1);
    return (l, i) => (v(), w(Xh, S({ ref: s(n) }, e, { index: r.value }), {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), eg = /* @__PURE__ */ b({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = yo();
    return U(), (a, n) => (v(), w(s(N), {
      "as-child": a.asChild,
      as: a.as,
      "data-disabled": s(e).disabled.value ? "" : void 0,
      "data-orientation": s(e).orientation.value
    }, {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), tg = /* @__PURE__ */ b({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = yo(), a = wu();
    U();
    const n = C(() => {
      var l, i;
      return (i = (l = e.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => hu(u, e.min.value, e.max.value)
      );
    }), o = C(() => e.modelValue.value.length > 1 ? Math.min(...n.value) : 0), r = C(() => 100 - Math.max(...n.value));
    return (l, i) => (v(), w(s(N), {
      "data-disabled": s(e).disabled.value ? "" : void 0,
      "data-orientation": s(e).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: ut({
        [s(a).startEdge]: `${o.value}%`,
        [s(a).endEdge]: `${r.value}%`
      })
    }, {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function ag() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
ag();
const ng = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [og, rg] = pe("SwitchRoot"), sg = /* @__PURE__ */ b({
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
    const a = t, n = e, { disabled: o } = he(a), r = we(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    });
    function l() {
      o.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = U(), c = sn(u), d = C(() => {
      var p;
      return a.id && u.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return rg({
      checked: r,
      toggleCheck: l,
      disabled: o
    }), (p, g) => (v(), L(ne, null, [
      P(s(N), S(p.$attrs, {
        id: p.id,
        ref: s(i),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || d.value,
        "aria-checked": s(r),
        "aria-required": p.required,
        "data-state": s(r) ? "checked" : "unchecked",
        "data-disabled": s(o) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        disabled: s(o),
        onClick: l,
        onKeydown: Me($e(l, ["prevent"]), ["enter"])
      }), {
        default: f(() => [
          _(p.$slots, "default", { checked: s(r) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(c) ? (v(), L("input", {
        key: 0,
        type: "checkbox",
        name: p.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: s(o),
        required: p.required,
        value: p.value,
        checked: !!s(r),
        "data-state": s(r) ? "checked" : "unchecked",
        "data-disabled": s(o) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, ng)) : re("", !0)
    ], 64));
  }
}), lg = /* @__PURE__ */ b({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = og();
    return U(), (a, n) => {
      var o;
      return v(), w(s(N), {
        "data-state": (o = s(e).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": s(e).disabled.value ? "" : void 0,
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
}), [gs, ig] = pe("TabsRoot"), ug = /* @__PURE__ */ b({
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
    const a = t, n = e, { orientation: o, dir: r } = he(a), l = pt(r);
    U();
    const i = we(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), u = O();
    return ig({
      modelValue: i,
      changeModelValue: (c) => {
        i.value = c;
      },
      orientation: o,
      dir: l,
      activationMode: a.activationMode,
      baseId: ke(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (c, d) => (v(), w(s(N), {
      dir: s(l),
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
}), dg = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { loop: a } = he(e), { forwardRef: n, currentElement: o } = U(), r = gs();
    return r.tabsList = o, (l, i) => (v(), w(s(au), {
      "as-child": "",
      orientation: s(r).orientation.value,
      dir: s(r).dir.value,
      loop: s(a)
    }, {
      default: f(() => [
        P(s(N), {
          ref: s(n),
          role: "tablist",
          "as-child": l.asChild,
          as: l.as,
          "aria-orientation": s(r).orientation.value
        }, {
          default: f(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function Cu(t, e) {
  return `${t}-trigger-${e}`;
}
function $u(t, e) {
  return `${t}-content-${e}`;
}
const cg = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a } = U(), n = gs(), o = C(() => Cu(n.baseId, e.value)), r = C(() => $u(n.baseId, e.value)), l = C(() => e.value === n.modelValue.value), i = O(l.value);
    return ce(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, c) => (v(), w(s(Ke), {
      present: l.value,
      "force-mount": ""
    }, {
      default: f(({ present: d }) => [
        P(s(N), {
          id: r.value,
          ref: s(a),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": l.value ? "active" : "inactive",
          "data-orientation": s(n).orientation.value,
          "aria-labelledby": o.value,
          hidden: !d.value,
          tabindex: "0",
          style: ut({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: f(() => [
            u.forceMount || l.value ? _(u.$slots, "default", { key: 0 }) : re("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), pg = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, { forwardRef: a } = U(), n = gs(), o = C(() => Cu(n.baseId, e.value)), r = C(() => $u(n.baseId, e.value)), l = C(() => e.value === n.modelValue.value);
    return (i, u) => (v(), w(s(Yv), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: f(() => [
        P(s(N), {
          id: o.value,
          ref: s(a),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": l.value ? "true" : "false",
          "aria-controls": r.value,
          "data-state": l.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": s(n).orientation.value,
          onMousedown: u[0] || (u[0] = $e((c) => {
            !i.disabled && c.ctrlKey === !1 ? s(n).changeModelValue(i.value) : c.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = Me((c) => s(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const c = s(n).activationMode !== "manual";
            !l.value && !i.disabled && c && s(n).changeModelValue(i.value);
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
}), [bo, fg] = pe("ToastProvider"), vg = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(t) {
    const e = t, { label: a, duration: n, swipeDirection: o, swipeThreshold: r } = he(e), l = O(), i = O(0), u = O(!1), c = O(!1);
    if (e.label && typeof e.label == "string" && !e.label.trim()) {
      const d = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(d);
    }
    return fg({
      label: a,
      duration: n,
      swipeDirection: o,
      swipeThreshold: r,
      toastCount: i,
      viewport: l,
      onViewportChange(d) {
        l.value = d;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: c
    }), (d, p) => _(d.$slots, "default");
  }
}), mg = "toast.swipeStart", hg = "toast.swipeMove", gg = "toast.swipeCancel", yg = "toast.swipeEnd", dr = "toast.viewportPause", cr = "toast.viewportResume";
function Cn(t, e, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
function pl(t, e, a = 0) {
  const n = Math.abs(t.x), o = Math.abs(t.y), r = n > o;
  return e === "left" || e === "right" ? r && n > a : !r && o > a;
}
function bg(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
function Bu(t) {
  const e = [];
  return Array.from(t.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && e.push(a.textContent), bg(a)) {
      const n = a.ariaHidden || a.hidden || a.style.display === "none", o = a.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const r = a.dataset.radixToastAnnounceAlt;
          r && e.push(r);
        } else
          e.push(...Bu(a));
    }
  }), e;
}
const wg = /* @__PURE__ */ b({
  __name: "ToastAnnounce",
  setup(t) {
    const e = bo(), a = Ep(1e3), n = O(!1);
    return Pi(() => {
      n.value = !0;
    }), (o, r) => s(a) || n.value ? (v(), w(s(cn), { key: 0 }, {
      default: f(() => [
        Z(se(s(e).label.value) + " ", 1),
        _(o.$slots, "default")
      ]),
      _: 3
    })) : re("", !0);
  }
}), [_g, xg] = pe("ToastRoot"), Cg = /* @__PURE__ */ b({
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
    const a = t, n = e, { forwardRef: o, currentElement: r } = U(), l = bo(), i = O(null), u = O(null), c = C(
      () => typeof a.duration == "number" ? a.duration : l.duration.value
    ), d = O(0), p = O(c.value), g = O(0), m = O(c.value), h = Pi(() => {
      const k = (/* @__PURE__ */ new Date()).getTime() - d.value;
      m.value = Math.max(p.value - k, 0);
    }, { fpsLimit: 60 });
    function y(k) {
      k <= 0 || k === Number.POSITIVE_INFINITY || ct && (window.clearTimeout(g.value), d.value = (/* @__PURE__ */ new Date()).getTime(), g.value = window.setTimeout(x, k));
    }
    function x() {
      var k, B;
      (k = r.value) != null && k.contains(De()) && ((B = l.viewport.value) == null || B.focus()), l.isClosePausedRef.value = !1, n("close");
    }
    const $ = C(() => r.value ? Bu(r.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const k = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(k);
    }
    return _e((k) => {
      const B = l.viewport.value;
      if (B) {
        const E = () => {
          y(p.value), h.resume(), n("resume");
        }, D = () => {
          const I = (/* @__PURE__ */ new Date()).getTime() - d.value;
          p.value = p.value - I, window.clearTimeout(g.value), h.pause(), n("pause");
        };
        return B.addEventListener(dr, D), B.addEventListener(cr, E), () => {
          B.removeEventListener(dr, D), B.removeEventListener(cr, E);
        };
      }
    }), X(() => [a.open, c.value], () => {
      p.value = c.value, a.open && !l.isClosePausedRef.value && y(c.value);
    }, { immediate: !0 }), Jr("Escape", (k) => {
      n("escapeKeyDown", k), k.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, x());
    }), ce(() => {
      l.onToastAdd();
    }), ze(() => {
      l.onToastRemove();
    }), xg({ onClose: x }), (k, B) => (v(), L(ne, null, [
      $.value ? (v(), w(wg, {
        key: 0,
        role: "alert",
        "aria-live": k.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: f(() => [
          Z(se($.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : re("", !0),
      s(l).viewport.value ? (v(), w(en, {
        key: 1,
        to: s(l).viewport.value
      }, [
        P(s(N), S({
          ref: s(o),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, k.$attrs, {
          as: k.as,
          "as-child": k.asChild,
          "data-state": k.open ? "open" : "closed",
          "data-swipe-direction": s(l).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: B[0] || (B[0] = $e((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: B[1] || (B[1] = (E) => {
            if (!i.value) return;
            const D = E.clientX - i.value.x, I = E.clientY - i.value.y, M = !!u.value, K = ["left", "right"].includes(s(l).swipeDirection.value), R = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, A = K ? R(0, D) : 0, T = K ? 0 : R(0, I), F = E.pointerType === "touch" ? 10 : 2, j = { x: A, y: T }, W = { originalEvent: E, delta: j };
            M ? (u.value = j, s(Cn)(s(hg), (z) => n("swipeMove", z), W)) : s(pl)(j, s(l).swipeDirection.value, F) ? (u.value = j, s(Cn)(s(mg), (z) => n("swipeStart", z), W), E.target.setPointerCapture(E.pointerId)) : (Math.abs(D) > F || Math.abs(I) > F) && (i.value = null);
          }),
          onPointerup: B[2] || (B[2] = (E) => {
            const D = u.value, I = E.target;
            if (I.hasPointerCapture(E.pointerId) && I.releasePointerCapture(E.pointerId), u.value = null, i.value = null, D) {
              const M = E.currentTarget, K = { originalEvent: E, delta: D };
              s(pl)(D, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(Cn)(s(yg), (R) => n("swipeEnd", R), K) : s(Cn)(s(gg), (R) => n("swipeCancel", R), K), M == null || M.addEventListener("click", (R) => R.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: f(() => [
            _(k.$slots, "default", {
              remaining: m.value,
              duration: c.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : re("", !0)
    ], 64));
  }
}), $g = /* @__PURE__ */ b({
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
    const a = t, n = e, { forwardRef: o } = U(), r = we(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    return (l, i) => (v(), w(s(Ke), {
      present: l.forceMount || s(r)
    }, {
      default: f(() => [
        P(Cg, S({
          ref: s(o),
          open: s(r),
          type: l.type,
          as: l.as,
          "as-child": l.asChild,
          duration: l.duration
        }, l.$attrs, {
          onClose: i[0] || (i[0] = (u) => r.value = !1),
          onPause: i[1] || (i[1] = (u) => n("pause")),
          onResume: i[2] || (i[2] = (u) => n("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => n("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            n("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (u) => {
            const { x: c, y: d } = u.detail.delta, p = u.currentTarget;
            p.setAttribute("data-swipe", "move"), p.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), p.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const c = u.currentTarget;
            c.setAttribute("data-swipe", "cancel"), c.style.removeProperty("--radix-toast-swipe-move-x"), c.style.removeProperty("--radix-toast-swipe-move-y"), c.style.removeProperty("--radix-toast-swipe-end-x"), c.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: c, y: d } = u.detail.delta, p = u.currentTarget;
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), r.value = !1;
          })
        }), {
          default: f(({ remaining: u, duration: c }) => [
            _(l.$slots, "default", {
              remaining: u,
              duration: c,
              open: s(r)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ku = /* @__PURE__ */ b({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    return (e, a) => (v(), w(s(N), {
      as: e.as,
      "as-child": e.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": e.altText || void 0
    }, {
      default: f(() => [
        _(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), Du = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = _g(), { forwardRef: n } = U();
    return (o, r) => (v(), w(ku, { "as-child": "" }, {
      default: f(() => [
        P(s(N), S(e, {
          ref: s(n),
          type: o.as === "button" ? "button" : void 0,
          onClick: r[0] || (r[0] = (l) => s(a).onClose())
        }), {
          default: f(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), Bg = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    if (!t.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: e } = U();
    return (a, n) => a.altText ? (v(), w(ku, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: f(() => [
        P(Du, {
          ref: s(e),
          as: a.as,
          "as-child": a.asChild
        }, {
          default: f(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : re("", !0);
  }
}), fl = /* @__PURE__ */ b({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(t, { emit: e }) {
    const a = e, n = bo();
    return (o, r) => (v(), w(s(cn), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: r[0] || (r[0] = (l) => {
        var i;
        const u = l.relatedTarget;
        !((i = s(n).viewport.value) != null && i.contains(u)) && a("focusFromOutsideViewport");
      })
    }, {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), kg = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(t) {
    const e = t, { hotkey: a, label: n } = he(e), { forwardRef: o, currentElement: r } = U(), { createCollection: l } = Ba(), i = l(r), u = bo(), c = C(() => u.toastCount.value > 0), d = O(), p = O(), g = C(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Jr(a.value, () => {
      r.value.focus();
    }), ce(() => {
      u.onViewportChange(r.value);
    }), _e((h) => {
      const y = r.value;
      if (c.value && y) {
        const x = () => {
          if (!u.isClosePausedRef.value) {
            const D = new CustomEvent(dr);
            y.dispatchEvent(D), u.isClosePausedRef.value = !0;
          }
        }, $ = () => {
          if (u.isClosePausedRef.value) {
            const D = new CustomEvent(cr);
            y.dispatchEvent(D), u.isClosePausedRef.value = !1;
          }
        }, k = (D) => {
          !y.contains(D.relatedTarget) && $();
        }, B = () => {
          y.contains(De()) || $();
        }, E = (D) => {
          var I, M, K;
          const R = D.altKey || D.ctrlKey || D.metaKey;
          if (D.key === "Tab" && !R) {
            const A = De(), T = D.shiftKey;
            if (D.target === y && T) {
              (I = d.value) == null || I.focus();
              return;
            }
            const F = m({ tabbingDirection: T ? "backwards" : "forwards" }), j = F.findIndex((W) => W === A);
            In(F.slice(j + 1)) ? D.preventDefault() : T ? (M = d.value) == null || M.focus() : (K = p.value) == null || K.focus();
          }
        };
        y.addEventListener("focusin", x), y.addEventListener("focusout", k), y.addEventListener("pointermove", x), y.addEventListener("pointerleave", B), y.addEventListener("keydown", E), window.addEventListener("blur", x), window.addEventListener("focus", $), h(() => {
          y.removeEventListener("focusin", x), y.removeEventListener("focusout", k), y.removeEventListener("pointermove", x), y.removeEventListener("pointerleave", B), y.removeEventListener("keydown", E), window.removeEventListener("blur", x), window.removeEventListener("focus", $);
        });
      }
    });
    function m({ tabbingDirection: h }) {
      const y = i.value.map((x) => {
        const $ = [x, ...ns(x)];
        return h === "forwards" ? $ : $.reverse();
      });
      return (h === "forwards" ? y.reverse() : y).flat();
    }
    return (h, y) => (v(), w(s(Bf), {
      role: "region",
      "aria-label": typeof s(n) == "string" ? s(n).replace("{hotkey}", g.value) : s(n)(g.value),
      tabindex: "-1",
      style: ut({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: f(() => [
        c.value ? (v(), w(fl, {
          key: 0,
          ref: (x) => {
            d.value = s(Je)(x);
          },
          onFocusFromOutsideViewport: y[0] || (y[0] = () => {
            const x = m({
              tabbingDirection: "forwards"
            });
            s(In)(x);
          })
        }, null, 512)) : re("", !0),
        P(s(N), S({
          ref: s(o),
          tabindex: "-1",
          as: h.as,
          "as-child": h.asChild
        }, h.$attrs), {
          default: f(() => [
            _(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        c.value ? (v(), w(fl, {
          key: 1,
          ref: (x) => {
            p.value = s(Je)(x);
          },
          onFocusFromOutsideViewport: y[1] || (y[1] = () => {
            const x = m({
              tabbingDirection: "backwards"
            });
            s(In)(x);
          })
        }, null, 512)) : re("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Dg = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return U(), (a, n) => (v(), w(s(N), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sg = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return U(), (a, n) => (v(), w(s(N), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Su = "tooltip.open", [ys, Eg] = pe("TooltipProvider"), Eu = /* @__PURE__ */ b({
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
    const e = t, { delayDuration: a, skipDelayDuration: n, disableHoverableContent: o, disableClosingTrigger: r, ignoreNonKeyboardFocus: l, disabled: i } = he(e);
    U();
    const u = O(!0), c = O(!1), { start: d, stop: p } = Yr(() => {
      u.value = !0;
    }, n, { immediate: !1 });
    return Eg({
      isOpenDelayed: u,
      delayDuration: a,
      onOpen() {
        p(), u.value = !1;
      },
      onClose() {
        d();
      },
      isPointerInTransitRef: c,
      disableHoverableContent: o,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: l
    }), (g, m) => _(g.$slots, "default");
  }
}), [wo, Pg] = pe("TooltipRoot"), Og = /* @__PURE__ */ b({
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
    U();
    const o = ys(), r = C(() => a.disableHoverableContent ?? o.disableHoverableContent.value), l = C(() => a.disableClosingTrigger ?? o.disableClosingTrigger.value), i = C(() => a.disabled ?? o.disabled.value), u = C(() => a.delayDuration ?? o.delayDuration.value), c = C(() => a.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), d = we(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    X(d, (B) => {
      o.onClose && (B ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Su))) : o.onClose());
    });
    const p = O(!1), g = O(), m = C(() => d.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: h, stop: y } = Yr(() => {
      p.value = !0, d.value = !0;
    }, u, { immediate: !1 });
    function x() {
      y(), p.value = !1, d.value = !0;
    }
    function $() {
      y(), d.value = !1;
    }
    function k() {
      h();
    }
    return Pg({
      contentId: "",
      open: d,
      stateAttribute: m,
      trigger: g,
      onTriggerChange(B) {
        g.value = B;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? k() : x();
      },
      onTriggerLeave() {
        r.value ? $() : y();
      },
      onOpen: x,
      onClose: $,
      disableHoverableContent: r,
      disableClosingTrigger: l,
      disabled: i,
      ignoreNonKeyboardFocus: c
    }), (B, E) => (v(), w(s(Ea), null, {
      default: f(() => [
        _(B.$slots, "default", { open: s(d) })
      ]),
      _: 3
    }));
  }
}), Ag = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = wo(), n = ys();
    a.contentId || (a.contentId = ke(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: r } = U(), l = O(!1), i = O(!1), u = C(() => a.disabled.value ? {} : {
      click: y,
      focus: m,
      pointermove: p,
      pointerleave: g,
      pointerdown: d,
      blur: h
    });
    ce(() => {
      a.onTriggerChange(r.value);
    });
    function c() {
      setTimeout(() => {
        l.value = !1;
      }, 1);
    }
    function d() {
      l.value = !0, document.addEventListener("pointerup", c, { once: !0 });
    }
    function p(x) {
      x.pointerType !== "touch" && !i.value && !n.isPointerInTransitRef.value && (a.onTriggerEnter(), i.value = !0);
    }
    function g() {
      a.onTriggerLeave(), i.value = !1;
    }
    function m(x) {
      var $, k;
      l.value || a.ignoreNonKeyboardFocus.value && !((k = ($ = x.target).matches) != null && k.call($, ":focus-visible")) || a.onOpen();
    }
    function h() {
      a.onClose();
    }
    function y() {
      a.disableClosingTrigger.value || a.onClose();
    }
    return (x, $) => (v(), w(s(ho), { "as-child": "" }, {
      default: f(() => [
        P(s(N), S({
          ref: s(o),
          "aria-describedby": s(a).open.value ? s(a).contentId : void 0,
          "data-state": s(a).stateAttribute.value,
          as: x.as,
          "as-child": e.asChild,
          "data-grace-area-trigger": ""
        }, pd(u.value)), {
          default: f(() => [
            _(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Pu = /* @__PURE__ */ b({
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
    const a = t, n = e, o = wo(), { forwardRef: r } = U(), l = Ol(), i = C(() => {
      var d;
      return (d = l.default) == null ? void 0 : d.call(l);
    }), u = C(() => {
      var d;
      if (a.ariaLabel)
        return a.ariaLabel;
      let p = "";
      function g(m) {
        typeof m.children == "string" && m.type !== Br ? p += m.children : Array.isArray(m.children) && m.children.forEach((h) => g(h));
      }
      return (d = i.value) == null || d.forEach((m) => g(m)), p;
    }), c = C(() => {
      const { ariaLabel: d, ...p } = a;
      return p;
    });
    return ce(() => {
      wa(window, "scroll", (d) => {
        const p = d.target;
        p != null && p.contains(o.trigger.value) && o.onClose();
      }), wa(window, Su, o.onClose);
    }), (d, p) => (v(), w(s(Da), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (g) => n("escapeKeyDown", g)),
      onPointerDownOutside: p[1] || (p[1] = (g) => {
        var m;
        s(o).disableClosingTrigger.value && (m = s(o).trigger.value) != null && m.contains(g.target) && g.preventDefault(), n("pointerDownOutside", g);
      }),
      onFocusOutside: p[2] || (p[2] = $e(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (g) => s(o).onClose())
    }, {
      default: f(() => [
        P(s(_a), S({
          ref: s(r),
          "data-state": s(o).stateAttribute.value
        }, { ...d.$attrs, ...c.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: f(() => [
            _(d.$slots, "default"),
            P(s(cn), {
              id: s(o).contentId,
              role: "tooltip"
            }, {
              default: f(() => [
                Z(se(u.value), 1)
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
}), Mg = /* @__PURE__ */ b({
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
    const e = fe(t), { forwardRef: a, currentElement: n } = U(), { trigger: o, onClose: r } = wo(), l = ys(), { isPointerInTransit: i, onPointerExit: u } = Wp(o, n);
    return l.isPointerInTransitRef = i, u(() => {
      r();
    }), (c, d) => (v(), w(Pu, S({ ref: s(a) }, s(e)), {
      default: f(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tg = /* @__PURE__ */ b({
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
    const a = t, n = e, o = wo(), r = ue(a, n), { forwardRef: l } = U();
    return (i, u) => (v(), w(s(Ke), {
      present: i.forceMount || s(o).open.value
    }, {
      default: f(() => [
        (v(), w(Ne(s(o).disableHoverableContent.value ? Pu : Mg), S({ ref: s(l) }, s(r)), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ig = /* @__PURE__ */ b({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(un), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), a1 = /* @__PURE__ */ b({
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
    const o = ue(t, e);
    return (r, l) => (v(), w(s(vf), H(G(s(o))), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bs = "-", Vg = (t) => {
  const e = Fg(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (l) => {
      const i = l.split(bs);
      return i[0] === "" && i.length !== 1 && i.shift(), Ou(i, e) || Rg(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = a[l] || [];
      return i && n[l] ? [...u, ...n[l]] : u;
    }
  };
}, Ou = (t, e) => {
  var l;
  if (t.length === 0)
    return e.classGroupId;
  const a = t[0], n = e.nextPart.get(a), o = n ? Ou(t.slice(1), n) : void 0;
  if (o)
    return o;
  if (e.validators.length === 0)
    return;
  const r = t.join(bs);
  return (l = e.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, vl = /^\[(.+)\]$/, Rg = (t) => {
  if (vl.test(t)) {
    const e = vl.exec(t)[1], a = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Fg = (t) => {
  const {
    theme: e,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ng(Object.entries(t.classGroups), a).forEach(([r, l]) => {
    pr(l, n, r, e);
  }), n;
}, pr = (t, e, a, n) => {
  t.forEach((o) => {
    if (typeof o == "string") {
      const r = o === "" ? e : ml(e, o);
      r.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (Lg(o)) {
        pr(o(n), e, a, n);
        return;
      }
      e.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([r, l]) => {
      pr(l, ml(e, r), a, n);
    });
  });
}, ml = (t, e) => {
  let a = t;
  return e.split(bs).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Lg = (t) => t.isThemeGetter, Ng = (t, e) => e ? t.map(([a, n]) => {
  const o = n.map((r) => typeof r == "string" ? e + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [e + l, i])) : r);
  return [a, o];
}) : t, zg = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (r, l) => {
    a.set(r, l), e++, e > t && (e = 0, n = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(r) {
      let l = a.get(r);
      if (l !== void 0)
        return l;
      if ((l = n.get(r)) !== void 0)
        return o(r, l), l;
    },
    set(r, l) {
      a.has(r) ? a.set(r, l) : o(r, l);
    }
  };
}, Au = "!", Wg = (t) => {
  const {
    separator: e,
    experimentalParseClassName: a
  } = t, n = e.length === 1, o = e[0], r = e.length, l = (i) => {
    const u = [];
    let c = 0, d = 0, p;
    for (let x = 0; x < i.length; x++) {
      let $ = i[x];
      if (c === 0) {
        if ($ === o && (n || i.slice(x, x + r) === e)) {
          u.push(i.slice(d, x)), d = x + r;
          continue;
        }
        if ($ === "/") {
          p = x;
          continue;
        }
      }
      $ === "[" ? c++ : $ === "]" && c--;
    }
    const g = u.length === 0 ? i : i.substring(d), m = g.startsWith(Au), h = m ? g.substring(1) : g, y = p && p > d ? p - d : void 0;
    return {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: h,
      maybePostfixModifierPosition: y
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: l
  }) : l;
}, Ug = (t) => {
  if (t.length <= 1)
    return t;
  const e = [];
  let a = [];
  return t.forEach((n) => {
    n[0] === "[" ? (e.push(...a.sort(), n), a = []) : a.push(n);
  }), e.push(...a.sort()), e;
}, Kg = (t) => ({
  cache: zg(t.cacheSize),
  parseClassName: Wg(t),
  ...Vg(t)
}), Hg = /\s+/, jg = (t, e) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = e, r = [], l = t.trim().split(Hg);
  let i = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const c = l[u], {
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: m
    } = a(c);
    let h = !!m, y = n(h ? g.substring(0, m) : g);
    if (!y) {
      if (!h) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (y = n(g), !y) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      h = !1;
    }
    const x = Ug(d).join(":"), $ = p ? x + Au : x, k = $ + y;
    if (r.includes(k))
      continue;
    r.push(k);
    const B = o(y, h);
    for (let E = 0; E < B.length; ++E) {
      const D = B[E];
      r.push($ + D);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Gg() {
  let t = 0, e, a, n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (a = Mu(e)) && (n && (n += " "), n += a);
  return n;
}
const Mu = (t) => {
  if (typeof t == "string")
    return t;
  let e, a = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = Mu(t[n])) && (a && (a += " "), a += e);
  return a;
};
function qg(t, ...e) {
  let a, n, o, r = l;
  function l(u) {
    const c = e.reduce((d, p) => p(d), t());
    return a = Kg(c), n = a.cache.get, o = a.cache.set, r = i, i(u);
  }
  function i(u) {
    const c = n(u);
    if (c)
      return c;
    const d = jg(u, a);
    return o(u, d), d;
  }
  return function() {
    return r(Gg.apply(null, arguments));
  };
}
const Ce = (t) => {
  const e = (a) => a[t] || [];
  return e.isThemeGetter = !0, e;
}, Tu = /^\[(?:([a-z-]+):)?(.+)\]$/i, Yg = /^\d+\/\d+$/, Jg = /* @__PURE__ */ new Set(["px", "full", "screen"]), Qg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Xg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Zg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ey = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ty = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, vt = (t) => va(t) || Jg.has(t) || Yg.test(t), At = (t) => Ta(t, "length", uy), va = (t) => !!t && !Number.isNaN(Number(t)), No = (t) => Ta(t, "number", va), Na = (t) => !!t && Number.isInteger(Number(t)), ay = (t) => t.endsWith("%") && va(t.slice(0, -1)), de = (t) => Tu.test(t), Mt = (t) => Qg.test(t), ny = /* @__PURE__ */ new Set(["length", "size", "percentage"]), oy = (t) => Ta(t, ny, Iu), ry = (t) => Ta(t, "position", Iu), sy = /* @__PURE__ */ new Set(["image", "url"]), ly = (t) => Ta(t, sy, cy), iy = (t) => Ta(t, "", dy), za = () => !0, Ta = (t, e, a) => {
  const n = Tu.exec(t);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : a(n[2]) : !1;
}, uy = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Xg.test(t) && !Zg.test(t)
), Iu = () => !1, dy = (t) => ey.test(t), cy = (t) => ty.test(t), py = () => {
  const t = Ce("colors"), e = Ce("spacing"), a = Ce("blur"), n = Ce("brightness"), o = Ce("borderColor"), r = Ce("borderRadius"), l = Ce("borderSpacing"), i = Ce("borderWidth"), u = Ce("contrast"), c = Ce("grayscale"), d = Ce("hueRotate"), p = Ce("invert"), g = Ce("gap"), m = Ce("gradientColorStops"), h = Ce("gradientColorStopPositions"), y = Ce("inset"), x = Ce("margin"), $ = Ce("opacity"), k = Ce("padding"), B = Ce("saturate"), E = Ce("scale"), D = Ce("sepia"), I = Ce("skew"), M = Ce("space"), K = Ce("translate"), R = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", de, e], F = () => [de, e], j = () => ["", vt, At], W = () => ["auto", va, de], z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Q = () => ["solid", "dashed", "dotted", "double", "none"], ie = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ye = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Y = () => ["", "0", de], oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ve = () => [va, de];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [za],
      spacing: [vt, At],
      blur: ["none", "", Mt, de],
      brightness: ve(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Mt, de],
      borderSpacing: F(),
      borderWidth: j(),
      contrast: ve(),
      grayscale: Y(),
      hueRotate: ve(),
      invert: Y(),
      gap: F(),
      gradientColorStops: [t],
      gradientColorStopPositions: [ay, At],
      inset: T(),
      margin: T(),
      opacity: ve(),
      padding: F(),
      saturate: ve(),
      scale: ve(),
      sepia: Y(),
      skew: ve(),
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
        aspect: ["auto", "square", "video", de]
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
        columns: [Mt]
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
        object: [...z(), de]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
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
        inset: [y]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [y]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [y]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [y]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [y]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [y]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [y]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [y]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [y]
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
        z: ["auto", Na, de]
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
        flex: ["1", "auto", "initial", "none", de]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Y()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Y()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Na, de]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [za]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Na, de]
        }, de]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [za]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Na, de]
        }, de]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
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
        "auto-cols": ["auto", "min", "max", "fr", de]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", de]
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
        p: [k]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [k]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [k]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [k]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [k]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [k]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [k]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [k]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [k]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", de, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [de, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [de, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [Mt]
        }, Mt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [de, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [de, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [de, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [de, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Mt, At]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", No]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [za]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", de]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", va, No]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", vt, de]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", de]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", de]
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
        text: [t]
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
        decoration: [...Q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", vt, At]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", vt, de]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", de]
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
        content: ["none", de]
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
        bg: [...z(), ry]
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
        bg: ["auto", "cover", "contain", oy]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ly]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
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
        "border-opacity": [$]
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
        "divide-opacity": [$]
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
        "outline-offset": [vt, de]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [vt, At]
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
        ring: j()
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
        "ring-opacity": [$]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [vt, At]
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
        shadow: ["", "inner", "none", Mt, iy]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [za]
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
        contrast: [u]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Mt, de]
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
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [B]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [D]
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
        "backdrop-saturate": [B]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [D]
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
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", de]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ve()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", de]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ve()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", de]
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
        rotate: [Na, de]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [K]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [K]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", de]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", de]
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
        "will-change": ["auto", "scroll", "contents", "transform", de]
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
        stroke: [vt, At, No]
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
}, fy = /* @__PURE__ */ qg(py);
function V(...t) {
  return fy(t);
}
const n1 = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(gf), S(a.value, { class: "text-accordion-text data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all" }), {
      default: f(() => [
        me("div", {
          class: q(s(V)("pb-4 pt-0", e.class))
        }, [
          _(n.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), o1 = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(hf), S(s(n), {
      class: s(V)("border-accordion-border border-b", e.class)
    }), {
      default: f(() => [
        _(o.$slots, "default")
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
const vy = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $n = {
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
const my = ({ size: t, strokeWidth: e = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: r, class: l, ...i }, { slots: u }) => Ie(
  "svg",
  {
    ...$n,
    width: t || $n.width,
    height: t || $n.height,
    stroke: n || $n.stroke,
    "stroke-width": a ? Number(e) * 24 / Number(t) : e,
    class: ["lucide", `lucide-${vy(r ?? "icon")}`],
    ...i
  },
  [...o.map((c) => Ie(...c)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = (t, e) => (a, { slots: n }) => Ie(
  my,
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
const hy = Oe("CalendarIcon", [
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
const ws = Oe("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = Oe("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = Oe("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = Oe("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yy = Oe("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const by = Oe("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = Oe("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _y = Oe("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vu = Oe("EllipsisIcon", [
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
const xy = Oe("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cy = Oe("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $y = Oe("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const By = Oe("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = Oe("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dy = Oe("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sy = Oe("SunIcon", [
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
const _o = Oe("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), r1 = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(yf), { class: "flex" }, {
      default: f(() => [
        P(s(bf), S(a.value, {
          class: s(V)(
            "text-heading flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
            e.class
          )
        }), {
          default: f(() => [
            _(n.$slots, "default"),
            _(n.$slots, "icon", {}, () => [
              P(s(_s), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
});
function Ru(t) {
  var e, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (a = Ru(t[e])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function Ey() {
  for (var t, e, a = 0, n = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (e = Ru(t)) && (n && (n += " "), n += e);
  return n;
}
const hl = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, gl = Ey, Ia = (t, e) => (a) => {
  var n;
  if ((e == null ? void 0 : e.variants) == null) return gl(t, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: r } = e, l = Object.keys(o).map((c) => {
    const d = a == null ? void 0 : a[c], p = r == null ? void 0 : r[c];
    if (d === null) return null;
    const g = hl(d) || hl(p);
    return o[c][g];
  }), i = a && Object.entries(a).reduce((c, d) => {
    let [p, g] = d;
    return g === void 0 || (c[p] = g), c;
  }, {}), u = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, d) => {
    let { class: p, className: g, ...m } = d;
    return Object.entries(m).every((h) => {
      let [y, x] = h;
      return Array.isArray(x) ? x.includes({
        ...r,
        ...i
      }[y]) : {
        ...r,
        ...i
      }[y] === x;
    }) ? [
      ...c,
      p,
      g
    ] : c;
  }, []);
  return gl(t, l, u, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, s1 = /* @__PURE__ */ b({
  __name: "Badge",
  props: {
    variant: {},
    type: {},
    size: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(s(V)(s(Py)({ variant: a.variant, type: a.type, size: a.size }), e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Py = Ia(
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
), l1 = /* @__PURE__ */ b({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("nav", {
      "aria-label": "breadcrumb",
      class: q(e.class)
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), i1 = /* @__PURE__ */ b({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: q(s(V)("flex h-9 w-9 items-center justify-center", e.class))
    }, [
      _(a.$slots, "default", {}, () => [
        P(s(Vu), { class: "h-4 w-4" })
      ]),
      n[0] || (n[0] = me("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), u1 = /* @__PURE__ */ b({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("li", {
      class: q(s(V)("inline-flex items-center gap-1.5", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), d1 = /* @__PURE__ */ b({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), {
      as: a.as,
      "as-child": a.asChild,
      class: q(s(V)("hover:text-foreground transition-colors", e.class))
    }, {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), c1 = /* @__PURE__ */ b({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("ol", {
      class: q(
        s(V)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5",
          e.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), p1 = /* @__PURE__ */ b({
  __name: "BreadcrumbPage",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("span", {
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: q(s(V)("text-foreground font-normal", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), f1 = /* @__PURE__ */ b({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: q(s(V)("[&>svg]:h-3.5 [&>svg]:w-3.5", e.class))
    }, [
      _(a.$slots, "default", {}, () => [
        P(s(xs))
      ])
    ], 2));
  }
}), Dt = /* @__PURE__ */ b({
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
    return (a, n) => (v(), w(s(N), {
      as: a.as,
      "as-child": a.asChild,
      class: q(s(V)(s(aa)({ variant: a.variant, size: a.size }), e.class))
    }, {
      default: f(() => [
        _(a.$slots, "default"),
        a.loading ? (v(), w(s(xy), {
          key: 0,
          class: q(s(Oy)({ size: a.size }))
        }, null, 8, ["class"])) : re("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Oy = Ia("animate-spin", {
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
}), aa = Ia(
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
), v1 = /* @__PURE__ */ b({
  __name: "Card",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(
        s(V)("border-card-border bg-card text-card-foreground rounded-lg border shadow-sm", e.class)
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), m1 = /* @__PURE__ */ b({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(s(V)("flex flex-col gap-y-1.5 p-6", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), h1 = /* @__PURE__ */ b({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("h3", {
      class: q(s(V)("text-2xl font-semibold leading-none tracking-tight", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), g1 = /* @__PURE__ */ b({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("p", {
      class: q(s(V)("text-muted-foreground text-sm", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), y1 = /* @__PURE__ */ b({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(s(V)("p-6 pt-0", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), b1 = /* @__PURE__ */ b({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(s(V)("flex items-center p-6 pt-0", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
});
function Cs(t) {
  return t ? t.flatMap((e) => e.type === ne ? Cs(e.children) : [e]) : [];
}
const fr = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(t, { attrs: e, slots: a }) {
    return () => {
      var u, c;
      if (!a.default)
        return null;
      const n = Cs(a.default()), o = n.findIndex((d) => d.type !== Br);
      if (o === -1)
        return n;
      const r = n[o];
      (u = r.props) == null || delete u.ref;
      const l = r.props ? S(e, r.props) : e;
      e.class && ((c = r.props) != null && c.class) && delete r.props.class;
      const i = Tl(r, l);
      for (const d in l)
        d.startsWith("on") && (i.props || (i.props = {}), i.props[d] = l[d]);
      return n.length === 1 ? i : (n[o] = i, n);
    };
  }
}), Ay = ["area", "img", "input"], Se = b({
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
    return typeof n == "string" && Ay.includes(n) ? () => Ie(n, e) : n !== "template" ? () => Ie(t.as, e, { default: a.default }) : () => Ie(fr, e, { default: a.default });
  }
}), My = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return (e, a) => (v(), w(s(Se), {
      as: e.as,
      "as-child": e.asChild,
      "aria-hidden": e.feature === "focusable" ? "true" : void 0,
      "data-hidden": e.feature === "fully-hidden" ? "" : void 0,
      tabindex: e.feature === "fully-hidden" ? "-1" : void 0,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      }
    }, {
      default: f(() => [
        _(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
});
function Ty(t, e) {
  var a;
  const n = wt();
  return _e(() => {
    n.value = t();
  }, {
    ...e,
    flush: (a = void 0) != null ? a : "sync"
  }), Ca(n);
}
function xo(t) {
  return eo() ? (to(t), !0) : !1;
}
function Vn() {
  const t = /* @__PURE__ */ new Set(), e = (r) => {
    t.delete(r);
  };
  return {
    on: (r) => {
      t.add(r);
      const l = () => e(r);
      return xo(l), {
        off: l
      };
    },
    off: e,
    trigger: (...r) => Promise.all(Array.from(t).map((l) => l(...r))),
    clear: () => {
      t.clear();
    }
  };
}
function Iy(t) {
  let e = 0, a, n;
  const o = () => {
    e -= 1, n && e <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...r) => (e += 1, n || (n = Er(!0), a = n.run(() => t(...r))), xo(o), a);
}
const Va = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Vy = (t) => typeof t < "u", Ry = Object.prototype.toString, Fy = (t) => Ry.call(t) === "[object Object]", yl = /* @__PURE__ */ Ly();
function Ly() {
  var t, e;
  return Va && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Ny(t) {
  return Ee();
}
function zo(t) {
  return Array.isArray(t) ? t : [t];
}
function Fu(t, e = 1e4) {
  return kr((a, n) => {
    let o = Te(t), r;
    const l = () => setTimeout(() => {
      o = Te(t), n();
    }, Te(e));
    return xo(() => {
      clearTimeout(r);
    }), {
      get() {
        return a(), o;
      },
      set(i) {
        o = i, n(), clearTimeout(r), r = l();
      }
    };
  });
}
const zy = Te;
function Wy(t, e) {
  Ny() && no(t, e);
}
function Uy(t, e, a) {
  return X(
    t,
    e,
    {
      ...a,
      immediate: !0
    }
  );
}
const $s = Va ? window : void 0;
function na(t) {
  var e;
  const a = Te(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
function Lu(...t) {
  const e = [], a = () => {
    e.forEach((i) => i()), e.length = 0;
  }, n = (i, u, c, d) => (i.addEventListener(u, c, d), () => i.removeEventListener(u, c, d)), o = C(() => {
    const i = zo(Te(t[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = Uy(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((c) => na(c))) != null ? u : [$s].filter((c) => c != null),
        zo(Te(o.value ? t[1] : t[0])),
        zo(s(o.value ? t[2] : t[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Te(o.value ? t[3] : t[2])
      ];
    },
    ([i, u, c, d]) => {
      if (a(), !(i != null && i.length) || !(u != null && u.length) || !(c != null && c.length))
        return;
      const p = Fy(d) ? { ...d } : d;
      e.push(
        ...i.flatMap(
          (g) => u.flatMap(
            (m) => c.map((h) => n(g, m, h, p))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    r(), a();
  };
  return xo(a), l;
}
function Ky() {
  const t = wt(!1), e = Ee();
  return e && ce(() => {
    t.value = !0;
  }, e), t;
}
function Hy(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (e) => e.key === t : Array.isArray(t) ? (e) => t.includes(e.key) : () => !0;
}
function jy(...t) {
  let e, a, n = {};
  t.length === 3 ? (e = t[0], a = t[1], n = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (e = !0, a = t[0], n = t[1]) : (e = t[0], a = t[1]) : (e = !0, a = t[0]);
  const {
    target: o = $s,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = n, u = Hy(e);
  return Lu(o, r, (d) => {
    d.repeat && Te(i) || u(d) && a(d);
  }, l);
}
function Gy(t) {
  return JSON.parse(JSON.stringify(t));
}
function Qa(t, e, a, n = {}) {
  var o, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = Ee(), h = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let y = c;
  e || (e = "modelValue"), y = y || `update:${e.toString()}`;
  const x = (B) => i ? typeof i == "function" ? i(B) : Gy(B) : B, $ = () => Vy(t[e]) ? x(t[e]) : p, k = (B) => {
    g ? g(B) && h(y, B) : h(y, B);
  };
  if (u) {
    const B = $(), E = O(B);
    let D = !1;
    return X(
      () => t[e],
      (I) => {
        D || (D = !0, E.value = x(I), ae(() => D = !1));
      }
    ), X(
      E,
      (I) => {
        !D && (I !== t[e] || d) && k(I);
      },
      { deep: d }
    ), E;
  } else
    return C({
      get() {
        return $();
      },
      set(B) {
        k(B);
      }
    });
}
function St(t, e) {
  const a = typeof t == "string" ? `${t}Context` : e, n = Symbol(a);
  return [(l) => {
    const i = tn(n, l);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(
        ", "
      )}` : `\`${t}\``}`
    );
  }, (l) => (oo(n, l), l)];
}
function bl(t) {
  return typeof t == "string" ? `'${t}'` : new qy().serialize(t);
}
const qy = /* @__PURE__ */ function() {
  var e;
  class t {
    constructor() {
      Os(this, e, /* @__PURE__ */ new Map());
    }
    compare(n, o) {
      const r = typeof n, l = typeof o;
      return r === "string" && l === "string" ? n.localeCompare(o) : r === "number" && l === "number" ? n - o : String.prototype.localeCompare.call(this.serialize(n, !0), this.serialize(o, !0));
    }
    serialize(n, o) {
      if (n === null) return "null";
      switch (typeof n) {
        case "string":
          return o ? n : `'${n}'`;
        case "bigint":
          return `${n}n`;
        case "object":
          return this.$object(n);
        case "function":
          return this.$function(n);
      }
      return String(n);
    }
    serializeObject(n) {
      const o = Object.prototype.toString.call(n);
      if (o !== "[object Object]") return this.serializeBuiltInType(o.length < 10 ? `unknown:${o}` : o.slice(8, -1), n);
      const r = n.constructor, l = r === Object || r === void 0 ? "" : r.name;
      if (l !== "" && globalThis[l] === r) return this.serializeBuiltInType(l, n);
      if (typeof n.toJSON == "function") {
        const i = n.toJSON();
        return l + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
      }
      return this.serializeObjectEntries(l, Object.entries(n));
    }
    serializeBuiltInType(n, o) {
      const r = this["$" + n];
      if (r) return r.call(this, o);
      if (typeof (o == null ? void 0 : o.entries) == "function") return this.serializeObjectEntries(n, o.entries());
      throw new Error(`Cannot serialize ${n}`);
    }
    serializeObjectEntries(n, o) {
      const r = Array.from(o).sort((i, u) => this.compare(i[0], u[0]));
      let l = `${n}{`;
      for (let i = 0; i < r.length; i++) {
        const [u, c] = r[i];
        l += `${this.serialize(u, !0)}:${this.serialize(c)}`, i < r.length - 1 && (l += ",");
      }
      return l + "}";
    }
    $object(n) {
      let o = Fa(this, e).get(n);
      return o === void 0 && (Fa(this, e).set(n, `#${Fa(this, e).size}`), o = this.serializeObject(n), Fa(this, e).set(n, o)), o;
    }
    $function(n) {
      const o = Function.prototype.toString.call(n);
      return o.slice(-15) === "[native code] }" ? `${n.name || ""}()[native]` : `${n.name}(${n.length})${o.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(n) {
      let o = "[";
      for (let r = 0; r < n.length; r++) o += this.serialize(n[r]), r < n.length - 1 && (o += ",");
      return o + "]";
    }
    $Date(n) {
      try {
        return `Date(${n.toISOString()})`;
      } catch {
        return "Date(null)";
      }
    }
    $ArrayBuffer(n) {
      return `ArrayBuffer[${new Uint8Array(n).join(",")}]`;
    }
    $Set(n) {
      return `Set${this.$Array(Array.from(n).sort((o, r) => this.compare(o, r)))}`;
    }
    $Map(n) {
      return this.serializeObjectEntries("Map", n.entries());
    }
  }
  e = new WeakMap();
  for (const a of ["Error", "RegExp", "URL"]) t.prototype["$" + a] = function(n) {
    return `${a}(${n})`;
  };
  for (const a of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) t.prototype["$" + a] = function(n) {
    return `${a}[${n.join(",")}]`;
  };
  for (const a of ["BigInt64Array", "BigUint64Array"]) t.prototype["$" + a] = function(n) {
    return `${a}[${n.join("n,")}${n.length > 0 ? "n" : ""}]`;
  };
  return t;
}();
function vr(t, e) {
  return t === e || bl(t) === bl(e);
}
const [Co, w1] = St("ConfigProvider");
function Nu(t) {
  const e = Co({
    dir: O("ltr")
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function He() {
  const t = Ee(), e = O(), a = C(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = e.value) == null ? void 0 : l.$el.nodeName) ? (i = e.value) == null ? void 0 : i.$el.nextElementSibling : na(e);
  }), n = Object.assign({}, t.exposed), o = {};
  for (const l in t.props)
    Object.defineProperty(o, l, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[l]
    });
  if (Object.keys(n).length > 0)
    for (const l in n)
      Object.defineProperty(o, l, {
        enumerable: !0,
        configurable: !0,
        get: () => n[l]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => t.vnode.el
  }), t.exposed = o;
  function r(l) {
    e.value = l, l && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l instanceof Element ? l : l.$el
    }), t.exposed = o);
  }
  return { forwardRef: r, currentRef: e, currentElement: a };
}
let Yy = 0;
function Ra(t, e = "reka") {
  const a = Co({ useId: void 0 });
  return Rn.useId ? `${e}-${Rn.useId()}` : a.useId ? `${e}-${a.useId()}` : `${e}-${++Yy}`;
}
function Jy(t, e) {
  const a = O(t);
  function n(r) {
    return e[a.value][r] ?? a.value;
  }
  return {
    state: a,
    dispatch: (r) => {
      a.value = n(r);
    }
  };
}
function Qy(t, e) {
  var x;
  const a = O({}), n = O("none"), o = O(t), r = t.value ? "mounted" : "unmounted";
  let l;
  const i = ((x = e.value) == null ? void 0 : x.ownerDocument.defaultView) ?? $s, { state: u, dispatch: c } = Jy(r, {
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
  }), d = ($) => {
    var k;
    if (Va) {
      const B = new CustomEvent($, { bubbles: !1, cancelable: !1 });
      (k = e.value) == null || k.dispatchEvent(B);
    }
  };
  X(
    t,
    async ($, k) => {
      var E;
      const B = k !== $;
      if (await ae(), B) {
        const D = n.value, I = Bn(e.value);
        $ ? (c("MOUNT"), d("enter"), I === "none" && d("after-enter")) : I === "none" || I === "undefined" || ((E = a.value) == null ? void 0 : E.display) === "none" ? (c("UNMOUNT"), d("leave"), d("after-leave")) : k && D !== I ? (c("ANIMATION_OUT"), d("leave")) : (c("UNMOUNT"), d("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const p = ($) => {
    const k = Bn(e.value), B = k.includes(
      $.animationName
    ), E = u.value === "mounted" ? "enter" : "leave";
    if ($.target === e.value && B && (d(`after-${E}`), c("ANIMATION_END"), !o.value)) {
      const D = e.value.style.animationFillMode;
      e.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var I;
        ((I = e.value) == null ? void 0 : I.style.animationFillMode) === "forwards" && (e.value.style.animationFillMode = D);
      });
    }
    $.target === e.value && k === "none" && c("ANIMATION_END");
  }, g = ($) => {
    $.target === e.value && (n.value = Bn(e.value));
  }, m = X(
    e,
    ($, k) => {
      $ ? (a.value = getComputedStyle($), $.addEventListener("animationstart", g), $.addEventListener("animationcancel", p), $.addEventListener("animationend", p)) : (c("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), k == null || k.removeEventListener("animationstart", g), k == null || k.removeEventListener("animationcancel", p), k == null || k.removeEventListener("animationend", p));
    },
    { immediate: !0 }
  ), h = X(u, () => {
    const $ = Bn(e.value);
    n.value = u.value === "mounted" ? $ : "none";
  });
  return ze(() => {
    m(), h();
  }), {
    isPresent: C(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function Bn(t) {
  return t && getComputedStyle(t).animationName || "none";
}
const Xy = b({
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
    var c;
    const { present: n, forceMount: o } = he(t), r = O(), { isPresent: l } = Qy(n, r);
    a({ present: l });
    let i = e.default({ present: l.value });
    i = Cs(i || []);
    const u = Ee();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const d = (c = u == null ? void 0 : u.parent) != null && c.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${d}\` for  \`Presence\` component.`,
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
    return () => o.value || n.value || l.value ? Ie(e.default({ present: l.value })[0], {
      ref: (d) => {
        const p = na(d);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-reka-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
});
function Zy(t) {
  const e = Ee(), a = e == null ? void 0 : e.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${e == null ? void 0 : e.type.__name}`
  ), a == null || a.forEach((o) => {
    n[Ml(ao(o))] = (...r) => t(o, ...r);
  }), n;
}
function Bs(t, e, a) {
  const n = a.originalEvent.target, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
const eb = "dismissableLayer.pointerDownOutside", tb = "dismissableLayer.focusOutside";
function zu(t, e) {
  const a = e.closest(
    "[data-dismissable-layer]"
  ), n = t.dataset.dismissableLayer === "" ? t : t.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    t.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && (n === a || o.indexOf(n) < o.indexOf(a)));
}
function ab(t, e) {
  var r;
  const a = ((r = e == null ? void 0 : e.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = O(!1), o = O(() => {
  });
  return _e((l) => {
    if (!Va)
      return;
    const i = async (c) => {
      const d = c.target;
      if (!(!(e != null && e.value) || !d)) {
        if (zu(e.value, d)) {
          n.value = !1;
          return;
        }
        if (c.target && !n.value) {
          let p = function() {
            Bs(
              eb,
              t,
              g
            );
          };
          const g = { originalEvent: c };
          c.pointerType === "touch" ? (a.removeEventListener("click", o.value), o.value = p, a.addEventListener("click", o.value, {
            once: !0
          })) : p();
        } else
          a.removeEventListener("click", o.value);
        n.value = !1;
      }
    }, u = window.setTimeout(() => {
      a.addEventListener("pointerdown", i);
    }, 0);
    l(() => {
      window.clearTimeout(u), a.removeEventListener("pointerdown", i), a.removeEventListener("click", o.value);
    });
  }), {
    onPointerDownCapture: () => n.value = !0
  };
}
function nb(t, e) {
  var o;
  const a = ((o = e == null ? void 0 : e.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = O(!1);
  return _e((r) => {
    if (!Va)
      return;
    const l = async (i) => {
      if (!(e != null && e.value))
        return;
      await ae(), await ae();
      const u = i.target;
      !e.value || !u || zu(e.value, u) || i.target && !n.value && Bs(
        tb,
        t,
        { originalEvent: i }
      );
    };
    a.addEventListener("focusin", l), r(() => a.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => n.value = !0,
    onBlurCapture: () => n.value = !1
  };
}
const mt = ro({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ob = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: r } = He(), l = C(
      () => {
        var h;
        return ((h = r.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), i = C(() => mt.layersRoot), u = C(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), c = C(() => mt.layersWithOutsidePointerEventsDisabled.size > 0), d = C(() => {
      const h = Array.from(i.value), [y] = [...mt.layersWithOutsidePointerEventsDisabled].slice(-1), x = h.indexOf(y);
      return u.value >= x;
    }), p = ab(async (h) => {
      const y = [...mt.branches].some(
        (x) => x == null ? void 0 : x.contains(h.target)
      );
      !d.value || y || (n("pointerDownOutside", h), n("interactOutside", h), await ae(), h.defaultPrevented || n("dismiss"));
    }, r), g = nb((h) => {
      [...mt.branches].some(
        (x) => x == null ? void 0 : x.contains(h.target)
      ) || (n("focusOutside", h), n("interactOutside", h), h.defaultPrevented || n("dismiss"));
    }, r);
    jy("Escape", (h) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", h), h.defaultPrevented || n("dismiss"));
    });
    let m;
    return _e((h) => {
      r.value && (a.disableOutsidePointerEvents && (mt.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), mt.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), h(() => {
        a.disableOutsidePointerEvents && mt.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m);
      }));
    }), _e((h) => {
      h(() => {
        r.value && (i.value.delete(r.value), mt.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (h, y) => (v(), w(s(Se), {
      ref: s(o),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: ut({
        pointerEvents: c.value ? d.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(g).onFocusCapture,
      onBlurCapture: s(g).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: f(() => [
        _(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function rb() {
  let t = document.activeElement;
  if (t == null)
    return null;
  for (; t != null && t.shadowRoot != null && t.shadowRoot.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
var sb = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, ia = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), Dn = {}, Wo = 0, Wu = function(t) {
  return t && (t.host || Wu(t.parentNode));
}, lb = function(t, e) {
  return e.map(function(a) {
    if (t.contains(a))
      return a;
    var n = Wu(a);
    return n && t.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, ib = function(t, e, a, n) {
  var o = lb(e, Array.isArray(t) ? t : [t]);
  Dn[a] || (Dn[a] = /* @__PURE__ */ new WeakMap());
  var r = Dn[a], l = [], i = /* @__PURE__ */ new Set(), u = new Set(o), c = function(p) {
    !p || i.has(p) || (i.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var d = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(g) {
      if (i.has(g))
        d(g);
      else
        try {
          var m = g.getAttribute(n), h = m !== null && m !== "false", y = (ia.get(g) || 0) + 1, x = (r.get(g) || 0) + 1;
          ia.set(g, y), r.set(g, x), l.push(g), y === 1 && h && kn.set(g, !0), x === 1 && g.setAttribute(a, "true"), h || g.setAttribute(n, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", g, $);
        }
    });
  };
  return d(e), i.clear(), Wo++, function() {
    l.forEach(function(p) {
      var g = ia.get(p) - 1, m = r.get(p) - 1;
      ia.set(p, g), r.set(p, m), g || (kn.has(p) || p.removeAttribute(n), kn.delete(p)), m || p.removeAttribute(a);
    }), Wo--, Wo || (ia = /* @__PURE__ */ new WeakMap(), ia = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), Dn = {});
  };
}, ub = function(t, e, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), o = sb(t);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), ib(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function db(t) {
  let e;
  X(() => na(t), (a) => {
    a ? e = ub(a) : e && e();
  }), ze(() => {
    e && e();
  });
}
function Uo(t) {
  if (t === null || typeof t != "object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t ? !1 : Symbol.toStringTag in t ? Object.prototype.toString.call(t) === "[object Module]" : !0;
}
function mr(t, e, a = ".", n) {
  if (!Uo(e))
    return mr(t, {}, a, n);
  const o = Object.assign({}, e);
  for (const r in t) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = t[r];
    l != null && (n && n(o, r, l, a) || (Array.isArray(l) && Array.isArray(o[r]) ? o[r] = [...l, ...o[r]] : Uo(l) && Uo(o[r]) ? o[r] = mr(
      l,
      o[r],
      (a ? `${a}.` : "") + r.toString(),
      n
    ) : o[r] = l));
  }
  return o;
}
function cb(t) {
  return (...e) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    e.reduce((a, n) => mr(a, n, "", t), {})
  );
}
const pb = cb(), fb = Iy(() => {
  const t = O(/* @__PURE__ */ new Map()), e = O(), a = C(() => {
    for (const l of t.value.values())
      if (l)
        return !0;
    return !1;
  }), n = Co({
    scrollBody: O(!0)
  });
  let o = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = e.value ?? "", yl && (o == null || o()), e.value = void 0;
  };
  return X(a, (l, i) => {
    var p;
    if (!Va)
      return;
    if (!l) {
      i && r();
      return;
    }
    e.value === void 0 && (e.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, c = { padding: u, margin: 0 }, d = (p = n.scrollBody) != null && p.value ? typeof n.scrollBody.value == "object" ? pb({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof d.padding == "number" ? `${d.padding}px` : String(d.padding), document.body.style.marginRight = typeof d.margin == "number" ? `${d.margin}px` : String(d.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), yl && (o = Lu(
      document,
      "touchmove",
      (g) => mb(g),
      { passive: !1 }
    )), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), t;
});
function vb(t) {
  const e = Math.random().toString(36).substring(2, 7), a = fb();
  a.value.set(e, t ?? !1);
  const n = C({
    get: () => a.value.get(e) ?? !1,
    set: (o) => a.value.set(e, o)
  });
  return Wy(() => {
    a.value.delete(e);
  }), n;
}
function Uu(t) {
  const e = window.getComputedStyle(t);
  if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && t.clientWidth < t.scrollWidth || e.overflowY === "auto" && t.clientHeight < t.scrollHeight)
    return !0;
  {
    const a = t.parentNode;
    return !(a instanceof Element) || a.tagName === "BODY" ? !1 : Uu(a);
  }
}
function mb(t) {
  const e = t || window.event, a = e.target;
  return a instanceof Element && Uu(a) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.cancelable && e.preventDefault(), !1);
}
const hb = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = Ky();
    return (a, n) => s(e) || a.forceMount ? (v(), w(en, {
      key: 0,
      to: a.to,
      disabled: a.disabled,
      defer: a.defer
    }, [
      _(a.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : re("", !0);
  }
});
function ks(t) {
  const e = Ee(), a = Object.keys((e == null ? void 0 : e.type.props) ?? {}).reduce((o, r) => {
    const l = (e == null ? void 0 : e.type.props[r]).default;
    return l !== void 0 && (o[r] = l), o;
  }, {}), n = Cr(t);
  return C(() => {
    const o = {}, r = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      o[ao(l)] = r[l];
    }), Object.keys({ ...a, ...o }).reduce((l, i) => (n.value[i] !== void 0 && (l[i] = n.value[i]), l), {});
  });
}
function vn(t, e) {
  const a = ks(t), n = e ? Zy(e) : {};
  return C(() => ({
    ...a.value,
    ...n
  }));
}
function Nt() {
  const t = O(), e = C(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (n = t.value) == null ? void 0 : n.$el.nextElementSibling : na(t);
  });
  return {
    primitiveElement: t,
    currentElement: e
  };
}
function gb() {
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
function yb(t) {
  return C(() => {
    var e;
    return zy(t) ? !!((e = na(t)) != null && e.closest("form")) : !0;
  });
}
const wl = "data-reka-collection-item";
function Ds(t = {}) {
  const { key: e = "", isProvider: a = !1 } = t, n = `${e}CollectionProvider`;
  let o;
  if (a) {
    const d = O(/* @__PURE__ */ new Map());
    o = {
      collectionRef: O(),
      itemMap: d
    }, oo(n, o);
  } else
    o = tn(n);
  const r = (d = !1) => {
    const p = o.collectionRef.value;
    if (!p)
      return [];
    const g = Array.from(p.querySelectorAll(`[${wl}]`)), h = Array.from(o.itemMap.value.values()).sort(
      (y, x) => g.indexOf(y.ref) - g.indexOf(x.ref)
    );
    return d ? h : h.filter((y) => y.ref.dataset.disabled !== "");
  }, l = b({
    name: "CollectionSlot",
    setup(d, { slots: p }) {
      const { primitiveElement: g, currentElement: m } = Nt();
      return X(m, () => {
        o.collectionRef.value = m.value;
      }), () => Ie(fr, { ref: g }, p);
    }
  }), i = b({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(d, { slots: p, attrs: g }) {
      const { primitiveElement: m, currentElement: h } = Nt();
      return _e((y) => {
        if (h.value) {
          const x = Il(h.value);
          o.itemMap.value.set(x, { ref: h.value, value: d.value }), y(() => o.itemMap.value.delete(x));
        }
      }), () => Ie(fr, { ...g, [wl]: "", ref: m }, p);
    }
  }), u = C(() => Array.from(o.itemMap.value.values())), c = C(() => o.itemMap.value.size);
  return { getItems: r, reactiveItems: u, itemMapSize: c, CollectionSlot: l, CollectionItem: i };
}
const bb = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function wb(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function _b(t, e, a) {
  const n = wb(t.key, a);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return bb[n];
}
const _l = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {},
    value: {},
    checked: { type: Boolean, default: void 0 },
    required: { type: Boolean },
    disabled: { type: Boolean },
    feature: { default: "fully-hidden" }
  },
  setup(t) {
    const e = t, { primitiveElement: a, currentElement: n } = Nt(), o = C(() => e.checked ?? e.value);
    return X(o, (r, l) => {
      if (!n.value)
        return;
      const i = n.value, u = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(u, "value").set;
      if (d && r !== l) {
        const p = new Event("input", { bubbles: !0 }), g = new Event("change", { bubbles: !0 });
        d.call(i, r), i.dispatchEvent(p), i.dispatchEvent(g);
      }
    }), (r, l) => (v(), w(My, S({
      ref_key: "primitiveElement",
      ref: a
    }, { ...e, ...r.$attrs }, { as: "input" }), null, 16));
  }
}), xb = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    checked: { type: Boolean, default: void 0 },
    required: { type: Boolean },
    disabled: { type: Boolean },
    feature: { default: "fully-hidden" }
  },
  setup(t) {
    const e = t, a = C(
      () => typeof e.value == "object" && Array.isArray(e.value) && e.value.length === 0 && e.required
    ), n = C(() => typeof e.value == "string" || typeof e.value == "number" || typeof e.value == "boolean" ? [{ name: e.name, value: e.value }] : typeof e.value == "object" && Array.isArray(e.value) ? e.value.flatMap((o, r) => typeof o == "object" ? Object.entries(o).map(([l, i]) => ({ name: `[${e.name}][${r}][${l}]`, value: i })) : { name: `[${e.name}][${r}]`, value: o }) : e.value !== null && typeof e.value == "object" && !Array.isArray(e.value) ? Object.entries(e.value).map(([o, r]) => ({ name: `[${e.name}][${o}]`, value: r })) : []);
    return (o, r) => a.value ? (v(), w(_l, S({ key: o.name }, { ...e, ...o.$attrs }, {
      name: o.name,
      value: o.value
    }), null, 16, ["name", "value"])) : (v(!0), L(ne, { key: 1 }, be(n.value, (l) => (v(), w(_l, S({
      key: l.name,
      ref_for: !0
    }, { ...e, ...o.$attrs }, {
      name: l.name,
      value: l.value
    }), null, 16, ["name", "value"]))), 128));
  }
}), [Ku, Cb] = St("PopperRoot"), $b = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(t) {
    const e = O();
    return Cb({
      anchor: e,
      onAnchorChange: (a) => e.value = a
    }), (a, n) => _(a.$slots, "default");
  }
}), Bb = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = He(), o = Ku();
    return Sr(() => {
      o.onAnchorChange(e.reference ?? n.value);
    }), (r, l) => (v(), w(s(Se), {
      ref: s(a),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), kb = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const { forwardRef: e } = He();
    return (a, n) => (v(), w(s(Bb), {
      "as-child": "",
      reference: a.reference
    }, {
      default: f(() => [
        P(s(Se), S({
          ref: s(e),
          "as-child": a.asChild,
          as: a.as
        }, a.$attrs), {
          default: f(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as"])
      ]),
      _: 3
    }, 8, ["reference"]));
  }
});
function Db(t) {
  return t !== null;
}
function Sb(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      var x, $, k;
      const { placement: a, rects: n, middlewareData: o } = e, l = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, i = l ? 0 : t.arrowWidth, u = l ? 0 : t.arrowHeight, [c, d] = hr(a), p = { start: "0%", center: "50%", end: "100%" }[d], g = ((($ = o.arrow) == null ? void 0 : $.x) ?? 0) + i / 2, m = (((k = o.arrow) == null ? void 0 : k.y) ?? 0) + u / 2;
      let h = "", y = "";
      return c === "bottom" ? (h = l ? p : `${g}px`, y = `${-u}px`) : c === "top" ? (h = l ? p : `${g}px`, y = `${n.floating.height + u}px`) : c === "right" ? (h = `${-u}px`, y = l ? p : `${m}px`) : c === "left" && (h = `${n.floating.width + u}px`, y = l ? p : `${m}px`), { data: { x: h, y } };
    }
  };
}
function hr(t) {
  const [e, a = "center"] = t.split("-");
  return [e, a];
}
function Eb(t) {
  const e = O(), a = C(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.width) ?? 0;
  }), n = C(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.height) ?? 0;
  });
  return ce(() => {
    const o = na(t);
    if (o) {
      e.value = { width: o.offsetWidth, height: o.offsetHeight };
      const r = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const i = l[0];
        let u, c;
        if ("borderBoxSize" in i) {
          const d = i.borderBoxSize, p = Array.isArray(d) ? d[0] : d;
          u = p.inlineSize, c = p.blockSize;
        } else
          u = o.offsetWidth, c = o.offsetHeight;
        e.value = { width: u, height: c };
      });
      return r.observe(o, { box: "border-box" }), () => r.unobserve(o);
    } else
      e.value = void 0;
  }), {
    width: a,
    height: n
  };
}
const Pb = {
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
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [_1, Ob] = St("PopperContent"), Ab = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Dr({
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
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Pb
  }),
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Ku(), { forwardRef: r, currentElement: l } = He(), i = O(), u = O(), { width: c, height: d } = Eb(u), p = C(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), g = C(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = C(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), h = C(() => ({
      padding: g.value,
      boundary: m.value.filter(Db),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), y = Ty(() => [
      gi({
        mainAxis: a.sideOffset + d.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && Gn({
        ...h.value
      }),
      a.avoidCollisions && yi({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? _i() : void 0,
        ...h.value
      }),
      !a.prioritizePosition && a.avoidCollisions && Gn({
        ...h.value
      }),
      bi({
        ...h.value,
        apply: ({ elements: T, rects: F, availableWidth: j, availableHeight: W }) => {
          const { width: z, height: Q } = F.reference, ie = T.floating.style;
          ie.setProperty(
            "--reka-popper-available-width",
            `${j}px`
          ), ie.setProperty(
            "--reka-popper-available-height",
            `${W}px`
          ), ie.setProperty(
            "--reka-popper-anchor-width",
            `${z}px`
          ), ie.setProperty(
            "--reka-popper-anchor-height",
            `${Q}px`
          );
        }
      }),
      u.value && xi({ element: u.value, padding: a.arrowPadding }),
      Sb({
        arrowWidth: c.value,
        arrowHeight: d.value
      }),
      a.hideWhenDetached && wi({ strategy: "referenceHidden", ...h.value })
    ]), x = C(() => a.reference ?? o.anchor.value), { floatingStyles: $, placement: k, isPositioned: B, middlewareData: E } = $i(
      x,
      i,
      {
        strategy: a.positionStrategy,
        placement: p,
        whileElementsMounted: (...T) => hi(...T, {
          layoutShift: !a.disableUpdateOnLayoutShift,
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: y
      }
    ), D = C(
      () => hr(k.value)[0]
    ), I = C(
      () => hr(k.value)[1]
    );
    Sr(() => {
      B.value && n("placed");
    });
    const M = C(
      () => {
        var T;
        return ((T = E.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
      }
    ), K = O("");
    _e(() => {
      l.value && (K.value = window.getComputedStyle(l.value).zIndex);
    });
    const R = C(() => {
      var T;
      return ((T = E.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), A = C(() => {
      var T;
      return ((T = E.value.arrow) == null ? void 0 : T.y) ?? 0;
    });
    return Ob({
      placedSide: D,
      onArrowChange: (T) => u.value = T,
      arrowX: R,
      arrowY: A,
      shouldHideArrow: M
    }), (T, F) => {
      var j, W, z;
      return v(), L("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: ut({
          ...s($),
          transform: s(B) ? s($).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: K.value,
          "--reka-popper-transform-origin": [
            (j = s(E).transformOrigin) == null ? void 0 : j.x,
            (W = s(E).transformOrigin) == null ? void 0 : W.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((z = s(E).hide) == null ? void 0 : z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        P(s(Se), S({ ref: s(r) }, T.$attrs, {
          "as-child": a.asChild,
          as: T.as,
          "data-side": D.value,
          "data-align": I.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(B) ? void 0 : "none"
          }
        }), {
          default: f(() => [
            _(T.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
function Mb(t) {
  const e = C(() => s(t)), a = C(() => new Intl.Collator("en", { usage: "search", ...e.value }));
  return {
    startsWith: (l, i) => i.length === 0 ? !0 : (l = l.normalize("NFC"), i = i.normalize("NFC"), a.value.compare(l.slice(0, i.length), i) === 0),
    endsWith: (l, i) => i.length === 0 ? !0 : (l = l.normalize("NFC"), i = i.normalize("NFC"), a.value.compare(l.slice(-i.length), i) === 0),
    contains: (l, i) => {
      if (i.length === 0)
        return !0;
      l = l.normalize("NFC"), i = i.normalize("NFC");
      let u = 0;
      const c = i.length;
      for (; u + c <= l.length; u++) {
        const d = l.slice(u, u + c);
        if (a.value.compare(i, d) === 0)
          return !0;
      }
      return !1;
    }
  };
}
function Tb(t, e, a) {
  return t === void 0 ? !1 : Array.isArray(t) ? t.some((n) => Ha(n, e, a)) : Ha(t, e, a);
}
function Ha(t, e, a) {
  return t === void 0 || e === void 0 ? !1 : typeof t == "string" ? t === e : typeof a == "function" ? a(t, e) : typeof a == "string" ? (t == null ? void 0 : t[a]) === (e == null ? void 0 : e[a]) : vr(t, e);
}
function Ib(t) {
  const e = Fu("", 1e3);
  return {
    search: e,
    handleTypeaheadSearch: (o, r) => {
      e.value = e.value + o;
      {
        const l = rb(), i = r.map((g) => {
          var m, h;
          return {
            ...g,
            textValue: ((m = g.value) == null ? void 0 : m.textValue) ?? ((h = g.ref.textContent) == null ? void 0 : h.trim()) ?? ""
          };
        }), u = i.find((g) => g.ref === l), c = i.map((g) => g.textValue), d = Rb(c, e.value, u == null ? void 0 : u.textValue), p = i.find((g) => g.textValue === d);
        return p && p.ref.focus(), p == null ? void 0 : p.ref;
      }
    },
    resetTypeahead: () => {
      e.value = "";
    }
  };
}
function Vb(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
function Rb(t, e, a) {
  const o = e.length > 1 && Array.from(e).every((c) => c === e[0]) ? e[0] : e, r = a ? t.indexOf(a) : -1;
  let l = Vb(t, Math.max(r, 0));
  o.length === 1 && (l = l.filter((c) => c !== a));
  const u = l.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return u !== a ? u : void 0;
}
function Fb(t, e, a) {
  const n = t.findIndex((i) => vr(i, e)), o = t.findIndex((i) => vr(i, a));
  if (n === -1 || o === -1)
    return [];
  const [r, l] = [n, o].sort((i, u) => i - u);
  return t.slice(r, l + 1);
}
const [$o, Lb] = St("ListboxRoot"), Nb = /* @__PURE__ */ b({
  __name: "ListboxRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    multiple: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {},
    disabled: { type: Boolean },
    selectionBehavior: { default: "toggle" },
    highlightOnHover: { type: Boolean },
    by: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "highlight", "entryFocus", "leave"],
  setup(t, { expose: e, emit: a }) {
    const n = t, o = a, { multiple: r, highlightOnHover: l, orientation: i, disabled: u, selectionBehavior: c, dir: d } = he(n), { getItems: p } = Ds({ isProvider: !0 }), { handleTypeaheadSearch: g } = Ib(), { primitiveElement: m, currentElement: h } = Nt(), y = gb(), x = Nu(d), $ = yb(h), k = O(), B = O(!1), E = O(!0), D = Qa(n, "modelValue", o, {
      defaultValue: n.defaultValue ?? (r.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    });
    function I(J) {
      if (B.value = !0, n.multiple) {
        const te = Array.isArray(D.value) ? [...D.value] : [], le = te.findIndex((ee) => Ha(ee, J, n.by));
        n.selectionBehavior === "toggle" ? (le === -1 ? te.push(J) : te.splice(le, 1), D.value = te) : (D.value = [J], k.value = J);
      } else
        n.selectionBehavior === "toggle" && Ha(D.value, J, n.by) ? D.value = void 0 : D.value = J;
      setTimeout(() => {
        B.value = !1;
      }, 1);
    }
    const M = O(null), K = O(null), R = O(!1), A = O(!1), T = Vn(), F = Vn(), j = Vn();
    function W() {
      return p().map((J) => J.ref).filter((J) => J.dataset.disabled !== "");
    }
    function z(J, te = !0) {
      if (!J)
        return;
      M.value = J, E.value && M.value.focus(), te && M.value.scrollIntoView({ block: "nearest" });
      const le = p().find((ee) => ee.ref === J);
      o("highlight", le);
    }
    function Q(J) {
      if (R.value)
        j.trigger(J);
      else {
        const te = p().find((le) => Ha(le.value, J, n.by));
        te && (M.value = te.ref, z(te.ref));
      }
    }
    function ie(J) {
      M.value && M.value.isConnected && (J.preventDefault(), J.stopPropagation(), A.value || M.value.click());
    }
    function ye(J) {
      if (E.value) {
        if (B.value = !0, R.value)
          F.trigger(J);
        else {
          const te = J.altKey || J.ctrlKey || J.metaKey;
          if (te && J.key === "a" && r.value) {
            const le = p(), ee = le.map((xe) => xe.value);
            D.value = [...ee], J.preventDefault(), z(le[le.length - 1].ref);
          } else if (!te) {
            const le = g(J.key, p());
            le && z(le);
          }
        }
        setTimeout(() => {
          B.value = !1;
        }, 1);
      }
    }
    function Y() {
      A.value = !0;
    }
    function oe() {
      requestAnimationFrame(() => {
        A.value = !1;
      });
    }
    function ve() {
      ae(() => {
        const J = new KeyboardEvent("keydown", { key: "PageUp" });
        Qe(J);
      });
    }
    function Ve(J) {
      const te = M.value;
      te != null && te.isConnected && (K.value = te), M.value = null, o("leave", J);
    }
    function je(J) {
      var le, ee;
      const te = new CustomEvent("listbox.entryFocus", { bubbles: !1, cancelable: !0 });
      if ((le = J.currentTarget) == null || le.dispatchEvent(te), o("entryFocus", te), !te.defaultPrevented)
        if (K.value)
          z(K.value);
        else {
          const xe = (ee = W()) == null ? void 0 : ee[0];
          z(xe);
        }
    }
    function Qe(J) {
      const te = _b(J, i.value, x.value);
      if (!te)
        return;
      let le = W();
      if (M.value) {
        if (te === "last")
          le.reverse();
        else if (te === "prev" || te === "next") {
          te === "prev" && le.reverse();
          const ee = le.indexOf(M.value);
          le = le.slice(ee + 1);
        }
        ot(J, le[0]);
      }
      if (le.length) {
        const ee = !M.value && te === "prev" ? le.length - 1 : 0;
        z(le[ee]);
      }
      if (R.value)
        return F.trigger(J);
    }
    function ot(J, te) {
      var ee;
      if (!(R.value || n.selectionBehavior !== "replace" || !r.value || !Array.isArray(D.value) || (J.altKey || J.ctrlKey || J.metaKey) && !J.shiftKey) && J.shiftKey) {
        const xe = p().filter((Ut) => Ut.ref.dataset.disabled !== "");
        let Re = (ee = xe.find((Ut) => Ut.ref === te)) == null ? void 0 : ee.value;
        if (J.key === y.END ? Re = xe[xe.length - 1].value : J.key === y.HOME && (Re = xe[0].value), !Re || !k.value)
          return;
        const Wt = Fb(xe.map((Ut) => Ut.value), k.value, Re);
        D.value = Wt;
      }
    }
    async function Pt(J) {
      if (await ae(), R.value)
        T.trigger(J);
      else {
        const te = W(), le = te.find((ee) => ee.dataset.state === "checked");
        le ? z(le) : te.length && z(te[0]);
      }
    }
    return X(D, () => {
      B.value || ae(() => {
        Pt();
      });
    }, { immediate: !0, deep: !0 }), e({
      highlightedElement: M,
      highlightItem: Q,
      highlightFirstItem: ve,
      highlightSelected: Pt,
      getItems: p
    }), Lb({
      modelValue: D,
      // @ts-expect-error ignoring
      onValueChange: I,
      multiple: r,
      orientation: i,
      dir: x,
      disabled: u,
      highlightOnHover: l,
      highlightedElement: M,
      isVirtual: R,
      virtualFocusHook: T,
      virtualKeydownHook: F,
      virtualHighlightHook: j,
      by: n.by,
      firstValue: k,
      selectionBehavior: c,
      focusable: E,
      onLeave: Ve,
      onEnter: je,
      changeHighlight: z,
      onKeydownEnter: ie,
      onKeydownNavigation: Qe,
      onKeydownTypeAhead: ye,
      onCompositionStart: Y,
      onCompositionEnd: oe,
      highlightFirstItem: ve
    }), (J, te) => (v(), w(s(Se), {
      ref_key: "primitiveElement",
      ref: m,
      as: J.as,
      "as-child": J.asChild,
      dir: s(x),
      "data-disabled": s(u) ? "" : void 0,
      onPointerleave: Ve,
      onFocusout: te[0] || (te[0] = async (le) => {
        const ee = le.relatedTarget || le.target;
        await ae(), M.value && s(h) && !s(h).contains(ee) && Ve(le);
      })
    }, {
      default: f(() => [
        _(J.$slots, "default", { modelValue: s(D) }),
        s($) && J.name ? (v(), w(s(xb), {
          key: 0,
          name: J.name,
          value: s(D),
          disabled: s(u),
          required: J.required
        }, null, 8, ["name", "value", "disabled", "required"])) : re("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir", "data-disabled"]));
  }
}), [Et, zb] = St("ComboboxRoot"), Wb = /* @__PURE__ */ b({
  __name: "ComboboxRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    resetSearchTermOnBlur: { type: Boolean, default: !0 },
    resetSearchTermOnSelect: { type: Boolean, default: !0 },
    ignoreFilter: { type: Boolean },
    modelValue: {},
    defaultValue: {},
    multiple: { type: Boolean },
    dir: {},
    disabled: { type: Boolean },
    highlightOnHover: { type: Boolean },
    by: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "highlight", "update:open"],
  setup(t, { expose: e, emit: a }) {
    var F, j, W;
    const n = t, o = a, { primitiveElement: r, currentElement: l } = Nt(), { multiple: i, disabled: u, ignoreFilter: c, resetSearchTermOnSelect: d, dir: p } = he(n), g = Nu(p), m = Qa(n, "modelValue", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? (i.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    }), h = Qa(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    async function y(z) {
      var Q, ie;
      h.value = z, R.search = "", z ? (await ae(), (Q = r.value) == null || Q.highlightSelected(), $.value = !0) : $.value = !1, (ie = B.value) == null || ie.focus(), setTimeout(() => {
        !z && n.resetSearchTermOnBlur && x.trigger();
      }, 1);
    }
    const x = Vn(), $ = O(!1), k = O(!1), B = O(), E = O(), D = C(() => {
      var z;
      return ((z = r.value) == null ? void 0 : z.highlightedElement) ?? void 0;
    }), I = O(/* @__PURE__ */ new Map()), M = O(/* @__PURE__ */ new Map()), { contains: K } = Mb({ sensitivity: "base" }), R = ro({
      search: "",
      filtered: {
        /** The count of all visible items. */
        count: 0,
        /** Map from visible item id to its search score. */
        items: /* @__PURE__ */ new Map(),
        /** Set of groups with at least one visible item. */
        groups: /* @__PURE__ */ new Set()
      }
    });
    function A() {
      if (!R.search || n.ignoreFilter || k.value) {
        R.filtered.count = I.value.size;
        return;
      }
      R.filtered.groups = /* @__PURE__ */ new Set();
      let z = 0;
      for (const [Q, ie] of I.value) {
        const ye = K(ie, R.search);
        R.filtered.items.set(Q, ye ? 1 : 0), ye && z++;
      }
      for (const [Q, ie] of M.value)
        for (const ye of ie)
          if (R.filtered.items.get(ye) > 0) {
            R.filtered.groups.add(Q);
            break;
          }
      R.filtered.count = z;
    }
    X([() => R.search, () => I.value.size], () => {
      A();
    }, { immediate: !0 }), X(() => h.value, () => {
      ae(() => {
        h.value && A();
      });
    }, { flush: "post" });
    const T = Ee();
    return ce(() => {
      var z, Q, ie;
      T != null && T.exposed && (T.exposed.highlightItem = (z = r.value) == null ? void 0 : z.highlightItem, T.exposed.highlightFirstItem = (Q = r.value) == null ? void 0 : Q.highlightFirstItem, T.exposed.highlightSelected = (ie = r.value) == null ? void 0 : ie.highlightSelected);
    }), e({
      filtered: C(() => R.filtered),
      highlightedElement: D,
      highlightItem: (F = r.value) == null ? void 0 : F.highlightItem,
      highlightFirstItem: (j = r.value) == null ? void 0 : j.highlightFirstItem,
      highlightSelected: (W = r.value) == null ? void 0 : W.highlightSelected
    }), zb({
      modelValue: m,
      multiple: i,
      disabled: u,
      open: h,
      onOpenChange: y,
      contentId: "",
      isUserInputted: $,
      isVirtual: k,
      inputElement: B,
      highlightedElement: D,
      onInputElementChange: (z) => B.value = z,
      triggerElement: E,
      onTriggerElementChange: (z) => E.value = z,
      parentElement: l,
      resetSearchTermOnSelect: d,
      onResetSearchTerm: x.on,
      allItems: I,
      allGroups: M,
      filterState: R,
      ignoreFilter: c
    }), (z, Q) => (v(), w(s($b), null, {
      default: f(() => [
        P(s(Nb), S({
          ref_key: "primitiveElement",
          ref: r
        }, z.$attrs, {
          modelValue: s(m),
          "onUpdate:modelValue": Q[0] || (Q[0] = (ie) => zt(m) ? m.value = ie : null),
          style: {
            pointerEvents: s(h) ? "auto" : void 0
          },
          as: z.as,
          "as-child": z.asChild,
          dir: s(g),
          multiple: s(i),
          name: z.name,
          required: z.required,
          disabled: s(u),
          "highlight-on-hover": !0,
          by: n.by,
          onHighlight: Q[1] || (Q[1] = (ie) => o("highlight", ie))
        }), {
          default: f(() => [
            _(z.$slots, "default", {
              open: s(h),
              modelValue: s(m)
            })
          ]),
          _: 3
        }, 16, ["modelValue", "style", "as", "as-child", "dir", "multiple", "name", "required", "disabled", "by"])
      ]),
      _: 3
    }));
  }
}), Ub = /* @__PURE__ */ b({
  __name: "ListboxContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const { CollectionSlot: e } = Ds(), a = $o(), n = Fu(!1, 10);
    return (o, r) => (v(), w(s(e), null, {
      default: f(() => [
        P(s(Se), {
          role: "listbox",
          as: o.as,
          "as-child": o.asChild,
          tabindex: s(a).focusable.value ? s(a).highlightedElement.value ? "-1" : "0" : void 0,
          "aria-orientation": s(a).orientation.value,
          "aria-multiselectable": !!s(a).multiple.value,
          "data-orientation": s(a).orientation.value,
          onMousedown: r[0] || (r[0] = $e((l) => n.value = !0, ["left"])),
          onFocus: r[1] || (r[1] = (l) => {
            s(n) || s(a).onEnter(l);
          }),
          onKeydown: [
            r[2] || (r[2] = Me($e((l) => {
              s(a).focusable.value && s(a).onKeydownNavigation(l);
            }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])),
            Me(s(a).onKeydownEnter, ["enter"]),
            s(a).onKeydownTypeAhead
          ]
        }, {
          default: f(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "tabindex", "aria-orientation", "aria-multiselectable", "data-orientation", "onKeydown"])
      ]),
      _: 3
    }));
  }
}), [x1, Kb] = St("ComboboxContent"), Hb = /* @__PURE__ */ b({
  __name: "ComboboxContentImpl",
  props: {
    position: { default: "inline" },
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
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(t, { emit: e }) {
    const a = t, n = e, { position: o } = he(a), r = Et(), { forwardRef: l, currentElement: i } = He();
    vb(a.bodyLock), db(r.parentElement);
    const u = C(() => a.position === "popper" ? a : {}), c = ks(u.value), d = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    Kb({ position: o });
    const p = O(!1);
    return ce(() => {
      r.inputElement.value && (p.value = i.value.contains(r.inputElement.value), p.value && r.inputElement.value.focus());
    }), ze(() => {
      var g;
      p.value && ((g = r.triggerElement.value) == null || g.focus());
    }), (g, m) => (v(), w(s(Ub), { "as-child": "" }, {
      default: f(() => [
        P(s(ob), {
          "as-child": "",
          "disable-outside-pointer-events": g.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (h) => s(r).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (h) => {
            var y;
            (y = s(r).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("focusOutside", h);
          }),
          onInteractOutside: m[2] || (m[2] = (h) => n("interactOutside", h)),
          onEscapeKeyDown: m[3] || (m[3] = (h) => n("escapeKeyDown", h)),
          onPointerDownOutside: m[4] || (m[4] = (h) => {
            var y;
            (y = s(r).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("pointerDownOutside", h);
          })
        }, {
          default: f(() => [
            (v(), w(Ne(s(o) === "popper" ? s(Ab) : s(Se)), S({ ...g.$attrs, ...s(c) }, {
              id: s(r).contentId,
              ref: s(l),
              "data-state": s(r).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...s(o) === "popper" ? d : {}
              }
            }), {
              default: f(() => [
                _(g.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }));
  }
}), C1 = /* @__PURE__ */ b({
  __name: "ComboboxCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    He();
    const a = Et();
    function n() {
      a.filterState.search = "", a.inputElement.value && (a.inputElement.value.value = "", a.inputElement.value.focus());
    }
    return (o, r) => (v(), w(s(Se), S({
      type: o.as === "button" ? "button" : void 0
    }, e, {
      tabindex: "-1",
      onClick: n
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), jb = /* @__PURE__ */ b({
  __name: "ComboboxContent",
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
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(t, { emit: e }) {
    const o = vn(t, e), { forwardRef: r } = He(), l = Et();
    return l.contentId || (l.contentId = Ra(void 0, "reka-combobox-content")), (i, u) => (v(), w(s(Xy), {
      present: i.forceMount || s(l).open.value
    }, {
      default: f(() => [
        P(Hb, S({ ...s(o), ...i.$attrs }, { ref: s(r) }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Gb = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Et(), n = C(
      () => a.ignoreFilter.value ? a.allItems.value.size === 0 : !!a.filterState.search && a.filterState.filtered.count === 0
    );
    return (o, r) => n.value ? (v(), w(s(Se), H(S({ key: 0 }, e)), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          r[0] || (r[0] = Z("No options"))
        ])
      ]),
      _: 3
    }, 16)) : re("", !0);
  }
}), [$1, qb] = St("ListboxGroup"), Yb = /* @__PURE__ */ b({
  __name: "ListboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Ra(void 0, "reka-listbox-group");
    return qb({ id: a }), (n, o) => (v(), w(s(Se), S({ role: "group" }, e, { "aria-labelledby": s(a) }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), [Hu, Jb] = St("ComboboxGroup"), Qb = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Ra(void 0, "reka-combobox-group"), n = Et(), o = C(() => n.ignoreFilter.value ? !0 : n.filterState.search ? n.filterState.filtered.groups.has(a) : !0), r = Jb({
      id: a,
      labelId: ""
    });
    return ce(() => {
      n.allGroups.value.has(a) || n.allGroups.value.set(a, /* @__PURE__ */ new Set());
    }), ze(() => {
      n.allGroups.value.delete(a);
    }), (l, i) => (v(), w(s(Yb), S({
      id: s(a),
      "aria-labelledby": s(r).labelId
    }, e, {
      hidden: o.value ? void 0 : !0
    }), {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "hidden"]));
  }
}), Xb = /* @__PURE__ */ b({
  __name: "ListboxFilter",
  props: {
    modelValue: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, o = Qa(a, "modelValue", e, {
      defaultValue: "",
      passive: a.modelValue === void 0
    }), r = $o(), { primitiveElement: l, currentElement: i } = Nt(), u = C(() => a.disabled || r.disabled.value || !1), c = O();
    return Al(() => {
      var d;
      return c.value = (d = r.highlightedElement.value) == null ? void 0 : d.id;
    }), ce(() => {
      r.focusable.value = !1, setTimeout(() => {
        var d;
        a.autoFocus && ((d = i.value) == null || d.focus());
      }, 1);
    }), ze(() => {
      r.focusable.value = !0;
    }), (d, p) => (v(), w(s(Se), {
      ref_key: "primitiveElement",
      ref: l,
      as: d.as,
      "as-child": d.asChild,
      value: s(o),
      disabled: u.value ? "" : void 0,
      "data-disabled": u.value ? "" : void 0,
      "aria-disabled": u.value ?? void 0,
      "aria-activedescendant": c.value,
      type: "text",
      onKeydown: [
        Me($e(s(r).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]),
        Me(s(r).onKeydownEnter, ["enter"])
      ],
      onInput: p[0] || (p[0] = (g) => {
        o.value = g.target.value, s(r).highlightFirstItem(g);
      }),
      onCompositionstart: s(r).onCompositionStart,
      onCompositionend: s(r).onCompositionEnd
    }, {
      default: f(() => [
        _(d.$slots, "default", { modelValue: s(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), Zb = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    displayValue: {},
    modelValue: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Et(), r = $o(), { primitiveElement: l, currentElement: i } = Nt(), u = Qa(a, "modelValue", n, {
      passive: a.modelValue === void 0
    });
    ce(() => {
      i.value && o.onInputElementChange(i.value);
    });
    function c(g) {
      o.open.value || o.onOpenChange(!0);
    }
    function d(g) {
      const m = g.target;
      o.open.value ? o.filterState.search = m.value : (o.onOpenChange(!0), ae(() => {
        m.value && (o.filterState.search = m.value, r.highlightFirstItem(g));
      }));
    }
    function p() {
      const g = o.modelValue.value;
      a.displayValue ? u.value = a.displayValue(g) : !o.multiple.value && g && !Array.isArray(g) && typeof g != "object" ? u.value = g.toString() : u.value = "", ae(() => {
        u.value = u.value;
      });
    }
    return o.onResetSearchTerm(() => {
      p();
    }), X(o.modelValue, async () => {
      !o.isUserInputted.value && o.resetSearchTermOnSelect.value && p();
    }, { immediate: !0, deep: !0 }), X(
      () => a.modelValue,
      () => {
        a.modelValue !== void 0 && (o.filterState.search = a.modelValue);
      }
    ), (g, m) => (v(), w(s(Xb), {
      ref_key: "primitiveElement",
      ref: l,
      modelValue: s(u),
      "onUpdate:modelValue": m[0] || (m[0] = (h) => zt(u) ? u.value = h : null),
      as: g.as,
      "as-child": g.asChild,
      "auto-focus": g.autoFocus,
      "aria-expanded": s(o).open.value,
      "aria-controls": s(o).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: d,
      onKeydown: Me($e(c, ["prevent"]), ["down", "up"])
    }, {
      default: f(() => [
        _(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["modelValue", "as", "as-child", "auto-focus", "aria-expanded", "aria-controls", "onKeydown"]));
  }
}), e0 = "listbox.select", [t0, a0] = St("ListboxItem"), n0 = /* @__PURE__ */ b({
  __name: "ListboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Ra(void 0, "reka-listbox-item"), { CollectionItem: r } = Ds(), { forwardRef: l, currentElement: i } = He(), u = $o(), c = C(() => i.value === u.highlightedElement.value), d = C(() => Tb(u.modelValue.value, a.value, u.by)), p = C(() => u.disabled.value || a.disabled);
    async function g(h) {
      n("select", h), !(h != null && h.defaultPrevented) && !p.value && h && (u.onValueChange(a.value), u.changeHighlight(i.value));
    }
    function m(h) {
      const y = { originalEvent: h, value: a.value };
      Bs(e0, g, y);
    }
    return a0({
      isSelected: d
    }), (h, y) => (v(), w(s(r), { value: h.value }, {
      default: f(() => [
        gd([c.value, d.value], () => P(s(Se), S({ id: s(o) }, h.$attrs, {
          ref: s(l),
          role: "option",
          tabindex: s(u).focusable.value ? c.value ? "0" : "-1" : -1,
          "aria-selected": d.value,
          as: h.as,
          "as-child": h.asChild,
          disabled: p.value ? "" : void 0,
          "data-disabled": p.value ? "" : void 0,
          "data-highlighted": c.value ? "" : void 0,
          "data-state": d.value ? "checked" : "unchecked",
          onClick: m,
          onKeydown: Me($e(m, ["prevent"]), ["space"]),
          onPointermove: y[0] || (y[0] = (x) => {
            s(u).highlightedElement.value !== s(i) && (s(u).highlightOnHover.value ? s(u).changeHighlight(s(i), !1) : s(u).focusable.value || s(u).changeHighlight(s(i), !1));
          })
        }), {
          default: f(() => [
            _(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"]), y, 1)
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), o0 = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    textValue: {},
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Ra(void 0, "reka-combobox-item"), r = Et(), l = Hu(null), { primitiveElement: i, currentElement: u } = Nt();
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    const c = C(() => {
      if (r.isVirtual.value || r.ignoreFilter.value || !r.filterState.search)
        return !0;
      {
        const d = r.filterState.filtered.items.get(o);
        return d === void 0 ? !0 : d > 0;
      }
    });
    return ce(() => {
      var p;
      r.allItems.value.set(o, a.textValue || u.value.textContent || u.value.innerText);
      const d = l == null ? void 0 : l.id;
      d && (r.allGroups.value.has(d) ? (p = r.allGroups.value.get(d)) == null || p.add(o) : r.allGroups.value.set(d, /* @__PURE__ */ new Set([o])));
    }), ze(() => {
      r.allItems.value.delete(o);
    }), (d, p) => c.value ? (v(), w(s(n0), S({ key: 0 }, a, {
      id: s(o),
      ref_key: "primitiveElement",
      ref: i,
      disabled: s(r).disabled.value || d.disabled,
      onSelect: p[0] || (p[0] = (g) => {
        n("select", g), !g.defaultPrevented && !s(r).multiple.value && !d.disabled && !s(r).disabled.value && (g.preventDefault(), s(r).onOpenChange(!1), s(r).modelValue.value = a.value);
      })
    }), {
      default: f(() => [
        _(d.$slots, "default", {}, () => [
          Z(se(d.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["id", "disabled"])) : re("", !0);
  }
}), r0 = /* @__PURE__ */ b({
  __name: "ListboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t;
    He();
    const a = t0();
    return (n, o) => s(a).isSelected.value ? (v(), w(s(Se), S({
      key: 0,
      "aria-hidden": "true"
    }, e), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : re("", !0);
  }
}), B1 = /* @__PURE__ */ b({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(r0), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), s0 = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    He();
    const a = Hu({ id: "", labelId: "" });
    return a.labelId || (a.labelId = Ra(void 0, "reka-combobox-group-label")), (n, o) => (v(), w(s(Se), S(e, {
      id: s(a).labelId
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), l0 = /* @__PURE__ */ b({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(hb), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), i0 = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return He(), (a, n) => (v(), w(s(Se), S(e, { "aria-hidden": "true" }), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), k1 = /* @__PURE__ */ b({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = He(), o = Et(), r = C(() => e.disabled || o.disabled.value || !1);
    return ce(() => {
      n.value && o.onTriggerElementChange(n.value);
    }), (l, i) => (v(), w(s(Se), S(e, {
      ref: s(a),
      type: l.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": s(o).open.value,
      "aria-controls": s(o).contentId,
      "data-state": s(o).open.value ? "open" : "closed",
      disabled: r.value,
      "data-disabled": r.value ? "" : void 0,
      "aria-disabled": r.value ?? void 0,
      onClick: i[0] || (i[0] = (u) => s(o).onOpenChange(!s(o).open.value))
    }), {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
  }
});
function u0(t) {
  const e = Co({
    nonce: O()
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.nonce) == null ? void 0 : a.value);
  });
}
const d0 = /* @__PURE__ */ b({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a } = He(), { nonce: n } = he(e), o = u0(n), r = Et();
    return (l, i) => (v(), L(ne, null, [
      P(s(Se), S({ ...l.$attrs, ...e }, {
        ref: s(a),
        "data-reka-combobox-viewport": "",
        role: "presentation",
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: s(r).isVirtual.value ? void 0 : 1,
          overflow: "auto"
        }
      }), {
        default: f(() => [
          _(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      P(s(Se), {
        as: "style",
        nonce: s(o)
      }, {
        default: f(() => i[0] || (i[0] = [
          Z(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")
        ])),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), D1 = /* @__PURE__ */ b({
  __name: "Combobox",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    resetSearchTermOnBlur: { type: Boolean },
    resetSearchTermOnSelect: { type: Boolean },
    ignoreFilter: { type: Boolean },
    modelValue: {},
    defaultValue: {},
    multiple: { type: Boolean },
    dir: {},
    disabled: { type: Boolean },
    highlightOnHover: { type: Boolean },
    by: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "highlight", "update:open"],
  setup(t, { emit: e }) {
    const o = vn(t, e);
    return (r, l) => (v(), w(s(Wb), H(G(s(o))), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), S1 = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ks(a);
    return (o, r) => (v(), w(s(kb), S(s(n), {
      class: s(V)("w-[200px]", e.class)
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), E1 = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Gb), S(a.value, {
      class: s(V)("py-6 text-center text-sm", e.class)
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), P1 = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Qb), S(a.value, {
      class: s(V)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e.class)
    }), {
      default: f(() => [
        n.heading ? (v(), w(s(s0), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: f(() => [
            Z(se(n.heading), 1)
          ]),
          _: 1
        })) : re("", !0),
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), O1 = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    displayValue: { type: Function },
    modelValue: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = vn(o, n);
    return (l, i) => (v(), w(s(Zb), S(s(r), {
      class: s(V)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", a.class)
    }), {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), A1 = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    textValue: {},
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = vn(o, n);
    return (l, i) => (v(), w(s(o0), S(s(r), {
      class: s(V)("relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0", a.class)
    }), {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), M1 = /* @__PURE__ */ b({
  __name: "ComboboxList",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
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
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = vn(o, n);
    return (l, i) => (v(), w(s(l0), null, {
      default: f(() => [
        P(s(jb), S(s(r), {
          class: s(V)("z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a.class)
        }), {
          default: f(() => [
            P(s(d0), null, {
              default: f(() => [
                _(l.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), T1 = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(i0), S(a.value, {
      class: s(V)("-mx-1 h-px bg-border", e.class)
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), c0 = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, I1 = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s(qi), S({
      class: s(V)("p-3", a.class)
    }, s(r)), {
      default: f(({ grid: u, weekDays: c }) => [
        P(s(Xu), null, {
          default: f(() => [
            P(s(f0)),
            P(s(Zu)),
            P(s(p0))
          ]),
          _: 1
        }),
        me("div", c0, [
          (v(!0), L(ne, null, be(u, (d) => (v(), w(s(qu), {
            key: d.value.toString()
          }, {
            default: f(() => [
              P(s(Ju), null, {
                default: f(() => [
                  P(s(Qn), null, {
                    default: f(() => [
                      (v(!0), L(ne, null, be(c, (p) => (v(), w(s(Qu), { key: p }, {
                        default: f(() => [
                          Z(se(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              P(s(Yu), null, {
                default: f(() => [
                  (v(!0), L(ne, null, be(d.rows, (p, g) => (v(), w(s(Qn), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), L(ne, null, be(p, (m) => (v(), w(s(ju), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          P(s(Gu), {
                            day: m,
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
}), ju = /* @__PURE__ */ b({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(av), S({
      class: s(V)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        e.class
      )
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gu = /* @__PURE__ */ b({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(uv), S({
      class: s(V)(
        s(aa)({ variant: "ghost" }),
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
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qu = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(tv), S({
      class: s(V)("w-full border-collapse space-y-1", e.class)
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yu = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(lv), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ju = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(sv), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qn = /* @__PURE__ */ b({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(iv), S({
      class: s(V)("flex", e.class)
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qu = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(nv), S({
      class: s(V)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xu = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(Zf), S({
      class: s(V)("relative flex w-full items-center justify-between pt-1", e.class)
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zu = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(ev), S({
      class: s(V)("text-text text-sm font-medium", e.class)
    }, s(n)), {
      default: f(({ headingValue: l }) => [
        _(o.$slots, "default", { headingValue: l }, () => [
          Z(se(l), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p0 = /* @__PURE__ */ b({
  __name: "CalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(ov), S({
      class: s(V)(
        s(aa)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: f(() => r[0] || (r[0] = [
        Z(" > ")
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
}), f0 = /* @__PURE__ */ b({
  __name: "CalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(rv), S({
      class: s(V)(
        s(aa)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: f(() => r[0] || (r[0] = [
        Z(" < ")
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
});
function v0(t) {
  return eo() ? (to(t), !0) : !1;
}
const Ko = /* @__PURE__ */ new WeakMap(), m0 = (...t) => {
  var e;
  const a = t[0], n = (e = Ee()) == null ? void 0 : e.proxy;
  if (n == null && !Vl())
    throw new Error("injectLocal must be called in setup");
  return n && Ko.has(n) && a in Ko.get(n) ? Ko.get(n)[a] : tn(...t);
}, h0 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const g0 = (t) => typeof t < "u", y0 = Object.prototype.toString, b0 = (t) => y0.call(t) === "[object Object]", w0 = () => {
};
function ed(...t) {
  if (t.length !== 1)
    return Cr(...t);
  const e = t[0];
  return typeof e == "function" ? Ca(kr(() => ({ get: e, set: w0 }))) : O(e);
}
function _0(t, e) {
  function a(...n) {
    return new Promise((o, r) => {
      Promise.resolve(t(() => e.apply(this, n), { fn: e, thisArg: this, args: n })).then(o).catch(r);
    });
  }
  return a;
}
const td = (t) => t();
function x0(t = td, e = {}) {
  const {
    initialState: a = "active"
  } = e, n = ed(a === "active");
  function o() {
    n.value = !1;
  }
  function r() {
    n.value = !0;
  }
  const l = (...i) => {
    n.value && t(...i);
  };
  return { isActive: Ca(n), pause: o, resume: r, eventFilter: l };
}
function xl(t) {
  return t.endsWith("rem") ? Number.parseFloat(t) * 16 : Number.parseFloat(t);
}
function Ho(t) {
  return Array.isArray(t) ? t : [t];
}
function C0(t) {
  return Ee();
}
function $0(t, e, a = {}) {
  const {
    eventFilter: n = td,
    ...o
  } = a;
  return X(
    t,
    _0(
      n,
      e
    ),
    o
  );
}
function B0(t, e, a = {}) {
  const {
    eventFilter: n,
    initialState: o = "active",
    ...r
  } = a, { eventFilter: l, pause: i, resume: u, isActive: c } = x0(n, { initialState: o });
  return { stop: $0(
    t,
    e,
    {
      ...r,
      eventFilter: l
    }
  ), pause: i, resume: u, isActive: c };
}
function ad(t, e = !0, a) {
  C0() ? ce(t, a) : e ? t() : ae(t);
}
function k0(t, e, a) {
  return X(
    t,
    e,
    {
      ...a,
      immediate: !0
    }
  );
}
const Xa = h0 ? window : void 0;
function nd(t) {
  var e;
  const a = Te(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
function Xn(...t) {
  const e = [], a = () => {
    e.forEach((i) => i()), e.length = 0;
  }, n = (i, u, c, d) => (i.addEventListener(u, c, d), () => i.removeEventListener(u, c, d)), o = C(() => {
    const i = Ho(Te(t[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = k0(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((c) => nd(c))) != null ? u : [Xa].filter((c) => c != null),
        Ho(Te(o.value ? t[1] : t[0])),
        Ho(s(o.value ? t[2] : t[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Te(o.value ? t[3] : t[2])
      ];
    },
    ([i, u, c, d]) => {
      if (a(), !(i != null && i.length) || !(u != null && u.length) || !(c != null && c.length))
        return;
      const p = b0(d) ? { ...d } : d;
      e.push(
        ...i.flatMap(
          (g) => u.flatMap(
            (m) => c.map((h) => n(g, m, h, p))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    r(), a();
  };
  return v0(a), l;
}
function D0() {
  const t = wt(!1), e = Ee();
  return e && ce(() => {
    t.value = !0;
  }, e), t;
}
function S0(t) {
  const e = D0();
  return C(() => (e.value, !!t()));
}
const E0 = Symbol("vueuse-ssr-width");
function P0() {
  const t = Vl() ? m0(E0, null) : null;
  return typeof t == "number" ? t : void 0;
}
function od(t, e = {}) {
  const { window: a = Xa, ssrWidth: n = P0() } = e, o = S0(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), r = wt(typeof n == "number"), l = wt(), i = wt(!1), u = (c) => {
    i.value = c.matches;
  };
  return _e(() => {
    if (r.value) {
      r.value = !o.value;
      const c = Te(t).split(",");
      i.value = c.some((d) => {
        const p = d.includes("not all"), g = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), m = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let h = !!(g || m);
        return g && h && (h = n >= xl(g[1])), m && h && (h = n <= xl(m[1])), p ? !h : h;
      });
      return;
    }
    o.value && (l.value = a.matchMedia(Te(t)), i.value = l.value.matches);
  }), Xn(l, "change", u, { passive: !0 }), C(() => i.value);
}
function O0(t) {
  return JSON.parse(JSON.stringify(t));
}
const Sn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, En = "__vueuse_ssr_handlers__", A0 = /* @__PURE__ */ M0();
function M0() {
  return En in Sn || (Sn[En] = Sn[En] || {}), Sn[En];
}
function rd(t, e) {
  return A0[t] || e;
}
function T0(t) {
  return od("(prefers-color-scheme: dark)", t);
}
function I0(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const V0 = {
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
}, Cl = "vueuse-storage";
function R0(t, e, a, n = {}) {
  var o;
  const {
    flush: r = "pre",
    deep: l = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: u = !0,
    mergeDefaults: c = !1,
    shallow: d,
    window: p = Xa,
    eventFilter: g,
    onError: m = (W) => {
      console.error(W);
    },
    initOnMounted: h
  } = n, y = (d ? wt : O)(typeof e == "function" ? e() : e), x = C(() => Te(t));
  if (!a)
    try {
      a = rd("getDefaultStorage", () => {
        var W;
        return (W = Xa) == null ? void 0 : W.localStorage;
      })();
    } catch (W) {
      m(W);
    }
  if (!a)
    return y;
  const $ = Te(e), k = I0($), B = (o = n.serializer) != null ? o : V0[k], { pause: E, resume: D } = B0(
    y,
    () => A(y.value),
    { flush: r, deep: l, eventFilter: g }
  );
  X(x, () => F(), { flush: r });
  let I = !1;
  const M = (W) => {
    h && !I || F(W);
  }, K = (W) => {
    h && !I || j(W);
  };
  p && i && (a instanceof Storage ? Xn(p, "storage", M, { passive: !0 }) : Xn(p, Cl, K)), h ? ad(() => {
    I = !0, F();
  }) : F();
  function R(W, z) {
    if (p) {
      const Q = {
        key: x.value,
        oldValue: W,
        newValue: z,
        storageArea: a
      };
      p.dispatchEvent(a instanceof Storage ? new StorageEvent("storage", Q) : new CustomEvent(Cl, {
        detail: Q
      }));
    }
  }
  function A(W) {
    try {
      const z = a.getItem(x.value);
      if (W == null)
        R(z, null), a.removeItem(x.value);
      else {
        const Q = B.write(W);
        z !== Q && (a.setItem(x.value, Q), R(z, Q));
      }
    } catch (z) {
      m(z);
    }
  }
  function T(W) {
    const z = W ? W.newValue : a.getItem(x.value);
    if (z == null)
      return u && $ != null && a.setItem(x.value, B.write($)), $;
    if (!W && c) {
      const Q = B.read(z);
      return typeof c == "function" ? c(Q, $) : k === "object" && !Array.isArray(Q) ? { ...$, ...Q } : Q;
    } else return typeof z != "string" ? z : B.read(z);
  }
  function F(W) {
    if (!(W && W.storageArea !== a)) {
      if (W && W.key == null) {
        y.value = $;
        return;
      }
      if (!(W && W.key !== x.value)) {
        E();
        try {
          (W == null ? void 0 : W.newValue) !== B.write(y.value) && (y.value = T(W));
        } catch (z) {
          m(z);
        } finally {
          W ? ae(D) : D();
        }
      }
    }
  }
  function j(W) {
    F(W.detail);
  }
  return y;
}
const F0 = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function L0(t = {}) {
  const {
    selector: e = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = Xa,
    storage: r,
    storageKey: l = "vueuse-color-scheme",
    listenToStorageChanges: i = !0,
    storageRef: u,
    emitAuto: c,
    disableTransition: d = !0
  } = t, p = {
    auto: "",
    light: "light",
    dark: "dark",
    ...t.modes || {}
  }, g = T0({ window: o }), m = C(() => g.value ? "dark" : "light"), h = u || (l == null ? ed(n) : R0(l, n, r, { window: o, listenToStorageChanges: i })), y = C(() => h.value === "auto" ? m.value : h.value), x = rd(
    "updateHTMLAttrs",
    (E, D, I) => {
      const M = typeof E == "string" ? o == null ? void 0 : o.document.querySelector(E) : nd(E);
      if (!M)
        return;
      const K = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set();
      let A = null;
      if (D === "class") {
        const F = I.split(/\s/g);
        Object.values(p).flatMap((j) => (j || "").split(/\s/g)).filter(Boolean).forEach((j) => {
          F.includes(j) ? K.add(j) : R.add(j);
        });
      } else
        A = { key: D, value: I };
      if (K.size === 0 && R.size === 0 && A === null)
        return;
      let T;
      d && (T = o.document.createElement("style"), T.appendChild(document.createTextNode(F0)), o.document.head.appendChild(T));
      for (const F of K)
        M.classList.add(F);
      for (const F of R)
        M.classList.remove(F);
      A && M.setAttribute(A.key, A.value), d && (o.getComputedStyle(T).opacity, document.head.removeChild(T));
    }
  );
  function $(E) {
    var D;
    x(e, a, (D = p[E]) != null ? D : E);
  }
  function k(E) {
    t.onChanged ? t.onChanged(E, $) : $(E);
  }
  X(y, k, { flush: "post", immediate: !0 }), ad(() => k(y.value));
  const B = C({
    get() {
      return c ? h.value : y.value;
    },
    set(E) {
      h.value = E;
    }
  });
  return Object.assign(B, { store: h, system: m, state: y });
}
function N0(t = {}) {
  const {
    valueDark: e = "dark",
    valueLight: a = ""
  } = t, n = L0({
    ...t,
    onChanged: (l, i) => {
      var u;
      t.onChanged ? (u = t.onChanged) == null || u.call(t, l === "dark", i, l) : i(l);
    },
    modes: {
      dark: e,
      light: a
    }
  }), o = C(() => n.system.value);
  return C({
    get() {
      return n.value === "dark";
    },
    set(l) {
      const i = l ? "dark" : "light";
      o.value === i ? n.value = "auto" : n.value = i;
    }
  });
}
function Ss(t, e, a, n = {}) {
  var o, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = Ee(), h = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let y = c;
  e || (e = "modelValue"), y = y || `update:${e.toString()}`;
  const x = (B) => i ? typeof i == "function" ? i(B) : O0(B) : B, $ = () => g0(t[e]) ? x(t[e]) : p, k = (B) => {
    g ? g(B) && h(y, B) : h(y, B);
  };
  if (u) {
    const B = $(), E = O(B);
    let D = !1;
    return X(
      () => t[e],
      (I) => {
        D || (D = !0, E.value = x(I), ae(() => D = !1));
      }
    ), X(
      E,
      (I) => {
        !D && (I !== t[e] || d) && k(I);
      },
      { deep: d }
    ), E;
  } else
    return C({
      get() {
        return $();
      },
      set(B) {
        k(B);
      }
    });
}
const gr = /* @__PURE__ */ b({
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
    const o = ue(t, e);
    return (r, l) => (v(), w(s(ch), H(G(s(o))), {
      default: f(({ open: i }) => [
        _(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), yr = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(Ih), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), br = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    open: { type: Boolean }
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(vh), S(s(n), {
      class: s(V)(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-start text-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        e.class
      )
    }), {
      default: f(() => [
        _(o.$slots, "default"),
        P(s(Vh), { "as-child": "" }, {
          default: f(() => [
            P(s(_s), {
              class: q(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wr = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s(mh), null, {
      default: f(() => [
        P(s(Ch), S({ ...s(r), ...l.$attrs }, {
          class: s(V)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: f(() => [
            P(s(W0)),
            P(s(Ah), {
              class: q(
                s(V)(
                  "p-1",
                  l.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: f(() => [
                _(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            P(s(U0))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), V1 = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Ph), S({
      class: s(V)("w-full p-1", e.class)
    }, a.value), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), z0 = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, _r = /* @__PURE__ */ b({
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
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(kh), S(s(n), {
      class: s(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        e.class
      )
    }), {
      default: f(() => [
        me("span", z0, [
          P(s(Dh), null, {
            default: f(() => [
              P(s(ws), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        P(s(vu), null, {
          default: f(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), R1 = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(vu), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), F1 = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(Oh), {
      class: q(s(V)("py-1.5 pl-8 pr-2 text-sm font-semibold", e.class))
    }, {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), L1 = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s($h), S(a.value, {
      class: s(V)("bg-muted -mx-1 my-1 h-px", e.class)
    }), null, 16, ["class"]));
  }
}), W0 = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(Mh), S(s(n), {
      class: s(V)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          P(s(yy), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U0 = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(Th), S(s(n), {
      class: s(V)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          P(s(_s), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), K0 = { class: "flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, H0 = /* @__PURE__ */ b({
  __name: "CalendarWithSelect",
  props: {
    modelValue: { default: void 0 },
    multiple: { type: Boolean },
    defaultValue: {},
    defaultPlaceholder: {},
    placeholder: { default() {
      return Fn(Ct());
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
    const a = t, n = e, o = C(() => {
      const { class: u, placeholder: c, ...d } = a;
      return d;
    }), r = Ss(a, "modelValue", n, {
      passive: !0,
      defaultValue: Fn(Ct())
    }), l = ue(o, n), i = Ti("en");
    return (u, c) => (v(), w(s(qi), S({
      placeholder: s(r),
      "onUpdate:placeholder": c[2] || (c[2] = (d) => zt(r) ? r.value = d : null)
    }, s(l), {
      class: s(V)("rounded-md border p-3", a.class)
    }), {
      default: f(({ date: d, grid: p, weekDays: g }) => [
        P(s(Xu), null, {
          default: f(() => [
            P(s(Zu), { class: "flex w-full items-center justify-between gap-2" }, {
              default: f(() => [
                P(s(gr), {
                  "default-value": s(r).month.toString(),
                  "onUpdate:modelValue": c[0] || (c[0] = (m) => {
                    var h;
                    !m || !s(r) || Number(m) !== ((h = s(r)) == null ? void 0 : h.month) && (r.value = s(r).set({
                      month: Number(m)
                    }));
                  })
                }, {
                  default: f(() => [
                    P(s(br), {
                      "aria-label": "Select month",
                      class: "w-[60%]"
                    }, {
                      default: f(() => [
                        P(s(yr), { placeholder: "Select month" })
                      ]),
                      _: 1
                    }),
                    P(s(wr), { class: "max-h-[200px]" }, {
                      default: f(() => [
                        (v(!0), L(ne, null, be(s(Mc)({ dateObj: d }), (m) => (v(), w(s(_r), {
                          key: m.toString(),
                          value: m.month.toString()
                        }, {
                          default: f(() => [
                            Z(se(s(i).custom(s(Ye)(m), { month: "long" })), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]))), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["default-value"]),
                P(s(gr), {
                  "default-value": s(r).year.toString(),
                  "onUpdate:modelValue": c[1] || (c[1] = (m) => {
                    var h;
                    !m || !s(r) || Number(m) !== ((h = s(r)) == null ? void 0 : h.year) && (r.value = s(r).set({
                      year: Number(m)
                    }));
                  })
                }, {
                  default: f(() => [
                    P(s(br), {
                      "aria-label": "Select year",
                      class: "w-[40%]"
                    }, {
                      default: f(() => [
                        P(s(yr), { placeholder: "Select year" })
                      ]),
                      _: 1
                    }),
                    P(s(wr), { class: "max-h-[200px]" }, {
                      default: f(() => [
                        (v(!0), L(ne, null, be(s(Ac)({ dateObj: d, startIndex: -100, endIndex: 10 }), (m) => (v(), w(s(_r), {
                          key: m.toString(),
                          value: m.year.toString()
                        }, {
                          default: f(() => [
                            Z(se(m.year), 1)
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
        me("div", K0, [
          (v(!0), L(ne, null, be(p, (m) => (v(), w(s(qu), {
            key: m.value.toString()
          }, {
            default: f(() => [
              P(s(Ju), null, {
                default: f(() => [
                  P(s(Qn), null, {
                    default: f(() => [
                      (v(!0), L(ne, null, be(g, (h) => (v(), w(s(Qu), { key: h }, {
                        default: f(() => [
                          Z(se(h), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              P(s(Yu), { class: "grid" }, {
                default: f(() => [
                  (v(!0), L(ne, null, be(m.rows, (h, y) => (v(), w(s(Qn), {
                    key: `weekDate-${y}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), L(ne, null, be(h, (x) => (v(), w(s(ju), {
                        key: x.toString(),
                        date: x
                      }, {
                        default: f(() => [
                          P(s(Gu), {
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
}), j0 = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s(Cv), S(s(r), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        a.class
      ]
    }), {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sd = /* @__PURE__ */ b({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (r, l) => (v(), w(s(Ni), H(G(s(o))), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), N1 = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(dn), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), G0 = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(zi), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), q0 = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(s(V)("flex flex-col gap-y-1.5 text-center sm:text-left", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Y0 = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(Hi), S(s(n), {
      class: s(V)("text-heading text-2xl font-semibold leading-none tracking-tight", e.class)
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J0 = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(ji), S(s(n), {
      class: s(V)("text-sub-text text-sm", e.class)
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ld = /* @__PURE__ */ b({
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
    const a = e, n = t, o = C(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ue(o, a);
    return (l, i) => (v(), w(s(as), null, {
      default: f(() => [
        P(s(ls), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        P(s(ss), S(s(r), {
          class: s(V)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
            n.class
          )
        }), {
          default: f(() => [
            _(l.$slots, "default"),
            P(s(dn), {
              onClick: i[0] || (i[0] = (u) => a("close", u)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: f(() => [
                P(s(_o), { class: "size-4 dark:text-slate-300" }),
                i[1] || (i[1] = me("span", { class: "sr-only" }, "Close", -1))
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
}), z1 = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s(as), null, {
      default: f(() => [
        P(s(ls), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: f(() => [
            P(s(ss), S({
              class: s(V)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg md:w-full dark:border-slate-800 dark:bg-slate-950",
                a.class
              )
            }, s(r), {
              onPointerDownOutside: i[0] || (i[0] = (u) => {
                const c = u.detail.originalEvent, d = c.target;
                (c.offsetX > d.clientWidth || c.offsetY > d.clientHeight) && u.preventDefault();
              })
            }), {
              default: f(() => [
                _(l.$slots, "default"),
                P(s(dn), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: f(() => [
                    P(s(_o), { class: "size-4" }),
                    i[1] || (i[1] = me("span", { class: "sr-only" }, "Close", -1))
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
}), Q0 = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(
        s(V)("text-text flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", e.class)
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), W1 = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (r, l) => (v(), w(s(sd), H(G(s(o))), {
      default: f(() => [
        P(s(ld), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: f(() => [
            P(j0, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: f(() => [
                _(r.$slots, "default")
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
}), U1 = /* @__PURE__ */ b({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Ov), S(a.value, {
      class: s(V)("py-6 text-center text-sm", e.class)
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), K1 = /* @__PURE__ */ b({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(kv), S(a.value, {
      class: s(V)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        e.class
      )
    }), {
      default: f(() => [
        n.heading ? (v(), w(s(Dv), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: f(() => [
            Z(se(n.heading), 1)
          ]),
          _: 1
        })) : re("", !0),
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X0 = { class: "flex items-center border-b px-3" }, H1 = /* @__PURE__ */ b({
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
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), L("div", X0, [
      P(s(Dy), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      P(s($v), S({ ...s(n), ...o.$attrs }, {
        "auto-focus": "",
        class: s(V)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          e.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), j1 = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s(Iv), S(s(r), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Z0 = { role: "presentation" }, G1 = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s(Pv), S(s(r), {
      class: s(V)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: f(() => [
        me("div", Z0, [
          _(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), q1 = /* @__PURE__ */ b({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Vv), S(a.value, {
      class: s(V)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", e.class)
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Y1 = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("span", {
      class: q(s(V)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), ew = /* @__PURE__ */ b({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (r, l) => (v(), w(s(mm), H(G(s(o))), {
      default: f(({ open: i }) => [
        _(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), tw = /* @__PURE__ */ b({
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
    return (a, n) => (v(), L("div", {
      class: q(
        s(V)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          e.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), aw = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = fe(t);
    return (n, o) => (v(), w(s(hm), S({ class: "outline-none" }, s(a)), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nw = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s(gm), null, {
      default: f(() => [
        P(s(ym), S(s(r), {
          class: s(V)(
            "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: f(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), J1 = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(bm), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Q1 = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (r, l) => (v(), w(s(Cm), H(G(s(o))), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), X1 = /* @__PURE__ */ b({
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
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(iu), S(s(n), {
      class: s(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.inset && "pl-8",
        e.class
      )
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ow = /* @__PURE__ */ b({
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
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(tw, {
      class: q(e.class)
    }, {
      default: f(() => [
        P(s(iu), S(s(n), {
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
}), rw = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Z1 = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s(_m), S(s(r), {
      class: s(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        me("span", rw, [
          P(s(uu), null, {
            default: f(() => [
              P(s(ws), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sw = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, ex = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s($m), S(s(r), {
      class: s(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        me("span", sw, [
          P(s(uu), null, {
            default: f(() => [
              P(s(_y), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tx = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("span", {
      class: q(s(V)("ml-auto text-xs tracking-widest opacity-60", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), ax = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(wm), S(a.value, {
      class: s(V)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", e.class)
    }), null, 16, ["class"]));
  }
}), nx = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(xm), S(s(n), {
      class: s(V)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", e.class)
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ox = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (r, l) => (v(), w(s(Bm), H(G(s(o))), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rx = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(Dm), S(s(n), {
      class: s(V)(
        "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
        e.class
      )
    }), {
      default: f(() => [
        _(o.$slots, "default"),
        P(s(xs), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sx = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s(km), S(s(r), {
      class: s(V)(
        "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lw = { class: "text-xs text-slate-600 dark:text-slate-300" }, iw = /* @__PURE__ */ b({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(t) {
    return (e, a) => (v(), L("div", lw, "Characters: " + se(e.count), 1));
  }
}), mn = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [n, o] of e)
    a[n] = o;
  return a;
}, uw = {}, dw = { class: "text-sm text-slate-400 dark:text-slate-500" };
function cw(t, e) {
  return v(), L("div", dw, [
    _(t.$slots, "default")
  ]);
}
const pw = /* @__PURE__ */ mn(uw, [["render", cw]]), fw = { class: "text-sm text-red-600 dark:text-red-400" }, vw = /* @__PURE__ */ b({
  __name: "Error",
  props: {
    error: {}
  },
  setup(t) {
    return (e, a) => xa((v(), L("div", null, [
      me("p", fw, se(e.error), 1)
    ], 512)), [
      [$r, e.error]
    ]);
  }
}), mw = {}, hw = { class: "w-full space-y-4 p-1.5" };
function gw(t, e) {
  return v(), L("div", hw, [
    _(t.$slots, "default")
  ]);
}
const lx = /* @__PURE__ */ mn(mw, [["render", gw]]), yw = {}, bw = { class: "my-4" };
function ww(t, e) {
  return v(), L("div", bw, [
    _(t.$slots, "default")
  ]);
}
const _w = /* @__PURE__ */ mn(yw, [["render", ww]]), xw = { class: "grid gap-4 md:grid-cols-2" }, ix = /* @__PURE__ */ b({
  __name: "FormGrid",
  setup(t) {
    return (e, a) => (v(), w(_w, null, {
      default: f(() => [
        me("div", xw, [
          _(e.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), id = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    id: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Sm), S(a.value, {
      class: s(V)(
        "text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        e.class
      )
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cw = { class: "relative" }, $w = {
  name: "Base",
  inheritAttrs: !1
}, oa = /* @__PURE__ */ b({
  ...$w,
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
      return v(), L("div", null, [
        e.label && e.showLabel ? (v(), w(s(id), {
          key: 0,
          id: e.id
        }, {
          default: f(() => [
            Z(se(e.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : re("", !0),
        me("div", Cw, [
          _(e.$slots, "default"),
          e.showCharacterCount ? (v(), w(s(iw), {
            key: 0,
            count: (n = e.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : re("", !0)
        ]),
        P(s(pw), { class: "mt-[2px]" }, {
          default: f(() => [
            Z(se(e.description), 1)
          ]),
          _: 1
        }),
        P(s(vw), { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), Bw = { class: "flex gap-2" }, ux = /* @__PURE__ */ b({
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
    const a = e, o = O(t.modelValue);
    return X(o, (r) => {
      a("update:modelValue", r);
    }), (r, l) => (v(), w(s(oa), H(G(r.$props)), {
      default: f(() => [
        me("div", Bw, [
          P(s(fv), {
            id: r.id,
            checked: o.value,
            "onUpdate:checked": l[0] || (l[0] = (i) => o.value = i),
            class: "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }, {
            default: f(() => [
              P(s(vv), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: f(() => [
                  P(s(ws), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          r.text ? (v(), w(s(id), {
            key: 0,
            id: r.id,
            class: "my-auto"
          }, {
            default: f(() => [
              Z(se(r.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : re("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), kw = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (r, l) => (v(), w(s(Fm), H(G(s(o))), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dw = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(Lm), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sw = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s(Nm), null, {
      default: f(() => [
        P(s(Um), S({ ...s(r), ...l.$attrs }, {
          class: s(V)(
            "border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border bg-white p-4 text-slate-950 shadow-md outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: f(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), dx = /* @__PURE__ */ b({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, n = t, o = new rt("en-US", {
      dateStyle: "long"
    }), r = O(n.modelValue);
    return X(r, () => {
      a("update:modelValue", r.value);
    }), ce(() => {
      if (n.defaultValue)
        r.value = n.defaultValue;
      else if (r.value === null) {
        const l = /* @__PURE__ */ new Date();
        r.value = new Be(
          l.getFullYear(),
          l.getMonth() + 1,
          l.getDate()
        );
      }
    }), (l, i) => (v(), w(s(oa), H(G(l.$props)), {
      default: f(() => [
        P(s(kw), null, {
          default: f(() => [
            P(s(Dw), { "as-child": "" }, {
              default: f(() => [
                P(s(Dt), {
                  variant: "outline",
                  class: q(["text-text w-[280px] justify-start text-left font-normal"])
                }, {
                  default: f(() => [
                    P(s(hy), { class: "mr-2 size-4" }),
                    Z(" " + se(r.value ? s(o).format(r.value.toDate(s(Ct)())) : l.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            P(s(Sw), { class: "w-auto p-0" }, {
              default: f(() => [
                P(s(H0), {
                  modelValue: r.value,
                  "onUpdate:modelValue": i[0] || (i[0] = (u) => r.value = u),
                  "default-value": l.defaultValue,
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
var Ae = [];
for (var jo = 0; jo < 256; ++jo)
  Ae.push((jo + 256).toString(16).slice(1));
function Ew(t, e = 0) {
  return (Ae[t[e + 0]] + Ae[t[e + 1]] + Ae[t[e + 2]] + Ae[t[e + 3]] + "-" + Ae[t[e + 4]] + Ae[t[e + 5]] + "-" + Ae[t[e + 6]] + Ae[t[e + 7]] + "-" + Ae[t[e + 8]] + Ae[t[e + 9]] + "-" + Ae[t[e + 10]] + Ae[t[e + 11]] + Ae[t[e + 12]] + Ae[t[e + 13]] + Ae[t[e + 14]] + Ae[t[e + 15]]).toLowerCase();
}
var Pn, Pw = new Uint8Array(16);
function Ow() {
  if (!Pn && (Pn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Pn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Pn(Pw);
}
var Aw = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const $l = {
  randomUUID: Aw
};
function Mw(t, e, a) {
  if ($l.randomUUID && !t)
    return $l.randomUUID();
  t = t || {};
  var n = t.random || (t.rng || Ow)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Ew(n);
}
const Tw = { class: "flex items-center space-x-2" }, Iw = ["src"], Vw = ["accept"], cx = /* @__PURE__ */ b({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = "file-upload-" + Mw(), r = C(() => i.value ? URL.createObjectURL(i.value) : null), l = a.currentImage ? a.currentImage : a.defaultImage, i = C({
      get: () => a.modelValue,
      set: (d) => n("update:modelValue", d)
    }), u = (d) => {
      i.value = d.target.files[0];
    }, c = () => document.getElementById(o).click();
    return (d, p) => (v(), w(s(oa), H(G(d.$props)), {
      default: f(() => [
        me("div", Tw, [
          _(d.$slots, "image", {
            newImage: r.value,
            curImage: s(l)
          }, () => [
            me("img", {
              src: r.value ?? s(l),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, Iw)
          ]),
          me("input", {
            id: o,
            accept: d.accept,
            hidden: "",
            type: "file",
            onInput: u
          }, null, 40, Vw),
          P(s(Dt), {
            variant: "outline",
            onClick: c
          }, {
            default: f(() => p[0] || (p[0] = [
              Z(" Upload ")
            ])),
            _: 1,
            __: [0]
          })
        ])
      ]),
      _: 3
    }, 16));
  }
}), Rw = ["disabled", "placeholder", "required", "type"], Fw = /* @__PURE__ */ b({
  __name: "Input",
  props: /* @__PURE__ */ Yo({
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
    const e = Rl(t, "modelValue");
    return (a, n) => (v(), w(s(oa), H(G(a.$props)), {
      default: f(() => [
        xa(me("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => e.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: q(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
          }])
        }, null, 10, Rw), [
          [yd, e.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), px = /* @__PURE__ */ b({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, n = t, o = C(() => n.placeholder ?? "Select an option..."), r = O(
      n.modelValue ? n.options.find((l) => l === n.modelValue) : null
    );
    return X(r, () => {
      a("update:modelValue", r.value);
    }), (l, i) => (v(), w(s(oa), H(G(l.$props)), {
      default: f(() => [
        P(s(gr), {
          modelValue: r.value,
          "onUpdate:modelValue": i[0] || (i[0] = (u) => r.value = u)
        }, {
          default: f(({ open: u }) => [
            P(s(br), { open: u }, {
              default: f(() => [
                P(s(yr), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            P(s(wr), null, {
              default: f(() => [
                (v(!0), L(ne, null, be(l.options, (c) => (v(), w(s(_r), { value: c }, {
                  default: f(() => [
                    Z(se(c), 1)
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
}), Lw = ["placeholder"], fx = /* @__PURE__ */ b({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = Ss(t, "modelValue", e, {
      passive: !0
    });
    return (r, l) => (v(), w(s(oa), H(G(r.$props)), {
      default: f(() => [
        xa(me("textarea", {
          "onUpdate:modelValue": l[0] || (l[0] = (i) => zt(o) ? o.value = i : null),
          placeholder: r.placeholder,
          class: q(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !r.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": r.error
          }])
        }, null, 10, Lw), [
          [bd, s(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), Nw = /* @__PURE__ */ b({
  __name: "Toggle",
  props: /* @__PURE__ */ Yo({
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
  emits: /* @__PURE__ */ Yo(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const a = e, n = t, o = Rl(t, "modelValue");
    X(o, () => {
      a("update:modelValue", o.value);
    });
    const r = C(() => {
      const { class: i, ...u } = n;
      return u;
    }), l = ue(r, a);
    return (i, u) => (v(), w(s(oa), H(G(i.$props)), {
      default: f(() => [
        P(s(sg), S({
          checked: o.value,
          "onUpdate:checked": u[0] || (u[0] = (c) => o.value = c)
        }, s(l), {
          class: s(V)(
            "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
            n.class
          )
        }), {
          default: f(({ checked: c }) => [
            P(s(lg), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: f(() => [
                c ? _(i.$slots, "checked", { key: 0 }) : re("", !0),
                c ? re("", !0) : _(i.$slots, "not-checked", { key: 1 })
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
}), zw = { class: "my-auto text-slate-400 dark:text-slate-100" }, vx = /* @__PURE__ */ b({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(t) {
    return (e, a) => (v(), L("div", zw, " Showing " + se(e.min) + " to " + se(e.max) + " of " + se(e.total) + " results ", 1));
  }
}), mx = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Pm), S(a.value, {
      class: s(V)("text-text flex size-9 items-center justify-center", e.class)
    }), {
      default: f(() => [
        _(n.$slots, "default", {}, () => [
          P(s(Vu))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hx = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Om), H(G(a.value)), {
      default: f(() => [
        P(s(Dt), {
          class: q(s(V)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            _(n.$slots, "default", { icon: s(by) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), gx = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Am), H(G(a.value)), {
      default: f(() => [
        P(s(Dt), {
          class: q(s(V)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            _(n.$slots, "default", { icon: s(wy) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), yx = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Im), H(G(a.value)), {
      default: f(() => [
        P(s(Dt), {
          class: q(s(V)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            _(n.$slots, "default", { icon: s(xs) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), bx = /* @__PURE__ */ b({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Vm), H(G(a.value)), {
      default: f(() => [
        P(s(Dt), {
          class: q(s(V)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            _(n.$slots, "default", { icon: s(gy) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), wx = /* @__PURE__ */ b({
  __name: "LumuixModeToggle",
  setup(t) {
    const e = N0({
      selector: "html"
    });
    return (a, n) => (v(), w(Nw, {
      modelValue: s(e),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => zt(e) ? e.value = o : null)
    }, {
      checked: f(() => [
        P(s(Cy), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      "not-checked": f(() => [
        P(s(Sy), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), _x = /* @__PURE__ */ b({
  __name: "CollapsibleTableRow",
  props: {
    row: {},
    headers: {},
    subRows: {},
    setOpenTo: { type: Boolean, default: !1 },
    class: {}
  },
  setup(t) {
    const e = t, a = O(e.setOpenTo), n = () => {
      a.value = !a.value;
    };
    return (o, r) => (v(), L(ne, null, [
      P(s(Za), {
        onClick: n,
        class: q(e.class)
      }, {
        default: f(() => [
          (v(!0), L(ne, null, be(o.headers, (l) => (v(), w(s(Zn), {
            key: l.value
          }, {
            default: f(() => [
              o.$slots[`cell_header_${l.value}`] ? _(o.$slots, `cell_header_${l.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (v(), L(ne, { key: 1 }, [
                Z(se(o.row[l.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (v(), w(s(xr), { key: 0 }, {
            default: f(() => [
              _(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : re("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (v(!0), L(ne, { key: 0 }, be(o.subRows, (l, i) => (v(), w(s(Za), { key: i }, {
        default: f(() => [
          (v(!0), L(ne, null, be(o.headers, (u) => (v(), w(s(Zn), {
            key: u.value
          }, {
            default: f(() => [
              o.$slots[`subrow_cell_${u.value}`] ? _(o.$slots, `subrow_cell_${u.value}`, {
                key: 0,
                item: l,
                open: a.value
              }) : (v(), L(ne, { key: 1 }, [
                Z(se("subrow_cell_" + u.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (v(), w(s(xr), { key: 0 }, {
            default: f(() => [
              _(o.$slots, "sub_row_actions", {
                item: o.row,
                open: a.value
              })
            ]),
            _: 3
          })) : re("", !0)
        ]),
        _: 2
      }, 1024))), 128)) : re("", !0)
    ], 64));
  }
}), Ww = { class: "relative w-full overflow-auto" }, Uw = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", Ww, [
      me("table", {
        class: q(s(V)("w-full caption-bottom text-sm", e.class))
      }, [
        _(a.$slots, "default")
      ], 2)
    ]));
  }
}), Kw = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("tbody", {
      class: q(s(V)("[&_tr:last-child]:border-0", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Zn = /* @__PURE__ */ b({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("td", {
      class: q(["text-text p-4 align-middle [&:has([role=checkbox])]:pr-0", e.class])
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Hw = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("th", {
      class: q(
        s(V)(
          "text-heading h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
          e.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), jw = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("thead", {
      class: q(s(V)("[&_tr]:border-b", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), xx = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("tfoot", {
      class: q(
        s(V)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0",
          e.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Za = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("tr", {
      class: q(
        s(V)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          e.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), xr = /* @__PURE__ */ b({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("td", {
      class: q(["w-32 p-4 text-center align-middle dark:text-slate-300", e.class])
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Gw = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("caption", {
      class: q(s(V)("text-sub-text mt-4 text-sm", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), qw = { class: "flex items-center justify-center py-10" }, Cx = /* @__PURE__ */ b({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(Za, null, {
      default: f(() => [
        P(Zn, S({
          class: s(V)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            e.class
          )
        }, a.value), {
          default: f(() => [
            me("div", qw, [
              _(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), $x = /* @__PURE__ */ b({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(t) {
    return (e, a) => (v(), w(s(Uw), null, {
      default: f(() => [
        e.caption ? (v(), w(s(Gw), { key: 0 }, {
          default: f(() => [
            Z(se(e.caption), 1)
          ]),
          _: 1
        })) : re("", !0),
        P(s(jw), null, {
          default: f(() => [
            P(s(Za), null, {
              default: f(() => [
                (v(!0), L(ne, null, be(e.headers, (n, o) => (v(), w(s(Hw), null, {
                  default: f(() => [
                    e.$slots[`header_${e.headers[o].value}`] ? _(e.$slots, `header_${e.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (v(), L(ne, { key: 1 }, [
                      Z(se(n.name), 1)
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
        P(s(Kw), null, {
          default: f(() => [
            (v(!0), L(ne, null, be(e.rows, (n, o) => (v(), w(s(Za), { key: o }, {
              default: f(() => [
                (v(!0), L(ne, null, be(e.headers, (r) => (v(), w(s(Zn), {
                  key: r.value
                }, {
                  default: f(() => [
                    e.$slots[`cell_${r.value}`] ? _(e.$slots, `cell_${r.value}`, {
                      key: 0,
                      item: n
                    }) : (v(), L(ne, { key: 1 }, [
                      Z(se(n[r.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                e.$slots.row_actions ? (v(), w(s(xr), { key: 0 }, {
                  default: f(() => [
                    _(e.$slots, "row_actions", { item: n })
                  ]),
                  _: 2
                }, 1024)) : re("", !0)
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
}), Yw = { class: "text-text" }, Bx = /* @__PURE__ */ b({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const a = e, n = () => a("close");
    return (o, r) => (v(), w(s(sd), { open: o.open }, {
      default: f(() => [
        P(s(G0), { "as-child": "" }, {
          default: f(() => [
            _(o.$slots, "trigger")
          ]),
          _: 3
        }),
        P(s(ld), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: q("max-w-" + o.size)
        }, {
          default: f(() => [
            P(s(q0), null, {
              default: f(() => [
                P(s(Y0), null, {
                  default: f(() => {
                    var l;
                    return [
                      o.$slots.title ? _(o.$slots, "title", { key: 0 }) : (l = o.headerData) != null && l.title ? (v(), L(ne, { key: 1 }, [
                        Z(se(o.headerData.title), 1)
                      ], 64)) : re("", !0)
                    ];
                  }),
                  _: 3
                }),
                P(s(J0), null, {
                  default: f(() => {
                    var l;
                    return [
                      o.$slots.description ? _(o.$slots, "description", { key: 0 }) : (l = o.headerData) != null && l.description ? (v(), L(ne, { key: 1 }, [
                        Z(se(o.headerData.description), 1)
                      ], 64)) : re("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            me("div", Yw, [
              o.$slots.content ? _(o.$slots, "content", { key: 0 }) : _(o.$slots, "default", { key: 1 })
            ]),
            P(s(Q0), null, {
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
}), Jw = /* @__PURE__ */ b({
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
    const o = ue(t, e);
    return (r, l) => (v(), w(s(ug), H(G(s(o))), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kx = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(pg), S(s(n), {
      class: s(V)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        e.class
      )
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qw = /* @__PURE__ */ b({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => {
      var o;
      return v(), w(Ne((o = a.tab) != null && o.is ? a.tab.is : "a"), {
        href: a.tab.href,
        class: q([
          a.tab.active ? "text-primary bg-white hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          s(V)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            e.class
          )
        ])
      }, {
        default: f(() => {
          var r;
          return [
            (r = a.tab) != null && r.icon ? (v(), w(Ne(a.tab.icon), {
              key: 0,
              class: "size-5"
            })) : re("", !0),
            Z(" " + se(a.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), Bl = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(dg), S(a.value, {
      class: s(V)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        e.class
      )
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dx = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(cg), S({
      class: s(V)(
        "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        e.class
      )
    }, a.value), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xw = {}, Zw = { class: "text-text mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function e_(t, e) {
  return v(), L("div", Zw, [
    _(t.$slots, "default")
  ]);
}
const t_ = /* @__PURE__ */ mn(Xw, [["render", e_]]), Sx = /* @__PURE__ */ b({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(t) {
    const e = t, a = C(
      () => e.tabs.find((n) => n.active)
    );
    return (n, o) => (v(), w(s(Jw), null, {
      default: f(() => [
        P(s(Bl), { class: "hidden gap-2 md:block" }, {
          default: f(() => [
            (v(!0), L(ne, null, be(n.tabs, (r) => (v(), w(s(Qw), {
              key: r.name,
              tab: r
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        P(s(Bl), { class: "flex md:hidden" }, {
          default: f(() => [
            P(s(ew), null, {
              default: f(() => [
                P(s(aw), { "as-child": "" }, {
                  default: f(() => [
                    P(s(Dt), { variant: "secondary" }, {
                      default: f(() => {
                        var r;
                        return [
                          Z(se(((r = a.value) == null ? void 0 : r.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                P(s(nw), { class: "w-full" }, {
                  default: f(() => [
                    (v(!0), L(ne, null, be(n.tabs, (r) => (v(), w(s(ow), S({
                      key: r.name,
                      ref_for: !0
                    }, r), {
                      default: f(() => [
                        Z(se(r.name), 1)
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
        P(s(t_), null, {
          default: f(() => [
            _(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), a_ = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, Ex = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s(qm), S({
      class: s(V)("p-3", a.class)
    }, s(r)), {
      default: f(({ grid: u, weekDays: c }) => [
        P(s(u_), null, {
          default: f(() => [
            P(s(p_)),
            P(s(d_)),
            P(s(c_))
          ]),
          _: 1
        }),
        me("div", a_, [
          (v(!0), L(ne, null, be(u, (d) => (v(), w(s(r_), {
            key: d.value.toString()
          }, {
            default: f(() => [
              P(s(l_), null, {
                default: f(() => [
                  P(s(kl), null, {
                    default: f(() => [
                      (v(!0), L(ne, null, be(c, (p) => (v(), w(s(i_), { key: p }, {
                        default: f(() => [
                          Z(se(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              P(s(s_), null, {
                default: f(() => [
                  (v(!0), L(ne, null, be(d.rows, (p, g) => (v(), w(s(kl), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), L(ne, null, be(p, (m) => (v(), w(s(n_), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          P(s(o_), {
                            day: m,
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
}), n_ = /* @__PURE__ */ b({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(Xm), S({
      class: s(V)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        e.class
      )
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o_ = /* @__PURE__ */ b({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(rh), S({
      class: s(V)(
        s(aa)({ variant: "ghost" }),
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
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r_ = /* @__PURE__ */ b({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(Qm), S({
      class: s(V)("w-full border-collapse space-y-1", e.class)
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s_ = /* @__PURE__ */ b({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(nh), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), l_ = /* @__PURE__ */ b({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(ah), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kl = /* @__PURE__ */ b({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(oh), S({
      class: s(V)("mt-2 flex w-full", e.class)
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), i_ = /* @__PURE__ */ b({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(Zm), S({
      class: s(V)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), u_ = /* @__PURE__ */ b({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(Ym), S({
      class: s(V)("relative flex w-full items-center justify-between pt-1", e.class)
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), d_ = /* @__PURE__ */ b({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(Jm), S({
      class: s(V)("text-text text-sm font-medium", e.class)
    }, s(n)), {
      default: f(({ headingValue: l }) => [
        _(o.$slots, "default", { headingValue: l }, () => [
          Z(se(l), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), c_ = /* @__PURE__ */ b({
  __name: "RangeCalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(eh), S({
      class: s(V)(
        s(aa)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          P(s(By), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p_ = /* @__PURE__ */ b({
  __name: "RangeCalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fe(a);
    return (o, r) => (v(), w(s(th), S({
      class: s(V)(
        s(aa)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          P(s($y), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), f_ = /* @__PURE__ */ b({
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
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Fh), S(a.value, {
      class: s(V)(
        "bg-border relative shrink-0",
        e.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        e.class
      )
    }), {
      default: f(() => [
        e.label ? (v(), L("span", {
          key: 0,
          class: q(
            s(V)(
              "bg-background text-muted-foreground absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-xs",
              e.orientation === "vertical" ? "w-[1px] px-1 py-2" : "h-[1px] px-2 py-1"
            )
          )
        }, se(e.label), 3)) : re("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), v_ = /* @__PURE__ */ b({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (r, l) => (v(), w(s(Ni), H(G(s(o))), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Px = /* @__PURE__ */ b({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(dn), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), m_ = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, side: i, ...u } = a;
      return u;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s(as), null, {
      default: f(() => [
        P(s(ls), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        P(s(ss), S({
          class: s(V)(s(h_)({ side: l.side }), a.class)
        }, { ...s(r), ...l.$attrs }), {
          default: f(() => [
            _(l.$slots, "default"),
            P(s(dn), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none" }, {
              default: f(() => [
                P(s(_o), { class: "text-muted-foreground h-4 w-4" })
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
}), Ox = /* @__PURE__ */ b({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(ji), S({
      class: s(V)("text-muted-foreground text-sm", e.class)
    }, a.value), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ax = /* @__PURE__ */ b({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(s(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Mx = /* @__PURE__ */ b({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(s(V)("flex flex-col gap-y-2 text-center sm:text-left", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Tx = /* @__PURE__ */ b({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Hi), S({
      class: s(V)("text-foreground text-lg font-semibold", e.class)
    }, a.value), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ix = /* @__PURE__ */ b({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(zi), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), h_ = Ia(
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
), g_ = "sidebar:state", y_ = 60 * 60 * 24 * 7, b_ = "16rem", w_ = "18rem", __ = "3rem", x_ = "b", [Bo, C_] = pe("Sidebar"), $_ = { class: "flex h-full w-full flex-col" }, B_ = ["data-state", "data-collapsible", "data-variant", "data-side"], k_ = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border bg-sidebar text-sidebar-foreground flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow"
}, Vx = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(t) {
    const e = t, { isMobile: a, state: n, openMobile: o, setOpenMobile: r } = Bo();
    return (l, i) => l.collapsible === "none" ? (v(), L("div", S({
      key: 0,
      class: s(V)("bg-sidebar text-sidebar-foreground flex h-full w-[--sidebar-width] flex-col", e.class)
    }, l.$attrs), [
      _(l.$slots, "default")
    ], 16)) : s(a) ? (v(), w(s(v_), S({
      key: 1,
      open: s(o)
    }, l.$attrs, { "onUpdate:open": s(r) }), {
      default: f(() => [
        P(s(m_), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: l.side,
          class: "bg-sidebar text-sidebar-foreground w-[--sidebar-width] p-0 [&>button]:hidden",
          style: ut({
            "--sidebar-width": s(w_)
          })
        }, {
          default: f(() => [
            me("div", $_, [
              _(l.$slots, "default", { state: s(n) })
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (v(), L("div", {
      key: 2,
      class: "group peer hidden md:block",
      "data-state": s(n),
      "data-collapsible": s(n) === "collapsed" ? l.collapsible : "",
      "data-variant": l.variant,
      "data-side": l.side
    }, [
      me("div", {
        class: q(
          s(V)(
            "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            l.variant === "floating" || l.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )
        )
      }, null, 2),
      me("div", S({
        class: s(V)(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          l.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          l.variant === "floating" || l.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          e.class
        )
      }, l.$attrs), [
        me("div", k_, [
          _(l.$slots, "default", { state: s(n) })
        ])
      ], 16)
    ], 8, B_));
  }
}), Rx = /* @__PURE__ */ b({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "content",
      class: q(
        s(V)(
          "bg-sidebar flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          e.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Fx = /* @__PURE__ */ b({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "footer",
      class: q(s(V)("flex flex-col gap-2 p-2", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Lx = /* @__PURE__ */ b({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "group",
      class: q(s(V)("relative flex w-full min-w-0 flex-col p-2", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Nx = /* @__PURE__ */ b({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), {
      "data-sidebar": "group-action",
      as: a.as,
      "as-child": a.asChild,
      class: q(
        s(V)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), zx = /* @__PURE__ */ b({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "group-content",
      class: q(s(V)("w-full text-sm", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Wx = /* @__PURE__ */ b({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), {
      "data-sidebar": "group-label",
      as: a.as,
      "as-child": a.asChild,
      class: q(
        s(V)(
          "ring-sidebar-ring text-sidebar-foreground/70 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-none transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          e.class
        )
      )
    }, {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Ux = /* @__PURE__ */ b({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "header",
      class: q(s(V)("flex flex-col gap-2 p-2", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Kx = /* @__PURE__ */ b({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(Fw, {
      "data-sidebar": "input",
      class: q(
        s(V)(
          "focus-visible:ring-sidebar-ring bg-background h-8 w-full shadow-none focus-visible:ring-2",
          e.class
        )
      )
    }, {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Hx = /* @__PURE__ */ b({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("main", {
      class: q(
        s(V)(
          "bg-background relative flex min-h-svh flex-1 flex-col",
          "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          e.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), jx = /* @__PURE__ */ b({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("ul", {
      "data-sidebar": "menu",
      class: q(s(V)("flex w-full min-w-0 flex-col gap-1", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Gx = /* @__PURE__ */ b({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(N), {
      "data-sidebar": "menu-action",
      class: q(
        s(V)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground text-sidebar-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
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
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), qx = /* @__PURE__ */ b({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "menu-badge",
      class: q(
        s(V)(
          "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums",
          "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), D_ = /* @__PURE__ */ b({
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
    const o = ue(t, e);
    return (r, l) => (v(), w(s(Og), H(G(s(o))), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), S_ = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s(Ig), null, {
      default: f(() => [
        P(s(Tg), S({ ...s(r), ...l.$attrs }, {
          class: s(V)(
            "border-border bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md",
            a.class
          )
        }), {
          default: f(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Yx = /* @__PURE__ */ b({
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
    return (a, n) => (v(), w(s(Eu), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), E_ = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(Ag), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dl = /* @__PURE__ */ b({
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
    return (a, n) => (v(), w(s(N), S({
      "data-sidebar": "menu-button",
      "data-size": a.size,
      "data-active": a.isActive,
      class: s(V)(s(A_)({ variant: a.variant, size: a.size }), e.class),
      as: a.as,
      "as-child": a.asChild
    }, a.$attrs), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), Jx = /* @__PURE__ */ b({
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
    const e = t, { isMobile: a, state: n } = Bo(), o = C(() => {
      const { tooltip: r, ...l } = e;
      return l;
    });
    return (r, l) => r.tooltip ? (v(), w(s(D_), { key: 1 }, {
      default: f(() => [
        P(s(E_), { "as-child": "" }, {
          default: f(() => [
            P(Dl, H(G({ ...o.value, ...r.$attrs })), {
              default: f(() => [
                _(r.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        P(s(S_), {
          side: "right",
          align: "center",
          hidden: s(n) !== "collapsed" || s(a)
        }, {
          default: f(() => [
            typeof r.tooltip == "string" ? (v(), L(ne, { key: 0 }, [
              Z(se(r.tooltip), 1)
            ], 64)) : (v(), w(Ne(r.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (v(), w(Dl, H(S({ key: 0 }, { ...o.value, ...r.$attrs })), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qx = /* @__PURE__ */ b({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("li", {
      "data-sidebar": "menu-item",
      class: q(s(V)("group/menu-item relative", e.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Sl = /* @__PURE__ */ b({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(s(V)("bg-skeleton animate-pulse rounded-md", e.class))
    }, null, 2));
  }
}), Xx = /* @__PURE__ */ b({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (n, o) => (v(), L("div", {
      "data-sidebar": "menu-skeleton",
      class: q(s(V)("flex h-8 items-center gap-2 rounded-md px-2", e.class))
    }, [
      n.showIcon ? (v(), w(Sl, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : re("", !0),
      P(Sl, {
        class: "h-4 max-w-[--skeleton-width] flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: ut({ "--skeleton-width": a.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), Zx = /* @__PURE__ */ b({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("ul", {
      "data-sidebar": "menu-badge",
      class: q(
        s(V)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), eC = /* @__PURE__ */ b({
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
    return (a, n) => (v(), w(s(N), {
      "data-sidebar": "menu-sub-button",
      as: a.as,
      "as-child": a.asChild,
      "data-size": a.size,
      "data-active": a.isActive,
      class: q(
        s(V)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground text-sidebar-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          a.size === "sm" && "text-xs",
          a.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), P_ = {};
function O_(t, e) {
  return v(), L("li", null, [
    _(t.$slots, "default")
  ]);
}
const tC = /* @__PURE__ */ mn(P_, [["render", O_]]), aC = /* @__PURE__ */ b({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = od("(max-width: 768px)"), r = O(!1), l = Ss(a, "open", n, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function i(p) {
      l.value = p, document.cookie = `${g_}=${l.value}; path=/; max-age=${y_}`;
    }
    function u(p) {
      r.value = p;
    }
    function c() {
      return o.value ? u(!r.value) : i(!l.value);
    }
    Xn("keydown", (p) => {
      p.key === x_ && (p.metaKey || p.ctrlKey) && (p.preventDefault(), c());
    });
    const d = C(() => l.value ? "expanded" : "collapsed");
    return C_({
      state: d,
      open: l,
      setOpen: i,
      isMobile: o,
      openMobile: r,
      setOpenMobile: u,
      toggleSidebar: c
    }), (p, g) => (v(), w(s(Eu), { "delay-duration": 0 }, {
      default: f(() => [
        me("div", S({
          style: {
            "--sidebar-width": s(b_),
            "--sidebar-width-icon": s(__)
          },
          class: s(V)(
            "group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-auto",
            a.class
          )
        }, p.$attrs), [
          _(p.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), nC = /* @__PURE__ */ b({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(t) {
    const e = t, { toggleSidebar: a } = Bo();
    return (n, o) => (v(), L("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: q(
        s(V)(
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          e.class
        )
      ),
      onClick: o[0] || (o[0] = //@ts-ignore
      (...r) => s(a) && s(a)(...r))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), oC = /* @__PURE__ */ b({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(f_, {
      "data-sidebar": "separator",
      class: q(s(V)("bg-sidebar-border mx-2 w-auto", e.class))
    }, {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), rC = /* @__PURE__ */ b({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(t) {
    const e = t, { toggleSidebar: a } = Bo();
    return (n, o) => (v(), w(Dt, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: q(s(V)("h-7 w-7", e.class)),
      onClick: s(a)
    }, {
      default: f(() => [
        P(s(ky)),
        o[0] || (o[0] = me("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1,
      __: [0]
    }, 8, ["class", "onClick"]));
  }
}), A_ = Ia(
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
), sC = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s(Qh), S({
      class: s(V)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        a.class
      )
    }, s(r)), {
      default: f(() => [
        P(s(eg), { class: "bg-accent relative h-2 w-full grow overflow-hidden rounded-full data-[orientation=vertical]:w-2" }, {
          default: f(() => [
            P(s(tg), { class: "bg-primary absolute h-full data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (v(!0), L(ne, null, be(l.modelValue, (u, c) => (v(), w(s(Zh), {
          key: c,
          class: "border-primary bg-primary ring-offset-background focus-visible:ring-ring block size-5 rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), M_ = 5, T_ = 5e6, bt = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Go = 0;
function I_() {
  return Go = (Go + 1) % Number.MAX_VALUE, Go.toString();
}
const qo = /* @__PURE__ */ new Map();
function El(t) {
  if (qo.has(t)) return;
  const e = setTimeout(() => {
    qo.delete(t), ja({
      type: bt.REMOVE_TOAST,
      toastId: t
    });
  }, T_);
  qo.set(t, e);
}
const Xe = O({
  toasts: []
});
function ja(t) {
  switch (t.type) {
    case bt.ADD_TOAST:
      Xe.value.toasts = [t.toast, ...Xe.value.toasts].slice(0, M_);
      break;
    case bt.UPDATE_TOAST:
      Xe.value.toasts = Xe.value.toasts.map(
        (e) => e.id === t.toast.id ? { ...e, ...t.toast } : e
      );
      break;
    case bt.DISMISS_TOAST: {
      const { toastId: e } = t;
      e ? El(e) : Xe.value.toasts.forEach((a) => {
        El(a.id);
      }), Xe.value.toasts = Xe.value.toasts.map(
        (a) => a.id === e || e === void 0 ? {
          ...a,
          open: !1
        } : a
      );
      break;
    }
    case bt.REMOVE_TOAST:
      t.toastId === void 0 ? Xe.value.toasts = [] : Xe.value.toasts = Xe.value.toasts.filter((e) => e.id !== t.toastId);
      break;
  }
}
function V_() {
  return {
    toasts: C(() => Xe.value.toasts),
    toast: R_,
    dismiss: (t) => ja({ type: bt.DISMISS_TOAST, toastId: t })
  };
}
function R_(t) {
  const e = I_(), a = (o) => ja({
    type: bt.UPDATE_TOAST,
    toast: { ...o, id: e }
  }), n = () => ja({ type: bt.DISMISS_TOAST, toastId: e });
  return ja({
    type: bt.ADD_TOAST,
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
const F_ = { class: "flex gap-3" }, L_ = { class: "grid gap-1" }, lC = /* @__PURE__ */ b({
  __name: "Toaster",
  setup(t) {
    const { toasts: e } = V_();
    return (a, n) => (v(), w(s(K_), null, {
      default: f(() => [
        (v(!0), L(ne, null, be(s(e), (o) => (v(), w(s(N_), S({
          key: o.id,
          ref_for: !0
        }, o, { class: "my-1" }), {
          default: f(() => [
            me("div", F_, [
              (v(), w(Ne(o.icon), {
                class: q(s(V)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              me("div", L_, [
                o.title ? (v(), w(s(U_), { key: 0 }, {
                  default: f(() => [
                    Z(se(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : re("", !0),
                o.description ? (v(), L(ne, { key: 1 }, [
                  wd(o.description) ? (v(), w(s(Pl), { key: 0 }, {
                    default: f(() => [
                      (v(), w(Ne(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (v(), w(s(Pl), { key: 1 }, {
                    default: f(() => [
                      Z(se(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : re("", !0),
                P(s(W_))
              ]),
              (v(), w(Ne(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        P(s(z_))
      ]),
      _: 1
    }));
  }
}), N_ = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), r = ue(o, n);
    return (l, i) => (v(), w(s($g), S(s(r), {
      class: s(V)(s(H_)({ variant: l.variant }), a.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: f(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), z_ = /* @__PURE__ */ b({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(kg), S(a.value, {
      class: s(V)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e.class
      )
    }), null, 16, ["class"]));
  }
}), iC = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Bg), H(G(a.value)), {
      default: f(() => [
        P(s(Dt), {
          variant: n.variant,
          class: q(e.class)
        }, {
          default: f(() => [
            _(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["variant", "class"])
      ]),
      _: 3
    }, 16));
  }
}), W_ = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Du), S(a.value, {
      class: s(V)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        e.class
      )
    }), {
      default: f(() => [
        P(s(_o), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), U_ = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Dg), S(a.value, {
      class: s(V)("text-sm font-semibold", e.class)
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pl = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (v(), w(s(Sg), S({
      class: s(V)("text-sm opacity-90", e.class)
    }, a.value), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), K_ = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), w(s(vg), H(G(e)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), H_ = Ia(
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
  a1 as Accordion,
  n1 as AccordionContent,
  o1 as AccordionItem,
  r1 as AccordionTrigger,
  s1 as Badge,
  oa as Base,
  tw as BaseDropdownMenuItem,
  l1 as Breadcrumb,
  i1 as BreadcrumbEllipsis,
  u1 as BreadcrumbItem,
  d1 as BreadcrumbLink,
  c1 as BreadcrumbList,
  p1 as BreadcrumbPage,
  f1 as BreadcrumbSeparator,
  Dt as Button,
  I1 as Calendar,
  ju as CalendarCell,
  Gu as CalendarCellTrigger,
  qu as CalendarGrid,
  Yu as CalendarGridBody,
  Ju as CalendarGridHead,
  Qn as CalendarGridRow,
  Qu as CalendarHeadCell,
  Xu as CalendarHeader,
  Zu as CalendarHeading,
  p0 as CalendarNextButton,
  f0 as CalendarPrevButton,
  H0 as CalendarWithSelect,
  v1 as Card,
  y1 as CardContent,
  g1 as CardDescription,
  b1 as CardFooter,
  m1 as CardHeader,
  h1 as CardTitle,
  iw as CharacterCount,
  ux as Checkbox,
  _x as CollapsibleTableRow,
  D1 as Combobox,
  S1 as ComboboxAnchor,
  C1 as ComboboxCancel,
  E1 as ComboboxEmpty,
  P1 as ComboboxGroup,
  O1 as ComboboxInput,
  A1 as ComboboxItem,
  B1 as ComboboxItemIndicator,
  M1 as ComboboxList,
  T1 as ComboboxSeparator,
  k1 as ComboboxTrigger,
  j0 as Command,
  W1 as CommandDialog,
  U1 as CommandEmpty,
  K1 as CommandGroup,
  H1 as CommandInput,
  j1 as CommandItem,
  G1 as CommandList,
  q1 as CommandSeparator,
  Y1 as CommandShortcut,
  dx as DatePicker,
  pw as Description,
  sd as Dialog,
  N1 as DialogClose,
  ld as DialogContent,
  J0 as DialogDescription,
  Q0 as DialogFooter,
  q0 as DialogHeader,
  z1 as DialogScrollContent,
  Y0 as DialogTitle,
  G0 as DialogTrigger,
  ew as DropdownMenu,
  Z1 as DropdownMenuCheckboxItem,
  nw as DropdownMenuContent,
  J1 as DropdownMenuGroup,
  X1 as DropdownMenuItem,
  nx as DropdownMenuLabel,
  ow as DropdownMenuLink,
  gm as DropdownMenuPortal,
  Q1 as DropdownMenuRadioGroup,
  ex as DropdownMenuRadioItem,
  ax as DropdownMenuSeparator,
  tx as DropdownMenuShortcut,
  ox as DropdownMenuSub,
  sx as DropdownMenuSubContent,
  rx as DropdownMenuSubTrigger,
  aw as DropdownMenuTrigger,
  vw as Error,
  lx as Form,
  _w as FormElement,
  ix as FormGrid,
  cx as ImageUpload,
  Fw as Input,
  id as Label,
  $x as LumuixDatatable,
  Bx as LumuixModal,
  wx as LumuixModeToggle,
  Sx as LumuixTabs,
  Z_ as Pagination,
  vx as PaginationDetails,
  mx as PaginationEllipsis,
  hx as PaginationFirst,
  gx as PaginationLast,
  e1 as PaginationList,
  t1 as PaginationListItem,
  yx as PaginationNext,
  bx as PaginationPrev,
  kw as Popover,
  Sw as PopoverContent,
  Dw as PopoverTrigger,
  Ex as RangeCalendar,
  n_ as RangeCalendarCell,
  o_ as RangeCalendarCellTrigger,
  r_ as RangeCalendarGrid,
  s_ as RangeCalendarGridBody,
  l_ as RangeCalendarGridHead,
  kl as RangeCalendarGridRow,
  i_ as RangeCalendarHeadCell,
  u_ as RangeCalendarHeader,
  d_ as RangeCalendarHeading,
  c_ as RangeCalendarNextButton,
  p_ as RangeCalendarPrevButton,
  px as Select,
  wr as SelectContent,
  V1 as SelectGroup,
  _r as SelectItem,
  R1 as SelectItemText,
  F1 as SelectLabel,
  gr as SelectRoot,
  U0 as SelectScrollDownButton,
  W0 as SelectScrollUpButton,
  L1 as SelectSeparator,
  br as SelectTrigger,
  yr as SelectValue,
  f_ as Separator,
  v_ as Sheet,
  Px as SheetClose,
  m_ as SheetContent,
  Ox as SheetDescription,
  Ax as SheetFooter,
  Mx as SheetHeader,
  Tx as SheetTitle,
  Ix as SheetTrigger,
  Vx as Sidebar,
  Rx as SidebarContent,
  Fx as SidebarFooter,
  Lx as SidebarGroup,
  Nx as SidebarGroupAction,
  zx as SidebarGroupContent,
  Wx as SidebarGroupLabel,
  Ux as SidebarHeader,
  Kx as SidebarInput,
  Hx as SidebarInset,
  jx as SidebarMenu,
  Gx as SidebarMenuAction,
  qx as SidebarMenuBadge,
  Jx as SidebarMenuButton,
  Qx as SidebarMenuItem,
  Xx as SidebarMenuSkeleton,
  Zx as SidebarMenuSub,
  eC as SidebarMenuSubButton,
  tC as SidebarMenuSubItem,
  aC as SidebarProvider,
  nC as SidebarRail,
  oC as SidebarSeparator,
  rC as SidebarTrigger,
  Sl as Skeleton,
  sC as Slider,
  t_ as TabBaseContent,
  Uw as Table,
  Kw as TableBody,
  Gw as TableCaption,
  Zn as TableCell,
  Cx as TableEmpty,
  xx as TableFooter,
  Hw as TableHead,
  jw as TableHeader,
  Za as TableRow,
  xr as TableRowAction,
  Dx as TabsContent,
  Qw as TabsItem,
  Bl as TabsList,
  Jw as TabsRoot,
  kx as TabsTrigger,
  fx as TextArea,
  N_ as Toast,
  iC as ToastAction,
  W_ as ToastClose,
  Pl as ToastDescription,
  K_ as ToastProvider,
  U_ as ToastTitle,
  z_ as ToastViewport,
  lC as Toaster,
  Nw as Toggle,
  D_ as Tooltip,
  S_ as TooltipContent,
  Yx as TooltipProvider,
  E_ as TooltipTrigger,
  Py as badgeVariants,
  aa as buttonVariants,
  q_ as preset,
  h_ as sheetVariants,
  A_ as sidebarMenuButtonVariants,
  Oy as spinnerSize,
  R_ as toast,
  H_ as toastVariants,
  Bo as useSidebar,
  V_ as useToast
};
