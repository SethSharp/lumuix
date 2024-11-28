import * as Xo from "vue";
import { computed as C, ref as T, shallowRef as no, watch as J, getCurrentScope as oo, onScopeDispose as lo, shallowReadonly as Vt, unref as l, getCurrentInstance as je, toRef as Tl, camelize as Al, defineComponent as b, Comment as Ml, mergeProps as S, cloneVNode as zr, h as Ke, toRefs as ue, openBlock as v, createBlock as y, withCtx as f, renderSlot as _, withKeys as Fe, onMounted as ie, normalizeProps as U, guardReactiveProps as H, reactive as Vl, createVNode as D, createCommentVNode as X, createElementVNode as ce, toDisplayString as Z, createTextVNode as Y, withModifiers as _e, createElementBlock as K, Fragment as te, watchEffect as ge, markRaw as Wr, nextTick as oe, watchSyncEffect as Kr, withDirectives as Xt, vShow as so, isRef as Ca, resolveDynamicComponent as Te, renderList as he, Teleport as on, onBeforeUnmount as ro, useSlots as Il, onBeforeMount as Ur, normalizeStyle as Zt, toHandlers as Hr, effectScope as Rl, readonly as $a, toHandlerKey as jr, onUnmounted as bt, vModelSelect as Gr, toRaw as qr, inject as Fl, provide as Ll, customRef as Nl, onBeforeUpdate as Yr, onUpdated as Xr, mergeDefaults as zl, watchPostEffect as Zr, normalizeClass as ae, mergeModels as zn, useModel as Wl, vModelDynamic as Jr, vModelText as Qr, isVNode as ei } from "vue";
function ti(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kl = {}, Ul = {};
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
})(Ul);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = /* @__PURE__ */ a(Ul);
  function a(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const n = t.default;
})(Kl);
let $n = Kl;
var ai = ($n.__esModule ? $n : { default: $n }).default;
const ni = ai;
function Zo(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var oi = ni(
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
      { values: Zo(a("animationDuration")) }
    ), t(
      { delay: (n) => ({ animationDelay: n }) },
      { values: a("animationDelay") }
    ), t(
      { ease: (n) => ({ animationTimingFunction: n }) },
      { values: Zo(a("animationTimingFunction")) }
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
const li = /* @__PURE__ */ ti(oi), My = {
  safelist: ["dark"],
  darkMode: ["class"],
  plugins: [li],
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
function kn(e, t) {
  return e - t * Math.floor(e / t);
}
const Hl = 1721426;
function Va(e, t, a, n) {
  t = io(e, t);
  let o = t - 1, s = -2;
  return a <= 2 ? s = 0 : Ga(t) && (s = -1), Hl - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + s + n);
}
function Ga(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function io(e, t) {
  return e === "BC" ? 1 - t : t;
}
function si(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const ri = {
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
    let a = t, n = a - Hl, o = Math.floor(n / 146097), s = kn(n, 146097), r = Math.floor(s / 36524), i = kn(s, 36524), d = Math.floor(i / 1461), c = kn(i, 1461), u = Math.floor(c / 365), p = o * 400 + r * 100 + d * 4 + u + (r !== 4 && u !== 4 ? 1 : 0), [h, m] = si(p), w = a - Va(h, m, 1, 1), g = 2;
    a < Va(h, m, 3, 1) ? g = 0 : Ga(m) && (g = 1);
    let x = Math.floor(((w + g) * 12 + 373) / 367), $ = a - Va(h, m, x, 1) + 1;
    return new Kt(h, m, x, $);
  }
  toJulianDay(t) {
    return Va(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return ri[Ga(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return Ga(t.year) ? 366 : 365;
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
const ii = {
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
function jl(e, t) {
  return t = Ee(t, e.calendar), e = ga(e), t = ga(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function We(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Jo(e, t) {
  return e = ga(e), t = ga(t), e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month;
}
function Gl(e, t) {
  return Ce(e, Yl(t));
}
function ql(e, t) {
  let a = e.calendar.toJulianDay(e), n = Math.ceil(a + 1 - pi(t)) % 7;
  return n < 0 && (n += 7), n;
}
function di(e) {
  return nt(Date.now(), e);
}
function Yl(e) {
  return mi(di(e));
}
function Xl(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function ui(e, t) {
  return Qo(e) - Qo(t);
}
function Qo(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let Bn = null;
function Bt() {
  return Bn == null && (Bn = new Intl.DateTimeFormat().resolvedOptions().timeZone), Bn;
}
function ga(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function el(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const tl = /* @__PURE__ */ new Map();
function ci(e) {
  if (Intl.Locale) {
    let a = tl.get(e);
    return a || (a = new Intl.Locale(e).maximize().region, a && tl.set(e, a)), a;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function pi(e) {
  let t = ci(e);
  return t && ii[t] || 0;
}
function zt(e) {
  e = Ee(e, new Nt());
  let t = io(e.era, e.year);
  return Zl(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function Zl(e, t, a, n, o, s, r) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, s, r), i.setUTCFullYear(e, t - 1, a), i.getTime();
}
function Wn(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === Bt()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: s, minute: r, second: i } = Jl(e, t);
  return Zl(a, n, o, s, r, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const al = /* @__PURE__ */ new Map();
function Jl(e, t) {
  let a = al.get(t);
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
  }), al.set(t, a));
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
const nl = 864e5;
function fi(e, t, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((s) => vi(e, t, s));
}
function vi(e, t, a) {
  let n = Jl(a, t);
  return e.year === n.year && e.month === n.month && e.day === n.day && e.hour === n.hour && e.minute === n.minute && e.second === n.second;
}
function at(e, t, a = "compatible") {
  let n = Wt(e);
  if (t === "UTC") return zt(n);
  if (t === Bt() && a === "compatible") {
    n = Ee(n, new Nt());
    let d = /* @__PURE__ */ new Date(), c = io(n.era, n.year);
    return d.setFullYear(c, n.month - 1, n.day), d.setHours(n.hour, n.minute, n.second, n.millisecond), d.getTime();
  }
  let o = zt(n), s = Wn(o - nl, t), r = Wn(o + nl, t), i = fi(n, t, o - s, o - r);
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
function Ql(e, t, a = "compatible") {
  return new Date(at(e, t, a));
}
function nt(e, t) {
  let a = Wn(e, t), n = new Date(e + a), o = n.getUTCFullYear(), s = n.getUTCMonth() + 1, r = n.getUTCDate(), i = n.getUTCHours(), d = n.getUTCMinutes(), c = n.getUTCSeconds(), u = n.getUTCMilliseconds();
  return new Ht(o, s, r, t, a, i, d, c, u);
}
function mi(e) {
  return new Kt(e.calendar, e.era, e.year, e.month, e.day);
}
function Wt(e, t) {
  let a = 0, n = 0, o = 0, s = 0;
  if ("timeZone" in e) ({ hour: a, minute: n, second: o, millisecond: s } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: a, minute: n, second: o, millisecond: s } = t), new Ut(e.calendar, e.era, e.year, e.month, e.day, a, n, o, s);
}
function Ee(e, t) {
  if (e.calendar.identifier === t.identifier) return e;
  let a = t.fromJulianDay(e.calendar.toJulianDay(e)), n = e.copy();
  return n.calendar = t, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, $t(n), n;
}
function hi(e, t, a) {
  if (e instanceof Ht)
    return e.timeZone === t ? e : yi(e, t);
  let n = at(e, t, a);
  return nt(n, t);
}
function gi(e) {
  let t = zt(e) - e.offset;
  return new Date(t);
}
function yi(e, t) {
  let a = zt(e) - e.offset;
  return Ee(nt(a, t), e.calendar);
}
const pa = 36e5;
function ln(e, t) {
  let a = e.copy(), n = "hour" in a ? xi(a, t) : 0;
  Kn(a, t.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e), a.month += t.months || 0, Un(a), es(a), a.day += (t.weeks || 0) * 7, a.day += t.days || 0, a.day += n, bi(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
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
function Kn(e, t) {
  var a, n;
  !((a = (n = e.calendar).isInverseEra) === null || a === void 0) && a.call(n, e) && (t = -t), e.year += t;
}
function Un(e) {
  for (; e.month < 1; )
    Kn(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, Kn(e, 1);
}
function bi(e) {
  for (; e.day < 1; )
    e.month--, Un(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, Un(e);
}
function es(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function $t(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), es(e);
}
function ts(e) {
  let t = {};
  for (let a in e) typeof e[a] == "number" && (t[a] = -e[a]);
  return t;
}
function as(e, t) {
  return ln(e, ts(t));
}
function uo(e, t) {
  let a = e.copy();
  return t.era != null && (a.era = t.era), t.year != null && (a.year = t.year), t.month != null && (a.month = t.month), t.day != null && (a.day = t.day), $t(a), a;
}
function Xa(e, t) {
  let a = e.copy();
  return t.hour != null && (a.hour = t.hour), t.minute != null && (a.minute = t.minute), t.second != null && (a.second = t.second), t.millisecond != null && (a.millisecond = t.millisecond), wi(a), a;
}
function _i(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Ia(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Ia(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Ia(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = Ia(e.hour, 24), t;
}
function wi(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Ia(e, t) {
  let a = e % t;
  return a < 0 && (a += t), a;
}
function xi(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, _i(e);
}
function co(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "era": {
      let i = e.calendar.getEras(), d = i.indexOf(e.era);
      if (d < 0) throw new Error("Invalid era: " + e.era);
      d = ot(d, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[d], $t(o);
      break;
    }
    case "year":
      var s, r;
      !((s = (r = o.calendar).isInverseEra) === null || s === void 0) && s.call(r, o) && (a = -a), o.year = ot(e.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, e);
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
  return e.calendar.balanceDate && e.calendar.balanceDate(o), $t(o), o;
}
function ns(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "hour": {
      let s = e.hour, r = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let d = s >= 12;
        r = d ? 12 : 0, i = d ? 23 : 11;
      }
      o.hour = ot(s, a, r, i, n == null ? void 0 : n.round);
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
    let s = Math.abs(t);
    t > 0 ? e = Math.ceil(e / s) * s : e = Math.floor(e / s) * s, e > n && (e = a);
  } else
    e += t, e < a ? e = n - (a - e - 1) : e > n && (e = a + (e - n - 1));
  return e;
}
function os(e, t) {
  let a;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let o = ln(Wt(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    a = at(o, e.timeZone);
  } else
    a = zt(e) - e.offset;
  a += t.milliseconds || 0, a += (t.seconds || 0) * 1e3, a += (t.minutes || 0) * 6e4, a += (t.hours || 0) * 36e5;
  let n = nt(a, e.timeZone);
  return Ee(n, e.calendar);
}
function Ci(e, t) {
  return os(e, ts(t));
}
function $i(e, t, a, n) {
  switch (t) {
    case "hour": {
      let o = 0, s = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let w = e.hour >= 12;
        o = w ? 12 : 0, s = w ? 23 : 11;
      }
      let r = Wt(e), i = Ee(Xa(r, {
        hour: o
      }), new Nt()), d = [
        at(i, e.timeZone, "earlier"),
        at(i, e.timeZone, "later")
      ].filter((w) => nt(w, e.timeZone).day === i.day)[0], c = Ee(Xa(r, {
        hour: s
      }), new Nt()), u = [
        at(c, e.timeZone, "earlier"),
        at(c, e.timeZone, "later")
      ].filter((w) => nt(w, e.timeZone).day === c.day).pop(), p = zt(e) - e.offset, h = Math.floor(p / pa), m = p % pa;
      return p = ot(h, a, Math.floor(d / pa), Math.floor(u / pa), n == null ? void 0 : n.round) * pa + m, Ee(nt(p, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return ns(e, t, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = co(Wt(e), t, a, n), s = at(o, e.timeZone);
      return Ee(nt(s, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function ki(e, t, a) {
  let n = Wt(e), o = Xa(uo(n, t), t);
  if (o.compare(n) === 0) return e;
  let s = at(o, e.timeZone, a);
  return Ee(nt(s, e.timeZone), e.calendar);
}
function Bi(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function ls(e) {
  let t = Ee(e, new Nt());
  return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function ss(e) {
  return `${ls(e)}T${Bi(e)}`;
}
function Di(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let a = Math.floor(e / 36e5), n = e % 36e5 / 6e4;
  return `${t}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function Pi(e) {
  return `${ss(e)}${Di(e.offset)}[${e.timeZone}]`;
}
function Oi(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function po(e, t, a) {
  Oi(e, t), t.set(e, a);
}
function fo(e) {
  let t = typeof e[0] == "object" ? e.shift() : new Nt(), a;
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
var Si = /* @__PURE__ */ new WeakMap();
class Kt {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Kt(this.calendar, this.era, this.year, this.month, this.day) : new Kt(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return ln(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return as(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return uo(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return co(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return Ql(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return ls(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return Xl(this, t);
  }
  constructor(...t) {
    po(this, Si, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = fo(t);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, $t(this);
  }
}
var Ei = /* @__PURE__ */ new WeakMap();
class Ut {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ut(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new Ut(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return ln(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return as(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return uo(Xa(this, t), t);
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
        return co(this, t, a, n);
      default:
        return ns(this, t, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, a) {
    return Ql(this, t, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return ss(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let a = Xl(this, t);
    return a === 0 ? ui(this, Wt(t)) : a;
  }
  constructor(...t) {
    po(this, Ei, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = fo(t);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, $t(this);
  }
}
var Ti = /* @__PURE__ */ new WeakMap();
class Ht {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ht(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new Ht(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return os(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return Ci(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, a) {
    return ki(this, t, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return $i(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return gi(this);
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
    return this.toDate().getTime() - hi(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    po(this, Ti, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = fo(t), i = t.shift(), d = t.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.timeZone = i, this.offset = d, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, $t(this);
  }
}
let Dn = /* @__PURE__ */ new Map();
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
    return Vi() && (this.resolvedHourCycle || (this.resolvedHourCycle = Ii(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, a = {}) {
    this.formatter = rs(t, a), this.options = a;
  }
}
const Ai = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function rs(e, t = {}) {
  if (typeof t.hour12 == "boolean" && Mi()) {
    t = {
      ...t
    };
    let o = Ai[String(t.hour12)][e.split("-")[0]], s = t.hour12 ? "h12" : "h23";
    t.hourCycle = o ?? s, delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((o, s) => o[0] < s[0] ? -1 : 1).join() : "");
  if (Dn.has(a)) return Dn.get(a);
  let n = new Intl.DateTimeFormat(e, t);
  return Dn.set(a, n), n;
}
let Pn = null;
function Mi() {
  return Pn == null && (Pn = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Pn;
}
let On = null;
function Vi() {
  return On == null && (On = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), On;
}
function Ii(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = rs(e, {
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
function Ri(e, t) {
  const a = [];
  for (let n = 0; n < e.length; n += t)
    a.push(e.slice(n, n + t));
  return a;
}
function Re(e, t = Bt()) {
  return vo(e) ? e.toDate() : e.toDate(t);
}
function Fi(e) {
  return e instanceof Ut;
}
function vo(e) {
  return e instanceof Ht;
}
function Li(e) {
  return Fi(e) || vo(e);
}
function ya(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), a = e.getMonth() + 1;
    return new Date(t, a, 0).getDate();
  } else
    return e.set({ day: 100 }).day;
}
function mt(e, t) {
  return e.compare(t) < 0;
}
function ma(e, t) {
  return e.compare(t) > 0;
}
function Ni(e, t) {
  return e.compare(t) <= 0;
}
function zi(e, t) {
  return e.compare(t) >= 0;
}
function Wi(e, t, a) {
  return zi(e, t) && Ni(e, a);
}
function Ki(e, t, a) {
  return ma(e, t) && mt(e, a);
}
function Ui(e, t, a) {
  const n = ql(e, a);
  return t > n ? e.subtract({ days: n + 7 - t }) : t === n ? e : e.subtract({ days: n - t });
}
function Hi(e, t, a) {
  const n = ql(e, a), o = t === 0 ? 6 : t - 1;
  return n === o ? e : n > o ? e.add({ days: 7 - n + o }) : e.add({ days: o - n });
}
function ji(e, t, a, n) {
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
function ol(e, t) {
  const a = [];
  let n = e.add({ days: 1 });
  const o = t;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function Sn(e) {
  const { dateObj: t, weekStartsOn: a, fixedWeeks: n, locale: o } = e, s = ya(t), r = Array.from({ length: s }, (x, $) => t.set({ day: $ + 1 })), i = ga(t), d = el(t), c = Ui(i, a, o), u = Hi(d, a, o), p = ol(c.subtract({ days: 1 }), i), h = ol(d, u.add({ days: 1 })), m = p.length + r.length + h.length;
  if (n && m < 42) {
    const x = 42 - m;
    let $ = h[h.length - 1];
    $ || ($ = el(t));
    const P = Array.from({ length: x }, (k, O) => {
      const E = O + 1;
      return $.add({ days: E });
    });
    h.push(...P);
  }
  const w = p.concat(r, h), g = Ri(w, 7);
  return {
    value: t,
    cells: w,
    rows: g
  };
}
function xt(e) {
  const { numberOfMonths: t, dateObj: a, ...n } = e, o = [];
  if (!t || t === 1)
    return o.push(
      Sn({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    Sn({
      ...n,
      dateObj: a
    })
  );
  for (let s = 1; s < t; s++) {
    const r = a.add({ months: s });
    o.push(
      Sn({
        ...n,
        dateObj: r
      })
    );
  }
  return o;
}
const Gi = ["top", "right", "bottom", "left"], ht = Math.min, De = Math.max, Za = Math.round, Ra = Math.floor, Ue = (e) => ({
  x: e,
  y: e
}), qi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Yi = {
  start: "end",
  end: "start"
};
function Hn(e, t, a) {
  return De(e, ht(t, a));
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
function mo(e) {
  return e === "x" ? "y" : "x";
}
function ho(e) {
  return e === "y" ? "height" : "width";
}
function gt(e) {
  return ["top", "bottom"].includes(it(e)) ? "y" : "x";
}
function go(e) {
  return mo(gt(e));
}
function Xi(e, t, a) {
  a === void 0 && (a = !1);
  const n = Jt(e), o = go(e), s = ho(o);
  let r = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (r = Ja(r)), [r, Ja(r)];
}
function Zi(e) {
  const t = Ja(e);
  return [jn(e), t, jn(t)];
}
function jn(e) {
  return e.replace(/start|end/g, (t) => Yi[t]);
}
function Ji(e, t, a) {
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
function Qi(e, t, a, n) {
  const o = Jt(e);
  let s = Ji(it(e), a === "start", n);
  return o && (s = s.map((r) => r + "-" + o), t && (s = s.concat(s.map(jn)))), s;
}
function Ja(e) {
  return e.replace(/left|right|bottom|top/g, (t) => qi[t]);
}
function ed(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function is(e) {
  return typeof e != "number" ? ed(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Qa(e) {
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
function ll(e, t, a) {
  let {
    reference: n,
    floating: o
  } = e;
  const s = gt(t), r = go(t), i = ho(r), d = it(t), c = s === "y", u = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, h = n[i] / 2 - o[i] / 2;
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
const td = async (e, t, a) => {
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
  } = ll(c, n, d), h = n, m = {}, w = 0;
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
    } = ll(c, h, d)), g = -1);
  }
  return {
    x: u,
    y: p,
    placement: h,
    strategy: o,
    middlewareData: m
  };
};
async function ba(e, t) {
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
  } = rt(t, e), w = is(m), x = i[h ? p === "floating" ? "reference" : "floating" : p], $ = Qa(await s.getClippingRect({
    element: (a = await (s.isElement == null ? void 0 : s.isElement(x))) == null || a ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: d
  })), P = p === "floating" ? {
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
  }, E = Qa(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const ad = (e) => ({
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
    } = rt(e, t) || {};
    if (c == null)
      return {};
    const p = is(u), h = {
      x: a,
      y: n
    }, m = go(o), w = ho(m), g = await r.getDimensions(c), x = m === "y", $ = x ? "top" : "left", P = x ? "bottom" : "right", k = x ? "clientHeight" : "clientWidth", O = s.reference[w] + s.reference[m] - h[m] - s.floating[w], E = h[m] - s.reference[m], V = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c));
    let A = V ? V[k] : 0;
    (!A || !await (r.isElement == null ? void 0 : r.isElement(V))) && (A = i.floating[k] || s.floating[w]);
    const N = O / 2 - E / 2, L = A / 2 - g[w] / 2 - 1, B = ht(p[$], L), M = ht(p[P], L), I = B, G = A - g[w] - M, j = A / 2 - g[w] / 2 + N, W = Hn(I, j, G), q = !d.arrow && Jt(o) != null && j !== W && s.reference[w] / 2 - (j < I ? B : M) - g[w] / 2 < 0, se = q ? j < I ? j - I : j - G : 0;
    return {
      [m]: h[m] + se,
      data: {
        [m]: W,
        centerOffset: j - W - se,
        ...q && {
          alignmentOffset: se
        }
      },
      reset: q
    };
  }
}), nd = function(e) {
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
        fallbackAxisSideDirection: w = "none",
        flipAlignment: g = !0,
        ...x
      } = rt(e, t);
      if ((a = s.arrow) != null && a.alignmentOffset)
        return {};
      const $ = it(o), P = gt(i), k = it(i) === i, O = await (d.isRTL == null ? void 0 : d.isRTL(c.floating)), E = h || (k || !g ? [Ja(i)] : Zi(i)), V = w !== "none";
      !h && V && E.push(...Qi(i, g, w, O));
      const A = [i, ...E], N = await ba(t, x), L = [];
      let B = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (u && L.push(N[$]), p) {
        const j = Xi(o, r, O);
        L.push(N[j[0]], N[j[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: L
      }], !L.every((j) => j <= 0)) {
        var M, I;
        const j = (((M = s.flip) == null ? void 0 : M.index) || 0) + 1, W = A[j];
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
        let q = (I = B.filter((se) => se.overflows[0] <= 0).sort((se, pe) => se.overflows[1] - pe.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!q)
          switch (m) {
            case "bestFit": {
              var G;
              const se = (G = B.filter((pe) => {
                if (V) {
                  const me = gt(pe.placement);
                  return me === P || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  me === "y";
                }
                return !0;
              }).map((pe) => [pe.placement, pe.overflows.filter((me) => me > 0).reduce((me, ke) => me + ke, 0)]).sort((pe, me) => pe[1] - me[1])[0]) == null ? void 0 : G[0];
              se && (q = se);
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
function sl(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function rl(e) {
  return Gi.some((t) => e[t] >= 0);
}
const od = function(e) {
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
          const s = await ba(t, {
            ...o,
            elementContext: "reference"
          }), r = sl(s, a.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: rl(r)
            }
          };
        }
        case "escaped": {
          const s = await ba(t, {
            ...o,
            altBoundary: !0
          }), r = sl(s, a.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: rl(r)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function ld(e, t) {
  const {
    placement: a,
    platform: n,
    elements: o
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), r = it(a), i = Jt(a), d = gt(a) === "y", c = ["left", "top"].includes(r) ? -1 : 1, u = s && d ? -1 : 1, p = rt(t, e);
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
const sd = function(e) {
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
      } = t, d = await ld(t, e);
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
}, rd = function(e) {
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
      }, u = await ba(t, d), p = gt(it(o)), h = mo(p);
      let m = c[h], w = c[p];
      if (s) {
        const x = h === "y" ? "top" : "left", $ = h === "y" ? "bottom" : "right", P = m + u[x], k = m - u[$];
        m = Hn(P, m, k);
      }
      if (r) {
        const x = p === "y" ? "top" : "left", $ = p === "y" ? "bottom" : "right", P = w + u[x], k = w - u[$];
        w = Hn(P, w, k);
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
            [h]: s,
            [p]: r
          }
        }
      };
    }
  };
}, id = function(e) {
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
      } = rt(e, t), u = {
        x: a,
        y: n
      }, p = gt(o), h = mo(p);
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
        const k = h === "y" ? "height" : "width", O = s.reference[h] - s.floating[k] + x.mainAxis, E = s.reference[h] + s.reference[k] - x.mainAxis;
        m < O ? m = O : m > E && (m = E);
      }
      if (c) {
        var $, P;
        const k = h === "y" ? "width" : "height", O = ["top", "left"].includes(it(o)), E = s.reference[p] - s.floating[k] + (O && (($ = r.offset) == null ? void 0 : $[p]) || 0) + (O ? 0 : x.crossAxis), V = s.reference[p] + s.reference[k] + (O ? 0 : ((P = r.offset) == null ? void 0 : P[p]) || 0) - (O ? x.crossAxis : 0);
        w < E ? w = E : w > V && (w = V);
      }
      return {
        [h]: m,
        [p]: w
      };
    }
  };
}, dd = function(e) {
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
      } = rt(e, t), u = await ba(t, c), p = it(o), h = Jt(o), m = gt(o) === "y", {
        width: w,
        height: g
      } = s.floating;
      let x, $;
      p === "top" || p === "bottom" ? (x = p, $ = h === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : ($ = p, x = h === "end" ? "top" : "bottom");
      const P = g - u.top - u.bottom, k = w - u.left - u.right, O = ht(g - u[x], P), E = ht(w - u[$], k), V = !t.middlewareData.shift;
      let A = O, N = E;
      if ((a = t.middlewareData.shift) != null && a.enabled.x && (N = k), (n = t.middlewareData.shift) != null && n.enabled.y && (A = P), V && !h) {
        const B = De(u.left, 0), M = De(u.right, 0), I = De(u.top, 0), G = De(u.bottom, 0);
        m ? N = w - 2 * (B !== 0 || M !== 0 ? B + M : De(u.left, u.right)) : A = g - 2 * (I !== 0 || G !== 0 ? I + G : De(u.top, u.bottom));
      }
      await d({
        ...t,
        availableWidth: N,
        availableHeight: A
      });
      const L = await r.getDimensions(i.floating);
      return w !== L.width || g !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function sn() {
  return typeof window < "u";
}
function Dt(e) {
  return yo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ge(e) {
  var t;
  return (t = (yo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function yo(e) {
  return sn() ? e instanceof Node || e instanceof Pe(e).Node : !1;
}
function Le(e) {
  return sn() ? e instanceof Element || e instanceof Pe(e).Element : !1;
}
function He(e) {
  return sn() ? e instanceof HTMLElement || e instanceof Pe(e).HTMLElement : !1;
}
function il(e) {
  return !sn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Pe(e).ShadowRoot;
}
function ka(e) {
  const {
    overflow: t,
    overflowX: a,
    overflowY: n,
    display: o
  } = Ne(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + a) && !["inline", "contents"].includes(o);
}
function ud(e) {
  return ["table", "td", "th"].includes(Dt(e));
}
function rn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function bo(e) {
  const t = _o(), a = Le(e) ? Ne(e) : e;
  return a.transform !== "none" || a.perspective !== "none" || (a.containerType ? a.containerType !== "normal" : !1) || !t && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !t && (a.filter ? a.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function cd(e) {
  let t = yt(e);
  for (; He(t) && !jt(t); ) {
    if (bo(t))
      return t;
    if (rn(t))
      return null;
    t = yt(t);
  }
  return null;
}
function _o() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function jt(e) {
  return ["html", "body", "#document"].includes(Dt(e));
}
function Ne(e) {
  return Pe(e).getComputedStyle(e);
}
function dn(e) {
  return Le(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function yt(e) {
  if (Dt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    il(e) && e.host || // Fallback.
    Ge(e)
  );
  return il(t) ? t.host : t;
}
function ds(e) {
  const t = yt(e);
  return jt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : He(t) && ka(t) ? t : ds(t);
}
function _a(e, t, a) {
  var n;
  t === void 0 && (t = []), a === void 0 && (a = !0);
  const o = ds(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Pe(o);
  if (s) {
    const i = Gn(r);
    return t.concat(r, r.visualViewport || [], ka(o) ? o : [], i && a ? _a(i) : []);
  }
  return t.concat(o, _a(o, [], a));
}
function Gn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function us(e) {
  const t = Ne(e);
  let a = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = He(e), s = o ? e.offsetWidth : a, r = o ? e.offsetHeight : n, i = Za(a) !== s || Za(n) !== r;
  return i && (a = s, n = r), {
    width: a,
    height: n,
    $: i
  };
}
function wo(e) {
  return Le(e) ? e : e.contextElement;
}
function Ft(e) {
  const t = wo(e);
  if (!He(t))
    return Ue(1);
  const a = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = us(t);
  let r = (s ? Za(a.width) : a.width) / n, i = (s ? Za(a.height) : a.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: r,
    y: i
  };
}
const pd = /* @__PURE__ */ Ue(0);
function cs(e) {
  const t = Pe(e);
  return !_o() || !t.visualViewport ? pd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function fd(e, t, a) {
  return t === void 0 && (t = !1), !a || t && a !== Pe(e) ? !1 : t;
}
function kt(e, t, a, n) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const o = e.getBoundingClientRect(), s = wo(e);
  let r = Ue(1);
  t && (n ? Le(n) && (r = Ft(n)) : r = Ft(e));
  const i = fd(s, a, n) ? cs(s) : Ue(0);
  let d = (o.left + i.x) / r.x, c = (o.top + i.y) / r.y, u = o.width / r.x, p = o.height / r.y;
  if (s) {
    const h = Pe(s), m = n && Le(n) ? Pe(n) : n;
    let w = h, g = Gn(w);
    for (; g && n && m !== w; ) {
      const x = Ft(g), $ = g.getBoundingClientRect(), P = Ne(g), k = $.left + (g.clientLeft + parseFloat(P.paddingLeft)) * x.x, O = $.top + (g.clientTop + parseFloat(P.paddingTop)) * x.y;
      d *= x.x, c *= x.y, u *= x.x, p *= x.y, d += k, c += O, w = Pe(g), g = Gn(w);
    }
  }
  return Qa({
    width: u,
    height: p,
    x: d,
    y: c
  });
}
function xo(e, t) {
  const a = dn(e).scrollLeft;
  return t ? t.left + a : kt(Ge(e)).left + a;
}
function ps(e, t, a) {
  a === void 0 && (a = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (a ? 0 : (
    // RTL <body> scrollbar.
    xo(e, n)
  )), s = n.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function vd(e) {
  let {
    elements: t,
    rect: a,
    offsetParent: n,
    strategy: o
  } = e;
  const s = o === "fixed", r = Ge(n), i = t ? rn(t.floating) : !1;
  if (n === r || i && s)
    return a;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ue(1);
  const u = Ue(0), p = He(n);
  if ((p || !p && !s) && ((Dt(n) !== "body" || ka(r)) && (d = dn(n)), He(n))) {
    const m = kt(n);
    c = Ft(n), u.x = m.x + n.clientLeft, u.y = m.y + n.clientTop;
  }
  const h = r && !p && !s ? ps(r, d, !0) : Ue(0);
  return {
    width: a.width * c.x,
    height: a.height * c.y,
    x: a.x * c.x - d.scrollLeft * c.x + u.x + h.x,
    y: a.y * c.y - d.scrollTop * c.y + u.y + h.y
  };
}
function md(e) {
  return Array.from(e.getClientRects());
}
function hd(e) {
  const t = Ge(e), a = dn(e), n = e.ownerDocument.body, o = De(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = De(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -a.scrollLeft + xo(e);
  const i = -a.scrollTop;
  return Ne(n).direction === "rtl" && (r += De(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: r,
    y: i
  };
}
function gd(e, t) {
  const a = Pe(e), n = Ge(e), o = a.visualViewport;
  let s = n.clientWidth, r = n.clientHeight, i = 0, d = 0;
  if (o) {
    s = o.width, r = o.height;
    const c = _o();
    (!c || c && t === "fixed") && (i = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: i,
    y: d
  };
}
function yd(e, t) {
  const a = kt(e, !0, t === "fixed"), n = a.top + e.clientTop, o = a.left + e.clientLeft, s = He(e) ? Ft(e) : Ue(1), r = e.clientWidth * s.x, i = e.clientHeight * s.y, d = o * s.x, c = n * s.y;
  return {
    width: r,
    height: i,
    x: d,
    y: c
  };
}
function dl(e, t, a) {
  let n;
  if (t === "viewport")
    n = gd(e, a);
  else if (t === "document")
    n = hd(Ge(e));
  else if (Le(t))
    n = yd(t, a);
  else {
    const o = cs(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Qa(n);
}
function fs(e, t) {
  const a = yt(e);
  return a === t || !Le(a) || jt(a) ? !1 : Ne(a).position === "fixed" || fs(a, t);
}
function bd(e, t) {
  const a = t.get(e);
  if (a)
    return a;
  let n = _a(e, [], !1).filter((i) => Le(i) && Dt(i) !== "body"), o = null;
  const s = Ne(e).position === "fixed";
  let r = s ? yt(e) : e;
  for (; Le(r) && !jt(r); ) {
    const i = Ne(r), d = bo(r);
    !d && i.position === "fixed" && (o = null), (s ? !d && !o : !d && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ka(r) && !d && fs(e, r)) ? n = n.filter((u) => u !== r) : o = i, r = yt(r);
  }
  return t.set(e, n), n;
}
function _d(e) {
  let {
    element: t,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = e;
  const r = [...a === "clippingAncestors" ? rn(t) ? [] : bd(t, this._c) : [].concat(a), n], i = r[0], d = r.reduce((c, u) => {
    const p = dl(t, u, o);
    return c.top = De(p.top, c.top), c.right = ht(p.right, c.right), c.bottom = ht(p.bottom, c.bottom), c.left = De(p.left, c.left), c;
  }, dl(t, i, o));
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
  } = us(e);
  return {
    width: t,
    height: a
  };
}
function xd(e, t, a) {
  const n = He(t), o = Ge(t), s = a === "fixed", r = kt(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = Ue(0);
  if (n || !n && !s)
    if ((Dt(t) !== "body" || ka(o)) && (i = dn(t)), n) {
      const h = kt(t, !0, s, t);
      d.x = h.x + t.clientLeft, d.y = h.y + t.clientTop;
    } else o && (d.x = xo(o));
  const c = o && !n && !s ? ps(o, i) : Ue(0), u = r.left + i.scrollLeft - d.x - c.x, p = r.top + i.scrollTop - d.y - c.y;
  return {
    x: u,
    y: p,
    width: r.width,
    height: r.height
  };
}
function En(e) {
  return Ne(e).position === "static";
}
function ul(e, t) {
  if (!He(e) || Ne(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let a = e.offsetParent;
  return Ge(e) === a && (a = a.ownerDocument.body), a;
}
function vs(e, t) {
  const a = Pe(e);
  if (rn(e))
    return a;
  if (!He(e)) {
    let o = yt(e);
    for (; o && !jt(o); ) {
      if (Le(o) && !En(o))
        return o;
      o = yt(o);
    }
    return a;
  }
  let n = ul(e, t);
  for (; n && ud(n) && En(n); )
    n = ul(n, t);
  return n && jt(n) && En(n) && !bo(n) ? a : n || cd(e) || a;
}
const Cd = async function(e) {
  const t = this.getOffsetParent || vs, a = this.getDimensions, n = await a(e.floating);
  return {
    reference: xd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function $d(e) {
  return Ne(e).direction === "rtl";
}
const kd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vd,
  getDocumentElement: Ge,
  getClippingRect: _d,
  getOffsetParent: vs,
  getElementRects: Cd,
  getClientRects: md,
  getDimensions: wd,
  getScale: Ft,
  isElement: Le,
  isRTL: $d
};
function Bd(e, t) {
  let a = null, n;
  const o = Ge(e);
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
    const m = Ra(u), w = Ra(o.clientWidth - (c + p)), g = Ra(o.clientHeight - (u + h)), x = Ra(c), P = {
      rootMargin: -m + "px " + -w + "px " + -g + "px " + -x + "px",
      threshold: De(0, ht(1, d)) || 1
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
  return r(!0), s;
}
function Dd(e, t, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, c = wo(e), u = o || s ? [...c ? _a(c) : [], ..._a(t)] : [];
  u.forEach(($) => {
    o && $.addEventListener("scroll", a, {
      passive: !0
    }), s && $.addEventListener("resize", a);
  });
  const p = c && i ? Bd(c, a) : null;
  let h = -1, m = null;
  r && (m = new ResizeObserver(($) => {
    let [P] = $;
    P && P.target === c && m && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var k;
      (k = m) == null || k.observe(t);
    })), a();
  }), c && !d && m.observe(c), m.observe(t));
  let w, g = d ? kt(e) : null;
  d && x();
  function x() {
    const $ = kt(e);
    g && ($.x !== g.x || $.y !== g.y || $.width !== g.width || $.height !== g.height) && a(), g = $, w = requestAnimationFrame(x);
  }
  return a(), () => {
    var $;
    u.forEach((P) => {
      o && P.removeEventListener("scroll", a), s && P.removeEventListener("resize", a);
    }), p == null || p(), ($ = m) == null || $.disconnect(), m = null, d && cancelAnimationFrame(w);
  };
}
const Pd = sd, Od = rd, cl = nd, Sd = dd, Ed = od, Td = ad, Ad = id, Md = (e, t, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: kd,
    ...a
  }, s = {
    ...o.platform,
    _c: n
  };
  return td(e, t, {
    ...o,
    platform: s
  });
};
function Vd(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function qn(e) {
  if (Vd(e)) {
    const t = e.$el;
    return yo(t) && Dt(t) === "#comment" ? null : t;
  }
  return e;
}
function Rt(e) {
  return typeof e == "function" ? e() : l(e);
}
function Id(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const a = qn(Rt(e.element));
      return a == null ? {} : Td({
        element: a,
        padding: e.padding
      }).fn(t);
    }
  };
}
function ms(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function pl(e, t) {
  const a = ms(e);
  return Math.round(t * a) / a;
}
function Rd(e, t, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = C(() => {
    var A;
    return (A = Rt(a.open)) != null ? A : !0;
  }), s = C(() => Rt(a.middleware)), r = C(() => {
    var A;
    return (A = Rt(a.placement)) != null ? A : "bottom";
  }), i = C(() => {
    var A;
    return (A = Rt(a.strategy)) != null ? A : "absolute";
  }), d = C(() => {
    var A;
    return (A = Rt(a.transform)) != null ? A : !0;
  }), c = C(() => qn(e.value)), u = C(() => qn(t.value)), p = T(0), h = T(0), m = T(i.value), w = T(r.value), g = no({}), x = T(!1), $ = C(() => {
    const A = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return A;
    const N = pl(u.value, p.value), L = pl(u.value, h.value);
    return d.value ? {
      ...A,
      transform: "translate(" + N + "px, " + L + "px)",
      ...ms(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: N + "px",
      top: L + "px"
    };
  });
  let P;
  function k() {
    if (c.value == null || u.value == null)
      return;
    const A = o.value;
    Md(c.value, u.value, {
      middleware: s.value,
      placement: r.value,
      strategy: i.value
    }).then((N) => {
      p.value = N.x, h.value = N.y, m.value = N.strategy, w.value = N.placement, g.value = N.middlewareData, x.value = A !== !1;
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
  return J([s, r, i, o], k, {
    flush: "sync"
  }), J([c, u], E, {
    flush: "sync"
  }), J(o, V, {
    flush: "sync"
  }), oo() && lo(O), {
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
    const s = Fl(n, o);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (Ll(n, o), o)];
}
function Co(e, t, a) {
  const n = a.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function en(e, t = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(e, t), a);
}
function Fd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ld = function e(t, a) {
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
const Ct = /* @__PURE__ */ Fd(Ld);
function qa(e) {
  return e == null;
}
function hs(e) {
  const { defaultValue: t, defaultPlaceholder: a, granularity: n = "day" } = e;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (a)
    return a.copy();
  const o = /* @__PURE__ */ new Date(), s = o.getFullYear(), r = o.getMonth() + 1, i = o.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new Ut(s, r, i, 0, 0, 0) : new Kt(s, r, i);
}
function gs(e) {
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
  const n = no();
  return ge(() => {
    n.value = e();
  }, {
    ...t,
    flush: (a = void 0) != null ? a : "sync"
  }), $a(n);
}
function Pt(e) {
  return oo() ? (lo(e), !0) : !1;
}
function zd() {
  const e = /* @__PURE__ */ new Set(), t = (a) => {
    e.delete(a);
  };
  return {
    on: (a) => {
      e.add(a);
      const n = () => t(a);
      return Pt(n), {
        off: n
      };
    },
    off: t,
    trigger: (...a) => Promise.all(Array.from(e).map((n) => n(...a)))
  };
}
function Wd(e) {
  let t = !1, a;
  const n = Rl(!0);
  return (...o) => (t || (a = n.run(() => e(...o)), t = !0), a);
}
function ys(e) {
  let t = 0, a, n;
  const o = () => {
    t -= 1, n && t <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...s) => (t += 1, a || (n = Rl(!0), a = n.run(() => e(...s))), Pt(o), a);
}
function st(e) {
  return typeof e == "function" ? e() : l(e);
}
const qe = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Kd = (e) => typeof e < "u", Ud = (e) => e != null, Hd = Object.prototype.toString, jd = (e) => Hd.call(e) === "[object Object]", bs = () => {
}, fl = /* @__PURE__ */ Gd();
function Gd() {
  var e, t;
  return qe && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function qd(e) {
  return je();
}
function _s(e, t = 1e4) {
  return Nl((a, n) => {
    let o = st(e), s;
    const r = () => setTimeout(() => {
      o = st(e), n();
    }, st(t));
    return Pt(() => {
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
  qd() && ro(e, t);
}
function $o(e, t, a = {}) {
  const {
    immediate: n = !0
  } = a, o = T(!1);
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
    }, st(t));
  }
  return n && (o.value = !0, qe && d()), Pt(i), {
    isPending: $a(o),
    start: d,
    stop: i
  };
}
function Xd(e = 1e3, t = {}) {
  const {
    controls: a = !1,
    callback: n
  } = t, o = $o(
    n ?? bs,
    e,
    t
  ), s = C(() => !o.isPending.value);
  return a ? {
    ready: s,
    ...o
  } : s;
}
function Ae(e) {
  var t;
  const a = st(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const un = qe ? window : void 0;
function Gt(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = un) : [t, a, n, o] = e, !t)
    return bs;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((u) => u()), s.length = 0;
  }, i = (u, p, h, m) => (u.addEventListener(p, h, m), () => u.removeEventListener(p, h, m)), d = J(
    () => [Ae(t), st(o)],
    ([u, p]) => {
      if (r(), !u)
        return;
      const h = jd(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((w) => i(u, m, w, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), r();
  };
  return Pt(c), c;
}
function Zd(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function ko(...e) {
  let t, a, n = {};
  e.length === 3 ? (t = e[0], a = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, a = e[0], n = e[1]) : (t = e[0], a = e[1]) : (t = !0, a = e[0]);
  const {
    target: o = un,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, d = Zd(t);
  return Gt(o, s, (c) => {
    c.repeat && st(i) || d(c) && a(c);
  }, r);
}
function Bo() {
  const e = T(!1), t = je();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function Jd(e) {
  const t = Bo();
  return C(() => (t.value, !!e()));
}
function Qd(e, t, a = {}) {
  const { window: n = un, ...o } = a;
  let s;
  const r = Jd(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, d = C(() => {
    const h = st(e), m = (Array.isArray(h) ? h : [h]).map(Ae).filter(Ud);
    return new Set(m);
  }), c = J(
    () => d.value,
    (h) => {
      i(), r.value && h.size && (s = new MutationObserver(t), h.forEach((m) => s.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), u = () => s == null ? void 0 : s.takeRecords(), p = () => {
    i(), c();
  };
  return Pt(p), {
    isSupported: r,
    stop: p,
    takeRecords: u
  };
}
function ws(e, t = {}) {
  const {
    immediate: a = !0,
    fpsLimit: n = void 0,
    window: o = un
  } = t, s = T(!1), r = n ? 1e3 / n : null;
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
  return a && u(), Pt(p), {
    isActive: $a(s),
    pause: p,
    resume: u
  };
}
function eu(e) {
  return JSON.parse(JSON.stringify(e));
}
function de(e, t, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: p,
    shouldEmit: h
  } = n, m = je(), w = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let g = c;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const x = (k) => i ? typeof i == "function" ? i(k) : eu(k) : k, $ = () => Kd(e[t]) ? x(e[t]) : p, P = (k) => {
    h ? h(k) && w(g, k) : w(g, k);
  };
  if (d) {
    const k = $(), O = T(k);
    let E = !1;
    return J(
      () => e[t],
      (V) => {
        E || (E = !0, O.value = x(V), oe(() => E = !1));
      }
    ), J(
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
function cn(e) {
  return e ? e.flatMap((t) => t.type === te ? cn(t.children) : [t]) : [];
}
const tu = ["INPUT", "TEXTAREA"];
function xs(e, t, a, n = {}) {
  if (!t || n.enableIgnoredElement && tu.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
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
  const k = a ? Array.from(a.querySelectorAll(s)) : r;
  if (!k.length)
    return null;
  c && e.preventDefault();
  let O = null;
  return P || $ ? O = Cs(k, t, {
    goForward: $ ? w : d === "ltr" ? p : h,
    loop: i
  }) : g ? O = k.at(0) || null : x && (O = k.at(-1) || null), u && (O == null || O.focus()), O;
}
function Cs(e, t, a, n = e.length) {
  if (--n === 0)
    return null;
  const o = e.indexOf(t), s = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (s < 0 || s >= e.length))
    return null;
  const r = (s + e.length) % e.length, i = e[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Cs(
    e,
    i,
    a,
    n
  ) : i : null;
}
function Tn(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Yn(e, t, a = ".", n) {
  if (!Tn(t))
    return Yn(e, {}, a);
  const o = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = e[s];
    r != null && (Array.isArray(r) && Array.isArray(o[s]) ? o[s] = [...r, ...o[s]] : Tn(r) && Tn(o[s]) ? o[s] = Yn(
      r,
      o[s],
      (a ? `${a}.` : "") + s.toString()
    ) : o[s] = r);
  }
  return o;
}
function au(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((a, n) => Yn(a, n, ""), {})
  );
}
const nu = au(), [pn, Vy] = ne("ConfigProvider");
let ou = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", lu = (e = 21) => {
  let t = "", a = e;
  for (; a--; )
    t += ou[Math.random() * 64 | 0];
  return t;
};
const su = ys(() => {
  const e = T(/* @__PURE__ */ new Map()), t = T(), a = C(() => {
    for (const r of e.value.values())
      if (r)
        return !0;
    return !1;
  }), n = pn({
    scrollBody: T(!0)
  });
  let o = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", fl && (o == null || o()), t.value = void 0;
  };
  return J(a, (r, i) => {
    var d;
    if (!qe)
      return;
    if (!r) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, u = { padding: c, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? nu({
      padding: n.scrollBody.value.padding === !0 ? c : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? c : n.scrollBody.value.margin
    }, u) : u : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), fl && (o = Gt(
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
function Ba(e) {
  const t = lu(6), a = su();
  a.value.set(t, e ?? !1);
  const n = C({
    get: () => a.value.get(t) ?? !1,
    set: (o) => a.value.set(t, o)
  });
  return Yd(() => {
    a.value.delete(t);
  }), n;
}
const ru = "data-radix-vue-collection-item";
function Qt(e, t = ru) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = T([]);
    function s() {
      const r = Ae(n);
      return r ? o.value = Array.from(
        r.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return Yr(() => {
      o.value = [];
    }), ie(s), Xr(s), J(() => n == null ? void 0 : n.value, s, { immediate: !0 }), Ll(a, o), o;
  }, injectCollection: () => Fl(a, T([])) };
}
function iu(e) {
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
  function s(g, x = !0) {
    return Li(g) && x ? o(Re(g), {
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
    const g = Yl(Bt());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => ({ label: i(Re(g.set({ month: x }))), value: x }));
  }
  function c(g, x = {}) {
    return new et(t.value, { year: "numeric", ...x }).format(g);
  }
  function u(g, x) {
    return vo(g) ? new et(t.value, {
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
    selectedDate: s,
    dayOfWeek: p,
    getMonths: d
  };
}
function Ye(e) {
  const t = pn({
    dir: T("ltr")
  });
  return C(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function Ot(e) {
  const t = je(), a = t == null ? void 0 : t.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), a == null || a.forEach((o) => {
    n[jr(Al(o))] = (...s) => e(o, ...s);
  }), n;
}
let An = 0;
function Do() {
  ge((e) => {
    if (!qe)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? vl()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? vl()
    ), An++, e(() => {
      An === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), An--;
    });
  });
}
function vl() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function Da(e) {
  return C(() => {
    var t;
    return st(e) ? !!((t = Ae(e)) != null && t.closest("form")) : !0;
  });
}
function le(e) {
  const t = je(), a = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, s) => {
    const r = (t == null ? void 0 : t.type.props[s]).default;
    return r !== void 0 && (o[s] = r), o;
  }, {}), n = Tl(e);
  return C(() => {
    const o = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      o[Al(r)] = s[r];
    }), Object.keys({ ...a, ...o }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function Q(e, t) {
  const a = le(e), n = t ? Ot(t) : {};
  return C(() => ({
    ...a.value,
    ...n
  }));
}
function F() {
  const e = je(), t = T(), a = C(() => {
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
  function s(r) {
    t.value = r, !(r instanceof Element || !r) && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => r.$el
    }), e.exposed = o);
  }
  return { forwardRef: s, currentRef: t, currentElement: a };
}
function du(e, t) {
  const a = _s(!1, 300), n = T(null), o = zd();
  function s() {
    n.value = null, a.value = !1;
  }
  function r(i, d) {
    const c = i.currentTarget, u = { x: i.clientX, y: i.clientY }, p = uu(u, c.getBoundingClientRect()), h = cu(u, p), m = pu(d.getBoundingClientRect()), w = vu([...h, ...m]);
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
        const m = u.target, w = { x: u.clientX, y: u.clientY }, g = ((p = e.value) == null ? void 0 : p.contains(m)) || ((h = t.value) == null ? void 0 : h.contains(m)), x = !fu(w, n.value), $ = m.hasAttribute("data-grace-area-trigger");
        g ? s() : (x || $) && (s(), o.trigger());
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
function uu(e, t) {
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
function cu(e, t, a = 5) {
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
function pu(e) {
  const { top: t, right: a, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: a, y: t },
    { x: a, y: n },
    { x: o, y: n }
  ];
}
function fu(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, d = t[s].y, c = t[r].x, u = t[r].y;
    d > n != u > n && a < (c - i) * (n - d) / (u - d) + i && (o = !o);
  }
  return o;
}
function vu(e) {
  const t = e.slice();
  return t.sort((a, n) => a.x < n.x ? -1 : a.x > n.x ? 1 : a.y < n.y ? -1 : a.y > n.y ? 1 : 0), mu(t);
}
function mu(e) {
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
var hu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, It = /* @__PURE__ */ new WeakMap(), Fa = /* @__PURE__ */ new WeakMap(), La = {}, Mn = 0, $s = function(e) {
  return e && (e.host || $s(e.parentNode));
}, gu = function(e, t) {
  return t.map(function(a) {
    if (e.contains(a))
      return a;
    var n = $s(a);
    return n && e.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, yu = function(e, t, a, n) {
  var o = gu(t, Array.isArray(e) ? e : [e]);
  La[a] || (La[a] = /* @__PURE__ */ new WeakMap());
  var s = La[a], r = [], i = /* @__PURE__ */ new Set(), d = new Set(o), c = function(p) {
    !p || i.has(p) || (i.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var u = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(h) {
      if (i.has(h))
        u(h);
      else
        try {
          var m = h.getAttribute(n), w = m !== null && m !== "false", g = (It.get(h) || 0) + 1, x = (s.get(h) || 0) + 1;
          It.set(h, g), s.set(h, x), r.push(h), g === 1 && w && Fa.set(h, !0), x === 1 && h.setAttribute(a, "true"), w || h.setAttribute(n, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", h, $);
        }
    });
  };
  return u(t), i.clear(), Mn++, function() {
    r.forEach(function(p) {
      var h = It.get(p) - 1, m = s.get(p) - 1;
      It.set(p, h), s.set(p, m), h || (Fa.has(p) || p.removeAttribute(n), Fa.delete(p)), m || p.removeAttribute(a);
    }), Mn--, Mn || (It = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Fa = /* @__PURE__ */ new WeakMap(), La = {});
  };
}, bu = function(e, t, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = hu(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), yu(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function Pa(e) {
  let t;
  J(() => Ae(e), (a) => {
    a ? t = bu(a) : t && t();
  }), bt(() => {
    t && t();
  });
}
let _u = 0;
function ye(e, t = "radix") {
  const a = pn({ useId: void 0 });
  return Xo.useId ? `${t}-${Xo.useId()}` : a.useId ? `${t}-${a.useId()}` : `${t}-${++_u}`;
}
function ks(e) {
  const t = T(), a = C(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), n = C(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return ie(() => {
    const o = Ae(e);
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
function wu(e, t) {
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
function Po(e) {
  const t = _s("", 1e3);
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
      }), u = Cu(c, t.value, d), p = r.find(
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
function xu(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
function Cu(e, t, a) {
  const n = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = a ? e.indexOf(a) : -1;
  let s = xu(e, Math.max(o, 0));
  n.length === 1 && (s = s.filter((i) => i !== a));
  const r = s.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return r !== a ? r : void 0;
}
function Bs() {
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
const Oo = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const s = cn(a.default()), r = s.findIndex((u) => u.type !== Ml);
      if (r === -1)
        return s;
      const i = s[r];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? S(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const c = zr(i, d);
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => Ke(n, t) : n !== "template" ? () => Ke(e.as, t, { default: a.default }) : () => Ke(Oo, t, { default: a.default });
  }
});
function St() {
  const e = T(), t = C(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = e.value) == null ? void 0 : a.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : Ae(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [Ds, $u] = ne("CollapsibleRoot"), ku = /* @__PURE__ */ b({
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
    const n = e, o = de(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = de(n, "disabled");
    return $u({
      contentId: "",
      disabled: s,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), t({ open: o }), F(), (r, i) => (v(), y(l(R), {
      as: r.as,
      "as-child": n.asChild,
      "data-state": l(o) ? "open" : "closed",
      "data-disabled": l(s) ? "" : void 0
    }, {
      default: f(() => [
        _(r.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), Bu = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const a = Ds();
    return (n, o) => {
      var s, r;
      return v(), y(l(R), {
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
          _(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Du(e, t) {
  const a = T({}), n = T("none"), o = e.value ? "mounted" : "unmounted", { state: s, dispatch: r } = wu(o, {
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
    if (qe) {
      const w = new CustomEvent(h, { bubbles: !1, cancelable: !1 });
      (m = t.value) == null || m.dispatchEvent(w);
    }
  };
  J(
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
    ), g = s.value === "mounted" ? "enter" : "leave";
    h.target === t.value && w && (i(`after-${g}`), r("ANIMATION_END")), h.target === t.value && m === "none" && r("ANIMATION_END");
  }, c = (h) => {
    h.target === t.value && (n.value = Na(t.value));
  }, u = J(
    t,
    (h, m) => {
      h ? (a.value = getComputedStyle(h), h.addEventListener("animationstart", c), h.addEventListener("animationcancel", d), h.addEventListener("animationend", d)) : (r("ANIMATION_END"), m == null || m.removeEventListener("animationstart", c), m == null || m.removeEventListener("animationcancel", d), m == null || m.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), p = J(s, () => {
    const h = Na(t.value);
    n.value = s.value === "mounted" ? h : "none";
  });
  return bt(() => {
    u(), p();
  }), {
    isPresent: C(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function Na(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Oe = b({
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
    const { present: o, forceMount: s } = ue(e), r = T(), { isPresent: i } = Du(o, r);
    a({ present: i });
    let d = t.default({ present: i });
    d = cn(d || []);
    const c = je();
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
    return () => s.value || o.value || i.value ? Ke(t.default({ present: i })[0], {
      ref: (u) => {
        const p = Ae(u);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
}), Pu = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Ds();
    a.contentId || (a.contentId = ye(void 0, "radix-vue-collapsible-content"));
    const n = T(), { forwardRef: o, currentElement: s } = F(), r = T(0), i = T(0), d = C(() => a.open.value), c = T(d.value), u = T();
    return J(
      () => {
        var p;
        return [d.value, (p = n.value) == null ? void 0 : p.present];
      },
      async () => {
        await oe();
        const p = s.value;
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
    ), ie(() => {
      requestAnimationFrame(() => {
        c.value = !1;
      });
    }), (p, h) => (v(), y(l(Oe), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || l(a).open.value,
      "force-mount": !0
    }, {
      default: f(() => {
        var m, w;
        return [
          D(l(R), S(p.$attrs, {
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
                (g = n.value) != null && g.present ? _(p.$slots, "default", { key: 0 }) : X("", !0)
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
function Ps({ type: e, defaultValue: t, modelValue: a }) {
  const n = a || t;
  if (qa(e) && qa(a) && qa(t))
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
function Ou({ type: e, defaultValue: t, modelValue: a }) {
  return e || Ps({ type: e, defaultValue: t, modelValue: a });
}
function Su({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function Eu(e, t) {
  const a = T(Ou(e)), n = de(e, "modelValue", t, {
    defaultValue: Su(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  J(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const r = Ps(e);
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
  const s = C(() => a.value === "single");
  return {
    modelValue: n,
    type: a,
    changeModelValue: o,
    isSingle: s
  };
}
const [fn, Tu] = ne("AccordionRoot"), Au = /* @__PURE__ */ b({
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
    const a = e, n = t, { dir: o, disabled: s } = ue(a), r = Ye(o), { modelValue: i, changeModelValue: d, isSingle: c } = Eu(a, n), { forwardRef: u, currentElement: p } = F();
    return Tu({
      disabled: s,
      direction: r,
      orientation: a.orientation,
      parentElement: p,
      isSingle: c,
      collapsible: a.collapsible,
      modelValue: i,
      changeModelValue: d
    }), (h, m) => (v(), y(l(R), {
      ref: l(u),
      "as-child": h.asChild,
      as: h.as
    }, {
      default: f(() => [
        _(h.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [So, Mu] = ne("AccordionItem"), Vu = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const a = e, n = fn(), o = C(
      () => n.isSingle.value ? a.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(a.value)
    ), s = C(() => n.disabled.value || a.disabled || n.isSingle.value && o.value && !n.collapsible), r = C(() => s.value ? "" : void 0), i = C(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: o, dataDisabled: r });
    const { currentRef: d, currentElement: c } = F();
    Mu({
      open: o,
      dataState: i,
      disabled: s,
      dataDisabled: r,
      triggerId: "",
      currentRef: d,
      currentElement: c,
      value: C(() => a.value)
    });
    function u(p) {
      xs(
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
    return (p, h) => (v(), y(l(ku), {
      "data-orientation": l(n).orientation,
      "data-disabled": r.value,
      "data-state": i.value,
      disabled: s.value,
      open: o.value,
      as: a.as,
      "as-child": a.asChild,
      onKeydown: Fe(u, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: f(() => [
        _(p.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), Iu = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = fn(), n = So();
    return F(), (o, s) => (v(), y(l(Pu), {
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
        _(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), Ru = /* @__PURE__ */ b({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, a = fn(), n = So();
    return F(), (o, s) => (v(), y(l(R), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": l(a).orientation,
      "data-state": l(n).dataState.value,
      "data-disabled": l(n).dataDisabled.value
    }, {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), Fu = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = fn(), n = So();
    n.triggerId || (n.triggerId = ye(void 0, "radix-vue-accordion-trigger"));
    function o() {
      n.disabled.value || a.changeModelValue(n.value.value);
    }
    return (s, r) => (v(), y(l(Bu), {
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
        _(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [Xe, Lu] = ne("DialogRoot"), Os = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = de(a, "open", t, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = T(), s = T(), { modal: r } = ue(a);
    return Lu({
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
    }), (i, d) => _(i.$slots, "default", { open: l(n) });
  }
}), Ss = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Xe(), { forwardRef: n, currentElement: o } = F();
    return a.contentId || (a.contentId = ye(void 0, "radix-vue-dialog-content")), ie(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), y(l(R), S(t, {
      ref: l(n),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": l(a).open.value || !1,
      "aria-controls": l(a).open.value ? l(a).contentId : void 0,
      "data-state": l(a).open.value ? "open" : "closed",
      onClick: l(a).onOpenToggle
    }), {
      default: f(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Oa = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Bo();
    return (a, n) => l(t) || a.forceMount ? (v(), y(on, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      _(a.$slots, "default")
    ], 8, ["to", "disabled"])) : X("", !0);
  }
}), Eo = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Oa), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nu = "dismissableLayer.pointerDownOutside", zu = "dismissableLayer.focusOutside";
function Es(e, t) {
  const a = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function Wu(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = T(!1), s = T(() => {
  });
  return ge((r) => {
    if (!qe)
      return;
    const i = async (c) => {
      const u = c.target;
      if (t != null && t.value) {
        if (Es(t.value, u)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let p = function() {
            Co(
              Nu,
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
function Ku(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = T(!1);
  return ge((s) => {
    if (!qe)
      return;
    const r = async (i) => {
      t != null && t.value && (await oe(), !(!t.value || Es(t.value, i.target)) && i.target && !o.value && Co(
        zu,
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
const Ie = Vl({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ea = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: s } = F(), r = C(
      () => {
        var w;
        return ((w = s.value) == null ? void 0 : w.ownerDocument) ?? globalThis.document;
      }
    ), i = C(() => Ie.layersRoot), d = C(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), c = C(() => Ie.layersWithOutsidePointerEventsDisabled.size > 0), u = C(() => {
      const w = Array.from(i.value), [g] = [...Ie.layersWithOutsidePointerEventsDisabled].slice(-1), x = w.indexOf(g);
      return d.value >= x;
    }), p = Wu(async (w) => {
      const g = [...Ie.branches].some(
        (x) => x == null ? void 0 : x.contains(w.target)
      );
      !u.value || g || (n("pointerDownOutside", w), n("interactOutside", w), await oe(), w.defaultPrevented || n("dismiss"));
    }, s), h = Ku((w) => {
      [...Ie.branches].some(
        (g) => g == null ? void 0 : g.contains(w.target)
      ) || (n("focusOutside", w), n("interactOutside", w), w.defaultPrevented || n("dismiss"));
    }, s);
    ko("Escape", (w) => {
      d.value === i.value.size - 1 && (n("escapeKeyDown", w), w.defaultPrevented || n("dismiss"));
    });
    let m;
    return ge((w) => {
      s.value && (a.disableOutsidePointerEvents && (Ie.layersWithOutsidePointerEventsDisabled.size === 0 && (m = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), Ie.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), w(() => {
        a.disableOutsidePointerEvents && Ie.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = m);
      }));
    }), ge((w) => {
      w(() => {
        s.value && (i.value.delete(s.value), Ie.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (w, g) => (v(), y(l(R), {
      ref: l(o),
      "as-child": w.asChild,
      as: w.as,
      "data-dismissable-layer": "",
      style: Zt({
        pointerEvents: c.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(h).onFocusCapture,
      onBlurCapture: l(h).onBlurCapture,
      onPointerdownCapture: l(p).onPointerDownCapture
    }, {
      default: f(() => [
        _(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Uu = /* @__PURE__ */ b({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = F();
    return ie(() => {
      Ie.branches.add(n.value);
    }), bt(() => {
      Ie.branches.delete(n.value);
    }), (o, s) => (v(), y(l(R), S({ ref: l(a) }, t), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vn = "focusScope.autoFocusOnMount", In = "focusScope.autoFocusOnUnmount", ml = { bubbles: !1, cancelable: !0 };
function Ya(e, { select: t = !1 } = {}) {
  const a = document.activeElement;
  for (const n of e)
    if (vt(n, { select: t }), document.activeElement !== a)
      return !0;
}
function Hu(e) {
  const t = To(e), a = hl(t, e), n = hl(t.reverse(), e);
  return [a, n];
}
function To(e) {
  const t = [], a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) t.push(a.currentNode);
  return t;
}
function hl(e, t) {
  for (const a of e)
    if (!ju(a, { upTo: t }))
      return a;
}
function ju(e, { upTo: t }) {
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
function Gu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function vt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const a = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== a && Gu(e) && t && e.select();
  }
}
const qu = Wd(() => T([]));
function Yu() {
  const e = qu();
  return {
    add(t) {
      const a = e.value[0];
      t !== a && (a == null || a.pause()), e.value = gl(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var a;
      e.value = gl(e.value, t), (a = e.value[0]) == null || a.resume();
    }
  };
}
function gl(e, t) {
  const a = [...e], n = a.indexOf(t);
  return n !== -1 && a.splice(n, 1), a;
}
function Xu(e) {
  return e.filter((t) => t.tagName !== "A");
}
const vn = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, n = t, { currentRef: o, currentElement: s } = F(), r = T(null), i = Yu(), d = Vl({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ge((u) => {
      if (!qe)
        return;
      const p = s.value;
      if (!a.trapped)
        return;
      function h(x) {
        if (d.paused || !p)
          return;
        const $ = x.target;
        p.contains($) ? r.value = $ : vt(r.value, { select: !0 });
      }
      function m(x) {
        if (d.paused || !p)
          return;
        const $ = x.relatedTarget;
        $ !== null && (p.contains($) || vt(r.value, { select: !0 }));
      }
      function w(x) {
        p.contains(r.value) || vt(p);
      }
      document.addEventListener("focusin", h), document.addEventListener("focusout", m);
      const g = new MutationObserver(w);
      p && g.observe(p, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), ge(async (u) => {
      const p = s.value;
      if (await oe(), !p)
        return;
      i.add(d);
      const h = document.activeElement;
      if (!p.contains(h)) {
        const m = new CustomEvent(Vn, ml);
        p.addEventListener(Vn, (w) => n("mountAutoFocus", w)), p.dispatchEvent(m), m.defaultPrevented || (Ya(Xu(To(p)), {
          select: !0
        }), document.activeElement === h && vt(p));
      }
      u(() => {
        p.removeEventListener(Vn, (g) => n("mountAutoFocus", g));
        const m = new CustomEvent(In, ml), w = (g) => {
          n("unmountAutoFocus", g);
        };
        p.addEventListener(In, w), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || vt(h ?? document.body, { select: !0 }), p.removeEventListener(In, w), i.remove(d);
        }, 0);
      });
    });
    function c(u) {
      if (!a.loop && !a.trapped || d.paused)
        return;
      const p = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, h = document.activeElement;
      if (p && h) {
        const m = u.currentTarget, [w, g] = Hu(m);
        w && g ? !u.shiftKey && h === g ? (u.preventDefault(), a.loop && vt(w, { select: !0 })) : u.shiftKey && h === w && (u.preventDefault(), a.loop && vt(g, { select: !0 })) : h === m && u.preventDefault();
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
        _(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Zu = "menu.itemSelect", Xn = ["Enter", " "], Ju = ["ArrowDown", "PageUp", "Home"], Ts = ["ArrowUp", "PageDown", "End"], Qu = [...Ju, ...Ts], ec = {
  ltr: [...Xn, "ArrowRight"],
  rtl: [...Xn, "ArrowLeft"]
}, tc = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Ao(e) {
  return e ? "open" : "closed";
}
function tn(e) {
  return e === "indeterminate";
}
function Mo(e) {
  return tn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Zn(e) {
  const t = document.activeElement;
  for (const a of e)
    if (a === t || (a.focus(), document.activeElement !== t))
      return;
}
function ac(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, d = t[s].y, c = t[r].x, u = t[r].y;
    d > n != u > n && a < (c - i) * (n - d) / (u - d) + i && (o = !o);
  }
  return o;
}
function nc(e, t) {
  if (!t)
    return !1;
  const a = { x: e.clientX, y: e.clientY };
  return ac(a, t);
}
function wa(e) {
  return e.pointerType === "mouse";
}
const oc = "DialogTitle", lc = "DialogContent";
function sc({
  titleName: e = oc,
  contentName: t = lc,
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
const As = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Xe(), { forwardRef: s, currentElement: r } = F();
    return o.titleId || (o.titleId = ye(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = ye(void 0, "radix-vue-dialog-description")), ie(() => {
      o.contentElement = r, document.activeElement !== document.body && (o.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && sc({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: r
    }), (i, d) => (v(), y(l(vn), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: d[6] || (d[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: f(() => [
        D(l(ea), S({
          id: l(o).contentId,
          ref: l(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(o).descriptionId,
          "aria-labelledby": l(o).titleId,
          "data-state": l(Ao)(l(o).open.value)
        }, i.$attrs, {
          onDismiss: d[0] || (d[0] = (c) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: d[2] || (d[2] = (c) => n("focusOutside", c)),
          onInteractOutside: d[3] || (d[3] = (c) => n("interactOutside", c)),
          onPointerDownOutside: d[4] || (d[4] = (c) => n("pointerDownOutside", c))
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
}), rc = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Xe(), s = Ot(n), { forwardRef: r, currentElement: i } = F();
    return Pa(i), (d, c) => (v(), y(As, S({ ...a, ...l(s) }, {
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
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), ic = /* @__PURE__ */ b({
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
    F();
    const o = Xe(), s = T(!1), r = T(!1);
    return (i, d) => (v(), y(As, S({ ...a, ...l(n) }, {
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
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vo = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Xe(), s = Ot(n), { forwardRef: r } = F();
    return (i, d) => (v(), y(l(Oe), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), y(rc, S({
          key: 0,
          ref: l(r)
        }, { ...a, ...l(s), ...i.$attrs }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), y(ic, S({
          key: 1,
          ref: l(r)
        }, { ...a, ...l(s), ...i.$attrs }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), dc = /* @__PURE__ */ b({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Xe();
    return Ba(!0), F(), (a, n) => (v(), y(l(R), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": l(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Io = /* @__PURE__ */ b({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Xe(), { forwardRef: a } = F();
    return (n, o) => {
      var s;
      return (s = l(t)) != null && s.modal.value ? (v(), y(l(Oe), {
        key: 0,
        present: n.forceMount || l(t).open.value
      }, {
        default: f(() => [
          D(dc, S(n.$attrs, {
            ref: l(a),
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
      }, 8, ["present"])) : X("", !0);
    };
  }
}), Sa = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const a = Xe();
    return (n, o) => (v(), y(l(R), S(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (s) => l(a).onOpenChange(!1))
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Ms = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, a = Xe();
    return F(), (n, o) => (v(), y(l(R), S(t, {
      id: l(a).titleId
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Vs = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    F();
    const a = Xe();
    return (n, o) => (v(), y(l(R), S(t, {
      id: l(a).descriptionId
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function uc(e) {
  function t(n) {
    return Array.isArray(e.date.value) ? e.date.value.some((o) => Ce(o, n)) : e.date.value ? Ce(e.date.value, n) : !1;
  }
  const a = C(
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
function cc(e, t) {
  const a = t(e), n = a.compare(e), o = {};
  return n >= 7 && (o.day = 1), n >= ya(e) && (o.month = 1), a.set({ ...o });
}
function pc(e, t) {
  const a = t(e), n = e.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= ya(e) && (o.month = 13), a.set({ ...o });
}
function fc(e, t) {
  return t(e);
}
function vc(e, t) {
  return t(e);
}
function Is(e) {
  const t = iu(e.locale.value), a = C(() => {
    const g = {
      calendar: e.placeholder.value.calendar.identifier
    };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (g.era = "short"), g;
  }), n = T(xt({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), o = C(() => n.value.map((g) => g.value));
  function s(g) {
    return !o.value.some((x) => Jo(g, x));
  }
  const r = (g = "month", x) => {
    if (!e.maxValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const $ = n.value[n.value.length - 1].value;
    if (x || e.nextPage.value) {
      const k = cc($, x || e.nextPage.value);
      return ma(k, e.maxValue.value);
    }
    if (g === "year") {
      const k = $.add({ years: 1 }).set({ day: 1, month: 1 });
      return ma(k, e.maxValue.value);
    }
    const P = $.add({ months: 1 }).set({ day: 1 });
    return ma(P, e.maxValue.value);
  }, i = (g = "month", x) => {
    if (!e.minValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const $ = n.value[0].value;
    if (x || e.prevPage.value) {
      const k = pc($, x || e.prevPage.value);
      return mt(k, e.minValue.value);
    }
    if (g === "year") {
      const k = $.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return mt(k, e.minValue.value);
    }
    const P = $.subtract({ months: 1 }).set({ day: 35 });
    return mt(P, e.minValue.value);
  };
  function d(g) {
    var x;
    return !!((x = e.isDateDisabled) != null && x.call(e, g) || e.disabled.value || e.maxValue.value && ma(g, e.maxValue.value) || e.minValue.value && mt(g, e.minValue.value));
  }
  const c = (g) => {
    var x;
    return !!((x = e.isDateUnavailable) != null && x.call(e, g));
  }, u = C(() => n.value.length ? n.value[0].rows[0].map((g) => t.dayOfWeek(Re(g), e.weekdayFormat.value)) : []), p = (g = "month", x) => {
    const $ = n.value[0].value;
    if (x || e.nextPage.value) {
      const O = fc($, x || e.nextPage.value), E = xt({
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
        A >= ya($) && (V.day = 1), A >= 365 && (V.month = 1);
      }
      e.placeholder.value = E[0].value.set({ ...V });
      return;
    }
    const P = g === "month" ? $.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : $.add({ years: 1 }), k = xt({
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
      const O = vc($, x || e.prevPage.value), E = xt({
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
        A >= ya($) && (V.day = 1), A >= 365 && (V.month = 1);
      }
      e.placeholder.value = E[0].value.set({ ...V });
      return;
    }
    const P = g === "month" ? $.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : $.subtract({ years: 1 }), k = xt({
      dateObj: P,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = k, e.placeholder.value = k[0].value.set({ day: 1 });
  };
  J(e.placeholder, (g) => {
    o.value.some((x) => Jo(x, g)) || (n.value = xt({
      dateObj: g,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), J([e.locale, e.weekStartsOn, e.fixedWeeks, e.numberOfMonths], () => {
    n.value = xt({
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
    isOutsideVisibleView: s,
    formatter: t,
    nextPage: p,
    prevPage: h,
    headingValue: m,
    fullCalendarLabel: w
  };
}
const mc = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, hc = {
  role: "heading",
  "aria-level": "2"
}, [ta, gc] = ne("CalendarRoot"), yc = /* @__PURE__ */ b({
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
    } = ue(a), { primitiveElement: N, currentElement: L } = St(), B = Ye(A), M = de(a, "modelValue", n, {
      defaultValue: O.value,
      passive: a.modelValue === void 0
    }), I = hs({
      defaultPlaceholder: a.placeholder,
      defaultValue: M.value
    }), G = de(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? I.copy(),
      passive: a.placeholder === void 0
    });
    function j(re) {
      G.value = re.copy();
    }
    const {
      fullCalendarLabel: W,
      headingValue: q,
      isDateDisabled: se,
      isDateUnavailable: pe,
      isNextButtonDisabled: me,
      isPrevButtonDisabled: ke,
      weekdays: be,
      isOutsideVisibleView: ia,
      nextPage: wt,
      prevPage: da,
      formatter: dt,
      grid: ua
    } = Is({
      locale: o,
      placeholder: G,
      weekStartsOn: c,
      fixedWeeks: p,
      numberOfMonths: g,
      minValue: m,
      maxValue: w,
      disabled: s,
      weekdayFormat: u,
      pagedNavigation: d,
      isDateDisabled: $.value,
      isDateUnavailable: P.value,
      calendarLabel: k,
      nextPage: E,
      prevPage: V
    }), {
      isInvalid: Se,
      isDateSelected: Be
    } = uc({
      date: M,
      isDateDisabled: se,
      isDateUnavailable: pe
    });
    J(M, (re) => {
      if (Array.isArray(re) && re.length) {
        const $e = re[re.length - 1];
        $e && !We(G.value, $e) && j($e);
      } else !Array.isArray(re) && re && !We(G.value, re) && j(re);
    });
    function ze(re) {
      if (h.value) {
        if (!M.value)
          M.value = [re.copy()];
        else if (Array.isArray(M.value)) {
          if (M.value.findIndex(($e) => Ce($e, re)) === -1)
            M.value = [...M.value, re];
          else if (!x.value) {
            const $e = M.value.filter((Je) => !Ce(Je, re));
            if (!$e.length) {
              G.value = re.copy(), M.value = void 0;
              return;
            }
            M.value = $e.map((Je) => Je.copy());
          }
        }
      } else {
        if (!M.value) {
          M.value = re.copy();
          return;
        }
        !x.value && We(M.value, re) ? (G.value = re.copy(), M.value = void 0) : M.value = re.copy();
      }
    }
    return ie(() => {
      i.value && gs(L.value);
    }), gc({
      isDateUnavailable: pe,
      dir: B,
      isDateDisabled: se,
      locale: o,
      formatter: dt,
      modelValue: M,
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
      preventDeselect: x,
      fullCalendarLabel: W,
      headingValue: q,
      isInvalid: Se,
      isDateSelected: Be,
      isNextButtonDisabled: me,
      isPrevButtonDisabled: ke,
      isOutsideVisibleView: ia,
      nextPage: wt,
      prevPage: da,
      parentElement: L,
      onPlaceholderChange: j,
      onDateChange: ze
    }), (re, $e) => (v(), y(l(R), {
      ref_key: "primitiveElement",
      ref: N,
      as: re.as,
      "as-child": re.asChild,
      role: "application",
      "aria-label": l(W),
      "data-readonly": l(r) ? "" : void 0,
      "data-disabled": l(s) ? "" : void 0,
      "data-invalid": l(Se) ? "" : void 0,
      dir: l(B)
    }, {
      default: f(() => [
        _(re.$slots, "default", {
          date: l(G),
          grid: l(ua),
          weekDays: l(be),
          weekStartsOn: l(c),
          locale: l(o),
          fixedWeeks: l(p)
        }),
        ce("div", mc, [
          ce("div", hc, Z(l(W)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), bc = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(R), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _c = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = ta();
    return (n, o) => (v(), y(l(R), S(t, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        _(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          Y(Z(l(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), wc = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = ta(), n = C(() => a.disabled.value ? !0 : void 0), o = C(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), y(l(R), S(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: f(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), xc = /* @__PURE__ */ b({
  __name: "CalendarCell",
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
        "aria-selected": l(t).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": l(t).isDateDisabled(a.date) || ((s = (o = l(t)).isDateUnavailable) == null ? void 0 : s.call(o, a.date)),
        "data-disabled": l(t).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
          _(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Cc = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(R), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $c = /* @__PURE__ */ b({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = C(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = ta();
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
        _(o.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), kc = /* @__PURE__ */ b({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = C(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = ta();
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
        _(o.$slots, "default", {}, () => [
          Y("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Bc = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(R), S(t, { "aria-hidden": "true" }), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dc = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(R), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pc = /* @__PURE__ */ b({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(R), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oc = /* @__PURE__ */ b({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = Bs(), n = ta(), { primitiveElement: o, currentElement: s } = St(), r = C(() => t.day.day.toLocaleString(n.locale.value)), i = C(() => n.formatter.custom(Re(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), d = C(() => n.isDateDisabled(t.day)), c = C(
      () => {
        var k;
        return (k = n.isDateUnavailable) == null ? void 0 : k.call(n, t.day);
      }
    ), u = C(() => Gl(t.day, Bt())), p = C(() => !jl(t.day, t.month)), h = C(
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
      let V = E.indexOf(s.value);
      const A = 7, N = n.dir.value === "rtl" ? -1 : 1;
      switch (k.code) {
        case a.ARROW_RIGHT:
          V += N;
          break;
        case a.ARROW_LEFT:
          V -= N;
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
          const L = O ? Array.from(O.querySelectorAll(g)) : [];
          L[L.length - Math.abs(V)].focus();
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
    return (k, O) => (v(), y(l(R), S({
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
        O[0] || (O[0] = Fe(_e(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: f(() => [
        _(k.$slots, "default", { dayValue: r.value }, () => [
          Y(Z(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function an(e) {
  return e === "indeterminate";
}
function Rs(e) {
  return an(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Sc = ["value", "checked", "name", "disabled", "required"], [Ec, Tc] = ne("CheckboxRoot"), Ac = /* @__PURE__ */ b({
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
    const a = e, n = t, { disabled: o } = ue(a), s = de(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    }), { forwardRef: r, currentElement: i } = F(), d = Da(i), c = C(() => {
      var u;
      return a.id && i.value ? (u = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : u.innerText : void 0;
    });
    return Tc({
      disabled: o,
      state: s
    }), (u, p) => (v(), K(te, null, [
      D(l(R), S(u.$attrs, {
        id: u.id,
        ref: l(r),
        role: "checkbox",
        "as-child": a.asChild,
        as: u.as,
        type: u.as === "button" ? "button" : void 0,
        "aria-checked": l(an)(l(s)) ? "mixed" : l(s),
        "aria-required": !1,
        "aria-label": u.$attrs["aria-label"] || c.value,
        "data-state": l(Rs)(l(s)),
        "data-disabled": l(o) ? "" : void 0,
        disabled: l(o),
        onKeydown: Fe(_e(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (h) => s.value = l(an)(l(s)) ? !0 : !l(s))
      }), {
        default: f(() => [
          _(u.$slots, "default", { checked: l(s) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      l(d) ? (v(), K("input", {
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
      }, null, 8, Sc)) : X("", !0)
    ], 64));
  }
}), Mc = /* @__PURE__ */ b({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = F(), a = Ec();
    return (n, o) => (v(), y(l(Oe), {
      present: n.forceMount || l(an)(l(a).state.value) || l(a).state.value === !0
    }, {
      default: f(() => [
        D(l(R), S({
          ref: l(t),
          "data-state": l(Rs)(l(a).state.value),
          "data-disabled": l(a).disabled.value ? "" : void 0,
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
}), [Fs, Vc] = ne("PopperRoot"), aa = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = T();
    return Vc({
      anchor: t,
      onAnchorChange: (a) => t.value = a
    }), (a, n) => _(a.$slots, "default");
  }
}), mn = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = F(), o = Fs();
    return ge(() => {
      o.onAnchorChange(t.element ?? n.value);
    }), (s, r) => (v(), y(l(R), {
      ref: l(a),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: f(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Ic(e) {
  return e !== null;
}
function Rc(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var a, n, o;
      const { placement: s, rects: r, middlewareData: i } = t, d = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, c = d ? 0 : e.arrowWidth, u = d ? 0 : e.arrowHeight, [p, h] = Jn(s), m = { start: "0%", center: "50%", end: "100%" }[h], w = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + c / 2, g = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + u / 2;
      let x = "", $ = "";
      return p === "bottom" ? (x = d ? m : `${w}px`, $ = `${-u}px`) : p === "top" ? (x = d ? m : `${w}px`, $ = `${r.floating.height + u}px`) : p === "right" ? (x = `${-u}px`, $ = d ? m : `${g}px`) : p === "left" && (x = `${r.floating.width + u}px`, $ = d ? m : `${g}px`), { data: { x, y: $ } };
    }
  };
}
function Jn(e) {
  const [t, a = "center"] = e.split("-");
  return [t, a];
}
const Ls = {
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
}, [Iy, Fc] = ne("PopperContent"), qt = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ zl({
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
    ...Ls
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Fs(), { forwardRef: s, currentElement: r } = F(), i = T(), d = T(), { width: c, height: u } = ks(d), p = C(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), h = C(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = C(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), w = C(() => ({
      padding: h.value,
      boundary: m.value.filter(Ic),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), g = Nd(() => [
      Pd({
        mainAxis: a.sideOffset + u.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && cl({
        ...w.value
      }),
      a.avoidCollisions && Od({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? Ad() : void 0,
        ...w.value
      }),
      !a.prioritizePosition && a.avoidCollisions && cl({
        ...w.value
      }),
      Sd({
        ...w.value,
        apply: ({ elements: B, rects: M, availableWidth: I, availableHeight: G }) => {
          const { width: j, height: W } = M.reference, q = B.floating.style;
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
      d.value && Id({ element: d.value, padding: a.arrowPadding }),
      Rc({
        arrowWidth: c.value,
        arrowHeight: u.value
      }),
      a.hideWhenDetached && Ed({ strategy: "referenceHidden", ...w.value })
    ]), { floatingStyles: x, placement: $, isPositioned: P, middlewareData: k } = Rd(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...B) => Dd(...B, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), O = C(
      () => Jn($.value)[0]
    ), E = C(
      () => Jn($.value)[1]
    );
    Zr(() => {
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
    const N = C(() => {
      var B;
      return ((B = k.value.arrow) == null ? void 0 : B.x) ?? 0;
    }), L = C(() => {
      var B;
      return ((B = k.value.arrow) == null ? void 0 : B.y) ?? 0;
    });
    return Fc({
      placedSide: O,
      onArrowChange: (B) => d.value = B,
      arrowX: N,
      arrowY: L,
      shouldHideArrow: V
    }), (B, M) => {
      var I, G, j;
      return v(), K("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Zt({
          ...l(x),
          transform: l(P) ? l(x).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: A.value,
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
        D(l(R), S({ ref: l(s) }, B.$attrs, {
          "as-child": a.asChild,
          as: B.as,
          "data-side": O.value,
          "data-align": E.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l(P) ? void 0 : "none"
          }
        }), {
          default: f(() => [
            _(B.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Ea = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return F(), (t, a) => (v(), y(l(R), {
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
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Lc = /* @__PURE__ */ b({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, a = C(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${o}][${t.name}][${s}]`, value: r })) : { name: `[${t.name}][${o}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, o]) => ({ name: `[${t.name}][${n}]`, value: o })) : []);
    return (n, o) => (v(!0), K(te, null, he(a.value, (s) => (v(), y(Ea, {
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
}), Nc = "data-radix-vue-collection-item", [Ro, zc] = ne("CollectionProvider");
function Fo(e = Nc) {
  const t = T(/* @__PURE__ */ new Map()), a = T(), n = zc({
    collectionRef: a,
    itemMap: t,
    attrName: e
  }), { getItems: o } = No(n), s = C(() => Array.from(n.itemMap.value.values())), r = C(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: s, itemMapSize: r };
}
const Lo = b({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const a = Ro(), { primitiveElement: n, currentElement: o } = St();
    return J(o, () => {
      a.collectionRef.value = o.value;
    }), () => Ke(Oo, { ref: n }, t);
  }
}), hn = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: a }) {
    const n = Ro(), { primitiveElement: o, currentElement: s } = St();
    return ge((r) => {
      if (s.value) {
        const i = Wr(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: e.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => Ke(Oo, { ...a, [n.attrName]: "", ref: o }, t);
  }
});
function No(e) {
  const t = e ?? Ro();
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
const [na, Wc] = ne("ComboboxRoot"), Kc = /* @__PURE__ */ b({
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
    const a = e, n = t, { multiple: o, disabled: s, dir: r } = ue(a), i = Ye(r), d = de(a, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: a.searchTerm === void 0
    }), c = de(a, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: a.defaultValue ?? o.value ? [] : void 0,
      passive: a.modelValue === void 0,
      deep: !0
    }), u = de(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), p = de(a, "selectedValue", n, {
      defaultValue: void 0,
      passive: a.selectedValue === void 0
    });
    async function h(W) {
      var q, se;
      u.value = W, await oe(), W ? (c.value && (Array.isArray(c.value) && o.value ? p.value = (q = k().find((pe) => {
        var me, ke;
        return ((ke = (me = pe.ref) == null ? void 0 : me.dataset) == null ? void 0 : ke.state) === "checked";
      })) == null ? void 0 : q.value : p.value = c.value), await oe(), (se = g.value) == null || se.focus(), G()) : (w.value = !1, a.resetSearchTermOnBlur && N());
    }
    function m(W) {
      if (Array.isArray(c.value) && o.value) {
        const q = c.value.findIndex((pe) => Ct(pe, W)), se = [...c.value];
        q === -1 ? se.push(W) : se.splice(q, 1), c.value = se;
      } else
        c.value = W, h(!1);
    }
    const w = T(!1), g = T(), x = T(), { forwardRef: $, currentElement: P } = F(), { getItems: k, reactiveItems: O, itemMapSize: E } = Fo("data-radix-vue-combobox-item"), V = T([]);
    J(() => E.value, () => {
      V.value = k().map((W) => W.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const A = C(() => {
      if (w.value) {
        if (a.filterFunction)
          return a.filterFunction(V.value, d.value);
        const W = V.value.filter((q) => typeof q == "string");
        if (W.length)
          return W.filter((q) => {
            var se;
            return q.toLowerCase().includes((se = d.value) == null ? void 0 : se.toLowerCase());
          });
      }
      return V.value;
    });
    function N() {
      !o.value && c.value && !Array.isArray(c.value) ? a.displayValue ? d.value = a.displayValue(c.value) : typeof c.value != "object" ? d.value = c.value.toString() : d.value = "" : d.value = "";
    }
    const L = C(() => A.value.findIndex((W) => Ct(W, p.value))), B = C(() => {
      var W;
      return (W = O.value.find((q) => Ct(q.value, p.value))) == null ? void 0 : W.ref;
    }), M = C(() => JSON.stringify(c.value));
    J(M, async () => {
      await oe(), await oe(), N();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), J(() => [A.value.length, d.value.length], async ([W, q], [se, pe]) => {
      await oe(), await oe(), W && (pe > q || L.value === -1) && (p.value = A.value[0]);
    });
    const I = Da(P);
    function G() {
      var W;
      B.value instanceof Element && ((W = B.value) == null || W.scrollIntoView({ block: "nearest" }));
    }
    function j() {
      B.value instanceof Element && B.value.focus && B.value.focus();
    }
    return Wc({
      searchTerm: d,
      modelValue: c,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: w,
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
        const q = L.value;
        q === 0 && W === "up" || q === A.value.length - 1 && W === "down" || (q === -1 && A.value.length || W === "home" ? p.value = A.value[0] : W === "end" ? p.value = A.value[A.value.length - 1] : p.value = A.value[W === "up" ? q - 1 : q + 1], await oe(), G(), j(), oe(() => {
          var se;
          return (se = g.value) == null ? void 0 : se.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async (W) => {
        var q;
        A.value.length && p.value && B.value instanceof Element && (W.preventDefault(), W.stopPropagation(), (q = B.value) == null || q.click());
      },
      selectedValue: p,
      onSelectedValueChange: (W) => p.value = W,
      parentElement: P,
      contentElement: x,
      onContentElementChange: (W) => x.value = W
    }), (W, q) => (v(), y(l(aa), null, {
      default: f(() => [
        D(l(R), S({
          ref: l($),
          style: {
            pointerEvents: l(u) ? "auto" : void 0
          },
          as: W.as,
          "as-child": W.asChild,
          dir: l(i)
        }, W.$attrs), {
          default: f(() => [
            _(W.$slots, "default", {
              open: l(u),
              modelValue: l(c)
            }),
            l(I) && a.name ? (v(), y(l(Lc), {
              key: 0,
              name: a.name,
              value: l(c)
            }, null, 8, ["name", "value"])) : X("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Uc = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, a = na(), { forwardRef: n, currentElement: o } = F();
    ie(() => {
      const u = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      u && (a.onInputElementChange(u), setTimeout(() => {
        t.autoFocus && (u == null || u.focus());
      }, 1));
    });
    const s = C(() => t.disabled || a.disabled.value || !1), r = T();
    Kr(() => {
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
        Fe(_e(i, ["prevent"]), ["down", "up"]),
        Fe(l(a).onInputEnter, ["enter"]),
        Fe(_e(d, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: f(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), [Ns, Hc] = ne("ComboboxGroup"), jc = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: a, currentElement: n } = F(), o = ye(void 0, "radix-vue-combobox-group"), s = na(), r = T(!1);
    function i() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!d.length;
    }
    return Qd(n, () => {
      oe(() => {
        i();
      });
    }, { childList: !0 }), J(() => s.searchTerm.value, () => {
      oe(() => {
        i();
      });
    }, { immediate: !0 }), Hc({
      id: o
    }), (d, c) => Xt((v(), y(l(R), S(t, {
      ref_key: "currentRef",
      ref: a,
      role: "group",
      "aria-labelledby": l(o)
    }), {
      default: f(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [so, r.value]
    ]);
  }
}), Gc = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    F();
    const a = Ns({ id: "" });
    return (n, o) => (v(), y(l(R), S(t, {
      id: l(a).id
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Ry, qc] = ne("ComboboxContent"), Yc = /* @__PURE__ */ b({
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
    const a = e, n = t, { position: o } = ue(a), s = na();
    Ba(a.bodyLock);
    const { forwardRef: r, currentElement: i } = F();
    Pa(s.parentElement);
    const d = C(() => a.position === "popper" ? a : {}), c = le(d.value);
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
    return qc({ position: o }), (h, m) => (v(), y(l(Lo), null, {
      default: f(() => [
        h.dismissable ? (v(), y(l(ea), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": h.disableOutsidePointerEvents,
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
            (v(), y(Te(l(o) === "popper" ? l(qt) : l(R)), S({ ...h.$attrs, ...l(c) }, {
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
                _(h.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (v(), y(Te(l(o) === "popper" ? l(qt) : l(R)), S({ key: 1 }, { ...h.$attrs, ...d.value }, {
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
            _(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Xc = /* @__PURE__ */ b({
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
    const a = Q(e, t), { forwardRef: n } = F(), o = na();
    return o.contentId || (o.contentId = ye(void 0, "radix-vue-combobox-content")), (s, r) => (v(), y(l(Oe), {
      present: s.forceMount || l(o).open.value
    }, {
      default: f(() => [
        D(Yc, S({ ...l(a), ...s.$attrs }, { ref: l(n) }), {
          default: f(() => [
            _(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Zc = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    F();
    const a = na(), n = C(() => a.filteredOptions.value.length === 0);
    return (o, s) => n.value ? (v(), y(l(R), U(S({ key: 0 }, t)), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Y("No options")
        ])
      ]),
      _: 3
    }, 16)) : X("", !0);
  }
});
function Jc(e) {
  const t = pn({
    nonce: T()
  });
  return C(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.nonce) == null ? void 0 : a.value);
  });
}
const [Fy, Qc] = ne("ComboboxItem"), ep = "combobox.select", tp = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { disabled: o } = ue(a), s = na();
    Ns({ id: "", options: T([]) });
    const { forwardRef: r } = F(), i = C(
      () => {
        var g, x;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (g = s.modelValue.value) == null ? void 0 : g.some(($) => Ct($, a.value)) : Ct((x = s.modelValue) == null ? void 0 : x.value, a.value);
      }
    ), d = C(() => Ct(s.selectedValue.value, a.value)), c = ye(void 0, "radix-vue-combobox-item"), u = ye(void 0, "radix-vue-combobox-option"), p = C(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((g) => Ct(g, a.value)) : !0);
    async function h(g) {
      n("select", g), !(g != null && g.defaultPrevented) && !o.value && g && s.onValueChange(a.value);
    }
    function m(g) {
      if (!g)
        return;
      const x = { originalEvent: g, value: a.value };
      Co(ep, h, x);
    }
    async function w(g) {
      await oe(), !g.defaultPrevented && s.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Qc({
      isSelected: i
    }), (g, x) => (v(), y(l(hn), { value: g.value }, {
      default: f(() => [
        Xt(D(l(R), {
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
          onPointermove: w
        }, {
          default: f(() => [
            _(g.$slots, "default", {}, () => [
              Y(Z(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [so, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), ap = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (v(), y(l(R), S(t, { "aria-hidden": "true" }), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zs = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(mn), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function np() {
  const e = T(!1);
  return ie(() => {
    Gt("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Gt(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const op = ys(np), [Et, Ws] = ne(["MenuRoot", "MenuSub"], "MenuContext"), [Ta, lp] = ne("MenuRoot"), sp = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o, dir: s } = ue(a), r = Ye(s), i = de(a, "open", n), d = T(), c = op();
    return Ws({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      content: d,
      onContentChange: (u) => {
        d.value = u;
      }
    }), lp({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: c,
      dir: r,
      modal: o
    }), (u, p) => (v(), y(l(aa), null, {
      default: f(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), rp = "rovingFocusGroup.onEntryFocus", ip = { bubbles: !1, cancelable: !0 }, dp = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function up(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function cp(e, t, a) {
  const n = up(e.key, a);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return dp[n];
}
function Ks(e, t = !1, a) {
  const n = (a == null ? void 0 : a.activeElement) ?? document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n))
      return;
}
function pp(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
const [fp, vp] = ne("RovingFocusGroup"), Us = /* @__PURE__ */ b({
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
    const n = e, o = a, { loop: s, orientation: r, dir: i } = ue(n), d = Ye(i), c = de(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), u = T(!1), p = T(!1), h = T(0), { getItems: m } = Fo();
    function w(x) {
      const $ = !p.value;
      if (x.currentTarget && x.target === x.currentTarget && $ && !u.value) {
        const P = new CustomEvent(rp, ip);
        if (x.currentTarget.dispatchEvent(P), o("entryFocus", P), !P.defaultPrevented) {
          const k = m().map((A) => A.ref).filter((A) => A.dataset.disabled !== ""), O = k.find((A) => A.getAttribute("data-active") === "true"), E = k.find(
            (A) => A.id === c.value
          ), V = [O, E, ...k].filter(
            Boolean
          );
          Ks(V, n.preventScrollOnEntryFocus);
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
    }), vp({
      loop: s,
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
    }), (x, $) => (v(), y(l(Lo), null, {
      default: f(() => [
        D(l(R), {
          tabindex: u.value || h.value === 0 ? -1 : 0,
          "data-orientation": l(r),
          as: x.as,
          "as-child": x.asChild,
          dir: l(d),
          style: { outline: "none" },
          onMousedown: $[0] || ($[0] = (P) => p.value = !0),
          onMouseup: g,
          onFocus: w,
          onBlur: $[1] || ($[1] = (P) => u.value = !1)
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
}), mp = /* @__PURE__ */ b({
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
    const t = e, a = fp(), n = C(() => t.tabStopId || ye()), o = C(
      () => a.currentTabStopId.value === n.value
    ), { getItems: s } = No(), { primitiveElement: r, currentElement: i } = St(), d = C(() => {
      var u;
      return (u = i.value) == null ? void 0 : u.getRootNode();
    });
    ie(() => {
      t.focusable && a.onFocusableItemAdd();
    }), bt(() => {
      t.focusable && a.onFocusableItemRemove();
    });
    function c(u) {
      if (u.key === "Tab" && u.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (u.target !== u.currentTarget)
        return;
      const p = cp(
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
          h = a.loop.value ? pp(h, m + 1) : h.slice(m + 1);
        }
        oe(() => Ks(h, !1, d.value));
      }
    }
    return (u, p) => (v(), y(l(hn), null, {
      default: f(() => [
        D(l(R), {
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
            _(u.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [zo, hp] = ne("MenuContent"), Wo = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ zl({
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
    ...Ls
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Et(), s = Ta(), { trapFocus: r, disableOutsidePointerEvents: i, loop: d } = ue(a);
    Do(), Ba(i.value);
    const c = T(""), u = T(0), p = T(0), h = T(null), m = T("right"), w = T(0), g = T(null), { createCollection: x } = Qt(), { forwardRef: $, currentElement: P } = F(), k = x(P);
    J(P, (B) => {
      o.onContentChange(B);
    });
    const { handleTypeaheadSearch: O } = Po(k);
    bt(() => {
      window.clearTimeout(u.value);
    });
    function E(B) {
      var M, I;
      return m.value === ((M = h.value) == null ? void 0 : M.side) && nc(B, (I = h.value) == null ? void 0 : I.area);
    }
    async function V(B) {
      var M;
      n("openAutoFocus", B), !B.defaultPrevented && (B.preventDefault(), (M = P.value) == null || M.focus({
        preventScroll: !0
      }));
    }
    function A(B) {
      if (B.defaultPrevented)
        return;
      const M = B.target.closest("[data-radix-menu-content]") === B.currentTarget, I = B.ctrlKey || B.altKey || B.metaKey, G = B.key.length === 1, j = xs(
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
      if (j)
        return j == null ? void 0 : j.focus();
      if (B.code === "Space" || (M && (B.key === "Tab" && B.preventDefault(), !I && G && O(B.key)), B.target !== P.value) || !Qu.includes(B.key))
        return;
      B.preventDefault();
      const W = k.value;
      Ts.includes(B.key) && W.reverse(), Zn(W);
    }
    function N(B) {
      var M, I;
      (I = (M = B == null ? void 0 : B.currentTarget) == null ? void 0 : M.contains) != null && I.call(M, B.target) || (window.clearTimeout(u.value), c.value = "");
    }
    function L(B) {
      var M;
      if (!wa(B))
        return;
      const I = B.target, G = w.value !== B.clientX;
      if ((M = B == null ? void 0 : B.currentTarget) != null && M.contains(I) && G) {
        const j = B.clientX > w.value ? "right" : "left";
        m.value = j, w.value = B.clientX;
      }
    }
    return hp({
      onItemEnter: (B) => !!E(B),
      onItemLeave: (B) => {
        var M;
        E(B) || ((M = P.value) == null || M.focus(), g.value = null);
      },
      onTriggerLeave: (B) => !!E(B),
      searchRef: c,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (B) => {
        h.value = B;
      }
    }), (B, M) => (v(), y(l(vn), {
      "as-child": "",
      trapped: l(r),
      onMountAutoFocus: V,
      onUnmountAutoFocus: M[7] || (M[7] = (I) => n("closeAutoFocus", I))
    }, {
      default: f(() => [
        D(l(ea), {
          "as-child": "",
          "disable-outside-pointer-events": l(i),
          onEscapeKeyDown: M[2] || (M[2] = (I) => n("escapeKeyDown", I)),
          onPointerDownOutside: M[3] || (M[3] = (I) => n("pointerDownOutside", I)),
          onFocusOutside: M[4] || (M[4] = (I) => n("focusOutside", I)),
          onInteractOutside: M[5] || (M[5] = (I) => n("interactOutside", I)),
          onDismiss: M[6] || (M[6] = (I) => n("dismiss"))
        }, {
          default: f(() => [
            D(l(Us), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": M[0] || (M[0] = (I) => g.value = I),
              "as-child": "",
              orientation: "vertical",
              dir: l(s).dir.value,
              loop: l(d),
              onEntryFocus: M[1] || (M[1] = (I) => {
                n("entryFocus", I), l(s).isUsingKeyboardRef.value || I.preventDefault();
              })
            }, {
              default: f(() => [
                D(l(qt), {
                  ref: l($),
                  role: "menu",
                  as: B.as,
                  "as-child": B.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(Ao)(l(o).open.value),
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
                  onBlur: N,
                  onPointermove: L
                }, {
                  default: f(() => [
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
}), Hs = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = zo(), { forwardRef: n } = F(), o = T(!1);
    async function s(i) {
      if (!i.defaultPrevented && wa(i)) {
        if (t.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function r(i) {
      await oe(), !i.defaultPrevented && wa(i) && a.onItemLeave(i);
    }
    return (i, d) => (v(), y(l(hn), null, {
      default: f(() => [
        D(l(R), S({
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
            await oe(), !(c.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: d[1] || (d[1] = async (c) => {
            await oe(), !c.defaultPrevented && (o.value = !1);
          })
        }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), Ko = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: s } = F(), r = Ta(), i = zo(), d = T(!1);
    async function c() {
      const u = s.value;
      if (!a.disabled && u) {
        const p = new CustomEvent(Zu, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await oe(), p.defaultPrevented ? d.value = !1 : r.onClose();
      }
    }
    return (u, p) => (v(), y(Hs, S(a, {
      ref: l(o),
      onClick: c,
      onPointerdown: p[0] || (p[0] = () => {
        d.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (h) => {
        var m;
        await oe(), !h.defaultPrevented && (d.value || (m = h.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (h) => {
        const m = l(i).searchRef.value !== "";
        u.disabled || m && h.key === " " || l(Xn).includes(h.key) && (h.currentTarget.click(), h.preventDefault());
      })
    }), {
      default: f(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [gp, js] = ne(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), yp = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = gp({
      checked: T(!1)
    });
    return (a, n) => (v(), y(l(Oe), {
      present: a.forceMount || l(tn)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: f(() => [
        D(l(R), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": l(Mo)(l(t).checked.value)
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
}), bp = /* @__PURE__ */ b({
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
    const a = e, n = t, o = de(a, "checked", n);
    return js({ checked: o }), (s, r) => (v(), y(Ko, S({ role: "menuitemcheckbox" }, a, {
      "aria-checked": l(tn)(l(o)) ? "mixed" : l(o),
      "data-state": l(Mo)(l(o)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), l(tn)(l(o)) ? o.value = !0 : o.value = !l(o);
      })
    }), {
      default: f(() => [
        _(s.$slots, "default", { checked: l(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), _p = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Q(a, n), s = Et(), { forwardRef: r, currentElement: i } = F();
    return Pa(i), (d, c) => (v(), y(Wo, S(l(o), {
      ref: l(r),
      "trap-focus": l(s).open.value,
      "disable-outside-pointer-events": l(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (u) => l(s).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = _e((u) => n("focusOutside", u), ["prevent"]))
    }), {
      default: f(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), wp = /* @__PURE__ */ b({
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
    const a = Q(e, t), n = Et();
    return (o, s) => (v(), y(Wo, S(l(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (r) => l(n).onOpenChange(!1))
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xp = /* @__PURE__ */ b({
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
    const a = Q(e, t), n = Et(), o = Ta();
    return (s, r) => (v(), y(l(Oe), {
      present: s.forceMount || l(n).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), y(_p, U(S({ key: 0 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            _(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), y(wp, U(S({ key: 1 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            _(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Gs = /* @__PURE__ */ b({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(R), S({ role: "group" }, t), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cp = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(R), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $p = /* @__PURE__ */ b({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Oa), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [kp, Bp] = ne("MenuRadioGroup"), Dp = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = de(a, "modelValue", t);
    return Bp({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, s) => (v(), y(Gs, U(H(a)), {
      default: f(() => [
        _(o.$slots, "default", { modelValue: l(n) })
      ]),
      _: 3
    }, 16));
  }
}), Pp = /* @__PURE__ */ b({
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
    const a = e, n = t, { value: o } = ue(a), s = kp(), r = C(
      () => s.modelValue.value === (o == null ? void 0 : o.value)
    );
    return js({ checked: r }), (i, d) => (v(), y(Ko, S({ role: "menuitemradio" }, a, {
      "aria-checked": r.value,
      "data-state": l(Mo)(r.value),
      onSelect: d[0] || (d[0] = async (c) => {
        n("select", c), l(s).onValueChange(l(o));
      })
    }), {
      default: f(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Op = /* @__PURE__ */ b({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(R), S(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [qs, Sp] = ne("MenuSub"), Ep = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = de(a, "open", t, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = Et(), s = T(), r = T();
    return ge((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), Ws({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: r,
      onContentChange: (i) => {
        r.value = i;
      }
    }), Sp({
      triggerId: "",
      contentId: "",
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, d) => (v(), y(l(aa), null, {
      default: f(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Tp = /* @__PURE__ */ b({
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
    const a = Q(e, t), n = Et(), o = Ta(), s = qs(), { forwardRef: r, currentElement: i } = F();
    return s.contentId || (s.contentId = ye(void 0, "radix-vue-menu-sub-content")), (d, c) => (v(), y(l(Oe), {
      present: d.forceMount || l(n).open.value
    }, {
      default: f(() => [
        D(Wo, S(l(a), {
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
            const m = (p = u.currentTarget) == null ? void 0 : p.contains(u.target), w = l(tc)[l(o).dir.value].includes(u.key);
            m && w && (l(n).onOpenChange(!1), (h = l(s).trigger.value) == null || h.focus(), u.preventDefault());
          })
        }), {
          default: f(() => [
            _(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ap = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = Et(), n = Ta(), o = qs(), s = zo(), r = T(null);
    o.triggerId || (o.triggerId = ye(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    bt(() => {
      i();
    });
    function d(p) {
      !wa(p) || s.onItemEnter(p) || !t.disabled && !a.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function c(p) {
      var h, m;
      if (!wa(p))
        return;
      i();
      const w = (h = a.content.value) == null ? void 0 : h.getBoundingClientRect();
      if (w != null && w.width) {
        const g = (m = a.content.value) == null ? void 0 : m.dataset.side, x = g === "right", $ = x ? -5 : 5, P = w[x ? "left" : "right"], k = w[x ? "right" : "left"];
        s.onPointerGraceIntentChange({
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
      t.disabled || m && p.key === " " || ec[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await oe(), (h = a.content.value) == null || h.focus(), p.preventDefault());
    }
    return (p, h) => (v(), y(zs, { "as-child": "" }, {
      default: f(() => [
        D(Hs, S(t, {
          id: l(o).triggerId,
          ref: (m) => {
            var w;
            (w = l(o)) == null || w.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(a).open.value,
          "aria-controls": l(o).contentId,
          "data-state": l(Ao)(l(a).open.value),
          onClick: h[0] || (h[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), l(a).open.value || l(a).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: c,
          onKeydown: u
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
}), [Ys, Mp] = ne("DropdownMenuRoot"), Vp = /* @__PURE__ */ b({
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
    F();
    const o = de(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), s = T(), { modal: r, dir: i } = ue(a), d = Ye(i);
    return Mp({
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
    }), (c, u) => (v(), y(l(sp), {
      open: l(o),
      "onUpdate:open": u[0] || (u[0] = (p) => Ca(o) ? o.value = p : null),
      dir: l(d),
      modal: l(r)
    }, {
      default: f(() => [
        _(c.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Ip = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ys(), { forwardRef: n, currentElement: o } = F();
    return ie(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = ye(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (v(), y(l(zs), { "as-child": "" }, {
      default: f(() => [
        D(l(R), {
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
            !s.disabled && i.button === 0 && i.ctrlKey === !1 && ((d = l(a)) == null || d.onOpenToggle(), await oe(), l(a).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = Fe(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && l(a).onOpenToggle(), i.key === "ArrowDown" && l(a).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: f(() => [
            _(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Rp = /* @__PURE__ */ b({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l($p), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fp = /* @__PURE__ */ b({
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
    const a = Q(e, t);
    F();
    const n = Ys(), o = T(!1);
    function s(r) {
      r.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, r.preventDefault());
    }
    return n.contentId || (n.contentId = ye(void 0, "radix-vue-dropdown-menu-content")), (r, i) => {
      var d;
      return v(), y(l(xp), S(l(a), {
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
          _(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Xs = /* @__PURE__ */ b({
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
    return F(), (o, s) => (v(), y(l(Ko), U(H({ ...a, ...l(n) })), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lp = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (v(), y(l(Gs), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Np = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (v(), y(l(Op), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zp = /* @__PURE__ */ b({
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
    return F(), (o, s) => (v(), y(l(bp), U(H({ ...a, ...l(n) })), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zs = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (v(), y(l(yp), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wp = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (v(), y(l(Cp), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kp = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = Ot(t);
    return F(), (o, s) => (v(), y(l(Dp), U(H({ ...a, ...l(n) })), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Up = /* @__PURE__ */ b({
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
    const a = Q(e, t);
    return F(), (n, o) => (v(), y(l(Pp), U(H(l(a))), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hp = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = de(a, "open", t, {
      passive: a.open === void 0,
      defaultValue: a.defaultOpen ?? !1
    });
    return F(), (o, s) => (v(), y(l(Ep), {
      open: l(n),
      "onUpdate:open": s[0] || (s[0] = (r) => Ca(n) ? n.value = r : null)
    }, {
      default: f(() => [
        _(o.$slots, "default", { open: l(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), jp = /* @__PURE__ */ b({
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
    const a = Q(e, t);
    return F(), (n, o) => (v(), y(l(Tp), S(l(a), { style: {
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
}), Gp = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (v(), y(l(Ap), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qp = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (v(), y(l(R), S(t, {
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
}), [oa, Yp] = ne("PaginationRoot"), Xp = /* @__PURE__ */ b({
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
    F();
    const i = de(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), d = C(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return Yp({
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
        _(c.$slots, "default", {
          page: l(i),
          pageCount: d.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Zp = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (v(), y(l(R), S(t, { "data-type": "ellipsis" }), {
      default: f(() => [
        _(a.$slots, "default", {}, () => [
          Y("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), Jp = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = oa();
    return F(), (n, o) => (v(), y(l(R), S(t, {
      "aria-label": "First Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: l(a).page.value === 1 || l(a).disabled.value,
      onClick: o[0] || (o[0] = (s) => l(a).onPageChange(1))
    }), {
      default: f(() => [
        _(n.$slots, "default", {}, () => [
          Y("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Qp = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = oa();
    return F(), (n, o) => (v(), y(l(R), S(t, {
      "aria-label": "Last Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: l(a).page.value === l(a).pageCount.value || l(a).disabled.value,
      onClick: o[0] || (o[0] = (s) => l(a).onPageChange(l(a).pageCount.value))
    }), {
      default: f(() => [
        _(n.$slots, "default", {}, () => [
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
function ef(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const za = "ellipsis";
function tf(e, t, a, n) {
  const o = t, s = Math.max(e - a, 1), r = Math.min(e + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, t) - 2, d = s > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(s - 1) > 2, c = r < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - r) > 2;
    if (!d && c)
      return [...ct(1, i), za, o];
    if (d && !c) {
      const u = ct(o - i + 1, o);
      return [1, za, ...u];
    }
    if (d && c) {
      const u = ct(s, r);
      return [1, za, ...u, za, o];
    }
    return ct(1, o);
  } else {
    const i = a * 2 + 1;
    return t < i ? ct(1, o) : e <= a + 1 ? ct(1, i) : t - e <= a ? ct(t - i + 1, o) : ct(s, r);
  }
}
const af = /* @__PURE__ */ b({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    F();
    const a = oa(), n = C(() => ef(
      tf(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, s) => (v(), y(l(R), U(H(t)), {
      default: f(() => [
        _(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), Ly = /* @__PURE__ */ b({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const a = oa(), n = C(() => a.page.value === t.value);
    return (o, s) => (v(), y(l(R), S(t, {
      "data-type": "page",
      "aria-label": `Page ${o.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: l(a).disabled.value,
      type: o.as === "button" ? "button" : void 0,
      onClick: s[0] || (s[0] = (r) => l(a).onPageChange(o.value))
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Y(Z(o.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), nf = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const a = oa();
    return (n, o) => (v(), y(l(R), S(t, {
      "aria-label": "Next Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: l(a).page.value === l(a).pageCount.value || l(a).disabled.value,
      onClick: o[0] || (o[0] = (s) => l(a).onPageChange(l(a).page.value + 1))
    }), {
      default: f(() => [
        _(n.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), of = /* @__PURE__ */ b({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const a = oa();
    return (n, o) => {
      var s;
      return v(), y(l(R), S(t, {
        "aria-label": "Previous Page",
        type: n.as === "button" ? "button" : void 0,
        disabled: l(a).page.value === 1 || ((s = l(a).disabled) == null ? void 0 : s.value),
        onClick: o[0] || (o[0] = (r) => l(a).onPageChange(l(a).page.value - 1))
      }), {
        default: f(() => [
          _(n.$slots, "default", {}, () => [
            Y("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
}), [Aa, lf] = ne("PopoverRoot"), sf = /* @__PURE__ */ b({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o } = ue(a), s = de(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = T(), i = T(!1);
    return lf({
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
    }), (d, c) => (v(), y(l(aa), null, {
      default: f(() => [
        _(d.$slots, "default", { open: l(s) })
      ]),
      _: 3
    }));
  }
}), rf = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Aa(), { forwardRef: n, currentElement: o } = F();
    return ie(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), y(Te(l(a).hasCustomAnchor.value ? l(R) : l(mn)), { "as-child": "" }, {
      default: f(() => [
        D(l(R), {
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
            _(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), df = /* @__PURE__ */ b({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Oa), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Js = /* @__PURE__ */ b({
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
    const a = e, n = t, o = le(a), { forwardRef: s } = F(), r = Aa();
    return Do(), (i, d) => (v(), y(l(vn), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: d[6] || (d[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: f(() => [
        D(l(ea), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (c) => n("pointerDownOutside", c)),
          onInteractOutside: d[1] || (d[1] = (c) => n("interactOutside", c)),
          onEscapeKeyDown: d[2] || (d[2] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: d[3] || (d[3] = (c) => n("focusOutside", c)),
          onDismiss: d[4] || (d[4] = (c) => l(r).onOpenChange(!1))
        }, {
          default: f(() => [
            D(l(qt), S(l(o), {
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
}), uf = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Aa(), s = T(!1);
    Ba(!0);
    const r = Q(a, n), { forwardRef: i, currentElement: d } = F();
    return Pa(d), (c, u) => (v(), y(Js, S(l(r), {
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
        const h = p.detail.originalEvent, m = h.button === 0 && h.ctrlKey === !0, w = h.button === 2 || m;
        s.value = w;
      }),
      onFocusOutside: u[2] || (u[2] = _e(() => {
      }, ["prevent"]))
    }), {
      default: f(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), cf = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Aa(), s = T(!1), r = T(!1), i = Q(a, n);
    return (d, c) => (v(), y(Js, S(l(i), {
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
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pf = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Aa(), s = Q(a, n), { forwardRef: r } = F();
    return o.contentId || (o.contentId = ye(void 0, "radix-vue-popover-content")), (i, d) => (v(), y(l(Oe), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), y(uf, S({ key: 0 }, l(s), { ref: l(r) }), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), y(cf, S({ key: 1 }, l(s), { ref: l(r) }), {
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
function ff(e) {
  const t = C(() => e.start.value ? !!e.isDateDisabled(e.start.value) : !1), a = C(() => e.end.value ? !!e.isDateDisabled(e.end.value) : !1), n = C(
    () => t.value || a.value ? !1 : !!(e.start.value && e.end.value && mt(e.end.value, e.start.value))
  ), o = (d) => e.start.value ? Ce(e.start.value, d) : !1, s = (d) => e.end.value ? Ce(e.end.value, d) : !1, r = (d) => e.start.value && Ce(e.start.value, d) || e.end.value && Ce(e.end.value, d) ? !0 : e.end.value && e.start.value ? Ki(d, e.start.value, e.end.value) : !1, i = C(() => {
    if (e.start.value && e.end.value || !e.start.value || !e.focusedValue.value)
      return null;
    const d = mt(e.start.value, e.focusedValue.value), c = d ? e.start.value : e.focusedValue.value, u = d ? e.focusedValue.value : e.start.value;
    return Ce(c.add({ days: 1 }), u) ? {
      start: c,
      end: u
    } : ji(c, u, e.isDateUnavailable, e.isDateDisabled) ? {
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
    isHighlightedStart: (d) => !i.value || !i.value.start ? !1 : Ce(i.value.start, d),
    isHighlightedEnd: (d) => !i.value || !i.value.end ? !1 : Ce(i.value.end, d)
  };
}
const vf = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, mf = {
  role: "heading",
  "aria-level": "2"
}, [la, hf] = ne("RangeCalendarRoot"), gf = /* @__PURE__ */ b({
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
      isDateDisabled: w,
      calendarLabel: g,
      maxValue: x,
      minValue: $,
      locale: P,
      dir: k,
      nextPage: O,
      prevPage: E
    } = ue(a), { primitiveElement: V, currentElement: A } = St(), N = Ye(k), L = T(), B = T(), M = de(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), I = hs({
      defaultPlaceholder: a.placeholder,
      defaultValue: M.value.start
    }), G = T(M.value.start), j = T(M.value.end), W = de(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? I.copy(),
      passive: a.placeholder === void 0
    });
    function q(fe) {
      W.value = fe.copy();
    }
    const {
      fullCalendarLabel: se,
      headingValue: pe,
      isDateDisabled: me,
      isDateUnavailable: ke,
      isNextButtonDisabled: be,
      isPrevButtonDisabled: ia,
      grid: wt,
      weekdays: da,
      isOutsideVisibleView: dt,
      nextPage: ua,
      prevPage: Se,
      formatter: Be
    } = Is({
      locale: P,
      placeholder: W,
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
      isInvalid: ze,
      isSelected: re,
      highlightedRange: $e,
      isSelectionStart: Je,
      isSelectionEnd: ca,
      isHighlightedStart: Lr,
      isHighlightedEnd: Nr
    } = ff({
      start: G,
      end: j,
      isDateDisabled: me,
      isDateUnavailable: ke,
      focusedValue: B
    });
    return J(M, (fe) => {
      fe.start && (!G.value || !We(G.value, fe.start)) && (G.value = fe.start.copy()), fe.end && (!j.value || !We(j.value, fe.end)) && (j.value = fe.end.copy());
    }), J(G, (fe) => {
      fe && !We(fe, W.value) && q(fe), n("update:startValue", fe);
    }), J([G, j], ([fe, ut]) => {
      const Me = M.value;
      if (!(Me && Me.start && Me.end && fe && ut && We(Me.start, fe) && We(Me.end, ut)))
        if (fe && ut) {
          if (Me.start && Me.end && We(Me.start, fe) && We(Me.end, ut))
            return;
          mt(ut, fe) ? M.value = {
            start: ut.copy(),
            end: fe.copy()
          } : M.value = {
            start: fe.copy(),
            end: ut.copy()
          };
        } else Me.start && Me.end && (M.value = {
          start: void 0,
          end: void 0
        });
    }), hf({
      isDateUnavailable: ke,
      startValue: G,
      endValue: j,
      formatter: Be,
      modelValue: M,
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
      fullCalendarLabel: se,
      headingValue: pe,
      isInvalid: ze,
      isDateDisabled: me,
      highlightedRange: $e,
      focusedValue: B,
      lastPressedDateValue: L,
      isSelected: re,
      isSelectionEnd: ca,
      isSelectionStart: Je,
      isNextButtonDisabled: be,
      isPrevButtonDisabled: ia,
      isOutsideVisibleView: dt,
      nextPage: ua,
      prevPage: Se,
      parentElement: A,
      onPlaceholderChange: q,
      locale: P,
      dir: N,
      isHighlightedStart: Lr,
      isHighlightedEnd: Nr
    }), ie(() => {
      r.value && gs(A.value);
    }), (fe, ut) => (v(), y(l(R), {
      ref_key: "primitiveElement",
      ref: V,
      as: fe.as,
      "as-child": fe.asChild,
      role: "application",
      "aria-label": l(se),
      "data-readonly": l(s) ? "" : void 0,
      "data-disabled": l(o) ? "" : void 0,
      "data-invalid": l(ze) ? "" : void 0,
      dir: l(N)
    }, {
      default: f(() => [
        ce("div", vf, [
          ce("div", mf, Z(l(se)), 1)
        ]),
        _(fe.$slots, "default", {
          date: l(W),
          grid: l(wt),
          weekDays: l(da),
          weekStartsOn: l(d),
          locale: l(P),
          fixedWeeks: l(u)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), yf = /* @__PURE__ */ b({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(R), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bf = /* @__PURE__ */ b({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = la();
    return (n, o) => (v(), y(l(R), S(t, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        _(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          Y(Z(l(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), _f = /* @__PURE__ */ b({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = la(), n = C(() => a.disabled.value ? !0 : void 0), o = C(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), y(l(R), S(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: f(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), wf = /* @__PURE__ */ b({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = la();
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
          _(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), xf = /* @__PURE__ */ b({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(R), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cf = /* @__PURE__ */ b({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = C(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = la();
    return (o, s) => (v(), y(l(R), S(t, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).nextPage(t.step, t.nextPage))
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), $f = /* @__PURE__ */ b({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = C(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = la();
    return (o, s) => (v(), y(l(R), S(t, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).prevPage(t.step, t.prevPage))
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          Y("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), kf = /* @__PURE__ */ b({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(R), S(t, { "aria-hidden": "true" }), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bf = /* @__PURE__ */ b({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(R), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Df = /* @__PURE__ */ b({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(R), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pf = /* @__PURE__ */ b({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = la(), n = Bs(), { primitiveElement: o, currentElement: s } = St(), r = C(() => a.formatter.custom(Re(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = C(() => a.isDateDisabled(t.day)), d = C(() => {
      var L;
      return (L = a.isDateUnavailable) == null ? void 0 : L.call(a, t.day);
    }), c = C(() => a.isSelected(t.day)), u = C(() => a.isSelectionStart(t.day)), p = C(() => a.isSelectionEnd(t.day)), h = C(() => a.isHighlightedStart(t.day)), m = C(() => a.isHighlightedEnd(t.day)), w = C(() => a.highlightedRange.value ? Wi(t.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), g = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", x = C(() => Gl(t.day, Bt())), $ = C(() => !jl(t.day, t.month)), P = C(
      () => a.isOutsideVisibleView(t.day)
    ), k = C(() => t.day.day.toLocaleString(a.locale.value)), O = C(() => !a.disabled.value && Ce(t.day, a.placeholder.value));
    function E(L, B) {
      var M;
      if (!a.readonly.value && !(a.isDateDisabled(B) || (M = a.isDateUnavailable) != null && M.call(a, B))) {
        if (a.lastPressedDateValue.value = B.copy(), a.startValue.value && a.highlightedRange.value === null) {
          if (Ce(B, a.startValue.value) && !a.preventDeselect.value && !a.endValue.value) {
            a.startValue.value = void 0, a.onPlaceholderChange(B);
            return;
          } else if (!a.endValue.value) {
            L.preventDefault(), a.lastPressedDateValue.value && Ce(a.lastPressedDateValue.value, B) && (a.startValue.value = B.copy());
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
    function V(L) {
      E(L, t.day);
    }
    function A() {
      var L;
      a.isDateDisabled(t.day) || (L = a.isDateUnavailable) != null && L.call(a, t.day) || (a.focusedValue.value = t.day.copy());
    }
    function N(L) {
      L.preventDefault(), L.stopPropagation();
      const B = a.parentElement.value, M = B ? Array.from(B.querySelectorAll(g)) : [];
      let I = M.indexOf(s.value);
      const G = 7, j = a.dir.value === "rtl" ? -1 : 1;
      switch (L.code) {
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
          E(L, t.day);
          return;
        default:
          return;
      }
      if (I >= 0 && I < M.length) {
        M[I].focus();
        return;
      }
      if (I < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), oe(() => {
          const W = B ? Array.from(B.querySelectorAll(g)) : [];
          W[W.length - Math.abs(I)].focus();
        });
        return;
      }
      if (I >= M.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), oe(() => {
          (B ? Array.from(B.querySelectorAll(g)) : [])[I - M.length].focus();
        });
      }
    }
    return (L, B) => (v(), y(l(R), S({
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
      "data-value": L.day.toString(),
      "data-disabled": i.value || $.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": x.value ? "" : void 0,
      "data-outside-month": $.value ? "" : void 0,
      "data-focused": O.value ? "" : void 0,
      tabindex: O.value ? 0 : $.value || i.value ? void 0 : -1,
      onClick: V,
      onFocusin: A,
      onMouseenter: A,
      onKeydown: Fe(N, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: f(() => [
        _(L.$slots, "default", { dayValue: k.value }, () => [
          Y(Z(k.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
}), Of = ["default-value"], Sf = /* @__PURE__ */ b({
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
    const t = e, { value: a } = ue(t), n = T();
    return (o, s) => (v(), y(l(Ea), { "as-child": "" }, {
      default: f(() => [
        Xt(ce("select", S({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => Ca(a) ? a.value = r : null),
          "default-value": l(a)
        }), [
          _(o.$slots, "default")
        ], 16, Of), [
          [Gr, l(a)]
        ])
      ]),
      _: 3
    }));
  }
}), Ef = {
  key: 0,
  value: ""
}, [Tt, Qs] = ne("SelectRoot"), [Tf, Af] = ne("SelectRoot"), Mf = /* @__PURE__ */ b({
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
    const a = e, n = t, o = de(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), s = de(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = T(), i = T(), d = T({
      x: 0,
      y: 0
    }), c = T(!1), { required: u, disabled: p, dir: h } = ue(a), m = Ye(h);
    Qs({
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
      open: s,
      required: u,
      onOpenChange: ($) => {
        s.value = $;
      },
      dir: m,
      triggerPointerDownPosRef: d,
      disabled: p
    });
    const w = Da(r), g = T(/* @__PURE__ */ new Set()), x = C(() => Array.from(g.value).map(($) => {
      var P;
      return (P = $.props) == null ? void 0 : P.value;
    }).join(";"));
    return Af({
      onNativeOptionAdd: ($) => {
        g.value.add($);
      },
      onNativeOptionRemove: ($) => {
        g.value.delete($);
      }
    }), ($, P) => (v(), y(l(aa), null, {
      default: f(() => [
        _($.$slots, "default", {
          modelValue: l(o),
          open: l(s)
        }),
        l(w) ? (v(), y(Sf, S({ key: x.value }, $.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: l(u),
          name: $.name,
          autocomplete: $.autocomplete,
          disabled: l(p),
          value: l(o),
          onChange: P[0] || (P[0] = (k) => o.value = k.target.value)
        }), {
          default: f(() => [
            l(o) === void 0 ? (v(), K("option", Ef)) : X("", !0),
            (v(!0), K(te, null, he(Array.from(g.value), (k) => (v(), y(Te(k), S({ ref_for: !0 }, k.props, {
              key: k.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : X("", !0)
      ]),
      _: 3
    }));
  }
}), Vf = [" ", "Enter", "ArrowUp", "ArrowDown"], If = [" ", "Enter"], tt = 10;
function er(e) {
  return e === "" || qa(e);
}
const Rf = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Tt(), n = C(() => {
      var m;
      return ((m = a.disabled) == null ? void 0 : m.value) || t.disabled;
    }), { forwardRef: o, currentElement: s } = F();
    a.contentId || (a.contentId = ye(void 0, "radix-vue-select-content")), ie(() => {
      a.triggerElement = s;
    });
    const { injectCollection: r } = Qt(), i = r(), { search: d, handleTypeaheadSearch: c, resetTypeahead: u } = Po(i);
    function p() {
      n.value || (a.onOpenChange(!0), u());
    }
    function h(m) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, w) => (v(), y(l(mn), { "as-child": "" }, {
      default: f(() => {
        var g, x, $, P;
        return [
          D(l(R), {
            ref: l(o),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": l(a).contentId,
            "aria-expanded": l(a).open.value || !1,
            "aria-required": (g = l(a).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (x = l(a)) == null ? void 0 : x.dir.value,
            "data-state": ($ = l(a)) != null && $.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": l(er)((P = l(a).modelValue) == null ? void 0 : P.value) ? "" : void 0,
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
            onPointerup: w[2] || (w[2] = _e(
              (k) => {
                k.pointerType === "touch" && h(k);
              },
              ["prevent"]
            )),
            onKeydown: w[3] || (w[3] = (k) => {
              const O = l(d) !== "";
              !(k.ctrlKey || k.altKey || k.metaKey) && k.key.length === 1 && O && k.key === " " || (l(c)(k.key), l(Vf).includes(k.key) && (p(), k.preventDefault()));
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
}), Ff = /* @__PURE__ */ b({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Oa), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Uo, Lf] = ne("SelectItemAlignedPosition"), Nf = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, { injectCollection: o } = Qt(), s = Tt(), r = At(), i = o(), d = T(!1), c = T(!0), u = T(), { forwardRef: p, currentElement: h } = F(), { viewport: m, selectedItem: w, selectedItemText: g, focusSelectedItem: x } = r;
    function $() {
      if (s.triggerElement.value && s.valueElement.value && u.value && h.value && m != null && m.value && w != null && w.value && g != null && g.value) {
        const O = s.triggerElement.value.getBoundingClientRect(), E = h.value.getBoundingClientRect(), V = s.valueElement.value.getBoundingClientRect(), A = g.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const Se = A.left - E.left, Be = V.left - Se, ze = O.left - Be, re = O.width + ze, $e = Math.max(re, E.width), Je = window.innerWidth - tt, ca = en(Be, tt, Je - $e);
          u.value.style.minWidth = `${re}px`, u.value.style.left = `${ca}px`;
        } else {
          const Se = E.right - A.right, Be = window.innerWidth - V.right - Se, ze = window.innerWidth - O.right - Be, re = O.width + ze, $e = Math.max(re, E.width), Je = window.innerWidth - tt, ca = en(
            Be,
            tt,
            Je - $e
          );
          u.value.style.minWidth = `${re}px`, u.value.style.right = `${ca}px`;
        }
        const N = i.value, L = window.innerHeight - tt * 2, B = m.value.scrollHeight, M = window.getComputedStyle(h.value), I = Number.parseInt(
          M.borderTopWidth,
          10
        ), G = Number.parseInt(M.paddingTop, 10), j = Number.parseInt(
          M.borderBottomWidth,
          10
        ), W = Number.parseInt(
          M.paddingBottom,
          10
        ), q = I + G + B + W + j, se = Math.min(
          w.value.offsetHeight * 5,
          q
        ), pe = window.getComputedStyle(m.value), me = Number.parseInt(pe.paddingTop, 10), ke = Number.parseInt(
          pe.paddingBottom,
          10
        ), be = O.top + O.height / 2 - tt, ia = L - be, wt = w.value.offsetHeight / 2, da = w.value.offsetTop + wt, dt = I + G + da, ua = q - dt;
        if (dt <= be) {
          const Se = w.value === N[N.length - 1];
          u.value.style.bottom = "0px";
          const Be = h.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, ze = Math.max(
            ia,
            wt + (Se ? ke : 0) + Be + j
          ), re = dt + ze;
          u.value.style.height = `${re}px`;
        } else {
          const Se = w.value === N[0];
          u.value.style.top = "0px";
          const Be = Math.max(
            be,
            I + m.value.offsetTop + (Se ? me : 0) + wt
          ) + ua;
          u.value.style.height = `${Be}px`, m.value.scrollTop = dt - be + m.value.offsetTop;
        }
        u.value.style.margin = `${tt}px 0`, u.value.style.minHeight = `${se}px`, u.value.style.maxHeight = `${L}px`, n("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const P = T("");
    ie(async () => {
      await oe(), $(), h.value && (P.value = window.getComputedStyle(h.value).zIndex);
    });
    function k(O) {
      O && c.value === !0 && ($(), x == null || x(), c.value = !1);
    }
    return Lf({
      contentWrapper: u,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: k
    }), (O, E) => (v(), K("div", {
      ref_key: "contentWrapperElement",
      ref: u,
      style: Zt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: P.value
      })
    }, [
      D(l(R), S({
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
          _(O.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), zf = /* @__PURE__ */ b({
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
    const t = le(e);
    return (a, n) => (v(), y(l(qt), S(l(t), { style: {
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
}), sa = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [At, Wf] = ne("SelectContent"), Kf = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Tt();
    Do(), Ba(a.bodyLock);
    const { createCollection: s } = Qt(), r = T();
    Pa(r);
    const i = s(r), { search: d, handleTypeaheadSearch: c } = Po(i), u = T(), p = T(), h = T(), m = T(!1), w = T(!1);
    function g() {
      p.value && r.value && Zn([p.value, r.value]);
    }
    J(m, () => {
      g();
    });
    const { onOpenChange: x, triggerPointerDownPosRef: $ } = o;
    ge((E) => {
      if (!r.value)
        return;
      let V = { x: 0, y: 0 };
      const A = (L) => {
        var B, M;
        V = {
          x: Math.abs(
            Math.round(L.pageX) - (((B = $.value) == null ? void 0 : B.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(L.pageY) - (((M = $.value) == null ? void 0 : M.y) ?? 0)
          )
        };
      }, N = (L) => {
        var B;
        L.pointerType !== "touch" && (V.x <= 10 && V.y <= 10 ? L.preventDefault() : (B = r.value) != null && B.contains(L.target) || x(!1), document.removeEventListener("pointermove", A), $.value = null);
      };
      $.value !== null && (document.addEventListener("pointermove", A), document.addEventListener("pointerup", N, {
        capture: !0,
        once: !0
      })), E(() => {
        document.removeEventListener("pointermove", A), document.removeEventListener("pointerup", N, {
          capture: !0
        });
      });
    });
    function P(E) {
      const V = E.ctrlKey || E.altKey || E.metaKey;
      if (E.key === "Tab" && E.preventDefault(), !V && E.key.length === 1 && c(E.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(E.key)) {
        let A = i.value;
        if (["ArrowUp", "End"].includes(E.key) && (A = A.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(E.key)) {
          const N = E.target, L = A.indexOf(N);
          A = A.slice(L + 1);
        }
        setTimeout(() => Zn(A)), E.preventDefault();
      }
    }
    const k = C(() => a.position === "popper" ? a : {}), O = le(k.value);
    return Wf({
      content: r,
      viewport: u,
      onViewportChange: (E) => {
        u.value = E;
      },
      itemRefCallback: (E, V, A) => {
        var N, L;
        const B = !w.value && !A;
        (((N = o.modelValue) == null ? void 0 : N.value) !== void 0 && ((L = o.modelValue) == null ? void 0 : L.value) === V || B) && (p.value = E, B && (w.value = !0));
      },
      selectedItem: p,
      selectedItemText: h,
      onItemLeave: () => {
        var E;
        (E = r.value) == null || E.focus();
      },
      itemTextRefCallback: (E, V, A) => {
        var N, L;
        const B = !w.value && !A;
        (((N = o.modelValue) == null ? void 0 : N.value) !== void 0 && ((L = o.modelValue) == null ? void 0 : L.value) === V || B) && (h.value = E);
      },
      focusSelectedItem: g,
      position: a.position,
      isPositioned: m,
      searchRef: d
    }), (E, V) => (v(), y(l(vn), {
      "as-child": "",
      onMountAutoFocus: V[6] || (V[6] = _e(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: V[7] || (V[7] = (A) => {
        var N;
        n("closeAutoFocus", A), !A.defaultPrevented && ((N = l(o).triggerElement.value) == null || N.focus({ preventScroll: !0 }), A.preventDefault());
      })
    }, {
      default: f(() => [
        D(l(ea), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: V[2] || (V[2] = _e(() => {
          }, ["prevent"])),
          onDismiss: V[3] || (V[3] = (A) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: V[4] || (V[4] = (A) => n("escapeKeyDown", A)),
          onPointerDownOutside: V[5] || (V[5] = (A) => n("pointerDownOutside", A))
        }, {
          default: f(() => [
            (v(), y(Te(
              E.position === "popper" ? zf : Nf
            ), S({ ...E.$attrs, ...l(O) }, {
              id: l(o).contentId,
              ref: (A) => {
                r.value = l(Ae)(A);
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
              onPlaced: V[1] || (V[1] = (A) => m.value = !0),
              onKeydown: P
            }), {
              default: f(() => [
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
}), Uf = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Qs(e.context), (t, a) => _(t.$slots, "default");
  }
}), Hf = { key: 1 }, jf = /* @__PURE__ */ b({
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
    const a = e, n = Q(a, t), o = Tt(), s = T();
    ie(() => {
      s.value = new DocumentFragment();
    });
    const r = T(), i = C(() => a.forceMount || o.open.value);
    return (d, c) => {
      var u;
      return i.value ? (v(), y(l(Oe), {
        key: 0,
        ref_key: "presenceRef",
        ref: r,
        present: !0
      }, {
        default: f(() => [
          D(Kf, U(H({ ...l(n), ...d.$attrs })), {
            default: f(() => [
              _(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((u = r.value) != null && u.present) && s.value ? (v(), K("div", Hf, [
        (v(), y(on, { to: s.value }, [
          D(Uf, { context: l(o) }, {
            default: f(() => [
              _(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : X("", !0);
    };
  }
}), Gf = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(R), S({ "aria-hidden": "true" }, t), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [tr, qf] = ne("SelectItem"), Yf = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: a } = ue(t), n = Tt(), o = At(sa), { forwardRef: s, currentElement: r } = F(), i = C(() => {
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
      await oe(), !(g.defaultPrevented || ((x = o.searchRef) == null ? void 0 : x.value) !== "" && g.key === " ") && (If.includes(g.key) && p(), g.key === " " && g.preventDefault());
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
    }), qf({
      value: t.value,
      disabled: a,
      textId: u,
      isSelected: i,
      onItemTextChange: (g) => {
        c.value = ((c.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, x) => (v(), y(l(R), {
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
      onFocus: x[0] || (x[0] = ($) => d.value = !0),
      onBlur: x[1] || (x[1] = ($) => d.value = !1),
      onPointerup: p,
      onPointerdown: x[2] || (x[2] = ($) => {
        $.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: x[3] || (x[3] = _e(() => {
      }, ["prevent", "stop"])),
      onPointermove: h,
      onPointerleave: m,
      onKeydown: w
    }, {
      default: f(() => [
        _(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Xf = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = tr();
    return (n, o) => l(a).isSelected.value ? (v(), y(l(R), S({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : X("", !0);
  }
}), [Zf, Jf] = ne("SelectGroup"), Qf = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = ye(void 0, "radix-vue-select-group");
    return Jf({ id: a }), (n, o) => (v(), y(l(R), S({ role: "group" }, t, { "aria-labelledby": l(a) }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), ev = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = Zf({ id: "" });
    return (n, o) => (v(), y(l(R), S(t, {
      id: l(a).id
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ar = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = Tt(), n = At(sa), o = Tf(), s = tr(), { forwardRef: r, currentElement: i } = F(), d = C(() => {
      var c;
      return Ke("option", {
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
    }), ro(() => {
      o.onNativeOptionRemove(d.value);
    }), (c, u) => (v(), K(te, null, [
      D(l(R), S({
        id: l(s).textId,
        ref: l(r)
      }, { ...t, ...c.$attrs }), {
        default: f(() => [
          _(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      l(s).isSelected.value && l(a).valueElement.value && !l(a).valueElementHasChildren.value ? (v(), y(on, {
        key: 0,
        to: l(a).valueElement.value
      }, [
        _(c.$slots, "default")
      ], 8, ["to"])) : X("", !0)
    ], 64));
  }
}), tv = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: a } = ue(t), n = Jc(a), o = At(sa), s = o.position === "item-aligned" ? Uo() : void 0, { forwardRef: r, currentElement: i } = F();
    ie(() => {
      o == null || o.onViewportChange(i.value);
    });
    const d = T(0);
    function c(u) {
      const p = u.currentTarget, { shouldExpandOnScrollRef: h, contentWrapper: m } = s ?? {};
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
    return (u, p) => (v(), K(te, null, [
      D(l(R), S({
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
          _(u.$slots, "default")
        ]),
        _: 3
      }, 16),
      D(l(R), {
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
}), nr = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const a = t, { injectCollection: n } = Qt(), o = n(), s = At(sa), r = T(null);
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
    return ro(() => i()), (u, p) => {
      var h;
      return v(), y(l(R), S({
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
          _(u.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), av = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = At(sa), a = t.position === "item-aligned" ? Uo() : void 0, { forwardRef: n, currentElement: o } = F(), s = T(!1);
    return ge((r) => {
      var i, d;
      if ((i = t.viewport) != null && i.value && (d = t.isPositioned) != null && d.value) {
        let c = function() {
          s.value = u.scrollTop > 0;
        };
        const u = t.viewport.value;
        c(), u.addEventListener("scroll", c), r(() => u.removeEventListener("scroll", c));
      }
    }), J(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), y(nr, {
      key: 0,
      ref: l(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: c } = l(t);
        d != null && d.value && c != null && c.value && (d.value.scrollTop = d.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : X("", !0);
  }
}), nv = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = At(sa), a = t.position === "item-aligned" ? Uo() : void 0, { forwardRef: n, currentElement: o } = F(), s = T(!1);
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
    }), J(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), y(nr, {
      key: 0,
      ref: l(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: c } = l(t);
        d != null && d.value && c != null && c.value && (d.value.scrollTop = d.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : X("", !0);
  }
}), ov = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: a } = F(), n = Tt(), o = Il();
    return Ur(() => {
      var s;
      const r = !!cn((s = o == null ? void 0 : o.default) == null ? void 0 : s.call(o)).length;
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
          l(er)((i = l(n).modelValue) == null ? void 0 : i.value) ? (v(), K(te, { key: 0 }, [
            Y(Z(s.placeholder), 1)
          ], 64)) : _(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), lv = /* @__PURE__ */ b({
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
        _(t.$slots, "default", {}, () => [
          Y("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), sv = /* @__PURE__ */ b({
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
    ), s = C(
      () => o.value === "vertical" ? t.orientation : void 0
    ), r = C(
      () => t.decorative ? { role: "none" } : { "aria-orientation": s.value, role: "separator" }
    );
    return (i, d) => (v(), y(l(R), S({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": o.value
    }, r.value), {
      default: f(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), rv = /* @__PURE__ */ b({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(sv, U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function iv(e = [], t, a) {
  const n = [...e];
  return n[a] = t, n.sort((o, s) => o - s);
}
function or(e, t, a) {
  const n = 100 / (a - t) * (e - t);
  return en(n, 0, 100);
}
function dv(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function uv(e, t) {
  if (e.length === 1)
    return 0;
  const a = e.map((o) => Math.abs(o - t)), n = Math.min(...a);
  return a.indexOf(n);
}
function cv(e, t, a) {
  const n = e / 2, o = Ho([0, 50], [0, n]);
  return (n - o(t) * a) * a;
}
function pv(e) {
  return e.slice(0, -1).map((t, a) => e[a + 1] - t);
}
function fv(e, t) {
  if (t > 0) {
    const a = pv(e);
    return Math.min(...a) >= t;
  }
  return !0;
}
function Ho(e, t) {
  return (a) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (a - e[0]);
  };
}
function vv(e) {
  return (String(e).split(".")[1] || "").length;
}
function mv(e, t) {
  const a = 10 ** t;
  return Math.round(e * a) / a;
}
const lr = ["PageUp", "PageDown"], sr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], rr = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [ir, dr] = ne(["SliderVertical", "SliderHorizontal"]), ur = /* @__PURE__ */ b({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = gn();
    return (s, r) => (v(), y(l(R), S({ "data-slider-impl": "" }, a, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : l(lr).concat(l(sr)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
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
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hv = /* @__PURE__ */ b({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, { max: o, min: s, dir: r, inverted: i } = ue(a), { forwardRef: d, currentElement: c } = F(), u = T(), p = C(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function h(m) {
      const w = u.value || c.value.getBoundingClientRect(), g = [0, w.width], x = p.value ? [s.value, o.value] : [o.value, s.value], $ = Ho(g, x);
      return u.value = w, $(m - w.left);
    }
    return dr({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, w) => (v(), y(ur, {
      ref: l(d),
      dir: l(r),
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
        const x = p.value ? "from-left" : "from-right", $ = l(rr)[x].includes(g.key);
        n("stepKeyDown", g, $ ? -1 : 1);
      }),
      onEndKeyDown: w[4] || (w[4] = (g) => n("endKeyDown", g)),
      onHomeKeyDown: w[5] || (w[5] = (g) => n("homeKeyDown", g))
    }, {
      default: f(() => [
        _(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), gv = /* @__PURE__ */ b({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const a = e, n = t, { max: o, min: s, inverted: r } = ue(a), { forwardRef: i, currentElement: d } = F(), c = T(), u = C(() => !r.value);
    function p(h) {
      const m = c.value || d.value.getBoundingClientRect(), w = [0, m.height], g = u.value ? [o.value, s.value] : [s.value, o.value], x = Ho(w, g);
      return c.value = m, x(h - m.top);
    }
    return dr({
      startEdge: u.value ? "bottom" : "top",
      endEdge: u.value ? "top" : "bottom",
      size: "height",
      direction: u.value ? 1 : -1
    }), (h, m) => (v(), y(ur, {
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
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (w) => {
        const g = u.value ? "from-bottom" : "from-top", x = l(rr)[g].includes(w.key);
        n("stepKeyDown", w, x ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (w) => n("endKeyDown", w)),
      onHomeKeyDown: m[5] || (m[5] = (w) => n("homeKeyDown", w))
    }, {
      default: f(() => [
        _(h.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), yv = ["value", "name", "disabled", "step"], [gn, bv] = ne("SliderRoot"), _v = /* @__PURE__ */ b({
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
    const a = e, n = t, { min: o, max: s, step: r, minStepsBetweenThumbs: i, orientation: d, disabled: c, dir: u } = ue(a), p = Ye(u), { forwardRef: h, currentElement: m } = F(), w = Da(m);
    Fo();
    const g = de(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), x = T(0), $ = T(g.value);
    function P(A) {
      const N = uv(g.value, A);
      E(A, N);
    }
    function k(A) {
      E(A, x.value);
    }
    function O() {
      const A = $.value[x.value];
      g.value[x.value] !== A && n("valueCommit", qr(g.value));
    }
    function E(A, N, { commit: L } = { commit: !1 }) {
      var B;
      const M = vv(r.value), I = mv(Math.round((A - o.value) / r.value) * r.value + o.value, M), G = en(I, o.value, s.value), j = iv(g.value, G, N);
      if (fv(j, i.value * r.value)) {
        x.value = j.indexOf(G);
        const W = String(j) !== String(g.value);
        W && L && n("valueCommit", j), W && ((B = V.value[x.value]) == null || B.focus(), g.value = j);
      }
    }
    const V = T([]);
    return bv({
      modelValue: g,
      valueIndexToChangeRef: x,
      thumbElements: V,
      orientation: d,
      min: o,
      max: s,
      disabled: c
    }), (A, N) => (v(), K(te, null, [
      D(l(Lo), null, {
        default: f(() => [
          (v(), y(Te(l(d) === "horizontal" ? hv : gv), S(A.$attrs, {
            ref: l(h),
            "as-child": A.asChild,
            as: A.as,
            min: l(o),
            max: l(s),
            dir: l(p),
            inverted: A.inverted,
            "aria-disabled": l(c),
            "data-disabled": l(c) ? "" : void 0,
            onPointerdown: N[0] || (N[0] = () => {
              l(c) || ($.value = l(g));
            }),
            onSlideStart: N[1] || (N[1] = (L) => !l(c) && P(L)),
            onSlideMove: N[2] || (N[2] = (L) => !l(c) && k(L)),
            onSlideEnd: N[3] || (N[3] = (L) => !l(c) && O()),
            onHomeKeyDown: N[4] || (N[4] = (L) => !l(c) && E(l(o), 0, { commit: !0 })),
            onEndKeyDown: N[5] || (N[5] = (L) => !l(c) && E(l(s), l(g).length - 1, { commit: !0 })),
            onStepKeyDown: N[6] || (N[6] = (L, B) => {
              if (!l(c)) {
                const M = l(lr).includes(L.key) || L.shiftKey && l(sr).includes(L.key) ? 10 : 1, I = x.value, G = l(g)[I], j = l(r) * M * B;
                E(G + j, I, { commit: !0 });
              }
            })
          }), {
            default: f(() => [
              _(A.$slots, "default", { modelValue: l(g) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      l(w) ? (v(!0), K(te, { key: 0 }, he(l(g), (L, B) => (v(), K("input", {
        key: B,
        value: L,
        type: "number",
        style: { display: "none" },
        name: A.name ? A.name + (l(g).length > 1 ? "[]" : "") : void 0,
        disabled: l(c),
        step: l(r)
      }, null, 8, yv))), 128)) : X("", !0)
    ], 64));
  }
}), wv = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = gn(), n = ir(), { forwardRef: o, currentElement: s } = F(), r = C(() => {
      var m, w;
      return (w = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : w[t.index];
    }), i = C(() => r.value === void 0 ? 0 : or(r.value, a.min.value ?? 0, a.max.value ?? 100)), d = C(() => {
      var m, w;
      return dv(t.index, ((w = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : w.length) ?? 0);
    }), c = ks(s), u = C(() => c[n.size].value), p = C(() => u.value ? cv(u.value, i.value, n.direction) : 0), h = Bo();
    return ie(() => {
      a.thumbElements.value.push(s.value);
    }), bt(() => {
      const m = a.thumbElements.value.findIndex((w) => w === s.value) ?? -1;
      a.thumbElements.value.splice(m, 1);
    }), (m, w) => (v(), y(l(hn), null, {
      default: f(() => [
        D(l(R), S(m.$attrs, {
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
            display: !l(h) && r.value === void 0 ? "none" : void 0
          },
          onFocus: w[0] || (w[0] = () => {
            l(a).valueIndexToChangeRef.value = m.index;
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
}), xv = /* @__PURE__ */ b({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: a } = No(), { forwardRef: n, currentElement: o } = F(), s = C(() => o.value ? a().findIndex((r) => r.ref === o.value) : -1);
    return (r, i) => (v(), y(wv, S({ ref: l(n) }, t, { index: s.value }), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Cv = /* @__PURE__ */ b({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = gn();
    return F(), (a, n) => (v(), y(l(R), {
      "as-child": a.asChild,
      as: a.as,
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value
    }, {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), $v = /* @__PURE__ */ b({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = gn(), a = ir();
    F();
    const n = C(() => {
      var r, i;
      return (i = (r = t.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (d) => or(d, t.min.value, t.max.value)
      );
    }), o = C(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = C(() => 100 - Math.max(...n.value));
    return (r, i) => (v(), y(l(R), {
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: Zt({
        [l(a).startEdge]: `${o.value}%`,
        [l(a).endEdge]: `${s.value}%`
      })
    }, {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function kv() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
kv();
const Bv = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Dv, Pv] = ne("SwitchRoot"), Ov = /* @__PURE__ */ b({
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
    const a = e, n = t, { disabled: o } = ue(a), s = de(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    });
    function r() {
      o.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: d } = F(), c = Da(d), u = C(() => {
      var p;
      return a.id && d.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Pv({
      checked: s,
      toggleCheck: r,
      disabled: o
    }), (p, h) => (v(), K(te, null, [
      D(l(R), S(p.$attrs, {
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
        onKeydown: Fe(_e(r, ["prevent"]), ["enter"])
      }), {
        default: f(() => [
          _(p.$slots, "default", { checked: l(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      l(c) ? (v(), K("input", {
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
      }, null, 8, Bv)) : X("", !0)
    ], 64));
  }
}), Sv = /* @__PURE__ */ b({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Dv();
    return F(), (a, n) => {
      var o;
      return v(), y(l(R), {
        "data-state": (o = l(t).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": l(t).disabled.value ? "" : void 0,
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
}), [jo, Ev] = ne("TabsRoot"), Tv = /* @__PURE__ */ b({
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
    const a = e, n = t, { orientation: o, dir: s } = ue(a), r = Ye(s);
    F();
    const i = de(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), d = T();
    return Ev({
      modelValue: i,
      changeModelValue: (c) => {
        i.value = c;
      },
      orientation: o,
      dir: r,
      activationMode: a.activationMode,
      baseId: ye(void 0, "radix-vue-tabs"),
      tabsList: d
    }), (c, u) => (v(), y(l(R), {
      dir: l(r),
      "data-orientation": l(o),
      "as-child": c.asChild,
      as: c.as
    }, {
      default: f(() => [
        _(c.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), Av = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: a } = ue(t), { forwardRef: n, currentElement: o } = F(), s = jo();
    return s.tabsList = o, (r, i) => (v(), y(l(Us), {
      "as-child": "",
      orientation: l(s).orientation.value,
      dir: l(s).dir.value,
      loop: l(a)
    }, {
      default: f(() => [
        D(l(R), {
          ref: l(n),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": l(s).orientation.value
        }, {
          default: f(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function cr(e, t) {
  return `${e}-trigger-${t}`;
}
function pr(e, t) {
  return `${e}-content-${t}`;
}
const Mv = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a } = F(), n = jo(), o = C(() => cr(n.baseId, t.value)), s = C(() => pr(n.baseId, t.value)), r = C(() => t.value === n.modelValue.value), i = T(r.value);
    return ie(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (d, c) => (v(), y(l(Oe), {
      present: r.value,
      "force-mount": ""
    }, {
      default: f(({ present: u }) => [
        D(l(R), {
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
          style: Zt({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: f(() => [
            d.forceMount || r.value ? _(d.$slots, "default", { key: 0 }) : X("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Vv = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: a } = F(), n = jo(), o = C(() => cr(n.baseId, t.value)), s = C(() => pr(n.baseId, t.value)), r = C(() => t.value === n.modelValue.value);
    return (i, d) => (v(), y(l(mp), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: f(() => [
        D(l(R), {
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
          onKeydown: d[1] || (d[1] = Fe((c) => l(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: d[2] || (d[2] = () => {
            const c = l(n).activationMode !== "manual";
            !r.value && !i.disabled && c && l(n).changeModelValue(i.value);
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
}), [yn, Iv] = ne("ToastProvider"), Rv = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: a, duration: n, swipeDirection: o, swipeThreshold: s } = ue(t), r = T(), i = T(0), d = T(!1), c = T(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const u = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(u);
    }
    return Iv({
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
    }), (u, p) => _(u.$slots, "default");
  }
}), Fv = "toast.swipeStart", Lv = "toast.swipeMove", Nv = "toast.swipeCancel", zv = "toast.swipeEnd", Qn = "toast.viewportPause", eo = "toast.viewportResume";
function Wa(e, t, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function yl(e, t, a = 0) {
  const n = Math.abs(e.x), o = Math.abs(e.y), s = n > o;
  return t === "left" || t === "right" ? s && n > a : !s && o > a;
}
function Wv(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function fr(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && t.push(a.textContent), Wv(a)) {
      const n = a.ariaHidden || a.hidden || a.style.display === "none", o = a.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const s = a.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...fr(a));
    }
  }), t;
}
const Kv = /* @__PURE__ */ b({
  __name: "ToastAnnounce",
  setup(e) {
    const t = yn(), a = Xd(1e3), n = T(!1);
    return ws(() => {
      n.value = !0;
    }), (o, s) => l(a) || n.value ? (v(), y(l(Ea), { key: 0 }, {
      default: f(() => [
        Y(Z(l(t).label.value) + " ", 1),
        _(o.$slots, "default")
      ]),
      _: 3
    })) : X("", !0);
  }
}), [Uv, Hv] = ne("ToastRoot"), jv = /* @__PURE__ */ b({
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
    const a = e, n = t, { forwardRef: o, currentElement: s } = F(), r = yn(), i = T(null), d = T(null), c = C(() => a.duration || r.duration.value), u = T(0), p = T(c.value), h = T(0), m = T(c.value), w = ws(() => {
      const P = (/* @__PURE__ */ new Date()).getTime() - u.value;
      m.value = Math.max(p.value - P, 0);
    }, { fpsLimit: 60 });
    function g(P) {
      !P || P === Number.POSITIVE_INFINITY || qe && (window.clearTimeout(h.value), u.value = (/* @__PURE__ */ new Date()).getTime(), h.value = window.setTimeout(x, P));
    }
    function x() {
      var P, k;
      (P = s.value) != null && P.contains(document.activeElement) && ((k = r.viewport.value) == null || k.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const $ = C(() => s.value ? fr(s.value) : null);
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
        return k.addEventListener(Qn, E), k.addEventListener(eo, O), () => {
          k.removeEventListener(Qn, E), k.removeEventListener(eo, O);
        };
      }
    }), J(() => [a.open, c.value], () => {
      p.value = c.value, a.open && !r.isClosePausedRef.value && g(c.value);
    }, { immediate: !0 }), ko("Escape", (P) => {
      n("escapeKeyDown", P), P.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, x());
    }), ie(() => {
      r.onToastAdd();
    }), bt(() => {
      r.onToastRemove();
    }), Hv({ onClose: x }), (P, k) => (v(), K(te, null, [
      $.value ? (v(), y(Kv, {
        key: 0,
        role: "status",
        "aria-live": P.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: f(() => [
          Y(Z($.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : X("", !0),
      l(r).viewport.value ? (v(), y(on, {
        key: 1,
        to: l(r).viewport.value
      }, [
        D(l(R), S({
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
          onPointerdown: k[0] || (k[0] = _e((O) => {
            i.value = { x: O.clientX, y: O.clientY };
          }, ["left"])),
          onPointermove: k[1] || (k[1] = (O) => {
            if (!i.value) return;
            const E = O.clientX - i.value.x, V = O.clientY - i.value.y, A = !!d.value, N = ["left", "right"].includes(l(r).swipeDirection.value), L = ["left", "up"].includes(l(r).swipeDirection.value) ? Math.min : Math.max, B = N ? L(0, E) : 0, M = N ? 0 : L(0, V), I = O.pointerType === "touch" ? 10 : 2, G = { x: B, y: M }, j = { originalEvent: O, delta: G };
            A ? (d.value = G, l(Wa)(l(Lv), (W) => n("swipeMove", W), j)) : l(yl)(G, l(r).swipeDirection.value, I) ? (d.value = G, l(Wa)(l(Fv), (W) => n("swipeStart", W), j), O.target.setPointerCapture(O.pointerId)) : (Math.abs(E) > I || Math.abs(V) > I) && (i.value = null);
          }),
          onPointerup: k[2] || (k[2] = (O) => {
            const E = d.value, V = O.target;
            if (V.hasPointerCapture(O.pointerId) && V.releasePointerCapture(O.pointerId), d.value = null, i.value = null, E) {
              const A = O.currentTarget, N = { originalEvent: O, delta: E };
              l(yl)(E, l(r).swipeDirection.value, l(r).swipeThreshold.value) ? l(Wa)(l(zv), (L) => n("swipeEnd", L), N) : l(Wa)(l(Nv), (L) => n("swipeCancel", L), N), A == null || A.addEventListener("click", (L) => L.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: f(() => [
            _(P.$slots, "default", {
              remaining: m.value,
              duration: c.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : X("", !0)
    ], 64));
  }
}), Gv = /* @__PURE__ */ b({
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
    const a = e, n = t, { forwardRef: o } = F(), s = de(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    return (r, i) => (v(), y(l(Oe), {
      present: r.forceMount || l(s)
    }, {
      default: f(() => [
        D(jv, S({
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
            _(r.$slots, "default", {
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
}), vr = /* @__PURE__ */ b({
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
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), mr = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Uv(), { forwardRef: n } = F();
    return (o, s) => (v(), y(vr, { "as-child": "" }, {
      default: f(() => [
        D(l(R), S(t, {
          ref: l(n),
          type: o.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (r) => l(a).onClose())
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
}), qv = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = F();
    return (a, n) => a.altText ? (v(), y(vr, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: f(() => [
        D(mr, {
          ref: l(t),
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
    }, 8, ["alt-text"])) : X("", !0);
  }
}), bl = /* @__PURE__ */ b({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const a = t, n = yn();
    return (o, s) => (v(), y(l(Ea), {
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
        _(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Yv = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: a, label: n } = ue(t), { forwardRef: o, currentElement: s } = F(), { createCollection: r } = Qt(), i = r(s), d = yn(), c = C(() => d.toastCount.value > 0), u = T(), p = T(), h = C(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    ko(a.value, () => {
      s.value.focus();
    }), ie(() => {
      d.onViewportChange(s.value);
    }), ge((w) => {
      const g = s.value;
      if (c.value && g) {
        const x = () => {
          if (!d.isClosePausedRef.value) {
            const E = new CustomEvent(Qn);
            g.dispatchEvent(E), d.isClosePausedRef.value = !0;
          }
        }, $ = () => {
          if (d.isClosePausedRef.value) {
            const E = new CustomEvent(eo);
            g.dispatchEvent(E), d.isClosePausedRef.value = !1;
          }
        }, P = (E) => {
          !g.contains(E.relatedTarget) && $();
        }, k = () => {
          g.contains(document.activeElement) || $();
        }, O = (E) => {
          var V, A, N;
          const L = E.altKey || E.ctrlKey || E.metaKey;
          if (E.key === "Tab" && !L) {
            const B = document.activeElement, M = E.shiftKey;
            if (E.target === g && M) {
              (V = u.value) == null || V.focus();
              return;
            }
            const I = m({ tabbingDirection: M ? "backwards" : "forwards" }), G = I.findIndex((j) => j === B);
            Ya(I.slice(G + 1)) ? E.preventDefault() : M ? (A = u.value) == null || A.focus() : (N = p.value) == null || N.focus();
          }
        };
        g.addEventListener("focusin", x), g.addEventListener("focusout", P), g.addEventListener("pointermove", x), g.addEventListener("pointerleave", k), g.addEventListener("keydown", O), window.addEventListener("blur", x), window.addEventListener("focus", $), w(() => {
          g.removeEventListener("focusin", x), g.removeEventListener("focusout", P), g.removeEventListener("pointermove", x), g.removeEventListener("pointerleave", k), g.removeEventListener("keydown", O), window.removeEventListener("blur", x), window.removeEventListener("focus", $);
        });
      }
    });
    function m({ tabbingDirection: w }) {
      const g = i.value.map((x) => {
        const $ = [x, ...To(x)];
        return w === "forwards" ? $ : $.reverse();
      });
      return (w === "forwards" ? g.reverse() : g).flat();
    }
    return (w, g) => (v(), y(l(Uu), {
      role: "region",
      "aria-label": typeof l(n) == "string" ? l(n).replace("{hotkey}", h.value) : l(n)(h.value),
      tabindex: "-1",
      style: Zt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: f(() => [
        c.value ? (v(), y(bl, {
          key: 0,
          ref: (x) => {
            u.value = l(Ae)(x);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const x = m({
              tabbingDirection: "forwards"
            });
            l(Ya)(x);
          })
        }, null, 512)) : X("", !0),
        D(l(R), S({
          ref: l(o),
          tabindex: "-1",
          as: w.as,
          "as-child": w.asChild
        }, w.$attrs), {
          default: f(() => [
            _(w.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        c.value ? (v(), y(bl, {
          key: 1,
          ref: (x) => {
            p.value = l(Ae)(x);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const x = m({
              tabbingDirection: "backwards"
            });
            l(Ya)(x);
          })
        }, null, 512)) : X("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Xv = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (v(), y(l(R), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zv = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (a, n) => (v(), y(l(R), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hr = "tooltip.open", [Go, Jv] = ne("TooltipProvider"), Qv = /* @__PURE__ */ b({
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
    const t = e, { delayDuration: a, skipDelayDuration: n, disableHoverableContent: o, disableClosingTrigger: s, ignoreNonKeyboardFocus: r, disabled: i } = ue(t);
    F();
    const d = T(!0), c = T(!1), { start: u, stop: p } = $o(() => {
      d.value = !0;
    }, n, { immediate: !1 });
    return Jv({
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
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: r
    }), (h, m) => _(h.$slots, "default");
  }
}), [bn, em] = ne("TooltipRoot"), tm = /* @__PURE__ */ b({
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
    F();
    const o = Go(), s = C(() => a.disableHoverableContent ?? o.disableHoverableContent.value), r = C(() => a.disableClosingTrigger ?? o.disableClosingTrigger.value), i = C(() => a.disabled ?? o.disabled.value), d = C(() => a.delayDuration ?? o.delayDuration.value), c = C(() => a.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), u = de(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    J(u, (k) => {
      o.onClose && (k ? (o.onOpen(), document.dispatchEvent(new CustomEvent(hr))) : o.onClose());
    });
    const p = T(!1), h = T(), m = C(() => u.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: w, stop: g } = $o(() => {
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
    return em({
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
        s.value ? $() : g();
      },
      onOpen: x,
      onClose: $,
      disableHoverableContent: s,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: c
    }), (k, O) => (v(), y(l(aa), null, {
      default: f(() => [
        _(k.$slots, "default", { open: l(u) })
      ]),
      _: 3
    }));
  }
}), am = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = bn(), n = Go();
    a.contentId || (a.contentId = ye(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: s } = F(), r = T(!1), i = T(!1), d = C(() => a.disabled.value ? {} : {
      click: g,
      focus: m,
      pointermove: p,
      pointerleave: h,
      pointerdown: u,
      blur: w
    });
    ie(() => {
      a.onTriggerChange(s.value);
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
    return (x, $) => (v(), y(l(mn), { "as-child": "" }, {
      default: f(() => [
        D(l(R), S({
          ref: l(o),
          "aria-describedby": l(a).open.value ? l(a).contentId : void 0,
          "data-state": l(a).stateAttribute.value,
          as: x.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Hr(d.value)), {
          default: f(() => [
            _(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), gr = /* @__PURE__ */ b({
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
    const a = e, n = t, o = bn(), { forwardRef: s } = F(), r = Il(), i = C(() => {
      var u;
      return (u = r.default) == null ? void 0 : u.call(r);
    }), d = C(() => {
      var u;
      if (a.ariaLabel)
        return a.ariaLabel;
      let p = "";
      function h(m) {
        typeof m.children == "string" && m.type !== Ml ? p += m.children : Array.isArray(m.children) && m.children.forEach((w) => h(w));
      }
      return (u = i.value) == null || u.forEach((m) => h(m)), p;
    }), c = C(() => {
      const { ariaLabel: u, ...p } = a;
      return p;
    });
    return ie(() => {
      Gt(window, "scroll", (u) => {
        const p = u.target;
        p != null && p.contains(o.trigger.value) && o.onClose();
      }), Gt(window, hr, o.onClose);
    }), (u, p) => (v(), y(l(ea), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (h) => n("escapeKeyDown", h)),
      onPointerDownOutside: p[1] || (p[1] = (h) => {
        var m;
        l(o).disableClosingTrigger.value && (m = l(o).trigger.value) != null && m.contains(h.target) && h.preventDefault(), n("pointerDownOutside", h);
      }),
      onFocusOutside: p[2] || (p[2] = _e(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (h) => l(o).onClose())
    }, {
      default: f(() => [
        D(l(qt), S({
          ref: l(s),
          "data-state": l(o).stateAttribute.value
        }, { ...u.$attrs, ...c.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: f(() => [
            _(u.$slots, "default"),
            D(l(Ea), {
              id: l(o).contentId,
              role: "tooltip"
            }, {
              default: f(() => [
                Y(Z(d.value), 1)
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
}), nm = /* @__PURE__ */ b({
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
    const t = le(e), { forwardRef: a, currentElement: n } = F(), { trigger: o, onClose: s } = bn(), r = Go(), { isPointerInTransit: i, onPointerExit: d } = du(o, n);
    return r.isPointerInTransitRef = i, d(() => {
      s();
    }), (c, u) => (v(), y(gr, S({ ref: l(a) }, l(t)), {
      default: f(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), om = /* @__PURE__ */ b({
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
    const a = e, n = t, o = bn(), s = Q(a, n), { forwardRef: r } = F();
    return (i, d) => (v(), y(l(Oe), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        (v(), y(Te(l(o).disableHoverableContent.value ? gr : nm), S({ ref: l(r) }, l(s)), {
          default: f(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), lm = /* @__PURE__ */ b({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Oa), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ny = /* @__PURE__ */ b({
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
    const o = Q(e, t);
    return (s, r) => (v(), y(l(Au), U(H(l(o))), {
      default: f(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qo = "-", sm = (e) => {
  const t = im(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (r) => {
      const i = r.split(qo);
      return i[0] === "" && i.length !== 1 && i.shift(), yr(i, t) || rm(r);
    },
    getConflictingClassGroupIds: (r, i) => {
      const d = a[r] || [];
      return i && n[r] ? [...d, ...n[r]] : d;
    }
  };
}, yr = (e, t) => {
  var r;
  if (e.length === 0)
    return t.classGroupId;
  const a = e[0], n = t.nextPart.get(a), o = n ? yr(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(qo);
  return (r = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : r.classGroupId;
}, _l = /^\[(.+)\]$/, rm = (e) => {
  if (_l.test(e)) {
    const t = _l.exec(e)[1], a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, im = (e) => {
  const {
    theme: t,
    prefix: a
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return um(Object.entries(e.classGroups), a).forEach(([s, r]) => {
    to(r, n, s, t);
  }), n;
}, to = (e, t, a, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : wl(t, o);
      s.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (dm(o)) {
        to(o(n), t, a, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([s, r]) => {
      to(r, wl(t, s), a, n);
    });
  });
}, wl = (e, t) => {
  let a = e;
  return t.split(qo).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, dm = (e) => e.isThemeGetter, um = (e, t) => t ? e.map(([a, n]) => {
  const o = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([r, i]) => [t + r, i])) : s);
  return [a, o];
}) : e, cm = (e) => {
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
}, br = "!", pm = (e) => {
  const {
    separator: t,
    experimentalParseClassName: a
  } = e, n = t.length === 1, o = t[0], s = t.length, r = (i) => {
    const d = [];
    let c = 0, u = 0, p;
    for (let x = 0; x < i.length; x++) {
      let $ = i[x];
      if (c === 0) {
        if ($ === o && (n || i.slice(x, x + s) === t)) {
          d.push(i.slice(u, x)), u = x + s;
          continue;
        }
        if ($ === "/") {
          p = x;
          continue;
        }
      }
      $ === "[" ? c++ : $ === "]" && c--;
    }
    const h = d.length === 0 ? i : i.substring(u), m = h.startsWith(br), w = m ? h.substring(1) : h, g = p && p > u ? p - u : void 0;
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
}, fm = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let a = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...a.sort(), n), a = []) : a.push(n);
  }), t.push(...a.sort()), t;
}, vm = (e) => ({
  cache: cm(e.cacheSize),
  parseClassName: pm(e),
  ...sm(e)
}), mm = /\s+/, hm = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, s = [], r = e.trim().split(mm);
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
    const x = fm(u).join(":"), $ = p ? x + br : x, P = $ + g;
    if (s.includes(P))
      continue;
    s.push(P);
    const k = o(g, w);
    for (let O = 0; O < k.length; ++O) {
      const E = k[O];
      s.push($ + E);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function gm() {
  let e = 0, t, a, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (a = _r(t)) && (n && (n += " "), n += a);
  return n;
}
const _r = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = _r(e[n])) && (a && (a += " "), a += t);
  return a;
};
function ym(e, ...t) {
  let a, n, o, s = r;
  function r(d) {
    const c = t.reduce((u, p) => p(u), e());
    return a = vm(c), n = a.cache.get, o = a.cache.set, s = i, i(d);
  }
  function i(d) {
    const c = n(d);
    if (c)
      return c;
    const u = hm(d, a);
    return o(d, u), u;
  }
  return function() {
    return s(gm.apply(null, arguments));
  };
}
const ve = (e) => {
  const t = (a) => a[e] || [];
  return t.isThemeGetter = !0, t;
}, wr = /^\[(?:([a-z-]+):)?(.+)\]$/i, bm = /^\d+\/\d+$/, _m = /* @__PURE__ */ new Set(["px", "full", "screen"]), wm = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, xm = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Cm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, $m = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, km = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Qe = (e) => Lt(e) || _m.has(e) || bm.test(e), pt = (e) => ra(e, "length", Am), Lt = (e) => !!e && !Number.isNaN(Number(e)), Rn = (e) => ra(e, "number", Lt), fa = (e) => !!e && Number.isInteger(Number(e)), Bm = (e) => e.endsWith("%") && Lt(e.slice(0, -1)), ee = (e) => wr.test(e), ft = (e) => wm.test(e), Dm = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Pm = (e) => ra(e, Dm, xr), Om = (e) => ra(e, "position", xr), Sm = /* @__PURE__ */ new Set(["image", "url"]), Em = (e) => ra(e, Sm, Vm), Tm = (e) => ra(e, "", Mm), va = () => !0, ra = (e, t, a) => {
  const n = wr.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : a(n[2]) : !1;
}, Am = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  xm.test(e) && !Cm.test(e)
), xr = () => !1, Mm = (e) => $m.test(e), Vm = (e) => km.test(e), Im = () => {
  const e = ve("colors"), t = ve("spacing"), a = ve("blur"), n = ve("brightness"), o = ve("borderColor"), s = ve("borderRadius"), r = ve("borderSpacing"), i = ve("borderWidth"), d = ve("contrast"), c = ve("grayscale"), u = ve("hueRotate"), p = ve("invert"), h = ve("gap"), m = ve("gradientColorStops"), w = ve("gradientColorStopPositions"), g = ve("inset"), x = ve("margin"), $ = ve("opacity"), P = ve("padding"), k = ve("saturate"), O = ve("scale"), E = ve("sepia"), V = ve("skew"), A = ve("space"), N = ve("translate"), L = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", ee, t], I = () => [ee, t], G = () => ["", Qe, pt], j = () => ["auto", Lt, ee], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], q = () => ["solid", "dashed", "dotted", "double", "none"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], pe = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], me = () => ["", "0", ee], ke = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], be = () => [Lt, ee];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [va],
      spacing: [Qe, pt],
      blur: ["none", "", ft, ee],
      brightness: be(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ft, ee],
      borderSpacing: I(),
      borderWidth: G(),
      contrast: be(),
      grayscale: me(),
      hueRotate: be(),
      invert: me(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Bm, pt],
      inset: M(),
      margin: M(),
      opacity: be(),
      padding: I(),
      saturate: be(),
      scale: be(),
      sepia: me(),
      skew: be(),
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
        aspect: ["auto", "square", "video", ee]
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
        columns: [ft]
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
        object: [...W(), ee]
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
        overscroll: L()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L()
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
        z: ["auto", fa, ee]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: M()
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
        flex: ["1", "auto", "initial", "none", ee]
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
        order: ["first", "last", "none", fa, ee]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [va]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", fa, ee]
        }, ee]
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
        "grid-rows": [va]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [fa, ee]
        }, ee]
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
        "auto-cols": ["auto", "min", "max", "fr", ee]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ee]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ee, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ee, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ee, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ft]
        }, ft]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ee, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ee, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ee, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ee, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ft, pt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Rn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [va]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ee]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Lt, Rn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Qe, ee]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ee]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ee]
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
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Qe, pt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Qe, ee]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ee]
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
        content: ["none", ee]
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
        bg: [...W(), Om]
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
        bg: ["auto", "cover", "contain", Pm]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Em]
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
        "border-opacity": [$]
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
        "divide-opacity": [$]
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
        "outline-offset": [Qe, ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Qe, pt]
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
        "ring-opacity": [$]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Qe, pt]
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
        shadow: ["", "inner", "none", ft, Tm]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [va]
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
        "mix-blend": [...se(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": se()
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
        "drop-shadow": ["", "none", ft, ee]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ee]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: be()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ee]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: be()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ee]
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
        rotate: [fa, ee]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ee]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ee]
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
        "will-change": ["auto", "scroll", "contents", "transform", ee]
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
        stroke: [Qe, pt, Rn]
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
}, Rm = /* @__PURE__ */ ym(Im);
function z(...e) {
  return Rm(e);
}
const zy = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Iu), S(a.value, { class: "overflow-hidden text-sm text-accordion-text transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: f(() => [
        ce("div", {
          class: ae(l(z)("pb-4 pt-0", t.class))
        }, [
          _(n.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), Wy = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(Vu), S(l(n), {
      class: l(z)("border-b border-accordion-border", t.class)
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
const Fm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ka = {
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
const Lm = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: s, class: r, ...i }, { slots: d }) => Ke(
  "svg",
  {
    ...Ka,
    width: e || Ka.width,
    height: e || Ka.height,
    stroke: n || Ka.stroke,
    "stroke-width": a ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${Fm(s ?? "icon")}`],
    ...i
  },
  [...o.map((c) => Ke(...c)), ...d.default ? [d.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const we = (e, t) => (a, { slots: n }) => Ke(
  Lm,
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
const Nm = we("CalendarIcon", [
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
const _n = we("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = we("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zm = we("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cr = we("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wm = we("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Km = we("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Um = we("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hm = we("ChevronsUpDownIcon", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jm = we("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gm = we("EllipsisIcon", [
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
const qm = we("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ym = we("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xm = we("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zm = we("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jm = we("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qm = we("SunIcon", [
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
const wn = we("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Ky = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Ru), { class: "flex" }, {
      default: f(() => [
        D(l(Fu), S(a.value, {
          class: l(z)(
            "flex flex-1 items-center justify-between py-4 font-medium text-heading transition-all [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: f(() => [
            _(n.$slots, "default"),
            _(n.$slots, "icon", {}, () => [
              D(l(Yo), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
});
function $r(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (a = $r(e[t])) && (n && (n += " "), n += a);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function eh() {
  for (var e, t, a = 0, n = ""; a < arguments.length; ) (e = arguments[a++]) && (t = $r(e)) && (n && (n += " "), n += t);
  return n;
}
const xl = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Cl = eh, Ma = (e, t) => (a) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Cl(e, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: s } = t, r = Object.keys(o).map((c) => {
    const u = a == null ? void 0 : a[c], p = s == null ? void 0 : s[c];
    if (u === null) return null;
    const h = xl(u) || xl(p);
    return o[c][h];
  }), i = a && Object.entries(a).reduce((c, u) => {
    let [p, h] = u;
    return h === void 0 || (c[p] = h), c;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, u) => {
    let { class: p, className: h, ...m } = u;
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
      ...c,
      p,
      h
    ] : c;
  }, []);
  return Cl(e, r, d, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, Uy = /* @__PURE__ */ b({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("div", {
      class: ae(l(z)(l(th)({ variant: a.variant }), t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), th = Ma(
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
), Ze = /* @__PURE__ */ b({
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
    return (a, n) => (v(), y(l(R), {
      as: a.as,
      "as-child": a.asChild,
      class: ae(l(z)(l(Mt)({ variant: a.variant, size: a.size }), t.class))
    }, {
      default: f(() => [
        _(a.$slots, "default"),
        a.loading ? (v(), y(l(qm), {
          key: 0,
          class: ae(l(ah)({ size: a.size }))
        }, null, 8, ["class"])) : X("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), ah = Ma("animate-spin", {
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
}), Mt = Ma(
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
), nh = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, oh = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(yc), S({
      class: l(z)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: c }) => [
        D(l(ch), null, {
          default: f(() => [
            D(l(vh)),
            D(l(ph)),
            D(l(fh))
          ]),
          _: 1
        }),
        ce("div", nh, [
          (v(!0), K(te, null, he(d, (u) => (v(), y(l(rh), {
            key: u.value.toString()
          }, {
            default: f(() => [
              D(l(dh), null, {
                default: f(() => [
                  D(l($l), null, {
                    default: f(() => [
                      (v(!0), K(te, null, he(c, (p) => (v(), y(l(uh), { key: p }, {
                        default: f(() => [
                          Y(Z(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              D(l(ih), null, {
                default: f(() => [
                  (v(!0), K(te, null, he(u.rows, (p, h) => (v(), y(l($l), {
                    key: `weekDate-${h}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), K(te, null, he(p, (m) => (v(), y(l(lh), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          D(l(sh), {
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
}), lh = /* @__PURE__ */ b({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(xc), S({
      class: l(z)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sh = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(Oc), S({
      class: l(z)(
        l(Mt)({ variant: "ghost" }),
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
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rh = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(wc), S({
      class: l(z)("w-full border-collapse space-y-1", t.class)
    }, l(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ih = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Dc), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dh = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Bc), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $l = /* @__PURE__ */ b({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(Pc), S({
      class: l(z)("flex", t.class)
    }, l(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uh = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(Cc), S({
      class: l(z)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ch = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(bc), S({
      class: l(z)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ph = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(_c), S({
      class: l(z)("text-sm font-medium text-text", t.class)
    }, l(n)), {
      default: f(({ headingValue: r }) => [
        _(o.$slots, "default", { headingValue: r }, () => [
          Y(Z(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fh = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l($c), S({
      class: l(z)(
        l(Mt)({ variant: "outline" }),
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
}), vh = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(kc), S({
      class: l(z)(
        l(Mt)({ variant: "outline" }),
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
}), kr = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(Kc), S(l(s), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        a.class
      ]
    }), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Br = /* @__PURE__ */ b({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Q(e, t);
    return (s, r) => (v(), y(l(Os), U(H(l(o))), {
      default: f(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hy = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Sa), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mh = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Ss), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hh = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("div", {
      class: ae(l(z)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), gh = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(Ms), S(l(n), {
      class: l(z)(
        "text-2xl font-semibold leading-none tracking-tight text-heading",
        t.class
      )
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yh = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(Vs), S(l(n), {
      class: l(z)("text-sm text-sub-text", t.class)
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dr = /* @__PURE__ */ b({
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
    }), s = Q(o, a);
    return (r, i) => (v(), y(l(Eo), null, {
      default: f(() => [
        D(l(Io), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        D(l(Vo), S(l(s), {
          class: l(z)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg",
            n.class
          )
        }), {
          default: f(() => [
            _(r.$slots, "default"),
            D(l(Sa), {
              onClick: i[0] || (i[0] = (d) => a("close", d)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: f(() => [
                D(l(wn), { class: "size-4 dark:text-slate-300" }),
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
}), jy = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(Eo), null, {
      default: f(() => [
        D(l(Io), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: f(() => [
            D(l(Vo), S({
              class: l(z)(
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
                _(r.$slots, "default"),
                D(l(Sa), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: f(() => [
                    D(l(wn), { class: "size-4" }),
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
}), bh = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("div", {
      class: ae(
        l(z)(
          "flex flex-col-reverse text-text sm:flex-row sm:justify-end sm:gap-x-2",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Gy = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Q(e, t);
    return (s, r) => (v(), y(l(Br), U(H(l(o))), {
      default: f(() => [
        D(l(Dr), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: f(() => [
            D(kr, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: f(() => [
                _(s.$slots, "default")
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
}), _h = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Zc), S(a.value, {
      class: l(z)("py-6 text-center text-sm", t.class)
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wh = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(jc), S(a.value, {
      class: l(z)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: f(() => [
        n.heading ? (v(), y(l(Gc), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: f(() => [
            Y(Z(n.heading), 1)
          ]),
          _: 1
        })) : X("", !0),
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xh = { class: "flex items-center border-b px-3" }, Ch = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), K("div", xh, [
      D(l(Jm), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      D(l(Uc), S({ ...l(n), ...o.$attrs }, {
        "auto-focus": "",
        class: l(z)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), $h = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(tp), S(l(s), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kh = { role: "presentation" }, Bh = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(Xc), S(l(s), {
      class: l(z)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: f(() => [
        ce("div", kh, [
          _(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qy = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(ap), S(a.value, {
      class: l(z)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yy = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("span", {
      class: ae(l(z)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Dh = /* @__PURE__ */ b({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Q(e, t);
    return (s, r) => (v(), y(l(Vp), U(H(l(o))), {
      default: f(({ open: i }) => [
        _(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Ph = /* @__PURE__ */ b({
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
    return (a, n) => (v(), K("div", {
      class: ae(
        l(z)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Oh = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = le(e);
    return (n, o) => (v(), y(l(Ip), S({ class: "outline-none" }, l(a)), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sh = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(Rp), null, {
      default: f(() => [
        D(l(Fp), S(l(s), {
          class: l(z)(
            "z-50 min-w-32 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            a.class
          )
        }), {
          default: f(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Xy = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Lp), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zy = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = Q(e, t);
    return (s, r) => (v(), y(l(Kp), U(H(l(o))), {
      default: f(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jy = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(Xs), S(l(n), {
      class: l(z)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.inset && "pl-8",
        t.class
      )
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Eh = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(Ph, {
      class: ae(t.class)
    }, {
      default: f(() => [
        D(l(Xs), S(l(n), {
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
}), Th = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Qy = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(zp), S(l(s), {
      class: l(z)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        ce("span", Th, [
          D(l(Zs), null, {
            default: f(() => [
              D(l(_n), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ah = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, eb = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(Up), S(l(s), {
      class: l(z)(
        "focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        ce("span", Ah, [
          D(l(Zs), null, {
            default: f(() => [
              D(l(jm), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tb = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("span", {
      class: ae(l(z)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), ab = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Np), S(a.value, {
      class: l(z)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), nb = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(Wp), S(l(n), {
      class: l(z)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", t.class)
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ob = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Q(e, t);
    return (s, r) => (v(), y(l(Hp), U(H(l(o))), {
      default: f(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lb = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(Gp), S(l(n), {
      class: l(z)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: f(() => [
        _(o.$slots, "default"),
        D(l(Cr), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sb = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(jp), S(l(s), {
      class: l(z)(
        "z-50 min-w-32 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        a.class
      )
    }), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mh = { class: "text-xs text-slate-600 dark:text-slate-300" }, Vh = /* @__PURE__ */ b({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(e) {
    return (t, a) => (v(), K("div", Mh, "Characters: " + Z(t.count), 1));
  }
}), xn = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, o] of t)
    a[n] = o;
  return a;
}, Ih = {}, Rh = { class: "text-sm text-slate-400 dark:text-slate-500" };
function Fh(e, t) {
  return v(), K("div", Rh, [
    _(e.$slots, "default")
  ]);
}
const Lh = /* @__PURE__ */ xn(Ih, [["render", Fh]]), Nh = { class: "text-sm text-red-600 dark:text-red-400" }, zh = /* @__PURE__ */ b({
  __name: "Error",
  props: {
    error: {}
  },
  setup(e) {
    return (t, a) => Xt((v(), K("div", null, [
      ce("p", Nh, Z(t.error), 1)
    ], 512)), [
      [so, t.error]
    ]);
  }
}), Wh = {}, Kh = { class: "w-full space-y-4 p-1.5" };
function Uh(e, t) {
  return v(), K("div", Kh, [
    _(e.$slots, "default")
  ]);
}
const rb = /* @__PURE__ */ xn(Wh, [["render", Uh]]), Hh = {}, jh = { class: "my-4" };
function Gh(e, t) {
  return v(), K("div", jh, [
    _(e.$slots, "default")
  ]);
}
const qh = /* @__PURE__ */ xn(Hh, [["render", Gh]]), Yh = { class: "grid gap-4 md:grid-cols-2" }, ib = /* @__PURE__ */ b({
  __name: "FormGrid",
  setup(e) {
    return (t, a) => (v(), y(qh, null, {
      default: f(() => [
        ce("div", Yh, [
          _(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), Pr = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(qp), S(a.value, {
      class: l(z)(
        "text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        t.class
      )
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xh = { class: "relative" }, Zh = {
  name: "Base",
  inheritAttrs: !1
}, _t = /* @__PURE__ */ b({
  ...Zh,
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
      return v(), K("div", null, [
        t.label && t.showLabel ? (v(), y(l(Pr), {
          key: 0,
          id: t.id
        }, {
          default: f(() => [
            Y(Z(t.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : X("", !0),
        ce("div", Xh, [
          _(t.$slots, "default"),
          t.showCharacterCount ? (v(), y(l(Vh), {
            key: 0,
            count: (n = t.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : X("", !0)
        ]),
        D(l(Lh), { class: "mt-[2px]" }, {
          default: f(() => [
            Y(Z(t.description), 1)
          ]),
          _: 1
        }),
        D(l(zh), { error: t.error }, null, 8, ["error"])
      ]);
    };
  }
}), Jh = { class: "flex gap-2" }, db = /* @__PURE__ */ b({
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
    return J(o, (s) => {
      a("update:modelValue", s);
    }), (s, r) => (v(), y(l(_t), U(H(s.$props)), {
      default: f(() => [
        ce("div", Jh, [
          D(l(Ac), {
            id: s.id,
            checked: o.value,
            "onUpdate:checked": r[0] || (r[0] = (i) => o.value = i),
            class: "peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground"
          }, {
            default: f(() => [
              D(l(Mc), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: f(() => [
                  D(l(_n), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          s.text ? (v(), y(l(Pr), {
            key: 0,
            id: s.id,
            class: "my-auto"
          }, {
            default: f(() => [
              Y(Z(s.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : X("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), Or = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Q(e, t);
    return (s, r) => (v(), y(l(sf), U(H(l(o))), {
      default: f(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sr = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(rf), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Er = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(df), null, {
      default: f(() => [
        D(l(pf), S({ ...l(s), ...r.$attrs }, {
          class: l(z)(
            "z-50 w-72 rounded-md border border-border bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: f(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ub = /* @__PURE__ */ b({
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
    const a = t, n = e, o = C(() => n.emptyMessage ?? "Option not found"), s = C(() => n.placeholder ?? "Select an option"), r = T(!1), i = T(n.modelValue ?? []), d = (p, h) => p.filter((m) => m.name.toLowerCase().includes(h.toLowerCase())), c = C(() => {
      var p;
      return Array.isArray(i.value) ? i.value.length ? i.value.map((h) => h.name).join(", ") : s.value : typeof i.value == "object" ? i.value.name : (p = n.options.find((h) => h.id === i.value)) == null ? void 0 : p.name;
    }), u = (p) => Array.isArray(i.value) ? i.value.find((h) => h.id === p.id) : typeof i.value == "object" ? i.value.id === p.id : i.value === p.id;
    return J(i, () => {
      Array.isArray(i.value) ? a("update:modelValue", i.value) : a("update:modelValue", i.value.id);
    }), (p, h) => (v(), y(l(_t), U(H(p.$props)), {
      default: f(() => [
        D(l(Or), {
          open: r.value,
          "onUpdate:open": h[2] || (h[2] = (m) => r.value = m)
        }, {
          default: f(() => [
            D(l(Sr), { "as-child": "" }, {
              default: f(() => [
                D(l(Ze), {
                  variant: "outline",
                  role: "combobox",
                  "aria-expanded": r.value,
                  class: "w-[200px] justify-between overflow-hidden"
                }, {
                  default: f(() => [
                    Y(Z(c.value) + " ", 1),
                    D(l(Hm), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
                  ]),
                  _: 1
                }, 8, ["aria-expanded"])
              ]),
              _: 1
            }),
            D(l(Er), { class: "w-[200px] p-0" }, {
              default: f(() => [
                D(l(kr), {
                  multiple: p.multiple,
                  modelValue: i.value,
                  "onUpdate:modelValue": h[1] || (h[1] = (m) => i.value = m),
                  "filter-function": d
                }, {
                  default: f(() => [
                    D(l(Ch), {
                      class: "h-9",
                      placeholder: s.value
                    }, null, 8, ["placeholder"]),
                    D(l(_h), null, {
                      default: f(() => [
                        Y(Z(o.value), 1)
                      ]),
                      _: 1
                    }),
                    D(l(Bh), null, {
                      default: f(() => [
                        D(l(wh), null, {
                          default: f(() => [
                            (v(!0), K(te, null, he(p.options, (m) => (v(), y(l($h), {
                              key: m.id,
                              value: m,
                              onSelect: h[0] || (h[0] = () => {
                                p.multiple || (r.value = !1);
                              })
                            }, {
                              default: f(() => [
                                Y(Z(m.name) + " ", 1),
                                D(l(_n), {
                                  class: ae(l(z)("ml-auto size-4", u(m) ? "opacity-100" : "opacity-0"))
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
}), cb = /* @__PURE__ */ b({
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
    }), s = T();
    return J(s, () => {
      a("update:modelValue", s.value);
    }), ie(() => {
      n.defaultValue && (s.value = n.defaultValue);
    }), (r, i) => (v(), y(l(_t), U(H(r.$props)), {
      default: f(() => [
        D(l(Or), null, {
          default: f(() => [
            D(l(Sr), { "as-child": "" }, {
              default: f(() => [
                D(l(Ze), {
                  variant: "outline",
                  class: ae([
                    "w-[280px] justify-start text-left font-normal text-text"
                  ])
                }, {
                  default: f(() => [
                    D(l(Nm), { class: "mr-2 size-4" }),
                    Y(" " + Z(s.value ? l(o).format(s.value.toDate(l(Bt)())) : r.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            D(l(Er), { class: "w-auto p-0" }, {
              default: f(() => [
                D(l(oh), {
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
var xe = [];
for (var Fn = 0; Fn < 256; ++Fn)
  xe.push((Fn + 256).toString(16).slice(1));
function Qh(e, t = 0) {
  return (xe[e[t + 0]] + xe[e[t + 1]] + xe[e[t + 2]] + xe[e[t + 3]] + "-" + xe[e[t + 4]] + xe[e[t + 5]] + "-" + xe[e[t + 6]] + xe[e[t + 7]] + "-" + xe[e[t + 8]] + xe[e[t + 9]] + "-" + xe[e[t + 10]] + xe[e[t + 11]] + xe[e[t + 12]] + xe[e[t + 13]] + xe[e[t + 14]] + xe[e[t + 15]]).toLowerCase();
}
var Ua, eg = new Uint8Array(16);
function tg() {
  if (!Ua && (Ua = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ua))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ua(eg);
}
var ag = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const kl = {
  randomUUID: ag
};
function ng(e, t, a) {
  if (kl.randomUUID && !t && !e)
    return kl.randomUUID();
  e = e || {};
  var n = e.random || (e.rng || tg)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Qh(n);
}
const og = { class: "flex items-center space-x-2" }, lg = ["src"], sg = ["accept"], pb = /* @__PURE__ */ b({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = "file-upload-" + ng(), s = C(() => i.value ? URL.createObjectURL(i.value) : null), r = a.currentImage ? a.currentImage : a.defaultImage, i = C({
      get: () => a.modelValue,
      set: (u) => n("update:modelValue", u)
    }), d = (u) => {
      i.value = u.target.files[0];
    }, c = () => document.getElementById(o).click();
    return (u, p) => (v(), y(l(_t), U(H(u.$props)), {
      default: f(() => [
        ce("div", og, [
          _(u.$slots, "image", {
            newImage: s.value,
            curImage: l(r)
          }, () => [
            ce("img", {
              src: s.value ?? l(r),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, lg)
          ]),
          ce("input", {
            id: o,
            accept: u.accept,
            hidden: "",
            type: "file",
            onInput: d
          }, null, 40, sg),
          D(l(Ze), {
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
}), rg = ["disabled", "placeholder", "required", "type"], fb = /* @__PURE__ */ b({
  __name: "Input",
  props: /* @__PURE__ */ zn({
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
    const t = Wl(e, "modelValue");
    return (a, n) => (v(), y(l(_t), U(H(a.$props)), {
      default: f(() => [
        Xt(ce("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: ae(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
          }])
        }, null, 10, rg), [
          [Jr, t.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), ig = /* @__PURE__ */ b({
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
    const o = Q(e, t);
    return (s, r) => (v(), y(l(Mf), U(H(l(o))), {
      default: f(({ open: i }) => [
        _(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), dg = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(ov), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ug = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(Rf), S(l(n), {
      class: l(z)(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-start text-sm ring-offset-background transition placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        t.class
      )
    }), {
      default: f(() => [
        _(o.$slots, "default"),
        D(l(lv), { "as-child": "" }, {
          default: f(() => [
            D(l(Yo), {
              class: ae(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cg = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(Ff), null, {
      default: f(() => [
        D(l(jf), S({ ...l(s), ...r.$attrs }, {
          class: l(z)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            r.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: f(() => [
            D(l(vg)),
            D(l(tv), {
              class: ae(
                l(z)(
                  "p-1",
                  r.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: f(() => [
                _(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            D(l(mg))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), vb = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Qf), S({
      class: l(z)("w-full p-1", t.class)
    }, a.value), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pg = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, fg = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(Yf), S(l(n), {
      class: l(z)(
        "focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        t.class
      )
    }), {
      default: f(() => [
        ce("span", pg, [
          D(l(Xf), null, {
            default: f(() => [
              D(l(_n), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        D(l(ar), null, {
          default: f(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mb = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(ar), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hb = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(ev), {
      class: ae(l(z)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), gb = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Gf), S(a.value, {
      class: l(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), vg = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(av), S(l(n), {
      class: l(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          D(l(Wm), { class: "size-4 text-primary" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mg = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(nv), S(l(n), {
      class: l(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          D(l(Yo), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yb = /* @__PURE__ */ b({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = C(() => n.placeholder ?? "Select an option..."), s = T(
      n.modelValue ? n.options.find((r) => r === n.modelValue) : null
    );
    return J(s, () => {
      a("update:modelValue", s.value);
    }), (r, i) => (v(), y(l(_t), U(H(r.$props)), {
      default: f(() => [
        D(l(ig), {
          modelValue: s.value,
          "onUpdate:modelValue": i[0] || (i[0] = (d) => s.value = d)
        }, {
          default: f(({ open: d }) => [
            D(l(ug), { open: d }, {
              default: f(() => [
                D(l(dg), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            D(l(cg), null, {
              default: f(() => [
                (v(!0), K(te, null, he(r.options, (c) => (v(), y(l(fg), { value: c }, {
                  default: f(() => [
                    Y(Z(c), 1)
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
function Tr(e) {
  return oo() ? (lo(e), !0) : !1;
}
function Cn(e) {
  return typeof e == "function" ? e() : l(e);
}
const hg = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const gg = (e) => typeof e < "u", yg = Object.prototype.toString, bg = (e) => yg.call(e) === "[object Object]", Ar = () => {
};
function _g(e, t) {
  function a(...n) {
    return new Promise((o, s) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(s);
    });
  }
  return a;
}
const Mr = (e) => e();
function wg(e = Mr) {
  const t = T(!0);
  function a() {
    t.value = !1;
  }
  function n() {
    t.value = !0;
  }
  const o = (...s) => {
    t.value && e(...s);
  };
  return { isActive: $a(t), pause: a, resume: n, eventFilter: o };
}
function xg(e) {
  return je();
}
function Cg(...e) {
  if (e.length !== 1)
    return Tl(...e);
  const t = e[0];
  return typeof t == "function" ? $a(Nl(() => ({ get: t, set: Ar }))) : T(t);
}
function $g(e, t, a = {}) {
  const {
    eventFilter: n = Mr,
    ...o
  } = a;
  return J(
    e,
    _g(
      n,
      t
    ),
    o
  );
}
function kg(e, t, a = {}) {
  const {
    eventFilter: n,
    ...o
  } = a, { eventFilter: s, pause: r, resume: i, isActive: d } = wg(n);
  return { stop: $g(
    e,
    t,
    {
      ...o,
      eventFilter: s
    }
  ), pause: r, resume: i, isActive: d };
}
function Vr(e, t = !0, a) {
  xg() ? ie(e, a) : t ? e() : oe(e);
}
function Ir(e) {
  var t;
  const a = Cn(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const Yt = hg ? window : void 0;
function Bl(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = Yt) : [t, a, n, o] = e, !t)
    return Ar;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((u) => u()), s.length = 0;
  }, i = (u, p, h, m) => (u.addEventListener(p, h, m), () => u.removeEventListener(p, h, m)), d = J(
    () => [Ir(t), Cn(o)],
    ([u, p]) => {
      if (r(), !u)
        return;
      const h = bg(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((w) => i(u, m, w, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), r();
  };
  return Tr(c), c;
}
function Bg() {
  const e = T(!1), t = je();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function Dg(e) {
  const t = Bg();
  return C(() => (t.value, !!e()));
}
function Pg(e, t = {}) {
  const { window: a = Yt } = t, n = Dg(() => a && "matchMedia" in a && typeof a.matchMedia == "function");
  let o;
  const s = T(!1), r = (c) => {
    s.value = c.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", r) : o.removeListener(r));
  }, d = ge(() => {
    n.value && (i(), o = a.matchMedia(Cn(e)), "addEventListener" in o ? o.addEventListener("change", r) : o.addListener(r), s.value = o.matches);
  });
  return Tr(() => {
    d(), i(), o = void 0;
  }), s;
}
function Og(e) {
  return JSON.parse(JSON.stringify(e));
}
const Ha = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ja = "__vueuse_ssr_handlers__", Sg = /* @__PURE__ */ Eg();
function Eg() {
  return ja in Ha || (Ha[ja] = Ha[ja] || {}), Ha[ja];
}
function Rr(e, t) {
  return Sg[e] || t;
}
function Tg(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Ag = {
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
}, Dl = "vueuse-storage";
function Mg(e, t, a, n = {}) {
  var o;
  const {
    flush: s = "pre",
    deep: r = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: d = !0,
    mergeDefaults: c = !1,
    shallow: u,
    window: p = Yt,
    eventFilter: h,
    onError: m = (B) => {
      console.error(B);
    },
    initOnMounted: w
  } = n, g = (u ? no : T)(typeof t == "function" ? t() : t);
  if (!a)
    try {
      a = Rr("getDefaultStorage", () => {
        var B;
        return (B = Yt) == null ? void 0 : B.localStorage;
      })();
    } catch (B) {
      m(B);
    }
  if (!a)
    return g;
  const x = Cn(t), $ = Tg(x), P = (o = n.serializer) != null ? o : Ag[$], { pause: k, resume: O } = kg(
    g,
    () => V(g.value),
    { flush: s, deep: r, eventFilter: h }
  );
  p && i && Vr(() => {
    Bl(p, "storage", N), Bl(p, Dl, L), w && N();
  }), w || N();
  function E(B, M) {
    p && p.dispatchEvent(new CustomEvent(Dl, {
      detail: {
        key: e,
        oldValue: B,
        newValue: M,
        storageArea: a
      }
    }));
  }
  function V(B) {
    try {
      const M = a.getItem(e);
      if (B == null)
        E(M, null), a.removeItem(e);
      else {
        const I = P.write(B);
        M !== I && (a.setItem(e, I), E(M, I));
      }
    } catch (M) {
      m(M);
    }
  }
  function A(B) {
    const M = B ? B.newValue : a.getItem(e);
    if (M == null)
      return d && x != null && a.setItem(e, P.write(x)), x;
    if (!B && c) {
      const I = P.read(M);
      return typeof c == "function" ? c(I, x) : $ === "object" && !Array.isArray(I) ? { ...x, ...I } : I;
    } else return typeof M != "string" ? M : P.read(M);
  }
  function N(B) {
    if (!(B && B.storageArea !== a)) {
      if (B && B.key == null) {
        g.value = x;
        return;
      }
      if (!(B && B.key !== e)) {
        k();
        try {
          (B == null ? void 0 : B.newValue) !== P.write(g.value) && (g.value = A(B));
        } catch (M) {
          m(M);
        } finally {
          B ? oe(O) : O();
        }
      }
    }
  }
  function L(B) {
    N(B.detail);
  }
  return g;
}
function Fr(e) {
  return Pg("(prefers-color-scheme: dark)", e);
}
function Vg(e = {}) {
  const {
    selector: t = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = Yt,
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
  }, h = Fr({ window: o }), m = C(() => h.value ? "dark" : "light"), w = d || (r == null ? Cg(n) : Mg(r, n, s, { window: o, listenToStorageChanges: i })), g = C(() => w.value === "auto" ? m.value : w.value), x = Rr(
    "updateHTMLAttrs",
    (O, E, V) => {
      const A = typeof O == "string" ? o == null ? void 0 : o.document.querySelector(O) : Ir(O);
      if (!A)
        return;
      let N;
      if (u && (N = o.document.createElement("style"), N.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(N)), E === "class") {
        const L = V.split(/\s/g);
        Object.values(p).flatMap((B) => (B || "").split(/\s/g)).filter(Boolean).forEach((B) => {
          L.includes(B) ? A.classList.add(B) : A.classList.remove(B);
        });
      } else
        A.setAttribute(E, V);
      u && (o.getComputedStyle(N).opacity, document.head.removeChild(N));
    }
  );
  function $(O) {
    var E;
    x(t, a, (E = p[O]) != null ? E : O);
  }
  function P(O) {
    e.onChanged ? e.onChanged(O, $) : $(O);
  }
  J(g, P, { flush: "post", immediate: !0 }), Vr(() => P(g.value));
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
function Ig(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: a = "",
    window: n = Yt
  } = e, o = Vg({
    ...e,
    onChanged: (i, d) => {
      var c;
      e.onChanged ? (c = e.onChanged) == null || c.call(e, i === "dark", d, i) : d(i);
    },
    modes: {
      dark: t,
      light: a
    }
  }), s = C(() => o.system ? o.system.value : Fr({ window: n }).value ? "dark" : "light");
  return C({
    get() {
      return o.value === "dark";
    },
    set(i) {
      const d = i ? "dark" : "light";
      s.value === d ? o.value = "auto" : o.value = d;
    }
  });
}
function Rg(e, t, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: p,
    shouldEmit: h
  } = n, m = je(), w = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let g = c;
  g = g || `update:${t.toString()}`;
  const x = (k) => i ? typeof i == "function" ? i(k) : Og(k) : k, $ = () => gg(e[t]) ? x(e[t]) : p, P = (k) => {
    h ? h(k) && w(g, k) : w(g, k);
  };
  if (d) {
    const k = $(), O = T(k);
    let E = !1;
    return J(
      () => e[t],
      (V) => {
        E || (E = !0, O.value = x(V), oe(() => E = !1));
      }
    ), J(
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
const Fg = ["placeholder"], bb = /* @__PURE__ */ b({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = Rg(e, "modelValue", t, {
      passive: !0
    });
    return (s, r) => (v(), y(l(_t), U(H(s.$props)), {
      default: f(() => [
        Xt(ce("textarea", {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => Ca(o) ? o.value = i : null),
          placeholder: s.placeholder,
          class: ae(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !s.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": s.error
          }])
        }, null, 10, Fg), [
          [Qr, l(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), Lg = /* @__PURE__ */ b({
  __name: "Toggle",
  props: /* @__PURE__ */ zn({
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
  emits: /* @__PURE__ */ zn(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const a = t, n = e, o = Wl(e, "modelValue");
    J(o, () => {
      a("update:modelValue", o.value);
    });
    const s = C(() => {
      const { class: i, ...d } = n;
      return d;
    }), r = Q(s, a);
    return (i, d) => (v(), y(l(_t), U(H(i.$props)), {
      default: f(() => [
        D(l(Ov), S({
          checked: o.value,
          "onUpdate:checked": d[0] || (d[0] = (c) => o.value = c)
        }, l(r), {
          class: l(z)(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent",
            n.class
          )
        }), {
          default: f(({ checked: c }) => [
            D(l(Sv), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: f(() => [
                c ? _(i.$slots, "checked", { key: 0 }) : X("", !0),
                c ? X("", !0) : _(i.$slots, "not-checked", { key: 1 })
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
}), Ng = { class: "my-auto text-slate-400 dark:text-slate-100" }, zg = /* @__PURE__ */ b({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, a) => (v(), K("div", Ng, " Showing " + Z(t.min) + " to " + Z(t.max) + " of " + Z(t.total) + " results ", 1));
  }
}), Wg = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Zp), S(a.value, {
      class: l(z)("flex size-9 items-center justify-center text-text", t.class)
    }), {
      default: f(() => [
        _(n.$slots, "default", {}, () => [
          D(l(Gm))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kg = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Jp), U(H(a.value)), {
      default: f(() => [
        D(l(Ze), {
          class: ae(l(z)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            _(n.$slots, "default", {}, () => [
              D(l(Km), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), Ug = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Qp), U(H(a.value)), {
      default: f(() => [
        D(l(Ze), {
          class: ae(l(z)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            _(n.$slots, "default", {}, () => [
              D(l(Um), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), Hg = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(nf), U(H(a.value)), {
      default: f(() => [
        D(l(Ze), {
          class: ae(l(z)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            _(n.$slots, "default", {}, () => [
              D(l(Cr), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), jg = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(of), U(H(a.value)), {
      default: f(() => [
        D(l(Ze), {
          class: ae(l(z)("size-10 p-0", t.class)),
          as: n.as,
          variant: "outline"
        }, {
          default: f(() => [
            _(n.$slots, "default", {}, () => [
              D(l(zm), { class: "size-4" })
            ])
          ]),
          _: 3
        }, 8, ["class", "as"])
      ]),
      _: 3
    }, 16));
  }
}), _b = /* @__PURE__ */ b({
  __name: "LumuixModeToggle",
  setup(e) {
    const t = Ig({
      selector: "html"
    });
    return (a, n) => (v(), y(Lg, {
      modelValue: l(t),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => Ca(t) ? t.value = o : null)
    }, {
      checked: f(() => [
        D(l(Ym), { class: "m-auto mt-0.5 size-4 text-primary" })
      ]),
      "not-checked": f(() => [
        D(l(Qm), { class: "m-auto mt-0.5 size-4 text-primary" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), wb = /* @__PURE__ */ b({
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
    return (o, s) => (v(), K(te, null, [
      D(l(xa), {
        onClick: n,
        class: ae(t.class)
      }, {
        default: f(() => [
          (v(!0), K(te, null, he(o.headers, (r) => (v(), y(l(nn), {
            key: r.value
          }, {
            default: f(() => [
              o.$slots[`cell_header_${r.value}`] ? _(o.$slots, `cell_header_${r.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (v(), K(te, { key: 1 }, [
                Y(Z(o.row[r.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (v(), y(l(ao), { key: 0 }, {
            default: f(() => [
              _(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : X("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (v(!0), K(te, { key: 0 }, he(o.subRows, (r, i) => (v(), y(l(xa), { key: i }, {
        default: f(() => [
          (v(!0), K(te, null, he(o.headers, (d) => (v(), y(l(nn), {
            key: d.value
          }, {
            default: f(() => [
              o.$slots[`subrow_cell_${d.value}`] ? _(o.$slots, `subrow_cell_${d.value}`, {
                key: 0,
                item: r,
                open: a.value
              }) : (v(), K(te, { key: 1 }, [
                Y(Z("subrow_cell_" + d.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (v(), y(l(ao), { key: 0 }, {
            default: f(() => [
              _(o.$slots, "sub_row_actions", {
                item: o.row,
                open: a.value
              })
            ]),
            _: 3
          })) : X("", !0)
        ]),
        _: 2
      }, 1024))), 128)) : X("", !0)
    ], 64));
  }
}), Gg = { class: "relative w-full overflow-auto" }, qg = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("div", Gg, [
      ce("table", {
        class: ae(l(z)("w-full caption-bottom text-sm", t.class))
      }, [
        _(a.$slots, "default")
      ], 2)
    ]));
  }
}), Yg = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("tbody", {
      class: ae(l(z)("[&_tr:last-child]:border-0", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), nn = /* @__PURE__ */ b({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("td", {
      class: ae(["p-4 align-middle text-text [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Xg = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("th", {
      class: ae(
        l(z)(
          "h-12 px-4 text-left align-middle font-medium text-heading [&:has([role=checkbox])]:pr-0",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Zg = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("thead", {
      class: ae(l(z)("[&_tr]:border-b", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), xb = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("tfoot", {
      class: ae(
        l(z)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), xa = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("tr", {
      class: ae(
        l(z)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          t.class
        )
      )
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), ao = /* @__PURE__ */ b({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("td", {
      class: ae(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Jg = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("caption", {
      class: ae(l(z)("mt-4 text-sm text-sub-text", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Qg = { class: "flex items-center justify-center py-10" }, Cb = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(xa, null, {
      default: f(() => [
        D(nn, S({
          class: l(z)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, a.value), {
          default: f(() => [
            ce("div", Qg, [
              _(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), $b = /* @__PURE__ */ b({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, a) => (v(), y(l(qg), null, {
      default: f(() => [
        t.caption ? (v(), y(l(Jg), { key: 0 }, {
          default: f(() => [
            Y(Z(t.caption), 1)
          ]),
          _: 1
        })) : X("", !0),
        D(l(Zg), null, {
          default: f(() => [
            D(l(xa), null, {
              default: f(() => [
                (v(!0), K(te, null, he(t.headers, (n, o) => (v(), y(l(Xg), null, {
                  default: f(() => [
                    t.$slots[`header_${t.headers[o].value}`] ? _(t.$slots, `header_${t.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (v(), K(te, { key: 1 }, [
                      Y(Z(n.name), 1)
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
        D(l(Yg), null, {
          default: f(() => [
            (v(!0), K(te, null, he(t.rows, (n, o) => (v(), y(l(xa), { key: o }, {
              default: f(() => [
                (v(!0), K(te, null, he(t.headers, (s) => (v(), y(l(nn), {
                  key: s.value
                }, {
                  default: f(() => [
                    t.$slots[`cell_${s.value}`] ? _(t.$slots, `cell_${s.value}`, {
                      key: 0,
                      item: n
                    }) : (v(), K(te, { key: 1 }, [
                      Y(Z(n[s.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                t.$slots.row_actions ? (v(), y(l(ao), { key: 0 }, {
                  default: f(() => [
                    _(t.$slots, "row_actions", { item: n })
                  ]),
                  _: 2
                }, 1024)) : X("", !0)
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
}), ey = { class: "text-text" }, kb = /* @__PURE__ */ b({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const a = t, n = () => a("close");
    return (o, s) => (v(), y(l(Br), { open: o.open }, {
      default: f(() => [
        D(l(mh), { "as-child": "" }, {
          default: f(() => [
            _(o.$slots, "trigger")
          ]),
          _: 3
        }),
        D(l(Dr), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: ae("max-w-" + o.size)
        }, {
          default: f(() => [
            D(l(hh), null, {
              default: f(() => [
                D(l(gh), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.title ? _(o.$slots, "title", { key: 0 }) : (r = o.headerData) != null && r.title ? (v(), K(te, { key: 1 }, [
                        Y(Z(o.headerData.title), 1)
                      ], 64)) : X("", !0)
                    ];
                  }),
                  _: 3
                }),
                D(l(yh), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.description ? _(o.$slots, "description", { key: 0 }) : (r = o.headerData) != null && r.description ? (v(), K(te, { key: 1 }, [
                        Y(Z(o.headerData.description), 1)
                      ], 64)) : X("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            ce("div", ey, [
              o.$slots.content ? _(o.$slots, "content", { key: 0 }) : _(o.$slots, "default", { key: 1 })
            ]),
            D(l(bh), null, {
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
}), ty = { class: "justify-between sm:flex" }, Bb = /* @__PURE__ */ b({
  __name: "LumuixPagination",
  props: {
    data: {},
    as: {}
  },
  setup(e) {
    const t = e, a = () => t.data.current_page === 1 ? t.data.data.length === 0 ? 0 : 1 : t.data.current_page === t.data.last_page ? t.data.total - t.data.data.length : t.data.current_page * t.data.per_page - t.data.per_page, n = () => t.data.current_page === 1 ? t.data.data.length : t.data.current_page === t.data.last_page ? t.data.total : t.data.current_page * t.data.per_page;
    return (o, s) => (v(), K("div", ty, [
      D(l(zg), {
        min: a(),
        max: n(),
        total: o.data.total
      }, null, 8, ["min", "max", "total"]),
      D(l(Xp), null, {
        default: f(() => [
          D(l(af), { class: "flex items-center gap-1" }, {
            default: f(() => [
              D(l(Kg), {
                as: o.as,
                "as-child": "",
                href: o.data.first_page_url
              }, null, 8, ["as", "href"]),
              o.data.prev_page_url ? (v(), y(l(jg), {
                key: 0,
                as: o.as,
                "as-child": "",
                href: o.data.prev_page_url
              }, null, 8, ["as", "href"])) : X("", !0),
              (v(!0), K(te, null, he(o.data.links, (r, i) => (v(), K(te, null, [
                i < 5 ? (v(), K("div", { key: i }, [
                  D(l(Ze), {
                    href: r.url,
                    as: o.as,
                    class: "size-10 p-0",
                    variant: r.active ? "primary" : "outline"
                  }, {
                    default: f(() => [
                      Y(Z(r.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["href", "as", "variant"])
                ])) : X("", !0)
              ], 64))), 256)),
              o.data.links.length > 5 ? (v(), y(l(Wg), { key: 1 })) : X("", !0),
              o.data.next_page_url ? (v(), y(l(Hg), {
                key: 2,
                as: o.as,
                "as-child": "",
                href: o.data.next_page_url
              }, null, 8, ["as", "href"])) : X("", !0),
              D(l(Ug), {
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
}), ay = /* @__PURE__ */ b({
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
    const o = Q(e, t);
    return (s, r) => (v(), y(l(Tv), U(H(l(o))), {
      default: f(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Db = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(Vv), S(l(n), {
      class: l(z)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        t.class
      )
    }), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ny = /* @__PURE__ */ b({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => {
      var o;
      return v(), y(Te((o = a.tab) != null && o.is ? a.tab.is : "a"), {
        href: a.tab.href,
        class: ae([
          a.tab.active ? "bg-white text-primary hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          l(z)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            t.class
          )
        ])
      }, {
        default: f(() => {
          var s;
          return [
            (s = a.tab) != null && s.icon ? (v(), y(Te(a.tab.icon), {
              key: 0,
              class: "size-5"
            })) : X("", !0),
            Y(" " + Z(a.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), Pl = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Av), S(a.value, {
      class: l(z)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        t.class
      )
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pb = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Mv), S({
      class: l(z)(
        "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        t.class
      )
    }, a.value), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oy = {}, ly = { class: "ring-offset-white text-text mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function sy(e, t) {
  return v(), K("div", ly, [
    _(e.$slots, "default")
  ]);
}
const ry = /* @__PURE__ */ xn(oy, [["render", sy]]), Ob = /* @__PURE__ */ b({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(e) {
    const t = e, a = C(
      () => t.tabs.find((n) => n.active)
    );
    return (n, o) => (v(), y(l(ay), null, {
      default: f(() => [
        D(l(Pl), { class: "hidden gap-2 md:block" }, {
          default: f(() => [
            (v(!0), K(te, null, he(n.tabs, (s) => (v(), y(l(ny), {
              key: s.name,
              tab: s
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        D(l(Pl), { class: "flex md:hidden" }, {
          default: f(() => [
            D(l(Dh), null, {
              default: f(() => [
                D(l(Oh), { "as-child": "" }, {
                  default: f(() => [
                    D(l(Ze), { variant: "secondary" }, {
                      default: f(() => {
                        var s;
                        return [
                          Y(Z(((s = a.value) == null ? void 0 : s.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                D(l(Sh), { class: "w-full" }, {
                  default: f(() => [
                    (v(!0), K(te, null, he(n.tabs, (s) => (v(), y(l(Eh), S({
                      key: s.name,
                      ref_for: !0
                    }, s), {
                      default: f(() => [
                        Y(Z(s.name), 1)
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
        D(l(ry), null, {
          default: f(() => [
            _(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), iy = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, Sb = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(gf), S({
      class: l(z)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: d, weekDays: c }) => [
        D(l(my), null, {
          default: f(() => [
            D(l(yy)),
            D(l(hy)),
            D(l(gy))
          ]),
          _: 1
        }),
        ce("div", iy, [
          (v(!0), K(te, null, he(d, (u) => (v(), y(l(cy), {
            key: u.value.toString()
          }, {
            default: f(() => [
              D(l(fy), null, {
                default: f(() => [
                  D(l(Ol), null, {
                    default: f(() => [
                      (v(!0), K(te, null, he(c, (p) => (v(), y(l(vy), { key: p }, {
                        default: f(() => [
                          Y(Z(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              D(l(py), null, {
                default: f(() => [
                  (v(!0), K(te, null, he(u.rows, (p, h) => (v(), y(l(Ol), {
                    key: `weekDate-${h}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), K(te, null, he(p, (m) => (v(), y(l(dy), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          D(l(uy), {
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
}), dy = /* @__PURE__ */ b({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(wf), S({
      class: l(z)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uy = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(Pf), S({
      class: l(z)(
        l(Mt)({ variant: "ghost" }),
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
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cy = /* @__PURE__ */ b({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(_f), S({
      class: l(z)("w-full border-collapse space-y-1", t.class)
    }, l(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), py = /* @__PURE__ */ b({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Bf), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fy = /* @__PURE__ */ b({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(kf), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ol = /* @__PURE__ */ b({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(Df), S({
      class: l(z)("mt-2 flex w-full", t.class)
    }, l(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vy = /* @__PURE__ */ b({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(xf), S({
      class: l(z)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), my = /* @__PURE__ */ b({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(yf), S({
      class: l(z)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(n)), {
      default: f(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hy = /* @__PURE__ */ b({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = C(() => {
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(bf), S({
      class: l(z)("text-sm font-medium text-text", t.class)
    }, l(n)), {
      default: f(({ headingValue: r }) => [
        _(o.$slots, "default", { headingValue: r }, () => [
          Y(Z(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gy = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l(Cf), S({
      class: l(z)(
        l(Mt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          D(l(Zm), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yy = /* @__PURE__ */ b({
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
      const { class: o, ...s } = t;
      return s;
    }), n = le(a);
    return (o, s) => (v(), y(l($f), S({
      class: l(z)(
        l(Mt)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(n)), {
      default: f(() => [
        _(o.$slots, "default", {}, () => [
          D(l(Xm), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Eb = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(rv), S(a.value, {
      class: l(z)(
        "relative shrink-0 bg-border",
        t.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        t.class
      )
    }), {
      default: f(() => [
        t.label ? (v(), K("span", {
          key: 0,
          class: ae(
            l(z)(
              "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background text-xs text-muted-foreground",
              t.orientation === "vertical" ? "w-[1px] px-1 py-2" : "h-[1px] px-2 py-1"
            )
          )
        }, Z(t.label), 3)) : X("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Tb = /* @__PURE__ */ b({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Q(e, t);
    return (s, r) => (v(), y(l(Os), U(H(l(o))), {
      default: f(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ab = /* @__PURE__ */ b({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Sa), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mb = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(Eo), null, {
      default: f(() => [
        D(l(Io), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        D(l(Vo), S({
          class: l(z)(l(by)({ side: r.side }), a.class)
        }, { ...l(s), ...r.$attrs }), {
          default: f(() => [
            _(r.$slots, "default"),
            D(l(Sa), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: f(() => [
                D(l(wn), { class: "h-4 w-4 text-muted-foreground" })
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
}), Vb = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Vs), S({
      class: l(z)("text-sm text-muted-foreground", t.class)
    }, a.value), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ib = /* @__PURE__ */ b({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("div", {
      class: ae(l(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Rb = /* @__PURE__ */ b({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("div", {
      class: ae(l(z)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Fb = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Ms), S({
      class: l(z)("text-lg font-semibold text-foreground", t.class)
    }, a.value), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lb = /* @__PURE__ */ b({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Ss), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), by = Ma(
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
), Nb = /* @__PURE__ */ b({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), K("div", {
      class: ae(l(z)("animate-pulse rounded-md bg-skeleton", t.class))
    }, null, 2));
  }
}), zb = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(_v), S({
      class: l(z)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        a.class
      )
    }, l(s)), {
      default: f(() => [
        D(l(Cv), { class: "relative h-2 w-full grow overflow-hidden rounded-full bg-accent data-[orientation=vertical]:w-2" }, {
          default: f(() => [
            D(l($v), { class: "absolute h-full bg-primary data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (v(!0), K(te, null, he(r.modelValue, (d, c) => (v(), y(l(xv), {
          key: c,
          class: "block size-5 rounded-full border-2 border-primary bg-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), _y = 5, wy = 5e6, lt = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Ln = 0;
function xy() {
  return Ln = (Ln + 1) % Number.MAX_VALUE, Ln.toString();
}
const Nn = /* @__PURE__ */ new Map();
function Sl(e) {
  if (Nn.has(e)) return;
  const t = setTimeout(() => {
    Nn.delete(e), ha({
      type: lt.REMOVE_TOAST,
      toastId: e
    });
  }, wy);
  Nn.set(e, t);
}
const Ve = T({
  toasts: []
});
function ha(e) {
  switch (e.type) {
    case lt.ADD_TOAST:
      Ve.value.toasts = [e.toast, ...Ve.value.toasts].slice(0, _y);
      break;
    case lt.UPDATE_TOAST:
      Ve.value.toasts = Ve.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case lt.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? Sl(t) : Ve.value.toasts.forEach((a) => {
        Sl(a.id);
      }), Ve.value.toasts = Ve.value.toasts.map(
        (a) => a.id === t || t === void 0 ? {
          ...a,
          open: !1
        } : a
      );
      break;
    }
    case lt.REMOVE_TOAST:
      e.toastId === void 0 ? Ve.value.toasts = [] : Ve.value.toasts = Ve.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function Cy() {
  return {
    toasts: C(() => Ve.value.toasts),
    toast: $y,
    dismiss: (e) => ha({ type: lt.DISMISS_TOAST, toastId: e })
  };
}
function $y(e) {
  const t = xy(), a = (o) => ha({
    type: lt.UPDATE_TOAST,
    toast: { ...o, id: t }
  }), n = () => ha({ type: lt.DISMISS_TOAST, toastId: t });
  return ha({
    type: lt.ADD_TOAST,
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
const ky = { class: "flex gap-3" }, By = { class: "grid gap-1" }, Wb = /* @__PURE__ */ b({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = Cy();
    return (a, n) => (v(), y(l(Ey), null, {
      default: f(() => [
        (v(!0), K(te, null, he(l(t), (o) => (v(), y(l(Dy), S({
          key: o.id,
          ref_for: !0
        }, o, { class: "my-1" }), {
          default: f(() => [
            ce("div", ky, [
              (v(), y(Te(o.icon), {
                class: ae(l(z)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              ce("div", By, [
                o.title ? (v(), y(l(Sy), { key: 0 }, {
                  default: f(() => [
                    Y(Z(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : X("", !0),
                o.description ? (v(), K(te, { key: 1 }, [
                  ei(o.description) ? (v(), y(l(El), { key: 0 }, {
                    default: f(() => [
                      (v(), y(Te(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (v(), y(l(El), { key: 1 }, {
                    default: f(() => [
                      Y(Z(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : X("", !0),
                D(l(Oy))
              ]),
              (v(), y(Te(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        D(l(Py))
      ]),
      _: 1
    }));
  }
}), Dy = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(Gv), S(l(s), {
      class: l(z)(l(Ty)({ variant: r.variant }), a.class),
      "onUpdate:open": r.onOpenChange
    }), {
      default: f(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), Py = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Yv), S(a.value, {
      class: l(z)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Kb = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(qv), U(H(a.value)), {
      default: f(() => [
        D(l(Ze), {
          variant: n.variant,
          class: ae(t.class)
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
}), Oy = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(mr), S(a.value, {
      class: l(z)(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: f(() => [
        D(l(wn), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Sy = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Xv), S(a.value, {
      class: l(z)("text-sm font-semibold", t.class)
    }), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), El = /* @__PURE__ */ b({
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
    return (n, o) => (v(), y(l(Zv), S({
      class: l(z)("text-sm opacity-90", t.class)
    }, a.value), {
      default: f(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ey = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(Rv), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ty = Ma(
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
), Ub = /* @__PURE__ */ b({
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
    const o = Q(e, t);
    return (s, r) => (v(), y(l(tm), U(H(l(o))), {
      default: f(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hb = /* @__PURE__ */ b({
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
    }), s = Q(o, n);
    return (r, i) => (v(), y(l(lm), null, {
      default: f(() => [
        D(l(om), S({ ...l(s), ...r.$attrs }, {
          class: l(z)(
            "z-50 overflow-hidden rounded-md border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            a.class
          )
        }), {
          default: f(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), jb = /* @__PURE__ */ b({
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
    return (a, n) => (v(), y(l(Qv), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gb = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (v(), y(l(am), U(H(t)), {
      default: f(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  Ny as Accordion,
  zy as AccordionContent,
  Wy as AccordionItem,
  Ky as AccordionTrigger,
  Uy as Badge,
  _t as Base,
  Ph as BaseDropdownMenuItem,
  Ze as Button,
  oh as Calendar,
  lh as CalendarCell,
  sh as CalendarCellTrigger,
  rh as CalendarGrid,
  ih as CalendarGridBody,
  dh as CalendarGridHead,
  $l as CalendarGridRow,
  uh as CalendarHeadCell,
  ch as CalendarHeader,
  ph as CalendarHeading,
  fh as CalendarNextButton,
  vh as CalendarPrevButton,
  Vh as CharacterCount,
  db as Checkbox,
  wb as CollapsibleTableRow,
  ub as Combobox,
  kr as Command,
  Gy as CommandDialog,
  _h as CommandEmpty,
  wh as CommandGroup,
  Ch as CommandInput,
  $h as CommandItem,
  Bh as CommandList,
  qy as CommandSeparator,
  Yy as CommandShortcut,
  cb as DatePicker,
  Lh as Description,
  Br as Dialog,
  Hy as DialogClose,
  Dr as DialogContent,
  yh as DialogDescription,
  bh as DialogFooter,
  hh as DialogHeader,
  jy as DialogScrollContent,
  gh as DialogTitle,
  mh as DialogTrigger,
  Dh as DropdownMenu,
  Qy as DropdownMenuCheckboxItem,
  Sh as DropdownMenuContent,
  Xy as DropdownMenuGroup,
  Jy as DropdownMenuItem,
  nb as DropdownMenuLabel,
  Eh as DropdownMenuLink,
  Rp as DropdownMenuPortal,
  Zy as DropdownMenuRadioGroup,
  eb as DropdownMenuRadioItem,
  ab as DropdownMenuSeparator,
  tb as DropdownMenuShortcut,
  ob as DropdownMenuSub,
  sb as DropdownMenuSubContent,
  lb as DropdownMenuSubTrigger,
  Oh as DropdownMenuTrigger,
  zh as Error,
  rb as Form,
  qh as FormElement,
  ib as FormGrid,
  pb as ImageUpload,
  fb as Input,
  Pr as Label,
  $b as LumuixDatatable,
  kb as LumuixModal,
  _b as LumuixModeToggle,
  Bb as LumuixPagination,
  Ob as LumuixTabs,
  Xp as Pagination,
  zg as PaginationDetails,
  Wg as PaginationEllipsis,
  Kg as PaginationFirst,
  Ug as PaginationLast,
  af as PaginationList,
  Ly as PaginationListItem,
  Hg as PaginationNext,
  jg as PaginationPrev,
  Or as Popover,
  Er as PopoverContent,
  Sr as PopoverTrigger,
  Sb as RangeCalendar,
  dy as RangeCalendarCell,
  uy as RangeCalendarCellTrigger,
  cy as RangeCalendarGrid,
  py as RangeCalendarGridBody,
  fy as RangeCalendarGridHead,
  Ol as RangeCalendarGridRow,
  vy as RangeCalendarHeadCell,
  my as RangeCalendarHeader,
  hy as RangeCalendarHeading,
  gy as RangeCalendarNextButton,
  yy as RangeCalendarPrevButton,
  yb as Select,
  cg as SelectContent,
  vb as SelectGroup,
  fg as SelectItem,
  mb as SelectItemText,
  hb as SelectLabel,
  ig as SelectRoot,
  mg as SelectScrollDownButton,
  vg as SelectScrollUpButton,
  gb as SelectSeparator,
  ug as SelectTrigger,
  dg as SelectValue,
  Eb as Separator,
  Tb as Sheet,
  Ab as SheetClose,
  Mb as SheetContent,
  Vb as SheetDescription,
  Ib as SheetFooter,
  Rb as SheetHeader,
  Fb as SheetTitle,
  Lb as SheetTrigger,
  Nb as Skeleton,
  zb as Slider,
  ry as TabBaseContent,
  qg as Table,
  Yg as TableBody,
  Jg as TableCaption,
  nn as TableCell,
  Cb as TableEmpty,
  xb as TableFooter,
  Xg as TableHead,
  Zg as TableHeader,
  xa as TableRow,
  ao as TableRowAction,
  Pb as TabsContent,
  ny as TabsItem,
  Pl as TabsList,
  ay as TabsRoot,
  Db as TabsTrigger,
  bb as TextArea,
  Dy as Toast,
  Kb as ToastAction,
  Oy as ToastClose,
  El as ToastDescription,
  Ey as ToastProvider,
  Sy as ToastTitle,
  Py as ToastViewport,
  Wb as Toaster,
  Lg as Toggle,
  Ub as Tooltip,
  Hb as TooltipContent,
  jb as TooltipProvider,
  Gb as TooltipTrigger,
  th as badgeVariants,
  Mt as buttonVariants,
  My as preset,
  by as sheetVariants,
  ah as spinnerSize,
  $y as toast,
  Ty as toastVariants,
  Cy as useToast
};
