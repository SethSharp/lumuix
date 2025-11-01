var zc = (e) => {
  throw TypeError(e);
};
var m0 = (e, t, n) => t.has(e) || zc("Cannot " + n);
var Tr = (e, t, n) => (m0(e, t, "read from private field"), n ? n.call(e) : t.get(e)), qc = (e, t, n) => t.has(e) ? zc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as Fa from "vue";
import { inject as Gn, provide as At, computed as T, ref as E, shallowRef as mn, watch as ee, getCurrentScope as ci, onScopeDispose as fi, shallowReadonly as Ea, unref as l, defineComponent as _, toRefs as me, createBlock as w, openBlock as g, withCtx as y, renderSlot as C, getCurrentInstance as We, toRef as ju, camelize as Ga, withKeys as Xe, h as rt, onMounted as de, createElementVNode as _e, toDisplayString as ce, normalizeProps as J, guardReactiveProps as Z, createTextVNode as oe, mergeProps as B, withModifiers as Ie, createCommentVNode as se, createElementBlock as L, Fragment as ue, renderList as Ae, resolveDynamicComponent as ut, createVNode as O, useSlots as xh, onBeforeMount as g0, Teleport as ga, watchEffect as Ce, onBeforeUnmount as pi, nextTick as re, withDirectives as ya, vShow as hi, watchSyncEffect as wh, isRef as dt, toHandlers as y0, normalizeStyle as Qt, toHandlerKey as Ch, Comment as Yu, cloneVNode as $h, vModelSelect as b0, onBeforeUpdate as _0, onUpdated as x0, markRaw as kh, onUnmounted as Ke, readonly as fr, toRaw as as, reactive as Wn, customRef as Gu, mergeDefaults as Xu, watchPostEffect as Ju, effectScope as Zu, normalizeClass as X, toValue as Ee, withMemo as w0, hasInjectionContext as Sh, mergeModels as $s, useModel as Qu, vModelDynamic as C0, vModelText as $0, isVNode as k0 } from "vue";
function S0(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(s) => {
    const i = Gn(a, s);
    if (i || i === null) return i;
    throw new Error(
      `Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`
    );
  }, (s) => (At(a, s), s)];
}
function Na(e, t) {
  return e - t * Math.floor(e / t);
}
const Th = 1721426;
function ta(e, t, n, a) {
  t = vo(e, t);
  let r = t - 1, o = -2;
  return n <= 2 ? o = 0 : Vn(t) && (o = -1), Th - 1 + 365 * r + Math.floor(r / 4) - Math.floor(r / 100) + Math.floor(r / 400) + Math.floor((367 * n - 362) / 12 + o + a);
}
function Vn(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function vo(e, t) {
  return e === "BC" ? 1 - t : t;
}
function vi(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const T0 = {
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
class Ot {
  fromJulianDay(t) {
    let n = t, a = n - Th, r = Math.floor(a / 146097), o = Na(a, 146097), s = Math.floor(o / 36524), i = Na(o, 36524), u = Math.floor(i / 1461), d = Na(i, 1461), c = Math.floor(d / 365), f = r * 400 + s * 100 + u * 4 + c + (s !== 4 && c !== 4 ? 1 : 0), [p, h] = vi(f), v = n - ta(p, h, 1, 1), m = 2;
    n < ta(p, h, 3, 1) ? m = 0 : Vn(h) && (m = 1);
    let b = Math.floor(((v + m) * 12 + 373) / 367), x = n - ta(p, h, b, 1) + 1;
    return new Ne(p, h, b, x);
  }
  toJulianDay(t) {
    return ta(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return T0[Vn(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return Vn(t.year) ? 366 : 365;
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
const M0 = {
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
function Ge(e, t) {
  return t = st(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function ed(e, t) {
  return t = st(t, e.calendar), e = Qr(e), t = Qr(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function qt(e, t) {
  return td(e.calendar, t.calendar) && Ge(e, t);
}
function Hc(e, t) {
  return td(e.calendar, t.calendar) && ed(e, t);
}
function td(e, t) {
  var n, a, r, o;
  return (o = (r = (n = e.isEqual) === null || n === void 0 ? void 0 : n.call(e, t)) !== null && r !== void 0 ? r : (a = t.isEqual) === null || a === void 0 ? void 0 : a.call(t, e)) !== null && o !== void 0 ? o : e.identifier === t.identifier;
}
function Mh(e, t) {
  return Ge(e, ks(t));
}
function Ah(e, t, n) {
  let a = e.calendar.toJulianDay(e), r = B0(t), o = Math.ceil(a + 1 - r) % 7;
  return o < 0 && (o += 7), o;
}
function A0(e) {
  return cn(Date.now(), e);
}
function ks(e) {
  return I0(A0(e));
}
function Dh(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function D0(e, t) {
  return Wc(e) - Wc(t);
}
function Wc(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let rl = null;
function yn() {
  return rl == null && (rl = new Intl.DateTimeFormat().resolvedOptions().timeZone), rl;
}
function Qr(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function Uc(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const Kc = /* @__PURE__ */ new Map(), ol = /* @__PURE__ */ new Map();
function E0(e) {
  if (Intl.Locale) {
    let n = Kc.get(e);
    return n || (n = new Intl.Locale(e).maximize().region, n && Kc.set(e, n)), n;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function B0(e) {
  let t = ol.get(e);
  if (!t) {
    if (Intl.Locale) {
      let a = new Intl.Locale(e);
      if ("getWeekInfo" in a && (t = a.getWeekInfo(), t))
        return ol.set(e, t), t.firstDay;
    }
    let n = E0(e);
    if (e.includes("-fw-")) {
      let a = e.split("-fw-")[1].split("-")[0];
      a === "mon" ? t = {
        firstDay: 1
      } : a === "tue" ? t = {
        firstDay: 2
      } : a === "wed" ? t = {
        firstDay: 3
      } : a === "thu" ? t = {
        firstDay: 4
      } : a === "fri" ? t = {
        firstDay: 5
      } : a === "sat" ? t = {
        firstDay: 6
      } : t = {
        firstDay: 0
      };
    } else e.includes("-ca-iso8601") ? t = {
      firstDay: 1
    } : t = {
      firstDay: n && M0[n] || 0
    };
    ol.set(e, t);
  }
  return t.firstDay;
}
function Xa(e) {
  e = st(e, new Ot());
  let t = vo(e.era, e.year);
  return Eh(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function Eh(e, t, n, a, r, o, s) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(a, r, o, s), i.setUTCFullYear(e, t - 1, n), i.getTime();
}
function Ll(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === yn()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: n, month: a, day: r, hour: o, minute: s, second: i } = Bh(e, t);
  return Eh(n, a, r, o, s, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const jc = /* @__PURE__ */ new Map();
function Bh(e, t) {
  let n = jc.get(t);
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
  }), jc.set(t, n));
  let a = n.formatToParts(new Date(e)), r = {};
  for (let o of a) o.type !== "literal" && (r[o.type] = o.value);
  return {
    // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
    year: r.era === "BC" || r.era === "B" ? -r.year + 1 : +r.year,
    month: +r.month,
    day: +r.day,
    hour: r.hour === "24" ? 0 : +r.hour,
    minute: +r.minute,
    second: +r.second
  };
}
const Yc = 864e5;
function O0(e, t, n, a) {
  return (n === a ? [
    n
  ] : [
    n,
    a
  ]).filter((o) => P0(e, t, o));
}
function P0(e, t, n) {
  let a = Bh(n, t);
  return e.year === a.year && e.month === a.month && e.day === a.day && e.hour === a.hour && e.minute === a.minute && e.second === a.second;
}
function un(e, t, n = "compatible") {
  let a = Ja(e);
  if (t === "UTC") return Xa(a);
  if (t === yn() && n === "compatible") {
    a = st(a, new Ot());
    let u = /* @__PURE__ */ new Date(), d = vo(a.era, a.year);
    return u.setFullYear(d, a.month - 1, a.day), u.setHours(a.hour, a.minute, a.second, a.millisecond), u.getTime();
  }
  let r = Xa(a), o = Ll(r - Yc, t), s = Ll(r + Yc, t), i = O0(a, t, r - o, r - s);
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
      return Math.min(r - o, r - s);
    case "compatible":
    case "later":
      return Math.max(r - o, r - s);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function Oh(e, t, n = "compatible") {
  return new Date(un(e, t, n));
}
function cn(e, t) {
  let n = Ll(e, t), a = new Date(e + n), r = a.getUTCFullYear(), o = a.getUTCMonth() + 1, s = a.getUTCDate(), i = a.getUTCHours(), u = a.getUTCMinutes(), d = a.getUTCSeconds(), c = a.getUTCMilliseconds();
  return new Qa(r < 1 ? "BC" : "AD", r < 1 ? -r + 1 : r, o, s, t, n, i, u, d, c);
}
function I0(e) {
  return new Ne(e.calendar, e.era, e.year, e.month, e.day);
}
function Ja(e, t) {
  let n = 0, a = 0, r = 0, o = 0;
  if ("timeZone" in e) ({ hour: n, minute: a, second: r, millisecond: o } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: n, minute: a, second: r, millisecond: o } = t), new Za(e.calendar, e.era, e.year, e.month, e.day, n, a, r, o);
}
function st(e, t) {
  if (td(e.calendar, t)) return e;
  let n = t.fromJulianDay(e.calendar.toJulianDay(e)), a = e.copy();
  return a.calendar = t, a.era = n.era, a.year = n.year, a.month = n.month, a.day = n.day, fa(a), a;
}
function R0(e, t, n) {
  if (e instanceof Qa)
    return e.timeZone === t ? e : V0(e, t);
  let a = un(e, t, n);
  return cn(a, t);
}
function F0(e) {
  let t = Xa(e) - e.offset;
  return new Date(t);
}
function V0(e, t) {
  let n = Xa(e) - e.offset;
  return st(cn(n, t), e.calendar);
}
const Mr = 36e5;
function mi(e, t) {
  let n = e.copy(), a = "hour" in n ? q0(n, t) : 0;
  zl(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, ql(n), Ph(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += a, N0(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
  let r = n.calendar.getYearsInEra(n);
  if (n.year > r) {
    var o, s;
    let u = (o = (s = n.calendar).isInverseEra) === null || o === void 0 ? void 0 : o.call(s, n);
    n.year = r, n.month = u ? 1 : n.calendar.getMonthsInYear(n), n.day = u ? 1 : n.calendar.getDaysInMonth(n);
  }
  n.month < 1 && (n.month = 1, n.day = 1);
  let i = n.calendar.getMonthsInYear(n);
  return n.month > i && (n.month = i, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n;
}
function zl(e, t) {
  var n, a;
  !((n = (a = e.calendar).isInverseEra) === null || n === void 0) && n.call(a, e) && (t = -t), e.year += t;
}
function ql(e) {
  for (; e.month < 1; )
    zl(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, zl(e, 1);
}
function N0(e) {
  for (; e.day < 1; )
    e.month--, ql(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, ql(e);
}
function Ph(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function fa(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Ph(e);
}
function Ih(e) {
  let t = {};
  for (let n in e) typeof e[n] == "number" && (t[n] = -e[n]);
  return t;
}
function Rh(e, t) {
  return mi(e, Ih(t));
}
function nd(e, t) {
  let n = e.copy();
  return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), fa(n), n;
}
function Ss(e, t) {
  let n = e.copy();
  return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), z0(n), n;
}
function L0(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Po(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Po(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Po(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = Po(e.hour, 24), t;
}
function z0(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Po(e, t) {
  let n = e % t;
  return n < 0 && (n += t), n;
}
function q0(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, L0(e);
}
function ad(e, t, n, a) {
  let r = e.copy();
  switch (t) {
    case "era": {
      let i = e.calendar.getEras(), u = i.indexOf(e.era);
      if (u < 0) throw new Error("Invalid era: " + e.era);
      u = fn(u, n, 0, i.length - 1, a == null ? void 0 : a.round), r.era = i[u], fa(r);
      break;
    }
    case "year":
      var o, s;
      !((o = (s = r.calendar).isInverseEra) === null || o === void 0) && o.call(s, r) && (n = -n), r.year = fn(e.year, n, -1 / 0, 9999, a == null ? void 0 : a.round), r.year === -1 / 0 && (r.year = 1), r.calendar.balanceYearMonth && r.calendar.balanceYearMonth(r, e);
      break;
    case "month":
      r.month = fn(e.month, n, 1, e.calendar.getMonthsInYear(e), a == null ? void 0 : a.round);
      break;
    case "day":
      r.day = fn(e.day, n, 1, e.calendar.getDaysInMonth(e), a == null ? void 0 : a.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(r), fa(r), r;
}
function Fh(e, t, n, a) {
  let r = e.copy();
  switch (t) {
    case "hour": {
      let o = e.hour, s = 0, i = 23;
      if ((a == null ? void 0 : a.hourCycle) === 12) {
        let u = o >= 12;
        s = u ? 12 : 0, i = u ? 23 : 11;
      }
      r.hour = fn(o, n, s, i, a == null ? void 0 : a.round);
      break;
    }
    case "minute":
      r.minute = fn(e.minute, n, 0, 59, a == null ? void 0 : a.round);
      break;
    case "second":
      r.second = fn(e.second, n, 0, 59, a == null ? void 0 : a.round);
      break;
    case "millisecond":
      r.millisecond = fn(e.millisecond, n, 0, 999, a == null ? void 0 : a.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return r;
}
function fn(e, t, n, a, r = !1) {
  if (r) {
    e += Math.sign(t), e < n && (e = a);
    let o = Math.abs(t);
    t > 0 ? e = Math.ceil(e / o) * o : e = Math.floor(e / o) * o, e > a && (e = n);
  } else
    e += t, e < n ? e = a - (n - e - 1) : e > a && (e = n + (e - a - 1));
  return e;
}
function Vh(e, t) {
  let n;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let r = mi(Ja(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    n = un(r, e.timeZone);
  } else
    n = Xa(e) - e.offset;
  n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5;
  let a = cn(n, e.timeZone);
  return st(a, e.calendar);
}
function H0(e, t) {
  return Vh(e, Ih(t));
}
function W0(e, t, n, a) {
  switch (t) {
    case "hour": {
      let r = 0, o = 23;
      if ((a == null ? void 0 : a.hourCycle) === 12) {
        let v = e.hour >= 12;
        r = v ? 12 : 0, o = v ? 23 : 11;
      }
      let s = Ja(e), i = st(Ss(s, {
        hour: r
      }), new Ot()), u = [
        un(i, e.timeZone, "earlier"),
        un(i, e.timeZone, "later")
      ].filter((v) => cn(v, e.timeZone).day === i.day)[0], d = st(Ss(s, {
        hour: o
      }), new Ot()), c = [
        un(d, e.timeZone, "earlier"),
        un(d, e.timeZone, "later")
      ].filter((v) => cn(v, e.timeZone).day === d.day).pop(), f = Xa(e) - e.offset, p = Math.floor(f / Mr), h = f % Mr;
      return f = fn(p, n, Math.floor(u / Mr), Math.floor(c / Mr), a == null ? void 0 : a.round) * Mr + h, st(cn(f, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return Fh(e, t, n, a);
    case "era":
    case "year":
    case "month":
    case "day": {
      let r = ad(Ja(e), t, n, a), o = un(r, e.timeZone);
      return st(cn(o, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function U0(e, t, n) {
  let a = Ja(e), r = Ss(nd(a, t), t);
  if (r.compare(a) === 0) return e;
  let o = un(r, e.timeZone, n);
  return st(cn(o, e.timeZone), e.calendar);
}
function K0(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function Nh(e) {
  let t = st(e, new Ot()), n;
  return t.era === "BC" ? n = t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : n = String(t.year).padStart(4, "0"), `${n}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function Lh(e) {
  return `${Nh(e)}T${K0(e)}`;
}
function j0(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let n = Math.floor(e / 36e5), a = Math.floor(e % 36e5 / 6e4), r = Math.floor(e % 36e5 % 6e4 / 1e3), o = `${t}${String(n).padStart(2, "0")}:${String(a).padStart(2, "0")}`;
  return r !== 0 && (o += `:${String(r).padStart(2, "0")}`), o;
}
function Y0(e) {
  return `${Lh(e)}${j0(e.offset)}[${e.timeZone}]`;
}
function G0(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function rd(e, t, n) {
  G0(e, t), t.set(e, n);
}
function od(e) {
  let t = typeof e[0] == "object" ? e.shift() : new Ot(), n;
  if (typeof e[0] == "string") n = e.shift();
  else {
    let s = t.getEras();
    n = s[s.length - 1];
  }
  let a = e.shift(), r = e.shift(), o = e.shift();
  return [
    t,
    n,
    a,
    r,
    o
  ];
}
var X0 = /* @__PURE__ */ new WeakMap();
class Ne {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ne(this.calendar, this.era, this.year, this.month, this.day) : new Ne(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return mi(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return Rh(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return nd(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, a) {
    return ad(this, t, n, a);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return Oh(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Nh(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return Dh(this, t);
  }
  constructor(...t) {
    rd(this, X0, {
      writable: !0,
      value: void 0
    });
    let [n, a, r, o, s] = od(t);
    this.calendar = n, this.era = a, this.year = r, this.month = o, this.day = s, fa(this);
  }
}
var J0 = /* @__PURE__ */ new WeakMap();
class Za {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Za(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new Za(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return mi(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return Rh(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return nd(Ss(this, t), t);
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
        return ad(this, t, n, a);
      default:
        return Fh(this, t, n, a);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, n) {
    return Oh(this, t, n);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Lh(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let n = Dh(this, t);
    return n === 0 ? D0(this, Ja(t)) : n;
  }
  constructor(...t) {
    rd(this, J0, {
      writable: !0,
      value: void 0
    });
    let [n, a, r, o, s] = od(t);
    this.calendar = n, this.era = a, this.year = r, this.month = o, this.day = s, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, fa(this);
  }
}
var Z0 = /* @__PURE__ */ new WeakMap();
class Qa {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Qa(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new Qa(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return Vh(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return H0(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, n) {
    return U0(this, t, n);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, a) {
    return W0(this, t, n, a);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return F0(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return Y0(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - R0(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    rd(this, Z0, {
      writable: !0,
      value: void 0
    });
    let [n, a, r, o, s] = od(t), i = t.shift(), u = t.shift();
    this.calendar = n, this.era = a, this.year = r, this.month = o, this.day = s, this.timeZone = i, this.offset = u, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, fa(this);
  }
}
const La = [
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
], Q0 = [
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
], rs = [
  1867,
  1911,
  1925,
  1988,
  2018
], In = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function Gc(e) {
  const t = La.findIndex(([n, a, r]) => e.year < n || e.year === n && e.month < a || e.year === n && e.month === a && e.day < r);
  return t === -1 ? La.length - 1 : t === 0 ? 0 : t - 1;
}
function sl(e) {
  let t = rs[In.indexOf(e.era)];
  if (!t) throw new Error("Unknown era: " + e.era);
  return new Ne(e.year + t, e.month, e.day);
}
class eb extends Ot {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), a = Gc(n);
    return new Ne(this, In[a], n.year - rs[a], n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(sl(t));
  }
  balanceDate(t) {
    let n = sl(t), a = Gc(n);
    In[a] !== t.era && (t.era = In[a], t.year = n.year - rs[a]), this.constrainDate(t);
  }
  constrainDate(t) {
    let n = In.indexOf(t.era), a = Q0[n];
    if (a != null) {
      let [r, o, s] = a, i = r - rs[n];
      t.year = Math.max(1, Math.min(i, t.year)), t.year === i && (t.month = Math.min(o, t.month), t.month === o && (t.day = Math.min(s, t.day)));
    }
    if (t.year === 1 && n >= 0) {
      let [, r, o] = La[n];
      t.month = Math.max(r, t.month), t.month === r && (t.day = Math.max(o, t.day));
    }
  }
  getEras() {
    return In;
  }
  getYearsInEra(t) {
    let n = In.indexOf(t.era), a = La[n], r = La[n + 1];
    if (r == null)
      return 9999 - a[0] + 1;
    let o = r[0] - a[0];
    return (t.month < r[1] || t.month === r[1] && t.day < r[2]) && o++, o;
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(sl(t));
  }
  getMinimumMonthInYear(t) {
    let n = Xc(t);
    return n ? n[1] : 1;
  }
  getMinimumDayInMonth(t) {
    let n = Xc(t);
    return n && t.month === n[1] ? n[2] : 1;
  }
  constructor(...t) {
    super(...t), this.identifier = "japanese";
  }
}
function Xc(e) {
  if (e.year === 1) {
    let t = In.indexOf(e.era);
    return La[t];
  }
}
const zh = -543;
class tb extends Ot {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), a = vo(n.era, n.year);
    return new Ne(this, a - zh, n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Jc(t));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Jc(t));
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "buddhist";
  }
}
function Jc(e) {
  let [t, n] = vi(e.year + zh);
  return new Ne(t, n, e.month, e.day);
}
const Ts = 1911;
function qh(e) {
  return e.era === "minguo" ? e.year + Ts : 1 - e.year + Ts;
}
function Zc(e) {
  let t = e - Ts;
  return t > 0 ? [
    "minguo",
    t
  ] : [
    "before_minguo",
    1 - t
  ];
}
class nb extends Ot {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), a = vo(n.era, n.year), [r, o] = Zc(a);
    return new Ne(this, r, o, n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Qc(t));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(t) {
    let [n, a] = Zc(qh(t));
    t.era = n, t.year = a;
  }
  isInverseEra(t) {
    return t.era === "before_minguo";
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Qc(t));
  }
  getYearsInEra(t) {
    return t.era === "before_minguo" ? 9999 : 9999 - Ts;
  }
  constructor(...t) {
    super(...t), this.identifier = "roc";
  }
}
function Qc(e) {
  let [t, n] = vi(qh(e));
  return new Ne(t, n, e.month, e.day);
}
const ef = 1948320, tf = [
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
class ab {
  fromJulianDay(t) {
    let n = t - ef, a = 1 + Math.floor((33 * n + 3) / 12053), r = 365 * (a - 1) + Math.floor((8 * a + 21) / 33), o = n - r, s = o < 216 ? Math.floor(o / 31) : Math.floor((o - 6) / 30), i = o - tf[s] + 1;
    return new Ne(this, a, s + 1, i);
  }
  toJulianDay(t) {
    let n = ef - 1 + 365 * (t.year - 1) + Math.floor((8 * t.year + 21) / 33);
    return n += tf[t.month - 1], n += t.day, n;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(t) {
    return t.month <= 6 ? 31 : t.month <= 11 || Na(25 * t.year + 11, 33) < 8 ? 30 : 29;
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
const il = 78, nf = 80;
class rb extends Ot {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), a = n.year - il, r = t - ta(n.era, n.year, 1, 1), o;
    r < nf ? (a--, o = Vn(n.year - 1) ? 31 : 30, r += o + 155 + 90 + 10) : (o = Vn(n.year) ? 31 : 30, r -= nf);
    let s, i;
    if (r < o)
      s = 1, i = r + 1;
    else {
      let u = r - o;
      u < 155 ? (s = Math.floor(u / 31) + 2, i = u % 31 + 1) : (u -= 155, s = Math.floor(u / 30) + 7, i = u % 30 + 1);
    }
    return new Ne(this, a, s, i);
  }
  toJulianDay(t) {
    let n = t.year + il, [a, r] = vi(n), o, s;
    return Vn(r) ? (o = 31, s = ta(a, r, 3, 21)) : (o = 30, s = ta(a, r, 3, 22)), t.month === 1 ? s + t.day - 1 : (s += o + Math.min(t.month - 2, 5) * 31, t.month >= 8 && (s += (t.month - 7) * 30), s += t.day - 1, s);
  }
  getDaysInMonth(t) {
    return t.month === 1 && Vn(t.year + il) || t.month >= 2 && t.month <= 6 ? 31 : 30;
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
const Ms = 1948440, af = 1948439, _t = 1300, Ba = 1600, ob = 460322;
function As(e, t, n, a) {
  return a + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function Hh(e, t, n) {
  let a = Math.floor((30 * (n - t) + 10646) / 10631), r = Math.min(12, Math.ceil((n - (29 + As(t, a, 1, 1))) / 29.5) + 1), o = n - As(t, a, r, 1) + 1;
  return new Ne(e, a, r, o);
}
function rf(e) {
  return (14 + 11 * e) % 30 < 11;
}
class sd {
  fromJulianDay(t) {
    return Hh(this, Ms, t);
  }
  toJulianDay(t) {
    return As(Ms, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    let n = 29 + t.month % 2;
    return t.month === 12 && rf(t.year) && n++, n;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(t) {
    return rf(t.year) ? 355 : 354;
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
class sb extends sd {
  fromJulianDay(t) {
    return Hh(this, af, t);
  }
  toJulianDay(t) {
    return As(af, t.year, t.month, t.day);
  }
  constructor(...t) {
    super(...t), this.identifier = "islamic-tbla";
  }
}
const ib = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let Hl, za;
function os(e) {
  return ob + za[e - _t];
}
function Vr(e, t) {
  let n = e - _t, a = 1 << 11 - (t - 1);
  return Hl[n] & a ? 30 : 29;
}
function of(e, t) {
  let n = os(e);
  for (let a = 1; a < t; a++) n += Vr(e, a);
  return n;
}
function sf(e) {
  return za[e + 1 - _t] - za[e - _t];
}
class lb extends sd {
  fromJulianDay(t) {
    let n = t - Ms, a = os(_t), r = os(Ba);
    if (n < a || n > r) return super.fromJulianDay(t);
    {
      let o = _t - 1, s = 1, i = 1;
      for (; i > 0; ) {
        o++, i = n - os(o) + 1;
        let u = sf(o);
        if (i === u) {
          s = 12;
          break;
        } else if (i < u) {
          let d = Vr(o, s);
          for (s = 1; i > d; )
            i -= d, s++, d = Vr(o, s);
          break;
        }
      }
      return new Ne(this, o, s, n - of(o, s) + 1);
    }
  }
  toJulianDay(t) {
    return t.year < _t || t.year > Ba ? super.toJulianDay(t) : Ms + of(t.year, t.month) + (t.day - 1);
  }
  getDaysInMonth(t) {
    return t.year < _t || t.year > Ba ? super.getDaysInMonth(t) : Vr(t.year, t.month);
  }
  getDaysInYear(t) {
    return t.year < _t || t.year > Ba ? super.getDaysInYear(t) : sf(t.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", Hl || (Hl = new Uint16Array(Uint8Array.from(atob(ib), (t) => t.charCodeAt(0)).buffer)), !za) {
      za = new Uint32Array(Ba - _t + 1);
      let t = 0;
      for (let n = _t; n <= Ba; n++) {
        za[n - _t] = t;
        for (let a = 1; a <= 12; a++) t += Vr(n, a);
      }
    }
  }
}
const lf = 347997, Wh = 1080, Uh = 24 * Wh, ub = 29, db = 12 * Wh + 793, cb = ub * Uh + db;
function ea(e) {
  return Na(e * 7 + 1, 19) < 7;
}
function ss(e) {
  let t = Math.floor((235 * e - 234) / 19), n = 12084 + 13753 * t, a = t * 29 + Math.floor(n / 25920);
  return Na(3 * (a + 1), 7) < 3 && (a += 1), a;
}
function fb(e) {
  let t = ss(e - 1), n = ss(e);
  return ss(e + 1) - n === 356 ? 2 : n - t === 382 ? 1 : 0;
}
function Ur(e) {
  return ss(e) + fb(e);
}
function Kh(e) {
  return Ur(e + 1) - Ur(e);
}
function pb(e) {
  let t = Kh(e);
  switch (t > 380 && (t -= 30), t) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function Io(e, t) {
  if (t >= 6 && !ea(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13) return 29;
  let n = pb(e);
  return t === 2 ? n === 2 ? 30 : 29 : t === 3 ? n === 0 ? 29 : 30 : t === 6 ? ea(e) ? 30 : 0 : 30;
}
class hb {
  fromJulianDay(t) {
    let n = t - lf, a = n * Uh / cb, r = Math.floor((19 * a + 234) / 235) + 1, o = Ur(r), s = Math.floor(n - o);
    for (; s < 1; )
      r--, o = Ur(r), s = Math.floor(n - o);
    let i = 1, u = 0;
    for (; u < s; )
      u += Io(r, i), i++;
    i--, u -= Io(r, i);
    let d = s - u;
    return new Ne(this, r, i, d);
  }
  toJulianDay(t) {
    let n = Ur(t.year);
    for (let a = 1; a < t.month; a++) n += Io(t.year, a);
    return n + t.day + lf;
  }
  getDaysInMonth(t) {
    return Io(t.year, t.month);
  }
  getMonthsInYear(t) {
    return ea(t.year) ? 13 : 12;
  }
  getDaysInYear(t) {
    return Kh(t.year);
  }
  getYearsInEra() {
    return 9999;
  }
  getEras() {
    return [
      "AM"
    ];
  }
  balanceYearMonth(t, n) {
    n.year !== t.year && (ea(n.year) && !ea(t.year) && n.month > 6 ? t.month-- : !ea(n.year) && ea(t.year) && n.month > 6 && t.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const Wl = 1723856, uf = 1824665, Ul = 5500;
function Ds(e, t, n, a) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + a - 1;
}
function id(e, t) {
  let n = Math.floor(4 * (t - e) / 1461), a = 1 + Math.floor((t - Ds(e, n, 1, 1)) / 30), r = t + 1 - Ds(e, n, a, 1);
  return [
    n,
    a,
    r
  ];
}
function jh(e) {
  return Math.floor(e % 4 / 3);
}
function Yh(e, t) {
  return t % 13 !== 0 ? 30 : jh(e) + 5;
}
class ld {
  fromJulianDay(t) {
    let [n, a, r] = id(Wl, t), o = "AM";
    return n <= 0 && (o = "AA", n += Ul), new Ne(this, o, n, a, r);
  }
  toJulianDay(t) {
    let n = t.year;
    return t.era === "AA" && (n -= Ul), Ds(Wl, n, t.month, t.day);
  }
  getDaysInMonth(t) {
    return Yh(t.year, t.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(t) {
    return 365 + jh(t.year);
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
class vb extends ld {
  fromJulianDay(t) {
    let [n, a, r] = id(Wl, t);
    return n += Ul, new Ne(this, "AA", n, a, r);
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
class mb extends ld {
  fromJulianDay(t) {
    let [n, a, r] = id(uf, t), o = "CE";
    return n <= 0 && (o = "BCE", n = 1 - n), new Ne(this, o, n, a, r);
  }
  toJulianDay(t) {
    let n = t.year;
    return t.era === "BCE" && (n = 1 - n), Ds(uf, n, t.month, t.day);
  }
  getDaysInMonth(t) {
    let n = t.year;
    return t.era === "BCE" && (n = 1 - n), Yh(n, t.month);
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
function gb(e) {
  switch (e) {
    case "buddhist":
      return new tb();
    case "ethiopic":
      return new ld();
    case "ethioaa":
      return new vb();
    case "coptic":
      return new mb();
    case "hebrew":
      return new hb();
    case "indian":
      return new rb();
    case "islamic-civil":
      return new sd();
    case "islamic-tbla":
      return new sb();
    case "islamic-umalqura":
      return new lb();
    case "japanese":
      return new eb();
    case "persian":
      return new ab();
    case "roc":
      return new nb();
    case "gregory":
    default:
      return new Ot();
  }
}
let ll = /* @__PURE__ */ new Map();
class zt {
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
    let a = this.formatter.formatToParts(t), r = this.formatter.formatToParts(n);
    return [
      ...a.map((o) => ({
        ...o,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...r.map((o) => ({
        ...o,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let t = this.formatter.resolvedOptions();
    return _b() && (this.resolvedHourCycle || (this.resolvedHourCycle = xb(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, n = {}) {
    this.formatter = Gh(t, n), this.options = n;
  }
}
const yb = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function Gh(e, t = {}) {
  if (typeof t.hour12 == "boolean" && bb()) {
    t = {
      ...t
    };
    let r = yb[String(t.hour12)][e.split("-")[0]], o = t.hour12 ? "h12" : "h23";
    t.hourCycle = r ?? o, delete t.hour12;
  }
  let n = e + (t ? Object.entries(t).sort((r, o) => r[0] < o[0] ? -1 : 1).join() : "");
  if (ll.has(n)) return ll.get(n);
  let a = new Intl.DateTimeFormat(e, t);
  return ll.set(n, a), a;
}
let ul = null;
function bb() {
  return ul == null && (ul = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), ul;
}
let dl = null;
function _b() {
  return dl == null && (dl = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), dl;
}
function xb(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let n = Gh(e, {
    ...t,
    timeZone: void 0
    // use local timezone
  }), a = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find((o) => o.type === "hour").value, 10), r = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find((o) => o.type === "hour").value, 10);
  if (a === 0 && r === 23) return "h23";
  if (a === 24 && r === 23) return "h24";
  if (a === 0 && r === 11) return "h11";
  if (a === 12 && r === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
function wb(e, t) {
  const n = [];
  for (let a = 0; a < e.length; a += t)
    n.push(e.slice(a, a + t));
  return n;
}
function xt(e, t = yn()) {
  return ud(e) ? e.toDate() : e.toDate(t);
}
function Cb(e) {
  return e instanceof Za;
}
function ud(e) {
  return e instanceof Qa;
}
function $b(e) {
  return Cb(e) || ud(e);
}
function bn(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), n = e.getMonth() + 1;
    return new Date(t, n, 0).getDate();
  } else
    return e.set({ day: 100 }).day;
}
function Nn(e, t) {
  return e.compare(t) < 0;
}
function Nr(e, t) {
  return e.compare(t) > 0;
}
function kb(e, t) {
  return e.compare(t) <= 0;
}
function Sb(e, t) {
  return e.compare(t) >= 0;
}
function Tb(e, t, n) {
  return Sb(e, t) && kb(e, n);
}
function Mb(e, t, n) {
  return Nr(e, t) && Nn(e, n);
}
function Ab(e, t, n) {
  const a = Ah(e, n);
  return t > a ? e.subtract({ days: a + 7 - t }) : t === a ? e : e.subtract({ days: a - t });
}
function Db(e, t, n) {
  const a = Ah(e, n), r = t === 0 ? 6 : t - 1;
  return a === r ? e : a > r ? e.add({ days: 7 - a + r }) : e.add({ days: r - a });
}
function Eb(e, t, n, a) {
  if (n === void 0 && a === void 0)
    return !0;
  let r = e.add({ days: 1 });
  if (a != null && a(r) || n != null && n(r))
    return !1;
  const o = t;
  for (; r.compare(o) < 0; )
    if (r = r.add({ days: 1 }), a != null && a(r) || n != null && n(r))
      return !1;
  return !0;
}
function df(e, t) {
  const n = [];
  let a = e.add({ days: 1 });
  const r = t;
  for (; a.compare(r) < 0; )
    n.push(a), a = a.add({ days: 1 });
  return n;
}
function cl(e) {
  const { dateObj: t, weekStartsOn: n, fixedWeeks: a, locale: r } = e, o = bn(t), s = Array.from({ length: o }, (b, x) => t.set({ day: x + 1 })), i = Qr(t), u = Uc(t), d = Ab(i, n, r), c = Db(u, n, r), f = df(d.subtract({ days: 1 }), i), p = df(u, c.add({ days: 1 })), h = f.length + s.length + p.length;
  if (a && h < 42) {
    const b = 42 - h;
    let x = p[p.length - 1];
    x || (x = Uc(t));
    const k = Array.from({ length: b }, ($, M) => {
      const S = M + 1;
      return x.add({ days: S });
    });
    p.push(...k);
  }
  const v = f.concat(s, p), m = wb(v, 7);
  return {
    value: t,
    cells: v,
    rows: m
  };
}
function Bb(e) {
  const { dateObj: t, startIndex: n, endIndex: a } = e, r = Array.from({ length: Math.abs(n ?? 0) + a }, (o, s) => s <= Math.abs(n ?? 0) ? t.subtract({ years: s }).set({ day: 1, month: 1 }) : t.add({ years: s - a }).set({ day: 1, month: 1 }));
  return r.sort((o, s) => o.year - s.year), r;
}
function Ob(e) {
  const { dateObj: t, numberOfMonths: n = 1, pagedNavigation: a = !1 } = e;
  return n && a ? Array.from({ length: Math.floor(12 / n) }, (r, o) => Qr(t.set({ month: o * n + 1 }))) : Array.from({ length: 12 }, (r, o) => Qr(t.set({ month: o + 1 })));
}
function Zn(e) {
  const { numberOfMonths: t, dateObj: n, ...a } = e, r = [];
  if (!t || t === 1)
    return r.push(
      cl({
        ...a,
        dateObj: n
      })
    ), r;
  r.push(
    cl({
      ...a,
      dateObj: n
    })
  );
  for (let o = 1; o < t; o++) {
    const s = n.add({ months: o });
    r.push(
      cl({
        ...a,
        dateObj: s
      })
    );
  }
  return r;
}
const Pb = ["top", "right", "bottom", "left"], Un = Math.min, pt = Math.max, Es = Math.round, Ro = Math.floor, jt = (e) => ({
  x: e,
  y: e
}), Ib = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Rb = {
  start: "end",
  end: "start"
};
function Kl(e, t, n) {
  return pt(e, Un(t, n));
}
function _n(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xn(e) {
  return e.split("-")[0];
}
function pr(e) {
  return e.split("-")[1];
}
function dd(e) {
  return e === "x" ? "y" : "x";
}
function cd(e) {
  return e === "y" ? "height" : "width";
}
const Fb = /* @__PURE__ */ new Set(["top", "bottom"]);
function Kt(e) {
  return Fb.has(xn(e)) ? "y" : "x";
}
function fd(e) {
  return dd(Kt(e));
}
function Vb(e, t, n) {
  n === void 0 && (n = !1);
  const a = pr(e), r = fd(e), o = cd(r);
  let s = r === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (s = Bs(s)), [s, Bs(s)];
}
function Nb(e) {
  const t = Bs(e);
  return [jl(e), t, jl(t)];
}
function jl(e) {
  return e.replace(/start|end/g, (t) => Rb[t]);
}
const cf = ["left", "right"], ff = ["right", "left"], Lb = ["top", "bottom"], zb = ["bottom", "top"];
function qb(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ff : cf : t ? cf : ff;
    case "left":
    case "right":
      return t ? Lb : zb;
    default:
      return [];
  }
}
function Hb(e, t, n, a) {
  const r = pr(e);
  let o = qb(xn(e), n === "start", a);
  return r && (o = o.map((s) => s + "-" + r), t && (o = o.concat(o.map(jl)))), o;
}
function Bs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ib[t]);
}
function Wb(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Xh(e) {
  return typeof e != "number" ? Wb(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Os(e) {
  const {
    x: t,
    y: n,
    width: a,
    height: r
  } = e;
  return {
    width: a,
    height: r,
    top: n,
    left: t,
    right: t + a,
    bottom: n + r,
    x: t,
    y: n
  };
}
function pf(e, t, n) {
  let {
    reference: a,
    floating: r
  } = e;
  const o = Kt(t), s = fd(t), i = cd(s), u = xn(t), d = o === "y", c = a.x + a.width / 2 - r.width / 2, f = a.y + a.height / 2 - r.height / 2, p = a[i] / 2 - r[i] / 2;
  let h;
  switch (u) {
    case "top":
      h = {
        x: c,
        y: a.y - r.height
      };
      break;
    case "bottom":
      h = {
        x: c,
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
        x: a.x - r.width,
        y: f
      };
      break;
    default:
      h = {
        x: a.x,
        y: a.y
      };
  }
  switch (pr(t)) {
    case "start":
      h[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && d ? -1 : 1);
      break;
  }
  return h;
}
const Ub = async (e, t, n) => {
  const {
    placement: a = "bottom",
    strategy: r = "absolute",
    middleware: o = [],
    platform: s
  } = n, i = o.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: c,
    y: f
  } = pf(d, a, u), p = a, h = {}, v = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: b,
      fn: x
    } = i[m], {
      x: k,
      y: $,
      data: M,
      reset: S
    } = await x({
      x: c,
      y: f,
      initialPlacement: a,
      placement: p,
      strategy: r,
      middlewareData: h,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = k ?? c, f = $ ?? f, h = {
      ...h,
      [b]: {
        ...h[b],
        ...M
      }
    }, S && v <= 50 && (v++, typeof S == "object" && (S.placement && (p = S.placement), S.rects && (d = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : S.rects), {
      x: c,
      y: f
    } = pf(d, p, u)), m = -1);
  }
  return {
    x: c,
    y: f,
    placement: p,
    strategy: r,
    middlewareData: h
  };
};
async function eo(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: a,
    y: r,
    platform: o,
    rects: s,
    elements: i,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = _n(t, e), v = Xh(h), b = i[p ? f === "floating" ? "reference" : "floating" : f], x = Os(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(b))) == null || n ? b : b.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), k = f === "floating" ? {
    x: a,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, $ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(i.floating)), M = await (o.isElement == null ? void 0 : o.isElement($)) ? await (o.getScale == null ? void 0 : o.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Os(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: k,
    offsetParent: $,
    strategy: u
  }) : k);
  return {
    top: (x.top - S.top + v.top) / M.y,
    bottom: (S.bottom - x.bottom + v.bottom) / M.y,
    left: (x.left - S.left + v.left) / M.x,
    right: (S.right - x.right + v.right) / M.x
  };
}
const Kb = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: a,
      placement: r,
      rects: o,
      platform: s,
      elements: i,
      middlewareData: u
    } = t, {
      element: d,
      padding: c = 0
    } = _n(e, t) || {};
    if (d == null)
      return {};
    const f = Xh(c), p = {
      x: n,
      y: a
    }, h = fd(r), v = cd(h), m = await s.getDimensions(d), b = h === "y", x = b ? "top" : "left", k = b ? "bottom" : "right", $ = b ? "clientHeight" : "clientWidth", M = o.reference[v] + o.reference[h] - p[h] - o.floating[v], S = p[h] - o.reference[h], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let A = D ? D[$] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(D))) && (A = i.floating[$] || o.floating[v]);
    const N = M / 2 - S / 2, F = A / 2 - m[v] / 2 - 1, P = Un(f[x], F), I = Un(f[k], F), R = P, j = A - m[v] - I, z = A / 2 - m[v] / 2 + N, Y = Kl(R, z, j), te = !u.arrow && pr(r) != null && z !== Y && o.reference[v] / 2 - (z < R ? P : I) - m[v] / 2 < 0, ye = te ? z < R ? z - R : z - j : 0;
    return {
      [h]: p[h] + ye,
      data: {
        [h]: Y,
        centerOffset: z - Y - ye,
        ...te && {
          alignmentOffset: ye
        }
      },
      reset: te
    };
  }
}), jb = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, a;
      const {
        placement: r,
        middlewareData: o,
        rects: s,
        initialPlacement: i,
        platform: u,
        elements: d
      } = t, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: m = !0,
        ...b
      } = _n(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const x = xn(r), k = Kt(i), $ = xn(i) === i, M = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), S = p || ($ || !m ? [Bs(i)] : Nb(i)), D = v !== "none";
      !p && D && S.push(...Hb(i, m, v, M));
      const A = [i, ...S], N = await eo(t, b), F = [];
      let P = ((a = o.flip) == null ? void 0 : a.overflows) || [];
      if (c && F.push(N[x]), f) {
        const z = Vb(r, s, M);
        F.push(N[z[0]], N[z[1]]);
      }
      if (P = [...P, {
        placement: r,
        overflows: F
      }], !F.every((z) => z <= 0)) {
        var I, R;
        const z = (((I = o.flip) == null ? void 0 : I.index) || 0) + 1, Y = A[z];
        if (Y && (!(f === "alignment" ? k !== Kt(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        P.every((pe) => Kt(pe.placement) === k ? pe.overflows[0] > 0 : !0)))
          return {
            data: {
              index: z,
              overflows: P
            },
            reset: {
              placement: Y
            }
          };
        let te = (R = P.filter((ye) => ye.overflows[0] <= 0).sort((ye, pe) => ye.overflows[1] - pe.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!te)
          switch (h) {
            case "bestFit": {
              var j;
              const ye = (j = P.filter((pe) => {
                if (D) {
                  const q = Kt(pe.placement);
                  return q === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((pe) => [pe.placement, pe.overflows.filter((q) => q > 0).reduce((q, ae) => q + ae, 0)]).sort((pe, q) => pe[1] - q[1])[0]) == null ? void 0 : j[0];
              ye && (te = ye);
              break;
            }
            case "initialPlacement":
              te = i;
              break;
          }
        if (r !== te)
          return {
            reset: {
              placement: te
            }
          };
      }
      return {};
    }
  };
};
function hf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function vf(e) {
  return Pb.some((t) => e[t] >= 0);
}
const Yb = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: a = "referenceHidden",
        ...r
      } = _n(e, t);
      switch (a) {
        case "referenceHidden": {
          const o = await eo(t, {
            ...r,
            elementContext: "reference"
          }), s = hf(o, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: vf(s)
            }
          };
        }
        case "escaped": {
          const o = await eo(t, {
            ...r,
            altBoundary: !0
          }), s = hf(o, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: vf(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Jh = /* @__PURE__ */ new Set(["left", "top"]);
async function Gb(e, t) {
  const {
    placement: n,
    platform: a,
    elements: r
  } = e, o = await (a.isRTL == null ? void 0 : a.isRTL(r.floating)), s = xn(n), i = pr(n), u = Kt(n) === "y", d = Jh.has(s) ? -1 : 1, c = o && u ? -1 : 1, f = _n(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: v
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof v == "number" && (h = i === "end" ? v * -1 : v), u ? {
    x: h * c,
    y: p * d
  } : {
    x: p * d,
    y: h * c
  };
}
const Xb = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, a;
      const {
        x: r,
        y: o,
        placement: s,
        middlewareData: i
      } = t, u = await Gb(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (a = i.arrow) != null && a.alignmentOffset ? {} : {
        x: r + u.x,
        y: o + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, Jb = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: a,
        placement: r
      } = t, {
        mainAxis: o = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (b) => {
            let {
              x,
              y: k
            } = b;
            return {
              x,
              y: k
            };
          }
        },
        ...u
      } = _n(e, t), d = {
        x: n,
        y: a
      }, c = await eo(t, u), f = Kt(xn(r)), p = dd(f);
      let h = d[p], v = d[f];
      if (o) {
        const b = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", k = h + c[b], $ = h - c[x];
        h = Kl(k, h, $);
      }
      if (s) {
        const b = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", k = v + c[b], $ = v - c[x];
        v = Kl(k, v, $);
      }
      const m = i.fn({
        ...t,
        [p]: h,
        [f]: v
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - a,
          enabled: {
            [p]: o,
            [f]: s
          }
        }
      };
    }
  };
}, Zb = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: a,
        placement: r,
        rects: o,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: d = !0
      } = _n(e, t), c = {
        x: n,
        y: a
      }, f = Kt(r), p = dd(f);
      let h = c[p], v = c[f];
      const m = _n(i, t), b = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (u) {
        const $ = p === "y" ? "height" : "width", M = o.reference[p] - o.floating[$] + b.mainAxis, S = o.reference[p] + o.reference[$] - b.mainAxis;
        h < M ? h = M : h > S && (h = S);
      }
      if (d) {
        var x, k;
        const $ = p === "y" ? "width" : "height", M = Jh.has(xn(r)), S = o.reference[f] - o.floating[$] + (M && ((x = s.offset) == null ? void 0 : x[f]) || 0) + (M ? 0 : b.crossAxis), D = o.reference[f] + o.reference[$] + (M ? 0 : ((k = s.offset) == null ? void 0 : k[f]) || 0) - (M ? b.crossAxis : 0);
        v < S ? v = S : v > D && (v = D);
      }
      return {
        [p]: h,
        [f]: v
      };
    }
  };
}, Qb = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, a;
      const {
        placement: r,
        rects: o,
        platform: s,
        elements: i
      } = t, {
        apply: u = () => {
        },
        ...d
      } = _n(e, t), c = await eo(t, d), f = xn(r), p = pr(r), h = Kt(r) === "y", {
        width: v,
        height: m
      } = o.floating;
      let b, x;
      f === "top" || f === "bottom" ? (b = f, x = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (x = f, b = p === "end" ? "top" : "bottom");
      const k = m - c.top - c.bottom, $ = v - c.left - c.right, M = Un(m - c[b], k), S = Un(v - c[x], $), D = !t.middlewareData.shift;
      let A = M, N = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = $), (a = t.middlewareData.shift) != null && a.enabled.y && (A = k), D && !p) {
        const P = pt(c.left, 0), I = pt(c.right, 0), R = pt(c.top, 0), j = pt(c.bottom, 0);
        h ? N = v - 2 * (P !== 0 || I !== 0 ? P + I : pt(c.left, c.right)) : A = m - 2 * (R !== 0 || j !== 0 ? R + j : pt(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: N,
        availableHeight: A
      });
      const F = await s.getDimensions(i.floating);
      return v !== F.width || m !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function gi() {
  return typeof window < "u";
}
function ba(e) {
  return pd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ht(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function en(e) {
  var t;
  return (t = (pd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function pd(e) {
  return gi() ? e instanceof Node || e instanceof ht(e).Node : !1;
}
function Pt(e) {
  return gi() ? e instanceof Element || e instanceof ht(e).Element : !1;
}
function Xt(e) {
  return gi() ? e instanceof HTMLElement || e instanceof ht(e).HTMLElement : !1;
}
function mf(e) {
  return !gi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ht(e).ShadowRoot;
}
const e_ = /* @__PURE__ */ new Set(["inline", "contents"]);
function mo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: a,
    display: r
  } = It(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !e_.has(r);
}
const t_ = /* @__PURE__ */ new Set(["table", "td", "th"]);
function n_(e) {
  return t_.has(ba(e));
}
const a_ = [":popover-open", ":modal"];
function yi(e) {
  return a_.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const r_ = ["transform", "translate", "scale", "rotate", "perspective"], o_ = ["transform", "translate", "scale", "rotate", "perspective", "filter"], s_ = ["paint", "layout", "strict", "content"];
function hd(e) {
  const t = vd(), n = Pt(e) ? It(e) : e;
  return r_.some((a) => n[a] ? n[a] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || o_.some((a) => (n.willChange || "").includes(a)) || s_.some((a) => (n.contain || "").includes(a));
}
function i_(e) {
  let t = Kn(e);
  for (; Xt(t) && !er(t); ) {
    if (hd(t))
      return t;
    if (yi(t))
      return null;
    t = Kn(t);
  }
  return null;
}
function vd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const l_ = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function er(e) {
  return l_.has(ba(e));
}
function It(e) {
  return ht(e).getComputedStyle(e);
}
function bi(e) {
  return Pt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Kn(e) {
  if (ba(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    mf(e) && e.host || // Fallback.
    en(e)
  );
  return mf(t) ? t.host : t;
}
function Zh(e) {
  const t = Kn(e);
  return er(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Xt(t) && mo(t) ? t : Zh(t);
}
function to(e, t, n) {
  var a;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Zh(e), o = r === ((a = e.ownerDocument) == null ? void 0 : a.body), s = ht(r);
  if (o) {
    const i = Yl(s);
    return t.concat(s, s.visualViewport || [], mo(r) ? r : [], i && n ? to(i) : []);
  }
  return t.concat(r, to(r, [], n));
}
function Yl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Qh(e) {
  const t = It(e);
  let n = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
  const r = Xt(e), o = r ? e.offsetWidth : n, s = r ? e.offsetHeight : a, i = Es(n) !== o || Es(a) !== s;
  return i && (n = o, a = s), {
    width: n,
    height: a,
    $: i
  };
}
function md(e) {
  return Pt(e) ? e : e.contextElement;
}
function qa(e) {
  const t = md(e);
  if (!Xt(t))
    return jt(1);
  const n = t.getBoundingClientRect(), {
    width: a,
    height: r,
    $: o
  } = Qh(t);
  let s = (o ? Es(n.width) : n.width) / a, i = (o ? Es(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const u_ = /* @__PURE__ */ jt(0);
function ev(e) {
  const t = ht(e);
  return !vd() || !t.visualViewport ? u_ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function d_(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ht(e) ? !1 : t;
}
function pa(e, t, n, a) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = md(e);
  let s = jt(1);
  t && (a ? Pt(a) && (s = qa(a)) : s = qa(e));
  const i = d_(o, n, a) ? ev(o) : jt(0);
  let u = (r.left + i.x) / s.x, d = (r.top + i.y) / s.y, c = r.width / s.x, f = r.height / s.y;
  if (o) {
    const p = ht(o), h = a && Pt(a) ? ht(a) : a;
    let v = p, m = Yl(v);
    for (; m && a && h !== v; ) {
      const b = qa(m), x = m.getBoundingClientRect(), k = It(m), $ = x.left + (m.clientLeft + parseFloat(k.paddingLeft)) * b.x, M = x.top + (m.clientTop + parseFloat(k.paddingTop)) * b.y;
      u *= b.x, d *= b.y, c *= b.x, f *= b.y, u += $, d += M, v = ht(m), m = Yl(v);
    }
  }
  return Os({
    width: c,
    height: f,
    x: u,
    y: d
  });
}
function _i(e, t) {
  const n = bi(e).scrollLeft;
  return t ? t.left + n : pa(en(e)).left + n;
}
function tv(e, t) {
  const n = e.getBoundingClientRect(), a = n.left + t.scrollLeft - _i(e, n), r = n.top + t.scrollTop;
  return {
    x: a,
    y: r
  };
}
function c_(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: a,
    strategy: r
  } = e;
  const o = r === "fixed", s = en(a), i = t ? yi(t.floating) : !1;
  if (a === s || i && o)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = jt(1);
  const c = jt(0), f = Xt(a);
  if ((f || !f && !o) && ((ba(a) !== "body" || mo(s)) && (u = bi(a)), Xt(a))) {
    const h = pa(a);
    d = qa(a), c.x = h.x + a.clientLeft, c.y = h.y + a.clientTop;
  }
  const p = s && !f && !o ? tv(s, u) : jt(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + c.x + p.x,
    y: n.y * d.y - u.scrollTop * d.y + c.y + p.y
  };
}
function f_(e) {
  return Array.from(e.getClientRects());
}
function p_(e) {
  const t = en(e), n = bi(e), a = e.ownerDocument.body, r = pt(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth), o = pt(t.scrollHeight, t.clientHeight, a.scrollHeight, a.clientHeight);
  let s = -n.scrollLeft + _i(e);
  const i = -n.scrollTop;
  return It(a).direction === "rtl" && (s += pt(t.clientWidth, a.clientWidth) - r), {
    width: r,
    height: o,
    x: s,
    y: i
  };
}
const gf = 25;
function h_(e, t) {
  const n = ht(e), a = en(e), r = n.visualViewport;
  let o = a.clientWidth, s = a.clientHeight, i = 0, u = 0;
  if (r) {
    o = r.width, s = r.height;
    const c = vd();
    (!c || c && t === "fixed") && (i = r.offsetLeft, u = r.offsetTop);
  }
  const d = _i(a);
  if (d <= 0) {
    const c = a.ownerDocument, f = c.body, p = getComputedStyle(f), h = c.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, v = Math.abs(a.clientWidth - f.clientWidth - h);
    v <= gf && (o -= v);
  } else d <= gf && (o += d);
  return {
    width: o,
    height: s,
    x: i,
    y: u
  };
}
const v_ = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function m_(e, t) {
  const n = pa(e, !0, t === "fixed"), a = n.top + e.clientTop, r = n.left + e.clientLeft, o = Xt(e) ? qa(e) : jt(1), s = e.clientWidth * o.x, i = e.clientHeight * o.y, u = r * o.x, d = a * o.y;
  return {
    width: s,
    height: i,
    x: u,
    y: d
  };
}
function yf(e, t, n) {
  let a;
  if (t === "viewport")
    a = h_(e, n);
  else if (t === "document")
    a = p_(en(e));
  else if (Pt(t))
    a = m_(t, n);
  else {
    const r = ev(e);
    a = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return Os(a);
}
function nv(e, t) {
  const n = Kn(e);
  return n === t || !Pt(n) || er(n) ? !1 : It(n).position === "fixed" || nv(n, t);
}
function g_(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let a = to(e, [], !1).filter((i) => Pt(i) && ba(i) !== "body"), r = null;
  const o = It(e).position === "fixed";
  let s = o ? Kn(e) : e;
  for (; Pt(s) && !er(s); ) {
    const i = It(s), u = hd(s);
    !u && i.position === "fixed" && (r = null), (o ? !u && !r : !u && i.position === "static" && !!r && v_.has(r.position) || mo(s) && !u && nv(e, s)) ? a = a.filter((c) => c !== s) : r = i, s = Kn(s);
  }
  return t.set(e, a), a;
}
function y_(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: a,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? yi(t) ? [] : g_(t, this._c) : [].concat(n), a], i = s[0], u = s.reduce((d, c) => {
    const f = yf(t, c, r);
    return d.top = pt(f.top, d.top), d.right = Un(f.right, d.right), d.bottom = Un(f.bottom, d.bottom), d.left = pt(f.left, d.left), d;
  }, yf(t, i, r));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function b_(e) {
  const {
    width: t,
    height: n
  } = Qh(e);
  return {
    width: t,
    height: n
  };
}
function __(e, t, n) {
  const a = Xt(t), r = en(t), o = n === "fixed", s = pa(e, !0, o, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = jt(0);
  function d() {
    u.x = _i(r);
  }
  if (a || !a && !o)
    if ((ba(t) !== "body" || mo(r)) && (i = bi(t)), a) {
      const h = pa(t, !0, o, t);
      u.x = h.x + t.clientLeft, u.y = h.y + t.clientTop;
    } else r && d();
  o && !a && r && d();
  const c = r && !a && !o ? tv(r, i) : jt(0), f = s.left + i.scrollLeft - u.x - c.x, p = s.top + i.scrollTop - u.y - c.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function fl(e) {
  return It(e).position === "static";
}
function bf(e, t) {
  if (!Xt(e) || It(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return en(e) === n && (n = n.ownerDocument.body), n;
}
function av(e, t) {
  const n = ht(e);
  if (yi(e))
    return n;
  if (!Xt(e)) {
    let r = Kn(e);
    for (; r && !er(r); ) {
      if (Pt(r) && !fl(r))
        return r;
      r = Kn(r);
    }
    return n;
  }
  let a = bf(e, t);
  for (; a && n_(a) && fl(a); )
    a = bf(a, t);
  return a && er(a) && fl(a) && !hd(a) ? n : a || i_(e) || n;
}
const x_ = async function(e) {
  const t = this.getOffsetParent || av, n = this.getDimensions, a = await n(e.floating);
  return {
    reference: __(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: a.width,
      height: a.height
    }
  };
};
function w_(e) {
  return It(e).direction === "rtl";
}
const C_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: c_,
  getDocumentElement: en,
  getClippingRect: y_,
  getOffsetParent: av,
  getElementRects: x_,
  getClientRects: f_,
  getDimensions: b_,
  getScale: qa,
  isElement: Pt,
  isRTL: w_
};
function rv(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function $_(e, t) {
  let n = null, a;
  const r = en(e);
  function o() {
    var i;
    clearTimeout(a), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), o();
    const d = e.getBoundingClientRect(), {
      left: c,
      top: f,
      width: p,
      height: h
    } = d;
    if (i || t(), !p || !h)
      return;
    const v = Ro(f), m = Ro(r.clientWidth - (c + p)), b = Ro(r.clientHeight - (f + h)), x = Ro(c), $ = {
      rootMargin: -v + "px " + -m + "px " + -b + "px " + -x + "px",
      threshold: pt(0, Un(1, u)) || 1
    };
    let M = !0;
    function S(D) {
      const A = D[0].intersectionRatio;
      if (A !== u) {
        if (!M)
          return s();
        A ? s(!1, A) : a = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !rv(d, e.getBoundingClientRect()) && s(), M = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...$,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, $);
    }
    n.observe(e);
  }
  return s(!0), o;
}
function ov(e, t, n, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: o = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = a, d = md(e), c = r || o ? [...d ? to(d) : [], ...to(t)] : [];
  c.forEach((x) => {
    r && x.addEventListener("scroll", n, {
      passive: !0
    }), o && x.addEventListener("resize", n);
  });
  const f = d && i ? $_(d, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((x) => {
    let [k] = x;
    k && k.target === d && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var $;
      ($ = h) == null || $.observe(t);
    })), n();
  }), d && !u && h.observe(d), h.observe(t));
  let v, m = u ? pa(e) : null;
  u && b();
  function b() {
    const x = pa(e);
    m && !rv(m, x) && n(), m = x, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var x;
    c.forEach((k) => {
      r && k.removeEventListener("scroll", n), o && k.removeEventListener("resize", n);
    }), f == null || f(), (x = h) == null || x.disconnect(), h = null, u && cancelAnimationFrame(v);
  };
}
const sv = Xb, iv = Jb, Ps = jb, lv = Qb, uv = Yb, k_ = Kb, dv = Zb, S_ = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), r = {
    platform: C_,
    ...n
  }, o = {
    ...r.platform,
    _c: a
  };
  return Ub(e, t, {
    ...r,
    platform: o
  });
};
function T_(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Gl(e) {
  if (T_(e)) {
    const t = e.$el;
    return pd(t) && ba(t) === "#comment" ? null : t;
  }
  return e;
}
function Ra(e) {
  return typeof e == "function" ? e() : l(e);
}
function cv(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Gl(Ra(e.element));
      return n == null ? {} : k_({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function fv(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _f(e, t) {
  const n = fv(e);
  return Math.round(t * n) / n;
}
function pv(e, t, n) {
  n === void 0 && (n = {});
  const a = n.whileElementsMounted, r = T(() => {
    var A;
    return (A = Ra(n.open)) != null ? A : !0;
  }), o = T(() => Ra(n.middleware)), s = T(() => {
    var A;
    return (A = Ra(n.placement)) != null ? A : "bottom";
  }), i = T(() => {
    var A;
    return (A = Ra(n.strategy)) != null ? A : "absolute";
  }), u = T(() => {
    var A;
    return (A = Ra(n.transform)) != null ? A : !0;
  }), d = T(() => Gl(e.value)), c = T(() => Gl(t.value)), f = E(0), p = E(0), h = E(i.value), v = E(s.value), m = mn({}), b = E(!1), x = T(() => {
    const A = {
      position: h.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return A;
    const N = _f(c.value, f.value), F = _f(c.value, p.value);
    return u.value ? {
      ...A,
      transform: "translate(" + N + "px, " + F + "px)",
      ...fv(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: h.value,
      left: N + "px",
      top: F + "px"
    };
  });
  let k;
  function $() {
    if (d.value == null || c.value == null)
      return;
    const A = r.value;
    S_(d.value, c.value, {
      middleware: o.value,
      placement: s.value,
      strategy: i.value
    }).then((N) => {
      f.value = N.x, p.value = N.y, h.value = N.strategy, v.value = N.placement, m.value = N.middlewareData, b.value = A !== !1;
    });
  }
  function M() {
    typeof k == "function" && (k(), k = void 0);
  }
  function S() {
    if (M(), a === void 0) {
      $();
      return;
    }
    if (d.value != null && c.value != null) {
      k = a(d.value, c.value, $);
      return;
    }
  }
  function D() {
    r.value || (b.value = !1);
  }
  return ee([o, s, i, r], $, {
    flush: "sync"
  }), ee([d, c], S, {
    flush: "sync"
  }), ee(r, D, {
    flush: "sync"
  }), ci() && fi(M), {
    x: Ea(f),
    y: Ea(p),
    strategy: Ea(h),
    placement: Ea(v),
    middlewareData: Ea(m),
    isPositioned: Ea(b),
    floatingStyles: x,
    update: $
  };
}
function ge(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(r) => {
    const o = Gn(a, r);
    if (o || o === null)
      return o;
    throw new Error(
      `Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (r) => (At(a, r), r)];
}
function gd(e, t, n) {
  const a = n.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(r);
}
function Is(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function M_(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var A_ = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var a, r, o;
    if (Array.isArray(t)) {
      if (a = t.length, a != n.length) return !1;
      for (r = a; r-- !== 0; )
        if (!e(t[r], n[r])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
    if (o = Object.keys(t), a = o.length, a !== Object.keys(n).length) return !1;
    for (r = a; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, o[r])) return !1;
    for (r = a; r-- !== 0; ) {
      var s = o[r];
      if (!e(t[s], n[s])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const na = /* @__PURE__ */ M_(A_);
function is(e) {
  return e == null;
}
function hv(e) {
  const { defaultValue: t, defaultPlaceholder: n, granularity: a = "day", locale: r = "en" } = e;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (n)
    return n.copy();
  const o = /* @__PURE__ */ new Date(), s = o.getFullYear(), i = o.getMonth() + 1, u = o.getDate(), d = ["hour", "minute", "second"], c = new zt(r), f = gb(c.resolvedOptions().calendar);
  return d.includes(a ?? "day") ? st(new Za(s, i, u, 0, 0, 0), f) : st(new Ne(s, i, u), f);
}
function vv(e) {
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
function D_(e, t) {
  var n;
  const a = mn();
  return Ce(() => {
    a.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), fr(a);
}
function _a(e) {
  return ci() ? (fi(e), !0) : !1;
}
function E_() {
  const e = /* @__PURE__ */ new Set(), t = (n) => {
    e.delete(n);
  };
  return {
    on: (n) => {
      e.add(n);
      const a = () => t(n);
      return _a(a), {
        off: a
      };
    },
    off: t,
    trigger: (...n) => Promise.all(Array.from(e).map((a) => a(...n)))
  };
}
function B_(e) {
  let t = !1, n;
  const a = Zu(!0);
  return (...r) => (t || (n = a.run(() => e(...r)), t = !0), n);
}
function mv(e) {
  let t = 0, n, a;
  const r = () => {
    t -= 1, a && t <= 0 && (a.stop(), n = void 0, a = void 0);
  };
  return (...o) => (t += 1, n || (a = Zu(!0), n = a.run(() => e(...o))), _a(r), n);
}
function gn(e) {
  return typeof e == "function" ? e() : l(e);
}
const tn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const O_ = (e) => typeof e < "u", P_ = (e) => e != null, I_ = Object.prototype.toString, R_ = (e) => I_.call(e) === "[object Object]", gv = () => {
}, xf = /* @__PURE__ */ F_();
function F_() {
  var e, t;
  return tn && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function V_(e) {
  return We();
}
function yv(e, t = 1e4) {
  return Gu((n, a) => {
    let r = gn(e), o;
    const s = () => setTimeout(() => {
      r = gn(e), a();
    }, gn(t));
    return _a(() => {
      clearTimeout(o);
    }), {
      get() {
        return n(), r;
      },
      set(i) {
        r = i, a(), clearTimeout(o), o = s();
      }
    };
  });
}
function N_(e, t) {
  V_() && pi(e, t);
}
function yd(e, t, n = {}) {
  const {
    immediate: a = !0
  } = n, r = E(!1);
  let o = null;
  function s() {
    o && (clearTimeout(o), o = null);
  }
  function i() {
    r.value = !1, s();
  }
  function u(...d) {
    s(), r.value = !0, o = setTimeout(() => {
      r.value = !1, o = null, e(...d);
    }, gn(t));
  }
  return a && (r.value = !0, tn && u()), _a(i), {
    isPending: fr(r),
    start: u,
    stop: i
  };
}
function L_(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: a
  } = t, r = yd(
    a ?? gv,
    e,
    t
  ), o = T(() => !r.isPending.value);
  return n ? {
    ready: o,
    ...r
  } : o;
}
function Ct(e) {
  var t;
  const n = gn(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const go = tn ? window : void 0;
function tr(...e) {
  let t, n, a, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, a, r] = e, t = go) : [t, n, a, r] = e, !t)
    return gv;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const o = [], s = () => {
    o.forEach((c) => c()), o.length = 0;
  }, i = (c, f, p, h) => (c.addEventListener(f, p, h), () => c.removeEventListener(f, p, h)), u = ee(
    () => [Ct(t), gn(r)],
    ([c, f]) => {
      if (s(), !c)
        return;
      const p = R_(f) ? { ...f } : f;
      o.push(
        ...n.flatMap((h) => a.map((v) => i(c, h, v, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), s();
  };
  return _a(d), d;
}
function z_(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function bd(...e) {
  let t, n, a = {};
  e.length === 3 ? (t = e[0], n = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], a = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = go,
    eventName: o = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = a, u = z_(t);
  return tr(r, o, (d) => {
    d.repeat && gn(i) || u(d) && n(d);
  }, s);
}
function _d() {
  const e = E(!1), t = We();
  return t && de(() => {
    e.value = !0;
  }, t), e;
}
function q_(e) {
  const t = _d();
  return T(() => (t.value, !!e()));
}
function H_(e, t, n = {}) {
  const { window: a = go, ...r } = n;
  let o;
  const s = q_(() => a && "MutationObserver" in a), i = () => {
    o && (o.disconnect(), o = void 0);
  }, u = T(() => {
    const p = gn(e), h = (Array.isArray(p) ? p : [p]).map(Ct).filter(P_);
    return new Set(h);
  }), d = ee(
    () => u.value,
    (p) => {
      i(), s.value && p.size && (o = new MutationObserver(t), p.forEach((h) => o.observe(h, r)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => o == null ? void 0 : o.takeRecords(), f = () => {
    i(), d();
  };
  return _a(f), {
    isSupported: s,
    stop: f,
    takeRecords: c
  };
}
function bv(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: a = void 0,
    window: r = go
  } = t, o = E(!1), s = a ? 1e3 / a : null;
  let i = 0, u = null;
  function d(p) {
    if (!o.value || !r)
      return;
    i || (i = p);
    const h = p - i;
    if (s && h < s) {
      u = r.requestAnimationFrame(d);
      return;
    }
    i = p, e({ delta: h, timestamp: p }), u = r.requestAnimationFrame(d);
  }
  function c() {
    !o.value && r && (o.value = !0, i = 0, u = r.requestAnimationFrame(d));
  }
  function f() {
    o.value = !1, u != null && r && (r.cancelAnimationFrame(u), u = null);
  }
  return n && c(), _a(f), {
    isActive: fr(o),
    pause: f,
    resume: c
  };
}
function W_(e) {
  return JSON.parse(JSON.stringify(e));
}
function De(e, t, n, a = {}) {
  var r, o, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, h = We(), v = n || (h == null ? void 0 : h.emit) || ((r = h == null ? void 0 : h.$emit) == null ? void 0 : r.bind(h)) || ((s = (o = h == null ? void 0 : h.proxy) == null ? void 0 : o.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let m = d;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const b = ($) => i ? typeof i == "function" ? i($) : W_($) : $, x = () => O_(e[t]) ? b(e[t]) : f, k = ($) => {
    p ? p($) && v(m, $) : v(m, $);
  };
  if (u) {
    const $ = x(), M = E($);
    let S = !1;
    return ee(
      () => e[t],
      (D) => {
        S || (S = !0, M.value = b(D), re(() => S = !1));
      }
    ), ee(
      M,
      (D) => {
        !S && (D !== e[t] || c) && k(D);
      },
      { deep: c }
    ), M;
  } else
    return T({
      get() {
        return x();
      },
      set($) {
        k($);
      }
    });
}
function xi(e) {
  return e ? e.flatMap((t) => t.type === ue ? xi(t.children) : [t]) : [];
}
function Ue() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const U_ = ["INPUT", "TEXTAREA"];
function _v(e, t, n, a = {}) {
  if (!t || a.enableIgnoredElement && U_.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: r = "both",
    attributeName: o = "[data-radix-vue-collection-item]",
    itemsArray: s = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = a, [f, p, h, v, m, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], x = h || v, k = f || p;
  if (!m && !b && (!x && !k || r === "vertical" && k || r === "horizontal" && x))
    return null;
  const $ = n ? Array.from(n.querySelectorAll(o)) : s;
  if (!$.length)
    return null;
  d && e.preventDefault();
  let M = null;
  return k || x ? M = xv($, t, {
    goForward: x ? v : u === "ltr" ? f : p,
    loop: i
  }) : m ? M = $.at(0) || null : b && (M = $.at(-1) || null), c && (M == null || M.focus()), M;
}
function xv(e, t, n, a = e.length) {
  if (--a === 0)
    return null;
  const r = e.indexOf(t), o = n.goForward ? r + 1 : r - 1;
  if (!n.loop && (o < 0 || o >= e.length))
    return null;
  const s = (o + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? xv(
    e,
    i,
    n,
    a
  ) : i : null;
}
function pl(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Xl(e, t, n = ".", a) {
  if (!pl(t))
    return Xl(e, {}, n);
  const r = Object.assign({}, t);
  for (const o in e) {
    if (o === "__proto__" || o === "constructor")
      continue;
    const s = e[o];
    s != null && (Array.isArray(s) && Array.isArray(r[o]) ? r[o] = [...s, ...r[o]] : pl(s) && pl(r[o]) ? r[o] = Xl(
      s,
      r[o],
      (n ? `${n}.` : "") + o.toString()
    ) : r[o] = s);
  }
  return r;
}
function K_(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, a) => Xl(n, a, ""), {})
  );
}
const j_ = K_(), [wi] = ge("ConfigProvider");
let Y_ = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", G_ = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Y_[Math.random() * 64 | 0];
  return t;
};
const X_ = mv(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = T(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), a = wi({
    scrollBody: E(!0)
  });
  let r = null;
  const o = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", xf && (r == null || r()), t.value = void 0;
  };
  return ee(n, (s, i) => {
    var u;
    if (!tn)
      return;
    if (!s) {
      i && o();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, f = (u = a.scrollBody) != null && u.value ? typeof a.scrollBody.value == "object" ? j_({
      padding: a.scrollBody.value.padding === !0 ? d : a.scrollBody.value.padding,
      margin: a.scrollBody.value.margin === !0 ? d : a.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof f.padding == "number" ? `${f.padding}px` : String(f.padding), document.body.style.marginRight = typeof f.margin == "number" ? `${f.margin}px` : String(f.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), xf && (r = tr(
      document,
      "touchmove",
      (p) => J_(p),
      { passive: !1 }
    )), re(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function yo(e) {
  const t = G_(6), n = X_();
  n.value.set(t, e ?? !1);
  const a = T({
    get: () => n.value.get(t) ?? !1,
    set: (r) => n.value.set(t, r)
  });
  return N_(() => {
    n.value.delete(t);
  }), a;
}
function wv(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : wv(n);
  }
}
function J_(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && wv(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Z_ = "data-radix-vue-collection-item";
function hr(e, t = Z_) {
  const n = Symbol();
  return { createCollection: (a) => {
    const r = E([]);
    function o() {
      const s = Ct(a);
      return s ? r.value = Array.from(
        s.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return _0(() => {
      r.value = [];
    }), de(o), x0(o), ee(() => a == null ? void 0 : a.value, o, { immediate: !0 }), At(n, r), r;
  }, injectCollection: () => Gn(n, E([])) };
}
function Cv(e) {
  const t = E(e);
  function n() {
    return t.value;
  }
  function a(m) {
    t.value = m;
  }
  function r(m, b) {
    return new zt(t.value, b).format(m);
  }
  function o(m, b = !0) {
    return $b(m) && b ? r(xt(m), {
      dateStyle: "long",
      timeStyle: "long"
    }) : r(xt(m), {
      dateStyle: "long"
    });
  }
  function s(m, b = {}) {
    return new zt(t.value, { month: "long", year: "numeric", ...b }).format(m);
  }
  function i(m, b = {}) {
    return new zt(t.value, { month: "long", ...b }).format(m);
  }
  function u() {
    const m = ks(yn());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((b) => ({ label: i(xt(m.set({ month: b }))), value: b }));
  }
  function d(m, b = {}) {
    return new zt(t.value, { year: "numeric", ...b }).format(m);
  }
  function c(m, b) {
    return ud(m) ? new zt(t.value, {
      ...b,
      timeZone: m.timeZone
    }).formatToParts(xt(m)) : new zt(t.value, b).formatToParts(xt(m));
  }
  function f(m, b = "narrow") {
    return new zt(t.value, { weekday: b }).format(m);
  }
  function p(m) {
    var b;
    return ((b = new zt(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(m).find((x) => x.type === "dayPeriod")) == null ? void 0 : b.value) === "PM" ? "PM" : "AM";
  }
  const h = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function v(m, b, x = {}) {
    const k = { ...h, ...x }, $ = c(m, k).find((M) => M.type === b);
    return $ ? $.value : "";
  }
  return {
    setLocale: a,
    getLocale: n,
    fullMonth: i,
    fullYear: d,
    fullMonthAndYear: s,
    toParts: c,
    custom: r,
    part: v,
    dayPeriod: p,
    selectedDate: o,
    dayOfWeek: f,
    getMonths: u
  };
}
function nn(e) {
  const t = wi({
    dir: E("ltr")
  });
  return T(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function xa(e) {
  const t = We(), n = t == null ? void 0 : t.type.emits, a = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((r) => {
    a[Ch(Ga(r))] = (...o) => e(r, ...o);
  }), a;
}
let hl = 0;
function xd() {
  Ce((e) => {
    if (!tn)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? wf()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? wf()
    ), hl++, e(() => {
      hl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), hl--;
    });
  });
}
function wf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function bo(e) {
  return T(() => {
    var t;
    return gn(e) ? !!((t = Ct(e)) != null && t.closest("form")) : !0;
  });
}
function be(e) {
  const t = We(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, o) => {
    const s = (t == null ? void 0 : t.type.props[o]).default;
    return s !== void 0 && (r[o] = s), r;
  }, {}), a = ju(e);
  return T(() => {
    const r = {}, o = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(o).forEach((s) => {
      r[Ga(s)] = o[s];
    }), Object.keys({ ...n, ...r }).reduce((s, i) => (a.value[i] !== void 0 && (s[i] = a.value[i]), s), {});
  });
}
function he(e, t) {
  const n = be(e), a = t ? xa(t) : {};
  return T(() => ({
    ...n.value,
    ...a
  }));
}
function K() {
  const e = We(), t = E(), n = T(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Ct(t);
  }), a = Object.assign({}, e.exposed), r = {};
  for (const s in e.props)
    Object.defineProperty(r, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s]
    });
  if (Object.keys(a).length > 0)
    for (const s in a)
      Object.defineProperty(r, s, {
        enumerable: !0,
        configurable: !0,
        get: () => a[s]
      });
  Object.defineProperty(r, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = r;
  function o(s) {
    t.value = s, s && (Object.defineProperty(r, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), e.exposed = r);
  }
  return { forwardRef: o, currentRef: t, currentElement: n };
}
function Q_(e, t) {
  const n = yv(!1, 300), a = E(null), r = E_();
  function o() {
    a.value = null, n.value = !1;
  }
  function s(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, f = e1(c, d.getBoundingClientRect()), p = t1(c, f), h = n1(u.getBoundingClientRect()), v = r1([...p, ...h]);
    a.value = v, n.value = !0;
  }
  return Ce((i) => {
    if (e.value && t.value) {
      const u = (c) => s(c, t.value), d = (c) => s(c, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var c, f;
        (c = e.value) == null || c.removeEventListener("pointerleave", u), (f = t.value) == null || f.removeEventListener("pointerleave", d);
      });
    }
  }), Ce((i) => {
    var u;
    if (a.value) {
      const d = (c) => {
        var f, p;
        if (!a.value)
          return;
        const h = c.target, v = { x: c.clientX, y: c.clientY }, m = ((f = e.value) == null ? void 0 : f.contains(h)) || ((p = t.value) == null ? void 0 : p.contains(h)), b = !a1(v, a.value), x = !!h.closest("[data-grace-area-trigger]");
        m ? o() : (b || x) && (o(), r.trigger());
      };
      (u = e.value) == null || u.ownerDocument.addEventListener("pointermove", d), i(() => {
        var c;
        return (c = e.value) == null ? void 0 : c.ownerDocument.removeEventListener("pointermove", d);
      });
    }
  }), {
    isPointerInTransit: n,
    onPointerExit: r.on
  };
}
function e1(e, t) {
  const n = Math.abs(t.top - e.y), a = Math.abs(t.bottom - e.y), r = Math.abs(t.right - e.x), o = Math.abs(t.left - e.x);
  switch (Math.min(n, a, r, o)) {
    case o:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case a:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function t1(e, t, n = 5) {
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
function n1(e) {
  const { top: t, right: n, bottom: a, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: a },
    { x: r, y: a }
  ];
}
function a1(e, t) {
  const { x: n, y: a } = e;
  let r = !1;
  for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
    const i = t[o].x, u = t[o].y, d = t[s].x, c = t[s].y;
    u > a != c > a && n < (d - i) * (a - u) / (c - u) + i && (r = !r);
  }
  return r;
}
function r1(e) {
  const t = e.slice();
  return t.sort((n, a) => n.x < a.x ? -1 : n.x > a.x ? 1 : n.y < a.y ? -1 : n.y > a.y ? 1 : 0), o1(t);
}
function o1(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let a = 0; a < e.length; a++) {
    const r = e[a];
    for (; t.length >= 2; ) {
      const o = t[t.length - 1], s = t[t.length - 2];
      if ((o.x - s.x) * (r.y - s.y) >= (o.y - s.y) * (r.x - s.x))
        t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let a = e.length - 1; a >= 0; a--) {
    const r = e[a];
    for (; n.length >= 2; ) {
      const o = n[n.length - 1], s = n[n.length - 2];
      if ((o.x - s.x) * (r.y - s.y) >= (o.y - s.y) * (r.x - s.x))
        n.pop();
      else break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var s1 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Oa = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), Vo = {}, vl = 0, $v = function(e) {
  return e && (e.host || $v(e.parentNode));
}, i1 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var a = $v(n);
    return a && e.contains(a) ? a : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, l1 = function(e, t, n, a) {
  var r = i1(t, Array.isArray(e) ? e : [e]);
  Vo[n] || (Vo[n] = /* @__PURE__ */ new WeakMap());
  var o = Vo[n], s = [], i = /* @__PURE__ */ new Set(), u = new Set(r), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  r.forEach(d);
  var c = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        c(p);
      else
        try {
          var h = p.getAttribute(a), v = h !== null && h !== "false", m = (Oa.get(p) || 0) + 1, b = (o.get(p) || 0) + 1;
          Oa.set(p, m), o.set(p, b), s.push(p), m === 1 && v && Fo.set(p, !0), b === 1 && p.setAttribute(n, "true"), v || p.setAttribute(a, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", p, x);
        }
    });
  };
  return c(t), i.clear(), vl++, function() {
    s.forEach(function(f) {
      var p = Oa.get(f) - 1, h = o.get(f) - 1;
      Oa.set(f, p), o.set(f, h), p || (Fo.has(f) || f.removeAttribute(a), Fo.delete(f)), h || f.removeAttribute(n);
    }), vl--, vl || (Oa = /* @__PURE__ */ new WeakMap(), Oa = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), Vo = {});
  };
}, u1 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var a = Array.from(Array.isArray(e) ? e : [e]), r = s1(e);
  return r ? (a.push.apply(a, Array.from(r.querySelectorAll("[aria-live]"))), l1(a, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function _o(e) {
  let t;
  ee(() => Ct(e), (n) => {
    n ? t = u1(n) : t && t();
  }), Ke(() => {
    t && t();
  });
}
let d1 = 0;
function He(e, t = "radix") {
  const n = wi({ useId: void 0 });
  return Fa.useId ? `${t}-${Fa.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++d1}`;
}
function kv(e) {
  const t = E(), n = T(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.width) ?? 0;
  }), a = T(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.height) ?? 0;
  });
  return de(() => {
    const r = Ct(e);
    if (r) {
      t.value = { width: r.offsetWidth, height: r.offsetHeight };
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
          u = f.inlineSize, d = f.blockSize;
        } else
          u = r.offsetWidth, d = r.offsetHeight;
        t.value = { width: u, height: d };
      });
      return o.observe(r, { box: "border-box" }), () => o.unobserve(r);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: a
  };
}
function c1(e, t) {
  const n = E(e);
  function a(r) {
    return t[n.value][r] ?? n.value;
  }
  return {
    state: n,
    dispatch: (r) => {
      n.value = a(r);
    }
  };
}
const f1 = "data-item-text";
function wd(e) {
  const t = yv("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, a) => {
      if (!(e != null && e.value) && !a)
        return;
      t.value = t.value + n;
      const r = (e == null ? void 0 : e.value) ?? a, o = Ue(), s = r.map((f) => {
        var p;
        return {
          ref: f,
          textValue: ((p = (f.querySelector(`[${f1}]`) ?? f).textContent) == null ? void 0 : p.trim()) ?? ""
        };
      }), i = s.find((f) => f.ref === o), u = s.map((f) => f.textValue), d = h1(u, t.value, i == null ? void 0 : i.textValue), c = s.find((f) => f.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function p1(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
function h1(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let o = p1(e, Math.max(r, 0));
  a.length === 1 && (o = o.filter((i) => i !== n));
  const s = o.find(
    (i) => i.toLowerCase().startsWith(a.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function Sv() {
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
const Cd = _({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var a, r;
      if (!n.default)
        return null;
      const o = xi(n.default()), s = o.findIndex((c) => c.type !== Yu);
      if (s === -1)
        return o;
      const i = o[s];
      (a = i.props) == null || delete a.ref;
      const u = i.props ? B(t, i.props) : t;
      t.class && (r = i.props) != null && r.class && delete i.props.class;
      const d = $h(i, u);
      for (const c in u)
        c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
      return o.length === 1 ? d : (o[s] = d, o);
    };
  }
}), W = _({
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
    return typeof a == "string" && ["area", "img", "input"].includes(a) ? () => rt(a, t) : a !== "template" ? () => rt(e.as, t, { default: n.default }) : () => rt(Cd, t, { default: n.default });
  }
});
function vr() {
  const e = E(), t = T(() => {
    var n, a;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (a = e.value) == null ? void 0 : a.$el.nextElementSibling : Ct(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [Tv, v1] = ge("CollapsibleRoot"), m1 = /* @__PURE__ */ _({
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
    const a = e, r = De(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = De(a, "disabled");
    return v1({
      contentId: "",
      disabled: o,
      open: r,
      onOpenToggle: () => {
        r.value = !r.value;
      }
    }), t({ open: r }), K(), (s, i) => (g(), w(l(W), {
      as: s.as,
      "as-child": a.asChild,
      "data-state": l(r) ? "open" : "closed",
      "data-disabled": l(o) ? "" : void 0
    }, {
      default: y(() => [
        C(s.$slots, "default", { open: l(r) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), g1 = /* @__PURE__ */ _({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    K();
    const n = Tv();
    return (a, r) => {
      var o, s;
      return g(), w(l(W), {
        type: a.as === "button" ? "button" : void 0,
        as: a.as,
        "as-child": t.asChild,
        "aria-controls": l(n).contentId,
        "aria-expanded": l(n).open.value,
        "data-state": l(n).open.value ? "open" : "closed",
        "data-disabled": (o = l(n).disabled) != null && o.value ? "" : void 0,
        disabled: (s = l(n).disabled) == null ? void 0 : s.value,
        onClick: l(n).onOpenToggle
      }, {
        default: y(() => [
          C(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function y1(e, t) {
  var n;
  const a = E({}), r = E("none"), o = E(e), s = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? go, { state: d, dispatch: c } = c1(s, {
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
  }), f = (b) => {
    var x;
    if (tn) {
      const k = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      (x = t.value) == null || x.dispatchEvent(k);
    }
  };
  ee(
    e,
    async (b, x) => {
      var k;
      const $ = x !== b;
      if (await re(), $) {
        const M = r.value, S = No(t.value);
        b ? (c("MOUNT"), f("enter"), S === "none" && f("after-enter")) : S === "none" || ((k = a.value) == null ? void 0 : k.display) === "none" ? (c("UNMOUNT"), f("leave"), f("after-leave")) : x && M !== S ? (c("ANIMATION_OUT"), f("leave")) : (c("UNMOUNT"), f("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const p = (b) => {
    const x = No(t.value), k = x.includes(
      b.animationName
    ), $ = d.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && k && (f(`after-${$}`), c("ANIMATION_END"), !o.value)) {
      const M = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var S;
        ((S = t.value) == null ? void 0 : S.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = M);
      });
    }
    b.target === t.value && x === "none" && c("ANIMATION_END");
  }, h = (b) => {
    b.target === t.value && (r.value = No(t.value));
  }, v = ee(
    t,
    (b, x) => {
      b ? (a.value = getComputedStyle(b), b.addEventListener("animationstart", h), b.addEventListener("animationcancel", p), b.addEventListener("animationend", p)) : (c("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), x == null || x.removeEventListener("animationstart", h), x == null || x.removeEventListener("animationcancel", p), x == null || x.removeEventListener("animationend", p));
    },
    { immediate: !0 }
  ), m = ee(d, () => {
    const b = No(t.value);
    r.value = d.value === "mounted" ? b : "none";
  });
  return Ke(() => {
    v(), m();
  }), {
    isPresent: T(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function No(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const gt = _({
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
    const { present: r, forceMount: o } = me(e), s = E(), { isPresent: i } = y1(r, s);
    n({ present: i });
    let u = t.default({ present: i });
    u = xi(u || []);
    const d = We();
    if (u && (u == null ? void 0 : u.length) > 1) {
      const c = (a = d == null ? void 0 : d.parent) != null && a.type.name ? `<${d.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
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
    return () => o.value || r.value || i.value ? rt(t.default({ present: i })[0], {
      ref: (c) => {
        const f = Ct(c);
        return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-radix-popper-content-wrapper") ? s.value = f.firstElementChild : s.value = f), f;
      }
    }) : null;
  }
}), b1 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Tv();
    n.contentId || (n.contentId = He(void 0, "radix-vue-collapsible-content"));
    const a = E(), { forwardRef: r, currentElement: o } = K(), s = E(0), i = E(0), u = T(() => n.open.value), d = E(u.value), c = E();
    return ee(
      () => {
        var f;
        return [u.value, (f = a.value) == null ? void 0 : f.present];
      },
      async () => {
        await re();
        const f = o.value;
        if (!f)
          return;
        c.value = c.value || {
          transitionDuration: f.style.transitionDuration,
          animationName: f.style.animationName
        }, f.style.transitionDuration = "0s", f.style.animationName = "none";
        const p = f.getBoundingClientRect();
        i.value = p.height, s.value = p.width, d.value || (f.style.transitionDuration = c.value.transitionDuration, f.style.animationName = c.value.animationName);
      },
      {
        immediate: !0
      }
    ), de(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (f, p) => (g(), w(l(gt), {
      ref_key: "presentRef",
      ref: a,
      present: f.forceMount || l(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var h, v;
        return [
          O(l(W), B(f.$attrs, {
            id: l(n).contentId,
            ref: l(r),
            "as-child": t.asChild,
            as: f.as,
            "data-state": l(n).open.value ? "open" : "closed",
            "data-disabled": (h = l(n).disabled) != null && h.value ? "" : void 0,
            hidden: !((v = a.value) != null && v.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${s.value}px`
            }
          }), {
            default: y(() => {
              var m;
              return [
                (m = a.value) != null && m.present ? C(f.$slots, "default", { key: 0 }) : se("", !0)
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
function Mv({ type: e, defaultValue: t, modelValue: n }) {
  const a = n || t;
  if (is(e) && is(n) && is(t))
    throw new Error("Either the `type` or the `value` or `default-value` prop must be defined.");
  if (n !== void 0 && t !== void 0 && typeof n != typeof t)
    throw new Error(
      `Invalid prop \`value\` of value \`${n}\` supplied, should be the same type as the \`defaultValue\` prop, which is \`${t}\`. The \`value\` prop must be:
  ${e === "single" ? "- a string" : e === "multiple" ? "- an array of strings" : `- a string
- an array of strings`}
  - \`undefined\``
    );
  const r = n !== void 0 || t !== void 0;
  if (e && r) {
    const o = Array.isArray(n) || Array.isArray(t), s = n !== void 0 ? "modelValue" : "defaultValue", i = s === "modelValue" ? typeof n : typeof t;
    if (e === "single" && o)
      return console.error(`Invalid prop \`${s}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${s} prop.`), "multiple";
    if (e === "multiple" && !o)
      return console.error(`Invalid prop \`${s}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${s} prop.`), "single";
  }
  return r ? Array.isArray(a) ? "multiple" : "single" : e;
}
function _1({ type: e, defaultValue: t, modelValue: n }) {
  return e || Mv({ type: e, defaultValue: t, modelValue: n });
}
function x1({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function w1(e, t) {
  const n = E(_1(e)), a = De(e, "modelValue", t, {
    defaultValue: x1(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  ee(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const s = Mv(e);
      n.value !== s && (n.value = s);
    },
    { immediate: !0 }
  );
  function r(s) {
    if (n.value === "single")
      a.value = s === a.value ? void 0 : s;
    else {
      const i = [...a.value || []];
      if (i.includes(s)) {
        const u = i.findIndex((d) => d === s);
        i.splice(u, 1);
      } else
        i.push(s);
      a.value = i;
    }
  }
  const o = T(() => n.value === "single");
  return {
    modelValue: a,
    type: n,
    changeModelValue: r,
    isSingle: o
  };
}
const [Ci, C1] = ge("AccordionRoot"), $1 = /* @__PURE__ */ _({
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
    const n = e, a = t, { dir: r, disabled: o } = me(n), s = nn(r), { modelValue: i, changeModelValue: u, isSingle: d } = w1(n, a), { forwardRef: c, currentElement: f } = K();
    return C1({
      disabled: o,
      direction: s,
      orientation: n.orientation,
      parentElement: f,
      isSingle: d,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (p, h) => (g(), w(l(W), {
      ref: l(c),
      "as-child": p.asChild,
      as: p.as
    }, {
      default: y(() => [
        C(p.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [$d, k1] = ge("AccordionItem"), S1 = /* @__PURE__ */ _({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, a = Ci(), r = T(
      () => a.isSingle.value ? n.value === a.modelValue.value : Array.isArray(a.modelValue.value) && a.modelValue.value.includes(n.value)
    ), o = T(() => a.disabled.value || n.disabled), s = T(() => o.value ? "" : void 0), i = T(
      () => r.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: r, dataDisabled: s });
    const { currentRef: u, currentElement: d } = K();
    k1({
      open: r,
      dataState: i,
      disabled: o,
      dataDisabled: s,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: T(() => n.value)
    });
    function c(f) {
      var p;
      const h = f.target;
      if (Array.from(((p = a.parentElement.value) == null ? void 0 : p.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((v) => v === h) === -1)
        return null;
      _v(
        f,
        d.value,
        a.parentElement.value,
        {
          arrowKeyOptions: a.orientation,
          dir: a.direction.value,
          focus: !0
        }
      );
    }
    return (f, p) => (g(), w(l(m1), {
      "data-orientation": l(a).orientation,
      "data-disabled": s.value,
      "data-state": i.value,
      disabled: o.value,
      open: r.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: Xe(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        C(f.$slots, "default", { open: r.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), T1 = /* @__PURE__ */ _({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ci(), a = $d();
    return K(), (r, o) => (g(), w(l(b1), {
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
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), M1 = /* @__PURE__ */ _({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = Ci(), a = $d();
    return K(), (r, o) => (g(), w(l(W), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": l(n).orientation,
      "data-state": l(a).dataState.value,
      "data-disabled": l(a).dataDisabled.value
    }, {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), A1 = /* @__PURE__ */ _({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ci(), a = $d();
    a.triggerId || (a.triggerId = He(void 0, "radix-vue-accordion-trigger"));
    function r() {
      const o = n.isSingle.value && a.open.value && !n.collapsible;
      a.disabled.value || o || n.changeModelValue(a.value.value);
    }
    return (o, s) => (g(), w(l(g1), {
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
      onClick: r
    }, {
      default: y(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [an, D1] = ge("DialogRoot"), Av = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = De(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), o = E(), { modal: s } = me(n);
    return D1({
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
      triggerElement: r,
      contentElement: o
    }), (i, u) => C(i.$slots, "default", { open: l(a) });
  }
}), Dv = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = an(), { forwardRef: a, currentElement: r } = K();
    return n.contentId || (n.contentId = He(void 0, "radix-vue-dialog-content")), de(() => {
      n.triggerElement.value = r.value;
    }), (o, s) => (g(), w(l(W), B(t, {
      ref: l(a),
      type: o.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": l(n).open.value || !1,
      "aria-controls": l(n).open.value ? l(n).contentId : void 0,
      "data-state": l(n).open.value ? "open" : "closed",
      onClick: l(n).onOpenToggle
    }), {
      default: y(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), xo = /* @__PURE__ */ _({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = _d();
    return (n, a) => l(t) || n.forceMount ? (g(), w(ga, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      C(n.$slots, "default")
    ], 8, ["to", "disabled"])) : se("", !0);
  }
}), kd = /* @__PURE__ */ _({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(xo), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), E1 = "dismissableLayer.pointerDownOutside", B1 = "dismissableLayer.focusOutside";
function Ev(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), a = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), r = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && a === n || r.indexOf(a) < r.indexOf(n));
}
function O1(e, t) {
  var n;
  const a = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = E(!1), o = E(() => {
  });
  return Ce((s) => {
    if (!tn)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (Ev(t.value, c)) {
          r.value = !1;
          return;
        }
        if (d.target && !r.value) {
          let f = function() {
            gd(
              E1,
              e,
              p
            );
          };
          const p = { originalEvent: d };
          d.pointerType === "touch" ? (a.removeEventListener("click", o.value), o.value = f, a.addEventListener("click", o.value, {
            once: !0
          })) : f();
        } else
          a.removeEventListener("click", o.value);
        r.value = !1;
      }
    }, u = window.setTimeout(() => {
      a.addEventListener("pointerdown", i);
    }, 0);
    s(() => {
      window.clearTimeout(u), a.removeEventListener("pointerdown", i), a.removeEventListener("click", o.value);
    });
  }), {
    onPointerDownCapture: () => r.value = !0
  };
}
function P1(e, t) {
  var n;
  const a = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = E(!1);
  return Ce((o) => {
    if (!tn)
      return;
    const s = async (i) => {
      t != null && t.value && (await re(), !(!t.value || Ev(t.value, i.target)) && i.target && !r.value && gd(
        B1,
        e,
        { originalEvent: i }
      ));
    };
    a.addEventListener("focusin", s), o(() => a.removeEventListener("focusin", s));
  }), {
    onFocusCapture: () => r.value = !0,
    onBlurCapture: () => r.value = !1
  };
}
const St = Wn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), mr = /* @__PURE__ */ _({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: r, currentElement: o } = K(), s = T(
      () => {
        var v;
        return ((v = o.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = T(() => St.layersRoot), u = T(() => o.value ? Array.from(i.value).indexOf(o.value) : -1), d = T(() => St.layersWithOutsidePointerEventsDisabled.size > 0), c = T(() => {
      const v = Array.from(i.value), [m] = [...St.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(m);
      return u.value >= b;
    }), f = O1(async (v) => {
      const m = [...St.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      );
      !c.value || m || (a("pointerDownOutside", v), a("interactOutside", v), await re(), v.defaultPrevented || a("dismiss"));
    }, o), p = P1((v) => {
      [...St.branches].some(
        (m) => m == null ? void 0 : m.contains(v.target)
      ) || (a("focusOutside", v), a("interactOutside", v), v.defaultPrevented || a("dismiss"));
    }, o);
    bd("Escape", (v) => {
      u.value === i.value.size - 1 && (a("escapeKeyDown", v), v.defaultPrevented || a("dismiss"));
    });
    let h;
    return Ce((v) => {
      o.value && (n.disableOutsidePointerEvents && (St.layersWithOutsidePointerEventsDisabled.size === 0 && (h = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), St.layersWithOutsidePointerEventsDisabled.add(o.value)), i.value.add(o.value), v(() => {
        n.disableOutsidePointerEvents && St.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = h);
      }));
    }), Ce((v) => {
      v(() => {
        o.value && (i.value.delete(o.value), St.layersWithOutsidePointerEventsDisabled.delete(o.value));
      });
    }), (v, m) => (g(), w(l(W), {
      ref: l(r),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Qt({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(p).onFocusCapture,
      onBlurCapture: l(p).onBlurCapture,
      onPointerdownCapture: l(f).onPointerDownCapture
    }, {
      default: y(() => [
        C(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), I1 = /* @__PURE__ */ _({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = K();
    return de(() => {
      St.branches.add(a.value);
    }), Ke(() => {
      St.branches.delete(a.value);
    }), (r, o) => (g(), w(l(W), B({ ref: l(n) }, t), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ml = "focusScope.autoFocusOnMount", gl = "focusScope.autoFocusOnUnmount", Cf = { bubbles: !1, cancelable: !0 };
function ls(e, { select: t = !1 } = {}) {
  const n = Ue();
  for (const a of e)
    if (Pn(a, { select: t }), Ue() !== n)
      return !0;
}
function R1(e) {
  const t = Sd(e), n = $f(t, e), a = $f(t.reverse(), e);
  return [n, a];
}
function Sd(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const r = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || r ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function $f(e, t) {
  for (const n of e)
    if (!F1(n, { upTo: t }))
      return n;
}
function F1(e, { upTo: t }) {
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
function V1(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Pn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Ue();
    e.focus({ preventScroll: !0 }), e !== n && V1(e) && t && e.select();
  }
}
const N1 = B_(() => E([]));
function L1() {
  const e = N1();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = kf(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = kf(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function kf(e, t) {
  const n = [...e], a = n.indexOf(t);
  return a !== -1 && n.splice(a, 1), n;
}
function z1(e) {
  return e.filter((t) => t.tagName !== "A");
}
const $i = /* @__PURE__ */ _({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, { currentRef: r, currentElement: o } = K(), s = E(null), i = L1(), u = Wn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    Ce((c) => {
      if (!tn)
        return;
      const f = o.value;
      if (!n.trapped)
        return;
      function p(b) {
        if (u.paused || !f)
          return;
        const x = b.target;
        f.contains(x) ? s.value = x : Pn(s.value, { select: !0 });
      }
      function h(b) {
        if (u.paused || !f)
          return;
        const x = b.relatedTarget;
        x !== null && (f.contains(x) || Pn(s.value, { select: !0 }));
      }
      function v(b) {
        f.contains(s.value) || Pn(f);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", h);
      const m = new MutationObserver(v);
      f && m.observe(f, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", h), m.disconnect();
      });
    }), Ce(async (c) => {
      const f = o.value;
      if (await re(), !f)
        return;
      i.add(u);
      const p = Ue();
      if (!f.contains(p)) {
        const h = new CustomEvent(ml, Cf);
        f.addEventListener(ml, (v) => a("mountAutoFocus", v)), f.dispatchEvent(h), h.defaultPrevented || (ls(z1(Sd(f)), {
          select: !0
        }), Ue() === p && Pn(f));
      }
      c(() => {
        f.removeEventListener(ml, (m) => a("mountAutoFocus", m));
        const h = new CustomEvent(gl, Cf), v = (m) => {
          a("unmountAutoFocus", m);
        };
        f.addEventListener(gl, v), f.dispatchEvent(h), setTimeout(() => {
          h.defaultPrevented || Pn(p ?? document.body, { select: !0 }), f.removeEventListener(gl, v), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const f = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, p = Ue();
      if (f && p) {
        const h = c.currentTarget, [v, m] = R1(h);
        v && m ? !c.shiftKey && p === m ? (c.preventDefault(), n.loop && Pn(v, { select: !0 })) : c.shiftKey && p === v && (c.preventDefault(), n.loop && Pn(m, { select: !0 })) : p === h && c.preventDefault();
      }
    }
    return (c, f) => (g(), w(l(W), {
      ref_key: "currentRef",
      ref: r,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), q1 = "menu.itemSelect", Jl = ["Enter", " "], H1 = ["ArrowDown", "PageUp", "Home"], Bv = ["ArrowUp", "PageDown", "End"], W1 = [...H1, ...Bv], U1 = {
  ltr: [...Jl, "ArrowRight"],
  rtl: [...Jl, "ArrowLeft"]
}, K1 = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Td(e) {
  return e ? "open" : "closed";
}
function Rs(e) {
  return e === "indeterminate";
}
function Md(e) {
  return Rs(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Zl(e) {
  const t = Ue();
  for (const n of e)
    if (n === t || (n.focus(), Ue() !== t))
      return;
}
function j1(e, t) {
  const { x: n, y: a } = e;
  let r = !1;
  for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
    const i = t[o].x, u = t[o].y, d = t[s].x, c = t[s].y;
    u > a != c > a && n < (d - i) * (a - u) / (c - u) + i && (r = !r);
  }
  return r;
}
function Y1(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return j1(n, t);
}
function no(e) {
  return e.pointerType === "mouse";
}
const G1 = "DialogTitle", X1 = "DialogContent";
function J1({
  titleName: e = G1,
  contentName: t = X1,
  componentLink: n = "dialog.html#title",
  titleId: a,
  descriptionId: r,
  contentElement: o
}) {
  const s = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  de(() => {
    var u;
    document.getElementById(a) || console.warn(s);
    const d = (u = o.value) == null ? void 0 : u.getAttribute("aria-describedby");
    r && d && (document.getElementById(r) || console.warn(i));
  });
}
const Ov = /* @__PURE__ */ _({
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
    const n = e, a = t, r = an(), { forwardRef: o, currentElement: s } = K();
    return r.titleId || (r.titleId = He(void 0, "radix-vue-dialog-title")), r.descriptionId || (r.descriptionId = He(void 0, "radix-vue-dialog-description")), de(() => {
      r.contentElement = s, Ue() !== document.body && (r.triggerElement.value = Ue());
    }), process.env.NODE_ENV !== "production" && J1({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: r.titleId,
      descriptionId: r.descriptionId,
      contentElement: s
    }), (i, u) => (g(), w(l($i), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: y(() => [
        O(l(mr), B({
          id: l(r).contentId,
          ref: l(o),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(r).descriptionId,
          "aria-labelledby": l(r).titleId,
          "data-state": l(Td)(l(r).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => l(r).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => a("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => a("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => a("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => a("pointerDownOutside", d))
        }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Z1 = /* @__PURE__ */ _({
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
    const n = e, a = t, r = an(), o = xa(a), { forwardRef: s, currentElement: i } = K();
    return _o(i), (u, d) => (g(), w(Ov, B({ ...n, ...l(o) }, {
      ref: l(s),
      "trap-focus": l(r).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var f;
        c.defaultPrevented || (c.preventDefault(), (f = l(r).triggerElement.value) == null || f.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const f = c.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0;
        (f.button === 2 || p) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Q1 = /* @__PURE__ */ _({
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
    const n = e, a = xa(t);
    K();
    const r = an(), o = E(!1), s = E(!1);
    return (i, u) => (g(), w(Ov, B({ ...n, ...l(a) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        var c;
        d.defaultPrevented || (o.value || (c = l(r).triggerElement.value) == null || c.focus(), d.preventDefault()), o.value = !1, s.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        var c;
        d.defaultPrevented || (o.value = !0, d.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const f = d.target;
        (c = l(r).triggerElement.value) != null && c.contains(f) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && s.value && d.preventDefault();
      })
    }), {
      default: y(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ad = /* @__PURE__ */ _({
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
    const n = e, a = t, r = an(), o = xa(a), { forwardRef: s } = K();
    return (i, u) => (g(), w(l(gt), {
      present: i.forceMount || l(r).open.value
    }, {
      default: y(() => [
        l(r).modal.value ? (g(), w(Z1, B({
          key: 0,
          ref: l(s)
        }, { ...n, ...l(o), ...i.$attrs }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), w(Q1, B({
          key: 1,
          ref: l(s)
        }, { ...n, ...l(o), ...i.$attrs }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ex = /* @__PURE__ */ _({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = an();
    return yo(!0), K(), (n, a) => (g(), w(l(W), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": l(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Dd = /* @__PURE__ */ _({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = an(), { forwardRef: n } = K();
    return (a, r) => {
      var o;
      return (o = l(t)) != null && o.modal.value ? (g(), w(l(gt), {
        key: 0,
        present: a.forceMount || l(t).open.value
      }, {
        default: y(() => [
          O(ex, B(a.$attrs, {
            ref: l(n),
            as: a.as,
            "as-child": a.asChild
          }), {
            default: y(() => [
              C(a.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : se("", !0);
    };
  }
}), wo = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    K();
    const n = an();
    return (a, r) => (g(), w(l(W), B(t, {
      type: a.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (o) => l(n).onOpenChange(!1))
    }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Pv = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = an();
    return K(), (a, r) => (g(), w(l(W), B(t, {
      id: l(n).titleId
    }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Iv = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    K();
    const n = an();
    return (a, r) => (g(), w(l(W), B(t, {
      id: l(n).descriptionId
    }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function tx(e) {
  function t(a) {
    return Array.isArray(e.date.value) ? e.date.value.some((r) => Ge(r, a)) : e.date.value ? Ge(e.date.value, a) : !1;
  }
  const n = T(
    () => {
      var a, r, o, s;
      if (Array.isArray(e.date.value)) {
        if (!e.date.value.length)
          return !1;
        for (const i of e.date.value)
          if ((a = e.isDateDisabled) != null && a.call(e, i) || (r = e.isDateUnavailable) != null && r.call(e, i))
            return !0;
      } else {
        if (!e.date.value)
          return !1;
        if ((o = e.isDateDisabled) != null && o.call(e, e.date.value) || (s = e.isDateUnavailable) != null && s.call(e, e.date.value))
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
function nx(e, t) {
  const n = t(e), a = n.compare(e), r = {};
  return a >= 7 && (r.day = 1), a >= bn(e) && (r.month = 1), n.set({ ...r });
}
function ax(e, t) {
  const n = t(e), a = e.compare(n), r = {};
  return a >= 7 && (r.day = 35), a >= bn(e) && (r.month = 13), n.set({ ...r });
}
function rx(e, t) {
  return t(e);
}
function ox(e, t) {
  return t(e);
}
function Rv(e) {
  const t = Cv(e.locale.value), n = T(() => {
    const m = {
      calendar: e.placeholder.value.calendar.identifier
    };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (m.era = "short"), m;
  }), a = E(Zn({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), r = T(() => a.value.map((m) => m.value));
  function o(m) {
    return !r.value.some((b) => Hc(m, b));
  }
  const s = (m = "month", b) => {
    if (!e.maxValue.value || !a.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const x = a.value[a.value.length - 1].value;
    if (b || e.nextPage.value) {
      const $ = nx(x, b || e.nextPage.value);
      return Nr($, e.maxValue.value);
    }
    if (m === "year") {
      const $ = x.add({ years: 1 }).set({ day: 1, month: 1 });
      return Nr($, e.maxValue.value);
    }
    const k = x.add({ months: 1 }).set({ day: 1 });
    return Nr(k, e.maxValue.value);
  }, i = (m = "month", b) => {
    if (!e.minValue.value || !a.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const x = a.value[0].value;
    if (b || e.prevPage.value) {
      const $ = ax(x, b || e.prevPage.value);
      return Nn($, e.minValue.value);
    }
    if (m === "year") {
      const $ = x.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return Nn($, e.minValue.value);
    }
    const k = x.subtract({ months: 1 }).set({ day: 35 });
    return Nn(k, e.minValue.value);
  };
  function u(m) {
    var b;
    return !!((b = e.isDateDisabled) != null && b.call(e, m) || e.disabled.value || e.maxValue.value && Nr(m, e.maxValue.value) || e.minValue.value && Nn(m, e.minValue.value));
  }
  const d = (m) => {
    var b;
    return !!((b = e.isDateUnavailable) != null && b.call(e, m));
  }, c = T(() => a.value.length ? a.value[0].rows[0].map((m) => t.dayOfWeek(xt(m), e.weekdayFormat.value)) : []), f = (m = "month", b) => {
    const x = a.value[0].value;
    if (b || e.nextPage.value) {
      const M = rx(x, b || e.nextPage.value), S = Zn({
        dateObj: M,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      a.value = S;
      const D = {};
      if (!b) {
        const A = S[0].value.compare(x);
        A >= bn(x) && (D.day = 1), A >= 365 && (D.month = 1);
      }
      e.placeholder.value = S[0].value.set({ ...D });
      return;
    }
    const k = m === "month" ? x.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : x.add({ years: 1 }), $ = Zn({
      dateObj: k,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    a.value = $, e.placeholder.value = $[0].value.set({ day: 1 });
  }, p = (m = "month", b) => {
    const x = a.value[0].value;
    if (b || e.prevPage.value) {
      const M = ox(x, b || e.prevPage.value), S = Zn({
        dateObj: M,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      a.value = S;
      const D = {};
      if (!b) {
        const A = x.compare(S[0].value);
        A >= bn(x) && (D.day = 1), A >= 365 && (D.month = 1);
      }
      e.placeholder.value = S[0].value.set({ ...D });
      return;
    }
    const k = m === "month" ? x.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : x.subtract({ years: 1 }), $ = Zn({
      dateObj: k,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    a.value = $, e.placeholder.value = $[0].value.set({ day: 1 });
  };
  ee(e.placeholder, (m) => {
    r.value.some((b) => Hc(b, m)) || (a.value = Zn({
      dateObj: m,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), ee([e.locale, e.weekStartsOn, e.fixedWeeks, e.numberOfMonths], () => {
    a.value = Zn({
      dateObj: e.placeholder.value,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
  });
  const h = T(() => {
    if (!a.value.length)
      return "";
    if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value), a.value.length === 1) {
      const S = a.value[0].value;
      return `${t.fullMonthAndYear(xt(S), n.value)}`;
    }
    const m = xt(a.value[0].value), b = xt(a.value[a.value.length - 1].value), x = t.fullMonth(m, n.value), k = t.fullMonth(b, n.value), $ = t.fullYear(m, n.value), M = t.fullYear(b, n.value);
    return $ === M ? `${x} - ${k} ${M}` : `${x} ${$} - ${k} ${M}`;
  }), v = T(() => `${e.calendarLabel.value ?? "Event Date"}, ${h.value}`);
  return {
    isDateDisabled: u,
    isDateUnavailable: d,
    isNextButtonDisabled: s,
    isPrevButtonDisabled: i,
    grid: a,
    weekdays: c,
    visibleView: r,
    isOutsideVisibleView: o,
    formatter: t,
    nextPage: f,
    prevPage: p,
    headingValue: h,
    fullCalendarLabel: v
  };
}
const sx = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, ix = {
  role: "heading",
  "aria-level": "2"
}, [gr, lx] = ge("CalendarRoot"), Fv = /* @__PURE__ */ _({
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
      locale: r,
      disabled: o,
      readonly: s,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: f,
      multiple: p,
      minValue: h,
      maxValue: v,
      numberOfMonths: m,
      preventDeselect: b,
      isDateDisabled: x,
      isDateUnavailable: k,
      calendarLabel: $,
      defaultValue: M,
      nextPage: S,
      prevPage: D,
      dir: A
    } = me(n), { primitiveElement: N, currentElement: F } = vr(), P = nn(A), I = De(n, "modelValue", a, {
      defaultValue: M.value,
      passive: n.modelValue === void 0
    }), R = hv({
      defaultPlaceholder: n.placeholder,
      defaultValue: I.value,
      locale: n.locale
    }), j = De(n, "placeholder", a, {
      defaultValue: n.defaultPlaceholder ?? R.copy(),
      passive: n.placeholder === void 0
    });
    function z(G) {
      j.value = G.copy();
    }
    const {
      fullCalendarLabel: Y,
      headingValue: te,
      isDateDisabled: ye,
      isDateUnavailable: pe,
      isNextButtonDisabled: q,
      isPrevButtonDisabled: ae,
      weekdays: le,
      isOutsideVisibleView: Le,
      nextPage: Ye,
      prevPage: Qe,
      formatter: et,
      grid: Nt
    } = Rv({
      locale: r,
      placeholder: j,
      weekStartsOn: d,
      fixedWeeks: f,
      numberOfMonths: m,
      minValue: h,
      maxValue: v,
      disabled: o,
      weekdayFormat: c,
      pagedNavigation: u,
      isDateDisabled: x.value,
      isDateUnavailable: k.value,
      calendarLabel: $,
      nextPage: S,
      prevPage: D
    }), {
      isInvalid: Q,
      isDateSelected: ie
    } = tx({
      date: I,
      isDateDisabled: ye,
      isDateUnavailable: pe
    });
    ee(I, (G) => {
      if (Array.isArray(G) && G.length) {
        const ne = G[G.length - 1];
        ne && !qt(j.value, ne) && z(ne);
      } else !Array.isArray(G) && G && !qt(j.value, G) && z(G);
    });
    function H(G) {
      if (p.value) {
        if (!I.value)
          I.value = [G.copy()];
        else if (Array.isArray(I.value)) {
          if (I.value.findIndex((ne) => Ge(ne, G)) === -1)
            I.value = [...I.value, G];
          else if (!b.value) {
            const ne = I.value.filter((U) => !Ge(U, G));
            if (!ne.length) {
              j.value = G.copy(), I.value = void 0;
              return;
            }
            I.value = ne.map((U) => U.copy());
          }
        }
      } else {
        if (!I.value) {
          I.value = G.copy();
          return;
        }
        !b.value && qt(I.value, G) ? (j.value = G.copy(), I.value = void 0) : I.value = G.copy();
      }
    }
    return de(() => {
      i.value && vv(F.value);
    }), lx({
      isDateUnavailable: pe,
      dir: P,
      isDateDisabled: ye,
      locale: r,
      formatter: et,
      modelValue: I,
      placeholder: j,
      disabled: o,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: f,
      multiple: p,
      numberOfMonths: m,
      readonly: s,
      preventDeselect: b,
      fullCalendarLabel: Y,
      headingValue: te,
      isInvalid: Q,
      isDateSelected: ie,
      isNextButtonDisabled: q,
      isPrevButtonDisabled: ae,
      isOutsideVisibleView: Le,
      nextPage: Ye,
      prevPage: Qe,
      parentElement: F,
      onPlaceholderChange: z,
      onDateChange: H
    }), (G, ne) => (g(), w(l(W), {
      ref_key: "primitiveElement",
      ref: N,
      as: G.as,
      "as-child": G.asChild,
      role: "application",
      "aria-label": l(Y),
      "data-readonly": l(s) ? "" : void 0,
      "data-disabled": l(o) ? "" : void 0,
      "data-invalid": l(Q) ? "" : void 0,
      dir: l(P)
    }, {
      default: y(() => [
        C(G.$slots, "default", {
          date: l(j),
          grid: l(Nt),
          weekDays: l(le),
          weekStartsOn: l(d),
          locale: l(r),
          fixedWeeks: l(f)
        }),
        _e("div", sx, [
          _e("div", ix, ce(l(Y)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), ux = /* @__PURE__ */ _({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dx = /* @__PURE__ */ _({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = gr();
    return (a, r) => (g(), w(l(W), B(t, {
      "data-disabled": l(n).disabled.value ? "" : void 0
    }), {
      default: y(() => [
        C(a.$slots, "default", {
          headingValue: l(n).headingValue.value
        }, () => [
          oe(ce(l(n).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), cx = /* @__PURE__ */ _({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, n = gr(), a = T(() => n.disabled.value ? !0 : void 0), r = T(() => n.readonly.value ? !0 : void 0);
    return (o, s) => (g(), w(l(W), B(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": r.value,
      "aria-disabled": a.value,
      "data-readonly": r.value && "",
      "data-disabled": a.value && ""
    }), {
      default: y(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), fx = /* @__PURE__ */ _({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = gr();
    return (n, a) => {
      var r, o;
      return g(), w(l(W), {
        as: n.as,
        "as-child": n.asChild,
        role: "gridcell",
        "aria-selected": l(t).isDateSelected(n.date) ? !0 : void 0,
        "aria-disabled": l(t).isDateDisabled(n.date) || ((o = (r = l(t)).isDateUnavailable) == null ? void 0 : o.call(r, n.date)),
        "data-disabled": l(t).isDateDisabled(n.date) ? "" : void 0
      }, {
        default: y(() => [
          C(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), px = /* @__PURE__ */ _({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hx = /* @__PURE__ */ _({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = T(() => a.disabled.value || a.isNextButtonDisabled(t.step, t.nextPage)), a = gr();
    return (r, o) => (g(), w(l(W), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: r.as === "button" ? "button" : void 0,
      "aria-disabled": n.value || void 0,
      "data-disabled": n.value || void 0,
      disabled: n.value,
      onClick: o[0] || (o[0] = (s) => l(a).nextPage(t.step, t.nextPage))
    }, {
      default: y(() => [
        C(r.$slots, "default", {}, () => [
          oe("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), vx = /* @__PURE__ */ _({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = T(() => a.disabled.value || a.isPrevButtonDisabled(t.step, t.prevPage)), a = gr();
    return (r, o) => (g(), w(l(W), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: r.as === "button" ? "button" : void 0,
      "aria-disabled": n.value || void 0,
      "data-disabled": n.value || void 0,
      disabled: n.value,
      onClick: o[0] || (o[0] = (s) => l(a).prevPage(t.step, t.prevPage))
    }, {
      default: y(() => [
        C(r.$slots, "default", {}, () => [
          oe("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), mx = /* @__PURE__ */ _({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), B(t, { "aria-hidden": "true" }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gx = /* @__PURE__ */ _({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yx = /* @__PURE__ */ _({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bx = /* @__PURE__ */ _({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = Sv(), a = gr(), { primitiveElement: r, currentElement: o } = vr(), s = T(() => t.day.day.toLocaleString(a.locale.value)), i = T(() => a.formatter.custom(xt(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = T(() => a.isDateDisabled(t.day)), d = T(
      () => {
        var $;
        return ($ = a.isDateUnavailable) == null ? void 0 : $.call(a, t.day);
      }
    ), c = T(() => Mh(t.day, yn())), f = T(() => !ed(t.day, t.month)), p = T(
      () => a.isOutsideVisibleView(t.day)
    ), h = T(() => !a.disabled.value && Ge(t.day, a.placeholder.value)), v = T(() => a.isDateSelected(t.day)), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])";
    function b($) {
      var M;
      a.readonly.value || a.isDateDisabled($) || (M = a.isDateUnavailable) != null && M.call(a, $) || a.onDateChange($);
    }
    function x() {
      b(t.day);
    }
    function k($) {
      $.preventDefault(), $.stopPropagation();
      const M = a.parentElement.value, S = M ? Array.from(M.querySelectorAll(m)) : [];
      let D = S.indexOf(o.value);
      const A = 7, N = a.dir.value === "rtl" ? -1 : 1;
      switch ($.code) {
        case n.ARROW_RIGHT:
          D += N;
          break;
        case n.ARROW_LEFT:
          D -= N;
          break;
        case n.ARROW_UP:
          D -= A;
          break;
        case n.ARROW_DOWN:
          D += A;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          b(t.day);
          return;
        default:
          return;
      }
      if (D >= 0 && D < S.length) {
        S[D].focus();
        return;
      }
      if (D < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), re(() => {
          const F = M ? Array.from(M.querySelectorAll(m)) : [];
          if (!a.pagedNavigation.value) {
            const P = bn(a.placeholder.value);
            F[P - Math.abs(D)].focus();
            return;
          }
          F[F.length - Math.abs(D)].focus();
        });
        return;
      }
      if (D >= S.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), re(() => {
          const F = M ? Array.from(M.querySelectorAll(m)) : [];
          if (!a.pagedNavigation.value) {
            const P = bn(a.placeholder.value.add({ months: a.numberOfMonths.value - 1 }));
            F[F.length - P + D - S.length].focus();
            return;
          }
          F[D - S.length].focus();
        });
      }
    }
    return ($, M) => (g(), w(l(W), B({
      ref_key: "primitiveElement",
      ref: r
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": u.value || d.value ? !0 : void 0,
      "data-selected": v.value ? !0 : void 0,
      "data-value": $.day.toString(),
      "data-disabled": u.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": c.value ? "" : void 0,
      "data-outside-view": f.value ? "" : void 0,
      "data-outside-visible-view": p.value ? "" : void 0,
      "data-focused": h.value ? "" : void 0,
      tabindex: h.value ? 0 : f.value || u.value ? void 0 : -1,
      onClick: x,
      onKeydown: [
        Xe(k, ["up", "down", "left", "right", "space", "enter"]),
        M[0] || (M[0] = Xe(Ie(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: y(() => [
        C($.$slots, "default", { dayValue: s.value }, () => [
          oe(ce(s.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Fs(e) {
  return e === "indeterminate";
}
function Vv(e) {
  return Fs(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const _x = ["value", "checked", "name", "disabled", "required"], [xx, wx] = ge("CheckboxRoot"), Cx = /* @__PURE__ */ _({
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
    const n = e, a = t, { disabled: r } = me(n), o = De(n, "checked", a, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    }), { forwardRef: s, currentElement: i } = K(), u = bo(i), d = T(() => {
      var c;
      return n.id && i.value ? (c = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return wx({
      disabled: r,
      state: o
    }), (c, f) => (g(), L(ue, null, [
      O(l(W), B(c.$attrs, {
        id: c.id,
        ref: l(s),
        role: "checkbox",
        "as-child": n.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": l(Fs)(l(o)) ? "mixed" : l(o),
        "aria-required": n.required,
        "aria-label": c.$attrs["aria-label"] || d.value,
        "data-state": l(Vv)(l(o)),
        "data-disabled": l(r) ? "" : void 0,
        disabled: l(r),
        onKeydown: Xe(Ie(() => {
        }, ["prevent"]), ["enter"]),
        onClick: f[0] || (f[0] = (p) => o.value = l(Fs)(l(o)) ? !0 : !l(o))
      }), {
        default: y(() => [
          C(c.$slots, "default", { checked: l(o) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      l(u) ? (g(), L("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "true",
        value: c.value,
        checked: !!l(o),
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
      }, null, 8, _x)) : se("", !0)
    ], 64));
  }
}), $x = /* @__PURE__ */ _({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = K(), n = xx();
    return (a, r) => (g(), w(l(gt), {
      present: a.forceMount || l(Fs)(l(n).state.value) || l(n).state.value === !0
    }, {
      default: y(() => [
        O(l(W), B({
          ref: l(t),
          "data-state": l(Vv)(l(n).state.value),
          "data-disabled": l(n).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": a.asChild,
          as: a.as
        }, a.$attrs), {
          default: y(() => [
            C(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Nv, kx] = ge("PopperRoot"), yr = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return kx({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, a) => C(n.$slots, "default");
  }
}), ki = /* @__PURE__ */ _({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = K(), r = Nv();
    return Ce(() => {
      r.onAnchorChange(t.element ?? a.value);
    }), (o, s) => (g(), w(l(W), {
      ref: l(n),
      as: o.as,
      "as-child": o.asChild
    }, {
      default: y(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Sx(e) {
  return e !== null;
}
function Tx(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, a, r;
      const { placement: o, rects: s, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, c = u ? 0 : e.arrowHeight, [f, p] = Ql(o), h = { start: "0%", center: "50%", end: "100%" }[p], v = (((a = i.arrow) == null ? void 0 : a.x) ?? 0) + d / 2, m = (((r = i.arrow) == null ? void 0 : r.y) ?? 0) + c / 2;
      let b = "", x = "";
      return f === "bottom" ? (b = u ? h : `${v}px`, x = `${-c}px`) : f === "top" ? (b = u ? h : `${v}px`, x = `${s.floating.height + c}px`) : f === "right" ? (b = `${-c}px`, x = u ? h : `${m}px`) : f === "left" && (b = `${s.floating.width + c}px`, x = u ? h : `${m}px`), { data: { x: b, y: x } };
    }
  };
}
function Ql(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Lv = {
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
}, [vF, Mx] = ge("PopperContent"), nr = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Xu({
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
    ...Lv
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = Nv(), { forwardRef: o, currentElement: s } = K(), i = E(), u = E(), { width: d, height: c } = kv(u), f = T(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), p = T(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), h = T(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = T(() => ({
      padding: p.value,
      boundary: h.value.filter(Sx),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: h.value.length > 0
    })), m = D_(() => [
      sv({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Ps({
        ...v.value
      }),
      n.avoidCollisions && iv({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? dv() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Ps({
        ...v.value
      }),
      lv({
        ...v.value,
        apply: ({ elements: P, rects: I, availableWidth: R, availableHeight: j }) => {
          const { width: z, height: Y } = I.reference, te = P.floating.style;
          te.setProperty(
            "--radix-popper-available-width",
            `${R}px`
          ), te.setProperty(
            "--radix-popper-available-height",
            `${j}px`
          ), te.setProperty(
            "--radix-popper-anchor-width",
            `${z}px`
          ), te.setProperty(
            "--radix-popper-anchor-height",
            `${Y}px`
          );
        }
      }),
      u.value && cv({ element: u.value, padding: n.arrowPadding }),
      Tx({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && uv({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: b, placement: x, isPositioned: k, middlewareData: $ } = pv(
      r.anchor,
      i,
      {
        strategy: "fixed",
        placement: f,
        whileElementsMounted: (...P) => ov(...P, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), M = T(
      () => Ql(x.value)[0]
    ), S = T(
      () => Ql(x.value)[1]
    );
    Ju(() => {
      k.value && a("placed");
    });
    const D = T(
      () => {
        var P;
        return ((P = $.value.arrow) == null ? void 0 : P.centerOffset) !== 0;
      }
    ), A = E("");
    Ce(() => {
      s.value && (A.value = window.getComputedStyle(s.value).zIndex);
    });
    const N = T(() => {
      var P;
      return ((P = $.value.arrow) == null ? void 0 : P.x) ?? 0;
    }), F = T(() => {
      var P;
      return ((P = $.value.arrow) == null ? void 0 : P.y) ?? 0;
    });
    return Mx({
      placedSide: M,
      onArrowChange: (P) => u.value = P,
      arrowX: N,
      arrowY: F,
      shouldHideArrow: D
    }), (P, I) => {
      var R, j, z;
      return g(), L("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Qt({
          ...l(b),
          transform: l(k) ? l(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: A.value,
          "--radix-popper-transform-origin": [
            (R = l($).transformOrigin) == null ? void 0 : R.x,
            (j = l($).transformOrigin) == null ? void 0 : j.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((z = l($).hide) == null ? void 0 : z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        O(l(W), B({ ref: l(o) }, P.$attrs, {
          "as-child": n.asChild,
          as: P.as,
          "data-side": M.value,
          "data-align": S.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l(k) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            C(P.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Co = /* @__PURE__ */ _({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return K(), (t, n) => (g(), w(l(W), {
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
        C(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Ax = /* @__PURE__ */ _({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = T(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((a, r) => typeof a == "object" ? Object.entries(a).map(([o, s]) => ({ name: `[${r}][${t.name}][${o}]`, value: s })) : { name: `[${t.name}][${r}]`, value: a }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([a, r]) => ({ name: `[${t.name}][${a}]`, value: r })) : []);
    return (a, r) => (g(!0), L(ue, null, Ae(n.value, (o) => (g(), w(Co, {
      key: o.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: o.name,
      value: o.value,
      required: a.required,
      disabled: a.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), Dx = "data-radix-vue-collection-item", [Ed, Ex] = ge("CollectionProvider");
function Bd(e = Dx) {
  const t = E(/* @__PURE__ */ new Map()), n = E(), a = Ex({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: r } = Pd(a), o = T(() => Array.from(a.itemMap.value.values())), s = T(() => a.itemMap.value.size);
  return { getItems: r, reactiveItems: o, itemMapSize: s };
}
const Od = _({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = Ed(), { primitiveElement: a, currentElement: r } = vr();
    return ee(r, () => {
      n.collectionRef.value = r.value;
    }), () => rt(Cd, { ref: a }, t);
  }
}), Si = _({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const a = Ed(), { primitiveElement: r, currentElement: o } = vr();
    return Ce((s) => {
      if (o.value) {
        const i = kh(o.value);
        a.itemMap.value.set(i, { ref: o.value, value: e.value }), s(() => a.itemMap.value.delete(i));
      }
    }), () => rt(Cd, { ...n, [a.attrName]: "", ref: r }, t);
  }
});
function Pd(e) {
  const t = e ?? Ed();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const a = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (r, o) => a.indexOf(r.ref) - a.indexOf(o.ref)
    );
  } };
}
const [br, Bx] = ge("ComboboxRoot"), Ox = /* @__PURE__ */ _({
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
    const n = e, a = t, { multiple: r, disabled: o, dir: s } = me(n), i = nn(s), u = De(n, "searchTerm", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = De(n, "modelValue", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? r.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), c = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), f = De(n, "selectedValue", a, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function p(q) {
      var ae, le;
      c.value = q, await re(), q ? (d.value && (Array.isArray(d.value) && r.value ? f.value = (ae = $().find((Le) => {
        var Ye, Qe;
        return ((Qe = (Ye = Le.ref) == null ? void 0 : Ye.dataset) == null ? void 0 : Qe.state) === "checked";
      })) == null ? void 0 : ae.value : f.value = d.value), await re(), (le = m.value) == null || le.focus(), j()) : (v.value = !1, n.resetSearchTermOnBlur && N("blur"));
    }
    function h(q) {
      if (Array.isArray(d.value) && r.value) {
        const ae = d.value.findIndex((Le) => na(Le, q)), le = [...d.value];
        ae === -1 ? le.push(q) : le.splice(ae, 1), d.value = le;
      } else
        d.value = q, p(!1);
    }
    const v = E(!1), m = E(), b = E(), { forwardRef: x, currentElement: k } = K(), { getItems: $, reactiveItems: M, itemMapSize: S } = Bd("data-radix-vue-combobox-item"), D = E([]);
    ee(() => S.value, () => {
      D.value = $().map((q) => q.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const A = T(() => {
      if (v.value) {
        if (n.filterFunction)
          return n.filterFunction(D.value, u.value);
        const q = D.value.filter((ae) => typeof ae == "string");
        if (q.length)
          return q.filter((ae) => {
            var le;
            return ae.toLowerCase().includes((le = u.value) == null ? void 0 : le.toLowerCase());
          });
      }
      return D.value;
    });
    function N(q) {
      const ae = q === "blur" || q === "select" && n.resetSearchTermOnSelect;
      !r.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : ae && (u.value = "") : ae && (u.value = "");
    }
    const F = T(() => A.value.findIndex((q) => na(q, f.value))), P = T(() => {
      var q;
      return (q = M.value.find((ae) => na(ae.value, f.value))) == null ? void 0 : q.ref;
    }), I = T(() => JSON.stringify(d.value));
    ee(I, async () => {
      await re(), await re(), N("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), ee(() => [A.value.length, u.value.length], async ([q, ae], [le, Le]) => {
      await re(), await re(), q && (Le > ae || F.value === -1) && (f.value = A.value[0]);
    });
    const R = bo(k);
    function j() {
      var q;
      P.value instanceof Element && ((q = P.value) == null || q.scrollIntoView({ block: "nearest" }));
    }
    function z() {
      P.value instanceof Element && P.value.focus && P.value.focus();
    }
    const Y = E(!1);
    function te() {
      Y.value = !0;
    }
    function ye() {
      requestAnimationFrame(() => {
        Y.value = !1;
      });
    }
    async function pe(q) {
      var ae;
      A.value.length && f.value && P.value instanceof Element && (q.preventDefault(), q.stopPropagation(), Y.value || (ae = P.value) == null || ae.click());
    }
    return Bx({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: h,
      isUserInputted: v,
      multiple: r,
      disabled: o,
      open: c,
      onOpenChange: p,
      filteredOptions: A,
      contentId: "",
      inputElement: m,
      selectedElement: P,
      onInputElementChange: (q) => m.value = q,
      onInputNavigation: async (q) => {
        const ae = F.value;
        ae === 0 && q === "up" || ae === A.value.length - 1 && q === "down" || (ae === -1 && A.value.length || q === "home" ? f.value = A.value[0] : q === "end" ? f.value = A.value[A.value.length - 1] : f.value = A.value[q === "up" ? ae - 1 : ae + 1], await re(), j(), z(), re(() => {
          var le;
          return (le = m.value) == null ? void 0 : le.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: pe,
      onCompositionEnd: ye,
      onCompositionStart: te,
      selectedValue: f,
      onSelectedValueChange: (q) => f.value = q,
      parentElement: k,
      contentElement: b,
      onContentElementChange: (q) => b.value = q
    }), (q, ae) => (g(), w(l(yr), null, {
      default: y(() => [
        O(l(W), B({
          ref: l(x),
          style: {
            pointerEvents: l(c) ? "auto" : void 0
          },
          as: q.as,
          "as-child": q.asChild,
          dir: l(i)
        }, q.$attrs), {
          default: y(() => [
            C(q.$slots, "default", {
              open: l(c),
              modelValue: l(d)
            }),
            l(R) && n.name ? (g(), w(l(Ax), {
              key: 0,
              name: n.name,
              value: l(d)
            }, null, 8, ["name", "value"])) : se("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Px = /* @__PURE__ */ _({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = br(), { forwardRef: a, currentElement: r } = K();
    de(() => {
      const c = r.value.nodeName === "INPUT" ? r.value : r.value.querySelector("input");
      c && (n.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const o = T(() => t.disabled || n.disabled.value || !1), s = E();
    wh(() => {
      var c;
      return s.value = (c = n.selectedElement.value) == null ? void 0 : c.id;
    });
    function i(c) {
      n.open.value ? n.onInputNavigation(c.key === "ArrowUp" ? "up" : "down") : n.onOpenChange(!0);
    }
    function u(c) {
      n.open.value && n.onInputNavigation(c.key === "Home" ? "home" : "end");
    }
    function d(c) {
      var f;
      n.searchTerm.value = (f = c.target) == null ? void 0 : f.value, n.open.value || n.onOpenChange(!0), n.isUserInputted.value = !0;
    }
    return (c, f) => (g(), w(l(W), {
      ref: l(a),
      as: c.as,
      "as-child": c.asChild,
      type: c.type,
      disabled: o.value,
      value: l(n).searchTerm.value,
      "aria-expanded": l(n).open.value,
      "aria-controls": l(n).contentId,
      "aria-disabled": o.value ?? void 0,
      "aria-activedescendant": s.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: d,
      onKeydown: [
        Xe(Ie(i, ["prevent"]), ["down", "up"]),
        Xe(l(n).onInputEnter, ["enter"]),
        Xe(Ie(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: l(n).onCompositionStart,
      onCompositionend: l(n).onCompositionEnd
    }, {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [zv, Ix] = ge("ComboboxGroup"), Rx = /* @__PURE__ */ _({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: a } = K(), r = He(void 0, "radix-vue-combobox-group"), o = br(), s = E(!1);
    function i() {
      if (!a.value)
        return;
      const u = a.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      s.value = !!u.length;
    }
    return H_(a, () => {
      re(() => {
        i();
      });
    }, { childList: !0 }), ee(() => o.searchTerm.value, () => {
      re(() => {
        i();
      });
    }, { immediate: !0 }), Ix({
      id: r
    }), (u, d) => ya((g(), w(l(W), B(t, {
      ref_key: "currentRef",
      ref: n,
      role: "group",
      "aria-labelledby": l(r)
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [hi, s.value]
    ]);
  }
}), Fx = /* @__PURE__ */ _({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    K();
    const n = zv({ id: "" });
    return (a, r) => (g(), w(l(W), B(t, {
      id: l(n).id
    }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [mF, Vx] = ge("ComboboxContent"), Nx = /* @__PURE__ */ _({
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
    const n = e, a = t, { position: r } = me(n), o = br();
    yo(n.bodyLock);
    const { forwardRef: s, currentElement: i } = K();
    _o(o.parentElement);
    const u = T(() => n.position === "popper" ? n : {}), d = be(u.value);
    function c(p) {
      o.onSelectedValueChange("");
    }
    de(() => {
      o.onContentElementChange(i.value);
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
    return Vx({ position: r }), (p, h) => (g(), w(l(Od), null, {
      default: y(() => [
        p.dismissable ? (g(), w(l(mr), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": p.disableOutsidePointerEvents,
          onDismiss: h[0] || (h[0] = (v) => l(o).onOpenChange(!1)),
          onFocusOutside: h[1] || (h[1] = (v) => {
            var m;
            (m = l(o).parentElement.value) != null && m.contains(v.target) && v.preventDefault(), a("focusOutside", v);
          }),
          onInteractOutside: h[2] || (h[2] = (v) => a("interactOutside", v)),
          onEscapeKeyDown: h[3] || (h[3] = (v) => a("escapeKeyDown", v)),
          onPointerDownOutside: h[4] || (h[4] = (v) => {
            var m;
            (m = l(o).parentElement.value) != null && m.contains(v.target) && v.preventDefault(), a("pointerDownOutside", v);
          })
        }, {
          default: y(() => [
            (g(), w(ut(l(r) === "popper" ? l(nr) : l(W)), B({ ...p.$attrs, ...l(d) }, {
              id: l(o).contentId,
              ref: l(s),
              role: "listbox",
              "data-state": l(o).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...l(r) === "popper" ? f : {}
              },
              onPointerleave: c
            }), {
              default: y(() => [
                C(p.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (g(), w(ut(l(r) === "popper" ? l(nr) : l(W)), B({ key: 1 }, { ...p.$attrs, ...u.value }, {
          id: l(o).contentId,
          ref: l(s),
          role: "listbox",
          "data-state": l(o).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...l(r) === "popper" ? f : {}
          },
          onPointerleave: c
        }), {
          default: y(() => [
            C(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Lx = /* @__PURE__ */ _({
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
    const n = he(e, t), { forwardRef: a } = K(), r = br();
    return r.contentId || (r.contentId = He(void 0, "radix-vue-combobox-content")), (o, s) => (g(), w(l(gt), {
      present: o.forceMount || l(r).open.value
    }, {
      default: y(() => [
        O(Nx, B({ ...l(n), ...o.$attrs }, { ref: l(a) }), {
          default: y(() => [
            C(o.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), zx = /* @__PURE__ */ _({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    K();
    const n = br(), a = T(() => n.filteredOptions.value.length === 0);
    return (r, o) => a.value ? (g(), w(l(W), J(B({ key: 0 }, t)), {
      default: y(() => [
        C(r.$slots, "default", {}, () => [
          oe("No options")
        ])
      ]),
      _: 3
    }, 16)) : se("", !0);
  }
});
function qx(e) {
  const t = wi({
    nonce: E()
  });
  return T(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [gF, Hx] = ge("ComboboxItem"), Wx = "combobox.select", Ux = /* @__PURE__ */ _({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { disabled: r } = me(n), o = br();
    zv({ id: "", options: E([]) });
    const { forwardRef: s } = K(), i = T(
      () => {
        var m, b;
        return o.multiple.value && Array.isArray(o.modelValue.value) ? (m = o.modelValue.value) == null ? void 0 : m.some((x) => na(x, n.value)) : na((b = o.modelValue) == null ? void 0 : b.value, n.value);
      }
    ), u = T(() => na(o.selectedValue.value, n.value)), d = He(void 0, "radix-vue-combobox-item"), c = He(void 0, "radix-vue-combobox-option"), f = T(() => o.isUserInputted.value ? o.searchTerm.value === "" || !!o.filteredOptions.value.find((m) => na(m, n.value)) : !0);
    async function p(m) {
      a("select", m), !(m != null && m.defaultPrevented) && !r.value && m && o.onValueChange(n.value);
    }
    function h(m) {
      if (!m)
        return;
      const b = { originalEvent: m, value: n.value };
      gd(Wx, p, b);
    }
    async function v(m) {
      await re(), !m.defaultPrevented && o.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Hx({
      isSelected: i
    }), (m, b) => (g(), w(l(Si), { value: m.value }, {
      default: y(() => [
        ya(O(l(W), {
          id: l(c),
          ref: l(s),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": l(d),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": l(r) || void 0,
          "data-disabled": l(r) ? "" : void 0,
          as: m.as,
          "as-child": m.asChild,
          "data-hidden": f.value ? void 0 : !0,
          onClick: h,
          onPointermove: v
        }, {
          default: y(() => [
            C(m.$slots, "default", {}, () => [
              oe(ce(m.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [hi, f.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Kx = /* @__PURE__ */ _({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return K(), (n, a) => (g(), w(l(W), B(t, { "aria-hidden": "true" }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qv = /* @__PURE__ */ _({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(ki), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function jx() {
  const e = E(!1);
  return de(() => {
    tr("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), tr(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const Yx = mv(jx), [wa, Hv] = ge(["MenuRoot", "MenuSub"], "MenuContext"), [$o, Gx] = ge("MenuRoot"), Xx = /* @__PURE__ */ _({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { modal: r, dir: o } = me(n), s = nn(o), i = De(n, "open", a), u = E(), d = Yx();
    return Hv({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), Gx({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: s,
      modal: r
    }), (c, f) => (g(), w(l(yr), null, {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Jx = "rovingFocusGroup.onEntryFocus", Zx = { bubbles: !1, cancelable: !0 }, Qx = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ew(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function tw(e, t, n) {
  const a = ew(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(a)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(a)))
    return Qx[a];
}
function Wv(e, t = !1) {
  const n = Ue();
  for (const a of e)
    if (a === n || (a.focus({ preventScroll: t }), Ue() !== n))
      return;
}
function nw(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
const [aw, rw] = ge("RovingFocusGroup"), Uv = /* @__PURE__ */ _({
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
    const a = e, r = n, { loop: o, orientation: s, dir: i } = me(a), u = nn(i), d = De(a, "currentTabStopId", r, {
      defaultValue: a.defaultCurrentTabStopId,
      passive: a.currentTabStopId === void 0
    }), c = E(!1), f = E(!1), p = E(0), { getItems: h } = Bd();
    function v(b) {
      const x = !f.value;
      if (b.currentTarget && b.target === b.currentTarget && x && !c.value) {
        const k = new CustomEvent(Jx, Zx);
        if (b.currentTarget.dispatchEvent(k), r("entryFocus", k), !k.defaultPrevented) {
          const $ = h().map((A) => A.ref).filter((A) => A.dataset.disabled !== ""), M = $.find((A) => A.getAttribute("data-active") === "true"), S = $.find(
            (A) => A.id === d.value
          ), D = [M, S, ...$].filter(
            Boolean
          );
          Wv(D, a.preventScrollOnEntryFocus);
        }
      }
      f.value = !1;
    }
    function m() {
      setTimeout(() => {
        f.value = !1;
      }, 1);
    }
    return t({
      getItems: h
    }), rw({
      loop: o,
      dir: u,
      orientation: s,
      currentTabStopId: d,
      onItemFocus: (b) => {
        d.value = b;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        p.value++;
      },
      onFocusableItemRemove: () => {
        p.value--;
      }
    }), (b, x) => (g(), w(l(Od), null, {
      default: y(() => [
        O(l(W), {
          tabindex: c.value || p.value === 0 ? -1 : 0,
          "data-orientation": l(s),
          as: b.as,
          "as-child": b.asChild,
          dir: l(u),
          style: { outline: "none" },
          onMousedown: x[0] || (x[0] = (k) => f.value = !0),
          onMouseup: m,
          onFocus: v,
          onBlur: x[1] || (x[1] = (k) => c.value = !1)
        }, {
          default: y(() => [
            C(b.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), ow = /* @__PURE__ */ _({
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
    const t = e, n = aw(), a = T(() => t.tabStopId || He()), r = T(
      () => n.currentTabStopId.value === a.value
    ), { getItems: o } = Pd();
    de(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Ke(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function s(i) {
      if (i.key === "Tab" && i.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = tw(
        i,
        n.orientation.value,
        n.dir.value
      );
      if (u !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !t.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let d = [...o().map((c) => c.ref).filter((c) => c.dataset.disabled !== "")];
        if (u === "last")
          d.reverse();
        else if (u === "prev" || u === "next") {
          u === "prev" && d.reverse();
          const c = d.indexOf(
            i.currentTarget
          );
          d = n.loop.value ? nw(d, c + 1) : d.slice(c + 1);
        }
        re(() => Wv(d));
      }
    }
    return (i, u) => (g(), w(l(Si), null, {
      default: y(() => [
        O(l(W), {
          tabindex: r.value ? 0 : -1,
          "data-orientation": l(n).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: u[0] || (u[0] = (d) => {
            i.focusable ? l(n).onItemFocus(a.value) : d.preventDefault();
          }),
          onFocus: u[1] || (u[1] = (d) => l(n).onItemFocus(a.value)),
          onKeydown: s
        }, {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [Id, sw] = ge("MenuContent"), Rd = /* @__PURE__ */ _({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Xu({
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
    ...Lv
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = wa(), o = $o(), { trapFocus: s, disableOutsidePointerEvents: i, loop: u } = me(n);
    xd(), yo(i.value);
    const d = E(""), c = E(0), f = E(0), p = E(null), h = E("right"), v = E(0), m = E(null), { createCollection: b } = hr(), { forwardRef: x, currentElement: k } = K(), $ = b(k);
    ee(k, (P) => {
      r.onContentChange(P);
    });
    const { handleTypeaheadSearch: M } = wd($);
    Ke(() => {
      window.clearTimeout(c.value);
    });
    function S(P) {
      var I, R;
      return h.value === ((I = p.value) == null ? void 0 : I.side) && Y1(P, (R = p.value) == null ? void 0 : R.area);
    }
    async function D(P) {
      var I;
      a("openAutoFocus", P), !P.defaultPrevented && (P.preventDefault(), (I = k.value) == null || I.focus({
        preventScroll: !0
      }));
    }
    function A(P) {
      if (P.defaultPrevented)
        return;
      const I = P.target.closest("[data-radix-menu-content]") === P.currentTarget, R = P.ctrlKey || P.altKey || P.metaKey, j = P.key.length === 1, z = _v(
        P,
        Ue(),
        k.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: o == null ? void 0 : o.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (z)
        return z == null ? void 0 : z.focus();
      if (P.code === "Space" || (I && (P.key === "Tab" && P.preventDefault(), !R && j && M(P.key)), P.target !== k.value) || !W1.includes(P.key))
        return;
      P.preventDefault();
      const Y = $.value;
      Bv.includes(P.key) && Y.reverse(), Zl(Y);
    }
    function N(P) {
      var I, R;
      (R = (I = P == null ? void 0 : P.currentTarget) == null ? void 0 : I.contains) != null && R.call(I, P.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function F(P) {
      var I;
      if (!no(P))
        return;
      const R = P.target, j = v.value !== P.clientX;
      if ((I = P == null ? void 0 : P.currentTarget) != null && I.contains(R) && j) {
        const z = P.clientX > v.value ? "right" : "left";
        h.value = z, v.value = P.clientX;
      }
    }
    return sw({
      onItemEnter: (P) => !!S(P),
      onItemLeave: (P) => {
        var I;
        S(P) || ((I = k.value) == null || I.focus(), m.value = null);
      },
      onTriggerLeave: (P) => !!S(P),
      searchRef: d,
      pointerGraceTimerRef: f,
      onPointerGraceIntentChange: (P) => {
        p.value = P;
      }
    }), (P, I) => (g(), w(l($i), {
      "as-child": "",
      trapped: l(s),
      onMountAutoFocus: D,
      onUnmountAutoFocus: I[7] || (I[7] = (R) => a("closeAutoFocus", R))
    }, {
      default: y(() => [
        O(l(mr), {
          "as-child": "",
          "disable-outside-pointer-events": l(i),
          onEscapeKeyDown: I[2] || (I[2] = (R) => a("escapeKeyDown", R)),
          onPointerDownOutside: I[3] || (I[3] = (R) => a("pointerDownOutside", R)),
          onFocusOutside: I[4] || (I[4] = (R) => a("focusOutside", R)),
          onInteractOutside: I[5] || (I[5] = (R) => a("interactOutside", R)),
          onDismiss: I[6] || (I[6] = (R) => a("dismiss"))
        }, {
          default: y(() => [
            O(l(Uv), {
              "current-tab-stop-id": m.value,
              "onUpdate:currentTabStopId": I[0] || (I[0] = (R) => m.value = R),
              "as-child": "",
              orientation: "vertical",
              dir: l(o).dir.value,
              loop: l(u),
              onEntryFocus: I[1] || (I[1] = (R) => {
                a("entryFocus", R), l(o).isUsingKeyboardRef.value || R.preventDefault();
              })
            }, {
              default: y(() => [
                O(l(nr), {
                  ref: l(x),
                  role: "menu",
                  as: P.as,
                  "as-child": P.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(Td)(l(r).open.value),
                  dir: l(o).dir.value,
                  side: P.side,
                  "side-offset": P.sideOffset,
                  align: P.align,
                  "align-offset": P.alignOffset,
                  "avoid-collisions": P.avoidCollisions,
                  "collision-boundary": P.collisionBoundary,
                  "collision-padding": P.collisionPadding,
                  "arrow-padding": P.arrowPadding,
                  "prioritize-position": P.prioritizePosition,
                  sticky: P.sticky,
                  "hide-when-detached": P.hideWhenDetached,
                  onKeydown: A,
                  onBlur: N,
                  onPointermove: F
                }, {
                  default: y(() => [
                    C(P.$slots, "default")
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
}), Kv = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Id(), { forwardRef: a } = K(), r = E(!1);
    async function o(i) {
      if (!i.defaultPrevented && no(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function s(i) {
      await re(), !i.defaultPrevented && no(i) && n.onItemLeave(i);
    }
    return (i, u) => (g(), w(l(Si), {
      value: { textValue: i.textValue }
    }, {
      default: y(() => [
        O(l(W), B({
          ref: l(a),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || void 0,
          "data-disabled": i.disabled ? "" : void 0,
          "data-highlighted": r.value ? "" : void 0,
          onPointermove: o,
          onPointerleave: s,
          onFocus: u[0] || (u[0] = async (d) => {
            await re(), !(d.defaultPrevented || i.disabled) && (r.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await re(), !d.defaultPrevented && (r.value = !1);
          })
        }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Fd = /* @__PURE__ */ _({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: r, currentElement: o } = K(), s = $o(), i = Id(), u = E(!1);
    async function d() {
      const c = o.value;
      if (!n.disabled && c) {
        const f = new CustomEvent(q1, {
          bubbles: !0,
          cancelable: !0
        });
        a("select", f), await re(), f.defaultPrevented ? u.value = !1 : s.onClose();
      }
    }
    return (c, f) => (g(), w(Kv, B(n, {
      ref: l(r),
      onClick: d,
      onPointerdown: f[0] || (f[0] = () => {
        u.value = !0;
      }),
      onPointerup: f[1] || (f[1] = async (p) => {
        var h;
        await re(), !p.defaultPrevented && (u.value || (h = p.currentTarget) == null || h.click());
      }),
      onKeydown: f[2] || (f[2] = async (p) => {
        const h = l(i).searchRef.value !== "";
        c.disabled || h && p.key === " " || l(Jl).includes(p.key) && (p.currentTarget.click(), p.preventDefault());
      })
    }), {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [iw, jv] = ge(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), lw = /* @__PURE__ */ _({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = iw({
      checked: E(!1)
    });
    return (n, a) => (g(), w(l(gt), {
      present: n.forceMount || l(Rs)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: y(() => [
        O(l(W), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": l(Md)(l(t).checked.value)
        }, {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), uw = /* @__PURE__ */ _({
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
    const n = e, a = t, r = De(n, "checked", a);
    return jv({ checked: r }), (o, s) => (g(), w(Fd, B({ role: "menuitemcheckbox" }, n, {
      "aria-checked": l(Rs)(l(r)) ? "mixed" : l(r),
      "data-state": l(Md)(l(r)),
      onSelect: s[0] || (s[0] = async (i) => {
        a("select", i), l(Rs)(l(r)) ? r.value = !0 : r.value = !l(r);
      })
    }), {
      default: y(() => [
        C(o.$slots, "default", { checked: l(r) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), dw = /* @__PURE__ */ _({
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
    const n = e, a = t, r = he(n, a), o = wa(), { forwardRef: s, currentElement: i } = K();
    return _o(i), (u, d) => (g(), w(Rd, B(l(r), {
      ref: l(s),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": l(o).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => l(o).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Ie((c) => a("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), cw = /* @__PURE__ */ _({
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
    const n = he(e, t), a = wa();
    return (r, o) => (g(), w(Rd, B(l(n), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: o[0] || (o[0] = (s) => l(a).onOpenChange(!1))
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fw = /* @__PURE__ */ _({
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
    const n = he(e, t), a = wa(), r = $o();
    return (o, s) => (g(), w(l(gt), {
      present: o.forceMount || l(a).open.value
    }, {
      default: y(() => [
        l(r).modal.value ? (g(), w(dw, J(B({ key: 0 }, { ...o.$attrs, ...l(n) })), {
          default: y(() => [
            C(o.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), w(cw, J(B({ key: 1 }, { ...o.$attrs, ...l(n) })), {
          default: y(() => [
            C(o.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Yv = /* @__PURE__ */ _({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), B({ role: "group" }, t), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pw = /* @__PURE__ */ _({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hw = /* @__PURE__ */ _({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(xo), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [vw, mw] = ge("MenuRadioGroup"), gw = /* @__PURE__ */ _({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = De(n, "modelValue", t);
    return mw({
      modelValue: a,
      onValueChange: (r) => {
        a.value = r;
      }
    }), (r, o) => (g(), w(Yv, J(Z(n)), {
      default: y(() => [
        C(r.$slots, "default", { modelValue: l(a) })
      ]),
      _: 3
    }, 16));
  }
}), yw = /* @__PURE__ */ _({
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
    const n = e, a = t, { value: r } = me(n), o = vw(), s = T(
      () => o.modelValue.value === (r == null ? void 0 : r.value)
    );
    return jv({ checked: s }), (i, u) => (g(), w(Fd, B({ role: "menuitemradio" }, n, {
      "aria-checked": s.value,
      "data-state": l(Md)(s.value),
      onSelect: u[0] || (u[0] = async (d) => {
        a("select", d), l(o).onValueChange(l(r));
      })
    }), {
      default: y(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), bw = /* @__PURE__ */ _({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), B(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Gv, _w] = ge("MenuSub"), xw = /* @__PURE__ */ _({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = De(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), r = wa(), o = E(), s = E();
    return Ce((i) => {
      (r == null ? void 0 : r.open.value) === !1 && (a.value = !1), i(() => a.value = !1);
    }), Hv({
      open: a,
      onOpenChange: (i) => {
        a.value = i;
      },
      content: s,
      onContentChange: (i) => {
        s.value = i;
      }
    }), _w({
      triggerId: "",
      contentId: "",
      trigger: o,
      onTriggerChange: (i) => {
        o.value = i;
      }
    }), (i, u) => (g(), w(l(yr), null, {
      default: y(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ww = /* @__PURE__ */ _({
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
    const n = he(e, t), a = wa(), r = $o(), o = Gv(), { forwardRef: s, currentElement: i } = K();
    return o.contentId || (o.contentId = He(void 0, "radix-vue-menu-sub-content")), (u, d) => (g(), w(l(gt), {
      present: u.forceMount || l(a).open.value
    }, {
      default: y(() => [
        O(Rd, B(l(n), {
          id: l(o).contentId,
          ref: l(s),
          "aria-labelledby": l(o).triggerId,
          align: "start",
          side: l(r).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = Ie((c) => {
            var f;
            l(r).isUsingKeyboardRef.value && ((f = l(i)) == null || f.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = Ie(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== l(o).trigger.value && l(a).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            l(r).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var f, p;
            const h = (f = c.currentTarget) == null ? void 0 : f.contains(c.target), v = l(K1)[l(r).dir.value].includes(c.key);
            h && v && (l(a).onOpenChange(!1), (p = l(o).trigger.value) == null || p.focus(), c.preventDefault());
          })
        }), {
          default: y(() => [
            C(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Cw = /* @__PURE__ */ _({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = wa(), a = $o(), r = Gv(), o = Id(), s = E(null);
    r.triggerId || (r.triggerId = He(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      s.value && window.clearTimeout(s.value), s.value = null;
    }
    Ke(() => {
      i();
    });
    function u(f) {
      !no(f) || o.onItemEnter(f) || !t.disabled && !n.open.value && !s.value && (o.onPointerGraceIntentChange(null), s.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(f) {
      var p, h;
      if (!no(f))
        return;
      i();
      const v = (p = n.content.value) == null ? void 0 : p.getBoundingClientRect();
      if (v != null && v.width) {
        const m = (h = n.content.value) == null ? void 0 : h.dataset.side, b = m === "right", x = b ? -5 : 5, k = v[b ? "left" : "right"], $ = v[b ? "right" : "left"];
        o.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: f.clientX + x, y: f.clientY },
            { x: k, y: v.top },
            { x: $, y: v.top },
            { x: $, y: v.bottom },
            { x: k, y: v.bottom }
          ],
          side: m
        }), window.clearTimeout(o.pointerGraceTimerRef.value), o.pointerGraceTimerRef.value = window.setTimeout(
          () => o.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (o.onTriggerLeave(f))
          return;
        o.onPointerGraceIntentChange(null);
      }
    }
    async function c(f) {
      var p;
      const h = o.searchRef.value !== "";
      t.disabled || h && f.key === " " || U1[a.dir.value].includes(f.key) && (n.onOpenChange(!0), await re(), (p = n.content.value) == null || p.focus(), f.preventDefault());
    }
    return (f, p) => (g(), w(qv, { "as-child": "" }, {
      default: y(() => [
        O(Kv, B(t, {
          id: l(r).triggerId,
          ref: (h) => {
            var v;
            (v = l(r)) == null || v.onTriggerChange(h == null ? void 0 : h.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(r).contentId,
          "data-state": l(Td)(l(n).open.value),
          onClick: p[0] || (p[0] = async (h) => {
            t.disabled || h.defaultPrevented || (h.currentTarget.focus(), l(n).open.value || l(n).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: c
        }), {
          default: y(() => [
            C(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [Xv, $w] = ge("DropdownMenuRoot"), kw = /* @__PURE__ */ _({
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
    K();
    const r = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), o = E(), { modal: s, dir: i } = me(n), u = nn(i);
    return $w({
      open: r,
      onOpenChange: (d) => {
        r.value = d;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerId: "",
      triggerElement: o,
      contentId: "",
      modal: s,
      dir: u
    }), (d, c) => (g(), w(l(Xx), {
      open: l(r),
      "onUpdate:open": c[0] || (c[0] = (f) => dt(r) ? r.value = f : null),
      dir: l(u),
      modal: l(s)
    }, {
      default: y(() => [
        C(d.$slots, "default", { open: l(r) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Sw = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Xv(), { forwardRef: a, currentElement: r } = K();
    return de(() => {
      n.triggerElement = r;
    }), n.triggerId || (n.triggerId = He(void 0, "radix-vue-dropdown-menu-trigger")), (o, s) => (g(), w(l(qv), { "as-child": "" }, {
      default: y(() => [
        O(l(W), {
          id: l(n).triggerId,
          ref: l(a),
          type: o.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: o.as,
          "aria-haspopup": "menu",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(n).open.value ? l(n).contentId : void 0,
          "data-disabled": o.disabled ? "" : void 0,
          disabled: o.disabled,
          "data-state": l(n).open.value ? "open" : "closed",
          onClick: s[0] || (s[0] = async (i) => {
            var u;
            !o.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = l(n)) == null || u.onOpenToggle(), await re(), l(n).open.value && i.preventDefault());
          }),
          onKeydown: s[1] || (s[1] = Xe(
            (i) => {
              o.disabled || (["Enter", " "].includes(i.key) && l(n).onOpenToggle(), i.key === "ArrowDown" && l(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: y(() => [
            C(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Tw = /* @__PURE__ */ _({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(hw), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mw = /* @__PURE__ */ _({
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
    const n = he(e, t);
    K();
    const a = Xv(), r = E(!1);
    function o(s) {
      s.defaultPrevented || (r.value || setTimeout(() => {
        var i;
        (i = a.triggerElement.value) == null || i.focus();
      }, 0), r.value = !1, s.preventDefault());
    }
    return a.contentId || (a.contentId = He(void 0, "radix-vue-dropdown-menu-content")), (s, i) => {
      var u;
      return g(), w(l(fw), B(l(n), {
        id: l(a).contentId,
        "aria-labelledby": (u = l(a)) == null ? void 0 : u.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: o,
        onInteractOutside: i[0] || (i[0] = (d) => {
          var c;
          if (d.defaultPrevented) return;
          const f = d.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0, h = f.button === 2 || p;
          (!l(a).modal.value || h) && (r.value = !0), (c = l(a).triggerElement.value) != null && c.contains(d.target) && d.preventDefault();
        })
      }), {
        default: y(() => [
          C(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Jv = /* @__PURE__ */ _({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = xa(t);
    return K(), (r, o) => (g(), w(l(Fd), J(Z({ ...n, ...l(a) })), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Aw = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return K(), (n, a) => (g(), w(l(Yv), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dw = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return K(), (n, a) => (g(), w(l(bw), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ew = /* @__PURE__ */ _({
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
    const n = e, a = xa(t);
    return K(), (r, o) => (g(), w(l(uw), J(Z({ ...n, ...l(a) })), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zv = /* @__PURE__ */ _({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return K(), (n, a) => (g(), w(l(lw), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bw = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return K(), (n, a) => (g(), w(l(pw), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ow = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = xa(t);
    return K(), (r, o) => (g(), w(l(gw), J(Z({ ...n, ...l(a) })), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pw = /* @__PURE__ */ _({
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
    const n = he(e, t);
    return K(), (a, r) => (g(), w(l(yw), J(Z(l(n))), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Iw = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = De(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return K(), (r, o) => (g(), w(l(xw), {
      open: l(a),
      "onUpdate:open": o[0] || (o[0] = (s) => dt(a) ? a.value = s : null)
    }, {
      default: y(() => [
        C(r.$slots, "default", { open: l(a) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Rw = /* @__PURE__ */ _({
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
    const n = he(e, t);
    return K(), (a, r) => (g(), w(l(ww), B(l(n), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fw = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return K(), (n, a) => (g(), w(l(Cw), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vw = /* @__PURE__ */ _({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return K(), (n, a) => (g(), w(l(W), B(t, {
      onMousedown: a[0] || (a[0] = (r) => {
        !r.defaultPrevented && r.detail > 1 && r.preventDefault();
      })
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [_r, Nw] = ge("PaginationRoot"), yF = /* @__PURE__ */ _({
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
    const n = e, a = t, { siblingCount: r, disabled: o, showEdges: s } = me(n);
    K();
    const i = De(n, "page", a, {
      defaultValue: n.defaultPage,
      passive: n.page === void 0
    }), u = T(() => Math.max(1, Math.ceil(n.total / n.itemsPerPage)));
    return Nw({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: r,
      disabled: o,
      showEdges: s
    }), (d, c) => (g(), w(l(W), {
      as: d.as,
      "as-child": d.asChild
    }, {
      default: y(() => [
        C(d.$slots, "default", {
          page: l(i),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Lw = /* @__PURE__ */ _({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return K(), (n, a) => (g(), w(l(W), B(t, { "data-type": "ellipsis" }), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          oe("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), zw = /* @__PURE__ */ _({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = _r();
    K();
    const a = T(() => n.page.value === 1 || n.disabled.value);
    return (r, o) => (g(), w(l(W), B(t, {
      "aria-label": "First Page",
      type: r.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: o[0] || (o[0] = (s) => !a.value && l(n).onPageChange(1))
    }), {
      default: y(() => [
        C(r.$slots, "default", {}, () => [
          oe("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), qw = /* @__PURE__ */ _({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = _r();
    K();
    const a = T(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (r, o) => (g(), w(l(W), B(t, {
      "aria-label": "Last Page",
      type: r.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: o[0] || (o[0] = (s) => !a.value && l(n).onPageChange(l(n).pageCount.value))
    }), {
      default: y(() => [
        C(r.$slots, "default", {}, () => [
          oe("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function En(e, t) {
  const n = t - e + 1;
  return Array.from({ length: n }, (a, r) => r + e);
}
function Hw(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const Lo = "ellipsis";
function Ww(e, t, n, a) {
  const r = t, o = Math.max(e - n, 1), s = Math.min(e + n, r);
  if (a) {
    const i = Math.min(2 * n + 5, t) - 2, u = o > 3 && Math.abs(r - i - 1 + 1) > 2 && Math.abs(o - 1) > 2, d = s < r - 2 && Math.abs(r - i) > 2 && Math.abs(r - s) > 2;
    if (!u && d)
      return [...En(1, i), Lo, r];
    if (u && !d) {
      const c = En(r - i + 1, r);
      return [1, Lo, ...c];
    }
    if (u && d) {
      const c = En(o, s);
      return [1, Lo, ...c, Lo, r];
    }
    return En(1, r);
  } else {
    const i = n * 2 + 1;
    return t < i ? En(1, r) : e <= n + 1 ? En(1, i) : t - e <= n ? En(t - i + 1, r) : En(o, s);
  }
}
const bF = /* @__PURE__ */ _({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    K();
    const n = _r(), a = T(() => Hw(
      Ww(
        n.page.value,
        n.pageCount.value,
        n.siblingCount.value,
        n.showEdges.value
      )
    ));
    return (r, o) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        C(r.$slots, "default", { items: a.value })
      ]),
      _: 3
    }, 16));
  }
}), _F = /* @__PURE__ */ _({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    K();
    const n = _r(), a = T(() => n.page.value === t.value), r = T(() => n.disabled.value);
    return (o, s) => (g(), w(l(W), B(t, {
      "data-type": "page",
      "aria-label": `Page ${o.value}`,
      "aria-current": a.value ? "page" : void 0,
      "data-selected": a.value ? "true" : void 0,
      disabled: r.value,
      type: o.as === "button" ? "button" : void 0,
      onClick: s[0] || (s[0] = (i) => !r.value && l(n).onPageChange(o.value))
    }), {
      default: y(() => [
        C(o.$slots, "default", {}, () => [
          oe(ce(o.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), Uw = /* @__PURE__ */ _({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    K();
    const n = _r(), a = T(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (r, o) => (g(), w(l(W), B(t, {
      "aria-label": "Next Page",
      type: r.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: o[0] || (o[0] = (s) => !a.value && l(n).onPageChange(l(n).page.value + 1))
    }), {
      default: y(() => [
        C(r.$slots, "default", {}, () => [
          oe("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Kw = /* @__PURE__ */ _({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    K();
    const n = _r(), a = T(() => n.page.value === 1 || n.disabled.value);
    return (r, o) => (g(), w(l(W), B(t, {
      "aria-label": "Previous Page",
      type: r.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: o[0] || (o[0] = (s) => !a.value && l(n).onPageChange(l(n).page.value - 1))
    }), {
      default: y(() => [
        C(r.$slots, "default", {}, () => [
          oe("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), [ko, jw] = ge("PopoverRoot"), Yw = /* @__PURE__ */ _({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { modal: r } = me(n), o = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = E(), i = E(!1);
    return jw({
      contentId: "",
      modal: r,
      open: o,
      onOpenChange: (u) => {
        o.value = u;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerElement: s,
      hasCustomAnchor: i
    }), (u, d) => (g(), w(l(yr), null, {
      default: y(() => [
        C(u.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }));
  }
}), Gw = /* @__PURE__ */ _({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ko(), { forwardRef: a, currentElement: r } = K();
    return de(() => {
      n.triggerElement.value = r.value;
    }), (o, s) => (g(), w(ut(l(n).hasCustomAnchor.value ? l(W) : l(ki)), { "as-child": "" }, {
      default: y(() => [
        O(l(W), {
          ref: l(a),
          type: o.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(n).contentId,
          "data-state": l(n).open.value ? "open" : "closed",
          as: o.as,
          "as-child": t.asChild,
          onClick: l(n).onOpenToggle
        }, {
          default: y(() => [
            C(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Xw = /* @__PURE__ */ _({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(xo), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qv = /* @__PURE__ */ _({
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
    const n = e, a = t, r = be(n), { forwardRef: o } = K(), s = ko();
    return xd(), (i, u) => (g(), w(l($i), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: y(() => [
        O(l(mr), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => a("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => a("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => a("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => a("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => l(s).onOpenChange(!1))
        }, {
          default: y(() => [
            O(l(nr), B(l(r), {
              id: l(s).contentId,
              ref: l(o),
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
                C(i.$slots, "default")
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
}), Jw = /* @__PURE__ */ _({
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
    const n = e, a = t, r = ko(), o = E(!1);
    yo(!0);
    const s = he(n, a), { forwardRef: i, currentElement: u } = K();
    return _o(u), (d, c) => (g(), w(Qv, B(l(s), {
      ref: l(i),
      "trap-focus": l(r).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Ie(
        (f) => {
          var p;
          a("closeAutoFocus", f), o.value || (p = l(r).triggerElement.value) == null || p.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (f) => {
        a("pointerDownOutside", f);
        const p = f.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0, v = p.button === 2 || h;
        o.value = v;
      }),
      onFocusOutside: c[2] || (c[2] = Ie(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Zw = /* @__PURE__ */ _({
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
    const n = e, a = t, r = ko(), o = E(!1), s = E(!1), i = he(n, a);
    return (u, d) => (g(), w(Qv, B(l(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var f;
        a("closeAutoFocus", c), c.defaultPrevented || (o.value || (f = l(r).triggerElement.value) == null || f.focus(), c.preventDefault()), o.value = !1, s.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var f;
        a("interactOutside", c), c.defaultPrevented || (o.value = !0, c.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const p = c.target;
        (f = l(r).triggerElement.value) != null && f.contains(p) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && s.value && c.preventDefault();
      })
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qw = /* @__PURE__ */ _({
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
    const n = e, a = t, r = ko(), o = he(n, a), { forwardRef: s } = K();
    return r.contentId || (r.contentId = He(void 0, "radix-vue-popover-content")), (i, u) => (g(), w(l(gt), {
      present: i.forceMount || l(r).open.value
    }, {
      default: y(() => [
        l(r).modal.value ? (g(), w(Jw, B({ key: 0 }, l(o), { ref: l(s) }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), w(Zw, B({ key: 1 }, l(o), { ref: l(s) }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function eC(e) {
  const t = T(() => e.start.value ? !!e.isDateDisabled(e.start.value) : !1), n = T(() => e.end.value ? !!e.isDateDisabled(e.end.value) : !1), a = T(
    () => t.value || n.value ? !1 : !!(e.start.value && e.end.value && Nn(e.end.value, e.start.value))
  ), r = (u) => e.start.value ? Ge(e.start.value, u) : !1, o = (u) => e.end.value ? Ge(e.end.value, u) : !1, s = (u) => e.start.value && Ge(e.start.value, u) || e.end.value && Ge(e.end.value, u) ? !0 : e.end.value && e.start.value ? Mb(u, e.start.value, e.end.value) : !1, i = T(() => {
    if (e.start.value && e.end.value || !e.start.value || !e.focusedValue.value)
      return null;
    const u = Nn(e.start.value, e.focusedValue.value), d = u ? e.start.value : e.focusedValue.value, c = u ? e.focusedValue.value : e.start.value;
    return Ge(d, c) ? {
      start: d,
      end: c
    } : Eb(d, c, e.isDateUnavailable, e.isDateDisabled) ? {
      start: d,
      end: c
    } : null;
  });
  return {
    isInvalid: a,
    isSelected: s,
    highlightedRange: i,
    isSelectionStart: r,
    isSelectionEnd: o,
    isHighlightedStart: (u) => !i.value || !i.value.start ? !1 : Ge(i.value.start, u),
    isHighlightedEnd: (u) => !i.value || !i.value.end ? !1 : Ge(i.value.end, u)
  };
}
const tC = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, nC = {
  role: "heading",
  "aria-level": "2"
}, [xr, aC] = ge("RangeCalendarRoot"), rC = /* @__PURE__ */ _({
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
      disabled: r,
      readonly: o,
      initialFocus: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: f,
      preventDeselect: p,
      isDateUnavailable: h,
      isDateDisabled: v,
      calendarLabel: m,
      maxValue: b,
      minValue: x,
      locale: k,
      dir: $,
      nextPage: M,
      prevPage: S
    } = me(n), { primitiveElement: D, currentElement: A } = vr(), N = nn($), F = E(), P = E(), I = De(n, "modelValue", a, {
      defaultValue: n.defaultValue ?? { start: void 0, end: void 0 },
      passive: n.modelValue === void 0
    }), R = hv({
      defaultPlaceholder: n.placeholder,
      defaultValue: I.value.start,
      locale: n.locale
    }), j = E(I.value.start), z = E(I.value.end), Y = De(n, "placeholder", a, {
      defaultValue: n.defaultPlaceholder ?? R.copy(),
      passive: n.placeholder === void 0
    });
    function te(fe) {
      Y.value = fe.copy();
    }
    const {
      fullCalendarLabel: ye,
      headingValue: pe,
      isDateDisabled: q,
      isDateUnavailable: ae,
      isNextButtonDisabled: le,
      isPrevButtonDisabled: Le,
      grid: Ye,
      weekdays: Qe,
      isOutsideVisibleView: et,
      nextPage: Nt,
      prevPage: Q,
      formatter: ie
    } = Rv({
      locale: k,
      placeholder: Y,
      weekStartsOn: u,
      fixedWeeks: c,
      numberOfMonths: f,
      minValue: x,
      maxValue: b,
      disabled: r,
      weekdayFormat: d,
      pagedNavigation: i,
      isDateDisabled: v.value,
      isDateUnavailable: h.value,
      calendarLabel: m,
      nextPage: M,
      prevPage: S
    }), {
      isInvalid: H,
      isSelected: G,
      highlightedRange: ne,
      isSelectionStart: U,
      isSelectionEnd: Fe,
      isHighlightedStart: xe,
      isHighlightedEnd: ot
    } = eC({
      start: j,
      end: z,
      isDateDisabled: q,
      isDateUnavailable: ae,
      focusedValue: P
    });
    return ee(I, (fe) => {
      var ze, tt, al, Lc;
      (!fe || !fe.start || j.value && !qt(fe.start, j.value)) && (j.value = (tt = (ze = fe == null ? void 0 : fe.start) == null ? void 0 : ze.copy) == null ? void 0 : tt.call(ze)), (!fe || !fe.end || z.value && !qt(fe.end, z.value)) && (z.value = (Lc = (al = fe == null ? void 0 : fe.end) == null ? void 0 : al.copy) == null ? void 0 : Lc.call(al));
    }), ee(j, (fe) => {
      fe && !qt(fe, Y.value) && te(fe), a("update:startValue", fe);
    }), ee([j, z], ([fe, ze]) => {
      const tt = I.value;
      if (!(tt && tt.start && tt.end && fe && ze && qt(tt.start, fe) && qt(tt.end, ze)))
        if (fe && ze) {
          if (tt.start && tt.end && qt(tt.start, fe) && qt(tt.end, ze))
            return;
          Nn(ze, fe) ? I.value = {
            start: ze.copy(),
            end: fe.copy()
          } : I.value = {
            start: fe.copy(),
            end: ze.copy()
          };
        } else tt.start && tt.end && (I.value = {
          start: fe == null ? void 0 : fe.copy(),
          end: void 0
        });
    }), aC({
      isDateUnavailable: ae,
      startValue: j,
      endValue: z,
      formatter: ie,
      modelValue: I,
      placeholder: Y,
      disabled: r,
      initialFocus: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: f,
      readonly: o,
      preventDeselect: p,
      fullCalendarLabel: ye,
      headingValue: pe,
      isInvalid: H,
      isDateDisabled: q,
      highlightedRange: ne,
      focusedValue: P,
      lastPressedDateValue: F,
      isSelected: G,
      isSelectionEnd: Fe,
      isSelectionStart: U,
      isNextButtonDisabled: le,
      isPrevButtonDisabled: Le,
      isOutsideVisibleView: et,
      nextPage: Nt,
      prevPage: Q,
      parentElement: A,
      onPlaceholderChange: te,
      locale: k,
      dir: N,
      isHighlightedStart: xe,
      isHighlightedEnd: ot
    }), de(() => {
      s.value && vv(A.value);
    }), (fe, ze) => (g(), w(l(W), {
      ref_key: "primitiveElement",
      ref: D,
      as: fe.as,
      "as-child": fe.asChild,
      role: "application",
      "aria-label": l(ye),
      "data-readonly": l(o) ? "" : void 0,
      "data-disabled": l(r) ? "" : void 0,
      "data-invalid": l(H) ? "" : void 0,
      dir: l(N)
    }, {
      default: y(() => [
        _e("div", tC, [
          _e("div", nC, ce(l(ye)), 1)
        ]),
        C(fe.$slots, "default", {
          date: l(Y),
          grid: l(Ye),
          weekDays: l(Qe),
          weekStartsOn: l(u),
          locale: l(k),
          fixedWeeks: l(c)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), oC = /* @__PURE__ */ _({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sC = /* @__PURE__ */ _({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = xr();
    return (a, r) => (g(), w(l(W), B(t, {
      "data-disabled": l(n).disabled.value ? "" : void 0
    }), {
      default: y(() => [
        C(a.$slots, "default", {
          headingValue: l(n).headingValue.value
        }, () => [
          oe(ce(l(n).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), iC = /* @__PURE__ */ _({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, n = xr(), a = T(() => n.disabled.value ? !0 : void 0), r = T(() => n.readonly.value ? !0 : void 0);
    return (o, s) => (g(), w(l(W), B(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": r.value,
      "aria-disabled": a.value,
      "data-readonly": r.value && "",
      "data-disabled": a.value && ""
    }), {
      default: y(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), lC = /* @__PURE__ */ _({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = xr();
    return (n, a) => {
      var r, o;
      return g(), w(l(W), {
        as: n.as,
        "as-child": n.asChild,
        role: "gridcell",
        "aria-selected": l(t).isSelected(n.date) ? !0 : void 0,
        "aria-disabled": l(t).isDateDisabled(n.date) || ((o = (r = l(t)).isDateUnavailable) == null ? void 0 : o.call(r, n.date)),
        "data-disabled": l(t).isDateDisabled(n.date) ? "" : void 0
      }, {
        default: y(() => [
          C(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), uC = /* @__PURE__ */ _({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dC = /* @__PURE__ */ _({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = T(() => a.disabled.value || a.isNextButtonDisabled(t.step, t.nextPage)), a = xr();
    return (r, o) => (g(), w(l(W), B(t, {
      "aria-label": "Next page",
      type: r.as === "button" ? "button" : void 0,
      "aria-disabled": n.value || void 0,
      "data-disabled": n.value || void 0,
      disabled: n.value,
      onClick: o[0] || (o[0] = (s) => l(a).nextPage(t.step, t.nextPage))
    }), {
      default: y(() => [
        C(r.$slots, "default", {}, () => [
          oe("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), cC = /* @__PURE__ */ _({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = T(() => a.disabled.value || a.isPrevButtonDisabled(t.step, t.prevPage)), a = xr();
    return (r, o) => (g(), w(l(W), B(t, {
      "aria-label": "Previous page",
      type: r.as === "button" ? "button" : void 0,
      "aria-disabled": n.value || void 0,
      "data-disabled": n.value || void 0,
      disabled: n.value,
      onClick: o[0] || (o[0] = (s) => l(a).prevPage(t.step, t.prevPage))
    }), {
      default: y(() => [
        C(r.$slots, "default", {}, () => [
          oe("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), fC = /* @__PURE__ */ _({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), B(t, { "aria-hidden": "true" }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pC = /* @__PURE__ */ _({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hC = /* @__PURE__ */ _({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vC = /* @__PURE__ */ _({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = xr(), a = Sv(), { primitiveElement: r, currentElement: o } = vr(), s = T(() => n.formatter.custom(xt(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = T(() => n.isDateDisabled(t.day)), u = T(() => {
      var F;
      return (F = n.isDateUnavailable) == null ? void 0 : F.call(n, t.day);
    }), d = T(() => n.isSelected(t.day)), c = T(() => n.isSelectionStart(t.day)), f = T(() => n.isSelectionEnd(t.day)), p = T(() => n.isHighlightedStart(t.day)), h = T(() => n.isHighlightedEnd(t.day)), v = T(() => n.highlightedRange.value ? Tb(t.day, n.highlightedRange.value.start, n.highlightedRange.value.end) : !1), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])", b = T(() => Mh(t.day, yn())), x = T(() => !ed(t.day, t.month)), k = T(
      () => n.isOutsideVisibleView(t.day)
    ), $ = T(() => t.day.day.toLocaleString(n.locale.value)), M = T(() => !n.disabled.value && Ge(t.day, n.placeholder.value));
    function S(F, P) {
      var I;
      if (!n.readonly.value && !(n.isDateDisabled(P) || (I = n.isDateUnavailable) != null && I.call(n, P))) {
        if (n.lastPressedDateValue.value = P.copy(), n.startValue.value && n.highlightedRange.value === null) {
          if (Ge(P, n.startValue.value) && !n.preventDeselect.value && !n.endValue.value) {
            n.startValue.value = void 0, n.onPlaceholderChange(P);
            return;
          } else if (!n.endValue.value) {
            F.preventDefault(), n.lastPressedDateValue.value && Ge(n.lastPressedDateValue.value, P) && (n.startValue.value = P.copy());
            return;
          }
        }
        if (n.startValue.value && n.endValue.value && Ge(n.endValue.value, P) && !n.preventDeselect.value) {
          n.startValue.value = void 0, n.endValue.value = void 0, n.onPlaceholderChange(P);
          return;
        }
        n.startValue.value ? n.endValue.value ? n.endValue.value && n.startValue.value && (n.endValue.value = void 0, n.startValue.value = P.copy()) : n.endValue.value = P.copy() : n.startValue.value = P.copy();
      }
    }
    function D(F) {
      S(F, t.day);
    }
    function A() {
      var F;
      n.isDateDisabled(t.day) || (F = n.isDateUnavailable) != null && F.call(n, t.day) || (n.focusedValue.value = t.day.copy());
    }
    function N(F) {
      F.preventDefault(), F.stopPropagation();
      const P = n.parentElement.value, I = P ? Array.from(P.querySelectorAll(m)) : [];
      let R = I.indexOf(o.value);
      const j = 7, z = n.dir.value === "rtl" ? -1 : 1;
      switch (F.code) {
        case a.ARROW_RIGHT:
          R += z;
          break;
        case a.ARROW_LEFT:
          R -= z;
          break;
        case a.ARROW_UP:
          R -= j;
          break;
        case a.ARROW_DOWN:
          R += j;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          S(F, t.day);
          return;
        default:
          return;
      }
      if (R >= 0 && R < I.length) {
        I[R].focus();
        return;
      }
      if (R < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), re(() => {
          const Y = P ? Array.from(P.querySelectorAll(m)) : [];
          if (!n.pagedNavigation.value) {
            const te = bn(n.placeholder.value);
            Y[te - Math.abs(R)].focus();
            return;
          }
          Y[Y.length - Math.abs(R)].focus();
        });
        return;
      }
      if (R >= I.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), re(() => {
          const Y = P ? Array.from(P.querySelectorAll(m)) : [];
          if (!n.pagedNavigation.value) {
            const te = bn(n.placeholder.value.add({ months: n.numberOfMonths.value - 1 }));
            Y[Y.length - te + R - I.length].focus();
            return;
          }
          Y[R - I.length].focus();
        });
      }
    }
    return (F, P) => (g(), w(l(W), B({
      ref_key: "primitiveElement",
      ref: r
    }, t, {
      role: "button",
      "aria-label": s.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": d.value ? !0 : void 0,
      "aria-disabled": i.value || u.value ? !0 : void 0,
      "data-highlighted": v.value ? "" : void 0,
      "data-selection-start": c.value ? !0 : void 0,
      "data-selection-end": f.value ? !0 : void 0,
      "data-highlighted-start": p.value ? !0 : void 0,
      "data-highlighted-end": h.value ? !0 : void 0,
      "data-selected": d.value ? !0 : void 0,
      "data-outside-visible-view": k.value ? "" : void 0,
      "data-value": F.day.toString(),
      "data-disabled": i.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": b.value ? "" : void 0,
      "data-outside-view": x.value ? "" : void 0,
      "data-focused": M.value ? "" : void 0,
      tabindex: M.value ? 0 : x.value || i.value ? void 0 : -1,
      onClick: D,
      onFocusin: A,
      onMouseenter: A,
      onKeydown: Xe(N, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: y(() => [
        C(F.$slots, "default", { dayValue: $.value }, () => [
          oe(ce($.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-focused", "tabindex"]));
  }
}), mC = ["default-value"], gC = /* @__PURE__ */ _({
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
    const t = e, { value: n } = me(t), a = E();
    return (r, o) => (g(), w(l(Co), { "as-child": "" }, {
      default: y(() => [
        ya(_e("select", B({
          ref_key: "selectElement",
          ref: a
        }, t, {
          "onUpdate:modelValue": o[0] || (o[0] = (s) => dt(n) ? n.value = s : null),
          "default-value": l(n)
        }), [
          C(r.$slots, "default")
        ], 16, mC), [
          [b0, l(n)]
        ])
      ]),
      _: 3
    }));
  }
}), yC = {
  key: 0,
  value: ""
}, [Ca, em] = ge("SelectRoot"), [bC, _C] = ge("SelectRoot"), xC = /* @__PURE__ */ _({
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
    const n = e, a = t, r = De(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), o = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = E(), i = E(), u = E({
      x: 0,
      y: 0
    }), d = E(!1), { required: c, disabled: f, dir: p } = me(n), h = nn(p);
    em({
      triggerElement: s,
      onTriggerChange: (x) => {
        s.value = x;
      },
      valueElement: i,
      onValueElementChange: (x) => {
        i.value = x;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (x) => {
        d.value = x;
      },
      contentId: "",
      modelValue: r,
      onValueChange: (x) => {
        r.value = x;
      },
      open: o,
      required: c,
      onOpenChange: (x) => {
        o.value = x;
      },
      dir: h,
      triggerPointerDownPosRef: u,
      disabled: f
    });
    const v = bo(s), m = E(/* @__PURE__ */ new Set()), b = T(() => Array.from(m.value).map((x) => {
      var k;
      return (k = x.props) == null ? void 0 : k.value;
    }).join(";"));
    return _C({
      onNativeOptionAdd: (x) => {
        m.value.add(x);
      },
      onNativeOptionRemove: (x) => {
        m.value.delete(x);
      }
    }), (x, k) => (g(), w(l(yr), null, {
      default: y(() => [
        C(x.$slots, "default", {
          modelValue: l(r),
          open: l(o)
        }),
        l(v) ? (g(), w(gC, B({ key: b.value }, x.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: l(c),
          name: x.name,
          autocomplete: x.autocomplete,
          disabled: l(f),
          value: l(r),
          onChange: k[0] || (k[0] = ($) => r.value = $.target.value)
        }), {
          default: y(() => [
            l(r) === void 0 ? (g(), L("option", yC)) : se("", !0),
            (g(!0), L(ue, null, Ae(Array.from(m.value), ($) => (g(), w(ut($), B({ ref_for: !0 }, $.props, {
              key: $.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : se("", !0)
      ]),
      _: 3
    }));
  }
}), wC = [" ", "Enter", "ArrowUp", "ArrowDown"], CC = [" ", "Enter"], Tt = 10;
function tm(e) {
  return e === "" || is(e);
}
const $C = /* @__PURE__ */ _({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Ca(), a = T(() => {
      var h;
      return ((h = n.disabled) == null ? void 0 : h.value) || t.disabled;
    }), { forwardRef: r, currentElement: o } = K();
    n.contentId || (n.contentId = He(void 0, "radix-vue-select-content")), de(() => {
      n.triggerElement = o;
    });
    const { injectCollection: s } = hr(), i = s(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = wd(i);
    function f() {
      a.value || (n.onOpenChange(!0), c());
    }
    function p(h) {
      f(), n.triggerPointerDownPosRef.value = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      };
    }
    return (h, v) => (g(), w(l(ki), { "as-child": "" }, {
      default: y(() => {
        var m, b, x, k;
        return [
          O(l(W), {
            ref: l(r),
            role: "combobox",
            type: h.as === "button" ? "button" : void 0,
            "aria-controls": l(n).contentId,
            "aria-expanded": l(n).open.value || !1,
            "aria-required": (m = l(n).required) == null ? void 0 : m.value,
            "aria-autocomplete": "none",
            disabled: a.value,
            dir: (b = l(n)) == null ? void 0 : b.dir.value,
            "data-state": (x = l(n)) != null && x.open.value ? "open" : "closed",
            "data-disabled": a.value ? "" : void 0,
            "data-placeholder": l(tm)((k = l(n).modelValue) == null ? void 0 : k.value) ? "" : void 0,
            "as-child": h.asChild,
            as: h.as,
            onClick: v[0] || (v[0] = ($) => {
              var M;
              (M = $ == null ? void 0 : $.currentTarget) == null || M.focus();
            }),
            onPointerdown: v[1] || (v[1] = ($) => {
              if ($.pointerType === "touch")
                return $.preventDefault();
              const M = $.target;
              M.hasPointerCapture($.pointerId) && M.releasePointerCapture($.pointerId), $.button === 0 && $.ctrlKey === !1 && (p($), $.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = Ie(
              ($) => {
                $.pointerType === "touch" && p($);
              },
              ["prevent"]
            )),
            onKeydown: v[3] || (v[3] = ($) => {
              const M = l(u) !== "";
              !($.ctrlKey || $.altKey || $.metaKey) && $.key.length === 1 && M && $.key === " " || (l(d)($.key), l(wC).includes($.key) && (f(), $.preventDefault()));
            })
          }, {
            default: y(() => [
              C(h.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), kC = /* @__PURE__ */ _({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(xo), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Vd, SC] = ge("SelectItemAlignedPosition"), TC = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { injectCollection: r } = hr(), o = Ca(), s = $a(), i = r(), u = E(!1), d = E(!0), c = E(), { forwardRef: f, currentElement: p } = K(), { viewport: h, selectedItem: v, selectedItemText: m, focusSelectedItem: b } = s;
    function x() {
      if (o.triggerElement.value && o.valueElement.value && c.value && p.value && h != null && h.value && v != null && v.value && m != null && m.value) {
        const M = o.triggerElement.value.getBoundingClientRect(), S = p.value.getBoundingClientRect(), D = o.valueElement.value.getBoundingClientRect(), A = m.value.getBoundingClientRect();
        if (o.dir.value !== "rtl") {
          const Q = A.left - S.left, ie = D.left - Q, H = M.left - ie, G = M.width + H, ne = Math.max(G, S.width), U = window.innerWidth - Tt, Fe = Is(ie, Tt, Math.max(Tt, U - ne));
          c.value.style.minWidth = `${G}px`, c.value.style.left = `${Fe}px`;
        } else {
          const Q = S.right - A.right, ie = window.innerWidth - D.right - Q, H = window.innerWidth - M.right - ie, G = M.width + H, ne = Math.max(G, S.width), U = window.innerWidth - Tt, Fe = Is(
            ie,
            Tt,
            Math.max(Tt, U - ne)
          );
          c.value.style.minWidth = `${G}px`, c.value.style.right = `${Fe}px`;
        }
        const N = i.value, F = window.innerHeight - Tt * 2, P = h.value.scrollHeight, I = window.getComputedStyle(p.value), R = Number.parseInt(
          I.borderTopWidth,
          10
        ), j = Number.parseInt(I.paddingTop, 10), z = Number.parseInt(
          I.borderBottomWidth,
          10
        ), Y = Number.parseInt(
          I.paddingBottom,
          10
        ), te = R + j + P + Y + z, ye = Math.min(
          v.value.offsetHeight * 5,
          te
        ), pe = window.getComputedStyle(h.value), q = Number.parseInt(pe.paddingTop, 10), ae = Number.parseInt(
          pe.paddingBottom,
          10
        ), le = M.top + M.height / 2 - Tt, Le = F - le, Ye = v.value.offsetHeight / 2, Qe = v.value.offsetTop + Ye, et = R + j + Qe, Nt = te - et;
        if (et <= le) {
          const Q = v.value === N[N.length - 1];
          c.value.style.bottom = "0px";
          const ie = p.value.clientHeight - h.value.offsetTop - h.value.offsetHeight, H = Math.max(
            Le,
            Ye + (Q ? ae : 0) + ie + z
          ), G = et + H;
          c.value.style.height = `${G}px`;
        } else {
          const Q = v.value === N[0];
          c.value.style.top = "0px";
          const ie = Math.max(
            le,
            R + h.value.offsetTop + (Q ? q : 0) + Ye
          ) + Nt;
          c.value.style.height = `${ie}px`, h.value.scrollTop = et - le + h.value.offsetTop;
        }
        c.value.style.margin = `${Tt}px 0`, c.value.style.minHeight = `${ye}px`, c.value.style.maxHeight = `${F}px`, a("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const k = E("");
    de(async () => {
      await re(), x(), p.value && (k.value = window.getComputedStyle(p.value).zIndex);
    });
    function $(M) {
      M && d.value === !0 && (x(), b == null || b(), d.value = !1);
    }
    return SC({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: $
    }), (M, S) => (g(), L("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: Qt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: k.value
      })
    }, [
      O(l(W), B({
        ref: l(f),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...M.$attrs, ...n }), {
        default: y(() => [
          C(M.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), MC = /* @__PURE__ */ _({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: Tt },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = be(e);
    return (n, a) => (g(), w(l(nr), B(l(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wr = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [$a, AC] = ge("SelectContent"), DC = /* @__PURE__ */ _({
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
    const n = e, a = t, r = Ca();
    xd(), yo(n.bodyLock);
    const { createCollection: o } = hr(), s = E();
    _o(s);
    const i = o(s), { search: u, handleTypeaheadSearch: d } = wd(i), c = E(), f = E(), p = E(), h = E(!1), v = E(!1);
    function m() {
      f.value && s.value && Zl([f.value, s.value]);
    }
    ee(h, () => {
      m();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: x } = r;
    Ce((S) => {
      if (!s.value)
        return;
      let D = { x: 0, y: 0 };
      const A = (F) => {
        var P, I;
        D = {
          x: Math.abs(
            Math.round(F.pageX) - (((P = x.value) == null ? void 0 : P.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(F.pageY) - (((I = x.value) == null ? void 0 : I.y) ?? 0)
          )
        };
      }, N = (F) => {
        var P;
        F.pointerType !== "touch" && (D.x <= 10 && D.y <= 10 ? F.preventDefault() : (P = s.value) != null && P.contains(F.target) || b(!1), document.removeEventListener("pointermove", A), x.value = null);
      };
      x.value !== null && (document.addEventListener("pointermove", A), document.addEventListener("pointerup", N, {
        capture: !0,
        once: !0
      })), S(() => {
        document.removeEventListener("pointermove", A), document.removeEventListener("pointerup", N, {
          capture: !0
        });
      });
    });
    function k(S) {
      const D = S.ctrlKey || S.altKey || S.metaKey;
      if (S.key === "Tab" && S.preventDefault(), !D && S.key.length === 1 && d(S.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(S.key)) {
        let A = i.value;
        if (["ArrowUp", "End"].includes(S.key) && (A = A.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const N = S.target, F = A.indexOf(N);
          A = A.slice(F + 1);
        }
        setTimeout(() => Zl(A)), S.preventDefault();
      }
    }
    const $ = T(() => n.position === "popper" ? n : {}), M = be($.value);
    return AC({
      content: s,
      viewport: c,
      onViewportChange: (S) => {
        c.value = S;
      },
      itemRefCallback: (S, D, A) => {
        var N, F;
        const P = !v.value && !A;
        (((N = r.modelValue) == null ? void 0 : N.value) !== void 0 && ((F = r.modelValue) == null ? void 0 : F.value) === D || P) && (f.value = S, P && (v.value = !0));
      },
      selectedItem: f,
      selectedItemText: p,
      onItemLeave: () => {
        var S;
        (S = s.value) == null || S.focus();
      },
      itemTextRefCallback: (S, D, A) => {
        var N, F;
        const P = !v.value && !A;
        (((N = r.modelValue) == null ? void 0 : N.value) !== void 0 && ((F = r.modelValue) == null ? void 0 : F.value) === D || P) && (p.value = S);
      },
      focusSelectedItem: m,
      position: n.position,
      isPositioned: h,
      searchRef: u
    }), (S, D) => (g(), w(l($i), {
      "as-child": "",
      onMountAutoFocus: D[6] || (D[6] = Ie(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: D[7] || (D[7] = (A) => {
        var N;
        a("closeAutoFocus", A), !A.defaultPrevented && ((N = l(r).triggerElement.value) == null || N.focus({ preventScroll: !0 }), A.preventDefault());
      })
    }, {
      default: y(() => [
        O(l(mr), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: D[2] || (D[2] = Ie(() => {
          }, ["prevent"])),
          onDismiss: D[3] || (D[3] = (A) => l(r).onOpenChange(!1)),
          onEscapeKeyDown: D[4] || (D[4] = (A) => a("escapeKeyDown", A)),
          onPointerDownOutside: D[5] || (D[5] = (A) => a("pointerDownOutside", A))
        }, {
          default: y(() => [
            (g(), w(ut(
              S.position === "popper" ? MC : TC
            ), B({ ...S.$attrs, ...l(M) }, {
              id: l(r).contentId,
              ref: (A) => {
                s.value = l(Ct)(A);
              },
              role: "listbox",
              "data-state": l(r).open.value ? "open" : "closed",
              dir: l(r).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: D[0] || (D[0] = Ie(() => {
              }, ["prevent"])),
              onPlaced: D[1] || (D[1] = (A) => h.value = !0),
              onKeydown: k
            }), {
              default: y(() => [
                C(S.$slots, "default")
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
}), EC = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return em(e.context), (t, n) => C(t.$slots, "default");
  }
}), BC = { key: 1 }, OC = /* @__PURE__ */ _({
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
    const n = e, a = he(n, t), r = Ca(), o = E();
    de(() => {
      o.value = new DocumentFragment();
    });
    const s = E(), i = T(() => n.forceMount || r.open.value);
    return (u, d) => {
      var c;
      return i.value ? (g(), w(l(gt), {
        key: 0,
        ref_key: "presenceRef",
        ref: s,
        present: !0
      }, {
        default: y(() => [
          O(DC, J(Z({ ...l(a), ...u.$attrs })), {
            default: y(() => [
              C(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = s.value) != null && c.present) && o.value ? (g(), L("div", BC, [
        (g(), w(ga, { to: o.value }, [
          O(EC, { context: l(r) }, {
            default: y(() => [
              C(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : se("", !0);
    };
  }
}), PC = /* @__PURE__ */ _({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), B({ "aria-hidden": "true" }, t), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [nm, IC] = ge("SelectItem"), RC = /* @__PURE__ */ _({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = me(t), a = Ca(), r = $a(wr), { forwardRef: o, currentElement: s } = K(), i = T(() => {
      var m;
      return ((m = a.modelValue) == null ? void 0 : m.value) === t.value;
    }), u = E(!1), d = E(t.textValue ?? ""), c = He(void 0, "radix-vue-select-item-text");
    async function f(m) {
      await re(), !(m != null && m.defaultPrevented) && (n.value || (a.onValueChange(t.value), a.onOpenChange(!1)));
    }
    async function p(m) {
      var b;
      await re(), !m.defaultPrevented && (n.value ? (b = r.onItemLeave) == null || b.call(r) : m.currentTarget.focus({ preventScroll: !0 }));
    }
    async function h(m) {
      var b;
      await re(), !m.defaultPrevented && m.currentTarget === Ue() && ((b = r.onItemLeave) == null || b.call(r));
    }
    async function v(m) {
      var b;
      await re(), !(m.defaultPrevented || ((b = r.searchRef) == null ? void 0 : b.value) !== "" && m.key === " ") && (CC.includes(m.key) && f(), m.key === " " && m.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return de(() => {
      s.value && r.itemRefCallback(
        s.value,
        t.value,
        t.disabled
      );
    }), IC({
      value: t.value,
      disabled: n,
      textId: c,
      isSelected: i,
      onItemTextChange: (m) => {
        d.value = ((d.value || (m == null ? void 0 : m.textContent)) ?? "").trim();
      }
    }), (m, b) => (g(), w(l(W), {
      ref: l(o),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": l(c),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": l(n) || void 0,
      "data-disabled": l(n) ? "" : void 0,
      tabindex: l(n) ? void 0 : -1,
      as: m.as,
      "as-child": m.asChild,
      onFocus: b[0] || (b[0] = (x) => u.value = !0),
      onBlur: b[1] || (b[1] = (x) => u.value = !1),
      onPointerup: f,
      onPointerdown: b[2] || (b[2] = (x) => {
        x.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: b[3] || (b[3] = Ie(() => {
      }, ["prevent", "stop"])),
      onPointermove: p,
      onPointerleave: h,
      onKeydown: v
    }, {
      default: y(() => [
        C(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), FC = /* @__PURE__ */ _({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = nm();
    return (a, r) => l(n).isSelected.value ? (g(), w(l(W), B({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16)) : se("", !0);
  }
}), [VC, NC] = ge("SelectGroup"), LC = /* @__PURE__ */ _({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = He(void 0, "radix-vue-select-group");
    return NC({ id: n }), (a, r) => (g(), w(l(W), B({ role: "group" }, t, { "aria-labelledby": l(n) }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), zC = /* @__PURE__ */ _({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = VC({ id: "" });
    return (a, r) => (g(), w(l(W), B(t, {
      id: l(n).id
    }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), am = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Ca(), a = $a(wr), r = bC(), o = nm(), { forwardRef: s, currentElement: i } = K(), u = T(() => {
      var d;
      return rt("option", {
        key: o.value,
        value: o.value,
        disabled: o.disabled.value,
        textContent: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return de(() => {
      i.value && (o.onItemTextChange(i.value), a.itemTextRefCallback(
        i.value,
        o.value,
        o.disabled.value
      ), r.onNativeOptionAdd(u.value));
    }), pi(() => {
      r.onNativeOptionRemove(u.value);
    }), (d, c) => (g(), L(ue, null, [
      O(l(W), B({
        id: l(o).textId,
        ref: l(s)
      }, { ...t, ...d.$attrs }, { "data-item-text": "" }), {
        default: y(() => [
          C(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      l(o).isSelected.value && l(n).valueElement.value && !l(n).valueElementHasChildren.value ? (g(), w(ga, {
        key: 0,
        to: l(n).valueElement.value
      }, [
        C(d.$slots, "default")
      ], 8, ["to"])) : se("", !0)
    ], 64));
  }
}), qC = /* @__PURE__ */ _({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = me(t), a = qx(n), r = $a(wr), o = r.position === "item-aligned" ? Vd() : void 0, { forwardRef: s, currentElement: i } = K();
    de(() => {
      r == null || r.onViewportChange(i.value);
    });
    const u = E(0);
    function d(c) {
      const f = c.currentTarget, { shouldExpandOnScrollRef: p, contentWrapper: h } = o ?? {};
      if (p != null && p.value && h != null && h.value) {
        const v = Math.abs(u.value - f.scrollTop);
        if (v > 0) {
          const m = window.innerHeight - Tt * 2, b = Number.parseFloat(
            h.value.style.minHeight
          ), x = Number.parseFloat(h.value.style.height), k = Math.max(b, x);
          if (k < m) {
            const $ = k + v, M = Math.min(m, $), S = $ - M;
            h.value.style.height = `${M}px`, h.value.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, h.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = f.scrollTop;
    }
    return (c, f) => (g(), L(ue, null, [
      O(l(W), B({
        ref: l(s),
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
        onScroll: d
      }), {
        default: y(() => [
          C(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      O(l(W), {
        as: "style",
        nonce: l(a)
      }, {
        default: y(() => [
          oe(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), rm = /* @__PURE__ */ _({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: a } = hr(), r = a(), o = $a(wr), s = E(null);
    function i() {
      s.value !== null && (window.clearInterval(s.value), s.value = null);
    }
    Ce(() => {
      const c = r.value.find(
        (f) => f === Ue()
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function u() {
      s.value === null && (s.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    function d() {
      var c;
      (c = o.onItemLeave) == null || c.call(o), s.value === null && (s.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    return pi(() => i()), (c, f) => {
      var p;
      return g(), w(l(W), B({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (p = c.$parent) == null ? void 0 : p.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: f[0] || (f[0] = () => {
          i();
        })
      }), {
        default: y(() => [
          C(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), HC = /* @__PURE__ */ _({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = $a(wr), n = t.position === "item-aligned" ? Vd() : void 0, { forwardRef: a, currentElement: r } = K(), o = E(!1);
    return Ce((s) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          o.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), s(() => c.removeEventListener("scroll", d));
      }
    }), ee(r, () => {
      r.value && (n == null || n.onScrollButtonChange(r.value));
    }), (s, i) => o.value ? (g(), w(rm, {
      key: 0,
      ref: l(a),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = l(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : se("", !0);
  }
}), WC = /* @__PURE__ */ _({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = $a(wr), n = t.position === "item-aligned" ? Vd() : void 0, { forwardRef: a, currentElement: r } = K(), o = E(!1);
    return Ce((s) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          const f = c.scrollHeight - c.clientHeight;
          o.value = Math.ceil(c.scrollTop) < f;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), s(() => c.removeEventListener("scroll", d));
      }
    }), ee(r, () => {
      r.value && (n == null || n.onScrollButtonChange(r.value));
    }), (s, i) => o.value ? (g(), w(rm, {
      key: 0,
      ref: l(a),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = l(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : se("", !0);
  }
}), UC = /* @__PURE__ */ _({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = K(), a = Ca(), r = xh();
    return g0(() => {
      var o;
      const s = !!xi((o = r == null ? void 0 : r.default) == null ? void 0 : o.call(r)).length;
      a.onValueElementHasChildrenChange(s);
    }), de(() => {
      a.valueElement = n;
    }), (o, s) => (g(), w(l(W), {
      ref: l(t),
      as: o.as,
      "as-child": o.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: y(() => {
        var i;
        return [
          l(tm)((i = l(a).modelValue) == null ? void 0 : i.value) ? (g(), L(ue, { key: 0 }, [
            oe(ce(o.placeholder), 1)
          ], 64)) : C(o.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), KC = /* @__PURE__ */ _({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (g(), w(l(W), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: y(() => [
        C(t.$slots, "default", {}, () => [
          oe("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), jC = /* @__PURE__ */ _({
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
    const r = T(
      () => a(t.orientation) ? t.orientation : "horizontal"
    ), o = T(
      () => r.value === "vertical" ? t.orientation : void 0
    ), s = T(
      () => t.decorative ? { role: "none" } : { "aria-orientation": o.value, role: "separator" }
    );
    return (i, u) => (g(), w(l(W), B({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": r.value
    }, s.value), {
      default: y(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), YC = /* @__PURE__ */ _({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(jC, J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function GC(e = [], t, n) {
  const a = [...e];
  return a[n] = t, a.sort((r, o) => r - o);
}
function om(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Is(a, 0, 100);
}
function XC(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function JC(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((r) => Math.abs(r - t)), a = Math.min(...n);
  return n.indexOf(a);
}
function ZC(e, t, n) {
  const a = e / 2, r = Nd([0, 50], [0, a]);
  return (a - r(t) * n) * n;
}
function QC(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function e$(e, t) {
  if (t > 0) {
    const n = QC(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Nd(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const a = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + a * (n - e[0]);
  };
}
function t$(e) {
  return (String(e).split(".")[1] || "").length;
}
function n$(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const sm = ["PageUp", "PageDown"], im = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], lm = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [um, dm] = ge(["SliderVertical", "SliderHorizontal"]), cm = /* @__PURE__ */ _({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = Ti();
    return (o, s) => (g(), w(l(W), B({ "data-slider-impl": "" }, n, {
      onKeydown: s[0] || (s[0] = (i) => {
        i.key === "Home" ? (a("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (a("endKeyDown", i), i.preventDefault()) : l(sm).concat(l(im)).includes(i.key) && (a("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: s[1] || (s[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), l(r).thumbElements.value.includes(u) ? u.focus() : a("slideStart", i);
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
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), a$ = /* @__PURE__ */ _({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, { max: r, min: o, dir: s, inverted: i } = me(n), { forwardRef: u, currentElement: d } = K(), c = E(), f = T(() => (s == null ? void 0 : s.value) === "ltr" && !i.value || (s == null ? void 0 : s.value) !== "ltr" && i.value);
    function p(h) {
      const v = c.value || d.value.getBoundingClientRect(), m = [0, v.width], b = f.value ? [o.value, r.value] : [r.value, o.value], x = Nd(m, b);
      return c.value = v, x(h - v.left);
    }
    return dm({
      startEdge: f.value ? "left" : "right",
      endEdge: f.value ? "right" : "left",
      direction: f.value ? 1 : -1,
      size: "width"
    }), (h, v) => (g(), w(cm, {
      ref: l(u),
      dir: l(s),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: v[0] || (v[0] = (m) => {
        const b = p(m.clientX);
        a("slideStart", b);
      }),
      onSlideMove: v[1] || (v[1] = (m) => {
        const b = p(m.clientX);
        a("slideMove", b);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        c.value = void 0, a("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (m) => {
        const b = f.value ? "from-left" : "from-right", x = l(lm)[b].includes(m.key);
        a("stepKeyDown", m, x ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (m) => a("endKeyDown", m)),
      onHomeKeyDown: v[5] || (v[5] = (m) => a("homeKeyDown", m))
    }, {
      default: y(() => [
        C(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), r$ = /* @__PURE__ */ _({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, { max: r, min: o, inverted: s } = me(n), { forwardRef: i, currentElement: u } = K(), d = E(), c = T(() => !s.value);
    function f(p) {
      const h = d.value || u.value.getBoundingClientRect(), v = [0, h.height], m = c.value ? [r.value, o.value] : [o.value, r.value], b = Nd(v, m);
      return d.value = h, b(p - h.top);
    }
    return dm({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (p, h) => (g(), w(cm, {
      ref: l(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: h[0] || (h[0] = (v) => {
        const m = f(v.clientY);
        a("slideStart", m);
      }),
      onSlideMove: h[1] || (h[1] = (v) => {
        const m = f(v.clientY);
        a("slideMove", m);
      }),
      onSlideEnd: h[2] || (h[2] = () => {
        d.value = void 0, a("slideEnd");
      }),
      onStepKeyDown: h[3] || (h[3] = (v) => {
        const m = c.value ? "from-bottom" : "from-top", b = l(lm)[m].includes(v.key);
        a("stepKeyDown", v, b ? -1 : 1);
      }),
      onEndKeyDown: h[4] || (h[4] = (v) => a("endKeyDown", v)),
      onHomeKeyDown: h[5] || (h[5] = (v) => a("homeKeyDown", v))
    }, {
      default: y(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), o$ = ["value", "name", "disabled", "step"], [Ti, s$] = ge("SliderRoot"), i$ = /* @__PURE__ */ _({
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
    const n = e, a = t, { min: r, max: o, step: s, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = me(n), f = nn(c), { forwardRef: p, currentElement: h } = K(), v = bo(h);
    Bd();
    const m = De(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), b = E(0), x = E(m.value);
    function k(A) {
      const N = JC(m.value, A);
      S(A, N);
    }
    function $(A) {
      S(A, b.value);
    }
    function M() {
      const A = x.value[b.value];
      m.value[b.value] !== A && a("valueCommit", as(m.value));
    }
    function S(A, N, { commit: F } = { commit: !1 }) {
      var P;
      const I = t$(s.value), R = n$(Math.round((A - r.value) / s.value) * s.value + r.value, I), j = Is(R, r.value, o.value), z = GC(m.value, j, N);
      if (e$(z, i.value * s.value)) {
        b.value = z.indexOf(j);
        const Y = String(z) !== String(m.value);
        Y && F && a("valueCommit", z), Y && ((P = D.value[b.value]) == null || P.focus(), m.value = z);
      }
    }
    const D = E([]);
    return s$({
      modelValue: m,
      valueIndexToChangeRef: b,
      thumbElements: D,
      orientation: u,
      min: r,
      max: o,
      disabled: d
    }), (A, N) => (g(), L(ue, null, [
      O(l(Od), null, {
        default: y(() => [
          (g(), w(ut(l(u) === "horizontal" ? a$ : r$), B(A.$attrs, {
            ref: l(p),
            "as-child": A.asChild,
            as: A.as,
            min: l(r),
            max: l(o),
            dir: l(f),
            inverted: A.inverted,
            "aria-disabled": l(d),
            "data-disabled": l(d) ? "" : void 0,
            onPointerdown: N[0] || (N[0] = () => {
              l(d) || (x.value = l(m));
            }),
            onSlideStart: N[1] || (N[1] = (F) => !l(d) && k(F)),
            onSlideMove: N[2] || (N[2] = (F) => !l(d) && $(F)),
            onSlideEnd: N[3] || (N[3] = (F) => !l(d) && M()),
            onHomeKeyDown: N[4] || (N[4] = (F) => !l(d) && S(l(r), 0, { commit: !0 })),
            onEndKeyDown: N[5] || (N[5] = (F) => !l(d) && S(l(o), l(m).length - 1, { commit: !0 })),
            onStepKeyDown: N[6] || (N[6] = (F, P) => {
              if (!l(d)) {
                const I = l(sm).includes(F.key) || F.shiftKey && l(im).includes(F.key) ? 10 : 1, R = b.value, j = l(m)[R], z = l(s) * I * P;
                S(j + z, R, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              C(A.$slots, "default", { modelValue: l(m) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      l(v) ? (g(!0), L(ue, { key: 0 }, Ae(l(m), (F, P) => (g(), L("input", {
        key: P,
        value: F,
        type: "number",
        style: { display: "none" },
        name: A.name ? A.name + (l(m).length > 1 ? "[]" : "") : void 0,
        disabled: l(d),
        step: l(s)
      }, null, 8, o$))), 128)) : se("", !0)
    ], 64));
  }
}), l$ = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ti(), a = um(), { forwardRef: r, currentElement: o } = K(), s = T(() => {
      var h, v;
      return (v = (h = n.modelValue) == null ? void 0 : h.value) == null ? void 0 : v[t.index];
    }), i = T(() => s.value === void 0 ? 0 : om(s.value, n.min.value ?? 0, n.max.value ?? 100)), u = T(() => {
      var h, v;
      return XC(t.index, ((v = (h = n.modelValue) == null ? void 0 : h.value) == null ? void 0 : v.length) ?? 0);
    }), d = kv(o), c = T(() => d[a.size].value), f = T(() => c.value ? ZC(c.value, i.value, a.direction) : 0), p = _d();
    return de(() => {
      n.thumbElements.value.push(o.value);
    }), Ke(() => {
      const h = n.thumbElements.value.findIndex((v) => v === o.value) ?? -1;
      n.thumbElements.value.splice(h, 1);
    }), (h, v) => (g(), w(l(Si), null, {
      default: y(() => [
        O(l(W), B(h.$attrs, {
          ref: l(r),
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
          onFocus: v[0] || (v[0] = () => {
            l(n).valueIndexToChangeRef.value = h.index;
          })
        }), {
          default: y(() => [
            C(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), u$ = /* @__PURE__ */ _({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = Pd(), { forwardRef: a, currentElement: r } = K(), o = T(() => r.value ? n().findIndex((s) => s.ref === r.value) : -1);
    return (s, i) => (g(), w(l$, B({ ref: l(a) }, t, { index: o.value }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), d$ = /* @__PURE__ */ _({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Ti();
    return K(), (n, a) => (g(), w(l(W), {
      "as-child": n.asChild,
      as: n.as,
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value
    }, {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), c$ = /* @__PURE__ */ _({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Ti(), n = um();
    K();
    const a = T(() => {
      var s, i;
      return (i = (s = t.modelValue) == null ? void 0 : s.value) == null ? void 0 : i.map(
        (u) => om(u, t.min.value, t.max.value)
      );
    }), r = T(() => t.modelValue.value.length > 1 ? Math.min(...a.value) : 0), o = T(() => 100 - Math.max(...a.value));
    return (s, i) => (g(), w(l(W), {
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value,
      "as-child": s.asChild,
      as: s.as,
      style: Qt({
        [l(n).startEdge]: `${r.value}%`,
        [l(n).endEdge]: `${o.value}%`
      })
    }, {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function f$() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
f$();
const p$ = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [h$, v$] = ge("SwitchRoot"), m$ = /* @__PURE__ */ _({
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
    const n = e, a = t, { disabled: r } = me(n), o = De(n, "checked", a, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function s() {
      r.value || (o.value = !o.value);
    }
    const { forwardRef: i, currentElement: u } = K(), d = bo(u), c = T(() => {
      var f;
      return n.id && u.value ? (f = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : f.innerText : void 0;
    });
    return v$({
      checked: o,
      toggleCheck: s,
      disabled: r
    }), (f, p) => (g(), L(ue, null, [
      O(l(W), B(f.$attrs, {
        id: f.id,
        ref: l(i),
        role: "switch",
        type: f.as === "button" ? "button" : void 0,
        value: f.value,
        "aria-label": f.$attrs["aria-label"] || c.value,
        "aria-checked": l(o),
        "aria-required": f.required,
        "data-state": l(o) ? "checked" : "unchecked",
        "data-disabled": l(r) ? "" : void 0,
        "as-child": f.asChild,
        as: f.as,
        disabled: l(r),
        onClick: s,
        onKeydown: Xe(Ie(s, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          C(f.$slots, "default", { checked: l(o) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      l(d) ? (g(), L("input", {
        key: 0,
        type: "checkbox",
        name: f.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: l(r),
        required: f.required,
        value: f.value,
        checked: !!l(o),
        "data-state": l(o) ? "checked" : "unchecked",
        "data-disabled": l(r) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, p$)) : se("", !0)
    ], 64));
  }
}), g$ = /* @__PURE__ */ _({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = h$();
    return K(), (n, a) => {
      var r;
      return g(), w(l(W), {
        "data-state": (r = l(t).checked) != null && r.value ? "checked" : "unchecked",
        "data-disabled": l(t).disabled.value ? "" : void 0,
        "as-child": n.asChild,
        as: n.as
      }, {
        default: y(() => [
          C(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [Ld, y$] = ge("TabsRoot"), b$ = /* @__PURE__ */ _({
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
    const n = e, a = t, { orientation: r, dir: o } = me(n), s = nn(o);
    K();
    const i = De(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = E();
    return y$({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: r,
      dir: s,
      activationMode: n.activationMode,
      baseId: He(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (g(), w(l(W), {
      dir: l(s),
      "data-orientation": l(r),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: y(() => [
        C(d.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), _$ = /* @__PURE__ */ _({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = me(t), { forwardRef: a, currentElement: r } = K(), o = Ld();
    return o.tabsList = r, (s, i) => (g(), w(l(Uv), {
      "as-child": "",
      orientation: l(o).orientation.value,
      dir: l(o).dir.value,
      loop: l(n)
    }, {
      default: y(() => [
        O(l(W), {
          ref: l(a),
          role: "tablist",
          "as-child": s.asChild,
          as: s.as,
          "aria-orientation": l(o).orientation.value
        }, {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function fm(e, t) {
  return `${e}-trigger-${t}`;
}
function pm(e, t) {
  return `${e}-content-${t}`;
}
const x$ = /* @__PURE__ */ _({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = K(), a = Ld(), r = T(() => fm(a.baseId, t.value)), o = T(() => pm(a.baseId, t.value)), s = T(() => t.value === a.modelValue.value), i = E(s.value);
    return de(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (g(), w(l(gt), {
      present: s.value,
      "force-mount": ""
    }, {
      default: y(({ present: c }) => [
        O(l(W), {
          id: o.value,
          ref: l(n),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": s.value ? "active" : "inactive",
          "data-orientation": l(a).orientation.value,
          "aria-labelledby": r.value,
          hidden: !c.value,
          tabindex: "0",
          style: Qt({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || s.value ? C(u.$slots, "default", { key: 0 }) : se("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), w$ = /* @__PURE__ */ _({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = K(), a = Ld(), r = T(() => fm(a.baseId, t.value)), o = T(() => pm(a.baseId, t.value)), s = T(() => t.value === a.modelValue.value);
    return (i, u) => (g(), w(l(ow), {
      "as-child": "",
      focusable: !i.disabled,
      active: s.value
    }, {
      default: y(() => [
        O(l(W), {
          id: r.value,
          ref: l(n),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": s.value ? "true" : "false",
          "aria-controls": o.value,
          "data-state": s.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": l(a).orientation.value,
          onMousedown: u[0] || (u[0] = Ie((d) => {
            !i.disabled && d.ctrlKey === !1 ? l(a).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = Xe((d) => l(a).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = l(a).activationMode !== "manual";
            !s.value && !i.disabled && d && l(a).changeModelValue(i.value);
          })
        }, {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [Mi, C$] = ge("ToastProvider"), $$ = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: a, swipeDirection: r, swipeThreshold: o } = me(t), s = E(), i = E(0), u = E(!1), d = E(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return C$({
      label: n,
      duration: a,
      swipeDirection: r,
      swipeThreshold: o,
      toastCount: i,
      viewport: s,
      onViewportChange(c) {
        s.value = c;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: d
    }), (c, f) => C(c.$slots, "default");
  }
}), k$ = "toast.swipeStart", S$ = "toast.swipeMove", T$ = "toast.swipeCancel", M$ = "toast.swipeEnd", eu = "toast.viewportPause", tu = "toast.viewportResume";
function zo(e, t, n) {
  const a = n.originalEvent.currentTarget, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(r);
}
function Sf(e, t, n = 0) {
  const a = Math.abs(e.x), r = Math.abs(e.y), o = a > r;
  return t === "left" || t === "right" ? o && a > n : !o && r > n;
}
function A$(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function hm(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), A$(n)) {
      const a = n.ariaHidden || n.hidden || n.style.display === "none", r = n.dataset.radixToastAnnounceExclude === "";
      if (!a)
        if (r) {
          const o = n.dataset.radixToastAnnounceAlt;
          o && t.push(o);
        } else
          t.push(...hm(n));
    }
  }), t;
}
const D$ = /* @__PURE__ */ _({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Mi(), n = L_(1e3), a = E(!1);
    return bv(() => {
      a.value = !0;
    }), (r, o) => l(n) || a.value ? (g(), w(l(Co), { key: 0 }, {
      default: y(() => [
        oe(ce(l(t).label.value) + " ", 1),
        C(r.$slots, "default")
      ]),
      _: 3
    })) : se("", !0);
  }
}), [E$, B$] = ge("ToastRoot"), O$ = /* @__PURE__ */ _({
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
    const n = e, a = t, { forwardRef: r, currentElement: o } = K(), s = Mi(), i = E(null), u = E(null), d = T(
      () => typeof n.duration == "number" ? n.duration : s.duration.value
    ), c = E(0), f = E(d.value), p = E(0), h = E(d.value), v = bv(() => {
      const k = (/* @__PURE__ */ new Date()).getTime() - c.value;
      h.value = Math.max(f.value - k, 0);
    }, { fpsLimit: 60 });
    function m(k) {
      k <= 0 || k === Number.POSITIVE_INFINITY || tn && (window.clearTimeout(p.value), c.value = (/* @__PURE__ */ new Date()).getTime(), p.value = window.setTimeout(b, k));
    }
    function b() {
      var k, $;
      (k = o.value) != null && k.contains(Ue()) && (($ = s.viewport.value) == null || $.focus()), s.isClosePausedRef.value = !1, a("close");
    }
    const x = T(() => o.value ? hm(o.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const k = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(k);
    }
    return Ce((k) => {
      const $ = s.viewport.value;
      if ($) {
        const M = () => {
          m(f.value), v.resume(), a("resume");
        }, S = () => {
          const D = (/* @__PURE__ */ new Date()).getTime() - c.value;
          f.value = f.value - D, window.clearTimeout(p.value), v.pause(), a("pause");
        };
        return $.addEventListener(eu, S), $.addEventListener(tu, M), () => {
          $.removeEventListener(eu, S), $.removeEventListener(tu, M);
        };
      }
    }), ee(() => [n.open, d.value], () => {
      f.value = d.value, n.open && !s.isClosePausedRef.value && m(d.value);
    }, { immediate: !0 }), bd("Escape", (k) => {
      a("escapeKeyDown", k), k.defaultPrevented || (s.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), de(() => {
      s.onToastAdd();
    }), Ke(() => {
      s.onToastRemove();
    }), B$({ onClose: b }), (k, $) => (g(), L(ue, null, [
      x.value ? (g(), w(D$, {
        key: 0,
        role: "alert",
        "aria-live": k.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          oe(ce(x.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : se("", !0),
      l(s).viewport.value ? (g(), w(ga, {
        key: 1,
        to: l(s).viewport.value
      }, [
        O(l(W), B({
          ref: l(r),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, k.$attrs, {
          as: k.as,
          "as-child": k.asChild,
          "data-state": k.open ? "open" : "closed",
          "data-swipe-direction": l(s).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: $[0] || ($[0] = Ie((M) => {
            i.value = { x: M.clientX, y: M.clientY };
          }, ["left"])),
          onPointermove: $[1] || ($[1] = (M) => {
            if (!i.value) return;
            const S = M.clientX - i.value.x, D = M.clientY - i.value.y, A = !!u.value, N = ["left", "right"].includes(l(s).swipeDirection.value), F = ["left", "up"].includes(l(s).swipeDirection.value) ? Math.min : Math.max, P = N ? F(0, S) : 0, I = N ? 0 : F(0, D), R = M.pointerType === "touch" ? 10 : 2, j = { x: P, y: I }, z = { originalEvent: M, delta: j };
            A ? (u.value = j, l(zo)(l(S$), (Y) => a("swipeMove", Y), z)) : l(Sf)(j, l(s).swipeDirection.value, R) ? (u.value = j, l(zo)(l(k$), (Y) => a("swipeStart", Y), z), M.target.setPointerCapture(M.pointerId)) : (Math.abs(S) > R || Math.abs(D) > R) && (i.value = null);
          }),
          onPointerup: $[2] || ($[2] = (M) => {
            const S = u.value, D = M.target;
            if (D.hasPointerCapture(M.pointerId) && D.releasePointerCapture(M.pointerId), u.value = null, i.value = null, S) {
              const A = M.currentTarget, N = { originalEvent: M, delta: S };
              l(Sf)(S, l(s).swipeDirection.value, l(s).swipeThreshold.value) ? l(zo)(l(M$), (F) => a("swipeEnd", F), N) : l(zo)(l(T$), (F) => a("swipeCancel", F), N), A == null || A.addEventListener("click", (F) => F.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            C(k.$slots, "default", {
              remaining: h.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : se("", !0)
    ], 64));
  }
}), P$ = /* @__PURE__ */ _({
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
    const n = e, a = t, { forwardRef: r } = K(), o = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (s, i) => (g(), w(l(gt), {
      present: s.forceMount || l(o)
    }, {
      default: y(() => [
        O(O$, B({
          ref: l(r),
          open: l(o),
          type: s.type,
          as: s.as,
          "as-child": s.asChild,
          duration: s.duration
        }, s.$attrs, {
          onClose: i[0] || (i[0] = (u) => o.value = !1),
          onPause: i[1] || (i[1] = (u) => a("pause")),
          onResume: i[2] || (i[2] = (u) => a("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => a("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            a("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (u) => {
            const { x: d, y: c } = u.detail.delta, f = u.currentTarget;
            f.setAttribute("data-swipe", "move"), f.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), f.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d = u.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d, y: c } = u.detail.delta, f = u.currentTarget;
            f.setAttribute("data-swipe", "end"), f.style.removeProperty("--radix-toast-swipe-move-x"), f.style.removeProperty("--radix-toast-swipe-move-y"), f.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), f.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), o.value = !1;
          })
        }), {
          default: y(({ remaining: u, duration: d }) => [
            C(s.$slots, "default", {
              remaining: u,
              duration: d,
              open: l(o)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), vm = /* @__PURE__ */ _({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (g(), w(l(W), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: y(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), mm = /* @__PURE__ */ _({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = E$(), { forwardRef: a } = K();
    return (r, o) => (g(), w(vm, { "as-child": "" }, {
      default: y(() => [
        O(l(W), B(t, {
          ref: l(a),
          type: r.as === "button" ? "button" : void 0,
          onClick: o[0] || (o[0] = (s) => l(n).onClose())
        }), {
          default: y(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), I$ = /* @__PURE__ */ _({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = K();
    return (n, a) => n.altText ? (g(), w(vm, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        O(mm, {
          ref: l(t),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : se("", !0);
  }
}), Tf = /* @__PURE__ */ _({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, a = Mi();
    return (r, o) => (g(), w(l(Co), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: o[0] || (o[0] = (s) => {
        var i;
        const u = s.relatedTarget;
        !((i = l(a).viewport.value) != null && i.contains(u)) && n("focusFromOutsideViewport");
      })
    }, {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }));
  }
}), R$ = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: a } = me(t), { forwardRef: r, currentElement: o } = K(), { createCollection: s } = hr(), i = s(o), u = Mi(), d = T(() => u.toastCount.value > 0), c = E(), f = E(), p = T(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    bd(n.value, () => {
      o.value.focus();
    }), de(() => {
      u.onViewportChange(o.value);
    }), Ce((v) => {
      const m = o.value;
      if (d.value && m) {
        const b = () => {
          if (!u.isClosePausedRef.value) {
            const S = new CustomEvent(eu);
            m.dispatchEvent(S), u.isClosePausedRef.value = !0;
          }
        }, x = () => {
          if (u.isClosePausedRef.value) {
            const S = new CustomEvent(tu);
            m.dispatchEvent(S), u.isClosePausedRef.value = !1;
          }
        }, k = (S) => {
          !m.contains(S.relatedTarget) && x();
        }, $ = () => {
          m.contains(Ue()) || x();
        }, M = (S) => {
          var D, A, N;
          const F = S.altKey || S.ctrlKey || S.metaKey;
          if (S.key === "Tab" && !F) {
            const P = Ue(), I = S.shiftKey;
            if (S.target === m && I) {
              (D = c.value) == null || D.focus();
              return;
            }
            const R = h({ tabbingDirection: I ? "backwards" : "forwards" }), j = R.findIndex((z) => z === P);
            ls(R.slice(j + 1)) ? S.preventDefault() : I ? (A = c.value) == null || A.focus() : (N = f.value) == null || N.focus();
          }
        };
        m.addEventListener("focusin", b), m.addEventListener("focusout", k), m.addEventListener("pointermove", b), m.addEventListener("pointerleave", $), m.addEventListener("keydown", M), window.addEventListener("blur", b), window.addEventListener("focus", x), v(() => {
          m.removeEventListener("focusin", b), m.removeEventListener("focusout", k), m.removeEventListener("pointermove", b), m.removeEventListener("pointerleave", $), m.removeEventListener("keydown", M), window.removeEventListener("blur", b), window.removeEventListener("focus", x);
        });
      }
    });
    function h({ tabbingDirection: v }) {
      const m = i.value.map((b) => {
        const x = [b, ...Sd(b)];
        return v === "forwards" ? x : x.reverse();
      });
      return (v === "forwards" ? m.reverse() : m).flat();
    }
    return (v, m) => (g(), w(l(I1), {
      role: "region",
      "aria-label": typeof l(a) == "string" ? l(a).replace("{hotkey}", p.value) : l(a)(p.value),
      tabindex: "-1",
      style: Qt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (g(), w(Tf, {
          key: 0,
          ref: (b) => {
            c.value = l(Ct)(b);
          },
          onFocusFromOutsideViewport: m[0] || (m[0] = () => {
            const b = h({
              tabbingDirection: "forwards"
            });
            l(ls)(b);
          })
        }, null, 512)) : se("", !0),
        O(l(W), B({
          ref: l(r),
          tabindex: "-1",
          as: v.as,
          "as-child": v.asChild
        }, v.$attrs), {
          default: y(() => [
            C(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (g(), w(Tf, {
          key: 1,
          ref: (b) => {
            f.value = l(Ct)(b);
          },
          onFocusFromOutsideViewport: m[1] || (m[1] = () => {
            const b = h({
              tabbingDirection: "backwards"
            });
            l(ls)(b);
          })
        }, null, 512)) : se("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), F$ = /* @__PURE__ */ _({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return K(), (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), V$ = /* @__PURE__ */ _({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return K(), (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gm = "tooltip.open", [zd, N$] = ge("TooltipProvider"), ym = /* @__PURE__ */ _({
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
    const t = e, { delayDuration: n, skipDelayDuration: a, disableHoverableContent: r, disableClosingTrigger: o, ignoreNonKeyboardFocus: s, disabled: i } = me(t);
    K();
    const u = E(!0), d = E(!1), { start: c, stop: f } = yd(() => {
      u.value = !0;
    }, a, { immediate: !1 });
    return N$({
      isOpenDelayed: u,
      delayDuration: n,
      onOpen() {
        f(), u.value = !1;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: r,
      disableClosingTrigger: o,
      disabled: i,
      ignoreNonKeyboardFocus: s
    }), (p, h) => C(p.$slots, "default");
  }
}), [Ai, L$] = ge("TooltipRoot"), z$ = /* @__PURE__ */ _({
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
    K();
    const r = zd(), o = T(() => n.disableHoverableContent ?? r.disableHoverableContent.value), s = T(() => n.disableClosingTrigger ?? r.disableClosingTrigger.value), i = T(() => n.disabled ?? r.disabled.value), u = T(() => n.delayDuration ?? r.delayDuration.value), d = T(() => n.ignoreNonKeyboardFocus ?? r.ignoreNonKeyboardFocus.value), c = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    ee(c, ($) => {
      r.onClose && ($ ? (r.onOpen(), document.dispatchEvent(new CustomEvent(gm))) : r.onClose());
    });
    const f = E(!1), p = E(), h = T(() => c.value ? f.value ? "delayed-open" : "instant-open" : "closed"), { start: v, stop: m } = yd(() => {
      f.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function b() {
      m(), f.value = !1, c.value = !0;
    }
    function x() {
      m(), c.value = !1;
    }
    function k() {
      v();
    }
    return L$({
      contentId: "",
      open: c,
      stateAttribute: h,
      trigger: p,
      onTriggerChange($) {
        p.value = $;
      },
      onTriggerEnter() {
        r.isOpenDelayed.value ? k() : b();
      },
      onTriggerLeave() {
        o.value ? x() : m();
      },
      onOpen: b,
      onClose: x,
      disableHoverableContent: o,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), ($, M) => (g(), w(l(yr), null, {
      default: y(() => [
        C($.$slots, "default", { open: l(c) })
      ]),
      _: 3
    }));
  }
}), q$ = /* @__PURE__ */ _({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Ai(), a = zd();
    n.contentId || (n.contentId = He(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: r, currentElement: o } = K(), s = E(!1), i = E(!1), u = T(() => n.disabled.value ? {} : {
      click: m,
      focus: h,
      pointermove: f,
      pointerleave: p,
      pointerdown: c,
      blur: v
    });
    de(() => {
      n.onTriggerChange(o.value);
    });
    function d() {
      setTimeout(() => {
        s.value = !1;
      }, 1);
    }
    function c() {
      s.value = !0, document.addEventListener("pointerup", d, { once: !0 });
    }
    function f(b) {
      b.pointerType !== "touch" && !i.value && !a.isPointerInTransitRef.value && (n.onTriggerEnter(), i.value = !0);
    }
    function p() {
      n.onTriggerLeave(), i.value = !1;
    }
    function h(b) {
      var x, k;
      s.value || n.ignoreNonKeyboardFocus.value && !((k = (x = b.target).matches) != null && k.call(x, ":focus-visible")) || n.onOpen();
    }
    function v() {
      n.onClose();
    }
    function m() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (b, x) => (g(), w(l(ki), { "as-child": "" }, {
      default: y(() => [
        O(l(W), B({
          ref: l(r),
          "aria-describedby": l(n).open.value ? l(n).contentId : void 0,
          "data-state": l(n).stateAttribute.value,
          as: b.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, y0(u.value)), {
          default: y(() => [
            C(b.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), bm = /* @__PURE__ */ _({
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
    const n = e, a = t, r = Ai(), { forwardRef: o } = K(), s = xh(), i = T(() => {
      var c;
      return (c = s.default) == null ? void 0 : c.call(s);
    }), u = T(() => {
      var c;
      if (n.ariaLabel)
        return n.ariaLabel;
      let f = "";
      function p(h) {
        typeof h.children == "string" && h.type !== Yu ? f += h.children : Array.isArray(h.children) && h.children.forEach((v) => p(v));
      }
      return (c = i.value) == null || c.forEach((h) => p(h)), f;
    }), d = T(() => {
      const { ariaLabel: c, ...f } = n;
      return f;
    });
    return de(() => {
      tr(window, "scroll", (c) => {
        const f = c.target;
        f != null && f.contains(r.trigger.value) && r.onClose();
      }), tr(window, gm, r.onClose);
    }), (c, f) => (g(), w(l(mr), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: f[0] || (f[0] = (p) => a("escapeKeyDown", p)),
      onPointerDownOutside: f[1] || (f[1] = (p) => {
        var h;
        l(r).disableClosingTrigger.value && (h = l(r).trigger.value) != null && h.contains(p.target) && p.preventDefault(), a("pointerDownOutside", p);
      }),
      onFocusOutside: f[2] || (f[2] = Ie(() => {
      }, ["prevent"])),
      onDismiss: f[3] || (f[3] = (p) => l(r).onClose())
    }, {
      default: y(() => [
        O(l(nr), B({
          ref: l(o),
          "data-state": l(r).stateAttribute.value
        }, { ...c.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: y(() => [
            C(c.$slots, "default"),
            O(l(Co), {
              id: l(r).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                oe(ce(u.value), 1)
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
}), H$ = /* @__PURE__ */ _({
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
    const t = be(e), { forwardRef: n, currentElement: a } = K(), { trigger: r, onClose: o } = Ai(), s = zd(), { isPointerInTransit: i, onPointerExit: u } = Q_(r, a);
    return s.isPointerInTransitRef = i, u(() => {
      o();
    }), (d, c) => (g(), w(bm, B({ ref: l(n) }, l(t)), {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), W$ = /* @__PURE__ */ _({
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
    const n = e, a = t, r = Ai(), o = he(n, a), { forwardRef: s } = K();
    return (i, u) => (g(), w(l(gt), {
      present: i.forceMount || l(r).open.value
    }, {
      default: y(() => [
        (g(), w(ut(l(r).disableHoverableContent.value ? bm : H$), B({ ref: l(s) }, l(o)), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), U$ = /* @__PURE__ */ _({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(xo), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xF = /* @__PURE__ */ _({
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
    const r = he(e, t);
    return (o, s) => (g(), w(l($1), J(Z(l(r))), {
      default: y(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function _m(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = _m(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function xm() {
  for (var e, t, n = 0, a = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = _m(e)) && (a && (a += " "), a += t);
  return a;
}
const qd = "-", K$ = (e) => {
  const t = Y$(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(qd);
      return i[0] === "" && i.length !== 1 && i.shift(), wm(i, t) || j$(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const u = n[s] || [];
      return i && a[s] ? [...u, ...a[s]] : u;
    }
  };
}, wm = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], a = t.nextPart.get(n), r = a ? wm(e.slice(1), a) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const o = e.join(qd);
  return (s = t.validators.find(({
    validator: i
  }) => i(o))) == null ? void 0 : s.classGroupId;
}, Mf = /^\[(.+)\]$/, j$ = (e) => {
  if (Mf.test(e)) {
    const t = Mf.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Y$ = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return X$(Object.entries(e.classGroups), n).forEach(([o, s]) => {
    nu(s, a, o, t);
  }), a;
}, nu = (e, t, n, a) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const o = r === "" ? t : Af(t, r);
      o.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (G$(r)) {
        nu(r(a), t, n, a);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([o, s]) => {
      nu(s, Af(t, o), n, a);
    });
  });
}, Af = (e, t) => {
  let n = e;
  return t.split(qd).forEach((a) => {
    n.nextPart.has(a) || n.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(a);
  }), n;
}, G$ = (e) => e.isThemeGetter, X$ = (e, t) => t ? e.map(([n, a]) => {
  const r = a.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([s, i]) => [t + s, i])) : o);
  return [n, r];
}) : e, J$ = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const r = (o, s) => {
    n.set(o, s), t++, t > e && (t = 0, a = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let s = n.get(o);
      if (s !== void 0)
        return s;
      if ((s = a.get(o)) !== void 0)
        return r(o, s), s;
    },
    set(o, s) {
      n.has(o) ? n.set(o, s) : r(o, s);
    }
  };
}, Cm = "!", Z$ = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, a = t.length === 1, r = t[0], o = t.length, s = (i) => {
    const u = [];
    let d = 0, c = 0, f;
    for (let b = 0; b < i.length; b++) {
      let x = i[b];
      if (d === 0) {
        if (x === r && (a || i.slice(b, b + o) === t)) {
          u.push(i.slice(c, b)), c = b + o;
          continue;
        }
        if (x === "/") {
          f = b;
          continue;
        }
      }
      x === "[" ? d++ : x === "]" && d--;
    }
    const p = u.length === 0 ? i : i.substring(c), h = p.startsWith(Cm), v = h ? p.substring(1) : p, m = f && f > c ? f - c : void 0;
    return {
      modifiers: u,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: m
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: s
  }) : s;
}, Q$ = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...n.sort(), a), n = []) : n.push(a);
  }), t.push(...n.sort()), t;
}, ek = (e) => ({
  cache: J$(e.cacheSize),
  parseClassName: Z$(e),
  ...K$(e)
}), tk = /\s+/, nk = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: a,
    getConflictingClassGroupIds: r
  } = t, o = [], s = e.trim().split(tk);
  let i = "";
  for (let u = s.length - 1; u >= 0; u -= 1) {
    const d = s[u], {
      modifiers: c,
      hasImportantModifier: f,
      baseClassName: p,
      maybePostfixModifierPosition: h
    } = n(d);
    let v = !!h, m = a(v ? p.substring(0, h) : p);
    if (!m) {
      if (!v) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (m = a(p), !m) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      v = !1;
    }
    const b = Q$(c).join(":"), x = f ? b + Cm : b, k = x + m;
    if (o.includes(k))
      continue;
    o.push(k);
    const $ = r(m, v);
    for (let M = 0; M < $.length; ++M) {
      const S = $[M];
      o.push(x + S);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function ak() {
  let e = 0, t, n, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = $m(t)) && (a && (a += " "), a += n);
  return a;
}
const $m = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = $m(e[a])) && (n && (n += " "), n += t);
  return n;
};
function rk(e, ...t) {
  let n, a, r, o = s;
  function s(u) {
    const d = t.reduce((c, f) => f(c), e());
    return n = ek(d), a = n.cache.get, r = n.cache.set, o = i, i(u);
  }
  function i(u) {
    const d = a(u);
    if (d)
      return d;
    const c = nk(u, n);
    return r(u, c), c;
  }
  return function() {
    return o(ak.apply(null, arguments));
  };
}
const Be = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, km = /^\[(?:([a-z-]+):)?(.+)\]$/i, ok = /^\d+\/\d+$/, sk = /* @__PURE__ */ new Set(["px", "full", "screen"]), ik = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, uk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, dk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ck = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, on = (e) => Ha(e) || sk.has(e) || ok.test(e), Bn = (e) => Cr(e, "length", bk), Ha = (e) => !!e && !Number.isNaN(Number(e)), yl = (e) => Cr(e, "number", Ha), Ar = (e) => !!e && Number.isInteger(Number(e)), fk = (e) => e.endsWith("%") && Ha(e.slice(0, -1)), ve = (e) => km.test(e), On = (e) => ik.test(e), pk = /* @__PURE__ */ new Set(["length", "size", "percentage"]), hk = (e) => Cr(e, pk, Sm), vk = (e) => Cr(e, "position", Sm), mk = /* @__PURE__ */ new Set(["image", "url"]), gk = (e) => Cr(e, mk, xk), yk = (e) => Cr(e, "", _k), Dr = () => !0, Cr = (e, t, n) => {
  const a = km.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : n(a[2]) : !1;
}, bk = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lk.test(e) && !uk.test(e)
), Sm = () => !1, _k = (e) => dk.test(e), xk = (e) => ck.test(e), wk = () => {
  const e = Be("colors"), t = Be("spacing"), n = Be("blur"), a = Be("brightness"), r = Be("borderColor"), o = Be("borderRadius"), s = Be("borderSpacing"), i = Be("borderWidth"), u = Be("contrast"), d = Be("grayscale"), c = Be("hueRotate"), f = Be("invert"), p = Be("gap"), h = Be("gradientColorStops"), v = Be("gradientColorStopPositions"), m = Be("inset"), b = Be("margin"), x = Be("opacity"), k = Be("padding"), $ = Be("saturate"), M = Be("scale"), S = Be("sepia"), D = Be("skew"), A = Be("space"), N = Be("translate"), F = () => ["auto", "contain", "none"], P = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", ve, t], R = () => [ve, t], j = () => ["", on, Bn], z = () => ["auto", Ha, ve], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], te = () => ["solid", "dashed", "dotted", "double", "none"], ye = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], pe = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], q = () => ["", "0", ve], ae = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], le = () => [Ha, ve];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Dr],
      spacing: [on, Bn],
      blur: ["none", "", On, ve],
      brightness: le(),
      borderColor: [e],
      borderRadius: ["none", "", "full", On, ve],
      borderSpacing: R(),
      borderWidth: j(),
      contrast: le(),
      grayscale: q(),
      hueRotate: le(),
      invert: q(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [fk, Bn],
      inset: I(),
      margin: I(),
      opacity: le(),
      padding: R(),
      saturate: le(),
      scale: le(),
      sepia: q(),
      skew: le(),
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
        aspect: ["auto", "square", "video", ve]
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
        columns: [On]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ae()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ae()
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
        object: [...Y(), ve]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
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
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
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
        z: ["auto", Ar, ve]
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
        flex: ["1", "auto", "initial", "none", ve]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: q()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: q()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ar, ve]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Dr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ar, ve]
        }, ve]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Dr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ar, ve]
        }, ve]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        "auto-cols": ["auto", "min", "max", "fr", ve]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ve]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ve, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ve, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ve, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [On]
        }, On]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ve, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ve, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ve, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ve, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", On, Bn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", yl]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Dr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ve]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ha, yl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", on, ve]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ve]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ve]
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
        "placeholder-opacity": [x]
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
        "text-opacity": [x]
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
        decoration: ["auto", "from-font", on, Bn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", on, ve]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ve]
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
        content: ["none", ve]
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
        "bg-opacity": [x]
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
        bg: [...Y(), vk]
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
        bg: ["auto", "cover", "contain", hk]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, gk]
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
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
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
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
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
        "border-opacity": [x]
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
        "divide-opacity": [x]
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
        border: [r]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [r]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [r]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [r]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [r]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [r]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [r]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [r]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [r]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [r]
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
        "outline-offset": [on, ve]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [on, Bn]
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
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [on, Bn]
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
        shadow: ["", "inner", "none", On, yk]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Dr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ye(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ye()
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
        "drop-shadow": ["", "none", On, ve]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
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
        invert: [f]
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
        "backdrop-grayscale": [d]
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
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ve]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: le()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ve]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: le()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ve]
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
        scale: [M]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [M]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [M]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ar, ve]
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
        "skew-x": [D]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [D]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ve]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ve]
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
        "will-change": ["auto", "scroll", "contents", "transform", ve]
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
        stroke: [on, Bn, yl]
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
}, Ck = /* @__PURE__ */ rk(wk);
function V(...e) {
  return Ck(xm(e));
}
const wF = /* @__PURE__ */ _({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(T1), B(n.value, { class: "text-accordion-text data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all" }), {
      default: y(() => [
        _e("div", {
          class: X(l(V)("pb-4 pt-0", t.class))
        }, [
          C(a.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), CF = /* @__PURE__ */ _({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(S1), B(l(a), {
      class: l(V)("border-accordion-border border-b", t.class)
    }), {
      default: y(() => [
        C(r.$slots, "default")
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
const $k = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var qo = {
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
const kk = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: a, iconNode: r, name: o, class: s, ...i }, { slots: u }) => rt(
  "svg",
  {
    ...qo,
    width: e || qo.width,
    height: e || qo.height,
    stroke: a || qo.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${$k(o ?? "icon")}`],
    ...i
  },
  [...r.map((d) => rt(...d)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = (e, t) => (n, { slots: a }) => rt(
  kk,
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
const Sk = Je("CalendarIcon", [
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
const Hd = Je("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Di = Je("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tk = Je("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wd = Je("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mk = Je("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ak = Je("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dk = Je("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ek = Je("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tm = Je("EllipsisIcon", [
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
const Bk = Je("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ok = Je("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pk = Je("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ik = Je("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rk = Je("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fk = Je("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vk = Je("SunIcon", [
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
const Ei = Je("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), $F = /* @__PURE__ */ _({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(M1), { class: "flex" }, {
      default: y(() => [
        O(l(A1), B(n.value, {
          class: l(V)(
            "text-heading flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            C(a.$slots, "default"),
            C(a.$slots, "icon", {}, () => [
              O(l(Di), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Df = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ef = xm, Sn = (e, t) => (n) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null) return Ef(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: r, defaultVariants: o } = t, s = Object.keys(r).map((d) => {
    const c = n == null ? void 0 : n[d], f = o == null ? void 0 : o[d];
    if (c === null) return null;
    const p = Df(c) || Df(f);
    return r[d][p];
  }), i = n && Object.entries(n).reduce((d, c) => {
    let [f, p] = c;
    return p === void 0 || (d[f] = p), d;
  }, {}), u = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((d, c) => {
    let { class: f, className: p, ...h } = c;
    return Object.entries(h).every((v) => {
      let [m, b] = v;
      return Array.isArray(b) ? b.includes({
        ...o,
        ...i
      }[m]) : {
        ...o,
        ...i
      }[m] === b;
    }) ? [
      ...d,
      f,
      p
    ] : d;
  }, []);
  return Ef(e, s, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, kF = /* @__PURE__ */ _({
  __name: "Alert",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "alert",
      class: X(l(V)(l(Nk)({ variant: e.variant }), t.class)),
      role: "alert"
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), SF = /* @__PURE__ */ _({
  __name: "AlertDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "alert-description",
      class: X(l(V)("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), TF = /* @__PURE__ */ _({
  __name: "AlertTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "alert-title",
      class: X(l(V)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), Nk = Sn(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current border-destructive *:data-[slot=alert-description]:text-destructive/90",
        warning: "text-warning bg-card [&>svg]:text-current border-warning *:data-[slot=alert-description]:text-warning/90",
        info: "text-blue-500 bg-card [&>svg]:text-current border-blue-700 *:data-[slot=alert-description]:text-blue-500/90",
        success: "text-green-500 bg-card [&>svg]:text-current border-green-700 *:data-[slot=alert-description]:text-green-500/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Bf(e) {
  return typeof e == "string" ? `'${e}'` : new Lk().serialize(e);
}
const Lk = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      qc(this, t, /* @__PURE__ */ new Map());
    }
    compare(a, r) {
      const o = typeof a, s = typeof r;
      return o === "string" && s === "string" ? a.localeCompare(r) : o === "number" && s === "number" ? a - r : String.prototype.localeCompare.call(this.serialize(a, !0), this.serialize(r, !0));
    }
    serialize(a, r) {
      if (a === null) return "null";
      switch (typeof a) {
        case "string":
          return r ? a : `'${a}'`;
        case "bigint":
          return `${a}n`;
        case "object":
          return this.$object(a);
        case "function":
          return this.$function(a);
      }
      return String(a);
    }
    serializeObject(a) {
      const r = Object.prototype.toString.call(a);
      if (r !== "[object Object]") return this.serializeBuiltInType(r.length < 10 ? `unknown:${r}` : r.slice(8, -1), a);
      const o = a.constructor, s = o === Object || o === void 0 ? "" : o.name;
      if (s !== "" && globalThis[s] === o) return this.serializeBuiltInType(s, a);
      if (typeof a.toJSON == "function") {
        const i = a.toJSON();
        return s + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
      }
      return this.serializeObjectEntries(s, Object.entries(a));
    }
    serializeBuiltInType(a, r) {
      const o = this["$" + a];
      if (o) return o.call(this, r);
      if (typeof (r == null ? void 0 : r.entries) == "function") return this.serializeObjectEntries(a, r.entries());
      throw new Error(`Cannot serialize ${a}`);
    }
    serializeObjectEntries(a, r) {
      const o = Array.from(r).sort((i, u) => this.compare(i[0], u[0]));
      let s = `${a}{`;
      for (let i = 0; i < o.length; i++) {
        const [u, d] = o[i];
        s += `${this.serialize(u, !0)}:${this.serialize(d)}`, i < o.length - 1 && (s += ",");
      }
      return s + "}";
    }
    $object(a) {
      let r = Tr(this, t).get(a);
      return r === void 0 && (Tr(this, t).set(a, `#${Tr(this, t).size}`), r = this.serializeObject(a), Tr(this, t).set(a, r)), r;
    }
    $function(a) {
      const r = Function.prototype.toString.call(a);
      return r.slice(-15) === "[native code] }" ? `${a.name || ""}()[native]` : `${a.name}(${a.length})${r.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(a) {
      let r = "[";
      for (let o = 0; o < a.length; o++) r += this.serialize(a[o]), o < a.length - 1 && (r += ",");
      return r + "]";
    }
    $Date(a) {
      try {
        return `Date(${a.toISOString()})`;
      } catch {
        return "Date(null)";
      }
    }
    $ArrayBuffer(a) {
      return `ArrayBuffer[${new Uint8Array(a).join(",")}]`;
    }
    $Set(a) {
      return `Set${this.$Array(Array.from(a).sort((r, o) => this.compare(r, o)))}`;
    }
    $Map(a) {
      return this.serializeObjectEntries("Map", a.entries());
    }
  }
  t = new WeakMap();
  for (const n of ["Error", "RegExp", "URL"]) e.prototype["$" + n] = function(a) {
    return `${n}(${a})`;
  };
  for (const n of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) e.prototype["$" + n] = function(a) {
    return `${n}[${a.join(",")}]`;
  };
  for (const n of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + n] = function(a) {
    return `${n}[${a.join("n,")}${a.length > 0 ? "n" : ""}]`;
  };
  return e;
}();
function au(e, t) {
  return e === t || Bf(e) === Bf(t);
}
function zk(e, t, n) {
  const a = e.findIndex((i) => au(i, t)), r = e.findIndex((i) => au(i, n));
  if (a === -1 || r === -1) return [];
  const [o, s] = [a, r].sort((i, u) => i - u);
  return e.slice(o, s + 1);
}
function $t(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(s) => {
    const i = Gn(a, s);
    if (i || i === null) return i;
    throw new Error(`Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (s) => (At(a, s), s)];
}
function sa() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function Ud(e, t, n) {
  const a = n.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(r);
}
function Kd(e) {
  return e ? e.flatMap((t) => t.type === ue ? Kd(t.children) : [t]) : [];
}
const qk = ["INPUT", "TEXTAREA"];
function Mm(e, t, n, a = {}) {
  if (!t || a.enableIgnoredElement && qk.includes(t.nodeName)) return null;
  const { arrowKeyOptions: r = "both", attributeName: o = "[data-reka-collection-item]", itemsArray: s = [], loop: i = !0, dir: u = "ltr", preventScroll: d = !0, focus: c = !1 } = a, [f, p, h, v, m, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], x = h || v, k = f || p;
  if (!m && !b && (!x && !k || r === "vertical" && k || r === "horizontal" && x)) return null;
  const $ = s;
  if (!$.length) return null;
  d && e.preventDefault();
  let M = null;
  return k || x ? M = Am($, t, {
    goForward: x ? v : u === "ltr" ? f : p,
    loop: i
  }) : m ? M = $.at(0) || null : b && (M = $.at(-1) || null), c && (M == null || M.focus()), M;
}
function Am(e, t, n, a = e.length) {
  if (--a === 0) return null;
  const r = e.indexOf(t), o = n.goForward ? r + 1 : r - 1;
  if (!n.loop && (o < 0 || o >= e.length)) return null;
  const s = (o + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Am(e, i, n, a) : i : null;
}
const [Bi] = $t("ConfigProvider");
function Hk(e, t) {
  var n;
  const a = mn();
  return Ce(() => {
    a.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), fr(a);
}
function So(e) {
  return ci() ? (fi(e), !0) : !1;
}
function us() {
  const e = /* @__PURE__ */ new Set(), t = (o) => {
    e.delete(o);
  };
  return {
    on: (o) => {
      e.add(o);
      const s = () => t(o);
      return So(s), {
        off: s
      };
    },
    off: t,
    trigger: (...o) => Promise.all(Array.from(e).map((s) => s(...o))),
    clear: () => {
      e.clear();
    }
  };
}
function Wk(e) {
  let t = 0, n, a;
  const r = () => {
    t -= 1, a && t <= 0 && (a.stop(), n = void 0, a = void 0);
  };
  return (...o) => (t += 1, a || (a = Zu(!0), n = a.run(() => e(...o))), So(r), n);
}
function Uk(e) {
  if (!dt(e))
    return Wn(e);
  const t = new Proxy({}, {
    get(n, a, r) {
      return l(Reflect.get(e.value, a, r));
    },
    set(n, a, r) {
      return dt(e.value[a]) && !dt(r) ? e.value[a].value = r : e.value[a] = r, !0;
    },
    deleteProperty(n, a) {
      return Reflect.deleteProperty(e.value, a);
    },
    has(n, a) {
      return Reflect.has(e.value, a);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return Wn(t);
}
function Kk(e) {
  return Uk(T(e));
}
function jk(e, ...t) {
  const n = t.flat(), a = n[0];
  return Kk(() => Object.fromEntries(typeof a == "function" ? Object.entries(me(e)).filter(([r, o]) => !a(Ee(o), r)) : Object.entries(me(e)).filter((r) => !n.includes(r[0]))));
}
const Jt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Yk = (e) => typeof e < "u", Gk = Object.prototype.toString, Xk = (e) => Gk.call(e) === "[object Object]", Of = () => {
}, Pf = /* @__PURE__ */ Jk();
function Jk() {
  var e, t;
  return Jt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Zk(e, t) {
  function n(...a) {
    return new Promise((r, o) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(r).catch(o);
    });
  }
  return n;
}
function Qk(e, t = {}) {
  let n, a, r = Of;
  const o = (u) => {
    clearTimeout(u), r(), r = Of;
  };
  let s;
  return (u) => {
    const d = Ee(e), c = Ee(t.maxWait);
    return n && o(n), d <= 0 || c !== void 0 && c <= 0 ? (a && (o(a), a = null), Promise.resolve(u())) : new Promise((f, p) => {
      r = t.rejectOnCancel ? p : f, s = u, c && !a && (a = setTimeout(() => {
        n && o(n), a = null, f(s());
      }, c)), n = setTimeout(() => {
        a && o(a), a = null, f(u());
      }, d);
    });
  };
}
function e2(e) {
  return We();
}
function bl(e) {
  return Array.isArray(e) ? e : [e];
}
function Oi(e, t = 1e4) {
  return Gu((n, a) => {
    let r = Ee(e), o;
    const s = () => setTimeout(() => {
      r = Ee(e), a();
    }, Ee(t));
    return So(() => {
      clearTimeout(o);
    }), {
      get() {
        return n(), r;
      },
      set(i) {
        r = i, a(), clearTimeout(o), o = s();
      }
    };
  });
}
function t2(e, t = 200, n = {}) {
  return Zk(
    Qk(t, n),
    e
  );
}
const n2 = Ee;
function a2(e, t) {
  e2() && pi(e, t);
}
function r2(e, t, n) {
  return ee(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Pi = Jt ? window : void 0;
function Zt(e) {
  var t;
  const n = Ee(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Dm(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, a = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), r = T(() => {
    const i = bl(Ee(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), o = r2(
    () => {
      var i, u;
      return [
        (u = (i = r.value) == null ? void 0 : i.map((d) => Zt(d))) != null ? u : [Pi].filter((d) => d != null),
        bl(Ee(r.value ? e[1] : e[0])),
        bl(l(r.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Ee(r.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, c]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const f = Xk(c) ? { ...c } : c;
      t.push(
        ...i.flatMap(
          (p) => u.flatMap(
            (h) => d.map((v) => a(p, h, v, f))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    o(), n();
  };
  return So(n), s;
}
function Em() {
  const e = mn(!1), t = We();
  return t && de(() => {
    e.value = !0;
  }, t), e;
}
function o2(e) {
  const t = Em();
  return T(() => (t.value, !!e()));
}
function s2(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function i2(...e) {
  let t, n, a = {};
  e.length === 3 ? (t = e[0], n = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], a = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = Pi,
    eventName: o = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = a, u = s2(t);
  return Dm(r, o, (c) => {
    c.repeat && Ee(i) || u(c) && n(c);
  }, s);
}
function l2(e) {
  return JSON.parse(JSON.stringify(e));
}
function Vs(e, t, n = {}) {
  const { window: a = Pi, ...r } = n;
  let o;
  const s = o2(() => a && "ResizeObserver" in a), i = () => {
    o && (o.disconnect(), o = void 0);
  }, u = T(() => {
    const f = Ee(e);
    return Array.isArray(f) ? f.map((p) => Zt(p)) : [Zt(f)];
  }), d = ee(
    u,
    (f) => {
      if (i(), s.value && a) {
        o = new ResizeObserver(t);
        for (const p of f)
          p && o.observe(p, r);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    i(), d();
  };
  return So(c), {
    isSupported: s,
    stop: c
  };
}
function ar(e, t, n, a = {}) {
  var r, o, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, h = We(), v = n || (h == null ? void 0 : h.emit) || ((r = h == null ? void 0 : h.$emit) == null ? void 0 : r.bind(h)) || ((s = (o = h == null ? void 0 : h.proxy) == null ? void 0 : o.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let m = d;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const b = ($) => i ? typeof i == "function" ? i($) : l2($) : $, x = () => Yk(e[t]) ? b(e[t]) : f, k = ($) => {
    p ? p($) && v(m, $) : v(m, $);
  };
  if (u) {
    const $ = x(), M = E($);
    let S = !1;
    return ee(
      () => e[t],
      (D) => {
        S || (S = !0, M.value = b(D), re(() => S = !1));
      }
    ), ee(
      M,
      (D) => {
        !S && (D !== e[t] || c) && k(D);
      },
      { deep: c }
    ), M;
  } else
    return T({
      get() {
        return x();
      },
      set($) {
        k($);
      }
    });
}
function _l(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function ru(e, t, n = ".", a) {
  if (!_l(t))
    return ru(e, {}, n, a);
  const r = Object.assign({}, t);
  for (const o in e) {
    if (o === "__proto__" || o === "constructor")
      continue;
    const s = e[o];
    s != null && (a && a(r, o, s, n) || (Array.isArray(s) && Array.isArray(r[o]) ? r[o] = [...s, ...r[o]] : _l(s) && _l(r[o]) ? r[o] = ru(
      s,
      r[o],
      (n ? `${n}.` : "") + o.toString(),
      a
    ) : r[o] = s));
  }
  return r;
}
function u2(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, a) => ru(n, a, "", e), {})
  );
}
const d2 = u2(), c2 = Wk(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = T(() => {
    for (const s of e.value.values()) if (s) return !0;
    return !1;
  }), a = Bi({ scrollBody: E(!0) });
  let r = null;
  const o = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Pf && (r == null || r()), t.value = void 0;
  };
  return ee(n, (s, i) => {
    var f;
    if (!Jt) return;
    if (!s) {
      i && o();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = {
      padding: u,
      margin: 0
    }, c = (f = a.scrollBody) != null && f.value ? typeof a.scrollBody.value == "object" ? d2({
      padding: a.scrollBody.value.padding === !0 ? u : a.scrollBody.value.padding,
      margin: a.scrollBody.value.margin === !0 ? u : a.scrollBody.value.margin
    }, d) : d : {
      padding: 0,
      margin: 0
    };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Pf && (r = Dm(document, "touchmove", (p) => p2(p), { passive: !1 })), re(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function f2(e) {
  const t = Math.random().toString(36).substring(2, 7), n = c2();
  n.value.set(t, e ?? !1);
  const a = T({
    get: () => n.value.get(t) ?? !1,
    set: (r) => n.value.set(t, r)
  });
  return a2(() => {
    n.value.delete(t);
  }), a;
}
function Bm(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Bm(n);
  }
}
function p2(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Bm(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function jd(e) {
  const t = Bi({ dir: E("ltr") });
  return T(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function h2(e) {
  const t = We(), n = t == null ? void 0 : t.type.emits, a = {};
  return n != null && n.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), n == null || n.forEach((r) => {
    a[Ch(Ga(r))] = (...o) => e(r, ...o);
  }), a;
}
function v2(e) {
  const t = T(() => l(e)), n = T(() => new Intl.Collator("en", {
    usage: "search",
    ...t.value
  }));
  return {
    startsWith: (s, i) => i.length === 0 ? !0 : (s = s.normalize("NFC"), i = i.normalize("NFC"), n.value.compare(s.slice(0, i.length), i) === 0),
    endsWith: (s, i) => i.length === 0 ? !0 : (s = s.normalize("NFC"), i = i.normalize("NFC"), n.value.compare(s.slice(-i.length), i) === 0),
    contains: (s, i) => {
      if (i.length === 0) return !0;
      s = s.normalize("NFC"), i = i.normalize("NFC");
      let u = 0;
      const d = i.length;
      for (; u + d <= s.length; u++) {
        const c = s.slice(u, u + d);
        if (n.value.compare(i, c) === 0) return !0;
      }
      return !1;
    }
  };
}
function m2(e) {
  return T(() => {
    var t;
    return n2(e) ? !!((t = Zt(e)) != null && t.closest("form")) : !0;
  });
}
function Oe() {
  const e = We(), t = E(), n = T(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Zt(t);
  }), a = Object.assign({}, e.exposed), r = {};
  for (const s in e.props) Object.defineProperty(r, s, {
    enumerable: !0,
    configurable: !0,
    get: () => e.props[s]
  });
  if (Object.keys(a).length > 0) for (const s in a) Object.defineProperty(r, s, {
    enumerable: !0,
    configurable: !0,
    get: () => a[s]
  });
  Object.defineProperty(r, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = r;
  function o(s) {
    t.value = s, s && (Object.defineProperty(r, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), e.exposed = r);
  }
  return {
    forwardRef: o,
    currentRef: t,
    currentElement: n
  };
}
function ka(e) {
  const t = We(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, o) => {
    const s = (t == null ? void 0 : t.type.props[o]).default;
    return s !== void 0 && (r[o] = s), r;
  }, {}), a = ju(e);
  return T(() => {
    const r = {}, o = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(o).forEach((s) => {
      r[Ga(s)] = o[s];
    }), Object.keys({
      ...n,
      ...r
    }).reduce((s, i) => (a.value[i] !== void 0 && (s[i] = a.value[i]), s), {});
  });
}
function Tn(e, t) {
  const n = ka(e), a = t ? h2(t) : {};
  return T(() => ({
    ...n.value,
    ...a
  }));
}
var g2 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Pa = /* @__PURE__ */ new WeakMap(), Ho = /* @__PURE__ */ new WeakMap(), Wo = {}, xl = 0, Om = function(e) {
  return e && (e.host || Om(e.parentNode));
}, y2 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var a = Om(n);
    return a && e.contains(a) ? a : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, b2 = function(e, t, n, a) {
  var r = y2(t, Array.isArray(e) ? e : [e]);
  Wo[n] || (Wo[n] = /* @__PURE__ */ new WeakMap());
  var o = Wo[n], s = [], i = /* @__PURE__ */ new Set(), u = new Set(r), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  r.forEach(d);
  var c = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        c(p);
      else
        try {
          var h = p.getAttribute(a), v = h !== null && h !== "false", m = (Pa.get(p) || 0) + 1, b = (o.get(p) || 0) + 1;
          Pa.set(p, m), o.set(p, b), s.push(p), m === 1 && v && Ho.set(p, !0), b === 1 && p.setAttribute(n, "true"), v || p.setAttribute(a, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", p, x);
        }
    });
  };
  return c(t), i.clear(), xl++, function() {
    s.forEach(function(f) {
      var p = Pa.get(f) - 1, h = o.get(f) - 1;
      Pa.set(f, p), o.set(f, h), p || (Ho.has(f) || f.removeAttribute(a), Ho.delete(f)), h || f.removeAttribute(n);
    }), xl--, xl || (Pa = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ new WeakMap(), Ho = /* @__PURE__ */ new WeakMap(), Wo = {});
  };
}, _2 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var a = Array.from(Array.isArray(e) ? e : [e]), r = g2(e);
  return r ? (a.push.apply(a, Array.from(r.querySelectorAll("[aria-live], script"))), b2(a, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function x2(e) {
  let t;
  ee(() => Zt(e), (n) => {
    n ? t = _2(n) : t && t();
  }), Ke(() => {
    t && t();
  });
}
let w2 = 0;
function Xn(e, t = "reka") {
  var a;
  if (e) return e;
  if ("useId" in Fa) return `${t}-${(a = Fa.useId) == null ? void 0 : a.call(Fa)}`;
  const n = Bi({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++w2}`;
}
function C2() {
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
function $2(e) {
  const t = E(), n = T(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.width) ?? 0;
  }), a = T(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.height) ?? 0;
  });
  return de(() => {
    const r = Zt(e);
    if (r) {
      t.value = {
        width: r.offsetWidth,
        height: r.offsetHeight
      };
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length) return;
        const i = s[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
          u = f.inlineSize, d = f.blockSize;
        } else
          u = r.offsetWidth, d = r.offsetHeight;
        t.value = {
          width: u,
          height: d
        };
      });
      return o.observe(r, { box: "border-box" }), () => o.unobserve(r);
    } else t.value = void 0;
  }), {
    width: n,
    height: a
  };
}
function k2(e, t) {
  const n = E(e);
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
function S2(e) {
  const t = Oi("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (r, o) => {
      t.value = t.value + r;
      {
        const s = sa(), i = o.map((p) => {
          var h, v;
          return {
            ...p,
            textValue: ((h = p.value) == null ? void 0 : h.textValue) ?? ((v = p.ref.textContent) == null ? void 0 : v.trim()) ?? ""
          };
        }), u = i.find((p) => p.ref === s), d = i.map((p) => p.textValue), c = M2(d, t.value, u == null ? void 0 : u.textValue), f = i.find((p) => p.textValue === c);
        return f && f.ref.focus(), f == null ? void 0 : f.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function T2(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
function M2(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, o = n ? e.indexOf(n) : -1;
  let s = T2(e, Math.max(o, 0));
  r.length === 1 && (s = s.filter((d) => d !== n));
  const u = s.find((d) => d.toLowerCase().startsWith(r.toLowerCase()));
  return u !== n ? u : void 0;
}
function A2(e, t) {
  var b;
  const n = E({}), a = E("none"), r = E(e), o = e.value ? "mounted" : "unmounted";
  let s;
  const i = ((b = t.value) == null ? void 0 : b.ownerDocument.defaultView) ?? Pi, { state: u, dispatch: d } = k2(o, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), c = (x) => {
    var k;
    if (Jt) {
      const $ = new CustomEvent(x, {
        bubbles: !1,
        cancelable: !1
      });
      (k = t.value) == null || k.dispatchEvent($);
    }
  };
  ee(e, async (x, k) => {
    var M;
    const $ = k !== x;
    if (await re(), $) {
      const S = a.value, D = Uo(t.value);
      x ? (d("MOUNT"), c("enter"), D === "none" && c("after-enter")) : D === "none" || D === "undefined" || ((M = n.value) == null ? void 0 : M.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : k && S !== D ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const f = (x) => {
    const k = Uo(t.value), $ = k.includes(CSS.escape(x.animationName)), M = u.value === "mounted" ? "enter" : "leave";
    if (x.target === t.value && $ && (c(`after-${M}`), d("ANIMATION_END"), !r.value)) {
      const S = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = i == null ? void 0 : i.setTimeout(() => {
        var D;
        ((D = t.value) == null ? void 0 : D.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = S);
      });
    }
    x.target === t.value && k === "none" && d("ANIMATION_END");
  }, p = (x) => {
    x.target === t.value && (a.value = Uo(t.value));
  }, h = ee(t, (x, k) => {
    x ? (n.value = getComputedStyle(x), x.addEventListener("animationstart", p), x.addEventListener("animationcancel", f), x.addEventListener("animationend", f)) : (d("ANIMATION_END"), s !== void 0 && (i == null || i.clearTimeout(s)), k == null || k.removeEventListener("animationstart", p), k == null || k.removeEventListener("animationcancel", f), k == null || k.removeEventListener("animationend", f));
  }, { immediate: !0 }), v = ee(u, () => {
    const x = Uo(t.value);
    a.value = u.value === "mounted" ? x : "none";
  });
  return Ke(() => {
    h(), v();
  }), { isPresent: T(() => ["mounted", "unmountSuspended"].includes(u.value)) };
}
function Uo(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var Ii = _({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    var d;
    const { present: a, forceMount: r } = me(e), o = E(), { isPresent: s } = A2(a, o);
    n({ present: s });
    let i = t.default({ present: s.value });
    i = Kd(i || []);
    const u = We();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const c = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((f) => `  - ${f}`).join(`
`)
      ].join(`
`));
    }
    return () => r.value || a.value || s.value ? rt(t.default({ present: s.value })[0], { ref: (c) => {
      const f = Zt(c);
      return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-reka-popper-content-wrapper") ? o.value = f.firstElementChild : o.value = f), f;
    } }) : null;
  }
});
const ou = _({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u;
      if (!n.default) return null;
      const a = Kd(n.default()), r = a.findIndex((d) => d.type !== Yu);
      if (r === -1) return a;
      const o = a[r];
      (u = o.props) == null || delete u.ref;
      const s = o.props ? B(t, o.props) : t, i = $h({
        ...o,
        props: {}
      }, s);
      return a.length === 1 ? i : (a[r] = i, a);
    };
  }
}), D2 = [
  "area",
  "img",
  "input"
], Me = _({
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
    return typeof a == "string" && D2.includes(a) ? () => rt(a, t) : a !== "template" ? () => rt(e.as, t, { default: n.default }) : () => rt(ou, t, { default: n.default });
  }
});
function jn() {
  const e = E(), t = T(() => {
    var n, a;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (a = e.value) == null ? void 0 : a.$el.nextElementSibling : Zt(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const E2 = "dismissableLayer.pointerDownOutside", B2 = "dismissableLayer.focusOutside";
function Pm(e, t) {
  const n = t.closest("[data-dismissable-layer]"), a = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), r = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(n && (a === n || r.indexOf(a) < r.indexOf(n)));
}
function O2(e, t, n = !0) {
  var s;
  const a = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = E(!1), o = E(() => {
  });
  return Ce((i) => {
    if (!Jt || !Ee(n)) return;
    const u = async (c) => {
      const f = c.target;
      if (!(!(t != null && t.value) || !f)) {
        if (Pm(t.value, f)) {
          r.value = !1;
          return;
        }
        if (c.target && !r.value) {
          let h = function() {
            Ud(E2, e, p);
          };
          const p = { originalEvent: c };
          c.pointerType === "touch" ? (a.removeEventListener("click", o.value), o.value = h, a.addEventListener("click", o.value, { once: !0 })) : h();
        } else a.removeEventListener("click", o.value);
        r.value = !1;
      }
    }, d = window.setTimeout(() => {
      a.addEventListener("pointerdown", u);
    }, 0);
    i(() => {
      window.clearTimeout(d), a.removeEventListener("pointerdown", u), a.removeEventListener("click", o.value);
    });
  }), { onPointerDownCapture: () => {
    Ee(n) && (r.value = !0);
  } };
}
function P2(e, t, n = !0) {
  var o;
  const a = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = E(!1);
  return Ce((s) => {
    if (!Jt || !Ee(n)) return;
    const i = async (u) => {
      if (!(t != null && t.value)) return;
      await re(), await re();
      const d = u.target;
      !t.value || !d || Pm(t.value, d) || u.target && !r.value && Ud(B2, e, { originalEvent: u });
    };
    a.addEventListener("focusin", i), s(() => a.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      Ee(n) && (r.value = !0);
    },
    onBlurCapture: () => {
      Ee(n) && (r.value = !1);
    }
  };
}
const sn = Wn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var I2 = /* @__PURE__ */ _({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "dismiss"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: r, currentElement: o } = Oe(), s = T(() => {
      var v;
      return ((v = o.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
    }), i = T(() => sn.layersRoot), u = T(() => o.value ? Array.from(i.value).indexOf(o.value) : -1), d = T(() => sn.layersWithOutsidePointerEventsDisabled.size > 0), c = T(() => {
      const v = Array.from(i.value), [m] = [...sn.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(m);
      return u.value >= b;
    }), f = O2(async (v) => {
      const m = [...sn.branches].some((b) => b == null ? void 0 : b.contains(v.target));
      !c.value || m || (a("pointerDownOutside", v), a("interactOutside", v), await re(), v.defaultPrevented || a("dismiss"));
    }, o), p = P2((v) => {
      [...sn.branches].some((b) => b == null ? void 0 : b.contains(v.target)) || (a("focusOutside", v), a("interactOutside", v), v.defaultPrevented || a("dismiss"));
    }, o);
    i2("Escape", (v) => {
      u.value === i.value.size - 1 && (a("escapeKeyDown", v), v.defaultPrevented || a("dismiss"));
    });
    let h;
    return Ce((v) => {
      o.value && (n.disableOutsidePointerEvents && (sn.layersWithOutsidePointerEventsDisabled.size === 0 && (h = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), sn.layersWithOutsidePointerEventsDisabled.add(o.value)), i.value.add(o.value), v(() => {
        n.disableOutsidePointerEvents && sn.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = h);
      }));
    }), Ce((v) => {
      v(() => {
        o.value && (i.value.delete(o.value), sn.layersWithOutsidePointerEventsDisabled.delete(o.value));
      });
    }), (v, m) => (g(), w(l(Me), {
      ref: l(r),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Qt({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: l(p).onFocusCapture,
      onBlurCapture: l(p).onBlurCapture,
      onPointerdownCapture: l(f).onPointerDownCapture
    }, {
      default: y(() => [C(v.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "style",
      "onFocusCapture",
      "onBlurCapture",
      "onPointerdownCapture"
    ]));
  }
}), Im = I2, R2 = /* @__PURE__ */ _({
  __name: "Teleport",
  props: {
    to: {
      type: null,
      required: !1,
      default: "body"
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = Em();
    return (n, a) => l(t) || n.forceMount ? (g(), w(ga, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [C(n.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : se("v-if", !0);
  }
}), F2 = R2;
const [Rm, V2] = $t("AvatarRoot");
var N2 = /* @__PURE__ */ _({
  __name: "AvatarRoot",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return Oe(), V2({ imageLoadingStatus: E("idle") }), (t, n) => (g(), w(l(Me), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: y(() => [C(t.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), L2 = N2, z2 = /* @__PURE__ */ _({
  __name: "AvatarFallback",
  props: {
    delayMs: {
      type: Number,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, n = Rm();
    Oe();
    const a = E(t.delayMs === void 0);
    return Ce((r) => {
      if (t.delayMs && Jt) {
        const o = window.setTimeout(() => {
          a.value = !0;
        }, t.delayMs);
        r(() => {
          window.clearTimeout(o);
        });
      }
    }), (r, o) => a.value && l(n).imageLoadingStatus.value !== "loaded" ? (g(), w(l(Me), {
      key: 0,
      "as-child": r.asChild,
      as: r.as
    }, {
      default: y(() => [C(r.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"])) : se("v-if", !0);
  }
}), q2 = z2;
function If(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function H2(e, { referrerPolicy: t, crossOrigin: n } = {}) {
  const a = E(!1), r = E(null), o = T(() => a.value ? (!r.value && Jt && (r.value = new window.Image()), r.value) : null), s = E(If(o.value, e.value)), i = (u) => () => {
    a.value && (s.value = u);
  };
  return de(() => {
    a.value = !0, Ce((u) => {
      const d = o.value;
      if (!d) return;
      s.value = If(d, e.value);
      const c = i("loaded"), f = i("error");
      d.addEventListener("load", c), d.addEventListener("error", f), t != null && t.value && (d.referrerPolicy = t.value), typeof (n == null ? void 0 : n.value) == "string" && (d.crossOrigin = n.value), u(() => {
        d.removeEventListener("load", c), d.removeEventListener("error", f);
      });
    });
  }), Ke(() => {
    a.value = !1;
  }), s;
}
var W2 = /* @__PURE__ */ _({
  __name: "AvatarImage",
  props: {
    src: {
      type: String,
      required: !0
    },
    referrerPolicy: {
      type: null,
      required: !1
    },
    crossOrigin: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "img"
    }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const n = e, a = t, { src: r, referrerPolicy: o, crossOrigin: s } = me(n);
    Oe();
    const i = Rm(), u = H2(r, {
      referrerPolicy: o,
      crossOrigin: s
    });
    return ee(u, (d) => {
      a("loadingStatusChange", d), d !== "idle" && (i.imageLoadingStatus.value = d);
    }, { immediate: !0 }), (d, c) => ya((g(), w(l(Me), {
      role: "img",
      "as-child": d.asChild,
      as: d.as,
      src: l(r),
      "referrer-policy": l(o)
    }, {
      default: y(() => [C(d.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "src",
      "referrer-policy"
    ])), [[hi, l(u) === "loaded"]]);
  }
}), U2 = W2;
const Rf = "data-reka-collection-item";
function Jn(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, a = `${t}CollectionProvider`;
  let r;
  if (n) {
    const c = E(/* @__PURE__ */ new Map());
    r = {
      collectionRef: E(),
      itemMap: c
    }, At(a, r);
  } else r = Gn(a);
  const o = (c = !1) => {
    const f = r.collectionRef.value;
    if (!f) return [];
    const p = Array.from(f.querySelectorAll(`[${Rf}]`)), v = Array.from(r.itemMap.value.values()).sort((m, b) => p.indexOf(m.ref) - p.indexOf(b.ref));
    return c ? v : v.filter((m) => m.ref.dataset.disabled !== "");
  }, s = _({
    name: "CollectionSlot",
    setup(c, { slots: f }) {
      const { primitiveElement: p, currentElement: h } = jn();
      return ee(h, () => {
        r.collectionRef.value = h.value;
      }), () => rt(ou, { ref: p }, f);
    }
  }), i = _({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: f, attrs: p }) {
      const { primitiveElement: h, currentElement: v } = jn();
      return Ce((m) => {
        if (v.value) {
          const b = kh(v.value);
          r.itemMap.value.set(b, {
            ref: v.value,
            value: c.value
          }), m(() => r.itemMap.value.delete(b));
        }
      }), () => rt(ou, {
        ...p,
        [Rf]: "",
        ref: h
      }, f);
    }
  }), u = T(() => Array.from(r.itemMap.value.values())), d = T(() => r.itemMap.value.size);
  return {
    getItems: o,
    reactiveItems: u,
    itemMapSize: d,
    CollectionSlot: s,
    CollectionItem: i
  };
}
const K2 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function j2(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Y2(e, t, n) {
  const a = j2(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(a)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(a)))
    return K2[a];
}
var G2 = /* @__PURE__ */ _({
  __name: "VisuallyHidden",
  props: {
    feature: {
      type: String,
      required: !1,
      default: "focusable"
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return (t, n) => (g(), w(l(Me), {
      as: t.as,
      "as-child": t.asChild,
      "aria-hidden": t.feature === "focusable" ? "true" : void 0,
      "data-hidden": t.feature === "fully-hidden" ? "" : void 0,
      tabindex: t.feature === "fully-hidden" ? "-1" : void 0,
      style: {
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
        wordWrap: "normal",
        top: "-1px",
        left: "-1px"
      }
    }, {
      default: y(() => [C(t.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-hidden",
      "data-hidden",
      "tabindex"
    ]));
  }
}), Fm = G2, X2 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, { primitiveElement: n, currentElement: a } = jn(), r = T(() => t.checked ?? t.value);
    return ee(r, (o, s) => {
      if (!a.value) return;
      const i = a.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && o !== s) {
        const f = new Event("input", { bubbles: !0 }), p = new Event("change", { bubbles: !0 });
        c.call(i, o), i.dispatchEvent(f), i.dispatchEvent(p);
      }
    }), (o, s) => (g(), w(Fm, B({
      ref_key: "primitiveElement",
      ref: n
    }, {
      ...t,
      ...o.$attrs
    }, { as: "input" }), null, 16));
  }
}), Ff = X2, J2 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInput",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, n = T(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), a = T(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
      name: t.name,
      value: t.value
    }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((r, o) => typeof r == "object" ? Object.entries(r).map(([s, i]) => ({
      name: `${t.name}[${o}][${s}]`,
      value: i
    })) : {
      name: `${t.name}[${o}]`,
      value: r
    }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([r, o]) => ({
      name: `${t.name}[${r}]`,
      value: o
    })) : []);
    return (r, o) => (g(), L(ue, null, [se(" We render single input if it's required "), n.value ? (g(), w(Ff, B({ key: r.name }, {
      ...t,
      ...r.$attrs
    }, {
      name: r.name,
      value: r.value
    }), null, 16, ["name", "value"])) : (g(!0), L(ue, { key: 1 }, Ae(a.value, (s) => (g(), w(Ff, B({ key: s.name }, { ref_for: !0 }, {
      ...t,
      ...r.$attrs
    }, {
      name: s.name,
      value: s.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), Z2 = J2;
const [Vm, Q2] = $t("PopperRoot");
var eS = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return Q2({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, a) => C(n.$slots, "default");
  }
}), tS = eS, nS = /* @__PURE__ */ _({
  __name: "PopperAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = Oe(), r = Vm();
    return Ju(() => {
      r.onAnchorChange(t.reference ?? a.value);
    }), (o, s) => (g(), w(l(Me), {
      ref: l(n),
      as: o.as,
      "as-child": o.asChild
    }, {
      default: y(() => [C(o.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), aS = nS;
function rS(e) {
  return e !== null;
}
function oS(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var b, x, k;
      const { placement: n, rects: a, middlewareData: r } = t, s = ((b = r.arrow) == null ? void 0 : b.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, u = s ? 0 : e.arrowHeight, [d, c] = su(n), f = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], p = (((x = r.arrow) == null ? void 0 : x.x) ?? 0) + i / 2, h = (((k = r.arrow) == null ? void 0 : k.y) ?? 0) + u / 2;
      let v = "", m = "";
      return d === "bottom" ? (v = s ? f : `${p}px`, m = `${-u}px`) : d === "top" ? (v = s ? f : `${p}px`, m = `${a.floating.height + u}px`) : d === "right" ? (v = `${-u}px`, m = s ? f : `${h}px`) : d === "left" && (v = `${a.floating.width + u}px`, m = s ? f : `${h}px`), { data: {
        x: v,
        y: m
      } };
    }
  };
}
function su(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const sS = {
  side: "bottom",
  sideOffset: 0,
  sideFlip: !0,
  align: "center",
  alignOffset: 0,
  alignFlip: !0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [MF, iS] = $t("PopperContent");
var lS = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Xu({
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...sS }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = Vm(), { forwardRef: o, currentElement: s } = Oe(), i = E(), u = E(), { width: d, height: c } = $2(u), f = T(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), p = T(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...n.collisionPadding
    }), h = T(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = T(() => ({
      padding: p.value,
      boundary: h.value.filter(rS),
      altBoundary: h.value.length > 0
    })), m = T(() => ({
      mainAxis: n.sideFlip,
      crossAxis: n.alignFlip
    })), b = Hk(() => [
      sv({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Ps({
        ...v.value,
        ...m.value
      }),
      n.avoidCollisions && iv({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? dv() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Ps({
        ...v.value,
        ...m.value
      }),
      lv({
        ...v.value,
        apply: ({ elements: R, rects: j, availableWidth: z, availableHeight: Y }) => {
          const { width: te, height: ye } = j.reference, pe = R.floating.style;
          pe.setProperty("--reka-popper-available-width", `${z}px`), pe.setProperty("--reka-popper-available-height", `${Y}px`), pe.setProperty("--reka-popper-anchor-width", `${te}px`), pe.setProperty("--reka-popper-anchor-height", `${ye}px`);
        }
      }),
      u.value && cv({
        element: u.value,
        padding: n.arrowPadding
      }),
      oS({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && uv({
        strategy: "referenceHidden",
        ...v.value
      })
    ]), x = T(() => n.reference ?? r.anchor.value), { floatingStyles: k, placement: $, isPositioned: M, middlewareData: S } = pv(x, i, {
      strategy: n.positionStrategy,
      placement: f,
      whileElementsMounted: (...R) => ov(...R, {
        layoutShift: !n.disableUpdateOnLayoutShift,
        animationFrame: n.updatePositionStrategy === "always"
      }),
      middleware: b
    }), D = T(() => su($.value)[0]), A = T(() => su($.value)[1]);
    Ju(() => {
      M.value && a("placed");
    });
    const N = T(() => {
      var R;
      return ((R = S.value.arrow) == null ? void 0 : R.centerOffset) !== 0;
    }), F = E("");
    Ce(() => {
      s.value && (F.value = window.getComputedStyle(s.value).zIndex);
    });
    const P = T(() => {
      var R;
      return ((R = S.value.arrow) == null ? void 0 : R.x) ?? 0;
    }), I = T(() => {
      var R;
      return ((R = S.value.arrow) == null ? void 0 : R.y) ?? 0;
    });
    return iS({
      placedSide: D,
      onArrowChange: (R) => u.value = R,
      arrowX: P,
      arrowY: I,
      shouldHideArrow: N
    }), (R, j) => {
      var z, Y, te;
      return g(), L("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: Qt({
          ...l(k),
          transform: l(M) ? l(k).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: F.value,
          "--reka-popper-transform-origin": [(z = l(S).transformOrigin) == null ? void 0 : z.x, (Y = l(S).transformOrigin) == null ? void 0 : Y.y].join(" "),
          ...((te = l(S).hide) == null ? void 0 : te.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [O(l(Me), B({ ref: l(o) }, R.$attrs, {
        "as-child": n.asChild,
        as: R.as,
        "data-side": D.value,
        "data-align": A.value,
        style: { animation: l(M) ? void 0 : "none" }
      }), {
        default: y(() => [C(R.$slots, "default")]),
        _: 3
      }, 16, [
        "as-child",
        "as",
        "data-side",
        "data-align",
        "style"
      ])], 4);
    };
  }
}), uS = lS, dS = /* @__PURE__ */ _({
  __name: "ComboboxAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const { forwardRef: t } = Oe();
    return (n, a) => (g(), w(l(aS), {
      "as-child": "",
      reference: n.reference
    }, {
      default: y(() => [O(l(Me), B({
        ref: l(t),
        "as-child": n.asChild,
        as: n.as
      }, n.$attrs), {
        default: y(() => [C(n.$slots, "default")]),
        _: 3
      }, 16, ["as-child", "as"])]),
      _: 3
    }, 8, ["reference"]));
  }
}), cS = dS;
function fS(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((a) => Kr(a, t, n)) : Kr(e, t, n);
}
function Kr(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : au(e, t);
}
const [Ri, pS] = $t("ListboxRoot");
var hS = /* @__PURE__ */ _({
  __name: "ListboxRoot",
  props: {
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    orientation: {
      type: String,
      required: !1,
      default: "vertical"
    },
    dir: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    selectionBehavior: {
      type: String,
      required: !1,
      default: "toggle"
    },
    highlightOnHover: {
      type: Boolean,
      required: !1
    },
    by: {
      type: [String, Function],
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "entryFocus",
    "leave"
  ],
  setup(e, { expose: t, emit: n }) {
    const a = e, r = n, { multiple: o, highlightOnHover: s, orientation: i, disabled: u, selectionBehavior: d, dir: c } = me(a), { getItems: f } = Jn({ isProvider: !0 }), { handleTypeaheadSearch: p } = S2(), { primitiveElement: h, currentElement: v } = jn(), m = C2(), b = jd(c), x = m2(v), k = E(), $ = E(!1), M = E(!0), S = ar(a, "modelValue", r, {
      defaultValue: a.defaultValue ?? (o.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    });
    function D(Q) {
      if ($.value = !0, a.multiple) {
        const ie = Array.isArray(S.value) ? [...S.value] : [], H = ie.findIndex((G) => Kr(G, Q, a.by));
        a.selectionBehavior === "toggle" ? (H === -1 ? ie.push(Q) : ie.splice(H, 1), S.value = ie) : (S.value = [Q], k.value = Q);
      } else a.selectionBehavior === "toggle" && Kr(S.value, Q, a.by) ? S.value = void 0 : S.value = Q;
      setTimeout(() => {
        $.value = !1;
      }, 1);
    }
    const A = E(null), N = E(null), F = E(!1), P = E(!1), I = us(), R = us(), j = us();
    function z() {
      return f().map((Q) => Q.ref).filter((Q) => Q.dataset.disabled !== "");
    }
    function Y(Q, ie = !0) {
      if (!Q) return;
      A.value = Q, M.value && A.value.focus(), ie && A.value.scrollIntoView({ block: "nearest" });
      const H = f().find((G) => G.ref === Q);
      r("highlight", H);
    }
    function te(Q) {
      if (F.value) j.trigger(Q);
      else {
        const ie = f().find((H) => Kr(H.value, Q, a.by));
        ie && (A.value = ie.ref, Y(ie.ref));
      }
    }
    function ye(Q) {
      A.value && A.value.isConnected && (Q.preventDefault(), Q.stopPropagation(), P.value || A.value.click());
    }
    function pe(Q) {
      if (M.value) {
        if ($.value = !0, F.value) R.trigger(Q);
        else {
          const ie = Q.altKey || Q.ctrlKey || Q.metaKey;
          if (ie && Q.key === "a" && o.value) {
            const H = f(), G = H.map((ne) => ne.value);
            S.value = [...G], Q.preventDefault(), Y(H[H.length - 1].ref);
          } else if (!ie) {
            const H = p(Q.key, f());
            H && Y(H);
          }
        }
        setTimeout(() => {
          $.value = !1;
        }, 1);
      }
    }
    function q() {
      P.value = !0;
    }
    function ae() {
      re(() => {
        P.value = !1;
      });
    }
    function le() {
      re(() => {
        const Q = new KeyboardEvent("keydown", { key: "PageUp" });
        Qe(Q);
      });
    }
    function Le(Q) {
      const ie = A.value;
      ie != null && ie.isConnected && (N.value = ie), A.value = null, r("leave", Q);
    }
    function Ye(Q) {
      var H, G;
      const ie = new CustomEvent("listbox.entryFocus", {
        bubbles: !1,
        cancelable: !0
      });
      if ((H = Q.currentTarget) == null || H.dispatchEvent(ie), r("entryFocus", ie), !ie.defaultPrevented)
        if (N.value) Y(N.value);
        else {
          const ne = (G = z()) == null ? void 0 : G[0];
          Y(ne);
        }
    }
    function Qe(Q) {
      const ie = Y2(Q, i.value, b.value);
      if (!ie) return;
      let H = z();
      if (A.value) {
        if (ie === "last") H.reverse();
        else if (ie === "prev" || ie === "next") {
          ie === "prev" && H.reverse();
          const G = H.indexOf(A.value);
          H = H.slice(G + 1);
        }
        et(Q, H[0]);
      }
      if (H.length) {
        const G = !A.value && ie === "prev" ? H.length - 1 : 0;
        Y(H[G]);
      }
      if (F.value) return R.trigger(Q);
    }
    function et(Q, ie) {
      var G;
      if (!(F.value || a.selectionBehavior !== "replace" || !o.value || !Array.isArray(S.value) || (Q.altKey || Q.ctrlKey || Q.metaKey) && !Q.shiftKey) && Q.shiftKey) {
        const ne = f().filter((xe) => xe.ref.dataset.disabled !== "");
        let U = (G = ne.find((xe) => xe.ref === ie)) == null ? void 0 : G.value;
        if (Q.key === m.END ? U = ne[ne.length - 1].value : Q.key === m.HOME && (U = ne[0].value), !U || !k.value) return;
        const Fe = zk(ne.map((xe) => xe.value), k.value, U);
        S.value = Fe;
      }
    }
    async function Nt(Q) {
      if (await re(), F.value) I.trigger(Q);
      else {
        const ie = z(), H = ie.find((G) => G.dataset.state === "checked");
        H ? Y(H) : ie.length && Y(ie[0]);
      }
    }
    return ee(S, () => {
      $.value || re(() => {
        Nt();
      });
    }, {
      immediate: !0,
      deep: !0
    }), t({
      highlightedElement: A,
      highlightItem: te,
      highlightFirstItem: le,
      highlightSelected: Nt,
      getItems: f
    }), pS({
      modelValue: S,
      onValueChange: D,
      multiple: o,
      orientation: i,
      dir: b,
      disabled: u,
      highlightOnHover: s,
      highlightedElement: A,
      isVirtual: F,
      virtualFocusHook: I,
      virtualKeydownHook: R,
      virtualHighlightHook: j,
      by: a.by,
      firstValue: k,
      selectionBehavior: d,
      focusable: M,
      onLeave: Le,
      onEnter: Ye,
      changeHighlight: Y,
      onKeydownEnter: ye,
      onKeydownNavigation: Qe,
      onKeydownTypeAhead: pe,
      onCompositionStart: q,
      onCompositionEnd: ae,
      highlightFirstItem: le
    }), (Q, ie) => (g(), w(l(Me), {
      ref_key: "primitiveElement",
      ref: h,
      as: Q.as,
      "as-child": Q.asChild,
      dir: l(b),
      "data-disabled": l(u) ? "" : void 0,
      onPointerleave: Le,
      onFocusout: ie[0] || (ie[0] = async (H) => {
        const G = H.relatedTarget || H.target;
        await re(), A.value && l(v) && !l(v).contains(G) && Le(H);
      })
    }, {
      default: y(() => [C(Q.$slots, "default", { modelValue: l(S) }), l(x) && Q.name ? (g(), w(l(Z2), {
        key: 0,
        name: Q.name,
        value: l(S),
        disabled: l(u),
        required: Q.required
      }, null, 8, [
        "name",
        "value",
        "disabled",
        "required"
      ])) : se("v-if", !0)]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "dir",
      "data-disabled"
    ]));
  }
}), vS = hS, mS = /* @__PURE__ */ _({
  __name: "ListboxContent",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const { CollectionSlot: t } = Jn(), n = Ri(), a = Oi(!1, 10);
    return (r, o) => (g(), w(l(t), null, {
      default: y(() => [O(l(Me), {
        role: "listbox",
        as: r.as,
        "as-child": r.asChild,
        tabindex: l(n).focusable.value ? l(n).highlightedElement.value ? "-1" : "0" : "-1",
        "aria-orientation": l(n).orientation.value,
        "aria-multiselectable": !!l(n).multiple.value,
        "data-orientation": l(n).orientation.value,
        onMousedown: o[0] || (o[0] = Ie((s) => a.value = !0, ["left"])),
        onFocus: o[1] || (o[1] = (s) => {
          l(a) || l(n).onEnter(s);
        }),
        onKeydown: [
          o[2] || (o[2] = Xe((s) => {
            l(n).orientation.value === "vertical" && (s.key === "ArrowLeft" || s.key === "ArrowRight") || l(n).orientation.value === "horizontal" && (s.key === "ArrowUp" || s.key === "ArrowDown") || (s.preventDefault(), l(n).focusable.value && l(n).onKeydownNavigation(s));
          }, [
            "down",
            "up",
            "left",
            "right",
            "home",
            "end"
          ])),
          Xe(l(n).onKeydownEnter, ["enter"]),
          l(n).onKeydownTypeAhead
        ]
      }, {
        default: y(() => [C(r.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "tabindex",
        "aria-orientation",
        "aria-multiselectable",
        "data-orientation",
        "onKeydown"
      ])]),
      _: 3
    }));
  }
}), gS = mS, yS = /* @__PURE__ */ _({
  __name: "ListboxFilter",
  props: {
    modelValue: {
      type: String,
      required: !1
    },
    autoFocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = ar(n, "modelValue", t, {
      defaultValue: "",
      passive: n.modelValue === void 0
    }), o = Ri(), { primitiveElement: s, currentElement: i } = jn(), u = T(() => n.disabled || o.disabled.value || !1), d = E();
    return wh(() => {
      var c;
      return d.value = (c = o.highlightedElement.value) == null ? void 0 : c.id;
    }), de(() => {
      o.focusable.value = !1, setTimeout(() => {
        var c;
        n.autoFocus && ((c = i.value) == null || c.focus());
      }, 1);
    }), Ke(() => {
      o.focusable.value = !0;
    }), (c, f) => (g(), w(l(Me), {
      ref_key: "primitiveElement",
      ref: s,
      as: c.as,
      "as-child": c.asChild,
      value: l(r),
      disabled: u.value ? "" : void 0,
      "data-disabled": u.value ? "" : void 0,
      "aria-disabled": u.value ?? void 0,
      "aria-activedescendant": d.value,
      type: "text",
      onKeydown: [Xe(Ie(l(o).onKeydownNavigation, ["prevent"]), [
        "down",
        "up",
        "home",
        "end"
      ]), Xe(l(o).onKeydownEnter, ["enter"])],
      onInput: f[0] || (f[0] = (p) => {
        r.value = p.target.value, l(o).highlightFirstItem();
      }),
      onCompositionstart: l(o).onCompositionStart,
      onCompositionend: l(o).onCompositionEnd
    }, {
      default: y(() => [C(c.$slots, "default", { modelValue: l(r) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "value",
      "disabled",
      "data-disabled",
      "aria-disabled",
      "aria-activedescendant",
      "onKeydown",
      "onCompositionstart",
      "onCompositionend"
    ]));
  }
}), bS = yS;
const [AF, _S] = $t("ListboxGroup");
var xS = /* @__PURE__ */ _({
  __name: "ListboxGroup",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = Xn(void 0, "reka-listbox-group");
    return _S({ id: n }), (a, r) => (g(), w(l(Me), B({ role: "group" }, t, { "aria-labelledby": l(n) }), {
      default: y(() => [C(a.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), wS = xS;
const CS = "listbox.select", [$S, kS] = $t("ListboxItem");
var SS = /* @__PURE__ */ _({
  __name: "ListboxItem",
  props: {
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = Xn(void 0, "reka-listbox-item"), { CollectionItem: o } = Jn(), { forwardRef: s, currentElement: i } = Oe(), u = Ri(), d = T(() => i.value === u.highlightedElement.value), c = T(() => fS(u.modelValue.value, n.value, u.by)), f = T(() => u.disabled.value || n.disabled);
    async function p(v) {
      a("select", v), !(v != null && v.defaultPrevented) && !f.value && v && (u.onValueChange(n.value), u.changeHighlight(i.value));
    }
    function h(v) {
      const m = {
        originalEvent: v,
        value: n.value
      };
      Ud(CS, p, m);
    }
    return kS({ isSelected: c }), (v, m) => (g(), w(l(o), { value: v.value }, {
      default: y(() => [w0([d.value, c.value], () => O(l(Me), B({ id: l(r) }, v.$attrs, {
        ref: l(s),
        role: "option",
        tabindex: l(u).focusable.value ? d.value ? "0" : "-1" : -1,
        "aria-selected": c.value,
        as: v.as,
        "as-child": v.asChild,
        disabled: f.value ? "" : void 0,
        "data-disabled": f.value ? "" : void 0,
        "data-highlighted": d.value ? "" : void 0,
        "data-state": c.value ? "checked" : "unchecked",
        onClick: h,
        onKeydown: Xe(Ie(h, ["prevent"]), ["space"]),
        onPointermove: m[0] || (m[0] = () => {
          l(u).highlightedElement.value !== l(i) && l(u).highlightOnHover.value && !l(u).focusable.value && l(u).changeHighlight(l(i), !1);
        })
      }), {
        default: y(() => [C(v.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "tabindex",
        "aria-selected",
        "as",
        "as-child",
        "disabled",
        "data-disabled",
        "data-highlighted",
        "data-state",
        "onKeydown"
      ]), m, 1)]),
      _: 3
    }, 8, ["value"]));
  }
}), TS = SS, MS = /* @__PURE__ */ _({
  __name: "ListboxItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e;
    Oe();
    const n = $S();
    return (a, r) => l(n).isSelected.value ? (g(), w(l(Me), B({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [C(a.$slots, "default")]),
      _: 3
    }, 16)) : se("v-if", !0);
  }
}), AS = MS;
const [Mn, DS] = $t("ComboboxRoot");
var ES = /* @__PURE__ */ _({
  __name: "ComboboxRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    resetSearchTermOnBlur: {
      type: Boolean,
      required: !1,
      default: !0
    },
    resetSearchTermOnSelect: {
      type: Boolean,
      required: !1,
      default: !0
    },
    openOnFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    openOnClick: {
      type: Boolean,
      required: !1,
      default: !1
    },
    ignoreFilter: {
      type: Boolean,
      required: !1
    },
    resetModelValueOnClear: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    highlightOnHover: {
      type: Boolean,
      required: !1,
      default: !0
    },
    by: {
      type: [String, Function],
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "update:open"
  ],
  setup(e, { expose: t, emit: n }) {
    var te, ye, pe;
    const a = e, r = n, { primitiveElement: o, currentElement: s } = jn(), { multiple: i, disabled: u, ignoreFilter: d, resetSearchTermOnSelect: c, openOnFocus: f, openOnClick: p, dir: h, resetModelValueOnClear: v, highlightOnHover: m } = me(a), b = jd(h), x = ar(a, "modelValue", r, {
      defaultValue: a.defaultValue ?? (i.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    }), k = ar(a, "open", r, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    async function $(q) {
      var ae, le;
      k.value = q, j.value = "", q ? (await re(), (ae = o.value) == null || ae.highlightSelected(), S.value = !0) : S.value = !1, (le = A.value) == null || le.focus(), setTimeout(() => {
        !q && a.resetSearchTermOnBlur && M.trigger();
      }, 1);
    }
    const M = us(), S = E(!1), D = E(!1), A = E(), N = E(), F = T(() => {
      var q;
      return ((q = o.value) == null ? void 0 : q.highlightedElement) ?? void 0;
    }), P = E(/* @__PURE__ */ new Map()), I = E(/* @__PURE__ */ new Map()), { contains: R } = v2({ sensitivity: "base" }), j = E(""), z = T((q) => {
      if (!j.value || a.ignoreFilter || D.value) return {
        count: P.value.size,
        items: (q == null ? void 0 : q.items) ?? /* @__PURE__ */ new Map(),
        groups: (q == null ? void 0 : q.groups) ?? new Set(I.value.keys())
      };
      let ae = 0;
      const le = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Set();
      for (const [Ye, Qe] of P.value) {
        const et = R(Qe, j.value);
        le.set(Ye, et ? 1 : 0), et && ae++;
      }
      for (const [Ye, Qe] of I.value) for (const et of Qe) if (le.get(et) > 0) {
        Le.add(Ye);
        break;
      }
      return {
        count: ae,
        items: le,
        groups: Le
      };
    }), Y = We();
    return de(() => {
      var q, ae, le;
      Y != null && Y.exposed && (Y.exposed.highlightItem = (q = o.value) == null ? void 0 : q.highlightItem, Y.exposed.highlightFirstItem = (ae = o.value) == null ? void 0 : ae.highlightFirstItem, Y.exposed.highlightSelected = (le = o.value) == null ? void 0 : le.highlightSelected);
    }), t({
      filtered: z,
      highlightedElement: F,
      highlightItem: (te = o.value) == null ? void 0 : te.highlightItem,
      highlightFirstItem: (ye = o.value) == null ? void 0 : ye.highlightFirstItem,
      highlightSelected: (pe = o.value) == null ? void 0 : pe.highlightSelected
    }), DS({
      modelValue: x,
      multiple: i,
      disabled: u,
      open: k,
      onOpenChange: $,
      contentId: "",
      isUserInputted: S,
      isVirtual: D,
      inputElement: A,
      highlightedElement: F,
      onInputElementChange: (q) => A.value = q,
      triggerElement: N,
      onTriggerElementChange: (q) => N.value = q,
      parentElement: s,
      resetSearchTermOnSelect: c,
      onResetSearchTerm: M.on,
      allItems: P,
      allGroups: I,
      filterSearch: j,
      filterState: z,
      ignoreFilter: d,
      openOnFocus: f,
      openOnClick: p,
      resetModelValueOnClear: v
    }), (q, ae) => (g(), w(l(tS), null, {
      default: y(() => [O(l(vS), B({
        ref_key: "primitiveElement",
        ref: o
      }, q.$attrs, {
        modelValue: l(x),
        "onUpdate:modelValue": ae[0] || (ae[0] = (le) => dt(x) ? x.value = le : null),
        style: { pointerEvents: l(k) ? "auto" : void 0 },
        as: q.as,
        "as-child": q.asChild,
        dir: l(b),
        multiple: l(i),
        name: q.name,
        required: q.required,
        disabled: l(u),
        "highlight-on-hover": l(m),
        by: a.by,
        onHighlight: ae[1] || (ae[1] = (le) => r("highlight", le))
      }), {
        default: y(() => [C(q.$slots, "default", {
          open: l(k),
          modelValue: l(x)
        })]),
        _: 3
      }, 16, [
        "modelValue",
        "style",
        "as",
        "as-child",
        "dir",
        "multiple",
        "name",
        "required",
        "disabled",
        "highlight-on-hover",
        "by"
      ])]),
      _: 3
    }));
  }
}), BS = ES;
const [DF, OS] = $t("ComboboxContent");
var PS = /* @__PURE__ */ _({
  __name: "ComboboxContentImpl",
  props: {
    position: {
      type: String,
      required: !1,
      default: "inline"
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, { position: r } = me(n), o = Mn(), { forwardRef: s, currentElement: i } = Oe();
    f2(n.bodyLock), x2(o.parentElement);
    const u = T(() => n.position === "popper" ? n : {}), d = ka(u.value), c = {
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    OS({ position: r });
    const f = E(!1);
    return de(() => {
      o.inputElement.value && (f.value = i.value.contains(o.inputElement.value), f.value && o.inputElement.value.focus());
    }), Ke(() => {
      var p;
      f.value && ((p = o.triggerElement.value) == null || p.focus());
    }), (p, h) => (g(), w(l(gS), { "as-child": "" }, {
      default: y(() => [O(l(Im), {
        "as-child": "",
        "disable-outside-pointer-events": p.disableOutsidePointerEvents,
        onDismiss: h[0] || (h[0] = (v) => l(o).onOpenChange(!1)),
        onFocusOutside: h[1] || (h[1] = (v) => {
          var m;
          (m = l(o).parentElement.value) != null && m.contains(v.target) && v.preventDefault(), a("focusOutside", v);
        }),
        onInteractOutside: h[2] || (h[2] = (v) => a("interactOutside", v)),
        onEscapeKeyDown: h[3] || (h[3] = (v) => a("escapeKeyDown", v)),
        onPointerDownOutside: h[4] || (h[4] = (v) => {
          var m;
          (m = l(o).parentElement.value) != null && m.contains(v.target) && v.preventDefault(), a("pointerDownOutside", v);
        })
      }, {
        default: y(() => [(g(), w(ut(l(r) === "popper" ? l(uS) : l(Me)), B({
          ...p.$attrs,
          ...l(d)
        }, {
          id: l(o).contentId,
          ref: l(s),
          "data-state": l(o).open.value ? "open" : "closed",
          style: {
            display: "flex",
            flexDirection: "column",
            outline: "none",
            ...l(r) === "popper" ? c : {}
          }
        }), {
          default: y(() => [C(p.$slots, "default")]),
          _: 3
        }, 16, [
          "id",
          "data-state",
          "style"
        ]))]),
        _: 3
      }, 8, ["disable-outside-pointer-events"])]),
      _: 3
    }));
  }
}), IS = PS, RS = /* @__PURE__ */ _({
  __name: "ComboboxCancel",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    Oe();
    const n = Mn();
    function a() {
      var r;
      n.filterSearch.value = "", n.inputElement.value && (n.inputElement.value.value = "", n.inputElement.value.focus(), (r = n.resetModelValueOnClear) != null && r.value && (n.modelValue.value = n.multiple.value ? [] : null));
    }
    return (r, o) => (g(), w(l(Me), B({ type: r.as === "button" ? "button" : void 0 }, t, {
      tabindex: "-1",
      onClick: a
    }), {
      default: y(() => [C(r.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), EF = RS, FS = /* @__PURE__ */ _({
  __name: "ComboboxContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    position: {
      type: String,
      required: !1
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const r = Tn(e, t), { forwardRef: o } = Oe(), s = Mn();
    return s.contentId || (s.contentId = Xn(void 0, "reka-combobox-content")), (i, u) => (g(), w(l(Ii), { present: i.forceMount || l(s).open.value }, {
      default: y(() => [O(IS, B({
        ...l(r),
        ...i.$attrs
      }, { ref: l(o) }), {
        default: y(() => [C(i.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"]));
  }
}), VS = FS, NS = /* @__PURE__ */ _({
  __name: "ComboboxEmpty",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = Mn(), a = T(() => n.ignoreFilter.value ? n.allItems.value.size === 0 : n.filterState.value.count === 0);
    return (r, o) => a.value ? (g(), w(l(Me), J(B({ key: 0 }, t)), {
      default: y(() => [C(r.$slots, "default", {}, () => [o[0] || (o[0] = oe("No options"))])]),
      _: 3
    }, 16)) : se("v-if", !0);
  }
}), LS = NS;
const [Nm, zS] = $t("ComboboxGroup");
var qS = /* @__PURE__ */ _({
  __name: "ComboboxGroup",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = Xn(void 0, "reka-combobox-group"), a = Mn(), r = T(() => a.ignoreFilter.value ? !0 : a.filterSearch.value ? a.filterState.value.groups.has(n) : !0), o = zS({
      id: n,
      labelId: ""
    });
    return de(() => {
      a.allGroups.value.has(n) || a.allGroups.value.set(n, /* @__PURE__ */ new Set());
    }), Ke(() => {
      a.allGroups.value.delete(n);
    }), (s, i) => (g(), w(l(wS), B({
      id: l(n),
      "aria-labelledby": l(o).labelId
    }, t, { hidden: r.value ? void 0 : !0 }), {
      default: y(() => [C(s.$slots, "default")]),
      _: 3
    }, 16, [
      "id",
      "aria-labelledby",
      "hidden"
    ]));
  }
}), HS = qS, WS = /* @__PURE__ */ _({
  __name: "ComboboxInput",
  props: {
    displayValue: {
      type: Function,
      required: !1
    },
    modelValue: {
      type: String,
      required: !1
    },
    autoFocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = Mn(), o = Ri(), { primitiveElement: s, currentElement: i } = jn(), u = ar(n, "modelValue", a, { passive: n.modelValue === void 0 });
    de(() => {
      i.value && r.onInputElementChange(i.value);
    });
    function d(v) {
      r.open.value || r.onOpenChange(!0);
    }
    function c(v) {
      const m = v.target;
      r.open.value ? r.filterSearch.value = m.value : (r.onOpenChange(!0), re(() => {
        m.value && (r.filterSearch.value = m.value, o.highlightFirstItem());
      }));
    }
    function f() {
      r.openOnFocus.value && !r.open.value && r.onOpenChange(!0);
    }
    function p() {
      r.openOnClick.value && !r.open.value && r.onOpenChange(!0);
    }
    function h() {
      const v = r.modelValue.value;
      n.displayValue ? u.value = n.displayValue(v) : !r.multiple.value && v && !Array.isArray(v) && typeof v != "object" ? u.value = v.toString() : u.value = "", re(() => {
        u.value = u.value;
      });
    }
    return r.onResetSearchTerm(() => {
      h();
    }), ee(r.modelValue, async () => {
      !r.isUserInputted.value && r.resetSearchTermOnSelect.value && h();
    }, {
      immediate: !0,
      deep: !0
    }), ee(r.filterState, () => {
      !r.isVirtual.value && !r.highlightedElement.value && o.highlightFirstItem();
    }), (v, m) => (g(), w(l(bS), {
      ref_key: "primitiveElement",
      ref: s,
      modelValue: l(u),
      "onUpdate:modelValue": m[0] || (m[0] = (b) => dt(u) ? u.value = b : null),
      as: v.as,
      "as-child": v.asChild,
      "auto-focus": v.autoFocus,
      disabled: v.disabled,
      "aria-expanded": l(r).open.value,
      "aria-controls": l(r).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "off",
      onClick: p,
      onInput: c,
      onKeydown: Xe(Ie(d, ["prevent"]), ["down", "up"]),
      onFocus: f
    }, {
      default: y(() => [C(v.$slots, "default")]),
      _: 3
    }, 8, [
      "modelValue",
      "as",
      "as-child",
      "auto-focus",
      "disabled",
      "aria-expanded",
      "aria-controls",
      "onKeydown"
    ]));
  }
}), US = WS, KS = /* @__PURE__ */ _({
  __name: "ComboboxItem",
  props: {
    textValue: {
      type: String,
      required: !1
    },
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = Xn(void 0, "reka-combobox-item"), o = Mn(), s = Nm(null), { primitiveElement: i, currentElement: u } = jn();
    if (n.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
    const d = T(() => {
      if (o.isVirtual.value || o.ignoreFilter.value || !o.filterSearch.value) return !0;
      {
        const c = o.filterState.value.items.get(r);
        return c === void 0 ? !0 : c > 0;
      }
    });
    return de(() => {
      var f;
      o.allItems.value.set(r, n.textValue || u.value.textContent || u.value.innerText);
      const c = s == null ? void 0 : s.id;
      c && (o.allGroups.value.has(c) ? (f = o.allGroups.value.get(c)) == null || f.add(r) : o.allGroups.value.set(c, /* @__PURE__ */ new Set([r])));
    }), Ke(() => {
      o.allItems.value.delete(r);
    }), (c, f) => d.value ? (g(), w(l(TS), B({ key: 0 }, n, {
      id: l(r),
      ref_key: "primitiveElement",
      ref: i,
      disabled: l(o).disabled.value || c.disabled,
      onSelect: f[0] || (f[0] = (p) => {
        a("select", p), !p.defaultPrevented && !l(o).multiple.value && !c.disabled && !l(o).disabled.value && (p.preventDefault(), l(o).onOpenChange(!1), l(o).modelValue.value = n.value);
      })
    }), {
      default: y(() => [C(c.$slots, "default", {}, () => [oe(ce(c.value), 1)])]),
      _: 3
    }, 16, ["id", "disabled"])) : se("v-if", !0);
  }
}), jS = KS, YS = /* @__PURE__ */ _({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(AS), J(Z(t)), {
      default: y(() => [C(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), BF = YS, GS = /* @__PURE__ */ _({
  __name: "ComboboxLabel",
  props: {
    for: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  setup(e) {
    const t = e;
    Oe();
    const n = Nm({
      id: "",
      labelId: ""
    });
    return n.labelId || (n.labelId = Xn(void 0, "reka-combobox-group-label")), (a, r) => (g(), w(l(Me), B(t, { id: l(n).labelId }), {
      default: y(() => [C(a.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), XS = GS, JS = /* @__PURE__ */ _({
  __name: "ComboboxPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(F2), J(Z(t)), {
      default: y(() => [C(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), ZS = JS, QS = /* @__PURE__ */ _({
  __name: "ComboboxSeparator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return Oe(), (n, a) => (g(), w(l(Me), B(t, { "aria-hidden": "true" }), {
      default: y(() => [C(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), eT = QS, tT = /* @__PURE__ */ _({
  __name: "ComboboxTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = Oe(), r = Mn(), o = T(() => t.disabled || r.disabled.value || !1);
    return de(() => {
      a.value && r.onTriggerElementChange(a.value);
    }), (s, i) => (g(), w(l(Me), B(t, {
      ref: l(n),
      type: s.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": l(r).open.value,
      "aria-controls": l(r).contentId,
      "data-state": l(r).open.value ? "open" : "closed",
      disabled: o.value,
      "data-disabled": o.value ? "" : void 0,
      "aria-disabled": o.value ?? void 0,
      onClick: i[0] || (i[0] = (u) => l(r).onOpenChange(!l(r).open.value))
    }), {
      default: y(() => [C(s.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "disabled",
      "data-disabled",
      "aria-disabled"
    ]));
  }
}), OF = tT;
function nT(e) {
  const t = Bi({ nonce: E() });
  return T(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
var aT = /* @__PURE__ */ _({
  __name: "ComboboxViewport",
  props: {
    nonce: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: n } = Oe(), { nonce: a } = me(t), r = nT(a), o = Mn();
    return (s, i) => (g(), L(ue, null, [O(l(Me), B({
      ...s.$attrs,
      ...t
    }, {
      ref: l(n),
      "data-reka-combobox-viewport": "",
      role: "presentation",
      style: {
        position: "relative",
        flex: l(o).isVirtual.value ? void 0 : 1,
        overflow: "auto"
      }
    }), {
      default: y(() => [C(s.$slots, "default")]),
      _: 3
    }, 16, ["style"]), O(l(Me), {
      as: "style",
      nonce: l(r)
    }, {
      default: y(() => i[0] || (i[0] = [oe(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")])),
      _: 1,
      __: [0]
    }, 8, ["nonce"])], 64));
  }
}), rT = aT;
const [Sa, oT] = $t(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext");
var sT = /* @__PURE__ */ _({
  __name: "NavigationMenuRoot",
  props: {
    modelValue: {
      type: String,
      required: !1,
      default: void 0
    },
    defaultValue: {
      type: String,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    orientation: {
      type: String,
      required: !1,
      default: "horizontal"
    },
    delayDuration: {
      type: Number,
      required: !1,
      default: 200
    },
    skipDelayDuration: {
      type: Number,
      required: !1,
      default: 300
    },
    disableClickTrigger: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disableHoverTrigger: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disablePointerLeaveClose: {
      type: Boolean,
      required: !1
    },
    unmountOnHide: {
      type: Boolean,
      required: !1,
      default: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "nav"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = ar(n, "modelValue", t, {
      defaultValue: n.defaultValue ?? "",
      passive: n.modelValue === void 0
    }), o = E(""), { forwardRef: s, currentElement: i } = Oe(), u = E(), d = E(), c = E(), { getItems: f, CollectionSlot: p } = Jn({
      key: "NavigationMenu",
      isProvider: !0
    }), { delayDuration: h, skipDelayDuration: v, dir: m, disableClickTrigger: b, disableHoverTrigger: x, unmountOnHide: k } = me(n), $ = jd(m), M = Oi(!1, v), S = T(() => r.value !== "" || M.value ? 150 : h.value), D = t2((A) => {
      typeof A == "string" && (o.value = r.value, r.value = A);
    }, S);
    return Ce(() => {
      if (!r.value) return;
      const A = f().map((N) => N.ref);
      c.value = A.find((N) => N.id.includes(r.value));
    }), oT({
      isRootMenu: !0,
      modelValue: r,
      previousValue: o,
      baseId: Xn(void 0, "reka-navigation-menu"),
      disableClickTrigger: b,
      disableHoverTrigger: x,
      dir: $,
      unmountOnHide: k,
      orientation: n.orientation,
      rootNavigationMenu: i,
      indicatorTrack: u,
      activeTrigger: c,
      onIndicatorTrackChange: (A) => {
        u.value = A;
      },
      viewport: d,
      onViewportChange: (A) => {
        d.value = A;
      },
      onTriggerEnter: (A) => {
        D(A);
      },
      onTriggerLeave: () => {
        M.value = !0, D("");
      },
      onContentEnter: () => {
        D();
      },
      onContentLeave: () => {
        n.disablePointerLeaveClose || D("");
      },
      onItemSelect: (A) => {
        o.value = r.value, r.value = A;
      },
      onItemDismiss: () => {
        o.value = r.value, r.value = "";
      }
    }), (A, N) => (g(), w(l(p), null, {
      default: y(() => [O(l(Me), {
        ref: l(s),
        "aria-label": "Main",
        as: A.as,
        "as-child": A.asChild,
        "data-orientation": A.orientation,
        dir: l($),
        "data-reka-navigation-menu": ""
      }, {
        default: y(() => [C(A.$slots, "default", { modelValue: l(r) })]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "data-orientation",
        "dir"
      ])]),
      _: 3
    }));
  }
}), iT = sT;
function Fi(e) {
  return e ? "open" : "closed";
}
function Lm(e, t) {
  return `${e}-trigger-${t}`;
}
function Yd(e, t) {
  return `${e}-content-${t}`;
}
const lT = "navigationMenu.linkSelect", ds = "navigationMenu.rootContentDismiss";
function iu(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (a) => {
    const r = a.tagName === "INPUT" && a.type === "hidden";
    return a.disabled || a.hidden || r ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function zm(e) {
  const t = sa();
  return e.some((n) => n === t ? !0 : (n.focus(), sa() !== t));
}
function uT(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function qm(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const [Gd, dT] = $t("NavigationMenuItem");
var cT = /* @__PURE__ */ _({
  __name: "NavigationMenuItem",
  props: {
    value: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "li"
    }
  },
  setup(e) {
    const t = e;
    Oe();
    const { getItems: n } = Jn({ key: "NavigationMenu" }), a = Sa(), r = Xn(t.value), o = E(), s = E(), i = Yd(a.baseId, r);
    let u = () => ({});
    const d = E(!1);
    async function c(v = "start") {
      const m = document.getElementById(i);
      if (m) {
        u();
        const b = iu(m);
        b.length && zm(v === "start" ? b : b.reverse());
      }
    }
    function f() {
      const v = document.getElementById(i);
      if (v) {
        const m = iu(v);
        m.length && (u = uT(m));
      }
    }
    dT({
      value: r,
      contentId: i,
      triggerRef: o,
      focusProxyRef: s,
      wasEscapeCloseRef: d,
      onEntryKeyDown: c,
      onFocusProxyEnter: c,
      onContentFocusOutside: f,
      onRootContentClose: f
    });
    function p() {
      var v;
      a.onItemDismiss(), (v = o.value) == null || v.focus();
    }
    function h(v) {
      const m = sa();
      if (v.keyCode === 32 || v.key === "Enter") if (a.modelValue.value === r) {
        p(), v.preventDefault();
        return;
      } else {
        v.target.click(), v.preventDefault();
        return;
      }
      const b = n().filter((k) => {
        var $;
        return ($ = k.ref.parentElement) == null ? void 0 : $.hasAttribute("data-menu-item");
      }).map((k) => k.ref);
      if (!b.includes(m)) return;
      const x = Mm(v, m, void 0, {
        itemsArray: b,
        loop: !1
      });
      x && (x == null || x.focus()), v.preventDefault(), v.stopPropagation();
    }
    return (v, m) => (g(), w(l(Me), {
      "as-child": v.asChild,
      as: v.as,
      "data-menu-item": "",
      onKeydown: Xe(h, [
        "up",
        "down",
        "left",
        "right",
        "home",
        "end",
        "space"
      ])
    }, {
      default: y(() => [C(v.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), fT = cT, pT = /* @__PURE__ */ _({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, { getItems: r } = Jn({ key: "NavigationMenu" }), { forwardRef: o, currentElement: s } = Oe(), i = Sa(), u = Gd(), d = Lm(i.baseId, u.value), c = Yd(i.baseId, u.value), f = E(null), p = T(() => {
      const k = r().map((N) => N.ref.id.split("trigger-")[1]);
      i.dir.value === "rtl" && k.reverse();
      const $ = k.indexOf(i.modelValue.value), M = k.indexOf(i.previousValue.value), S = u.value === i.modelValue.value, D = M === k.indexOf(u.value);
      if (!S && !D) return f.value;
      const A = (() => {
        if ($ !== M) {
          if (S && M !== -1) return $ > M ? "from-end" : "from-start";
          if (D && $ !== -1) return $ > M ? "to-start" : "to-end";
        }
        return null;
      })();
      return f.value = A, A;
    });
    function h(k) {
      var M, S;
      if (a("focusOutside", k), a("interactOutside", k), k.detail.originalEvent.target.hasAttribute("data-navigation-menu-trigger") && k.preventDefault(), !k.defaultPrevented) {
        u.onContentFocusOutside();
        const D = k.target;
        (S = (M = i.rootNavigationMenu) == null ? void 0 : M.value) != null && S.contains(D) && k.preventDefault();
      }
    }
    function v(k) {
      var $;
      if (a("pointerDownOutside", k), !k.defaultPrevented) {
        const M = k.target, S = r().some((A) => A.ref.contains(M)), D = i.isRootMenu && (($ = i.viewport.value) == null ? void 0 : $.contains(M));
        (S || D || !i.isRootMenu) && k.preventDefault();
      }
    }
    Ce((k) => {
      const $ = s.value;
      if (i.isRootMenu && $) {
        const M = () => {
          var S;
          i.onItemDismiss(), u.onRootContentClose(), $.contains(sa()) && ((S = u.triggerRef.value) == null || S.focus());
        };
        $.addEventListener(ds, M), k(() => $.removeEventListener(ds, M));
      }
    });
    function m(k) {
      var $, M;
      a("escapeKeyDown", k), k.defaultPrevented || (i.onItemDismiss(), (M = ($ = u.triggerRef) == null ? void 0 : $.value) == null || M.focus(), u.wasEscapeCloseRef.value = !0);
    }
    function b(k) {
      var A;
      if (k.target.closest("[data-reka-navigation-menu]") !== i.rootNavigationMenu.value) return;
      const $ = k.altKey || k.ctrlKey || k.metaKey, M = k.key === "Tab" && !$, S = iu(k.currentTarget);
      if (M) {
        const N = sa(), F = S.findIndex((R) => R === N), I = k.shiftKey ? S.slice(0, F).reverse() : S.slice(F + 1, S.length);
        if (zm(I)) k.preventDefault();
        else {
          (A = u.focusProxyRef.value) == null || A.focus();
          return;
        }
      }
      const D = Mm(k, sa(), void 0, {
        itemsArray: S,
        loop: !1,
        enableIgnoredElement: !0
      });
      D == null || D.focus();
    }
    function x() {
      var $;
      const k = new Event(ds, {
        bubbles: !0,
        cancelable: !0
      });
      ($ = s.value) == null || $.dispatchEvent(k);
    }
    return (k, $) => (g(), w(l(Im), B({
      id: l(c),
      ref: l(o),
      "aria-labelledby": l(d),
      "data-motion": p.value,
      "data-state": l(Fi)(l(i).modelValue.value === l(u).value),
      "data-orientation": l(i).orientation
    }, n, {
      onKeydown: b,
      onEscapeKeyDown: m,
      onPointerDownOutside: v,
      onFocusOutside: h,
      onDismiss: x
    }), {
      default: y(() => [C(k.$slots, "default")]),
      _: 3
    }, 16, [
      "id",
      "aria-labelledby",
      "data-motion",
      "data-state",
      "data-orientation"
    ]));
  }
}), hT = pT, vT = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, r = Tn(jk(n, "forceMount"), a), { forwardRef: o } = Oe(), s = Sa(), i = Gd(), u = T(() => i.value === s.modelValue.value), d = T(() => s.viewport.value && !s.modelValue.value && s.previousValue.value ? s.previousValue.value === i.value : !1);
    return (c, f) => (g(), w(ga, {
      to: l(Jt) && l(s).viewport.value ? l(s).viewport.value : "body",
      disabled: l(Jt) && l(s).viewport.value ? !l(s).viewport.value : !0
    }, [O(l(Ii), {
      present: c.forceMount || u.value || d.value,
      "force-mount": !l(s).unmountOnHide.value
    }, {
      default: y(({ present: p }) => [O(hT, B({
        ref: l(o),
        "data-state": l(Fi)(u.value),
        style: { pointerEvents: !u.value && l(s).isRootMenu ? "none" : void 0 }
      }, {
        ...c.$attrs,
        ...l(r)
      }, {
        hidden: !p,
        onPointerenter: f[0] || (f[0] = (h) => l(s).onContentEnter(l(i).value)),
        onPointerleave: f[1] || (f[1] = (h) => l(qm)(() => l(s).onContentLeave())(h)),
        onPointerDownOutside: f[2] || (f[2] = (h) => a("pointerDownOutside", h)),
        onFocusOutside: f[3] || (f[3] = (h) => a("focusOutside", h)),
        onInteractOutside: f[4] || (f[4] = (h) => a("interactOutside", h))
      }), {
        default: y(() => [C(c.$slots, "default")]),
        _: 2
      }, 1040, [
        "data-state",
        "style",
        "hidden"
      ])]),
      _: 3
    }, 8, ["present", "force-mount"])], 8, ["to", "disabled"]));
  }
}), mT = vT, gT = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: n } = Oe(), a = Sa(), r = E(), o = T(() => a.orientation === "horizontal"), s = T(() => !!a.modelValue.value), { activeTrigger: i } = a;
    function u() {
      i.value && (r.value = {
        size: o.value ? i.value.offsetWidth : i.value.offsetHeight,
        position: o.value ? i.value.offsetLeft : i.value.offsetTop
      });
    }
    return Ce(() => {
      a.modelValue.value && u();
    }), Vs(i, u), Vs(a.indicatorTrack, u), (d, c) => l(a).indicatorTrack.value ? (g(), w(ga, {
      key: 0,
      to: l(a).indicatorTrack.value
    }, [O(l(Ii), { present: d.forceMount || s.value }, {
      default: y(() => [O(l(Me), B({
        ref: l(n),
        "aria-hidden": "true",
        "data-state": s.value ? "visible" : "hidden",
        "data-orientation": l(a).orientation,
        "as-child": t.asChild,
        as: d.as,
        style: { ...r.value ? {
          "--reka-navigation-menu-indicator-size": `${r.value.size}px`,
          "--reka-navigation-menu-indicator-position": `${r.value.position}px`
        } : {} }
      }, d.$attrs), {
        default: y(() => [C(d.$slots, "default")]),
        _: 3
      }, 16, [
        "data-state",
        "data-orientation",
        "as-child",
        "as",
        "style"
      ])]),
      _: 3
    }, 8, ["present"])], 8, ["to"])) : se("v-if", !0);
  }
}), yT = gT, bT = /* @__PURE__ */ _({
  __name: "NavigationMenuLink",
  props: {
    active: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "a"
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { CollectionItem: r } = Jn({ key: "NavigationMenu" });
    Oe();
    async function o(s) {
      var u;
      const i = new CustomEvent(lT, {
        bubbles: !0,
        cancelable: !0,
        detail: { originalEvent: s }
      });
      if (a("select", i), !i.defaultPrevented && !s.metaKey) {
        const d = new CustomEvent(ds, {
          bubbles: !0,
          cancelable: !0
        });
        (u = s.target) == null || u.dispatchEvent(d);
      }
    }
    return (s, i) => (g(), w(l(r), null, {
      default: y(() => [O(l(Me), {
        as: s.as,
        "data-active": s.active ? "" : void 0,
        "aria-current": s.active ? "page" : void 0,
        "as-child": n.asChild,
        onClick: o
      }, {
        default: y(() => [C(s.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "data-active",
        "aria-current",
        "as-child"
      ])]),
      _: 3
    }));
  }
}), _T = bT, xT = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuList",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "ul"
    }
  },
  setup(e) {
    const t = e, n = Sa(), { forwardRef: a, currentElement: r } = Oe();
    return de(() => {
      n.onIndicatorTrackChange(r.value);
    }), (o, s) => (g(), w(l(Me), {
      ref: l(a),
      style: { position: "relative" }
    }, {
      default: y(() => [O(l(Me), B(o.$attrs, {
        "as-child": t.asChild,
        as: o.as,
        "data-orientation": l(n).orientation
      }), {
        default: y(() => [C(o.$slots, "default")]),
        _: 3
      }, 16, [
        "as-child",
        "as",
        "data-orientation"
      ])]),
      _: 3
    }, 512));
  }
}), wT = xT;
const CT = ["aria-owns"];
var $T = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, n = Sa(), a = Gd(), { CollectionItem: r } = Jn({ key: "NavigationMenu" }), { forwardRef: o, currentElement: s } = Oe(), i = E(""), u = E(""), d = Oi(!1, 300), c = E(!1), f = T(() => a.value === n.modelValue.value);
    de(() => {
      a.triggerRef = s, i.value = Lm(n.baseId, a.value), u.value = Yd(n.baseId, a.value);
    });
    function p() {
      n.disableHoverTrigger.value || (c.value = !1, a.wasEscapeCloseRef.value = !1);
    }
    function h($) {
      if (!n.disableHoverTrigger.value && $.pointerType === "mouse") {
        if (t.disabled || c.value || a.wasEscapeCloseRef.value || d.value) return;
        n.onTriggerEnter(a.value), d.value = !0;
      }
    }
    function v($) {
      if (!n.disableHoverTrigger.value && $.pointerType === "mouse") {
        if (t.disabled) return;
        n.onTriggerLeave(), d.value = !1;
      }
    }
    function m($) {
      (!("pointerType" in $) || $.pointerType === "mouse") && n.disableClickTrigger.value || d.value || (f.value ? n.onItemSelect("") : n.onItemSelect(a.value), c.value = f.value);
    }
    function b($) {
      const S = {
        horizontal: "ArrowDown",
        vertical: n.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[n.orientation];
      f.value && $.key === S && (a.onEntryKeyDown(), $.preventDefault(), $.stopPropagation());
    }
    function x($) {
      a.focusProxyRef.value = Zt($);
    }
    function k($) {
      const M = document.getElementById(a.contentId), S = $.relatedTarget, D = S === s.value, A = M == null ? void 0 : M.contains(S);
      (D || !A) && a.onFocusProxyEnter(D ? "start" : "end");
    }
    return ($, M) => (g(), L(ue, null, [O(l(r), null, {
      default: y(() => [O(l(Me), B({
        id: i.value,
        ref: l(o),
        disabled: $.disabled,
        "data-disabled": $.disabled ? "" : void 0,
        "data-state": l(Fi)(f.value),
        "data-navigation-menu-trigger": "",
        "aria-expanded": f.value,
        "aria-controls": u.value,
        "as-child": t.asChild,
        as: $.as
      }, $.$attrs, {
        onPointerenter: p,
        onPointermove: h,
        onPointerleave: v,
        onClick: m,
        onKeydown: b
      }), {
        default: y(() => [C($.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "disabled",
        "data-disabled",
        "data-state",
        "aria-expanded",
        "aria-controls",
        "as-child",
        "as"
      ])]),
      _: 3
    }), f.value ? (g(), L(ue, { key: 0 }, [O(l(Fm), {
      ref: x,
      "aria-hidden": "true",
      tabindex: 0,
      onFocus: k
    }), l(n).viewport ? (g(), L("span", {
      key: 0,
      "aria-owns": u.value
    }, null, 8, CT)) : se("v-if", !0)], 64)) : se("v-if", !0)], 64));
  }
}), kT = $T, ST = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuViewport",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    align: {
      type: String,
      required: !1,
      default: "center"
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    var h;
    const t = e, { forwardRef: n, currentElement: a } = Oe(), r = Sa(), { activeTrigger: o, rootNavigationMenu: s, modelValue: i } = r, u = E(), d = E(), c = T(() => !!r.modelValue.value);
    ee(a, () => {
      r.onViewportChange(a.value);
    });
    const f = E();
    ee([i, c], () => {
      re(() => {
        a.value && requestAnimationFrame(() => {
          var m;
          const v = (m = a.value) == null ? void 0 : m.querySelector("[data-state=open]");
          f.value = v;
        });
      });
    }, { immediate: !0 });
    function p() {
      if (f.value && o.value && s.value) {
        const v = document.documentElement.offsetWidth, m = document.documentElement.offsetHeight, b = s.value.getBoundingClientRect(), x = o.value.getBoundingClientRect(), { offsetWidth: k, offsetHeight: $ } = f.value, M = x.left - b.left, S = x.top - b.top;
        let D = null, A = null;
        switch (t.align) {
          case "start":
            D = M, A = S;
            break;
          case "end":
            D = M - k + x.width, A = S - $ + x.height;
            break;
          default:
            D = M - k / 2 + x.width / 2, A = S - $ / 2 + x.height / 2;
        }
        const N = 10;
        D + b.left < N && (D = N - b.left);
        const F = D + b.left + k;
        F > v - N && (D -= F - v + N, D < N - b.left && (D = N - b.left)), A + b.top < N && (A = N - b.top);
        const P = A + b.top + $;
        P > m - N && (A -= P - m + N, A < N - b.top && (A = N - b.top)), D = Math.round(D), A = Math.round(A), d.value = {
          left: D,
          top: A
        };
      }
    }
    return Vs(f, () => {
      f.value && (u.value = {
        width: f.value.offsetWidth,
        height: f.value.offsetHeight
      }, p());
    }), Vs([(h = globalThis.document) == null ? void 0 : h.body, s], () => {
      p();
    }), (v, m) => (g(), w(l(Ii), {
      present: v.forceMount || c.value,
      "force-mount": !l(r).unmountOnHide.value,
      onAfterLeave: m[2] || (m[2] = () => {
        u.value = void 0, d.value = void 0;
      })
    }, {
      default: y(({ present: b }) => {
        var x, k, $, M;
        return [O(l(Me), B(v.$attrs, {
          ref: l(n),
          as: v.as,
          "as-child": v.asChild,
          "data-state": l(Fi)(c.value),
          "data-orientation": l(r).orientation,
          style: {
            pointerEvents: !c.value && l(r).isRootMenu ? "none" : void 0,
            "--reka-navigation-menu-viewport-width": u.value ? `${(x = u.value) == null ? void 0 : x.width}px` : void 0,
            "--reka-navigation-menu-viewport-height": u.value ? `${(k = u.value) == null ? void 0 : k.height}px` : void 0,
            "--reka-navigation-menu-viewport-left": d.value ? `${($ = d.value) == null ? void 0 : $.left}px` : void 0,
            "--reka-navigation-menu-viewport-top": d.value ? `${(M = d.value) == null ? void 0 : M.top}px` : void 0
          },
          hidden: !b,
          onPointerenter: m[0] || (m[0] = (S) => l(r).onContentEnter(l(r).modelValue.value)),
          onPointerleave: m[1] || (m[1] = (S) => l(qm)(() => l(r).onContentLeave())(S))
        }), {
          default: y(() => [C(v.$slots, "default")]),
          _: 2
        }, 1040, [
          "as",
          "as-child",
          "data-state",
          "data-orientation",
          "style",
          "hidden"
        ])];
      }),
      _: 3
    }, 8, ["present", "force-mount"]));
  }
}), TT = ST;
const PF = /* @__PURE__ */ _({
  __name: "Avatar",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(L2), {
      "data-slot": "avatar",
      class: X(l(V)("relative flex size-8 shrink-0 overflow-hidden rounded-full", t.class))
    }, {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function MT(e) {
  return ci() ? (fi(e), !0) : !1;
}
const wl = /* @__PURE__ */ new WeakMap(), AT = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const n = e[0], a = (t = We()) == null ? void 0 : t.proxy;
  if (a == null && !Sh())
    throw new Error("injectLocal must be called in setup");
  return a && wl.has(a) && n in wl.get(a) ? wl.get(a)[n] : Gn(...e);
};
function DT(e) {
  if (!dt(e))
    return Wn(e);
  const t = new Proxy({}, {
    get(n, a, r) {
      return l(Reflect.get(e.value, a, r));
    },
    set(n, a, r) {
      return dt(e.value[a]) && !dt(r) ? e.value[a].value = r : e.value[a] = r, !0;
    },
    deleteProperty(n, a) {
      return Reflect.deleteProperty(e.value, a);
    },
    has(n, a) {
      return Reflect.has(e.value, a);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return Wn(t);
}
function ET(e) {
  return DT(T(e));
}
function An(e, ...t) {
  const n = t.flat(), a = n[0];
  return ET(() => Object.fromEntries(typeof a == "function" ? Object.entries(me(e)).filter(([r, o]) => !a(Ee(o), r)) : Object.entries(me(e)).filter((r) => !n.includes(r[0]))));
}
const BT = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const OT = (e) => typeof e < "u", PT = Object.prototype.toString, IT = (e) => PT.call(e) === "[object Object]", RT = () => {
};
function Hm(...e) {
  if (e.length !== 1)
    return ju(...e);
  const t = e[0];
  return typeof t == "function" ? fr(Gu(() => ({ get: t, set: RT }))) : E(t);
}
function FT(e, t) {
  function n(...a) {
    return new Promise((r, o) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(r).catch(o);
    });
  }
  return n;
}
const Wm = (e) => e();
function VT(e = Wm, t = {}) {
  const {
    initialState: n = "active"
  } = t, a = Hm(n === "active");
  function r() {
    a.value = !1;
  }
  function o() {
    a.value = !0;
  }
  const s = (...i) => {
    a.value && e(...i);
  };
  return { isActive: fr(a), pause: r, resume: o, eventFilter: s };
}
function Vf(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Cl(e) {
  return Array.isArray(e) ? e : [e];
}
function NT(e) {
  return We();
}
function LT(e, t, n = {}) {
  const {
    eventFilter: a = Wm,
    ...r
  } = n;
  return ee(
    e,
    FT(
      a,
      t
    ),
    r
  );
}
function zT(e, t, n = {}) {
  const {
    eventFilter: a,
    initialState: r = "active",
    ...o
  } = n, { eventFilter: s, pause: i, resume: u, isActive: d } = VT(a, { initialState: r });
  return { stop: LT(
    e,
    t,
    {
      ...o,
      eventFilter: s
    }
  ), pause: i, resume: u, isActive: d };
}
function Um(e, t = !0, n) {
  NT() ? de(e, n) : t ? e() : re(e);
}
function qT(e, t, n) {
  return ee(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const ao = BT ? window : void 0;
function Km(e) {
  var t;
  const n = Ee(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Ns(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, a = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), r = T(() => {
    const i = Cl(Ee(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), o = qT(
    () => {
      var i, u;
      return [
        (u = (i = r.value) == null ? void 0 : i.map((d) => Km(d))) != null ? u : [ao].filter((d) => d != null),
        Cl(Ee(r.value ? e[1] : e[0])),
        Cl(l(r.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Ee(r.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, c]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const f = IT(c) ? { ...c } : c;
      t.push(
        ...i.flatMap(
          (p) => u.flatMap(
            (h) => d.map((v) => a(p, h, v, f))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    o(), n();
  };
  return MT(n), s;
}
// @__NO_SIDE_EFFECTS__
function HT() {
  const e = mn(!1), t = We();
  return t && de(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function WT(e) {
  const t = /* @__PURE__ */ HT();
  return T(() => (t.value, !!e()));
}
const UT = Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function KT() {
  const e = Sh() ? /* @__PURE__ */ AT(UT, null) : null;
  return typeof e == "number" ? e : void 0;
}
function jm(e, t = {}) {
  const { window: n = ao, ssrWidth: a = /* @__PURE__ */ KT() } = t, r = /* @__PURE__ */ WT(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), o = mn(typeof a == "number"), s = mn(), i = mn(!1), u = (d) => {
    i.value = d.matches;
  };
  return Ce(() => {
    if (o.value) {
      o.value = !r.value;
      const d = Ee(e).split(",");
      i.value = d.some((c) => {
        const f = c.includes("not all"), p = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), h = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let v = !!(p || h);
        return p && v && (v = a >= Vf(p[1])), h && v && (v = a <= Vf(h[1])), f ? !v : v;
      });
      return;
    }
    r.value && (s.value = n.matchMedia(Ee(e)), i.value = s.value.matches);
  }), Ns(s, "change", u, { passive: !0 }), T(() => i.value);
}
function jT(e) {
  return JSON.parse(JSON.stringify(e));
}
const Ko = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, jo = "__vueuse_ssr_handlers__", YT = /* @__PURE__ */ GT();
function GT() {
  return jo in Ko || (Ko[jo] = Ko[jo] || {}), Ko[jo];
}
function Ym(e, t) {
  return YT[e] || t;
}
// @__NO_SIDE_EFFECTS__
function XT(e) {
  return jm("(prefers-color-scheme: dark)", e);
}
function JT(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const ZT = {
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
}, Nf = "vueuse-storage";
function QT(e, t, n, a = {}) {
  var r;
  const {
    flush: o = "pre",
    deep: s = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: u = !0,
    mergeDefaults: d = !1,
    shallow: c,
    window: f = ao,
    eventFilter: p,
    onError: h = (z) => {
      console.error(z);
    },
    initOnMounted: v
  } = a, m = (c ? mn : E)(typeof t == "function" ? t() : t), b = T(() => Ee(e));
  if (!n)
    try {
      n = Ym("getDefaultStorage", () => {
        var z;
        return (z = ao) == null ? void 0 : z.localStorage;
      })();
    } catch (z) {
      h(z);
    }
  if (!n)
    return m;
  const x = Ee(t), k = JT(x), $ = (r = a.serializer) != null ? r : ZT[k], { pause: M, resume: S } = zT(
    m,
    (z) => P(z),
    { flush: o, deep: s, eventFilter: p }
  );
  ee(b, () => R(), { flush: o });
  let D = !1;
  const A = (z) => {
    v && !D || R(z);
  }, N = (z) => {
    v && !D || j(z);
  };
  f && i && (n instanceof Storage ? Ns(f, "storage", A, { passive: !0 }) : Ns(f, Nf, N)), v ? Um(() => {
    D = !0, R();
  }) : R();
  function F(z, Y) {
    if (f) {
      const te = {
        key: b.value,
        oldValue: z,
        newValue: Y,
        storageArea: n
      };
      f.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", te) : new CustomEvent(Nf, {
        detail: te
      }));
    }
  }
  function P(z) {
    try {
      const Y = n.getItem(b.value);
      if (z == null)
        F(Y, null), n.removeItem(b.value);
      else {
        const te = $.write(z);
        Y !== te && (n.setItem(b.value, te), F(Y, te));
      }
    } catch (Y) {
      h(Y);
    }
  }
  function I(z) {
    const Y = z ? z.newValue : n.getItem(b.value);
    if (Y == null)
      return u && x != null && n.setItem(b.value, $.write(x)), x;
    if (!z && d) {
      const te = $.read(Y);
      return typeof d == "function" ? d(te, x) : k === "object" && !Array.isArray(te) ? { ...x, ...te } : te;
    } else return typeof Y != "string" ? Y : $.read(Y);
  }
  function R(z) {
    if (!(z && z.storageArea !== n)) {
      if (z && z.key == null) {
        m.value = x;
        return;
      }
      if (!(z && z.key !== b.value)) {
        M();
        try {
          const Y = $.write(m.value);
          (z === void 0 || (z == null ? void 0 : z.newValue) !== Y) && (m.value = I(z));
        } catch (Y) {
          h(Y);
        } finally {
          z ? re(S) : S();
        }
      }
    }
  }
  function j(z) {
    R(z.detail);
  }
  return m;
}
const eM = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function tM(e = {}) {
  const {
    selector: t = "html",
    attribute: n = "class",
    initialValue: a = "auto",
    window: r = ao,
    storage: o,
    storageKey: s = "vueuse-color-scheme",
    listenToStorageChanges: i = !0,
    storageRef: u,
    emitAuto: d,
    disableTransition: c = !0
  } = e, f = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, p = /* @__PURE__ */ XT({ window: r }), h = T(() => p.value ? "dark" : "light"), v = u || (s == null ? Hm(a) : QT(s, a, o, { window: r, listenToStorageChanges: i })), m = T(() => v.value === "auto" ? h.value : v.value), b = Ym(
    "updateHTMLAttrs",
    (M, S, D) => {
      const A = typeof M == "string" ? r == null ? void 0 : r.document.querySelector(M) : Km(M);
      if (!A)
        return;
      const N = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Set();
      let P = null;
      if (S === "class") {
        const R = D.split(/\s/g);
        Object.values(f).flatMap((j) => (j || "").split(/\s/g)).filter(Boolean).forEach((j) => {
          R.includes(j) ? N.add(j) : F.add(j);
        });
      } else
        P = { key: S, value: D };
      if (N.size === 0 && F.size === 0 && P === null)
        return;
      let I;
      c && (I = r.document.createElement("style"), I.appendChild(document.createTextNode(eM)), r.document.head.appendChild(I));
      for (const R of N)
        A.classList.add(R);
      for (const R of F)
        A.classList.remove(R);
      P && A.setAttribute(P.key, P.value), c && (r.getComputedStyle(I).opacity, document.head.removeChild(I));
    }
  );
  function x(M) {
    var S;
    b(t, n, (S = f[M]) != null ? S : M);
  }
  function k(M) {
    e.onChanged ? e.onChanged(M, x) : x(M);
  }
  ee(m, k, { flush: "post", immediate: !0 }), Um(() => k(m.value));
  const $ = T({
    get() {
      return d ? v.value : m.value;
    },
    set(M) {
      v.value = M;
    }
  });
  return Object.assign($, { store: v, system: h, state: m });
}
function nM(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: n = ""
  } = e, a = tM({
    ...e,
    onChanged: (s, i) => {
      var u;
      e.onChanged ? (u = e.onChanged) == null || u.call(e, s === "dark", i, s) : i(s);
    },
    modes: {
      dark: t,
      light: n
    }
  }), r = T(() => a.system.value);
  return T({
    get() {
      return a.value === "dark";
    },
    set(s) {
      const i = s ? "dark" : "light";
      r.value === i ? a.value = "auto" : a.value = i;
    }
  });
}
// @__NO_SIDE_EFFECTS__
function Xd(e, t, n, a = {}) {
  var r, o, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, h = We(), v = n || (h == null ? void 0 : h.emit) || ((r = h == null ? void 0 : h.$emit) == null ? void 0 : r.bind(h)) || ((s = (o = h == null ? void 0 : h.proxy) == null ? void 0 : o.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let m = d;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const b = ($) => i ? typeof i == "function" ? i($) : jT($) : $, x = () => OT(e[t]) ? b(e[t]) : f, k = ($) => {
    p ? p($) && v(m, $) : v(m, $);
  };
  if (u) {
    const $ = x(), M = E($);
    let S = !1;
    return ee(
      () => e[t],
      (D) => {
        S || (S = !0, M.value = b(D), re(() => S = !1));
      }
    ), ee(
      M,
      (D) => {
        !S && (D !== e[t] || c) && k(D);
      },
      { deep: c }
    ), M;
  } else
    return T({
      get() {
        return x();
      },
      set($) {
        k($);
      }
    });
}
const IF = /* @__PURE__ */ _({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = An(t, "class");
    return (a, r) => (g(), w(l(q2), B({ "data-slot": "avatar-fallback" }, l(n), {
      class: l(V)("bg-muted flex size-full items-center justify-center rounded-full", t.class)
    }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), RF = /* @__PURE__ */ _({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(U2), B({ "data-slot": "avatar-image" }, t, { class: "aspect-square size-full" }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), FF = /* @__PURE__ */ _({
  __name: "Badge",
  props: {
    variant: {},
    type: {},
    size: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(l(V)(l(aM)({ variant: e.variant, type: e.type, size: e.size }), t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), aM = Sn(
  "inline-flex items-center rounded-full h-fit font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        warning: "bg-warning text-warning-foreground"
      },
      type: {
        outline: "border",
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
), VF = /* @__PURE__ */ _({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("nav", {
      "aria-label": "breadcrumb",
      class: X(t.class)
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), NF = /* @__PURE__ */ _({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: X(l(V)("flex h-9 w-9 items-center justify-center", t.class))
    }, [
      C(n.$slots, "default", {}, () => [
        O(l(Tm), { class: "h-4 w-4" })
      ]),
      a[0] || (a[0] = _e("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), LF = /* @__PURE__ */ _({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("li", {
      class: X(l(V)("inline-flex items-center gap-1.5", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), zF = /* @__PURE__ */ _({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), {
      as: e.as,
      "as-child": e.asChild,
      class: X(l(V)("hover:text-foreground transition-colors", t.class))
    }, {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), qF = /* @__PURE__ */ _({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("ol", {
      class: X(
        l(V)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5",
          t.class
        )
      )
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), HF = /* @__PURE__ */ _({
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
      class: X(l(V)("text-foreground font-normal", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), WF = /* @__PURE__ */ _({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: X(l(V)("[&>svg]:h-3.5 [&>svg]:w-3.5", t.class))
    }, [
      C(n.$slots, "default", {}, () => [
        O(l(Wd))
      ])
    ], 2));
  }
}), Dn = /* @__PURE__ */ _({
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
    return (n, a) => (g(), w(l(W), {
      as: e.as,
      "as-child": e.asChild,
      class: X(l(V)(l(Ta)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: y(() => [
        C(n.$slots, "default"),
        e.loading ? (g(), w(l(Bk), {
          key: 0,
          class: X(l(rM)({ size: e.size }))
        }, null, 8, ["class"])) : se("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), rM = Sn("animate-spin", {
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
}), Ta = Sn(
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
), UF = /* @__PURE__ */ _({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(
        l(V)("border-card-border bg-card text-card-foreground rounded-lg border shadow-xs", t.class)
      )
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), KF = /* @__PURE__ */ _({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(l(V)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), jF = /* @__PURE__ */ _({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("h3", {
      class: X(l(V)("text-2xl font-semibold leading-none tracking-tight", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), YF = /* @__PURE__ */ _({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("p", {
      class: X(l(V)("text-muted-foreground text-sm", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), GF = /* @__PURE__ */ _({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(l(V)("p-6 pt-0", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), XF = /* @__PURE__ */ _({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(l(V)("flex items-center p-6 pt-0", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), JF = /* @__PURE__ */ _({
  __name: "Combobox",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    resetSearchTermOnBlur: { type: Boolean },
    resetSearchTermOnSelect: { type: Boolean },
    openOnFocus: { type: Boolean },
    openOnClick: { type: Boolean },
    ignoreFilter: { type: Boolean },
    resetModelValueOnClear: { type: Boolean },
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
  setup(e, { emit: t }) {
    const r = Tn(e, t);
    return (o, s) => (g(), w(l(BS), J(Z(l(r))), {
      default: y(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ZF = /* @__PURE__ */ _({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = ka(n);
    return (r, o) => (g(), w(l(cS), B(l(a), {
      class: l(V)("w-[200px]", t.class)
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), QF = /* @__PURE__ */ _({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(LS), B(n.value, {
      class: l(V)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e6 = /* @__PURE__ */ _({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(HS), B(n.value, {
      class: l(V)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", t.class)
    }), {
      default: y(() => [
        e.heading ? (g(), w(l(XS), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            oe(ce(e.heading), 1)
          ]),
          _: 1
        })) : se("", !0),
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), t6 = /* @__PURE__ */ _({
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
  setup(e, { emit: t }) {
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = Tn(r, a);
    return (s, i) => (g(), w(l(US), B(l(o), {
      class: l(V)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", n.class)
    }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n6 = /* @__PURE__ */ _({
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
  setup(e, { emit: t }) {
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = Tn(r, a);
    return (s, i) => (g(), w(l(jS), B(l(o), {
      class: l(V)("relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0", n.class)
    }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), a6 = /* @__PURE__ */ _({
  __name: "ComboboxList",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: { default: "center" },
    alignOffset: {},
    alignFlip: { type: Boolean },
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
  setup(e, { emit: t }) {
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = Tn(r, a);
    return (s, i) => (g(), w(l(ZS), null, {
      default: y(() => [
        O(l(VS), B(l(o), {
          class: l(V)("z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n.class)
        }), {
          default: y(() => [
            O(l(rT), null, {
              default: y(() => [
                C(s.$slots, "default")
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
}), r6 = /* @__PURE__ */ _({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(eT), B(n.value, {
      class: l(V)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oM = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, o6 = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(Fv), B({
      class: l(V)("p-3", n.class)
    }, l(o)), {
      default: y(({ grid: u, weekDays: d }) => [
        O(l(tg), null, {
          default: y(() => [
            O(l(iM)),
            O(l(ng)),
            O(l(sM))
          ]),
          _: 1
        }),
        _e("div", oM, [
          (g(!0), L(ue, null, Ae(u, (c) => (g(), w(l(Jm), {
            key: c.value.toString()
          }, {
            default: y(() => [
              O(l(Qm), null, {
                default: y(() => [
                  O(l(Ls), null, {
                    default: y(() => [
                      (g(!0), L(ue, null, Ae(d, (f) => (g(), w(l(eg), { key: f }, {
                        default: y(() => [
                          oe(ce(f), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              O(l(Zm), null, {
                default: y(() => [
                  (g(!0), L(ue, null, Ae(c.rows, (f, p) => (g(), w(l(Ls), {
                    key: `weekDate-${p}`,
                    class: "mt-2 w-full"
                  }, {
                    default: y(() => [
                      (g(!0), L(ue, null, Ae(f, (h) => (g(), w(l(Gm), {
                        key: h.toString(),
                        date: h
                      }, {
                        default: y(() => [
                          O(l(Xm), {
                            day: h,
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
}), Gm = /* @__PURE__ */ _({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(fx), B({
      class: l(V)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        t.class
      )
    }, l(a)), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xm = /* @__PURE__ */ _({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(bx), B({
      class: l(V)(
        l(Ta)({ variant: "ghost" }),
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
    }, l(a)), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jm = /* @__PURE__ */ _({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(cx), B({
      class: l(V)("w-full border-collapse space-y-1", t.class)
    }, l(a)), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zm = /* @__PURE__ */ _({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(gx), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qm = /* @__PURE__ */ _({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(mx), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ls = /* @__PURE__ */ _({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(yx), B({
      class: l(V)("flex", t.class)
    }, l(a)), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), eg = /* @__PURE__ */ _({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(px), B({
      class: l(V)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(a)), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tg = /* @__PURE__ */ _({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(ux), B({
      class: l(V)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(a)), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ng = /* @__PURE__ */ _({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(dx), B({
      class: l(V)("text-text text-sm font-medium", t.class)
    }, l(a)), {
      default: y(({ headingValue: s }) => [
        C(r.$slots, "default", { headingValue: s }, () => [
          oe(ce(s), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sM = /* @__PURE__ */ _({
  __name: "CalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(hx), B({
      class: l(V)(
        l(Ta)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: y(() => [...o[0] || (o[0] = [
        oe(" > ", -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), iM = /* @__PURE__ */ _({
  __name: "CalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(vx), B({
      class: l(V)(
        l(Ta)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: y(() => [...o[0] || (o[0] = [
        oe(" < ", -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), lu = /* @__PURE__ */ _({
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
    const r = he(e, t);
    return (o, s) => (g(), w(l(xC), J(Z(l(r))), {
      default: y(({ open: i }) => [
        C(o.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), uu = /* @__PURE__ */ _({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(UC), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), du = /* @__PURE__ */ _({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    open: { type: Boolean }
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l($C), B(l(a), {
      class: l(V)(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-start text-sm transition focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        t.class
      )
    }), {
      default: y(() => [
        C(r.$slots, "default"),
        O(l(KC), { "as-child": "" }, {
          default: y(() => [
            O(l(Di), {
              class: X(["size-4 shrink-0 opacity-50 transition", e.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cu = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(kC), null, {
      default: y(() => [
        O(l(OC), B({ ...l(o), ...s.$attrs }, {
          class: l(V)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            O(l(uM)),
            O(l(qC), {
              class: X(
                l(V)(
                  "p-1",
                  e.position === "popper" && "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)"
                )
              )
            }, {
              default: y(() => [
                C(s.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            O(l(dM))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), s6 = /* @__PURE__ */ _({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(LC), B({
      class: l(V)("w-full p-1", t.class)
    }, n.value), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lM = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, fu = /* @__PURE__ */ _({
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
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(RC), B(l(a), {
      class: l(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        t.class
      )
    }), {
      default: y(() => [
        _e("span", lM, [
          O(l(FC), null, {
            default: y(() => [
              O(l(Hd), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        O(l(am), null, {
          default: y(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), i6 = /* @__PURE__ */ _({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(am), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), l6 = /* @__PURE__ */ _({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(zC), {
      class: X(l(V)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), u6 = /* @__PURE__ */ _({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(PC), B(n.value, {
      class: l(V)("bg-muted -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), uM = /* @__PURE__ */ _({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(HC), B(l(a), {
      class: l(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        C(r.$slots, "default", {}, () => [
          O(l(Mk), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dM = /* @__PURE__ */ _({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(WC), B(l(a), {
      class: l(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        C(r.$slots, "default", {}, () => [
          O(l(Di), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cM = { class: "flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, fM = /* @__PURE__ */ _({
  __name: "CalendarWithSelect",
  props: {
    modelValue: { default: void 0 },
    multiple: { type: Boolean },
    defaultValue: {},
    defaultPlaceholder: {},
    placeholder: { default() {
      return ks(yn());
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
    const n = e, a = t, r = T(() => {
      const { class: u, placeholder: d, ...c } = n;
      return c;
    }), o = /* @__PURE__ */ Xd(n, "modelValue", a, {
      passive: !0,
      defaultValue: ks(yn())
    }), s = he(r, a), i = Cv("en");
    return (u, d) => (g(), w(l(Fv), B({
      placeholder: l(o),
      "onUpdate:placeholder": d[2] || (d[2] = (c) => dt(o) ? o.value = c : null)
    }, l(s), {
      class: l(V)("rounded-md border p-3", n.class)
    }), {
      default: y(({ date: c, grid: f, weekDays: p }) => [
        O(l(tg), null, {
          default: y(() => [
            O(l(ng), { class: "flex w-full items-center justify-between gap-2" }, {
              default: y(() => [
                O(l(lu), {
                  "default-value": l(o).month.toString(),
                  "onUpdate:modelValue": d[0] || (d[0] = (h) => {
                    var v;
                    !h || !l(o) || Number(h) !== ((v = l(o)) == null ? void 0 : v.month) && (o.value = l(o).set({
                      month: Number(h)
                    }));
                  })
                }, {
                  default: y(() => [
                    O(l(du), {
                      "aria-label": "Select month",
                      class: "w-[60%]"
                    }, {
                      default: y(() => [
                        O(l(uu), { placeholder: "Select month" })
                      ]),
                      _: 1
                    }),
                    O(l(cu), { class: "max-h-[200px]" }, {
                      default: y(() => [
                        (g(!0), L(ue, null, Ae(l(Ob)({ dateObj: c }), (h) => (g(), w(l(fu), {
                          key: h.toString(),
                          value: h.month.toString()
                        }, {
                          default: y(() => [
                            oe(ce(l(i).custom(l(xt)(h), { month: "long" })), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]))), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["default-value"]),
                O(l(lu), {
                  "default-value": l(o).year.toString(),
                  "onUpdate:modelValue": d[1] || (d[1] = (h) => {
                    var v;
                    !h || !l(o) || Number(h) !== ((v = l(o)) == null ? void 0 : v.year) && (o.value = l(o).set({
                      year: Number(h)
                    }));
                  })
                }, {
                  default: y(() => [
                    O(l(du), {
                      "aria-label": "Select year",
                      class: "w-[40%]"
                    }, {
                      default: y(() => [
                        O(l(uu), { placeholder: "Select year" })
                      ]),
                      _: 1
                    }),
                    O(l(cu), { class: "max-h-[200px]" }, {
                      default: y(() => [
                        (g(!0), L(ue, null, Ae(l(Bb)({ dateObj: c, startIndex: -100, endIndex: 10 }), (h) => (g(), w(l(fu), {
                          key: h.toString(),
                          value: h.year.toString()
                        }, {
                          default: y(() => [
                            oe(ce(h.year), 1)
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
        _e("div", cM, [
          (g(!0), L(ue, null, Ae(f, (h) => (g(), w(l(Jm), {
            key: h.value.toString()
          }, {
            default: y(() => [
              O(l(Qm), null, {
                default: y(() => [
                  O(l(Ls), null, {
                    default: y(() => [
                      (g(!0), L(ue, null, Ae(p, (v) => (g(), w(l(eg), { key: v }, {
                        default: y(() => [
                          oe(ce(v), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              O(l(Zm), { class: "grid" }, {
                default: y(() => [
                  (g(!0), L(ue, null, Ae(h.rows, (v, m) => (g(), w(l(Ls), {
                    key: `weekDate-${m}`,
                    class: "mt-2 w-full"
                  }, {
                    default: y(() => [
                      (g(!0), L(ue, null, Ae(v, (b) => (g(), w(l(Gm), {
                        key: b.toString(),
                        date: b
                      }, {
                        default: y(() => [
                          O(l(Xm), {
                            day: b,
                            month: h.value
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
}), pM = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(Ox), B(l(o), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        n.class
      ]
    }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ag = /* @__PURE__ */ _({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = he(e, t);
    return (o, s) => (g(), w(l(Av), J(Z(l(r))), {
      default: y(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), d6 = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(wo), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hM = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Dv), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vM = /* @__PURE__ */ _({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(l(V)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), mM = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(Pv), B(l(a), {
      class: l(V)("text-heading text-2xl font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gM = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(Iv), B(l(a), {
      class: l(V)("text-sub-text text-sm", t.class)
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rg = /* @__PURE__ */ _({
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
    const n = t, a = e, r = T(() => {
      const { class: s, ...i } = a;
      return i;
    }), o = he(r, n);
    return (s, i) => (g(), w(l(kd), null, {
      default: y(() => [
        O(l(Dd), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        O(l(Ad), B(l(o), {
          class: l(V)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
            a.class
          )
        }), {
          default: y(() => [
            C(s.$slots, "default"),
            O(l(wo), {
              onClick: i[0] || (i[0] = (u) => n("close", u)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: y(() => [
                O(l(Ei), { class: "size-4 dark:text-slate-300" }),
                i[1] || (i[1] = _e("span", { class: "sr-only" }, "Close", -1))
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
}), c6 = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(kd), null, {
      default: y(() => [
        O(l(Dd), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: y(() => [
            O(l(Ad), B({
              class: l(V)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg md:w-full dark:border-slate-800 dark:bg-slate-950",
                n.class
              )
            }, l(o), {
              onPointerDownOutside: i[0] || (i[0] = (u) => {
                const d = u.detail.originalEvent, c = d.target;
                (d.offsetX > c.clientWidth || d.offsetY > c.clientHeight) && u.preventDefault();
              })
            }), {
              default: y(() => [
                C(s.$slots, "default"),
                O(l(wo), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: y(() => [
                    O(l(Ei), { class: "size-4" }),
                    i[1] || (i[1] = _e("span", { class: "sr-only" }, "Close", -1))
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
}), yM = /* @__PURE__ */ _({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(
        l(V)("text-text flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class)
      )
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), f6 = /* @__PURE__ */ _({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = he(e, t);
    return (o, s) => (g(), w(l(ag), J(Z(l(r))), {
      default: y(() => [
        O(l(rg), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            O(pM, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: y(() => [
                C(o.$slots, "default")
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
}), p6 = /* @__PURE__ */ _({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(zx), B(n.value, {
      class: l(V)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), h6 = /* @__PURE__ */ _({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(Rx), B(n.value, {
      class: l(V)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: y(() => [
        e.heading ? (g(), w(l(Fx), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: y(() => [
            oe(ce(e.heading), 1)
          ]),
          _: 1
        })) : se("", !0),
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bM = { class: "flex items-center border-b px-3" }, v6 = /* @__PURE__ */ _({
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
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), L("div", bM, [
      O(l(Fk), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      O(l(Px), B({ ...l(a), ...r.$attrs }, {
        "auto-focus": "",
        class: l(V)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), m6 = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(Ux), B(l(o), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-hidden data-disabled:pointer-events-none data-highlighted:bg-slate-100 data-highlighted:text-slate-900 data-disabled:opacity-50 dark:data-highlighted:bg-slate-800 dark:data-highlighted:text-slate-50" }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _M = { role: "presentation" }, g6 = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(Lx), B(l(o), {
      class: l(V)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        _e("div", _M, [
          C(s.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), y6 = /* @__PURE__ */ _({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(Kx), B(n.value, {
      class: l(V)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), b6 = /* @__PURE__ */ _({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("span", {
      class: X(l(V)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), [xM, wM] = S0("DraggableRoot"), _6 = /* @__PURE__ */ _({
  __name: "DraggableArea",
  props: {
    class: {},
    data: {}
  },
  emits: ["drop"],
  setup(e, { emit: t }) {
    const n = e, a = $M();
    wM(a);
    const r = t, o = (u) => r("drop", u), s = (u) => {
      u.preventDefault(), a.draggedToArea.value = n.data;
    }, i = () => a.draggedFromArea.value = n.data;
    return (u, d) => (g(), L("div", {
      class: X(n.class),
      onDrop: o,
      onDragstart: i,
      onDragover: s
    }, [
      C(u.$slots, "default")
    ], 34));
  }
}), x6 = /* @__PURE__ */ _({
  __name: "DraggableItem",
  props: {
    class: {},
    data: {},
    index: {}
  },
  emits: ["dragstart", "dragend", "dragover"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = xM(), o = (u) => {
      r.draggableItem.value = n.data, a("dragstart", {
        event: u,
        data: n.data
      });
    }, s = () => {
      r.draggableIndex.value = n.index, a("dragover", n.index);
    }, i = (u) => {
      r.draggableItem.value = null, r.draggableIndex.value = null, a("dragend", u);
    };
    return (u, d) => (g(), L("div", {
      class: X(n.class),
      draggable: "true",
      onDragstart: o,
      onDragend: i,
      onDragover: s
    }, [
      C(u.$slots, "default", { item: e.data })
    ], 34));
  }
}), og = E(null), sg = E(null), ig = E(null), lg = E(null), CM = () => {
  og.value = null, sg.value = null, ig.value = null, lg.value = null;
};
function $M() {
  return {
    draggedFromArea: og,
    draggedToArea: sg,
    draggableItem: ig,
    draggableIndex: lg,
    resetDraggable: CM
  };
}
const kM = /* @__PURE__ */ _({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = he(e, t);
    return (o, s) => (g(), w(l(kw), J(Z(l(r))), {
      default: y(({ open: i }) => [
        C(o.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), SM = /* @__PURE__ */ _({
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
      class: X(
        l(V)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          e.inset && "pl-8",
          t.class
        )
      )
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), TM = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = be(e);
    return (a, r) => (g(), w(l(Sw), B({ class: "outline-hidden" }, l(n)), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), MM = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(Tw), null, {
      default: y(() => [
        O(l(Mw), B(l(o), {
          class: l(V)(
            "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-md",
            n.class
          )
        }), {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), w6 = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Aw), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), C6 = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = he(e, t);
    return (o, s) => (g(), w(l(Ow), J(Z(l(r))), {
      default: y(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $6 = /* @__PURE__ */ _({
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
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(Jv), B(l(a), {
      class: l(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        e.inset && "pl-8",
        t.class
      )
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), AM = /* @__PURE__ */ _({
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
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(SM, {
      class: X(t.class)
    }, {
      default: y(() => [
        O(l(Jv), B(l(a), {
          as: e.as,
          href: e.href,
          class: "size-full"
        }), {
          default: y(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "href"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), DM = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, k6 = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(Ew), B(l(o), {
      class: l(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        _e("span", DM, [
          O(l(Zv), null, {
            default: y(() => [
              O(l(Hd), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), EM = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, S6 = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(Pw), B(l(o), {
      class: l(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        _e("span", EM, [
          O(l(Zv), null, {
            default: y(() => [
              O(l(Ek), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), T6 = /* @__PURE__ */ _({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("span", {
      class: X(l(V)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), M6 = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(Dw), B(n.value, {
      class: l(V)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), A6 = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(Bw), B(l(a), {
      class: l(V)("px-2 py-1.5 text-sm font-semibold", e.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), D6 = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = he(e, t);
    return (o, s) => (g(), w(l(Iw), J(Z(l(r))), {
      default: y(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), E6 = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(Fw), B(l(a), {
      class: l(V)(
        "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden",
        t.class
      )
    }), {
      default: y(() => [
        C(r.$slots, "default"),
        O(l(Wd), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), B6 = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(Rw), B(l(o), {
      class: l(V)(
        "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-lg",
        n.class
      )
    }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), O6 = /* @__PURE__ */ _({
  __name: "Empty",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "empty",
      class: X(l(V)(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
        t.class
      ))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), P6 = /* @__PURE__ */ _({
  __name: "EmptyContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "empty-content",
      class: X(l(V)(
        "flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
        t.class
      ))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), I6 = /* @__PURE__ */ _({
  __name: "EmptyDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("p", {
      "data-slot": "empty-description",
      class: X(l(V)(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        t.class
      ))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), R6 = /* @__PURE__ */ _({
  __name: "EmptyHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "empty-header",
      class: X(l(V)(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        t.class
      ))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), BM = ["data-variant"], F6 = /* @__PURE__ */ _({
  __name: "EmptyMedia",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: X(l(V)(l(OM)({ variant: e.variant }), t.class))
    }, [
      C(n.$slots, "default")
    ], 10, BM));
  }
}), V6 = /* @__PURE__ */ _({
  __name: "EmptyTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "empty-title",
      class: X(l(V)("text-lg font-medium tracking-tight", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), OM = Sn(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), PM = { class: "text-xs text-slate-600 dark:text-slate-300" }, IM = /* @__PURE__ */ _({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(e) {
    return (t, n) => (g(), L("div", PM, "Characters: " + ce(e.count), 1));
  }
}), To = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
}, RM = {}, FM = { class: "text-sm text-slate-400 dark:text-slate-500" };
function VM(e, t) {
  return g(), L("div", FM, [
    C(e.$slots, "default")
  ]);
}
const NM = /* @__PURE__ */ To(RM, [["render", VM]]), LM = { class: "text-sm text-red-600 dark:text-red-400" }, zM = /* @__PURE__ */ _({
  __name: "Error",
  props: {
    error: {}
  },
  setup(e) {
    return (t, n) => ya((g(), L("div", null, [
      _e("p", LM, ce(e.error), 1)
    ], 512)), [
      [hi, e.error]
    ]);
  }
}), qM = {}, HM = { class: "w-full space-y-4 p-1.5" };
function WM(e, t) {
  return g(), L("div", HM, [
    C(e.$slots, "default")
  ]);
}
const N6 = /* @__PURE__ */ To(qM, [["render", WM]]), UM = {}, KM = { class: "my-4" };
function jM(e, t) {
  return g(), L("div", KM, [
    C(e.$slots, "default")
  ]);
}
const YM = /* @__PURE__ */ To(UM, [["render", jM]]), GM = { class: "grid gap-4 md:grid-cols-2" }, L6 = /* @__PURE__ */ _({
  __name: "FormGrid",
  setup(e) {
    return (t, n) => (g(), w(YM, null, {
      default: y(() => [
        _e("div", GM, [
          C(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), Jd = /* @__PURE__ */ _({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    id: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(Vw), B(n.value, {
      class: l(V)(
        "text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        t.class
      )
    }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), XM = { class: "relative" }, JM = {
  name: "Base",
  inheritAttrs: !1
}, $r = /* @__PURE__ */ _({
  ...JM,
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
        e.label && e.showLabel ? (g(), w(l(Jd), {
          key: 0,
          id: e.id
        }, {
          default: y(() => [
            oe(ce(e.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : se("", !0),
        _e("div", XM, [
          C(t.$slots, "default"),
          e.showCharacterCount ? (g(), w(l(IM), {
            key: 0,
            count: (a = e.modelValue) == null ? void 0 : a.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : se("", !0)
        ]),
        O(l(NM), { class: "mt-[2px]" }, {
          default: y(() => [
            oe(ce(e.description), 1)
          ]),
          _: 1
        }),
        O(l(zM), { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), ZM = { class: "flex gap-2" }, z6 = /* @__PURE__ */ _({
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
    modelValue: { type: [Boolean, String] },
    text: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, r = E(e.modelValue);
    return ee(r, (o) => {
      n("update:modelValue", o);
    }), (o, s) => (g(), w(l($r), J(Z(o.$props)), {
      default: y(() => [
        _e("div", ZM, [
          O(l(Cx), {
            id: e.id,
            checked: r.value,
            "onUpdate:checked": s[0] || (s[0] = (i) => r.value = i),
            class: "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }, {
            default: y(() => [
              O(l($x), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: y(() => [
                  O(l(Hd), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          e.text ? (g(), w(l(Jd), {
            key: 0,
            id: e.id,
            class: "my-auto"
          }, {
            default: y(() => [
              oe(ce(e.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : se("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), QM = /* @__PURE__ */ _({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = he(e, t);
    return (o, s) => (g(), w(l(Yw), J(Z(l(r))), {
      default: y(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eA = /* @__PURE__ */ _({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Gw), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tA = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(Xw), null, {
      default: y(() => [
        O(l(Qw), B({ ...l(o), ...s.$attrs }, {
          class: l(V)(
            "border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border bg-white p-4 text-slate-950 shadow-md outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            n.class
          )
        }), {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), q6 = /* @__PURE__ */ _({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, a = e, r = new zt("en-US", {
      dateStyle: "long"
    }), o = E(a.modelValue);
    return ee(o, () => {
      n("update:modelValue", o.value);
    }), de(() => {
      if (a.defaultValue)
        o.value = a.defaultValue;
      else if (o.value === null) {
        const s = /* @__PURE__ */ new Date();
        o.value = new Ne(
          s.getFullYear(),
          s.getMonth() + 1,
          s.getDate()
        );
      }
    }), (s, i) => (g(), w(l($r), J(Z(s.$props)), {
      default: y(() => [
        O(l(QM), null, {
          default: y(() => [
            O(l(eA), { "as-child": "" }, {
              default: y(() => [
                O(l(Dn), {
                  variant: "outline",
                  class: X(["text-text w-[280px] justify-start text-left font-normal"])
                }, {
                  default: y(() => [
                    O(l(Sk), { class: "mr-2 size-4" }),
                    oe(" " + ce(o.value ? l(r).format(o.value.toDate(l(yn)())) : e.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            O(l(tA), { class: "w-auto p-0" }, {
              default: y(() => [
                O(l(fM), {
                  modelValue: o.value,
                  "onUpdate:modelValue": i[0] || (i[0] = (u) => o.value = u),
                  "default-value": e.defaultValue,
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
}), nA = { class: "space-y-2" }, aA = { class: "flex items-center gap-2" }, rA = ["src"], oA = ["accept"], H6 = /* @__PURE__ */ _({
  __name: "ImageUpload",
  props: /* @__PURE__ */ $s({
    defaultImage: {},
    label: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = E(null), a = E(t.defaultImage ?? null), r = (i) => {
      var c;
      const d = (c = i.target.files) == null ? void 0 : c[0];
      d && (a.value = URL.createObjectURL(d), console.log(d), s.value = d);
    }, o = () => {
      var i;
      (i = n.value) == null || i.click();
    }, s = Qu(e, "modelValue");
    return At("container", "md"), (i, u) => (g(), L("div", nA, [
      O(l(Jd), null, {
        default: y(() => [
          oe(ce(e.label), 1)
        ]),
        _: 1
      }),
      _e("div", aA, [
        C(i.$slots, "image", { curImage: a.value }, () => [
          a.value ? (g(), L("img", {
            key: 0,
            src: a.value,
            alt: "Uploaded preview",
            class: "size-32 rounded shadow"
          }, null, 8, rA)) : se("", !0)
        ]),
        O(l(Dn), {
          onClick: Ie(o, ["prevent"]),
          variant: "outline"
        }, {
          default: y(() => [...u[0] || (u[0] = [
            oe("Upload", -1)
          ])]),
          _: 1
        }),
        _e("input", {
          ref_key: "fileInput",
          ref: n,
          type: "file",
          accept: e.accept,
          onChange: r,
          class: "hidden"
        }, null, 40, oA)
      ])
    ]));
  }
}), sA = ["disabled", "placeholder", "required", "type"], iA = /* @__PURE__ */ _({
  __name: "Input",
  props: /* @__PURE__ */ $s({
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
    const t = Qu(e, "modelValue");
    return (n, a) => (g(), w(l($r), J(Z(n.$props)), {
      default: y(() => [
        ya(_e("input", {
          "onUpdate:modelValue": a[0] || (a[0] = (r) => t.value = r),
          disabled: e.disabled,
          placeholder: e.placeholder,
          required: e.required,
          type: e.type,
          class: X(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !e.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": e.error
          }])
        }, null, 10, sA), [
          [C0, t.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), W6 = /* @__PURE__ */ _({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, a = e, r = T(() => a.placeholder ?? "Select an option..."), o = E(
      a.modelValue ? a.options.find((s) => s === a.modelValue) : void 0
    );
    return ee(o, () => {
      n("update:modelValue", o.value);
    }), (s, i) => (g(), w(l($r), J(Z(s.$props)), {
      default: y(() => [
        O(l(lu), {
          modelValue: o.value,
          "onUpdate:modelValue": i[0] || (i[0] = (u) => o.value = u)
        }, {
          default: y(({ open: u }) => [
            O(l(du), { open: u }, {
              default: y(() => [
                O(l(uu), { placeholder: r.value }, null, 8, ["placeholder"])
              ]),
              _: 1
            }, 8, ["open"]),
            O(l(cu), null, {
              default: y(() => [
                (g(!0), L(ue, null, Ae(e.options, (d, c) => (g(), w(l(fu), {
                  key: c,
                  value: d
                }, {
                  default: y(() => [
                    oe(ce(d), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]))), 128))
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
}), lA = ["placeholder"], U6 = /* @__PURE__ */ _({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = /* @__PURE__ */ Xd(e, "modelValue", t, {
      passive: !0
    });
    return (o, s) => (g(), w(l($r), J(Z(o.$props)), {
      default: y(() => [
        ya(_e("textarea", {
          "onUpdate:modelValue": s[0] || (s[0] = (i) => dt(r) ? r.value = i : null),
          placeholder: e.placeholder,
          class: X(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !e.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": e.error
          }])
        }, null, 10, lA), [
          [$0, l(r)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), uA = /* @__PURE__ */ _({
  __name: "Toggle",
  props: /* @__PURE__ */ $s({
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
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $s(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = t, a = e, r = Qu(e, "modelValue");
    return ee(r, () => {
      n("update:modelValue", r.value);
    }), (o, s) => (g(), w(l($r), J(Z(o.$props)), {
      default: y(() => [
        O(l(m$), {
          checked: r.value,
          "onUpdate:checked": s[0] || (s[0] = (i) => r.value = i),
          class: X(
            l(V)(
              "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
              a.class
            )
          )
        }, {
          default: y(({ checked: i }) => [
            O(l(g$), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: y(() => [
                i ? C(o.$slots, "checked", { key: 0 }) : se("", !0),
                i ? se("", !0) : C(o.$slots, "not-checked", { key: 1 })
              ]),
              _: 2
            }, 1024)
          ]),
          _: 3
        }, 8, ["checked", "class"])
      ]),
      _: 3
    }, 16));
  }
});
var pu = "http://www.w3.org/1999/xhtml";
const Lf = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: pu,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Vi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Lf.hasOwnProperty(t) ? { space: Lf[t], local: e } : e;
}
function dA(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === pu && t.documentElement.namespaceURI === pu ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function cA(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function ug(e) {
  var t = Vi(e);
  return (t.local ? cA : dA)(t);
}
function fA() {
}
function Zd(e) {
  return e == null ? fA : function() {
    return this.querySelector(e);
  };
}
function pA(e) {
  typeof e != "function" && (e = Zd(e));
  for (var t = this._groups, n = t.length, a = new Array(n), r = 0; r < n; ++r)
    for (var o = t[r], s = o.length, i = a[r] = new Array(s), u, d, c = 0; c < s; ++c)
      (u = o[c]) && (d = e.call(u, u.__data__, c, o)) && ("__data__" in u && (d.__data__ = u.__data__), i[c] = d);
  return new mt(a, this._parents);
}
function hA(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function vA() {
  return [];
}
function dg(e) {
  return e == null ? vA : function() {
    return this.querySelectorAll(e);
  };
}
function mA(e) {
  return function() {
    return hA(e.apply(this, arguments));
  };
}
function gA(e) {
  typeof e == "function" ? e = mA(e) : e = dg(e);
  for (var t = this._groups, n = t.length, a = [], r = [], o = 0; o < n; ++o)
    for (var s = t[o], i = s.length, u, d = 0; d < i; ++d)
      (u = s[d]) && (a.push(e.call(u, u.__data__, d, s)), r.push(u));
  return new mt(a, r);
}
function cg(e) {
  return function() {
    return this.matches(e);
  };
}
function fg(e) {
  return function(t) {
    return t.matches(e);
  };
}
var yA = Array.prototype.find;
function bA(e) {
  return function() {
    return yA.call(this.children, e);
  };
}
function _A() {
  return this.firstElementChild;
}
function xA(e) {
  return this.select(e == null ? _A : bA(typeof e == "function" ? e : fg(e)));
}
var wA = Array.prototype.filter;
function CA() {
  return Array.from(this.children);
}
function $A(e) {
  return function() {
    return wA.call(this.children, e);
  };
}
function kA(e) {
  return this.selectAll(e == null ? CA : $A(typeof e == "function" ? e : fg(e)));
}
function SA(e) {
  typeof e != "function" && (e = cg(e));
  for (var t = this._groups, n = t.length, a = new Array(n), r = 0; r < n; ++r)
    for (var o = t[r], s = o.length, i = a[r] = [], u, d = 0; d < s; ++d)
      (u = o[d]) && e.call(u, u.__data__, d, o) && i.push(u);
  return new mt(a, this._parents);
}
function pg(e) {
  return new Array(e.length);
}
function TA() {
  return new mt(this._enter || this._groups.map(pg), this._parents);
}
function zs(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
zs.prototype = {
  constructor: zs,
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
function MA(e) {
  return function() {
    return e;
  };
}
function AA(e, t, n, a, r, o) {
  for (var s = 0, i, u = t.length, d = o.length; s < d; ++s)
    (i = t[s]) ? (i.__data__ = o[s], a[s] = i) : n[s] = new zs(e, o[s]);
  for (; s < u; ++s)
    (i = t[s]) && (r[s] = i);
}
function DA(e, t, n, a, r, o, s) {
  var i, u, d = /* @__PURE__ */ new Map(), c = t.length, f = o.length, p = new Array(c), h;
  for (i = 0; i < c; ++i)
    (u = t[i]) && (p[i] = h = s.call(u, u.__data__, i, t) + "", d.has(h) ? r[i] = u : d.set(h, u));
  for (i = 0; i < f; ++i)
    h = s.call(e, o[i], i, o) + "", (u = d.get(h)) ? (a[i] = u, u.__data__ = o[i], d.delete(h)) : n[i] = new zs(e, o[i]);
  for (i = 0; i < c; ++i)
    (u = t[i]) && d.get(p[i]) === u && (r[i] = u);
}
function EA(e) {
  return e.__data__;
}
function BA(e, t) {
  if (!arguments.length) return Array.from(this, EA);
  var n = t ? DA : AA, a = this._parents, r = this._groups;
  typeof e != "function" && (e = MA(e));
  for (var o = r.length, s = new Array(o), i = new Array(o), u = new Array(o), d = 0; d < o; ++d) {
    var c = a[d], f = r[d], p = f.length, h = OA(e.call(c, c && c.__data__, d, a)), v = h.length, m = i[d] = new Array(v), b = s[d] = new Array(v), x = u[d] = new Array(p);
    n(c, f, m, b, x, h, t);
    for (var k = 0, $ = 0, M, S; k < v; ++k)
      if (M = m[k]) {
        for (k >= $ && ($ = k + 1); !(S = b[$]) && ++$ < v; ) ;
        M._next = S || null;
      }
  }
  return s = new mt(s, a), s._enter = i, s._exit = u, s;
}
function OA(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function PA() {
  return new mt(this._exit || this._groups.map(pg), this._parents);
}
function IA(e, t, n) {
  var a = this.enter(), r = this, o = this.exit();
  return typeof e == "function" ? (a = e(a), a && (a = a.selection())) : a = a.append(e + ""), t != null && (r = t(r), r && (r = r.selection())), n == null ? o.remove() : n(o), a && r ? a.merge(r).order() : r;
}
function RA(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, a = t._groups, r = n.length, o = a.length, s = Math.min(r, o), i = new Array(r), u = 0; u < s; ++u)
    for (var d = n[u], c = a[u], f = d.length, p = i[u] = new Array(f), h, v = 0; v < f; ++v)
      (h = d[v] || c[v]) && (p[v] = h);
  for (; u < r; ++u)
    i[u] = n[u];
  return new mt(i, this._parents);
}
function FA() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var a = e[t], r = a.length - 1, o = a[r], s; --r >= 0; )
      (s = a[r]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function VA(e) {
  e || (e = NA);
  function t(f, p) {
    return f && p ? e(f.__data__, p.__data__) : !f - !p;
  }
  for (var n = this._groups, a = n.length, r = new Array(a), o = 0; o < a; ++o) {
    for (var s = n[o], i = s.length, u = r[o] = new Array(i), d, c = 0; c < i; ++c)
      (d = s[c]) && (u[c] = d);
    u.sort(t);
  }
  return new mt(r, this._parents).order();
}
function NA(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function LA() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function zA() {
  return Array.from(this);
}
function qA() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var a = e[t], r = 0, o = a.length; r < o; ++r) {
      var s = a[r];
      if (s) return s;
    }
  return null;
}
function HA() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function WA() {
  return !this.node();
}
function UA(e) {
  for (var t = this._groups, n = 0, a = t.length; n < a; ++n)
    for (var r = t[n], o = 0, s = r.length, i; o < s; ++o)
      (i = r[o]) && e.call(i, i.__data__, o, r);
  return this;
}
function KA(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function jA(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function YA(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function GA(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function XA(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function JA(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function ZA(e, t) {
  var n = Vi(e);
  if (arguments.length < 2) {
    var a = this.node();
    return n.local ? a.getAttributeNS(n.space, n.local) : a.getAttribute(n);
  }
  return this.each((t == null ? n.local ? jA : KA : typeof t == "function" ? n.local ? JA : XA : n.local ? GA : YA)(n, t));
}
function hg(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function QA(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function eD(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function tD(e, t, n) {
  return function() {
    var a = t.apply(this, arguments);
    a == null ? this.style.removeProperty(e) : this.style.setProperty(e, a, n);
  };
}
function nD(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? QA : typeof t == "function" ? tD : eD)(e, t, n ?? "")) : rr(this.node(), e);
}
function rr(e, t) {
  return e.style.getPropertyValue(t) || hg(e).getComputedStyle(e, null).getPropertyValue(t);
}
function aD(e) {
  return function() {
    delete this[e];
  };
}
function rD(e, t) {
  return function() {
    this[e] = t;
  };
}
function oD(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function sD(e, t) {
  return arguments.length > 1 ? this.each((t == null ? aD : typeof t == "function" ? oD : rD)(e, t)) : this.node()[e];
}
function vg(e) {
  return e.trim().split(/^|\s+/);
}
function Qd(e) {
  return e.classList || new mg(e);
}
function mg(e) {
  this._node = e, this._names = vg(e.getAttribute("class") || "");
}
mg.prototype = {
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
function gg(e, t) {
  for (var n = Qd(e), a = -1, r = t.length; ++a < r; ) n.add(t[a]);
}
function yg(e, t) {
  for (var n = Qd(e), a = -1, r = t.length; ++a < r; ) n.remove(t[a]);
}
function iD(e) {
  return function() {
    gg(this, e);
  };
}
function lD(e) {
  return function() {
    yg(this, e);
  };
}
function uD(e, t) {
  return function() {
    (t.apply(this, arguments) ? gg : yg)(this, e);
  };
}
function dD(e, t) {
  var n = vg(e + "");
  if (arguments.length < 2) {
    for (var a = Qd(this.node()), r = -1, o = n.length; ++r < o; ) if (!a.contains(n[r])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? uD : t ? iD : lD)(n, t));
}
function cD() {
  this.textContent = "";
}
function fD(e) {
  return function() {
    this.textContent = e;
  };
}
function pD(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function hD(e) {
  return arguments.length ? this.each(e == null ? cD : (typeof e == "function" ? pD : fD)(e)) : this.node().textContent;
}
function vD() {
  this.innerHTML = "";
}
function mD(e) {
  return function() {
    this.innerHTML = e;
  };
}
function gD(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function yD(e) {
  return arguments.length ? this.each(e == null ? vD : (typeof e == "function" ? gD : mD)(e)) : this.node().innerHTML;
}
function bD() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function _D() {
  return this.each(bD);
}
function xD() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function wD() {
  return this.each(xD);
}
function CD(e) {
  var t = typeof e == "function" ? e : ug(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function $D() {
  return null;
}
function kD(e, t) {
  var n = typeof e == "function" ? e : ug(e), a = t == null ? $D : typeof t == "function" ? t : Zd(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), a.apply(this, arguments) || null);
  });
}
function SD() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function TD() {
  return this.each(SD);
}
function MD() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function AD() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function DD(e) {
  return this.select(e ? AD : MD);
}
function ED(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function BD(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function OD(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", a = t.indexOf(".");
    return a >= 0 && (n = t.slice(a + 1), t = t.slice(0, a)), { type: t, name: n };
  });
}
function PD(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, a = -1, r = t.length, o; n < r; ++n)
        o = t[n], (!e.type || o.type === e.type) && o.name === e.name ? this.removeEventListener(o.type, o.listener, o.options) : t[++a] = o;
      ++a ? t.length = a : delete this.__on;
    }
  };
}
function ID(e, t, n) {
  return function() {
    var a = this.__on, r, o = BD(t);
    if (a) {
      for (var s = 0, i = a.length; s < i; ++s)
        if ((r = a[s]).type === e.type && r.name === e.name) {
          this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = o, r.options = n), r.value = t;
          return;
        }
    }
    this.addEventListener(e.type, o, n), r = { type: e.type, name: e.name, value: t, listener: o, options: n }, a ? a.push(r) : this.__on = [r];
  };
}
function RD(e, t, n) {
  var a = OD(e + ""), r, o = a.length, s;
  if (arguments.length < 2) {
    var i = this.node().__on;
    if (i) {
      for (var u = 0, d = i.length, c; u < d; ++u)
        for (r = 0, c = i[u]; r < o; ++r)
          if ((s = a[r]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (i = t ? ID : PD, r = 0; r < o; ++r) this.each(i(a[r], t, n));
  return this;
}
function bg(e, t, n) {
  var a = hg(e), r = a.CustomEvent;
  typeof r == "function" ? r = new r(t, n) : (r = a.document.createEvent("Event"), n ? (r.initEvent(t, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(t, !1, !1)), e.dispatchEvent(r);
}
function FD(e, t) {
  return function() {
    return bg(this, e, t);
  };
}
function VD(e, t) {
  return function() {
    return bg(this, e, t.apply(this, arguments));
  };
}
function ND(e, t) {
  return this.each((typeof t == "function" ? VD : FD)(e, t));
}
function* LD() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var a = e[t], r = 0, o = a.length, s; r < o; ++r)
      (s = a[r]) && (yield s);
}
var _g = [null];
function mt(e, t) {
  this._groups = e, this._parents = t;
}
function Mo() {
  return new mt([[document.documentElement]], _g);
}
function zD() {
  return this;
}
mt.prototype = Mo.prototype = {
  constructor: mt,
  select: pA,
  selectAll: gA,
  selectChild: xA,
  selectChildren: kA,
  filter: SA,
  data: BA,
  enter: TA,
  exit: PA,
  join: IA,
  merge: RA,
  selection: zD,
  order: FA,
  sort: VA,
  call: LA,
  nodes: zA,
  node: qA,
  size: HA,
  empty: WA,
  each: UA,
  attr: ZA,
  style: nD,
  property: sD,
  classed: dD,
  text: hD,
  html: yD,
  raise: _D,
  lower: wD,
  append: CD,
  insert: kD,
  remove: TD,
  clone: DD,
  datum: ED,
  on: RD,
  dispatch: ND,
  [Symbol.iterator]: LD
};
function Et(e) {
  return typeof e == "string" ? new mt([[document.querySelector(e)]], [document.documentElement]) : new mt([[e]], _g);
}
var jr;
(function(e) {
  e[e.SVG = 0] = "SVG", e[e.HTML = 1] = "HTML";
})(jr || (jr = {}));
var or;
(function(e) {
  e.Fit = "fit", e.Extend = "extend", e.FitWidth = "fit_width";
})(or || (or = {}));
function Yr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function qD(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ec(e) {
  let t, n, a;
  e.length !== 2 ? (t = Yr, n = (i, u) => Yr(e(i), u), a = (i, u) => e(i) - u) : (t = e === Yr || e === qD ? e : HD, n = e, a = e);
  function r(i, u, d = 0, c = i.length) {
    if (d < c) {
      if (t(u, u) !== 0) return c;
      do {
        const f = d + c >>> 1;
        n(i[f], u) < 0 ? d = f + 1 : c = f;
      } while (d < c);
    }
    return d;
  }
  function o(i, u, d = 0, c = i.length) {
    if (d < c) {
      if (t(u, u) !== 0) return c;
      do {
        const f = d + c >>> 1;
        n(i[f], u) <= 0 ? d = f + 1 : c = f;
      } while (d < c);
    }
    return d;
  }
  function s(i, u, d = 0, c = i.length) {
    const f = r(i, u, d, c - 1);
    return f > d && a(i[f - 1], u) > -a(i[f], u) ? f - 1 : f;
  }
  return { left: r, center: s, right: o };
}
function HD() {
  return 0;
}
function xg(e) {
  return e === null ? NaN : +e;
}
const wg = ec(Yr), Ao = wg.right, WD = wg.left;
ec(xg).center;
function UD(e, t) {
  let n, a;
  for (const r of e)
    r != null && (n === void 0 ? r >= r && (n = a = r) : (n > r && (n = r), a < r && (a = r)));
  return [n, a];
}
class zf extends Map {
  constructor(t, n = YD) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, r] of t) this.set(a, r);
  }
  get(t) {
    return super.get(qf(this, t));
  }
  has(t) {
    return super.has(qf(this, t));
  }
  set(t, n) {
    return super.set(KD(this, t), n);
  }
  delete(t) {
    return super.delete(jD(this, t));
  }
}
function qf({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function KD({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function jD({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function YD(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const GD = Math.sqrt(50), XD = Math.sqrt(10), JD = Math.sqrt(2);
function qs(e, t, n) {
  const a = (t - e) / Math.max(0, n), r = Math.floor(Math.log10(a)), o = a / Math.pow(10, r), s = o >= GD ? 10 : o >= XD ? 5 : o >= JD ? 2 : 1;
  let i, u, d;
  return r < 0 ? (d = Math.pow(10, -r) / s, i = Math.round(e * d), u = Math.round(t * d), i / d < e && ++i, u / d > t && --u, d = -d) : (d = Math.pow(10, r) * s, i = Math.round(e / d), u = Math.round(t / d), i * d < e && ++i, u * d > t && --u), u < i && 0.5 <= n && n < 2 ? qs(e, t, n * 2) : [i, u, d];
}
function hu(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [r, o, s] = a ? qs(t, e, n) : qs(e, t, n);
  if (!(o >= r)) return [];
  const i = o - r + 1, u = new Array(i);
  if (a)
    if (s < 0) for (let d = 0; d < i; ++d) u[d] = (o - d) / -s;
    else for (let d = 0; d < i; ++d) u[d] = (o - d) * s;
  else if (s < 0) for (let d = 0; d < i; ++d) u[d] = (r + d) / -s;
  else for (let d = 0; d < i; ++d) u[d] = (r + d) * s;
  return u;
}
function vu(e, t, n) {
  return t = +t, e = +e, n = +n, qs(e, t, n)[2];
}
function mu(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, r = a ? vu(t, e, n) : vu(e, t, n);
  return (a ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function Hf(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n < a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let r of e)
      (r = t(r, ++a, e)) != null && (n < r || n === void 0 && r >= r) && (n = r);
  }
  return n;
}
function Wf(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n > a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let r of e)
      (r = t(r, ++a, e)) != null && (n > r || n === void 0 && r >= r) && (n = r);
  }
  return n;
}
function ZD(e, t, n = xg) {
  if (!(!(a = e.length) || isNaN(t = +t))) {
    if (t <= 0 || a < 2) return +n(e[0], 0, e);
    if (t >= 1) return +n(e[a - 1], a - 1, e);
    var a, r = (a - 1) * t, o = Math.floor(r), s = +n(e[o], o, e), i = +n(e[o + 1], o + 1, e);
    return s + (i - s) * (r - o);
  }
}
function* QD(e) {
  for (const t of e)
    yield* t;
}
function eE(e) {
  return Array.from(QD(e));
}
function tE(e, t, n) {
  e = +e, t = +t, n = (r = arguments.length) < 2 ? (t = e, e = 0, 1) : r < 3 ? 1 : +n;
  for (var a = -1, r = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(r); ++a < r; )
    o[a] = e + a * n;
  return o;
}
function nE(e, t) {
  let n = 0;
  if (t === void 0)
    for (let a of e)
      (a = +a) && (n += a);
  else {
    let a = -1;
    for (let r of e)
      (r = +t(r, ++a, e)) && (n += r);
  }
  return n;
}
function aE(e, t, n) {
  var a = {}, r = a.noTrailing, o = r === void 0 ? !1 : r, s = a.noLeading, i = s === void 0 ? !1 : s, u = a.debounceMode, d = u === void 0 ? void 0 : u, c, f = !1, p = 0;
  function h() {
    c && clearTimeout(c);
  }
  function v(b) {
    var x = b || {}, k = x.upcomingOnly, $ = k === void 0 ? !1 : k;
    h(), f = !$;
  }
  function m() {
    for (var b = arguments.length, x = new Array(b), k = 0; k < b; k++)
      x[k] = arguments[k];
    var $ = this, M = Date.now() - p;
    if (f)
      return;
    function S() {
      p = Date.now(), t.apply($, x);
    }
    function D() {
      c = void 0;
    }
    !i && d && !c && S(), h(), d === void 0 && M > e ? i ? (p = Date.now(), o || (c = setTimeout(d ? D : S, e))) : S() : o !== !0 && (c = setTimeout(d ? D : S, d === void 0 ? e - M : e));
  }
  return m.cancel = v, m;
}
var Ln;
(function(e) {
  e.Left = "left", e.Right = "right", e.Auto = "auto";
})(Ln || (Ln = {}));
const Wa = (e) => typeof e == "number", Cg = (e) => typeof e == "function", Ni = (e) => Array.isArray(e), rE = (e) => e instanceof Object, Hs = (e) => e.constructor.name !== "Function" && e.constructor.name !== "Object", Uf = (e) => rE(e) && !Ni(e) && !Cg(e) && !Hs(e), ha = (e, t, n = [], a = /* @__PURE__ */ new Set()) => {
  if (Array.isArray(e)) {
    if (!Array.isArray(t) || e.length !== t.length)
      return !1;
    if (a.has(e))
      return !0;
    a.add(e);
    for (let r = 0; r < e.length; r++)
      if (!ha(e[r], t[r], n, a))
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
    const r = Object.keys(e).filter((s) => !n.includes(s)), o = Object.keys(t).filter((s) => !n.includes(s));
    if (r.length !== o.length)
      return !1;
    if (a.has(e))
      return !0;
    a.add(e);
    for (const s of r)
      if (!ha(e[s], t[s], n, a))
        return !1;
    return !0;
  }
  return e === t;
}, gu = (e) => e.flat(), Ws = (e, t = /* @__PURE__ */ new Map()) => {
  if (typeof e != "object" || e === null)
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof Array) {
    const n = [];
    t.set(e, n);
    for (const a of e)
      n.push(t.has(a) ? t.get(a) : Ws(a, t));
    return n;
  }
  if (Hs(e))
    return e;
  if (e instanceof Object) {
    const n = {};
    t.set(e, n);
    const a = e;
    return Object.keys(e).reduce((r, o) => (r[o] = t.has(a[o]) ? t.get(a[o]) : Ws(a[o], t), r), n), n;
  }
  return e;
}, sr = (e, t, n = /* @__PURE__ */ new Map()) => {
  if (!e || !t || e === t)
    return e;
  const a = Hs(e) ? e : Ws(e);
  return n.has(t) ? n.get(t) : (n.set(t, a), Object.keys(t).forEach((r) => {
    r === "__proto__" || r === "constructor" || (Uf(e[r]) && Uf(t[r]) ? a[r] = sr(e[r], t[r], n) : Hs(t) ? a[r] = t : a[r] = Ws(t[r]));
  }), a);
}, Kf = (e, t, n) => aE(t, e);
function tc(e, t, n) {
  return Cg(t) ? t(e, n) : t;
}
function nc(e, t, n) {
  return tc(e, t, n);
}
function qn(e, t, n) {
  return tc(e, t, n);
}
function Er(e) {
  return e.filter((t) => t && !Wa(t));
}
function Va(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function oE(e, ...t) {
  return e ? Wf(e, (a, r) => Wf(t, (o) => qn(a, o, r))) : void 0;
}
function sE(e, ...t) {
  return e ? Hf(e, (a, r) => Hf(t, (o) => qn(a, o, r))) : void 0;
}
function $l(e, ...t) {
  return [oE(e, ...t), sE(e, ...t)];
}
function jf(e, t, n, a = Ln.Auto) {
  if (e.length <= 1)
    return e[0];
  const o = e.map((u, d) => [u, d]).sort(([u, d], [c, f]) => qn(u, n, d) - qn(c, n, f)), s = o.map(([u, d]) => qn(u, n, d)), i = a === Ln.Right ? WD(s, t, 0, e.length - 1) : Ao(s, t, 1, e.length);
  return a === Ln.Right ? o[i][0] : a === Ln.Left ? o[i - 1][0] : t - s[i - 1] > s[i] - t ? o[i][0] : o[i - 1][0];
}
function iE(e, t, n, a = !1) {
  if (!n)
    return [];
  const r = e.filter((o, s) => {
    const i = qn(o, n, s);
    return i >= t[0] && i <= t[1];
  });
  if (a) {
    if (r.length === 0) {
      const f = jf(e, t[0], n, Ln.Left), p = jf(e, t[1], n, Ln.Right);
      return [f, p].filter(Boolean);
    }
    const o = r[0], s = r[r.length - 1], i = e.findIndex((f) => f === o), u = e.findIndex((f) => f === s), d = Math.max(0, i - 1), c = Math.min(e.length - 1, u + 1);
    return e.slice(d, c + 1);
  }
  return r;
}
const lE = (e) => e == null ? [] : Array.isArray(e) ? e : [e];
var ia = [], uE = function() {
  return ia.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, dE = function() {
  return ia.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Yf = "ResizeObserver loop completed with undelivered notifications.", cE = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Yf
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Yf), window.dispatchEvent(e);
}, ro;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ro || (ro = {}));
var la = function(e) {
  return Object.freeze(e);
}, fE = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, la(this);
  }
  return e;
}(), $g = function() {
  function e(t, n, a, r) {
    return this.x = t, this.y = n, this.width = a, this.height = r, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, la(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, a = t.y, r = t.top, o = t.right, s = t.bottom, i = t.left, u = t.width, d = t.height;
    return { x: n, y: a, top: r, right: o, bottom: s, left: i, width: u, height: d };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), ac = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, kg = function(e) {
  if (ac(e)) {
    var t = e.getBBox(), n = t.width, a = t.height;
    return !n && !a;
  }
  var r = e, o = r.offsetWidth, s = r.offsetHeight;
  return !(o || s || e.getClientRects().length);
}, Gf = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, pE = function(e) {
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
}, Gr = typeof window < "u" ? window : {}, Yo = /* @__PURE__ */ new WeakMap(), Xf = /auto|scroll/, hE = /^tb|vertical/, vE = /msie|trident/i.test(Gr.navigator && Gr.navigator.userAgent), Lt = function(e) {
  return parseFloat(e || "0");
}, Ua = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new fE((n ? t : e) || 0, (n ? e : t) || 0);
}, Jf = la({
  devicePixelContentBoxSize: Ua(),
  borderBoxSize: Ua(),
  contentBoxSize: Ua(),
  contentRect: new $g(0, 0, 0, 0)
}), Sg = function(e, t) {
  if (t === void 0 && (t = !1), Yo.has(e) && !t)
    return Yo.get(e);
  if (kg(e))
    return Yo.set(e, Jf), Jf;
  var n = getComputedStyle(e), a = ac(e) && e.ownerSVGElement && e.getBBox(), r = !vE && n.boxSizing === "border-box", o = hE.test(n.writingMode || ""), s = !a && Xf.test(n.overflowY || ""), i = !a && Xf.test(n.overflowX || ""), u = a ? 0 : Lt(n.paddingTop), d = a ? 0 : Lt(n.paddingRight), c = a ? 0 : Lt(n.paddingBottom), f = a ? 0 : Lt(n.paddingLeft), p = a ? 0 : Lt(n.borderTopWidth), h = a ? 0 : Lt(n.borderRightWidth), v = a ? 0 : Lt(n.borderBottomWidth), m = a ? 0 : Lt(n.borderLeftWidth), b = f + d, x = u + c, k = m + h, $ = p + v, M = i ? e.offsetHeight - $ - e.clientHeight : 0, S = s ? e.offsetWidth - k - e.clientWidth : 0, D = r ? b + k : 0, A = r ? x + $ : 0, N = a ? a.width : Lt(n.width) - D - S, F = a ? a.height : Lt(n.height) - A - M, P = N + b + S + k, I = F + x + M + $, R = la({
    devicePixelContentBoxSize: Ua(Math.round(N * devicePixelRatio), Math.round(F * devicePixelRatio), o),
    borderBoxSize: Ua(P, I, o),
    contentBoxSize: Ua(N, F, o),
    contentRect: new $g(f, u, N, F)
  });
  return Yo.set(e, R), R;
}, Tg = function(e, t, n) {
  var a = Sg(e, n), r = a.borderBoxSize, o = a.contentBoxSize, s = a.devicePixelContentBoxSize;
  switch (t) {
    case ro.DEVICE_PIXEL_CONTENT_BOX:
      return s;
    case ro.BORDER_BOX:
      return r;
    default:
      return o;
  }
}, mE = /* @__PURE__ */ function() {
  function e(t) {
    var n = Sg(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = la([n.borderBoxSize]), this.contentBoxSize = la([n.contentBoxSize]), this.devicePixelContentBoxSize = la([n.devicePixelContentBoxSize]);
  }
  return e;
}(), Mg = function(e) {
  if (kg(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, gE = function() {
  var e = 1 / 0, t = [];
  ia.forEach(function(s) {
    if (s.activeTargets.length !== 0) {
      var i = [];
      s.activeTargets.forEach(function(d) {
        var c = new mE(d.target), f = Mg(d.target);
        i.push(c), d.lastReportedSize = Tg(d.target, d.observedBox), f < e && (e = f);
      }), t.push(function() {
        s.callback.call(s.observer, i, s.observer);
      }), s.activeTargets.splice(0, s.activeTargets.length);
    }
  });
  for (var n = 0, a = t; n < a.length; n++) {
    var r = a[n];
    r();
  }
  return e;
}, Zf = function(e) {
  ia.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(r) {
      r.isActive() && (Mg(r.target) > e ? n.activeTargets.push(r) : n.skippedTargets.push(r));
    });
  });
}, yE = function() {
  var e = 0;
  for (Zf(e); uE(); )
    e = gE(), Zf(e);
  return dE() && cE(), e > 0;
}, kl, Ag = [], bE = function() {
  return Ag.splice(0).forEach(function(e) {
    return e();
  });
}, _E = function(e) {
  if (!kl) {
    var t = 0, n = document.createTextNode(""), a = { characterData: !0 };
    new MutationObserver(function() {
      return bE();
    }).observe(n, a), kl = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  Ag.push(e), kl();
}, xE = function(e) {
  _E(function() {
    requestAnimationFrame(e);
  });
}, cs = 0, wE = function() {
  return !!cs;
}, CE = 250, $E = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Qf = [
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
], ep = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Sl = !1, kE = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = CE), !Sl) {
      Sl = !0;
      var a = ep(t);
      xE(function() {
        var r = !1;
        try {
          r = yE();
        } finally {
          if (Sl = !1, t = a - ep(), !wE())
            return;
          r ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, $E);
    };
    document.body ? n() : Gr.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Qf.forEach(function(n) {
      return Gr.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Qf.forEach(function(n) {
      return Gr.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), yu = new kE(), tp = function(e) {
  !cs && e > 0 && yu.start(), cs += e, !cs && yu.stop();
}, SE = function(e) {
  return !ac(e) && !pE(e) && getComputedStyle(e).display === "inline";
}, TE = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || ro.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Tg(this.target, this.observedBox, !0);
    return SE(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), ME = /* @__PURE__ */ function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), Go = /* @__PURE__ */ new WeakMap(), np = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, Xo = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var a = new ME(t, n);
    Go.set(t, a);
  }, e.observe = function(t, n, a) {
    var r = Go.get(t), o = r.observationTargets.length === 0;
    np(r.observationTargets, n) < 0 && (o && ia.push(r), r.observationTargets.push(new TE(n, a && a.box)), tp(1), yu.schedule());
  }, e.unobserve = function(t, n) {
    var a = Go.get(t), r = np(a.observationTargets, n), o = a.observationTargets.length === 1;
    r >= 0 && (o && ia.splice(ia.indexOf(a), 1), a.observationTargets.splice(r, 1), tp(-1));
  }, e.disconnect = function(t) {
    var n = this, a = Go.get(t);
    a.observationTargets.slice().forEach(function(r) {
      return n.unobserve(t, r.target);
    }), a.activeTargets.splice(0, a.activeTargets.length);
  }, e;
}(), AE = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Xo.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Gf(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Xo.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Gf(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Xo.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Xo.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const DE = globalThis.ResizeObserver || AE, Dg = {
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
  sizing: or.Fit,
  width: void 0,
  height: void 0,
  svgDefs: void 0,
  ariaLabel: void 0
};
class oo {
  constructor(t) {
    this._defaultConfig = Dg, this._isFirstRender = !0, this._renderAnimationFrameId = null, this._container = t;
    const n = Et(this._container);
    n.attr("role", "figure"), this.svg = n.append("svg").style("display", "block").attr("xmlns", "http://www.w3.org/2000/svg").attr("height", oo.DEFAULT_CONTAINER_HEIGHT).attr("aria-hidden", !0), this._svgDefs = this.svg.append("defs"), this._svgDefsExternal = this.svg.append("defs"), this.element = this.svg.node();
  }
  updateContainer(t) {
    var n;
    this.prevConfig = this.config, this.config = sr(this._defaultConfig, t), (t == null ? void 0 : t.svgDefs) !== ((n = this.prevConfig) === null || n === void 0 ? void 0 : n.svgDefs) && (this._svgDefsExternal.selectAll("*").remove(), this._svgDefsExternal.html(t.svgDefs));
  }
  // The `_preRender` step should be used to perform some actions before rendering.
  // For example, calculating scales, setting component sizes, etc ...
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _preRender() {
  }
  // The `_render` step should be used to perform the actual rendering
  _render(t) {
    const { config: n } = this;
    Et(this._container).attr("aria-label", n.ariaLabel), this._isFirstRender = !1;
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
    return this.config.height ? this.element.clientHeight : this._container.clientHeight || this._container.getBoundingClientRect().height || oo.DEFAULT_CONTAINER_HEIGHT;
  }
  get width() {
    return Va(this.containerWidth - this.config.margin.left - this.config.margin.right, 0, Number.POSITIVE_INFINITY);
  }
  get height() {
    return Va(this.containerHeight - this.config.margin.top - this.config.margin.bottom, 0, Number.POSITIVE_INFINITY);
  }
  _removeAllChildren() {
    for (; this.element.firstChild; )
      this.element.removeChild(this.element.firstChild);
  }
  _onResize() {
    const { config: t } = this;
    (t.sizing === or.Fit || t.sizing === or.FitWidth) && this.render(0);
  }
  _setUpResizeObserver() {
    if (this._resizeObserver)
      return;
    const t = this._container.getBoundingClientRect();
    this._containerSize = { width: t.width, height: t.height }, this._resizeObserver = new DE((n, a) => {
      cancelAnimationFrame(this._resizeObserverAnimationFrameId), this._resizeObserverAnimationFrameId = requestAnimationFrame(() => {
        const r = this._container.getBoundingClientRect(), o = { width: r.width, height: r.height };
        !ha(this._containerSize, o) && o.width && o.height && (this._containerSize = o, this._onResize());
      });
    }), this._resizeObserver.observe(this._container);
  }
  destroy() {
    var t;
    cancelAnimationFrame(this._renderAnimationFrameId), cancelAnimationFrame(this._resizeObserverAnimationFrameId), (t = this._resizeObserver) === null || t === void 0 || t.disconnect(), this.svg.remove();
  }
}
oo.DEFAULT_CONTAINER_HEIGHT = 300;
function EE(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function BE(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var OE = /* @__PURE__ */ function() {
  function e(n) {
    var a = this;
    this._insertTag = function(r) {
      var o;
      a.tags.length === 0 ? a.insertionPoint ? o = a.insertionPoint.nextSibling : a.prepend ? o = a.container.firstChild : o = a.before : o = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(r, o), a.tags.push(r);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, t.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(BE(this));
    var r = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = EE(r);
      try {
        o.insertRule(a, o.cssRules.length);
      } catch {
      }
    } else
      r.appendChild(document.createTextNode(a));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(a) {
      var r;
      return (r = a.parentNode) == null ? void 0 : r.removeChild(a);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), at = "-ms-", Us = "-moz-", Se = "-webkit-", Eg = "comm", rc = "rule", oc = "decl", PE = "@import", Bg = "@keyframes", IE = "@layer", RE = Math.abs, Li = String.fromCharCode, FE = Object.assign;
function VE(e, t) {
  return nt(e, 0) ^ 45 ? (((t << 2 ^ nt(e, 0)) << 2 ^ nt(e, 1)) << 2 ^ nt(e, 2)) << 2 ^ nt(e, 3) : 0;
}
function Og(e) {
  return e.trim();
}
function NE(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Te(e, t, n) {
  return e.replace(t, n);
}
function bu(e, t) {
  return e.indexOf(t);
}
function nt(e, t) {
  return e.charCodeAt(t) | 0;
}
function so(e, t, n) {
  return e.slice(t, n);
}
function Wt(e) {
  return e.length;
}
function sc(e) {
  return e.length;
}
function Jo(e, t) {
  return t.push(e), e;
}
function LE(e, t) {
  return e.map(t).join("");
}
var zi = 1, ir = 1, Pg = 0, ct = 0, qe = 0, kr = "";
function qi(e, t, n, a, r, o, s) {
  return { value: e, root: t, parent: n, type: a, props: r, children: o, line: zi, column: ir, length: s, return: "" };
}
function Br(e, t) {
  return FE(qi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function zE() {
  return qe;
}
function qE() {
  return qe = ct > 0 ? nt(kr, --ct) : 0, ir--, qe === 10 && (ir = 1, zi--), qe;
}
function vt() {
  return qe = ct < Pg ? nt(kr, ct++) : 0, ir++, qe === 10 && (ir = 1, zi++), qe;
}
function Yt() {
  return nt(kr, ct);
}
function fs() {
  return ct;
}
function Do(e, t) {
  return so(kr, e, t);
}
function io(e) {
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
function Ig(e) {
  return zi = ir = 1, Pg = Wt(kr = e), ct = 0, [];
}
function Rg(e) {
  return kr = "", e;
}
function ps(e) {
  return Og(Do(ct - 1, _u(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function HE(e) {
  for (; (qe = Yt()) && qe < 33; )
    vt();
  return io(e) > 2 || io(qe) > 3 ? "" : " ";
}
function WE(e, t) {
  for (; --t && vt() && !(qe < 48 || qe > 102 || qe > 57 && qe < 65 || qe > 70 && qe < 97); )
    ;
  return Do(e, fs() + (t < 6 && Yt() == 32 && vt() == 32));
}
function _u(e) {
  for (; vt(); )
    switch (qe) {
      case e:
        return ct;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _u(qe);
        break;
      case 40:
        e === 41 && _u(e);
        break;
      case 92:
        vt();
        break;
    }
  return ct;
}
function UE(e, t) {
  for (; vt() && e + qe !== 57; )
    if (e + qe === 84 && Yt() === 47)
      break;
  return "/*" + Do(t, ct - 1) + "*" + Li(e === 47 ? e : vt());
}
function KE(e) {
  for (; !io(Yt()); )
    vt();
  return Do(e, ct);
}
function jE(e) {
  return Rg(hs("", null, null, null, [""], e = Ig(e), 0, [0], e));
}
function hs(e, t, n, a, r, o, s, i, u) {
  for (var d = 0, c = 0, f = s, p = 0, h = 0, v = 0, m = 1, b = 1, x = 1, k = 0, $ = "", M = r, S = o, D = a, A = $; b; )
    switch (v = k, k = vt()) {
      case 40:
        if (v != 108 && nt(A, f - 1) == 58) {
          bu(A += Te(ps(k), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += ps(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += HE(v);
        break;
      case 92:
        A += WE(fs() - 1, 7);
        continue;
      case 47:
        switch (Yt()) {
          case 42:
          case 47:
            Jo(YE(UE(vt(), fs()), t, n), u);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * m:
        i[d++] = Wt(A) * x;
      case 125 * m:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            x == -1 && (A = Te(A, /\f/g, "")), h > 0 && Wt(A) - f && Jo(h > 32 ? rp(A + ";", a, n, f - 1) : rp(Te(A, " ", "") + ";", a, n, f - 2), u);
            break;
          case 59:
            A += ";";
          default:
            if (Jo(D = ap(A, t, n, d, c, r, i, $, M = [], S = [], f), o), k === 123)
              if (c === 0)
                hs(A, t, D, D, M, o, f, i, S);
              else
                switch (p === 99 && nt(A, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    hs(e, D, D, a && Jo(ap(e, D, D, 0, 0, r, i, $, r, M = [], f), S), r, S, f, i, a ? M : S);
                    break;
                  default:
                    hs(A, D, D, D, [""], S, 0, i, S);
                }
        }
        d = c = h = 0, m = x = 1, $ = A = "", f = s;
        break;
      case 58:
        f = 1 + Wt(A), h = v;
      default:
        if (m < 1) {
          if (k == 123)
            --m;
          else if (k == 125 && m++ == 0 && qE() == 125)
            continue;
        }
        switch (A += Li(k), k * m) {
          case 38:
            x = c > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            i[d++] = (Wt(A) - 1) * x, x = 1;
            break;
          case 64:
            Yt() === 45 && (A += ps(vt())), p = Yt(), c = f = Wt($ = A += KE(fs())), k++;
            break;
          case 45:
            v === 45 && Wt(A) == 2 && (m = 0);
        }
    }
  return o;
}
function ap(e, t, n, a, r, o, s, i, u, d, c) {
  for (var f = r - 1, p = r === 0 ? o : [""], h = sc(p), v = 0, m = 0, b = 0; v < a; ++v)
    for (var x = 0, k = so(e, f + 1, f = RE(m = s[v])), $ = e; x < h; ++x)
      ($ = Og(m > 0 ? p[x] + " " + k : Te(k, /&\f/g, p[x]))) && (u[b++] = $);
  return qi(e, t, n, r === 0 ? rc : i, u, d, c);
}
function YE(e, t, n) {
  return qi(e, t, n, Eg, Li(zE()), so(e, 2, -2), 0);
}
function rp(e, t, n, a) {
  return qi(e, t, n, oc, so(e, 0, a), so(e, a + 1, -1), a);
}
function Ka(e, t) {
  for (var n = "", a = sc(e), r = 0; r < a; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function GE(e, t, n, a) {
  switch (e.type) {
    case IE:
      if (e.children.length) break;
    case PE:
    case oc:
      return e.return = e.return || e.value;
    case Eg:
      return "";
    case Bg:
      return e.return = e.value + "{" + Ka(e.children, a) + "}";
    case rc:
      e.value = e.props.join(",");
  }
  return Wt(n = Ka(e.children, a)) ? e.return = e.value + "{" + n + "}" : "";
}
function XE(e) {
  var t = sc(e);
  return function(n, a, r, o) {
    for (var s = "", i = 0; i < t; i++)
      s += e[i](n, a, r, o) || "";
    return s;
  };
}
function JE(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function ZE(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var QE = function(t, n, a) {
  for (var r = 0, o = 0; r = o, o = Yt(), r === 38 && o === 12 && (n[a] = 1), !io(o); )
    vt();
  return Do(t, ct);
}, eB = function(t, n) {
  var a = -1, r = 44;
  do
    switch (io(r)) {
      case 0:
        r === 38 && Yt() === 12 && (n[a] = 1), t[a] += QE(ct - 1, n, a);
        break;
      case 2:
        t[a] += ps(r);
        break;
      case 4:
        if (r === 44) {
          t[++a] = Yt() === 58 ? "&\f" : "", n[a] = t[a].length;
          break;
        }
      default:
        t[a] += Li(r);
    }
  while (r = vt());
  return t;
}, tB = function(t, n) {
  return Rg(eB(Ig(t), n));
}, op = /* @__PURE__ */ new WeakMap(), nB = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, a = t.parent, r = t.column === a.column && t.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !op.get(a)) && !r) {
      op.set(t, !0);
      for (var o = [], s = tB(n, o), i = a.props, u = 0, d = 0; u < s.length; u++)
        for (var c = 0; c < i.length; c++, d++)
          t.props[d] = o[u] ? s[u].replace(/&\f/g, i[c]) : i[c] + " " + s[u];
    }
  }
}, aB = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Fg(e, t) {
  switch (VE(e, t)) {
    case 5103:
      return Se + "print-" + e + e;
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
      return Se + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Se + e + Us + e + at + e + e;
    case 6828:
    case 4268:
      return Se + e + at + e + e;
    case 6165:
      return Se + e + at + "flex-" + e + e;
    case 5187:
      return Se + e + Te(e, /(\w+).+(:[^]+)/, Se + "box-$1$2" + at + "flex-$1$2") + e;
    case 5443:
      return Se + e + at + "flex-item-" + Te(e, /flex-|-self/, "") + e;
    case 4675:
      return Se + e + at + "flex-line-pack" + Te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Se + e + at + Te(e, "shrink", "negative") + e;
    case 5292:
      return Se + e + at + Te(e, "basis", "preferred-size") + e;
    case 6060:
      return Se + "box-" + Te(e, "-grow", "") + Se + e + at + Te(e, "grow", "positive") + e;
    case 4554:
      return Se + Te(e, /([^-])(transform)/g, "$1" + Se + "$2") + e;
    case 6187:
      return Te(Te(Te(e, /(zoom-|grab)/, Se + "$1"), /(image-set)/, Se + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Te(e, /(image-set\([^]*)/, Se + "$1$`$1");
    case 4968:
      return Te(Te(e, /(.+:)(flex-)?(.*)/, Se + "box-pack:$3" + at + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Se + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Te(e, /(.+)-inline(.+)/, Se + "$1$2") + e;
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
      if (Wt(e) - 1 - t > 6) switch (nt(e, t + 1)) {
        case 109:
          if (nt(e, t + 4) !== 45) break;
        case 102:
          return Te(e, /(.+:)(.+)-([^]+)/, "$1" + Se + "$2-$3$1" + Us + (nt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~bu(e, "stretch") ? Fg(Te(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (nt(e, t + 1) !== 115) break;
    case 6444:
      switch (nt(e, Wt(e) - 3 - (~bu(e, "!important") && 10))) {
        case 107:
          return Te(e, ":", ":" + Se) + e;
        case 101:
          return Te(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Se + (nt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Se + "$2$3$1" + at + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (nt(e, t + 11)) {
        case 114:
          return Se + e + at + Te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Se + e + at + Te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Se + e + at + Te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Se + e + at + e + e;
  }
  return e;
}
var rB = function(t, n, a, r) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case oc:
      t.return = Fg(t.value, t.length);
      break;
    case Bg:
      return Ka([Br(t, {
        value: Te(t.value, "@", "@" + Se)
      })], r);
    case rc:
      if (t.length) return LE(t.props, function(o) {
        switch (NE(o, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Ka([Br(t, {
              props: [Te(o, /:(read-\w+)/, ":" + Us + "$1")]
            })], r);
          case "::placeholder":
            return Ka([Br(t, {
              props: [Te(o, /:(plac\w+)/, ":" + Se + "input-$1")]
            }), Br(t, {
              props: [Te(o, /:(plac\w+)/, ":" + Us + "$1")]
            }), Br(t, {
              props: [Te(o, /:(plac\w+)/, at + "input-$1")]
            })], r);
        }
        return "";
      });
  }
}, oB = [rB], sB = function(t) {
  var n = t.key;
  if (n === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(m) {
      var b = m.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var r = t.stylisPlugins || oB, o = {}, s, i = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(m) {
      for (var b = m.getAttribute("data-emotion").split(" "), x = 1; x < b.length; x++)
        o[b[x]] = !0;
      i.push(m);
    }
  );
  var u, d = [nB, aB];
  {
    var c, f = [GE, JE(function(m) {
      c.insert(m);
    })], p = XE(d.concat(r, f)), h = function(b) {
      return Ka(jE(b), p);
    };
    u = function(b, x, k, $) {
      c = k, h(b ? b + "{" + x.styles + "}" : x.styles), $ && (v.inserted[x.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new OE({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: o,
    registered: {},
    insert: u
  };
  return v.sheet.hydrate(i), v;
};
function iB(e) {
  for (var t = 0, n, a = 0, r = e.length; r >= 4; ++a, r -= 4)
    n = e.charCodeAt(a) & 255 | (e.charCodeAt(++a) & 255) << 8 | (e.charCodeAt(++a) & 255) << 16 | (e.charCodeAt(++a) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (r) {
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
var lB = {
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
}, uB = /[A-Z]|^ms/g, dB = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Vg = function(t) {
  return t.charCodeAt(1) === 45;
}, sp = function(t) {
  return t != null && typeof t != "boolean";
}, Tl = /* @__PURE__ */ ZE(function(e) {
  return Vg(e) ? e : e.replace(uB, "-$&").toLowerCase();
}), ip = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(dB, function(a, r, o) {
          return zn = {
            name: r,
            styles: o,
            next: zn
          }, r;
        });
  }
  return lB[t] !== 1 && !Vg(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Ks(e, t, n) {
  if (n == null)
    return "";
  var a = n;
  if (a.__emotion_styles !== void 0)
    return a;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var r = n;
      if (r.anim === 1)
        return zn = {
          name: r.name,
          styles: r.styles,
          next: zn
        }, r.name;
      var o = n;
      if (o.styles !== void 0) {
        var s = o.next;
        if (s !== void 0)
          for (; s !== void 0; )
            zn = {
              name: s.name,
              styles: s.styles,
              next: zn
            }, s = s.next;
        var i = o.styles + ";";
        return i;
      }
      return cB(e, t, n);
    }
  }
  var u = n;
  if (t == null)
    return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function cB(e, t, n) {
  var a = "";
  if (Array.isArray(n))
    for (var r = 0; r < n.length; r++)
      a += Ks(e, t, n[r]) + ";";
  else
    for (var o in n) {
      var s = n[o];
      if (typeof s != "object") {
        var i = s;
        t != null && t[i] !== void 0 ? a += o + "{" + t[i] + "}" : sp(i) && (a += Tl(o) + ":" + ip(o, i) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var u = 0; u < s.length; u++)
          sp(s[u]) && (a += Tl(o) + ":" + ip(o, s[u]) + ";");
      else {
        var d = Ks(e, t, s);
        switch (o) {
          case "animation":
          case "animationName": {
            a += Tl(o) + ":" + d + ";";
            break;
          }
          default:
            a += o + "{" + d + "}";
        }
      }
    }
  return a;
}
var lp = /label:\s*([^\s;{]+)\s*(;|$)/g, zn;
function Ml(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var a = !0, r = "";
  zn = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    a = !1, r += Ks(n, t, o);
  else {
    var s = o;
    r += s[0];
  }
  for (var i = 1; i < e.length; i++)
    if (r += Ks(n, t, e[i]), a) {
      var u = o;
      r += u[i];
    }
  lp.lastIndex = 0;
  for (var d = "", c; (c = lp.exec(r)) !== null; )
    d += "-" + c[1];
  var f = iB(r) + d;
  return {
    name: f,
    styles: r,
    next: zn
  };
}
function Ng(e, t, n) {
  var a = "";
  return n.split(" ").forEach(function(r) {
    e[r] !== void 0 ? t.push(e[r] + ";") : r && (a += r + " ");
  }), a;
}
var fB = function(t, n, a) {
  var r = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  t.registered[r] === void 0 && (t.registered[r] = n.styles);
}, pB = function(t, n, a) {
  fB(t, n);
  var r = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + r : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function up(e, t) {
  if (e.inserted[t.name] === void 0)
    return e.insert("", t, e.sheet, !0);
}
function dp(e, t, n) {
  var a = [], r = Ng(e, a, n);
  return a.length < 2 ? n : r + t(a);
}
var hB = function(t) {
  var n = sB(t);
  n.sheet.speedy = function(i) {
    this.isSpeedy = i;
  }, n.compat = !0;
  var a = function() {
    for (var u = arguments.length, d = new Array(u), c = 0; c < u; c++)
      d[c] = arguments[c];
    var f = Ml(d, n.registered, void 0);
    return pB(n, f), n.key + "-" + f.name;
  }, r = function() {
    for (var u = arguments.length, d = new Array(u), c = 0; c < u; c++)
      d[c] = arguments[c];
    var f = Ml(d, n.registered), p = "animation-" + f.name;
    return up(n, {
      name: f.name,
      styles: "@keyframes " + p + "{" + f.styles + "}"
    }), p;
  }, o = function() {
    for (var u = arguments.length, d = new Array(u), c = 0; c < u; c++)
      d[c] = arguments[c];
    var f = Ml(d, n.registered);
    up(n, f);
  }, s = function() {
    for (var u = arguments.length, d = new Array(u), c = 0; c < u; c++)
      d[c] = arguments[c];
    return dp(n.registered, a, vB(d));
  };
  return {
    css: a,
    cx: s,
    injectGlobal: o,
    keyframes: r,
    hydrate: function(u) {
      u.forEach(function(d) {
        n.inserted[d] = !0;
      });
    },
    flush: function() {
      n.registered = {}, n.inserted = {}, n.sheet.flush();
    },
    sheet: n.sheet,
    cache: n,
    getRegisteredStyles: Ng.bind(null, n.registered),
    merge: dp.bind(null, n.registered, a)
  };
}, vB = function e(t) {
  for (var n = "", a = 0; a < t.length; a++) {
    var r = t[a];
    if (r != null) {
      var o = void 0;
      switch (typeof r) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(r))
            o = e(r);
          else {
            o = "";
            for (var s in r)
              r[s] && s && (o && (o += " "), o += s);
          }
          break;
        }
        default:
          o = r;
      }
      o && (n && (n += " "), n += o);
    }
  }
  return n;
}, Lg = hB({
  key: "css"
}), Hi = Lg.injectGlobal, Re = Lg.css, mB = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gB = function(t, n) {
  n || (n = [0, ""]), t = String(t);
  var a = parseFloat(t, 10);
  return n[0] = a, n[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "", n;
}, qg = gB, yB = ic, Or = Hg("in", document.body);
function xu(e, t) {
  var n = qg(getComputedStyle(e).getPropertyValue(t));
  return n[0] * ic(n[1], e);
}
function Hg(e, t) {
  var n = document.createElement("div");
  n.style.height = "128" + e, t.appendChild(n);
  var a = xu(n, "height") / 128;
  return t.removeChild(n), a;
}
function ic(e, t) {
  if (!e) return null;
  switch (t = t || document.body, e = (e + "" || "px").trim().toLowerCase(), (t === window || t === document) && (t = document.body), e) {
    case "%":
      return t.clientHeight / 100;
    case "ch":
    case "ex":
      return Hg(e, t);
    case "em":
      return xu(t, "font-size");
    case "rem":
      return xu(document.body, "font-size");
    case "vw":
      return window.innerWidth / 100;
    case "vh":
      return window.innerHeight / 100;
    case "vmin":
      return Math.min(window.innerWidth, window.innerHeight) / 100;
    case "vmax":
      return Math.max(window.innerWidth, window.innerHeight) / 100;
    case "in":
      return Or;
    case "cm":
      return Or / 2.54;
    case "mm":
      return Or / 25.4;
    case "pt":
      return Or / 72;
    case "pc":
      return Or / 6;
    case "px":
      return 1;
  }
  var n = qg(e);
  if (!isNaN(n[0]) && n[1]) {
    var a = ic(n[1], t);
    return typeof a == "number" ? n[0] * a : null;
  }
  return null;
}
const wu = /* @__PURE__ */ zg(yB);
function Wg() {
  const e = () => Math.floor((1 + crypto.getRandomValues(new Uint32Array(1))[0]) * 65536).toString(16).substring(1);
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}
function bB(e, t) {
  const n = e.substr(4, e.length - 5);
  return getComputedStyle(t).getPropertyValue(n);
}
function _B(e, t, n = 0) {
  const [a, r, o, s] = [
    e.x + n,
    e.y + e.height - 2 * n,
    e.x + e.width - 2 * n,
    e.y + n
  ], [i, u, d, c] = [
    t.x + n,
    t.y + t.height - 2 * n,
    t.x + t.width - 2 * n,
    t.y + n
  ];
  return !(r < c || u < s || o < i || d < a);
}
function lc(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ug(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function Eo() {
}
var lo = 0.7, js = 1 / lo, ja = "\\s*([+-]?\\d+)\\s*", uo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Gt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", xB = /^#([0-9a-f]{3,8})$/, wB = new RegExp(`^rgb\\(${ja},${ja},${ja}\\)$`), CB = new RegExp(`^rgb\\(${Gt},${Gt},${Gt}\\)$`), $B = new RegExp(`^rgba\\(${ja},${ja},${ja},${uo}\\)$`), kB = new RegExp(`^rgba\\(${Gt},${Gt},${Gt},${uo}\\)$`), SB = new RegExp(`^hsl\\(${uo},${Gt},${Gt}\\)$`), TB = new RegExp(`^hsla\\(${uo},${Gt},${Gt},${uo}\\)$`), cp = {
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
lc(Eo, va, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: fp,
  // Deprecated! Use color.formatHex.
  formatHex: fp,
  formatHex8: MB,
  formatHsl: AB,
  formatRgb: pp,
  toString: pp
});
function fp() {
  return this.rgb().formatHex();
}
function MB() {
  return this.rgb().formatHex8();
}
function AB() {
  return Kg(this).formatHsl();
}
function pp() {
  return this.rgb().formatRgb();
}
function va(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = xB.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? hp(t) : n === 3 ? new it(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Zo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Zo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = wB.exec(e)) ? new it(t[1], t[2], t[3], 1) : (t = CB.exec(e)) ? new it(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = $B.exec(e)) ? Zo(t[1], t[2], t[3], t[4]) : (t = kB.exec(e)) ? Zo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = SB.exec(e)) ? gp(t[1], t[2] / 100, t[3] / 100, 1) : (t = TB.exec(e)) ? gp(t[1], t[2] / 100, t[3] / 100, t[4]) : cp.hasOwnProperty(e) ? hp(cp[e]) : e === "transparent" ? new it(NaN, NaN, NaN, 0) : null;
}
function hp(e) {
  return new it(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Zo(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new it(e, t, n, a);
}
function DB(e) {
  return e instanceof Eo || (e = va(e)), e ? (e = e.rgb(), new it(e.r, e.g, e.b, e.opacity)) : new it();
}
function Cu(e, t, n, a) {
  return arguments.length === 1 ? DB(e) : new it(e, t, n, a ?? 1);
}
function it(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
lc(it, Cu, Ug(Eo, {
  brighter(e) {
    return e = e == null ? js : Math.pow(js, e), new it(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? lo : Math.pow(lo, e), new it(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new it(ua(this.r), ua(this.g), ua(this.b), Ys(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: vp,
  // Deprecated! Use color.formatHex.
  formatHex: vp,
  formatHex8: EB,
  formatRgb: mp,
  toString: mp
}));
function vp() {
  return `#${aa(this.r)}${aa(this.g)}${aa(this.b)}`;
}
function EB() {
  return `#${aa(this.r)}${aa(this.g)}${aa(this.b)}${aa((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function mp() {
  const e = Ys(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ua(this.r)}, ${ua(this.g)}, ${ua(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ys(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ua(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function aa(e) {
  return e = ua(e), (e < 16 ? "0" : "") + e.toString(16);
}
function gp(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Dt(e, t, n, a);
}
function Kg(e) {
  if (e instanceof Dt) return new Dt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Eo || (e = va(e)), !e) return new Dt();
  if (e instanceof Dt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, r = Math.min(t, n, a), o = Math.max(t, n, a), s = NaN, i = o - r, u = (o + r) / 2;
  return i ? (t === o ? s = (n - a) / i + (n < a) * 6 : n === o ? s = (a - t) / i + 2 : s = (t - n) / i + 4, i /= u < 0.5 ? o + r : 2 - o - r, s *= 60) : i = u > 0 && u < 1 ? 0 : s, new Dt(s, i, u, e.opacity);
}
function uc(e, t, n, a) {
  return arguments.length === 1 ? Kg(e) : new Dt(e, t, n, a ?? 1);
}
function Dt(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
lc(Dt, uc, Ug(Eo, {
  brighter(e) {
    return e = e == null ? js : Math.pow(js, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? lo : Math.pow(lo, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, r = 2 * n - a;
    return new it(
      Al(e >= 240 ? e - 240 : e + 120, r, a),
      Al(e, r, a),
      Al(e < 120 ? e + 240 : e - 120, r, a),
      this.opacity
    );
  },
  clamp() {
    return new Dt(yp(this.h), Qo(this.s), Qo(this.l), Ys(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ys(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${yp(this.h)}, ${Qo(this.s) * 100}%, ${Qo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function yp(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Qo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Al(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Lr = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS) || ["#4D8CFD", "#FF6B7E", "#F4B83E", "#A6CC74", "#00C19A", "#6859BE"], BB = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS_DARK) || ["#4D8CFD", "#FF6B7E", "#FFC16D", "#A6CC74", "#00C19A", "#7887E0"], Rn = (e) => `--vis-${Wa(e) ? `color${e % Lr.length}` : e}`;
function OB(e, t = 0.4) {
  const n = uc(e);
  return n.l = n.l * (1 + t), n.formatHex();
}
function PB(e, t = 0.4, n = 0.6) {
  const a = uc(e);
  return a.s = a.s * (1 - n), a.l = a.l * (1 - t), a.formatHex();
}
const co = 10, $u = [
  { id: "stripes-diagonal", svg: '<path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#000"/>' },
  { id: "dots", svg: '<path d="m0-1.5a1 1 0 010 3m10-3a1 1 0 000 3M5 3.5a1 1 0 010 3 1 1 0 010-3M0 8.5 a1 1 0 010 3m10-3a1 1 0 000 3" fill"#000"/>' },
  { id: "stripes-vertical", svg: '<path d="M 5,-1 L5,11" stroke="#000"/>' },
  { id: "crosshatch", svg: '<path d="M0 0L10 10ZM10 0L0 10Z" stroke="#000"/>' },
  { id: "waves", svg: '<path d="M0 4Q2.5 1 5 4 7.5 7 10 4v2Q7.5 9 5 6 2.5 3 0 6Z" fill="#000"/>' },
  { id: "circles", svg: '<circle cx="5" cy="5" r="3" stroke="#000" fill="#fff"/>' }
], ku = [
  { id: "circle", marker: '<circle cx="5" cy="5" r="5"/>', dashArray: [] },
  { id: "triangle", marker: '<path d="M5,0 L10,9 L0,9Z">', dashArray: [9, 1] },
  { id: "diamond", marker: '<path d="M 0 5 L5 0 L 10 5 L 5 10 L 0 5Z">', dashArray: [2] },
  { id: "arrow", marker: '<path d="M4 0 0 0 6 5 0 10 4 10 10 5Z">', dashArray: [2, 3, 8, 3] },
  { id: "square", marker: '<rect x="1" y="1" width="8" height="8"/>', dashArray: [6] },
  { id: "star", marker: '<path d="m2 9 3-9 3 9L0 3h10Z"/>', dashArray: [1, 6] }
];
function Fn(e) {
  return `vis-${`pattern-${e.svg ? "fill" : "marker"}`}-${e.id}`;
}
const IB = (e) => `<mask id="${Fn(e)}">
    <pattern id="${e.id}" viewBox="0 0 10 10" width="${co}" height="${co}" patternUnits="userSpaceOnUse">
      <rect width="100%" height="100%" fill="#fff"/>
      ${e.svg}
    </pattern>
    <rect x="-50%" y="-50%" width="200%" height="200%" fill="url(#${e.id})"/>
  </mask>`, RB = (e, t) => `<marker id="${Fn(e)}"
    fill="var(${Rn(t)})"
    markerUnits="userSpaceOnUse"
    refX="5"
    refY="5"
    markerWidth="${co}"
    markerHeight="${co}">
    ${e.marker}
  </marker>`;
function FB() {
  const e = $u.map(IB).concat(ku.map(RB)).join(""), t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  t.setAttribute("height", "100%"), t.setAttribute("width", "100%"), t.style.position = "fixed", t.style.zIndex = "-99999999", t.innerHTML = `<defs>${e}</defs>`, document.body.appendChild(t);
}
typeof window < "u" && FB();
const jg = (globalThis == null ? void 0 : globalThis.UNOVIS_FONT_W2H_RATIO_DEFAULT) || 0.5, Yg = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_SEPARATOR_DEFAULT) || [" ", "-", ".", ","], Gg = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_HYPHEN_CHARACTER_DEFAULT) || "-", Xr = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_DEFAULT) || {
  // If you change these defaults, don't forget to update the values in the `UnovisText` type in `types/text.ts`
  text: "",
  fontSize: 12,
  fontFamily: "var(--vis-font-family)",
  lineHeight: 1.25,
  marginTop: 0,
  marginBottom: 0
};
Hi`
  :root {
    label: vis-root-styles;
    --vis-font-family: Inter, Arial, "Helvetica Neue", Helvetica, sans-serif;
    --vis-font-wh-ratio: ${jg};
    --vis-color-main: var(${Rn(0)});
    --vis-color-main-light: ${OB(Lr[0])};
    --vis-color-main-dark: ${PB(Lr[0])};
    --vis-color-grey: #2a2a2a;
    ${Lr.map((e, t) => `${Rn(t)}: ${e};`)}
    ${BB.map((e, t) => `--vis-dark-color${t}: ${e};`)}
    ${$u.map((e, t) => `
      --${Fn(e)}: url(#${Fn(e)});
      --vis-pattern-fill${t}: var(--${Fn(e)});
    `)}
    ${ku.map((e, t) => {
  var n;
  return `
      --${Fn(e)}: url(#${Fn(e)});
      --vis-pattern-marker${t}: var(--${Fn(e)});
      --vis-pattern-dasharray${t}: ${(n = e.dashArray) === null || n === void 0 ? void 0 : n.join(" ")};
    `;
})}

    body.theme-dark {
      ${Lr.map((e, t) => `${Rn(t)}: var(--vis-dark-color${t});`)}
    }

    body.theme-patterns {
      ${$u.map((e, t) => `path[style*="fill: var(${Rn(t)})"]  {
        mask: var(--vis-pattern-fill${t});
      }`)}
      ${ku.map((e, t) => `
      path[stroke="var(${Rn(t)})"]:not([style*="fill"]),
      path[style*="stroke: var(${Rn(t)})"]:not([style*="fill"]) {
        marker: var(--vis-pattern-marker${t});
        stroke-dasharray: var(--vis-pattern-dasharray${t});
      }
    `)}
}
`;
function Xg(e = window == null ? void 0 : window.document.body) {
  return e ? +bB("var(--vis-font-wh-ratio)", e) : jg;
}
var VB = { value: () => {
} };
function Jg() {
  for (var e = 0, t = arguments.length, n = {}, a; e < t; ++e) {
    if (!(a = arguments[e] + "") || a in n || /[\s.]/.test(a)) throw new Error("illegal type: " + a);
    n[a] = [];
  }
  return new vs(n);
}
function vs(e) {
  this._ = e;
}
function NB(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var a = "", r = n.indexOf(".");
    if (r >= 0 && (a = n.slice(r + 1), n = n.slice(0, r)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: a };
  });
}
vs.prototype = Jg.prototype = {
  constructor: vs,
  on: function(e, t) {
    var n = this._, a = NB(e + "", n), r, o = -1, s = a.length;
    if (arguments.length < 2) {
      for (; ++o < s; ) if ((r = (e = a[o]).type) && (r = LB(n[r], e.name))) return r;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++o < s; )
      if (r = (e = a[o]).type) n[r] = bp(n[r], e.name, t);
      else if (t == null) for (r in n) n[r] = bp(n[r], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new vs(e);
  },
  call: function(e, t) {
    if ((r = arguments.length - 2) > 0) for (var n = new Array(r), a = 0, r, o; a < r; ++a) n[a] = arguments[a + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (o = this._[e], a = 0, r = o.length; a < r; ++a) o[a].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var a = this._[e], r = 0, o = a.length; r < o; ++r) a[r].value.apply(t, n);
  }
};
function LB(e, t) {
  for (var n = 0, a = e.length, r; n < a; ++n)
    if ((r = e[n]).name === t)
      return r.value;
}
function bp(e, t, n) {
  for (var a = 0, r = e.length; a < r; ++a)
    if (e[a].name === t) {
      e[a] = VB, e = e.slice(0, a).concat(e.slice(a + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var lr = 0, zr = 0, Pr = 0, Zg = 1e3, Gs, qr, Xs = 0, ma = 0, Wi = 0, fo = typeof performance == "object" && performance.now ? performance : Date, Qg = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function dc() {
  return ma || (Qg(zB), ma = fo.now() + Wi);
}
function zB() {
  ma = 0;
}
function Js() {
  this._call = this._time = this._next = null;
}
Js.prototype = ey.prototype = {
  constructor: Js,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? dc() : +n) + (t == null ? 0 : +t), !this._next && qr !== this && (qr ? qr._next = this : Gs = this, qr = this), this._call = e, this._time = n, Su();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Su());
  }
};
function ey(e, t, n) {
  var a = new Js();
  return a.restart(e, t, n), a;
}
function qB() {
  dc(), ++lr;
  for (var e = Gs, t; e; )
    (t = ma - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --lr;
}
function _p() {
  ma = (Xs = fo.now()) + Wi, lr = zr = 0;
  try {
    qB();
  } finally {
    lr = 0, WB(), ma = 0;
  }
}
function HB() {
  var e = fo.now(), t = e - Xs;
  t > Zg && (Wi -= t, Xs = e);
}
function WB() {
  for (var e, t = Gs, n, a = 1 / 0; t; )
    t._call ? (a > t._time && (a = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Gs = n);
  qr = e, Su(a);
}
function Su(e) {
  if (!lr) {
    zr && (zr = clearTimeout(zr));
    var t = e - ma;
    t > 24 ? (e < 1 / 0 && (zr = setTimeout(_p, e - fo.now() - Wi)), Pr && (Pr = clearInterval(Pr))) : (Pr || (Xs = fo.now(), Pr = setInterval(HB, Zg)), lr = 1, Qg(_p));
  }
}
function xp(e, t, n) {
  var a = new Js();
  return t = t == null ? 0 : +t, a.restart((r) => {
    a.stop(), e(r + t);
  }, t, n), a;
}
var UB = Jg("start", "end", "cancel", "interrupt"), KB = [], ty = 0, wp = 1, Tu = 2, ms = 3, Cp = 4, Mu = 5, gs = 6;
function Ui(e, t, n, a, r, o) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  jB(e, n, {
    name: t,
    index: a,
    // For context during callback.
    group: r,
    // For context during callback.
    on: UB,
    tween: KB,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ty
  });
}
function cc(e, t) {
  var n = Rt(e, t);
  if (n.state > ty) throw new Error("too late; already scheduled");
  return n;
}
function rn(e, t) {
  var n = Rt(e, t);
  if (n.state > ms) throw new Error("too late; already running");
  return n;
}
function Rt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function jB(e, t, n) {
  var a = e.__transition, r;
  a[t] = n, n.timer = ey(o, 0, n.time);
  function o(d) {
    n.state = wp, n.timer.restart(s, n.delay, n.time), n.delay <= d && s(d - n.delay);
  }
  function s(d) {
    var c, f, p, h;
    if (n.state !== wp) return u();
    for (c in a)
      if (h = a[c], h.name === n.name) {
        if (h.state === ms) return xp(s);
        h.state === Cp ? (h.state = gs, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete a[c]) : +c < t && (h.state = gs, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete a[c]);
      }
    if (xp(function() {
      n.state === ms && (n.state = Cp, n.timer.restart(i, n.delay, n.time), i(d));
    }), n.state = Tu, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Tu) {
      for (n.state = ms, r = new Array(p = n.tween.length), c = 0, f = -1; c < p; ++c)
        (h = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (r[++f] = h);
      r.length = f + 1;
    }
  }
  function i(d) {
    for (var c = d < n.duration ? n.ease.call(null, d / n.duration) : (n.timer.restart(u), n.state = Mu, 1), f = -1, p = r.length; ++f < p; )
      r[f].call(e, c);
    n.state === Mu && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = gs, n.timer.stop(), delete a[t];
    for (var d in a) return;
    delete e.__transition;
  }
}
function fc(e, t) {
  var n = e.__transition, a, r, o = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((a = n[s]).name !== t) {
        o = !1;
        continue;
      }
      r = a.state > Tu && a.state < Mu, a.state = gs, a.timer.stop(), a.on.call(r ? "interrupt" : "cancel", e, e.__data__, a.index, a.group), delete n[s];
    }
    o && delete e.__transition;
  }
}
function YB(e) {
  return this.each(function() {
    fc(this, e);
  });
}
const pc = (e) => () => e;
function GB(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function XB(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function JB(e) {
  return (e = +e) == 1 ? ny : function(t, n) {
    return n - t ? XB(t, n, e) : pc(isNaN(t) ? n : t);
  };
}
function ny(e, t) {
  var n = t - e;
  return n ? GB(e, n) : pc(isNaN(e) ? t : e);
}
const Zs = function e(t) {
  var n = JB(t);
  function a(r, o) {
    var s = n((r = Cu(r)).r, (o = Cu(o)).r), i = n(r.g, o.g), u = n(r.b, o.b), d = ny(r.opacity, o.opacity);
    return function(c) {
      return r.r = s(c), r.g = i(c), r.b = u(c), r.opacity = d(c), r + "";
    };
  }
  return a.gamma = e, a;
}(1);
function ZB(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), r;
  return function(o) {
    for (r = 0; r < n; ++r) a[r] = e[r] * (1 - o) + t[r] * o;
    return a;
  };
}
function QB(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function eO(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, r = new Array(a), o = new Array(n), s;
  for (s = 0; s < a; ++s) r[s] = Sr(e[s], t[s]);
  for (; s < n; ++s) o[s] = t[s];
  return function(i) {
    for (s = 0; s < a; ++s) o[s] = r[s](i);
    return o;
  };
}
function tO(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Mt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function nO(e, t) {
  var n = {}, a = {}, r;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (r in t)
    r in e ? n[r] = Sr(e[r], t[r]) : a[r] = t[r];
  return function(o) {
    for (r in n) a[r] = n[r](o);
    return a;
  };
}
var Au = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Dl = new RegExp(Au.source, "g");
function aO(e) {
  return function() {
    return e;
  };
}
function rO(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ay(e, t) {
  var n = Au.lastIndex = Dl.lastIndex = 0, a, r, o, s = -1, i = [], u = [];
  for (e = e + "", t = t + ""; (a = Au.exec(e)) && (r = Dl.exec(t)); )
    (o = r.index) > n && (o = t.slice(n, o), i[s] ? i[s] += o : i[++s] = o), (a = a[0]) === (r = r[0]) ? i[s] ? i[s] += r : i[++s] = r : (i[++s] = null, u.push({ i: s, x: Mt(a, r) })), n = Dl.lastIndex;
  return n < t.length && (o = t.slice(n), i[s] ? i[s] += o : i[++s] = o), i.length < 2 ? u[0] ? rO(u[0].x) : aO(t) : (t = u.length, function(d) {
    for (var c = 0, f; c < t; ++c) i[(f = u[c]).i] = f.x(d);
    return i.join("");
  });
}
function Sr(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? pc(t) : (n === "number" ? Mt : n === "string" ? (a = va(t)) ? (t = a, Zs) : ay : t instanceof va ? Zs : t instanceof Date ? tO : QB(t) ? ZB : Array.isArray(t) ? eO : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? nO : Mt)(e, t);
}
function hc(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
var $p = 180 / Math.PI, Du = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ry(e, t, n, a, r, o) {
  var s, i, u;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (u = e * n + t * a) && (n -= e * u, a -= t * u), (i = Math.sqrt(n * n + a * a)) && (n /= i, a /= i, u /= i), e * a < t * n && (e = -e, t = -t, u = -u, s = -s), {
    translateX: r,
    translateY: o,
    rotate: Math.atan2(t, e) * $p,
    skewX: Math.atan(u) * $p,
    scaleX: s,
    scaleY: i
  };
}
var es;
function oO(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Du : ry(t.a, t.b, t.c, t.d, t.e, t.f);
}
function sO(e) {
  return e == null || (es || (es = document.createElementNS("http://www.w3.org/2000/svg", "g")), es.setAttribute("transform", e), !(e = es.transform.baseVal.consolidate())) ? Du : (e = e.matrix, ry(e.a, e.b, e.c, e.d, e.e, e.f));
}
function oy(e, t, n, a) {
  function r(d) {
    return d.length ? d.pop() + " " : "";
  }
  function o(d, c, f, p, h, v) {
    if (d !== f || c !== p) {
      var m = h.push("translate(", null, t, null, n);
      v.push({ i: m - 4, x: Mt(d, f) }, { i: m - 2, x: Mt(c, p) });
    } else (f || p) && h.push("translate(" + f + t + p + n);
  }
  function s(d, c, f, p) {
    d !== c ? (d - c > 180 ? c += 360 : c - d > 180 && (d += 360), p.push({ i: f.push(r(f) + "rotate(", null, a) - 2, x: Mt(d, c) })) : c && f.push(r(f) + "rotate(" + c + a);
  }
  function i(d, c, f, p) {
    d !== c ? p.push({ i: f.push(r(f) + "skewX(", null, a) - 2, x: Mt(d, c) }) : c && f.push(r(f) + "skewX(" + c + a);
  }
  function u(d, c, f, p, h, v) {
    if (d !== f || c !== p) {
      var m = h.push(r(h) + "scale(", null, ",", null, ")");
      v.push({ i: m - 4, x: Mt(d, f) }, { i: m - 2, x: Mt(c, p) });
    } else (f !== 1 || p !== 1) && h.push(r(h) + "scale(" + f + "," + p + ")");
  }
  return function(d, c) {
    var f = [], p = [];
    return d = e(d), c = e(c), o(d.translateX, d.translateY, c.translateX, c.translateY, f, p), s(d.rotate, c.rotate, f, p), i(d.skewX, c.skewX, f, p), u(d.scaleX, d.scaleY, c.scaleX, c.scaleY, f, p), d = c = null, function(h) {
      for (var v = -1, m = p.length, b; ++v < m; ) f[(b = p[v]).i] = b.x(h);
      return f.join("");
    };
  };
}
var iO = oy(oO, "px, ", "px)", "deg)"), lO = oy(sO, ", ", ")", ")");
function uO(e, t) {
  t === void 0 && (t = e, e = Sr);
  for (var n = 0, a = t.length - 1, r = t[0], o = new Array(a < 0 ? 0 : a); n < a; ) o[n] = e(r, r = t[++n]);
  return function(s) {
    var i = Math.max(0, Math.min(a - 1, Math.floor(s *= a)));
    return o[i](s - i);
  };
}
function dO(e, t) {
  var n, a;
  return function() {
    var r = rn(this, e), o = r.tween;
    if (o !== n) {
      a = n = o;
      for (var s = 0, i = a.length; s < i; ++s)
        if (a[s].name === t) {
          a = a.slice(), a.splice(s, 1);
          break;
        }
    }
    r.tween = a;
  };
}
function cO(e, t, n) {
  var a, r;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = rn(this, e), s = o.tween;
    if (s !== a) {
      r = (a = s).slice();
      for (var i = { name: t, value: n }, u = 0, d = r.length; u < d; ++u)
        if (r[u].name === t) {
          r[u] = i;
          break;
        }
      u === d && r.push(i);
    }
    o.tween = r;
  };
}
function fO(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var a = Rt(this.node(), n).tween, r = 0, o = a.length, s; r < o; ++r)
      if ((s = a[r]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? dO : cO)(n, e, t));
}
function vc(e, t, n) {
  var a = e._id;
  return e.each(function() {
    var r = rn(this, a);
    (r.value || (r.value = {}))[t] = n.apply(this, arguments);
  }), function(r) {
    return Rt(r, a).value[t];
  };
}
function sy(e, t) {
  var n;
  return (typeof t == "number" ? Mt : t instanceof va ? Zs : (n = va(t)) ? (t = n, Zs) : ay)(e, t);
}
function pO(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function hO(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function vO(e, t, n) {
  var a, r = n + "", o;
  return function() {
    var s = this.getAttribute(e);
    return s === r ? null : s === a ? o : o = t(a = s, n);
  };
}
function mO(e, t, n) {
  var a, r = n + "", o;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === r ? null : s === a ? o : o = t(a = s, n);
  };
}
function gO(e, t, n) {
  var a, r, o;
  return function() {
    var s, i = n(this), u;
    return i == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), u = i + "", s === u ? null : s === a && u === r ? o : (r = u, o = t(a = s, i)));
  };
}
function yO(e, t, n) {
  var a, r, o;
  return function() {
    var s, i = n(this), u;
    return i == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), u = i + "", s === u ? null : s === a && u === r ? o : (r = u, o = t(a = s, i)));
  };
}
function bO(e, t) {
  var n = Vi(e), a = n === "transform" ? lO : sy;
  return this.attrTween(e, typeof t == "function" ? (n.local ? yO : gO)(n, a, vc(this, "attr." + e, t)) : t == null ? (n.local ? hO : pO)(n) : (n.local ? mO : vO)(n, a, t));
}
function _O(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function xO(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function wO(e, t) {
  var n, a;
  function r() {
    var o = t.apply(this, arguments);
    return o !== a && (n = (a = o) && xO(e, o)), n;
  }
  return r._value = t, r;
}
function CO(e, t) {
  var n, a;
  function r() {
    var o = t.apply(this, arguments);
    return o !== a && (n = (a = o) && _O(e, o)), n;
  }
  return r._value = t, r;
}
function $O(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var a = Vi(e);
  return this.tween(n, (a.local ? wO : CO)(a, t));
}
function kO(e, t) {
  return function() {
    cc(this, e).delay = +t.apply(this, arguments);
  };
}
function SO(e, t) {
  return t = +t, function() {
    cc(this, e).delay = t;
  };
}
function TO(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? kO : SO)(t, e)) : Rt(this.node(), t).delay;
}
function MO(e, t) {
  return function() {
    rn(this, e).duration = +t.apply(this, arguments);
  };
}
function AO(e, t) {
  return t = +t, function() {
    rn(this, e).duration = t;
  };
}
function DO(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? MO : AO)(t, e)) : Rt(this.node(), t).duration;
}
function EO(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    rn(this, e).ease = t;
  };
}
function BO(e) {
  var t = this._id;
  return arguments.length ? this.each(EO(t, e)) : Rt(this.node(), t).ease;
}
function OO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    rn(this, e).ease = n;
  };
}
function PO(e) {
  if (typeof e != "function") throw new Error();
  return this.each(OO(this._id, e));
}
function IO(e) {
  typeof e != "function" && (e = cg(e));
  for (var t = this._groups, n = t.length, a = new Array(n), r = 0; r < n; ++r)
    for (var o = t[r], s = o.length, i = a[r] = [], u, d = 0; d < s; ++d)
      (u = o[d]) && e.call(u, u.__data__, d, o) && i.push(u);
  return new wn(a, this._parents, this._name, this._id);
}
function RO(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, a = t.length, r = n.length, o = Math.min(a, r), s = new Array(a), i = 0; i < o; ++i)
    for (var u = t[i], d = n[i], c = u.length, f = s[i] = new Array(c), p, h = 0; h < c; ++h)
      (p = u[h] || d[h]) && (f[h] = p);
  for (; i < a; ++i)
    s[i] = t[i];
  return new wn(s, this._parents, this._name, this._id);
}
function FO(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function VO(e, t, n) {
  var a, r, o = FO(t) ? cc : rn;
  return function() {
    var s = o(this, e), i = s.on;
    i !== a && (r = (a = i).copy()).on(t, n), s.on = r;
  };
}
function NO(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Rt(this.node(), n).on.on(e) : this.each(VO(n, e, t));
}
function LO(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function zO() {
  return this.on("end.remove", LO(this._id));
}
function qO(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Zd(e));
  for (var a = this._groups, r = a.length, o = new Array(r), s = 0; s < r; ++s)
    for (var i = a[s], u = i.length, d = o[s] = new Array(u), c, f, p = 0; p < u; ++p)
      (c = i[p]) && (f = e.call(c, c.__data__, p, i)) && ("__data__" in c && (f.__data__ = c.__data__), d[p] = f, Ui(d[p], t, n, p, d, Rt(c, n)));
  return new wn(o, this._parents, t, n);
}
function HO(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = dg(e));
  for (var a = this._groups, r = a.length, o = [], s = [], i = 0; i < r; ++i)
    for (var u = a[i], d = u.length, c, f = 0; f < d; ++f)
      if (c = u[f]) {
        for (var p = e.call(c, c.__data__, f, u), h, v = Rt(c, n), m = 0, b = p.length; m < b; ++m)
          (h = p[m]) && Ui(h, t, n, m, p, v);
        o.push(p), s.push(c);
      }
  return new wn(o, s, t, n);
}
var WO = Mo.prototype.constructor;
function UO() {
  return new WO(this._groups, this._parents);
}
function KO(e, t) {
  var n, a, r;
  return function() {
    var o = rr(this, e), s = (this.style.removeProperty(e), rr(this, e));
    return o === s ? null : o === n && s === a ? r : r = t(n = o, a = s);
  };
}
function iy(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function jO(e, t, n) {
  var a, r = n + "", o;
  return function() {
    var s = rr(this, e);
    return s === r ? null : s === a ? o : o = t(a = s, n);
  };
}
function YO(e, t, n) {
  var a, r, o;
  return function() {
    var s = rr(this, e), i = n(this), u = i + "";
    return i == null && (u = i = (this.style.removeProperty(e), rr(this, e))), s === u ? null : s === a && u === r ? o : (r = u, o = t(a = s, i));
  };
}
function GO(e, t) {
  var n, a, r, o = "style." + t, s = "end." + o, i;
  return function() {
    var u = rn(this, e), d = u.on, c = u.value[o] == null ? i || (i = iy(t)) : void 0;
    (d !== n || r !== c) && (a = (n = d).copy()).on(s, r = c), u.on = a;
  };
}
function XO(e, t, n) {
  var a = (e += "") == "transform" ? iO : sy;
  return t == null ? this.styleTween(e, KO(e, a)).on("end.style." + e, iy(e)) : typeof t == "function" ? this.styleTween(e, YO(e, a, vc(this, "style." + e, t))).each(GO(this._id, e)) : this.styleTween(e, jO(e, a, t), n).on("end.style." + e, null);
}
function JO(e, t, n) {
  return function(a) {
    this.style.setProperty(e, t.call(this, a), n);
  };
}
function ZO(e, t, n) {
  var a, r;
  function o() {
    var s = t.apply(this, arguments);
    return s !== r && (a = (r = s) && JO(e, s, n)), a;
  }
  return o._value = t, o;
}
function QO(e, t, n) {
  var a = "style." + (e += "");
  if (arguments.length < 2) return (a = this.tween(a)) && a._value;
  if (t == null) return this.tween(a, null);
  if (typeof t != "function") throw new Error();
  return this.tween(a, ZO(e, t, n ?? ""));
}
function e3(e) {
  return function() {
    this.textContent = e;
  };
}
function t3(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function n3(e) {
  return this.tween("text", typeof e == "function" ? t3(vc(this, "text", e)) : e3(e == null ? "" : e + ""));
}
function a3(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function r3(e) {
  var t, n;
  function a() {
    var r = e.apply(this, arguments);
    return r !== n && (t = (n = r) && a3(r)), t;
  }
  return a._value = e, a;
}
function o3(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, r3(e));
}
function s3() {
  for (var e = this._name, t = this._id, n = ly(), a = this._groups, r = a.length, o = 0; o < r; ++o)
    for (var s = a[o], i = s.length, u, d = 0; d < i; ++d)
      if (u = s[d]) {
        var c = Rt(u, t);
        Ui(u, e, n, d, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new wn(a, this._parents, e, n);
}
function i3() {
  var e, t, n = this, a = n._id, r = n.size();
  return new Promise(function(o, s) {
    var i = { value: s }, u = { value: function() {
      --r === 0 && o();
    } };
    n.each(function() {
      var d = rn(this, a), c = d.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(i), t._.interrupt.push(i), t._.end.push(u)), d.on = t;
    }), r === 0 && o();
  });
}
var l3 = 0;
function wn(e, t, n, a) {
  this._groups = e, this._parents = t, this._name = n, this._id = a;
}
function ly() {
  return ++l3;
}
var ln = Mo.prototype;
wn.prototype = {
  constructor: wn,
  select: qO,
  selectAll: HO,
  selectChild: ln.selectChild,
  selectChildren: ln.selectChildren,
  filter: IO,
  merge: RO,
  selection: UO,
  transition: s3,
  call: ln.call,
  nodes: ln.nodes,
  node: ln.node,
  size: ln.size,
  empty: ln.empty,
  each: ln.each,
  on: NO,
  attr: bO,
  attrTween: $O,
  style: XO,
  styleTween: QO,
  text: n3,
  textTween: o3,
  remove: zO,
  tween: fO,
  delay: TO,
  duration: DO,
  ease: BO,
  easeVarying: PO,
  end: i3,
  [Symbol.iterator]: ln[Symbol.iterator]
};
function u3(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var d3 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: u3
};
function c3(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function f3(e) {
  var t, n;
  e instanceof wn ? (t = e._id, e = e._name) : (t = ly(), (n = d3).time = dc(), e = e == null ? null : e + "");
  for (var a = this._groups, r = a.length, o = 0; o < r; ++o)
    for (var s = a[o], i = s.length, u, d = 0; d < i; ++d)
      (u = s[d]) && Ui(u, e, t, d, s, n || c3(u, t));
  return new wn(a, this._parents, e, t);
}
Mo.prototype.interrupt = YB;
Mo.prototype.transition = f3;
function ra(e, t, n) {
  return e.nodes().forEach((a) => fc(a)), t ? e.transition().duration(t) : e;
}
class mc {
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
var $e;
(function(e) {
  e.X = "x", e.Y = "y";
})($e || ($e = {}));
function Ft(e, t) {
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
function uy(e, t) {
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
const kp = Symbol("implicit");
function gc() {
  var e = new zf(), t = [], n = [], a = kp;
  function r(o) {
    let s = e.get(o);
    if (s === void 0) {
      if (a !== kp) return a;
      e.set(o, s = t.push(o) - 1);
    }
    return n[s % n.length];
  }
  return r.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new zf();
    for (const s of o)
      e.has(s) || e.set(s, t.push(s) - 1);
    return r;
  }, r.range = function(o) {
    return arguments.length ? (n = Array.from(o), r) : n.slice();
  }, r.unknown = function(o) {
    return arguments.length ? (a = o, r) : a;
  }, r.copy = function() {
    return gc(t, n).unknown(a);
  }, Ft.apply(r, arguments), r;
}
function yc() {
  var e = gc().unknown(void 0), t = e.domain, n = e.range, a = 0, r = 1, o, s, i = !1, u = 0, d = 0, c = 0.5;
  delete e.unknown;
  function f() {
    var p = t().length, h = r < a, v = h ? r : a, m = h ? a : r;
    o = (m - v) / Math.max(1, p - u + d * 2), i && (o = Math.floor(o)), v += (m - v - o * (p - u)) * c, s = o * (1 - u), i && (v = Math.round(v), s = Math.round(s));
    var b = tE(p).map(function(x) {
      return v + o * x;
    });
    return n(h ? b.reverse() : b);
  }
  return e.domain = function(p) {
    return arguments.length ? (t(p), f()) : t();
  }, e.range = function(p) {
    return arguments.length ? ([a, r] = p, a = +a, r = +r, f()) : [a, r];
  }, e.rangeRound = function(p) {
    return [a, r] = p, a = +a, r = +r, i = !0, f();
  }, e.bandwidth = function() {
    return s;
  }, e.step = function() {
    return o;
  }, e.round = function(p) {
    return arguments.length ? (i = !!p, f()) : i;
  }, e.padding = function(p) {
    return arguments.length ? (u = Math.min(1, d = +p), f()) : u;
  }, e.paddingInner = function(p) {
    return arguments.length ? (u = Math.min(1, p), f()) : u;
  }, e.paddingOuter = function(p) {
    return arguments.length ? (d = +p, f()) : d;
  }, e.align = function(p) {
    return arguments.length ? (c = Math.max(0, Math.min(1, p)), f()) : c;
  }, e.copy = function() {
    return yc(t(), [a, r]).round(i).paddingInner(u).paddingOuter(d).align(c);
  }, Ft.apply(f(), arguments);
}
function dy(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return dy(t());
  }, e;
}
function p3() {
  return dy(yc.apply(null, arguments).paddingInner(1));
}
function h3(e) {
  return function() {
    return e;
  };
}
function Eu(e) {
  return +e;
}
var Sp = [0, 1];
function lt(e) {
  return e;
}
function Bu(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : h3(isNaN(t) ? NaN : 0.5);
}
function v3(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function m3(e, t, n) {
  var a = e[0], r = e[1], o = t[0], s = t[1];
  return r < a ? (a = Bu(r, a), o = n(s, o)) : (a = Bu(a, r), o = n(o, s)), function(i) {
    return o(a(i));
  };
}
function g3(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, r = new Array(a), o = new Array(a), s = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++s < a; )
    r[s] = Bu(e[s], e[s + 1]), o[s] = n(t[s], t[s + 1]);
  return function(i) {
    var u = Ao(e, i, 1, a) - 1;
    return o[u](r[u](i));
  };
}
function Bo(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ki() {
  var e = Sp, t = Sp, n = Sr, a, r, o, s = lt, i, u, d;
  function c() {
    var p = Math.min(e.length, t.length);
    return s !== lt && (s = v3(e[0], e[p - 1])), i = p > 2 ? g3 : m3, u = d = null, f;
  }
  function f(p) {
    return p == null || isNaN(p = +p) ? o : (u || (u = i(e.map(a), t, n)))(a(s(p)));
  }
  return f.invert = function(p) {
    return s(r((d || (d = i(t, e.map(a), Mt)))(p)));
  }, f.domain = function(p) {
    return arguments.length ? (e = Array.from(p, Eu), c()) : e.slice();
  }, f.range = function(p) {
    return arguments.length ? (t = Array.from(p), c()) : t.slice();
  }, f.rangeRound = function(p) {
    return t = Array.from(p), n = hc, c();
  }, f.clamp = function(p) {
    return arguments.length ? (s = p ? !0 : lt, c()) : s !== lt;
  }, f.interpolate = function(p) {
    return arguments.length ? (n = p, c()) : n;
  }, f.unknown = function(p) {
    return arguments.length ? (o = p, f) : o;
  }, function(p, h) {
    return a = p, r = h, c();
  };
}
function cy() {
  return Ki()(lt, lt);
}
function y3(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Qs(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function ur(e) {
  return e = Qs(Math.abs(e)), e ? e[1] : NaN;
}
function b3(e, t) {
  return function(n, a) {
    for (var r = n.length, o = [], s = 0, i = e[0], u = 0; r > 0 && i > 0 && (u + i + 1 > a && (i = Math.max(1, a - u)), o.push(n.substring(r -= i, r + i)), !((u += i + 1) > a)); )
      i = e[s = (s + 1) % e.length];
    return o.reverse().join(t);
  };
}
function _3(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var x3 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function po(e) {
  if (!(t = x3.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new bc({
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
po.prototype = bc.prototype;
function bc(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
bc.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function w3(e) {
  e: for (var t = e.length, n = 1, a = -1, r; n < t; ++n)
    switch (e[n]) {
      case ".":
        a = r = n;
        break;
      case "0":
        a === 0 && (a = n), r = n;
        break;
      default:
        if (!+e[n]) break e;
        a > 0 && (a = 0);
        break;
    }
  return a > 0 ? e.slice(0, a) + e.slice(r + 1) : e;
}
var fy;
function C3(e, t) {
  var n = Qs(e, t);
  if (!n) return e + "";
  var a = n[0], r = n[1], o = r - (fy = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, s = a.length;
  return o === s ? a : o > s ? a + new Array(o - s + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + Qs(e, Math.max(0, t + o - 1))[0];
}
function Tp(e, t) {
  var n = Qs(e, t);
  if (!n) return e + "";
  var a = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + a : a.length > r + 1 ? a.slice(0, r + 1) + "." + a.slice(r + 1) : a + new Array(r - a.length + 2).join("0");
}
const Mp = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: y3,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Tp(e * 100, t),
  r: Tp,
  s: C3,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Ap(e) {
  return e;
}
var Dp = Array.prototype.map, Ep = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function $3(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Ap : b3(Dp.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", r = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? Ap : _3(Dp.call(e.numerals, String)), s = e.percent === void 0 ? "%" : e.percent + "", i = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function d(f) {
    f = po(f);
    var p = f.fill, h = f.align, v = f.sign, m = f.symbol, b = f.zero, x = f.width, k = f.comma, $ = f.precision, M = f.trim, S = f.type;
    S === "n" ? (k = !0, S = "g") : Mp[S] || ($ === void 0 && ($ = 12), M = !0, S = "g"), (b || p === "0" && h === "=") && (b = !0, p = "0", h = "=");
    var D = m === "$" ? n : m === "#" && /[boxX]/.test(S) ? "0" + S.toLowerCase() : "", A = m === "$" ? a : /[%p]/.test(S) ? s : "", N = Mp[S], F = /[defgprs%]/.test(S);
    $ = $ === void 0 ? 6 : /[gprs]/.test(S) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function P(I) {
      var R = D, j = A, z, Y, te;
      if (S === "c")
        j = N(I) + j, I = "";
      else {
        I = +I;
        var ye = I < 0 || 1 / I < 0;
        if (I = isNaN(I) ? u : N(Math.abs(I), $), M && (I = w3(I)), ye && +I == 0 && v !== "+" && (ye = !1), R = (ye ? v === "(" ? v : i : v === "-" || v === "(" ? "" : v) + R, j = (S === "s" ? Ep[8 + fy / 3] : "") + j + (ye && v === "(" ? ")" : ""), F) {
          for (z = -1, Y = I.length; ++z < Y; )
            if (te = I.charCodeAt(z), 48 > te || te > 57) {
              j = (te === 46 ? r + I.slice(z + 1) : I.slice(z)) + j, I = I.slice(0, z);
              break;
            }
        }
      }
      k && !b && (I = t(I, 1 / 0));
      var pe = R.length + I.length + j.length, q = pe < x ? new Array(x - pe + 1).join(p) : "";
      switch (k && b && (I = t(q + I, q.length ? x - j.length : 1 / 0), q = ""), h) {
        case "<":
          I = R + I + j + q;
          break;
        case "=":
          I = R + q + I + j;
          break;
        case "^":
          I = q.slice(0, pe = q.length >> 1) + R + I + j + q.slice(pe);
          break;
        default:
          I = q + R + I + j;
          break;
      }
      return o(I);
    }
    return P.toString = function() {
      return f + "";
    }, P;
  }
  function c(f, p) {
    var h = d((f = po(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(ur(p) / 3))) * 3, m = Math.pow(10, -v), b = Ep[8 + v / 3];
    return function(x) {
      return h(m * x) + b;
    };
  }
  return {
    format: d,
    formatPrefix: c
  };
}
var ts, _c, py;
k3({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function k3(e) {
  return ts = $3(e), _c = ts.format, py = ts.formatPrefix, ts;
}
function S3(e) {
  return Math.max(0, -ur(Math.abs(e)));
}
function T3(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ur(t) / 3))) * 3 - ur(Math.abs(e)));
}
function M3(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, ur(t) - ur(e)) + 1;
}
function A3(e, t, n, a) {
  var r = mu(e, t, n), o;
  switch (a = po(a ?? ",f"), a.type) {
    case "s": {
      var s = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(o = T3(r, s)) && (a.precision = o), py(a, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = M3(r, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = S3(r)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return _c(a);
}
function Ma(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return hu(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var r = t();
    return A3(r[0], r[r.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), r = 0, o = a.length - 1, s = a[r], i = a[o], u, d, c = 10;
    for (i < s && (d = s, s = i, i = d, d = r, r = o, o = d); c-- > 0; ) {
      if (d = vu(s, i, n), d === u)
        return a[r] = s, a[o] = i, t(a);
      if (d > 0)
        s = Math.floor(s / d) * d, i = Math.ceil(i / d) * d;
      else if (d < 0)
        s = Math.ceil(s * d) / d, i = Math.floor(i * d) / d;
      else
        break;
      u = d;
    }
    return e;
  }, e;
}
function hy() {
  var e = cy();
  return e.copy = function() {
    return Bo(e, hy());
  }, Ft.apply(e, arguments), Ma(e);
}
function vy(e) {
  var t;
  function n(a) {
    return a == null || isNaN(a = +a) ? t : a;
  }
  return n.invert = n, n.domain = n.range = function(a) {
    return arguments.length ? (e = Array.from(a, Eu), n) : e.slice();
  }, n.unknown = function(a) {
    return arguments.length ? (t = a, n) : t;
  }, n.copy = function() {
    return vy(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Eu) : [0, 1], Ma(n);
}
function my(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, r = e[n], o = e[a], s;
  return o < r && (s = n, n = a, a = s, s = r, r = o, o = s), e[n] = t.floor(r), e[a] = t.ceil(o), e;
}
function Bp(e) {
  return Math.log(e);
}
function Op(e) {
  return Math.exp(e);
}
function D3(e) {
  return -Math.log(-e);
}
function E3(e) {
  return -Math.exp(-e);
}
function B3(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function O3(e) {
  return e === 10 ? B3 : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function P3(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Pp(e) {
  return (t, n) => -e(-t, n);
}
function I3(e) {
  const t = e(Bp, Op), n = t.domain;
  let a = 10, r, o;
  function s() {
    return r = P3(a), o = O3(a), n()[0] < 0 ? (r = Pp(r), o = Pp(o), e(D3, E3)) : e(Bp, Op), t;
  }
  return t.base = function(i) {
    return arguments.length ? (a = +i, s()) : a;
  }, t.domain = function(i) {
    return arguments.length ? (n(i), s()) : n();
  }, t.ticks = (i) => {
    const u = n();
    let d = u[0], c = u[u.length - 1];
    const f = c < d;
    f && ([d, c] = [c, d]);
    let p = r(d), h = r(c), v, m;
    const b = i == null ? 10 : +i;
    let x = [];
    if (!(a % 1) && h - p < b) {
      if (p = Math.floor(p), h = Math.ceil(h), d > 0) {
        for (; p <= h; ++p)
          for (v = 1; v < a; ++v)
            if (m = p < 0 ? v / o(-p) : v * o(p), !(m < d)) {
              if (m > c) break;
              x.push(m);
            }
      } else for (; p <= h; ++p)
        for (v = a - 1; v >= 1; --v)
          if (m = p > 0 ? v / o(-p) : v * o(p), !(m < d)) {
            if (m > c) break;
            x.push(m);
          }
      x.length * 2 < b && (x = hu(d, c, b));
    } else
      x = hu(p, h, Math.min(h - p, b)).map(o);
    return f ? x.reverse() : x;
  }, t.tickFormat = (i, u) => {
    if (i == null && (i = 10), u == null && (u = a === 10 ? "s" : ","), typeof u != "function" && (!(a % 1) && (u = po(u)).precision == null && (u.trim = !0), u = _c(u)), i === 1 / 0) return u;
    const d = Math.max(1, a * i / t.ticks().length);
    return (c) => {
      let f = c / o(Math.round(r(c)));
      return f * a < a - 0.5 && (f *= a), f <= d ? u(c) : "";
    };
  }, t.nice = () => n(my(n(), {
    floor: (i) => o(Math.floor(r(i))),
    ceil: (i) => o(Math.ceil(r(i)))
  })), t;
}
function gy() {
  const e = I3(Ki()).domain([1, 10]);
  return e.copy = () => Bo(e, gy()).base(e.base()), Ft.apply(e, arguments), e;
}
function Ip(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Rp(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function R3(e) {
  var t = 1, n = e(Ip(t), Rp(t));
  return n.constant = function(a) {
    return arguments.length ? e(Ip(t = +a), Rp(t)) : t;
  }, Ma(n);
}
function yy() {
  var e = R3(Ki());
  return e.copy = function() {
    return Bo(e, yy()).constant(e.constant());
  }, Ft.apply(e, arguments);
}
function Fp(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function F3(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function V3(e) {
  return e < 0 ? -e * e : e * e;
}
function N3(e) {
  var t = e(lt, lt), n = 1;
  function a() {
    return n === 1 ? e(lt, lt) : n === 0.5 ? e(F3, V3) : e(Fp(n), Fp(1 / n));
  }
  return t.exponent = function(r) {
    return arguments.length ? (n = +r, a()) : n;
  }, Ma(t);
}
function xc() {
  var e = N3(Ki());
  return e.copy = function() {
    return Bo(e, xc()).exponent(e.exponent());
  }, Ft.apply(e, arguments), e;
}
function L3() {
  return xc.apply(null, arguments).exponent(0.5);
}
function by() {
  var e = [], t = [], n = [], a;
  function r() {
    var s = 0, i = Math.max(1, t.length);
    for (n = new Array(i - 1); ++s < i; ) n[s - 1] = ZD(e, s / i);
    return o;
  }
  function o(s) {
    return s == null || isNaN(s = +s) ? a : t[Ao(n, s)];
  }
  return o.invertExtent = function(s) {
    var i = t.indexOf(s);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? n[i - 1] : e[0],
      i < n.length ? n[i] : e[e.length - 1]
    ];
  }, o.domain = function(s) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of s) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(Yr), r();
  }, o.range = function(s) {
    return arguments.length ? (t = Array.from(s), r()) : t.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.quantiles = function() {
    return n.slice();
  }, o.copy = function() {
    return by().domain(e).range(t).unknown(a);
  }, Ft.apply(o, arguments);
}
function _y() {
  var e = 0, t = 1, n = 1, a = [0.5], r = [0, 1], o;
  function s(u) {
    return u != null && u <= u ? r[Ao(a, u, 0, n)] : o;
  }
  function i() {
    var u = -1;
    for (a = new Array(n); ++u < n; ) a[u] = ((u + 1) * t - (u - n) * e) / (n + 1);
    return s;
  }
  return s.domain = function(u) {
    return arguments.length ? ([e, t] = u, e = +e, t = +t, i()) : [e, t];
  }, s.range = function(u) {
    return arguments.length ? (n = (r = Array.from(u)).length - 1, i()) : r.slice();
  }, s.invertExtent = function(u) {
    var d = r.indexOf(u);
    return d < 0 ? [NaN, NaN] : d < 1 ? [e, a[0]] : d >= n ? [a[n - 1], t] : [a[d - 1], a[d]];
  }, s.unknown = function(u) {
    return arguments.length && (o = u), s;
  }, s.thresholds = function() {
    return a.slice();
  }, s.copy = function() {
    return _y().domain([e, t]).range(r).unknown(o);
  }, Ft.apply(Ma(s), arguments);
}
function xy() {
  var e = [0.5], t = [0, 1], n, a = 1;
  function r(o) {
    return o != null && o <= o ? t[Ao(e, o, 0, a)] : n;
  }
  return r.domain = function(o) {
    return arguments.length ? (e = Array.from(o), a = Math.min(e.length, t.length - 1), r) : e.slice();
  }, r.range = function(o) {
    return arguments.length ? (t = Array.from(o), a = Math.min(e.length, t.length - 1), r) : t.slice();
  }, r.invertExtent = function(o) {
    var s = t.indexOf(o);
    return [e[s - 1], e[s]];
  }, r.unknown = function(o) {
    return arguments.length ? (n = o, r) : n;
  }, r.copy = function() {
    return xy().domain(e).range(t).unknown(n);
  }, Ft.apply(r, arguments);
}
const El = /* @__PURE__ */ new Date(), Bl = /* @__PURE__ */ new Date();
function je(e, t, n, a) {
  function r(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return r.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), r.ceil = (o) => (e(o = new Date(o - 1)), t(o, 1), e(o), o), r.round = (o) => {
    const s = r(o), i = r.ceil(o);
    return o - s < i - o ? s : i;
  }, r.offset = (o, s) => (t(o = /* @__PURE__ */ new Date(+o), s == null ? 1 : Math.floor(s)), o), r.range = (o, s, i) => {
    const u = [];
    if (o = r.ceil(o), i = i == null ? 1 : Math.floor(i), !(o < s) || !(i > 0)) return u;
    let d;
    do
      u.push(d = /* @__PURE__ */ new Date(+o)), t(o, i), e(o);
    while (d < o && o < s);
    return u;
  }, r.filter = (o) => je((s) => {
    if (s >= s) for (; e(s), !o(s); ) s.setTime(s - 1);
  }, (s, i) => {
    if (s >= s)
      if (i < 0) for (; ++i <= 0; )
        for (; t(s, -1), !o(s); )
          ;
      else for (; --i >= 0; )
        for (; t(s, 1), !o(s); )
          ;
  }), n && (r.count = (o, s) => (El.setTime(+o), Bl.setTime(+s), e(El), e(Bl), Math.floor(n(El, Bl))), r.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? r.filter(a ? (s) => a(s) % o === 0 : (s) => r.count(0, s) % o === 0) : r)), r;
}
const ei = je(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ei.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? je((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : ei);
ei.range;
const pn = 1e3, wt = pn * 60, hn = wt * 60, Cn = hn * 24, wc = Cn * 7, Vp = Cn * 30, Ol = Cn * 365, oa = je((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * pn);
}, (e, t) => (t - e) / pn, (e) => e.getUTCSeconds());
oa.range;
const Cc = je((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * pn);
}, (e, t) => {
  e.setTime(+e + t * wt);
}, (e, t) => (t - e) / wt, (e) => e.getMinutes());
Cc.range;
const $c = je((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * wt);
}, (e, t) => (t - e) / wt, (e) => e.getUTCMinutes());
$c.range;
const kc = je((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * pn - e.getMinutes() * wt);
}, (e, t) => {
  e.setTime(+e + t * hn);
}, (e, t) => (t - e) / hn, (e) => e.getHours());
kc.range;
const Sc = je((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * hn);
}, (e, t) => (t - e) / hn, (e) => e.getUTCHours());
Sc.range;
const Oo = je(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * wt) / Cn,
  (e) => e.getDate() - 1
);
Oo.range;
const ji = je((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Cn, (e) => e.getUTCDate() - 1);
ji.range;
const wy = je((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Cn, (e) => Math.floor(e / Cn));
wy.range;
function Aa(e) {
  return je((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * wt) / wc);
}
const Yi = Aa(0), ti = Aa(1), z3 = Aa(2), q3 = Aa(3), dr = Aa(4), H3 = Aa(5), W3 = Aa(6);
Yi.range;
ti.range;
z3.range;
q3.range;
dr.range;
H3.range;
W3.range;
function Da(e) {
  return je((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / wc);
}
const Gi = Da(0), ni = Da(1), U3 = Da(2), K3 = Da(3), cr = Da(4), j3 = Da(5), Y3 = Da(6);
Gi.range;
ni.range;
U3.range;
K3.range;
cr.range;
j3.range;
Y3.range;
const Tc = je((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Tc.range;
const Mc = je((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Mc.range;
const $n = je((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
$n.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : je((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
$n.range;
const kn = je((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
kn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : je((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
kn.range;
function Cy(e, t, n, a, r, o) {
  const s = [
    [oa, 1, pn],
    [oa, 5, 5 * pn],
    [oa, 15, 15 * pn],
    [oa, 30, 30 * pn],
    [o, 1, wt],
    [o, 5, 5 * wt],
    [o, 15, 15 * wt],
    [o, 30, 30 * wt],
    [r, 1, hn],
    [r, 3, 3 * hn],
    [r, 6, 6 * hn],
    [r, 12, 12 * hn],
    [a, 1, Cn],
    [a, 2, 2 * Cn],
    [n, 1, wc],
    [t, 1, Vp],
    [t, 3, 3 * Vp],
    [e, 1, Ol]
  ];
  function i(d, c, f) {
    const p = c < d;
    p && ([d, c] = [c, d]);
    const h = f && typeof f.range == "function" ? f : u(d, c, f), v = h ? h.range(d, +c + 1) : [];
    return p ? v.reverse() : v;
  }
  function u(d, c, f) {
    const p = Math.abs(c - d) / f, h = ec(([, , b]) => b).right(s, p);
    if (h === s.length) return e.every(mu(d / Ol, c / Ol, f));
    if (h === 0) return ei.every(Math.max(mu(d, c, f), 1));
    const [v, m] = s[p / s[h - 1][2] < s[h][2] / p ? h - 1 : h];
    return v.every(m);
  }
  return [i, u];
}
const [G3, X3] = Cy(kn, Mc, Gi, wy, Sc, $c), [J3, Z3] = Cy($n, Tc, Yi, Oo, kc, Cc);
function Pl(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Il(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Ir(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Q3(e) {
  var t = e.dateTime, n = e.date, a = e.time, r = e.periods, o = e.days, s = e.shortDays, i = e.months, u = e.shortMonths, d = Rr(r), c = Fr(r), f = Rr(o), p = Fr(o), h = Rr(s), v = Fr(s), m = Rr(i), b = Fr(i), x = Rr(u), k = Fr(u), $ = {
    a: ye,
    A: pe,
    b: q,
    B: ae,
    c: null,
    d: Wp,
    e: Wp,
    f: wP,
    g: BP,
    G: PP,
    H: bP,
    I: _P,
    j: xP,
    L: $y,
    m: CP,
    M: $P,
    p: le,
    q: Le,
    Q: jp,
    s: Yp,
    S: kP,
    u: SP,
    U: TP,
    V: MP,
    w: AP,
    W: DP,
    x: null,
    X: null,
    y: EP,
    Y: OP,
    Z: IP,
    "%": Kp
  }, M = {
    a: Ye,
    A: Qe,
    b: et,
    B: Nt,
    c: null,
    d: Up,
    e: Up,
    f: NP,
    g: GP,
    G: JP,
    H: RP,
    I: FP,
    j: VP,
    L: Sy,
    m: LP,
    M: zP,
    p: Q,
    q: ie,
    Q: jp,
    s: Yp,
    S: qP,
    u: HP,
    U: WP,
    V: UP,
    w: KP,
    W: jP,
    x: null,
    X: null,
    y: YP,
    Y: XP,
    Z: ZP,
    "%": Kp
  }, S = {
    a: P,
    A: I,
    b: R,
    B: j,
    c: z,
    d: qp,
    e: qp,
    f: vP,
    g: zp,
    G: Lp,
    H: Hp,
    I: Hp,
    j: cP,
    L: hP,
    m: dP,
    M: fP,
    p: F,
    q: uP,
    Q: gP,
    s: yP,
    S: pP,
    u: rP,
    U: oP,
    V: sP,
    w: aP,
    W: iP,
    x: Y,
    X: te,
    y: zp,
    Y: Lp,
    Z: lP,
    "%": mP
  };
  $.x = D(n, $), $.X = D(a, $), $.c = D(t, $), M.x = D(n, M), M.X = D(a, M), M.c = D(t, M);
  function D(H, G) {
    return function(ne) {
      var U = [], Fe = -1, xe = 0, ot = H.length, fe, ze, tt;
      for (ne instanceof Date || (ne = /* @__PURE__ */ new Date(+ne)); ++Fe < ot; )
        H.charCodeAt(Fe) === 37 && (U.push(H.slice(xe, Fe)), (ze = Np[fe = H.charAt(++Fe)]) != null ? fe = H.charAt(++Fe) : ze = fe === "e" ? " " : "0", (tt = G[fe]) && (fe = tt(ne, ze)), U.push(fe), xe = Fe + 1);
      return U.push(H.slice(xe, Fe)), U.join("");
    };
  }
  function A(H, G) {
    return function(ne) {
      var U = Ir(1900, void 0, 1), Fe = N(U, H, ne += "", 0), xe, ot;
      if (Fe != ne.length) return null;
      if ("Q" in U) return new Date(U.Q);
      if ("s" in U) return new Date(U.s * 1e3 + ("L" in U ? U.L : 0));
      if (G && !("Z" in U) && (U.Z = 0), "p" in U && (U.H = U.H % 12 + U.p * 12), U.m === void 0 && (U.m = "q" in U ? U.q : 0), "V" in U) {
        if (U.V < 1 || U.V > 53) return null;
        "w" in U || (U.w = 1), "Z" in U ? (xe = Il(Ir(U.y, 0, 1)), ot = xe.getUTCDay(), xe = ot > 4 || ot === 0 ? ni.ceil(xe) : ni(xe), xe = ji.offset(xe, (U.V - 1) * 7), U.y = xe.getUTCFullYear(), U.m = xe.getUTCMonth(), U.d = xe.getUTCDate() + (U.w + 6) % 7) : (xe = Pl(Ir(U.y, 0, 1)), ot = xe.getDay(), xe = ot > 4 || ot === 0 ? ti.ceil(xe) : ti(xe), xe = Oo.offset(xe, (U.V - 1) * 7), U.y = xe.getFullYear(), U.m = xe.getMonth(), U.d = xe.getDate() + (U.w + 6) % 7);
      } else ("W" in U || "U" in U) && ("w" in U || (U.w = "u" in U ? U.u % 7 : "W" in U ? 1 : 0), ot = "Z" in U ? Il(Ir(U.y, 0, 1)).getUTCDay() : Pl(Ir(U.y, 0, 1)).getDay(), U.m = 0, U.d = "W" in U ? (U.w + 6) % 7 + U.W * 7 - (ot + 5) % 7 : U.w + U.U * 7 - (ot + 6) % 7);
      return "Z" in U ? (U.H += U.Z / 100 | 0, U.M += U.Z % 100, Il(U)) : Pl(U);
    };
  }
  function N(H, G, ne, U) {
    for (var Fe = 0, xe = G.length, ot = ne.length, fe, ze; Fe < xe; ) {
      if (U >= ot) return -1;
      if (fe = G.charCodeAt(Fe++), fe === 37) {
        if (fe = G.charAt(Fe++), ze = S[fe in Np ? G.charAt(Fe++) : fe], !ze || (U = ze(H, ne, U)) < 0) return -1;
      } else if (fe != ne.charCodeAt(U++))
        return -1;
    }
    return U;
  }
  function F(H, G, ne) {
    var U = d.exec(G.slice(ne));
    return U ? (H.p = c.get(U[0].toLowerCase()), ne + U[0].length) : -1;
  }
  function P(H, G, ne) {
    var U = h.exec(G.slice(ne));
    return U ? (H.w = v.get(U[0].toLowerCase()), ne + U[0].length) : -1;
  }
  function I(H, G, ne) {
    var U = f.exec(G.slice(ne));
    return U ? (H.w = p.get(U[0].toLowerCase()), ne + U[0].length) : -1;
  }
  function R(H, G, ne) {
    var U = x.exec(G.slice(ne));
    return U ? (H.m = k.get(U[0].toLowerCase()), ne + U[0].length) : -1;
  }
  function j(H, G, ne) {
    var U = m.exec(G.slice(ne));
    return U ? (H.m = b.get(U[0].toLowerCase()), ne + U[0].length) : -1;
  }
  function z(H, G, ne) {
    return N(H, t, G, ne);
  }
  function Y(H, G, ne) {
    return N(H, n, G, ne);
  }
  function te(H, G, ne) {
    return N(H, a, G, ne);
  }
  function ye(H) {
    return s[H.getDay()];
  }
  function pe(H) {
    return o[H.getDay()];
  }
  function q(H) {
    return u[H.getMonth()];
  }
  function ae(H) {
    return i[H.getMonth()];
  }
  function le(H) {
    return r[+(H.getHours() >= 12)];
  }
  function Le(H) {
    return 1 + ~~(H.getMonth() / 3);
  }
  function Ye(H) {
    return s[H.getUTCDay()];
  }
  function Qe(H) {
    return o[H.getUTCDay()];
  }
  function et(H) {
    return u[H.getUTCMonth()];
  }
  function Nt(H) {
    return i[H.getUTCMonth()];
  }
  function Q(H) {
    return r[+(H.getUTCHours() >= 12)];
  }
  function ie(H) {
    return 1 + ~~(H.getUTCMonth() / 3);
  }
  return {
    format: function(H) {
      var G = D(H += "", $);
      return G.toString = function() {
        return H;
      }, G;
    },
    parse: function(H) {
      var G = A(H += "", !1);
      return G.toString = function() {
        return H;
      }, G;
    },
    utcFormat: function(H) {
      var G = D(H += "", M);
      return G.toString = function() {
        return H;
      }, G;
    },
    utcParse: function(H) {
      var G = A(H += "", !0);
      return G.toString = function() {
        return H;
      }, G;
    }
  };
}
var Np = { "-": "", _: " ", 0: "0" }, Ze = /^\s*\d+/, eP = /^%/, tP = /[\\^$*+?|[\]().{}]/g;
function ke(e, t, n) {
  var a = e < 0 ? "-" : "", r = (a ? -e : e) + "", o = r.length;
  return a + (o < n ? new Array(n - o + 1).join(t) + r : r);
}
function nP(e) {
  return e.replace(tP, "\\$&");
}
function Rr(e) {
  return new RegExp("^(?:" + e.map(nP).join("|") + ")", "i");
}
function Fr(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function aP(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function rP(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function oP(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function sP(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function iP(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Lp(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function zp(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function lP(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function uP(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function dP(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function qp(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function cP(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Hp(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function fP(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function pP(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function hP(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function vP(e, t, n) {
  var a = Ze.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function mP(e, t, n) {
  var a = eP.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function gP(e, t, n) {
  var a = Ze.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function yP(e, t, n) {
  var a = Ze.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Wp(e, t) {
  return ke(e.getDate(), t, 2);
}
function bP(e, t) {
  return ke(e.getHours(), t, 2);
}
function _P(e, t) {
  return ke(e.getHours() % 12 || 12, t, 2);
}
function xP(e, t) {
  return ke(1 + Oo.count($n(e), e), t, 3);
}
function $y(e, t) {
  return ke(e.getMilliseconds(), t, 3);
}
function wP(e, t) {
  return $y(e, t) + "000";
}
function CP(e, t) {
  return ke(e.getMonth() + 1, t, 2);
}
function $P(e, t) {
  return ke(e.getMinutes(), t, 2);
}
function kP(e, t) {
  return ke(e.getSeconds(), t, 2);
}
function SP(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function TP(e, t) {
  return ke(Yi.count($n(e) - 1, e), t, 2);
}
function ky(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? dr(e) : dr.ceil(e);
}
function MP(e, t) {
  return e = ky(e), ke(dr.count($n(e), e) + ($n(e).getDay() === 4), t, 2);
}
function AP(e) {
  return e.getDay();
}
function DP(e, t) {
  return ke(ti.count($n(e) - 1, e), t, 2);
}
function EP(e, t) {
  return ke(e.getFullYear() % 100, t, 2);
}
function BP(e, t) {
  return e = ky(e), ke(e.getFullYear() % 100, t, 2);
}
function OP(e, t) {
  return ke(e.getFullYear() % 1e4, t, 4);
}
function PP(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? dr(e) : dr.ceil(e), ke(e.getFullYear() % 1e4, t, 4);
}
function IP(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ke(t / 60 | 0, "0", 2) + ke(t % 60, "0", 2);
}
function Up(e, t) {
  return ke(e.getUTCDate(), t, 2);
}
function RP(e, t) {
  return ke(e.getUTCHours(), t, 2);
}
function FP(e, t) {
  return ke(e.getUTCHours() % 12 || 12, t, 2);
}
function VP(e, t) {
  return ke(1 + ji.count(kn(e), e), t, 3);
}
function Sy(e, t) {
  return ke(e.getUTCMilliseconds(), t, 3);
}
function NP(e, t) {
  return Sy(e, t) + "000";
}
function LP(e, t) {
  return ke(e.getUTCMonth() + 1, t, 2);
}
function zP(e, t) {
  return ke(e.getUTCMinutes(), t, 2);
}
function qP(e, t) {
  return ke(e.getUTCSeconds(), t, 2);
}
function HP(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function WP(e, t) {
  return ke(Gi.count(kn(e) - 1, e), t, 2);
}
function Ty(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? cr(e) : cr.ceil(e);
}
function UP(e, t) {
  return e = Ty(e), ke(cr.count(kn(e), e) + (kn(e).getUTCDay() === 4), t, 2);
}
function KP(e) {
  return e.getUTCDay();
}
function jP(e, t) {
  return ke(ni.count(kn(e) - 1, e), t, 2);
}
function YP(e, t) {
  return ke(e.getUTCFullYear() % 100, t, 2);
}
function GP(e, t) {
  return e = Ty(e), ke(e.getUTCFullYear() % 100, t, 2);
}
function XP(e, t) {
  return ke(e.getUTCFullYear() % 1e4, t, 4);
}
function JP(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? cr(e) : cr.ceil(e), ke(e.getUTCFullYear() % 1e4, t, 4);
}
function ZP() {
  return "+0000";
}
function Kp() {
  return "%";
}
function jp(e) {
  return +e;
}
function Yp(e) {
  return Math.floor(+e / 1e3);
}
var Ia, My, Ay;
QP({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function QP(e) {
  return Ia = Q3(e), My = Ia.format, Ia.parse, Ay = Ia.utcFormat, Ia.utcParse, Ia;
}
function eI(e) {
  return new Date(e);
}
function tI(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ac(e, t, n, a, r, o, s, i, u, d) {
  var c = cy(), f = c.invert, p = c.domain, h = d(".%L"), v = d(":%S"), m = d("%I:%M"), b = d("%I %p"), x = d("%a %d"), k = d("%b %d"), $ = d("%B"), M = d("%Y");
  function S(D) {
    return (u(D) < D ? h : i(D) < D ? v : s(D) < D ? m : o(D) < D ? b : a(D) < D ? r(D) < D ? x : k : n(D) < D ? $ : M)(D);
  }
  return c.invert = function(D) {
    return new Date(f(D));
  }, c.domain = function(D) {
    return arguments.length ? p(Array.from(D, tI)) : p().map(eI);
  }, c.ticks = function(D) {
    var A = p();
    return e(A[0], A[A.length - 1], D ?? 10);
  }, c.tickFormat = function(D, A) {
    return A == null ? S : d(A);
  }, c.nice = function(D) {
    var A = p();
    return (!D || typeof D.range != "function") && (D = t(A[0], A[A.length - 1], D ?? 10)), D ? p(my(A, D)) : c;
  }, c.copy = function() {
    return Bo(c, Ac(e, t, n, a, r, o, s, i, u, d));
  }, c;
}
function nI() {
  return Ft.apply(Ac(J3, Z3, $n, Tc, Yi, Oo, kc, Cc, oa, My).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function aI() {
  return Ft.apply(Ac(G3, X3, kn, Mc, Gi, ji, Sc, $c, oa, Ay).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function rI() {
  var e = 0, t = 1, n, a, r, o, s = lt, i = !1, u;
  function d(f) {
    return f == null || isNaN(f = +f) ? u : s(r === 0 ? 0.5 : (f = (o(f) - n) * r, i ? Math.max(0, Math.min(1, f)) : f));
  }
  d.domain = function(f) {
    return arguments.length ? ([e, t] = f, n = o(e = +e), a = o(t = +t), r = n === a ? 0 : 1 / (a - n), d) : [e, t];
  }, d.clamp = function(f) {
    return arguments.length ? (i = !!f, d) : i;
  }, d.interpolator = function(f) {
    return arguments.length ? (s = f, d) : s;
  };
  function c(f) {
    return function(p) {
      var h, v;
      return arguments.length ? ([h, v] = p, s = f(h, v), d) : [s(0), s(1)];
    };
  }
  return d.range = c(Sr), d.rangeRound = c(hc), d.unknown = function(f) {
    return arguments.length ? (u = f, d) : u;
  }, function(f) {
    return o = f, n = f(e), a = f(t), r = n === a ? 0 : 1 / (a - n), d;
  };
}
function Dy(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Ey() {
  var e = Ma(rI()(lt));
  return e.copy = function() {
    return Dy(e, Ey());
  }, uy.apply(e, arguments);
}
function oI() {
  var e = 0, t = 0.5, n = 1, a = 1, r, o, s, i, u, d = lt, c, f = !1, p;
  function h(m) {
    return isNaN(m = +m) ? p : (m = 0.5 + ((m = +c(m)) - o) * (a * m < a * o ? i : u), d(f ? Math.max(0, Math.min(1, m)) : m));
  }
  h.domain = function(m) {
    return arguments.length ? ([e, t, n] = m, r = c(e = +e), o = c(t = +t), s = c(n = +n), i = r === o ? 0 : 0.5 / (o - r), u = o === s ? 0 : 0.5 / (s - o), a = o < r ? -1 : 1, h) : [e, t, n];
  }, h.clamp = function(m) {
    return arguments.length ? (f = !!m, h) : f;
  }, h.interpolator = function(m) {
    return arguments.length ? (d = m, h) : d;
  };
  function v(m) {
    return function(b) {
      var x, k, $;
      return arguments.length ? ([x, k, $] = b, d = uO(m, [x, k, $]), h) : [d(0), d(0.5), d(1)];
    };
  }
  return h.range = v(Sr), h.rangeRound = v(hc), h.unknown = function(m) {
    return arguments.length ? (p = m, h) : p;
  }, function(m) {
    return c = m, r = m(e), o = m(t), s = m(n), i = r === o ? 0 : 0.5 / (o - r), u = o === s ? 0 : 0.5 / (s - o), a = o < r ? -1 : 1, h;
  };
}
function By() {
  var e = Ma(oI()(lt));
  return e.copy = function() {
    return Dy(e, By());
  }, uy.apply(e, arguments);
}
const Gp = {
  scaleLinear: hy,
  scalePow: xc,
  scaleSqrt: L3,
  scaleLog: gy,
  scaleSymlog: yy,
  scaleIdentity: vy,
  scaleTime: nI,
  scaleUtc: aI,
  scaleSequential: Ey,
  scaleDiverging: By,
  scaleQuantize: _y,
  scaleQuantile: by,
  scaleThreshold: xy,
  scaleOrdinal: gc,
  scaleBand: yc,
  scalePoint: p3
};
var Ve;
(function(e) {
  e.X = "x", e.Y = "y";
})(Ve || (Ve = {}));
var da;
(function(e) {
  e.West = "west", e.East = "east", e.North = "north", e.South = "south";
})(da || (da = {}));
const sI = Object.assign(Object.assign({}, Dg), { components: [], tooltip: void 0, crosshair: void 0, annotations: void 0, xAxis: void 0, yAxis: void 0, autoMargin: !0, xScale: void 0, xDomain: void 0, xDomainMinConstraint: void 0, xDomainMaxConstraint: void 0, xRange: void 0, yScale: void 0, yDomain: void 0, yDomainMinConstraint: void 0, yDomainMaxConstraint: void 0, yRange: void 0, yDirection: da.North, preventEmptyDomain: null, scaleByDomain: !1, clipPathExtend: 2 });
class iI extends oo {
  constructor(t, n, a) {
    var r, o;
    super(t), this._defaultConfig = sI, this.datamodel = new mc(), this.config = this._defaultConfig, this._clipPathId = Wg(), this._axisMargin = { top: 0, bottom: 0, left: 0, right: 0 }, this._firstRender = !0, this._clipPath = this.svg.append("clipPath").attr("id", this._clipPathId), this._clipPath.append("rect");
    const s = "saturate", i = window.location.href.replace(window.location.hash, "");
    this.svg.attr("class", Re`
      --highlight-filter-id: url(${i}#${s}); // defining a css variable
    `), this._svgDefs.append("filter").attr("id", s).attr("filterUnits", "objectBoundingBox").html('<feColorMatrix type="saturate" in="SourceGraphic" values="1.35"/>'), n && this.updateContainer(n, !0), a && this.setData(a, !0), (this.config.xAxis || this.config.yAxis || !((r = this.components) === null || r === void 0) && r.some((u) => u.datamodel.data)) && this.render(), (o = document.fonts) === null || o === void 0 || o.ready.then(() => {
      this._firstRender || this._renderAxes(0);
    });
  }
  get components() {
    return this.config.components;
  }
  // Overriding ContainerCore default get width method to work with axis auto margin
  get width() {
    const t = this._getMargin();
    return Va(this.containerWidth - t.left - t.right, 0, Number.POSITIVE_INFINITY);
  }
  // Overriding ContainerCore default get height method to work with axis auto margin
  get height() {
    const t = this._getMargin();
    return Va(this.containerHeight - t.top - t.bottom, 0, Number.POSITIVE_INFINITY);
  }
  setData(t, n) {
    var a, r, o, s, i;
    const { components: u, config: d } = this;
    if (!t)
      return;
    this.datamodel.data = t, u.forEach((f) => {
      f.setData(t);
    }), (a = d.crosshair) === null || a === void 0 || a.setData(t), (r = d.xAxis) === null || r === void 0 || r.setData(t), (o = d.yAxis) === null || o === void 0 || o.setData(t), !ha(this.datamodel.data, t) && ((s = d.tooltip) === null || s === void 0 || s.hide(), (i = d.crosshair) === null || i === void 0 || i.hide()), n || this.render();
  }
  updateContainer(t, n) {
    super.updateContainer(t), this._removeAllChildren(), this.setData(this.datamodel.data, !0), t.xAxis && (this.config.xAxis.config.type = $e.X, this.element.appendChild(t.xAxis.element)), t.yAxis && (this.config.yAxis.config.type = $e.Y, this.element.appendChild(t.yAxis.element));
    for (const s of this.components)
      this.element.appendChild(s.element);
    const a = t.tooltip;
    a && (a.hasContainer() || a.setContainer(this._container), a.setComponents(this.components));
    const r = t.crosshair;
    r && (r.setContainer(this.svg), r.tooltip = a, this.element.appendChild(r.element));
    const o = t.annotations;
    o && this.element.appendChild(o.element), this.element.appendChild(this._clipPath.node()), this.element.appendChild(this._svgDefs.node()), this.element.appendChild(this._svgDefsExternal.node()), n || this.render();
  }
  updateComponents(t, n) {
    const { config: a } = this;
    this.components.forEach((r, o) => {
      t[o] && r.setConfig(t[o]);
    }), this._updateScales(...this.components, a.xAxis, a.yAxis, a.crosshair), n || this.render();
  }
  update(t, n, a) {
    a && (this.datamodel.data = a), t && this.updateContainer(t, !0), n && this.updateComponents(n, !0), this.render();
  }
  _preRender() {
    const { config: t } = this;
    super._preRender(), t.autoMargin && this._setAutoMargin();
    const n = Er([...this.components, t.xAxis, t.yAxis, t.crosshair, t.annotations]), a = this._getMargin();
    for (const r of n)
      r.setSize(this.width, this.height, this.containerWidth, this.containerHeight), r.setContainerMargin(a);
    this._updateScales(...this.components, t.xAxis, t.yAxis, t.crosshair);
  }
  _render(t) {
    var n, a, r, o, s;
    const { config: i } = this;
    super._render();
    const u = this._getMargin();
    for (const f of this.components)
      f.g.attr("transform", `translate(${u.left},${u.top})`).style("clip-path", f.clippable ? `url(#${this._clipPathId})` : null).style("-webkit-clip-path", f.clippable ? `url(#${this._clipPathId})` : null), f.render(t);
    this._renderAxes(this._firstRender ? 0 : t);
    const d = i.clipPathExtend;
    this._clipPath.select("rect").attr("x", -d).attr("y", -d).attr("width", this.width + 2 * d).attr("height", this.height + 2 * d), (n = i.tooltip) === null || n === void 0 || n.update();
    const c = i.crosshair;
    if (c) {
      const f = this.components.filter((m) => !m.stacked).map((m) => m.config.y), p = this.components.filter((m) => m.stacked).map((m) => m.config.y), h = (a = this.components.find((m) => m.config.baseline)) === null || a === void 0 ? void 0 : a.config, v = h == null ? void 0 : h.baseline;
      c.accessors = {
        x: (r = this.components[0]) === null || r === void 0 ? void 0 : r.config.x,
        y: gu(f),
        yStacked: gu(p),
        baseline: v
      }, c.g.attr("transform", `translate(${u.left},${u.top})`).style("clip-path", `url(#${this._clipPathId})`).style("-webkit-clip-path", `url(#${this._clipPathId})`), c.render();
    }
    (o = i.annotations) === null || o === void 0 || o.g.attr("transform", `translate(${u.left},${u.top})`), (s = i.annotations) === null || s === void 0 || s.render(), this._firstRender = !1;
  }
  _updateScales(...t) {
    const n = Er(t || this.components);
    this._setScales(...n), this._updateScalesDomain(...n), this._updateScalesRange(...n);
  }
  _setScales(...t) {
    const { config: n } = this;
    t && (n.xScale && t.forEach((a) => a.setScale(Ve.X, n.xScale)), n.yScale && t.forEach((a) => a.setScale(Ve.Y, n.yScale)));
  }
  _updateScalesDomain(...t) {
    const { config: n } = this;
    if (!t)
      return;
    const a = t.filter((r) => !r.config.excludeFromDomainCalculation);
    Object.values(Ve).forEach((r) => {
      var o, s, i, u, d, c, f, p;
      const [h, v] = UD(eE(a.map((S) => S.getDataExtent(r, n.scaleByDomain)))), m = r === Ve.Y ? n.yDomain : n.xDomain, b = r === Ve.Y ? n.yDomainMinConstraint : n.xDomainMinConstraint, x = r === Ve.Y ? n.yDomainMaxConstraint : n.xDomainMaxConstraint, k = (s = (o = m == null ? void 0 : m[0]) !== null && o !== void 0 ? o : h) !== null && s !== void 0 ? s : 0, $ = (u = (i = m == null ? void 0 : m[1]) !== null && i !== void 0 ? i : v) !== null && u !== void 0 ? u : 1, M = [
        Va(k, (d = b == null ? void 0 : b[0]) !== null && d !== void 0 ? d : Number.NEGATIVE_INFINITY, (c = b == null ? void 0 : b[1]) !== null && c !== void 0 ? c : Number.POSITIVE_INFINITY),
        Va($, (f = x == null ? void 0 : x[0]) !== null && f !== void 0 ? f : Number.NEGATIVE_INFINITY, (p = x == null ? void 0 : x[1]) !== null && p !== void 0 ? p : Number.POSITIVE_INFINITY)
      ];
      if (M[0] === M[1]) {
        const S = a.some((D) => {
          var A;
          return ((A = D.datamodel.data) === null || A === void 0 ? void 0 : A.length) > 0;
        });
        (n.preventEmptyDomain || n.preventEmptyDomain === null && (!S || r === Ve.Y)) && (M[1] = M[0] + 1);
      }
      t.forEach((S) => S.setScaleDomain(r, M));
    });
  }
  _updateScalesRange(...t) {
    var n, a, r, o, s, i;
    const { config: u } = this;
    if (!t)
      return;
    const d = u.yDirection === da.South, c = [(n = u.padding.left) !== null && n !== void 0 ? n : 0, this.width - ((a = u.padding.right) !== null && a !== void 0 ? a : 0)], f = [this.height - ((r = u.padding.bottom) !== null && r !== void 0 ? r : 0), (o = u.padding.top) !== null && o !== void 0 ? o : 0];
    d && f.reverse();
    for (const h of t)
      h.setSize(this.width, this.height, this.containerWidth, this.containerHeight), h.setScaleRange(Ve.X, (s = u.xRange) !== null && s !== void 0 ? s : c), h.setScaleRange(Ve.Y, (i = u.yRange) !== null && i !== void 0 ? i : f);
    const p = t.map((h) => h.bleed).reduce((h, v) => {
      for (const m of Object.keys(h)) {
        const b = m;
        h[b] < v[b] && (h[b] = v[b]);
      }
      return h;
    }, { top: 0, bottom: 0, left: 0, right: 0 });
    for (const h of t)
      h.setScaleRange(Ve.X, [c[0] + p.left, c[1] - p.right]), h.setScaleRange(
        Ve.Y,
        d ? [f[0] + p.top, f[1] - p.bottom] : [f[0] - p.bottom, f[1] + p.top]
        // if Y axis is directed upwards
      );
  }
  _renderAxes(t) {
    const { config: { xAxis: n, yAxis: a } } = this, r = this._getMargin();
    Er([n, a]).forEach((s) => {
      const i = s.getOffset(r);
      s.g.attr("transform", `translate(${i.left},${i.top})`), s.render(t);
    });
  }
  _setAutoMargin() {
    const { config: { xAxis: t, yAxis: n } } = this, a = Er([...this.components, t, n]);
    this._setScales(...a), this._updateScalesDomain(...a);
    const r = this._firstRender ? 2 : 1;
    for (let o = 0; o < r; o += 1) {
      const s = { top: 0, bottom: 0, left: 0, right: 0 };
      this._updateScalesRange(...a), Er([t, n]).forEach((u) => {
        u.preRender();
        const d = u.getRequiredMargin();
        s.top < d.top && (s.top = d.top), s.bottom < d.bottom && (s.bottom = d.bottom), s.left < d.left && (s.left = d.left), s.right < d.right && (s.right = d.right);
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
    const { components: t, config: { tooltip: n, crosshair: a, annotations: r, xAxis: o, yAxis: s } } = this;
    super.destroy();
    for (const i of t)
      i == null || i.destroy();
    n == null || n.destroy(), a == null || a.destroy(), r == null || r.destroy(), o == null || o.destroy(), s == null || s.destroy();
  }
}
const Oy = {
  duration: 600,
  events: {},
  attributes: {}
};
class lI {
  constructor(t = jr.SVG) {
    var n, a;
    this.type = jr.SVG, this.datamodel = new mc(), this.sizing = or.Fit, this.events = {}, this._defaultConfig = Oy, this._width = 400, this._height = 200, this._containerWidth = void 0, this._containerHeight = void 0, this._containerMargin = { top: 0, bottom: 0, left: 0, right: 0 }, this._setUpComponentEventsThrottled = Kf(this._setUpComponentEvents, 500), this._setCustomAttributesThrottled = Kf(this._setCustomAttributes, 500), t === jr.SVG ? this.element = document.createElementNS("http://www.w3.org/2000/svg", "g") : this.element = document.createElement("div"), this.uid = Wg(), this.g = Et(this.element);
    const r = (a = (n = this.constructor) === null || n === void 0 ? void 0 : n.selectors) === null || a === void 0 ? void 0 : a.root;
    r && this.g.attr("class", r);
  }
  /** Set the container margin. Called automatically by containers. */
  setContainerMargin(t) {
    this._containerMargin = t;
  }
  setConfig(t) {
    this.prevConfig = this.config, this.config = sr(this._defaultConfig, t);
  }
  setData(t) {
    this.datamodel.data = t;
  }
  setSize(t, n, a, r) {
    isFinite(t) && (this._width = t), isFinite(n) && (this._height = n), isFinite(a) && (this._containerWidth = a), isFinite(r) && (this._containerHeight = r);
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
      Object.keys(t[a]).forEach((r) => {
        const o = this.g.selectAll(`.${a}`);
        o.on(r + n, (s, i) => {
          const u = o.nodes(), d = u.indexOf(s.currentTarget), c = t[a][r];
          return c == null ? void 0 : c(i, s, d, u);
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
class uI extends mc {
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
const Dc = Object.assign(Object.assign({}, Oy), { x: void 0, y: void 0, id: (e, t) => {
  var n;
  return (n = e.id) !== null && n !== void 0 ? n : `${t}`;
}, color: (e) => e.color, xScale: void 0, yScale: void 0, excludeFromDomainCalculation: !1 });
class Py extends lI {
  constructor() {
    super(...arguments), this.datamodel = new uI(), this.clippable = !0, this.stacked = !1, this._defaultConfig = Dc, this._xScale = Gp.scaleLinear(), this._yScale = Gp.scaleLinear();
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
    var a, r;
    t === Ve.X && ((a = this._xScale) === null || a === void 0 || a.domain(n)), t === Ve.Y && ((r = this._yScale) === null || r === void 0 || r.domain(n));
  }
  setScaleRange(t, n) {
    var a, r;
    t === Ve.X && ((a = this._xScale) === null || a === void 0 || a.range(n)), t === Ve.Y && ((r = this._yScale) === null || r === void 0 || r.range(n));
  }
  setScale(t, n) {
    n && t === Ve.X && (this._xScale = n), n && t === Ve.Y && (this._yScale = n);
  }
  getDataExtent(t, n) {
    const { config: a, datamodel: r } = this;
    switch (t) {
      case Ve.X:
        return this.getXDataExtent();
      case Ve.Y:
        return this.getYDataExtent(n);
      default:
        return $l(r.data, a[t]);
    }
  }
  getXDataExtent() {
    const { config: t, datamodel: n } = this;
    return $l(n.data, t.x);
  }
  /** Some components override this method to provide custom data extent calculation */
  getYDataExtent(t) {
    const { config: n, datamodel: a } = this, r = this.xScale.domain(), o = t ? iE(a.data, r, n.x, !0) : a.data, s = Ni(n.y) ? n.y : [n.y];
    return $l(o, ...s);
  }
}
var we;
(function(e) {
  e.Top = "top", e.Bottom = "bottom", e.Left = "left", e.Right = "right", e.Center = "center", e.Auto = "auto";
})(we || (we = {}));
var Xp;
(function(e) {
  e.Absolute = "absolute", e.Fixed = "fixed";
})(Xp || (Xp = {}));
var Jp;
(function(e) {
  e.Inside = "inside", e.Outside = "outside", e.Center = "center";
})(Jp || (Jp = {}));
var Zp;
(function(e) {
  e.Horizontal = "horizontal", e.Vertical = "vertical";
})(Zp || (Zp = {}));
function Ut(e) {
  return function() {
    return e;
  };
}
const Iy = Math.cos, ai = Math.sin, Vt = Math.sqrt, Qp = 1e-12, ri = Math.PI, Xi = 2 * ri, Ou = Math.PI, Pu = 2 * Ou, Qn = 1e-6, dI = Pu - Qn;
function Ry(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function cI(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Ry;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let r = 1, o = a.length; r < o; ++r)
      this._ += Math.round(arguments[r] * n) / n + a[r];
  };
}
class fI {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Ry : cI(t);
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
  quadraticCurveTo(t, n, a, r) {
    this._append`Q${+t},${+n},${this._x1 = +a},${this._y1 = +r}`;
  }
  bezierCurveTo(t, n, a, r, o, s) {
    this._append`C${+t},${+n},${+a},${+r},${this._x1 = +o},${this._y1 = +s}`;
  }
  arcTo(t, n, a, r, o) {
    if (t = +t, n = +n, a = +a, r = +r, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let s = this._x1, i = this._y1, u = a - t, d = r - n, c = s - t, f = i - n, p = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (p > Qn) if (!(Math.abs(f * u - d * c) > Qn) || !o)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let h = a - s, v = r - i, m = u * u + d * d, b = h * h + v * v, x = Math.sqrt(m), k = Math.sqrt(p), $ = o * Math.tan((Ou - Math.acos((m + p - b) / (2 * x * k))) / 2), M = $ / k, S = $ / x;
      Math.abs(M - 1) > Qn && this._append`L${t + M * c},${n + M * f}`, this._append`A${o},${o},0,0,${+(f * h > c * v)},${this._x1 = t + S * u},${this._y1 = n + S * d}`;
    }
  }
  arc(t, n, a, r, o, s) {
    if (t = +t, n = +n, a = +a, s = !!s, a < 0) throw new Error(`negative radius: ${a}`);
    let i = a * Math.cos(r), u = a * Math.sin(r), d = t + i, c = n + u, f = 1 ^ s, p = s ? r - o : o - r;
    this._x1 === null ? this._append`M${d},${c}` : (Math.abs(this._x1 - d) > Qn || Math.abs(this._y1 - c) > Qn) && this._append`L${d},${c}`, a && (p < 0 && (p = p % Pu + Pu), p > dI ? this._append`A${a},${a},0,1,${f},${t - i},${n - u}A${a},${a},0,1,${f},${this._x1 = d},${this._y1 = c}` : p > Qn && this._append`A${a},${a},0,${+(p >= Ou)},${f},${this._x1 = t + a * Math.cos(o)},${this._y1 = n + a * Math.sin(o)}`);
  }
  rect(t, n, a, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+r}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function Fy(e) {
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
  }, () => new fI(t);
}
function pI(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Vy(e) {
  this._context = e;
}
Vy.prototype = {
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
function Ny(e) {
  return new Vy(e);
}
function hI(e) {
  return e[0];
}
function vI(e) {
  return e[1];
}
function mI(e, t) {
  var n = Ut(!0), a = null, r = Ny, o = null, s = Fy(i);
  e = typeof e == "function" ? e : e === void 0 ? hI : Ut(e), t = typeof t == "function" ? t : t === void 0 ? vI : Ut(t);
  function i(u) {
    var d, c = (u = pI(u)).length, f, p = !1, h;
    for (a == null && (o = r(h = s())), d = 0; d <= c; ++d)
      !(d < c && n(f = u[d], d, u)) === p && ((p = !p) ? o.lineStart() : o.lineEnd()), p && o.point(+e(f, d, u), +t(f, d, u));
    if (h) return o = null, h + "" || null;
  }
  return i.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : Ut(+u), i) : e;
  }, i.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : Ut(+u), i) : t;
  }, i.defined = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : Ut(!!u), i) : n;
  }, i.curve = function(u) {
    return arguments.length ? (r = u, a != null && (o = r(a)), i) : r;
  }, i.context = function(u) {
    return arguments.length ? (u == null ? a = o = null : o = r(a = u), i) : a;
  }, i;
}
const Ly = {
  draw(e, t) {
    const n = Vt(t / ri);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, Xi);
  }
}, gI = {
  draw(e, t) {
    const n = Vt(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, zy = Vt(1 / 3), yI = zy * 2, bI = {
  draw(e, t) {
    const n = Vt(t / yI), a = n * zy;
    e.moveTo(0, -n), e.lineTo(a, 0), e.lineTo(0, n), e.lineTo(-a, 0), e.closePath();
  }
}, _I = {
  draw(e, t) {
    const n = Vt(t), a = -n / 2;
    e.rect(a, a, n, n);
  }
}, xI = 0.8908130915292852, qy = ai(ri / 10) / ai(7 * ri / 10), wI = ai(Xi / 10) * qy, CI = -Iy(Xi / 10) * qy, $I = {
  draw(e, t) {
    const n = Vt(t * xI), a = wI * n, r = CI * n;
    e.moveTo(0, -n), e.lineTo(a, r);
    for (let o = 1; o < 5; ++o) {
      const s = Xi * o / 5, i = Iy(s), u = ai(s);
      e.lineTo(u * n, -i * n), e.lineTo(i * a - u * r, u * a + i * r);
    }
    e.closePath();
  }
}, Rl = Vt(3), kI = {
  draw(e, t) {
    const n = -Vt(t / (Rl * 3));
    e.moveTo(0, n * 2), e.lineTo(-Rl * n, -n), e.lineTo(Rl * n, -n), e.closePath();
  }
}, yt = -0.5, bt = Vt(3) / 2, Iu = 1 / Vt(12), SI = (Iu / 2 + 1) * 3, TI = {
  draw(e, t) {
    const n = Vt(t / SI), a = n / 2, r = n * Iu, o = a, s = n * Iu + n, i = -o, u = s;
    e.moveTo(a, r), e.lineTo(o, s), e.lineTo(i, u), e.lineTo(yt * a - bt * r, bt * a + yt * r), e.lineTo(yt * o - bt * s, bt * o + yt * s), e.lineTo(yt * i - bt * u, bt * i + yt * u), e.lineTo(yt * a + bt * r, yt * r - bt * a), e.lineTo(yt * o + bt * s, yt * s - bt * o), e.lineTo(yt * i + bt * u, yt * u - bt * i), e.closePath();
  }
};
function MI(e, t) {
  let n = null, a = Fy(r);
  e = typeof e == "function" ? e : Ut(e || Ly), t = typeof t == "function" ? t : Ut(t === void 0 ? 64 : +t);
  function r() {
    let o;
    if (n || (n = o = a()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), o) return n = null, o + "" || null;
  }
  return r.type = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Ut(o), r) : e;
  }, r.size = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Ut(+o), r) : t;
  }, r.context = function(o) {
    return arguments.length ? (n = o ?? null, r) : n;
  }, r;
}
function Yn() {
}
function oi(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function Ji(e) {
  this._context = e;
}
Ji.prototype = {
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
        oi(this, this._x1, this._y1);
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
        oi(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function AI(e) {
  return new Ji(e);
}
function Hy(e) {
  this._context = e;
}
Hy.prototype = {
  areaStart: Yn,
  areaEnd: Yn,
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
        oi(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function DI(e) {
  return new Hy(e);
}
function Wy(e) {
  this._context = e;
}
Wy.prototype = {
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
        oi(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function EI(e) {
  return new Wy(e);
}
function Uy(e, t) {
  this._basis = new Ji(e), this._beta = t;
}
Uy.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length - 1;
    if (n > 0)
      for (var a = e[0], r = t[0], o = e[n] - a, s = t[n] - r, i = -1, u; ++i <= n; )
        u = i / n, this._basis.point(
          this._beta * e[i] + (1 - this._beta) * (a + u * o),
          this._beta * t[i] + (1 - this._beta) * (r + u * s)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const BI = function e(t) {
  function n(a) {
    return t === 1 ? new Ji(a) : new Uy(a, t);
  }
  return n.beta = function(a) {
    return e(+a);
  }, n;
}(0.85);
function si(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function Ec(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Ec.prototype = {
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
        si(this, this._x1, this._y1);
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
        si(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const OI = function e(t) {
  function n(a) {
    return new Ec(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Bc(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Bc.prototype = {
  areaStart: Yn,
  areaEnd: Yn,
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
        si(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const PI = function e(t) {
  function n(a) {
    return new Bc(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Oc(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Oc.prototype = {
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
        si(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const II = function e(t) {
  function n(a) {
    return new Oc(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Pc(e, t, n) {
  var a = e._x1, r = e._y1, o = e._x2, s = e._y2;
  if (e._l01_a > Qp) {
    var i = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, u = 3 * e._l01_a * (e._l01_a + e._l12_a);
    a = (a * i - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / u, r = (r * i - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / u;
  }
  if (e._l23_a > Qp) {
    var d = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, c = 3 * e._l23_a * (e._l23_a + e._l12_a);
    o = (o * d + e._x1 * e._l23_2a - t * e._l12_2a) / c, s = (s * d + e._y1 * e._l23_2a - n * e._l12_2a) / c;
  }
  e._context.bezierCurveTo(a, r, o, s, e._x2, e._y2);
}
function Ky(e, t) {
  this._context = e, this._alpha = t;
}
Ky.prototype = {
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
        Pc(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const RI = function e(t) {
  function n(a) {
    return t ? new Ky(a, t) : new Ec(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function jy(e, t) {
  this._context = e, this._alpha = t;
}
jy.prototype = {
  areaStart: Yn,
  areaEnd: Yn,
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
        Pc(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const FI = function e(t) {
  function n(a) {
    return t ? new jy(a, t) : new Bc(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Yy(e, t) {
  this._context = e, this._alpha = t;
}
Yy.prototype = {
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
        Pc(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const VI = function e(t) {
  function n(a) {
    return t ? new Yy(a, t) : new Oc(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Gy(e) {
  this._context = e;
}
Gy.prototype = {
  areaStart: Yn,
  areaEnd: Yn,
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
function NI(e) {
  return new Gy(e);
}
function eh(e) {
  return e < 0 ? -1 : 1;
}
function th(e, t, n) {
  var a = e._x1 - e._x0, r = t - e._x1, o = (e._y1 - e._y0) / (a || r < 0 && -0), s = (n - e._y1) / (r || a < 0 && -0), i = (o * r + s * a) / (a + r);
  return (eh(o) + eh(s)) * Math.min(Math.abs(o), Math.abs(s), 0.5 * Math.abs(i)) || 0;
}
function nh(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Fl(e, t, n) {
  var a = e._x0, r = e._y0, o = e._x1, s = e._y1, i = (o - a) / 3;
  e._context.bezierCurveTo(a + i, r + i * t, o - i, s - i * n, o, s);
}
function ii(e) {
  this._context = e;
}
ii.prototype = {
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
        Fl(this, this._t0, nh(this, this._t0));
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
          this._point = 3, Fl(this, nh(this, n = th(this, e, t)), n);
          break;
        default:
          Fl(this, this._t0, n = th(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function Xy(e) {
  this._context = new Jy(e);
}
(Xy.prototype = Object.create(ii.prototype)).point = function(e, t) {
  ii.prototype.point.call(this, t, e);
};
function Jy(e) {
  this._context = e;
}
Jy.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, n, a, r, o) {
    this._context.bezierCurveTo(t, e, a, n, o, r);
  }
};
function LI(e) {
  return new ii(e);
}
function zI(e) {
  return new Xy(e);
}
function Zy(e) {
  this._context = e;
}
Zy.prototype = {
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
        for (var a = ah(e), r = ah(t), o = 0, s = 1; s < n; ++o, ++s)
          this._context.bezierCurveTo(a[0][o], r[0][o], a[1][o], r[1][o], e[s], t[s]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function ah(e) {
  var t, n = e.length - 1, a, r = new Array(n), o = new Array(n), s = new Array(n);
  for (r[0] = 0, o[0] = 2, s[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) r[t] = 1, o[t] = 4, s[t] = 4 * e[t] + 2 * e[t + 1];
  for (r[n - 1] = 2, o[n - 1] = 7, s[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) a = r[t] / o[t - 1], o[t] -= a, s[t] -= a * s[t - 1];
  for (r[n - 1] = s[n - 1] / o[n - 1], t = n - 2; t >= 0; --t) r[t] = (s[t] - r[t + 1]) / o[t];
  for (o[n - 1] = (e[n] + r[n - 1]) / 2, t = 0; t < n - 1; ++t) o[t] = 2 * e[t + 1] - r[t + 1];
  return [r, o];
}
function qI(e) {
  return new Zy(e);
}
function Zi(e, t) {
  this._context = e, this._t = t;
}
Zi.prototype = {
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
function HI(e) {
  return new Zi(e, 0.5);
}
function WI(e) {
  return new Zi(e, 0);
}
function UI(e) {
  return new Zi(e, 1);
}
function rh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function KI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rh(Object(n), !0).forEach(function(a) {
      jI(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rh(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Jr(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jr = function(t) {
    return typeof t;
  } : Jr = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jr(e);
}
function jI(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function li() {
  return li = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, li.apply(this, arguments);
}
function YI(e, t) {
  if (e) {
    if (typeof e == "string") return oh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return oh(e, t);
  }
}
function oh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function Qy(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = YI(e)) || t) {
      n && (e = n);
      var a = 0, r = function() {
      };
      return {
        s: r,
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
        f: r
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, s = !1, i;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var u = n.next();
      return o = u.done, u;
    },
    e: function(u) {
      s = !0, i = u;
    },
    f: function() {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (s) throw i;
      }
    }
  };
}
function GI(e, t) {
  var n = [], a = [];
  function r(o, s) {
    if (o.length === 1)
      n.push(o[0]), a.push(o[0]);
    else {
      for (var i = Array(o.length - 1), u = 0; u < i.length; u++)
        u === 0 && n.push(o[0]), u === i.length - 1 && a.push(o[u + 1]), i[u] = [(1 - s) * o[u][0] + s * o[u + 1][0], (1 - s) * o[u][1] + s * o[u + 1][1]];
      r(i, s);
    }
  }
  return e.length && r(e, t), {
    left: n,
    right: a.reverse()
  };
}
function XI(e) {
  var t = {};
  return e.length === 4 && (t.x2 = e[2][0], t.y2 = e[2][1]), e.length >= 3 && (t.x1 = e[1][0], t.y1 = e[1][1]), t.x = e[e.length - 1][0], t.y = e[e.length - 1][1], e.length === 4 ? t.type = "C" : e.length === 3 ? t.type = "Q" : t.type = "L", t;
}
function JI(e, t) {
  t = t || 2;
  for (var n = [], a = e, r = 1 / t, o = 0; o < t - 1; o++) {
    var s = r / (1 - r * o), i = GI(a, s);
    n.push(i.left), a = i.right;
  }
  return n.push(a), n;
}
function ZI(e, t, n) {
  var a = [[e.x, e.y]];
  return t.x1 != null && a.push([t.x1, t.y1]), t.x2 != null && a.push([t.x2, t.y2]), a.push([t.x, t.y]), JI(a, n).map(XI);
}
var QI = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g, Ya = {
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
Object.keys(Ya).forEach(function(e) {
  Ya[e.toLowerCase()] = Ya[e];
});
function Ru(e, t) {
  for (var n = Array(e), a = 0; a < e; a++)
    n[a] = t;
  return n;
}
function eR(e) {
  return "".concat(e.type).concat(Ya[e.type].map(function(t) {
    return e[t];
  }).join(","));
}
function tR(e, t) {
  var n = {
    x1: "x",
    y1: "y",
    x2: "x",
    y2: "y"
  }, a = ["xAxisRotation", "largeArcFlag", "sweepFlag"];
  if (e.type !== t.type && t.type.toUpperCase() !== "M") {
    var r = {};
    Object.keys(t).forEach(function(o) {
      var s = t[o], i = e[o];
      i === void 0 && (a.includes(o) ? i = s : (i === void 0 && n[o] && (i = e[n[o]]), i === void 0 && (i = 0))), r[o] = i;
    }), r.type = t.type, e = r;
  }
  return e;
}
function nR(e, t, n) {
  var a = [];
  if (t.type === "L" || t.type === "Q" || t.type === "C")
    a = a.concat(ZI(e, t, n));
  else {
    var r = li({}, e);
    r.type === "M" && (r.type = "L"), a = a.concat(Ru(n - 1).map(function() {
      return r;
    })), a.push(t);
  }
  return a;
}
function sh(e, t, n) {
  var a = e.length - 1, r = t.length - 1, o = a / r, s = Ru(r).reduce(function(u, d, c) {
    var f = Math.floor(o * c);
    if (n && f < e.length - 1 && n(e[f], e[f + 1])) {
      var p = o * c % 1 < 0.5;
      u[f] && (p ? f > 0 ? f -= 1 : f < e.length - 1 && (f += 1) : f < e.length - 1 ? f += 1 : f > 0 && (f -= 1));
    }
    return u[f] = (u[f] || 0) + 1, u;
  }, []), i = s.reduce(function(u, d, c) {
    if (c === e.length - 1) {
      var f = Ru(d, li({}, e[e.length - 1]));
      return f[0].type === "M" && f.forEach(function(p) {
        p.type = "L";
      }), u.concat(f);
    }
    return u.concat(nR(e[c], e[c + 1], d));
  }, []);
  return i.unshift(e[0]), i;
}
function ih(e) {
  for (var t = (e || "").match(QI) || [], n = [], a, r, o = 0; o < t.length; ++o)
    if (a = Ya[t[o]], a) {
      r = {
        type: t[o]
      };
      for (var s = 0; s < a.length; ++s)
        r[a[s]] = +t[o + s + 1];
      o += a.length, n.push(r);
    }
  return n;
}
function aR(e, t, n) {
  var a = e == null ? [] : e.slice(), r = t == null ? [] : t.slice(), o = Jr(n) === "object" ? n : {
    excludeSegment: n,
    snapEndsToInput: !0
  }, s = o.excludeSegment, i = o.snapEndsToInput;
  if (!a.length && !r.length)
    return function() {
      return [];
    };
  var u = (a.length === 0 || a[a.length - 1].type === "Z") && (r.length === 0 || r[r.length - 1].type === "Z");
  a.length > 0 && a[a.length - 1].type === "Z" && a.pop(), r.length > 0 && r[r.length - 1].type === "Z" && r.pop(), a.length ? r.length || r.push(a[0]) : a.push(r[0]);
  var d = Math.abs(r.length - a.length);
  d !== 0 && (r.length > a.length ? a = sh(a, r, s) : r.length < a.length && (r = sh(r, a, s))), a = a.map(function(f, p) {
    return tR(f, r[p]);
  });
  var c = a.map(function(f) {
    return KI({}, f);
  });
  return u && (c.push({
    type: "Z"
  }), a.push({
    type: "Z"
  })), function(p) {
    if (p === 1 && i)
      return t ?? [];
    if (p === 0)
      return a;
    for (var h = 0; h < c.length; ++h) {
      var v = a[h], m = r[h], b = c[h], x = Qy(Ya[b.type]), k;
      try {
        for (x.s(); !(k = x.n()).done; ) {
          var $ = k.value;
          b[$] = (1 - p) * v[$] + p * m[$], ($ === "largeArcFlag" || $ === "sweepFlag") && (b[$] = Math.round(b[$]));
        }
      } catch (M) {
        x.e(M);
      } finally {
        x.f();
      }
    }
    return c;
  };
}
function rR(e, t, n) {
  var a = ih(e), r = ih(t), o = Jr(n) === "object" ? n : {
    excludeSegment: n,
    snapEndsToInput: !0
  }, s = o.excludeSegment, i = o.snapEndsToInput;
  if (!a.length && !r.length)
    return function() {
      return "";
    };
  var u = aR(a, r, {
    excludeSegment: s,
    snapEndsToInput: i
  });
  return function(c) {
    if (c === 1 && i)
      return t ?? "";
    var f = u(c), p = "", h = Qy(f), v;
    try {
      for (h.s(); !(v = h.n()).done; ) {
        var m = v.value;
        p += eR(m);
      }
    } catch (b) {
      h.e(b);
    } finally {
      h.f();
    }
    return p;
  };
}
function ys(e, t, n, a) {
  return Array.isArray(t) && isFinite(n) ? t[n % t.length] : nc(e, t, n) || (Wa(n) ? `var(${Rn(n)})` : null);
}
var Pe;
(function(e) {
  e.Basis = "basis", e.BasisClosed = "basisClosed", e.BasisOpen = "basisOpen", e.Bundle = "bundle", e.Cardinal = "cardinal", e.CardinalClosed = "cardinalClosed", e.CardinalOpen = "cardinalOpen", e.CatmullRom = "catmullRom", e.CatmullRomClosed = "catmullRomClosed", e.CatmullRomOpen = "catmullRomOpen", e.Linear = "linear", e.LinearClosed = "linearClosed", e.MonotoneX = "monotoneX", e.MonotoneY = "monotoneY", e.Natural = "natural", e.Step = "step", e.StepAfter = "stepAfter", e.StepBefore = "stepBefore";
})(Pe || (Pe = {}));
const lh = {
  [Pe.Basis]: AI,
  [Pe.BasisClosed]: DI,
  [Pe.BasisOpen]: EI,
  [Pe.Bundle]: BI,
  [Pe.Cardinal]: OI,
  [Pe.CardinalClosed]: PI,
  [Pe.CardinalOpen]: II,
  [Pe.CatmullRom]: RI,
  [Pe.CatmullRomClosed]: FI,
  [Pe.CatmullRomOpen]: VI,
  [Pe.Linear]: Ny,
  [Pe.LinearClosed]: NI,
  [Pe.MonotoneX]: LI,
  [Pe.MonotoneY]: zI,
  [Pe.Natural]: qI,
  [Pe.Step]: HI,
  [Pe.StepAfter]: UI,
  [Pe.StepBefore]: WI
}, oR = Object.assign(Object.assign({}, Dc), { curveType: Pe.MonotoneX, lineWidth: 2, lineDashArray: void 0, fallbackValue: void 0, highlightOnHover: !1, cursor: null, interpolateMissingData: !1 }), sR = Hi`
  :root {
    --vis-line-cursor: default;
    --vis-line-stroke-dasharray: none;
    --vis-line-stroke-dashoffset: 0;

    --vis-line-gapfill-stroke-dasharray: 2 3;
    --vis-line-gapfill-stroke-opacity: 0.8;
    --vis-line-gapfill-stroke-dashoffset: 0;
  }
`, iR = Re`
  label: line-component;
`, Hr = Re`
  label: line;
  transition: opacity 200ms;
  cursor: var(--vis-line-cursor);
`, Fu = Re`
  label: linePath;
  fill: none;
  stroke-dasharray: var(--vis-line-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-stroke-dashoffset);
`, Vu = Re`
  label: lineSelectionHelper;
  fill: none;
  stroke: rgba(0, 0, 0, 0);
  stroke-width: 8px;
`, Nu = Re`
  opacity: 0.2;
`, Lu = Re`
  label: interpolated-path;
  fill: none;
  stroke-dasharray: var(--vis-line-gapfill-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-gapfill-stroke-dashoffset);
  stroke-opacity: var(--vis-line-gapfill-stroke-opacity);
`, lR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dim: Nu,
  globalStyles: sR,
  interpolatedPath: Lu,
  line: Hr,
  linePath: Fu,
  lineSelectionHelper: Vu,
  root: iR
}, Symbol.toStringTag, { value: "Module" }));
class Qi extends Py {
  constructor(t) {
    super(), this._defaultConfig = oR, this.config = this._defaultConfig, this.curve = lh[Pe.MonotoneX], this.events = {
      [Qi.selectors.line]: {
        mouseover: this._highlight.bind(this),
        mouseleave: this._resetHighlight.bind(this)
      }
    }, t && this.setConfig(t);
  }
  get bleed() {
    const { config: { lineWidth: t } } = this, n = this.yScale.domain(), r = (this.yScale.range()[0] > this.yScale.range()[1] ? da.North : da.South) === da.South, o = t > 3, s = t >= 10;
    return {
      top: !s && (!r && n[1] === 0 || r && n[0] === 0) ? 0 : t / 2,
      bottom: !s && (!r && n[0] === 0 || r && n[1] === 0) ? 0 : t / 2,
      left: o ? t / 2 : 0,
      right: o ? t / 2 : 0
    };
  }
  _render(t) {
    super._render(t);
    const { config: n, datamodel: { data: a } } = this, r = Wa(t) ? t : n.duration;
    this.curve = lh[n.curveType], this.lineGen = mI().x((f) => f.x).y((f) => f.y).defined((f) => f.defined).curve(this.curve);
    const o = Ni(n.y) ? n.y : [n.y], s = a.map((f, p) => this.xScale(qn(f, n.x, p))), i = o.map((f) => {
      const p = a.map((x, k) => {
        const $ = qn(x, f, k), M = (Wa($) || $ === null) && isFinite($) ? $ : n.fallbackValue, S = n.interpolateMissingData ? (Wa($) || $ === null) && isFinite($) : isFinite(M);
        return {
          x: s[k],
          y: this.yScale(M ?? 0),
          defined: S,
          value: M
        };
      }), h = p.reduce((x, k) => k.defined || x, !1);
      let v = !1;
      const m = p.reduce((x, k, $) => {
        !k.defined && isFinite(n.fallbackValue) && x.push(Object.assign(Object.assign({}, k), { defined: !0 })), !k.defined && !v && (v = !0);
        const M = $ > 0 && !p[$ - 1].defined || $ < p.length - 1 && !p[$ + 1].defined;
        return k.defined && M && (v || x.push(Object.assign(Object.assign({}, k), { defined: !1 })), x.push(k), v = !1), x;
      }, []), b = h && p.some((x) => x.value !== null);
      return {
        values: p,
        defined: h,
        gaps: m,
        visible: b
      };
    }), u = this.g.selectAll(`.${Hr}`).data(i), d = u.enter().append("g").attr("class", Hr);
    d.append("path").attr("class", Fu).attr("stroke", (f, p) => ys(a, n.color, p)).attr("stroke-opacity", 0).attr("stroke-width", n.lineWidth), d.append("path").attr("class", Vu).attr("d", this._emptyPath()), d.append("path").attr("class", Lu).attr("d", this._emptyPath()).style("opacity", 0);
    const c = d.merge(u);
    c.style("cursor", (f, p) => nc(a, n.cursor, p)), c.each((f, p, h) => {
      var v;
      const m = Et(h[p]), b = m.select(`.${Fu}`), x = m.select(`.${Vu}`), k = m.select(`.${Lu}`), $ = f.visible, M = tc(a, n.lineDashArray, p), S = ra(b, r).attr("stroke", ys(a, n.color, p)).attr("stroke-width", n.lineWidth).attr("stroke-opacity", $ ? 1 : 0).style("stroke-dasharray", (v = M == null ? void 0 : M.join(" ")) !== null && v !== void 0 ? v : null), D = f.values.some((N) => !N.defined), A = this.lineGen(f.values);
      if (r && !D) {
        const N = b.attr("d") || this._emptyPath(), F = A || this._emptyPath();
        S.attrTween("d", () => rR(N, F));
      } else f.visible && S.attr("d", A);
      x.attr("d", A).attr("visibility", $ ? null : "hidden"), D && n.interpolateMissingData ? ra(k, r).attr("d", this.lineGen(f.gaps)).attr("stroke", ys(a, n.color, p)).attr("stroke-width", n.lineWidth - 1).style("opacity", 1) : k.transition().duration(r).style("opacity", 0);
    }), ra(u.exit(), r).style("opacity", 0).remove();
  }
  _emptyPath() {
    const t = this.xScale.range(), n = this.yScale.range();
    return `M${t[0]},${n[0]} L${t[1]},${n[0]}`;
  }
  _highlight(t) {
    const { config: n } = this;
    n.highlightOnHover && this.g.selectAll(`.${Hr}`).classed(Nu, (a) => a !== t);
  }
  _resetHighlight() {
    const { config: t } = this;
    t.highlightOnHover && this.g.selectAll(`.${Hr}`).classed(Nu, !1);
  }
}
Qi.selectors = lR;
function uR(e) {
  return e;
}
var bs = 1, _s = 2, zu = 3, Wr = 4, uh = 1e-6;
function dR(e) {
  return "translate(" + e + ",0)";
}
function cR(e) {
  return "translate(0," + e + ")";
}
function fR(e) {
  return (t) => +e(t);
}
function pR(e, t) {
  return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function hR() {
  return !this.__axis;
}
function el(e, t) {
  var n = [], a = null, r = null, o = 6, s = 6, i = 3, u = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, d = e === bs || e === Wr ? -1 : 1, c = e === Wr || e === _s ? "x" : "y", f = e === bs || e === zu ? dR : cR;
  function p(h) {
    var v = a ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), m = r ?? (t.tickFormat ? t.tickFormat.apply(t, n) : uR), b = Math.max(o, 0) + i, x = t.range(), k = +x[0] + u, $ = +x[x.length - 1] + u, M = (t.bandwidth ? pR : fR)(t.copy(), u), S = h.selection ? h.selection() : h, D = S.selectAll(".domain").data([null]), A = S.selectAll(".tick").data(v, t).order(), N = A.exit(), F = A.enter().append("g").attr("class", "tick"), P = A.select("line"), I = A.select("text");
    D = D.merge(D.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(F), P = P.merge(F.append("line").attr("stroke", "currentColor").attr(c + "2", d * o)), I = I.merge(F.append("text").attr("fill", "currentColor").attr(c, d * b).attr("dy", e === bs ? "0em" : e === zu ? "0.71em" : "0.32em")), h !== S && (D = D.transition(h), A = A.transition(h), P = P.transition(h), I = I.transition(h), N = N.transition(h).attr("opacity", uh).attr("transform", function(R) {
      return isFinite(R = M(R)) ? f(R + u) : this.getAttribute("transform");
    }), F.attr("opacity", uh).attr("transform", function(R) {
      var j = this.parentNode.__axis;
      return f((j && isFinite(j = j(R)) ? j : M(R)) + u);
    })), N.remove(), D.attr("d", e === Wr || e === _s ? s ? "M" + d * s + "," + k + "H" + u + "V" + $ + "H" + d * s : "M" + u + "," + k + "V" + $ : s ? "M" + k + "," + d * s + "V" + u + "H" + $ + "V" + d * s : "M" + k + "," + u + "H" + $), A.attr("opacity", 1).attr("transform", function(R) {
      return f(M(R) + u);
    }), P.attr(c + "2", d * o), I.attr(c, d * b).text(m), S.filter(hR).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === _s ? "start" : e === Wr ? "end" : "middle"), S.each(function() {
      this.__axis = M;
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
    return arguments.length ? (r = h, p) : r;
  }, p.tickSize = function(h) {
    return arguments.length ? (o = s = +h, p) : o;
  }, p.tickSizeInner = function(h) {
    return arguments.length ? (o = +h, p) : o;
  }, p.tickSizeOuter = function(h) {
    return arguments.length ? (s = +h, p) : s;
  }, p.tickPadding = function(h) {
    return arguments.length ? (i = +h, p) : i;
  }, p.offset = function(h) {
    return arguments.length ? (u = +h, p) : u;
  }, p;
}
function dh(e) {
  return el(bs, e);
}
function ch(e) {
  return el(_s, e);
}
function fh(e) {
  return el(zu, e);
}
function ph(e) {
  return el(Wr, e);
}
var Hn;
(function(e) {
  e.Start = "start", e.Middle = "middle", e.End = "end";
})(Hn || (Hn = {}));
var ca;
(function(e) {
  e.Top = "top", e.Middle = "middle", e.Bottom = "bottom";
})(ca || (ca = {}));
var dn;
(function(e) {
  e.Wrap = "wrap", e.Trim = "trim";
})(dn || (dn = {}));
var Bt;
(function(e) {
  e.Left = "left", e.Center = "center", e.Right = "right";
})(Bt || (Bt = {}));
var e0 = { exports: {} };
(function(e) {
  (function(t) {
    if (typeof n != "function") {
      var n = function(v) {
        return v;
      };
      n.nonNative = !0;
    }
    const a = n("plaintext"), r = n("html"), o = n("comment"), s = /<(\w*)>/g, i = /<\/?([^\s\/>]+)/;
    function u(v, m, b) {
      v = v || "", m = m || [], b = b || "";
      let x = c(m, b);
      return f(v, x);
    }
    function d(v, m) {
      v = v || [], m = m || "";
      let b = c(v, m);
      return function(k) {
        return f(k || "", b);
      };
    }
    u.init_streaming_mode = d;
    function c(v, m) {
      return v = p(v), {
        allowable_tags: v,
        tag_replacement: m,
        state: a,
        tag_buffer: "",
        depth: 0,
        in_quote_char: ""
      };
    }
    function f(v, m) {
      if (typeof v != "string")
        throw new TypeError("'html' parameter must be a string");
      let b = m.allowable_tags, x = m.tag_replacement, k = m.state, $ = m.tag_buffer, M = m.depth, S = m.in_quote_char, D = "";
      for (let A = 0, N = v.length; A < N; A++) {
        let F = v[A];
        if (k === a)
          switch (F) {
            case "<":
              k = r, $ += F;
              break;
            default:
              D += F;
              break;
          }
        else if (k === r)
          switch (F) {
            case "<":
              if (S)
                break;
              M++;
              break;
            case ">":
              if (S)
                break;
              if (M) {
                M--;
                break;
              }
              S = "", k = a, $ += ">", b.has(h($)) ? D += $ : D += x, $ = "";
              break;
            case '"':
            case "'":
              F === S ? S = "" : S = S || F, $ += F;
              break;
            case "-":
              $ === "<!-" && (k = o), $ += F;
              break;
            case " ":
            case `
`:
              if ($ === "<") {
                k = a, D += "< ", $ = "";
                break;
              }
              $ += F;
              break;
            default:
              $ += F;
              break;
          }
        else if (k === o)
          switch (F) {
            case ">":
              $.slice(-2) == "--" && (k = a), $ = "";
              break;
            default:
              $ += F;
              break;
          }
      }
      return m.state = k, m.tag_buffer = $, m.depth = M, m.in_quote_char = S, D;
    }
    function p(v) {
      let m = /* @__PURE__ */ new Set();
      if (typeof v == "string") {
        let b;
        for (; b = s.exec(v); )
          m.add(b[1]);
      } else !n.nonNative && typeof v[n.iterator] == "function" ? m = new Set(v) : typeof v.forEach == "function" && v.forEach(m.add, m);
      return m;
    }
    function h(v) {
      let m = i.exec(v);
      return m ? m[1].toLowerCase() : null;
    }
    e.exports ? e.exports = u : t.striptags = u;
  })(mB);
})(e0);
var vR = e0.exports;
const mR = /* @__PURE__ */ zg(vR);
function gR(e) {
  switch (e) {
    case Bt.Center:
      return "middle";
    case Bt.Right:
      return "end";
    case Bt.Left:
    default:
      return "start";
  }
}
const yR = (e) => {
  switch (e) {
    case Bt.Left:
      return "start";
    case Bt.Right:
      return "end";
    case Bt.Center:
      return "middle";
    default:
      return null;
  }
};
function bR(e) {
  return e.replace(/-([a-z])/g, (t, n) => n.toUpperCase());
}
function _R(e) {
  var t;
  return (t = e.match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)) === null || t === void 0 ? void 0 : t.filter(Boolean).map((n) => n.toLowerCase()).join("-");
}
function xR(e) {
  return e.replace(/['"]/g, "&#39;").replace(/\u0000/g, "\\0").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
}
function wR(e, t = 15) {
  return e ? e.length > t ? `…${e.substr(e.length - t, t)}` : e : "";
}
function CR(e, t = 15) {
  if (!e)
    return "";
  const n = Math.floor((t - 3) / 2);
  return e.length > t ? `${e.substr(0, n)}…${e.substr(-n, n)}` : e;
}
function $R(e, t = 15) {
  return e ? e.length > t ? `${e.substr(0, t)}…` : e : "";
}
function kR(e, t = 15, n = Hn.Middle) {
  if (!e)
    return "";
  let a = $R(e, t);
  return n === Hn.Start ? a = wR(e, t) : n === Hn.Middle && (a = CR(e, t)), a;
}
function t0(e, t = [" "]) {
  let n = [e];
  for (let a = 0; a < t.length; a++) {
    const r = t[a];
    n.forEach((o, s) => {
      const i = o.split(r), u = i.map((d, c) => `${d}${c === i.length - 1 ? "" : r}`);
      n[s] = u;
    }), n = gu(n);
  }
  return n;
}
function SR(e, t, n = [" ", "-", ".", ","]) {
  const a = e.text();
  if (!a)
    return;
  const r = Ni(n) ? n : [n], o = t0(a, r), s = parseFloat(e.attr("x")) || 0;
  e.text("");
  let i = e.append("tspan").attr("x", s), u = `${o[0]}`;
  i.text(u), o.forEach((d, c) => {
    if (c === 0)
      return;
    const f = `${u}${d}`;
    i.text(f), i.node().getComputedTextLength() > t ? (i.text(u.trim()), i = e.append("tspan").attr("x", s).attr("dy", "1.2em").text(d), u = d) : u += d;
  });
}
function hh(e, t, n, a, r, o) {
  var s;
  t === void 0 && (t = 50), n === void 0 && (n = Hn.Middle), r === void 0 && (r = +((s = window.getComputedStyle(e.node())) === null || s === void 0 ? void 0 : s.fontSize) || 0), o === void 0 && (o = Xg());
  const i = e.text() || "", u = i.length, d = r * u * o, f = Math.ceil(u * t / (1.1 * d));
  return f < u ? (e.text(kR(i, f, n)), !0) : !1;
}
function xs(e, t, n = Xg()) {
  return e.length * t * n || 0;
}
function ws(e, t, n) {
  const a = "http://www.w3.org/2000/svg", r = document.createElementNS(a, "svg"), o = document.createElementNS(a, "text");
  o.textContent = e, o.setAttribute("font-size", `${n}`), o.setAttribute("font-family", t), r.appendChild(o), document.body.appendChild(r);
  const s = o.getComputedTextLength();
  return document.body.removeChild(r), s;
}
function TR(e, t = void 0, n = !0, a = Yg, r = !1) {
  var o, s, i;
  const u = `${e.text}`;
  if (!u)
    return [];
  const d = (o = e.fontSize) !== null && o !== void 0 ? o : Xr.fontSize, c = (s = e.fontFamily) !== null && s !== void 0 ? s : Xr.fontFamily, f = (i = e.fontWidthToHeightRatio) !== null && i !== void 0 ? i : Xr.fontWidthToHeightRatio, p = Array.isArray(a) ? a : [a];
  return u.split(`
`).map((v) => {
    const m = [];
    if (!t)
      return [v];
    const b = t0(v, p);
    let x = "";
    for (let k = 0; k < b.length; k += 1) {
      (n ? xs(x + b[k], d, f) : ws(x + b[k], c, d)) < t || k === 0 ? x += b[k] : (m.push(x.trim()), x = b[k]);
      const M = 2;
      if (r)
        for (; x.trim().length > M && (n ? xs(x, d, f) : ws(x, c, d)) > t; ) {
          let D = x.trim().length - M;
          for (; D > 0; ) {
            const A = `${x.substring(0, D)}${Gg}`;
            if ((n ? xs(A, d, f) : ws(A, c, d)) <= t || D === 1) {
              m.push(A.trim()), x = x.substring(D);
              break;
            }
            D--;
          }
        }
    }
    return x && m.push(x.trim()), m;
  }).flat();
}
function MR(e, t = void 0, n = void 0, a = !0, r = Yg, o = !1) {
  const s = Array.isArray(e) ? e.map((f) => sr(Xr, f)) : [sr(Xr, e)], i = s.map((f) => TR(f, t, a, r, o)), u = s[0];
  let d = -u.fontSize * (u.lineHeight - 1);
  const c = [];
  return s.forEach((f, p) => {
    var h;
    let v = i[p];
    const m = p > 0 ? c[p - 1] : void 0, b = m ? m.marginBottom : 0, x = f.marginTop, k = Math.max(b, x);
    d += k;
    const $ = f.fontSize * f.lineHeight;
    let M = 0;
    for (let S = 0; S < v.length; S += 1) {
      let D = v[S];
      d += $;
      const A = `${D} …`, N = a ? xs(A, f.fontSize, f.fontWidthToHeightRatio) : ws(A, f.fontFamily, f.fontSize);
      if (M = Math.max(N, M), n && d + $ > n && S !== v.length - 1) {
        D.charAt(D.length - 1) === Gg && (D = D.substr(0, v[S].length - 1)), N < t ? v[S] = A : v[S] = `${v[S].substr(0, v[S].length - 2)}…`, v = v.slice(0, S + 1);
        break;
      }
    }
    c.push(Object.assign(Object.assign({}, f), { _lines: v, _estimatedHeight: d - ((m == null ? void 0 : m._estimatedHeight) || 0), _maxWidth: Math.max(M, (h = m == null ? void 0 : m._maxWidth) !== null && h !== void 0 ? h : 0) }));
  }), c;
}
function AR(e, t = 0, n) {
  return e.map((a, r) => {
    const o = r > 0 ? e[r - 1] : void 0, s = o ? o.marginBottom / o.fontSize : 0, i = a.marginTop / a.fontSize, u = Math.max(s, i), d = {
      fontSize: a.fontSize,
      fontFamily: a.fontFamily,
      fontWeight: a.fontWeight,
      fill: a.color,
      y: r === 0 && n
    };
    return `<tspan xmlns="http://www.w3.org/2000/svg" ${Object.entries(d).filter(([f, p]) => p).map(([f, p]) => `${_R(f)}="${xR(p.toString())}"`).join(" ")}>${a._lines.map((f, p) => {
      let h;
      return r === 0 && p === 0 ? h = 0.8 + u : p === 0 ? h = u + a.lineHeight : h = a.lineHeight, `<tspan x="${t}" dy="${h}em">${f.length ? f : " "}</tspan>`;
    }).join("")}</tspan>`;
  });
}
function DR(e) {
  return nE(e, (t) => t._estimatedHeight);
}
const ER = ["text", "tspan", "textPath", "altGlyph", "altGlyphDef", "altGlyphItem", "glyphRef", "textRef", "textArea"];
function BR(e, t, n, a) {
  var r, o;
  const s = MR(t, n.width, void 0, n.fastMode, n.separator, n.wordBreak), i = (r = n.x) !== null && r !== void 0 ? r : +e.getAttribute("x"), u = (o = n.y) !== null && o !== void 0 ? o : +e.getAttribute("y"), d = i ?? 0;
  let c = u ?? 0;
  if (n.textAlign && e.setAttribute("text-anchor", gR(n.textAlign)), n.verticalAlign && n.verticalAlign !== ca.Top) {
    const f = DR(s), p = n.verticalAlign === ca.Middle ? -f / 2 : n.verticalAlign === ca.Bottom ? -f : 0;
    c += p;
  }
  n.textRotationAngle ? e.setAttribute("transform", `rotate(${n.textRotationAngle === 0 || n.textRotationAngle ? n.textRotationAngle : 0} ${d} ${c})`) : e.removeAttribute("transform");
  {
    const f = new DOMParser();
    e.textContent = "", s.forEach((p) => {
      const h = AR([p], d, c).join(""), v = mR(h, ER), m = f.parseFromString(v, "image/svg+xml").firstChild;
      e.appendChild(m);
    });
  }
}
const OR = Object.assign(Object.assign({}, Dc), { position: void 0, type: void 0, label: void 0, labelFontSize: null, labelTextFitMode: dn.Wrap, labelTextTrimType: Hn.Middle, gridLine: !0, tickLine: !0, domainLine: !0, numTicks: void 0, minMaxTicksOnly: !1, minMaxTicksOnlyWhenWidthIsLess: 250, minMaxTicksOnlyShowGridLines: !1, tickTextWidth: void 0, tickTextSeparator: void 0, tickTextForceWordBreak: !1, tickTextTrimType: Hn.Middle, tickTextFitMode: dn.Wrap, tickTextFontSize: null, tickTextAlign: void 0, tickTextColor: null, tickTextAngle: void 0, labelMargin: 8, labelColor: null, tickFormat: void 0, tickValues: void 0, fullSize: !0, tickPadding: 8, tickTextHideOverlapping: void 0 });
function PR(e, t) {
  const n = "--vis-", a = Object.entries(e);
  return Object.fromEntries(a.map(([r]) => [bR(r.replace(n, "")), r]));
}
function IR(e, t) {
  Hi({
    ":root": e,
    [`body.theme-dark .${t}`]: Object.keys(e).filter((n) => n.includes("--vis-dark")).map((n) => ({
      [n.replace("--vis-dark", "--vis")]: `var(${n})`
    }))
  });
}
const n0 = Re`
  label: axis-component;
`, Ic = {
  // Undefined by default to allow proper fallback to var(--vis-font-family)
  /* --vis-axis-font-family: */
  "--vis-axis-tick-color": "#e8e9ef",
  /* --vis-axis-domain-color: // Undefined by default to allow fallback to var(--vis-axis-tick-color) */
  "--vis-axis-grid-color": "#e8e9ef",
  "--vis-axis-grid-line-width": "1px",
  "--vis-axis-grid-line-dasharray": "none",
  "--vis-axis-label-font-size": "14px",
  "--vis-axis-label-color": "#6c778c",
  "--vis-axis-label-weight": "500",
  "--vis-axis-tick-label-color": "#6c778c",
  "--vis-axis-tick-label-font-size": "12px",
  "--vis-axis-tick-label-weight": "500",
  "--vis-axis-tick-label-cursor": "default",
  "--vis-axis-tick-label-text-decoration": "none",
  "--vis-axis-tick-line-width": "1px",
  "--vis-axis-tick-label-hide-transition": "opacity 400ms ease-in-out",
  /* --vis-axis-domain-line-width: // Undefined by default to allow fallback to var(--vis-axis-grid-line-width) */
  "--vis-dark-axis-tick-color": "#6c778c",
  /* --vis-dark-axis-domain-color: // Undefined by default to allow fallback to var(--vis-dark-axis-tick-color) */
  "--vis-dark-axis-tick-label-color": "#e8e9ef",
  "--vis-dark-axis-grid-color": "#6c778c",
  "--vis-dark-axis-label-color": "#fefefe"
}, RR = PR(Ic);
IR(Ic, n0);
const Rc = Re`
  label: hide-tick-line;
`, Fc = Re`
  label: hide-domain;
`, a0 = Re`
  label: axis;

  user-select: none;

  .domain {
    stroke: var(--vis-axis-domain-color, var(--vis-axis-tick-color));
    stroke-width: var(--vis-axis-domain-line-width, var(--vis-axis-grid-line-width));
    stroke-dasharray: var(--vis-axis-domain-line-dasharray, var(--vis-axis-grid-line-dasharray));
  }

  &${`.${Rc}`} {
    .tick > line {
      opacity: 0;
    }
  }

  &${`.${Fc}`} {
    .domain {
      opacity: 0;
    }
  }
`, r0 = Re`
  label: grid;

  .domain {
    opacity: 0;
  }

  line {
    stroke: var(--vis-axis-grid-color);
    stroke-width: var(--vis-axis-grid-line-width);
    stroke-dasharray: var(--vis-axis-grid-line-dasharray);
  }
`, o0 = Re`
  label: tick;

  stroke: none;
  font-size: var(--vis-axis-tick-label-font-size);
  font-weight: var(--vis-axis-tick-label-weight);

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
`, qu = Re`
  label: tick-text-exiting;
`, Hu = Re`
  label: label;
  fill: var(--vis-axis-label-color);
  font-size: var(--vis-axis-label-font-size);
  font-weight: var(--vis-axis-label-weight);
  font-family: var(--vis-axis-font-family, var(--vis-font-family));
  text-anchor: middle;
`, s0 = Re`
  label: tick-label;
`, i0 = Re`
  label: tick-label-hideable;
  opacity: 0;
  transition: var(--vis-axis-tick-label-hide-transition);
`, FR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  axis: a0,
  cssVarDefaults: Ic,
  grid: r0,
  hideDomain: Fc,
  hideTickLine: Rc,
  label: Hu,
  root: n0,
  tick: o0,
  tickLabel: s0,
  tickLabelHideable: i0,
  tickTextExiting: qu,
  variables: RR
}, Symbol.toStringTag, { value: "Module" }));
class l0 extends Py {
  constructor(t) {
    super(), this._defaultConfig = OR, this.config = this._defaultConfig, this._defaultNumTicks = 3, this.events = {}, t && this.setConfig(t), this.axisGroup = this.g.append("g"), this.gridGroup = this.g.append("g").attr("class", r0);
  }
  /** Renders axis to an invisible grouped to calculate automatic chart margins */
  preRender() {
    const { config: t } = this, n = this.g.append("g").attr("opacity", 0);
    this._renderAxis(n, 0), this._axisRawBBox = n.node().getBBox(), t.tickTextAlign && this._alignTickLabels(), this._renderAxisLabel(n), this._axisSizeBBox = this._getAxisSize(n), this._requiredMargin = this._getRequiredMargin(this._axisSizeBBox), n.remove();
  }
  getPosition() {
    const { config: { type: t, position: n } } = this;
    return n ?? (t === $e.X ? we.Bottom : we.Left);
  }
  _getAxisSize(t) {
    return t.node().getBBox();
  }
  _getRequiredMargin(t = this._axisSizeBBox) {
    const { config: { type: n, position: a } } = this;
    switch (n) {
      case $e.X: {
        const o = this._axisSizeBBox.x + this._axisSizeBBox.width, s = this._axisSizeBBox.x < 0 ? Math.abs(this._axisSizeBBox.x) : 0, i = o - this._width > 1 ? o - this._width : 0;
        switch (a) {
          case we.Top:
            return { top: t.height, left: s, right: i };
          case we.Bottom:
          default:
            return { bottom: t.height, left: s, right: i };
        }
      }
      case $e.Y: {
        const r = t.height > this._height ? (t.height - this._height) / 2 : 0, o = r, s = r;
        switch (a) {
          case we.Right:
            return { right: t.width, top: o, bottom: s };
          case we.Left:
          default:
            return { left: t.width, top: o, bottom: s };
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
      case $e.X:
        switch (a) {
          case we.Top:
            return { top: t.top, left: t.left };
          case we.Bottom:
          default:
            return { top: t.top + this._height, left: t.left };
        }
      case $e.Y:
        switch (a) {
          case we.Right:
            return { top: t.top, left: t.left + this._width };
          case we.Left:
          default:
            return { top: t.top, left: t.left };
        }
    }
  }
  _render(t = this.config.duration, n = this.axisGroup) {
    const { config: a } = this;
    if (this._renderAxis(n, t), this._renderAxisLabel(n), a.gridLine) {
      const r = this._buildGrid();
      this.gridGroup.selectAll("*").interrupt(), ra(this.gridGroup, t).call(r).style("opacity", 1);
    } else
      ra(this.gridGroup, t).style("opacity", 0);
    a.tickTextAlign && this._alignTickLabels(), this._resolveTickLabelOverlap(n);
  }
  _buildAxis() {
    const { config: { type: t, position: n, tickPadding: a } } = this, r = this._getNumTicks();
    switch (t) {
      case $e.X:
        switch (n) {
          case we.Top:
            return dh(this.xScale).ticks(r).tickPadding(a);
          case we.Bottom:
          default:
            return fh(this.xScale).ticks(r).tickPadding(a);
        }
      case $e.Y:
        switch (n) {
          case we.Right:
            return ch(this.yScale).ticks(r).tickPadding(a);
          case we.Left:
          default:
            return ph(this.yScale).ticks(r).tickPadding(a);
        }
    }
  }
  _buildGrid() {
    const { config: t } = this;
    let n;
    switch (t.type) {
      case $e.X:
        switch (t.position) {
          case we.Top: {
            n = dh(this.xScale);
            break;
          }
          case we.Bottom:
          default: {
            n = fh(this.xScale);
            break;
          }
        }
        n.tickSize(-this._height);
        break;
      case $e.Y:
        switch (t.position) {
          case we.Right: {
            n = ch(this.yScale);
            break;
          }
          case we.Left:
          default: {
            n = ph(this.yScale);
            break;
          }
        }
        n.tickSize(-this._width);
    }
    n.tickSizeOuter(0).tickFormat(() => "");
    const a = this._getNumTicks() * 2, r = n.scale(), o = r.domain(), s = () => {
      if (!t.minMaxTicksOnlyShowGridLines)
        return o;
      const u = r.ticks(a);
      if (u.length < 2)
        return o;
      const d = +u[1] - +u[0], c = o[1];
      return +c - +u[u.length - 1] > d / 2 ? [...u, c] : u;
    }, i = t.tickValues ? this._getConfiguredTickValues() : this._shouldRenderMinMaxTicksOnly() ? s() : r.ticks(a);
    return n.tickValues(i), n;
  }
  _renderAxis(t = this.axisGroup, n = this.config.duration) {
    const { config: a } = this, r = this._buildAxis(), o = r.scale(), s = a.tickValues ? this._getConfiguredTickValues() : this._shouldRenderMinMaxTicksOnly() ? o.domain() : o.ticks(this._getNumTicks()), i = s.length;
    r.tickValues(s), t.selectAll("*").interrupt(), ra(t, n).call(r).on("end", () => {
      this._resolveTickLabelOverlap(t);
    }), t.selectAll("g.tick").classed(o0, !0).style("font-size", a.tickTextFontSize);
    const c = t.selectAll("g.tick > text").filter((f) => s.some((p) => ha(f, p))).classed(s0, !0).classed(i0, !!a.tickTextHideOverlapping).style("fill", a.tickTextColor);
    if (t.selectAll("g.tick > text").filter((f) => !s.some((p) => ha(f, p))).classed(qu, !0), c.nodes().forEach((f) => fc(f)), c.each((f, p, h) => {
      var v, m;
      let b = (m = (v = a.tickFormat) === null || v === void 0 ? void 0 : v.call(a, f, p, s)) !== null && m !== void 0 ? m : `${f}`;
      const x = h[p], k = a.tickTextWidth || (a.type === $e.X ? this._containerWidth / (i + 1) : this._containerWidth / 5), $ = getComputedStyle(x), M = Number.parseFloat($.fontSize), S = $.fontFamily, D = {
        verticalAlign: a.type === $e.X ? ca.Top : ca.Middle,
        width: k,
        textRotationAngle: a.tickTextAngle,
        separator: a.tickTextSeparator,
        wordBreak: a.tickTextForceWordBreak
      };
      if (a.tickTextFitMode === dn.Trim) {
        const N = Et(x).text(b);
        hh(N, k, a.tickTextTrimType, !0, M, 0.58), b = Et(x).text();
      }
      BR(x, { text: b, fontFamily: S, fontSize: M }, D);
    }), t.classed(a0, !0).classed(Rc, !a.tickLine).classed(Fc, !a.domainLine), a.fullSize) {
      const f = this._getFullDomainPath(0);
      ra(t.select(".domain"), n).attr("d", f);
    }
  }
  _resolveTickLabelOverlap(t = this.axisGroup) {
    const { config: n } = this, a = t.selectAll(`g.tick > text:not(.${qu})`);
    if (!n.tickTextHideOverlapping) {
      a.style("opacity", null);
      return;
    }
    cancelAnimationFrame(this._collideTickLabelsAnimFrameId), this._collideTickLabelsAnimFrameId = requestAnimationFrame(() => {
      this._collideTickLabels(a);
    });
  }
  _collideTickLabels(t) {
    t.each((a, r, o) => {
      const s = o[r];
      s._visible = !0;
    });
    const n = 3;
    for (let a = 0; a < n; a += 1)
      t.each((r, o, s) => {
        const i = s[o];
        if (!i._visible)
          return;
        const d = i.getBoundingClientRect();
        for (let c = o + 1; c < s.length; c += 1) {
          if (o === c)
            continue;
          const f = s[c];
          if (f._visible) {
            const h = f.getBoundingClientRect();
            if (_B(d, h, -5)) {
              f._visible = !1;
              break;
            }
          }
        }
      });
    t.each((a, r, o) => {
      const s = o[r];
      Et(s).style("opacity", s._visible ? 1 : 0);
    });
  }
  _getNumTicks() {
    const { config: { type: t, numTicks: n } } = this;
    if (n)
      return n;
    if (t === $e.X) {
      const a = this.xScale.range(), r = a[1] - a[0];
      return Math.floor(r / 175);
    }
    if (t === $e.Y) {
      const a = this.yScale.range(), r = Math.abs(a[0] - a[1]);
      return Math.pow(r, 0.85) / 25;
    }
    return this._defaultNumTicks;
  }
  _getConfiguredTickValues() {
    const { config: t } = this, n = t.type === $e.X ? this.xScale : this.yScale, a = n == null ? void 0 : n.domain();
    return t.tickValues ? t.tickValues.filter((r) => r >= a[0] && r <= a[1]) : null;
  }
  _shouldRenderMinMaxTicksOnly() {
    const { config: t } = this;
    return t.minMaxTicksOnly || t.type === $e.X && this._width < t.minMaxTicksOnlyWhenWidthIsLess;
  }
  _getFullDomainPath(t = 0) {
    const { config: { type: n } } = this;
    switch (n) {
      case $e.X:
        return `M0.5, ${t} V0.5 H${this._width + 0.5} V${t}`;
      case $e.Y:
        return `M${-t}, ${this._height + 0.5} H0.5 V0.5 H${-t}`;
    }
  }
  _renderAxisLabel(t = this.axisGroup) {
    var n;
    const { type: a, label: r, labelMargin: o, labelFontSize: s, labelTextFitMode: i } = this.config;
    if (t.selectAll(`.${Hu}`).remove(), !r)
      return;
    const u = this.getPosition(), { width: d, height: c } = (n = this._axisRawBBox) !== null && n !== void 0 ? n : t.node().getBBox(), f = a === $e.Y ? -90 : 0, p = t.append("text").attr("class", Hu).attr("dy", `${this._getLabelDY()}em`).style("font-size", s).style("fill", this.config.labelColor);
    p.text(r);
    let h = !1;
    if (i === dn.Wrap) {
      const M = a === $e.Y ? this._height : this._width;
      p.node().getComputedTextLength() > M && (SR(p, M), h = !0);
    }
    let v = d, m = c;
    if (i === dn.Wrap) {
      const M = p.node().getBBox();
      v = M.width, m = M.height;
    } else {
      const M = a === $e.X ? v : m, S = getComputedStyle(p.node()), D = Number.parseFloat(S.fontSize);
      hh(p, M, this.config.labelTextTrimType, !0, D);
      const A = p.node().getBBox();
      v = A.width, m = A.height;
    }
    const b = a === $e.X ? this._width / 2 : a === $e.Y && i === dn.Wrap && h ? u === we.Left ? -d - m / 2 - 10 : d : Math.pow(-1, +(u === we.Left)) * d, x = a === $e.Y ? this._height / 2 : a === $e.X && i === dn.Wrap ? u === we.Top ? -c - m / 2 : c : Math.pow(-1, +(u === we.Top)) * c, k = a === $e.X ? 0 : Math.pow(-1, +(u === we.Left)) * o, $ = a === $e.X ? Math.pow(-1, +(u === we.Top)) * o : 0;
    p.attr("transform", `translate(${b + k},${x + $}) rotate(${f})`);
  }
  _getLabelDY() {
    const { type: t, position: n } = this.config;
    switch (t) {
      case $e.X:
        switch (n) {
          case we.Top:
            return 0;
          case we.Bottom:
          default:
            return 0.75;
        }
      case $e.Y:
        switch (n) {
          case we.Right:
            return 0.75;
          case we.Left:
          default:
            return -0.25;
        }
    }
  }
  _alignTickLabels() {
    const { config: { type: t, tickTextAlign: n, tickTextAngle: a, position: r } } = this, o = this.g.selectAll("g.tick > text"), s = yR(n), i = t === $e.X ? 0 : this._getYTickTextTranslate(n, r), u = a ? `translate(${i},0) rotate(${a})` : `translate(${i},0)`;
    o.attr("transform", u).attr("text-anchor", s);
  }
  _getYTickTextTranslate(t, n = we.Left) {
    var a, r, o, s;
    const i = this.config.tickPadding + 1, u = ((s = (r = (a = this._axisRawBBox) === null || a === void 0 ? void 0 : a.width) !== null && r !== void 0 ? r : (o = this.axisGroup.node()) === null || o === void 0 ? void 0 : o.getBBox().width) !== null && s !== void 0 ? s : 0) - i;
    switch (t) {
      case Bt.Left:
        return n === we.Left ? u * -1 : 0;
      case Bt.Right:
        return n === we.Left ? 0 : u;
      case Bt.Center:
        return n === we.Left ? u * -0.5 : u * 0.5;
      default:
        return 0;
    }
  }
}
l0.selectors = FR;
var Ht;
(function(e) {
  e.Circle = "circle", e.Cross = "cross", e.Diamond = "diamond", e.Square = "square", e.Star = "star", e.Triangle = "triangle", e.Wye = "wye";
})(Ht || (Ht = {}));
const VR = {
  [Ht.Circle]: Ly,
  [Ht.Cross]: gI,
  [Ht.Diamond]: bI,
  [Ht.Square]: _I,
  [Ht.Star]: $I,
  [Ht.Triangle]: kI,
  [Ht.Wye]: TI
}, ft = Object.assign(Object.assign({}, Ht), { Line: "line" });
var ui;
(function(e) {
  e.Horizontal = "horizontal", e.Vertical = "vertical";
})(ui || (ui = {}));
const NR = {
  items: [],
  labelClassName: "",
  onLegendItemClick: void 0,
  labelFontSize: null,
  labelMaxWidth: null,
  bulletSize: null,
  bulletSpacing: 4,
  bulletShape: (e) => {
    var t;
    return (t = e.shape) !== null && t !== void 0 ? t : ft.Circle;
  },
  orientation: ui.Horizontal,
  renderIntoProvidedDomNode: !1
}, ns = co * 3, LR = {
  [ft.Circle]: Math.PI / 4,
  [ft.Cross]: 5 / 9,
  [ft.Diamond]: Math.sqrt(3) / 6,
  [ft.Square]: 1,
  [ft.Star]: 0.3,
  [ft.Triangle]: Math.sqrt(3) / 4,
  [ft.Wye]: 5 / 11
};
function u0(e, t, n) {
  return t < 1 ? 0 : e * t + n * (t - 1);
}
function zR(e) {
  e.each((t, n, a) => {
    Et(a[n]).append("svg").attr("width", "100%").attr("height", "100%").append("path");
  });
}
function qR(e, t, n) {
  e.each((a, r, o) => {
    var s;
    const i = nc(a, t.bulletShape, r), u = lE((s = a.color) !== null && s !== void 0 ? s : ys(a, n, r)), d = u.length, c = ns, f = wu(getComputedStyle(o[r]).getPropertyValue("--vis-legend-bullet-size")), p = t.bulletSpacing * (ns / f), h = u0(c, d, p), v = i === ft.Line ? ns / 2.5 : ns, m = Et(o[r]).select("svg").attr("viewBox", `0 0 ${h} ${v}`);
    m.selectAll("path").remove();
    const b = a.inactive ? "var(--vis-legend-bullet-inactive-opacity)" : 1;
    u.forEach((x, k) => {
      const $ = m.append("path");
      if (i === ft.Line) {
        const M = k * (c + p), S = M + c;
        $.attr("d", `M${M},${v / 2} L${S},${v / 2}`).attr("transform", null).style("opacity", b).style("stroke", x).style("stroke-width", "3px").style("fill", null).style("fill-opacity", null).style("marker-start", "none").style("marker-end", "none");
      } else {
        const M = MI().type(VR[i]).size(c * v * LR[i]), S = (c - 2) / c;
        let D = v / 2;
        switch (i) {
          case ft.Triangle:
            D += v / 8;
            break;
          case ft.Star:
            D += v / 16;
            break;
          case ft.Wye:
            D -= v / 16;
            break;
        }
        const A = k * (c + p) + c / 2;
        $.attr("d", M).attr("transform", `translate(${A}, ${Math.round(D)}) scale(${S})`).style("stroke", x).style("stroke-width", "1px").style("opacity", null).style("fill", x).style("fill-opacity", b);
      }
    });
  });
}
const Vc = Re`
  label: bullet-legend-component;
`, HR = Hi`
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

  body.theme-dark ${`.${Vc}`} {
    --vis-legend-label-color: var(--vis-dark-legend-label-color);
  }

  body.theme-patterns {
    --vis-legend-bullet-size: 14px;
  }
`, Cs = Re`
  label: legendItem;
  display: inline-flex;
  align-items: center;
  font-family: var(--vis-legend-font-family, var(--vis-font-family));
  margin-right: var(--vis-legend-item-spacing);
  white-space: nowrap;
  cursor: default;
  user-select: none;
  max-width: min-content;
`, d0 = Re`
  label: legendItemVertical;
  display: flex;
  margin-top: var(--vis-legend-vertical-item-spacing);
`, c0 = Re`
  cursor: pointer;
`, Wu = Re`
  label: legendItemLabel;
  font-size: var(--vis-legend-label-font-size);
  display: inline-block;
  vertical-align: middle;
  color: var(--vis-legend-label-color);
  max-width: var(--vis-legend-label-max-width);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`, Uu = Re`
  flex: 0 0 auto;
  label: legendItemBullet;
  margin-right: var(--vis-legend-bullet-label-spacing);
  height: var(--vis-legend-bullet-size);
  width: var(--vis-legend-bullet-size);

  svg {
    display: block;
  }
`, WR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bullet: Uu,
  clickable: c0,
  item: Cs,
  itemVertical: d0,
  label: Wu,
  root: Vc,
  variables: HR
}, Symbol.toStringTag, { value: "Module" }));
class f0 {
  constructor(t, n) {
    this._defaultConfig = NR, this.config = this._defaultConfig, this._colorAccessor = (a) => a.color, this._container = t, this.div = n != null && n.renderIntoProvidedDomNode ? Et(this._container) : Et(this._container).append("div"), this.div.classed(Vc, !0), this.element = this.div.node(), n && this.update(n);
  }
  update(t) {
    this.prevConfig = this.config, this.config = sr(this._defaultConfig, t), this.render();
  }
  render() {
    const { config: t } = this, n = this.div.selectAll(`.${Cs}`).data(t.items), a = n.enter().append("div").on("click", this._onItemClick.bind(this)), r = a.merge(n);
    r.attr("class", (o) => {
      var s;
      return `${Cs} ${(s = o.className) !== null && s !== void 0 ? s : ""}`;
    }).classed(d0, t.orientation === ui.Vertical).classed(c0, (o) => !!t.onLegendItemClick && this._isItemClickable(o)).attr("title", (o) => o.name).style("display", (o) => o.hidden ? "none" : null), a.append("span").attr("class", Uu).call(zR), r.select(`.${Uu}`).style("width", function(o) {
      const i = (Array.isArray(o.color) ? o.color : [o.color]).length, u = wu(getComputedStyle(this).getPropertyValue("--vis-legend-bullet-size")) || 9, d = t.bulletSize ? wu(t.bulletSize) : u, c = t.bulletSpacing;
      return `${u0(d, i, c)}px`;
    }).style("height", t.bulletSize).style("box-sizing", "content-box").call(qR, this.config, this._colorAccessor), a.append("span").attr("class", Wu).classed(t.labelClassName, !0).style("max-width", t.labelMaxWidth).style("font-size", t.labelFontSize), r.select(`.${Wu}`).text((o) => o.name), n.exit().remove();
  }
  _isItemClickable(t) {
    return t.pointer === void 0 ? !0 : t.pointer;
  }
  _onItemClick(t, n) {
    const { config: { onLegendItemClick: a } } = this, o = this.div.selectAll(`.${Cs}`).nodes().indexOf(t.currentTarget);
    a && a(n, o);
  }
  destroy() {
    this.element !== this._container && this.div.remove();
  }
}
f0.selectors = WR;
const p0 = Symbol("componentAccessorKey"), UR = Symbol("tooltipAccessorKey"), KR = Symbol("crosshairAccessorKey"), h0 = Symbol("axisAccessorKey"), jR = Symbol("annotationsAccessorKey");
function Nc(e, t) {
  return ha(e, t);
}
function tl(e) {
  const t = We(), n = t.attrs;
  return T(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((o) => {
      a[Ga(o)] = e[Ga(o)];
    }), { ...a, ...n };
  });
}
const YR = /* @__PURE__ */ _({
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
    clipPathExtend: {},
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
    const n = e, { data: a } = me(n), r = tl(n), o = E(), s = Wn({
      components: [],
      annotations: void 0,
      crosshair: void 0,
      tooltip: void 0,
      xAxis: void 0,
      yAxis: void 0
    }), i = E();
    return ee(a, () => {
      o.value && o.value.setData(a.value, !0);
    }), Ce(() => {
      var u;
      s.components.map((d) => d.config), (u = o.value) == null || u.updateContainer({ ...as(r.value), ...as(s) });
    }), de(() => {
      i.value && (o.value = new iI(i.value, { ...as(s) }, a.value));
    }), Ke(() => {
      var u;
      return (u = o.value) == null ? void 0 : u.destroy();
    }), At(p0, {
      data: a,
      update: (u) => s.components = [...s.components, u],
      destroy: () => {
        var u;
        return s.components = (u = s.components) == null ? void 0 : u.filter((d) => !d.isDestroyed());
      }
    }), At(h0, {
      data: a,
      update: (u) => s[`${u.config.type}Axis`] = u,
      destroy: (u) => {
        s[`${u}Axis`] = void 0;
      }
    }), At(KR, {
      data: a,
      update: (u) => s.crosshair = u,
      destroy: () => {
        s.crosshair = void 0;
      }
    }), At(UR, {
      data: a,
      update: (u) => s.tooltip = u,
      destroy: () => {
        s.tooltip = void 0;
      }
    }), At(jR, {
      data: a,
      update: (u) => s.annotations = u,
      destroy: () => {
        s.annotations = void 0;
      }
    }), t({
      component: o
    }), (u, d) => (g(), L("div", {
      "data-vis-xy-container": "",
      ref_key: "elRef",
      ref: i,
      class: "unovis-xy-container"
    }, [
      C(u.$slots, "default")
    ], 512));
  }
}), GR = { "data-vis-axis": "" }, v0 = /* @__PURE__ */ _({
  __name: "index",
  props: {
    position: {},
    type: {},
    fullSize: { type: Boolean },
    label: {},
    labelFontSize: {},
    labelMargin: {},
    labelTextFitMode: {},
    labelTextTrimType: {},
    labelColor: {},
    gridLine: { type: Boolean },
    tickLine: { type: Boolean },
    domainLine: { type: Boolean },
    minMaxTicksOnly: { type: Boolean },
    minMaxTicksOnlyShowGridLines: { type: Boolean },
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
    const n = Gn(h0), a = e, r = T(() => n.data.value ?? a.data), o = tl(a), s = E();
    return de(() => {
      re(() => {
        var i;
        s.value = new l0(o.value), (i = s.value) == null || i.setData(r.value), n.update(s.value);
      });
    }), Ke(() => {
      var i;
      (i = s.value) == null || i.destroy(), n.destroy(a.type);
    }), ee(o, (i, u) => {
      var d;
      Nc(i, u) || (d = s.value) == null || d.setConfig(o.value);
    }), ee(r, () => {
      var i;
      (i = s.value) == null || i.setData(r.value);
    }), t({
      component: s
    }), (i, u) => (g(), L("div", GR));
  }
}), XR = { "data-vis-component": "" }, JR = /* @__PURE__ */ _({
  __name: "index",
  props: {
    color: {},
    curveType: {},
    lineWidth: {},
    lineDashArray: {},
    fallbackValue: {},
    highlightOnHover: { type: Boolean },
    cursor: {},
    interpolateMissingData: { type: Boolean },
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
    const n = Gn(p0), a = e, r = T(() => n.data.value ?? a.data), o = tl(a), s = E();
    return de(() => {
      re(() => {
        var i;
        s.value = new Qi(o.value), (i = s.value) == null || i.setData(r.value), n.update(s.value);
      });
    }), Ke(() => {
      var i;
      (i = s.value) == null || i.destroy(), n.destroy();
    }), ee(o, (i, u) => {
      var d;
      Nc(i, u) || (d = s.value) == null || d.setConfig(o.value);
    }), ee(r, () => {
      var i;
      (i = s.value) == null || i.setData(r.value);
    }), t({
      component: s
    }), (i, u) => (g(), L("div", XR));
  }
}), ZR = /* @__PURE__ */ _({
  __name: "index",
  props: {
    items: {},
    labelClassName: {},
    onLegendItemClick: { type: Function },
    labelFontSize: {},
    labelMaxWidth: {},
    bulletSize: {},
    bulletSpacing: {},
    bulletShape: {},
    orientation: {},
    renderIntoProvidedDomNode: { type: Boolean },
    data: {}
  },
  setup(e, { expose: t }) {
    const n = e;
    T(() => n.data);
    const a = tl(n), r = E(), o = E();
    return de(() => {
      re(() => {
        o.value && (r.value = new f0(o.value, { ...a.value, renderIntoProvidedDomNode: !0 }));
      });
    }), Ke(() => {
      var s;
      (s = r.value) == null || s.destroy();
    }), ee(a, (s, i) => {
      var u;
      Nc(s, i) || (u = r.value) == null || u.update(a.value);
    }), t({
      component: r
    }), (s, i) => (g(), L("div", {
      "data-vis-bullet-legend": "",
      ref_key: "elRef",
      ref: o
    }, null, 512));
  }
});
(function() {
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".unovis-xy-container,.unovis-single-container{display:block;position:relative;width:100%}[data-vis-leaflet-map],[data-vis-leaflet-flow-map]{display:block;position:relative}[data-vis-bullet-legend],[data-vis-rolling-pin-legend]{display:block}")), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
const QR = /* @__PURE__ */ _({
  __name: "XAxis",
  props: {
    position: {},
    y: {},
    label: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(v0), B({ type: "x" }, t), null, 16));
  }
}), e5 = /* @__PURE__ */ _({
  __name: "YAxis",
  props: {
    position: {},
    x: {},
    label: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(v0), B({ type: "y" }, t), null, 16));
  }
}), t5 = /* @__PURE__ */ _({
  __name: "ChartProvider",
  props: {
    data: {}
  },
  setup(e) {
    return (t, n) => (g(), w(l(YR), { data: e.data }, {
      default: y(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["data"]));
  }
}), n5 = /* @__PURE__ */ _({
  __name: "Line",
  props: {
    x: {},
    lines: {},
    curveType: {},
    lineWidth: {},
    interpolateMissingData: { type: Boolean },
    fallbackValue: {}
  },
  setup(e) {
    const t = e, n = ["#007aff", "#ff9500", "#34c759", "#ff3b30", "#af52de"], a = t.lines.map((s) => s.y), r = (s, i) => {
      var u;
      return ((u = t.lines[i]) == null ? void 0 : u.color) ?? n[i % n.length];
    }, o = (s, i) => {
      var u;
      return ((u = t.lines[i]) == null ? void 0 : u.dashArray) ?? void 0;
    };
    return (s, i) => (g(), w(l(JR), {
      x: e.x,
      y: l(a),
      color: r,
      lineDashArray: o,
      curveType: e.curveType ?? l(Pe).Basis,
      lineWidth: e.lineWidth ?? 2,
      fallbackValue: e.fallbackValue,
      interpolateMissingData: e.interpolateMissingData
    }, null, 8, ["x", "y", "curveType", "lineWidth", "fallbackValue", "interpolateMissingData"]));
  }
}), a5 = { class: "size-full" }, K6 = /* @__PURE__ */ _({
  __name: "LineChart",
  props: {
    data: {},
    index: {},
    categories: {},
    colours: {},
    items: {}
  },
  setup(e) {
    const t = e, n = (r) => r[t.index], a = t.categories.map((r, o) => ({
      y: (s) => s[r],
      color: t.colours[o]
      // todo: how can we dynamically apply other props to pass per line?
    }));
    return (r, o) => (g(), L("div", a5, [
      O(l(t5), { data: e.data }, {
        default: y(() => [
          O(l(QR), {
            label: "X Axis",
            position: "bottom"
          }),
          O(l(e5), {
            label: "Y Axis",
            position: "left"
          }),
          O(l(n5), {
            x: n,
            lines: l(a),
            lineWidth: 3,
            interpolateMissingData: "",
            fallbackValue: void 0
          }, null, 8, ["lines"])
        ]),
        _: 1
      }, 8, ["data"]),
      e.items ? (g(), w(l(r5), {
        key: 0,
        items: e.items
      }, null, 8, ["items"])) : se("", !0)
    ]));
  }
}), r5 = /* @__PURE__ */ _({
  __name: "Legend",
  props: {
    items: {}
  },
  setup(e) {
    return (t, n) => (g(), w(l(ZR), J(Z(t.$props)), null, 16));
  }
}), o5 = { class: "my-auto text-slate-400 dark:text-slate-100" }, j6 = /* @__PURE__ */ _({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, n) => (g(), L("div", o5, " Showing " + ce(e.min) + " to " + ce(e.max) + " of " + ce(e.total) + " results ", 1));
  }
}), Y6 = /* @__PURE__ */ _({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(Lw), B(n.value, {
      class: l(V)("text-text flex size-9 items-center justify-center", t.class)
    }), {
      default: y(() => [
        C(a.$slots, "default", {}, () => [
          O(l(Tm))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G6 = /* @__PURE__ */ _({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(zw), J(Z(n.value)), {
      default: y(() => [
        O(l(Dn), {
          class: X(l(V)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            C(a.$slots, "default", { icon: l(Ak) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), X6 = /* @__PURE__ */ _({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(qw), J(Z(n.value)), {
      default: y(() => [
        O(l(Dn), {
          class: X(l(V)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            C(a.$slots, "default", { icon: l(Dk) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), J6 = /* @__PURE__ */ _({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(Uw), J(Z(n.value)), {
      default: y(() => [
        O(l(Dn), {
          class: X(l(V)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            C(a.$slots, "default", { icon: l(Wd) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), Z6 = /* @__PURE__ */ _({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(Kw), J(Z(n.value)), {
      default: y(() => [
        O(l(Dn), {
          class: X(l(V)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            C(a.$slots, "default", { icon: l(Tk) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), Q6 = /* @__PURE__ */ _({
  __name: "LumuixModeToggle",
  setup(e) {
    const t = nM({
      selector: "html"
    });
    return (n, a) => (g(), w(uA, {
      modelValue: l(t),
      "onUpdate:modelValue": a[0] || (a[0] = (r) => dt(t) ? t.value = r : null)
    }, {
      checked: y(() => [
        O(l(Ok), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      "not-checked": y(() => [
        O(l(Vk), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), eV = /* @__PURE__ */ _({
  __name: "CollapsibleTableRow",
  props: {
    row: {},
    headers: {},
    subRows: {},
    setOpenTo: { type: Boolean, default: !1 },
    class: {}
  },
  setup(e) {
    const t = e, n = E(t.setOpenTo), a = () => {
      n.value = !n.value;
    };
    return (r, o) => (g(), L(ue, null, [
      O(l(ho), {
        onClick: a,
        class: X(t.class)
      }, {
        default: y(() => [
          (g(!0), L(ue, null, Ae(e.headers, (s) => (g(), w(l(di), {
            key: s.value
          }, {
            default: y(() => [
              r.$slots[`cell_header_${s.value}`] ? C(r.$slots, `cell_header_${s.value}`, {
                key: 0,
                item: e.row,
                open: n.value
              }) : (g(), L(ue, { key: 1 }, [
                oe(ce(e.row[s.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          r.$slots.row_actions ? (g(), w(l(Ku), { key: 0 }, {
            default: y(() => [
              C(r.$slots, "row_actions", { item: e.row })
            ]),
            _: 3
          })) : se("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      n.value ? (g(!0), L(ue, { key: 0 }, Ae(e.subRows, (s, i) => (g(), w(l(ho), { key: i }, {
        default: y(() => [
          (g(!0), L(ue, null, Ae(e.headers, (u) => (g(), w(l(di), {
            key: u.value
          }, {
            default: y(() => [
              r.$slots[`subrow_cell_${u.value}`] ? C(r.$slots, `subrow_cell_${u.value}`, {
                key: 0,
                item: s,
                open: n.value
              }) : (g(), L(ue, { key: 1 }, [
                oe(ce("subrow_cell_" + u.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          r.$slots.sub_row_actions ? (g(), w(l(Ku), { key: 0 }, {
            default: y(() => [
              C(r.$slots, "sub_row_actions", {
                item: e.row,
                open: n.value
              })
            ]),
            _: 3
          })) : se("", !0)
        ]),
        _: 2
      }, 1024))), 128)) : se("", !0)
    ], 64));
  }
}), s5 = { class: "relative w-full overflow-auto" }, i5 = /* @__PURE__ */ _({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", s5, [
      _e("table", {
        class: X(l(V)("w-full caption-bottom text-sm", t.class))
      }, [
        C(n.$slots, "default")
      ], 2)
    ]));
  }
}), l5 = /* @__PURE__ */ _({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("tbody", {
      class: X(l(V)("[&_tr:last-child]:border-0", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), di = /* @__PURE__ */ _({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("td", {
      class: X(["text-text p-4 align-middle [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), u5 = /* @__PURE__ */ _({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("th", {
      class: X(
        l(V)(
          "text-heading h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
          t.class
        )
      )
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), d5 = /* @__PURE__ */ _({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("thead", {
      class: X(l(V)("[&_tr]:border-b", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), tV = /* @__PURE__ */ _({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("tfoot", {
      class: X(
        l(V)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 last:[&>tr]:border-b-0",
          t.class
        )
      )
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), ho = /* @__PURE__ */ _({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("tr", {
      class: X(
        l(V)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          t.class
        )
      )
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), Ku = /* @__PURE__ */ _({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("td", {
      class: X(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), c5 = /* @__PURE__ */ _({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("caption", {
      class: X(l(V)("text-sub-text mt-4 text-sm", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), f5 = { class: "flex items-center justify-center py-10" }, nV = /* @__PURE__ */ _({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(ho, null, {
      default: y(() => [
        O(di, B({
          class: l(V)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, n.value), {
          default: y(() => [
            _e("div", f5, [
              C(a.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), aV = /* @__PURE__ */ _({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (g(), w(l(i5), null, {
      default: y(() => [
        e.caption ? (g(), w(l(c5), { key: 0 }, {
          default: y(() => [
            oe(ce(e.caption), 1)
          ]),
          _: 1
        })) : se("", !0),
        O(l(d5), null, {
          default: y(() => [
            O(l(ho), null, {
              default: y(() => [
                (g(!0), L(ue, null, Ae(e.headers, (a, r) => (g(), w(l(u5), null, {
                  default: y(() => [
                    t.$slots[`header_${e.headers[r].value}`] ? C(t.$slots, `header_${e.headers[r].value}`, {
                      key: 0,
                      item: a
                    }) : (g(), L(ue, { key: 1 }, [
                      oe(ce(a.name), 1)
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
        O(l(l5), null, {
          default: y(() => [
            (g(!0), L(ue, null, Ae(e.rows, (a, r) => (g(), w(l(ho), { key: r }, {
              default: y(() => [
                (g(!0), L(ue, null, Ae(e.headers, (o) => (g(), w(l(di), {
                  key: o.value
                }, {
                  default: y(() => [
                    t.$slots[`cell_${o.value}`] ? C(t.$slots, `cell_${o.value}`, {
                      key: 0,
                      item: a
                    }) : (g(), L(ue, { key: 1 }, [
                      oe(ce(a[o.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                t.$slots.row_actions ? (g(), w(l(Ku), { key: 0 }, {
                  default: y(() => [
                    C(t.$slots, "row_actions", { item: a })
                  ]),
                  _: 2
                }, 1024)) : se("", !0)
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
}), p5 = { class: "text-text" }, rV = /* @__PURE__ */ _({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, a = () => n("close");
    return (r, o) => (g(), w(l(ag), { open: e.open }, {
      default: y(() => [
        O(l(hM), { "as-child": "" }, {
          default: y(() => [
            C(r.$slots, "trigger")
          ]),
          _: 3
        }),
        O(l(rg), {
          onClose: a,
          onEscapeKeyDown: a,
          onPointerDownOutside: a,
          class: X("max-w-" + e.size)
        }, {
          default: y(() => [
            O(l(vM), null, {
              default: y(() => [
                O(l(mM), null, {
                  default: y(() => {
                    var s;
                    return [
                      r.$slots.title ? C(r.$slots, "title", { key: 0 }) : (s = e.headerData) != null && s.title ? (g(), L(ue, { key: 1 }, [
                        oe(ce(e.headerData.title), 1)
                      ], 64)) : se("", !0)
                    ];
                  }),
                  _: 3
                }),
                O(l(gM), null, {
                  default: y(() => {
                    var s;
                    return [
                      r.$slots.description ? C(r.$slots, "description", { key: 0 }) : (s = e.headerData) != null && s.description ? (g(), L(ue, { key: 1 }, [
                        oe(ce(e.headerData.description), 1)
                      ], 64)) : se("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            _e("div", p5, [
              r.$slots.content ? C(r.$slots, "content", { key: 0 }) : C(r.$slots, "default", { key: 1 })
            ]),
            O(l(yM), null, {
              default: y(() => [
                C(r.$slots, "footer")
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
}), h5 = /* @__PURE__ */ _({
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
    const r = he(e, t);
    return (o, s) => (g(), w(l(b$), J(Z(l(r))), {
      default: y(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oV = /* @__PURE__ */ _({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(w$), B(l(a), {
      class: l(V)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-xs dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        t.class
      )
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), v5 = /* @__PURE__ */ _({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => {
      var r;
      return g(), w(ut((r = e.tab) != null && r.is ? e.tab.is : "a"), {
        href: e.tab.href,
        class: X([
          e.tab.active ? "text-primary bg-white hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          l(V)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            t.class
          )
        ])
      }, {
        default: y(() => {
          var o;
          return [
            (o = e.tab) != null && o.icon ? (g(), w(ut(e.tab.icon), {
              key: 0,
              class: "size-5"
            })) : se("", !0),
            oe(" " + ce(e.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), vh = /* @__PURE__ */ _({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(_$), B(n.value, {
      class: l(V)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        t.class
      )
    }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sV = /* @__PURE__ */ _({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(x$), B({
      class: l(V)(
        "ring-offset-whit mt-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        t.class
      )
    }, n.value), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), m5 = {}, g5 = { class: "text-text mt-2 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function y5(e, t) {
  return g(), L("div", g5, [
    C(e.$slots, "default")
  ]);
}
const b5 = /* @__PURE__ */ To(m5, [["render", y5]]), iV = /* @__PURE__ */ _({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(e) {
    const t = e, n = T(
      () => t.tabs.find((a) => a.active)
    );
    return (a, r) => (g(), w(l(h5), null, {
      default: y(() => [
        O(l(vh), { class: "hidden gap-2 md:block" }, {
          default: y(() => [
            (g(!0), L(ue, null, Ae(e.tabs, (o) => (g(), w(l(v5), {
              key: o.name,
              tab: o
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        O(l(vh), { class: "flex md:hidden" }, {
          default: y(() => [
            O(l(kM), null, {
              default: y(() => [
                O(l(TM), { "as-child": "" }, {
                  default: y(() => [
                    O(l(Dn), { variant: "secondary" }, {
                      default: y(() => {
                        var o;
                        return [
                          oe(ce(((o = n.value) == null ? void 0 : o.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                O(l(MM), { class: "w-full" }, {
                  default: y(() => [
                    (g(!0), L(ue, null, Ae(e.tabs, (o) => (g(), w(l(AM), B({
                      key: o.name
                    }, { ref_for: !0 }, o), {
                      default: y(() => [
                        oe(ce(o.name), 1)
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
        O(l(b5), null, {
          default: y(() => [
            C(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), _5 = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, x5 = /* @__PURE__ */ _({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = An(t, "class"), a = ka(n);
    return (r, o) => (g(), L("div", _5, [
      O(l(TT), B({ "data-slot": "navigation-menu-viewport" }, l(a), {
        class: l(V)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)]",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), lV = /* @__PURE__ */ _({
  __name: "NavigationMenu",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    orientation: {},
    delayDuration: {},
    skipDelayDuration: {},
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
    disablePointerLeaveClose: { type: Boolean },
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    viewport: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = An(n, "class", "viewport"), o = Tn(r, a);
    return (s, i) => (g(), w(l(iT), B({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, l(o), {
      class: l(V)("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", n.class)
    }), {
      default: y(() => [
        C(s.$slots, "default"),
        e.viewport ? (g(), w(x5, { key: 0 })) : se("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), uV = /* @__PURE__ */ _({
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = An(n, "class"), o = Tn(r, a);
    return (s, i) => (g(), w(l(mT), B({ "data-slot": "navigation-menu-content" }, l(o), {
      class: l(V)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        n.class
      )
    }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dV = /* @__PURE__ */ _({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = An(t, "class"), a = ka(n);
    return (r, o) => (g(), w(l(yT), B({ "data-slot": "navigation-menu-indicator" }, l(a), {
      class: l(V)("data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden", t.class)
    }), {
      default: y(() => [...o[0] || (o[0] = [
        _e("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), cV = /* @__PURE__ */ _({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = An(t, "class");
    return (a, r) => (g(), w(l(fT), B({ "data-slot": "navigation-menu-item" }, l(n), {
      class: l(V)("relative", t.class)
    }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fV = /* @__PURE__ */ _({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = An(n, "class"), o = Tn(r, a);
    return (s, i) => (g(), w(l(_T), B({ "data-slot": "navigation-menu-link" }, l(o), {
      class: l(V)("'data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4'", n.class)
    }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pV = /* @__PURE__ */ _({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = An(t, "class"), a = ka(n);
    return (r, o) => (g(), w(l(wT), B({ "data-slot": "navigation-menu-list" }, l(a), {
      class: l(V)(
        "group flex flex-1 list-none items-center justify-center gap-1",
        t.class
      )
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hV = /* @__PURE__ */ _({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = An(t, "class"), a = ka(n);
    return (r, o) => (g(), w(l(kT), B({ "data-slot": "navigation-menu-trigger" }, l(a), {
      class: l(V)(l(w5)(), "group", t.class)
    }), {
      default: y(() => [
        C(r.$slots, "default"),
        O(l(Di), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), w5 = Sn(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), C5 = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, vV = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(rC), B({
      class: l(V)("p-3", n.class)
    }, l(o)), {
      default: y(({ grid: u, weekDays: d }) => [
        O(l(D5), null, {
          default: y(() => [
            O(l(O5)),
            O(l(E5)),
            O(l(B5))
          ]),
          _: 1
        }),
        _e("div", C5, [
          (g(!0), L(ue, null, Ae(u, (c) => (g(), w(l(S5), {
            key: c.value.toString()
          }, {
            default: y(() => [
              O(l(M5), null, {
                default: y(() => [
                  O(l(mh), null, {
                    default: y(() => [
                      (g(!0), L(ue, null, Ae(d, (f) => (g(), w(l(A5), { key: f }, {
                        default: y(() => [
                          oe(ce(f), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              O(l(T5), null, {
                default: y(() => [
                  (g(!0), L(ue, null, Ae(c.rows, (f, p) => (g(), w(l(mh), {
                    key: `weekDate-${p}`,
                    class: "mt-2 w-full"
                  }, {
                    default: y(() => [
                      (g(!0), L(ue, null, Ae(f, (h) => (g(), w(l($5), {
                        key: h.toString(),
                        date: h
                      }, {
                        default: y(() => [
                          O(l(k5), {
                            day: h,
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
}), $5 = /* @__PURE__ */ _({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(lC), B({
      class: l(V)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        t.class
      )
    }, l(a)), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), k5 = /* @__PURE__ */ _({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(vC), B({
      class: l(V)(
        l(Ta)({ variant: "ghost" }),
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
    }, l(a)), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), S5 = /* @__PURE__ */ _({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(iC), B({
      class: l(V)("w-full border-collapse space-y-1", t.class)
    }, l(a)), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), T5 = /* @__PURE__ */ _({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(pC), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), M5 = /* @__PURE__ */ _({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(fC), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mh = /* @__PURE__ */ _({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(hC), B({
      class: l(V)("mt-2 flex w-full", t.class)
    }, l(a)), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), A5 = /* @__PURE__ */ _({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(uC), B({
      class: l(V)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(a)), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), D5 = /* @__PURE__ */ _({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(oC), B({
      class: l(V)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(a)), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), E5 = /* @__PURE__ */ _({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(sC), B({
      class: l(V)("text-text text-sm font-medium", t.class)
    }, l(a)), {
      default: y(({ headingValue: s }) => [
        C(r.$slots, "default", { headingValue: s }, () => [
          oe(ce(s), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), B5 = /* @__PURE__ */ _({
  __name: "RangeCalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(dC), B({
      class: l(V)(
        l(Ta)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: y(() => [
        C(r.$slots, "default", {}, () => [
          O(l(Ik), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), O5 = /* @__PURE__ */ _({
  __name: "RangeCalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: r, ...o } = t;
      return o;
    }), a = be(n);
    return (r, o) => (g(), w(l(cC), B({
      class: l(V)(
        l(Ta)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: y(() => [
        C(r.$slots, "default", {}, () => [
          O(l(Pk), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), P5 = /* @__PURE__ */ _({
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
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(YC), B(n.value, {
      class: l(V)(
        "bg-border relative shrink-0",
        t.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        t.class
      )
    }), {
      default: y(() => [
        t.label ? (g(), L("span", {
          key: 0,
          class: X(
            l(V)(
              "bg-background text-muted-foreground absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-xs",
              t.orientation === "vertical" ? "w-px px-1 py-2" : "h-px px-2 py-1"
            )
          )
        }, ce(t.label), 3)) : se("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), I5 = /* @__PURE__ */ _({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = he(e, t);
    return (o, s) => (g(), w(l(Av), J(Z(l(r))), {
      default: y(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mV = /* @__PURE__ */ _({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(wo), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), R5 = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, side: i, ...u } = n;
      return u;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(kd), null, {
      default: y(() => [
        O(l(Dd), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        O(l(Ad), B({
          class: l(V)(l(F5)({ side: e.side }), n.class)
        }, { ...l(o), ...s.$attrs }), {
          default: y(() => [
            C(s.$slots, "default"),
            O(l(wo), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none" }, {
              default: y(() => [
                O(l(Ei), { class: "text-muted-foreground h-4 w-4" })
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
}), gV = /* @__PURE__ */ _({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(Iv), B({
      class: l(V)("text-muted-foreground text-sm", t.class)
    }, n.value), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yV = /* @__PURE__ */ _({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(l(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), bV = /* @__PURE__ */ _({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(l(V)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), _V = /* @__PURE__ */ _({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(Pv), B({
      class: l(V)("text-foreground text-lg font-semibold", t.class)
    }, n.value), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xV = /* @__PURE__ */ _({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Dv), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), F5 = Sn(
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
), V5 = "sidebar:state", N5 = 60 * 60 * 24 * 7, L5 = "16rem", z5 = "18rem", q5 = "3rem", H5 = "b", [nl, W5] = ge("Sidebar"), U5 = { class: "flex h-full w-full flex-col" }, K5 = ["data-state", "data-collapsible", "data-variant", "data-side"], j5 = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border bg-sidebar text-sidebar-foreground flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, wV = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: n, state: a, openMobile: r, setOpenMobile: o } = nl();
    return (s, i) => e.collapsible === "none" ? (g(), L("div", B({
      key: 0,
      class: l(V)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
    }, s.$attrs), [
      C(s.$slots, "default")
    ], 16)) : l(n) ? (g(), w(l(I5), B({
      key: 1,
      open: l(r)
    }, s.$attrs, { "onUpdate:open": l(o) }), {
      default: y(() => [
        O(l(R5), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: Qt({
            "--sidebar-width": l(z5)
          })
        }, {
          default: y(() => [
            _e("div", U5, [
              C(s.$slots, "default", { state: l(a) })
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (g(), L("div", {
      key: 2,
      class: "group peer hidden md:block",
      "data-state": l(a),
      "data-collapsible": l(a) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      _e("div", {
        class: X(
          l(V)(
            "relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      _e("div", B({
        class: l(V)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, s.$attrs), [
        _e("div", j5, [
          C(s.$slots, "default", { state: l(a) })
        ])
      ], 16)
    ], 8, K5));
  }
}), CV = /* @__PURE__ */ _({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "content",
      class: X(
        l(V)(
          "bg-sidebar flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          t.class
        )
      )
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), $V = /* @__PURE__ */ _({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "footer",
      class: X(l(V)("flex flex-col gap-2 p-2", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), kV = /* @__PURE__ */ _({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "group",
      class: X(l(V)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), SV = /* @__PURE__ */ _({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), {
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: X(
        l(V)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), TV = /* @__PURE__ */ _({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "group-content",
      class: X(l(V)("w-full text-sm", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), MV = /* @__PURE__ */ _({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), {
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: X(
        l(V)(
          "ring-sidebar-ring text-sidebar-foreground/70 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          t.class
        )
      )
    }, {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), AV = /* @__PURE__ */ _({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "header",
      class: X(l(V)("flex flex-col gap-2 p-2", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), DV = /* @__PURE__ */ _({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(iA, {
      "data-sidebar": "input",
      class: X(
        l(V)(
          "focus-visible:ring-sidebar-ring bg-background h-8 w-full shadow-none focus-visible:ring-2",
          t.class
        )
      )
    }, {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), EV = /* @__PURE__ */ _({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("main", {
      class: X(
        l(V)(
          "bg-background relative flex min-h-svh flex-1 flex-col",
          "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
          t.class
        )
      )
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), BV = /* @__PURE__ */ _({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("ul", {
      "data-sidebar": "menu",
      class: X(l(V)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), OV = /* @__PURE__ */ _({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), {
      "data-sidebar": "menu-action",
      class: X(
        l(V)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground text-sidebar-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 md:after:hidden",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          e.showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
          t.class
        )
      ),
      as: e.as,
      "as-child": e.asChild
    }, {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), PV = /* @__PURE__ */ _({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "menu-badge",
      class: X(
        l(V)(
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
      C(n.$slots, "default")
    ], 2));
  }
}), Y5 = /* @__PURE__ */ _({
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
    const r = he(e, t);
    return (o, s) => (g(), w(l(z$), J(Z(l(r))), {
      default: y(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), G5 = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(U$), null, {
      default: y(() => [
        O(l(W$), B({ ...l(o), ...s.$attrs }, {
          class: l(V)(
            "border-border bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md",
            n.class
          )
        }), {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), IV = /* @__PURE__ */ _({
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
    return (n, a) => (g(), w(l(ym), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), X5 = /* @__PURE__ */ _({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(q$), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gh = /* @__PURE__ */ _({
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
    return (n, a) => (g(), w(l(W), B({
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: l(V)(l(Q5)({ variant: e.variant, size: e.size }), t.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), RV = /* @__PURE__ */ _({
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
    const t = e, { isMobile: n, state: a } = nl(), r = T(() => {
      const { tooltip: o, ...s } = t;
      return s;
    });
    return (o, s) => e.tooltip ? (g(), w(l(Y5), { key: 1 }, {
      default: y(() => [
        O(l(X5), { "as-child": "" }, {
          default: y(() => [
            O(gh, J(Z({ ...r.value, ...o.$attrs })), {
              default: y(() => [
                C(o.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        O(l(G5), {
          side: "right",
          align: "center",
          hidden: l(a) !== "collapsed" || l(n)
        }, {
          default: y(() => [
            typeof e.tooltip == "string" ? (g(), L(ue, { key: 0 }, [
              oe(ce(e.tooltip), 1)
            ], 64)) : (g(), w(ut(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (g(), w(gh, J(B({ key: 0 }, { ...r.value, ...o.$attrs })), {
      default: y(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), FV = /* @__PURE__ */ _({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("li", {
      "data-sidebar": "menu-item",
      class: X(l(V)("group/menu-item relative", t.class))
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), yh = /* @__PURE__ */ _({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(l(V)("bg-skeleton animate-pulse rounded-md", t.class))
    }, null, 2));
  }
}), VV = /* @__PURE__ */ _({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (a, r) => (g(), L("div", {
      "data-sidebar": "menu-skeleton",
      class: X(l(V)("flex h-8 items-center gap-2 rounded-md px-2", t.class))
    }, [
      e.showIcon ? (g(), w(yh, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : se("", !0),
      O(yh, {
        class: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: Qt({ "--skeleton-width": n.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), NV = /* @__PURE__ */ _({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("ul", {
      "data-sidebar": "menu-badge",
      class: X(
        l(V)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, [
      C(n.$slots, "default")
    ], 2));
  }
}), LV = /* @__PURE__ */ _({
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
    return (n, a) => (g(), w(l(W), {
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: X(
        l(V)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground text-sidebar-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          e.size === "sm" && "text-xs",
          e.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), J5 = {};
function Z5(e, t) {
  return g(), L("li", null, [
    C(e.$slots, "default")
  ]);
}
const zV = /* @__PURE__ */ To(J5, [["render", Z5]]), qV = /* @__PURE__ */ _({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = jm("(max-width: 768px)"), o = E(!1), s = /* @__PURE__ */ Xd(n, "open", a, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function i(f) {
      s.value = f, document.cookie = `${V5}=${s.value}; path=/; max-age=${N5}`;
    }
    function u(f) {
      o.value = f;
    }
    function d() {
      return r.value ? u(!o.value) : i(!s.value);
    }
    Ns("keydown", (f) => {
      f.key === H5 && (f.metaKey || f.ctrlKey) && (f.preventDefault(), d());
    });
    const c = T(() => s.value ? "expanded" : "collapsed");
    return W5({
      state: c,
      open: s,
      setOpen: i,
      isMobile: r,
      openMobile: o,
      setOpenMobile: u,
      toggleSidebar: d
    }), (f, p) => (g(), w(l(ym), { "delay-duration": 0 }, {
      default: y(() => [
        _e("div", B({
          style: {
            "--sidebar-width": l(L5),
            "--sidebar-width-icon": l(q5)
          },
          class: l(V)(
            "group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-auto",
            n.class
          )
        }, f.$attrs), [
          C(f.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), HV = /* @__PURE__ */ _({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: n } = nl();
    return (a, r) => (g(), L("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: X(
        l(V)(
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          t.class
        )
      ),
      onClick: r[0] || (r[0] = //@ts-ignore
      (...o) => l(n) && l(n)(...o))
    }, [
      C(a.$slots, "default")
    ], 2));
  }
}), WV = /* @__PURE__ */ _({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(P5, {
      "data-sidebar": "separator",
      class: X(l(V)("bg-sidebar-border mx-2 w-auto", t.class))
    }, {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), UV = /* @__PURE__ */ _({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: n } = nl();
    return (a, r) => (g(), w(Dn, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: X(l(V)("h-7 w-7", t.class)),
      onClick: l(n)
    }, {
      default: y(() => [
        O(l(Rk)),
        r[0] || (r[0] = _e("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Q5 = Sn(
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
), KV = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(i$), B({
      class: l(V)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        n.class
      )
    }, l(o)), {
      default: y(() => [
        O(l(d$), { class: "bg-accent relative h-2 w-full grow overflow-hidden rounded-full data-[orientation=vertical]:w-2" }, {
          default: y(() => [
            O(l(c$), { class: "bg-primary absolute h-full data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (g(!0), L(ue, null, Ae(e.modelValue, (u, d) => (g(), w(l(u$), {
          key: d,
          class: "border-primary bg-primary ring-offset-background focus-visible:ring-ring block size-5 rounded-full border-2 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), eF = 5, tF = 5e6, vn = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Vl = 0;
function nF() {
  return Vl = (Vl + 1) % Number.MAX_VALUE, Vl.toString();
}
const Nl = /* @__PURE__ */ new Map();
function bh(e) {
  if (Nl.has(e)) return;
  const t = setTimeout(() => {
    Nl.delete(e), Zr({
      type: vn.REMOVE_TOAST,
      toastId: e
    });
  }, tF);
  Nl.set(e, t);
}
const kt = E({
  toasts: []
});
function Zr(e) {
  switch (e.type) {
    case vn.ADD_TOAST:
      kt.value.toasts = [e.toast, ...kt.value.toasts].slice(0, eF);
      break;
    case vn.UPDATE_TOAST:
      kt.value.toasts = kt.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case vn.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? bh(t) : kt.value.toasts.forEach((n) => {
        bh(n.id);
      }), kt.value.toasts = kt.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case vn.REMOVE_TOAST:
      e.toastId === void 0 ? kt.value.toasts = [] : kt.value.toasts = kt.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function aF() {
  return {
    toasts: T(() => kt.value.toasts),
    toast: rF,
    dismiss: (e) => Zr({ type: vn.DISMISS_TOAST, toastId: e })
  };
}
function rF(e) {
  const t = nF(), n = (r) => Zr({
    type: vn.UPDATE_TOAST,
    toast: { ...r, id: t }
  }), a = () => Zr({ type: vn.DISMISS_TOAST, toastId: t });
  return Zr({
    type: vn.ADD_TOAST,
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (r) => {
        r || a();
      }
    }
  }), {
    id: t,
    dismiss: a,
    update: n
  };
}
const oF = { class: "flex gap-3" }, sF = { class: "grid gap-1" }, jV = /* @__PURE__ */ _({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = aF();
    return (n, a) => (g(), w(l(cF), null, {
      default: y(() => [
        (g(!0), L(ue, null, Ae(l(t), (r) => (g(), w(l(iF), B({
          key: r.id
        }, { ref_for: !0 }, r, { class: "my-1" }), {
          default: y(() => [
            _e("div", oF, [
              (g(), w(ut(r.icon), {
                class: X(l(V)(r.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              _e("div", sF, [
                r.title ? (g(), w(l(dF), { key: 0 }, {
                  default: y(() => [
                    oe(ce(r.title), 1)
                  ]),
                  _: 2
                }, 1024)) : se("", !0),
                r.description ? (g(), L(ue, { key: 1 }, [
                  k0(r.description) ? (g(), w(l(_h), { key: 0 }, {
                    default: y(() => [
                      (g(), w(ut(r.description)))
                    ]),
                    _: 2
                  }, 1024)) : (g(), w(l(_h), { key: 1 }, {
                    default: y(() => [
                      oe(ce(r.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : se("", !0),
                O(l(uF))
              ]),
              (g(), w(ut(r.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        O(l(lF))
      ]),
      _: 1
    }));
  }
}), iF = /* @__PURE__ */ _({
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
    const n = e, a = t, r = T(() => {
      const { class: s, ...i } = n;
      return i;
    }), o = he(r, a);
    return (s, i) => (g(), w(l(P$), B(l(o), {
      class: l(V)(l(fF)({ variant: e.variant }), n.class),
      "onUpdate:open": e.onOpenChange
    }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), lF = /* @__PURE__ */ _({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(R$), B(n.value, {
      class: l(V)(
        "fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), YV = /* @__PURE__ */ _({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(I$), J(Z(n.value)), {
      default: y(() => [
        O(l(Dn), {
          variant: e.variant,
          class: X(t.class)
        }, {
          default: y(() => [
            C(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["variant", "class"])
      ]),
      _: 3
    }, 16));
  }
}), uF = /* @__PURE__ */ _({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(mm), B(n.value, {
      class: l(V)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-50 focus:group-[.destructive]:ring-red-400 focus:group-[.destructive]:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        O(l(Ei), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), dF = /* @__PURE__ */ _({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(F$), B(n.value, {
      class: l(V)("text-sm font-semibold", t.class)
    }), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _h = /* @__PURE__ */ _({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = T(() => {
      const { class: a, ...r } = t;
      return r;
    });
    return (a, r) => (g(), w(l(V$), B({
      class: l(V)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cF = /* @__PURE__ */ _({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l($$), J(Z(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fF = Sn(
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
  xF as Accordion,
  wF as AccordionContent,
  CF as AccordionItem,
  $F as AccordionTrigger,
  kF as Alert,
  SF as AlertDescription,
  TF as AlertTitle,
  PF as Avatar,
  IF as AvatarFallback,
  RF as AvatarImage,
  FF as Badge,
  $r as Base,
  SM as BaseDropdownMenuItem,
  VF as Breadcrumb,
  NF as BreadcrumbEllipsis,
  LF as BreadcrumbItem,
  zF as BreadcrumbLink,
  qF as BreadcrumbList,
  HF as BreadcrumbPage,
  WF as BreadcrumbSeparator,
  Dn as Button,
  o6 as Calendar,
  Gm as CalendarCell,
  Xm as CalendarCellTrigger,
  Jm as CalendarGrid,
  Zm as CalendarGridBody,
  Qm as CalendarGridHead,
  Ls as CalendarGridRow,
  eg as CalendarHeadCell,
  tg as CalendarHeader,
  ng as CalendarHeading,
  sM as CalendarNextButton,
  iM as CalendarPrevButton,
  fM as CalendarWithSelect,
  UF as Card,
  GF as CardContent,
  YF as CardDescription,
  XF as CardFooter,
  KF as CardHeader,
  jF as CardTitle,
  IM as CharacterCount,
  t5 as ChartProvider,
  z6 as Checkbox,
  eV as CollapsibleTableRow,
  JF as Combobox,
  ZF as ComboboxAnchor,
  EF as ComboboxCancel,
  QF as ComboboxEmpty,
  e6 as ComboboxGroup,
  t6 as ComboboxInput,
  n6 as ComboboxItem,
  BF as ComboboxItemIndicator,
  a6 as ComboboxList,
  r6 as ComboboxSeparator,
  OF as ComboboxTrigger,
  pM as Command,
  f6 as CommandDialog,
  p6 as CommandEmpty,
  h6 as CommandGroup,
  v6 as CommandInput,
  m6 as CommandItem,
  g6 as CommandList,
  y6 as CommandSeparator,
  b6 as CommandShortcut,
  q6 as DatePicker,
  NM as Description,
  ag as Dialog,
  d6 as DialogClose,
  rg as DialogContent,
  gM as DialogDescription,
  yM as DialogFooter,
  vM as DialogHeader,
  c6 as DialogScrollContent,
  mM as DialogTitle,
  hM as DialogTrigger,
  _6 as DraggableArea,
  x6 as DraggableItem,
  kM as DropdownMenu,
  k6 as DropdownMenuCheckboxItem,
  MM as DropdownMenuContent,
  w6 as DropdownMenuGroup,
  $6 as DropdownMenuItem,
  A6 as DropdownMenuLabel,
  AM as DropdownMenuLink,
  Tw as DropdownMenuPortal,
  C6 as DropdownMenuRadioGroup,
  S6 as DropdownMenuRadioItem,
  M6 as DropdownMenuSeparator,
  T6 as DropdownMenuShortcut,
  D6 as DropdownMenuSub,
  B6 as DropdownMenuSubContent,
  E6 as DropdownMenuSubTrigger,
  TM as DropdownMenuTrigger,
  O6 as Empty,
  P6 as EmptyContent,
  I6 as EmptyDescription,
  R6 as EmptyHeader,
  F6 as EmptyMedia,
  V6 as EmptyTitle,
  zM as Error,
  N6 as Form,
  YM as FormElement,
  L6 as FormGrid,
  H6 as ImageUpload,
  iA as Input,
  Jd as Label,
  r5 as Legend,
  n5 as Line,
  K6 as LineChart,
  aV as LumuixDatatable,
  rV as LumuixModal,
  Q6 as LumuixModeToggle,
  iV as LumuixTabs,
  lV as NavigationMenu,
  uV as NavigationMenuContent,
  dV as NavigationMenuIndicator,
  cV as NavigationMenuItem,
  fV as NavigationMenuLink,
  pV as NavigationMenuList,
  hV as NavigationMenuTrigger,
  x5 as NavigationMenuViewport,
  yF as Pagination,
  j6 as PaginationDetails,
  Y6 as PaginationEllipsis,
  G6 as PaginationFirst,
  X6 as PaginationLast,
  bF as PaginationList,
  _F as PaginationListItem,
  J6 as PaginationNext,
  Z6 as PaginationPrev,
  QM as Popover,
  tA as PopoverContent,
  eA as PopoverTrigger,
  vV as RangeCalendar,
  $5 as RangeCalendarCell,
  k5 as RangeCalendarCellTrigger,
  S5 as RangeCalendarGrid,
  T5 as RangeCalendarGridBody,
  M5 as RangeCalendarGridHead,
  mh as RangeCalendarGridRow,
  A5 as RangeCalendarHeadCell,
  D5 as RangeCalendarHeader,
  E5 as RangeCalendarHeading,
  B5 as RangeCalendarNextButton,
  O5 as RangeCalendarPrevButton,
  W6 as Select,
  cu as SelectContent,
  s6 as SelectGroup,
  fu as SelectItem,
  i6 as SelectItemText,
  l6 as SelectLabel,
  lu as SelectRoot,
  dM as SelectScrollDownButton,
  uM as SelectScrollUpButton,
  u6 as SelectSeparator,
  du as SelectTrigger,
  uu as SelectValue,
  P5 as Separator,
  I5 as Sheet,
  mV as SheetClose,
  R5 as SheetContent,
  gV as SheetDescription,
  yV as SheetFooter,
  bV as SheetHeader,
  _V as SheetTitle,
  xV as SheetTrigger,
  wV as Sidebar,
  CV as SidebarContent,
  $V as SidebarFooter,
  kV as SidebarGroup,
  SV as SidebarGroupAction,
  TV as SidebarGroupContent,
  MV as SidebarGroupLabel,
  AV as SidebarHeader,
  DV as SidebarInput,
  EV as SidebarInset,
  BV as SidebarMenu,
  OV as SidebarMenuAction,
  PV as SidebarMenuBadge,
  RV as SidebarMenuButton,
  FV as SidebarMenuItem,
  VV as SidebarMenuSkeleton,
  NV as SidebarMenuSub,
  LV as SidebarMenuSubButton,
  zV as SidebarMenuSubItem,
  qV as SidebarProvider,
  HV as SidebarRail,
  WV as SidebarSeparator,
  UV as SidebarTrigger,
  yh as Skeleton,
  KV as Slider,
  b5 as TabBaseContent,
  i5 as Table,
  l5 as TableBody,
  c5 as TableCaption,
  di as TableCell,
  nV as TableEmpty,
  tV as TableFooter,
  u5 as TableHead,
  d5 as TableHeader,
  ho as TableRow,
  Ku as TableRowAction,
  sV as TabsContent,
  v5 as TabsItem,
  vh as TabsList,
  h5 as TabsRoot,
  oV as TabsTrigger,
  U6 as TextArea,
  iF as Toast,
  YV as ToastAction,
  uF as ToastClose,
  _h as ToastDescription,
  cF as ToastProvider,
  dF as ToastTitle,
  lF as ToastViewport,
  jV as Toaster,
  uA as Toggle,
  Y5 as Tooltip,
  G5 as TooltipContent,
  IV as TooltipProvider,
  X5 as TooltipTrigger,
  QR as XAxis,
  e5 as YAxis,
  Nk as alertVariants,
  aM as badgeVariants,
  Ta as buttonVariants,
  S0 as createContext,
  OM as emptyMediaVariants,
  w5 as navigationMenuTriggerStyle,
  F5 as sheetVariants,
  Q5 as sidebarMenuButtonVariants,
  rM as spinnerSize,
  rF as toast,
  fF as toastVariants,
  $M as useDraggable,
  nl as useSidebar,
  aF as useToast
};
