import * as uo from "vue";
import { openBlock as f, createElementBlock as V, renderSlot as x, createElementVNode as H, defineComponent as _, ref as M, computed as B, watch as J, Fragment as X, renderList as ve, unref as r, createBlock as y, Transition as Dr, withCtx as m, resolveDynamicComponent as Qe, normalizeClass as ne, toDisplayString as Q, createCommentVNode as te, shallowRef as Bn, getCurrentScope as Pn, onScopeDispose as Dn, shallowReadonly as bt, getCurrentInstance as Me, toRef as Wo, camelize as jo, Comment as Or, mergeProps as E, cloneVNode as Sr, h as dt, toRefs as me, onMounted as ce, normalizeProps as K, guardReactiveProps as G, reactive as Uo, createVNode as P, createTextVNode as Y, withKeys as Ue, withModifiers as we, watchEffect as ge, markRaw as Er, nextTick as ae, watchSyncEffect as Mr, withDirectives as At, vShow as On, isRef as Xt, Teleport as Sn, onBeforeUnmount as En, useSlots as Ar, onBeforeMount as Tr, normalizeStyle as Sa, effectScope as Ko, toHandlerKey as Ir, onUnmounted as Qt, vModelSelect as Vr, inject as Ho, provide as Go, customRef as qo, onBeforeUpdate as Rr, onUpdated as Fr, mergeDefaults as Yo, watchPostEffect as Lr, readonly as Mn, mergeModels as cn, useModel as Zo, vModelDynamic as zr, vModelText as Nr } from "vue";
const Iv = {
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
}, ea = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, o] of t)
    a[n] = o;
  return a;
}, Wr = {}, jr = { class: "p-6" };
function Ur(e, t) {
  return f(), V("div", jr, [
    x(e.$slots, "default")
  ]);
}
const Vv = /* @__PURE__ */ ea(Wr, [["render", Ur]]);
function Jo(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function co(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  ]);
}
const Kr = {
  "aria-live": "assertive",
  class: "pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
}, Hr = { class: "flex w-full flex-col items-center space-y-4 sm:items-end" }, Gr = {
  key: 0,
  class: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
}, qr = { class: "p-4" }, Yr = { class: "flex items-start" }, Zr = { class: "flex-shrink-0" }, Jr = { class: "ml-3 w-0 flex-1 pt-0.5" }, Xr = { class: "text-sm font-medium text-slate-900" }, Qr = { class: "mt-3 flex space-x-7" }, es = ["onClick"], Rv = /* @__PURE__ */ _({
  __name: "Notifications",
  props: {
    success: {},
    errors: {}
  },
  setup(e) {
    const t = e;
    let a = M([]);
    const n = B(() => a.value.length), o = (l) => a.value.splice(l, 1);
    return J(
      () => t.success,
      (l) => {
        l && a.value.push({
          icon: Jo,
          heading: "Success",
          messages: [t.success],
          iconClasses: "text-green-500"
        });
      },
      {
        immediate: !0
      }
    ), J(
      () => t.errors,
      (l) => {
        l && (typeof t.errors == "object" ? a.value.push({
          icon: co,
          heading: "Error",
          messages: Object.values(t.errors),
          iconClasses: "text-red-500"
        }) : a.value.push({
          icon: co,
          heading: "Error",
          messages: [t.errors],
          iconClasses: "text-red-500"
        }));
      },
      {
        immediate: !0
      }
    ), J(
      n,
      (l, s) => {
        (typeof s > "u" || l >= s) && setTimeout(() => a.value.shift(), 5e3);
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (l, s) => (f(), V("div", Kr, [
      H("div", Hr, [
        (f(!0), V(X, null, ve(r(a), (i, u) => (f(), y(Dr, {
          key: u,
          "enter-active-class": "transform ease-out duration-300 transition",
          "enter-from-class": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
          "enter-to-class": "translate-y-0 opacity-100 sm:translate-x-0",
          "leave-active-class": "transition ease-in duration-100",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: m(() => [
            i.messages.length > 0 ? (f(), V("div", Gr, [
              H("div", qr, [
                H("div", Yr, [
                  H("div", Zr, [
                    (f(), y(Qe(i.icon), {
                      class: ne(["size-6", i.iconClasses]),
                      "aria-hidden": "true"
                    }, null, 8, ["class"]))
                  ]),
                  H("div", Jr, [
                    H("p", Xr, Q(i.heading), 1),
                    (f(!0), V(X, null, ve(i.messages, (c, d) => (f(), V("p", {
                      key: d,
                      class: "mt-1 text-sm text-slate-500"
                    }, Q(c), 1))), 128)),
                    H("div", Qr, [
                      H("button", {
                        onClick: (c) => o(u),
                        type: "button",
                        class: "rounded-md bg-white text-sm font-medium text-slate-700 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      }, " Dismiss ", 8, es)
                    ])
                  ])
                ])
              ])
            ])) : te("", !0)
          ]),
          _: 2
        }, 1024))), 128))
      ])
    ]));
  }
});
function Ya(e, t) {
  return e - t * Math.floor(e / t);
}
const Xo = 1721426;
function da(e, t, a, n) {
  t = An(e, t);
  let o = t - 1, l = -2;
  return a <= 2 ? l = 0 : _a(t) && (l = -1), Xo - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + l + n);
}
function _a(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function An(e, t) {
  return e === "BC" ? 1 - t : t;
}
function ts(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const as = {
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
class $t {
  fromJulianDay(t) {
    let a = t, n = a - Xo, o = Math.floor(n / 146097), l = Ya(n, 146097), s = Math.floor(l / 36524), i = Ya(l, 36524), u = Math.floor(i / 1461), c = Ya(i, 1461), d = Math.floor(c / 365), p = o * 400 + s * 100 + u * 4 + d + (s !== 4 && d !== 4 ? 1 : 0), [h, v] = ts(p), b = a - da(h, v, 1, 1), g = 2;
    a < da(h, v, 3, 1) ? g = 0 : _a(v) && (g = 1);
    let w = Math.floor(((b + g) * 12 + 373) / 367), C = a - da(h, v, w, 1) + 1;
    return new Dt(h, v, w, C);
  }
  toJulianDay(t) {
    return da(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return as[_a(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return _a(t.year) ? 366 : 365;
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
const ns = {
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
function kt(e, t) {
  return t = $e(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function os(e, t) {
  return t = $e(t, e.calendar), e = Kt(e), t = Kt(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Za(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function po(e, t) {
  return e = Kt(e), t = Kt(t), e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month;
}
function ls(e, t) {
  return kt(e, el(t));
}
function Qo(e, t) {
  let a = e.calendar.toJulianDay(e), n = Math.ceil(a + 1 - ds(t)) % 7;
  return n < 0 && (n += 7), n;
}
function rs(e) {
  return We(Date.now(), e);
}
function el(e) {
  return ps(rs(e));
}
function tl(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function ss(e, t) {
  return fo(e) - fo(t);
}
function fo(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let Ja = null;
function Tt() {
  return Ja == null && (Ja = new Intl.DateTimeFormat().resolvedOptions().timeZone), Ja;
}
function Kt(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function mo(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const vo = /* @__PURE__ */ new Map();
function is(e) {
  if (Intl.Locale) {
    let a = vo.get(e);
    return a || (a = new Intl.Locale(e).maximize().region, a && vo.set(e, a)), a;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function ds(e) {
  let t = is(e);
  return t && ns[t] || 0;
}
function Bt(e) {
  e = $e(e, new $t());
  let t = An(e.era, e.year);
  return al(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function al(e, t, a, n, o, l, s) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, l, s), i.setUTCFullYear(e, t - 1, a), i.getTime();
}
function pn(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === Tt()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: l, minute: s, second: i } = nl(e, t);
  return al(a, n, o, l, s, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const ho = /* @__PURE__ */ new Map();
function nl(e, t) {
  let a = ho.get(t);
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
  }), ho.set(t, a));
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
const go = 864e5;
function us(e, t, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((l) => cs(e, t, l));
}
function cs(e, t, a) {
  let n = nl(a, t);
  return e.year === n.year && e.month === n.month && e.day === n.day && e.hour === n.hour && e.minute === n.minute && e.second === n.second;
}
function Ne(e, t, a = "compatible") {
  let n = Pt(e);
  if (t === "UTC") return Bt(n);
  if (t === Tt() && a === "compatible") {
    n = $e(n, new $t());
    let u = /* @__PURE__ */ new Date(), c = An(n.era, n.year);
    return u.setFullYear(c, n.month - 1, n.day), u.setHours(n.hour, n.minute, n.second, n.millisecond), u.getTime();
  }
  let o = Bt(n), l = pn(o - go, t), s = pn(o + go, t), i = us(n, t, o - l, o - s);
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
      return Math.min(o - l, o - s);
    case "compatible":
    case "later":
      return Math.max(o - l, o - s);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function ol(e, t, a = "compatible") {
  return new Date(Ne(e, t, a));
}
function We(e, t) {
  let a = pn(e, t), n = new Date(e + a), o = n.getUTCFullYear(), l = n.getUTCMonth() + 1, s = n.getUTCDate(), i = n.getUTCHours(), u = n.getUTCMinutes(), c = n.getUTCSeconds(), d = n.getUTCMilliseconds();
  return new St(o, l, s, t, a, i, u, c, d);
}
function ps(e) {
  return new Dt(e.calendar, e.era, e.year, e.month, e.day);
}
function Pt(e, t) {
  let a = 0, n = 0, o = 0, l = 0;
  if ("timeZone" in e) ({ hour: a, minute: n, second: o, millisecond: l } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: a, minute: n, second: o, millisecond: l } = t), new Ot(e.calendar, e.era, e.year, e.month, e.day, a, n, o, l);
}
function $e(e, t) {
  if (e.calendar.identifier === t.identifier) return e;
  let a = t.fromJulianDay(e.calendar.toJulianDay(e)), n = e.copy();
  return n.calendar = t, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, ut(n), n;
}
function fs(e, t, a) {
  if (e instanceof St)
    return e.timeZone === t ? e : vs(e, t);
  let n = Ne(e, t, a);
  return We(n, t);
}
function ms(e) {
  let t = Bt(e) - e.offset;
  return new Date(t);
}
function vs(e, t) {
  let a = Bt(e) - e.offset;
  return $e(We(a, t), e.calendar);
}
const Wt = 36e5;
function Ea(e, t) {
  let a = e.copy(), n = "hour" in a ? bs(a, t) : 0;
  fn(a, t.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e), a.month += t.months || 0, mn(a), ll(a), a.day += (t.weeks || 0) * 7, a.day += t.days || 0, a.day += n, hs(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
  let o = a.calendar.getYearsInEra(a);
  if (a.year > o) {
    var l, s;
    let u = (l = (s = a.calendar).isInverseEra) === null || l === void 0 ? void 0 : l.call(s, a);
    a.year = o, a.month = u ? 1 : a.calendar.getMonthsInYear(a), a.day = u ? 1 : a.calendar.getDaysInMonth(a);
  }
  a.month < 1 && (a.month = 1, a.day = 1);
  let i = a.calendar.getMonthsInYear(a);
  return a.month > i && (a.month = i, a.day = a.calendar.getDaysInMonth(a)), a.day = Math.max(1, Math.min(a.calendar.getDaysInMonth(a), a.day)), a;
}
function fn(e, t) {
  var a, n;
  !((a = (n = e.calendar).isInverseEra) === null || a === void 0) && a.call(n, e) && (t = -t), e.year += t;
}
function mn(e) {
  for (; e.month < 1; )
    fn(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, fn(e, 1);
}
function hs(e) {
  for (; e.day < 1; )
    e.month--, mn(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, mn(e);
}
function ll(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function ut(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), ll(e);
}
function rl(e) {
  let t = {};
  for (let a in e) typeof e[a] == "number" && (t[a] = -e[a]);
  return t;
}
function sl(e, t) {
  return Ea(e, rl(t));
}
function Tn(e, t) {
  let a = e.copy();
  return t.era != null && (a.era = t.era), t.year != null && (a.year = t.year), t.month != null && (a.month = t.month), t.day != null && (a.day = t.day), ut(a), a;
}
function xa(e, t) {
  let a = e.copy();
  return t.hour != null && (a.hour = t.hour), t.minute != null && (a.minute = t.minute), t.second != null && (a.second = t.second), t.millisecond != null && (a.millisecond = t.millisecond), ys(a), a;
}
function gs(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = ua(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = ua(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = ua(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = ua(e.hour, 24), t;
}
function ys(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function ua(e, t) {
  let a = e % t;
  return a < 0 && (a += t), a;
}
function bs(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, gs(e);
}
function In(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "era": {
      let i = e.calendar.getEras(), u = i.indexOf(e.era);
      if (u < 0) throw new Error("Invalid era: " + e.era);
      u = je(u, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[u], ut(o);
      break;
    }
    case "year":
      var l, s;
      !((l = (s = o.calendar).isInverseEra) === null || l === void 0) && l.call(s, o) && (a = -a), o.year = je(e.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, e);
      break;
    case "month":
      o.month = je(e.month, a, 1, e.calendar.getMonthsInYear(e), n == null ? void 0 : n.round);
      break;
    case "day":
      o.day = je(e.day, a, 1, e.calendar.getDaysInMonth(e), n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(o), ut(o), o;
}
function il(e, t, a, n) {
  let o = e.copy();
  switch (t) {
    case "hour": {
      let l = e.hour, s = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let u = l >= 12;
        s = u ? 12 : 0, i = u ? 23 : 11;
      }
      o.hour = je(l, a, s, i, n == null ? void 0 : n.round);
      break;
    }
    case "minute":
      o.minute = je(e.minute, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "second":
      o.second = je(e.second, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "millisecond":
      o.millisecond = je(e.millisecond, a, 0, 999, n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return o;
}
function je(e, t, a, n, o = !1) {
  if (o) {
    e += Math.sign(t), e < a && (e = n);
    let l = Math.abs(t);
    t > 0 ? e = Math.ceil(e / l) * l : e = Math.floor(e / l) * l, e > n && (e = a);
  } else
    e += t, e < a ? e = n - (a - e - 1) : e > n && (e = a + (e - n - 1));
  return e;
}
function dl(e, t) {
  let a;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let o = Ea(Pt(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    a = Ne(o, e.timeZone);
  } else
    a = Bt(e) - e.offset;
  a += t.milliseconds || 0, a += (t.seconds || 0) * 1e3, a += (t.minutes || 0) * 6e4, a += (t.hours || 0) * 36e5;
  let n = We(a, e.timeZone);
  return $e(n, e.calendar);
}
function ws(e, t) {
  return dl(e, rl(t));
}
function _s(e, t, a, n) {
  switch (t) {
    case "hour": {
      let o = 0, l = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let b = e.hour >= 12;
        o = b ? 12 : 0, l = b ? 23 : 11;
      }
      let s = Pt(e), i = $e(xa(s, {
        hour: o
      }), new $t()), u = [
        Ne(i, e.timeZone, "earlier"),
        Ne(i, e.timeZone, "later")
      ].filter((b) => We(b, e.timeZone).day === i.day)[0], c = $e(xa(s, {
        hour: l
      }), new $t()), d = [
        Ne(c, e.timeZone, "earlier"),
        Ne(c, e.timeZone, "later")
      ].filter((b) => We(b, e.timeZone).day === c.day).pop(), p = Bt(e) - e.offset, h = Math.floor(p / Wt), v = p % Wt;
      return p = je(h, a, Math.floor(u / Wt), Math.floor(d / Wt), n == null ? void 0 : n.round) * Wt + v, $e(We(p, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return il(e, t, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = In(Pt(e), t, a, n), l = Ne(o, e.timeZone);
      return $e(We(l, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function xs(e, t, a) {
  let n = Pt(e), o = xa(Tn(n, t), t);
  if (o.compare(n) === 0) return e;
  let l = Ne(o, e.timeZone, a);
  return $e(We(l, e.timeZone), e.calendar);
}
function Cs(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function ul(e) {
  let t = $e(e, new $t());
  return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function cl(e) {
  return `${ul(e)}T${Cs(e)}`;
}
function $s(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let a = Math.floor(e / 36e5), n = e % 36e5 / 6e4;
  return `${t}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function ks(e) {
  return `${cl(e)}${$s(e.offset)}[${e.timeZone}]`;
}
function Bs(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Vn(e, t, a) {
  Bs(e, t), t.set(e, a);
}
function Rn(e) {
  let t = typeof e[0] == "object" ? e.shift() : new $t(), a;
  if (typeof e[0] == "string") a = e.shift();
  else {
    let s = t.getEras();
    a = s[s.length - 1];
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
var Ps = /* @__PURE__ */ new WeakMap();
class Dt {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Dt(this.calendar, this.era, this.year, this.month, this.day) : new Dt(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return Ea(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return sl(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Tn(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return In(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return ol(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return ul(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return tl(this, t);
  }
  constructor(...t) {
    Vn(this, Ps, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, s] = Rn(t);
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = s, ut(this);
  }
}
var Ds = /* @__PURE__ */ new WeakMap();
class Ot {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ot(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new Ot(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return Ea(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return sl(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Tn(xa(this, t), t);
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
        return In(this, t, a, n);
      default:
        return il(this, t, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, a) {
    return ol(this, t, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return cl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let a = tl(this, t);
    return a === 0 ? ss(this, Pt(t)) : a;
  }
  constructor(...t) {
    Vn(this, Ds, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, s] = Rn(t);
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = s, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, ut(this);
  }
}
var Os = /* @__PURE__ */ new WeakMap();
class St {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new St(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new St(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return dl(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return ws(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, a) {
    return xs(this, t, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, a, n) {
    return _s(this, t, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return ms(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return ks(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - fs(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    Vn(this, Os, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, l, s] = Rn(t), i = t.shift(), u = t.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = l, this.day = s, this.timeZone = i, this.offset = u, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, ut(this);
  }
}
let Xa = /* @__PURE__ */ new Map();
class Le {
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
    return Ms() && (this.resolvedHourCycle || (this.resolvedHourCycle = As(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, a = {}) {
    this.formatter = pl(t, a), this.options = a;
  }
}
const Ss = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function pl(e, t = {}) {
  if (typeof t.hour12 == "boolean" && Es()) {
    t = {
      ...t
    };
    let o = Ss[String(t.hour12)][e.split("-")[0]], l = t.hour12 ? "h12" : "h23";
    t.hourCycle = o ?? l, delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((o, l) => o[0] < l[0] ? -1 : 1).join() : "");
  if (Xa.has(a)) return Xa.get(a);
  let n = new Intl.DateTimeFormat(e, t);
  return Xa.set(a, n), n;
}
let Qa = null;
function Es() {
  return Qa == null && (Qa = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Qa;
}
let en = null;
function Ms() {
  return en == null && (en = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), en;
}
function As(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = pl(e, {
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
function Ts(e, t) {
  const a = [];
  for (let n = 0; n < e.length; n += t)
    a.push(e.slice(n, n + t));
  return a;
}
function Se(e, t = Tt()) {
  return Fn(e) ? e.toDate() : e.toDate(t);
}
function Is(e) {
  return e instanceof Ot;
}
function Fn(e) {
  return e instanceof St;
}
function Vs(e) {
  return Is(e) || Fn(e);
}
function Ht(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), a = e.getMonth() + 1;
    return new Date(t, a, 0).getDate();
  } else
    return e.set({ day: 100 }).day;
}
function ca(e, t) {
  return e.compare(t) < 0;
}
function pa(e, t) {
  return e.compare(t) > 0;
}
function Rs(e, t, a) {
  const n = Qo(e, a);
  return t > n ? e.subtract({ days: n + 7 - t }) : t === n ? e : e.subtract({ days: n - t });
}
function Fs(e, t, a) {
  const n = Qo(e, a), o = t === 0 ? 6 : t - 1;
  return n === o ? e : n > o ? e.add({ days: 7 - n + o }) : e.add({ days: o - n });
}
function yo(e, t) {
  const a = [];
  let n = e.add({ days: 1 });
  const o = t;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function tn(e) {
  const { dateObj: t, weekStartsOn: a, fixedWeeks: n, locale: o } = e, l = Ht(t), s = Array.from({ length: l }, (w, C) => t.set({ day: C + 1 })), i = Kt(t), u = mo(t), c = Rs(i, a, o), d = Fs(u, a, o), p = yo(c.subtract({ days: 1 }), i), h = yo(u, d.add({ days: 1 })), v = p.length + s.length + h.length;
  if (n && v < 42) {
    const w = 42 - v;
    let C = h[h.length - 1];
    C || (C = mo(t));
    const D = Array.from({ length: w }, ($, O) => {
      const S = O + 1;
      return C.add({ days: S });
    });
    h.push(...D);
  }
  const b = p.concat(s, h), g = Ts(b, 7);
  return {
    value: t,
    cells: b,
    rows: g
  };
}
function st(e) {
  const { numberOfMonths: t, dateObj: a, ...n } = e, o = [];
  if (!t || t === 1)
    return o.push(
      tn({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    tn({
      ...n,
      dateObj: a
    })
  );
  for (let l = 1; l < t; l++) {
    const s = a.add({ months: l });
    o.push(
      tn({
        ...n,
        dateObj: s
      })
    );
  }
  return o;
}
const Ls = ["top", "right", "bottom", "left"], et = Math.min, xe = Math.max, Ca = Math.round, fa = Math.floor, tt = (e) => ({
  x: e,
  y: e
}), zs = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ns = {
  start: "end",
  end: "start"
};
function vn(e, t, a) {
  return xe(e, et(t, a));
}
function Ke(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function He(e) {
  return e.split("-")[0];
}
function It(e) {
  return e.split("-")[1];
}
function Ln(e) {
  return e === "x" ? "y" : "x";
}
function zn(e) {
  return e === "y" ? "height" : "width";
}
function at(e) {
  return ["top", "bottom"].includes(He(e)) ? "y" : "x";
}
function Nn(e) {
  return Ln(at(e));
}
function Ws(e, t, a) {
  a === void 0 && (a = !1);
  const n = It(e), o = Nn(e), l = zn(o);
  let s = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (s = $a(s)), [s, $a(s)];
}
function js(e) {
  const t = $a(e);
  return [hn(e), t, hn(t)];
}
function hn(e) {
  return e.replace(/start|end/g, (t) => Ns[t]);
}
function Us(e, t, a) {
  const n = ["left", "right"], o = ["right", "left"], l = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return a ? t ? o : n : t ? n : o;
    case "left":
    case "right":
      return t ? l : s;
    default:
      return [];
  }
}
function Ks(e, t, a, n) {
  const o = It(e);
  let l = Us(He(e), a === "start", n);
  return o && (l = l.map((s) => s + "-" + o), t && (l = l.concat(l.map(hn)))), l;
}
function $a(e) {
  return e.replace(/left|right|bottom|top/g, (t) => zs[t]);
}
function Hs(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function fl(e) {
  return typeof e != "number" ? Hs(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ka(e) {
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
function bo(e, t, a) {
  let {
    reference: n,
    floating: o
  } = e;
  const l = at(t), s = Nn(t), i = zn(s), u = He(t), c = l === "y", d = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, h = n[i] / 2 - o[i] / 2;
  let v;
  switch (u) {
    case "top":
      v = {
        x: d,
        y: n.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      v = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      v = {
        x: n.x - o.width,
        y: p
      };
      break;
    default:
      v = {
        x: n.x,
        y: n.y
      };
  }
  switch (It(t)) {
    case "start":
      v[s] -= h * (a && c ? -1 : 1);
      break;
    case "end":
      v[s] += h * (a && c ? -1 : 1);
      break;
  }
  return v;
}
const Gs = async (e, t, a) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: l = [],
    platform: s
  } = a, i = l.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: p
  } = bo(c, n, u), h = n, v = {}, b = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: w,
      fn: C
    } = i[g], {
      x: D,
      y: $,
      data: O,
      reset: S
    } = await C({
      x: d,
      y: p,
      initialPlacement: n,
      placement: h,
      strategy: o,
      middlewareData: v,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = D ?? d, p = $ ?? p, v = {
      ...v,
      [w]: {
        ...v[w],
        ...O
      }
    }, S && b <= 50 && (b++, typeof S == "object" && (S.placement && (h = S.placement), S.rects && (c = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: d,
      y: p
    } = bo(c, h, u)), g = -1);
  }
  return {
    x: d,
    y: p,
    placement: h,
    strategy: o,
    middlewareData: v
  };
};
async function Gt(e, t) {
  var a;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: l,
    rects: s,
    elements: i,
    strategy: u
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: h = !1,
    padding: v = 0
  } = Ke(t, e), b = fl(v), w = i[h ? p === "floating" ? "reference" : "floating" : p], C = ka(await l.getClippingRect({
    element: (a = await (l.isElement == null ? void 0 : l.isElement(w))) == null || a ? w : w.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: u
  })), D = p === "floating" ? {
    x: n,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, $ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(i.floating)), O = await (l.isElement == null ? void 0 : l.isElement($)) ? await (l.getScale == null ? void 0 : l.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = ka(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: D,
    offsetParent: $,
    strategy: u
  }) : D);
  return {
    top: (C.top - S.top + b.top) / O.y,
    bottom: (S.bottom - C.bottom + b.bottom) / O.y,
    left: (C.left - S.left + b.left) / O.x,
    right: (S.right - C.right + b.right) / O.x
  };
}
const qs = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: a,
      y: n,
      placement: o,
      rects: l,
      platform: s,
      elements: i,
      middlewareData: u
    } = t, {
      element: c,
      padding: d = 0
    } = Ke(e, t) || {};
    if (c == null)
      return {};
    const p = fl(d), h = {
      x: a,
      y: n
    }, v = Nn(o), b = zn(v), g = await s.getDimensions(c), w = v === "y", C = w ? "top" : "left", D = w ? "bottom" : "right", $ = w ? "clientHeight" : "clientWidth", O = l.reference[b] + l.reference[v] - h[v] - l.floating[b], S = h[v] - l.reference[v], T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let A = T ? T[$] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(T))) && (A = i.floating[$] || l.floating[b]);
    const z = O / 2 - S / 2, j = A / 2 - g[b] / 2 - 1, k = et(p[C], j), I = et(p[D], j), R = k, ee = A - g[b] - I, Z = A / 2 - g[b] / 2 + z, N = vn(R, Z, ee), U = !u.arrow && It(o) != null && Z !== N && l.reference[b] / 2 - (Z < R ? k : I) - g[b] / 2 < 0, le = U ? Z < R ? Z - R : Z - ee : 0;
    return {
      [v]: h[v] + le,
      data: {
        [v]: N,
        centerOffset: Z - N - le,
        ...U && {
          alignmentOffset: le
        }
      },
      reset: U
    };
  }
}), Ys = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var a, n;
      const {
        placement: o,
        middlewareData: l,
        rects: s,
        initialPlacement: i,
        platform: u,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: p = !0,
        fallbackPlacements: h,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: g = !0,
        ...w
      } = Ke(e, t);
      if ((a = l.arrow) != null && a.alignmentOffset)
        return {};
      const C = He(o), D = at(i), $ = He(i) === i, O = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), S = h || ($ || !g ? [$a(i)] : js(i)), T = b !== "none";
      !h && T && S.push(...Ks(i, g, b, O));
      const A = [i, ...S], z = await Gt(t, w), j = [];
      let k = ((n = l.flip) == null ? void 0 : n.overflows) || [];
      if (d && j.push(z[C]), p) {
        const Z = Ws(o, s, O);
        j.push(z[Z[0]], z[Z[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: j
      }], !j.every((Z) => Z <= 0)) {
        var I, R;
        const Z = (((I = l.flip) == null ? void 0 : I.index) || 0) + 1, N = A[Z];
        if (N)
          return {
            data: {
              index: Z,
              overflows: k
            },
            reset: {
              placement: N
            }
          };
        let U = (R = k.filter((le) => le.overflows[0] <= 0).sort((le, ue) => le.overflows[1] - ue.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!U)
          switch (v) {
            case "bestFit": {
              var ee;
              const le = (ee = k.filter((ue) => {
                if (T) {
                  const pe = at(ue.placement);
                  return pe === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  pe === "y";
                }
                return !0;
              }).map((ue) => [ue.placement, ue.overflows.filter((pe) => pe > 0).reduce((pe, ke) => pe + ke, 0)]).sort((ue, pe) => ue[1] - pe[1])[0]) == null ? void 0 : ee[0];
              le && (U = le);
              break;
            }
            case "initialPlacement":
              U = i;
              break;
          }
        if (o !== U)
          return {
            reset: {
              placement: U
            }
          };
      }
      return {};
    }
  };
};
function wo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function _o(e) {
  return Ls.some((t) => e[t] >= 0);
}
const Zs = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: a
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = Ke(e, t);
      switch (n) {
        case "referenceHidden": {
          const l = await Gt(t, {
            ...o,
            elementContext: "reference"
          }), s = wo(l, a.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: _o(s)
            }
          };
        }
        case "escaped": {
          const l = await Gt(t, {
            ...o,
            altBoundary: !0
          }), s = wo(l, a.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: _o(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Js(e, t) {
  const {
    placement: a,
    platform: n,
    elements: o
  } = e, l = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), s = He(a), i = It(a), u = at(a) === "y", c = ["left", "top"].includes(s) ? -1 : 1, d = l && u ? -1 : 1, p = Ke(t, e);
  let {
    mainAxis: h,
    crossAxis: v,
    alignmentAxis: b
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof b == "number" && (v = i === "end" ? b * -1 : b), u ? {
    x: v * d,
    y: h * c
  } : {
    x: h * c,
    y: v * d
  };
}
const Xs = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var a, n;
      const {
        x: o,
        y: l,
        placement: s,
        middlewareData: i
      } = t, u = await Js(t, e);
      return s === ((a = i.offset) == null ? void 0 : a.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: o + u.x,
        y: l + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, Qs = function(e) {
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
        crossAxis: s = !1,
        limiter: i = {
          fn: (w) => {
            let {
              x: C,
              y: D
            } = w;
            return {
              x: C,
              y: D
            };
          }
        },
        ...u
      } = Ke(e, t), c = {
        x: a,
        y: n
      }, d = await Gt(t, u), p = at(He(o)), h = Ln(p);
      let v = c[h], b = c[p];
      if (l) {
        const w = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", D = v + d[w], $ = v - d[C];
        v = vn(D, v, $);
      }
      if (s) {
        const w = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", D = b + d[w], $ = b - d[C];
        b = vn(D, b, $);
      }
      const g = i.fn({
        ...t,
        [h]: v,
        [p]: b
      });
      return {
        ...g,
        data: {
          x: g.x - a,
          y: g.y - n,
          enabled: {
            [h]: l,
            [p]: s
          }
        }
      };
    }
  };
}, ei = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: a,
        y: n,
        placement: o,
        rects: l,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: c = !0
      } = Ke(e, t), d = {
        x: a,
        y: n
      }, p = at(o), h = Ln(p);
      let v = d[h], b = d[p];
      const g = Ke(i, t), w = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const $ = h === "y" ? "height" : "width", O = l.reference[h] - l.floating[$] + w.mainAxis, S = l.reference[h] + l.reference[$] - w.mainAxis;
        v < O ? v = O : v > S && (v = S);
      }
      if (c) {
        var C, D;
        const $ = h === "y" ? "width" : "height", O = ["top", "left"].includes(He(o)), S = l.reference[p] - l.floating[$] + (O && ((C = s.offset) == null ? void 0 : C[p]) || 0) + (O ? 0 : w.crossAxis), T = l.reference[p] + l.reference[$] + (O ? 0 : ((D = s.offset) == null ? void 0 : D[p]) || 0) - (O ? w.crossAxis : 0);
        b < S ? b = S : b > T && (b = T);
      }
      return {
        [h]: v,
        [p]: b
      };
    }
  };
}, ti = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var a, n;
      const {
        placement: o,
        rects: l,
        platform: s,
        elements: i
      } = t, {
        apply: u = () => {
        },
        ...c
      } = Ke(e, t), d = await Gt(t, c), p = He(o), h = It(o), v = at(o) === "y", {
        width: b,
        height: g
      } = l.floating;
      let w, C;
      p === "top" || p === "bottom" ? (w = p, C = h === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, w = h === "end" ? "top" : "bottom");
      const D = g - d.top - d.bottom, $ = b - d.left - d.right, O = et(g - d[w], D), S = et(b - d[C], $), T = !t.middlewareData.shift;
      let A = O, z = S;
      if ((a = t.middlewareData.shift) != null && a.enabled.x && (z = $), (n = t.middlewareData.shift) != null && n.enabled.y && (A = D), T && !h) {
        const k = xe(d.left, 0), I = xe(d.right, 0), R = xe(d.top, 0), ee = xe(d.bottom, 0);
        v ? z = b - 2 * (k !== 0 || I !== 0 ? k + I : xe(d.left, d.right)) : A = g - 2 * (R !== 0 || ee !== 0 ? R + ee : xe(d.top, d.bottom));
      }
      await u({
        ...t,
        availableWidth: z,
        availableHeight: A
      });
      const j = await s.getDimensions(i.floating);
      return b !== j.width || g !== j.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ma() {
  return typeof window < "u";
}
function pt(e) {
  return Wn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ce(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ae(e) {
  var t;
  return (t = (Wn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Wn(e) {
  return Ma() ? e instanceof Node || e instanceof Ce(e).Node : !1;
}
function Pe(e) {
  return Ma() ? e instanceof Element || e instanceof Ce(e).Element : !1;
}
function Ee(e) {
  return Ma() ? e instanceof HTMLElement || e instanceof Ce(e).HTMLElement : !1;
}
function xo(e) {
  return !Ma() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ce(e).ShadowRoot;
}
function ta(e) {
  const {
    overflow: t,
    overflowX: a,
    overflowY: n,
    display: o
  } = De(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + a) && !["inline", "contents"].includes(o);
}
function ai(e) {
  return ["table", "td", "th"].includes(pt(e));
}
function Aa(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function jn(e) {
  const t = Un(), a = Pe(e) ? De(e) : e;
  return a.transform !== "none" || a.perspective !== "none" || (a.containerType ? a.containerType !== "normal" : !1) || !t && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !t && (a.filter ? a.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function ni(e) {
  let t = nt(e);
  for (; Ee(t) && !Et(t); ) {
    if (jn(t))
      return t;
    if (Aa(t))
      return null;
    t = nt(t);
  }
  return null;
}
function Un() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Et(e) {
  return ["html", "body", "#document"].includes(pt(e));
}
function De(e) {
  return Ce(e).getComputedStyle(e);
}
function Ta(e) {
  return Pe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function nt(e) {
  if (pt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    xo(e) && e.host || // Fallback.
    Ae(e)
  );
  return xo(t) ? t.host : t;
}
function ml(e) {
  const t = nt(e);
  return Et(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ee(t) && ta(t) ? t : ml(t);
}
function qt(e, t, a) {
  var n;
  t === void 0 && (t = []), a === void 0 && (a = !0);
  const o = ml(e), l = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Ce(o);
  if (l) {
    const i = gn(s);
    return t.concat(s, s.visualViewport || [], ta(o) ? o : [], i && a ? qt(i) : []);
  }
  return t.concat(o, qt(o, [], a));
}
function gn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function vl(e) {
  const t = De(e);
  let a = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = Ee(e), l = o ? e.offsetWidth : a, s = o ? e.offsetHeight : n, i = Ca(a) !== l || Ca(n) !== s;
  return i && (a = l, n = s), {
    width: a,
    height: n,
    $: i
  };
}
function Kn(e) {
  return Pe(e) ? e : e.contextElement;
}
function xt(e) {
  const t = Kn(e);
  if (!Ee(t))
    return tt(1);
  const a = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: l
  } = vl(t);
  let s = (l ? Ca(a.width) : a.width) / n, i = (l ? Ca(a.height) : a.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const oi = /* @__PURE__ */ tt(0);
function hl(e) {
  const t = Ce(e);
  return !Un() || !t.visualViewport ? oi : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function li(e, t, a) {
  return t === void 0 && (t = !1), !a || t && a !== Ce(e) ? !1 : t;
}
function ct(e, t, a, n) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  const o = e.getBoundingClientRect(), l = Kn(e);
  let s = tt(1);
  t && (n ? Pe(n) && (s = xt(n)) : s = xt(e));
  const i = li(l, a, n) ? hl(l) : tt(0);
  let u = (o.left + i.x) / s.x, c = (o.top + i.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (l) {
    const h = Ce(l), v = n && Pe(n) ? Ce(n) : n;
    let b = h, g = gn(b);
    for (; g && n && v !== b; ) {
      const w = xt(g), C = g.getBoundingClientRect(), D = De(g), $ = C.left + (g.clientLeft + parseFloat(D.paddingLeft)) * w.x, O = C.top + (g.clientTop + parseFloat(D.paddingTop)) * w.y;
      u *= w.x, c *= w.y, d *= w.x, p *= w.y, u += $, c += O, b = Ce(g), g = gn(b);
    }
  }
  return ka({
    width: d,
    height: p,
    x: u,
    y: c
  });
}
function ri(e) {
  let {
    elements: t,
    rect: a,
    offsetParent: n,
    strategy: o
  } = e;
  const l = o === "fixed", s = Ae(n), i = t ? Aa(t.floating) : !1;
  if (n === s || i && l)
    return a;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = tt(1);
  const d = tt(0), p = Ee(n);
  if ((p || !p && !l) && ((pt(n) !== "body" || ta(s)) && (u = Ta(n)), Ee(n))) {
    const h = ct(n);
    c = xt(n), d.x = h.x + n.clientLeft, d.y = h.y + n.clientTop;
  }
  return {
    width: a.width * c.x,
    height: a.height * c.y,
    x: a.x * c.x - u.scrollLeft * c.x + d.x,
    y: a.y * c.y - u.scrollTop * c.y + d.y
  };
}
function si(e) {
  return Array.from(e.getClientRects());
}
function yn(e, t) {
  const a = Ta(e).scrollLeft;
  return t ? t.left + a : ct(Ae(e)).left + a;
}
function ii(e) {
  const t = Ae(e), a = Ta(e), n = e.ownerDocument.body, o = xe(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), l = xe(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -a.scrollLeft + yn(e);
  const i = -a.scrollTop;
  return De(n).direction === "rtl" && (s += xe(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: l,
    x: s,
    y: i
  };
}
function di(e, t) {
  const a = Ce(e), n = Ae(e), o = a.visualViewport;
  let l = n.clientWidth, s = n.clientHeight, i = 0, u = 0;
  if (o) {
    l = o.width, s = o.height;
    const c = Un();
    (!c || c && t === "fixed") && (i = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: l,
    height: s,
    x: i,
    y: u
  };
}
function ui(e, t) {
  const a = ct(e, !0, t === "fixed"), n = a.top + e.clientTop, o = a.left + e.clientLeft, l = Ee(e) ? xt(e) : tt(1), s = e.clientWidth * l.x, i = e.clientHeight * l.y, u = o * l.x, c = n * l.y;
  return {
    width: s,
    height: i,
    x: u,
    y: c
  };
}
function Co(e, t, a) {
  let n;
  if (t === "viewport")
    n = di(e, a);
  else if (t === "document")
    n = ii(Ae(e));
  else if (Pe(t))
    n = ui(t, a);
  else {
    const o = hl(e);
    n = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return ka(n);
}
function gl(e, t) {
  const a = nt(e);
  return a === t || !Pe(a) || Et(a) ? !1 : De(a).position === "fixed" || gl(a, t);
}
function ci(e, t) {
  const a = t.get(e);
  if (a)
    return a;
  let n = qt(e, [], !1).filter((i) => Pe(i) && pt(i) !== "body"), o = null;
  const l = De(e).position === "fixed";
  let s = l ? nt(e) : e;
  for (; Pe(s) && !Et(s); ) {
    const i = De(s), u = jn(s);
    !u && i.position === "fixed" && (o = null), (l ? !u && !o : !u && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ta(s) && !u && gl(e, s)) ? n = n.filter((d) => d !== s) : o = i, s = nt(s);
  }
  return t.set(e, n), n;
}
function pi(e) {
  let {
    element: t,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = e;
  const s = [...a === "clippingAncestors" ? Aa(t) ? [] : ci(t, this._c) : [].concat(a), n], i = s[0], u = s.reduce((c, d) => {
    const p = Co(t, d, o);
    return c.top = xe(p.top, c.top), c.right = et(p.right, c.right), c.bottom = et(p.bottom, c.bottom), c.left = xe(p.left, c.left), c;
  }, Co(t, i, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function fi(e) {
  const {
    width: t,
    height: a
  } = vl(e);
  return {
    width: t,
    height: a
  };
}
function mi(e, t, a) {
  const n = Ee(t), o = Ae(t), l = a === "fixed", s = ct(e, !0, l, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = tt(0);
  if (n || !n && !l)
    if ((pt(t) !== "body" || ta(o)) && (i = Ta(t)), n) {
      const v = ct(t, !0, l, t);
      u.x = v.x + t.clientLeft, u.y = v.y + t.clientTop;
    } else o && (u.x = yn(o));
  let c = 0, d = 0;
  if (o && !n && !l) {
    const v = o.getBoundingClientRect();
    d = v.top + i.scrollTop, c = v.left + i.scrollLeft - // RTL <body> scrollbar.
    yn(o, v);
  }
  const p = s.left + i.scrollLeft - u.x - c, h = s.top + i.scrollTop - u.y - d;
  return {
    x: p,
    y: h,
    width: s.width,
    height: s.height
  };
}
function an(e) {
  return De(e).position === "static";
}
function $o(e, t) {
  if (!Ee(e) || De(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let a = e.offsetParent;
  return Ae(e) === a && (a = a.ownerDocument.body), a;
}
function yl(e, t) {
  const a = Ce(e);
  if (Aa(e))
    return a;
  if (!Ee(e)) {
    let o = nt(e);
    for (; o && !Et(o); ) {
      if (Pe(o) && !an(o))
        return o;
      o = nt(o);
    }
    return a;
  }
  let n = $o(e, t);
  for (; n && ai(n) && an(n); )
    n = $o(n, t);
  return n && Et(n) && an(n) && !jn(n) ? a : n || ni(e) || a;
}
const vi = async function(e) {
  const t = this.getOffsetParent || yl, a = this.getDimensions, n = await a(e.floating);
  return {
    reference: mi(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function hi(e) {
  return De(e).direction === "rtl";
}
const gi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ri,
  getDocumentElement: Ae,
  getClippingRect: pi,
  getOffsetParent: yl,
  getElementRects: vi,
  getClientRects: si,
  getDimensions: fi,
  getScale: xt,
  isElement: Pe,
  isRTL: hi
};
function yi(e, t) {
  let a = null, n;
  const o = Ae(e);
  function l() {
    var i;
    clearTimeout(n), (i = a) == null || i.disconnect(), a = null;
  }
  function s(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), l();
    const {
      left: c,
      top: d,
      width: p,
      height: h
    } = e.getBoundingClientRect();
    if (i || t(), !p || !h)
      return;
    const v = fa(d), b = fa(o.clientWidth - (c + p)), g = fa(o.clientHeight - (d + h)), w = fa(c), D = {
      rootMargin: -v + "px " + -b + "px " + -g + "px " + -w + "px",
      threshold: xe(0, et(1, u)) || 1
    };
    let $ = !0;
    function O(S) {
      const T = S[0].intersectionRatio;
      if (T !== u) {
        if (!$)
          return s();
        T ? s(!1, T) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      $ = !1;
    }
    try {
      a = new IntersectionObserver(O, {
        ...D,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      a = new IntersectionObserver(O, D);
    }
    a.observe(e);
  }
  return s(!0), l;
}
function bi(e, t, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: l = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, c = Kn(e), d = o || l ? [...c ? qt(c) : [], ...qt(t)] : [];
  d.forEach((C) => {
    o && C.addEventListener("scroll", a, {
      passive: !0
    }), l && C.addEventListener("resize", a);
  });
  const p = c && i ? yi(c, a) : null;
  let h = -1, v = null;
  s && (v = new ResizeObserver((C) => {
    let [D] = C;
    D && D.target === c && v && (v.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var $;
      ($ = v) == null || $.observe(t);
    })), a();
  }), c && !u && v.observe(c), v.observe(t));
  let b, g = u ? ct(e) : null;
  u && w();
  function w() {
    const C = ct(e);
    g && (C.x !== g.x || C.y !== g.y || C.width !== g.width || C.height !== g.height) && a(), g = C, b = requestAnimationFrame(w);
  }
  return a(), () => {
    var C;
    d.forEach((D) => {
      o && D.removeEventListener("scroll", a), l && D.removeEventListener("resize", a);
    }), p == null || p(), (C = v) == null || C.disconnect(), v = null, u && cancelAnimationFrame(b);
  };
}
const wi = Xs, _i = Qs, ko = Ys, xi = ti, Ci = Zs, $i = qs, ki = ei, Bi = (e, t, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: gi,
    ...a
  }, l = {
    ...o.platform,
    _c: n
  };
  return Gs(e, t, {
    ...o,
    platform: l
  });
};
function Pi(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function bn(e) {
  if (Pi(e)) {
    const t = e.$el;
    return Wn(t) && pt(t) === "#comment" ? null : t;
  }
  return e;
}
function _t(e) {
  return typeof e == "function" ? e() : r(e);
}
function Di(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const a = bn(_t(e.element));
      return a == null ? {} : $i({
        element: a,
        padding: e.padding
      }).fn(t);
    }
  };
}
function bl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Bo(e, t) {
  const a = bl(e);
  return Math.round(t * a) / a;
}
function Oi(e, t, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = B(() => {
    var A;
    return (A = _t(a.open)) != null ? A : !0;
  }), l = B(() => _t(a.middleware)), s = B(() => {
    var A;
    return (A = _t(a.placement)) != null ? A : "bottom";
  }), i = B(() => {
    var A;
    return (A = _t(a.strategy)) != null ? A : "absolute";
  }), u = B(() => {
    var A;
    return (A = _t(a.transform)) != null ? A : !0;
  }), c = B(() => bn(e.value)), d = B(() => bn(t.value)), p = M(0), h = M(0), v = M(i.value), b = M(s.value), g = Bn({}), w = M(!1), C = B(() => {
    const A = {
      position: v.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return A;
    const z = Bo(d.value, p.value), j = Bo(d.value, h.value);
    return u.value ? {
      ...A,
      transform: "translate(" + z + "px, " + j + "px)",
      ...bl(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: v.value,
      left: z + "px",
      top: j + "px"
    };
  });
  let D;
  function $() {
    if (c.value == null || d.value == null)
      return;
    const A = o.value;
    Bi(c.value, d.value, {
      middleware: l.value,
      placement: s.value,
      strategy: i.value
    }).then((z) => {
      p.value = z.x, h.value = z.y, v.value = z.strategy, b.value = z.placement, g.value = z.middlewareData, w.value = A !== !1;
    });
  }
  function O() {
    typeof D == "function" && (D(), D = void 0);
  }
  function S() {
    if (O(), n === void 0) {
      $();
      return;
    }
    if (c.value != null && d.value != null) {
      D = n(c.value, d.value, $);
      return;
    }
  }
  function T() {
    o.value || (w.value = !1);
  }
  return J([l, s, i, o], $, {
    flush: "sync"
  }), J([c, d], S, {
    flush: "sync"
  }), J(o, T, {
    flush: "sync"
  }), Pn() && Dn(O), {
    x: bt(p),
    y: bt(h),
    strategy: bt(v),
    placement: bt(b),
    middlewareData: bt(g),
    isPositioned: bt(w),
    floatingStyles: C,
    update: $
  };
}
function se(e, t) {
  const a = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(a);
  return [(o) => {
    const l = Ho(n, o);
    if (l || l === null)
      return l;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (Go(n, o), o)];
}
function Hn(e, t, a) {
  const n = a.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(o);
}
function Po(e, t = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(e, t), a);
}
function Si(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ei = function e(t, a) {
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
      var s = l[o];
      if (!e(t[s], a[s])) return !1;
    }
    return !0;
  }
  return t !== t && a !== a;
};
const it = /* @__PURE__ */ Si(Ei);
function Mi(e) {
  return e == null;
}
function Ai(e) {
  const { defaultValue: t, defaultPlaceholder: a, granularity: n = "day" } = e;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (a)
    return a.copy();
  const o = /* @__PURE__ */ new Date(), l = o.getFullYear(), s = o.getMonth() + 1, i = o.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new Ot(l, s, i, 0, 0, 0) : new Dt(l, s, i);
}
function Ti(e) {
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
function Ii(e, t) {
  var a;
  const n = Bn();
  return ge(() => {
    n.value = e();
  }, {
    ...t,
    flush: (a = void 0) != null ? a : "sync"
  }), Mn(n);
}
function Ia(e) {
  return Pn() ? (Dn(e), !0) : !1;
}
function Vi(e) {
  let t = !1, a;
  const n = Ko(!0);
  return (...o) => (t || (a = n.run(() => e(...o)), t = !0), a);
}
function wl(e) {
  let t = 0, a, n;
  const o = () => {
    t -= 1, n && t <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...l) => (t += 1, a || (n = Ko(!0), a = n.run(() => e(...l))), Ia(o), a);
}
function Xe(e) {
  return typeof e == "function" ? e() : r(e);
}
const ot = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ri = (e) => typeof e < "u", Fi = (e) => e != null, Li = Object.prototype.toString, zi = (e) => Li.call(e) === "[object Object]", Ni = () => {
}, Do = /* @__PURE__ */ Wi();
function Wi() {
  var e, t;
  return ot && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function ji(e) {
  return Me();
}
function Ui(e, t = 1e4) {
  return qo((a, n) => {
    let o = Xe(e), l;
    const s = () => setTimeout(() => {
      o = Xe(e), n();
    }, Xe(t));
    return Ia(() => {
      clearTimeout(l);
    }), {
      get() {
        return a(), o;
      },
      set(i) {
        o = i, n(), clearTimeout(l), l = s();
      }
    };
  });
}
function Ki(e, t) {
  ji() && En(e, t);
}
function Te(e) {
  var t;
  const a = Xe(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const Gn = ot ? window : void 0;
function Ba(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = Gn) : [t, a, n, o] = e, !t)
    return Ni;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const l = [], s = () => {
    l.forEach((d) => d()), l.length = 0;
  }, i = (d, p, h, v) => (d.addEventListener(p, h, v), () => d.removeEventListener(p, h, v)), u = J(
    () => [Te(t), Xe(o)],
    ([d, p]) => {
      if (s(), !d)
        return;
      const h = zi(p) ? { ...p } : p;
      l.push(
        ...a.flatMap((v) => n.map((b) => i(d, v, b, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), s();
  };
  return Ia(c), c;
}
function Hi(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Gi(...e) {
  let t, a, n = {};
  e.length === 3 ? (t = e[0], a = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, a = e[0], n = e[1]) : (t = e[0], a = e[1]) : (t = !0, a = e[0]);
  const {
    target: o = Gn,
    eventName: l = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = n, u = Hi(t);
  return Ba(o, l, (c) => {
    c.repeat && Xe(i) || u(c) && a(c);
  }, s);
}
function _l() {
  const e = M(!1), t = Me();
  return t && ce(() => {
    e.value = !0;
  }, t), e;
}
function qi(e) {
  const t = _l();
  return B(() => (t.value, !!e()));
}
function Yi(e, t, a = {}) {
  const { window: n = Gn, ...o } = a;
  let l;
  const s = qi(() => n && "MutationObserver" in n), i = () => {
    l && (l.disconnect(), l = void 0);
  }, u = B(() => {
    const h = Xe(e), v = (Array.isArray(h) ? h : [h]).map(Te).filter(Fi);
    return new Set(v);
  }), c = J(
    () => u.value,
    (h) => {
      i(), s.value && h.size && (l = new MutationObserver(t), h.forEach((v) => l.observe(v, o)));
    },
    { immediate: !0, flush: "post" }
  ), d = () => l == null ? void 0 : l.takeRecords(), p = () => {
    i(), c();
  };
  return Ia(p), {
    isSupported: s,
    stop: p,
    takeRecords: d
  };
}
function Zi(e) {
  return JSON.parse(JSON.stringify(e));
}
function fe(e, t, a, n = {}) {
  var o, l, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: p,
    shouldEmit: h
  } = n, v = Me(), b = a || (v == null ? void 0 : v.emit) || ((o = v == null ? void 0 : v.$emit) == null ? void 0 : o.bind(v)) || ((s = (l = v == null ? void 0 : v.proxy) == null ? void 0 : l.$emit) == null ? void 0 : s.bind(v == null ? void 0 : v.proxy));
  let g = c;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const w = ($) => i ? typeof i == "function" ? i($) : Zi($) : $, C = () => Ri(e[t]) ? w(e[t]) : p, D = ($) => {
    h ? h($) && b(g, $) : b(g, $);
  };
  if (u) {
    const $ = C(), O = M($);
    let S = !1;
    return J(
      () => e[t],
      (T) => {
        S || (S = !0, O.value = w(T), ae(() => S = !1));
      }
    ), J(
      O,
      (T) => {
        !S && (T !== e[t] || d) && D(T);
      },
      { deep: d }
    ), O;
  } else
    return B({
      get() {
        return C();
      },
      set($) {
        D($);
      }
    });
}
function Va(e) {
  return e ? e.flatMap((t) => t.type === X ? Va(t.children) : [t]) : [];
}
const Ji = ["INPUT", "TEXTAREA"];
function Xi(e, t, a, n = {}) {
  if (!t || n.enableIgnoredElement && Ji.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: l = "[data-radix-vue-collection-item]",
    itemsArray: s = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: c = !0,
    focus: d = !1
  } = n, [p, h, v, b, g, w] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = v || b, D = p || h;
  if (!g && !w && (!C && !D || o === "vertical" && D || o === "horizontal" && C))
    return null;
  const $ = a ? Array.from(a.querySelectorAll(l)) : s;
  if (!$.length)
    return null;
  c && e.preventDefault();
  let O = null;
  return D || C ? O = xl($, t, {
    goForward: C ? b : u === "ltr" ? p : h,
    loop: i
  }) : g ? O = $.at(0) || null : w && (O = $.at(-1) || null), d && (O == null || O.focus()), O;
}
function xl(e, t, a, n = e.length) {
  if (--n === 0)
    return null;
  const o = e.indexOf(t), l = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (l < 0 || l >= e.length))
    return null;
  const s = (l + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? xl(
    e,
    i,
    a,
    n
  ) : i : null;
}
function nn(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function wn(e, t, a = ".", n) {
  if (!nn(t))
    return wn(e, {}, a);
  const o = Object.assign({}, t);
  for (const l in e) {
    if (l === "__proto__" || l === "constructor")
      continue;
    const s = e[l];
    s != null && (Array.isArray(s) && Array.isArray(o[l]) ? o[l] = [...s, ...o[l]] : nn(s) && nn(o[l]) ? o[l] = wn(
      s,
      o[l],
      (a ? `${a}.` : "") + l.toString()
    ) : o[l] = s);
  }
  return o;
}
function Qi(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((a, n) => wn(a, n, ""), {})
  );
}
const ed = Qi(), [Ra, Fv] = se("ConfigProvider");
let td = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", ad = (e = 21) => {
  let t = "", a = e;
  for (; a--; )
    t += td[Math.random() * 64 | 0];
  return t;
};
const nd = wl(() => {
  const e = M(/* @__PURE__ */ new Map()), t = M(), a = B(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), n = Ra({
    scrollBody: M(!0)
  });
  let o = null;
  const l = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Do && (o == null || o()), t.value = void 0;
  };
  return J(a, (s, i) => {
    var u;
    if (!ot)
      return;
    if (!s) {
      i && l();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, d = { padding: c, margin: 0 }, p = (u = n.scrollBody) != null && u.value ? typeof n.scrollBody.value == "object" ? ed({
      padding: n.scrollBody.value.padding === !0 ? c : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? c : n.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = `${p.padding}px`, document.body.style.marginRight = `${p.margin}px`, document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Do && (o = Ba(
      document,
      "touchmove",
      (h) => {
        var v;
        h.target === document.documentElement && (h.touches.length > 1 || (v = h.preventDefault) == null || v.call(h));
      },
      { passive: !1 }
    )), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function aa(e) {
  const t = ad(6), a = nd();
  a.value.set(t, e ?? !1);
  const n = B({
    get: () => a.value.get(t) ?? !1,
    set: (o) => a.value.set(t, o)
  });
  return Ki(() => {
    a.value.delete(t);
  }), n;
}
const od = "data-radix-vue-collection-item";
function na(e, t = od) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = M([]);
    function l() {
      const s = Te(n);
      return s ? o.value = Array.from(
        s.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return Rr(() => {
      o.value = [];
    }), ce(l), Fr(l), J(() => n == null ? void 0 : n.value, l, { immediate: !0 }), Go(a, o), o;
  }, injectCollection: () => Ho(a, M([])) };
}
function ld(e) {
  const t = M(e);
  function a() {
    return t.value;
  }
  function n(g) {
    t.value = g;
  }
  function o(g, w) {
    return new Le(t.value, w).format(g);
  }
  function l(g, w = !0) {
    return Vs(g) && w ? o(Se(g), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Se(g), {
      dateStyle: "long"
    });
  }
  function s(g, w = {}) {
    return new Le(t.value, { month: "long", year: "numeric", ...w }).format(g);
  }
  function i(g, w = {}) {
    return new Le(t.value, { month: "long", ...w }).format(g);
  }
  function u() {
    const g = el(Tt());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((w) => ({ label: i(Se(g.set({ month: w }))), value: w }));
  }
  function c(g, w = {}) {
    return new Le(t.value, { year: "numeric", ...w }).format(g);
  }
  function d(g, w) {
    return Fn(g) ? new Le(t.value, {
      ...w,
      timeZone: g.timeZone
    }).formatToParts(Se(g)) : new Le(t.value, w).formatToParts(Se(g));
  }
  function p(g, w = "narrow") {
    return new Le(t.value, { weekday: w }).format(g);
  }
  function h(g) {
    var w;
    return ((w = new Le(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(g).find((C) => C.type === "dayPeriod")) == null ? void 0 : w.value) === "PM" ? "PM" : "AM";
  }
  const v = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function b(g, w, C = {}) {
    const D = { ...v, ...C }, $ = d(g, D).find((O) => O.type === w);
    return $ ? $.value : "";
  }
  return {
    setLocale: n,
    getLocale: a,
    fullMonth: i,
    fullYear: c,
    fullMonthAndYear: s,
    toParts: d,
    custom: o,
    part: b,
    dayPeriod: h,
    selectedDate: l,
    dayOfWeek: p,
    getMonths: u
  };
}
function ft(e) {
  const t = Ra({
    dir: M("ltr")
  });
  return B(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function mt(e) {
  const t = Me(), a = t == null ? void 0 : t.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), a == null || a.forEach((o) => {
    n[Ir(jo(o))] = (...l) => e(o, ...l);
  }), n;
}
let on = 0;
function qn() {
  ge((e) => {
    if (!ot)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Oo()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Oo()
    ), on++, e(() => {
      on === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), on--;
    });
  });
}
function Oo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function Fa(e) {
  return B(() => {
    var t;
    return Xe(e) ? !!((t = Te(e)) != null && t.closest("form")) : !0;
  });
}
function ie(e) {
  const t = Me(), a = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, l) => {
    const s = (t == null ? void 0 : t.type.props[l]).default;
    return s !== void 0 && (o[l] = s), o;
  }, {}), n = Wo(e);
  return B(() => {
    const o = {}, l = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(l).forEach((s) => {
      o[jo(s)] = l[s];
    }), Object.keys({ ...a, ...o }).reduce((s, i) => (n.value[i] !== void 0 && (s[i] = n.value[i]), s), {});
  });
}
function oe(e, t) {
  const a = ie(e), n = t ? mt(t) : {};
  return B(() => ({
    ...a.value,
    ...n
  }));
}
function L() {
  const e = Me(), t = M(), a = B(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Te(t);
  }), n = Object.assign({}, e.exposed), o = {};
  for (const s in e.props)
    Object.defineProperty(o, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s]
    });
  if (Object.keys(n).length > 0)
    for (const s in n)
      Object.defineProperty(o, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function l(s) {
    t.value = s, !(s instanceof Element || !s) && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s.$el
    }), e.exposed = o);
  }
  return { forwardRef: l, currentRef: t, currentElement: a };
}
var rd = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, wt = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ new WeakMap(), va = {}, ln = 0, Cl = function(e) {
  return e && (e.host || Cl(e.parentNode));
}, sd = function(e, t) {
  return t.map(function(a) {
    if (e.contains(a))
      return a;
    var n = Cl(a);
    return n && e.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, id = function(e, t, a, n) {
  var o = sd(t, Array.isArray(e) ? e : [e]);
  va[a] || (va[a] = /* @__PURE__ */ new WeakMap());
  var l = va[a], s = [], i = /* @__PURE__ */ new Set(), u = new Set(o), c = function(p) {
    !p || i.has(p) || (i.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var d = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(h) {
      if (i.has(h))
        d(h);
      else
        try {
          var v = h.getAttribute(n), b = v !== null && v !== "false", g = (wt.get(h) || 0) + 1, w = (l.get(h) || 0) + 1;
          wt.set(h, g), l.set(h, w), s.push(h), g === 1 && b && ma.set(h, !0), w === 1 && h.setAttribute(a, "true"), b || h.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", h, C);
        }
    });
  };
  return d(t), i.clear(), ln++, function() {
    s.forEach(function(p) {
      var h = wt.get(p) - 1, v = l.get(p) - 1;
      wt.set(p, h), l.set(p, v), h || (ma.has(p) || p.removeAttribute(n), ma.delete(p)), v || p.removeAttribute(a);
    }), ln--, ln || (wt = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ new WeakMap(), va = {});
  };
}, dd = function(e, t, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = rd(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), id(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function oa(e) {
  let t;
  J(() => Te(e), (a) => {
    a ? t = dd(a) : t && t();
  }), Qt(() => {
    t && t();
  });
}
let ud = 0;
function ye(e, t = "radix") {
  const a = Ra({ useId: void 0 });
  return uo.useId ? `${t}-${uo.useId()}` : a.useId ? `${t}-${a.useId()}` : `${t}-${++ud}`;
}
function cd(e) {
  const t = M(), a = B(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), n = B(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return ce(() => {
    const o = Te(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const l = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let u, c;
        if ("borderBoxSize" in i) {
          const d = i.borderBoxSize, p = Array.isArray(d) ? d[0] : d;
          u = p.inlineSize, c = p.blockSize;
        } else
          u = o.offsetWidth, c = o.offsetHeight;
        t.value = { width: u, height: c };
      });
      return l.observe(o, { box: "border-box" }), () => l.unobserve(o);
    } else
      t.value = void 0;
  }), {
    width: a,
    height: n
  };
}
function pd(e, t) {
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
function Yn(e) {
  const t = Ui("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, n) => {
      var o, l;
      if (!(e != null && e.value) && !n)
        return;
      t.value = t.value + a;
      const s = (e == null ? void 0 : e.value) ?? n, i = document.activeElement, u = ((l = (o = s.find((h) => h === i)) == null ? void 0 : o.textContent) == null ? void 0 : l.trim()) ?? "", c = s.map((h) => {
        var v;
        return ((v = h.textContent) == null ? void 0 : v.trim()) ?? "";
      }), d = md(c, t.value, u), p = s.find(
        (h) => {
          var v;
          return ((v = h.textContent) == null ? void 0 : v.trim()) === d;
        }
      );
      return p && p.focus(), p;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function fd(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
function md(e, t, a) {
  const n = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = a ? e.indexOf(a) : -1;
  let l = fd(e, Math.max(o, 0));
  n.length === 1 && (l = l.filter((i) => i !== a));
  const s = l.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return s !== a ? s : void 0;
}
function vd() {
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
const Zn = _({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const l = Va(a.default()), s = l.findIndex((d) => d.type !== Or);
      if (s === -1)
        return l;
      const i = l[s];
      (n = i.props) == null || delete n.ref;
      const u = i.props ? E(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const c = Sr(i, u);
      for (const d in u)
        d.startsWith("on") && (c.props || (c.props = {}), c.props[d] = u[d]);
      return l.length === 1 ? c : (l[s] = c, l);
    };
  }
}), F = _({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => dt(n, t) : n !== "template" ? () => dt(e.as, t, { default: a.default }) : () => dt(Zn, t, { default: a.default });
  }
});
function La() {
  const e = M(), t = B(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = e.value) == null ? void 0 : a.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : Te(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function hd(e, t) {
  const a = M({}), n = M("none"), o = e.value ? "mounted" : "unmounted", { state: l, dispatch: s } = pd(o, {
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
    var v;
    if (ot) {
      const b = new CustomEvent(h, { bubbles: !1, cancelable: !1 });
      (v = t.value) == null || v.dispatchEvent(b);
    }
  };
  J(
    e,
    async (h, v) => {
      var b;
      const g = v !== h;
      if (await ae(), g) {
        const w = n.value, C = ha(t.value);
        h ? (s("MOUNT"), i("enter"), C === "none" && i("after-enter")) : C === "none" || ((b = a.value) == null ? void 0 : b.display) === "none" ? (s("UNMOUNT"), i("leave"), i("after-leave")) : v && w !== C ? (s("ANIMATION_OUT"), i("leave")) : (s("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const u = (h) => {
    const v = ha(t.value), b = v.includes(
      h.animationName
    ), g = l.value === "mounted" ? "enter" : "leave";
    h.target === t.value && b && (i(`after-${g}`), s("ANIMATION_END")), h.target === t.value && v === "none" && s("ANIMATION_END");
  }, c = (h) => {
    h.target === t.value && (n.value = ha(t.value));
  }, d = J(
    t,
    (h, v) => {
      h ? (a.value = getComputedStyle(h), h.addEventListener("animationstart", c), h.addEventListener("animationcancel", u), h.addEventListener("animationend", u)) : (s("ANIMATION_END"), v == null || v.removeEventListener("animationstart", c), v == null || v.removeEventListener("animationcancel", u), v == null || v.removeEventListener("animationend", u));
    },
    { immediate: !0 }
  ), p = J(l, () => {
    const h = ha(t.value);
    n.value = l.value === "mounted" ? h : "none";
  });
  return Qt(() => {
    d(), p();
  }), {
    isPresent: B(
      () => ["mounted", "unmountSuspended"].includes(l.value)
    )
  };
}
function ha(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Ie = _({
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
    const { present: o, forceMount: l } = me(e), s = M(), { isPresent: i } = hd(o, s);
    a({ present: i });
    let u = t.default({ present: i });
    u = Va(u || []);
    const c = Me();
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
    return () => l.value || o.value || i.value ? dt(t.default({ present: i })[0], {
      ref: (d) => {
        const p = Te(d);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? s.value = p.firstElementChild : s.value = p), p;
      }
    }) : null;
  }
}), [Ve, gd] = se("DialogRoot"), yd = /* @__PURE__ */ _({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = fe(a, "open", t, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = M(), l = M(), { modal: s } = me(a);
    return gd({
      open: n,
      modal: s,
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
    }), (i, u) => x(i.$slots, "default", { open: r(n) });
  }
}), bd = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ve(), { forwardRef: n, currentElement: o } = L();
    return a.contentId || (a.contentId = ye(void 0, "radix-vue-dialog-content")), ce(() => {
      a.triggerElement.value = o.value;
    }), (l, s) => (f(), y(r(F), E(t, {
      ref: r(n),
      type: l.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": r(a).open.value || !1,
      "aria-controls": r(a).open.value ? r(a).contentId : void 0,
      "data-state": r(a).open.value ? "open" : "closed",
      onClick: r(a).onOpenToggle
    }), {
      default: m(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), za = /* @__PURE__ */ _({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = _l();
    return (a, n) => r(t) || a.forceMount ? (f(), y(Sn, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      x(a.$slots, "default")
    ], 8, ["to", "disabled"])) : te("", !0);
  }
}), $l = /* @__PURE__ */ _({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(za), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wd = "dismissableLayer.pointerDownOutside", _d = "dismissableLayer.focusOutside";
function kl(e, t) {
  const a = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function xd(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1), l = M(() => {
  });
  return ge((s) => {
    if (!ot)
      return;
    const i = async (c) => {
      const d = c.target;
      if (t != null && t.value) {
        if (kl(t.value, d)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let p = function() {
            Hn(
              wd,
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
    }, u = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    s(() => {
      window.clearTimeout(u), n.removeEventListener("pointerdown", i), n.removeEventListener("click", l.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function Cd(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1);
  return ge((l) => {
    if (!ot)
      return;
    const s = async (i) => {
      t != null && t.value && (await ae(), !(!t.value || kl(t.value, i.target)) && i.target && !o.value && Hn(
        _d,
        e,
        { originalEvent: i }
      ));
    };
    n.addEventListener("focusin", s), l(() => n.removeEventListener("focusin", s));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const Re = Uo({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), la = /* @__PURE__ */ _({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: l } = L(), s = B(
      () => {
        var b;
        return ((b = l.value) == null ? void 0 : b.ownerDocument) ?? globalThis.document;
      }
    ), i = B(() => Re.layersRoot), u = B(() => l.value ? Array.from(i.value).indexOf(l.value) : -1), c = B(() => Re.layersWithOutsidePointerEventsDisabled.size > 0), d = B(() => {
      const b = Array.from(i.value), [g] = [...Re.layersWithOutsidePointerEventsDisabled].slice(-1), w = b.indexOf(g);
      return u.value >= w;
    }), p = xd(async (b) => {
      const g = [...Re.branches].some(
        (w) => w == null ? void 0 : w.contains(b.target)
      );
      !d.value || g || (n("pointerDownOutside", b), n("interactOutside", b), await ae(), b.defaultPrevented || n("dismiss"));
    }, l), h = Cd((b) => {
      [...Re.branches].some(
        (g) => g == null ? void 0 : g.contains(b.target)
      ) || (n("focusOutside", b), n("interactOutside", b), b.defaultPrevented || n("dismiss"));
    }, l);
    Gi("Escape", (b) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", b), b.defaultPrevented || n("dismiss"));
    });
    let v;
    return ge((b) => {
      l.value && (a.disableOutsidePointerEvents && (Re.layersWithOutsidePointerEventsDisabled.size === 0 && (v = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), Re.layersWithOutsidePointerEventsDisabled.add(l.value)), i.value.add(l.value), b(() => {
        a.disableOutsidePointerEvents && Re.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = v);
      }));
    }), ge((b) => {
      b(() => {
        l.value && (i.value.delete(l.value), Re.layersWithOutsidePointerEventsDisabled.delete(l.value));
      });
    }), (b, g) => (f(), y(r(F), {
      ref: r(o),
      "as-child": b.asChild,
      as: b.as,
      "data-dismissable-layer": "",
      style: Sa({
        pointerEvents: c.value ? d.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: r(h).onFocusCapture,
      onBlurCapture: r(h).onBlurCapture,
      onPointerdownCapture: r(p).onPointerDownCapture
    }, {
      default: m(() => [
        x(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), rn = "focusScope.autoFocusOnMount", sn = "focusScope.autoFocusOnUnmount", So = { bubbles: !1, cancelable: !0 };
function $d(e, { select: t = !1 } = {}) {
  const a = document.activeElement;
  for (const n of e)
    if (Je(n, { select: t }), document.activeElement !== a)
      return !0;
}
function kd(e) {
  const t = Bl(e), a = Eo(t, e), n = Eo(t.reverse(), e);
  return [a, n];
}
function Bl(e) {
  const t = [], a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) t.push(a.currentNode);
  return t;
}
function Eo(e, t) {
  for (const a of e)
    if (!Bd(a, { upTo: t }))
      return a;
}
function Bd(e, { upTo: t }) {
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
function Pd(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Je(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const a = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== a && Pd(e) && t && e.select();
  }
}
const Dd = Vi(() => M([]));
function Od() {
  const e = Dd();
  return {
    add(t) {
      const a = e.value[0];
      t !== a && (a == null || a.pause()), e.value = Mo(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var a;
      e.value = Mo(e.value, t), (a = e.value[0]) == null || a.resume();
    }
  };
}
function Mo(e, t) {
  const a = [...e], n = a.indexOf(t);
  return n !== -1 && a.splice(n, 1), a;
}
function Sd(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Na = /* @__PURE__ */ _({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const a = e, n = t, { currentRef: o, currentElement: l } = L(), s = M(null), i = Od(), u = Uo({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ge((d) => {
      if (!ot)
        return;
      const p = l.value;
      if (!a.trapped)
        return;
      function h(w) {
        if (u.paused || !p)
          return;
        const C = w.target;
        p.contains(C) ? s.value = C : Je(s.value, { select: !0 });
      }
      function v(w) {
        if (u.paused || !p)
          return;
        const C = w.relatedTarget;
        C !== null && (p.contains(C) || Je(s.value, { select: !0 }));
      }
      function b(w) {
        p.contains(s.value) || Je(p);
      }
      document.addEventListener("focusin", h), document.addEventListener("focusout", v);
      const g = new MutationObserver(b);
      p && g.observe(p, { childList: !0, subtree: !0 }), d(() => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", v), g.disconnect();
      });
    }), ge(async (d) => {
      const p = l.value;
      if (await ae(), !p)
        return;
      i.add(u);
      const h = document.activeElement;
      if (!p.contains(h)) {
        const v = new CustomEvent(rn, So);
        p.addEventListener(rn, (b) => n("mountAutoFocus", b)), p.dispatchEvent(v), v.defaultPrevented || ($d(Sd(Bl(p)), {
          select: !0
        }), document.activeElement === h && Je(p));
      }
      d(() => {
        p.removeEventListener(rn, (g) => n("mountAutoFocus", g));
        const v = new CustomEvent(sn, So), b = (g) => {
          n("unmountAutoFocus", g);
        };
        p.addEventListener(sn, b), p.dispatchEvent(v), setTimeout(() => {
          v.defaultPrevented || Je(h ?? document.body, { select: !0 }), p.removeEventListener(sn, b), i.remove(u);
        }, 0);
      });
    });
    function c(d) {
      if (!a.loop && !a.trapped || u.paused)
        return;
      const p = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, h = document.activeElement;
      if (p && h) {
        const v = d.currentTarget, [b, g] = kd(v);
        b && g ? !d.shiftKey && h === g ? (d.preventDefault(), a.loop && Je(b, { select: !0 })) : d.shiftKey && h === b && (d.preventDefault(), a.loop && Je(g, { select: !0 })) : h === v && d.preventDefault();
      }
    }
    return (d, p) => (f(), y(r(F), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": d.asChild,
      as: d.as,
      onKeydown: c
    }, {
      default: m(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Ed = "menu.itemSelect", _n = ["Enter", " "], Md = ["ArrowDown", "PageUp", "Home"], Pl = ["ArrowUp", "PageDown", "End"], Ad = [...Md, ...Pl], Td = {
  ltr: [..._n, "ArrowRight"],
  rtl: [..._n, "ArrowLeft"]
}, Id = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Jn(e) {
  return e ? "open" : "closed";
}
function Pa(e) {
  return e === "indeterminate";
}
function Xn(e) {
  return Pa(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function xn(e) {
  const t = document.activeElement;
  for (const a of e)
    if (a === t || (a.focus(), document.activeElement !== t))
      return;
}
function Vd(e, t) {
  const { x: a, y: n } = e;
  let o = !1;
  for (let l = 0, s = t.length - 1; l < t.length; s = l++) {
    const i = t[l].x, u = t[l].y, c = t[s].x, d = t[s].y;
    u > n != d > n && a < (c - i) * (n - u) / (d - u) + i && (o = !o);
  }
  return o;
}
function Rd(e, t) {
  if (!t)
    return !1;
  const a = { x: e.clientX, y: e.clientY };
  return Vd(a, t);
}
function Yt(e) {
  return e.pointerType === "mouse";
}
const Fd = "DialogTitle", Ld = "DialogContent";
function zd({
  titleName: e = Fd,
  contentName: t = Ld,
  componentLink: a = "dialog.html#title",
  titleId: n,
  descriptionId: o,
  contentElement: l
}) {
  const s = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${a}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ce(() => {
    var u;
    document.getElementById(n) || console.warn(s);
    const c = (u = l.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && c && (document.getElementById(o) || console.warn(i));
  });
}
const Dl = /* @__PURE__ */ _({
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
    const a = e, n = t, o = Ve(), { forwardRef: l, currentElement: s } = L();
    return o.titleId || (o.titleId = ye(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = ye(void 0, "radix-vue-dialog-description")), ce(() => {
      o.contentElement = s, document.activeElement !== document.body && (o.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && zd({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: s
    }), (i, u) => (f(), y(r(Na), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: u[6] || (u[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: m(() => [
        P(r(la), E({
          id: r(o).contentId,
          ref: r(l),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": r(o).descriptionId,
          "aria-labelledby": r(o).titleId,
          "data-state": r(Jn)(r(o).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (c) => r(o).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: u[2] || (u[2] = (c) => n("focusOutside", c)),
          onInteractOutside: u[3] || (u[3] = (c) => n("interactOutside", c)),
          onPointerDownOutside: u[4] || (u[4] = (c) => n("pointerDownOutside", c))
        }), {
          default: m(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Nd = /* @__PURE__ */ _({
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
    const a = e, n = t, o = Ve(), l = mt(n), { forwardRef: s, currentElement: i } = L();
    return oa(i), (u, c) => (f(), y(Dl, E({ ...a, ...r(l) }, {
      ref: r(s),
      "trap-focus": r(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: c[0] || (c[0] = (d) => {
        var p;
        d.defaultPrevented || (d.preventDefault(), (p = r(o).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: c[1] || (c[1] = (d) => {
        const p = d.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || h) && d.preventDefault();
      }),
      onFocusOutside: c[2] || (c[2] = (d) => {
        d.preventDefault();
      })
    }), {
      default: m(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Wd = /* @__PURE__ */ _({
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
    const a = e, n = mt(t);
    L();
    const o = Ve(), l = M(!1), s = M(!1);
    return (i, u) => (f(), y(Dl, E({ ...a, ...r(n) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var d;
        c.defaultPrevented || (l.value || (d = r(o).triggerElement.value) == null || d.focus(), c.preventDefault()), l.value = !1, s.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (c) => {
        var d;
        c.defaultPrevented || (l.value = !0, c.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const p = c.target;
        (d = r(o).triggerElement.value) != null && d.contains(p) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && s.value && c.preventDefault();
      })
    }), {
      default: m(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ol = /* @__PURE__ */ _({
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
    const a = e, n = t, o = Ve(), l = mt(n), { forwardRef: s } = L();
    return (i, u) => (f(), y(r(Ie), {
      present: i.forceMount || r(o).open.value
    }, {
      default: m(() => [
        r(o).modal.value ? (f(), y(Nd, E({
          key: 0,
          ref: r(s)
        }, { ...a, ...r(l), ...i.$attrs }), {
          default: m(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), y(Wd, E({
          key: 1,
          ref: r(s)
        }, { ...a, ...r(l), ...i.$attrs }), {
          default: m(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), jd = /* @__PURE__ */ _({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ve();
    return aa(!0), L(), (a, n) => (f(), y(r(F), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": r(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Sl = /* @__PURE__ */ _({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ve(), { forwardRef: a } = L();
    return (n, o) => {
      var l;
      return (l = r(t)) != null && l.modal.value ? (f(), y(r(Ie), {
        key: 0,
        present: n.forceMount || r(t).open.value
      }, {
        default: m(() => [
          P(jd, E(n.$attrs, {
            ref: r(a),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: m(() => [
              x(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : te("", !0);
    };
  }
}), Qn = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    L();
    const a = Ve();
    return (n, o) => (f(), y(r(F), E(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (l) => r(a).onOpenChange(!1))
    }), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Ud = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, a = Ve();
    return L(), (n, o) => (f(), y(r(F), E(t, {
      id: r(a).titleId
    }), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Kd = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    L();
    const a = Ve();
    return (n, o) => (f(), y(r(F), E(t, {
      id: r(a).descriptionId
    }), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function Hd(e) {
  function t(n) {
    return Array.isArray(e.date.value) ? e.date.value.some((o) => kt(o, n)) : e.date.value ? kt(e.date.value, n) : !1;
  }
  const a = B(
    () => {
      var n, o, l, s;
      if (Array.isArray(e.date.value)) {
        if (!e.date.value.length)
          return !1;
        for (const i of e.date.value)
          if ((n = e.isDateDisabled) != null && n.call(e, i) || (o = e.isDateUnavailable) != null && o.call(e, i))
            return !0;
      } else {
        if (!e.date.value)
          return !1;
        if ((l = e.isDateDisabled) != null && l.call(e, e.date.value) || (s = e.isDateUnavailable) != null && s.call(e, e.date.value))
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
function Gd(e, t) {
  const a = t(e), n = a.compare(e), o = {};
  return n >= 7 && (o.day = 1), n >= Ht(e) && (o.month = 1), a.set({ ...o });
}
function qd(e, t) {
  const a = t(e), n = e.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= Ht(e) && (o.month = 13), a.set({ ...o });
}
function Yd(e, t) {
  return t(e);
}
function Zd(e, t) {
  return t(e);
}
function Jd(e) {
  const t = ld(e.locale.value), a = B(() => {
    const g = {
      calendar: e.placeholder.value.calendar.identifier
    };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (g.era = "short"), g;
  }), n = M(st({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), o = B(() => n.value.map((g) => g.value));
  function l(g) {
    return !o.value.some((w) => po(g, w));
  }
  const s = (g = "month", w) => {
    if (!e.maxValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[n.value.length - 1].value;
    if (w || e.nextPage.value) {
      const $ = Gd(C, w || e.nextPage.value);
      return pa($, e.maxValue.value);
    }
    if (g === "year") {
      const $ = C.add({ years: 1 }).set({ day: 1, month: 1 });
      return pa($, e.maxValue.value);
    }
    const D = C.add({ months: 1 }).set({ day: 1 });
    return pa(D, e.maxValue.value);
  }, i = (g = "month", w) => {
    if (!e.minValue.value || !n.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const C = n.value[0].value;
    if (w || e.prevPage.value) {
      const $ = qd(C, w || e.prevPage.value);
      return ca($, e.minValue.value);
    }
    if (g === "year") {
      const $ = C.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return ca($, e.minValue.value);
    }
    const D = C.subtract({ months: 1 }).set({ day: 35 });
    return ca(D, e.minValue.value);
  };
  function u(g) {
    var w;
    return !!((w = e.isDateDisabled) != null && w.call(e, g) || e.disabled.value || e.maxValue.value && pa(g, e.maxValue.value) || e.minValue.value && ca(g, e.minValue.value));
  }
  const c = (g) => {
    var w;
    return !!((w = e.isDateUnavailable) != null && w.call(e, g));
  }, d = B(() => n.value.length ? n.value[0].rows[0].map((g) => t.dayOfWeek(Se(g), e.weekdayFormat.value)) : []), p = (g = "month", w) => {
    const C = n.value[0].value;
    if (w || e.nextPage.value) {
      const O = Yd(C, w || e.nextPage.value), S = st({
        dateObj: O,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = S;
      const T = {};
      if (!w) {
        const A = S[0].value.compare(C);
        A >= Ht(C) && (T.day = 1), A >= 365 && (T.month = 1);
      }
      e.placeholder.value = S[0].value.set({ ...T });
      return;
    }
    const D = g === "month" ? C.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.add({ years: 1 }), $ = st({
      dateObj: D,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = $, e.placeholder.value = $[0].value.set({ day: 1 });
  }, h = (g = "month", w) => {
    const C = n.value[0].value;
    if (w || e.prevPage.value) {
      const O = Zd(C, w || e.prevPage.value), S = st({
        dateObj: O,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      n.value = S;
      const T = {};
      if (!w) {
        const A = C.compare(S[0].value);
        A >= Ht(C) && (T.day = 1), A >= 365 && (T.month = 1);
      }
      e.placeholder.value = S[0].value.set({ ...T });
      return;
    }
    const D = g === "month" ? C.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : C.subtract({ years: 1 }), $ = st({
      dateObj: D,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    n.value = $, e.placeholder.value = $[0].value.set({ day: 1 });
  };
  J(e.placeholder, (g) => {
    o.value.some((w) => po(w, g)) || (n.value = st({
      dateObj: g,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), J([e.locale, e.weekStartsOn, e.fixedWeeks, e.numberOfMonths], () => {
    n.value = st({
      dateObj: e.placeholder.value,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
  });
  const v = B(() => {
    if (!n.value.length)
      return "";
    if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value), n.value.length === 1) {
      const S = n.value[0].value;
      return `${t.fullMonthAndYear(Se(S), a.value)}`;
    }
    const g = Se(n.value[0].value), w = Se(n.value[n.value.length - 1].value), C = t.fullMonth(g, a.value), D = t.fullMonth(w, a.value), $ = t.fullYear(g, a.value), O = t.fullYear(w, a.value);
    return $ === O ? `${C} - ${D} ${O}` : `${C} ${$} - ${D} ${O}`;
  }), b = B(() => `${e.calendarLabel.value ?? "Event Date"}, ${v.value}`);
  return {
    isDateDisabled: u,
    isDateUnavailable: c,
    isNextButtonDisabled: s,
    isPrevButtonDisabled: i,
    grid: n,
    weekdays: d,
    visibleView: o,
    isOutsideVisibleView: l,
    formatter: t,
    nextPage: p,
    prevPage: h,
    headingValue: v,
    fullCalendarLabel: b
  };
}
const Xd = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Qd = {
  role: "heading",
  "aria-level": "2"
}, [Vt, eu] = se("CalendarRoot"), tu = /* @__PURE__ */ _({
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
      readonly: s,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: c,
      weekdayFormat: d,
      fixedWeeks: p,
      multiple: h,
      minValue: v,
      maxValue: b,
      numberOfMonths: g,
      preventDeselect: w,
      isDateDisabled: C,
      isDateUnavailable: D,
      calendarLabel: $,
      defaultValue: O,
      nextPage: S,
      prevPage: T,
      dir: A
    } = me(a), { primitiveElement: z, currentElement: j } = La(), k = ft(A), I = fe(a, "modelValue", n, {
      defaultValue: O.value,
      passive: a.modelValue === void 0
    }), R = Ai({
      defaultPlaceholder: a.placeholder,
      defaultValue: I.value
    }), ee = fe(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? R.copy(),
      passive: a.placeholder === void 0
    });
    function Z(re) {
      ee.value = re.copy();
    }
    const {
      fullCalendarLabel: N,
      headingValue: U,
      isDateDisabled: le,
      isDateUnavailable: ue,
      isNextButtonDisabled: pe,
      isPrevButtonDisabled: ke,
      weekdays: be,
      isOutsideVisibleView: Ka,
      nextPage: Nt,
      prevPage: Ha,
      formatter: yt,
      grid: Ga
    } = Jd({
      locale: o,
      placeholder: ee,
      weekStartsOn: c,
      fixedWeeks: p,
      numberOfMonths: g,
      minValue: v,
      maxValue: b,
      disabled: l,
      weekdayFormat: d,
      pagedNavigation: u,
      isDateDisabled: C.value,
      isDateUnavailable: D.value,
      calendarLabel: $,
      nextPage: S,
      prevPage: T
    }), {
      isInvalid: Oe,
      isDateSelected: Be
    } = Hd({
      date: I,
      isDateDisabled: le,
      isDateUnavailable: ue
    });
    J(I, (re) => {
      if (Array.isArray(re) && re.length) {
        const _e = re[re.length - 1];
        _e && !Za(ee.value, _e) && Z(_e);
      } else !Array.isArray(re) && re && !Za(ee.value, re) && Z(re);
    });
    function lt(re) {
      if (h.value) {
        if (Array.isArray(I.value)) {
          if (!I.value) {
            I.value = [re.copy()];
            return;
          }
          if (I.value.findIndex((_e) => kt(_e, re)) === -1)
            I.value = [...I.value, re];
          else if (!w.value) {
            const _e = I.value.filter((rt) => !kt(rt, re));
            if (!_e.length) {
              ee.value = re.copy(), I.value = void 0;
              return;
            }
            I.value = _e.map((rt) => rt.copy());
          }
        }
      } else {
        if (!I.value) {
          I.value = re.copy();
          return;
        }
        !w.value && Za(I.value, re) ? (ee.value = re.copy(), I.value = void 0) : I.value = re.copy();
      }
    }
    return ce(() => {
      i.value && Ti(j.value);
    }), eu({
      isDateUnavailable: ue,
      dir: k,
      isDateDisabled: le,
      locale: o,
      formatter: yt,
      modelValue: I,
      placeholder: ee,
      disabled: l,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: c,
      weekdayFormat: d,
      fixedWeeks: p,
      multiple: h,
      numberOfMonths: g,
      readonly: s,
      preventDeselect: w,
      fullCalendarLabel: N,
      headingValue: U,
      isInvalid: Oe,
      isDateSelected: Be,
      isNextButtonDisabled: pe,
      isPrevButtonDisabled: ke,
      isOutsideVisibleView: Ka,
      nextPage: Nt,
      prevPage: Ha,
      parentElement: j,
      onPlaceholderChange: Z,
      onDateChange: lt
    }), (re, _e) => (f(), y(r(F), {
      ref_key: "primitiveElement",
      ref: z,
      as: re.as,
      "as-child": re.asChild,
      role: "application",
      "aria-label": r(N),
      "data-readonly": r(s) ? "" : void 0,
      "data-disabled": r(l) ? "" : void 0,
      "data-invalid": r(Oe) ? "" : void 0,
      dir: r(k)
    }, {
      default: m(() => [
        x(re.$slots, "default", {
          date: r(ee),
          grid: r(Ga),
          weekDays: r(be),
          weekStartsOn: r(c),
          locale: r(o),
          fixedWeeks: r(p)
        }),
        H("div", Xd, [
          H("div", Qd, Q(r(N)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), au = /* @__PURE__ */ _({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(F), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nu = /* @__PURE__ */ _({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = Vt();
    return (n, o) => (f(), y(r(F), E(t, {
      "data-disabled": r(a).disabled.value ? "" : void 0
    }), {
      default: m(() => [
        x(n.$slots, "default", {
          headingValue: r(a).headingValue.value
        }, () => [
          Y(Q(r(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), ou = /* @__PURE__ */ _({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, a = Vt(), n = B(() => a.disabled.value ? !0 : void 0), o = B(() => a.readonly.value ? !0 : void 0);
    return (l, s) => (f(), y(r(F), E(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: m(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), lu = /* @__PURE__ */ _({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = Vt();
    return (a, n) => {
      var o, l;
      return f(), y(r(F), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": r(t).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": r(t).isDateDisabled(a.date) || ((l = (o = r(t)).isDateUnavailable) == null ? void 0 : l.call(o, a.date)),
        "data-disabled": r(t).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: m(() => [
          x(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), ru = /* @__PURE__ */ _({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(F), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), su = /* @__PURE__ */ _({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = B(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = Vt();
    return (o, l) => (f(), y(r(F), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (s) => r(n).nextPage(t.step, t.nextPage))
    }, {
      default: m(() => [
        x(o.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), iu = /* @__PURE__ */ _({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = B(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = Vt();
    return (o, l) => (f(), y(r(F), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: l[0] || (l[0] = (s) => r(n).prevPage(t.step, t.prevPage))
    }, {
      default: m(() => [
        x(o.$slots, "default", {}, () => [
          Y("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), du = /* @__PURE__ */ _({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(F), E(t, { "aria-hidden": "true" }), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uu = /* @__PURE__ */ _({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(F), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cu = /* @__PURE__ */ _({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(F), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pu = /* @__PURE__ */ _({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = vd(), n = Vt(), { primitiveElement: o, currentElement: l } = La(), s = B(() => t.day.day.toLocaleString(n.locale.value)), i = B(() => n.formatter.custom(Se(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = B(() => n.isDateDisabled(t.day)), c = B(
      () => {
        var $;
        return ($ = n.isDateUnavailable) == null ? void 0 : $.call(n, t.day);
      }
    ), d = B(() => ls(t.day, Tt())), p = B(() => !os(t.day, t.month)), h = B(
      () => n.isOutsideVisibleView(t.day)
    ), v = B(() => !n.disabled.value && kt(t.day, n.placeholder.value)), b = B(() => n.isDateSelected(t.day)), g = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function w($) {
      var O;
      n.readonly.value || n.isDateDisabled($) || (O = n.isDateUnavailable) != null && O.call(n, $) || n.onDateChange($);
    }
    function C() {
      w(t.day);
    }
    function D($) {
      $.preventDefault(), $.stopPropagation();
      const O = n.parentElement.value, S = O ? Array.from(O.querySelectorAll(g)) : [];
      let T = S.indexOf(l.value);
      const A = 7, z = n.dir.value === "rtl" ? -1 : 1;
      switch ($.code) {
        case a.ARROW_RIGHT:
          T += z;
          break;
        case a.ARROW_LEFT:
          T -= z;
          break;
        case a.ARROW_UP:
          T -= A;
          break;
        case a.ARROW_DOWN:
          T += A;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          w(t.day);
          return;
        default:
          return;
      }
      if (T >= 0 && T < S.length) {
        S[T].focus();
        return;
      }
      if (T < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), ae(() => {
          const j = O ? Array.from(O.querySelectorAll(g)) : [];
          j[j.length - Math.abs(T)].focus();
        });
        return;
      }
      if (T >= S.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), ae(() => {
          (O ? Array.from(O.querySelectorAll(g)) : [])[T - S.length].focus();
        });
      }
    }
    return ($, O) => (f(), y(r(F), E({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": p.value || u.value || c.value ? !0 : void 0,
      "data-selected": b.value ? !0 : void 0,
      "data-value": $.day.toString(),
      "data-disabled": u.value || p.value ? "" : void 0,
      "data-unavailable": c.value ? "" : void 0,
      "data-today": d.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": h.value ? "" : void 0,
      "data-focused": v.value ? "" : void 0,
      tabindex: v.value ? 0 : p.value || u.value ? void 0 : -1,
      onClick: C,
      onKeydown: [
        Ue(D, ["up", "down", "left", "right", "space", "enter"]),
        O[0] || (O[0] = Ue(we(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: m(() => [
        x($.$slots, "default", { dayValue: s.value }, () => [
          Y(Q(s.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Da(e) {
  return e === "indeterminate";
}
function El(e) {
  return Da(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const fu = ["value", "checked", "name", "disabled", "required"], [mu, vu] = se("CheckboxRoot"), hu = /* @__PURE__ */ _({
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
    const a = e, n = t, { disabled: o } = me(a), l = fe(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    }), { forwardRef: s, currentElement: i } = L(), u = Fa(i), c = B(() => {
      var d;
      return a.id && i.value ? (d = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : d.innerText : void 0;
    });
    return vu({
      disabled: o,
      state: l
    }), (d, p) => (f(), V(X, null, [
      P(r(F), E(d.$attrs, {
        id: d.id,
        ref: r(s),
        role: "checkbox",
        "as-child": a.asChild,
        as: d.as,
        type: d.as === "button" ? "button" : void 0,
        "aria-checked": r(Da)(r(l)) ? "mixed" : r(l),
        "aria-required": !1,
        "aria-label": d.$attrs["aria-label"] || c.value,
        "data-state": r(El)(r(l)),
        "data-disabled": r(o) ? "" : void 0,
        disabled: r(o),
        onKeydown: Ue(we(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (h) => l.value = r(Da)(r(l)) ? !0 : !r(l))
      }), {
        default: m(() => [
          x(d.$slots, "default", { checked: r(l) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      r(u) ? (f(), V("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "true",
        value: d.value,
        checked: !!r(l),
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
      }, null, 8, fu)) : te("", !0)
    ], 64));
  }
}), gu = /* @__PURE__ */ _({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = L(), a = mu();
    return (n, o) => (f(), y(r(Ie), {
      present: n.forceMount || r(Da)(r(a).state.value) || r(a).state.value === !0
    }, {
      default: m(() => [
        P(r(F), E({
          ref: r(t),
          "data-state": r(El)(r(a).state.value),
          "data-disabled": r(a).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: m(() => [
            x(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Ml, yu] = se("PopperRoot"), ra = /* @__PURE__ */ _({
  __name: "PopperRoot",
  setup(e) {
    const t = M();
    return yu({
      anchor: t,
      onAnchorChange: (a) => t.value = a
    }), (a, n) => x(a.$slots, "default");
  }
}), eo = /* @__PURE__ */ _({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a, currentElement: n } = L(), o = Ml();
    return ge(() => {
      o.onAnchorChange(t.element ?? n.value);
    }), (l, s) => (f(), y(r(F), {
      ref: r(a),
      as: l.as,
      "as-child": l.asChild
    }, {
      default: m(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function bu(e) {
  return e !== null;
}
function wu(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var a, n, o;
      const { placement: l, rects: s, middlewareData: i } = t, u = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, c = u ? 0 : e.arrowWidth, d = u ? 0 : e.arrowHeight, [p, h] = Cn(l), v = { start: "0%", center: "50%", end: "100%" }[h], b = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + c / 2, g = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + d / 2;
      let w = "", C = "";
      return p === "bottom" ? (w = u ? v : `${b}px`, C = `${-d}px`) : p === "top" ? (w = u ? v : `${b}px`, C = `${s.floating.height + d}px`) : p === "right" ? (w = `${-d}px`, C = u ? v : `${g}px`) : p === "left" && (w = `${s.floating.width + d}px`, C = u ? v : `${g}px`), { data: { x: w, y: C } };
    }
  };
}
function Cn(e) {
  const [t, a = "center"] = e.split("-");
  return [t, a];
}
const Al = {
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
}, [Lv, _u] = se("PopperContent"), Zt = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Yo({
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
    ...Al
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Ml(), { forwardRef: l, currentElement: s } = L(), i = M(), u = M(), { width: c, height: d } = cd(u), p = B(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), h = B(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), v = B(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), b = B(() => ({
      padding: h.value,
      boundary: v.value.filter(bu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: v.value.length > 0
    })), g = Ii(() => [
      wi({
        mainAxis: a.sideOffset + d.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && ko({
        ...b.value
      }),
      a.avoidCollisions && _i({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? ki() : void 0,
        ...b.value
      }),
      !a.prioritizePosition && a.avoidCollisions && ko({
        ...b.value
      }),
      xi({
        ...b.value,
        apply: ({ elements: k, rects: I, availableWidth: R, availableHeight: ee }) => {
          const { width: Z, height: N } = I.reference, U = k.floating.style;
          U.setProperty(
            "--radix-popper-available-width",
            `${R}px`
          ), U.setProperty(
            "--radix-popper-available-height",
            `${ee}px`
          ), U.setProperty(
            "--radix-popper-anchor-width",
            `${Z}px`
          ), U.setProperty(
            "--radix-popper-anchor-height",
            `${N}px`
          );
        }
      }),
      u.value && Di({ element: u.value, padding: a.arrowPadding }),
      wu({
        arrowWidth: c.value,
        arrowHeight: d.value
      }),
      a.hideWhenDetached && Ci({ strategy: "referenceHidden", ...b.value })
    ]), { floatingStyles: w, placement: C, isPositioned: D, middlewareData: $ } = Oi(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...k) => bi(...k, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), O = B(
      () => Cn(C.value)[0]
    ), S = B(
      () => Cn(C.value)[1]
    );
    Lr(() => {
      D.value && n("placed");
    });
    const T = B(
      () => {
        var k;
        return ((k = $.value.arrow) == null ? void 0 : k.centerOffset) !== 0;
      }
    ), A = M("");
    ge(() => {
      s.value && (A.value = window.getComputedStyle(s.value).zIndex);
    });
    const z = B(() => {
      var k;
      return ((k = $.value.arrow) == null ? void 0 : k.x) ?? 0;
    }), j = B(() => {
      var k;
      return ((k = $.value.arrow) == null ? void 0 : k.y) ?? 0;
    });
    return _u({
      placedSide: O,
      onArrowChange: (k) => u.value = k,
      arrowX: z,
      arrowY: j,
      shouldHideArrow: T
    }), (k, I) => {
      var R, ee, Z;
      return f(), V("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Sa({
          ...r(w),
          transform: r(D) ? r(w).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: A.value,
          "--radix-popper-transform-origin": [
            (R = r($).transformOrigin) == null ? void 0 : R.x,
            (ee = r($).transformOrigin) == null ? void 0 : ee.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Z = r($).hide) == null ? void 0 : Z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        P(r(F), E({ ref: r(l) }, k.$attrs, {
          "as-child": a.asChild,
          as: k.as,
          "data-side": O.value,
          "data-align": S.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: r(D) ? void 0 : "none"
          }
        }), {
          default: m(() => [
            x(k.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Tl = /* @__PURE__ */ _({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return L(), (t, a) => (f(), y(r(F), {
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
      default: m(() => [
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), xu = /* @__PURE__ */ _({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, a = B(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([l, s]) => ({ name: `[${o}][${t.name}][${l}]`, value: s })) : { name: `[${t.name}][${o}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, o]) => ({ name: `[${t.name}][${n}]`, value: o })) : []);
    return (n, o) => (f(!0), V(X, null, ve(a.value, (l) => (f(), y(Tl, {
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
}), Cu = "data-radix-vue-collection-item", [to, $u] = se("CollectionProvider");
function Il(e = Cu) {
  const t = M(/* @__PURE__ */ new Map()), a = M(), n = $u({
    collectionRef: a,
    itemMap: t,
    attrName: e
  }), { getItems: o } = Rl(n), l = B(() => Array.from(n.itemMap.value.values())), s = B(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: l, itemMapSize: s };
}
const Vl = _({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const a = to(), { primitiveElement: n, currentElement: o } = La();
    return J(o, () => {
      a.collectionRef.value = o.value;
    }), () => dt(Zn, { ref: n }, t);
  }
}), ao = _({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: a }) {
    const n = to(), { primitiveElement: o, currentElement: l } = La();
    return ge((s) => {
      if (l.value) {
        const i = Er(l.value);
        n.itemMap.value.set(i, { ref: l.value, value: e.value }), s(() => n.itemMap.value.delete(i));
      }
    }), () => dt(Zn, { ...a, [n.attrName]: "", ref: o }, t);
  }
});
function Rl(e) {
  const t = e ?? to();
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
const [Rt, ku] = se("ComboboxRoot"), Bu = /* @__PURE__ */ _({
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
    const a = e, n = t, { multiple: o, disabled: l, dir: s } = me(a), i = ft(s), u = fe(a, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: a.searchTerm === void 0
    }), c = fe(a, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: a.defaultValue ?? o.value ? [] : void 0,
      passive: a.modelValue === void 0,
      deep: !0
    }), d = fe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), p = fe(a, "selectedValue", n, {
      defaultValue: void 0,
      passive: a.selectedValue === void 0
    });
    async function h(N) {
      var U, le;
      d.value = N, await ae(), N ? (c.value && (Array.isArray(c.value) && o.value ? p.value = (U = $().find((ue) => {
        var pe, ke;
        return ((ke = (pe = ue.ref) == null ? void 0 : pe.dataset) == null ? void 0 : ke.state) === "checked";
      })) == null ? void 0 : U.value : p.value = c.value), (le = g.value) == null || le.focus(), ee()) : (b.value = !1, a.resetSearchTermOnBlur && z());
    }
    function v(N) {
      if (Array.isArray(c.value) && o.value) {
        const U = c.value.findIndex((ue) => it(ue, N)), le = [...c.value];
        U === -1 ? le.push(N) : le.splice(U, 1), c.value = le;
      } else
        c.value = N, h(!1);
    }
    const b = M(!1), g = M(), w = M(), { forwardRef: C, currentElement: D } = L(), { getItems: $, reactiveItems: O, itemMapSize: S } = Il("data-radix-vue-combobox-item"), T = M([]);
    J(() => S.value, () => {
      T.value = $().map((N) => N.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const A = B(() => {
      if (b.value) {
        if (a.filterFunction)
          return a.filterFunction(T.value, u.value);
        const N = T.value.filter((U) => typeof U == "string");
        if (N.length)
          return N.filter((U) => {
            var le;
            return U.toLowerCase().includes((le = u.value) == null ? void 0 : le.toLowerCase());
          });
      }
      return T.value;
    });
    function z() {
      !o.value && c.value && !Array.isArray(c.value) ? a.displayValue ? u.value = a.displayValue(c.value) : typeof c.value != "object" ? u.value = c.value.toString() : u.value = "" : u.value = "";
    }
    const j = B(() => A.value.findIndex((N) => it(N, p.value))), k = B(() => {
      var N;
      return (N = O.value.find((U) => it(U.value, p.value))) == null ? void 0 : N.ref;
    }), I = B(() => JSON.stringify(c.value));
    J(I, async () => {
      await ae(), await ae(), z();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), J(() => [A.value.length, u.value.length], async ([N, U], [le, ue]) => {
      await ae(), await ae(), N && (ue > U || j.value === -1) && (p.value = A.value[0]);
    });
    const R = Fa(D);
    function ee() {
      k.value instanceof Element && k.value.scrollIntoView({ block: "nearest" });
    }
    function Z() {
      k.value instanceof Element && k.value.focus && k.value.focus();
    }
    return ku({
      searchTerm: u,
      modelValue: c,
      // @ts-expect-error ignoring
      onValueChange: v,
      isUserInputted: b,
      multiple: o,
      disabled: l,
      open: d,
      onOpenChange: h,
      filteredOptions: A,
      contentId: "",
      inputElement: g,
      selectedElement: k,
      onInputElementChange: (N) => g.value = N,
      onInputNavigation: async (N) => {
        const U = j.value;
        U === 0 && N === "up" || U === A.value.length - 1 && N === "down" || (U === -1 && A.value.length || N === "home" ? p.value = A.value[0] : N === "end" ? p.value = A.value[A.value.length - 1] : p.value = A.value[N === "up" ? U - 1 : U + 1], ee(), Z(), ae(() => {
          var le;
          return (le = g.value) == null ? void 0 : le.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async (N) => {
        var U;
        A.value.length && p.value && k.value instanceof Element && (N.preventDefault(), N.stopPropagation(), (U = k.value) == null || U.click());
      },
      selectedValue: p,
      onSelectedValueChange: (N) => p.value = N,
      parentElement: D,
      contentElement: w,
      onContentElementChange: (N) => w.value = N
    }), (N, U) => (f(), y(r(ra), null, {
      default: m(() => [
        P(r(F), E({
          ref: r(C),
          style: {
            pointerEvents: r(d) ? "auto" : void 0
          },
          as: N.as,
          "as-child": N.asChild,
          dir: r(i)
        }, N.$attrs), {
          default: m(() => [
            x(N.$slots, "default", {
              open: r(d),
              modelValue: r(c)
            }),
            r(R) && a.name ? (f(), y(r(xu), {
              key: 0,
              name: a.name,
              value: r(c)
            }, null, 8, ["name", "value"])) : te("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Pu = /* @__PURE__ */ _({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, a = Rt(), { forwardRef: n, currentElement: o } = L();
    ce(() => {
      const d = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      d && (a.onInputElementChange(d), setTimeout(() => {
        t.autoFocus && (d == null || d.focus());
      }, 1));
    });
    const l = B(() => t.disabled || a.disabled.value || !1), s = M();
    Mr(() => {
      var d;
      return s.value = (d = a.selectedElement.value) == null ? void 0 : d.id;
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
    return (d, p) => (f(), y(r(F), {
      ref: r(n),
      as: d.as,
      "as-child": d.asChild,
      type: d.type,
      disabled: l.value,
      value: r(a).searchTerm.value,
      "aria-expanded": r(a).open.value,
      "aria-controls": r(a).contentId,
      "aria-disabled": l.value ?? void 0,
      "aria-activedescendant": s.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: c,
      onKeydown: [
        Ue(we(i, ["prevent"]), ["down", "up"]),
        Ue(r(a).onInputEnter, ["enter"]),
        Ue(we(u, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: m(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), [Fl, Du] = se("ComboboxGroup"), Ou = /* @__PURE__ */ _({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: a, currentElement: n } = L(), o = ye(void 0, "radix-vue-combobox-group"), l = Rt(), s = M(!1);
    function i() {
      if (!n.value)
        return;
      const u = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      s.value = !!u.length;
    }
    return Yi(n, () => {
      ae(() => {
        i();
      });
    }, { childList: !0 }), J(() => l.searchTerm.value, () => {
      ae(() => {
        i();
      });
    }, { immediate: !0 }), Du({
      id: o
    }), (u, c) => At((f(), y(r(F), E(t, {
      ref_key: "currentRef",
      ref: a,
      role: "group",
      "aria-labelledby": r(o)
    }), {
      default: m(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [On, s.value]
    ]);
  }
}), Su = /* @__PURE__ */ _({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    L();
    const a = Fl({ id: "" });
    return (n, o) => (f(), y(r(F), E(t, {
      id: r(a).id
    }), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [zv, Eu] = se("ComboboxContent"), Mu = /* @__PURE__ */ _({
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
    const a = e, n = t, { position: o } = me(a), l = Rt();
    aa(a.bodyLock);
    const { forwardRef: s, currentElement: i } = L();
    oa(l.parentElement);
    const u = B(() => a.position === "popper" ? a : {}), c = ie(u.value);
    function d(h) {
      l.onSelectedValueChange("");
    }
    ce(() => {
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
    return Eu({ position: o }), (h, v) => (f(), y(r(Vl), null, {
      default: m(() => [
        h.dismissable ? (f(), y(r(la), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": h.disableOutsidePointerEvents,
          onDismiss: v[0] || (v[0] = (b) => r(l).onOpenChange(!1)),
          onFocusOutside: v[1] || (v[1] = (b) => {
            var g;
            (g = r(l).parentElement.value) != null && g.contains(b.target) && b.preventDefault(), n("focusOutside", b);
          }),
          onInteractOutside: v[2] || (v[2] = (b) => n("interactOutside", b)),
          onEscapeKeyDown: v[3] || (v[3] = (b) => n("escapeKeyDown", b)),
          onPointerDownOutside: v[4] || (v[4] = (b) => {
            var g;
            (g = r(l).parentElement.value) != null && g.contains(b.target) && b.preventDefault(), n("pointerDownOutside", b);
          })
        }, {
          default: m(() => [
            (f(), y(Qe(r(o) === "popper" ? r(Zt) : r(F)), E({ ...h.$attrs, ...r(c) }, {
              id: r(l).contentId,
              ref: r(s),
              role: "listbox",
              "data-state": r(l).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...r(o) === "popper" ? p : {}
              },
              onPointerleave: d
            }), {
              default: m(() => [
                x(h.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (f(), y(Qe(r(o) === "popper" ? r(Zt) : r(F)), E({ key: 1 }, { ...h.$attrs, ...u.value }, {
          id: r(l).contentId,
          ref: r(s),
          role: "listbox",
          "data-state": r(l).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...r(o) === "popper" ? p : {}
          },
          onPointerleave: d
        }), {
          default: m(() => [
            x(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Au = /* @__PURE__ */ _({
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
    const a = oe(e, t), { forwardRef: n } = L(), o = Rt();
    return o.contentId || (o.contentId = ye(void 0, "radix-vue-combobox-content")), (l, s) => (f(), y(r(Ie), {
      present: l.forceMount || r(o).open.value
    }, {
      default: m(() => [
        P(Mu, E({ ...r(a), ...l.$attrs }, { ref: r(n) }), {
          default: m(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Tu = /* @__PURE__ */ _({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    L();
    const a = Rt(), n = B(() => a.filteredOptions.value.length === 0);
    return (o, l) => n.value ? (f(), y(r(F), K(E({ key: 0 }, t)), {
      default: m(() => [
        x(o.$slots, "default", {}, () => [
          Y("No options")
        ])
      ]),
      _: 3
    }, 16)) : te("", !0);
  }
});
function Iu(e) {
  const t = Ra({
    nonce: M()
  });
  return B(() => {
    var a;
    return (e == null ? void 0 : e.value) || ((a = t.nonce) == null ? void 0 : a.value);
  });
}
const [Nv, Vu] = se("ComboboxItem"), Ru = "combobox.select", Fu = /* @__PURE__ */ _({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { disabled: o } = me(a), l = Rt();
    Fl({ id: "", options: M([]) });
    const { forwardRef: s } = L(), i = B(
      () => {
        var g, w;
        return l.multiple.value && Array.isArray(l.modelValue.value) ? (g = l.modelValue.value) == null ? void 0 : g.some((C) => it(C, a.value)) : it((w = l.modelValue) == null ? void 0 : w.value, a.value);
      }
    ), u = B(() => it(l.selectedValue.value, a.value)), c = ye(void 0, "radix-vue-combobox-item"), d = ye(void 0, "radix-vue-combobox-option"), p = B(() => l.isUserInputted.value ? l.searchTerm.value === "" || !!l.filteredOptions.value.find((g) => it(g, a.value)) : !0);
    async function h(g) {
      n("select", g), !(g != null && g.defaultPrevented) && !o.value && g && l.onValueChange(a.value);
    }
    function v(g) {
      if (!g)
        return;
      const w = { originalEvent: g, value: a.value };
      Hn(Ru, h, w);
    }
    async function b(g) {
      await ae(), !g.defaultPrevented && l.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Vu({
      isSelected: i
    }), (g, w) => (f(), y(r(ao), { value: g.value }, {
      default: m(() => [
        At(P(r(F), {
          id: r(d),
          ref: r(s),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": r(c),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": r(o) || void 0,
          "data-disabled": r(o) ? "" : void 0,
          as: g.as,
          "as-child": g.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: v,
          onPointermove: b
        }, {
          default: m(() => [
            x(g.$slots, "default", {}, () => [
              Y(Q(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [On, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Lu = /* @__PURE__ */ _({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return L(), (a, n) => (f(), y(r(F), E(t, { "aria-hidden": "true" }), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ll = /* @__PURE__ */ _({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(eo), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function zu() {
  const e = M(!1);
  return ce(() => {
    Ba("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Ba(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const Nu = wl(zu), [vt, zl] = se(["MenuRoot", "MenuSub"], "MenuContext"), [sa, Wu] = se("MenuRoot"), ju = /* @__PURE__ */ _({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o, dir: l } = me(a), s = ft(l), i = fe(a, "open", n), u = M(), c = Nu();
    return zl({
      open: i,
      onOpenChange: (d) => {
        i.value = d;
      },
      content: u,
      onContentChange: (d) => {
        u.value = d;
      }
    }), Wu({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: c,
      dir: s,
      modal: o
    }), (d, p) => (f(), y(r(ra), null, {
      default: m(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Uu = "rovingFocusGroup.onEntryFocus", Ku = { bubbles: !1, cancelable: !0 }, Hu = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Gu(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function qu(e, t, a) {
  const n = Gu(e.key, a);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Hu[n];
}
function Nl(e, t = !1) {
  const a = document.activeElement;
  for (const n of e)
    if (n === a || (n.focus({ preventScroll: t }), document.activeElement !== a))
      return;
}
function Yu(e, t) {
  return e.map((a, n) => e[(t + n) % e.length]);
}
const [Zu, Ju] = se("RovingFocusGroup"), Wl = /* @__PURE__ */ _({
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
    const n = e, o = a, { loop: l, orientation: s, dir: i } = me(n), u = ft(i), c = fe(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), d = M(!1), p = M(!1), h = M(0), { getItems: v } = Il();
    function b(w) {
      const C = !p.value;
      if (w.currentTarget && w.target === w.currentTarget && C && !d.value) {
        const D = new CustomEvent(Uu, Ku);
        if (w.currentTarget.dispatchEvent(D), o("entryFocus", D), !D.defaultPrevented) {
          const $ = v().map((A) => A.ref).filter((A) => A.dataset.disabled !== ""), O = $.find((A) => A.getAttribute("data-active") === "true"), S = $.find(
            (A) => A.id === c.value
          ), T = [O, S, ...$].filter(
            Boolean
          );
          Nl(T, n.preventScrollOnEntryFocus);
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
      getItems: v
    }), Ju({
      loop: l,
      dir: u,
      orientation: s,
      currentTabStopId: c,
      onItemFocus: (w) => {
        c.value = w;
      },
      onItemShiftTab: () => {
        d.value = !0;
      },
      onFocusableItemAdd: () => {
        h.value++;
      },
      onFocusableItemRemove: () => {
        h.value--;
      }
    }), (w, C) => (f(), y(r(Vl), null, {
      default: m(() => [
        P(r(F), {
          tabindex: d.value || h.value === 0 ? -1 : 0,
          "data-orientation": r(s),
          as: w.as,
          "as-child": w.asChild,
          dir: r(u),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (D) => p.value = !0),
          onMouseup: g,
          onFocus: b,
          onBlur: C[1] || (C[1] = (D) => d.value = !1)
        }, {
          default: m(() => [
            x(w.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Xu = /* @__PURE__ */ _({
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
    const t = e, a = Zu(), n = B(() => t.tabStopId || ye()), o = B(
      () => a.currentTabStopId.value === n.value
    ), { getItems: l } = Rl();
    ce(() => {
      t.focusable && a.onFocusableItemAdd();
    }), Qt(() => {
      t.focusable && a.onFocusableItemRemove();
    });
    function s(i) {
      if (i.key === "Tab" && i.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = qu(
        i,
        a.orientation.value,
        a.dir.value
      );
      if (u !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !t.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let c = [...l().map((d) => d.ref).filter((d) => d.dataset.disabled !== "")];
        if (u === "last")
          c.reverse();
        else if (u === "prev" || u === "next") {
          u === "prev" && c.reverse();
          const d = c.indexOf(
            i.currentTarget
          );
          c = a.loop.value ? Yu(c, d + 1) : c.slice(d + 1);
        }
        ae(() => Nl(c));
      }
    }
    return (i, u) => (f(), y(r(ao), null, {
      default: m(() => [
        P(r(F), {
          tabindex: o.value ? 0 : -1,
          "data-orientation": r(a).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: u[0] || (u[0] = (c) => {
            i.focusable ? r(a).onItemFocus(n.value) : c.preventDefault();
          }),
          onFocus: u[1] || (u[1] = (c) => r(a).onItemFocus(n.value)),
          onKeydown: s
        }, {
          default: m(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [no, Qu] = se("MenuContent"), oo = /* @__PURE__ */ _({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Yo({
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
    ...Al
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = vt(), l = sa(), { trapFocus: s, disableOutsidePointerEvents: i, loop: u } = me(a);
    qn(), aa(i.value);
    const c = M(""), d = M(0), p = M(0), h = M(null), v = M("right"), b = M(0), g = M(null), { createCollection: w } = na(), { forwardRef: C, currentElement: D } = L(), $ = w(D);
    J(D, (k) => {
      o.onContentChange(k);
    });
    const { handleTypeaheadSearch: O } = Yn($);
    Qt(() => {
      window.clearTimeout(d.value);
    });
    function S(k) {
      var I, R;
      return v.value === ((I = h.value) == null ? void 0 : I.side) && Rd(k, (R = h.value) == null ? void 0 : R.area);
    }
    async function T(k) {
      var I;
      n("openAutoFocus", k), !k.defaultPrevented && (k.preventDefault(), (I = D.value) == null || I.focus({
        preventScroll: !0
      }));
    }
    function A(k) {
      if (k.defaultPrevented)
        return;
      const I = k.target.closest("[data-radix-menu-content]") === k.currentTarget, R = k.ctrlKey || k.altKey || k.metaKey, ee = k.key.length === 1, Z = Xi(
        k,
        document.activeElement,
        D.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: l == null ? void 0 : l.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (Z)
        return Z == null ? void 0 : Z.focus();
      if (k.code === "Space" || (I && (k.key === "Tab" && k.preventDefault(), !R && ee && O(k.key)), k.target !== D.value) || !Ad.includes(k.key))
        return;
      k.preventDefault();
      const N = $.value;
      Pl.includes(k.key) && N.reverse(), xn(N);
    }
    function z(k) {
      var I, R;
      (R = (I = k == null ? void 0 : k.currentTarget) == null ? void 0 : I.contains) != null && R.call(I, k.target) || (window.clearTimeout(d.value), c.value = "");
    }
    function j(k) {
      var I;
      if (!Yt(k))
        return;
      const R = k.target, ee = b.value !== k.clientX;
      if ((I = k == null ? void 0 : k.currentTarget) != null && I.contains(R) && ee) {
        const Z = k.clientX > b.value ? "right" : "left";
        v.value = Z, b.value = k.clientX;
      }
    }
    return Qu({
      onItemEnter: (k) => !!S(k),
      onItemLeave: (k) => {
        var I;
        S(k) || ((I = D.value) == null || I.focus(), g.value = null);
      },
      onTriggerLeave: (k) => !!S(k),
      searchRef: c,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (k) => {
        h.value = k;
      }
    }), (k, I) => (f(), y(r(Na), {
      "as-child": "",
      trapped: r(s),
      onMountAutoFocus: T,
      onUnmountAutoFocus: I[7] || (I[7] = (R) => n("closeAutoFocus", R))
    }, {
      default: m(() => [
        P(r(la), {
          "as-child": "",
          "disable-outside-pointer-events": r(i),
          onEscapeKeyDown: I[2] || (I[2] = (R) => n("escapeKeyDown", R)),
          onPointerDownOutside: I[3] || (I[3] = (R) => n("pointerDownOutside", R)),
          onFocusOutside: I[4] || (I[4] = (R) => n("focusOutside", R)),
          onInteractOutside: I[5] || (I[5] = (R) => n("interactOutside", R)),
          onDismiss: I[6] || (I[6] = (R) => n("dismiss"))
        }, {
          default: m(() => [
            P(r(Wl), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": I[0] || (I[0] = (R) => g.value = R),
              "as-child": "",
              orientation: "vertical",
              dir: r(l).dir.value,
              loop: r(u),
              onEntryFocus: I[1] || (I[1] = (R) => {
                n("entryFocus", R), r(l).isUsingKeyboardRef.value || R.preventDefault();
              })
            }, {
              default: m(() => [
                P(r(Zt), {
                  ref: r(C),
                  role: "menu",
                  as: k.as,
                  "as-child": k.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": r(Jn)(r(o).open.value),
                  dir: r(l).dir.value,
                  side: k.side,
                  "side-offset": k.sideOffset,
                  align: k.align,
                  "align-offset": k.alignOffset,
                  "avoid-collisions": k.avoidCollisions,
                  "collision-boundary": k.collisionBoundary,
                  "collision-padding": k.collisionPadding,
                  "arrow-padding": k.arrowPadding,
                  "prioritize-position": k.prioritizePosition,
                  sticky: k.sticky,
                  "hide-when-detached": k.hideWhenDetached,
                  onKeydown: A,
                  onBlur: z,
                  onPointermove: j
                }, {
                  default: m(() => [
                    x(k.$slots, "default")
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
}), jl = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = no(), { forwardRef: n } = L(), o = M(!1);
    async function l(i) {
      if (!i.defaultPrevented && Yt(i)) {
        if (t.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function s(i) {
      await ae(), !i.defaultPrevented && Yt(i) && a.onItemLeave(i);
    }
    return (i, u) => (f(), y(r(ao), null, {
      default: m(() => [
        P(r(F), E({
          ref: r(n),
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
          onPointerleave: s,
          onFocus: u[0] || (u[0] = async (c) => {
            await ae(), !(c.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (c) => {
            await ae(), !c.defaultPrevented && (o.value = !1);
          })
        }), {
          default: m(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), lo = /* @__PURE__ */ _({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = t, { forwardRef: o, currentElement: l } = L(), s = sa(), i = no(), u = M(!1);
    async function c() {
      const d = l.value;
      if (!a.disabled && d) {
        const p = new CustomEvent(Ed, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await ae(), p.defaultPrevented ? u.value = !1 : s.onClose();
      }
    }
    return (d, p) => (f(), y(jl, E(a, {
      ref: r(o),
      onClick: c,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (h) => {
        var v;
        await ae(), !h.defaultPrevented && (u.value || (v = h.currentTarget) == null || v.click());
      }),
      onKeydown: p[2] || (p[2] = async (h) => {
        const v = r(i).searchRef.value !== "";
        d.disabled || v && h.key === " " || r(_n).includes(h.key) && (h.currentTarget.click(), h.preventDefault());
      })
    }), {
      default: m(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ec, Ul] = se(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), tc = /* @__PURE__ */ _({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ec({
      checked: M(!1)
    });
    return (a, n) => (f(), y(r(Ie), {
      present: a.forceMount || r(Pa)(r(t).checked.value) || r(t).checked.value === !0
    }, {
      default: m(() => [
        P(r(F), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": r(Xn)(r(t).checked.value)
        }, {
          default: m(() => [
            x(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ac = /* @__PURE__ */ _({
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
    const a = e, n = t, o = fe(a, "checked", n);
    return Ul({ checked: o }), (l, s) => (f(), y(lo, E({ role: "menuitemcheckbox" }, a, {
      "aria-checked": r(Pa)(r(o)) ? "mixed" : r(o),
      "data-state": r(Xn)(r(o)),
      onSelect: s[0] || (s[0] = async (i) => {
        n("select", i), r(Pa)(r(o)) ? o.value = !0 : o.value = !r(o);
      })
    }), {
      default: m(() => [
        x(l.$slots, "default", { checked: r(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), nc = /* @__PURE__ */ _({
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
    const a = e, n = t, o = oe(a, n), l = vt(), { forwardRef: s, currentElement: i } = L();
    return oa(i), (u, c) => (f(), y(oo, E(r(o), {
      ref: r(s),
      "trap-focus": r(l).open.value,
      "disable-outside-pointer-events": r(l).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (d) => r(l).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = we((d) => n("focusOutside", d), ["prevent"]))
    }), {
      default: m(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), oc = /* @__PURE__ */ _({
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
    const a = oe(e, t), n = vt();
    return (o, l) => (f(), y(oo, E(r(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: l[0] || (l[0] = (s) => r(n).onOpenChange(!1))
    }), {
      default: m(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lc = /* @__PURE__ */ _({
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
    const a = oe(e, t), n = vt(), o = sa();
    return (l, s) => (f(), y(r(Ie), {
      present: l.forceMount || r(n).open.value
    }, {
      default: m(() => [
        r(o).modal.value ? (f(), y(nc, K(E({ key: 0 }, { ...l.$attrs, ...r(a) })), {
          default: m(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), y(oc, K(E({ key: 1 }, { ...l.$attrs, ...r(a) })), {
          default: m(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Kl = /* @__PURE__ */ _({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(F), E({ role: "group" }, t), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rc = /* @__PURE__ */ _({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(F), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sc = /* @__PURE__ */ _({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(za), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ic, dc] = se("MenuRadioGroup"), uc = /* @__PURE__ */ _({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = fe(a, "modelValue", t);
    return dc({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, l) => (f(), y(Kl, K(G(a)), {
      default: m(() => [
        x(o.$slots, "default", { modelValue: r(n) })
      ]),
      _: 3
    }, 16));
  }
}), cc = /* @__PURE__ */ _({
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
    const a = e, n = t, { value: o } = me(a), l = ic(), s = B(
      () => l.modelValue.value === (o == null ? void 0 : o.value)
    );
    return Ul({ checked: s }), (i, u) => (f(), y(lo, E({ role: "menuitemradio" }, a, {
      "aria-checked": s.value,
      "data-state": r(Xn)(s.value),
      onSelect: u[0] || (u[0] = async (c) => {
        n("select", c), r(l).onValueChange(r(o));
      })
    }), {
      default: m(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), pc = /* @__PURE__ */ _({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(F), E(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Hl, fc] = se("MenuSub"), mc = /* @__PURE__ */ _({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = fe(a, "open", t, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = vt(), l = M(), s = M();
    return ge((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), zl({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: s,
      onContentChange: (i) => {
        s.value = i;
      }
    }), fc({
      triggerId: "",
      contentId: "",
      trigger: l,
      onTriggerChange: (i) => {
        l.value = i;
      }
    }), (i, u) => (f(), y(r(ra), null, {
      default: m(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), vc = /* @__PURE__ */ _({
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
    const a = oe(e, t), n = vt(), o = sa(), l = Hl(), { forwardRef: s, currentElement: i } = L();
    return l.contentId || (l.contentId = ye(void 0, "radix-vue-menu-sub-content")), (u, c) => (f(), y(r(Ie), {
      present: u.forceMount || r(n).open.value
    }, {
      default: m(() => [
        P(oo, E(r(a), {
          id: r(l).contentId,
          ref: r(s),
          "aria-labelledby": r(l).triggerId,
          align: "start",
          side: r(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = we((d) => {
            var p;
            r(o).isUsingKeyboardRef.value && ((p = r(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = we(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (d) => {
            d.defaultPrevented || d.target !== r(l).trigger.value && r(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (d) => {
            r(o).onClose(), d.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (d) => {
            var p, h;
            const v = (p = d.currentTarget) == null ? void 0 : p.contains(d.target), b = r(Id)[r(o).dir.value].includes(d.key);
            v && b && (r(n).onOpenChange(!1), (h = r(l).trigger.value) == null || h.focus(), d.preventDefault());
          })
        }), {
          default: m(() => [
            x(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), hc = /* @__PURE__ */ _({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = vt(), n = sa(), o = Hl(), l = no(), s = M(null);
    o.triggerId || (o.triggerId = ye(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      s.value && window.clearTimeout(s.value), s.value = null;
    }
    Qt(() => {
      i();
    });
    function u(p) {
      !Yt(p) || l.onItemEnter(p) || !t.disabled && !a.open.value && !s.value && (l.onPointerGraceIntentChange(null), s.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function c(p) {
      var h, v;
      if (!Yt(p))
        return;
      i();
      const b = (h = a.content.value) == null ? void 0 : h.getBoundingClientRect();
      if (b != null && b.width) {
        const g = (v = a.content.value) == null ? void 0 : v.dataset.side, w = g === "right", C = w ? -5 : 5, D = b[w ? "left" : "right"], $ = b[w ? "right" : "left"];
        l.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: D, y: b.top },
            { x: $, y: b.top },
            { x: $, y: b.bottom },
            { x: D, y: b.bottom }
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
    async function d(p) {
      var h;
      const v = l.searchRef.value !== "";
      t.disabled || v && p.key === " " || Td[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await ae(), (h = a.content.value) == null || h.focus(), p.preventDefault());
    }
    return (p, h) => (f(), y(Ll, { "as-child": "" }, {
      default: m(() => [
        P(jl, E(t, {
          id: r(o).triggerId,
          ref: (v) => {
            var b;
            (b = r(o)) == null || b.onTriggerChange(v == null ? void 0 : v.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": r(a).open.value,
          "aria-controls": r(o).contentId,
          "data-state": r(Jn)(r(a).open.value),
          onClick: h[0] || (h[0] = async (v) => {
            t.disabled || v.defaultPrevented || (v.currentTarget.focus(), r(a).open.value || r(a).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: c,
          onKeydown: d
        }), {
          default: m(() => [
            x(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [Gl, gc] = se("DropdownMenuRoot"), yc = /* @__PURE__ */ _({
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
    L();
    const o = fe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), l = M(), { modal: s, dir: i } = me(a), u = ft(i);
    return gc({
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
      modal: s,
      dir: u
    }), (c, d) => (f(), y(r(ju), {
      open: r(o),
      "onUpdate:open": d[0] || (d[0] = (p) => Xt(o) ? o.value = p : null),
      dir: r(u),
      modal: r(s)
    }, {
      default: m(() => [
        x(c.$slots, "default", { open: r(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), bc = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Gl(), { forwardRef: n, currentElement: o } = L();
    return ce(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = ye(void 0, "radix-vue-dropdown-menu-trigger")), (l, s) => (f(), y(r(Ll), { "as-child": "" }, {
      default: m(() => [
        P(r(F), {
          id: r(a).triggerId,
          ref: r(n),
          type: l.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: l.as,
          "aria-haspopup": "menu",
          "aria-expanded": r(a).open.value,
          "aria-controls": r(a).open.value ? r(a).contentId : void 0,
          "data-disabled": l.disabled ? "" : void 0,
          disabled: l.disabled,
          "data-state": r(a).open.value ? "open" : "closed",
          onClick: s[0] || (s[0] = async (i) => {
            var u;
            !l.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = r(a)) == null || u.onOpenToggle(), await ae(), r(a).open.value && i.preventDefault());
          }),
          onKeydown: s[1] || (s[1] = Ue(
            (i) => {
              l.disabled || (["Enter", " "].includes(i.key) && r(a).onOpenToggle(), i.key === "ArrowDown" && r(a).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: m(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), wc = /* @__PURE__ */ _({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(sc), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _c = /* @__PURE__ */ _({
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
    L();
    const n = Gl(), o = M(!1);
    function l(s) {
      s.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, s.preventDefault());
    }
    return n.contentId || (n.contentId = ye(void 0, "radix-vue-dropdown-menu-content")), (s, i) => {
      var u;
      return f(), y(r(lc), E(r(a), {
        id: r(n).contentId,
        "aria-labelledby": (u = r(n)) == null ? void 0 : u.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: l,
        onInteractOutside: i[0] || (i[0] = (c) => {
          var d;
          if (c.defaultPrevented) return;
          const p = c.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0, v = p.button === 2 || h;
          (!r(n).modal.value || v) && (o.value = !0), (d = r(n).triggerElement.value) != null && d.contains(c.target) && c.preventDefault();
        })
      }), {
        default: m(() => [
          x(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), ql = /* @__PURE__ */ _({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const a = e, n = mt(t);
    return L(), (o, l) => (f(), y(r(lo), K(G({ ...a, ...r(n) })), {
      default: m(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xc = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return L(), (a, n) => (f(), y(r(Kl), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cc = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return L(), (a, n) => (f(), y(r(pc), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $c = /* @__PURE__ */ _({
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
    const a = e, n = mt(t);
    return L(), (o, l) => (f(), y(r(ac), K(G({ ...a, ...r(n) })), {
      default: m(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yl = /* @__PURE__ */ _({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return L(), (a, n) => (f(), y(r(tc), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kc = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return L(), (a, n) => (f(), y(r(rc), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bc = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = mt(t);
    return L(), (o, l) => (f(), y(r(uc), K(G({ ...a, ...r(n) })), {
      default: m(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pc = /* @__PURE__ */ _({
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
    return L(), (n, o) => (f(), y(r(cc), K(G(r(a))), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dc = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = fe(a, "open", t, {
      passive: a.open === void 0,
      defaultValue: a.defaultOpen ?? !1
    });
    return L(), (o, l) => (f(), y(r(mc), {
      open: r(n),
      "onUpdate:open": l[0] || (l[0] = (s) => Xt(n) ? n.value = s : null)
    }, {
      default: m(() => [
        x(o.$slots, "default", { open: r(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Oc = /* @__PURE__ */ _({
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
    return L(), (n, o) => (f(), y(r(vc), E(r(a), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sc = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return L(), (a, n) => (f(), y(r(hc), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ec = /* @__PURE__ */ _({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return L(), (a, n) => (f(), y(r(F), E(t, {
      onMousedown: n[0] || (n[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ft, Mc] = se("PaginationRoot"), Ac = /* @__PURE__ */ _({
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
    const a = e, n = t, { siblingCount: o, disabled: l, showEdges: s } = me(a);
    L();
    const i = fe(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), u = B(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return Mc({
      page: i,
      onPageChange(c) {
        i.value = c;
      },
      pageCount: u,
      siblingCount: o,
      disabled: l,
      showEdges: s
    }), (c, d) => (f(), y(r(F), {
      as: c.as,
      "as-child": c.asChild
    }, {
      default: m(() => [
        x(c.$slots, "default", {
          page: r(i),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Tc = /* @__PURE__ */ _({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return L(), (a, n) => (f(), y(r(F), E(t, { "data-type": "ellipsis" }), {
      default: m(() => [
        x(a.$slots, "default", {}, () => [
          Y("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), Ic = /* @__PURE__ */ _({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ft();
    return L(), (n, o) => (f(), y(r(F), E(t, {
      "aria-label": "First Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: r(a).page.value === 1 || r(a).disabled.value,
      onClick: o[0] || (o[0] = (l) => r(a).onPageChange(1))
    }), {
      default: m(() => [
        x(n.$slots, "default", {}, () => [
          Y("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Vc = /* @__PURE__ */ _({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = Ft();
    return L(), (n, o) => (f(), y(r(F), E(t, {
      "aria-label": "Last Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: r(a).page.value === r(a).pageCount.value || r(a).disabled.value,
      onClick: o[0] || (o[0] = (l) => r(a).onPageChange(r(a).pageCount.value))
    }), {
      default: m(() => [
        x(n.$slots, "default", {}, () => [
          Y("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function qe(e, t) {
  const a = t - e + 1;
  return Array.from({ length: a }, (n, o) => o + e);
}
function Rc(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const ga = "ellipsis";
function Fc(e, t, a, n) {
  const o = t, l = Math.max(e - a, 1), s = Math.min(e + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, t) - 2, u = l > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(l - 1) > 2, c = s < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - s) > 2;
    if (!u && c)
      return [...qe(1, i), ga, o];
    if (u && !c) {
      const d = qe(o - i + 1, o);
      return [1, ga, ...d];
    }
    if (u && c) {
      const d = qe(l, s);
      return [1, ga, ...d, ga, o];
    }
    return qe(1, o);
  } else {
    const i = a * 2 + 1;
    return t < i ? qe(1, o) : e <= a + 1 ? qe(1, i) : t - e <= a ? qe(t - i + 1, o) : qe(l, s);
  }
}
const Lc = /* @__PURE__ */ _({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    L();
    const a = Ft(), n = B(() => Rc(
      Fc(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, l) => (f(), y(r(F), K(G(t)), {
      default: m(() => [
        x(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), Wv = /* @__PURE__ */ _({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    L();
    const a = Ft(), n = B(() => a.page.value === t.value);
    return (o, l) => (f(), y(r(F), E(t, {
      "data-type": "page",
      "aria-label": `Page ${o.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: r(a).disabled.value,
      type: o.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (s) => r(a).onPageChange(o.value))
    }), {
      default: m(() => [
        x(o.$slots, "default", {}, () => [
          Y(Q(o.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), zc = /* @__PURE__ */ _({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    L();
    const a = Ft();
    return (n, o) => (f(), y(r(F), E(t, {
      "aria-label": "Next Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: r(a).page.value === r(a).pageCount.value || r(a).disabled.value,
      onClick: o[0] || (o[0] = (l) => r(a).onPageChange(r(a).page.value + 1))
    }), {
      default: m(() => [
        x(n.$slots, "default", {}, () => [
          Y("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Nc = /* @__PURE__ */ _({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    L();
    const a = Ft();
    return (n, o) => {
      var l;
      return f(), y(r(F), E(t, {
        "aria-label": "Previous Page",
        type: n.as === "button" ? "button" : void 0,
        disabled: r(a).page.value === 1 || ((l = r(a).disabled) == null ? void 0 : l.value),
        onClick: o[0] || (o[0] = (s) => r(a).onPageChange(r(a).page.value - 1))
      }), {
        default: m(() => [
          x(n.$slots, "default", {}, () => [
            Y("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
}), [ia, Wc] = se("PopoverRoot"), jc = /* @__PURE__ */ _({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = e, n = t, { modal: o } = me(a), l = fe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), s = M(), i = M(!1);
    return Wc({
      contentId: "",
      modal: o,
      open: l,
      onOpenChange: (u) => {
        l.value = u;
      },
      onOpenToggle: () => {
        l.value = !l.value;
      },
      triggerElement: s,
      hasCustomAnchor: i
    }), (u, c) => (f(), y(r(ra), null, {
      default: m(() => [
        x(u.$slots, "default", { open: r(l) })
      ]),
      _: 3
    }));
  }
}), Uc = /* @__PURE__ */ _({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = ia(), { forwardRef: n, currentElement: o } = L();
    return ce(() => {
      a.triggerElement.value = o.value;
    }), (l, s) => (f(), y(Qe(r(a).hasCustomAnchor.value ? r(F) : r(eo)), { "as-child": "" }, {
      default: m(() => [
        P(r(F), {
          ref: r(n),
          type: l.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": r(a).open.value,
          "aria-controls": r(a).contentId,
          "data-state": r(a).open.value ? "open" : "closed",
          as: l.as,
          "as-child": t.asChild,
          onClick: r(a).onOpenToggle
        }, {
          default: m(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Kc = /* @__PURE__ */ _({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(za), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zl = /* @__PURE__ */ _({
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
    const a = e, n = t, o = ie(a), { forwardRef: l } = L(), s = ia();
    return qn(), (i, u) => (f(), y(r(Na), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: u[6] || (u[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: m(() => [
        P(r(la), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (c) => n("pointerDownOutside", c)),
          onInteractOutside: u[1] || (u[1] = (c) => n("interactOutside", c)),
          onEscapeKeyDown: u[2] || (u[2] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: u[3] || (u[3] = (c) => n("focusOutside", c)),
          onDismiss: u[4] || (u[4] = (c) => r(s).onOpenChange(!1))
        }, {
          default: m(() => [
            P(r(Zt), E(r(o), {
              id: r(s).contentId,
              ref: r(l),
              "data-state": r(s).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: m(() => [
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
}), Hc = /* @__PURE__ */ _({
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
    const a = e, n = t, o = ia(), l = M(!1);
    aa(!0);
    const s = oe(a, n), { forwardRef: i, currentElement: u } = L();
    return oa(u), (c, d) => (f(), y(Zl, E(r(s), {
      ref: r(i),
      "trap-focus": r(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: d[0] || (d[0] = we(
        (p) => {
          var h;
          n("closeAutoFocus", p), l.value || (h = r(o).triggerElement.value) == null || h.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: d[1] || (d[1] = (p) => {
        n("pointerDownOutside", p);
        const h = p.detail.originalEvent, v = h.button === 0 && h.ctrlKey === !0, b = h.button === 2 || v;
        l.value = b;
      }),
      onFocusOutside: d[2] || (d[2] = we(() => {
      }, ["prevent"]))
    }), {
      default: m(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Gc = /* @__PURE__ */ _({
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
    const a = e, n = t, o = ia(), l = M(!1), s = M(!1), i = oe(a, n);
    return (u, c) => (f(), y(Zl, E(r(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (d) => {
        var p;
        n("closeAutoFocus", d), d.defaultPrevented || (l.value || (p = r(o).triggerElement.value) == null || p.focus(), d.preventDefault()), l.value = !1, s.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = async (d) => {
        var p;
        n("interactOutside", d), d.defaultPrevented || (l.value = !0, d.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const h = d.target;
        (p = r(o).triggerElement.value) != null && p.contains(h) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && s.value && d.preventDefault();
      })
    }), {
      default: m(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qc = /* @__PURE__ */ _({
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
    const a = e, n = t, o = ia(), l = oe(a, n), { forwardRef: s } = L();
    return o.contentId || (o.contentId = ye(void 0, "radix-vue-popover-content")), (i, u) => (f(), y(r(Ie), {
      present: i.forceMount || r(o).open.value
    }, {
      default: m(() => [
        r(o).modal.value ? (f(), y(Hc, E({ key: 0 }, r(l), { ref: r(s) }), {
          default: m(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), y(Gc, E({ key: 1 }, r(l), { ref: r(s) }), {
          default: m(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Yc = ["default-value"], Zc = /* @__PURE__ */ _({
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
    return (o, l) => (f(), y(r(Tl), { "as-child": "" }, {
      default: m(() => [
        At(H("select", E({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": l[0] || (l[0] = (s) => Xt(a) ? a.value = s : null),
          "default-value": r(a)
        }), [
          x(o.$slots, "default")
        ], 16, Yc), [
          [Vr, r(a)]
        ])
      ]),
      _: 3
    }));
  }
}), Jc = {
  key: 0,
  value: ""
}, [ht, Jl] = se("SelectRoot"), [Xc, Qc] = se("SelectRoot"), ep = /* @__PURE__ */ _({
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
    const a = e, n = t, o = fe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), l = fe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), s = M(), i = M(), u = M({
      x: 0,
      y: 0
    }), c = M(!1), { required: d, disabled: p, dir: h } = me(a), v = ft(h);
    Jl({
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
      open: l,
      required: d,
      onOpenChange: (C) => {
        l.value = C;
      },
      dir: v,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const b = Fa(s), g = M(/* @__PURE__ */ new Set()), w = B(() => Array.from(g.value).map((C) => {
      var D;
      return (D = C.props) == null ? void 0 : D.value;
    }).join(";"));
    return Qc({
      onNativeOptionAdd: (C) => {
        g.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        g.value.delete(C);
      }
    }), (C, D) => (f(), y(r(ra), null, {
      default: m(() => [
        x(C.$slots, "default", {
          modelValue: r(o),
          open: r(l)
        }),
        r(b) ? (f(), y(Zc, E({ key: w.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: r(d),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: r(p),
          value: r(o),
          onChange: D[0] || (D[0] = ($) => o.value = $.target.value)
        }), {
          default: m(() => [
            r(o) === void 0 ? (f(), V("option", Jc)) : te("", !0),
            (f(!0), V(X, null, ve(Array.from(g.value), ($) => (f(), y(Qe($), E({ ref_for: !0 }, $.props, {
              key: $.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : te("", !0)
      ]),
      _: 3
    }));
  }
}), tp = [" ", "Enter", "ArrowUp", "ArrowDown"], ap = [" ", "Enter"], ze = 10;
function Xl(e) {
  return e === "" || Mi(e);
}
const np = /* @__PURE__ */ _({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, a = ht(), n = B(() => {
      var v;
      return ((v = a.disabled) == null ? void 0 : v.value) || t.disabled;
    }), { forwardRef: o, currentElement: l } = L();
    a.contentId || (a.contentId = ye(void 0, "radix-vue-select-content")), ce(() => {
      a.triggerElement = l;
    });
    const { injectCollection: s } = na(), i = s(), { search: u, handleTypeaheadSearch: c, resetTypeahead: d } = Yn(i);
    function p() {
      n.value || (a.onOpenChange(!0), d());
    }
    function h(v) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      };
    }
    return (v, b) => (f(), y(r(eo), { "as-child": "" }, {
      default: m(() => {
        var g, w, C, D;
        return [
          P(r(F), {
            ref: r(o),
            role: "combobox",
            type: v.as === "button" ? "button" : void 0,
            "aria-controls": r(a).contentId,
            "aria-expanded": r(a).open.value || !1,
            "aria-required": (g = r(a).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (w = r(a)) == null ? void 0 : w.dir.value,
            "data-state": (C = r(a)) != null && C.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": r(Xl)((D = r(a).modelValue) == null ? void 0 : D.value) ? "" : void 0,
            "as-child": v.asChild,
            as: v.as,
            onClick: b[0] || (b[0] = ($) => {
              var O;
              (O = $ == null ? void 0 : $.currentTarget) == null || O.focus();
            }),
            onPointerdown: b[1] || (b[1] = ($) => {
              if ($.pointerType === "touch")
                return $.preventDefault();
              const O = $.target;
              O.hasPointerCapture($.pointerId) && O.releasePointerCapture($.pointerId), $.button === 0 && $.ctrlKey === !1 && (h($), $.preventDefault());
            }),
            onPointerup: b[2] || (b[2] = we(
              ($) => {
                $.pointerType === "touch" && h($);
              },
              ["prevent"]
            )),
            onKeydown: b[3] || (b[3] = ($) => {
              const O = r(u) !== "";
              !($.ctrlKey || $.altKey || $.metaKey) && $.key.length === 1 && O && $.key === " " || (r(c)($.key), r(tp).includes($.key) && (p(), $.preventDefault()));
            })
          }, {
            default: m(() => [
              x(v.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), op = /* @__PURE__ */ _({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(za), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ro, lp] = se("SelectItemAlignedPosition"), rp = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const a = e, n = t, { injectCollection: o } = na(), l = ht(), s = gt(), i = o(), u = M(!1), c = M(!0), d = M(), { forwardRef: p, currentElement: h } = L(), { viewport: v, selectedItem: b, selectedItemText: g, focusSelectedItem: w } = s;
    function C() {
      if (l.triggerElement.value && l.valueElement.value && d.value && h.value && v != null && v.value && b != null && b.value && g != null && g.value) {
        const O = l.triggerElement.value.getBoundingClientRect(), S = h.value.getBoundingClientRect(), T = l.valueElement.value.getBoundingClientRect(), A = g.value.getBoundingClientRect();
        if (l.dir.value !== "rtl") {
          const Oe = A.left - S.left, Be = T.left - Oe, lt = O.left - Be, re = O.width + lt, _e = Math.max(re, S.width), rt = window.innerWidth - ze, qa = Po(Be, ze, rt - _e);
          d.value.style.minWidth = `${re}px`, d.value.style.left = `${qa}px`;
        } else {
          const Oe = S.right - A.right, Be = window.innerWidth - T.right - Oe, lt = window.innerWidth - O.right - Be, re = O.width + lt, _e = Math.max(re, S.width), rt = window.innerWidth - ze, qa = Po(
            Be,
            ze,
            rt - _e
          );
          d.value.style.minWidth = `${re}px`, d.value.style.right = `${qa}px`;
        }
        const z = i.value, j = window.innerHeight - ze * 2, k = v.value.scrollHeight, I = window.getComputedStyle(h.value), R = Number.parseInt(
          I.borderTopWidth,
          10
        ), ee = Number.parseInt(I.paddingTop, 10), Z = Number.parseInt(
          I.borderBottomWidth,
          10
        ), N = Number.parseInt(
          I.paddingBottom,
          10
        ), U = R + ee + k + N + Z, le = Math.min(
          b.value.offsetHeight * 5,
          U
        ), ue = window.getComputedStyle(v.value), pe = Number.parseInt(ue.paddingTop, 10), ke = Number.parseInt(
          ue.paddingBottom,
          10
        ), be = O.top + O.height / 2 - ze, Ka = j - be, Nt = b.value.offsetHeight / 2, Ha = b.value.offsetTop + Nt, yt = R + ee + Ha, Ga = U - yt;
        if (yt <= be) {
          const Oe = b.value === z[z.length - 1];
          d.value.style.bottom = "0px";
          const Be = h.value.clientHeight - v.value.offsetTop - v.value.offsetHeight, lt = Math.max(
            Ka,
            Nt + (Oe ? ke : 0) + Be + Z
          ), re = yt + lt;
          d.value.style.height = `${re}px`;
        } else {
          const Oe = b.value === z[0];
          d.value.style.top = "0px";
          const Be = Math.max(
            be,
            R + v.value.offsetTop + (Oe ? pe : 0) + Nt
          ) + Ga;
          d.value.style.height = `${Be}px`, v.value.scrollTop = yt - be + v.value.offsetTop;
        }
        d.value.style.margin = `${ze}px 0`, d.value.style.minHeight = `${le}px`, d.value.style.maxHeight = `${j}px`, n("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const D = M("");
    ce(async () => {
      await ae(), C(), h.value && (D.value = window.getComputedStyle(h.value).zIndex);
    });
    function $(O) {
      O && c.value === !0 && (C(), w == null || w(), c.value = !1);
    }
    return lp({
      contentWrapper: d,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: $
    }), (O, S) => (f(), V("div", {
      ref_key: "contentWrapperElement",
      ref: d,
      style: Sa({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: D.value
      })
    }, [
      P(r(F), E({
        ref: r(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...O.$attrs, ...a }), {
        default: m(() => [
          x(O.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), sp = /* @__PURE__ */ _({
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
  setup(e) {
    const t = ie(e);
    return (a, n) => (f(), y(r(Zt), E(r(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lt = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [gt, ip] = se("SelectContent"), dp = /* @__PURE__ */ _({
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
    const a = e, n = t, o = ht();
    qn(), aa(a.bodyLock);
    const { createCollection: l } = na(), s = M();
    oa(s);
    const i = l(s), { search: u, handleTypeaheadSearch: c } = Yn(i), d = M(), p = M(), h = M(), v = M(!1), b = M(!1);
    function g() {
      p.value && s.value && xn([p.value, s.value]);
    }
    J(v, () => {
      g();
    });
    const { onOpenChange: w, triggerPointerDownPosRef: C } = o;
    ge((S) => {
      if (!s.value)
        return;
      let T = { x: 0, y: 0 };
      const A = (j) => {
        var k, I;
        T = {
          x: Math.abs(
            Math.round(j.pageX) - (((k = C.value) == null ? void 0 : k.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(j.pageY) - (((I = C.value) == null ? void 0 : I.y) ?? 0)
          )
        };
      }, z = (j) => {
        var k;
        j.pointerType !== "touch" && (T.x <= 10 && T.y <= 10 ? j.preventDefault() : (k = s.value) != null && k.contains(j.target) || w(!1), document.removeEventListener("pointermove", A), C.value = null);
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
    function D(S) {
      const T = S.ctrlKey || S.altKey || S.metaKey;
      if (S.key === "Tab" && S.preventDefault(), !T && S.key.length === 1 && c(S.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(S.key)) {
        let A = i.value;
        if (["ArrowUp", "End"].includes(S.key) && (A = A.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const z = S.target, j = A.indexOf(z);
          A = A.slice(j + 1);
        }
        setTimeout(() => xn(A)), S.preventDefault();
      }
    }
    const $ = B(() => a.position === "popper" ? a : {}), O = ie($.value);
    return ip({
      content: s,
      viewport: d,
      onViewportChange: (S) => {
        d.value = S;
      },
      itemRefCallback: (S, T, A) => {
        var z, j;
        const k = !b.value && !A;
        (((z = o.modelValue) == null ? void 0 : z.value) !== void 0 && ((j = o.modelValue) == null ? void 0 : j.value) === T || k) && (p.value = S, k && (b.value = !0));
      },
      selectedItem: p,
      selectedItemText: h,
      onItemLeave: () => {
        var S;
        (S = s.value) == null || S.focus();
      },
      itemTextRefCallback: (S, T, A) => {
        var z, j;
        const k = !b.value && !A;
        (((z = o.modelValue) == null ? void 0 : z.value) !== void 0 && ((j = o.modelValue) == null ? void 0 : j.value) === T || k) && (h.value = S);
      },
      focusSelectedItem: g,
      position: a.position,
      isPositioned: v,
      searchRef: u
    }), (S, T) => (f(), y(r(Na), {
      "as-child": "",
      onMountAutoFocus: T[6] || (T[6] = we(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: T[7] || (T[7] = (A) => {
        var z;
        n("closeAutoFocus", A), !A.defaultPrevented && ((z = r(o).triggerElement.value) == null || z.focus({ preventScroll: !0 }), A.preventDefault());
      })
    }, {
      default: m(() => [
        P(r(la), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: T[2] || (T[2] = we(() => {
          }, ["prevent"])),
          onDismiss: T[3] || (T[3] = (A) => r(o).onOpenChange(!1)),
          onEscapeKeyDown: T[4] || (T[4] = (A) => n("escapeKeyDown", A)),
          onPointerDownOutside: T[5] || (T[5] = (A) => n("pointerDownOutside", A))
        }, {
          default: m(() => [
            (f(), y(Qe(
              S.position === "popper" ? sp : rp
            ), E({ ...S.$attrs, ...r(O) }, {
              id: r(o).contentId,
              ref: (A) => {
                s.value = r(Te)(A);
              },
              role: "listbox",
              "data-state": r(o).open.value ? "open" : "closed",
              dir: r(o).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: T[0] || (T[0] = we(() => {
              }, ["prevent"])),
              onPlaced: T[1] || (T[1] = (A) => v.value = !0),
              onKeydown: D
            }), {
              default: m(() => [
                x(S.$slots, "default")
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
}), up = /* @__PURE__ */ _({
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Jl(e.context), (t, a) => x(t.$slots, "default");
  }
}), cp = { key: 1 }, pp = /* @__PURE__ */ _({
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
    const a = e, n = oe(a, t), o = ht(), l = M();
    ce(() => {
      l.value = new DocumentFragment();
    });
    const s = M(), i = B(() => a.forceMount || o.open.value);
    return (u, c) => {
      var d;
      return i.value ? (f(), y(r(Ie), {
        key: 0,
        ref_key: "presenceRef",
        ref: s,
        present: !0
      }, {
        default: m(() => [
          P(dp, K(G({ ...r(n), ...u.$attrs })), {
            default: m(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((d = s.value) != null && d.present) && l.value ? (f(), V("div", cp, [
        (f(), y(Sn, { to: l.value }, [
          P(up, { context: r(o) }, {
            default: m(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : te("", !0);
    };
  }
}), fp = /* @__PURE__ */ _({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(F), E({ "aria-hidden": "true" }, t), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ql, mp] = se("SelectItem"), vp = /* @__PURE__ */ _({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: a } = me(t), n = ht(), o = gt(Lt), { forwardRef: l, currentElement: s } = L(), i = B(() => {
      var g;
      return ((g = n.modelValue) == null ? void 0 : g.value) === t.value;
    }), u = M(!1), c = M(t.textValue ?? ""), d = ye(void 0, "radix-vue-select-item-text");
    async function p(g) {
      await ae(), !(g != null && g.defaultPrevented) && (a.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function h(g) {
      var w;
      await ae(), !g.defaultPrevented && (a.value ? (w = o.onItemLeave) == null || w.call(o) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function v(g) {
      var w;
      await ae(), !g.defaultPrevented && g.currentTarget === document.activeElement && ((w = o.onItemLeave) == null || w.call(o));
    }
    async function b(g) {
      var w;
      await ae(), !(g.defaultPrevented || ((w = o.searchRef) == null ? void 0 : w.value) !== "" && g.key === " ") && (ap.includes(g.key) && p(), g.key === " " && g.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ce(() => {
      s.value && o.itemRefCallback(
        s.value,
        t.value,
        t.disabled
      );
    }), mp({
      value: t.value,
      disabled: a,
      textId: d,
      isSelected: i,
      onItemTextChange: (g) => {
        c.value = ((c.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, w) => (f(), y(r(F), {
      ref: r(l),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": r(d),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": r(a) || void 0,
      "data-disabled": r(a) ? "" : void 0,
      tabindex: r(a) ? void 0 : -1,
      as: g.as,
      "as-child": g.asChild,
      onFocus: w[0] || (w[0] = (C) => u.value = !0),
      onBlur: w[1] || (w[1] = (C) => u.value = !1),
      onPointerup: p,
      onPointerdown: w[2] || (w[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: w[3] || (w[3] = we(() => {
      }, ["prevent", "stop"])),
      onPointermove: h,
      onPointerleave: v,
      onKeydown: b
    }, {
      default: m(() => [
        x(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), hp = /* @__PURE__ */ _({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = Ql();
    return (n, o) => r(a).isSelected.value ? (f(), y(r(F), E({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : te("", !0);
  }
}), [gp, yp] = se("SelectGroup"), bp = /* @__PURE__ */ _({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, a = ye(void 0, "radix-vue-select-group");
    return yp({ id: a }), (n, o) => (f(), y(r(F), E({ role: "group" }, t, { "aria-labelledby": r(a) }), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), wp = /* @__PURE__ */ _({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, a = gp({ id: "" });
    return (n, o) => (f(), y(r(F), E(t, {
      id: r(a).id
    }), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), er = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, a = ht(), n = gt(Lt), o = Xc(), l = Ql(), { forwardRef: s, currentElement: i } = L(), u = B(() => {
      var c;
      return dt("option", {
        key: l.value,
        value: l.value,
        disabled: l.disabled.value,
        textContent: (c = i.value) == null ? void 0 : c.textContent
      });
    });
    return ce(() => {
      i.value && (l.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        l.value,
        l.disabled.value
      ), o.onNativeOptionAdd(u.value));
    }), En(() => {
      o.onNativeOptionRemove(u.value);
    }), (c, d) => (f(), V(X, null, [
      P(r(F), E({
        id: r(l).textId,
        ref: r(s)
      }, { ...t, ...c.$attrs }), {
        default: m(() => [
          x(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      r(l).isSelected.value && r(a).valueElement.value && !r(a).valueElementHasChildren.value ? (f(), y(Sn, {
        key: 0,
        to: r(a).valueElement.value
      }, [
        x(c.$slots, "default")
      ], 8, ["to"])) : te("", !0)
    ], 64));
  }
}), _p = /* @__PURE__ */ _({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: a } = me(t), n = Iu(a), o = gt(Lt), l = o.position === "item-aligned" ? ro() : void 0, { forwardRef: s, currentElement: i } = L();
    ce(() => {
      o == null || o.onViewportChange(i.value);
    });
    const u = M(0);
    function c(d) {
      const p = d.currentTarget, { shouldExpandOnScrollRef: h, contentWrapper: v } = l ?? {};
      if (h != null && h.value && v != null && v.value) {
        const b = Math.abs(u.value - p.scrollTop);
        if (b > 0) {
          const g = window.innerHeight - ze * 2, w = Number.parseFloat(
            v.value.style.minHeight
          ), C = Number.parseFloat(v.value.style.height), D = Math.max(w, C);
          if (D < g) {
            const $ = D + b, O = Math.min(g, $), S = $ - O;
            v.value.style.height = `${O}px`, v.value.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, v.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (d, p) => (f(), V(X, null, [
      P(r(F), E({
        ref: r(s),
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
        default: m(() => [
          x(d.$slots, "default")
        ]),
        _: 3
      }, 16),
      P(r(F), {
        as: "style",
        nonce: r(n)
      }, {
        default: m(() => [
          Y(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), tr = /* @__PURE__ */ _({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const a = t, { injectCollection: n } = na(), o = n(), l = gt(Lt), s = M(null);
    function i() {
      s.value !== null && (window.clearInterval(s.value), s.value = null);
    }
    ge(() => {
      const d = o.value.find(
        (p) => p === document.activeElement
      );
      d == null || d.scrollIntoView({ block: "nearest" });
    });
    function u() {
      s.value === null && (s.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    function c() {
      var d;
      (d = l.onItemLeave) == null || d.call(l), s.value === null && (s.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    return En(() => i()), (d, p) => {
      var h;
      return f(), y(r(F), E({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (h = d.$parent) == null ? void 0 : h.$props, {
        onPointerdown: u,
        onPointermove: c,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: m(() => [
          x(d.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), xp = /* @__PURE__ */ _({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = gt(Lt), a = t.position === "item-aligned" ? ro() : void 0, { forwardRef: n, currentElement: o } = L(), l = M(!1);
    return ge((s) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let c = function() {
          l.value = d.scrollTop > 0;
        };
        const d = t.viewport.value;
        c(), d.addEventListener("scroll", c), s(() => d.removeEventListener("scroll", c));
      }
    }), J(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (s, i) => l.value ? (f(), y(tr, {
      key: 0,
      ref: r(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: c } = r(t);
        u != null && u.value && c != null && c.value && (u.value.scrollTop = u.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: m(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : te("", !0);
  }
}), Cp = /* @__PURE__ */ _({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = gt(Lt), a = t.position === "item-aligned" ? ro() : void 0, { forwardRef: n, currentElement: o } = L(), l = M(!1);
    return ge((s) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let c = function() {
          const p = d.scrollHeight - d.clientHeight;
          l.value = Math.ceil(d.scrollTop) < p;
        };
        const d = t.viewport.value;
        c(), d.addEventListener("scroll", c), s(() => d.removeEventListener("scroll", c));
      }
    }), J(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (s, i) => l.value ? (f(), y(tr, {
      key: 0,
      ref: r(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: c } = r(t);
        u != null && u.value && c != null && c.value && (u.value.scrollTop = u.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: m(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : te("", !0);
  }
}), $p = /* @__PURE__ */ _({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: a } = L(), n = ht(), o = Ar();
    return Tr(() => {
      var l;
      const s = !!Va((l = o == null ? void 0 : o.default) == null ? void 0 : l.call(o)).length;
      n.onValueElementHasChildrenChange(s);
    }), ce(() => {
      n.valueElement = a;
    }), (l, s) => (f(), y(r(F), {
      ref: r(t),
      as: l.as,
      "as-child": l.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: m(() => {
        var i;
        return [
          r(Xl)((i = r(n).modelValue) == null ? void 0 : i.value) ? (f(), V(X, { key: 0 }, [
            Y(Q(l.placeholder), 1)
          ], 64)) : x(l.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), kp = /* @__PURE__ */ _({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, a) => (f(), y(r(F), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: m(() => [
        x(t.$slots, "default", {}, () => [
          Y("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Bp() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
Bp();
const Pp = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Dp, Op] = se("SwitchRoot"), Sp = /* @__PURE__ */ _({
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
    const a = e, n = t, { disabled: o } = me(a), l = fe(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    });
    function s() {
      o.value || (l.value = !l.value);
    }
    const { forwardRef: i, currentElement: u } = L(), c = Fa(u), d = B(() => {
      var p;
      return a.id && u.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Op({
      checked: l,
      toggleCheck: s,
      disabled: o
    }), (p, h) => (f(), V(X, null, [
      P(r(F), E(p.$attrs, {
        id: p.id,
        ref: r(i),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || d.value,
        "aria-checked": r(l),
        "aria-required": p.required,
        "data-state": r(l) ? "checked" : "unchecked",
        "data-disabled": r(o) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        disabled: r(o),
        onClick: s,
        onKeydown: Ue(we(s, ["prevent"]), ["enter"])
      }), {
        default: m(() => [
          x(p.$slots, "default", { checked: r(l) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      r(c) ? (f(), V("input", {
        key: 0,
        type: "checkbox",
        name: p.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: r(o),
        required: p.required,
        value: p.value,
        checked: !!r(l),
        "data-state": r(l) ? "checked" : "unchecked",
        "data-disabled": r(o) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Pp)) : te("", !0)
    ], 64));
  }
}), Ep = /* @__PURE__ */ _({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Dp();
    return L(), (a, n) => {
      var o;
      return f(), y(r(F), {
        "data-state": (o = r(t).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": r(t).disabled.value ? "" : void 0,
        "as-child": a.asChild,
        as: a.as
      }, {
        default: m(() => [
          x(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [so, Mp] = se("TabsRoot"), Ap = /* @__PURE__ */ _({
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
    const a = e, n = t, { orientation: o, dir: l } = me(a), s = ft(l);
    L();
    const i = fe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), u = M();
    return Mp({
      modelValue: i,
      changeModelValue: (c) => {
        i.value = c;
      },
      orientation: o,
      dir: s,
      activationMode: a.activationMode,
      baseId: ye(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (c, d) => (f(), y(r(F), {
      dir: r(s),
      "data-orientation": r(o),
      "as-child": c.asChild,
      as: c.as
    }, {
      default: m(() => [
        x(c.$slots, "default", { modelValue: r(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), Tp = /* @__PURE__ */ _({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: a } = me(t), { forwardRef: n, currentElement: o } = L(), l = so();
    return l.tabsList = o, (s, i) => (f(), y(r(Wl), {
      "as-child": "",
      orientation: r(l).orientation.value,
      dir: r(l).dir.value,
      loop: r(a)
    }, {
      default: m(() => [
        P(r(F), {
          ref: r(n),
          role: "tablist",
          "as-child": s.asChild,
          as: s.as,
          "aria-orientation": r(l).orientation.value
        }, {
          default: m(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function ar(e, t) {
  return `${e}-trigger-${t}`;
}
function nr(e, t) {
  return `${e}-content-${t}`;
}
const Ip = /* @__PURE__ */ _({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: a } = L(), n = so(), o = B(() => ar(n.baseId, t.value)), l = B(() => nr(n.baseId, t.value)), s = B(() => t.value === n.modelValue.value), i = M(s.value);
    return ce(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, c) => (f(), y(r(Ie), {
      present: s.value,
      "force-mount": ""
    }, {
      default: m(({ present: d }) => [
        P(r(F), {
          id: l.value,
          ref: r(a),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": s.value ? "active" : "inactive",
          "data-orientation": r(n).orientation.value,
          "aria-labelledby": o.value,
          hidden: !d.value,
          tabindex: "0",
          style: Sa({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: m(() => [
            u.forceMount || s.value ? x(u.$slots, "default", { key: 0 }) : te("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Vp = /* @__PURE__ */ _({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: a } = L(), n = so(), o = B(() => ar(n.baseId, t.value)), l = B(() => nr(n.baseId, t.value)), s = B(() => t.value === n.modelValue.value);
    return (i, u) => (f(), y(r(Xu), {
      "as-child": "",
      focusable: !i.disabled,
      active: s.value
    }, {
      default: m(() => [
        P(r(F), {
          id: o.value,
          ref: r(a),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": s.value ? "true" : "false",
          "aria-controls": l.value,
          "data-state": s.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": r(n).orientation.value,
          onMousedown: u[0] || (u[0] = we((c) => {
            !i.disabled && c.ctrlKey === !1 ? r(n).changeModelValue(i.value) : c.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = Ue((c) => r(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const c = r(n).activationMode !== "manual";
            !s.value && !i.disabled && c && r(n).changeModelValue(i.value);
          })
        }, {
          default: m(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), io = "-", Rp = (e) => {
  const t = Lp(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(io);
      return i[0] === "" && i.length !== 1 && i.shift(), or(i, t) || Fp(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const u = a[s] || [];
      return i && n[s] ? [...u, ...n[s]] : u;
    }
  };
}, or = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const a = e[0], n = t.nextPart.get(a), o = n ? or(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const l = e.join(io);
  return (s = t.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : s.classGroupId;
}, Ao = /^\[(.+)\]$/, Fp = (e) => {
  if (Ao.test(e)) {
    const t = Ao.exec(e)[1], a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Lp = (e) => {
  const {
    theme: t,
    prefix: a
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Np(Object.entries(e.classGroups), a).forEach(([l, s]) => {
    $n(s, n, l, t);
  }), n;
}, $n = (e, t, a, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const l = o === "" ? t : To(t, o);
      l.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (zp(o)) {
        $n(o(n), t, a, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([l, s]) => {
      $n(s, To(t, l), a, n);
    });
  });
}, To = (e, t) => {
  let a = e;
  return t.split(io).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, zp = (e) => e.isThemeGetter, Np = (e, t) => t ? e.map(([a, n]) => {
  const o = n.map((l) => typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([s, i]) => [t + s, i])) : l);
  return [a, o];
}) : e, Wp = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (l, s) => {
    a.set(l, s), t++, t > e && (t = 0, n = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let s = a.get(l);
      if (s !== void 0)
        return s;
      if ((s = n.get(l)) !== void 0)
        return o(l, s), s;
    },
    set(l, s) {
      a.has(l) ? a.set(l, s) : o(l, s);
    }
  };
}, lr = "!", jp = (e) => {
  const {
    separator: t,
    experimentalParseClassName: a
  } = e, n = t.length === 1, o = t[0], l = t.length, s = (i) => {
    const u = [];
    let c = 0, d = 0, p;
    for (let w = 0; w < i.length; w++) {
      let C = i[w];
      if (c === 0) {
        if (C === o && (n || i.slice(w, w + l) === t)) {
          u.push(i.slice(d, w)), d = w + l;
          continue;
        }
        if (C === "/") {
          p = w;
          continue;
        }
      }
      C === "[" ? c++ : C === "]" && c--;
    }
    const h = u.length === 0 ? i : i.substring(d), v = h.startsWith(lr), b = v ? h.substring(1) : h, g = p && p > d ? p - d : void 0;
    return {
      modifiers: u,
      hasImportantModifier: v,
      baseClassName: b,
      maybePostfixModifierPosition: g
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: s
  }) : s;
}, Up = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let a = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...a.sort(), n), a = []) : a.push(n);
  }), t.push(...a.sort()), t;
}, Kp = (e) => ({
  cache: Wp(e.cacheSize),
  parseClassName: jp(e),
  ...Rp(e)
}), Hp = /\s+/, Gp = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, l = [], s = e.trim().split(Hp);
  let i = "";
  for (let u = s.length - 1; u >= 0; u -= 1) {
    const c = s[u], {
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: v
    } = a(c);
    let b = !!v, g = n(b ? h.substring(0, v) : h);
    if (!g) {
      if (!b) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = n(h), !g) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      b = !1;
    }
    const w = Up(d).join(":"), C = p ? w + lr : w, D = C + g;
    if (l.includes(D))
      continue;
    l.push(D);
    const $ = o(g, b);
    for (let O = 0; O < $.length; ++O) {
      const S = $[O];
      l.push(C + S);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function qp() {
  let e = 0, t, a, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (a = rr(t)) && (n && (n += " "), n += a);
  return n;
}
const rr = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = rr(e[n])) && (a && (a += " "), a += t);
  return a;
};
function Yp(e, ...t) {
  let a, n, o, l = s;
  function s(u) {
    const c = t.reduce((d, p) => p(d), e());
    return a = Kp(c), n = a.cache.get, o = a.cache.set, l = i, i(u);
  }
  function i(u) {
    const c = n(u);
    if (c)
      return c;
    const d = Gp(u, a);
    return o(u, d), d;
  }
  return function() {
    return l(qp.apply(null, arguments));
  };
}
const de = (e) => {
  const t = (a) => a[e] || [];
  return t.isThemeGetter = !0, t;
}, sr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Zp = /^\d+\/\d+$/, Jp = /* @__PURE__ */ new Set(["px", "full", "screen"]), Xp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Qp = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ef = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, tf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, af = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Fe = (e) => Ct(e) || Jp.has(e) || Zp.test(e), Ye = (e) => zt(e, "length", cf), Ct = (e) => !!e && !Number.isNaN(Number(e)), dn = (e) => zt(e, "number", Ct), jt = (e) => !!e && Number.isInteger(Number(e)), nf = (e) => e.endsWith("%") && Ct(e.slice(0, -1)), q = (e) => sr.test(e), Ze = (e) => Xp.test(e), of = /* @__PURE__ */ new Set(["length", "size", "percentage"]), lf = (e) => zt(e, of, ir), rf = (e) => zt(e, "position", ir), sf = /* @__PURE__ */ new Set(["image", "url"]), df = (e) => zt(e, sf, ff), uf = (e) => zt(e, "", pf), Ut = () => !0, zt = (e, t, a) => {
  const n = sr.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : a(n[2]) : !1;
}, cf = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Qp.test(e) && !ef.test(e)
), ir = () => !1, pf = (e) => tf.test(e), ff = (e) => af.test(e), mf = () => {
  const e = de("colors"), t = de("spacing"), a = de("blur"), n = de("brightness"), o = de("borderColor"), l = de("borderRadius"), s = de("borderSpacing"), i = de("borderWidth"), u = de("contrast"), c = de("grayscale"), d = de("hueRotate"), p = de("invert"), h = de("gap"), v = de("gradientColorStops"), b = de("gradientColorStopPositions"), g = de("inset"), w = de("margin"), C = de("opacity"), D = de("padding"), $ = de("saturate"), O = de("scale"), S = de("sepia"), T = de("skew"), A = de("space"), z = de("translate"), j = () => ["auto", "contain", "none"], k = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", q, t], R = () => [q, t], ee = () => ["", Fe, Ye], Z = () => ["auto", Ct, q], N = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], U = () => ["solid", "dashed", "dotted", "double", "none"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ue = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], pe = () => ["", "0", q], ke = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], be = () => [Ct, q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ut],
      spacing: [Fe, Ye],
      blur: ["none", "", Ze, q],
      brightness: be(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ze, q],
      borderSpacing: R(),
      borderWidth: ee(),
      contrast: be(),
      grayscale: pe(),
      hueRotate: be(),
      invert: pe(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [nf, Ye],
      inset: I(),
      margin: I(),
      opacity: be(),
      padding: R(),
      saturate: be(),
      scale: be(),
      sepia: pe(),
      skew: be(),
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
        aspect: ["auto", "square", "video", q]
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
        columns: [Ze]
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
        object: [...N(), q]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: j()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": j()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": j()
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
        z: ["auto", jt, q]
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
        flex: ["1", "auto", "initial", "none", q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: pe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: pe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", jt, q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ut]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", jt, q]
        }, q]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ut]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [jt, q]
        }, q]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Z()
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
        "auto-cols": ["auto", "min", "max", "fr", q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", q]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", q, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [q, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [q, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ze]
        }, Ze]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [q, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ze, Ye]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", dn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ut]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ct, dn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Fe, q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", q]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", q]
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
        decoration: [...U(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Fe, Ye]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Fe, q]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q]
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
        content: ["none", q]
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
        bg: [...N(), rf]
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
        bg: ["auto", "cover", "contain", lf]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, df]
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
        from: [b]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [b]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [v]
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
        border: [...U(), "hidden"]
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
        divide: U()
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
        outline: ["", ...U()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Fe, q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Fe, Ye]
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
        ring: ee()
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
        "ring-offset": [Fe, Ye]
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
        shadow: ["", "inner", "none", Ze, uf]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ut]
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
        contrast: [u]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ze, q]
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
        saturate: [$]
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
        "backdrop-opacity": [C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [$]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", q]
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
        ease: ["linear", "in", "out", "in-out", q]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", q]
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
        rotate: [jt, q]
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
        "skew-x": [T]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [T]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q]
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
        "will-change": ["auto", "scroll", "contents", "transform", q]
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
        stroke: [Fe, Ye, dn]
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
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
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
}, vf = /* @__PURE__ */ Yp(mf);
function W(...e) {
  return vf(e);
}
const hf = /* @__PURE__ */ _({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(lu), E({
      class: r(W)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        t.class
      )
    }, r(n)), {
      default: m(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function dr(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (a = dr(e[t])) && (n && (n += " "), n += a);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function gf() {
  for (var e, t, a = 0, n = ""; a < arguments.length; ) (e = arguments[a++]) && (t = dr(e)) && (n && (n += " "), n += t);
  return n;
}
const Io = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Vo = gf, yf = (e, t) => (a) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Vo(e, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: l } = t, s = Object.keys(o).map((c) => {
    const d = a == null ? void 0 : a[c], p = l == null ? void 0 : l[c];
    if (d === null) return null;
    const h = Io(d) || Io(p);
    return o[c][h];
  }), i = a && Object.entries(a).reduce((c, d) => {
    let [p, h] = d;
    return h === void 0 || (c[p] = h), c;
  }, {}), u = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, d) => {
    let { class: p, className: h, ...v } = d;
    return Object.entries(v).every((b) => {
      let [g, w] = b;
      return Array.isArray(w) ? w.includes({
        ...l,
        ...i
      }[g]) : {
        ...l,
        ...i
      }[g] === w;
    }) ? [
      ...c,
      p,
      h
    ] : c;
  }, []);
  return Vo(e, s, u, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, Ge = /* @__PURE__ */ _({
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
    return (a, n) => (f(), y(r(F), {
      as: a.as,
      "as-child": a.asChild,
      class: ne(r(W)(r(Wa)({ variant: a.variant, size: a.size }), t.class))
    }, {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Wa = yf(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-500 text-slate-50 hover:bg-slate-700/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        primary: "bg-primary-500 text-primary-50 hover:bg-primary-700/90 dark:bg-primary-800 dark:text-slate-100 dark:hover:bg-primary-800/90",
        destructive: "bg-red-500 text-slate-50 hover:bg-red-700/90 dark:bg-red-800 dark:text-slate-100 dark:hover:bg-red-800/90",
        outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-800/80",
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
), bf = /* @__PURE__ */ _({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(pu), E({
      class: r(W)(
        r(Wa)({ variant: "ghost" }),
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
    }, r(n)), {
      default: m(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wf = /* @__PURE__ */ _({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(ou), E({
      class: r(W)("w-full border-collapse space-y-1", t.class)
    }, r(n)), {
      default: m(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _f = /* @__PURE__ */ _({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(uu), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xf = /* @__PURE__ */ _({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(du), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ro = /* @__PURE__ */ _({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(cu), E({
      class: r(W)("flex", t.class)
    }, r(n)), {
      default: m(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cf = /* @__PURE__ */ _({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(ru), E({
      class: r(W)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, r(n)), {
      default: m(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $f = /* @__PURE__ */ _({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(au), E({
      class: r(W)("relative flex w-full items-center justify-between pt-1", t.class)
    }, r(n)), {
      default: m(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kf = /* @__PURE__ */ _({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(nu), E({
      class: r(W)("text-sm font-medium", t.class)
    }, r(n)), {
      default: m(({ headingValue: s }) => [
        x(o.$slots, "default", { headingValue: s }, () => [
          Y(Q(s), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bf = /* @__PURE__ */ _({
  __name: "CalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(su), E({
      class: r(W)(
        r(Wa)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, r(n)), {
      default: m(() => l[0] || (l[0] = [
        Y(" > ")
      ])),
      _: 1
    }, 16, ["class"]));
  }
}), Pf = /* @__PURE__ */ _({
  __name: "CalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(iu), E({
      class: r(W)(
        r(Wa)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, r(n)), {
      default: m(() => l[0] || (l[0] = [
        Y(" < ")
      ])),
      _: 1
    }, 16, ["class"]));
  }
}), Df = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, Of = /* @__PURE__ */ _({
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
    const a = e, n = t, o = B(() => {
      const { class: s, ...i } = a;
      return i;
    }), l = oe(o, n);
    return (s, i) => (f(), y(r(tu), E({
      class: r(W)("p-3", a.class)
    }, r(l)), {
      default: m(({ grid: u, weekDays: c }) => [
        P(r($f), null, {
          default: m(() => [
            P(r(Pf)),
            P(r(kf)),
            P(r(Bf))
          ]),
          _: 1
        }),
        H("div", Df, [
          (f(!0), V(X, null, ve(u, (d) => (f(), y(r(wf), {
            key: d.value.toString()
          }, {
            default: m(() => [
              P(r(xf), null, {
                default: m(() => [
                  P(r(Ro), null, {
                    default: m(() => [
                      (f(!0), V(X, null, ve(c, (p) => (f(), y(r(Cf), { key: p }, {
                        default: m(() => [
                          Y(Q(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              P(r(_f), null, {
                default: m(() => [
                  (f(!0), V(X, null, ve(d.rows, (p, h) => (f(), y(r(Ro), {
                    key: `weekDate-${h}`,
                    class: "mt-2 w-full"
                  }, {
                    default: m(() => [
                      (f(!0), V(X, null, ve(p, (v) => (f(), y(r(hf), {
                        key: v.toString(),
                        date: v
                      }, {
                        default: m(() => [
                          P(r(bf), {
                            day: v,
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
});
function ur(e) {
  return Pn() ? (Dn(e), !0) : !1;
}
function ja(e) {
  return typeof e == "function" ? e() : r(e);
}
const Sf = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ef = (e) => typeof e < "u", Mf = Object.prototype.toString, Af = (e) => Mf.call(e) === "[object Object]", cr = () => {
};
function Tf(e, t) {
  function a(...n) {
    return new Promise((o, l) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(l);
    });
  }
  return a;
}
const pr = (e) => e();
function If(e = pr) {
  const t = M(!0);
  function a() {
    t.value = !1;
  }
  function n() {
    t.value = !0;
  }
  const o = (...l) => {
    t.value && e(...l);
  };
  return { isActive: Mn(t), pause: a, resume: n, eventFilter: o };
}
function Vf(e) {
  return Me();
}
function Rf(...e) {
  if (e.length !== 1)
    return Wo(...e);
  const t = e[0];
  return typeof t == "function" ? Mn(qo(() => ({ get: t, set: cr }))) : M(t);
}
function Ff(e, t, a = {}) {
  const {
    eventFilter: n = pr,
    ...o
  } = a;
  return J(
    e,
    Tf(
      n,
      t
    ),
    o
  );
}
function Lf(e, t, a = {}) {
  const {
    eventFilter: n,
    ...o
  } = a, { eventFilter: l, pause: s, resume: i, isActive: u } = If(n);
  return { stop: Ff(
    e,
    t,
    {
      ...o,
      eventFilter: l
    }
  ), pause: s, resume: i, isActive: u };
}
function fr(e, t = !0, a) {
  Vf() ? ce(e, a) : t ? e() : ae(e);
}
function mr(e) {
  var t;
  const a = ja(e);
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
const Mt = Sf ? window : void 0;
function Fo(...e) {
  let t, a, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, n, o] = e, t = Mt) : [t, a, n, o] = e, !t)
    return cr;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const l = [], s = () => {
    l.forEach((d) => d()), l.length = 0;
  }, i = (d, p, h, v) => (d.addEventListener(p, h, v), () => d.removeEventListener(p, h, v)), u = J(
    () => [mr(t), ja(o)],
    ([d, p]) => {
      if (s(), !d)
        return;
      const h = Af(p) ? { ...p } : p;
      l.push(
        ...a.flatMap((v) => n.map((b) => i(d, v, b, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), s();
  };
  return ur(c), c;
}
function zf() {
  const e = M(!1), t = Me();
  return t && ce(() => {
    e.value = !0;
  }, t), e;
}
function Nf(e) {
  const t = zf();
  return B(() => (t.value, !!e()));
}
function Wf(e, t = {}) {
  const { window: a = Mt } = t, n = Nf(() => a && "matchMedia" in a && typeof a.matchMedia == "function");
  let o;
  const l = M(!1), s = (c) => {
    l.value = c.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", s) : o.removeListener(s));
  }, u = ge(() => {
    n.value && (i(), o = a.matchMedia(ja(e)), "addEventListener" in o ? o.addEventListener("change", s) : o.addListener(s), l.value = o.matches);
  });
  return ur(() => {
    u(), i(), o = void 0;
  }), l;
}
function jf(e) {
  return JSON.parse(JSON.stringify(e));
}
const ya = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ba = "__vueuse_ssr_handlers__", Uf = /* @__PURE__ */ Kf();
function Kf() {
  return ba in ya || (ya[ba] = ya[ba] || {}), ya[ba];
}
function vr(e, t) {
  return Uf[e] || t;
}
function Hf(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Gf = {
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
}, Lo = "vueuse-storage";
function qf(e, t, a, n = {}) {
  var o;
  const {
    flush: l = "pre",
    deep: s = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: u = !0,
    mergeDefaults: c = !1,
    shallow: d,
    window: p = Mt,
    eventFilter: h,
    onError: v = (k) => {
      console.error(k);
    },
    initOnMounted: b
  } = n, g = (d ? Bn : M)(typeof t == "function" ? t() : t);
  if (!a)
    try {
      a = vr("getDefaultStorage", () => {
        var k;
        return (k = Mt) == null ? void 0 : k.localStorage;
      })();
    } catch (k) {
      v(k);
    }
  if (!a)
    return g;
  const w = ja(t), C = Hf(w), D = (o = n.serializer) != null ? o : Gf[C], { pause: $, resume: O } = Lf(
    g,
    () => T(g.value),
    { flush: l, deep: s, eventFilter: h }
  );
  p && i && fr(() => {
    Fo(p, "storage", z), Fo(p, Lo, j), b && z();
  }), b || z();
  function S(k, I) {
    p && p.dispatchEvent(new CustomEvent(Lo, {
      detail: {
        key: e,
        oldValue: k,
        newValue: I,
        storageArea: a
      }
    }));
  }
  function T(k) {
    try {
      const I = a.getItem(e);
      if (k == null)
        S(I, null), a.removeItem(e);
      else {
        const R = D.write(k);
        I !== R && (a.setItem(e, R), S(I, R));
      }
    } catch (I) {
      v(I);
    }
  }
  function A(k) {
    const I = k ? k.newValue : a.getItem(e);
    if (I == null)
      return u && w != null && a.setItem(e, D.write(w)), w;
    if (!k && c) {
      const R = D.read(I);
      return typeof c == "function" ? c(R, w) : C === "object" && !Array.isArray(R) ? { ...w, ...R } : R;
    } else return typeof I != "string" ? I : D.read(I);
  }
  function z(k) {
    if (!(k && k.storageArea !== a)) {
      if (k && k.key == null) {
        g.value = w;
        return;
      }
      if (!(k && k.key !== e)) {
        $();
        try {
          (k == null ? void 0 : k.newValue) !== D.write(g.value) && (g.value = A(k));
        } catch (I) {
          v(I);
        } finally {
          k ? ae(O) : O();
        }
      }
    }
  }
  function j(k) {
    z(k.detail);
  }
  return g;
}
function hr(e) {
  return Wf("(prefers-color-scheme: dark)", e);
}
function Yf(e = {}) {
  const {
    selector: t = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = Mt,
    storage: l,
    storageKey: s = "vueuse-color-scheme",
    listenToStorageChanges: i = !0,
    storageRef: u,
    emitAuto: c,
    disableTransition: d = !0
  } = e, p = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, h = hr({ window: o }), v = B(() => h.value ? "dark" : "light"), b = u || (s == null ? Rf(n) : qf(s, n, l, { window: o, listenToStorageChanges: i })), g = B(() => b.value === "auto" ? v.value : b.value), w = vr(
    "updateHTMLAttrs",
    (O, S, T) => {
      const A = typeof O == "string" ? o == null ? void 0 : o.document.querySelector(O) : mr(O);
      if (!A)
        return;
      let z;
      if (d && (z = o.document.createElement("style"), z.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), o.document.head.appendChild(z)), S === "class") {
        const j = T.split(/\s/g);
        Object.values(p).flatMap((k) => (k || "").split(/\s/g)).filter(Boolean).forEach((k) => {
          j.includes(k) ? A.classList.add(k) : A.classList.remove(k);
        });
      } else
        A.setAttribute(S, T);
      d && (o.getComputedStyle(z).opacity, document.head.removeChild(z));
    }
  );
  function C(O) {
    var S;
    w(t, a, (S = p[O]) != null ? S : O);
  }
  function D(O) {
    e.onChanged ? e.onChanged(O, C) : C(O);
  }
  J(g, D, { flush: "post", immediate: !0 }), fr(() => D(g.value));
  const $ = B({
    get() {
      return c ? b.value : g.value;
    },
    set(O) {
      b.value = O;
    }
  });
  try {
    return Object.assign($, { store: b, system: v, state: g });
  } catch {
    return $;
  }
}
function Zf(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: a = "",
    window: n = Mt
  } = e, o = Yf({
    ...e,
    onChanged: (i, u) => {
      var c;
      e.onChanged ? (c = e.onChanged) == null || c.call(e, i === "dark", u, i) : u(i);
    },
    modes: {
      dark: t,
      light: a
    }
  }), l = B(() => o.system ? o.system.value : hr({ window: n }).value ? "dark" : "light");
  return B({
    get() {
      return o.value === "dark";
    },
    set(i) {
      const u = i ? "dark" : "light";
      l.value === u ? o.value = "auto" : o.value = u;
    }
  });
}
function Jf(e, t, a, n = {}) {
  var o, l, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: p,
    shouldEmit: h
  } = n, v = Me(), b = a || (v == null ? void 0 : v.emit) || ((o = v == null ? void 0 : v.$emit) == null ? void 0 : o.bind(v)) || ((s = (l = v == null ? void 0 : v.proxy) == null ? void 0 : l.$emit) == null ? void 0 : s.bind(v == null ? void 0 : v.proxy));
  let g = c;
  g = g || `update:${t.toString()}`;
  const w = ($) => i ? typeof i == "function" ? i($) : jf($) : $, C = () => Ef(e[t]) ? w(e[t]) : p, D = ($) => {
    h ? h($) && b(g, $) : b(g, $);
  };
  if (u) {
    const $ = C(), O = M($);
    let S = !1;
    return J(
      () => e[t],
      (T) => {
        S || (S = !0, O.value = w(T), ae(() => S = !1));
      }
    ), J(
      O,
      (T) => {
        !S && (T !== e[t] || d) && D(T);
      },
      { deep: d }
    ), O;
  } else
    return B({
      get() {
        return C();
      },
      set($) {
        D($);
      }
    });
}
function Xf(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    })
  ]);
}
function Ua(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]);
}
function Qf(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
    })
  ]);
}
function em(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
    })
  ]);
}
function gr(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    })
  ]);
}
function tm(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5 8.25 12l7.5-7.5"
    })
  ]);
}
function yr(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m8.25 4.5 7.5 7.5-7.5 7.5"
    })
  ]);
}
function am(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    })
  ]);
}
function nm(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 15.75 7.5-7.5 7.5 7.5"
    })
  ]);
}
function om(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    })
  ]);
}
function lm(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    })
  ]);
}
function rm(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    })
  ]);
}
function sm(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    })
  ]);
}
function br(e, t) {
  return f(), V("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    H("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
const im = /* @__PURE__ */ _({
  __name: "Toggle",
  props: /* @__PURE__ */ cn({
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
    class: {},
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ cn(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const a = t, n = e, o = Zo(e, "modelValue");
    J(o, () => {
      a("update:modelValue", o.value);
    });
    const l = B(() => {
      const { class: i, ...u } = n;
      return u;
    }), s = oe(l, a);
    return (i, u) => (f(), y(r(Sp), E({
      checked: o.value,
      "onUpdate:checked": u[0] || (u[0] = (c) => o.value = c)
    }, r(s), {
      class: r(W)(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-600 data-[state=unchecked]:bg-primary-300 dark:focus-visible:ring-primary-300 dark:focus-visible:ring-offset-primary-950 dark:data-[state=checked]:bg-primary-800 dark:data-[state=unchecked]:bg-primary-600",
        n.class
      )
    }), {
      default: m(({ checked: c }) => [
        P(r(Ep), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-primary-950" }, {
          default: m(() => [
            c ? x(i.$slots, "checked", { key: 0 }) : te("", !0),
            c ? te("", !0) : x(i.$slots, "not-checked", { key: 1 })
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["checked", "class"]));
  }
}), jv = /* @__PURE__ */ _({
  __name: "DarkModeToggle",
  setup(e) {
    const t = Zf({
      selector: "html"
    });
    return (a, n) => (f(), y(im, {
      modelValue: r(t),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => Xt(t) ? t.value = o : null)
    }, {
      checked: m(() => [
        P(r(rm), { class: "m-auto mt-0.5 size-4 text-primary-900" })
      ]),
      "not-checked": m(() => [
        P(r(sm), { class: "m-auto size-5 text-primary-900" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Uv = /* @__PURE__ */ _({
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
    return (o, l) => (f(), V(X, null, [
      P(r(Jt), {
        onClick: n,
        class: ne(t.class)
      }, {
        default: m(() => [
          (f(!0), V(X, null, ve(o.headers, (s) => (f(), y(r(Oa), {
            key: s.value
          }, {
            default: m(() => [
              o.$slots[`cell_header_${s.value}`] ? x(o.$slots, `cell_header_${s.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (f(), V(X, { key: 1 }, [
                Y(Q(o.row[s.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (f(), y(r(kn), { key: 0 }, {
            default: m(() => [
              x(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : te("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (f(!0), V(X, { key: 0 }, ve(o.subRows, (s, i) => (f(), y(r(Jt), { key: i }, {
        default: m(() => [
          (f(!0), V(X, null, ve(o.headers, (u) => (f(), y(r(Oa), {
            key: u.value
          }, {
            default: m(() => [
              o.$slots[`subrow_cell_${u.value}`] ? x(o.$slots, `subrow_cell_${u.value}`, {
                key: 0,
                item: s,
                open: a.value
              }) : (f(), V(X, { key: 1 }, [
                Y(Q("subrow_cell_" + u.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (f(), y(r(kn), { key: 0 }, {
            default: m(() => [
              x(o.$slots, "sub_row_actions", {
                item: o.row,
                open: a.value
              })
            ]),
            _: 3
          })) : te("", !0)
        ]),
        _: 2
      }, 1024))), 128)) : te("", !0)
    ], 64));
  }
}), dm = { class: "relative w-full overflow-auto" }, um = /* @__PURE__ */ _({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), V("div", dm, [
      H("table", {
        class: ne(r(W)("w-full caption-bottom text-sm", t.class))
      }, [
        x(a.$slots, "default")
      ], 2)
    ]));
  }
}), cm = /* @__PURE__ */ _({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), V("tbody", {
      class: ne(r(W)("[&_tr:last-child]:border-0", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), Oa = /* @__PURE__ */ _({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), V("td", {
      class: ne(["p-4 align-middle dark:text-slate-300 [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), pm = /* @__PURE__ */ _({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), V("th", {
      class: ne(
        r(W)(
          "h-12 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400 [&:has([role=checkbox])]:pr-0",
          t.class
        )
      )
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), fm = /* @__PURE__ */ _({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), V("thead", {
      class: ne(r(W)("[&_tr]:border-b", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), Kv = /* @__PURE__ */ _({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), V("tfoot", {
      class: ne(
        r(W)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0",
          t.class
        )
      )
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), Jt = /* @__PURE__ */ _({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), V("tr", {
      class: ne(
        r(W)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          t.class
        )
      )
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), kn = /* @__PURE__ */ _({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), V("td", {
      class: ne(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), mm = /* @__PURE__ */ _({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), V("caption", {
      class: ne(r(W)("mt-4 text-sm text-slate-500 dark:text-slate-400", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), vm = { class: "flex items-center justify-center py-10" }, Hv = /* @__PURE__ */ _({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(Jt, null, {
      default: m(() => [
        P(Oa, E({
          class: r(W)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, a.value), {
          default: m(() => [
            H("div", vm, [
              x(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Gv = /* @__PURE__ */ _({
  __name: "Datatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, a) => (f(), y(r(um), null, {
      default: m(() => [
        t.caption ? (f(), y(r(mm), { key: 0 }, {
          default: m(() => [
            Y(Q(t.caption), 1)
          ]),
          _: 1
        })) : te("", !0),
        P(r(fm), null, {
          default: m(() => [
            P(r(Jt), null, {
              default: m(() => [
                (f(!0), V(X, null, ve(t.headers, (n, o) => (f(), y(r(pm), null, {
                  default: m(() => [
                    t.$slots[`header_${t.headers[o].value}`] ? x(t.$slots, `header_${t.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (f(), V(X, { key: 1 }, [
                      Y(Q(n.name), 1)
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
        P(r(cm), null, {
          default: m(() => [
            x(t.$slots, "default", { item: t.rows }, () => [
              (f(!0), V(X, null, ve(t.rows, (n, o) => (f(), y(r(Jt), { key: o }, {
                default: m(() => [
                  (f(!0), V(X, null, ve(t.headers, (l) => (f(), y(r(Oa), {
                    key: l.value
                  }, {
                    default: m(() => [
                      t.$slots[`cell_${l.value}`] ? x(t.$slots, `cell_${l.value}`, {
                        key: 0,
                        item: n
                      }) : (f(), V(X, { key: 1 }, [
                        Y(Q(n[l.value]), 1)
                      ], 64))
                    ]),
                    _: 2
                  }, 1024))), 128)),
                  t.$slots.row_actions ? (f(), y(r(kn), { key: 0 }, {
                    default: m(() => [
                      x(t.$slots, "row_actions", { item: n })
                    ]),
                    _: 2
                  }, 1024)) : te("", !0)
                ]),
                _: 2
              }, 1024))), 128))
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), hm = /* @__PURE__ */ _({
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
    return (l, s) => (f(), y(r(yc), K(G(r(o))), {
      default: m(({ open: i }) => [
        x(l.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), wr = /* @__PURE__ */ _({
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
    return (a, n) => (f(), V("div", {
      class: ne(
        r(W)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          t.class
        )
      )
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), gm = /* @__PURE__ */ _({
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
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(wr, {
      class: ne(t.class)
    }, {
      default: m(() => [
        P(r(ql), E(r(n), {
          as: o.as,
          href: o.href,
          class: "size-full"
        }), {
          default: m(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "href"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ym = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = ie(e);
    return (n, o) => (f(), y(r(bc), E({ class: "outline-none" }, r(a)), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bm = /* @__PURE__ */ _({
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
    const a = e, n = t, o = B(() => {
      const { class: s, ...i } = a;
      return i;
    }), l = oe(o, n);
    return (s, i) => (f(), y(r(wc), null, {
      default: m(() => [
        P(r(_c), E(r(l), {
          class: r(W)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: m(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), qv = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(xc), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yv = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (l, s) => (f(), y(r(Bc), K(G(r(o))), {
      default: m(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zv = /* @__PURE__ */ _({
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
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(wr, {
      class: ne(t.class)
    }, {
      default: m(() => [
        P(r(ql), E(r(n), { class: "size-full" }), {
          default: m(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), wm = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Jv = /* @__PURE__ */ _({
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
    const a = e, n = t, o = B(() => {
      const { class: s, ...i } = a;
      return i;
    }), l = oe(o, n);
    return (s, i) => (f(), y(r($c), E(r(l), {
      class: r(W)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
        a.class
      )
    }), {
      default: m(() => [
        H("span", wm, [
          P(r(Yl), null, {
            default: m(() => [
              P(r(Ua), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _m = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Xv = /* @__PURE__ */ _({
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
    const a = e, n = t, o = B(() => {
      const { class: s, ...i } = a;
      return i;
    }), l = oe(o, n);
    return (s, i) => (f(), y(r(Pc), E(r(l), {
      class: r(W)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
        a.class
      )
    }), {
      default: m(() => [
        H("span", _m, [
          P(r(Yl), null, {
            default: m(() => [
              P(r(Jo), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qv = /* @__PURE__ */ _({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), V("span", {
      class: ne(r(W)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), eh = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(r(Cc), E(a.value, {
      class: r(W)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), th = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(kc), E(r(n), {
      class: r(W)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", t.class)
    }), {
      default: m(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ah = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (l, s) => (f(), y(r(Dc), K(G(r(o))), {
      default: m(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nh = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(Sc), E(r(n), {
      class: r(W)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800",
        t.class
      )
    }), {
      default: m(() => [
        x(o.$slots, "default"),
        P(r(yr), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oh = /* @__PURE__ */ _({
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
    const a = e, n = t, o = B(() => {
      const { class: s, ...i } = a;
      return i;
    }), l = oe(o, n);
    return (s, i) => (f(), y(r(Oc), E(r(l), {
      class: r(W)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        a.class
      )
    }), {
      default: m(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xm = /* @__PURE__ */ _({
  __name: "Dropdown",
  props: {
    triggerClass: {},
    widthClass: { default: "w-56" }
  },
  setup(e) {
    return (t, a) => (f(), y(r(hm), null, {
      default: m(({ open: n }) => [
        P(r(ym), {
          "as-child": "",
          class: ne([t.triggerClass])
        }, {
          default: m(() => [
            x(t.$slots, "trigger", { open: n })
          ]),
          _: 2
        }, 1032, ["class"]),
        P(r(bm), {
          class: ne([t.widthClass])
        }, {
          default: m(() => [
            x(t.$slots, "content")
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }));
  }
}), _r = /* @__PURE__ */ _({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (l, s) => (f(), y(r(yd), K(G(r(o))), {
      default: m(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lh = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(Qn), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cm = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(bd), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $m = /* @__PURE__ */ _({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), V("div", {
      class: ne(r(W)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), km = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(Ud), E(r(n), {
      class: r(W)("text-lg leading-none tracking-tight text-slate-500 dark:text-slate-200", t.class)
    }), {
      default: m(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bm = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(Kd), E(r(n), {
      class: r(W)("text-sm text-slate-500 dark:text-slate-500", t.class)
    }), {
      default: m(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xr = /* @__PURE__ */ _({
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
    const a = t, n = e, o = B(() => {
      const { class: s, ...i } = n;
      return i;
    }), l = oe(o, a);
    return (s, i) => (f(), y(r($l), null, {
      default: m(() => [
        P(r(Sl), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        P(r(Ol), E(r(l), {
          class: r(W)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg",
            n.class
          )
        }), {
          default: m(() => [
            x(s.$slots, "default"),
            P(r(Qn), {
              onClick: i[0] || (i[0] = (u) => a("close", u)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: m(() => [
                P(r(br), { class: "size-6 dark:text-slate-300" }),
                i[1] || (i[1] = H("span", { class: "sr-only" }, "Close", -1))
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
}), rh = /* @__PURE__ */ _({
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
    const a = e, n = t, o = B(() => {
      const { class: s, ...i } = a;
      return i;
    }), l = oe(o, n);
    return (s, i) => (f(), y(r($l), null, {
      default: m(() => [
        P(r(Sl), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: m(() => [
            P(r(Ol), E({
              class: r(W)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg md:w-full",
                a.class
              )
            }, r(l), {
              onPointerDownOutside: i[0] || (i[0] = (u) => {
                const c = u.detail.originalEvent, d = c.target;
                (c.offsetX > d.clientWidth || c.offsetY > d.clientHeight) && u.preventDefault();
              })
            }), {
              default: m(() => [
                x(s.$slots, "default"),
                P(r(Qn), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: m(() => [
                    P(r(br), { class: "size-4" }),
                    i[1] || (i[1] = H("span", { class: "sr-only" }, "Close", -1))
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
}), Pm = /* @__PURE__ */ _({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), V("div", {
      class: ne(r(W)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), Dm = { class: "text-black dark:text-slate-400" }, sh = /* @__PURE__ */ _({
  __name: "Modal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const a = t, n = () => a("close");
    return (o, l) => (f(), y(r(_r), { open: o.open }, {
      default: m(() => [
        P(r(Cm), null, {
          default: m(() => [
            x(o.$slots, "trigger")
          ]),
          _: 3
        }),
        P(r(xr), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: ne("max-w-" + o.size)
        }, {
          default: m(() => [
            P(r($m), null, {
              default: m(() => [
                P(r(km), null, {
                  default: m(() => {
                    var s;
                    return [
                      o.$slots.header ? x(o.$slots, "header", { key: 0 }) : (s = o.headerData) != null && s.title ? (f(), V(X, { key: 1 }, [
                        Y(Q(o.headerData.title), 1)
                      ], 64)) : te("", !0)
                    ];
                  }),
                  _: 3
                }),
                P(r(Bm), null, {
                  default: m(() => {
                    var s;
                    return [
                      o.$slots.description ? x(o.$slots, "description", { key: 0 }) : (s = o.headerData) != null && s.description ? (f(), V(X, { key: 1 }, [
                        Y(Q(o.headerData.description), 1)
                      ], 64)) : te("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            H("div", Dm, [
              o.$slots.content ? x(o.$slots, "content", { key: 0 }) : x(o.$slots, "default", { key: 1 })
            ]),
            P(r(Pm), null, {
              default: m(() => [
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
}), Om = /* @__PURE__ */ _({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(r(Tc), E(a.value, {
      class: r(W)("flex h-9 w-9 items-center justify-center", t.class)
    }), {
      default: m(() => [
        P(r(om), { class: "size-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Sm = /* @__PURE__ */ _({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {},
    href: {},
    is: { default: "a" }
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(r(Ic), K(G(a.value)), {
      default: m(() => [
        P(r(Ge), {
          href: n.href,
          is: n.is,
          as: n.as,
          class: "size-10 p-0",
          variant: "outline"
        }, {
          default: m(() => [
            P(r(Qf), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["href", "is", "as"])
      ]),
      _: 1
    }, 16));
  }
}), Em = /* @__PURE__ */ _({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    class: {},
    href: {},
    is: { default: "a" }
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(r(Vc), K(G(a.value)), {
      default: m(() => [
        P(r(Ge), {
          href: n.href,
          is: n.is,
          as: n.as,
          class: "size-10 p-0",
          variant: "outline"
        }, {
          default: m(() => [
            P(r(em), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["href", "is", "as"])
      ]),
      _: 1
    }, 16));
  }
}), Mm = /* @__PURE__ */ _({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    href: {},
    class: {},
    disabled: { type: Boolean },
    is: { default: "a" }
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(r(zc), K(G(a.value)), {
      default: m(() => [
        P(r(Ge), {
          class: ne(r(W)("size-10 p-0", t.class)),
          is: n.is,
          as: n.as,
          href: n.href,
          variant: "outline"
        }, {
          default: m(() => [
            P(r(yr), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["class", "is", "as", "href"])
      ]),
      _: 1
    }, 16));
  }
}), Am = /* @__PURE__ */ _({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean, default: !0 },
    as: {},
    href: {},
    class: {},
    is: { default: "a" }
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(r(Nc), K(G(a.value)), {
      default: m(() => [
        P(r(Ge), {
          class: ne(r(W)("size-10 p-0", t.class)),
          href: n.href,
          is: n.is,
          as: n.as,
          variant: "outline"
        }, {
          default: m(() => [
            P(r(tm), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["class", "href", "is", "as"])
      ]),
      _: 1
    }, 16));
  }
}), Tm = { class: "my-auto text-slate-400 dark:text-slate-100" }, Im = /* @__PURE__ */ _({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, a) => (f(), V("div", Tm, " Showing " + Q(t.min) + " to " + Q(t.max) + " of " + Q(t.total) + " results ", 1));
  }
}), Vm = { class: "justify-between sm:flex" }, ih = /* @__PURE__ */ _({
  __name: "Pagination",
  props: {
    data: {},
    is: { default: "a" },
    as: {}
  },
  setup(e) {
    const t = e, a = () => t.data.current_page === 1 ? t.data.data.length === 0 ? 0 : 1 : t.data.current_page === t.data.last_page ? t.data.total - t.data.data.length : t.data.current_page * t.data.per_page - t.data.per_page, n = () => t.data.current_page === 1 ? t.data.data.length : t.data.current_page === t.data.last_page ? t.data.total : t.data.current_page * t.data.per_page;
    return (o, l) => (f(), V("div", Vm, [
      P(r(Im), {
        min: a(),
        max: n(),
        total: o.data.total
      }, null, 8, ["min", "max", "total"]),
      P(r(Ac), null, {
        default: m(() => [
          P(r(Lc), { class: "flex items-center gap-1" }, {
            default: m(() => [
              P(r(Sm), {
                is: o.is,
                as: o.as,
                href: o.data.first_page_url
              }, null, 8, ["is", "as", "href"]),
              o.data.prev_page_url ? (f(), y(r(Am), {
                key: 0,
                is: o.is,
                as: o.as,
                href: o.data.prev_page_url
              }, null, 8, ["is", "as", "href"])) : te("", !0),
              (f(!0), V(X, null, ve(o.data.links, (s, i) => (f(), V(X, null, [
                i < 5 ? (f(), V("div", { key: i }, [
                  P(r(Ge), {
                    href: s.url,
                    is: o.is,
                    as: o.as,
                    class: "size-10 p-0",
                    variant: s.active ? "primary" : "outline"
                  }, {
                    default: m(() => [
                      Y(Q(s.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["href", "is", "as", "variant"])
                ])) : te("", !0)
              ], 64))), 256)),
              o.data.links.length > 5 ? (f(), y(r(Om), { key: 1 })) : te("", !0),
              o.data.next_page_url ? (f(), y(r(Mm), {
                key: 2,
                is: o.is,
                as: o.as,
                href: o.data.next_page_url
              }, null, 8, ["is", "as", "href"])) : te("", !0),
              P(r(Em), {
                is: o.is,
                as: o.as,
                href: o.data.last_page_url
              }, null, 8, ["is", "as", "href"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}), Rm = /* @__PURE__ */ _({
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
    return (l, s) => (f(), y(r(Ap), K(G(r(o))), {
      default: m(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dh = /* @__PURE__ */ _({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(Vp), E(r(n), {
      class: r(W)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        t.class
      )
    }), {
      default: m(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fm = /* @__PURE__ */ _({
  __name: "TabsItem",
  props: {
    class: {},
    is: { default: "a" },
    tab: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(Qe(a.is), {
      href: a.tab.href,
      class: ne([
        a.tab.active ? "bg-white text-primary-500 hover:bg-opacity-80 dark:bg-slate-950 dark:text-primary-400" : "hover:bg-white dark:hover:bg-slate-900",
        r(W)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
          t.class
        )
      ])
    }, {
      default: m(() => {
        var o;
        return [
          (o = a.tab) != null && o.icon ? (f(), y(Qe(a.tab.icon), {
            key: 0,
            class: "size-5"
          })) : te("", !0),
          Y(" " + Q(a.tab.name), 1)
        ];
      }),
      _: 1
    }, 8, ["href", "class"]));
  }
}), zo = /* @__PURE__ */ _({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(r(Tp), E(a.value, {
      class: r(W)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        t.class
      )
    }), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uh = /* @__PURE__ */ _({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(r(Ip), E({
      class: r(W)(
        "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        t.class
      )
    }, a.value), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lm = {}, zm = { class: "ring-offset-whit mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function Nm(e, t) {
  return f(), V("div", zm, [
    x(e.$slots, "default")
  ]);
}
const Wm = /* @__PURE__ */ ea(Lm, [["render", Nm]]), ch = /* @__PURE__ */ _({
  __name: "Tabs",
  props: {
    is: { default: "a" },
    tabs: {}
  },
  setup(e) {
    const t = e, a = B(
      () => t.tabs.find((n) => n.active)
    );
    return (n, o) => (f(), y(r(Rm), null, {
      default: m(() => [
        P(r(zo), { class: "hidden gap-2 md:block" }, {
          default: m(() => [
            (f(!0), V(X, null, ve(n.tabs, (l) => (f(), y(r(Fm), {
              key: l.name,
              is: n.is,
              tab: l
            }, null, 8, ["is", "tab"]))), 128))
          ]),
          _: 1
        }),
        P(r(zo), { class: "flex md:hidden" }, {
          default: m(() => [
            P(xm, { "trigger-class": "size-full" }, {
              trigger: m(() => [
                P(r(Ge), { variant: "secondary" }, {
                  default: m(() => {
                    var l;
                    return [
                      Y(Q(((l = a.value) == null ? void 0 : l.name) ?? "Select an option"), 1)
                    ];
                  }),
                  _: 1
                })
              ]),
              content: m(() => [
                (f(!0), V(X, null, ve(n.tabs, (l) => (f(), y(r(gm), {
                  href: l.href,
                  key: l.name
                }, {
                  default: m(() => [
                    Y(Q(l.name), 1)
                  ]),
                  _: 2
                }, 1032, ["href"]))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        P(r(Wm), null, {
          default: m(() => [
            x(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), jm = /* @__PURE__ */ _({
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
    return (l, s) => (f(), y(r(ep), K(G(r(o))), {
      default: m(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Um = /* @__PURE__ */ _({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r($p), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Km = /* @__PURE__ */ _({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(np), E(r(n), {
      class: r(W)(
        "flex h-10 w-full items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300 [&>span]:line-clamp-1",
        t.class
      )
    }), {
      default: m(() => [
        x(o.$slots, "default"),
        P(r(kp), { "as-child": "" }, {
          default: m(() => [
            P(r(gr), { class: "size-4 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hm = /* @__PURE__ */ _({
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
    const a = e, n = t, o = B(() => {
      const { class: s, ...i } = a;
      return i;
    }), l = oe(o, n);
    return (s, i) => (f(), y(r(op), null, {
      default: m(() => [
        P(r(pp), E({ ...r(l), ...s.$attrs }, {
          class: r(W)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            s.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: m(() => [
            P(r(Ym)),
            P(r(_p), {
              class: ne(
                r(W)(
                  "p-1",
                  s.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: m(() => [
                x(s.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            P(r(Zm))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ph = /* @__PURE__ */ _({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(r(bp), E({
      class: r(W)("w-full p-1", t.class)
    }, a.value), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gm = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, qm = /* @__PURE__ */ _({
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
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(vp), E(r(n), {
      class: r(W)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
        t.class
      )
    }), {
      default: m(() => [
        H("span", Gm, [
          P(r(hp), null, {
            default: m(() => [
              P(r(Ua), { class: "size-4 text-primary-700 dark:text-primary-400" })
            ]),
            _: 1
          })
        ]),
        P(r(er), null, {
          default: m(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fh = /* @__PURE__ */ _({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(er), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mh = /* @__PURE__ */ _({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(wp), {
      class: ne(r(W)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), vh = /* @__PURE__ */ _({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(r(fp), E(a.value, {
      class: r(W)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), Ym = /* @__PURE__ */ _({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(xp), E(r(n), {
      class: r(W)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: m(() => [
        x(o.$slots, "default", {}, () => [
          P(r(nm), { class: "size-4 text-primary-900" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zm = /* @__PURE__ */ _({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), y(r(Cp), E(r(n), {
      class: r(W)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: m(() => [
        x(o.$slots, "default", {}, () => [
          P(r(gr), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cr = /* @__PURE__ */ _({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (l, s) => (f(), y(r(jc), K(G(r(o))), {
      default: m(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $r = /* @__PURE__ */ _({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), y(r(Uc), K(G(t)), {
      default: m(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kr = /* @__PURE__ */ _({
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
    const a = e, n = t, o = B(() => {
      const { class: s, ...i } = a;
      return i;
    }), l = oe(o, n);
    return (s, i) => (f(), y(r(Kc), null, {
      default: m(() => [
        P(r(qc), E({ ...r(l), ...s.$attrs }, {
          class: r(W)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: m(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Br = /* @__PURE__ */ _({
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
    const a = e, n = t, o = B(() => {
      const { class: s, ...i } = a;
      return i;
    }), l = oe(o, n);
    return (s, i) => (f(), y(r(Bu), E(r(l), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        a.class
      ]
    }), {
      default: m(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hh = /* @__PURE__ */ _({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = oe(e, t);
    return (l, s) => (f(), y(r(_r), K(G(r(o))), {
      default: m(() => [
        P(r(xr), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: m(() => [
            P(Br, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: m(() => [
                x(l.$slots, "default")
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
}), Jm = /* @__PURE__ */ _({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(r(Tu), E(a.value, {
      class: r(W)("py-6 text-center text-sm", t.class)
    }), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xm = /* @__PURE__ */ _({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(r(Ou), E(a.value, {
      class: r(W)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: m(() => [
        n.heading ? (f(), y(r(Su), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: m(() => [
            Y(Q(n.heading), 1)
          ]),
          _: 1
        })) : te("", !0),
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qm = { class: "flex items-center border-b px-3" }, ev = /* @__PURE__ */ _({
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
    const t = e, a = B(() => {
      const { class: o, ...l } = t;
      return l;
    }), n = ie(a);
    return (o, l) => (f(), V("div", Qm, [
      P(r(lm), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      P(r(Pu), E({ ...r(n), ...o.$attrs }, {
        "auto-focus": "",
        class: r(W)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), tv = /* @__PURE__ */ _({
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
    const a = e, n = t, o = B(() => {
      const { class: s, ...i } = a;
      return i;
    }), l = oe(o, n);
    return (s, i) => (f(), y(r(Fu), E(r(l), { class: "relative flex cursor-default select-none rounded-sm px-1 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50" }), {
      default: m(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), av = { role: "presentation" }, nv = /* @__PURE__ */ _({
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
    const a = e, n = t, o = B(() => {
      const { class: s, ...i } = a;
      return i;
    }), l = oe(o, n);
    return (s, i) => (f(), y(r(Au), E(r(l), {
      class: r(W)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: m(() => [
        H("div", av, [
          x(s.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gh = /* @__PURE__ */ _({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(r(Lu), E(a.value, {
      class: r(W)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yh = /* @__PURE__ */ _({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), V("span", {
      class: ne(r(W)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), ov = { class: "text-sm text-red-600 dark:text-red-400" }, lv = /* @__PURE__ */ _({
  __name: "Error",
  props: {
    error: {}
  },
  setup(e) {
    return (t, a) => At((f(), V("div", null, [
      H("p", ov, Q(t.error), 1)
    ], 512)), [
      [On, t.error]
    ]);
  }
}), rv = {}, sv = { class: "w-full space-y-4 p-1.5" };
function iv(e, t) {
  return f(), V("div", sv, [
    x(e.$slots, "default")
  ]);
}
const bh = /* @__PURE__ */ ea(rv, [["render", iv]]), dv = {}, uv = { class: "my-4" };
function cv(e, t) {
  return f(), V("div", uv, [
    x(e.$slots, "default")
  ]);
}
const pv = /* @__PURE__ */ ea(dv, [["render", cv]]), fv = { class: "grid gap-4 md:grid-cols-2" }, wh = /* @__PURE__ */ _({
  __name: "FormGrid",
  setup(e) {
    return (t, a) => (f(), y(pv, null, {
      default: m(() => [
        H("div", fv, [
          x(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), mv = { class: "text-xs text-slate-600 dark:text-slate-300" }, vv = /* @__PURE__ */ _({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(e) {
    return (t, a) => (f(), V("div", mv, "Characters: " + Q(t.count), 1));
  }
}), Pr = /* @__PURE__ */ _({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    id: {}
  },
  setup(e) {
    const t = e, a = B(() => {
      const { class: n, ...o } = t;
      return o;
    });
    return (n, o) => (f(), y(r(Ec), E(a.value, {
      class: r(W)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        t.class
      )
    }), {
      default: m(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hv = { class: "flex gap-2" }, _h = /* @__PURE__ */ _({
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
    label: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, o = M(e.modelValue);
    return J(o, (l) => {
      a("update:modelValue", l);
    }), (l, s) => (f(), V("div", hv, [
      P(r(hu), {
        id: l.id,
        checked: o.value,
        "onUpdate:checked": s[0] || (s[0] = (i) => o.value = i),
        class: "peer size-4 shrink-0 rounded-sm border border-primary-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-900 data-[state=checked]:text-primary-50 dark:border-primary-50 dark:ring-offset-primary-950 dark:focus-visible:ring-primary-300 dark:data-[state=checked]:bg-primary-300 dark:data-[state=checked]:text-primary-900"
      }, {
        default: m(() => [
          P(r(gu), { class: "flex h-full w-full items-center justify-center text-current" }, {
            default: m(() => [
              P(r(Ua), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["id", "checked"]),
      l.label ? (f(), y(Pr, {
        key: 0,
        id: l.id,
        class: "my-auto"
      }, {
        default: m(() => [
          Y(Q(l.label), 1)
        ]),
        _: 1
      }, 8, ["id"])) : te("", !0)
    ]));
  }
}), gv = { class: "overflow-hidden !font-normal dark:text-white" }, xh = /* @__PURE__ */ _({
  __name: "Combobox",
  props: {
    modelValue: {},
    placeholder: { default: "Select option..." },
    noResults: { default: "No option found." },
    options: {},
    multiple: { type: Boolean, default: !1 },
    allowSearch: { type: Boolean, default: !1 },
    widthClass: { default: "w-44" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = M(!1), l = M(n.modelValue ?? []), s = (d) => {
      n.multiple || (o.value = !1);
    }, i = B(() => n.multiple ? l.value.map((d) => d.name).join(", ") : typeof l.value == "object" ? l.value.name : typeof l.value == "number" ? n.options.find((d) => d.id === l.value).name : n.placeholder), u = (d, p) => d.filter((h) => h.name.toLowerCase().includes(p.toLowerCase())), c = (d) => n.multiple ? l.value.find((p) => p.id === d.id) : typeof l.value == "object" ? l.value.id === d.id : typeof l.value == "number" ? l.value === d.id : !1;
    return J(l, () => {
      n.multiple ? a("update:modelValue", l.value) : a("update:modelValue", l.value.id);
    }), (d, p) => (f(), y(r(Cr), {
      open: o.value,
      "onUpdate:open": p[1] || (p[1] = (h) => o.value = h)
    }, {
      default: m(() => [
        P(r($r), { "as-child": "" }, {
          default: m(() => [
            P(r(Ge), {
              variant: "outline",
              role: "combobox",
              "aria-expanded": o.value,
              class: ne(["justify-between", [d.widthClass]])
            }, {
              default: m(() => [
                H("div", gv, [
                  d.$slots.selectedOptions ? x(d.$slots, "selectedOptions", {
                    key: 0,
                    selectedOptions: l.value
                  }) : (f(), V(X, { key: 1 }, [
                    Y(Q(i.value), 1)
                  ], 64))
                ]),
                P(r(am), { class: "ml-2 size-4 shrink-0 opacity-50 dark:text-white" })
              ]),
              _: 3
            }, 8, ["aria-expanded", "class"])
          ]),
          _: 3
        }),
        P(r(kr), {
          class: ne(["!p-0", [d.widthClass]])
        }, {
          default: m(() => [
            P(r(Br), {
              multiple: d.multiple,
              "filter-function": u,
              modelValue: l.value,
              "onUpdate:modelValue": p[0] || (p[0] = (h) => l.value = h)
            }, {
              default: m(() => [
                d.allowSearch ? (f(), y(r(ev), {
                  key: 0,
                  class: "h-9",
                  placeholder: d.placeholder
                }, null, 8, ["placeholder"])) : te("", !0),
                P(r(Jm), null, {
                  default: m(() => [
                    Y(Q(d.noResults), 1)
                  ]),
                  _: 1
                }),
                P(r(nv), null, {
                  default: m(() => [
                    P(r(Xm), null, {
                      default: m(() => [
                        (f(!0), V(X, null, ve(d.options, (h) => (f(), y(r(tv), {
                          key: h.id,
                          id: h.id,
                          value: h,
                          onSelect: (v) => s()
                        }, {
                          default: m(() => [
                            P(r(Ua), {
                              class: ne(["mr-2 size-4", [c(h) ? "opacity-100" : "opacity-0"]])
                            }, null, 8, ["class"]),
                            d.$slots.item ? x(d.$slots, "item", {
                              key: 0,
                              option: h
                            }) : (f(), V(X, { key: 1 }, [
                              Y(Q(h.name), 1)
                            ], 64))
                          ]),
                          _: 2
                        }, 1032, ["id", "value", "onSelect"]))), 128))
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["multiple", "modelValue"])
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Ch = /* @__PURE__ */ _({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = new Le("en-US", {
      dateStyle: "long"
    }), l = M();
    return J(l, () => {
      a("update:modelValue", l.value);
    }), ce(() => {
      n.defaultValue && (l.value = n.defaultValue);
    }), (s, i) => (f(), y(r(Cr), null, {
      default: m(() => [
        P(r($r), { "as-child": "" }, {
          default: m(() => [
            P(r(Ge), {
              variant: "outline",
              class: ne([
                "w-[280px] justify-start text-left font-normal dark:text-white",
                !s.modelValue && "text-muted-foreground"
              ])
            }, {
              default: m(() => [
                P(r(Xf), { class: "mr-2 size-4" }),
                Y(" " + Q(l.value ? r(o).format(l.value.toDate(r(Tt)())) : s.placeholder), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }),
        P(r(kr), { class: "w-auto p-0" }, {
          default: m(() => [
            P(r(Of), {
              modelValue: l.value,
              "onUpdate:modelValue": i[0] || (i[0] = (u) => l.value = u),
              "default-value": s.defaultValue,
              "initial-focus": ""
            }, null, 8, ["modelValue", "default-value"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), yv = {}, bv = { class: "text-sm text-slate-600 dark:text-slate-300" };
function wv(e, t) {
  return f(), V("div", bv, [
    x(e.$slots, "default")
  ]);
}
const _v = /* @__PURE__ */ ea(yv, [["render", wv]]), xv = { class: "relative" }, Cv = {
  name: "Base",
  inheritAttrs: !1
}, $h = /* @__PURE__ */ _({
  ...Cv,
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
      return f(), V("div", null, [
        t.label && t.showLabel ? (f(), y(r(Pr), {
          key: 0,
          id: t.id
        }, {
          default: m(() => [
            Y(Q(t.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : te("", !0),
        H("div", xv, [
          x(t.$slots, "default"),
          t.showCharacterCount ? (f(), y(r(vv), {
            key: 0,
            count: (n = t.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[3px]"
          }, null, 8, ["count"])) : te("", !0)
        ]),
        P(r(_v), { class: "mt-[3px] w-4/5" }, {
          default: m(() => [
            Y(Q(t.description), 1)
          ]),
          _: 1
        }),
        P(r(lv), { error: t.error }, null, 8, ["error"])
      ]);
    };
  }
});
var he = [];
for (var un = 0; un < 256; ++un)
  he.push((un + 256).toString(16).slice(1));
function $v(e, t = 0) {
  return (he[e[t + 0]] + he[e[t + 1]] + he[e[t + 2]] + he[e[t + 3]] + "-" + he[e[t + 4]] + he[e[t + 5]] + "-" + he[e[t + 6]] + he[e[t + 7]] + "-" + he[e[t + 8]] + he[e[t + 9]] + "-" + he[e[t + 10]] + he[e[t + 11]] + he[e[t + 12]] + he[e[t + 13]] + he[e[t + 14]] + he[e[t + 15]]).toLowerCase();
}
var wa, kv = new Uint8Array(16);
function Bv() {
  if (!wa && (wa = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !wa))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return wa(kv);
}
var Pv = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const No = {
  randomUUID: Pv
};
function Dv(e, t, a) {
  if (No.randomUUID && !t && !e)
    return No.randomUUID();
  e = e || {};
  var n = e.random || (e.rng || Bv)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, $v(n);
}
const Ov = { class: "flex items-center space-x-2" }, Sv = ["src"], Ev = ["accept"], kh = /* @__PURE__ */ _({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = "file-upload-" + Dv(), l = B(() => i.value ? URL.createObjectURL(i.value) : null), s = a.currentImage ? a.currentImage : a.defaultImage, i = B({
      get: () => a.modelValue,
      set: (d) => n("update:modelValue", d)
    }), u = (d) => {
      i.value = d.target.files[0];
    }, c = () => document.getElementById(o).click();
    return (d, p) => (f(), V("div", Ov, [
      x(d.$slots, "image", {
        newImage: l.value,
        curImage: r(s)
      }, () => [
        H("img", {
          src: l.value ?? r(s),
          alt: "Image cannot be shown right now",
          class: "size-24 rounded-full dark:bg-slate-700"
        }, null, 8, Sv)
      ]),
      H("input", {
        id: o,
        accept: d.accept,
        hidden: "",
        type: "file",
        onInput: u
      }, null, 40, Ev),
      P(r(Ge), {
        variant: "secondary",
        onClick: c
      }, {
        default: m(() => p[0] || (p[0] = [
          Y(" Upload ")
        ])),
        _: 1
      })
    ]));
  }
}), Bh = /* @__PURE__ */ _({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, n = e, o = M(
      n.modelValue ? n.options.find((l) => l === n.modelValue) : null
    );
    return J(o, (l) => {
      if (l) {
        a("update:modelValue", l);
        return;
      }
      a("update:modelValue", null);
    }), (l, s) => (f(), y(r(jm), {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (i) => o.value = i)
    }, {
      default: m(() => [
        P(r(Km), null, {
          default: m(() => [
            P(r(Um), null, {
              default: m(() => [
                Y(Q(o.value ?? l.placeholder), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        P(r(Hm), null, {
          default: m(() => [
            (f(!0), V(X, null, ve(l.options, (i) => (f(), y(r(qm), { value: i }, {
              default: m(() => [
                l.$slots.options ? x(l.$slots, "options", {
                  key: 0,
                  item: i
                }) : (f(), V(X, { key: 1 }, [
                  Y(Q(i), 1)
                ], 64))
              ]),
              _: 2
            }, 1032, ["value"]))), 256))
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["modelValue"]));
  }
}), Mv = ["disabled", "placeholder", "required", "type"], Ph = /* @__PURE__ */ _({
  __name: "Input",
  props: /* @__PURE__ */ cn({
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
    const t = Zo(e, "modelValue");
    return (a, n) => At((f(), V("input", {
      "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o),
      disabled: a.disabled,
      placeholder: a.placeholder,
      required: a.required,
      type: a.type,
      class: ne(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:border-slate-900 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:focus-visible:border-slate-300 dark:placeholder:text-slate-500", {
        "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
        "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
      }])
    }, null, 10, Mv)), [
      [zr, t.value]
    ]);
  }
}), Av = ["placeholder"], Dh = /* @__PURE__ */ _({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = Jf(e, "modelValue", t, {
      passive: !0
    });
    return (l, s) => At((f(), V("textarea", {
      "onUpdate:modelValue": s[0] || (s[0] = (i) => Xt(o) ? o.value = i : null),
      placeholder: l.placeholder,
      class: ne(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:border-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:focus-visible:border-slate-300 dark:placeholder:text-slate-500", {
        "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !l.error,
        "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": l.error
      }])
    }, null, 10, Av)), [
      [Nr, r(o)]
    ]);
  }
});
export {
  $h as Base,
  wr as BaseDropdownMenuItem,
  Ge as Button,
  Of as Calendar,
  hf as CalendarCell,
  bf as CalendarCellTrigger,
  wf as CalendarGrid,
  _f as CalendarGridBody,
  xf as CalendarGridHead,
  Ro as CalendarGridRow,
  Cf as CalendarHeadCell,
  $f as CalendarHeader,
  kf as CalendarHeading,
  Bf as CalendarNextButton,
  Pf as CalendarPrevButton,
  vv as CharacterCount,
  _h as Checkbox,
  Uv as CollapsibleTableRow,
  xh as Combobox,
  Br as Command,
  hh as CommandDialog,
  Jm as CommandEmpty,
  Xm as CommandGroup,
  ev as CommandInput,
  tv as CommandItem,
  nv as CommandList,
  gh as CommandSeparator,
  yh as CommandShortcut,
  Vv as Container,
  jv as DarkModeToggle,
  Gv as DataTable,
  Ch as DatePicker,
  _v as Description,
  _r as Dialog,
  lh as DialogClose,
  xr as DialogContent,
  Bm as DialogDescription,
  Pm as DialogFooter,
  $m as DialogHeader,
  rh as DialogScrollContent,
  km as DialogTitle,
  Cm as DialogTrigger,
  xm as Dropdown,
  hm as DropdownMenu,
  Jv as DropdownMenuCheckboxItem,
  bm as DropdownMenuContent,
  qv as DropdownMenuGroup,
  Zv as DropdownMenuItem,
  th as DropdownMenuLabel,
  gm as DropdownMenuLink,
  wc as DropdownMenuPortal,
  Yv as DropdownMenuRadioGroup,
  Xv as DropdownMenuRadioItem,
  eh as DropdownMenuSeparator,
  Qv as DropdownMenuShortcut,
  ah as DropdownMenuSub,
  oh as DropdownMenuSubContent,
  nh as DropdownMenuSubTrigger,
  ym as DropdownMenuTrigger,
  lv as Error,
  bh as Form,
  pv as FormElement,
  wh as FormGrid,
  kh as ImageUpload,
  Pr as Label,
  sh as Modal,
  Rv as Notifications,
  ih as Pagination,
  Im as PaginationDetails,
  Om as PaginationEllipsis,
  Sm as PaginationFirst,
  Em as PaginationLast,
  Lc as PaginationList,
  Wv as PaginationListItem,
  Mm as PaginationNext,
  Am as PaginationPrev,
  Ac as PaginationRoot,
  Cr as Popover,
  kr as PopoverContent,
  $r as PopoverTrigger,
  Bh as Select,
  Hm as SelectContent,
  ph as SelectGroup,
  qm as SelectItem,
  fh as SelectItemText,
  mh as SelectLabel,
  jm as SelectRoot,
  Zm as SelectScrollDownButton,
  Ym as SelectScrollUpButton,
  vh as SelectSeparator,
  Km as SelectTrigger,
  Um as SelectValue,
  Wm as TabBaseContent,
  um as Table,
  cm as TableBody,
  mm as TableCaption,
  Oa as TableCell,
  Hv as TableEmpty,
  Kv as TableFooter,
  pm as TableHead,
  fm as TableHeader,
  Jt as TableRow,
  kn as TableRowAction,
  ch as Tabs,
  uh as TabsContent,
  Fm as TabsItem,
  zo as TabsList,
  Rm as TabsRoot,
  dh as TabsTrigger,
  Ph as Text,
  Dh as TextArea,
  im as Toggle,
  Wa as buttonVariants,
  Iv as preset
};
