import * as ks from "vue";
import { computed as $, ref as A, shallowRef as Eo, watch as X, getCurrentScope as Oo, onScopeDispose as Ao, shallowReadonly as Ht, unref as s, defineComponent as g, toRefs as fe, createBlock as y, openBlock as f, withCtx as v, renderSlot as b, getCurrentInstance as tt, toRef as xl, camelize as $l, withKeys as Ke, h as Ze, onMounted as ue, createElementVNode as re, toDisplayString as Q, normalizeProps as K, guardReactiveProps as H, createTextVNode as q, mergeProps as P, withModifiers as Ce, nextTick as se, createVNode as D, createCommentVNode as J, withDirectives as ia, vShow as Mo, watchSyncEffect as Wi, isRef as Ra, createElementBlock as L, Fragment as Z, resolveDynamicComponent as Oe, renderList as ge, useSlots as Cl, onBeforeMount as Hi, Teleport as Bn, watchEffect as be, onBeforeUnmount as To, inject as kl, provide as Bl, toHandlers as ji, normalizeStyle as St, toHandlerKey as Gi, Comment as Dl, cloneVNode as Yi, markRaw as qi, onUnmounted as Pt, vModelSelect as Ji, onBeforeUpdate as Qi, onUpdated as Zi, readonly as Va, toRaw as Xi, reactive as Sl, mergeDefaults as Pl, watchPostEffect as ed, effectScope as El, customRef as Ol, normalizeClass as W, mergeModels as uo, useModel as Al, vModelDynamic as td, vModelText as ad, isVNode as nd } from "vue";
function od(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ml = {}, Tl = {};
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
    const l = function(r) {
      return {
        __options: r,
        handler: n(r),
        config: o(r)
      };
    };
    return l.__isOptionsFunction = !0, l.__pluginFunction = n, l.__configFunction = o, l;
  };
  const a = e;
})(Tl);
(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const e = /* @__PURE__ */ a(Tl);
  function a(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const n = e.default;
})(Ml);
let Hn = Ml;
var sd = (Hn.__esModule ? Hn : { default: Hn }).default;
const ld = sd;
function Bs(t) {
  return Object.fromEntries(
    Object.entries(t).filter(([e]) => e !== "DEFAULT")
  );
}
var rd = ld(
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
      { values: Bs(a("animationDuration")) }
    ), e(
      { delay: (n) => ({ animationDelay: n }) },
      { values: a("animationDelay") }
    ), e(
      { ease: (n) => ({ animationTimingFunction: n }) },
      { values: Bs(a("animationTimingFunction")) }
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
const id = /* @__PURE__ */ od(rd), _0 = {
  safelist: ["dark"],
  darkMode: ["class"],
  plugins: [id],
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
function qt(t, e) {
  return t - e * Math.floor(t / e);
}
const Il = 1721426;
function Mt(t, e, a, n) {
  e = Fa(t, e);
  let o = e - 1, l = -2;
  return a <= 2 ? l = 0 : $t(e) && (l = -1), Il - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + l + n);
}
function $t(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Fa(t, e) {
  return t === "BC" ? 1 - e : e;
}
function Dn(t) {
  let e = "AD";
  return t <= 0 && (e = "BC", t = 1 - t), [
    e,
    t
  ];
}
const dd = {
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
    let a = e, n = a - Il, o = Math.floor(n / 146097), l = qt(n, 146097), r = Math.floor(l / 36524), i = qt(l, 36524), d = Math.floor(i / 1461), u = qt(i, 1461), c = Math.floor(u / 365), p = o * 400 + r * 100 + d * 4 + c + (r !== 4 && c !== 4 ? 1 : 0), [_, m] = Dn(p), x = a - Mt(_, m, 1, 1), h = 2;
    a < Mt(_, m, 3, 1) ? h = 0 : $t(m) && (h = 1);
    let w = Math.floor(((x + h) * 12 + 373) / 367), C = a - Mt(_, m, w, 1) + 1;
    return new _e(_, m, w, C);
  }
  toJulianDay(e) {
    return Mt(e.era, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    return dd[$t(e.year) ? "leapyear" : "standard"][e.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(e) {
    return 12;
  }
  getDaysInYear(e) {
    return $t(e.year) ? 366 : 365;
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
const ud = {
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
function Rl(t, e) {
  return e = Se(e, t.calendar), t = Ea(t), e = Ea(e), t.era === e.era && t.year === e.year && t.month === e.month;
}
function Qe(t, e) {
  return t.calendar.identifier === e.calendar.identifier && t.era === e.era && t.year === e.year && t.month === e.month && t.day === e.day;
}
function Ds(t, e) {
  return t = Ea(t), e = Ea(e), t.calendar.identifier === e.calendar.identifier && t.era === e.era && t.year === e.year && t.month === e.month;
}
function Vl(t, e) {
  return Be(t, Ll(e));
}
function Fl(t, e, a) {
  let n = t.calendar.toJulianDay(t), o = vd(e), l = Math.ceil(n + 1 - o) % 7;
  return l < 0 && (l += 7), l;
}
function cd(t) {
  return dt(Date.now(), t);
}
function Ll(t) {
  return gd(cd(t));
}
function Nl(t, e) {
  return t.calendar.toJulianDay(t) - e.calendar.toJulianDay(e);
}
function pd(t, e) {
  return Ss(t) - Ss(e);
}
function Ss(t) {
  return t.hour * 36e5 + t.minute * 6e4 + t.second * 1e3 + t.millisecond;
}
let jn = null;
function Vt() {
  return jn == null && (jn = new Intl.DateTimeFormat().resolvedOptions().timeZone), jn;
}
function Ea(t) {
  return t.subtract({
    days: t.day - 1
  });
}
function Ps(t) {
  return t.add({
    days: t.calendar.getDaysInMonth(t) - t.day
  });
}
const Es = /* @__PURE__ */ new Map();
function fd(t) {
  if (Intl.Locale) {
    let a = Es.get(t);
    return a || (a = new Intl.Locale(t).maximize().region, a && Es.set(t, a)), a;
  }
  let e = t.split("-")[1];
  return e === "u" ? void 0 : e;
}
function vd(t) {
  let e = fd(t);
  return e && ud[e] || 0;
}
function ea(t) {
  t = Se(t, new We());
  let e = Fa(t.era, t.year);
  return zl(e, t.month, t.day, t.hour, t.minute, t.second, t.millisecond);
}
function zl(t, e, a, n, o, l, r) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, l, r), i.setUTCFullYear(t, e - 1, a), i.getTime();
}
function co(t, e) {
  if (e === "UTC") return 0;
  if (t > 0 && e === Vt()) return new Date(t).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: l, minute: r, second: i } = Ul(t, e);
  return zl(a, n, o, l, r, i, 0) - Math.floor(t / 1e3) * 1e3;
}
const Os = /* @__PURE__ */ new Map();
function Ul(t, e) {
  let a = Os.get(e);
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
  }), Os.set(e, a));
  let n = a.formatToParts(new Date(t)), o = {};
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
const As = 864e5;
function md(t, e, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((l) => hd(t, e, l));
}
function hd(t, e, a) {
  let n = Ul(a, e);
  return t.year === n.year && t.month === n.month && t.day === n.day && t.hour === n.hour && t.minute === n.minute && t.second === n.second;
}
function it(t, e, a = "compatible") {
  let n = ta(t);
  if (e === "UTC") return ea(n);
  if (e === Vt() && a === "compatible") {
    n = Se(n, new We());
    let d = /* @__PURE__ */ new Date(), u = Fa(n.era, n.year);
    return d.setFullYear(u, n.month - 1, n.day), d.setHours(n.hour, n.minute, n.second, n.millisecond), d.getTime();
  }
  let o = ea(n), l = co(o - As, e), r = co(o + As, e), i = md(n, e, o - l, o - r);
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
function Kl(t, e, a = "compatible") {
  return new Date(it(t, e, a));
}
function dt(t, e) {
  let a = co(t, e), n = new Date(t + a), o = n.getUTCFullYear(), l = n.getUTCMonth() + 1, r = n.getUTCDate(), i = n.getUTCHours(), d = n.getUTCMinutes(), u = n.getUTCSeconds(), c = n.getUTCMilliseconds();
  return new na(o < 1 ? "BC" : "AD", o < 1 ? -o + 1 : o, l, r, e, a, i, d, u, c);
}
function gd(t) {
  return new _e(t.calendar, t.era, t.year, t.month, t.day);
}
function ta(t, e) {
  let a = 0, n = 0, o = 0, l = 0;
  if ("timeZone" in t) ({ hour: a, minute: n, second: o, millisecond: l } = t);
  else if ("hour" in t && !e) return t;
  return e && ({ hour: a, minute: n, second: o, millisecond: l } = e), new aa(t.calendar, t.era, t.year, t.month, t.day, a, n, o, l);
}
function Se(t, e) {
  if (t.calendar.identifier === e.identifier) return t;
  let a = e.fromJulianDay(t.calendar.toJulianDay(t)), n = t.copy();
  return n.calendar = e, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, It(n), n;
}
function yd(t, e, a) {
  if (t instanceof na)
    return t.timeZone === e ? t : _d(t, e);
  let n = it(t, e, a);
  return dt(n, e);
}
function bd(t) {
  let e = ea(t) - t.offset;
  return new Date(e);
}
function _d(t, e) {
  let a = ea(t) - t.offset;
  return Se(dt(a, e), t.calendar);
}
const $a = 36e5;
function Sn(t, e) {
  let a = t.copy(), n = "hour" in a ? Cd(a, e) : 0;
  po(a, e.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, t), a.month += e.months || 0, fo(a), Wl(a), a.day += (e.weeks || 0) * 7, a.day += e.days || 0, a.day += n, wd(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
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
function po(t, e) {
  var a, n;
  !((a = (n = t.calendar).isInverseEra) === null || a === void 0) && a.call(n, t) && (e = -e), t.year += e;
}
function fo(t) {
  for (; t.month < 1; )
    po(t, -1), t.month += t.calendar.getMonthsInYear(t);
  let e = 0;
  for (; t.month > (e = t.calendar.getMonthsInYear(t)); )
    t.month -= e, po(t, 1);
}
function wd(t) {
  for (; t.day < 1; )
    t.month--, fo(t), t.day += t.calendar.getDaysInMonth(t);
  for (; t.day > t.calendar.getDaysInMonth(t); )
    t.day -= t.calendar.getDaysInMonth(t), t.month++, fo(t);
}
function Wl(t) {
  t.month = Math.max(1, Math.min(t.calendar.getMonthsInYear(t), t.month)), t.day = Math.max(1, Math.min(t.calendar.getDaysInMonth(t), t.day));
}
function It(t) {
  t.calendar.constrainDate && t.calendar.constrainDate(t), t.year = Math.max(1, Math.min(t.calendar.getYearsInEra(t), t.year)), Wl(t);
}
function Hl(t) {
  let e = {};
  for (let a in t) typeof t[a] == "number" && (e[a] = -t[a]);
  return e;
}
function jl(t, e) {
  return Sn(t, Hl(e));
}
function Io(t, e) {
  let a = t.copy();
  return e.era != null && (a.era = e.era), e.year != null && (a.year = e.year), e.month != null && (a.month = e.month), e.day != null && (a.day = e.day), It(a), a;
}
function vn(t, e) {
  let a = t.copy();
  return e.hour != null && (a.hour = e.hour), e.minute != null && (a.minute = e.minute), e.second != null && (a.second = e.second), e.millisecond != null && (a.millisecond = e.millisecond), $d(a), a;
}
function xd(t) {
  t.second += Math.floor(t.millisecond / 1e3), t.millisecond = Ja(t.millisecond, 1e3), t.minute += Math.floor(t.second / 60), t.second = Ja(t.second, 60), t.hour += Math.floor(t.minute / 60), t.minute = Ja(t.minute, 60);
  let e = Math.floor(t.hour / 24);
  return t.hour = Ja(t.hour, 24), e;
}
function $d(t) {
  t.millisecond = Math.max(0, Math.min(t.millisecond, 1e3)), t.second = Math.max(0, Math.min(t.second, 59)), t.minute = Math.max(0, Math.min(t.minute, 59)), t.hour = Math.max(0, Math.min(t.hour, 23));
}
function Ja(t, e) {
  let a = t % e;
  return a < 0 && (a += e), a;
}
function Cd(t, e) {
  return t.hour += e.hours || 0, t.minute += e.minutes || 0, t.second += e.seconds || 0, t.millisecond += e.milliseconds || 0, xd(t);
}
function Ro(t, e, a, n) {
  let o = t.copy();
  switch (e) {
    case "era": {
      let i = t.calendar.getEras(), d = i.indexOf(t.era);
      if (d < 0) throw new Error("Invalid era: " + t.era);
      d = ut(d, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[d], It(o);
      break;
    }
    case "year":
      var l, r;
      !((l = (r = o.calendar).isInverseEra) === null || l === void 0) && l.call(r, o) && (a = -a), o.year = ut(t.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, t);
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
  return t.calendar.balanceDate && t.calendar.balanceDate(o), It(o), o;
}
function Gl(t, e, a, n) {
  let o = t.copy();
  switch (e) {
    case "hour": {
      let l = t.hour, r = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let d = l >= 12;
        r = d ? 12 : 0, i = d ? 23 : 11;
      }
      o.hour = ut(l, a, r, i, n == null ? void 0 : n.round);
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
    let l = Math.abs(e);
    e > 0 ? t = Math.ceil(t / l) * l : t = Math.floor(t / l) * l, t > n && (t = a);
  } else
    t += e, t < a ? t = n - (a - t - 1) : t > n && (t = a + (t - n - 1));
  return t;
}
function Yl(t, e) {
  let a;
  if (e.years != null && e.years !== 0 || e.months != null && e.months !== 0 || e.weeks != null && e.weeks !== 0 || e.days != null && e.days !== 0) {
    let o = Sn(ta(t), {
      years: e.years,
      months: e.months,
      weeks: e.weeks,
      days: e.days
    });
    a = it(o, t.timeZone);
  } else
    a = ea(t) - t.offset;
  a += e.milliseconds || 0, a += (e.seconds || 0) * 1e3, a += (e.minutes || 0) * 6e4, a += (e.hours || 0) * 36e5;
  let n = dt(a, t.timeZone);
  return Se(n, t.calendar);
}
function kd(t, e) {
  return Yl(t, Hl(e));
}
function Bd(t, e, a, n) {
  switch (e) {
    case "hour": {
      let o = 0, l = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let x = t.hour >= 12;
        o = x ? 12 : 0, l = x ? 23 : 11;
      }
      let r = ta(t), i = Se(vn(r, {
        hour: o
      }), new We()), d = [
        it(i, t.timeZone, "earlier"),
        it(i, t.timeZone, "later")
      ].filter((x) => dt(x, t.timeZone).day === i.day)[0], u = Se(vn(r, {
        hour: l
      }), new We()), c = [
        it(u, t.timeZone, "earlier"),
        it(u, t.timeZone, "later")
      ].filter((x) => dt(x, t.timeZone).day === u.day).pop(), p = ea(t) - t.offset, _ = Math.floor(p / $a), m = p % $a;
      return p = ut(_, a, Math.floor(d / $a), Math.floor(c / $a), n == null ? void 0 : n.round) * $a + m, Se(dt(p, t.timeZone), t.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return Gl(t, e, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = Ro(ta(t), e, a, n), l = it(o, t.timeZone);
      return Se(dt(l, t.timeZone), t.calendar);
    }
    default:
      throw new Error("Unsupported field " + e);
  }
}
function Dd(t, e, a) {
  let n = ta(t), o = vn(Io(n, e), e);
  if (o.compare(n) === 0) return t;
  let l = it(o, t.timeZone, a);
  return Se(dt(l, t.timeZone), t.calendar);
}
function Sd(t) {
  return `${String(t.hour).padStart(2, "0")}:${String(t.minute).padStart(2, "0")}:${String(t.second).padStart(2, "0")}${t.millisecond ? String(t.millisecond / 1e3).slice(1) : ""}`;
}
function ql(t) {
  let e = Se(t, new We()), a;
  return e.era === "BC" ? a = e.year === 1 ? "0000" : "-" + String(Math.abs(1 - e.year)).padStart(6, "00") : a = String(e.year).padStart(4, "0"), `${a}-${String(e.month).padStart(2, "0")}-${String(e.day).padStart(2, "0")}`;
}
function Jl(t) {
  return `${ql(t)}T${Sd(t)}`;
}
function Pd(t) {
  let e = Math.sign(t) < 0 ? "-" : "+";
  t = Math.abs(t);
  let a = Math.floor(t / 36e5), n = t % 36e5 / 6e4;
  return `${e}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function Ed(t) {
  return `${Jl(t)}${Pd(t.offset)}[${t.timeZone}]`;
}
function Od(t, e) {
  if (e.has(t))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Vo(t, e, a) {
  Od(t, e), e.set(t, a);
}
function Fo(t) {
  let e = typeof t[0] == "object" ? t.shift() : new We(), a;
  if (typeof t[0] == "string") a = t.shift();
  else {
    let r = e.getEras();
    a = r[r.length - 1];
  }
  let n = t.shift(), o = t.shift(), l = t.shift();
  return [
    e,
    a,
    n,
    o,
    l
  ];
}
var Ad = /* @__PURE__ */ new WeakMap();
class _e {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new _e(this.calendar, this.era, this.year, this.month, this.day) : new _e(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(e) {
    return Sn(this, e);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(e) {
    return jl(this, e);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e) {
    return Io(this, e);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    return Ro(this, e, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(e) {
    return Kl(this, e);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return ql(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return Nl(this, e);
  }
  constructor(...e) {
    Vo(this, Ad, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, r] = Fo(e);
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = r, It(this);
  }
}
var Md = /* @__PURE__ */ new WeakMap();
class aa {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new aa(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new aa(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(e) {
    return Sn(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return jl(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e) {
    return Io(vn(this, e), e);
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
        return Ro(this, e, a, n);
      default:
        return Gl(this, e, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(e, a) {
    return Kl(this, e, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Jl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    let a = Nl(this, e);
    return a === 0 ? pd(this, ta(e)) : a;
  }
  constructor(...e) {
    Vo(this, Md, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, r] = Fo(e);
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = r, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, It(this);
  }
}
var Td = /* @__PURE__ */ new WeakMap();
class na {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new na(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new na(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(e) {
    return Yl(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return kd(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e, a) {
    return Dd(this, e, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    return Bd(this, e, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return bd(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return Ed(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return this.toDate().getTime() - yd(e, this.timeZone).toDate().getTime();
  }
  constructor(...e) {
    Vo(this, Td, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, r] = Fo(e), i = e.shift(), d = e.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = r, this.timeZone = i, this.offset = d, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, It(this);
  }
}
const Jt = [
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
], Id = [
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
], xt = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function Ms(t) {
  const e = Jt.findIndex(([a, n, o]) => t.year < a || t.year === a && t.month < n || t.year === a && t.month === n && t.day < o);
  return e === -1 ? Jt.length - 1 : e === 0 ? 0 : e - 1;
}
function Gn(t) {
  let e = dn[xt.indexOf(t.era)];
  if (!e) throw new Error("Unknown era: " + t.era);
  return new _e(t.year + e, t.month, t.day);
}
class Rd extends We {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = Ms(a);
    return new _e(this, xt[n], a.year - dn[n], a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(Gn(e));
  }
  balanceDate(e) {
    let a = Gn(e), n = Ms(a);
    xt[n] !== e.era && (e.era = xt[n], e.year = a.year - dn[n]), this.constrainDate(e);
  }
  constrainDate(e) {
    let a = xt.indexOf(e.era), n = Id[a];
    if (n != null) {
      let [o, l, r] = n, i = o - dn[a];
      e.year = Math.max(1, Math.min(i, e.year)), e.year === i && (e.month = Math.min(l, e.month), e.month === l && (e.day = Math.min(r, e.day)));
    }
    if (e.year === 1 && a >= 0) {
      let [, o, l] = Jt[a];
      e.month = Math.max(o, e.month), e.month === o && (e.day = Math.max(l, e.day));
    }
  }
  getEras() {
    return xt;
  }
  getYearsInEra(e) {
    let a = xt.indexOf(e.era), n = Jt[a], o = Jt[a + 1];
    if (o == null)
      return 9999 - n[0] + 1;
    let l = o[0] - n[0];
    return (e.month < o[1] || e.month === o[1] && e.day < o[2]) && l++, l;
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(Gn(e));
  }
  getMinimumMonthInYear(e) {
    let a = Ts(e);
    return a ? a[1] : 1;
  }
  getMinimumDayInMonth(e) {
    let a = Ts(e);
    return a && e.month === a[1] ? a[2] : 1;
  }
  constructor(...e) {
    super(...e), this.identifier = "japanese";
  }
}
function Ts(t) {
  if (t.year === 1) {
    let e = xt.indexOf(t.era);
    return Jt[e];
  }
}
const Ql = -543;
class Vd extends We {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = Fa(a.era, a.year);
    return new _e(this, n - Ql, a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(Is(e));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(Is(e));
  }
  balanceDate() {
  }
  constructor(...e) {
    super(...e), this.identifier = "buddhist";
  }
}
function Is(t) {
  let [e, a] = Dn(t.year + Ql);
  return new _e(e, a, t.month, t.day);
}
const mn = 1911;
function Zl(t) {
  return t.era === "minguo" ? t.year + mn : 1 - t.year + mn;
}
function Rs(t) {
  let e = t - mn;
  return e > 0 ? [
    "minguo",
    e
  ] : [
    "before_minguo",
    1 - e
  ];
}
class Fd extends We {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = Fa(a.era, a.year), [o, l] = Rs(n);
    return new _e(this, o, l, a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(Vs(e));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(e) {
    let [a, n] = Rs(Zl(e));
    e.era = a, e.year = n;
  }
  isInverseEra(e) {
    return e.era === "before_minguo";
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(Vs(e));
  }
  getYearsInEra(e) {
    return e.era === "before_minguo" ? 9999 : 9999 - mn;
  }
  constructor(...e) {
    super(...e), this.identifier = "roc";
  }
}
function Vs(t) {
  let [e, a] = Dn(Zl(t));
  return new _e(e, a, t.month, t.day);
}
const Fs = 1948320, Ls = [
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
class Ld {
  fromJulianDay(e) {
    let a = e - Fs, n = 1 + Math.floor((33 * a + 3) / 12053), o = 365 * (n - 1) + Math.floor((8 * n + 21) / 33), l = a - o, r = l < 216 ? Math.floor(l / 31) : Math.floor((l - 6) / 30), i = l - Ls[r] + 1;
    return new _e(this, n, r + 1, i);
  }
  toJulianDay(e) {
    let a = Fs - 1 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
    return a += Ls[e.month - 1], a += e.day, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(e) {
    return e.month <= 6 ? 31 : e.month <= 11 || qt(25 * e.year + 11, 33) < 8 ? 30 : 29;
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
const Yn = 78, Ns = 80;
class Nd extends We {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = a.year - Yn, o = e - Mt(a.era, a.year, 1, 1), l;
    o < Ns ? (n--, l = $t(a.year - 1) ? 31 : 30, o += l + 155 + 90 + 10) : (l = $t(a.year) ? 31 : 30, o -= Ns);
    let r, i;
    if (o < l)
      r = 1, i = o + 1;
    else {
      let d = o - l;
      d < 155 ? (r = Math.floor(d / 31) + 2, i = d % 31 + 1) : (d -= 155, r = Math.floor(d / 30) + 7, i = d % 30 + 1);
    }
    return new _e(this, n, r, i);
  }
  toJulianDay(e) {
    let a = e.year + Yn, [n, o] = Dn(a), l, r;
    return $t(o) ? (l = 31, r = Mt(n, o, 3, 21)) : (l = 30, r = Mt(n, o, 3, 22)), e.month === 1 ? r + e.day - 1 : (r += l + Math.min(e.month - 2, 5) * 31, e.month >= 8 && (r += (e.month - 7) * 30), r += e.day - 1, r);
  }
  getDaysInMonth(e) {
    return e.month === 1 && $t(e.year + Yn) || e.month >= 2 && e.month <= 6 ? 31 : 30;
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
const hn = 1948440, zs = 1948439, Ie = 1300, jt = 1600, zd = 460322;
function gn(t, e, a, n) {
  return n + Math.ceil(29.5 * (a - 1)) + (e - 1) * 354 + Math.floor((3 + 11 * e) / 30) + t - 1;
}
function Xl(t, e, a) {
  let n = Math.floor((30 * (a - e) + 10646) / 10631), o = Math.min(12, Math.ceil((a - (29 + gn(e, n, 1, 1))) / 29.5) + 1), l = a - gn(e, n, o, 1) + 1;
  return new _e(t, n, o, l);
}
function Us(t) {
  return (14 + 11 * t) % 30 < 11;
}
class Lo {
  fromJulianDay(e) {
    return Xl(this, hn, e);
  }
  toJulianDay(e) {
    return gn(hn, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    let a = 29 + e.month % 2;
    return e.month === 12 && Us(e.year) && a++, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(e) {
    return Us(e.year) ? 355 : 354;
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
class Ud extends Lo {
  fromJulianDay(e) {
    return Xl(this, zs, e);
  }
  toJulianDay(e) {
    return gn(zs, e.year, e.month, e.day);
  }
  constructor(...e) {
    super(...e), this.identifier = "islamic-tbla";
  }
}
const Kd = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let vo, Qt;
function un(t) {
  return zd + Qt[t - Ie];
}
function Ba(t, e) {
  let a = t - Ie, n = 1 << 11 - (e - 1);
  return vo[a] & n ? 30 : 29;
}
function Ks(t, e) {
  let a = un(t);
  for (let n = 1; n < e; n++) a += Ba(t, n);
  return a;
}
function Ws(t) {
  return Qt[t + 1 - Ie] - Qt[t - Ie];
}
class Wd extends Lo {
  fromJulianDay(e) {
    let a = e - hn, n = un(Ie), o = un(jt);
    if (a < n || a > o) return super.fromJulianDay(e);
    {
      let l = Ie - 1, r = 1, i = 1;
      for (; i > 0; ) {
        l++, i = a - un(l) + 1;
        let d = Ws(l);
        if (i === d) {
          r = 12;
          break;
        } else if (i < d) {
          let u = Ba(l, r);
          for (r = 1; i > u; )
            i -= u, r++, u = Ba(l, r);
          break;
        }
      }
      return new _e(this, l, r, a - Ks(l, r) + 1);
    }
  }
  toJulianDay(e) {
    return e.year < Ie || e.year > jt ? super.toJulianDay(e) : hn + Ks(e.year, e.month) + (e.day - 1);
  }
  getDaysInMonth(e) {
    return e.year < Ie || e.year > jt ? super.getDaysInMonth(e) : Ba(e.year, e.month);
  }
  getDaysInYear(e) {
    return e.year < Ie || e.year > jt ? super.getDaysInYear(e) : Ws(e.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", vo || (vo = new Uint16Array(Uint8Array.from(atob(Kd), (e) => e.charCodeAt(0)).buffer)), !Qt) {
      Qt = new Uint32Array(jt - Ie + 1);
      let e = 0;
      for (let a = Ie; a <= jt; a++) {
        Qt[a - Ie] = e;
        for (let n = 1; n <= 12; n++) e += Ba(a, n);
      }
    }
  }
}
const Hs = 347997, er = 1080, tr = 24 * er, Hd = 29, jd = 12 * er + 793, Gd = Hd * tr + jd;
function At(t) {
  return qt(t * 7 + 1, 19) < 7;
}
function cn(t) {
  let e = Math.floor((235 * t - 234) / 19), a = 12084 + 13753 * e, n = e * 29 + Math.floor(a / 25920);
  return qt(3 * (n + 1), 7) < 3 && (n += 1), n;
}
function Yd(t) {
  let e = cn(t - 1), a = cn(t);
  return cn(t + 1) - a === 356 ? 2 : a - e === 382 ? 1 : 0;
}
function Sa(t) {
  return cn(t) + Yd(t);
}
function ar(t) {
  return Sa(t + 1) - Sa(t);
}
function qd(t) {
  let e = ar(t);
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
  if (e >= 6 && !At(t) && e++, e === 4 || e === 7 || e === 9 || e === 11 || e === 13) return 29;
  let a = qd(t);
  return e === 2 ? a === 2 ? 30 : 29 : e === 3 ? a === 0 ? 29 : 30 : e === 6 ? At(t) ? 30 : 0 : 30;
}
class Jd {
  fromJulianDay(e) {
    let a = e - Hs, n = a * tr / Gd, o = Math.floor((19 * n + 234) / 235) + 1, l = Sa(o), r = Math.floor(a - l);
    for (; r < 1; )
      o--, l = Sa(o), r = Math.floor(a - l);
    let i = 1, d = 0;
    for (; d < r; )
      d += Qa(o, i), i++;
    i--, d -= Qa(o, i);
    let u = r - d;
    return new _e(this, o, i, u);
  }
  toJulianDay(e) {
    let a = Sa(e.year);
    for (let n = 1; n < e.month; n++) a += Qa(e.year, n);
    return a + e.day + Hs;
  }
  getDaysInMonth(e) {
    return Qa(e.year, e.month);
  }
  getMonthsInYear(e) {
    return At(e.year) ? 13 : 12;
  }
  getDaysInYear(e) {
    return ar(e.year);
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
    a.year !== e.year && (At(a.year) && !At(e.year) && a.month > 6 ? e.month-- : !At(a.year) && At(e.year) && a.month > 6 && e.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const mo = 1723856, js = 1824665, ho = 5500;
function yn(t, e, a, n) {
  return t + 365 * e + Math.floor(e / 4) + 30 * (a - 1) + n - 1;
}
function No(t, e) {
  let a = Math.floor(4 * (e - t) / 1461), n = 1 + Math.floor((e - yn(t, a, 1, 1)) / 30), o = e + 1 - yn(t, a, n, 1);
  return [
    a,
    n,
    o
  ];
}
function nr(t) {
  return Math.floor(t % 4 / 3);
}
function or(t, e) {
  return e % 13 !== 0 ? 30 : nr(t) + 5;
}
class zo {
  fromJulianDay(e) {
    let [a, n, o] = No(mo, e), l = "AM";
    return a <= 0 && (l = "AA", a += ho), new _e(this, l, a, n, o);
  }
  toJulianDay(e) {
    let a = e.year;
    return e.era === "AA" && (a -= ho), yn(mo, a, e.month, e.day);
  }
  getDaysInMonth(e) {
    return or(e.year, e.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(e) {
    return 365 + nr(e.year);
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
class Qd extends zo {
  fromJulianDay(e) {
    let [a, n, o] = No(mo, e);
    return a += ho, new _e(this, "AA", a, n, o);
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
class Zd extends zo {
  fromJulianDay(e) {
    let [a, n, o] = No(js, e), l = "CE";
    return a <= 0 && (l = "BCE", a = 1 - a), new _e(this, l, a, n, o);
  }
  toJulianDay(e) {
    let a = e.year;
    return e.era === "BCE" && (a = 1 - a), yn(js, a, e.month, e.day);
  }
  getDaysInMonth(e) {
    let a = e.year;
    return e.era === "BCE" && (a = 1 - a), or(a, e.month);
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
function Xd(t) {
  switch (t) {
    case "buddhist":
      return new Vd();
    case "ethiopic":
      return new zo();
    case "ethioaa":
      return new Qd();
    case "coptic":
      return new Zd();
    case "hebrew":
      return new Jd();
    case "indian":
      return new Nd();
    case "islamic-civil":
      return new Lo();
    case "islamic-tbla":
      return new Ud();
    case "islamic-umalqura":
      return new Wd();
    case "japanese":
      return new Rd();
    case "persian":
      return new Ld();
    case "roc":
      return new Fd();
    case "gregory":
    default:
      return new We();
  }
}
let qn = /* @__PURE__ */ new Map();
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
    let e = this.formatter.resolvedOptions();
    return au() && (this.resolvedHourCycle || (this.resolvedHourCycle = nu(e.locale, this.options)), e.hourCycle = this.resolvedHourCycle, e.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), e.calendar === "ethiopic-amete-alem" && (e.calendar = "ethioaa"), e;
  }
  constructor(e, a = {}) {
    this.formatter = sr(e, a), this.options = a;
  }
}
const eu = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function sr(t, e = {}) {
  if (typeof e.hour12 == "boolean" && tu()) {
    e = {
      ...e
    };
    let o = eu[String(e.hour12)][t.split("-")[0]], l = e.hour12 ? "h12" : "h23";
    e.hourCycle = o ?? l, delete e.hour12;
  }
  let a = t + (e ? Object.entries(e).sort((o, l) => o[0] < l[0] ? -1 : 1).join() : "");
  if (qn.has(a)) return qn.get(a);
  let n = new Intl.DateTimeFormat(t, e);
  return qn.set(a, n), n;
}
let Jn = null;
function tu() {
  return Jn == null && (Jn = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Jn;
}
let Qn = null;
function au() {
  return Qn == null && (Qn = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), Qn;
}
function nu(t, e) {
  if (!e.timeStyle && !e.hour) return;
  t = t.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), t += (t.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = sr(t, {
    ...e,
    timeZone: void 0
    // use local timezone
  }), n = parseInt(a.formatToParts(new Date(2020, 2, 3, 0)).find((l) => l.type === "hour").value, 10), o = parseInt(a.formatToParts(new Date(2020, 2, 3, 23)).find((l) => l.type === "hour").value, 10);
  if (n === 0 && o === 23) return "h23";
  if (n === 24 && o === 23) return "h24";
  if (n === 0 && o === 11) return "h11";
  if (n === 12 && o === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
function ou(t, e) {
  const a = [];
  for (let n = 0; n < t.length; n += e)
    a.push(t.slice(n, n + e));
  return a;
}
function Ue(t, e = Vt()) {
  return Uo(t) ? t.toDate() : t.toDate(e);
}
function su(t) {
  return t instanceof aa;
}
function Uo(t) {
  return t instanceof na;
}
function lu(t) {
  return su(t) || Uo(t);
}
function Oa(t) {
  if (t instanceof Date) {
    const e = t.getFullYear(), a = t.getMonth() + 1;
    return new Date(e, a, 0).getDate();
  } else
    return t.set({ day: 100 }).day;
}
function Ct(t, e) {
  return t.compare(e) < 0;
}
function Da(t, e) {
  return t.compare(e) > 0;
}
function ru(t, e) {
  return t.compare(e) <= 0;
}
function iu(t, e) {
  return t.compare(e) >= 0;
}
function du(t, e, a) {
  return iu(t, e) && ru(t, a);
}
function uu(t, e, a) {
  return Da(t, e) && Ct(t, a);
}
function cu(t, e, a) {
  const n = Fl(t, a);
  return e > n ? t.subtract({ days: n + 7 - e }) : e === n ? t : t.subtract({ days: n - e });
}
function pu(t, e, a) {
  const n = Fl(t, a), o = e === 0 ? 6 : e - 1;
  return n === o ? t : n > o ? t.add({ days: 7 - n + o }) : t.add({ days: o - n });
}
function fu(t, e, a, n) {
  if (a === void 0 && n === void 0)
    return !0;
  let o = t.add({ days: 1 });
  if (n != null && n(o) || a != null && a(o))
    return !1;
  const l = e;
  for (; o.compare(l) < 0; )
    if (o = o.add({ days: 1 }), n != null && n(o) || a != null && a(o))
      return !1;
  return !0;
}
function Gs(t, e) {
  const a = [];
  let n = t.add({ days: 1 });
  const o = e;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function Zn(t) {
  const { dateObj: e, weekStartsOn: a, fixedWeeks: n, locale: o } = t, l = Oa(e), r = Array.from({ length: l }, (w, C) => e.set({ day: C + 1 })), i = Ea(e), d = Ps(e), u = cu(i, a, o), c = pu(d, a, o), p = Gs(u.subtract({ days: 1 }), i), _ = Gs(d, c.add({ days: 1 })), m = p.length + r.length + _.length;
  if (n && m < 42) {
    const w = 42 - m;
    let C = _[_.length - 1];
    C || (C = Ps(e));
    const S = Array.from({ length: w }, (k, E) => {
      const O = E + 1;
      return C.add({ days: O });
    });
    _.push(...S);
  }
  const x = p.concat(r, _), h = ou(x, 7);
  return {
    value: e,
    cells: x,
    rows: h
  };
}
function Ot(t) {
  const { numberOfMonths: e, dateObj: a, ...n } = t, o = [];
  if (!e || e === 1)
    return o.push(
      Zn({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    Zn({
      ...n,
      dateObj: a
    })
  );
  for (let l = 1; l < e; l++) {
    const r = a.add({ months: l });
    o.push(
      Zn({
        ...n,
        dateObj: r
      })
    );
  }
  return o;
}
const vu = ["top", "right", "bottom", "left"], kt = Math.min, Ee = Math.max, bn = Math.round, Za = Math.floor, Xe = (t) => ({
  x: t,
  y: t
}), mu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, hu = {
  start: "end",
  end: "start"
};
function go(t, e, a) {
  return Ee(t, kt(e, a));
}
function ft(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function vt(t) {
  return t.split("-")[0];
}
function da(t) {
  return t.split("-")[1];
}
function Ko(t) {
  return t === "x" ? "y" : "x";
}
function Wo(t) {
  return t === "y" ? "height" : "width";
}
function Bt(t) {
  return ["top", "bottom"].includes(vt(t)) ? "y" : "x";
}
function Ho(t) {
  return Ko(Bt(t));
}
function gu(t, e, a) {
  a === void 0 && (a = !1);
  const n = da(t), o = Ho(t), l = Wo(o);
  let r = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[l] > e.floating[l] && (r = _n(r)), [r, _n(r)];
}
function yu(t) {
  const e = _n(t);
  return [yo(t), e, yo(e)];
}
function yo(t) {
  return t.replace(/start|end/g, (e) => hu[e]);
}
function bu(t, e, a) {
  const n = ["left", "right"], o = ["right", "left"], l = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return a ? e ? o : n : e ? n : o;
    case "left":
    case "right":
      return e ? l : r;
    default:
      return [];
  }
}
function _u(t, e, a, n) {
  const o = da(t);
  let l = bu(vt(t), a === "start", n);
  return o && (l = l.map((r) => r + "-" + o), e && (l = l.concat(l.map(yo)))), l;
}
function _n(t) {
  return t.replace(/left|right|bottom|top/g, (e) => mu[e]);
}
function wu(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function lr(t) {
  return typeof t != "number" ? wu(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function wn(t) {
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
function Ys(t, e, a) {
  let {
    reference: n,
    floating: o
  } = t;
  const l = Bt(e), r = Ho(e), i = Wo(r), d = vt(e), u = l === "y", c = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, _ = n[i] / 2 - o[i] / 2;
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
  switch (da(e)) {
    case "start":
      m[r] -= _ * (a && u ? -1 : 1);
      break;
    case "end":
      m[r] += _ * (a && u ? -1 : 1);
      break;
  }
  return m;
}
const xu = async (t, e, a) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: l = [],
    platform: r
  } = a, i = l.filter(Boolean), d = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let u = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: c,
    y: p
  } = Ys(u, n, d), _ = n, m = {}, x = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: w,
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
      [w]: {
        ...m[w],
        ...E
      }
    }, O && x <= 50 && (x++, typeof O == "object" && (O.placement && (_ = O.placement), O.rects && (u = O.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : O.rects), {
      x: c,
      y: p
    } = Ys(u, _, d)), h = -1);
  }
  return {
    x: c,
    y: p,
    placement: _,
    strategy: o,
    middlewareData: m
  };
};
async function Aa(t, e) {
  var a;
  e === void 0 && (e = {});
  const {
    x: n,
    y: o,
    platform: l,
    rects: r,
    elements: i,
    strategy: d
  } = t, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: _ = !1,
    padding: m = 0
  } = ft(e, t), x = lr(m), w = i[_ ? p === "floating" ? "reference" : "floating" : p], C = wn(await l.getClippingRect({
    element: (a = await (l.isElement == null ? void 0 : l.isElement(w))) == null || a ? w : w.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: d
  })), S = p === "floating" ? {
    x: n,
    y: o,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, k = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(i.floating)), E = await (l.isElement == null ? void 0 : l.isElement(k)) ? await (l.getScale == null ? void 0 : l.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = wn(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: S,
    offsetParent: k,
    strategy: d
  }) : S);
  return {
    top: (C.top - O.top + x.top) / E.y,
    bottom: (O.bottom - C.bottom + x.bottom) / E.y,
    left: (C.left - O.left + x.left) / E.x,
    right: (O.right - C.right + x.right) / E.x
  };
}
const $u = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: a,
      y: n,
      placement: o,
      rects: l,
      platform: r,
      elements: i,
      middlewareData: d
    } = e, {
      element: u,
      padding: c = 0
    } = ft(t, e) || {};
    if (u == null)
      return {};
    const p = lr(c), _ = {
      x: a,
      y: n
    }, m = Ho(o), x = Wo(m), h = await r.getDimensions(u), w = m === "y", C = w ? "top" : "left", S = w ? "bottom" : "right", k = w ? "clientHeight" : "clientWidth", E = l.reference[x] + l.reference[m] - _[m] - l.floating[x], O = _[m] - l.reference[m], R = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(u));
    let M = R ? R[k] : 0;
    (!M || !await (r.isElement == null ? void 0 : r.isElement(R))) && (M = i.floating[k] || l.floating[x]);
    const U = E / 2 - O / 2, z = M / 2 - h[x] / 2 - 1, B = kt(p[C], z), I = kt(p[S], z), V = B, Y = M - h[x] - I, G = M / 2 - h[x] / 2 + U, ae = go(V, G, Y), ce = !d.arrow && da(o) != null && G !== ae && l.reference[x] / 2 - (G < V ? B : I) - h[x] / 2 < 0, he = ce ? G < V ? G - V : G - Y : 0;
    return {
      [m]: _[m] + he,
      data: {
        [m]: ae,
        centerOffset: G - ae - he,
        ...ce && {
          alignmentOffset: he
        }
      },
      reset: ce
    };
  }
}), Cu = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var a, n;
      const {
        placement: o,
        middlewareData: l,
        rects: r,
        initialPlacement: i,
        platform: d,
        elements: u
      } = e, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: _,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: h = !0,
        ...w
      } = ft(t, e);
      if ((a = l.arrow) != null && a.alignmentOffset)
        return {};
      const C = vt(o), S = Bt(i), k = vt(i) === i, E = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), O = _ || (k || !h ? [_n(i)] : yu(i)), R = x !== "none";
      !_ && R && O.push(..._u(i, h, x, E));
      const M = [i, ...O], U = await Aa(e, w), z = [];
      let B = ((n = l.flip) == null ? void 0 : n.overflows) || [];
      if (c && z.push(U[C]), p) {
        const G = gu(o, r, E);
        z.push(U[G[0]], U[G[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: z
      }], !z.every((G) => G <= 0)) {
        var I, V;
        const G = (((I = l.flip) == null ? void 0 : I.index) || 0) + 1, ae = M[G];
        if (ae)
          return {
            data: {
              index: G,
              overflows: B
            },
            reset: {
              placement: ae
            }
          };
        let ce = (V = B.filter((he) => he.overflows[0] <= 0).sort((he, ye) => he.overflows[1] - ye.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!ce)
          switch (m) {
            case "bestFit": {
              var Y;
              const he = (Y = B.filter((ye) => {
                if (R) {
                  const j = Bt(ye.placement);
                  return j === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((ye) => [ye.placement, ye.overflows.filter((j) => j > 0).reduce((j, oe) => j + oe, 0)]).sort((ye, j) => ye[1] - j[1])[0]) == null ? void 0 : Y[0];
              he && (ce = he);
              break;
            }
            case "initialPlacement":
              ce = i;
              break;
          }
        if (o !== ce)
          return {
            reset: {
              placement: ce
            }
          };
      }
      return {};
    }
  };
};
function qs(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Js(t) {
  return vu.some((e) => t[e] >= 0);
}
const ku = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: a
      } = e, {
        strategy: n = "referenceHidden",
        ...o
      } = ft(t, e);
      switch (n) {
        case "referenceHidden": {
          const l = await Aa(e, {
            ...o,
            elementContext: "reference"
          }), r = qs(l, a.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: Js(r)
            }
          };
        }
        case "escaped": {
          const l = await Aa(e, {
            ...o,
            altBoundary: !0
          }), r = qs(l, a.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: Js(r)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Bu(t, e) {
  const {
    placement: a,
    platform: n,
    elements: o
  } = t, l = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), r = vt(a), i = da(a), d = Bt(a) === "y", u = ["left", "top"].includes(r) ? -1 : 1, c = l && d ? -1 : 1, p = ft(e, t);
  let {
    mainAxis: _,
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
    x: m * c,
    y: _ * u
  } : {
    x: _ * u,
    y: m * c
  };
}
const Du = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var a, n;
      const {
        x: o,
        y: l,
        placement: r,
        middlewareData: i
      } = e, d = await Bu(e, t);
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
}, Su = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: a,
        y: n,
        placement: o
      } = e, {
        mainAxis: l = !0,
        crossAxis: r = !1,
        limiter: i = {
          fn: (w) => {
            let {
              x: C,
              y: S
            } = w;
            return {
              x: C,
              y: S
            };
          }
        },
        ...d
      } = ft(t, e), u = {
        x: a,
        y: n
      }, c = await Aa(e, d), p = Bt(vt(o)), _ = Ko(p);
      let m = u[_], x = u[p];
      if (l) {
        const w = _ === "y" ? "top" : "left", C = _ === "y" ? "bottom" : "right", S = m + c[w], k = m - c[C];
        m = go(S, m, k);
      }
      if (r) {
        const w = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", S = x + c[w], k = x - c[C];
        x = go(S, x, k);
      }
      const h = i.fn({
        ...e,
        [_]: m,
        [p]: x
      });
      return {
        ...h,
        data: {
          x: h.x - a,
          y: h.y - n,
          enabled: {
            [_]: l,
            [p]: r
          }
        }
      };
    }
  };
}, Pu = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: a,
        y: n,
        placement: o,
        rects: l,
        middlewareData: r
      } = e, {
        offset: i = 0,
        mainAxis: d = !0,
        crossAxis: u = !0
      } = ft(t, e), c = {
        x: a,
        y: n
      }, p = Bt(o), _ = Ko(p);
      let m = c[_], x = c[p];
      const h = ft(i, e), w = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (d) {
        const k = _ === "y" ? "height" : "width", E = l.reference[_] - l.floating[k] + w.mainAxis, O = l.reference[_] + l.reference[k] - w.mainAxis;
        m < E ? m = E : m > O && (m = O);
      }
      if (u) {
        var C, S;
        const k = _ === "y" ? "width" : "height", E = ["top", "left"].includes(vt(o)), O = l.reference[p] - l.floating[k] + (E && ((C = r.offset) == null ? void 0 : C[p]) || 0) + (E ? 0 : w.crossAxis), R = l.reference[p] + l.reference[k] + (E ? 0 : ((S = r.offset) == null ? void 0 : S[p]) || 0) - (E ? w.crossAxis : 0);
        x < O ? x = O : x > R && (x = R);
      }
      return {
        [_]: m,
        [p]: x
      };
    }
  };
}, Eu = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var a, n;
      const {
        placement: o,
        rects: l,
        platform: r,
        elements: i
      } = e, {
        apply: d = () => {
        },
        ...u
      } = ft(t, e), c = await Aa(e, u), p = vt(o), _ = da(o), m = Bt(o) === "y", {
        width: x,
        height: h
      } = l.floating;
      let w, C;
      p === "top" || p === "bottom" ? (w = p, C = _ === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, w = _ === "end" ? "top" : "bottom");
      const S = h - c.top - c.bottom, k = x - c.left - c.right, E = kt(h - c[w], S), O = kt(x - c[C], k), R = !e.middlewareData.shift;
      let M = E, U = O;
      if ((a = e.middlewareData.shift) != null && a.enabled.x && (U = k), (n = e.middlewareData.shift) != null && n.enabled.y && (M = S), R && !_) {
        const B = Ee(c.left, 0), I = Ee(c.right, 0), V = Ee(c.top, 0), Y = Ee(c.bottom, 0);
        m ? U = x - 2 * (B !== 0 || I !== 0 ? B + I : Ee(c.left, c.right)) : M = h - 2 * (V !== 0 || Y !== 0 ? V + Y : Ee(c.top, c.bottom));
      }
      await d({
        ...e,
        availableWidth: U,
        availableHeight: M
      });
      const z = await r.getDimensions(i.floating);
      return x !== z.width || h !== z.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Pn() {
  return typeof window < "u";
}
function Ft(t) {
  return jo(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Ae(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function at(t) {
  var e;
  return (e = (jo(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function jo(t) {
  return Pn() ? t instanceof Node || t instanceof Ae(t).Node : !1;
}
function He(t) {
  return Pn() ? t instanceof Element || t instanceof Ae(t).Element : !1;
}
function et(t) {
  return Pn() ? t instanceof HTMLElement || t instanceof Ae(t).HTMLElement : !1;
}
function Qs(t) {
  return !Pn() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Ae(t).ShadowRoot;
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
function Ou(t) {
  return ["table", "td", "th"].includes(Ft(t));
}
function En(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function Go(t) {
  const e = Yo(), a = He(t) ? je(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => a[n] ? a[n] !== "none" : !1) || (a.containerType ? a.containerType !== "normal" : !1) || !e && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !e && (a.filter ? a.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function Au(t) {
  let e = Dt(t);
  for (; et(e) && !oa(e); ) {
    if (Go(e))
      return e;
    if (En(e))
      return null;
    e = Dt(e);
  }
  return null;
}
function Yo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function oa(t) {
  return ["html", "body", "#document"].includes(Ft(t));
}
function je(t) {
  return Ae(t).getComputedStyle(t);
}
function On(t) {
  return He(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function Dt(t) {
  if (Ft(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Qs(t) && t.host || // Fallback.
    at(t)
  );
  return Qs(e) ? e.host : e;
}
function rr(t) {
  const e = Dt(t);
  return oa(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : et(e) && La(e) ? e : rr(e);
}
function Ma(t, e, a) {
  var n;
  e === void 0 && (e = []), a === void 0 && (a = !0);
  const o = rr(t), l = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Ae(o);
  if (l) {
    const i = bo(r);
    return e.concat(r, r.visualViewport || [], La(o) ? o : [], i && a ? Ma(i) : []);
  }
  return e.concat(o, Ma(o, [], a));
}
function bo(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function ir(t) {
  const e = je(t);
  let a = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = et(t), l = o ? t.offsetWidth : a, r = o ? t.offsetHeight : n, i = bn(a) !== l || bn(n) !== r;
  return i && (a = l, n = r), {
    width: a,
    height: n,
    $: i
  };
}
function qo(t) {
  return He(t) ? t : t.contextElement;
}
function Zt(t) {
  const e = qo(t);
  if (!et(e))
    return Xe(1);
  const a = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: l
  } = ir(e);
  let r = (l ? bn(a.width) : a.width) / n, i = (l ? bn(a.height) : a.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: r,
    y: i
  };
}
const Mu = /* @__PURE__ */ Xe(0);
function dr(t) {
  const e = Ae(t);
  return !Yo() || !e.visualViewport ? Mu : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Tu(t, e, a) {
  return e === void 0 && (e = !1), !a || e && a !== Ae(t) ? !1 : e;
}
function Rt(t, e, a, n) {
  e === void 0 && (e = !1), a === void 0 && (a = !1);
  const o = t.getBoundingClientRect(), l = qo(t);
  let r = Xe(1);
  e && (n ? He(n) && (r = Zt(n)) : r = Zt(t));
  const i = Tu(l, a, n) ? dr(l) : Xe(0);
  let d = (o.left + i.x) / r.x, u = (o.top + i.y) / r.y, c = o.width / r.x, p = o.height / r.y;
  if (l) {
    const _ = Ae(l), m = n && He(n) ? Ae(n) : n;
    let x = _, h = bo(x);
    for (; h && n && m !== x; ) {
      const w = Zt(h), C = h.getBoundingClientRect(), S = je(h), k = C.left + (h.clientLeft + parseFloat(S.paddingLeft)) * w.x, E = C.top + (h.clientTop + parseFloat(S.paddingTop)) * w.y;
      d *= w.x, u *= w.y, c *= w.x, p *= w.y, d += k, u += E, x = Ae(h), h = bo(x);
    }
  }
  return wn({
    width: c,
    height: p,
    x: d,
    y: u
  });
}
function Jo(t, e) {
  const a = On(t).scrollLeft;
  return e ? e.left + a : Rt(at(t)).left + a;
}
function ur(t, e, a) {
  a === void 0 && (a = !1);
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - (a ? 0 : (
    // RTL <body> scrollbar.
    Jo(t, n)
  )), l = n.top + e.scrollTop;
  return {
    x: o,
    y: l
  };
}
function Iu(t) {
  let {
    elements: e,
    rect: a,
    offsetParent: n,
    strategy: o
  } = t;
  const l = o === "fixed", r = at(n), i = e ? En(e.floating) : !1;
  if (n === r || i && l)
    return a;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Xe(1);
  const c = Xe(0), p = et(n);
  if ((p || !p && !l) && ((Ft(n) !== "body" || La(r)) && (d = On(n)), et(n))) {
    const m = Rt(n);
    u = Zt(n), c.x = m.x + n.clientLeft, c.y = m.y + n.clientTop;
  }
  const _ = r && !p && !l ? ur(r, d, !0) : Xe(0);
  return {
    width: a.width * u.x,
    height: a.height * u.y,
    x: a.x * u.x - d.scrollLeft * u.x + c.x + _.x,
    y: a.y * u.y - d.scrollTop * u.y + c.y + _.y
  };
}
function Ru(t) {
  return Array.from(t.getClientRects());
}
function Vu(t) {
  const e = at(t), a = On(t), n = t.ownerDocument.body, o = Ee(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), l = Ee(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -a.scrollLeft + Jo(t);
  const i = -a.scrollTop;
  return je(n).direction === "rtl" && (r += Ee(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: l,
    x: r,
    y: i
  };
}
function Fu(t, e) {
  const a = Ae(t), n = at(t), o = a.visualViewport;
  let l = n.clientWidth, r = n.clientHeight, i = 0, d = 0;
  if (o) {
    l = o.width, r = o.height;
    const u = Yo();
    (!u || u && e === "fixed") && (i = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: l,
    height: r,
    x: i,
    y: d
  };
}
function Lu(t, e) {
  const a = Rt(t, !0, e === "fixed"), n = a.top + t.clientTop, o = a.left + t.clientLeft, l = et(t) ? Zt(t) : Xe(1), r = t.clientWidth * l.x, i = t.clientHeight * l.y, d = o * l.x, u = n * l.y;
  return {
    width: r,
    height: i,
    x: d,
    y: u
  };
}
function Zs(t, e, a) {
  let n;
  if (e === "viewport")
    n = Fu(t, a);
  else if (e === "document")
    n = Vu(at(t));
  else if (He(e))
    n = Lu(e, a);
  else {
    const o = dr(t);
    n = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return wn(n);
}
function cr(t, e) {
  const a = Dt(t);
  return a === e || !He(a) || oa(a) ? !1 : je(a).position === "fixed" || cr(a, e);
}
function Nu(t, e) {
  const a = e.get(t);
  if (a)
    return a;
  let n = Ma(t, [], !1).filter((i) => He(i) && Ft(i) !== "body"), o = null;
  const l = je(t).position === "fixed";
  let r = l ? Dt(t) : t;
  for (; He(r) && !oa(r); ) {
    const i = je(r), d = Go(r);
    !d && i.position === "fixed" && (o = null), (l ? !d && !o : !d && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || La(r) && !d && cr(t, r)) ? n = n.filter((c) => c !== r) : o = i, r = Dt(r);
  }
  return e.set(t, n), n;
}
function zu(t) {
  let {
    element: e,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = t;
  const r = [...a === "clippingAncestors" ? En(e) ? [] : Nu(e, this._c) : [].concat(a), n], i = r[0], d = r.reduce((u, c) => {
    const p = Zs(e, c, o);
    return u.top = Ee(p.top, u.top), u.right = kt(p.right, u.right), u.bottom = kt(p.bottom, u.bottom), u.left = Ee(p.left, u.left), u;
  }, Zs(e, i, o));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function Uu(t) {
  const {
    width: e,
    height: a
  } = ir(t);
  return {
    width: e,
    height: a
  };
}
function Ku(t, e, a) {
  const n = et(e), o = at(e), l = a === "fixed", r = Rt(t, !0, l, e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = Xe(0);
  if (n || !n && !l)
    if ((Ft(e) !== "body" || La(o)) && (i = On(e)), n) {
      const _ = Rt(e, !0, l, e);
      d.x = _.x + e.clientLeft, d.y = _.y + e.clientTop;
    } else o && (d.x = Jo(o));
  const u = o && !n && !l ? ur(o, i) : Xe(0), c = r.left + i.scrollLeft - d.x - u.x, p = r.top + i.scrollTop - d.y - u.y;
  return {
    x: c,
    y: p,
    width: r.width,
    height: r.height
  };
}
function Xn(t) {
  return je(t).position === "static";
}
function Xs(t, e) {
  if (!et(t) || je(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let a = t.offsetParent;
  return at(t) === a && (a = a.ownerDocument.body), a;
}
function pr(t, e) {
  const a = Ae(t);
  if (En(t))
    return a;
  if (!et(t)) {
    let o = Dt(t);
    for (; o && !oa(o); ) {
      if (He(o) && !Xn(o))
        return o;
      o = Dt(o);
    }
    return a;
  }
  let n = Xs(t, e);
  for (; n && Ou(n) && Xn(n); )
    n = Xs(n, e);
  return n && oa(n) && Xn(n) && !Go(n) ? a : n || Au(t) || a;
}
const Wu = async function(t) {
  const e = this.getOffsetParent || pr, a = this.getDimensions, n = await a(t.floating);
  return {
    reference: Ku(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Hu(t) {
  return je(t).direction === "rtl";
}
const ju = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Iu,
  getDocumentElement: at,
  getClippingRect: zu,
  getOffsetParent: pr,
  getElementRects: Wu,
  getClientRects: Ru,
  getDimensions: Uu,
  getScale: Zt,
  isElement: He,
  isRTL: Hu
};
function fr(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Gu(t, e) {
  let a = null, n;
  const o = at(t);
  function l() {
    var i;
    clearTimeout(n), (i = a) == null || i.disconnect(), a = null;
  }
  function r(i, d) {
    i === void 0 && (i = !1), d === void 0 && (d = 1), l();
    const u = t.getBoundingClientRect(), {
      left: c,
      top: p,
      width: _,
      height: m
    } = u;
    if (i || e(), !_ || !m)
      return;
    const x = Za(p), h = Za(o.clientWidth - (c + _)), w = Za(o.clientHeight - (p + m)), C = Za(c), k = {
      rootMargin: -x + "px " + -h + "px " + -w + "px " + -C + "px",
      threshold: Ee(0, kt(1, d)) || 1
    };
    let E = !0;
    function O(R) {
      const M = R[0].intersectionRatio;
      if (M !== d) {
        if (!E)
          return r();
        M ? r(!1, M) : n = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !fr(u, t.getBoundingClientRect()) && r(), E = !1;
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
  return r(!0), l;
}
function Yu(t, e, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: l = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, u = qo(t), c = o || l ? [...u ? Ma(u) : [], ...Ma(e)] : [];
  c.forEach((C) => {
    o && C.addEventListener("scroll", a, {
      passive: !0
    }), l && C.addEventListener("resize", a);
  });
  const p = u && i ? Gu(u, a) : null;
  let _ = -1, m = null;
  r && (m = new ResizeObserver((C) => {
    let [S] = C;
    S && S.target === u && m && (m.unobserve(e), cancelAnimationFrame(_), _ = requestAnimationFrame(() => {
      var k;
      (k = m) == null || k.observe(e);
    })), a();
  }), u && !d && m.observe(u), m.observe(e));
  let x, h = d ? Rt(t) : null;
  d && w();
  function w() {
    const C = Rt(t);
    h && !fr(h, C) && a(), h = C, x = requestAnimationFrame(w);
  }
  return a(), () => {
    var C;
    c.forEach((S) => {
      o && S.removeEventListener("scroll", a), l && S.removeEventListener("resize", a);
    }), p == null || p(), (C = m) == null || C.disconnect(), m = null, d && cancelAnimationFrame(x);
  };
}
const qu = Du, Ju = Su, el = Cu, Qu = Eu, Zu = ku, Xu = $u, ec = Pu, tc = (t, e, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: ju,
    ...a
  }, l = {
    ...o.platform,
    _c: n
  };
  return xu(t, e, {
    ...o,
    platform: l
  });
};
function ac(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function _o(t) {
  if (ac(t)) {
    const e = t.$el;
    return jo(e) && Ft(e) === "#comment" ? null : e;
  }
  return t;
}
function Yt(t) {
  return typeof t == "function" ? t() : s(t);
}
function nc(t) {
  return {
    name: "arrow",
    options: t,
    fn(e) {
      const a = _o(Yt(t.element));
      return a == null ? {} : Xu({
        element: a,
        padding: t.padding
      }).fn(e);
    }
  };
}
function vr(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function tl(t, e) {
  const a = vr(t);
  return Math.round(e * a) / a;
}
function oc(t, e, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = $(() => {
    var M;
    return (M = Yt(a.open)) != null ? M : !0;
  }), l = $(() => Yt(a.middleware)), r = $(() => {
    var M;
    return (M = Yt(a.placement)) != null ? M : "bottom";
  }), i = $(() => {
    var M;
    return (M = Yt(a.strategy)) != null ? M : "absolute";
  }), d = $(() => {
    var M;
    return (M = Yt(a.transform)) != null ? M : !0;
  }), u = $(() => _o(t.value)), c = $(() => _o(e.value)), p = A(0), _ = A(0), m = A(i.value), x = A(r.value), h = Eo({}), w = A(!1), C = $(() => {
    const M = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return M;
    const U = tl(c.value, p.value), z = tl(c.value, _.value);
    return d.value ? {
      ...M,
      transform: "translate(" + U + "px, " + z + "px)",
      ...vr(c.value) >= 1.5 && {
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
    tc(u.value, c.value, {
      middleware: l.value,
      placement: r.value,
      strategy: i.value
    }).then((U) => {
      p.value = U.x, _.value = U.y, m.value = U.strategy, x.value = U.placement, h.value = U.middlewareData, w.value = M !== !1;
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
  function R() {
    o.value || (w.value = !1);
  }
  return X([l, r, i, o], k, {
    flush: "sync"
  }), X([u, c], O, {
    flush: "sync"
  }), X(o, R, {
    flush: "sync"
  }), Oo() && Ao(E), {
    x: Ht(p),
    y: Ht(_),
    strategy: Ht(m),
    placement: Ht(x),
    middlewareData: Ht(h),
    isPositioned: Ht(w),
    floatingStyles: C,
    update: k
  };
}
function ne(t, e) {
  const a = typeof t == "string" && !e ? `${t}Context` : e, n = Symbol(a);
  return [(o) => {
    const l = kl(n, o);
    if (l || l === null)
      return l;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(
        ", "
      )}` : `\`${t}\``}`
    );
  }, (o) => (Bl(n, o), o)];
}
function Qo(t, e, a) {
  const n = a.originalEvent.target, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
function xn(t, e = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(a, Math.max(e, t));
}
function sc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var lc = function t(e, a) {
  if (e === a) return !0;
  if (e && a && typeof e == "object" && typeof a == "object") {
    if (e.constructor !== a.constructor) return !1;
    var n, o, l;
    if (Array.isArray(e)) {
      if (n = e.length, n != a.length) return !1;
      for (o = n; o-- !== 0; )
        if (!t(e[o], a[o])) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === a.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === a.toString();
    if (l = Object.keys(e), n = l.length, n !== Object.keys(a).length) return !1;
    for (o = n; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(a, l[o])) return !1;
    for (o = n; o-- !== 0; ) {
      var r = l[o];
      if (!t(e[r], a[r])) return !1;
    }
    return !0;
  }
  return e !== e && a !== a;
};
const Tt = /* @__PURE__ */ sc(lc);
function pn(t) {
  return t == null;
}
function mr(t) {
  const { defaultValue: e, defaultPlaceholder: a, granularity: n = "day", locale: o = "en" } = t;
  if (Array.isArray(e) && e.length)
    return e.at(-1).copy();
  if (e && !Array.isArray(e))
    return e.copy();
  if (a)
    return a.copy();
  const l = /* @__PURE__ */ new Date(), r = l.getFullYear(), i = l.getMonth() + 1, d = l.getDate(), u = ["hour", "minute", "second"], c = new Je(o), p = Xd(c.resolvedOptions().calendar);
  return u.includes(n ?? "day") ? Se(new aa(r, i, d, 0, 0, 0), p) : Se(new _e(r, i, d), p);
}
function hr(t) {
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
function rc(t, e) {
  var a;
  const n = Eo();
  return be(() => {
    n.value = t();
  }, {
    ...e,
    flush: (a = void 0) != null ? a : "sync"
  }), Va(n);
}
function Lt(t) {
  return Oo() ? (Ao(t), !0) : !1;
}
function ic() {
  const t = /* @__PURE__ */ new Set(), e = (a) => {
    t.delete(a);
  };
  return {
    on: (a) => {
      t.add(a);
      const n = () => e(a);
      return Lt(n), {
        off: n
      };
    },
    off: e,
    trigger: (...a) => Promise.all(Array.from(t).map((n) => n(...a)))
  };
}
function dc(t) {
  let e = !1, a;
  const n = El(!0);
  return (...o) => (e || (a = n.run(() => t(...o)), e = !0), a);
}
function gr(t) {
  let e = 0, a, n;
  const o = () => {
    e -= 1, n && e <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...l) => (e += 1, a || (n = El(!0), a = n.run(() => t(...l))), Lt(o), a);
}
function pt(t) {
  return typeof t == "function" ? t() : s(t);
}
const nt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const uc = (t) => typeof t < "u", cc = (t) => t != null, pc = Object.prototype.toString, fc = (t) => pc.call(t) === "[object Object]", yr = () => {
}, al = /* @__PURE__ */ vc();
function vc() {
  var t, e;
  return nt && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function mc(t) {
  return tt();
}
function br(t, e = 1e4) {
  return Ol((a, n) => {
    let o = pt(t), l;
    const r = () => setTimeout(() => {
      o = pt(t), n();
    }, pt(e));
    return Lt(() => {
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
function hc(t, e) {
  mc() && To(t, e);
}
function Zo(t, e, a = {}) {
  const {
    immediate: n = !0
  } = a, o = A(!1);
  let l = null;
  function r() {
    l && (clearTimeout(l), l = null);
  }
  function i() {
    o.value = !1, r();
  }
  function d(...u) {
    r(), o.value = !0, l = setTimeout(() => {
      o.value = !1, l = null, t(...u);
    }, pt(e));
  }
  return n && (o.value = !0, nt && d()), Lt(i), {
    isPending: Va(o),
    start: d,
    stop: i
  };
}
function gc(t = 1e3, e = {}) {
  const {
    controls: a = !1,
    callback: n
  } = e, o = Zo(
    n ?? yr,
    t,
    e
  ), l = $(() => !o.isPending.value);
  return a ? {
    ready: l,
    ...o
  } : l;
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
    return yr;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const l = [], r = () => {
    l.forEach((c) => c()), l.length = 0;
  }, i = (c, p, _, m) => (c.addEventListener(p, _, m), () => c.removeEventListener(p, _, m)), d = X(
    () => [Re(e), pt(o)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const _ = fc(p) ? { ...p } : p;
      l.push(
        ...a.flatMap((m) => n.map((x) => i(c, m, x, _)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), r();
  };
  return Lt(u), u;
}
function yc(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (e) => e.key === t : Array.isArray(t) ? (e) => t.includes(e.key) : () => !0;
}
function Xo(...t) {
  let e, a, n = {};
  t.length === 3 ? (e = t[0], a = t[1], n = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (e = !0, a = t[0], n = t[1]) : (e = t[0], a = t[1]) : (e = !0, a = t[0]);
  const {
    target: o = Na,
    eventName: l = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, d = yc(e);
  return sa(o, l, (u) => {
    u.repeat && pt(i) || d(u) && a(u);
  }, r);
}
function es() {
  const t = A(!1), e = tt();
  return e && ue(() => {
    t.value = !0;
  }, e), t;
}
function bc(t) {
  const e = es();
  return $(() => (e.value, !!t()));
}
function _c(t, e, a = {}) {
  const { window: n = Na, ...o } = a;
  let l;
  const r = bc(() => n && "MutationObserver" in n), i = () => {
    l && (l.disconnect(), l = void 0);
  }, d = $(() => {
    const _ = pt(t), m = (Array.isArray(_) ? _ : [_]).map(Re).filter(cc);
    return new Set(m);
  }), u = X(
    () => d.value,
    (_) => {
      i(), r.value && _.size && (l = new MutationObserver(e), _.forEach((m) => l.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => l == null ? void 0 : l.takeRecords(), p = () => {
    i(), u();
  };
  return Lt(p), {
    isSupported: r,
    stop: p,
    takeRecords: c
  };
}
function _r(t, e = {}) {
  const {
    immediate: a = !0,
    fpsLimit: n = void 0,
    window: o = Na
  } = e, l = A(!1), r = n ? 1e3 / n : null;
  let i = 0, d = null;
  function u(_) {
    if (!l.value || !o)
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
    !l.value && o && (l.value = !0, i = 0, d = o.requestAnimationFrame(u));
  }
  function p() {
    l.value = !1, d != null && o && (o.cancelAnimationFrame(d), d = null);
  }
  return a && c(), Lt(p), {
    isActive: Va(l),
    pause: p,
    resume: c
  };
}
function wc(t) {
  return JSON.parse(JSON.stringify(t));
}
function pe(t, e, a, n = {}) {
  var o, l, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: _
  } = n, m = tt(), x = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (l = m == null ? void 0 : m.proxy) == null ? void 0 : l.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let h = u;
  e || (e = "modelValue"), h = h || `update:${e.toString()}`;
  const w = (k) => i ? typeof i == "function" ? i(k) : wc(k) : k, C = () => uc(t[e]) ? w(t[e]) : p, S = (k) => {
    _ ? _(k) && x(h, k) : x(h, k);
  };
  if (d) {
    const k = C(), E = A(k);
    let O = !1;
    return X(
      () => t[e],
      (R) => {
        O || (O = !0, E.value = w(R), se(() => O = !1));
      }
    ), X(
      E,
      (R) => {
        !O && (R !== t[e] || c) && S(R);
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
function An(t) {
  return t ? t.flatMap((e) => e.type === Z ? An(e.children) : [e]) : [];
}
function xe() {
  let t = document.activeElement;
  if (t == null)
    return null;
  for (; t != null && t.shadowRoot != null && t.shadowRoot.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
const xc = ["INPUT", "TEXTAREA"];
function wr(t, e, a, n = {}) {
  if (!e || n.enableIgnoredElement && xc.includes(e.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: l = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = !0,
    dir: d = "ltr",
    preventScroll: u = !0,
    focus: c = !1
  } = n, [p, _, m, x, h, w] = [
    t.key === "ArrowRight",
    t.key === "ArrowLeft",
    t.key === "ArrowUp",
    t.key === "ArrowDown",
    t.key === "Home",
    t.key === "End"
  ], C = m || x, S = p || _;
  if (!h && !w && (!C && !S || o === "vertical" && S || o === "horizontal" && C))
    return null;
  const k = a ? Array.from(a.querySelectorAll(l)) : r;
  if (!k.length)
    return null;
  u && t.preventDefault();
  let E = null;
  return S || C ? E = xr(k, e, {
    goForward: C ? x : d === "ltr" ? p : _,
    loop: i
  }) : h ? E = k.at(0) || null : w && (E = k.at(-1) || null), c && (E == null || E.focus()), E;
}
function xr(t, e, a, n = t.length) {
  if (--n === 0)
    return null;
  const o = t.indexOf(e), l = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (l < 0 || l >= t.length))
    return null;
  const r = (l + t.length) % t.length, i = t[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? xr(
    t,
    i,
    a,
    n
  ) : i : null;
}
function eo(t) {
  if (t === null || typeof t != "object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t ? !1 : Symbol.toStringTag in t ? Object.prototype.toString.call(t) === "[object Module]" : !0;
}
function wo(t, e, a = ".", n) {
  if (!eo(e))
    return wo(t, {}, a);
  const o = Object.assign({}, e);
  for (const l in t) {
    if (l === "__proto__" || l === "constructor")
      continue;
    const r = t[l];
    r != null && (Array.isArray(r) && Array.isArray(o[l]) ? o[l] = [...r, ...o[l]] : eo(r) && eo(o[l]) ? o[l] = wo(
      r,
      o[l],
      (a ? `${a}.` : "") + l.toString()
    ) : o[l] = r);
  }
  return o;
}
function $c(t) {
  return (...e) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    e.reduce((a, n) => wo(a, n, ""), {})
  );
}
const Cc = $c(), [Mn, w0] = ne("ConfigProvider");
let kc = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Bc = (t = 21) => {
  let e = "", a = t;
  for (; a--; )
    e += kc[Math.random() * 64 | 0];
  return e;
};
const Dc = gr(() => {
  const t = A(/* @__PURE__ */ new Map()), e = A(), a = $(() => {
    for (const r of t.value.values())
      if (r)
        return !0;
    return !1;
  }), n = Mn({
    scrollBody: A(!0)
  });
  let o = null;
  const l = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = e.value ?? "", al && (o == null || o()), e.value = void 0;
  };
  return X(a, (r, i) => {
    var d;
    if (!nt)
      return;
    if (!r) {
      i && l();
      return;
    }
    e.value === void 0 && (e.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, c = { padding: u, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? Cc({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), al && (o = sa(
      document,
      "touchmove",
      (_) => Sc(_),
      { passive: !1 }
    )), se(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), t;
});
function za(t) {
  const e = Bc(6), a = Dc();
  a.value.set(e, t ?? !1);
  const n = $({
    get: () => a.value.get(e) ?? !1,
    set: (o) => a.value.set(e, o)
  });
  return hc(() => {
    a.value.delete(e);
  }), n;
}
function $r(t) {
  const e = window.getComputedStyle(t);
  if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && t.clientWidth < t.scrollWidth || e.overflowY === "auto" && t.clientHeight < t.scrollHeight)
    return !0;
  {
    const a = t.parentNode;
    return !a || a.tagName === "BODY" ? !1 : $r(a);
  }
}
function Sc(t) {
  const e = t || window.event, a = e.target;
  return a instanceof Element && $r(a) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.cancelable && e.preventDefault(), !1);
}
const Pc = "data-radix-vue-collection-item";
function ua(t, e = Pc) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = A([]);
    function l() {
      const r = Re(n);
      return r ? o.value = Array.from(
        r.querySelectorAll(`[${e}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return Qi(() => {
      o.value = [];
    }), ue(l), Zi(l), X(() => n == null ? void 0 : n.value, l, { immediate: !0 }), Bl(a, o), o;
  }, injectCollection: () => kl(a, A([])) };
}
function Ec(t) {
  const e = A(t);
  function a() {
    return e.value;
  }
  function n(h) {
    e.value = h;
  }
  function o(h, w) {
    return new Je(e.value, w).format(h);
  }
  function l(h, w = !0) {
    return lu(h) && w ? o(Ue(h), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Ue(h), {
      dateStyle: "long"
    });
  }
  function r(h, w = {}) {
    return new Je(e.value, { month: "long", year: "numeric", ...w }).format(h);
  }
  function i(h, w = {}) {
    return new Je(e.value, { month: "long", ...w }).format(h);
  }
  function d() {
    const h = Ll(Vt());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((w) => ({ label: i(Ue(h.set({ month: w }))), value: w }));
  }
  function u(h, w = {}) {
    return new Je(e.value, { year: "numeric", ...w }).format(h);
  }
  function c(h, w) {
    return Uo(h) ? new Je(e.value, {
      ...w,
      timeZone: h.timeZone
    }).formatToParts(Ue(h)) : new Je(e.value, w).formatToParts(Ue(h));
  }
  function p(h, w = "narrow") {
    return new Je(e.value, { weekday: w }).format(h);
  }
  function _(h) {
    var w;
    return ((w = new Je(e.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(h).find((C) => C.type === "dayPeriod")) == null ? void 0 : w.value) === "PM" ? "PM" : "AM";
  }
  const m = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function x(h, w, C = {}) {
    const S = { ...m, ...C }, k = c(h, S).find((E) => E.type === w);
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
    part: x,
    dayPeriod: _,
    selectedDate: l,
    dayOfWeek: p,
    getMonths: d
  };
}
function ot(t) {
  const e = Mn({
    dir: A("ltr")
  });
  return $(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function Nt(t) {
  const e = tt(), a = e == null ? void 0 : e.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${e == null ? void 0 : e.type.__name}`
  ), a == null || a.forEach((o) => {
    n[Gi($l(o))] = (...l) => t(o, ...l);
  }), n;
}
let to = 0;
function ts() {
  be((t) => {
    if (!nt)
      return;
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      e[0] ?? nl()
    ), document.body.insertAdjacentElement(
      "beforeend",
      e[1] ?? nl()
    ), to++, t(() => {
      to === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), to--;
    });
  });
}
function nl() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
function Ua(t) {
  return $(() => {
    var e;
    return pt(t) ? !!((e = Re(t)) != null && e.closest("form")) : !0;
  });
}
function le(t) {
  const e = tt(), a = Object.keys((e == null ? void 0 : e.type.props) ?? {}).reduce((o, l) => {
    const r = (e == null ? void 0 : e.type.props[l]).default;
    return r !== void 0 && (o[l] = r), o;
  }, {}), n = xl(t);
  return $(() => {
    const o = {}, l = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(l).forEach((r) => {
      o[$l(r)] = l[r];
    }), Object.keys({ ...a, ...o }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function ee(t, e) {
  const a = le(t), n = e ? Nt(e) : {};
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
  function l(r) {
    e.value = r, !(r instanceof Element || !r) && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => r.$el
    }), t.exposed = o);
  }
  return { forwardRef: l, currentRef: e, currentElement: a };
}
function Oc(t, e) {
  const a = br(!1, 300), n = A(null), o = ic();
  function l() {
    n.value = null, a.value = !1;
  }
  function r(i, d) {
    const u = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = Ac(c, u.getBoundingClientRect()), _ = Mc(c, p), m = Tc(d.getBoundingClientRect()), x = Rc([..._, ...m]);
    n.value = x, a.value = !0;
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
        const m = c.target, x = { x: c.clientX, y: c.clientY }, h = ((p = t.value) == null ? void 0 : p.contains(m)) || ((_ = e.value) == null ? void 0 : _.contains(m)), w = !Ic(x, n.value), C = !!m.closest("[data-grace-area-trigger]");
        h ? l() : (w || C) && (l(), o.trigger());
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
function Ac(t, e) {
  const a = Math.abs(e.top - t.y), n = Math.abs(e.bottom - t.y), o = Math.abs(e.right - t.x), l = Math.abs(e.left - t.x);
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
function Mc(t, e, a = 5) {
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
function Tc(t) {
  const { top: e, right: a, bottom: n, left: o } = t;
  return [
    { x: o, y: e },
    { x: a, y: e },
    { x: a, y: n },
    { x: o, y: n }
  ];
}
function Ic(t, e) {
  const { x: a, y: n } = t;
  let o = !1;
  for (let l = 0, r = e.length - 1; l < e.length; r = l++) {
    const i = e[l].x, d = e[l].y, u = e[r].x, c = e[r].y;
    d > n != c > n && a < (u - i) * (n - d) / (c - d) + i && (o = !o);
  }
  return o;
}
function Rc(t) {
  const e = t.slice();
  return e.sort((a, n) => a.x < n.x ? -1 : a.x > n.x ? 1 : a.y < n.y ? -1 : a.y > n.y ? 1 : 0), Vc(e);
}
function Vc(t) {
  if (t.length <= 1)
    return t.slice();
  const e = [];
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    for (; e.length >= 2; ) {
      const l = e[e.length - 1], r = e[e.length - 2];
      if ((l.x - r.x) * (o.y - r.y) >= (l.y - r.y) * (o.x - r.x))
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
      const l = a[a.length - 1], r = a[a.length - 2];
      if ((l.x - r.x) * (o.y - r.y) >= (l.y - r.y) * (o.x - r.x))
        a.pop();
      else break;
    }
    a.push(o);
  }
  return a.pop(), e.length === 1 && a.length === 1 && e[0].x === a[0].x && e[0].y === a[0].y ? e : e.concat(a);
}
var Fc = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, Gt = /* @__PURE__ */ new WeakMap(), Xa = /* @__PURE__ */ new WeakMap(), en = {}, ao = 0, Cr = function(t) {
  return t && (t.host || Cr(t.parentNode));
}, Lc = function(t, e) {
  return e.map(function(a) {
    if (t.contains(a))
      return a;
    var n = Cr(a);
    return n && t.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, Nc = function(t, e, a, n) {
  var o = Lc(e, Array.isArray(t) ? t : [t]);
  en[a] || (en[a] = /* @__PURE__ */ new WeakMap());
  var l = en[a], r = [], i = /* @__PURE__ */ new Set(), d = new Set(o), u = function(p) {
    !p || i.has(p) || (i.add(p), u(p.parentNode));
  };
  o.forEach(u);
  var c = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(_) {
      if (i.has(_))
        c(_);
      else
        try {
          var m = _.getAttribute(n), x = m !== null && m !== "false", h = (Gt.get(_) || 0) + 1, w = (l.get(_) || 0) + 1;
          Gt.set(_, h), l.set(_, w), r.push(_), h === 1 && x && Xa.set(_, !0), w === 1 && _.setAttribute(a, "true"), x || _.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", _, C);
        }
    });
  };
  return c(e), i.clear(), ao++, function() {
    r.forEach(function(p) {
      var _ = Gt.get(p) - 1, m = l.get(p) - 1;
      Gt.set(p, _), l.set(p, m), _ || (Xa.has(p) || p.removeAttribute(n), Xa.delete(p)), m || p.removeAttribute(a);
    }), ao--, ao || (Gt = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ new WeakMap(), Xa = /* @__PURE__ */ new WeakMap(), en = {});
  };
}, zc = function(t, e, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), o = Fc(t);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), Nc(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function Ka(t) {
  let e;
  X(() => Re(t), (a) => {
    a ? e = zc(a) : e && e();
  }), Pt(() => {
    e && e();
  });
}
let Uc = 0;
function we(t, e = "radix") {
  const a = Mn({ useId: void 0 });
  return ks.useId ? `${e}-${ks.useId()}` : a.useId ? `${e}-${a.useId()}` : `${e}-${++Uc}`;
}
function kr(t) {
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
      const l = new ResizeObserver((r) => {
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
      return l.observe(o, { box: "border-box" }), () => l.unobserve(o);
    } else
      e.value = void 0;
  }), {
    width: a,
    height: n
  };
}
function Kc(t, e) {
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
const Wc = "data-item-text";
function as(t) {
  const e = br("", 1e3);
  return {
    search: e,
    handleTypeaheadSearch: (a, n) => {
      if (!(t != null && t.value) && !n)
        return;
      e.value = e.value + a;
      const o = (t == null ? void 0 : t.value) ?? n, l = xe(), r = o.map((p) => {
        var _;
        return {
          ref: p,
          textValue: ((_ = (p.querySelector(`[${Wc}]`) ?? p).textContent) == null ? void 0 : _.trim()) ?? ""
        };
      }), i = r.find((p) => p.ref === l), d = r.map((p) => p.textValue), u = jc(d, e.value, i == null ? void 0 : i.textValue), c = r.find((p) => p.textValue === u);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      e.value = "";
    }
  };
}
function Hc(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
function jc(t, e, a) {
  const n = e.length > 1 && Array.from(e).every((i) => i === e[0]) ? e[0] : e, o = a ? t.indexOf(a) : -1;
  let l = Hc(t, Math.max(o, 0));
  n.length === 1 && (l = l.filter((i) => i !== a));
  const r = l.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return r !== a ? r : void 0;
}
function Br() {
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
const ns = g({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(t, { attrs: e, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const l = An(a.default()), r = l.findIndex((c) => c.type !== Dl);
      if (r === -1)
        return l;
      const i = l[r];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? P(e, i.props) : e;
      e.class && (o = i.props) != null && o.class && delete i.props.class;
      const u = Yi(i, d);
      for (const c in d)
        c.startsWith("on") && (u.props || (u.props = {}), u.props[c] = d[c]);
      return l.length === 1 ? u : (l[r] = u, l);
    };
  }
}), F = g({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => Ze(n, e) : n !== "template" ? () => Ze(t.as, e, { default: a.default }) : () => Ze(ns, e, { default: a.default });
  }
});
function ca() {
  const t = A(), e = $(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (n = t.value) == null ? void 0 : n.$el.nextElementSibling : Re(t);
  });
  return {
    primitiveElement: t,
    currentElement: e
  };
}
const [Dr, Gc] = ne("CollapsibleRoot"), Yc = /* @__PURE__ */ g({
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
    const n = t, o = pe(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = pe(n, "disabled");
    return Gc({
      contentId: "",
      disabled: l,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), e({ open: o }), N(), (r, i) => (f(), y(s(F), {
      as: r.as,
      "as-child": n.asChild,
      "data-state": s(o) ? "open" : "closed",
      "data-disabled": s(l) ? "" : void 0
    }, {
      default: v(() => [
        b(r.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), qc = /* @__PURE__ */ g({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    N();
    const a = Dr();
    return (n, o) => {
      var l, r;
      return f(), y(s(F), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": e.asChild,
        "aria-controls": s(a).contentId,
        "aria-expanded": s(a).open.value,
        "data-state": s(a).open.value ? "open" : "closed",
        "data-disabled": (l = s(a).disabled) != null && l.value ? "" : void 0,
        disabled: (r = s(a).disabled) == null ? void 0 : r.value,
        onClick: s(a).onOpenToggle
      }, {
        default: v(() => [
          b(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Jc(t, e) {
  var a;
  const n = A({}), o = A("none"), l = A(t), r = t.value ? "mounted" : "unmounted";
  let i;
  const d = ((a = e.value) == null ? void 0 : a.ownerDocument.defaultView) ?? Na, { state: u, dispatch: c } = Kc(r, {
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
  }), p = (w) => {
    var C;
    if (nt) {
      const S = new CustomEvent(w, { bubbles: !1, cancelable: !1 });
      (C = e.value) == null || C.dispatchEvent(S);
    }
  };
  X(
    t,
    async (w, C) => {
      var S;
      const k = C !== w;
      if (await se(), k) {
        const E = o.value, O = tn(e.value);
        w ? (c("MOUNT"), p("enter"), O === "none" && p("after-enter")) : O === "none" || ((S = n.value) == null ? void 0 : S.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : C && E !== O ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const _ = (w) => {
    const C = tn(e.value), S = C.includes(
      w.animationName
    ), k = u.value === "mounted" ? "enter" : "leave";
    if (w.target === e.value && S && (p(`after-${k}`), c("ANIMATION_END"), !l.value)) {
      const E = e.value.style.animationFillMode;
      e.value.style.animationFillMode = "forwards", i = d == null ? void 0 : d.setTimeout(() => {
        var O;
        ((O = e.value) == null ? void 0 : O.style.animationFillMode) === "forwards" && (e.value.style.animationFillMode = E);
      });
    }
    w.target === e.value && C === "none" && c("ANIMATION_END");
  }, m = (w) => {
    w.target === e.value && (o.value = tn(e.value));
  }, x = X(
    e,
    (w, C) => {
      w ? (n.value = getComputedStyle(w), w.addEventListener("animationstart", m), w.addEventListener("animationcancel", _), w.addEventListener("animationend", _)) : (c("ANIMATION_END"), d == null || d.clearTimeout(i), C == null || C.removeEventListener("animationstart", m), C == null || C.removeEventListener("animationcancel", _), C == null || C.removeEventListener("animationend", _));
    },
    { immediate: !0 }
  ), h = X(u, () => {
    const w = tn(e.value);
    o.value = u.value === "mounted" ? w : "none";
  });
  return Pt(() => {
    x(), h();
  }), {
    isPresent: $(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function tn(t) {
  return t && getComputedStyle(t).animationName || "none";
}
const Me = g({
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
    const { present: o, forceMount: l } = fe(t), r = A(), { isPresent: i } = Jc(o, r);
    a({ present: i });
    let d = e.default({ present: i });
    d = An(d || []);
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
    return () => l.value || o.value || i.value ? Ze(e.default({ present: i })[0], {
      ref: (c) => {
        const p = Re(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
}), Qc = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Dr();
    a.contentId || (a.contentId = we(void 0, "radix-vue-collapsible-content"));
    const n = A(), { forwardRef: o, currentElement: l } = N(), r = A(0), i = A(0), d = $(() => a.open.value), u = A(d.value), c = A();
    return X(
      () => {
        var p;
        return [d.value, (p = n.value) == null ? void 0 : p.present];
      },
      async () => {
        await se();
        const p = l.value;
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
    }), (p, _) => (f(), y(s(Me), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || s(a).open.value,
      "force-mount": !0
    }, {
      default: v(() => {
        var m, x;
        return [
          D(s(F), P(p.$attrs, {
            id: s(a).contentId,
            ref: s(o),
            "as-child": e.asChild,
            as: p.as,
            "data-state": s(a).open.value ? "open" : "closed",
            "data-disabled": (m = s(a).disabled) != null && m.value ? "" : void 0,
            hidden: !((x = n.value) != null && x.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${r.value}px`
            }
          }), {
            default: v(() => {
              var h;
              return [
                (h = n.value) != null && h.present ? b(p.$slots, "default", { key: 0 }) : J("", !0)
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
function Sr({ type: t, defaultValue: e, modelValue: a }) {
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
    const l = Array.isArray(a) || Array.isArray(e), r = a !== void 0 ? "modelValue" : "defaultValue", i = r === "modelValue" ? typeof a : typeof e;
    if (t === "single" && l)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "multiple";
    if (t === "multiple" && !l)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "single";
  }
  return o ? Array.isArray(n) ? "multiple" : "single" : t;
}
function Zc({ type: t, defaultValue: e, modelValue: a }) {
  return t || Sr({ type: t, defaultValue: e, modelValue: a });
}
function Xc({ type: t, defaultValue: e }) {
  return e !== void 0 ? e : t === "single" ? void 0 : [];
}
function ep(t, e) {
  const a = A(Zc(t)), n = pe(t, "modelValue", e, {
    defaultValue: Xc(t),
    passive: t.modelValue === void 0,
    deep: !0
  });
  X(
    () => [t.type, t.modelValue, t.defaultValue],
    () => {
      const r = Sr(t);
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
  const l = $(() => a.value === "single");
  return {
    modelValue: n,
    type: a,
    changeModelValue: o,
    isSingle: l
  };
}
const [Tn, tp] = ne("AccordionRoot"), ap = /* @__PURE__ */ g({
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
    const a = t, n = e, { dir: o, disabled: l } = fe(a), r = ot(o), { modelValue: i, changeModelValue: d, isSingle: u } = ep(a, n), { forwardRef: c, currentElement: p } = N();
    return tp({
      disabled: l,
      direction: r,
      orientation: a.orientation,
      parentElement: p,
      isSingle: u,
      collapsible: a.collapsible,
      modelValue: i,
      changeModelValue: d
    }), (_, m) => (f(), y(s(F), {
      ref: s(c),
      "as-child": _.asChild,
      as: _.as
    }, {
      default: v(() => [
        b(_.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [os, np] = ne("AccordionItem"), op = /* @__PURE__ */ g({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t, { expose: e }) {
    const a = t, n = Tn(), o = $(
      () => n.isSingle.value ? a.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(a.value)
    ), l = $(() => n.disabled.value || a.disabled), r = $(() => l.value ? "" : void 0), i = $(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    e({ open: o, dataDisabled: r });
    const { currentRef: d, currentElement: u } = N();
    np({
      open: o,
      dataState: i,
      disabled: l,
      dataDisabled: r,
      triggerId: "",
      currentRef: d,
      currentElement: u,
      value: $(() => a.value)
    });
    function c(p) {
      var _;
      const m = p.target;
      if (Array.from(((_ = n.parentElement.value) == null ? void 0 : _.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((x) => x === m) === -1)
        return null;
      wr(
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
    return (p, _) => (f(), y(s(Yc), {
      "data-orientation": s(n).orientation,
      "data-disabled": r.value,
      "data-state": i.value,
      disabled: l.value,
      open: o.value,
      as: a.as,
      "as-child": a.asChild,
      onKeydown: Ke(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: v(() => [
        b(p.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), sp = /* @__PURE__ */ g({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Tn(), n = os();
    return N(), (o, l) => (f(), y(s(Qc), {
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
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), lp = /* @__PURE__ */ g({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(t) {
    const e = t, a = Tn(), n = os();
    return N(), (o, l) => (f(), y(s(F), {
      as: e.as,
      "as-child": e.asChild,
      "data-orientation": s(a).orientation,
      "data-state": s(n).dataState.value,
      "data-disabled": s(n).dataDisabled.value
    }, {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), rp = /* @__PURE__ */ g({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Tn(), n = os();
    n.triggerId || (n.triggerId = we(void 0, "radix-vue-accordion-trigger"));
    function o() {
      const l = a.isSingle.value && n.open.value && !a.collapsible;
      n.disabled.value || l || a.changeModelValue(n.value.value);
    }
    return (l, r) => (f(), y(s(qc), {
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
      default: v(() => [
        b(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [st, ip] = ne("DialogRoot"), Pr = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = pe(a, "open", e, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = A(), l = A(), { modal: r } = fe(a);
    return ip({
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
    }), (i, d) => b(i.$slots, "default", { open: s(n) });
  }
}), Er = /* @__PURE__ */ g({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = st(), { forwardRef: n, currentElement: o } = N();
    return a.contentId || (a.contentId = we(void 0, "radix-vue-dialog-content")), ue(() => {
      a.triggerElement.value = o.value;
    }), (l, r) => (f(), y(s(F), P(e, {
      ref: s(n),
      type: l.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(a).open.value || !1,
      "aria-controls": s(a).open.value ? s(a).contentId : void 0,
      "data-state": s(a).open.value ? "open" : "closed",
      onClick: s(a).onOpenToggle
    }), {
      default: v(() => [
        b(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Wa = /* @__PURE__ */ g({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = es();
    return (a, n) => s(e) || a.forceMount ? (f(), y(Bn, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      b(a.$slots, "default")
    ], 8, ["to", "disabled"])) : J("", !0);
  }
}), ss = /* @__PURE__ */ g({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Wa), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dp = "dismissableLayer.pointerDownOutside", up = "dismissableLayer.focusOutside";
function Or(t, e) {
  const a = e.closest(
    "[data-dismissable-layer]"
  ), n = t.dataset.dismissableLayer === "" ? t : t.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    t.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function cp(t, e) {
  var a;
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = A(!1), l = A(() => {
  });
  return be((r) => {
    if (!nt)
      return;
    const i = async (u) => {
      const c = u.target;
      if (e != null && e.value) {
        if (Or(e.value, c)) {
          o.value = !1;
          return;
        }
        if (u.target && !o.value) {
          let p = function() {
            Qo(
              dp,
              t,
              _
            );
          };
          const _ = { originalEvent: u };
          u.pointerType === "touch" ? (n.removeEventListener("click", l.value), l.value = p, n.addEventListener("click", l.value, {
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
function pp(t, e) {
  var a;
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = A(!1);
  return be((l) => {
    if (!nt)
      return;
    const r = async (i) => {
      e != null && e.value && (await se(), !(!e.value || Or(e.value, i.target)) && i.target && !o.value && Qo(
        up,
        t,
        { originalEvent: i }
      ));
    };
    n.addEventListener("focusin", r), l(() => n.removeEventListener("focusin", r));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const Ne = Sl({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), pa = /* @__PURE__ */ g({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: l } = N(), r = $(
      () => {
        var x;
        return ((x = l.value) == null ? void 0 : x.ownerDocument) ?? globalThis.document;
      }
    ), i = $(() => Ne.layersRoot), d = $(() => l.value ? Array.from(i.value).indexOf(l.value) : -1), u = $(() => Ne.layersWithOutsidePointerEventsDisabled.size > 0), c = $(() => {
      const x = Array.from(i.value), [h] = [...Ne.layersWithOutsidePointerEventsDisabled].slice(-1), w = x.indexOf(h);
      return d.value >= w;
    }), p = cp(async (x) => {
      const h = [...Ne.branches].some(
        (w) => w == null ? void 0 : w.contains(x.target)
      );
      !c.value || h || (n("pointerDownOutside", x), n("interactOutside", x), await se(), x.defaultPrevented || n("dismiss"));
    }, l), _ = pp((x) => {
      [...Ne.branches].some(
        (h) => h == null ? void 0 : h.contains(x.target)
      ) || (n("focusOutside", x), n("interactOutside", x), x.defaultPrevented || n("dismiss"));
    }, l);
    Xo("Escape", (x) => {
      d.value === i.value.size - 1 && (n("escapeKeyDown", x), x.defaultPrevented || n("dismiss"));
    });
    let m;
    return be((x) => {
      l.value && (a.disableOutsidePointerEvents && (Ne.layersWithOutsidePointerEventsDisabled.size === 0 && (m = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), Ne.layersWithOutsidePointerEventsDisabled.add(l.value)), i.value.add(l.value), x(() => {
        a.disableOutsidePointerEvents && Ne.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = m);
      }));
    }), be((x) => {
      x(() => {
        l.value && (i.value.delete(l.value), Ne.layersWithOutsidePointerEventsDisabled.delete(l.value));
      });
    }), (x, h) => (f(), y(s(F), {
      ref: s(o),
      "as-child": x.asChild,
      as: x.as,
      "data-dismissable-layer": "",
      style: St({
        pointerEvents: u.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(_).onFocusCapture,
      onBlurCapture: s(_).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: v(() => [
        b(x.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), fp = /* @__PURE__ */ g({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = N();
    return ue(() => {
      Ne.branches.add(n.value);
    }), Pt(() => {
      Ne.branches.delete(n.value);
    }), (o, l) => (f(), y(s(F), P({ ref: s(a) }, e), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), no = "focusScope.autoFocusOnMount", oo = "focusScope.autoFocusOnUnmount", ol = { bubbles: !1, cancelable: !0 };
function fn(t, { select: e = !1 } = {}) {
  const a = xe();
  for (const n of t)
    if (wt(n, { select: e }), xe() !== a)
      return !0;
}
function vp(t) {
  const e = ls(t), a = sl(e, t), n = sl(e.reverse(), t);
  return [a, n];
}
function ls(t) {
  const e = [], a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) e.push(a.currentNode);
  return e;
}
function sl(t, e) {
  for (const a of t)
    if (!mp(a, { upTo: e }))
      return a;
}
function mp(t, { upTo: e }) {
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
function hp(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function wt(t, { select: e = !1 } = {}) {
  if (t && t.focus) {
    const a = xe();
    t.focus({ preventScroll: !0 }), t !== a && hp(t) && e && t.select();
  }
}
const gp = dc(() => A([]));
function yp() {
  const t = gp();
  return {
    add(e) {
      const a = t.value[0];
      e !== a && (a == null || a.pause()), t.value = ll(t.value, e), t.value.unshift(e);
    },
    remove(e) {
      var a;
      t.value = ll(t.value, e), (a = t.value[0]) == null || a.resume();
    }
  };
}
function ll(t, e) {
  const a = [...t], n = a.indexOf(e);
  return n !== -1 && a.splice(n, 1), a;
}
function bp(t) {
  return t.filter((e) => e.tagName !== "A");
}
const In = /* @__PURE__ */ g({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(t, { emit: e }) {
    const a = t, n = e, { currentRef: o, currentElement: l } = N(), r = A(null), i = yp(), d = Sl({
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
      const p = l.value;
      if (!a.trapped)
        return;
      function _(w) {
        if (d.paused || !p)
          return;
        const C = w.target;
        p.contains(C) ? r.value = C : wt(r.value, { select: !0 });
      }
      function m(w) {
        if (d.paused || !p)
          return;
        const C = w.relatedTarget;
        C !== null && (p.contains(C) || wt(r.value, { select: !0 }));
      }
      function x(w) {
        p.contains(r.value) || wt(p);
      }
      document.addEventListener("focusin", _), document.addEventListener("focusout", m);
      const h = new MutationObserver(x);
      p && h.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", _), document.removeEventListener("focusout", m), h.disconnect();
      });
    }), be(async (c) => {
      const p = l.value;
      if (await se(), !p)
        return;
      i.add(d);
      const _ = xe();
      if (!p.contains(_)) {
        const m = new CustomEvent(no, ol);
        p.addEventListener(no, (x) => n("mountAutoFocus", x)), p.dispatchEvent(m), m.defaultPrevented || (fn(bp(ls(p)), {
          select: !0
        }), xe() === _ && wt(p));
      }
      c(() => {
        p.removeEventListener(no, (h) => n("mountAutoFocus", h));
        const m = new CustomEvent(oo, ol), x = (h) => {
          n("unmountAutoFocus", h);
        };
        p.addEventListener(oo, x), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || wt(_ ?? document.body, { select: !0 }), p.removeEventListener(oo, x), i.remove(d);
        }, 0);
      });
    });
    function u(c) {
      if (!a.loop && !a.trapped || d.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, _ = xe();
      if (p && _) {
        const m = c.currentTarget, [x, h] = vp(m);
        x && h ? !c.shiftKey && _ === h ? (c.preventDefault(), a.loop && wt(x, { select: !0 })) : c.shiftKey && _ === x && (c.preventDefault(), a.loop && wt(h, { select: !0 })) : _ === m && c.preventDefault();
      }
    }
    return (c, p) => (f(), y(s(F), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: u
    }, {
      default: v(() => [
        b(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), _p = "menu.itemSelect", xo = ["Enter", " "], wp = ["ArrowDown", "PageUp", "Home"], Ar = ["ArrowUp", "PageDown", "End"], xp = [...wp, ...Ar], $p = {
  ltr: [...xo, "ArrowRight"],
  rtl: [...xo, "ArrowLeft"]
}, Cp = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function rs(t) {
  return t ? "open" : "closed";
}
function $n(t) {
  return t === "indeterminate";
}
function is(t) {
  return $n(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
function $o(t) {
  const e = xe();
  for (const a of t)
    if (a === e || (a.focus(), xe() !== e))
      return;
}
function kp(t, e) {
  const { x: a, y: n } = t;
  let o = !1;
  for (let l = 0, r = e.length - 1; l < e.length; r = l++) {
    const i = e[l].x, d = e[l].y, u = e[r].x, c = e[r].y;
    d > n != c > n && a < (u - i) * (n - d) / (c - d) + i && (o = !o);
  }
  return o;
}
function Bp(t, e) {
  if (!e)
    return !1;
  const a = { x: t.clientX, y: t.clientY };
  return kp(a, e);
}
function Ta(t) {
  return t.pointerType === "mouse";
}
const Dp = "DialogTitle", Sp = "DialogContent";
function Pp({
  titleName: t = Dp,
  contentName: e = Sp,
  componentLink: a = "dialog.html#title",
  titleId: n,
  descriptionId: o,
  contentElement: l
}) {
  const r = `Warning: \`${e}\` requires a \`${t}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${a}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${e}.`;
  ue(() => {
    var d;
    document.getElementById(n) || console.warn(r);
    const u = (d = l.value) == null ? void 0 : d.getAttribute("aria-describedby");
    o && u && (document.getElementById(o) || console.warn(i));
  });
}
const Mr = /* @__PURE__ */ g({
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
    const a = t, n = e, o = st(), { forwardRef: l, currentElement: r } = N();
    return o.titleId || (o.titleId = we(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = we(void 0, "radix-vue-dialog-description")), ue(() => {
      o.contentElement = r, xe() !== document.body && (o.triggerElement.value = xe());
    }), process.env.NODE_ENV !== "production" && Pp({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: r
    }), (i, d) => (f(), y(s(In), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: v(() => [
        D(s(pa), P({
          id: s(o).contentId,
          ref: s(l),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(o).descriptionId,
          "aria-labelledby": s(o).titleId,
          "data-state": s(rs)(s(o).open.value)
        }, i.$attrs, {
          onDismiss: d[0] || (d[0] = (u) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[2] || (d[2] = (u) => n("focusOutside", u)),
          onInteractOutside: d[3] || (d[3] = (u) => n("interactOutside", u)),
          onPointerDownOutside: d[4] || (d[4] = (u) => n("pointerDownOutside", u))
        }), {
          default: v(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Ep = /* @__PURE__ */ g({
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
    const a = t, n = e, o = st(), l = Nt(n), { forwardRef: r, currentElement: i } = N();
    return Ka(i), (d, u) => (f(), y(Mr, P({ ...a, ...s(l) }, {
      ref: s(r),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = s(o).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: u[1] || (u[1] = (c) => {
        const p = c.detail.originalEvent, _ = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || _) && c.preventDefault();
      }),
      onFocusOutside: u[2] || (u[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: v(() => [
        b(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Op = /* @__PURE__ */ g({
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
    const a = t, n = Nt(e);
    N();
    const o = st(), l = A(!1), r = A(!1);
    return (i, d) => (f(), y(Mr, P({ ...a, ...s(n) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (u) => {
        var c;
        u.defaultPrevented || (l.value || (c = s(o).triggerElement.value) == null || c.focus(), u.preventDefault()), l.value = !1, r.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (u) => {
        var c;
        u.defaultPrevented || (l.value = !0, u.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const p = u.target;
        (c = s(o).triggerElement.value) != null && c.contains(p) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && r.value && u.preventDefault();
      })
    }), {
      default: v(() => [
        b(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ds = /* @__PURE__ */ g({
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
    const a = t, n = e, o = st(), l = Nt(n), { forwardRef: r } = N();
    return (i, d) => (f(), y(s(Me), {
      present: i.forceMount || s(o).open.value
    }, {
      default: v(() => [
        s(o).modal.value ? (f(), y(Ep, P({
          key: 0,
          ref: s(r)
        }, { ...a, ...s(l), ...i.$attrs }), {
          default: v(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), y(Op, P({
          key: 1,
          ref: s(r)
        }, { ...a, ...s(l), ...i.$attrs }), {
          default: v(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ap = /* @__PURE__ */ g({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = st();
    return za(!0), N(), (a, n) => (f(), y(s(F), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": s(e).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), us = /* @__PURE__ */ g({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = st(), { forwardRef: a } = N();
    return (n, o) => {
      var l;
      return (l = s(e)) != null && l.modal.value ? (f(), y(s(Me), {
        key: 0,
        present: n.forceMount || s(e).open.value
      }, {
        default: v(() => [
          D(Ap, P(n.$attrs, {
            ref: s(a),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: v(() => [
              b(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : J("", !0);
    };
  }
}), Ha = /* @__PURE__ */ g({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    N();
    const a = st();
    return (n, o) => (f(), y(s(F), P(e, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (l) => s(a).onOpenChange(!1))
    }), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Tr = /* @__PURE__ */ g({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(t) {
    const e = t, a = st();
    return N(), (n, o) => (f(), y(s(F), P(e, {
      id: s(a).titleId
    }), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ir = /* @__PURE__ */ g({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(t) {
    const e = t;
    N();
    const a = st();
    return (n, o) => (f(), y(s(F), P(e, {
      id: s(a).descriptionId
    }), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function Mp(t) {
  function e(n) {
    return Array.isArray(t.date.value) ? t.date.value.some((o) => Be(o, n)) : t.date.value ? Be(t.date.value, n) : !1;
  }
  const a = $(
    () => {
      var n, o, l, r;
      if (Array.isArray(t.date.value)) {
        if (!t.date.value.length)
          return !1;
        for (const i of t.date.value)
          if ((n = t.isDateDisabled) != null && n.call(t, i) || (o = t.isDateUnavailable) != null && o.call(t, i))
            return !0;
      } else {
        if (!t.date.value)
          return !1;
        if ((l = t.isDateDisabled) != null && l.call(t, t.date.value) || (r = t.isDateUnavailable) != null && r.call(t, t.date.value))
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
function Tp(t, e) {
  const a = e(t), n = a.compare(t), o = {};
  return n >= 7 && (o.day = 1), n >= Oa(t) && (o.month = 1), a.set({ ...o });
}
function Ip(t, e) {
  const a = e(t), n = t.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= Oa(t) && (o.month = 13), a.set({ ...o });
}
function Rp(t, e) {
  return e(t);
}
function Vp(t, e) {
  return e(t);
}
function Rr(t) {
  const e = Ec(t.locale.value), a = $(() => {
    const h = {
      calendar: t.placeholder.value.calendar.identifier
    };
    return t.placeholder.value.calendar.identifier === "gregory" && t.placeholder.value.era === "BC" && (h.era = "short"), h;
  }), n = A(Ot({
    dateObj: t.placeholder.value,
    weekStartsOn: t.weekStartsOn.value,
    locale: t.locale.value,
    fixedWeeks: t.fixedWeeks.value,
    numberOfMonths: t.numberOfMonths.value
  })), o = $(() => n.value.map((h) => h.value));
  function l(h) {
    return !o.value.some((w) => Ds(h, w));
  }
  const r = (h = "month", w) => {
    if (!t.maxValue.value || !n.value.length)
      return !1;
    if (t.disabled.value)
      return !0;
    const C = n.value[n.value.length - 1].value;
    if (w || t.nextPage.value) {
      const k = Tp(C, w || t.nextPage.value);
      return Da(k, t.maxValue.value);
    }
    if (h === "year") {
      const k = C.add({ years: 1 }).set({ day: 1, month: 1 });
      return Da(k, t.maxValue.value);
    }
    const S = C.add({ months: 1 }).set({ day: 1 });
    return Da(S, t.maxValue.value);
  }, i = (h = "month", w) => {
    if (!t.minValue.value || !n.value.length)
      return !1;
    if (t.disabled.value)
      return !0;
    const C = n.value[0].value;
    if (w || t.prevPage.value) {
      const k = Ip(C, w || t.prevPage.value);
      return Ct(k, t.minValue.value);
    }
    if (h === "year") {
      const k = C.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return Ct(k, t.minValue.value);
    }
    const S = C.subtract({ months: 1 }).set({ day: 35 });
    return Ct(S, t.minValue.value);
  };
  function d(h) {
    var w;
    return !!((w = t.isDateDisabled) != null && w.call(t, h) || t.disabled.value || t.maxValue.value && Da(h, t.maxValue.value) || t.minValue.value && Ct(h, t.minValue.value));
  }
  const u = (h) => {
    var w;
    return !!((w = t.isDateUnavailable) != null && w.call(t, h));
  }, c = $(() => n.value.length ? n.value[0].rows[0].map((h) => e.dayOfWeek(Ue(h), t.weekdayFormat.value)) : []), p = (h = "month", w) => {
    const C = n.value[0].value;
    if (w || t.nextPage.value) {
      const E = Rp(C, w || t.nextPage.value), O = Ot({
        dateObj: E,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = O;
      const R = {};
      if (!w) {
        const M = O[0].value.compare(C);
        M >= Oa(C) && (R.day = 1), M >= 365 && (R.month = 1);
      }
      t.placeholder.value = O[0].value.set({ ...R });
      return;
    }
    const S = h === "month" ? C.add({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : C.add({ years: 1 }), k = Ot({
      dateObj: S,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    });
    n.value = k, t.placeholder.value = k[0].value.set({ day: 1 });
  }, _ = (h = "month", w) => {
    const C = n.value[0].value;
    if (w || t.prevPage.value) {
      const E = Vp(C, w || t.prevPage.value), O = Ot({
        dateObj: E,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = O;
      const R = {};
      if (!w) {
        const M = C.compare(O[0].value);
        M >= Oa(C) && (R.day = 1), M >= 365 && (R.month = 1);
      }
      t.placeholder.value = O[0].value.set({ ...R });
      return;
    }
    const S = h === "month" ? C.subtract({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : C.subtract({ years: 1 }), k = Ot({
      dateObj: S,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    });
    n.value = k, t.placeholder.value = k[0].value.set({ day: 1 });
  };
  X(t.placeholder, (h) => {
    o.value.some((w) => Ds(w, h)) || (n.value = Ot({
      dateObj: h,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    }));
  }), X([t.locale, t.weekStartsOn, t.fixedWeeks, t.numberOfMonths], () => {
    n.value = Ot({
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
      return `${e.fullMonthAndYear(Ue(O), a.value)}`;
    }
    const h = Ue(n.value[0].value), w = Ue(n.value[n.value.length - 1].value), C = e.fullMonth(h, a.value), S = e.fullMonth(w, a.value), k = e.fullYear(h, a.value), E = e.fullYear(w, a.value);
    return k === E ? `${C} - ${S} ${E}` : `${C} ${k} - ${S} ${E}`;
  }), x = $(() => `${t.calendarLabel.value ?? "Event Date"}, ${m.value}`);
  return {
    isDateDisabled: d,
    isDateUnavailable: u,
    isNextButtonDisabled: r,
    isPrevButtonDisabled: i,
    grid: n,
    weekdays: c,
    visibleView: o,
    isOutsideVisibleView: l,
    formatter: e,
    nextPage: p,
    prevPage: _,
    headingValue: m,
    fullCalendarLabel: x
  };
}
const Fp = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Lp = {
  role: "heading",
  "aria-level": "2"
}, [fa, Np] = ne("CalendarRoot"), zp = /* @__PURE__ */ g({
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
      disabled: l,
      readonly: r,
      initialFocus: i,
      pagedNavigation: d,
      weekStartsOn: u,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: _,
      minValue: m,
      maxValue: x,
      numberOfMonths: h,
      preventDeselect: w,
      isDateDisabled: C,
      isDateUnavailable: S,
      calendarLabel: k,
      defaultValue: E,
      nextPage: O,
      prevPage: R,
      dir: M
    } = fe(a), { primitiveElement: U, currentElement: z } = ca(), B = ot(M), I = pe(a, "modelValue", n, {
      defaultValue: E.value,
      passive: a.modelValue === void 0
    }), V = mr({
      defaultPlaceholder: a.placeholder,
      defaultValue: I.value,
      locale: a.locale
    }), Y = pe(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? V.copy(),
      passive: a.placeholder === void 0
    });
    function G(ie) {
      Y.value = ie.copy();
    }
    const {
      fullCalendarLabel: ae,
      headingValue: ce,
      isDateDisabled: he,
      isDateUnavailable: ye,
      isNextButtonDisabled: j,
      isPrevButtonDisabled: oe,
      weekdays: de,
      isOutsideVisibleView: Ve,
      nextPage: Ye,
      prevPage: mt,
      formatter: ht,
      grid: wa
    } = Rr({
      locale: o,
      placeholder: Y,
      weekStartsOn: u,
      fixedWeeks: p,
      numberOfMonths: h,
      minValue: m,
      maxValue: x,
      disabled: l,
      weekdayFormat: c,
      pagedNavigation: d,
      isDateDisabled: C.value,
      isDateUnavailable: S.value,
      calendarLabel: k,
      nextPage: O,
      prevPage: R
    }), {
      isInvalid: Te,
      isDateSelected: Pe
    } = Mp({
      date: I,
      isDateDisabled: he,
      isDateUnavailable: ye
    });
    X(I, (ie) => {
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
          else if (!w.value) {
            const De = I.value.filter((lt) => !Be(lt, ie));
            if (!De.length) {
              Y.value = ie.copy(), I.value = void 0;
              return;
            }
            I.value = De.map((lt) => lt.copy());
          }
        }
      } else {
        if (!I.value) {
          I.value = ie.copy();
          return;
        }
        !w.value && Qe(I.value, ie) ? (Y.value = ie.copy(), I.value = void 0) : I.value = ie.copy();
      }
    }
    return ue(() => {
      i.value && hr(z.value);
    }), Np({
      isDateUnavailable: ye,
      dir: B,
      isDateDisabled: he,
      locale: o,
      formatter: ht,
      modelValue: I,
      placeholder: Y,
      disabled: l,
      initialFocus: i,
      pagedNavigation: d,
      weekStartsOn: u,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: _,
      numberOfMonths: h,
      readonly: r,
      preventDeselect: w,
      fullCalendarLabel: ae,
      headingValue: ce,
      isInvalid: Te,
      isDateSelected: Pe,
      isNextButtonDisabled: j,
      isPrevButtonDisabled: oe,
      isOutsideVisibleView: Ve,
      nextPage: Ye,
      prevPage: mt,
      parentElement: z,
      onPlaceholderChange: G,
      onDateChange: qe
    }), (ie, De) => (f(), y(s(F), {
      ref_key: "primitiveElement",
      ref: U,
      as: ie.as,
      "as-child": ie.asChild,
      role: "application",
      "aria-label": s(ae),
      "data-readonly": s(r) ? "" : void 0,
      "data-disabled": s(l) ? "" : void 0,
      "data-invalid": s(Te) ? "" : void 0,
      dir: s(B)
    }, {
      default: v(() => [
        b(ie.$slots, "default", {
          date: s(Y),
          grid: s(wa),
          weekDays: s(de),
          weekStartsOn: s(u),
          locale: s(o),
          fixedWeeks: s(p)
        }),
        re("div", Fp, [
          re("div", Lp, Q(s(ae)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), Up = /* @__PURE__ */ g({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kp = /* @__PURE__ */ g({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = fa();
    return (n, o) => (f(), y(s(F), P(e, {
      "data-disabled": s(a).disabled.value ? "" : void 0
    }), {
      default: v(() => [
        b(n.$slots, "default", {
          headingValue: s(a).headingValue.value
        }, () => [
          q(Q(s(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Wp = /* @__PURE__ */ g({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(t) {
    const e = t, a = fa(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
    return (l, r) => (f(), y(s(F), P(e, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: v(() => [
        b(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Hp = /* @__PURE__ */ g({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(t) {
    const e = fa();
    return (a, n) => {
      var o, l;
      return f(), y(s(F), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": s(e).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": s(e).isDateDisabled(a.date) || ((l = (o = s(e)).isDateUnavailable) == null ? void 0 : l.call(o, a.date)),
        "data-disabled": s(e).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: v(() => [
          b(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), jp = /* @__PURE__ */ g({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gp = /* @__PURE__ */ g({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = $(() => n.disabled.value || n.isNextButtonDisabled(e.step, e.nextPage)), n = fa();
    return (o, l) => (f(), y(s(F), {
      as: e.as,
      "as-child": e.asChild,
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (r) => s(n).nextPage(e.step, e.nextPage))
    }, {
      default: v(() => [
        b(o.$slots, "default", {}, () => [
          q("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Yp = /* @__PURE__ */ g({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = $(() => n.disabled.value || n.isPrevButtonDisabled(e.step, e.prevPage)), n = fa();
    return (o, l) => (f(), y(s(F), {
      "aria-label": "Previous page",
      as: e.as,
      "as-child": e.asChild,
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (r) => s(n).prevPage(e.step, e.prevPage))
    }, {
      default: v(() => [
        b(o.$slots, "default", {}, () => [
          q("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), qp = /* @__PURE__ */ g({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), P(e, { "aria-hidden": "true" }), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jp = /* @__PURE__ */ g({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qp = /* @__PURE__ */ g({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zp = /* @__PURE__ */ g({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Br(), n = fa(), { primitiveElement: o, currentElement: l } = ca(), r = $(() => e.day.day.toLocaleString(n.locale.value)), i = $(() => n.formatter.custom(Ue(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), d = $(() => n.isDateDisabled(e.day)), u = $(
      () => {
        var k;
        return (k = n.isDateUnavailable) == null ? void 0 : k.call(n, e.day);
      }
    ), c = $(() => Vl(e.day, Vt())), p = $(() => !Rl(e.day, e.month)), _ = $(
      () => n.isOutsideVisibleView(e.day)
    ), m = $(() => !n.disabled.value && Be(e.day, n.placeholder.value)), x = $(() => n.isDateSelected(e.day)), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function w(k) {
      var E;
      n.readonly.value || n.isDateDisabled(k) || (E = n.isDateUnavailable) != null && E.call(n, k) || n.onDateChange(k);
    }
    function C() {
      w(e.day);
    }
    function S(k) {
      k.preventDefault(), k.stopPropagation();
      const E = n.parentElement.value, O = E ? Array.from(E.querySelectorAll(h)) : [];
      let R = O.indexOf(l.value);
      const M = 7, U = n.dir.value === "rtl" ? -1 : 1;
      switch (k.code) {
        case a.ARROW_RIGHT:
          R += U;
          break;
        case a.ARROW_LEFT:
          R -= U;
          break;
        case a.ARROW_UP:
          R -= M;
          break;
        case a.ARROW_DOWN:
          R += M;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          w(e.day);
          return;
        default:
          return;
      }
      if (R >= 0 && R < O.length) {
        O[R].focus();
        return;
      }
      if (R < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), se(() => {
          const z = E ? Array.from(E.querySelectorAll(h)) : [];
          z[z.length - Math.abs(R)].focus();
        });
        return;
      }
      if (R >= O.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), se(() => {
          (E ? Array.from(E.querySelectorAll(h)) : [])[R - O.length].focus();
        });
      }
    }
    return (k, E) => (f(), y(s(F), P({
      ref_key: "primitiveElement",
      ref: o
    }, e, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": p.value || d.value || u.value ? !0 : void 0,
      "data-selected": x.value ? !0 : void 0,
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
        Ke(S, ["up", "down", "left", "right", "space", "enter"]),
        E[0] || (E[0] = Ke(Ce(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: v(() => [
        b(k.$slots, "default", { dayValue: r.value }, () => [
          q(Q(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Cn(t) {
  return t === "indeterminate";
}
function Vr(t) {
  return Cn(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
const Xp = ["value", "checked", "name", "disabled", "required"], [ef, tf] = ne("CheckboxRoot"), af = /* @__PURE__ */ g({
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
    const a = t, n = e, { disabled: o } = fe(a), l = pe(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    }), { forwardRef: r, currentElement: i } = N(), d = Ua(i), u = $(() => {
      var c;
      return a.id && i.value ? (c = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return tf({
      disabled: o,
      state: l
    }), (c, p) => (f(), L(Z, null, [
      D(s(F), P(c.$attrs, {
        id: c.id,
        ref: s(r),
        role: "checkbox",
        "as-child": a.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": s(Cn)(s(l)) ? "mixed" : s(l),
        "aria-required": !1,
        "aria-label": c.$attrs["aria-label"] || u.value,
        "data-state": s(Vr)(s(l)),
        "data-disabled": s(o) ? "" : void 0,
        disabled: s(o),
        onKeydown: Ke(Ce(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (_) => l.value = s(Cn)(s(l)) ? !0 : !s(l))
      }), {
        default: v(() => [
          b(c.$slots, "default", { checked: s(l) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      s(d) ? (f(), L("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "true",
        value: c.value,
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
      }, null, 8, Xp)) : J("", !0)
    ], 64));
  }
}), nf = /* @__PURE__ */ g({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e } = N(), a = ef();
    return (n, o) => (f(), y(s(Me), {
      present: n.forceMount || s(Cn)(s(a).state.value) || s(a).state.value === !0
    }, {
      default: v(() => [
        D(s(F), P({
          ref: s(e),
          "data-state": s(Vr)(s(a).state.value),
          "data-disabled": s(a).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: v(() => [
            b(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Fr, of] = ne("PopperRoot"), va = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(t) {
    const e = A();
    return of({
      anchor: e,
      onAnchorChange: (a) => e.value = a
    }), (a, n) => b(a.$slots, "default");
  }
}), Rn = /* @__PURE__ */ g({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = N(), o = Fr();
    return be(() => {
      o.onAnchorChange(e.element ?? n.value);
    }), (l, r) => (f(), y(s(F), {
      ref: s(a),
      as: l.as,
      "as-child": l.asChild
    }, {
      default: v(() => [
        b(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function sf(t) {
  return t !== null;
}
function lf(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      var a, n, o;
      const { placement: l, rects: r, middlewareData: i } = e, d = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, u = d ? 0 : t.arrowWidth, c = d ? 0 : t.arrowHeight, [p, _] = Co(l), m = { start: "0%", center: "50%", end: "100%" }[_], x = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + u / 2, h = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + c / 2;
      let w = "", C = "";
      return p === "bottom" ? (w = d ? m : `${x}px`, C = `${-c}px`) : p === "top" ? (w = d ? m : `${x}px`, C = `${r.floating.height + c}px`) : p === "right" ? (w = `${-c}px`, C = d ? m : `${h}px`) : p === "left" && (w = `${r.floating.width + c}px`, C = d ? m : `${h}px`), { data: { x: w, y: C } };
    }
  };
}
function Co(t) {
  const [e, a = "center"] = t.split("-");
  return [e, a];
}
const Lr = {
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
}, [x0, rf] = ne("PopperContent"), la = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Pl({
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
    ...Lr
  }),
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Fr(), { forwardRef: l, currentElement: r } = N(), i = A(), d = A(), { width: u, height: c } = kr(d), p = $(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), _ = $(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = $(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), x = $(() => ({
      padding: _.value,
      boundary: m.value.filter(sf),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), h = rc(() => [
      qu({
        mainAxis: a.sideOffset + c.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && el({
        ...x.value
      }),
      a.avoidCollisions && Ju({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? ec() : void 0,
        ...x.value
      }),
      !a.prioritizePosition && a.avoidCollisions && el({
        ...x.value
      }),
      Qu({
        ...x.value,
        apply: ({ elements: B, rects: I, availableWidth: V, availableHeight: Y }) => {
          const { width: G, height: ae } = I.reference, ce = B.floating.style;
          ce.setProperty(
            "--radix-popper-available-width",
            `${V}px`
          ), ce.setProperty(
            "--radix-popper-available-height",
            `${Y}px`
          ), ce.setProperty(
            "--radix-popper-anchor-width",
            `${G}px`
          ), ce.setProperty(
            "--radix-popper-anchor-height",
            `${ae}px`
          );
        }
      }),
      d.value && nc({ element: d.value, padding: a.arrowPadding }),
      lf({
        arrowWidth: u.value,
        arrowHeight: c.value
      }),
      a.hideWhenDetached && Zu({ strategy: "referenceHidden", ...x.value })
    ]), { floatingStyles: w, placement: C, isPositioned: S, middlewareData: k } = oc(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...B) => Yu(...B, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: h
      }
    ), E = $(
      () => Co(C.value)[0]
    ), O = $(
      () => Co(C.value)[1]
    );
    ed(() => {
      S.value && n("placed");
    });
    const R = $(
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
    }), z = $(() => {
      var B;
      return ((B = k.value.arrow) == null ? void 0 : B.y) ?? 0;
    });
    return rf({
      placedSide: E,
      onArrowChange: (B) => d.value = B,
      arrowX: U,
      arrowY: z,
      shouldHideArrow: R
    }), (B, I) => {
      var V, Y, G;
      return f(), L("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: St({
          ...s(w),
          transform: s(S) ? s(w).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: M.value,
          "--radix-popper-transform-origin": [
            (V = s(k).transformOrigin) == null ? void 0 : V.x,
            (Y = s(k).transformOrigin) == null ? void 0 : Y.y
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
        D(s(F), P({ ref: s(l) }, B.$attrs, {
          "as-child": a.asChild,
          as: B.as,
          "data-side": E.value,
          "data-align": O.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(S) ? void 0 : "none"
          }
        }), {
          default: v(() => [
            b(B.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), ja = /* @__PURE__ */ g({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return N(), (e, a) => (f(), y(s(F), {
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
      default: v(() => [
        b(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), df = /* @__PURE__ */ g({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(t) {
    const e = t, a = $(() => typeof e.value == "string" || typeof e.value == "number" || typeof e.value == "boolean" ? [{ name: e.name, value: e.value }] : typeof e.value == "object" && Array.isArray(e.value) ? e.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([l, r]) => ({ name: `[${o}][${e.name}][${l}]`, value: r })) : { name: `[${e.name}][${o}]`, value: n }) : e.value !== null && typeof e.value == "object" && !Array.isArray(e.value) ? Object.entries(e.value).map(([n, o]) => ({ name: `[${e.name}][${n}]`, value: o })) : []);
    return (n, o) => (f(!0), L(Z, null, ge(a.value, (l) => (f(), y(ja, {
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
}), uf = "data-radix-vue-collection-item", [cs, cf] = ne("CollectionProvider");
function ps(t = uf) {
  const e = A(/* @__PURE__ */ new Map()), a = A(), n = cf({
    collectionRef: a,
    itemMap: e,
    attrName: t
  }), { getItems: o } = vs(n), l = $(() => Array.from(n.itemMap.value.values())), r = $(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: l, itemMapSize: r };
}
const fs = g({
  name: "CollectionSlot",
  setup(t, { slots: e }) {
    const a = cs(), { primitiveElement: n, currentElement: o } = ca();
    return X(o, () => {
      a.collectionRef.value = o.value;
    }), () => Ze(ns, { ref: n }, e);
  }
}), Vn = g({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(t, { slots: e, attrs: a }) {
    const n = cs(), { primitiveElement: o, currentElement: l } = ca();
    return be((r) => {
      if (l.value) {
        const i = qi(l.value);
        n.itemMap.value.set(i, { ref: l.value, value: t.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => Ze(ns, { ...a, [n.attrName]: "", ref: o }, e);
  }
});
function vs(t) {
  const e = t ?? cs();
  return { getItems: () => {
    const a = e.collectionRef.value;
    if (!a)
      return [];
    const n = Array.from(a.querySelectorAll(`[${e.attrName}]`));
    return Array.from(e.itemMap.value.values()).sort(
      (o, l) => n.indexOf(o.ref) - n.indexOf(l.ref)
    );
  } };
}
const [ma, pf] = ne("ComboboxRoot"), ff = /* @__PURE__ */ g({
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
    const a = t, n = e, { multiple: o, disabled: l, dir: r } = fe(a), i = ot(r), d = pe(a, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: a.searchTerm === void 0
    }), u = pe(a, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: a.defaultValue ?? o.value ? [] : void 0,
      passive: a.modelValue === void 0,
      deep: !0
    }), c = pe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), p = pe(a, "selectedValue", n, {
      defaultValue: void 0,
      passive: a.selectedValue === void 0
    });
    async function _(j) {
      var oe, de;
      c.value = j, await se(), j ? (u.value && (Array.isArray(u.value) && o.value ? p.value = (oe = k().find((Ve) => {
        var Ye, mt;
        return ((mt = (Ye = Ve.ref) == null ? void 0 : Ye.dataset) == null ? void 0 : mt.state) === "checked";
      })) == null ? void 0 : oe.value : p.value = u.value), await se(), (de = h.value) == null || de.focus(), Y()) : (x.value = !1, a.resetSearchTermOnBlur && U("blur"));
    }
    function m(j) {
      if (Array.isArray(u.value) && o.value) {
        const oe = u.value.findIndex((Ve) => Tt(Ve, j)), de = [...u.value];
        oe === -1 ? de.push(j) : de.splice(oe, 1), u.value = de;
      } else
        u.value = j, _(!1);
    }
    const x = A(!1), h = A(), w = A(), { forwardRef: C, currentElement: S } = N(), { getItems: k, reactiveItems: E, itemMapSize: O } = ps("data-radix-vue-combobox-item"), R = A([]);
    X(() => O.value, () => {
      R.value = k().map((j) => j.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const M = $(() => {
      if (x.value) {
        if (a.filterFunction)
          return a.filterFunction(R.value, d.value);
        const j = R.value.filter((oe) => typeof oe == "string");
        if (j.length)
          return j.filter((oe) => {
            var de;
            return oe.toLowerCase().includes((de = d.value) == null ? void 0 : de.toLowerCase());
          });
      }
      return R.value;
    });
    function U(j) {
      const oe = j === "blur" || j === "select" && a.resetSearchTermOnSelect;
      !o.value && u.value && !Array.isArray(u.value) ? a.displayValue ? d.value = a.displayValue(u.value) : typeof u.value != "object" ? d.value = u.value.toString() : oe && (d.value = "") : oe && (d.value = "");
    }
    const z = $(() => M.value.findIndex((j) => Tt(j, p.value))), B = $(() => {
      var j;
      return (j = E.value.find((oe) => Tt(oe.value, p.value))) == null ? void 0 : j.ref;
    }), I = $(() => JSON.stringify(u.value));
    X(I, async () => {
      await se(), await se(), U("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), X(() => [M.value.length, d.value.length], async ([j, oe], [de, Ve]) => {
      await se(), await se(), j && (Ve > oe || z.value === -1) && (p.value = M.value[0]);
    });
    const V = Ua(S);
    function Y() {
      var j;
      B.value instanceof Element && ((j = B.value) == null || j.scrollIntoView({ block: "nearest" }));
    }
    function G() {
      B.value instanceof Element && B.value.focus && B.value.focus();
    }
    const ae = A(!1);
    function ce() {
      ae.value = !0;
    }
    function he() {
      requestAnimationFrame(() => {
        ae.value = !1;
      });
    }
    async function ye(j) {
      var oe;
      M.value.length && p.value && B.value instanceof Element && (j.preventDefault(), j.stopPropagation(), ae.value || (oe = B.value) == null || oe.click());
    }
    return pf({
      searchTerm: d,
      modelValue: u,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: x,
      multiple: o,
      disabled: l,
      open: c,
      onOpenChange: _,
      filteredOptions: M,
      contentId: "",
      inputElement: h,
      selectedElement: B,
      onInputElementChange: (j) => h.value = j,
      onInputNavigation: async (j) => {
        const oe = z.value;
        oe === 0 && j === "up" || oe === M.value.length - 1 && j === "down" || (oe === -1 && M.value.length || j === "home" ? p.value = M.value[0] : j === "end" ? p.value = M.value[M.value.length - 1] : p.value = M.value[j === "up" ? oe - 1 : oe + 1], await se(), Y(), G(), se(() => {
          var de;
          return (de = h.value) == null ? void 0 : de.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: ye,
      onCompositionEnd: he,
      onCompositionStart: ce,
      selectedValue: p,
      onSelectedValueChange: (j) => p.value = j,
      parentElement: S,
      contentElement: w,
      onContentElementChange: (j) => w.value = j
    }), (j, oe) => (f(), y(s(va), null, {
      default: v(() => [
        D(s(F), P({
          ref: s(C),
          style: {
            pointerEvents: s(c) ? "auto" : void 0
          },
          as: j.as,
          "as-child": j.asChild,
          dir: s(i)
        }, j.$attrs), {
          default: v(() => [
            b(j.$slots, "default", {
              open: s(c),
              modelValue: s(u)
            }),
            s(V) && a.name ? (f(), y(s(df), {
              key: 0,
              name: a.name,
              value: s(u)
            }, null, 8, ["name", "value"])) : J("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), vf = /* @__PURE__ */ g({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(t) {
    const e = t, a = ma(), { forwardRef: n, currentElement: o } = N();
    ue(() => {
      const c = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      c && (a.onInputElementChange(c), setTimeout(() => {
        e.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const l = $(() => e.disabled || a.disabled.value || !1), r = A();
    Wi(() => {
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
    return (c, p) => (f(), y(s(F), {
      ref: s(n),
      as: c.as,
      "as-child": c.asChild,
      type: c.type,
      disabled: l.value,
      value: s(a).searchTerm.value,
      "aria-expanded": s(a).open.value,
      "aria-controls": s(a).contentId,
      "aria-disabled": l.value ?? void 0,
      "aria-activedescendant": r.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: u,
      onKeydown: [
        Ke(Ce(i, ["prevent"]), ["down", "up"]),
        Ke(s(a).onInputEnter, ["enter"]),
        Ke(Ce(d, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: s(a).onCompositionStart,
      onCompositionend: s(a).onCompositionEnd
    }, {
      default: v(() => [
        b(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [Nr, mf] = ne("ComboboxGroup"), hf = /* @__PURE__ */ g({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { currentRef: a, currentElement: n } = N(), o = we(void 0, "radix-vue-combobox-group"), l = ma(), r = A(!1);
    function i() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!d.length;
    }
    return _c(n, () => {
      se(() => {
        i();
      });
    }, { childList: !0 }), X(() => l.searchTerm.value, () => {
      se(() => {
        i();
      });
    }, { immediate: !0 }), mf({
      id: o
    }), (d, u) => ia((f(), y(s(F), P(e, {
      ref_key: "currentRef",
      ref: a,
      role: "group",
      "aria-labelledby": s(o)
    }), {
      default: v(() => [
        b(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [Mo, r.value]
    ]);
  }
}), gf = /* @__PURE__ */ g({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    N();
    const a = Nr({ id: "" });
    return (n, o) => (f(), y(s(F), P(e, {
      id: s(a).id
    }), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [$0, yf] = ne("ComboboxContent"), bf = /* @__PURE__ */ g({
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
    const a = t, n = e, { position: o } = fe(a), l = ma();
    za(a.bodyLock);
    const { forwardRef: r, currentElement: i } = N();
    Ka(l.parentElement);
    const d = $(() => a.position === "popper" ? a : {}), u = le(d.value);
    function c(_) {
      l.onSelectedValueChange("");
    }
    ue(() => {
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
    return yf({ position: o }), (_, m) => (f(), y(s(fs), null, {
      default: v(() => [
        _.dismissable ? (f(), y(s(pa), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": _.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (x) => s(l).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (x) => {
            var h;
            (h = s(l).parentElement.value) != null && h.contains(x.target) && x.preventDefault(), n("focusOutside", x);
          }),
          onInteractOutside: m[2] || (m[2] = (x) => n("interactOutside", x)),
          onEscapeKeyDown: m[3] || (m[3] = (x) => n("escapeKeyDown", x)),
          onPointerDownOutside: m[4] || (m[4] = (x) => {
            var h;
            (h = s(l).parentElement.value) != null && h.contains(x.target) && x.preventDefault(), n("pointerDownOutside", x);
          })
        }, {
          default: v(() => [
            (f(), y(Oe(s(o) === "popper" ? s(la) : s(F)), P({ ..._.$attrs, ...s(u) }, {
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
              onPointerleave: c
            }), {
              default: v(() => [
                b(_.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (f(), y(Oe(s(o) === "popper" ? s(la) : s(F)), P({ key: 1 }, { ..._.$attrs, ...d.value }, {
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
          onPointerleave: c
        }), {
          default: v(() => [
            b(_.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), _f = /* @__PURE__ */ g({
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
    const a = ee(t, e), { forwardRef: n } = N(), o = ma();
    return o.contentId || (o.contentId = we(void 0, "radix-vue-combobox-content")), (l, r) => (f(), y(s(Me), {
      present: l.forceMount || s(o).open.value
    }, {
      default: v(() => [
        D(bf, P({ ...s(a), ...l.$attrs }, { ref: s(n) }), {
          default: v(() => [
            b(l.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), wf = /* @__PURE__ */ g({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    N();
    const a = ma(), n = $(() => a.filteredOptions.value.length === 0);
    return (o, l) => n.value ? (f(), y(s(F), K(P({ key: 0 }, e)), {
      default: v(() => [
        b(o.$slots, "default", {}, () => [
          q("No options")
        ])
      ]),
      _: 3
    }, 16)) : J("", !0);
  }
});
function xf(t) {
  const e = Mn({
    nonce: A()
  });
  return $(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.nonce) == null ? void 0 : a.value);
  });
}
const [C0, $f] = ne("ComboboxItem"), Cf = "combobox.select", kf = /* @__PURE__ */ g({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { disabled: o } = fe(a), l = ma();
    Nr({ id: "", options: A([]) });
    const { forwardRef: r } = N(), i = $(
      () => {
        var h, w;
        return l.multiple.value && Array.isArray(l.modelValue.value) ? (h = l.modelValue.value) == null ? void 0 : h.some((C) => Tt(C, a.value)) : Tt((w = l.modelValue) == null ? void 0 : w.value, a.value);
      }
    ), d = $(() => Tt(l.selectedValue.value, a.value)), u = we(void 0, "radix-vue-combobox-item"), c = we(void 0, "radix-vue-combobox-option"), p = $(() => l.isUserInputted.value ? l.searchTerm.value === "" || !!l.filteredOptions.value.find((h) => Tt(h, a.value)) : !0);
    async function _(h) {
      n("select", h), !(h != null && h.defaultPrevented) && !o.value && h && l.onValueChange(a.value);
    }
    function m(h) {
      if (!h)
        return;
      const w = { originalEvent: h, value: a.value };
      Qo(Cf, _, w);
    }
    async function x(h) {
      await se(), !h.defaultPrevented && l.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return $f({
      isSelected: i
    }), (h, w) => (f(), y(s(Vn), { value: h.value }, {
      default: v(() => [
        ia(D(s(F), {
          id: s(c),
          ref: s(r),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": s(u),
          "data-highlighted": d.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": s(o) || void 0,
          "data-disabled": s(o) ? "" : void 0,
          as: h.as,
          "as-child": h.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: m,
          onPointermove: x
        }, {
          default: v(() => [
            b(h.$slots, "default", {}, () => [
              q(Q(h.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Mo, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Bf = /* @__PURE__ */ g({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (f(), y(s(F), P(e, { "aria-hidden": "true" }), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zr = /* @__PURE__ */ g({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Rn), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Df() {
  const t = A(!1);
  return ue(() => {
    sa("keydown", () => {
      t.value = !0;
    }, { capture: !0, passive: !0 }), sa(["pointerdown", "pointermove"], () => {
      t.value = !1;
    }, { capture: !0, passive: !0 });
  }), t;
}
const Sf = gr(Df), [zt, Ur] = ne(["MenuRoot", "MenuSub"], "MenuContext"), [Ga, Pf] = ne("MenuRoot"), Ef = /* @__PURE__ */ g({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, { modal: o, dir: l } = fe(a), r = ot(l), i = pe(a, "open", n), d = A(), u = Sf();
    return Ur({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: d,
      onContentChange: (c) => {
        d.value = c;
      }
    }), Pf({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: u,
      dir: r,
      modal: o
    }), (c, p) => (f(), y(s(va), null, {
      default: v(() => [
        b(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Of = "rovingFocusGroup.onEntryFocus", Af = { bubbles: !1, cancelable: !0 }, Mf = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Tf(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function If(t, e, a) {
  const n = Tf(t.key, a);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Mf[n];
}
function Kr(t, e = !1) {
  const a = xe();
  for (const n of t)
    if (n === a || (n.focus({ preventScroll: e }), xe() !== a))
      return;
}
function Rf(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
const [Vf, Ff] = ne("RovingFocusGroup"), Wr = /* @__PURE__ */ g({
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
    const n = t, o = a, { loop: l, orientation: r, dir: i } = fe(n), d = ot(i), u = pe(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = A(!1), p = A(!1), _ = A(0), { getItems: m } = ps();
    function x(w) {
      const C = !p.value;
      if (w.currentTarget && w.target === w.currentTarget && C && !c.value) {
        const S = new CustomEvent(Of, Af);
        if (w.currentTarget.dispatchEvent(S), o("entryFocus", S), !S.defaultPrevented) {
          const k = m().map((M) => M.ref).filter((M) => M.dataset.disabled !== ""), E = k.find((M) => M.getAttribute("data-active") === "true"), O = k.find(
            (M) => M.id === u.value
          ), R = [E, O, ...k].filter(
            Boolean
          );
          Kr(R, n.preventScrollOnEntryFocus);
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
    }), Ff({
      loop: l,
      dir: d,
      orientation: r,
      currentTabStopId: u,
      onItemFocus: (w) => {
        u.value = w;
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
    }), (w, C) => (f(), y(s(fs), null, {
      default: v(() => [
        D(s(F), {
          tabindex: c.value || _.value === 0 ? -1 : 0,
          "data-orientation": s(r),
          as: w.as,
          "as-child": w.asChild,
          dir: s(d),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (S) => p.value = !0),
          onMouseup: h,
          onFocus: x,
          onBlur: C[1] || (C[1] = (S) => c.value = !1)
        }, {
          default: v(() => [
            b(w.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Lf = /* @__PURE__ */ g({
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
    const e = t, a = Vf(), n = $(() => e.tabStopId || we()), o = $(
      () => a.currentTabStopId.value === n.value
    ), { getItems: l } = vs();
    ue(() => {
      e.focusable && a.onFocusableItemAdd();
    }), Pt(() => {
      e.focusable && a.onFocusableItemRemove();
    });
    function r(i) {
      if (i.key === "Tab" && i.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const d = If(
        i,
        a.orientation.value,
        a.dir.value
      );
      if (d !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !e.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let u = [...l().map((c) => c.ref).filter((c) => c.dataset.disabled !== "")];
        if (d === "last")
          u.reverse();
        else if (d === "prev" || d === "next") {
          d === "prev" && u.reverse();
          const c = u.indexOf(
            i.currentTarget
          );
          u = a.loop.value ? Rf(u, c + 1) : u.slice(c + 1);
        }
        se(() => Kr(u));
      }
    }
    return (i, d) => (f(), y(s(Vn), null, {
      default: v(() => [
        D(s(F), {
          tabindex: o.value ? 0 : -1,
          "data-orientation": s(a).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: d[0] || (d[0] = (u) => {
            i.focusable ? s(a).onItemFocus(n.value) : u.preventDefault();
          }),
          onFocus: d[1] || (d[1] = (u) => s(a).onItemFocus(n.value)),
          onKeydown: r
        }, {
          default: v(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [ms, Nf] = ne("MenuContent"), hs = /* @__PURE__ */ g({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Pl({
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
    ...Lr
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = zt(), l = Ga(), { trapFocus: r, disableOutsidePointerEvents: i, loop: d } = fe(a);
    ts(), za(i.value);
    const u = A(""), c = A(0), p = A(0), _ = A(null), m = A("right"), x = A(0), h = A(null), { createCollection: w } = ua(), { forwardRef: C, currentElement: S } = N(), k = w(S);
    X(S, (B) => {
      o.onContentChange(B);
    });
    const { handleTypeaheadSearch: E } = as(k);
    Pt(() => {
      window.clearTimeout(c.value);
    });
    function O(B) {
      var I, V;
      return m.value === ((I = _.value) == null ? void 0 : I.side) && Bp(B, (V = _.value) == null ? void 0 : V.area);
    }
    async function R(B) {
      var I;
      n("openAutoFocus", B), !B.defaultPrevented && (B.preventDefault(), (I = S.value) == null || I.focus({
        preventScroll: !0
      }));
    }
    function M(B) {
      if (B.defaultPrevented)
        return;
      const I = B.target.closest("[data-radix-menu-content]") === B.currentTarget, V = B.ctrlKey || B.altKey || B.metaKey, Y = B.key.length === 1, G = wr(
        B,
        xe(),
        S.value,
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
      if (B.code === "Space" || (I && (B.key === "Tab" && B.preventDefault(), !V && Y && E(B.key)), B.target !== S.value) || !xp.includes(B.key))
        return;
      B.preventDefault();
      const ae = k.value;
      Ar.includes(B.key) && ae.reverse(), $o(ae);
    }
    function U(B) {
      var I, V;
      (V = (I = B == null ? void 0 : B.currentTarget) == null ? void 0 : I.contains) != null && V.call(I, B.target) || (window.clearTimeout(c.value), u.value = "");
    }
    function z(B) {
      var I;
      if (!Ta(B))
        return;
      const V = B.target, Y = x.value !== B.clientX;
      if ((I = B == null ? void 0 : B.currentTarget) != null && I.contains(V) && Y) {
        const G = B.clientX > x.value ? "right" : "left";
        m.value = G, x.value = B.clientX;
      }
    }
    return Nf({
      onItemEnter: (B) => !!O(B),
      onItemLeave: (B) => {
        var I;
        O(B) || ((I = S.value) == null || I.focus(), h.value = null);
      },
      onTriggerLeave: (B) => !!O(B),
      searchRef: u,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (B) => {
        _.value = B;
      }
    }), (B, I) => (f(), y(s(In), {
      "as-child": "",
      trapped: s(r),
      onMountAutoFocus: R,
      onUnmountAutoFocus: I[7] || (I[7] = (V) => n("closeAutoFocus", V))
    }, {
      default: v(() => [
        D(s(pa), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: I[2] || (I[2] = (V) => n("escapeKeyDown", V)),
          onPointerDownOutside: I[3] || (I[3] = (V) => n("pointerDownOutside", V)),
          onFocusOutside: I[4] || (I[4] = (V) => n("focusOutside", V)),
          onInteractOutside: I[5] || (I[5] = (V) => n("interactOutside", V)),
          onDismiss: I[6] || (I[6] = (V) => n("dismiss"))
        }, {
          default: v(() => [
            D(s(Wr), {
              "current-tab-stop-id": h.value,
              "onUpdate:currentTabStopId": I[0] || (I[0] = (V) => h.value = V),
              "as-child": "",
              orientation: "vertical",
              dir: s(l).dir.value,
              loop: s(d),
              onEntryFocus: I[1] || (I[1] = (V) => {
                n("entryFocus", V), s(l).isUsingKeyboardRef.value || V.preventDefault();
              })
            }, {
              default: v(() => [
                D(s(la), {
                  ref: s(C),
                  role: "menu",
                  as: B.as,
                  "as-child": B.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(rs)(s(o).open.value),
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
                  onKeydown: M,
                  onBlur: U,
                  onPointermove: z
                }, {
                  default: v(() => [
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
}), Hr = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = ms(), { forwardRef: n } = N(), o = A(!1);
    async function l(i) {
      if (!i.defaultPrevented && Ta(i)) {
        if (e.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function r(i) {
      await se(), !i.defaultPrevented && Ta(i) && a.onItemLeave(i);
    }
    return (i, d) => (f(), y(s(Vn), {
      value: { textValue: i.textValue }
    }, {
      default: v(() => [
        D(s(F), P({
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
          onFocus: d[0] || (d[0] = async (u) => {
            await se(), !(u.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: d[1] || (d[1] = async (u) => {
            await se(), !u.defaultPrevented && (o.value = !1);
          })
        }), {
          default: v(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), gs = /* @__PURE__ */ g({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: l } = N(), r = Ga(), i = ms(), d = A(!1);
    async function u() {
      const c = l.value;
      if (!a.disabled && c) {
        const p = new CustomEvent(_p, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await se(), p.defaultPrevented ? d.value = !1 : r.onClose();
      }
    }
    return (c, p) => (f(), y(Hr, P(a, {
      ref: s(o),
      onClick: u,
      onPointerdown: p[0] || (p[0] = () => {
        d.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (_) => {
        var m;
        await se(), !_.defaultPrevented && (d.value || (m = _.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (_) => {
        const m = s(i).searchRef.value !== "";
        c.disabled || m && _.key === " " || s(xo).includes(_.key) && (_.currentTarget.click(), _.preventDefault());
      })
    }), {
      default: v(() => [
        b(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [zf, jr] = ne(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Uf = /* @__PURE__ */ g({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = zf({
      checked: A(!1)
    });
    return (a, n) => (f(), y(s(Me), {
      present: a.forceMount || s($n)(s(e).checked.value) || s(e).checked.value === !0
    }, {
      default: v(() => [
        D(s(F), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": s(is)(s(e).checked.value)
        }, {
          default: v(() => [
            b(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Kf = /* @__PURE__ */ g({
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
    const a = t, n = e, o = pe(a, "checked", n);
    return jr({ checked: o }), (l, r) => (f(), y(gs, P({ role: "menuitemcheckbox" }, a, {
      "aria-checked": s($n)(s(o)) ? "mixed" : s(o),
      "data-state": s(is)(s(o)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), s($n)(s(o)) ? o.value = !0 : o.value = !s(o);
      })
    }), {
      default: v(() => [
        b(l.$slots, "default", { checked: s(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Wf = /* @__PURE__ */ g({
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
    const a = t, n = e, o = ee(a, n), l = zt(), { forwardRef: r, currentElement: i } = N();
    return Ka(i), (d, u) => (f(), y(hs, P(s(o), {
      ref: s(r),
      "trap-focus": s(l).open.value,
      "disable-outside-pointer-events": s(l).open.value,
      "disable-outside-scroll": !0,
      onDismiss: u[0] || (u[0] = (c) => s(l).onOpenChange(!1)),
      onFocusOutside: u[1] || (u[1] = Ce((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: v(() => [
        b(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Hf = /* @__PURE__ */ g({
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
    const a = ee(t, e), n = zt();
    return (o, l) => (f(), y(hs, P(s(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: l[0] || (l[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jf = /* @__PURE__ */ g({
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
    const a = ee(t, e), n = zt(), o = Ga();
    return (l, r) => (f(), y(s(Me), {
      present: l.forceMount || s(n).open.value
    }, {
      default: v(() => [
        s(o).modal.value ? (f(), y(Wf, K(P({ key: 0 }, { ...l.$attrs, ...s(a) })), {
          default: v(() => [
            b(l.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), y(Hf, K(P({ key: 1 }, { ...l.$attrs, ...s(a) })), {
          default: v(() => [
            b(l.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Gr = /* @__PURE__ */ g({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), P({ role: "group" }, e), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gf = /* @__PURE__ */ g({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yf = /* @__PURE__ */ g({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Wa), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [qf, Jf] = ne("MenuRadioGroup"), Qf = /* @__PURE__ */ g({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = pe(a, "modelValue", e);
    return Jf({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, l) => (f(), y(Gr, K(H(a)), {
      default: v(() => [
        b(o.$slots, "default", { modelValue: s(n) })
      ]),
      _: 3
    }, 16));
  }
}), Zf = /* @__PURE__ */ g({
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
    const a = t, n = e, { value: o } = fe(a), l = qf(), r = $(
      () => l.modelValue.value === (o == null ? void 0 : o.value)
    );
    return jr({ checked: r }), (i, d) => (f(), y(gs, P({ role: "menuitemradio" }, a, {
      "aria-checked": r.value,
      "data-state": s(is)(r.value),
      onSelect: d[0] || (d[0] = async (u) => {
        n("select", u), s(l).onValueChange(s(o));
      })
    }), {
      default: v(() => [
        b(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Xf = /* @__PURE__ */ g({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), P(e, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Yr, ev] = ne("MenuSub"), tv = /* @__PURE__ */ g({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = pe(a, "open", e, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = zt(), l = A(), r = A();
    return be((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), Ur({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: r,
      onContentChange: (i) => {
        r.value = i;
      }
    }), ev({
      triggerId: "",
      contentId: "",
      trigger: l,
      onTriggerChange: (i) => {
        l.value = i;
      }
    }), (i, d) => (f(), y(s(va), null, {
      default: v(() => [
        b(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), av = /* @__PURE__ */ g({
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
    const a = ee(t, e), n = zt(), o = Ga(), l = Yr(), { forwardRef: r, currentElement: i } = N();
    return l.contentId || (l.contentId = we(void 0, "radix-vue-menu-sub-content")), (d, u) => (f(), y(s(Me), {
      present: d.forceMount || s(n).open.value
    }, {
      default: v(() => [
        D(hs, P(s(a), {
          id: s(l).contentId,
          ref: s(r),
          "aria-labelledby": s(l).triggerId,
          align: "start",
          side: s(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: u[0] || (u[0] = Ce((c) => {
            var p;
            s(o).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: u[1] || (u[1] = Ce(() => {
          }, ["prevent"])),
          onFocusOutside: u[2] || (u[2] = (c) => {
            c.defaultPrevented || c.target !== s(l).trigger.value && s(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: u[3] || (u[3] = (c) => {
            s(o).onClose(), c.preventDefault();
          }),
          onKeydown: u[4] || (u[4] = (c) => {
            var p, _;
            const m = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), x = s(Cp)[s(o).dir.value].includes(c.key);
            m && x && (s(n).onOpenChange(!1), (_ = s(l).trigger.value) == null || _.focus(), c.preventDefault());
          })
        }), {
          default: v(() => [
            b(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), nv = /* @__PURE__ */ g({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = zt(), n = Ga(), o = Yr(), l = ms(), r = A(null);
    o.triggerId || (o.triggerId = we(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    Pt(() => {
      i();
    });
    function d(p) {
      !Ta(p) || l.onItemEnter(p) || !e.disabled && !a.open.value && !r.value && (l.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function u(p) {
      var _, m;
      if (!Ta(p))
        return;
      i();
      const x = (_ = a.content.value) == null ? void 0 : _.getBoundingClientRect();
      if (x != null && x.width) {
        const h = (m = a.content.value) == null ? void 0 : m.dataset.side, w = h === "right", C = w ? -5 : 5, S = x[w ? "left" : "right"], k = x[w ? "right" : "left"];
        l.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: S, y: x.top },
            { x: k, y: x.top },
            { x: k, y: x.bottom },
            { x: S, y: x.bottom }
          ],
          side: h
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
    async function c(p) {
      var _;
      const m = l.searchRef.value !== "";
      e.disabled || m && p.key === " " || $p[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await se(), (_ = a.content.value) == null || _.focus(), p.preventDefault());
    }
    return (p, _) => (f(), y(zr, { "as-child": "" }, {
      default: v(() => [
        D(Hr, P(e, {
          id: s(o).triggerId,
          ref: (m) => {
            var x;
            (x = s(o)) == null || x.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(o).contentId,
          "data-state": s(rs)(s(a).open.value),
          onClick: _[0] || (_[0] = async (m) => {
            e.disabled || m.defaultPrevented || (m.currentTarget.focus(), s(a).open.value || s(a).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: u,
          onKeydown: c
        }), {
          default: v(() => [
            b(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [qr, ov] = ne("DropdownMenuRoot"), sv = /* @__PURE__ */ g({
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
    const o = pe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), l = A(), { modal: r, dir: i } = fe(a), d = ot(i);
    return ov({
      open: o,
      onOpenChange: (u) => {
        o.value = u;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerId: "",
      triggerElement: l,
      contentId: "",
      modal: r,
      dir: d
    }), (u, c) => (f(), y(s(Ef), {
      open: s(o),
      "onUpdate:open": c[0] || (c[0] = (p) => Ra(o) ? o.value = p : null),
      dir: s(d),
      modal: s(r)
    }, {
      default: v(() => [
        b(u.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), lv = /* @__PURE__ */ g({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = qr(), { forwardRef: n, currentElement: o } = N();
    return ue(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = we(void 0, "radix-vue-dropdown-menu-trigger")), (l, r) => (f(), y(s(zr), { "as-child": "" }, {
      default: v(() => [
        D(s(F), {
          id: s(a).triggerId,
          ref: s(n),
          type: l.as === "button" ? "button" : void 0,
          "as-child": e.asChild,
          as: l.as,
          "aria-haspopup": "menu",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(a).open.value ? s(a).contentId : void 0,
          "data-disabled": l.disabled ? "" : void 0,
          disabled: l.disabled,
          "data-state": s(a).open.value ? "open" : "closed",
          onClick: r[0] || (r[0] = async (i) => {
            var d;
            !l.disabled && i.button === 0 && i.ctrlKey === !1 && ((d = s(a)) == null || d.onOpenToggle(), await se(), s(a).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = Ke(
            (i) => {
              l.disabled || (["Enter", " "].includes(i.key) && s(a).onOpenToggle(), i.key === "ArrowDown" && s(a).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: v(() => [
            b(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), rv = /* @__PURE__ */ g({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Yf), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iv = /* @__PURE__ */ g({
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
    N();
    const n = qr(), o = A(!1);
    function l(r) {
      r.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, r.preventDefault());
    }
    return n.contentId || (n.contentId = we(void 0, "radix-vue-dropdown-menu-content")), (r, i) => {
      var d;
      return f(), y(s(jf), P(s(a), {
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
        onInteractOutside: i[0] || (i[0] = (u) => {
          var c;
          if (u.defaultPrevented) return;
          const p = u.detail.originalEvent, _ = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || _;
          (!s(n).modal.value || m) && (o.value = !0), (c = s(n).triggerElement.value) != null && c.contains(u.target) && u.preventDefault();
        })
      }), {
        default: v(() => [
          b(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Jr = /* @__PURE__ */ g({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = Nt(e);
    return N(), (o, l) => (f(), y(s(gs), K(H({ ...a, ...s(n) })), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dv = /* @__PURE__ */ g({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (f(), y(s(Gr), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uv = /* @__PURE__ */ g({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (f(), y(s(Xf), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cv = /* @__PURE__ */ g({
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
    const a = t, n = Nt(e);
    return N(), (o, l) => (f(), y(s(Kf), K(H({ ...a, ...s(n) })), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qr = /* @__PURE__ */ g({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (f(), y(s(Uf), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pv = /* @__PURE__ */ g({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (f(), y(s(Gf), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fv = /* @__PURE__ */ g({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = Nt(e);
    return N(), (o, l) => (f(), y(s(Qf), K(H({ ...a, ...s(n) })), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vv = /* @__PURE__ */ g({
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
    return N(), (n, o) => (f(), y(s(Zf), K(H(s(a))), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mv = /* @__PURE__ */ g({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = pe(a, "open", e, {
      passive: a.open === void 0,
      defaultValue: a.defaultOpen ?? !1
    });
    return N(), (o, l) => (f(), y(s(tv), {
      open: s(n),
      "onUpdate:open": l[0] || (l[0] = (r) => Ra(n) ? n.value = r : null)
    }, {
      default: v(() => [
        b(o.$slots, "default", { open: s(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), hv = /* @__PURE__ */ g({
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
    return N(), (n, o) => (f(), y(s(av), P(s(a), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gv = /* @__PURE__ */ g({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (f(), y(s(nv), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yv = /* @__PURE__ */ g({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (f(), y(s(F), P(e, {
      onMousedown: n[0] || (n[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ha, bv] = ne("PaginationRoot"), _v = /* @__PURE__ */ g({
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
    const a = t, n = e, { siblingCount: o, disabled: l, showEdges: r } = fe(a);
    N();
    const i = pe(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), d = $(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return bv({
      page: i,
      onPageChange(u) {
        i.value = u;
      },
      pageCount: d,
      siblingCount: o,
      disabled: l,
      showEdges: r
    }), (u, c) => (f(), y(s(F), {
      as: u.as,
      "as-child": u.asChild
    }, {
      default: v(() => [
        b(u.$slots, "default", {
          page: s(i),
          pageCount: d.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), wv = /* @__PURE__ */ g({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (f(), y(s(F), P(e, { "data-type": "ellipsis" }), {
      default: v(() => [
        b(a.$slots, "default", {}, () => [
          q("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), xv = /* @__PURE__ */ g({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = ha();
    N();
    const n = $(() => a.page.value === 1 || a.disabled.value);
    return (o, l) => (f(), y(s(F), P(e, {
      "aria-label": "First Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: l[0] || (l[0] = (r) => !n.value && s(a).onPageChange(1))
    }), {
      default: v(() => [
        b(o.$slots, "default", {}, () => [
          q("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), $v = /* @__PURE__ */ g({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = ha();
    N();
    const n = $(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, l) => (f(), y(s(F), P(e, {
      "aria-label": "Last Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: l[0] || (l[0] = (r) => !n.value && s(a).onPageChange(s(a).pageCount.value))
    }), {
      default: v(() => [
        b(o.$slots, "default", {}, () => [
          q("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function yt(t, e) {
  const a = e - t + 1;
  return Array.from({ length: a }, (n, o) => o + t);
}
function Cv(t) {
  return t.map((e) => typeof e == "number" ? { type: "page", value: e } : { type: "ellipsis" });
}
const an = "ellipsis";
function kv(t, e, a, n) {
  const o = e, l = Math.max(t - a, 1), r = Math.min(t + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, e) - 2, d = l > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(l - 1) > 2, u = r < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - r) > 2;
    if (!d && u)
      return [...yt(1, i), an, o];
    if (d && !u) {
      const c = yt(o - i + 1, o);
      return [1, an, ...c];
    }
    if (d && u) {
      const c = yt(l, r);
      return [1, an, ...c, an, o];
    }
    return yt(1, o);
  } else {
    const i = a * 2 + 1;
    return e < i ? yt(1, o) : t <= a + 1 ? yt(1, i) : e - t <= a ? yt(e - i + 1, o) : yt(l, r);
  }
}
const Bv = /* @__PURE__ */ g({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    N();
    const a = ha(), n = $(() => Cv(
      kv(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, l) => (f(), y(s(F), K(H(e)), {
      default: v(() => [
        b(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), k0 = /* @__PURE__ */ g({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    N();
    const a = ha(), n = $(() => a.page.value === e.value), o = $(() => a.disabled.value);
    return (l, r) => (f(), y(s(F), P(e, {
      "data-type": "page",
      "aria-label": `Page ${l.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: o.value,
      type: l.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (i) => !o.value && s(a).onPageChange(l.value))
    }), {
      default: v(() => [
        b(l.$slots, "default", {}, () => [
          q(Q(l.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), Dv = /* @__PURE__ */ g({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    N();
    const a = ha(), n = $(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, l) => (f(), y(s(F), P(e, {
      "aria-label": "Next Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: l[0] || (l[0] = (r) => !n.value && s(a).onPageChange(s(a).page.value + 1))
    }), {
      default: v(() => [
        b(o.$slots, "default", {}, () => [
          q("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Sv = /* @__PURE__ */ g({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    N();
    const a = ha(), n = $(() => a.page.value === 1 || a.disabled.value);
    return (o, l) => (f(), y(s(F), P(e, {
      "aria-label": "Previous Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: l[0] || (l[0] = (r) => !n.value && s(a).onPageChange(s(a).page.value - 1))
    }), {
      default: v(() => [
        b(o.$slots, "default", {}, () => [
          q("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), [Ya, Pv] = ne("PopoverRoot"), Ev = /* @__PURE__ */ g({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, { modal: o } = fe(a), l = pe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = A(), i = A(!1);
    return Pv({
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
    }), (d, u) => (f(), y(s(va), null, {
      default: v(() => [
        b(d.$slots, "default", { open: s(l) })
      ]),
      _: 3
    }));
  }
}), Ov = /* @__PURE__ */ g({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Ya(), { forwardRef: n, currentElement: o } = N();
    return ue(() => {
      a.triggerElement.value = o.value;
    }), (l, r) => (f(), y(Oe(s(a).hasCustomAnchor.value ? s(F) : s(Rn)), { "as-child": "" }, {
      default: v(() => [
        D(s(F), {
          ref: s(n),
          type: l.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(a).open.value ? "open" : "closed",
          as: l.as,
          "as-child": e.asChild,
          onClick: s(a).onOpenToggle
        }, {
          default: v(() => [
            b(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Av = /* @__PURE__ */ g({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Wa), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zr = /* @__PURE__ */ g({
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
    const a = t, n = e, o = le(a), { forwardRef: l } = N(), r = Ya();
    return ts(), (i, d) => (f(), y(s(In), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: v(() => [
        D(s(pa), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (u) => n("pointerDownOutside", u)),
          onInteractOutside: d[1] || (d[1] = (u) => n("interactOutside", u)),
          onEscapeKeyDown: d[2] || (d[2] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[3] || (d[3] = (u) => n("focusOutside", u)),
          onDismiss: d[4] || (d[4] = (u) => s(r).onOpenChange(!1))
        }, {
          default: v(() => [
            D(s(la), P(s(o), {
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
}), Mv = /* @__PURE__ */ g({
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
    const a = t, n = e, o = Ya(), l = A(!1);
    za(!0);
    const r = ee(a, n), { forwardRef: i, currentElement: d } = N();
    return Ka(d), (u, c) => (f(), y(Zr, P(s(r), {
      ref: s(i),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Ce(
        (p) => {
          var _;
          n("closeAutoFocus", p), l.value || (_ = s(o).triggerElement.value) == null || _.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        n("pointerDownOutside", p);
        const _ = p.detail.originalEvent, m = _.button === 0 && _.ctrlKey === !0, x = _.button === 2 || m;
        l.value = x;
      }),
      onFocusOutside: c[2] || (c[2] = Ce(() => {
      }, ["prevent"]))
    }), {
      default: v(() => [
        b(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Tv = /* @__PURE__ */ g({
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
    const a = t, n = e, o = Ya(), l = A(!1), r = A(!1), i = ee(a, n);
    return (d, u) => (f(), y(Zr, P(s(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (l.value || (p = s(o).triggerElement.value) == null || p.focus(), c.preventDefault()), l.value = !1, r.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = async (c) => {
        var p;
        n("interactOutside", c), c.defaultPrevented || (l.value = !0, c.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const _ = c.target;
        (p = s(o).triggerElement.value) != null && p.contains(_) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && r.value && c.preventDefault();
      })
    }), {
      default: v(() => [
        b(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Iv = /* @__PURE__ */ g({
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
    const a = t, n = e, o = Ya(), l = ee(a, n), { forwardRef: r } = N();
    return o.contentId || (o.contentId = we(void 0, "radix-vue-popover-content")), (i, d) => (f(), y(s(Me), {
      present: i.forceMount || s(o).open.value
    }, {
      default: v(() => [
        s(o).modal.value ? (f(), y(Mv, P({ key: 0 }, s(l), { ref: s(r) }), {
          default: v(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), y(Tv, P({ key: 1 }, s(l), { ref: s(r) }), {
          default: v(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function Rv(t) {
  const e = $(() => t.start.value ? !!t.isDateDisabled(t.start.value) : !1), a = $(() => t.end.value ? !!t.isDateDisabled(t.end.value) : !1), n = $(
    () => e.value || a.value ? !1 : !!(t.start.value && t.end.value && Ct(t.end.value, t.start.value))
  ), o = (d) => t.start.value ? Be(t.start.value, d) : !1, l = (d) => t.end.value ? Be(t.end.value, d) : !1, r = (d) => t.start.value && Be(t.start.value, d) || t.end.value && Be(t.end.value, d) ? !0 : t.end.value && t.start.value ? uu(d, t.start.value, t.end.value) : !1, i = $(() => {
    if (t.start.value && t.end.value || !t.start.value || !t.focusedValue.value)
      return null;
    const d = Ct(t.start.value, t.focusedValue.value), u = d ? t.start.value : t.focusedValue.value, c = d ? t.focusedValue.value : t.start.value;
    return Be(u, c) ? {
      start: u,
      end: c
    } : fu(u, c, t.isDateUnavailable, t.isDateDisabled) ? {
      start: u,
      end: c
    } : null;
  });
  return {
    isInvalid: n,
    isSelected: r,
    highlightedRange: i,
    isSelectionStart: o,
    isSelectionEnd: l,
    isHighlightedStart: (d) => !i.value || !i.value.start ? !1 : Be(i.value.start, d),
    isHighlightedEnd: (d) => !i.value || !i.value.end ? !1 : Be(i.value.end, d)
  };
}
const Vv = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Fv = {
  role: "heading",
  "aria-level": "2"
}, [ga, Lv] = ne("RangeCalendarRoot"), Nv = /* @__PURE__ */ g({
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
      readonly: l,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: d,
      weekdayFormat: u,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: _,
      isDateUnavailable: m,
      isDateDisabled: x,
      calendarLabel: h,
      maxValue: w,
      minValue: C,
      locale: S,
      dir: k,
      nextPage: E,
      prevPage: O
    } = fe(a), { primitiveElement: R, currentElement: M } = ca(), U = ot(k), z = A(), B = A(), I = pe(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), V = mr({
      defaultPlaceholder: a.placeholder,
      defaultValue: I.value.start,
      locale: a.locale
    }), Y = A(I.value.start), G = A(I.value.end), ae = pe(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? V.copy(),
      passive: a.placeholder === void 0
    });
    function ce(ve) {
      ae.value = ve.copy();
    }
    const {
      fullCalendarLabel: he,
      headingValue: ye,
      isDateDisabled: j,
      isDateUnavailable: oe,
      isNextButtonDisabled: de,
      isPrevButtonDisabled: Ve,
      grid: Ye,
      weekdays: mt,
      isOutsideVisibleView: ht,
      nextPage: wa,
      prevPage: Te,
      formatter: Pe
    } = Rr({
      locale: S,
      placeholder: ae,
      weekStartsOn: d,
      fixedWeeks: c,
      numberOfMonths: p,
      minValue: C,
      maxValue: w,
      disabled: o,
      weekdayFormat: u,
      pagedNavigation: i,
      isDateDisabled: x.value,
      isDateUnavailable: m.value,
      calendarLabel: h,
      nextPage: E,
      prevPage: O
    }), {
      isInvalid: qe,
      isSelected: ie,
      highlightedRange: De,
      isSelectionStart: lt,
      isSelectionEnd: xa,
      isHighlightedStart: Ui,
      isHighlightedEnd: Ki
    } = Rv({
      start: Y,
      end: G,
      isDateDisabled: j,
      isDateUnavailable: oe,
      focusedValue: B
    });
    return X(I, (ve) => {
      ve.start && (!Y.value || !Qe(Y.value, ve.start)) && (Y.value = ve.start.copy()), ve.end && (!G.value || !Qe(G.value, ve.end)) && (G.value = ve.end.copy());
    }), X(Y, (ve) => {
      ve && !Qe(ve, ae.value) && ce(ve), n("update:startValue", ve);
    }), X([Y, G], ([ve, gt]) => {
      const Fe = I.value;
      if (!(Fe && Fe.start && Fe.end && ve && gt && Qe(Fe.start, ve) && Qe(Fe.end, gt)))
        if (ve && gt) {
          if (Fe.start && Fe.end && Qe(Fe.start, ve) && Qe(Fe.end, gt))
            return;
          Ct(gt, ve) ? I.value = {
            start: gt.copy(),
            end: ve.copy()
          } : I.value = {
            start: ve.copy(),
            end: gt.copy()
          };
        } else Fe.start && Fe.end && (I.value = {
          start: void 0,
          end: void 0
        });
    }), Lv({
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
      readonly: l,
      preventDeselect: _,
      fullCalendarLabel: he,
      headingValue: ye,
      isInvalid: qe,
      isDateDisabled: j,
      highlightedRange: De,
      focusedValue: B,
      lastPressedDateValue: z,
      isSelected: ie,
      isSelectionEnd: xa,
      isSelectionStart: lt,
      isNextButtonDisabled: de,
      isPrevButtonDisabled: Ve,
      isOutsideVisibleView: ht,
      nextPage: wa,
      prevPage: Te,
      parentElement: M,
      onPlaceholderChange: ce,
      locale: S,
      dir: U,
      isHighlightedStart: Ui,
      isHighlightedEnd: Ki
    }), ue(() => {
      r.value && hr(M.value);
    }), (ve, gt) => (f(), y(s(F), {
      ref_key: "primitiveElement",
      ref: R,
      as: ve.as,
      "as-child": ve.asChild,
      role: "application",
      "aria-label": s(he),
      "data-readonly": s(l) ? "" : void 0,
      "data-disabled": s(o) ? "" : void 0,
      "data-invalid": s(qe) ? "" : void 0,
      dir: s(U)
    }, {
      default: v(() => [
        re("div", Vv, [
          re("div", Fv, Q(s(he)), 1)
        ]),
        b(ve.$slots, "default", {
          date: s(ae),
          grid: s(Ye),
          weekDays: s(mt),
          weekStartsOn: s(d),
          locale: s(S),
          fixedWeeks: s(c)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), zv = /* @__PURE__ */ g({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uv = /* @__PURE__ */ g({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = ga();
    return (n, o) => (f(), y(s(F), P(e, {
      "data-disabled": s(a).disabled.value ? "" : void 0
    }), {
      default: v(() => [
        b(n.$slots, "default", {
          headingValue: s(a).headingValue.value
        }, () => [
          q(Q(s(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Kv = /* @__PURE__ */ g({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(t) {
    const e = t, a = ga(), n = $(() => a.disabled.value ? !0 : void 0), o = $(() => a.readonly.value ? !0 : void 0);
    return (l, r) => (f(), y(s(F), P(e, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: v(() => [
        b(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Wv = /* @__PURE__ */ g({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(t) {
    const e = ga();
    return (a, n) => {
      var o, l;
      return f(), y(s(F), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": s(e).isSelected(a.date) ? !0 : void 0,
        "aria-disabled": s(e).isDateDisabled(a.date) || ((l = (o = s(e)).isDateUnavailable) == null ? void 0 : l.call(o, a.date)),
        "data-disabled": s(e).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: v(() => [
          b(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Hv = /* @__PURE__ */ g({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jv = /* @__PURE__ */ g({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = $(() => n.disabled.value || n.isNextButtonDisabled(e.step, e.nextPage)), n = ga();
    return (o, l) => (f(), y(s(F), P(e, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (r) => s(n).nextPage(e.step, e.nextPage))
    }), {
      default: v(() => [
        b(o.$slots, "default", {}, () => [
          q("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Gv = /* @__PURE__ */ g({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = $(() => n.disabled.value || n.isPrevButtonDisabled(e.step, e.prevPage)), n = ga();
    return (o, l) => (f(), y(s(F), P(e, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (r) => s(n).prevPage(e.step, e.prevPage))
    }), {
      default: v(() => [
        b(o.$slots, "default", {}, () => [
          q("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Yv = /* @__PURE__ */ g({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), P(e, { "aria-hidden": "true" }), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qv = /* @__PURE__ */ g({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jv = /* @__PURE__ */ g({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qv = /* @__PURE__ */ g({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = ga(), n = Br(), { primitiveElement: o, currentElement: l } = ca(), r = $(() => a.formatter.custom(Ue(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = $(() => a.isDateDisabled(e.day)), d = $(() => {
      var z;
      return (z = a.isDateUnavailable) == null ? void 0 : z.call(a, e.day);
    }), u = $(() => a.isSelected(e.day)), c = $(() => a.isSelectionStart(e.day)), p = $(() => a.isSelectionEnd(e.day)), _ = $(() => a.isHighlightedStart(e.day)), m = $(() => a.isHighlightedEnd(e.day)), x = $(() => a.highlightedRange.value ? du(e.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), h = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", w = $(() => Vl(e.day, Vt())), C = $(() => !Rl(e.day, e.month)), S = $(
      () => a.isOutsideVisibleView(e.day)
    ), k = $(() => e.day.day.toLocaleString(a.locale.value)), E = $(() => !a.disabled.value && Be(e.day, a.placeholder.value));
    function O(z, B) {
      var I;
      if (!a.readonly.value && !(a.isDateDisabled(B) || (I = a.isDateUnavailable) != null && I.call(a, B))) {
        if (a.lastPressedDateValue.value = B.copy(), a.startValue.value && a.highlightedRange.value === null) {
          if (Be(B, a.startValue.value) && !a.preventDeselect.value && !a.endValue.value) {
            a.startValue.value = void 0, a.onPlaceholderChange(B);
            return;
          } else if (!a.endValue.value) {
            z.preventDefault(), a.lastPressedDateValue.value && Be(a.lastPressedDateValue.value, B) && (a.startValue.value = B.copy());
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
    function R(z) {
      O(z, e.day);
    }
    function M() {
      var z;
      a.isDateDisabled(e.day) || (z = a.isDateUnavailable) != null && z.call(a, e.day) || (a.focusedValue.value = e.day.copy());
    }
    function U(z) {
      z.preventDefault(), z.stopPropagation();
      const B = a.parentElement.value, I = B ? Array.from(B.querySelectorAll(h)) : [];
      let V = I.indexOf(l.value);
      const Y = 7, G = a.dir.value === "rtl" ? -1 : 1;
      switch (z.code) {
        case n.ARROW_RIGHT:
          V += G;
          break;
        case n.ARROW_LEFT:
          V -= G;
          break;
        case n.ARROW_UP:
          V -= Y;
          break;
        case n.ARROW_DOWN:
          V += Y;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          O(z, e.day);
          return;
        default:
          return;
      }
      if (V >= 0 && V < I.length) {
        I[V].focus();
        return;
      }
      if (V < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), se(() => {
          const ae = B ? Array.from(B.querySelectorAll(h)) : [];
          ae[ae.length - Math.abs(V)].focus();
        });
        return;
      }
      if (V >= I.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), se(() => {
          (B ? Array.from(B.querySelectorAll(h)) : [])[V - I.length].focus();
        });
      }
    }
    return (z, B) => (f(), y(s(F), P({
      ref_key: "primitiveElement",
      ref: o
    }, e, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": u.value ? !0 : void 0,
      "aria-disabled": C.value || i.value || d.value ? !0 : void 0,
      "data-highlighted": x.value ? "" : void 0,
      "data-selection-start": c.value ? !0 : void 0,
      "data-selection-end": p.value ? !0 : void 0,
      "data-highlighted-start": _.value ? !0 : void 0,
      "data-highlighted-end": m.value ? !0 : void 0,
      "data-selected": u.value ? !0 : void 0,
      "data-outside-visible-view": S.value ? "" : void 0,
      "data-value": z.day.toString(),
      "data-disabled": i.value || C.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": w.value ? "" : void 0,
      "data-outside-month": C.value ? "" : void 0,
      "data-focused": E.value ? "" : void 0,
      tabindex: E.value ? 0 : C.value || i.value ? void 0 : -1,
      onClick: R,
      onFocusin: M,
      onMouseenter: M,
      onKeydown: Ke(U, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: v(() => [
        b(z.$slots, "default", { dayValue: k.value }, () => [
          q(Q(k.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
}), Zv = ["default-value"], Xv = /* @__PURE__ */ g({
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
    const e = t, { value: a } = fe(e), n = A();
    return (o, l) => (f(), y(s(ja), { "as-child": "" }, {
      default: v(() => [
        ia(re("select", P({
          ref_key: "selectElement",
          ref: n
        }, e, {
          "onUpdate:modelValue": l[0] || (l[0] = (r) => Ra(a) ? a.value = r : null),
          "default-value": s(a)
        }), [
          b(o.$slots, "default")
        ], 16, Zv), [
          [Ji, s(a)]
        ])
      ]),
      _: 3
    }));
  }
}), em = {
  key: 0,
  value: ""
}, [Ut, Xr] = ne("SelectRoot"), [tm, am] = ne("SelectRoot"), nm = /* @__PURE__ */ g({
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
    const a = t, n = e, o = pe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), l = pe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = A(), i = A(), d = A({
      x: 0,
      y: 0
    }), u = A(!1), { required: c, disabled: p, dir: _ } = fe(a), m = ot(_);
    Xr({
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
      open: l,
      required: c,
      onOpenChange: (C) => {
        l.value = C;
      },
      dir: m,
      triggerPointerDownPosRef: d,
      disabled: p
    });
    const x = Ua(r), h = A(/* @__PURE__ */ new Set()), w = $(() => Array.from(h.value).map((C) => {
      var S;
      return (S = C.props) == null ? void 0 : S.value;
    }).join(";"));
    return am({
      onNativeOptionAdd: (C) => {
        h.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        h.value.delete(C);
      }
    }), (C, S) => (f(), y(s(va), null, {
      default: v(() => [
        b(C.$slots, "default", {
          modelValue: s(o),
          open: s(l)
        }),
        s(x) ? (f(), y(Xv, P({ key: w.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: s(p),
          value: s(o),
          onChange: S[0] || (S[0] = (k) => o.value = k.target.value)
        }), {
          default: v(() => [
            s(o) === void 0 ? (f(), L("option", em)) : J("", !0),
            (f(!0), L(Z, null, ge(Array.from(h.value), (k) => (f(), y(Oe(k), P({ ref_for: !0 }, k.props, {
              key: k.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : J("", !0)
      ]),
      _: 3
    }));
  }
}), om = [" ", "Enter", "ArrowUp", "ArrowDown"], sm = [" ", "Enter"], ze = 10;
function ei(t) {
  return t === "" || pn(t);
}
const lm = /* @__PURE__ */ g({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Ut(), n = $(() => {
      var m;
      return ((m = a.disabled) == null ? void 0 : m.value) || e.disabled;
    }), { forwardRef: o, currentElement: l } = N();
    a.contentId || (a.contentId = we(void 0, "radix-vue-select-content")), ue(() => {
      a.triggerElement = l;
    });
    const { injectCollection: r } = ua(), i = r(), { search: d, handleTypeaheadSearch: u, resetTypeahead: c } = as(i);
    function p() {
      n.value || (a.onOpenChange(!0), c());
    }
    function _(m) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, x) => (f(), y(s(Rn), { "as-child": "" }, {
      default: v(() => {
        var h, w, C, S;
        return [
          D(s(F), {
            ref: s(o),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": s(a).contentId,
            "aria-expanded": s(a).open.value || !1,
            "aria-required": (h = s(a).required) == null ? void 0 : h.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (w = s(a)) == null ? void 0 : w.dir.value,
            "data-state": (C = s(a)) != null && C.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": s(ei)((S = s(a).modelValue) == null ? void 0 : S.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: x[0] || (x[0] = (k) => {
              var E;
              (E = k == null ? void 0 : k.currentTarget) == null || E.focus();
            }),
            onPointerdown: x[1] || (x[1] = (k) => {
              if (k.pointerType === "touch")
                return k.preventDefault();
              const E = k.target;
              E.hasPointerCapture(k.pointerId) && E.releasePointerCapture(k.pointerId), k.button === 0 && k.ctrlKey === !1 && (_(k), k.preventDefault());
            }),
            onPointerup: x[2] || (x[2] = Ce(
              (k) => {
                k.pointerType === "touch" && _(k);
              },
              ["prevent"]
            )),
            onKeydown: x[3] || (x[3] = (k) => {
              const E = s(d) !== "";
              !(k.ctrlKey || k.altKey || k.metaKey) && k.key.length === 1 && E && k.key === " " || (s(u)(k.key), s(om).includes(k.key) && (p(), k.preventDefault()));
            })
          }, {
            default: v(() => [
              b(m.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), rm = /* @__PURE__ */ g({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Wa), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ys, im] = ne("SelectItemAlignedPosition"), dm = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, { injectCollection: o } = ua(), l = Ut(), r = Kt(), i = o(), d = A(!1), u = A(!0), c = A(), { forwardRef: p, currentElement: _ } = N(), { viewport: m, selectedItem: x, selectedItemText: h, focusSelectedItem: w } = r;
    function C() {
      if (l.triggerElement.value && l.valueElement.value && c.value && _.value && m != null && m.value && x != null && x.value && h != null && h.value) {
        const E = l.triggerElement.value.getBoundingClientRect(), O = _.value.getBoundingClientRect(), R = l.valueElement.value.getBoundingClientRect(), M = h.value.getBoundingClientRect();
        if (l.dir.value !== "rtl") {
          const Te = M.left - O.left, Pe = R.left - Te, qe = E.left - Pe, ie = E.width + qe, De = Math.max(ie, O.width), lt = window.innerWidth - ze, xa = xn(Pe, ze, Math.max(ze, lt - De));
          c.value.style.minWidth = `${ie}px`, c.value.style.left = `${xa}px`;
        } else {
          const Te = O.right - M.right, Pe = window.innerWidth - R.right - Te, qe = window.innerWidth - E.right - Pe, ie = E.width + qe, De = Math.max(ie, O.width), lt = window.innerWidth - ze, xa = xn(
            Pe,
            ze,
            Math.max(ze, lt - De)
          );
          c.value.style.minWidth = `${ie}px`, c.value.style.right = `${xa}px`;
        }
        const U = i.value, z = window.innerHeight - ze * 2, B = m.value.scrollHeight, I = window.getComputedStyle(_.value), V = Number.parseInt(
          I.borderTopWidth,
          10
        ), Y = Number.parseInt(I.paddingTop, 10), G = Number.parseInt(
          I.borderBottomWidth,
          10
        ), ae = Number.parseInt(
          I.paddingBottom,
          10
        ), ce = V + Y + B + ae + G, he = Math.min(
          x.value.offsetHeight * 5,
          ce
        ), ye = window.getComputedStyle(m.value), j = Number.parseInt(ye.paddingTop, 10), oe = Number.parseInt(
          ye.paddingBottom,
          10
        ), de = E.top + E.height / 2 - ze, Ve = z - de, Ye = x.value.offsetHeight / 2, mt = x.value.offsetTop + Ye, ht = V + Y + mt, wa = ce - ht;
        if (ht <= de) {
          const Te = x.value === U[U.length - 1];
          c.value.style.bottom = "0px";
          const Pe = _.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, qe = Math.max(
            Ve,
            Ye + (Te ? oe : 0) + Pe + G
          ), ie = ht + qe;
          c.value.style.height = `${ie}px`;
        } else {
          const Te = x.value === U[0];
          c.value.style.top = "0px";
          const Pe = Math.max(
            de,
            V + m.value.offsetTop + (Te ? j : 0) + Ye
          ) + wa;
          c.value.style.height = `${Pe}px`, m.value.scrollTop = ht - de + m.value.offsetTop;
        }
        c.value.style.margin = `${ze}px 0`, c.value.style.minHeight = `${he}px`, c.value.style.maxHeight = `${z}px`, n("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const S = A("");
    ue(async () => {
      await se(), C(), _.value && (S.value = window.getComputedStyle(_.value).zIndex);
    });
    function k(E) {
      E && u.value === !0 && (C(), w == null || w(), u.value = !1);
    }
    return im({
      contentWrapper: c,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: k
    }), (E, O) => (f(), L("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: St({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: S.value
      })
    }, [
      D(s(F), P({
        ref: s(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...E.$attrs, ...a }), {
        default: v(() => [
          b(E.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), um = /* @__PURE__ */ g({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: ze },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = le(t);
    return (a, n) => (f(), y(s(la), P(s(e), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ya = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Kt, cm] = ne("SelectContent"), pm = /* @__PURE__ */ g({
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
    const a = t, n = e, o = Ut();
    ts(), za(a.bodyLock);
    const { createCollection: l } = ua(), r = A();
    Ka(r);
    const i = l(r), { search: d, handleTypeaheadSearch: u } = as(i), c = A(), p = A(), _ = A(), m = A(!1), x = A(!1);
    function h() {
      p.value && r.value && $o([p.value, r.value]);
    }
    X(m, () => {
      h();
    });
    const { onOpenChange: w, triggerPointerDownPosRef: C } = o;
    be((O) => {
      if (!r.value)
        return;
      let R = { x: 0, y: 0 };
      const M = (z) => {
        var B, I;
        R = {
          x: Math.abs(
            Math.round(z.pageX) - (((B = C.value) == null ? void 0 : B.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(z.pageY) - (((I = C.value) == null ? void 0 : I.y) ?? 0)
          )
        };
      }, U = (z) => {
        var B;
        z.pointerType !== "touch" && (R.x <= 10 && R.y <= 10 ? z.preventDefault() : (B = r.value) != null && B.contains(z.target) || w(!1), document.removeEventListener("pointermove", M), C.value = null);
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
      const R = O.ctrlKey || O.altKey || O.metaKey;
      if (O.key === "Tab" && O.preventDefault(), !R && O.key.length === 1 && u(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
        let M = i.value;
        if (["ArrowUp", "End"].includes(O.key) && (M = M.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
          const U = O.target, z = M.indexOf(U);
          M = M.slice(z + 1);
        }
        setTimeout(() => $o(M)), O.preventDefault();
      }
    }
    const k = $(() => a.position === "popper" ? a : {}), E = le(k.value);
    return cm({
      content: r,
      viewport: c,
      onViewportChange: (O) => {
        c.value = O;
      },
      itemRefCallback: (O, R, M) => {
        var U, z;
        const B = !x.value && !M;
        (((U = o.modelValue) == null ? void 0 : U.value) !== void 0 && ((z = o.modelValue) == null ? void 0 : z.value) === R || B) && (p.value = O, B && (x.value = !0));
      },
      selectedItem: p,
      selectedItemText: _,
      onItemLeave: () => {
        var O;
        (O = r.value) == null || O.focus();
      },
      itemTextRefCallback: (O, R, M) => {
        var U, z;
        const B = !x.value && !M;
        (((U = o.modelValue) == null ? void 0 : U.value) !== void 0 && ((z = o.modelValue) == null ? void 0 : z.value) === R || B) && (_.value = O);
      },
      focusSelectedItem: h,
      position: a.position,
      isPositioned: m,
      searchRef: d
    }), (O, R) => (f(), y(s(In), {
      "as-child": "",
      onMountAutoFocus: R[6] || (R[6] = Ce(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: R[7] || (R[7] = (M) => {
        var U;
        n("closeAutoFocus", M), !M.defaultPrevented && ((U = s(o).triggerElement.value) == null || U.focus({ preventScroll: !0 }), M.preventDefault());
      })
    }, {
      default: v(() => [
        D(s(pa), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: R[2] || (R[2] = Ce(() => {
          }, ["prevent"])),
          onDismiss: R[3] || (R[3] = (M) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: R[4] || (R[4] = (M) => n("escapeKeyDown", M)),
          onPointerDownOutside: R[5] || (R[5] = (M) => n("pointerDownOutside", M))
        }, {
          default: v(() => [
            (f(), y(Oe(
              O.position === "popper" ? um : dm
            ), P({ ...O.$attrs, ...s(E) }, {
              id: s(o).contentId,
              ref: (M) => {
                r.value = s(Re)(M);
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
              onContextmenu: R[0] || (R[0] = Ce(() => {
              }, ["prevent"])),
              onPlaced: R[1] || (R[1] = (M) => m.value = !0),
              onKeydown: S
            }), {
              default: v(() => [
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
}), fm = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(t) {
    return Xr(t.context), (e, a) => b(e.$slots, "default");
  }
}), vm = { key: 1 }, mm = /* @__PURE__ */ g({
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
    const a = t, n = ee(a, e), o = Ut(), l = A();
    ue(() => {
      l.value = new DocumentFragment();
    });
    const r = A(), i = $(() => a.forceMount || o.open.value);
    return (d, u) => {
      var c;
      return i.value ? (f(), y(s(Me), {
        key: 0,
        ref_key: "presenceRef",
        ref: r,
        present: !0
      }, {
        default: v(() => [
          D(pm, K(H({ ...s(n), ...d.$attrs })), {
            default: v(() => [
              b(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = r.value) != null && c.present) && l.value ? (f(), L("div", vm, [
        (f(), y(Bn, { to: l.value }, [
          D(fm, { context: s(o) }, {
            default: v(() => [
              b(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : J("", !0);
    };
  }
}), hm = /* @__PURE__ */ g({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), P({ "aria-hidden": "true" }, e), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ti, gm] = ne("SelectItem"), ym = /* @__PURE__ */ g({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { disabled: a } = fe(e), n = Ut(), o = Kt(ya), { forwardRef: l, currentElement: r } = N(), i = $(() => {
      var h;
      return ((h = n.modelValue) == null ? void 0 : h.value) === e.value;
    }), d = A(!1), u = A(e.textValue ?? ""), c = we(void 0, "radix-vue-select-item-text");
    async function p(h) {
      await se(), !(h != null && h.defaultPrevented) && (a.value || (n.onValueChange(e.value), n.onOpenChange(!1)));
    }
    async function _(h) {
      var w;
      await se(), !h.defaultPrevented && (a.value ? (w = o.onItemLeave) == null || w.call(o) : h.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(h) {
      var w;
      await se(), !h.defaultPrevented && h.currentTarget === xe() && ((w = o.onItemLeave) == null || w.call(o));
    }
    async function x(h) {
      var w;
      await se(), !(h.defaultPrevented || ((w = o.searchRef) == null ? void 0 : w.value) !== "" && h.key === " ") && (sm.includes(h.key) && p(), h.key === " " && h.preventDefault());
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
    }), gm({
      value: e.value,
      disabled: a,
      textId: c,
      isSelected: i,
      onItemTextChange: (h) => {
        u.value = ((u.value || (h == null ? void 0 : h.textContent)) ?? "").trim();
      }
    }), (h, w) => (f(), y(s(F), {
      ref: s(l),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": s(c),
      "data-highlighted": d.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": s(a) || void 0,
      "data-disabled": s(a) ? "" : void 0,
      tabindex: s(a) ? void 0 : -1,
      as: h.as,
      "as-child": h.asChild,
      onFocus: w[0] || (w[0] = (C) => d.value = !0),
      onBlur: w[1] || (w[1] = (C) => d.value = !1),
      onPointerup: p,
      onPointerdown: w[2] || (w[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: w[3] || (w[3] = Ce(() => {
      }, ["prevent", "stop"])),
      onPointermove: _,
      onPointerleave: m,
      onKeydown: x
    }, {
      default: v(() => [
        b(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), bm = /* @__PURE__ */ g({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = ti();
    return (n, o) => s(a).isSelected.value ? (f(), y(s(F), P({
      key: 0,
      "aria-hidden": "true"
    }, e), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : J("", !0);
  }
}), [_m, wm] = ne("SelectGroup"), xm = /* @__PURE__ */ g({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = we(void 0, "radix-vue-select-group");
    return wm({ id: a }), (n, o) => (f(), y(s(F), P({ role: "group" }, e, { "aria-labelledby": s(a) }), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), $m = /* @__PURE__ */ g({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = _m({ id: "" });
    return (n, o) => (f(), y(s(F), P(e, {
      id: s(a).id
    }), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ai = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = Ut(), n = Kt(ya), o = tm(), l = ti(), { forwardRef: r, currentElement: i } = N(), d = $(() => {
      var u;
      return Ze("option", {
        key: l.value,
        value: l.value,
        disabled: l.disabled.value,
        textContent: (u = i.value) == null ? void 0 : u.textContent
      });
    });
    return ue(() => {
      i.value && (l.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        l.value,
        l.disabled.value
      ), o.onNativeOptionAdd(d.value));
    }), To(() => {
      o.onNativeOptionRemove(d.value);
    }), (u, c) => (f(), L(Z, null, [
      D(s(F), P({
        id: s(l).textId,
        ref: s(r)
      }, { ...e, ...u.$attrs }, { "data-item-text": "" }), {
        default: v(() => [
          b(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(l).isSelected.value && s(a).valueElement.value && !s(a).valueElementHasChildren.value ? (f(), y(Bn, {
        key: 0,
        to: s(a).valueElement.value
      }, [
        b(u.$slots, "default")
      ], 8, ["to"])) : J("", !0)
    ], 64));
  }
}), Cm = /* @__PURE__ */ g({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { nonce: a } = fe(e), n = xf(a), o = Kt(ya), l = o.position === "item-aligned" ? ys() : void 0, { forwardRef: r, currentElement: i } = N();
    ue(() => {
      o == null || o.onViewportChange(i.value);
    });
    const d = A(0);
    function u(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: _, contentWrapper: m } = l ?? {};
      if (_ != null && _.value && m != null && m.value) {
        const x = Math.abs(d.value - p.scrollTop);
        if (x > 0) {
          const h = window.innerHeight - ze * 2, w = Number.parseFloat(
            m.value.style.minHeight
          ), C = Number.parseFloat(m.value.style.height), S = Math.max(w, C);
          if (S < h) {
            const k = S + x, E = Math.min(h, k), O = k - E;
            m.value.style.height = `${E}px`, m.value.style.bottom === "0px" && (p.scrollTop = O > 0 ? O : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = p.scrollTop;
    }
    return (c, p) => (f(), L(Z, null, [
      D(s(F), P({
        ref: s(r),
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
        default: v(() => [
          b(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      D(s(F), {
        as: "style",
        nonce: s(n)
      }, {
        default: v(() => [
          q(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), ni = /* @__PURE__ */ g({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(t, { emit: e }) {
    const a = e, { injectCollection: n } = ua(), o = n(), l = Kt(ya), r = A(null);
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
      (c = l.onItemLeave) == null || c.call(l), r.value === null && (r.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    return To(() => i()), (c, p) => {
      var _;
      return f(), y(s(F), P({
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
        default: v(() => [
          b(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), km = /* @__PURE__ */ g({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = Kt(ya), a = e.position === "item-aligned" ? ys() : void 0, { forwardRef: n, currentElement: o } = N(), l = A(!1);
    return be((r) => {
      var i, d;
      if ((i = e.viewport) != null && i.value && (d = e.isPositioned) != null && d.value) {
        let u = function() {
          l.value = c.scrollTop > 0;
        };
        const c = e.viewport.value;
        u(), c.addEventListener("scroll", u), r(() => c.removeEventListener("scroll", u));
      }
    }), X(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => l.value ? (f(), y(ni, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: u } = s(e);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop - u.value.offsetHeight);
      })
    }, {
      default: v(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : J("", !0);
  }
}), Bm = /* @__PURE__ */ g({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = Kt(ya), a = e.position === "item-aligned" ? ys() : void 0, { forwardRef: n, currentElement: o } = N(), l = A(!1);
    return be((r) => {
      var i, d;
      if ((i = e.viewport) != null && i.value && (d = e.isPositioned) != null && d.value) {
        let u = function() {
          const p = c.scrollHeight - c.clientHeight;
          l.value = Math.ceil(c.scrollTop) < p;
        };
        const c = e.viewport.value;
        u(), c.addEventListener("scroll", u), r(() => c.removeEventListener("scroll", u));
      }
    }), X(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => l.value ? (f(), y(ni, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: u } = s(e);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop + u.value.offsetHeight);
      })
    }, {
      default: v(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : J("", !0);
  }
}), Dm = /* @__PURE__ */ g({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e, currentElement: a } = N(), n = Ut(), o = Cl();
    return Hi(() => {
      var l;
      const r = !!An((l = o == null ? void 0 : o.default) == null ? void 0 : l.call(o)).length;
      n.onValueElementHasChildrenChange(r);
    }), ue(() => {
      n.valueElement = a;
    }), (l, r) => (f(), y(s(F), {
      ref: s(e),
      as: l.as,
      "as-child": l.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: v(() => {
        var i;
        return [
          s(ei)((i = s(n).modelValue) == null ? void 0 : i.value) ? (f(), L(Z, { key: 0 }, [
            q(Q(l.placeholder), 1)
          ], 64)) : b(l.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Sm = /* @__PURE__ */ g({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return (e, a) => (f(), y(s(F), {
      "aria-hidden": "true",
      as: e.as,
      "as-child": e.asChild
    }, {
      default: v(() => [
        b(e.$slots, "default", {}, () => [
          q("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Pm = /* @__PURE__ */ g({
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
    ), l = $(
      () => o.value === "vertical" ? e.orientation : void 0
    ), r = $(
      () => e.decorative ? { role: "none" } : { "aria-orientation": l.value, role: "separator" }
    );
    return (i, d) => (f(), y(s(F), P({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": o.value
    }, r.value), {
      default: v(() => [
        b(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), Em = /* @__PURE__ */ g({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(Pm, K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Om(t = [], e, a) {
  const n = [...t];
  return n[a] = e, n.sort((o, l) => o - l);
}
function oi(t, e, a) {
  const n = 100 / (a - e) * (t - e);
  return xn(n, 0, 100);
}
function Am(t, e) {
  return e > 2 ? `Value ${t + 1} of ${e}` : e === 2 ? ["Minimum", "Maximum"][t] : void 0;
}
function Mm(t, e) {
  if (t.length === 1)
    return 0;
  const a = t.map((o) => Math.abs(o - e)), n = Math.min(...a);
  return a.indexOf(n);
}
function Tm(t, e, a) {
  const n = t / 2, o = bs([0, 50], [0, n]);
  return (n - o(e) * a) * a;
}
function Im(t) {
  return t.slice(0, -1).map((e, a) => t[a + 1] - e);
}
function Rm(t, e) {
  if (e > 0) {
    const a = Im(t);
    return Math.min(...a) >= e;
  }
  return !0;
}
function bs(t, e) {
  return (a) => {
    if (t[0] === t[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (t[1] - t[0]);
    return e[0] + n * (a - t[0]);
  };
}
function Vm(t) {
  return (String(t).split(".")[1] || "").length;
}
function Fm(t, e) {
  const a = 10 ** e;
  return Math.round(t * a) / a;
}
const si = ["PageUp", "PageDown"], li = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], ri = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [ii, di] = ne(["SliderVertical", "SliderHorizontal"]), ui = /* @__PURE__ */ g({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Fn();
    return (l, r) => (f(), y(s(F), P({ "data-slider-impl": "" }, a, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : s(si).concat(s(li)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
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
        b(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lm = /* @__PURE__ */ g({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, { max: o, min: l, dir: r, inverted: i } = fe(a), { forwardRef: d, currentElement: u } = N(), c = A(), p = $(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function _(m) {
      const x = c.value || u.value.getBoundingClientRect(), h = [0, x.width], w = p.value ? [l.value, o.value] : [o.value, l.value], C = bs(h, w);
      return c.value = x, C(m - x.left);
    }
    return di({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, x) => (f(), y(ui, {
      ref: s(d),
      dir: s(r),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: x[0] || (x[0] = (h) => {
        const w = _(h.clientX);
        n("slideStart", w);
      }),
      onSlideMove: x[1] || (x[1] = (h) => {
        const w = _(h.clientX);
        n("slideMove", w);
      }),
      onSlideEnd: x[2] || (x[2] = () => {
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: x[3] || (x[3] = (h) => {
        const w = p.value ? "from-left" : "from-right", C = s(ri)[w].includes(h.key);
        n("stepKeyDown", h, C ? -1 : 1);
      }),
      onEndKeyDown: x[4] || (x[4] = (h) => n("endKeyDown", h)),
      onHomeKeyDown: x[5] || (x[5] = (h) => n("homeKeyDown", h))
    }, {
      default: v(() => [
        b(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), Nm = /* @__PURE__ */ g({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, { max: o, min: l, inverted: r } = fe(a), { forwardRef: i, currentElement: d } = N(), u = A(), c = $(() => !r.value);
    function p(_) {
      const m = u.value || d.value.getBoundingClientRect(), x = [0, m.height], h = c.value ? [o.value, l.value] : [l.value, o.value], w = bs(x, h);
      return u.value = m, w(_ - m.top);
    }
    return di({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (_, m) => (f(), y(ui, {
      ref: s(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: m[0] || (m[0] = (x) => {
        const h = p(x.clientY);
        n("slideStart", h);
      }),
      onSlideMove: m[1] || (m[1] = (x) => {
        const h = p(x.clientY);
        n("slideMove", h);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        u.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (x) => {
        const h = c.value ? "from-bottom" : "from-top", w = s(ri)[h].includes(x.key);
        n("stepKeyDown", x, w ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (x) => n("endKeyDown", x)),
      onHomeKeyDown: m[5] || (m[5] = (x) => n("homeKeyDown", x))
    }, {
      default: v(() => [
        b(_.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), zm = ["value", "name", "disabled", "step"], [Fn, Um] = ne("SliderRoot"), Km = /* @__PURE__ */ g({
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
    const a = t, n = e, { min: o, max: l, step: r, minStepsBetweenThumbs: i, orientation: d, disabled: u, dir: c } = fe(a), p = ot(c), { forwardRef: _, currentElement: m } = N(), x = Ua(m);
    ps();
    const h = pe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), w = A(0), C = A(h.value);
    function S(M) {
      const U = Mm(h.value, M);
      O(M, U);
    }
    function k(M) {
      O(M, w.value);
    }
    function E() {
      const M = C.value[w.value];
      h.value[w.value] !== M && n("valueCommit", Xi(h.value));
    }
    function O(M, U, { commit: z } = { commit: !1 }) {
      var B;
      const I = Vm(r.value), V = Fm(Math.round((M - o.value) / r.value) * r.value + o.value, I), Y = xn(V, o.value, l.value), G = Om(h.value, Y, U);
      if (Rm(G, i.value * r.value)) {
        w.value = G.indexOf(Y);
        const ae = String(G) !== String(h.value);
        ae && z && n("valueCommit", G), ae && ((B = R.value[w.value]) == null || B.focus(), h.value = G);
      }
    }
    const R = A([]);
    return Um({
      modelValue: h,
      valueIndexToChangeRef: w,
      thumbElements: R,
      orientation: d,
      min: o,
      max: l,
      disabled: u
    }), (M, U) => (f(), L(Z, null, [
      D(s(fs), null, {
        default: v(() => [
          (f(), y(Oe(s(d) === "horizontal" ? Lm : Nm), P(M.$attrs, {
            ref: s(_),
            "as-child": M.asChild,
            as: M.as,
            min: s(o),
            max: s(l),
            dir: s(p),
            inverted: M.inverted,
            "aria-disabled": s(u),
            "data-disabled": s(u) ? "" : void 0,
            onPointerdown: U[0] || (U[0] = () => {
              s(u) || (C.value = s(h));
            }),
            onSlideStart: U[1] || (U[1] = (z) => !s(u) && S(z)),
            onSlideMove: U[2] || (U[2] = (z) => !s(u) && k(z)),
            onSlideEnd: U[3] || (U[3] = (z) => !s(u) && E()),
            onHomeKeyDown: U[4] || (U[4] = (z) => !s(u) && O(s(o), 0, { commit: !0 })),
            onEndKeyDown: U[5] || (U[5] = (z) => !s(u) && O(s(l), s(h).length - 1, { commit: !0 })),
            onStepKeyDown: U[6] || (U[6] = (z, B) => {
              if (!s(u)) {
                const I = s(si).includes(z.key) || z.shiftKey && s(li).includes(z.key) ? 10 : 1, V = w.value, Y = s(h)[V], G = s(r) * I * B;
                O(Y + G, V, { commit: !0 });
              }
            })
          }), {
            default: v(() => [
              b(M.$slots, "default", { modelValue: s(h) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      s(x) ? (f(!0), L(Z, { key: 0 }, ge(s(h), (z, B) => (f(), L("input", {
        key: B,
        value: z,
        type: "number",
        style: { display: "none" },
        name: M.name ? M.name + (s(h).length > 1 ? "[]" : "") : void 0,
        disabled: s(u),
        step: s(r)
      }, null, 8, zm))), 128)) : J("", !0)
    ], 64));
  }
}), Wm = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Fn(), n = ii(), { forwardRef: o, currentElement: l } = N(), r = $(() => {
      var m, x;
      return (x = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : x[e.index];
    }), i = $(() => r.value === void 0 ? 0 : oi(r.value, a.min.value ?? 0, a.max.value ?? 100)), d = $(() => {
      var m, x;
      return Am(e.index, ((x = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : x.length) ?? 0);
    }), u = kr(l), c = $(() => u[n.size].value), p = $(() => c.value ? Tm(c.value, i.value, n.direction) : 0), _ = es();
    return ue(() => {
      a.thumbElements.value.push(l.value);
    }), Pt(() => {
      const m = a.thumbElements.value.findIndex((x) => x === l.value) ?? -1;
      a.thumbElements.value.splice(m, 1);
    }), (m, x) => (f(), y(s(Vn), null, {
      default: v(() => [
        D(s(F), P(m.$attrs, {
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
            display: !s(_) && r.value === void 0 ? "none" : void 0
          },
          onFocus: x[0] || (x[0] = () => {
            s(a).valueIndexToChangeRef.value = m.index;
          })
        }), {
          default: v(() => [
            b(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), Hm = /* @__PURE__ */ g({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { getItems: a } = vs(), { forwardRef: n, currentElement: o } = N(), l = $(() => o.value ? a().findIndex((r) => r.ref === o.value) : -1);
    return (r, i) => (f(), y(Wm, P({ ref: s(n) }, e, { index: l.value }), {
      default: v(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), jm = /* @__PURE__ */ g({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Fn();
    return N(), (a, n) => (f(), y(s(F), {
      "as-child": a.asChild,
      as: a.as,
      "data-disabled": s(e).disabled.value ? "" : void 0,
      "data-orientation": s(e).orientation.value
    }, {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), Gm = /* @__PURE__ */ g({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Fn(), a = ii();
    N();
    const n = $(() => {
      var r, i;
      return (i = (r = e.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (d) => oi(d, e.min.value, e.max.value)
      );
    }), o = $(() => e.modelValue.value.length > 1 ? Math.min(...n.value) : 0), l = $(() => 100 - Math.max(...n.value));
    return (r, i) => (f(), y(s(F), {
      "data-disabled": s(e).disabled.value ? "" : void 0,
      "data-orientation": s(e).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: St({
        [s(a).startEdge]: `${o.value}%`,
        [s(a).endEdge]: `${l.value}%`
      })
    }, {
      default: v(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function Ym() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
Ym();
const qm = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Jm, Qm] = ne("SwitchRoot"), Zm = /* @__PURE__ */ g({
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
    const a = t, n = e, { disabled: o } = fe(a), l = pe(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    });
    function r() {
      o.value || (l.value = !l.value);
    }
    const { forwardRef: i, currentElement: d } = N(), u = Ua(d), c = $(() => {
      var p;
      return a.id && d.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Qm({
      checked: l,
      toggleCheck: r,
      disabled: o
    }), (p, _) => (f(), L(Z, null, [
      D(s(F), P(p.$attrs, {
        id: p.id,
        ref: s(i),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || c.value,
        "aria-checked": s(l),
        "aria-required": p.required,
        "data-state": s(l) ? "checked" : "unchecked",
        "data-disabled": s(o) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        disabled: s(o),
        onClick: r,
        onKeydown: Ke(Ce(r, ["prevent"]), ["enter"])
      }), {
        default: v(() => [
          b(p.$slots, "default", { checked: s(l) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(u) ? (f(), L("input", {
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
      }, null, 8, qm)) : J("", !0)
    ], 64));
  }
}), Xm = /* @__PURE__ */ g({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Jm();
    return N(), (a, n) => {
      var o;
      return f(), y(s(F), {
        "data-state": (o = s(e).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": s(e).disabled.value ? "" : void 0,
        "as-child": a.asChild,
        as: a.as
      }, {
        default: v(() => [
          b(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [_s, eh] = ne("TabsRoot"), th = /* @__PURE__ */ g({
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
    const a = t, n = e, { orientation: o, dir: l } = fe(a), r = ot(l);
    N();
    const i = pe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), d = A();
    return eh({
      modelValue: i,
      changeModelValue: (u) => {
        i.value = u;
      },
      orientation: o,
      dir: r,
      activationMode: a.activationMode,
      baseId: we(void 0, "radix-vue-tabs"),
      tabsList: d
    }), (u, c) => (f(), y(s(F), {
      dir: s(r),
      "data-orientation": s(o),
      "as-child": u.asChild,
      as: u.as
    }, {
      default: v(() => [
        b(u.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), ah = /* @__PURE__ */ g({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { loop: a } = fe(e), { forwardRef: n, currentElement: o } = N(), l = _s();
    return l.tabsList = o, (r, i) => (f(), y(s(Wr), {
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
            b(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function ci(t, e) {
  return `${t}-trigger-${e}`;
}
function pi(t, e) {
  return `${t}-content-${e}`;
}
const nh = /* @__PURE__ */ g({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a } = N(), n = _s(), o = $(() => ci(n.baseId, e.value)), l = $(() => pi(n.baseId, e.value)), r = $(() => e.value === n.modelValue.value), i = A(r.value);
    return ue(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (d, u) => (f(), y(s(Me), {
      present: r.value,
      "force-mount": ""
    }, {
      default: v(({ present: c }) => [
        D(s(F), {
          id: l.value,
          ref: s(a),
          "as-child": d.asChild,
          as: d.as,
          role: "tabpanel",
          "data-state": r.value ? "active" : "inactive",
          "data-orientation": s(n).orientation.value,
          "aria-labelledby": o.value,
          hidden: !c.value,
          tabindex: "0",
          style: St({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: v(() => [
            d.forceMount || r.value ? b(d.$slots, "default", { key: 0 }) : J("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), oh = /* @__PURE__ */ g({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, { forwardRef: a } = N(), n = _s(), o = $(() => ci(n.baseId, e.value)), l = $(() => pi(n.baseId, e.value)), r = $(() => e.value === n.modelValue.value);
    return (i, d) => (f(), y(s(Lf), {
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
          onMousedown: d[0] || (d[0] = Ce((u) => {
            !i.disabled && u.ctrlKey === !1 ? s(n).changeModelValue(i.value) : u.preventDefault();
          }, ["left"])),
          onKeydown: d[1] || (d[1] = Ke((u) => s(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: d[2] || (d[2] = () => {
            const u = s(n).activationMode !== "manual";
            !r.value && !i.disabled && u && s(n).changeModelValue(i.value);
          })
        }, {
          default: v(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [Ln, sh] = ne("ToastProvider"), lh = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(t) {
    const e = t, { label: a, duration: n, swipeDirection: o, swipeThreshold: l } = fe(e), r = A(), i = A(0), d = A(!1), u = A(!1);
    if (e.label && typeof e.label == "string" && !e.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return sh({
      label: a,
      duration: n,
      swipeDirection: o,
      swipeThreshold: l,
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
}), rh = "toast.swipeStart", ih = "toast.swipeMove", dh = "toast.swipeCancel", uh = "toast.swipeEnd", ko = "toast.viewportPause", Bo = "toast.viewportResume";
function nn(t, e, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
function rl(t, e, a = 0) {
  const n = Math.abs(t.x), o = Math.abs(t.y), l = n > o;
  return e === "left" || e === "right" ? l && n > a : !l && o > a;
}
function ch(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
function fi(t) {
  const e = [];
  return Array.from(t.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && e.push(a.textContent), ch(a)) {
      const n = a.ariaHidden || a.hidden || a.style.display === "none", o = a.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const l = a.dataset.radixToastAnnounceAlt;
          l && e.push(l);
        } else
          e.push(...fi(a));
    }
  }), e;
}
const ph = /* @__PURE__ */ g({
  __name: "ToastAnnounce",
  setup(t) {
    const e = Ln(), a = gc(1e3), n = A(!1);
    return _r(() => {
      n.value = !0;
    }), (o, l) => s(a) || n.value ? (f(), y(s(ja), { key: 0 }, {
      default: v(() => [
        q(Q(s(e).label.value) + " ", 1),
        b(o.$slots, "default")
      ]),
      _: 3
    })) : J("", !0);
  }
}), [fh, vh] = ne("ToastRoot"), mh = /* @__PURE__ */ g({
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
    const a = t, n = e, { forwardRef: o, currentElement: l } = N(), r = Ln(), i = A(null), d = A(null), u = $(
      () => typeof a.duration == "number" ? a.duration : r.duration.value
    ), c = A(0), p = A(u.value), _ = A(0), m = A(u.value), x = _r(() => {
      const S = (/* @__PURE__ */ new Date()).getTime() - c.value;
      m.value = Math.max(p.value - S, 0);
    }, { fpsLimit: 60 });
    function h(S) {
      S <= 0 || S === Number.POSITIVE_INFINITY || nt && (window.clearTimeout(_.value), c.value = (/* @__PURE__ */ new Date()).getTime(), _.value = window.setTimeout(w, S));
    }
    function w() {
      var S, k;
      (S = l.value) != null && S.contains(xe()) && ((k = r.viewport.value) == null || k.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const C = $(() => l.value ? fi(l.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const S = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(S);
    }
    return be((S) => {
      const k = r.viewport.value;
      if (k) {
        const E = () => {
          h(p.value), x.resume(), n("resume");
        }, O = () => {
          const R = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - R, window.clearTimeout(_.value), x.pause(), n("pause");
        };
        return k.addEventListener(ko, O), k.addEventListener(Bo, E), () => {
          k.removeEventListener(ko, O), k.removeEventListener(Bo, E);
        };
      }
    }), X(() => [a.open, u.value], () => {
      p.value = u.value, a.open && !r.isClosePausedRef.value && h(u.value);
    }, { immediate: !0 }), Xo("Escape", (S) => {
      n("escapeKeyDown", S), S.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, w());
    }), ue(() => {
      r.onToastAdd();
    }), Pt(() => {
      r.onToastRemove();
    }), vh({ onClose: w }), (S, k) => (f(), L(Z, null, [
      C.value ? (f(), y(ph, {
        key: 0,
        role: "alert",
        "aria-live": S.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: v(() => [
          q(Q(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : J("", !0),
      s(r).viewport.value ? (f(), y(Bn, {
        key: 1,
        to: s(r).viewport.value
      }, [
        D(s(F), P({
          ref: s(o),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, S.$attrs, {
          as: S.as,
          "as-child": S.asChild,
          "data-state": S.open ? "open" : "closed",
          "data-swipe-direction": s(r).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: k[0] || (k[0] = Ce((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: k[1] || (k[1] = (E) => {
            if (!i.value) return;
            const O = E.clientX - i.value.x, R = E.clientY - i.value.y, M = !!d.value, U = ["left", "right"].includes(s(r).swipeDirection.value), z = ["left", "up"].includes(s(r).swipeDirection.value) ? Math.min : Math.max, B = U ? z(0, O) : 0, I = U ? 0 : z(0, R), V = E.pointerType === "touch" ? 10 : 2, Y = { x: B, y: I }, G = { originalEvent: E, delta: Y };
            M ? (d.value = Y, s(nn)(s(ih), (ae) => n("swipeMove", ae), G)) : s(rl)(Y, s(r).swipeDirection.value, V) ? (d.value = Y, s(nn)(s(rh), (ae) => n("swipeStart", ae), G), E.target.setPointerCapture(E.pointerId)) : (Math.abs(O) > V || Math.abs(R) > V) && (i.value = null);
          }),
          onPointerup: k[2] || (k[2] = (E) => {
            const O = d.value, R = E.target;
            if (R.hasPointerCapture(E.pointerId) && R.releasePointerCapture(E.pointerId), d.value = null, i.value = null, O) {
              const M = E.currentTarget, U = { originalEvent: E, delta: O };
              s(rl)(O, s(r).swipeDirection.value, s(r).swipeThreshold.value) ? s(nn)(s(uh), (z) => n("swipeEnd", z), U) : s(nn)(s(dh), (z) => n("swipeCancel", z), U), M == null || M.addEventListener("click", (z) => z.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: v(() => [
            b(S.$slots, "default", {
              remaining: m.value,
              duration: u.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : J("", !0)
    ], 64));
  }
}), hh = /* @__PURE__ */ g({
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
    const a = t, n = e, { forwardRef: o } = N(), l = pe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    return (r, i) => (f(), y(s(Me), {
      present: r.forceMount || s(l)
    }, {
      default: v(() => [
        D(mh, P({
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
            const { x: u, y: c } = d.detail.delta, p = d.currentTarget;
            p.setAttribute("data-swipe", "move"), p.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), p.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (d) => {
            const u = d.currentTarget;
            u.setAttribute("data-swipe", "cancel"), u.style.removeProperty("--radix-toast-swipe-move-x"), u.style.removeProperty("--radix-toast-swipe-move-y"), u.style.removeProperty("--radix-toast-swipe-end-x"), u.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (d) => {
            const { x: u, y: c } = d.detail.delta, p = d.currentTarget;
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), l.value = !1;
          })
        }), {
          default: v(({ remaining: d, duration: u }) => [
            b(r.$slots, "default", {
              remaining: d,
              duration: u,
              open: s(l)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), vi = /* @__PURE__ */ g({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    return (e, a) => (f(), y(s(F), {
      as: e.as,
      "as-child": e.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": e.altText || void 0
    }, {
      default: v(() => [
        b(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), mi = /* @__PURE__ */ g({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = fh(), { forwardRef: n } = N();
    return (o, l) => (f(), y(vi, { "as-child": "" }, {
      default: v(() => [
        D(s(F), P(e, {
          ref: s(n),
          type: o.as === "button" ? "button" : void 0,
          onClick: l[0] || (l[0] = (r) => s(a).onClose())
        }), {
          default: v(() => [
            b(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), gh = /* @__PURE__ */ g({
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
    return (a, n) => a.altText ? (f(), y(vi, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: v(() => [
        D(mi, {
          ref: s(e),
          as: a.as,
          "as-child": a.asChild
        }, {
          default: v(() => [
            b(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : J("", !0);
  }
}), il = /* @__PURE__ */ g({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(t, { emit: e }) {
    const a = e, n = Ln();
    return (o, l) => (f(), y(s(ja), {
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
        b(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), yh = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(t) {
    const e = t, { hotkey: a, label: n } = fe(e), { forwardRef: o, currentElement: l } = N(), { createCollection: r } = ua(), i = r(l), d = Ln(), u = $(() => d.toastCount.value > 0), c = A(), p = A(), _ = $(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Xo(a.value, () => {
      l.value.focus();
    }), ue(() => {
      d.onViewportChange(l.value);
    }), be((x) => {
      const h = l.value;
      if (u.value && h) {
        const w = () => {
          if (!d.isClosePausedRef.value) {
            const O = new CustomEvent(ko);
            h.dispatchEvent(O), d.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (d.isClosePausedRef.value) {
            const O = new CustomEvent(Bo);
            h.dispatchEvent(O), d.isClosePausedRef.value = !1;
          }
        }, S = (O) => {
          !h.contains(O.relatedTarget) && C();
        }, k = () => {
          h.contains(xe()) || C();
        }, E = (O) => {
          var R, M, U;
          const z = O.altKey || O.ctrlKey || O.metaKey;
          if (O.key === "Tab" && !z) {
            const B = xe(), I = O.shiftKey;
            if (O.target === h && I) {
              (R = c.value) == null || R.focus();
              return;
            }
            const V = m({ tabbingDirection: I ? "backwards" : "forwards" }), Y = V.findIndex((G) => G === B);
            fn(V.slice(Y + 1)) ? O.preventDefault() : I ? (M = c.value) == null || M.focus() : (U = p.value) == null || U.focus();
          }
        };
        h.addEventListener("focusin", w), h.addEventListener("focusout", S), h.addEventListener("pointermove", w), h.addEventListener("pointerleave", k), h.addEventListener("keydown", E), window.addEventListener("blur", w), window.addEventListener("focus", C), x(() => {
          h.removeEventListener("focusin", w), h.removeEventListener("focusout", S), h.removeEventListener("pointermove", w), h.removeEventListener("pointerleave", k), h.removeEventListener("keydown", E), window.removeEventListener("blur", w), window.removeEventListener("focus", C);
        });
      }
    });
    function m({ tabbingDirection: x }) {
      const h = i.value.map((w) => {
        const C = [w, ...ls(w)];
        return x === "forwards" ? C : C.reverse();
      });
      return (x === "forwards" ? h.reverse() : h).flat();
    }
    return (x, h) => (f(), y(s(fp), {
      role: "region",
      "aria-label": typeof s(n) == "string" ? s(n).replace("{hotkey}", _.value) : s(n)(_.value),
      tabindex: "-1",
      style: St({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: u.value ? void 0 : "none"
      })
    }, {
      default: v(() => [
        u.value ? (f(), y(il, {
          key: 0,
          ref: (w) => {
            c.value = s(Re)(w);
          },
          onFocusFromOutsideViewport: h[0] || (h[0] = () => {
            const w = m({
              tabbingDirection: "forwards"
            });
            s(fn)(w);
          })
        }, null, 512)) : J("", !0),
        D(s(F), P({
          ref: s(o),
          tabindex: "-1",
          as: x.as,
          "as-child": x.asChild
        }, x.$attrs), {
          default: v(() => [
            b(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        u.value ? (f(), y(il, {
          key: 1,
          ref: (w) => {
            p.value = s(Re)(w);
          },
          onFocusFromOutsideViewport: h[1] || (h[1] = () => {
            const w = m({
              tabbingDirection: "backwards"
            });
            s(fn)(w);
          })
        }, null, 512)) : J("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), bh = /* @__PURE__ */ g({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (f(), y(s(F), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _h = /* @__PURE__ */ g({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return N(), (a, n) => (f(), y(s(F), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hi = "tooltip.open", [ws, wh] = ne("TooltipProvider"), gi = /* @__PURE__ */ g({
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
    const e = t, { delayDuration: a, skipDelayDuration: n, disableHoverableContent: o, disableClosingTrigger: l, ignoreNonKeyboardFocus: r, disabled: i } = fe(e);
    N();
    const d = A(!0), u = A(!1), { start: c, stop: p } = Zo(() => {
      d.value = !0;
    }, n, { immediate: !1 });
    return wh({
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
      disableClosingTrigger: l,
      disabled: i,
      ignoreNonKeyboardFocus: r
    }), (_, m) => b(_.$slots, "default");
  }
}), [Nn, xh] = ne("TooltipRoot"), $h = /* @__PURE__ */ g({
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
    const o = ws(), l = $(() => a.disableHoverableContent ?? o.disableHoverableContent.value), r = $(() => a.disableClosingTrigger ?? o.disableClosingTrigger.value), i = $(() => a.disabled ?? o.disabled.value), d = $(() => a.delayDuration ?? o.delayDuration.value), u = $(() => a.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), c = pe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    X(c, (k) => {
      o.onClose && (k ? (o.onOpen(), document.dispatchEvent(new CustomEvent(hi))) : o.onClose());
    });
    const p = A(!1), _ = A(), m = $(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: x, stop: h } = Zo(() => {
      p.value = !0, c.value = !0;
    }, d, { immediate: !1 });
    function w() {
      h(), p.value = !1, c.value = !0;
    }
    function C() {
      h(), c.value = !1;
    }
    function S() {
      x();
    }
    return xh({
      contentId: "",
      open: c,
      stateAttribute: m,
      trigger: _,
      onTriggerChange(k) {
        _.value = k;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? S() : w();
      },
      onTriggerLeave() {
        l.value ? C() : h();
      },
      onOpen: w,
      onClose: C,
      disableHoverableContent: l,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: u
    }), (k, E) => (f(), y(s(va), null, {
      default: v(() => [
        b(k.$slots, "default", { open: s(c) })
      ]),
      _: 3
    }));
  }
}), Ch = /* @__PURE__ */ g({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Nn(), n = ws();
    a.contentId || (a.contentId = we(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: l } = N(), r = A(!1), i = A(!1), d = $(() => a.disabled.value ? {} : {
      click: h,
      focus: m,
      pointermove: p,
      pointerleave: _,
      pointerdown: c,
      blur: x
    });
    ue(() => {
      a.onTriggerChange(l.value);
    });
    function u() {
      setTimeout(() => {
        r.value = !1;
      }, 1);
    }
    function c() {
      r.value = !0, document.addEventListener("pointerup", u, { once: !0 });
    }
    function p(w) {
      w.pointerType !== "touch" && !i.value && !n.isPointerInTransitRef.value && (a.onTriggerEnter(), i.value = !0);
    }
    function _() {
      a.onTriggerLeave(), i.value = !1;
    }
    function m(w) {
      var C, S;
      r.value || a.ignoreNonKeyboardFocus.value && !((S = (C = w.target).matches) != null && S.call(C, ":focus-visible")) || a.onOpen();
    }
    function x() {
      a.onClose();
    }
    function h() {
      a.disableClosingTrigger.value || a.onClose();
    }
    return (w, C) => (f(), y(s(Rn), { "as-child": "" }, {
      default: v(() => [
        D(s(F), P({
          ref: s(o),
          "aria-describedby": s(a).open.value ? s(a).contentId : void 0,
          "data-state": s(a).stateAttribute.value,
          as: w.as,
          "as-child": e.asChild,
          "data-grace-area-trigger": ""
        }, ji(d.value)), {
          default: v(() => [
            b(w.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), yi = /* @__PURE__ */ g({
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
    const a = t, n = e, o = Nn(), { forwardRef: l } = N(), r = Cl(), i = $(() => {
      var c;
      return (c = r.default) == null ? void 0 : c.call(r);
    }), d = $(() => {
      var c;
      if (a.ariaLabel)
        return a.ariaLabel;
      let p = "";
      function _(m) {
        typeof m.children == "string" && m.type !== Dl ? p += m.children : Array.isArray(m.children) && m.children.forEach((x) => _(x));
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
      }), sa(window, hi, o.onClose);
    }), (c, p) => (f(), y(s(pa), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (_) => n("escapeKeyDown", _)),
      onPointerDownOutside: p[1] || (p[1] = (_) => {
        var m;
        s(o).disableClosingTrigger.value && (m = s(o).trigger.value) != null && m.contains(_.target) && _.preventDefault(), n("pointerDownOutside", _);
      }),
      onFocusOutside: p[2] || (p[2] = Ce(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (_) => s(o).onClose())
    }, {
      default: v(() => [
        D(s(la), P({
          ref: s(l),
          "data-state": s(o).stateAttribute.value
        }, { ...c.$attrs, ...u.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: v(() => [
            b(c.$slots, "default"),
            D(s(ja), {
              id: s(o).contentId,
              role: "tooltip"
            }, {
              default: v(() => [
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
}), kh = /* @__PURE__ */ g({
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
    const e = le(t), { forwardRef: a, currentElement: n } = N(), { trigger: o, onClose: l } = Nn(), r = ws(), { isPointerInTransit: i, onPointerExit: d } = Oc(o, n);
    return r.isPointerInTransitRef = i, d(() => {
      l();
    }), (u, c) => (f(), y(yi, P({ ref: s(a) }, s(e)), {
      default: v(() => [
        b(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bh = /* @__PURE__ */ g({
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
    const a = t, n = e, o = Nn(), l = ee(a, n), { forwardRef: r } = N();
    return (i, d) => (f(), y(s(Me), {
      present: i.forceMount || s(o).open.value
    }, {
      default: v(() => [
        (f(), y(Oe(s(o).disableHoverableContent.value ? yi : kh), P({ ref: s(r) }, s(l)), {
          default: v(() => [
            b(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Dh = /* @__PURE__ */ g({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Wa), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), B0 = /* @__PURE__ */ g({
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
    return (l, r) => (f(), y(s(ap), K(H(s(o))), {
      default: v(() => [
        b(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xs = "-", Sh = (t) => {
  const e = Eh(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (r) => {
      const i = r.split(xs);
      return i[0] === "" && i.length !== 1 && i.shift(), bi(i, e) || Ph(r);
    },
    getConflictingClassGroupIds: (r, i) => {
      const d = a[r] || [];
      return i && n[r] ? [...d, ...n[r]] : d;
    }
  };
}, bi = (t, e) => {
  var r;
  if (t.length === 0)
    return e.classGroupId;
  const a = t[0], n = e.nextPart.get(a), o = n ? bi(t.slice(1), n) : void 0;
  if (o)
    return o;
  if (e.validators.length === 0)
    return;
  const l = t.join(xs);
  return (r = e.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : r.classGroupId;
}, dl = /^\[(.+)\]$/, Ph = (t) => {
  if (dl.test(t)) {
    const e = dl.exec(t)[1], a = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Eh = (t) => {
  const {
    theme: e,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ah(Object.entries(t.classGroups), a).forEach(([l, r]) => {
    Do(r, n, l, e);
  }), n;
}, Do = (t, e, a, n) => {
  t.forEach((o) => {
    if (typeof o == "string") {
      const l = o === "" ? e : ul(e, o);
      l.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (Oh(o)) {
        Do(o(n), e, a, n);
        return;
      }
      e.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([l, r]) => {
      Do(r, ul(e, l), a, n);
    });
  });
}, ul = (t, e) => {
  let a = t;
  return e.split(xs).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Oh = (t) => t.isThemeGetter, Ah = (t, e) => e ? t.map(([a, n]) => {
  const o = n.map((l) => typeof l == "string" ? e + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([r, i]) => [e + r, i])) : l);
  return [a, o];
}) : t, Mh = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (l, r) => {
    a.set(l, r), e++, e > t && (e = 0, n = a, a = /* @__PURE__ */ new Map());
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
}, _i = "!", Th = (t) => {
  const {
    separator: e,
    experimentalParseClassName: a
  } = t, n = e.length === 1, o = e[0], l = e.length, r = (i) => {
    const d = [];
    let u = 0, c = 0, p;
    for (let w = 0; w < i.length; w++) {
      let C = i[w];
      if (u === 0) {
        if (C === o && (n || i.slice(w, w + l) === e)) {
          d.push(i.slice(c, w)), c = w + l;
          continue;
        }
        if (C === "/") {
          p = w;
          continue;
        }
      }
      C === "[" ? u++ : C === "]" && u--;
    }
    const _ = d.length === 0 ? i : i.substring(c), m = _.startsWith(_i), x = m ? _.substring(1) : _, h = p && p > c ? p - c : void 0;
    return {
      modifiers: d,
      hasImportantModifier: m,
      baseClassName: x,
      maybePostfixModifierPosition: h
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: r
  }) : r;
}, Ih = (t) => {
  if (t.length <= 1)
    return t;
  const e = [];
  let a = [];
  return t.forEach((n) => {
    n[0] === "[" ? (e.push(...a.sort(), n), a = []) : a.push(n);
  }), e.push(...a.sort()), e;
}, Rh = (t) => ({
  cache: Mh(t.cacheSize),
  parseClassName: Th(t),
  ...Sh(t)
}), Vh = /\s+/, Fh = (t, e) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = e, l = [], r = t.trim().split(Vh);
  let i = "";
  for (let d = r.length - 1; d >= 0; d -= 1) {
    const u = r[d], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: _,
      maybePostfixModifierPosition: m
    } = a(u);
    let x = !!m, h = n(x ? _.substring(0, m) : _);
    if (!h) {
      if (!x) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (h = n(_), !h) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      x = !1;
    }
    const w = Ih(c).join(":"), C = p ? w + _i : w, S = C + h;
    if (l.includes(S))
      continue;
    l.push(S);
    const k = o(h, x);
    for (let E = 0; E < k.length; ++E) {
      const O = k[E];
      l.push(C + O);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Lh() {
  let t = 0, e, a, n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (a = wi(e)) && (n && (n += " "), n += a);
  return n;
}
const wi = (t) => {
  if (typeof t == "string")
    return t;
  let e, a = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = wi(t[n])) && (a && (a += " "), a += e);
  return a;
};
function Nh(t, ...e) {
  let a, n, o, l = r;
  function r(d) {
    const u = e.reduce((c, p) => p(c), t());
    return a = Rh(u), n = a.cache.get, o = a.cache.set, l = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = Fh(d, a);
    return o(d, c), c;
  }
  return function() {
    return l(Lh.apply(null, arguments));
  };
}
const me = (t) => {
  const e = (a) => a[t] || [];
  return e.isThemeGetter = !0, e;
}, xi = /^\[(?:([a-z-]+):)?(.+)\]$/i, zh = /^\d+\/\d+$/, Uh = /* @__PURE__ */ new Set(["px", "full", "screen"]), Kh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Wh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Hh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, jh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Gh = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, rt = (t) => Xt(t) || Uh.has(t) || zh.test(t), bt = (t) => ba(t, "length", tg), Xt = (t) => !!t && !Number.isNaN(Number(t)), so = (t) => ba(t, "number", Xt), Ca = (t) => !!t && Number.isInteger(Number(t)), Yh = (t) => t.endsWith("%") && Xt(t.slice(0, -1)), te = (t) => xi.test(t), _t = (t) => Kh.test(t), qh = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Jh = (t) => ba(t, qh, $i), Qh = (t) => ba(t, "position", $i), Zh = /* @__PURE__ */ new Set(["image", "url"]), Xh = (t) => ba(t, Zh, ng), eg = (t) => ba(t, "", ag), ka = () => !0, ba = (t, e, a) => {
  const n = xi.exec(t);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : a(n[2]) : !1;
}, tg = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Wh.test(t) && !Hh.test(t)
), $i = () => !1, ag = (t) => jh.test(t), ng = (t) => Gh.test(t), og = () => {
  const t = me("colors"), e = me("spacing"), a = me("blur"), n = me("brightness"), o = me("borderColor"), l = me("borderRadius"), r = me("borderSpacing"), i = me("borderWidth"), d = me("contrast"), u = me("grayscale"), c = me("hueRotate"), p = me("invert"), _ = me("gap"), m = me("gradientColorStops"), x = me("gradientColorStopPositions"), h = me("inset"), w = me("margin"), C = me("opacity"), S = me("padding"), k = me("saturate"), E = me("scale"), O = me("sepia"), R = me("skew"), M = me("space"), U = me("translate"), z = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", te, e], V = () => [te, e], Y = () => ["", rt, bt], G = () => ["auto", Xt, te], ae = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ce = () => ["solid", "dashed", "dotted", "double", "none"], he = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ye = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", te], oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], de = () => [Xt, te];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ka],
      spacing: [rt, bt],
      blur: ["none", "", _t, te],
      brightness: de(),
      borderColor: [t],
      borderRadius: ["none", "", "full", _t, te],
      borderSpacing: V(),
      borderWidth: Y(),
      contrast: de(),
      grayscale: j(),
      hueRotate: de(),
      invert: j(),
      gap: V(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Yh, bt],
      inset: I(),
      margin: I(),
      opacity: de(),
      padding: V(),
      saturate: de(),
      scale: de(),
      sepia: j(),
      skew: de(),
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
        columns: [_t]
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
        z: ["auto", Ca, te]
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
        order: ["first", "last", "none", Ca, te]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ka]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ca, te]
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
        "grid-rows": [ka]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ca, te]
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
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
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
          screen: [_t]
        }, _t]
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
        text: ["base", _t, bt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", so]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ka]
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
        "line-clamp": ["none", Xt, so]
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
        decoration: [...ce(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", rt, bt]
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
        indent: V()
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
        bg: [...ae(), Qh]
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
        bg: ["auto", "cover", "contain", Jh]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Xh]
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
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ce(), "hidden"]
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
        divide: ce()
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
        outline: ["", ...ce()]
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
        outline: [rt, bt]
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
        "ring-offset": [rt, bt]
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
        shadow: ["", "inner", "none", _t, eg]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ka]
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
        "mix-blend": [...he(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": he()
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
        "drop-shadow": ["", "none", _t, te]
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
        rotate: [Ca, te]
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
        "skew-x": [R]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [R]
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
        stroke: [rt, bt, so]
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
}, sg = /* @__PURE__ */ Nh(og);
function T(...t) {
  return sg(t);
}
const D0 = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(sp), P(a.value, { class: "overflow-hidden text-sm text-accordion-text transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: v(() => [
        re("div", {
          class: W(s(T)("pb-4 pt-0", e.class))
        }, [
          b(n.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), S0 = /* @__PURE__ */ g({
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
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(op), P(s(n), {
      class: s(T)("border-b border-accordion-border", e.class)
    }), {
      default: v(() => [
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
const lg = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
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
const rg = ({ size: t, strokeWidth: e = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: l, class: r, ...i }, { slots: d }) => Ze(
  "svg",
  {
    ...on,
    width: t || on.width,
    height: t || on.height,
    stroke: n || on.stroke,
    "stroke-width": a ? Number(e) * 24 / Number(t) : e,
    class: ["lucide", `lucide-${lg(l ?? "icon")}`],
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
  rg,
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
const ig = $e("CalendarIcon", [
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
const zn = $e("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = $e("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dg = $e("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = $e("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ug = $e("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cg = $e("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pg = $e("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fg = $e("ChevronsUpDownIcon", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vg = $e("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ci = $e("EllipsisIcon", [
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
const mg = $e("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hg = $e("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gg = $e("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yg = $e("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bg = $e("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _g = $e("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wg = $e("SunIcon", [
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
const Un = $e("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), P0 = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(lp), { class: "flex" }, {
      default: v(() => [
        D(s(rp), P(a.value, {
          class: s(T)(
            "flex flex-1 items-center justify-between py-4 font-medium text-heading transition-all [&[data-state=open]>svg]:rotate-180",
            e.class
          )
        }), {
          default: v(() => [
            b(n.$slots, "default"),
            b(n.$slots, "icon", {}, () => [
              D(s($s), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
});
function ki(t) {
  var e, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (a = ki(t[e])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function xg() {
  for (var t, e, a = 0, n = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (e = ki(t)) && (n && (n += " "), n += e);
  return n;
}
const cl = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, pl = xg, _a = (t, e) => (a) => {
  var n;
  if ((e == null ? void 0 : e.variants) == null) return pl(t, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: l } = e, r = Object.keys(o).map((u) => {
    const c = a == null ? void 0 : a[u], p = l == null ? void 0 : l[u];
    if (c === null) return null;
    const _ = cl(c) || cl(p);
    return o[u][_];
  }), i = a && Object.entries(a).reduce((u, c) => {
    let [p, _] = c;
    return _ === void 0 || (u[p] = _), u;
  }, {}), d = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, c) => {
    let { class: p, className: _, ...m } = c;
    return Object.entries(m).every((x) => {
      let [h, w] = x;
      return Array.isArray(w) ? w.includes({
        ...l,
        ...i
      }[h]) : {
        ...l,
        ...i
      }[h] === w;
    }) ? [
      ...u,
      p,
      _
    ] : u;
  }, []);
  return pl(t, r, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, E0 = /* @__PURE__ */ g({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: W(s(T)(s($g)({ variant: a.variant }), e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), $g = _a(
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
), O0 = /* @__PURE__ */ g({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("nav", {
      "aria-label": "breadcrumb",
      class: W(e.class)
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), A0 = /* @__PURE__ */ g({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: W(s(T)("flex h-9 w-9 items-center justify-center", e.class))
    }, [
      b(a.$slots, "default", {}, () => [
        D(s(Ci), { class: "h-4 w-4" })
      ]),
      n[0] || (n[0] = re("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), M0 = /* @__PURE__ */ g({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("li", {
      class: W(s(T)("inline-flex items-center gap-1.5", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), T0 = /* @__PURE__ */ g({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), {
      as: a.as,
      "as-child": a.asChild,
      class: W(s(T)("transition-colors hover:text-foreground", e.class))
    }, {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), I0 = /* @__PURE__ */ g({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("ol", {
      class: W(
        s(T)(
          "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), R0 = /* @__PURE__ */ g({
  __name: "BreadcrumbPage",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("span", {
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: W(s(T)("font-normal text-foreground", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), V0 = /* @__PURE__ */ g({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: W(s(T)("[&>svg]:h-3.5 [&>svg]:w-3.5", e.class))
    }, [
      b(a.$slots, "default", {}, () => [
        D(s(Cs))
      ])
    ], 2));
  }
}), Ge = /* @__PURE__ */ g({
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
    return (a, n) => (f(), y(s(F), {
      as: a.as,
      "as-child": a.asChild,
      class: W(s(T)(s(Wt)({ variant: a.variant, size: a.size }), e.class))
    }, {
      default: v(() => [
        b(a.$slots, "default"),
        a.loading ? (f(), y(s(mg), {
          key: 0,
          class: W(s(Cg)({ size: a.size }))
        }, null, 8, ["class"])) : J("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Cg = _a("animate-spin", {
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
}), Wt = _a(
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
), F0 = /* @__PURE__ */ g({
  __name: "Card",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: W(
        s(T)("rounded-lg border border-card-border bg-card text-card-foreground shadow-sm", e.class)
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), L0 = /* @__PURE__ */ g({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: W(s(T)("flex flex-col gap-y-1.5 p-6", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), N0 = /* @__PURE__ */ g({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("h3", {
      class: W(s(T)("text-2xl font-semibold leading-none tracking-tight", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), z0 = /* @__PURE__ */ g({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("p", {
      class: W(s(T)("text-sm text-muted-foreground", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), U0 = /* @__PURE__ */ g({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: W(s(T)("p-6 pt-0", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), K0 = /* @__PURE__ */ g({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: W(s(T)("flex items-center p-6 pt-0", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), kg = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, Bg = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(zp), P({
      class: s(T)("p-3", a.class)
    }, s(l)), {
      default: v(({ grid: d, weekDays: u }) => [
        D(s(Mg), null, {
          default: v(() => [
            D(s(Rg)),
            D(s(Tg)),
            D(s(Ig))
          ]),
          _: 1
        }),
        re("div", kg, [
          (f(!0), L(Z, null, ge(d, (c) => (f(), y(s(Pg), {
            key: c.value.toString()
          }, {
            default: v(() => [
              D(s(Og), null, {
                default: v(() => [
                  D(s(fl), null, {
                    default: v(() => [
                      (f(!0), L(Z, null, ge(u, (p) => (f(), y(s(Ag), { key: p }, {
                        default: v(() => [
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
              D(s(Eg), null, {
                default: v(() => [
                  (f(!0), L(Z, null, ge(c.rows, (p, _) => (f(), y(s(fl), {
                    key: `weekDate-${_}`,
                    class: "mt-2 w-full"
                  }, {
                    default: v(() => [
                      (f(!0), L(Z, null, ge(p, (m) => (f(), y(s(Dg), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: v(() => [
                          D(s(Sg), {
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
}), Dg = /* @__PURE__ */ g({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Hp), P({
      class: s(T)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        e.class
      )
    }, s(n)), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sg = /* @__PURE__ */ g({
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
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Zp), P({
      class: s(T)(
        s(Wt)({ variant: "ghost" }),
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
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pg = /* @__PURE__ */ g({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Wp), P({
      class: s(T)("w-full border-collapse space-y-1", e.class)
    }, s(n)), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Eg = /* @__PURE__ */ g({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Jp), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Og = /* @__PURE__ */ g({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(qp), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fl = /* @__PURE__ */ g({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Qp), P({
      class: s(T)("flex", e.class)
    }, s(n)), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ag = /* @__PURE__ */ g({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(jp), P({
      class: s(T)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, s(n)), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mg = /* @__PURE__ */ g({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Up), P({
      class: s(T)("relative flex w-full items-center justify-between pt-1", e.class)
    }, s(n)), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tg = /* @__PURE__ */ g({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Kp), P({
      class: s(T)("text-sm font-medium text-text", e.class)
    }, s(n)), {
      default: v(({ headingValue: r }) => [
        b(o.$slots, "default", { headingValue: r }, () => [
          q(Q(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ig = /* @__PURE__ */ g({
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
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Gp), P({
      class: s(T)(
        s(Wt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: v(() => l[0] || (l[0] = [
        q(" > ")
      ])),
      _: 1
    }, 16, ["class"]));
  }
}), Rg = /* @__PURE__ */ g({
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
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Yp), P({
      class: s(T)(
        s(Wt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: v(() => l[0] || (l[0] = [
        q(" < ")
      ])),
      _: 1
    }, 16, ["class"]));
  }
}), Bi = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(ff), P(s(l), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        a.class
      ]
    }), {
      default: v(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Di = /* @__PURE__ */ g({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (l, r) => (f(), y(s(Pr), K(H(s(o))), {
      default: v(() => [
        b(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), W0 = /* @__PURE__ */ g({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Ha), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vg = /* @__PURE__ */ g({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Er), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fg = /* @__PURE__ */ g({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: W(s(T)("flex flex-col gap-y-1.5 text-center sm:text-left", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Lg = /* @__PURE__ */ g({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Tr), P(s(n), {
      class: s(T)("text-2xl font-semibold leading-none tracking-tight text-heading", e.class)
    }), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ng = /* @__PURE__ */ g({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Ir), P(s(n), {
      class: s(T)("text-sm text-sub-text", e.class)
    }), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Si = /* @__PURE__ */ g({
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
    }), l = ee(o, a);
    return (r, i) => (f(), y(s(ss), null, {
      default: v(() => [
        D(s(us), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        D(s(ds), P(s(l), {
          class: s(T)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg",
            n.class
          )
        }), {
          default: v(() => [
            b(r.$slots, "default"),
            D(s(Ha), {
              onClick: i[0] || (i[0] = (d) => a("close", d)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: v(() => [
                D(s(Un), { class: "size-4 dark:text-slate-300" }),
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
}), H0 = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(ss), null, {
      default: v(() => [
        D(s(us), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: v(() => [
            D(s(ds), P({
              class: s(T)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg md:w-full",
                a.class
              )
            }, s(l), {
              onPointerDownOutside: i[0] || (i[0] = (d) => {
                const u = d.detail.originalEvent, c = u.target;
                (u.offsetX > c.clientWidth || u.offsetY > c.clientHeight) && d.preventDefault();
              })
            }), {
              default: v(() => [
                b(r.$slots, "default"),
                D(s(Ha), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: v(() => [
                    D(s(Un), { class: "size-4" }),
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
}), zg = /* @__PURE__ */ g({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: W(
        s(T)("flex flex-col-reverse text-text sm:flex-row sm:justify-end sm:gap-x-2", e.class)
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), j0 = /* @__PURE__ */ g({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (l, r) => (f(), y(s(Di), K(H(s(o))), {
      default: v(() => [
        D(s(Si), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: v(() => [
            D(Bi, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: v(() => [
                b(l.$slots, "default")
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
}), Ug = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(wf), P(a.value, {
      class: s(T)("py-6 text-center text-sm", e.class)
    }), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kg = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(hf), P(a.value, {
      class: s(T)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        e.class
      )
    }), {
      default: v(() => [
        n.heading ? (f(), y(s(gf), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: v(() => [
            q(Q(n.heading), 1)
          ]),
          _: 1
        })) : J("", !0),
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wg = { class: "flex items-center border-b px-3" }, Hg = /* @__PURE__ */ g({
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
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), L("div", Wg, [
      D(s(_g), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      D(s(vf), P({ ...s(n), ...o.$attrs }, {
        "auto-focus": "",
        class: s(T)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          e.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), jg = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(kf), P(s(l), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: v(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gg = { role: "presentation" }, Yg = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(_f), P(s(l), {
      class: s(T)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: v(() => [
        re("div", Gg, [
          b(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G0 = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(Bf), P(a.value, {
      class: s(T)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", e.class)
    }), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Y0 = /* @__PURE__ */ g({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("span", {
      class: W(s(T)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), qg = /* @__PURE__ */ g({
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
    return (l, r) => (f(), y(s(sv), K(H(s(o))), {
      default: v(({ open: i }) => [
        b(l.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Jg = /* @__PURE__ */ g({
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
    return (a, n) => (f(), L("div", {
      class: W(
        s(T)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Qg = /* @__PURE__ */ g({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = le(t);
    return (n, o) => (f(), y(s(lv), P({ class: "outline-none" }, s(a)), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zg = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(rv), null, {
      default: v(() => [
        D(s(iv), P(s(l), {
          class: s(T)(
            "z-50 min-w-32 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            a.class
          )
        }), {
          default: v(() => [
            b(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), q0 = /* @__PURE__ */ g({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(dv), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), J0 = /* @__PURE__ */ g({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (l, r) => (f(), y(s(fv), K(H(s(o))), {
      default: v(() => [
        b(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Q0 = /* @__PURE__ */ g({
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
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Jr), P(s(n), {
      class: s(T)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.inset && "pl-8",
        e.class
      )
    }), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xg = /* @__PURE__ */ g({
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
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(Jg, {
      class: W(e.class)
    }, {
      default: v(() => [
        D(s(Jr), P(s(n), {
          as: o.as,
          href: o.href,
          class: "size-full"
        }), {
          default: v(() => [
            b(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "href"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ey = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Z0 = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(cv), P(s(l), {
      class: s(T)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: v(() => [
        re("span", ey, [
          D(s(Qr), null, {
            default: v(() => [
              D(s(zn), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ty = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, X0 = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(vv), P(s(l), {
      class: s(T)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: v(() => [
        re("span", ty, [
          D(s(Qr), null, {
            default: v(() => [
              D(s(vg), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e_ = /* @__PURE__ */ g({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("span", {
      class: W(s(T)("ml-auto text-xs tracking-widest opacity-60", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), t_ = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(uv), P(a.value, {
      class: s(T)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", e.class)
    }), null, 16, ["class"]));
  }
}), a_ = /* @__PURE__ */ g({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(pv), P(s(n), {
      class: s(T)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", e.class)
    }), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n_ = /* @__PURE__ */ g({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (l, r) => (f(), y(s(mv), K(H(s(o))), {
      default: v(() => [
        b(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), o_ = /* @__PURE__ */ g({
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
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(gv), P(s(n), {
      class: s(T)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        e.class
      )
    }), {
      default: v(() => [
        b(o.$slots, "default"),
        D(s(Cs), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s_ = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(hv), P(s(l), {
      class: s(T)(
        "z-50 min-w-32 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        a.class
      )
    }), {
      default: v(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ay = { class: "text-xs text-slate-600 dark:text-slate-300" }, ny = /* @__PURE__ */ g({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(t) {
    return (e, a) => (f(), L("div", ay, "Characters: " + Q(e.count), 1));
  }
}), qa = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [n, o] of e)
    a[n] = o;
  return a;
}, oy = {}, sy = { class: "text-sm text-slate-400 dark:text-slate-500" };
function ly(t, e) {
  return f(), L("div", sy, [
    b(t.$slots, "default")
  ]);
}
const ry = /* @__PURE__ */ qa(oy, [["render", ly]]), iy = { class: "text-sm text-red-600 dark:text-red-400" }, dy = /* @__PURE__ */ g({
  __name: "Error",
  props: {
    error: {}
  },
  setup(t) {
    return (e, a) => ia((f(), L("div", null, [
      re("p", iy, Q(e.error), 1)
    ], 512)), [
      [Mo, e.error]
    ]);
  }
}), uy = {}, cy = { class: "w-full space-y-4 p-1.5" };
function py(t, e) {
  return f(), L("div", cy, [
    b(t.$slots, "default")
  ]);
}
const l_ = /* @__PURE__ */ qa(uy, [["render", py]]), fy = {}, vy = { class: "my-4" };
function my(t, e) {
  return f(), L("div", vy, [
    b(t.$slots, "default")
  ]);
}
const hy = /* @__PURE__ */ qa(fy, [["render", my]]), gy = { class: "grid gap-4 md:grid-cols-2" }, r_ = /* @__PURE__ */ g({
  __name: "FormGrid",
  setup(t) {
    return (e, a) => (f(), y(hy, null, {
      default: v(() => [
        re("div", gy, [
          b(e.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), Pi = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(yv), P(a.value, {
      class: s(T)(
        "text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        e.class
      )
    }), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yy = { class: "relative" }, by = {
  name: "Base",
  inheritAttrs: !1
}, Et = /* @__PURE__ */ g({
  ...by,
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
      return f(), L("div", null, [
        e.label && e.showLabel ? (f(), y(s(Pi), {
          key: 0,
          id: e.id
        }, {
          default: v(() => [
            q(Q(e.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : J("", !0),
        re("div", yy, [
          b(e.$slots, "default"),
          e.showCharacterCount ? (f(), y(s(ny), {
            key: 0,
            count: (n = e.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : J("", !0)
        ]),
        D(s(ry), { class: "mt-[2px]" }, {
          default: v(() => [
            q(Q(e.description), 1)
          ]),
          _: 1
        }),
        D(s(dy), { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), _y = { class: "flex gap-2" }, i_ = /* @__PURE__ */ g({
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
    return X(o, (l) => {
      a("update:modelValue", l);
    }), (l, r) => (f(), y(s(Et), K(H(l.$props)), {
      default: v(() => [
        re("div", _y, [
          D(s(af), {
            id: l.id,
            checked: o.value,
            "onUpdate:checked": r[0] || (r[0] = (i) => o.value = i),
            class: "peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground"
          }, {
            default: v(() => [
              D(s(nf), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: v(() => [
                  D(s(zn), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          l.text ? (f(), y(s(Pi), {
            key: 0,
            id: l.id,
            class: "my-auto"
          }, {
            default: v(() => [
              q(Q(l.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : J("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), Ei = /* @__PURE__ */ g({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (l, r) => (f(), y(s(Ev), K(H(s(o))), {
      default: v(() => [
        b(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oi = /* @__PURE__ */ g({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Ov), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ai = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(Av), null, {
      default: v(() => [
        D(s(Iv), P({ ...s(l), ...r.$attrs }, {
          class: s(T)(
            "z-50 w-72 rounded-md border border-border bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: v(() => [
            b(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), d_ = /* @__PURE__ */ g({
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
    const a = e, n = t, o = $(() => n.emptyMessage ?? "Option not found"), l = $(() => n.placeholder ?? "Select an option"), r = A(!1), i = A(n.modelValue ?? []), d = (p, _) => p.filter((m) => m.name.toLowerCase().includes(_.toLowerCase())), u = $(() => {
      var p;
      return Array.isArray(i.value) ? i.value.length ? i.value.map((_) => _.name).join(", ") : l.value : typeof i.value == "object" ? i.value.name : (p = n.options.find((_) => _.id === i.value)) == null ? void 0 : p.name;
    }), c = (p) => Array.isArray(i.value) ? i.value.find((_) => _.id === p.id) : typeof i.value == "object" ? i.value.id === p.id : i.value === p.id;
    return X(i, () => {
      Array.isArray(i.value) ? a("update:modelValue", i.value) : a("update:modelValue", i.value.id);
    }), (p, _) => (f(), y(s(Et), K(H(p.$props)), {
      default: v(() => [
        D(s(Ei), {
          open: r.value,
          "onUpdate:open": _[2] || (_[2] = (m) => r.value = m)
        }, {
          default: v(() => [
            D(s(Oi), { "as-child": "" }, {
              default: v(() => [
                D(s(Ge), {
                  variant: "outline",
                  role: "combobox",
                  "aria-expanded": r.value,
                  class: "w-[200px] justify-between overflow-hidden"
                }, {
                  default: v(() => [
                    q(Q(u.value) + " ", 1),
                    D(s(fg), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
                  ]),
                  _: 1
                }, 8, ["aria-expanded"])
              ]),
              _: 1
            }),
            D(s(Ai), { class: "w-[200px] p-0" }, {
              default: v(() => [
                D(s(Bi), {
                  multiple: p.multiple,
                  modelValue: i.value,
                  "onUpdate:modelValue": _[1] || (_[1] = (m) => i.value = m),
                  "filter-function": d
                }, {
                  default: v(() => [
                    D(s(Hg), {
                      class: "h-9",
                      placeholder: l.value
                    }, null, 8, ["placeholder"]),
                    D(s(Ug), null, {
                      default: v(() => [
                        q(Q(o.value), 1)
                      ]),
                      _: 1
                    }),
                    D(s(Yg), null, {
                      default: v(() => [
                        D(s(Kg), null, {
                          default: v(() => [
                            (f(!0), L(Z, null, ge(p.options, (m) => (f(), y(s(jg), {
                              key: m.id,
                              value: m,
                              onSelect: _[0] || (_[0] = () => {
                                p.multiple || (r.value = !1);
                              })
                            }, {
                              default: v(() => [
                                q(Q(m.name) + " ", 1),
                                D(s(zn), {
                                  class: W(s(T)("ml-auto size-4", c(m) ? "opacity-100" : "opacity-0"))
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
}), u_ = /* @__PURE__ */ g({
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
    }), l = A(n.modelValue);
    return X(l, () => {
      a("update:modelValue", l.value);
    }), ue(() => {
      n.defaultValue && (l.value = n.defaultValue);
    }), (r, i) => (f(), y(s(Et), K(H(r.$props)), {
      default: v(() => [
        D(s(Ei), null, {
          default: v(() => [
            D(s(Oi), { "as-child": "" }, {
              default: v(() => [
                D(s(Ge), {
                  variant: "outline",
                  class: W(["w-[280px] justify-start text-left font-normal text-text"])
                }, {
                  default: v(() => [
                    D(s(ig), { class: "mr-2 size-4" }),
                    q(" " + Q(l.value ? s(o).format(l.value.toDate(s(Vt)())) : r.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            D(s(Ai), { class: "w-auto p-0" }, {
              default: v(() => [
                D(s(Bg), {
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
var ke = [];
for (var lo = 0; lo < 256; ++lo)
  ke.push((lo + 256).toString(16).slice(1));
function wy(t, e = 0) {
  return (ke[t[e + 0]] + ke[t[e + 1]] + ke[t[e + 2]] + ke[t[e + 3]] + "-" + ke[t[e + 4]] + ke[t[e + 5]] + "-" + ke[t[e + 6]] + ke[t[e + 7]] + "-" + ke[t[e + 8]] + ke[t[e + 9]] + "-" + ke[t[e + 10]] + ke[t[e + 11]] + ke[t[e + 12]] + ke[t[e + 13]] + ke[t[e + 14]] + ke[t[e + 15]]).toLowerCase();
}
var sn, xy = new Uint8Array(16);
function $y() {
  if (!sn && (sn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !sn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return sn(xy);
}
var Cy = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const vl = {
  randomUUID: Cy
};
function ky(t, e, a) {
  if (vl.randomUUID && !t)
    return vl.randomUUID();
  t = t || {};
  var n = t.random || (t.rng || $y)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, wy(n);
}
const By = { class: "flex items-center space-x-2" }, Dy = ["src"], Sy = ["accept"], c_ = /* @__PURE__ */ g({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = "file-upload-" + ky(), l = $(() => i.value ? URL.createObjectURL(i.value) : null), r = a.currentImage ? a.currentImage : a.defaultImage, i = $({
      get: () => a.modelValue,
      set: (c) => n("update:modelValue", c)
    }), d = (c) => {
      i.value = c.target.files[0];
    }, u = () => document.getElementById(o).click();
    return (c, p) => (f(), y(s(Et), K(H(c.$props)), {
      default: v(() => [
        re("div", By, [
          b(c.$slots, "image", {
            newImage: l.value,
            curImage: s(r)
          }, () => [
            re("img", {
              src: l.value ?? s(r),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, Dy)
          ]),
          re("input", {
            id: o,
            accept: c.accept,
            hidden: "",
            type: "file",
            onInput: d
          }, null, 40, Sy),
          D(s(Ge), {
            variant: "outline",
            onClick: u
          }, {
            default: v(() => p[0] || (p[0] = [
              q(" Upload ")
            ])),
            _: 1
          })
        ])
      ]),
      _: 3
    }, 16));
  }
}), Py = ["disabled", "placeholder", "required", "type"], Ey = /* @__PURE__ */ g({
  __name: "Input",
  props: /* @__PURE__ */ uo({
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
    const e = Al(t, "modelValue");
    return (a, n) => (f(), y(s(Et), K(H(a.$props)), {
      default: v(() => [
        ia(re("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => e.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: W(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
          }])
        }, null, 10, Py), [
          [td, e.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), Oy = /* @__PURE__ */ g({
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
    return (l, r) => (f(), y(s(nm), K(H(s(o))), {
      default: v(({ open: i }) => [
        b(l.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Ay = /* @__PURE__ */ g({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Dm), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), My = /* @__PURE__ */ g({
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
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(lm), P(s(n), {
      class: s(T)(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-start text-sm ring-offset-background transition placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        e.class
      )
    }), {
      default: v(() => [
        b(o.$slots, "default"),
        D(s(Sm), { "as-child": "" }, {
          default: v(() => [
            D(s($s), {
              class: W(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ty = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(rm), null, {
      default: v(() => [
        D(s(mm), P({ ...s(l), ...r.$attrs }, {
          class: s(T)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            r.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: v(() => [
            D(s(Vy)),
            D(s(Cm), {
              class: W(
                s(T)(
                  "p-1",
                  r.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: v(() => [
                b(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            D(s(Fy))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), p_ = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(xm), P({
      class: s(T)("w-full p-1", e.class)
    }, a.value), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Iy = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Ry = /* @__PURE__ */ g({
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
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(ym), P(s(n), {
      class: s(T)(
        "focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        e.class
      )
    }), {
      default: v(() => [
        re("span", Iy, [
          D(s(bm), null, {
            default: v(() => [
              D(s(zn), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        D(s(ai), null, {
          default: v(() => [
            b(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), f_ = /* @__PURE__ */ g({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(ai), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), v_ = /* @__PURE__ */ g({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s($m), {
      class: W(s(T)("py-1.5 pl-8 pr-2 text-sm font-semibold", e.class))
    }, {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), m_ = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(hm), P(a.value, {
      class: s(T)("-mx-1 my-1 h-px bg-muted", e.class)
    }), null, 16, ["class"]));
  }
}), Vy = /* @__PURE__ */ g({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(km), P(s(n), {
      class: s(T)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: v(() => [
        b(o.$slots, "default", {}, () => [
          D(s(ug), { class: "size-4 text-primary" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fy = /* @__PURE__ */ g({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Bm), P(s(n), {
      class: s(T)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: v(() => [
        b(o.$slots, "default", {}, () => [
          D(s($s), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), h_ = /* @__PURE__ */ g({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, n = t, o = $(() => n.placeholder ?? "Select an option..."), l = A(
      n.modelValue ? n.options.find((r) => r === n.modelValue) : null
    );
    return X(l, () => {
      a("update:modelValue", l.value);
    }), (r, i) => (f(), y(s(Et), K(H(r.$props)), {
      default: v(() => [
        D(s(Oy), {
          modelValue: l.value,
          "onUpdate:modelValue": i[0] || (i[0] = (d) => l.value = d)
        }, {
          default: v(({ open: d }) => [
            D(s(My), { open: d }, {
              default: v(() => [
                D(s(Ay), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            D(s(Ty), null, {
              default: v(() => [
                (f(!0), L(Z, null, ge(r.options, (u) => (f(), y(s(Ry), { value: u }, {
                  default: v(() => [
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
});
function Mi(t) {
  return Oo() ? (Ao(t), !0) : !1;
}
function Kn(t) {
  return typeof t == "function" ? t() : s(t);
}
const Ly = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ny = (t) => typeof t < "u", zy = Object.prototype.toString, Uy = (t) => zy.call(t) === "[object Object]", Ti = () => {
};
function Ky(t, e) {
  function a(...n) {
    return new Promise((o, l) => {
      Promise.resolve(t(() => e.apply(this, n), { fn: e, thisArg: this, args: n })).then(o).catch(l);
    });
  }
  return a;
}
const Ii = (t) => t();
function Wy(t = Ii) {
  const e = A(!0);
  function a() {
    e.value = !1;
  }
  function n() {
    e.value = !0;
  }
  const o = (...l) => {
    e.value && t(...l);
  };
  return { isActive: Va(e), pause: a, resume: n, eventFilter: o };
}
function Hy(t) {
  return tt();
}
function jy(...t) {
  if (t.length !== 1)
    return xl(...t);
  const e = t[0];
  return typeof e == "function" ? Va(Ol(() => ({ get: e, set: Ti }))) : A(e);
}
function Gy(t, e, a = {}) {
  const {
    eventFilter: n = Ii,
    ...o
  } = a;
  return X(
    t,
    Ky(
      n,
      e
    ),
    o
  );
}
function Yy(t, e, a = {}) {
  const {
    eventFilter: n,
    ...o
  } = a, { eventFilter: l, pause: r, resume: i, isActive: d } = Wy(n);
  return { stop: Gy(
    t,
    e,
    {
      ...o,
      eventFilter: l
    }
  ), pause: r, resume: i, isActive: d };
}
function Ri(t, e = !0, a) {
  Hy() ? ue(t, a) : e ? t() : se(t);
}
function Vi(t) {
  var e;
  const a = Kn(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
const ra = Ly ? window : void 0;
function So(...t) {
  let e, a, n, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([a, n, o] = t, e = ra) : [e, a, n, o] = t, !e)
    return Ti;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const l = [], r = () => {
    l.forEach((c) => c()), l.length = 0;
  }, i = (c, p, _, m) => (c.addEventListener(p, _, m), () => c.removeEventListener(p, _, m)), d = X(
    () => [Vi(e), Kn(o)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const _ = Uy(p) ? { ...p } : p;
      l.push(
        ...a.flatMap((m) => n.map((x) => i(c, m, x, _)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), r();
  };
  return Mi(u), u;
}
function qy() {
  const t = A(!1), e = tt();
  return e && ue(() => {
    t.value = !0;
  }, e), t;
}
function Jy(t) {
  const e = qy();
  return $(() => (e.value, !!t()));
}
function Fi(t, e = {}) {
  const { window: a = ra } = e, n = Jy(() => a && "matchMedia" in a && typeof a.matchMedia == "function");
  let o;
  const l = A(!1), r = (u) => {
    l.value = u.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", r) : o.removeListener(r));
  }, d = be(() => {
    n.value && (i(), o = a.matchMedia(Kn(t)), "addEventListener" in o ? o.addEventListener("change", r) : o.addListener(r), l.value = o.matches);
  });
  return Mi(() => {
    d(), i(), o = void 0;
  }), l;
}
function Qy(t) {
  return JSON.parse(JSON.stringify(t));
}
const ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, rn = "__vueuse_ssr_handlers__", Zy = /* @__PURE__ */ Xy();
function Xy() {
  return rn in ln || (ln[rn] = ln[rn] || {}), ln[rn];
}
function Li(t, e) {
  return Zy[t] || e;
}
function eb(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const tb = {
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
}, ml = "vueuse-storage";
function ab(t, e, a, n = {}) {
  var o;
  const {
    flush: l = "pre",
    deep: r = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: d = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: p = ra,
    eventFilter: _,
    onError: m = (B) => {
      console.error(B);
    },
    initOnMounted: x
  } = n, h = (c ? Eo : A)(typeof e == "function" ? e() : e);
  if (!a)
    try {
      a = Li("getDefaultStorage", () => {
        var B;
        return (B = ra) == null ? void 0 : B.localStorage;
      })();
    } catch (B) {
      m(B);
    }
  if (!a)
    return h;
  const w = Kn(e), C = eb(w), S = (o = n.serializer) != null ? o : tb[C], { pause: k, resume: E } = Yy(
    h,
    () => R(h.value),
    { flush: l, deep: r, eventFilter: _ }
  );
  p && i && Ri(() => {
    So(p, "storage", U), So(p, ml, z), x && U();
  }), x || U();
  function O(B, I) {
    p && p.dispatchEvent(new CustomEvent(ml, {
      detail: {
        key: t,
        oldValue: B,
        newValue: I,
        storageArea: a
      }
    }));
  }
  function R(B) {
    try {
      const I = a.getItem(t);
      if (B == null)
        O(I, null), a.removeItem(t);
      else {
        const V = S.write(B);
        I !== V && (a.setItem(t, V), O(I, V));
      }
    } catch (I) {
      m(I);
    }
  }
  function M(B) {
    const I = B ? B.newValue : a.getItem(t);
    if (I == null)
      return d && w != null && a.setItem(t, S.write(w)), w;
    if (!B && u) {
      const V = S.read(I);
      return typeof u == "function" ? u(V, w) : C === "object" && !Array.isArray(V) ? { ...w, ...V } : V;
    } else return typeof I != "string" ? I : S.read(I);
  }
  function U(B) {
    if (!(B && B.storageArea !== a)) {
      if (B && B.key == null) {
        h.value = w;
        return;
      }
      if (!(B && B.key !== t)) {
        k();
        try {
          (B == null ? void 0 : B.newValue) !== S.write(h.value) && (h.value = M(B));
        } catch (I) {
          m(I);
        } finally {
          B ? se(E) : E();
        }
      }
    }
  }
  function z(B) {
    U(B.detail);
  }
  return h;
}
function Ni(t) {
  return Fi("(prefers-color-scheme: dark)", t);
}
function nb(t = {}) {
  const {
    selector: e = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = ra,
    storage: l,
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
  }, _ = Ni({ window: o }), m = $(() => _.value ? "dark" : "light"), x = d || (r == null ? jy(n) : ab(r, n, l, { window: o, listenToStorageChanges: i })), h = $(() => x.value === "auto" ? m.value : x.value), w = Li(
    "updateHTMLAttrs",
    (E, O, R) => {
      const M = typeof E == "string" ? o == null ? void 0 : o.document.querySelector(E) : Vi(E);
      if (!M)
        return;
      let U;
      if (c && (U = o.document.createElement("style"), U.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(U)), O === "class") {
        const z = R.split(/\s/g);
        Object.values(p).flatMap((B) => (B || "").split(/\s/g)).filter(Boolean).forEach((B) => {
          z.includes(B) ? M.classList.add(B) : M.classList.remove(B);
        });
      } else
        M.setAttribute(O, R);
      c && (o.getComputedStyle(U).opacity, document.head.removeChild(U));
    }
  );
  function C(E) {
    var O;
    w(e, a, (O = p[E]) != null ? O : E);
  }
  function S(E) {
    t.onChanged ? t.onChanged(E, C) : C(E);
  }
  X(h, S, { flush: "post", immediate: !0 }), Ri(() => S(h.value));
  const k = $({
    get() {
      return u ? x.value : h.value;
    },
    set(E) {
      x.value = E;
    }
  });
  try {
    return Object.assign(k, { store: x, system: m, state: h });
  } catch {
    return k;
  }
}
function ob(t = {}) {
  const {
    valueDark: e = "dark",
    valueLight: a = "",
    window: n = ra
  } = t, o = nb({
    ...t,
    onChanged: (i, d) => {
      var u;
      t.onChanged ? (u = t.onChanged) == null || u.call(t, i === "dark", d, i) : d(i);
    },
    modes: {
      dark: e,
      light: a
    }
  }), l = $(() => o.system ? o.system.value : Ni({ window: n }).value ? "dark" : "light");
  return $({
    get() {
      return o.value === "dark";
    },
    set(i) {
      const d = i ? "dark" : "light";
      l.value === d ? o.value = "auto" : o.value = d;
    }
  });
}
function zi(t, e, a, n = {}) {
  var o, l, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: _
  } = n, m = tt(), x = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (l = m == null ? void 0 : m.proxy) == null ? void 0 : l.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let h = u;
  e || (e = "modelValue"), h = h || `update:${e.toString()}`;
  const w = (k) => i ? typeof i == "function" ? i(k) : Qy(k) : k, C = () => Ny(t[e]) ? w(t[e]) : p, S = (k) => {
    _ ? _(k) && x(h, k) : x(h, k);
  };
  if (d) {
    const k = C(), E = A(k);
    let O = !1;
    return X(
      () => t[e],
      (R) => {
        O || (O = !0, E.value = w(R), se(() => O = !1));
      }
    ), X(
      E,
      (R) => {
        !O && (R !== t[e] || c) && S(R);
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
const sb = ["placeholder"], g_ = /* @__PURE__ */ g({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = zi(t, "modelValue", e, {
      passive: !0
    });
    return (l, r) => (f(), y(s(Et), K(H(l.$props)), {
      default: v(() => [
        ia(re("textarea", {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => Ra(o) ? o.value = i : null),
          placeholder: l.placeholder,
          class: W(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !l.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": l.error
          }])
        }, null, 10, sb), [
          [ad, s(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), lb = /* @__PURE__ */ g({
  __name: "Toggle",
  props: /* @__PURE__ */ uo({
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
  emits: /* @__PURE__ */ uo(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const a = e, n = t, o = Al(t, "modelValue");
    X(o, () => {
      a("update:modelValue", o.value);
    });
    const l = $(() => {
      const { class: i, ...d } = n;
      return d;
    }), r = ee(l, a);
    return (i, d) => (f(), y(s(Et), K(H(i.$props)), {
      default: v(() => [
        D(s(Zm), P({
          checked: o.value,
          "onUpdate:checked": d[0] || (d[0] = (u) => o.value = u)
        }, s(r), {
          class: s(T)(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent",
            n.class
          )
        }), {
          default: v(({ checked: u }) => [
            D(s(Xm), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: v(() => [
                u ? b(i.$slots, "checked", { key: 0 }) : J("", !0),
                u ? J("", !0) : b(i.$slots, "not-checked", { key: 1 })
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
}), rb = { class: "my-auto text-slate-400 dark:text-slate-100" }, ib = /* @__PURE__ */ g({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(t) {
    return (e, a) => (f(), L("div", rb, " Showing " + Q(e.min) + " to " + Q(e.max) + " of " + Q(e.total) + " results ", 1));
  }
}), db = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(wv), P(a.value, {
      class: s(T)("flex size-9 items-center justify-center text-text", e.class)
    }), {
      default: v(() => [
        b(n.$slots, "default", {}, () => [
          D(s(Ci))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ub = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(xv), K(H(a.value)), {
      default: v(() => [
        D(s(Ge), {
          class: W(s(T)("size-10 p-0", e.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: v(() => [
            b(n.$slots, "default", {}, () => [
              D(s(cg), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), cb = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s($v), K(H(a.value)), {
      default: v(() => [
        D(s(Ge), {
          class: W(s(T)("size-10 p-0", e.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: v(() => [
            b(n.$slots, "default", {}, () => [
              D(s(pg), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), pb = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(Dv), K(H(a.value)), {
      default: v(() => [
        D(s(Ge), {
          class: W(s(T)("size-10 p-0", e.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: v(() => [
            b(n.$slots, "default", {}, () => [
              D(s(Cs), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), fb = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(Sv), K(H(a.value)), {
      default: v(() => [
        D(s(Ge), {
          class: W(s(T)("size-10 p-0", e.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: v(() => [
            b(n.$slots, "default", {}, () => [
              D(s(dg), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), y_ = /* @__PURE__ */ g({
  __name: "LumuixModeToggle",
  setup(t) {
    const e = ob({
      selector: "html"
    });
    return (a, n) => (f(), y(lb, {
      modelValue: s(e),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => Ra(e) ? e.value = o : null)
    }, {
      checked: v(() => [
        D(s(hg), { class: "m-auto mt-0.5 size-4 text-primary" })
      ]),
      "not-checked": v(() => [
        D(s(wg), { class: "m-auto mt-0.5 size-4 text-primary" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), b_ = /* @__PURE__ */ g({
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
    return (o, l) => (f(), L(Z, null, [
      D(s(Ia), {
        onClick: n,
        class: W(e.class)
      }, {
        default: v(() => [
          (f(!0), L(Z, null, ge(o.headers, (r) => (f(), y(s(kn), {
            key: r.value
          }, {
            default: v(() => [
              o.$slots[`cell_header_${r.value}`] ? b(o.$slots, `cell_header_${r.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (f(), L(Z, { key: 1 }, [
                q(Q(o.row[r.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (f(), y(s(Po), { key: 0 }, {
            default: v(() => [
              b(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : J("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (f(!0), L(Z, { key: 0 }, ge(o.subRows, (r, i) => (f(), y(s(Ia), { key: i }, {
        default: v(() => [
          (f(!0), L(Z, null, ge(o.headers, (d) => (f(), y(s(kn), {
            key: d.value
          }, {
            default: v(() => [
              o.$slots[`subrow_cell_${d.value}`] ? b(o.$slots, `subrow_cell_${d.value}`, {
                key: 0,
                item: r,
                open: a.value
              }) : (f(), L(Z, { key: 1 }, [
                q(Q("subrow_cell_" + d.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (f(), y(s(Po), { key: 0 }, {
            default: v(() => [
              b(o.$slots, "sub_row_actions", {
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
}), vb = { class: "relative w-full overflow-auto" }, mb = /* @__PURE__ */ g({
  __name: "Table",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", vb, [
      re("table", {
        class: W(s(T)("w-full caption-bottom text-sm", e.class))
      }, [
        b(a.$slots, "default")
      ], 2)
    ]));
  }
}), hb = /* @__PURE__ */ g({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("tbody", {
      class: W(s(T)("[&_tr:last-child]:border-0", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), kn = /* @__PURE__ */ g({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("td", {
      class: W(["p-4 align-middle text-text [&:has([role=checkbox])]:pr-0", e.class])
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), gb = /* @__PURE__ */ g({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("th", {
      class: W(
        s(T)(
          "h-12 px-4 text-left align-middle font-medium text-heading [&:has([role=checkbox])]:pr-0",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), yb = /* @__PURE__ */ g({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("thead", {
      class: W(s(T)("[&_tr]:border-b", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), __ = /* @__PURE__ */ g({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("tfoot", {
      class: W(
        s(T)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ia = /* @__PURE__ */ g({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("tr", {
      class: W(
        s(T)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Po = /* @__PURE__ */ g({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("td", {
      class: W(["w-32 p-4 text-center align-middle dark:text-slate-300", e.class])
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), bb = /* @__PURE__ */ g({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("caption", {
      class: W(s(T)("mt-4 text-sm text-sub-text", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), _b = { class: "flex items-center justify-center py-10" }, w_ = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(Ia, null, {
      default: v(() => [
        D(kn, P({
          class: s(T)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            e.class
          )
        }, a.value), {
          default: v(() => [
            re("div", _b, [
              b(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), x_ = /* @__PURE__ */ g({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(t) {
    return (e, a) => (f(), y(s(mb), null, {
      default: v(() => [
        e.caption ? (f(), y(s(bb), { key: 0 }, {
          default: v(() => [
            q(Q(e.caption), 1)
          ]),
          _: 1
        })) : J("", !0),
        D(s(yb), null, {
          default: v(() => [
            D(s(Ia), null, {
              default: v(() => [
                (f(!0), L(Z, null, ge(e.headers, (n, o) => (f(), y(s(gb), null, {
                  default: v(() => [
                    e.$slots[`header_${e.headers[o].value}`] ? b(e.$slots, `header_${e.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (f(), L(Z, { key: 1 }, [
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
        D(s(hb), null, {
          default: v(() => [
            (f(!0), L(Z, null, ge(e.rows, (n, o) => (f(), y(s(Ia), { key: o }, {
              default: v(() => [
                (f(!0), L(Z, null, ge(e.headers, (l) => (f(), y(s(kn), {
                  key: l.value
                }, {
                  default: v(() => [
                    e.$slots[`cell_${l.value}`] ? b(e.$slots, `cell_${l.value}`, {
                      key: 0,
                      item: n
                    }) : (f(), L(Z, { key: 1 }, [
                      q(Q(n[l.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                e.$slots.row_actions ? (f(), y(s(Po), { key: 0 }, {
                  default: v(() => [
                    b(e.$slots, "row_actions", { item: n })
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
}), wb = { class: "text-text" }, $_ = /* @__PURE__ */ g({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const a = e, n = () => a("close");
    return (o, l) => (f(), y(s(Di), { open: o.open }, {
      default: v(() => [
        D(s(Vg), { "as-child": "" }, {
          default: v(() => [
            b(o.$slots, "trigger")
          ]),
          _: 3
        }),
        D(s(Si), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: W("max-w-" + o.size)
        }, {
          default: v(() => [
            D(s(Fg), null, {
              default: v(() => [
                D(s(Lg), null, {
                  default: v(() => {
                    var r;
                    return [
                      o.$slots.title ? b(o.$slots, "title", { key: 0 }) : (r = o.headerData) != null && r.title ? (f(), L(Z, { key: 1 }, [
                        q(Q(o.headerData.title), 1)
                      ], 64)) : J("", !0)
                    ];
                  }),
                  _: 3
                }),
                D(s(Ng), null, {
                  default: v(() => {
                    var r;
                    return [
                      o.$slots.description ? b(o.$slots, "description", { key: 0 }) : (r = o.headerData) != null && r.description ? (f(), L(Z, { key: 1 }, [
                        q(Q(o.headerData.description), 1)
                      ], 64)) : J("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            re("div", wb, [
              o.$slots.content ? b(o.$slots, "content", { key: 0 }) : b(o.$slots, "default", { key: 1 })
            ]),
            D(s(zg), null, {
              default: v(() => [
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
}), xb = { class: "justify-between sm:flex" }, C_ = /* @__PURE__ */ g({
  __name: "LumuixPagination",
  props: {
    data: {},
    as: {}
  },
  setup(t) {
    const e = t, a = () => e.data.current_page === 1 ? e.data.data.length === 0 ? 0 : 1 : e.data.current_page === e.data.last_page ? e.data.total - e.data.data.length : e.data.current_page * e.data.per_page - e.data.per_page, n = () => e.data.current_page === 1 ? e.data.data.length : e.data.current_page === e.data.last_page ? e.data.total : e.data.current_page * e.data.per_page;
    return (o, l) => (f(), L("div", xb, [
      D(s(ib), {
        min: a(),
        max: n(),
        total: o.data.total
      }, null, 8, ["min", "max", "total"]),
      D(s(_v), null, {
        default: v(() => [
          D(s(Bv), { class: "flex items-center gap-1" }, {
            default: v(() => [
              D(s(ub), {
                as: o.as,
                "as-child": "",
                href: o.data.first_page_url
              }, null, 8, ["as", "href"]),
              o.data.prev_page_url ? (f(), y(s(fb), {
                key: 0,
                as: o.as,
                "as-child": "",
                href: o.data.prev_page_url
              }, null, 8, ["as", "href"])) : J("", !0),
              (f(!0), L(Z, null, ge(o.data.links, (r, i) => (f(), L(Z, null, [
                i < 5 ? (f(), L("div", { key: i }, [
                  D(s(Ge), {
                    href: r.url,
                    as: o.as,
                    class: "size-10 p-0",
                    variant: r.active ? "primary" : "outline"
                  }, {
                    default: v(() => [
                      q(Q(r.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["href", "as", "variant"])
                ])) : J("", !0)
              ], 64))), 256)),
              o.data.links.length > 5 ? (f(), y(s(db), { key: 1 })) : J("", !0),
              o.data.next_page_url ? (f(), y(s(pb), {
                key: 2,
                as: o.as,
                "as-child": "",
                href: o.data.next_page_url
              }, null, 8, ["as", "href"])) : J("", !0),
              D(s(cb), {
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
}), $b = /* @__PURE__ */ g({
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
    return (l, r) => (f(), y(s(th), K(H(s(o))), {
      default: v(() => [
        b(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), k_ = /* @__PURE__ */ g({
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
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(oh), P(s(n), {
      class: s(T)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        e.class
      )
    }), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cb = /* @__PURE__ */ g({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => {
      var o;
      return f(), y(Oe((o = a.tab) != null && o.is ? a.tab.is : "a"), {
        href: a.tab.href,
        class: W([
          a.tab.active ? "bg-white text-primary hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          s(T)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            e.class
          )
        ])
      }, {
        default: v(() => {
          var l;
          return [
            (l = a.tab) != null && l.icon ? (f(), y(Oe(a.tab.icon), {
              key: 0,
              class: "size-5"
            })) : J("", !0),
            q(" " + Q(a.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), hl = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(ah), P(a.value, {
      class: s(T)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        e.class
      )
    }), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), B_ = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(nh), P({
      class: s(T)(
        "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        e.class
      )
    }, a.value), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kb = {}, Bb = { class: "mt-2 text-text ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function Db(t, e) {
  return f(), L("div", Bb, [
    b(t.$slots, "default")
  ]);
}
const Sb = /* @__PURE__ */ qa(kb, [["render", Db]]), D_ = /* @__PURE__ */ g({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(t) {
    const e = t, a = $(
      () => e.tabs.find((n) => n.active)
    );
    return (n, o) => (f(), y(s($b), null, {
      default: v(() => [
        D(s(hl), { class: "hidden gap-2 md:block" }, {
          default: v(() => [
            (f(!0), L(Z, null, ge(n.tabs, (l) => (f(), y(s(Cb), {
              key: l.name,
              tab: l
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        D(s(hl), { class: "flex md:hidden" }, {
          default: v(() => [
            D(s(qg), null, {
              default: v(() => [
                D(s(Qg), { "as-child": "" }, {
                  default: v(() => [
                    D(s(Ge), { variant: "secondary" }, {
                      default: v(() => {
                        var l;
                        return [
                          q(Q(((l = a.value) == null ? void 0 : l.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                D(s(Zg), { class: "w-full" }, {
                  default: v(() => [
                    (f(!0), L(Z, null, ge(n.tabs, (l) => (f(), y(s(Xg), P({
                      key: l.name,
                      ref_for: !0
                    }, l), {
                      default: v(() => [
                        q(Q(l.name), 1)
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
        D(s(Sb), null, {
          default: v(() => [
            b(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Pb = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, S_ = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(Nv), P({
      class: s(T)("p-3", a.class)
    }, s(l)), {
      default: v(({ grid: d, weekDays: u }) => [
        D(s(Rb), null, {
          default: v(() => [
            D(s(Lb)),
            D(s(Vb)),
            D(s(Fb))
          ]),
          _: 1
        }),
        re("div", Pb, [
          (f(!0), L(Z, null, ge(d, (c) => (f(), y(s(Ab), {
            key: c.value.toString()
          }, {
            default: v(() => [
              D(s(Tb), null, {
                default: v(() => [
                  D(s(gl), null, {
                    default: v(() => [
                      (f(!0), L(Z, null, ge(u, (p) => (f(), y(s(Ib), { key: p }, {
                        default: v(() => [
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
              D(s(Mb), null, {
                default: v(() => [
                  (f(!0), L(Z, null, ge(c.rows, (p, _) => (f(), y(s(gl), {
                    key: `weekDate-${_}`,
                    class: "mt-2 w-full"
                  }, {
                    default: v(() => [
                      (f(!0), L(Z, null, ge(p, (m) => (f(), y(s(Eb), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: v(() => [
                          D(s(Ob), {
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
}), Eb = /* @__PURE__ */ g({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Wv), P({
      class: s(T)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        e.class
      )
    }, s(n)), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ob = /* @__PURE__ */ g({
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
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Qv), P({
      class: s(T)(
        s(Wt)({ variant: "ghost" }),
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
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ab = /* @__PURE__ */ g({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Kv), P({
      class: s(T)("w-full border-collapse space-y-1", e.class)
    }, s(n)), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mb = /* @__PURE__ */ g({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(qv), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tb = /* @__PURE__ */ g({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Yv), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gl = /* @__PURE__ */ g({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Jv), P({
      class: s(T)("mt-2 flex w-full", e.class)
    }, s(n)), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ib = /* @__PURE__ */ g({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Hv), P({
      class: s(T)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, s(n)), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rb = /* @__PURE__ */ g({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(zv), P({
      class: s(T)("relative flex w-full items-center justify-between pt-1", e.class)
    }, s(n)), {
      default: v(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vb = /* @__PURE__ */ g({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => {
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Uv), P({
      class: s(T)("text-sm font-medium text-text", e.class)
    }, s(n)), {
      default: v(({ headingValue: r }) => [
        b(o.$slots, "default", { headingValue: r }, () => [
          q(Q(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fb = /* @__PURE__ */ g({
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
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(jv), P({
      class: s(T)(
        s(Wt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: v(() => [
        b(o.$slots, "default", {}, () => [
          D(s(yg), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lb = /* @__PURE__ */ g({
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
      const { class: o, ...l } = e;
      return l;
    }), n = le(a);
    return (o, l) => (f(), y(s(Gv), P({
      class: s(T)(
        s(Wt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: v(() => [
        b(o.$slots, "default", {}, () => [
          D(s(gg), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Nb = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(Em), P(a.value, {
      class: s(T)(
        "relative shrink-0 bg-border",
        e.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        e.class
      )
    }), {
      default: v(() => [
        e.label ? (f(), L("span", {
          key: 0,
          class: W(
            s(T)(
              "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background text-xs text-muted-foreground",
              e.orientation === "vertical" ? "w-[1px] px-1 py-2" : "h-[1px] px-2 py-1"
            )
          )
        }, Q(e.label), 3)) : J("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), zb = /* @__PURE__ */ g({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ee(t, e);
    return (l, r) => (f(), y(s(Pr), K(H(s(o))), {
      default: v(() => [
        b(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), P_ = /* @__PURE__ */ g({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Ha), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ub = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(ss), null, {
      default: v(() => [
        D(s(us), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        D(s(ds), P({
          class: s(T)(s(Kb)({ side: r.side }), a.class)
        }, { ...s(l), ...r.$attrs }), {
          default: v(() => [
            b(r.$slots, "default"),
            D(s(Ha), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: v(() => [
                D(s(Un), { class: "h-4 w-4 text-muted-foreground" })
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
}), E_ = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(Ir), P({
      class: s(T)("text-sm text-muted-foreground", e.class)
    }, a.value), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), O_ = /* @__PURE__ */ g({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: W(s(T)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), A_ = /* @__PURE__ */ g({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: W(s(T)("flex flex-col gap-y-2 text-center sm:text-left", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), M_ = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(Tr), P({
      class: s(T)("text-lg font-semibold text-foreground", e.class)
    }, a.value), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), T_ = /* @__PURE__ */ g({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Er), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kb = _a(
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
), Wb = "sidebar:state", Hb = 60 * 60 * 24 * 7, jb = "16rem", Gb = "18rem", Yb = "3rem", qb = "b", [Wn, Jb] = ne("Sidebar"), Qb = { class: "flex h-full w-full flex-col" }, Zb = ["data-state", "data-collapsible", "data-variant", "data-side"], Xb = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col bg-sidebar text-sidebar-foreground group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow"
}, I_ = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(t) {
    const e = t, { isMobile: a, state: n, openMobile: o, setOpenMobile: l } = Wn();
    return (r, i) => r.collapsible === "none" ? (f(), L("div", P({
      key: 0,
      class: s(T)("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", e.class)
    }, r.$attrs), [
      b(r.$slots, "default")
    ], 16)) : s(a) ? (f(), y(s(zb), P({
      key: 1,
      open: s(o)
    }, r.$attrs, { "onUpdate:open": s(l) }), {
      default: v(() => [
        D(s(Ub), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: r.side,
          class: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: St({
            "--sidebar-width": s(Gb)
          })
        }, {
          default: v(() => [
            re("div", Qb, [
              b(r.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
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
        class: W(
          s(T)(
            "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            r.variant === "floating" || r.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )
        )
      }, null, 2),
      re("div", P({
        class: s(T)(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          r.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          r.variant === "floating" || r.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          e.class
        )
      }, r.$attrs), [
        re("div", Xb, [
          b(r.$slots, "default", { state: s(n) })
        ])
      ], 16)
    ], 8, Zb));
  }
}), R_ = /* @__PURE__ */ g({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "content",
      class: W(
        s(T)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto bg-sidebar group-data-[collapsible=icon]:overflow-hidden",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), V_ = /* @__PURE__ */ g({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "footer",
      class: W(s(T)("flex flex-col gap-2 p-2", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), F_ = /* @__PURE__ */ g({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "group",
      class: W(s(T)("relative flex w-full min-w-0 flex-col p-2", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), L_ = /* @__PURE__ */ g({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), {
      "data-sidebar": "group-action",
      as: a.as,
      "as-child": a.asChild,
      class: W(
        s(T)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), N_ = /* @__PURE__ */ g({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "group-content",
      class: W(s(T)("w-full text-sm", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), z_ = /* @__PURE__ */ g({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), {
      "data-sidebar": "group-label",
      as: a.as,
      "as-child": a.asChild,
      class: W(
        s(T)(
          "ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          e.class
        )
      )
    }, {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), U_ = /* @__PURE__ */ g({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "header",
      class: W(s(T)("flex flex-col gap-2 p-2", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), K_ = /* @__PURE__ */ g({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(Ey, {
      "data-sidebar": "input",
      class: W(
        s(T)(
          "focus-visible:ring-sidebar-ring h-8 w-full bg-background shadow-none focus-visible:ring-2",
          e.class
        )
      )
    }, {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), W_ = /* @__PURE__ */ g({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("main", {
      class: W(
        s(T)(
          "relative flex min-h-svh flex-1 flex-col bg-background",
          "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), H_ = /* @__PURE__ */ g({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("ul", {
      "data-sidebar": "menu",
      class: W(s(T)("flex w-full min-w-0 flex-col gap-1", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), j_ = /* @__PURE__ */ g({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(F), {
      "data-sidebar": "menu-action",
      class: W(
        s(T)(
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
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), G_ = /* @__PURE__ */ g({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "menu-badge",
      class: W(
        s(T)(
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
}), e0 = /* @__PURE__ */ g({
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
    return (l, r) => (f(), y(s($h), K(H(s(o))), {
      default: v(() => [
        b(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), t0 = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(Dh), null, {
      default: v(() => [
        D(s(Bh), P({ ...s(l), ...r.$attrs }, {
          class: s(T)(
            "z-50 overflow-hidden rounded-md border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            a.class
          )
        }), {
          default: v(() => [
            b(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Y_ = /* @__PURE__ */ g({
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
    return (a, n) => (f(), y(s(gi), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), a0 = /* @__PURE__ */ g({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(Ch), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yl = /* @__PURE__ */ g({
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
    return (a, n) => (f(), y(s(F), P({
      "data-sidebar": "menu-button",
      "data-size": a.size,
      "data-active": a.isActive,
      class: s(T)(s(s0)({ variant: a.variant, size: a.size }), e.class),
      as: a.as,
      "as-child": a.asChild
    }, a.$attrs), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), q_ = /* @__PURE__ */ g({
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
    const e = t, { isMobile: a, state: n } = Wn(), o = $(() => {
      const { tooltip: l, ...r } = e;
      return r;
    });
    return (l, r) => l.tooltip ? (f(), y(s(e0), { key: 1 }, {
      default: v(() => [
        D(s(a0), { "as-child": "" }, {
          default: v(() => [
            D(yl, K(H({ ...o.value, ...l.$attrs })), {
              default: v(() => [
                b(l.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        D(s(t0), {
          side: "right",
          align: "center",
          hidden: s(n) !== "collapsed" || s(a)
        }, {
          default: v(() => [
            typeof l.tooltip == "string" ? (f(), L(Z, { key: 0 }, [
              q(Q(l.tooltip), 1)
            ], 64)) : (f(), y(Oe(l.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (f(), y(yl, K(P({ key: 0 }, { ...o.value, ...l.$attrs })), {
      default: v(() => [
        b(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), J_ = /* @__PURE__ */ g({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("li", {
      "data-sidebar": "menu-item",
      class: W(s(T)("group/menu-item relative", e.class))
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), bl = /* @__PURE__ */ g({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: W(s(T)("animate-pulse rounded-md bg-skeleton", e.class))
    }, null, 2));
  }
}), Q_ = /* @__PURE__ */ g({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t, a = $(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (n, o) => (f(), L("div", {
      "data-sidebar": "menu-skeleton",
      class: W(s(T)("flex h-8 items-center gap-2 rounded-md px-2", e.class))
    }, [
      n.showIcon ? (f(), y(bl, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : J("", !0),
      D(bl, {
        class: "h-4 max-w-[--skeleton-width] flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: St({ "--skeleton-width": a.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), Z_ = /* @__PURE__ */ g({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("ul", {
      "data-sidebar": "menu-badge",
      class: W(
        s(T)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), X_ = /* @__PURE__ */ g({
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
    return (a, n) => (f(), y(s(F), {
      "data-sidebar": "menu-sub-button",
      as: a.as,
      "as-child": a.asChild,
      "data-size": a.size,
      "data-active": a.isActive,
      class: W(
        s(T)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          a.size === "sm" && "text-xs",
          a.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), n0 = {};
function o0(t, e) {
  return f(), L("li", null, [
    b(t.$slots, "default")
  ]);
}
const ew = /* @__PURE__ */ qa(n0, [["render", o0]]), tw = /* @__PURE__ */ g({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Fi("(max-width: 768px)"), l = A(!1), r = zi(a, "open", n, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function i(p) {
      r.value = p, document.cookie = `${Wb}=${r.value}; path=/; max-age=${Hb}`;
    }
    function d(p) {
      l.value = p;
    }
    function u() {
      return o.value ? d(!l.value) : i(!r.value);
    }
    So("keydown", (p) => {
      p.key === qb && (p.metaKey || p.ctrlKey) && (p.preventDefault(), u());
    });
    const c = $(() => r.value ? "expanded" : "collapsed");
    return Jb({
      state: c,
      open: r,
      setOpen: i,
      isMobile: o,
      openMobile: l,
      setOpenMobile: d,
      toggleSidebar: u
    }), (p, _) => (f(), y(s(gi), { "delay-duration": 0 }, {
      default: v(() => [
        re("div", P({
          style: {
            "--sidebar-width": s(jb),
            "--sidebar-width-icon": s(Yb)
          },
          class: s(T)(
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
}), aw = /* @__PURE__ */ g({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(t) {
    const e = t, { toggleSidebar: a } = Wn();
    return (n, o) => (f(), L("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: W(
        s(T)(
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
      (...l) => s(a) && s(a)(...l))
    }, [
      b(n.$slots, "default")
    ], 2));
  }
}), nw = /* @__PURE__ */ g({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(Nb, {
      "data-sidebar": "separator",
      class: W(s(T)("bg-sidebar-border mx-2 w-auto", e.class))
    }, {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ow = /* @__PURE__ */ g({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(t) {
    const e = t, { toggleSidebar: a } = Wn();
    return (n, o) => (f(), y(Ge, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: W(s(T)("h-7 w-7", e.class)),
      onClick: s(a)
    }, {
      default: v(() => [
        D(s(bg)),
        o[0] || (o[0] = re("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), s0 = _a(
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
), sw = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(Km), P({
      class: s(T)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        a.class
      )
    }, s(l)), {
      default: v(() => [
        D(s(jm), { class: "relative h-2 w-full grow overflow-hidden rounded-full bg-accent data-[orientation=vertical]:w-2" }, {
          default: v(() => [
            D(s(Gm), { class: "absolute h-full bg-primary data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (f(!0), L(Z, null, ge(r.modelValue, (d, u) => (f(), y(s(Hm), {
          key: u,
          class: "block size-5 rounded-full border-2 border-primary bg-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), l0 = 5, r0 = 5e6, ct = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let ro = 0;
function i0() {
  return ro = (ro + 1) % Number.MAX_VALUE, ro.toString();
}
const io = /* @__PURE__ */ new Map();
function _l(t) {
  if (io.has(t)) return;
  const e = setTimeout(() => {
    io.delete(t), Pa({
      type: ct.REMOVE_TOAST,
      toastId: t
    });
  }, r0);
  io.set(t, e);
}
const Le = A({
  toasts: []
});
function Pa(t) {
  switch (t.type) {
    case ct.ADD_TOAST:
      Le.value.toasts = [t.toast, ...Le.value.toasts].slice(0, l0);
      break;
    case ct.UPDATE_TOAST:
      Le.value.toasts = Le.value.toasts.map(
        (e) => e.id === t.toast.id ? { ...e, ...t.toast } : e
      );
      break;
    case ct.DISMISS_TOAST: {
      const { toastId: e } = t;
      e ? _l(e) : Le.value.toasts.forEach((a) => {
        _l(a.id);
      }), Le.value.toasts = Le.value.toasts.map(
        (a) => a.id === e || e === void 0 ? {
          ...a,
          open: !1
        } : a
      );
      break;
    }
    case ct.REMOVE_TOAST:
      t.toastId === void 0 ? Le.value.toasts = [] : Le.value.toasts = Le.value.toasts.filter((e) => e.id !== t.toastId);
      break;
  }
}
function d0() {
  return {
    toasts: $(() => Le.value.toasts),
    toast: u0,
    dismiss: (t) => Pa({ type: ct.DISMISS_TOAST, toastId: t })
  };
}
function u0(t) {
  const e = i0(), a = (o) => Pa({
    type: ct.UPDATE_TOAST,
    toast: { ...o, id: e }
  }), n = () => Pa({ type: ct.DISMISS_TOAST, toastId: e });
  return Pa({
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
const c0 = { class: "flex gap-3" }, p0 = { class: "grid gap-1" }, lw = /* @__PURE__ */ g({
  __name: "Toaster",
  setup(t) {
    const { toasts: e } = d0();
    return (a, n) => (f(), y(s(g0), null, {
      default: v(() => [
        (f(!0), L(Z, null, ge(s(e), (o) => (f(), y(s(f0), P({
          key: o.id,
          ref_for: !0
        }, o, { class: "my-1" }), {
          default: v(() => [
            re("div", c0, [
              (f(), y(Oe(o.icon), {
                class: W(s(T)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              re("div", p0, [
                o.title ? (f(), y(s(h0), { key: 0 }, {
                  default: v(() => [
                    q(Q(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : J("", !0),
                o.description ? (f(), L(Z, { key: 1 }, [
                  nd(o.description) ? (f(), y(s(wl), { key: 0 }, {
                    default: v(() => [
                      (f(), y(Oe(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (f(), y(s(wl), { key: 1 }, {
                    default: v(() => [
                      q(Q(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : J("", !0),
                D(s(m0))
              ]),
              (f(), y(Oe(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        D(s(v0))
      ]),
      _: 1
    }));
  }
}), f0 = /* @__PURE__ */ g({
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
    }), l = ee(o, n);
    return (r, i) => (f(), y(s(hh), P(s(l), {
      class: s(T)(s(y0)({ variant: r.variant }), a.class),
      "onUpdate:open": r.onOpenChange
    }), {
      default: v(() => [
        b(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), v0 = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(yh), P(a.value, {
      class: s(T)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e.class
      )
    }), null, 16, ["class"]));
  }
}), rw = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(gh), K(H(a.value)), {
      default: v(() => [
        D(s(Ge), {
          variant: n.variant,
          class: W(e.class)
        }, {
          default: v(() => [
            b(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["variant", "class"])
      ]),
      _: 3
    }, 16));
  }
}), m0 = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(mi), P(a.value, {
      class: s(T)(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        e.class
      )
    }), {
      default: v(() => [
        D(s(Un), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), h0 = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(bh), P(a.value, {
      class: s(T)("text-sm font-semibold", e.class)
    }), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wl = /* @__PURE__ */ g({
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
    return (n, o) => (f(), y(s(_h), P({
      class: s(T)("text-sm opacity-90", e.class)
    }, a.value), {
      default: v(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), g0 = /* @__PURE__ */ g({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), y(s(lh), K(H(e)), {
      default: v(() => [
        b(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), y0 = _a(
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
  B0 as Accordion,
  D0 as AccordionContent,
  S0 as AccordionItem,
  P0 as AccordionTrigger,
  E0 as Badge,
  Et as Base,
  Jg as BaseDropdownMenuItem,
  O0 as Breadcrumb,
  A0 as BreadcrumbEllipsis,
  M0 as BreadcrumbItem,
  T0 as BreadcrumbLink,
  I0 as BreadcrumbList,
  R0 as BreadcrumbPage,
  V0 as BreadcrumbSeparator,
  Ge as Button,
  Bg as Calendar,
  Dg as CalendarCell,
  Sg as CalendarCellTrigger,
  Pg as CalendarGrid,
  Eg as CalendarGridBody,
  Og as CalendarGridHead,
  fl as CalendarGridRow,
  Ag as CalendarHeadCell,
  Mg as CalendarHeader,
  Tg as CalendarHeading,
  Ig as CalendarNextButton,
  Rg as CalendarPrevButton,
  F0 as Card,
  U0 as CardContent,
  z0 as CardDescription,
  K0 as CardFooter,
  L0 as CardHeader,
  N0 as CardTitle,
  ny as CharacterCount,
  i_ as Checkbox,
  b_ as CollapsibleTableRow,
  d_ as Combobox,
  Bi as Command,
  j0 as CommandDialog,
  Ug as CommandEmpty,
  Kg as CommandGroup,
  Hg as CommandInput,
  jg as CommandItem,
  Yg as CommandList,
  G0 as CommandSeparator,
  Y0 as CommandShortcut,
  u_ as DatePicker,
  ry as Description,
  Di as Dialog,
  W0 as DialogClose,
  Si as DialogContent,
  Ng as DialogDescription,
  zg as DialogFooter,
  Fg as DialogHeader,
  H0 as DialogScrollContent,
  Lg as DialogTitle,
  Vg as DialogTrigger,
  qg as DropdownMenu,
  Z0 as DropdownMenuCheckboxItem,
  Zg as DropdownMenuContent,
  q0 as DropdownMenuGroup,
  Q0 as DropdownMenuItem,
  a_ as DropdownMenuLabel,
  Xg as DropdownMenuLink,
  rv as DropdownMenuPortal,
  J0 as DropdownMenuRadioGroup,
  X0 as DropdownMenuRadioItem,
  t_ as DropdownMenuSeparator,
  e_ as DropdownMenuShortcut,
  n_ as DropdownMenuSub,
  s_ as DropdownMenuSubContent,
  o_ as DropdownMenuSubTrigger,
  Qg as DropdownMenuTrigger,
  dy as Error,
  l_ as Form,
  hy as FormElement,
  r_ as FormGrid,
  c_ as ImageUpload,
  Ey as Input,
  Pi as Label,
  x_ as LumuixDatatable,
  $_ as LumuixModal,
  y_ as LumuixModeToggle,
  C_ as LumuixPagination,
  D_ as LumuixTabs,
  _v as Pagination,
  ib as PaginationDetails,
  db as PaginationEllipsis,
  ub as PaginationFirst,
  cb as PaginationLast,
  Bv as PaginationList,
  k0 as PaginationListItem,
  pb as PaginationNext,
  fb as PaginationPrev,
  Ei as Popover,
  Ai as PopoverContent,
  Oi as PopoverTrigger,
  S_ as RangeCalendar,
  Eb as RangeCalendarCell,
  Ob as RangeCalendarCellTrigger,
  Ab as RangeCalendarGrid,
  Mb as RangeCalendarGridBody,
  Tb as RangeCalendarGridHead,
  gl as RangeCalendarGridRow,
  Ib as RangeCalendarHeadCell,
  Rb as RangeCalendarHeader,
  Vb as RangeCalendarHeading,
  Fb as RangeCalendarNextButton,
  Lb as RangeCalendarPrevButton,
  h_ as Select,
  Ty as SelectContent,
  p_ as SelectGroup,
  Ry as SelectItem,
  f_ as SelectItemText,
  v_ as SelectLabel,
  Oy as SelectRoot,
  Fy as SelectScrollDownButton,
  Vy as SelectScrollUpButton,
  m_ as SelectSeparator,
  My as SelectTrigger,
  Ay as SelectValue,
  Nb as Separator,
  zb as Sheet,
  P_ as SheetClose,
  Ub as SheetContent,
  E_ as SheetDescription,
  O_ as SheetFooter,
  A_ as SheetHeader,
  M_ as SheetTitle,
  T_ as SheetTrigger,
  I_ as Sidebar,
  R_ as SidebarContent,
  V_ as SidebarFooter,
  F_ as SidebarGroup,
  L_ as SidebarGroupAction,
  N_ as SidebarGroupContent,
  z_ as SidebarGroupLabel,
  U_ as SidebarHeader,
  K_ as SidebarInput,
  W_ as SidebarInset,
  H_ as SidebarMenu,
  j_ as SidebarMenuAction,
  G_ as SidebarMenuBadge,
  q_ as SidebarMenuButton,
  J_ as SidebarMenuItem,
  Q_ as SidebarMenuSkeleton,
  Z_ as SidebarMenuSub,
  X_ as SidebarMenuSubButton,
  ew as SidebarMenuSubItem,
  tw as SidebarProvider,
  aw as SidebarRail,
  nw as SidebarSeparator,
  ow as SidebarTrigger,
  bl as Skeleton,
  sw as Slider,
  Sb as TabBaseContent,
  mb as Table,
  hb as TableBody,
  bb as TableCaption,
  kn as TableCell,
  w_ as TableEmpty,
  __ as TableFooter,
  gb as TableHead,
  yb as TableHeader,
  Ia as TableRow,
  Po as TableRowAction,
  B_ as TabsContent,
  Cb as TabsItem,
  hl as TabsList,
  $b as TabsRoot,
  k_ as TabsTrigger,
  g_ as TextArea,
  f0 as Toast,
  rw as ToastAction,
  m0 as ToastClose,
  wl as ToastDescription,
  g0 as ToastProvider,
  h0 as ToastTitle,
  v0 as ToastViewport,
  lw as Toaster,
  lb as Toggle,
  e0 as Tooltip,
  t0 as TooltipContent,
  Y_ as TooltipProvider,
  a0 as TooltipTrigger,
  $g as badgeVariants,
  Wt as buttonVariants,
  _0 as preset,
  Kb as sheetVariants,
  s0 as sidebarMenuButtonVariants,
  Cg as spinnerSize,
  u0 as toast,
  y0 as toastVariants,
  Wn as useSidebar,
  d0 as useToast
};
