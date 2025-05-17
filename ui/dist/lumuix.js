import * as Ll from "vue";
import { computed as $, ref as A, shallowRef as Ft, watch as te, getCurrentScope as No, onScopeDispose as zo, shallowReadonly as qt, unref as l, defineComponent as y, toRefs as me, createBlock as g, openBlock as v, withCtx as f, renderSlot as b, getCurrentInstance as qe, toRef as Vs, camelize as Rs, withKeys as He, h as Ze, onMounted as ce, createElementVNode as ie, toDisplayString as Q, normalizeProps as H, guardReactiveProps as j, createTextVNode as J, mergeProps as P, withModifiers as ke, createCommentVNode as oe, createElementBlock as L, Fragment as X, renderList as fe, resolveDynamicComponent as Ae, createVNode as B, useSlots as Fs, onBeforeMount as id, Teleport as On, watchEffect as be, onBeforeUnmount as Uo, nextTick as se, withDirectives as ua, vShow as Wo, watchSyncEffect as dd, isRef as ca, inject as Ho, provide as Ls, toHandlers as ud, normalizeStyle as Ot, toHandlerKey as cd, Comment as Ns, cloneVNode as pd, vModelSelect as fd, onBeforeUpdate as vd, onUpdated as md, markRaw as hd, onUnmounted as At, readonly as La, toRaw as gd, reactive as zs, customRef as Us, mergeDefaults as Ws, watchPostEffect as yd, effectScope as Hs, normalizeClass as K, hasInjectionContext as Ks, toValue as St, mergeModels as ho, useModel as js, vModelDynamic as bd, vModelText as _d, isVNode as wd } from "vue";
function xd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Gs(e, t) {
  return { handler: e, config: t };
}
Gs.withOptions = function(e, t = () => ({})) {
  function a(n) {
    return { handler: e(n), config: t(n) };
  }
  return a.__isOptionsFunction = !0, a;
};
var $d = Gs, Cd = $d;
const kd = Cd;
function Nl(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var Bd = kd(
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
      { values: Nl(a("animationDuration")) }
    ), t(
      { delay: (n) => ({ animationDelay: n }) },
      { values: a("animationDelay") }
    ), t(
      { ease: (n) => ({ animationTimingFunction: n }) },
      { values: Nl(a("animationTimingFunction")) }
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
const Dd = /* @__PURE__ */ xd(Bd), k0 = {
  safelist: ["dark"],
  darkMode: ["class"],
  plugins: [Dd],
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
const qs = 1721426;
function Vt(e, t, a, n) {
  t = Na(e, t);
  let o = t - 1, s = -2;
  return a <= 2 ? s = 0 : Bt(t) && (s = -1), qs - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + s + n);
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
const Sd = {
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
    let a = t, n = a - qs, o = Math.floor(n / 146097), s = Xt(n, 146097), r = Math.floor(s / 36524), i = Xt(s, 36524), d = Math.floor(i / 1461), u = Xt(i, 1461), c = Math.floor(u / 365), p = o * 400 + r * 100 + d * 4 + c + (r !== 4 && c !== 4 ? 1 : 0), [_, m] = An(p), w = a - Vt(_, m, 1, 1), h = 2;
    a < Vt(_, m, 3, 1) ? h = 0 : Bt(m) && (h = 1);
    let x = Math.floor(((w + h) * 12 + 373) / 367), C = a - Vt(_, m, x, 1) + 1;
    return new _e(_, m, x, C);
  }
  toJulianDay(t) {
    return Vt(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return Sd[Bt(t.year) ? "leapyear" : "standard"][t.month - 1];
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
const Pd = {
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
  return t = Pe(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Ko(e, t) {
  return t = Pe(t, e.calendar), e = Ma(e), t = Ma(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Xe(e, t) {
  return jo(e.calendar, t.calendar) && Ce(e, t);
}
function zl(e, t) {
  return jo(e.calendar, t.calendar) && Ko(e, t);
}
function jo(e, t) {
  var a, n, o, s;
  return (s = (o = (a = e.isEqual) === null || a === void 0 ? void 0 : a.call(e, t)) !== null && o !== void 0 ? o : (n = t.isEqual) === null || n === void 0 ? void 0 : n.call(t, e)) !== null && s !== void 0 ? s : e.identifier === t.identifier;
}
function Ys(e, t) {
  return Ce(e, hn(t));
}
function Js(e, t, a) {
  let n = e.calendar.toJulianDay(e), o = Md(t), s = Math.ceil(n + 1 - o) % 7;
  return s < 0 && (s += 7), s;
}
function Ed(e) {
  return ut(Date.now(), e);
}
function hn(e) {
  return Vd(Ed(e));
}
function Qs(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function Od(e, t) {
  return Ul(e) - Ul(t);
}
function Ul(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let Jn = null;
function mt() {
  return Jn == null && (Jn = new Intl.DateTimeFormat().resolvedOptions().timeZone), Jn;
}
function Ma(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function Wl(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const Hl = /* @__PURE__ */ new Map();
function Ad(e) {
  if (Intl.Locale) {
    let a = Hl.get(e);
    return a || (a = new Intl.Locale(e).maximize().region, a && Hl.set(e, a)), a;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function Md(e) {
  let t = Ad(e);
  return t && Pd[t] || 0;
}
function na(e) {
  e = Pe(e, new Ke());
  let t = Na(e.era, e.year);
  return Xs(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function Xs(e, t, a, n, o, s, r) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, s, r), i.setUTCFullYear(e, t - 1, a), i.getTime();
}
function go(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === mt()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: s, minute: r, second: i } = Zs(e, t);
  return Xs(a, n, o, s, r, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const Kl = /* @__PURE__ */ new Map();
function Zs(e, t) {
  let a = Kl.get(t);
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
  }), Kl.set(t, a));
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
const jl = 864e5;
function Td(e, t, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((s) => Id(e, t, s));
}
function Id(e, t, a) {
  let n = Zs(a, t);
  return e.year === n.year && e.month === n.month && e.day === n.day && e.hour === n.hour && e.minute === n.minute && e.second === n.second;
}
function dt(e, t, a = "compatible") {
  let n = oa(e);
  if (t === "UTC") return na(n);
  if (t === mt() && a === "compatible") {
    n = Pe(n, new Ke());
    let d = /* @__PURE__ */ new Date(), u = Na(n.era, n.year);
    return d.setFullYear(u, n.month - 1, n.day), d.setHours(n.hour, n.minute, n.second, n.millisecond), d.getTime();
  }
  let o = na(n), s = go(o - jl, t), r = go(o + jl, t), i = Td(n, t, o - s, o - r);
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
function er(e, t, a = "compatible") {
  return new Date(dt(e, t, a));
}
function ut(e, t) {
  let a = go(e, t), n = new Date(e + a), o = n.getUTCFullYear(), s = n.getUTCMonth() + 1, r = n.getUTCDate(), i = n.getUTCHours(), d = n.getUTCMinutes(), u = n.getUTCSeconds(), c = n.getUTCMilliseconds();
  return new sa(o < 1 ? "BC" : "AD", o < 1 ? -o + 1 : o, s, r, t, a, i, d, u, c);
}
function Vd(e) {
  return new _e(e.calendar, e.era, e.year, e.month, e.day);
}
function oa(e, t) {
  let a = 0, n = 0, o = 0, s = 0;
  if ("timeZone" in e) ({ hour: a, minute: n, second: o, millisecond: s } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: a, minute: n, second: o, millisecond: s } = t), new la(e.calendar, e.era, e.year, e.month, e.day, a, n, o, s);
}
function Pe(e, t) {
  if (jo(e.calendar, t)) return e;
  let a = t.fromJulianDay(e.calendar.toJulianDay(e)), n = e.copy();
  return n.calendar = t, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, Lt(n), n;
}
function Rd(e, t, a) {
  if (e instanceof sa)
    return e.timeZone === t ? e : Ld(e, t);
  let n = dt(e, t, a);
  return ut(n, t);
}
function Fd(e) {
  let t = na(e) - e.offset;
  return new Date(t);
}
function Ld(e, t) {
  let a = na(e) - e.offset;
  return Pe(ut(a, t), e.calendar);
}
const Ba = 36e5;
function Mn(e, t) {
  let a = e.copy(), n = "hour" in a ? Wd(a, t) : 0;
  yo(a, t.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e), a.month += t.months || 0, bo(a), tr(a), a.day += (t.weeks || 0) * 7, a.day += t.days || 0, a.day += n, Nd(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
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
function yo(e, t) {
  var a, n;
  !((a = (n = e.calendar).isInverseEra) === null || a === void 0) && a.call(n, e) && (t = -t), e.year += t;
}
function bo(e) {
  for (; e.month < 1; )
    yo(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, yo(e, 1);
}
function Nd(e) {
  for (; e.day < 1; )
    e.month--, bo(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, bo(e);
}
function tr(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function Lt(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), tr(e);
}
function ar(e) {
  let t = {};
  for (let a in e) typeof e[a] == "number" && (t[a] = -e[a]);
  return t;
}
function nr(e, t) {
  return Mn(e, ar(t));
}
function Go(e, t) {
  let a = e.copy();
  return t.era != null && (a.era = t.era), t.year != null && (a.year = t.year), t.month != null && (a.month = t.month), t.day != null && (a.day = t.day), Lt(a), a;
}
function gn(e, t) {
  let a = e.copy();
  return t.hour != null && (a.hour = t.hour), t.minute != null && (a.minute = t.minute), t.second != null && (a.second = t.second), t.millisecond != null && (a.millisecond = t.millisecond), Ud(a), a;
}
function zd(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Xa(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Xa(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Xa(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = Xa(e.hour, 24), t;
}
function Ud(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Xa(e, t) {
  let a = e % t;
  return a < 0 && (a += t), a;
}
function Wd(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, zd(e);
}
function qo(e, t, a, n) {
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
function or(e, t, a, n) {
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
function lr(e, t) {
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
  return Pe(n, e.calendar);
}
function Hd(e, t) {
  return lr(e, ar(t));
}
function Kd(e, t, a, n) {
  switch (t) {
    case "hour": {
      let o = 0, s = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let w = e.hour >= 12;
        o = w ? 12 : 0, s = w ? 23 : 11;
      }
      let r = oa(e), i = Pe(gn(r, {
        hour: o
      }), new Ke()), d = [
        dt(i, e.timeZone, "earlier"),
        dt(i, e.timeZone, "later")
      ].filter((w) => ut(w, e.timeZone).day === i.day)[0], u = Pe(gn(r, {
        hour: s
      }), new Ke()), c = [
        dt(u, e.timeZone, "earlier"),
        dt(u, e.timeZone, "later")
      ].filter((w) => ut(w, e.timeZone).day === u.day).pop(), p = na(e) - e.offset, _ = Math.floor(p / Ba), m = p % Ba;
      return p = ct(_, a, Math.floor(d / Ba), Math.floor(c / Ba), n == null ? void 0 : n.round) * Ba + m, Pe(ut(p, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return or(e, t, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = qo(oa(e), t, a, n), s = dt(o, e.timeZone);
      return Pe(ut(s, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function jd(e, t, a) {
  let n = oa(e), o = gn(Go(n, t), t);
  if (o.compare(n) === 0) return e;
  let s = dt(o, e.timeZone, a);
  return Pe(ut(s, e.timeZone), e.calendar);
}
function Gd(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function sr(e) {
  let t = Pe(e, new Ke()), a;
  return t.era === "BC" ? a = t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : a = String(t.year).padStart(4, "0"), `${a}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function rr(e) {
  return `${sr(e)}T${Gd(e)}`;
}
function qd(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let a = Math.floor(e / 36e5), n = e % 36e5 / 6e4;
  return `${t}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function Yd(e) {
  return `${rr(e)}${qd(e.offset)}[${e.timeZone}]`;
}
function Jd(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Yo(e, t, a) {
  Jd(e, t), t.set(e, a);
}
function Jo(e) {
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
var Qd = /* @__PURE__ */ new WeakMap();
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
    return nr(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Go(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return qo(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return er(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return sr(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return Qs(this, t);
  }
  constructor(...t) {
    Yo(this, Qd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = Jo(t);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, Lt(this);
  }
}
var Xd = /* @__PURE__ */ new WeakMap();
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
    return nr(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Go(gn(this, t), t);
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
        return qo(this, t, a, n);
      default:
        return or(this, t, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, a) {
    return er(this, t, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return rr(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let a = Qs(this, t);
    return a === 0 ? Od(this, oa(t)) : a;
  }
  constructor(...t) {
    Yo(this, Xd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = Jo(t);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, Lt(this);
  }
}
var Zd = /* @__PURE__ */ new WeakMap();
class sa {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new sa(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new sa(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return lr(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return Hd(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, a) {
    return jd(this, t, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return Kd(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return Fd(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return Yd(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - Rd(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    Yo(this, Zd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = Jo(t), i = t.shift(), d = t.shift();
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
], eu = [
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
function Gl(e) {
  const t = Zt.findIndex(([a, n, o]) => e.year < a || e.year === a && e.month < n || e.year === a && e.month === n && e.day < o);
  return t === -1 ? Zt.length - 1 : t === 0 ? 0 : t - 1;
}
function Qn(e) {
  let t = cn[kt.indexOf(e.era)];
  if (!t) throw new Error("Unknown era: " + e.era);
  return new _e(e.year + t, e.month, e.day);
}
class tu extends Ke {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), n = Gl(a);
    return new _e(this, kt[n], a.year - cn[n], a.month, a.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Qn(t));
  }
  balanceDate(t) {
    let a = Qn(t), n = Gl(a);
    kt[n] !== t.era && (t.era = kt[n], t.year = a.year - cn[n]), this.constrainDate(t);
  }
  constrainDate(t) {
    let a = kt.indexOf(t.era), n = eu[a];
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
    return super.getDaysInMonth(Qn(t));
  }
  getMinimumMonthInYear(t) {
    let a = ql(t);
    return a ? a[1] : 1;
  }
  getMinimumDayInMonth(t) {
    let a = ql(t);
    return a && t.month === a[1] ? a[2] : 1;
  }
  constructor(...t) {
    super(...t), this.identifier = "japanese";
  }
}
function ql(e) {
  if (e.year === 1) {
    let t = kt.indexOf(e.era);
    return Zt[t];
  }
}
const ir = -543;
class au extends Ke {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), n = Na(a.era, a.year);
    return new _e(this, n - ir, a.month, a.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Yl(t));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Yl(t));
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "buddhist";
  }
}
function Yl(e) {
  let [t, a] = An(e.year + ir);
  return new _e(t, a, e.month, e.day);
}
const yn = 1911;
function dr(e) {
  return e.era === "minguo" ? e.year + yn : 1 - e.year + yn;
}
function Jl(e) {
  let t = e - yn;
  return t > 0 ? [
    "minguo",
    t
  ] : [
    "before_minguo",
    1 - t
  ];
}
class nu extends Ke {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), n = Na(a.era, a.year), [o, s] = Jl(n);
    return new _e(this, o, s, a.month, a.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Ql(t));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(t) {
    let [a, n] = Jl(dr(t));
    t.era = a, t.year = n;
  }
  isInverseEra(t) {
    return t.era === "before_minguo";
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Ql(t));
  }
  getYearsInEra(t) {
    return t.era === "before_minguo" ? 9999 : 9999 - yn;
  }
  constructor(...t) {
    super(...t), this.identifier = "roc";
  }
}
function Ql(e) {
  let [t, a] = An(dr(e));
  return new _e(t, a, e.month, e.day);
}
const Xl = 1948320, Zl = [
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
class ou {
  fromJulianDay(t) {
    let a = t - Xl, n = 1 + Math.floor((33 * a + 3) / 12053), o = 365 * (n - 1) + Math.floor((8 * n + 21) / 33), s = a - o, r = s < 216 ? Math.floor(s / 31) : Math.floor((s - 6) / 30), i = s - Zl[r] + 1;
    return new _e(this, n, r + 1, i);
  }
  toJulianDay(t) {
    let a = Xl - 1 + 365 * (t.year - 1) + Math.floor((8 * t.year + 21) / 33);
    return a += Zl[t.month - 1], a += t.day, a;
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
const Xn = 78, es = 80;
class lu extends Ke {
  fromJulianDay(t) {
    let a = super.fromJulianDay(t), n = a.year - Xn, o = t - Vt(a.era, a.year, 1, 1), s;
    o < es ? (n--, s = Bt(a.year - 1) ? 31 : 30, o += s + 155 + 90 + 10) : (s = Bt(a.year) ? 31 : 30, o -= es);
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
    let a = t.year + Xn, [n, o] = An(a), s, r;
    return Bt(o) ? (s = 31, r = Vt(n, o, 3, 21)) : (s = 30, r = Vt(n, o, 3, 22)), t.month === 1 ? r + t.day - 1 : (r += s + Math.min(t.month - 2, 5) * 31, t.month >= 8 && (r += (t.month - 7) * 30), r += t.day - 1, r);
  }
  getDaysInMonth(t) {
    return t.month === 1 && Bt(t.year + Xn) || t.month >= 2 && t.month <= 6 ? 31 : 30;
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
const bn = 1948440, ts = 1948439, Re = 1300, Yt = 1600, su = 460322;
function _n(e, t, a, n) {
  return n + Math.ceil(29.5 * (a - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function ur(e, t, a) {
  let n = Math.floor((30 * (a - t) + 10646) / 10631), o = Math.min(12, Math.ceil((a - (29 + _n(t, n, 1, 1))) / 29.5) + 1), s = a - _n(t, n, o, 1) + 1;
  return new _e(e, n, o, s);
}
function as(e) {
  return (14 + 11 * e) % 30 < 11;
}
class Qo {
  fromJulianDay(t) {
    return ur(this, bn, t);
  }
  toJulianDay(t) {
    return _n(bn, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    let a = 29 + t.month % 2;
    return t.month === 12 && as(t.year) && a++, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(t) {
    return as(t.year) ? 355 : 354;
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
class ru extends Qo {
  fromJulianDay(t) {
    return ur(this, ts, t);
  }
  toJulianDay(t) {
    return _n(ts, t.year, t.month, t.day);
  }
  constructor(...t) {
    super(...t), this.identifier = "islamic-tbla";
  }
}
const iu = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let _o, ea;
function pn(e) {
  return su + ea[e - Re];
}
function Pa(e, t) {
  let a = e - Re, n = 1 << 11 - (t - 1);
  return _o[a] & n ? 30 : 29;
}
function ns(e, t) {
  let a = pn(e);
  for (let n = 1; n < t; n++) a += Pa(e, n);
  return a;
}
function os(e) {
  return ea[e + 1 - Re] - ea[e - Re];
}
class du extends Qo {
  fromJulianDay(t) {
    let a = t - bn, n = pn(Re), o = pn(Yt);
    if (a < n || a > o) return super.fromJulianDay(t);
    {
      let s = Re - 1, r = 1, i = 1;
      for (; i > 0; ) {
        s++, i = a - pn(s) + 1;
        let d = os(s);
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
      return new _e(this, s, r, a - ns(s, r) + 1);
    }
  }
  toJulianDay(t) {
    return t.year < Re || t.year > Yt ? super.toJulianDay(t) : bn + ns(t.year, t.month) + (t.day - 1);
  }
  getDaysInMonth(t) {
    return t.year < Re || t.year > Yt ? super.getDaysInMonth(t) : Pa(t.year, t.month);
  }
  getDaysInYear(t) {
    return t.year < Re || t.year > Yt ? super.getDaysInYear(t) : os(t.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", _o || (_o = new Uint16Array(Uint8Array.from(atob(iu), (t) => t.charCodeAt(0)).buffer)), !ea) {
      ea = new Uint32Array(Yt - Re + 1);
      let t = 0;
      for (let a = Re; a <= Yt; a++) {
        ea[a - Re] = t;
        for (let n = 1; n <= 12; n++) t += Pa(a, n);
      }
    }
  }
}
const ls = 347997, cr = 1080, pr = 24 * cr, uu = 29, cu = 12 * cr + 793, pu = uu * pr + cu;
function It(e) {
  return Xt(e * 7 + 1, 19) < 7;
}
function fn(e) {
  let t = Math.floor((235 * e - 234) / 19), a = 12084 + 13753 * t, n = t * 29 + Math.floor(a / 25920);
  return Xt(3 * (n + 1), 7) < 3 && (n += 1), n;
}
function fu(e) {
  let t = fn(e - 1), a = fn(e);
  return fn(e + 1) - a === 356 ? 2 : a - t === 382 ? 1 : 0;
}
function Oa(e) {
  return fn(e) + fu(e);
}
function fr(e) {
  return Oa(e + 1) - Oa(e);
}
function vu(e) {
  let t = fr(e);
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
  let a = vu(e);
  return t === 2 ? a === 2 ? 30 : 29 : t === 3 ? a === 0 ? 29 : 30 : t === 6 ? It(e) ? 30 : 0 : 30;
}
class mu {
  fromJulianDay(t) {
    let a = t - ls, n = a * pr / pu, o = Math.floor((19 * n + 234) / 235) + 1, s = Oa(o), r = Math.floor(a - s);
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
    return a + t.day + ls;
  }
  getDaysInMonth(t) {
    return Za(t.year, t.month);
  }
  getMonthsInYear(t) {
    return It(t.year) ? 13 : 12;
  }
  getDaysInYear(t) {
    return fr(t.year);
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
const wo = 1723856, ss = 1824665, xo = 5500;
function wn(e, t, a, n) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (a - 1) + n - 1;
}
function Xo(e, t) {
  let a = Math.floor(4 * (t - e) / 1461), n = 1 + Math.floor((t - wn(e, a, 1, 1)) / 30), o = t + 1 - wn(e, a, n, 1);
  return [
    a,
    n,
    o
  ];
}
function vr(e) {
  return Math.floor(e % 4 / 3);
}
function mr(e, t) {
  return t % 13 !== 0 ? 30 : vr(e) + 5;
}
class Zo {
  fromJulianDay(t) {
    let [a, n, o] = Xo(wo, t), s = "AM";
    return a <= 0 && (s = "AA", a += xo), new _e(this, s, a, n, o);
  }
  toJulianDay(t) {
    let a = t.year;
    return t.era === "AA" && (a -= xo), wn(wo, a, t.month, t.day);
  }
  getDaysInMonth(t) {
    return mr(t.year, t.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(t) {
    return 365 + vr(t.year);
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
class hu extends Zo {
  fromJulianDay(t) {
    let [a, n, o] = Xo(wo, t);
    return a += xo, new _e(this, "AA", a, n, o);
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
class gu extends Zo {
  fromJulianDay(t) {
    let [a, n, o] = Xo(ss, t), s = "CE";
    return a <= 0 && (s = "BCE", a = 1 - a), new _e(this, s, a, n, o);
  }
  toJulianDay(t) {
    let a = t.year;
    return t.era === "BCE" && (a = 1 - a), wn(ss, a, t.month, t.day);
  }
  getDaysInMonth(t) {
    let a = t.year;
    return t.era === "BCE" && (a = 1 - a), mr(a, t.month);
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
function yu(e) {
  switch (e) {
    case "buddhist":
      return new au();
    case "ethiopic":
      return new Zo();
    case "ethioaa":
      return new hu();
    case "coptic":
      return new gu();
    case "hebrew":
      return new mu();
    case "indian":
      return new lu();
    case "islamic-civil":
      return new Qo();
    case "islamic-tbla":
      return new ru();
    case "islamic-umalqura":
      return new du();
    case "japanese":
      return new tu();
    case "persian":
      return new ou();
    case "roc":
      return new nu();
    case "gregory":
    default:
      return new Ke();
  }
}
let Zn = /* @__PURE__ */ new Map();
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
    return wu() && (this.resolvedHourCycle || (this.resolvedHourCycle = xu(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, a = {}) {
    this.formatter = hr(t, a), this.options = a;
  }
}
const bu = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function hr(e, t = {}) {
  if (typeof t.hour12 == "boolean" && _u()) {
    t = {
      ...t
    };
    let o = bu[String(t.hour12)][e.split("-")[0]], s = t.hour12 ? "h12" : "h23";
    t.hourCycle = o ?? s, delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((o, s) => o[0] < s[0] ? -1 : 1).join() : "");
  if (Zn.has(a)) return Zn.get(a);
  let n = new Intl.DateTimeFormat(e, t);
  return Zn.set(a, n), n;
}
let eo = null;
function _u() {
  return eo == null && (eo = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), eo;
}
let to = null;
function wu() {
  return to == null && (to = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), to;
}
function xu(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = hr(e, {
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
function $u(e, t) {
  const a = [];
  for (let n = 0; n < e.length; n += t)
    a.push(e.slice(n, n + t));
  return a;
}
function Fe(e, t = mt()) {
  return el(e) ? e.toDate() : e.toDate(t);
}
function Cu(e) {
  return e instanceof la;
}
function el(e) {
  return e instanceof sa;
}
function ku(e) {
  return Cu(e) || el(e);
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
function Bu(e, t) {
  return e.compare(t) <= 0;
}
function Du(e, t) {
  return e.compare(t) >= 0;
}
function Su(e, t, a) {
  return Du(e, t) && Bu(e, a);
}
function Pu(e, t, a) {
  return Ea(e, t) && Dt(e, a);
}
function Eu(e, t, a) {
  const n = Js(e, a);
  return t > n ? e.subtract({ days: n + 7 - t }) : t === n ? e : e.subtract({ days: n - t });
}
function Ou(e, t, a) {
  const n = Js(e, a), o = t === 0 ? 6 : t - 1;
  return n === o ? e : n > o ? e.add({ days: 7 - n + o }) : e.add({ days: o - n });
}
function Au(e, t, a, n) {
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
function rs(e, t) {
  const a = [];
  let n = e.add({ days: 1 });
  const o = t;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function ao(e) {
  const { dateObj: t, weekStartsOn: a, fixedWeeks: n, locale: o } = e, s = ht(t), r = Array.from({ length: s }, (x, C) => t.set({ day: C + 1 })), i = Ma(t), d = Wl(t), u = Eu(i, a, o), c = Ou(d, a, o), p = rs(u.subtract({ days: 1 }), i), _ = rs(d, c.add({ days: 1 })), m = p.length + r.length + _.length;
  if (n && m < 42) {
    const x = 42 - m;
    let C = _[_.length - 1];
    C || (C = Wl(t));
    const D = Array.from({ length: x }, (k, O) => {
      const E = O + 1;
      return C.add({ days: E });
    });
    _.push(...D);
  }
  const w = p.concat(r, _), h = $u(w, 7);
  return {
    value: t,
    cells: w,
    rows: h
  };
}
function Mu(e) {
  const { dateObj: t, startIndex: a, endIndex: n } = e, o = Array.from({ length: Math.abs(a ?? 0) + n }, (s, r) => r <= Math.abs(a ?? 0) ? t.subtract({ years: r }).set({ day: 1, month: 1 }) : t.add({ years: r - n }).set({ day: 1, month: 1 }));
  return o.sort((s, r) => s.year - r.year), o;
}
function Tu(e) {
  const { dateObj: t, numberOfMonths: a = 1, pagedNavigation: n = !1 } = e;
  return a && n ? Array.from({ length: Math.floor(12 / a) }, (o, s) => Ma(t.set({ month: s * a + 1 }))) : Array.from({ length: 12 }, (o, s) => Ma(t.set({ month: s + 1 })));
}
function Tt(e) {
  const { numberOfMonths: t, dateObj: a, ...n } = e, o = [];
  if (!t || t === 1)
    return o.push(
      ao({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    ao({
      ...n,
      dateObj: a
    })
  );
  for (let s = 1; s < t; s++) {
    const r = a.add({ months: s });
    o.push(
      ao({
        ...n,
        dateObj: r
      })
    );
  }
  return o;
}
const Iu = ["top", "right", "bottom", "left"], Pt = Math.min, Oe = Math.max, xn = Math.round, en = Math.floor, et = (e) => ({
  x: e,
  y: e
}), Vu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ru = {
  start: "end",
  end: "start"
};
function $o(e, t, a) {
  return Oe(e, Pt(t, a));
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
function tl(e) {
  return e === "x" ? "y" : "x";
}
function al(e) {
  return e === "y" ? "height" : "width";
}
function ft(e) {
  return ["top", "bottom"].includes(yt(e)) ? "y" : "x";
}
function nl(e) {
  return tl(ft(e));
}
function Fu(e, t, a) {
  a === void 0 && (a = !1);
  const n = pa(e), o = nl(e), s = al(o);
  let r = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (r = $n(r)), [r, $n(r)];
}
function Lu(e) {
  const t = $n(e);
  return [Co(e), t, Co(t)];
}
function Co(e) {
  return e.replace(/start|end/g, (t) => Ru[t]);
}
function Nu(e, t, a) {
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
function zu(e, t, a, n) {
  const o = pa(e);
  let s = Nu(yt(e), a === "start", n);
  return o && (s = s.map((r) => r + "-" + o), t && (s = s.concat(s.map(Co)))), s;
}
function $n(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Vu[t]);
}
function Uu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function gr(e) {
  return typeof e != "number" ? Uu(e) : {
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
function is(e, t, a) {
  let {
    reference: n,
    floating: o
  } = e;
  const s = ft(t), r = nl(t), i = al(r), d = yt(t), u = s === "y", c = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, _ = n[i] / 2 - o[i] / 2;
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
const Wu = async (e, t, a) => {
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
  } = is(u, n, d), _ = n, m = {}, w = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: x,
      fn: C
    } = i[h], {
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
    } = is(u, _, d)), h = -1);
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
  } = gt(t, e), w = gr(m), x = i[_ ? p === "floating" ? "reference" : "floating" : p], C = Cn(await s.getClippingRect({
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
const Hu = (e) => ({
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
    const p = gr(c), _ = {
      x: a,
      y: n
    }, m = nl(o), w = al(m), h = await r.getDimensions(u), x = m === "y", C = x ? "top" : "left", D = x ? "bottom" : "right", k = x ? "clientHeight" : "clientWidth", O = s.reference[w] + s.reference[m] - _[m] - s.floating[w], E = _[m] - s.reference[m], I = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(u));
    let M = I ? I[k] : 0;
    (!M || !await (r.isElement == null ? void 0 : r.isElement(I))) && (M = i.floating[k] || s.floating[w]);
    const W = O / 2 - E / 2, N = M / 2 - h[w] / 2 - 1, S = Pt(p[C], N), V = Pt(p[D], N), R = S, q = M - h[w] - V, U = M / 2 - h[w] / 2 + W, Y = $o(R, U, q), ee = !d.arrow && pa(o) != null && U !== Y && s.reference[w] / 2 - (U < R ? S : V) - h[w] / 2 < 0, ge = ee ? U < R ? U - R : U - q : 0;
    return {
      [m]: _[m] + ge,
      data: {
        [m]: Y,
        centerOffset: U - Y - ge,
        ...ee && {
          alignmentOffset: ge
        }
      },
      reset: ee
    };
  }
}), Ku = function(e) {
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
        flipAlignment: h = !0,
        ...x
      } = gt(e, t);
      if ((a = s.arrow) != null && a.alignmentOffset)
        return {};
      const C = yt(o), D = ft(i), k = yt(i) === i, O = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), E = _ || (k || !h ? [$n(i)] : Lu(i)), I = w !== "none";
      !_ && I && E.push(...zu(i, h, w, O));
      const M = [i, ...E], W = await Ta(t, x), N = [];
      let S = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (c && N.push(W[C]), p) {
        const Y = Fu(o, r, O);
        N.push(W[Y[0]], W[Y[1]]);
      }
      if (S = [...S, {
        placement: o,
        overflows: N
      }], !N.every((Y) => Y <= 0)) {
        var V, R;
        const Y = (((V = s.flip) == null ? void 0 : V.index) || 0) + 1, ee = M[Y];
        if (ee) {
          var q;
          const ye = p === "alignment" ? D !== ft(ee) : !1, G = ((q = S[0]) == null ? void 0 : q.overflows[0]) > 0;
          if (!ye || G)
            return {
              data: {
                index: Y,
                overflows: S
              },
              reset: {
                placement: ee
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
function ds(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function us(e) {
  return Iu.some((t) => e[t] >= 0);
}
const ju = function(e) {
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
          }), r = ds(s, a.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: us(r)
            }
          };
        }
        case "escaped": {
          const s = await Ta(t, {
            ...o,
            altBoundary: !0
          }), r = ds(s, a.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: us(r)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Gu(e, t) {
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
const qu = function(e) {
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
      } = t, d = await Gu(t, e);
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
}, Yu = function(e) {
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
      }, c = await Ta(t, d), p = ft(yt(o)), _ = tl(p);
      let m = u[_], w = u[p];
      if (s) {
        const x = _ === "y" ? "top" : "left", C = _ === "y" ? "bottom" : "right", D = m + c[x], k = m - c[C];
        m = $o(D, m, k);
      }
      if (r) {
        const x = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", D = w + c[x], k = w - c[C];
        w = $o(D, w, k);
      }
      const h = i.fn({
        ...t,
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
}, Ju = function(e) {
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
      }, p = ft(o), _ = tl(p);
      let m = c[_], w = c[p];
      const h = gt(i, t), x = typeof h == "number" ? {
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
}, Qu = function(e) {
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
        height: h
      } = s.floating;
      let x, C;
      p === "top" || p === "bottom" ? (x = p, C = _ === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, x = _ === "end" ? "top" : "bottom");
      const D = h - c.top - c.bottom, k = w - c.left - c.right, O = Pt(h - c[x], D), E = Pt(w - c[C], k), I = !t.middlewareData.shift;
      let M = O, W = E;
      if ((a = t.middlewareData.shift) != null && a.enabled.x && (W = k), (n = t.middlewareData.shift) != null && n.enabled.y && (M = D), I && !_) {
        const S = Oe(c.left, 0), V = Oe(c.right, 0), R = Oe(c.top, 0), q = Oe(c.bottom, 0);
        m ? W = w - 2 * (S !== 0 || V !== 0 ? S + V : Oe(c.left, c.right)) : M = h - 2 * (R !== 0 || q !== 0 ? R + q : Oe(c.top, c.bottom));
      }
      await d({
        ...t,
        availableWidth: W,
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
function Tn() {
  return typeof window < "u";
}
function zt(e) {
  return ol(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Me(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function at(e) {
  var t;
  return (t = (ol(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ol(e) {
  return Tn() ? e instanceof Node || e instanceof Me(e).Node : !1;
}
function je(e) {
  return Tn() ? e instanceof Element || e instanceof Me(e).Element : !1;
}
function tt(e) {
  return Tn() ? e instanceof HTMLElement || e instanceof Me(e).HTMLElement : !1;
}
function cs(e) {
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
function Xu(e) {
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
function ll(e) {
  const t = sl(), a = je(e) ? Ge(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => a[n] ? a[n] !== "none" : !1) || (a.containerType ? a.containerType !== "normal" : !1) || !t && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !t && (a.filter ? a.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function Zu(e) {
  let t = Et(e);
  for (; tt(t) && !ra(t); ) {
    if (ll(t))
      return t;
    if (In(t))
      return null;
    t = Et(t);
  }
  return null;
}
function sl() {
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
    cs(e) && e.host || // Fallback.
    at(e)
  );
  return cs(t) ? t.host : t;
}
function yr(e) {
  const t = Et(e);
  return ra(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : tt(t) && za(t) ? t : yr(t);
}
function Ia(e, t, a) {
  var n;
  t === void 0 && (t = []), a === void 0 && (a = !0);
  const o = yr(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Me(o);
  if (s) {
    const i = ko(r);
    return t.concat(r, r.visualViewport || [], za(o) ? o : [], i && a ? Ia(i) : []);
  }
  return t.concat(o, Ia(o, [], a));
}
function ko(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function br(e) {
  const t = Ge(e);
  let a = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = tt(e), s = o ? e.offsetWidth : a, r = o ? e.offsetHeight : n, i = xn(a) !== s || xn(n) !== r;
  return i && (a = s, n = r), {
    width: a,
    height: n,
    $: i
  };
}
function rl(e) {
  return je(e) ? e : e.contextElement;
}
function ta(e) {
  const t = rl(e);
  if (!tt(t))
    return et(1);
  const a = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = br(t);
  let r = (s ? xn(a.width) : a.width) / n, i = (s ? xn(a.height) : a.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: r,
    y: i
  };
}
const ec = /* @__PURE__ */ et(0);
function _r(e) {
  const t = Me(e);
  return !sl() || !t.visualViewport ? ec : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function tc(e, t, a) {
  return t === void 0 && (t = !1), !a || t && a !== Me(e) ? !1 : t;
}
function Nt(e, t, a, n) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const o = e.getBoundingClientRect(), s = rl(e);
  let r = et(1);
  t && (n ? je(n) && (r = ta(n)) : r = ta(e));
  const i = tc(s, a, n) ? _r(s) : et(0);
  let d = (o.left + i.x) / r.x, u = (o.top + i.y) / r.y, c = o.width / r.x, p = o.height / r.y;
  if (s) {
    const _ = Me(s), m = n && je(n) ? Me(n) : n;
    let w = _, h = ko(w);
    for (; h && n && m !== w; ) {
      const x = ta(h), C = h.getBoundingClientRect(), D = Ge(h), k = C.left + (h.clientLeft + parseFloat(D.paddingLeft)) * x.x, O = C.top + (h.clientTop + parseFloat(D.paddingTop)) * x.y;
      d *= x.x, u *= x.y, c *= x.x, p *= x.y, d += k, u += O, w = Me(h), h = ko(w);
    }
  }
  return Cn({
    width: c,
    height: p,
    x: d,
    y: u
  });
}
function il(e, t) {
  const a = Vn(e).scrollLeft;
  return t ? t.left + a : Nt(at(e)).left + a;
}
function wr(e, t, a) {
  a === void 0 && (a = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (a ? 0 : (
    // RTL <body> scrollbar.
    il(e, n)
  )), s = n.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function ac(e) {
  let {
    elements: t,
    rect: a,
    offsetParent: n,
    strategy: o
  } = e;
  const s = o === "fixed", r = at(n), i = t ? In(t.floating) : !1;
  if (n === r || i && s)
    return a;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = et(1);
  const c = et(0), p = tt(n);
  if ((p || !p && !s) && ((zt(n) !== "body" || za(r)) && (d = Vn(n)), tt(n))) {
    const m = Nt(n);
    u = ta(n), c.x = m.x + n.clientLeft, c.y = m.y + n.clientTop;
  }
  const _ = r && !p && !s ? wr(r, d, !0) : et(0);
  return {
    width: a.width * u.x,
    height: a.height * u.y,
    x: a.x * u.x - d.scrollLeft * u.x + c.x + _.x,
    y: a.y * u.y - d.scrollTop * u.y + c.y + _.y
  };
}
function nc(e) {
  return Array.from(e.getClientRects());
}
function oc(e) {
  const t = at(e), a = Vn(e), n = e.ownerDocument.body, o = Oe(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = Oe(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -a.scrollLeft + il(e);
  const i = -a.scrollTop;
  return Ge(n).direction === "rtl" && (r += Oe(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: r,
    y: i
  };
}
function lc(e, t) {
  const a = Me(e), n = at(e), o = a.visualViewport;
  let s = n.clientWidth, r = n.clientHeight, i = 0, d = 0;
  if (o) {
    s = o.width, r = o.height;
    const u = sl();
    (!u || u && t === "fixed") && (i = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: i,
    y: d
  };
}
function sc(e, t) {
  const a = Nt(e, !0, t === "fixed"), n = a.top + e.clientTop, o = a.left + e.clientLeft, s = tt(e) ? ta(e) : et(1), r = e.clientWidth * s.x, i = e.clientHeight * s.y, d = o * s.x, u = n * s.y;
  return {
    width: r,
    height: i,
    x: d,
    y: u
  };
}
function ps(e, t, a) {
  let n;
  if (t === "viewport")
    n = lc(e, a);
  else if (t === "document")
    n = oc(at(e));
  else if (je(t))
    n = sc(t, a);
  else {
    const o = _r(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Cn(n);
}
function xr(e, t) {
  const a = Et(e);
  return a === t || !je(a) || ra(a) ? !1 : Ge(a).position === "fixed" || xr(a, t);
}
function rc(e, t) {
  const a = t.get(e);
  if (a)
    return a;
  let n = Ia(e, [], !1).filter((i) => je(i) && zt(i) !== "body"), o = null;
  const s = Ge(e).position === "fixed";
  let r = s ? Et(e) : e;
  for (; je(r) && !ra(r); ) {
    const i = Ge(r), d = ll(r);
    !d && i.position === "fixed" && (o = null), (s ? !d && !o : !d && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || za(r) && !d && xr(e, r)) ? n = n.filter((c) => c !== r) : o = i, r = Et(r);
  }
  return t.set(e, n), n;
}
function ic(e) {
  let {
    element: t,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = e;
  const r = [...a === "clippingAncestors" ? In(t) ? [] : rc(t, this._c) : [].concat(a), n], i = r[0], d = r.reduce((u, c) => {
    const p = ps(t, c, o);
    return u.top = Oe(p.top, u.top), u.right = Pt(p.right, u.right), u.bottom = Pt(p.bottom, u.bottom), u.left = Oe(p.left, u.left), u;
  }, ps(t, i, o));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function dc(e) {
  const {
    width: t,
    height: a
  } = br(e);
  return {
    width: t,
    height: a
  };
}
function uc(e, t, a) {
  const n = tt(t), o = at(t), s = a === "fixed", r = Nt(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = et(0);
  function u() {
    d.x = il(o);
  }
  if (n || !n && !s)
    if ((zt(t) !== "body" || za(o)) && (i = Vn(t)), n) {
      const m = Nt(t, !0, s, t);
      d.x = m.x + t.clientLeft, d.y = m.y + t.clientTop;
    } else o && u();
  s && !n && o && u();
  const c = o && !n && !s ? wr(o, i) : et(0), p = r.left + i.scrollLeft - d.x - c.x, _ = r.top + i.scrollTop - d.y - c.y;
  return {
    x: p,
    y: _,
    width: r.width,
    height: r.height
  };
}
function no(e) {
  return Ge(e).position === "static";
}
function fs(e, t) {
  if (!tt(e) || Ge(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let a = e.offsetParent;
  return at(e) === a && (a = a.ownerDocument.body), a;
}
function $r(e, t) {
  const a = Me(e);
  if (In(e))
    return a;
  if (!tt(e)) {
    let o = Et(e);
    for (; o && !ra(o); ) {
      if (je(o) && !no(o))
        return o;
      o = Et(o);
    }
    return a;
  }
  let n = fs(e, t);
  for (; n && Xu(n) && no(n); )
    n = fs(n, t);
  return n && ra(n) && no(n) && !ll(n) ? a : n || Zu(e) || a;
}
const cc = async function(e) {
  const t = this.getOffsetParent || $r, a = this.getDimensions, n = await a(e.floating);
  return {
    reference: uc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function pc(e) {
  return Ge(e).direction === "rtl";
}
const fc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ac,
  getDocumentElement: at,
  getClippingRect: ic,
  getOffsetParent: $r,
  getElementRects: cc,
  getClientRects: nc,
  getDimensions: dc,
  getScale: ta,
  isElement: je,
  isRTL: pc
};
function Cr(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function vc(e, t) {
  let a = null, n;
  const o = at(e);
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
    const w = en(p), h = en(o.clientWidth - (c + _)), x = en(o.clientHeight - (p + m)), C = en(c), k = {
      rootMargin: -w + "px " + -h + "px " + -x + "px " + -C + "px",
      threshold: Oe(0, Pt(1, d)) || 1
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
      M === 1 && !Cr(u, e.getBoundingClientRect()) && r(), O = !1;
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
function mc(e, t, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, u = rl(e), c = o || s ? [...u ? Ia(u) : [], ...Ia(t)] : [];
  c.forEach((C) => {
    o && C.addEventListener("scroll", a, {
      passive: !0
    }), s && C.addEventListener("resize", a);
  });
  const p = u && i ? vc(u, a) : null;
  let _ = -1, m = null;
  r && (m = new ResizeObserver((C) => {
    let [D] = C;
    D && D.target === u && m && (m.unobserve(t), cancelAnimationFrame(_), _ = requestAnimationFrame(() => {
      var k;
      (k = m) == null || k.observe(t);
    })), a();
  }), u && !d && m.observe(u), m.observe(t));
  let w, h = d ? Nt(e) : null;
  d && x();
  function x() {
    const C = Nt(e);
    h && !Cr(h, C) && a(), h = C, w = requestAnimationFrame(x);
  }
  return a(), () => {
    var C;
    c.forEach((D) => {
      o && D.removeEventListener("scroll", a), s && D.removeEventListener("resize", a);
    }), p == null || p(), (C = m) == null || C.disconnect(), m = null, d && cancelAnimationFrame(w);
  };
}
const hc = qu, gc = Yu, vs = Ku, yc = Qu, bc = ju, _c = Hu, wc = Ju, xc = (e, t, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: fc,
    ...a
  }, s = {
    ...o.platform,
    _c: n
  };
  return Wu(e, t, {
    ...o,
    platform: s
  });
};
function $c(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Bo(e) {
  if ($c(e)) {
    const t = e.$el;
    return ol(t) && zt(t) === "#comment" ? null : t;
  }
  return e;
}
function Qt(e) {
  return typeof e == "function" ? e() : l(e);
}
function Cc(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const a = Bo(Qt(e.element));
      return a == null ? {} : _c({
        element: a,
        padding: e.padding
      }).fn(t);
    }
  };
}
function kr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ms(e, t) {
  const a = kr(e);
  return Math.round(t * a) / a;
}
function kc(e, t, a) {
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
  }), u = $(() => Bo(e.value)), c = $(() => Bo(t.value)), p = A(0), _ = A(0), m = A(i.value), w = A(r.value), h = Ft({}), x = A(!1), C = $(() => {
    const M = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return M;
    const W = ms(c.value, p.value), N = ms(c.value, _.value);
    return d.value ? {
      ...M,
      transform: "translate(" + W + "px, " + N + "px)",
      ...kr(c.value) >= 1.5 && {
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
    xc(u.value, c.value, {
      middleware: s.value,
      placement: r.value,
      strategy: i.value
    }).then((W) => {
      p.value = W.x, _.value = W.y, m.value = W.strategy, w.value = W.placement, h.value = W.middlewareData, x.value = M !== !1;
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
  return te([s, r, i, o], k, {
    flush: "sync"
  }), te([u, c], E, {
    flush: "sync"
  }), te(o, I, {
    flush: "sync"
  }), No() && zo(O), {
    x: qt(p),
    y: qt(_),
    strategy: qt(m),
    placement: qt(w),
    middlewareData: qt(h),
    isPositioned: qt(x),
    floatingStyles: C,
    update: k
  };
}
function le(e, t) {
  const a = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(a);
  return [(o) => {
    const s = Ho(n, o);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (Ls(n, o), o)];
}
function dl(e, t, a) {
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
function Bc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dc = function e(t, a) {
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
const Rt = /* @__PURE__ */ Bc(Dc);
function vn(e) {
  return e == null;
}
function Br(e) {
  const { defaultValue: t, defaultPlaceholder: a, granularity: n = "day", locale: o = "en" } = e;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (a)
    return a.copy();
  const s = /* @__PURE__ */ new Date(), r = s.getFullYear(), i = s.getMonth() + 1, d = s.getDate(), u = ["hour", "minute", "second"], c = new Qe(o), p = yu(c.resolvedOptions().calendar);
  return u.includes(n ?? "day") ? Pe(new la(r, i, d, 0, 0, 0), p) : Pe(new _e(r, i, d), p);
}
function Dr(e) {
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
function Sc(e, t) {
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
  return No() ? (zo(e), !0) : !1;
}
function Pc() {
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
function Ec(e) {
  let t = !1, a;
  const n = Hs(!0);
  return (...o) => (t || (a = n.run(() => e(...o)), t = !0), a);
}
function Sr(e) {
  let t = 0, a, n;
  const o = () => {
    t -= 1, n && t <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...s) => (t += 1, a || (n = Hs(!0), a = n.run(() => e(...s))), Ut(o), a);
}
function vt(e) {
  return typeof e == "function" ? e() : l(e);
}
const nt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Oc = (e) => typeof e < "u", Ac = (e) => e != null, Mc = Object.prototype.toString, Tc = (e) => Mc.call(e) === "[object Object]", Pr = () => {
}, hs = /* @__PURE__ */ Ic();
function Ic() {
  var e, t;
  return nt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Vc(e) {
  return qe();
}
function Er(e, t = 1e4) {
  return Us((a, n) => {
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
function Rc(e, t) {
  Vc() && Uo(e, t);
}
function ul(e, t, a = {}) {
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
  return n && (o.value = !0, nt && d()), Ut(i), {
    isPending: La(o),
    start: d,
    stop: i
  };
}
function Fc(e = 1e3, t = {}) {
  const {
    controls: a = !1,
    callback: n
  } = t, o = ul(
    n ?? Pr,
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
const Ua = nt ? window : void 0;
function ia(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = Ua) : [t, a, n, o] = e, !t)
    return Pr;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, p, _, m) => (c.addEventListener(p, _, m), () => c.removeEventListener(p, _, m)), d = te(
    () => [Le(t), vt(o)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const _ = Tc(p) ? { ...p } : p;
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
function Lc(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function cl(...e) {
  let t, a, n = {};
  e.length === 3 ? (t = e[0], a = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, a = e[0], n = e[1]) : (t = e[0], a = e[1]) : (t = !0, a = e[0]);
  const {
    target: o = Ua,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, d = Lc(t);
  return ia(o, s, (u) => {
    u.repeat && vt(i) || d(u) && a(u);
  }, r);
}
function pl() {
  const e = A(!1), t = qe();
  return t && ce(() => {
    e.value = !0;
  }, t), e;
}
function Nc(e) {
  const t = pl();
  return $(() => (t.value, !!e()));
}
function zc(e, t, a = {}) {
  const { window: n = Ua, ...o } = a;
  let s;
  const r = Nc(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, d = $(() => {
    const _ = vt(e), m = (Array.isArray(_) ? _ : [_]).map(Le).filter(Ac);
    return new Set(m);
  }), u = te(
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
function Or(e, t = {}) {
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
function Uc(e) {
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
  let h = u;
  t || (t = "modelValue"), h = h || `update:${t.toString()}`;
  const x = (k) => i ? typeof i == "function" ? i(k) : Uc(k) : k, C = () => Oc(e[t]) ? x(e[t]) : p, D = (k) => {
    _ ? _(k) && w(h, k) : w(h, k);
  };
  if (d) {
    const k = C(), O = A(k);
    let E = !1;
    return te(
      () => e[t],
      (I) => {
        E || (E = !0, O.value = x(I), se(() => E = !1));
      }
    ), te(
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
  return e ? e.flatMap((t) => t.type === X ? Rn(t.children) : [t]) : [];
}
function xe() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const Wc = ["INPUT", "TEXTAREA"];
function Ar(e, t, a, n = {}) {
  if (!t || n.enableIgnoredElement && Wc.includes(t.nodeName))
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
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = m || w, D = p || _;
  if (!h && !x && (!C && !D || o === "vertical" && D || o === "horizontal" && C))
    return null;
  const k = a ? Array.from(a.querySelectorAll(s)) : r;
  if (!k.length)
    return null;
  u && e.preventDefault();
  let O = null;
  return D || C ? O = Mr(k, t, {
    goForward: C ? w : d === "ltr" ? p : _,
    loop: i
  }) : h ? O = k.at(0) || null : x && (O = k.at(-1) || null), c && (O == null || O.focus()), O;
}
function Mr(e, t, a, n = e.length) {
  if (--n === 0)
    return null;
  const o = e.indexOf(t), s = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (s < 0 || s >= e.length))
    return null;
  const r = (s + e.length) % e.length, i = e[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Mr(
    e,
    i,
    a,
    n
  ) : i : null;
}
function oo(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Do(e, t, a = ".", n) {
  if (!oo(t))
    return Do(e, {}, a);
  const o = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = e[s];
    r != null && (Array.isArray(r) && Array.isArray(o[s]) ? o[s] = [...r, ...o[s]] : oo(r) && oo(o[s]) ? o[s] = Do(
      r,
      o[s],
      (a ? `${a}.` : "") + s.toString()
    ) : o[s] = r);
  }
  return o;
}
function Hc(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((a, n) => Do(a, n, ""), {})
  );
}
const Kc = Hc(), [Fn, B0] = le("ConfigProvider");
let jc = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Gc = (e = 21) => {
  let t = "", a = e;
  for (; a--; )
    t += jc[Math.random() * 64 | 0];
  return t;
};
const qc = Sr(() => {
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
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", hs && (o == null || o()), t.value = void 0;
  };
  return te(a, (r, i) => {
    var d;
    if (!nt)
      return;
    if (!r) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, c = { padding: u, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? Kc({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), hs && (o = ia(
      document,
      "touchmove",
      (_) => Yc(_),
      { passive: !1 }
    )), se(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Wa(e) {
  const t = Gc(6), a = qc();
  a.value.set(t, e ?? !1);
  const n = $({
    get: () => a.value.get(t) ?? !1,
    set: (o) => a.value.set(t, o)
  });
  return Rc(() => {
    a.value.delete(t);
  }), n;
}
function Tr(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const a = e.parentNode;
    return !(a instanceof Element) || a.tagName === "BODY" ? !1 : Tr(a);
  }
}
function Yc(e) {
  const t = e || window.event, a = t.target;
  return a instanceof Element && Tr(a) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Jc = "data-radix-vue-collection-item";
function fa(e, t = Jc) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = A([]);
    function s() {
      const r = Le(n);
      return r ? o.value = Array.from(
        r.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return vd(() => {
      o.value = [];
    }), ce(s), md(s), te(() => n == null ? void 0 : n.value, s, { immediate: !0 }), Ls(a, o), o;
  }, injectCollection: () => Ho(a, A([])) };
}
function Ir(e) {
  const t = A(e);
  function a() {
    return t.value;
  }
  function n(h) {
    t.value = h;
  }
  function o(h, x) {
    return new Qe(t.value, x).format(h);
  }
  function s(h, x = !0) {
    return ku(h) && x ? o(Fe(h), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Fe(h), {
      dateStyle: "long"
    });
  }
  function r(h, x = {}) {
    return new Qe(t.value, { month: "long", year: "numeric", ...x }).format(h);
  }
  function i(h, x = {}) {
    return new Qe(t.value, { month: "long", ...x }).format(h);
  }
  function d() {
    const h = hn(mt());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => ({ label: i(Fe(h.set({ month: x }))), value: x }));
  }
  function u(h, x = {}) {
    return new Qe(t.value, { year: "numeric", ...x }).format(h);
  }
  function c(h, x) {
    return el(h) ? new Qe(t.value, {
      ...x,
      timeZone: h.timeZone
    }).formatToParts(Fe(h)) : new Qe(t.value, x).formatToParts(Fe(h));
  }
  function p(h, x = "narrow") {
    return new Qe(t.value, { weekday: x }).format(h);
  }
  function _(h) {
    var x;
    return ((x = new Qe(t.value, {
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
    const D = { ...m, ...C }, k = c(h, D).find((O) => O.type === x);
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
function ot(e) {
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
    n[cd(Rs(o))] = (...s) => e(o, ...s);
  }), n;
}
let lo = 0;
function fl() {
  be((e) => {
    if (!nt)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? gs()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? gs()
    ), lo++, e(() => {
      lo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), lo--;
    });
  });
}
function gs() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline-solid = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
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
  }, {}), n = Vs(e);
  return $(() => {
    const o = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      o[Rs(r)] = s[r];
    }), Object.keys({ ...a, ...o }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function ae(e, t) {
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
function Qc(e, t) {
  const a = Er(!1, 300), n = A(null), o = Pc();
  function s() {
    n.value = null, a.value = !1;
  }
  function r(i, d) {
    const u = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = Xc(c, u.getBoundingClientRect()), _ = Zc(c, p), m = ep(d.getBoundingClientRect()), w = ap([..._, ...m]);
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
        const m = c.target, w = { x: c.clientX, y: c.clientY }, h = ((p = e.value) == null ? void 0 : p.contains(m)) || ((_ = t.value) == null ? void 0 : _.contains(m)), x = !tp(w, n.value), C = !!m.closest("[data-grace-area-trigger]");
        h ? s() : (x || C) && (s(), o.trigger());
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
function Xc(e, t) {
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
function Zc(e, t, a = 5) {
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
function ep(e) {
  const { top: t, right: a, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: a, y: t },
    { x: a, y: n },
    { x: o, y: n }
  ];
}
function tp(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, d = t[s].y, u = t[r].x, c = t[r].y;
    d > n != c > n && a < (u - i) * (n - d) / (c - d) + i && (o = !o);
  }
  return o;
}
function ap(e) {
  const t = e.slice();
  return t.sort((a, n) => a.x < n.x ? -1 : a.x > n.x ? 1 : a.y < n.y ? -1 : a.y > n.y ? 1 : 0), np(t);
}
function np(e) {
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
var op = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Jt = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ new WeakMap(), an = {}, so = 0, Vr = function(e) {
  return e && (e.host || Vr(e.parentNode));
}, lp = function(e, t) {
  return t.map(function(a) {
    if (e.contains(a))
      return a;
    var n = Vr(a);
    return n && e.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, sp = function(e, t, a, n) {
  var o = lp(t, Array.isArray(e) ? e : [e]);
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
          var m = _.getAttribute(n), w = m !== null && m !== "false", h = (Jt.get(_) || 0) + 1, x = (s.get(_) || 0) + 1;
          Jt.set(_, h), s.set(_, x), r.push(_), h === 1 && w && tn.set(_, !0), x === 1 && _.setAttribute(a, "true"), w || _.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", _, C);
        }
    });
  };
  return c(t), i.clear(), so++, function() {
    r.forEach(function(p) {
      var _ = Jt.get(p) - 1, m = s.get(p) - 1;
      Jt.set(p, _), s.set(p, m), _ || (tn.has(p) || p.removeAttribute(n), tn.delete(p)), m || p.removeAttribute(a);
    }), so--, so || (Jt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ new WeakMap(), an = {});
  };
}, rp = function(e, t, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = op(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), sp(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function Ka(e) {
  let t;
  te(() => Le(e), (a) => {
    a ? t = rp(a) : t && t();
  }), At(() => {
    t && t();
  });
}
let ip = 0;
function we(e, t = "radix") {
  const a = Fn({ useId: void 0 });
  return Ll.useId ? `${t}-${Ll.useId()}` : a.useId ? `${t}-${a.useId()}` : `${t}-${++ip}`;
}
function Rr(e) {
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
function dp(e, t) {
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
const up = "data-item-text";
function vl(e) {
  const t = Er("", 1e3);
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
          textValue: ((_ = (p.querySelector(`[${up}]`) ?? p).textContent) == null ? void 0 : _.trim()) ?? ""
        };
      }), i = r.find((p) => p.ref === s), d = r.map((p) => p.textValue), u = pp(d, t.value, i == null ? void 0 : i.textValue), c = r.find((p) => p.textValue === u);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function cp(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
function pp(e, t, a) {
  const n = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = a ? e.indexOf(a) : -1;
  let s = cp(e, Math.max(o, 0));
  n.length === 1 && (s = s.filter((i) => i !== a));
  const r = s.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return r !== a ? r : void 0;
}
function Fr() {
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
const ml = y({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const s = Rn(a.default()), r = s.findIndex((c) => c.type !== Ns);
      if (r === -1)
        return s;
      const i = s[r];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? P(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const u = pd(i, d);
      for (const c in d)
        c.startsWith("on") && (u.props || (u.props = {}), u.props[c] = d[c]);
      return s.length === 1 ? u : (s[r] = u, s);
    };
  }
}), F = y({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => Ze(n, t) : n !== "template" ? () => Ze(e.as, t, { default: a.default }) : () => Ze(ml, t, { default: a.default });
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
const [Lr, fp] = le("CollapsibleRoot"), vp = /* @__PURE__ */ y({
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
    return fp({
      contentId: "",
      disabled: s,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), t({ open: o }), z(), (r, i) => (v(), g(l(F), {
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
}), mp = /* @__PURE__ */ y({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    z();
    const a = Lr();
    return (n, o) => {
      var s, r;
      return v(), g(l(F), {
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
function hp(e, t) {
  var a;
  const n = A({}), o = A("none"), s = A(e), r = e.value ? "mounted" : "unmounted";
  let i;
  const d = ((a = t.value) == null ? void 0 : a.ownerDocument.defaultView) ?? Ua, { state: u, dispatch: c } = dp(r, {
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
      const D = new CustomEvent(x, { bubbles: !1, cancelable: !1 });
      (C = t.value) == null || C.dispatchEvent(D);
    }
  };
  te(
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
  }, w = te(
    t,
    (x, C) => {
      x ? (n.value = getComputedStyle(x), x.addEventListener("animationstart", m), x.addEventListener("animationcancel", _), x.addEventListener("animationend", _)) : (c("ANIMATION_END"), i !== void 0 && (d == null || d.clearTimeout(i)), C == null || C.removeEventListener("animationstart", m), C == null || C.removeEventListener("animationcancel", _), C == null || C.removeEventListener("animationend", _));
    },
    { immediate: !0 }
  ), h = te(u, () => {
    const x = nn(t.value);
    o.value = u.value === "mounted" ? x : "none";
  });
  return At(() => {
    w(), h();
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
    const { present: o, forceMount: s } = me(e), r = A(), { isPresent: i } = hp(o, r);
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
    return () => s.value || o.value || i.value ? Ze(t.default({ present: i })[0], {
      ref: (c) => {
        const p = Le(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
}), gp = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Lr();
    a.contentId || (a.contentId = we(void 0, "radix-vue-collapsible-content"));
    const n = A(), { forwardRef: o, currentElement: s } = z(), r = A(0), i = A(0), d = $(() => a.open.value), u = A(d.value), c = A();
    return te(
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
    }), (p, _) => (v(), g(l(Te), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || l(a).open.value,
      "force-mount": !0
    }, {
      default: f(() => {
        var m, w;
        return [
          B(l(F), P(p.$attrs, {
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
              var h;
              return [
                (h = n.value) != null && h.present ? b(p.$slots, "default", { key: 0 }) : oe("", !0)
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
function Nr({ type: e, defaultValue: t, modelValue: a }) {
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
function yp({ type: e, defaultValue: t, modelValue: a }) {
  return e || Nr({ type: e, defaultValue: t, modelValue: a });
}
function bp({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function _p(e, t) {
  const a = A(yp(e)), n = ve(e, "modelValue", t, {
    defaultValue: bp(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  te(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const r = Nr(e);
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
const [Ln, wp] = le("AccordionRoot"), xp = /* @__PURE__ */ y({
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
    const a = e, n = t, { dir: o, disabled: s } = me(a), r = ot(o), { modelValue: i, changeModelValue: d, isSingle: u } = _p(a, n), { forwardRef: c, currentElement: p } = z();
    return wp({
      disabled: s,
      direction: r,
      orientation: a.orientation,
      parentElement: p,
      isSingle: u,
      collapsible: a.collapsible,
      modelValue: i,
      changeModelValue: d
    }), (_, m) => (v(), g(l(F), {
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
}), [hl, $p] = le("AccordionItem"), Cp = /* @__PURE__ */ y({
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
    $p({
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
      Ar(
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
    return (p, _) => (v(), g(l(vp), {
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
}), kp = /* @__PURE__ */ y({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Ln(), n = hl();
    return z(), (o, s) => (v(), g(l(gp), {
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
}), Bp = /* @__PURE__ */ y({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, a = Ln(), n = hl();
    return z(), (o, s) => (v(), g(l(F), {
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
}), Dp = /* @__PURE__ */ y({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Ln(), n = hl();
    n.triggerId || (n.triggerId = we(void 0, "radix-vue-accordion-trigger"));
    function o() {
      const s = a.isSingle.value && n.open.value && !a.collapsible;
      n.disabled.value || s || a.changeModelValue(n.value.value);
    }
    return (s, r) => (v(), g(l(mp), {
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
}), [lt, Sp] = le("DialogRoot"), zr = /* @__PURE__ */ y({
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
    return Sp({
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
}), Ur = /* @__PURE__ */ y({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = lt(), { forwardRef: n, currentElement: o } = z();
    return a.contentId || (a.contentId = we(void 0, "radix-vue-dialog-content")), ce(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), g(l(F), P(t, {
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
    const t = pl();
    return (a, n) => l(t) || a.forceMount ? (v(), g(On, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      b(a.$slots, "default")
    ], 8, ["to", "disabled"])) : oe("", !0);
  }
}), gl = /* @__PURE__ */ y({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(ja), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pp = "dismissableLayer.pointerDownOutside", Ep = "dismissableLayer.focusOutside";
function Wr(e, t) {
  const a = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function Op(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = A(!1), s = A(() => {
  });
  return be((r) => {
    if (!nt)
      return;
    const i = async (u) => {
      const c = u.target;
      if (t != null && t.value) {
        if (Wr(t.value, c)) {
          o.value = !1;
          return;
        }
        if (u.target && !o.value) {
          let p = function() {
            dl(
              Pp,
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
function Ap(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = A(!1);
  return be((s) => {
    if (!nt)
      return;
    const r = async (i) => {
      t != null && t.value && (await se(), !(!t.value || Wr(t.value, i.target)) && i.target && !o.value && dl(
        Ep,
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
const Ue = zs({
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
      const w = Array.from(i.value), [h] = [...Ue.layersWithOutsidePointerEventsDisabled].slice(-1), x = w.indexOf(h);
      return d.value >= x;
    }), p = Op(async (w) => {
      const h = [...Ue.branches].some(
        (x) => x == null ? void 0 : x.contains(w.target)
      );
      !c.value || h || (n("pointerDownOutside", w), n("interactOutside", w), await se(), w.defaultPrevented || n("dismiss"));
    }, s), _ = Ap((w) => {
      [...Ue.branches].some(
        (h) => h == null ? void 0 : h.contains(w.target)
      ) || (n("focusOutside", w), n("interactOutside", w), w.defaultPrevented || n("dismiss"));
    }, s);
    cl("Escape", (w) => {
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
    }), (w, h) => (v(), g(l(F), {
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
}), Mp = /* @__PURE__ */ y({
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
    }), (o, s) => (v(), g(l(F), P({ ref: l(a) }, t), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ro = "focusScope.autoFocusOnMount", io = "focusScope.autoFocusOnUnmount", ys = { bubbles: !1, cancelable: !0 };
function mn(e, { select: t = !1 } = {}) {
  const a = xe();
  for (const n of e)
    if (Ct(n, { select: t }), xe() !== a)
      return !0;
}
function Tp(e) {
  const t = yl(e), a = bs(t, e), n = bs(t.reverse(), e);
  return [a, n];
}
function yl(e) {
  const t = [], a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) t.push(a.currentNode);
  return t;
}
function bs(e, t) {
  for (const a of e)
    if (!Ip(a, { upTo: t }))
      return a;
}
function Ip(e, { upTo: t }) {
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
function Vp(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ct(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const a = xe();
    e.focus({ preventScroll: !0 }), e !== a && Vp(e) && t && e.select();
  }
}
const Rp = Ec(() => A([]));
function Fp() {
  const e = Rp();
  return {
    add(t) {
      const a = e.value[0];
      t !== a && (a == null || a.pause()), e.value = _s(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var a;
      e.value = _s(e.value, t), (a = e.value[0]) == null || a.resume();
    }
  };
}
function _s(e, t) {
  const a = [...e], n = a.indexOf(t);
  return n !== -1 && a.splice(n, 1), a;
}
function Lp(e) {
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
    const a = e, n = t, { currentRef: o, currentElement: s } = z(), r = A(null), i = Fp(), d = zs({
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
      const h = new MutationObserver(w);
      p && h.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", _), document.removeEventListener("focusout", m), h.disconnect();
      });
    }), be(async (c) => {
      const p = s.value;
      if (await se(), !p)
        return;
      i.add(d);
      const _ = xe();
      if (!p.contains(_)) {
        const m = new CustomEvent(ro, ys);
        p.addEventListener(ro, (w) => n("mountAutoFocus", w)), p.dispatchEvent(m), m.defaultPrevented || (mn(Lp(yl(p)), {
          select: !0
        }), xe() === _ && Ct(p));
      }
      c(() => {
        p.removeEventListener(ro, (h) => n("mountAutoFocus", h));
        const m = new CustomEvent(io, ys), w = (h) => {
          n("unmountAutoFocus", h);
        };
        p.addEventListener(io, w), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Ct(_ ?? document.body, { select: !0 }), p.removeEventListener(io, w), i.remove(d);
        }, 0);
      });
    });
    function u(c) {
      if (!a.loop && !a.trapped || d.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, _ = xe();
      if (p && _) {
        const m = c.currentTarget, [w, h] = Tp(m);
        w && h ? !c.shiftKey && _ === h ? (c.preventDefault(), a.loop && Ct(w, { select: !0 })) : c.shiftKey && _ === w && (c.preventDefault(), a.loop && Ct(h, { select: !0 })) : _ === m && c.preventDefault();
      }
    }
    return (c, p) => (v(), g(l(F), {
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
}), Np = "menu.itemSelect", So = ["Enter", " "], zp = ["ArrowDown", "PageUp", "Home"], Hr = ["ArrowUp", "PageDown", "End"], Up = [...zp, ...Hr], Wp = {
  ltr: [...So, "ArrowRight"],
  rtl: [...So, "ArrowLeft"]
}, Hp = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function bl(e) {
  return e ? "open" : "closed";
}
function Bn(e) {
  return e === "indeterminate";
}
function _l(e) {
  return Bn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Po(e) {
  const t = xe();
  for (const a of e)
    if (a === t || (a.focus(), xe() !== t))
      return;
}
function Kp(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, d = t[s].y, u = t[r].x, c = t[r].y;
    d > n != c > n && a < (u - i) * (n - d) / (c - d) + i && (o = !o);
  }
  return o;
}
function jp(e, t) {
  if (!t)
    return !1;
  const a = { x: e.clientX, y: e.clientY };
  return Kp(a, t);
}
function Va(e) {
  return e.pointerType === "mouse";
}
const Gp = "DialogTitle", qp = "DialogContent";
function Yp({
  titleName: e = Gp,
  contentName: t = qp,
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
const Kr = /* @__PURE__ */ y({
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
    const a = e, n = t, o = lt(), { forwardRef: s, currentElement: r } = z();
    return o.titleId || (o.titleId = we(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = we(void 0, "radix-vue-dialog-description")), ce(() => {
      o.contentElement = r, xe() !== document.body && (o.triggerElement.value = xe());
    }), process.env.NODE_ENV !== "production" && Yp({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: r
    }), (i, d) => (v(), g(l(Nn), {
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
          "data-state": l(bl)(l(o).open.value)
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
}), Jp = /* @__PURE__ */ y({
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
    const a = e, n = t, o = lt(), s = Wt(n), { forwardRef: r, currentElement: i } = z();
    return Ka(i), (d, u) => (v(), g(Kr, P({ ...a, ...l(s) }, {
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
}), Qp = /* @__PURE__ */ y({
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
    const o = lt(), s = A(!1), r = A(!1);
    return (i, d) => (v(), g(Kr, P({ ...a, ...l(n) }, {
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
}), wl = /* @__PURE__ */ y({
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
    const a = e, n = t, o = lt(), s = Wt(n), { forwardRef: r } = z();
    return (i, d) => (v(), g(l(Te), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), g(Jp, P({
          key: 0,
          ref: l(r)
        }, { ...a, ...l(s), ...i.$attrs }), {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), g(Qp, P({
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
}), Xp = /* @__PURE__ */ y({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = lt();
    return Wa(!0), z(), (a, n) => (v(), g(l(F), {
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
}), xl = /* @__PURE__ */ y({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = lt(), { forwardRef: a } = z();
    return (n, o) => {
      var s;
      return (s = l(t)) != null && s.modal.value ? (v(), g(l(Te), {
        key: 0,
        present: n.forceMount || l(t).open.value
      }, {
        default: f(() => [
          B(Xp, P(n.$attrs, {
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
      }, 8, ["present"])) : oe("", !0);
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
    const a = lt();
    return (n, o) => (v(), g(l(F), P(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (s) => l(a).onOpenChange(!1))
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), jr = /* @__PURE__ */ y({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, a = lt();
    return z(), (n, o) => (v(), g(l(F), P(t, {
      id: l(a).titleId
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Gr = /* @__PURE__ */ y({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    z();
    const a = lt();
    return (n, o) => (v(), g(l(F), P(t, {
      id: l(a).descriptionId
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function Zp(e) {
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
function ef(e, t) {
  const a = t(e), n = a.compare(e), o = {};
  return n >= 7 && (o.day = 1), n >= ht(e) && (o.month = 1), a.set({ ...o });
}
function tf(e, t) {
  const a = t(e), n = e.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= ht(e) && (o.month = 13), a.set({ ...o });
}
function af(e, t) {
  return t(e);
}
function nf(e, t) {
  return t(e);
}
function qr(e) {
  const t = Ir(e.locale.value), a = $(() => {
    const h = {
      calendar: e.placeholder.value.calendar.identifier
    };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (h.era = "short"), h;
  }), n = A(Tt({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), o = $(() => n.value.map((h) => h.value));
  function s(h) {
    return !o.value.some((x) => zl(h, x));
  }
  const r = (h = "month", x) => {
    if (!e.maxValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[n.value.length - 1].value;
    if (x || e.nextPage.value) {
      const k = ef(C, x || e.nextPage.value);
      return Ea(k, e.maxValue.value);
    }
    if (h === "year") {
      const k = C.add({ years: 1 }).set({ day: 1, month: 1 });
      return Ea(k, e.maxValue.value);
    }
    const D = C.add({ months: 1 }).set({ day: 1 });
    return Ea(D, e.maxValue.value);
  }, i = (h = "month", x) => {
    if (!e.minValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[0].value;
    if (x || e.prevPage.value) {
      const k = tf(C, x || e.prevPage.value);
      return Dt(k, e.minValue.value);
    }
    if (h === "year") {
      const k = C.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return Dt(k, e.minValue.value);
    }
    const D = C.subtract({ months: 1 }).set({ day: 35 });
    return Dt(D, e.minValue.value);
  };
  function d(h) {
    var x;
    return !!((x = e.isDateDisabled) != null && x.call(e, h) || e.disabled.value || e.maxValue.value && Ea(h, e.maxValue.value) || e.minValue.value && Dt(h, e.minValue.value));
  }
  const u = (h) => {
    var x;
    return !!((x = e.isDateUnavailable) != null && x.call(e, h));
  }, c = $(() => n.value.length ? n.value[0].rows[0].map((h) => t.dayOfWeek(Fe(h), e.weekdayFormat.value)) : []), p = (h = "month", x) => {
    const C = n.value[0].value;
    if (x || e.nextPage.value) {
      const O = af(C, x || e.nextPage.value), E = Tt({
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
    const D = h === "month" ? C.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.add({ years: 1 }), k = Tt({
      dateObj: D,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = k, e.placeholder.value = k[0].value.set({ day: 1 });
  }, _ = (h = "month", x) => {
    const C = n.value[0].value;
    if (x || e.prevPage.value) {
      const O = nf(C, x || e.prevPage.value), E = Tt({
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
    const D = h === "month" ? C.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.subtract({ years: 1 }), k = Tt({
      dateObj: D,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = k, e.placeholder.value = k[0].value.set({ day: 1 });
  };
  te(e.placeholder, (h) => {
    o.value.some((x) => zl(x, h)) || (n.value = Tt({
      dateObj: h,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), te([e.locale, e.weekStartsOn, e.fixedWeeks, e.numberOfMonths], () => {
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
    const h = Fe(n.value[0].value), x = Fe(n.value[n.value.length - 1].value), C = t.fullMonth(h, a.value), D = t.fullMonth(x, a.value), k = t.fullYear(h, a.value), O = t.fullYear(x, a.value);
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
const of = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, lf = {
  role: "heading",
  "aria-level": "2"
}, [ha, sf] = le("CalendarRoot"), Yr = /* @__PURE__ */ y({
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
      numberOfMonths: h,
      preventDeselect: x,
      isDateDisabled: C,
      isDateUnavailable: D,
      calendarLabel: k,
      defaultValue: O,
      nextPage: E,
      prevPage: I,
      dir: M
    } = me(a), { primitiveElement: W, currentElement: N } = va(), S = ot(M), V = ve(a, "modelValue", n, {
      defaultValue: O.value,
      passive: a.modelValue === void 0
    }), R = Br({
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
      headingValue: ee,
      isDateDisabled: ge,
      isDateUnavailable: ye,
      isNextButtonDisabled: G,
      isPrevButtonDisabled: Z,
      weekdays: de,
      isOutsideVisibleView: Ne,
      nextPage: Ye,
      prevPage: bt,
      formatter: _t,
      grid: Ca
    } = qr({
      locale: o,
      placeholder: q,
      weekStartsOn: u,
      fixedWeeks: p,
      numberOfMonths: h,
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
      isDateSelected: Ee
    } = Zp({
      date: V,
      isDateDisabled: ge,
      isDateUnavailable: ye
    });
    te(V, (ue) => {
      if (Array.isArray(ue) && ue.length) {
        const De = ue[ue.length - 1];
        De && !Xe(q.value, De) && U(De);
      } else !Array.isArray(ue) && ue && !Xe(q.value, ue) && U(ue);
    });
    function Je(ue) {
      if (_.value) {
        if (!V.value)
          V.value = [ue.copy()];
        else if (Array.isArray(V.value)) {
          if (V.value.findIndex((De) => Ce(De, ue)) === -1)
            V.value = [...V.value, ue];
          else if (!x.value) {
            const De = V.value.filter((rt) => !Ce(rt, ue));
            if (!De.length) {
              q.value = ue.copy(), V.value = void 0;
              return;
            }
            V.value = De.map((rt) => rt.copy());
          }
        }
      } else {
        if (!V.value) {
          V.value = ue.copy();
          return;
        }
        !x.value && Xe(V.value, ue) ? (q.value = ue.copy(), V.value = void 0) : V.value = ue.copy();
      }
    }
    return ce(() => {
      i.value && Dr(N.value);
    }), sf({
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
      numberOfMonths: h,
      readonly: r,
      preventDeselect: x,
      fullCalendarLabel: Y,
      headingValue: ee,
      isInvalid: Ie,
      isDateSelected: Ee,
      isNextButtonDisabled: G,
      isPrevButtonDisabled: Z,
      isOutsideVisibleView: Ne,
      nextPage: Ye,
      prevPage: bt,
      parentElement: N,
      onPlaceholderChange: U,
      onDateChange: Je
    }), (ue, De) => (v(), g(l(F), {
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
        ie("div", of, [
          ie("div", lf, Q(l(Y)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), rf = /* @__PURE__ */ y({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), df = /* @__PURE__ */ y({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = ha();
    return (n, o) => (v(), g(l(F), P(t, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        b(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          J(Q(l(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), uf = /* @__PURE__ */ y({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = ha(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), g(l(F), P(t, {
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
}), cf = /* @__PURE__ */ y({
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
      return v(), g(l(F), {
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
}), pf = /* @__PURE__ */ y({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ff = /* @__PURE__ */ y({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = ha();
    return (o, s) => (v(), g(l(F), {
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
}), vf = /* @__PURE__ */ y({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = ha();
    return (o, s) => (v(), g(l(F), {
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
}), mf = /* @__PURE__ */ y({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), P(t, { "aria-hidden": "true" }), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hf = /* @__PURE__ */ y({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gf = /* @__PURE__ */ y({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yf = /* @__PURE__ */ y({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = Fr(), n = ha(), { primitiveElement: o, currentElement: s } = va(), r = $(() => t.day.day.toLocaleString(n.locale.value)), i = $(() => n.formatter.custom(Fe(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), d = $(() => n.isDateDisabled(t.day)), u = $(
      () => {
        var k;
        return (k = n.isDateUnavailable) == null ? void 0 : k.call(n, t.day);
      }
    ), c = $(() => Ys(t.day, mt())), p = $(() => !Ko(t.day, t.month)), _ = $(
      () => n.isOutsideVisibleView(t.day)
    ), m = $(() => !n.disabled.value && Ce(t.day, n.placeholder.value)), w = $(() => n.isDateSelected(t.day)), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])";
    function x(k) {
      var O;
      n.readonly.value || n.isDateDisabled(k) || (O = n.isDateUnavailable) != null && O.call(n, k) || n.onDateChange(k);
    }
    function C() {
      x(t.day);
    }
    function D(k) {
      k.preventDefault(), k.stopPropagation();
      const O = n.parentElement.value, E = O ? Array.from(O.querySelectorAll(h)) : [];
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
          const N = O ? Array.from(O.querySelectorAll(h)) : [];
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
          const N = O ? Array.from(O.querySelectorAll(h)) : [];
          if (!n.pagedNavigation.value) {
            const S = ht(n.placeholder.value.add({ months: n.numberOfMonths.value - 1 }));
            N[N.length - S + I - E.length].focus();
            return;
          }
          N[I - E.length].focus();
        });
      }
    }
    return (k, O) => (v(), g(l(F), P({
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
          J(Q(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Dn(e) {
  return e === "indeterminate";
}
function Jr(e) {
  return Dn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const bf = ["value", "checked", "name", "disabled", "required"], [_f, wf] = le("CheckboxRoot"), xf = /* @__PURE__ */ y({
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
    return wf({
      disabled: o,
      state: s
    }), (c, p) => (v(), L(X, null, [
      B(l(F), P(c.$attrs, {
        id: c.id,
        ref: l(r),
        role: "checkbox",
        "as-child": a.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": l(Dn)(l(s)) ? "mixed" : l(s),
        "aria-required": a.required,
        "aria-label": c.$attrs["aria-label"] || u.value,
        "data-state": l(Jr)(l(s)),
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
      l(d) ? (v(), L("input", {
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
      }, null, 8, bf)) : oe("", !0)
    ], 64));
  }
}), $f = /* @__PURE__ */ y({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = z(), a = _f();
    return (n, o) => (v(), g(l(Te), {
      present: n.forceMount || l(Dn)(l(a).state.value) || l(a).state.value === !0
    }, {
      default: f(() => [
        B(l(F), P({
          ref: l(t),
          "data-state": l(Jr)(l(a).state.value),
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
}), [Qr, Cf] = le("PopperRoot"), ga = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = A();
    return Cf({
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
    const t = e, { forwardRef: a, currentElement: n } = z(), o = Qr();
    return be(() => {
      o.onAnchorChange(t.element ?? n.value);
    }), (s, r) => (v(), g(l(F), {
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
function kf(e) {
  return e !== null;
}
function Bf(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var a, n, o;
      const { placement: s, rects: r, middlewareData: i } = t, d = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, u = d ? 0 : e.arrowWidth, c = d ? 0 : e.arrowHeight, [p, _] = Eo(s), m = { start: "0%", center: "50%", end: "100%" }[_], w = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + u / 2, h = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + c / 2;
      let x = "", C = "";
      return p === "bottom" ? (x = d ? m : `${w}px`, C = `${-c}px`) : p === "top" ? (x = d ? m : `${w}px`, C = `${r.floating.height + c}px`) : p === "right" ? (x = `${-c}px`, C = d ? m : `${h}px`) : p === "left" && (x = `${r.floating.width + c}px`, C = d ? m : `${h}px`), { data: { x, y: C } };
    }
  };
}
function Eo(e) {
  const [t, a = "center"] = e.split("-");
  return [t, a];
}
const Xr = {
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
}, [D0, Df] = le("PopperContent"), da = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Ws({
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
    ...Xr
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Qr(), { forwardRef: s, currentElement: r } = z(), i = A(), d = A(), { width: u, height: c } = Rr(d), p = $(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), _ = $(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = $(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), w = $(() => ({
      padding: _.value,
      boundary: m.value.filter(kf),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), h = Sc(() => [
      hc({
        mainAxis: a.sideOffset + c.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && vs({
        ...w.value
      }),
      a.avoidCollisions && gc({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? wc() : void 0,
        ...w.value
      }),
      !a.prioritizePosition && a.avoidCollisions && vs({
        ...w.value
      }),
      yc({
        ...w.value,
        apply: ({ elements: S, rects: V, availableWidth: R, availableHeight: q }) => {
          const { width: U, height: Y } = V.reference, ee = S.floating.style;
          ee.setProperty(
            "--radix-popper-available-width",
            `${R}px`
          ), ee.setProperty(
            "--radix-popper-available-height",
            `${q}px`
          ), ee.setProperty(
            "--radix-popper-anchor-width",
            `${U}px`
          ), ee.setProperty(
            "--radix-popper-anchor-height",
            `${Y}px`
          );
        }
      }),
      d.value && Cc({ element: d.value, padding: a.arrowPadding }),
      Bf({
        arrowWidth: u.value,
        arrowHeight: c.value
      }),
      a.hideWhenDetached && bc({ strategy: "referenceHidden", ...w.value })
    ]), { floatingStyles: x, placement: C, isPositioned: D, middlewareData: k } = kc(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...S) => mc(...S, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: h
      }
    ), O = $(
      () => Eo(C.value)[0]
    ), E = $(
      () => Eo(C.value)[1]
    );
    yd(() => {
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
    return Df({
      placedSide: O,
      onArrowChange: (S) => d.value = S,
      arrowX: W,
      arrowY: N,
      shouldHideArrow: I
    }), (S, V) => {
      var R, q, U;
      return v(), L("div", {
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
        B(l(F), P({ ref: l(s) }, S.$attrs, {
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
    return z(), (t, a) => (v(), g(l(F), {
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
}), Sf = /* @__PURE__ */ y({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, a = $(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${o}][${t.name}][${s}]`, value: r })) : { name: `[${t.name}][${o}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, o]) => ({ name: `[${t.name}][${n}]`, value: o })) : []);
    return (n, o) => (v(!0), L(X, null, fe(a.value, (s) => (v(), g(qa, {
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
}), Pf = "data-radix-vue-collection-item", [$l, Ef] = le("CollectionProvider");
function Cl(e = Pf) {
  const t = A(/* @__PURE__ */ new Map()), a = A(), n = Ef({
    collectionRef: a,
    itemMap: t,
    attrName: e
  }), { getItems: o } = Bl(n), s = $(() => Array.from(n.itemMap.value.values())), r = $(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: s, itemMapSize: r };
}
const kl = y({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const a = $l(), { primitiveElement: n, currentElement: o } = va();
    return te(o, () => {
      a.collectionRef.value = o.value;
    }), () => Ze(ml, { ref: n }, t);
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
    const n = $l(), { primitiveElement: o, currentElement: s } = va();
    return be((r) => {
      if (s.value) {
        const i = hd(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: e.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => Ze(ml, { ...a, [n.attrName]: "", ref: o }, t);
  }
});
function Bl(e) {
  const t = e ?? $l();
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
const [ya, Of] = le("ComboboxRoot"), Af = /* @__PURE__ */ y({
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
    const a = e, n = t, { multiple: o, disabled: s, dir: r } = me(a), i = ot(r), d = ve(a, "searchTerm", n, {
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
        var Ye, bt;
        return ((bt = (Ye = Ne.ref) == null ? void 0 : Ye.dataset) == null ? void 0 : bt.state) === "checked";
      })) == null ? void 0 : Z.value : p.value = u.value), await se(), (de = h.value) == null || de.focus(), q()) : (w.value = !1, a.resetSearchTermOnBlur && W("blur-sm"));
    }
    function m(G) {
      if (Array.isArray(u.value) && o.value) {
        const Z = u.value.findIndex((Ne) => Rt(Ne, G)), de = [...u.value];
        Z === -1 ? de.push(G) : de.splice(Z, 1), u.value = de;
      } else
        u.value = G, _(!1);
    }
    const w = A(!1), h = A(), x = A(), { forwardRef: C, currentElement: D } = z(), { getItems: k, reactiveItems: O, itemMapSize: E } = Cl("data-radix-vue-combobox-item"), I = A([]);
    te(() => E.value, () => {
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
      const Z = G === "blur-sm" || G === "select" && a.resetSearchTermOnSelect;
      !o.value && u.value && !Array.isArray(u.value) ? a.displayValue ? d.value = a.displayValue(u.value) : typeof u.value != "object" ? d.value = u.value.toString() : Z && (d.value = "") : Z && (d.value = "");
    }
    const N = $(() => M.value.findIndex((G) => Rt(G, p.value))), S = $(() => {
      var G;
      return (G = O.value.find((Z) => Rt(Z.value, p.value))) == null ? void 0 : G.ref;
    }), V = $(() => JSON.stringify(u.value));
    te(V, async () => {
      await se(), await se(), W("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), te(() => [M.value.length, d.value.length], async ([G, Z], [de, Ne]) => {
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
    function ee() {
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
    return Of({
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
      selectedElement: S,
      onInputElementChange: (G) => h.value = G,
      onInputNavigation: async (G) => {
        const Z = N.value;
        Z === 0 && G === "up" || Z === M.value.length - 1 && G === "down" || (Z === -1 && M.value.length || G === "home" ? p.value = M.value[0] : G === "end" ? p.value = M.value[M.value.length - 1] : p.value = M.value[G === "up" ? Z - 1 : Z + 1], await se(), q(), U(), se(() => {
          var de;
          return (de = h.value) == null ? void 0 : de.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: ye,
      onCompositionEnd: ge,
      onCompositionStart: ee,
      selectedValue: p,
      onSelectedValueChange: (G) => p.value = G,
      parentElement: D,
      contentElement: x,
      onContentElementChange: (G) => x.value = G
    }), (G, Z) => (v(), g(l(ga), null, {
      default: f(() => [
        B(l(F), P({
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
            l(R) && a.name ? (v(), g(l(Sf), {
              key: 0,
              name: a.name,
              value: l(u)
            }, null, 8, ["name", "value"])) : oe("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Mf = /* @__PURE__ */ y({
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
    dd(() => {
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
    return (c, p) => (v(), g(l(F), {
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
}), [Zr, Tf] = le("ComboboxGroup"), If = /* @__PURE__ */ y({
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
    return zc(n, () => {
      se(() => {
        i();
      });
    }, { childList: !0 }), te(() => s.searchTerm.value, () => {
      se(() => {
        i();
      });
    }, { immediate: !0 }), Tf({
      id: o
    }), (d, u) => ua((v(), g(l(F), P(t, {
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
      [Wo, r.value]
    ]);
  }
}), Vf = /* @__PURE__ */ y({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    z();
    const a = Zr({ id: "" });
    return (n, o) => (v(), g(l(F), P(t, {
      id: l(a).id
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [S0, Rf] = le("ComboboxContent"), Ff = /* @__PURE__ */ y({
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
    return Rf({ position: o }), (_, m) => (v(), g(l(kl), null, {
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
            (v(), g(Ae(l(o) === "popper" ? l(da) : l(F)), P({ ..._.$attrs, ...l(u) }, {
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
        }, 8, ["disable-outside-pointer-events"])) : (v(), g(Ae(l(o) === "popper" ? l(da) : l(F)), P({ key: 1 }, { ..._.$attrs, ...d.value }, {
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
}), Lf = /* @__PURE__ */ y({
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
    const a = ae(e, t), { forwardRef: n } = z(), o = ya();
    return o.contentId || (o.contentId = we(void 0, "radix-vue-combobox-content")), (s, r) => (v(), g(l(Te), {
      present: s.forceMount || l(o).open.value
    }, {
      default: f(() => [
        B(Ff, P({ ...l(a), ...s.$attrs }, { ref: l(n) }), {
          default: f(() => [
            b(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Nf = /* @__PURE__ */ y({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    z();
    const a = ya(), n = $(() => a.filteredOptions.value.length === 0);
    return (o, s) => n.value ? (v(), g(l(F), H(P({ key: 0 }, t)), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          J("No options")
        ])
      ]),
      _: 3
    }, 16)) : oe("", !0);
  }
});
function zf(e) {
  const t = Fn({
    nonce: A()
  });
  return $(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.nonce) == null ? void 0 : a.value);
  });
}
const [P0, Uf] = le("ComboboxItem"), Wf = "combobox.select", Hf = /* @__PURE__ */ y({
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
    Zr({ id: "", options: A([]) });
    const { forwardRef: r } = z(), i = $(
      () => {
        var h, x;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (h = s.modelValue.value) == null ? void 0 : h.some((C) => Rt(C, a.value)) : Rt((x = s.modelValue) == null ? void 0 : x.value, a.value);
      }
    ), d = $(() => Rt(s.selectedValue.value, a.value)), u = we(void 0, "radix-vue-combobox-item"), c = we(void 0, "radix-vue-combobox-option"), p = $(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((h) => Rt(h, a.value)) : !0);
    async function _(h) {
      n("select", h), !(h != null && h.defaultPrevented) && !o.value && h && s.onValueChange(a.value);
    }
    function m(h) {
      if (!h)
        return;
      const x = { originalEvent: h, value: a.value };
      dl(Wf, _, x);
    }
    async function w(h) {
      await se(), !h.defaultPrevented && s.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Uf({
      isSelected: i
    }), (h, x) => (v(), g(l(Un), { value: h.value }, {
      default: f(() => [
        ua(B(l(F), {
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
              J(Q(h.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Wo, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Kf = /* @__PURE__ */ y({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), g(l(F), P(t, { "aria-hidden": "true" }), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ei = /* @__PURE__ */ y({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(zn), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function jf() {
  const e = A(!1);
  return ce(() => {
    ia("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), ia(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const Gf = Sr(jf), [Ht, ti] = le(["MenuRoot", "MenuSub"], "MenuContext"), [Ya, qf] = le("MenuRoot"), Yf = /* @__PURE__ */ y({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o, dir: s } = me(a), r = ot(s), i = ve(a, "open", n), d = A(), u = Gf();
    return ti({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: d,
      onContentChange: (c) => {
        d.value = c;
      }
    }), qf({
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
}), Jf = "rovingFocusGroup.onEntryFocus", Qf = { bubbles: !1, cancelable: !0 }, Xf = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Zf(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function ev(e, t, a) {
  const n = Zf(e.key, a);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Xf[n];
}
function ai(e, t = !1) {
  const a = xe();
  for (const n of e)
    if (n === a || (n.focus({ preventScroll: t }), xe() !== a))
      return;
}
function tv(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
const [av, nv] = le("RovingFocusGroup"), ni = /* @__PURE__ */ y({
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
    const n = e, o = a, { loop: s, orientation: r, dir: i } = me(n), d = ot(i), u = ve(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = A(!1), p = A(!1), _ = A(0), { getItems: m } = Cl();
    function w(x) {
      const C = !p.value;
      if (x.currentTarget && x.target === x.currentTarget && C && !c.value) {
        const D = new CustomEvent(Jf, Qf);
        if (x.currentTarget.dispatchEvent(D), o("entryFocus", D), !D.defaultPrevented) {
          const k = m().map((M) => M.ref).filter((M) => M.dataset.disabled !== ""), O = k.find((M) => M.getAttribute("data-active") === "true"), E = k.find(
            (M) => M.id === u.value
          ), I = [O, E, ...k].filter(
            Boolean
          );
          ai(I, n.preventScrollOnEntryFocus);
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
    }), nv({
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
    }), (x, C) => (v(), g(l(kl), null, {
      default: f(() => [
        B(l(F), {
          tabindex: c.value || _.value === 0 ? -1 : 0,
          "data-orientation": l(r),
          as: x.as,
          "as-child": x.asChild,
          dir: l(d),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (D) => p.value = !0),
          onMouseup: h,
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
}), ov = /* @__PURE__ */ y({
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
    const t = e, a = av(), n = $(() => t.tabStopId || we()), o = $(
      () => a.currentTabStopId.value === n.value
    ), { getItems: s } = Bl();
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
      const d = ev(
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
          u = a.loop.value ? tv(u, c + 1) : u.slice(c + 1);
        }
        se(() => ai(u));
      }
    }
    return (i, d) => (v(), g(l(Un), null, {
      default: f(() => [
        B(l(F), {
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
}), [Dl, lv] = le("MenuContent"), Sl = /* @__PURE__ */ y({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Ws({
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
    ...Xr
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Ht(), s = Ya(), { trapFocus: r, disableOutsidePointerEvents: i, loop: d } = me(a);
    fl(), Wa(i.value);
    const u = A(""), c = A(0), p = A(0), _ = A(null), m = A("right"), w = A(0), h = A(null), { createCollection: x } = fa(), { forwardRef: C, currentElement: D } = z(), k = x(D);
    te(D, (S) => {
      o.onContentChange(S);
    });
    const { handleTypeaheadSearch: O } = vl(k);
    At(() => {
      window.clearTimeout(c.value);
    });
    function E(S) {
      var V, R;
      return m.value === ((V = _.value) == null ? void 0 : V.side) && jp(S, (R = _.value) == null ? void 0 : R.area);
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
      const V = S.target.closest("[data-radix-menu-content]") === S.currentTarget, R = S.ctrlKey || S.altKey || S.metaKey, q = S.key.length === 1, U = Ar(
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
      if (S.code === "Space" || (V && (S.key === "Tab" && S.preventDefault(), !R && q && O(S.key)), S.target !== D.value) || !Up.includes(S.key))
        return;
      S.preventDefault();
      const Y = k.value;
      Hr.includes(S.key) && Y.reverse(), Po(Y);
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
    return lv({
      onItemEnter: (S) => !!E(S),
      onItemLeave: (S) => {
        var V;
        E(S) || ((V = D.value) == null || V.focus(), h.value = null);
      },
      onTriggerLeave: (S) => !!E(S),
      searchRef: u,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (S) => {
        _.value = S;
      }
    }), (S, V) => (v(), g(l(Nn), {
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
            B(l(ni), {
              "current-tab-stop-id": h.value,
              "onUpdate:currentTabStopId": V[0] || (V[0] = (R) => h.value = R),
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
                  "data-state": l(bl)(l(o).open.value),
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
}), oi = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Dl(), { forwardRef: n } = z(), o = A(!1);
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
    return (i, d) => (v(), g(l(Un), {
      value: { textValue: i.textValue }
    }, {
      default: f(() => [
        B(l(F), P({
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
}), Pl = /* @__PURE__ */ y({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: s } = z(), r = Ya(), i = Dl(), d = A(!1);
    async function u() {
      const c = s.value;
      if (!a.disabled && c) {
        const p = new CustomEvent(Np, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await se(), p.defaultPrevented ? d.value = !1 : r.onClose();
      }
    }
    return (c, p) => (v(), g(oi, P(a, {
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
        c.disabled || m && _.key === " " || l(So).includes(_.key) && (_.currentTarget.click(), _.preventDefault());
      })
    }), {
      default: f(() => [
        b(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [sv, li] = le(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), rv = /* @__PURE__ */ y({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = sv({
      checked: A(!1)
    });
    return (a, n) => (v(), g(l(Te), {
      present: a.forceMount || l(Bn)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: f(() => [
        B(l(F), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": l(_l)(l(t).checked.value)
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
}), iv = /* @__PURE__ */ y({
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
    return li({ checked: o }), (s, r) => (v(), g(Pl, P({ role: "menuitemcheckbox" }, a, {
      "aria-checked": l(Bn)(l(o)) ? "mixed" : l(o),
      "data-state": l(_l)(l(o)),
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
}), dv = /* @__PURE__ */ y({
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
    const a = e, n = t, o = ae(a, n), s = Ht(), { forwardRef: r, currentElement: i } = z();
    return Ka(i), (d, u) => (v(), g(Sl, P(l(o), {
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
}), uv = /* @__PURE__ */ y({
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
    const a = ae(e, t), n = Ht();
    return (o, s) => (v(), g(Sl, P(l(a), {
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
}), cv = /* @__PURE__ */ y({
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
    const a = ae(e, t), n = Ht(), o = Ya();
    return (s, r) => (v(), g(l(Te), {
      present: s.forceMount || l(n).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), g(dv, H(P({ key: 0 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            b(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), g(uv, H(P({ key: 1 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            b(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), si = /* @__PURE__ */ y({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), P({ role: "group" }, t), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pv = /* @__PURE__ */ y({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fv = /* @__PURE__ */ y({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(ja), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [vv, mv] = le("MenuRadioGroup"), hv = /* @__PURE__ */ y({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = ve(a, "modelValue", t);
    return mv({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, s) => (v(), g(si, H(j(a)), {
      default: f(() => [
        b(o.$slots, "default", { modelValue: l(n) })
      ]),
      _: 3
    }, 16));
  }
}), gv = /* @__PURE__ */ y({
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
    const a = e, n = t, { value: o } = me(a), s = vv(), r = $(
      () => s.modelValue.value === (o == null ? void 0 : o.value)
    );
    return li({ checked: r }), (i, d) => (v(), g(Pl, P({ role: "menuitemradio" }, a, {
      "aria-checked": r.value,
      "data-state": l(_l)(r.value),
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
}), yv = /* @__PURE__ */ y({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), P(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ri, bv] = le("MenuSub"), _v = /* @__PURE__ */ y({
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
    }), ti({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: r,
      onContentChange: (i) => {
        r.value = i;
      }
    }), bv({
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
}), wv = /* @__PURE__ */ y({
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
    const a = ae(e, t), n = Ht(), o = Ya(), s = ri(), { forwardRef: r, currentElement: i } = z();
    return s.contentId || (s.contentId = we(void 0, "radix-vue-menu-sub-content")), (d, u) => (v(), g(l(Te), {
      present: d.forceMount || l(n).open.value
    }, {
      default: f(() => [
        B(Sl, P(l(a), {
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
            const m = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), w = l(Hp)[l(o).dir.value].includes(c.key);
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
}), xv = /* @__PURE__ */ y({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Ht(), n = Ya(), o = ri(), s = Dl(), r = A(null);
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
        const h = (m = a.content.value) == null ? void 0 : m.dataset.side, x = h === "right", C = x ? -5 : 5, D = w[x ? "left" : "right"], k = w[x ? "right" : "left"];
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
      t.disabled || m && p.key === " " || Wp[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await se(), (_ = a.content.value) == null || _.focus(), p.preventDefault());
    }
    return (p, _) => (v(), g(ei, { "as-child": "" }, {
      default: f(() => [
        B(oi, P(t, {
          id: l(o).triggerId,
          ref: (m) => {
            var w;
            (w = l(o)) == null || w.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(a).open.value,
          "aria-controls": l(o).contentId,
          "data-state": l(bl)(l(a).open.value),
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
}), [ii, $v] = le("DropdownMenuRoot"), Cv = /* @__PURE__ */ y({
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
    }), s = A(), { modal: r, dir: i } = me(a), d = ot(i);
    return $v({
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
    }), (u, c) => (v(), g(l(Yf), {
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
}), kv = /* @__PURE__ */ y({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = ii(), { forwardRef: n, currentElement: o } = z();
    return ce(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = we(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (v(), g(l(ei), { "as-child": "" }, {
      default: f(() => [
        B(l(F), {
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
}), Bv = /* @__PURE__ */ y({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(fv), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dv = /* @__PURE__ */ y({
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
    const a = ae(e, t);
    z();
    const n = ii(), o = A(!1);
    function s(r) {
      r.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, r.preventDefault());
    }
    return n.contentId || (n.contentId = we(void 0, "radix-vue-dropdown-menu-content")), (r, i) => {
      var d;
      return v(), g(l(cv), P(l(a), {
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
}), di = /* @__PURE__ */ y({
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
    return z(), (o, s) => (v(), g(l(Pl), H(j({ ...a, ...l(n) })), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sv = /* @__PURE__ */ y({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), g(l(si), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pv = /* @__PURE__ */ y({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), g(l(yv), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ev = /* @__PURE__ */ y({
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
    return z(), (o, s) => (v(), g(l(iv), H(j({ ...a, ...l(n) })), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ui = /* @__PURE__ */ y({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), g(l(rv), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ov = /* @__PURE__ */ y({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), g(l(pv), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Av = /* @__PURE__ */ y({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = Wt(t);
    return z(), (o, s) => (v(), g(l(hv), H(j({ ...a, ...l(n) })), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mv = /* @__PURE__ */ y({
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
    const a = ae(e, t);
    return z(), (n, o) => (v(), g(l(gv), H(j(l(a))), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tv = /* @__PURE__ */ y({
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
    return z(), (o, s) => (v(), g(l(_v), {
      open: l(n),
      "onUpdate:open": s[0] || (s[0] = (r) => ca(n) ? n.value = r : null)
    }, {
      default: f(() => [
        b(o.$slots, "default", { open: l(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Iv = /* @__PURE__ */ y({
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
    const a = ae(e, t);
    return z(), (n, o) => (v(), g(l(wv), P(l(a), { style: {
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
}), Vv = /* @__PURE__ */ y({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), g(l(xv), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rv = /* @__PURE__ */ y({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), g(l(F), P(t, {
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
}), [ba, Fv] = le("PaginationRoot"), E0 = /* @__PURE__ */ y({
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
    return Fv({
      page: i,
      onPageChange(u) {
        i.value = u;
      },
      pageCount: d,
      siblingCount: o,
      disabled: s,
      showEdges: r
    }), (u, c) => (v(), g(l(F), {
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
}), Lv = /* @__PURE__ */ y({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), g(l(F), P(t, { "data-type": "ellipsis" }), {
      default: f(() => [
        b(a.$slots, "default", {}, () => [
          J("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), Nv = /* @__PURE__ */ y({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = ba();
    z();
    const n = $(() => a.page.value === 1 || a.disabled.value);
    return (o, s) => (v(), g(l(F), P(t, {
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
}), zv = /* @__PURE__ */ y({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = ba();
    z();
    const n = $(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, s) => (v(), g(l(F), P(t, {
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
function Uv(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const on = "ellipsis";
function Wv(e, t, a, n) {
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
const O0 = /* @__PURE__ */ y({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    z();
    const a = ba(), n = $(() => Uv(
      Wv(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, s) => (v(), g(l(F), H(j(t)), {
      default: f(() => [
        b(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), A0 = /* @__PURE__ */ y({
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
    return (s, r) => (v(), g(l(F), P(t, {
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
          J(Q(s.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), Hv = /* @__PURE__ */ y({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    z();
    const a = ba(), n = $(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, s) => (v(), g(l(F), P(t, {
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
}), Kv = /* @__PURE__ */ y({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    z();
    const a = ba(), n = $(() => a.page.value === 1 || a.disabled.value);
    return (o, s) => (v(), g(l(F), P(t, {
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
}), [Ja, jv] = le("PopoverRoot"), Gv = /* @__PURE__ */ y({
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
}), qv = /* @__PURE__ */ y({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ja(), { forwardRef: n, currentElement: o } = z();
    return ce(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), g(Ae(l(a).hasCustomAnchor.value ? l(F) : l(zn)), { "as-child": "" }, {
      default: f(() => [
        B(l(F), {
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
}), Yv = /* @__PURE__ */ y({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(ja), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ci = /* @__PURE__ */ y({
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
    return fl(), (i, d) => (v(), g(l(Nn), {
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
  setup(e, { emit: t }) {
    const a = e, n = t, o = Ja(), s = A(!1);
    Wa(!0);
    const r = ae(a, n), { forwardRef: i, currentElement: d } = z();
    return Ka(d), (u, c) => (v(), g(ci, P(l(r), {
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
  setup(e, { emit: t }) {
    const a = e, n = t, o = Ja(), s = A(!1), r = A(!1), i = ae(a, n);
    return (d, u) => (v(), g(ci, P(l(i), {
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
  setup(e, { emit: t }) {
    const a = e, n = t, o = Ja(), s = ae(a, n), { forwardRef: r } = z();
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
function Zv(e) {
  const t = $(() => e.start.value ? !!e.isDateDisabled(e.start.value) : !1), a = $(() => e.end.value ? !!e.isDateDisabled(e.end.value) : !1), n = $(
    () => t.value || a.value ? !1 : !!(e.start.value && e.end.value && Dt(e.end.value, e.start.value))
  ), o = (d) => e.start.value ? Ce(e.start.value, d) : !1, s = (d) => e.end.value ? Ce(e.end.value, d) : !1, r = (d) => e.start.value && Ce(e.start.value, d) || e.end.value && Ce(e.end.value, d) ? !0 : e.end.value && e.start.value ? Pu(d, e.start.value, e.end.value) : !1, i = $(() => {
    if (e.start.value && e.end.value || !e.start.value || !e.focusedValue.value)
      return null;
    const d = Dt(e.start.value, e.focusedValue.value), u = d ? e.start.value : e.focusedValue.value, c = d ? e.focusedValue.value : e.start.value;
    return Ce(u, c) ? {
      start: u,
      end: c
    } : Au(u, c, e.isDateUnavailable, e.isDateDisabled) ? {
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
const em = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, tm = {
  role: "heading",
  "aria-level": "2"
}, [_a, am] = le("RangeCalendarRoot"), nm = /* @__PURE__ */ y({
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
      calendarLabel: h,
      maxValue: x,
      minValue: C,
      locale: D,
      dir: k,
      nextPage: O,
      prevPage: E
    } = me(a), { primitiveElement: I, currentElement: M } = va(), W = ot(k), N = A(), S = A(), V = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), R = Br({
      defaultPlaceholder: a.placeholder,
      defaultValue: V.value.start,
      locale: a.locale
    }), q = A(V.value.start), U = A(V.value.end), Y = ve(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? R.copy(),
      passive: a.placeholder === void 0
    });
    function ee(pe) {
      Y.value = pe.copy();
    }
    const {
      fullCalendarLabel: ge,
      headingValue: ye,
      isDateDisabled: G,
      isDateUnavailable: Z,
      isNextButtonDisabled: de,
      isPrevButtonDisabled: Ne,
      grid: Ye,
      weekdays: bt,
      isOutsideVisibleView: _t,
      nextPage: Ca,
      prevPage: Ie,
      formatter: Ee
    } = qr({
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
      calendarLabel: h,
      nextPage: O,
      prevPage: E
    }), {
      isInvalid: Je,
      isSelected: ue,
      highlightedRange: De,
      isSelectionStart: rt,
      isSelectionEnd: ka,
      isHighlightedStart: sd,
      isHighlightedEnd: rd
    } = Zv({
      start: q,
      end: U,
      isDateDisabled: G,
      isDateUnavailable: Z,
      focusedValue: S
    });
    return te(V, (pe) => {
      var Ve, Se, Yn, Fl;
      (!pe || !pe.start || q.value && !Xe(pe.start, q.value)) && (q.value = (Se = (Ve = pe == null ? void 0 : pe.start) == null ? void 0 : Ve.copy) == null ? void 0 : Se.call(Ve)), (!pe || !pe.end || U.value && !Xe(pe.end, U.value)) && (U.value = (Fl = (Yn = pe == null ? void 0 : pe.end) == null ? void 0 : Yn.copy) == null ? void 0 : Fl.call(Yn));
    }), te(q, (pe) => {
      pe && !Xe(pe, Y.value) && ee(pe), n("update:startValue", pe);
    }), te([q, U], ([pe, Ve]) => {
      const Se = V.value;
      if (!(Se && Se.start && Se.end && pe && Ve && Xe(Se.start, pe) && Xe(Se.end, Ve)))
        if (pe && Ve) {
          if (Se.start && Se.end && Xe(Se.start, pe) && Xe(Se.end, Ve))
            return;
          Dt(Ve, pe) ? V.value = {
            start: Ve.copy(),
            end: pe.copy()
          } : V.value = {
            start: pe.copy(),
            end: Ve.copy()
          };
        } else Se.start && Se.end && (V.value = {
          start: pe == null ? void 0 : pe.copy(),
          end: void 0
        });
    }), am({
      isDateUnavailable: Z,
      startValue: q,
      endValue: U,
      formatter: Ee,
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
      isInvalid: Je,
      isDateDisabled: G,
      highlightedRange: De,
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
      onPlaceholderChange: ee,
      locale: D,
      dir: W,
      isHighlightedStart: sd,
      isHighlightedEnd: rd
    }), ce(() => {
      r.value && Dr(M.value);
    }), (pe, Ve) => (v(), g(l(F), {
      ref_key: "primitiveElement",
      ref: I,
      as: pe.as,
      "as-child": pe.asChild,
      role: "application",
      "aria-label": l(ge),
      "data-readonly": l(s) ? "" : void 0,
      "data-disabled": l(o) ? "" : void 0,
      "data-invalid": l(Je) ? "" : void 0,
      dir: l(W)
    }, {
      default: f(() => [
        ie("div", em, [
          ie("div", tm, Q(l(ge)), 1)
        ]),
        b(pe.$slots, "default", {
          date: l(Y),
          grid: l(Ye),
          weekDays: l(bt),
          weekStartsOn: l(d),
          locale: l(D),
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
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), H(j(t)), {
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
  setup(e) {
    const t = e, a = _a();
    return (n, o) => (v(), g(l(F), P(t, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        b(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          J(Q(l(a).headingValue.value), 1)
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
  setup(e) {
    const t = e, a = _a(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), g(l(F), P(t, {
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
  setup(e) {
    const t = _a();
    return (a, n) => {
      var o, s;
      return v(), g(l(F), {
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
}), im = /* @__PURE__ */ y({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), H(j(t)), {
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
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = _a();
    return (o, s) => (v(), g(l(F), P(t, {
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
}), um = /* @__PURE__ */ y({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = $(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = _a();
    return (o, s) => (v(), g(l(F), P(t, {
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
}), cm = /* @__PURE__ */ y({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), P(t, { "aria-hidden": "true" }), {
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
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), H(j(t)), {
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
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), H(j(t)), {
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
  setup(e) {
    const t = e, a = _a(), n = Fr(), { primitiveElement: o, currentElement: s } = va(), r = $(() => a.formatter.custom(Fe(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = $(() => a.isDateDisabled(t.day)), d = $(() => {
      var N;
      return (N = a.isDateUnavailable) == null ? void 0 : N.call(a, t.day);
    }), u = $(() => a.isSelected(t.day)), c = $(() => a.isSelectionStart(t.day)), p = $(() => a.isSelectionEnd(t.day)), _ = $(() => a.isHighlightedStart(t.day)), m = $(() => a.isHighlightedEnd(t.day)), w = $(() => a.highlightedRange.value ? Su(t.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])", x = $(() => Ys(t.day, mt())), C = $(() => !Ko(t.day, t.month)), D = $(
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
      const S = a.parentElement.value, V = S ? Array.from(S.querySelectorAll(h)) : [];
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
          const Y = S ? Array.from(S.querySelectorAll(h)) : [];
          if (!a.pagedNavigation.value) {
            const ee = ht(a.placeholder.value);
            Y[ee - Math.abs(R)].focus();
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
          const Y = S ? Array.from(S.querySelectorAll(h)) : [];
          if (!a.pagedNavigation.value) {
            const ee = ht(a.placeholder.value.add({ months: a.numberOfMonths.value - 1 }));
            Y[Y.length - ee + R - V.length].focus();
            return;
          }
          Y[R - V.length].focus();
        });
      }
    }
    return (N, S) => (v(), g(l(F), P({
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
          J(Q(k.value), 1)
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
  setup(e) {
    const t = e, { value: a } = me(t), n = A();
    return (o, s) => (v(), g(l(qa), { "as-child": "" }, {
      default: f(() => [
        ua(ie("select", P({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => ca(a) ? a.value = r : null),
          "default-value": l(a)
        }), [
          b(o.$slots, "default")
        ], 16, mm), [
          [fd, l(a)]
        ])
      ]),
      _: 3
    }));
  }
}), gm = {
  key: 0,
  value: ""
}, [Kt, pi] = le("SelectRoot"), [ym, bm] = le("SelectRoot"), _m = /* @__PURE__ */ y({
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
    }), u = A(!1), { required: c, disabled: p, dir: _ } = me(a), m = ot(_);
    pi({
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
    const w = Ha(r), h = A(/* @__PURE__ */ new Set()), x = $(() => Array.from(h.value).map((C) => {
      var D;
      return (D = C.props) == null ? void 0 : D.value;
    }).join(";"));
    return bm({
      onNativeOptionAdd: (C) => {
        h.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        h.value.delete(C);
      }
    }), (C, D) => (v(), g(l(ga), null, {
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
          onChange: D[0] || (D[0] = (k) => o.value = k.target.value)
        }), {
          default: f(() => [
            l(o) === void 0 ? (v(), L("option", gm)) : oe("", !0),
            (v(!0), L(X, null, fe(Array.from(h.value), (k) => (v(), g(Ae(k), P({ ref_for: !0 }, k.props, {
              key: k.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : oe("", !0)
      ]),
      _: 3
    }));
  }
}), wm = [" ", "Enter", "ArrowUp", "ArrowDown"], xm = [" ", "Enter"], We = 10;
function fi(e) {
  return e === "" || vn(e);
}
const $m = /* @__PURE__ */ y({
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
    const { injectCollection: r } = fa(), i = r(), { search: d, handleTypeaheadSearch: u, resetTypeahead: c } = vl(i);
    function p() {
      n.value || (a.onOpenChange(!0), c());
    }
    function _(m) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, w) => (v(), g(l(zn), { "as-child": "" }, {
      default: f(() => {
        var h, x, C, D;
        return [
          B(l(F), {
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
            "data-placeholder": l(fi)((D = l(a).modelValue) == null ? void 0 : D.value) ? "" : void 0,
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
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(ja), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [El, km] = le("SelectItemAlignedPosition"), Bm = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, { injectCollection: o } = fa(), s = Kt(), r = jt(), i = o(), d = A(!1), u = A(!0), c = A(), { forwardRef: p, currentElement: _ } = z(), { viewport: m, selectedItem: w, selectedItemText: h, focusSelectedItem: x } = r;
    function C() {
      if (s.triggerElement.value && s.valueElement.value && c.value && _.value && m != null && m.value && w != null && w.value && h != null && h.value) {
        const O = s.triggerElement.value.getBoundingClientRect(), E = _.value.getBoundingClientRect(), I = s.valueElement.value.getBoundingClientRect(), M = h.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const Ie = M.left - E.left, Ee = I.left - Ie, Je = O.left - Ee, ue = O.width + Je, De = Math.max(ue, E.width), rt = window.innerWidth - We, ka = kn(Ee, We, Math.max(We, rt - De));
          c.value.style.minWidth = `${ue}px`, c.value.style.left = `${ka}px`;
        } else {
          const Ie = E.right - M.right, Ee = window.innerWidth - I.right - Ie, Je = window.innerWidth - O.right - Ee, ue = O.width + Je, De = Math.max(ue, E.width), rt = window.innerWidth - We, ka = kn(
            Ee,
            We,
            Math.max(We, rt - De)
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
        ), ee = R + q + S + Y + U, ge = Math.min(
          w.value.offsetHeight * 5,
          ee
        ), ye = window.getComputedStyle(m.value), G = Number.parseInt(ye.paddingTop, 10), Z = Number.parseInt(
          ye.paddingBottom,
          10
        ), de = O.top + O.height / 2 - We, Ne = N - de, Ye = w.value.offsetHeight / 2, bt = w.value.offsetTop + Ye, _t = R + q + bt, Ca = ee - _t;
        if (_t <= de) {
          const Ie = w.value === W[W.length - 1];
          c.value.style.bottom = "0px";
          const Ee = _.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, Je = Math.max(
            Ne,
            Ye + (Ie ? Z : 0) + Ee + U
          ), ue = _t + Je;
          c.value.style.height = `${ue}px`;
        } else {
          const Ie = w.value === W[0];
          c.value.style.top = "0px";
          const Ee = Math.max(
            de,
            R + m.value.offsetTop + (Ie ? G : 0) + Ye
          ) + Ca;
          c.value.style.height = `${Ee}px`, m.value.scrollTop = _t - de + m.value.offsetTop;
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
    return km({
      contentWrapper: c,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: k
    }), (O, E) => (v(), L("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: Ot({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: D.value
      })
    }, [
      B(l(F), P({
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
    return (a, n) => (v(), g(l(da), P(l(t), { style: {
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
}, [jt, Sm] = le("SelectContent"), Pm = /* @__PURE__ */ y({
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
    fl(), Wa(a.bodyLock);
    const { createCollection: s } = fa(), r = A();
    Ka(r);
    const i = s(r), { search: d, handleTypeaheadSearch: u } = vl(i), c = A(), p = A(), _ = A(), m = A(!1), w = A(!1);
    function h() {
      p.value && r.value && Po([p.value, r.value]);
    }
    te(m, () => {
      h();
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
        setTimeout(() => Po(M)), E.preventDefault();
      }
    }
    const k = $(() => a.position === "popper" ? a : {}), O = re(k.value);
    return Sm({
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
      focusSelectedItem: h,
      position: a.position,
      isPositioned: m,
      searchRef: d
    }), (E, I) => (v(), g(l(Nn), {
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
}), Em = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return pi(e.context), (t, a) => b(t.$slots, "default");
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
  setup(e, { emit: t }) {
    const a = e, n = ae(a, t), o = Kt(), s = A();
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
          B(Pm, H(j({ ...l(n), ...d.$attrs })), {
            default: f(() => [
              b(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = r.value) != null && c.present) && s.value ? (v(), L("div", Om, [
        (v(), g(On, { to: s.value }, [
          B(Em, { context: l(o) }, {
            default: f(() => [
              b(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : oe("", !0);
    };
  }
}), Mm = /* @__PURE__ */ y({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), P({ "aria-hidden": "true" }, t), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [vi, Tm] = le("SelectItem"), Im = /* @__PURE__ */ y({
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
      var h;
      return ((h = n.modelValue) == null ? void 0 : h.value) === t.value;
    }), d = A(!1), u = A(t.textValue ?? ""), c = we(void 0, "radix-vue-select-item-text");
    async function p(h) {
      await se(), !(h != null && h.defaultPrevented) && (a.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function _(h) {
      var x;
      await se(), !h.defaultPrevented && (a.value ? (x = o.onItemLeave) == null || x.call(o) : h.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(h) {
      var x;
      await se(), !h.defaultPrevented && h.currentTarget === xe() && ((x = o.onItemLeave) == null || x.call(o));
    }
    async function w(h) {
      var x;
      await se(), !(h.defaultPrevented || ((x = o.searchRef) == null ? void 0 : x.value) !== "" && h.key === " ") && (xm.includes(h.key) && p(), h.key === " " && h.preventDefault());
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
    }), Tm({
      value: t.value,
      disabled: a,
      textId: c,
      isSelected: i,
      onItemTextChange: (h) => {
        u.value = ((u.value || (h == null ? void 0 : h.textContent)) ?? "").trim();
      }
    }), (h, x) => (v(), g(l(F), {
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
      onTouchend: x[3] || (x[3] = ke(() => {
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
  setup(e) {
    const t = e, a = vi();
    return (n, o) => l(a).isSelected.value ? (v(), g(l(F), P({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : oe("", !0);
  }
}), [Rm, Fm] = le("SelectGroup"), Lm = /* @__PURE__ */ y({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = we(void 0, "radix-vue-select-group");
    return Fm({ id: a }), (n, o) => (v(), g(l(F), P({ role: "group" }, t, { "aria-labelledby": l(a) }), {
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
  setup(e) {
    const t = e, a = Rm({ id: "" });
    return (n, o) => (v(), g(l(F), P(t, {
      id: l(a).id
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), mi = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = Kt(), n = jt(wa), o = ym(), s = vi(), { forwardRef: r, currentElement: i } = z(), d = $(() => {
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
    }), Uo(() => {
      o.onNativeOptionRemove(d.value);
    }), (u, c) => (v(), L(X, null, [
      B(l(F), P({
        id: l(s).textId,
        ref: l(r)
      }, { ...t, ...u.$attrs }, { "data-item-text": "" }), {
        default: f(() => [
          b(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      l(s).isSelected.value && l(a).valueElement.value && !l(a).valueElementHasChildren.value ? (v(), g(On, {
        key: 0,
        to: l(a).valueElement.value
      }, [
        b(u.$slots, "default")
      ], 8, ["to"])) : oe("", !0)
    ], 64));
  }
}), zm = /* @__PURE__ */ y({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: a } = me(t), n = zf(a), o = jt(wa), s = o.position === "item-aligned" ? El() : void 0, { forwardRef: r, currentElement: i } = z();
    ce(() => {
      o == null || o.onViewportChange(i.value);
    });
    const d = A(0);
    function u(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: _, contentWrapper: m } = s ?? {};
      if (_ != null && _.value && m != null && m.value) {
        const w = Math.abs(d.value - p.scrollTop);
        if (w > 0) {
          const h = window.innerHeight - We * 2, x = Number.parseFloat(
            m.value.style.minHeight
          ), C = Number.parseFloat(m.value.style.height), D = Math.max(x, C);
          if (D < h) {
            const k = D + w, O = Math.min(h, k), E = k - O;
            m.value.style.height = `${O}px`, m.value.style.bottom === "0px" && (p.scrollTop = E > 0 ? E : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = p.scrollTop;
    }
    return (c, p) => (v(), L(X, null, [
      B(l(F), P({
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
      B(l(F), {
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
}), hi = /* @__PURE__ */ y({
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
    return Uo(() => i()), (c, p) => {
      var _;
      return v(), g(l(F), P({
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
  setup(e) {
    const t = jt(wa), a = t.position === "item-aligned" ? El() : void 0, { forwardRef: n, currentElement: o } = z(), s = A(!1);
    return be((r) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let u = function() {
          s.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        u(), c.addEventListener("scroll", u), r(() => c.removeEventListener("scroll", u));
      }
    }), te(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), g(hi, {
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
    }, 512)) : oe("", !0);
  }
}), Wm = /* @__PURE__ */ y({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = jt(wa), a = t.position === "item-aligned" ? El() : void 0, { forwardRef: n, currentElement: o } = z(), s = A(!1);
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
    }), te(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), g(hi, {
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
    }, 512)) : oe("", !0);
  }
}), Hm = /* @__PURE__ */ y({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: a } = z(), n = Kt(), o = Fs();
    return id(() => {
      var s;
      const r = !!Rn((s = o == null ? void 0 : o.default) == null ? void 0 : s.call(o)).length;
      n.onValueElementHasChildrenChange(r);
    }), ce(() => {
      n.valueElement = a;
    }), (s, r) => (v(), g(l(F), {
      ref: l(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: f(() => {
        var i;
        return [
          l(fi)((i = l(n).modelValue) == null ? void 0 : i.value) ? (v(), L(X, { key: 0 }, [
            J(Q(s.placeholder), 1)
          ], 64)) : b(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Km = /* @__PURE__ */ y({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, a) => (v(), g(l(F), {
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
}), jm = /* @__PURE__ */ y({
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
    return (i, d) => (v(), g(l(F), P({
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
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(jm, H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function qm(e = [], t, a) {
  const n = [...e];
  return n[a] = t, n.sort((o, s) => o - s);
}
function gi(e, t, a) {
  const n = 100 / (a - t) * (e - t);
  return kn(n, 0, 100);
}
function Ym(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Jm(e, t) {
  if (e.length === 1)
    return 0;
  const a = e.map((o) => Math.abs(o - t)), n = Math.min(...a);
  return a.indexOf(n);
}
function Qm(e, t, a) {
  const n = e / 2, o = Ol([0, 50], [0, n]);
  return (n - o(t) * a) * a;
}
function Xm(e) {
  return e.slice(0, -1).map((t, a) => e[a + 1] - t);
}
function Zm(e, t) {
  if (t > 0) {
    const a = Xm(e);
    return Math.min(...a) >= t;
  }
  return !0;
}
function Ol(e, t) {
  return (a) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (a - e[0]);
  };
}
function eh(e) {
  return (String(e).split(".")[1] || "").length;
}
function th(e, t) {
  const a = 10 ** t;
  return Math.round(e * a) / a;
}
const yi = ["PageUp", "PageDown"], bi = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], _i = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [wi, xi] = le(["SliderVertical", "SliderHorizontal"]), $i = /* @__PURE__ */ y({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Wn();
    return (s, r) => (v(), g(l(F), P({ "data-slider-impl": "" }, a, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : l(yi).concat(l(bi)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
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
  setup(e, { emit: t }) {
    const a = e, n = t, { max: o, min: s, dir: r, inverted: i } = me(a), { forwardRef: d, currentElement: u } = z(), c = A(), p = $(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function _(m) {
      const w = c.value || u.value.getBoundingClientRect(), h = [0, w.width], x = p.value ? [s.value, o.value] : [o.value, s.value], C = Ol(h, x);
      return c.value = w, C(m - w.left);
    }
    return xi({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, w) => (v(), g($i, {
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
        const x = p.value ? "from-left" : "from-right", C = l(_i)[x].includes(h.key);
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
  setup(e, { emit: t }) {
    const a = e, n = t, { max: o, min: s, inverted: r } = me(a), { forwardRef: i, currentElement: d } = z(), u = A(), c = $(() => !r.value);
    function p(_) {
      const m = u.value || d.value.getBoundingClientRect(), w = [0, m.height], h = c.value ? [o.value, s.value] : [s.value, o.value], x = Ol(w, h);
      return u.value = m, x(_ - m.top);
    }
    return xi({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (_, m) => (v(), g($i, {
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
        const h = c.value ? "from-bottom" : "from-top", x = l(_i)[h].includes(w.key);
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
}), oh = ["value", "name", "disabled", "step"], [Wn, lh] = le("SliderRoot"), sh = /* @__PURE__ */ y({
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
    const a = e, n = t, { min: o, max: s, step: r, minStepsBetweenThumbs: i, orientation: d, disabled: u, dir: c } = me(a), p = ot(c), { forwardRef: _, currentElement: m } = z(), w = Ha(m);
    Cl();
    const h = ve(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), x = A(0), C = A(h.value);
    function D(M) {
      const W = Jm(h.value, M);
      E(M, W);
    }
    function k(M) {
      E(M, x.value);
    }
    function O() {
      const M = C.value[x.value];
      h.value[x.value] !== M && n("valueCommit", gd(h.value));
    }
    function E(M, W, { commit: N } = { commit: !1 }) {
      var S;
      const V = eh(r.value), R = th(Math.round((M - o.value) / r.value) * r.value + o.value, V), q = kn(R, o.value, s.value), U = qm(h.value, q, W);
      if (Zm(U, i.value * r.value)) {
        x.value = U.indexOf(q);
        const Y = String(U) !== String(h.value);
        Y && N && n("valueCommit", U), Y && ((S = I.value[x.value]) == null || S.focus(), h.value = U);
      }
    }
    const I = A([]);
    return lh({
      modelValue: h,
      valueIndexToChangeRef: x,
      thumbElements: I,
      orientation: d,
      min: o,
      max: s,
      disabled: u
    }), (M, W) => (v(), L(X, null, [
      B(l(kl), null, {
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
            onPointerdown: W[0] || (W[0] = () => {
              l(u) || (C.value = l(h));
            }),
            onSlideStart: W[1] || (W[1] = (N) => !l(u) && D(N)),
            onSlideMove: W[2] || (W[2] = (N) => !l(u) && k(N)),
            onSlideEnd: W[3] || (W[3] = (N) => !l(u) && O()),
            onHomeKeyDown: W[4] || (W[4] = (N) => !l(u) && E(l(o), 0, { commit: !0 })),
            onEndKeyDown: W[5] || (W[5] = (N) => !l(u) && E(l(s), l(h).length - 1, { commit: !0 })),
            onStepKeyDown: W[6] || (W[6] = (N, S) => {
              if (!l(u)) {
                const V = l(yi).includes(N.key) || N.shiftKey && l(bi).includes(N.key) ? 10 : 1, R = x.value, q = l(h)[R], U = l(r) * V * S;
                E(q + U, R, { commit: !0 });
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
      l(w) ? (v(!0), L(X, { key: 0 }, fe(l(h), (N, S) => (v(), L("input", {
        key: S,
        value: N,
        type: "number",
        style: { display: "none" },
        name: M.name ? M.name + (l(h).length > 1 ? "[]" : "") : void 0,
        disabled: l(u),
        step: l(r)
      }, null, 8, oh))), 128)) : oe("", !0)
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
  setup(e) {
    const t = e, a = Wn(), n = wi(), { forwardRef: o, currentElement: s } = z(), r = $(() => {
      var m, w;
      return (w = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : w[t.index];
    }), i = $(() => r.value === void 0 ? 0 : gi(r.value, a.min.value ?? 0, a.max.value ?? 100)), d = $(() => {
      var m, w;
      return Ym(t.index, ((w = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : w.length) ?? 0);
    }), u = Rr(s), c = $(() => u[n.size].value), p = $(() => c.value ? Qm(c.value, i.value, n.direction) : 0), _ = pl();
    return ce(() => {
      a.thumbElements.value.push(s.value);
    }), At(() => {
      const m = a.thumbElements.value.findIndex((w) => w === s.value) ?? -1;
      a.thumbElements.value.splice(m, 1);
    }), (m, w) => (v(), g(l(Un), null, {
      default: f(() => [
        B(l(F), P(m.$attrs, {
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
  setup(e) {
    const t = e, { getItems: a } = Bl(), { forwardRef: n, currentElement: o } = z(), s = $(() => o.value ? a().findIndex((r) => r.ref === o.value) : -1);
    return (r, i) => (v(), g(rh, P({ ref: l(n) }, t, { index: s.value }), {
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
  setup(e) {
    const t = Wn();
    return z(), (a, n) => (v(), g(l(F), {
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
}), uh = /* @__PURE__ */ y({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Wn(), a = wi();
    z();
    const n = $(() => {
      var r, i;
      return (i = (r = t.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (d) => gi(d, t.min.value, t.max.value)
      );
    }), o = $(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = $(() => 100 - Math.max(...n.value));
    return (r, i) => (v(), g(l(F), {
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
function ch() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
ch();
const ph = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [fh, vh] = le("SwitchRoot"), mh = /* @__PURE__ */ y({
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
    return vh({
      checked: s,
      toggleCheck: r,
      disabled: o
    }), (p, _) => (v(), L(X, null, [
      B(l(F), P(p.$attrs, {
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
      l(u) ? (v(), L("input", {
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
      }, null, 8, ph)) : oe("", !0)
    ], 64));
  }
}), hh = /* @__PURE__ */ y({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = fh();
    return z(), (a, n) => {
      var o;
      return v(), g(l(F), {
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
}), [Al, gh] = le("TabsRoot"), yh = /* @__PURE__ */ y({
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
    const a = e, n = t, { orientation: o, dir: s } = me(a), r = ot(s);
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
    }), (u, c) => (v(), g(l(F), {
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
  setup(e) {
    const t = e, { loop: a } = me(t), { forwardRef: n, currentElement: o } = z(), s = Al();
    return s.tabsList = o, (r, i) => (v(), g(l(ni), {
      "as-child": "",
      orientation: l(s).orientation.value,
      dir: l(s).dir.value,
      loop: l(a)
    }, {
      default: f(() => [
        B(l(F), {
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
function Ci(e, t) {
  return `${e}-trigger-${t}`;
}
function ki(e, t) {
  return `${e}-content-${t}`;
}
const _h = /* @__PURE__ */ y({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a } = z(), n = Al(), o = $(() => Ci(n.baseId, t.value)), s = $(() => ki(n.baseId, t.value)), r = $(() => t.value === n.modelValue.value), i = A(r.value);
    return ce(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (d, u) => (v(), g(l(Te), {
      present: r.value,
      "force-mount": ""
    }, {
      default: f(({ present: c }) => [
        B(l(F), {
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
            d.forceMount || r.value ? b(d.$slots, "default", { key: 0 }) : oe("", !0)
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
  setup(e) {
    const t = e, { forwardRef: a } = z(), n = Al(), o = $(() => Ci(n.baseId, t.value)), s = $(() => ki(n.baseId, t.value)), r = $(() => t.value === n.modelValue.value);
    return (i, d) => (v(), g(l(ov), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: f(() => [
        B(l(F), {
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
}), [Hn, xh] = le("ToastProvider"), $h = /* @__PURE__ */ y({
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
}), Ch = "toast.swipeStart", kh = "toast.swipeMove", Bh = "toast.swipeCancel", Dh = "toast.swipeEnd", Oo = "toast.viewportPause", Ao = "toast.viewportResume";
function ln(e, t, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function ws(e, t, a = 0) {
  const n = Math.abs(e.x), o = Math.abs(e.y), s = n > o;
  return t === "left" || t === "right" ? s && n > a : !s && o > a;
}
function Sh(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Bi(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && t.push(a.textContent), Sh(a)) {
      const n = a.ariaHidden || a.hidden || a.style.display === "none", o = a.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const s = a.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Bi(a));
    }
  }), t;
}
const Ph = /* @__PURE__ */ y({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Hn(), a = Fc(1e3), n = A(!1);
    return Or(() => {
      n.value = !0;
    }), (o, s) => l(a) || n.value ? (v(), g(l(qa), { key: 0 }, {
      default: f(() => [
        J(Q(l(t).label.value) + " ", 1),
        b(o.$slots, "default")
      ]),
      _: 3
    })) : oe("", !0);
  }
}), [Eh, Oh] = le("ToastRoot"), Ah = /* @__PURE__ */ y({
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
    ), c = A(0), p = A(u.value), _ = A(0), m = A(u.value), w = Or(() => {
      const D = (/* @__PURE__ */ new Date()).getTime() - c.value;
      m.value = Math.max(p.value - D, 0);
    }, { fpsLimit: 60 });
    function h(D) {
      D <= 0 || D === Number.POSITIVE_INFINITY || nt && (window.clearTimeout(_.value), c.value = (/* @__PURE__ */ new Date()).getTime(), _.value = window.setTimeout(x, D));
    }
    function x() {
      var D, k;
      (D = s.value) != null && D.contains(xe()) && ((k = r.viewport.value) == null || k.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const C = $(() => s.value ? Bi(s.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const D = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(D);
    }
    return be((D) => {
      const k = r.viewport.value;
      if (k) {
        const O = () => {
          h(p.value), w.resume(), n("resume");
        }, E = () => {
          const I = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - I, window.clearTimeout(_.value), w.pause(), n("pause");
        };
        return k.addEventListener(Oo, E), k.addEventListener(Ao, O), () => {
          k.removeEventListener(Oo, E), k.removeEventListener(Ao, O);
        };
      }
    }), te(() => [a.open, u.value], () => {
      p.value = u.value, a.open && !r.isClosePausedRef.value && h(u.value);
    }, { immediate: !0 }), cl("Escape", (D) => {
      n("escapeKeyDown", D), D.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, x());
    }), ce(() => {
      r.onToastAdd();
    }), At(() => {
      r.onToastRemove();
    }), Oh({ onClose: x }), (D, k) => (v(), L(X, null, [
      C.value ? (v(), g(Ph, {
        key: 0,
        role: "alert",
        "aria-live": D.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: f(() => [
          J(Q(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : oe("", !0),
      l(r).viewport.value ? (v(), g(On, {
        key: 1,
        to: l(r).viewport.value
      }, [
        B(l(F), P({
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
            M ? (d.value = q, l(ln)(l(kh), (Y) => n("swipeMove", Y), U)) : l(ws)(q, l(r).swipeDirection.value, R) ? (d.value = q, l(ln)(l(Ch), (Y) => n("swipeStart", Y), U), O.target.setPointerCapture(O.pointerId)) : (Math.abs(E) > R || Math.abs(I) > R) && (i.value = null);
          }),
          onPointerup: k[2] || (k[2] = (O) => {
            const E = d.value, I = O.target;
            if (I.hasPointerCapture(O.pointerId) && I.releasePointerCapture(O.pointerId), d.value = null, i.value = null, E) {
              const M = O.currentTarget, W = { originalEvent: O, delta: E };
              l(ws)(E, l(r).swipeDirection.value, l(r).swipeThreshold.value) ? l(ln)(l(Dh), (N) => n("swipeEnd", N), W) : l(ln)(l(Bh), (N) => n("swipeCancel", N), W), M == null || M.addEventListener("click", (N) => N.preventDefault(), {
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
      ], 8, ["to"])) : oe("", !0)
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
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o } = z(), s = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    return (r, i) => (v(), g(l(Te), {
      present: r.forceMount || l(s)
    }, {
      default: f(() => [
        B(Ah, P({
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
}), Di = /* @__PURE__ */ y({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, a) => (v(), g(l(F), {
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
}), Si = /* @__PURE__ */ y({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Eh(), { forwardRef: n } = z();
    return (o, s) => (v(), g(Di, { "as-child": "" }, {
      default: f(() => [
        B(l(F), P(t, {
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
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = z();
    return (a, n) => a.altText ? (v(), g(Di, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: f(() => [
        B(Si, {
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
    }, 8, ["alt-text"])) : oe("", !0);
  }
}), xs = /* @__PURE__ */ y({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const a = t, n = Hn();
    return (o, s) => (v(), g(l(qa), {
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
  setup(e) {
    const t = e, { hotkey: a, label: n } = me(t), { forwardRef: o, currentElement: s } = z(), { createCollection: r } = fa(), i = r(s), d = Hn(), u = $(() => d.toastCount.value > 0), c = A(), p = A(), _ = $(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    cl(a.value, () => {
      s.value.focus();
    }), ce(() => {
      d.onViewportChange(s.value);
    }), be((w) => {
      const h = s.value;
      if (u.value && h) {
        const x = () => {
          if (!d.isClosePausedRef.value) {
            const E = new CustomEvent(Oo);
            h.dispatchEvent(E), d.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (d.isClosePausedRef.value) {
            const E = new CustomEvent(Ao);
            h.dispatchEvent(E), d.isClosePausedRef.value = !1;
          }
        }, D = (E) => {
          !h.contains(E.relatedTarget) && C();
        }, k = () => {
          h.contains(xe()) || C();
        }, O = (E) => {
          var I, M, W;
          const N = E.altKey || E.ctrlKey || E.metaKey;
          if (E.key === "Tab" && !N) {
            const S = xe(), V = E.shiftKey;
            if (E.target === h && V) {
              (I = c.value) == null || I.focus();
              return;
            }
            const R = m({ tabbingDirection: V ? "backwards" : "forwards" }), q = R.findIndex((U) => U === S);
            mn(R.slice(q + 1)) ? E.preventDefault() : V ? (M = c.value) == null || M.focus() : (W = p.value) == null || W.focus();
          }
        };
        h.addEventListener("focusin", x), h.addEventListener("focusout", D), h.addEventListener("pointermove", x), h.addEventListener("pointerleave", k), h.addEventListener("keydown", O), window.addEventListener("blur-sm", x), window.addEventListener("focus", C), w(() => {
          h.removeEventListener("focusin", x), h.removeEventListener("focusout", D), h.removeEventListener("pointermove", x), h.removeEventListener("pointerleave", k), h.removeEventListener("keydown", O), window.removeEventListener("blur-sm", x), window.removeEventListener("focus", C);
        });
      }
    });
    function m({ tabbingDirection: w }) {
      const h = i.value.map((x) => {
        const C = [x, ...yl(x)];
        return w === "forwards" ? C : C.reverse();
      });
      return (w === "forwards" ? h.reverse() : h).flat();
    }
    return (w, h) => (v(), g(l(Mp), {
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
        u.value ? (v(), g(xs, {
          key: 0,
          ref: (x) => {
            c.value = l(Le)(x);
          },
          onFocusFromOutsideViewport: h[0] || (h[0] = () => {
            const x = m({
              tabbingDirection: "forwards"
            });
            l(mn)(x);
          })
        }, null, 512)) : oe("", !0),
        B(l(F), P({
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
        u.value ? (v(), g(xs, {
          key: 1,
          ref: (x) => {
            p.value = l(Le)(x);
          },
          onFocusFromOutsideViewport: h[1] || (h[1] = () => {
            const x = m({
              tabbingDirection: "backwards"
            });
            l(mn)(x);
          })
        }, null, 512)) : oe("", !0)
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
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), g(l(F), H(j(t)), {
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
  setup(e) {
    const t = e;
    return z(), (a, n) => (v(), g(l(F), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pi = "tooltip.open", [Ml, Fh] = le("TooltipProvider"), Ei = /* @__PURE__ */ y({
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
    const d = A(!0), u = A(!1), { start: c, stop: p } = ul(() => {
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
}), [Kn, Lh] = le("TooltipRoot"), Nh = /* @__PURE__ */ y({
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
    const o = Ml(), s = $(() => a.disableHoverableContent ?? o.disableHoverableContent.value), r = $(() => a.disableClosingTrigger ?? o.disableClosingTrigger.value), i = $(() => a.disabled ?? o.disabled.value), d = $(() => a.delayDuration ?? o.delayDuration.value), u = $(() => a.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), c = ve(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    te(c, (k) => {
      o.onClose && (k ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Pi))) : o.onClose());
    });
    const p = A(!1), _ = A(), m = $(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: w, stop: h } = ul(() => {
      p.value = !0, c.value = !0;
    }, d, { immediate: !1 });
    function x() {
      h(), p.value = !1, c.value = !0;
    }
    function C() {
      h(), c.value = !1;
    }
    function D() {
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
        o.isOpenDelayed.value ? D() : x();
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
  setup(e) {
    const t = e, a = Kn(), n = Ml();
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
      var C, D;
      r.value || a.ignoreNonKeyboardFocus.value && !((D = (C = x.target).matches) != null && D.call(C, ":focus-visible")) || a.onOpen();
    }
    function w() {
      a.onClose();
    }
    function h() {
      a.disableClosingTrigger.value || a.onClose();
    }
    return (x, C) => (v(), g(l(zn), { "as-child": "" }, {
      default: f(() => [
        B(l(F), P({
          ref: l(o),
          "aria-describedby": l(a).open.value ? l(a).contentId : void 0,
          "data-state": l(a).stateAttribute.value,
          as: x.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, ud(d.value)), {
          default: f(() => [
            b(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Oi = /* @__PURE__ */ y({
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
    const a = e, n = t, o = Kn(), { forwardRef: s } = z(), r = Fs(), i = $(() => {
      var c;
      return (c = r.default) == null ? void 0 : c.call(r);
    }), d = $(() => {
      var c;
      if (a.ariaLabel)
        return a.ariaLabel;
      let p = "";
      function _(m) {
        typeof m.children == "string" && m.type !== Ns ? p += m.children : Array.isArray(m.children) && m.children.forEach((w) => _(w));
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
      }), ia(window, Pi, o.onClose);
    }), (c, p) => (v(), g(l(ma), {
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
                J(Q(d.value), 1)
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
  setup(e) {
    const t = re(e), { forwardRef: a, currentElement: n } = z(), { trigger: o, onClose: s } = Kn(), r = Ml(), { isPointerInTransit: i, onPointerExit: d } = Qc(o, n);
    return r.isPointerInTransitRef = i, d(() => {
      s();
    }), (u, c) => (v(), g(Oi, P({ ref: l(a) }, l(t)), {
      default: f(() => [
        b(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wh = /* @__PURE__ */ y({
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
    const a = e, n = t, o = Kn(), s = ae(a, n), { forwardRef: r } = z();
    return (i, d) => (v(), g(l(Te), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        (v(), g(Ae(l(o).disableHoverableContent.value ? Oi : Uh), P({ ref: l(r) }, l(s)), {
          default: f(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Hh = /* @__PURE__ */ y({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(ja), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), M0 = /* @__PURE__ */ y({
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
    const o = ae(e, t);
    return (s, r) => (v(), g(l(xp), H(j(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tl = "-", Kh = (e) => {
  const t = Gh(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (r) => {
      const i = r.split(Tl);
      return i[0] === "" && i.length !== 1 && i.shift(), Ai(i, t) || jh(r);
    },
    getConflictingClassGroupIds: (r, i) => {
      const d = a[r] || [];
      return i && n[r] ? [...d, ...n[r]] : d;
    }
  };
}, Ai = (e, t) => {
  var r;
  if (e.length === 0)
    return t.classGroupId;
  const a = e[0], n = t.nextPart.get(a), o = n ? Ai(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Tl);
  return (r = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : r.classGroupId;
}, $s = /^\[(.+)\]$/, jh = (e) => {
  if ($s.test(e)) {
    const t = $s.exec(e)[1], a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Gh = (e) => {
  const {
    theme: t,
    prefix: a
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Yh(Object.entries(e.classGroups), a).forEach(([s, r]) => {
    Mo(r, n, s, t);
  }), n;
}, Mo = (e, t, a, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Cs(t, o);
      s.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (qh(o)) {
        Mo(o(n), t, a, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([s, r]) => {
      Mo(r, Cs(t, s), a, n);
    });
  });
}, Cs = (e, t) => {
  let a = e;
  return t.split(Tl).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, qh = (e) => e.isThemeGetter, Yh = (e, t) => t ? e.map(([a, n]) => {
  const o = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([r, i]) => [t + r, i])) : s);
  return [a, o];
}) : e, Jh = (e) => {
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
}, Mi = "!", Qh = (e) => {
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
    const _ = d.length === 0 ? i : i.substring(c), m = _.startsWith(Mi), w = m ? _.substring(1) : _, h = p && p > c ? p - c : void 0;
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
}, Xh = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let a = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...a.sort(), n), a = []) : a.push(n);
  }), t.push(...a.sort()), t;
}, Zh = (e) => ({
  cache: Jh(e.cacheSize),
  parseClassName: Qh(e),
  ...Kh(e)
}), eg = /\s+/, tg = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, s = [], r = e.trim().split(eg);
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
    const x = Xh(c).join(":"), C = p ? x + Mi : x, D = C + h;
    if (s.includes(D))
      continue;
    s.push(D);
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
  let e = 0, t, a, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (a = Ti(t)) && (n && (n += " "), n += a);
  return n;
}
const Ti = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ti(e[n])) && (a && (a += " "), a += t);
  return a;
};
function ng(e, ...t) {
  let a, n, o, s = r;
  function r(d) {
    const u = t.reduce((c, p) => p(c), e());
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
const he = (e) => {
  const t = (a) => a[e] || [];
  return t.isThemeGetter = !0, t;
}, Ii = /^\[(?:([a-z-]+):)?(.+)\]$/i, og = /^\d+\/\d+$/, lg = /* @__PURE__ */ new Set(["px", "full", "screen"]), sg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, rg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ig = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, dg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ug = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, it = (e) => aa(e) || lg.has(e) || og.test(e), xt = (e) => xa(e, "length", yg), aa = (e) => !!e && !Number.isNaN(Number(e)), uo = (e) => xa(e, "number", aa), Da = (e) => !!e && Number.isInteger(Number(e)), cg = (e) => e.endsWith("%") && aa(e.slice(0, -1)), ne = (e) => Ii.test(e), $t = (e) => sg.test(e), pg = /* @__PURE__ */ new Set(["length", "size", "percentage"]), fg = (e) => xa(e, pg, Vi), vg = (e) => xa(e, "position", Vi), mg = /* @__PURE__ */ new Set(["image", "url"]), hg = (e) => xa(e, mg, _g), gg = (e) => xa(e, "", bg), Sa = () => !0, xa = (e, t, a) => {
  const n = Ii.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : a(n[2]) : !1;
}, yg = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  rg.test(e) && !ig.test(e)
), Vi = () => !1, bg = (e) => dg.test(e), _g = (e) => ug.test(e), wg = () => {
  const e = he("colors"), t = he("spacing"), a = he("blur-sm"), n = he("brightness"), o = he("borderColor"), s = he("borderRadius"), r = he("borderSpacing"), i = he("borderWidth"), d = he("contrast"), u = he("grayscale"), c = he("hueRotate"), p = he("invert"), _ = he("gap"), m = he("gradientColorStops"), w = he("gradientColorStopPositions"), h = he("inset"), x = he("margin"), C = he("opacity"), D = he("padding"), k = he("saturate"), O = he("scale"), E = he("sepia"), I = he("skew"), M = he("space"), W = he("translate"), N = () => ["auto", "contain", "none"], S = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", ne, t], R = () => [ne, t], q = () => ["", it, xt], U = () => ["auto", aa, ne], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ee = () => ["solid", "dashed", "dotted", "double", "none"], ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ye = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", ne], Z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], de = () => [aa, ne];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Sa],
      spacing: [it, xt],
      blur: ["none", "", $t, ne],
      brightness: de(),
      borderColor: [e],
      borderRadius: ["none", "", "full", $t, ne],
      borderSpacing: R(),
      borderWidth: q(),
      contrast: de(),
      grayscale: G(),
      hueRotate: de(),
      invert: G(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [cg, xt],
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
        aspect: ["auto", "square", "video", ne]
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
        object: [...Y(), ne]
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
        z: ["auto", Da, ne]
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
        flex: ["1", "auto", "initial", "none", ne]
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
        order: ["first", "last", "none", Da, ne]
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
          span: ["full", Da, ne]
        }, ne]
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
          span: [Da, ne]
        }, ne]
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
        "auto-cols": ["auto", "min", "max", "fr", ne]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ne]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ne, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ne, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ne, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [$t]
        }, $t]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ne, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ne, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ne, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ne, t, "auto", "min", "max", "fit"]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", uo]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ne]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", aa, uo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", it, ne]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ne]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ne]
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
        decoration: [...ee(), "wavy"]
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
        "underline-offset": ["auto", it, ne]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ne]
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
        content: ["none", ne]
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
        bg: [...Y(), vg]
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
        border: [...ee(), "hidden"]
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
        divide: ee()
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
        outline: ["", ...ee()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [it, ne]
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
        shadow: ["", "inner", "none", $t, gg]
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
      "drop-shadow-sm": [{
        "drop-shadow-sm": ["", "none", $t, ne]
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
      "backdrop-blur-sm": [{
        "backdrop-blur-sm": [a]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow-sm", "transform", ne]
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
        ease: ["linear", "in", "out", "in-out", ne]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", ne]
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
        rotate: [Da, ne]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ne]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ne]
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
        "will-change": ["auto", "scroll", "contents", "transform", ne]
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
        stroke: [it, xt, uo]
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
}, xg = /* @__PURE__ */ ng(wg);
function T(...e) {
  return xg(e);
}
const T0 = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(kp), P(a.value, { class: "text-accordion-text data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all" }), {
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
}), I0 = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(Cp), P(l(n), {
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
const $g = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
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
const Cg = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: s, class: r, ...i }, { slots: d }) => Ze(
  "svg",
  {
    ...sn,
    width: e || sn.width,
    height: e || sn.height,
    stroke: n || sn.stroke,
    "stroke-width": a ? Number(t) * 24 / Number(e) : t,
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
const $e = (e, t) => (a, { slots: n }) => Ze(
  Cg,
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
const jn = $e("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Il = $e("ChevronDownIcon", [
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
const Vl = $e("ChevronRightIcon", [
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
const Ri = $e("EllipsisIcon", [
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
const Gn = $e("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), V0 = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Bp), { class: "flex" }, {
      default: f(() => [
        B(l(Dp), P(a.value, {
          class: l(T)(
            "text-heading flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: f(() => [
            b(n.$slots, "default"),
            b(n.$slots, "icon", {}, () => [
              B(l(Il), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
});
function Fi(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (a = Fi(e[t])) && (n && (n += " "), n += a);
  } else for (a in e) e[a] && (n && (n += " "), n += a);
  return n;
}
function Lg() {
  for (var e, t, a = 0, n = "", o = arguments.length; a < o; a++) (e = arguments[a]) && (t = Fi(e)) && (n && (n += " "), n += t);
  return n;
}
const ks = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Bs = Lg, $a = (e, t) => (a) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Bs(e, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: s } = t, r = Object.keys(o).map((u) => {
    const c = a == null ? void 0 : a[u], p = s == null ? void 0 : s[u];
    if (c === null) return null;
    const _ = ks(c) || ks(p);
    return o[u][_];
  }), i = a && Object.entries(a).reduce((u, c) => {
    let [p, _] = c;
    return _ === void 0 || (u[p] = _), u;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, c) => {
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
  return Bs(e, r, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, R0 = /* @__PURE__ */ y({
  __name: "Badge",
  props: {
    variant: {},
    type: {},
    size: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
      class: K(l(T)(l(Ng)({ variant: a.variant, type: a.type, size: a.size }), t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ng = $a(
  "inline-flex items-center rounded-full border h-fit font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default",
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
      { type: "outline-solid", variant: "primary", class: "border-primary bg-primary/10 text-primary" },
      {
        type: "outline-solid",
        variant: "secondary",
        class: "border-secondary bg-secondary/10 text-secondary"
      },
      {
        type: "outline-solid",
        variant: "destructive",
        class: "border-destructive bg-destructive/20 text-destructive"
      },
      { type: "outline-solid", variant: "warning", class: "border-warning bg-warning/20 text-warning" }
    ],
    defaultVariants: {
      variant: "primary",
      type: "fill",
      size: "md"
    }
  }
), F0 = /* @__PURE__ */ y({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("nav", {
      "aria-label": "breadcrumb",
      class: K(t.class)
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), L0 = /* @__PURE__ */ y({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: K(l(T)("flex h-9 w-9 items-center justify-center", t.class))
    }, [
      b(a.$slots, "default", {}, () => [
        B(l(Ri), { class: "h-4 w-4" })
      ]),
      n[0] || (n[0] = ie("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), N0 = /* @__PURE__ */ y({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("li", {
      class: K(l(T)("inline-flex items-center gap-1.5", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), z0 = /* @__PURE__ */ y({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), {
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
}), U0 = /* @__PURE__ */ y({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("ol", {
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
}), W0 = /* @__PURE__ */ y({
  __name: "BreadcrumbPage",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("span", {
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: K(l(T)("text-foreground font-normal", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), H0 = /* @__PURE__ */ y({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: K(l(T)("[&>svg]:h-3.5 [&>svg]:w-3.5", t.class))
    }, [
      b(a.$slots, "default", {}, () => [
        B(l(Vl))
      ])
    ], 2));
  }
}), st = /* @__PURE__ */ y({
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
    return (a, n) => (v(), g(l(F), {
      as: a.as,
      "as-child": a.asChild,
      class: K(l(T)(l(Gt)({ variant: a.variant, size: a.size }), t.class))
    }, {
      default: f(() => [
        b(a.$slots, "default"),
        a.loading ? (v(), g(l(Ag), {
          key: 0,
          class: K(l(zg)({ size: a.size }))
        }, null, 8, ["class"])) : oe("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), zg = $a("animate-spin", {
  variants: {
    size: {
      // requires ! due to parent sizing from the Button
      default: "size-4!",
      xs: "size-3!",
      sm: "size-3!",
      lg: "size-4!",
      xl: "size-5!",
      xxl: "size-6!",
      icon: "size-5!"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), Gt = $a(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-slate-800 text-slate-50 hover:bg-slate-800/80",
        primary: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/70",
        outline: "border border-input text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground hover:border-transparent",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/50",
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
), K0 = /* @__PURE__ */ y({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
      class: K(
        l(T)("border-card-border bg-card text-card-foreground rounded-lg border shadow-xs", t.class)
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), j0 = /* @__PURE__ */ y({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
      class: K(l(T)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), G0 = /* @__PURE__ */ y({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("h3", {
      class: K(l(T)("text-2xl font-semibold leading-none tracking-tight", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), q0 = /* @__PURE__ */ y({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("p", {
      class: K(l(T)("text-muted-foreground text-sm", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Y0 = /* @__PURE__ */ y({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
      class: K(l(T)("p-6 pt-0", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), J0 = /* @__PURE__ */ y({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
      class: K(l(T)("flex items-center p-6 pt-0", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ug = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, Q0 = /* @__PURE__ */ y({
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
    }), s = ae(o, n);
    return (r, i) => (v(), g(l(Yr), P({
      class: l(T)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: u }) => [
        B(l(Ki), null, {
          default: f(() => [
            B(l(Hg)),
            B(l(ji)),
            B(l(Wg))
          ]),
          _: 1
        }),
        ie("div", Ug, [
          (v(!0), L(X, null, fe(d, (c) => (v(), g(l(zi), {
            key: c.value.toString()
          }, {
            default: f(() => [
              B(l(Wi), null, {
                default: f(() => [
                  B(l(Sn), null, {
                    default: f(() => [
                      (v(!0), L(X, null, fe(u, (p) => (v(), g(l(Hi), { key: p }, {
                        default: f(() => [
                          J(Q(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              B(l(Ui), null, {
                default: f(() => [
                  (v(!0), L(X, null, fe(c.rows, (p, _) => (v(), g(l(Sn), {
                    key: `weekDate-${_}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), L(X, null, fe(p, (m) => (v(), g(l(Li), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          B(l(Ni), {
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
}), Li = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(cf), P({
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
}), Ni = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(yf), P({
      class: l(T)(
        l(Gt)({ variant: "ghost" }),
        "h-9 w-9 p-0 font-normal",
        "[&[data-today]:not([data-selected])]:bg-slate-100 [&[data-today]:not([data-selected])]:text-slate-900 dark:[&[data-today]:not([data-selected])]:bg-slate-800 dark:[&[data-today]:not([data-selected])]:text-slate-50",
        // Selected
        "data-selected:bg-slate-900 data-selected:text-slate-50 data-selected:opacity-100 data-selected:hover:bg-slate-900 data-selected:hover:text-slate-50 data-selected:focus:bg-slate-900 data-selected:focus:text-slate-50 dark:data-selected:bg-slate-50 dark:data-selected:text-slate-900 dark:data-selected:hover:bg-slate-50 dark:data-selected:hover:text-slate-900 dark:data-selected:focus:bg-slate-50 dark:data-selected:focus:text-slate-900",
        // Disabled
        "data-disabled:text-slate-500 data-disabled:opacity-50 dark:data-disabled:text-slate-400",
        // Unavailable
        "data-unavailable:text-slate-50 data-unavailable:line-through dark:data-unavailable:text-slate-50",
        // Outside months
        "data-outside-view:text-slate-500 data-outside-view:opacity-50 dark:data-outside-view:text-slate-400 [&[data-outside-view][data-selected]]:bg-slate-100/50 [&[data-outside-view][data-selected]]:text-slate-500 [&[data-outside-view][data-selected]]:opacity-30 dark:[&[data-outside-view][data-selected]]:bg-slate-800/50 dark:[&[data-outside-view][data-selected]]:text-slate-400",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zi = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(uf), P({
      class: l(T)("w-full border-collapse space-y-1", t.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ui = /* @__PURE__ */ y({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(hf), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wi = /* @__PURE__ */ y({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(mf), H(j(t)), {
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
    return (o, s) => (v(), g(l(gf), P({
      class: l(T)("flex", t.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hi = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(pf), P({
      class: l(T)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ki = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(rf), P({
      class: l(T)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ji = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(df), P({
      class: l(T)("text-text text-sm font-medium", t.class)
    }, l(n)), {
      default: f(({ headingValue: r }) => [
        b(o.$slots, "default", { headingValue: r }, () => [
          J(Q(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wg = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(ff), P({
      class: l(T)(
        l(Gt)({ variant: "outline-solid" }),
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
}), Hg = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(vf), P({
      class: l(T)(
        l(Gt)({ variant: "outline-solid" }),
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
function Kg(e) {
  return No() ? (zo(e), !0) : !1;
}
const co = /* @__PURE__ */ new WeakMap(), jg = (...e) => {
  var t;
  const a = e[0], n = (t = qe()) == null ? void 0 : t.proxy;
  if (n == null && !Ks())
    throw new Error("injectLocal must be called in setup");
  return n && co.has(n) && a in co.get(n) ? co.get(n)[a] : Ho(...e);
}, Gg = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const qg = (e) => typeof e < "u", Yg = Object.prototype.toString, Jg = (e) => Yg.call(e) === "[object Object]", Qg = () => {
};
function Gi(...e) {
  if (e.length !== 1)
    return Vs(...e);
  const t = e[0];
  return typeof t == "function" ? La(Us(() => ({ get: t, set: Qg }))) : A(t);
}
function Xg(e, t) {
  function a(...n) {
    return new Promise((o, s) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(s);
    });
  }
  return a;
}
const qi = (e) => e();
function Zg(e = qi, t = {}) {
  const {
    initialState: a = "active"
  } = t, n = Gi(a === "active");
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
function Ds(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function po(e) {
  return Array.isArray(e) ? e : [e];
}
function ey(e) {
  return qe();
}
function ty(e, t, a = {}) {
  const {
    eventFilter: n = qi,
    ...o
  } = a;
  return te(
    e,
    Xg(
      n,
      t
    ),
    o
  );
}
function ay(e, t, a = {}) {
  const {
    eventFilter: n,
    initialState: o = "active",
    ...s
  } = a, { eventFilter: r, pause: i, resume: d, isActive: u } = Zg(n, { initialState: o });
  return { stop: ty(
    e,
    t,
    {
      ...s,
      eventFilter: r
    }
  ), pause: i, resume: d, isActive: u };
}
function Yi(e, t = !0, a) {
  ey() ? ce(e, a) : t ? e() : se(e);
}
function ny(e, t, a) {
  return te(
    e,
    t,
    {
      ...a,
      immediate: !0
    }
  );
}
const Ra = Gg ? window : void 0;
function Ji(e) {
  var t;
  const a = St(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
function Pn(...e) {
  const t = [], a = () => {
    t.forEach((i) => i()), t.length = 0;
  }, n = (i, d, u, c) => (i.addEventListener(d, u, c), () => i.removeEventListener(d, u, c)), o = $(() => {
    const i = po(St(e[0])).filter((d) => d != null);
    return i.every((d) => typeof d != "string") ? i : void 0;
  }), s = ny(
    () => {
      var i, d;
      return [
        (d = (i = o.value) == null ? void 0 : i.map((u) => Ji(u))) != null ? d : [Ra].filter((u) => u != null),
        po(St(o.value ? e[1] : e[0])),
        po(l(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        St(o.value ? e[3] : e[2])
      ];
    },
    ([i, d, u, c]) => {
      if (a(), !(i != null && i.length) || !(d != null && d.length) || !(u != null && u.length))
        return;
      const p = Jg(c) ? { ...c } : c;
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
  return Kg(a), r;
}
function oy() {
  const e = Ft(!1), t = qe();
  return t && ce(() => {
    e.value = !0;
  }, t), e;
}
function ly(e) {
  const t = oy();
  return $(() => (t.value, !!e()));
}
const sy = Symbol("vueuse-ssr-width");
function ry() {
  const e = Ks() ? jg(sy, null) : null;
  return typeof e == "number" ? e : void 0;
}
function Qi(e, t = {}) {
  const { window: a = Ra, ssrWidth: n = ry() } = t, o = ly(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), s = Ft(typeof n == "number"), r = Ft(), i = Ft(!1), d = (u) => {
    i.value = u.matches;
  };
  return be(() => {
    if (s.value) {
      s.value = !o.value;
      const u = St(e).split(",");
      i.value = u.some((c) => {
        const p = c.includes("not all"), _ = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), m = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let w = !!(_ || m);
        return _ && w && (w = n >= Ds(_[1])), m && w && (w = n <= Ds(m[1])), p ? !w : w;
      });
      return;
    }
    o.value && (r.value = a.matchMedia(St(e)), i.value = r.value.matches);
  }), Pn(r, "change", d, { passive: !0 }), $(() => i.value);
}
function iy(e) {
  return JSON.parse(JSON.stringify(e));
}
const rn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, dn = "__vueuse_ssr_handlers__", dy = /* @__PURE__ */ uy();
function uy() {
  return dn in rn || (rn[dn] = rn[dn] || {}), rn[dn];
}
function Xi(e, t) {
  return dy[e] || t;
}
function cy(e) {
  return Qi("(prefers-color-scheme: dark)", e);
}
function py(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const fy = {
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
}, Ss = "vueuse-storage";
function vy(e, t, a, n = {}) {
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
  } = n, h = (c ? Ft : A)(typeof t == "function" ? t() : t), x = $(() => St(e));
  if (!a)
    try {
      a = Xi("getDefaultStorage", () => {
        var U;
        return (U = Ra) == null ? void 0 : U.localStorage;
      })();
    } catch (U) {
      m(U);
    }
  if (!a)
    return h;
  const C = St(t), D = py(C), k = (o = n.serializer) != null ? o : fy[D], { pause: O, resume: E } = ay(
    h,
    () => S(h.value),
    { flush: s, deep: r, eventFilter: _ }
  );
  te(x, () => R(), { flush: s });
  let I = !1;
  const M = (U) => {
    w && !I || R(U);
  }, W = (U) => {
    w && !I || q(U);
  };
  p && i && (a instanceof Storage ? Pn(p, "storage", M, { passive: !0 }) : Pn(p, Ss, W)), w ? Yi(() => {
    I = !0, R();
  }) : R();
  function N(U, Y) {
    if (p) {
      const ee = {
        key: x.value,
        oldValue: U,
        newValue: Y,
        storageArea: a
      };
      p.dispatchEvent(a instanceof Storage ? new StorageEvent("storage", ee) : new CustomEvent(Ss, {
        detail: ee
      }));
    }
  }
  function S(U) {
    try {
      const Y = a.getItem(x.value);
      if (U == null)
        N(Y, null), a.removeItem(x.value);
      else {
        const ee = k.write(U);
        Y !== ee && (a.setItem(x.value, ee), N(Y, ee));
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
      const ee = k.read(Y);
      return typeof u == "function" ? u(ee, C) : D === "object" && !Array.isArray(ee) ? { ...C, ...ee } : ee;
    } else return typeof Y != "string" ? Y : k.read(Y);
  }
  function R(U) {
    if (!(U && U.storageArea !== a)) {
      if (U && U.key == null) {
        h.value = C;
        return;
      }
      if (!(U && U.key !== x.value)) {
        O();
        try {
          (U == null ? void 0 : U.newValue) !== k.write(h.value) && (h.value = V(U));
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
  return h;
}
const my = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function hy(e = {}) {
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
  }, _ = cy({ window: o }), m = $(() => _.value ? "dark" : "light"), w = d || (r == null ? Gi(n) : vy(r, n, s, { window: o, listenToStorageChanges: i })), h = $(() => w.value === "auto" ? m.value : w.value), x = Xi(
    "updateHTMLAttrs",
    (O, E, I) => {
      const M = typeof O == "string" ? o == null ? void 0 : o.document.querySelector(O) : Ji(O);
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
      c && (V = o.document.createElement("style"), V.appendChild(document.createTextNode(my)), o.document.head.appendChild(V));
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
  te(h, D, { flush: "post", immediate: !0 }), Yi(() => D(h.value));
  const k = $({
    get() {
      return u ? w.value : h.value;
    },
    set(O) {
      w.value = O;
    }
  });
  return Object.assign(k, { store: w, system: m, state: h });
}
function gy(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: a = ""
  } = e, n = hy({
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
function Rl(e, t, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: _
  } = n, m = qe(), w = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let h = u;
  t || (t = "modelValue"), h = h || `update:${t.toString()}`;
  const x = (k) => i ? typeof i == "function" ? i(k) : iy(k) : k, C = () => qg(e[t]) ? x(e[t]) : p, D = (k) => {
    _ ? _(k) && w(h, k) : w(h, k);
  };
  if (d) {
    const k = C(), O = A(k);
    let E = !1;
    return te(
      () => e[t],
      (I) => {
        E || (E = !0, O.value = x(I), se(() => E = !1));
      }
    ), te(
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
const To = /* @__PURE__ */ y({
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
    const o = ae(e, t);
    return (s, r) => (v(), g(l(_m), H(j(l(o))), {
      default: f(({ open: i }) => [
        b(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Io = /* @__PURE__ */ y({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(Hm), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vo = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l($m), P(l(n), {
      class: l(T)(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-start text-sm transition focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        t.class
      )
    }), {
      default: f(() => [
        b(o.$slots, "default"),
        B(l(Km), { "as-child": "" }, {
          default: f(() => [
            B(l(Il), {
              class: K(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ro = /* @__PURE__ */ y({
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
    }), s = ae(o, n);
    return (r, i) => (v(), g(l(Cm), null, {
      default: f(() => [
        B(l(Am), P({ ...l(s), ...r.$attrs }, {
          class: l(T)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            r.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: f(() => [
            B(l(by)),
            B(l(zm), {
              class: K(
                l(T)(
                  "p-1",
                  r.position === "popper" && "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)"
                )
              )
            }, {
              default: f(() => [
                b(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            B(l(_y))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), X0 = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Lm), P({
      class: l(T)("w-full p-1", t.class)
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yy = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Fo = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(Im), P(l(n), {
      class: l(T)(
        "focus:text-accent-foreground focus:bg-accent relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        t.class
      )
    }), {
      default: f(() => [
        ie("span", yy, [
          B(l(Vm), null, {
            default: f(() => [
              B(l(jn), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        B(l(mi), null, {
          default: f(() => [
            b(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z0 = /* @__PURE__ */ y({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(mi), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), e_ = /* @__PURE__ */ y({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(Nm), {
      class: K(l(T)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), t_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Mm), P(a.value, {
      class: l(T)("bg-muted -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), by = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(Um), P(l(n), {
      class: l(T)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          B(l(Dg), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _y = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(Wm), P(l(n), {
      class: l(T)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          B(l(Il), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wy = { class: "flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, xy = /* @__PURE__ */ y({
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
    }), s = Rl(a, "modelValue", n, {
      passive: !0,
      defaultValue: hn(mt())
    }), r = ae(o, n), i = Ir("en");
    return (d, u) => (v(), g(l(Yr), P({
      placeholder: l(s),
      "onUpdate:placeholder": u[2] || (u[2] = (c) => ca(s) ? s.value = c : null)
    }, l(r), {
      class: l(T)("rounded-md border p-3", a.class)
    }), {
      default: f(({ date: c, grid: p, weekDays: _ }) => [
        B(l(Ki), null, {
          default: f(() => [
            B(l(ji), { class: "flex w-full items-center justify-between gap-2" }, {
              default: f(() => [
                B(l(To), {
                  "default-value": l(s).month.toString(),
                  "onUpdate:modelValue": u[0] || (u[0] = (m) => {
                    var w;
                    !m || !l(s) || Number(m) !== ((w = l(s)) == null ? void 0 : w.month) && (s.value = l(s).set({
                      month: Number(m)
                    }));
                  })
                }, {
                  default: f(() => [
                    B(l(Vo), {
                      "aria-label": "Select month",
                      class: "w-[60%]"
                    }, {
                      default: f(() => [
                        B(l(Io), { placeholder: "Select month" })
                      ]),
                      _: 1
                    }),
                    B(l(Ro), { class: "max-h-[200px]" }, {
                      default: f(() => [
                        (v(!0), L(X, null, fe(l(Tu)({ dateObj: c }), (m) => (v(), g(l(Fo), {
                          key: m.toString(),
                          value: m.month.toString()
                        }, {
                          default: f(() => [
                            J(Q(l(i).custom(l(Fe)(m), { month: "long" })), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]))), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["default-value"]),
                B(l(To), {
                  "default-value": l(s).year.toString(),
                  "onUpdate:modelValue": u[1] || (u[1] = (m) => {
                    var w;
                    !m || !l(s) || Number(m) !== ((w = l(s)) == null ? void 0 : w.year) && (s.value = l(s).set({
                      year: Number(m)
                    }));
                  })
                }, {
                  default: f(() => [
                    B(l(Vo), {
                      "aria-label": "Select year",
                      class: "w-[40%]"
                    }, {
                      default: f(() => [
                        B(l(Io), { placeholder: "Select year" })
                      ]),
                      _: 1
                    }),
                    B(l(Ro), { class: "max-h-[200px]" }, {
                      default: f(() => [
                        (v(!0), L(X, null, fe(l(Mu)({ dateObj: c, startIndex: -100, endIndex: 10 }), (m) => (v(), g(l(Fo), {
                          key: m.toString(),
                          value: m.year.toString()
                        }, {
                          default: f(() => [
                            J(Q(m.year), 1)
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
        ie("div", wy, [
          (v(!0), L(X, null, fe(p, (m) => (v(), g(l(zi), {
            key: m.value.toString()
          }, {
            default: f(() => [
              B(l(Wi), null, {
                default: f(() => [
                  B(l(Sn), null, {
                    default: f(() => [
                      (v(!0), L(X, null, fe(_, (w) => (v(), g(l(Hi), { key: w }, {
                        default: f(() => [
                          J(Q(w), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              B(l(Ui), { class: "grid" }, {
                default: f(() => [
                  (v(!0), L(X, null, fe(m.rows, (w, h) => (v(), g(l(Sn), {
                    key: `weekDate-${h}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), L(X, null, fe(w, (x) => (v(), g(l(Li), {
                        key: x.toString(),
                        date: x
                      }, {
                        default: f(() => [
                          B(l(Ni), {
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
}), Zi = /* @__PURE__ */ y({
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
    }), s = ae(o, n);
    return (r, i) => (v(), g(l(Af), P(l(s), {
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
}), ed = /* @__PURE__ */ y({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (s, r) => (v(), g(l(zr), H(j(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), a_ = /* @__PURE__ */ y({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(Ga), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $y = /* @__PURE__ */ y({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(Ur), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cy = /* @__PURE__ */ y({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
      class: K(l(T)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), ky = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(jr), P(l(n), {
      class: l(T)("text-heading text-2xl font-semibold leading-none tracking-tight", t.class)
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), By = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(Gr), P(l(n), {
      class: l(T)("text-sub-text text-sm", t.class)
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), td = /* @__PURE__ */ y({
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
    }), s = ae(o, a);
    return (r, i) => (v(), g(l(gl), null, {
      default: f(() => [
        B(l(xl), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        B(l(wl), P(l(s), {
          class: l(T)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
            n.class
          )
        }), {
          default: f(() => [
            b(r.$slots, "default"),
            B(l(Ga), {
              onClick: i[0] || (i[0] = (d) => a("close", d)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
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
}), n_ = /* @__PURE__ */ y({
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
    }), s = ae(o, n);
    return (r, i) => (v(), g(l(gl), null, {
      default: f(() => [
        B(l(xl), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: f(() => [
            B(l(wl), P({
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
}), Dy = /* @__PURE__ */ y({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
      class: K(
        l(T)("text-text flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class)
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), o_ = /* @__PURE__ */ y({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (s, r) => (v(), g(l(ed), H(j(l(o))), {
      default: f(() => [
        B(l(td), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: f(() => [
            B(Zi, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), Sy = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Nf), P(a.value, {
      class: l(T)("py-6 text-center text-sm", t.class)
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Py = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(If), P(a.value, {
      class: l(T)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: f(() => [
        n.heading ? (v(), g(l(Vf), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: f(() => [
            J(Q(n.heading), 1)
          ]),
          _: 1
        })) : oe("", !0),
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ey = { class: "flex items-center border-b px-3" }, Oy = /* @__PURE__ */ y({
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
    return (o, s) => (v(), L("div", Ey, [
      B(l(Rg), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      B(l(Mf), P({ ...l(n), ...o.$attrs }, {
        "auto-focus": "",
        class: l(T)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Ay = /* @__PURE__ */ y({
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
    }), s = ae(o, n);
    return (r, i) => (v(), g(l(Hf), P(l(s), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-hidden data-disabled:pointer-events-none data-highlighted:bg-slate-100 data-highlighted:text-slate-900 data-disabled:opacity-50 dark:data-highlighted:bg-slate-800 dark:data-highlighted:text-slate-50" }), {
      default: f(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), My = { role: "presentation" }, Ty = /* @__PURE__ */ y({
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
    }), s = ae(o, n);
    return (r, i) => (v(), g(l(Lf), P(l(s), {
      class: l(T)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: f(() => [
        ie("div", My, [
          b(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), l_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Kf), P(a.value, {
      class: l(T)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s_ = /* @__PURE__ */ y({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("span", {
      class: K(l(T)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Iy = /* @__PURE__ */ y({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (s, r) => (v(), g(l(Cv), H(j(l(o))), {
      default: f(({ open: i }) => [
        b(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Vy = /* @__PURE__ */ y({
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
    return (a, n) => (v(), L("div", {
      class: K(
        l(T)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          t.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ry = /* @__PURE__ */ y({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = re(e);
    return (n, o) => (v(), g(l(kv), P({ class: "outline-hidden" }, l(a)), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fy = /* @__PURE__ */ y({
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
    }), s = ae(o, n);
    return (r, i) => (v(), g(l(Bv), null, {
      default: f(() => [
        B(l(Dv), P(l(s), {
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
}), r_ = /* @__PURE__ */ y({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(Sv), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), i_ = /* @__PURE__ */ y({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (s, r) => (v(), g(l(Av), H(j(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), d_ = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(di), P(l(n), {
      class: l(T)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
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
}), Ly = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(Vy, {
      class: K(t.class)
    }, {
      default: f(() => [
        B(l(di), P(l(n), {
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
}), Ny = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, u_ = /* @__PURE__ */ y({
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
    }), s = ae(o, n);
    return (r, i) => (v(), g(l(Ev), P(l(s), {
      class: l(T)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        ie("span", Ny, [
          B(l(ui), null, {
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
}), zy = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, c_ = /* @__PURE__ */ y({
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
    }), s = ae(o, n);
    return (r, i) => (v(), g(l(Mv), P(l(s), {
      class: l(T)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        ie("span", zy, [
          B(l(ui), null, {
            default: f(() => [
              B(l(Og), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p_ = /* @__PURE__ */ y({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("span", {
      class: K(l(T)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), f_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Pv), P(a.value, {
      class: l(T)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), v_ = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(Ov), P(l(n), {
      class: l(T)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", t.class)
    }), {
      default: f(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), m_ = /* @__PURE__ */ y({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (s, r) => (v(), g(l(Tv), H(j(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), h_ = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(Vv), P(l(n), {
      class: l(T)(
        "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden",
        t.class
      )
    }), {
      default: f(() => [
        b(o.$slots, "default"),
        B(l(Vl), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), g_ = /* @__PURE__ */ y({
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
    }), s = ae(o, n);
    return (r, i) => (v(), g(l(Iv), P(l(s), {
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
}), Uy = { class: "text-xs text-slate-600 dark:text-slate-300" }, Wy = /* @__PURE__ */ y({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(e) {
    return (t, a) => (v(), L("div", Uy, "Characters: " + Q(t.count), 1));
  }
}), Qa = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, o] of t)
    a[n] = o;
  return a;
}, Hy = {}, Ky = { class: "text-sm text-slate-400 dark:text-slate-500" };
function jy(e, t) {
  return v(), L("div", Ky, [
    b(e.$slots, "default")
  ]);
}
const Gy = /* @__PURE__ */ Qa(Hy, [["render", jy]]), qy = { class: "text-sm text-red-600 dark:text-red-400" }, Yy = /* @__PURE__ */ y({
  __name: "Error",
  props: {
    error: {}
  },
  setup(e) {
    return (t, a) => ua((v(), L("div", null, [
      ie("p", qy, Q(t.error), 1)
    ], 512)), [
      [Wo, t.error]
    ]);
  }
}), Jy = {}, Qy = { class: "w-full space-y-4 p-1.5" };
function Xy(e, t) {
  return v(), L("div", Qy, [
    b(e.$slots, "default")
  ]);
}
const y_ = /* @__PURE__ */ Qa(Jy, [["render", Xy]]), Zy = {}, eb = { class: "my-4" };
function tb(e, t) {
  return v(), L("div", eb, [
    b(e.$slots, "default")
  ]);
}
const ab = /* @__PURE__ */ Qa(Zy, [["render", tb]]), nb = { class: "grid gap-4 md:grid-cols-2" }, b_ = /* @__PURE__ */ y({
  __name: "FormGrid",
  setup(e) {
    return (t, a) => (v(), g(ab, null, {
      default: f(() => [
        ie("div", nb, [
          b(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), ad = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Rv), P(a.value, {
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
}), ob = { class: "relative" }, lb = {
  name: "Base",
  inheritAttrs: !1
}, Mt = /* @__PURE__ */ y({
  ...lb,
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
      return v(), L("div", null, [
        t.label && t.showLabel ? (v(), g(l(ad), {
          key: 0,
          id: t.id
        }, {
          default: f(() => [
            J(Q(t.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : oe("", !0),
        ie("div", ob, [
          b(t.$slots, "default"),
          t.showCharacterCount ? (v(), g(l(Wy), {
            key: 0,
            count: (n = t.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : oe("", !0)
        ]),
        B(l(Gy), { class: "mt-[2px]" }, {
          default: f(() => [
            J(Q(t.description), 1)
          ]),
          _: 1
        }),
        B(l(Yy), { error: t.error }, null, 8, ["error"])
      ]);
    };
  }
}), sb = { class: "flex gap-2" }, __ = /* @__PURE__ */ y({
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
    return te(o, (s) => {
      a("update:modelValue", s);
    }), (s, r) => (v(), g(l(Mt), H(j(s.$props)), {
      default: f(() => [
        ie("div", sb, [
          B(l(xf), {
            id: s.id,
            checked: o.value,
            "onUpdate:checked": r[0] || (r[0] = (i) => o.value = i),
            class: "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }, {
            default: f(() => [
              B(l($f), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: f(() => [
                  B(l(jn), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          s.text ? (v(), g(l(ad), {
            key: 0,
            id: s.id,
            class: "my-auto"
          }, {
            default: f(() => [
              J(Q(s.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : oe("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), nd = /* @__PURE__ */ y({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (s, r) => (v(), g(l(Gv), H(j(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), od = /* @__PURE__ */ y({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(qv), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ld = /* @__PURE__ */ y({
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
    }), s = ae(o, n);
    return (r, i) => (v(), g(l(Yv), null, {
      default: f(() => [
        B(l(Xv), P({ ...l(s), ...r.$attrs }, {
          class: l(T)(
            "border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border bg-white p-4 text-slate-950 shadow-md outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
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
}), w_ = /* @__PURE__ */ y({
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
    return te(i, () => {
      Array.isArray(i.value) ? a("update:modelValue", i.value) : a("update:modelValue", i.value.id);
    }), (p, _) => (v(), g(l(Mt), H(j(p.$props)), {
      default: f(() => [
        B(l(nd), {
          open: r.value,
          "onUpdate:open": _[2] || (_[2] = (m) => r.value = m)
        }, {
          default: f(() => [
            B(l(od), { "as-child": "" }, {
              default: f(() => [
                B(l(st), {
                  variant: "outline-solid",
                  role: "combobox",
                  "aria-expanded": r.value,
                  class: "w-full justify-between overflow-hidden"
                }, {
                  default: f(() => [
                    J(Q(u.value) + " ", 1),
                    B(l(Eg), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
                  ]),
                  _: 1
                }, 8, ["aria-expanded"])
              ]),
              _: 1
            }),
            B(l(ld), { class: "w-full p-0" }, {
              default: f(() => [
                B(l(Zi), {
                  multiple: p.multiple,
                  modelValue: i.value,
                  "onUpdate:modelValue": _[1] || (_[1] = (m) => i.value = m),
                  "filter-function": d
                }, {
                  default: f(() => [
                    B(l(Oy), {
                      class: "h-9",
                      placeholder: s.value
                    }, null, 8, ["placeholder"]),
                    B(l(Sy), null, {
                      default: f(() => [
                        J(Q(o.value), 1)
                      ]),
                      _: 1
                    }),
                    B(l(Ty), null, {
                      default: f(() => [
                        B(l(Py), null, {
                          default: f(() => [
                            (v(!0), L(X, null, fe(p.options, (m) => (v(), g(l(Ay), {
                              key: m.id,
                              value: m,
                              onSelect: _[0] || (_[0] = () => {
                                p.multiple || (r.value = !1);
                              })
                            }, {
                              default: f(() => [
                                J(Q(m.name) + " ", 1),
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
}), x_ = /* @__PURE__ */ y({
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
    }), s = A(n.modelValue);
    return te(s, () => {
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
    }), (r, i) => (v(), g(l(Mt), H(j(r.$props)), {
      default: f(() => [
        B(l(nd), null, {
          default: f(() => [
            B(l(od), { "as-child": "" }, {
              default: f(() => [
                B(l(st), {
                  variant: "outline-solid",
                  class: K(["text-text w-[280px] justify-start text-left font-normal"])
                }, {
                  default: f(() => [
                    B(l(kg), { class: "mr-2 size-4" }),
                    J(" " + Q(s.value ? l(o).format(s.value.toDate(l(mt)())) : r.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            B(l(ld), { class: "w-auto p-0" }, {
              default: f(() => [
                B(l(xy), {
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
var Be = [];
for (var fo = 0; fo < 256; ++fo)
  Be.push((fo + 256).toString(16).slice(1));
function rb(e, t = 0) {
  return (Be[e[t + 0]] + Be[e[t + 1]] + Be[e[t + 2]] + Be[e[t + 3]] + "-" + Be[e[t + 4]] + Be[e[t + 5]] + "-" + Be[e[t + 6]] + Be[e[t + 7]] + "-" + Be[e[t + 8]] + Be[e[t + 9]] + "-" + Be[e[t + 10]] + Be[e[t + 11]] + Be[e[t + 12]] + Be[e[t + 13]] + Be[e[t + 14]] + Be[e[t + 15]]).toLowerCase();
}
var un, ib = new Uint8Array(16);
function db() {
  if (!un && (un = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !un))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return un(ib);
}
var ub = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Ps = {
  randomUUID: ub
};
function cb(e, t, a) {
  if (Ps.randomUUID && !e)
    return Ps.randomUUID();
  e = e || {};
  var n = e.random || (e.rng || db)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, rb(n);
}
const pb = { class: "flex items-center space-x-2" }, fb = ["src"], vb = ["accept"], $_ = /* @__PURE__ */ y({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = "file-upload-" + cb(), s = $(() => i.value ? URL.createObjectURL(i.value) : null), r = a.currentImage ? a.currentImage : a.defaultImage, i = $({
      get: () => a.modelValue,
      set: (c) => n("update:modelValue", c)
    }), d = (c) => {
      i.value = c.target.files[0];
    }, u = () => document.getElementById(o).click();
    return (c, p) => (v(), g(l(Mt), H(j(c.$props)), {
      default: f(() => [
        ie("div", pb, [
          b(c.$slots, "image", {
            newImage: s.value,
            curImage: l(r)
          }, () => [
            ie("img", {
              src: s.value ?? l(r),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, fb)
          ]),
          ie("input", {
            id: o,
            accept: c.accept,
            hidden: "",
            type: "file",
            onInput: d
          }, null, 40, vb),
          B(l(st), {
            variant: "outline-solid",
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
}), mb = ["disabled", "placeholder", "required", "type"], hb = /* @__PURE__ */ y({
  __name: "Input",
  props: /* @__PURE__ */ ho({
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
    const t = js(e, "modelValue");
    return (a, n) => (v(), g(l(Mt), H(j(a.$props)), {
      default: f(() => [
        ua(ie("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: K(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
          }])
        }, null, 10, mb), [
          [bd, t.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), C_ = /* @__PURE__ */ y({
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
    return te(s, () => {
      a("update:modelValue", s.value);
    }), (r, i) => (v(), g(l(Mt), H(j(r.$props)), {
      default: f(() => [
        B(l(To), {
          modelValue: s.value,
          "onUpdate:modelValue": i[0] || (i[0] = (d) => s.value = d)
        }, {
          default: f(({ open: d }) => [
            B(l(Vo), { open: d }, {
              default: f(() => [
                B(l(Io), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            B(l(Ro), null, {
              default: f(() => [
                (v(!0), L(X, null, fe(r.options, (u) => (v(), g(l(Fo), { value: u }, {
                  default: f(() => [
                    J(Q(u), 1)
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
}), gb = ["placeholder"], k_ = /* @__PURE__ */ y({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = Rl(e, "modelValue", t, {
      passive: !0
    });
    return (s, r) => (v(), g(l(Mt), H(j(s.$props)), {
      default: f(() => [
        ua(ie("textarea", {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => ca(o) ? o.value = i : null),
          placeholder: s.placeholder,
          class: K(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !s.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": s.error
          }])
        }, null, 10, gb), [
          [_d, l(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), yb = /* @__PURE__ */ y({
  __name: "Toggle",
  props: /* @__PURE__ */ ho({
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
  emits: /* @__PURE__ */ ho(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const a = t, n = e, o = js(e, "modelValue");
    te(o, () => {
      a("update:modelValue", o.value);
    });
    const s = $(() => {
      const { class: i, ...d } = n;
      return d;
    }), r = ae(s, a);
    return (i, d) => (v(), g(l(Mt), H(j(i.$props)), {
      default: f(() => [
        B(l(mh), P({
          checked: o.value,
          "onUpdate:checked": d[0] || (d[0] = (u) => o.value = u)
        }, l(r), {
          class: l(T)(
            "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
            n.class
          )
        }), {
          default: f(({ checked: u }) => [
            B(l(hh), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: f(() => [
                u ? b(i.$slots, "checked", { key: 0 }) : oe("", !0),
                u ? oe("", !0) : b(i.$slots, "not-checked", { key: 1 })
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
}), bb = { class: "my-auto text-slate-400 dark:text-slate-100" }, B_ = /* @__PURE__ */ y({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, a) => (v(), L("div", bb, " Showing " + Q(t.min) + " to " + Q(t.max) + " of " + Q(t.total) + " results ", 1));
  }
}), D_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Lv), P(a.value, {
      class: l(T)("text-text flex size-9 items-center justify-center", t.class)
    }), {
      default: f(() => [
        b(n.$slots, "default", {}, () => [
          B(l(Ri))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), S_ = /* @__PURE__ */ y({
  __name: "PaginationFirst",
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
    return (n, o) => (v(), g(l(Nv), H(j(a.value)), {
      default: f(() => [
        B(l(st), {
          class: K(l(T)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline-solid"
        }, {
          default: f(() => [
            b(n.$slots, "default", { icon: l(Sg) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), P_ = /* @__PURE__ */ y({
  __name: "PaginationLast",
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
    return (n, o) => (v(), g(l(zv), H(j(a.value)), {
      default: f(() => [
        B(l(st), {
          class: K(l(T)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline-solid"
        }, {
          default: f(() => [
            b(n.$slots, "default", { icon: l(Pg) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), E_ = /* @__PURE__ */ y({
  __name: "PaginationNext",
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
    return (n, o) => (v(), g(l(Hv), H(j(a.value)), {
      default: f(() => [
        B(l(st), {
          class: K(l(T)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline-solid"
        }, {
          default: f(() => [
            b(n.$slots, "default", { icon: l(Vl) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), O_ = /* @__PURE__ */ y({
  __name: "PaginationPrev",
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
    return (n, o) => (v(), g(l(Kv), H(j(a.value)), {
      default: f(() => [
        B(l(st), {
          class: K(l(T)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline-solid"
        }, {
          default: f(() => [
            b(n.$slots, "default", { icon: l(Bg) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), A_ = /* @__PURE__ */ y({
  __name: "LumuixModeToggle",
  setup(e) {
    const t = gy({
      selector: "html"
    });
    return (a, n) => (v(), g(yb, {
      modelValue: l(t),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => ca(t) ? t.value = o : null)
    }, {
      checked: f(() => [
        B(l(Mg), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      "not-checked": f(() => [
        B(l(Fg), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), M_ = /* @__PURE__ */ y({
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
    return (o, s) => (v(), L(X, null, [
      B(l(Fa), {
        onClick: n,
        class: K(t.class)
      }, {
        default: f(() => [
          (v(!0), L(X, null, fe(o.headers, (r) => (v(), g(l(En), {
            key: r.value
          }, {
            default: f(() => [
              o.$slots[`cell_header_${r.value}`] ? b(o.$slots, `cell_header_${r.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (v(), L(X, { key: 1 }, [
                J(Q(o.row[r.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (v(), g(l(Lo), { key: 0 }, {
            default: f(() => [
              b(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : oe("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (v(!0), L(X, { key: 0 }, fe(o.subRows, (r, i) => (v(), g(l(Fa), { key: i }, {
        default: f(() => [
          (v(!0), L(X, null, fe(o.headers, (d) => (v(), g(l(En), {
            key: d.value
          }, {
            default: f(() => [
              o.$slots[`subrow_cell_${d.value}`] ? b(o.$slots, `subrow_cell_${d.value}`, {
                key: 0,
                item: r,
                open: a.value
              }) : (v(), L(X, { key: 1 }, [
                J(Q("subrow_cell_" + d.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (v(), g(l(Lo), { key: 0 }, {
            default: f(() => [
              b(o.$slots, "sub_row_actions", {
                item: o.row,
                open: a.value
              })
            ]),
            _: 3
          })) : oe("", !0)
        ]),
        _: 2
      }, 1024))), 128)) : oe("", !0)
    ], 64));
  }
}), _b = { class: "relative w-full overflow-auto" }, wb = /* @__PURE__ */ y({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", _b, [
      ie("table", {
        class: K(l(T)("w-full caption-bottom text-sm", t.class))
      }, [
        b(a.$slots, "default")
      ], 2)
    ]));
  }
}), xb = /* @__PURE__ */ y({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("tbody", {
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
    return (a, n) => (v(), L("td", {
      class: K(["text-text p-4 align-middle [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), $b = /* @__PURE__ */ y({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("th", {
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
}), Cb = /* @__PURE__ */ y({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("thead", {
      class: K(l(T)("[&_tr]:border-b", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), T_ = /* @__PURE__ */ y({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("tfoot", {
      class: K(
        l(T)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 last:[&>tr]:border-b-0",
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
    return (a, n) => (v(), L("tr", {
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
}), Lo = /* @__PURE__ */ y({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("td", {
      class: K(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), kb = /* @__PURE__ */ y({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("caption", {
      class: K(l(T)("text-sub-text mt-4 text-sm", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Bb = { class: "flex items-center justify-center py-10" }, I_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(Fa, null, {
      default: f(() => [
        B(En, P({
          class: l(T)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, a.value), {
          default: f(() => [
            ie("div", Bb, [
              b(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), V_ = /* @__PURE__ */ y({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, a) => (v(), g(l(wb), null, {
      default: f(() => [
        t.caption ? (v(), g(l(kb), { key: 0 }, {
          default: f(() => [
            J(Q(t.caption), 1)
          ]),
          _: 1
        })) : oe("", !0),
        B(l(Cb), null, {
          default: f(() => [
            B(l(Fa), null, {
              default: f(() => [
                (v(!0), L(X, null, fe(t.headers, (n, o) => (v(), g(l($b), null, {
                  default: f(() => [
                    t.$slots[`header_${t.headers[o].value}`] ? b(t.$slots, `header_${t.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (v(), L(X, { key: 1 }, [
                      J(Q(n.name), 1)
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
        B(l(xb), null, {
          default: f(() => [
            (v(!0), L(X, null, fe(t.rows, (n, o) => (v(), g(l(Fa), { key: o }, {
              default: f(() => [
                (v(!0), L(X, null, fe(t.headers, (s) => (v(), g(l(En), {
                  key: s.value
                }, {
                  default: f(() => [
                    t.$slots[`cell_${s.value}`] ? b(t.$slots, `cell_${s.value}`, {
                      key: 0,
                      item: n
                    }) : (v(), L(X, { key: 1 }, [
                      J(Q(n[s.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                t.$slots.row_actions ? (v(), g(l(Lo), { key: 0 }, {
                  default: f(() => [
                    b(t.$slots, "row_actions", { item: n })
                  ]),
                  _: 2
                }, 1024)) : oe("", !0)
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
}), Db = { class: "text-text" }, R_ = /* @__PURE__ */ y({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const a = t, n = () => a("close");
    return (o, s) => (v(), g(l(ed), { open: o.open }, {
      default: f(() => [
        B(l($y), { "as-child": "" }, {
          default: f(() => [
            b(o.$slots, "trigger")
          ]),
          _: 3
        }),
        B(l(td), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: K("max-w-" + o.size)
        }, {
          default: f(() => [
            B(l(Cy), null, {
              default: f(() => [
                B(l(ky), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.title ? b(o.$slots, "title", { key: 0 }) : (r = o.headerData) != null && r.title ? (v(), L(X, { key: 1 }, [
                        J(Q(o.headerData.title), 1)
                      ], 64)) : oe("", !0)
                    ];
                  }),
                  _: 3
                }),
                B(l(By), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.description ? b(o.$slots, "description", { key: 0 }) : (r = o.headerData) != null && r.description ? (v(), L(X, { key: 1 }, [
                        J(Q(o.headerData.description), 1)
                      ], 64)) : oe("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            ie("div", Db, [
              o.$slots.content ? b(o.$slots, "content", { key: 0 }) : b(o.$slots, "default", { key: 1 })
            ]),
            B(l(Dy), null, {
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
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (s, r) => (v(), g(l(yh), H(j(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), F_ = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(wh), P(l(n), {
      class: l(T)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-xs dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        t.class
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
  setup(e) {
    const t = e;
    return (a, n) => {
      var o;
      return v(), g(Ae((o = a.tab) != null && o.is ? a.tab.is : "a"), {
        href: a.tab.href,
        class: K([
          a.tab.active ? "text-primary bg-white hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          l(T)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            t.class
          )
        ])
      }, {
        default: f(() => {
          var s;
          return [
            (s = a.tab) != null && s.icon ? (v(), g(Ae(a.tab.icon), {
              key: 0,
              class: "size-5"
            })) : oe("", !0),
            J(" " + Q(a.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), Es = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(bh), P(a.value, {
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
}), L_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(_h), P({
      class: l(T)(
        "ring-offset-whit mt-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        t.class
      )
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Eb = {}, Ob = { class: "text-text mt-2 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function Ab(e, t) {
  return v(), L("div", Ob, [
    b(e.$slots, "default")
  ]);
}
const Mb = /* @__PURE__ */ Qa(Eb, [["render", Ab]]), N_ = /* @__PURE__ */ y({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(e) {
    const t = e, a = $(
      () => t.tabs.find((n) => n.active)
    );
    return (n, o) => (v(), g(l(Sb), null, {
      default: f(() => [
        B(l(Es), { class: "hidden gap-2 md:block" }, {
          default: f(() => [
            (v(!0), L(X, null, fe(n.tabs, (s) => (v(), g(l(Pb), {
              key: s.name,
              tab: s
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        B(l(Es), { class: "flex md:hidden" }, {
          default: f(() => [
            B(l(Iy), null, {
              default: f(() => [
                B(l(Ry), { "as-child": "" }, {
                  default: f(() => [
                    B(l(st), { variant: "secondary" }, {
                      default: f(() => {
                        var s;
                        return [
                          J(Q(((s = a.value) == null ? void 0 : s.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                B(l(Fy), { class: "w-full" }, {
                  default: f(() => [
                    (v(!0), L(X, null, fe(n.tabs, (s) => (v(), g(l(Ly), P({
                      key: s.name,
                      ref_for: !0
                    }, s), {
                      default: f(() => [
                        J(Q(s.name), 1)
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
        B(l(Mb), null, {
          default: f(() => [
            b(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Tb = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, z_ = /* @__PURE__ */ y({
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
    }), s = ae(o, n);
    return (r, i) => (v(), g(l(nm), P({
      class: l(T)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: u }) => [
        B(l(zb), null, {
          default: f(() => [
            B(l(Hb)),
            B(l(Ub)),
            B(l(Wb))
          ]),
          _: 1
        }),
        ie("div", Tb, [
          (v(!0), L(X, null, fe(d, (c) => (v(), g(l(Rb), {
            key: c.value.toString()
          }, {
            default: f(() => [
              B(l(Lb), null, {
                default: f(() => [
                  B(l(Os), null, {
                    default: f(() => [
                      (v(!0), L(X, null, fe(u, (p) => (v(), g(l(Nb), { key: p }, {
                        default: f(() => [
                          J(Q(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              B(l(Fb), null, {
                default: f(() => [
                  (v(!0), L(X, null, fe(c.rows, (p, _) => (v(), g(l(Os), {
                    key: `weekDate-${_}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), L(X, null, fe(p, (m) => (v(), g(l(Ib), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          B(l(Vb), {
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
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = re(a);
    return (o, s) => (v(), g(l(rm), P({
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
}), Vb = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(vm), P({
      class: l(T)(
        l(Gt)({ variant: "ghost" }),
        "h-9 w-9 p-0 font-normal data-selected:opacity-100",
        "[&[data-today]:not([data-selected])]:bg-slate-100 [&[data-today]:not([data-selected])]:text-slate-900 dark:[&[data-today]:not([data-selected])]:bg-slate-800 dark:[&[data-today]:not([data-selected])]:text-slate-50",
        // Selection Start
        "data-selection-start:bg-slate-900 data-selection-start:text-slate-50 data-selection-start:hover:bg-slate-900 data-selection-start:hover:text-slate-50 data-selection-start:focus:bg-slate-900 data-selection-start:focus:text-slate-50 dark:data-selection-start:bg-slate-50 dark:data-selection-start:text-slate-900 dark:data-selection-start:hover:bg-slate-50 dark:data-selection-start:hover:text-slate-900 dark:data-selection-start:focus:bg-slate-50 dark:data-selection-start:focus:text-slate-900",
        // Selection End
        "data-selection-end:bg-slate-900 data-selection-end:text-slate-50 data-selection-end:hover:bg-slate-900 data-selection-end:hover:text-slate-50 data-selection-end:focus:bg-slate-900 data-selection-end:focus:text-slate-50 dark:data-selection-end:bg-slate-50 dark:data-selection-end:text-slate-900 dark:data-selection-end:hover:bg-slate-50 dark:data-selection-end:hover:text-slate-900 dark:data-selection-end:focus:bg-slate-50 dark:data-selection-end:focus:text-slate-900",
        // Outside months
        "data-outside-view:text-slate-500 data-outside-view:opacity-50 dark:data-outside-view:text-slate-400 [&[data-outside-view][data-selected]]:bg-slate-100/50 [&[data-outside-view][data-selected]]:text-slate-500 [&[data-outside-view][data-selected]]:opacity-30 dark:[&[data-outside-view][data-selected]]:bg-slate-800/50 dark:[&[data-outside-view][data-selected]]:text-slate-400",
        // Disabled
        "data-disabled:text-slate-500 data-disabled:opacity-50 dark:data-disabled:text-slate-400",
        // Unavailable
        "data-unavailable:text-slate-50 data-unavailable:line-through dark:data-unavailable:text-slate-50",
        t.class
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
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = re(a);
    return (o, s) => (v(), g(l(sm), P({
      class: l(T)("w-full border-collapse space-y-1", t.class)
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
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(pm), H(j(t)), {
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
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(cm), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Os = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(fm), P({
      class: l(T)("mt-2 flex w-full", t.class)
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
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = re(a);
    return (o, s) => (v(), g(l(im), P({
      class: l(T)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
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
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = re(a);
    return (o, s) => (v(), g(l(om), P({
      class: l(T)("relative flex w-full items-center justify-between pt-1", t.class)
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
  setup(e) {
    const t = e, a = $(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = re(a);
    return (o, s) => (v(), g(l(lm), P({
      class: l(T)("text-text text-sm font-medium", t.class)
    }, l(n)), {
      default: f(({ headingValue: r }) => [
        b(o.$slots, "default", { headingValue: r }, () => [
          J(Q(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wb = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(dm), P({
      class: l(T)(
        l(Gt)({ variant: "outline-solid" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          B(l(Ig), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hb = /* @__PURE__ */ y({
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
    return (o, s) => (v(), g(l(um), P({
      class: l(T)(
        l(Gt)({ variant: "outline-solid" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        b(o.$slots, "default", {}, () => [
          B(l(Tg), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kb = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Gm), P(a.value, {
      class: l(T)(
        "bg-border relative shrink-0",
        t.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        t.class
      )
    }), {
      default: f(() => [
        t.label ? (v(), L("span", {
          key: 0,
          class: K(
            l(T)(
              "bg-background text-muted-foreground absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-xs",
              t.orientation === "vertical" ? "w-px px-1 py-2" : "h-px px-2 py-1"
            )
          )
        }, Q(t.label), 3)) : oe("", !0)
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
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (s, r) => (v(), g(l(zr), H(j(l(o))), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), U_ = /* @__PURE__ */ y({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(Ga), H(j(t)), {
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
  setup(e, { emit: t }) {
    const a = e, n = t, o = $(() => {
      const { class: r, side: i, ...d } = a;
      return d;
    }), s = ae(o, n);
    return (r, i) => (v(), g(l(gl), null, {
      default: f(() => [
        B(l(xl), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        B(l(wl), P({
          class: l(T)(l(qb)({ side: r.side }), a.class)
        }, { ...l(s), ...r.$attrs }), {
          default: f(() => [
            b(r.$slots, "default"),
            B(l(Ga), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none" }, {
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
}), W_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Gr), P({
      class: l(T)("text-muted-foreground text-sm", t.class)
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), H_ = /* @__PURE__ */ y({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
      class: K(l(T)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), K_ = /* @__PURE__ */ y({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
      class: K(l(T)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), j_ = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(jr), P({
      class: l(T)("text-foreground text-lg font-semibold", t.class)
    }, a.value), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G_ = /* @__PURE__ */ y({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(Ur), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qb = $a(
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
), Yb = "sidebar:state", Jb = 60 * 60 * 24 * 7, Qb = "16rem", Xb = "18rem", Zb = "3rem", e0 = "b", [qn, t0] = le("Sidebar"), a0 = { class: "flex h-full w-full flex-col" }, n0 = ["data-state", "data-collapsible", "data-variant", "data-side"], o0 = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border bg-sidebar text-sidebar-foreground flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, q_ = /* @__PURE__ */ y({
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
    return (r, i) => r.collapsible === "none" ? (v(), L("div", P({
      key: 0,
      class: l(T)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
    }, r.$attrs), [
      b(r.$slots, "default")
    ], 16)) : l(a) ? (v(), g(l(jb), P({
      key: 1,
      open: l(o)
    }, r.$attrs, { "onUpdate:open": l(s) }), {
      default: f(() => [
        B(l(Gb), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: r.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: Ot({
            "--sidebar-width": l(Xb)
          })
        }, {
          default: f(() => [
            ie("div", a0, [
              b(r.$slots, "default", { state: l(n) })
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (v(), L("div", {
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
            "relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            r.variant === "floating" || r.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      ie("div", P({
        class: l(T)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          r.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          r.variant === "floating" || r.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, r.$attrs), [
        ie("div", o0, [
          b(r.$slots, "default", { state: l(n) })
        ])
      ], 16)
    ], 8, n0));
  }
}), Y_ = /* @__PURE__ */ y({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
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
}), J_ = /* @__PURE__ */ y({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "footer",
      class: K(l(T)("flex flex-col gap-2 p-2", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Q_ = /* @__PURE__ */ y({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "group",
      class: K(l(T)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), X_ = /* @__PURE__ */ y({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), {
      "data-sidebar": "group-action",
      as: a.as,
      "as-child": a.asChild,
      class: K(
        l(T)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 md:after:hidden",
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
}), Z_ = /* @__PURE__ */ y({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "group-content",
      class: K(l(T)("w-full text-sm", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), ew = /* @__PURE__ */ y({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), {
      "data-sidebar": "group-label",
      as: a.as,
      "as-child": a.asChild,
      class: K(
        l(T)(
          "ring-sidebar-ring text-sidebar-foreground/70 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
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
}), tw = /* @__PURE__ */ y({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "header",
      class: K(l(T)("flex flex-col gap-2 p-2", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), aw = /* @__PURE__ */ y({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(hb, {
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
}), nw = /* @__PURE__ */ y({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("main", {
      class: K(
        l(T)(
          "bg-background relative flex min-h-svh flex-1 flex-col",
          "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
          t.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), ow = /* @__PURE__ */ y({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("ul", {
      "data-sidebar": "menu",
      class: K(l(T)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), lw = /* @__PURE__ */ y({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(F), {
      "data-sidebar": "menu-action",
      class: K(
        l(T)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground text-sidebar-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 md:after:hidden",
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
}), sw = /* @__PURE__ */ y({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
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
  setup(e, { emit: t }) {
    const o = ae(e, t);
    return (s, r) => (v(), g(l(Nh), H(j(l(o))), {
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
  setup(e, { emit: t }) {
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ae(o, n);
    return (r, i) => (v(), g(l(Hh), null, {
      default: f(() => [
        B(l(Wh), P({ ...l(s), ...r.$attrs }, {
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
}), rw = /* @__PURE__ */ y({
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
    return (a, n) => (v(), g(l(Ei), H(j(t)), {
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
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l(zh), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), As = /* @__PURE__ */ y({
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
    return (a, n) => (v(), g(l(F), P({
      "data-sidebar": "menu-button",
      "data-size": a.size,
      "data-active": a.isActive,
      class: l(T)(l(u0)({ variant: a.variant, size: a.size }), t.class),
      as: a.as,
      "as-child": a.asChild
    }, a.$attrs), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), iw = /* @__PURE__ */ y({
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
    return (s, r) => s.tooltip ? (v(), g(l(l0), { key: 1 }, {
      default: f(() => [
        B(l(r0), { "as-child": "" }, {
          default: f(() => [
            B(As, H(j({ ...o.value, ...s.$attrs })), {
              default: f(() => [
                b(s.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        B(l(s0), {
          side: "right",
          align: "center",
          hidden: l(n) !== "collapsed" || l(a)
        }, {
          default: f(() => [
            typeof s.tooltip == "string" ? (v(), L(X, { key: 0 }, [
              J(Q(s.tooltip), 1)
            ], 64)) : (v(), g(Ae(s.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (v(), g(As, H(P({ key: 0 }, { ...o.value, ...s.$attrs })), {
      default: f(() => [
        b(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dw = /* @__PURE__ */ y({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("li", {
      "data-sidebar": "menu-item",
      class: K(l(T)("group/menu-item relative", t.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ms = /* @__PURE__ */ y({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("div", {
      class: K(l(T)("bg-skeleton animate-pulse rounded-md", t.class))
    }, null, 2));
  }
}), uw = /* @__PURE__ */ y({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e, a = $(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (n, o) => (v(), L("div", {
      "data-sidebar": "menu-skeleton",
      class: K(l(T)("flex h-8 items-center gap-2 rounded-md px-2", t.class))
    }, [
      n.showIcon ? (v(), g(Ms, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : oe("", !0),
      B(Ms, {
        class: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: Ot({ "--skeleton-width": a.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), cw = /* @__PURE__ */ y({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), L("ul", {
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
}), pw = /* @__PURE__ */ y({
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
    return (a, n) => (v(), g(l(F), {
      "data-sidebar": "menu-sub-button",
      as: a.as,
      "as-child": a.asChild,
      "data-size": a.size,
      "data-active": a.isActive,
      class: K(
        l(T)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground text-sidebar-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
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
}), i0 = {};
function d0(e, t) {
  return v(), L("li", null, [
    b(e.$slots, "default")
  ]);
}
const fw = /* @__PURE__ */ Qa(i0, [["render", d0]]), vw = /* @__PURE__ */ y({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Qi("(max-width: 768px)"), s = A(!1), r = Rl(a, "open", n, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function i(p) {
      r.value = p, document.cookie = `${Yb}=${r.value}; path=/; max-age=${Jb}`;
    }
    function d(p) {
      s.value = p;
    }
    function u() {
      return o.value ? d(!s.value) : i(!r.value);
    }
    Pn("keydown", (p) => {
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
    }), (p, _) => (v(), g(l(Ei), { "delay-duration": 0 }, {
      default: f(() => [
        ie("div", P({
          style: {
            "--sidebar-width": l(Qb),
            "--sidebar-width-icon": l(Zb)
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
}), mw = /* @__PURE__ */ y({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: a } = qn();
    return (n, o) => (v(), L("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: K(
        l(T)(
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
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
}), hw = /* @__PURE__ */ y({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(Kb, {
      "data-sidebar": "separator",
      class: K(l(T)("bg-sidebar-border mx-2 w-auto", t.class))
    }, {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), gw = /* @__PURE__ */ y({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: a } = qn();
    return (n, o) => (v(), g(st, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: K(l(T)("h-7 w-7", t.class)),
      onClick: l(a)
    }, {
      default: f(() => [
        B(l(Vg)),
        o[0] || (o[0] = ie("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1,
      __: [0]
    }, 8, ["class", "onClick"]));
  }
}), u0 = $a(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), yw = /* @__PURE__ */ y({
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
    }), s = ae(o, n);
    return (r, i) => (v(), g(l(sh), P({
      class: l(T)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        a.class
      )
    }, l(s)), {
      default: f(() => [
        B(l(dh), { class: "bg-accent relative h-2 w-full grow overflow-hidden rounded-full data-[orientation=vertical]:w-2" }, {
          default: f(() => [
            B(l(uh), { class: "bg-primary absolute h-full data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (v(!0), L(X, null, fe(r.modelValue, (d, u) => (v(), g(l(ih), {
          key: u,
          class: "border-primary bg-primary ring-offset-background focus-visible:ring-ring block size-5 rounded-full border-2 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
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
let vo = 0;
function f0() {
  return vo = (vo + 1) % Number.MAX_VALUE, vo.toString();
}
const mo = /* @__PURE__ */ new Map();
function Ts(e) {
  if (mo.has(e)) return;
  const t = setTimeout(() => {
    mo.delete(e), Aa({
      type: pt.REMOVE_TOAST,
      toastId: e
    });
  }, p0);
  mo.set(e, t);
}
const ze = A({
  toasts: []
});
function Aa(e) {
  switch (e.type) {
    case pt.ADD_TOAST:
      ze.value.toasts = [e.toast, ...ze.value.toasts].slice(0, c0);
      break;
    case pt.UPDATE_TOAST:
      ze.value.toasts = ze.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case pt.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? Ts(t) : ze.value.toasts.forEach((a) => {
        Ts(a.id);
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
function v0() {
  return {
    toasts: $(() => ze.value.toasts),
    toast: m0,
    dismiss: (e) => Aa({ type: pt.DISMISS_TOAST, toastId: e })
  };
}
function m0(e) {
  const t = f0(), a = (o) => Aa({
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
const h0 = { class: "flex gap-3" }, g0 = { class: "grid gap-1" }, bw = /* @__PURE__ */ y({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = v0();
    return (a, n) => (v(), g(l(x0), null, {
      default: f(() => [
        (v(!0), L(X, null, fe(l(t), (o) => (v(), g(l(y0), P({
          key: o.id,
          ref_for: !0
        }, o, { class: "my-1" }), {
          default: f(() => [
            ie("div", h0, [
              (v(), g(Ae(o.icon), {
                class: K(l(T)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              ie("div", g0, [
                o.title ? (v(), g(l(w0), { key: 0 }, {
                  default: f(() => [
                    J(Q(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : oe("", !0),
                o.description ? (v(), L(X, { key: 1 }, [
                  wd(o.description) ? (v(), g(l(Is), { key: 0 }, {
                    default: f(() => [
                      (v(), g(Ae(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (v(), g(l(Is), { key: 1 }, {
                    default: f(() => [
                      J(Q(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : oe("", !0),
                B(l(_0))
              ]),
              (v(), g(Ae(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        B(l(b0))
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
  setup(e, { emit: t }) {
    const a = e, n = t, o = $(() => {
      const { class: r, ...i } = a;
      return i;
    }), s = ae(o, n);
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
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), g(l(Ih), P(a.value, {
      class: l(T)(
        "fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), _w = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Th), H(j(a.value)), {
      default: f(() => [
        B(l(st), {
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
}), _0 = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Si), P(a.value, {
      class: l(T)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-50 focus:group-[.destructive]:ring-red-400 focus:group-[.destructive]:ring-offset-red-600",
        t.class
      )
    }), {
      default: f(() => [
        B(l(Gn), { class: "size-4 transition hover:text-slate-400" })
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
  setup(e) {
    const t = e, a = $(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (v(), g(l(Vh), P(a.value, {
      class: l(T)("text-sm font-semibold", t.class)
    }), {
      default: f(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Is = /* @__PURE__ */ y({
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
    return (n, o) => (v(), g(l(Rh), P({
      class: l(T)("text-sm opacity-90", t.class)
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
  setup(e) {
    const t = e;
    return (a, n) => (v(), g(l($h), H(j(t)), {
      default: f(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $0 = $a(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-(--radix-toast-swipe-end-x) data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x) data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full",
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
  M0 as Accordion,
  T0 as AccordionContent,
  I0 as AccordionItem,
  V0 as AccordionTrigger,
  R0 as Badge,
  Mt as Base,
  Vy as BaseDropdownMenuItem,
  F0 as Breadcrumb,
  L0 as BreadcrumbEllipsis,
  N0 as BreadcrumbItem,
  z0 as BreadcrumbLink,
  U0 as BreadcrumbList,
  W0 as BreadcrumbPage,
  H0 as BreadcrumbSeparator,
  st as Button,
  Q0 as Calendar,
  Li as CalendarCell,
  Ni as CalendarCellTrigger,
  zi as CalendarGrid,
  Ui as CalendarGridBody,
  Wi as CalendarGridHead,
  Sn as CalendarGridRow,
  Hi as CalendarHeadCell,
  Ki as CalendarHeader,
  ji as CalendarHeading,
  Wg as CalendarNextButton,
  Hg as CalendarPrevButton,
  xy as CalendarWithSelect,
  K0 as Card,
  Y0 as CardContent,
  q0 as CardDescription,
  J0 as CardFooter,
  j0 as CardHeader,
  G0 as CardTitle,
  Wy as CharacterCount,
  __ as Checkbox,
  M_ as CollapsibleTableRow,
  w_ as Combobox,
  Zi as Command,
  o_ as CommandDialog,
  Sy as CommandEmpty,
  Py as CommandGroup,
  Oy as CommandInput,
  Ay as CommandItem,
  Ty as CommandList,
  l_ as CommandSeparator,
  s_ as CommandShortcut,
  x_ as DatePicker,
  Gy as Description,
  ed as Dialog,
  a_ as DialogClose,
  td as DialogContent,
  By as DialogDescription,
  Dy as DialogFooter,
  Cy as DialogHeader,
  n_ as DialogScrollContent,
  ky as DialogTitle,
  $y as DialogTrigger,
  Iy as DropdownMenu,
  u_ as DropdownMenuCheckboxItem,
  Fy as DropdownMenuContent,
  r_ as DropdownMenuGroup,
  d_ as DropdownMenuItem,
  v_ as DropdownMenuLabel,
  Ly as DropdownMenuLink,
  Bv as DropdownMenuPortal,
  i_ as DropdownMenuRadioGroup,
  c_ as DropdownMenuRadioItem,
  f_ as DropdownMenuSeparator,
  p_ as DropdownMenuShortcut,
  m_ as DropdownMenuSub,
  g_ as DropdownMenuSubContent,
  h_ as DropdownMenuSubTrigger,
  Ry as DropdownMenuTrigger,
  Yy as Error,
  y_ as Form,
  ab as FormElement,
  b_ as FormGrid,
  $_ as ImageUpload,
  hb as Input,
  ad as Label,
  V_ as LumuixDatatable,
  R_ as LumuixModal,
  A_ as LumuixModeToggle,
  N_ as LumuixTabs,
  E0 as Pagination,
  B_ as PaginationDetails,
  D_ as PaginationEllipsis,
  S_ as PaginationFirst,
  P_ as PaginationLast,
  O0 as PaginationList,
  A0 as PaginationListItem,
  E_ as PaginationNext,
  O_ as PaginationPrev,
  nd as Popover,
  ld as PopoverContent,
  od as PopoverTrigger,
  z_ as RangeCalendar,
  Ib as RangeCalendarCell,
  Vb as RangeCalendarCellTrigger,
  Rb as RangeCalendarGrid,
  Fb as RangeCalendarGridBody,
  Lb as RangeCalendarGridHead,
  Os as RangeCalendarGridRow,
  Nb as RangeCalendarHeadCell,
  zb as RangeCalendarHeader,
  Ub as RangeCalendarHeading,
  Wb as RangeCalendarNextButton,
  Hb as RangeCalendarPrevButton,
  C_ as Select,
  Ro as SelectContent,
  X0 as SelectGroup,
  Fo as SelectItem,
  Z0 as SelectItemText,
  e_ as SelectLabel,
  To as SelectRoot,
  _y as SelectScrollDownButton,
  by as SelectScrollUpButton,
  t_ as SelectSeparator,
  Vo as SelectTrigger,
  Io as SelectValue,
  Kb as Separator,
  jb as Sheet,
  U_ as SheetClose,
  Gb as SheetContent,
  W_ as SheetDescription,
  H_ as SheetFooter,
  K_ as SheetHeader,
  j_ as SheetTitle,
  G_ as SheetTrigger,
  q_ as Sidebar,
  Y_ as SidebarContent,
  J_ as SidebarFooter,
  Q_ as SidebarGroup,
  X_ as SidebarGroupAction,
  Z_ as SidebarGroupContent,
  ew as SidebarGroupLabel,
  tw as SidebarHeader,
  aw as SidebarInput,
  nw as SidebarInset,
  ow as SidebarMenu,
  lw as SidebarMenuAction,
  sw as SidebarMenuBadge,
  iw as SidebarMenuButton,
  dw as SidebarMenuItem,
  uw as SidebarMenuSkeleton,
  cw as SidebarMenuSub,
  pw as SidebarMenuSubButton,
  fw as SidebarMenuSubItem,
  vw as SidebarProvider,
  mw as SidebarRail,
  hw as SidebarSeparator,
  gw as SidebarTrigger,
  Ms as Skeleton,
  yw as Slider,
  Mb as TabBaseContent,
  wb as Table,
  xb as TableBody,
  kb as TableCaption,
  En as TableCell,
  I_ as TableEmpty,
  T_ as TableFooter,
  $b as TableHead,
  Cb as TableHeader,
  Fa as TableRow,
  Lo as TableRowAction,
  L_ as TabsContent,
  Pb as TabsItem,
  Es as TabsList,
  Sb as TabsRoot,
  F_ as TabsTrigger,
  k_ as TextArea,
  y0 as Toast,
  _w as ToastAction,
  _0 as ToastClose,
  Is as ToastDescription,
  x0 as ToastProvider,
  w0 as ToastTitle,
  b0 as ToastViewport,
  bw as Toaster,
  yb as Toggle,
  l0 as Tooltip,
  s0 as TooltipContent,
  rw as TooltipProvider,
  r0 as TooltipTrigger,
  Ng as badgeVariants,
  Gt as buttonVariants,
  k0 as preset,
  qb as sheetVariants,
  u0 as sidebarMenuButtonVariants,
  zg as spinnerSize,
  m0 as toast,
  $0 as toastVariants,
  qn as useSidebar,
  v0 as useToast
};
