import * as Qo from "vue";
import { computed as C, ref as T, shallowRef as so, watch as ee, getCurrentScope as lo, onScopeDispose as ro, shallowReadonly as Vt, unref as s, getCurrentInstance as Ge, toRef as Vs, camelize as Rs, defineComponent as y, Comment as Fs, mergeProps as S, cloneVNode as Gr, h as Ue, toRefs as ce, openBlock as f, createBlock as b, withCtx as v, renderSlot as _, withKeys as Fe, onMounted as de, normalizeProps as U, guardReactiveProps as j, reactive as Ls, createVNode as D, createCommentVNode as Z, createElementVNode as re, toDisplayString as J, createTextVNode as Y, withModifiers as we, createElementBlock as L, Fragment as Q, watchEffect as ge, markRaw as qr, nextTick as oe, watchSyncEffect as Yr, withDirectives as Zt, vShow as io, isRef as $a, resolveDynamicComponent as Pe, renderList as he, Teleport as sn, onBeforeUnmount as uo, useSlots as zs, onBeforeMount as Xr, normalizeStyle as dt, toHandlers as Zr, inject as Ns, provide as Ws, effectScope as Ks, readonly as ka, toHandlerKey as Jr, onUnmounted as _t, vModelSelect as Qr, toRaw as ei, customRef as Us, onBeforeUpdate as ti, onUpdated as ai, mergeDefaults as Hs, watchPostEffect as ni, normalizeClass as H, mergeModels as Wn, useModel as js, vModelDynamic as oi, vModelText as si, isVNode as li } from "vue";
function ri(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gs = {}, qs = {};
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
    const l = function(r) {
      return {
        __options: r,
        handler: n(r),
        config: o(r)
      };
    };
    return l.__isOptionsFunction = !0, l.__pluginFunction = n, l.__configFunction = o, l;
  };
  const a = t;
})(qs);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = /* @__PURE__ */ a(qs);
  function a(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const n = t.default;
})(Gs);
let kn = Gs;
var ii = (kn.__esModule ? kn : { default: kn }).default;
const di = ii;
function es(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var ui = di(
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
      { values: es(a("animationDuration")) }
    ), t(
      { delay: (n) => ({ animationDelay: n }) },
      { values: a("animationDelay") }
    ), t(
      { ease: (n) => ({ animationTimingFunction: n }) },
      { values: es(a("animationTimingFunction")) }
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
const ci = /* @__PURE__ */ ri(ui), ob = {
  safelist: ["dark"],
  darkMode: ["class"],
  plugins: [ci],
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
function Bn(e, t) {
  return e - t * Math.floor(e / t);
}
const Ys = 1721426;
function Va(e, t, a, n) {
  t = co(e, t);
  let o = t - 1, l = -2;
  return a <= 2 ? l = 0 : qa(t) && (l = -1), Ys - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + l + n);
}
function qa(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function co(e, t) {
  return e === "BC" ? 1 - t : t;
}
function pi(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const fi = {
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
class Nt {
  fromJulianDay(t) {
    let a = t, n = a - Ys, o = Math.floor(n / 146097), l = Bn(n, 146097), r = Math.floor(l / 36524), i = Bn(l, 36524), d = Math.floor(i / 1461), c = Bn(i, 1461), u = Math.floor(c / 365), p = o * 400 + r * 100 + d * 4 + u + (r !== 4 && u !== 4 ? 1 : 0), [h, m] = pi(p), w = a - Va(h, m, 1, 1), g = 2;
    a < Va(h, m, 3, 1) ? g = 0 : qa(m) && (g = 1);
    let x = Math.floor(((w + g) * 12 + 373) / 367), $ = a - Va(h, m, x, 1) + 1;
    return new Ut(h, m, x, $);
  }
  toJulianDay(t) {
    return Va(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return fi[qa(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return qa(t.year) ? 366 : 365;
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
const vi = {
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
  return t = Te(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Xs(e, t) {
  return t = Te(t, e.calendar), e = ya(e), t = ya(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Ke(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function ts(e, t) {
  return e = ya(e), t = ya(t), e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month;
}
function Zs(e, t) {
  return Ce(e, Qs(t));
}
function Js(e, t) {
  let a = e.calendar.toJulianDay(e), n = Math.ceil(a + 1 - yi(t)) % 7;
  return n < 0 && (n += 7), n;
}
function mi(e) {
  return nt(Date.now(), e);
}
function Qs(e) {
  return wi(mi(e));
}
function el(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function hi(e, t) {
  return as(e) - as(t);
}
function as(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let Dn = null;
function Dt() {
  return Dn == null && (Dn = new Intl.DateTimeFormat().resolvedOptions().timeZone), Dn;
}
function ya(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function ns(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const os = /* @__PURE__ */ new Map();
function gi(e) {
  if (Intl.Locale) {
    let a = os.get(e);
    return a || (a = new Intl.Locale(e).maximize().region, a && os.set(e, a)), a;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function yi(e) {
  let t = gi(e);
  return t && vi[t] || 0;
}
function Wt(e) {
  e = Te(e, new Nt());
  let t = co(e.era, e.year);
  return tl(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function tl(e, t, a, n, o, l, r) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, l, r), i.setUTCFullYear(e, t - 1, a), i.getTime();
}
function Kn(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === Dt()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: l, minute: r, second: i } = al(e, t);
  return tl(a, n, o, l, r, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const ss = /* @__PURE__ */ new Map();
function al(e, t) {
  let a = ss.get(t);
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
  }), ss.set(t, a));
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
const ls = 864e5;
function bi(e, t, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((l) => _i(e, t, l));
}
function _i(e, t, a) {
  let n = al(a, t);
  return e.year === n.year && e.month === n.month && e.day === n.day && e.hour === n.hour && e.minute === n.minute && e.second === n.second;
}
function at(e, t, a = "compatible") {
  let n = Kt(e);
  if (t === "UTC") return Wt(n);
  if (t === Dt() && a === "compatible") {
    n = Te(n, new Nt());
    let d = /* @__PURE__ */ new Date(), c = co(n.era, n.year);
    return d.setFullYear(c, n.month - 1, n.day), d.setHours(n.hour, n.minute, n.second, n.millisecond), d.getTime();
  }
  let o = Wt(n), l = Kn(o - ls, t), r = Kn(o + ls, t), i = bi(n, t, o - l, o - r);
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
function nl(e, t, a = "compatible") {
  return new Date(at(e, t, a));
}
function nt(e, t) {
  let a = Kn(e, t), n = new Date(e + a), o = n.getUTCFullYear(), l = n.getUTCMonth() + 1, r = n.getUTCDate(), i = n.getUTCHours(), d = n.getUTCMinutes(), c = n.getUTCSeconds(), u = n.getUTCMilliseconds();
  return new jt(o, l, r, t, a, i, d, c, u);
}
function wi(e) {
  return new Ut(e.calendar, e.era, e.year, e.month, e.day);
}
function Kt(e, t) {
  let a = 0, n = 0, o = 0, l = 0;
  if ("timeZone" in e) ({ hour: a, minute: n, second: o, millisecond: l } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: a, minute: n, second: o, millisecond: l } = t), new Ht(e.calendar, e.era, e.year, e.month, e.day, a, n, o, l);
}
function Te(e, t) {
  if (e.calendar.identifier === t.identifier) return e;
  let a = t.fromJulianDay(e.calendar.toJulianDay(e)), n = e.copy();
  return n.calendar = t, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, kt(n), n;
}
function xi(e, t, a) {
  if (e instanceof jt)
    return e.timeZone === t ? e : $i(e, t);
  let n = at(e, t, a);
  return nt(n, t);
}
function Ci(e) {
  let t = Wt(e) - e.offset;
  return new Date(t);
}
function $i(e, t) {
  let a = Wt(e) - e.offset;
  return Te(nt(a, t), e.calendar);
}
const fa = 36e5;
function ln(e, t) {
  let a = e.copy(), n = "hour" in a ? Pi(a, t) : 0;
  Un(a, t.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e), a.month += t.months || 0, Hn(a), ol(a), a.day += (t.weeks || 0) * 7, a.day += t.days || 0, a.day += n, ki(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
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
function Un(e, t) {
  var a, n;
  !((a = (n = e.calendar).isInverseEra) === null || a === void 0) && a.call(n, e) && (t = -t), e.year += t;
}
function Hn(e) {
  for (; e.month < 1; )
    Un(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, Un(e, 1);
}
function ki(e) {
  for (; e.day < 1; )
    e.month--, Hn(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, Hn(e);
}
function ol(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function kt(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), ol(e);
}
function sl(e) {
  let t = {};
  for (let a in e) typeof e[a] == "number" && (t[a] = -e[a]);
  return t;
}
function ll(e, t) {
  return ln(e, sl(t));
}
function po(e, t) {
  let a = e.copy();
  return t.era != null && (a.era = t.era), t.year != null && (a.year = t.year), t.month != null && (a.month = t.month), t.day != null && (a.day = t.day), kt(a), a;
}
function Za(e, t) {
  let a = e.copy();
  return t.hour != null && (a.hour = t.hour), t.minute != null && (a.minute = t.minute), t.second != null && (a.second = t.second), t.millisecond != null && (a.millisecond = t.millisecond), Di(a), a;
}
function Bi(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Ra(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Ra(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Ra(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = Ra(e.hour, 24), t;
}
function Di(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Ra(e, t) {
  let a = e % t;
  return a < 0 && (a += t), a;
}
function Pi(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, Bi(e);
}
function fo(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "era": {
      let i = e.calendar.getEras(), d = i.indexOf(e.era);
      if (d < 0) throw new Error("Invalid era: " + e.era);
      d = ot(d, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[d], kt(o);
      break;
    }
    case "year":
      var l, r;
      !((l = (r = o.calendar).isInverseEra) === null || l === void 0) && l.call(r, o) && (a = -a), o.year = ot(e.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, e);
      break;
    case "month":
      o.month = ot(e.month, a, 1, e.calendar.getMonthsInYear(e), n == null ? void 0 : n.round);
      break;
    case "day":
      o.day = ot(e.day, a, 1, e.calendar.getDaysInMonth(e), n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(o), kt(o), o;
}
function rl(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "hour": {
      let l = e.hour, r = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let d = l >= 12;
        r = d ? 12 : 0, i = d ? 23 : 11;
      }
      o.hour = ot(l, a, r, i, n == null ? void 0 : n.round);
      break;
    }
    case "minute":
      o.minute = ot(e.minute, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "second":
      o.second = ot(e.second, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "millisecond":
      o.millisecond = ot(e.millisecond, a, 0, 999, n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return o;
}
function ot(e, t, a, n, o = !1) {
  if (o) {
    e += Math.sign(t), e < a && (e = n);
    let l = Math.abs(t);
    t > 0 ? e = Math.ceil(e / l) * l : e = Math.floor(e / l) * l, e > n && (e = a);
  } else
    e += t, e < a ? e = n - (a - e - 1) : e > n && (e = a + (e - n - 1));
  return e;
}
function il(e, t) {
  let a;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let o = ln(Kt(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    a = at(o, e.timeZone);
  } else
    a = Wt(e) - e.offset;
  a += t.milliseconds || 0, a += (t.seconds || 0) * 1e3, a += (t.minutes || 0) * 6e4, a += (t.hours || 0) * 36e5;
  let n = nt(a, e.timeZone);
  return Te(n, e.calendar);
}
function Si(e, t) {
  return il(e, sl(t));
}
function Oi(e, t, a, n) {
  switch (t) {
    case "hour": {
      let o = 0, l = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let w = e.hour >= 12;
        o = w ? 12 : 0, l = w ? 23 : 11;
      }
      let r = Kt(e), i = Te(Za(r, {
        hour: o
      }), new Nt()), d = [
        at(i, e.timeZone, "earlier"),
        at(i, e.timeZone, "later")
      ].filter((w) => nt(w, e.timeZone).day === i.day)[0], c = Te(Za(r, {
        hour: l
      }), new Nt()), u = [
        at(c, e.timeZone, "earlier"),
        at(c, e.timeZone, "later")
      ].filter((w) => nt(w, e.timeZone).day === c.day).pop(), p = Wt(e) - e.offset, h = Math.floor(p / fa), m = p % fa;
      return p = ot(h, a, Math.floor(d / fa), Math.floor(u / fa), n == null ? void 0 : n.round) * fa + m, Te(nt(p, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return rl(e, t, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = fo(Kt(e), t, a, n), l = at(o, e.timeZone);
      return Te(nt(l, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function Ei(e, t, a) {
  let n = Kt(e), o = Za(po(n, t), t);
  if (o.compare(n) === 0) return e;
  let l = at(o, e.timeZone, a);
  return Te(nt(l, e.timeZone), e.calendar);
}
function Ti(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function dl(e) {
  let t = Te(e, new Nt());
  return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function ul(e) {
  return `${dl(e)}T${Ti(e)}`;
}
function Ai(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let a = Math.floor(e / 36e5), n = e % 36e5 / 6e4;
  return `${t}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function Mi(e) {
  return `${ul(e)}${Ai(e.offset)}[${e.timeZone}]`;
}
function Ii(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function vo(e, t, a) {
  Ii(e, t), t.set(e, a);
}
function mo(e) {
  let t = typeof e[0] == "object" ? e.shift() : new Nt(), a;
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
var Vi = /* @__PURE__ */ new WeakMap();
class Ut {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ut(this.calendar, this.era, this.year, this.month, this.day) : new Ut(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return ln(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return ll(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return po(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return fo(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return nl(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return dl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return el(this, t);
  }
  constructor(...t) {
    vo(this, Vi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, r] = mo(t);
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = r, kt(this);
  }
}
var Ri = /* @__PURE__ */ new WeakMap();
class Ht {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ht(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new Ht(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return ln(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return ll(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return po(Za(this, t), t);
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
        return fo(this, t, a, n);
      default:
        return rl(this, t, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, a) {
    return nl(this, t, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return ul(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let a = el(this, t);
    return a === 0 ? hi(this, Kt(t)) : a;
  }
  constructor(...t) {
    vo(this, Ri, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, r] = mo(t);
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = r, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, kt(this);
  }
}
var Fi = /* @__PURE__ */ new WeakMap();
class jt {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new jt(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new jt(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return il(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return Si(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, a) {
    return Ei(this, t, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return Oi(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return Ci(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return Mi(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - xi(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    vo(this, Fi, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, r] = mo(t), i = t.shift(), d = t.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = r, this.timeZone = i, this.offset = d, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, kt(this);
  }
}
let Pn = /* @__PURE__ */ new Map();
class et {
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
    return Ni() && (this.resolvedHourCycle || (this.resolvedHourCycle = Wi(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, a = {}) {
    this.formatter = cl(t, a), this.options = a;
  }
}
const Li = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function cl(e, t = {}) {
  if (typeof t.hour12 == "boolean" && zi()) {
    t = {
      ...t
    };
    let o = Li[String(t.hour12)][e.split("-")[0]], l = t.hour12 ? "h12" : "h23";
    t.hourCycle = o ?? l, delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((o, l) => o[0] < l[0] ? -1 : 1).join() : "");
  if (Pn.has(a)) return Pn.get(a);
  let n = new Intl.DateTimeFormat(e, t);
  return Pn.set(a, n), n;
}
let Sn = null;
function zi() {
  return Sn == null && (Sn = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Sn;
}
let On = null;
function Ni() {
  return On == null && (On = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), On;
}
function Wi(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = cl(e, {
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
function Ki(e, t) {
  const a = [];
  for (let n = 0; n < e.length; n += t)
    a.push(e.slice(n, n + t));
  return a;
}
function Re(e, t = Dt()) {
  return ho(e) ? e.toDate() : e.toDate(t);
}
function Ui(e) {
  return e instanceof Ht;
}
function ho(e) {
  return e instanceof jt;
}
function Hi(e) {
  return Ui(e) || ho(e);
}
function ba(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), a = e.getMonth() + 1;
    return new Date(t, a, 0).getDate();
  } else
    return e.set({ day: 100 }).day;
}
function ht(e, t) {
  return e.compare(t) < 0;
}
function ha(e, t) {
  return e.compare(t) > 0;
}
function ji(e, t) {
  return e.compare(t) <= 0;
}
function Gi(e, t) {
  return e.compare(t) >= 0;
}
function qi(e, t, a) {
  return Gi(e, t) && ji(e, a);
}
function Yi(e, t, a) {
  return ha(e, t) && ht(e, a);
}
function Xi(e, t, a) {
  const n = Js(e, a);
  return t > n ? e.subtract({ days: n + 7 - t }) : t === n ? e : e.subtract({ days: n - t });
}
function Zi(e, t, a) {
  const n = Js(e, a), o = t === 0 ? 6 : t - 1;
  return n === o ? e : n > o ? e.add({ days: 7 - n + o }) : e.add({ days: o - n });
}
function Ji(e, t, a, n) {
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
function rs(e, t) {
  const a = [];
  let n = e.add({ days: 1 });
  const o = t;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function En(e) {
  const { dateObj: t, weekStartsOn: a, fixedWeeks: n, locale: o } = e, l = ba(t), r = Array.from({ length: l }, (x, $) => t.set({ day: $ + 1 })), i = ya(t), d = ns(t), c = Xi(i, a, o), u = Zi(d, a, o), p = rs(c.subtract({ days: 1 }), i), h = rs(d, u.add({ days: 1 })), m = p.length + r.length + h.length;
  if (n && m < 42) {
    const x = 42 - m;
    let $ = h[h.length - 1];
    $ || ($ = ns(t));
    const P = Array.from({ length: x }, (k, O) => {
      const E = O + 1;
      return $.add({ days: E });
    });
    h.push(...P);
  }
  const w = p.concat(r, h), g = Ki(w, 7);
  return {
    value: t,
    cells: w,
    rows: g
  };
}
function Ct(e) {
  const { numberOfMonths: t, dateObj: a, ...n } = e, o = [];
  if (!t || t === 1)
    return o.push(
      En({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    En({
      ...n,
      dateObj: a
    })
  );
  for (let l = 1; l < t; l++) {
    const r = a.add({ months: l });
    o.push(
      En({
        ...n,
        dateObj: r
      })
    );
  }
  return o;
}
const Qi = ["top", "right", "bottom", "left"], gt = Math.min, De = Math.max, Ja = Math.round, Fa = Math.floor, He = (e) => ({
  x: e,
  y: e
}), ed = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, td = {
  start: "end",
  end: "start"
};
function jn(e, t, a) {
  return De(e, gt(t, a));
}
function rt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function it(e) {
  return e.split("-")[0];
}
function Jt(e) {
  return e.split("-")[1];
}
function go(e) {
  return e === "x" ? "y" : "x";
}
function yo(e) {
  return e === "y" ? "height" : "width";
}
function yt(e) {
  return ["top", "bottom"].includes(it(e)) ? "y" : "x";
}
function bo(e) {
  return go(yt(e));
}
function ad(e, t, a) {
  a === void 0 && (a = !1);
  const n = Jt(e), o = bo(e), l = yo(o);
  let r = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (r = Qa(r)), [r, Qa(r)];
}
function nd(e) {
  const t = Qa(e);
  return [Gn(e), t, Gn(t)];
}
function Gn(e) {
  return e.replace(/start|end/g, (t) => td[t]);
}
function od(e, t, a) {
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
function sd(e, t, a, n) {
  const o = Jt(e);
  let l = od(it(e), a === "start", n);
  return o && (l = l.map((r) => r + "-" + o), t && (l = l.concat(l.map(Gn)))), l;
}
function Qa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ed[t]);
}
function ld(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function pl(e) {
  return typeof e != "number" ? ld(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function en(e) {
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
  const l = yt(t), r = bo(t), i = yo(r), d = it(t), c = l === "y", u = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, h = n[i] / 2 - o[i] / 2;
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
  switch (Jt(t)) {
    case "start":
      m[r] -= h * (a && c ? -1 : 1);
      break;
    case "end":
      m[r] += h * (a && c ? -1 : 1);
      break;
  }
  return m;
}
const rd = async (e, t, a) => {
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
  } = is(c, n, d), h = n, m = {}, w = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: x,
      fn: $
    } = i[g], {
      x: P,
      y: k,
      data: O,
      reset: E
    } = await $({
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
      [x]: {
        ...m[x],
        ...O
      }
    }, E && w <= 50 && (w++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (c = E.rects === !0 ? await r.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: u,
      y: p
    } = is(c, h, d)), g = -1);
  }
  return {
    x: u,
    y: p,
    placement: h,
    strategy: o,
    middlewareData: m
  };
};
async function _a(e, t) {
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
    altBoundary: h = !1,
    padding: m = 0
  } = rt(t, e), w = pl(m), x = i[h ? p === "floating" ? "reference" : "floating" : p], $ = en(await l.getClippingRect({
    element: (a = await (l.isElement == null ? void 0 : l.isElement(x))) == null || a ? x : x.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: d
  })), P = p === "floating" ? {
    x: n,
    y: o,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, k = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(i.floating)), O = await (l.isElement == null ? void 0 : l.isElement(k)) ? await (l.getScale == null ? void 0 : l.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = en(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: P,
    offsetParent: k,
    strategy: d
  }) : P);
  return {
    top: ($.top - E.top + w.top) / O.y,
    bottom: (E.bottom - $.bottom + w.bottom) / O.y,
    left: ($.left - E.left + w.left) / O.x,
    right: (E.right - $.right + w.right) / O.x
  };
}
const id = (e) => ({
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
    } = rt(e, t) || {};
    if (c == null)
      return {};
    const p = pl(u), h = {
      x: a,
      y: n
    }, m = bo(o), w = yo(m), g = await r.getDimensions(c), x = m === "y", $ = x ? "top" : "left", P = x ? "bottom" : "right", k = x ? "clientHeight" : "clientWidth", O = l.reference[w] + l.reference[m] - h[m] - l.floating[w], E = h[m] - l.reference[m], V = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c));
    let A = V ? V[k] : 0;
    (!A || !await (r.isElement == null ? void 0 : r.isElement(V))) && (A = i.floating[k] || l.floating[w]);
    const W = O / 2 - E / 2, N = A / 2 - g[w] / 2 - 1, B = gt(p[$], N), I = gt(p[P], N), R = B, q = A - g[w] - I, G = A / 2 - g[w] / 2 + W, K = jn(R, G, q), X = !d.arrow && Jt(o) != null && G !== K && l.reference[w] / 2 - (G < R ? B : I) - g[w] / 2 < 0, le = X ? G < R ? G - R : G - q : 0;
    return {
      [m]: h[m] + le,
      data: {
        [m]: K,
        centerOffset: G - K - le,
        ...X && {
          alignmentOffset: le
        }
      },
      reset: X
    };
  }
}), dd = function(e) {
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
        fallbackPlacements: h,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: g = !0,
        ...x
      } = rt(e, t);
      if ((a = l.arrow) != null && a.alignmentOffset)
        return {};
      const $ = it(o), P = yt(i), k = it(i) === i, O = await (d.isRTL == null ? void 0 : d.isRTL(c.floating)), E = h || (k || !g ? [Qa(i)] : nd(i)), V = w !== "none";
      !h && V && E.push(...sd(i, g, w, O));
      const A = [i, ...E], W = await _a(t, x), N = [];
      let B = ((n = l.flip) == null ? void 0 : n.overflows) || [];
      if (u && N.push(W[$]), p) {
        const G = ad(o, r, O);
        N.push(W[G[0]], W[G[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: N
      }], !N.every((G) => G <= 0)) {
        var I, R;
        const G = (((I = l.flip) == null ? void 0 : I.index) || 0) + 1, K = A[G];
        if (K)
          return {
            data: {
              index: G,
              overflows: B
            },
            reset: {
              placement: K
            }
          };
        let X = (R = B.filter((le) => le.overflows[0] <= 0).sort((le, pe) => le.overflows[1] - pe.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!X)
          switch (m) {
            case "bestFit": {
              var q;
              const le = (q = B.filter((pe) => {
                if (V) {
                  const me = yt(pe.placement);
                  return me === P || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  me === "y";
                }
                return !0;
              }).map((pe) => [pe.placement, pe.overflows.filter((me) => me > 0).reduce((me, ke) => me + ke, 0)]).sort((pe, me) => pe[1] - me[1])[0]) == null ? void 0 : q[0];
              le && (X = le);
              break;
            }
            case "initialPlacement":
              X = i;
              break;
          }
        if (o !== X)
          return {
            reset: {
              placement: X
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
  return Qi.some((t) => e[t] >= 0);
}
const ud = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: a
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = rt(e, t);
      switch (n) {
        case "referenceHidden": {
          const l = await _a(t, {
            ...o,
            elementContext: "reference"
          }), r = ds(l, a.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: us(r)
            }
          };
        }
        case "escaped": {
          const l = await _a(t, {
            ...o,
            altBoundary: !0
          }), r = ds(l, a.floating);
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
async function cd(e, t) {
  const {
    placement: a,
    platform: n,
    elements: o
  } = e, l = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), r = it(a), i = Jt(a), d = yt(a) === "y", c = ["left", "top"].includes(r) ? -1 : 1, u = l && d ? -1 : 1, p = rt(t, e);
  let {
    mainAxis: h,
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
    x: m * u,
    y: h * c
  } : {
    x: h * c,
    y: m * u
  };
}
const pd = function(e) {
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
      } = t, d = await cd(t, e);
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
}, fd = function(e) {
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
          fn: (x) => {
            let {
              x: $,
              y: P
            } = x;
            return {
              x: $,
              y: P
            };
          }
        },
        ...d
      } = rt(e, t), c = {
        x: a,
        y: n
      }, u = await _a(t, d), p = yt(it(o)), h = go(p);
      let m = c[h], w = c[p];
      if (l) {
        const x = h === "y" ? "top" : "left", $ = h === "y" ? "bottom" : "right", P = m + u[x], k = m - u[$];
        m = jn(P, m, k);
      }
      if (r) {
        const x = p === "y" ? "top" : "left", $ = p === "y" ? "bottom" : "right", P = w + u[x], k = w - u[$];
        w = jn(P, w, k);
      }
      const g = i.fn({
        ...t,
        [h]: m,
        [p]: w
      });
      return {
        ...g,
        data: {
          x: g.x - a,
          y: g.y - n,
          enabled: {
            [h]: l,
            [p]: r
          }
        }
      };
    }
  };
}, vd = function(e) {
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
      } = rt(e, t), u = {
        x: a,
        y: n
      }, p = yt(o), h = go(p);
      let m = u[h], w = u[p];
      const g = rt(i, t), x = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (d) {
        const k = h === "y" ? "height" : "width", O = l.reference[h] - l.floating[k] + x.mainAxis, E = l.reference[h] + l.reference[k] - x.mainAxis;
        m < O ? m = O : m > E && (m = E);
      }
      if (c) {
        var $, P;
        const k = h === "y" ? "width" : "height", O = ["top", "left"].includes(it(o)), E = l.reference[p] - l.floating[k] + (O && (($ = r.offset) == null ? void 0 : $[p]) || 0) + (O ? 0 : x.crossAxis), V = l.reference[p] + l.reference[k] + (O ? 0 : ((P = r.offset) == null ? void 0 : P[p]) || 0) - (O ? x.crossAxis : 0);
        w < E ? w = E : w > V && (w = V);
      }
      return {
        [h]: m,
        [p]: w
      };
    }
  };
}, md = function(e) {
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
      } = rt(e, t), u = await _a(t, c), p = it(o), h = Jt(o), m = yt(o) === "y", {
        width: w,
        height: g
      } = l.floating;
      let x, $;
      p === "top" || p === "bottom" ? (x = p, $ = h === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : ($ = p, x = h === "end" ? "top" : "bottom");
      const P = g - u.top - u.bottom, k = w - u.left - u.right, O = gt(g - u[x], P), E = gt(w - u[$], k), V = !t.middlewareData.shift;
      let A = O, W = E;
      if ((a = t.middlewareData.shift) != null && a.enabled.x && (W = k), (n = t.middlewareData.shift) != null && n.enabled.y && (A = P), V && !h) {
        const B = De(u.left, 0), I = De(u.right, 0), R = De(u.top, 0), q = De(u.bottom, 0);
        m ? W = w - 2 * (B !== 0 || I !== 0 ? B + I : De(u.left, u.right)) : A = g - 2 * (R !== 0 || q !== 0 ? R + q : De(u.top, u.bottom));
      }
      await d({
        ...t,
        availableWidth: W,
        availableHeight: A
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
function rn() {
  return typeof window < "u";
}
function Pt(e) {
  return _o(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qe(e) {
  var t;
  return (t = (_o(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function _o(e) {
  return rn() ? e instanceof Node || e instanceof Se(e).Node : !1;
}
function Le(e) {
  return rn() ? e instanceof Element || e instanceof Se(e).Element : !1;
}
function je(e) {
  return rn() ? e instanceof HTMLElement || e instanceof Se(e).HTMLElement : !1;
}
function cs(e) {
  return !rn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Se(e).ShadowRoot;
}
function Ba(e) {
  const {
    overflow: t,
    overflowX: a,
    overflowY: n,
    display: o
  } = ze(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + a) && !["inline", "contents"].includes(o);
}
function hd(e) {
  return ["table", "td", "th"].includes(Pt(e));
}
function dn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function wo(e) {
  const t = xo(), a = Le(e) ? ze(e) : e;
  return a.transform !== "none" || a.perspective !== "none" || (a.containerType ? a.containerType !== "normal" : !1) || !t && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !t && (a.filter ? a.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function gd(e) {
  let t = bt(e);
  for (; je(t) && !Gt(t); ) {
    if (wo(t))
      return t;
    if (dn(t))
      return null;
    t = bt(t);
  }
  return null;
}
function xo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Gt(e) {
  return ["html", "body", "#document"].includes(Pt(e));
}
function ze(e) {
  return Se(e).getComputedStyle(e);
}
function un(e) {
  return Le(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function bt(e) {
  if (Pt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    cs(e) && e.host || // Fallback.
    qe(e)
  );
  return cs(t) ? t.host : t;
}
function fl(e) {
  const t = bt(e);
  return Gt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : je(t) && Ba(t) ? t : fl(t);
}
function wa(e, t, a) {
  var n;
  t === void 0 && (t = []), a === void 0 && (a = !0);
  const o = fl(e), l = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Se(o);
  if (l) {
    const i = qn(r);
    return t.concat(r, r.visualViewport || [], Ba(o) ? o : [], i && a ? wa(i) : []);
  }
  return t.concat(o, wa(o, [], a));
}
function qn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function vl(e) {
  const t = ze(e);
  let a = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = je(e), l = o ? e.offsetWidth : a, r = o ? e.offsetHeight : n, i = Ja(a) !== l || Ja(n) !== r;
  return i && (a = l, n = r), {
    width: a,
    height: n,
    $: i
  };
}
function Co(e) {
  return Le(e) ? e : e.contextElement;
}
function Lt(e) {
  const t = Co(e);
  if (!je(t))
    return He(1);
  const a = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: l
  } = vl(t);
  let r = (l ? Ja(a.width) : a.width) / n, i = (l ? Ja(a.height) : a.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: r,
    y: i
  };
}
const yd = /* @__PURE__ */ He(0);
function ml(e) {
  const t = Se(e);
  return !xo() || !t.visualViewport ? yd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function bd(e, t, a) {
  return t === void 0 && (t = !1), !a || t && a !== Se(e) ? !1 : t;
}
function Bt(e, t, a, n) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const o = e.getBoundingClientRect(), l = Co(e);
  let r = He(1);
  t && (n ? Le(n) && (r = Lt(n)) : r = Lt(e));
  const i = bd(l, a, n) ? ml(l) : He(0);
  let d = (o.left + i.x) / r.x, c = (o.top + i.y) / r.y, u = o.width / r.x, p = o.height / r.y;
  if (l) {
    const h = Se(l), m = n && Le(n) ? Se(n) : n;
    let w = h, g = qn(w);
    for (; g && n && m !== w; ) {
      const x = Lt(g), $ = g.getBoundingClientRect(), P = ze(g), k = $.left + (g.clientLeft + parseFloat(P.paddingLeft)) * x.x, O = $.top + (g.clientTop + parseFloat(P.paddingTop)) * x.y;
      d *= x.x, c *= x.y, u *= x.x, p *= x.y, d += k, c += O, w = Se(g), g = qn(w);
    }
  }
  return en({
    width: u,
    height: p,
    x: d,
    y: c
  });
}
function $o(e, t) {
  const a = un(e).scrollLeft;
  return t ? t.left + a : Bt(qe(e)).left + a;
}
function hl(e, t, a) {
  a === void 0 && (a = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (a ? 0 : (
    // RTL <body> scrollbar.
    $o(e, n)
  )), l = n.top + t.scrollTop;
  return {
    x: o,
    y: l
  };
}
function _d(e) {
  let {
    elements: t,
    rect: a,
    offsetParent: n,
    strategy: o
  } = e;
  const l = o === "fixed", r = qe(n), i = t ? dn(t.floating) : !1;
  if (n === r || i && l)
    return a;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = He(1);
  const u = He(0), p = je(n);
  if ((p || !p && !l) && ((Pt(n) !== "body" || Ba(r)) && (d = un(n)), je(n))) {
    const m = Bt(n);
    c = Lt(n), u.x = m.x + n.clientLeft, u.y = m.y + n.clientTop;
  }
  const h = r && !p && !l ? hl(r, d, !0) : He(0);
  return {
    width: a.width * c.x,
    height: a.height * c.y,
    x: a.x * c.x - d.scrollLeft * c.x + u.x + h.x,
    y: a.y * c.y - d.scrollTop * c.y + u.y + h.y
  };
}
function wd(e) {
  return Array.from(e.getClientRects());
}
function xd(e) {
  const t = qe(e), a = un(e), n = e.ownerDocument.body, o = De(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), l = De(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -a.scrollLeft + $o(e);
  const i = -a.scrollTop;
  return ze(n).direction === "rtl" && (r += De(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: l,
    x: r,
    y: i
  };
}
function Cd(e, t) {
  const a = Se(e), n = qe(e), o = a.visualViewport;
  let l = n.clientWidth, r = n.clientHeight, i = 0, d = 0;
  if (o) {
    l = o.width, r = o.height;
    const c = xo();
    (!c || c && t === "fixed") && (i = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: l,
    height: r,
    x: i,
    y: d
  };
}
function $d(e, t) {
  const a = Bt(e, !0, t === "fixed"), n = a.top + e.clientTop, o = a.left + e.clientLeft, l = je(e) ? Lt(e) : He(1), r = e.clientWidth * l.x, i = e.clientHeight * l.y, d = o * l.x, c = n * l.y;
  return {
    width: r,
    height: i,
    x: d,
    y: c
  };
}
function ps(e, t, a) {
  let n;
  if (t === "viewport")
    n = Cd(e, a);
  else if (t === "document")
    n = xd(qe(e));
  else if (Le(t))
    n = $d(t, a);
  else {
    const o = ml(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return en(n);
}
function gl(e, t) {
  const a = bt(e);
  return a === t || !Le(a) || Gt(a) ? !1 : ze(a).position === "fixed" || gl(a, t);
}
function kd(e, t) {
  const a = t.get(e);
  if (a)
    return a;
  let n = wa(e, [], !1).filter((i) => Le(i) && Pt(i) !== "body"), o = null;
  const l = ze(e).position === "fixed";
  let r = l ? bt(e) : e;
  for (; Le(r) && !Gt(r); ) {
    const i = ze(r), d = wo(r);
    !d && i.position === "fixed" && (o = null), (l ? !d && !o : !d && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ba(r) && !d && gl(e, r)) ? n = n.filter((u) => u !== r) : o = i, r = bt(r);
  }
  return t.set(e, n), n;
}
function Bd(e) {
  let {
    element: t,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = e;
  const r = [...a === "clippingAncestors" ? dn(t) ? [] : kd(t, this._c) : [].concat(a), n], i = r[0], d = r.reduce((c, u) => {
    const p = ps(t, u, o);
    return c.top = De(p.top, c.top), c.right = gt(p.right, c.right), c.bottom = gt(p.bottom, c.bottom), c.left = De(p.left, c.left), c;
  }, ps(t, i, o));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function Dd(e) {
  const {
    width: t,
    height: a
  } = vl(e);
  return {
    width: t,
    height: a
  };
}
function Pd(e, t, a) {
  const n = je(t), o = qe(t), l = a === "fixed", r = Bt(e, !0, l, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = He(0);
  if (n || !n && !l)
    if ((Pt(t) !== "body" || Ba(o)) && (i = un(t)), n) {
      const h = Bt(t, !0, l, t);
      d.x = h.x + t.clientLeft, d.y = h.y + t.clientTop;
    } else o && (d.x = $o(o));
  const c = o && !n && !l ? hl(o, i) : He(0), u = r.left + i.scrollLeft - d.x - c.x, p = r.top + i.scrollTop - d.y - c.y;
  return {
    x: u,
    y: p,
    width: r.width,
    height: r.height
  };
}
function Tn(e) {
  return ze(e).position === "static";
}
function fs(e, t) {
  if (!je(e) || ze(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let a = e.offsetParent;
  return qe(e) === a && (a = a.ownerDocument.body), a;
}
function yl(e, t) {
  const a = Se(e);
  if (dn(e))
    return a;
  if (!je(e)) {
    let o = bt(e);
    for (; o && !Gt(o); ) {
      if (Le(o) && !Tn(o))
        return o;
      o = bt(o);
    }
    return a;
  }
  let n = fs(e, t);
  for (; n && hd(n) && Tn(n); )
    n = fs(n, t);
  return n && Gt(n) && Tn(n) && !wo(n) ? a : n || gd(e) || a;
}
const Sd = async function(e) {
  const t = this.getOffsetParent || yl, a = this.getDimensions, n = await a(e.floating);
  return {
    reference: Pd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Od(e) {
  return ze(e).direction === "rtl";
}
const Ed = {
  convertOffsetParentRelativeRectToViewportRelativeRect: _d,
  getDocumentElement: qe,
  getClippingRect: Bd,
  getOffsetParent: yl,
  getElementRects: Sd,
  getClientRects: wd,
  getDimensions: Dd,
  getScale: Lt,
  isElement: Le,
  isRTL: Od
};
function Td(e, t) {
  let a = null, n;
  const o = qe(e);
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
      height: h
    } = e.getBoundingClientRect();
    if (i || t(), !p || !h)
      return;
    const m = Fa(u), w = Fa(o.clientWidth - (c + p)), g = Fa(o.clientHeight - (u + h)), x = Fa(c), P = {
      rootMargin: -m + "px " + -w + "px " + -g + "px " + -x + "px",
      threshold: De(0, gt(1, d)) || 1
    };
    let k = !0;
    function O(E) {
      const V = E[0].intersectionRatio;
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
        ...P,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      a = new IntersectionObserver(O, P);
    }
    a.observe(e);
  }
  return r(!0), l;
}
function Ad(e, t, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: l = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, c = Co(e), u = o || l ? [...c ? wa(c) : [], ...wa(t)] : [];
  u.forEach(($) => {
    o && $.addEventListener("scroll", a, {
      passive: !0
    }), l && $.addEventListener("resize", a);
  });
  const p = c && i ? Td(c, a) : null;
  let h = -1, m = null;
  r && (m = new ResizeObserver(($) => {
    let [P] = $;
    P && P.target === c && m && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var k;
      (k = m) == null || k.observe(t);
    })), a();
  }), c && !d && m.observe(c), m.observe(t));
  let w, g = d ? Bt(e) : null;
  d && x();
  function x() {
    const $ = Bt(e);
    g && ($.x !== g.x || $.y !== g.y || $.width !== g.width || $.height !== g.height) && a(), g = $, w = requestAnimationFrame(x);
  }
  return a(), () => {
    var $;
    u.forEach((P) => {
      o && P.removeEventListener("scroll", a), l && P.removeEventListener("resize", a);
    }), p == null || p(), ($ = m) == null || $.disconnect(), m = null, d && cancelAnimationFrame(w);
  };
}
const Md = pd, Id = fd, vs = dd, Vd = md, Rd = ud, Fd = id, Ld = vd, zd = (e, t, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Ed,
    ...a
  }, l = {
    ...o.platform,
    _c: n
  };
  return rd(e, t, {
    ...o,
    platform: l
  });
};
function Nd(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Yn(e) {
  if (Nd(e)) {
    const t = e.$el;
    return _o(t) && Pt(t) === "#comment" ? null : t;
  }
  return e;
}
function Ft(e) {
  return typeof e == "function" ? e() : s(e);
}
function Wd(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const a = Yn(Ft(e.element));
      return a == null ? {} : Fd({
        element: a,
        padding: e.padding
      }).fn(t);
    }
  };
}
function bl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ms(e, t) {
  const a = bl(e);
  return Math.round(t * a) / a;
}
function Kd(e, t, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = C(() => {
    var A;
    return (A = Ft(a.open)) != null ? A : !0;
  }), l = C(() => Ft(a.middleware)), r = C(() => {
    var A;
    return (A = Ft(a.placement)) != null ? A : "bottom";
  }), i = C(() => {
    var A;
    return (A = Ft(a.strategy)) != null ? A : "absolute";
  }), d = C(() => {
    var A;
    return (A = Ft(a.transform)) != null ? A : !0;
  }), c = C(() => Yn(e.value)), u = C(() => Yn(t.value)), p = T(0), h = T(0), m = T(i.value), w = T(r.value), g = so({}), x = T(!1), $ = C(() => {
    const A = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return A;
    const W = ms(u.value, p.value), N = ms(u.value, h.value);
    return d.value ? {
      ...A,
      transform: "translate(" + W + "px, " + N + "px)",
      ...bl(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: W + "px",
      top: N + "px"
    };
  });
  let P;
  function k() {
    if (c.value == null || u.value == null)
      return;
    const A = o.value;
    zd(c.value, u.value, {
      middleware: l.value,
      placement: r.value,
      strategy: i.value
    }).then((W) => {
      p.value = W.x, h.value = W.y, m.value = W.strategy, w.value = W.placement, g.value = W.middlewareData, x.value = A !== !1;
    });
  }
  function O() {
    typeof P == "function" && (P(), P = void 0);
  }
  function E() {
    if (O(), n === void 0) {
      k();
      return;
    }
    if (c.value != null && u.value != null) {
      P = n(c.value, u.value, k);
      return;
    }
  }
  function V() {
    o.value || (x.value = !1);
  }
  return ee([l, r, i, o], k, {
    flush: "sync"
  }), ee([c, u], E, {
    flush: "sync"
  }), ee(o, V, {
    flush: "sync"
  }), lo() && ro(O), {
    x: Vt(p),
    y: Vt(h),
    strategy: Vt(m),
    placement: Vt(w),
    middlewareData: Vt(g),
    isPositioned: Vt(x),
    floatingStyles: $,
    update: k
  };
}
function ne(e, t) {
  const a = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(a);
  return [(o) => {
    const l = Ns(n, o);
    if (l || l === null)
      return l;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (Ws(n, o), o)];
}
function ko(e, t, a) {
  const n = a.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function tn(e, t = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(e, t), a);
}
function Ud(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hd = function e(t, a) {
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
const $t = /* @__PURE__ */ Ud(Hd);
function Ya(e) {
  return e == null;
}
function _l(e) {
  const { defaultValue: t, defaultPlaceholder: a, granularity: n = "day" } = e;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (a)
    return a.copy();
  const o = /* @__PURE__ */ new Date(), l = o.getFullYear(), r = o.getMonth() + 1, i = o.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new Ht(l, r, i, 0, 0, 0) : new Ut(l, r, i);
}
function wl(e) {
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
function jd(e, t) {
  var a;
  const n = so();
  return ge(() => {
    n.value = e();
  }, {
    ...t,
    flush: (a = void 0) != null ? a : "sync"
  }), ka(n);
}
function St(e) {
  return lo() ? (ro(e), !0) : !1;
}
function Gd() {
  const e = /* @__PURE__ */ new Set(), t = (a) => {
    e.delete(a);
  };
  return {
    on: (a) => {
      e.add(a);
      const n = () => t(a);
      return St(n), {
        off: n
      };
    },
    off: t,
    trigger: (...a) => Promise.all(Array.from(e).map((n) => n(...a)))
  };
}
function qd(e) {
  let t = !1, a;
  const n = Ks(!0);
  return (...o) => (t || (a = n.run(() => e(...o)), t = !0), a);
}
function xl(e) {
  let t = 0, a, n;
  const o = () => {
    t -= 1, n && t <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...l) => (t += 1, a || (n = Ks(!0), a = n.run(() => e(...l))), St(o), a);
}
function lt(e) {
  return typeof e == "function" ? e() : s(e);
}
const Ye = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Yd = (e) => typeof e < "u", Xd = (e) => e != null, Zd = Object.prototype.toString, Jd = (e) => Zd.call(e) === "[object Object]", Cl = () => {
}, hs = /* @__PURE__ */ Qd();
function Qd() {
  var e, t;
  return Ye && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function eu(e) {
  return Ge();
}
function $l(e, t = 1e4) {
  return Us((a, n) => {
    let o = lt(e), l;
    const r = () => setTimeout(() => {
      o = lt(e), n();
    }, lt(t));
    return St(() => {
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
function tu(e, t) {
  eu() && uo(e, t);
}
function Bo(e, t, a = {}) {
  const {
    immediate: n = !0
  } = a, o = T(!1);
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
    }, lt(t));
  }
  return n && (o.value = !0, Ye && d()), St(i), {
    isPending: ka(o),
    start: d,
    stop: i
  };
}
function au(e = 1e3, t = {}) {
  const {
    controls: a = !1,
    callback: n
  } = t, o = Bo(
    n ?? Cl,
    e,
    t
  ), l = C(() => !o.isPending.value);
  return a ? {
    ready: l,
    ...o
  } : l;
}
function Ae(e) {
  var t;
  const a = lt(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const cn = Ye ? window : void 0;
function qt(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = cn) : [t, a, n, o] = e, !t)
    return Cl;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const l = [], r = () => {
    l.forEach((u) => u()), l.length = 0;
  }, i = (u, p, h, m) => (u.addEventListener(p, h, m), () => u.removeEventListener(p, h, m)), d = ee(
    () => [Ae(t), lt(o)],
    ([u, p]) => {
      if (r(), !u)
        return;
      const h = Jd(p) ? { ...p } : p;
      l.push(
        ...a.flatMap((m) => n.map((w) => i(u, m, w, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), r();
  };
  return St(c), c;
}
function nu(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Do(...e) {
  let t, a, n = {};
  e.length === 3 ? (t = e[0], a = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, a = e[0], n = e[1]) : (t = e[0], a = e[1]) : (t = !0, a = e[0]);
  const {
    target: o = cn,
    eventName: l = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, d = nu(t);
  return qt(o, l, (c) => {
    c.repeat && lt(i) || d(c) && a(c);
  }, r);
}
function Po() {
  const e = T(!1), t = Ge();
  return t && de(() => {
    e.value = !0;
  }, t), e;
}
function ou(e) {
  const t = Po();
  return C(() => (t.value, !!e()));
}
function su(e, t, a = {}) {
  const { window: n = cn, ...o } = a;
  let l;
  const r = ou(() => n && "MutationObserver" in n), i = () => {
    l && (l.disconnect(), l = void 0);
  }, d = C(() => {
    const h = lt(e), m = (Array.isArray(h) ? h : [h]).map(Ae).filter(Xd);
    return new Set(m);
  }), c = ee(
    () => d.value,
    (h) => {
      i(), r.value && h.size && (l = new MutationObserver(t), h.forEach((m) => l.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), u = () => l == null ? void 0 : l.takeRecords(), p = () => {
    i(), c();
  };
  return St(p), {
    isSupported: r,
    stop: p,
    takeRecords: u
  };
}
function kl(e, t = {}) {
  const {
    immediate: a = !0,
    fpsLimit: n = void 0,
    window: o = cn
  } = t, l = T(!1), r = n ? 1e3 / n : null;
  let i = 0, d = null;
  function c(h) {
    if (!l.value || !o)
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
    !l.value && o && (l.value = !0, i = 0, d = o.requestAnimationFrame(c));
  }
  function p() {
    l.value = !1, d != null && o && (o.cancelAnimationFrame(d), d = null);
  }
  return a && u(), St(p), {
    isActive: ka(l),
    pause: p,
    resume: u
  };
}
function lu(e) {
  return JSON.parse(JSON.stringify(e));
}
function ue(e, t, a, n = {}) {
  var o, l, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: p,
    shouldEmit: h
  } = n, m = Ge(), w = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (l = m == null ? void 0 : m.proxy) == null ? void 0 : l.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let g = c;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const x = (k) => i ? typeof i == "function" ? i(k) : lu(k) : k, $ = () => Yd(e[t]) ? x(e[t]) : p, P = (k) => {
    h ? h(k) && w(g, k) : w(g, k);
  };
  if (d) {
    const k = $(), O = T(k);
    let E = !1;
    return ee(
      () => e[t],
      (V) => {
        E || (E = !0, O.value = x(V), oe(() => E = !1));
      }
    ), ee(
      O,
      (V) => {
        !E && (V !== e[t] || u) && P(V);
      },
      { deep: u }
    ), O;
  } else
    return C({
      get() {
        return $();
      },
      set(k) {
        P(k);
      }
    });
}
function pn(e) {
  return e ? e.flatMap((t) => t.type === Q ? pn(t.children) : [t]) : [];
}
const ru = ["INPUT", "TEXTAREA"];
function Bl(e, t, a, n = {}) {
  if (!t || n.enableIgnoredElement && ru.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: l = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = !0,
    dir: d = "ltr",
    preventScroll: c = !0,
    focus: u = !1
  } = n, [p, h, m, w, g, x] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], $ = m || w, P = p || h;
  if (!g && !x && (!$ && !P || o === "vertical" && P || o === "horizontal" && $))
    return null;
  const k = a ? Array.from(a.querySelectorAll(l)) : r;
  if (!k.length)
    return null;
  c && e.preventDefault();
  let O = null;
  return P || $ ? O = Dl(k, t, {
    goForward: $ ? w : d === "ltr" ? p : h,
    loop: i
  }) : g ? O = k.at(0) || null : x && (O = k.at(-1) || null), u && (O == null || O.focus()), O;
}
function Dl(e, t, a, n = e.length) {
  if (--n === 0)
    return null;
  const o = e.indexOf(t), l = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (l < 0 || l >= e.length))
    return null;
  const r = (l + e.length) % e.length, i = e[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Dl(
    e,
    i,
    a,
    n
  ) : i : null;
}
function An(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Xn(e, t, a = ".", n) {
  if (!An(t))
    return Xn(e, {}, a);
  const o = Object.assign({}, t);
  for (const l in e) {
    if (l === "__proto__" || l === "constructor")
      continue;
    const r = e[l];
    r != null && (Array.isArray(r) && Array.isArray(o[l]) ? o[l] = [...r, ...o[l]] : An(r) && An(o[l]) ? o[l] = Xn(
      r,
      o[l],
      (a ? `${a}.` : "") + l.toString()
    ) : o[l] = r);
  }
  return o;
}
function iu(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((a, n) => Xn(a, n, ""), {})
  );
}
const du = iu(), [fn, sb] = ne("ConfigProvider");
let uu = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", cu = (e = 21) => {
  let t = "", a = e;
  for (; a--; )
    t += uu[Math.random() * 64 | 0];
  return t;
};
const pu = xl(() => {
  const e = T(/* @__PURE__ */ new Map()), t = T(), a = C(() => {
    for (const r of e.value.values())
      if (r)
        return !0;
    return !1;
  }), n = fn({
    scrollBody: T(!0)
  });
  let o = null;
  const l = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", hs && (o == null || o()), t.value = void 0;
  };
  return ee(a, (r, i) => {
    var d;
    if (!Ye)
      return;
    if (!r) {
      i && l();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, u = { padding: c, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? du({
      padding: n.scrollBody.value.padding === !0 ? c : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? c : n.scrollBody.value.margin
    }, u) : u : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), hs && (o = qt(
      document,
      "touchmove",
      (h) => {
        var m;
        h.target === document.documentElement && (h.touches.length > 1 || (m = h.preventDefault) == null || m.call(h));
      },
      { passive: !1 }
    )), oe(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Da(e) {
  const t = cu(6), a = pu();
  a.value.set(t, e ?? !1);
  const n = C({
    get: () => a.value.get(t) ?? !1,
    set: (o) => a.value.set(t, o)
  });
  return tu(() => {
    a.value.delete(t);
  }), n;
}
const fu = "data-radix-vue-collection-item";
function Qt(e, t = fu) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = T([]);
    function l() {
      const r = Ae(n);
      return r ? o.value = Array.from(
        r.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return ti(() => {
      o.value = [];
    }), de(l), ai(l), ee(() => n == null ? void 0 : n.value, l, { immediate: !0 }), Ws(a, o), o;
  }, injectCollection: () => Ns(a, T([])) };
}
function vu(e) {
  const t = T(e);
  function a() {
    return t.value;
  }
  function n(g) {
    t.value = g;
  }
  function o(g, x) {
    return new et(t.value, x).format(g);
  }
  function l(g, x = !0) {
    return Hi(g) && x ? o(Re(g), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Re(g), {
      dateStyle: "long"
    });
  }
  function r(g, x = {}) {
    return new et(t.value, { month: "long", year: "numeric", ...x }).format(g);
  }
  function i(g, x = {}) {
    return new et(t.value, { month: "long", ...x }).format(g);
  }
  function d() {
    const g = Qs(Dt());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => ({ label: i(Re(g.set({ month: x }))), value: x }));
  }
  function c(g, x = {}) {
    return new et(t.value, { year: "numeric", ...x }).format(g);
  }
  function u(g, x) {
    return ho(g) ? new et(t.value, {
      ...x,
      timeZone: g.timeZone
    }).formatToParts(Re(g)) : new et(t.value, x).formatToParts(Re(g));
  }
  function p(g, x = "narrow") {
    return new et(t.value, { weekday: x }).format(g);
  }
  function h(g) {
    var x;
    return ((x = new et(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(g).find(($) => $.type === "dayPeriod")) == null ? void 0 : x.value) === "PM" ? "PM" : "AM";
  }
  const m = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function w(g, x, $ = {}) {
    const P = { ...m, ...$ }, k = u(g, P).find((O) => O.type === x);
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
    part: w,
    dayPeriod: h,
    selectedDate: l,
    dayOfWeek: p,
    getMonths: d
  };
}
function Xe(e) {
  const t = fn({
    dir: T("ltr")
  });
  return C(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function Ot(e) {
  const t = Ge(), a = t == null ? void 0 : t.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), a == null || a.forEach((o) => {
    n[Jr(Rs(o))] = (...l) => e(o, ...l);
  }), n;
}
let Mn = 0;
function So() {
  ge((e) => {
    if (!Ye)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? gs()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? gs()
    ), Mn++, e(() => {
      Mn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), Mn--;
    });
  });
}
function gs() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function Pa(e) {
  return C(() => {
    var t;
    return lt(e) ? !!((t = Ae(e)) != null && t.closest("form")) : !0;
  });
}
function se(e) {
  const t = Ge(), a = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, l) => {
    const r = (t == null ? void 0 : t.type.props[l]).default;
    return r !== void 0 && (o[l] = r), o;
  }, {}), n = Vs(e);
  return C(() => {
    const o = {}, l = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(l).forEach((r) => {
      o[Rs(r)] = l[r];
    }), Object.keys({ ...a, ...o }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function te(e, t) {
  const a = se(e), n = t ? Ot(t) : {};
  return C(() => ({
    ...a.value,
    ...n
  }));
}
function z() {
  const e = Ge(), t = T(), a = C(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = t.value) == null ? void 0 : r.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Ae(t);
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
function mu(e, t) {
  const a = $l(!1, 300), n = T(null), o = Gd();
  function l() {
    n.value = null, a.value = !1;
  }
  function r(i, d) {
    const c = i.currentTarget, u = { x: i.clientX, y: i.clientY }, p = hu(u, c.getBoundingClientRect()), h = gu(u, p), m = yu(d.getBoundingClientRect()), w = _u([...h, ...m]);
    n.value = w, a.value = !0;
  }
  return ge((i) => {
    if (e.value && t.value) {
      const d = (u) => r(u, t.value), c = (u) => r(u, e.value);
      e.value.addEventListener("pointerleave", d), t.value.addEventListener("pointerleave", c), i(() => {
        var u, p;
        (u = e.value) == null || u.removeEventListener("pointerleave", d), (p = t.value) == null || p.removeEventListener("pointerleave", c);
      });
    }
  }), ge((i) => {
    var d;
    if (n.value) {
      const c = (u) => {
        var p, h;
        if (!n.value)
          return;
        const m = u.target, w = { x: u.clientX, y: u.clientY }, g = ((p = e.value) == null ? void 0 : p.contains(m)) || ((h = t.value) == null ? void 0 : h.contains(m)), x = !bu(w, n.value), $ = m.hasAttribute("data-grace-area-trigger");
        g ? l() : (x || $) && (l(), o.trigger());
      };
      (d = e.value) == null || d.ownerDocument.addEventListener("pointermove", c), i(() => {
        var u;
        return (u = e.value) == null ? void 0 : u.ownerDocument.removeEventListener("pointermove", c);
      });
    }
  }), {
    isPointerInTransit: a,
    onPointerExit: o.on
  };
}
function hu(e, t) {
  const a = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), l = Math.abs(t.left - e.x);
  switch (Math.min(a, n, o, l)) {
    case l:
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
function gu(e, t, a = 5) {
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
function yu(e) {
  const { top: t, right: a, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: a, y: t },
    { x: a, y: n },
    { x: o, y: n }
  ];
}
function bu(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let l = 0, r = t.length - 1; l < t.length; r = l++) {
    const i = t[l].x, d = t[l].y, c = t[r].x, u = t[r].y;
    d > n != u > n && a < (c - i) * (n - d) / (u - d) + i && (o = !o);
  }
  return o;
}
function _u(e) {
  const t = e.slice();
  return t.sort((a, n) => a.x < n.x ? -1 : a.x > n.x ? 1 : a.y < n.y ? -1 : a.y > n.y ? 1 : 0), wu(t);
}
function wu(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (; t.length >= 2; ) {
      const l = t[t.length - 1], r = t[t.length - 2];
      if ((l.x - r.x) * (o.y - r.y) >= (l.y - r.y) * (o.x - r.x))
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
      const l = a[a.length - 1], r = a[a.length - 2];
      if ((l.x - r.x) * (o.y - r.y) >= (l.y - r.y) * (o.x - r.x))
        a.pop();
      else break;
    }
    a.push(o);
  }
  return a.pop(), t.length === 1 && a.length === 1 && t[0].x === a[0].x && t[0].y === a[0].y ? t : t.concat(a);
}
var xu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Rt = /* @__PURE__ */ new WeakMap(), La = /* @__PURE__ */ new WeakMap(), za = {}, In = 0, Pl = function(e) {
  return e && (e.host || Pl(e.parentNode));
}, Cu = function(e, t) {
  return t.map(function(a) {
    if (e.contains(a))
      return a;
    var n = Pl(a);
    return n && e.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, $u = function(e, t, a, n) {
  var o = Cu(t, Array.isArray(e) ? e : [e]);
  za[a] || (za[a] = /* @__PURE__ */ new WeakMap());
  var l = za[a], r = [], i = /* @__PURE__ */ new Set(), d = new Set(o), c = function(p) {
    !p || i.has(p) || (i.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var u = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(h) {
      if (i.has(h))
        u(h);
      else
        try {
          var m = h.getAttribute(n), w = m !== null && m !== "false", g = (Rt.get(h) || 0) + 1, x = (l.get(h) || 0) + 1;
          Rt.set(h, g), l.set(h, x), r.push(h), g === 1 && w && La.set(h, !0), x === 1 && h.setAttribute(a, "true"), w || h.setAttribute(n, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", h, $);
        }
    });
  };
  return u(t), i.clear(), In++, function() {
    r.forEach(function(p) {
      var h = Rt.get(p) - 1, m = l.get(p) - 1;
      Rt.set(p, h), l.set(p, m), h || (La.has(p) || p.removeAttribute(n), La.delete(p)), m || p.removeAttribute(a);
    }), In--, In || (Rt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), La = /* @__PURE__ */ new WeakMap(), za = {});
  };
}, ku = function(e, t, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = xu(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), $u(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function Sa(e) {
  let t;
  ee(() => Ae(e), (a) => {
    a ? t = ku(a) : t && t();
  }), _t(() => {
    t && t();
  });
}
let Bu = 0;
function ye(e, t = "radix") {
  const a = fn({ useId: void 0 });
  return Qo.useId ? `${t}-${Qo.useId()}` : a.useId ? `${t}-${a.useId()}` : `${t}-${++Bu}`;
}
function Sl(e) {
  const t = T(), a = C(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), n = C(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return de(() => {
    const o = Ae(e);
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
function Du(e, t) {
  const a = T(e);
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
function Oo(e) {
  const t = $l("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, n) => {
      var o, l;
      if (!(e != null && e.value) && !n)
        return;
      t.value = t.value + a;
      const r = (e == null ? void 0 : e.value) ?? n, i = document.activeElement, d = ((l = (o = r.find((h) => h === i)) == null ? void 0 : o.textContent) == null ? void 0 : l.trim()) ?? "", c = r.map((h) => {
        var m;
        return ((m = h.textContent) == null ? void 0 : m.trim()) ?? "";
      }), u = Su(c, t.value, d), p = r.find(
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
function Pu(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
function Su(e, t, a) {
  const n = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = a ? e.indexOf(a) : -1;
  let l = Pu(e, Math.max(o, 0));
  n.length === 1 && (l = l.filter((i) => i !== a));
  const r = l.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return r !== a ? r : void 0;
}
function Ol() {
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
const Eo = y({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const l = pn(a.default()), r = l.findIndex((u) => u.type !== Fs);
      if (r === -1)
        return l;
      const i = l[r];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? S(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const c = Gr(i, d);
      for (const u in d)
        u.startsWith("on") && (c.props || (c.props = {}), c.props[u] = d[u]);
      return l.length === 1 ? c : (l[r] = c, l);
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => Ue(n, t) : n !== "template" ? () => Ue(e.as, t, { default: a.default }) : () => Ue(Eo, t, { default: a.default });
  }
});
function Et() {
  const e = T(), t = C(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = e.value) == null ? void 0 : a.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : Ae(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [El, Ou] = ne("CollapsibleRoot"), Eu = /* @__PURE__ */ y({
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
    const n = e, o = ue(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = ue(n, "disabled");
    return Ou({
      contentId: "",
      disabled: l,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), t({ open: o }), z(), (r, i) => (f(), b(s(F), {
      as: r.as,
      "as-child": n.asChild,
      "data-state": s(o) ? "open" : "closed",
      "data-disabled": s(l) ? "" : void 0
    }, {
      default: v(() => [
        _(r.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), Tu = /* @__PURE__ */ y({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    z();
    const a = El();
    return (n, o) => {
      var l, r;
      return f(), b(s(F), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": t.asChild,
        "aria-controls": s(a).contentId,
        "aria-expanded": s(a).open.value,
        "data-state": s(a).open.value ? "open" : "closed",
        "data-disabled": (l = s(a).disabled) != null && l.value ? "" : void 0,
        disabled: (r = s(a).disabled) == null ? void 0 : r.value,
        onClick: s(a).onOpenToggle
      }, {
        default: v(() => [
          _(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Au(e, t) {
  const a = T({}), n = T("none"), o = e.value ? "mounted" : "unmounted", { state: l, dispatch: r } = Du(o, {
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
    if (Ye) {
      const w = new CustomEvent(h, { bubbles: !1, cancelable: !1 });
      (m = t.value) == null || m.dispatchEvent(w);
    }
  };
  ee(
    e,
    async (h, m) => {
      var w;
      const g = m !== h;
      if (await oe(), g) {
        const x = n.value, $ = Na(t.value);
        h ? (r("MOUNT"), i("enter"), $ === "none" && i("after-enter")) : $ === "none" || ((w = a.value) == null ? void 0 : w.display) === "none" ? (r("UNMOUNT"), i("leave"), i("after-leave")) : m && x !== $ ? (r("ANIMATION_OUT"), i("leave")) : (r("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (h) => {
    const m = Na(t.value), w = m.includes(
      h.animationName
    ), g = l.value === "mounted" ? "enter" : "leave";
    h.target === t.value && w && (i(`after-${g}`), r("ANIMATION_END")), h.target === t.value && m === "none" && r("ANIMATION_END");
  }, c = (h) => {
    h.target === t.value && (n.value = Na(t.value));
  }, u = ee(
    t,
    (h, m) => {
      h ? (a.value = getComputedStyle(h), h.addEventListener("animationstart", c), h.addEventListener("animationcancel", d), h.addEventListener("animationend", d)) : (r("ANIMATION_END"), m == null || m.removeEventListener("animationstart", c), m == null || m.removeEventListener("animationcancel", d), m == null || m.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), p = ee(l, () => {
    const h = Na(t.value);
    n.value = l.value === "mounted" ? h : "none";
  });
  return _t(() => {
    u(), p();
  }), {
    isPresent: C(
      () => ["mounted", "unmountSuspended"].includes(l.value)
    )
  };
}
function Na(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Oe = y({
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
    const { present: o, forceMount: l } = ce(e), r = T(), { isPresent: i } = Au(o, r);
    a({ present: i });
    let d = t.default({ present: i });
    d = pn(d || []);
    const c = Ge();
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
    return () => l.value || o.value || i.value ? Ue(t.default({ present: i })[0], {
      ref: (u) => {
        const p = Ae(u);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
}), Mu = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = El();
    a.contentId || (a.contentId = ye(void 0, "radix-vue-collapsible-content"));
    const n = T(), { forwardRef: o, currentElement: l } = z(), r = T(0), i = T(0), d = C(() => a.open.value), c = T(d.value), u = T();
    return ee(
      () => {
        var p;
        return [d.value, (p = n.value) == null ? void 0 : p.present];
      },
      async () => {
        await oe();
        const p = l.value;
        if (!p)
          return;
        u.value = u.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const h = p.getBoundingClientRect();
        i.value = h.height, r.value = h.width, c.value || (p.style.transitionDuration = u.value.transitionDuration, p.style.animationName = u.value.animationName);
      },
      {
        immediate: !0
      }
    ), de(() => {
      requestAnimationFrame(() => {
        c.value = !1;
      });
    }), (p, h) => (f(), b(s(Oe), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || s(a).open.value,
      "force-mount": !0
    }, {
      default: v(() => {
        var m, w;
        return [
          D(s(F), S(p.$attrs, {
            id: s(a).contentId,
            ref: s(o),
            "as-child": t.asChild,
            as: p.as,
            "data-state": s(a).open.value ? "open" : "closed",
            "data-disabled": (m = s(a).disabled) != null && m.value ? "" : void 0,
            hidden: !((w = n.value) != null && w.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${r.value}px`
            }
          }), {
            default: v(() => {
              var g;
              return [
                (g = n.value) != null && g.present ? _(p.$slots, "default", { key: 0 }) : Z("", !0)
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
function Tl({ type: e, defaultValue: t, modelValue: a }) {
  const n = a || t;
  if (Ya(e) && Ya(a) && Ya(t))
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
    const l = Array.isArray(a) || Array.isArray(t), r = a !== void 0 ? "modelValue" : "defaultValue", i = r === "modelValue" ? typeof a : typeof t;
    if (e === "single" && l)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "multiple";
    if (e === "multiple" && !l)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "single";
  }
  return o ? Array.isArray(n) ? "multiple" : "single" : e;
}
function Iu({ type: e, defaultValue: t, modelValue: a }) {
  return e || Tl({ type: e, defaultValue: t, modelValue: a });
}
function Vu({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function Ru(e, t) {
  const a = T(Iu(e)), n = ue(e, "modelValue", t, {
    defaultValue: Vu(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  ee(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const r = Tl(e);
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
        const d = i.findIndex((c) => c === r);
        i.splice(d, 1);
      } else
        i.push(r);
      n.value = i;
    }
  }
  const l = C(() => a.value === "single");
  return {
    modelValue: n,
    type: a,
    changeModelValue: o,
    isSingle: l
  };
}
const [vn, Fu] = ne("AccordionRoot"), Lu = /* @__PURE__ */ y({
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
    const a = e, n = t, { dir: o, disabled: l } = ce(a), r = Xe(o), { modelValue: i, changeModelValue: d, isSingle: c } = Ru(a, n), { forwardRef: u, currentElement: p } = z();
    return Fu({
      disabled: l,
      direction: r,
      orientation: a.orientation,
      parentElement: p,
      isSingle: c,
      collapsible: a.collapsible,
      modelValue: i,
      changeModelValue: d
    }), (h, m) => (f(), b(s(F), {
      ref: s(u),
      "as-child": h.asChild,
      as: h.as
    }, {
      default: v(() => [
        _(h.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [To, zu] = ne("AccordionItem"), Nu = /* @__PURE__ */ y({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const a = e, n = vn(), o = C(
      () => n.isSingle.value ? a.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(a.value)
    ), l = C(() => n.disabled.value || a.disabled || n.isSingle.value && o.value && !n.collapsible), r = C(() => l.value ? "" : void 0), i = C(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: o, dataDisabled: r });
    const { currentRef: d, currentElement: c } = z();
    zu({
      open: o,
      dataState: i,
      disabled: l,
      dataDisabled: r,
      triggerId: "",
      currentRef: d,
      currentElement: c,
      value: C(() => a.value)
    });
    function u(p) {
      Bl(
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
    return (p, h) => (f(), b(s(Eu), {
      "data-orientation": s(n).orientation,
      "data-disabled": r.value,
      "data-state": i.value,
      disabled: l.value,
      open: o.value,
      as: a.as,
      "as-child": a.asChild,
      onKeydown: Fe(u, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: v(() => [
        _(p.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), Wu = /* @__PURE__ */ y({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = vn(), n = To();
    return z(), (o, l) => (f(), b(s(Mu), {
      role: "region",
      hidden: !s(n).open.value,
      "as-child": t.asChild,
      "force-mount": t.forceMount,
      "aria-labelledby": s(n).triggerId,
      "data-state": s(n).dataState.value,
      "data-disabled": s(n).dataDisabled.value,
      "data-orientation": s(a).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), Ku = /* @__PURE__ */ y({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, a = vn(), n = To();
    return z(), (o, l) => (f(), b(s(F), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": s(a).orientation,
      "data-state": s(n).dataState.value,
      "data-disabled": s(n).dataDisabled.value
    }, {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), Uu = /* @__PURE__ */ y({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = vn(), n = To();
    n.triggerId || (n.triggerId = ye(void 0, "radix-vue-accordion-trigger"));
    function o() {
      n.disabled.value || a.changeModelValue(n.value.value);
    }
    return (l, r) => (f(), b(s(Tu), {
      id: s(n).triggerId,
      ref: s(n).currentRef,
      "data-radix-vue-collection-item": "",
      as: t.as,
      "as-child": t.asChild,
      "aria-disabled": s(n).disabled.value || void 0,
      "aria-expanded": s(n).open.value || !1,
      "data-disabled": s(n).dataDisabled.value,
      "data-orientation": s(a).orientation,
      "data-state": s(n).dataState.value,
      disabled: s(n).disabled.value,
      onClick: o
    }, {
      default: v(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [Ze, Hu] = ne("DialogRoot"), Al = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = ue(a, "open", t, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = T(), l = T(), { modal: r } = ce(a);
    return Hu({
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
    }), (i, d) => _(i.$slots, "default", { open: s(n) });
  }
}), Ml = /* @__PURE__ */ y({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ze(), { forwardRef: n, currentElement: o } = z();
    return a.contentId || (a.contentId = ye(void 0, "radix-vue-dialog-content")), de(() => {
      a.triggerElement.value = o.value;
    }), (l, r) => (f(), b(s(F), S(t, {
      ref: s(n),
      type: l.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(a).open.value || !1,
      "aria-controls": s(a).open.value ? s(a).contentId : void 0,
      "data-state": s(a).open.value ? "open" : "closed",
      onClick: s(a).onOpenToggle
    }), {
      default: v(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Oa = /* @__PURE__ */ y({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Po();
    return (a, n) => s(t) || a.forceMount ? (f(), b(sn, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      _(a.$slots, "default")
    ], 8, ["to", "disabled"])) : Z("", !0);
  }
}), Ao = /* @__PURE__ */ y({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Oa), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ju = "dismissableLayer.pointerDownOutside", Gu = "dismissableLayer.focusOutside";
function Il(e, t) {
  const a = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function qu(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = T(!1), l = T(() => {
  });
  return ge((r) => {
    if (!Ye)
      return;
    const i = async (c) => {
      const u = c.target;
      if (t != null && t.value) {
        if (Il(t.value, u)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let p = function() {
            ko(
              ju,
              e,
              h
            );
          };
          const h = { originalEvent: c };
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
function Yu(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = T(!1);
  return ge((l) => {
    if (!Ye)
      return;
    const r = async (i) => {
      t != null && t.value && (await oe(), !(!t.value || Il(t.value, i.target)) && i.target && !o.value && ko(
        Gu,
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
const Ve = Ls({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ea = /* @__PURE__ */ y({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: l } = z(), r = C(
      () => {
        var w;
        return ((w = l.value) == null ? void 0 : w.ownerDocument) ?? globalThis.document;
      }
    ), i = C(() => Ve.layersRoot), d = C(() => l.value ? Array.from(i.value).indexOf(l.value) : -1), c = C(() => Ve.layersWithOutsidePointerEventsDisabled.size > 0), u = C(() => {
      const w = Array.from(i.value), [g] = [...Ve.layersWithOutsidePointerEventsDisabled].slice(-1), x = w.indexOf(g);
      return d.value >= x;
    }), p = qu(async (w) => {
      const g = [...Ve.branches].some(
        (x) => x == null ? void 0 : x.contains(w.target)
      );
      !u.value || g || (n("pointerDownOutside", w), n("interactOutside", w), await oe(), w.defaultPrevented || n("dismiss"));
    }, l), h = Yu((w) => {
      [...Ve.branches].some(
        (g) => g == null ? void 0 : g.contains(w.target)
      ) || (n("focusOutside", w), n("interactOutside", w), w.defaultPrevented || n("dismiss"));
    }, l);
    Do("Escape", (w) => {
      d.value === i.value.size - 1 && (n("escapeKeyDown", w), w.defaultPrevented || n("dismiss"));
    });
    let m;
    return ge((w) => {
      l.value && (a.disableOutsidePointerEvents && (Ve.layersWithOutsidePointerEventsDisabled.size === 0 && (m = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), Ve.layersWithOutsidePointerEventsDisabled.add(l.value)), i.value.add(l.value), w(() => {
        a.disableOutsidePointerEvents && Ve.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = m);
      }));
    }), ge((w) => {
      w(() => {
        l.value && (i.value.delete(l.value), Ve.layersWithOutsidePointerEventsDisabled.delete(l.value));
      });
    }), (w, g) => (f(), b(s(F), {
      ref: s(o),
      "as-child": w.asChild,
      as: w.as,
      "data-dismissable-layer": "",
      style: dt({
        pointerEvents: c.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(h).onFocusCapture,
      onBlurCapture: s(h).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: v(() => [
        _(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Xu = /* @__PURE__ */ y({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = z();
    return de(() => {
      Ve.branches.add(n.value);
    }), _t(() => {
      Ve.branches.delete(n.value);
    }), (o, l) => (f(), b(s(F), S({ ref: s(a) }, t), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vn = "focusScope.autoFocusOnMount", Rn = "focusScope.autoFocusOnUnmount", ys = { bubbles: !1, cancelable: !0 };
function Xa(e, { select: t = !1 } = {}) {
  const a = document.activeElement;
  for (const n of e)
    if (mt(n, { select: t }), document.activeElement !== a)
      return !0;
}
function Zu(e) {
  const t = Mo(e), a = bs(t, e), n = bs(t.reverse(), e);
  return [a, n];
}
function Mo(e) {
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
    if (!Ju(a, { upTo: t }))
      return a;
}
function Ju(e, { upTo: t }) {
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
function Qu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function mt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const a = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== a && Qu(e) && t && e.select();
  }
}
const ec = qd(() => T([]));
function tc() {
  const e = ec();
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
function ac(e) {
  return e.filter((t) => t.tagName !== "A");
}
const mn = /* @__PURE__ */ y({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, n = t, { currentRef: o, currentElement: l } = z(), r = T(null), i = tc(), d = Ls({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ge((u) => {
      if (!Ye)
        return;
      const p = l.value;
      if (!a.trapped)
        return;
      function h(x) {
        if (d.paused || !p)
          return;
        const $ = x.target;
        p.contains($) ? r.value = $ : mt(r.value, { select: !0 });
      }
      function m(x) {
        if (d.paused || !p)
          return;
        const $ = x.relatedTarget;
        $ !== null && (p.contains($) || mt(r.value, { select: !0 }));
      }
      function w(x) {
        p.contains(r.value) || mt(p);
      }
      document.addEventListener("focusin", h), document.addEventListener("focusout", m);
      const g = new MutationObserver(w);
      p && g.observe(p, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), ge(async (u) => {
      const p = l.value;
      if (await oe(), !p)
        return;
      i.add(d);
      const h = document.activeElement;
      if (!p.contains(h)) {
        const m = new CustomEvent(Vn, ys);
        p.addEventListener(Vn, (w) => n("mountAutoFocus", w)), p.dispatchEvent(m), m.defaultPrevented || (Xa(ac(Mo(p)), {
          select: !0
        }), document.activeElement === h && mt(p));
      }
      u(() => {
        p.removeEventListener(Vn, (g) => n("mountAutoFocus", g));
        const m = new CustomEvent(Rn, ys), w = (g) => {
          n("unmountAutoFocus", g);
        };
        p.addEventListener(Rn, w), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || mt(h ?? document.body, { select: !0 }), p.removeEventListener(Rn, w), i.remove(d);
        }, 0);
      });
    });
    function c(u) {
      if (!a.loop && !a.trapped || d.paused)
        return;
      const p = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, h = document.activeElement;
      if (p && h) {
        const m = u.currentTarget, [w, g] = Zu(m);
        w && g ? !u.shiftKey && h === g ? (u.preventDefault(), a.loop && mt(w, { select: !0 })) : u.shiftKey && h === w && (u.preventDefault(), a.loop && mt(g, { select: !0 })) : h === m && u.preventDefault();
      }
    }
    return (u, p) => (f(), b(s(F), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: c
    }, {
      default: v(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), nc = "menu.itemSelect", Zn = ["Enter", " "], oc = ["ArrowDown", "PageUp", "Home"], Vl = ["ArrowUp", "PageDown", "End"], sc = [...oc, ...Vl], lc = {
  ltr: [...Zn, "ArrowRight"],
  rtl: [...Zn, "ArrowLeft"]
}, rc = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Io(e) {
  return e ? "open" : "closed";
}
function an(e) {
  return e === "indeterminate";
}
function Vo(e) {
  return an(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Jn(e) {
  const t = document.activeElement;
  for (const a of e)
    if (a === t || (a.focus(), document.activeElement !== t))
      return;
}
function ic(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let l = 0, r = t.length - 1; l < t.length; r = l++) {
    const i = t[l].x, d = t[l].y, c = t[r].x, u = t[r].y;
    d > n != u > n && a < (c - i) * (n - d) / (u - d) + i && (o = !o);
  }
  return o;
}
function dc(e, t) {
  if (!t)
    return !1;
  const a = { x: e.clientX, y: e.clientY };
  return ic(a, t);
}
function xa(e) {
  return e.pointerType === "mouse";
}
const uc = "DialogTitle", cc = "DialogContent";
function pc({
  titleName: e = uc,
  contentName: t = cc,
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
const Rl = /* @__PURE__ */ y({
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
    const a = e, n = t, o = Ze(), { forwardRef: l, currentElement: r } = z();
    return o.titleId || (o.titleId = ye(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = ye(void 0, "radix-vue-dialog-description")), de(() => {
      o.contentElement = r, document.activeElement !== document.body && (o.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && pc({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: r
    }), (i, d) => (f(), b(s(mn), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: d[6] || (d[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: v(() => [
        D(s(ea), S({
          id: s(o).contentId,
          ref: s(l),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(o).descriptionId,
          "aria-labelledby": s(o).titleId,
          "data-state": s(Io)(s(o).open.value)
        }, i.$attrs, {
          onDismiss: d[0] || (d[0] = (c) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: d[2] || (d[2] = (c) => n("focusOutside", c)),
          onInteractOutside: d[3] || (d[3] = (c) => n("interactOutside", c)),
          onPointerDownOutside: d[4] || (d[4] = (c) => n("pointerDownOutside", c))
        }), {
          default: v(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), fc = /* @__PURE__ */ y({
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
    const a = e, n = t, o = Ze(), l = Ot(n), { forwardRef: r, currentElement: i } = z();
    return Sa(i), (d, c) => (f(), b(Rl, S({ ...a, ...s(l) }, {
      ref: s(r),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: c[0] || (c[0] = (u) => {
        var p;
        u.defaultPrevented || (u.preventDefault(), (p = s(o).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: c[1] || (c[1] = (u) => {
        const p = u.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || h) && u.preventDefault();
      }),
      onFocusOutside: c[2] || (c[2] = (u) => {
        u.preventDefault();
      })
    }), {
      default: v(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), vc = /* @__PURE__ */ y({
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
    const a = e, n = Ot(t);
    z();
    const o = Ze(), l = T(!1), r = T(!1);
    return (i, d) => (f(), b(Rl, S({ ...a, ...s(n) }, {
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
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ro = /* @__PURE__ */ y({
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
    const a = e, n = t, o = Ze(), l = Ot(n), { forwardRef: r } = z();
    return (i, d) => (f(), b(s(Oe), {
      present: i.forceMount || s(o).open.value
    }, {
      default: v(() => [
        s(o).modal.value ? (f(), b(fc, S({
          key: 0,
          ref: s(r)
        }, { ...a, ...s(l), ...i.$attrs }), {
          default: v(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), b(vc, S({
          key: 1,
          ref: s(r)
        }, { ...a, ...s(l), ...i.$attrs }), {
          default: v(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), mc = /* @__PURE__ */ y({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ze();
    return Da(!0), z(), (a, n) => (f(), b(s(F), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": s(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Fo = /* @__PURE__ */ y({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ze(), { forwardRef: a } = z();
    return (n, o) => {
      var l;
      return (l = s(t)) != null && l.modal.value ? (f(), b(s(Oe), {
        key: 0,
        present: n.forceMount || s(t).open.value
      }, {
        default: v(() => [
          D(mc, S(n.$attrs, {
            ref: s(a),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: v(() => [
              _(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : Z("", !0);
    };
  }
}), Ea = /* @__PURE__ */ y({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    z();
    const a = Ze();
    return (n, o) => (f(), b(s(F), S(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (l) => s(a).onOpenChange(!1))
    }), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Fl = /* @__PURE__ */ y({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, a = Ze();
    return z(), (n, o) => (f(), b(s(F), S(t, {
      id: s(a).titleId
    }), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ll = /* @__PURE__ */ y({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    z();
    const a = Ze();
    return (n, o) => (f(), b(s(F), S(t, {
      id: s(a).descriptionId
    }), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function hc(e) {
  function t(n) {
    return Array.isArray(e.date.value) ? e.date.value.some((o) => Ce(o, n)) : e.date.value ? Ce(e.date.value, n) : !1;
  }
  const a = C(
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
function gc(e, t) {
  const a = t(e), n = a.compare(e), o = {};
  return n >= 7 && (o.day = 1), n >= ba(e) && (o.month = 1), a.set({ ...o });
}
function yc(e, t) {
  const a = t(e), n = e.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= ba(e) && (o.month = 13), a.set({ ...o });
}
function bc(e, t) {
  return t(e);
}
function _c(e, t) {
  return t(e);
}
function zl(e) {
  const t = vu(e.locale.value), a = C(() => {
    const g = {
      calendar: e.placeholder.value.calendar.identifier
    };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (g.era = "short"), g;
  }), n = T(Ct({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), o = C(() => n.value.map((g) => g.value));
  function l(g) {
    return !o.value.some((x) => ts(g, x));
  }
  const r = (g = "month", x) => {
    if (!e.maxValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const $ = n.value[n.value.length - 1].value;
    if (x || e.nextPage.value) {
      const k = gc($, x || e.nextPage.value);
      return ha(k, e.maxValue.value);
    }
    if (g === "year") {
      const k = $.add({ years: 1 }).set({ day: 1, month: 1 });
      return ha(k, e.maxValue.value);
    }
    const P = $.add({ months: 1 }).set({ day: 1 });
    return ha(P, e.maxValue.value);
  }, i = (g = "month", x) => {
    if (!e.minValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const $ = n.value[0].value;
    if (x || e.prevPage.value) {
      const k = yc($, x || e.prevPage.value);
      return ht(k, e.minValue.value);
    }
    if (g === "year") {
      const k = $.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return ht(k, e.minValue.value);
    }
    const P = $.subtract({ months: 1 }).set({ day: 35 });
    return ht(P, e.minValue.value);
  };
  function d(g) {
    var x;
    return !!((x = e.isDateDisabled) != null && x.call(e, g) || e.disabled.value || e.maxValue.value && ha(g, e.maxValue.value) || e.minValue.value && ht(g, e.minValue.value));
  }
  const c = (g) => {
    var x;
    return !!((x = e.isDateUnavailable) != null && x.call(e, g));
  }, u = C(() => n.value.length ? n.value[0].rows[0].map((g) => t.dayOfWeek(Re(g), e.weekdayFormat.value)) : []), p = (g = "month", x) => {
    const $ = n.value[0].value;
    if (x || e.nextPage.value) {
      const O = bc($, x || e.nextPage.value), E = Ct({
        dateObj: O,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = E;
      const V = {};
      if (!x) {
        const A = E[0].value.compare($);
        A >= ba($) && (V.day = 1), A >= 365 && (V.month = 1);
      }
      e.placeholder.value = E[0].value.set({ ...V });
      return;
    }
    const P = g === "month" ? $.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : $.add({ years: 1 }), k = Ct({
      dateObj: P,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = k, e.placeholder.value = k[0].value.set({ day: 1 });
  }, h = (g = "month", x) => {
    const $ = n.value[0].value;
    if (x || e.prevPage.value) {
      const O = _c($, x || e.prevPage.value), E = Ct({
        dateObj: O,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = E;
      const V = {};
      if (!x) {
        const A = $.compare(E[0].value);
        A >= ba($) && (V.day = 1), A >= 365 && (V.month = 1);
      }
      e.placeholder.value = E[0].value.set({ ...V });
      return;
    }
    const P = g === "month" ? $.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : $.subtract({ years: 1 }), k = Ct({
      dateObj: P,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = k, e.placeholder.value = k[0].value.set({ day: 1 });
  };
  ee(e.placeholder, (g) => {
    o.value.some((x) => ts(x, g)) || (n.value = Ct({
      dateObj: g,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), ee([e.locale, e.weekStartsOn, e.fixedWeeks, e.numberOfMonths], () => {
    n.value = Ct({
      dateObj: e.placeholder.value,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
  });
  const m = C(() => {
    if (!n.value.length)
      return "";
    if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value), n.value.length === 1) {
      const E = n.value[0].value;
      return `${t.fullMonthAndYear(Re(E), a.value)}`;
    }
    const g = Re(n.value[0].value), x = Re(n.value[n.value.length - 1].value), $ = t.fullMonth(g, a.value), P = t.fullMonth(x, a.value), k = t.fullYear(g, a.value), O = t.fullYear(x, a.value);
    return k === O ? `${$} - ${P} ${O}` : `${$} ${k} - ${P} ${O}`;
  }), w = C(() => `${e.calendarLabel.value ?? "Event Date"}, ${m.value}`);
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
    prevPage: h,
    headingValue: m,
    fullCalendarLabel: w
  };
}
const wc = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, xc = {
  role: "heading",
  "aria-level": "2"
}, [ta, Cc] = ne("CalendarRoot"), $c = /* @__PURE__ */ y({
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
      multiple: h,
      minValue: m,
      maxValue: w,
      numberOfMonths: g,
      preventDeselect: x,
      isDateDisabled: $,
      isDateUnavailable: P,
      calendarLabel: k,
      defaultValue: O,
      nextPage: E,
      prevPage: V,
      dir: A
    } = ce(a), { primitiveElement: W, currentElement: N } = Et(), B = Xe(A), I = ue(a, "modelValue", n, {
      defaultValue: O.value,
      passive: a.modelValue === void 0
    }), R = _l({
      defaultPlaceholder: a.placeholder,
      defaultValue: I.value
    }), q = ue(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? R.copy(),
      passive: a.placeholder === void 0
    });
    function G(ie) {
      q.value = ie.copy();
    }
    const {
      fullCalendarLabel: K,
      headingValue: X,
      isDateDisabled: le,
      isDateUnavailable: pe,
      isNextButtonDisabled: me,
      isPrevButtonDisabled: ke,
      weekdays: _e,
      isOutsideVisibleView: da,
      nextPage: xt,
      prevPage: ua,
      formatter: ut,
      grid: ca
    } = zl({
      locale: o,
      placeholder: q,
      weekStartsOn: c,
      fixedWeeks: p,
      numberOfMonths: g,
      minValue: m,
      maxValue: w,
      disabled: l,
      weekdayFormat: u,
      pagedNavigation: d,
      isDateDisabled: $.value,
      isDateUnavailable: P.value,
      calendarLabel: k,
      nextPage: E,
      prevPage: V
    }), {
      isInvalid: Ee,
      isDateSelected: Be
    } = hc({
      date: I,
      isDateDisabled: le,
      isDateUnavailable: pe
    });
    ee(I, (ie) => {
      if (Array.isArray(ie) && ie.length) {
        const $e = ie[ie.length - 1];
        $e && !Ke(q.value, $e) && G($e);
      } else !Array.isArray(ie) && ie && !Ke(q.value, ie) && G(ie);
    });
    function We(ie) {
      if (h.value) {
        if (!I.value)
          I.value = [ie.copy()];
        else if (Array.isArray(I.value)) {
          if (I.value.findIndex(($e) => Ce($e, ie)) === -1)
            I.value = [...I.value, ie];
          else if (!x.value) {
            const $e = I.value.filter((Je) => !Ce(Je, ie));
            if (!$e.length) {
              q.value = ie.copy(), I.value = void 0;
              return;
            }
            I.value = $e.map((Je) => Je.copy());
          }
        }
      } else {
        if (!I.value) {
          I.value = ie.copy();
          return;
        }
        !x.value && Ke(I.value, ie) ? (q.value = ie.copy(), I.value = void 0) : I.value = ie.copy();
      }
    }
    return de(() => {
      i.value && wl(N.value);
    }), Cc({
      isDateUnavailable: pe,
      dir: B,
      isDateDisabled: le,
      locale: o,
      formatter: ut,
      modelValue: I,
      placeholder: q,
      disabled: l,
      initialFocus: i,
      pagedNavigation: d,
      weekStartsOn: c,
      weekdayFormat: u,
      fixedWeeks: p,
      multiple: h,
      numberOfMonths: g,
      readonly: r,
      preventDeselect: x,
      fullCalendarLabel: K,
      headingValue: X,
      isInvalid: Ee,
      isDateSelected: Be,
      isNextButtonDisabled: me,
      isPrevButtonDisabled: ke,
      isOutsideVisibleView: da,
      nextPage: xt,
      prevPage: ua,
      parentElement: N,
      onPlaceholderChange: G,
      onDateChange: We
    }), (ie, $e) => (f(), b(s(F), {
      ref_key: "primitiveElement",
      ref: W,
      as: ie.as,
      "as-child": ie.asChild,
      role: "application",
      "aria-label": s(K),
      "data-readonly": s(r) ? "" : void 0,
      "data-disabled": s(l) ? "" : void 0,
      "data-invalid": s(Ee) ? "" : void 0,
      dir: s(B)
    }, {
      default: v(() => [
        _(ie.$slots, "default", {
          date: s(q),
          grid: s(ca),
          weekDays: s(_e),
          weekStartsOn: s(c),
          locale: s(o),
          fixedWeeks: s(p)
        }),
        re("div", wc, [
          re("div", xc, J(s(K)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), kc = /* @__PURE__ */ y({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bc = /* @__PURE__ */ y({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = ta();
    return (n, o) => (f(), b(s(F), S(t, {
      "data-disabled": s(a).disabled.value ? "" : void 0
    }), {
      default: v(() => [
        _(n.$slots, "default", {
          headingValue: s(a).headingValue.value
        }, () => [
          Y(J(s(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Dc = /* @__PURE__ */ y({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = ta(), n = C(() => a.disabled.value ? !0 : void 0), o = C(() => a.readonly.value ? !0 : void 0);
    return (l, r) => (f(), b(s(F), S(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: v(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Pc = /* @__PURE__ */ y({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = ta();
    return (a, n) => {
      var o, l;
      return f(), b(s(F), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": s(t).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": s(t).isDateDisabled(a.date) || ((l = (o = s(t)).isDateUnavailable) == null ? void 0 : l.call(o, a.date)),
        "data-disabled": s(t).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: v(() => [
          _(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Sc = /* @__PURE__ */ y({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oc = /* @__PURE__ */ y({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = C(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = ta();
    return (o, l) => (f(), b(s(F), {
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
        _(o.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Ec = /* @__PURE__ */ y({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = C(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = ta();
    return (o, l) => (f(), b(s(F), {
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
        _(o.$slots, "default", {}, () => [
          Y("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Tc = /* @__PURE__ */ y({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), S(t, { "aria-hidden": "true" }), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ac = /* @__PURE__ */ y({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mc = /* @__PURE__ */ y({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ic = /* @__PURE__ */ y({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = Ol(), n = ta(), { primitiveElement: o, currentElement: l } = Et(), r = C(() => t.day.day.toLocaleString(n.locale.value)), i = C(() => n.formatter.custom(Re(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), d = C(() => n.isDateDisabled(t.day)), c = C(
      () => {
        var k;
        return (k = n.isDateUnavailable) == null ? void 0 : k.call(n, t.day);
      }
    ), u = C(() => Zs(t.day, Dt())), p = C(() => !Xs(t.day, t.month)), h = C(
      () => n.isOutsideVisibleView(t.day)
    ), m = C(() => !n.disabled.value && Ce(t.day, n.placeholder.value)), w = C(() => n.isDateSelected(t.day)), g = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function x(k) {
      var O;
      n.readonly.value || n.isDateDisabled(k) || (O = n.isDateUnavailable) != null && O.call(n, k) || n.onDateChange(k);
    }
    function $() {
      x(t.day);
    }
    function P(k) {
      k.preventDefault(), k.stopPropagation();
      const O = n.parentElement.value, E = O ? Array.from(O.querySelectorAll(g)) : [];
      let V = E.indexOf(l.value);
      const A = 7, W = n.dir.value === "rtl" ? -1 : 1;
      switch (k.code) {
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
          x(t.day);
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
        n.prevPage(), oe(() => {
          const N = O ? Array.from(O.querySelectorAll(g)) : [];
          N[N.length - Math.abs(V)].focus();
        });
        return;
      }
      if (V >= E.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), oe(() => {
          (O ? Array.from(O.querySelectorAll(g)) : [])[V - E.length].focus();
        });
      }
    }
    return (k, O) => (f(), b(s(F), S({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": p.value || d.value || c.value ? !0 : void 0,
      "data-selected": w.value ? !0 : void 0,
      "data-value": k.day.toString(),
      "data-disabled": d.value || p.value ? "" : void 0,
      "data-unavailable": c.value ? "" : void 0,
      "data-today": u.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": h.value ? "" : void 0,
      "data-focused": m.value ? "" : void 0,
      tabindex: m.value ? 0 : p.value || d.value ? void 0 : -1,
      onClick: $,
      onKeydown: [
        Fe(P, ["up", "down", "left", "right", "space", "enter"]),
        O[0] || (O[0] = Fe(we(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: v(() => [
        _(k.$slots, "default", { dayValue: r.value }, () => [
          Y(J(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function nn(e) {
  return e === "indeterminate";
}
function Nl(e) {
  return nn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Vc = ["value", "checked", "name", "disabled", "required"], [Rc, Fc] = ne("CheckboxRoot"), Lc = /* @__PURE__ */ y({
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
    const a = e, n = t, { disabled: o } = ce(a), l = ue(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    }), { forwardRef: r, currentElement: i } = z(), d = Pa(i), c = C(() => {
      var u;
      return a.id && i.value ? (u = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : u.innerText : void 0;
    });
    return Fc({
      disabled: o,
      state: l
    }), (u, p) => (f(), L(Q, null, [
      D(s(F), S(u.$attrs, {
        id: u.id,
        ref: s(r),
        role: "checkbox",
        "as-child": a.asChild,
        as: u.as,
        type: u.as === "button" ? "button" : void 0,
        "aria-checked": s(nn)(s(l)) ? "mixed" : s(l),
        "aria-required": !1,
        "aria-label": u.$attrs["aria-label"] || c.value,
        "data-state": s(Nl)(s(l)),
        "data-disabled": s(o) ? "" : void 0,
        disabled: s(o),
        onKeydown: Fe(we(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (h) => l.value = s(nn)(s(l)) ? !0 : !s(l))
      }), {
        default: v(() => [
          _(u.$slots, "default", { checked: s(l) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      s(d) ? (f(), L("input", {
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
      }, null, 8, Vc)) : Z("", !0)
    ], 64));
  }
}), zc = /* @__PURE__ */ y({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = z(), a = Rc();
    return (n, o) => (f(), b(s(Oe), {
      present: n.forceMount || s(nn)(s(a).state.value) || s(a).state.value === !0
    }, {
      default: v(() => [
        D(s(F), S({
          ref: s(t),
          "data-state": s(Nl)(s(a).state.value),
          "data-disabled": s(a).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: v(() => [
            _(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Wl, Nc] = ne("PopperRoot"), aa = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = T();
    return Nc({
      anchor: t,
      onAnchorChange: (a) => t.value = a
    }), (a, n) => _(a.$slots, "default");
  }
}), hn = /* @__PURE__ */ y({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = z(), o = Wl();
    return ge(() => {
      o.onAnchorChange(t.element ?? n.value);
    }), (l, r) => (f(), b(s(F), {
      ref: s(a),
      as: l.as,
      "as-child": l.asChild
    }, {
      default: v(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Wc(e) {
  return e !== null;
}
function Kc(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var a, n, o;
      const { placement: l, rects: r, middlewareData: i } = t, d = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, c = d ? 0 : e.arrowWidth, u = d ? 0 : e.arrowHeight, [p, h] = Qn(l), m = { start: "0%", center: "50%", end: "100%" }[h], w = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + c / 2, g = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + u / 2;
      let x = "", $ = "";
      return p === "bottom" ? (x = d ? m : `${w}px`, $ = `${-u}px`) : p === "top" ? (x = d ? m : `${w}px`, $ = `${r.floating.height + u}px`) : p === "right" ? (x = `${-u}px`, $ = d ? m : `${g}px`) : p === "left" && (x = `${r.floating.width + u}px`, $ = d ? m : `${g}px`), { data: { x, y: $ } };
    }
  };
}
function Qn(e) {
  const [t, a = "center"] = e.split("-");
  return [t, a];
}
const Kl = {
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
}, [lb, Uc] = ne("PopperContent"), Yt = /* @__PURE__ */ y({
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
    ...Kl
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Wl(), { forwardRef: l, currentElement: r } = z(), i = T(), d = T(), { width: c, height: u } = Sl(d), p = C(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), h = C(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = C(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), w = C(() => ({
      padding: h.value,
      boundary: m.value.filter(Wc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), g = jd(() => [
      Md({
        mainAxis: a.sideOffset + u.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && vs({
        ...w.value
      }),
      a.avoidCollisions && Id({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? Ld() : void 0,
        ...w.value
      }),
      !a.prioritizePosition && a.avoidCollisions && vs({
        ...w.value
      }),
      Vd({
        ...w.value,
        apply: ({ elements: B, rects: I, availableWidth: R, availableHeight: q }) => {
          const { width: G, height: K } = I.reference, X = B.floating.style;
          X.setProperty(
            "--radix-popper-available-width",
            `${R}px`
          ), X.setProperty(
            "--radix-popper-available-height",
            `${q}px`
          ), X.setProperty(
            "--radix-popper-anchor-width",
            `${G}px`
          ), X.setProperty(
            "--radix-popper-anchor-height",
            `${K}px`
          );
        }
      }),
      d.value && Wd({ element: d.value, padding: a.arrowPadding }),
      Kc({
        arrowWidth: c.value,
        arrowHeight: u.value
      }),
      a.hideWhenDetached && Rd({ strategy: "referenceHidden", ...w.value })
    ]), { floatingStyles: x, placement: $, isPositioned: P, middlewareData: k } = Kd(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...B) => Ad(...B, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), O = C(
      () => Qn($.value)[0]
    ), E = C(
      () => Qn($.value)[1]
    );
    ni(() => {
      P.value && n("placed");
    });
    const V = C(
      () => {
        var B;
        return ((B = k.value.arrow) == null ? void 0 : B.centerOffset) !== 0;
      }
    ), A = T("");
    ge(() => {
      r.value && (A.value = window.getComputedStyle(r.value).zIndex);
    });
    const W = C(() => {
      var B;
      return ((B = k.value.arrow) == null ? void 0 : B.x) ?? 0;
    }), N = C(() => {
      var B;
      return ((B = k.value.arrow) == null ? void 0 : B.y) ?? 0;
    });
    return Uc({
      placedSide: O,
      onArrowChange: (B) => d.value = B,
      arrowX: W,
      arrowY: N,
      shouldHideArrow: V
    }), (B, I) => {
      var R, q, G;
      return f(), L("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: dt({
          ...s(x),
          transform: s(P) ? s(x).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: A.value,
          "--radix-popper-transform-origin": [
            (R = s(k).transformOrigin) == null ? void 0 : R.x,
            (q = s(k).transformOrigin) == null ? void 0 : q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((G = s(k).hide) == null ? void 0 : G.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        D(s(F), S({ ref: s(l) }, B.$attrs, {
          "as-child": a.asChild,
          as: B.as,
          "data-side": O.value,
          "data-align": E.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(P) ? void 0 : "none"
          }
        }), {
          default: v(() => [
            _(B.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Ta = /* @__PURE__ */ y({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return z(), (t, a) => (f(), b(s(F), {
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
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Hc = /* @__PURE__ */ y({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, a = C(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([l, r]) => ({ name: `[${o}][${t.name}][${l}]`, value: r })) : { name: `[${t.name}][${o}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, o]) => ({ name: `[${t.name}][${n}]`, value: o })) : []);
    return (n, o) => (f(!0), L(Q, null, he(a.value, (l) => (f(), b(Ta, {
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
}), jc = "data-radix-vue-collection-item", [Lo, Gc] = ne("CollectionProvider");
function zo(e = jc) {
  const t = T(/* @__PURE__ */ new Map()), a = T(), n = Gc({
    collectionRef: a,
    itemMap: t,
    attrName: e
  }), { getItems: o } = Wo(n), l = C(() => Array.from(n.itemMap.value.values())), r = C(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: l, itemMapSize: r };
}
const No = y({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const a = Lo(), { primitiveElement: n, currentElement: o } = Et();
    return ee(o, () => {
      a.collectionRef.value = o.value;
    }), () => Ue(Eo, { ref: n }, t);
  }
}), gn = y({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: a }) {
    const n = Lo(), { primitiveElement: o, currentElement: l } = Et();
    return ge((r) => {
      if (l.value) {
        const i = qr(l.value);
        n.itemMap.value.set(i, { ref: l.value, value: e.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => Ue(Eo, { ...a, [n.attrName]: "", ref: o }, t);
  }
});
function Wo(e) {
  const t = e ?? Lo();
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
const [na, qc] = ne("ComboboxRoot"), Yc = /* @__PURE__ */ y({
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
    const a = e, n = t, { multiple: o, disabled: l, dir: r } = ce(a), i = Xe(r), d = ue(a, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: a.searchTerm === void 0
    }), c = ue(a, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: a.defaultValue ?? o.value ? [] : void 0,
      passive: a.modelValue === void 0,
      deep: !0
    }), u = ue(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), p = ue(a, "selectedValue", n, {
      defaultValue: void 0,
      passive: a.selectedValue === void 0
    });
    async function h(K) {
      var X, le;
      u.value = K, await oe(), K ? (c.value && (Array.isArray(c.value) && o.value ? p.value = (X = k().find((pe) => {
        var me, ke;
        return ((ke = (me = pe.ref) == null ? void 0 : me.dataset) == null ? void 0 : ke.state) === "checked";
      })) == null ? void 0 : X.value : p.value = c.value), await oe(), (le = g.value) == null || le.focus(), q()) : (w.value = !1, a.resetSearchTermOnBlur && W());
    }
    function m(K) {
      if (Array.isArray(c.value) && o.value) {
        const X = c.value.findIndex((pe) => $t(pe, K)), le = [...c.value];
        X === -1 ? le.push(K) : le.splice(X, 1), c.value = le;
      } else
        c.value = K, h(!1);
    }
    const w = T(!1), g = T(), x = T(), { forwardRef: $, currentElement: P } = z(), { getItems: k, reactiveItems: O, itemMapSize: E } = zo("data-radix-vue-combobox-item"), V = T([]);
    ee(() => E.value, () => {
      V.value = k().map((K) => K.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const A = C(() => {
      if (w.value) {
        if (a.filterFunction)
          return a.filterFunction(V.value, d.value);
        const K = V.value.filter((X) => typeof X == "string");
        if (K.length)
          return K.filter((X) => {
            var le;
            return X.toLowerCase().includes((le = d.value) == null ? void 0 : le.toLowerCase());
          });
      }
      return V.value;
    });
    function W() {
      !o.value && c.value && !Array.isArray(c.value) ? a.displayValue ? d.value = a.displayValue(c.value) : typeof c.value != "object" ? d.value = c.value.toString() : d.value = "" : d.value = "";
    }
    const N = C(() => A.value.findIndex((K) => $t(K, p.value))), B = C(() => {
      var K;
      return (K = O.value.find((X) => $t(X.value, p.value))) == null ? void 0 : K.ref;
    }), I = C(() => JSON.stringify(c.value));
    ee(I, async () => {
      await oe(), await oe(), W();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), ee(() => [A.value.length, d.value.length], async ([K, X], [le, pe]) => {
      await oe(), await oe(), K && (pe > X || N.value === -1) && (p.value = A.value[0]);
    });
    const R = Pa(P);
    function q() {
      var K;
      B.value instanceof Element && ((K = B.value) == null || K.scrollIntoView({ block: "nearest" }));
    }
    function G() {
      B.value instanceof Element && B.value.focus && B.value.focus();
    }
    return qc({
      searchTerm: d,
      modelValue: c,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: w,
      multiple: o,
      disabled: l,
      open: u,
      onOpenChange: h,
      filteredOptions: A,
      contentId: "",
      inputElement: g,
      selectedElement: B,
      onInputElementChange: (K) => g.value = K,
      onInputNavigation: async (K) => {
        const X = N.value;
        X === 0 && K === "up" || X === A.value.length - 1 && K === "down" || (X === -1 && A.value.length || K === "home" ? p.value = A.value[0] : K === "end" ? p.value = A.value[A.value.length - 1] : p.value = A.value[K === "up" ? X - 1 : X + 1], await oe(), q(), G(), oe(() => {
          var le;
          return (le = g.value) == null ? void 0 : le.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async (K) => {
        var X;
        A.value.length && p.value && B.value instanceof Element && (K.preventDefault(), K.stopPropagation(), (X = B.value) == null || X.click());
      },
      selectedValue: p,
      onSelectedValueChange: (K) => p.value = K,
      parentElement: P,
      contentElement: x,
      onContentElementChange: (K) => x.value = K
    }), (K, X) => (f(), b(s(aa), null, {
      default: v(() => [
        D(s(F), S({
          ref: s($),
          style: {
            pointerEvents: s(u) ? "auto" : void 0
          },
          as: K.as,
          "as-child": K.asChild,
          dir: s(i)
        }, K.$attrs), {
          default: v(() => [
            _(K.$slots, "default", {
              open: s(u),
              modelValue: s(c)
            }),
            s(R) && a.name ? (f(), b(s(Hc), {
              key: 0,
              name: a.name,
              value: s(c)
            }, null, 8, ["name", "value"])) : Z("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Xc = /* @__PURE__ */ y({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, a = na(), { forwardRef: n, currentElement: o } = z();
    de(() => {
      const u = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      u && (a.onInputElementChange(u), setTimeout(() => {
        t.autoFocus && (u == null || u.focus());
      }, 1));
    });
    const l = C(() => t.disabled || a.disabled.value || !1), r = T();
    Yr(() => {
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
    return (u, p) => (f(), b(s(F), {
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
        Fe(we(i, ["prevent"]), ["down", "up"]),
        Fe(s(a).onInputEnter, ["enter"]),
        Fe(we(d, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: v(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), [Ul, Zc] = ne("ComboboxGroup"), Jc = /* @__PURE__ */ y({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: a, currentElement: n } = z(), o = ye(void 0, "radix-vue-combobox-group"), l = na(), r = T(!1);
    function i() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!d.length;
    }
    return su(n, () => {
      oe(() => {
        i();
      });
    }, { childList: !0 }), ee(() => l.searchTerm.value, () => {
      oe(() => {
        i();
      });
    }, { immediate: !0 }), Zc({
      id: o
    }), (d, c) => Zt((f(), b(s(F), S(t, {
      ref_key: "currentRef",
      ref: a,
      role: "group",
      "aria-labelledby": s(o)
    }), {
      default: v(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [io, r.value]
    ]);
  }
}), Qc = /* @__PURE__ */ y({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    z();
    const a = Ul({ id: "" });
    return (n, o) => (f(), b(s(F), S(t, {
      id: s(a).id
    }), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [rb, ep] = ne("ComboboxContent"), tp = /* @__PURE__ */ y({
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
    const a = e, n = t, { position: o } = ce(a), l = na();
    Da(a.bodyLock);
    const { forwardRef: r, currentElement: i } = z();
    Sa(l.parentElement);
    const d = C(() => a.position === "popper" ? a : {}), c = se(d.value);
    function u(h) {
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
    return ep({ position: o }), (h, m) => (f(), b(s(No), null, {
      default: v(() => [
        h.dismissable ? (f(), b(s(ea), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": h.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (w) => s(l).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (w) => {
            var g;
            (g = s(l).parentElement.value) != null && g.contains(w.target) && w.preventDefault(), n("focusOutside", w);
          }),
          onInteractOutside: m[2] || (m[2] = (w) => n("interactOutside", w)),
          onEscapeKeyDown: m[3] || (m[3] = (w) => n("escapeKeyDown", w)),
          onPointerDownOutside: m[4] || (m[4] = (w) => {
            var g;
            (g = s(l).parentElement.value) != null && g.contains(w.target) && w.preventDefault(), n("pointerDownOutside", w);
          })
        }, {
          default: v(() => [
            (f(), b(Pe(s(o) === "popper" ? s(Yt) : s(F)), S({ ...h.$attrs, ...s(c) }, {
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
                _(h.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (f(), b(Pe(s(o) === "popper" ? s(Yt) : s(F)), S({ key: 1 }, { ...h.$attrs, ...d.value }, {
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
            _(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), ap = /* @__PURE__ */ y({
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
    const a = te(e, t), { forwardRef: n } = z(), o = na();
    return o.contentId || (o.contentId = ye(void 0, "radix-vue-combobox-content")), (l, r) => (f(), b(s(Oe), {
      present: l.forceMount || s(o).open.value
    }, {
      default: v(() => [
        D(tp, S({ ...s(a), ...l.$attrs }, { ref: s(n) }), {
          default: v(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), np = /* @__PURE__ */ y({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    z();
    const a = na(), n = C(() => a.filteredOptions.value.length === 0);
    return (o, l) => n.value ? (f(), b(s(F), U(S({ key: 0 }, t)), {
      default: v(() => [
        _(o.$slots, "default", {}, () => [
          Y("No options")
        ])
      ]),
      _: 3
    }, 16)) : Z("", !0);
  }
});
function op(e) {
  const t = fn({
    nonce: T()
  });
  return C(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.nonce) == null ? void 0 : a.value);
  });
}
const [ib, sp] = ne("ComboboxItem"), lp = "combobox.select", rp = /* @__PURE__ */ y({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { disabled: o } = ce(a), l = na();
    Ul({ id: "", options: T([]) });
    const { forwardRef: r } = z(), i = C(
      () => {
        var g, x;
        return l.multiple.value && Array.isArray(l.modelValue.value) ? (g = l.modelValue.value) == null ? void 0 : g.some(($) => $t($, a.value)) : $t((x = l.modelValue) == null ? void 0 : x.value, a.value);
      }
    ), d = C(() => $t(l.selectedValue.value, a.value)), c = ye(void 0, "radix-vue-combobox-item"), u = ye(void 0, "radix-vue-combobox-option"), p = C(() => l.isUserInputted.value ? l.searchTerm.value === "" || !!l.filteredOptions.value.find((g) => $t(g, a.value)) : !0);
    async function h(g) {
      n("select", g), !(g != null && g.defaultPrevented) && !o.value && g && l.onValueChange(a.value);
    }
    function m(g) {
      if (!g)
        return;
      const x = { originalEvent: g, value: a.value };
      ko(lp, h, x);
    }
    async function w(g) {
      await oe(), !g.defaultPrevented && l.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return sp({
      isSelected: i
    }), (g, x) => (f(), b(s(gn), { value: g.value }, {
      default: v(() => [
        Zt(D(s(F), {
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
          as: g.as,
          "as-child": g.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: m,
          onPointermove: w
        }, {
          default: v(() => [
            _(g.$slots, "default", {}, () => [
              Y(J(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [io, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), ip = /* @__PURE__ */ y({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (f(), b(s(F), S(t, { "aria-hidden": "true" }), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hl = /* @__PURE__ */ y({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(hn), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function dp() {
  const e = T(!1);
  return de(() => {
    qt("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), qt(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const up = xl(dp), [Tt, jl] = ne(["MenuRoot", "MenuSub"], "MenuContext"), [Aa, cp] = ne("MenuRoot"), pp = /* @__PURE__ */ y({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o, dir: l } = ce(a), r = Xe(l), i = ue(a, "open", n), d = T(), c = up();
    return jl({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      content: d,
      onContentChange: (u) => {
        d.value = u;
      }
    }), cp({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: c,
      dir: r,
      modal: o
    }), (u, p) => (f(), b(s(aa), null, {
      default: v(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), fp = "rovingFocusGroup.onEntryFocus", vp = { bubbles: !1, cancelable: !0 }, mp = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function hp(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function gp(e, t, a) {
  const n = hp(e.key, a);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return mp[n];
}
function Gl(e, t = !1, a) {
  const n = (a == null ? void 0 : a.activeElement) ?? document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n))
      return;
}
function yp(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
const [bp, _p] = ne("RovingFocusGroup"), ql = /* @__PURE__ */ y({
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
    const n = e, o = a, { loop: l, orientation: r, dir: i } = ce(n), d = Xe(i), c = ue(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), u = T(!1), p = T(!1), h = T(0), { getItems: m } = zo();
    function w(x) {
      const $ = !p.value;
      if (x.currentTarget && x.target === x.currentTarget && $ && !u.value) {
        const P = new CustomEvent(fp, vp);
        if (x.currentTarget.dispatchEvent(P), o("entryFocus", P), !P.defaultPrevented) {
          const k = m().map((A) => A.ref).filter((A) => A.dataset.disabled !== ""), O = k.find((A) => A.getAttribute("data-active") === "true"), E = k.find(
            (A) => A.id === c.value
          ), V = [O, E, ...k].filter(
            Boolean
          );
          Gl(V, n.preventScrollOnEntryFocus);
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
    }), _p({
      loop: l,
      dir: d,
      orientation: r,
      currentTabStopId: c,
      onItemFocus: (x) => {
        c.value = x;
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
    }), (x, $) => (f(), b(s(No), null, {
      default: v(() => [
        D(s(F), {
          tabindex: u.value || h.value === 0 ? -1 : 0,
          "data-orientation": s(r),
          as: x.as,
          "as-child": x.asChild,
          dir: s(d),
          style: { outline: "none" },
          onMousedown: $[0] || ($[0] = (P) => p.value = !0),
          onMouseup: g,
          onFocus: w,
          onBlur: $[1] || ($[1] = (P) => u.value = !1)
        }, {
          default: v(() => [
            _(x.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), wp = /* @__PURE__ */ y({
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
    const t = e, a = bp(), n = C(() => t.tabStopId || ye()), o = C(
      () => a.currentTabStopId.value === n.value
    ), { getItems: l } = Wo(), { primitiveElement: r, currentElement: i } = Et(), d = C(() => {
      var u;
      return (u = i.value) == null ? void 0 : u.getRootNode();
    });
    de(() => {
      t.focusable && a.onFocusableItemAdd();
    }), _t(() => {
      t.focusable && a.onFocusableItemRemove();
    });
    function c(u) {
      if (u.key === "Tab" && u.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (u.target !== u.currentTarget)
        return;
      const p = gp(
        u,
        a.orientation.value,
        a.dir.value
      );
      if (p !== void 0) {
        if (u.metaKey || u.ctrlKey || u.altKey || !t.allowShiftKey && u.shiftKey)
          return;
        u.preventDefault();
        let h = [...l().map((m) => m.ref).filter((m) => m.dataset.disabled !== "")];
        if (p === "last")
          h.reverse();
        else if (p === "prev" || p === "next") {
          p === "prev" && h.reverse();
          const m = h.indexOf(
            u.currentTarget
          );
          h = a.loop.value ? yp(h, m + 1) : h.slice(m + 1);
        }
        oe(() => Gl(h, !1, d.value));
      }
    }
    return (u, p) => (f(), b(s(gn), null, {
      default: v(() => [
        D(s(F), {
          ref_key: "primitiveElement",
          ref: r,
          tabindex: o.value ? 0 : -1,
          "data-orientation": s(a).orientation.value,
          "data-active": u.active,
          "data-disabled": u.focusable ? void 0 : "",
          as: u.as,
          "as-child": u.asChild,
          onMousedown: p[0] || (p[0] = (h) => {
            u.focusable ? s(a).onItemFocus(n.value) : h.preventDefault();
          }),
          onFocus: p[1] || (p[1] = (h) => s(a).onItemFocus(n.value)),
          onKeydown: c
        }, {
          default: v(() => [
            _(u.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [Ko, xp] = ne("MenuContent"), Uo = /* @__PURE__ */ y({
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
    ...Kl
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Tt(), l = Aa(), { trapFocus: r, disableOutsidePointerEvents: i, loop: d } = ce(a);
    So(), Da(i.value);
    const c = T(""), u = T(0), p = T(0), h = T(null), m = T("right"), w = T(0), g = T(null), { createCollection: x } = Qt(), { forwardRef: $, currentElement: P } = z(), k = x(P);
    ee(P, (B) => {
      o.onContentChange(B);
    });
    const { handleTypeaheadSearch: O } = Oo(k);
    _t(() => {
      window.clearTimeout(u.value);
    });
    function E(B) {
      var I, R;
      return m.value === ((I = h.value) == null ? void 0 : I.side) && dc(B, (R = h.value) == null ? void 0 : R.area);
    }
    async function V(B) {
      var I;
      n("openAutoFocus", B), !B.defaultPrevented && (B.preventDefault(), (I = P.value) == null || I.focus({
        preventScroll: !0
      }));
    }
    function A(B) {
      if (B.defaultPrevented)
        return;
      const I = B.target.closest("[data-radix-menu-content]") === B.currentTarget, R = B.ctrlKey || B.altKey || B.metaKey, q = B.key.length === 1, G = Bl(
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
      if (G)
        return G == null ? void 0 : G.focus();
      if (B.code === "Space" || (I && (B.key === "Tab" && B.preventDefault(), !R && q && O(B.key)), B.target !== P.value) || !sc.includes(B.key))
        return;
      B.preventDefault();
      const K = k.value;
      Vl.includes(B.key) && K.reverse(), Jn(K);
    }
    function W(B) {
      var I, R;
      (R = (I = B == null ? void 0 : B.currentTarget) == null ? void 0 : I.contains) != null && R.call(I, B.target) || (window.clearTimeout(u.value), c.value = "");
    }
    function N(B) {
      var I;
      if (!xa(B))
        return;
      const R = B.target, q = w.value !== B.clientX;
      if ((I = B == null ? void 0 : B.currentTarget) != null && I.contains(R) && q) {
        const G = B.clientX > w.value ? "right" : "left";
        m.value = G, w.value = B.clientX;
      }
    }
    return xp({
      onItemEnter: (B) => !!E(B),
      onItemLeave: (B) => {
        var I;
        E(B) || ((I = P.value) == null || I.focus(), g.value = null);
      },
      onTriggerLeave: (B) => !!E(B),
      searchRef: c,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (B) => {
        h.value = B;
      }
    }), (B, I) => (f(), b(s(mn), {
      "as-child": "",
      trapped: s(r),
      onMountAutoFocus: V,
      onUnmountAutoFocus: I[7] || (I[7] = (R) => n("closeAutoFocus", R))
    }, {
      default: v(() => [
        D(s(ea), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: I[2] || (I[2] = (R) => n("escapeKeyDown", R)),
          onPointerDownOutside: I[3] || (I[3] = (R) => n("pointerDownOutside", R)),
          onFocusOutside: I[4] || (I[4] = (R) => n("focusOutside", R)),
          onInteractOutside: I[5] || (I[5] = (R) => n("interactOutside", R)),
          onDismiss: I[6] || (I[6] = (R) => n("dismiss"))
        }, {
          default: v(() => [
            D(s(ql), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": I[0] || (I[0] = (R) => g.value = R),
              "as-child": "",
              orientation: "vertical",
              dir: s(l).dir.value,
              loop: s(d),
              onEntryFocus: I[1] || (I[1] = (R) => {
                n("entryFocus", R), s(l).isUsingKeyboardRef.value || R.preventDefault();
              })
            }, {
              default: v(() => [
                D(s(Yt), {
                  ref: s($),
                  role: "menu",
                  as: B.as,
                  "as-child": B.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(Io)(s(o).open.value),
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
                  onPointermove: N
                }, {
                  default: v(() => [
                    _(B.$slots, "default")
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
}), Yl = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Ko(), { forwardRef: n } = z(), o = T(!1);
    async function l(i) {
      if (!i.defaultPrevented && xa(i)) {
        if (t.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function r(i) {
      await oe(), !i.defaultPrevented && xa(i) && a.onItemLeave(i);
    }
    return (i, d) => (f(), b(s(gn), null, {
      default: v(() => [
        D(s(F), S({
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
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), Ho = /* @__PURE__ */ y({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: l } = z(), r = Aa(), i = Ko(), d = T(!1);
    async function c() {
      const u = l.value;
      if (!a.disabled && u) {
        const p = new CustomEvent(nc, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await oe(), p.defaultPrevented ? d.value = !1 : r.onClose();
      }
    }
    return (u, p) => (f(), b(Yl, S(a, {
      ref: s(o),
      onClick: c,
      onPointerdown: p[0] || (p[0] = () => {
        d.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (h) => {
        var m;
        await oe(), !h.defaultPrevented && (d.value || (m = h.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (h) => {
        const m = s(i).searchRef.value !== "";
        u.disabled || m && h.key === " " || s(Zn).includes(h.key) && (h.currentTarget.click(), h.preventDefault());
      })
    }), {
      default: v(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Cp, Xl] = ne(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), $p = /* @__PURE__ */ y({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Cp({
      checked: T(!1)
    });
    return (a, n) => (f(), b(s(Oe), {
      present: a.forceMount || s(an)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: v(() => [
        D(s(F), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": s(Vo)(s(t).checked.value)
        }, {
          default: v(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), kp = /* @__PURE__ */ y({
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
    const a = e, n = t, o = ue(a, "checked", n);
    return Xl({ checked: o }), (l, r) => (f(), b(Ho, S({ role: "menuitemcheckbox" }, a, {
      "aria-checked": s(an)(s(o)) ? "mixed" : s(o),
      "data-state": s(Vo)(s(o)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), s(an)(s(o)) ? o.value = !0 : o.value = !s(o);
      })
    }), {
      default: v(() => [
        _(l.$slots, "default", { checked: s(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Bp = /* @__PURE__ */ y({
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
    const a = e, n = t, o = te(a, n), l = Tt(), { forwardRef: r, currentElement: i } = z();
    return Sa(i), (d, c) => (f(), b(Uo, S(s(o), {
      ref: s(r),
      "trap-focus": s(l).open.value,
      "disable-outside-pointer-events": s(l).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (u) => s(l).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = we((u) => n("focusOutside", u), ["prevent"]))
    }), {
      default: v(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Dp = /* @__PURE__ */ y({
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
    const a = te(e, t), n = Tt();
    return (o, l) => (f(), b(Uo, S(s(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: l[0] || (l[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pp = /* @__PURE__ */ y({
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
    const a = te(e, t), n = Tt(), o = Aa();
    return (l, r) => (f(), b(s(Oe), {
      present: l.forceMount || s(n).open.value
    }, {
      default: v(() => [
        s(o).modal.value ? (f(), b(Bp, U(S({ key: 0 }, { ...l.$attrs, ...s(a) })), {
          default: v(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), b(Dp, U(S({ key: 1 }, { ...l.$attrs, ...s(a) })), {
          default: v(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Zl = /* @__PURE__ */ y({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), S({ role: "group" }, t), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sp = /* @__PURE__ */ y({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Op = /* @__PURE__ */ y({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Oa), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ep, Tp] = ne("MenuRadioGroup"), Ap = /* @__PURE__ */ y({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = ue(a, "modelValue", t);
    return Tp({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, l) => (f(), b(Zl, U(j(a)), {
      default: v(() => [
        _(o.$slots, "default", { modelValue: s(n) })
      ]),
      _: 3
    }, 16));
  }
}), Mp = /* @__PURE__ */ y({
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
    const a = e, n = t, { value: o } = ce(a), l = Ep(), r = C(
      () => l.modelValue.value === (o == null ? void 0 : o.value)
    );
    return Xl({ checked: r }), (i, d) => (f(), b(Ho, S({ role: "menuitemradio" }, a, {
      "aria-checked": r.value,
      "data-state": s(Vo)(r.value),
      onSelect: d[0] || (d[0] = async (c) => {
        n("select", c), s(l).onValueChange(s(o));
      })
    }), {
      default: v(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Ip = /* @__PURE__ */ y({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), S(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Jl, Vp] = ne("MenuSub"), Rp = /* @__PURE__ */ y({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = ue(a, "open", t, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = Tt(), l = T(), r = T();
    return ge((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), jl({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: r,
      onContentChange: (i) => {
        r.value = i;
      }
    }), Vp({
      triggerId: "",
      contentId: "",
      trigger: l,
      onTriggerChange: (i) => {
        l.value = i;
      }
    }), (i, d) => (f(), b(s(aa), null, {
      default: v(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Fp = /* @__PURE__ */ y({
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
    const a = te(e, t), n = Tt(), o = Aa(), l = Jl(), { forwardRef: r, currentElement: i } = z();
    return l.contentId || (l.contentId = ye(void 0, "radix-vue-menu-sub-content")), (d, c) => (f(), b(s(Oe), {
      present: d.forceMount || s(n).open.value
    }, {
      default: v(() => [
        D(Uo, S(s(a), {
          id: s(l).contentId,
          ref: s(r),
          "aria-labelledby": s(l).triggerId,
          align: "start",
          side: s(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = we((u) => {
            var p;
            s(o).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = we(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (u) => {
            u.defaultPrevented || u.target !== s(l).trigger.value && s(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (u) => {
            s(o).onClose(), u.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (u) => {
            var p, h;
            const m = (p = u.currentTarget) == null ? void 0 : p.contains(u.target), w = s(rc)[s(o).dir.value].includes(u.key);
            m && w && (s(n).onOpenChange(!1), (h = s(l).trigger.value) == null || h.focus(), u.preventDefault());
          })
        }), {
          default: v(() => [
            _(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Lp = /* @__PURE__ */ y({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Tt(), n = Aa(), o = Jl(), l = Ko(), r = T(null);
    o.triggerId || (o.triggerId = ye(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    _t(() => {
      i();
    });
    function d(p) {
      !xa(p) || l.onItemEnter(p) || !t.disabled && !a.open.value && !r.value && (l.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function c(p) {
      var h, m;
      if (!xa(p))
        return;
      i();
      const w = (h = a.content.value) == null ? void 0 : h.getBoundingClientRect();
      if (w != null && w.width) {
        const g = (m = a.content.value) == null ? void 0 : m.dataset.side, x = g === "right", $ = x ? -5 : 5, P = w[x ? "left" : "right"], k = w[x ? "right" : "left"];
        l.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + $, y: p.clientY },
            { x: P, y: w.top },
            { x: k, y: w.top },
            { x: k, y: w.bottom },
            { x: P, y: w.bottom }
          ],
          side: g
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
      var h;
      const m = l.searchRef.value !== "";
      t.disabled || m && p.key === " " || lc[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await oe(), (h = a.content.value) == null || h.focus(), p.preventDefault());
    }
    return (p, h) => (f(), b(Hl, { "as-child": "" }, {
      default: v(() => [
        D(Yl, S(t, {
          id: s(o).triggerId,
          ref: (m) => {
            var w;
            (w = s(o)) == null || w.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(o).contentId,
          "data-state": s(Io)(s(a).open.value),
          onClick: h[0] || (h[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), s(a).open.value || s(a).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: c,
          onKeydown: u
        }), {
          default: v(() => [
            _(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [Ql, zp] = ne("DropdownMenuRoot"), Np = /* @__PURE__ */ y({
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
    const o = ue(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), l = T(), { modal: r, dir: i } = ce(a), d = Xe(i);
    return zp({
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
    }), (c, u) => (f(), b(s(pp), {
      open: s(o),
      "onUpdate:open": u[0] || (u[0] = (p) => $a(o) ? o.value = p : null),
      dir: s(d),
      modal: s(r)
    }, {
      default: v(() => [
        _(c.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Wp = /* @__PURE__ */ y({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ql(), { forwardRef: n, currentElement: o } = z();
    return de(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = ye(void 0, "radix-vue-dropdown-menu-trigger")), (l, r) => (f(), b(s(Hl), { "as-child": "" }, {
      default: v(() => [
        D(s(F), {
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
          onKeydown: r[1] || (r[1] = Fe(
            (i) => {
              l.disabled || (["Enter", " "].includes(i.key) && s(a).onOpenToggle(), i.key === "ArrowDown" && s(a).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: v(() => [
            _(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Kp = /* @__PURE__ */ y({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Op), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Up = /* @__PURE__ */ y({
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
    const a = te(e, t);
    z();
    const n = Ql(), o = T(!1);
    function l(r) {
      r.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, r.preventDefault());
    }
    return n.contentId || (n.contentId = ye(void 0, "radix-vue-dropdown-menu-content")), (r, i) => {
      var d;
      return f(), b(s(Pp), S(s(a), {
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
          const p = c.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || h;
          (!s(n).modal.value || m) && (o.value = !0), (u = s(n).triggerElement.value) != null && u.contains(c.target) && c.preventDefault();
        })
      }), {
        default: v(() => [
          _(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), er = /* @__PURE__ */ y({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = Ot(t);
    return z(), (o, l) => (f(), b(s(Ho), U(j({ ...a, ...s(n) })), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hp = /* @__PURE__ */ y({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (f(), b(s(Zl), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jp = /* @__PURE__ */ y({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (f(), b(s(Ip), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gp = /* @__PURE__ */ y({
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
    const a = e, n = Ot(t);
    return z(), (o, l) => (f(), b(s(kp), U(j({ ...a, ...s(n) })), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tr = /* @__PURE__ */ y({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (f(), b(s($p), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qp = /* @__PURE__ */ y({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (f(), b(s(Sp), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yp = /* @__PURE__ */ y({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = Ot(t);
    return z(), (o, l) => (f(), b(s(Ap), U(j({ ...a, ...s(n) })), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xp = /* @__PURE__ */ y({
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
    const a = te(e, t);
    return z(), (n, o) => (f(), b(s(Mp), U(j(s(a))), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zp = /* @__PURE__ */ y({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = ue(a, "open", t, {
      passive: a.open === void 0,
      defaultValue: a.defaultOpen ?? !1
    });
    return z(), (o, l) => (f(), b(s(Rp), {
      open: s(n),
      "onUpdate:open": l[0] || (l[0] = (r) => $a(n) ? n.value = r : null)
    }, {
      default: v(() => [
        _(o.$slots, "default", { open: s(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Jp = /* @__PURE__ */ y({
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
    const a = te(e, t);
    return z(), (n, o) => (f(), b(s(Fp), S(s(a), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qp = /* @__PURE__ */ y({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (f(), b(s(Lp), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ef = /* @__PURE__ */ y({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (f(), b(s(F), S(t, {
      onMousedown: n[0] || (n[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [oa, tf] = ne("PaginationRoot"), af = /* @__PURE__ */ y({
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
    const a = e, n = t, { siblingCount: o, disabled: l, showEdges: r } = ce(a);
    z();
    const i = ue(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), d = C(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return tf({
      page: i,
      onPageChange(c) {
        i.value = c;
      },
      pageCount: d,
      siblingCount: o,
      disabled: l,
      showEdges: r
    }), (c, u) => (f(), b(s(F), {
      as: c.as,
      "as-child": c.asChild
    }, {
      default: v(() => [
        _(c.$slots, "default", {
          page: s(i),
          pageCount: d.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), nf = /* @__PURE__ */ y({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (f(), b(s(F), S(t, { "data-type": "ellipsis" }), {
      default: v(() => [
        _(a.$slots, "default", {}, () => [
          Y("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), of = /* @__PURE__ */ y({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = oa();
    return z(), (n, o) => (f(), b(s(F), S(t, {
      "aria-label": "First Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: s(a).page.value === 1 || s(a).disabled.value,
      onClick: o[0] || (o[0] = (l) => s(a).onPageChange(1))
    }), {
      default: v(() => [
        _(n.$slots, "default", {}, () => [
          Y("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), sf = /* @__PURE__ */ y({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = oa();
    return z(), (n, o) => (f(), b(s(F), S(t, {
      "aria-label": "Last Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: s(a).page.value === s(a).pageCount.value || s(a).disabled.value,
      onClick: o[0] || (o[0] = (l) => s(a).onPageChange(s(a).pageCount.value))
    }), {
      default: v(() => [
        _(n.$slots, "default", {}, () => [
          Y("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function pt(e, t) {
  const a = t - e + 1;
  return Array.from({ length: a }, (n, o) => o + e);
}
function lf(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const Wa = "ellipsis";
function rf(e, t, a, n) {
  const o = t, l = Math.max(e - a, 1), r = Math.min(e + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, t) - 2, d = l > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(l - 1) > 2, c = r < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - r) > 2;
    if (!d && c)
      return [...pt(1, i), Wa, o];
    if (d && !c) {
      const u = pt(o - i + 1, o);
      return [1, Wa, ...u];
    }
    if (d && c) {
      const u = pt(l, r);
      return [1, Wa, ...u, Wa, o];
    }
    return pt(1, o);
  } else {
    const i = a * 2 + 1;
    return t < i ? pt(1, o) : e <= a + 1 ? pt(1, i) : t - e <= a ? pt(t - i + 1, o) : pt(l, r);
  }
}
const df = /* @__PURE__ */ y({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    z();
    const a = oa(), n = C(() => lf(
      rf(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, l) => (f(), b(s(F), U(j(t)), {
      default: v(() => [
        _(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), db = /* @__PURE__ */ y({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    z();
    const a = oa(), n = C(() => a.page.value === t.value);
    return (o, l) => (f(), b(s(F), S(t, {
      "data-type": "page",
      "aria-label": `Page ${o.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: s(a).disabled.value,
      type: o.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (r) => s(a).onPageChange(o.value))
    }), {
      default: v(() => [
        _(o.$slots, "default", {}, () => [
          Y(J(o.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), uf = /* @__PURE__ */ y({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    z();
    const a = oa();
    return (n, o) => (f(), b(s(F), S(t, {
      "aria-label": "Next Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: s(a).page.value === s(a).pageCount.value || s(a).disabled.value,
      onClick: o[0] || (o[0] = (l) => s(a).onPageChange(s(a).page.value + 1))
    }), {
      default: v(() => [
        _(n.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), cf = /* @__PURE__ */ y({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    z();
    const a = oa();
    return (n, o) => {
      var l;
      return f(), b(s(F), S(t, {
        "aria-label": "Previous Page",
        type: n.as === "button" ? "button" : void 0,
        disabled: s(a).page.value === 1 || ((l = s(a).disabled) == null ? void 0 : l.value),
        onClick: o[0] || (o[0] = (r) => s(a).onPageChange(s(a).page.value - 1))
      }), {
        default: v(() => [
          _(n.$slots, "default", {}, () => [
            Y("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
}), [Ma, pf] = ne("PopoverRoot"), ff = /* @__PURE__ */ y({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o } = ce(a), l = ue(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = T(), i = T(!1);
    return pf({
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
    }), (d, c) => (f(), b(s(aa), null, {
      default: v(() => [
        _(d.$slots, "default", { open: s(l) })
      ]),
      _: 3
    }));
  }
}), vf = /* @__PURE__ */ y({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ma(), { forwardRef: n, currentElement: o } = z();
    return de(() => {
      a.triggerElement.value = o.value;
    }), (l, r) => (f(), b(Pe(s(a).hasCustomAnchor.value ? s(F) : s(hn)), { "as-child": "" }, {
      default: v(() => [
        D(s(F), {
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
            _(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), mf = /* @__PURE__ */ y({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Oa), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ar = /* @__PURE__ */ y({
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
    const a = e, n = t, o = se(a), { forwardRef: l } = z(), r = Ma();
    return So(), (i, d) => (f(), b(s(mn), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: d[6] || (d[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: v(() => [
        D(s(ea), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (c) => n("pointerDownOutside", c)),
          onInteractOutside: d[1] || (d[1] = (c) => n("interactOutside", c)),
          onEscapeKeyDown: d[2] || (d[2] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: d[3] || (d[3] = (c) => n("focusOutside", c)),
          onDismiss: d[4] || (d[4] = (c) => s(r).onOpenChange(!1))
        }, {
          default: v(() => [
            D(s(Yt), S(s(o), {
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
}), hf = /* @__PURE__ */ y({
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
    const a = e, n = t, o = Ma(), l = T(!1);
    Da(!0);
    const r = te(a, n), { forwardRef: i, currentElement: d } = z();
    return Sa(d), (c, u) => (f(), b(ar, S(s(r), {
      ref: s(i),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: u[0] || (u[0] = we(
        (p) => {
          var h;
          n("closeAutoFocus", p), l.value || (h = s(o).triggerElement.value) == null || h.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: u[1] || (u[1] = (p) => {
        n("pointerDownOutside", p);
        const h = p.detail.originalEvent, m = h.button === 0 && h.ctrlKey === !0, w = h.button === 2 || m;
        l.value = w;
      }),
      onFocusOutside: u[2] || (u[2] = we(() => {
      }, ["prevent"]))
    }), {
      default: v(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), gf = /* @__PURE__ */ y({
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
    const a = e, n = t, o = Ma(), l = T(!1), r = T(!1), i = te(a, n);
    return (d, c) => (f(), b(ar, S(s(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (u) => {
        var p;
        n("closeAutoFocus", u), u.defaultPrevented || (l.value || (p = s(o).triggerElement.value) == null || p.focus(), u.preventDefault()), l.value = !1, r.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = async (u) => {
        var p;
        n("interactOutside", u), u.defaultPrevented || (l.value = !0, u.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const h = u.target;
        (p = s(o).triggerElement.value) != null && p.contains(h) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && r.value && u.preventDefault();
      })
    }), {
      default: v(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yf = /* @__PURE__ */ y({
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
    const a = e, n = t, o = Ma(), l = te(a, n), { forwardRef: r } = z();
    return o.contentId || (o.contentId = ye(void 0, "radix-vue-popover-content")), (i, d) => (f(), b(s(Oe), {
      present: i.forceMount || s(o).open.value
    }, {
      default: v(() => [
        s(o).modal.value ? (f(), b(hf, S({ key: 0 }, s(l), { ref: s(r) }), {
          default: v(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), b(gf, S({ key: 1 }, s(l), { ref: s(r) }), {
          default: v(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function bf(e) {
  const t = C(() => e.start.value ? !!e.isDateDisabled(e.start.value) : !1), a = C(() => e.end.value ? !!e.isDateDisabled(e.end.value) : !1), n = C(
    () => t.value || a.value ? !1 : !!(e.start.value && e.end.value && ht(e.end.value, e.start.value))
  ), o = (d) => e.start.value ? Ce(e.start.value, d) : !1, l = (d) => e.end.value ? Ce(e.end.value, d) : !1, r = (d) => e.start.value && Ce(e.start.value, d) || e.end.value && Ce(e.end.value, d) ? !0 : e.end.value && e.start.value ? Yi(d, e.start.value, e.end.value) : !1, i = C(() => {
    if (e.start.value && e.end.value || !e.start.value || !e.focusedValue.value)
      return null;
    const d = ht(e.start.value, e.focusedValue.value), c = d ? e.start.value : e.focusedValue.value, u = d ? e.focusedValue.value : e.start.value;
    return Ce(c.add({ days: 1 }), u) ? {
      start: c,
      end: u
    } : Ji(c, u, e.isDateUnavailable, e.isDateDisabled) ? {
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
    isHighlightedStart: (d) => !i.value || !i.value.start ? !1 : Ce(i.value.start, d),
    isHighlightedEnd: (d) => !i.value || !i.value.end ? !1 : Ce(i.value.end, d)
  };
}
const _f = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, wf = {
  role: "heading",
  "aria-level": "2"
}, [sa, xf] = ne("RangeCalendarRoot"), Cf = /* @__PURE__ */ y({
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
      preventDeselect: h,
      isDateUnavailable: m,
      isDateDisabled: w,
      calendarLabel: g,
      maxValue: x,
      minValue: $,
      locale: P,
      dir: k,
      nextPage: O,
      prevPage: E
    } = ce(a), { primitiveElement: V, currentElement: A } = Et(), W = Xe(k), N = T(), B = T(), I = ue(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), R = _l({
      defaultPlaceholder: a.placeholder,
      defaultValue: I.value.start
    }), q = T(I.value.start), G = T(I.value.end), K = ue(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? R.copy(),
      passive: a.placeholder === void 0
    });
    function X(fe) {
      K.value = fe.copy();
    }
    const {
      fullCalendarLabel: le,
      headingValue: pe,
      isDateDisabled: me,
      isDateUnavailable: ke,
      isNextButtonDisabled: _e,
      isPrevButtonDisabled: da,
      grid: xt,
      weekdays: ua,
      isOutsideVisibleView: ut,
      nextPage: ca,
      prevPage: Ee,
      formatter: Be
    } = zl({
      locale: P,
      placeholder: K,
      weekStartsOn: d,
      fixedWeeks: u,
      numberOfMonths: p,
      minValue: $,
      maxValue: x,
      disabled: o,
      weekdayFormat: c,
      pagedNavigation: i,
      isDateDisabled: w.value,
      isDateUnavailable: m.value,
      calendarLabel: g,
      nextPage: O,
      prevPage: E
    }), {
      isInvalid: We,
      isSelected: ie,
      highlightedRange: $e,
      isSelectionStart: Je,
      isSelectionEnd: pa,
      isHighlightedStart: Hr,
      isHighlightedEnd: jr
    } = bf({
      start: q,
      end: G,
      isDateDisabled: me,
      isDateUnavailable: ke,
      focusedValue: B
    });
    return ee(I, (fe) => {
      fe.start && (!q.value || !Ke(q.value, fe.start)) && (q.value = fe.start.copy()), fe.end && (!G.value || !Ke(G.value, fe.end)) && (G.value = fe.end.copy());
    }), ee(q, (fe) => {
      fe && !Ke(fe, K.value) && X(fe), n("update:startValue", fe);
    }), ee([q, G], ([fe, ct]) => {
      const Me = I.value;
      if (!(Me && Me.start && Me.end && fe && ct && Ke(Me.start, fe) && Ke(Me.end, ct)))
        if (fe && ct) {
          if (Me.start && Me.end && Ke(Me.start, fe) && Ke(Me.end, ct))
            return;
          ht(ct, fe) ? I.value = {
            start: ct.copy(),
            end: fe.copy()
          } : I.value = {
            start: fe.copy(),
            end: ct.copy()
          };
        } else Me.start && Me.end && (I.value = {
          start: void 0,
          end: void 0
        });
    }), xf({
      isDateUnavailable: ke,
      startValue: q,
      endValue: G,
      formatter: Be,
      modelValue: I,
      placeholder: K,
      disabled: o,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: u,
      numberOfMonths: p,
      readonly: l,
      preventDeselect: h,
      fullCalendarLabel: le,
      headingValue: pe,
      isInvalid: We,
      isDateDisabled: me,
      highlightedRange: $e,
      focusedValue: B,
      lastPressedDateValue: N,
      isSelected: ie,
      isSelectionEnd: pa,
      isSelectionStart: Je,
      isNextButtonDisabled: _e,
      isPrevButtonDisabled: da,
      isOutsideVisibleView: ut,
      nextPage: ca,
      prevPage: Ee,
      parentElement: A,
      onPlaceholderChange: X,
      locale: P,
      dir: W,
      isHighlightedStart: Hr,
      isHighlightedEnd: jr
    }), de(() => {
      r.value && wl(A.value);
    }), (fe, ct) => (f(), b(s(F), {
      ref_key: "primitiveElement",
      ref: V,
      as: fe.as,
      "as-child": fe.asChild,
      role: "application",
      "aria-label": s(le),
      "data-readonly": s(l) ? "" : void 0,
      "data-disabled": s(o) ? "" : void 0,
      "data-invalid": s(We) ? "" : void 0,
      dir: s(W)
    }, {
      default: v(() => [
        re("div", _f, [
          re("div", wf, J(s(le)), 1)
        ]),
        _(fe.$slots, "default", {
          date: s(K),
          grid: s(xt),
          weekDays: s(ua),
          weekStartsOn: s(d),
          locale: s(P),
          fixedWeeks: s(u)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), $f = /* @__PURE__ */ y({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kf = /* @__PURE__ */ y({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = sa();
    return (n, o) => (f(), b(s(F), S(t, {
      "data-disabled": s(a).disabled.value ? "" : void 0
    }), {
      default: v(() => [
        _(n.$slots, "default", {
          headingValue: s(a).headingValue.value
        }, () => [
          Y(J(s(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Bf = /* @__PURE__ */ y({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = sa(), n = C(() => a.disabled.value ? !0 : void 0), o = C(() => a.readonly.value ? !0 : void 0);
    return (l, r) => (f(), b(s(F), S(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: v(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Df = /* @__PURE__ */ y({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = sa();
    return (a, n) => {
      var o, l;
      return f(), b(s(F), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": s(t).isSelected(a.date) ? !0 : void 0,
        "aria-disabled": s(t).isDateDisabled(a.date) || ((l = (o = s(t)).isDateUnavailable) == null ? void 0 : l.call(o, a.date)),
        "data-disabled": s(t).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: v(() => [
          _(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Pf = /* @__PURE__ */ y({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sf = /* @__PURE__ */ y({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = C(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = sa();
    return (o, l) => (f(), b(s(F), S(t, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (r) => s(n).nextPage(t.step, t.nextPage))
    }), {
      default: v(() => [
        _(o.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Of = /* @__PURE__ */ y({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = C(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = sa();
    return (o, l) => (f(), b(s(F), S(t, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (r) => s(n).prevPage(t.step, t.prevPage))
    }), {
      default: v(() => [
        _(o.$slots, "default", {}, () => [
          Y("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Ef = /* @__PURE__ */ y({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), S(t, { "aria-hidden": "true" }), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tf = /* @__PURE__ */ y({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Af = /* @__PURE__ */ y({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mf = /* @__PURE__ */ y({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = sa(), n = Ol(), { primitiveElement: o, currentElement: l } = Et(), r = C(() => a.formatter.custom(Re(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = C(() => a.isDateDisabled(t.day)), d = C(() => {
      var N;
      return (N = a.isDateUnavailable) == null ? void 0 : N.call(a, t.day);
    }), c = C(() => a.isSelected(t.day)), u = C(() => a.isSelectionStart(t.day)), p = C(() => a.isSelectionEnd(t.day)), h = C(() => a.isHighlightedStart(t.day)), m = C(() => a.isHighlightedEnd(t.day)), w = C(() => a.highlightedRange.value ? qi(t.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), g = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", x = C(() => Zs(t.day, Dt())), $ = C(() => !Xs(t.day, t.month)), P = C(
      () => a.isOutsideVisibleView(t.day)
    ), k = C(() => t.day.day.toLocaleString(a.locale.value)), O = C(() => !a.disabled.value && Ce(t.day, a.placeholder.value));
    function E(N, B) {
      var I;
      if (!a.readonly.value && !(a.isDateDisabled(B) || (I = a.isDateUnavailable) != null && I.call(a, B))) {
        if (a.lastPressedDateValue.value = B.copy(), a.startValue.value && a.highlightedRange.value === null) {
          if (Ce(B, a.startValue.value) && !a.preventDeselect.value && !a.endValue.value) {
            a.startValue.value = void 0, a.onPlaceholderChange(B);
            return;
          } else if (!a.endValue.value) {
            N.preventDefault(), a.lastPressedDateValue.value && Ce(a.lastPressedDateValue.value, B) && (a.startValue.value = B.copy());
            return;
          }
        }
        if (a.startValue.value && a.endValue.value && Ce(a.endValue.value, B) && !a.preventDeselect.value) {
          a.startValue.value = void 0, a.endValue.value = void 0, a.onPlaceholderChange(B);
          return;
        }
        a.startValue.value ? a.endValue.value ? a.endValue.value && a.startValue.value && (a.endValue.value = void 0, a.startValue.value = B.copy()) : a.endValue.value = B.copy() : a.startValue.value = B.copy();
      }
    }
    function V(N) {
      E(N, t.day);
    }
    function A() {
      var N;
      a.isDateDisabled(t.day) || (N = a.isDateUnavailable) != null && N.call(a, t.day) || (a.focusedValue.value = t.day.copy());
    }
    function W(N) {
      N.preventDefault(), N.stopPropagation();
      const B = a.parentElement.value, I = B ? Array.from(B.querySelectorAll(g)) : [];
      let R = I.indexOf(l.value);
      const q = 7, G = a.dir.value === "rtl" ? -1 : 1;
      switch (N.code) {
        case n.ARROW_RIGHT:
          R += G;
          break;
        case n.ARROW_LEFT:
          R -= G;
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
      if (R >= 0 && R < I.length) {
        I[R].focus();
        return;
      }
      if (R < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), oe(() => {
          const K = B ? Array.from(B.querySelectorAll(g)) : [];
          K[K.length - Math.abs(R)].focus();
        });
        return;
      }
      if (R >= I.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), oe(() => {
          (B ? Array.from(B.querySelectorAll(g)) : [])[R - I.length].focus();
        });
      }
    }
    return (N, B) => (f(), b(s(F), S({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": c.value ? !0 : void 0,
      "aria-disabled": $.value || i.value || d.value ? !0 : void 0,
      "data-highlighted": w.value ? "" : void 0,
      "data-selection-start": u.value ? !0 : void 0,
      "data-selection-end": p.value ? !0 : void 0,
      "data-highlighted-start": h.value ? !0 : void 0,
      "data-highlighted-end": m.value ? !0 : void 0,
      "data-selected": c.value ? !0 : void 0,
      "data-outside-visible-view": P.value ? "" : void 0,
      "data-value": N.day.toString(),
      "data-disabled": i.value || $.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": x.value ? "" : void 0,
      "data-outside-month": $.value ? "" : void 0,
      "data-focused": O.value ? "" : void 0,
      tabindex: O.value ? 0 : $.value || i.value ? void 0 : -1,
      onClick: V,
      onFocusin: A,
      onMouseenter: A,
      onKeydown: Fe(W, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: v(() => [
        _(N.$slots, "default", { dayValue: k.value }, () => [
          Y(J(k.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
}), If = ["default-value"], Vf = /* @__PURE__ */ y({
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
    const t = e, { value: a } = ce(t), n = T();
    return (o, l) => (f(), b(s(Ta), { "as-child": "" }, {
      default: v(() => [
        Zt(re("select", S({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": l[0] || (l[0] = (r) => $a(a) ? a.value = r : null),
          "default-value": s(a)
        }), [
          _(o.$slots, "default")
        ], 16, If), [
          [Qr, s(a)]
        ])
      ]),
      _: 3
    }));
  }
}), Rf = {
  key: 0,
  value: ""
}, [At, nr] = ne("SelectRoot"), [Ff, Lf] = ne("SelectRoot"), zf = /* @__PURE__ */ y({
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
    const a = e, n = t, o = ue(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), l = ue(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = T(), i = T(), d = T({
      x: 0,
      y: 0
    }), c = T(!1), { required: u, disabled: p, dir: h } = ce(a), m = Xe(h);
    nr({
      triggerElement: r,
      onTriggerChange: ($) => {
        r.value = $;
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
      open: l,
      required: u,
      onOpenChange: ($) => {
        l.value = $;
      },
      dir: m,
      triggerPointerDownPosRef: d,
      disabled: p
    });
    const w = Pa(r), g = T(/* @__PURE__ */ new Set()), x = C(() => Array.from(g.value).map(($) => {
      var P;
      return (P = $.props) == null ? void 0 : P.value;
    }).join(";"));
    return Lf({
      onNativeOptionAdd: ($) => {
        g.value.add($);
      },
      onNativeOptionRemove: ($) => {
        g.value.delete($);
      }
    }), ($, P) => (f(), b(s(aa), null, {
      default: v(() => [
        _($.$slots, "default", {
          modelValue: s(o),
          open: s(l)
        }),
        s(w) ? (f(), b(Vf, S({ key: x.value }, $.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(u),
          name: $.name,
          autocomplete: $.autocomplete,
          disabled: s(p),
          value: s(o),
          onChange: P[0] || (P[0] = (k) => o.value = k.target.value)
        }), {
          default: v(() => [
            s(o) === void 0 ? (f(), L("option", Rf)) : Z("", !0),
            (f(!0), L(Q, null, he(Array.from(g.value), (k) => (f(), b(Pe(k), S({ ref_for: !0 }, k.props, {
              key: k.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : Z("", !0)
      ]),
      _: 3
    }));
  }
}), Nf = [" ", "Enter", "ArrowUp", "ArrowDown"], Wf = [" ", "Enter"], tt = 10;
function or(e) {
  return e === "" || Ya(e);
}
const Kf = /* @__PURE__ */ y({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = At(), n = C(() => {
      var m;
      return ((m = a.disabled) == null ? void 0 : m.value) || t.disabled;
    }), { forwardRef: o, currentElement: l } = z();
    a.contentId || (a.contentId = ye(void 0, "radix-vue-select-content")), de(() => {
      a.triggerElement = l;
    });
    const { injectCollection: r } = Qt(), i = r(), { search: d, handleTypeaheadSearch: c, resetTypeahead: u } = Oo(i);
    function p() {
      n.value || (a.onOpenChange(!0), u());
    }
    function h(m) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, w) => (f(), b(s(hn), { "as-child": "" }, {
      default: v(() => {
        var g, x, $, P;
        return [
          D(s(F), {
            ref: s(o),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": s(a).contentId,
            "aria-expanded": s(a).open.value || !1,
            "aria-required": (g = s(a).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (x = s(a)) == null ? void 0 : x.dir.value,
            "data-state": ($ = s(a)) != null && $.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": s(or)((P = s(a).modelValue) == null ? void 0 : P.value) ? "" : void 0,
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
              O.hasPointerCapture(k.pointerId) && O.releasePointerCapture(k.pointerId), k.button === 0 && k.ctrlKey === !1 && (h(k), k.preventDefault());
            }),
            onPointerup: w[2] || (w[2] = we(
              (k) => {
                k.pointerType === "touch" && h(k);
              },
              ["prevent"]
            )),
            onKeydown: w[3] || (w[3] = (k) => {
              const O = s(d) !== "";
              !(k.ctrlKey || k.altKey || k.metaKey) && k.key.length === 1 && O && k.key === " " || (s(c)(k.key), s(Nf).includes(k.key) && (p(), k.preventDefault()));
            })
          }, {
            default: v(() => [
              _(m.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), Uf = /* @__PURE__ */ y({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Oa), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [jo, Hf] = ne("SelectItemAlignedPosition"), jf = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, { injectCollection: o } = Qt(), l = At(), r = Mt(), i = o(), d = T(!1), c = T(!0), u = T(), { forwardRef: p, currentElement: h } = z(), { viewport: m, selectedItem: w, selectedItemText: g, focusSelectedItem: x } = r;
    function $() {
      if (l.triggerElement.value && l.valueElement.value && u.value && h.value && m != null && m.value && w != null && w.value && g != null && g.value) {
        const O = l.triggerElement.value.getBoundingClientRect(), E = h.value.getBoundingClientRect(), V = l.valueElement.value.getBoundingClientRect(), A = g.value.getBoundingClientRect();
        if (l.dir.value !== "rtl") {
          const Ee = A.left - E.left, Be = V.left - Ee, We = O.left - Be, ie = O.width + We, $e = Math.max(ie, E.width), Je = window.innerWidth - tt, pa = tn(Be, tt, Je - $e);
          u.value.style.minWidth = `${ie}px`, u.value.style.left = `${pa}px`;
        } else {
          const Ee = E.right - A.right, Be = window.innerWidth - V.right - Ee, We = window.innerWidth - O.right - Be, ie = O.width + We, $e = Math.max(ie, E.width), Je = window.innerWidth - tt, pa = tn(
            Be,
            tt,
            Je - $e
          );
          u.value.style.minWidth = `${ie}px`, u.value.style.right = `${pa}px`;
        }
        const W = i.value, N = window.innerHeight - tt * 2, B = m.value.scrollHeight, I = window.getComputedStyle(h.value), R = Number.parseInt(
          I.borderTopWidth,
          10
        ), q = Number.parseInt(I.paddingTop, 10), G = Number.parseInt(
          I.borderBottomWidth,
          10
        ), K = Number.parseInt(
          I.paddingBottom,
          10
        ), X = R + q + B + K + G, le = Math.min(
          w.value.offsetHeight * 5,
          X
        ), pe = window.getComputedStyle(m.value), me = Number.parseInt(pe.paddingTop, 10), ke = Number.parseInt(
          pe.paddingBottom,
          10
        ), _e = O.top + O.height / 2 - tt, da = N - _e, xt = w.value.offsetHeight / 2, ua = w.value.offsetTop + xt, ut = R + q + ua, ca = X - ut;
        if (ut <= _e) {
          const Ee = w.value === W[W.length - 1];
          u.value.style.bottom = "0px";
          const Be = h.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, We = Math.max(
            da,
            xt + (Ee ? ke : 0) + Be + G
          ), ie = ut + We;
          u.value.style.height = `${ie}px`;
        } else {
          const Ee = w.value === W[0];
          u.value.style.top = "0px";
          const Be = Math.max(
            _e,
            R + m.value.offsetTop + (Ee ? me : 0) + xt
          ) + ca;
          u.value.style.height = `${Be}px`, m.value.scrollTop = ut - _e + m.value.offsetTop;
        }
        u.value.style.margin = `${tt}px 0`, u.value.style.minHeight = `${le}px`, u.value.style.maxHeight = `${N}px`, n("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const P = T("");
    de(async () => {
      await oe(), $(), h.value && (P.value = window.getComputedStyle(h.value).zIndex);
    });
    function k(O) {
      O && c.value === !0 && ($(), x == null || x(), c.value = !1);
    }
    return Hf({
      contentWrapper: u,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: k
    }), (O, E) => (f(), L("div", {
      ref_key: "contentWrapperElement",
      ref: u,
      style: dt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: P.value
      })
    }, [
      D(s(F), S({
        ref: s(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...O.$attrs, ...a }), {
        default: v(() => [
          _(O.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Gf = /* @__PURE__ */ y({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: tt },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = se(e);
    return (a, n) => (f(), b(s(Yt), S(s(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), la = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Mt, qf] = ne("SelectContent"), Yf = /* @__PURE__ */ y({
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
    const a = e, n = t, o = At();
    So(), Da(a.bodyLock);
    const { createCollection: l } = Qt(), r = T();
    Sa(r);
    const i = l(r), { search: d, handleTypeaheadSearch: c } = Oo(i), u = T(), p = T(), h = T(), m = T(!1), w = T(!1);
    function g() {
      p.value && r.value && Jn([p.value, r.value]);
    }
    ee(m, () => {
      g();
    });
    const { onOpenChange: x, triggerPointerDownPosRef: $ } = o;
    ge((E) => {
      if (!r.value)
        return;
      let V = { x: 0, y: 0 };
      const A = (N) => {
        var B, I;
        V = {
          x: Math.abs(
            Math.round(N.pageX) - (((B = $.value) == null ? void 0 : B.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(N.pageY) - (((I = $.value) == null ? void 0 : I.y) ?? 0)
          )
        };
      }, W = (N) => {
        var B;
        N.pointerType !== "touch" && (V.x <= 10 && V.y <= 10 ? N.preventDefault() : (B = r.value) != null && B.contains(N.target) || x(!1), document.removeEventListener("pointermove", A), $.value = null);
      };
      $.value !== null && (document.addEventListener("pointermove", A), document.addEventListener("pointerup", W, {
        capture: !0,
        once: !0
      })), E(() => {
        document.removeEventListener("pointermove", A), document.removeEventListener("pointerup", W, {
          capture: !0
        });
      });
    });
    function P(E) {
      const V = E.ctrlKey || E.altKey || E.metaKey;
      if (E.key === "Tab" && E.preventDefault(), !V && E.key.length === 1 && c(E.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(E.key)) {
        let A = i.value;
        if (["ArrowUp", "End"].includes(E.key) && (A = A.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(E.key)) {
          const W = E.target, N = A.indexOf(W);
          A = A.slice(N + 1);
        }
        setTimeout(() => Jn(A)), E.preventDefault();
      }
    }
    const k = C(() => a.position === "popper" ? a : {}), O = se(k.value);
    return qf({
      content: r,
      viewport: u,
      onViewportChange: (E) => {
        u.value = E;
      },
      itemRefCallback: (E, V, A) => {
        var W, N;
        const B = !w.value && !A;
        (((W = o.modelValue) == null ? void 0 : W.value) !== void 0 && ((N = o.modelValue) == null ? void 0 : N.value) === V || B) && (p.value = E, B && (w.value = !0));
      },
      selectedItem: p,
      selectedItemText: h,
      onItemLeave: () => {
        var E;
        (E = r.value) == null || E.focus();
      },
      itemTextRefCallback: (E, V, A) => {
        var W, N;
        const B = !w.value && !A;
        (((W = o.modelValue) == null ? void 0 : W.value) !== void 0 && ((N = o.modelValue) == null ? void 0 : N.value) === V || B) && (h.value = E);
      },
      focusSelectedItem: g,
      position: a.position,
      isPositioned: m,
      searchRef: d
    }), (E, V) => (f(), b(s(mn), {
      "as-child": "",
      onMountAutoFocus: V[6] || (V[6] = we(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: V[7] || (V[7] = (A) => {
        var W;
        n("closeAutoFocus", A), !A.defaultPrevented && ((W = s(o).triggerElement.value) == null || W.focus({ preventScroll: !0 }), A.preventDefault());
      })
    }, {
      default: v(() => [
        D(s(ea), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: V[2] || (V[2] = we(() => {
          }, ["prevent"])),
          onDismiss: V[3] || (V[3] = (A) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: V[4] || (V[4] = (A) => n("escapeKeyDown", A)),
          onPointerDownOutside: V[5] || (V[5] = (A) => n("pointerDownOutside", A))
        }, {
          default: v(() => [
            (f(), b(Pe(
              E.position === "popper" ? Gf : jf
            ), S({ ...E.$attrs, ...s(O) }, {
              id: s(o).contentId,
              ref: (A) => {
                r.value = s(Ae)(A);
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
              onContextmenu: V[0] || (V[0] = we(() => {
              }, ["prevent"])),
              onPlaced: V[1] || (V[1] = (A) => m.value = !0),
              onKeydown: P
            }), {
              default: v(() => [
                _(E.$slots, "default")
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
}), Xf = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return nr(e.context), (t, a) => _(t.$slots, "default");
  }
}), Zf = { key: 1 }, Jf = /* @__PURE__ */ y({
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
    const a = e, n = te(a, t), o = At(), l = T();
    de(() => {
      l.value = new DocumentFragment();
    });
    const r = T(), i = C(() => a.forceMount || o.open.value);
    return (d, c) => {
      var u;
      return i.value ? (f(), b(s(Oe), {
        key: 0,
        ref_key: "presenceRef",
        ref: r,
        present: !0
      }, {
        default: v(() => [
          D(Yf, U(j({ ...s(n), ...d.$attrs })), {
            default: v(() => [
              _(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((u = r.value) != null && u.present) && l.value ? (f(), L("div", Zf, [
        (f(), b(sn, { to: l.value }, [
          D(Xf, { context: s(o) }, {
            default: v(() => [
              _(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : Z("", !0);
    };
  }
}), Qf = /* @__PURE__ */ y({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), S({ "aria-hidden": "true" }, t), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [sr, ev] = ne("SelectItem"), tv = /* @__PURE__ */ y({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: a } = ce(t), n = At(), o = Mt(la), { forwardRef: l, currentElement: r } = z(), i = C(() => {
      var g;
      return ((g = n.modelValue) == null ? void 0 : g.value) === t.value;
    }), d = T(!1), c = T(t.textValue ?? ""), u = ye(void 0, "radix-vue-select-item-text");
    async function p(g) {
      await oe(), !(g != null && g.defaultPrevented) && (a.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function h(g) {
      var x;
      await oe(), !g.defaultPrevented && (a.value ? (x = o.onItemLeave) == null || x.call(o) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(g) {
      var x;
      await oe(), !g.defaultPrevented && g.currentTarget === document.activeElement && ((x = o.onItemLeave) == null || x.call(o));
    }
    async function w(g) {
      var x;
      await oe(), !(g.defaultPrevented || ((x = o.searchRef) == null ? void 0 : x.value) !== "" && g.key === " ") && (Wf.includes(g.key) && p(), g.key === " " && g.preventDefault());
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
    }), ev({
      value: t.value,
      disabled: a,
      textId: u,
      isSelected: i,
      onItemTextChange: (g) => {
        c.value = ((c.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, x) => (f(), b(s(F), {
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
      as: g.as,
      "as-child": g.asChild,
      onFocus: x[0] || (x[0] = ($) => d.value = !0),
      onBlur: x[1] || (x[1] = ($) => d.value = !1),
      onPointerup: p,
      onPointerdown: x[2] || (x[2] = ($) => {
        $.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: x[3] || (x[3] = we(() => {
      }, ["prevent", "stop"])),
      onPointermove: h,
      onPointerleave: m,
      onKeydown: w
    }, {
      default: v(() => [
        _(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), av = /* @__PURE__ */ y({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = sr();
    return (n, o) => s(a).isSelected.value ? (f(), b(s(F), S({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : Z("", !0);
  }
}), [nv, ov] = ne("SelectGroup"), sv = /* @__PURE__ */ y({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = ye(void 0, "radix-vue-select-group");
    return ov({ id: a }), (n, o) => (f(), b(s(F), S({ role: "group" }, t, { "aria-labelledby": s(a) }), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), lv = /* @__PURE__ */ y({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = nv({ id: "" });
    return (n, o) => (f(), b(s(F), S(t, {
      id: s(a).id
    }), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), lr = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = At(), n = Mt(la), o = Ff(), l = sr(), { forwardRef: r, currentElement: i } = z(), d = C(() => {
      var c;
      return Ue("option", {
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
    }), uo(() => {
      o.onNativeOptionRemove(d.value);
    }), (c, u) => (f(), L(Q, null, [
      D(s(F), S({
        id: s(l).textId,
        ref: s(r)
      }, { ...t, ...c.$attrs }), {
        default: v(() => [
          _(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(l).isSelected.value && s(a).valueElement.value && !s(a).valueElementHasChildren.value ? (f(), b(sn, {
        key: 0,
        to: s(a).valueElement.value
      }, [
        _(c.$slots, "default")
      ], 8, ["to"])) : Z("", !0)
    ], 64));
  }
}), rv = /* @__PURE__ */ y({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: a } = ce(t), n = op(a), o = Mt(la), l = o.position === "item-aligned" ? jo() : void 0, { forwardRef: r, currentElement: i } = z();
    de(() => {
      o == null || o.onViewportChange(i.value);
    });
    const d = T(0);
    function c(u) {
      const p = u.currentTarget, { shouldExpandOnScrollRef: h, contentWrapper: m } = l ?? {};
      if (h != null && h.value && m != null && m.value) {
        const w = Math.abs(d.value - p.scrollTop);
        if (w > 0) {
          const g = window.innerHeight - tt * 2, x = Number.parseFloat(
            m.value.style.minHeight
          ), $ = Number.parseFloat(m.value.style.height), P = Math.max(x, $);
          if (P < g) {
            const k = P + w, O = Math.min(g, k), E = k - O;
            m.value.style.height = `${O}px`, m.value.style.bottom === "0px" && (p.scrollTop = E > 0 ? E : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = p.scrollTop;
    }
    return (u, p) => (f(), L(Q, null, [
      D(s(F), S({
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
          _(u.$slots, "default")
        ]),
        _: 3
      }, 16),
      D(s(F), {
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
}), rr = /* @__PURE__ */ y({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const a = t, { injectCollection: n } = Qt(), o = n(), l = Mt(la), r = T(null);
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
    return uo(() => i()), (u, p) => {
      var h;
      return f(), b(s(F), S({
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
        default: v(() => [
          _(u.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), iv = /* @__PURE__ */ y({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Mt(la), a = t.position === "item-aligned" ? jo() : void 0, { forwardRef: n, currentElement: o } = z(), l = T(!1);
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
    }), (r, i) => l.value ? (f(), b(rr, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: c } = s(t);
        d != null && d.value && c != null && c.value && (d.value.scrollTop = d.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: v(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : Z("", !0);
  }
}), dv = /* @__PURE__ */ y({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Mt(la), a = t.position === "item-aligned" ? jo() : void 0, { forwardRef: n, currentElement: o } = z(), l = T(!1);
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
    }), (r, i) => l.value ? (f(), b(rr, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: c } = s(t);
        d != null && d.value && c != null && c.value && (d.value.scrollTop = d.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: v(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : Z("", !0);
  }
}), uv = /* @__PURE__ */ y({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: a } = z(), n = At(), o = zs();
    return Xr(() => {
      var l;
      const r = !!pn((l = o == null ? void 0 : o.default) == null ? void 0 : l.call(o)).length;
      n.onValueElementHasChildrenChange(r);
    }), de(() => {
      n.valueElement = a;
    }), (l, r) => (f(), b(s(F), {
      ref: s(t),
      as: l.as,
      "as-child": l.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: v(() => {
        var i;
        return [
          s(or)((i = s(n).modelValue) == null ? void 0 : i.value) ? (f(), L(Q, { key: 0 }, [
            Y(J(l.placeholder), 1)
          ], 64)) : _(l.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), cv = /* @__PURE__ */ y({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, a) => (f(), b(s(F), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: v(() => [
        _(t.$slots, "default", {}, () => [
          Y("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), pv = /* @__PURE__ */ y({
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
    const o = C(
      () => n(t.orientation) ? t.orientation : "horizontal"
    ), l = C(
      () => o.value === "vertical" ? t.orientation : void 0
    ), r = C(
      () => t.decorative ? { role: "none" } : { "aria-orientation": l.value, role: "separator" }
    );
    return (i, d) => (f(), b(s(F), S({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": o.value
    }, r.value), {
      default: v(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), fv = /* @__PURE__ */ y({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(pv, U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function vv(e = [], t, a) {
  const n = [...e];
  return n[a] = t, n.sort((o, l) => o - l);
}
function ir(e, t, a) {
  const n = 100 / (a - t) * (e - t);
  return tn(n, 0, 100);
}
function mv(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function hv(e, t) {
  if (e.length === 1)
    return 0;
  const a = e.map((o) => Math.abs(o - t)), n = Math.min(...a);
  return a.indexOf(n);
}
function gv(e, t, a) {
  const n = e / 2, o = Go([0, 50], [0, n]);
  return (n - o(t) * a) * a;
}
function yv(e) {
  return e.slice(0, -1).map((t, a) => e[a + 1] - t);
}
function bv(e, t) {
  if (t > 0) {
    const a = yv(e);
    return Math.min(...a) >= t;
  }
  return !0;
}
function Go(e, t) {
  return (a) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (a - e[0]);
  };
}
function _v(e) {
  return (String(e).split(".")[1] || "").length;
}
function wv(e, t) {
  const a = 10 ** t;
  return Math.round(e * a) / a;
}
const dr = ["PageUp", "PageDown"], ur = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], cr = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [pr, fr] = ne(["SliderVertical", "SliderHorizontal"]), vr = /* @__PURE__ */ y({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = yn();
    return (l, r) => (f(), b(s(F), S({ "data-slider-impl": "" }, a, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : s(dr).concat(s(ur)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: r[1] || (r[1] = (i) => {
        const d = i.target;
        d.setPointerCapture(i.pointerId), i.preventDefault(), s(o).thumbElements.value.includes(d) ? d.focus() : n("slideStart", i);
      }),
      onPointermove: r[2] || (r[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && n("slideMove", i);
      }),
      onPointerup: r[3] || (r[3] = (i) => {
        const d = i.target;
        d.hasPointerCapture(i.pointerId) && (d.releasePointerCapture(i.pointerId), n("slideEnd", i));
      })
    }), {
      default: v(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xv = /* @__PURE__ */ y({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, { max: o, min: l, dir: r, inverted: i } = ce(a), { forwardRef: d, currentElement: c } = z(), u = T(), p = C(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function h(m) {
      const w = u.value || c.value.getBoundingClientRect(), g = [0, w.width], x = p.value ? [l.value, o.value] : [o.value, l.value], $ = Go(g, x);
      return u.value = w, $(m - w.left);
    }
    return fr({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, w) => (f(), b(vr, {
      ref: s(d),
      dir: s(r),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: w[0] || (w[0] = (g) => {
        const x = h(g.clientX);
        n("slideStart", x);
      }),
      onSlideMove: w[1] || (w[1] = (g) => {
        const x = h(g.clientX);
        n("slideMove", x);
      }),
      onSlideEnd: w[2] || (w[2] = () => {
        u.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: w[3] || (w[3] = (g) => {
        const x = p.value ? "from-left" : "from-right", $ = s(cr)[x].includes(g.key);
        n("stepKeyDown", g, $ ? -1 : 1);
      }),
      onEndKeyDown: w[4] || (w[4] = (g) => n("endKeyDown", g)),
      onHomeKeyDown: w[5] || (w[5] = (g) => n("homeKeyDown", g))
    }, {
      default: v(() => [
        _(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), Cv = /* @__PURE__ */ y({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, { max: o, min: l, inverted: r } = ce(a), { forwardRef: i, currentElement: d } = z(), c = T(), u = C(() => !r.value);
    function p(h) {
      const m = c.value || d.value.getBoundingClientRect(), w = [0, m.height], g = u.value ? [o.value, l.value] : [l.value, o.value], x = Go(w, g);
      return c.value = m, x(h - m.top);
    }
    return fr({
      startEdge: u.value ? "bottom" : "top",
      endEdge: u.value ? "top" : "bottom",
      size: "height",
      direction: u.value ? 1 : -1
    }), (h, m) => (f(), b(vr, {
      ref: s(i),
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
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (w) => {
        const g = u.value ? "from-bottom" : "from-top", x = s(cr)[g].includes(w.key);
        n("stepKeyDown", w, x ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (w) => n("endKeyDown", w)),
      onHomeKeyDown: m[5] || (m[5] = (w) => n("homeKeyDown", w))
    }, {
      default: v(() => [
        _(h.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), $v = ["value", "name", "disabled", "step"], [yn, kv] = ne("SliderRoot"), Bv = /* @__PURE__ */ y({
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
    const a = e, n = t, { min: o, max: l, step: r, minStepsBetweenThumbs: i, orientation: d, disabled: c, dir: u } = ce(a), p = Xe(u), { forwardRef: h, currentElement: m } = z(), w = Pa(m);
    zo();
    const g = ue(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), x = T(0), $ = T(g.value);
    function P(A) {
      const W = hv(g.value, A);
      E(A, W);
    }
    function k(A) {
      E(A, x.value);
    }
    function O() {
      const A = $.value[x.value];
      g.value[x.value] !== A && n("valueCommit", ei(g.value));
    }
    function E(A, W, { commit: N } = { commit: !1 }) {
      var B;
      const I = _v(r.value), R = wv(Math.round((A - o.value) / r.value) * r.value + o.value, I), q = tn(R, o.value, l.value), G = vv(g.value, q, W);
      if (bv(G, i.value * r.value)) {
        x.value = G.indexOf(q);
        const K = String(G) !== String(g.value);
        K && N && n("valueCommit", G), K && ((B = V.value[x.value]) == null || B.focus(), g.value = G);
      }
    }
    const V = T([]);
    return kv({
      modelValue: g,
      valueIndexToChangeRef: x,
      thumbElements: V,
      orientation: d,
      min: o,
      max: l,
      disabled: c
    }), (A, W) => (f(), L(Q, null, [
      D(s(No), null, {
        default: v(() => [
          (f(), b(Pe(s(d) === "horizontal" ? xv : Cv), S(A.$attrs, {
            ref: s(h),
            "as-child": A.asChild,
            as: A.as,
            min: s(o),
            max: s(l),
            dir: s(p),
            inverted: A.inverted,
            "aria-disabled": s(c),
            "data-disabled": s(c) ? "" : void 0,
            onPointerdown: W[0] || (W[0] = () => {
              s(c) || ($.value = s(g));
            }),
            onSlideStart: W[1] || (W[1] = (N) => !s(c) && P(N)),
            onSlideMove: W[2] || (W[2] = (N) => !s(c) && k(N)),
            onSlideEnd: W[3] || (W[3] = (N) => !s(c) && O()),
            onHomeKeyDown: W[4] || (W[4] = (N) => !s(c) && E(s(o), 0, { commit: !0 })),
            onEndKeyDown: W[5] || (W[5] = (N) => !s(c) && E(s(l), s(g).length - 1, { commit: !0 })),
            onStepKeyDown: W[6] || (W[6] = (N, B) => {
              if (!s(c)) {
                const I = s(dr).includes(N.key) || N.shiftKey && s(ur).includes(N.key) ? 10 : 1, R = x.value, q = s(g)[R], G = s(r) * I * B;
                E(q + G, R, { commit: !0 });
              }
            })
          }), {
            default: v(() => [
              _(A.$slots, "default", { modelValue: s(g) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      s(w) ? (f(!0), L(Q, { key: 0 }, he(s(g), (N, B) => (f(), L("input", {
        key: B,
        value: N,
        type: "number",
        style: { display: "none" },
        name: A.name ? A.name + (s(g).length > 1 ? "[]" : "") : void 0,
        disabled: s(c),
        step: s(r)
      }, null, 8, $v))), 128)) : Z("", !0)
    ], 64));
  }
}), Dv = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = yn(), n = pr(), { forwardRef: o, currentElement: l } = z(), r = C(() => {
      var m, w;
      return (w = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : w[t.index];
    }), i = C(() => r.value === void 0 ? 0 : ir(r.value, a.min.value ?? 0, a.max.value ?? 100)), d = C(() => {
      var m, w;
      return mv(t.index, ((w = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : w.length) ?? 0);
    }), c = Sl(l), u = C(() => c[n.size].value), p = C(() => u.value ? gv(u.value, i.value, n.direction) : 0), h = Po();
    return de(() => {
      a.thumbElements.value.push(l.value);
    }), _t(() => {
      const m = a.thumbElements.value.findIndex((w) => w === l.value) ?? -1;
      a.thumbElements.value.splice(m, 1);
    }), (m, w) => (f(), b(s(gn), null, {
      default: v(() => [
        D(s(F), S(m.$attrs, {
          ref: s(o),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: s(a).disabled.value ? void 0 : 0,
          "aria-label": m.$attrs["aria-label"] || d.value,
          "data-disabled": s(a).disabled.value ? "" : void 0,
          "data-orientation": s(a).orientation.value,
          "aria-valuenow": r.value,
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
            display: !s(h) && r.value === void 0 ? "none" : void 0
          },
          onFocus: w[0] || (w[0] = () => {
            s(a).valueIndexToChangeRef.value = m.index;
          })
        }), {
          default: v(() => [
            _(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), Pv = /* @__PURE__ */ y({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: a } = Wo(), { forwardRef: n, currentElement: o } = z(), l = C(() => o.value ? a().findIndex((r) => r.ref === o.value) : -1);
    return (r, i) => (f(), b(Dv, S({ ref: s(n) }, t, { index: l.value }), {
      default: v(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Sv = /* @__PURE__ */ y({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = yn();
    return z(), (a, n) => (f(), b(s(F), {
      "as-child": a.asChild,
      as: a.as,
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value
    }, {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), Ov = /* @__PURE__ */ y({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = yn(), a = pr();
    z();
    const n = C(() => {
      var r, i;
      return (i = (r = t.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (d) => ir(d, t.min.value, t.max.value)
      );
    }), o = C(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), l = C(() => 100 - Math.max(...n.value));
    return (r, i) => (f(), b(s(F), {
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: dt({
        [s(a).startEdge]: `${o.value}%`,
        [s(a).endEdge]: `${l.value}%`
      })
    }, {
      default: v(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function Ev() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
Ev();
const Tv = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Av, Mv] = ne("SwitchRoot"), Iv = /* @__PURE__ */ y({
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
    const a = e, n = t, { disabled: o } = ce(a), l = ue(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    });
    function r() {
      o.value || (l.value = !l.value);
    }
    const { forwardRef: i, currentElement: d } = z(), c = Pa(d), u = C(() => {
      var p;
      return a.id && d.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Mv({
      checked: l,
      toggleCheck: r,
      disabled: o
    }), (p, h) => (f(), L(Q, null, [
      D(s(F), S(p.$attrs, {
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
        onKeydown: Fe(we(r, ["prevent"]), ["enter"])
      }), {
        default: v(() => [
          _(p.$slots, "default", { checked: s(l) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(c) ? (f(), L("input", {
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
      }, null, 8, Tv)) : Z("", !0)
    ], 64));
  }
}), Vv = /* @__PURE__ */ y({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Av();
    return z(), (a, n) => {
      var o;
      return f(), b(s(F), {
        "data-state": (o = s(t).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": s(t).disabled.value ? "" : void 0,
        "as-child": a.asChild,
        as: a.as
      }, {
        default: v(() => [
          _(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [qo, Rv] = ne("TabsRoot"), Fv = /* @__PURE__ */ y({
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
    const a = e, n = t, { orientation: o, dir: l } = ce(a), r = Xe(l);
    z();
    const i = ue(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), d = T();
    return Rv({
      modelValue: i,
      changeModelValue: (c) => {
        i.value = c;
      },
      orientation: o,
      dir: r,
      activationMode: a.activationMode,
      baseId: ye(void 0, "radix-vue-tabs"),
      tabsList: d
    }), (c, u) => (f(), b(s(F), {
      dir: s(r),
      "data-orientation": s(o),
      "as-child": c.asChild,
      as: c.as
    }, {
      default: v(() => [
        _(c.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), Lv = /* @__PURE__ */ y({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: a } = ce(t), { forwardRef: n, currentElement: o } = z(), l = qo();
    return l.tabsList = o, (r, i) => (f(), b(s(ql), {
      "as-child": "",
      orientation: s(l).orientation.value,
      dir: s(l).dir.value,
      loop: s(a)
    }, {
      default: v(() => [
        D(s(F), {
          ref: s(n),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": s(l).orientation.value
        }, {
          default: v(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function mr(e, t) {
  return `${e}-trigger-${t}`;
}
function hr(e, t) {
  return `${e}-content-${t}`;
}
const zv = /* @__PURE__ */ y({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a } = z(), n = qo(), o = C(() => mr(n.baseId, t.value)), l = C(() => hr(n.baseId, t.value)), r = C(() => t.value === n.modelValue.value), i = T(r.value);
    return de(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (d, c) => (f(), b(s(Oe), {
      present: r.value,
      "force-mount": ""
    }, {
      default: v(({ present: u }) => [
        D(s(F), {
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
          style: dt({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: v(() => [
            d.forceMount || r.value ? _(d.$slots, "default", { key: 0 }) : Z("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Nv = /* @__PURE__ */ y({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: a } = z(), n = qo(), o = C(() => mr(n.baseId, t.value)), l = C(() => hr(n.baseId, t.value)), r = C(() => t.value === n.modelValue.value);
    return (i, d) => (f(), b(s(wp), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: v(() => [
        D(s(F), {
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
          onMousedown: d[0] || (d[0] = we((c) => {
            !i.disabled && c.ctrlKey === !1 ? s(n).changeModelValue(i.value) : c.preventDefault();
          }, ["left"])),
          onKeydown: d[1] || (d[1] = Fe((c) => s(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: d[2] || (d[2] = () => {
            const c = s(n).activationMode !== "manual";
            !r.value && !i.disabled && c && s(n).changeModelValue(i.value);
          })
        }, {
          default: v(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [bn, Wv] = ne("ToastProvider"), Kv = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: a, duration: n, swipeDirection: o, swipeThreshold: l } = ce(t), r = T(), i = T(0), d = T(!1), c = T(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const u = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(u);
    }
    return Wv({
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
    }), (u, p) => _(u.$slots, "default");
  }
}), Uv = "toast.swipeStart", Hv = "toast.swipeMove", jv = "toast.swipeCancel", Gv = "toast.swipeEnd", eo = "toast.viewportPause", to = "toast.viewportResume";
function Ka(e, t, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function ws(e, t, a = 0) {
  const n = Math.abs(e.x), o = Math.abs(e.y), l = n > o;
  return t === "left" || t === "right" ? l && n > a : !l && o > a;
}
function qv(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function gr(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && t.push(a.textContent), qv(a)) {
      const n = a.ariaHidden || a.hidden || a.style.display === "none", o = a.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const l = a.dataset.radixToastAnnounceAlt;
          l && t.push(l);
        } else
          t.push(...gr(a));
    }
  }), t;
}
const Yv = /* @__PURE__ */ y({
  __name: "ToastAnnounce",
  setup(e) {
    const t = bn(), a = au(1e3), n = T(!1);
    return kl(() => {
      n.value = !0;
    }), (o, l) => s(a) || n.value ? (f(), b(s(Ta), { key: 0 }, {
      default: v(() => [
        Y(J(s(t).label.value) + " ", 1),
        _(o.$slots, "default")
      ]),
      _: 3
    })) : Z("", !0);
  }
}), [Xv, Zv] = ne("ToastRoot"), Jv = /* @__PURE__ */ y({
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
    const a = e, n = t, { forwardRef: o, currentElement: l } = z(), r = bn(), i = T(null), d = T(null), c = C(() => a.duration || r.duration.value), u = T(0), p = T(c.value), h = T(0), m = T(c.value), w = kl(() => {
      const P = (/* @__PURE__ */ new Date()).getTime() - u.value;
      m.value = Math.max(p.value - P, 0);
    }, { fpsLimit: 60 });
    function g(P) {
      !P || P === Number.POSITIVE_INFINITY || Ye && (window.clearTimeout(h.value), u.value = (/* @__PURE__ */ new Date()).getTime(), h.value = window.setTimeout(x, P));
    }
    function x() {
      var P, k;
      (P = l.value) != null && P.contains(document.activeElement) && ((k = r.viewport.value) == null || k.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const $ = C(() => l.value ? gr(l.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const P = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(P);
    }
    return ge((P) => {
      const k = r.viewport.value;
      if (k) {
        const O = () => {
          g(p.value), w.resume(), n("resume");
        }, E = () => {
          const V = (/* @__PURE__ */ new Date()).getTime() - u.value;
          p.value = p.value - V, window.clearTimeout(h.value), w.pause(), n("pause");
        };
        return k.addEventListener(eo, E), k.addEventListener(to, O), () => {
          k.removeEventListener(eo, E), k.removeEventListener(to, O);
        };
      }
    }), ee(() => [a.open, c.value], () => {
      p.value = c.value, a.open && !r.isClosePausedRef.value && g(c.value);
    }, { immediate: !0 }), Do("Escape", (P) => {
      n("escapeKeyDown", P), P.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, x());
    }), de(() => {
      r.onToastAdd();
    }), _t(() => {
      r.onToastRemove();
    }), Zv({ onClose: x }), (P, k) => (f(), L(Q, null, [
      $.value ? (f(), b(Yv, {
        key: 0,
        role: "status",
        "aria-live": P.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: v(() => [
          Y(J($.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : Z("", !0),
      s(r).viewport.value ? (f(), b(sn, {
        key: 1,
        to: s(r).viewport.value
      }, [
        D(s(F), S({
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
          onPointerdown: k[0] || (k[0] = we((O) => {
            i.value = { x: O.clientX, y: O.clientY };
          }, ["left"])),
          onPointermove: k[1] || (k[1] = (O) => {
            if (!i.value) return;
            const E = O.clientX - i.value.x, V = O.clientY - i.value.y, A = !!d.value, W = ["left", "right"].includes(s(r).swipeDirection.value), N = ["left", "up"].includes(s(r).swipeDirection.value) ? Math.min : Math.max, B = W ? N(0, E) : 0, I = W ? 0 : N(0, V), R = O.pointerType === "touch" ? 10 : 2, q = { x: B, y: I }, G = { originalEvent: O, delta: q };
            A ? (d.value = q, s(Ka)(s(Hv), (K) => n("swipeMove", K), G)) : s(ws)(q, s(r).swipeDirection.value, R) ? (d.value = q, s(Ka)(s(Uv), (K) => n("swipeStart", K), G), O.target.setPointerCapture(O.pointerId)) : (Math.abs(E) > R || Math.abs(V) > R) && (i.value = null);
          }),
          onPointerup: k[2] || (k[2] = (O) => {
            const E = d.value, V = O.target;
            if (V.hasPointerCapture(O.pointerId) && V.releasePointerCapture(O.pointerId), d.value = null, i.value = null, E) {
              const A = O.currentTarget, W = { originalEvent: O, delta: E };
              s(ws)(E, s(r).swipeDirection.value, s(r).swipeThreshold.value) ? s(Ka)(s(Gv), (N) => n("swipeEnd", N), W) : s(Ka)(s(jv), (N) => n("swipeCancel", N), W), A == null || A.addEventListener("click", (N) => N.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: v(() => [
            _(P.$slots, "default", {
              remaining: m.value,
              duration: c.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : Z("", !0)
    ], 64));
  }
}), Qv = /* @__PURE__ */ y({
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
    const a = e, n = t, { forwardRef: o } = z(), l = ue(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    return (r, i) => (f(), b(s(Oe), {
      present: r.forceMount || s(l)
    }, {
      default: v(() => [
        D(Jv, S({
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
            _(r.$slots, "default", {
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
}), yr = /* @__PURE__ */ y({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, a) => (f(), b(s(F), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: v(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), br = /* @__PURE__ */ y({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Xv(), { forwardRef: n } = z();
    return (o, l) => (f(), b(yr, { "as-child": "" }, {
      default: v(() => [
        D(s(F), S(t, {
          ref: s(n),
          type: o.as === "button" ? "button" : void 0,
          onClick: l[0] || (l[0] = (r) => s(a).onClose())
        }), {
          default: v(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), em = /* @__PURE__ */ y({
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
    return (a, n) => a.altText ? (f(), b(yr, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: v(() => [
        D(br, {
          ref: s(t),
          as: a.as,
          "as-child": a.asChild
        }, {
          default: v(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : Z("", !0);
  }
}), xs = /* @__PURE__ */ y({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const a = t, n = bn();
    return (o, l) => (f(), b(s(Ta), {
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
        _(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), tm = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: a, label: n } = ce(t), { forwardRef: o, currentElement: l } = z(), { createCollection: r } = Qt(), i = r(l), d = bn(), c = C(() => d.toastCount.value > 0), u = T(), p = T(), h = C(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Do(a.value, () => {
      l.value.focus();
    }), de(() => {
      d.onViewportChange(l.value);
    }), ge((w) => {
      const g = l.value;
      if (c.value && g) {
        const x = () => {
          if (!d.isClosePausedRef.value) {
            const E = new CustomEvent(eo);
            g.dispatchEvent(E), d.isClosePausedRef.value = !0;
          }
        }, $ = () => {
          if (d.isClosePausedRef.value) {
            const E = new CustomEvent(to);
            g.dispatchEvent(E), d.isClosePausedRef.value = !1;
          }
        }, P = (E) => {
          !g.contains(E.relatedTarget) && $();
        }, k = () => {
          g.contains(document.activeElement) || $();
        }, O = (E) => {
          var V, A, W;
          const N = E.altKey || E.ctrlKey || E.metaKey;
          if (E.key === "Tab" && !N) {
            const B = document.activeElement, I = E.shiftKey;
            if (E.target === g && I) {
              (V = u.value) == null || V.focus();
              return;
            }
            const R = m({ tabbingDirection: I ? "backwards" : "forwards" }), q = R.findIndex((G) => G === B);
            Xa(R.slice(q + 1)) ? E.preventDefault() : I ? (A = u.value) == null || A.focus() : (W = p.value) == null || W.focus();
          }
        };
        g.addEventListener("focusin", x), g.addEventListener("focusout", P), g.addEventListener("pointermove", x), g.addEventListener("pointerleave", k), g.addEventListener("keydown", O), window.addEventListener("blur", x), window.addEventListener("focus", $), w(() => {
          g.removeEventListener("focusin", x), g.removeEventListener("focusout", P), g.removeEventListener("pointermove", x), g.removeEventListener("pointerleave", k), g.removeEventListener("keydown", O), window.removeEventListener("blur", x), window.removeEventListener("focus", $);
        });
      }
    });
    function m({ tabbingDirection: w }) {
      const g = i.value.map((x) => {
        const $ = [x, ...Mo(x)];
        return w === "forwards" ? $ : $.reverse();
      });
      return (w === "forwards" ? g.reverse() : g).flat();
    }
    return (w, g) => (f(), b(s(Xu), {
      role: "region",
      "aria-label": typeof s(n) == "string" ? s(n).replace("{hotkey}", h.value) : s(n)(h.value),
      tabindex: "-1",
      style: dt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: v(() => [
        c.value ? (f(), b(xs, {
          key: 0,
          ref: (x) => {
            u.value = s(Ae)(x);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const x = m({
              tabbingDirection: "forwards"
            });
            s(Xa)(x);
          })
        }, null, 512)) : Z("", !0),
        D(s(F), S({
          ref: s(o),
          tabindex: "-1",
          as: w.as,
          "as-child": w.asChild
        }, w.$attrs), {
          default: v(() => [
            _(w.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        c.value ? (f(), b(xs, {
          key: 1,
          ref: (x) => {
            p.value = s(Ae)(x);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const x = m({
              tabbingDirection: "backwards"
            });
            s(Xa)(x);
          })
        }, null, 512)) : Z("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), am = /* @__PURE__ */ y({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (f(), b(s(F), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nm = /* @__PURE__ */ y({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (a, n) => (f(), b(s(F), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _r = "tooltip.open", [Yo, om] = ne("TooltipProvider"), wr = /* @__PURE__ */ y({
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
    const t = e, { delayDuration: a, skipDelayDuration: n, disableHoverableContent: o, disableClosingTrigger: l, ignoreNonKeyboardFocus: r, disabled: i } = ce(t);
    z();
    const d = T(!0), c = T(!1), { start: u, stop: p } = Bo(() => {
      d.value = !0;
    }, n, { immediate: !1 });
    return om({
      isOpenDelayed: d,
      delayDuration: a,
      onOpen() {
        p(), d.value = !1;
      },
      onClose() {
        u();
      },
      isPointerInTransitRef: c,
      disableHoverableContent: o,
      disableClosingTrigger: l,
      disabled: i,
      ignoreNonKeyboardFocus: r
    }), (h, m) => _(h.$slots, "default");
  }
}), [_n, sm] = ne("TooltipRoot"), lm = /* @__PURE__ */ y({
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
    const o = Yo(), l = C(() => a.disableHoverableContent ?? o.disableHoverableContent.value), r = C(() => a.disableClosingTrigger ?? o.disableClosingTrigger.value), i = C(() => a.disabled ?? o.disabled.value), d = C(() => a.delayDuration ?? o.delayDuration.value), c = C(() => a.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), u = ue(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    ee(u, (k) => {
      o.onClose && (k ? (o.onOpen(), document.dispatchEvent(new CustomEvent(_r))) : o.onClose());
    });
    const p = T(!1), h = T(), m = C(() => u.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: w, stop: g } = Bo(() => {
      p.value = !0, u.value = !0;
    }, d, { immediate: !1 });
    function x() {
      g(), p.value = !1, u.value = !0;
    }
    function $() {
      g(), u.value = !1;
    }
    function P() {
      w();
    }
    return sm({
      contentId: "",
      open: u,
      stateAttribute: m,
      trigger: h,
      onTriggerChange(k) {
        h.value = k;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? P() : x();
      },
      onTriggerLeave() {
        l.value ? $() : g();
      },
      onOpen: x,
      onClose: $,
      disableHoverableContent: l,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: c
    }), (k, O) => (f(), b(s(aa), null, {
      default: v(() => [
        _(k.$slots, "default", { open: s(u) })
      ]),
      _: 3
    }));
  }
}), rm = /* @__PURE__ */ y({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = _n(), n = Yo();
    a.contentId || (a.contentId = ye(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: l } = z(), r = T(!1), i = T(!1), d = C(() => a.disabled.value ? {} : {
      click: g,
      focus: m,
      pointermove: p,
      pointerleave: h,
      pointerdown: u,
      blur: w
    });
    de(() => {
      a.onTriggerChange(l.value);
    });
    function c() {
      setTimeout(() => {
        r.value = !1;
      }, 1);
    }
    function u() {
      r.value = !0, document.addEventListener("pointerup", c, { once: !0 });
    }
    function p(x) {
      x.pointerType !== "touch" && !i.value && !n.isPointerInTransitRef.value && (a.onTriggerEnter(), i.value = !0);
    }
    function h() {
      a.onTriggerLeave(), i.value = !1;
    }
    function m(x) {
      var $, P;
      r.value || a.ignoreNonKeyboardFocus.value && !((P = ($ = x.target).matches) != null && P.call($, ":focus-visible")) || a.onOpen();
    }
    function w() {
      a.onClose();
    }
    function g() {
      a.disableClosingTrigger.value || a.onClose();
    }
    return (x, $) => (f(), b(s(hn), { "as-child": "" }, {
      default: v(() => [
        D(s(F), S({
          ref: s(o),
          "aria-describedby": s(a).open.value ? s(a).contentId : void 0,
          "data-state": s(a).stateAttribute.value,
          as: x.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Zr(d.value)), {
          default: v(() => [
            _(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), xr = /* @__PURE__ */ y({
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
    const a = e, n = t, o = _n(), { forwardRef: l } = z(), r = zs(), i = C(() => {
      var u;
      return (u = r.default) == null ? void 0 : u.call(r);
    }), d = C(() => {
      var u;
      if (a.ariaLabel)
        return a.ariaLabel;
      let p = "";
      function h(m) {
        typeof m.children == "string" && m.type !== Fs ? p += m.children : Array.isArray(m.children) && m.children.forEach((w) => h(w));
      }
      return (u = i.value) == null || u.forEach((m) => h(m)), p;
    }), c = C(() => {
      const { ariaLabel: u, ...p } = a;
      return p;
    });
    return de(() => {
      qt(window, "scroll", (u) => {
        const p = u.target;
        p != null && p.contains(o.trigger.value) && o.onClose();
      }), qt(window, _r, o.onClose);
    }), (u, p) => (f(), b(s(ea), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (h) => n("escapeKeyDown", h)),
      onPointerDownOutside: p[1] || (p[1] = (h) => {
        var m;
        s(o).disableClosingTrigger.value && (m = s(o).trigger.value) != null && m.contains(h.target) && h.preventDefault(), n("pointerDownOutside", h);
      }),
      onFocusOutside: p[2] || (p[2] = we(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (h) => s(o).onClose())
    }, {
      default: v(() => [
        D(s(Yt), S({
          ref: s(l),
          "data-state": s(o).stateAttribute.value
        }, { ...u.$attrs, ...c.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: v(() => [
            _(u.$slots, "default"),
            D(s(Ta), {
              id: s(o).contentId,
              role: "tooltip"
            }, {
              default: v(() => [
                Y(J(d.value), 1)
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
}), im = /* @__PURE__ */ y({
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
    const t = se(e), { forwardRef: a, currentElement: n } = z(), { trigger: o, onClose: l } = _n(), r = Yo(), { isPointerInTransit: i, onPointerExit: d } = mu(o, n);
    return r.isPointerInTransitRef = i, d(() => {
      l();
    }), (c, u) => (f(), b(xr, S({ ref: s(a) }, s(t)), {
      default: v(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dm = /* @__PURE__ */ y({
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
    const a = e, n = t, o = _n(), l = te(a, n), { forwardRef: r } = z();
    return (i, d) => (f(), b(s(Oe), {
      present: i.forceMount || s(o).open.value
    }, {
      default: v(() => [
        (f(), b(Pe(s(o).disableHoverableContent.value ? xr : im), S({ ref: s(r) }, s(l)), {
          default: v(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), um = /* @__PURE__ */ y({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Oa), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ub = /* @__PURE__ */ y({
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
    const o = te(e, t);
    return (l, r) => (f(), b(s(Lu), U(j(s(o))), {
      default: v(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xo = "-", cm = (e) => {
  const t = fm(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (r) => {
      const i = r.split(Xo);
      return i[0] === "" && i.length !== 1 && i.shift(), Cr(i, t) || pm(r);
    },
    getConflictingClassGroupIds: (r, i) => {
      const d = a[r] || [];
      return i && n[r] ? [...d, ...n[r]] : d;
    }
  };
}, Cr = (e, t) => {
  var r;
  if (e.length === 0)
    return t.classGroupId;
  const a = e[0], n = t.nextPart.get(a), o = n ? Cr(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const l = e.join(Xo);
  return (r = t.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : r.classGroupId;
}, Cs = /^\[(.+)\]$/, pm = (e) => {
  if (Cs.test(e)) {
    const t = Cs.exec(e)[1], a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, fm = (e) => {
  const {
    theme: t,
    prefix: a
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return mm(Object.entries(e.classGroups), a).forEach(([l, r]) => {
    ao(r, n, l, t);
  }), n;
}, ao = (e, t, a, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const l = o === "" ? t : $s(t, o);
      l.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (vm(o)) {
        ao(o(n), t, a, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([l, r]) => {
      ao(r, $s(t, l), a, n);
    });
  });
}, $s = (e, t) => {
  let a = e;
  return t.split(Xo).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, vm = (e) => e.isThemeGetter, mm = (e, t) => t ? e.map(([a, n]) => {
  const o = n.map((l) => typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([r, i]) => [t + r, i])) : l);
  return [a, o];
}) : e, hm = (e) => {
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
}, $r = "!", gm = (e) => {
  const {
    separator: t,
    experimentalParseClassName: a
  } = e, n = t.length === 1, o = t[0], l = t.length, r = (i) => {
    const d = [];
    let c = 0, u = 0, p;
    for (let x = 0; x < i.length; x++) {
      let $ = i[x];
      if (c === 0) {
        if ($ === o && (n || i.slice(x, x + l) === t)) {
          d.push(i.slice(u, x)), u = x + l;
          continue;
        }
        if ($ === "/") {
          p = x;
          continue;
        }
      }
      $ === "[" ? c++ : $ === "]" && c--;
    }
    const h = d.length === 0 ? i : i.substring(u), m = h.startsWith($r), w = m ? h.substring(1) : h, g = p && p > u ? p - u : void 0;
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
}, ym = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let a = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...a.sort(), n), a = []) : a.push(n);
  }), t.push(...a.sort()), t;
}, bm = (e) => ({
  cache: hm(e.cacheSize),
  parseClassName: gm(e),
  ...cm(e)
}), _m = /\s+/, wm = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, l = [], r = e.trim().split(_m);
  let i = "";
  for (let d = r.length - 1; d >= 0; d -= 1) {
    const c = r[d], {
      modifiers: u,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: m
    } = a(c);
    let w = !!m, g = n(w ? h.substring(0, m) : h);
    if (!g) {
      if (!w) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = n(h), !g) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      w = !1;
    }
    const x = ym(u).join(":"), $ = p ? x + $r : x, P = $ + g;
    if (l.includes(P))
      continue;
    l.push(P);
    const k = o(g, w);
    for (let O = 0; O < k.length; ++O) {
      const E = k[O];
      l.push($ + E);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function xm() {
  let e = 0, t, a, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (a = kr(t)) && (n && (n += " "), n += a);
  return n;
}
const kr = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = kr(e[n])) && (a && (a += " "), a += t);
  return a;
};
function Cm(e, ...t) {
  let a, n, o, l = r;
  function r(d) {
    const c = t.reduce((u, p) => p(u), e());
    return a = bm(c), n = a.cache.get, o = a.cache.set, l = i, i(d);
  }
  function i(d) {
    const c = n(d);
    if (c)
      return c;
    const u = wm(d, a);
    return o(d, u), u;
  }
  return function() {
    return l(xm.apply(null, arguments));
  };
}
const ve = (e) => {
  const t = (a) => a[e] || [];
  return t.isThemeGetter = !0, t;
}, Br = /^\[(?:([a-z-]+):)?(.+)\]$/i, $m = /^\d+\/\d+$/, km = /* @__PURE__ */ new Set(["px", "full", "screen"]), Bm = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Dm = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Pm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Sm = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Om = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Qe = (e) => zt(e) || km.has(e) || $m.test(e), ft = (e) => ra(e, "length", Fm), zt = (e) => !!e && !Number.isNaN(Number(e)), Fn = (e) => ra(e, "number", zt), va = (e) => !!e && Number.isInteger(Number(e)), Em = (e) => e.endsWith("%") && zt(e.slice(0, -1)), ae = (e) => Br.test(e), vt = (e) => Bm.test(e), Tm = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Am = (e) => ra(e, Tm, Dr), Mm = (e) => ra(e, "position", Dr), Im = /* @__PURE__ */ new Set(["image", "url"]), Vm = (e) => ra(e, Im, zm), Rm = (e) => ra(e, "", Lm), ma = () => !0, ra = (e, t, a) => {
  const n = Br.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : a(n[2]) : !1;
}, Fm = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Dm.test(e) && !Pm.test(e)
), Dr = () => !1, Lm = (e) => Sm.test(e), zm = (e) => Om.test(e), Nm = () => {
  const e = ve("colors"), t = ve("spacing"), a = ve("blur"), n = ve("brightness"), o = ve("borderColor"), l = ve("borderRadius"), r = ve("borderSpacing"), i = ve("borderWidth"), d = ve("contrast"), c = ve("grayscale"), u = ve("hueRotate"), p = ve("invert"), h = ve("gap"), m = ve("gradientColorStops"), w = ve("gradientColorStopPositions"), g = ve("inset"), x = ve("margin"), $ = ve("opacity"), P = ve("padding"), k = ve("saturate"), O = ve("scale"), E = ve("sepia"), V = ve("skew"), A = ve("space"), W = ve("translate"), N = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", ae, t], R = () => [ae, t], q = () => ["", Qe, ft], G = () => ["auto", zt, ae], K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], X = () => ["solid", "dashed", "dotted", "double", "none"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], pe = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], me = () => ["", "0", ae], ke = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _e = () => [zt, ae];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ma],
      spacing: [Qe, ft],
      blur: ["none", "", vt, ae],
      brightness: _e(),
      borderColor: [e],
      borderRadius: ["none", "", "full", vt, ae],
      borderSpacing: R(),
      borderWidth: q(),
      contrast: _e(),
      grayscale: me(),
      hueRotate: _e(),
      invert: me(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Em, ft],
      inset: I(),
      margin: I(),
      opacity: _e(),
      padding: R(),
      saturate: _e(),
      scale: _e(),
      sepia: me(),
      skew: _e(),
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
        columns: [vt]
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
        object: [...K(), ae]
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
        z: ["auto", va, ae]
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
        order: ["first", "last", "none", va, ae]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ma]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", va, ae]
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
        "grid-rows": [ma]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [va, ae]
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
        justify: ["normal", ...pe()]
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
        content: ["normal", ...pe(), "baseline"]
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
        "place-content": [...pe(), "baseline"]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ae, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ae, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ae, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [vt]
        }, vt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ae, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ae, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ae, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ae, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", vt, ft]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Fn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ma]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ae]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", zt, Fn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Qe, ae]
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
        placeholder: [e]
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
        text: [e]
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
        decoration: [...X(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Qe, ft]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Qe, ae]
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
        bg: [...K(), Mm]
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
        bg: ["auto", "cover", "contain", Am]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Vm]
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
        "border-opacity": [$]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...X(), "hidden"]
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
        divide: X()
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
        outline: ["", ...X()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Qe, ae]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Qe, ft]
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
        "ring-opacity": [$]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Qe, ft]
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
        shadow: ["", "inner", "none", vt, Rm]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ma]
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
        "mix-blend": [...le(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
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
        "drop-shadow": ["", "none", vt, ae]
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
        "backdrop-opacity": [$]
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
        duration: _e()
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
        delay: _e()
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
        rotate: [va, ae]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ae]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ae]
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
        "will-change": ["auto", "scroll", "contents", "transform", ae]
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
        stroke: [Qe, ft, Fn]
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
}, Wm = /* @__PURE__ */ Cm(Nm);
function M(...e) {
  return Wm(e);
}
const cb = /* @__PURE__ */ y({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(Wu), S(a.value, { class: "overflow-hidden text-sm text-accordion-text transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: v(() => [
        re("div", {
          class: H(s(M)("pb-4 pt-0", t.class))
        }, [
          _(n.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), pb = /* @__PURE__ */ y({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Nu), S(s(n), {
      class: s(M)("border-b border-accordion-border", t.class)
    }), {
      default: v(() => [
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
const Km = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ua = {
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
const Um = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: l, class: r, ...i }, { slots: d }) => Ue(
  "svg",
  {
    ...Ua,
    width: e || Ua.width,
    height: e || Ua.height,
    stroke: n || Ua.stroke,
    "stroke-width": a ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${Km(l ?? "icon")}`],
    ...i
  },
  [...o.map((c) => Ue(...c)), ...d.default ? [d.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = (e, t) => (a, { slots: n }) => Ue(
  Um,
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
const Hm = be("CalendarIcon", [
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
const wn = be("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zo = be("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jm = be("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = be("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gm = be("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qm = be("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ym = be("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xm = be("ChevronsUpDownIcon", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zm = be("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = be("EllipsisIcon", [
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
const Jm = be("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qm = be("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eh = be("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const th = be("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ah = be("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nh = be("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oh = be("SunIcon", [
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
const xn = be("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), fb = /* @__PURE__ */ y({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(Ku), { class: "flex" }, {
      default: v(() => [
        D(s(Uu), S(a.value, {
          class: s(M)(
            "flex flex-1 items-center justify-between py-4 font-medium text-heading transition-all [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: v(() => [
            _(n.$slots, "default"),
            _(n.$slots, "icon", {}, () => [
              D(s(Zo), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
});
function Sr(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (a = Sr(e[t])) && (n && (n += " "), n += a);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function sh() {
  for (var e, t, a = 0, n = ""; a < arguments.length; ) (e = arguments[a++]) && (t = Sr(e)) && (n && (n += " "), n += t);
  return n;
}
const ks = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Bs = sh, ia = (e, t) => (a) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Bs(e, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: l } = t, r = Object.keys(o).map((c) => {
    const u = a == null ? void 0 : a[c], p = l == null ? void 0 : l[c];
    if (u === null) return null;
    const h = ks(u) || ks(p);
    return o[c][h];
  }), i = a && Object.entries(a).reduce((c, u) => {
    let [p, h] = u;
    return h === void 0 || (c[p] = h), c;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, u) => {
    let { class: p, className: h, ...m } = u;
    return Object.entries(m).every((w) => {
      let [g, x] = w;
      return Array.isArray(x) ? x.includes({
        ...l,
        ...i
      }[g]) : {
        ...l,
        ...i
      }[g] === x;
    }) ? [
      ...c,
      p,
      h
    ] : c;
  }, []);
  return Bs(e, r, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, vb = /* @__PURE__ */ y({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      class: H(s(M)(s(lh)({ variant: a.variant }), t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), lh = ia(
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
), mb = /* @__PURE__ */ y({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("nav", {
      "aria-label": "breadcrumb",
      class: H(t.class)
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), hb = /* @__PURE__ */ y({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: H(s(M)("flex h-9 w-9 items-center justify-center", t.class))
    }, [
      _(a.$slots, "default", {}, () => [
        D(s(Pr), { class: "h-4 w-4" })
      ]),
      n[0] || (n[0] = re("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), gb = /* @__PURE__ */ y({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("li", {
      class: H(s(M)("inline-flex items-center gap-1.5", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), yb = /* @__PURE__ */ y({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), {
      as: a.as,
      "as-child": a.asChild,
      class: H(s(M)("transition-colors hover:text-foreground", t.class))
    }, {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), bb = /* @__PURE__ */ y({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("ol", {
      class: H(
        s(M)(
          "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), _b = /* @__PURE__ */ y({
  __name: "BreadcrumbPage",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("span", {
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: H(s(M)("font-normal text-foreground", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), wb = /* @__PURE__ */ y({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: H(s(M)("[&>svg]:h-3.5 [&>svg]:w-3.5", t.class))
    }, [
      _(a.$slots, "default", {}, () => [
        D(s(Jo))
      ])
    ], 2));
  }
}), Ne = /* @__PURE__ */ y({
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
    return (a, n) => (f(), b(s(F), {
      as: a.as,
      "as-child": a.asChild,
      class: H(s(M)(s(It)({ variant: a.variant, size: a.size }), t.class))
    }, {
      default: v(() => [
        _(a.$slots, "default"),
        a.loading ? (f(), b(s(Jm), {
          key: 0,
          class: H(s(rh)({ size: a.size }))
        }, null, 8, ["class"])) : Z("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), rh = ia("animate-spin", {
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
}), It = ia(
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
), xb = /* @__PURE__ */ y({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      class: H(
        s(M)("rounded-lg border border-card-border bg-card text-card-foreground shadow-sm", t.class)
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Cb = /* @__PURE__ */ y({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      class: H(s(M)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), $b = /* @__PURE__ */ y({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("h3", {
      class: H(s(M)("text-2xl font-semibold leading-none tracking-tight", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), kb = /* @__PURE__ */ y({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("p", {
      class: H(s(M)("text-sm text-muted-foreground", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Bb = /* @__PURE__ */ y({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      class: H(s(M)("p-6 pt-0", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Db = /* @__PURE__ */ y({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      class: H(s(M)("flex items-center p-6 pt-0", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), ih = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, dh = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = te(o, n);
    return (r, i) => (f(), b(s($c), S({
      class: s(M)("p-3", a.class)
    }, s(l)), {
      default: v(({ grid: d, weekDays: c }) => [
        D(s(hh), null, {
          default: v(() => [
            D(s(bh)),
            D(s(gh)),
            D(s(yh))
          ]),
          _: 1
        }),
        re("div", ih, [
          (f(!0), L(Q, null, he(d, (u) => (f(), b(s(ph), {
            key: u.value.toString()
          }, {
            default: v(() => [
              D(s(vh), null, {
                default: v(() => [
                  D(s(Ds), null, {
                    default: v(() => [
                      (f(!0), L(Q, null, he(c, (p) => (f(), b(s(mh), { key: p }, {
                        default: v(() => [
                          Y(J(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              D(s(fh), null, {
                default: v(() => [
                  (f(!0), L(Q, null, he(u.rows, (p, h) => (f(), b(s(Ds), {
                    key: `weekDate-${h}`,
                    class: "mt-2 w-full"
                  }, {
                    default: v(() => [
                      (f(!0), L(Q, null, he(p, (m) => (f(), b(s(uh), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: v(() => [
                          D(s(ch), {
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
}), uh = /* @__PURE__ */ y({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Pc), S({
      class: s(M)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        t.class
      )
    }, s(n)), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ch = /* @__PURE__ */ y({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Ic), S({
      class: s(M)(
        s(It)({ variant: "ghost" }),
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
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ph = /* @__PURE__ */ y({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Dc), S({
      class: s(M)("w-full border-collapse space-y-1", t.class)
    }, s(n)), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fh = /* @__PURE__ */ y({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Ac), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vh = /* @__PURE__ */ y({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Tc), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ds = /* @__PURE__ */ y({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Mc), S({
      class: s(M)("flex", t.class)
    }, s(n)), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mh = /* @__PURE__ */ y({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Sc), S({
      class: s(M)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, s(n)), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hh = /* @__PURE__ */ y({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(kc), S({
      class: s(M)("relative flex w-full items-center justify-between pt-1", t.class)
    }, s(n)), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gh = /* @__PURE__ */ y({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Bc), S({
      class: s(M)("text-sm font-medium text-text", t.class)
    }, s(n)), {
      default: v(({ headingValue: r }) => [
        _(o.$slots, "default", { headingValue: r }, () => [
          Y(J(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yh = /* @__PURE__ */ y({
  __name: "CalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Oc), S({
      class: s(M)(
        s(It)({ variant: "outline" }),
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
}), bh = /* @__PURE__ */ y({
  __name: "CalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Ec), S({
      class: s(M)(
        s(It)({ variant: "outline" }),
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
}), Or = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = te(o, n);
    return (r, i) => (f(), b(s(Yc), S(s(l), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        a.class
      ]
    }), {
      default: v(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Er = /* @__PURE__ */ y({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = te(e, t);
    return (l, r) => (f(), b(s(Al), U(j(s(o))), {
      default: v(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pb = /* @__PURE__ */ y({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Ea), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _h = /* @__PURE__ */ y({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Ml), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wh = /* @__PURE__ */ y({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      class: H(s(M)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), xh = /* @__PURE__ */ y({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Fl), S(s(n), {
      class: s(M)("text-2xl font-semibold leading-none tracking-tight text-heading", t.class)
    }), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ch = /* @__PURE__ */ y({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Ll), S(s(n), {
      class: s(M)("text-sm text-sub-text", t.class)
    }), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tr = /* @__PURE__ */ y({
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
    const a = t, n = e, o = C(() => {
      const { class: r, ...i } = n;
      return i;
    }), l = te(o, a);
    return (r, i) => (f(), b(s(Ao), null, {
      default: v(() => [
        D(s(Fo), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        D(s(Ro), S(s(l), {
          class: s(M)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg",
            n.class
          )
        }), {
          default: v(() => [
            _(r.$slots, "default"),
            D(s(Ea), {
              onClick: i[0] || (i[0] = (d) => a("close", d)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: v(() => [
                D(s(xn), { class: "size-4 dark:text-slate-300" }),
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
}), Sb = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = te(o, n);
    return (r, i) => (f(), b(s(Ao), null, {
      default: v(() => [
        D(s(Fo), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: v(() => [
            D(s(Ro), S({
              class: s(M)(
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
                _(r.$slots, "default"),
                D(s(Ea), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: v(() => [
                    D(s(xn), { class: "size-4" }),
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
}), $h = /* @__PURE__ */ y({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      class: H(
        s(M)("flex flex-col-reverse text-text sm:flex-row sm:justify-end sm:gap-x-2", t.class)
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Ob = /* @__PURE__ */ y({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = te(e, t);
    return (l, r) => (f(), b(s(Er), U(j(s(o))), {
      default: v(() => [
        D(s(Tr), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: v(() => [
            D(Or, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: v(() => [
                _(l.$slots, "default")
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
}), kh = /* @__PURE__ */ y({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(np), S(a.value, {
      class: s(M)("py-6 text-center text-sm", t.class)
    }), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bh = /* @__PURE__ */ y({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(Jc), S(a.value, {
      class: s(M)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: v(() => [
        n.heading ? (f(), b(s(Qc), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: v(() => [
            Y(J(n.heading), 1)
          ]),
          _: 1
        })) : Z("", !0),
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dh = { class: "flex items-center border-b px-3" }, Ph = /* @__PURE__ */ y({
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
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), L("div", Dh, [
      D(s(nh), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      D(s(Xc), S({ ...s(n), ...o.$attrs }, {
        "auto-focus": "",
        class: s(M)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Sh = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = te(o, n);
    return (r, i) => (f(), b(s(rp), S(s(l), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: v(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oh = { role: "presentation" }, Eh = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = te(o, n);
    return (r, i) => (f(), b(s(ap), S(s(l), {
      class: s(M)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: v(() => [
        re("div", Oh, [
          _(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Eb = /* @__PURE__ */ y({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(ip), S(a.value, {
      class: s(M)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tb = /* @__PURE__ */ y({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("span", {
      class: H(s(M)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Th = /* @__PURE__ */ y({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = te(e, t);
    return (l, r) => (f(), b(s(Np), U(j(s(o))), {
      default: v(({ open: i }) => [
        _(l.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Ah = /* @__PURE__ */ y({
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
    return (a, n) => (f(), L("div", {
      class: H(
        s(M)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Mh = /* @__PURE__ */ y({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = se(e);
    return (n, o) => (f(), b(s(Wp), S({ class: "outline-none" }, s(a)), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ih = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = te(o, n);
    return (r, i) => (f(), b(s(Kp), null, {
      default: v(() => [
        D(s(Up), S(s(l), {
          class: s(M)(
            "z-50 min-w-32 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            a.class
          )
        }), {
          default: v(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ab = /* @__PURE__ */ y({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Hp), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mb = /* @__PURE__ */ y({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = te(e, t);
    return (l, r) => (f(), b(s(Yp), U(j(s(o))), {
      default: v(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ib = /* @__PURE__ */ y({
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
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(er), S(s(n), {
      class: s(M)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.inset && "pl-8",
        t.class
      )
    }), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vh = /* @__PURE__ */ y({
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
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(Ah, {
      class: H(t.class)
    }, {
      default: v(() => [
        D(s(er), S(s(n), {
          as: o.as,
          href: o.href,
          class: "size-full"
        }), {
          default: v(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "href"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Rh = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Vb = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = te(o, n);
    return (r, i) => (f(), b(s(Gp), S(s(l), {
      class: s(M)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: v(() => [
        re("span", Rh, [
          D(s(tr), null, {
            default: v(() => [
              D(s(wn), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fh = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Rb = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = te(o, n);
    return (r, i) => (f(), b(s(Xp), S(s(l), {
      class: s(M)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: v(() => [
        re("span", Fh, [
          D(s(tr), null, {
            default: v(() => [
              D(s(Zm), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fb = /* @__PURE__ */ y({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("span", {
      class: H(s(M)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Lb = /* @__PURE__ */ y({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(jp), S(a.value, {
      class: s(M)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), zb = /* @__PURE__ */ y({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(qp), S(s(n), {
      class: s(M)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", t.class)
    }), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Nb = /* @__PURE__ */ y({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = te(e, t);
    return (l, r) => (f(), b(s(Zp), U(j(s(o))), {
      default: v(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wb = /* @__PURE__ */ y({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Qp), S(s(n), {
      class: s(M)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: v(() => [
        _(o.$slots, "default"),
        D(s(Jo), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kb = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = te(o, n);
    return (r, i) => (f(), b(s(Jp), S(s(l), {
      class: s(M)(
        "z-50 min-w-32 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        a.class
      )
    }), {
      default: v(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lh = { class: "text-xs text-slate-600 dark:text-slate-300" }, zh = /* @__PURE__ */ y({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(e) {
    return (t, a) => (f(), L("div", Lh, "Characters: " + J(t.count), 1));
  }
}), Ia = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, o] of t)
    a[n] = o;
  return a;
}, Nh = {}, Wh = { class: "text-sm text-slate-400 dark:text-slate-500" };
function Kh(e, t) {
  return f(), L("div", Wh, [
    _(e.$slots, "default")
  ]);
}
const Uh = /* @__PURE__ */ Ia(Nh, [["render", Kh]]), Hh = { class: "text-sm text-red-600 dark:text-red-400" }, jh = /* @__PURE__ */ y({
  __name: "Error",
  props: {
    error: {}
  },
  setup(e) {
    return (t, a) => Zt((f(), L("div", null, [
      re("p", Hh, J(t.error), 1)
    ], 512)), [
      [io, t.error]
    ]);
  }
}), Gh = {}, qh = { class: "w-full space-y-4 p-1.5" };
function Yh(e, t) {
  return f(), L("div", qh, [
    _(e.$slots, "default")
  ]);
}
const Ub = /* @__PURE__ */ Ia(Gh, [["render", Yh]]), Xh = {}, Zh = { class: "my-4" };
function Jh(e, t) {
  return f(), L("div", Zh, [
    _(e.$slots, "default")
  ]);
}
const Qh = /* @__PURE__ */ Ia(Xh, [["render", Jh]]), eg = { class: "grid gap-4 md:grid-cols-2" }, Hb = /* @__PURE__ */ y({
  __name: "FormGrid",
  setup(e) {
    return (t, a) => (f(), b(Qh, null, {
      default: v(() => [
        re("div", eg, [
          _(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), Ar = /* @__PURE__ */ y({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    id: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(ef), S(a.value, {
      class: s(M)(
        "text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        t.class
      )
    }), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tg = { class: "relative" }, ag = {
  name: "Base",
  inheritAttrs: !1
}, wt = /* @__PURE__ */ y({
  ...ag,
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
      return f(), L("div", null, [
        t.label && t.showLabel ? (f(), b(s(Ar), {
          key: 0,
          id: t.id
        }, {
          default: v(() => [
            Y(J(t.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : Z("", !0),
        re("div", tg, [
          _(t.$slots, "default"),
          t.showCharacterCount ? (f(), b(s(zh), {
            key: 0,
            count: (n = t.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : Z("", !0)
        ]),
        D(s(Uh), { class: "mt-[2px]" }, {
          default: v(() => [
            Y(J(t.description), 1)
          ]),
          _: 1
        }),
        D(s(jh), { error: t.error }, null, 8, ["error"])
      ]);
    };
  }
}), ng = { class: "flex gap-2" }, jb = /* @__PURE__ */ y({
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
    const a = t, o = T(e.modelValue);
    return ee(o, (l) => {
      a("update:modelValue", l);
    }), (l, r) => (f(), b(s(wt), U(j(l.$props)), {
      default: v(() => [
        re("div", ng, [
          D(s(Lc), {
            id: l.id,
            checked: o.value,
            "onUpdate:checked": r[0] || (r[0] = (i) => o.value = i),
            class: "peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground"
          }, {
            default: v(() => [
              D(s(zc), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: v(() => [
                  D(s(wn), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          l.text ? (f(), b(s(Ar), {
            key: 0,
            id: l.id,
            class: "my-auto"
          }, {
            default: v(() => [
              Y(J(l.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : Z("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), Mr = /* @__PURE__ */ y({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = te(e, t);
    return (l, r) => (f(), b(s(ff), U(j(s(o))), {
      default: v(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ir = /* @__PURE__ */ y({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(vf), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vr = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = te(o, n);
    return (r, i) => (f(), b(s(mf), null, {
      default: v(() => [
        D(s(yf), S({ ...s(l), ...r.$attrs }, {
          class: s(M)(
            "z-50 w-72 rounded-md border border-border bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: v(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Gb = /* @__PURE__ */ y({
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
    const a = t, n = e, o = C(() => n.emptyMessage ?? "Option not found"), l = C(() => n.placeholder ?? "Select an option"), r = T(!1), i = T(n.modelValue ?? []), d = (p, h) => p.filter((m) => m.name.toLowerCase().includes(h.toLowerCase())), c = C(() => {
      var p;
      return Array.isArray(i.value) ? i.value.length ? i.value.map((h) => h.name).join(", ") : l.value : typeof i.value == "object" ? i.value.name : (p = n.options.find((h) => h.id === i.value)) == null ? void 0 : p.name;
    }), u = (p) => Array.isArray(i.value) ? i.value.find((h) => h.id === p.id) : typeof i.value == "object" ? i.value.id === p.id : i.value === p.id;
    return ee(i, () => {
      Array.isArray(i.value) ? a("update:modelValue", i.value) : a("update:modelValue", i.value.id);
    }), (p, h) => (f(), b(s(wt), U(j(p.$props)), {
      default: v(() => [
        D(s(Mr), {
          open: r.value,
          "onUpdate:open": h[2] || (h[2] = (m) => r.value = m)
        }, {
          default: v(() => [
            D(s(Ir), { "as-child": "" }, {
              default: v(() => [
                D(s(Ne), {
                  variant: "outline",
                  role: "combobox",
                  "aria-expanded": r.value,
                  class: "w-[200px] justify-between overflow-hidden"
                }, {
                  default: v(() => [
                    Y(J(c.value) + " ", 1),
                    D(s(Xm), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
                  ]),
                  _: 1
                }, 8, ["aria-expanded"])
              ]),
              _: 1
            }),
            D(s(Vr), { class: "w-[200px] p-0" }, {
              default: v(() => [
                D(s(Or), {
                  multiple: p.multiple,
                  modelValue: i.value,
                  "onUpdate:modelValue": h[1] || (h[1] = (m) => i.value = m),
                  "filter-function": d
                }, {
                  default: v(() => [
                    D(s(Ph), {
                      class: "h-9",
                      placeholder: l.value
                    }, null, 8, ["placeholder"]),
                    D(s(kh), null, {
                      default: v(() => [
                        Y(J(o.value), 1)
                      ]),
                      _: 1
                    }),
                    D(s(Eh), null, {
                      default: v(() => [
                        D(s(Bh), null, {
                          default: v(() => [
                            (f(!0), L(Q, null, he(p.options, (m) => (f(), b(s(Sh), {
                              key: m.id,
                              value: m,
                              onSelect: h[0] || (h[0] = () => {
                                p.multiple || (r.value = !1);
                              })
                            }, {
                              default: v(() => [
                                Y(J(m.name) + " ", 1),
                                D(s(wn), {
                                  class: H(s(M)("ml-auto size-4", u(m) ? "opacity-100" : "opacity-0"))
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
}), qb = /* @__PURE__ */ y({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = new et("en-US", {
      dateStyle: "long"
    }), l = T(n.modelValue);
    return ee(l, () => {
      a("update:modelValue", l.value);
    }), de(() => {
      n.defaultValue && (l.value = n.defaultValue);
    }), (r, i) => (f(), b(s(wt), U(j(r.$props)), {
      default: v(() => [
        D(s(Mr), null, {
          default: v(() => [
            D(s(Ir), { "as-child": "" }, {
              default: v(() => [
                D(s(Ne), {
                  variant: "outline",
                  class: H(["w-[280px] justify-start text-left font-normal text-text"])
                }, {
                  default: v(() => [
                    D(s(Hm), { class: "mr-2 size-4" }),
                    Y(" " + J(l.value ? s(o).format(l.value.toDate(s(Dt)())) : r.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            D(s(Vr), { class: "w-auto p-0" }, {
              default: v(() => [
                D(s(dh), {
                  modelValue: l.value,
                  "onUpdate:modelValue": i[0] || (i[0] = (d) => l.value = d),
                  "default-value": r.defaultValue,
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
var xe = [];
for (var Ln = 0; Ln < 256; ++Ln)
  xe.push((Ln + 256).toString(16).slice(1));
function og(e, t = 0) {
  return (xe[e[t + 0]] + xe[e[t + 1]] + xe[e[t + 2]] + xe[e[t + 3]] + "-" + xe[e[t + 4]] + xe[e[t + 5]] + "-" + xe[e[t + 6]] + xe[e[t + 7]] + "-" + xe[e[t + 8]] + xe[e[t + 9]] + "-" + xe[e[t + 10]] + xe[e[t + 11]] + xe[e[t + 12]] + xe[e[t + 13]] + xe[e[t + 14]] + xe[e[t + 15]]).toLowerCase();
}
var Ha, sg = new Uint8Array(16);
function lg() {
  if (!Ha && (Ha = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ha))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ha(sg);
}
var rg = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Ps = {
  randomUUID: rg
};
function ig(e, t, a) {
  if (Ps.randomUUID && !t && !e)
    return Ps.randomUUID();
  e = e || {};
  var n = e.random || (e.rng || lg)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, og(n);
}
const dg = { class: "flex items-center space-x-2" }, ug = ["src"], cg = ["accept"], Yb = /* @__PURE__ */ y({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = "file-upload-" + ig(), l = C(() => i.value ? URL.createObjectURL(i.value) : null), r = a.currentImage ? a.currentImage : a.defaultImage, i = C({
      get: () => a.modelValue,
      set: (u) => n("update:modelValue", u)
    }), d = (u) => {
      i.value = u.target.files[0];
    }, c = () => document.getElementById(o).click();
    return (u, p) => (f(), b(s(wt), U(j(u.$props)), {
      default: v(() => [
        re("div", dg, [
          _(u.$slots, "image", {
            newImage: l.value,
            curImage: s(r)
          }, () => [
            re("img", {
              src: l.value ?? s(r),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, ug)
          ]),
          re("input", {
            id: o,
            accept: u.accept,
            hidden: "",
            type: "file",
            onInput: d
          }, null, 40, cg),
          D(s(Ne), {
            variant: "outline",
            onClick: c
          }, {
            default: v(() => p[0] || (p[0] = [
              Y(" Upload ")
            ])),
            _: 1
          })
        ])
      ]),
      _: 3
    }, 16));
  }
}), pg = ["disabled", "placeholder", "required", "type"], fg = /* @__PURE__ */ y({
  __name: "Input",
  props: /* @__PURE__ */ Wn({
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
    return (a, n) => (f(), b(s(wt), U(j(a.$props)), {
      default: v(() => [
        Zt(re("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: H(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
          }])
        }, null, 10, pg), [
          [oi, t.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), vg = /* @__PURE__ */ y({
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
    const o = te(e, t);
    return (l, r) => (f(), b(s(zf), U(j(s(o))), {
      default: v(({ open: i }) => [
        _(l.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), mg = /* @__PURE__ */ y({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(uv), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hg = /* @__PURE__ */ y({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    open: { type: Boolean }
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Kf), S(s(n), {
      class: s(M)(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-start text-sm ring-offset-background transition placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        t.class
      )
    }), {
      default: v(() => [
        _(o.$slots, "default"),
        D(s(cv), { "as-child": "" }, {
          default: v(() => [
            D(s(Zo), {
              class: H(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gg = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = te(o, n);
    return (r, i) => (f(), b(s(Uf), null, {
      default: v(() => [
        D(s(Jf), S({ ...s(l), ...r.$attrs }, {
          class: s(M)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            r.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: v(() => [
            D(s(_g)),
            D(s(rv), {
              class: H(
                s(M)(
                  "p-1",
                  r.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: v(() => [
                _(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            D(s(wg))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Xb = /* @__PURE__ */ y({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(sv), S({
      class: s(M)("w-full p-1", t.class)
    }, a.value), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yg = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, bg = /* @__PURE__ */ y({
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
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(tv), S(s(n), {
      class: s(M)(
        "focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        t.class
      )
    }), {
      default: v(() => [
        re("span", yg, [
          D(s(av), null, {
            default: v(() => [
              D(s(wn), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        D(s(lr), null, {
          default: v(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zb = /* @__PURE__ */ y({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(lr), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jb = /* @__PURE__ */ y({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(lv), {
      class: H(s(M)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Qb = /* @__PURE__ */ y({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(Qf), S(a.value, {
      class: s(M)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), _g = /* @__PURE__ */ y({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(iv), S(s(n), {
      class: s(M)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: v(() => [
        _(o.$slots, "default", {}, () => [
          D(s(Gm), { class: "size-4 text-primary" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wg = /* @__PURE__ */ y({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(dv), S(s(n), {
      class: s(M)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: v(() => [
        _(o.$slots, "default", {}, () => [
          D(s(Zo), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e0 = /* @__PURE__ */ y({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = C(() => n.placeholder ?? "Select an option..."), l = T(
      n.modelValue ? n.options.find((r) => r === n.modelValue) : null
    );
    return ee(l, () => {
      a("update:modelValue", l.value);
    }), (r, i) => (f(), b(s(wt), U(j(r.$props)), {
      default: v(() => [
        D(s(vg), {
          modelValue: l.value,
          "onUpdate:modelValue": i[0] || (i[0] = (d) => l.value = d)
        }, {
          default: v(({ open: d }) => [
            D(s(hg), { open: d }, {
              default: v(() => [
                D(s(mg), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            D(s(gg), null, {
              default: v(() => [
                (f(!0), L(Q, null, he(r.options, (c) => (f(), b(s(bg), { value: c }, {
                  default: v(() => [
                    Y(J(c), 1)
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
function Rr(e) {
  return lo() ? (ro(e), !0) : !1;
}
function Cn(e) {
  return typeof e == "function" ? e() : s(e);
}
const xg = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Cg = (e) => typeof e < "u", $g = Object.prototype.toString, kg = (e) => $g.call(e) === "[object Object]", Fr = () => {
};
function Bg(e, t) {
  function a(...n) {
    return new Promise((o, l) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(l);
    });
  }
  return a;
}
const Lr = (e) => e();
function Dg(e = Lr) {
  const t = T(!0);
  function a() {
    t.value = !1;
  }
  function n() {
    t.value = !0;
  }
  const o = (...l) => {
    t.value && e(...l);
  };
  return { isActive: ka(t), pause: a, resume: n, eventFilter: o };
}
function Pg(e) {
  return Ge();
}
function Sg(...e) {
  if (e.length !== 1)
    return Vs(...e);
  const t = e[0];
  return typeof t == "function" ? ka(Us(() => ({ get: t, set: Fr }))) : T(t);
}
function Og(e, t, a = {}) {
  const {
    eventFilter: n = Lr,
    ...o
  } = a;
  return ee(
    e,
    Bg(
      n,
      t
    ),
    o
  );
}
function Eg(e, t, a = {}) {
  const {
    eventFilter: n,
    ...o
  } = a, { eventFilter: l, pause: r, resume: i, isActive: d } = Dg(n);
  return { stop: Og(
    e,
    t,
    {
      ...o,
      eventFilter: l
    }
  ), pause: r, resume: i, isActive: d };
}
function zr(e, t = !0, a) {
  Pg() ? de(e, a) : t ? e() : oe(e);
}
function Nr(e) {
  var t;
  const a = Cn(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const Xt = xg ? window : void 0;
function no(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = Xt) : [t, a, n, o] = e, !t)
    return Fr;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const l = [], r = () => {
    l.forEach((u) => u()), l.length = 0;
  }, i = (u, p, h, m) => (u.addEventListener(p, h, m), () => u.removeEventListener(p, h, m)), d = ee(
    () => [Nr(t), Cn(o)],
    ([u, p]) => {
      if (r(), !u)
        return;
      const h = kg(p) ? { ...p } : p;
      l.push(
        ...a.flatMap((m) => n.map((w) => i(u, m, w, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), r();
  };
  return Rr(c), c;
}
function Tg() {
  const e = T(!1), t = Ge();
  return t && de(() => {
    e.value = !0;
  }, t), e;
}
function Ag(e) {
  const t = Tg();
  return C(() => (t.value, !!e()));
}
function Mg(e, t = {}) {
  const { window: a = Xt } = t, n = Ag(() => a && "matchMedia" in a && typeof a.matchMedia == "function");
  let o;
  const l = T(!1), r = (c) => {
    l.value = c.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", r) : o.removeListener(r));
  }, d = ge(() => {
    n.value && (i(), o = a.matchMedia(Cn(e)), "addEventListener" in o ? o.addEventListener("change", r) : o.addListener(r), l.value = o.matches);
  });
  return Rr(() => {
    d(), i(), o = void 0;
  }), l;
}
function Ig(e) {
  return JSON.parse(JSON.stringify(e));
}
const ja = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ga = "__vueuse_ssr_handlers__", Vg = /* @__PURE__ */ Rg();
function Rg() {
  return Ga in ja || (ja[Ga] = ja[Ga] || {}), ja[Ga];
}
function Wr(e, t) {
  return Vg[e] || t;
}
function Fg(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Lg = {
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
function zg(e, t, a, n = {}) {
  var o;
  const {
    flush: l = "pre",
    deep: r = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: d = !0,
    mergeDefaults: c = !1,
    shallow: u,
    window: p = Xt,
    eventFilter: h,
    onError: m = (B) => {
      console.error(B);
    },
    initOnMounted: w
  } = n, g = (u ? so : T)(typeof t == "function" ? t() : t);
  if (!a)
    try {
      a = Wr("getDefaultStorage", () => {
        var B;
        return (B = Xt) == null ? void 0 : B.localStorage;
      })();
    } catch (B) {
      m(B);
    }
  if (!a)
    return g;
  const x = Cn(t), $ = Fg(x), P = (o = n.serializer) != null ? o : Lg[$], { pause: k, resume: O } = Eg(
    g,
    () => V(g.value),
    { flush: l, deep: r, eventFilter: h }
  );
  p && i && zr(() => {
    no(p, "storage", W), no(p, Ss, N), w && W();
  }), w || W();
  function E(B, I) {
    p && p.dispatchEvent(new CustomEvent(Ss, {
      detail: {
        key: e,
        oldValue: B,
        newValue: I,
        storageArea: a
      }
    }));
  }
  function V(B) {
    try {
      const I = a.getItem(e);
      if (B == null)
        E(I, null), a.removeItem(e);
      else {
        const R = P.write(B);
        I !== R && (a.setItem(e, R), E(I, R));
      }
    } catch (I) {
      m(I);
    }
  }
  function A(B) {
    const I = B ? B.newValue : a.getItem(e);
    if (I == null)
      return d && x != null && a.setItem(e, P.write(x)), x;
    if (!B && c) {
      const R = P.read(I);
      return typeof c == "function" ? c(R, x) : $ === "object" && !Array.isArray(R) ? { ...x, ...R } : R;
    } else return typeof I != "string" ? I : P.read(I);
  }
  function W(B) {
    if (!(B && B.storageArea !== a)) {
      if (B && B.key == null) {
        g.value = x;
        return;
      }
      if (!(B && B.key !== e)) {
        k();
        try {
          (B == null ? void 0 : B.newValue) !== P.write(g.value) && (g.value = A(B));
        } catch (I) {
          m(I);
        } finally {
          B ? oe(O) : O();
        }
      }
    }
  }
  function N(B) {
    W(B.detail);
  }
  return g;
}
function Kr(e) {
  return Mg("(prefers-color-scheme: dark)", e);
}
function Ng(e = {}) {
  const {
    selector: t = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = Xt,
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
  }, h = Kr({ window: o }), m = C(() => h.value ? "dark" : "light"), w = d || (r == null ? Sg(n) : zg(r, n, l, { window: o, listenToStorageChanges: i })), g = C(() => w.value === "auto" ? m.value : w.value), x = Wr(
    "updateHTMLAttrs",
    (O, E, V) => {
      const A = typeof O == "string" ? o == null ? void 0 : o.document.querySelector(O) : Nr(O);
      if (!A)
        return;
      let W;
      if (u && (W = o.document.createElement("style"), W.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(W)), E === "class") {
        const N = V.split(/\s/g);
        Object.values(p).flatMap((B) => (B || "").split(/\s/g)).filter(Boolean).forEach((B) => {
          N.includes(B) ? A.classList.add(B) : A.classList.remove(B);
        });
      } else
        A.setAttribute(E, V);
      u && (o.getComputedStyle(W).opacity, document.head.removeChild(W));
    }
  );
  function $(O) {
    var E;
    x(t, a, (E = p[O]) != null ? E : O);
  }
  function P(O) {
    e.onChanged ? e.onChanged(O, $) : $(O);
  }
  ee(g, P, { flush: "post", immediate: !0 }), zr(() => P(g.value));
  const k = C({
    get() {
      return c ? w.value : g.value;
    },
    set(O) {
      w.value = O;
    }
  });
  try {
    return Object.assign(k, { store: w, system: m, state: g });
  } catch {
    return k;
  }
}
function Wg(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: a = "",
    window: n = Xt
  } = e, o = Ng({
    ...e,
    onChanged: (i, d) => {
      var c;
      e.onChanged ? (c = e.onChanged) == null || c.call(e, i === "dark", d, i) : d(i);
    },
    modes: {
      dark: t,
      light: a
    }
  }), l = C(() => o.system ? o.system.value : Kr({ window: n }).value ? "dark" : "light");
  return C({
    get() {
      return o.value === "dark";
    },
    set(i) {
      const d = i ? "dark" : "light";
      l.value === d ? o.value = "auto" : o.value = d;
    }
  });
}
function Ur(e, t, a, n = {}) {
  var o, l, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: p,
    shouldEmit: h
  } = n, m = Ge(), w = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (l = m == null ? void 0 : m.proxy) == null ? void 0 : l.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let g = c;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const x = (k) => i ? typeof i == "function" ? i(k) : Ig(k) : k, $ = () => Cg(e[t]) ? x(e[t]) : p, P = (k) => {
    h ? h(k) && w(g, k) : w(g, k);
  };
  if (d) {
    const k = $(), O = T(k);
    let E = !1;
    return ee(
      () => e[t],
      (V) => {
        E || (E = !0, O.value = x(V), oe(() => E = !1));
      }
    ), ee(
      O,
      (V) => {
        !E && (V !== e[t] || u) && P(V);
      },
      { deep: u }
    ), O;
  } else
    return C({
      get() {
        return $();
      },
      set(k) {
        P(k);
      }
    });
}
const Kg = ["placeholder"], t0 = /* @__PURE__ */ y({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = Ur(e, "modelValue", t, {
      passive: !0
    });
    return (l, r) => (f(), b(s(wt), U(j(l.$props)), {
      default: v(() => [
        Zt(re("textarea", {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => $a(o) ? o.value = i : null),
          placeholder: l.placeholder,
          class: H(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !l.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": l.error
          }])
        }, null, 10, Kg), [
          [si, s(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), Ug = /* @__PURE__ */ y({
  __name: "Toggle",
  props: /* @__PURE__ */ Wn({
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
  emits: /* @__PURE__ */ Wn(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const a = t, n = e, o = js(e, "modelValue");
    ee(o, () => {
      a("update:modelValue", o.value);
    });
    const l = C(() => {
      const { class: i, ...d } = n;
      return d;
    }), r = te(l, a);
    return (i, d) => (f(), b(s(wt), U(j(i.$props)), {
      default: v(() => [
        D(s(Iv), S({
          checked: o.value,
          "onUpdate:checked": d[0] || (d[0] = (c) => o.value = c)
        }, s(r), {
          class: s(M)(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent",
            n.class
          )
        }), {
          default: v(({ checked: c }) => [
            D(s(Vv), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: v(() => [
                c ? _(i.$slots, "checked", { key: 0 }) : Z("", !0),
                c ? Z("", !0) : _(i.$slots, "not-checked", { key: 1 })
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
}), Hg = { class: "my-auto text-slate-400 dark:text-slate-100" }, jg = /* @__PURE__ */ y({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, a) => (f(), L("div", Hg, " Showing " + J(t.min) + " to " + J(t.max) + " of " + J(t.total) + " results ", 1));
  }
}), Gg = /* @__PURE__ */ y({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(nf), S(a.value, {
      class: s(M)("flex size-9 items-center justify-center text-text", t.class)
    }), {
      default: v(() => [
        _(n.$slots, "default", {}, () => [
          D(s(Pr))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qg = /* @__PURE__ */ y({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(of), U(j(a.value)), {
      default: v(() => [
        D(s(Ne), {
          class: H(s(M)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: v(() => [
            _(n.$slots, "default", {}, () => [
              D(s(qm), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), Yg = /* @__PURE__ */ y({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(sf), U(j(a.value)), {
      default: v(() => [
        D(s(Ne), {
          class: H(s(M)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: v(() => [
            _(n.$slots, "default", {}, () => [
              D(s(Ym), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), Xg = /* @__PURE__ */ y({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(uf), U(j(a.value)), {
      default: v(() => [
        D(s(Ne), {
          class: H(s(M)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: v(() => [
            _(n.$slots, "default", {}, () => [
              D(s(Jo), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), Zg = /* @__PURE__ */ y({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(cf), U(j(a.value)), {
      default: v(() => [
        D(s(Ne), {
          class: H(s(M)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: v(() => [
            _(n.$slots, "default", {}, () => [
              D(s(jm), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), a0 = /* @__PURE__ */ y({
  __name: "LumuixModeToggle",
  setup(e) {
    const t = Wg({
      selector: "html"
    });
    return (a, n) => (f(), b(Ug, {
      modelValue: s(t),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => $a(t) ? t.value = o : null)
    }, {
      checked: v(() => [
        D(s(Qm), { class: "m-auto mt-0.5 size-4 text-primary" })
      ]),
      "not-checked": v(() => [
        D(s(oh), { class: "m-auto mt-0.5 size-4 text-primary" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), n0 = /* @__PURE__ */ y({
  __name: "CollapsibleTableRow",
  props: {
    row: {},
    headers: {},
    subRows: {},
    setOpenTo: { type: Boolean, default: !1 },
    class: {}
  },
  setup(e) {
    const t = e, a = T(t.setOpenTo), n = () => {
      a.value = !a.value;
    };
    return (o, l) => (f(), L(Q, null, [
      D(s(Ca), {
        onClick: n,
        class: H(t.class)
      }, {
        default: v(() => [
          (f(!0), L(Q, null, he(o.headers, (r) => (f(), b(s(on), {
            key: r.value
          }, {
            default: v(() => [
              o.$slots[`cell_header_${r.value}`] ? _(o.$slots, `cell_header_${r.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (f(), L(Q, { key: 1 }, [
                Y(J(o.row[r.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (f(), b(s(oo), { key: 0 }, {
            default: v(() => [
              _(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : Z("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (f(!0), L(Q, { key: 0 }, he(o.subRows, (r, i) => (f(), b(s(Ca), { key: i }, {
        default: v(() => [
          (f(!0), L(Q, null, he(o.headers, (d) => (f(), b(s(on), {
            key: d.value
          }, {
            default: v(() => [
              o.$slots[`subrow_cell_${d.value}`] ? _(o.$slots, `subrow_cell_${d.value}`, {
                key: 0,
                item: r,
                open: a.value
              }) : (f(), L(Q, { key: 1 }, [
                Y(J("subrow_cell_" + d.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (f(), b(s(oo), { key: 0 }, {
            default: v(() => [
              _(o.$slots, "sub_row_actions", {
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
}), Jg = { class: "relative w-full overflow-auto" }, Qg = /* @__PURE__ */ y({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", Jg, [
      re("table", {
        class: H(s(M)("w-full caption-bottom text-sm", t.class))
      }, [
        _(a.$slots, "default")
      ], 2)
    ]));
  }
}), ey = /* @__PURE__ */ y({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("tbody", {
      class: H(s(M)("[&_tr:last-child]:border-0", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), on = /* @__PURE__ */ y({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("td", {
      class: H(["p-4 align-middle text-text [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), ty = /* @__PURE__ */ y({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("th", {
      class: H(
        s(M)(
          "h-12 px-4 text-left align-middle font-medium text-heading [&:has([role=checkbox])]:pr-0",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), ay = /* @__PURE__ */ y({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("thead", {
      class: H(s(M)("[&_tr]:border-b", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), o0 = /* @__PURE__ */ y({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("tfoot", {
      class: H(
        s(M)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Ca = /* @__PURE__ */ y({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("tr", {
      class: H(
        s(M)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), oo = /* @__PURE__ */ y({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("td", {
      class: H(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), ny = /* @__PURE__ */ y({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("caption", {
      class: H(s(M)("mt-4 text-sm text-sub-text", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), oy = { class: "flex items-center justify-center py-10" }, s0 = /* @__PURE__ */ y({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(Ca, null, {
      default: v(() => [
        D(on, S({
          class: s(M)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, a.value), {
          default: v(() => [
            re("div", oy, [
              _(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), l0 = /* @__PURE__ */ y({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, a) => (f(), b(s(Qg), null, {
      default: v(() => [
        t.caption ? (f(), b(s(ny), { key: 0 }, {
          default: v(() => [
            Y(J(t.caption), 1)
          ]),
          _: 1
        })) : Z("", !0),
        D(s(ay), null, {
          default: v(() => [
            D(s(Ca), null, {
              default: v(() => [
                (f(!0), L(Q, null, he(t.headers, (n, o) => (f(), b(s(ty), null, {
                  default: v(() => [
                    t.$slots[`header_${t.headers[o].value}`] ? _(t.$slots, `header_${t.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (f(), L(Q, { key: 1 }, [
                      Y(J(n.name), 1)
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
        D(s(ey), null, {
          default: v(() => [
            (f(!0), L(Q, null, he(t.rows, (n, o) => (f(), b(s(Ca), { key: o }, {
              default: v(() => [
                (f(!0), L(Q, null, he(t.headers, (l) => (f(), b(s(on), {
                  key: l.value
                }, {
                  default: v(() => [
                    t.$slots[`cell_${l.value}`] ? _(t.$slots, `cell_${l.value}`, {
                      key: 0,
                      item: n
                    }) : (f(), L(Q, { key: 1 }, [
                      Y(J(n[l.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                t.$slots.row_actions ? (f(), b(s(oo), { key: 0 }, {
                  default: v(() => [
                    _(t.$slots, "row_actions", { item: n })
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
}), sy = { class: "text-text" }, r0 = /* @__PURE__ */ y({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const a = t, n = () => a("close");
    return (o, l) => (f(), b(s(Er), { open: o.open }, {
      default: v(() => [
        D(s(_h), { "as-child": "" }, {
          default: v(() => [
            _(o.$slots, "trigger")
          ]),
          _: 3
        }),
        D(s(Tr), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: H("max-w-" + o.size)
        }, {
          default: v(() => [
            D(s(wh), null, {
              default: v(() => [
                D(s(xh), null, {
                  default: v(() => {
                    var r;
                    return [
                      o.$slots.title ? _(o.$slots, "title", { key: 0 }) : (r = o.headerData) != null && r.title ? (f(), L(Q, { key: 1 }, [
                        Y(J(o.headerData.title), 1)
                      ], 64)) : Z("", !0)
                    ];
                  }),
                  _: 3
                }),
                D(s(Ch), null, {
                  default: v(() => {
                    var r;
                    return [
                      o.$slots.description ? _(o.$slots, "description", { key: 0 }) : (r = o.headerData) != null && r.description ? (f(), L(Q, { key: 1 }, [
                        Y(J(o.headerData.description), 1)
                      ], 64)) : Z("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            re("div", sy, [
              o.$slots.content ? _(o.$slots, "content", { key: 0 }) : _(o.$slots, "default", { key: 1 })
            ]),
            D(s($h), null, {
              default: v(() => [
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
}), ly = { class: "justify-between sm:flex" }, i0 = /* @__PURE__ */ y({
  __name: "LumuixPagination",
  props: {
    data: {},
    as: {}
  },
  setup(e) {
    const t = e, a = () => t.data.current_page === 1 ? t.data.data.length === 0 ? 0 : 1 : t.data.current_page === t.data.last_page ? t.data.total - t.data.data.length : t.data.current_page * t.data.per_page - t.data.per_page, n = () => t.data.current_page === 1 ? t.data.data.length : t.data.current_page === t.data.last_page ? t.data.total : t.data.current_page * t.data.per_page;
    return (o, l) => (f(), L("div", ly, [
      D(s(jg), {
        min: a(),
        max: n(),
        total: o.data.total
      }, null, 8, ["min", "max", "total"]),
      D(s(af), null, {
        default: v(() => [
          D(s(df), { class: "flex items-center gap-1" }, {
            default: v(() => [
              D(s(qg), {
                as: o.as,
                "as-child": "",
                href: o.data.first_page_url
              }, null, 8, ["as", "href"]),
              o.data.prev_page_url ? (f(), b(s(Zg), {
                key: 0,
                as: o.as,
                "as-child": "",
                href: o.data.prev_page_url
              }, null, 8, ["as", "href"])) : Z("", !0),
              (f(!0), L(Q, null, he(o.data.links, (r, i) => (f(), L(Q, null, [
                i < 5 ? (f(), L("div", { key: i }, [
                  D(s(Ne), {
                    href: r.url,
                    as: o.as,
                    class: "size-10 p-0",
                    variant: r.active ? "primary" : "outline"
                  }, {
                    default: v(() => [
                      Y(J(r.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["href", "as", "variant"])
                ])) : Z("", !0)
              ], 64))), 256)),
              o.data.links.length > 5 ? (f(), b(s(Gg), { key: 1 })) : Z("", !0),
              o.data.next_page_url ? (f(), b(s(Xg), {
                key: 2,
                as: o.as,
                "as-child": "",
                href: o.data.next_page_url
              }, null, 8, ["as", "href"])) : Z("", !0),
              D(s(Yg), {
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
}), ry = /* @__PURE__ */ y({
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
    const o = te(e, t);
    return (l, r) => (f(), b(s(Fv), U(j(s(o))), {
      default: v(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), d0 = /* @__PURE__ */ y({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Nv), S(s(n), {
      class: s(M)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        t.class
      )
    }), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), iy = /* @__PURE__ */ y({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => {
      var o;
      return f(), b(Pe((o = a.tab) != null && o.is ? a.tab.is : "a"), {
        href: a.tab.href,
        class: H([
          a.tab.active ? "bg-white text-primary hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          s(M)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            t.class
          )
        ])
      }, {
        default: v(() => {
          var l;
          return [
            (l = a.tab) != null && l.icon ? (f(), b(Pe(a.tab.icon), {
              key: 0,
              class: "size-5"
            })) : Z("", !0),
            Y(" " + J(a.tab.name), 1)
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
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(Lv), S(a.value, {
      class: s(M)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        t.class
      )
    }), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), u0 = /* @__PURE__ */ y({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(zv), S({
      class: s(M)(
        "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        t.class
      )
    }, a.value), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dy = {}, uy = { class: "mt-2 text-text ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function cy(e, t) {
  return f(), L("div", uy, [
    _(e.$slots, "default")
  ]);
}
const py = /* @__PURE__ */ Ia(dy, [["render", cy]]), c0 = /* @__PURE__ */ y({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(e) {
    const t = e, a = C(
      () => t.tabs.find((n) => n.active)
    );
    return (n, o) => (f(), b(s(ry), null, {
      default: v(() => [
        D(s(Os), { class: "hidden gap-2 md:block" }, {
          default: v(() => [
            (f(!0), L(Q, null, he(n.tabs, (l) => (f(), b(s(iy), {
              key: l.name,
              tab: l
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        D(s(Os), { class: "flex md:hidden" }, {
          default: v(() => [
            D(s(Th), null, {
              default: v(() => [
                D(s(Mh), { "as-child": "" }, {
                  default: v(() => [
                    D(s(Ne), { variant: "secondary" }, {
                      default: v(() => {
                        var l;
                        return [
                          Y(J(((l = a.value) == null ? void 0 : l.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                D(s(Ih), { class: "w-full" }, {
                  default: v(() => [
                    (f(!0), L(Q, null, he(n.tabs, (l) => (f(), b(s(Vh), S({
                      key: l.name,
                      ref_for: !0
                    }, l), {
                      default: v(() => [
                        Y(J(l.name), 1)
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
        D(s(py), null, {
          default: v(() => [
            _(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), fy = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, p0 = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = te(o, n);
    return (r, i) => (f(), b(s(Cf), S({
      class: s(M)("p-3", a.class)
    }, s(l)), {
      default: v(({ grid: d, weekDays: c }) => [
        D(s(_y), null, {
          default: v(() => [
            D(s(Cy)),
            D(s(wy)),
            D(s(xy))
          ]),
          _: 1
        }),
        re("div", fy, [
          (f(!0), L(Q, null, he(d, (u) => (f(), b(s(hy), {
            key: u.value.toString()
          }, {
            default: v(() => [
              D(s(yy), null, {
                default: v(() => [
                  D(s(Es), null, {
                    default: v(() => [
                      (f(!0), L(Q, null, he(c, (p) => (f(), b(s(by), { key: p }, {
                        default: v(() => [
                          Y(J(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              D(s(gy), null, {
                default: v(() => [
                  (f(!0), L(Q, null, he(u.rows, (p, h) => (f(), b(s(Es), {
                    key: `weekDate-${h}`,
                    class: "mt-2 w-full"
                  }, {
                    default: v(() => [
                      (f(!0), L(Q, null, he(p, (m) => (f(), b(s(vy), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: v(() => [
                          D(s(my), {
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
}), vy = /* @__PURE__ */ y({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Df), S({
      class: s(M)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        t.class
      )
    }, s(n)), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), my = /* @__PURE__ */ y({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Mf), S({
      class: s(M)(
        s(It)({ variant: "ghost" }),
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
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hy = /* @__PURE__ */ y({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Bf), S({
      class: s(M)("w-full border-collapse space-y-1", t.class)
    }, s(n)), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gy = /* @__PURE__ */ y({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Tf), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yy = /* @__PURE__ */ y({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Ef), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Es = /* @__PURE__ */ y({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Af), S({
      class: s(M)("mt-2 flex w-full", t.class)
    }, s(n)), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), by = /* @__PURE__ */ y({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Pf), S({
      class: s(M)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, s(n)), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _y = /* @__PURE__ */ y({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s($f), S({
      class: s(M)("relative flex w-full items-center justify-between pt-1", t.class)
    }, s(n)), {
      default: v(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wy = /* @__PURE__ */ y({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(kf), S({
      class: s(M)("text-sm font-medium text-text", t.class)
    }, s(n)), {
      default: v(({ headingValue: r }) => [
        _(o.$slots, "default", { headingValue: r }, () => [
          Y(J(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xy = /* @__PURE__ */ y({
  __name: "RangeCalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Sf), S({
      class: s(M)(
        s(It)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, s(n)), {
      default: v(() => [
        _(o.$slots, "default", {}, () => [
          D(s(th), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cy = /* @__PURE__ */ y({
  __name: "RangeCalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = se(a);
    return (o, l) => (f(), b(s(Of), S({
      class: s(M)(
        s(It)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, s(n)), {
      default: v(() => [
        _(o.$slots, "default", {}, () => [
          D(s(eh), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $y = /* @__PURE__ */ y({
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
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(fv), S(a.value, {
      class: s(M)(
        "relative shrink-0 bg-border",
        t.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        t.class
      )
    }), {
      default: v(() => [
        t.label ? (f(), L("span", {
          key: 0,
          class: H(
            s(M)(
              "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background text-xs text-muted-foreground",
              t.orientation === "vertical" ? "w-[1px] px-1 py-2" : "h-[1px] px-2 py-1"
            )
          )
        }, J(t.label), 3)) : Z("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), ky = /* @__PURE__ */ y({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = te(e, t);
    return (l, r) => (f(), b(s(Al), U(j(s(o))), {
      default: v(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), f0 = /* @__PURE__ */ y({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Ea), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), By = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, side: i, ...d } = a;
      return d;
    }), l = te(o, n);
    return (r, i) => (f(), b(s(Ao), null, {
      default: v(() => [
        D(s(Fo), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        D(s(Ro), S({
          class: s(M)(s(Dy)({ side: r.side }), a.class)
        }, { ...s(l), ...r.$attrs }), {
          default: v(() => [
            _(r.$slots, "default"),
            D(s(Ea), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: v(() => [
                D(s(xn), { class: "h-4 w-4 text-muted-foreground" })
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
}), v0 = /* @__PURE__ */ y({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(Ll), S({
      class: s(M)("text-sm text-muted-foreground", t.class)
    }, a.value), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), m0 = /* @__PURE__ */ y({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      class: H(s(M)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), h0 = /* @__PURE__ */ y({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      class: H(s(M)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), g0 = /* @__PURE__ */ y({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(Fl), S({
      class: s(M)("text-lg font-semibold text-foreground", t.class)
    }, a.value), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), y0 = /* @__PURE__ */ y({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Ml), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dy = ia(
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
), Py = "sidebar:state", Sy = 60 * 60 * 24 * 7, Oy = "16rem", Ey = "18rem", Ty = "3rem", Ay = "b", [$n, My] = ne("Sidebar"), Iy = { class: "flex h-full w-full flex-col" }, Vy = ["data-state", "data-collapsible", "data-variant", "data-side"], Ry = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow"
}, b0 = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: a, state: n, openMobile: o, setOpenMobile: l } = $n();
    return (r, i) => r.collapsible === "none" ? (f(), L("div", S({
      key: 0,
      class: s(M)("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", t.class)
    }, r.$attrs), [
      _(r.$slots, "default")
    ], 16)) : s(a) ? (f(), b(ky, S({
      key: 1,
      open: s(o)
    }, r.$attrs, { "onUpdate:open": s(l) }), {
      default: v(() => [
        D(By, {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          class: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: dt({
            "--sidebar-width": s(Ey)
          })
        }, {
          default: v(() => [
            re("div", Iy, [
              _(r.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (f(), L("div", {
      key: 2,
      class: "group peer hidden md:block",
      "data-state": s(n),
      "data-collapsible": s(n) === "collapsed" ? r.collapsible : "",
      "data-variant": r.variant,
      "data-side": r.side
    }, [
      re("div", {
        class: H(
          s(M)(
            "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            r.variant === "floating" || r.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )
        )
      }, null, 2),
      re("div", S({
        class: s(M)(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          r.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          r.variant === "floating" || r.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, r.$attrs), [
        re("div", Ry, [
          _(r.$slots, "default", { state: s(n) })
        ])
      ], 16)
    ], 8, Vy));
  }
}), _0 = /* @__PURE__ */ y({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "content",
      class: H(
        s(M)(
          "flex min-h-0 flex-1 flex-col overflow-auto bg-sidebar group-data-[collapsible=icon]:overflow-hidden",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), w0 = /* @__PURE__ */ y({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "footer",
      class: H(s(M)("flex flex-col gap-2 p-2", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), x0 = /* @__PURE__ */ y({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "group",
      class: H(s(M)("relative flex w-full min-w-0 flex-col p-0.5 sm:p-2", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), C0 = /* @__PURE__ */ y({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), {
      "data-sidebar": "group-action",
      as: a.as,
      "as-child": a.asChild,
      class: H(
        s(M)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), $0 = /* @__PURE__ */ y({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "group-content",
      class: H(s(M)("w-full text-sm", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), k0 = /* @__PURE__ */ y({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), {
      "data-sidebar": "group-label",
      as: a.as,
      "as-child": a.asChild,
      class: H(
        s(M)(
          "ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          t.class
        )
      )
    }, {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), B0 = /* @__PURE__ */ y({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "header",
      class: H(s(M)("flex flex-col gap-2 p-2", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), D0 = /* @__PURE__ */ y({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(fg, {
      "data-sidebar": "input",
      class: H(
        s(M)(
          "focus-visible:ring-sidebar-ring h-8 w-full bg-background shadow-none focus-visible:ring-2",
          t.class
        )
      )
    }, {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), P0 = /* @__PURE__ */ y({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("main", {
      class: H(
        s(M)(
          "relative flex min-h-svh flex-1 flex-col bg-background",
          "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), S0 = /* @__PURE__ */ y({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("ul", {
      "data-sidebar": "menu",
      class: H(s(M)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), O0 = /* @__PURE__ */ y({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(F), {
      "data-sidebar": "menu-action",
      class: H(
        s(M)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
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
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), E0 = /* @__PURE__ */ y({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "menu-badge",
      class: H(
        s(M)(
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
      _(a.$slots, "default")
    ], 2));
  }
}), Fy = /* @__PURE__ */ y({
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
    const o = te(e, t);
    return (l, r) => (f(), b(s(lm), U(j(s(o))), {
      default: v(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ly = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = te(o, n);
    return (r, i) => (f(), b(s(um), null, {
      default: v(() => [
        D(s(dm), S({ ...s(l), ...r.$attrs }, {
          class: s(M)(
            "z-50 overflow-hidden rounded-md border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            a.class
          )
        }), {
          default: v(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), T0 = /* @__PURE__ */ y({
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
    return (a, n) => (f(), b(s(wr), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zy = /* @__PURE__ */ y({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(rm), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ts = /* @__PURE__ */ y({
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
    return (a, n) => (f(), b(s(F), S({
      "data-sidebar": "menu-button",
      "data-size": a.size,
      "data-active": a.isActive,
      class: s(M)(s(Ky)({ variant: a.variant, size: a.size }), t.class),
      as: a.as,
      "as-child": a.asChild
    }, a.$attrs), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), A0 = /* @__PURE__ */ y({
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
    const t = e, { isMobile: a, state: n } = $n(), o = C(() => {
      const { tooltip: l, ...r } = t;
      return r;
    });
    return (l, r) => l.tooltip ? (f(), b(s(Fy), { key: 1 }, {
      default: v(() => [
        D(s(zy), { "as-child": "" }, {
          default: v(() => [
            D(Ts, U(j({ ...o.value, ...l.$attrs })), {
              default: v(() => [
                _(l.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        D(s(Ly), {
          side: "right",
          align: "center",
          hidden: s(n) !== "collapsed" || s(a)
        }, {
          default: v(() => [
            typeof l.tooltip == "string" ? (f(), L(Q, { key: 0 }, [
              Y(J(l.tooltip), 1)
            ], 64)) : (f(), b(Pe(l.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (f(), b(Ts, U(S({ key: 0 }, {
      ...o.value,
      ...l.$attrs,
      as: t.as
    })), {
      default: v(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), M0 = /* @__PURE__ */ y({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("li", {
      "data-sidebar": "menu-item",
      class: H(s(M)("group/menu-item relative", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), As = /* @__PURE__ */ y({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("div", {
      class: H(s(M)("animate-pulse rounded-md bg-skeleton", t.class))
    }, null, 2));
  }
}), I0 = /* @__PURE__ */ y({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (n, o) => (f(), L("div", {
      "data-sidebar": "menu-skeleton",
      class: H(s(M)("flex h-8 items-center gap-2 rounded-md px-2", t.class))
    }, [
      n.showIcon ? (f(), b(As, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : Z("", !0),
      D(As, {
        class: "h-4 max-w-[--skeleton-width] flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: dt({ "--skeleton-width": a.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), V0 = /* @__PURE__ */ y({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), L("ul", {
      "data-sidebar": "menu-badge",
      class: H(
        s(M)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), R0 = /* @__PURE__ */ y({
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
    return (a, n) => (f(), b(s(F), {
      "data-sidebar": "menu-sub-button",
      as: a.as,
      "as-child": a.asChild,
      "data-size": a.size,
      "data-active": a.isActive,
      class: H(
        s(M)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          a.size === "sm" && "text-xs",
          a.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), Ny = {};
function Wy(e, t) {
  return f(), L("li", null, [
    _(e.$slots, "default")
  ]);
}
const F0 = /* @__PURE__ */ Ia(Ny, [["render", Wy]]), L0 = /* @__PURE__ */ y({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = T(!1), l = T(!1), r = Ur(a, "open", n, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function i(p) {
      r.value = p, document.cookie = `${Py}=${r.value}; path=/; max-age=${Sy}`;
    }
    function d(p) {
      l.value = p;
    }
    function c() {
      return o.value ? d(!r.value) : i(!r.value);
    }
    no("keydown", (p) => {
      p.key === Ay && (p.metaKey || p.ctrlKey) && (p.preventDefault(), c());
    });
    const u = C(() => r.value ? "expanded" : "collapsed");
    return My({
      state: u,
      open: r,
      setOpen: i,
      isMobile: o,
      openMobile: l,
      setOpenMobile: d,
      toggleSidebar: c
    }), (p, h) => (f(), b(s(wr), { "delay-duration": 0 }, {
      default: v(() => [
        re("div", {
          style: dt({
            "--sidebar-width": s(Oy),
            "--sidebar-width-icon": s(Ty)
          }),
          class: H(
            s(M)(
              "group/sidebar-wrapper flex min-h-svh w-auto text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar",
              a.class
            )
          )
        }, [
          _(p.$slots, "default")
        ], 6)
      ]),
      _: 3
    }));
  }
}), z0 = /* @__PURE__ */ y({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: a } = $n();
    return (n, o) => (f(), L("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: H(
        s(M)(
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
      (...l) => s(a) && s(a)(...l))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), N0 = /* @__PURE__ */ y({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b($y, {
      "data-sidebar": "separator",
      class: H(s(M)("bg-sidebar-border mx-2 w-auto", t.class))
    }, {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), W0 = /* @__PURE__ */ y({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: a } = $n();
    return (n, o) => (f(), b(Ne, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: H(s(M)("h-7 w-7", t.class)),
      onClick: s(a)
    }, {
      default: v(() => [
        D(s(ah)),
        o[0] || (o[0] = re("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Ky = ia(
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
), K0 = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = te(o, n);
    return (r, i) => (f(), b(s(Bv), S({
      class: s(M)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        a.class
      )
    }, s(l)), {
      default: v(() => [
        D(s(Sv), { class: "relative h-2 w-full grow overflow-hidden rounded-full bg-accent data-[orientation=vertical]:w-2" }, {
          default: v(() => [
            D(s(Ov), { class: "absolute h-full bg-primary data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (f(!0), L(Q, null, he(r.modelValue, (d, c) => (f(), b(s(Pv), {
          key: c,
          class: "block size-5 rounded-full border-2 border-primary bg-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Uy = 5, Hy = 5e6, st = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let zn = 0;
function jy() {
  return zn = (zn + 1) % Number.MAX_VALUE, zn.toString();
}
const Nn = /* @__PURE__ */ new Map();
function Ms(e) {
  if (Nn.has(e)) return;
  const t = setTimeout(() => {
    Nn.delete(e), ga({
      type: st.REMOVE_TOAST,
      toastId: e
    });
  }, Hy);
  Nn.set(e, t);
}
const Ie = T({
  toasts: []
});
function ga(e) {
  switch (e.type) {
    case st.ADD_TOAST:
      Ie.value.toasts = [e.toast, ...Ie.value.toasts].slice(0, Uy);
      break;
    case st.UPDATE_TOAST:
      Ie.value.toasts = Ie.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case st.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? Ms(t) : Ie.value.toasts.forEach((a) => {
        Ms(a.id);
      }), Ie.value.toasts = Ie.value.toasts.map(
        (a) => a.id === t || t === void 0 ? {
          ...a,
          open: !1
        } : a
      );
      break;
    }
    case st.REMOVE_TOAST:
      e.toastId === void 0 ? Ie.value.toasts = [] : Ie.value.toasts = Ie.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function Gy() {
  return {
    toasts: C(() => Ie.value.toasts),
    toast: qy,
    dismiss: (e) => ga({ type: st.DISMISS_TOAST, toastId: e })
  };
}
function qy(e) {
  const t = jy(), a = (o) => ga({
    type: st.UPDATE_TOAST,
    toast: { ...o, id: t }
  }), n = () => ga({ type: st.DISMISS_TOAST, toastId: t });
  return ga({
    type: st.ADD_TOAST,
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
const Yy = { class: "flex gap-3" }, Xy = { class: "grid gap-1" }, U0 = /* @__PURE__ */ y({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = Gy();
    return (a, n) => (f(), b(s(tb), null, {
      default: v(() => [
        (f(!0), L(Q, null, he(s(t), (o) => (f(), b(s(Zy), S({
          key: o.id,
          ref_for: !0
        }, o, { class: "my-1" }), {
          default: v(() => [
            re("div", Yy, [
              (f(), b(Pe(o.icon), {
                class: H(s(M)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              re("div", Xy, [
                o.title ? (f(), b(s(eb), { key: 0 }, {
                  default: v(() => [
                    Y(J(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : Z("", !0),
                o.description ? (f(), L(Q, { key: 1 }, [
                  li(o.description) ? (f(), b(s(Is), { key: 0 }, {
                    default: v(() => [
                      (f(), b(Pe(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (f(), b(s(Is), { key: 1 }, {
                    default: v(() => [
                      Y(J(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : Z("", !0),
                D(s(Qy))
              ]),
              (f(), b(Pe(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        D(s(Jy))
      ]),
      _: 1
    }));
  }
}), Zy = /* @__PURE__ */ y({
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
    const a = e, n = t, o = C(() => {
      const { class: r, ...i } = a;
      return i;
    }), l = te(o, n);
    return (r, i) => (f(), b(s(Qv), S(s(l), {
      class: s(M)(s(ab)({ variant: r.variant }), a.class),
      "onUpdate:open": r.onOpenChange
    }), {
      default: v(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), Jy = /* @__PURE__ */ y({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(tm), S(a.value, {
      class: s(M)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), H0 = /* @__PURE__ */ y({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(em), U(j(a.value)), {
      default: v(() => [
        D(s(Ne), {
          variant: n.variant,
          class: H(t.class)
        }, {
          default: v(() => [
            _(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["variant", "class"])
      ]),
      _: 3
    }, 16));
  }
}), Qy = /* @__PURE__ */ y({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(br), S(a.value, {
      class: s(M)(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: v(() => [
        D(s(xn), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), eb = /* @__PURE__ */ y({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(am), S(a.value, {
      class: s(M)("text-sm font-semibold", t.class)
    }), {
      default: v(() => [
        _(n.$slots, "default")
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
    const t = e, a = C(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), b(s(nm), S({
      class: s(M)("text-sm opacity-90", t.class)
    }, a.value), {
      default: v(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tb = /* @__PURE__ */ y({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), b(s(Kv), U(j(t)), {
      default: v(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ab = ia(
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
  ub as Accordion,
  cb as AccordionContent,
  pb as AccordionItem,
  fb as AccordionTrigger,
  vb as Badge,
  wt as Base,
  Ah as BaseDropdownMenuItem,
  mb as Breadcrumb,
  hb as BreadcrumbEllipsis,
  gb as BreadcrumbItem,
  yb as BreadcrumbLink,
  bb as BreadcrumbList,
  _b as BreadcrumbPage,
  wb as BreadcrumbSeparator,
  Ne as Button,
  dh as Calendar,
  uh as CalendarCell,
  ch as CalendarCellTrigger,
  ph as CalendarGrid,
  fh as CalendarGridBody,
  vh as CalendarGridHead,
  Ds as CalendarGridRow,
  mh as CalendarHeadCell,
  hh as CalendarHeader,
  gh as CalendarHeading,
  yh as CalendarNextButton,
  bh as CalendarPrevButton,
  xb as Card,
  Bb as CardContent,
  kb as CardDescription,
  Db as CardFooter,
  Cb as CardHeader,
  $b as CardTitle,
  zh as CharacterCount,
  jb as Checkbox,
  n0 as CollapsibleTableRow,
  Gb as Combobox,
  Or as Command,
  Ob as CommandDialog,
  kh as CommandEmpty,
  Bh as CommandGroup,
  Ph as CommandInput,
  Sh as CommandItem,
  Eh as CommandList,
  Eb as CommandSeparator,
  Tb as CommandShortcut,
  qb as DatePicker,
  Uh as Description,
  Er as Dialog,
  Pb as DialogClose,
  Tr as DialogContent,
  Ch as DialogDescription,
  $h as DialogFooter,
  wh as DialogHeader,
  Sb as DialogScrollContent,
  xh as DialogTitle,
  _h as DialogTrigger,
  Th as DropdownMenu,
  Vb as DropdownMenuCheckboxItem,
  Ih as DropdownMenuContent,
  Ab as DropdownMenuGroup,
  Ib as DropdownMenuItem,
  zb as DropdownMenuLabel,
  Vh as DropdownMenuLink,
  Kp as DropdownMenuPortal,
  Mb as DropdownMenuRadioGroup,
  Rb as DropdownMenuRadioItem,
  Lb as DropdownMenuSeparator,
  Fb as DropdownMenuShortcut,
  Nb as DropdownMenuSub,
  Kb as DropdownMenuSubContent,
  Wb as DropdownMenuSubTrigger,
  Mh as DropdownMenuTrigger,
  jh as Error,
  Ub as Form,
  Qh as FormElement,
  Hb as FormGrid,
  Yb as ImageUpload,
  fg as Input,
  Ar as Label,
  l0 as LumuixDatatable,
  r0 as LumuixModal,
  a0 as LumuixModeToggle,
  i0 as LumuixPagination,
  c0 as LumuixTabs,
  af as Pagination,
  jg as PaginationDetails,
  Gg as PaginationEllipsis,
  qg as PaginationFirst,
  Yg as PaginationLast,
  df as PaginationList,
  db as PaginationListItem,
  Xg as PaginationNext,
  Zg as PaginationPrev,
  Mr as Popover,
  Vr as PopoverContent,
  Ir as PopoverTrigger,
  p0 as RangeCalendar,
  vy as RangeCalendarCell,
  my as RangeCalendarCellTrigger,
  hy as RangeCalendarGrid,
  gy as RangeCalendarGridBody,
  yy as RangeCalendarGridHead,
  Es as RangeCalendarGridRow,
  by as RangeCalendarHeadCell,
  _y as RangeCalendarHeader,
  wy as RangeCalendarHeading,
  xy as RangeCalendarNextButton,
  Cy as RangeCalendarPrevButton,
  e0 as Select,
  gg as SelectContent,
  Xb as SelectGroup,
  bg as SelectItem,
  Zb as SelectItemText,
  Jb as SelectLabel,
  vg as SelectRoot,
  wg as SelectScrollDownButton,
  _g as SelectScrollUpButton,
  Qb as SelectSeparator,
  hg as SelectTrigger,
  mg as SelectValue,
  $y as Separator,
  ky as Sheet,
  f0 as SheetClose,
  By as SheetContent,
  v0 as SheetDescription,
  m0 as SheetFooter,
  h0 as SheetHeader,
  g0 as SheetTitle,
  y0 as SheetTrigger,
  b0 as Sidebar,
  _0 as SidebarContent,
  w0 as SidebarFooter,
  x0 as SidebarGroup,
  C0 as SidebarGroupAction,
  $0 as SidebarGroupContent,
  k0 as SidebarGroupLabel,
  B0 as SidebarHeader,
  D0 as SidebarInput,
  P0 as SidebarInset,
  S0 as SidebarMenu,
  O0 as SidebarMenuAction,
  E0 as SidebarMenuBadge,
  A0 as SidebarMenuButton,
  M0 as SidebarMenuItem,
  I0 as SidebarMenuSkeleton,
  V0 as SidebarMenuSub,
  R0 as SidebarMenuSubButton,
  F0 as SidebarMenuSubItem,
  L0 as SidebarProvider,
  z0 as SidebarRail,
  N0 as SidebarSeparator,
  W0 as SidebarTrigger,
  As as Skeleton,
  K0 as Slider,
  py as TabBaseContent,
  Qg as Table,
  ey as TableBody,
  ny as TableCaption,
  on as TableCell,
  s0 as TableEmpty,
  o0 as TableFooter,
  ty as TableHead,
  ay as TableHeader,
  Ca as TableRow,
  oo as TableRowAction,
  u0 as TabsContent,
  iy as TabsItem,
  Os as TabsList,
  ry as TabsRoot,
  d0 as TabsTrigger,
  t0 as TextArea,
  Zy as Toast,
  H0 as ToastAction,
  Qy as ToastClose,
  Is as ToastDescription,
  tb as ToastProvider,
  eb as ToastTitle,
  Jy as ToastViewport,
  U0 as Toaster,
  Ug as Toggle,
  Fy as Tooltip,
  Ly as TooltipContent,
  T0 as TooltipProvider,
  zy as TooltipTrigger,
  lh as badgeVariants,
  It as buttonVariants,
  ob as preset,
  Dy as sheetVariants,
  Ky as sidebarMenuButtonVariants,
  rh as spinnerSize,
  qy as toast,
  ab as toastVariants,
  $n as useSidebar,
  Gy as useToast
};
